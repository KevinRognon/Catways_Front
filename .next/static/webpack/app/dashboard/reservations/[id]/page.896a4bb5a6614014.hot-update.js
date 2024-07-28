"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/reservations/[id]/page",{

/***/ "(app-pages-browser)/./app/dashboard/reservations/[id]/page.tsx":
/*!**************************************************!*\
  !*** ./app/dashboard/reservations/[id]/page.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/withAuth */ \"(app-pages-browser)/./components/withAuth.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Detailed_Reservation() {\n    _s();\n    const [reservation, setReservation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const getReservation = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://localhost:8000\", \"/reservations/\").concat(id));\n            setReservation(await response.data.reservation);\n        } catch (error) {\n            console.error(\"Error fetching reservation data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getReservation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: reservation.clientName\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\WebstormProjects\\\\React\\\\Catways_Front\\\\app\\\\dashboard\\\\reservations\\\\[id]\\\\page.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Detailed_Reservation, \"TWwvrYHSgLcG46aI0rMsWC6Np8E=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = Detailed_Reservation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Detailed_Reservation));\nvar _c, _c1;\n$RefreshReg$(_c, \"Detailed_Reservation\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcmVzZXJ2YXRpb25zL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBQ1U7QUFDNUI7QUFDa0I7QUFHNUMsU0FBU0s7O0lBRUwsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILCtDQUFRQSxDQUFDLENBQUM7SUFDaEQsTUFBTSxFQUFDSSxFQUFFLEVBQUMsR0FBR1IsMERBQVNBO0lBRXRCLE1BQU1TLGlCQUFpQjtRQUNuQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNUiw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDLEdBQW1DSCxPQUFoQ0ksdUJBQWUsRUFBQyxrQkFBbUIsT0FBSEo7WUFDcEVELGVBQWUsTUFBTUcsU0FBU0ssSUFBSSxDQUFDVCxXQUFXO1FBRWxELEVBQUUsT0FBT1UsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsb0NBQW9DQTtRQUN0RDtJQUNKO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ05NO0lBQ0osR0FBRyxFQUFFO0lBR0wscUJBQ0k7a0JBQ0ksNEVBQUNTO3NCQUFJWixZQUFZYSxVQUFVOzs7Ozs7O0FBSXZDO0dBMUJTZDs7UUFHUUwsc0RBQVNBOzs7S0FIakJLO0FBNEJULCtEQUFlLE1BQUFKLGdFQUFRQSxDQUFDSSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9yZXNlcnZhdGlvbnMvW2lkXS9wYWdlLnRzeD9hMTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBEZXRhaWxlZF9SZXNlcnZhdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBbcmVzZXJ2YXRpb24sIHNldFJlc2VydmF0aW9uXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IHtpZH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgICBjb25zdCBnZXRSZXNlcnZhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5VUkx9L3Jlc2VydmF0aW9ucy8ke2lkfWApO1xyXG4gICAgICAgICAgICBzZXRSZXNlcnZhdGlvbihhd2FpdCByZXNwb25zZS5kYXRhLnJlc2VydmF0aW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJlc2VydmF0aW9uIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UmVzZXJ2YXRpb24oKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+e3Jlc2VydmF0aW9uLmNsaWVudE5hbWV9PC9oMT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKERldGFpbGVkX1Jlc2VydmF0aW9uKTsiXSwibmFtZXMiOlsidXNlUGFyYW1zIiwid2l0aEF1dGgiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGV0YWlsZWRfUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbiIsInNldFJlc2VydmF0aW9uIiwiaWQiLCJnZXRSZXNlcnZhdGlvbiIsInJlc3BvbnNlIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIlVSTCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoMSIsImNsaWVudE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/reservations/[id]/page.tsx\n"));

/***/ })

});