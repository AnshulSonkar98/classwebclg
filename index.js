  document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".glass-card");
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

     
