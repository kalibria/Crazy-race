export function firstFinished() {
    console.log("winComp2", window.competitors)
    const newArr = [...window.competitors];
    newArr.sort((a, b) => a.duration - b.duration)

    let firstLastComp = [];
    firstLastComp.push(newArr[0]);
    firstLastComp.push(newArr[3])

    return firstLastComp;
}





