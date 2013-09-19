<?php
  // author: hello@jontsai.com
  // date: 2009.04.11

function process_args($argv) {
    // returns an array of filenames and other arguments
    // skip the first arg
    $args = array_slice($argv, 1);
    $files = array();
    $other = array();
    foreach ($argv as $arg) {
        if (file_exists($arg)) {
            $files[] = $arg;
        } else {
            $other[] = $arg;
        }
    }
    return array("files" => $files,
                 "other" => $other);
}

?>
