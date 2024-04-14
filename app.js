// ---------------- Chapter 31 - 34 ----------------------

// Q1

var currentDate = new Date();

var dateTimeString = currentDate.toLocaleString();

document.write("<h1>Current Date and Time:</h1>");
document.write("<p>" + dateTimeString + "</p>");

// Q2

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var currentDate = new Date();

var currentMonthIndex = currentDate.getMonth();

var currentMonth = months[currentMonthIndex];

alert("Current month: " + currentMonth);

// Q3

// Array of day names
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var currentDate = new Date();

var currentDayIndex = currentDate.getDay();

var firstThreeLetters = days[currentDayIndex];

alert("First three letters of the current day: " + firstThreeLetters);

// Q4

var currentDate = new Date();

var currentDayIndex = currentDate.getDay();

if (currentDayIndex === 6 || currentDayIndex === 0) {
  alert("It's Fun day!");
} else {
  alert("It's not Fun day.");
}

// Q5

var currentDate = new Date();

var currentDay = currentDate.getDate();

if (currentDay <= 15) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// Q6

var currentDate = new Date();

var millisecondsSince1970 = currentDate.getTime();

var minutesSinceMidnight = millisecondsSince1970 / (1000 * 60);

alert("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);

// Q7

var currentDate = new Date();

var currentHour = currentDate.getHours();

if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Q8

var currentDate = new Date(2021, 0, 1);

var laterDate = new Date(2020, 11, 0);

console.log("Last day of last month of 2020:", laterDate);

// Q9

var ramadanStartDate = new Date(2015, 5, 18);

var currentDate = new Date();

var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();

var daysSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert("Days since 1st Ramadan: " + daysSinceRamadan);

// Q10

var referenceDate = new Date("January 1, 1970");

var beginningOf2015 = new Date("January 1, 2015");

var secondsElapsed =
  (beginningOf2015.getTime() - referenceDate.getTime()) / 1000;

document.write("<h1>Seconds elapsed since the reference date:</h1>");
document.write("<p>" + secondsElapsed + " seconds</p>");

// Q11

var currentDate = new Date();

var currentHours = currentDate.getHours();

currentDate.setHours(currentHours + 1);

document.write("<h1>Updated Date Object:</h1>");
document.write("<p>" + currentDate + "</p>");

// Q12

var currentDate = new Date();

var currentYear = currentDate.getFullYear();

currentDate.setFullYear(currentYear - 100);

alert("Date reset to 100 years back:\n" + currentDate);

//  Q13

var age = prompt("Please enter your age:");

var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

document.write("<h1>Your Birth Year:</h1>");
document.write("<p>" + birthYear + "</p>");

// Q14

var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));

var chargesPerUnit = 10.5; // Example charges per unit
var latePaymentSurcharge = 50; // Example late payment surcharge

var netAmountPayable = numberOfUnits * chargesPerUnit;

var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

document.write("<h1>K-Electric Bill</h1>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write(
  "<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>"
);
document.write(
  "<p><strong>Charges per Unit:</strong> $" + chargesPerUnit.toFixed(2) + "</p>"
);
document.write(
  "<p><strong>Net Amount Payable (Within Due Date):</strong> $" +
    netAmountPayable +
    "</p>"
);
document.write(
  "<p><strong>Late Payment Surcharge:</strong> $" +
    latePaymentSurcharge.toFixed(2) +
    "</p>"
);
document.write(
  "<p><strong>Gross Amount Payable (After Due Date):</strong> $" +
    grossAmountPayable +
    "</p>"
);


// ---------------- Chapter 35 - 38 ----------------------

// Q1 

function displayCurrentDateTime() {
    var currentDate = new Date();

    var currentDateTimeString = currentDate.toString();

    document.write("<h1>Current Date & Time:</h1>");
    document.write("<p>" + currentDateTimeString + "</p>");
}

displayCurrentDateTime();

// Q2 

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;

    alert("Hello, " + fullName + "!");
}

greetUser("John", "Doe");


// Q3 

function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter valid numbers.";
    }

    var sum = num1 + num2;

    return sum;
}

var result = addNumbers();
alert("The sum of the two numbers is: " + result);

// Q4 

function calculate(num1, num2, operator) {
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return "Invalid operator!";
    }

    return result;
}

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /):");

var result = calculate(num1, num2, operator);
document.write("<h1>Result:</h1>");
document.write("<p>" + num1 + " " + operator + " " + num2 + " = " + result + "</p>");

// Q5 

function square(number) {
    return number * number;
}

var inputNumber = parseFloat(prompt("Enter a number:"));
var squaredNumber = square(inputNumber);
alert("The square of " + inputNumber + " is: " + squaredNumber);


// Q6 

function factorial(number) {
    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
}

var inputNumber = parseInt(prompt("Enter a number to calculate its factorial:"));
var result = factorial(inputNumber);
alert("The factorial of " + inputNumber + " is: " + result);

// Q7 

function count(start, end) {
    var counting = "";
    
    for (var i = start; i <= end; i++) {
        counting += i + ", ";
    }

    counting = counting.slice(0, -2);

    document.write("<h1>Counting:</h1>");
    document.write("<p>" + counting + "</p>");
}

var startNumber = parseInt(prompt("Enter the start number:"));
var endNumber = parseInt(prompt("Enter the end number:"));

count(startNumber, endNumber);


// Q8 

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}

var baseInput = parseFloat(prompt("Enter the base of the right-angle triangle:"));
var perpendicularInput = parseFloat(prompt("Enter the perpendicular of the right-angle triangle:"));

var result = calculateHypotenuse(baseInput, perpendicularInput);
alert("The hypotenuse of the right-angle triangle is: " + result);


// Q9 

function calculateAreaByVariable(width, height) {
    return width * height;
}

var width = 5;
var height = 7;
var area2 = calculateAreaByVariable(width, height); // Passing arguments as variables
console.log("Area calculated using arguments as variables:", area2);


// Q10 


function isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    return str === str.split('').reverse().join('');
}

var userInput = prompt("Enter a string to check if it's a palindrome:");
var result = isPalindrome(userInput);

if (result) {
    alert("'" + userInput + "' is a palindrome.");
} else {
    alert("'" + userInput + "' is not a palindrome.");
}

// Q11 

function capitalizeFirstLetter(str) {
    var words = str.split(" ");
    
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

var inputString = "the quick brown fox";
var outputString = capitalizeFirstLetter(inputString);
console.log("Original String:", inputString);
console.log("Converted String:", outputString);


// Q12 

function findLongestWord(str) {
    var words = str.split(" ");

    var longestWord = "";
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        // If the current word is longer than the longest word found so far
        if (words[i].length > maxLength) {
            // Update the longest word and its length
            longestWord = words[i];
            maxLength = words[i].length;
        }
    }

    return longestWord;
}

var inputString = "Web Development Tutorial";
var longestWord = findLongestWord(inputString);
console.log("Longest Word:", longestWord);

// Q13 

function countOccurrences(str, letter) {
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    var count = 0;

    for (var i = 0; i < str.length; i++) {
        // If the current character matches the specified letter, increment the count
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

var inputString = "JSResourceS.com";
var inputLetter = "o";
var occurrenceCount = countOccurrences(inputString, inputLetter);
console.log("Number of occurrences of '" + inputLetter + "' in '" + inputString + "':", occurrenceCount);

// Q14 

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    
    console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    
    console.log("The area is " + area.toFixed(2));
}

var radius = 5;
calcCircumference(radius); // Output: The circumference is 31.42
calcArea(radius); // Output: The area is 78.54


// ---------------- Chapter 38 - 42 ----------------------

// Q1 

 function power(a, b) {
    var result = Math.pow(a, b);
    
    return result;
}

var base = 2;
var exponent = 3;
var result = power(base, exponent);
console.log(base + " raised to the power of " + exponent + " is: " + result);


// Q2 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
}

var inputYear = parseInt(prompt("Enter a year to check if it's a leap year:"));
if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
} else {
    console.log(inputYear + " is not a leap year.");
}

// Q3 


function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c);
    
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    
    return area;
}

var sideA = parseFloat(prompt("Enter the length of side A:"));
var sideB = parseFloat(prompt("Enter the length of side B:"));
var sideC = parseFloat(prompt("Enter the length of side C:"));

var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
console.log("Area of the triangle:", triangleArea);

// Q4 

 function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
}

function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalSubjects = 3;
    return (totalMarks / (totalSubjects * 100)) * 100; // Percentage calculation
}

function mainFunction() {
    var marksSubject1 = parseFloat(prompt("Enter marks for subject 1:"));
    var marksSubject2 = parseFloat(prompt("Enter marks for subject 2:"));
    var marksSubject3 = parseFloat(prompt("Enter marks for subject 3:"));

    var averageMarks = calculateAverage(marksSubject1, marksSubject2, marksSubject3);
    var percentageMarks = calculatePercentage(marksSubject1, marksSubject2, marksSubject3);

    console.log("Average marks:", averageMarks.toFixed(2));
    console.log("Percentage:", percentageMarks.toFixed(2) + "%");
}

mainFunction();


// Q5 

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }

    return -1;
}

var inputString = "Hello, World!";
var characterToFind = "o";
var index = customIndexOf(inputString, characterToFind);
console.log("Index of '" + characterToFind + "' in '" + inputString + "':", index); 

// Q6 

 function deleteVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
    }

    return result;
}

var inputSentence = prompt("Enter a sentence (not more than 25 characters):");
if (inputSentence.length > 25) {
    console.log("Error: Sentence should not be more than 25 characters.");
} else {
    var result = deleteVowels(inputSentence);
    console.log("Sentence without vowels:", result);
}

// Q7 

function countSuccessiveVowels(text) {
    text = text.toLowerCase();

    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text[i];
        var nextChar = text[i + 1];

        switch (currentChar) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (nextChar) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++; // Increment the count if both characters are vowels
                        break;
                }
                break;
        }
    }

    return count;
}

var inputText = "Pleases read this application and give me gratuity";
var occurrences = countSuccessiveVowels(inputText);
console.log("Number of occurrences of any two vowels in succession:", occurrences);

// Q8 

    function convertToMeters(kilometers) {
        return kilometers * 1000;
    }

    function convertToFeet(kilometers) {
        return kilometers * 3280.84;
    }

    function convertToInches(kilometers) {
        return kilometers * 39370.1;
    }

    function convertToCentimeters(kilometers) {
        return kilometers * 100000;
    }

    function mainFunction() {
        var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities (in kilometers):"));

        var distanceInMeters = convertToMeters(distanceInKilometers);
        var distanceInFeet = convertToFeet(distanceInKilometers);
        var distanceInInches = convertToInches(distanceInKilometers);
        var distanceInCentimeters = convertToCentimeters(distanceInKilometers);

        console.log("Distance in meters:", distanceInMeters.toFixed(2));
        console.log("Distance in feet:", distanceInFeet.toFixed(2));
        console.log("Distance in inches:", distanceInInches.toFixed(2));
        console.log("Distance in centimeters:", distanceInCentimeters.toFixed(2));
    }

    mainFunction();


// Q9 

 function calculateOvertimePay(hoursWorked, hourlyRate) {
    var standardHours = 40; // Standard working hours per week
    var overtimeRate = hourlyRate * 1.5; // Overtime rate per hour
    
    if (hoursWorked > standardHours) {
        var overtimeHours = hoursWorked - standardHours; // Calculate overtime hours
        var overtimePay = overtimeHours * overtimeRate; // Calculate overtime pay
        return overtimePay;
    } else {
        return 0; // No overtime pay if the employee didn't work overtime
    }
}

var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
var hourlyRate = 12.00; // Hourly rate for regular hours
var overtimePay = calculateOvertimePay(hoursWorked, hourlyRate);
console.log("Overtime pay:", overtimePay.toFixed(2));


// Q10 

 function calculateCurrencyNotes(amountInHundreds) {
    var notes100 = Math.floor(amountInHundreds); // Number of 100 rupee notes
    var amountRemaining = amountInHundreds - notes100; // Remaining amount after taking out 100 rupee notes
    var notes50 = Math.floor(amountRemaining * 2); // Number of 50 rupee notes (1 hundred = 2 fifties)
    amountRemaining -= notes50 / 2; // Remaining amount after taking out 50 rupee notes
    var notes10 = Math.floor(amountRemaining * 10); // Number of 10 rupee notes (1 hundred = 10 tens)

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };
}

var amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
var notes = calculateCurrencyNotes(amountInHundreds);
console.log("Number of 100 rupee notes:", notes.notes100);
console.log("Number of 50 rupee notes:", notes.notes50);
console.log("Number of 10 rupee notes:", notes.notes10);

