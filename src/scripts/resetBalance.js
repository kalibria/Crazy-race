import { getBalance } from "./balance";
import { INITIAL_BALANCE } from "./balance";


export function resetBalance() {
    const initialBalance = INITIAL_BALANCE;
    localStorage.balance = initialBalance;
    let balance = document.querySelector(".balance-window__balance");
    balance.innerHTML = `$${initialBalance}`;
}

const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", resetBalance)