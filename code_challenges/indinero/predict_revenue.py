"""
predict_revenue.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2010.10.12

https://indinero.com/jobs/backend-engineer

Predicting Revenue.

inDinero is all about giving a business owner unique insights into their business by pulling in data from all of their datasources. Here, you'll help thousands of business owners learn what the correlation between their website's pageviews and their revenue would be.

Inputs = past N months' revenue, as well as daily pageviews (from Google analytics) starting N months ago, but including month-to-date numbers. The inputs can be whatever you consider to be the most convenient data structure.

Output = prediction of month-to-date revenue

Deliverable: A production-ready function in any language of preference.
"""

import sys

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
    print "Not implemented yet"

class FileData:
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        pass

    def read_file(self, filename):
        pass

if __name__ == "__main__" : main()
