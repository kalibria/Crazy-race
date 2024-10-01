import { findfirst } from "../highlightWinner";
import { idBetFlag } from "../placeABet";
import {balanceUi} from './balance-ui';

class BalanceManager {
    constructor(balance) {
        this.INITIAL_BALANCE = balance;
        this.balanceKeyInLocalStorage = 'balance';
    }

    getInitialBalance() {
        return this.INITIAL_BALANCE;
    }

    // arrow functions bind to class context automatically
    // so `this` inside this class is guaranteed to be the class object and not `window`
    getBalance = () => {
        let initialBalance = this.getInitialBalance();

        const balanceInLS = +localStorage.getItem(this.balanceKeyInLocalStorage)

        if (balanceInLS) {
            return balanceInLS;
        }

        return initialBalance
    }

    updateBalance = () => {
        let currentBalance = this.getBalance();

        const idFirstCompetitor = findfirst();

        let newBalance;

        if (idFirstCompetitor.includes(idBetFlag)) {
            newBalance = currentBalance + 1000;
        } else {
            newBalance = currentBalance - 250;
        }

        balanceUi.drawNewBalance(newBalance)

        localStorage.setItem("balance", newBalance);
    }
}

export const balanceManager = new BalanceManager(1000);

