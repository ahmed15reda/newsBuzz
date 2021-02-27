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
                className: "d-flex align-items-center mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                  className: "mr-2",
                  src: source === null || source === void 0 ? void 0 : source.url,
                  alt: "Image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
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
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibmV3cyIsImFsbE5ld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsImtleXdvcmRzIiwic291cmNlIiwiY3JlYXRlZF9hdCIsImRldGFpbHMiLCJ1cmwiLCJrZXl3b3JkIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRBbGxOZXdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxzQkFDTSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDZCQUNJLHFFQUFDLDhEQUFEO0FBQU0saUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBOEIsWUFBSSxNQUFsQztBQUFtQyxVQUFFLEVBQUUsQ0FBdkM7QUFBQSxrQkFFQ0gsS0FBSyxDQUFDQSxLQUFOLENBQVlJLE9BQVosQ0FBb0JELElBQXBCLENBQXlCRSxHQUF6QixDQUE2QjtBQUFBLGNBQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLGNBQU9DLEtBQVAsUUFBT0EsS0FBUDtBQUFBLGNBQWNDLFFBQWQsUUFBY0EsUUFBZDtBQUFBLGNBQXdCQyxNQUF4QixRQUF3QkEsTUFBeEI7QUFBQSxjQUErQkMsVUFBL0IsUUFBK0JBLFVBQS9CO0FBQUEsOEJBQzVCO0FBQUsscUJBQVMsRUFBRVQsOERBQU0sT0FBdEI7QUFBNEIsZ0JBQUksTUFBaEM7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVBLDhEQUFNLENBQUNVLE9BQXZCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLGdDQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBc0IscUJBQUcsRUFBRUYsTUFBRixhQUFFQSxNQUFGLHVCQUFFQSxNQUFNLENBQUVHLEdBQW5DO0FBQXdDLHFCQUFHLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUEsNEJBQUlILE1BQUosYUFBSUEsTUFBSix1QkFBSUEsTUFBTSxDQUFFRjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBS0k7QUFBQSwwQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKLGVBTUk7QUFBQSwwQkFBT0c7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQVVHRixRQUFRLENBQUNILEdBQVQsQ0FBYSxVQUFDUSxPQUFEO0FBQUEsa0NBQWE7QUFBSyx5QkFBUyxFQUFFWiw4REFBTSxDQUFDWSxPQUF2QjtBQUFBLDBCQUFxREEsT0FBTyxDQUFDQztBQUE3RCxpQkFBcUNDLElBQUksQ0FBQ0MsTUFBTCxFQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFiO0FBQUEsYUFBYixDQVZIO0FBQUEsYUFBc0NWLEdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDRCO0FBQUEsU0FBN0I7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUROO0FBMEJEO0tBM0J1QlAsSTtBQTZCeEJBLElBQUksQ0FBQ2tCLGVBQUwsdVRBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0NDLDREQUFVLEVBRFg7O0FBQUE7QUFDZmQsaUJBRGU7QUFBQSwyQ0FFZDtBQUNMSixpQkFBSyxFQUFFO0FBQ0xJLHFCQUFPLEVBQVBBO0FBREs7QUFERixXQUZjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljMzFmNGEwNjVjN2Y3ZWMwNzU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcbmltcG9ydCB7Z2V0QWxsTmV3c30gZnJvbSAnLi4vbGliL25ld3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e3N0eWxlcy5uZXdzfSBpdGVtIG1kPXs2fT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAge3Byb3BzLnByb3BzLmFsbE5ld3MubmV3cy5tYXAoKHtfaWQsIHRpdGxlLCBrZXl3b3Jkcywgc291cmNlLGNyZWF0ZWRfYXR9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXd9IGl0ZW0ga2V5PXtfaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtci0yXCIgc3JjPXtzb3VyY2U/LnVybH0gYWx0PVwiSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c291cmNlPy50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y3JlYXRlZF9hdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge2tleXdvcmRzLm1hcCgoa2V5d29yZCkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5rZXl3b3JkfSBrZXk9e01hdGgucmFuZG9tKCl9PntrZXl3b3JkLm5hbWV9PC9kaXY+KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgXG4gIClcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbE5ld3MgPSBhd2FpdCBnZXRBbGxOZXdzKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsTmV3c1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==