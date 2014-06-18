#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {

	char buf[128];

	if(argc < 2) return 1;

	strcpy(buf, argv[1]);

	printf("%s\n", buf);	

	return 0;
}
