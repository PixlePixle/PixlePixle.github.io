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

document.documentElement.addEventListener('click', function () {
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
            information.innerHTML = "NAME<br>\
            &nbsp;\t&nbsp;\tPete\
r Ju\
ng<br>\
            DESCRIPTION<br>\
            &nbsp;\t&nbsp;\tI'm pursuing a B.S. in Computer Science at the University of Georgia.<br>\
            &nbsp;\t&nbsp;\tCurrently, I'm expanding my knowledge in game and web development by using tools such as Unity and making this website.<br>\
            LANGUAGES<br>\
            &nbsp;\t&nbsp;\tJava, C, HTML, JavaScript, React, Express";
            terminal.appendChild(information);
            break;
        case "contact": // Clears Screen
            let contactInformation = document.createElement("p");
            contactInformation.innerHTML = "EMAIL<br>\
            &nbsp;\t&nbsp;\tpet\
er.j\
ungjr@g\
mai\
l.com";
            terminal.appendChild(contactInformation);
            break;
        case "help": // Prints available commands
            let commandHelp = document.createElement("p");
            commandHelp.innerHTML = "about - prints information about me<br>\
                contact - reveals my email address<br>\
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
        case ":(){ :|:& };:":
            window.location.href = "https://www.ravbug.com/bsod/bsod10/";
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