document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".decor-container");

  // daftar gambar dekorasi
  const images = ["1.png", "4.png", "5.png", "6.png", "7.png", "8.png"];

  const total = 25; // jumlah gambar dekorasi yang ingin ditampilkan

  for (let i = 0; i < total; i++) {
    const img = document.createElement("img");

    // pilih random file dari daftar
    img.src = images[Math.floor(Math.random() * images.length)];

    // ukuran random
    const size = Math.floor(Math.random() * 120) + 100; // antara 50px–130px
    img.style.width = `${size}px`;

    // posisi random
    img.style.top = `${Math.random() * 80}%`;   // posisi vertikal random
    img.style.left = `${Math.random() * 90}%`;  // posisi horizontal random

    // animasi delay random biar gak barengan
    img.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(img);
  }
});
