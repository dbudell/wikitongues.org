<?php

$name = $_POST['name'];
$email = $_POST['email'];
$role = $_POST['check_list'];
$message = $_POST['message'];
$formcontent="From: $name \n Desired Role: $role \n Message: $message";
$recipient = "hello@wikitongues.org";
$subject = "Volunteer Application: $name";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: index.html');
exit();
//echo "Thanks! We'll get back to you soon. We Promise.";

?>