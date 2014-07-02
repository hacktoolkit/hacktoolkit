"""http://projecteuler.net/problem=038

Pandigital multiples

Take the number 192 and multiply it by each of 1, 2, and 3:
192 x 1 = 192
192 x 2 = 384
192 x 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)
The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).
What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

# 9327 x (1, 2) = 932718654
EXPECTED_ANSWER = 932718654

# largest: multiplicand = 987654321, n = 1, concatenated product = 987654321
# smallest: multiplicand = 1, n = 9, concatenated product = 123456789
#
# 1 < n <= 9

n_lower = 2
n_upper = 9

best_multiplicand = 0
best_n = 0
largest_so_far = 0

for n in xrange(n_lower, n_upper + 1):
    digits_per_term = int(9 / n)
    remainder = 9 % n
    for multiplicand in xrange(10 ** digits_per_term - 1, 10 ** (digits_per_term - 1), -1):
        concatenated_product = ''
        for k in xrange(1, n + 1):
            concatenated_product += '%s' % (multiplicand * k)
        concatenated_product = int(concatenated_product)
        #print multiplicand, n, concatenated_product
        if is_pandigital(concatenated_product) and concatenated_product > largest_so_far:
            largest_so_far = concatenated_product
            best_multiplicand = multiplicand
            best_n = n

print best_multiplicand, best_n, largest_so_far

answer = largest_so_far
            
print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
