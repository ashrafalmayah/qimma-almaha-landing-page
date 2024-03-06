const mouseFollow = document.getElementById("mouseFollow");
const links = document.querySelectorAll("a");
const logo = document.querySelector(".logo");

function addRotate() {
    logo.classList.add("rotate");
}

function removeRotate() {
    logo.classList.remove("rotate");
}
logo.addEventListener("mouseover", addRotate);
logo.addEventListener("click", addRotate);
logo.addEventListener('transitionend', removeRotate);

document.addEventListener("mousemove", (e) => {
    mouseFollow.animate(
        {
            top: `${e.clientY}px`,
            left: `${e.clientX}px`,
        },
        { delay: 50, fill: "forwards" }
    );
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
