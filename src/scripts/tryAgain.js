const btnTryAgain = document.querySelector(".btn-try-again");

export function returnToStart() {
    document.querySelector(".wrapperForWinner").remove();
    window.location.reload();
}

btnTryAgain.addEventListener("click", returnToStart)