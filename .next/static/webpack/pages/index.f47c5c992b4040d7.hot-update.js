"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/game.js":
/*!***************************!*\
  !*** ./component/game.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useGameover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useGameover */ \"./hooks/useGameover.js\");\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/game.module.css */ \"./styles/game.module.css\");\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_game_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _tetris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetris */ \"./component/tetris.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./component/menu.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Game = function(param) {\n    var rows = param.rows, col = param.col;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_hooks_useGameover__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), 3), gameover = ref[0], setGameover = ref[1], resetGameover = ref[2];\n    var start = function() {\n        resetGameover();\n        console.log(\"Started gameover \".concat(gameover));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_5___default().game),\n            children: gameover ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: start\n            }, void 0, false, {\n                fileName: \"/Users/ajeet/Desktop/Tetris/component/game.js\",\n                lineNumber: 17,\n                columnNumber: 21\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tetris__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                rows: rows,\n                col: col,\n                setGameover: setGameover\n            }, void 0, false, {\n                fileName: \"/Users/ajeet/Desktop/Tetris/component/game.js\",\n                lineNumber: 19,\n                columnNumber: 21\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/ajeet/Desktop/Tetris/component/game.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Game, \"H94Hjojitlw0uy9751APRYdakgc=\", false, function() {\n    return [\n        _hooks_useGameover__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUE4QztBQUNBO0FBQ2pCO0FBQ0o7QUFFekIsSUFBTUksSUFBSSxHQUFHLGdCQUFtQjtRQUFoQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLEdBQUcsU0FBSEEsR0FBRzs7SUFDckIsSUFBMkNOLEdBQWEsb0ZBQWJBLDhEQUFXLEVBQUUsTUFBakRPLFFBQVEsR0FBNEJQLEdBQWEsR0FBekMsRUFBQ1EsV0FBVyxHQUFnQlIsR0FBYSxHQUE3QixFQUFDUyxhQUFhLEdBQUVULEdBQWEsR0FBZjtJQUV6QyxJQUFNVSxLQUFLLEdBQUcsV0FBTTtRQUNoQkQsYUFBYSxFQUFFLENBQUM7UUFDaEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFrQixDQUFXLE9BQVRMLFFBQVEsQ0FBRSxDQUFDLENBQUM7S0FDL0M7SUFDRCxxQkFBUTtrQkFDSiw0RUFBQ00sS0FBRztZQUFDQyxTQUFTLEVBQUViLHFFQUFXO3NCQUVuQk0sUUFBUSxpQkFDSiw4REFBQ0osNkNBQUk7Z0JBQUNhLE9BQU8sRUFBRU4sS0FBSzs7Ozs7cUJBQUksaUJBRXhCLDhEQUFDUiwrQ0FBTTtnQkFBQ0csSUFBSSxFQUFFQSxJQUFJO2dCQUFFQyxHQUFHLEVBQUVBLEdBQUc7Z0JBQUVFLFdBQVcsRUFBRUEsV0FBVzs7Ozs7cUJBQUk7Ozs7O2lCQUloRTtxQkFDUCxDQUNGO0NBQ0o7R0FwQktKLElBQUk7O1FBQ3FDSiwwREFBVzs7O0FBRHBESSxLQUFBQSxJQUFJO0FBc0JWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9nYW1lLmpzP2Q3NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUdhbWVvdmVyIGZyb20gXCIuLi9ob29rcy91c2VHYW1lb3ZlclwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZ2FtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBUZXRyaXMgZnJvbSBcIi4vdGV0cmlzXCJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSdcblxuY29uc3QgR2FtZSA9ICh7IHJvd3MsIGNvbCB9KSA9PiB7XG4gICAgY29uc3QgW2dhbWVvdmVyLHNldEdhbWVvdmVyLHJlc2V0R2FtZW92ZXJdPXVzZUdhbWVvdmVyKCk7XG5cbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgcmVzZXRHYW1lb3ZlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnRlZCBnYW1lb3ZlciAke2dhbWVvdmVyfWApO1xuICAgIH1cbiAgICByZXR1cm4gKDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2FtZW92ZXI/KFxuICAgICAgICAgICAgICAgICAgICA8TWVudSBvbkNsaWNrPXtzdGFydH0gLz5cbiAgICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICAgICAgPFRldHJpcyByb3dzPXtyb3dzfSBjb2w9e2NvbH0gc2V0R2FtZW92ZXI9e3NldEdhbWVvdmVyfSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsidXNlR2FtZW92ZXIiLCJzdHlsZXMiLCJUZXRyaXMiLCJNZW51IiwiR2FtZSIsInJvd3MiLCJjb2wiLCJnYW1lb3ZlciIsInNldEdhbWVvdmVyIiwicmVzZXRHYW1lb3ZlciIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImdhbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/game.js\n"));

/***/ }),

/***/ "./component/tetris.js":
/*!*****************************!*\
  !*** ./component/tetris.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Tetris = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"tetris\"\n    }, void 0, false, {\n        fileName: \"/Users/ajeet/Desktop/Tetris/component/tetris.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Tetris;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetris);\nvar _c;\n$RefreshReg$(_c, \"Tetris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdGV0cmlzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXlCO0FBRXpCLElBQU1DLE1BQU0sR0FBRyxXQUFNO0lBQ25CLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUFDLFFBQU07Ozs7O2FBQU0sQ0FDbEI7Q0FDRjtBQUpLRCxLQUFBQSxNQUFNO0FBTVosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3RldHJpcy5qcz8xNDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgVGV0cmlzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+dGV0cmlzPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV0cmlzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGV0cmlzIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/tetris.js\n"));

/***/ })

});