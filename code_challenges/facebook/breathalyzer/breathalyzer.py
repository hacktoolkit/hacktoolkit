"""
breathalyzer.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2010.06.10, 2011.02.22

Facebook Engineering Puzzle - Breathalyzer

Usage: python breathalyzer.py FILE

Examples:
  python breathalyzer.py [-d dictionary] input.txt

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
Global.MAX_DICTIONARY_STRING_LENGTH = 16

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv = None):
    if argv is None:
        argv = sys.argv
    try:
        dictionary_file = '/var/tmp/tw106.txt'
        try:
            progname = argv[0]
            opts, args = getopt.getopt(argv[1:], 'hd:', ['help', 'dictionary=', 'debug='])
        except getopt.error, msg:
             raise Usage(msg)
        # process options
        for o, a in opts:
            if o in ('-h', '--help'):
                print __doc__
                sys.exit(0)
            if o in ('-d', '--dictionary'):
                dictionary_file = a
            if o in ('--debug', ):
                Global.DEBUG_LEVEL = int(a)
        # process arguments
        # assume all remaining arguments are files:
        for arg in args:
            process(arg, dictionary_file)
    except Usage, err:
        print >>sys.stderr, err.msg
        print >>sys.stderr, 'for help use --help'
        return 3.14159

def process(filearg, dictionary_file):
    data = FileData(filearg, dictionary_file)
    if Global.DEBUG_LEVEL > 3:
        data.print_dictionary()
    # end: DEBUG
    if Global.DEBUG_LEVEL > 2:
        data.print_data()
    # end: DEBUG
    score = data.get_total_edit_distance()
    print score

class FileData(object):
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename, dictionary_file):
        # input data
        self.longest = 0
        self.words = []
        self.entire_dictionary = {}
        self.dictionary_hash = {}
        self.dictionary_list = [] # use list instead, a hash may be too slow
        self.dictionary = self.dictionary_list
        # calculation meta data
        self.read_file(filename)
        self.load_dictionary(dictionary_file)
        self.cache = {} # words already seen

    def read_file(self, filename):
        f = open(filename, 'r')
        lines = f.readlines()
        f.close()
        
        for line in lines:
            # words are guaranteed to be lower-case
            text = line.strip()
            words = text.split()
            for word in words:
                self.words += [word]
                self.longest = max(self.longest, len(word))
    # end read_file()

    def load_dictionary(self, dictionary_file):
        """
        Load dictionary into memory

        We pre-processed the dictionary to find the longest word:
        awk '{ if (length($1) > max) { max = length($1); word = $1 } } END { print max, word }' dictionary
        ABSORBABILITIES 16
        """
        f = open(dictionary_file, 'r')
        lines = f.readlines()
        f.close()

        self.dictionary = [{} for x in xrange(Global.MAX_DICTIONARY_STRING_LENGTH + 1)]

        # assume one word per line
        for line in lines:
            dword = line.strip().lower()
            if len(dword) < 2 * self.longest:
                self.store_word(dword)
            else:
                if Global.DEBUG_LEVEL > 0:
                    print 'Skipped', dword
                # end DEBUG
                pass

    def store_word(self, word):
        """
        Store a word in internal dictionary

        Group words by length
        """
        self.dictionary[len(word)][word] = 1

    def lookup_word(self, word):
        """
        Check to see whether a word is already in the dictionary
        """
        exists = word in self.dictionary[len(word)]
        return exists

    def get_best_edit_distance(self, word):
        """
        Compare the word in question with the words in the dictionary to find the smallest edit distance

        By the time the program reaches this function, we already know that the word is not in the dictionary.
        So the best edit distance possible is 1. Break for this word whenever we find a word that only needs 1 edit.

        Optimizations:
        - Look at words of same length, then lengthen or shorten by one at a time
        - Word has length k. Only need to compare with words of length 1 to length (2k - 1) in the worst case of replacing every letter
        """
        word_length = len(word)
        best_distance = word_length
        for x in xrange(word_length):
            if best_distance < x:
                if Global.DEBUG_LEVEL > 1:
                    print 'Pruning'
                # end DEBUG
                break
            best_distance = min(best_distance,
                                self.get_best_edit_distances_from_word_length(word,
                                                                              word_length + x,
                                                                              prune_length = best_distance)
                                )
            if best_distance == 1:
                break
            if x > 0:
                best_distance = min(best_distance,
                                    self.get_best_edit_distances_from_word_length(word,
                                                                                  word_length - x,
                                                                                  prune_length = best_distance)
                                    )
            if best_distance == 1:
                break
        return best_distance

    def get_best_edit_distances_from_word_length(self, word, compare_length, prune_length = 0):
        """
        Return the best edit distance when comparing this word with words of length compare_length
        """
        best_distance = prune_length
        if compare_length <= len(self.dictionary) - 1:
            for dword in self.dictionary[compare_length].keys():
                prev_best = best_distance
                best_distance = min(best_distance,
                                    edit_distance(word, dword)
                                    )
                if Global.DEBUG_LEVEL > 1:
                    if prev_best != best_distance:
                        print 'Better word found for',word,dword,best_distance
                # end DEBUG
        return best_distance

    def get_total_edit_distance(self):
        """
        Get total edit distance for all the words
        """
        total_distance = 0
        for word in self.words:
            if word in self.cache:
                # already have the edit distance for this word
                pass
            elif self.lookup_word(word):
                # this is a dictionary word
                self.cache[word] = 0
            else:
                self.cache[word] = self.get_best_edit_distance(word)
            total_distance += self.cache[word]
        if Global.DEBUG_LEVEL > 0:
            for word in self.cache:
                print word, self.cache[word]
        # end DEBUG
        return total_distance

    def print_data(self):
        """
        Method for debugging output
        """
        print self.words

    def print_dictionary(self):
        """
        Method for debugging output
        """
        for word_length in sorted(self.dictionary_hash.keys()):
            print "Words of length:", word_length
            print sorted(self.dictionary_hash[word_length].keys())
            print "\n"

def edit_distance(s1, s2):
    """
    Alias for Levenshtein Distance
    """
    #distance = levenshtein_distance(s1, s2)
    distance = fast_levenshtein_distance(s1, s2)
    if Global.DEBUG_LEVEL > 2:
        print "Distance between", s1, "and", s2, "=", distance
    # end DEBUG
    return distance

def levenshtein_distance(s1, s2):
    """
    Levenshtein Distance = minimum number of edits needed to transform one string into the other
    Allowable edit operations: insertion, deletion, or substitution of a single character

    Uses dynamic programming to fill out a table.
    Complexity: O(m*n) for string s1 of length m and string s2 of length n

    Base case: Empty string
    Deletion: Number of deletions to get to the empty string
    Insertion: Number of insertions to go from an empty string to a non-empty one
    Substitution: Number of characters to replace if strings are of same length

    Source: http://en.wikipedia.org/wiki/Levenshtein_distance
    """
    m = len(s1)
    n = len(s2)
    # table with m rows and n columns
    table = [[None for col in xrange(n+1)] for row in xrange(m+1)]
    for i in xrange(m+1):
        table[i][0] = i # deletion
    for j in xrange(n+1):
        table[0][j] = j # insertion
    for j in xrange(n):
        for i in xrange(m):
            # fill out an entire column at a time
            if s1[i] == s2[j]:
                table[i+1][j+1] = table[i][j] # same, no edits
            else:
                deletion = table[i][j+1] + 1
                insertion = table[i+1][j] + 1
                substitution = table[i][j] + 1
                value = min(deletion,
                            insertion,
                            substitution)
                table[i+1][j+1] = value
    if Global.DEBUG_LEVEL > 2:
        print table
    # end DEBUG
    distance = table[m][n]
    return distance

def fast_levenshtein_distance(s1, s2):
    """
    The original algorithm creates a matrix where the size is len(s1)*len(s2)

    A few optimizations:
    - First, notice that the completed matrix is a mirror of itself along the diagonal axis
      So based on that, we can already use only len(s1)*len(s2)/2 space and operations
    - Additionally, notice that we only ever need to keep information for 2 columns at a time
      So we should be able to write this to only use 2*len(s1) space
    The resulting algorithm should use less space, and perform faster due to fewer memory allocations
    """
    m = len(s1)
    n = len(s2)
    # two columns to store the right-most completed cells in the matrix
    col0 = [None for row in xrange(m+1)]
    col1 = [None for row in xrange(m+1)]
    swapCol = None
    for i in xrange(m+1):
        col0[i] = i # deletion
    for j in xrange(1, n):
        if j > 1:
            # swap columns after the first iteration
            swapCol = col0
            col0 = col1
            col1 = swapCol
        for i in xrange(m):
            # fill out an entire column at a time
            if i == 0:
                col1[i] = col0[i] + 1
            elif s1[i-1] == s2[j-1]:
                col1[i] = col0[i] # same, no edits
            else:
                deletion = col1[i-1] + 1
                insertion = col0[i] + 1
                substitution = col0[i-1] + 1
                value = min(deletion,
                            insertion,
                            substitution)
                col1[j] = value
        # end rows
    # end cols
    if Global.DEBUG_LEVEL > 2:
        print table
    # end DEBUG
    distance = col1[m]
    return distance

if __name__ == "__main__" : main()
