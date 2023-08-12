"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/tailwind-styled-components.esm.js\");\n/* harmony import */ var _data_productInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/productInfo */ \"./data/productInfo.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  fixed top-0 left-0 right-0 bottom-0 flex items-center flex-col justify-center bg-black bg-opacity-50 p-2 z-10 text-black\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  bg-white rounded-b-lg max-w-xl w-full md:w-5/6 h-auto flex justify-center items-center flex-col p-2\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  absolute top-4 right-4 p-2 rounded-full text-black bg-white\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Products() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showPopup = ref[0], setShowPopup = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), productSelected = ref1[0], setProductSelected = ref1[1];\n    var openPopup = function(product) {\n        console.log(product);\n        setProductSelected([\n            product\n        ]);\n        console.log(productSelected);\n        setShowPopup(true);\n    };\n    var closePopup = function() {\n        setShowPopup(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"text-gray-600 body-font\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container px-5 py-24 pt-10 mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap -m-4\",\n                        children: _data_productInfo__WEBPACK_IMPORTED_MODULE_5__.ProductInfo.map(function(product, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"lg:w-1/4 md:w-1/2 p-4 w-full\",\n                                onClick: function() {\n                                    return openPopup(product);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        className: \"block relative h-48 rounded overflow-hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                            alt: \"ecommerce\",\n                                            className: \"object-cover object-center w-full h-full block\",\n                                            src: product.image\n                                        }, void 0, false, {\n                                            fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"mt-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                className: \"text-gray-900 title-font text-lg font-medium\",\n                                                children: product.name\n                                            }, void 0, false, {\n                                                fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"mt-1\",\n                                                children: \"\".concat(product.price)\n                                            }, void 0, false, {\n                                                fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            showPopup && productSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Popup, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"h-14 text-lg rounded-t-lg flex font-medium justify-center items-center text-white max-w-xl bg-[#0080ff] w-full md:w-5/6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"Product Info\"\n                        }, void 0, false, {\n                            fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PopupContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseButton, {\n                                onClick: closePopup,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: \"h-4\",\n                                    src: \"https://img.icons8.com/?size=512&id=46&format=png\",\n                                    alt: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            productSelected.map(function(info, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    id: index,\n                                    className: \"flex flex-col gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                                    className: \"font-bold text-lg\",\n                                                    children: info.name\n                                                }, void 0, false, {\n                                                    fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                                    className: \"font-semibold text-base\",\n                                                    children: info.price\n                                                }, void 0, false, {\n                                                    fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                            className: \"flex flex-col gap-1 items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                                    className: \"ml-2 text-sm\",\n                                                    children: \"The Above Cost Includes\"\n                                                }, void 0, false, {\n                                                    fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                info.features.map(function(feature, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                                        className: \"ml-5\",\n                                                        children: [\n                                                            \"• \",\n                                                            feature\n                                                        ]\n                                                    }, i, true, {\n                                                        fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 21\n                                                    }, _this);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                            className: \"text-sm\",\n                                            children: \"Cost Of Any Additional Repairs Apart From The List Mentioned Above Will Be Charged Additional.\"\n                                        }, void 0, false, {\n                                            fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/run/media/shariandabre/d drive/sharian/projects/Allied_Auto/pages/products.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Products, \"ds1ZPvoCaUdl6QKe03vBDmxuFEQ=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar Popup = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c1 = Popup;\nvar PopupContent = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c2 = PopupContent;\nvar CloseButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject2());\n_c3 = CloseButton;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c1, \"Popup\");\n$RefreshReg$(_c2, \"PopupContent\");\n$RefreshReg$(_c3, \"CloseButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFnZXMvcHJvZHVjdHMuanM/MzE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCB0dyBmcm9tICd0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQcm9kdWN0SW5mbyB9IGZyb20gJy4uL2RhdGEvcHJvZHVjdEluZm8nO1xuXG5mdW5jdGlvbiBQcm9kdWN0cygpIHtcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Byb2R1Y3RTZWxlY3RlZCwgc2V0UHJvZHVjdFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gIGNvbnN0IG9wZW5Qb3B1cCA9IChwcm9kdWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdClcbiAgICBzZXRQcm9kdWN0U2VsZWN0ZWQoW3Byb2R1Y3RdKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0U2VsZWN0ZWQpXG4gICAgc2V0U2hvd1BvcHVwKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IHB5LTI0IHB0LTEwIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1tLTRcIj5cbiAgICAgICAgICAgIHtQcm9kdWN0SW5mby5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOnctMS80IG1kOnctMS8yIHAtNCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Qb3B1cChwcm9kdWN0KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlIGgtNDggcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZWNvbW1lcmNlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1mdWxsIGgtZnVsbCBibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGl0bGUtZm9udCB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPntgJHtwcm9kdWN0LnByaWNlfWB9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHtzaG93UG9wdXAgJiYgcHJvZHVjdFNlbGVjdGVkICYmIChcbiAgICAgICAgPFBvcHVwPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNCB0ZXh0LWxnIHJvdW5kZWQtdC1sZyBmbGV4IGZvbnQtbWVkaXVtIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIG1heC13LXhsIGJnLVsjMDA4MGZmXSB3LWZ1bGwgbWQ6dy01LzZcIj5cbiAgICAgICAgICAgIDxoMj5Qcm9kdWN0IEluZm88L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQb3B1cENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VQb3B1cH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTRcIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vP3NpemU9NTEyJmlkPTQ2JmZvcm1hdD1wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2xvc2VCdXR0b24+XG4gICAgICAgICAgICB7cHJvZHVjdFNlbGVjdGVkLm1hcCgoaW5mbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBpZD17aW5kZXh9IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtNCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTInPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWxnJz57aW5mby5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UnPntpbmZvLnByaWNlfTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWwtMiB0ZXh0LXNtJz5UaGUgQWJvdmUgQ29zdCBJbmNsdWRlczwvbGk+XG4gICAgICAgICAgICAgICAgICB7aW5mby5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWwtNScga2V5PXtpfT4mI3gyMDIyOyB7ZmVhdHVyZX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LXNtJz5Db3N0IE9mIEFueSBBZGRpdGlvbmFsIFJlcGFpcnMgQXBhcnQgRnJvbSBUaGUgTGlzdCBNZW50aW9uZWQgQWJvdmUgV2lsbCBCZSBDaGFyZ2VkIEFkZGl0aW9uYWwuPC9oNT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BvcHVwQ29udGVudD5cbiAgICAgICAgPC9Qb3B1cD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuXG5jb25zdCBQb3B1cCA9IHR3LmRpdmBcbiAgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MCBwLTIgei0xMCB0ZXh0LWJsYWNrXG5gO1xuXG5jb25zdCBQb3B1cENvbnRlbnQgPSB0dy5kaXZgXG4gIGJnLXdoaXRlIHJvdW5kZWQtYi1sZyBtYXgtdy14bCB3LWZ1bGwgbWQ6dy01LzYgaC1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIHAtMlxuYDtcblxuY29uc3QgQ2xvc2VCdXR0b24gPSB0dy5idXR0b25gXG4gIGFic29sdXRlIHRvcC00IHJpZ2h0LTQgcC0yIHJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrIGJnLXdoaXRlXG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJ0dyIsIlByb2R1Y3RJbmZvIiwiUHJvZHVjdHMiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJwcm9kdWN0U2VsZWN0ZWQiLCJzZXRQcm9kdWN0U2VsZWN0ZWQiLCJvcGVuUG9wdXAiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImNsb3NlUG9wdXAiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiaW5kZXgiLCJvbkNsaWNrIiwiYSIsImltZyIsImFsdCIsInNyYyIsImltYWdlIiwiaDIiLCJuYW1lIiwicCIsInByaWNlIiwiUG9wdXAiLCJQb3B1cENvbnRlbnQiLCJDbG9zZUJ1dHRvbiIsImluZm8iLCJpZCIsImgxIiwidWwiLCJsaSIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImkiLCJoNSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});