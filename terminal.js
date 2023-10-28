// Necessary Variables
var terminal = document.getElementById("terminal-text");

// Makes sure that terminal input is always selected.
var commandInput = document.getElementById("command");
commandInput.addEventListener("blur", function () {
    setTimeout(() => {
        commandInput.focus();
    }, 0);
});

// Handles input of the command
var form = document.querySelector("form");
function submitForm(event) {
    event.preventDefault();
    let temp = document.createElement("p");
    temp.innerHTML = "pixlepixle@github.io> " + commandInput.value;
    terminal.appendChild(temp);
    commandInput.value = '';
}
form.addEventListener("submit", submitForm);