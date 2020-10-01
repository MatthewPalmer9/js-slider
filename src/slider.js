let i = 0;
const images = [
    "./src/assets/img-1.jpg",
    "./src/assets/img-2.jpg",
    "./src/assets/img-3.jpg"
];
let time = 5000;

let slideImg = document.slide
slideImg.src = images[i];

// Fade out/in function
function fadeOutAndfadeIn(image, newImgSrc){
	let opacity = 1;
    image.style.opacity = opacity;

    setTimeout(() => { 
        image.src = newImgSrc
        console.log(image);
    }, 1000);
}

function changeImg(){
    i < images.length - 1 ? i++ : i = 0;
    fadeOutAndfadeIn(slideImg, images[i])
    setTimeout("changeImg()", time);
}

window.onload=changeImg()