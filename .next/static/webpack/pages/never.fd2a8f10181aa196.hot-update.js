"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/never",{

/***/ "./src/Never/never.js":
/*!****************************!*\
  !*** ./src/Never/never.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _questions_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.json */ \"./src/Never/questions.json\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar NeverHaveI = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), questions = _useState[0], setQuestions = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), usedQuestions = _useState1[0], setUsedQuestions = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setQuestions(_questions_json__WEBPACK_IMPORTED_MODULE_2__);\n    }, []);\n    var getRandomQuestion = function() {\n        if (questions.length === 0) return \"No questions available\";\n        // Filter out used questions\n        var availableQuestions = questions.filter(function(q) {\n            return !usedQuestions.includes(q);\n        });\n        if (availableQuestions.length === 0) {\n            // Reset used questions if all questions have been used\n            setUsedQuestions([]);\n        }\n        var randomIndex = Math.floor(Math.random() * availableQuestions.length);\n        var selectedQuestion = availableQuestions[randomIndex];\n        // Update used questions list\n        setUsedQuestions(function(prevUsedQuestions) {\n            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(prevUsedQuestions).concat([\n                selectedQuestion\n            ]);\n        });\n        return selectedQuestion;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Never have i ever \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return alert(getRandomQuestion());\n                },\n                children: \"Get Random Question\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(NeverHaveI, \"eBPCpJIEnfW0//FxHEje3VJpMJo=\");\n_c = NeverHaveI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NeverHaveI);\nvar _c;\n$RefreshReg$(_c, \"NeverHaveI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTmV2ZXIvbmV2ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBRXBDLElBQU1JLGFBQWE7O0lBRWYsSUFBa0NILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQXRDSSxZQUEyQkosY0FBaEJLLGVBQWdCTDtJQUNsQyxJQUEwQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBOUNNLGdCQUFtQ04sZUFBcEJPLG1CQUFvQlA7SUFHMUNDLGdEQUFTQSxDQUFDO1FBQ05JLGFBQWFILDRDQUFLQTtJQUNwQixHQUFHLEVBQUU7SUFHUCxJQUFNTSxvQkFBb0I7UUFDdEIsSUFBSUosVUFBVUssTUFBTSxLQUFLLEdBQUcsT0FBTztRQUVuQyw0QkFBNEI7UUFDNUIsSUFBTUMscUJBQXFCTixVQUFVTyxNQUFNLENBQUNDLFNBQUFBO21CQUFLLENBQUNOLGNBQWNPLFFBQVEsQ0FBQ0Q7O1FBRXpFLElBQUlGLG1CQUFtQkQsTUFBTSxLQUFLLEdBQUc7WUFDbkMsdURBQXVEO1lBQ3ZERixpQkFBaUIsRUFBRTtRQUNyQjtRQUVBLElBQU1PLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUCxtQkFBbUJELE1BQU07UUFDeEUsSUFBTVMsbUJBQW1CUixrQkFBa0IsQ0FBQ0ksWUFBWTtRQUV4RCw2QkFBNkI7UUFDN0JQLGlCQUFpQlksU0FBQUE7bUJBQXFCLG9FQUFJQSwwQkFBSjtnQkFBdUJEO2FBQWlCOztRQUU5RSxPQUFPQTtJQUNUO0lBRUoscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0M7Z0JBQU9DLFNBQVM7MkJBQU1DLE1BQU1oQjs7MEJBQXNCOzs7Ozs7MEJBR25ELDhEQUFDYTs7Ozs7Ozs7Ozs7QUFPUDtHQTdDTWxCO0tBQUFBO0FBK0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9OZXZlci9uZXZlci5qcz83NzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdGVzdHEgZnJvbSBcIi4vcXVlc3Rpb25zLmpzb25cIlxyXG5cclxuY29uc3QgTmV2ZXJIYXZlSSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VzZWRRdWVzdGlvbnMsIHNldFVzZWRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9ucyh0ZXN0cSk7XHJcbiAgICAgIH0sIFtdKTsgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21RdWVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdObyBxdWVzdGlvbnMgYXZhaWxhYmxlJztcclxuICAgIFxyXG4gICAgICAgIC8vIEZpbHRlciBvdXQgdXNlZCBxdWVzdGlvbnNcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVRdWVzdGlvbnMgPSBxdWVzdGlvbnMuZmlsdGVyKHEgPT4gIXVzZWRRdWVzdGlvbnMuaW5jbHVkZXMocSkpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZVF1ZXN0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIC8vIFJlc2V0IHVzZWQgcXVlc3Rpb25zIGlmIGFsbCBxdWVzdGlvbnMgaGF2ZSBiZWVuIHVzZWRcclxuICAgICAgICAgIHNldFVzZWRRdWVzdGlvbnMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlUXVlc3Rpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRRdWVzdGlvbiA9IGF2YWlsYWJsZVF1ZXN0aW9uc1tyYW5kb21JbmRleF07XHJcbiAgICBcclxuICAgICAgICAvLyBVcGRhdGUgdXNlZCBxdWVzdGlvbnMgbGlzdFxyXG4gICAgICAgIHNldFVzZWRRdWVzdGlvbnMocHJldlVzZWRRdWVzdGlvbnMgPT4gWy4uLnByZXZVc2VkUXVlc3Rpb25zLCBzZWxlY3RlZFF1ZXN0aW9uXSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRRdWVzdGlvbjtcclxuICAgICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIE5ldmVyIGhhdmUgaSBldmVyIDwvaDE+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KGdldFJhbmRvbVF1ZXN0aW9uKCkpfT5cclxuICAgICAgICBHZXQgUmFuZG9tIFF1ZXN0aW9uXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aDE+PC9oMT5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ldmVySGF2ZUk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidGVzdHEiLCJOZXZlckhhdmVJIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwidXNlZFF1ZXN0aW9ucyIsInNldFVzZWRRdWVzdGlvbnMiLCJnZXRSYW5kb21RdWVzdGlvbiIsImxlbmd0aCIsImF2YWlsYWJsZVF1ZXN0aW9ucyIsImZpbHRlciIsInEiLCJpbmNsdWRlcyIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2VsZWN0ZWRRdWVzdGlvbiIsInByZXZVc2VkUXVlc3Rpb25zIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Never/never.js\n"));

/***/ })

});