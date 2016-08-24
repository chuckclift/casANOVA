exports.std_dev = std_dev; 
exports.grand_mean = grand_mean; 
exports.single_factor_ssa = single_factor_ssa; 
exports.single_factor_sse = single_factor_sse; 
exports.single_factor_anova = single_factor_anova; 
exports.two_factor_ssa = two_factor_ssa; 
exports.two_factor_ssb = two_factor_ssb; 

function add_row() {
    var table = document.getElementById("calcTable"); 
    var total_rows = table.rows.length; 

    var row = table.insertRow(total_rows);
    var columns = table.rows[0].children.length; 

    for (var i = 1; i < columns; i++) {
        var c = row.insertCell(0); 
        c.innerHTML = "<input type=\"number\">" ; 
    }

    var c = row.insertCell(0); 
    c.innerHTML = "<p>sample " + (total_rows + 1) + "</p>" ; 
}

function add_column() {
    var table = document.getElementById("calcTable"); 
    var rows = table.rows.length; 
    var columns = table.rows[0].children.length; 

    for (var r=0; r<rows; r++) {
        var c = table.rows[r].insertCell(columns);
        c.innerHTML = "<input type=\"number\">"; 
    }
}

function row_means() {
    var table = document.getElementById("calcTable"); 
    var columns = table.rows[0].children.length; 
    var rows = table.rows.length; 
    var means = []; 

    for (var i = 0; i < rows; i++) {
        means.push(mean_of_row(table.rows[i], 1)); 
    }

    return means; 
}

function mean_of_row(row, start) {
    var columns = row.children.length; 

    var sum = 0;
    var count = 0; 

    for (var i=start; i<columns; i++) {
        var cell = row.children[i].children[0].value; 
            if (parseFloat(cell)) {
                sum += parseFloat(cell); 
                count += 1; 
            }         
    } 
    
    return sum / count; 
}

function std_dev(sample) {
    // takes standard deviation of array
    var sum = 0; 
    for (var i=0; i<sample.length; i++) {sum += sample[i]; }
    var mean = sum / sample.length;

    var stdev_sum = 0; 
    for (var i=0; i<sample.length; i++) {stdev_sum += Math.pow(sample[i] - mean, 2); }
    return Math.sqrt(stdev_sum / (sample.length - 1)); 
}

function grand_mean(data_2d) {
    var all_values = [].concat.apply([], data_2d); 
    
    var sum = 0; 
    for (var i=0; i < all_values.length; i++) { sum += all_values[i]; } 

    return sum / all_values.length; 
}

function mean(data_1d) {
    var sum = 0;
    for (var i=0; i<data_1d.length; i++) {
        sum += data_1d[i];
    } 
    return sum / data_1d.length; 
}


function single_factor_ssa(data_2d) {
    var sum = 0; 
    var ybar = grand_mean(data_2d); 

    for (var i=0; i < data_2d.length; i++) {
        var row_mean = mean(data_2d[i]); 
        var row_length = data_2d[i].length; 

        sum += row_length * Math.pow(row_mean - ybar, 2);  
    }
    return sum; 
}

function single_factor_sse(data_2d) {
    var sum = 0; 
    for (var i=0; i<data_2d.length; i++) {
        var row_average = mean(data_2d[i]); 

        for (var j=0; j<data_2d[i].length; j++) {
            sum += Math.pow(data_2d[i][j] - row_average, 2); 
        }
    }
    return sum; 
}

function single_factor_anova(data_2d) {
    var anova = {};
    c = data_2d.length; // returns number of samples(rows)
    n =  [].concat.apply([], data_2d).length; 
    
    anova.c = c;
    anova.n = n; 
    anova.sse = single_factor_sse(data_2d); 
    anova.ssa = single_factor_ssa(data_2d); 
    anova.sst = anova.sse + anova.ssa; 

    anova.msa = anova.ssa / (c - 1);
    anova.mse = anova.sse / (n - c);  
    anova.f = anova.msa / anova.mse;
    return anova; 
}

function two_factor_ssa(data_2d) {
    var ybar = grand_mean(data_2d); 
    var sum = 0; 
    for (var i=0; i < data_2d.length; i++) {
        sum += Math.pow(mean(data_2d[i]) - ybar, 2); 
    }
    var c = data_2d[0].length; 
    return c * sum;  
    
}

function two_factor_ssb(data_2d) {
    var ybar = grand_mean(data_2d); 
    var sum = 0; 
    for (var j=0; j < data_2d[0].length; j++) {
        var column = [] 
        for (var i=0; i < data_2d.length; i++) { 
            column = column.concat(data_2d[i][j]);
        } 

        var column_mean = mean(column); 
        sum += Math.pow(column_mean - ybar, 2); 
    }
    var r = data_2d.length; 
    return r * sum; 
}
