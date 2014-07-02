"""http://projecteuler.net/problem=067

Maximum path sum II

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
3
7 4
2 4 6
8 5 9 3
That is, 3 + 7 + 4 + 9 = 23.
Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.
NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 altogether! If you could check one trillion (1012) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 7273

filename = 'triangle.txt'
f = open(filename, 'r')
input = ' '.join(f.readlines())

pyramid = [int(n) for n in input.split()]
num_rows = int(quadratic(1, 1, -2 * len(pyramid)))

def get_pyramid_index(row, col):
    """Get a cell index from the pyramid array
    row 0 = top row
    col 0 = left-most column
    """
    row_offset = (row * (row + 1)) / 2
    index = row_offset + col
    return index

# the algorithm is to start from the bottom row, and rewrite is as you go up, as follows
# starting from the second to last row, replace the number in each column with sum of that number and the max of the two numbers below it

for row in xrange(num_rows - 2, -1, -1):
    for col in xrange(row + 1):
        cell = get_pyramid_index(row, col)
        left_child = get_pyramid_index(row + 1, col)
        right_child = get_pyramid_index(row + 1, col + 1)
        pyramid[cell] = pyramid[cell] + max(pyramid[left_child], pyramid[right_child])

answer = pyramid[0]

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

