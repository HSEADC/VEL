/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var _document$getElementB;





var initHeader = function initHeader() {
  var currentPath = window.location.pathname.toLowerCase().replace('/', '').replace('vell');
  document.querySelectorAll('.nav-button a').forEach(function (element) {
    var navPath = element.getAttribute('href').replace('/', '').replace('.html', '').toLowerCase();
    if (currentPath && navPath === 'index.html' || currentPath.startsWith(navPath)) {
      element.parentNode.classList.add('active');
    }
  });
};
document.addEventListener('DOMContentLoaded', initHeader);
(_document$getElementB = document.getElementById('back-button')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('click', function () {
  window.history.back();
});
/******/ })()
;