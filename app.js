const button = document.querySelector("#enter");
const userInput = document.querySelector("#userInput");
const ul = document.querySelector(".parentList");

const inputLength = () => userInput.value.length;

const createListElement = (e) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remove";
    deleteButton.className = "btn-danger"
    let li = document.createElement("li");
    deleteButton.addEventListener("click", function(e) {
        ul.removeChild(li);
    });
    li.appendChild(document.createTextNode(userInput.value));
    li.appendChild(deleteButton);
    ul.appendChild(li);
    userInput.value = "";
}

const addListAfterClick = (inputLength() > 0) = createListElement();

const addListAfterKeypress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}



ul.addEventListener("click", function(e){
    if (e.target && e.target.nodeName == "LI") {
        e.target.classList.toggle("done");
    } 
});

button.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeypress);
