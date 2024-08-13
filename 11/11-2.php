<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'quiz_db');

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to retrieve all questions
$questions_sql = "SELECT * FROM questions";
$result = $conn->query($questions_sql);

$questions = [];

// Loop through each question
while ($row = $result->fetch_assoc()) {
    $question_id = $row['id'];

    // Query to retrieve the options for the current question
    $options_sql = "SELECT * FROM options WHERE question_id = $question_id";
    $options_result = $conn->query($options_sql);

    $options = [];

    // Loop through each option and add it to the options array
    while ($option_row = $options_result->fetch_assoc()) {
        $options[] = [
            'id' => $option_row['id'],
            'option_text' => $option_row['option_text']
        ];
    }

    // Add the question and its options to the questions array
    $questions[] = [
        'id' => $question_id,
        'question_text' => $row['question_text'],
        'options' => $options
    ];
}

// Output the questions as a JSON object
echo json_encode($questions);

// Close the database connection
$conn->close();
