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

/***/ "./node_modules/deep-equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__("./node_modules/deep-equal/lib/keys.js");
	var isArguments = __webpack_require__("./node_modules/deep-equal/lib/is_arguments.js");
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ "./node_modules/ionicons/css/ionicons.min.css":
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/material-design-icons-iconfont/dist/material-design-icons.css":
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/raf/index.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__("./node_modules/performance-now/lib/performance-now.js")
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function(object) {
	  if (!object) {
	    object = root;
	  }
	  object.requestAnimationFrame = raf
	  object.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ "./node_modules/react-headroom/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	var _raf = __webpack_require__("./node_modules/raf/index.js");
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldUpdate2 = __webpack_require__("./node_modules/react-headroom/dist/shouldUpdate.js");
	
	var _shouldUpdate3 = _interopRequireDefault(_shouldUpdate2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-unresolved
	
	
	var noop = function noop() {};
	
	var Headroom = function (_Component) {
	  _inherits(Headroom, _Component);
	
	  function Headroom(props) {
	    _classCallCheck(this, Headroom);
	
	    // Class variables.
	    var _this = _possibleConstructorReturn(this, (Headroom.__proto__ || Object.getPrototypeOf(Headroom)).call(this, props));
	
	    _this.setRef = function (ref) {
	      return _this.inner = ref;
	    };
	
	    _this.setHeightOffset = function () {
	      _this.setState({
	        height: _this.inner.offsetHeight
	      });
	      _this.resizeTicking = false;
	    };
	
	    _this.getScrollY = function () {
	      if (_this.props.parent().pageYOffset !== void 0) {
	        return _this.props.parent().pageYOffset;
	      } else if (_this.props.parent().scrollTop !== void 0) {
	        return _this.props.parent().scrollTop;
	      } else {
	        return (document.documentElement || document.body.parentNode || document.body).scrollTop;
	      }
	    };
	
	    _this.getViewportHeight = function () {
	      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	    };
	
	    _this.getDocumentHeight = function () {
	      var body = document.body;
	      var documentElement = document.documentElement;
	
	      return Math.max(body.scrollHeight, documentElement.scrollHeight, body.offsetHeight, documentElement.offsetHeight, body.clientHeight, documentElement.clientHeight);
	    };
	
	    _this.getElementPhysicalHeight = function (elm) {
	      return Math.max(elm.offsetHeight, elm.clientHeight);
	    };
	
	    _this.getElementHeight = function (elm) {
	      return Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);
	    };
	
	    _this.getScrollerPhysicalHeight = function () {
	      var parent = _this.props.parent();
	
	      return parent === window || parent === document.body ? _this.getViewportHeight() : _this.getElementPhysicalHeight(parent);
	    };
	
	    _this.getScrollerHeight = function () {
	      var parent = _this.props.parent();
	
	      return parent === window || parent === document.body ? _this.getDocumentHeight() : _this.getElementHeight(parent);
	    };
	
	    _this.isOutOfBound = function (currentScrollY) {
	      var pastTop = currentScrollY < 0;
	
	      var scrollerPhysicalHeight = _this.getScrollerPhysicalHeight();
	      var scrollerHeight = _this.getScrollerHeight();
	
	      var pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight;
	
	      return pastTop || pastBottom;
	    };
	
	    _this.handleScroll = function () {
	      if (!_this.scrollTicking) {
	        _this.scrollTicking = true;
	        (0, _raf2.default)(_this.update);
	      }
	    };
	
	    _this.handleResize = function () {
	      if (!_this.resizeTicking) {
	        _this.resizeTicking = true;
	        (0, _raf2.default)(_this.setHeightOffset);
	      }
	    };
	
	    _this.unpin = function () {
	      _this.props.onUnpin();
	
	      _this.setState({
	        translateY: '-100%',
	        className: 'headroom headroom--unpinned'
	      }, function () {
	        setTimeout(function () {
	          _this.setState({ state: 'unpinned' });
	        }, 0);
	      });
	    };
	
	    _this.pin = function () {
	      _this.props.onPin();
	
	      _this.setState({
	        translateY: 0,
	        className: 'headroom headroom--pinned',
	        state: 'pinned'
	      });
	    };
	
	    _this.unfix = function () {
	      _this.props.onUnfix();
	
	      _this.setState({
	        translateY: 0,
	        className: 'headroom headroom--unfixed',
	        state: 'unfixed'
	      });
	    };
	
	    _this.update = function () {
	      _this.currentScrollY = _this.getScrollY();
	
	      if (!_this.isOutOfBound(_this.currentScrollY)) {
	        var _shouldUpdate = (0, _shouldUpdate3.default)(_this.lastKnownScrollY, _this.currentScrollY, _this.props, _this.state),
	            action = _shouldUpdate.action;
	
	        if (action === 'pin') {
	          _this.pin();
	        } else if (action === 'unpin') {
	          _this.unpin();
	        } else if (action === 'unfix') {
	          _this.unfix();
	        }
	      }
	
	      _this.lastKnownScrollY = _this.currentScrollY;
	      _this.scrollTicking = false;
	    };
	
	    _this.currentScrollY = 0;
	    _this.lastKnownScrollY = 0;
	    _this.scrollTicking = false;
	    _this.resizeTicking = false;
	    _this.state = {
	      state: 'unfixed',
	      translateY: 0,
	      className: 'headroom headroom--unfixed'
	    };
	    return _this;
	  }
	
	  _createClass(Headroom, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setHeightOffset();
	      if (!this.props.disable) {
	        this.props.parent().addEventListener('scroll', this.handleScroll);
	
	        if (this.props.calcHeightOnResize) {
	          this.props.parent().addEventListener('resize', this.handleResize);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disable && !this.props.disable) {
	        this.unfix();
	        this.props.parent().removeEventListener('scroll', this.handleScroll);
	        this.props.parent().removeEventListener('resize', this.handleResize);
	      } else if (!nextProps.disable && this.props.disable) {
	        this.props.parent().addEventListener('scroll', this.handleScroll);
	
	        if (this.props.calcHeightOnResize) {
	          this.props.parent().addEventListener('resize', this.handleResize);
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      // If children have changed, remeasure height.
	      if (prevProps.children !== this.props.children) {
	        this.setHeightOffset();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.parent().removeEventListener('scroll', this.handleScroll);
	      window.removeEventListener('scroll', this.handleScroll);
	      this.props.parent().removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          userClassName = _props.className,
	          divProps = _objectWithoutProperties(_props, ['className']);
	
	      delete divProps.onUnpin;
	      delete divProps.onPin;
	      delete divProps.onUnfix;
	      delete divProps.disableInlineStyles;
	      delete divProps.disable;
	      delete divProps.parent;
	      delete divProps.children;
	      delete divProps.upTolerance;
	      delete divProps.downTolerance;
	      delete divProps.pinStart;
	      delete divProps.calcHeightOnResize;
	
	      var style = divProps.style,
	          wrapperStyle = divProps.wrapperStyle,
	          rest = _objectWithoutProperties(divProps, ['style', 'wrapperStyle']);
	
	      var innerStyle = {
	        position: this.props.disable || this.state.state === 'unfixed' ? 'relative' : 'fixed',
	        top: 0,
	        left: 0,
	        right: 0,
	        zIndex: 1,
	        WebkitTransform: 'translateY(' + this.state.translateY + ')',
	        MsTransform: 'translateY(' + this.state.translateY + ')',
	        transform: 'translateY(' + this.state.translateY + ')'
	      };
	
	      var className = this.state.className;
	
	      // Don't add css transitions until after we've done the initial
	      // negative transform when transitioning from 'unfixed' to 'unpinned'.
	      // If we don't do this, the header will flash into view temporarily
	      // while it transitions from 0 — -100%.
	      if (this.state.state !== 'unfixed') {
	        innerStyle = _extends({}, innerStyle, {
	          WebkitTransition: 'all .2s ease-in-out',
	          MozTransition: 'all .2s ease-in-out',
	          OTransition: 'all .2s ease-in-out',
	          transition: 'all .2s ease-in-out'
	        });
	        className += ' headroom--scrolled';
	      }
	
	      if (!this.props.disableInlineStyles) {
	        innerStyle = _extends({}, innerStyle, style);
	      } else {
	        innerStyle = style;
	      }
	
	      var wrapperStyles = _extends({}, wrapperStyle, {
	        height: this.state.height ? this.state.height : null
	      });
	
	      var wrapperClassName = userClassName ? userClassName + ' headroom-wrapper' : 'headroom-wrapper';
	
	      return _react2.default.createElement(
	        'div',
	        { style: wrapperStyles, className: wrapperClassName },
	        _react2.default.createElement(
	          'div',
	          _extends({
	            ref: this.setRef
	          }, rest, {
	            style: innerStyle,
	            className: className
	          }),
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Headroom;
	}(_react.Component);
	
	Headroom.propTypes = {
	  className: _propTypes2.default.string,
	  parent: _propTypes2.default.func,
	  children: _propTypes2.default.any.isRequired,
	  disableInlineStyles: _propTypes2.default.bool,
	  disable: _propTypes2.default.bool,
	  upTolerance: _propTypes2.default.number,
	  downTolerance: _propTypes2.default.number,
	  onPin: _propTypes2.default.func,
	  onUnpin: _propTypes2.default.func,
	  onUnfix: _propTypes2.default.func,
	  wrapperStyle: _propTypes2.default.object,
	  pinStart: _propTypes2.default.number,
	  style: _propTypes2.default.object,
	  calcHeightOnResize: _propTypes2.default.bool
	};
	Headroom.defaultProps = {
	  parent: function parent() {
	    return window;
	  },
	  disableInlineStyles: false,
	  disable: false,
	  upTolerance: 5,
	  downTolerance: 0,
	  onPin: noop,
	  onUnpin: noop,
	  onUnfix: noop,
	  wrapperStyle: {},
	  pinStart: 0,
	  calcHeightOnResize: true
	};
	exports.default = Headroom;

/***/ }),

/***/ "./node_modules/react-headroom/dist/shouldUpdate.js":
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var lastKnownScrollY = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
	  var currentScrollY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	  var props = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	  var state = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	
	  var scrollDirection = currentScrollY >= lastKnownScrollY ? 'down' : 'up';
	  var distanceScrolled = Math.abs(currentScrollY - lastKnownScrollY);
	
	  // We're disabled
	  if (props.disable) {
	    return {
	      action: 'none',
	      scrollDirection: scrollDirection,
	      distanceScrolled: distanceScrolled
	    };
	    // We're at the top and not fixed yet.
	  } else if (currentScrollY <= props.pinStart && state.state !== 'unfixed') {
	    return {
	      action: 'unfix',
	      scrollDirection: scrollDirection,
	      distanceScrolled: distanceScrolled
	    };
	    // We're unfixed and headed down. Carry on.
	  } else if (currentScrollY <= state.height && scrollDirection === 'down' && state.state === 'unfixed') {
	    return {
	      action: 'none',
	      scrollDirection: scrollDirection,
	      distanceScrolled: distanceScrolled
	    };
	    // We're past the header and scrolling down.
	    // We transition to "unpinned" if necessary.
	  } else if (scrollDirection === 'down' && ['pinned', 'unfixed'].indexOf(state.state) >= 0 && currentScrollY > state.height + props.pinStart && distanceScrolled > props.downTolerance) {
	    return {
	      action: 'unpin',
	      scrollDirection: scrollDirection,
	      distanceScrolled: distanceScrolled
	    };
	    // We're scrolling up, we transition to "pinned"
	  } else if (scrollDirection === 'up' && distanceScrolled > props.upTolerance && ['pinned', 'unfixed'].indexOf(state.state) < 0) {
	    return {
	      action: 'pin',
	      scrollDirection: scrollDirection,
	      distanceScrolled: distanceScrolled
	    };
	    // We're scrolling up, and inside the header.
	    // We transition to pin regardless of upTolerance
	  } else if (scrollDirection === 'up' && currentScrollY <= state.height && ['pinned', 'unfixed'].indexOf(state.state) < 0) {
	    return {
	      action: 'pin',
	      scrollDirection: scrollDirection,
	      distanceScrolled: distanceScrolled
	    };
	  } else {
	    return {
	      action: 'none',
	      scrollDirection: scrollDirection,
	      distanceScrolled: distanceScrolled
	    };
	  }
	};

/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__("./node_modules/react-side-effect/lib/index.js");
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__("./node_modules/deep-equal/index.js");
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__("./node_modules/react-helmet/lib/HelmetUtils.js");
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	            * @param {Object} bodyAttributes: {"className": "root"}
	            * @param {String} defaultTitle: "Default Title"
	            * @param {Boolean} defer: true
	            * @param {Boolean} encodeSpecialCharacters: true
	            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	            * @param {String} title: "Title"
	            * @param {Object} titleAttributes: {"itemprop": "name"}
	            * @param {String} titleTemplate: "MySite.com - %s"
	            */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__("./node_modules/exenv/index.js");
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),

/***/ "./node_modules/typeface-roboto/index.css":
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/FacebookBadge.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	exports.FacebookBadge = props => React.createElement("div", { dangerouslySetInnerHTML: {
	                __html: '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhallingdata&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
	        } });

/***/ }),

/***/ "./src/components/Footer/FooterAbout.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const Logo_1 = __webpack_require__("./src/components/Logo/index.tsx");
	const footerAbout = ({ classes }) => React.createElement(material_ui_1.Grid, { item: true, xs: 10, md: 3, sm: 5, className: classes.gridItem }, React.createElement(Logo_1.Logo, { className: classes.logo }), React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, color: "inherit", className: classes.vision }, "Hallingdata hjelper bedrifter og organisasjoner med fornuftig bruk av informasjonsteknologi (IT). Vi er IT-eksperter som skj\u00F8nner forretningsdrift. Ta kontakt for \u00E5 finne ut hvordan vi kan hjelpe deg og din organisasjon."), React.createElement(material_ui_1.Typography, { type: "body2", color: "inherit" }, "Bes\u00F8ksadresse:"), React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, color: "inherit" }, "Hallingdal N\u00E6ringshage", React.createElement("br", null), "Gamlevegen 6 ", React.createElement("br", null), "3550 GOL", React.createElement("br", null)));
	const styles = theme => ({
	    logo: {
	        height: 38,
	        marginBottom: 6
	    },
	    vision: {
	        marginBottom: 26
	    },
	    gridItem: {
	        marginBottom: 30
	    }
	});
	exports.FooterAbout = styles_1.withStyles(styles)(footerAbout);

/***/ }),

/***/ "./src/components/Footer/FooterContact.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const footerContact = ({ classes }) => React.createElement(material_ui_1.Grid, { item: true, md: 2, xs: 10, sm: 5, className: classes.gridItem }, React.createElement(material_ui_1.Typography, { type: "title", color: "inherit", gutterBottom: true, style: { paddingTop: "9px" } }, "Skal vi ta en prat?"), React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, color: "inherit" }, "Ring oss for en uforpliktende telefonsamtale."), React.createElement(material_ui_1.Button, { href: "tel:+4732178032", color: "inherit", raised: true, className: classes.contactButton }, React.createElement(material_ui_1.Icon, { color: "inherit", className: classes.icon }, "phone"), "Ring oss"), React.createElement(material_ui_1.Button, { href: "mailto:post@hallingdata.no", color: "inherit", raised: true, className: classes.contactButton }, React.createElement(material_ui_1.Icon, { color: "inherit", className: classes.icon }, "email"), "Send epost"), React.createElement(material_ui_1.Typography, { type: "body1", gutterBottom: true, color: "inherit" }, "TLF: 32 17 80 32", React.createElement("br", null), "E-post: post@hallingdata.no", React.createElement("br", null)));
	const styles = theme => ({
	    icon: {
	        paddingRight: 5
	    },
	    contactButton: {
	        marginBottom: 10,
	        width: "100%"
	    },
	    gridItem: {
	        marginBottom: 30
	    }
	});
	exports.FooterContact = styles_1.withStyles(styles)(footerContact);

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const FacebookBadge_1 = __webpack_require__("./src/components/FacebookBadge.tsx");
	const FooterAbout_1 = __webpack_require__("./src/components/Footer/FooterAbout.tsx");
	const FooterContact_1 = __webpack_require__("./src/components/Footer/FooterContact.tsx");
	const footer = ({ classes }) => {
	    return React.createElement(material_ui_1.Grid, { container: true, direction: "row", className: classes.outer, spacing: 0, justify: "space-around" }, React.createElement(FooterContact_1.FooterContact, null), React.createElement(FooterAbout_1.FooterAbout, null), React.createElement(material_ui_1.Grid, { item: true, md: 3, xs: 10, className: classes.gridItem, style: { overflow: "hidden" } }, React.createElement(FacebookBadge_1.FacebookBadge, null)));
	};
	const styles = theme => ({
	    outer: {
	        backgroundColor: "#363839",
	        color: "#fff",
	        paddingTop: 50,
	        paddingBottom: 100
	    },
	    gridItem: {
	        marginBottom: 30
	    }
	});
	exports.Footer = styles_1.withStyles(styles)(footer);

/***/ }),

/***/ "./src/components/Logo/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/index.js");
	const gatsby_link_1 = __webpack_require__("./node_modules/gatsby-link/index.js");
	const logo = __webpack_require__("./src/components/Logo/logo-white-transparent.png");
	exports.Logo = ({ className }) => React.createElement("img", { src: logo, alt: "Hallingdata logo", className: className, style: { cursor: "pointer" }, onClick: () => gatsby_link_1.navigateTo("/") });

/***/ }),

/***/ "./src/components/Logo/logo-white-transparent.png":
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwEAAAC1AQMAAAA9YmGoAAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+EKCQoyEjUqlUMAAAdcSURBVHja1ZxNjtwoFICNWLBkOzuuMDfgZsGtLHKsWMpFkHIBS7MI0lhmCh4/D+yqwj1+E02ppKS63HwG3v/DPU35xbzfJ9KX8d47SoD04TUTT4F0EsLDi46gE8GSERLAb9SLRLdMqhAWUkkKr5UGwAqAaiN4JXhKhabcCI0IlnijiQwH2miircYbTbPVsiHMpBpNJUy6IazEokQjTA2AQphaUaKIOERL8NTCSiGuqiMsxMJKYftMR1iJhZVAIVhP2IjVgUAhDgRPrXD3K4Q8EBZihbufoA8ES05YiVX6fpXzv4GwERuN25X6qNJ3KzU9QZwQZmKjcbdS0xPUCcH+zwj6txBWYsN3t7QacrtEvg3TdaNx8Q6qaf2732cBmlcXjfs1vt25fXNVAeZTwl/9PqvIYtWYC+/iezu3b1vd2uUlYau34sD2VgOzPd4jBHtqvH/2RkmfE+S/JYQ1kYgg6rJ9jlDdw4+6z4aUEOc1kxA+yhTUrYTqgOY8BeapCCYZDPmaID5NCHZ8gwu2iYYgQPJ5Nn1PCE+sxlOCOtg7nf/7hMDOLd97gqlmxL0kPI27Rgmq2I2bCbsvU9inWwk5ENjSOKq6OESApWsIcCMCLn98HwkyLkAipA3tCKzZ8kJQ0W0UAg8yGxfTwPWPkX+Fb8D4A4EnC5EJDlZfoVAGEcB7Z30ITggu5MmtG3AsAmQSCCr5mkpIs41z+bMlcMi9isYJv+u0bjBMcl0K/IuJo5ikApmwxuF0EtW1JQgYABPAk4CcwB08LtAwJRM52SObQvDwC2GxREcAxccEn9cjDiMSwYB1jgaOZYeZCRZ7ae1aQrrVnjCnUCjdwTalTDYSeHYGhWBqNMZ8R4ClXA6EFEakO9gYmooVPWExNQ2Vg4QlOfn0fSLsmOAQQddAo2hMS7A9wYqWkIBAyCtXCarsAj94IPOGYEYIIA8zaN3WZhZphLUnrBL730KYEWFHBFYi1vwvJripJ3x7/CAYMQUEDoRFIMLjXjEhhanVTTeEoEYOE8K2BkK4oY+wozoS4hInQlBRX4L77zNKWbbpQFjCrmBC0Ks13mMk2GC9+eMjS2Jpg0AKRDAzCqDskRCm2BBsQGqwSR9BBiMhfoyEh2ivEPMeCMVNI4KOFqUhzEBwYYSv4aMIC7cmgoXsAxH2QuC1gKWbhEK2hIjsCElOluLjEGErBF3D+56wYdsaCQZu+msYKBMMIjBEyMNyVL+6leBqfIF93CDh2wvCPGEPB15xOiGAL2sJMhBsS8hG1JbcJxPWqsbujODfEHYgCExQHWHLyURckj9aAh8kKEwwDcHmxAFIzLUEOUgwiMBaP2jTniVRlade9D3BIwJvCYtpSq361Me9JXBMyJa9TgwVTQ5+2owRBCaoljBrnEQc/LS/gaBw3cd0hI/nhBUTJCboljBJtAsi6fVlgsIE0xEEKmnoPhL4egeB1cIS930u+pSQrPcA4ftUUl2Uo2DCcrR8mAB2SYPjX5IAOLB8aQ6PDyW5yfa7EOII54StJThMsIjwpS10rOOEHfsHDWFqJixACEK1f2mro/OBsJ8TFOzge8Lmm4rWNl0grKb66THCWS76lJBU7EhYO4LzTWFxOiWo54QYL6lE8IjATwgKObl2p80JQRRCiDojgUeCA1mSOVNeS9bPcFm9IbAzjeOF4ML3OuarIRXZgKAzwaIiLqoqNBonXxAetneXHjTOQLLDVqAWwlKnYE8J51aDtfmDQunUZmpM//hRHlY1/cT3hKnNgRRKpypBRkKxebh98t56JydwStCYMJdwrekMDBBUkynKF4S41ao0jvky5kWTW8mxSPaiEk1ojtdMtQqSikzzWCSQgqIcT+VYQ6AJJYLpet99tvssmgnXrLWuwVEiXysTIifxqLkheoJ6Soj+pNRmMKFEZDFh0O0UtO/6D2HGv14QWGzyQFT5HQo/sQSxF4JqpsCSREH6m1JY/6PJsraGEIb+CZHxrqGEFXEujMShNIVbTLIEZjb3gWJK7nIfyHFEYElvPyC6f/iMBeyniuFwvGBLUexevNx+bDG7887zDARe08RS2M7tHVbrdCep3Nu+8FJ6Ca86fhsomz2zr+8ItlRyXhFcnIlFLmKc4HBN+Wnn1R26+m6YsBW5GCeYS4SYeVwjCH+NMHBERbfj6Ss99s8Q+KUuvhxqmKvmCn2pBS6HDiM1PQt+7USIuE7QnyGsb6/aD43e0bMObOh+hPeHptDwaYqhq1GHm18+v6RHTmyxY9lt/JTXkImpRk984hzZkFjUCOMTZ07YiHZml6bIzvMZmKikOzGoPSSzdOcqFfnZUPoTtPQE+nPG9GelGfl574n8zPrhrNr9D6Jo8mcHFPnzD5L8GQ5B/hwKJ3+WhpE/D0T/TNN/8FyWJhbWXlwXAoIgf8aPUYtSK0w0j9Ua4ocIW9tnSQiCeKMby0T1VwvIn59GWk30DDjS6oWIwKm3oWoE3Z9dUMSLVJaJ8i9saFJJqmo9TcSTsKSEQznuptc/4pRNsF5PNVsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/NavBar.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const gatsby_link_1 = __webpack_require__("./node_modules/gatsby-link/index.js");
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const ramda_1 = __webpack_require__("./node_modules/ramda/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const react_headroom_1 = __webpack_require__("./node_modules/react-headroom/dist/index.js");
	const Logo_1 = __webpack_require__("./src/components/Logo/index.tsx");
	const NavDrawer_1 = __webpack_require__("./src/components/NavDrawer.tsx");
	const navBar = ({ classes }) => React.createElement("div", null, React.createElement(material_ui_1.Hidden, { mdUp: true }, React.createElement(react_headroom_1.default, null, React.createElement(material_ui_1.AppBar, { position: "static" }, React.createElement(material_ui_1.Toolbar, null, React.createElement(Logo_1.Logo, { className: classes.logo }), React.createElement("span", { style: { flex: 1 } }), React.createElement(NavDrawer_1.NavDrawer, { links: pages }))))), React.createElement(material_ui_1.Hidden, { smDown: true }, React.createElement(material_ui_1.AppBar, { position: "absolute", className: classes.appBarLarge }, React.createElement(material_ui_1.Toolbar, null, React.createElement(Logo_1.Logo, { className: classes.logo }), React.createElement("span", { style: { flex: 1 } }), ramda_1.map(page => {
	    if (page.name == "Kontakt") {
	        return React.createElement(material_ui_1.Button, { className: classes.contactButton, color: "accent", raised: true, key: page.name + "-navBarButton", onClick: () => gatsby_link_1.navigateTo("/" + page.link) }, "Kontakt");
	    } else {
	        return React.createElement(material_ui_1.Button, { className: classes.navButton, key: page.name + "-navBarButton", onClick: () => gatsby_link_1.navigateTo("/" + page.link) }, page.name);
	    }
	}, pages)))));
	const styles = theme => ({
	    navButton: {
	        marginLeft: "0px !important",
	        marginRight: "0px !important",
	        color: "white !important"
	    },
	    logo: {
	        height: 37
	    },
	    contactButton: {
	        marginLeft: 15
	    },
	    appBarLarge: {
	        backgroundColor: "transparent !important",
	        boxShadow: "unset !important"
	    }
	});
	exports.NavBar = styles_1.withStyles(styles)(navBar);
	const pages = [{
	    name: "Hjem",
	    link: ""
	}, {
	    name: "Nettsider",
	    link: "nettsider"
	}, {
	    name: "Apper",
	    link: "apper"
	}, {
	    name: "Systemutvikling",
	    link: "systemutvikling"
	}, {
	    name: "Om oss",
	    link: "om-oss"
	}, {
	    name: "Kontakt",
	    link: "kontakt"
	}];

/***/ }),

/***/ "./src/components/NavDrawer.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const material_ui_1 = __webpack_require__("./node_modules/material-ui/index.js");
	const ramda_1 = __webpack_require__("./node_modules/ramda/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const gatsby_link_1 = __webpack_require__("./node_modules/gatsby-link/index.js");
	class NavDrawer extends React.Component {
	    constructor(props) {
	        super(props);
	        this.openDrawer = open => () => {
	            this.setState({
	                open
	            });
	        };
	        this.state = {
	            open: false,
	            links: props.links
	        };
	    }
	    render() {
	        const linksList = React.createElement(material_ui_1.List, null, ramda_1.map(link => React.createElement(material_ui_1.ListItem, { button: true, key: link.name + "-drawer-link", onClick: () => gatsby_link_1.navigateTo("/" + link.link) }, React.createElement(material_ui_1.ListItemText, { primary: link.name })), this.state.links));
	        return React.createElement("div", null, React.createElement(material_ui_1.IconButton, { color: "contrast", "aria-label": "Menu", onClick: this.openDrawer(true) }, React.createElement(material_ui_1.Icon, null, "menu")), React.createElement(material_ui_1.Drawer, { anchor: "right", open: this.state.open, onRequestClose: this.openDrawer(false) }, React.createElement("div", { tabIndex: 0, role: "button", onClick: this.openDrawer(false), onKeyDown: this.openDrawer(false) }, linksList)));
	    }
	}
	exports.NavDrawer = NavDrawer;

/***/ }),

/***/ "./src/layouts/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__("./node_modules/ionicons/css/ionicons.min.css");
	__webpack_require__("./node_modules/material-design-icons-iconfont/dist/material-design-icons.css");
	__webpack_require__("./node_modules/typeface-roboto/index.css");
	const amber_1 = __webpack_require__("./node_modules/material-ui/colors/amber.js");
	const deepPurple_1 = __webpack_require__("./node_modules/material-ui/colors/deepPurple.js");
	const styles_1 = __webpack_require__("./node_modules/material-ui/styles/index.js");
	const React = __webpack_require__("./node_modules/react/index.js");
	const react_helmet_1 = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
	const Footer_1 = __webpack_require__("./src/components/Footer/index.tsx");
	const NavBar_1 = __webpack_require__("./src/components/NavBar.tsx");
	const TemplateWrapper = ({ children }) => React.createElement(styles_1.MuiThemeProvider, { theme: theme }, React.createElement("div", null, React.createElement(react_helmet_1.Helmet, { title: "Hallingdata", meta: [{ name: "description", content: "Sample" }, { name: "keywords", content: "sample, something" }] }), React.createElement(NavBar_1.NavBar, null), children(), React.createElement(Footer_1.Footer, null)));
	exports.default = TemplateWrapper;
	const theme = styles_1.createMuiTheme({
	    palette: {
	        primary: deepPurple_1.default,
	        secondary: amber_1.default
	    },
	    custom: {
	        pageMaxWith: 1200
	    }
	});

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-tsx-cdb38e62eb39ed528691.js.map