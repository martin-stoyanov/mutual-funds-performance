webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");





var _jsxFileName = "/Users/Martin/PycharmProjects/mutual-fund-performance/pages/index.js";





var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var svg = d3.select("svg#AnscombesQuartet");
      var width = svg.attr("width");
      var height = svg.attr("height"); // Using Mike Bostock's convention for margins

      var margin = {
        "top": 5,
        "right": 5,
        "bottom": 15,
        "left": 25
      };
      var chartWidth = width - margin.left - margin.right;
      var chartHeight = height - margin.top - margin.bottom;
      var xScale = d3.scaleLinear().domain([0, 15]).range([0, chartWidth]);
      var yScale = d3.scaleLinear().domain([0, 10]).range([chartHeight, 0]);
      var leftAxis = d3.axisLeft(yScale).ticks(2).tickSize(0);
      svg.append("g").attr("class", "y axis").attr("transform", "translate(" + margin.left + "," + margin.top + ")").style("font", "8px Arial").call(leftAxis);
      var bottomAxis = d3.axisBottom(xScale).ticks(3).tickSize(1);
      svg.append("g").attr("class", "x axis").attr("transform", "translate(" + margin.left + "," + (chartHeight + margin.top) + ")").style("font", "8px Arial").call(bottomAxis);
      var AnscombesQuartetData = [[10, 9.14], [8, 8.14], [13, 8.74], [9, 8.77], [11, 9.26], [14, 8.1], [6, 6.13], [4, 3.1], [12, 9.13], [7, 7.26], [5, 4.74]];

      for (var x = 1; x < 16; x++) {
        svg.append("line").attr("x1", 25 + xScale(x)).attr("x2", 25 + xScale(x)).attr("y1", 5).attr("y2", 185).style("stroke", "black");
      }

      ;

      for (var y = 0; y < 10; y++) {
        svg.append("line").attr("x1", 25).attr("x2", 295.5).attr("y1", 185 - yScale(y)).attr("y2", 185 - yScale(y)).style("stroke", "black");
      }

      ;
      AnscombesQuartetData.forEach(function (d) {
        svg.append("circle").attr("r", 2.3).attr("cx", 25 + xScale(d[0])).attr("cy", 5 + yScale(d[1])).style("fill", "blue").on("click", function () {
          var circle = d3.select(this);
          circle.style("fill", "red");
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        direction: "row",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        height: 200,
        width: 300,
        id: "AnscombesQuartet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "hello")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3c4e09e8a9bb01fc7263.hot-update.js.map