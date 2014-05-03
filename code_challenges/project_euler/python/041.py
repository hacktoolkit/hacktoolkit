"""http://projecteuler.net/problem=041

Pandigital prime

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
What is the largest n-digit pandigital prime that exists?

Solution by jontsai <hello@jontsai.com>
"""

from utils import *

EXPECTED_ANSWER = 7652413

# largest n-digit pandigital prime is a 9-digit number

# the largest 9 digit pandigital number is 987654321
# however, the sum of the digits [1, 9] is divisible by 3
# the next largest pandigital number is 87654321
# the sum of the digits [1, 8] is also divisible by 3
target = 7654321

primes = generate_primes(target)

answer = None
for i in xrange(1, len(primes)):
    prime = primes[-i]
    if is_pandigital(prime):
        answer = prime
        break

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
