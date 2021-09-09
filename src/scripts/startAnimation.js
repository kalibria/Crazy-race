const btnStart = document.querySelector(".btn-start");
const allCompetitors = document.querySelectorAll(".competitor-info__competitor");
console.log("allComp1", allCompetitors);
// allCompetitors = Array.from(allCompetitors);
// console.log("allComp2", allCompetitors);

btnStart.addEventListener("click", startMoving);

export function startMoving() {

    allCompetitors.forEach(item => {
        let randomX1 = Math.floor(Math.random() * 10) / 10;
        console.log("randX1", randomX1);
        let randomY1 = Math.floor(Math.random() * 10) / 10;
        let randomX2 = Math.floor(Math.random() * 10) / 10;
        let randomY2 = Math.floor(Math.random() * 10) / 10;
        item.style.animation = `runLeft 5s forwards cubic-bezier(${randomX1}, ${randomY1}, ${randomX2}, ${randomY2})`;
    })

}