"""http://projecteuler.net/problem=028

Number spiral diagonals

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
It can be verified that the sum of the numbers on the diagonals is 101.
What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 669171001

dimension = 1001

# observe that for generating a number spiral square as demonstrated here:
# dimension is always n x n, where n % 2 == 1 (n is always odd)
# (n - 1) / 2 = distance from the center to any corner or midpoint on the edges

total = 0

for n in xrange(1, dimension + 1, 2):
    num_cells = n * n
    distance = n - 1
    top_right = num_cells
    total += top_right
    if distance > 0:
        top_left = top_right - distance
        bottom_left = top_left - distance
        bottom_right = bottom_left - distance
        total += top_left + bottom_left + bottom_right

answer = total

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
