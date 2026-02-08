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



// const quantum = document.querySelector('.quantum');

// document.addEventListener('mousemove', (e) => {
//   const x = (window.innerWidth / 2 - e.clientX) / 20;
//   const y = (window.innerHeight / 2 - e.clientY) / 20;

//   quantum.style.transform =
//     `rotateY(${x}deg) rotateX(${y}deg)`;
// });




const canvas = document.getElementById("neural");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const nodes = [];
const NODE_COUNT = 120;

class Node {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.radius = 2;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00f7ff";
    ctx.fill();
  }
}

for (let i = 0; i < NODE_COUNT; i++) {
  nodes.push(new Node());
}

function connect() {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.strokeStyle = `rgba(0,247,255,${1 - dist / 120})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  nodes.forEach(n => {
    n.move();
    n.draw();
  });

  connect();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});