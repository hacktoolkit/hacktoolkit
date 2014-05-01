"""http://projecteuler.net/problem=016

Power digit sum

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 21000?

Solution by jontsai <hello@jontsai.com>
"""

from utils import *

POWER = 1000

n = 2 << (POWER - 1)

answer = sum_digits(n)

print answer
