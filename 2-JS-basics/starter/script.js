/*********************************
**** Variables and data types ****
*********************************/

/*var firstName = 'Alejandro';
console.log(firstName);

var lastName = 'Zeno';
var age = 22;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Programmer';
console.log(job);*/

// This is a comment

/************************************************
**** Variables mutuations and type coercion *****
************************************************/


/*
var firstName = 'Alejandro';
var age = 22;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Programmer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutuation

age = 'Twenty two';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?')
console.log(firstName + ' ' + lastName);
*/


/************************
**** Basic Operators ****
************************/

/*var now, ageAlejandro, ageTashima;

now = 2020;
ageAlejandro = 22;
ageTashima = 23

yearAlejandro = now - ageAlejandro;
yearTashima = now - ageTashima;

console.log(ageAlejandro);

// Math Operator
console.log(now + 2);
console.log(now - 2);
console.log(now * 2);
console.log(now / 10);


// Logical Operators

var alejandroOlder = ageAlejandro > ageTashima;
console.log(alejandroOlder);


// Type of Operator

console.log(typeof alejandroOlder);
console.log(typeof ageAlejandro);
console.log(typeof 'Alejandro is yonger than Tashinma');
var x;
console.log(typeof x);*/



/****************************
**** Operator Precedence ****
*****************************/

/*var now = 2020;
var yearAlejandro = 1997;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearAlejandro >= fullAge;
console.log(isFullAge);

//Grouping
var ageAlejandro = now - yearAlejandro;
var ageTashima = 23;
var avarage = (ageAlejandro + ageTashima) / 2;
console.log(avarage);

//Multiple assignment

var x, y;

x = y = (3 + 5) * 4 - 6;
console.log(x, y);


//More Operators

x *= 2;
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);*/



/****************************
**** If/ else Statements ****
****************************/

/*
var firstName = 'Alejandro';
var civilStatus = 'single';

if (civilStatus === 'married')
    console.log(firstName + ' is married!');

else
    console.log(firstName + ' will hopefully marry soon ;)');


var isMarried = true;


if (civilStatus)
    console.log(firstName + ' is married!');
else
    console.log(firstName + ' will hopefully marry soon ;)');
*/


/**********************
**** Boolean Logic ****
**********************/


/*var firstName = 'Alejandro';
var age = 20;

if (age < 13)
    console.log(firstName + ' is a boy.');

else if (age >= 13 && age < 20)
    console.log(firstName + ' is a teenager.');

else if (age >= 20 && age < 30)
    console.log(firstName + ' is a young man.');

else
    console.log(firstName + ' is a man');*/



/**************************************************
**** The Ternary Operator and Switch Statement ****
**************************************************/

/*var firstName = 'Alejandro';
var age = 22;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' drink juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement

var job = 'programmer';

switch(job){
    case 'programmer':
        console.log(firstName + ' make programms.');
        break;
        
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    
    case 'designer':
        console.log(firstName + ' design beautiful websites.')
        break;
        
    default:
        console.log(firstName + ' does something else.')
}*/


/*******************************************************
**** Truthy and Falsy Values and Equality Operators ****
*******************************************************/

/* falsy values: undedined, null, 0, '', NoN
 Truthy values: Not falsy values

var height;

height = 23;

if(height || height === 0)
    console.log('Varaible is defined');
else
    console.log('Variable has NOT defined');
    

// Equality operators

if (height == '23')
    console.log('The == operator does type coercion!');*/
    
    
    
/******************
**** Functions ****
******************/
    
/*function calculateAge(birthYear){
    return 2020 - birthYear;
}
    

var ageAlejandro = calculateAge(1997);
var ageTashima = calculateAge(1997);
var ageJeremy = calculateAge(1997);

console.log(ageAlejandro, ageTashima, ageJeremy);

function yearsUntilRetirement(year, firstName){
    
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0)
        console.log(firstName + ' retires in ' + retirement + ' years.');
    
    else
        console.log(firstName + ' is already retired');
}

yearsUntilRetirement(1997, 'Alejandro');*/


/**********************************
**** Functions and Expressions ****
**********************************/

//Function Declaration
/*function whatDoYouDo(job, firstName){
    
}*/

//Function Expression
/*var whatDoYouDo = function (job, firstName){
   switch(job){
    case 'programmer':
        return firstName + ' make programms.';
        
    case 'driver':
        return firstName + ' drives an uber in Lisbon.';
        
    case 'designer':
        return firstName + ' design beautiful websites.';
        
    default:
        return firstName + ' does something else.';
   }
}

console.log(whatDoYouDo('programmer', 'Alejandro'))
    */
    
    
    
    
/***************
**** Arrays ****
***************/
    
/*// Initialize New Array    
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types


var alejandro = ['Alejadnro', 'Zeno', 1997, 'Programmer', false];
console.log(alejandro);

alejandro.push('Blue');
alejandro.unshift('Mr.');
alejandro.pop();
alejandro.pop();
alejandro.shift();
console.log(alejandro);


console.log(alejandro.indexOf(1997));

var isDesigner = alejandro.indexOf('designer') === -1 ? 'Alejandro is NOT a designer' : 'Alejandro IS a designer.'

console.log(isDesigner);*/



/*******************************
**** Objects and Properties ****
*******************************/

/*//Object Literal
var alejandro = {
    firstName: 'Alejandro',
    lastName: 'Zeno',
    birthYear: 1997,
    family: ['Gordo', 'Flaco', 'Papi', 'Mami'],
    job: 'Programmer',
    isMarried: false
};

console.log(alejandro.firstName);
console.log(alejandro['lastName']);

var x = 'birthYear';
console.log(alejandro[x]);


alejandro.job = 'designer';
alejandro['isMarried'] = true;
console.log(alejandro);

//New Object Sintax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);*/



/****************************
**** Objects and Methods ****
****************************/

 
/*
var alejandro = {
    firstName: 'Alejandro',
    lastName: 'Zeno',
    birthYear: 1997,
    family: ['Gordo', 'Flaco', 'Papi', 'Mami'],
    job: 'Programmer',
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2020 - this.birthYear;
    }
};

alejandro.calcAge();
console.log(alejandro);
*/


/*****************************
**** Loops and Iterations ****
*****************************/

// For Loop

/*for (var i = 0; i <= 9; i++){
    console.log(i);
}


// For Loop Array
var alejandro = ['Alejadnro', 'Zeno', 1997, 'Programmer', false];

for(var i = 0; i <alejandro.length; i++)
    console.log(alejandro[i]);


// While Loop
var i = 0;
while (i < alejandro.length){
    console.log(alejandro[i]);
    i++;
}*/

// Continue and Break Statements


var alejandro = ['Alejadnro', 'Zeno', 1997, 'Programmer', false];

/*
for(var i = 0; i <alejandro.length; i++){
    if(typeof alejandro[i] !== 'string') 
        continue;
    console.log(alejandro[i]);
}
*/

/*
for(var i = 0; i <alejandro.length; i++){
    if(typeof alejandro[i] !== 'string') 
        break;
    console.log(alejandro[i]);
}
*/


// Looping Backward

for (var i = alejandro.length - 1; i >= 0; i--)
    console.log(alejandro[i]);

























