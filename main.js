//variables
let enterButton = document.getElementById("enter");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");

// event listeners
enterButton.addEventListener("click", function () {
  let paraghraph = document.createElement("p");
  paraghraph.classList.add('paragraph-styling') //text size
  paraghraph.innerText = inputField.value; //search text
  toDoContainer.appendChild(paraghraph);
  inputField.value = "" //empties search bar
});
