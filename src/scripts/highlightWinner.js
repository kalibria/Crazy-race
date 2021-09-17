import { firstFinished } from "./whoFirstFinished";

export function findfirst() {
    const winnerAndLooser = firstFinished();
    const idWinner = [];

    for (let i = 0; i < winnerAndLooser.length - 1; i++) {
        let id = winnerAndLooser[i].id;
        idWinner.push(id)
    }

    return idWinner
}


export function findLastDuration() {
    const winnerAndLooser = firstFinished();

    const lastCompetitor = winnerAndLooser[winnerAndLooser.length - 1];
    const lastCompetitorDuration = lastCompetitor.duration;

    return lastCompetitorDuration
}

function findElWithId() {

    const idWinners = findfirst();

    let elWithId = [];
    idWinners.map(item => {
        let itemElById = document.getElementById(item);
        itemElById.className = "winnerFlag";
        elWithId.push(itemElById);
    })

    return elWithId
}



export function highlightWinner() {

    const elWrapperForWinner = document.createElement("div");
    elWrapperForWinner.className = "wrapperForWinner";

    const elWrapperForFlags = document.createElement("div");
    elWrapperForFlags.className = "wrapperForFlags";

    elWrapperForWinner.append(elWrapperForFlags);

    const field = document.querySelector(".field");
    field.append(elWrapperForWinner);

    const elWithId = findElWithId();

    elWithId.forEach(item => elWrapperForFlags.append(item))

    const textWinner = document.createElement("p");
    textWinner.className = "textWinner";
    if (elWithId.length > 1) {
        textWinner.innerText = "WINNERS!";
    } else { textWinner.innerText = "WINNER!" };
    elWrapperForFlags.before(textWinner);

}

