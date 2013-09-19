"""
hoppity.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2009.04.22

Facebook Engineering Puzzle - Hoppity Hop!

Usage: python hoppity.py FILE
"""

import sys
import getopt

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
    for z in xrange(1, data.int_val + 1):
        if z % 3 == 0 and z % 5 == 0:
            print "Hop"
        elif z % 3 == 0:
            print "Hoppity"
        elif z % 5 == 0:
            print "Hophop"

class FileData:
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        self.int_val = 0
        self.read_file(filename)

    def read_file(self, filename):
        f = open(filename, "r")
        lines = f.readlines()
        for line in lines:
            text = line.strip()
            try:
                if text and int(text):
                    self.int_val = int(text)
            except Exception, e:
                pass

if __name__ == "__main__" : main()
