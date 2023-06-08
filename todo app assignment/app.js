var input = document.getElementById("input");
var ulValue = document.getElementById("ulVal");

function addValue() {
  var li = document.createElement("li");
  var liValue = document.createTextNode(input.value);

  li.appendChild(liValue);
  ulValue.appendChild(li);
  input.value = "";

  var delBtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);
  delBtn.setAttribute("class", "btn");
  delBtn.setAttribute("onclick", "deleteRow(this)");
  li.appendChild(delBtn);

  var editBtn = document.createElement("button");
  var editText = document.createTextNode("EditValue");
  editBtn.appendChild(editText);
  editBtn.setAttribute("class", "btn");
  editBtn.setAttribute("onclick", "editRow(this)");
  li.appendChild(editBtn);
}
function deleteRow(btn) {
  btn.parentNode.remove();
}
function editRow(btn) {
  btn.parentNode.firstChild.nodeValue = prompt("Enter A Value");
}
