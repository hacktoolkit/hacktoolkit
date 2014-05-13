"""http://projecteuler.net/problem=032

Pandigital products

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
The product 7254 is unusual, as the identity, 39 x 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 45228

pandigitals = permutations('123465789')

PRODUCT_CACHE = {}
products = set()

def check_pandigital_product_identity(a, b, c):
    key = ''.join([str(x) for x in sorted((a, b,))])
    if key in PRODUCT_CACHE:
        product = PRODUCT_CACHE[key]
    else:
        product = a * b
    if product == c:
        print a, b, c
        products.add(product)

for pandigital in pandigitals:
    # impossible cases:
    #   1-digit by 2-digit = 6-digit
    #   1-digit by 3-digit = 5-digit
    #   product has fewer digits than either multiplcand or multiplier
    #
    # remaining possible cases:
    # don't need to check inverse, as we are going through all permutations
    # 2-digit by 3-digit = 4-digit
    a = int(pandigital[:2])
    b = int(pandigital[2:5])
    c = int(pandigital[5:])
    # 1-digit by 4-digit = 4-digit
    check_pandigital_product_identity(a, b, c)
    x = int(pandigital[:1])
    y = int(pandigital[1:5])
    z = int(pandigital[5:])
    if x > 1:
        check_pandigital_product_identity(x, y, z)

answer = sum(products)

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

