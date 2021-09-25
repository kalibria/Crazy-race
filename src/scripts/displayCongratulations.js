import { idBetFlag } from "./placeABet";
import { findfirst } from "./highlightWinner";

export function displayCongratulations() {
    const idFirstCompetitor = findfirst();

    const divForCongr = document.querySelector(".wrapperForWinner");
    let textInDiv = document.querySelector(".textWinner");
    console.log("textP", textInDiv);
    const winningAmount = document.createElement("p");
    winningAmount.className = "textWinner";

    if (idFirstCompetitor.includes(idBetFlag)) {
        textInDiv.innerHTML = "CONGRATULATIONS!<br>YOU WON!";
        winningAmount.innerHTML = "+ $1000";
        textInDiv.after(winningAmount)
    } else {
        textInDiv.innerHTML = "VERY SORRY YOU LOST.<br>TRY AGAIN!";
        winningAmount.innerHTML = "- $250";
        textInDiv.after(winningAmount)
    }
}
