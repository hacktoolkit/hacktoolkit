"""http://projecteuler.net/problem=009

Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,
 a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.

Solution by jontsai <hello@jontsai.com>
"""
import math

EXPECTED_ANSWER = 31875000

limit = 1000

squares = [x**2 for x in xrange(1, limit)]

square_dict = dict(zip(squares, [True] * len(squares)))

answer = None

# find the sum of every pair of numbers, to see if the sum is also in the squares
for a in xrange(1, limit):
    if answer:
        break
    for b in xrange(a + 1, limit):
        c_square = a**2 + b**2
        if c_square in square_dict:
            c = int(math.sqrt(c_square))
            if a + b + c == 1000:
                print (a, b, c)
                answer = a * b * c
                break

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

