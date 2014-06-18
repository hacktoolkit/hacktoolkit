--title Explanation of level02_alt
--author bla@smashthestack.org
--date today
--newpage
--title level02_alt.c

This level has a similar theme, as do all _alt levels. However this tests your
knowledge of floating point numbers.

--beginoutput
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
--endoutput

--newpage
--title Explaining Source

--beginoutput
float a = (argc - 2)?: strtod(argv[1], 0);
--endoutput

I actually put this in this way, it's a bit of a hack to save code. It uses the ternary operator(?:).
Normally if you don't know it, it works like this (condition)? expression1 : expression2. And depending
on wether condition evaluates to true, the value of the expression is either expression1 or expression2.
However when you omit expression1. The expression evaluates to "condition" if condition is non-zero, or
expression2 otherwise. You could write this code more verbosely as follows

--beginoutput
float a;
if(argc - 2 != 0) // same as if(argc != 2)
   a = argc - 2;
else
   a = strtod(argv[1], 0);
--endoutput

--newpage
--title Explaining Source (2)
So if one argument is given it converts it to a floating point number and stores it in the variable
named "a". Else an irrelevant number based on the number of arguments is stored. 

--beginoutput
#define answer 3.141593
--endoutput

It's important to note, that when you define a constant in C in this way it defaults to double precision.
If you want to denote a single precision constant you would add the f suffix to it. For example 2.17f.
The variable "a" was declared as float. Which is single precision. More details on these formats can
be found in IEEE754.

--newpage
--title Converting to base 2.
Let's convert the number 3.141593 to base2 perfectly. we use a simple program
--beginoutput
#include <unistd.h>
#include <signal.h>
#include <stdio.h>

int main(int argc, char **argv) {

        long double x=2, val = 3.141593;
        for(;val != 0; x /= 2) {
                if(val >= x) {
                        printf("1");
                        val -= x;
                } else
                        printf("0");
        }

}
--endoutput

--newpage
--title Answer in Binary
--beginoutput
11.001001000011111101110000010110000101011110101111111
--endoutput
I added the decimal point in the correct place manually. We can however See that
we need 53 bits to perfectly represent the number in binary.
regardless of the number appearing to be so "short" in decimal. If we had used a number like
0.2 btw we would need infinite digits after the decimal point since you can't
perfectly represent 0.2 in binary. Just like you can't exactly write down 1/3rd
in decimal, but it's no problem in base3.
--newpage
--title Single Precision
Single Precision in IEEE754 uses 32bits. 
- You have 1 sign bit, 
- 8 bits for the exponent.
- 24 bits for the fraction

Hey that adds up to 33bits. Yes, one bit of the fraction is "hidden", since it's always 1. 
you can read more about it in the standard. But needless to say we can't exactly store
answer in single precision. Since 53bits don't fit in 32bits. Double precision we have 
exactly 53bits of fraction making it exact there. If you read the explanation of the
SIGFPE challenge, you'll notice that this way there is a +0 and -0.

--newpage
--title Printf says it's 3.141593
--beginoutput
printf("You provided the number %f which is too ", a);
--endoutput
It says you enterred 3141593 but halas it's not true, printf rounds the number
to fit it's format, if you replace it with this printf statement:
--beginoutput
printf("You provided the number %.40f which is too ", a);
--endoutput
you would get 
--beginoutput
You provided the number 3.1415929794311523437500000000000000000000 which is too low
--endoutput
So printf was lying, and this is why you can't ever get the single and double precision numbers to
be equal.
--newpage
--title Solution
however the IEEE754 encodes more than just numbers. It also encodes a few other special concepts. 
for example infinity. +INF and -INF. And also when NaN which stands for not a number. It can generate
out of calculations like 0.0 / 0.0. Dividing zero by zero is not defined. This "nullity"
thing is garbage ;-).

When comparing NaN to anything it always returns false. It isn't even equal to itself. This property
btw allows for easy checking in C code. if (a != a) // a was set to nan.

Which is the way to solve this challenge.
The strtod manpage should make this easy to find.

If code isn't aware of this it might be possible to trigger a DoS by making a loop condition never terminate.
Or other logic errors.
--newpage
--title Thanks for listening

This is only a first draft. If you still have questions you can ask them on irc.
If you don't have questions you are still welcome!

--right bla

