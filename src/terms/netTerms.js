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
  '[True or False] a single device can be both a client and a server.': 'true',
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
  "'Ethernet' connection speed": '10 Mbps',
  "What is the speed of an 'Ethernet' connection?": '10 Mbps',
  "'Gigabit Ethernet' speed": '1 Gbps',
  "What is the speed of a 'Gigabit Ethernet' connection?": '1 Gbps',
  "What is the speed of a 'Fast Ethernet' connection?": '100 Mbps',
  "'Fast Ethernet' speed": '100 Mbps',
  "'10 Gig Ethernet' speed": '10 Gbps',
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
  'IEEE standard for 100 Mbps Ethernet over fiber (100BASE-FX)': '802.3u',
  'IEEE standard for 1 Gbps Ethernet over short-range fiber (1000BASE-SX)':
    '802.3z',
  'IEEE standard for 1 Gbps Ethernet over long-range fiber (1000BASE-LX)':
    '802.3z',
  'IEEE standard for 10 Gbps Ethernet over fiber (10GBASE-SR, LR, ER)':
    '802.3ae',
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
  'A switch interface.': 'port',
  'The RJ in RJ-45 stands for:': 'registered jack',
  'A value represented as either a 0 or a 1.': 'bit',
  'A series of 8 bits.': 'byte',
  'Speed is measured in [...] per second (Kbps, Mbps, Gbps, etc.), not bytes per second.':
    'bits',
  'Data on a hard drive is measured in...': 'bytes',
  '1,000 bits': '1 kilobit',
  '1,000,000 bits': '1 megabit',
  '1,000,000,000 bits': '1 gigabit',
  '1,000,000,000,000 bits': '1 terabit',
  IEEE: 'Institute of Electrical and Electronics Engineers',
  'The maximum length of a copper ethernet cable': '100 meters',
  "In an informal name such as '10BASE-T', the 'T' stands for...":
    'twisted pair',
  "In an informal name such as '10BASE-T', this refers to baseband signaling.":
    'BASE',
  "'Ethernet' IEEE Standard Name": '10BASE-T',
  "'10BASE-T' common name": 'Ethernet',
  "'Fast Ethernet' IEEE Standard Name": '100BASE-T',
  "'100BASE-T' common name": 'Fast Ethernet',
  "'1000BASE-T' common name": 'Gigabit Ethernet',
  "'Gigabit Ethernet' IEEE Standard Name": '1000BASE-T',
  "'10 Gig Ethernet' IEEE Standard Name": '10GBASE-T',
  "'10GBASE-T common name": '10 Gig Ethernet',
  '10 Mbps Ethernet over twisted pair': '10BASE-T',
  '100 Mbps Ethernet (Fast Ethernet)': '100BASE-T',
  '1 Gbps Ethernet (Gigabit Ethernet)': '1000BASE-T',
  '10 Gbps Ethernet (10-Gigabit Ethernet)': '10GBASE-T',
  'Devices can send and receive data simultaneously, and collisions do not occur because the communication uses separate channels (wires or logic paths) for transmitting and receiving.':
    'full duplex transmission',
  'A feature that automatically detects the required cable type (straight-through or crossover) and configures the port accordingly to enable proper communication':
    'Auto MDI-X',
  'A small, hot-swappable module used in network devices to provide fiber or copper connectivity by plugging into an SFP port':
    'SFP Transceiver',
  'A Layer 2 device that uses MAC addresses to forward frames within a LAN':
    'switch',
  'A switch uses [...] addresses to forward frames within a LAN.': 'MAC',
  'A Layer 3 device that uses IP addresses to determine the best path to forward packets between networks':
    'router',
  'A router uses [...] addresses to determine the best path to forward packets between networks.':
    'IP',
  'A device that modulates digital signals into analog for transmission over telephone or cable lines and demodulates incoming analog signals into digital':
    'modem',
  'A unique hardware address assigned to a network interface card (NIC) used for communication within the same local network.':
    'MAC Address',
  'A logical address used to identify devices across different networks and route data between them.':
    'IP Address',
  'IP stands for...': 'Internet Protocol',
  'MAC stands for...': 'Media Access Control',
  'A data packet at Layer 2 of the OSI model that includes the destination and source MAC addresses, payload, and error-checking information':
    'frame',
  'A Layer 3 data unit that contains the source and destination IP addresses and encapsulates segments from the transport layer':
    'packet',
  'A Layer 4 data unit used for transport, containing application data along with TCP or UDP headers':
    'segment',
  'The smallest unit of data in a network, representing a binary 1 or 0': 'bit',
  'Ethernet over fiber-optic cable allows longer distances and higher bandwidth than copper':
    'Fiber Ethernet',
  "In a name like '100BASE-FX', the 'F' indicates the use of":
    'fiber-optic cabling',
  'The maximum range of 1000BASE-LX over multimode fiber': '550 meters',
  'The maximum range of 1000BASE-LX over single-mode fiber': '5 kilometers',
  'The maximum range of 10GBASE-SR over multimode fiber': '400 meters',
  'The maximum range of 10GBASE-LR over single-mode fiber': '10 kilometers',
  'The maximum range of 10GBASE-ER over single-mode fiber': '30 kilometers',
  '1 Gbps Ethernet over short-range multimode fiber': '1000BASE-SX',
  '1 Gbps Ethernet over long-range single-mode fiber': '1000BASE-LX',
  '10 Gbps Ethernet over short-range multimode fiber': '10GBASE-SR',
  '10 Gbps Ethernet over long-range single-mode fiber': '10GBASE-LR',
  '10 Gbps Ethernet over extended-range single-mode fiber': '10GBASE-ER',
  'This suffix indicates long wavelength fiber using single-mode for longer distances (up to 10 km)':
    'LX',
  'This suffix indicates short-range fiber using multimode for short distances (typically up to 400 meters)':
    'SR',
  'This suffix indicates long-range fiber using single-mode for distances up to 10 kilometers':
    'LR',
  'This suffix indicates extended-range fiber using single-mode for distances up to 40 kilometers':
    'ER',
  "What does 'OSI' stand for?": 'Open Systems Interconnection',
  'The OSI model is divided into [...] layers.': '7',
  'Which layer of the OSI model interacts with software applications on a computer?':
    'Application',
  'Which layer of the OSI model includes HTTP and HTTPS?': 'Application',
  'Which layer of the OSI model identifies communication partners and synchronizes communication?':
    'Application',
  'Layer 7 of the OSI model': 'Application',
  'The process of adding additional headers and trailers to data before it is sent over the network is called [...]':
    'encapsulation',
  'The process of removing headers and trailers from data received over a network is called [...]':
    'de-encapsulation',
  'Interaction between the same OSI layer on different devices is called [...] interaction.':
    'same-layer',
  'Interaction between the different OSI layers on the same device is called [...] interaction.':
    'adjacent-layer',
  'Layer 6 of the OSI model': 'Presentation',
  'Which layer of the OSI model translates between data formats?':
    'Presentation',
  'Which layer of the OSI model establishes, manages, and terminates connections between the local and remote applications?':
    'Session',
  'Layer 5 of the OSI model': 'Session',
  'Layer 4 of the OSI model': 'Transport',
  'Which layer of the OSI model segments and reassembles data for communications between end hosts?':
    'Transport',
  'Which layer of the OSI model provides host-to-host communication?':
    'Transport',
  'Which layer of the OSI model provides process-to-process communication?':
    'Application',
  'What is the name of the Layer 4 PDU?': 'Segment',
  'Layer 3 of the OSI model': 'Network',
  'Which layer of the OSI model provides path selection between source and destination?':
    'Network',
  'Routers operate at Layer [...] of the OSI model.': '3',
  'Which layer of the OSI model provides logical addressing (IP addresses)?':
    'Network',
  'Which layer of the OSI model provides connectivity to end hosts on different networks?':
    'Network',
  'What is the name of the Layer 3 PDU?': 'Packet',
  'What is the name of the Layer 2 PDU?': 'Frame',
  'Layer 2 of the Osi model': 'Data Link',
  'Which layer of the OSI model provides node-to-node connectivity?':
    'Data Link',
  'Which layer of the OSI model detects and corrects Physical layer errors?':
    'Data Link',
  'Switches operate at Layer [...] of the OSI model.': '2',
  'Which layer of the OSI model defines physical characteristics of the medium used to transfer data between devices?':
    'Physical',
  'Layer 1 of the OSI model': 'Physical',
  'What is the name of the Layer 1 PDU?': 'Bits',
  'List the layers of the OSI model from the top down: 7. [...] 6. [...] 5. [...] 4. [...] 3. [...] 2. [...] 1. [...]':
    'Application, Presentation, Session, Transport, Network, Data Link, Physical',
  'List the layers of the OSI model in order':
    'Physical, Data Link, Network, Transport, Session, Presentation, Application',
  'Which networking model was developed by the United States Department of Defense?':
    'TCP/IP Suite',
  'Which networking model is in use in modern networks?': 'TCP/IP',
  'OSI Model [...] Layer(s) = TCP/IP Application Layer':
    'Application, Presentation, Session',
  'OSI Model [...] Layer(s) = TCP/IP Transport Layer': 'Transport',
  'OSI Model [...] Layer(s) = TCP/IP Internet Layer': 'Network',
  'OSI Model [...] Layer(s) = TCP/IP Link Layer': 'Data Link, Physical',
  'OSI Model Application, Presentation, Session Layers = TCP/IP [...] Layer':
    'Application',
  'OSI Model Transport Layer = TCP/IP [...] Layer': 'Transport',
  'OSI Model Network Layer = TCP/IP [...] Layer': 'Internet',
  'OSI Model Data Link, Physical Layers = TCP/IP [...] Layer': 'Link',
};

export default NETTERMS;
