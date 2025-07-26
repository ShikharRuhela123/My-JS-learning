// singleton object declation

 // const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "1234abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstname : "shikhar",
            lastname : "ruhela"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userFullname.lastname);

// object combining concept 

const obj1 = { 1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

// const obj3 = { obj1 , obj2};
// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);




