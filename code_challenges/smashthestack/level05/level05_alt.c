//don't get trapped, there's no need
//level by bla
#include <sys/mman.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define LOADERSIZE (232 + 16)
void* getASLRregion(int size, int flags);
void switchcontext(char* newstack, char* code);

int main(int argc, char* argv[], char* env[])
{
	char *newcode, *newstack;

	//allocate memory at random addresses
	newstack = getASLRregion(64 * 1024, PROT_READ | PROT_WRITE );
	newcode =  getASLRregion(64 * 1024, PROT_READ | PROT_WRITE | PROT_EXEC);

	if(argc > 1)
	if(!strchr(argv[1], 0xcd))
	if(!strchr(argv[1], 0xe8))
	if(!strstr(argv[1], "\x0F\x34"))
	if(!strchr(argv[1], 0xdb)) {
		//prepare new code section, leaving some space for a loader
		strncpy(newcode + LOADERSIZE, argv[1], 1000);
		
		//start executing using a new stack and code section.
		switchcontext(newstack + 64 * 1024, newcode);
	}
	return 0;
}




/*************************************************************************************************************************/
/* HALT! The code below only provides a controllable aslr/noexec for this challenge, there's no need to waste time on it */
/*************************************************************************************************************************/
void __attribute__((constructor))initializePRNG(){int seed;FILE*devrand=fopen("/dev/random","r");if(devrand==0)exit(-1);
if(fread(&seed, 4, 1, devrand) != 1)exit(-1);fclose(devrand);srand(seed);}unsigned int loader[100]={0xe899c031,0};void*
getASLRregion(int size, int flags){int tries=1000,hint,res;while(tries--){hint=rand()<<12;res=(int)mmap((void*)hint,size
+4096,flags,MAP_PRIVATE|MAP_ANONYMOUS,0,0);if(hint==res){loader[++loader[1]+1]=hint;return (void*)(res+(rand()&0xffc));}
if(munmap((void*)res,size+4096))exit(-1);}exit(-1);}void switchcontext(char*newstack,char*code){loader[1]<<=2;memcpy(code
,loader,loader[1]+8);memcpy(code+loader[1]+8,"\x68\x61\x70\x73\x00\x68\x6c\x66\x2f\x6d\x68\x63\x2f\x73\x65\x68\x2f\x70"
"\x72\x6f\x89\xe3\x89\xc1\xb0\x05\xcd\x80\x81\xc4\x10\x00\x00\x00\x85\xc0\x0f\x88\x97\x00\x00\x00\x50\x89\xe5\x31\xc9\x31"
"\xff\xc1\xe7\x04\x0f\xb6\xc9\x09\xcf\xe8\x73\x00\x00\x00\x85\xc0\x0f\x84\x80\x00\x00\x00\x80\xf9\x2d\x74\x10\x80\xe9\x30"
"\x80\xf9\x09\x76\xde\x80\xe9\x27\xe9\xd6\xff\xff\xff\x8b\x75\x04\xad\x39\xf8\x74\x3b\x85\xc0\x75\xf7\x57\x31\xc9\x31\xff"
"\xc1\xe7\x04\x0f\xb6\xc9\x09\xcf\xe8\x38\x00\x00\x00\x85\xc0\x74\x49\x80\xf9\x20\x74\x10\x80\xe9\x30\x80\xf9\x09\x76\xe2"
"\x80\xe9\x27\xe9\xda\xff\xff\xff\x5b\x89\xf9\x29\xd9\x31\xc0\x99\xb0\x7d\xcd\x80\xe8\x0e\x00\x00\x00\x85\xc0\x74\x1f\x80"
"\xf9\x0a\x75\xf2\xe9\x7c\xff\xff\xff\x51\x89\xe1\x31\xc0\x99\xb0\x03\x42\x8b\x5d\x00\xcd\x80\x59\xc3\x31\xc0\x40\xcd\x80"
"\x31\xc0\xb0\x06\x5b\xcd\x80\x31\xc0\x5b\x31\xc9\xb1\x10\xfd\x89\xe7\xf3\xab\xfc\x8d\x7b\xf8\xb1\x3d\x99\x31\xdb\x31\xf6"
"\xf3\xab\x31\xff",LOADERSIZE-16);asm("mov %0, %%esp\nmov %1,%%eax\njmp *%%eax"::"r"(newstack-4),"r"(code):"eax");}

