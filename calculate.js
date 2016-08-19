exports.std_dev = std_dev; 
exports.grand_mean = grand_mean; 
exports.single_factor_ssa = single_factor_ssa; 
exports.single_factor_sse = single_factor_sse; 

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


function single_factor_ssa(data_2d) {
    var sum = 0; 
    var ybar = grand_mean(data_2d); 

    for (var i=0; i < data_2d.length; i++) {
        var row_sum = 0;
        
        for (var j=0; j < data_2d[i].length; j++) {
            row_sum += data_2d[i][j]; 
        } 
        var row_length = data_2d[i].length; 
        var row_mean = row_sum / row_length; 
        sum += row_length * Math.pow(row_mean - ybar, 2);  
    }
    return sum; 
}

function single_factor_sse(data_2d) {
    var sum = 0; 
    for (var i=0; i<data_2d.length; i++) {
        var row_sum = 0;
        for (var s=0; s<data_2d[i].length; s++) {row_sum += data_2d[i][s]; }
        var row_average = row_sum / data_2d[i].length; 

        for (var j=0; j<data_2d[i].length; j++) {
            sum += Math.pow(data_2d[i][j] - row_average, 2); 
        }
    }
    return sum; 
}
