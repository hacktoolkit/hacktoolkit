"""http://projecteuler.net/problem=007

10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 104743

target = 10001

primes = PRIMES
while len(primes) < target:
    n = 2 * primes[-1]
    primes = generate_primes(n)

answer = primes[target - 1]

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
