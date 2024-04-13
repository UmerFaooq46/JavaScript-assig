// // // ======================QUESTION 01===========================================
// // var firstName = prompt("Enter your first name:");
// // var lastName = prompt("Enter your last name:");

// // var fullName = firstName + " " + lastName;

// // alert("Hello, " + fullName + "! Welcome.");
// // // ======================QUESTION 02===========================================
// // function displayLength() {
// //     var userInput = document.getElementById("phoneModel").value;

// //     var inputLength = userInput.length;

// //     document.getElementById("lengthDisplay").innerText = "Length of your favorite mobile phone model: " + inputLength;
// // }
// // // ======================QUESTION 04===========================================
// // var word = "Hello World";

// //   var lastIndex = word.lastIndexOf('l');

// //   document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);
// // ==========================QUESTION 06=======================================================
//  var word = "Pakistani";

//  var charAtIndex3 = word.charAt(3);

//  document.write("The character at the 3rd index in the word 'Pakistani' is: " + charAtIndex3);
// // ============================QUESTION 07============================================
// function replaceText() {
//     var originalText = "Hyderabad";
//     var replacedText = originalText.replace("Hyder", "Islam");
//     document.getElementById("result").innerText = replacedText;
// }
// // // ============================QUESTION 08============================================
// function replaceText() {
//     var originalString = document.getElementById("originalString").value;
//     var replacedString = originalString.replace(/and/g, "&");
//     document.getElementById("result").innerText = replacedString;
// }

// // =====================================QUESTIONS 09=======================================
// function convertStringToNumber() {
//     var str = "472";
//     var num = parseInt(str); // Convert string to number

//     // Display value and type
//     document.getElementById("value").innerText = "Value: " + num;
//     document.getElementById("type").innerText = "Type: " + typeof num;
// }
// <!-- ================QUESTION 10================================== -->
// function convertToUppercase() {
//     var userInput = document.getElementById("userInput").value;
//     var uppercaseInput = userInput.toUpperCase();
//     document.getElementById("result").innerText = uppercaseInput;
// }
// <!-- ================QUESTION 12================================== -->

// var num = 35.36;
// var numAsString = num.toString(); // Convert num to a string
// var result = numAsString.replace(".", ""); // Remove the dot
// document.write(result); // Display "3536" in the browser

// // <!-- ================QUESTION 13================================== -->

// var username = prompt("Enter your username:");

// // Function to check if the username contains any special symbols
// function containsSpecialSymbol(username) {
//     var specialSymbols = ['@', '.', ',', '!'];
//     for (var i = 0; i < specialSymbols.length; i++) {
//         if (username.includes(specialSymbols[i])) {
//             return true;
//         }
//     }
//     return false;
// }

// // Check if the username contains special symbols
// if (containsSpecialSymbol(username)) {
//     alert("Please enter a valid username without special symbols like '@', '.', ',', '!'");
// } else {
//     alert("Username accepted: " + username);
// }

// // =========================QUESTION 14======================================

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(item, array) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() === item.toLowerCase()) {
//             return true;
//         }
//     }
//     return false;
// }

// var userInput = prompt("enter your bekrey atem");

// if (searchItem(userInput, A)) {
//     alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }
// // =========================QUESTION 15======================================
// function containsAlphabetsAndNumbers(str) {
//     return /[a-zA-Z]/.test(str) && /\d/.test(str);
// }

// function startsWithAlphabet(str) {
//     return /^[a-zA-Z]/.test(str);
// }

// function isValidPassword(password) {
//     return containsAlphabetsAndNumbers(password) && 
//            startsWithAlphabet(password) && 
//            password.length >= 6;
// }

// var password = prompt("Enter your password:");

// if (!isValidPassword(password)) {
//     alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
// } else {
//     alert("Password accepted.");
// }
// // // // ======================QUESTION 16===========================================
// var university = "University of Karachi";
// var array = university.split(" ");

// document.write("<p>bheriya university:</p>");
// document.write("<ul>");
// for (var i = 0; i < array.length; i++) {
//     document.write("<li>" + array[i] + "</li>");
// }
// document.write("</ul>");
// // // ======================QUESTION 17===========================================
// var userInput = prompt("Enter a string:");

// if (userInput !== null && userInput !== "") {

//     var lastCharacter = userInput.charAt(userInput.length - 1);

    
//     alert("The last character of the input string is: " + lastCharacter);
// } else {
     
// //     alert("Invalid input! Please enter a non-empty string.");
// }
// // // ======================QUESTION 18===========================================
// var sentence = "The quick brown fox jumps over the lazy dog";

// var lowerCaseSentence = sentence.toLowerCase();

// var wordToSearch = "the";

// var wordsArray = lowerCaseSentence.split(" ");

// var count = 0;

// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === wordToSearch) {
//         count++;
//     }
// }
// console.log("The word 'the' occurs " + count + " times in the given string.");
// // // ======================QUESTION 01===========================================

        // function displayValues() {
        //     // Get the input value from the user
        //     var inputNumber = parseInt(document.getElementById("numberInput").value);

        //     // Display the input number
        //     document.getElementById("number").innerHTML = "Number: " + inputNumber;

        //     // Calculate and display the round-off value
        //     var roundOffValue = Math.round(inputNumber);
        //     document.getElementById("roundOff").innerHTML = "Round-off Value: " + roundOffValue;

        //     // Calculate and display the floor value
        //     var floorValue = Math.floor(inputNumber);
        //     document.getElementById("floor").innerHTML = "Floor Value: " + floorValue;

        //     // Calculate and display the ceil value
        //     var ceilValue = Math.ceil(inputNumber);
        //     document.getElementById("ceil").innerHTML = "Ceil Value: " + ceilValue;
        // }
//         <!-- ====================== MATH METHODS ======================== -->
//   <!-- ======================= page number 2======================== -->
// // ============================QUESTION 02===========================================
// function displayValues() {
    
//     var input = parseFloat(document.getElementById("numberInput").value);

//     document.getElementById("number").innerText = "Number: " + input;
    
//     document.getElementById("roundValue").innerText = "Rounded Value: " + Math.round(input);
    
//     document.getElementById("floorValue").innerText = "Floor Value: " + Math.floor(input);
    
    
//     document.getElementById("ceilValue").innerText = "Ceiling Value: " + Math.ceil(input);
// }
// ============================QUESTION 03===========================================
// function absoluteValue(num) {
//     if (num < 0) {
//         return -num;
//     } else {
//         return num;
//     }
// }
// console.log("Absolute value of -4 is", absoluteValue(-4));
// console.log("Absolute value of 5 is", absoluteValue(5));
// ============================QUESTION 04===========================================
// function rollDice() {
//     var diceValue = Math.floor(Math.random() * 6) + 1;

//     document.getElementById('diceResult').textContent = 'You rolled a ' + diceValue + '.';
//   }
// // ============================QUESTION 05===========================================
// function coinToss() {
//     var randomNumber = Math.random();

//     var result = (randomNumber < 0.5) ? 'Heads' : 'Tails';

//     document.getElementById('result').innerText = 'Coin landed on: ' + result;
//   }
// // ============================QUESTION 06===========================================
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Function to display the random number in the browser
// function displayRandomNumber() {
//     var randomNumber = getRandomNumber(1, 100);
//     document.getElementById("randomNumberDisplay").innerHTML = "Random Number: " + randomNumber;
// }
// // ============================QUESTION 07===========================================
// Function to parse weight input and extract the weight value
// function parseWeight(input) {
//     // Regular expression to match the weight pattern
//     var regex = /^(\d+(\.\d+)?)\s*(kg|kilograms?)?$/i;
//     // Match the input against the regular expression
//     var match = input.match(regex);
//     if (match) {
//         // Extract the weight value
//         var weight = parseFloat(match[1]);
//         // If the weight unit is specified in kilograms, convert to kilograms
//         if (match[3] && (match[3].toLowerCase() === 'kg' || match[3].toLowerCase() === 'kilograms')) {
//             return weight;
//         } else {
//             // If no unit is specified, assume kilograms
//             return weight;
//         }
//     } else {
//         // If input doesn't match the pattern, return NaN (Not a Number)
//         return NaN;
//     }
// }

// function displayWeight() {
//     var userInput = prompt("Enter your weight:");
//     var weight = parseWeight(userInput);
//     if (!isNaN(weight)) {
//         document.write("Your weight is: " + weight + " kilograms");
//     } else {
//         document.write("Invalid input. Please enter your weight in kilograms.");
//     }
// }

// // Call the function to display weight
// displayWeight();
// // ============================QUESTION 08===========================================
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// const userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userInput === secretNumber) {
//     console.log("Congratulations! You guessed the secret number!");
// } else {
//     console.log("Sorry, the secret number was " + secretNumber + ". Try again!");
// }

// <!-- ====================== DATE METHODS ======================== -->
//   <!-- ======================= page number 3======================== -->
// // ============================QUESTION 02===========================================


// function displayDateTime() {
//     var now = new Date();
//     var datetimeElement = document.getElementById('datetime');
//     datetimeElement.innerHTML = 'Current Date and Time: ' + now.toLocaleString();
//   }
//   displayDateTime();
//   setInterval(displayDateTime, 1000);
