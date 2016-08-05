function add_row() {
    var table = document.getElementById("calcTable"); 
    var tablesize = table.rows.length; 
    var row = table.insertRow(tablesize);

    var columns = table.rows[0].children.length; 

    var cells = []; 
    for (i = 0; i < columns; i++) {cells.push(row.insertCell(0)); }

    cells[columns - 1].innerHTML = "<input type=\"text\" value=\"cat" + tablesize +  "\">"
    for (i = 0; i < columns - 1; i++) { cells[i].innerHTML = "<input type=\"text\">";}
}

