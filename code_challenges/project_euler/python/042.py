"""http://projecteuler.net/problem=042

Coded triangle numbers

The nth term of the sequence of triangle numbers is given by, tn = 0.5n(n+1); so the first ten triangle numbers are:
1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.
Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 162

f = open('words.txt', 'r')

words = [word.replace('"', '') for word in f.readlines()[0].split(',')]

total = 0

for word in words:
    if is_triangle_num(word_score(word)):
        total += 1

answer = total

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)

