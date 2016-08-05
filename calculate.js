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
