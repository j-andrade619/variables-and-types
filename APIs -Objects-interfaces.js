/*
 *
 */

// Objects, Interfaces, and APIs

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function(typeOfBark){
        console.log("Bark!");
    },
};

dog.bark();
console.log(dog.name);

//Applications Programming Interfaces
// makes it wasy to function with other people.

//***/
//passing by reference the original code will be changed.

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}
let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);
