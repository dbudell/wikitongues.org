<?php

$name = $_POST['name'];
$email = $_POST['email'];
$link = $_POST['link'];
$speaker = $_POST['speaker'];
$language = $_POST['language'];
$transcription = $_POST['transcription'];
$translation = $_POST['translation'];
$message = $_POST['message'];
$video_name = "$speaker speaking $language";
$formcontent="From: $name \n Video: $video_name \n Video URL: $link \n Transcription: $transcription \n Translation: $translation \n Message: $message";
$recipient = "hello@wikitongues.org";
$subject = "Video Submission: $language";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('Location: index.html');
exit();
//echo "Thanks! We'll get back to you soon. We Promise.";

?>