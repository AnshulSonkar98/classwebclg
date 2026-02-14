// const scene = document.querySelector('.scene');

// document.addEventListener('mousemove', (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 20;
//   const y = (e.clientY / window.innerHeight - 0.5) * 20;

//   scene.style.transform = `rotateX(${ -y }deg) rotateY(${ x }deg)`;
// });





// const light = document.querySelector('.cursor-light');
// const panel = document.querySelector('.panel');

// document.addEventListener('mousemove', (e) => {

//     /* Light Follow */
//     light.style.left = e.clientX + 'px';
//     light.style.top = e.clientY + 'px';

//     /* 3D Tilt */
//     const x = (e.clientX / window.innerWidth - 0.5) * 12;
//     const y = (e.clientY / window.innerHeight - 0.5) * 12;

//     panel.style.transform =
//         `rotateX(${ -y }deg) rotateY(${ x }deg)`;
// });


/* Cursor Light Follow */

const light = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
    light.style.left = e.clientX + 'px';
    light.style.top = e.clientY + 'px';
});


/* Scroll Reveal */

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            section.classList.add('active');
        }
    });
});
