"""
Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

limit = 1000
lower = 10

prime_addends = [1, 3, 7, 9, 13, 27,]

total = 0

# n * n must be even, otherwise the sums would not be prime
# therefore, n must be even
for n in xrange(lower, limit, 2):
    n_squared = n * n
    all_primes = True
    for addend in prime_addends:
        if not is_prime(n_squared + addend):
            all_primes = False
            break
        else:
            pass
    if all_primes:
        total += n
    else:
        pass

answer = total

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
