"""http://projecteuler.net/problem=148

Exploring Pascal's triangle

We can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:

1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1

However, if we check the first one hundred rows, we will find that only 2361 of the 5050 entries are not divisible by 7.

Find the number of entries which are not divisible by 7 in the first one billion (10^9) rows of Pascal's triangle.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

limit = 100
divisor = 7

not_divisible_count = 0

previous_row = []
for row in xrange(limit):
    next_row = []
    previous_row_length = row
    odd_row = is_odd(row + 1)
    # calculate midpoint, the number of items for half symmertry of this row of Pascal's triangle
    if odd_row:
        midpoint = int(row / 2) + 1
    else:
        midpoint = (row + 1) / 2
    for col in xrange(midpoint):
        # just build half of a triangle row
        if col == 0:
            value = 1
            next_row.append(1)
            if row == 0:
                not_divisible_count += 1
            else:
                not_divisible_count += 2
        elif col + 1 < midpoint:
            value = previous_row[col] + previous_row[col - 1]
            next_row.append(value)
            if value % divisor > 0:
                not_divisible_count += 2
        elif col + 1 == midpoint:
            if odd_row:
                value = previous_row[-1] + previous_row[-1]
                if value % divisor > 0:
                    not_divisible_count += 1
            else:
                value = previous_row[-1] + previous_row[-2]
                if value % divisor > 0:
                    not_divisible_count += 2
            next_row.append(value)
        else:
            pass
    previous_row = next_row

answer = not_divisible_count

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
