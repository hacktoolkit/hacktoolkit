"""http://projecteuler.net/problem=043

Sub-string divisibility

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.
Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17

Find the sum of all 0 to 9 pandigital numbers with this property.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 16695334890

pandigitals = permutations('1234567890')
substring_length = 3
primes = [2, 3, 5, 7, 11, 13, 17,]

total = 0

for pandigital in pandigitals:
    divisible_by_primes = True
    for i in xrange(0, len(pandigital) - substring_length):
        n = int(pandigital[i + 1:i + substring_length + 1])
        if n % primes[i] > 0:
            divisible_by_primes = False
            break
    if divisible_by_primes:
        total += int(pandigital)

answer = total

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
