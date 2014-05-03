"""http://projecteuler.net/problem=035

Circular primes

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
How many circular primes are there below one million?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 55

target = 1000000

primes = generate_primes(target)

circular_primes = filter(is_circular_prime, primes)

answer = len(circular_primes)

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
