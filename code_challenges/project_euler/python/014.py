"""http://projecteuler.net/problem=014

Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:
n -> n/2 (n is even)
n -> 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 837799

target = 1000000

longest = 0
answer = None

for n in xrange(target):
    length = collatz_sequence_length(n)
    if length > longest:
        longest = length
        answer = n

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

