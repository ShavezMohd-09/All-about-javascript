// loop in js

// for loop
console.log("for loop")

for(s = 0; s<=5; s++){
    console.log(s)
}

let sum = 0;
for(j = 0;j<=5; j++){
    sum = sum + j;
}
console.log("sum of num through for loop :",sum)

// while loop

console.log("while loop")

let i = 0;
while(i <= 5){
    i++;
    console.log(i)
}

let i_sum = 0;
let sum_while = 0;
while(i_sum <= 5){
    sum_while = sum_while + i_sum;
    i_sum++;
}
console.log("sum of num through while loop :",sum_while);

//
console.log("do-while loop")
z = 0;
do{
    z++;
    console.log(z)
}while(z <= 5);


//sum of num 
let p = 0;
q = 0;
do{
    q = q + p
    p++;
}while(p <= 5);
console.log("sum of num through do-while loop :",q)