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

# seed with basic primes
PRIMES = [2, 3]
PRIME_MEMO = { 2 : True, 3 : True }
PRIMES_BATCH_SIZE = 10000000 # look at 10M numbers at a time
def generate_primes(n):
    """Generates a list of prime numbers
    Uses the sieve of Eratosthenes

    Optimizations:
    - after 2, all other primes must be odd
    - use xrange instead of range to save on memory
    - extend PRIME_MEMO by a constant factor, in batches

    Test cases:
    - 007
    - 010
    - 037
    - 041
    """
    global PRIMES
    global PRIME_MEMO
    greatest_prime_so_far = PRIMES[-1]
    lower = greatest_prime_so_far + 2
    upper = min(lower + PRIMES_BATCH_SIZE, n)
    while lower <= upper <= n:
        # generate the next batch of numbers to sieve
        # always increment by 2, since primes cannot be even
        num_range = xrange(lower, upper + 1, 2)
        local_memo = dict(zip(num_range, [True] * len(num_range))) 

        # mark off the composite numbers, sieve style
        for k in PRIMES:
            # k is a prime number
            # mark every kth number following k as composite
            for x in xrange(k + k, upper + 1, k):
                if x in local_memo:
                    # just delete instead of marking False to save memory
                    del local_memo[x]

        # make a copy of keys, since we are modifying the underlying dict
        for k in sorted(local_memo.keys()):
            if k in local_memo:
                # k is a prime
                for x in xrange(k + k, upper + 1, k):
                    if x in local_memo:
                        del local_memo[x]
            else:
                # k is already marked as composite, do nothing
                pass

        lower = min(upper + 2, n + 1)
        upper = min(upper + PRIMES_BATCH_SIZE, n + 1)

        PRIME_MEMO.update(local_memo)
        for k in sorted(local_memo.keys()):
            PRIMES.append(k)

    return PRIMES

def is_prime(n):
    """Determines whether n is a prime number

    Test cases:
    - 007
    - 010
    - 037
    - 041
    """
    global PRIME_MEMO
    if not PRIME_MEMO:
        primes = generate_primes(n)
    else:
        primes = PRIMES
    #primeness = n in primes
    primeness = PRIME_MEMO.get(n, False)
    return primeness

def possibly_prime(n):
    """Determines whether n is possibly a prime number

    Cannot be even
    Not divible by 3 (sum of digits cannot be divisible by 3)
    """
    possible = not is_even(n) and n % 3 > 0
    return possible

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

    Test cases:
    - 037
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

def digits(n, string=False):
    """Get the digits of a number as a list of numbers

    `string` if True, return a list of strings
    """
    if string:
        list_of_digits = [digit for digit in str(n)]
    else:
        list_of_digits = [int(digit) for digit in str(n)]
    return list_of_digits

def str_to_digits(s):
    """Get a list of digits from a numeric string or numeric list
    """
    digits = [int(digit) for digit in s]
    return digits

def sum_digits(n):
    """Find the sum of the digits of n
    """
    digits = list_of_digits(n)
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

def is_pandigital(n):
    """An n-digit number is pandigital if it makes use of all the digits 1 to n exactly once

    E.g. 2143 is a 4-digit pandigital (and is also a prime)
    """
    digits = [int(digit) for digit in str(n)]
    pandigitalness = len(digits) == max(digits) == len(set(digits))
    return pandigitalness

def rotations(s):
    """Get all the rotations of a string
    E.g.
    'abc' => ['abc', 'bca', 'cba']
    """
    all_rotations = []
    for i in xrange(len(s)):
        rotation = s[i:] + s[:i]
        all_rotations.append(rotation)
    return all_rotations

def is_circular_prime(n):
    """Determines if n is a circular prime

    It is a circular prime if all rotations of n are also prime

    E.g. 197 => 197, 971, 719

    Test cases:
    - 035
    """
    rotations_of_n = [int(rotation) for rotation in rotations(str(n))]
    circular_primeness = is_prime(n) and len(filter(is_prime, rotations_of_n)) == len(rotations_of_n)
    return circular_primeness

def permutations(s):
    """Get all the permutations of a string, i.e. anagrams

    E.g.
    'abc' => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    """
    if len(s) == 0:
        all_permutations = []
    elif len(s) == 1:
        all_permutations = [s]
    else:
        all_permutations = []
        string = ''.join(sorted([c for c in s]))
        for i in xrange(len(string)):
            c = string[i]
            substring = string[:i] + string[i + 1:]
            sub_permutations = [c + sub_permutation for sub_permutation in permutations(substring)]
            all_permutations += sub_permutations
    return all_permutations
