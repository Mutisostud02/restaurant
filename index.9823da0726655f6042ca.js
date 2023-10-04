"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./food.jpg */ "./src/food.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./menu.jpg */ "./src/menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./cheese.jpg */ "./src/cheese.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./cherry.jpg */ "./src/cherry.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./hotdog.jpg */ "./src/hotdog.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.imageDiv {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
}
.imageMenu {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-position: center;
}
.div1Img {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    
}
.div2Img {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.div3Img {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mDAA6B;IAC7B,2BAA2B;AAC/B;AACA;IACI,mDAA6B;IAC7B,2BAA2B;AAC/B;AACA;IACI,mDAA+B;;AAEnC;AACA;IACI,mDAA+B;AACnC;AACA;IACI,mDAA+B;AACnC","sourcesContent":[".imageDiv {\n    background: url('./food.jpg');\n    background-position: center;\n}\n.imageMenu {\n    background: url('./menu.jpg');\n    background-position: center;\n}\n.div1Img {\n    background: url('./cheese.jpg');\n    \n}\n.div2Img {\n    background: url('./cherry.jpg');\n}\n.div3Img {\n    background: url('./hotdog.jpg');\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactHeader: () => (/* binding */ contactHeader),
/* harmony export */   contactTabPage: () => (/* binding */ contactTabPage)
/* harmony export */ });
//contentSide div contains header
const contactHeader = (function () {
    const header = document.createElement('h1');
    header.setAttribute('style','height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 40%;');
    header.innerHTML = "CONTACT US";
    return header;
})();
const  contactTabPage = (function () {   
//two divs left and right,left =sidebar right = contentSide
    
    function div1 () {
        const div1 = document.createElement('div');
        const div1Border = document.createElement('div');
        div1Border.setAttribute('style','display:flex;justify-content:center;width:55vw;height:60vh; padding:2rem;border:2px #dcd7ee solid;background-color:#9ca3af;border-radius:5rem;');
        div1.appendChild(div1Border);
        const div1Paragraph = document.createElement('p');
        div1Paragraph.setAttribute('style','font-family:helvetica;font-weight:bold;margin:7rem;color:#292524;font-size:1.4rem;color:font-weight:900;margin-left:20%;')
        div1Paragraph.innerHTML = "We are located at Wale's Center n\
        Drive to the 3rd block under Belik House Shop numer 54.n\
        Click Below to Get our Location through Google Map.";
        div1Border.appendChild(div1Paragraph);
        div1.setAttribute('style','height:65vh; background:linear-gradient(30deg,#737373,#d4d4d4,#d4d4d8);padding:4rem;padding-left:8rem;padding-bottom:7rem;')
        return div1;
    }
    function footer () {
        const footer = document.createElement('footer');
        footer.setAttribute('style','background-color:#737373;height:8vh;border-radius:1rem;position:fixed;color:white;top:91.5vh;width:76.5vw;');
        function footerContent () {
            const footerContent = document.createElement('div');
            const footerP = document.createElement('p');
            const footerP2 = document.createElement('p');
            footerP.innerHTML = 'Christopher Nthusi creations';
            footerP2.innerHTML = '@christophernthusi';
            footerContent.setAttribute('style','display:flex;justify-content:space-between;padding-left:2rem;padding-right:2rem;')
            footerContent.appendChild(footerP);
            footerContent.appendChild(footerP2);
            return footerContent;
        }
        footer.appendChild(footerContent());
        return footer;
    }
    //contentSide div contains a div(contentDivs) with image and contents in multiple divs
    const contentDivsHolder = document.createElement('div');
    //contents in the contentDivs  

    contentDivsHolder.appendChild(div1());
    contentDivsHolder.appendChild(footer());
    contentDivsHolder.setAttribute('style','height:90%;margin:0; background-color:#cbd5e1;margin:0;');
    return contentDivsHolder;
    
})();







/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad () {   
    //two divs left and right,left =sidebar right = contentSide
    function sidebar () {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.setAttribute('style','background-color:#78716c; width:20vw;margin:0;height:100vh;overflow:hidden;');
    sidebar.appendChild(sideUl());
    return sidebar;
    }


    function sideUl () {
        const sideUl = document.createElement('ul');
        sideUl.setAttribute('style','list-style-type:none;cursor:pointer;color:white;font-weight:bold;height:50vh;display:flex;flex-direction:column;')
        const home = document.createElement('li');
        home.classList.add('home');
        home.innerHTML = 'HOME';    
        home.setAttribute('style','margin-bottom:5vh;')
        const  menu = document.createElement('li');
        menu.classList.add('menu');
        menu.innerHTML = 'MENU';
        menu.setAttribute('style','margin-bottom:5vh;')
        const contacts = document.createElement('li');
        contacts.classList.add('contacts');
        contacts.innerHTML = 'CONTACTS';
        contacts.setAttribute('style','margin-bottom:5vh;')
        sideUl.appendChild(home);
        sideUl.appendChild(menu);
        sideUl.appendChild(contacts);
        return sideUl;
        }


        function imageDiv () {
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('imageDiv');
            imageDiv.setAttribute('style','height:75vh;background-size:cover;')
            return imageDiv;
        }
        function div1 () {
            const div1 = document.createElement('div');
            const div1Paragraph = document.createElement('p');
            div1Paragraph.setAttribute('style','color:black; width:50vw;font-family:helvetica;font-size:1.4rem;')
            div1Paragraph.innerHTML = "Pickle Berry Burger is a place where you can chill out and n\
            enjoy your burger and many other snacks and fast foods offered. You can also order our food straight from your n\
            house and it will be delivered in the specified time. It is prepared through a collective of 5 separate ingredients that make n\
            up one of the sweetest burgers you'll come across. The ingredients are bread, cheese, fresh kales, egg yolk and sausage meat.";
            div1.appendChild(div1Paragraph);
            div1.setAttribute('style','height:10rem;background-color:#e7e5e4;padding:5rem;padding-left:12rem;padding-bottom:7rem;')
            return div1;
        }
        function div2 () {
            const div2 = document.createElement('div');
            const div2Paragraph = document.createElement('p');
            div2Paragraph.innerHTML = 'We are open from Monday to Saturday'
            div2.appendChild(div2Paragraph);
            const div2Paragraph2 = document.createElement('p');
            div2Paragraph2.innerHTML = 'Weekdays from 10am to 6am';
            div2.appendChild(div2Paragraph2);
            div2.setAttribute('style','height:10rem;background-color:#ede9fe;padding:3rem;padding-left:20rem;font-family:helvetica;font-size:1.4rem;font-weight:500;')
            return div2;
        }
        function div3 () {
            const div3 = document.createElement('div');
            return div3;
        }

        function contentDivs () {
        //contentSide div contains a div(contentDivs) with image and contents in multiple divs
        const contentDivs = document.createElement('div');
        contentDivs.classList.add('contentDivs');
        //contents in the contentDivs  
        contentDivs.appendChild(imageDiv());
        contentDivs.appendChild(div1());
        contentDivs.appendChild(div2());
        
        contentDivs.appendChild(div3());
        contentDivs.setAttribute('style','height:90%;margin:0; background-color:#cbd5e1;margin:0;');
        return contentDivs;
        }


    //contentSide with a class
    function contentSide () {
        const contentSide = document.createElement('div');
        contentSide.classList.add('contentSide');
        contentSide.appendChild(header());
        contentSide.appendChild(contentDivs());
        contentSide.setAttribute('style','width:80vw;overflow-y:auto;display:flex; margin:0; flex-direction:column; height:100vh; gap:0.3vh;margin:0;');
        return contentSide;
    }


    //contentSide div contains header
    function header () {
        const header = document.createElement('h1');
        header.classList.add('header');
        header.setAttribute('style','height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 30%;');
        header.innerHTML = "PICKLE BURGER RESTAURANT";
        return header;
    }

    //content holders
    const contentHolder = document.createElement('div')
    contentHolder.appendChild(sidebar());
    contentHolder.appendChild(contentSide())
    contentHolder.setAttribute('style','display:flex; gap:0.5vw; margin:0; padding:0;margin:0;');

    return contentHolder;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.js */ "./src/contacts.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");








const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);
content.setAttribute('style','overflow:hidden;height:100vh;margin:0;')
window.onload = content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
const contentSide = document.querySelector('.contentSide');
// contentSide.setAttribute('style','width:80vw; display:flex; margin:0; flex-direction:column; height:auto; gap:0.3vh;margin:0;');

const contentDivs = document.querySelector('.contentDivs');
const header = document.querySelector('.header');

const menuTab = document.querySelector('.menu');
menuTab.setAttribute('style','margin-bottom:5vh;')
menuTab.addEventListener('click',()=> {
    if (contentSide.hasChildNodes(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactHeader) === true && contentSide.hasChildNodes(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactTabPage) === true){
        _contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactHeader.remove();
        _contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactTabPage.remove();
        contentSide.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.header);
        contentSide.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuTabPage);

    } 
    header.remove();
    contentDivs.remove();
    contentSide.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.header);
    contentSide.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuTabPage)

});

const contactTab = document.querySelector('.contacts');
contactTab.addEventListener('click', () => {
    if (contentSide.hasChildNodes(_menu_js__WEBPACK_IMPORTED_MODULE_1__.header) === true && contentSide.hasChildNodes(contentDivs) === true){
        header.remove();
        contentDivs.remove();
        contentSide.appendChild(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactHeader);
        contentSide.appendChild(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactTabPage);

    } 
    _menu_js__WEBPACK_IMPORTED_MODULE_1__.header.remove();
    _menu_js__WEBPACK_IMPORTED_MODULE_1__.menuTabPage.remove();
    contentSide.appendChild(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactHeader);
    contentSide.appendChild(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactTabPage);
})



const homeTab = document.querySelector('.home');
homeTab.setAttribute('style','margin-bottom:5vh;');
homeTab.addEventListener('click',()=> {
    if (contentSide.hasChildNodes(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactHeader) === true && contentSide.hasChildNodes(_contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactTabPage) === true){
        _contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactHeader.remove();
        _contacts_js__WEBPACK_IMPORTED_MODULE_2__.contactTabPage.remove();
        contentSide.appendChild(header);
        contentSide.appendChild(contentDivs);

    } 
    _menu_js__WEBPACK_IMPORTED_MODULE_1__.header.remove();
    _menu_js__WEBPACK_IMPORTED_MODULE_1__.menuTabPage.remove();
    contentSide.appendChild(header);
    contentSide.appendChild(contentDivs);
})


// .addEventListener('click',() => {
//     content.removeChild(home());
//     content.appendChild(menu());
// })



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   menuTabPage: () => (/* binding */ menuTabPage)
/* harmony export */ });
//contentSide div contains header
    const header = (function () {
        const header = document.createElement('h1');
        header.setAttribute('style','height: 8vh; margin-top:0; margin-right:0; margin-bottom:0;color:white; background-color:#475569;padding:2vh 0 2vh 30%;');
        header.innerHTML = "PICKLE BURGER MENU";
        return header;
    })();
    const  menuTabPage = (function () {   
    //two divs left and right,left =sidebar right = contentSide
        function imageMenu () {
            const imageMenu = document.createElement('div');
            imageMenu.classList.add('imageMenu');
            imageMenu.setAttribute('style','height:75vh;background-size:cover;loading:lazy;')
            return imageMenu;
        }
        function div1 () {
            const div1 = document.createElement('div');
            const div1Border = document.createElement('div');
            div1Border.setAttribute('style','height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #86efac solid;background-color:#c7d2fe;border-radius:5rem;');
            const div1Img = document.createElement('div');
            div1Img.classList.add('div1Img');
            div1Img.setAttribute('style','margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;');
           
            div1.appendChild(div1Border);
            const div1Paragraph = document.createElement('p');
            div1Paragraph.setAttribute('style','color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;')
            div1Paragraph.innerHTML = "Cheese Burger";
            div1Border.appendChild(div1Paragraph);
            div1Border.appendChild(div1Img);
            div1.setAttribute('style','height:65vh;background-color:#e7e5e4;padding:4rem;padding-left:8rem;padding-bottom:7rem;')
            return div1;
        }
        function div2 () {
            const div2 = document.createElement('div');
            const div2Border = document.createElement('div');
            div2Border.setAttribute('style','height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #fb7185 solid;background-color:#78716c;border-radius:5rem;');
            const div2Img = document.createElement('div');
            div2Img.classList.add('div2Img');
            div2Img.setAttribute('style','margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;');
           
            div2.appendChild(div2Border);
            const div2Paragraph = document.createElement('p');
            div2Paragraph.innerHTML = 'Cherry Burger';
            div2Border.appendChild(div2Paragraph);
            div2Border.appendChild(div2Img);
            div2Paragraph.setAttribute('style','color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;')

            div2.setAttribute('style','height:65vh;background-color:#ede9fe;padding:4rem;padding-left:8rem;font-family:helvetica;font-size:1.4rem;font-weight:500;padding-bottom:7rem;')
            return div2;
        }
        function div3 () {
            const div3 = document.createElement('div');
            const div3Border = document.createElement('div');
            div3Border.setAttribute('style','height:60vh; margin-left:20%;width:30vw;padding:2rem;border:0.5rem #fb923c solid;background-color:#d9f99d;border-radius:5rem;');
            const div3Img = document.createElement('div');
            div3Img.classList.add('div3Img');
            div3Img.setAttribute('style','margin:auto;background-position:center;background-size:cover; height:20rem;width:20rem;border-radius:2rem;');
           
            div3.appendChild(div3Border);
            const div3Paragraph = document.createElement('p');
            div3Paragraph.innerHTML = 'Hotdog burger';
            div3Border.appendChild(div3Paragraph);
            div3Border.appendChild(div3Img);
            div3Paragraph.setAttribute('style','color:black; font-family:helvetica;font-size:1.4rem;color:font-weight:900;margin-left:20%;')

            div3.setAttribute('style','height:65vh;background-color:#f5f5f4;padding:4rem;padding-left:8rem;font-family:helvetica;font-size:1.4rem;font-weight:500;padding-bottom:7rem;')
            
            return div3;
        }

        function footer () {
            const footer = document.createElement('footer');
            footer.setAttribute('style','background-color:#cbd5e1;height:10vh;border-radius:1rem;position:fixed;top:89vh;width:76.5vw;');
            function footerContent () {
                const footerContent = document.createElement('div');
                const footerP = document.createElement('p');
                const footerP2 = document.createElement('p');
                footerP.innerHTML = 'Christopher Nthusi creations';
                footerP2.innerHTML = '@christophernthusi';
                footerContent.setAttribute('style','display:flex;justify-content:space-between;padding-left:2rem;padding-right:2rem;')
                footerContent.appendChild(footerP);
                footerContent.appendChild(footerP2);
                return footerContent;
            }
            footer.appendChild(footerContent());
            return footer;
        }
        //contentSide div contains a div(contentDivs) with image and contents in multiple divs
        const contentDivsHolder = document.createElement('div');
        //contents in the contentDivs  
        contentDivsHolder.appendChild(imageMenu());
        contentDivsHolder.appendChild(div1());
        contentDivsHolder.appendChild(div2());
        
        contentDivsHolder.appendChild(div3());
        contentDivsHolder.appendChild(footer());
        contentDivsHolder.setAttribute('style','height:90%;margin:0; background-color:#cbd5e1;margin:0;');
        return contentDivsHolder;
        
    })();

    



   

/***/ }),

/***/ "./src/cheese.jpg":
/*!************************!*\
  !*** ./src/cheese.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55d3fdf51b5e03f9f65c.jpg";

/***/ }),

/***/ "./src/cherry.jpg":
/*!************************!*\
  !*** ./src/cherry.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56435644ff553777fc2a.jpg";

/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e2267e2370c446706a8.jpg";

/***/ }),

/***/ "./src/hotdog.jpg":
/*!************************!*\
  !*** ./src/hotdog.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b1245bcf2ccdb741425.jpg";

/***/ }),

/***/ "./src/menu.jpg":
/*!**********************!*\
  !*** ./src/menu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55d3fdf51b5e03f9f65c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpRSw4QkFBOEIsa0JBQWtCLG1CQUFtQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxVQUFVLHlCQUF5QixTQUFTO0FBQ3ZHO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9vZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21lbnUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9jaGVlc2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jaGVycnkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9ob3Rkb2cuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmltYWdlRGl2IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmltYWdlTWVudSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5kaXYxSW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgXG59XG4uZGl2MkltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuLmRpdjNJbWcge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbURBQTZCO0lBQzdCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksbURBQTZCO0lBQzdCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksbURBQStCOztBQUVuQztBQUNBO0lBQ0ksbURBQStCO0FBQ25DO0FBQ0E7SUFDSSxtREFBK0I7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmltYWdlRGl2IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2Zvb2QuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLmltYWdlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9tZW51LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi5kaXYxSW1nIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2NoZWVzZS5qcGcnKTtcXG4gICAgXFxufVxcbi5kaXYySW1nIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2NoZXJyeS5qcGcnKTtcXG59XFxuLmRpdjNJbWcge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaG90ZG9nLmpwZycpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9jb250ZW50U2lkZSBkaXYgY29udGFpbnMgaGVhZGVyXG5leHBvcnQgY29uc3QgY29udGFjdEhlYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDogOHZoOyBtYXJnaW4tdG9wOjA7IG1hcmdpbi1yaWdodDowOyBtYXJnaW4tYm90dG9tOjA7Y29sb3I6d2hpdGU7IGJhY2tncm91bmQtY29sb3I6IzQ3NTU2OTtwYWRkaW5nOjJ2aCAwIDJ2aCA0MCU7Jyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IFwiQ09OVEFDVCBVU1wiO1xuICAgIHJldHVybiBoZWFkZXI7XG59KSgpO1xuZXhwb3J0IGNvbnN0ICBjb250YWN0VGFiUGFnZSA9IChmdW5jdGlvbiAoKSB7ICAgXG4vL3R3byBkaXZzIGxlZnQgYW5kIHJpZ2h0LGxlZnQgPXNpZGViYXIgcmlnaHQgPSBjb250ZW50U2lkZVxuICAgIFxuICAgIGZ1bmN0aW9uIGRpdjEgKCkge1xuICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdjFCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2MUJvcmRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NTV2dztoZWlnaHQ6NjB2aDsgcGFkZGluZzoycmVtO2JvcmRlcjoycHggI2RjZDdlZSBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiM5Y2EzYWY7Ym9yZGVyLXJhZGl1czo1cmVtOycpO1xuICAgICAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjFCb3JkZXIpO1xuICAgICAgICBjb25zdCBkaXYxUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXYxUGFyYWdyYXBoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46N3JlbTtjb2xvcjojMjkyNTI0O2ZvbnQtc2l6ZToxLjRyZW07Y29sb3I6Zm9udC13ZWlnaHQ6OTAwO21hcmdpbi1sZWZ0OjIwJTsnKVxuICAgICAgICBkaXYxUGFyYWdyYXBoLmlubmVySFRNTCA9IFwiV2UgYXJlIGxvY2F0ZWQgYXQgV2FsZSdzIENlbnRlciBuXFxcbiAgICAgICAgRHJpdmUgdG8gdGhlIDNyZCBibG9jayB1bmRlciBCZWxpayBIb3VzZSBTaG9wIG51bWVyIDU0Lm5cXFxuICAgICAgICBDbGljayBCZWxvdyB0byBHZXQgb3VyIExvY2F0aW9uIHRocm91Z2ggR29vZ2xlIE1hcC5cIjtcbiAgICAgICAgZGl2MUJvcmRlci5hcHBlbmRDaGlsZChkaXYxUGFyYWdyYXBoKTtcbiAgICAgICAgZGl2MS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjY1dmg7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDMwZGVnLCM3MzczNzMsI2Q0ZDRkNCwjZDRkNGQ4KTtwYWRkaW5nOjRyZW07cGFkZGluZy1sZWZ0OjhyZW07cGFkZGluZy1ib3R0b206N3JlbTsnKVxuICAgICAgICByZXR1cm4gZGl2MTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9vdGVyICgpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnYmFja2dyb3VuZC1jb2xvcjojNzM3MzczO2hlaWdodDo4dmg7Ym9yZGVyLXJhZGl1czoxcmVtO3Bvc2l0aW9uOmZpeGVkO2NvbG9yOndoaXRlO3RvcDo5MS41dmg7d2lkdGg6NzYuNXZ3OycpO1xuICAgICAgICBmdW5jdGlvbiBmb290ZXJDb250ZW50ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGZvb3RlclAuaW5uZXJIVE1MID0gJ0NocmlzdG9waGVyIE50aHVzaSBjcmVhdGlvbnMnO1xuICAgICAgICAgICAgZm9vdGVyUDIuaW5uZXJIVE1MID0gJ0BjaHJpc3RvcGhlcm50aHVzaSc7XG4gICAgICAgICAgICBmb290ZXJDb250ZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZy1sZWZ0OjJyZW07cGFkZGluZy1yaWdodDoycmVtOycpXG4gICAgICAgICAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlclApO1xuICAgICAgICAgICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChmb290ZXJQMik7XG4gICAgICAgICAgICByZXR1cm4gZm9vdGVyQ29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCgpKTtcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG4gICAgLy9jb250ZW50U2lkZSBkaXYgY29udGFpbnMgYSBkaXYoY29udGVudERpdnMpIHdpdGggaW1hZ2UgYW5kIGNvbnRlbnRzIGluIG11bHRpcGxlIGRpdnNcbiAgICBjb25zdCBjb250ZW50RGl2c0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vY29udGVudHMgaW4gdGhlIGNvbnRlbnREaXZzICBcblxuICAgIGNvbnRlbnREaXZzSG9sZGVyLmFwcGVuZENoaWxkKGRpdjEoKSk7XG4gICAgY29udGVudERpdnNIb2xkZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICAgIGNvbnRlbnREaXZzSG9sZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6OTAlO21hcmdpbjowOyBiYWNrZ3JvdW5kLWNvbG9yOiNjYmQ1ZTE7bWFyZ2luOjA7Jyk7XG4gICAgcmV0dXJuIGNvbnRlbnREaXZzSG9sZGVyO1xuICAgIFxufSkoKTtcblxuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCAoKSB7ICAgXG4gICAgLy90d28gZGl2cyBsZWZ0IGFuZCByaWdodCxsZWZ0ID1zaWRlYmFyIHJpZ2h0ID0gY29udGVudFNpZGVcbiAgICBmdW5jdGlvbiBzaWRlYmFyICgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnYmFja2dyb3VuZC1jb2xvcjojNzg3MTZjOyB3aWR0aDoyMHZ3O21hcmdpbjowO2hlaWdodDoxMDB2aDtvdmVyZmxvdzpoaWRkZW47Jyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlVWwoKSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzaWRlVWwgKCkge1xuICAgICAgICBjb25zdCBzaWRlVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBzaWRlVWwuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2xpc3Qtc3R5bGUtdHlwZTpub25lO2N1cnNvcjpwb2ludGVyO2NvbG9yOndoaXRlO2ZvbnQtd2VpZ2h0OmJvbGQ7aGVpZ2h0OjUwdmg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjsnKVxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgICAgIGhvbWUuaW5uZXJIVE1MID0gJ0hPTUUnOyAgICBcbiAgICAgICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnbWFyZ2luLWJvdHRvbTo1dmg7JylcbiAgICAgICAgY29uc3QgIG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICAgICAgbWVudS5pbm5lckhUTUwgPSAnTUVOVSc7XG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ21hcmdpbi1ib3R0b206NXZoOycpXG4gICAgICAgIGNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29udGFjdHMuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMnKTtcbiAgICAgICAgY29udGFjdHMuaW5uZXJIVE1MID0gJ0NPTlRBQ1RTJztcbiAgICAgICAgY29udGFjdHMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ21hcmdpbi1ib3R0b206NXZoOycpXG4gICAgICAgIHNpZGVVbC5hcHBlbmRDaGlsZChob21lKTtcbiAgICAgICAgc2lkZVVsLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgICAgICBzaWRlVWwuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xuICAgICAgICByZXR1cm4gc2lkZVVsO1xuICAgICAgICB9XG5cblxuICAgICAgICBmdW5jdGlvbiBpbWFnZURpdiAoKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW1hZ2VEaXYuY2xhc3NMaXN0LmFkZCgnaW1hZ2VEaXYnKTtcbiAgICAgICAgICAgIGltYWdlRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NzV2aDtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7JylcbiAgICAgICAgICAgIHJldHVybiBpbWFnZURpdjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkaXYxICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjFQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkaXYxUGFyYWdyYXBoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpibGFjazsgd2lkdGg6NTB2dztmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC1zaXplOjEuNHJlbTsnKVxuICAgICAgICAgICAgZGl2MVBhcmFncmFwaC5pbm5lckhUTUwgPSBcIlBpY2tsZSBCZXJyeSBCdXJnZXIgaXMgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGNoaWxsIG91dCBhbmQgblxcXG4gICAgICAgICAgICBlbmpveSB5b3VyIGJ1cmdlciBhbmQgbWFueSBvdGhlciBzbmFja3MgYW5kIGZhc3QgZm9vZHMgb2ZmZXJlZC4gWW91IGNhbiBhbHNvIG9yZGVyIG91ciBmb29kIHN0cmFpZ2h0IGZyb20geW91ciBuXFxcbiAgICAgICAgICAgIGhvdXNlIGFuZCBpdCB3aWxsIGJlIGRlbGl2ZXJlZCBpbiB0aGUgc3BlY2lmaWVkIHRpbWUuIEl0IGlzIHByZXBhcmVkIHRocm91Z2ggYSBjb2xsZWN0aXZlIG9mIDUgc2VwYXJhdGUgaW5ncmVkaWVudHMgdGhhdCBtYWtlIG5cXFxuICAgICAgICAgICAgdXAgb25lIG9mIHRoZSBzd2VldGVzdCBidXJnZXJzIHlvdSdsbCBjb21lIGFjcm9zcy4gVGhlIGluZ3JlZGllbnRzIGFyZSBicmVhZCwgY2hlZXNlLCBmcmVzaCBrYWxlcywgZWdnIHlvbGsgYW5kIHNhdXNhZ2UgbWVhdC5cIjtcbiAgICAgICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2MVBhcmFncmFwaCk7XG4gICAgICAgICAgICBkaXYxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6MTByZW07YmFja2dyb3VuZC1jb2xvcjojZTdlNWU0O3BhZGRpbmc6NXJlbTtwYWRkaW5nLWxlZnQ6MTJyZW07cGFkZGluZy1ib3R0b206N3JlbTsnKVxuICAgICAgICAgICAgcmV0dXJuIGRpdjE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGl2MiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXYyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGl2MlBhcmFncmFwaC5pbm5lckhUTUwgPSAnV2UgYXJlIG9wZW4gZnJvbSBNb25kYXkgdG8gU2F0dXJkYXknXG4gICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKGRpdjJQYXJhZ3JhcGgpO1xuICAgICAgICAgICAgY29uc3QgZGl2MlBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkaXYyUGFyYWdyYXBoMi5pbm5lckhUTUwgPSAnV2Vla2RheXMgZnJvbSAxMGFtIHRvIDZhbSc7XG4gICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKGRpdjJQYXJhZ3JhcGgyKTtcbiAgICAgICAgICAgIGRpdjIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDoxMHJlbTtiYWNrZ3JvdW5kLWNvbG9yOiNlZGU5ZmU7cGFkZGluZzozcmVtO3BhZGRpbmctbGVmdDoyMHJlbTtmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC1zaXplOjEuNHJlbTtmb250LXdlaWdodDo1MDA7JylcbiAgICAgICAgICAgIHJldHVybiBkaXYyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRpdjMgKCkge1xuICAgICAgICAgICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb250ZW50RGl2cyAoKSB7XG4gICAgICAgIC8vY29udGVudFNpZGUgZGl2IGNvbnRhaW5zIGEgZGl2KGNvbnRlbnREaXZzKSB3aXRoIGltYWdlIGFuZCBjb250ZW50cyBpbiBtdWx0aXBsZSBkaXZzXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnREaXZzLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnREaXZzJyk7XG4gICAgICAgIC8vY29udGVudHMgaW4gdGhlIGNvbnRlbnREaXZzICBcbiAgICAgICAgY29udGVudERpdnMuYXBwZW5kQ2hpbGQoaW1hZ2VEaXYoKSk7XG4gICAgICAgIGNvbnRlbnREaXZzLmFwcGVuZENoaWxkKGRpdjEoKSk7XG4gICAgICAgIGNvbnRlbnREaXZzLmFwcGVuZENoaWxkKGRpdjIoKSk7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50RGl2cy5hcHBlbmRDaGlsZChkaXYzKCkpO1xuICAgICAgICBjb250ZW50RGl2cy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjkwJTttYXJnaW46MDsgYmFja2dyb3VuZC1jb2xvcjojY2JkNWUxO21hcmdpbjowOycpO1xuICAgICAgICByZXR1cm4gY29udGVudERpdnM7XG4gICAgICAgIH1cblxuXG4gICAgLy9jb250ZW50U2lkZSB3aXRoIGEgY2xhc3NcbiAgICBmdW5jdGlvbiBjb250ZW50U2lkZSAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRTaWRlJyk7XG4gICAgICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICAgICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQoY29udGVudERpdnMoKSk7XG4gICAgICAgIGNvbnRlbnRTaWRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd3aWR0aDo4MHZ3O292ZXJmbG93LXk6YXV0bztkaXNwbGF5OmZsZXg7IG1hcmdpbjowOyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGhlaWdodDoxMDB2aDsgZ2FwOjAuM3ZoO21hcmdpbjowOycpO1xuICAgICAgICByZXR1cm4gY29udGVudFNpZGU7XG4gICAgfVxuXG5cbiAgICAvL2NvbnRlbnRTaWRlIGRpdiBjb250YWlucyBoZWFkZXJcbiAgICBmdW5jdGlvbiBoZWFkZXIgKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OiA4dmg7IG1hcmdpbi10b3A6MDsgbWFyZ2luLXJpZ2h0OjA7IG1hcmdpbi1ib3R0b206MDtjb2xvcjp3aGl0ZTsgYmFja2dyb3VuZC1jb2xvcjojNDc1NTY5O3BhZGRpbmc6MnZoIDAgMnZoIDMwJTsnKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IFwiUElDS0xFIEJVUkdFUiBSRVNUQVVSQU5UXCI7XG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgLy9jb250ZW50IGhvbGRlcnNcbiAgICBjb25zdCBjb250ZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHNpZGViYXIoKSk7XG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChjb250ZW50U2lkZSgpKVxuICAgIGNvbnRlbnRIb2xkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6ZmxleDsgZ2FwOjAuNXZ3OyBtYXJnaW46MDsgcGFkZGluZzowO21hcmdpbjowOycpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRIb2xkZXI7XG59XG4iLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHttZW51VGFiUGFnZSBhcyBtZW51Q29udGVudH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7aGVhZGVyIGFzIGhlYWR9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBjb250YWN0VGFiUGFnZSB9IGZyb20gJy4vY29udGFjdHMuanMnO1xuaW1wb3J0IHsgY29udGFjdEhlYWRlciB9IGZyb20gJy4vY29udGFjdHMuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6MTAwdmg7bWFyZ2luOjA7JylcbndpbmRvdy5vbmxvYWQgPSBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XG5jb25zdCBjb250ZW50U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50U2lkZScpO1xuLy8gY29udGVudFNpZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3dpZHRoOjgwdnc7IGRpc3BsYXk6ZmxleDsgbWFyZ2luOjA7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgaGVpZ2h0OmF1dG87IGdhcDowLjN2aDttYXJnaW46MDsnKTtcblxuY29uc3QgY29udGVudERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudERpdnMnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5tZW51VGFiLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdtYXJnaW4tYm90dG9tOjV2aDsnKVxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PiB7XG4gICAgaWYgKGNvbnRlbnRTaWRlLmhhc0NoaWxkTm9kZXMoY29udGFjdEhlYWRlcikgPT09IHRydWUgJiYgY29udGVudFNpZGUuaGFzQ2hpbGROb2Rlcyhjb250YWN0VGFiUGFnZSkgPT09IHRydWUpe1xuICAgICAgICBjb250YWN0SGVhZGVyLnJlbW92ZSgpO1xuICAgICAgICBjb250YWN0VGFiUGFnZS5yZW1vdmUoKTtcbiAgICAgICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcblxuICAgIH0gXG4gICAgaGVhZGVyLnJlbW92ZSgpO1xuICAgIGNvbnRlbnREaXZzLnJlbW92ZSgpO1xuICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxuXG59KTtcblxuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cycpO1xuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY29udGVudFNpZGUuaGFzQ2hpbGROb2RlcyhoZWFkKSA9PT0gdHJ1ZSAmJiBjb250ZW50U2lkZS5oYXNDaGlsZE5vZGVzKGNvbnRlbnREaXZzKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGhlYWRlci5yZW1vdmUoKTtcbiAgICAgICAgY29udGVudERpdnMucmVtb3ZlKCk7XG4gICAgICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgICAgICBjb250ZW50U2lkZS5hcHBlbmRDaGlsZChjb250YWN0VGFiUGFnZSk7XG5cbiAgICB9IFxuICAgIGhlYWQucmVtb3ZlKCk7XG4gICAgbWVudUNvbnRlbnQucmVtb3ZlKCk7XG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQoY29udGFjdFRhYlBhZ2UpO1xufSlcblxuXG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuaG9tZVRhYi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnbWFyZ2luLWJvdHRvbTo1dmg7Jyk7XG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+IHtcbiAgICBpZiAoY29udGVudFNpZGUuaGFzQ2hpbGROb2Rlcyhjb250YWN0SGVhZGVyKSA9PT0gdHJ1ZSAmJiBjb250ZW50U2lkZS5oYXNDaGlsZE5vZGVzKGNvbnRhY3RUYWJQYWdlKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbnRhY3RIZWFkZXIucmVtb3ZlKCk7XG4gICAgICAgIGNvbnRhY3RUYWJQYWdlLnJlbW92ZSgpO1xuICAgICAgICBjb250ZW50U2lkZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBjb250ZW50U2lkZS5hcHBlbmRDaGlsZChjb250ZW50RGl2cyk7XG5cbiAgICB9IFxuICAgIGhlYWQucmVtb3ZlKCk7XG4gICAgbWVudUNvbnRlbnQucmVtb3ZlKCk7XG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50U2lkZS5hcHBlbmRDaGlsZChjb250ZW50RGl2cyk7XG59KVxuXG5cbi8vIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuLy8gICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZSgpKTtcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG4vLyB9KVxuXG4iLCIvL2NvbnRlbnRTaWRlIGRpdiBjb250YWlucyBoZWFkZXJcbiAgICBleHBvcnQgY29uc3QgaGVhZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6IDh2aDsgbWFyZ2luLXRvcDowOyBtYXJnaW4tcmlnaHQ6MDsgbWFyZ2luLWJvdHRvbTowO2NvbG9yOndoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiM0NzU1Njk7cGFkZGluZzoydmggMCAydmggMzAlOycpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCJQSUNLTEUgQlVSR0VSIE1FTlVcIjtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9KSgpO1xuICAgIGV4cG9ydCBjb25zdCAgbWVudVRhYlBhZ2UgPSAoZnVuY3Rpb24gKCkgeyAgIFxuICAgIC8vdHdvIGRpdnMgbGVmdCBhbmQgcmlnaHQsbGVmdCA9c2lkZWJhciByaWdodCA9IGNvbnRlbnRTaWRlXG4gICAgICAgIGZ1bmN0aW9uIGltYWdlTWVudSAoKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltYWdlTWVudS5jbGFzc0xpc3QuYWRkKCdpbWFnZU1lbnUnKTtcbiAgICAgICAgICAgIGltYWdlTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0Ojc1dmg7YmFja2dyb3VuZC1zaXplOmNvdmVyO2xvYWRpbmc6bGF6eTsnKVxuICAgICAgICAgICAgcmV0dXJuIGltYWdlTWVudTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkaXYxICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjFCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdjFCb3JkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo2MHZoOyBtYXJnaW4tbGVmdDoyMCU7d2lkdGg6MzB2dztwYWRkaW5nOjJyZW07Ym9yZGVyOjAuNXJlbSAjODZlZmFjIHNvbGlkO2JhY2tncm91bmQtY29sb3I6I2M3ZDJmZTtib3JkZXItcmFkaXVzOjVyZW07Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXYxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYxSW1nLmNsYXNzTGlzdC5hZGQoJ2RpdjFJbWcnKTtcbiAgICAgICAgICAgIGRpdjFJbWcuc2V0QXR0cmlidXRlKCdzdHlsZScsJ21hcmdpbjphdXRvO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjsgaGVpZ2h0OjIwcmVtO3dpZHRoOjIwcmVtO2JvcmRlci1yYWRpdXM6MnJlbTsnKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjFCb3JkZXIpO1xuICAgICAgICAgICAgY29uc3QgZGl2MVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRpdjFQYXJhZ3JhcGguc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmJsYWNrOyBmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC1zaXplOjEuNHJlbTtjb2xvcjpmb250LXdlaWdodDo5MDA7bWFyZ2luLWxlZnQ6MjAlOycpXG4gICAgICAgICAgICBkaXYxUGFyYWdyYXBoLmlubmVySFRNTCA9IFwiQ2hlZXNlIEJ1cmdlclwiO1xuICAgICAgICAgICAgZGl2MUJvcmRlci5hcHBlbmRDaGlsZChkaXYxUGFyYWdyYXBoKTtcbiAgICAgICAgICAgIGRpdjFCb3JkZXIuYXBwZW5kQ2hpbGQoZGl2MUltZyk7XG4gICAgICAgICAgICBkaXYxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NjV2aDtiYWNrZ3JvdW5kLWNvbG9yOiNlN2U1ZTQ7cGFkZGluZzo0cmVtO3BhZGRpbmctbGVmdDo4cmVtO3BhZGRpbmctYm90dG9tOjdyZW07JylcbiAgICAgICAgICAgIHJldHVybiBkaXYxO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRpdjIgKCkge1xuICAgICAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2MkJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2MkJvcmRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjYwdmg7IG1hcmdpbi1sZWZ0OjIwJTt3aWR0aDozMHZ3O3BhZGRpbmc6MnJlbTtib3JkZXI6MC41cmVtICNmYjcxODUgc29saWQ7YmFja2dyb3VuZC1jb2xvcjojNzg3MTZjO2JvcmRlci1yYWRpdXM6NXJlbTsnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdjJJbWcuY2xhc3NMaXN0LmFkZCgnZGl2MkltZycpO1xuICAgICAgICAgICAgZGl2MkltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnbWFyZ2luOmF1dG87YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyOyBoZWlnaHQ6MjByZW07d2lkdGg6MjByZW07Ym9yZGVyLXJhZGl1czoycmVtOycpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGRpdjIuYXBwZW5kQ2hpbGQoZGl2MkJvcmRlcik7XG4gICAgICAgICAgICBjb25zdCBkaXYyUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGl2MlBhcmFncmFwaC5pbm5lckhUTUwgPSAnQ2hlcnJ5IEJ1cmdlcic7XG4gICAgICAgICAgICBkaXYyQm9yZGVyLmFwcGVuZENoaWxkKGRpdjJQYXJhZ3JhcGgpO1xuICAgICAgICAgICAgZGl2MkJvcmRlci5hcHBlbmRDaGlsZChkaXYySW1nKTtcbiAgICAgICAgICAgIGRpdjJQYXJhZ3JhcGguc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmJsYWNrOyBmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC1zaXplOjEuNHJlbTtjb2xvcjpmb250LXdlaWdodDo5MDA7bWFyZ2luLWxlZnQ6MjAlOycpXG5cbiAgICAgICAgICAgIGRpdjIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo2NXZoO2JhY2tncm91bmQtY29sb3I6I2VkZTlmZTtwYWRkaW5nOjRyZW07cGFkZGluZy1sZWZ0OjhyZW07Zm9udC1mYW1pbHk6aGVsdmV0aWNhO2ZvbnQtc2l6ZToxLjRyZW07Zm9udC13ZWlnaHQ6NTAwO3BhZGRpbmctYm90dG9tOjdyZW07JylcbiAgICAgICAgICAgIHJldHVybiBkaXYyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRpdjMgKCkge1xuICAgICAgICAgICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2M0JvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2M0JvcmRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjYwdmg7IG1hcmdpbi1sZWZ0OjIwJTt3aWR0aDozMHZ3O3BhZGRpbmc6MnJlbTtib3JkZXI6MC41cmVtICNmYjkyM2Mgc29saWQ7YmFja2dyb3VuZC1jb2xvcjojZDlmOTlkO2JvcmRlci1yYWRpdXM6NXJlbTsnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdjNJbWcuY2xhc3NMaXN0LmFkZCgnZGl2M0ltZycpO1xuICAgICAgICAgICAgZGl2M0ltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnbWFyZ2luOmF1dG87YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyOyBoZWlnaHQ6MjByZW07d2lkdGg6MjByZW07Ym9yZGVyLXJhZGl1czoycmVtOycpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGRpdjMuYXBwZW5kQ2hpbGQoZGl2M0JvcmRlcik7XG4gICAgICAgICAgICBjb25zdCBkaXYzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGl2M1BhcmFncmFwaC5pbm5lckhUTUwgPSAnSG90ZG9nIGJ1cmdlcic7XG4gICAgICAgICAgICBkaXYzQm9yZGVyLmFwcGVuZENoaWxkKGRpdjNQYXJhZ3JhcGgpO1xuICAgICAgICAgICAgZGl2M0JvcmRlci5hcHBlbmRDaGlsZChkaXYzSW1nKTtcbiAgICAgICAgICAgIGRpdjNQYXJhZ3JhcGguc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmJsYWNrOyBmb250LWZhbWlseTpoZWx2ZXRpY2E7Zm9udC1zaXplOjEuNHJlbTtjb2xvcjpmb250LXdlaWdodDo5MDA7bWFyZ2luLWxlZnQ6MjAlOycpXG5cbiAgICAgICAgICAgIGRpdjMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo2NXZoO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNDtwYWRkaW5nOjRyZW07cGFkZGluZy1sZWZ0OjhyZW07Zm9udC1mYW1pbHk6aGVsdmV0aWNhO2ZvbnQtc2l6ZToxLjRyZW07Zm9udC13ZWlnaHQ6NTAwO3BhZGRpbmctYm90dG9tOjdyZW07JylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRpdjM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmb290ZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgICAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JhY2tncm91bmQtY29sb3I6I2NiZDVlMTtoZWlnaHQ6MTB2aDtib3JkZXItcmFkaXVzOjFyZW07cG9zaXRpb246Zml4ZWQ7dG9wOjg5dmg7d2lkdGg6NzYuNXZ3OycpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZm9vdGVyQ29udGVudCAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyUC5pbm5lckhUTUwgPSAnQ2hyaXN0b3BoZXIgTnRodXNpIGNyZWF0aW9ucyc7XG4gICAgICAgICAgICAgICAgZm9vdGVyUDIuaW5uZXJIVE1MID0gJ0BjaHJpc3RvcGhlcm50aHVzaSc7XG4gICAgICAgICAgICAgICAgZm9vdGVyQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmctbGVmdDoycmVtO3BhZGRpbmctcmlnaHQ6MnJlbTsnKVxuICAgICAgICAgICAgICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyUCk7XG4gICAgICAgICAgICAgICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChmb290ZXJQMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvb3RlckNvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCgpKTtcbiAgICAgICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb250ZW50U2lkZSBkaXYgY29udGFpbnMgYSBkaXYoY29udGVudERpdnMpIHdpdGggaW1hZ2UgYW5kIGNvbnRlbnRzIGluIG11bHRpcGxlIGRpdnNcbiAgICAgICAgY29uc3QgY29udGVudERpdnNIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy9jb250ZW50cyBpbiB0aGUgY29udGVudERpdnMgIFxuICAgICAgICBjb250ZW50RGl2c0hvbGRlci5hcHBlbmRDaGlsZChpbWFnZU1lbnUoKSk7XG4gICAgICAgIGNvbnRlbnREaXZzSG9sZGVyLmFwcGVuZENoaWxkKGRpdjEoKSk7XG4gICAgICAgIGNvbnRlbnREaXZzSG9sZGVyLmFwcGVuZENoaWxkKGRpdjIoKSk7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50RGl2c0hvbGRlci5hcHBlbmRDaGlsZChkaXYzKCkpO1xuICAgICAgICBjb250ZW50RGl2c0hvbGRlci5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gICAgICAgIGNvbnRlbnREaXZzSG9sZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6OTAlO21hcmdpbjowOyBiYWNrZ3JvdW5kLWNvbG9yOiNjYmQ1ZTE7bWFyZ2luOjA7Jyk7XG4gICAgICAgIHJldHVybiBjb250ZW50RGl2c0hvbGRlcjtcbiAgICAgICAgXG4gICAgfSkoKTtcblxuICAgIFxuXG5cblxuICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9