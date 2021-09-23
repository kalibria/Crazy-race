import { findfirst } from "./highlightWinner";
import { idBetFlag } from "./placeABet";
export const INITIAL_BALANCE = 1000;


export function getBalance() {
    let initialBalance = INITIAL_BALANCE;

    if (localStorage.getItem("balance")) {
        console.log("LSbalance", localStorage.getItem("balance"))
        initialBalance = +localStorage.getItem("balance") || initialBalance
    }
    return initialBalance
}


let elInitialBalance = document.querySelector(".balance-window__balance");
elInitialBalance.innerHTML = (`$${getBalance()}`);

export function countBalance() {
    let currentBalance = getBalance();
    console.log("LSbalance1", localStorage.getItem("balance"));
    console.log("initialBal", currentBalance)
    const idFirstCompetitor = findfirst();

    if (idFirstCompetitor.includes(idBetFlag)) {
        currentBalance += 1000;

    } else {
        currentBalance -= 250;
    }
    elInitialBalance.innerHTML = `$${currentBalance}`;
    localStorage.setItem("balance", currentBalance);
}

