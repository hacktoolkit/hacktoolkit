"""http://projecteuler.net/problem=005

Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Solution by jontsai <hello@jontsai.com>

Answer: 232792560
"""
from utils import *

start = 1
end = 20

numbers = range(start, end + 1)
answer = lcm(numbers)

print answer
