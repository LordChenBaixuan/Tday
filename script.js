// Smooth scroll ke footer dengan easing
function scrollToFooter() {
  const footer = document.getElementById('footer');
  const targetPosition = footer.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800; // durasi animasi (ms)
  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Fungsi easing (halus, seperti CSS ease-in-out)
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
// Saat halaman baru dimuat → reset dan fade in
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out"); // pastikan tidak ada sisa
  document.body.classList.add("fade-in");
});

// Efek fade-out saat klik link
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const target = this.getAttribute("href");

    if (target && target !== "#" && !target.startsWith("javascript")) {
      e.preventDefault();

      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 600); // sesuai durasi CSS
    }
  });
});

