
const nav = document.querySelector("#nav-link-wrapper");
const cross = document.querySelector(".crossNav");

// ====================== Humburger.
const humburger = document.querySelector(".humburger");
const lineHum = [
    document.querySelector("#hum-satu"),
    document.querySelector("#hum-dua"),
    document.querySelector("#hum-tiga")
]

humburger.addEventListener("click", function() {
    lineHum[0].classList.toggle("invert-rotated");
    lineHum[1].classList.toggle("d-none");
    lineHum[2].classList.toggle("rotated");
    humburger.classList.toggle("humUp");
    nav.classList.toggle("d-flex");
    nav.classList.toggle("showNav");
});


// ====================== Slider

const buttonSlide = [
    document.querySelector("#firstSlide"), 
    document.querySelector("#secondSlide"),
    document.querySelector("#thirdSlide")
]

const heroImage = [
    document.querySelector("#firstImage"),
    document.querySelector("#secondImage"),
    document.querySelector("#thirdImage")
]

if (buttonSlide[0].checked) {
    heroImage[0].classList.add("d-flex");
    heroImage[1].style.display = "none";
    heroImage[2].style.display = "none";

}

if (buttonSlide[1].checked) {
    heroImage[1].classList.add("d-flex");
    heroImage[0].style.display = "none";
    heroImage[2].style.display = "none";
}

if (buttonSlide[2].checked) {
    heroImage[2].classList.add("d-flex");
    heroImage[0].style.display = "none";
    heroImage[1].style.display = "none";
}

buttonSlide[0].addEventListener("click", function(){
    heroImage[0].classList.add("d-flex");
    heroImage[0].classList.remove("d-none");

    heroImage[1].classList.remove("d-flex");
    heroImage[1].classList.add("d-none");

    heroImage[2].classList.remove("d-flex");
    heroImage[2].classList.add("d-none");
});

buttonSlide[1].addEventListener("click", function(){
    heroImage[1].classList.add("d-flex");
    heroImage[1].classList.remove("d-none");

    heroImage[0].classList.remove("d-flex");
    heroImage[0].classList.add("d-none");

    heroImage[2].classList.remove("d-flex");
    heroImage[2].classList.add("d-none");
});

buttonSlide[2].addEventListener("click", function(){
    heroImage[2].classList.add("d-flex");
    heroImage[2].classList.remove("d-none");

    heroImage[0].classList.remove("d-flex");
    heroImage[0].classList.add("d-none");

    heroImage[1].classList.remove("d-flex");
    heroImage[1].classList.add("d-none");
});














