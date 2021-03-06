const resourceObj = [
  {
    challengeName: 'Challenge: Variable Assignment',
    replId: 'https://repl.it/@DavidKim12/Challenge-Variable-Assignment',
    challengeDescription: "Now that we know what variables are, let's create one of our own. Declare a constant named lastName and assign it the value of your last name. Make sure you wrap your name in quotation marks, e.g. \"Smith\".\n\nNow, go back to line 1 and modify the value of firstName to be your first name. Uncomment the console.log statement on line 10 and run your code; you should see Jenny replaced by your first name—unless your first name is Jenny, of course.",
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var',
  },
  {
    challengeName: 'Challenge: Variable Reassignment',
    replId: 'https://repl.it/@DavidKim12/Challenge-Variable-Reassignment',
    challengeDescription: 'In the code editor, reassign the variable firstName to a new name on line 4.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var',
  },
  {
    challengeName: 'Challenge: Strings',
    replId: 'https://repl.it/@DavidKim12/Challenge-Strings',
    challengeDescription: 'Declare a variable myString whose value is a string.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
  },
  {
    challengeName: 'Challenge: String Concatenation',
    replId: 'https://repl.it/@DavidKim12/Challenge-String-Concatenation',
    challengeDescription: "Use string concatenation to join the three provided strings (first, second, and third) and assign the resulting string to a variable called welcomeStatement. The value of welcomeStatement should be 'Welcome to the jungle!'",
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat',
  },
  {
    challengeName: 'Challenge: Numbers - Addition/Subtraction',
    replId: 'https://repl.it/@DavidKim12/Challenge-Numbers-AdditionSubtraction',
    challengeDescription: 'Create a variable birthYear and set it equal to the year of your birth.\nNext, create a variable named age and set the value to your current age.\nFinally, create a variable named in10Yrsand set the value to equal your age plus 10.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  },
  {
    challengeName: 'Challenge: Numbers - Multiplication/Division',
    replId: 'https://repl.it/@DavidKim12/Challenge-Numbers-MultiplicationDivision',
    challengeDescription: 'Perform the following multiplication/division operations in the code editor:\n1. Multiply 20 by 4 and save the result to a variable called twentyTimesFour\n2. Divide 9 by 3 and save the result to a variable called nineOverThree\n3. Multiply 200.3 * 3 and save the result to a variable called twoHundredTimesThree',
    challengeResource: '\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  },
  {
    challengeName: 'Challenge: Booleans',
    replId: 'https://repl.it/@DavidKim12/Challenge-Booleans',
    challengeDescription: 'For the following problems, you will be using the comparison operators (==, ===, <, >, <=, >=) to compare two variables and see if the comparison yields true or false. You will assign the resulting boolean to a variable.\n\nNow make the following comparisons in the code editor:\n1. Compare small and large using the <operator. Assign the result to a variable called isSmaller.\n2. Compare num and string. First, use the == operator to compare the two variables, and assign the result to a variable calledisLooselyEqual. Second, use the === operator to compare the variables; assign the result to a variable called isStrictlyEqual.\n3. Compare isTrue and isFalse using the !== operator. Assign the result to a variable called isTrueNotFalse.\nContinue to experiment with different comparison operators and data types. You can see a full list of comparison operators here.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
  },
  {
    challengeName: 'Challenge: Type Coercion',
    replId: 'https://repl.it/@DavidKim12/Challenge-Type-Coercion',
    challengeDescription: 'Uncomment the code and see what happens. Then, try it out yourself and make sure you really understand the concept.',
    challengeResource: '#TODO',
  },
  {
    challengeName: 'Challenge: Arrays - Examining Elements',
    replId: 'https://repl.it/@DavidKim12/Challenge-Arrays-Examining-Elements',
    challengeDescription: "Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). Then console.log fourthItem to see the output.",
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  },
  {
    challengeName: 'Challenge: Arrays - Adding Elements',
    replId: 'https://repl.it/@DavidKim12/Challenge-Arrays-Adding-Elements',
    challengeDescription: 'Use a built-in JavaScript method to add another show to the netflixShows array. Then log your updated array to the console.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  },
  {
    challengeName: 'Challenge: For Loops - Fundamentals',
    replId: 'https://repl.it/@DavidKim12/Challenge-For-Loops-Fundamentals',
    challengeDescription: 'Using a for loop, decrement countDownby one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
  },
  {
    challengeName: 'Challenge: For Loops and Arrays',
    replId: 'https://repl.it/@DavidKim12/Challenge-For-Loops-and-Arrays',
    challengeDescription: '1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.\n2. Use a second for loop to iterate through the greetings and console.log() each greetings.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
  },
  {
    challengeName: 'Challenge: For Loops and Array Indices',
    replId: 'https://repl.it/@DavidKim12/Challenge-For-Loops-and-Array-Indices',
    challengeDescription: 'You are given 3 different arrays, one of first names, last names and places. Imagine that each array element at a certain index corresponds to one user.\nFor example, my friends are Mary Snow, Kris Bowles, and Janelle Wong. I have two arrays, one of first names and one of last names. In order to get the full name of my friend, I need to access both arrays\nFor this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
  },
  {
    challengeName: 'Challenge: For Loops - Calculating Array Elements',
    replId: 'https://repl.it/@DavidKim12/Challenge-For-Loops-Calculating-Array-Elements',
    challengeDescription: 'You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
  },
  {
    challengeName: 'Challenge: While Loops - Fundamentals',
    replId: 'https://repl.it/@DavidKim12/Challenge-While-Loops-Fundamentals',
    challengeDescription: 'Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while',
  },
  {
    challengeName: 'Challenge: While Loops - Conditional Expression',
    replId: 'https://repl.it/@DavidKim12/Challenge-While-Loops-Conditional-Expression',
    challengeDescription: 'Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block, add the value of addThis to sum, then increment addThisby 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.',
    challengeResource: 'https://www.w3schools.com/jsref/jsref_while.asp',
  },
  {
    challengeName: 'Challenge: Control Flow - if statements',
    replId: 'https://repl.it/@DavidKim12/Challenge-Control-Flow-if-statements',
    challengeDescription: 'Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else',
  },
  {
    challengeName: 'Challenge: fizzbuzz',
    replId: 'https://repl.it/@DavidKim12/Challenge-fizzbuzz',
    challengeDescription: 'Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.\nLog fb to the console to see the output.\nHint: Check out the remainder/modulo operator: %.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators',
  },
  {
    challengeName: 'Challenge: Control Flow and Iteration',
    replId: 'https://repl.it/@DavidKim12/Challenge-Control-Flow-and-Iteration',
    challengeDescription: 'Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.',
    challengeResource: 'https://www.w3schools.com/jsref/jsref_if.asp',
  },
  {
    challengeName: 'Challenge: Objects - Examining Properties',
    replId: 'https://repl.it/@DavidKim12/Challenge-Objects-Examining-Properties',
    challengeDescription: 'You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. If it exists, reassign the value of found to 1.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in',
  },
  {
    challengeName: 'Challenge: Objects - Iterating with for... in',
    replId: 'https://repl.it/@DavidKim12/Challenge-Objects-Iterating-with-for-in',
    challengeDescription: 'You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.',
    challengeResource: '\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
  },
  {
    challengeName: 'Challenge: Objects - Iterating with a for loop',
    replId: 'https://repl.it/@DavidKim12/Challenge-Objects-Iterating-with-a-for-loop',
    challengeDescription: "This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.",
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
  },
  {
    challengeName: 'Challenge: Objects - Nested Arrays',
    replId: 'https://repl.it/@DavidKim12/Challenge-Objects-Nested-Arrays',
    challengeDescription: "You are provided with an empty array called nestedArr. Using a for loop starting at index 0, add 5 subarrays to nestedArr, with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as its first element, and the index as its second element.\nExample of a subarray: ['loop3', 3].",
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  },
  {
    challengeName: 'Challenge: Objects - Adding Properties',
    replId: 'https://repl.it/@DavidKim12/Challenge-Objects-Adding-Properties',
    challengeDescription: 'You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is an element of possibleIterablethat is divisible by three. The value of each key should be the array index at which that key can be found in possibleIterable.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for\n\n',
  },
  {
    challengeName: 'Challenge: Objects - Evaluating Keys',
    replId: 'https://repl.it/@DavidKim12/Challenge-Objects-Evaluating-Keys',
    challengeDescription: 'You are given an object called sumMe containing several key/value pairs and a variable called totalwhose initial value is 0. Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.',
    challengeResource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in',
  },
];
// utils
function getRandLesson(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const lessonNum = resourceObj.length - 1;
const lessonInstance = getRandLesson(0, lessonNum);

// dom manipulation
const challengeName = document.querySelector('#challenge-name');
challengeName.innerHTML = resourceObj[lessonInstance].challengeName;

const challengeDescription = document.querySelector('#challenge-description');
challengeDescription.innerHTML = resourceObj[lessonInstance].challengeDescription;

const challengeRepl = document.querySelector('#challenge-repl');
challengeRepl.innerHTML = `<iframe height="400px" width="100%" src="${resourceObj[lessonInstance].replId}?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`;

const challengeResource = document.querySelector('#challenge-resource');
challengeResource.innerHTML = `<a href="${resourceObj[lessonInstance].challengeResource}" target="_blank">${resourceObj[lessonInstance].challengeName.slice(11)}</a>`;

// const lookupRes   ource = document.getElementsByClassName('resource-list-item')[0];
// // console.log(lookupResource);
// // lookupResource.addEventListener('click', () => {
// //   console.log(ourIframe);
// // });
// lookupResource.addEventListener('click', () => {
//   const appendIframe = `<iframe height="400px" width="100%" src="${resourceObj[lessonInstance].challengeResource}?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`;
//   document.querySelector('#lookup-resource').appendChild(appendIframe);
// });
