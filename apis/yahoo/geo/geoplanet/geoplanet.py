"""
geoplanet.py
author: Jonathan Tsai <hello@jontsai.com>

Python interface to Yahoo! GeoPlanet API

Usage:
    python geoplanet.py [-q] "LOCATION NAME|LANDMARK"
    python geoplanet.py -r WOEID

Examples:
    $ python geoplanet.py -q "San Francisco, CA"
    2487956

    $ python geoplanet.py -r 2487956
    San Francisco, California, United States
"""

import getopt
import json
import requests
import sys
import urllib

from keys import YAHOO_APP_ID

WHERE_API_BASE_URL = 'http://where.yahooapis.com/v1'
WHERE_API_QUERY_URL = WHERE_API_BASE_URL + "/places.q('%(query)s')?format=json&appid=%(app_id)s"
WHERE_API_RESOLVE_URL = WHERE_API_BASE_URL + '/place/%(woeid)s?format=json&appid=%(app_id)s'

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv = None):
    is_query = True
    if argv is None:
        argv = sys.argv
    try:
        try:
            progname = argv[0]
            opts, args = getopt.getopt(argv[1:],
                                       'hqr',
                                       ['help','query', 'resolve',])
        except getopt.error, msg:
             raise Usage(msg)
        # process options
        for o, a in opts:
            if o in ('-h', '--help'):
                print __doc__
                sys.exit(0)
            elif o in ('-q', '--query'):
                is_query = True
            elif o in ('-r', '--resolve'):
                is_query = False
        # process arguments
        #for arg in args:
            pass
        if len(args) == 1:
            if is_query:
                woeid = get_woeid(args[0])
                print woeid
            else:
                place = resolve_woeid(args[0])
                print place
        else:
            raise Usage('Incorrect arguments')
                
    except Usage, err:
        print >> sys.stderr, err.msg
        print >> sys.stderr, "for help use --help"
        return 3.14159

def get_woeid(location):
    query = urllib.quote(location, '')
    
    values = {
        'app_id': YAHOO_APP_ID,
        'query': query,
    }
    url = WHERE_API_QUERY_URL % values
    response = requests.get(url)
    data = json.loads(response.text)
    try:
        places = data['places']
        if places['count'] > 0:
            place = places['place'][0]
            woeid = place['woeid']
        else:
            woeid = None
    except KeyError, k:
        woeid = None
    return woeid

def resolve_woeid(woeid):
    values = {
        'app_id': YAHOO_APP_ID,
        'woeid': woeid
    }
    url = WHERE_API_RESOLVE_URL % values
    response = requests.get(url)
    data = json.loads(response.text)
    try:
        place = data['place']
        place_name = place['name']
        if place['admin1']:
            place_name += ', ' + place['admin1']
        if place['country']:
            place_name += ', ' + place['country']
    except KeyError, k:
        place_name = None
    return place_name

if __name__ == '__main__':
    main()
