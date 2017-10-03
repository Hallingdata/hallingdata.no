webpackJsonp([221374088121123],{

/***/ "./node_modules/flexboxgrid/dist/flexboxgrid.css":
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ "./node_modules/react-flexbox-grid/lib/classNames.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getClass;
	
	var _flexboxgrid = __webpack_require__("./node_modules/flexboxgrid/dist/flexboxgrid.css");
	
	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getClass(className) {
	  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
	}

/***/ }),

/***/ "./node_modules/react-flexbox-grid/lib/components/Col.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = getColumnProps;
	exports.default = Col;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createProps = __webpack_require__("./node_modules/react-flexbox-grid/lib/createProps.js");
	
	var _createProps2 = _interopRequireDefault(_createProps);
	
	var _classNames = __webpack_require__("./node_modules/react-flexbox-grid/lib/classNames.js");
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	var _types = __webpack_require__("./node_modules/react-flexbox-grid/lib/types.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var propTypes = {
	  xs: _types.ColumnSizeType,
	  sm: _types.ColumnSizeType,
	  md: _types.ColumnSizeType,
	  lg: _types.ColumnSizeType,
	  xsOffset: _propTypes2.default.number,
	  smOffset: _propTypes2.default.number,
	  mdOffset: _propTypes2.default.number,
	  lgOffset: _propTypes2.default.number,
	  first: _types.ViewportSizeType,
	  last: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};
	
	var classMap = {
	  xs: 'col-xs',
	  sm: 'col-sm',
	  md: 'col-md',
	  lg: 'col-lg',
	  xsOffset: 'col-xs-offset',
	  smOffset: 'col-sm-offset',
	  mdOffset: 'col-md-offset',
	  lgOffset: 'col-lg-offset'
	};
	
	function isInteger(value) {
	  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	}
	
	function getColClassNames(props) {
	  var extraClasses = [];
	
	  if (props.className) {
	    extraClasses.push(props.className);
	  }
	
	  if (props.first) {
	    extraClasses.push((0, _classNames2.default)('first-' + props.first));
	  }
	
	  if (props.last) {
	    extraClasses.push((0, _classNames2.default)('last-' + props.last));
	  }
	
	  return Object.keys(props).filter(function (key) {
	    return classMap[key];
	  }).map(function (key) {
	    return (0, _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
	  }).concat(extraClasses);
	}
	
	function getColumnProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
	}
	
	function Col(props) {
	  var tagName = props.tagName,
	      columnProps = _objectWithoutProperties(props, ['tagName']);
	
	  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
	}
	
	Col.propTypes = propTypes;

/***/ }),

/***/ "./node_modules/react-flexbox-grid/lib/components/Grid.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Grid;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createProps = __webpack_require__("./node_modules/react-flexbox-grid/lib/createProps.js");
	
	var _createProps2 = _interopRequireDefault(_createProps);
	
	var _classNames = __webpack_require__("./node_modules/react-flexbox-grid/lib/classNames.js");
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  fluid: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};
	
	function Grid(props) {
	  var containerClass = (0, _classNames2.default)(props.fluid ? 'container-fluid' : 'container');
	  var classNames = [props.className, containerClass];
	
	  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
	}
	
	Grid.propTypes = propTypes;

/***/ }),

/***/ "./node_modules/react-flexbox-grid/lib/components/Row.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRowProps = getRowProps;
	exports.default = Row;
	
	var _classNames = __webpack_require__("./node_modules/react-flexbox-grid/lib/classNames.js");
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createProps = __webpack_require__("./node_modules/react-flexbox-grid/lib/createProps.js");
	
	var _createProps2 = _interopRequireDefault(_createProps);
	
	var _types = __webpack_require__("./node_modules/react-flexbox-grid/lib/types.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];
	
	var propTypes = {
	  reverse: _propTypes2.default.bool,
	  start: _types.ViewportSizeType,
	  center: _types.ViewportSizeType,
	  end: _types.ViewportSizeType,
	  top: _types.ViewportSizeType,
	  middle: _types.ViewportSizeType,
	  bottom: _types.ViewportSizeType,
	  around: _types.ViewportSizeType,
	  between: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};
	
	function getRowClassNames(props) {
	  var modificators = [props.className, (0, _classNames2.default)('row')];
	
	  for (var i = 0; i < rowKeys.length; ++i) {
	    var key = rowKeys[i];
	    var value = props[key];
	    if (value) {
	      modificators.push((0, _classNames2.default)(key + '-' + value));
	    }
	  }
	
	  if (props.reverse) {
	    modificators.push((0, _classNames2.default)('reverse'));
	  }
	
	  return modificators;
	}
	
	function getRowProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
	}
	
	function Row(props) {
	  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
	}
	
	Row.propTypes = propTypes;

/***/ }),

/***/ "./node_modules/react-flexbox-grid/lib/createProps.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createProps;
	function createProps(propTypes, props, classNames) {
	  var newProps = {};
	
	  Object.keys(props).filter(function (key) {
	    return key === 'children' || !propTypes[key];
	  }).forEach(function (key) {
	    return newProps[key] = props[key];
	  });
	
	  var className = classNames.filter(function (cn) {
	    return cn;
	  }).join(' ');
	  return Object.assign({}, newProps, { className: className });
	}

/***/ }),

/***/ "./node_modules/react-flexbox-grid/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;
	
	var _Row2 = __webpack_require__("./node_modules/react-flexbox-grid/lib/components/Row.js");
	
	Object.defineProperty(exports, 'getRowProps', {
	  enumerable: true,
	  get: function get() {
	    return _Row2.getRowProps;
	  }
	});
	
	var _Col2 = __webpack_require__("./node_modules/react-flexbox-grid/lib/components/Col.js");
	
	Object.defineProperty(exports, 'getColumnProps', {
	  enumerable: true,
	  get: function get() {
	    return _Col2.getColumnProps;
	  }
	});
	
	var _Grid2 = __webpack_require__("./node_modules/react-flexbox-grid/lib/components/Grid.js");
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Grid = _Grid3.default;
	exports.Row = _Row3.default;
	exports.Col = _Col3.default;

/***/ }),

/***/ "./node_modules/react-flexbox-grid/lib/types.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ViewportSizeType = exports.ColumnSizeType = undefined;
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
	var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg']);

/***/ }),

/***/ "./src/components/html-render.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const HtmlRenderComponent = ({ content }) => React.createElement("div", { className: "blog-post-content", dangerouslySetInnerHTML: { __html: content } });
	exports.default = HtmlRenderComponent;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/sogasg/halling/hallingdata.no/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const react_flexbox_grid_1 = __webpack_require__("./node_modules/react-flexbox-grid/lib/index.js");
	const html_render_1 = __webpack_require__("./src/components/html-render.tsx");
	const IndexPage = ({ data }) => React.createElement(react_flexbox_grid_1.Grid, { fluid: true }, React.createElement(react_flexbox_grid_1.Row, null, React.createElement(react_flexbox_grid_1.Col, { xs: 12 }, React.createElement(html_render_1.default, { content: data.row1.childMarkdownRemark.html }))));
	exports.default = IndexPage;
	exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-a5b6b1edfb8d8c19eb34.js.map