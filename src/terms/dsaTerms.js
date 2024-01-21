const DSA = {
  'Faster than O(n log n), slower than O(log n)': 'O(n)',
  'Faster than O(n), slower than O(1)': 'O(log n)',
  'Faster than O(n^2), slower than O(n)': 'O(n log n)',
  'Average-Case Array Access Time Complexity': 'O(1)',
  'Worst-Case Array Access Time Complexity': 'O(1)',
  'Average-Case Array Search Time Complexity': 'O(n)',
  'Average-Case Array Insertion Time Complexity': 'O(n)',
  'Average-Case Array Deletion Time Complexity': 'O(n)',
  'Worst-Case Array Search Time Complexity': 'O(n)',
  'Worst-Case Array Insertion Time Complexity': 'O(n)',
  'Worst-Case Array Deletion Time Complexity': 'O(n)',
  'Average-Case Binary Search Tree Search Time Complexity': 'O(log n)',
  'Average-Case Binary Search Tree Access Time Complexity': 'O(log n)',
  'Average-Case Binary Search Tree Insertion and Deletion Time Complexity':
    'O(log n)',
  'Worst-Case Binary Search Tree Search Time Complexity': 'O(n)',
  'Worst-Case Binary Search Tree Access Time Complexity': 'O(n)',
  'Worst-Case Binary Search Tree Insertion and Deletion Time Complexity':
    'O(n)',
  'Constant Time': 'O(1)',
  'Logarithmic Time': 'O(log n)',
  'Linear Time': 'O(n)',
  'Quasilinear or Linearithmic Time': 'O(n log n)',
  'Quadratic Time': 'O(n^2)',
  'Factorial Time': 'O(n!)',
  'Exponential Time': 'O(n^n)',
  'O(1) Complexity': 'Constant',
  'O(log n) Complexity': 'Logarithmic',
  'O(n) Complexity': 'Linear',
  'O(n^2) Complexity': 'Quadratic',
  'O(2^n) Complexity': 'Exponential',
  'Random access of an element in an array': 'O(1)',
  'Time Complexity: Inserting at the beginning of a linked list': 'O(1)',
  'Binary Search Time Complexity': 'O(log n)',
  'Time Complexity: Searching through a linked list': 'O(n)',
  'Quicksort Average Time Complexity': 'O(n log n)',
  'Quicksort Worst Time Complexity': 'O(n^2)',
  'Merge Sort Time Complexity': 'O(n log n)',
  'Heap Sort Time Complexity': 'O(n log n)',
  'Insertion Sort Time Complexity': 'O(n^2)',
  'Selection Sort Time Complexity': 'O(n^2)',
  'Bubble Sort Time Complexity': 'O(n^2)',
  'Radix Sort Time Complexity': 'O(n)',
  'Iterating over a loop while iterating over another loop (nested) is what time complexity?':
    'O(n^2)',
  'Time Complexity: Insertion and deletion at the end of an array': 'O(1)',
  'Time Complexity: Insertion and deletion at the beginning of an array':
    'O(n)',
  'Binary Search on sorted arrays time complexity': 'O(log n)',
  'Refers to the amount of memory or storage space that a function/algorithm consumes based on the size of its input':
    'Space Complexity',
  'num1 + num2 :Time Complexity?': 'O(1)',
  'Looping through an array :Time Complexity?': 'O(n)',
  'Looping through a matrix :Time Complexity?': 'O(n^2)',
  'Sorting Algorithm: values are swapped': 'Bubble Sort',
  "Sorting Algorithm: values are distributed into sets or 'buckets'":
    'Bucket Sort',
  "Sorting Algorithm: look for keywords 'pivot'": 'Quicksort',
  "Sorting Algorithm: the list is continually 'split'": 'Merge Sort',
  'Sorting Algorithm: sorting by least/most significant digits': 'Radix Sort',
  'Hash Table average time complexity for access, insertion, and deletions':
    'O(1)',
  'Hash Table collisions can slow down the time complexity to...': 'O(n)',
  'Hash Table space complexity': 'O(n)',
  'A collection of key/value pairs': 'Hash Table',
  'LIFO data structure; Push to top, pop from top.': 'Stack',
  'FIFO data structure; first enqueue will be the first to dequeue': 'Queue',
  'Recursive calls use this data structure.': 'Stack',
  'The Event Loop in JavaScript uses this data structure': 'Queue',
  'Holds data/information and are connected via edges': 'Node',
  'Top most node and starting point': 'Root',
  'A node that has no children': 'Leaf Node',
  'Sequence of nodes and edges from one node to another': 'Path',
  'Merge Sort Space Complexity': 'O(n)',
  'A connection between two nodes': 'Edge',
  'Adjacency Matrix Space Complexity': 'O(v^2)',
  'A 2D array to store 1s & 0s to represent edges': 'Adjacency Matrix',
  'Adjacency Matrix Time Complexity (Access)': 'O(1)',
  'A node of a matrix or graph': 'Vertex',
  'Adjacency List Space Complexity': 'O(v + e)',
  'Adjacency List Time Complexity': 'O(v)',
  'Which abstract data type (ADT) is characterized by the LIFO (last in, first out) principle?':
    'Stack',
  '(true/false): An algorithm that uses an agnostic code repository is independent in nature':
    'true',
  '(true/false): A linked list has O(1) enqueue and dequeue operations': 'true',
  'Which term refers to a template for creating an object?': 'Class',
  'A data structure that stores subitems, organizing them into named fields or attributes, to represent a single entity':
    'Record',
  'The ability to easily update an algorithm': 'Maintainability',
  'The component of an algorithm that specifies a stopping point': 'Finiteness',
  "The algorithm's capability to handle increased workload or data size efficiently":
    'Scalability',
  'The design principle of breaking a system into independent, interchangeable components':
    'Modularity',
  'The practicality of implementing a solution or algorithm, considering resource factors':
    'Feasibility',
  'Arranging or organizing operations in a specific order to achieve a desired outcome':
    'Sequencing',
  'The repetitive execution of a set of operations in an algorithm':
    'Iteration',
  'Minimal complexity to enhance readability, maintainability, and overall effectiveness':
    'Simplicity',
  'The primary divide-and-conquer method used to search for an item in a sorted array':
    'Binary Search',
  "The measure of an algorithm's ability to be extended to accommodate new features or requirements; reusability":
    'Extensibility',
  'Primary search algorithm that utilizes the divide-and-conquer strategy':
    'Binary Search',
  'A time complexity analysis of the upper bound or maximum amount of time an algorithm could take for any input size':
    'Worst case',
  'A comparison-based sorting algorithm that utilizes a binary heap data structure to achieve an efficient, in-place sorting of an array or list':
    'Heap Sort',
  "A tree-based data structure with a specific ordering property, where each node's key is greater than or equal to (max heap) or less than or equal to (min heap) the keys of its children":
    'Binary Heap',
  'A binary tree where each node has at most two children, and the key value of each node is greater than or equal to the values in its left subtree and less than or equal to the values in its right subtree':
    'Binary Search Tree',
  'This search algorithm functions by continually dividing the data set in half until the sought item is found or the data set is exhausted':
    'Binary Search',
  "This high performance search algorithm is synonymous with 'binary search'":
    'Interval Search',
  'Which queue operation removes an item from the front of the queue?':
    'Dequeue',
  'How many elements in a list of size 64 would be visited when using a binary search for a number that is larger than all the values in the list?':
    '6',
  'How many elements in a list of size 64 would be visited when using a binary search for a number that is smaller than all the values in the list?':
    '6',
  'Which format is most commonly used to store data in a hash table?': 'Array',
  'A data structure that groups related items of data together to form a single entity':
    'Record',
  'Which data structure is used to store unordered items by mapping each item to a location in an array?':
    'Hash Table',
  '(true/false): An advantage linked lists have over arrays are their ability to grow and shrink as needed':
    'true',
  '(true/false): Linked lists have a faster search time than arrays': 'false',
  '(true/false): Count the edges from the root to the bottom node to determine tree height.':
    'true',
  'Which element refers to the numeric positions in a list abstract data type (ADT)?':
    'Index',
  "A data type described by predefined user operations, such as 'insert data at rear,' without indicating how each operation is implemented":
    'Abstract Data Type',
  '(true/false): A dynamic array is a linked list.': 'false',
  "(true/false): A list abstract data type's underlying data structure has no impact on the program's execution":
    'false',
  'Abstract data type: Items are ordered based on how items are added. Duplicate items are allowed.':
    'Array',
  'Abstract data type: Items are not ordered. Duplicate items are not allowed.':
    'Set',
  "Abstract data type: Items are ordered based on items' priority. Duplicate items are allowed.":
    'Priority Queue',
  'Abstract data type: Items are not ordered. Duplicate items are allowed.':
    'Bag',
  'A sorting algorithm that repeatedly partitions the input into low and high parts (each part unsorted), and then recursively sorts each of those parts':
    'Quicksort',
  'The algorithm should be designed in a straightforward, structured way so that when you redefine the algorithm, no significant changes are made to the algorithm':
    'Maintainability',
  'A good algorithm should perform its task quickly and use minimal resources':
    'Efficiency',
  'The algorithm should produce accurate output for all valid inputs':
    'Correctness',
  'Capable of handling unexpected inputs or errors gracefully without crashing':
    'Robustness',
  'Ideally, the algorithm can be applied to a range of related problems with minimal adjustments':
    'Adaptability',
  'The algorithm should handle larger data sets and problem sizes without a significant decrease in performance':
    'Scalability',
  'Algorithm: A straightforward approach that exhaustively tries all possible solutions, suitable for small problem instances but may become impractical for larger ones due to its high time complexity':
    'Brute Force Algorithm',
  'Algorithm: A method that breaks a problem into smaller, similar subproblems and repeatedly applies itself to solve them until reaching a base case':
    'Recursive Algorithm',
  'Algorithm: Utilized to transform data into a secure, unreadable form using cryptographic techniques, ensuring confidentiality and privacy in digital communications and transactions':
    'Encryption Algorithm',
  'Algorithm: A trial-and-error technique used to explore potential solutions by undoing choices when they lead to an incorrect outcome, commonly employed in puzzles and optimization problems':
    'Backtracking Algorithm',
  'Algorithm: Designed to find a specific target within a dataset, enabling efficient retrieval of information from sorted or unsorted collections':
    'Searching Algorithm',
  'Algorithm: Aimed at arranging elements in a specific order, like numerical or alphabetical, to enhance data organization and retrieval':
    'Sorting Algorithm',
  'Algorithm: Converts data into a fixed-size hash value, enabling rapid data access and retrieval in hash tables, commonly used in databases and password storage':
    'Hashing Algorithm',
  'Algorithm: Breaks a complex problem into smaller subproblems, solves them independently, and then combines their solutions to address the original problem effectively':
    'Divide and Conquer Algorithm',
  'Algorithm: Makes locally optimal choices at each step in the hope of finding a global optimum, useful for optimization problems but may not always lead to the best solution':
    'Greedy Algorithm',
  'The algorithm should end after a given time, and it should have a limited number of instructions':
    'Finiteness',
  'Algorithm: It is the approach that comes first to mind when solving a problem. It is the most basic approach to solving a problem':
    'Brute Force Algorithm',
  'The amount of time an algorithm needs to run entirely, depending on the size of the input given':
    'Time Complexity',
  'Algorithms provide systematic and optimized approaches to solving problems, ensuring that solutions are obtained with minimal time and resource usage':
    'Efficiency',
  'A recursive algorithm terminates due to the...': 'Base Case',
  '(true/false): The presence of a base case is what identifies an algorithm as being recursive':
    'False',
  'A sequence of steps, including at least 1 terminating step, for solving a problem':
    'Algorithm',
  'An algorithm that breaks the problem into smaller subproblems and applies the algorithm itself to solve the smaller subproblems':
    'Recursive Algorithm',
  'An algorithm that searches a sorted list for a key by first comparing the key to the middle element in the list and recursively searching half of the remaining list so long as the key is not found':
    'Binary Search',
  'The amount of resources used by the algorithm. The most common resources considered are the runtime and memory usage':
    'Computational Complexity',
  'Represents the number of fixed-size memory units used by the algorithm for an input of size N':
    'Space Complexity',
  'An operation that, for a given processor, always operates in the same amount of time, regardless of input values':
    'Constant Time',
  "A singly-linked or doubly-linked list's first node is called the...": 'Head',
  "A singly-linked or doubly-linked list's last node is called the...": 'Tail',
  'The one tree node with no parent (the top node)': 'Root',
  'The link from a node to a child is called the...': 'Edge',
  'The number of edges on the path from the root to the node': 'Depth',
  'All nodes with the same depth form a tree...': 'Level',
  'The largest depth of any node': 'Height',
  '(true/false): A file in a file system tree is always a leaf node': 'true',
  '(true/false): A directory in a file system tree is always an internal node':
    'false',
  'When two vertices are connected by an edge they are considered...':
    'Adjacent',
  'A sequence of edges leading from a source (starting) vertex to a destination (ending) vertex':
    'Path',
  'A search traversal that visits a starting vertex, then all vertices of distance 1 from that vertex, then of distance 2, and so on, without revisiting a vertex':
    'Breadth First Search',
  "A search traversal that visits a starting vertex, then visits every vertex along each path starting from that vertex to the path's end before backtracking (when reaching a dead end)":
    'Depth First Search',
  'This tree & graph searching algorithm traverses one level at a time':
    'Breadth First Search',
  'This tree & graph searching algorithm traverses one branch at a time':
    'Depth First Search',
  'Is a stack LIFO or FIFO?': 'LIFO',
  'Is a queue LIFO or FIFO?': 'FIFO',
  'A linear list in which elements can be inserted only at one end, called the rear, and deleted only from the other end, called the front. The first element to be inserted is the first one to be deleted':
    'Queue',
  'An algorithmic process that remembers the path through a data structure and can retrace the path in reverse order':
    'Backtracking',
  'The DELETE operation on a queue is called?': 'Dequeue',
  'The INSERT operation on a queue is called?': 'Enqueue',
  'Time Complexity: Remove the first element of a linked list': 'O(1)',
  'Time Complexity: Push an element on a stack': 'O(1)',
  'Time Complexity: Worst case in removing an element from a BST': 'O(n)',
  'Time Complexity: Average case in removing an element from a BST': 'O(log n)',
  'Time Complexity: Remove the first element of an array': 'O(n)',
  'Time Complexity: Best case for indexing, sorting, and deleting an element from a BST':
    'O(log n)',
  'Works by continuously splitting the array in half until it can no longer be divided. It then merges each subarry while sorting in the process':
    'Merge Sort',
  "Works by selecting a 'pivot' and partitioning the other elements into 2 subarrays (greater than and less than the pivot) and then sorting them recursively":
    'Quicksort',
  "A singly-linked list's last node is called the...": 'Tail',
  'Stored data inside the Random Access Memory (RAM)': 'Data Structure',
  'Time Complexity: Searching an Array given a specific index (access)': 'O(1)',
  'Time Complexity: Looking up a key in a hash table': 'O(1)',
  'Linked Lists are made up of list...': 'nodes',
  'The hash function generates the same index for more than one key':
    'Collision',
  'An indexed storage location for one or more entries': 'Bucket',
  'Takes a key and computes an integer': 'Hash Function',
  'An array of linked lists': 'Adjacency List',
  'Time Complexity: Iterating over an array n times': 'O(n^2)',
  'Time Complexity: Traversing over a rectangular matrix (uneven columns and rows)':
    'O(n * m)',
  'Time Complexity: Dividing an array in half until it reaches length 1':
    'O(log n)',
  'Time Complexity: Most built-in sorting methods': 'O(n log n)',
  'Time Complexity: Popping from a heap': 'O(log n)',
  'The upper-bound complexity': 'Worst case',
  'What is the runtime complexity for the expression: 305 + O(325 * n)': 'O(n)',
  '(true/false): The runtime complexity of the algorithm O(n^n + 1) is exponential':
    'true',
  'What is the first element visited in this list when using a binary search? [6, 7, 8, 9, 11, 15, 20]':
    '9',
  'This tells the recursion when to terminate, meaning the recursion will be stopped once the condition is met':
    'Base Case',
  'The function calls itself recursively, and we progress toward achieving the base criteria':
    'Recursive Case',
  'An object that can store the memory address of a variable': 'Pointer',
  'Contains a number of nodes in which each node contains data and a pointer that links to the next node':
    'Singly Linked List',
  'This method reads the top data element from the stack': 'peek()',
  'This stack method deletes from the end of the stack': 'pop()',
  'This stack method inserts at the end of the stack': 'push()',
  '(true/false): A tree data structure is a linear, sequential data structure':
    'false',
  'A node that has a subtree': 'Parent',
  'The root node of the tree is considered to be at level...': '0',
  'The total number of direct children of a node': 'Degree',
  'A collection of nodes, where the nodes in the tree can have zero, one, or two child nodes':
    'Binary Tree',
  'If all the nodes of a binary tree have either zero or two children, and if there is no node that has one child':
    'Full Binary Tree',
  '(true/false): A linked list is a linear data structure': 'true',
  'The value used to map to an index': 'Key',
  'Each hash table array element is called a...': 'Bucket',
  "Computes a bucket index from the item's key": 'Hash Function',
  'Occurs when an item being inserted into a hash table maps to the same bucket as an existing item in the hash table':
    'Collision',
  'A collision resolution technique where each bucket has a list of items belonging to that bucket':
    'Chaining',
  'A collision resolution strategy where collisions are resolved by looking for an empty bucket elsewhere in the table':
    'Open Addressing',
  "An open-addressing collision resolution technique where collisions are resolved by starting at the key's mapped bucket, and then linearly searches subsequent buckets until an empty bucket is found":
    'Linear Probing',
  'An open-addressing collision resolution technique that uses 2 different hash functions to compute bucket indices':
    'Double Hashing',
  'The number of items in the hash table divided by the number of buckets; may be used to decide when to resize the hash table':
    'Load Factor',
  'Maps items to buckets with no collisions': 'Perfect Hash Function',
  'A named location that can be used to store and organize data':
    'Data Structure',
  'A collection of elements stored at contigious memory locations': 'Array',
  'A collection of steps to solve a problem': 'Algorithm',
  'One by one, examine the elements of an array to find a value':
    'Linear Search',
  'Heap: value of node >= value of its parent': 'Min Heap',
  'Heap: value of node <= value of its parent': 'Max Heap',
  'A FIFO data structure that serves elements with the highest priorities first before elements with lower priority':
    'Priority Queue',
  '(true/false): A queue is a linear data structure': 'true',
  'Using peek() on a queue returns the...': 'Head',
  'A single variable used to store multiple values': 'Collection',
};
export default DSA;
