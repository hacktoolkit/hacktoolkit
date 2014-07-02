"""http://projecteuler.net/problem=053

Combinatoric selections

There are exactly ten ways of selecting three from five, 12345:
123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3 = 10.

In general,

nCr = n!/(r!(n-r)!), where r <= n, n! = nx(n-1)x...x3x2x1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

How many, not necessarily distinct, values of nCr, for 1 <= n <= 100, are greater than one-million?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

lower = 1
upper = 100

count = 0

for n in xrange(lower, upper + 1):
    for r in xrange(1, n + 1):
        ncr = factorial(n) / (factorial(r) * factorial(n - r))
        if ncr > 1000000:
            count += 1

answer = count

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
