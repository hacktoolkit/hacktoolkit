"""http://projecteuler.net/problem=039

Integer right triangles

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
{20,48,52}, {24,45,51}, {30,40,50}
For which value of p <= 1000, is the number of solutions maximised?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 840

# right angle triangle: a^2 + b^2 = c^2
# integral length sides = lengths of sides are integers, not decimals

# Basic Equations
#
# a^2 + b^2 = c^2 (Pythagorean theorem; definition of right triangle)
# p = a + b + c (a polygon's sides must add up to the perimter)
# a + b > c (definition of triangle, where a, b, c are any edges)
#
# Derived Equations
#
# c = sqrt(a^2 + b^2)
# c = p - a - b
# a + b > p/2; a, b, c < p/2

limit = 1000

perimeter_with_most_solutions_so_far = 0
most_solutions_so_far = 0

for p in xrange(3, limit + 1):
    num_solutions = 0
    half_perimeter = int(p / 2)
    for a in xrange(1, half_perimeter):
        for b in xrange(1, half_perimeter):
            c = p - a - b
            if a + b < c:
                # sides a and b are too short to form a triangle with c
                continue
            elif a > c or b > c:
                # c is too short to be the hypotenuse
                break
            else:
                sides_squared = a**2 + b**2
                c_squared = c**2
                if sides_squared > c_squared:
                    # c will only get smaller as loop continues
                    break
                elif sides_squared == c_squared:
                    # a, b, c make a right triangle
                    num_solutions += 1
                else:
                    pass
    if num_solutions > most_solutions_so_far:
        most_solutions_so_far = num_solutions
        perimeter_with_most_solutions_so_far = p

print perimeter_with_most_solutions_so_far, most_solutions_so_far

answer = perimeter_with_most_solutions_so_far

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
