<?php
session_start();

// Database connection
$conn = new mysqli('localhost', 'root', '', 'quiz_db');

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the user ID from the session
$user_id = $_SESSION['user_id'];
$score = 0;

// Loop through the POST data (questions and selected options)
foreach ($_POST as $question_id => $selected_option_id) {
    // Remove the 'question_' prefix to get the actual question ID
    $question_id = str_replace('question_', '', $question_id);

    // Retrieve the correct option ID for the current question
    $sql = "SELECT correct_option_id FROM answers WHERE question_id = $question_id";
    $result = $conn->query($sql);

    if ($result) {
        $row = $result->fetch_assoc();

        // Compare the selected option with the correct option
        if ($row['correct_option_id'] == $selected_option_id) {
            $score++;
        }
    }
}

// Insert the score into the scores table
$sql = "INSERT INTO scores (user_id, score) VALUES ($user_id, $score)";
$conn->query($sql);

// Output the user's score
echo "Your score is: $score";

// Close the database connection
$conn->close();
