"""http://projecteuler.net/problem=049

Prime permutations

The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.
There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.
What 12-digit number do you form by concatenating the three terms in this sequence?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

existing = 1487

lower = 1000
upper = 9999

primes = generate_primes(upper)
four_digit_primes = filter(lambda x: lower <= x <= upper, primes)

primes_seen = {}

all_prime_permutations = []

answer = None

for prime in primes:
    # find all 4-digit prime permutations in the set
    permutations_of_prime = filter(lambda x: x >= lower, prime_permutations(prime))
    subseries = arithmetic_series_subset(permutations_of_prime)
    if len(subseries) >= 3 and subseries[0] != existing:
        answer = ''.join([str(n) for n in subseries])
        break

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
