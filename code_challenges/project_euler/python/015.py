"""http://projecteuler.net/problem=015

Lattice paths

Starting in the top left corner of a 2x2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20x20 grid?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 137846528820

rows = 20
cols = 20

LATTICE_MEMO = {}

def lattice_paths(rows, cols):
    """Finds the number of paths through a lattice with rows and cols
    """
    if rows == 0 and cols == 0:
        num_paths = 0
    elif rows == 0 or cols == 0:
        num_paths = 1
    else:
        if not LATTICE_MEMO.get(rows):
            LATTICE_MEMO[rows] = {}
        if not LATTICE_MEMO[rows].get(cols):
            num_paths = lattice_paths(rows - 1, cols) + lattice_paths(rows, cols - 1)
            LATTICE_MEMO[rows][cols] = num_paths
        else:
            num_paths = LATTICE_MEMO[rows][cols]
    return num_paths

answer = lattice_paths(rows, cols)

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

