"""download.py

Download all of the problems
"""

import mechanize
import os
import re
import time

from bs4 import BeautifulSoup

BASE_URL = 'http://projecteuler.net/problem=%s'
NUM_PROBLEMS = 469
CRAWL_DELAY_SECONDS = 1

def zero_pad(n, digits=3):
    """Pads a number into a string with leading zeroes
    """
    pad = ''
    for x in xrange(1, digits):
        if n / 10**x == 0:
            pad = '0' * (digits - x)
            break
    padded_num = pad + str(n)
    return padded_num

def is_already_saved(problem_num):
    """Checks to see whether a file starting with `problem_num` exists in the directory
    """
    filenames = os.listdir('.')
    saved = False
    for filename in filenames:
        if re.match('^%s' % problem_num, filename):
            saved = True
            break
    return saved

def get_filename(problem_num, problem_name):
    name_parts = re.sub(r'[^a-z0-9 ]', '', problem_name.lower()).split()
    suffix = '_'.join(name_parts)
    filename = '%s_%s.txt' % (
        problem_num,
        suffix,
    )
    return filename

def download(url):
    """Download a URL and return a BeautifulSoup of it
    """
    browser = mechanize.Browser()
    data = browser.open(url).get_data()
    soup = BeautifulSoup(data)
    return soup

def save_problem(problem_num):
    print '-' * 20
    print 'Problem %s' % problem_num
    if is_already_saved(problem_num):
        print 'Skipping, already saved'
        downloaded = False
    else:
        # build URL
        url = BASE_URL % problem_num
        print 'Downloading...'
        soup = download(url)
        # extract parts
        print 'Extracting data...'
        problem_name = soup.find('h2').text
        problem = soup.select('div.problem_content')[0].text
        # save
        filename = get_filename(problem_num, problem_name)
        print 'Saving file %s ...' % filename
        content = (
            url,
            '',
            problem_name,
            problem,
        )
        lines = [(line + '\n').encode('utf8') for line in content]
        f = open(filename, 'w')
        f.writelines(lines)
        f.close()
        downloaded = True
    return downloaded

def main():
    for k in xrange(1, NUM_PROBLEMS + 1):
        problem_num = zero_pad(k)
        downloaded = save_problem(problem_num)
        if downloaded:
            print 'Sleep for %d second(s)' % CRAWL_DELAY_SECONDS
            time.sleep(CRAWL_DELAY_SECONDS)

if __name__ == '__main__':
    main()
