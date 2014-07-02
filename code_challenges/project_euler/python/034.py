"""http://projecteuler.net/problem=034

Digit factorials

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
Find the sum of all numbers which are equal to the sum of the factorial of their digits.
Note: as 1! = 1 and 2! = 2 are not sums they are not included.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 40730

# http://en.wikipedia.org/wiki/Factorion

# lower bound is 10 because we need at least 2 digits
lower = 10
# 9! = 362880
# trivial upper bound is 7 digits, 9999999 because 7 * 9! is still 7 digits
# while the 8 digit number, 99999999,  8 * 9! is still 7 digits
# next, observe that the upper bound is 7 * 9! = 2540160
# 6 * 9! = 2177280
# only 7-digit number with six 9's not exceeding 7 * 9! is 1999999
# 1999999 is not a factorion by inspection
# the next highest sum would be given by 1999998
# this gives a third upper bound of 1! + 5 * 9! + 8! = 1854721
upper = 1854721
total = 0

digits_cache = {}

for n in xrange(lower, upper + 1):
    digits_n = sorted(digits(n), reverse=True)
    key = ''.join([str(digit) for digit in digits_n])
    if key in digits_cache:
        digit_fact_sum = digits_cache[key]
    else:
        digit_fact_sum = 0
        for digit in digits_n:
            digit_fact_sum += factorial(digit)
            if digit_fact_sum > n:
                break
    if digit_fact_sum == n:
        total += n

answer = total        

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
