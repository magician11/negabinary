var negabinaryApp = angular.module('negabinaryApp', []);

negabinaryApp.filter('negabinary', function() {

    return function (decimal) {

        if (isNaN(decimal)) return "not a number";
        
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
});