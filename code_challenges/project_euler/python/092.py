"""http://projecteuler.net/problem=092

Square digit chains

A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

44 -> 32 -> 13 -> 10 -> 1 -> 1
85 -> 89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

#real1m14.822s
#user1m13.388s
#sys0m1.435s
EXPECTED_ANSWER = 8581146

lower = 1
upper = 10000000


max_memo = 9 * 9 * len(digits(upper - 1))
SQUARE_DIGIT_CHAIN_MEMO = { 1 : 1, 89 : 89, }

def sum_digit_squares(n):
    summation = sum([digit * digit for digit in digits(n)])
    return summation

def get_square_digit_chain_terminal(n):
    if n in SQUARE_DIGIT_CHAIN_MEMO:
        terminal = SQUARE_DIGIT_CHAIN_MEMO[n]
    else:
        next_chain_number = sum_digit_squares(n)
        terminal = get_square_digit_chain_terminal(next_chain_number)
        if terminal <= max_memo:
            SQUARE_DIGIT_CHAIN_MEMO[n] = terminal
    return terminal

terminals_ending_in_89 = 0

for n in xrange(lower, upper + 1):
    terminal = get_square_digit_chain_terminal(n)
    if terminal == 89:
        terminals_ending_in_89 += 1

answer = terminals_ending_in_89        

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

