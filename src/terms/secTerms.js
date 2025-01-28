const SECTERMS = {
  'What is the primary defense against log injection attacks?':
    'sanitize outbound log messages',
  "When an attacker exploits a cross-site scripting vulnerability, the attacker is able to access the user's...":
    'data',
  'This built-in Python function is prone to a potential code injection attack.':
    'eval()',
  'Checking functional preconditions and postconditions are two common...':
    'defensive techniques',
  'Which package is meant for internal use by Python for regression testing?':
    'test',
  'Writing an except statement for the user to pick a number between 1-10 performs which type of input validation?':
    'type and range check',
  'Performing a GET request to check for the presence of the HTTP Strict Transport Security (HSTS) header is a demonstation of what type of penetration test?':
    'man in the middle',
  'In this type of attack, an attacker intercepts communications between a client (i.e., a browser) and a server, gaining access to sensitive information or modifying data in transit.':
    'man in the middle',
  "A security analyst has noticed a vulnerability in which an attacker took over multiple user's accounts. Which vulnerability did the security analyst encounter?":
    'broken access control',
  'The best way to ensure an API is protected against privilege escalation is to implement resource and...':
    'field level access control',
  'Exploiting query parameters is a method for a...': 'SQL injection attack',
  CORS: 'cross origin resource sharing',
  'Users are allowed to override same starting policy (same-origin policy) for specific resources via...':
    'CORS',
  SOP: 'same origin policy',
  'A security feature implemented in web browsers that restricts how resources (e.g., HTML, JavaScript, etc.) from one origin (a combination of protocol, domain, and port) can interact with resources from another origin.':
    'SOP',
  'Cross-Origin Resource Sharing (CORS) allows servers to override the same-origin policy for specific resources by adding special...':
    'HTTP headers',
  'A library provided by Microsoft to help developers securely integrate authentication and token-based authorization into their applications.':
    'MSAL',
  'A library provided by Microsoft used to handle authentication and token management, caching tokens to optimize access to secure resources.':
    'MSAL',
  "Which response method, when sent a request, returns information about the server's response and is delivered back to the console?":
    'response.content',
  'Status Code: Your request was successful!': '200 OK',
  'Status Code: Your request was accepted, and the resource was created.':
    '201 Created',
  'Status Code: Your request is either wrong or missing some information.':
    '400 Bad Request',
  'Status Code: Your request requires some additional permissions.':
    '401 Unauthorized',
  'Status Code: Website can be reached, but more permissions are needed before accessing further.':
    '403 Forbidden',
  "Status Code: The request resouce doesn't exist.": '404 Not Found',
  "Status Code: The endpoint doesn't allow for that specific HTTP method.":
    '405 Method Not Allowed',
  "Status Code: Your request wasn't expected and probably broke something on the server side.":
    '500 Internal Server Error',
  'Which Python function is used for input validation?': 'type()',
  'Header: The type of content the server will respond with.': 'Content Type',
  'Header: The type of content the client can accept.': 'Accept',
  'Header: The software the server is using to communicate with the client.':
    'Server',
  'Header: The software the client is using to communicate with the server.':
    'User Agent',
  'Header: Who is calling the API and what credentials they have.':
    'Authentication',
  'A user masquerades as other sers, what type of attack was used?': 'XSS',
  XSS: 'Cross Site Scripting',
  'This method returns a raw binary content of the HTTP response as bytes.':
    'response.content',
  'A log injection attack allows an injection of commands a parser can...':
    'execute',
  'Which software testing method relies on using old test cases?':
    'regression testing',
  'Regression testing should be conded after some...': 'code changes',
  'This method can be used on the first (ungraded) page to view status codes.':
    'help(http)',
  'Status Code 401 - Unauthorized is common with which type of errors?': 'API',
  'Status Code 403 - Forbidden is common when this is omitted from the GET request.':
    'HEADER',
  'Status Code: Indicates that the server could not understand or process the request due to invalid syntax or bad formatting. This could happen due to: malformed URL, missing required parameters, or incorrect data.':
    '400 Bad Request',
  'Status Code: Indicates that the request lacks valid authentication credentials and often occurs when an API requires authentication. This could happen due to: API key, token, session or other credentials are either missing, invalid, or expired.':
    '401 Unauthorized',
  'Status Code: Indicates that the server understands the request but refuses to authorize it. This often occurs when the client has the correct credentials but lacks the necessary permissions to access the requested resource. This could happen due to: Insufficient permissions, such as their user role or other access restrictions. (e.g. IP Blacklisting).':
    '403 Forbidden',
  'Status Code: Indicates that the server could not find the requested resource. This typically happens when the URL is incorrect or the resource does not exist on the server.':
    '404 Not Found',
  'Status Code 401 vs 403 - this one pertains to valid authentication but inadequate authorization.':
    '403 Forbidden',
  'Status Code 401 vs 403 - this one pertains to invalid or missing authentication credentials.':
    '401 Unauthorized',
  'Allows or restricts web applications running at one origin (domain) to make requests for resources hosted on a different origin.':
    'CORS',
  'An attempt to overload a website or network, with the aim of degrading its performance or even making it completely inaccessible.':
    'DoS',
  DoS: 'Denial of Service',
  'An attacker is able to insert malicious code into a program. This code is then executed by the system. Potentially leading to unauthorized actions, data breaches, or other harmful outcomes.':
    'code injection',
  'An attacker inserts malicious script (generally through input fields or url parameters not properly sanitized) that is executed by other users who visit the site. The users are then prey to cookie theft, redirection to phishing sites, or their webpage may be manipulated.':
    'XSS',
};

export default SECTERMS;
