var one = "Uwielbiam JavaScript";
var two = "Jestem świetnym programistą";

var num1 = one.length;
var num2 = two.length;


function strings(one, two) {
    if (num1 > num2) {
        return one;
    } else if (num1 < num2) {
        return two;
    };
};



console.log(strings(one, two));