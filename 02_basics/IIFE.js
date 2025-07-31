// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log("shikhar");
// }
// chai();

(function chai(){
    // this is named IIFE
    console.log("DB connected");
})();

// SYNTAX IS :  ( ) ( )   first parenthesis for function defination and second is for execution

(function aurcode(){
    console.log("DB connected");
})();

((username) => {
    // this is without name IIFE
    console.log(`DB connected Two, ${username}`);
})("shikhar")