<?php

class Board {
    function add_message($u, $message) {
        global $db;
        $message = $db->sanitize($message);
        $q = sprintf("INSERT INTO board VALUES('%s', '%s', '%s');",
                     $u->username,
                     date('Y-m-d h:i:s', time()),
                     $message);
        $result = $db->query($q);
        $success = $db->result_is_valid($result);
        return $success;
    }

    function all_messages() {
        global $db;
        $q = sprintf("SELECT * FROM board ORDER BY entered_on DESC");
        $result = $db->query($q);

        $rows = $db->result_get_all($result);
        $messages = array();
        foreach ($rows as $row) {
            $message = array();
            $message['username'] = $row['username'];
            $message['message'] = $row['message'];
            $message['date'] = $row['entered_on'];
            $messages[] = $message;
        }
        return $messages;
    }
}

$board = new Board();

?>
