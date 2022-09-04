// global constants
const TERM_DEF = document.getElementById("definition");
const TEXTBOX = document.getElementById("textBox");
const PROBLEMSET = {
    car: "drives from place to place",
};


// global variables to be passed between functions
let question = PROBLEMSET.car;
let answer = "car";


// textBox event
TEXTBOX.addEventListener("keydown", function(event) {
    if ( event.key === "Enter" ) {
        let text = event.target.value;
        validateAnswer(text, answer);
    }
});


// check if answer is correct
function validateAnswer(input, answer) {
    if ( input == answer )
        alert("Hey!!");
};


// propagate term definition to page
TERM_DEF.appendChild(document.createTextNode(question));