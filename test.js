var assert = require('assert'); 
var calc = require("./calculate.js");



exports.teststd_dev_one_to_10 = function(test) {
    var correct = 3.02765; 
    var arr = [1,2,3,4,5,6,7,8,9,10]; 
    var result = parseFloat(calc.std_dev(arr).toFixed(5)); 

    test.equal(result, correct);
    test.done();
};

exports.teststd_dev_small_numbers = function(test) {
    var correct = 3.61939; 
    var arr = [9, 2, 5, 4, 12, 7]; 
    var result = parseFloat(calc.std_dev(arr).toFixed(5)); 

    test.equal(result, correct);
    test.done();
};


// suite("std_dev()", function () {
//     test("Standard deviation of 1 to 10", function() { 
//         var correct = 3.02765; 
//         var arr = [1,2,3,4,5,6,7,8,9,10]; 
//         var result = parseFloat(calc.std_dev(arr).toFixed(5)); 
//         assert.equal(correct, result); 
//     }); 
//     test("Standard deviation of [9, 2, 5, 4, 12, 7]", function() { 
//         var correct = 3.61939; 
//         var arr = [9, 2, 5, 4, 12, 7]; 
//         var result = parseFloat(calc.std_dev(arr).toFixed(5)); 
//         assert.equal(correct, result); 
//     }); 
// }); 
// 
