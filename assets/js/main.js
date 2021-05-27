// dropdowns

let menuItem = [];
let list = [];

menuItem = document.getElementsByClassName("menu-item");
list = document.getElementsByClassName("list");

const expand = (i) => {
    // console.log(i + 1)
    list[i].style.display = "block";


}

const collapse = (i) => {
    // console.log(i)
    list[i].style.display = "none";

}

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('mouseover', e => {
        expand(i);
    });

    menuItem[i].addEventListener('mouseleave', e => {
        collapse(i);
    });
}
//accordion
let accordionTitle = [];
let accordionDescription = [];
let accordionExpandCollapse = [];
accTitle = document.getElementsByClassName("accordion-title");
accDescription = document.getElementsByClassName("accordion-description");
accExpandCollapse = document.getElementsByClassName("accordion-expand-collapse");

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


accordionActions();


// testimonial slider
let testimonialSlides = [];
testimonialSlides = document.getElementsByClassName("slide");
testimonialSlides[0].style.display = "block";

let slideCount = 0;
const slideAnimate = () => {
    if (slideCount > testimonialSlides.length - 1)
        slideCount = 0;
    console.log(slideCount);
    for (let i = 0; i < testimonialSlides.length; i++) {
        testimonialSlides[i].style.display = "none";
    }
    if (slideCount == testimonialSlides.length - 1)
        testimonialSlides[slideCount - (testimonialSlides.length - 1)].style.display = "block";
    if (slideCount < testimonialSlides.length - 1) {
        testimonialSlides[slideCount + 1].style.display = "block";
    }
    slideCount++;

}

let slideInterval = setInterval(slideAnimate, 3000);


// footer
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