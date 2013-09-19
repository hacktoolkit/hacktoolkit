"""
smallworld.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2009.04.22 - 2009.04.24

Facebook Engineering Puzzle - It's A Small World

Usage: python smallworld.py FILE

This problem is a k-Nearest Neighbor problem

This implementation uses a kd-tree
http://en.wikipedia.org/wiki/Kd-tree#Nearest_neighbor_search

Lessons learned:
- Python list default parameters are mutable and reuses the same instance. This bug took over 6 hours to find :(
- WOW. Lost all of my code from the past ~12? hours because my VMWare crashed.
- Turn on Emacs Autosave and Backup. They are your friends :'(

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
    if Global.DEBUG_LEVEL > 0:
        data.print_tree()
    # end: DEBUG
    data.print_nearest_neighbors(3)

class FileData(object):
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        self.friends = []
        self.k_neighbors = 3
        # read and populate structure
        self.read_file(filename)
        self.root = build_kdtree(self.friends)

    def read_file(self, filename):
        f = open(filename, "r")
        lines = f.readlines()
        for line in lines:
            text = line.strip()
            try:
                (fid, lat, lng) = text.split()
                self.friends += [Friend(int(fid), float(lat), float(lng))]
            except Exception, e:
                pass

    def check_nearest(self, nearest_so_far, node, query):
        """
        Update list of nearest elements if necessary

        Conditions:
        - Do not have enough nearby candidates OR
        - Distance to current node is shorter than the furthest nearest neighbor seen so far (replace the worst)
        """
        if Global.DEBUG_LEVEL > 1:
            print "In check_nearest"
            self.print_tree(node)
            print "-"*5
        # end: DEBUG
        d = query.cartesianDistance2(node.location)
        if len(nearest_so_far) < self.k_neighbors + 1 or d < nearest_so_far[-1].distance:
            if len(nearest_so_far) >= self.k_neighbors + 1:
                nearest_so_far.pop()
            nearest_so_far += [NearestNeighborObject(node.location.fid, d)]
            # Sort in-place
            nearest_so_far.sort(key=lambda x: x.distance)
        # end: if
        return nearest_so_far
    # end: check_nearest

    def nearest(self, node, query, depth=0, nearest_so_far = None):
        """
        Find the nearest neighbors from the query node
        @param node current node we are visiting
        @param query the node we are starting from
        @param depth recursion depth in kd-tree
        @param nearest_so_far list of nearest candidates seen
        """
        if nearest_so_far is None:
            nearest_so_far = []

        if Global.DEBUG_LEVEL > 1:
            print "In nearest"
            print node.location
            self.print_tree(node)
            print "Nearest so far:", [str(x.nnid) for x in nearest_so_far]
            print "-"*10
        # end: DEBUG

        axis = depth % 2
        if node.leftChild is None and node.rightChild is None:
            # Leaf node, base case
            nearest_so_far = self.check_nearest(nearest_so_far, node, query)
        else:
            # Go down the nearest split
            if node.rightChild is None or (node.leftChild and query.get_axis(axis) <= node.location.get_axis(axis)):
                nearer = node.leftChild
                further = node.rightChild
            else:
                nearer = node.rightChild
                further = node.leftChild
            # Recurse
            nearest_so_far = self.nearest(nearer, query, depth+1, nearest_so_far)
            ##
            # See if we have to check the other side of the hyperplane
            #
            # Conditions:
            # - There is another side AND
            # - We don't have enough nearest neighbor candiates found to be sure
            # - The distance-along-axis squared from the query node to current node is shorter than the furthest nearest neighbor seen so far
            #   Uses the heuristic:
            #   (a^2 + b^2 = c^2) iff (a^2 < c^2) for non-zero a, b
            if further:
                distance_along_axis = (query.get_axis(axis) - node.location.get_axis(axis))**2
                if len(nearest_so_far) < self.k_neighbors + 1 or distance_along_axis < nearest_so_far[-1].distance:
                    nearest_so_far = self.nearest(further, query, depth, nearest_so_far)
                # end: if
            # end: if
            nearest_so_far = self.check_nearest(nearest_so_far, node, query)
        # end: else
        return nearest_so_far
    # end: nearest

    def print_nearest_neighbors(self, k_neighbors=3):
        """
        Print the k nearest neighbors
        """
        self.k_neighbors = k_neighbors
        for friend in self.friends:
            nearest_k = self.nearest(self.root, friend)
            print friend.fid, ",".join([str(x.nnid) for x in nearest_k[1:]])
            if Global.DEBUG_LEVEL > 1:
                print "-"*80
            # end: DEBUG
        # end: for
    # end: print_nearest_neighbors

    def print_tree(self, node=None, depth=0):
        """
        Print the tree for debugging purposes
        """
        if node is None:
            node = self.root
        print "%s" % depth + " "*4*depth + node.location.__str__()
        if node.leftChild:
            self.print_tree(node.leftChild, depth+1)
        if node.rightChild:
            self.print_tree(node.rightChild, depth+1)

class Friend(object):
    """
    Store the friend in an internal format

    Has a get_axis, num_dimensions method to use with kd-tree
    """
    def __init__(self, fid, lat, lng):
        self.fid = fid
        self.lat = lat
        self.lng = lng

    def get_axis(self, axis):
        """
        Get the value for the specified axis (a dimension of this Friend)
        """
        value = None
        if axis not in range(self.get_dimensions()):
            value = None
        else:
            value = [self.lat, self.lng][axis]
        return value

    def get_dimensions(self):
        """
        Friends have two dimensions - lat and lng

        Always returns 2
        """
        return 2

    def cartesianDistance2(self, friend):
        """
        Calculate the Cartesian distance squared to this friend
        Returns a scalar, so order does not matter
        Use a^2 + b^2 = c^2
        Do not need to compute sqrt, squared value is fine

        aka Euclidean distance
        """
        a = self.lat - friend.lat
        b = self.lng - friend.lng
        distance2 = a**2 + b**2
        #c = math.sqrt(distance2)
        return distance2

    def __str__(self):
        """
        Return a string representation of this Friend for debugging
        """
        return "[Friend: id=%d, lat=%f, lng=%f]" % (self.fid, self.lat, self.lng)

class NearestNeighborObject(object):
    def __init__(self, nnid, distance):
        self.nnid = nnid
        self.distance = distance
    def __str__(self):
        return "[id=%d, distance=%f]" % (self.nnid, self.distance)

class KdNode(object):
    def __init__(self):
        self.location = None
        self.leftChild = None
        self.rightChild = None

def build_kdtree(pointList, depth=0):
    """
    Builds a kd-tree

    Source: http://en.wikipedia.org/wiki/Kd-tree#Construction

    Complexity: O(n log^2 n), using O(n log n) sort to compute median
    """
    if not pointList:
        return
 
    # Select axis based on depth so that axis cycles through all valid values
    k = pointList[0].get_dimensions() # assumes all points have the same dimension
    axis = depth % k
 
    # Sort point list and choose median as pivot element
    # Sort in-place because we don't want pointList to change
    pointList = sorted(pointList, key=lambda point: point.get_axis(axis))
    median = len(pointList)/2 # choose median
 
    # Create node and construct subtrees
    node = KdNode()
    node.location = pointList[median]
    node.leftChild = build_kdtree(pointList[0:median], depth+1)
    node.rightChild = build_kdtree(pointList[median+1:], depth+1)
    return node

if __name__ == "__main__" : main()
