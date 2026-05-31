"use strict";
const TaskList = document.getElementById("TaskList");
const task = document.getElementById("textbox");

function addTodo() {
  const newList = document.createElement("li");
  TaskList.appendChild(newList);
  const newCheckBox = document.createElement("input");
  newCheckBox.setAttribute("type", "checkbox");
  newList.appendChild(newCheckBox);
  newCheckBox.addEventListener("change", function (event) {
    if (event.target.checked === true) {
      event.target.nextSibling.className = "checked";
    } else {
      event.target.nextSibling.className = "";
    }
  });
  const span = document.createElement("span");
  span.innerText = task.value;
  newList.appendChild(span);
}
const addButton = document.getElementById("add");
addButton.addEventListener("click", addTodo);
