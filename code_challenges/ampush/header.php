<div id="header">
     <h1>This is the header</h1>
     <br/>

<?php
     if ($u) {
         echo "Signed in as " . $u->username;
         require_once('logout.php');
     } else {
         require_once('login.php');
     }
?>

</div>
<hr />
