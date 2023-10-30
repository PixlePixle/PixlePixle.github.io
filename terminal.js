// Necessary Variables
var terminal = document.getElementById("terminal-text"); // The div containing the terminal text
var commandInput = document.getElementById("command"); // The input box holding the current command
var form = document.querySelector("form"); // The form holding the command box

// Makes sure that terminal input is always selected.
commandInput.addEventListener("blur", function () {
    setTimeout(() => {
        commandInput.focus();
    }, 0);
});

// Handles input of the command
function submitForm(event) {
    // Prevents page reload
    event.preventDefault();

    // Appends the inputted command to the previously inputted commands.
    let lastCommand = document.createElement("p");
    lastCommand.innerHTML = "pixlepixle@github.io> " + commandInput.value.replaceAll(' ', '&nbsp;');
    terminal.appendChild(lastCommand);

    // Does command base on input.
    switch(commandInput.value.trim()){
        case "about": // Prints some information
            let information = document.createElement("p");
            information.innerHTML = "Hello World!<br>\
                This is some information about me :)";
            terminal.appendChild(information);
            break;
        case "help": // Prints available commands
            let commandHelp = document.createElement("p");
            commandHelp.innerHTML = "about - prints information about me<br>\
                help - prints this message<br>\
                clear - clears the screen";
            terminal.appendChild(commandHelp);
            break;
        case "clear": // Clears Screen
            let everything= document.querySelectorAll("#terminal-text p");
            everything.forEach((e) => {
                e.remove();
            })
            break;
        default: // Prints an error, unknown command message
            let unknownCommand = document.createElement("p");
            unknownCommand.innerHTML = "'" + commandInput.value.trim().replaceAll(' ', '&nbsp;') + "' is not recognized as a valid command";
            terminal.appendChild(unknownCommand);
            break;
    }

    commandInput.value = '';
}
form.addEventListener("submit", submitForm);