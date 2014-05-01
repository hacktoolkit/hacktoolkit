"""http://projecteuler.net/problem=004

Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.
Find the largest palindrome made from the product of two 3-digit numbers.

Solution by jontsai <hello@jontsai.com>

Answer: 906609
"""
from utils import *

upper = 999
lower = 99
best_answer = 0

def find_palindromic_product(upper, lower):
    palindrome = None
    for i in xrange(upper, lower, -1):
        for j in xrange(i, lower, -1):
            product = i * j
            if product < best_answer:
                break
            elif is_palindromic(product):
                palindrome = (i, j, product,)
                break
        if palindrome:
            break
    return palindrome

while upper >= lower:
    result = find_palindromic_product(upper, lower)
    if result:
        (new_upper, new_lower, palindrome) = result
        if palindrome > best_answer:
            print result
            upper = new_upper - 1
            lower = new_lower
            best_answer = palindrome
        else:
            pass
    else:
        break

print best_answer
