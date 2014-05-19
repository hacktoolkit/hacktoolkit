"""http://projecteuler.net/problem=052

Permuted multiples

It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

answer = None

def sorted_digits(n):
    sorted_digits_n = sorted(digits(n))
    return sorted_digits_n

n = 1
while answer is None:
    digits_n = sorted_digits(n)
    if digits_n == sorted_digits(n * 2) == sorted_digits(n * 3) == sorted_digits(n * 4) == sorted_digits(n * 5) == sorted_digits(n * 6):
        answer = n
        break
    n += 1

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

