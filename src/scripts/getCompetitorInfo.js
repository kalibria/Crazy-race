export function getCompetitorInfo() {

    let generalInfo = fetch("https://randomuser.me/api/")
        .then(Response => Response.json())
        .then(data => data.results[0].nat)
        .catch(err => console.log(err))

    return generalInfo;
}

let divForFlag = document.querySelectorAll(".competitor-info__flag");
divForFlag = Array.from(divForFlag);

let divForBetWindow = document.querySelectorAll(".bet-window__flag");
divForBetWindow = Array.from(divForBetWindow);

function imgFlag() {
    let imgFlag = getCompetitorInfo().then((nat) => {

        let imgFlag = document.createElement("img");
        imgFlag.src = `https://www.countryflags.io/${nat}/flat/64.png`;

        return imgFlag;

    })
        .catch(console.log);
    return imgFlag;

}


divForFlag.map((item, i, arr) => {
    imgFlag().then((imgFlag) => {
        item.append(imgFlag);

        let newFlag = new Image;
        newFlag.src = imgFlag.src;
        divForBetWindow[i].append(newFlag)

    })
        .catch(console.log);

});














// классы

// class Competitor {
//     constructor(nat) {
//         this.nat = nat;
//         this.generalInfo = generalInfo;
//     }
//     getCompetitorInfo() {

//         let generalInfo = fetch("https://randomuser.me/api/")
//             .then(Response => Response.json())
//             .then(data => data.results[0].nat)
//             .catch(err => console.log(err))

//         return generalInfo;
//     }

//     appendFlag() {
//         getCompetitorInfo().then((nat) => {

//             let imgFlag = document.createElement("img");
//             imgFlag.src = `https://www.countryflags.io/${nat}/flat/64.png`;

//             let divForFlag = document.querySelector(".flag");
//             divForFlag.append(imgFlag);
//         })
//             .catch(console.log);

//     }
// }
