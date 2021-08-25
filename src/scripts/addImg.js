const imgs = [
    "./img/slug1.png",
    "./img/slug2.png",
    "./img/slug3.png",
    "./img/slug4.png",
];

console.log("imgs", imgs);

const competitors = document.querySelectorAll(".competitor-info__competitor");
console.log(competitors);

export function addImgs(arr) {

    const imgsHtml = arr.map((src, i) => {
        let htmlImg = document.createElement("img");
        htmlImg.src = src;
        htmlImg.className = "competitor-info__competitor-img";
        competitors[i].append(htmlImg);

    })

};

addImgs(imgs);