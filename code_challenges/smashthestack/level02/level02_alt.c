/* submitted by noname */

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>


#define answer 3.141593

void main(int argc, char **argv) {

	float a = (argc - 2)?: strtod(argv[1], 0);

        printf("You provided the number %f which is too ", a);


        if(a < answer)
                 puts("low");
        else if(a > answer)
                puts("high");
        else
                execl("/bin/sh", "sh", "-p", NULL);
}
