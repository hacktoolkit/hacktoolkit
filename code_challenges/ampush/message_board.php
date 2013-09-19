<div id="message_board">
<h2>List of Messages</h2>

     <table>
     <tr>
     <th>Username</th>
     <th>Message</th>
     <th>Date</th>
     </tr>

<?php
     foreach ($board->all_messages() as $message) {
?>
     <tr>
     <td><?= $message['username'] ?></td>
     <td><?= $message['message'] ?></td>
     <td><?= $message['date'] ?></td>
     </tr>
<?php
     }
?>
     </table>


</div>
