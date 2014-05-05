"""http://projecteuler.net/problem=048

Self powers

The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
Find the last ten digits of the series, 1^ + 2^2 + 3^3 + ... + 1000^1000.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 9110846700

target = 1000
digits = 10

total = 0

for n in xrange(1, target + 1):
    power = n ** n % 10 ** digits
    total += power
    # truncate the total to keep only the last 10 digits
    total %= 10 ** digits

answer = total

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

