"""http://projecteuler.net/problem=020

Factorial digit sum

n! means n  (n  1)  ...  3  2  1
For example, 10! = 10  9  ...  3  2  1 = 3628800,and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
Find the sum of the digits in the number 100!

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 648

n = 100

answer = sum_digits(factorial(n))

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
