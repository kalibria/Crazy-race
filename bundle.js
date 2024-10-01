/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/addImg.js":
/*!*******************************!*\
  !*** ./src/scripts/addImg.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addImgs: () => (/* binding */ addImgs)\n/* harmony export */ });\n/* harmony import */ var _img_slug01_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/slug01.png */ \"./src/img/slug01.png\");\n/* harmony import */ var _img_slug2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/slug2.png */ \"./src/img/slug2.png\");\n/* harmony import */ var _img_slug3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/slug3.png */ \"./src/img/slug3.png\");\n/* harmony import */ var _img_slug4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/slug4.png */ \"./src/img/slug4.png\");\n\n\n\n\nconst imgs = [_img_slug01_png__WEBPACK_IMPORTED_MODULE_0__, _img_slug2_png__WEBPACK_IMPORTED_MODULE_1__, _img_slug3_png__WEBPACK_IMPORTED_MODULE_2__, _img_slug4_png__WEBPACK_IMPORTED_MODULE_3__];\nconst competitors = document.querySelectorAll(\".competitor-info__competitor\");\nfunction addImgs(arr) {\n  arr.forEach((src, i) => {\n    let htmlImg = document.createElement(\"img\");\n    htmlImg.src = src;\n    htmlImg.className = \"competitor-info__competitor-img\";\n    competitors[i].append(htmlImg);\n    if (imgs[i] === \"./img/slug3.png\") {\n      htmlImg.className = \"competitor-info__competitor-img imgTransformNone\";\n    }\n  });\n}\naddImgs(imgs);\n\n//# sourceURL=webpack://crazy-race/./src/scripts/addImg.js?");

/***/ }),

/***/ "./src/scripts/balance/balance-logic.js":
/*!**********************************************!*\
  !*** ./src/scripts/balance/balance-logic.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   balanceManager: () => (/* binding */ balanceManager)\n/* harmony export */ });\n/* harmony import */ var _highlightWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../highlightWinner */ \"./src/scripts/highlightWinner.js\");\n/* harmony import */ var _placeABet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../placeABet */ \"./src/scripts/placeABet.js\");\n/* harmony import */ var _balance_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-ui */ \"./src/scripts/balance/balance-ui.js\");\n\n\n\nclass BalanceManager {\n  constructor(balance) {\n    this.INITIAL_BALANCE = balance;\n    this.balanceKeyInLocalStorage = 'balance';\n  }\n  getInitialBalance() {\n    return this.INITIAL_BALANCE;\n  }\n\n  // arrow functions bind to class context automatically\n  // so `this` inside this class is guaranteed to be the class object and not `window`\n  getBalance = () => {\n    let initialBalance = this.getInitialBalance();\n    const balanceInLS = +localStorage.getItem(this.balanceKeyInLocalStorage);\n    if (balanceInLS) {\n      return balanceInLS;\n    }\n    return initialBalance;\n  };\n  updateBalance = () => {\n    let currentBalance = this.getBalance();\n    const idFirstCompetitor = (0,_highlightWinner__WEBPACK_IMPORTED_MODULE_0__.findfirst)();\n    let newBalance;\n    if (idFirstCompetitor.includes(_placeABet__WEBPACK_IMPORTED_MODULE_1__.idBetFlag)) {\n      newBalance = currentBalance + 1000;\n    } else {\n      newBalance = currentBalance - 250;\n    }\n    _balance_ui__WEBPACK_IMPORTED_MODULE_2__.balanceUi.drawNewBalance(newBalance);\n    localStorage.setItem(\"balance\", newBalance);\n  };\n}\nconst balanceManager = new BalanceManager(1000);\n\n//# sourceURL=webpack://crazy-race/./src/scripts/balance/balance-logic.js?");

/***/ }),

/***/ "./src/scripts/balance/balance-ui.js":
/*!*******************************************!*\
  !*** ./src/scripts/balance/balance-ui.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   balanceUi: () => (/* binding */ balanceUi)\n/* harmony export */ });\n/* harmony import */ var _balance_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-logic */ \"./src/scripts/balance/balance-logic.js\");\n\nclass BalanceUi {\n  constructor() {\n    this.elInitialBalance = document.querySelector(\".balance-window__balance\");\n  }\n  drawNewBalance(someBalance) {\n    this.elInitialBalance.innerHTML = `$${someBalance}`;\n  }\n}\nconst balanceUi = new BalanceUi();\nbalanceUi.drawNewBalance(_balance_logic__WEBPACK_IMPORTED_MODULE_0__.balanceManager.getBalance());\n\n//# sourceURL=webpack://crazy-race/./src/scripts/balance/balance-ui.js?");

/***/ }),

/***/ "./src/scripts/displayCongratulations.js":
/*!***********************************************!*\
  !*** ./src/scripts/displayCongratulations.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCongratulations: () => (/* binding */ displayCongratulations)\n/* harmony export */ });\n/* harmony import */ var _placeABet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeABet */ \"./src/scripts/placeABet.js\");\n/* harmony import */ var _highlightWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlightWinner */ \"./src/scripts/highlightWinner.js\");\n\n\nfunction displayCongratulations() {\n  const idFirstCompetitor = (0,_highlightWinner__WEBPACK_IMPORTED_MODULE_1__.findfirst)();\n  const divForCongr = document.querySelector(\".wrapperForWinner\");\n  let textInDiv = document.querySelector(\".textWinner\");\n  console.log(\"textP\", textInDiv);\n  const winningAmount = document.createElement(\"p\");\n  winningAmount.className = \"textWinner\";\n  if (idFirstCompetitor.includes(_placeABet__WEBPACK_IMPORTED_MODULE_0__.idBetFlag)) {\n    textInDiv.innerHTML = \"CONGRATULATIONS!<br>YOU WON!\";\n    winningAmount.innerHTML = \"+ $1000\";\n    textInDiv.after(winningAmount);\n  } else {\n    textInDiv.innerHTML = \"VERY SORRY YOU LOST.<br>TRY AGAIN!\";\n    winningAmount.innerHTML = \"- $250\";\n    textInDiv.after(winningAmount);\n  }\n}\n\n//# sourceURL=webpack://crazy-race/./src/scripts/displayCongratulations.js?");

/***/ }),

/***/ "./src/scripts/getCompetitorInfo.js":
/*!******************************************!*\
  !*** ./src/scripts/getCompetitorInfo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_flag_avstraliya_enl_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/flag_avstraliya_enl.jpg */ \"./src/img/flag_avstraliya_enl.jpg\");\n/* harmony import */ var _img_flag_belgija_enl_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/flag_belgija_enl.jpg */ \"./src/img/flag_belgija_enl.jpg\");\n/* harmony import */ var _img_flag_danija_enl_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/flag_danija_enl.jpg */ \"./src/img/flag_danija_enl.jpg\");\n/* harmony import */ var _img_flag_velikobritanija_new_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/flag_velikobritanija_new.jpg */ \"./src/img/flag_velikobritanija_new.jpg\");\n/* harmony import */ var _preloadImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloadImages */ \"./src/scripts/preloadImages.js\");\n\n\n\n\n\nconst TOTAL_EXPECTED_FLAG_COUNT = 4;\nwindow.flagsLoadedCount = 0;\nwindow.competitors = [];\n\n// GET UI ELEMS\nlet divForFlag = document.querySelectorAll(\".competitor-info__flag\");\ndivForFlag = Array.from(divForFlag);\nlet divForBetWindow = document.querySelectorAll(\".bet-window__flag\");\ndivForBetWindow = Array.from(divForBetWindow);\nlet spiner1 = document.querySelector(\".spiner1\");\nlet divAllCompetrInfo = document.querySelector(\".wrapper-for-all\");\nlet betWindowHeader = document.querySelector(\".bet-window__text\");\nbetWindowHeader.style.animation = 'growShrink 2s infinite ease-in-out';\nconst competitorsToFetch = divForFlag; // 4\nconst personsPromises = competitorsToFetch.map((competitor, i) => {\n  return fetch(\"https://randomuser.me/api/\");\n});\nasync function fetchData(personsPromises) {\n  const rawResults = await Promise.all(personsPromises);\n  const toJSONPromises = rawResults.map(result => result.json());\n  const allPersons = await Promise.all(toJSONPromises);\n  return allPersons;\n}\nfetchData(personsPromises).then(allPersons => {\n  storePersonsInWindowObj(allPersons);\n\n  // competitors are now in window object, we can access them whenever we want\n\n  // all these functions work with UI\n  // and should be called here as a \n  const allFlagsForCompetitors = getAllFlagsEl(window.competitors);\n  const allFlagsForBetWindow = getAllFlagsEl(window.competitors);\n  divForFlag.forEach((item, i) => item.append(allFlagsForCompetitors[i]));\n  divForBetWindow.forEach((item, i) => item.append(allFlagsForBetWindow[i]));\n  getAllElNames(window.competitors).forEach((item, i) => allFlagsForCompetitors[i].after(item));\n  getAllElNames(window.competitors).forEach((item, i) => allFlagsForBetWindow[i].after(item));\n});\nfunction storePersonsInWindowObj(allPersons) {\n  let id = 0;\n  allPersons.forEach(personToResolve => {\n    const personObjToStore = {\n      name: getName(personToResolve),\n      nat: getNat(personToResolve),\n      id: id++\n    };\n    window.competitors.push(personObjToStore);\n  });\n}\nfunction getAllFlagsEl(jeneralInfo) {\n  const allNats = [];\n  jeneralInfo.forEach(i => allNats.push(i.nat));\n  const srcImgs = [_img_flag_avstraliya_enl_jpg__WEBPACK_IMPORTED_MODULE_0__, _img_flag_belgija_enl_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_flag_danija_enl_jpg__WEBPACK_IMPORTED_MODULE_2__, _img_flag_velikobritanija_new_jpg__WEBPACK_IMPORTED_MODULE_3__];\n  let allFlagsImg = [];\n  allNats.map((el, index) => {\n    let ImgFlag = document.createElement(\"img\");\n    ImgFlag.src = srcImgs[index];\n    allFlagsImg.push(ImgFlag);\n    (0,_preloadImages__WEBPACK_IMPORTED_MODULE_4__.preloadImages)(srcImgs, removeSpiner);\n  });\n  return allFlagsImg;\n}\nfunction getAllElNames(jeneralInfo) {\n  const allElNames = [];\n  jeneralInfo.forEach(item => {\n    let elName = document.createElement(\"p\");\n    elName.innerText = item.name;\n    allElNames.push(elName);\n  });\n  return allElNames;\n}\nfunction getName(data) {\n  return `${data.results[0].name.first} ${data.results[0].name.last}`;\n}\nfunction getNat(data) {\n  return data.results[0].nat;\n}\nfunction removeSpiner() {\n  window.flagsLoadedCount += 1;\n  if (window.flagsLoadedCount === TOTAL_EXPECTED_FLAG_COUNT) {\n    hideShowElements(spiner1, divAllCompetrInfo);\n  }\n}\n\n// функция для скрытия и показа элемента на странице\nfunction hideShowElements(hiddenEl, shownEl) {\n  hiddenEl.style.display = \"none\";\n  shownEl.style.display = \"block\";\n}\n\n//---------------------\n\n//# sourceURL=webpack://crazy-race/./src/scripts/getCompetitorInfo.js?");

/***/ }),

/***/ "./src/scripts/highlightWinner.js":
/*!****************************************!*\
  !*** ./src/scripts/highlightWinner.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findLastDuration: () => (/* binding */ findLastDuration),\n/* harmony export */   findfirst: () => (/* binding */ findfirst),\n/* harmony export */   highlightWinner: () => (/* binding */ highlightWinner)\n/* harmony export */ });\n/* harmony import */ var _whoFirstFinished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whoFirstFinished */ \"./src/scripts/whoFirstFinished.js\");\n\nfunction findfirst() {\n  const winnerAndLooser = (0,_whoFirstFinished__WEBPACK_IMPORTED_MODULE_0__.firstFinished)();\n  const idWinner = [];\n  for (let i = 0; i < winnerAndLooser.length - 1; i++) {\n    let id = winnerAndLooser[i].id;\n    idWinner.push(id);\n  }\n  return idWinner;\n}\nfunction findLastDuration() {\n  const winnerAndLooser = (0,_whoFirstFinished__WEBPACK_IMPORTED_MODULE_0__.firstFinished)();\n  const lastCompetitor = winnerAndLooser[winnerAndLooser.length - 1];\n  const lastCompetitorDuration = lastCompetitor.duration;\n  return lastCompetitorDuration;\n}\nfunction findElWithId() {\n  const idWinners = findfirst();\n  let elWithId = [];\n  idWinners.map(item => {\n    let itemElById = document.getElementById(item);\n    let cloneItem = itemElById.cloneNode(true);\n    cloneItem.className = \"winnerFlag\";\n    elWithId.push(cloneItem);\n  });\n  return elWithId;\n}\nfunction highlightWinner() {\n  const elWrapperForWinner = document.createElement(\"div\");\n  elWrapperForWinner.className = \"wrapperForWinner\";\n  const elWrapperForFlags = document.createElement(\"div\");\n  elWrapperForFlags.className = \"wrapperForFlags\";\n  elWrapperForWinner.append(elWrapperForFlags);\n  const field = document.querySelector(\".field\");\n  field.append(elWrapperForWinner);\n  const elWithId = findElWithId();\n  elWithId.forEach(item => elWrapperForFlags.append(item));\n  const textWinner = document.createElement(\"p\");\n  textWinner.className = \"textWinner\";\n  if (elWithId.length > 1) {\n    textWinner.innerText = \"WINNERS!\";\n  } else {\n    textWinner.innerText = \"WINNER!\";\n  }\n  ;\n  elWrapperForFlags.before(textWinner);\n}\n\n//# sourceURL=webpack://crazy-race/./src/scripts/highlightWinner.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _balance_balance_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance/balance-ui */ \"./src/scripts/balance/balance-ui.js\");\n/* harmony import */ var _balance_balance_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance/balance-logic */ \"./src/scripts/balance/balance-logic.js\");\n/* harmony import */ var _addImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addImg */ \"./src/scripts/addImg.js\");\n/* harmony import */ var _getCompetitorInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCompetitorInfo */ \"./src/scripts/getCompetitorInfo.js\");\n/* harmony import */ var _startAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startAnimation */ \"./src/scripts/startAnimation.js\");\n/* harmony import */ var _whoFirstFinished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whoFirstFinished */ \"./src/scripts/whoFirstFinished.js\");\n/* harmony import */ var _highlightWinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlightWinner */ \"./src/scripts/highlightWinner.js\");\n/* harmony import */ var _placeABet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./placeABet */ \"./src/scripts/placeABet.js\");\n/* harmony import */ var _tryAgain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tryAgain */ \"./src/scripts/tryAgain.js\");\n/* harmony import */ var _removeWinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./removeWinner */ \"./src/scripts/removeWinner.js\");\n/* harmony import */ var _resetBalance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resetBalance */ \"./src/scripts/resetBalance.js\");\n// class imports\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://crazy-race/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/placeABet.js":
/*!**********************************!*\
  !*** ./src/scripts/placeABet.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fixRate: () => (/* binding */ fixRate),\n/* harmony export */   idBetFlag: () => (/* binding */ idBetFlag)\n/* harmony export */ });\nconst allFlagsInBetWindow = Array.from(document.querySelectorAll(\".bet-window__flag\"));\nconst divWithFlags = document.querySelector(\".bet-window__wrapper\");\n\n// export const idBetFlag = [];\nlet idBetFlag;\nconst btnStart = document.querySelector(\".btn-start\");\nconst betWindowHeader = document.querySelector(\".bet-window__text\");\nfunction fixRate(event) {\n  const fixedFlag = event.target.closest(\"button\");\n  betWindowHeader.style.animation = '';\n  btnStart.disabled = false;\n  fixedFlag.classList = \"bet-window__flag-fixedBet\";\n  allFlagsInBetWindow.forEach(item => {\n    if (item !== fixedFlag) {\n      item.classList = \"bet-window__grayscale\";\n    }\n    item.setAttribute(\"disabled\", \"disabled\");\n  });\n  const indexFixedFlag = allFlagsInBetWindow.indexOf(fixedFlag);\n  // idBetFlag.push(window.competitors[indexFixedFlag].id)\n  idBetFlag = window.competitors[indexFixedFlag].id;\n}\ndivWithFlags.addEventListener(\"click\", fixRate);\n\n//# sourceURL=webpack://crazy-race/./src/scripts/placeABet.js?");

/***/ }),

/***/ "./src/scripts/preloadImages.js":
/*!**************************************!*\
  !*** ./src/scripts/preloadImages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   preloadImages: () => (/* binding */ preloadImages)\n/* harmony export */ });\nfunction preloadImages(sources, callback) {\n  let loadedImages = 0;\n  const totalImages = sources.length;\n  const images = [];\n  sources.forEach((source, index) => {\n    images[index] = new Image();\n    images[index].src = source;\n    images[index].onload = () => {\n      loadedImages++;\n      if (loadedImages === totalImages) {\n        callback();\n      }\n    };\n    images[index].onerror = () => {\n      loadedImages++;\n      if (loadedImages === totalImages) {\n        callback();\n      }\n    };\n  });\n}\n\n//# sourceURL=webpack://crazy-race/./src/scripts/preloadImages.js?");

/***/ }),

/***/ "./src/scripts/removeAttribute.js":
/*!****************************************!*\
  !*** ./src/scripts/removeAttribute.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeAttribute: () => (/* binding */ removeAttribute)\n/* harmony export */ });\nconst btnTryAgain = document.querySelector(\".btn-try-again\");\nfunction removeAttribute() {\n  btnTryAgain.removeAttribute(\"disabled\");\n}\n\n//# sourceURL=webpack://crazy-race/./src/scripts/removeAttribute.js?");

/***/ }),

/***/ "./src/scripts/removeWinner.js":
/*!*************************************!*\
  !*** ./src/scripts/removeWinner.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeWinner: () => (/* binding */ removeWinner)\n/* harmony export */ });\nfunction removeWinner() {\n  const divWinner = document.querySelector(\".wrapperForFlags\");\n  divWinner.remove();\n}\n\n//# sourceURL=webpack://crazy-race/./src/scripts/removeWinner.js?");

/***/ }),

/***/ "./src/scripts/resetBalance.js":
/*!*************************************!*\
  !*** ./src/scripts/resetBalance.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetBalance: () => (/* binding */ resetBalance)\n/* harmony export */ });\n/* harmony import */ var _balance_balance_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance/balance-logic */ \"./src/scripts/balance/balance-logic.js\");\n\nfunction resetBalance() {\n  const initialBalance = _balance_balance_logic__WEBPACK_IMPORTED_MODULE_0__.balanceManager.INITIAL_BALANCE;\n  localStorage.balance = initialBalance;\n  let balance = document.querySelector(\".balance-window__balance\");\n  balance.innerHTML = `$${initialBalance}`;\n}\nconst btnReset = document.querySelector(\".btn-reset\");\nbtnReset.addEventListener(\"click\", resetBalance);\n\n//# sourceURL=webpack://crazy-race/./src/scripts/resetBalance.js?");

/***/ }),

/***/ "./src/scripts/startAnimation.js":
/*!***************************************!*\
  !*** ./src/scripts/startAnimation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allCompetitors: () => (/* binding */ allCompetitors),\n/* harmony export */   startMoving: () => (/* binding */ startMoving)\n/* harmony export */ });\n/* harmony import */ var _highlightWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlightWinner */ \"./src/scripts/highlightWinner.js\");\n/* harmony import */ var _whoFirstFinished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whoFirstFinished */ \"./src/scripts/whoFirstFinished.js\");\n/* harmony import */ var _removeAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeAttribute */ \"./src/scripts/removeAttribute.js\");\n/* harmony import */ var _removeWinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeWinner */ \"./src/scripts/removeWinner.js\");\n/* harmony import */ var _displayCongratulations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayCongratulations */ \"./src/scripts/displayCongratulations.js\");\n/* harmony import */ var _balance_balance_logic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balance/balance-logic */ \"./src/scripts/balance/balance-logic.js\");\n\n\n\n\n\n\nconst btnStart = document.querySelector(\".btn-start\");\nconst allCompetitors = document.querySelectorAll(\".competitor-info__competitor\");\nbtnStart.addEventListener(\"click\", startMoving);\nbtnStart.setAttribute(\"disabled\", \"disabled\");\nfunction startMoving(event) {\n  event.currentTarget.setAttribute(\"disabled\", \"disabled\");\n  allCompetitors.forEach((item, i) => {\n    let randomX1 = Math.floor(Math.random() * 10) / 10;\n    let randomY1 = Math.floor(Math.random() * 10) / 10;\n    let randomX2 = Math.floor(Math.random() * 10) / 10;\n    let randomY2 = Math.floor(Math.random() * 10) / 10;\n    let randomDuration = Math.floor(Math.random() * 10);\n    window.competitors[i].duration = randomDuration;\n    item.style.animation = `runLeft ${randomDuration}s forwards cubic-bezier(${randomX1}, ${randomY1}, ${randomX2}, ${randomY2})`;\n  });\n  const lastDurMs = (0,_highlightWinner__WEBPACK_IMPORTED_MODULE_0__.findLastDuration)() * 1000;\n  (0,_whoFirstFinished__WEBPACK_IMPORTED_MODULE_1__.firstFinished)();\n  setTimeout(_highlightWinner__WEBPACK_IMPORTED_MODULE_0__.highlightWinner, lastDurMs);\n  setTimeout(_balance_balance_logic__WEBPACK_IMPORTED_MODULE_5__.balanceManager.updateBalance, lastDurMs + 3000);\n  setTimeout(_removeAttribute__WEBPACK_IMPORTED_MODULE_2__.removeAttribute, lastDurMs + 3000);\n  setTimeout(_removeWinner__WEBPACK_IMPORTED_MODULE_3__.removeWinner, lastDurMs + 3000);\n  setTimeout(_displayCongratulations__WEBPACK_IMPORTED_MODULE_4__.displayCongratulations, lastDurMs + 3000);\n}\n\n//# sourceURL=webpack://crazy-race/./src/scripts/startAnimation.js?");

/***/ }),

/***/ "./src/scripts/tryAgain.js":
/*!*********************************!*\
  !*** ./src/scripts/tryAgain.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   returnToStart: () => (/* binding */ returnToStart)\n/* harmony export */ });\nconst btnTryAgain = document.querySelector(\".btn-try-again\");\nfunction returnToStart() {\n  document.querySelector(\".wrapperForWinner\").remove();\n  window.location.reload();\n}\nbtnTryAgain.addEventListener(\"click\", returnToStart);\n\n//# sourceURL=webpack://crazy-race/./src/scripts/tryAgain.js?");

/***/ }),

/***/ "./src/scripts/whoFirstFinished.js":
/*!*****************************************!*\
  !*** ./src/scripts/whoFirstFinished.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   firstFinished: () => (/* binding */ firstFinished)\n/* harmony export */ });\nfunction firstFinished() {\n  const newArr = [...window.competitors];\n  newArr.sort((a, b) => a.duration - b.duration);\n  let firstLastComp = [];\n  firstLastComp.push(newArr[0]);\n  if (newArr[0].duration === newArr[1].duration) {\n    firstLastComp.push(newArr[1]);\n    if (newArr[0].duration === newArr[2].duration) {\n      firstLastComp.push(newArr[2]);\n    }\n  }\n  firstLastComp.push(newArr[3]);\n  return firstLastComp;\n}\n\n//# sourceURL=webpack://crazy-race/./src/scripts/whoFirstFinished.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://crazy-race/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/img/flag_avstraliya_enl.jpg":
/*!*****************************************!*\
  !*** ./src/img/flag_avstraliya_enl.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eca16a1245e0a95ba1db.jpg\";\n\n//# sourceURL=webpack://crazy-race/./src/img/flag_avstraliya_enl.jpg?");

/***/ }),

/***/ "./src/img/flag_belgija_enl.jpg":
/*!**************************************!*\
  !*** ./src/img/flag_belgija_enl.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8844aa19e3bad804934e.jpg\";\n\n//# sourceURL=webpack://crazy-race/./src/img/flag_belgija_enl.jpg?");

/***/ }),

/***/ "./src/img/flag_danija_enl.jpg":
/*!*************************************!*\
  !*** ./src/img/flag_danija_enl.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6197bfb512edf112ddf6.jpg\";\n\n//# sourceURL=webpack://crazy-race/./src/img/flag_danija_enl.jpg?");

/***/ }),

/***/ "./src/img/flag_velikobritanija_new.jpg":
/*!**********************************************!*\
  !*** ./src/img/flag_velikobritanija_new.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"080a36d92e9d2389676a.jpg\";\n\n//# sourceURL=webpack://crazy-race/./src/img/flag_velikobritanija_new.jpg?");

/***/ }),

/***/ "./src/img/slug01.png":
/*!****************************!*\
  !*** ./src/img/slug01.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"852b0ee33ca8d42aefff.png\";\n\n//# sourceURL=webpack://crazy-race/./src/img/slug01.png?");

/***/ }),

/***/ "./src/img/slug2.png":
/*!***************************!*\
  !*** ./src/img/slug2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7739a155b3f16514cd61.png\";\n\n//# sourceURL=webpack://crazy-race/./src/img/slug2.png?");

/***/ }),

/***/ "./src/img/slug3.png":
/*!***************************!*\
  !*** ./src/img/slug3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb77cb8c20f86f9851ed.png\";\n\n//# sourceURL=webpack://crazy-race/./src/img/slug3.png?");

/***/ }),

/***/ "./src/img/slug4.png":
/*!***************************!*\
  !*** ./src/img/slug4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50289dd4531c8ea4ccd8.png\";\n\n//# sourceURL=webpack://crazy-race/./src/img/slug4.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/styles.scss");
/******/ 	
/******/ })()
;