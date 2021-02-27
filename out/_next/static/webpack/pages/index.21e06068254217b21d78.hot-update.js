webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\NextJS task\\nextjs-news\\components\\Header\\Header.js",
    _this = undefined;






var Header = function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    sticky: "top",
    bg: "light",
    expand: "lg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Brand, {
      href: "#home",
      children: "React-Bootstrap"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Collapse, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.basic,
      id: "basic-navbar-nav",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "ml-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"].Link, {
          href: "#",
          children: "Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
false,

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
false,

/***/ "./node_modules/@popperjs/core/lib/enums.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
false,

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
false,

/***/ "./node_modules/@popperjs/core/lib/popper-base.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
false,

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
false,

/***/ "./node_modules/@restart/hooks/esm/usePrevious.js":
false,

/***/ "./node_modules/@restart/hooks/esm/useSafeState.js":
false,

/***/ "./node_modules/dom-helpers/esm/contains.js":
false,

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/matches.js":
false,

/***/ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Button.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Dropdown.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownItem.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownMenu.js":
false,

/***/ "./node_modules/react-bootstrap/esm/DropdownToggle.js":
false,

/***/ "./node_modules/react-bootstrap/esm/NavDropdown.js":
false,

/***/ "./node_modules/react-bootstrap/esm/usePopperMarginModifiers.js":
false,

/***/ "./node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js":
false,

/***/ "./node_modules/react-overlays/esm/Dropdown.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownContext.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownMenu.js":
false,

/***/ "./node_modules/react-overlays/esm/DropdownToggle.js":
false,

/***/ "./node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js":
false,

/***/ "./node_modules/react-overlays/esm/ownerDocument.js":
false,

/***/ "./node_modules/react-overlays/esm/popper.js":
false,

/***/ "./node_modules/react-overlays/esm/safeFindDOMNode.js":
false,

/***/ "./node_modules/react-overlays/esm/usePopper.js":
false,

/***/ "./node_modules/react-overlays/esm/useRootClose.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlcyIsImhlYWRlciIsImJhc2ljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLHNCQUNFLHFFQUFDLDhEQUFEO0FBQVEsYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxNQUExQjtBQUFtQyxVQUFNLEVBQUMsS0FBMUM7QUFBZ0QsTUFBRSxFQUFDLE9BQW5EO0FBQTJELFVBQU0sRUFBQyxJQUFsRTtBQUFBLDRCQUNJLHFFQUFDLDhEQUFELENBQVEsS0FBUjtBQUFjLFVBQUksRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsOERBQUQsQ0FBUSxNQUFSO0FBQWUsdUJBQWM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0kscUVBQUMsOERBQUQsQ0FBUSxRQUFSO0FBQWlCLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsS0FBbkM7QUFBMEMsUUFBRSxFQUFDLGtCQUE3QztBQUFBLDZCQUNJLHFFQUFDLDJEQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0UscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsY0FBSSxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLGNBQUksRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQ7O0tBQU1ILE07QUFnQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxZTA2MDY4MjU0MjE3YjIxZDc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9ICBzdGlja3k9XCJ0b3BcIiBiZz1cImxpZ2h0XCIgZXhwYW5kPVwibGdcIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiPlJlYWN0LUJvb3RzdHJhcDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGNsYXNzTmFtZT17c3R5bGVzLmJhc2ljfSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCI+XHJcblxyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCI+TGluazwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG48L05hdmJhcj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==