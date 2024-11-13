// create a Object
// shop item object
const product = {
    fullName : "Pen",
    rating : "1-4",
    isDeal : true,
    offer : "30 off",
    price : 100

}
console.log(product);


//instagram profile object
const profile = {
    fullName : "@shavez_aryan",
    post : 20,
    followers : 200,
    follings : 300,
    isfollow : true,
    bio : " Being alone not a voring..."
}
console.log(profile);



//question if else statement

// find the no id odd or even
let num = 13;
if(num % 2 == 0){
    console.log("The given num is even")
}
else{
    console.log("The given num is odd")
}


//multiple statement check
let score = 23;
if(score >= 90 && score <= 100){
    console.log("Very good you passing grade A+");
}
else if(score >= 80 && score <= 89){
    console.log("Very good you passing grade A");
}
else if(score >= 70 && score <= 79){
    console.log("Very good you passing grade B");
}
else if(score >= 60 && score <= 69){
    console.log("Very good you passing grade C");
}
else if(score >= 50 && score <= 59){
    console.log("Very good you passing grade D");
}
else{
    console.log("You are failed try to next time");
}