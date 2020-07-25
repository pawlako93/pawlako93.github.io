const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navbar");
const loader = document.querySelector(".loader");



hamburger.addEventListener("click", () => {
    navigation.classList.toggle("toggle")
    navigation.classList.toggle("navbar")
});

window.addEventListener("load", () => {
    loader.className += "hidden";
    
})
