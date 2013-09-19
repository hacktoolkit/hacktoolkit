<?php
  // Response to Challenge Question 1
  // author: hello@jontsai.com
  // date: 2009.04.14
  //
  // Code to demonstrate an efficient way to search the last 100 lines of a file containing roughly ten million lines for a sample string. This should function without having to process each line of the file (and without making use of the “tail” command or any external system commands). Any of the following languages can be used: PHP
  //

require("common.php");

define("MAX_LINE_LENGTH", 1024);
define("NUM_LINES", 100);

function main($argv) {
    $processed = process_args($argv);
    $files = $processed["files"];
    $other = $processed["other"];

    // For demo purpose, just search the first file,
    // and first item in $other as the search term
    $filename = array_pop($files);
    $search_term = array_pop($other);
    if ($filename && $search_term) {
        smart_search($filename, $search_term);
    } else {
        echo "Missing file or search term\n";
        usage();
    }
}

/**
 * smart_search
 *
 * Searches the last NUM_LINES of a file without examining each line
 *
 * @param filename the name of a file
 * @param search_term the term to search
 *
 */
function smart_search($filename, $search_term) {
    $last = tail($filename, NUM_LINES);
    $line_num = -sizeof($last);
    $match_count = 0;
    foreach($last as $line) {
        if (strstr($line, $search_term)) {
            echo "Match on line ".$line_num.": ".$line;
            ++$match_count;
        }
        ++$line_num;
    }
    echo "Found $match_count ".(($match_count > 1)? "matches" : "match")."\n";
}

/**
 * usage
 *
 * Print out the usage for this program
 */
function usage() {
    echo "Usage:\n";
    echo "  php ".__FILE__." FILE KEYWORD\n";
}

/**
 * tail
 * mimics the tail UNIX utility by using fseek to jump to the approximate place
 *
 * @param filename the name of a file
 * @param num_lines the number of lines to return from the end
 * @returns last $num_lines in an array
 *
 * Assumptions:
 * each line is the approximately the same length
 * the max length of each line is 1024 bytes
 *
 */
function tail($filename, $num_lines) {
    $filesize = filesize($filename);
    $file = fopen($filename, "r");

    // int fseek ( resource $handle , int $offset [, int $whence ] )
    fseek($file, max(0, $filesize - (MAX_LINE_LENGTH * NUM_LINES)));
    $lines = array();
    while (!feof($file)) {
        $line = fgets($file);
        $lines[] = $line;
    }
    // keep only last $num_lines lines
    $last = $lines;
    if (sizeof($lines) > 100) {
        $last = array_slice($lines, -100);
    }
    fclose($file);
    return $last;
}

main($argv);

?>
