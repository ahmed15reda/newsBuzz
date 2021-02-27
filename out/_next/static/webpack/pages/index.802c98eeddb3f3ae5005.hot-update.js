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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _lib_news__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/news */ "./lib/news.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\NextJS task\\nextjs-news\\pages\\index.js";







function Home(props) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.news,
        item: true,
        md: 6,
        children: props.props.allNews.news.map(function (_ref) {
          var _id = _ref._id,
              title = _ref.title,
              keywords = _ref.keywords,
              source = _ref.source,
              created_at = _ref.created_at;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a["new"],
            item: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "d-flex align-items-center mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                    className: "mr-2",
                    src: source === null || source === void 0 ? void 0 : source.url,
                    alt: "Image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
                    children: source === null || source === void 0 ? void 0 : source.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.icon,
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faRss"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                children: created_at
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 19
            }, _this), keywords.map(function (keyword) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.keyword,
                children: keyword.name
              }, Math.random(), false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 46
              }, _this);
            })]
          }, _id, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
          return Object(_lib_news__WEBPACK_IMPORTED_MODULE_7__["getAllNews"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibmV3cyIsImFsbE5ld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsImtleXdvcmRzIiwic291cmNlIiwiY3JlYXRlZF9hdCIsImRldGFpbHMiLCJ1cmwiLCJpY29uIiwiZmFSc3MiLCJrZXl3b3JkIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBbGxOZXdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxzQkFDTSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDZCQUNJLHFFQUFDLDhEQUFEO0FBQU0saUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBOEIsWUFBSSxNQUFsQztBQUFtQyxVQUFFLEVBQUUsQ0FBdkM7QUFBQSxrQkFFQ0gsS0FBSyxDQUFDQSxLQUFOLENBQVlJLE9BQVosQ0FBb0JELElBQXBCLENBQXlCRSxHQUF6QixDQUE2QjtBQUFBLGNBQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLGNBQU9DLEtBQVAsUUFBT0EsS0FBUDtBQUFBLGNBQWNDLFFBQWQsUUFBY0EsUUFBZDtBQUFBLGNBQXdCQyxNQUF4QixRQUF3QkEsTUFBeEI7QUFBQSxjQUErQkMsVUFBL0IsUUFBK0JBLFVBQS9CO0FBQUEsOEJBQzVCO0FBQUsscUJBQVMsRUFBRVQsOERBQU0sT0FBdEI7QUFBNEIsZ0JBQUksTUFBaEM7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVBLDhEQUFNLENBQUNVLE9BQXZCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLGdDQUFmO0FBQUEsd0NBQ0U7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFzQix1QkFBRyxFQUFFRixNQUFGLGFBQUVBLE1BQUYsdUJBQUVBLE1BQU0sQ0FBRUcsR0FBbkM7QUFBd0MsdUJBQUcsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBRyw2QkFBUyxFQUFFWCw4REFBTSxDQUFDTSxLQUFyQjtBQUFBLDhCQUE2QkUsTUFBN0IsYUFBNkJBLE1BQTdCLHVCQUE2QkEsTUFBTSxDQUFFRjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUtFLHFFQUFDLDhFQUFEO0FBQWlCLDJCQUFTLEVBQUVOLDhEQUFNLENBQUNZLElBQW5DO0FBQXlDLHNCQUFJLEVBQUVDLHVFQUFLQTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVFJO0FBQUEsMEJBQUlQO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSSixlQVNJO0FBQUEsMEJBQU9HO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFjR0YsUUFBUSxDQUFDSCxHQUFULENBQWEsVUFBQ1UsT0FBRDtBQUFBLGtDQUFhO0FBQUsseUJBQVMsRUFBRWQsOERBQU0sQ0FBQ2MsT0FBdkI7QUFBQSwwQkFBcURBLE9BQU8sQ0FBQ0M7QUFBN0QsaUJBQXFDQyxJQUFJLENBQUNDLE1BQUwsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBYjtBQUFBLGFBQWIsQ0FkSDtBQUFBLGFBQXNDWixHQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQ0QjtBQUFBLFNBQTdCO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETjtBQThCRDtLQS9CdUJQLEk7QUFpQ3hCQSxJQUFJLENBQUNvQixlQUFMLHVUQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNDQyw0REFBVSxFQURYOztBQUFBO0FBQ2ZoQixpQkFEZTtBQUFBLDJDQUVkO0FBQ0xKLGlCQUFLLEVBQUU7QUFDTEkscUJBQU8sRUFBUEE7QUFESztBQURGLFdBRmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODAyYzk4ZWVkZGIzZjNhZTUwMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB7ZmFSc3N9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge2dldEFsbE5ld3N9IGZyb20gJy4uL2xpYi9uZXdzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17c3R5bGVzLm5ld3N9IGl0ZW0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7cHJvcHMucHJvcHMuYWxsTmV3cy5uZXdzLm1hcCgoe19pZCwgdGl0bGUsIGtleXdvcmRzLCBzb3VyY2UsY3JlYXRlZF9hdH0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld30gaXRlbSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTJcIiBzcmM9e3NvdXJjZT8udXJsfSBhbHQ9XCJJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntzb3VyY2U/LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXtmYVJzc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjcmVhdGVkX2F0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7a2V5d29yZHMubWFwKChrZXl3b3JkKSA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmtleXdvcmR9IGtleT17TWF0aC5yYW5kb20oKX0+e2tleXdvcmQubmFtZX08L2Rpdj4pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICBcbiAgKVxufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsTmV3cyA9IGF3YWl0IGdldEFsbE5ld3MoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxOZXdzXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9