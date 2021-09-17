const allFlagsInBetWindow = Array.from(document.querySelectorAll(".bet-window__flag"));
const divWithFlags = document.querySelector(".bet-window__wrapper")

console.log("winCom", window.competitors);

export const idBetFlag = [];

export function fixRate(event) {
    const fixedFlag = event.target.closest("button");

    fixedFlag.classList = "bet-window__flag-fixedBet";
    console.log("fixedFlag", fixedFlag)

    allFlagsInBetWindow.forEach(item => {
        if (item !== fixedFlag) {
            item.classList = "bet-window__grayscale";
        }
        item.setAttribute("disabled", "disabled");
    })
    const indexFixedFlag = allFlagsInBetWindow.indexOf(fixedFlag);
    console.log("index", indexFixedFlag);
    idBetFlag.push(window.competitors[indexFixedFlag].id)
    console.log("idBetFl", idBetFlag)
}


divWithFlags.addEventListener("click", fixRate);



