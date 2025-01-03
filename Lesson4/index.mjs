//--------------- IMPORTANT!!! ---------------

// Use the keyboard shortcut Alt + Z (for PC) or Option + Z (for Mac) to allow word wrap on this document.  Word wrap breaks the lines so you don't have to keep scrolling left and right to read.

//READ THE INFORMATION IN THE BROWSER WINDOW PANEL ON THE RIGHT BEFORE BEGINNING YOUR ASSIGNMENT!!

//---------- OVERVIEW AND INSTRUCTIONS ----------

//----------------------------------
// LESSON 4 ARRAY METHODS
//----------------------------------

//  This is the coding assigment for the fourth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:

//  - Using Array Methods
//  - Understanding about iterative methods
//  - Learning about callbacks
//  - Creating Higher Order Functions
//  - Using existing Array Higher Order Functions (e.g. forEach(), map(), filter(), etc.)

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 4 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console tab to the bottom right of this screen. If your Console is not showing, click the Inspect Button in the top right (see the Welcome to week 4 information to the right if you need help finding that)  Check to make sure that the output you get in your Console is the expected output.

// ----- Practice JS array methods: forEach -----
//---------- QUESTION 1 ----------
// Create an variable called 'names' and assign it an array of people's names.  Write a function called 'printNames' that uses the forEach array method to log each name in an array to the console.  Remember, since you're using the console.log in the function, you'll just want to call your function and pass it the array of names when testing your code.

// EXAMPLE CALL:
//    let names = ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"];
//    console.log("Q1 printNames:");
//    printNames(names);

// EXAMPLE OUTPUT:
//   Q1 printNames:
//   Juan Marcos
//   Aleksandra Ivanov
//   Zhang Wei
//   Bernice King

// PUT YOUR CODE HERE
const names = ["Zara Aynoor", "Jimmy Smith", "Sukhdeep Kaur"];

function printNames(names) {
    console.log("Q1 printNames:"); 

    function logName(name) {
        console.log(name);
    }

    names.forEach(logName);
}

printNames(names);
//---------- QUESTION 2 ----------
// Create a variable called 'trees' and assign it an array of 3 objects.  Each object should have a 'type' property and a 'height' property.  You can use 'type' to describe the type of tree (ex. Dogwood, Maple, Oak, Elm, etc.) and give them any height.  Now write a function called 'logTreeType' that uses forEach to log the type of each tree object to the console.

// EXAMPLE CALL:
//   const trees = [
//     { type: "oak", height: "30m" },
//     { type: "elm", height: "25m" },
//     { type: "birch", height: "18m" } ]
//   console.log("Q2 logTreeType:");
//   logTreeType(trees);

// EXAMPLE OUTPUT:
//   Q2 logTreeType:
//   oak
//   elm
//   birch

// PUT YOUR CODE HERE
const trees = [
    { type: "oak", height: "30m" },
    { type: "elm", height: "25m" },
    { type: "birch", height: "18m" } ];

    function logTreeType(trees) {
        console.log("Q2: logTreeType: ");

        function logTree(tree) {
            console.log(tree.type);
        }

        trees.forEach(logTree);
    }

    logTreeType(trees);
//---------- QUESTION 3 ----------
// Create a variable called 'myNumbers' and assign it an array of numbers.  Now write a function caled 'totalPoints' that uses forEach to add up all the numbers in that 
// array of numbers.

// EXAMPLE CALL:
//   let myNumbers = [1, 2, 7, 5, 8];
//   console.log (`Q3 totalPoints [${myNumbers}]:`, totalPoints(myNumbers));

// EXAMPLE OUTPUT:
//   Q3 totalPoints [1,2,7,5,8]:  23

// Try a few different input arrays to verify your code is working.

// PUT YOUR CODE HERE

let myNumbers = [1, 2, 4, 45];

const totalPoints = () => {
    let sum = 0;
    myNumbers.forEach(num => {
        sum += num;
    });
    return sum;
}
console.log (`Q3 totalPoints [${myNumbers}]:`, totalPoints(myNumbers));

//---------- QUESTION 4 ----------
// Create a variable called 'myWords' and assign it an array of words.  Then write a function called 'buildSentence' that takes in an array of words and uses 
// forEach to add the strings together. It should also add a space, " ", after each word.

// EXAMPLE CALL:
//    myWords = ["You","can","if","you","think","you","can","!"];
//    console.log (`Q4 buildSentence [${myWords}]: `, buildSentence(myWords));

// EXAMPLE OUTPUT:
//   Q4 buildSentence [You,can,if,you,think,you,can,!]:  You can if you think you can !

// Note: You should have a space after the ! too
// Try a few different input arrays to verify your code is working.

// PUT YOUR CODE HERE
const myWords = ["the", "sky", "is", "grey", "!"];

const buildSentence = (myWords) => {
    let buildString = "";

    myWords.forEach((word, index) => {
        if (index === 0) {
            buildString += word;
        } else {
            buildString += " " + word;
        }
    });

    return buildString;
}

console.log(`Q4 buildSentence [${myWords}]: `, buildSentence(myWords));



//---------- QUESTION 5 ----------
// Create a variable called 'decimals' and assign it an array of decimal numbers.  Write a function called 'logPercentages' that takes an array of decimal numbers 
// and uses forEach to log each one with the numbers formatted as percentages. That means:
//    Multiply by 100
//    Include the percent symbol (%) at the end of the string

// EXAMPLE CALL:
//   let decimals = [0.75, 0.91, 0.2, 1.34];
//   console.log("Q5 logPercentages:");
//   logPercentages(decimals);

// EXAMPLE OUTPUT:
// Q5 logPercentages:
//   75%
//   91%
//   20%
//   134%

// PUT YOUR CODE HERE
const decimals = [0.5, 0.75, 0.1, 0.91];

const logPercentages = (decimals) => {
    decimals.forEach((num) => {
        console.log(`${100 * num}%`);
    });
}
console.log("Q5 logPercentages:");
logPercentages(decimals);

// ----- Practice JS Array Methods - map -----
// ---------- QUESTION 6 ----------
// Let's practice using the map array method.  Create a variable called 'startingNums' and assign it an array of numbers.  
// Then write a function called 'addThreeToAll' that uses map to add 3 to each number in an array of numbers.

// EXAMPLE CALL:
//   let startingNums = [4, 41, 832, 72, 89];
//   console.log (`Q6 addThreeToAll [${startingNums}]: `, addThreeToAll(startingNums));

// EXAMPLE OUTPUT:
//   Q6 addThreeToAll [4,41,832,72,89]:  [ 7, 44, 835, 75, 92 ]

// PUT YOUR CODE HERE
const startingNums = [10, 13, 25, 50, 100];

const addThreeToAll = (nums) => {
    return nums.map((num) => num + 3);
};
console.log(`Q6 addThreeToAll [${startingNums}]: `, addThreeToAll(startingNums));


// ---------- QUESTION 7 ----------
// Create a variable called 'baseNums' and assign it an array of numbers.  Write a function called 'squareAll' that takes in an array of numbers, 
// and uses map to return an array containing the squares of each of the numbers.  Remember, you can square a number by multiplying it by itself,
// or by using the exponent operator like so:
// let number = 4
// number * number // 16
// number ** 2 // 16
// Note that the caret operator ^ does NOT mean exponent in JavaScript

// EXAMPLE CALL:
//   let baseNums = [4, 41, 832, 72, 89];
//   console.log (`Q7 squareAll [${baseNums}]:`, squareAll(baseNums));

// EXAMPLE OUTPUT:
//   Q7 squareAll [4,41,832,72,89]: [ 16, 1681, 692224, 5184, 7921 ]

// PUT YOUR CODE HERE
let baseNums = [4, 41, 832, 72, 89];

const squareAll = (baseNums) => {
    return baseNums.map((num) => num * num);
};

console.log (`Q7 squareAll [${baseNums}]:`, squareAll(baseNums));


// ---------- QUESTION 8 ----------
// Write a function called 'allGreetings' that takes an array of names (strings) by using your 'names' variable from question 1. Return an array of greetings (strings).
// The greetings should each be "Hello, [name], nice to meet you!".  You might find it helpful to use template strings.

// EXAMPLE CALL: (using the names array from question 1)
//   console.log (`Q8 allGreetings [${names}]:`, allGreetings(names));

// EXAMPLE OUTPUT:
// Q8 allGreetings [Juan Marcos,Aleksandra Ivanov,Zhang Wei,Bernice King]: [
//  'Hello, Juan Marcos, nice to meet you!',
//  'Hello, Aleksandra Ivanov, nice to meet you!',
//  'Hello, Zhang Wei, nice to meet you!',
//  'Hello, Bernice King, nice to meet you!'
// ]

// PUT YOUR CODE HERE
const allGreetings = (names) => {
    return names.map(name => {
        return `Hello, ${name}, nice to meet you!`;
    });
};
console.log (`Q8 allGreetings [${names}]:`, allGreetings(names));

// ---------- QUESTION 9 ----------
// Create a variable called 'users' and assign it an array of objects.  See example on line 153 below.  Write a function called 'getUsernames' that takes in an array
// of user objects and uses map to return an array of just the usernames.

// EXAMPLE CALL:
//   let users = [
//   {
//     username: "juan.marcos",
//     isAdmin: false,
//   },
//   {
//     username: "aleksandra.ivanov",
//     isAdmin: false,
//   },
//   {
//     username: "zhang.wei",
//     isAdmin: false,
//   },
//   {
//     username: "bernice.king",
//     isAdmin: true,
//   }
//   ];
//
//  console.log (`Q9 getUsernames:`, getUsernames(users));

// EXAMPLE OUTPUT:
//   Q9 getUsernames: [ 'juan.marcos', 'aleksandra.ivanov', 'zhang.wei', 'bernice.king' ]

// PUT YOUR CODE HERE
let users = [
    {
        username: "jamison.smith",
        isAdmin: false,
    },
    {
        username: "sue_steveson",
        isAdmin: false,
    },
    {
        username: "tehreem.khan",
        isAdmin: false,
    },
    {
        username: "nicole.garcia",
        isAdmin: true,
    }
];

const getUsernames = (users) => {
    return users.map(user => {
        return user.username; 
    });
}

console.log(`Q9 getUsernames:`, getUsernames(users));



// ---------- QUESTION 10 ----------
// Write a function called 'pluck' that takes in an array of objects and a string representing a key as parameters, and uses the map method to return an array of the values 
// at that key for each of the objects.  For example, if we used the users array from the last exercise, we could do pluck(users, 'username') to get the same results as 
// the last question.  If any of the objects does not have a value at that key, the array should have undefined in that slot.  Hint: Using the square bracket notation, 
// you can access a property of an object using a variable.

// EXAMPLE CALL: (using the users array from Q9)
//   console.log (`Q10 pluck "isAdmin":`, pluck(users, "isAdmin"));

// EXAMPLE OUTPUT:
//   Q10 pluck "isAdmin": [ false, false, false, true ]

// Try testing with username too!

// PUT YOUR CODE HERE
const pluck = (users, key) => {
    return users.map(user => user[key]);
}
console.log (`Q10 pluck "isAdmin":`, pluck(users, "isAdmin"));
console.log (`Q10 pluck "username":`, pluck(users, "username"));


// ----- Practice JS methods - filter -----
// ---------- QUESTION 11 ----------
// Write a function called 'evenNumbers' that takes an array as an argument and uses the filter method.  Return only the even numbers from the array of numbers. 
//  Remember - you can find out if a number is even by using the % operator (modulus operator) like this:
//  number % 2 === 0   (gives a true boolean result, for even numbers)

// EXAMPLE CALL:
//   let numberArray = [4, 41, 832, 72, 89, 120, 431, 505, 70];
//   console.log (`Q11 evenNumbers [${numberArray}]:`, evenNumbers(numberArray));

// EXAMPLE OUTPUT:
//   Q11 evenNumbers [4,41,832,72,89,120,431,505,70]: [ 4, 832, 72, 120, 70 ]
//
// If there are no even numbers in the array you make and use, return an empty array.

// PUT YOUR CODE HERE
let numberArr = [2, 5, 8, 74, 99, 134, 427, 55, 80];

const evenNumbers = (numberArr) => {
    return numberArr.filter((num) => num % 2 === 0);
}
console.log (`Q11 evenNumbers [${numberArr}]:`, evenNumbers(numberArr));

// ---------- QUESTION 12 ----------
// Write a function called 'greaterThan100' that takes in an array of numbers and uses the filter method.  
// Return any items in the array that are greater than 100.

// EXAMPLE CALL:
//   let numArray = [4,41,832,72,89,120,431,505,70];
//   console.log (`Q12 greaterThan100 [${numArray}]:`, greaterThan100(numArray));

// EXAMPLE OUTPUT:
//   Q12 greaterThan100 [4,41,832,72,89,120,431,505,70]: [ 832, 120, 431, 505 ]
//
// If there are no numbers greater than 100, return an empty array.

// PUT YOUR CODE HERE

const greaterThan100 = (numberArr) => {
    return numberArr.filter((num) => num > 100);
}
console.log (`Q12 greaterThan100 [${numberArr}]:`, greaterThan100(numberArr));

// ---------- QUESTION 13 ----------
// Write a function called 'nonAdminUsers' that takes in an array of user objects.  The objects should have a username and isAdmin property each like they do in Question 9.
//  The function should use the filter method to return the users who are not admins.

// EXAMPLE CALL: (using users array from Q9)
//   console.log (`Q13 nonAdminUsers:`, nonAdminUsers(users));

// EXAMPLE OUTPUT:
//   Q13 nonAdminUsers: [
//     { username: 'juan.marcos', isAdmin: false },
//     { username: 'aleksandra.ivanov', isAdmin: false },
//     { username: 'zhang.wei', isAdmin: false }
//   ]

// PUT YOUR CODE HERE
const nonAdminUsers = (users) => {
    return users.filter((user) => user.isAdmin === false);
}
console.log (`Q13 nonAdminUsers:`, nonAdminUsers(users));


// ---------- QUESTION 14 ----------
// Write a function called 'countAdminUsers' that uses filter and the length method on the result from filter.  The function should return the number of users 
// that have 'isAdmin: true' as part of their object.

// EXAMPLE CALL: (using users array from Q9)
//   console.log (`Q14 countAdminUsers:`, countAdminUsers(users));

// EXAMPLE OUTPUT:
//   Q14 countAdminUsers: 1

// It should only count Bernice King since she is the only admin in that example.

// PUT YOUR CODE HERE
const countAdminUsers = (users) => {
    return users.filter((user) => user.isAdmin === true).length;
}

console.log (`Q14 countAdminUsers:`, countAdminUsers(users));

// ---------- QUESTION 15 ----------
// Write a function called 'shorterThanX' that takes two arguments: an array of strings and an integer.  Use the filter method to return all the strings in the array 
// whose length is shorter than the integer provided as an argument.  If there's no strings in the array that are shorter than the number, return an empty array.

// EXAMPLE ARRAY:
// let strings = [
//   "Four score and seven years ago",
//   "our forefathers brought forth on this continent a new nation",
//   "conceived in liberty",
//   "and dedicated to the proposition that all men are created equal",
//   "Now we are engaged in a great civil war",
//   "testing whether that nation",
//   "or any so conceived and so dedicated",
//   "can long endure.",
// ];

// EXAMPLE CALL1:
//   console.log (`Q15 shorterThanX 20:`, shorterThanX(strings, 20));
// EXAMPLE OUTPUT1:
//   Q15 shorterThanX 20: [ 'can long endure.' ]

// EXAMPLE CALL2:
//   console.log (`Q15 shorterThanX 30:`, shorterThanX(strings, 30));
// EXAMPLE OUTPUT2:
//   Q15 shorterThanX 30: [
//    'conceived in liberty',
//    'testing whether that nation',
//    'can long endure.'
//  ]

// PUT YOUR CODE HERE

let strings = [
    "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    "Perhaps home is not a place but simply an irrevocable condition.",
    "Life is tragic simply because the earth turns and the sun inexorably rises and sets",
    "and one day, for each of us, the sun will go down for the last, last time.",
];

const shorterThanX = (strings, int) => {
    return strings.filter((str) => str.length < int);
}

console.log (`Q15 shorterThanX 20:`, shorterThanX(strings, 80));

// ---------- QUESTION 16 ----------
// Write a function called 'onlyStrings' that takes an array that has different types of elements (numbers, booleans, strings, etc.) and uses the filter method to 
// return an array of only the strings.

// EXAMPLE CALL:
//   let manyTypes = [4, "4", "four score", 80, {age: 80}, ["nations"], {type: "free"}, "states"];
//   console.log (`Q16 onlyStrings [${manyTypes}]:`, onlyStrings(manyTypes));

// EXAMPLE OUTPUT:
//   Q16 onlyStrings [4,4,four score,80,[object Object],nations,[object Object],states]: [ '4', 'four score', 'states' ]

// PUT YOUR CODE HERE

let manyTypes = ["Hi", 102, false, { name: "Zara", age: 33}, [10, 9 , 8]];

const onlyStrings = (manyTypes) => {
   return manyTypes.filter(item => typeof item === 'string');
}
console.log (`Q16 onlyStrings [${manyTypes}]:`, onlyStrings(manyTypes));

// ----- Practice JS methods - find -----
// ---------- QUESTION 17 ----------
// Write a function called 'firstOdd' that takes an array of numbers as an argument.  The function should use the find method to find the first odd number in an array.  
// Remember - you can find out if a number is odd using the % operator like so:
// number % 2 === 1  (gives a true boolean result, for odd numbers)
// If there are no odd numbers, return undefined.

// EXAMPLE CALL:
//   let array = [4,41,832,72,89,120,431,505,70]
//   console.log (`Q17 firstOdd [${array}]:`, firstOdd(array));

// EXAMPLE OUTPUT:
//   Q17 firstOdd [4,41,832,72,89,120,431,505,70]: 41

// PUT YOUR CODE HERE
let arr = [4, 8, 2, 4, 3, 1, 9];

const firstOdd = (arr) => {
    return arr.find(num => num % 2 !== 0);
}
console.log (`Q17 firstOdd [${arr}]:`, firstOdd(arr));
// ---------- QUESTION 18 ----------
// Write a function called 'getAdministrator' that takes an array of objects as an argument (like the one used in question 9).  The function should use the find method 
// to return the first object that has 'isAdmin: true' from the array of user objects.

// EXAMPLE CALL: (using users array from Q9)
//   console.log (`Q18 getAdministrator:`, getAdministrator(users));

// EXAMPLE OUTPUT:
//   Q18 getAdministrator: { username: 'bernice.king', isAdmin: true }

// PUT YOUR CODE HERE

const getAdministrator = (users) => {
    return users.find(item => item.isAdmin === true);
}

console.log (`Q18 getAdministrator:`, getAdministrator(users));

// ---------- QUESTION 19 ----------
// Write a function called 'divisibleByTen' that takes an array of numbers as an argument.  The function should use the find method to return the first number that is a 
// multiple of 10.  If there are no numbers divisible by 10, return undefined.

// EXAMPLE CALL:
//   let divArray = [4,41,832,72,89,120,431,505,70]
//   console.log (`Q19 divisibleByTen [${divArray}]:`, divisibleByTen(divArray));

// EXAMPLE OUTPUT:
//   Q19 divisibleByTen [4,41,832,72,89,120,431,505,70]: 120

// PUT YOUR CODE HERE

let divArr = [505, 70, 79, 935, 44, 2];

const divisibleByTen = (divArr) => {
    return divArr.find(item => item % 10 === 0);
}
console.log (`Q19 divisibleByTen [${divArr}]:`, divisibleByTen(divArr));

// ---------- QUESTION 20 ----------
// Write a function called 'divisibleByX' that takes two arguments: an array and an integer.  The function should use the find method to return the first number in the array
// that's divisible by the integer that was passed as an argument.  If there are no values that are divisible by the second argument, return undefined.

// EXAMPLE ARRAY:
//    let numbers = [4,41,832,72,89,120,431,70];

// EXAMPLE CALL 1:
//    Qconsole.log (`Q20 divisibleByX ([${divArray}], 10):`, divisibleByX(numbers, 10));
// EXAMPLE OUTPUT 1: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70], 10): 120

// EXAMPLE CALL 2:
//    console.log (`Q20 divisibleByX ([${divArray}]. 3):`, divisibleByX(numbers, 3));
// EXAMPLE OUTPUT 2: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70]. 3): 72

// EXAMPLE CALL 3:
//    console.log (`Q20 divisibleByX ([${divArray}], 2):`, divisibleByX(numbers, 2));
// EXAMPLE OUTPUT 3: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70], 2): 4

// PUT YOUR CODE HERE

let numArr = [4,41,832,72,89,120,431,70];

const divisibleByX = (numArr, int) => {
    return numArr.find(item => item % int === 0);
}
console.log (`Q20 divisibleByX ([${numArr}], 10):`, divisibleByX(numArr, 10));
console.log (`Q20 divisibleByX ([${numArr}]. 3):`, divisibleByX(numArr, 3));
console.log (`Q20 divisibleByX ([${numArr}], 2):`, divisibleByX(numArr, 2));

// ---------- QUESTION 21 ----------
// Write a function called 'startsWithLetter' that takes two arguments: an array of strings and a letter.  The function should use the find method to return the first string 
// in the array that starts with the letter provided as the argument.  If there's no string in the array that starts with that letter, return undefined. The function 
// should leave lowercase and uppercase letters alone.

// STRETCH GOAL: Throw an error "Letter must be a string of length 1" if the second argument is not a string, or if its length is more than 1.

// EXAMPLE ARRAY:
// let jokeStrings =
//   ["Do you want to hear a joke?",
//    "It's about a three-legged dog",
//    "The dog walks into a bar",
//    "The dog says, ",
//    "\"I'm looking for the man who shot my paw\"",
//    "Get it?"]

// EXAMPLE CALL 1:
//    console.log (`Q21 startsWithLetter T:`, startsWithLetter(jokeStrings, "T"));
// EXAMPLE OUTPUT 1: (if using the example array above)
//    Q21 startsWithLetter T: The dog walks into a bar

// EXAMPLE CALL 2:
//    console.log (`Q21 startsWithLetter I:`, startsWithLetter(jokeStrings, "I"));
// EXAMPLE OUTPUT 2: (if using the example array above)
//    Q21 startsWithLetter I: It's about a three-legged dog

// EXAMPLE CALL 3:
//    console.log (`Q21 startsWithLetter i:`, startsWithLetter(jokeStrings, "i"));
// EXAMPLE OUTPUT 3: (if using the example array above)
//    Q21 startsWithLetter i: undefined

// STRETCH GOAL EXAMPLE CALL:
//    console.log (`Q21 startsWithLetter dog:`, startsWithLetter(jokeStrings, "dog"));
// STRETCH GOAL EXAMPLE OUTPUT:
//    Q21 startsWithLetter dog: Error: Letter must be a string of length 1

// PUT YOUR CODE HERE
let quoteString = 
[
    "Sometimes we make the process more complicated than we need to",
    "We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be.",
    "We make the journey by taking each day step by step and then repeating it again and again until we reach out destination.",
    "Quote by Joseph B Wirthlin"
]

const startsWithLetter = (quoteString, string) => {
    if(typeof string !== 'string' || string.length !== 1) {
        throw new Error("Letter must be a string of length 1.");
    }
    return quoteString.find(item => item[0].toLowerCase() === string.toLowerCase());
}

console.log(`Q21 startsWithLetter T:`, startsWithLetter(quoteString, "T")); 
console.log(`Q21 startsWithLetter T:`, startsWithLetter(quoteString, "S")); 
console.log(`Q21 startsWithLetter I:`, startsWithLetter(quoteString, "I")); 
console.log(`Q21 startsWithLetter T:`, startsWithLetter(quoteString, "Q")); 
console.log(`Q21 startsWithLetter i:`, startsWithLetter(quoteString, "i")); 
console.log(`Q21 startsWithLetter W:`, startsWithLetter(quoteString, "W")); 

try {
    console.log(`Q21 startsWithLetter bird:`, startsWithLetter(quoteString, "bird"));
} catch (error) {
    console.log("Error:", error.message); 
}
//--------------------------------------------
// STRETCH GOAL ON ALGORITHMS BELOW
//--------------------------------------------

// Algorithms
// This is the coding assigment for the sixth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - What is an algortihm?
//  - Properties of a good algorithm
//  - Ideas on how to solve a problem using an algorithm
//  - Practice a few algorithms in JavaScript

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. You can output the return value of a function in a similar way to how you output variable values last week.  To use a function in a console.log you invoke/call the function as part of the console log like this:

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".

// NOTE: These problems (aka algortihm questions) have not necessarily been covered in depth in the lessons so far, so please use your resources (mentors, classmates, etc) to help you. You can also use Google to help you.

// FOR ADDITIONAL PRACTICE WE RECOMMEND THE FOLLOWING IN ADDITION TO THIS ASSIGNMENT:
// 1. Navigate to freecodecamp.org and create a free account
// 2. In the Menu, select Curriculum and select JavaScript Algorithms and Data Structures Certifications
// 3. Scroll down to the Basic Algorithms Scripting section
// 4. Work on the first 4 (four) problems.
//     a. Convert Celsius to Fahrenheit
//     b. Reverse a String
//     c. Factorialzie a Number
//     d. Find the Longest Word in a String

//---------- QUESTION 1 ----------
// Pairs Maker
// Write a function called pairsMaker(array) that takes in an array as an argument. The function should return a 2-Dimensional array (an array of arrays) where the subarrays 
// represent unique pairs of elements from the input array.  The content of the array is limited to integers.  The contents of the input array do not need to be unique,
// but repeated elements do not create new unique pairs.  Order does matter for unique pairs (e.g. [1, 2] is not the same as [2, 1]). The result should include 
// self pairs (e.g. [1, 1]).

// EXAMPLE CALL:
//   let testArray = [1, 2, 3, 5];
//   console.log (`Q1: input: [${numbersArray}], output:`, pairsMaker(numbersArray));

// EXAMPLE OUTPUT:
//   Q1 pairsMaker: input: [1, 2, 3, 5], output: [
//     [ 1, 1 ], [ 1, 2 ],
//     [ 1, 3 ], [ 1, 5 ],
//     [ 2, 1 ], [ 2, 2 ],
//     [ 2, 3 ], [ 2, 5 ],
//     [ 3, 1 ], [ 3, 2 ],
//     [ 3, 3 ], [ 3, 5 ],
//     [ 5, 1 ], [ 5, 2 ],
//     [ 5, 3 ], [ 5, 5 ]
//   ]

// EXAMPLE CALL 2:
//   testArray = [1, 2, 1, 1, 3, 5, 2];  // Note the 3 1's and 2, 2's)
//   console.log (`Q1: input: [${numbersArray}], output:`, pairsMaker(numbersArray));

// EXAMPLE OUTPUT 2:
//   The output should be the same.
//   Q1 pairsMaker: input: [1,2,1,3,5], output: [
//     [ 1, 1 ], [ 1, 2 ],
//     [ 1, 3 ], [ 1, 5 ],
//     [ 2, 1 ], [ 2, 2 ],
//     [ 2, 3 ], [ 2, 5 ],
//     [ 3, 1 ], [ 3, 2 ],
//     [ 3, 3 ], [ 3, 5 ],
//     [ 5, 1 ], [ 5, 2 ],
//     [ 5, 3 ], [ 5, 5 ]
//   ]

// PUT YOUR CODE HERE
let testArr = [1, 2, 1, 2, 3, 6];

const pairsMaker = (testArr) => {
    // will be returned as a 2D array
    let result = [];

    // creating a Set to ensure pairs are unique
    let seenPairs = new Set();

    // nested two loop to create pairs with i and j 
    for (let i = 0; i < testArr.length; i++) {
        for (let j = i; j < testArr.length; j++) {
            // temp 1D array to be created in each iteration to hold
            // the pair of elements from testArr
            const pair = [testArr[i], testArr[j]];

            const sortedPair = pair.slice().sort((a, b) => a - b); 
            const pairString = JSON.stringify(sortedPair); 

            if (!seenPairs.has(pairString)) {
                seenPairs.add(pairString);  
                result.push(pair);        
            }
        }
    }

    return result;
};

console.log(pairsMaker(testArr));


//---------- QUESTION 2 ----------
// Two Sum
// Write a function called twoSum(arr, target) that accepts an array and a // target number as arguments. The function should return a boolean indicating if any two 
// numbers of the array add up to the target value. You can assume that input array contains only unique numbers.

// EXAMPLE CALL:
//  let q2TestArray = [1, 2, 3, 4, 5];
//  console.log (`Q2 twoSum: input: ([${q2TestArray}], 9), output:`, twoSum(q2TestArray, 9));

// EXAMPLE OUTPUT:
//  Q2 twoSum: input: ([1,2,3,4,5], 9), output: true

// PUT YOUR CODE HERE
let q2TestArray = [5, 4, 3, 2, 1];

const twoSum = (q2TestArray, target) => {
    // iterates over each element
    for (let i = 0; i < q2TestArray.length; i++) {
        // checks every element after q2TestArray[i] (q2TestArray where j > 1)
        for (let j = i + 1; j < q2TestArray.length; j++) {
            if(q2TestArray[i] + q2TestArray[j] === target) {
                return true;
            }
        }
    }
    return false;
}
console.log (`Q2 twoSum: input: ([${q2TestArray}], 9), output:`, twoSum(q2TestArray, 9));
//---------- QUESTION 3 ----------
// Pair Product
// Write a function called pairProduct(arr, product) that accepts an array of numbers and a product (the result when two numbers were multiplied together) as arguments. 
// The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume 
// that the input array contains unique elements.

// EXAMPLE CALL:
//  let q3TestArray = [4, 6, 3, 4, 5];
//  console.log (`Q3 pairProduct: input: ([${q3TestArray}], 18), output:`, pairProduct(q3TestArray, 18));

// EXAMPLE OUTPUT:
//  Q3 pairProduct: input: ([4,6,3,4,5], 18), output: true

// Write an additional test that results in a false return from pairProduct.

// PUT YOUR CODE HERE
let q3TestArray = [2, 8, 3, 6, 7];

const pairProduct = (q3TestArray, product) => {
 for (let i = 0; i < q3TestArray.length; i++) {
    for (let j = i + 1; j < q3TestArray.length; j++) {
        if(q3TestArray[i] * q3TestArray[j] === product) {
            return true;
        }
    }
}
return false;
}
console.log (`Q3 pairProduct: input: ([${q3TestArray}], 18), output:`, pairProduct(q3TestArray, 18));
console.log (`Q3 pairProduct: input: ([${q3TestArray}], 3), output:`, pairProduct(q3TestArray, 3));

//---------- QUESTION 4 ----------
// Strange Sums
// Write a function called strangeSums(arr) that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements 
// that have a sum of zero. You may assume that the input array contains unique elements.

// EXAMPLE CALL:
//  let q4TestArray = [2, -3, 3, 4, -2];
//  console.log (`Q4: input: [${q4TestArray}], output:`, strangeSums(q4TestArray));

// EXAMPLE OUTPUT:
//  Q4: input: [2,-3,3,4,-2], output: 2

// PUT YOUR CODE HERE
let q4TestArray = [8, -3, 3, 10, -2];

const strangeSums = (q4TestArray) => {
    let count = 0;
    for (let i = 0; i < q4TestArray.length; i++) {
        for (let j = i + 1; j < q4TestArray.length; j++) {
            if(q4TestArray[i] + q4TestArray[j] === 0) {
                count++;
            }
        }
    }
    return count;
}
console.log (`Q4: input: [${q4TestArray}], output:`, strangeSums(q4TestArray));

