"""http://projecteuler.net/problem=046

Goldbach's other conjecture

It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
9 = 7 + 212
15 = 7 + 222
21 = 3 + 232
25 = 7 + 232
27 = 19 + 222
33 = 31 + 212
It turns out that the conjecture was false.
What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 0

n = 3
DOUBLED_SQUARES = [2,]
SQUARE_N = 1

def generate_doubled_squares(n):
    """Generate doubled squares until value exceeds n
    """
    global DOUBLED_SQUARES
    global SQUARE_N
    while DOUBLED_SQUARES[-1] < n:
        SQUARE_N += 1
        doubled_square = 2 * SQUARE_N * SQUARE_N
        DOUBLED_SQUARES.append(doubled_square)
    return DOUBLED_SQUARES

answer = None

while answer is None:
    if not is_prime(n):
        doubled_squares = generate_doubled_squares(n)
        summable = False
        for doubled_square in doubled_squares:
            if doubled_square > n:
                break
            elif is_prime(n - doubled_square):
                summable = True
                break
            else:
                pass
        if not summable:
            answer = n
            break
    else:
        pass
    n += 2

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
