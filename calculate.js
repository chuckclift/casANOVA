exports.std_dev = std_dev; 
exports.grand_mean = grand_mean; 

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

