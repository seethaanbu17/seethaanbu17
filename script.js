// ===========================
// Typing Animation
// ===========================

const words = [
    "Java Full Stack Developer",
    "Python Developer",
    "Frontend Developer",
    "Angular Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length)
            wordIndex = 0;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===========================
// Scroll Reveal
// ===========================

const revealElements = document.querySelectorAll(
".glass-card,.project,.skill-grid div,.left,.right,form");

function reveal() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.style.opacity="1";
            el.style.transform="translateY(0px)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();


// ===========================
// Active Navbar
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;
        const height=section.offsetHeight;

        if(pageYOffset>=top){
            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }

    });

});


// ===========================
// Sticky Navbar Blur
// ===========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>60){

        header.style.background="rgba(7,10,25,.85)";
        header.style.backdropFilter="blur(25px)";

    }

    else{

        header.style.background="rgba(8,12,35,.55)";

    }

});


// ===========================
// Cursor Glow
// ===========================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="#00E5FF";
glow.style.boxShadow="0 0 30px #00E5FF";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";
    glow.style.top=e.clientY-9+"px";

});


// ===========================
// Floating Particles
// ===========================

function createParticle(){

    const particle=document.createElement("span");

    particle.style.position="fixed";
    particle.style.width=Math.random()*8+4+"px";
    particle.style.height=particle.style.width;

    particle.style.background="rgba(255,255,255,.4)";
    particle.style.borderRadius="50%";

    particle.style.left=Math.random()*window.innerWidth+"px";

    particle.style.top=window.innerHeight+"px";

    particle.style.pointerEvents="none";

    particle.style.zIndex="-1";

    document.body.appendChild(particle);

    const duration=Math.random()*4000+4000;

    particle.animate([

        {
            transform:"translateY(0px)",
            opacity:1
        },

        {
            transform:"translateY(-110vh)",
            opacity:0
        }

    ],{

        duration:duration

    });

    setTimeout(()=>{

        particle.remove();

    },duration);

}

setInterval(createParticle,300);


// ===========================
// Smooth Button Hover
// ===========================

document.querySelectorAll(".btn,.btn2,button")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});