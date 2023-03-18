var highScores = JSON.parse(localStorage.getItem("allenQuizscores"));
var highScorelist = document.querySelector(".high-score-list");
var backButton = document.querySelector(".back-button");
var clearButton = document.querySelector(".clear-button");
var table = document.getElementById("datas");


//check that high score from local storage is not empty
if(highScores == null) highScores = [{
        initials: 'none',
        score: 0
    }];


//sort the scores from highest to lowest
highScores.sort((firstItem, secondItem) => secondItem.score - firstItem.score);


//Insert data into the html table in high score page
function Insert_Data() {
    table.innerHTML="";
    var tr="";
    highScores.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+x.initials+'</td>'+'<td>'+x.score+'</td>';
       tr+='</tr>'
    })
    table.innerHTML+=tr;
   
}

Insert_Data();

//back button click
backButton.addEventListener("click", function(event) {
    window.location.href = '../../index.html';
});

//clear button click
clearButton.addEventListener("click", function(event) {
    localStorage.removeItem("allenQuizscores");
    table.textContent = ''
});

