// let a = 10;
// const b= 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// {} this is scope
// var c= 300;
let a = 300;
if(true){
let a = 10;
const b= 20;
// console.log("inner value: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);  // here create a problem yeh c variable ish scope se bhar aana hi nhi chaiye tha.

function one(){
    const username = "shikhar";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
