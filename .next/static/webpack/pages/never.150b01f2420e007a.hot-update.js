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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _questions_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.json */ \"./src/Never/questions.json\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar NeverHaveI = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), questions = _useState[0], setQuestions = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), usedQuestions = _useState1[0], setUsedQuestions = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setQuestions(_questions_json__WEBPACK_IMPORTED_MODULE_2__);\n    }, []);\n    var getRandomQuestion = function() {\n        if (questions.length === 0) return \"No questions available\";\n        // Filter out used questions\n        var availableQuestions = questions.filter(function(q) {\n            return !usedQuestions.includes(q);\n        });\n        if (availableQuestions.length === 0) {\n            // Reset used questions if all questions have been used\n            setUsedQuestions([]);\n        }\n        var randomIndex = Math.floor(Math.random() * availableQuestions.length);\n        var selectedQuestion = availableQuestions[randomIndex];\n        // Update used questions list\n        setUsedQuestions(function(prevUsedQuestions) {\n            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(prevUsedQuestions).concat([\n                selectedQuestion\n            ]);\n        });\n        return selectedQuestion;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Never have i ever \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return getRandomQuestion();\n                },\n                children: \"Get Random Question\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: selec\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(NeverHaveI, \"eBPCpJIEnfW0//FxHEje3VJpMJo=\");\n_c = NeverHaveI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NeverHaveI);\nvar _c;\n$RefreshReg$(_c, \"NeverHaveI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTmV2ZXIvbmV2ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBRXBDLElBQU1JLGFBQWE7O0lBRWYsSUFBa0NILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQXRDSSxZQUEyQkosY0FBaEJLLGVBQWdCTDtJQUNsQyxJQUEwQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBOUNNLGdCQUFtQ04sZUFBcEJPLG1CQUFvQlA7SUFHMUNDLGdEQUFTQSxDQUFDO1FBQ05JLGFBQWFILDRDQUFLQTtJQUNwQixHQUFHLEVBQUU7SUFHUCxJQUFNTSxvQkFBb0I7UUFDdEIsSUFBSUosVUFBVUssTUFBTSxLQUFLLEdBQUcsT0FBTztRQUVuQyw0QkFBNEI7UUFDNUIsSUFBTUMscUJBQXFCTixVQUFVTyxNQUFNLENBQUNDLFNBQUFBO21CQUFLLENBQUNOLGNBQWNPLFFBQVEsQ0FBQ0Q7O1FBRXpFLElBQUlGLG1CQUFtQkQsTUFBTSxLQUFLLEdBQUc7WUFDbkMsdURBQXVEO1lBQ3ZERixpQkFBaUIsRUFBRTtRQUNyQjtRQUVBLElBQU1PLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUCxtQkFBbUJELE1BQU07UUFDeEUsSUFBTVMsbUJBQW1CUixrQkFBa0IsQ0FBQ0ksWUFBWTtRQUV4RCw2QkFBNkI7UUFDN0JQLGlCQUFpQlksU0FBQUE7bUJBQXFCLG9FQUFJQSwwQkFBSjtnQkFBdUJEO2FBQWlCOztRQUU5RSxPQUFPQTtJQUNUO0lBRUoscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0M7Z0JBQU9DLFNBQVM7MkJBQU1mOzswQkFBcUI7Ozs7OzswQkFHNUMsOERBQUNhOzBCQUFJRzs7Ozs7Ozs7Ozs7O0FBT1g7R0E3Q01yQjtLQUFBQTtBQStDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTmV2ZXIvbmV2ZXIuanM/Nzc2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRlc3RxIGZyb20gXCIuL3F1ZXN0aW9ucy5qc29uXCJcclxuXHJcbmNvbnN0IE5ldmVySGF2ZUkgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1c2VkUXVlc3Rpb25zLCBzZXRVc2VkUXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UXVlc3Rpb25zKHRlc3RxKTtcclxuICAgICAgfSwgW10pOyBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbVF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gJ05vIHF1ZXN0aW9ucyBhdmFpbGFibGUnO1xyXG4gICAgXHJcbiAgICAgICAgLy8gRmlsdGVyIG91dCB1c2VkIHF1ZXN0aW9uc1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVF1ZXN0aW9ucyA9IHF1ZXN0aW9ucy5maWx0ZXIocSA9PiAhdXNlZFF1ZXN0aW9ucy5pbmNsdWRlcyhxKSk7XHJcbiAgICBcclxuICAgICAgICBpZiAoYXZhaWxhYmxlUXVlc3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gUmVzZXQgdXNlZCBxdWVzdGlvbnMgaWYgYWxsIHF1ZXN0aW9ucyBoYXZlIGJlZW4gdXNlZFxyXG4gICAgICAgICAgc2V0VXNlZFF1ZXN0aW9ucyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVRdWVzdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFF1ZXN0aW9uID0gYXZhaWxhYmxlUXVlc3Rpb25zW3JhbmRvbUluZGV4XTtcclxuICAgIFxyXG4gICAgICAgIC8vIFVwZGF0ZSB1c2VkIHF1ZXN0aW9ucyBsaXN0XHJcbiAgICAgICAgc2V0VXNlZFF1ZXN0aW9ucyhwcmV2VXNlZFF1ZXN0aW9ucyA9PiBbLi4ucHJldlVzZWRRdWVzdGlvbnMsIHNlbGVjdGVkUXVlc3Rpb25dKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZFF1ZXN0aW9uO1xyXG4gICAgICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gTmV2ZXIgaGF2ZSBpIGV2ZXIgPC9oMT5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0UmFuZG9tUXVlc3Rpb24oKX0+XHJcbiAgICAgICAgR2V0IFJhbmRvbSBRdWVzdGlvblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGgxPntzZWxlY308L2gxPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV2ZXJIYXZlSTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0ZXN0cSIsIk5ldmVySGF2ZUkiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJ1c2VkUXVlc3Rpb25zIiwic2V0VXNlZFF1ZXN0aW9ucyIsImdldFJhbmRvbVF1ZXN0aW9uIiwibGVuZ3RoIiwiYXZhaWxhYmxlUXVlc3Rpb25zIiwiZmlsdGVyIiwicSIsImluY2x1ZGVzIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZWxlY3RlZFF1ZXN0aW9uIiwicHJldlVzZWRRdWVzdGlvbnMiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzZWxlYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Never/never.js\n"));

/***/ })

});