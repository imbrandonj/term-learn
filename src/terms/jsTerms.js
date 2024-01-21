const JSTERMS = {
  '(true/false): It is the best practice to place all JavaScript scripts at the beginning of an HTML file so that they will not be run until after the Document Object Model has been created.':
    'false',
  'Which JavaScript statement calls a method addToOrder() associated with the hotChocolate object, passing the argument 1 to this method?':
    'hotChocolate.addToOrder(1)',
  'a set of procedures that access an application': 'API',
  '(true/false): The Document Object Model and the Browser Object Model are examples of an Application Programming Interface(API)':
    'true',
  '(true/false): JavaScript libraries such as Node.js and jQuery can be downloaded and then utilized to create and manage large web applications more effectively when connected to the HTML file through a script element in the head section.':
    'true',
  '(true/false): An HTML document that is well formed and correctly written according to the element definitions in HTML’s specific language definition is considered a valid document.':
    'true',
  'the process of verifying that your document is well formed and checking that the elements in your document are correctly written according to the element definitions in a specific DTD (document type definition)':
    'validation',
  '(true/false): The JavaScript window.alert() method makes a dialog box appear that contains the literal string passed to it plus an OK button that can be clicked to close the box.':
    'true',
  'What method makes a dialog box appear that contains the literal string passed to it plus an OK button that can be clicked to close the box.':
    'window.alert()',
  '(true/false): In the context of programming web applications, a user typing in a form field with a keyboard, the occurrence of an error as a browser attempts to load a page, and a user touching a webpage element on a mobile phone screen are all examples of events.':
    'true',
  'Write an inline script event handler attribute to display a dialog box that says "Welcome!" when the webpage user clicks or taps a submit button.':
    '<input type="submit" onclick="window.alert(\'Welcome!\')" />',
  'describes how to access the contents of a web page and user actions within that page':
    'Document Object Model',
  'describes how to access the features and behaviors of the browser itself':
    'Browser Object Model',
  '(true/false): 89 would NOT be represented as a floating point number in JavaScript':
    'true',
  'Write a statement that gets the document id "quantity" and runs the function calcTotal() each time the user changes an input control on this id.':
    'document.getElementById("quantity").onchange = calcTotal',
  'To apply the onchange event handler to the JavaScript form control, apply this statement':
    'object.onchange = function',
  'The propagation of an event moving down the object hierarchy from the most general object to the most specific or from the browser window to the innermost object.':
    'capture phase',
  '(true/false): Most browsers display error messages they generate in a console that can be opened by website developers, and developers can use this console as a helpful debugging tool.':
    'true',
  'What programming structure that can be called repeatedly throughout a program consists of a collection of statements that share a common purpose or calculate a value?':
    'function',
  'Write an expression that retrieves the value from the input control with the id "numberOfParticipants"':
    'document.getElementById("numberOfParticipants").value',
  '(true/false): document.getElementById("extraCheese").checked; retrieves the Boolean value "false" when the user has selected (ticked) the box':
    'false',
  'To retrieve the checked status of a checkbox, use the expression...':
    'object.checked',
  'The addition sign (+) is an example of what type of operator?':
    'binary operator',
  'The incremenent operator (++) is an example of what type of operator?':
    'unary operator',
  'This expression returns the number of links in the document':
    'document.links.length',
  'Write an expression that references the third image in the document':
    'document.images[2]',
  '(true/false): Usually, when a programmer needs to iterate over an array in JavaScript, an array method will be a faster and more compact choice than a program loop.':
    'true',
  '(true/false): If you write the JavaScript code specialInstructions:in front of a series of statements, you create a label for those statements that you can reference elsewhere in the program.':
    'true',
  'This expression will reference the HTML collection of elements with the "td" tag':
    'document.getElementsByTagName("td")',
  '(true/false): It is best practice for counter variables to have global scope.':
    'false',
  '(true/false): Throwing an exception outside the try catch block will cause the program to halt.':
    'true',
  '(true/false): Throwing an exception inside a try catch block will cause the program to halt.':
    'false',
  'This command block always runs, whether or not an exception is thrown by a try statement.':
    'finally',
  '(true/false): You can correct an error in a JavaScript program by creating an event listener that runs a function':
    'false',
  'This command creates an event listener that runs a function in response to an error.':
    'window.addEventListener("error", function)',
  'attempting to use a variable defined within one function to perform calculations in a different function will result in a...':
    'runtime error',
  'The order in which various parts of a program run, or execute.': 'logic',
  'syntax error': 'load time error',
  'document.writ() is an example of what type of error?': 'load time error',
  'An error that occurs when a JavaScript interpreter encounters a problem while a program is executing.':
    'runtime error',
  'A flaw in a program’s design that prevents the program from running as anticipated.':
    'logic error',
  'To enforce adherence to JavaScript syntax add this text string to the beginning of the code...':
    '"use strict";',
  'he interpreter finds error in the syntax of the code as it initially loads it':
    'load time error',
  'the interpret has loaded the code but is unable to run it due to such factors as an unreferenced variable or a mistyped function name':
    'runtime error',
  'A syntax mistake such as a misspelled keyword will result in a...':
    'load time error',
  'Commenting out lines and observing the change is an efficient way to locate these this type of bug...':
    'logic error',
  '(true/false): It is considered a best practice for web apps to open new browser windows in many situations because they are not blocked by the popup blockers built into browsers, they scale well to small mobile devices, and they can display files that are loaded locally on the user’s device.':
    'false',
  'Its primary role is managing the operation of and output from the app':
    'JavaScript',
  'This expression references the third element that is a direct child of the node object':
    'node.children[2]',
  'Expression indicating the first element within a node':
    'node.firstElementChild',
  'Expression indicating the last element within a node':
    'node.lastElementChild',
  'Expression indicating the parent element of a node': 'node.parentElement',
  'Expression indicating a node list of all elements which are direct children of a node':
    'node.children',
  '(true/false): The statement window.open("src", "New Window", toolbar=0, menubar=0); will open a new browser window that includes the browser menu bar and toolbar.':
    'false',
  '(true/false): The statement window.open("src", "New Window", toolbar=1, menubar=1); will open a new browser window that includes the browser menu bar and toolbar.':
    'true',
  '(true/false): If the node is aleady part of a document tree, the appendChild() method moves the node from its current location to that new position.':
    'true',
  'This is the root node of a web document': 'document',
  'In the Document Object Model, nodes are organized into a hierarchical structured called a...':
    'node tree',
  '(true/false): The html element is considered the root node of a web document':
    'false',
  '(true/false): In the Document Object Model, the elements, attributes, comments, processing instructions, and text strings of a web document are organized into a hierarchical structure':
    'true',
  'Write a statement that runs the function "logOut" after a 1-minute delay':
    'window.setTimeout(logOut, 60000)',
  'This method repeats a command at set intervals': 'setInterval()',
  'This method prevents a delayed command from running': 'clearTimeout()',
  "This property returns information on the browser's primary language":
    'navigator.language',
  'This property returns information about the platform on which the browser is running':
    'navigator.platform',
  'Write a statement that runs the updateOrder function each time a selection list named crustStyle, an element of orderForm, changes.':
    'orderForm.elements.crustStyle.onchange = updateOrder',
  'A web form that allows users to select choices from a drop-down menu would be organized as a...':
    'hierarchy',
  '(true/false): A web form that allows users to select choices from a drop-down menu would be organized as an array that includes an element followed by three options.':
    'false',
  '(true/false): A web form that allows users to select choices from a drop-down menu would be organized as a hierarchy that includes an element with three otions as its children.':
    'true',
  'This method will cause a selection list in a web form to become active and ready for data entry.':
    'element.focus()',
  'Write a statement that returns a string showing the numeric value stored in a variable named price, reformatted as U.S. dollars.':
    'price.toLocaleString("en-US", {style: "currency", currency: "USD"})',
  'You can apply the preventDefault() method to the event object that is captured by an invalid event listener in order to prevent the default browser actions associated with that invalid event when it occurs.':
    'true',
  'Write a statement using the checkValidity() method (which returns a boolean) to check the validity of a field named "cardName" in a form named "payment".':
    'document.forms.payment.elements.cardName.checkValidity()',
  'The toFixed() method returns what data type?': 'string',
  'Write a statement that returns amountDue (a numeric value of 2.2199834) to the string "2.22"':
    'amountDue.toFixed(2)',
  '(true/false): When applying the toLocaleString() method, you can include "useGroup: true" as an optional parameter to indicate that a thousands grouping symbol should be used to format a number.':
    'true',
  '(true/false): The JavaScript reset() method is typically applied to an individual field in a web form to indicate that an invalid value has been entered.':
    'false',
  'These variable types are block scoped, meaning their scope is limited to the command black in which they are defined, or any code nested within that block':
    'const, let',
  'This variable type is function scoped': 'var',
  'Block scope and function scope are collectively referred to as...':
    'local scope',
  'Variables or functions defined outside of any command block or function':
    'global scope',
  'This primitive data type represents an empty value': 'null',
  'This primitive data type represents an unassigned, undeclared, or nonexistent value':
    'undefined',
  'A shortened format for writing very large numbers or numbers with many decimal places with the letter e separating the decimal and exponent parts of the value':
    'exponentiaal notation',
  'Floating point values beyond 1.8 x 10^308 are assigned the keyword...':
    'Infinity',
  'A text string enclosed with the backtick character ( `) which allows the string to be written across several lines and be made available to JavaScript tools for handling text characters.':
    'template literal',
  '(true/false): JavaScript has the data type char': 'false',
  'The backslash character (\\), which tells JavaScript compilers and interpreters that the character that follows it has a special purpose.':
    'escape character',
  'What is the scope of variables declared with the let keyword?':
    'block scope',
  'Property access operator': '.',
  'Array index operator': '[]',
  'Determines the data type of a variable': 'typeof',
  'Returns true if an object is of a specified object type': 'instanceof',
  'A value inserted into an input control can be referenced by this expression...':
    'object.value',
  'To apply a change event listener which triggers a function, write this statement...':
    'object.addEventListener("change", function)',
  'Write a statement that triggers a functioned named getEstimate when the document id "quantity" changes':
    'document.getElementById("quantity").onchange = getEstimate',
  'The propagation of an event moving up the object hierarchy from the most specific object to the most general or from the innermost object to the browser window.':
    'bubbling phase',
  'To attach an event listener to an object, apply this method...':
    'object.addEventListener("event", function, capture)',
  'The default value of capture in an event listener method': 'false',
  '(true/false): You can use anonymous functions with both event handlers and event listeners':
    'true',
  'The difference between an event handler and event listener is that this one allows multiple event functions for the same event':
    'event listener',
  'Write an event listener for the load event which runs the function "setupForm"':
    'window.addEventListener("load", setupForm)',
  'A set of related statements with no name assigned to it.':
    'anonymous function',
  'A click event is first tracked in the bubbling phase or the capture phase?':
    'capture phase',
  'A set of data represented by a single variable name': 'array',
  'Write an expression that references the second element in the document belonging to the "sideBar" class.':
    'document.getElementsByClassName("sideBar")[1]',
  'Write an expression that references the first h1 element within the document.':
    'document.getElementsByTagName("h1")[0]',
  'Write an expression that references the third element in the document whose name attribute equals "menuChoice".':
    'document.getElementsByName("menuChoice")[2]',
  'Write the expression that returns the length of an array': 'array.length',
  'Write the expression that references the fifth inline image in the document.':
    'document.images[4]',
  'A function that is passed as a parameter to another function or method.':
    'callback function',
  'Write a JavaScript method that can be used to insert HTML "text" just after an element\'s opening tag.':
    'document.insertAdjacentHTML("afterBegin", text)',
  'What method can be used to apply a function to each element of an array without writing a program loop?':
    'forEach()',
  'A debugging technique that involves examining individual statements in an executing program.':
    'tracing',
  'The temporary suspension of program execution in a browser so the programmer can monitor values and trace program execution.':
    'break mode',
  'The ordered list maintained by a JavaScript processor containing all the procedures, such as functions, methods, or event handlers, that have been called but have not yet finished processing.':
    'call stack',
  'A method of bulletproofing code that allows a program to handle errors as they occur in the execution of the program.':
    'exception handling',
  'An error that occurs in the execution of a program.': 'exception',
  'A JavaScript statement used to trigger an error event.': 'throw',
  'The two properties of a built-in error': 'name, message',
  'Write a statement that adds an event listener in response to errors, triggering the function "processErrors".':
    'window.addEventListener("error", processErrors)',
  'This command will be run when an exception or error is thrown within the code.':
    'catch',
  'What must be included within an error handling function to replace the browser’s default error reporting methods?':
    'return true',
  'Use this statement to indicate that an error occured within a try block.':
    'throw',
  'After a program throws an error, you can use this statement to handle the error.':
    'catch',
  'Write an expression that creates a node list by selecting all paragraph element nodes belonging to a CSS class named "review".':
    'document.querySelectorAll("p.review")',
  '(true/false): A node list is the same as an HTML collection': 'false',
  'This method returns the first element node that matches the CSS selector (rather than a complete node list).':
    'querySelector()',
  'Write an expression that creates an h1 header.':
    'document.createElement("h1")',
  'Write an expression that creates a text node containing the text string "Hello world".':
    'document.createTextNode("Hello world")',
  '(true/false): Nodes support the innerHTML and textContent properties so you can always add HTML code and text to a node as a quick way of creating a document fragment.':
    'true',
  'This expression adds a node as the last child.': 'node.appendChild()',
  'Write an expression that creates a div.': 'document.createElement("div")',
  'Write an expression that appends "newElement" in "parentElement" before "firstChild".':
    'parentElement.insertBefore(newElement, firstChild)',
  'Write a statement that references the last child element of the element with the id "main".':
    'document.getElementById("main").lastElementChild',
  'Write a statement that appends a variable "rating" to a div element with the id "review".':
    'document.getElementById("review").appendChild(rating)',
  'Write a statement that changes the font size of a variable node named "about" to 1.2em.':
    'about.style.fontSize = "1.2em"',
  '(true/false): If the node is already part of a document tree, the appendChild() method moves the node from its current location to that new position.':
    'true',
  'Write a statement that moves the first child of a node named "about" to the end of the children list.':
    'about.appendChild(about.firstElementChild)',
  'Write a statement that moves the last child of a node named "about" to the beginning of the children list.':
    'about.insertBefore(about.lastElementChild, about.firstElementChild)',
  "A copy of a node that includes all the node's descendants.": 'deep copy',
  'Write an expression that clones a node named "about" and all of its descendants.':
    'about.cloneNode(true)',
  'Write an expression that clones a node named "about" with none of its descendants.':
    'about.cloneNode(false)',
  'Write a statement that repeats the checkAnswers() function every 10 seconds, storing it in the variable "timeID".':
    'timeID = window.setInterval(checkAnswers, 1000)',
  'Write a statement that stops a function named checkAnswers(), stored in a time id named "timeID", from repeating.':
    'clearInterval(timeID)',
  'Write a statement that displays the message "Hello?" above an input box':
    'window.prompt("Hello?")',
  'This method creates a new browser window.': 'window.open()',
  '(true/false): You can create a new window, setting its height and width, and include form elements, tables, and images, ultimately designing a customized dialog box.':
    'true',
  'Write a statement that removes a node variable named "rats" from the HTML body.':
    'document.body.removeChild(rats)',
  'Write a statement that creates a confirmation window with the message "Continue?", storing the response in "continuePlay".':
    'continuePlay = window.confirm("Continue?")',
  'Write a statement that creates a prompt window with the message "Enter your state" with the default value, "MO", stored in "state".':
    'state = window.prompt("Enter your state", "MO")',
  'Write a statement to increase the width of "myWindow" by 100 pixels and the height by 50 pixels.':
    'myWindow.resizeBy(100, 50)',
  'References the owner of a currently running segment of a JavaScript code.':
    'this',
  'The child object of the window object that maintains an internal list of all the documents that have been opened during the current web browser session.':
    'history object',
  'Write a statement to go back one page in the history list.':
    'window.history.back()',
  'The child object of the window object that is used to obtain information about the current browser.':
    'navigator object',
  'The child object of the window object that is used to obtain information about the display screen’s size, resolution, and color depth.':
    'screen object',
  'Because a page can contain multiple web forms, JavaScript organizes forms into this HTML collection...':
    'document.forms',
  'Write a statement that resets the form with the name "orderForm" in the current document.':
    'document.forms.orderForm.reset()',
  'Write a statement that sets the value of "username" in the "orderForm" form to "John Smith".':
    'document.orderForm.username.value = "John Smith"',
  'Write a statement referencing the second element within the first web form on the web page.':
    'document.forms[0].elements[1]',
  'Write a statement retrieving the value of the checked option in the option group for a field named "shipping".':
    'document.querySelector(\'input[name="shipping"]:checked\').value',
  'Write a statement that runs the function calcShipping() when the value of the state field in a form named "shoppingCart" is changed.':
    'document.forms.shoppingCart.elements.state.onchange = calcShipping',
  'Write a statement which turns off the native browser validation for a web form named "reviewForm".':
    'document.forms.reviewForm.noValidate = true',
  'Write a statement to indicate whether there is a type mismatch for data entered in the input box with the id "reviewDate".':
    'document.getElementById("reviewDate").validity.typeMismatch',
  'Write a statement to indicate whether the field with the id "reviewRating" has a value greater than allowed by the max attribute.':
    'document.getElementById("reviewRating").validity.rangeOverflow',
  'Write a statement to change the validation message for the "reviewRating" input box to "Value too large."':
    'document.getElementById("reviewRating").setCustomValidity("Value too large.")',
  'Write a statement to test whether the value entered into an input box id named "customerID" matches the regular expression /^[A-Z]{3}-\\d{2}$/.':
    '/^[A-Z]{3}-\\d{2}$/.test(document.getElementById("customerID").value)',
  'These algorithms are used to determine whether the digits in a numeric id match specified mathematical conditions. Credit cards use the Lun or mod 10 algorithm.':
    'checksum algorithms',
  'Check whether a field value is true using this method.': 'checkValidity()',
  "To learn the state of a field's value and why it might be invalid, use this property.":
    'validity',
  'A collection of files retrieved using the file data type of the input element.':
    'files collection',
  'A single file within the files collection.': 'files object',
  'Create a new file reader object and store it in the variable "reader".':
    'reader = new FileReader()',
  'Returns the number of characters in "string".': 'string.length',
  'Search for a substring "union" in a variable named "sourceText".':
    'sourceText.includes(" union ")',
  '(true/false): Strings are mutable. They can be modified.': 'false',
  'Write a statement that converts a variable "string" to lowercase characters.':
    'string = string.toLowerCase()',
  'This method extracts a substring from "string", between the start and end index values; if no end value is specified the substring extends to the end of the string.':
    'string.slice(start, end)',
  'This method splits "string" into an array of string values for each occurrence of a "."':
    'string.split(".")',
  'Write a statement that reads the file "memo.txt" into the "fReader" object as text.':
    'fReader.readAsText("memo.txt")',
  'What text string is returned by the expression "Daily Memo".slice(3, 8)?':
    'ly Me',
  'What value is returned by the expression "Daily".localeCompare("Memo")?':
    '-1',
  'Provide a regular expression to match every occurrence of the word "the" regardless of case.':
    '/the/gi',
  'What regular expression symbol matches every character but a whitespace character?':
    '/s',
  'Write a statement to sort the "username" array based on the byOrders() compare function.':
    'username.sort(byOrders)',
  '"x" is an array that contains the elements 1, 2, 3, 4, 5, 6. When using the method x.slice(2, 4), how many elements are returned?':
    '2',
  'Write a statement that replaces "c", "d" "e" from an array "x" which contains ["a", "b", "c", "d", "e", "f", "g"] with "h", "i", "j"':
    'x.splice(2, 3, "h", "i", "j")',
  'Use the Math object to round "x" to the next highest integer.':
    'Math.ceil(x)',
  'Use the Math object to round "x" to the next lowest integer.':
    'Math.floor(x)',
  'Write a statement storing the current date and time in a variable named "trialStart"':
    'trialStart = new Date()',
  'a standalone object used once for a single purpose': 'object literal',
  'added to a custom object with name:value pairs within a command block':
    'properties',
  'can be referenced using either the dot operator or bracket notation':
    'object properties',
  'Write the command that creates an object literal via constructor':
    'new Object()',
  'acts as a template or blueprint for the creation of new objects all sharing a common collection of properties and methods':
    'object class',
  'a template for all the properties and methods associated with the object’s class':
    'prototype',
  'What JavaScript calls Hashmaps': 'associative array',
  'a text-based data structure used for storing data using the general structure of key:value pairs within an object':
    'JSON',
  'a copy of a function that also copies the lexical environment of variables within the function':
    'closure',
  'the programmatic elements that make the inner workings of an object accessible to other programs and scripts':
    'interface',
  'the process by which all code (primarily properties and methods) and data needed for the object are completely contained within the object itself':
    'encapsulation',
  'Write a method, "placeBet", for an object that decrements the bank property':
    'placeBet: function() {this.bank--;}',
  '(true/false): You can create an object literal such as let object = { methods: function() { commands } };':
    'true',
  'A specific object created from an object class.': 'object instance',
  'A command in the form new Class(parameters) used to create new objects from an object class.':
    'object constructor',
  'A function used to define an object class.': 'constructor function',
  'Write a Player class prototype method named placeBet':
    'Player.prototype.placeBet = function()',
  '(true/false): You can extend a native object such as "Array" with new methods added to their prototypes.':
    'true',
  '(true/false): An object literal is a definition of an object that can be created multiple times for different contexts':
    'false',
  '(true/false): An object class is a definition of an object that can be created multiple times for different contexts':
    'true',
  'Write a construction function named "bounceBall" which sets a property named "speed" to a parameter value "x"':
    'function bounceBall(x) {this.speed = x;}',
  'Write a statement to instantiate an object variable named "myBall" created from the bounceBall class with a parameter value of 50':
    'let myBall = new bounceBall(50)',
  'This function can be thought of as a machine to instantiate objects':
    'constructor',
  'an object that acts as a template for all the properties and methods associated with the object’s class':
    'prototype',
  'Write a statement to add the "moveBall()" method to the prototype of the "bounceBall" constructor function':
    'bounceBall.prototype.moveBall = function',
  'The scope of variables, functions, and other objects is based on their physical location within the source code. (Static Scope)':
    'lexical scope',
  'The programming environment that encompasses a function and its variables and their values.':
    'lexical environment',
  'A copy of a function and the lexical environment of the function’s variables.':
    'closure',
  '“enclose” everything about a function, including its context within a larger source code':
    'closure',
  'A method defined for the object prototype which can be called outside of the object.':
    'public method',
  'A method created within the constructor function and thus accessible only within the constructor.':
    'private method',
  'A method that accesses private variables and methods but is also accessible to the public.':
    'privileged method',
  'a copy is made of a function and, thus, the lexical environment in which that function exists':
    'closure',
  "(true/false): A closure copies a function's lexical environment, and thus, it optimizes system resources such as system memory":
    'false',
  '(true/false): A private method is accessible outside of the constructor':
    'false',
  '(true/false): A private method is a method created within the constructor function and, thus, is accessible only within the constructor':
    'true',
  'A hierarchy of objects from a base object class down to lower classes or subclasses':
    'prototype chain',
  'An object class at the higher levels of a prototype chain.': 'superclass',
  'An object class at the lower levels of a prototype chain': 'subclass',
  'The process by which the properties and methods of an object class at one level are shared with an object class within a nested level.':
    'prototypal inheritance',
  '(true/false): All prototype chains ultimately find their source in the base object':
    'true',
  '(true/false): In JavaScript, when defining a prototype chain, start at the lowest subclass and move up the chain to the superclass.':
    'true',
  'The fundamental JavaScript object whose properties and methods are shared with all custom and native objects.':
    'base object',
  'This method returns true if "object" has the specified property "prop"':
    'object.hasOwnProperty(prop)',
  'This method returns an array of the enumerable properties found in "obj"':
    'Object.keys(obj)',
  'This method creates an object using the prototype "proto"':
    'Object.create(proto)',
  'Write a statement that allows thisObj to borrow the method "placeBet"':
    'placeBet.apply(thisObj)',
  'similar to the apply() method except that the argument values are placed in a comma-separated list of values instead of an array':
    'call()',
  'A data structure with data values defined using key:value pairs.':
    'associative array',
  '(true/false): Associative arrays support the JavaScript Array object properties and methods, such as "length" or sort().':
    'false',
  'Write a for in loop which references the keys, declaring them "prop", within the associative array "cars"':
    'for (let prop in cars)',
  '(true/false): Only properties that are countable, or enumerable, are accessible to for in loops.':
    'true',
  'Write a for of loop which references "items" of "list"':
    'for (let items of list)',
  'Write a statement that parses a JSON text string, stored as "JSONtxt", storing it into a new variable named "employees"':
    'let employees = JSON.parse(JSONtxt)',
  'Write a statement to specify that the "Clothing" object class is a subclass of the "Merchandise" class.':
    'Clothing.prototype = new Merchandise()',
  'Write an expression to test whether the "myCard" object contains a property named "suit".':
    'myCard.hasOwnProperty("suit")',
  'Which command should be used to loop through properties of an associative array?':
    'for in',
  'Use this method to call a method from another object and apply it to the current object with argument values entered in comma-separated list.':
    'call()',
  'Use this method to convert a JavaScript object into a JSON text string.':
    'stringify()',
  'A communication protocol that does not accommodate the storage of data beyond the current session.':
    'stateless',
  'The main protocol used to encrypt data on websites.':
    'Secure Sockets Layer (SSL)',
  'The encryption standard planned to eventually replace SSL.':
    'Transport Layer Security (TLS)',
  'Part of the HTTP protocol that is generated each time the web server and client exchange data, consisting of a header containing data about the browser and its capabilities and a body containing information necessary to process the request.':
    'HTTP request',
  'A method of submitting web forms that appends the form data to the body of the HTTP request.':
    'post method',
  'A method of sending data to the server that appends the data as part of a query string added to the URL of a web page address.':
    'get method',
  '(true/false): To retrieve data from a form submitted using the get method, you must run a script on the server that can access data stored in the HTTP request.':
    'false',
  '(true/false): To retrieve data from a form submitted using the post method, you must run a script on the server that can access data stored in the HTTP request.':
    'true',
  'This method appends data as part of a text string that is added to the URL of a web page address':
    'get method',
  'This method appends form data to the body of the HTTP request':
    'post method',
  'This method converts a query string of URI encoding into their character equivalent':
    'decodeURIComponent()',
  'What character is used within a query string to separate name=value pairs?':
    '&',
  'A JavaScript specification that enables browsers to store data as text strings within an associative array that can be read by the client device using the browser interface.':
    'Web Storage API',
  'There are two types of storage supported in the Web Storage API: local storage and...':
    'session storage',
  'Both local storage objects and session storage objects map field names and values into an...':
    'associative array',
  'Web storage in which the data is permanently stored by the browser and can be accessed anytime by the user running that browser on that client device.':
    'local storage object',
  'Web storage in which the data is accessible only during the current session.':
    'session storage object',
  'Write a statement that stores the key "name" and value "Brandon" to local storage.':
    'localStorage.setItem("name", "Brandon")',
  'Write a statement that references the number of keys in local storage.':
    'localStorage.length',
  'Write a statement, using a method, that retrieves the value of "name" in local storage.':
    'localStorage.getItem("name")',
  'Write a statement, using bracket notation, that retrieves the value of "name" in local storage.':
    'localStorage["name"]',
  'Write a statement, using dot notation, that retrieves the value of "name" in local storage.':
    'localStorage.name',
  '(true/false): localStorage.key(8) returns the value of the 8th index key':
    'false',
  '(true/false): localStorage.key(8) returns the key name of the 8th index key':
    'true',
  'Use the clear() method to remove all keys from local storage':
    'localStorage.clear()',
  'Write a statement that removes the "name" key-value in local storage.':
    'localStorage.removeItem("name")',
  'A set of security standards that restricts how data from one origin can be accessed by a web page located at a different origin.':
    'same origin policy',
  'Local storage permanently stores data in the...': 'browser',
  'Write a statement to create a session storage object named "orderQty" that stores a value of 5.':
    'sessionStorage.setItem("orderQty", 5)',
  'Write a statement to delete the orderQty key from session storage.':
    'sessionStorage.removeItem("orderQty")',
  'A small piece of information stored as a text string that is exchanged between a web server and client device with every HTTP request.':
    'cookie',
  'Cookie that remains available only for the current browser session.':
    'session cookie',
  'A cookie that remains available beyond the current browser session and is stored in a text file on a client computer.':
    'persistent cookie',
  'Write a statement that creates a cookie storing the value "MO" in "state".':
    'document.cookie = "state=MO"',
  '(true/false): All cookies are, by default, session cookies, but their life can be extended by using the expires=date attribute.':
    'true',
  'A string of random characters used to verify a user’s identity in a system that supports persistent logins.':
    'token',
  "(true/false): Cookies are stored unencrypted on the client device's hard drive.":
    'true',
  'The halting of program operation pending a response from a callback function or other code currently being run.':
    'synchronous',
  'A query sent to a server resource asking for content.': 'request',
  'A reply from a server resource when data is requested.': 'response',
  'Type of client-server connection in which client activity continues in the background while waiting for a server response.':
    'asynchronous',
  'An application, usually a web browser, that makes a request from a server.':
    'HTTP client',
  'A web server or computer that receives HTTP requests and returns a response to HTTP clients.':
    'HTTP server',
  'A message transferred between a server and client via the HTTP protocol.':
    'HTTP message',
  'Temporary storage for data on a local device to enable faster access to that data.':
    'caching',
  'Asynchronous JavaScript and XML': 'AJAX',
  'A technology for transferring asynchronous HTTP messages between a client and server with particular support for XML documents.':
    'AJAX',
  'A request object used to send requests from the client to the server over the HTTP communication protocol.':
    'XMLHttpRequest object',
  XHR: 'XMLHttpRequest',
  'XHR requests begin with this method which defines where to submit a request and how the request should be processed.':
    'open()',
  'Server request status successful, code...': '200',
  'The requested URL has been permanently moved, code...': '301',
  'The requested URL has been temporarily moved, code...': '302',
  'The client already has the current version of the requested server content, code...':
    '304',
  'The requested URL was not found, code...': '404',
  'The request could not be completed due to server error, code...': '500',
  'A programming challenge in which callbacks involving multiple asynchronous requests are organized in a large and unwieldy nested structure.':
    'callback hell',
  'Most web browsers reduce the amount of data that needs to be retrieved from a server by...':
    'caching',
  'Provide a statement to create a new request object named "MyReq"':
    'let MyReq = new XMLHttpRequest()',
  'Provide a statement to open the MyReq object to the URL "http://www.example.com" using the GET method':
    'MyReq.open("get", "http://www.example.com")',
  'What property value indicates that a complete response has been received from the server (using the request object variable "xhr")?':
    'xhr.readyState === 4',
  'A statement that stores a function as a variable.': 'function expression',
  'The => symbol that replaces the function keyword in an arrow function.':
    'fat arrow',
  '(true/false): You can create named functions using the const keyword in place of let for both a function expression and an arrow function.':
    'true',
  '(true/false): In an arrow function, you can insert a line break between the parameters and the fat arrow symbol.':
    'false',
  '(true/false): Because arrow functions do not have their own this value, they should not be used with event handlers where the this value is needed.':
    'true',
  '(true/false): Arrow functions should not be used to define object methods or methods for object classes.':
    'true',
  'An object that does not have a value currently but might have one in the future once certain conditions are met.':
    'promise',
  'The three states in which a promise exists': 'pending, resolved, rejected',
  'A sequence of promises in which each promise relies on the successful resolution of the prior promise.':
    'promise chain',
  'A JavaScript API replacement for AJAX that uses promises to manage server requests and responses.':
    'Fetch API',
  'Write in arrow function syntax... function display(msg) { alert(msg); }':
    'let display = msg => alert(msg)',
  'Provide code to send a promise to the "https://jsonshow/photos" resource using Fetch.':
    'fetch("https://jsonshow/photos")',
  'What method should be applied to a response object ("response") to return a promise that can be parsed as text?':
    'response.text()',
  'Extensible Markup Language': 'XML',
  '(true/false): XML is like HTML but allows for flexible, customizable markup tags':
    'true',
  'A technology that uses XML to transmit current news stories to media outlets and podcasts.':
    'RSS newsfeeds',
  'This method is the default Fetch option, and it is used to retrieve server data':
    'GET',
  '(true/false): Because GET is limited to read-only operations, there is no risk of modifying server content':
    'true',
  'This method sends data to the server, such as uploading the contents of a web form or adding a new user profile':
    'POST',
  'This method changes existing server data via replacing the data with new data':
    'PUT',
  'This method modifies existing server data without rewriting the original data.':
    'PATCH',
  'This method deletes data on a server, such as removing an entire user from a database':
    'DELETE',
  '(true/false): Other than GET, the name of the method always needs to be included in the message body of a fetch request':
    'true',
  'Provide code to create an XML parser stored in "parser" object variable':
    'let parser = new DOMParser()',
  'What method parses JSON data received from a response object named "response"?':
    'response.json()',
  'What method would you use to change a user profile in a database on a server?':
    'PUT',
  'The point of contact between the client and server resource, often specified as the URL that receives the client request.':
    'endpoint',
  'A method of bypassing the same-origin policy by including a special HTTP request header in the message from the client to the server.':
    'CORS',
  'Cross Origin Resource Sharing, which places information with the HTTP message header indicating that such transfers are allowed.':
    'CORS',
  'A domain that can receive data from a service resource without hindrance from the browser.':
    'fully qualified domain',
  '(true/false): If the same-origin policy is violated, the requested data will still be sent, but the browser will not allow JavaScript to access the response.':
    'true',
  'A technique for requesting data from a server on a different origin in which the request is folded within a script element rather than as a request object or a Fetch promise':
    'JSONP',
  'JSON with Padding, data transfer across origins prior to CORS': 'JSONP',
  'A server that handles an HTTP request for the client rather than relying on the client’s own server.':
    'proxy server',
  'the point of contact between the client device and a server resource; essentially, the url to which a server request is made':
    'API endpoint',
  'The Event Loop in JavaScript uses this data structure': 'Queue',
};

export default JSTERMS;
