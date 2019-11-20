//init file to make the chess
var body = document.querySelector("body");

var table = document.createElement("table");
table.id = "table";
for(var i = 0;i < 8; i++)
{
    var tr = document.createElement("tr");
    for(var g = 0;g < 8;g++)
    {
        var td = document.createElement("td");
        if(g % 2 == 0)
        {
            td.className = "white";
        }else
        {
            td.className = "black";
        }
        td.id = 8 - i + " " + g;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
body.appendChild(table);