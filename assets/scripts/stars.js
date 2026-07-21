document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("stars");

    const starDivisor = 2000;
    const totalStars = Math.floor(
        (window.innerWidth * window.innerHeight) / starDivisor,
    );

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Randomization
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        const duration = Math.random() * 3 + 1;
        const delay = Math.random() * 4;
        star.style.setProperty("--duration", `${duration}s`);
        star.style.animationDelay = `${delay}s`;

        container.appendChild(star);
    }
});
