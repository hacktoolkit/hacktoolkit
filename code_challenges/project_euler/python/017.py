"""http://projecteuler.net/problem=017

Number letter counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? 

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

Solution by jontsai <hello@jontsai.com>
"""
import re

from utils import *

EXPECTED_ANSWER = 21124

lower = 1
upper = 1000
numbers = range(lower, upper + 1)

num_words = [number_to_words(n) for n in numbers]

num_chars = [len(re.sub(r'[ -]', '', num_word)) for num_word in num_words]

answer = sum(num_chars)

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
