//получаем общие данные по участнику
export function getCompetitorInfo() {

    let generalInfo = fetch("https://randomuser.me/api/")
        .then(Response => Response.json())
        .then(data => data)
        .catch(err => console.log(err))
    console.log(generalInfo);
    return generalInfo;
}

//получаем HTML элемент флаг

function getImgFlag(data) {
    let ImgFlag = getCompetitorInfo().then((data) => {

        let nat = data.results[0].nat;
        let ImgFlag = document.createElement("img");
        ImgFlag.src = `https://www.countryflags.io/${nat}/flat/64.png`;

        return ImgFlag;

    })
        .catch(console.log);
    return ImgFlag;

}

// вставляем HTML элемент флаг в DOM дерево

let divForFlag = document.querySelectorAll(".competitor-info__flag");
divForFlag = Array.from(divForFlag);

let divForBetWindow = document.querySelectorAll(".bet-window__flag");
divForBetWindow = Array.from(divForBetWindow);

divForFlag.map((item, i, arr) => {
    getImgFlag().then((getImgFlag) => {
        item.append(getImgFlag);

        let newFlag = new Image;
        newFlag.src = getImgFlag.src;
        divForBetWindow[i].append(newFlag)

    })
        .catch(console.log);

});

// получаем HTML элемент имя

function getName(data) {
    let name = getCompetitorInfo().then((data) => {
        let name = data.results[0].name.first + `${' '}` + data.results[0].name.last;

        let elName = document.createElement("p");
        elName.innerText = name;
        console.log(elName)
        return elName;
    })
        .catch(console.log);
    console.log("name10", name)
    return name;

}

//вставляем HTML элемент имя

divForFlag.map((item) => {
    getName().then((data) => item.after(data))
})
















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

//             let getImgFlag = document.createElement("img");
//             getImgFlag.src = `https://www.countryflags.io/${nat}/flat/64.png`;

//             let divForFlag = document.querySelector(".flag");
//             divForFlag.append(getImgFlag);
//         })
//             .catch(console.log);

//     }
// }
