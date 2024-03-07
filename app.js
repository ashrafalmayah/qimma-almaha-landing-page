const mouseFollow = document.getElementById("mouseFollow");
const links = document.querySelectorAll("a, label");
const logo = document.querySelector(".logo");
const languageSwitch = document.getElementById("languageSwitch");

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang == "en" ? "ltr" : "rtl";
    languageSwitch.checked = lang == "en" ? true : false;
    localStorage.setItem("lang", lang);
}

function addRotate() {
    logo.classList.add("rotate");
}

function removeRotate() {
    logo.classList.remove("rotate");
}
logo.addEventListener("mouseover", addRotate);
logo.addEventListener("click", addRotate);
logo.addEventListener("transitionend", removeRotate);

document.addEventListener("mousemove", (e) => {
    mouseFollow.animate(
        {
            top: `${e.clientY}px`,
            left: `${e.clientX}px`,
        },
        { delay: 50, fill: "forwards" }
    );
    // mouseFollow.style.top = `${e.clientY}px`;
    // mouseFollow.style.left = `${e.clientX}px`;
});

document.addEventListener("mouseenter", (e) => {
    mouseFollow.style.top = `${e.clientY}px`;
    mouseFollow.style.left = `${e.clientX}px`;
    mouseFollow.style.display = "";
});
document.addEventListener("mouseleave", () => {
    mouseFollow.style.display = "none";
});

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        mouseFollow.style.width = "5rem";
    });
    link.addEventListener("mouseleave", () => {
        mouseFollow.style.width = "";
    });
});

window.addEventListener("load", () => {
    if (localStorage.getItem("lang") != null) {
        changeLanguage(localStorage.getItem("lang"));
    } else {
        if (navigator.language == "ar") changeLanguage("ar");
        else changeLanguage("en");
    }
});

languageSwitch.addEventListener("change", () => {
    changeLanguage(languageSwitch.checked ? "en" : "ar");
});
