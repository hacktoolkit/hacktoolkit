<?php

require_once('db.php');

$result = $db->query('CREATE TABLE users ( username varchar(255), password varchar(255), primary key(username) );');

$result = $db->query('CREATE TABLE board ( username varchar(255), entered_on datetime, message text );');

?>
