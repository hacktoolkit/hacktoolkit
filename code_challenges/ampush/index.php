<?php require_once('config.php'); ?>

<?php
function render() {
    global $u;
    global $board;
?>

<?php
    if ($u) {
?>
    <h2>Message Board</h2><br/>

<?php

    require_once('message_form.php');
    require_once('message_board.php');
?>

<?php
    } else {
?>
    Must be signed in to view or post messages
<?php
    }
?>

<?php
} // end render()
?>

<?php require_once('template.php'); ?>
