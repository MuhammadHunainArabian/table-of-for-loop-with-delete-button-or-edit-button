function myFunction() {
    var paragraph = document.getElementById("demo");
    var f = '#';
    var a = document.getElementById('inputName').value;
    var b = document.getElementById('inputName1').value;
    var c = document.getElementById('inputName2').value;
    var d = '<button onclick="remove(this)" type="button" class="btn btn-outline-dark btn-lg">REMOVE LINE</button>';
    var e = '<button onclick="edit()" type="button" class="btn btn-outline-dark btn-lg">EDIT</button>';
    if (a === ''){
        return false;
    }else{
        for (var i =0; i<=0; i++) {
            var td = document.createElement('td');
            var tableElement = document.getElementById('loop-table');
            var rowElement = tableElement.insertRow();
            rowElement.innerHTML =
                "<tr>"+
                "<td style='width: 15%;font-size: 18px;text-align: center'>"+f+"</td>" +
                "<td style='width: 15%;font-size: 18px;text-align: center' id='demo'>"+a+"</td>" +
                "<td style='width: 15%;font-size: 18px;text-align: center' id='demo'>"+b+"</td>" +
                "<td style='width: 15%;font-size: 18px;text-align: center' id='demo'>"+c+"</td>" +
                "<td style='width: 15%;text-align: center'>"+d+"</td>" +
                "<td style='width: 15%;text-align: center'>"+e+"</td>" +
                "</tr>";
            document.getElementById('inputName').value = '';
            paragraph.appendChild('tr').classList.add("edit-list");
        }
    }
}
function remove(link) {
    var row = link.closest("tr");
    row.parentNode.removeChild(row);
}
