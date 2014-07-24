<?php

$name = $_POST['name'];
$email = $_POST['email'];
$role = "";
// how to display commas to appear after all returned array items except the last?
foreach ($_POST['check_list'] AS $checked_role) {$role .= " $checked_role".",";}
$message = $_POST['message'];
$formcontent="From: $name \n Desired Role: $role \n Message: $message";
$recipient = "hello@wikitongues.org";
$subject = "Volunteer Application: $name";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: index.html');
// how to append an html window confirming to the user that his or her application has been sent?
//echo "<p>Thanks! We'll get back to you soon. We Promise.</p>";
exit();

?>