export function otherFeatures() {
    var toTheTop = false
    var backContainer = document.getElementById("backContainer");
    backContainer.addEventListener("click", () => {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        toTheTop = true;
        backContainer.opacity = 0;
        setTimeout(() => {
            toTheTop = false;
        }, 1000);
    });

    let currentScrollTop = 0;
    let targetScrollTop = 0;
    let isScrolling = false;

    function smoothScroll() {
        if (!isScrolling) return;

        const distance = (targetScrollTop - currentScrollTop) * 0.1;
        currentScrollTop += distance;

        backContainer.style.transform = `translateY(${-distance}px)`;

        if (Math.abs(distance) < 0.3) {
            isScrolling = false;
        } else {
            requestAnimationFrame(smoothScroll);
        }
    }

    document.addEventListener("scroll", (value) => {
        targetScrollTop = value.target.scrollingElement.scrollTop;
        if (targetScrollTop >= 600 && !toTheTop) {
            backContainer.style.opacity = 1;
            backContainer.style.animation = "none"; // Disable wiggle during inertia
        } else {
            backContainer.style.opacity = 0;
            backContainer.style.animation = "none";
        }

        if (!isScrolling) {
            isScrolling = true;
            smoothScroll();
        }
    });
}
