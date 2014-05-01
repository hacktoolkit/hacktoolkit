"""http://projecteuler.net/problem=006

Sum square difference

The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

Solution by jontsai <hello@jontsai.com>

Answer: 25164150
"""

from utils import *

lower = 1
upper = 100

sum_squares = sum([x**2 for x in xrange(lower, upper + 1)])

square_sum = range_sum(lower, upper) ** 2

answer = square_sum - sum_squares

print answer
