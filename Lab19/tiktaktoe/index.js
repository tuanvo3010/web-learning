// Khi click vào ô nào thì điền text tương ứng với turn hiện tại vào ô đó
// (chỉ điền khi mà chưa có text)

// Sau khi điền thì check win

// Nếu có ng chiến thắng thì thông báo và dừng trò chơi
// Nếu hết lượt (9) mà k có ng chiến thắng thì cũng dừng trò chơi

// Khi mà trò chơi kết thúc thì hiện nút restart để chơi lại
const turnEl = document.querySelector(".turn");
const cells = document.querySelectorAll(".cell");
const btnRestart = document.querySelector(".btn-restart");

let turn = +prompt("Chọn lượt chơi trước (1 - X) | (0 - O)");
let count = 0;
let winner = null;

const cases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkWinner = function () {
    for (let c of cases) {
        const i = c[0];
        const j = c[1];
        const k = c[2];

        if (
            cells[i].textContent != "" &&
            cells[j].textContent != "" &&
            cells[k].textContent != "" &&
            cells[i].textContent === cells[j].textContent &&
            cells[i].textContent === cells[k].textContent
        ) {
            winner = turn === 1 ? "X" : "O";
            console.log("Winner:", winner);
            break;
        }
    }
};

const handleTurnChange = () => {
    turnEl.textContent = turn === 1 ? "X" : "O";
};

handleTurnChange();

const handleCellClick = (e) => {
    const cell = e.target;

    if (winner || cell.textContent != "") return;

    count++;

    cell.textContent = turn === 1 ? "X" : "O";

    checkWinner();
    handleEndGame();
    handleTurnChange();
    
    turn = turn === 1 ? 0 : 1;
};

const handleEndGame = () => {
    if (winner || count === 9) {
        btnRestart.style.display = "block";
    }
};

const handleRestart = () => {
    turn = 1;
    winner = 0;
    count = 0;

    btnRestart.style.display = "none";

    handleTurnChange();

    for (let cell of cells) {
        cell.textContent = "";
    }
};

btnRestart.addEventListener("click", handleRestart);

for (let cell of cells) {
    cell.addEventListener("click", handleCellClick);
}