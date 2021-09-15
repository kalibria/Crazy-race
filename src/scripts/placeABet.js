const allFlagsInBetWindow = Array.from(document.querySelectorAll(".bet-window__flag"));
console.log("betFlags", allFlagsInBetWindow);



export function fixRate(event) {
    console.log("currentTar", event.currentTarget)
    event.currentTarget.classList = "bet-window__flag-fixedBet";

    allFlagsInBetWindow.forEach(item => {
        if (item !== event.currentTarget) {
            item.classList = "bet-window__grayscale";
            item.setAttribute("disabled", "disabled");
        }
    })
}

allFlagsInBetWindow.forEach(item => item.addEventListener("click", fixRate))

