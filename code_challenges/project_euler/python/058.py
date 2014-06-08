"""http://projecteuler.net/problem=058

Spiral primes

Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ~= 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

# this problem is similar to 028
#
# observe that for generating a number spiral square as demonstrated here:
# dimension is always n x n, where n % 2 == 1 (n is always odd)
# (n - 1) / 2 = distance from the center to any corner or midpoint on the edges

target_ratio = 0.5
minimum_length = 7

n = 1
ratio = 1
diagonals = 0
diagonal_primes = 0

# pre-generate primes to cache lookups
primes = generate_primes(10**6)

while n < minimum_length or ratio > target_ratio:
    #diagonals = 1 + ((n - 1) / 2) * 4
    num_cells = n * n
    distance = n - 1
    bottom_right = num_cells
    if distance > 0:
        diagonals += 4
        bottom_left = bottom_right - distance
        top_left = bottom_left - distance
        top_right = top_left - distance
        # bottom right is always a square, so not a prime
        if is_prime(bottom_left):
            diagonal_primes += 1
        else:
            pass
        if is_prime(top_left):
            diagonal_primes += 1
        else:
            pass
        if is_prime(top_right):
            diagonal_primes += 1
        else:
            pass
    else:
        diagonals += 1

    ratio = float(diagonal_primes) / diagonals
    if (n - 1) % 20 == 0:
        print n, ratio
    if n >= minimum_length and ratio <= target_ratio:
        break
    else:
        n += 2

answer = n

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
