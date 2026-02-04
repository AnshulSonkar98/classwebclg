const core = document.querySelector(".core");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;

    core.style.transform = `translate(${x}px, ${y}px)`;
});