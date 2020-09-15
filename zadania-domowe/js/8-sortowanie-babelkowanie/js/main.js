let array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0 * 10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] > arr[i + 1]) {
                let change = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = change;
            } 
        }
    }
    return arr;
}


console.log(bubbleSort(array));


// function compareNumbers(a, b) {
//     return a - b
//  }
// console.log(array.sort(compareNumbers));