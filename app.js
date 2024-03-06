const mouseFollow = document.getElementById("mouseFollow");

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
