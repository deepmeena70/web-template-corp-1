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