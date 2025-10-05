// Step 1: Define the function
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, handle it gracefully
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
        document.getElementById('feedback').style.color = "#28a745"; // green for correct
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        document.getElementById('feedback').style.color = "#dc3545"; // red for incorrect
    }
}

// Step 5: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
