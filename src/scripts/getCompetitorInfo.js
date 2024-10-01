import avstralia from '../img/flag_avstraliya_enl.jpg';
import belgija from '../img/flag_belgija_enl.jpg';
import danija from '../img/flag_danija_enl.jpg';
import velikobritania from '../img/flag_velikobritanija_new.jpg';
import {preloadImages} from "./preloadImages";



const TOTAL_EXPECTED_FLAG_COUNT = 4;
window.flagsLoadedCount = 0;
window.competitors = []

// GET UI ELEMS
let divForFlag = document.querySelectorAll(".competitor-info__flag");
divForFlag = Array.from(divForFlag);

let divForBetWindow = document.querySelectorAll(".bet-window__flag");
divForBetWindow = Array.from(divForBetWindow);

let spiner1 = document.querySelector(".spiner1");
let divAllCompetrInfo = document.querySelector(".wrapper-for-all");

const competitorsToFetch = divForFlag; // 4
const personsPromises = competitorsToFetch.map((competitor, i) => {
    return fetch("https://randomuser.me/api/");
});


async function fetchData(personsPromises) {
    const rawResults = await Promise.all(personsPromises);
    const toJSONPromises = rawResults.map(result => result.json())
    const allPersons = await Promise.all(toJSONPromises);

    return allPersons
}

fetchData(personsPromises).then((allPersons) => {
    storePersonsInWindowObj(allPersons)

    // competitors are now in window object, we can access them whenever we want

    // all these functions work with UI
    // and should be called here as a 
    const allFlagsForCompetitors = getAllFlagsEl(window.competitors);
    const allFlagsForBetWindow = getAllFlagsEl(window.competitors);

    divForFlag.forEach((item, i) => item.append(allFlagsForCompetitors[i]));

    divForBetWindow.forEach((item, i) => item.append(allFlagsForBetWindow[i]));

    getAllElNames(window.competitors).forEach((item, i) => allFlagsForCompetitors[i].after(item));

    getAllElNames(window.competitors).forEach((item, i) => allFlagsForBetWindow[i].after(item));


})

function storePersonsInWindowObj(allPersons) {
    let id = 0;
    allPersons.forEach((personToResolve) => {
        const personObjToStore = {
            name: getName(personToResolve),
            nat: getNat(personToResolve),
            id: id++
        }

        window.competitors.push(personObjToStore);

    })
}

function getAllFlagsEl(jeneralInfo) {
    const allNats = [];

    jeneralInfo.forEach(i => allNats.push(i.nat))

    const srcImgs = [avstralia, belgija, danija, velikobritania]

    let allFlagsImg = [];

    allNats.map((el, index) => {
        let ImgFlag = document.createElement("img");

        ImgFlag.src= srcImgs[index]

        allFlagsImg.push(ImgFlag);

        preloadImages(srcImgs, removeSpiner)

    })


    return allFlagsImg;
}


function getAllElNames(jeneralInfo) {
    const allElNames = [];

    jeneralInfo.forEach(item => {
        let elName = document.createElement("p");
        elName.innerText = item.name;
        allElNames.push(elName)
    });

    return allElNames;
}


function getName(data) {
    return `${data.results[0].name.first} ${data.results[0].name.last}`;
}

function getNat(data) {
    return data.results[0].nat
}


function removeSpiner() {
    window.flagsLoadedCount += 1;

    if (window.flagsLoadedCount === TOTAL_EXPECTED_FLAG_COUNT) {
        hideShowElements(spiner1, divAllCompetrInfo)

    }
}



// функция для скрытия и показа элемента на странице
function hideShowElements(hiddenEl, shownEl) {
    hiddenEl.style.display = "none";
    shownEl.style.display = "block";
}



//---------------------


