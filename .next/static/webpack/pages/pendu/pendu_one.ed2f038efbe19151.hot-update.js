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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pendu.module.css */ \"./src/Pendu/pendu.module.css\");\n/* harmony import */ var _pendu_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pendu_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navBar */ \"./src/navBar.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Trivia = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"TEST\"), 2), wordToGuess = _useState[0], setWordToGuess = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), clickedButtons = _useState1[0], setClickedButtons = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), i = _useState2[0], seti = _useState2[1];\n    var maxIndex = 9;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Perform logic based on the updated value of i\n        if (i === 0) {\n            setWordToGuess(\"TEST\");\n        } else if (i === 1) {\n            setWordToGuess(\"MON NOMBRE PREFERE EST 8\");\n        } else if (i === 2) {\n            setWordToGuess(\"TLRTESE SDAN EL RDOERSED\");\n        } else if (i === 3) {\n            setWordToGuess(\"PARTIR MARCHER LE LONG D UNE BELLE RIVIERE AVANT QUE L HIVER ARRIVE\");\n        } else if (i === 4) {\n            setWordToGuess(\"SRUD TNOS SREVNE L A SELZZUP SEL\");\n        } else if (i === 5) {\n            setWordToGuess(\"C EST UN JEUX DE MERDE\");\n        } else if (i === 6) {\n            setWordToGuess(\"QUI A TUE JFK\");\n        } else if (i === 7) {\n            setWordToGuess(\"LA SALOPPE JOUE BILBOQUET PARKING IDEE\");\n        } else if (i === 8) {\n            setWordToGuess(\"WG\");\n        } else if (i === 9) {\n            setWordToGuess(\"VERRE TOUT FINIT MONDE\");\n        }\n    }, [\n        i\n    ]); // The effect will run whenever i changes\n    var changeWord = function(change) {\n        setClickedButtons([]);\n        console.log(wordToGuess);\n        seti(function(previ) {\n            // Using the callback to ensure the updated value of i is used\n            if (change === \"prev\") {\n                if (previ > 0) {\n                    return previ - 1;\n                }\n            } else {\n                // Add a condition to handle the maximum value for i\n                if (previ < maxIndex) {\n                    return previ + 1;\n                }\n            }\n            return previ;\n        });\n    };\n    var checkLetter = function(letter) {\n        setClickedButtons(function(prevClickedButtons) {\n            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(prevClickedButtons).concat([\n                letter\n            ]);\n        });\n        console.log(wordToGuess);\n    };\n    var displayLetterOrLine = function(letter) {\n        if (letter !== \" \") {\n            return clickedButtons.includes(letter) ? letter : \"_\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pendu_module_css__WEBPACK_IMPORTED_MODULE_5___default().centered),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Pendu\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: 26\n                }, function(_, i) {\n                    return String.fromCharCode(\"A\".charCodeAt(0) + i);\n                }).map(function(letter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return checkLetter(letter);\n                        },\n                        className: clickedButtons.includes(letter) ? (_pendu_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"red-button\"]) : \"\",\n                        children: letter\n                    }, letter, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: wordToGuess.length\n                }, function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: displayLetterOrLine(wordToGuess[i])\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_pendu_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"margin-top\"]),\n                onClick: function() {\n                    return changeWord(\"prev\");\n                },\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_pendu_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"margin-top\"]),\n                onClick: function() {\n                    return changeWord(\"up\");\n                },\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulf\\\\OneDrive\\\\Bureau\\\\Programming\\\\Mini games\\\\mini_games\\\\src\\\\Pendu\\\\first_pendu.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this);\n};\n_s(Trivia, \"Hg58neqorfXDYe5CK0lXi0y7Ofg=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGVuZHUvZmlyc3RfcGVuZHUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDRjtBQUV0QyxJQUFNSyxTQUFTOztJQUNiLElBQXNDSixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsYUFBeENLLGNBQStCTCxjQUFsQk0saUJBQWtCTjtJQUN0QyxJQUE0Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBaERPLGlCQUFxQ1AsZUFBckJRLG9CQUFxQlI7SUFDNUMsSUFBa0JBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxRQUFwQlMsSUFBV1QsZUFBUlUsT0FBUVY7SUFDbEIsSUFBTVcsV0FBVztJQUVqQlYsZ0RBQVNBLENBQUM7UUFDUixnREFBZ0Q7UUFDaEQsSUFBSVEsTUFBTSxHQUFHO1lBQ1hILGVBQWU7UUFDakIsT0FBTyxJQUFJRyxNQUFNLEdBQUc7WUFDbEJILGVBQWU7UUFDakIsT0FBTSxJQUFJRyxNQUFJLEdBQUc7WUFDYkgsZUFBZTtRQUNuQixPQUFNLElBQUlHLE1BQUksR0FBRztZQUNiSCxlQUFlO1FBQ25CLE9BQU0sSUFBSUcsTUFBSSxHQUFFO1lBQ1pILGVBQWU7UUFDbkIsT0FBTSxJQUFJRyxNQUFJLEdBQUc7WUFDYkgsZUFBZTtRQUNuQixPQUFNLElBQUlHLE1BQUksR0FBRztZQUNiSCxlQUFlO1FBQ25CLE9BQU0sSUFBSUcsTUFBSSxHQUFHO1lBQ2JILGVBQWU7UUFDbkIsT0FBTSxJQUFJRyxNQUFJLEdBQUc7WUFDYkgsZUFBZTtRQUNuQixPQUFNLElBQUlHLE1BQUksR0FBRztZQUNiSCxlQUFlO1FBQ25CO0lBQ0YsR0FBRztRQUFDRztLQUFFLEdBQUcseUNBQXlDO0lBRWxELElBQU1HLGFBQWEsU0FBQ0M7UUFDbEJMLGtCQUFrQixFQUFFO1FBQ3BCTSxRQUFRQyxHQUFHLENBQUNWO1FBQ1pLLEtBQUssU0FBQ007WUFDSiw4REFBOEQ7WUFDOUQsSUFBSUgsV0FBVyxRQUFRO2dCQUNyQixJQUFJRyxRQUFRLEdBQUc7b0JBQ2IsT0FBT0EsUUFBUTtnQkFDakI7WUFDRixPQUFPO2dCQUNMLG9EQUFvRDtnQkFDcEQsSUFBSUEsUUFBUUwsVUFBVTtvQkFDcEIsT0FBT0ssUUFBUTtnQkFDakI7WUFDRjtZQUNBLE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQU1DLGNBQWMsU0FBQ0M7UUFDbkJWLGtCQUFrQixTQUFDVzttQkFBdUIsb0VBQUlBLDJCQUFKO2dCQUF3QkQ7YUFBTzs7UUFDekVKLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFDZDtJQUVBLElBQU1lLHNCQUFzQixTQUFDRjtRQUMzQixJQUFJQSxXQUFXLEtBQUs7WUFDbEIsT0FBT1gsZUFBZWMsUUFBUSxDQUFDSCxVQUFVQSxTQUFTO1FBQ3BEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBV3JCLG1FQUFrQjs7MEJBQ2xDLDhEQUFDQywrQ0FBYUE7Ozs7OzBCQUNaLDhEQUFDcUI7MEJBQUk7Ozs7OzswQkFFTCw4REFBQ0Y7MEJBQ0VHLE1BQU1DLElBQUksQ0FBQztvQkFBRUMsUUFBUTtnQkFBRyxHQUFHLFNBQUNDLEdBQUduQjsyQkFBTW9CLE9BQU9DLFlBQVksQ0FBQyxJQUFJQyxVQUFVLENBQUMsS0FBS3RCO21CQUFJdUIsR0FBRyxDQUFDZCxTQUFBQTt5Q0FDcEYsOERBQUNlO3dCQUFvQkMsU0FBUzttQ0FBTWpCLFlBQVlDOzt3QkFBU0ssV0FBV2hCLGVBQWVjLFFBQVEsQ0FBQ0gsVUFBVWhCLHdFQUFvQixHQUFHO2tDQUMxSGdCO3VCQURVQTs7Ozs7Ozs7Ozs7MEJBTWpCLDhEQUFDSTswQkFDRUcsTUFBTUMsSUFBSSxDQUFDO29CQUFFQyxRQUFRdEIsWUFBWXNCLE1BQU07Z0JBQUMsR0FBRyxTQUFDQyxHQUFHbkI7eUNBQzlDLDhEQUFDMEI7a0NBQ0VmLG9CQUFvQmYsV0FBVyxDQUFDSSxFQUFFO3VCQUQxQkE7Ozs7Ozs7Ozs7OzBCQU1mLDhEQUFDd0I7Z0JBQU9WLFdBQVdyQix3RUFBb0I7Z0JBQUVnQyxTQUFTOzJCQUFNdEIsV0FBVzs7MEJBQVM7Ozs7OzswQkFDNUUsOERBQUNxQjtnQkFBT1YsV0FBV3JCLHdFQUFvQjtnQkFBRWdDLFNBQVM7MkJBQU10QixXQUFXOzswQkFBTzs7Ozs7Ozs7Ozs7O0FBSWhGO0dBdkZNUjtLQUFBQTtBQXlGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvUGVuZHUvZmlyc3RfcGVuZHUuanM/YzU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wZW5kdS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL25hdkJhcic7XHJcblxyXG5jb25zdCBUcml2aWEgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3dvcmRUb0d1ZXNzLCBzZXRXb3JkVG9HdWVzc10gPSB1c2VTdGF0ZShcIlRFU1RcIik7XHJcbiAgY29uc3QgW2NsaWNrZWRCdXR0b25zLCBzZXRDbGlja2VkQnV0dG9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ksIHNldGldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbWF4SW5kZXggPSA5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUGVyZm9ybSBsb2dpYyBiYXNlZCBvbiB0aGUgdXBkYXRlZCB2YWx1ZSBvZiBpXHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICBzZXRXb3JkVG9HdWVzcyhcIlRFU1RcIik7XHJcbiAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgc2V0V29yZFRvR3Vlc3MoXCJNT04gTk9NQlJFIFBSRUZFUkUgRVNUIDhcIik7XHJcbiAgICB9ZWxzZSBpZiAoaT09PTIpIHtcclxuICAgICAgICBzZXRXb3JkVG9HdWVzcyhcIlRMUlRFU0UgU0RBTiBFTCBSRE9FUlNFRFwiKVxyXG4gICAgfWVsc2UgaWYgKGk9PT0zKSB7XHJcbiAgICAgICAgc2V0V29yZFRvR3Vlc3MoXCJQQVJUSVIgTUFSQ0hFUiBMRSBMT05HIEQgVU5FIEJFTExFIFJJVklFUkUgQVZBTlQgUVVFIEwgSElWRVIgQVJSSVZFXCIpXHJcbiAgICB9ZWxzZSBpZiAoaT09PTQpe1xyXG4gICAgICAgIHNldFdvcmRUb0d1ZXNzKFwiU1JVRCBUTk9TIFNSRVZORSBMIEEgU0VMWlpVUCBTRUxcIilcclxuICAgIH1lbHNlIGlmIChpPT09NSkge1xyXG4gICAgICAgIHNldFdvcmRUb0d1ZXNzKFwiQyBFU1QgVU4gSkVVWCBERSBNRVJERVwiKSAgICBcclxuICAgIH1lbHNlIGlmIChpPT09Nikge1xyXG4gICAgICAgIHNldFdvcmRUb0d1ZXNzKFwiUVVJIEEgVFVFIEpGS1wiKSAgICBcclxuICAgIH1lbHNlIGlmIChpPT09Nykge1xyXG4gICAgICAgIHNldFdvcmRUb0d1ZXNzKFwiTEEgU0FMT1BQRSBKT1VFIEJJTEJPUVVFVCBQQVJLSU5HIElERUVcIikgIFxyXG4gICAgfWVsc2UgaWYgKGk9PT04KSB7XHJcbiAgICAgICAgc2V0V29yZFRvR3Vlc3MoXCJXR1wiKSAgICBcclxuICAgIH1lbHNlIGlmIChpPT09OSkge1xyXG4gICAgICAgIHNldFdvcmRUb0d1ZXNzKFwiVkVSUkUgVE9VVCBGSU5JVCBNT05ERVwiKSAgICBcclxuICAgIH1cclxuICB9LCBbaV0pOyAvLyBUaGUgZWZmZWN0IHdpbGwgcnVuIHdoZW5ldmVyIGkgY2hhbmdlc1xyXG5cclxuICBjb25zdCBjaGFuZ2VXb3JkID0gKGNoYW5nZSkgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEJ1dHRvbnMoW10pO1xyXG4gICAgY29uc29sZS5sb2cod29yZFRvR3Vlc3MpO1xyXG4gICAgc2V0aSgocHJldmkpID0+IHtcclxuICAgICAgLy8gVXNpbmcgdGhlIGNhbGxiYWNrIHRvIGVuc3VyZSB0aGUgdXBkYXRlZCB2YWx1ZSBvZiBpIGlzIHVzZWRcclxuICAgICAgaWYgKGNoYW5nZSA9PT0gXCJwcmV2XCIpIHtcclxuICAgICAgICBpZiAocHJldmkgPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJldmkgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBZGQgYSBjb25kaXRpb24gdG8gaGFuZGxlIHRoZSBtYXhpbXVtIHZhbHVlIGZvciBpXHJcbiAgICAgICAgaWYgKHByZXZpIDwgbWF4SW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiBwcmV2aSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcmV2aTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrTGV0dGVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgc2V0Q2xpY2tlZEJ1dHRvbnMoKHByZXZDbGlja2VkQnV0dG9ucykgPT4gWy4uLnByZXZDbGlja2VkQnV0dG9ucywgbGV0dGVyXSk7XHJcbiAgICBjb25zb2xlLmxvZyh3b3JkVG9HdWVzcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGxheUxldHRlck9yTGluZSA9IChsZXR0ZXIpID0+IHtcclxuICAgIGlmIChsZXR0ZXIgIT09IFwiIFwiKSB7XHJcbiAgICAgIHJldHVybiBjbGlja2VkQnV0dG9ucy5pbmNsdWRlcyhsZXR0ZXIpID8gbGV0dGVyIDogJ18nO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjZW50ZXJlZCddfT5cclxuICAgIDxOYXZpZ2F0aW9uQmFyLz5cclxuICAgICAgPGgxID5QZW5kdTwvaDE+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNiB9LCAoXywgaSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSgnQScuY2hhckNvZGVBdCgwKSArIGkpKS5tYXAobGV0dGVyID0+IChcclxuICAgICAgICAgIDxidXR0b24ga2V5PXtsZXR0ZXJ9IG9uQ2xpY2s9eygpID0+IGNoZWNrTGV0dGVyKGxldHRlcil9IGNsYXNzTmFtZT17Y2xpY2tlZEJ1dHRvbnMuaW5jbHVkZXMobGV0dGVyKSA/IHN0eWxlc1sncmVkLWJ1dHRvbiddIDogJyd9PlxyXG4gICAgICAgICAgICB7bGV0dGVyfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogd29yZFRvR3Vlc3MubGVuZ3RoIH0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICA8c3BhbiBrZXk9e2l9ID5cclxuICAgICAgICAgICAge2Rpc3BsYXlMZXR0ZXJPckxpbmUod29yZFRvR3Vlc3NbaV0pfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbJ21hcmdpbi10b3AnXX0gb25DbGljaz17KCkgPT4gY2hhbmdlV29yZChcInByZXZcIil9PlByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbJ21hcmdpbi10b3AnXX0gb25DbGljaz17KCkgPT4gY2hhbmdlV29yZChcInVwXCIpfT5OZXh0PC9idXR0b24+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpYTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJOYXZpZ2F0aW9uQmFyIiwiVHJpdmlhIiwid29yZFRvR3Vlc3MiLCJzZXRXb3JkVG9HdWVzcyIsImNsaWNrZWRCdXR0b25zIiwic2V0Q2xpY2tlZEJ1dHRvbnMiLCJpIiwic2V0aSIsIm1heEluZGV4IiwiY2hhbmdlV29yZCIsImNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2aSIsImNoZWNrTGV0dGVyIiwibGV0dGVyIiwicHJldkNsaWNrZWRCdXR0b25zIiwiZGlzcGxheUxldHRlck9yTGluZSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY2hhckNvZGVBdCIsIm1hcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Pendu/first_pendu.js\n"));

/***/ })

});