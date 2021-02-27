webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_Users_lenovo_Desktop_NextJS_task_nextjs_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_lenovo_Desktop_NextJS_task_nextjs_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_lenovo_Desktop_NextJS_task_nextjs_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_lenovo_Desktop_NextJS_task_nextjs_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _lib_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/news */ "./lib/news.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\NextJS task\\nextjs-news\\pages\\index.js";





function Home(props) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.news,
        item: true,
        md: 6,
        children: props.props.allNews.news.map(function (_ref) {
          var _id = _ref._id,
              title = _ref.title,
              keywords = _ref.keywords,
              source = _ref.source,
              created_at = _ref.created_at;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a["new"],
            item: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "d-flex ali",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                  src: source === null || source === void 0 ? void 0 : source.url,
                  alt: "Image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  children: source === null || source === void 0 ? void 0 : source.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: created_at
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 19
            }, _this), keywords.map(function (keyword) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.keyword,
                children: keyword.name
              }, Math.random(), false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 46
              }, _this);
            })]
          }, _id, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = Home;
Home.getInitialProps = /*#__PURE__*/Object(C_Users_lenovo_Desktop_NextJS_task_nextjs_news_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_lenovo_Desktop_NextJS_task_nextjs_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var allNews;
  return C_Users_lenovo_Desktop_NextJS_task_nextjs_news_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_lib_news__WEBPACK_IMPORTED_MODULE_6__["getAllNews"])();

        case 2:
          allNews = _context.sent;
          return _context.abrupt("return", {
            props: {
              allNews: allNews
            }
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibmV3cyIsImFsbE5ld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsImtleXdvcmRzIiwic291cmNlIiwiY3JlYXRlZF9hdCIsImRldGFpbHMiLCJ1cmwiLCJrZXl3b3JkIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBbGxOZXdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxzQkFDTSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDZCQUNJLHFFQUFDLDhEQUFEO0FBQU0saUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBOEIsWUFBSSxNQUFsQztBQUFtQyxVQUFFLEVBQUUsQ0FBdkM7QUFBQSxrQkFFQ0gsS0FBSyxDQUFDQSxLQUFOLENBQVlJLE9BQVosQ0FBb0JELElBQXBCLENBQXlCRSxHQUF6QixDQUE2QjtBQUFBLGNBQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLGNBQU9DLEtBQVAsUUFBT0EsS0FBUDtBQUFBLGNBQWNDLFFBQWQsUUFBY0EsUUFBZDtBQUFBLGNBQXdCQyxNQUF4QixRQUF3QkEsTUFBeEI7QUFBQSxjQUErQkMsVUFBL0IsUUFBK0JBLFVBQS9CO0FBQUEsOEJBQzVCO0FBQUsscUJBQVMsRUFBRVQsOERBQU0sT0FBdEI7QUFBNEIsZ0JBQUksTUFBaEM7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVBLDhEQUFNLENBQUNVLE9BQXZCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLFlBQWY7QUFBQSx3Q0FDRTtBQUFLLHFCQUFHLEVBQUVGLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFRyxHQUFsQjtBQUF1QixxQkFBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLDRCQUFNSCxNQUFOLGFBQU1BLE1BQU4sdUJBQU1BLE1BQU0sQ0FBRUY7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUtJO0FBQUEsMEJBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSixlQU1JO0FBQUEsMEJBQU1HO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFVR0YsUUFBUSxDQUFDSCxHQUFULENBQWEsVUFBQ1EsT0FBRDtBQUFBLGtDQUFhO0FBQUsseUJBQVMsRUFBRVosOERBQU0sQ0FBQ1ksT0FBdkI7QUFBQSwwQkFBcURBLE9BQU8sQ0FBQ0M7QUFBN0QsaUJBQXFDQyxJQUFJLENBQUNDLE1BQUwsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBYjtBQUFBLGFBQWIsQ0FWSDtBQUFBLGFBQXNDVixHQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQ0QjtBQUFBLFNBQTdCO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETjtBQTBCRDtLQTNCdUJQLEk7QUE2QnhCQSxJQUFJLENBQUNrQixlQUFMLHVUQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNDQyw0REFBVSxFQURYOztBQUFBO0FBQ2ZkLGlCQURlO0FBQUEsMkNBRWQ7QUFDTEosaUJBQUssRUFBRTtBQUNMSSxxQkFBTyxFQUFQQTtBQURLO0FBREYsV0FGYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OGNhZjM1ODk5MmQxMzViYTlmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXG5pbXBvcnQge2dldEFsbE5ld3N9IGZyb20gJy4uL2xpYi9uZXdzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtzdHlsZXMubmV3c30gaXRlbSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtwcm9wcy5wcm9wcy5hbGxOZXdzLm5ld3MubWFwKCh7X2lkLCB0aXRsZSwga2V5d29yZHMsIHNvdXJjZSxjcmVhdGVkX2F0fSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3fSBpdGVtIGtleT17X2lkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c291cmNlPy51cmx9IGFsdD1cIkltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57c291cmNlPy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntjcmVhdGVkX2F0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtrZXl3b3Jkcy5tYXAoKGtleXdvcmQpID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMua2V5d29yZH0ga2V5PXtNYXRoLnJhbmRvbSgpfT57a2V5d29yZC5uYW1lfTwvZGl2Pil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIFxuICApXG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxOZXdzID0gYXdhaXQgZ2V0QWxsTmV3cygpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbE5ld3NcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=