"""
liarliar.py
author: Jonathan Tsai <hello@jontsai.com>
date: 2010.06.10 - 2010.06.15, 2011.02.18

Facebook Engineering Puzzle - Liar Liar

Usage: python liarliar.py FILE

Examples:
  python liarliar.py input.txt

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
    if Global.DEBUG_LEVEL > 3:
        data.print_data()
    # end: DEBUG
    value = data.partition()
    value.sort()
    value.reverse()
    print " ".join([str(x) for x in value])

class FileData(object):
    """
    Store the input file in an internal structure
    """
    def __init__(self, filename):
        self.read_file(filename)

    def read_file(self, filename):
        self.data = {}
        
        f = open(filename, "r")
        lines = f.readlines()
        first = True
        cur_node = None
        num_neighbors = 0
        nodes_loaded = 0

        for line in lines:
            text = line.strip()
            try:
                if not len(text):
                    continue
                if first:
                    self.num_nodes = int(text)
                    first = False
                elif nodes_loaded > self.num_nodes:
                    # bad input file
                    break
                elif not(cur_node) or not(num_neighbors):
                    node, num = text.split()
                    cur_node = node
                    self.data[cur_node] = {}
                    num_neighbors = int(num)
                    nodes_loaded += 1
                elif cur_node and num_neighbors:
                    neighbor = text
                    self.data[cur_node][neighbor] = True
                    # udpate file read metadata
                    num_neighbors -= 1
                    if num_neighbors == 0:
                        cur_accuser = None
                else:
                    pass
            except Exception, e:
                print e
                pass
    # end read_file()
    
    def init_groups(self):
        # input data
        self.accusations_by = {} # keyed by accuser
        self.accusers_of = {} # keyed by accused
        # calculation meta data
        self.friends_of = {}
        self.enemies_of = {}

        for accuser in self.data:
            accusations = self.data[accuser].keys()
            self.accusations_by[accuser] = accusations
            for accused in accusations:
                if accused not in self.accusers_of:
                    self.accusers_of[accused] = []
                self.accusers_of[accused] += [accuser]
    # end init_groups

    def print_data(self):
        print "Total people:",len(set(self.accusations_by.keys() + self.accusers_of.keys()))
        print "Accusations by accuser:"
        for accuser in self.accusations_by:
            print accuser,  ":", ", ".join(self.accusations_by[accuser])
        print "Accusers by accused:"
        for accused in self.accusers_of:
            print accused,  ":", ", ".join(self.accusers_of[accused])

    def greedy_partition(self):
        """
        NOTE: This method is probably too inefficient due to the number of set merges

        Find the two groups
        Observations:
        - "My enemy is my enemy" (identity)
        - "My friend is my friend" (identity)
        - "My friend is not my enemy"
        - "The enemy of my enemy is my friend"
        - "The enemy of my friend is my enemy"
        - If someone is accuses or is accused by another person, they are on opposite sides
        - If two people share a common accuser, they are on the same side
        At the end of this loop, the last accuser's friends or enemies should point to the two sets
        In order for this to work, need to make sure that Set unions do not replace with a different set, but mutate the original set
        """
        recent_accuser = None
        for accuser in self.accusations_by:
            recent_accuser = accuser
            # keep your friends close
            the_friends = set([accuser])
            # and your enemies closer
            the_enemies = set(self.accusations_by[accuser])
            if accuser in self.accusers_of:
                the_enemies |= set(self.accusers_of[accuser])
            ##
            # initialize cloud for accuser
            if accuser in self.friends_of:
                the_friends |= self.friends_of[accuser]
            self.friends_of[accuser] = the_friends
            
            if accuser in self.enemies_of:
                the_enemies |= self.enemies_of[accuser]
            self.enemies_of[accuser] = the_enemies

            # expand cloud for friends
            self._greedy_update_friends(the_friends, the_enemies)

            # expand cloud for enemies
            self._greedy_update_enemies(the_friends, the_enemies)
        if Global.DEBUG_LEVEL > 2:
            print "Friends", self.friends_of[recent_accuser]
            print "Enemies", self.enemies_of[recent_accuser]
        # end: DEBUG
        return [len(self.friends_of[recent_accuser]), len(self.enemies_of[recent_accuser]), ]

    def _greedy_update_friends(self, the_friends, the_enemies):
        """
        greedy helper function
        """
        was_updated = False
        for friend in list(the_friends):
            # my friends are the friends of my friends
            if friend in self.friends_of and the_friends != self.friends_of[friend]:
                the_friends |= self.friends_of[friend]
                was_updated = True
            if friend not in self.friends_of or the_friends != self.friends_of[friend]:
                self.friends_of[friend] = the_friends
                was_updated = True
            # my enemies are the enemies of my friends
            if friend in self.enemies_of and the_enemies != self.enemies_of[friend]:
                the_enemies |= self.enemies_of[friend]
                was_updated = True
            if friend not in self.enemies_of or the_enemies != self.enemies_of[friend]:
                self.enemies_of[friend] = the_enemies
                was_updated = True
        return was_updated

    def _greedy_update_enemies(self, the_friends, the_enemies):
        """
        greedy helper function
        """
        self.init_groups()
        was_updated = False
        for enemy in list(the_enemies):
            # the friends of the enemy are my enemies
            if enemy in self.friends_of and the_enemies != self.friends_of[enemy]:
                the_enemies |= self.friends_of[enemy]
                was_updated = True
            if enemy not in self.friends_of or the_enemies != self.friends_of[enemy]:
                self.friends_of[enemy] = the_enemies
                was_updated = True
            # the enemies of my enemy are my friends
            if enemy in self.enemies_of and the_friends != self.enemies_of[enemy]:
                the_friends |= self.enemies_of[enemy]
                was_updated = True
            if enemy not in self.enemies_of or the_friends != self.enemies_of[enemy]:
                self.enemies_of[enemy] = the_friends
                was_updated = True
        return was_updated

    def efficient_partition(self):
        """
        Do it!
        This improves over greedy_partition() because it doesn't do all the set merges
        But it's probably still too slow because we're visiting setting up many clouds and then merging them
        We're not visiting each friend in a particularly smart order, so it is chaotic expansion
        Observation: chaotic expansion of clouds would be better for parallel computation
        """
        self.init_groups()
        recent_person = None
        for accuser in self.accusations_by:
            p = Person.get_person(accuser)
            recent_person = p
            p.add_enemies([Person.get_person(enemy) for enemy in self.accusations_by[accuser]])
            if accuser in self.accusers_of:
                p.add_enemies([Person.get_person(enemy) for enemy in self.accusers_of[accuser]])
        for accused in self.accusers_of:
            p = Person.get_person(accused)
            recent_person = p
            p.add_enemies([Person.get_person(enemy) for enemy in self.accusers_of[accused]])
        if Global.DEBUG_LEVEL > 1:
            print recent_person
        # end DEBUG
        if recent_person:
            (friends, enemies, ) = recent_person.get_all_friends_and_enemies()
        else:
            friends = []
            enemies = []
        return [len(friends), len(enemies)]

    def init_graph(self):
        """
        Build adjacency matrix from the essentially adjacency lists
        Return any node to start with
        """
        self.graph = {}
        start_node = None
        for u in self.data:
            start_node = u
            if u not in self.graph:
                self.graph[u] = {}
            for v in self.data[u].keys():
                if v not in self.graph:
                    self.graph[v] = {}
                # bidirectional edges
                self.graph[u][v] = True
                self.graph[v][u] = True
        return start_node
    # end init_graph

    def graph_partition(self):
        """
        Recognize that the liars and non-liars are two disjoint sets,
        In that no one will accuse others of the same group.
        
        http://en.wikipedia.org/wiki/Bipartite_graph

        Use a BFS traversal to color all adjacent vertices with two opposite colors
        When BFS is done, all edges will have been visited and colored

        This is more efficient than the previous methods, because each vertex
        is only visited once
        """
        ##
        # Build adjacency matrix
        start_node = self.init_graph()
        ##
        # BFS traversal

        # Keep track of visited nodes
        visited = { start_node : True }

        # Group nodes into two color groups
        red = { start_node : True }
        blue = {}

        # Maintain FIFO queue for BFS traversal
        queue = [start_node]
        while len(queue):
            u = queue.pop()
            neighbors = self.graph[u].keys()
            for v in neighbors:
                if v not in visited:
                    visited[v] = True
                    # Mark the node to be a different color from neighbor
                    if u in red:
                        blue[v] = True
                    elif u in blue:
                        red[v] = True
                    queue.append(v)
        # end while
        return [len(red), len(blue)]
    # end graph_partition()

    def partition(self):
        #groups = self.greedy_partition()
        #groups = self.efficient_partition()
        groups = self.graph_partition()
        return groups



class Person(object):
    """
    Represents a group of friends, enemies for this person
    """
    Visited = {}
    Directory = {}

    @staticmethod
    def get_person(name):
        p = None
        if name in Person.Directory:
            p = Person.Directory[name]
        else:
            p = Person(name)
        return p

    def __init__(self, name):
        self.name = name
        self.friends = [] # list of Persons
        self.enemies = [] # list of Persons
        self.Directory[name] = self

    def add_friends(self, friends):
        self.friends += friends

    def add_enemies(self, enemies):
        self.enemies += enemies

    def get_all_friends_and_enemies(self):
        """
        Return names of all friends in a list
        """
        friends = []
        enemies = []
        if self.name in self.Visited:
            pass
        else:
            self.Visited[self.name] = 1
            friends = [self.name]
            enemies = []
            for friend in self.friends:
                if Global.DEBUG_LEVEL > 2:
                    print friend
                # end DEBUG
                (additional_friends, additional_enemies, ) = friend.get_all_friends_and_enemies()
                friends += additional_friends
                enemies += additional_enemies
            for enemy in self.enemies:
                if Global.DEBUG_LEVEL > 2:
                    print enemy
                # end DEBUG
                (additional_enemies, additional_friends, ) = enemy.get_all_friends_and_enemies()
                friends += additional_friends
                enemies += additional_enemies
        if Global.DEBUG_LEVEL > 2:
            print "-" * 10
            print "All Friends", friends
            print "All Enemies", enemies
        # end: DEBUG
        return (friends, enemies, )

    def __str__(self):
        s = "-" * 10 + "\n"
        s += "Person: " + self.name + "\n"
        s += "Friends: " + ",".join([friend.name for friend in self.friends]) + "\n"
        s += "Enemies: " + ",".join([enemy.name for enemy in self.enemies]) + "\n"
        return s

if __name__ == "__main__" : main()
