let sectionAbout = document.querySelector(".items");
let leftdiv = document.querySelector(".left-content");
let rigthdiv = document.querySelector(".rigth-content");
let startadd = false;
window.addEventListener("scroll", () => {
    if (window.scrollY >= sectionAbout.offsetTop) {
        if (!startadd) {
            leftdiv.style.transform = "translate(0px)";
            leftdiv.style.opacity = "1";
            rigthdiv.style.transform = "translate(0px)";
            rigthdiv.style.opacity = "1";
        }
        startadd = false;
    }
});
function Stylee(el) {
    el.style.transform = "translate(200px)";
    el.style.transition = "2s";
}
