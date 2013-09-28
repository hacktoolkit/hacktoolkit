"""
main.py
author: Jonathan Tsai <hello@jontsai.com>

Template for a main function from command-line

Usage: python main.py FILE
"""

import sys
import getopt

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv = None):
    OPT_STR = 'h'
    OPT_LIST = [
        'help',
    ]
    if argv is None:
        argv = sys.argv
    try:
        try:
            progname = argv[0]
            opts, args = getopt.getopt(argv[1:], OPT_STR, OPT_LIST)
        except getopt.error, msg:
             raise Usage(msg)
        # process options
        for o, a in opts:
            if o in ('-h', '--help'):
                print __doc__
                sys.exit(0)
        # process arguments
        for arg in args:
            print arg
    except Usage, err:
        print >>sys.stderr, err.msg
        print >>sys.stderr, 'for help use --help'
        return 3.14159

if __name__ == '__main__':
    main()
