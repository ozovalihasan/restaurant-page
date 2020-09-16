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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo,\\nbutton {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font: inherit;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote::before,\\nblockquote::after,\\nq::before,\\nq::after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n}\\n\\n.body-image {\\n  object-fit: cover;\\n  width: 100%;\\n}\\n\\n.main-nav {\\n  display: flex;\\n  justify-content: center;\\n}\\n.main-nav .custom-button {\\n  background-color: aqua;\\n  padding: 20px;\\n  margin: 20px;\\n}\\n.main-nav .custom-button:hover {\\n  background-color: orange;\\n  cursor: pointer;\\n}\\n\\n.w-50 {\\n  width: 50%;\\n}\\n\\n.d-flex {\\n  display: flex;\\n}\\n\\n#content {\\n  width: 100%;\\n  height: 100vh;\\n  background-size: cover;\\n  background-position: center;\\n}\\n\\n.contact-information {\\n  background-color: #f7f5afda;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  -webkit-box-shadow: 0px 0px 51px 12px #545154;\\n  -moz-box-shadow: 0px 0px 51px 12px #545154;\\n  box-shadow: 0px 0px 51px 12px #545154;\\n  border-radius: 10px;\\n}\\n.contact-information > div {\\n  margin: 30px;\\n}\\n\\n.all-menu {\\n  width: 100%;\\n}\\n.all-menu > * {\\n  height: 30vw;\\n}\\n.all-menu img {\\n  object-fit: cover;\\n  width: 100%;\\n  height: 100%;\\n}\\n.all-menu .meal-name {\\n  color: #ffffff;\\n  height: 100px;\\n  width: auto;\\n  padding: 100px;\\n  position: absolute;\\n  flex-grow: 1;\\n  font-size: 40px;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: #000000aa;\\n  border-radius: 20px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.position-relative {\\n  position: relative;\\n}\\n\\n.main-page {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: #ffffff;\\n  font-size: 80px;\\n  flex-direction: column;\\n}\\n.main-page .subtitle {\\n  padding-top: 100px;\\n  font-size: 40px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/stylesheets/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/*! exports provided: contactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPage\", function() { return contactPage; });\n/* harmony import */ var _images_contact_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contact.jpg */ \"./src/images/contact.jpg\");\n\n\nconst contactPage = () => {\n  const content = document.getElementById(\"content\");\n  content.style.backgroundImage = `url(\"${_images_contact_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\")`;\n\n  const mainContainer = document.createElement(\"div\");\n  mainContainer.classList.add(\"main-container\", \"d-flex\");\n\n  const contactInformation = document.createElement(\"div\");\n  contactInformation.classList.add(\"contact-information\");\n\n  contactInformation.innerHTML = `\n    <div>Call Now </div>\n    <div>609-659-3528</div>\n    <div>E-mail</div>\n    <div>bestrestaurant@email.com</div>\n    <div>Location</div>\n    <div>\n      <div>\n        4932  Moonlight Drive        \n      </div>\n      <div>\n        Camden\n      </div>\n      <div>\n        New Jersey\n      </div>\n    </div>\n    <div>Opening Hours</div>\n    <div>\n      <div>\n        9am -18pm(Monday-Friday)        \n      </div>\n      <div>\n        10am -19pm(Saturday)        \n      </div>\n    </div>\n  `;\n\n  mainContainer.appendChild(contactInformation);\n  content.appendChild(mainContainer);\n};\n\n\n//# sourceURL=webpack:///./src/contact-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/*! exports provided: homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\n/* harmony import */ var _images_main_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/main.jpg */ \"./src/images/main.jpg\");\n\n\nconst homePage = () => {\n  const content = document.getElementById(\"content\");\n  content.style.backgroundImage = `url(\"${_images_main_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\")`;\n\n  const mainContainer = document.createElement(\"div\");\n  mainContainer.classList.add(\"main-container\", \"d-flex\");\n\n  const allMenu = document.createElement(\"div\");\n  allMenu.classList.add(\"all-menu\");\n\n  allMenu.innerHTML = `\n    <div class=\"main-page\"> \n      <div class=\"main-title\">\n        Best Restaurant\n      </div>\n      <div class=\"subtitle\">\n        The most delicious meal you've ever had \n      </div>\n    </div>\n`;\n\n  mainContainer.appendChild(allMenu);\n  content.appendChild(mainContainer);\n};\n\n\n//# sourceURL=webpack:///./src/home-page.js?");

/***/ }),

/***/ "./src/images/contact.jpg":
/*!********************************!*\
  !*** ./src/images/contact.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c3d42af39902fb44c43c2f24b7e837e5.jpg\");\n\n//# sourceURL=webpack:///./src/images/contact.jpg?");

/***/ }),

/***/ "./src/images/dessert.jpg":
/*!********************************!*\
  !*** ./src/images/dessert.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7fba5b3424b5b3c93f85433f937a2a6d.jpg\");\n\n//# sourceURL=webpack:///./src/images/dessert.jpg?");

/***/ }),

/***/ "./src/images/hot-meal.jpg":
/*!*********************************!*\
  !*** ./src/images/hot-meal.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"83b9a3935e566d2519ba3e5f7083dd7b.jpg\");\n\n//# sourceURL=webpack:///./src/images/hot-meal.jpg?");

/***/ }),

/***/ "./src/images/main.jpg":
/*!*****************************!*\
  !*** ./src/images/main.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9163c399f2a5ce9033e8754d78067eb0.jpg\");\n\n//# sourceURL=webpack:///./src/images/main.jpg?");

/***/ }),

/***/ "./src/images/soup.jpg":
/*!*****************************!*\
  !*** ./src/images/soup.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0a13556969b278bac01a740144bc6c65.jpg\");\n\n//# sourceURL=webpack:///./src/images/soup.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.js */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page.js */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page.js */ \"./src/contact-page.js\");\n/* harmony import */ var _stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stylesheets/style.scss */ \"./src/stylesheets/style.scss\");\n/* harmony import */ var _stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction clearPage() {\n  const parent = document.getElementById(\"content\");\n  parent.lastChild.remove();\n}\n\nconst showPage = {\n  home: _home_page_js__WEBPACK_IMPORTED_MODULE_1__[\"homePage\"],\n  menu: _menu_page_js__WEBPACK_IMPORTED_MODULE_2__[\"menuPage\"],\n  contact: _contact_page_js__WEBPACK_IMPORTED_MODULE_3__[\"contactPage\"],\n};\n\nObject(_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"navBar\"])();\nObject(_home_page_js__WEBPACK_IMPORTED_MODULE_1__[\"homePage\"])();\n\n[\"home\", \"menu\", \"contact\"].forEach((val) => {\n  const pageButton = document.getElementById(val);\n  pageButton.addEventListener(\"click\", function () {\n    clearPage(val);\n    showPage[val]();\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\n/* harmony import */ var _images_hot_meal_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hot-meal.jpg */ \"./src/images/hot-meal.jpg\");\n/* harmony import */ var _images_dessert_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dessert.jpg */ \"./src/images/dessert.jpg\");\n/* harmony import */ var _images_soup_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/soup.jpg */ \"./src/images/soup.jpg\");\n\n\n\n\nconst menuPage = () => {\n  const content = document.getElementById(\"content\");\n  content.style.backgroundImage = \"\";\n\n  const mainContainer = document.createElement(\"div\");\n  mainContainer.classList.add(\"main-container\", \"d-flex\");\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"all-menu\");\n\n  container.innerHTML = `\n\n  <div class=\"position-relative\">\n    <img src=\"${_images_soup_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" alt=\"\">\n    <div class=\"meal-name\">Soup</div>\n  </div>\n  <div class=\"position-relative\">\n    <img src=\"${_images_hot_meal_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\" alt=\"\">\n    <div class=\"meal-name\">Hot Meal</div>\n  </div>\n  <div class=\"position-relative\">\n    <img src=\"${_images_dessert_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"\">\n    <div class=\"meal-name\">Dessert</div>\n  </div>\n`;\n\n  mainContainer.appendChild(container);\n  content.appendChild(mainContainer);\n};\n\n\n//# sourceURL=webpack:///./src/menu-page.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: navBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navBar\", function() { return navBar; });\nconst navBar = () => {\n  const content = document.getElementById(\"content\");\n\n  const nav = document.createElement(\"div\");\n  nav.classList.add(\"main-nav\");\n\n  const homePage = document.createElement(\"button\");\n  homePage.classList.add(\"home-page\", \"custom-button\");\n  homePage.innerText = \"Home\";\n  homePage.id = \"home\";\n\n  const menuPage = document.createElement(\"button\");\n  menuPage.classList.add(\"menu-page\", \"custom-button\");\n  menuPage.innerText = \"Menu\";\n  menuPage.id = \"menu\";\n\n  const contactPage = document.createElement(\"button\");\n  contactPage.classList.add(\"contact-page\", \"custom-button\");\n  contactPage.innerText = \"Contact\";\n  contactPage.id = \"contact\";\n\n  nav.appendChild(homePage);\n  nav.appendChild(menuPage);\n  nav.appendChild(contactPage);\n\n  content.appendChild(nav);\n};\n\n\n//# sourceURL=webpack:///./src/navbar.js?");

/***/ }),

/***/ "./src/stylesheets/style.scss":
/*!************************************!*\
  !*** ./src/stylesheets/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/stylesheets/style.scss?");

/***/ })

/******/ });