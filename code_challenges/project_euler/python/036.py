"""http://projecteuler.net/problem=036

Double-base palindromes

The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
(Please note that the palindromic number, in either base, may not include leading zeros.)

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 872187

target = 1000000

summation = 0
# odd numbers only, since even numbers end in 0 in binary
for n in xrange(1, target, 2):
    if is_palindromic(n) and is_palindromic(bin(n)[2:]):
        summation += n

answer = summation

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
