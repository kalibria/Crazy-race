import { findfirst } from "./highlightWinner";
import { findLastDuration } from "./highlightWinner";
import { idBetFlag } from "./placeABet";

let initialBalance = 1000;
let elInitialBalance = document.querySelector(".balance-window__balance");
elInitialBalance.append(`$${initialBalance}`);

export function countBalance() {
    const idFirstCompetitor = findfirst();
    if (idFirstCompetitor.includes(idBetFlag)) {
        initialBalance += 1000;
    } else {
        initialBalance -= 250;
    } elInitialBalance.innerHTML = (`$${initialBalance}`);

}

