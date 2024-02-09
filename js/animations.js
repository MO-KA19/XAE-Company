// buttons animations
let primeBtn = document.querySelector(".prime-btn");
primeBtn.addEventListener("mouseover", () => {
    primeBtn.classList.toggle("animate__heartBeat");
});


let icons = Array.from(document.querySelectorAll(".card-body img")).concat(Array.from(document.querySelectorAll(".services img")));
icons.forEach((i)=>{
    i.addEventListener("mouseover", () => {
        i.classList.add("animate__animated");
        i.classList.add("animate__flip");
    });
});



// adding animation class for all sections
let AllSections = document.querySelectorAll("section");
AllSections.forEach((sec) => {
    sec.classList.add("animate__animated")
})


// Fade up animation setting
function fadeUp(section, posY) {
let selector = document.querySelector(section)


if (this.scrollY > posY) {
    selector.style.setProperty("visibility", "visible");
    selector.style.setProperty("animation-duration", "1.3s");
    selector.style.setProperty('animation-name', 'fadeInUp');
    };
};



function getPosY(section) {
    let selection = document.querySelector(section);
    let pos = selection.offsetTop;
    return pos - 650;
};



let sections = [".features",".services",".blog",".market",".contact", 
".newspaper", ".workflow", ".achives"];
window.onscroll = () => {
    for (let i=0; i < sections.length; i++) {
        fadeUp(sections[i], getPosY(sections[i]));
    };
};


// setting copy right year
let element = document.querySelector(".year");
let date = new Date();
let year = date.getFullYear();
element.innerHTML = year;




// setting kursor effect
let kurSor = new kursor({
    type: 3,
    color: "#EEA534",
    removeDefaultCursor: false
});