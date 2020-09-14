
let array = [1, 2, 3, 4, 5, 6];


//     sum += array[i]; /* sum = sum + array[i] */


const sumAndMultiply = arr => {
    let sum = 0;
    let multiply = 1;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        multiply *= arr[i];
    }

    console.log(sum, multiply);
    // return [sum, multiply]
}

sumAndMultiply(array)






