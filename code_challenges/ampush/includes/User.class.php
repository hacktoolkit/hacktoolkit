<?php

class User {
    function __construct($user, $pass = NULL) {
        global $db;
        $this->username = $db->sanitize($user);
        $this->password = $pass ? $db->sanitize($pass) : NULL;
        $this->is_valid = $this->validate();
        if ($this->is_valid) { 
            $_SESSION['username'] = $this->username;
        } else {
            $this->logout();
        }
    }

    function user_exists() {
        global $db;
        $exists = false;
        $q = sprintf("SELECT * FROM users WHERE username='%s'", $this->username);
        $result = $db->query($q);
        if ($db->result_get_one($result)) {
            $exists = true;
        }
        return $exists;
    }

    function validate() {
        global $db;
        $valid = false;
        $user_exists = $this->user_exists();
        if ($this->password) {
            // log in, or create a new user
            if ($user_exists) {
                $valid = $this->lookup();
            } else {
                $valid = $this->create();
            }
        } else {
            // get an existing user from session
            if ($user_exists) {
                $valid = true;
            }
        }
        return $valid;
    }

    function lookup() {
        global $db;
        $success = false;
        $q = sprintf("SELECT * FROM users WHERE username='%s' AND password='%s';", $this->username, $this->password);
        $result = $db->query($q);
        if ($db->result_get_one($result)) {
            $success = true;
        }

        return $success;
    }

    function create() {
        global $db;
        $success = false;
        $q = sprintf("INSERT INTO users VALUES('%s', '%s');", $this->username, $this->password);
        $result = $db->query($q);
        $success = $db->result_is_valid($result);

        return $success;
    }

    function is_valid() {
        return $this->is_valid;
    }

    function logout() {
        unset($_SESSION['username']);
        $this->is_valid = false;
    }
}

?>
