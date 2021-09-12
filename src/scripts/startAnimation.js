import { findLastDuration, highlightWinner } from './highlightWinner';
import { firstFinished } from './whoFirstFinished';


const btnStart = document.querySelector(".btn-start");
export const allCompetitors = document.querySelectorAll(".competitor-info__competitor");
console.log("allComp1", allCompetitors);

btnStart.addEventListener("click", startMoving);


export function startMoving() {




    allCompetitors.forEach((item, i) => {
        let randomX1 = Math.floor(Math.random() * 10) / 10;
        let randomY1 = Math.floor(Math.random() * 10) / 10;
        let randomX2 = Math.floor(Math.random() * 10) / 10;
        let randomY2 = Math.floor(Math.random() * 10) / 10;

        let randomDuration = Math.floor(Math.random() * 10);
        window.competitors[i].duration = randomDuration;

        item.style.animation = `runLeft ${randomDuration}s forwards cubic-bezier(${randomX1}, ${randomY1}, ${randomX2}, ${randomY2})`;

    })

    setTimeout(highlightWinner, findLastDuration() * 1000)
    console.log("winComp1", window.competitors[0].duration);
    firstFinished()
}





