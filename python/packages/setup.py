"""
setup.py

Install Python packages system-wide

Usage:
    sudo python setup.py (install packages)
    sudo python setup.py -U (upgrade packages)
"""

import getopt
import os
import re
import sys
import subprocess

# script to install a bunch of packages in the global environment
# this list of packages should match up with the list in conf.zion/virtualenv/create-venv-script.py
SITE_PACKAGES_PIP = [
    # app
    'mysql-python',
    'Django',
    # libraries
#    'django-social-auth', # deprecated in favor of python-social-auth
    'python-social-auth',
    'django-storages',
    'protobuf',
    'pyapns',
    'py-bcrypt',
    'pygeoip',
#    'pylibmc', # using Redis instead of Memcached
    'python-epoll',
    'python-gcm',
    'pytz',
    # django enhancements
    'django-grappelli',
    'south',
#    'django-memcache-status', # using redis instead of Memcached
    # redis
    'redis',
    'hiredis',
    'django-redis',
    'django-redis-status',
    # tools
    'boto',
    'fabric',
    'gunicorn',
    'requests',
    'requests_oauthlib',
    'rollbar',
    'supervisor',
]

EXECUTION_MODE = 'install'

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv = None):
    global EXECUTION_MODE
    if argv is None:
        argv = sys.argv
    try:
        try:
            progname = argv[0]
            opts, args = getopt.getopt(argv[1:], "hU", ["help", "upgrade",])
        except getopt.error, msg:
             raise Usage(msg)
        # process options
        for o, a in opts:
            if o in ('-h', '--help'):
                print __doc__
                sys.exit(0)
            if o in ('-U', '--upgrade'):
                EXECUTION_MODE = 'upgrade'
        # process arguments
        for arg in args:
            pass
        for package in SITE_PACKAGES_PIP:
            if EXECUTION_MODE == 'install':
                subprocess.call(['pip', 'install', package])
            elif EXECUTION_MODE == 'upgrade':
                subprocess.call(['pip', 'install', '-U', package])

    except Usage, err:
        print >>sys.stderr, err.msg
        print >>sys.stderr, "for help use --help"
        return 3.14159

if __name__ == '__main__':
    main()
