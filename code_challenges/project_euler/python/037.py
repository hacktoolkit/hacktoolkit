"""http://projecteuler.net/problem=037

Truncatable primes

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.
Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

# truncatable_primes = [23, 37, 53, 73, 313, 317, 373, 797, 3137, 3797, 739397]
EXPECTED_ANSWER = 748317

truncatable_primes = []

target = 11

primes = PRIMES
last_prime_tested = 0
batch_size = 50000

while len(truncatable_primes) < target:
    primes = generate_primes(primes[-1] + batch_size)
    if not truncatable_primes:
        truncatable_primes = filter(is_truncatable_prime, primes)
        last_prime_tested = primes[-1]
    else:
        new_primes = filter(lambda x: x > last_prime_tested, primes)
        for prime in new_primes:
            if is_truncatable_prime(prime):
                truncatable_primes.append(prime)
                if len(truncatable_primes) >= target:
                    break
        last_prime_tested = primes[-1]
    print last_prime_tested
    print truncatable_primes

answer = sum(truncatable_primes[:target])

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
