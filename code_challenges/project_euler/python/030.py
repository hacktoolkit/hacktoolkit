"""http://projecteuler.net/problem=030

Digit fifth powers

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.
The sum of these numbers is 1634 + 8208 + 9474 = 19316.
Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 443839

# 9^5 = 59049
# digit_fifth_sum(999999) = 9^5 * 6 = 354294
# digit_fifth_sum(9999999) = 9^5 * 7 = 413343
# upon inspection, it seems that 9999999 (7-digits) would be an initial upper bound, since its digit_fifth_sum is only 6-digits
# next, 413343 would seem to be another upper bound
# however, digit_fifth_sum(399999) = 3^5 + 9^5 * 5 = 295488, the number that would yield the largest sum that does not exceed 413343, so that is another upper bound

limit = 295488

total = 0

CACHE = {}
for n in xrange(limit + 1):
    digits_n = sorted(digits(n), reverse=True)
    key = ''.join([str(digit) for digit in digits_n])
    if key in CACHE:
        digit_fifth_sum = CACHE[key]
    else:
        digit_fifth_sum = sum([digit ** 5 for digit in digits_n])
        CACHE[key] = digit_fifth_sum
    if len(digits_n) > 1 and digit_fifth_sum == n:
        print n
        total += n

answer = total

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
