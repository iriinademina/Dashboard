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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App/app.html":
/*!*********************************!*\
  !*** ./components/App/app.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header class=\\\"header\\\">\\r\\n    <div class=\\\"header_logo\\\">\\r\\n    <a href=\\\"#\\\"><h1>dashB</h1></a>  \\r\\n      <p>&#124</p>\\r\\n    </div>\\r\\n    <div class=\\\"search\\\">\\r\\n          <i class=\\\"fas fa-search\\\" id=\\\"search-icon\\\" aria-hidden=\\\"true\\\"></i>\\r\\n      <input\\r\\n        type=\\\"search\\\"\\r\\n        name=\\\"\\\"\\r\\n        id=\\\"search\\\"\\r\\n        placeholder=\\\" Type anywhere to search\\\"\\r\\n      />\\r\\n    </div>\\r\\n    <div class=\\\"header_total-item\\\">\\r\\n      <div><p>Total<br>items</p></div>\\r\\n      <div class=\\\"total-score\\\"><p>XXX</p></div>\\r\\n    </div>\\r\\n</header>\\r\\n<div class=\\\"wrapper\\\"></div>\";\n\n//# sourceURL=webpack:///./components/App/app.html?");

/***/ }),

/***/ "./components/Course/course.html":
/*!***************************************!*\
  !*** ./components/Course/course.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"card\\\">\\r\\n    <div class=\\\"card__title\\\"></div>\\r\\n    <div class=\\\"cards\\\">Hello</div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./components/Course/course.html?");

/***/ }),

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./css/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./css/index.css?");

/***/ }),

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_app_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/App/app.html */ \"./components/App/app.html\");\n/* harmony import */ var _components_App_app_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App_app_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Course_course_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Course/course.html */ \"./components/Course/course.html\");\n/* harmony import */ var _components_Course_course_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Course_course_html__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\nclass App {\r\n\r\n    constructor() {\r\n        let container = document.getElementsByClassName(\"gen-wrapper\")[0]\r\n        container.innerHTML = `${_components_App_app_html__WEBPACK_IMPORTED_MODULE_0___default.a}`\r\n        document.querySelector(\".wrapper\").innerHTML = `${_components_Course_course_html__WEBPACK_IMPORTED_MODULE_1___default.a}`\r\n    }\r\n\r\n    render() {\r\n       return this.container\r\n    }\r\n\r\n}\r\n\r\n//classes\r\n\r\nclass HeaderWrapper {\r\n    render() {\r\n      const container = document.getElementsByClassName(\"gen-wrapper\")[0];\r\n      container.innerHTML = `${header}${wrapper}`;\r\n      return container;\r\n    }\r\n  }\r\n  \r\n  class Sidebar {\r\n    constructor(courseTitle, courseModules) {\r\n      this.header = courseTitle;\r\n    }\r\n    renderSidebar() {\r\n        \r\n    }\r\n    render() {\r\n\r\n    }\r\n    clear() {\r\n      this.courses = [];\r\n      this.element.innerHTML = \"\";\r\n    }\r\n  }\r\n  class Dashboard {\r\n    constructor(data) {\r\n      this.stages = [];\r\n      this.element = this.renderDashboard();\r\n    }\r\n    renderDashboard() {\r\n      const bodyContainer = document.getElementsByClassName(\"wrapper\")[0];\r\n      const main = document.createElement(\"main\");\r\n      main.classList.add(\"main\");\r\n      bodyContainer.append(main);\r\n    }\r\n    renderDashboard() {}\r\n    render() {}\r\n  }\r\n  class Stage {\r\n    constructor(data) {}\r\n    renderStage(title, key) {\r\n      /* --------------- */\r\n      const divStage = document.createElement(\"div\");\r\n      divStage.classList.add(\"column\");\r\n      divStage.classList.add(key);\r\n      /* --------------- */\r\n      const divStageHeaderElem = document.createElement(\"div\");\r\n      divStageHeaderElem.classList.add(\"column__header\");\r\n      /* --------------- */\r\n      const divStageHeaderText = document.createElement(\"h3\");\r\n      divStageHeaderText.textContent = title;\r\n      divStage.append(divStageHeaderElem);\r\n      divStageHeaderElem.append(divStageHeaderText);\r\n    }\r\n    clear() {\r\n      this.courses = [];\r\n      this.element.innerHTML = \"\";\r\n    }\r\n  }\r\n  class Course {\r\n    constructor(title, guid, module) {\r\n      this.guid = guid;\r\n      this.title = data.title;\r\n      this.element = this.renderCourse(data.title);\r\n      //  this.render(data.modules);\r\n      this.modules = [];\r\n    }\r\n    renderCourse() {\r\n      const divCourse = renderCard(this.guid);\r\n      const divCourseTitle = renderCardsTitle(this.title);\r\n      const dvCardContainer = renderCardModules();\r\n      divCourse.append(divCourseTitle);\r\n      divCourse.append(divCardContainer);\r\n    }\r\n    renderCard(guid) {\r\n      const divCourse = document.createElement(\"div\");\r\n      divCourse.classList.add(\"card\");\r\n      divCourse.dataset.guid = guid;\r\n      return divCourse;\r\n    }\r\n    renderCardsTitle(title) {\r\n      const divCourseTitle = document.createElement(\"card__title\");\r\n      divCourseTitle.classList.add(\"card__title\");\r\n      divCorserTitle.textContent = title;\r\n      divCourse.append(divCourseTitle);\r\n      return divCourseTitle;\r\n      /*   \r\n      divCourseTitleText = document.createElement(\"h3\");\r\n      divCourseTitleText.textContent = title;\r\n       */\r\n    }\r\n    renderCardModules() {\r\n      const divCardContainer = document.createElement(\"div\");\r\n      divCardContainer.classList.add(\"cards\");\r\n      return divCardContainer;\r\n    }\r\n    render(modulesData) {\r\n      this.modules = modulesData.map(\r\n        (moduleData = new Module(data.title, data.guid))\r\n      );\r\n      let moduleElements = this.modules.map(moduleItem => moduleItem.element);\r\n      this.element.append(...moduleElements);\r\n    }\r\n  }\r\n  class Module {\r\n    constructor(title, guid) {\r\n      this.title = title;\r\n      this.guid = guid;\r\n      this.moduleElement = this.renderModule;\r\n    }\r\n    renderModule(title, guid) {\r\n      const div = document.createElement(\"div\");\r\n      div.classList.add(\"card__module\");\r\n      div.dataset.guid = guid;\r\n      div.textContent = title;\r\n      return div;\r\n    }\r\n  }\r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./js/App.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ \"./js/sidebar.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./js/App.js\");\n/* harmony import */ var _servi_e__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviсe */ \"./js/serviсe.js\");\n\r\n\r\n\r\n\r\n\r\nlet cardModule = Array.from(document.getElementsByClassName(\"card\"));\r\n/*  -- - -- - -*/\r\nconsole.log(cardModule);\r\ncardModule.forEach(item => (item.onclick = _sidebar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n\r\nconst container = new _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\ncontainer.render();\r\n\r\nObject(_servi_e__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().then(response => {\r\n  // keys / displayName\r\n  let statuses = [\r\n    ...new Set(\r\n      response.reduce(\r\n        (acc, curr) => [\r\n          ...acc,\r\n          ...curr.modules.map(item => item.moduleStatus.displayName)\r\n        ],\r\n        []\r\n      )\r\n    )\r\n  ];\r\n\r\n  console.log(statuses);\r\n\r\n  // test modules in status\r\n\r\n  let result1 = response.reduce((acc, curr) => {\r\n    return [\r\n      ...acc,\r\n      ...curr.modules.filter(\r\n        item => item.moduleStatus.displayName === `${statuses[0]}`\r\n      )\r\n    ];\r\n  }, []);\r\n  console.log(result1);\r\n  let result2 = response.reduce((acc, curr) => {\r\n    return [\r\n      ...acc,\r\n      ...curr.modules.filter(\r\n        item => item.moduleStatus.displayName === `${statuses[1]}`\r\n      )\r\n    ];\r\n  }, []);\r\n  console.log(result2);\r\n\r\n  // test names courses in statuses[0]\r\n\r\n  let testCourses1 = response.map(item => {\r\n    if (\r\n      item.modules.some(\r\n        item1 =>\r\n          (item1.moduleStatus.displayName === `${statuses[0]}`.length) !== 0\r\n      )\r\n    )\r\n      return item.courseTitle;\r\n  });\r\n  console.log(testCourses1.filter(Boolean));\r\n\r\n  // test objects courses in statuses[1]\r\n\r\n  let testCourses2 = response.map(item => {\r\n    if (\r\n      item.modules.some(\r\n        item1 => item1.moduleStatus.displayName === `${statuses[1]}`\r\n      )\r\n    )\r\n      return item;\r\n  });\r\n  console.log(testCourses2.filter(Boolean));\r\n\r\n  let testCourses3 = response.map(item => {\r\n    if (\r\n      item.modules.some(\r\n        item1 => item1.moduleStatus.displayName === `${statuses[2]}`\r\n      )\r\n    )\r\n      return item.courseTitle;\r\n  });\r\n\r\n  console.log(testCourses3.filter(Boolean));\r\n\r\n  let course = response.reduce(\r\n    (acc, curr) => [\r\n      ...acc,\r\n      ...curr.modules.map(item => item.moduleStatus.displayName)\r\n    ],\r\n    []\r\n  );\r\n\r\n  // test output cards\r\n\r\n  // result.forEach(item => {\r\n  //   let title = document.createElement(\"div\");\r\n  //   title.textContent = item.moduleTitle;\r\n  //   title.style.border = \"1px solid gray\";\r\n  //   document.body.appendChild(title);\r\n  // });\r\n  //  let wrapper = document.createElement(\"div\");\r\n  //       document.body.appendChild(wrapper);\r\n  //       wrapper.style.display = \"flex\";\r\n  //   statuses.forEach (status => {\r\n  //     let wrapper = document.createElement(\"div\");\r\n  //       document.body.appendChild(wrapper);\r\n  //     result.forEach ( card => {\r\n  //       result.forEach(item => {\r\n  //       let title = document.createElement(\"div\");\r\n  //       title.textContent = item.moduleTitle;\r\n  //       title.style.border = \"1px solid gray\";\r\n  //       wrapper.appendChild(title);\r\n  //     });\r\n  //   })\r\n  // })\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/serviсe.js":
/*!***********************!*\
  !*** ./js/serviсe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst getData = async () => {\r\n    return await (\r\n        await fetch (\"http://localhost:3000/cards\")).json()\r\n}\r\n\r\n// not work  babel polifill Error\r\n// const getData = await fetch(\"http://localhost:3000/cards\");\r\n// export const data = await response.json();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\r\n\n\n//# sourceURL=webpack:///./js/servi%D1%81e.js?");

/***/ }),

/***/ "./js/sidebar.js":
/*!***********************!*\
  !*** ./js/sidebar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nfunction addSidebar (event) {\r\n    event.preventDefault()\r\n    let sidebar = document.getElementsByClassName(\"wrapper\")[0]\r\n        .appendChild(document.createElement(\"div\"))\r\n    sidebar.className = \"sidebar\"\r\n    let content = sidebar.appendChild (document.createElement(\"p\"))\r\n    content.textContent = \"Hello\"\r\n    content.onclick = function (event) {sidebar.remove()}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addSidebar);\n\n//# sourceURL=webpack:///./js/sidebar.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/body.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/body.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\r\\n  font-family: \\\"Montserrat\\\", sans-serif;\\r\\n  margin: 0;\\r\\n  height: 100vh;\\r\\n  background-color: #f0f0f0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  /* overflow: hidden; */\\r\\n  /* border: 1px solid red; */\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  height: 90vh;\\r\\n  /* height: 100%; */\\r\\n  background-color: #f0f0f0;\\r\\n  display: flex;\\r\\n  /* width: 100%; */\\r\\n  /* border: 2px solid red; */\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/body.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/card.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/card.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\r\\n  background: #f0f0f0;\\r\\n  font-family: \\\"Montserrat\\\", sans-serif;\\r\\n}\\r\\n.card {\\r\\n  margin-top: 30pt;\\r\\n  border-radius: 2;\\r\\n  background: #ffffff;\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding-bottom: 15pt;\\r\\n}\\r\\n.card__title {\\r\\n  padding: 5pt 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n.card__title > h3 {\\r\\n  font-weight: 800;\\r\\n  color: #575757;\\r\\n}\\r\\n.cards {\\r\\n  width: 90%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  grid-auto-rows: 1fr;\\r\\n  grid-gap: 1rem;\\r\\n}\\r\\n.card__module {\\r\\n  background: #f0f0f0;\\r\\n  padding: 9pt 7pt;\\r\\n  border-left: 5pt solid #575757;\\r\\n  color: #575757;\\r\\n}\\r\\n\\r\\n.card__module:hover {\\r\\n  background: #9ddcce;\\r\\n  padding: 9pt 7pt;\\r\\n  border-left: 5pt solid #00a79a;\\r\\n  color: #00a79a;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.circle {\\r\\n  margin-left: 15pt;\\r\\n  border: 2pt solid red;\\r\\n  /* background: red; */\\r\\n  border-radius: 100%;\\r\\n  padding: 2pt;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/card.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/classes.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/classes.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".hidden {\\r\\n  display: none;\\r\\n  transition: 2s;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/classes.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/column.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/column.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".column {\\r\\n  margin: 3vh 0;\\r\\n  flex-basis: 400px;\\r\\n  flex-grow: 0;\\r\\n  flex-shrink: 0;\\r\\n  text-align: center;\\r\\n  margin: 5pt;\\r\\n  display: flex;\\r\\n  align-content: center;\\r\\n  flex-direction: column;\\r\\n  flex-wrap: nowrap;\\r\\n}\\r\\n.column:first-child {\\r\\n  margin-left: 10pt;\\r\\n}\\r\\n.cards_container > div:first-child {\\r\\n  margin-top: 0;\\r\\n}\\r\\n.cards_container {\\r\\n  height: 100%;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/column.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/header.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/header.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".header {\\r\\n  background-color: white;\\r\\n  height: 10vh;\\r\\n  display: flex;\\r\\n  align-content: center;\\r\\n  justify-content: space-between;\\r\\n  /* border: 1px solid red; */\\r\\n}\\r\\n.header_logo {\\r\\n  grid-area: logo;\\r\\n  background-color: white;\\r\\n  color: black;\\r\\n  display: flex;\\r\\n  flex-basis: 25vw;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  /* border: 1px solid green; */\\r\\n}\\r\\n.header_logo > a {\\r\\n  justify-self: flex-start;\\r\\n  margin-left: 2vw;\\r\\n  font-weight: 700;\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.header_logo > p {\\r\\n  font-size: 32px;\\r\\n  font-weight: 100;\\r\\n  margin-right: 2vw;\\r\\n}\\r\\n.header_total-item {\\r\\n  /* border: 1px solid blue; */\\r\\n  grid-area: total;\\r\\n  flex-basis: 10%;\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  text-align: center;\\r\\n  align-items: center;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  align-content: flex-end;\\r\\n  font-weight: 500;\\r\\n}\\r\\n.total-score {\\r\\n  font-weight: 700;\\r\\n  font-size: 20pt;\\r\\n}\\r\\n.total-score:last-child {\\r\\n  margin-left: 5pt;\\r\\n}\\r\\n@media (max-width: 1000px) {\\r\\n \\r\\n  .header {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    width: 100vw;\\r\\n    position: sticky;\\r\\n  }\\r\\n  .header_logo {\\r\\n    /* border: 1px solid red; */\\r\\n    align-self: center;\\r\\n    flex-basis: 5vw;\\r\\n    margin: 0;\\r\\n  }\\r\\n  .header_logo > a {\\r\\n    font-size: 5pt;\\r\\n    transform: rotate(90deg);\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  .total-score:last-child {\\r\\n    transform: rotate(90deg);\\r\\n    font-weight: 500;\\r\\n    margin: 0;\\r\\n    display: none;\\r\\n  }\\r\\n  .header_total-item {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .header_logo > p {\\r\\n    display: none;\\r\\n    margin: 0;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext);\", \"\"]);\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./column.css */ \"./node_modules/css-loader/dist/cjs.js!./css/column.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./css/header.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./css/main.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./scroll.css */ \"./node_modules/css-loader/dist/cjs.js!./css/scroll.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./css/sidebar.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./classes.css */ \"./node_modules/css-loader/dist/cjs.js!./css/classes.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./body.css */ \"./node_modules/css-loader/dist/cjs.js!./css/body.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./search.css */ \"./node_modules/css-loader/dist/cjs.js!./css/search.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./card.css */ \"./node_modules/css-loader/dist/cjs.js!./css/card.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./skull.css */ \"./node_modules/css-loader/dist/cjs.js!./css/skull.css\"), \"\");\n// Module\nexports.push([module.i, \"\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".main {\\r\\n  /* height: 100%; */\\r\\n  flex-basis: 100%;\\r\\n  overflow-x: auto;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/scroll.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/scroll.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n/* Track */\\r\\n::-webkit-scrollbar-track {\\r\\n  background: #f1f1f1;\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n  border-radius: 7px;\\r\\n}\\r\\n\\r\\n/* Handle on hover */\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/scroll.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/search.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/search.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".search {\\r\\n  grid-area: search;\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  flex-basis: 50%;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n.search > input {\\r\\n  font-size: 17px;\\r\\n  flex-basis: 90%;\\r\\n  border: none;\\r\\n  position: relative;\\r\\n}\\r\\n.search > i {\\r\\n  font-size: 14pt;\\r\\n  color: #5a5a5a;\\r\\n  margin-right: 3pt;\\r\\n}\\r\\n@media (max-width: 1000px) {\\r\\n  .search > input {\\r\\n    font-size: 14px;\\r\\n    flex-basis: 70vw;\\r\\n    border: none;\\r\\n    position: relative;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/search.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/sidebar.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/sidebar.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".sidebar {\\r\\n  flex-basis: 300pt;\\r\\n  border-left: 5pt solid #f2f2f2;\\r\\n  background-color: #313131;\\r\\n  flex-shrink: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  transition: opacity linear 2000ms;\\r\\n}\\r\\n.sidebar--collapse {\\r\\n  opacity: 0;\\r\\n}\\r\\n.sidebar__header {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  flex-basis: 10%;\\r\\n  /* border: 2px solid yellow; */\\r\\n  /* background: yellow; */\\r\\n  align-items: center;\\r\\n}\\r\\n.sidebar__header-text {\\r\\n  /* border: 2px solid red; */\\r\\n  margin-left: 40%;\\r\\n  color: white;\\r\\n}\\r\\n.close-button {\\r\\n  margin: 20px;\\r\\n  color: #000000;\\r\\n  font-weight: bold;\\r\\n  /* float: right; */\\r\\n  font-size: 40px;\\r\\n  line-height: 20px;\\r\\n  /* align-self: flex-end; */\\r\\n  /* justify-self: end; */\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n  /* background: red; */\\r\\n  color: white;\\r\\n\\r\\n  /* border: 2px solid red; */\\r\\n}\\r\\n.sidebar__card-container {\\r\\n  display: flex;\\r\\n  /* justify-content: space-between; */\\r\\n  align-content: center;\\r\\n  flex-direction: column;\\r\\n  /* background: lightblue; */\\r\\n  /* border: 2px solid blue; */\\r\\n  flex-basis: 100%;\\r\\n  overflow-y: auto;\\r\\n  flex-wrap: nowrap;\\r\\n}\\r\\n.sidebar__card-container > div:first-child {\\r\\n  /* border: 2px solid red; */\\r\\n  margin-top: 0;\\r\\n}\\r\\n@media (max-width: 1000px) {\\r\\n  .sidebar {\\r\\n    flex-basis: 250pt;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/skull.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/skull.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".skeleton {\\r\\n  border-radius: 2;\\r\\n  background: #dcdcdc;\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  padding-bottom: 5pt;\\r\\n  margin-top: 30pt;\\r\\n}\\r\\n.skeleton__title {\\r\\n  padding: 10pt 5pt;\\r\\n  background: #676767;\\r\\n  flex-basis: 100%;\\r\\n  width: 95%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  /* border: 2pt solid red; */\\r\\n  margin-top: 5pt;\\r\\n}\\r\\n\\r\\n.skeletons {\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.skeleton__module {\\r\\n  background: #676767;\\r\\n  padding: 9pt 7pt;\\r\\n  margin-top: 5pt;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/skull.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });