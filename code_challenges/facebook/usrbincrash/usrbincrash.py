"""
usrbincrash.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2009.04.24

Facebook Engineering Puzzle - User Bin Crash

Usage: python usrbincrash.py FILE

Examples:
  python usrbincrash.py manifest.txt

Problem Description:
You are on a cargo plane full of commercial goods when the pilot announces that the plane is short on fuel. Unless cargo is ejected from the plane, you will run out of fuel and crash. The pilot provides you with the number of pounds of weight that must be ejected from the plane. Fortunately, the manifest of the plane is both completely accurate, digitized, and you are a programmer of some repute. Unfortunately, your boss is going to be extremely unhappy, and wants you to exactly minimize the losses to the absolute minimum possible without crashing the plane. The manifest does not contain the exact quantities of every type of good, because you have so many on board. You may assume that you will not run out of any good in the course of saving the plane. You also realize this kind of program could be handy to others who find themselves in similar situations.

Write a program that takes a single argument on the command line. This argument must be a file name, which contains the input data. The program should output to standard out the minimum losses your boss will incur from your ejection of goods (see below). Your program will be tested against several manifests of several crashing planes; each with different data. Additionally, your program must be fast, and give the correct answer. 

Example input file:
1250
LJS93K       1300       10500
J38ZZ9       700        4750
HJ394L	     200        3250
O1IE82	     75         10250

Example output:
9500

Analysis:
This is a modified knapsack problem, or an unbounded knapsack problem:
http://en.wikipedia.org/wiki/Knapsack_problem#Unbounded_knapsack_problem

In a traditional knapsack problem, we want to add items with value v and weight w with certain quantities (limited = bounded, 0 or 1 = 0-1, unlimited = unbounded) to a bag, maximizing the total value V without exceeding total weight W.

In our modified optimization problem, where we are taking things things _out_ of the plane, here is how we will adapt our constraints to fit the general knapsack problem, and then take a proven solution and apply it:
- Putting in the knapsack = Throwing out of the plane
- Need to _minimize_ the total value V
- Need to reach a weight that meets or exceeds W

Approach #1: Greedy
- Sort items by descending efficiency (weight/cost ratio)
- Exclude objects that will never be used, those which are less efficient and weigh more
- Does not necessarily return the right result, but only an approximation

Approach #2: Dynamic programming
- See comment in optimize()

"""

import sys
import getopt

# Debugging Level
#
# 0: Release
# 1: Show Traceback
# 2: Trace All
# 3: Development
# 4: Super Verbose
class Global(object):
    pass
Global.DEBUG_LEVEL = 0

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv = None):
    if argv is None:
        argv = sys.argv
    try:
        try:
            progname = argv[0]
            opts, args = getopt.getopt(argv[1:], "h", ["help",])
        except getopt.error, msg:
             raise Usage(msg)
        # process options
        for o, a in opts:
            if o in ("-h", "--help"):
                print __doc__
                sys.exit(0)
        # process arguments
        # assume all remaining arguments are files:
        for arg in args:
            process(arg)
    except Usage, err:
        print >>sys.stderr, err.msg
        print >>sys.stderr, "for help use --help"
        return 3.14159

def process(filearg):
    data = FileData(filearg)
    data.precomputational_optimizations()
    if Global.DEBUG_LEVEL > 3:
        data.print_manifest()
    # end: DEBUG
    value = data.optimize(data.threshold_weight)
    print value

class FileData(object):
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        self.items = []
        self.threshold_weight = 0
        # read and populate structure
        self.read_file(filename)

    def read_file(self, filename):
        f = open(filename, "r")
        lines = f.readlines()
        first = True
        for line in lines:
            text = line.strip()
            try:
                if first:
                    self.threshold_weight = int(text)
                    first = False
                else:
                    sku, weight, cost = text.split()
                    self.items += [Item(sku, int(weight), int(cost))]
            except Exception, e:
                pass
        #self.items.sort(key=lambda item: item.efficiency, reverse=True)

    def precomputational_optimizations(self):
        """
        Perform any optimizations before running the actual optimize
        Can give slight performance increase by reducing size or complexity of inputs
        """
        self.exclude_unusable_items()
        self.reduce_by_gcd()
    # end: precomputational_optimizations

    def exclude_unusable_items(self):
        """
        Removes items which will never be used
        
        For example, if in our inventory we have:
        - bricks
        - diamonds
        - pennies ($0.01)
        - dimes ($0.10)
        - quarters ($0.25)

        We would rather throw away pennies than dimes and quarters, and bricks than diamonds
        However, because quarters (which weigh more than pennies) are vastly inefficient when compared to pennies, and weigh more, we would never use the quarters when we have unlimited pennies

        Proof of Concept:
        (weight, cost)
        a = (10, 10)
        b = (11, 9)
        a.weight < b.weight == True
        (a.weight / b.weight) * a.cost > b.cost == True

        We would never use a, when b is available
        """
        # iterate over copies of items
        for item in self.items[:]:
            for item2 in self.items[:]:
                if item.weight < item2.weight and (float(item.weight) / item2.weight) * item.cost > item2.cost:
                    try:
                        self.items.remove(item)
                    except ValueError, e:
                        # already removed
                        pass
    # end: exclude_unusable_items

    def reduce_by_gcd(self):
        """
        Find the overall gcd and reduce the weight of all items by the gcd

        This optimization is known to work
        """
        overall_gcd = gcd(self.threshold_weight, self.items[0].weight)
        for item in self.items[1:]:
            overall_gcd = gcd(overall_gcd, item.weight)
        self.threshold_weight /= overall_gcd
        for item in self.items:
            item.weight /= overall_gcd
    # end: reduce_by_gcd

    def optimize(self, threshold_weight):
        """
        Optimizes the modified knapsack problem, returning the minimum cost

        Strategy: Dynamic programming
        W is the threshold weight to achieve
        Try knapsack with smaller threshold w <= W

        K(w) = minimum value achievable with a knapsack of threshold w

        Subproblem:
        If optimal solution to K(w) includes item i, removing this item from the knapsack should yield an optimal solution to K(w - w_i)
        Don't know i, so try all possibilities

        K(w) = min{K(w - w_i) + v_i | i:w_i <= w}

        Algorithm:
        K(0) = 0
        for w = 1 to W:
            K(w) = min{K(w - w_i) + v_i : w_i <= w}
        return K(W)

        Complexity:
        Fills a one-dimensional table of length W + 1 ([0..W], inclusive), in left-to-right order
        Each entry can take up to O(n) time to compute, so overall running time is O(nW)
        """
        values = [None] * (threshold_weight + 1)
        values[0] = 0
        for w in xrange(1, threshold_weight + 1):
            best_so_far = None
            for item in self.items:
                cost = item.cost
                if item.weight <= w:
                    cost += values[w - item.weight]
                # end: if
                if best_so_far is None or cost < best_so_far:
                    best_so_far = cost
            # end: for item
            values[w] = best_so_far
        # end: for w
        if Global.DEBUG_LEVEL > 1:
            print "-"*20
            print "Optimize table:"
            print zip(range(len(values)), values)
            print "-"*20
        # end: DEBUG
        return values[threshold_weight]
    # end: optimize

    def print_manifest(self):
        """
        Print the manifest for debugging
        """
        print self.threshold_weight
        for item in self.items:
            print item

class Item(object):
    def __init__(self, sku, weight, cost):
        self.sku = sku
        self.weight = weight
        self.cost = cost
        #self.efficiency = float(weight) / float(cost)
    def __str__(self):
        #s = "[sku=%s, weight=%d, cost=%d, efficiency=%f]" % (self.sku, self.weight, self.cost, self.efficiency)
        s = "[sku=%s, weight=%d, cost=%d]" % (self.sku, self.weight, self.cost)
        return s

def gcd(a, b):
    """
    Efficiently finds the gcd of two integers
    """
    while a != b:
        if a > b:
            a = a - b
        else:
            b = b - a
    return a
# end: gcd

if __name__ == "__main__" : main()
