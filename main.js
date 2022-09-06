// global constants used as problem IDs and answers
const capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // problem set 1
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";  // problem set 2
const countEmoji = ["L2", "L4", "L8", "B3", "B5", "B7", "B9"]  // problem set 3


// global variables to be used between functions
let answer;  // user answer
let problemID;  // problem selection from HTML
let problemSelect;  // select a new problem per iteration
let totalCorrect = 0;  // total correct answers tally
let set2 = 0; // correct tally of problem set 2
let set3 = 0; // correct tally of problem set 3

loadProblem();  // sets first problem on page load


function loadProblem() {
    let previousProblem = problemSelect;  // Prevents an immediate duplicate

    // Select problem type (alpha letters, lowercase letters, or counting)
    while ( previousProblem === problemSelect ) {  // this loop prevents a duplicate

        if ( totalCorrect < 20 ) {
            // problem set 1 using capAlpha var
            problemSelect = capAlpha.charAt(Math.floor(Math.random() * capAlpha.length));  // selects random alpha char

        } else if ( totalCorrect < 40 ) {
            // problem set 2 using lowerAlpha var
            problemSelect = lowerAlpha.charAt(Math.floor(Math.random() * lowerAlpha.length));  // selects random lower char

        } else {
            // problem set 3 using countEmoji array
            problemSelect = countEmoji[Math.floor(Math.random() * countEmoji.length)];  // selects random count emoji
        }
    };

    problemID = document.getElementById(problemSelect);  // alpha char matches html/css ID
    problemID.classList.add("active");  // presents the problem via css class display: flex

    // get answer
    if ( totalCorrect < 40 )
        answer = problemSelect;  // for the first 2 problem sets the answer is problemSelect
    else
        answer = problemSelect[1];  // for the latter, the answer is the second char in problemSelect (ex: "L4" - 4 is the answer)
};


// textBox event
const TEXTBOX = document.getElementById("textBox"); 
TEXTBOX.addEventListener("keydown", function (event) {
    if ( event.key === "Enter" ) {
        let text = event.target.value;
        checkAnswer(text, answer);
    }
});


// validates answer and initiates transition functions
function checkAnswer(text, answer) {
    if ( text === answer ) {
        totalCorrect += 1;
        transition();
        setTimeout(loadProblem, 500);  // 500ms must match setTimeout() in transition() function

    } else {
        TEXTBOX.value = "";
    }
};


// removes correct problem, shows a "Correct!" message for 500ms, presents a new problem
function transition() {
    problemID.classList.remove("active");
    TEXTBOX.value = "";

    footboxGreen();  // paints a footbox green after a correct answer

    correct = document.getElementById("correct");
    correct.classList.add("correct");
    correct.classList.add("active");
    setTimeout(clear, 500);
};


// clears the "Correct!" message after 500ms
function clear() {
    correct.classList.remove("active");
};


// paints a footbox green after a correct answer
function footboxGreen() {

    if ( totalCorrect < 20 ) {
        // Tally for problem set 1
        let footBox = document.getElementById("box" + totalCorrect);
        footBox.classList.add("footBoxCorrect");

    } else if ( totalCorrect === 20 || totalCorrect === 40 ) {
        // Reset tally for next problem set @ 20, 40, 60, etc.
        for ( let i = 1; i <= 20; i++ ) {
            let footBox = document.getElementById("box" + i);
            footBox.classList.remove("footBoxCorrect");
        }

    } else if ( totalCorrect < 40 ) {
        // Tally for problem set 2
        set2 += 1;
        let footBox = document.getElementById("box" + set2);
        footBox.classList.add("footBoxCorrect");
        
    } else {
        // Tally for problem set 3
        set3 += 1;
        let footBox = document.getElementById("box" + set3);
        footBox.classList.add("footBoxCorrect");
    }
};