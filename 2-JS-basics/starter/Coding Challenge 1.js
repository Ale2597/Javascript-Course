/****************************
**** Coding Challenge #1 ****
****************************/


/*
Alejandro and Tashima are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height^2 = mass/ (height * height).
(mass in kg and height in meter).

1. Store Alejandro's and Tashima's mass and height in variables.
2. Calculate both their BMI's.
3. Create a boolean variable containing information about whether Mark has a higher BMI than Tashima.
4. Print a string to the console containing the variable from step 3. (Somethig like "Is Alejandro's BMI
higher than Tashima's? True").
*/

var alejandroMass = 68.49;
var alejandroHeight = 1.78;

var tashimaMass = 54.43;
var tashimaHeight = 1.63;

var alejandroBMI;
var tashimaBMI;

alejandroBMI = alejandroMass/ Math.pow(alejandroHeight, 2);
tashimaBMI = tashimaMass/ Math.pow(tashimaHeight, 2);



if(alejandroBMI > tashimaBMI){
    var biggerBMI = "Alejandro's BMI is greater than Tashima's.";
    console.log(biggerBMI);
}
else{
    var lowerBMI = "Alejandro's BMI is lower than Tashima's.";
    console.log(lowerBMI); 
}

console.log(alejandroBMI);