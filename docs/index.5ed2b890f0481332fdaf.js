/******/ (() => { // webpackBootstrap
/******/ 	"use strict";





var initHeader = function initHeader() {
  var currentPath = window.location.pathname.replace('/', '');
  document.querySelectorAll('.nav-button a').forEach(function (element) {
    var navPath = element.getAttribute('href').replace('/', '');
    if (!navPath.startsWith(currentPath) || !currentPath && navPath !== 'index.html') {
      return;
    }
    element.parentNode.classList.add('active');
  });
};
document.addEventListener('DOMContentLoaded', initHeader);
/******/ })()
;