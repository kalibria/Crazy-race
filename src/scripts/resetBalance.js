import {balanceManager} from './balance/balance-logic';

export function resetBalance() {
    const initialBalance = balanceManager.INITIAL_BALANCE;

    localStorage.balance = initialBalance;

    let balance = document.querySelector(".balance-window__balance");

    balance.innerHTML = `$${initialBalance}`;
}

const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", resetBalance)
