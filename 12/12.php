<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'hospital_db');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$firstName = $conn->real_escape_string($_POST['firstName']);
$lastName = $conn->real_escape_string($_POST['lastName']);
$email = $conn->real_escape_string($_POST['email']);
$phone = $conn->real_escape_string($_POST['phone']);
$dob = $conn->real_escape_string($_POST['dob']);
$gender = $conn->real_escape_string($_POST['gender']);
$address = $conn->real_escape_string($_POST['address']);
$medicalHistory = $conn->real_escape_string($_POST['medicalHistory']);

// SQL query to insert data into the database
$sql = "INSERT INTO patients (first_name, last_name, email, phone, dob, gender, address, medical_history) 
        VALUES ('$firstName', '$lastName', '$email', '$phone', '$dob', '$gender', '$address', '$medicalHistory')";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
