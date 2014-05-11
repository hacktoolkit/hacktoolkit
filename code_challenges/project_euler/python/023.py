"""http://projecteuler.net/problem=023

Non-abundant sums

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 4179871

limit = 28123

total = 0

ABUNDANT_NUMBERS = {}

for n in xrange(1, limit):
    if is_abundant_number(n):
        ABUNDANT_NUMBERS[n] = True
    has_abundant_sum = False
    for k in ABUNDANT_NUMBERS.keys():
        if n - k in ABUNDANT_NUMBERS:
            has_abundant_sum = True
            break
    if not has_abundant_sum:
        total += n

answer = total

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

