"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pendu/pendu_one",{

/***/ "./src/Pendu/first_pendu.js":
/*!**********************************!*\
  !*** ./src/Pendu/first_pendu.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pendu.module.css */ \"./src/Pendu/pendu.module.css\");\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pendu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Trivia = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"TEST\"), 2), wordToGuess = _useState[0], setWordToGuess = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), clickedButtons = _useState1[0], setClickedButtons = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), i = _useState2[0], seti = _useState2[1];\n    var changeWord = function(change) {\n        setClickedButtons([]);\n        console.log(i);\n        if (change == \"prev\") {\n            seti(i - 1);\n        } else {\n            seti;\n        }\n        if (i == 0) {\n            setWordToGuess(\"TEST\");\n        } else if (i == 1) {\n            setWordToGuess(\"AZERRTHTY\");\n        }\n    };\n    var checkLetter = function(letter) {\n        setClickedButtons(function(prevClickedButtons) {\n            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(prevClickedButtons).concat([\n                letter\n            ]);\n        });\n        console.log(wordToGuess);\n    };\n    var displayLetterOrLine = function(letter) {\n        if (letter != \" \") {\n            return clickedButtons.includes(letter) ? letter : \"_\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Hangman \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: 26\n                }, function(_, i) {\n                    return String.fromCharCode(\"A\".charCodeAt(0) + i);\n                }).map(function(letter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return checkLetter(letter);\n                        },\n                        className: clickedButtons.includes(letter) ? (_pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"red-button\"]) : \"\",\n                        children: letter\n                    }, letter, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: wordToGuess.length\n                }, function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default().space),\n                        children: displayLetterOrLine(wordToGuess[i])\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return changeWord(\"prev\");\n                },\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return changeWord(\"up\");\n                },\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Trivia, \"uF9/ayXSuEgVhm6Dby9VmPgiaRM=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGVuZHUvZmlyc3RfcGVuZHUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUV2QyxJQUFNRyxTQUFTOztJQUNiLElBQXNDRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsYUFBeENHLGNBQStCSCxjQUFsQkksaUJBQWtCSjtJQUN0QyxJQUE0Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBaERLLGlCQUFxQ0wsZUFBckJNLG9CQUFxQk47SUFDNUMsSUFBa0JBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxRQUFwQk8sSUFBV1AsZUFBUlEsT0FBUVI7SUFFbEIsSUFBTVMsYUFBYSxTQUFDQztRQUNsQkosa0JBQWtCLEVBQUU7UUFDcEJLLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDWixJQUFJRyxVQUFVLFFBQVE7WUFDbEJGLEtBQUtELElBQUU7UUFDWCxPQUFLO1lBQ0RDO1FBQ0o7UUFFQSxJQUFHRCxLQUFHLEdBQUU7WUFDSkgsZUFBZTtRQUNuQixPQUFNLElBQUlHLEtBQUcsR0FBRztZQUNaSCxlQUFlO1FBQ25CO0lBQ0Y7SUFFQSxJQUFNUyxjQUFjLFNBQUNDO1FBQ25CUixrQkFBa0IsU0FBQ1M7bUJBQXVCLG9FQUFJQSwyQkFBSjtnQkFBd0JEO2FBQU87O1FBQ3pFSCxRQUFRQyxHQUFHLENBQUNUO0lBQ2Q7SUFFQSxJQUFNYSxzQkFBc0IsU0FBQ0Y7UUFDM0IsSUFBSUEsVUFBVSxLQUFLO1lBQ2YsT0FBT1QsZUFBZVksUUFBUSxDQUFDSCxVQUFVQSxTQUFTO1FBQ3REO0lBRUY7SUFFQSxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUVKLDhEQUFDRDswQkFDRUUsTUFBTUMsSUFBSSxDQUFDO29CQUFFQyxRQUFRO2dCQUFHLEdBQUcsU0FBQ0MsR0FBR2hCOzJCQUFNaUIsT0FBT0MsWUFBWSxDQUFDLElBQUlDLFVBQVUsQ0FBQyxLQUFLbkI7bUJBQUlvQixHQUFHLENBQUNiLFNBQUFBO3lDQUNwRiw4REFBQ2M7d0JBQW9CQyxTQUFTO21DQUFNaEIsWUFBWUM7O3dCQUFTZ0IsV0FBV3pCLGVBQWVZLFFBQVEsQ0FBQ0gsVUFBVWIsd0VBQW9CLEdBQUc7a0NBQzFIYTt1QkFEVUE7Ozs7Ozs7Ozs7OzBCQU1qQiw4REFBQ0k7MEJBQ0VFLE1BQU1DLElBQUksQ0FBQztvQkFBRUMsUUFBUW5CLFlBQVltQixNQUFNO2dCQUFDLEdBQUcsU0FBQ0MsR0FBR2hCO3lDQUM5Qyw4REFBQ3dCO3dCQUFhRCxXQUFXN0IsZ0VBQWU7a0NBQ3JDZSxvQkFBb0JiLFdBQVcsQ0FBQ0ksRUFBRTt1QkFEMUJBOzs7Ozs7Ozs7OzswQkFNZiw4REFBQ3FCO2dCQUFPQyxTQUFTOzJCQUFNcEIsV0FBVzs7MEJBQVM7Ozs7OzswQkFDM0MsOERBQUNtQjtnQkFBT0MsU0FBUzsyQkFBS3BCLFdBQVc7OzBCQUFPOzs7Ozs7Ozs7Ozs7QUFJOUM7R0ExRE1QO0tBQUFBO0FBNEROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9QZW5kdS9maXJzdF9wZW5kdS5qcz9jNTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wZW5kdS5tb2R1bGUuY3NzXCJcclxuXHJcbmNvbnN0IFRyaXZpYSA9ICgpID0+IHtcclxuICBjb25zdCBbd29yZFRvR3Vlc3MsIHNldFdvcmRUb0d1ZXNzXSA9IHVzZVN0YXRlKFwiVEVTVFwiKTtcclxuICBjb25zdCBbY2xpY2tlZEJ1dHRvbnMsIHNldENsaWNrZWRCdXR0b25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaSwgc2V0aV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBjaGFuZ2VXb3JkID0gKGNoYW5nZSkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEJ1dHRvbnMoW10pXHJcbiAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgIGlmIChjaGFuZ2UgPT0gXCJwcmV2XCIpIHtcclxuICAgICAgICBzZXRpKGktMSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHNldGlcclxuICAgIH1cclxuXHJcbiAgICBpZihpPT0wKXtcclxuICAgICAgICBzZXRXb3JkVG9HdWVzcyhcIlRFU1RcIilcclxuICAgIH1lbHNlIGlmIChpPT0xKSB7XHJcbiAgICAgICAgc2V0V29yZFRvR3Vlc3MoXCJBWkVSUlRIVFlcIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrTGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEJ1dHRvbnMoKHByZXZDbGlja2VkQnV0dG9ucykgPT4gWy4uLnByZXZDbGlja2VkQnV0dG9ucywgbGV0dGVyXSk7XHJcbiAgICBjb25zb2xlLmxvZyh3b3JkVG9HdWVzcyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5TGV0dGVyT3JMaW5lID0gKGxldHRlcikgPT4ge1xyXG4gICAgaWYgKGxldHRlciAhPSBcIiBcIikge1xyXG4gICAgICAgIHJldHVybiBjbGlja2VkQnV0dG9ucy5pbmNsdWRlcyhsZXR0ZXIpID8gbGV0dGVyIDogJ18nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gSGFuZ21hbiA8L2gxPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMjYgfSwgKF8sIGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoJ0EnLmNoYXJDb2RlQXQoMCkgKyBpKSkubWFwKGxldHRlciA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uIGtleT17bGV0dGVyfSBvbkNsaWNrPXsoKSA9PiBjaGVja0xldHRlcihsZXR0ZXIpfSBjbGFzc05hbWU9e2NsaWNrZWRCdXR0b25zLmluY2x1ZGVzKGxldHRlcikgPyBzdHlsZXNbJ3JlZC1idXR0b24nXSA6ICcnfT5cclxuICAgICAgICAgICAge2xldHRlcn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IHdvcmRUb0d1ZXNzLmxlbmd0aCB9LCAoXywgaSkgPT4gKFxyXG4gICAgICAgICAgPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlc1snc3BhY2UnXX0+XHJcbiAgICAgICAgICAgIHtkaXNwbGF5TGV0dGVyT3JMaW5lKHdvcmRUb0d1ZXNzW2ldKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZVdvcmQoXCJwcmV2XCIpfT5QcmV2aW91czwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+Y2hhbmdlV29yZChcInVwXCIpfT5OZXh0PC9idXR0b24+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpYTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJUcml2aWEiLCJ3b3JkVG9HdWVzcyIsInNldFdvcmRUb0d1ZXNzIiwiY2xpY2tlZEJ1dHRvbnMiLCJzZXRDbGlja2VkQnV0dG9ucyIsImkiLCJzZXRpIiwiY2hhbmdlV29yZCIsImNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0xldHRlciIsImxldHRlciIsInByZXZDbGlja2VkQnV0dG9ucyIsImRpc3BsYXlMZXR0ZXJPckxpbmUiLCJpbmNsdWRlcyIsImRpdiIsImgxIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Pendu/first_pendu.js\n"));

/***/ })

});