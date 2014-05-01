"""http://projecteuler.net/problem=025

1000-digit Fibonacci number

The Fibonacci sequence is defined by the recurrence relation:
Fn = Fn1 + Fn2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:
F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.
What is the first term in the Fibonacci sequence to contain 1000 digits?

Solution by jontsai <hello@jontsai.com>

Answer: 4782
"""

from utils import *

answer = None

n = 0
while answer is None:
    fib_value = fibonacci(n)
    if len(str(fib_value)) == 1000:
        # add 1 because we are using 0-based fibonacci
        answer = n + 1
        break
    n += 1

print answer
