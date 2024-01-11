var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second.");
}



var age = 11;
var minimumAge = "13";

var convertMinimumAge = parseFloat(minimumAge);

if (age >= convertMinimumAge) {   //age >= parseInt(minimumAge)
    console.log("Minimum age passed.")
} else {
    console.log("Minimum age not passed.");
}




var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
    console.log("Income passed");
} else {
    console.log("Income not passed");
}




var color = "blue";

if (color === "orange") {
    console.log("This color is rubbish");
}




var invoicePaid = false;

if (invoicePaid !== true) {         //=== false
    console.log("Not paid");
}




var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You loose again");
}




var dayOfTheWeek = 2;
var dayName;

switch (dayOfTheWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2: 
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5: 
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Unknown";
}

console.log(dayName);