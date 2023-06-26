/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/skeleton.js":
/*!*******************************!*\
  !*** ./src/pages/skeleton.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ skeleton)\n/* harmony export */ });\n//import printMe from \"./printMe.js\"\n\nfunction skeleton() {\n\n    console.log(\"deleteme\")\n\n    let content = document.querySelector(\"div\")\n    console.log(content)\n\n    // Create the header element\n    const header = document.createElement('header');\n    content.appendChild(header);\n    const navbar = document.createElement('nav');\n    navbar.className = 'navbar';\n\n    // Create the unordered list for the navbar links\n    const navList = document.createElement('ul');\n\n    // Array of navbar link names and URLs\n    const navbarLinks = [\n        { name: 'Home', url: '#' },\n        { name: 'About', url: '#' },\n        { name: 'Menu', url: '#' },\n        { name: 'Contact', url: '#' }\n    ];\n\n    function handleNavItemClick(event) {\n        //printMe()\n        event.preventDefault();\n        console.log('Clickedddd:', this.textContent);\n        // Add your custom logic here\n    }\n\n\n    // Loop through the navbar links array and create list items with anchor tags\n    navbarLinks.forEach(link => {\n        const listItem = document.createElement('li');\n        const anchor = document.createElement('a');\n        anchor.textContent = link.name;\n        anchor.href = link.url;\n\n        // Add event listener to each navbar link\n        anchor.addEventListener('click', handleNavItemClick);\n\n        listItem.appendChild(anchor);\n        navList.appendChild(listItem);\n    });\n\n    // Append the unordered list to the navbar\n    navbar.appendChild(navList);\n\n    // Append the navbar to the body\n    content.appendChild(navbar);\n\n\n    // Create the heading element\n    const heading = document.createElement('h1');\n    heading.textContent = 'Welcome to Our Restaurant!';\n    header.appendChild(heading);\n\n    // Create the main element\n    return content\n}\n\n\n//# sourceURL=webpack://restaurant/./src/pages/skeleton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/skeleton.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;