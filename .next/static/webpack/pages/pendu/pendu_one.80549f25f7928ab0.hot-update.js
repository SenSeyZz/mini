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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pendu.module.css */ \"./src/Pendu/pendu.module.css\");\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pendu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Trivia = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Test\"), 2), wordToGuess = _useState[0], setWordToGuess = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), clickedButtons = _useState1[0], setClickedButtons = _useState1[1];\n    var i = 0;\n    var nextWord = function() {\n        if (i == 0) {\n            setWordToGuess(\"Test\");\n        } else if (i == 1) {\n            setWordToGuess(\"egrsth\");\n        }\n    };\n    var checkLetter = function(letter) {\n        setClickedButtons(function(prevClickedButtons) {\n            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_3__._)(prevClickedButtons).concat([\n                letter\n            ]);\n        });\n    };\n    var displayLetterOrLine = function(letter) {\n        if (letter != \" \") {\n            return clickedButtons.includes(letter) ? letter : \"_\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Hangman \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: 26\n                }, function(_, i) {\n                    return String.fromCharCode(\"A\".charCodeAt(0) + i);\n                }).map(function(letter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return checkLetter(letter);\n                        },\n                        className: clickedButtons.includes(letter) ? (_pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"red-button\"]) : \"\",\n                        children: letter\n                    }, letter, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: wordToGuess.length\n                }, function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_pendu_module_css__WEBPACK_IMPORTED_MODULE_4___default().space),\n                        children: displayLetterOrLine(wordToGuess[i])\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: nextWord,\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: nextWord,\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Trivia, \"X0tvEc9f9X6TMazRiydcIYOamqE=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGVuZHUvZmlyc3RfcGVuZHUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUV2QyxJQUFNRyxTQUFTOztJQUNiLElBQXNDRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsYUFBeENHLGNBQStCSCxjQUFsQkksaUJBQWtCSjtJQUN0QyxJQUE0Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBaERLLGlCQUFxQ0wsZUFBckJNLG9CQUFxQk47SUFDNUMsSUFBSU8sSUFBRTtJQUVOLElBQU1DLFdBQVc7UUFDZixJQUFHRCxLQUFHLEdBQUU7WUFDSkgsZUFBZTtRQUNuQixPQUFNLElBQUlHLEtBQUcsR0FBRztZQUNaSCxlQUFlO1FBQ25CO0lBQ0Y7SUFFQSxJQUFNSyxjQUFjLFNBQUNDO1FBQ25CSixrQkFBa0IsU0FBQ0s7bUJBQXVCLG9FQUFJQSwyQkFBSjtnQkFBd0JEO2FBQU87O0lBQzNFO0lBRUEsSUFBTUUsc0JBQXNCLFNBQUNGO1FBQzNCLElBQUlBLFVBQVUsS0FBSztZQUNmLE9BQU9MLGVBQWVRLFFBQVEsQ0FBQ0gsVUFBVUEsU0FBUztRQUN0RDtJQUVGO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0Q7MEJBQ0VFLE1BQU1DLElBQUksQ0FBQztvQkFBRUMsUUFBUTtnQkFBRyxHQUFHLFNBQUNDLEdBQUdaOzJCQUFNYSxPQUFPQyxZQUFZLENBQUMsSUFBSUMsVUFBVSxDQUFDLEtBQUtmO21CQUFJZ0IsR0FBRyxDQUFDYixTQUFBQTt5Q0FDcEYsOERBQUNjO3dCQUFvQkMsU0FBUzttQ0FBTWhCLFlBQVlDOzt3QkFBU2dCLFdBQVdyQixlQUFlUSxRQUFRLENBQUNILFVBQVVULHdFQUFvQixHQUFHO2tDQUMxSFM7dUJBRFVBOzs7Ozs7Ozs7OzswQkFNakIsOERBQUNJOzBCQUNFRSxNQUFNQyxJQUFJLENBQUM7b0JBQUVDLFFBQVFmLFlBQVllLE1BQU07Z0JBQUMsR0FBRyxTQUFDQyxHQUFHWjt5Q0FDOUMsOERBQUNvQjt3QkFBYUQsV0FBV3pCLGdFQUFlO2tDQUNyQ1csb0JBQW9CVCxXQUFXLENBQUNJLEVBQUU7dUJBRDFCQTs7Ozs7Ozs7Ozs7MEJBTWYsOERBQUNpQjtnQkFBT0MsU0FBU2pCOzBCQUFVOzs7Ozs7MEJBQzNCLDhEQUFDZ0I7Z0JBQU9DLFNBQVNqQjswQkFBVTs7Ozs7Ozs7Ozs7O0FBSWpDO0dBakRNTjtLQUFBQTtBQW1ETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvUGVuZHUvZmlyc3RfcGVuZHUuanM/YzU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGVuZHUubW9kdWxlLmNzc1wiXHJcblxyXG5jb25zdCBUcml2aWEgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3dvcmRUb0d1ZXNzLCBzZXRXb3JkVG9HdWVzc10gPSB1c2VTdGF0ZShcIlRlc3RcIik7XHJcbiAgY29uc3QgW2NsaWNrZWRCdXR0b25zLCBzZXRDbGlja2VkQnV0dG9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGk9MFxyXG5cclxuICBjb25zdCBuZXh0V29yZCA9ICgpID0+IHtcclxuICAgIGlmKGk9PTApe1xyXG4gICAgICAgIHNldFdvcmRUb0d1ZXNzKFwiVGVzdFwiKVxyXG4gICAgfWVsc2UgaWYgKGk9PTEpIHtcclxuICAgICAgICBzZXRXb3JkVG9HdWVzcyhcImVncnN0aFwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tMZXR0ZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICBzZXRDbGlja2VkQnV0dG9ucygocHJldkNsaWNrZWRCdXR0b25zKSA9PiBbLi4ucHJldkNsaWNrZWRCdXR0b25zLCBsZXR0ZXJdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlMZXR0ZXJPckxpbmUgPSAobGV0dGVyKSA9PiB7XHJcbiAgICBpZiAobGV0dGVyICE9IFwiIFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsaWNrZWRCdXR0b25zLmluY2x1ZGVzKGxldHRlcikgPyBsZXR0ZXIgOiAnXyc7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+V2VsY29tZSB0byBIYW5nbWFuIDwvaDE+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNiB9LCAoXywgaSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSgnQScuY2hhckNvZGVBdCgwKSArIGkpKS5tYXAobGV0dGVyID0+IChcclxuICAgICAgICAgIDxidXR0b24ga2V5PXtsZXR0ZXJ9IG9uQ2xpY2s9eygpID0+IGNoZWNrTGV0dGVyKGxldHRlcil9IGNsYXNzTmFtZT17Y2xpY2tlZEJ1dHRvbnMuaW5jbHVkZXMobGV0dGVyKSA/IHN0eWxlc1sncmVkLWJ1dHRvbiddIDogJyd9PlxyXG4gICAgICAgICAgICB7bGV0dGVyfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogd29yZFRvR3Vlc3MubGVuZ3RoIH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzWydzcGFjZSddfT5cclxuICAgICAgICAgICAge2Rpc3BsYXlMZXR0ZXJPckxpbmUod29yZFRvR3Vlc3NbaV0pfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFdvcmR9PlByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFdvcmR9Pk5leHQ8L2J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmlhO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlRyaXZpYSIsIndvcmRUb0d1ZXNzIiwic2V0V29yZFRvR3Vlc3MiLCJjbGlja2VkQnV0dG9ucyIsInNldENsaWNrZWRCdXR0b25zIiwiaSIsIm5leHRXb3JkIiwiY2hlY2tMZXR0ZXIiLCJsZXR0ZXIiLCJwcmV2Q2xpY2tlZEJ1dHRvbnMiLCJkaXNwbGF5TGV0dGVyT3JMaW5lIiwiaW5jbHVkZXMiLCJkaXYiLCJoMSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjaGFyQ29kZUF0IiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Pendu/first_pendu.js\n"));

/***/ })

});