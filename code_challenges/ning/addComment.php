<?php

if (isset($_POST["comment"])) {
    $new_comment = $_POST["comment"];
}

//$comments_file = "comments.xml";
$comments_file = "comments2.xml";

$existing_comments = file_get_contents($comments_file);

echo $existing_comments;

?>