import math

from constants import *

def is_odd(n):
    """Determines whether `n` is odd
    """
    # odd = n % 2 == 1
    odd = bool(n & 1)
    return odd

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

def reduce_fraction(numerator, denominator):
    """Reduces a fraction to its lowest terms
    """
    num_denom_gcd = gcd(numerator, denominator)
    reduced = (numerator / num_denom_gcd, denominator / num_denom_gcd,)
    return reduced

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

CUBE_ROOTS = { 1: 1, }
def generate_cubes(n):
    """Generate cubes for 1, ..., n

    Test cases:
    - 062
    """
    for z in xrange(len(CUBE_ROOTS) + 1, n + 1):
        CUBE_ROOTS[z**3] = z
    return CUBE_ROOTS

GENERATE_CUBES_BATCH_SIZE = 10000
def get_perfect_cubic_root(n):
    """Gets the cubic root of a perfect cube
    """
    largest_cube_generated = sorted(CUBE_ROOTS.keys())[-1]
    while largest_cube_generated < n:
        generate_cubes(len(CUBE_ROOTS) + GENERATE_CUBES_BATCH_SIZE)
    cubic_root = CUBE_ROOTS.get(n)
    return cubic_root

def is_perfect_cube(n):
    """Determines whether a number is a perfect cube

    Requires generate_cubes already called

    Test cases:
    - 062
    """
    cubic_root = get_perfect_cubic_root(n)
    is_cube = cubic_root is not None
    return is_cube

def quadratic(a, b, c):
    """Solves the quadratic equation
    ax^2 + b + c = 0
    (-b + sqrt(b^2 - 4ac)) / 2a
    """
    x = (math.sqrt((b * b) - (4 * a * c)) - b) / (2 * a)
    return x

def triangle_number(n):
    """Get the nth triangle number

    1: 1 = 1
    2: 1 + 2 = 3
    3: 1 + 2 + 3 = 6
    4: 1 + 2 + 3 + 4 = 10

    Test cases:
    - 012
    """
    triangle = (n * (n + 1)) / 2
    return triangle

def is_triangle_num(n):
    """Determines if n is a triangle number

    The nth term of the sequence of triangle numbers is given by, tn = 0.5n(n+1)

    n^2 + n - 2tn = 0

    Tries to solve the quadratic formula:
    (-b + sqrt(b^2 - 4ac)) / 2a
    Where:
    a = 1
    b = 1
    c = -2(tn)

    This becomes (-1 + sqrt(1 - 4 * -2 * tn)) / 2

    Test cases:
    - 042
    - 045
    """
    x = quadratic(1, 1, -2 * n)
    is_triangle = int(x) == x # x is a whole number
    return is_triangle

def pentagon_number(n):
    """Get the nth pentagon number

    Pn = n * (3 * n - 1) / 2

    Test cases:
    - 044
    """
    pentagon = (n * (3 * n - 1)) / 2
    return pentagon

def is_pentagon_num(n):
    """Determines if n is a pentagon number

    Pn = n(3n - 1)/2

    Quadratic: 3n^2 - n - 2Pn = 0
    a = 3
    b = -1
    c = -2(Pn)

    Test cases:
    - 045
    """
    x = quadratic(3, -1, -2 * n)
    is_pentagon = int(x) == x # x is a whole number
    return is_pentagon

def hexagon_number(n):
    """Get the nth hexagon number

    Hn=n(2n-1)

    Test cases:
    - 045
    """
    hexagon = n * (2 * n - 1)
    return hexagon

def is_hexagon_num(n):
    """Determines if n is a hexagon number

    Hn=n(2n-1)

    Quadratic: 2n^2 - n - Hn = 0
    a = 2
    b = -1
    c = -Hn

    Test cases:
    - 045
    """
    x = quadratic(2, -1, -n)
    is_hexagon = int(x) == x # x is a whole number
    return is_hexagon

def collatz_sequence(n):
    """Produces the Collatz sequence for a starting number, n

    n -> n/2 (n is even)
    n -> 3n + 1 (n is odd)
    Terminates when n is 1
    """
    sequence = [n,]
    while n > 1:
        if is_even(n):
            n = n / 2
        else:
            n = 3 * n + 1
        sequence.append(n)
    return sequence

COLLATZ_LENGTH_MEMO = { 0 : 0, 1 : 1,}
def collatz_sequence_length(n):
    """Finds the length of the Collatz sequence for a starting number, n
    Does not need to actually calculate or return the sequence
    """
    if n in COLLATZ_LENGTH_MEMO:
        length = COLLATZ_LENGTH_MEMO[n]
    else:
        if is_even(n):
            length = 1 + collatz_sequence_length(n / 2)
        else:
            length = 1 + collatz_sequence_length(3 * n + 1)
        COLLATZ_LENGTH_MEMO[n] = length
    return length

def get_proper_divisors(n):
    """Get proper divisors of n
    Number less than n which divide evenly into n

    Test cases:
    - 021
    - 023
    """
    divisors = get_divisors(n)[:-1]
    return divisors

def sum_proper_divisors(n):
    """Get the sum of the proper divisors of n

    Test cases:
    - 021
    - 023
    """
    value = sum(get_proper_divisors(n))
    return value

def is_perfect_number(n):
    """A perfect number n is a number whose sum of its proper divisors is equal to n
    """
    perfectness = sum_proper_divisors(n) == n
    return perfectness

def is_abundant_number(n):
    """An abundant number n is a number whose sum of its proper divisors exceeds n

    Test cases:
    - 023
    """
    abundance = sum_proper_divisors(n) > n
    return abundance

def get_amicable_pair(n):
    """Get amicable pair for n, if one exists

    An amicable pair (a, b) is such that
    a = sum of proper divisors of n
    b = sum of proper divisors of a
    a = b

    Test cases:
    - 021
    """
    candidate = sum_proper_divisors(n)
    candidate_divisors_sum = sum_proper_divisors(candidate)
    if candidate_divisors_sum == n:
        pair = (n, candidate,)
    else:
        pair = None
    return pair

def get_divisors(n):
    """Get integer divisors of n

    Test cases:
    - 012
    """
    divisors = []
    for k in xrange(1, int(math.sqrt(n)) + 1):
        if n % k == 0:
            quotient = n / k
            divisors.append(k)
            if k != quotient:
                divisors.append(quotient)
    divisors = sorted(divisors)
    return divisors

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
PRIMES_GENERATED_UP_TO = 0
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
    global PRIMES_GENERATED_UP_TO
    PRIMES_GENERATED_UP_TO = max(PRIMES_GENERATED_UP_TO, n)
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

    Requires generate_primes(n) called before

    Test cases:
    - 007
    - 010
    - 037
    - 041
    """
    global PRIME_MEMO
    global PRIMES_GENERATED_UP_TO
    if not PRIME_MEMO or PRIMES_GENERATED_UP_TO < n:
        primes = generate_primes(n)
    else:
        primes = PRIMES
    primeness = n in primes
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

    23 is the lowest truncatable prime that has an even digit

    Test cases:
    - 037
    """
    truncatable = False
    if is_prime(n) and (n == 23 or (n > 23 and not has_even_digits(n))):
        truncations = [int(truncation) for truncation in get_truncations(str(n))]
        if truncations:
            truncatable = True
            for truncation in truncations:
                if not is_prime(truncation):
                    truncatable = False
                    break
                else:
                    pass
    else:
        pass
    return truncatable

def factor(n):
    """Get the factors of `n`

    E.g. numbers that evenly divide `n`

    Returns the prime factorization of n

    Test cases:
    - 003
    - 047
    """
    limit = int(math.sqrt(n))
    primes = generate_primes(limit)
    divisors = []
    reduced = n
    for prime in primes[::-1]:
        while reduced % prime == 0:
            reduced /= prime
            divisors.append(prime)
    if reduced != 1:
        divisors.append(reduced)
    return divisors

def is_palindromic(n):
    """Determines whether a number or a string is palindromic

    Test cases:
    - 036
    """
    palindromic = str(n) == str(n)[::-1]
    return palindromic

def is_lychrel_number(n, iterations=50):
    """Determines if a number is a Lychrel number within `iterations`
    """
    summation = n
    found_palindrome = False
    count = 0
    while not found_palindrome and count < iterations:
        reversed_digits = int(''.join(reversed(digits(summation, string=True))))
        summation += reversed_digits
        if is_palindromic(str(summation)):
            found_palindrome = True
            break
        else:
            count += 1
    is_lychrel = not(found_palindrome)
    return is_lychrel

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

    Test cases:
    - 056
    """
    digits_n = digits(n)
    summation = sum(digits_n)
    return summation

def has_even_digits(n):
    even_digits = filter(is_even, digits(n))
    has_even = len(even_digits) > 0
    return has_even

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

    Test cases:
    - 038
    - 041
    """
    digits_n = digits(n)
    pandigitalness = len(digits_n) == max(digits_n) == len(set(digits_n)) and min(digits_n) == 1
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

def numeric_permutations(n):
    """Find the permutations of a number n

    Test cases:
    - 049
    - 062
    """
    permutations_of_n = [int(permutation) for permutation in permutations(str(n))]
    return permutations_of_n

def prime_permutations(n):
    """Find all permutations of the digits of the numbers in n that are primes

    Test cases:
    - 049
    """
    permutations_of_n = numeric_permutations(n)
    prime_permutations_of_n = filter(is_prime, sorted(set(permutations_of_n)))
    return prime_permutations_of_n

def arithmetic_series_subset(num_list):
    """Given a list of numbers in increasing order, return the subset of numbers that are in an arithmetic series

    An arithmetic series must have at least 3 items

    Returns the first subset found, not necessarily the longest subset

    Test cases:
    - 049
    """
    if len(num_list) < 3:
        subset = []
    else:
        subset = []
        for i in xrange(len(num_list)):
            # find the difference between every pair
            for j in xrange(i + 1, len(num_list)):
                n1 = num_list[i]
                n2 = num_list[j]
                difference = n2 - n1
                n3 = n2 + difference
                if n3 in num_list:
                    subset = [n1, n2, n3]
                    break
    return subset
