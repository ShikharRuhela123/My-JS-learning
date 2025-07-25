const myArr = [0,1,2,3,4,5];
const myHeroes = ["shaktiman","naagraj"];
 const myArr1 = new Array(1,2,3,4,5);
 //console.log(myArr1[0]);

 // Array Methods
  myArr.push(6);
  //console.log(myArr);

   myArr.pop();
  //console.log(myArr);
   //myArr.pop();
  //console.log(myArr);

  myArr.unshift(9);
  //console.log(myArr);
  //myArr.unshift(10);
  //console.log(myArr);
   
  myArr.shift();
  //console.log(myArr);
 
  //console.log(myArr.includes(10));
  //console.log(myArr.indexOf(9));
  // console.log(myArr.indexOf(2));
  
   const newArr = myArr.join("+");   // join method convert the array into the string on the bacis of your need
   // console.log(myArr);
   // console.log(newArr);
   // console.log(typeof newArr);
   // console.log(typeof myArr);

   const marvel_Heroes = ["spiderman","iron man","thor","hulk"];
   const dc_Heroes = ["superman","batman","saktimaan"];
   // marvel_Heroes.push(dc_Heroes);
  // console.log(marvel_Heroes);
  // console.log(marvel_Heroes[4][2]);

  const allHeroes = marvel_Heroes.concat(dc_Heroes);
  // console.log(allHeroes);

  const all_new_heroes = [...marvel_Heroes,...dc_Heroes]; // second method for array concatinating called spread method
  // ... called spread operator in above all_new_heroes declartion
  // console.log(all_new_heroes);

  const another_array = [1,2,3, [4,5,6],7, [6,7, [4,5] ]];
   // console.log(another_array);
  const real_another_array = another_array.flat(1);
   // console.log(real_another_array);

  // console.log(Array.isArray("hitesh"));
  // console.log(Array.from("hitesh")); // from method is used to convert all values in array
  //  console.log(Array);

  // console.log(Array.from({name : "hitesh"}));  // here from method not convert object in a array,

  let score1 = 100;
  let score2 = 200;
  let score3 = 300;
  const arr = Array.of(score1,score2,score3); // of method convert all values, variable in a single aray.
 //  console.log(arr);
  // console.log(typeof arr);

  // slice , splice
  
  console.log("A ", myArr);

  const myn1 = myArr.slice(1,3);  // slice method orignal array ko change nhi krta hai, dono method given range tk output dete hain

  console.log(myn1);
  console.log("B ", myArr);

  const myn2 = myArr.splice(1,3);  // splice method orignal array ko change kr deta hai
  console.log(myn2);
  console.log("C ", myArr);
  
  
  
  
  


  
  
  
  
  


  
  
   
   
   
   
   
   
  
  
  
  