"""http://projecteuler.net/problem=007

10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?

Solution by jontsai <hello@jontsai.com>

Answer: 104743
"""

from utils import *

target = 10001

primes = PRIMES
while len(primes) < target:
    primes = generate_primes(2 * primes[-1])

answer = primes[target - 1]

print answer
