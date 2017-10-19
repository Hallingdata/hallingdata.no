webpackJsonp([22676092666560,60335399758886],{

/***/ "./node_modules/json-loader/index.js!./.cache/json/layout-index.json":
/***/ (function(module, exports) {

	module.exports = {"layoutContext":{}}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/sogasg/dev/halling/hallingdata.no/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/sogasg/dev/halling/hallingdata.no/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/sogasg/dev/halling/hallingdata.no/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/Users/sogasg/dev/halling/hallingdata.no/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/Users/sogasg/dev/halling/hallingdata.no/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/sogasg/dev/halling/hallingdata.no/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./.cache/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__("./src/layouts/index.tsx");
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/layout-index.json");
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ "./src/layouts/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const amber_1 = __webpack_require__("./node_modules/material-ui/colors/amber.js");
	const deepPurple_1 = __webpack_require__("./node_modules/material-ui/colors/deepPurple.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const styles_2 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const templateWrapper = ({ children, classes }) => React.createElement(styles_1.MuiThemeProvider, { theme: theme }, React.createElement("div", null, children()));
	const theme = styles_1.createMuiTheme({
	    palette: {
	        primary: deepPurple_1.default,
	        secondary: amber_1.default
	    },
	    custom: {
	        pageMaxWith: 1200
	    }
	});
	const styles = theme => ({
	    root: {
	        fontFamily: theme.typography.fontFamily,
	        color: theme.palette.text.primary
	    },
	    content: {
	        minHeight: "calc(100vh - 144px)"
	    }
	});
	exports.default = styles_2.withStyles(styles)(templateWrapper);

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-tsx-653ce433a08c57e75650.js.map