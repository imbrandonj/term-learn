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
  'A whole number that can be positive, negative, or zero, and does not include any fractional or decimal parts.':
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
  'If ab = 0, then a = 0 or b = 0': 'Zero Product Property',
  'Parallel lines have the same...': 'slope',
  'Two lines with the same slope.': 'parallel lines',
  'Perpendicular lines have slopes which are...': 'negative reciprocals',
  'Two lines with slopes which are negative reciprocals.':
    'perpendicular lines',
  'Write slope-intercept form.': 'y = mx + b',
  'y = mx + b': 'slope-intercept form',
  'y = mx + b ... what does the m represent?': 'slope',
  'y = mx + b ... what does the b represent?': 'y-intercept',
  'The dependent variable.': 'y',
  'The independent variable.': 'x',
  'The vertical axis.': 'y',
  'The horizontal axis.': 'x',
  'What is the negative reciprocal of 2?': '-1/2',
  'What is the negative reciprocal of a/b?': '-b/a',
  'Slope = ': 'rise/run',
  'y = c': 'horizontal line',
  'In a horizontal line, the slope is...': '0',
  'x = c': 'vertical line',
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
};

export default MATHTERMS;
