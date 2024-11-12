// Data type in js
console.log("primitive datatype");
// number, string, boolean, undefined, null, Bigint... 


//number datatype 
let num = 123;
console.log(num);
console.log(typeof num)

//string datatype 
let str = "this is string datatype";
console.log(str);
console.log(typeof str)

//boolean datatype 
let bool = true;
console.log(bool);
console.log(typeof bool)

//undefined datatype 
let data_undef;
console.log(data_undef);
console.log(typeof data_undef)


//null datatype 
let null_data = null;
console.log(null_data)
console.log(typeof null_data) //its null but return object..

//BigInt datatype
let num_bigint = BigInt(123);
console.log(num_bigint)
console.log(typeof num_bigint)


console.log("Non primitive data")
//  it is a colllection of value..

// array , object

// create a array
let my_array =["shavez","aryan", 123 , true, null];
console.log(my_array)

// length of a array
console.log(my_array.length);

//f ind datatype of array
console.log(typeof my_array)


// object. (key : value)
const studentData = {
    fullname : "md shavez",
    age : 22,
    course : "MCA",
    isPass : true
}
studentData["fullname"] = "shavez aryan"; // updated
console.log(studentData);
console.log(typeof studentData);
console.log(studentData.fullname); // access key name in object
console.log(studentData["fullname"]);  // access key name in object


