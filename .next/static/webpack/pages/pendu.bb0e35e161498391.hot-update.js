"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pendu",{

/***/ "./src/Pendu/first_pendu.js":
/*!**********************************!*\
  !*** ./src/Pendu/first_pendu.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pendu.module.css */ \"./src/Pendu/pendu.module.css\");\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pendu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Trivia = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"HANGMAN\"), 2), wordToGuess = _useState[0], setWordToGuess = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), clickedButtons = _useState1[0], setClickedButtons = _useState1[1];\n    var checkLetter = function(letter) {\n        setClickedButtons(function(prevClickedButtons) {\n            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(prevClickedButtons).concat([\n                letter\n            ]);\n        });\n    };\n    var displayLetterOrLine = function(letter) {\n        return clickedButtons.includes(letter) ? letter : \"_\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to trivia \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: wordToGuess.length\n                }, function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default().space),\n                        children: displayLetterOrLine(wordToGuess[i])\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: 26\n                }, function(_, i) {\n                    return String.fromCharCode(\"A\".charCodeAt(0) + i);\n                }).map(function(letter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return checkLetter(letter);\n                        },\n                        className: clickedButtons.includes(letter) ? (_pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"red-button\"]) : \"\",\n                        children: letter\n                    }, letter, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(Trivia, \"MhHwYzMV4KQJdRD2NwFCiy1M0Mc=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGVuZHUvZmlyc3RfcGVuZHUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUV2QyxJQUFNRyxTQUFTOztJQUNiLElBQXNDRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsZ0JBQXhDRyxjQUErQkgsY0FBbEJJLGlCQUFrQko7SUFDdEMsSUFBNENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQWhESyxpQkFBcUNMLGVBQXJCTSxvQkFBcUJOO0lBRTVDLElBQU1PLGNBQWMsU0FBQ0M7UUFDbkJGLGtCQUFrQixTQUFDRzttQkFBdUIsb0VBQUlBLDJCQUFKO2dCQUF3QkQ7YUFBTzs7SUFDM0U7SUFFQSxJQUFNRSxzQkFBc0IsU0FBQ0Y7UUFDM0IsT0FBT0gsZUFBZU0sUUFBUSxDQUFDSCxVQUFVQSxTQUFTO0lBQ3BEO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7MEJBQ0VFLE1BQU1DLElBQUksQ0FBQztvQkFBRUMsUUFBUWIsWUFBWWEsTUFBTTtnQkFBQyxHQUFHLFNBQUNDLEdBQUdDO3lDQUM5Qyw4REFBQ0M7d0JBQWFDLFdBQVduQixnRUFBZTtrQ0FDckNTLG9CQUFvQlAsV0FBVyxDQUFDZSxFQUFFO3VCQUQxQkE7Ozs7Ozs7Ozs7OzBCQU1mLDhEQUFDTjswQkFDRUUsTUFBTUMsSUFBSSxDQUFDO29CQUFFQyxRQUFRO2dCQUFHLEdBQUcsU0FBQ0MsR0FBR0M7MkJBQU1HLE9BQU9DLFlBQVksQ0FBQyxJQUFJQyxVQUFVLENBQUMsS0FBS0w7bUJBQUlNLEdBQUcsQ0FBQ2hCLFNBQUFBO3lDQUNwRiw4REFBQ2lCO3dCQUFvQkMsU0FBUzttQ0FBTW5CLFlBQVlDOzt3QkFBU1ksV0FBV2YsZUFBZU0sUUFBUSxDQUFDSCxVQUFVUCx3RUFBb0IsR0FBRztrQ0FDMUhPO3VCQURVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkI7R0FoQ01OO0tBQUFBO0FBa0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9QZW5kdS9maXJzdF9wZW5kdS5qcz9jNTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wZW5kdS5tb2R1bGUuY3NzXCJcclxuXHJcbmNvbnN0IFRyaXZpYSA9ICgpID0+IHtcclxuICBjb25zdCBbd29yZFRvR3Vlc3MsIHNldFdvcmRUb0d1ZXNzXSA9IHVzZVN0YXRlKFwiSEFOR01BTlwiKTtcclxuICBjb25zdCBbY2xpY2tlZEJ1dHRvbnMsIHNldENsaWNrZWRCdXR0b25zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgY2hlY2tMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkQnV0dG9ucygocHJldkNsaWNrZWRCdXR0b25zKSA9PiBbLi4ucHJldkNsaWNrZWRCdXR0b25zLCBsZXR0ZXJdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlMZXR0ZXJPckxpbmUgPSAobGV0dGVyKSA9PiB7XHJcbiAgICByZXR1cm4gY2xpY2tlZEJ1dHRvbnMuaW5jbHVkZXMobGV0dGVyKSA/IGxldHRlciA6ICdfJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+V2VsY29tZSB0byB0cml2aWEgPC9oMT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogd29yZFRvR3Vlc3MubGVuZ3RoIH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzWydzcGFjZSddfT5cclxuICAgICAgICAgICAge2Rpc3BsYXlMZXR0ZXJPckxpbmUod29yZFRvR3Vlc3NbaV0pfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDI2IH0sIChfLCBpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKCdBJy5jaGFyQ29kZUF0KDApICsgaSkpLm1hcChsZXR0ZXIgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2xldHRlcn0gb25DbGljaz17KCkgPT4gY2hlY2tMZXR0ZXIobGV0dGVyKX0gY2xhc3NOYW1lPXtjbGlja2VkQnV0dG9ucy5pbmNsdWRlcyhsZXR0ZXIpID8gc3R5bGVzWydyZWQtYnV0dG9uJ10gOiAnJ30+XHJcbiAgICAgICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmlhO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlRyaXZpYSIsIndvcmRUb0d1ZXNzIiwic2V0V29yZFRvR3Vlc3MiLCJjbGlja2VkQnV0dG9ucyIsInNldENsaWNrZWRCdXR0b25zIiwiY2hlY2tMZXR0ZXIiLCJsZXR0ZXIiLCJwcmV2Q2xpY2tlZEJ1dHRvbnMiLCJkaXNwbGF5TGV0dGVyT3JMaW5lIiwiaW5jbHVkZXMiLCJkaXYiLCJoMSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwic3BhbiIsImNsYXNzTmFtZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Pendu/first_pendu.js\n"));

/***/ })

});