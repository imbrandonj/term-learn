const CYBERTERMS = {
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
  'A user masquerades as other users, what type of attack was used?': 'XSS',
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
  'An employee stealing company data could be an example of which kind of threat actor?':
    'internal threat',
  'A general term used to describe any individual who uses their technical knowledge to gain unauthorized access to an organization':
    'hacker',
  'an individual who carries out an attack by using scripts or programs written by more advanced hackers':
    'script kiddie',
  'A hacker scans hundreds of IP addresses randomly on the internet until they find an exploitable target. What kind of attack is this?':
    'opportunistic attack',
  'Preparing a computer to perform additional tasks in the attack': 'staging',
  'the process of gathering information about an organization, including system hardware information, network configuration, and individual user information':
    'reconnaissance',
  'the process of implementing multiple security measures to protect the same asset':
    'layering',
  'which phase of an attack does the attacker gather information about the target?':
    'reconnaissance',
  'ensures that data is not disclosed to unintended persons': 'confidentiality',
  'these people generally use the internet to carry out activities such as disrupting network-dependent institutions':
    'cyber terrorists',
  'The ability to prove that a sender undeniably sent a message':
    'non-repudiation',
  'the protection and confidentiality of personal information': 'privacy',
  'protection against alteration': 'integrity',
  'this layer of the security model includes user management and web application security':
    'application layer',
  'this layer of the security model includes log management': 'host layer',
  'this layer of the security model includes environmental controls':
    'physical layer',
  'this layer of the security model includes cryptography': 'data layer',
  'this layer of the security model includes securing firewalls':
    'perimeter layer',
  'the single greatest threat to network security': 'employees',
  'this layer of the security model includes penetration testing':
    'network layer',
  'A collection of zombie computers have been set up to collect personal information. Which type of malware do the zombie computers represent?':
    'botnet',
  'this kind of virus operates only in memory and usually exploits a trusted application like PowerShell to circumvent traditional endpoint security solutions':
    'fileless virus',
  'a self-replicating program': 'worm',
  'A type of malware that prevents the system from being used until the victim pays the attacker money':
    'ransomware',
  'this kind of malware provides an attacker with administrative control over a target computer through a backdoor':
    'remote access trojan',
  'monitors the actions you take on your machine and sends the information back to its originating source':
    'spyware',
  'a malicious program disguised as legitimate software': 'Trojan horse',
  'a program that attempts to damage a computer system and replicate itself to other computer systems':
    'virus',
  'Any attack involving human interaction of some kind': 'social engineering',
  'Keylogging, impersonation, and shoulder surfing are all examples of this type of attack':
    'social engineering',
  'The root account has all privileges and no barriers. Also known as...':
    'super user account',
  'when confidential or protected data is exposed': 'data breach',
  'this camera type lets you dynamically move and zoom in on specific areas':
    'PTZ',
  'Passwords, access control lists, and smart cards are all examples of...':
    'technical control',
  'Requiring background checks for hiring is an example of a policy or...':
    'administrative control',
  'when an authorized or unauthorized individual gains entry into a secured area by exploiting the credentials of a prior person':
    'piggybacking',
  'the phase after a breach has occurred in which damage from the event is repaired and a review is made to determine what should be done to prevent future incidents of the same nature':
    'recovery',
  'access control technology that allows more than just the identity of an individual to be transmitted wirelessly, to either allow or deny access':
    'smart card',
  'provides enhanced security by isolating your publicly accessible network from your privately accessible network':
    'demilitarized zone',
  'a security method that physically isolates a portion of the network (such as a computer, a server, or a small network of computers) from the internet or any other unsecured networks':
    'air gap',
  'Faraday cages are designed to block all...': 'electromagnetic emissions',
  'the best protection against the physical theft of laptops is the placement of a...':
    'cable lock',
  'To control access to the router console, you must keep the router in a...':
    'locked room',
  'Burning, pulping (using water or chemicals), and shredding are three ways to securely dispose of data in which form?':
    'paper',
  'A computer or small network that is not connected to the rest of the network or the internet is known as...':
    'air gap',
  'used to allow a USB device to charge but blocks the data transfer capabilities of the device':
    'USB data blocker',
  'an area of the network where extra security is placed to protect the internal network from publicly accessible servers like web servers and email servers':
    'demilitarized zone',
  'it is important to follow correct procedures when running electrical cables next to data cables in order to protect against this environmental concern...':
    'electromagnetic interference',
  'where all of the heat is sent from the servers and network equipment to be transmitted to the HVAC return vent':
    'hot aisle',
  'power, heating, ventilation, air conditioning systems (HVAC), and utilities are all components of...':
    'infrastructure',
  'provides continuous power using batteries for a short period of time, often paired with a backup generator':
    'uninterruptible power supply',
  'the process of capturing data packets that are flowing across the network and analyzing them for important information':
    'packet sniffing',
  'a command line tool that is used to perform a connection test between two network devices':
    'ping',
  'a tool that shows the path a packet takes to reach its destination':
    'traceroute',
  'command tool used to display the IP configuration on the local computer':
    'ipconfig',
  'the third phase of the penetration test life cycle; uses the information gathered in earlier phases to exploit discovered vulnerabilities':
    'gain access',
  'Which step in the penetration testing life cycle is accomplished using rootkits or Trojan horse programs?':
    'maintain access',
  'team members on the defense of the system': 'blue team',
  'ethical hacker team performing penetration tests': 'red team',
  'the practice of proactively testing systems and policies for vulnerabilities':
    'penetration testing',
  'Linux tool command that can be used to look up DNS server information and give IP addresses and domain names for a network server':
    'dig',
  'a tool command used in both Windows and Linux to show the routing table and to make manual changes to it':
    'route',
  'a tool that can discover devices on a network and show those devices in a graphical representation':
    'network mapper',
  'a command used to perform a connection test by sending ICMP packets to a specified device on a network and then wait for a response':
    'ping',
  'an open-source security scanner used for network enumeration and vulnerability scanning':
    'Nmap',
  'to create a DMZ, you must configure the router to forward traffic to a specific...':
    'IP address',
  'a security technology that watches for and protects a system from malicious or unnecessary actions':
    'intrusion prevention system',
  'which encryption type is more secure and uses public and private keys?':
    'asymmetric',
  'which encryption type is faster but less secure and uses the same key for both encryption and decryption?':
    'symmetric',
  'which encryption type is less secure and uses a key that is often 40 to 45 characters in length?':
    'WEP',
  'which encryption type is more secure and uses a key that is 128 to 256 characters in length?':
    'WPA3',
  'when a secure website uses SSL/TLS to secure communication between the web browser and the web server, what is the secure communication protocol?':
    'https',
  'what is the term for a program that appears to be harmless but is malicious?':
    'Trojan horse',
  'What is the primary purpose of penetration testing?':
    'to identify and fix vulnerabilities in a system',
  'Which encryption method uses a single key for both encryption and decryption?':
    'symmetric',
  'Which security control is designed to prevent unauthorized access?':
    'firewall',
  'Which type of malware is designed to block access to a computer system until a sum of money is paid?':
    'ransomware',
  'Which security control is an example of a technical control?':
    'biometric authentication',
  'Which type of attack involves an attacker intercepting communication between two parties to gain unauthorized access or information?':
    'man-in-the-middle attack',
  'What is the primary goal of a DDoS (Distributed Denial of Service) attack?':
    'to disrupt the normal functioning of a network or website by overwhelming it with a flood of traffic',
  "Which security measure helps protect against unauthorized access by verifying a user's identity based on physiological or behavioral traits?":
    'biometric authentication',
  'Which term refers to a person or entity that is a known security risk but is intentionally allowed access to a system to monitor their activities?':
    'honeypot',
  'Which security principle ensures that data is not altered or tampered with during transmission or storage?':
    'integrity',
  'Which encryption method uses a pair of keys, namely public and private keys, for secure communication?':
    'asymmetric encryption',
};

export default CYBERTERMS;
