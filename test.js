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

    var arr2 = [[0, 100, 10, 400, 30],
                [23, 11, 4241, 2],
                [324, 22, 1, 0.5]]; 
    var correct2 =  2609994.37019; 
    var result2 = parseFloat(calc.single_factor_ssa(arr2).toFixed(5));
    test.equal(correct2, result2); 


    test.done(); 
 
}

exports.single_factor_sse = function(test) {
    var arr = [[32, 22, 29, 29, 26, 38, 21],
               [34, 33, 30, 29, 41, 31],
               [20 ,30 ,32 ,26 ,32 ,29 ,27 ,30],
               [28 ,31 ,30 ,28 ,33 ,32 ,39]]; 

    var correct = 496.07143; 
    var result = parseFloat(calc.single_factor_sse(arr).toFixed(5)); 
    test.equal(correct, result); 


    var arr2 = [[0, 100, 10, 400, 30],
                [23, 11, 4241, 2],
                [324, 22, 1, 0.5]]; 
    var correct2 = 13601504.9375; 
    var result2 = parseFloat(calc.single_factor_sse(arr2).toFixed(4));
    test.equal(correct2, result2); 
    test.done(); 
 
}

exports.single_factor_anova = function(test) {
    var arr = [[32, 22, 29, 29, 26, 38, 21],
               [34, 33, 30, 29, 41, 31],
               [20 ,30 ,32 ,26 ,32 ,29 ,27 ,30],
               [28 ,31 ,30 ,28 ,33 ,32 ,39]]; 
    var anova = calc.single_factor_anova(arr);
    test.equal(anova.c, 4); 
    test.equal(anova.n, 28);
    
        
    var sse = 496.07143; 
    var result_sse = parseFloat(anova.sse.toFixed(5)); 
    test.equal(sse, result_sse); 

    var ssa = 119.78571; 
    var result_ssa = parseFloat(anova.ssa.toFixed(5));
    test.equal(ssa, result_ssa); 

    var sst = 615.85714;
    var result_sst = parseFloat(anova.sst.toFixed(5)); 
    test.equal(sst, result_sst);

    var msa = 39.92857;
    var result_msa = parseFloat(anova.msa.toFixed(5));
    test.equal(msa, result_msa);

    var mse = 20.66964; 
    var result_mse = parseFloat(anova.mse.toFixed(5));
    test.equal(mse, result_mse);


    var f = 1.93175;  
    var result_f = parseFloat(anova.f.toFixed(5));
    test.equal(f, result_f); 
    
    test.done(); 
}

exports.two_factor_ssa = function(test) {
    var arr = [[32, 29.1, 20.3, 30.8, 27.7],
               [18.1, 19.7, 18.9, 19.9, 27.7],
               [27, 27.2, 20.9, 31.4, 31.7],
               [22.2, 19.1, 21.1, 18.4, 31.7] ]; 

    var correct = 194.89750; 

    var result = parseFloat(calc.two_factor_ssa(arr).toFixed(5)); 
    test.equal(correct, result);
    test.done()
}

exports.two_factor_ssb = function(test) {
    var arr = [[32, 29.1, 20.3, 30.8, 27.7],
               [18.1, 19.7, 18.9, 19.9, 27.7],
               [27, 27.2, 20.9, 31.4, 31.7],
               [22.2, 19.1, 21.1, 18.4, 31.7] ]; 

    var correct = 181.60700; 

    var result = parseFloat(calc.two_factor_ssb(arr).toFixed(5)); 
    test.equal(correct, result);
    test.done()
}

exports.two_factor_sse = function(test) {
    var arr = [[32, 29.1, 20.3, 30.8, 27.7],
               [18.1, 19.7, 18.9, 19.9, 27.7],
               [27, 27.2, 20.9, 31.4, 31.7],
               [22.2, 19.1, 21.1, 18.4, 31.7] ]; 

    var correct = 155.04500; 

    var result = parseFloat(calc.two_factor_sse(arr).toFixed(5)); 
    test.equal(correct, result);
    test.done()
}

exports.two_factor_anova = function(test) {
    var arr = [[32, 29.1, 20.3, 30.8, 27.7],
               [18.1, 19.7, 18.9, 19.9, 27.7],
               [27, 27.2, 20.9, 31.4, 31.7],
               [22.2, 19.1, 21.1, 18.4, 31.7] ]; 

    var anova = calc.two_factor_anova(arr); 

    var correct_ssa = 194.89750; 
    var ssa_result = parseFloat(calc.two_factor_ssa(arr).toFixed(5)); 
    test.equal(correct_ssa, ssa_result); 

    var correct_ssb = 181.60700; 
    var ssb_result = parseFloat(calc.two_factor_ssb(arr).toFixed(5)); 
    test.equal(correct_ssb, ssb_result); 

    var correct_sse = 155.04500; 
    var sse_result = parseFloat(calc.two_factor_sse(arr).toFixed(5)); 
    test.equal(correct_sse, sse_result); 


    test.done(); 
}
