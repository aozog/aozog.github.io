
let array = [0, 1, 2, 3, 4, 5];




const squareSum = arr => {
    let sum = 0;
    

    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2);
        
    }

    return sum;
    
}

console.log(squareSum(array))






