PACKAGE = lumosity
AUTHOR = jontsai
VERSION = ` date "+%Y%m%d" `
RELEASE_DIR = ..
RELEASE_FILE = $(PACKAGE)-$(AUTHOR)-$(VERSION)

PROGRAM = eating_out.rb

all: test

test: testfnf test1 test2 test3

expectfnf:
	echo "-----\nRunning Test fnf: [Expected: 'Error']\n"
testfnf: expectfnf
	ruby $(PROGRAM) asdf.csv ham_sandwich

expect1:
	echo "-----\nRunning Test 1: [Expected: '2, 11.5']\n"
test1: expect1 menus1.csv
	ruby $(PROGRAM) menus1.csv ham_sandwich burrito

expect2:
	echo "-----\nRunning Test 2: [Expected: 'nil']\n"
test2: expect2 menus2.csv
	ruby $(PROGRAM) menus2.csv blt_sandwich coffee

expect3:
	echo "-----\nRunning Test 3: [Expected: '6, 11.0']\n"
test3: expect3 menus3.csv
	ruby $(PROGRAM) menus3.csv milkshake fish_sandwich

clean:
	find . -name "*~" | xargs rm -f

dist: clean
	tar -czvf $(RELEASE_DIR)/$(RELEASE_FILE).tar.gz .

.SILENT: all expectfnf expect1 expect2 expect3
