"""http://projecteuler.net/problem=033

Digit canceling fractions

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

Solution by jontsai <hello@jontsai.com>
"""
from utils import *

EXPECTED_ANSWER = 100

limit = 100

reducible_numerators = []
reducible_denominators = []

for numerator in xrange(1, limit):
    numerator_digits = set(digits(numerator))
    if len(numerator_digits) == 1:
        # skip when digits are repeated
        continue
    for denominator in xrange(numerator + 1, limit):
        denominator_digits = set(digits(denominator))
        if len(denominator_digits) == 1:
            # skip when digits are repeated
            continue
        fraction = numerator / float(denominator)
        intersection = numerator_digits.intersection(denominator_digits)
        if len(intersection) == 1:
            repeated_digit = list(intersection)[0]
            if repeated_digit != 0:
                naive_reduced_numerator = list(numerator_digits - intersection)[0]
                naive_reduced_denominator = list(denominator_digits - intersection)[0]
                try:
                    naive_reduced_fraction = naive_reduced_numerator / float(naive_reduced_denominator)
                    if fraction == naive_reduced_fraction:
                        reducible_numerators.append(numerator)
                        reducible_denominators.append(denominator)
                        print "%s/%s = %s/%s" % (
                            numerator,
                            denominator,
                            naive_reduced_numerator,
                            naive_reduced_denominator,
                        )
                except ZeroDivisionError:
                    pass

numerator_product = list_product(reducible_numerators)
denominator_product = list_product(reducible_denominators)

reduced = reduce_fraction(numerator_product, denominator_product)

answer = reduced[1]

print 'Expected: %s, Answer: %s' % (EXPECTED_ANSWER, answer)
