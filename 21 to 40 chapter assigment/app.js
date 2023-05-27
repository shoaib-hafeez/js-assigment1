//Chapter 21 (Changing Case)

//1Type the characters that are missing from this code.

var allLower = userInput.toLowerCase();

//2Convert the string represented by x to lower-case and assign theresult to the same variable.

var x = "SHOAIB";
x = x.toLowerCase();

console.log(x); // ans: shoaib

//3Convert the string represented by y to upper-case and assign theresult to the same variable.

var y = "shoaib";
y = y.toUpperCase();

console.log(y); // ans: SHOAIB

//4Convert the string represented by a variable to lower-case andassign the result to a second variable that hasn't been declaredbeforehand.

var originalString = "sHOAIB";
var lowerCaseString = originalString.toLowerCase();

console.log(lowerCaseString); // ans: SHOAIB

//5 Convert the string represented by an array element to lower-caseand assign it to a variable that hasn't been declared beforehand.

var array = ["Hello", "World"];
var lowerCaseElement = array[0].toLowerCase();

console.log(lowerCaseElement);

//6Display in an alert the upper-case version of the string
//represented by a variable.

var myString = "hello world";
var upperCaseString = myString.toUpperCase();

alert(upperCaseString);

7; //var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

var cityName = "kaRacHi";
var capitalizedName =
  cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedName);

//Chapter 22 - 25 (Strings)

//1. "captain" has been assigned to variable “sameWords”. You want
//to slice "ap" out of it.

var sameWords = "captain";
var slicedWords = sameWords.slice(0, 2) + sameWords.slice(4);

console.log(slicedWords);

//2.The number of characters in the string will be assigned to the
//variable.

var myString = "Hello World";
var characterCount = myString.length;

console.log(characterCount);

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

var animal = "elephant";
var seg = animal.slice(2, 6);

console.log(seg);

//5In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.

var myString = "Hello World";
var characterCount = myString.length;
var slicedString = myString.slice(0, 1) + myString.slice(-3);

console.log(characterCount);
console.log(slicedString);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

var text = "To be or not to be.";
var indx = text.indexOf("be"); //ans is 3

//7var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?

var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); // ans is  16

// 8.Find the index of the first character of the last instance of "go" in
//the string represented by the variable text and assign the number
//to the variable indx, which hasn't been declared beforehand.

var text = "Let it go, let it go";
var substring = "go";
var indx = text.lastIndexOf(substring);

if (indx !== -1) {
  indx += substring.length - 1;
}

console.log(indx); // ans is : 12

// 9.Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.

var myString = "Hello, World";
var indexNum = 7;

if (indexNum >= 0 && indexNum < myString.length) {
  // Code block if the segment exists
  console.log("Segment exists at index " + indexNum);
} else {
  // Code block if the segment does not exist
  console.log("Segment does not exist at index " + indexNum);
}
//10.In this string "abcde", what character is at index 2? (Use
//charAt)

var myString = "abcde";
var characterAtIndex = myString.charAt(2);

console.log(characterAtIndex); // ans is : c

// 11.Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.

var text = "Lorem ipsum dolor sit amet";
var cha = text.charAt(9);

console.log(cha); // ans is : m

// 12.Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

var str = "Hello World";
var x = str.charAt(str.length - 1);

console.log(x); // ans is : d

// 13.Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

var input = "Hello World";
var cha = input.charAt(4);

console.log(cha); // ans is : o

// 14.Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.

var myString = "Hello World";
var desiredChar = "l";

if (myString.charAt(2) === desiredChar) {
  console.log("The 3rd character is " + desiredChar);
} else {
  console.log("The 3rd character is not " + desiredChar);
}

// 16.In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

var str = "1 apple, 2 oranges, 3 bananas";
var newStr = str.replace("1", "one");

console.log(newStr); // ans is : "one apple, 2 oranges, 3 bananas"

// 17.If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");

var x = "apple, banana, avocado";
var y = x.replace(/a/g, "z");

console.log(y); // ans is : "zpple, bznnz, zvoczdo"

//Chapter 26 (Rounding Numbers)

//1.Convert a random number generated by JavaScript to a number in
//the range 1 to 50

var randomNumber = Math.random(); // Generates a random number between 0 and 1
var convertedNumber = Math.floor(randomNumber * 50) + 1; // Converts the number to the range 1 to 50

console.log(convertedNumber);

//2.Generate a random number and assign it to a variable that hasn't
//been declared beforehand.
var randomNumber = Math.random();

console.log(randomNumber);

//3.You have to create a dice in JavaScript with the use of pseudo-
//random number.

function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

var diceResult = rollDice();
console.log("Dice rolled: " + diceResult);

//4.You have to create a toss (head/tail) in JavaScript with the use of
//pseudo-random number.
function tossCoin() {
  var randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return "Heads";
  } else {
    return "Tails";
  }
}
var coinResult = tossCoin();
console.log("Coin Tossed: " + coinResult);

//Chapter 28, 29 (Converting Strings)

//1.How do you convert a string to an integer in JavaScript?

var str = "456";
var integer = Number(str);
console.log(integer); // ans is : 456

function convertStringToInteger(str) {
  var integer = parseInt(str);
  return integer;
}

//2.Write a JavaScript function to convert the string "123" to an
//integer.
var str = "123";
var integer = convertStringToInteger(str);
console.log(integer); // ans is : 123

//3.How can you convert a string containing a decimal number to a
//floating-point number in JavaScript?

var str = "2.718";
var floatNum = Number(str);
console.log(floatNum); // ans is : 2.718

//4.How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?

function isConvertibleToNumber(str) {
  return /^-?\d*\.?\d+$/.test(str);
}

var str1 = "123";
var str2 = "3.14";
var str3 = "abc";

console.log(isConvertibleToNumber(str1)); //  true
console.log(isConvertibleToNumber(str2)); //  true
console.log(isConvertibleToNumber(str3)); //  false

//5.How can you convert a number to a string in JavaScript?

var num = 123;
var str = num.toString();
console.log(str); // ans is : "123"

//6.Write a JavaScript function to convert the number 42 to a string.

function convertNumberToString(num) {
  var str = num.toString();
  return str;
}

// Example usage:
var number = 42;
var string = convertNumberToString(number);
console.log(string); // ans is : "42"

//   7.Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?

var decimalString = "3.14";
var roundedInteger = Math.round(parseFloat(decimalString));
console.log(roundedInteger); // ans is : 3

//Chapter 30 (Controlling the length of decimals)

// 1.Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.

var num = 3.141592653589793;
var newNum = num.toFixed(4);
console.log(newNum); // ans is : "3.1416"

//2.In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.

var num = 3.14159;
num = Number(num.toFixed(2));

// 3.Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.

var num = 3.14159;
num = Number(num.toFixed(2));

// 4.Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.

var number = 3.14159265358979323846;
var roundedString = number.toFixed(2).toString();

alert(roundedString);

//Chapter 31 - 34 (Date & Time)

//1.Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.

var dObj = new Date();

//2.Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.

var dStr = new Date().toString();

//3.Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.

var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dayName = daysOfWeek[d.getDay()];

// 4.The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
alert(dayNames[d]);

// 5.Extract all parts of the Date and Time and assign it to the variable
//which has not been declared beforehand.

var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();

//6.Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.

var later = new Date(2020, 11, 31);

//7.Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.

var dateObj = new Date(1992, 1, 2);

//8.Code a single statement that displays in an alert the milliseconds
//that elapsed between the reference date and the beginning of
//1980.

var millisecondsElapsed = new Date().getTime() - new Date(1980, 0, 1).getTime();
alert(millisecondsElapsed);

//9.How do you change the year of a date in JavaScript?

var dateObj = new Date();
dateObj.setYear(23);

//10.Write a JavaScript function to change the month of a given
//date to January.

var myDate = new Date();
var updatedDate = changeMonthToJanuary(myDate);
console.log(updatedDate);

//11.What is the method to change the day of the week for a
//specific date in JavaScript?

var myDate = new Date();
var updatedDate = changeDayOfWeek(myDate, 4);
console.log(updatedDate);

//12.Write a JavaScript function to change the minutes of a given
//time to a specific value. (Value by prompt)

var myTime = new Date();
var updatedTime = changeMinutesToSpecificValue(myTime);
console.log(updatedTime);

//13.Write a JavaScript function to add a specific number of
//hours to a given time.

var myTime = new Date();
var updatedTime = addHoursToTime(myTime, 3);
console.log(updatedTime);

//14.You have to create a age calculator in JavaScript.

var birthDate = "1990-05-15";
var age = calculateAge(birthDate);
console.log(age);

//Chapter 35 - 37 (Functions)

//1.Code the first line of a function displayAlert.

function displayAlert() {}

//2.Code a function named askName that prompts the user to "Enter
//name" and assigns the answer to userName, which hasn't been
//declared beforehand.

var name = askName();
console.log(name);

//3.Code a function that calls 2 other functions.

function functionOne() {
    console.log("This is functionOne");
  }
  
  function functionTwo() {
    console.log("This is functionTwo");
  }
  
  callTwoFunctions();

//4.Code a function that displays a prompt, "Enter name" and then
//displays the name in an alert. Call the function.

function displayNamePrompt() {
    var name = prompt("Enter name");
    alert("Your name is: " + name);
  }
  
  displayNamePrompt();

  //5.Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.
  
function concat(a, b, c) {
    var myVariable = "Hello";
    var myString = "world";
    var myNumber = 42;
    
    concat(myVariable, myString, myNumber);
}

// 6.Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.

function concatenate(param1, param2) {
    var result = param1 + param2;
    return result;
  }
  
  var concatenatedValue = concatenate("Hello", "world");
  console.log(concatenatedValue);

  //7.Code a function that has three parameters. Multiply them and
//assign them to a variable that hasn't been declared yet.
  
function multiplyNumbers(num1, num2, num3) {
    var result = num1 * num2 * num3;
    return result;
  }
  
  var multipliedValue = multiplyNumbers(2, 3, 4);
  console.log(multipliedValue);

  //8.Write a JavaScript function that takes an array of numbers as
//input and returns the average of those numbers.
  
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
  
    var sum = numbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  
    var average = sum / numbers.length;
    return average;
  }

  var numbersArray = [5, 10, 15, 20];
  var result = calculateAverage(numbersArray);
  console.log(result);

  //9.Write a JavaScript function that takes two parameters and returns
//their sum.
  
function sumNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
  }
  
  var result = sumNumbers(3, 5);
  console.log(result);
  
//10.Write a JavaScript function that takes an array of numbers as
//input and returns the average of those numbers.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
  
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    var average = sum / numbers.length;
    return average;
  }
  
  var numbersArray = [5, 10, 15, 20];
  var result = calculateAverage(numbersArray);
  console.log(result);

  //11.You have to capture the returned value from a function and
//store it in a variable?
  
function calculateSum(a, b) {
    return a + b;
  }
  
  var result = calculateSum(3, 5); 
  console.log(result); // ans is : 8


  //12.Write a function which tells letter counts of (word).

  function countLetters(word) {
    var letterCounts = {};
    
    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
  
    return letterCounts;
  }

  var word = "hello";
  var result = countLetters(word);
  console.log(result);

  //13.Write a function to set (year) in date object.

  function setYearInDate(year) {
    var date = new Date();
    date.setFullYear(year);
    return date;
  }
  var year = 2022;
  var dateObject = setYearInDate(year);
  console.log(dateObject);

  //14.Write a function which tells the age of a person who Born on
//(dateOfBirth)
 
function calculateAge(dateOfBirth) {
    var currentDate = new Date();
    var birthDate = new Date(dateOfBirth);
    
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  var dateOfBirth = "1990-05-10";
  var age = calculateAge(dateOfBirth);
  console.log(age);

  //15.Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false

function checkWordPresence(word) {
    var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
    
    for (var i = 0; i < array.length; i++) {
      if (array[i] === word) {
        return true;
      }
    }
    
    return false;
  }
  
  var wordToSearch = 'raza';
  var isPresent = checkWordPresence(wordToSearch);
  console.log(isPresent);

  //16.Write a function which repeat (letter) 10 times.
//Hint: "abcde" str.repeat(10)
  
function repeatLetter(letter, repetitions) {
    var repeatedString = letter.repeat(repetitions);
    return repeatedString;
  }
  
  var letterToRepeat = 'a';
  var numberOfRepetitions = 10;
  var repeatedResult = repeatLetter(letterToRepeat, numberOfRepetitions);
  console.log(repeatedResult);

  //17.write a function which reverse array = ['a','b','c','d','e']
//Hint: arr.reverse()
  
function reverseArray(array) {
    var reversedArray = array.reverse();
    return reversedArray;
  }

  var arr = ['a', 'b', 'c', 'd', 'e'];
  var reversedResult = reverseArray(arr);
  console.log(reversedResult);

  //Chapter 38 (Local vs. Global Variables)

  //1.Write a JavaScript function that demonstrates the usage of a local
//variable.
  
function calculateSum(num1, num2) {
    var result = num1 + num2; // local variable
    
    console.log("The sum is: " + result);
    
    var multipliedResult = result * 2;
    console.log("Twice the sum is: " + multipliedResult);
  }
  calculateSum(5, 3);

  //2.How can you access a global variable inside a function in
//JavaScript?

var globalVariable = "Hello, world!"; 

function myFunction() {
  console.log(globalVariable); 
}
myFunction(); 

//Chapter 39, 40 (Switch Statements)

//1.Write a JavaScript switch statement that checks the value of a
//variable and performs different actions based on different cases.

var dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  case "Thursday":
    console.log("It's Thursday!");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  default:
    console.log("It's the weekend or an invalid day.");
    break;
}

//2.Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "London":
    alert("You entered London!");
    break;
  case "Paris":
    alert("You entered Paris!");
    break;
  case "Tokyo":
    alert("You entered Tokyo!");
    break;
  default:
    alert("City not recognized.");
    break;
}

