/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Brewdog = __webpack_require__ (/*! ./models/brewdog */ \"./src/models/brewdog.js\");\nconst BrewdogListView = __webpack_require__(/*! ./views/brewdog_list_view */ \"./src/views/brewdog_list_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const listContainer = document.querySelector('#brewdog-list');\n  const brewdogListView = new BrewdogListView(listContainer);\n    brewdogListView.bindEvents();\n\n\n  const brewdog = new Brewdog;\n  brewdog.getAllBrewdogData();\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url\n}\n\nRequestHelper.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', this.url);\n  xhr.addEventListener('load', function() {\n    if(this.status !== 200){\n      return;\n    }\n    const data = JSON.parse(this.responseText);\n    onComplete(data);\n  });\n  xhr.send();\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/brewdog.js":
/*!*******************************!*\
  !*** ./src/models/brewdog.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request */ \"./src/helpers/request.js\")\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\")\n\nconst Brewdog = function(){\n  this.brewdog = [];\n}\n\nBrewdog.prototype.getAllBrewdogData = function(){\n  const request = new Request ('https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json')\n  request.get((data) => {\n  PubSub.publish('brewdog-all-data-ready', data);\n  // console.log(data)\n  })\n}\n\n\n\n\nmodule.exports = Brewdog;\n\n\n//# sourceURL=webpack:///./src/models/brewdog.js?");

/***/ }),

/***/ "./src/views/brewdog_info_view.js":
/*!****************************************!*\
  !*** ./src/views/brewdog_info_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst BrewdogInfoView = function () {\n\n}\n\nBrewdogInfoView.prototype.createBrewdogInfo = function (beer) {\n  const brewdogInfo = document.createElement('div');\n  brewdogInfo.classList.add('brewdog-detail');\n\n  const name = document.createElement('h2');\n  name.textContent = beer.name;\n  brewdogInfo.appendChild(name);\n\n  const tagline = document.createElement('h3');\n  tagline.textContent = beer.tagline;\n  brewdogInfo.appendChild(tagline);\n\n  const description = document.createElement('p');\n  description.textContent = beer.description;\n  brewdogInfo.appendChild(description);\n\n  return brewdogInfo;\n};\n\n\nmodule.exports = BrewdogInfoView;\n\n\n//# sourceURL=webpack:///./src/views/brewdog_info_view.js?");

/***/ }),

/***/ "./src/views/brewdog_list_view.js":
/*!****************************************!*\
  !*** ./src/views/brewdog_list_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst BrewdogInfoView = __webpack_require__(/*! ./brewdog_info_view */ \"./src/views/brewdog_info_view.js\");\n\nconst BrewdogListView = function (htmlContainer) {\n  this.htmlContainer = htmlContainer;\n};\n\nBrewdogListView.prototype.bindEvents = function(){\n  PubSub.subscribe('brewdog-all-data-ready', (event) => {\n    this.displayBrewdogInfo(event.detail);\n  })\n}\n\nBrewdogListView.prototype.displayBrewdogInfo = function(beers){\n  beers.forEach((beer) => {\n    const brewdogItem = this.createBrewdogListItem(beer);\n    this.htmlContainer.appendChild(brewdogItem);\n    console.log(brewdogItem);\n  })\n}\n\nBrewdogListView.prototype.createBrewdogListItem = function(beer){\n  const brewdogInfoView = new BrewdogInfoView();\n  const brewdogInfo = brewdogInfoView.createBrewdogInfo(beer);\n  return brewdogInfo;\n}\n\n\nmodule.exports = BrewdogListView;\n\n\n//# sourceURL=webpack:///./src/views/brewdog_list_view.js?");

/***/ })

/******/ });