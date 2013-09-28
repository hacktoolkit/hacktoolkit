"""
forecast.py
author: Jonathan Tsai <hello@jontsai.com>

Python interface to Forecast API

Usage:
    python forecast.py LATITUDE LONGITUDE
    python forecast.py -t TIMESTAMP LATITUDE LONGITUDE
Examples:
    $ python forecast.py 37.8267 -122.423


"""

import getopt
import json
import requests
import os
import sys
import urllib

from keys import FORECAST_API_KEY

FORECAST_URL = 'https://api.forecast.io/forecast/%(api_key)s/%(latitude)s,%(longitude)s'
FORECAST_DATPOINT_URL = 'https://api.forecast.io/forecast/%(api_key)s/%(latitude)s,%(longitude)s,%(timestamp)s'

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv = None):
    OPT_STR = 'ht:'
    OPT_LIST = [
        'help',
        '--timestamp=',
    ]
    timestamp = None
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
            elif o in ('-t', '--timestamp='):
                timestamp = a
        # process arguments
        if len(args) == 2:
            forecast = get_forecast(args[0], args[1], timestamp=timestamp)
            print forecast
        else:
            raise Usage('Incorrect arguments')
                
    except Usage, err:
        print >> sys.stderr, err.msg
        print >> sys.stderr, "for help use --help"
        return 3.14159

def get_forecast(latitude, longitude, timestamp=None):
    values = {
        'api_key' : FORECAST_API_KEY,
        'latitude' : latitude,
        'longitude' : longitude,
    }
    if timestamp is None:
        api_url = FORECAST_URL
    else:
        api_url = FORECAST_DATPOINT_URL
        values['timestamp'] = timestamp

    url = api_url % values
    response = requests.get(url)
    data = json.loads(response.text)
    return data

if __name__ == '__main__':
    main()
