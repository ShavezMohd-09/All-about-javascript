// operator in js

//(1)  Arthmetic operator

//declared two varible
let num1 = 6;
let num2 = 5;

//addtion
let sum = num1 + num2;
console.log("the value of sum after num1 + num2 is : ",sum);


// substract
let sub = num1 - num2;
console.log("the value of sub after num1 + num2 is : ",sub);

//multiply
let mul = num1 * num2;
console.log("the value of mul after num1 + num2 is : ",mul);

//division
let div = num2 / num2;
console.log("the value of div after num1 + num2 is : ",div);

//modules(remainder)
let mod = num1 % num2;
console.log("the value of mod after num1 + num2 is : ",mod);

//exp(power)
let exp = num1 ** num2;
console.log("the value of exp after num1 + num2 is : ",exp);


//(1) Assignment operator 

// (=, +=, -=, *=, /=, %=, **=)

let ass1 = 12
let ass2 = 2;
ass2 += 2 ;
console.log(ass2) 

//(3). comparisopn operator

//compare two value and return boolean
let com1 = 12;
let com2 = 12;
console.log("equal to :",com1 == com2);
console.log("Not equal to :",com1 != com2);
console.log("lessthan :",com1 < com2);
console.log("greaterthan :",com1 > com2);
console.log("lessthan equal to :",com1 <= com2);
console.log("greaterthan equal to :",com1 >= com2);


//logicall operator

let log1 = 12;
let log2 = 13;
let log3 = log1 < log2;
let log4 = log1 != log2;

// and logical operator when both condition true return true else false
console.log(log3 && log4)

// or logical operator when any one condition is true return true else false
console.log(log3 || log4);

// not logical operator convert true to false and false to true
console.log(!(log3 == log4));


//unary operator 
//work on one variable
let una = 23

//post increment
una++;
una--

//pre-increment
++una
--una
console.log(una);








