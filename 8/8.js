let score = 0;
let timeLeft = 60;
const timerElement = document.getElementById("time");
const quizForm = document.getElementById("quizForm");
const scoreElement = document.getElementById("score");
const startTimer = () => {
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      calculateScore();
    }
  }, 1000);
};
const calculateScore = () => {
  const formData = new FormData(quizForm);
  formData.forEach((value, key) => {
    const correctAnswerField = quizForm.querySelector(`input[name="${key}"]`)
      .parentElement.nextElementSibling;
    if (value === correctAnswers[key]) {
      score++;
      correctAnswerField.value = "Correct!";
      correctAnswerField.style.color = "green";
    } else {
      alert(`Wrong! The correct answer is ${correctAnswers[key]}`);
      correctAnswerField.value = correctAnswers[key];
      correctAnswerField.style.color = "red";
    }
  });
  scoreElement.textContent = `Your score: ${score}/5`;
  quizForm
    .querySelectorAll('input[type="radio"]')
    .forEach((input) => (input.disabled = true));
};
document.getElementById("submitBtn").addEventListener("click", calculateScore);
// Start the timer when the page loads
startTimer();
