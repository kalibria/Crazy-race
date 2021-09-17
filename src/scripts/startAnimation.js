import { findLastDuration, highlightWinner } from './highlightWinner';
import { firstFinished } from './whoFirstFinished';
import { countBalance } from './balance';


const btnStart = document.querySelector(".btn-start");
export const allCompetitors = document.querySelectorAll(".competitor-info__competitor");

btnStart.addEventListener("click", startMoving);


export function startMoving(event) {
    event.currentTarget.setAttribute("disabled", "disabled");

    allCompetitors.forEach((item, i) => {
        let randomX1 = Math.floor(Math.random() * 10) / 10;
        let randomY1 = Math.floor(Math.random() * 10) / 10;
        let randomX2 = Math.floor(Math.random() * 10) / 10;
        let randomY2 = Math.floor(Math.random() * 10) / 10;

        let randomDuration = Math.floor(Math.random() * 10);
        window.competitors[i].duration = randomDuration;

        item.style.animation = `runLeft ${randomDuration}s forwards cubic-bezier(${randomX1}, ${randomY1}, ${randomX2}, ${randomY2})`;

    })

    const lastDurMs = findLastDuration() * 1000;

    setTimeout(highlightWinner, lastDurMs);
    setTimeout(countBalance, lastDurMs + 1000);
    firstFinished()
}





