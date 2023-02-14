//variables
let task = document.getElementById("inputTask");
let newList = document.getElementById("newList");
let submitButton = document.getElementById("submit");

fetch("http://localhost:3000/todo")
  .then(function (response) {
    return response.json();
  })
  .then(function (firstTasks) {
    let listContainer = document.getElementById("listContainer");
    firstTasks.forEach((item) => {
      let todoRow = document.createElement("div");
      todoRow.setAttribute("class", "rowContainer");

      listContainer.appendChild(todoRow);
      let taskCell = document.createElement("p");
      let startCell = document.createElement("p");
      let completedCell = document.createElement("p");

      taskCell.innerText = item.activity;
      startCell.innerText = item.start;
      completedCell.innerText = item.completed;

      todoRow.appendChild(taskCell);
      todoRow.appendChild(startCell);
      todoRow.appendChild(completedCell);
    });
  });

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let task = document.getElementById("inputTask").value;

  let listContainer = document.getElementById("listContainer");//parent

  let todoRow = document.createElement("div");//child
  todoRow.setAttribute("class", "rowContainer"); //adding a class w/o putting in html

  listContainer.appendChild(todoRow);//add to list

  let taskCell = document.createElement("p");
  let startCell = document.createElement("p");
  let completedCell = document.createElement("p");

  //add buttons
  let checkButton = document.createElement("button"); //button is named checkButton
  let startButton = document.createElement("button");

  // innerText will always be a string
  taskCell.innerText = task;
  startButton.innerText = "📅";
  checkButton.innerText = "✔️";

  startButton.setAttribute("class", "rowButton");
  checkButton.setAttribute("class", "rowButton");

  todoRow.appendChild(taskCell); //task cell
  todoRow.appendChild(startCell); //start cell
  todoRow.appendChild(completedCell); // complete cell

  todoRow.appendChild(startButton);
  todoRow.appendChild(checkButton);

  //cross-out list
  checkButton.addEventListener("click", (e) => {
    e.preventDefault();
    const startDate = new Date();
    completedCell.innerText = startDate.toLocaleDateString();
    taskCell.style.textDecoration = "line-through";
  });

  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    const startDate = new Date();
    startCell.innerText = startDate.toLocaleDateString();
  });

  //highlight when hovered
  todoRow.addEventListener("mouseover", () => {
    taskCell.style.color = "green";
    startCell.style.color = "green";
    completedCell.style.color = "green";
  });
  //unhighlight when not hovered
  todoRow.addEventListener("mouseout", () => {
    taskCell.style.color = "black";
    startCell.style.color = "black";
    completedCell.style.color = "black";
  });

  //delete tasks
  todoRow.addEventListener("dblclick", () => {
    todoRow.removeChild(taskCell);
    todoRow.removeChild(startCell);
    todoRow.removeChild(completedCell);
    todoRow.removeChild(startButton);
    todoRow.removeChild(checkButton);
  });
});
