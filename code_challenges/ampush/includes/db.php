<?php

define('USER', 'hacking');
define('PASS', 'hacking1234');
define('DBNAME', 'hacking_ampush');

class DB {
    protected static $_dbcxn = NULL;

    function __construct() {
        $this->dbcxn = $this->get_db();
    }

    function get_db() {
        if (null !== static::$_dbcxn) {
            return static::$_dbcxn;
        }

        static::$_dbcxn =  mysql_connect('localhost', USER, PASS);
        if (!static::$_dbcxn) {
            die('Could not connect: ' . mysql_error());
        }
        return static::$_dbcxn;
    }

    function query($q) {
        $result = mysql_query('use ' . DBNAME . ';');
        $result = mysql_query($q, $this->dbcxn);
        return $result;
    }

    function result_get_one($result) {
        if (!$result) {
            $message = 'Invalid query: ' . mysql_error() . "\n";
            die($message);
        }

        $row = mysql_fetch_assoc($result);
        return $row;
    }

    function result_get_all($result) {
        if (!$result) {
            $message = 'Invalid query: ' . mysql_error() . "\n";
            die($message);
        }

        $rows = array();
        while ($row = mysql_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
    }


    function result_is_valid($result) {
        $valid = false;
        if ($result) {
            $valid = true;
        }
        return $valid;
    }


    function sanitize($str) {
        $newstr = mysql_real_escape_string($str, $this->dbcxn);
        return $newstr;
    }
}

$db = new DB();

?>
