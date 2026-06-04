const MATHTERMS = {
  'Changing the order of numbers in addition or multiplication does not change the result.':
    'Commutative Property',
  'Changing the grouping of numbers in addition or multiplication does not change the result.':
    'Associative Property',
  'First term + Second term = Second term + First term': 'Commutative Property',
  'a + b = b + a': 'Commutative Property',
  'ab = ba': 'Commutative Property',
  'a ⋅ b = b ⋅ a': 'Commutative Property',
  'An exchange of terms in addition does not change the sum.':
    'Commutative Property',
  'Give the example property of the commutative law for addition using a and b.':
    'a + b = b + a',
  'An exchange of factors does not change the product.': 'Commutative Property',
  'Give the example property of the commutative law for multiplication using a and b.':
    'ab = ba',
  '(a + b) + c = a + (b + c)': 'Associative Property',
  '(ab)c = a(bc)': 'Associative Property',
  '(a ⋅ b) ⋅ c = a ⋅ (b ⋅ c)': 'Associative Property',
  'Give the example property of the associative law for addition using a, b, and c.':
    '(a + b) + c = a + (b + c)',
  'Give the example property of the associative law for multiplication using a, b, and c.':
    '(ab)c = a(bc)',
  'Multiplying a number by a sum or difference is the same as multiplying the number by each term of the sum or difference and then combining the results.':
    'Distributive Property',
  '(a + b) ⋅ c = a ⋅ c + b ⋅ c': 'Distributive Property',
  'c ⋅ (a + b) = c ⋅ a + c ⋅ b': 'Distributive Property',
  'a ⋅ (b + c) = a ⋅ b + a ⋅ c': 'Distributive Property',
  'a(b + c) = ab + ac': 'Distributive Property',
  '(b + c)a = ba + ca': 'Distributive Property',
  '1, 2, 3, 4,...': 'positive integers',
  'A number that can be positive, negative, or zero, and does not include any fractional or decimal parts.':
    'integer',
  'The positive integers (whole numbers) used for counting and ordering, starting from 1 and continuing infinitely (1,2,3,4,...), and sometimes including zero.':
    'natural numbers',
  'The positive integers together with zero (algebraically it seems).':
    'natural numbers',
  'The point represented by 0 (zero).': 'origin',
  'minus 1, minus 2, minus 3, minus 4,...': 'negative integers',
  'The positive integers, negative integers, and zero all together are called the...':
    'integers',
  'The additive inverse of a.': '-a',
  'If a + b = a, then b =': '0',
  'If a + b = a + c, then b = c': 'cancellation law of addition',
  'If a + b = a, then b = 0. Write the first step in proving this.':
    '(-a) + (a + b) = (-a) + a',
  'The first step in proving "if a + b = a, then b = 0" is applying the...':
    'additive inverse of a',
  'The second step in proving "if a + b = a, then b = 0 (which is ((-a) + a) + b = 0)" is applying...':
    'associativity',
  'This axiom states that for every real number a, there exists a unique number -a such that their sum is zero: a + (-a) = 0.':
    'additive inverse axiom',
  'For every number, there is a “mirror” number that cancels it out when added. This is that specific number (it applies the inverse property).':
    'additive inverse',
  'A statement or proposition in a formal system that is taken to be true, serving as a starting point from which other statements (theorems) can be logically derived.':
    'axiom',
  'A statement we accept as true without proof, forming the foundation of a logical system.':
    'axiom',
  'The building blocks of mathematics; everything in proofs (identity, inverse, associativity, etc.) is derived from a small set of these.':
    'axiom',
  'The additive inverse applies this.': 'inverse property',
  'The additive inverse, or inverse property, states that for every number, there exists another number such that adding them together gives the...':
    'identity element',
  'A special number that, when you add it to any other number, doesn\'t change that number at all. It\'s like the "do nothing" number for addition. In everyday numbers, this number is 0.':
    'additive identity',
  'The identity element specifically for addition.': 'additive identity',
  'In ordinary numbers, the additive identity is...': '0',
  'In ordinary numbers, the multiplicative identity is...': '1',
  'Any element within a set that leaves other elements unchanged under a specific operation (e.g., 0 for addition, 1 for multiplication).':
    'identity element',
  'The specific number that satisfies the inverse property for a particular number.':
    'additive inverse',
  'States that operating on a number with its opposite (additive) or reciprocal (multiplicative) results in the identity element (0 for addition, 1 for multiplication).':
    'inverse property',
  'When computing 37 ⋅ 25 ⋅ 4, it is easiest to solve as such: 37 ⋅ (25 ⋅ 4). This is applying which property?':
    'associative property',
  'The commutative property states that you can change the {...} of an operation; whereas the associative property states that you can change the {...}.':
    'order, grouping',
  'The property, or law, "exchange of factors does not change the product."':
    'commutative property',
  'Rewrite the easiest computation of: 125 ⋅ 37 ⋅ 8 using the associative property (use x for the multiplication sign).':
    '(125 x 8) x 37',
  'When computing 1001 ⋅ 20, it is easiest to solve as such: 1000 ⋅ 20 + 1 ⋅ 20. This is applying which property?':
    'distributive property',
  'Multiplying a number by a sum is the same as multiplying each part of the sum separately, then adding the results.':
    'distributive property',
  'This property, or law, splits multiplication across addition (or subtraction) to simplify.':
    'distributive property',
  'Factor the difference of squares: a² - b²': '(a - b)(a + b)',
  'Factor the sum of two cubes: a^3 + b^3 (use ^2 for any exponents).':
    '(a + b)(a^2 - ab + b^2)',
  'Factor the difference of two cubes: a^3 - b^3 (use ^2 for any exponents).':
    '(a - b)(a^2 + ab + b^2)',
  'Write the general form of a quadratic equation (use ^2 for any exponents).':
    'ax^2 + bx + c = 0',
  'General form: ax² + bx + c = 0': 'quadratic equation',
  'y = ax² + bx + c, where a, b, c are real numbers and a is not zero.':
    'quadratic equation',
  '(True/False): A real number can be a fraction.': 'true',
  '(True/False): A quadratic equation or function can have an exponent degree of 3 or higher.':
    'false',
  'An equality of two fractions.': 'proportion',
  'An equality of two ratios.': 'proportion',
  'An equation stating that two ratios or fractions are equal.': 'proportion',
  'The cross-products of a proportion are...': 'equal',
  'Similar triangles have corresponding sides which are...': 'proportional',
  'The answer obtained by dividing one number (the dividend) by another (the divisor).':
    'quotient',
  'It represents the result of a division operation, indicating how many times the divisor fits into the dividend, or the size of each group when sharing equally.':
    'quotient',
  'In a division operation, this is the number being split into smaller, equal parts.':
    'dividend',
  'In a division operation, this is the number of groups or the size of the groups being used to divide.':
    'divisor',
  'Dividend / Divisor =': 'quotient',
  'Divisor ⋅ Quotient + Remainder =': 'dividend',
  'In 20 / 5 = 4, which is the dividend?': '20',
  'In 20 / 5 = 4, which is the divisor?': '5',
  'In 20 / 5 = 4, which is the quotient?': '4',
  'A fraction that contains at least one other fraction in its numerator, denominator, or both.':
    'complex fraction',
  '(a + b)² (use ^2 for exponents)': 'a^2 + 2ab + b^2',
  'Any function which can be written as powers of x without using negative powers, fractional powers, infinite sums, or approximations':
    'polynomial',
  '(True/False): x² - 2 is a polynomial.': 'true',
  '(True/False): sin(x) is a polynomial.': 'false',
  '(True/False): x! is a polynomial.': 'false',
  '(True/False): 4x² + 7y - 1 is a polynomial.': 'true',
  '(True/False): 2x - 1 is a monomial.': 'false',
  '(True/False): -12x² is a monomial.': 'true',
  'An algebraic expression that consists of variable and constant terms, where the exponents of the variables must be non-negative integers.':
    'polynomial',
  'The numerical, multiplicative factor involved in some term of a polynomial, a series, or any other type of expression.':
    'coefficient',
  'The coefficient of the term with the highest exponent in a polynomial.':
    'leading coefficient',
  'The letter that represents an unknown value.': 'variable',
  'The power to which a variable is raised.': 'exponent',
  'A polynomial with only one term.': 'monomial',
  'A two-term polynomial.': 'binomial',
  'A three-term polynomial.': 'trinomial',
  'When graphed, this type of polynomial forms a parabola.':
    'quadratic polynomial',
  'What type of polynomial is x² - 5x + 6?': 'quadratic polynomial',
  'How many terms are in the expression 5x + 3?': '2',
  'A single number, variable, or the product of numbers and variables that acts as a building block in an algebraic expression or equation.':
    'term',
  '(True/False): A term can be a single number (constant), a single letter (variable), or a combination of constants and variables multiplied together.':
    'true',
  'How many terms are in the expression 5x² - 3x + 8?': '3',
  'How many terms are in the expression 3 ⋅ 4?': '1',
  'Separated by addition and subtraction signs, while multiplication and division bind numbers and variables together into a single unit.':
    'term',
  'How many terms are in the expression 2ab?': '1',
  'A part of a math expression or equation, separated by addition or subtraction signs.':
    'term',
  'If ab = 0, then a = 0 and/or b = 0': 'Zero Product Property',
  'If the product of two or more real numbers is zero (a ⋅ b = 0), then at least one of the factors must be zero (a = 0 or b = 0).':
    'Zero Product Property',
  'Parallel lines have the same...': 'slope',
  'Two lines with the same slope.': 'parallel lines',
  'Perpendicular lines have slopes which are...': 'negative reciprocals',
  'Two lines with slopes which are negative reciprocals.':
    'perpendicular lines',
  'Write slope-intercept form.': 'y = mx + b',
  'y = mx + b': 'slope-intercept form',
  'y = mx + b ... what does the m represent?': 'slope',
  'y = mx + b ... what does the b represent?': 'y-intercept',
  'y = 3x + 4 ... what is the y-intercept?': '4',
  'y = 3x + 4 ... what is the slope?': '3',
  'The dependent variable.': 'y',
  'The independent variable.': 'x',
  'The vertical axis.': 'y',
  'The horizontal axis.': 'x',
  'What is the negative reciprocal of 2?': '-1/2',
  'What is the negative reciprocal of a/b?': '-b/a',
  'What is the negative reciprocal of -2?': '1/2',
  'Slope = ': 'rise/run',
  'y = c': 'horizontal line',
  'In a horizontal line, the slope is...': '0',
  'y = c, the slope is...': '0',
  'x = c': 'vertical line',
  'x = c, the slope is...': 'undefined',
  'Parallel to the x-axis.': 'horizontal line',
  'Parallel to the y-axis.': 'vertical line',
  'In a vertical line, the slope is...': 'undefined',
  '0 / run': 'horizontal line',
  'rise / 0': 'vertical line',
  'm = y₂ - y₁ / x₂ - x₁': 'slope formula',
  'Divides the vertical change ("rise") by the horizontal change ("run") between two points to calculate the steepness of a line.':
    'slope formula',
  'y₂ - y₁': 'rise',
  'x₂ - x₁': 'run',
  'Zero slope': 'horizontal line',
  'Undefined slope': 'vertical line',
  'Use this formula when you are given two points and want the slope of the line.':
    'slope formula',
  'Use this formula to build an equation of a line when you know: 1) the slope and 2) one point on the line.':
    'point-slope form',
  'Use this formula to build an equation of a line when you know: 1) the slope and 2) the y-intercept.':
    'slope-intercept form',
  'y - y₁ = m(x - x₁)': 'point-slope form',
  'A ratio of vertical change to horizontal change.': 'slope',
  '(0, y)': 'y-intercept',
  '(x, 0)': 'x-intercept',
  'To find the y-intercept, set x to...': '0',
  'To find the x-intercept, set y to...': '0',
  'x is 0 when a line passes through the...': 'y-axis',
  'y is 0 when the line passes through the...': 'x-axis',
  'Vertical axis of a graph': 'y-axis',
  'Horizontal axis of a graph': 'x-axis',
  'The standard form of a linear equation.': 'Ax + By = C',
  'A relation in which each input is assigned exactly one output.': 'function',
  '[in a function] f(x) values or dependent variables; usually y': 'output',
  '[in a function] an input never gives you more than 1...': 'output',
  '[in a function] an _____ never gives you more than 1 output.': 'input',
  '[in a function] y = f(x), the x is the input or the...':
    'independent variable',
  '[in a function] y = f(x), the y is the output or the...':
    'dependent variable',
  '(x or y?, x or y?)': '(x, y)',
  'The complete set of all possible input values for which a function produces a valid, defined output.':
    'domain',
  'The complete set of all possible output values for which a function can produce after substituting every possible input (domain).':
    'range',
  '[True/False]: This set can represent a function {(-2,16), (-1,4), (0,3), (1,4)}':
    'true',
  '[True/False]: This set can represent a function {(-2,5), (3,9), (5,0), (-2,6)}':
    'false',
  '[True/False]: In a function, one input can put out only one output.': 'true',
  'y = 2x² - 5x + 4: The y here is the output or the...': 'dependent variable',
  'f(x) = 2x² - 5x + 4: The x here is the input or the...':
    'independent variable',
  '[True/False]: y = ±√3 - 2x is a valid function.': 'false',
  '[True/False]: y = 2x² - 5x + 4 is a valid function.': 'true',
  '[True/False]: y = √3 - 2x is a valid function.': 'true',
  '[True/False]: y² = 2x² + 1 is a valid function.': 'false',
  '[True/False]: xy + 2y = 3x - 1 is a valid function.': 'true',
  '[True/False]: x² - 4y² = 1 is a valid function.': 'false',
  '[True/False]: If solving an equation for 𝑦 yields more than one value of 𝑦 for a single 𝑥 (often indicated by a ± or an even power like 𝑦²), then the relation is not a function of 𝑥.':
    'true',
  'A set of ordered pairs.': 'relation',
  'In an x- and y- coordinate relation, all of the x-coordinates are called the...':
    'domain',
  'In an x- and y- coordinate relation, all of the y-coordinates are called the...':
    'range',
  'A relationship between a set of inputs and a set of outputs such that for every input x, there exists EXACTLY ONE output y for that x.':
    'function',
  'Refers to all of the x-values (the domain) that can be substituted in the formula for x.':
    'input',
  'Refers to all of the y-values (the range) that result after we input the x-values and simplify.':
    'output',
  'A number that is a ratio that describes the tilt of a line.': 'slope',
  'An equation whose graph is a line.': 'linear equation',
  '[True/False]: The only linear equations that cannot be written in the form y = mx + b are vertical lines.':
    'true',
  'The distance a number is from zero on the number line.': 'absolute value',
  '[True/False]: All rational numbers can be placed on a number line.': 'true',
  '[True/False]: 0 is a rational number.': 'true',
  'All the numbers that can be found on a number line. Can be positive or negative, decimals, and fractions.':
    'real numbers',
  'A number with no fractional or decimal part. Cannot be negative.':
    'whole numbers',
  'Whole numbers from 1 and up. Some teachers say these are all the "counting numbers."':
    'natural numbers',
  'Unlike natural numbers, whole numbers include...': '0',
  'All whole numbers and their negative counterparts.': 'integers',
  'Any number that can be written by dividing one integer by another.':
    'rational number',
  'Any number that can be written as a fraction or ratio.': 'rational number',
  'A number that cannot be written as a simple fraction (because the decimal goes on forever without repeating).':
    'irrational number',
  '[True/False] π and √2 are both irrational, real numbers.': 'true',
  'Something that is endless, unlimited, or without bounds.': 'infinity',
  'This property states that the opposite of the opposite of a number is the number itself.':
    'Opposites of Opposites Property',
  'Integers you multiply together to get another integer.': 'factors',
  'A number that has only two factors (the number itself and 1).':
    'prime number',
  'Any factors that are the same for two (or more) numbers.': 'common factors',
  '[True/False]: Every number greater than 1 has at least two factors, because every number can be divided by 1 and itself.':
    'true',
  'The largest factor that two (or more) numbers share.': 'GCF',
  'The only even prime number.': '2',
  '[True/False]: 0 is a prime number.': 'false',
  '[True/False]: 0 is an even number because it is an integer divisible by 2 with no remainder.':
    'true',
  'The result obtained by multiplying two or more numbers, variables, or expressions together.':
    'product',
  'The product of a given number and any whole number (integer).': 'multiple',
  'Any multiple that is the same for two (or more) numbers.': 'common multiple',
  'The smallest multiple that two numbers can have (i.e., for 2 and 5 it is 10).':
    'least common multiple',
  '[True/False]: There is no such thing as a greatest common multiple (GCM) for two or more integers because multiples are unbounded and continue to infinity.':
    'true',
  GCF: 'greatest common factor',
  'When factoring, the first thing you look for is...': 'GCF',
  'The biggest shared factor.': 'GCF',
  'A function which is symmetric about the y-axis.': 'even function',
  'A function which is symmetric about the origin.': 'odd function',
  'An even function is symmetric about the...': 'y-axis',
  'An odd function is symmetric about the...': 'origin',
  'An even function.': 'f(-x) = f(x)',
  'An odd function.': 'f(-x) = -f(x)',
  'A function where for every input 𝑥, the outputs for 𝑥 and -𝑥 are the same.':
    'even',
  'A function where for every input 𝑥, the outputs for 𝑥 and -𝑥 are opposites.':
    'odd',
  'f(-x) = f(x)': 'even function',
  'f(-x) = -f(x)': 'odd function',
  'To add and subtract fractions, you must have common...': 'denominators',
  'f of 𝑥': 'f(x)',
  'A function whose variable is x.': 'f(x)',
  'An operation where the output of one function (g) becomes the input of another (f), written as (f ∘ g)(x) = f(g(x)).':
    'function composition',
  '[True/False]: Function composition is commutative, i.e., f(g(x)) equals g(f(x)).':
    'false',
  'Expands a product into a sum.': 'distribution',
  'Compresses a sum back into a product.': 'factoring',
  'Essentially the opposite of distribution; the inverse of, or reverse, multiplication.':
    'factoring',
  'For any rational function, the denominator can never be...': '0',
  '[in a function] when the denominator equals zero, the function, at that specific point, is considered...':
    'undefined',
  'Represents a set of real numbers using endpoints and parentheses/brackets.':
    'interval notation',
  'Means "combine all elements from both sets".': 'union',
  'What notation is: (−∞, −2) ∪ (1, 5]': 'interval notation',
  'Describes a set by stating a rule or condition that elements must satisfy.':
    'set-builder notation',
  'What notation is: { x ∣ x < −2 or 1 < x ≤5 }': 'set-builder notation',
  'What notation is: { x ∣ condition A OR condition B }':
    'set-builder notation',
  'What notation is: A ∪ B': 'interval notation',
  'Symbolic for logical OR, i.e., condition a OR condition b.': 'union',
  'Symbolic for logical AND, i.e., condition a AND condition b.':
    'intersection',
  'for x₁ < x₂, f(x₁) < f(x₂)': 'increasing',
  'for x₁ < x₂, f(x₁) > f(x₂)': 'decreasing',
  'The highest output on a graph.': 'absolute maximum',
  'The lowest output on a graph.': 'absolute minimum',
  'The maximum (highest) and minimum (lowest) values of a function, either within a specific interval (local/relative) or across its entire domain (absolute/global).':
    'extrema',
  'a ≤ x ≤ b; includes endpoints': 'closed interval',
  'a < x < b; excludes endpoints': 'open interval',
  'A relative maximum.': 'local maximum',
  'A relative minimum.': 'local minimum',
  'A point (c, f(c)) where f(c) ≥ f(x) for all x in an open interval around c.':
    'local maximum',
  'A point (c, f(c)) where f(c) ≤ f(x) for all x in an open interval around c.':
    'local minimum',
  '[True/False]: Local maxima/minima are defined using an open interval (a neighborhood) around the point, not closed intervals.':
    'true',
  'If 𝑓 is continuous on a closed interval [a, b], then 𝑓 attains both an absolute maximum and an absolute minimum on [a, b].':
    'Extreme Value Theorem',
  'f(x) = 1 / x - 2 ... the function is valid everywhere except x =': '2',
  'Something only becomes a non-function if one input gives multiple...':
    'outputs',
  '[True/False] A square root such as √3 - 2x has domain restrictions, which makes it a non-function.':
    'false',
  'A parabola is an even function if and only if its vertex lies on the line...':
    'x = 0',
  'For an even parabola, the vertex is the...': 'y-intercept',
  '[of a graph] The northeast quadrant.': 'Quadrant I',
  '[of a graph] The southeast quadrant.': 'Quadrant IV',
  '[of a graph] The southwest quadrant.': 'Quadrant III',
  '[of a graph] The northwest quadrant.': 'Quadrant II',
  '[of a graph] Which quadrant does (4, 2) lie on?': 'Quadrant I',
  '[of a graph] Which quadrant does (4, -2) lie on?': 'Quadrant IV',
  '[of a graph] Which quadrant does (-4, -2) lie on?': 'Quadrant III',
  '[of a graph] Which quadrant does (-4, 2) lie on?': 'Quadrant II',
  'A parabola has exactly one extremum, and that point is its...': 'vertex',
  'The point where the parabola turns (minimum or maximum of the quadratic form).':
    'vertex',
  'A fixed point that helps define the parabola geometrically.': 'focus',
  'The set of all points in a plane that are equidistant from a fixed point (called the focus) and a fixed line (called the directrix).':
    'parabola',
  '[True/False]: Over real numbers, every quadratic function graphs as a parabola.':
    'true',
  'A function of the form f(x) = ax² + bx + c, where a ≠ 0, whose graph is a parabola.':
    'quadratic function',
  'A function defined by multiple sub-functions, which each sub-function applying to a specific part of the main domain.':
    'piecewise function',
  'A single function whose rules change depending on the input value, with each rule governing a specific region of the domain.':
    'piecewise function',
  'A function defined by multiple expressions, each applied to a specific interval or subset of the domain, so that exactly one expression determines the output for any given input.':
    'piecewise function',
  'Has position only. It has no length, width, or thickness.': 'point',
  'Has length but has no width or thickness.': 'line',
  'A portion a straight line beginning at a given point, called the endpoint, and extends infinitely in one direction.':
    'ray',
  'Has length and width, but no thickness.': 'surface',
  'A flat surface such that a straight line connecting any two of its points lies entirely in it.':
    'plane',
  '[True or False]: A surface can be flat (like a plane) or curved (like a sphere or cylinder).':
    'true',
  'The part of a straight line between two of its points, including the two points, called endpoints.':
    'line segment',
  'The two points of a line segment.': 'endpoints',
  'The point of division of a line segment in which the segment is divided into two equal parts.':
    'midpoint',
  'A line that crosses at the midpoint of a line segment.': 'bisector',
  'A line that intersects at the midpoint of a line segment and forms a right angle (90°).':
    'perpendicular bisector',
  'The distance around a circle.': 'circumference',
  'The perimeter of a circle.': 'circumference',
  'The total boundary length of any closed 2D shape.': 'perimeter',
  'A segment joining the center of a circle to a point on the circle.':
    'radius',
  'A segment joining any two points on a circle.': 'chord',
  'A chord through the center of the circle; it is the longest chord and twice the length of the radius.':
    'diameter',
  'A continuous part of a circle.': 'arc',
  'An arc measuring one-half of the circumference of a circle and thus contains 180°.':
    'semicircle',
  'An angle formed by two radii.': 'central angle',
  'Circles having congruent radii.': 'congruent circles',
  'Two line segments having the same length are said to be...': 'congruent',
  'Objects that have the same size and shape.': 'congruent',
  'If three points a, b, and c lie on a line, they are said to be...':
    'collinear',
  'A figure formed by two rays with a common endpoint (the vertex).': 'angle',
  'The common endpoint of the two rays that form an angle.': 'vertex',
  'The sides of an angle.': 'rays',
  'An angle whose measure is less than 90°.': 'acute angle',
  'An angle that measures 90°.': 'right angle',
  'An angle whose measure is more than 90° and less than 180°.': 'obtuse angle',
  'An angle that measures 180°.': 'straight angle',
  'An angle whose measure is more than 180° and less than 360°.':
    'reflex angle',
  'Angles that have the same number of degrees.': 'congruent angles',
  'A ray, line, or segment that divides an angle into two equal (congruent) smaller angles.':
    'angle bisector',
  'Lines or rays or segments that meet at right angles.': 'perpendiculars',
  'A polygon having 5 sides.': 'pentagon',
  'A closed plane figure bounded by straight line segments as sides.':
    'polygon',
  'A polygon having 4 sides.': 'quadrilateral',
  'A polygon having 3 sides.': 'triangle',
  'How many vertices does a triangle have?': '3',
  'A point where two edges (sides) of a polygon meet.': 'vertex',
  'A triangle having no congruent sides.': 'scalene triangle',
  'A triangle having no equal sides and no equal angles.': 'scalene triangle',
  'A triangle having at least two congruent sides.': 'isosceles triangle',
  'A triangle with 2 equal sides and 2 equal angles.': 'isosceles triangle',
  'A triangle having three congruent sides.': 'equilateral triangle',
  '[True/False]: An equilateral triangle is an isosceles triangle.': 'true',
  'All angles of an equilateral triangle have a degree of...': '60',
  'A triangle having exactly one interior angle of 90°.': 'right triangle',
  'A triangle having exactly one interior angle greater than 90°.':
    'obtuse triangle',
  'A triangle having three interior angles each less than 90°.':
    'acute triangle',
  'In Euclidean geometry, the interior angles of a triangle always sum to...':
    '180',
  'Triangle angle sum.': '180',
  'A segment from a vertex of a triangle to the midpoint of the opposite side.':
    'median',
  'Two angles that have the same vertex and a common side between them.':
    'adjacent angles',
  'Two nonadjacent angles formed by two intersecting lines.': 'vertical angles',
  'Two angles whose measures total 90°.': 'complementary angles',
  'Two angles whose measures total 180°.': 'supplementary angles',
  'If two complementary angles contain a° and b°, then a° + b° =': '90',
  'Adjacent angles are complementary if their exterior sides are...':
    'perpendicular',
  'If two supplementary angles contain a° and b°, then a° + b° =': '180',
  'Adjacent angles are supplementary if their exterior sides lie in the same...':
    'straight line',
  'If supplementary angles are congruent, each of them is a...': 'right angle',
  'Equal supplementary angles are...': 'right angles',
  'A pair of figures or polygons which have the same size and shape (exact duplicates) are said to be...':
    'congruent',
  'To qualify as a polygon, at least how many straight sides must it have?':
    '3',
  'The smallest possible polygon.': 'triangle',
  '[True/False]: All quadrilaterals are polygons.': 'true',
  '[True/False]: A circle is a polygon.': 'false',
  '[True/False]: To qualify as a polygon, all sides must be straight line segments.':
    'true',
  'A line with only one endpoint.': 'ray',
  'Lines that are always the same distance apart and that never intersect.':
    'parallel lines',
  'Two lines that intersect to form a 90° angle.': 'perpendicular lines',
  'A part of a line that has two endpoints.': 'line segment',
  'A straight line that continues forever in both directions.': 'line',
  'Angles formed by two intersecting lines that are opposite each other; they have equal measures.':
    'vertical angles',
  'A shape whose opposite sides are parallel and equal in length.':
    'parallelogram',
  'A parallelogram where all four vertices form right angles.': 'rectangle',
  'A parallelogram where all sides are equal in length.': 'rhombus',
  'A parallelogram where all sides are equal in length and all vertices form right angles.':
    'square',
  'A shape which has exactly two parallel sides, which are called base₁ and base₂. The sides do not have to be equal in length.':
    'trapezoid',
  'A quadrilateral having two, and only two, parallel sides.': 'trapezoid',
  'A trapezoid whose legs are congruent.': 'isosceles trapezoid',
  '[True/False]: A trapezoid can have 4 parallel sides - the base and the legs.':
    'false',
  'The parallel sides of a trapezoid.': 'base',
  'The nonparallel sides of a trapezoid (which can be congruent, but never parallel).':
    'legs',
  'If the base angles of a trapezoid are congruent, the trapezoid is...':
    'isosceles',
  'A quadrilateral is a parallelogram if its opposite sides are congruent and...':
    'parallel',
  'A quadrilateral is a parallelogram if its opposite sides are parallel and...':
    'congruent',
  'A quadrilateral is a parallelogram if its opposite angles are...':
    'congruent',
  'A rectangle, rhombus, or square has all the properties of a...':
    'parallelogram',
  'Each angle of a rectangle is a...': 'right angle',
  'A diagonal of a parallelogram divides it into two congruent...': 'triangles',
  'The consecutive angles of a parallelogram are...': 'supplementary',
  'The distance around a two-dimensional object.': 'perimeter',
  'The size of a surface or the amount of space inside a two-dimensional object.':
    'area',
  '[True/False]: A square is a rhombus.': 'true',
  'area = ½bh': 'triangle',
  'area = b ⋅ h': 'parallelogram',
  'The formula to calculate the area of a triangle.': '1/2bh',
  'The formula to calculate the area of a parallelogram.': 'bh',
  'A shape made up of two or more other shapes.': 'compound shape',
  'The longest side of a right-angled triangle, which is always the side opposite the right angle.':
    'hypotenuse',
  'a² + b² = c²': 'Pythagorean Theorem',
  'πd (of a circle)': 'circumference',
  '2πr (of a circle)': 'circumference',
  'Write the formula to calculate the circumference of a circle using the diameter.':
    'pi d',
  'Write the formula to calculate the circumference of a circle using the radius.':
    '2 pi r',
  'Write the formula to calculate the diameter of a circle using the circumference.':
    'c / pi',
  'circumference / diameter (of a circle)': 'pi',
  '2r (of a circle)': 'diameter',
  'The fraction approximation of π': '22/7',
  'A line segment whose endpoints are on the circle.': 'chord',
  'πr² (of a circle)': 'area',
  'Write the formula to calculate the area of a circle.': 'pi r^2',
  '[True/False]: 1ft² = 12in²': 'false',
  '[True/False]: 1ft² = 144in²': 'true',
  'Relates to the second degree; the term comes from the Latin word quadratus, meaning "square."':
    'quadratic',
  'The value of a function as the input changes from a to b (where a ≤ b); f(b) - f(a).':
    'net change',
  '[of a function] is defined by different formulas on different parts of its domain.':
    'piecewise function',
  'A function table with two headings, one for inputs and one for the corresponding outputs.':
    'table of values',
  'The domain of a square root function must be ≥ ...': '0',
  'The set of real numbers that the variable is allowed to have.': 'domain',
  'The four ways to represent a function (alphabetically)':
    'algebraic, numerical, verbal, visual',
  'Using words to represent a function; "To convert from C° to F°, multiply C° by 9/5, then add 32.':
    'verbal',
  'Using a formula to represent a function; A(r) = πr²': 'algebraic',
  'Using a table of values to represent a function; i.e., inputs and outputs in their respective units.':
    'numerical',
  'Using a graph to represent a function.': 'visual',
};

export default MATHTERMS;
