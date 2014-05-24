"""http://projecteuler.net/problem=097

Large non-Mersenne prime

The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2^6972593-1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2^p-1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433 x 2^7830457 + 1.

Find the last ten digits of this prime number.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

# too slow to calculate
#large_non_mersenne_prime = 28433 * 2**7830457 + 1

iterations = 7830457
base = 28433
multiplier = 2
num_digits = 10

result = base

for x in xrange(iterations):
    # just multiply the base by the multiplier for xiterations
    result = result * multiplier
    result %= 10 ** num_digits
        
answer = result + 1

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
