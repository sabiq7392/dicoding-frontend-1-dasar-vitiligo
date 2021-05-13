const humburger = document.querySelector(".humburger");
const nav = document.querySelector("#nav-link-wrapper");
const cross = document.querySelector(".crossNav");

humburger.addEventListener("click", function() {
    nav.style.animation ="showNav 1000ms";
    nav.style.display = "flex";
});

cross.addEventListener("click", function() {
    nav.style.animation = "hideNav 1000ms";
    nav.addEventListener("transitionend", function(e) { 
        nav.style.display = "none";
    })
});

// const mediaQuariesXL = window.matchMedia("(min-width: 992px)");
// const mediaQuariesLG = window.matchMedia("(max-width: 991px)");

// if (mediaQuariesXL.matches) {
//     nav.style.display = "flex";
// }

