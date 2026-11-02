// // let a = 10;


// // function add(x) {
// //    return x;
// // }

// // console.log(add(a));

// let add = function(x, y){
//     return x + y;
// }
// // console.log(add(5, 10));

// function subtract(x, y){
//     return x - y;
// }

function operation(fn){
    const result = fn(30, 10);
    return function() {
        console.log("This is the result of the operation: " + result);
        return true;
    }
}

// // operation(add);

// // console.log(subtract(30, 10));
// // console.log(operation(add));

// let returnedFunction = operation(add);

// // console.log(subtract);
// console.log(returnedFunction());

let count = 0;

console.log("Before count:", count);

function increment(count) {
    count++;
    return count;
}

console.log(increment(count));

console.log("After count:", count);

