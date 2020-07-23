const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navbar");



hamburger.addEventListener("click", () => {
    navigation.classList.toggle("toggle")
    navigation.classList.toggle("navbar")
});

