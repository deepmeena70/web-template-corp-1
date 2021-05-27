// dropdowns
const menuItem = document.getElementsByClassName("menu-item");
const list = document.getElementsByClassName("list");
const expand = (i) => {
    list[i].style.display = "block";
};

const collapse = (i) => {
    list[i].style.display = "none";
};
const dropdowns = () => {

    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('mouseover', e => {
            expand(i);
        });
        menuItem[i].addEventListener('mouseleave', e => {
            collapse(i);
        });
    }
};

// progress
const circleHalfOne = document.getElementsByClassName("circle-half-one");
const circleHalfTwo = document.getElementsByClassName("circle-half-two");

const progress = () => {
    for (let i = 0; i < circleHalfOne.length; i++) {

        circleHalfOne[i].style.animation = "load-1 2s linear 2s forwards";
        circleHalfTwo[i].style.animation = "load-2 linear 2s forwards";
    }
};

//accordion
const accTitle = document.getElementsByClassName("accordion-title");
const accDescription = document.getElementsByClassName("accordion-description");
const accExpandCollapse = document.getElementsByClassName("accordion-expand-collapse");

const accordionActions = () => {

    accDescription[0].style.display = "block";
    accExpandCollapse[0].style.animation = "acc-expand-collapse 200ms ease-in-out forwards";

    for (let i = 0; i < accDescription.length; i++) {
        accTitle[i].addEventListener('click', e => {

            if (window.getComputedStyle(accDescription[i]).display == "block") {
                accDescription[i].style.display = "none";
                accExpandCollapse[i].style.animation = "acc-expand-collapse 200ms ease-in-out reverse";
            } else {
                accDescription[i].style.display = "block";
                accExpandCollapse[i].style.animation = "acc-expand-collapse 200ms ease-in-out forwards";
            }

        });
    }

};

// testimonial slider
const testimonialSlides = document.getElementsByClassName("slide");
let slideCount = 0;

const slideAnimate = () => {
    if (slideCount > testimonialSlides.length - 1)
        slideCount = 0;
    for (let i = 0; i < testimonialSlides.length; i++) {
        testimonialSlides[i].style.display = "none";
    }
    if (slideCount == testimonialSlides.length - 1) {

        testimonialSlides[0].style.display = "block";
        testimonialSlides[0].style.animation = "slide-animate 500ms ease-out forwards";
    }
    if (slideCount < testimonialSlides.length - 1) {
        testimonialSlides[slideCount + 1].style.display = "block";
        testimonialSlides[slideCount + 1].style.animation = "slide-animate 500ms ease-out";
    }
    slideCount++;

}

const testimonialSlider = () => {

    testimonialSlides[0].style.display = "block";

    setInterval(slideAnimate, 3500);
}

// footer count

const footerCount = () => {
    const globalReach = document.getElementById("global-reach");
    const globalClient = document.getElementById("global-clients");
    const globalReachVal = globalReach.innerHTML;
    const globalClientVal = globalClient.innerHTML;
    const clientNumber = Number(globalClientVal.replace(/,/g, ''));
    const globalReachNumber = Number(globalReachVal.replace(/,/g, ''));

    let count = 1;
    const counter = () => {
        if (count >= globalReachNumber)
            clearInterval(counterInterval);

        if (count >= globalReachNumber)
            globalReach.innerHTML = globalReachVal;
        else
            globalReach.innerHTML = count;

        if (count >= clientNumber)
            globalClient.innerHTML = globalClientVal;
        else
            globalClient.innerHTML = count;

        count *= 2;

    };

    let counterInterval = setInterval(counter, 100);
};

//load 
dropdowns();
accordionActions();
testimonialSlider();


// on scroll

const body = document.body,
    html = document.documentElement;

const height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

let footerActive = false;
let progressActive = false;

window.addEventListener('scroll', e => {
    for (let i = 0; i < list.length; i++) {
        collapse(i);
    }
    // progress circle animation
    if (scrollY > height * 0.4) {
        if (progressActive == false) {
            progress();
        }
        progressActive = true;
    }
    // footer count animation
    if (scrollY > height * 0.7) {
        if (footerActive == false)
            footerCount();

        footerActive = true;
    }
});