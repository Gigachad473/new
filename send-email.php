<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'ilahristoforov88@gmail.com';
  $subject = 'New Message from Contact Form';
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  if (mail($to, $subject, $body)) {
    echo 'Thank you for your message';
  } else {
    echo 'There was a problem sending your message';
  }
}
?>
