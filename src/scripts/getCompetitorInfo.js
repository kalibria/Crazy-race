//Объект
//запрос => рандомный объект
//из объекта получить страну => получить флаг

export function getCompetitorInfo() {

    let generalInfo = fetch("https://randomuser.me/api/")
        .then(Response => Response.json())
        .then(data => data.results[0].nat)
        .catch(err => console.log(err))

    return generalInfo;
}

getCompetitorInfo().then((nat) => {
    console.log("nat", nat);

    let imgFlag = document.createElement("img");
    imgFlag.src = `https://www.countryflags.io/${nat}/flat/64.png`;

    let divForFlag = document.querySelector(".flag");
    divForFlag.append(imgFlag);


})
    .catch(console.log);
