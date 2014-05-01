"""http://projecteuler.net/problem=001

Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

Solution by jontsai <hello@jontsai.com>
"""

UPPER = 1000

multiples_of_3 = range(3, UPPER, 3)
multiples_of_5 = range(5, UPPER, 5)

multiples_of_3_or_5 = set(multiples_of_3 + multiples_of_5)

answer = sum(multiples_of_3_or_5)

print answer
