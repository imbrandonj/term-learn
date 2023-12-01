
// global constants and variables
const DISPLAY_TERM_DEF = document.getElementById("definition");  // html paragraph displaying term definition
const TEXTBOX = document.getElementById("textBox");  // text input type
let term = "empty string";  // the term is global to be passed between functions and randomly selected on load

// Problem set in terms.js file
//const PROBLEMSET = JAVATERMS;
// const PROBLEMSET = JSTERMS;
//const PROBLEMSET = CYBERSECURITY;
const PROBLEMSET = DSA;

// Get term definitions
const ALL_TERM_DEF = Object.keys(PROBLEMSET) 


// functions and events:

// load a random definition to the page and obtain the matching term
function loadTerm() {

    // retrieve a random term definition from PROBLEMSET
    let definition = ALL_TERM_DEF[Math.floor(Math.random() * ALL_TERM_DEF.length)];

    // obtain the term (value from PROBLEMSET object) to match the definition (key in PROBLEMSET object)
    term = PROBLEMSET[definition];

    // propagate term definition to page
    DISPLAY_TERM_DEF.appendChild(document.createTextNode(definition));
};


// input text box event
TEXTBOX.addEventListener("keydown", function(event) {
    if ( event.key === "Enter" ) {
        let text = event.target.value;
        validateAnswer(text, term);
    }
});


// check if answer is correct
function validateAnswer(input, answer) {
    if ( input == answer ) {
        TEXTBOX.value = "";
        DISPLAY_TERM_DEF.removeChild(DISPLAY_TERM_DEF.firstChild);
        loadTerm();
    } 
    else if ( input == "idk" ) {
        TEXTBOX.value = term;
    } 
    else {
        TEXTBOX.value = "";   
    }
};


// give answer button event
function giveAnswer() {
    TEXTBOX.value = term;  // propagates the answer to the text input box
};


// on page load a random term is selected
window.onload = loadTerm();
