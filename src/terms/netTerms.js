const NETTERMS = {
  'A digital telecommunications network which allows nodes to share resources.':
    'computer network',
  'These firewalls are software applications that filter traffic entering and exiting a host machine, like a PC.':
    'host-based',
  'A [...] has many network interfaces for end hosts to connect to.': 'switch',
  'A [...] is a device that accesses a service made available by a server.':
    'client',
  'A [...] is a device that provides functions or services for clients.':
    'server',
  'A [...] is used to send data over the Internet.': 'router',
  'A [...] monitors and controls network traffic based on configured rules.':
    'firewall',
  'A [...] provides connectivity to hosts within the same LAN.': 'switch',
  'A computer network is a digital telecommunications network which allows [...] to share resources.':
    'nodes',
  "A firewall which combines a traditional firewall with more advanced filtering functionalities is known as a '[...] firewall'.":
    'next-generation',
  '[True or False] a single device be both a client and a server.': 'true',
  '[True or False] routers have fewer network interfaces than switches.':
    'true',
  '[True or False] routers have more network interfaces than switches.':
    'false',
  'What does LAN stand for?': 'Local Area Network',
  "What kind of network device is a Cisco 'Catalyst'?": 'switch',
  'What kind of network device is a Cisco ASA?': 'firewall',
  'What kind of network device is a Cisco Firepower?': 'firewall',
  'What kind of network device is a Cisco ISR?': 'router',
  'The wire pairs in UTP cables are twisted together to protect against...':
    'EMI',
  'Which two pin pairs are used in a 10BASE-T or 100BASE-T connection?':
    'pair 1-2, pair 3-6',
  'Which is cheaper, single-mode or multimode fiber?': 'multimode',
  'Which four pin pairs are used in a 1000BASE-T or 10GBASE-T connection?':
    'pair 1-2, pair 3-6, pair 4-5, pair 7-8',
  'Which allows longer cables, single-mode or multimode fiber?': 'single-mode',
  'What kind of cable connects a pin pair on one end of a UTP cable to the same pair on the other end?':
    'straight-through cable',
  'What kind of cable connects a pin pair on one end of a UTP cable to the opposite pair on the other end?':
    'crossover cable',
  "What is the speed of an 'Ethernet' connection?": '10 Mbps',
  "What is the speed of a 'Gigabit Ethernet' connection?": '1 Gbps',
  "What is the speed of a 'FastEthernet' connection?": '100 Mbps',
  "What is the speed of a '10 Gig Ethernet' connection?": '10 Gbps',
  'What is the name of the feature that allows a device to automatically adjust which RJ45 pin pairs it uses to transmit and receive data?':
    'Auto MDI-X',
  'What is the name of the connector on the end of an Ethernet UTP cable?':
    'RJ45',
  'What is the maximum length of an Ethernet UTP cable?': '100 meters',
  'What does UTP stand for?': 'Unshielded Twisted Pair',
  'What are the two main kinds of fiber-optic cable (alpha)?':
    'multimode, single-mode',
  'Network speeds are measured in [...] per second.': 'bits',
  'Multimode Fiber cables have a [...] fiberglass core than single-mode fiber cables.':
    'wider',
  'In a FastEthernet connection, a switch transmits data on which pins?':
    '3, 6',
  'In a FastEthernet connection, a switch receives data on which pins?': '1, 2',
  'In a FastEthernet connection, a router transmits data on which pins?':
    '1, 2',
  'In a FastEthernet connection, a router receives data on which pins?': '3, 6',
  'In a FastEthernet connection, a PC transmits data on which pins?': '1, 2',
  'In a FastEthernet connection, a PC receives data on which pins?': '3, 6',
  'In a FastEthernet connection, a firewall transmits data on which pins?':
    '1, 2',
  'In a FastEthernet connection, a firewall receives data on which pins?':
    '3, 6',
  'In [...] fiber cables, light travels straight through the fiberglass core at a single angle.':
    'single-mode',
  'If Auto MDI-X is disabled, what kind of UTP cable should be used to connect two switches together?':
    'crossover cable',
  'If Auto MDI-X is disabled, what kind of UTP cable should be used to connect two routers together?':
    'crossover cable',
  'If Auto MDI-X is disabled, what kind of UTP cable should be used to connect a router and a switch?':
    'straight-through cable',
  'If Auto MDI-X is disabled, what kind of UTP cable should be used to connect a PC and a switch?':
    'straight-through cable',
  'IEEE standard [...] = 100 Mbps Ethernet (100BASE-T)': '802.3u',
  'IEEE standard [...] = 10 Mbps Ethernet (10BASE-T)': '802.3i',
  'IEEE standard [...] = 10 Gbps Ethernet (10GBASE-T)': '802.3an',
  'IEEE standard [...] = 1 Gbps Ethernet (1000BASE-T)': '802.3ab',
  'How many pins are in an RJ45 connector?': '8',
  'How many pairs of wires are used in a 10GBASE-T cable?': '4 pairs',
  'How many pairs of wires are used in a 10BASE-T cable?': '2 pairs',
  'How many pairs of wires are used in a 100BASE-T cable?': '2 pairs',
  'How many pairs of wires are used in a 1000BASE-T cable?': '4 pairs',
  'How many bits are in 1 terabit?': '1 trillion',
  'How many bits are in 1 gigabit?': '1 billion',
  'How many bits are in 1 megabit?': '1 million',
  'How many bits are in 1 kilobit?': '1000',
  'How many bits are in 1 byte?': '8',
  'Fiber-Optic cables are connected to [...] transceivers in a router or switch.':
    'SFP',
  'Ethernet was originally defined in the IEEE [...] standard in 1983.':
    '802.3',
  'A [...] connection allows both devices to send and receive data at the same time.':
    'full-duplex',
  '[...] fiber cables allow multiple angles (modes) of light waves to enter the fiberglass core.':
    'multimode',
  '[...] cables emit a faint signal outside of the cable, which can be detected and copied.':
    'UTP',
  '[...] cables are vulnerable to EMI (electromagnetic interference).': 'UTP',
  '10GBASE-SR, 10GBASE-LR, and 10GBASE-ER were defined in the IEEE [...] standard.':
    '802.3ae',
  '10GBASE-SR maximum cable length:': '400 meters',
  '10GBASE-LR maximum cable length:': '10 km',
  '10GBASE-ER maximum cable length:': '30 km',
  '1000BASE-LX was defined in the IEEE [...] standard.': '802.3z',
  '1000BASE-LX multimode maximum cable length:': '550 meters',
  '1000BASE-LX single-mode maximum cable length:': '5 km',
  'What does SFP stand for?:': 'Small Form-Factor Pluggable',
};

export default NETTERMS;
