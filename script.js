/* =========================
   STICKY HEADER
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(header){
        header.classList.toggle(
            "sticky",
            window.scrollY > 50
        );
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach((section)=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* =========================
   BUTTON EFFECT
========================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        if(btn.classList.contains("no-loading")) return;

        const original =
        btn.innerHTML;

        btn.innerHTML = "Loading...";

        setTimeout(() => {

            btn.innerHTML =
            "Success ✓";

            setTimeout(() => {

                btn.innerHTML =
                original;

            },1000);

        },1000);

    });

});


/* =========================
   BMI CALCULATOR
========================= */

function calculateBMI(){

    let feet =
    document.getElementById("feet");

    let inches =
    document.getElementById("inches");

    let weight =
    document.getElementById("weight");

    let result =
    document.getElementById("result");

    if(!feet || !inches || !weight || !result) return;

    let totalInches =
    (feet.value * 12) + Number(inches.value);

    let meters =
    totalInches * 0.0254;

    let bmi =
    weight.value / (meters * meters);

    bmi = bmi.toFixed(1);

    if(bmi < 18.5){

        result.innerHTML =
        `Your BMI is ${bmi} (Underweight)`;

    }

    else if(bmi < 25){

        result.innerHTML =
        `Your BMI is ${bmi} (Normal)`;

    }

    else if(bmi < 30){

        result.innerHTML =
        `Your BMI is ${bmi} (Overweight)`;

    }

    else{

        result.innerHTML =
        `Your BMI is ${bmi} (Obese)`;

    }

}


/* =========================
   COUNTER ON SCROLL
========================= */

const counters =
document.querySelectorAll(".count");

let counterStarted = false;

function startCounter(){

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection) return;

    const sectionTop =
    statsSection.getBoundingClientRect().top;

    const triggerPoint =
    window.innerHeight - 100;

    if(sectionTop < triggerPoint &&
    !counterStarted){

        counters.forEach((counter) => {

            const updateCounter = () => {

                const target =
                +counter.dataset.target;

                const current =
                +counter.innerText;

                const increment =
                target / 100;

                if(current < target){

                    counter.innerText =
                    Math.ceil(current + increment);

                    setTimeout(updateCounter,25);

                }

                else{

                    counter.innerText =
                    target + "+";

                }

            };

            updateCounter();

        });

        counterStarted = true;

    }

}

window.addEventListener(
    "scroll",
    startCounter
);

startCounter();


/* =========================
   SIGNUP FORM
========================= */

const signupBtn =
document.getElementById("signupBtn");

const signupForm =
document.getElementById("signupForm");

if(signupBtn && signupForm){

    signupBtn.addEventListener("click", () => {

        signupForm.classList.toggle("active");

    });

}


/* =========================
   TOP BUTTON
========================= */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }

        else{

            topBtn.style.display = "none";

        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


/* =========================
   HAMBURGER MENU
========================= */

const menuToggle =
document.querySelector(".menu-toggle");

const nav =
document.querySelector("nav");

if(menuToggle && nav){

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* =========================
   CLOSE MENU
========================= */

document.querySelectorAll(
"nav ul li a"
).forEach((link) => {

    link.addEventListener("click", () => {

        if(nav){
            nav.classList.remove("active");
        }

    });

});


/* =========================
   CLICK OUTSIDE
========================= */

document.addEventListener("click", (e) => {

    if(
        menuToggle &&
        nav &&
        !menuToggle.contains(e.target) &&
        !nav.contains(e.target)
    ){

        nav.classList.remove("active");

    }

});


/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.querySelector(".cursor");

const cursorBorder =
document.querySelector(".cursor-border");

if(window.innerWidth > 768){

    document.addEventListener("mousemove",(e)=>{

        if(cursor && cursorBorder){

            cursor.style.left =
            e.clientX + "px";

            cursor.style.top =
            e.clientY + "px";

            cursorBorder.style.left =
            e.clientX + "px";

            cursorBorder.style.top =
            e.clientY + "px";

        }

    });

}


/* =========================
   CURSOR HOVER
========================= */

const hoverItems =
document.querySelectorAll(
"a, button, .btn, .program-card, .trainer-card"
);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(cursor && cursorBorder){

            cursor.style.width = "28px";
            cursor.style.height = "28px";

            cursorBorder.style.width = "60px";
            cursorBorder.style.height = "60px";

        }

    });

    item.addEventListener("mouseleave",()=>{

        if(cursor && cursorBorder){

            cursor.style.width = "18px";
            cursor.style.height = "18px";

            cursorBorder.style.width = "40px";
            cursorBorder.style.height = "40px";

        }

    });

});


/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if(progressBar){

        const scrollTop =
        document.documentElement.scrollTop;

        const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const scrollPercent =
        (scrollTop / scrollHeight) * 100;

        progressBar.style.width =
        scrollPercent + "%";

    }

});


/* =========================
   ACTIVE NAVBAR LINKS
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


/* =========================
   HERO TYPING EFFECT
========================= */

const textArray = [

    "BUILD YOUR BODY",
    "TRAIN LIKE A BEAST",
    "NO PAIN NO GAIN",
    "PUSH YOUR LIMITS"

];

const typingElement =
document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;

function heroTyping(){

    if(!typingElement) return;

    if(charIndex <
    textArray[textIndex].length){

        typingElement.innerHTML +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(heroTyping,100);

    }

    else{

        setTimeout(heroErase,1500);

    }

}

function heroErase(){

    if(charIndex > 0){

        typingElement.innerHTML =
        textArray[textIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(heroErase,50);

    }

    else{

        textIndex++;

        if(textIndex >= textArray.length){

            textIndex = 0;

        }

        setTimeout(heroTyping,300);

    }

}

heroTyping();


/* =========================
   ABOUT TYPING
========================= */

const aboutTexts = [

    "ABOUT FITZONE",
    "BEST FITNESS EXPERIENCE",
    "TRAIN WITH PROFESSIONALS",
    "YOUR FITNESS JOURNEY"

];

const aboutTyping =
document.querySelector(".about-typing");

let aboutTextIndex = 0;
let aboutCharIndex = 0;

function aboutType(){

    if(!aboutTyping) return;

    if(aboutCharIndex <
    aboutTexts[aboutTextIndex].length){

        aboutTyping.innerHTML +=
        aboutTexts[aboutTextIndex]
        .charAt(aboutCharIndex);

        aboutCharIndex++;

        setTimeout(aboutType,100);

    }

    else{

        setTimeout(aboutErase,1500);

    }

}

function aboutErase(){

    if(aboutCharIndex > 0){

        aboutTyping.innerHTML =
        aboutTexts[aboutTextIndex]
        .substring(
            0,
            aboutCharIndex - 1
        );

        aboutCharIndex--;

        setTimeout(aboutErase,50);

    }

    else{

        aboutTextIndex++;

        if(aboutTextIndex >= aboutTexts.length){

            aboutTextIndex = 0;

        }

        setTimeout(aboutType,300);

    }

}

aboutType();



/* =========================
   LOADER
========================= */

window.addEventListener("load", ()=>{

    const loader =
    document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },2500);

});


/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonials(){

    testimonials.forEach((item)=>{

        item.classList.remove("active");

    });

    testimonialIndex++;

    if(testimonialIndex >
    testimonials.length){

        testimonialIndex = 1;
    }

    testimonials[
        testimonialIndex - 1
    ].classList.add("active");

    setTimeout(showTestimonials,3000);

}

showTestimonials();


/* =========================
   HIDE NAVBAR ON SCROLL
========================= */

let lastScroll = 0;

window.addEventListener("scroll", ()=>{

    const currentScroll =
    window.pageYOffset;

    if(currentScroll > lastScroll &&
    currentScroll > 100){

        header.style.top = "-120px";

    }

    else{

        header.style.top = "0";

    }

    lastScroll = currentScroll;

});


