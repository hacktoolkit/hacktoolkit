"""http://projecteuler.net/problem=040

Champernowne's constant

An irrational decimal fraction is created by concatenating the positive integers:
0.123456789101112131415161718192021...
It can be seen that the 12th digit of the fractional part is 1.
If dn represents the nth digit of the fractional part, find the value of the following expression.
d1 x d10 x d100 x d1000 x d10000 x d100000 x d1000000

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 210

lower = 1
upper = 1000000

digits_buffer = ''

num_digits_seen = 0
power = 0

power_of_ten_digits = []

for n in xrange(lower, upper + 1):
    n_str = str(n)
    digits_buffer += n_str
    num_digits_seen += len(n_str)
    if num_digits_seen >= 10 ** power:
        power_of_ten_digits.append(int(digits_buffer[10 ** power - 1]))
        power += 1

print power_of_ten_digits

answer = list_product(power_of_ten_digits)

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

