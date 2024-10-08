const allFlagsInBetWindow = Array.from(document.querySelectorAll(".bet-window__flag"));
const divWithFlags = document.querySelector(".bet-window__wrapper")

// export const idBetFlag = [];
export let idBetFlag;
const btnStart = document.querySelector(".btn-start");
const betWindowHeader = document.querySelector(".bet-window__text");

export function fixRate(event) {
    const fixedFlag = event.target.closest("button");
    betWindowHeader.style.animation = '';

    btnStart.disabled = false;
    fixedFlag.classList = "bet-window__flag-fixedBet";

    allFlagsInBetWindow.forEach(item => {
        if (item !== fixedFlag) {
            item.classList = "bet-window__grayscale";
        }
        item.setAttribute("disabled", "disabled");
    })
    const indexFixedFlag = allFlagsInBetWindow.indexOf(fixedFlag);
    // idBetFlag.push(window.competitors[indexFixedFlag].id)
    idBetFlag = window.competitors[indexFixedFlag].id;
}


divWithFlags.addEventListener("click", fixRate);



