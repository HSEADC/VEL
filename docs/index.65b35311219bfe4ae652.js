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
    urlParams["delete"]('page');
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
      tagsNode.appendChild(general_createTag(tag));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return tagsNode;
};
var general_createTag = function createTag(tag) {
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
var general_createH2 = function createH2(header) {
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
var createButton = function createButton(text, onClick) {
  var button = document.createElement('button');
  button.innerHTML = text;
  button.onclick = onClick;
  button.classList.add('A_Button');
  return button;
};
var getRandomNumber = function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
};
var createBoldText = function createBoldText(text) {
  var textNode = document.createElement('b');
  textNode.innerHTML = text;
  return textNode;
};
;// ./src/js/common/pagination.js

var paginateEntities = function paginateEntities(entities, perPage) {
  return entities.slice(0, perPage * getCurrentPage());
};
var getCurrentPage = function getCurrentPage() {
  var _URLSearchParams$get;
  return parseInt((_URLSearchParams$get = new URLSearchParams(window.location.search).get('page')) !== null && _URLSearchParams$get !== void 0 ? _URLSearchParams$get : 1, 10);
};
var createLoadMoreButton = function createLoadMoreButton(onClick) {
  removeLoadMoreButton();
  var paginationNode = document.getElementById('pagination');
  var createNextPage = function createNextPage() {
    var url = new URL(window.location.href);
    var page = getCurrentPage() + 1;
    url.searchParams.set('page', getCurrentPage() + 1);
    window.history.pushState({}, '', url);
    onClick();
  };
  paginationNode.appendChild(createButton('загрузить еще', createNextPage));
};
var removeLoadMoreButton = function removeLoadMoreButton() {
  var paginationNode = document.getElementById('pagination');
  paginationNode.innerHTML = '';
};
;// ./src/js/common/story-navigation.js
function story_navigation_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = story_navigation_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function story_navigation_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return story_navigation_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? story_navigation_arrayLikeToArray(r, a) : void 0; } }
function story_navigation_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var createSectionHeader = function createSectionHeader(title) {
  var header = general_createH2(title);
  var observer = new IntersectionObserver(function (entries) {
    var entry = entries[0];
    var header = entry.target;
    if (!entry.isIntersecting) {
      return;
    }
    var navWrapper = document.getElementById('story-nav');
    if (!navWrapper) {
      return;
    }
    var activeNavButton = navWrapper.getElementsByClassName('A_ArticleNavButtonActive')[0];
    if (activeNavButton.innerHTML === header.innerHTML) {
      return;
    }
    activeNavButton.classList.remove('A_ArticleNavButtonActive');
    var _iterator = story_navigation_createForOfIteratorHelper(navWrapper.getElementsByClassName('A_ArticleNavButton')),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var navButton = _step.value;
        if (navButton.innerHTML !== header.innerHTML) {
          continue;
        }
        navButton.classList.add('A_ArticleNavButtonActive');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, {
    threshold: [0]
  });
  observer.observe(header);
  return header;
};
var createNavLink = function createNavLink(sectionData) {
  var navWrapper = document.getElementById('story-nav');
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
;// ./src/js/common/story-components.js
function story_components_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = story_components_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function story_components_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return story_components_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? story_components_arrayLikeToArray(r, a) : void 0; } }
function story_components_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var createStoryBanner = function createStoryBanner() {
  var banner = document.getElementById('story-banner');
  for (var _len = arguments.length, images = new Array(_len), _key = 0; _key < _len; _key++) {
    images[_key] = arguments[_key];
  }
  var backgroundImage = images.map(function (image) {
    return "url('".concat(image, "')");
  }).join(', ');
  banner.style.backgroundImage = backgroundImage;
};
var createStoryIntro = function createStoryIntro(story) {
  var introNode = document.createElement('div');
  introNode.classList.add('W_NameStory');
  introNode.append(createH1(story.title), createTags(story.tags), createTextNode(story.description));
  return introNode;
};
var createStorySection = function createStorySection(sectionData) {
  var articleSection = document.createElement('section');
  articleSection.classList.add('O_BlockStoryText');
  var header = createSectionHeader(sectionData.title);
  createNavLink(sectionData);
  header.setAttribute('id', sectionData.id);
  articleSection.appendChild(header);
  articleSection.appendChild(createSectionPart(sectionData.parts));
  return articleSection;
};
var createSectionPart = function createSectionPart(sectionParts) {
  var sectionText = document.createElement('div');
  sectionText.classList.add('W_TextStory');
  var _iterator = story_components_createForOfIteratorHelper(sectionParts !== null && sectionParts !== void 0 ? sectionParts : []),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var part = _step.value;
      var partElement = createPart(part);
      if (!partElement) {
        continue;
      }
      sectionText.appendChild(partElement);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return sectionText;
};
var createPart = function createPart(part) {
  if (part.type === 'text') {
    return createTextNode(part.value);
  }
  if (part.type === 'list') {
    return createStoryList(part.value);
  }
  if (part.type === 'image') {
    return createStoryImagesList(part.value);
  }
  if (part.type === 'remark') {
    return createRemark(part.value);
  }
  if (part.type === 'reference') {
    return createReference(part.value);
  }
  if (part.type === 'features') {
    return createFeatures(part.value);
  }
  return null;
};
var createStoryList = function createStoryList(articleList) {
  var listNode = document.createElement('div');
  listNode.classList.add('M_StoryList');
  var _iterator2 = story_components_createForOfIteratorHelper(articleList),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var listItem = _step2.value;
      var itemNode = createTextNode(listItem.value);
      itemNode.prepend(createBoldText(listItem.title), '. ');
      listNode.appendChild(itemNode);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return listNode;
};
var createStoryImagesList = function createStoryImagesList(articleImages) {
  var imagesNode = document.createElement('div');
  imagesNode.classList.add('M_StoryImagesList');
  var _iterator3 = story_components_createForOfIteratorHelper(articleImages),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var image = _step3.value;
      imagesNode.appendChild(createImage(image));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return imagesNode;
};
var createRemark = function createRemark(reminderText) {
  var remark = createTextNode(reminderText);
  remark.classList.add('O_Factoid');
  remark.classList.add('Q_LineDecorate');
  return remark;
};
var createReference = function createReference(reminderData) {
  var reference = document.createElement('div');
  reference.classList.add('O_Factoid');
  reference.append(createTextNode(reminderData.text), createLink(reminderData.title, reminderData.href));
  return reference;
};
var createFeatures = function createFeatures(features) {
  var featuresNode = document.createElement('div');
  featuresNode.classList.add('C_WayFeatures');
  var _iterator4 = story_components_createForOfIteratorHelper(features),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var feature = _step4.value;
      featuresNode.appendChild(createFeature(feature));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return featuresNode;
};
var createFeature = function createFeature(feature) {
  var featureNode = document.createElement('div');
  featureNode.classList.add('M_WayFeature');
  featureNode.append(createImage(feature.icon), createCaption(feature.text));
  return featureNode;
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
  var introElement = document.getElementById('story-intro');
  if (!introElement) {
    return;
  }
  createStoryBanner('images/articles/list-weave.webp', article.banner_image);
  introElement.appendChild(createArticleHead(article));
  var sectionsElement = document.getElementById('story-sections');
  var _iterator = article_page_createForOfIteratorHelper(article.sections),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sectionData = _step.value;
      sectionsElement.appendChild(createStorySection(sectionData));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  createRecomendations();
};
var createArticleHead = function createArticleHead(article) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('W_StoryHead');
  wrapper.append(createAuthor(article.author), createStoryIntro(article));
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
var createRecomendations = function createRecomendations() {
  var url = new URL(window.location);
  var id = parseInt(url.searchParams.get('id'), 10);
  fetchArticles().then(function (articles) {
    articles = articles.filter(function (article) {
      return article.id !== id;
    });
    if (articles.length <= 2) {
      renderArticles(articles);
      return;
    }
    var limit = articles.length - 1;
    var randomNumber = getRandomNumber(limit);
    var randomArticles = articles.slice(randomNumber, randomNumber + 2);
    console.log(randomArticles);
    renderArticles(randomArticles);
  });
};
;// ./src/js/articles/articles-list.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function articles_list_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = articles_list_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function articles_list_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return articles_list_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? articles_list_arrayLikeToArray(r, a) : void 0; } }
function articles_list_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var ARTICLES_PATH = 'articles.html';
var API_URL = 'api/articles-list.json';
var PER_PAGE = 8;
var createArticles = function createArticles() {
  fetchArticles().then(prepareArticles).then(renderArticles);
};
var fetchArticles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch(API_URL).then(function (response) {
            return response.json();
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchArticles() {
    return _ref.apply(this, arguments);
  };
}();
var prepareArticles = function prepareArticles(articles) {
  var edittorChoiceArticle = articles.find(function (article) {
    return article.is_editor_choice;
  });
  createEditorChoiceArticle(edittorChoiceArticle);
  createFilters(articles);
  var filteredArticles = filterEntities(articles);
  var paginatedEntities = paginateEntities(filteredArticles, PER_PAGE);
  if (paginatedEntities.length < filteredArticles.length) {
    createLoadMoreButton(createArticles);
  } else {
    removeLoadMoreButton();
  }
  return paginatedEntities;
};
var renderArticles = function renderArticles(articles) {
  var articlesNode = document.getElementById('articles_list');
  if (!articlesNode) {
    return;
  }
  articlesNode.innerHTML = '';
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
var createEditorChoiceArticle = function createEditorChoiceArticle(article) {
  var editorChoiceNode = document.getElementById('article_editor_choice');
  if (!editorChoiceNode) {
    return;
  }
  editorChoiceNode.innerHTML = '';
  var url = "".concat(ARTICLE_PATH, "?id=").concat(article.id);
  var articleNode = document.createElement('a');
  articleNode.classList.add('M_EditorChoiseArticleCard');
  articleNode.setAttribute('href', url);
  var infoWrapper = document.createElement('div');
  infoWrapper.classList.add('W_EditorChoiseArticleCardInfo');
  var textWrapper = document.createElement('div');
  textWrapper.classList.add('W_EditorChoiseArticleCardText');
  var title = general_createH2(article.title);
  var description = createTextNode(article.short_description);
  title.classList.add('Q_TextWhite');
  description.classList.add('Q_TextWhite');
  textWrapper.append(title, description);
  infoWrapper.append(createTags(article.tags), textWrapper, createLink('читать', url));
  articleNode.append(createImage(article.image), infoWrapper);
  editorChoiceNode.appendChild(articleNode);
};
;// ./src/js/lifehacks/lifehacks-list.js
function lifehacks_list_typeof(o) { "@babel/helpers - typeof"; return lifehacks_list_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, lifehacks_list_typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || lifehacks_list_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function lifehacks_list_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = lifehacks_list_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function lifehacks_list_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return lifehacks_list_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? lifehacks_list_arrayLikeToArray(r, a) : void 0; } }
function lifehacks_list_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function lifehacks_list_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ lifehacks_list_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == lifehacks_list_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(lifehacks_list_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function lifehacks_list_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function lifehacks_list_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { lifehacks_list_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { lifehacks_list_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var LIFEHACKS_PATH = 'lifehacks.html';
var LIFEHACK_PATH = 'lifehack.html';
var LIFEHACKS_URL = 'api/lifehacks-list.json';
var createLifehacks = function createLifehacks() {
  void fetchLifehacks().then(function (lifehacks) {
    createFilters(lifehacks);
    var filteredLifehacks = filterEntities(lifehacks);
    renderLifehacks(filteredLifehacks);
  });
};
var fetchLifehacks = /*#__PURE__*/function () {
  var _ref = lifehacks_list_asyncToGenerator(/*#__PURE__*/lifehacks_list_regeneratorRuntime().mark(function _callee() {
    return lifehacks_list_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch(LIFEHACKS_URL).then(function (response) {
            return response.json();
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchLifehacks() {
    return _ref.apply(this, arguments);
  };
}();
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
  var _iterator = lifehacks_list_createForOfIteratorHelper(lifehacks.entries()),
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
  // 2 7 16 21
  return createSmallCard(lifehack, index);
};
var createSmallCard = function createSmallCard(lifehack, index) {
  var lifehackCard = document.createElement('a');
  lifehackCard.setAttribute('href', "".concat(LIFEHACK_PATH, "?id=").concat(lifehack.id));
  lifehackCard.classList.add('M_LifehackCard', "Q_LifehackBG".concat(index % 6 + 1));
  lifehackCard.appendChild(general_createTag(lifehack.tag));
  lifehackCard.appendChild(lifehacks_list_createImage(lifehack.image));
  lifehackCard.appendChild(createH3(lifehack.title));
  return lifehackCard;
};
var createLargeCard = function createLargeCard(lifehack, index) {
  var lifehackCard = document.createElement('a');
  lifehackCard.setAttribute('href', "".concat(LIFEHACK_PATH, "?id=").concat(lifehack.id));
  lifehackCard.classList.add('M_LifehackLargeCard', "Q_LifehackBG".concat(index % 6 + 1));
  var textWrapper = document.createElement('div');
  textWrapper.classList.add('W_LifehackLargeCardText');
  textWrapper.appendChild(createTag(lifehack.tag));
  textWrapper.appendChild(createH2(lifehack.title));
  lifehackCard.appendChild(textWrapper);
  lifehackCard.appendChild(lifehacks_list_createImage(lifehack.image));
  return lifehackCard;
};
var lifehacks_list_createImage = function createImage(imageSrc) {
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', imageSrc);
  imageElement.classList.add('A_LifehackPhoto');
  return imageElement;
};
;// ./src/js/lifehacks/lifehack-page.js
function lifehack_page_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = lifehack_page_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function lifehack_page_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return lifehack_page_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? lifehack_page_arrayLikeToArray(r, a) : void 0; } }
function lifehack_page_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var lifehack_page_LIFEHACK_PATH = 'lifehack.html';
var createLifehack = function createLifehack() {
  var url = new URL(window.location);
  if (!url.pathname.includes(lifehack_page_LIFEHACK_PATH)) {
    return;
  }
  var id = url.searchParams.get('id');
  if (!id) {
    window.location.href = '/';
  }
  void fetch("api/lifehacks/".concat(id, ".json")).then(function (response) {
    return response.json();
  }).then(function (lifehack) {
    return renderLifehack(lifehack);
  })["catch"](function () {
    window.location.href = '/';
  });
};
var renderLifehack = function renderLifehack(lifehack) {
  var lifehackNode = document.getElementById('lifehack-text');
  lifehackNode.innerHTML = '';
  lifehackNode.appendChild(createLifehackHead(lifehack));
  var _iterator = lifehack_page_createForOfIteratorHelper(lifehack.parts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var part = _step.value;
      lifehackNode.appendChild(lifehack_page_createPart(part));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  lifehack_page_createRecomendations();
};
var createLifehackHead = function createLifehackHead(lifehack) {
  var headNode = document.createElement('div');
  headNode.classList.add('W_LifehackHeadWrapper');
  var titleWrapper = document.createElement('div');
  titleWrapper.classList.add('W_LifehackTitleWrapper');
  titleWrapper.append(createTags(lifehack.tags), createH1(lifehack.title));
  headNode.append(titleWrapper, createImage(lifehack.image));
  return headNode;
};
var lifehack_page_createPart = function createPart(part) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('W_LifehackPartWrapper');
  wrapper.append(createH3(part.title), createTextNode(part.text));
  return wrapper;
};
var lifehack_page_createRecomendations = function createRecomendations() {
  var url = new URL(window.location);
  var id = parseInt(url.searchParams.get('id'), 10);
  fetchLifehacks().then(function (lifehacks) {
    var uniqueLifehacks = lifehacks.filter(function (lifehack) {
      return lifehack.id !== id;
    });
    if (uniqueLifehacks.length > 4) {
      var limit = uniqueLifehacks.length - 3;
      var randomNumber = getRandomNumber(limit);
      var randomLifehacks = lifehacks.slice(randomNumber, randomNumber + 4);
      renderLifehacks(randomLifehacks);
      return;
    }
    renderLifehacks(uniqueLifehacks);
  });
};
;// ./src/js/routes/route-page.js
function route_page_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = route_page_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function route_page_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return route_page_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? route_page_arrayLikeToArray(r, a) : void 0; } }
function route_page_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var ROUTE_PATH = 'route.html';
var DISTANCE_IMAGE = 'images/routes/quarks/location.svg';
var TIME_IMAGE = 'images/routes/quarks/time.svg';
var createRoute = function createRoute() {
  var url = new URL(window.location);
  var id = url.searchParams.get('id');
  if (!id) {
    window.location.href = '/';
  }
  void fetch("api/routes/".concat(id, ".json")).then(function (response) {
    return response.json();
  }).then(function (route) {
    return renderRoute(route);
  });
  // .catch(() => {
  //     window.location.href = '/';
  // });
};
var renderRoute = function renderRoute(route) {
  if (!route) {
    return;
  }
  var introElement = document.getElementById('story-intro');
  if (!introElement) {
    return;
  }
  createStoryBanner(route.banner_image);
  introElement.appendChild(createRouteHead(route));
  var sectionsElement = document.getElementById('story-sections');
  var _iterator = route_page_createForOfIteratorHelper(route.sections),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sectionData = _step.value;
      sectionsElement.appendChild(createStorySection(sectionData));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  createEnding(route.ending);
};
var createRouteHead = function createRouteHead(route) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('W_StoryHead');
  wrapper.append(createSummary(route.summary), createStoryIntro(route));
  return wrapper;
};
var createSummary = function createSummary(summaryData) {
  var summaryNode = document.createElement('aside');
  summaryNode.classList.add('W_InfoCardWay');
  var difficultyNode = document.createElement('div');
  difficultyNode.classList.add('M_WayInfo');
  difficultyNode.append(createImage(summaryData.difficulty));
  var distanceNode = document.createElement('div');
  distanceNode.classList.add('M_WayInfo');
  distanceNode.append(createImage(DISTANCE_IMAGE), createCaption(summaryData.distance));
  var timeNode = document.createElement('div');
  timeNode.classList.add('M_WayInfo');
  timeNode.append(createImage(TIME_IMAGE), createCaption(summaryData.time));
  summaryNode.append(difficultyNode, distanceNode, timeNode);
  return summaryNode;
};
var createEnding = function createEnding(ending) {
  var endingNode = document.getElementById('story-ending');
  var factoid = document.createElement('div');
  factoid.classList.add('O_Factoid');
  factoid.classList.add('Q_LineDecorate');
  var listNode = document.createElement('div');
  listNode.classList.add('M_StoryList');
  var _iterator2 = route_page_createForOfIteratorHelper(ending),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var listItem = _step2.value;
      var itemNode = createTextNode(listItem.value);
      itemNode.prepend(createBoldText(listItem.title), ': ');
      listNode.appendChild(itemNode);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  factoid.append(listNode);
  endingNode.append(factoid);
};
;// ./src/index.js







var url = new URL(window.location).pathname;
var loadPages = function loadPages() {
  if (url.includes(ARTICLES_PATH)) {
    createArticles();
  }
  if (url.includes(ARTICLE_PATH)) {
    createArticle();
  }
  if (url.includes(LIFEHACKS_PATH)) {
    createLifehacks();
  }
  if (url.includes(lifehack_page_LIFEHACK_PATH)) {
    createLifehack();
  }
  if (url.includes(ROUTE_PATH)) {
    createRoute();
  }
};
loadPages();
})();

/******/ })()
;