import slug1 from '../img/slug01.png';
import slug2 from '../img/slug2.png';
import slug3 from '../img/slug3.png';
import slug4 from '../img/slug4.png'

const imgs = [
    slug1, slug2, slug3, slug4
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
