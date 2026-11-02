// let radiusArray = [1 , 2 , 3, 4, 5];

// // Calculate area , diameter and cirumference

// function area(arr){
//     let output = [];

//     for(let i = 0 ; i < arr.length ; i++){
//         let currArea = 3.14 * arr[i] * arr[i];
//         output.push(currArea);
//     }

//     return output;
// }

// function diameter(arr){
//      let output = [];

//     for(let i = 0 ; i < arr.length ; i++){
//         let currArea = 2 * arr[i];
//         output.push(currArea);
//     }

//     return output;
// }

// const arearOfClircles = area(radiusArray);
// const diameterOfCircles = diameter(radiusArray);

// console.log(radiusArray);
// console.log(arearOfClircles);
// console.log(diameterOfCircles);

function diameter(radius){
    return 2 * radius;
}

function area(radius){
    return 3.14 * radius * radius;
}

function operation(arr , cb){
    let output = [];

    for(let i = 0 ; i < arr.length ; i++){
        let result = cb(arr[i]);
        output.push(result);
    }

    return output;
}

// let radiusArray = [1 , 2 , 3, 4, 5];



// let areaOfCircles = operation(radiusArray , area);
// let diameterOfCircles = operation(radiusArray , diameter);

// console.log(radiusArray);
// console.log(areaOfCircles);
// console.log(diameterOfCircles);

// let areaOfCircles = radiusArray.map(function area(radius){
//     return 3.14 * radius * radius;
// });


// let evenNumbers = radiusArray.filter(function isEven(radius){
//     return radius % 2 === 0;
// });
// // console.log(areaOfCircles);
// console.log(evenNumbers);


let radiusArray = [1 , 2 , 3, 4, 5];

const sum = radiusArray.reduce(function(accumulator , currentValue){
    return accumulator + currentValue;
}, 100);

console.log(sum);
// function sum(arr){
//     let count = 0;

//     for(let i = 0 ; i < arr.length ; i++){
//         count += arr[i];
//     }

//     return count;
// }

// console.log(sum(radiusArray));