//variables
let enterButton = document.getElementById("enter");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");

// event listeners
enterButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  toDoContainer.appendChild(paragraph); // makes text from input field
  paragraph.innerText = inputField.value; //search text
  inputField.value = ""; //empties search bar

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through"; //one click draws line through
  });

  paragraph.addEventListener("dblclick", (event) => {
    toDoContainer.removeChild(paragraph); // double click deletes list element
  });
});
