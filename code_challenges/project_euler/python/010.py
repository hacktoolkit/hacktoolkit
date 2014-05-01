"""http://projecteuler.net/problem=010

Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

Solution by jontsai <hello@jontsai.com>

Answer: 142913828922
"""
from utils import *

target = 2000000

primes = generate_primes(target)

answer = sum(primes)

print answer
