<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "hello@wikitongues.org";
$subject = "Wikitongues.org Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: index.html');
exit();
//echo "Thanks! We'll get back to you soon. We Promise.";

?>