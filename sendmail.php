<?php
if($_POST){
    $to = "contact@manojbitra.com"; // Your email address
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nEmail: $from\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
}
?>
