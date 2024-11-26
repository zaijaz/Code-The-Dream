//--------------- IMPORTANT!!! ---------------

// Use the keyboard shortcut Alt + Z (for PC) or Option + Z (for Mac) to allow word wrap on this document.  Word wrap breaks the lines so you don't have to keep scrolling left and right to read.

//READ THE INFORMATION IN THE BROWSER WINDOW PANEL ON THE RIGHT BEFORE BEGINNING YOUR ASSIGNMENT!!

//---------- OVERVIEW AND INSTRUCTIONS ----------

//-------------------------------------------
// LESSON 3 OBJECTS
//-------------------------------------------

//# JavaScript Objects
// This is the coding assigment for the third week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Object Basics
//   - Primitive vs Object Types
//   - Object Destructuring
//   - Manipulating Objects

// NOTE: Arrays are a kind of Object in JavaScript (which is why you can reference an element by number and see what string/number/etc. is in that position of the array).  JavaScript Objects also support a different type of array referred to as an associative array.  Rather than an item in the array being addressed by an integer, it is addressed by a string, and allows you to associate a string name with any type of javascript value.  It stores a set of key:value pairs, where the key is a string.

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 3 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console tab to the bottom right of this screen. If your Console is not showing, click the Inspect Button in the top right (see the Welcome to week 3 information to the right if you need help finding that)  Check to make sure that the output you get in your Console is the expected output.

// ---------- QUESTION 1 ----------
// Objects are a way to store property:value pairs of data in a variable.  First, create an object called 'myPet'.  Add three properties called 'name', 'species', and 'color' to the 'myPet' object below and assign each of them values.  Use your console.log's to print the values of each property to the console.

// EXAMPLE LOG:
//    console.log("Q1 name: ", myPet.name);
//    console.log("Q1 species: ", myPet.species);
//    console.log("Q1 color: ", myPet.color);
// EXAMPLE OUTPUT:
//    Q1 name: Teddy
//    Q1 species: ferret
//    Q1 color: brown

// PUT YOUR CODE HERE
const myPet = {
    name: "Moosh",
    species: "Cat",
    color: "brown"
  };

console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);

// ---------- QUESTION 2 ----------
// Now let's see how we can use the property:value pairs in template literals.  Create a variable called 'aboutPet' and assign it a template literal that uses the 'myPet' object to make a sentence sharing all the pet details.  The sentence should look something like this: "Teddy is a brown ferret."

// EXAMPLE LOG:
//    console.log("Q2: ", aboutPet);
// EXAMPLE OUTPUT:
//    Q2: Teddy is a brown ferret.

// PUT YOUR CODE HERE
let aboutPet = `${myPet.name} is a ${myPet.color} ${myPet.species}.`;
console.log("Q2: ", aboutPet);

// ---------- QUESTION 3 ----------
// Let's add a method to our object.  Create a method called 'age' that takes no parameters, and uses no outside variables (hint: use 'this').  The method should return the age of the pet in years.

// EXAMPLE LOG:
//    console.log("Q3: ", myPet.age());
// EXAMPLE OUTPUT:
//    Q3: 7

// PUT YOUR CODE HERE
myPet.age = function() {
    return 7; 
  };
  
  console.log("Q3: ", myPet.age());

// ---------- QUESTION 4 ----------
// Now, let's see how we can use data within objects in functions.  Write a function called 'isDog' that takes one object parameter.  In the function, create a variable called 'speciesChecker' and assign it the value 'dog'.  Then, still in the function, return true if the object's species value is equal to the variable 'speciesChecker', or false if not.

// EXAMPLE LOG:
//    console.log("Q4: ", isDog(myPet));
// EXAMPLE OUTPUT: (if your 'myPet' object from Question 1 is about any animal other than a dog)
//    false
// NOTE: if when you made 'myPet' in Question 1, you did put dog as species, you should get true as your output instead.

// PUT YOUR CODE HERE
function isDog(pet) {
    let speciesChecker = "dog";
    return pet.species === speciesChecker;
  }
  
  console.log("Q4: ", isDog(myPet));

// ---------- QUESTION 5 ----------
// Time to start building on our knowledge!  Create a variable called 'library' and assign it an array of 3 objects.  Each object in the array should have three properties: 'title', 'author', and 'libraryID'.  You can use any three books/movies/etc. you like, and make up any library ID for each item as long as your ID numbers are 4 characters long.  An example object could look something like this:

//   title: 'The Tech That Comes Next',
//   author: 'Amy Sample Ward and Afua Bruce',
//   libraryID: 9826

// You will use this array of objects for this and the next several questions.  For this question, create a function called 'sortArray' that takes one Array parameter (use the one you just made) and returns a NEW array sorted in ascending order (low to high) by libraryID. Remember that assigning an array to a new variable does not make a copy.  Also, the objects inside a new copy of the library array are still the original objects, so make a copy of each object before adding the property.

// EXAMPLE LOG:
//    console.log("Q5: ", sortArray(library));
// EXAMPLE OUTPUT: (if your 'library' array contains books with libraryID numbers of 9826, 1234, and 5729)
//    Q5: [
//      { title: 'JavaScript: The Good Parts', author: 'Douglas
// Crockford', libraryID: 1234},
//      { title: 'Secrets of the JavaScript Ninja', author: 'Resig,
// Bibeault, and Maras', libraryID: 5729},
//      { title: 'The Tech That Comes Next', author: 'Amy Sample Ward
// and Afua Bruce', libraryID: 9826}
//    ]

// PUT YOUR library object CODE HERE
let library = [
    { title: 'Braiding Sweet Grass', author: 'Umes Santilal', libraryID: 1234 },
    { title: 'Disability Visibility', author: 'Alice Wong', libraryID: 5729 },
    { title: 'Doppelganger: A Trip into the Mirror World', author: 'Naomi Klein', libraryID: 9826 }
  ];

// PUT YOUR function CODE HERE
function sortArray(libraryArray) {

    return libraryArray
      .map(item => ({ ...item }))  
      .sort((a, b) => a.libraryID - b.libraryID); 
  }

// ---------- QUESTION 6 ----------
// Create a function called 'addTypeProperty' that takes one Array parameter and returns a NEW Array where each Object has a new property called 'type' with value 'book'.  Remember that assigning an array to a new variable does not make a copy.  Also, the objects inside a new copy of the library array are still the original objects, so make a copy of each object before adding the property.  The spread operator can be used to make a copy of an object. STRETCH GOAL: use the map() method to achieve this.

// EXAMPLE LOG:
//    console.log("Q6: ", addTypeProperty(library));
// EXAMPLE OUTPUT:
//    Q6: [
//      { title: 'The Tech That Comes Next', author: 'Amy Sample Ward
// and Afua Bruce', libraryID: 9826, type: 'book'}
//      { title: 'JavaScript: The Good Parts', author: 'Douglas
// Crockford', libraryID: 1234, type: 'book'},
//      { title: 'Secrets of the JavaScript Ninja', author: 'Resig,
// Bibeault, and Maras', libraryID: 5729, type: 'book'},
//    ]

// PUT YOUR CODE HERE
function addTypeProperty(libraryArray) {
    return libraryArray.map(item => ({ ...item, type: 'book' }));
  }
console.log("Q6: ", addTypeProperty(library));


// ---------- QUESTION 7 ----------
// Create a function called 'addNewObject' that takes one Array parameter and one Object parameter and returns a new Array with the new Object inserted at the end.  Remember that assigning an array to a new variable does not make a copy.  Also, the objects inside a new copy of the library array are still the original objects, so make a copy of each object before adding the property.  The spread operator can be used to make a copy of an object.

// HINT: The new object should have the following properties: 'title', 'author', and 'libraryID'

// EXAMPLE LOG:
//    console.log("Q7: ", addNewObject(library,{title:'JavaScript: The Definitive Guide',author:'David Flanagan',libraryID: 6248}));
// EXAMPLE OUTPUT:
//    Q7: [
//         { title: 'The Tech That Comes Next', author: 'Amy Sample Ward
//    and Afua Bruce', libraryID: 9826},
//         { title: 'JavaScript: The Good Parts', author: 'Douglas
//    Crockford', libraryID: 1234},
//         { title: 'Secrets of the JavaScript Ninja', author: 'Resig,
//    Bibeault, and Maras', libraryID: 5729},
//         { title: 'JavaScript: The Definitive Guide', author: 'David
//    Flanagan', libraryID: 6248}
//    ]

// PUT YOUR CODE HERE
function addNewObject(libraryArray, newObj) {

    return [...libraryArray, { ...newObj}];
  }
  
const newBook = { title: 'Clean Code', author: 'Robert C. Martin', libraryID: 6248 };
console.log("Q7: ", addNewObject(library, newBook));