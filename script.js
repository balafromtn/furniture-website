function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
// Cursor tracker
document.addEventListener("mousemove", function (e) {
  const cursor = document.querySelector(".custom-cursor");
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  createDustParticle(e.clientX, e.clientY);
});


function createDustParticle(x, y) {
  const particle = document.createElement("div");
  particle.classList.add("dust-particle");
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Random movement
  const dx = (Math.random() - 0.5) * 60;
  const dy = (Math.random() - 0.5) * 60;
  particle.style.transform = `translate(${dx}px, ${dy}px) scale(0.5)`;

  document.body.appendChild(particle);

  // Remove after animation
  setTimeout(() => {
    particle.remove();
  }, 800);
}

