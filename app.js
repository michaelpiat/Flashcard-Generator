var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var questions = require("./questions.js");
var inquirer = require("inquirer");


var clozeQuestions = [];

for (var i=0; i<questions.length; i++) {

	var newCloze = new ClozeCard(questions[i].full, questions[i].cloze);
	clozeQuestions.push(newCloze);
	
};

var wrongAnswers = 0;
var correctAnswers = 0;
var qIndex = 0;

function playGame() {
	inquirer.prompt([
		{
			name: "userAnswer",
			type:"input",
			message: clozeQuestions[qIndex].partial	+"\nYour Answer: "
		}
	]).then(function(answer){
			if (answer.userAnswer.toLowerCase() === clozeQuestions[qIndex].cloze.toLowerCase()) {
				qIndex++
				correctAnswers++
			} 
			else {
				qIndex++
				wrongAnswers++
			}		
		
		if (qIndex < clozeQuestions.length) {
			playGame();
		} 
		else {
			console.log("Game Over")
			console.log("Answered Correctly: " + correctAnswers);
			console.log("Answered incorrectly: " +wrongAnswers);
		
			inquirer.prompt([
				{
					name:"playAgain",
					type:"confirm",
					message:"Would you like to play again?"
				}

			]).then(function(answer){
				if(answer.playAgain === true) {
					qIndex = 0;
					correctAnswers = 0;
					wrongAnswers = 0;
					playGame();
				}
				else {
					console.log("See you next time!");
				}
			})
		}	
	});
};

playGame();