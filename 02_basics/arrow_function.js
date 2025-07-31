const user = {
    username : "shikhar",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website.`);
        // console.log(this);
        
    }
}

// user.welcomeMessage();
user.username = "gaurav";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "shikhar";
//     console.log(this);  
// }

// function chai(){
//     let username = "shikhar";
//     console.log(this.username);  
// }

// const chai = function(){
//     let username = "shikhar";
//     console.log(this.username);
// }


// ++++++++++++++++++++++++++ ARROW FUNCTION DECLARATION ++++++++++++++++++++++++++++++++
// const chai = () => {
//     let username = "shikhar";
//     console.log(this);   
// }

// chai();


// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(5,4))


// const addTwo = (num1,num2) =>  num1 + num2;   // this declartion called emplicte return 

// console.log(addTwo(5,4))

const addTwo = (num1,num2) =>  (num1 + num2);
;

console.log(addTwo(5,4))