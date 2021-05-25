"use strict";

// dropdowns
var menuItem = [];
var list = [];
menuItem = document.getElementsByClassName("menu-item");
list = document.getElementsByClassName("list");

var expand = function expand(i) {
  // console.log(i + 1)
  list[i].style.display = "block";
};

var collapse = function collapse(i) {
  // console.log(i)
  list[i].style.display = "none";
};

var _loop = function _loop(i) {
  menuItem[i].addEventListener('mouseover', function (e) {
    expand(i);
  });
  menuItem[i].addEventListener('mouseleave', function (e) {
    collapse(i);
  });
};

for (var i = 0; i < menuItem.length; i++) {
  _loop(i);
}