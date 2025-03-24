/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/navigation.js
var navigation = __webpack_require__(639);
;// ./src/js/common/filters.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var createFilters = function createFilters(entities) {
  var filtersNode = document.getElementById('filters');
  if (!filtersNode) {
    return;
  }
  filtersNode.innerHTML = '';
  var selectedTag = getSelectedTag();
  var createdFilters = [];
  filtersNode.appendChild(createFilter('все', selectedTag === 'все' || !selectedTag));
  var _iterator = _createForOfIteratorHelper(entities),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _entity$tags;
      var entity = _step.value;
      var tags = entity.hasOwnProperty('tag') ? [entity.tag] : (_entity$tags = entity.tags) !== null && _entity$tags !== void 0 ? _entity$tags : [];
      var _iterator2 = _createForOfIteratorHelper(tags),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var tag = _step2.value;
          if (!tag || createdFilters.includes(tag)) {
            continue;
          }
          createdFilters.push(tag);
          filtersNode.appendChild(createFilter(tag, selectedTag === tag));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var createFilter = function createFilter(name, isActive) {
  var filterButton = document.createElement('button');
  if (isActive) {
    filterButton.classList.add('A_FilterActive');
  }
  filterButton.classList.add('A_Filter');
  filterButton.innerText = name;
  filterButton.addEventListener('click', function (event) {
    var urlParams = new URLSearchParams(window.location.search);
    urlParams.set('filter', event.target.innerText);
    window.location.search = urlParams;
  });
  return filterButton;
};
var getSelectedTag = function getSelectedTag() {
  return new URLSearchParams(window.location.search).get('filter');
};
var filterEntities = function filterEntities(entities) {
  var selectedTag = getSelectedTag();
  if (!selectedTag || selectedTag === 'все') {
    return entities;
  }
  ;
  var result = [];
  var _iterator3 = _createForOfIteratorHelper(entities),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _entity$tags2;
      var entity = _step3.value;
      var tags = entity.hasOwnProperty('tag') ? [entity.tag] : (_entity$tags2 = entity.tags) !== null && _entity$tags2 !== void 0 ? _entity$tags2 : [];
      if (!tags.includes(selectedTag)) {
        continue;
      }
      result.push(entity);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return result;
};
;// ./src/js/common/general.js
function general_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = general_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function general_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return general_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? general_arrayLikeToArray(r, a) : void 0; } }
function general_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var createTags = function createTags(tags) {
  var tagsNode = document.createElement('div');
  tagsNode.classList.add('M_Tags');
  var _iterator = general_createForOfIteratorHelper(tags),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tag = _step.value;
      tagsNode.appendChild(createTag(tag));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return tagsNode;
};
var createTag = function createTag(tag) {
  var tagNode = document.createElement('span');
  tagNode.classList.add('A_Tag');
  tagNode.innerText = tag;
  return tagNode;
};
var createH1 = function createH1(header) {
  var headerNode = document.createElement('h1');
  headerNode.classList.add('A_H1');
  headerNode.innerText = header;
  return headerNode;
};
var createH2 = function createH2(header) {
  var headerNode = document.createElement('h2');
  headerNode.classList.add('A_H2');
  headerNode.innerText = header;
  return headerNode;
};
var createH3 = function createH3(header) {
  var headerNode = document.createElement('h3');
  headerNode.classList.add('A_H3');
  headerNode.innerText = header;
  return headerNode;
};
var createTextNode = function createTextNode(text) {
  var textNode = document.createElement('div');
  textNode.classList.add('A_Text');
  textNode.innerHTML = text;
  return textNode;
};
var createCaption = function createCaption(text) {
  var caption = document.createElement('div');
  caption.classList.add('A_Caption');
  caption.innerHTML = text;
  return caption;
};
var createImage = function createImage(src) {
  var image = document.createElement('img');
  image.setAttribute('src', src);
  return image;
};
var createLink = function createLink(text, href) {
  var link = document.createElement('a');
  link.setAttribute('href', href !== null && href !== void 0 ? href : '#');
  link.innerHTML = text;
  link.classList.add('A_Button');
  return link;
};
;// ./src/js/articles/article-page.js
function article_page_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = article_page_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function article_page_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return article_page_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? article_page_arrayLikeToArray(r, a) : void 0; } }
function article_page_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var ARTICLE_PATH = 'article.html';
var createArticle = function createArticle() {
  var url = new URL(window.location);
  if (!url.pathname.includes(ARTICLE_PATH)) {
    return;
  }
  var id = url.searchParams.get('id');
  if (!id) {
    window.location.href = '/';
  }
  void fetch("api/articles/".concat(id, ".json")).then(function (response) {
    return response.json();
  }).then(function (article) {
    return renderArticle(article);
  })["catch"](function () {
    window.location.href = '/';
  });
};
var renderArticle = function renderArticle(article) {
  if (!article) {
    return;
  }
  var introElement = document.getElementById('article-intro');
  if (!introElement) {
    return;
  }
  createBanner(article.banner_image);
  introElement.appendChild(createArticleHead(article));
  var sectionsElement = document.getElementById('article-sections');
  var _iterator = article_page_createForOfIteratorHelper(article.sections),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sectionData = _step.value;
      sectionsElement.appendChild(createArticleSection(sectionData));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var createBanner = function createBanner(bannerImage) {
  var banner = document.getElementById('article-banner');
  banner.style.backgroundImage = "url('".concat(bannerImage, "')");
};
var createArticleHead = function createArticleHead(article) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('W_ArticleHead');
  wrapper.append(createAuthor(article.author), createArticleInto(article));
  return wrapper;
};
var createAuthor = function createAuthor(author) {
  var authorNode = document.createElement('aside');
  authorNode.classList.add('M_ArticleAuthor');
  var authorName = document.createElement('div');
  authorName.classList.add('W_AuthorName');
  authorName.append(createTextNode(author.name), createCaption('автор статьи'));
  authorNode.append(createImage(author.photo), authorName);
  return authorNode;
};
var createArticleInto = function createArticleInto(article) {
  var introNode = document.createElement('div');
  introNode.classList.add('M_ArticleIntro');
  introNode.append(createH1(article.title), createTags(article.tags), createTextNode(article.description));
  return introNode;
};
var createArticleSection = function createArticleSection(sectionData) {
  var articleSection = document.createElement('section');
  articleSection.classList.add('M_ArticleSection');
  var header = createSectionHeader(sectionData.title);
  createNavLink(sectionData);
  header.setAttribute('id', sectionData.id);
  articleSection.appendChild(header);
  articleSection.appendChild(createSectionTextNode(sectionData.parts));
  return articleSection;
};
var createSectionHeader = function createSectionHeader(title) {
  var header = createH2(title);
  var observer = new IntersectionObserver(function (entries) {
    var entry = entries[0];
    var header = entry.target;
    if (!entry.isIntersecting) {
      return;
    }
    var navWrapper = document.getElementById('article-nav');
    if (!navWrapper) {
      return;
    }
    var activeNavButton = navWrapper.getElementsByClassName('A_ArticleNavButtonActive')[0];
    if (activeNavButton.innerHTML === header.innerHTML) {
      return;
    }
    activeNavButton.classList.remove('A_ArticleNavButtonActive');
    var _iterator2 = article_page_createForOfIteratorHelper(navWrapper.getElementsByClassName('A_ArticleNavButton')),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var navButton = _step2.value;
        if (navButton.innerHTML !== header.innerHTML) {
          continue;
        }
        navButton.classList.add('A_ArticleNavButtonActive');
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }, {
    threshold: [0]
  });
  observer.observe(header);
  return header;
};
var createNavLink = function createNavLink(sectionData) {
  var navWrapper = document.getElementById('article-nav');
  var navButton = document.createElement('button');
  navButton.classList.add('A_ArticleNavButton');
  if (!navWrapper.innerHTML) {
    navButton.classList.add('A_ArticleNavButtonActive');
  }
  navButton.innerHTML = sectionData.title;
  navButton.onclick = function (event) {
    navWrapper.getElementsByClassName('A_ArticleNavButtonActive')[0].classList.remove('A_ArticleNavButtonActive');
    document.getElementById(sectionData.id).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    event.target.classList.add('A_ArticleNavButtonActive');
  };
  navWrapper.append(navButton);
};
var createSectionTextNode = function createSectionTextNode(sectionParts) {
  var sectionText = document.createElement('div');
  sectionText.classList.add('M_ArticleSecionText');
  var _iterator3 = article_page_createForOfIteratorHelper(sectionParts !== null && sectionParts !== void 0 ? sectionParts : []),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var part = _step3.value;
      var partElement = createPart(part);
      if (!partElement) {
        continue;
      }
      sectionText.appendChild(partElement);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return sectionText;
};
var createPart = function createPart(part) {
  if (part.type === 'text') {
    return createTextNode(part.value);
  }
  if (part.type === 'list') {
    return createArticleList(part.value);
  }
  if (part.type === 'image') {
    return createArticleImages(part.value);
  }
  if (part.type === 'remark') {
    return createArticleRemark(part.value);
  }
  if (part.type === 'reference') {
    return createArticleReference(part.value);
  }
  return null;
};
var createArticleList = function createArticleList(articleList) {
  var listNode = document.createElement('div');
  listNode.classList.add('M_ArticleList');
  var _iterator4 = article_page_createForOfIteratorHelper(articleList),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var listItem = _step4.value;
      var itemNode = createTextNode(listItem.value);
      itemNode.prepend(createBoldText(listItem.title), '. ');
      listNode.appendChild(itemNode);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return listNode;
};
var createBoldText = function createBoldText(text) {
  var textNode = document.createElement('b');
  textNode.innerHTML = text;
  return textNode;
};
var createArticleImages = function createArticleImages(articleImages) {
  var imagesNode = document.createElement('div');
  imagesNode.classList.add('M_ArticleImages');
  var _iterator5 = article_page_createForOfIteratorHelper(articleImages),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var image = _step5.value;
      imagesNode.appendChild(createImage(image));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return imagesNode;
};
var createArticleRemark = function createArticleRemark(reminderText) {
  var reminder = createTextNode(reminderText);
  reminder.classList.add('A_ArticleRemark');
  return reminder;
};
var createArticleReference = function createArticleReference(reminderData) {
  var reference = document.createElement('div');
  reference.classList.add('A_ArticleReference');
  reference.append(createTextNode(reminderData.text), createLink(reminderData.title, reminderData.href));
  return reference;
};
;// ./src/js/articles/articles-list.js
function articles_list_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = articles_list_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function articles_list_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return articles_list_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? articles_list_arrayLikeToArray(r, a) : void 0; } }
function articles_list_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var ARTICLES_PATH = 'articles.html';
var API_URL = 'api/articles-list.json';
var createArticles = function createArticles() {
  var url = new URL(window.location);
  if (!url.pathname.includes(ARTICLES_PATH)) {
    return;
  }
  fetch(API_URL).then(function (response) {
    return response.json();
  }).then(function (articles) {
    createFilters(articles);
    renderArticles(filterEntities(articles));
  });
};
var renderArticles = function renderArticles(articles) {
  var articlesNode = document.getElementById('articles_list');
  if (!articlesNode) {
    return;
  }
  var _iterator = articles_list_createForOfIteratorHelper(articles),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var article = _step.value;
      articlesNode.appendChild(articles_list_createArticle(article));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var articles_list_createArticle = function createArticle(article) {
  var articleNode = document.createElement('a');
  articleNode.classList.add('M_ArticleCard');
  articleNode.setAttribute('href', "".concat(ARTICLE_PATH, "?id=").concat(article.id));
  var infoWrapper = document.createElement('div');
  infoWrapper.classList.add('W_ArticleCardInfo');
  var textWrapper = document.createElement('div');
  textWrapper.classList.add('W_ArticleCardText');
  textWrapper.append(createH3(article.title), createTextNode(article.short_description));
  infoWrapper.append(createTags(article.tags), textWrapper);
  articleNode.append(createImage(article.image), infoWrapper);
  return articleNode;
};
;// ./src/js/lifehacks/lifehacks.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || lifehacks_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function lifehacks_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = lifehacks_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function lifehacks_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return lifehacks_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? lifehacks_arrayLikeToArray(r, a) : void 0; } }
function lifehacks_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var LIFEHACKS_PATH = 'lifehacks.html';
var apiUrl = 'api/lifehacks-list.json';
var createLifehacks = function createLifehacks() {
  var listNode = document.getElementById('lifehacks_list');
  var editorChoiceNode = document.getElementById('editor_choice_list');
  if (!listNode && !editorChoiceNode) {
    return;
  }
  void fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (lifehacks) {
    createFilters(lifehacks);
    renderLifehacks(lifehacks);
  });
};
var renderLifehacks = function renderLifehacks(lifehacks) {
  var listNode = document.getElementById('lifehacks_list');
  var editorChoiceNode = document.getElementById('editor_choice_list');
  if (!listNode && !editorChoiceNode) {
    return;
  }
  if (listNode) {
    listNode.innerHTML = '';
  }
  if (editorChoiceNode) {
    editorChoiceNode.innerHTML = '';
  }
  lifehacks = filterEntities(lifehacks);
  var _iterator = lifehacks_createForOfIteratorHelper(lifehacks.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        index = _step$value[0],
        lifehack = _step$value[1];
      var lifehackCard = createLifehackCard(lifehack, index);
      if (editorChoiceNode && lifehack.is_editor_choice) {
        editorChoiceNode.appendChild(lifehackCard);
      }
      if (listNode) {
        listNode.appendChild(createLifehackCard(lifehack, index));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var createLifehackCard = function createLifehackCard(lifehack, index) {
  var lifehackCard = document.createElement('div');
  lifehackCard.classList.add('M_LifehackCard', "Q_LifehackBG".concat(index + 1));
  lifehackCard.appendChild(createTag(lifehack.tag));
  lifehackCard.appendChild(lifehacks_createImage(lifehack.image));
  lifehackCard.appendChild(createH3(lifehack.title));
  return lifehackCard;
};
var lifehacks_createImage = function createImage(imageSrc) {
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', imageSrc);
  imageElement.classList.add('A_LifehackPhoto');
  return imageElement;
};
createLifehacks();
;// ./src/index.js





var url = new URL(window.location).pathname;
if (url.includes(ARTICLES_PATH)) {
  createArticles();
}
if (url.includes(ARTICLE_PATH)) {
  createArticle();
}
if (url.includes(LIFEHACKS_PATH)) {
  createLifehacks();
}
})();

/******/ })()
;