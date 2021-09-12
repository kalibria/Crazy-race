import { firstFinished } from "./whoFirstFinished";
import { allCompetitors } from "./startAnimation";

export function findfirst() {
    const winnerAndLooser = firstFinished();
    console.log("winLos1", winnerAndLooser);
    const idWinner = winnerAndLooser[0].id;
    console.log("idWinner", idWinner);
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
    elWithId.style.width = "200px";

}

