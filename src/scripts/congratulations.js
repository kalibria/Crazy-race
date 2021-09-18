export function countBalance() {
    const idFirstCompetitor = findfirst();

    console.log("idFirstComp", idFirstCompetitor);
    console.log(idFirstCompetitor.includes(idBetFlag));
    if (idFirstCompetitor.includes(idBetFlag)) {
        initialBalance += 1000;
    } else {
        initialBalance -= 250;
    } elInitialBalance.innerHTML = (`$${initialBalance}`);

}