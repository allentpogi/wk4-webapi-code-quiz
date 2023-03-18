var startButton = document.querySelector(".start-button");
var question = document.querySelector(".quiz-header");
var choiceArea = document.querySelector(".quiz-content");
var quizConent = document.querySelector(".quiz-box");
var i = 0
var numCorrect = 0;
var element;
var highScorelink = document.querySelector(".high-score")
var timerCount = 0
var timeStart
var timeEnd
var interval

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
    {
		question: "What is the correct HTML element for inserting a line break?",
		answers: {
			a: '<br>',
			b: '<break>',
			c: '<lb>',
            d: '<nextline>'
		},
		correctAnswer: 'a: <br>'
	},
    {
		question: "What kind of statement is used to execute actions based on a trigger or condition?",
		answers: {
			a: 'Boolean Variable',
			b: 'Fired Event',
			c: 'RegExp or Regular Expression',
            d: 'Conditional Statement'
		},
		correctAnswer: 'd: Conditional Statement'
	},
    {
		question: "What is the format called that is used for storing and transporting data?",
		answers: {
			a: 'Syntax',
			b: 'Font',
			c: 'HTML',
            d: 'JSON'
		},
		correctAnswer: 'd: JSON'
	},
    {
		question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
		answers: {
			a: 'Conditional Loop',
			b: 'For Loop',
			c: 'While Loop',
            d: 'Else Loop'
		},
		correctAnswer: 'c: While Loop'
	},
    {
		question: "What is the name of the statement that is used to exit or end a loop?",
		answers: {
			a: 'Break statement',
			b: 'Falter statement',
			c: 'Close statement',
            d: 'Conditional statement'
		},
		correctAnswer: 'a: Break statement'
	},
    {
		question: "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
		answers: {
			a: 'Scope',
			b: 'Range',
			c: 'Output Level',
            d: 'Restriction'
		},
		correctAnswer: 'a: Scope'
	},
    {
		question: "What is considered to be the most popular programming language in the world?",
		answers: {
			a: 'Swift',
			b: 'JavaScript',
			c: 'HTML',
            d: 'Ruby'
		},
		correctAnswer: 'b: JavaScript'
	},
    {
		question: "What elements are used to test for TRUE or False values stored in variables?",
		answers: {
			a: 'Comparison and logical operators',
			b: 'Conditional statements',
			c: 'RegExp or Regular Expressions',
            d: 'Trigger readers'
		},
		correctAnswer: 'a: Comparison and logical operators'
	}
];//end of questions array


//start of the program
var timeLeft = document.getElementById('countdown');
var quizTime = 75;

var StartDownCounting = function () {       
    interval = setInterval( function() { 
        if (quizTime <= 75 && quizTime >= 11) { 
            timeLeft.setAttribute('style', 'color: green'); 
        }
        else if (quizTime <= 10 && quizTime >= 0) {
            timeLeft.setAttribute('style', 'color: red');
        }

        timeLeft.innerText = 'Timer: ' + quizTime;
        quizTime --;

        if (quizTime < 0) {
            clearInterval(interval);
            alert("Time's up, try again!")
            window.location.href = './assets/pages/highscore.html';
        }
    }, 1000);
}


//to show the questions
var showQuestions = function(event) {
    timeStart = quizTime
    console.log('start question', quizTime)
    startButton.remove();
    var output = [];
	var answers = [];
    timerCount = 0;


    // display question as header
    question.textContent = quizQuestions[i].question;
    question.setAttribute('style', 'font-size: 1rem');
    
    // get the answer choices to the question
    for(letter in quizQuestions[i].answers){
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
        '<div class="answers">' + answers.join('') + '</div>'
    );
        
    //combine as one string
    choiceArea.innerHTML = output.join('');
    var displayedChoices = document.querySelector(".answers");
    displayedChoices.setAttribute('style', 'display: flex; width: 60%; flex-direction: column; align-items: flex-start');

}//close function showquestion

//start the quiz after clicking Start button
function validateUserAnswer() {
    var userAnswer = '';
    userAnswer = element.value;

    // if answer is correct
    if(userAnswer===quizQuestions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        //if answer is wrong
    } else {
        var timeTaken = timeStart - timeEnd
        // console.log('time taken', timeTaken);
        timeremainig =  quizTime - timeTaken
        // console.log('timeremainig', timeremainig)
        quizTime = timeremainig;
        clearInterval(interval);
        StartDownCounting();
    }

    //increment i so that the next question is displayed when showQuestions is called.
    i = i + 1;
    
    //show next question if true           
    if (i != quizQuestions.length) {
        showQuestions(i);
    //finish if all questions displayed
    } else {
        clearInterval(interval);
        timeLeft.innerText = ''
        var displayedChoices = document.querySelector(".answers");
        // remove the contents
        displayedChoices.remove();
        //display finish message
        question.textContent = 'All done!';
        //display final score
        var finalScore = document.createElement("label");
        finalScore.textContent = 'Your final score is ' + numCorrect +'.';
        choiceArea.appendChild(finalScore);
        //display initial input text box and label
        var enterInitials = document.createElement("input");
        enterInitials.id = "initials";
        enterInitials.type = "text";
        enterInitials.setAttribute('style', 'text-align: left; width: max-content');
        var initialLabel = document.createElement("label");
        initialLabel.id = "initialsLabel";
        initialLabel.htmlFor = "initials";
        initialLabel.textContent = 'Enter your initials: ';
        initialLabel.setAttribute('style', 'text-align: left; width: max-content');
        //display submit button
        var submitInitials = document.createElement("button");
        submitInitials.id = "submitInitials";
        submitInitials.textContent = "Submit";
        //bring it all together and add to the html
        choiceArea.appendChild(initialLabel);
        choiceArea.appendChild(enterInitials);
        choiceArea.setAttribute('style', 'display: flex; justify-content: space-between; flex-direction: column; align-items: flex-start');
        quizConent.appendChild(submitInitials);
        submitInitials.setAttribute('style', 'margin-top: 2rem; background-color: black; border-radius: 10px; padding-left: 3rem; padding-right: 3rem; color: white; font-weight: bold; letter-spacing: 1px; font-size: larger;');

        //event listener for submit initials button
        submitInitials.addEventListener("click", function() {
        //get initials and score
            var saveInitials

            //if no initials entered
            if (enterInitials.value.trim() == '') {
                saveInitials = 'Unknown'
            //trim the initials value
            } else {
                saveInitials = enterInitials.value.trim()
            }
            
            //get the current score and initial
            var score = 
                {
                    initials: saveInitials,
                    score: numCorrect
                }
                        
            //get existing scores from local storage
            var existingEntries = JSON.parse(localStorage.getItem("allenQuizscores"));

            //check if no existing scores in local storage
            if(existingEntries == null) {
                existingEntries = [];
            };
            
            //save to local storage together with saved scores
            localStorage.setItem("allenQuizscores", JSON.stringify(score));
            existingEntries.push(score);
            localStorage.setItem("allenQuizscores", JSON.stringify(existingEntries));
            //redirect to high score page
            window.location.href = './assets/pages/highscore.html';
        });

    }
      
}


//event listener for start button
startButton.addEventListener("click", function() {
    //show the first question
    showQuestions(quizQuestions, choiceArea);
    //clear the high score link
    highScorelink.textContent = '';
    //start timer
    StartDownCounting();
});

//event listener for user selecting an answer
choiceArea.addEventListener("click", function(event) {
    element = event.target;
    // ensure that user is clicking the answer button
    if (element.matches("input") === true && i < quizQuestions.length) {
        timeEnd = quizTime;
        console.log('time end', timeEnd)
        validateUserAnswer();
    }
});

