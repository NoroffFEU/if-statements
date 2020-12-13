// example 1
var isLoggedIn = false;

if (isLoggedIn === true) {
    console.log("Logged in");
} else {
    console.log("NOT Logged in");
}

// example 2
var total = 80;

if (total > 60) {
    console.log("This is expensive");
}

// example 3
var total = 60;

if (total >= 60) {
    console.log("This is expensive");
} else {
    console.log("Cheap");
}

// example 4
var answer = 8;
var guessedNumber = 8;

if (guessedNumber === answer) {
    console.log("Correct guess");
} else {
    console.log("Incorrect answer");
}

// example 5
var answer = 8;
var guessedNumber = 9;

if (guessedNumber !== answer) {
    console.log("Incorrect guess");
} else {
    console.log("Correct answer");
}

// example 6
var grade = 7;
var letterGrade;

if (grade === 10) {
    letterGrade = "A";
} else if (grade === 9) {
    letterGrade = "A";
} else if (grade === 8) {
    letterGrade = "B";
} else if (grade === 7) {
    letterGrade = "C";
} else {
    letterGrade = "Unkown";
}

console.log(letterGrade);
