"""http://projecteuler.net/problem=003

Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

Solution by jontsai <hello@jontsai.com>
"""
import math

from utils import *

n = 600851475143

prime_factors = prime_factorization(n)

answer = sorted(prime_factors)[-1]

print answer
