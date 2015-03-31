var negabinaryApp = angular.module('negabinaryApp', []);

function decimalToNegabinary(decimal) {

    var negabinary = [];
    var base = -2;
    var remainder;

    while(decimal != 0) {

        remainder = decimal % base;
        decimal = Math.ceil(decimal / base);
        negabinary.push(remainder >= 0 ? remainder : -remainder);
    }

    return negabinary.reverse().join('');
}

console.log(decimalToNegabinary(18));