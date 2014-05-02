"""http://projecteuler.net/problem=016

Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 1366

POWER = 1000

n = 2 << (POWER - 1)

answer = sum_digits(n)

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
