export function firstFinished() {
    console.log("winComp2", window.competitors)
    const newArr = [...window.competitors];
    newArr.sort((a, b) => a.duration - b.duration)

    let firstLastComp = [];
    firstLastComp.push(newArr[0]);
    console.log("newArrDur", newArr[0].duration);

    if (newArr[0].duration === newArr[1].duration) {
        firstLastComp.push(newArr[1]);
        if (newArr[0].duration === newArr[2].duration) {
            firstLastComp.push(newArr[2]);
        }
    }

    firstLastComp.push(newArr[3])

    return firstLastComp;
}





