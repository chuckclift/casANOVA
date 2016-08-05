function add_row() {
    var table = document.getElementById("calcTable"); 
    var total_rows = table.rows.length; 

    var row = table.insertRow(total_rows);
    var columns = table.rows[0].children.length; 

    for (var i = 0; i < columns; i++) {
        var c = row.insertCell(0); 
        c.innerHTML = "<input type=\"text\">" ; 
    }
}

function add_column() {
    var table = document.getElementById("calcTable"); 
    var rows = table.rows.length; 
    var columns = table.rows[0].children.length; 

    for (var r=0; r<rows; r++) {
        var c = table.rows[r].insertCell(columns);
        c.innerHTML = "<input type=\"text\">"; 
    }
}

function row_means() {
    var table = document.getElementById("calcTable"); 
    var columns = table.rows[0].children.length; 
    var rows = table.rows.length; 
    var means = []; 

    for (var i = 0; i < rows; i++) means.push(mean_of_row(table.rows[i], 1)); 


    for (var m=0; m<means.length; m++) {console.log("mean: ", means[m]); }
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
                console.log("added: ", cell); 
            }         
    } 
    
    return sum / count; 
}
