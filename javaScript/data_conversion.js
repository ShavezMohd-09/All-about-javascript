//Data conversion

//number to string
let num = 12;
num = "mohd shavez"
console.log(num)


let str_to_num = "23abc" //string convert into number
console.log(str_to_num, typeof  str_to_num)
let Invaluenum = Number( str_to_num)
console.log(typeof Invaluenum)  // output yes number
console.log(Invaluenum) // NaN (Not a number)


let num_to_str = 12  //yes it is number
console.log(num_to_str)
//now convert
let Invaluestr = String(num_to_str)
console.log(typeof Invaluestr)
console.log(Invaluestr)



//num to boolean
let bool = 1
let isboolean = Boolean(bool)
console.log(isboolean) //dispaly
console.log(typeof isboolean) // check datatype