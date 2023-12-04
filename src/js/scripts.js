// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');

submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
  let selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    if (selectedAnswer.value === 'C') {
      feedback.innerHTML = "Congratulations, you answered correctly! <br>The Japanese believe that the ancestors of the crow led their one-time Emperor Shinmu out of the land of the lost, thus many Japanese worship the crow.";
    } else {
      feedback.innerHTML = "Unfortunately, the correct answer is C.<br> The Japanese believe that the ancestors of the crow led their one-time Emperor Shinmu out of the land of the lost, thus many Japanese worship the crow.";
    }

    feedback.style.fontFamily = 'Jost, sans-serif';
	 feedback.style.fontSize = '13px';
    feedback.style.color = '#df7442';
	 feedback.style.marginTop = '10px';
  }
}
