const imgs = [
    "./img/slug01.png",
    "./img/slug2.png",
    "./img/slug3.png",
    "./img/slug4.png",
];

const competitors = document.querySelectorAll(".competitor-info__competitor");

export function addImgs(arr) {
    arr.forEach((src, i) => {
        let htmlImg = document.createElement("img");
        htmlImg.src = src;
        htmlImg.className = "competitor-info__competitor-img";
        competitors[i].append(htmlImg);

        if (imgs[i] === "./img/slug3.png") {
            htmlImg.className = "competitor-info__competitor-img imgTransformNone";
        }
    })
}

addImgs(imgs);
