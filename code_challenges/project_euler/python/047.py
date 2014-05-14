# coding=utf-8

"""http://projecteuler.net/problem=047

Distinct primes factors

The first two consecutive numbers to have two distinct prime factors are:

14 = 2 x 7
15 = 3 x 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² x 7 x 23
645 = 3 x 5 x 43
646 = 2 x 17 x 19.

Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

target = 4

DISTINCT_PRIME_FACTORS_CACHE = {}

answer = None
n = 1
while answer is None:
    all_matched = True
    for i in xrange(target):
        k = n + i
        if k in DISTINCT_PRIME_FACTORS_CACHE:
            distinct_prime_factors = DISTINCT_PRIME_FACTORS_CACHE[k]
        else:
            distinct_prime_factors = list(set(factor(k)))
            DISTINCT_PRIME_FACTORS_CACHE[k] = distinct_prime_factors
        if len(distinct_prime_factors) == target:
            # do nothing
            pass
        else:
            all_matched = False
            break
    if all_matched:
        answer = n
        break
    n += 1

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
