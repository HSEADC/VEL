/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 369:
/***/ (() => {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var apiUrl = '../api/lifehacks-data.json';
var requiredKeys = ['id', 'tag', 'image', 'title'];
var areLifehacksLoaded = false;
var createTag = function createTag(tag) {
  var tagElement = document.createElement('span');
  tagElement.classList.add('A_Tag');
  tagElement.innerText = tag;
  return tagElement;
};
var createImage = function createImage(imageSrc) {
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', imageSrc);
  imageElement.classList.add('A_LifehackPhoto');
  return imageElement;
};
var createTitle = function createTitle(title) {
  var titleElement = document.createElement('h3');
  titleElement.classList.add('A_H3');
  titleElement.innerText = title;
  return titleElement;
};
var createLifehackCard = function createLifehackCard(lifehack) {
  for (var _i = 0, _requiredKeys = requiredKeys; _i < _requiredKeys.length; _i++) {
    var requiredKey = _requiredKeys[_i];
    if (!lifehack.hasOwnProperty(requiredKey)) {
      return;
    }
  }
  var lifehackCard = document.createElement('div');
  var backgroundQuarkIndex = (lifehack['id'] - 1) % 6 + 1;
  lifehackCard.classList.add('M_Lifehack', "Q_LifehackBG".concat(backgroundQuarkIndex));
  lifehackCard.appendChild(createTag(lifehack['tag']));
  lifehackCard.appendChild(createImage(lifehack['image']));
  lifehackCard.appendChild(createTitle(lifehack['title']));
  return lifehackCard;
};
var createLifehacks = function createLifehacks() {
  var listNode = document.getElementById('lifehacks_list');
  var editorChoiceNode = document.getElementById('editor_choice_list');
  if (!listNode || !editorChoiceNode || areLifehacksLoaded) {
    return;
  }
  void fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (lifehacks) {
    var _iterator = _createForOfIteratorHelper(lifehacks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var lifehack = _step.value;
        var lifehackCard = createLifehackCard(lifehack);
        listNode.appendChild(createLifehackCard(lifehack));
        if (lifehack['is_editor_choice']) {
          editorChoiceNode.appendChild(lifehackCard);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    areLifehacksLoaded = true;
  });
};
createLifehacks();

/***/ }),

/***/ 639:
/***/ (() => {

var _document$getElementB;
var initHeader = function initHeader() {
  var currentPath = window.location.pathname.toLowerCase().replace('/', '').replace('.html', '');
  document.querySelectorAll('a.A_NavButton').forEach(function (element) {
    var navPath = element.getAttribute('href').replace('/', '').replace('.html', '').toLowerCase();
    if (!currentPath && navPath === 'index' || currentPath.includes(navPath)) {
      element.classList.add('A_ActiveNav');
    }
  });
};
document.addEventListener('DOMContentLoaded', initHeader);
(_document$getElementB = document.getElementById('back-button')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('click', function () {
  window.location = 'index.html';
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/* harmony import */ var _js_navigation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_navigation_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_lifehacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(369);
/* harmony import */ var _js_lifehacks_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_lifehacks_js__WEBPACK_IMPORTED_MODULE_1__);










})();

/******/ })()
;