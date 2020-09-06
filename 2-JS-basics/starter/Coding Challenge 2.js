/****************************
**** Coding Challenge #2 ****
****************************/

var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3;

console.log('John Average: ' + johnAverage);
console.log('Mike Average: ' + mikeAverage);
console.log('Mary Average: ' + maryAverage);

if (johnAverage > mikeAverage &&  johnAverage > maryAverage)
    console.log ('John is the winner. Average: ' + johnAverage);

else if (mikeAverage > johnAverage &&  mikeAverage > maryAverage)
    console.log ('Mike is the winner. Average: ' + mikeAverage);

else if (maryAverage > johnAverage &&  maryAverage > mikeAverage)
    console.log ('Mary is the winner. Average: ' + maryAverage);

else 
    console.log ('There is a draw.');