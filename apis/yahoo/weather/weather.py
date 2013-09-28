"""
weather.py
author: Jonathan Tsai <hello@jontsai.com>

Python interface to Yahoo! Weather API

Usage:
    python weather.py [-c|-f] "LOCATION NAME"

Examples:
    $ python weather.py "San Francisco, CA"


"""

import getopt
import json
import requests
import os
import sys
import urllib

YAHOO_WEATHER_DIR = os.path.dirname(__file__)
YAHOO_DIR = os.path.realpath(os.path.join(YAHOO_WEATHER_DIR, '..').replace('\\', '/'))
sys.path.append(YAHOO_DIR)

from geo.geoplanet.geoplanet import get_woeid

WEATHER_API_BASE_URL = 'http://weather.yahooapis.com/forecastrss?w=%(woeid)s'

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv = None):
    OPT_STR = 'hfc'
    OPT_LIST = [
        'help',
        'fahrenheit',
        'celsius',
    ]
    is_celsius = False
    if argv is None:
        argv = sys.argv
    try:
        try:
            progname = argv[0]
            opts, args = getopt.getopt(argv[1:],
                                       OPT_STR,
                                       OPT_LIST)
        except getopt.error, msg:
             raise Usage(msg)
        # process options
        for o, a in opts:
            if o in ('-h', '--help'):
                print __doc__
                sys.exit(0)
            elif o in ('-f', '--fahrenheit'):
                is_celsius = False
            elif o in ('-c', '--celsius'):
                is_celsius = True
        # process arguments
        if len(args) == 1:
            weather = get_weather(args[0], is_celsius=is_celsius)
            print weather
        else:
            raise Usage('Incorrect arguments')
                
    except Usage, err:
        print >> sys.stderr, err.msg
        print >> sys.stderr, "for help use --help"
        return 3.14159

def get_weather(location, woeid=None, is_celsius=False):
    if woeid is None:
        woeid = get_woeid(location)
    values = {
        'woeid': woeid,
    }
    url = WEATHER_API_BASE_URL % values
    response = requests.get(url)
    return response.text

if __name__ == '__main__':
    main()
