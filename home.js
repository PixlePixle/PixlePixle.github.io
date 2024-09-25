const wheel = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", ",", ".", "/", "<", ">", "?"]
const rows = 7
const columns = 18
let cellsText = []
let message = "                   Peter Jung        Developer                           Projects          Contact Me                         "


function fillBoard() {
    let board = document.getElementById("board");
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', columns);
    for(let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        let text = document.createElement('p');
        text.innerText = wheel[0]
        // text.innerText = wheel[Math.floor(Math.random() * wheel.length)]
        cellsText.push(text);
        cell.appendChild(text);
        board.appendChild(cell).className = 'card test';
    }
}

fillBoard();

function displayMessage() {
    let count = 1;
    let offset = 0;
    let endset = 0;
    function cycle() {
        for(let i = offset; i < endset; i++) {
            let cell = cellsText[i];
            cell.innerText = wheel[(i + count) % wheel.length]
        }
        count++;
        if(endset < (rows * columns))
            endset++; // Makes the effect snake out
    }
    let cycleCycle = setInterval(cycle, 25); // Cycles the random characters

    setTimeout(() => {
        let messageLoop = setInterval(() => {
            offset++; // Snakes the starting point of the random character cycler up
            if(offset == rows * columns) {
                clearInterval(cycleCycle);
                clearInterval(messageLoop);
            } // Once we gone through them all, stop both loops
            
            // Place the message into the cells
            cellsText[offset-1].innerText = message.substring(offset-1,offset)
        },25) // How fast it should go along.
    }, 700) // Delay before it stars
}

setTimeout(displayMessage, 350);

