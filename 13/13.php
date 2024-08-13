<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Email information
    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: " . $_POST['from'];

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully to $to";
    } else {
        echo "Failed to send email to $to";
    }
}
