"""
dancebattle.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2009.04.22

Facebook Engineering Puzzle - Dance Battle

Usage: python dancebattle.py FILE
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
    print data.num_moves
    print data.turns_taken
    print data.turns

class FileData:
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        self.num_moves = 0
        self.turns_taken = 0
        self.turns = []
        self.read_file(filename)

    def read_file(self, filename):
        f = open(filename, "r")
        lines = f.readlines()
        linecount = 0
        for line in lines:
            text = line.strip()
            try:
                if linecount == 0:
                    self.num_moves = int(text)
                elif linecount == 1:
                    self.turns_taken = int(text)
                else:
                    self.turns += [tuple(map(int, text.split()))]
            except Exception, e:
                pass
            linecount += 1

if __name__ == "__main__" : main()
