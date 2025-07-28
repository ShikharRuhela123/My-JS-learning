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
    if(!username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in.`
}

// loginUserMessage("shikhar");
// console.log(loginUserMessage("Shikhar"));
// console.log(loginUserMessage(" "));
// console.log(loginUserMessage());

console.log(loginUserMessage("Shikhar"));










