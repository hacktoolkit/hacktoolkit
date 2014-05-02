import math

from constants import *

def is_even(n):
    """Determines whether `n` is even
    """
    # even = n % 2 == 0
    even = not(n & 1)
    return even

def gcd(a, b):
    """Efficiently finds the gcd of two integers

    Uses Euclidean algorithm

    http://en.wikipedia.org/wiki/Greatest_common_divisor
    http://en.wikipedia.org/wiki/Euclidean_algorithm
    """
    while a != b:
        if a > b:
            a = a - b
        else:
            b = b - a
    return a

def lcm(num_list):
    """Finds the lcm of a list of numbers

    http://en.wikipedia.org/wiki/Least_common_multiple

    This algorithm uses a table
    http://en.wikipedia.org/wiki/Least_common_multiple#A_method_using_a_table

    We don't actually need the previous columns of the table, just the most recent,
    so an array is sufficient
    """
    largest_num = max(num_list)
    primes = generate_primes(largest_num)
    factors = []
    for prime in primes:
        divides = True
        while divides:
            divides = False
            for i in xrange(len(num_list)):
                n = num_list[i]
                if n % prime == 0:
                    n /= prime
                    num_list[i] = n
                    divides = True
            if divides:
                factors.append(prime)
    result = list_product(factors)
    return result

FIB_MEMO = [1, 1]
def fibonacci(n):
    """Get the `n`th Fibonacci number

    `n` is zero-based
    The sequence starts with [1, 1, ...]
    """
    if n < len(FIB_MEMO):
        answer = FIB_MEMO[n]
    else:
        answer = fibonacci(n - 1) + fibonacci(n - 2)
        FIB_MEMO.append(answer)
    return answer

def fib_up_to(n, repeat_1=False):
    """Fibonacci numbers up to `n` (inclusive)
    """
    k = 1
    while fibonacci(k) <= n:
        k += 1
    start = 0 if repeat_1 else 1
    end = k
    numbers = FIB_MEMO[start:end]
    return numbers

FACT_MEMO = [1, 1]
def factorial(n):
    """Computes n!
    """
    if n < len(FACT_MEMO):
        value = FACT_MEMO[n]
    else:
        value = n * factorial(n-1)
        FACT_MEMO.append(value)
    return value

PRIME_MEMO_TRIAL_DIVISION = []
def generate_primes_trial_division(n):
    """Generate prime numbers up to `n`

    Uses trial division
    """
    if len(PRIME_MEMO_TRIAL_DIVISION) and PRIME_MEMO_TRIAL_DIVISION[-1] > n:
        return
    for x in xrange(2, n + 1):
        if is_prime_trial_division(x):
            PRIME_MEMO_TRIAL_DIVISION.append(x)
        else:
            pass

def is_prime_trial_division(n):
    """Determines whether `n` is a prime number

    Prerequisite: generate_primes_trial_division(math.sqrt(n))  called
    """
    primeness = True
    limit = math.sqrt(n)
    for prime in PRIME_MEMO_TRIAL_DIVISION:
        if prime > limit:
            break
        elif n % prime == 0:
            primeness = False
    # n must be prime if no divisors found yet
    if primeness:
        PRIME_MEMO_TRIAL_DIVISION.append(n)
    return primeness

PRIMES = [2]
PRIME_MEMO = {}
def generate_primes(n):
    """Generates a list of prime numbers
    Uses the sieve of Eratosthenes
    """
    global PRIMES
    greatest_prime_so_far = PRIMES[-1]
    if not PRIME_MEMO or greatest_prime_so_far < n:
        numbers = range(greatest_prime_so_far, n + 1)
        dict_values = dict(zip(numbers, [True] * len(numbers))) 
        PRIME_MEMO.update(dict_values)

    for k in PRIME_MEMO.iterkeys():
        composite = not PRIME_MEMO[k]
        if not composite:
            # mark every kth number following k as composite
            for x in xrange(k, n + 1, k):
                if x == k:
                    # k is a prime
                    pass
                else:
                    PRIME_MEMO[x] = False
        else:
            # k is already composite, do nothing
            pass
    PRIMES = []
    for k, primeness in PRIME_MEMO.iteritems():
        if primeness:
            PRIMES.append(k)
    PRIMES = sorted(PRIMES)
    return PRIMES

def is_prime(n):
    """Determines whether n is a prime number
    """
    if not PRIME_MEMO:
        generate_primes(n)
    primeness = PRIME_MEMO.get(n, False)
    return primeness

def get_truncations(s, dir='all'):
    """Get truncations

    `dir` direction of truncation

    E.g. 'asdf' => ['sdf', 'df', 'f'] (ltr)
         'asdf' => ['asd', 'as', 'a'] (rtl)
    """
    truncations = []
    for i in xrange(1, len(s)):
        if dir in ('ltr', 'all',):
            truncations.append(s[i:])
        if dir in ('rtl', 'all',):
            truncations.append(s[:-i])
    return truncations

def is_truncatable_prime(n):
    """A truncatable prime is a prime number that, when continuously removing digits from the left to right or right to left, the subsequent numbers are also prime
    """
    truncatable = False
    if is_prime(n):
        truncations = get_truncations(str(n))
        truncatable = truncations and len(truncations) == len(filter(is_prime, [int(num) for num in truncations]))
    else:
        pass
    return truncatable

def factor(n):
    """Get the factors of `n`

    E.g. numbers that evenly divide `n`

    Returns the prime factorization of n
    """
    limit = int(math.sqrt(n))
    primes = generate_primes(limit)
    divisors = []
    reduced = n
    for prime in primes[::-1]:
        while reduced % prime == 0:
            reduced /= prime
            divisors.append(prime)
    return divisors

def is_palindromic(n):
    palindromic = str(n) == str(n)[::-1]
    return palindromic

def range_sum(lower, upper):
    """Find the sum of a range of numbers
    """
    # sum(xrange(lower, upper + 1))
    total = (upper + lower) * (upper - lower + 1) / 2
    return total

def list_product(num_list):
    """Multiplies all of the numbers in a list
    """
    product = 1
    for x in num_list:
        product *= x
    return product

def str_to_digits(s):
    """Get a list of digits from a numeric string
    """
    digits = [int(digit) for digit in s]
    return digits

def sum_digits(n):
    """Find the sum of the digits of n
    """
    digits = str_to_digits(str(n))
    summation = sum(digits)
    return summation

def number_to_words(n):
    words = ''
    # thousands
    if n >= 1000:
        quotient = n / 1000
        words += NUM_WORDS[quotient] + ' ' + NUM_WORDS[1000]
        n -= quotient * 1000

    # hundredths
    if n >= 100:
        quotient = n / 100
        words += NUM_WORDS[quotient] + ' ' + NUM_WORDS[100]
        n -= quotient * 100
        if n > 0:
            words += ' and '

    # tens
    if n >= 20:
        quotient = n / 10
        words += NUM_WORDS[quotient * 10]
        n -= quotient * 10
        if n > 0:
            words += '-'
    elif n >= 10:
        words += NUM_WORDS[n]
        n -= n

    # ones
    if n > 0:
        words += NUM_WORDS[n]
    return words

def letter_score(letter):
    """Gets the value of a letter

    E.g. A = 1, B = 2, C = 3, ..., Z = 26
    """
    letter = letter.upper()
    score = ord(letter) - ord('A') + 1
    return score

def word_score(word):
    """Computes the sum of the alphabetical value of each character
    """
    letter_scores = [letter_score(letter) for letter in word]
    score = sum(letter_scores)
    return score
