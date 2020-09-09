var num1 = 2;
var num2 = 5;


function kobe(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return null;
    };
}

console.log(kobe(num1, num2));

