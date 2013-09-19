"""
meepmeep.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2009.04.22

Facebook Engineering Puzzle - Meep meep!

Usage: python meepmeep.py FILE
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
    print "Meep meep!"

class FileData:
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        pass

    def read_file(self, filename):
        pass

if __name__ == "__main__" : main()
