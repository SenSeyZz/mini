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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _questions_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.json */ \"./src/Never/questions.json\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar NeverHaveI = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), questions = _useState[0], setQuestions = _useState[1];\n    var drawCard = function() {};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setQuestions(_questions_json__WEBPACK_IMPORTED_MODULE_2__);\n    }, []); // Empty dependency array ensures this effect runs once on component mount\n    var getRandomQuestion = function() {\n        if (questions.length === 0) return \"No questions available\";\n        var randomIndex = Math.floor(Math.random() * questions.length);\n        return questions[randomIndex];\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Never have i ever \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return alert(getRandomQuestion());\n                },\n                children: \"Get Random Question\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Never\\\\never.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(NeverHaveI, \"1ery3Y2F+nTWSbC27k3nmjCRtvo=\");\n_c = NeverHaveI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NeverHaveI);\nvar _c;\n$RefreshReg$(_c, \"NeverHaveI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTmV2ZXIvbmV2ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUVwQyxJQUFNSSxhQUFhOztJQUVmLElBQWtDSCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUF0Q0ksWUFBMkJKLGNBQWhCSyxlQUFnQkw7SUFHbEMsSUFBTU0sV0FBVSxZQUVoQjtJQUVBTCxnREFBU0EsQ0FBQztRQUVOSSxhQUFhSCw0Q0FBS0E7SUFDcEIsR0FBRyxFQUFFLEdBQUcsMEVBQTBFO0lBRWxGLElBQU1LLG9CQUFvQjtRQUN4QixJQUFJSCxVQUFVSSxNQUFNLEtBQUssR0FBRyxPQUFPO1FBQ25DLElBQU1DLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUixVQUFVSSxNQUFNO1FBQy9ELE9BQU9KLFNBQVMsQ0FBQ0ssWUFBWTtJQUMvQjtJQUVKLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFPQyxTQUFTOzJCQUFNQyxNQUFNVjs7MEJBQXNCOzs7Ozs7Ozs7Ozs7QUFTekQ7R0FqQ01KO0tBQUFBO0FBbUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9OZXZlci9uZXZlci5qcz83NzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdGVzdHEgZnJvbSBcIi4vcXVlc3Rpb25zLmpzb25cIlxyXG5cclxuY29uc3QgTmV2ZXJIYXZlSSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgZHJhd0NhcmQgPSgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBzZXRRdWVzdGlvbnModGVzdHEpO1xyXG4gICAgICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgZW5zdXJlcyB0aGlzIGVmZmVjdCBydW5zIG9uY2Ugb24gY29tcG9uZW50IG1vdW50XHJcbiAgICBcclxuICAgICAgY29uc3QgZ2V0UmFuZG9tUXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9ucy5sZW5ndGggPT09IDApIHJldHVybiAnTm8gcXVlc3Rpb25zIGF2YWlsYWJsZSc7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb25zW3JhbmRvbUluZGV4XTtcclxuICAgICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIE5ldmVyIGhhdmUgaSBldmVyIDwvaDE+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KGdldFJhbmRvbVF1ZXN0aW9uKCkpfT5cclxuICAgICAgICBHZXQgUmFuZG9tIFF1ZXN0aW9uXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV2ZXJIYXZlSTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0ZXN0cSIsIk5ldmVySGF2ZUkiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJkcmF3Q2FyZCIsImdldFJhbmRvbVF1ZXN0aW9uIiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Never/never.js\n"));

/***/ })

});