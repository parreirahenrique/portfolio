<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name-input'];
    $mailFrom = $_POST['email-input'];
    $subject = $_POST['subject-input'];
    $message = $_POST['message-input'];

    $mailTo = "henrique_castro97@hotmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    
    mail($mailTo, $headers, $txt, $headers);
    header("Location: index.php?mailsend");
}