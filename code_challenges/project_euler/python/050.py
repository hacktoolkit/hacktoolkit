"""http://projecteuler.net/problem=050

Consecutive prime sum

The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.
The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
Which prime, below one-million, can be written as the sum of the most consecutive primes?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 997651

limit = 1000000

MAX_RANGE_SUM_PRIMES = []

primes = generate_primes(limit)
longest_so_far = 0

for i in xrange(len(primes)):
    max_length = len(primes) - 1 - i
    if max_length < longest_so_far:
        # this cannot be a candidate
        break
    elif sum(primes[i:i + longest_so_far]) > limit:
        # any candidates starting from term i would be too large
        break
    else:
        pass
    previous_range_sum = sum(primes[i:len(primes)])
    for j in xrange(len(primes) - 1, i + 1, -1):
        # start from the end and go backwards
        length = j - i
        if length < longest_so_far:
            # don't bother continuing, as this cannot be a candidate
            break
        # optimization: calculate max range sum, then incrementally subtract
        # range_sum = sum(primes[i:j + 1])
        if j == len(primes) - 1:
            range_sum = previous_range_sum
        else:
            range_sum = previous_range_sum - primes[j + 1]
        previous_range_sum = range_sum
        if range_sum < limit and is_prime(range_sum):
            # stop as soon as we find one that adds up to a prime
            subscore = {
                'i': i,
                'j': j,
                'start': primes[i],
                'end': primes[j],
                'length': length,
                'value': range_sum,
            }
            MAX_RANGE_SUM_PRIMES.append(subscore)
            longest_so_far = max(longest_so_far, length)
            break

results = sorted(MAX_RANGE_SUM_PRIMES, key=lambda subscore: subscore['length'], reverse=True)

best_result = results[0]

print best_result

answer = best_result['value']

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
