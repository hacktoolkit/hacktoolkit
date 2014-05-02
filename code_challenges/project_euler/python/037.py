"""http://projecteuler.net/problem=037

Truncatable primes

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 748317

truncatable_primes = []

target = 11

primes = PRIMES

while len(truncatable_primes) < target:
    primes = generate_primes(2 * primes[-1])
    if not truncatable_primes:
        truncatable_primes = filter(is_truncatable_prime, primes)
    else:
        new_primes = filter(lambda x: x > truncatable_primes[-1], primes)
        truncatable_primes += filter(is_truncatable_prime, new_primes)

answer = sum(truncatable_primes[:11])

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
