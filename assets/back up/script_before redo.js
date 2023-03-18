var startButton = document.querySelector(".start-button");
var question = document.querySelector(".quiz-header");
var welcomeParagraph = document.querySelector(".quiz-content");
var choiceArea = document.querySelector(".quiz-content")
var i = 0
var numCorrect = 0;
var element;
//list of questions, choices and answers
var quizQuestions = [
	{
		question: "What does HTML stand for?",
		answers: {
			a: 'Hyperlinks and Text Markup Language',
			b: 'Home Tool Markup Language',
			c: 'Hyper Text Markup Language',
            d: 'Hello There My Lady'
		},
		correctAnswer: 'c: Hyper Text Markup Language'
	},
	{
		question: "Choose the correct HTML element for the largest heading:",
		answers: {
			a: 'h6',
			b: 'h1',
			c: 'heading',
            d: 'head'
		},
		correctAnswer: 'b: h1'
	},
    // {
	// 	question: "What is the correct HTML element for inserting a line break?",
	// 	answers: {
	// 		a: '<br>',
	// 		b: '<break>',
	// 		c: '<lb>',
    //         d: '<nextline>'
	// 	},
	// 	correctAnswer: 'a: <br>'
	// },
    // {
	// 	question: "What kind of statement is used to execute actions based on a trigger or condition?",
	// 	answers: {
	// 		a: 'Boolean Variable',
	// 		b: 'Fired Event',
	// 		c: 'RegExp or Regular Expression',
    //         d: 'Conditional Statement'
	// 	},
	// 	correctAnswer: 'd: Conditional Statement'
	// },
    // {
	// 	question: "What is the format called that is used for storing and transporting data?",
	// 	answers: {
	// 		a: 'Syntax',
	// 		b: 'Font',
	// 		c: 'HTML',
    //         d: 'JSON'
	// 	},
	// 	correctAnswer: 'd: JSON'
	// },
    // {
	// 	question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
	// 	answers: {
	// 		a: 'Conditional Loop',
	// 		b: 'For Loop',
	// 		c: 'While Loop',
    //         d: 'Else Loop'
	// 	},
	// 	correctAnswer: 'c: While Loop'
	// },
    // {
	// 	question: "What is the name of the statement that is used to exit or end a loop?",
	// 	answers: {
	// 		a: 'Break statement',
	// 		b: 'Falter statement',
	// 		c: 'Close statement',
    //         d: 'Conditional statement'
	// 	},
	// 	correctAnswer: 'a: Break statement'
	// },
    // {
	// 	question: "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
	// 	answers: {
	// 		a: 'Scope',
	// 		b: 'Range',
	// 		c: 'Output Level',
    //         d: 'Restriction'
	// 	},
	// 	correctAnswer: 'a: Scope'
	// },
    // {
	// 	question: "What is considered to be the most popular programming language in the world?",
	// 	answers: {
	// 		a: 'Swift',
	// 		b: 'JavaScript',
	// 		c: 'HTML',
    //         d: 'Ruby'
	// 	},
	// 	correctAnswer: 'b: JavaScript'
	// },
    // {
	// 	question: "What elements are used to test for TRUE or False values stored in variables?",
	// 	answers: {
	// 		a: 'Comparison and logical operators',
	// 		b: 'Conditional statements',
	// 		c: 'RegExp or Regular Expressions',
    //         d: 'Trigger readers'
	// 	},
	// 	correctAnswer: 'a: Comparison and logical operators'
	// }
];


//start of the program
console.log("Start")
console.log("number of questions", quizQuestions.length)

//to show the questions
var showQuestions = function(event) {
    // clear the paragraph & button from welcome screen
    startButton.remove();
    welcomeParagraph.innerHTML = "";
    

    // // we'll need a place to store the output and the answer choices
	var output = [];
	var answers = [];
    
    // display question as header
    question.textContent = quizQuestions[i].question;
    console.log(i);
    console.log(quizQuestions[i].question)
    // get the answer choices to the question
    for(letter in quizQuestions[i].answers){
        console.log(quizQuestions[i].answers);
        // add the choices as button
        answers.push(
            '<label>'
                + '<input type="button" name="question'+'" value="'
                + letter + ': '
                + quizQuestions[i].answers[letter] +'">'
                + '</label>'
            );
        }

    // add this question and its answers to the output
    output.push(
        '<div class="question">' + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );
        
    //combine as one string
    choiceArea.innerHTML = output.join('');
    var displayedChoices = document.querySelector(".answers");
    displayedChoices.setAttribute('style', 'display: flex; width: 60%; flex-direction: column; align-items: flex-start');

}//close function showquestion

//start the quiz after clicking Start button
function startQuiz() {
    if (i < quizQuestions.length) {
        choiceArea.addEventListener("click", function(event) {
            element = event.target;
            if (element.matches("input") === true) {
                // gather answer containers from our quiz
                var answerContainers = choiceArea.querySelectorAll('.answers');                    
                // keep track of user's answers
                var userAnswer = '';
                userAnswer = element.value;
                console.log('validate answer', i);
                console.log("user's answer", userAnswer);
                console.log("correct answer", quizQuestions[i].correctAnswer)

                // if answer is correct
                if(userAnswer===quizQuestions[i].correctAnswer){
                    // add to the number of correct answers
                    numCorrect++;
                    console.log('answer is correct', numCorrect);
                //if answer is wrong
                } else {
                    console.log('answer is wrong', numCorrect)      
                }

                //increment i so that the next question is displayed when showQuestions is called.
                i = i + 1;
                console.log("hey increment by", i)
                
                if (i === quizQuestions.length) {
                    return;
                } else {
                    showQuestions(i);
                }
            }
        });
    } else if (i === quizQuestions.length) {
        display.log('finish all questions')
        displayedChoices.remove;
        question.textContent = 'All done!';
        // document.createElement
    }
}

//event listener for start button
startButton.addEventListener("click", function() {
    //show the first question
    showQuestions(quizQuestions, choiceArea);
    //enable clicking of answer and going to next questions
    startQuiz(quizQuestions, choiceArea);
    });