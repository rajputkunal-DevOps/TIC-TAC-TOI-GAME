let box = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let turnO = true;
let reset = document.querySelector(".reset");


const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

box.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for(let pattern of winpattern){
        let pos1val = box[pattern[0]].innerHTML;
        let pos2val = box[pattern[1]].innerHTML;
        let pos3val = box[pattern[2]].innerHTML;
        
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val == pos2val && pos2val == pos3val) {
                console.log("winnner",pos1val);
                winner.innerHTML = pos1val + " IS WINNER !!!";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let resetButton = document.querySelector(".reset");
    
    if (resetButton) {
        resetButton.onclick = (event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            document.querySelectorAll(".box").forEach((box) => {
                box.innerHTML = "";
                box.disabled = false;
                winner.innerHTML = "let play return!!"
            });
        };
    }
});