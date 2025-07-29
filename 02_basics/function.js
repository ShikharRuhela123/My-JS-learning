function welcome() {
    let greeting = "Welcome sir for coming in this scope . i hope u enjoy our services."
    let name = "shikhar";
    let wel = `Hello ${greeting}, Thank you ${name}`;
    console.log(wel);
    
}

// console.log(welcome());

function addTwoNumbers(number1,number2) {
   // let result = number1 + number2;
    // return result; 
    return number1 + number2;
}

// console.log(addTwoNumbers(3,7));
// console.log(addTwoNumbers(3,"s"));
// console.log(addTwoNumbers(3,null));

const result1 = addTwoNumbers(3,7);
// console.log("RESULT:",result1);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in.`;
}

// loginUserMessage("shikhar");
// console.log(loginUserMessage("Shikhar"));
//  console.log(loginUserMessage(" "));
// console.log(loginUserMessage());

 function loginUserMessage(username = "virat"){
    if(!username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in.`;
}
// console.log(loginUserMessage());

function calculateCartPrice(num1){
    return num1;
}
// console.log(calculateCartPrice(5));  // here are only single value in cart , but problem create if user enter multiple value
// console.log(calculateCartPrice(200, 500, 900, 999)); // here create problem only single value is print .
// solve this problem use rest operator(...)

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 500, 900, 999)); 

function calculate(val1, val2, val3, ...num1){
    return num1;
}
console.log(calculate(200,400,5000,1000));






