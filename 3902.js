/**
Реализовать функцию sum()
sum(1);       // => 1
sum(1)(2);    // => 3
sum(1)(2)(3); // => 6*/

function sum(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

alert( sum(1) );
alert( sum(1)(2) );
alert( sum(1)(2)(3) );
