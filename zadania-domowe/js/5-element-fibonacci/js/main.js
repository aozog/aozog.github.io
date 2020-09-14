
// const fib = n => {
//     if (n === 0 || n === 1) {
//         return n;
//     } else if (n < 0) {
//         return null;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }


// console.log(fib(9))



const fib = n => {
    if (n === 0 || n === 1) {
        return n;
    } else if (n < 0) {
        return null;
    } else {
        let fFirst = 0;
        let fSecond = 1;
        for (let i = 2; i <= n; i++) {
           let m = fFirst + fSecond;
           fFirst = fSecond;
           fSecond = m;
        }
        return fSecond;
    }
}


console.log(fib(10))



