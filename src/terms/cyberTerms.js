const CYBERTERMS = {
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
