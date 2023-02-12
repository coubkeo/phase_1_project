//variables
let task = document.getElementById("inputTask");
let newList = document.getElementById("newList");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let task = document.getElementById("inputTask").value;
  let start = document.getElementById("inputStartDate").value;
  let completed = document.getElementById("inputCompletionDate").value;

  let listContainer = document.getElementById("listContainer");

  let todoRow = document.createElement("div");
  todoRow.setAttribute("class","rowContainer")
  
  listContainer.appendChild(todoRow);

  console.log(listContainer)
  let taskRow = document.createElement("p");
  let startCell = document.createElement("p");
  let completedCell = document.createElement("p");

  let checkButton = document.createElement("button")//button is named checkButton
  let startButton = document.createElement("button")
// innerText will always be a string
  taskRow.innerText = task;
  startCell.innerText = start;
  completedCell.innerText = completed;
 // add buttons

  todoRow.appendChild(taskRow)//task cell
  todoRow.appendChild(startCell)//start cell
  todoRow.appendChild(completedCell);// complete cell

});
