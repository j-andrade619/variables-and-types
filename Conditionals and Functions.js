/*
 * Conditionals, Functions and Scope
 */

 //Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >=5;

//Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;
console.log(equals);

let storeA = 1.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;

function compareStorePrices (storeA, storeB) {
   let storeAisLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
compareStorePrices(100,45);
compareStorePrices( 7,10);

function squareNum (number) {
    let squared = number * number;
    let sub = number - 19;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

/*
 *Scope
 */

let x = 10;

function addNumbers (n,m,x) {
    console.log(x);
    let b;
    if (1 ===1) {
        let b = 8;
    }
    console.log(x)
    return n + m;
}

addNumbers(2,3, 8)
console.log(x)


/*
 *
 */

let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
   // console.log("i is equal to: "+ i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to: ' +j);
    }
}

////

while (x <10) {
    console.log('ran');
    x = x + 1;
}
