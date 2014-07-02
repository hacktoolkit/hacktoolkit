"""http://projecteuler.net/problem=026

Reciprocal cycles

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2 = 0.5

1/3 = 0.(3)

1/4 = 0.25

1/5 = 0.2

1/6 = 0.1(6)

1/7 = 0.(142857)

1/8 = 0.125

1/9 = 0.(1)

1/10 = 0.1

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 983

limit = 1000

def find_long_division_recurring_cycle(numerator, denominator):
    """Perform long division for a proper fraction
    (Requires numerator < denominator)
    """
    quotient_digits = []
    cycle_detected = False
    remainder = numerator
    remainder_digits = {}
    while numerator != 0 and not cycle_detected:
        while numerator < denominator and numerator != 0:
            numerator = numerator * 10
            quotient_digits.append(0)
        quotient = numerator / denominator
        if remainder in remainder_digits:
            cycle_detected = True
            break
        else:
            remainder_digits[remainder] = quotient
        quotient_digits.append(quotient)
        remainder = numerator % denominator
        numerator = remainder * 10

    if quotient_digits[0] == 0:
        formatted = '0.'
    else:
        formatted = '1'
    cycle_started = False
    cycle_digits = []
    for digit in quotient_digits[1:]:
        if cycle_detected and not cycle_started and remainder_digits[remainder] == digit:
            formatted += '('
            cycle_started = True
        else:
            pass
        if cycle_started:
            cycle_digits.append(digit)
        formatted += str(digit)
    if cycle_detected:
        formatted += ')'
    else:
        pass
    return (formatted, quotient_digits, cycle_digits,)

longest_so_far = 0
max_length = 0

for d in xrange(1, limit):
    (formatted, quotient_digits, cycle_digits,) = find_long_division_recurring_cycle(1, d)
    cycle_length = len(cycle_digits)
    if cycle_length > max_length:
        max_length = cycle_length
        longest_so_far = d
    print '1/%d = %s; cycle length = %d' % (d, formatted, cycle_length,)

answer = longest_so_far

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
