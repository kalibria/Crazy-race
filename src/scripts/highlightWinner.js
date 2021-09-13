import { firstFinished } from "./whoFirstFinished";
import { allCompetitors } from "./startAnimation";

export function findfirst() {
    const winnerAndLooser = firstFinished();
    console.log("winLos1", winnerAndLooser);
    const idWinner = winnerAndLooser[0].id;
    return idWinner
}

export function findLastDuration() {
    const winnerAndLooser = firstFinished();
    const lastCompetitorDuration = winnerAndLooser[1].duration;
    console.log("lastDur", lastCompetitorDuration);
    return lastCompetitorDuration
}

export function highlightWinner() {

    const elWithId = document.getElementById(findfirst());
    elWithId.className = "winnerFlag";

    const elWrapperForWinner = document.createElement("div");
    elWrapperForWinner.className = "wrapperForWinner";

    const field = document.querySelector(".field");
    field.append(elWrapperForWinner);

    elWrapperForWinner.append(elWithId);

    // const textWinner = document.createElement("p");
    // textWinner.className = "textWinner";
    // textWinner.innerText = "WINNER!";
    // elWrapperForWinner.before(textWinner);

}

