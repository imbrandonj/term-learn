// global constants
const DISPLAY_TERM_DEF = document.getElementById("definition");
const TEXTBOX = document.getElementById("textBox");

// TO DO: implement PROBLEMSET as a json file
const PROBLEMSET = {
    "internal threat": "An employee stealing company data could be an example of which kind of threat actor?",
    "hacker": "A general term used to describe any individual who uses their technical knowledge to gain unauthorized access to an organization.",
    "script kiddie": "an individual who carries out an attack by using scripts or programs written by more advanced hackers.",
    "opportunistic attack": "A hacker scans hundreds of IP addresses randomly on the internet until they find an exploitable target. What kind of attack is this?",
    "staging": "Preparing a computer to perform additional tasks in the attack.",
    "reconnaissance": "the process of gathering information about an organization, including system hardware information, network configuration, and individual user information",
    "layering": "the process of implementing multiple security measures to protect the same asset",
    "reconnaissance": "which phase of an attack does the attacker gather information about the target?",
    "confidentiality": "ensures that data is not disclosed to unintended persons",
    "cyber terrorists": "generally use the internet to carry out activities such as disrupting network-dependent institutions",
    "non-repudiation": "The ability to prove that a sender undeniably sent a message",
    "privacy": "the protection and confidentiality of personal information",
    "integrity": "protection against alteration",
    "application layer": "this layer of the security model includes user management and web application security",
    "host layer": "this layer of the security model includes log management",
    "physical layer": "this layer of the security model includes environmental controls",
    "data layer": "this layer of the security model includes cryptography",
    "perimeter layer": "this layer of the security model includes securing firewalls",
    "employees": "the single greatest threat to network security",
    "network layer": "this layer of the security model includes penetration testing",
    "botnet": "A collection of zombie computers have been set up to collect personal information. Which type of malware do the zombie computers represent?",
    "fileless virus": "this kind of virus operates only in memory and usually exploits a trusted application like PowerShell to circumvent traditional endpoint security solutions",
    "worm": "a self-replicating program",
    "ransomware": "A type of malware that prevents the system from being used until the victim pays the attacker money",
    "remote access trojan": "this kind of malware provides an attacker with administrative control over a target computer through a backdoor",
    "spyware": "monitors the actions you take on your machine and sends the information back to its originating source",
    "Trojan horse": "a malicious program disguised as legitimate software",
    "virus": "a program that attempts to damage a computer system and replicate itself to other computer systems",
    "social engineering": "Any attack involving human interaction of some kind",
    "social engineering": "Keylogging, impersonation, and shoulder surfing are all examples of this type of attack",
    "superuser account": "The root account has all privileges and no barriers. Also known as...",
    "data breach": "when confidential or protected data is exposed,"
    
};

const ALL_TERM_DEF = Object.values(PROBLEMSET)  // all term definitions

// retrieve a random term definition from PROBLEMSET
let definition = ALL_TERM_DEF[Math.floor(Math.random() * ALL_TERM_DEF.length)];

// obtain the term (key from PROBLEMSET object)
let term = getKeyByValue(PROBLEMSET, definition);


// obtain key (the term) to match the given term definition (value) in PROBLEMSET (object)
function getKeyByValue(object, value) {
    for ( let prop in object ) {
        if ( object.hasOwnProperty(prop) ) {
            if ( object[prop] === value )
                return prop;
        }
    }
};


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
DISPLAY_TERM_DEF.appendChild(document.createTextNode(definition));