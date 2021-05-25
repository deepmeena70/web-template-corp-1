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