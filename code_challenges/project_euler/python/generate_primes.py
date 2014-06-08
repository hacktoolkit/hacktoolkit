from utils import *

# pre-generate primes up to 1 billion
PRIMES_BATCH_SIZE = 10 ** 9
primes = generate_primes(10 ** 9)

filename = 'primes.txt'
f = open(filename, 'w')

for prime in primes:
    print >>f, prime
