// start states
let stats = document.querySelectorAll(".stats ul > li h3");
let section = document.querySelector(".stats");
let flag = false;

// Create an Intersection Observer
let observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when at least 50% of the target is visible
});

// Start observing the section
observer.observe(section);

// Intersection Observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !flag) {
            stats.forEach((st) => {
                increase(st);
            });

            flag = true;
        }
    });
}


// the increase function which will increase the numbers
function increase(el) {
    let goal = el.getAttribute("data-goal");
    let counter = setInterval(() => {
        el.textContent ++

        if (el.textContent == goal) {
            clearInterval(counter);
        };
    }, 2000 / goal);
};