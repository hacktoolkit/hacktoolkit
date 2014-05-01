import math

def is_even(n):
    """Determines whether `n` is even
    """
    # even = n % 2 == 0
    even = not(n & 1)
    return even

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

PRIME_MEMO = []
def generate_primes(n):
    """Generate prime numbers up to `n`
    """
    for x in xrange(2, n + 1):
        if is_prime(x):
            PRIME_MEMO.append(x)
        else:
            pass

def is_prime(n):
    """Determines whether `n` is a prime number
    """
    primeness = True
    limit = math.sqrt(n)
    for prime in PRIME_MEMO:
        if prime > limit:
            break
        elif n % prime == 0:
            primeness = False
    # n must be prime if no divisors found yet
    if primeness:
        PRIME_MEMO.append(n)
    return primeness

def factor(n):
    """Get the factors of `n`
    E.g. numbers that evenly divide `n`
    """
    limit = int(math.sqrt(n))
    generate_primes(limit)
    divisors = []
    reduced = n
    for i in xrange(1, len(PRIME_MEMO)):
        prime = PRIME_MEMO[-i]
        while reduced % prime == 0:
            reduced /= prime
            divisors.append(prime)
    return divisors

def prime_factorization(n):
    factors = list(set(factor(n)))
    prime_factors = filter(is_prime, factors)
    return prime_factors

def is_palindromic(n):
    palindromic = str(n) == str(n)[::-1]
    return palindromic
