/****************************
**** Coding Challenge #4 ****
****************************/

var alejandro = {
    firstName: 'Alejandro',
    lastName: 'Zeno',
    mass: 68.49,
    height: 1.78,
    calcBMI: function(){
        this.BMI = this.mass/ Math.pow(this.height, 2);
    }
};

var tashima = {
    firstName: 'Tashima',
    lastName: 'Colón',
    mass: 54.43,
    height: 1.63,
    calcBMI: function(){
        this.BMI = this.mass/ Math.pow(this.height, 2);
    }
};

alejandro.calcBMI();
tashima.calcBMI();
console.log(alejandro);
console.log(tashima);

if(alejandro.BMI > tashima.BMI){
    var biggerBMI = "Alejandro's BMI is greater than Tashima's.";
    console.log(biggerBMI);
}
else{
    var lowerBMI = "Alejandro's BMI is lower than Tashima's.";
    console.log(lowerBMI); 
}