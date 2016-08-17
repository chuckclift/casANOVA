var assert = require('assert'); 
var calc = require("./calculate.js");

exports.teststd_dev = function(test) {
    var correct = 3.02765; 
    var arr = [1,2,3,4,5,6,7,8,9,10]; 
    var result = parseFloat(calc.std_dev(arr).toFixed(5)); 
    test.equal(result, correct);

    var correct = 3.61939; 
    var arr = [9, 2, 5, 4, 12, 7]; 
    var result = parseFloat(calc.std_dev(arr).toFixed(5)); 
    test.equal(result, correct);

    test.done();
};

exports.grand_mean_simple = function(test) {
    var arr = [[1,2,3],[3,2,1],[2,3,1]]; 
    test.equal(2, calc.grand_mean(arr));

    // jagged
    var arr = [[1,2, 3, 1],[3],[3, 2, 1, 2]]; 
    test.equal(2, calc.grand_mean(arr));


    test.done(); 
}

exports.single_factor_ssa = function(test) {
    var arr = [[32, 22, 29, 29, 26, 38, 21],
               [34, 33, 30, 29, 41, 31],
               [20 ,30 ,32 ,26 ,32 ,29 ,27 ,30],
               [28 ,31 ,30 ,28 ,33 ,32 ,39]]; 

    var correct = 119.78571; 
    var result = parseFloat(calc.single_factor_ssa(arr).toFixed(5)); 
    test.equal(correct, result); 
    test.done(); 
 
}
