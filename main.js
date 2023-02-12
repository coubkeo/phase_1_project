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
  todoRow.setAttribute("class", "rowContainer");

  listContainer.appendChild(todoRow);

  let taskRow = document.createElement("p");
  let startCell = document.createElement("p");
  let completedCell = document.createElement("p");

  let checkButton = document.createElement("button"); //button is named checkButton
  let startButton = document.createElement("button");
  // innerText will always be a string
  taskRow.innerText = task;
  startCell.innerText = start;
  completedCell.innerText = completed;
  // add buttons
  checkButton.innerText = "✔️";
  startButton.innerText = "🗓️";

  todoRow.appendChild(taskRow); //task cell
  todoRow.appendChild(startCell); //start cell
  todoRow.appendChild(completedCell); // complete cell

  todoRow.appendChild(checkButton);
  todoRow.appendChild(startButton);

  //cross-out list
  todoRow.addEventListener("click", () => {
    taskRow.style.textDecoration = "line-through";
  });
  todoRow.addEventListener("click", () => {
    startCell.style.textDecoration = "line-through";
  });
  todoRow.addEventListener("click", () => {
    completedCell.style.textDecoration = "line-through";
  });

  //highlight when hovered
  todoRow.addEventListener("mouseover", () => {
    event.target.style.color = "green";
  });
  //unhighlight when not hovered
  todoRow.addEventListener("mouseout", () => {
    event.target.style.color = "black";
  });

  //delete tasks
  todoRow.addEventListener("dblclick", () =>{
    todoRow.removeChild(taskRow)
  })
  todoRow.addEventListener("dblclick", () =>{
    todoRow.removeChild(startCell)
  })
  todoRow.addEventListener("dblclick", () =>{
    todoRow.removeChild(completedCell)
  })
  todoRow.addEventListener("dblclick", () =>{
    todoRow.removeChild(startButton)
  })
  todoRow.addEventListener("dblclick", () =>{
    todoRow.removeChild(checkButton)
  })
});
