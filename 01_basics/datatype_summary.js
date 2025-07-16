
// primitive datatype.....
 const score = 100;
 const scoreValue = 100.3;
 const isLoggedIn = false;
 const outsideTemp = null;
 let userEmail;
  
 // symbol basic idea
 const id =Symbol('123');      // demo of symbol.
 const anotherId = Symbol('123');
// console.log(id === anotherId);

 //const bigNumber = 454657889321456496123456n;  // at last n is used for converting in bigInt.
 // onsole.log(typeof bigNumber);

 // Non primitive datatype or reference type

 // array, object, function
 
 const myArr = ["Mango","Apple","papaya"];   // array declartion

 let myObj = {                                          // Object declartion
    name : "shikhar ruhela",
    age : 22
 }

 const myFun = function(){                                   // Function declartion
    console.log("Hello World");
 }
 

 console.log(typeof myArr);
 console.log(typeof myFun);
  console.log(typeof myObj);
   console.log(typeof anotherId);
    console.log(typeof scoreValue);

    
 
 // https://262.ecma-international.org/5.1/#sec-11.4.3
 
