// object literals

const mySym = Symbol("key1");

 const jsuser = {
    name : "shikhar",
    "full name" : "shikhar ruhela",  // how to access this in dot method thats why we use second method
    age : 18,
    location : "Aligarh",
    email : "shikhar@google.com",
    [mySym] : "myKey1",
    isLoogedIn : false,
    lastLoginDays : ["monday" , "saturady"]
 }
  
//  console.log(jsuser.age);
 
//  console.log(jsuser["isLoogedIn"]); // second method for access object element..
//  console.log(jsuser["full name"]);


 const jsuser1 = {
     name : "shikhar",
    "full name" : "shikhar ruhela",
     age : 18,
    location : "Aligarh"
 }

 // console.log(typeof jsuser1[mySym]);
 
 jsuser.email = "shikhar@chatgpt.com";
 // console.log(jsuser);
 //Object.freeze(jsuser);
 jsuser.email = "shikharruhela@microsoft.com";
// console.log(jsuser);

// Function in object

jsuser.greeting = function() {
  console.log("Hello js user");
}

 console.log(jsuser.greeting);
 console.log(jsuser.greeting());

jsuser.greetingTwo = function() {
   console.log(`Hello jsuser, ${this.name}`);
}

 console.log(jsuser.greetingTwo);
console.log(jsuser.greetingTwo());



 
 

 