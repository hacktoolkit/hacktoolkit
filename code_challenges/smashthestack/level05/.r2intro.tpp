--title AN INTRODUCTION TO RADARE2
--title io.smashthestack.org edition
--author l0gic, bla




--newpage
--title What is radare2?
radare2 is an open source Reverse engeneering framework. Hence it at least provides:
* Debugger
* Disassembler

However radare also offers a lot more. In fact there are so many features 
that it makes the project a bit daunting to newcomers. In this presentation
we'll try to showcase a small subset of features. Which should get you
started using it while solving some levels on IO.

However, radare2 is still a work in progress, so you shouldn't feel obliged to 
use it. There is also a lot of value in using the standard toolchain. Which 
although less feature rich is pretty solid, and omni present.

In fact if this is your first wargame ever, you probably want to use the standard
tools.

If after reading through this presentation you are looking for more information,
I recommend #radare on freenode and the talks section on radare.org,
since the documentation is for radare1, which is incompatible with radare2.

If you want to learn more about radare1, reading phrack issue 66 and the official
documentation are strongly encouraged.






--newpage
--title Common Tasks(hashing)
When solving wargames, and reverse engineering, there are a couple of tasks that you'll have 
to do often. In the next few slides we'll go over several of these, and show how the radare2
framework can be used to do these tasks.

* Hashing a file or string
You'll want to check the integrity of files, or hash strings in a variety of situations.
Conventional way:
--beginoutput
$ md5sum filename
$ sha1sum filename
$ sha256sum filename
$ echo -n "test" | md5sum
--endoutput

Radare way:
--beginoutput
$ rahash2 -a md5,sha1,sha256 /bin/ls
$ rahash2 -a md5,sha1,sha256 -s "test"
--endoutput





--newpage
--title Common Tasks(base conversion)
Another thing that you'll be doing more than you'd like to admit is base conversions.
translating decimal numbers in to hexadecimal and vice versa.
Some conventional ways:
--beginoutput
$ printf "%08x" 55
$ echo "obase=16;55" |bc
$ echo $((0xaaaa))
--endoutput

radare2 way:
--beginoutput
$ rax2 55
$ rax2 0x55
--endoutput

Hexediting a file on the other hand, we could do conventionally (using a part of vim)
--beginoutput
$ xxd filename > hexdump
#edit the hexdump file with your preferred editor
$ xxd -r hexdump > newfile
--endoutput
Radare offers a similar interface with rax2/rax2 -s.






--newpage
--title Common Tasks(Commandline (dis)assembler)
We'll also often want to assemble/disassemble a few bytes, right at the commandline. For
this radare2 offers rasm2. It offers support for several architectures, but we'll only
look at x86, and both at&t and intel syntax.

Conventional way:
--beginoutput
$ nasm filename
$ echo "HELLO" |ndisasm -u -
--endoutput

Radare way:
--beginoutput
$ rasm2 -d "41414c"
$ rasm2 -a x86.nasm -
mov eax, [esp+0x1c]
8b44241c
--endoutput



--newpage
--title Common Tasks(binary diff)
We're all familiar with diff to check for differences in text files. When however we want to 
look for differences in binary files we already need some bash foo. The standard "cmp" tool
is probably the least usable tool ever.

When we create two similar files
--beginoutput
if(a == b)
  printf("Nope.\n");
else
  printf("Everything's ok :)\n");
--endoutput
--beginoutput
if(a != b)
  printf("Nope.\n");
else
  printf("Everything's ok :)\n");
--endoutput

We could look for differences in the resulting binaries.
Conventional way:
--beginoutput
diff -urpN <(od -tx1 -v -w1 file1) <(od -tx1 -v -w1 file2)
--endoutput

radare2 way:
--beginoutput
$ radiff2 1 2
0x0000040d 75 => 74 0x0000040d
0x000010ab 31 => 32 0x000010ab
--endoutput
The output is [relative address to baseaddr] [orig byte] => [changed byte] [relative address to baseaddr]




--newpage
--title Common Tasks(Extract information from binaries)
First step in exploiting a binary is understanding it, hence extracting
usable information is going to go a long way. For example the imported functions and the
text strings a program contain often reveal a lot about its functionality and intentions.

Conventional way:
--beginoutput
readelf -a filename
objdump -x filename
strings filename
nm filename
--endoutput

radare way
--beginoutput
$ rabin2 -z a.out 
[strings]
address=0x08048924 offset=0x00000924 ordinal=000 size=39 section=.rodata string=I'm not accepting any arguments, sorry.
address=0x0804894c offset=0x0000094c ordinal=001 size=6 section=.rodata string=FIXME!
address=0x08048954 offset=0x00000954 ordinal=002 size=21 section=.rodata string=Looks like it's ok :)
address=0x0804896a offset=0x0000096a ordinal=003 size=17 section=.rodata string=Try readelf -h %s
--endoutput






--newpage
--title A cool thing: Relocatable compiler: rarc2
This is a compiler. It compiles a custom language which is basically a cross
between C and assembler. However the output it produces has no dependencies, and
is position independent. And hence could be used as shellcode (if your shellcode
isn't subject to other limitations.) So this could be a cool way to create more 
complex shellcode without learning the entire x86 instruction set first.

--beginoutput
$ echo 'main@global(,64){printf("hello world\n");}' | rarc2 -s > hello.S
$ gcc hello.S
$ ./a.out
hello world
--endoutput

You'll probably not use it too much, but it's still cool:).

--newpage




--title Main application: r2
* Main binary
* Interface for all subsystems
* Provides
* * Visual debugger interface
* * Visual disassembler
* * Shell

If you're anything like me you will not use this too much though. Especially on IO. However
do check it out on your local system.

--newpage
--title radare1debugger
Well we have a bit of a permission issue with radare2's debugger, but here's an example radare1 debugger session.
--beginoutput
level5@io:/levels$ radare -d /levels/level05
argv = [ '/levels/level05', ]
Program '/levels/level05' loaded.
PID = 1957
open debugger ro /levels/level05
4 imports added
34 symbols added
34 sections added
[0x0061C810]> !cont sym.main
Continue until ( sym.main) = 0x080483b4
pre-Breakpoint restored 0061c810
HW breakpoint hit!
debug_dispatch_wait: RET = 0 WS(event)=0 INT3_EVENT=2 INT_EVENT=3 CLONE_EVENT=6
=== cont: tid: 1957 event: 0, signal: 5 (SIGTRAP). stop at 0x080483b4
pre-Breakpoint restored 080483b4
[0x0061C810]> pd 10
                0x0061c810,   0       oeip: 89e0            mov eax, esp
                0x0061c812    0             e829020000      call 0x61ca40  ; 1 = 0x0061ca40
                0x0061c817    0             89c7            mov edi, eax
                0x0061c819    0             e8e2ffffff      call 0x61c800  ; 2 = 0x0061c800
                0x0061c81e    0             81c3d6a70100    add ebx, 0x1a7d6
                0x0061c824,   0             8b8300ffffff    mov eax, [ebx-0x100]
                0x0061c82a   -8_            5a              pop edx
                0x0061c82b   -8             8d2484          lea esp, [esp+eax*4]
                0x0061c82e   -8             29c2            sub edx, eax
                0x0061c830,   0_            52              push edx
--endoutput

--newpage
--title Thanks for listening
Thanks, for reading through this. Feel free to point out inaccuracies or suggest additions in our irc channel.


