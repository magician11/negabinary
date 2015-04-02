var negabinaryApp = angular.module('negabinaryApp', ['ngSanitize']);

negabinaryApp.filter('negabinary', function() {

    return function (decimal) {

        if (isNaN(decimal)) return "not a number";

        var origDecimal = decimal;
        var negabinary = [];
        var base = -2;
        var negabinaryCalculation = [];
        var remainder;

        negabinaryCalculation.push('<h4>Calculations</h4><table class="table negabinary-table"><tr><th>Decimal</th><th>Base</th><th>Result</th><th>Remainder</th></tr>');

        while(decimal != 0) {

            negabinaryCalculation.push('<tr><td>' + decimal + '</td><td>' + base + '</td><td>');

            remainder = decimal % base;
            decimal = Math.ceil(decimal / base);
            negabinaryCalculation.push(decimal + '</td><td>');
            remainder = remainder >= 0 ? remainder : -remainder;
            negabinary.push(remainder);
            negabinaryCalculation.push(remainder + '</td></tr>');
        }

        negabinaryCalculation.push('</table>');

        negabinaryCalculation.unshift('<h2>' + origDecimal + ' (decimal) = ' + negabinary.reverse().join('') + ' (negabinary)</h2>');

        return negabinaryCalculation.join('');
    }
});