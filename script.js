function sprayFlowers() {
    for (let i = 0; i < 20; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        document.body.appendChild(flower);
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;
        flower.style.opacity = 1;
        flower.style.transition = "opacity 2s ease-in-out";
        setTimeout(() => {
            flower.style.opacity = 0;
            setTimeout(() => document.body.removeChild(flower), 2000);
        }, 100);
    }
}