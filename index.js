let btnsElements = document.getElementsByClassName('btn');
let body = document.querySelector('body');
let winnerPara = document.getElementById('winnerPara');
let classXcount = document.querySelector('#classXcount');
let classOcount = document.querySelector('#classOcount');
let resetBtn = document.querySelector('#resetBtn');
let drawPara = document.querySelector('.drawPara');
let newGameBtn = document.querySelector('#newGameBtn');
let scoreddiv = document.querySelector('.scoreddiv');
let winnerContainer = document.querySelector('.winnerContainer1');
let winningPatternList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];
let playerO = true;
let count = 0;
let XplayerWin = 0;
let OplayerWin = 0;

const resetBtns = () => {
    console.log(count);
    for (let btn of btnsElements) {
        btn.innerText = '';
        btn.disabled = false;
    }
    winnerContainer.classList.add("hide");
    drawPara.classList.add('hide1');
    playerO = true;
    body.style.backgroundColor = '#25e628';
}


function showWinner(winner) {
    count = 0;
    winnerContainer.classList.remove("hide");
    winnerPara.innerText = `${winner} is the winner!!`;
    for (let btn of btnsElements) {
        btn.disabled = true;
    }
}



function checkWinner() {
    for (let pattern of winningPatternList) {
        let pattern1 = btnsElements[pattern[0]].innerText;
        let pattern2 = btnsElements[pattern[1]].innerText;
        let pattern3 = btnsElements[pattern[2]].innerText;
        if (pattern1 !== '' && pattern2 !== '' && pattern3 !== '') {
            if (pattern1 === pattern2 && pattern2 === pattern3) {
                showWinner(pattern1);
                if (pattern1 === 'X') {
                    XplayerWin++;
                    classXcount.textContent = `${XplayerWin}`;
                    console.log(XplayerWin);
                } else if (pattern1 === 'O') {
                    OplayerWin++;
                    classOcount.textContent = `${OplayerWin} `;
                    console.log(OplayerWin);
                }
            }
        }
    }
}


for (let btn of btnsElements) {
    btn.addEventListener("click", () => {
        if (playerO) {
            btn.innerText = 'O';
            playerO = false;
        } else {
            btn.innerText = 'X';
            playerO = true;
        }
        btn.disabled = true;
        count++;
        checkWinner();
        if (count === 9) {
            drawPara.classList.remove('hide1');
            body.style.backgroundColor = 'yellow';
            drawPara.innerText = 'Game is Draw between O and X';
            count = 0;
        }
    })
}

resetBtn.addEventListener('click', resetBtns);
newGameBtn.addEventListener('click', resetBtns);
