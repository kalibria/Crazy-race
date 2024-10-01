 import {balanceManager} from './balance-logic';

class BalanceUi {
  constructor() {
    this.elInitialBalance = document.querySelector(".balance-window__balance");
  }

  drawNewBalance(someBalance) {
    this.elInitialBalance.innerHTML = `$${someBalance}`;
  }
}

export const balanceUi = new BalanceUi();
balanceUi.drawNewBalance(balanceManager.getBalance());

