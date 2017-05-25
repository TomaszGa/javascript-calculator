# javascript-calculator

### overview
Javascript based electronic calculator. Takes user input and calculates the result while behaving like a real calculator. User can chain inputs, clear the most recent input or whole input. 

### features
This implementation avoids the use of eval() which is a straightforward solution but leads to many issues and possible error outputs. This version has a set of logic to prevent illegal inputs such as multiple commas, multiple operators, division by zero.

### issues
The calculator currently does not have a number limit, making it possible to enter numbers exceeding screen size.
It is possible to add a second comma to a number just after the previous number is evaluated (and if the evaluated number is not a whole number).
