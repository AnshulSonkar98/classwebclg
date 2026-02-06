// const core = document.querySelector(".core");

// document.addEventListener("mousemove", (e) => {
//     const x = (window.innerWidth / 2 - e.clientX) / 20;
//     const y = (window.innerHeight / 2 - e.clientY) / 20;

//     core.style.transform = `translate(${x}px, ${y}px)`;
// });
// const core = document.querySelector('.core');

// document.addEventListener('mousemove', (e) => {
//   const x = (window.innerWidth / 2 - e.clientX) / 25;
//   const y = (window.innerHeight / 2 - e.clientY) / 25;

//   core.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
// });
const quantum = document.querySelector('.quantum');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 20;
  const y = (window.innerHeight / 2 - e.clientY) / 20;

  quantum.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;
});