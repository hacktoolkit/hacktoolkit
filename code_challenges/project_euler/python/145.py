"""http://projecteuler.net/problem=145

How many reversible numbers are there below one-billion?

Some positive integers n have the property that the sum [ n + reverse(n) ] consists entirely of odd (decimal) digits. For instance, 36 + 63 = 99 and 409 + 904 = 1313. We will call such numbers reversible; so 36, 63, 409, and 904 are reversible. Leading zeroes are not allowed in either n or reverse(n).

There are 120 reversible numbers below one-thousand.

How many reversible numbers are there below one-billion (10^9)?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

limit = 10**3

reversible_count = 0

reversible_dict = {}

for n in xrange(1, limit + 1):
    if n % 10**6 == 0:
        print n
    if is_reversible(n):

        reversible_count += 1

answer = reversible_count

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
