<?php

session_start();

$u = NULL;

if ( isset( $_SESSION['username'] ) ) {
    $user = $_SESSION['username'];
    $u = new User($user);

    if (isset( $_POST['logout_submit'] ) ) {
        $u->logout();
    }
}

if (!$u) {
    // could not initialize a user from the session

    if (isset($_POST['login_submit'])) {
        // initialize a user from login or registration
        $user = isset($_POST['username'])? $_POST['username'] : NULL;
        $pass = isset($_POST['password'])? $_POST['password'] : NULL;

        if ($user && $pass) {
            $u = new User($user, $pass);
        }
    }
}

if ($u && !$u->is_valid()) {
    // nullify the user if not valid
    $u = NULL;
}

if ($u && isset( $_POST['message_submit'] ) ) {
    $b = new Board();
    $b->add_message($u, $_POST['message']);
 }




?>
