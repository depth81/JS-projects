/*** HOMEWORK #10 - DESTRUCTURING ***/

/**1. What is the differences between destructuring an object and destructuring an array?

The main difference between array and object destructing is the change in literal because in object destructuring it is used the object literal, 
which is the curly braces. This literal has to be on the left-hand side of the assignment operator */

/** 2. When would each be appropriate too use object destructuring or array destructuring in es6?

You make use of object literal when destructuring objects, and array literal when destructuring arrays. 
For arrays, you make use of the value’s position and for objects, you make use of the value’s key.

 */ 

//ARRAYS
let musicians = ["Ihsahn", "Oscar", "Diego", "Paulo", "Harold"];
let [otherMusicians, ...Wormkult] = musicians;

console.log(musicians);
console.log(Wormkult);


//OBJECTS
singleMusician = {
    name: "Paulo Enrique",
    email: "petv1981@gmail.com",
    location: "Medellin, Colombia",
    gender: "Male",
    activity: {
        currentBand: "Wormkult",
        formerBand: "Millennium",
        instrument:  "ElectricGuitar"
    }
}

const { name, email, activity: { currentBand, instrument } } = singleMusician;
console.log(name);
console.log(email);
console.log(currentBand);
console.log(instrument);


//ARRAYS & OBJECTS
let person = {name: "Paulo Enrique", country: "Colombia", friends: ["JuanF", "Oscar"]};
let {name: myName, friends: myFriends} = person;

console.log(myName);
console.log(myFriends);
console.log(myFriends[0]);




