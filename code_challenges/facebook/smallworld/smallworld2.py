"""
smallworld2.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2009.04.23

Facebook Engineering Puzzle - It's A Small World

Usage: python smallworld2.py FILE

This problem is a k-Nearest Neighbor problem

This file uses a straightforward, O(n^2) approach
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
    print data.distances

def cartesianDistance(friend1, friend2):
    pass

class FileData:
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        self.friends = {}
        self.friend_order = []
        self.distances = {} # 2d table by min friend id
        # read and populate structure
        self.read_file(filename)
        # compute
        self.calculateDistances()
        self.closestNeighbors()

    def read_file(self, filename):
        f = open(filename, "r")
        lines = f.readlines()
        for line in lines:
            text = line.strip()
            try:
                (fid, lat, lng) = map(float, text.split())
                fid = int(fid)
                self.friends[fid] = Friend(fid, lat, lng)
                self.friend_order += [fid]
            except Exception, e:
                pass

    def calculateDistances(self):
        """
        Compute distances from each friend to another friend
        Store only one-way distance
        """
        for fid1 in sorted(self.friends.keys()):
            for fid2 in sorted(self.friends.keys()):
                # Only store one-way distance, so sort by id
                (f1, f2) = sorted((fid1, fid2,))
                # Create a dictionary for each new starting point
                if f1 not in self.distances:
                    self.distances[f1] = {}
                # Compute the distance if dest to start has not been calculated
                if f1 != f2 and f2 not in self.distances[f1]:
                    self.distances[f1][f2] = self.cartesianDistance2(f1, f2)

    def getDistance(self, fid1, fid2):
        """
        Get the pre-computed distance between any two friends
        Returns a scalar, order of friend args does not matter
        """
        (f1, f2) = sorted((fid1, fid2,))
        distance = None
        try:
            distance = self.distances[f1][f2]
        except:
            pass
        return distance

    def cartesianDistance2(self, fid1, fid2):
        """
        Calculate the Cartesian distance, squared between two friends
        Returns a scalar, so order does not matter
        """
        f1 = self.friends[fid1]
        f2 = self.friends[fid2]
        # use a^2 + b^2 = c^2
        distance = (f1.lat - f2.lat)**2 + (f1.lng - f2.lng)**2
        return distance

    def closestNeighbors(self):
        """
        Calculates the closest neighbors from each friend
        """
        for fid in self.friend_order:
            distances = []
            for fid2 in self.friend_order:
                if fid != fid2:
                    distances += [self.getDistance(fid, fid2)]

    def printDistances(self):
        for fid in self.friend_order:
            pass

class Friend:
    """
    Store the friend in an internal format
    """
    def __init__(self, fid, lat, lng):
        self.fid = fid
        self.lat = lat
        self.lng = lng

if __name__ == "__main__" : main()
