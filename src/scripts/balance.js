import { findfirst } from "./highlightWinner";
import { idBetFlag } from "./placeABet";

let initialBalance = 1000;

if (localStorage.getItem("balance")) {
    initialBalance = +localStorage.getItem("balance") || initialBalance
}

let elInitialBalance = document.querySelector(".balance-window__balance");
elInitialBalance.innerHTML = (`$${initialBalance}`);

export function countBalance() {
    const idFirstCompetitor = findfirst();

    if (idFirstCompetitor.includes(idBetFlag)) {
        initialBalance += 1000;

    } else {
        initialBalance -= 250;
    }
    elInitialBalance.innerHTML = `$${initialBalance}`;
    localStorage.setItem("balance", initialBalance);
}

