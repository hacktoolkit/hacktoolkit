<?php
  // Response to Challenge Question 4
  // author: hello@jontsai.com
  // date: 2009.04.14
  //
  // Write a class to extract basic data from an Amazon Product Detail web page when passed a URL The following information must be extracted into an array: ISBN10, ISBN13, Weight, Dimensions, and Current Price. This code must be written in PHP. An example URL is:
  // http://www.amazon.com/Biology-MasteringBiology-8th-Neil-Campbell/dp/0321543254/ref=pd_bbs_sr_1?ie=UTF8&s=books&qid=1233281929&sr=8-1
  //
  // Besides screen scraping, the other approach would be,
  // if we could guarantee well-formed input, to build an HTML DOM
  //

require("common.php");

function main($argv) {
    $processed = process_args($argv);
    $files = $processed["files"];
    $other = $processed["other"];

    // Treat $other as a list of URLs
    $product_page_uri = array_pop($other);
    if ($product_page_uri) {
        $data = extractData($product_page_uri);
        // print it out for sanity check
        print_r($data);
    } else {
        usage();
    }
}

/**
 * extractData
 *
 * Sceen-scraping particular data from an Amazon Product Page
 *
 * @param uri the location of an Amazon product page
 * @returns an keyed array containing the relevant information
 *
 */
function extractData($product_page_uri) {
    $details = getProductDetails($product_page_uri);
    $data = array();
    $extractionFilters = getExtractionFilters();
    foreach ($extractionFilters as $key => $regexp) {
        $matches = array();
        $result = preg_match($regexp, $details, $matches);
        if ($result === 1) {
            $data[$key] = $matches[1];
        } else {
            $data[$key] = "N/A";
        }
        unset($matches);
    }
    return $data;
}

/**
 * getExtractionFilters
 *
 * Get the fields to scrape and their regex
 *
 * @return a keyed array
 */
function getExtractionFilters() {
    $filters = array("ISBN10" => "/<li><b>ISBN-10:<\/b> (.*)<\/li>/U",
                     "ISBN13" => "/<li><b>ISBN-13:<\/b> (.*)<\/li>/U",
                     "Weight" => "/<li><b>Shipping Weight:<\/b> (.*)\((.*)?View shipping rates and policies/U",
                     "Dimensions" => "/<li><b>Product Dimensions: <\/b>(.*)<\/li>/U",
                     "Current Price" => "/<b class=\"priceLarge\">(.*)<\/b>/U"
                     );
    return $filters;
}

/**
 * getProductDetails
 *
 * Gets the product details from an Amazon Product Page
 * ... Actually get the whole thing since price is in a separate section
 *
 * @param product_page_uri the uniform resource indicator of an Amazon Product Page
 * @return a subsection of the HTML code of the entire page
 *
 */
function getProductDetails($product_page_uri) {
    $content = downloadURI($product_page_uri);
    //$details_index = strpos($content, "<h2>Product Details</h2>");
    //$details = substr($content, $details_index);
    $details = str_replace("\n", "", $content);
    return $details;
}

/**
 * downloadURI
 *
 * Downloads the content of a URI
 *
 * @param uri the uniform resource indicator
 * @returns the content as a string
 *
 */
function downloadURI($uri) {
    if (strpos($uri, "http") !== 0) {
        $uri = "http://".$uri;
    }
    $content = file_get_contents($uri);
    return $content;
}

/**
 * usage
 *
 * Print out the usage for this program
 */
function usage() {
    echo "Usage:\n";
    echo "  php ".__FILE__." URL\n";
}

main($argv);

?>