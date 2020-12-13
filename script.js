// example 1
var isLoggedIn = false;

// if isLoggedIn is equal to true, log "Logged in"
if (isLoggedIn === true) {
    console.log("Logged in");
} else {
    // if isLoggedIn is not equal to true, log "NOT Logged in"
    console.log("NOT Logged in");
}

// example 2
var total = 80;

// if total is greater than 60, log "This is expensive"
if (total > 60) {
    console.log("This is expensive");
}

// example 3
var total = 60;

// if total is greater than or equal to 60, log "This is expensive"
if (total >= 60) {
    console.log("This is expensive");
} else {
    // if total is less than 60, log "Cheap"
    console.log("Cheap");
}

// example 4
var answer = 8;
var guessedNumber = 8;


// if the value of answer is equal to the value of guessedNumber, log "Correct guess"
if (guessedNumber === answer) {
    console.log("Correct guess");
} else {
    // if the value of answer is not equal to the value of guessedNumber, log "Incorrect answer"
    console.log("Incorrect answer");
}

// example 5
var answer = 8;
var guessedNumber = 9;

// if the value of guessedNumber is not equal to answer, log "Incorrect guess"
if (guessedNumber !== answer) {
    console.log("Incorrect guess");
} else {
    // if the value of guessedNumber is equal to answer, log "Correct answer"
    console.log("Correct answer");
}

// example 6
var grade = 7;
var letterGrade;

if (grade === 10) {
    // if grade is equal to 10 assign "A" to letterGrade
    letterGrade = "A";
} else if (grade === 9) {
    // if grade is equal to 9 assign "A" to letterGrade
    letterGrade = "A";
} else if (grade === 8) {
    // if grade is equal to 8 assign "B" to letterGrade
    letterGrade = "B";
} else if (grade === 7) {
    // if grade is equal to 7 assign "C" to letterGrade
    letterGrade = "C";
} else {
    // if grade is not equal to 10, 9, 8 or 7, assign "Unkown" to letterGrade
    letterGrade = "Unkown";
}

console.log(letterGrade);
