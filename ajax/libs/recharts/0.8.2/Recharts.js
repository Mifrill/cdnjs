(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("ReactDOMServer"), require("ReactTransitionGroup"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "ReactDOMServer", "ReactTransitionGroup", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["Recharts"] = factory(require("react"), require("ReactDOMServer"), require("ReactTransitionGroup"), require("ReactDOM"));
	else
		root["Recharts"] = factory(root["React"], root["ReactDOMServer"], root["ReactTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_114__, __WEBPACK_EXTERNAL_MODULE_214__, __WEBPACK_EXTERNAL_MODULE_237__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Treemap = exports.RadarChart = exports.RadialBarChart = exports.PieChart = exports.RadialBar = exports.Pie = exports.Radar = exports.PolarAngleAxis = exports.PolarRadiusAxis = exports.PolarGrid = exports.ScatterChart = exports.ComposedChart = exports.BarChart = exports.AreaChart = exports.LineChart = exports.Scatter = exports.Bar = exports.Area = exports.Line = exports.ZAxis = exports.YAxis = exports.XAxis = exports.ReferenceDot = exports.ReferenceLine = exports.Brush = exports.CartesianGrid = exports.CartesianAxis = exports.Cross = exports.Dot = exports.Polygon = exports.Triangle = exports.Rectangle = exports.Curve = exports.Sector = exports.ResponsiveContainer = exports.Tooltip = exports.Legend = exports.Surface = undefined;

	__webpack_require__(2);

	__webpack_require__(3);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Legend = __webpack_require__(112);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _ResponsiveContainer = __webpack_require__(119);

	var _ResponsiveContainer2 = _interopRequireDefault(_ResponsiveContainer);

	var _Sector = __webpack_require__(123);

	var _Sector2 = _interopRequireDefault(_Sector);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	var _Rectangle = __webpack_require__(129);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	var _Triangle = __webpack_require__(130);

	var _Triangle2 = _interopRequireDefault(_Triangle);

	var _Polygon = __webpack_require__(131);

	var _Polygon2 = _interopRequireDefault(_Polygon);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _Cross = __webpack_require__(133);

	var _Cross2 = _interopRequireDefault(_Cross);

	var _PolarGrid = __webpack_require__(134);

	var _PolarGrid2 = _interopRequireDefault(_PolarGrid);

	var _PolarRadiusAxis = __webpack_require__(135);

	var _PolarRadiusAxis2 = _interopRequireDefault(_PolarRadiusAxis);

	var _PolarAngleAxis = __webpack_require__(165);

	var _PolarAngleAxis2 = _interopRequireDefault(_PolarAngleAxis);

	var _Pie = __webpack_require__(166);

	var _Pie2 = _interopRequireDefault(_Pie);

	var _Radar = __webpack_require__(216);

	var _Radar2 = _interopRequireDefault(_Radar);

	var _RadialBar = __webpack_require__(217);

	var _RadialBar2 = _interopRequireDefault(_RadialBar);

	var _Brush = __webpack_require__(219);

	var _Brush2 = _interopRequireDefault(_Brush);

	var _ReferenceLine = __webpack_require__(232);

	var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);

	var _ReferenceDot = __webpack_require__(233);

	var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);

	var _CartesianAxis = __webpack_require__(234);

	var _CartesianAxis2 = _interopRequireDefault(_CartesianAxis);

	var _CartesianGrid = __webpack_require__(235);

	var _CartesianGrid2 = _interopRequireDefault(_CartesianGrid);

	var _Line = __webpack_require__(236);

	var _Line2 = _interopRequireDefault(_Line);

	var _Area = __webpack_require__(238);

	var _Area2 = _interopRequireDefault(_Area);

	var _Bar = __webpack_require__(239);

	var _Bar2 = _interopRequireDefault(_Bar);

	var _Scatter = __webpack_require__(240);

	var _Scatter2 = _interopRequireDefault(_Scatter);

	var _XAxis = __webpack_require__(241);

	var _XAxis2 = _interopRequireDefault(_XAxis);

	var _YAxis = __webpack_require__(242);

	var _YAxis2 = _interopRequireDefault(_YAxis);

	var _ZAxis = __webpack_require__(243);

	var _ZAxis2 = _interopRequireDefault(_ZAxis);

	var _LineChart = __webpack_require__(244);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _BarChart = __webpack_require__(252);

	var _BarChart2 = _interopRequireDefault(_BarChart);

	var _PieChart = __webpack_require__(253);

	var _PieChart2 = _interopRequireDefault(_PieChart);

	var _Treemap = __webpack_require__(254);

	var _Treemap2 = _interopRequireDefault(_Treemap);

	var _RadarChart = __webpack_require__(255);

	var _RadarChart2 = _interopRequireDefault(_RadarChart);

	var _ScatterChart = __webpack_require__(256);

	var _ScatterChart2 = _interopRequireDefault(_ScatterChart);

	var _AreaChart = __webpack_require__(257);

	var _AreaChart2 = _interopRequireDefault(_AreaChart);

	var _RadialBarChart = __webpack_require__(258);

	var _RadialBarChart2 = _interopRequireDefault(_RadialBarChart);

	var _ComposedChart = __webpack_require__(259);

	var _ComposedChart2 = _interopRequireDefault(_ComposedChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.
	// container
	Surface = _Surface2.default;
	exports.
	// componnet
	Legend = _Legend2.default;
	exports.Tooltip = _Tooltip2.default;
	exports.ResponsiveContainer = _ResponsiveContainer2.default;
	exports.
	// shape
	Sector = _Sector2.default;
	exports.Curve = _Curve2.default;
	exports.Rectangle = _Rectangle2.default;
	exports.Triangle = _Triangle2.default;
	exports.Polygon = _Polygon2.default;
	exports.Dot = _Dot2.default;
	exports.Cross = _Cross2.default;
	exports.

	// components in cartesian system charts
	CartesianAxis = _CartesianAxis2.default;
	exports.CartesianGrid = _CartesianGrid2.default;
	exports.Brush = _Brush2.default;
	exports.ReferenceLine = _ReferenceLine2.default;
	exports.ReferenceDot = _ReferenceDot2.default;
	exports.XAxis = _XAxis2.default;
	exports.YAxis = _YAxis2.default;
	exports.ZAxis = _ZAxis2.default;
	exports.Line = _Line2.default;
	exports.Area = _Area2.default;
	exports.Bar = _Bar2.default;
	exports.Scatter = _Scatter2.default;
	exports.
	// cartesian system charts
	LineChart = _LineChart2.default;
	exports.AreaChart = _AreaChart2.default;
	exports.BarChart = _BarChart2.default;
	exports.ComposedChart = _ComposedChart2.default;
	exports.ScatterChart = _ScatterChart2.default;
	exports.

	// components in polar system charts
	PolarGrid = _PolarGrid2.default;
	exports.PolarRadiusAxis = _PolarRadiusAxis2.default;
	exports.PolarAngleAxis = _PolarAngleAxis2.default;
	exports.Radar = _Radar2.default;
	exports.Pie = _Pie2.default;
	exports.RadialBar = _RadialBar2.default;
	exports.
	// polar system charts
	PieChart = _PieChart2.default;
	exports.RadialBarChart = _RadialBarChart2.default;
	exports.RadarChart = _RadarChart2.default;
	exports.Treemap = _Treemap2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
		var testObject = {};

		if (!(Object.setPrototypeOf || testObject.__proto__)) {
			var nativeGetPrototypeOf = Object.getPrototypeOf;

			Object.getPrototypeOf = function(object) {
				if (object.__proto__) {
					return object.__proto__;
				} else {
					return nativeGetPrototypeOf.call(Object, object);
				}
			}
		}
	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	module.exports = __webpack_require__(7).Math;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(23)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.1.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(9)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(13) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(12)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(13) && !__webpack_require__(14)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(11);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , has       = __webpack_require__(19)
	  , SRC       = __webpack_require__(20)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(27);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {expm1: __webpack_require__(31)});

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(27)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(14)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {log1p: __webpack_require__(23)});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {sign: __webpack_require__(27)});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(31)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(14)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(31)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Surface
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Surface = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Surface, _Component);

	  function Surface() {
	    _classCallCheck(this, Surface);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Surface).apply(this, arguments));
	  }

	  _createClass(Surface, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var width = _props.width;
	      var height = _props.height;
	      var viewBox = _props.viewBox;
	      var className = _props.className;
	      var style = _props.style;

	      var svgView = viewBox || { width: width, height: height, x: 0, y: 0 };
	      var layerClass = (0, _classnames2.default)('recharts-surface', className);

	      return _react2.default.createElement(
	        'svg',
	        {
	          className: layerClass,
	          width: width,
	          height: height,
	          style: style,
	          viewBox: svgView.x + ' ' + svgView.y + ' ' + svgView.width + ' ' + svgView.height,
	          xmlns: 'http://www.w3.org/2000/svg', version: '1.1'
	        },
	        children
	      );
	    }
	  }]);

	  return Surface;
	}(_react.Component), _class2.displayName = 'Surface', _class2.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  viewBox: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number
	  }),
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
	}, _temp)) || _class;

	exports.default = Surface;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isEqual = __webpack_require__(45);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _isPlainObject = __webpack_require__(110);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _isArray = __webpack_require__(102);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    // special diff with Array or Object
	    if (((0, _isArray2.default)(objA[keysA[i]]) || (0, _isPlainObject2.default)(objA[keysA[i]])) && (0, _isEqual2.default)(objA[keysA[i]], objB[keysA[i]])) {
	      continue;
	    }

	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	function shouldComponentUpdate(nextProps, nextState) {
	  return shallowCompare(this, nextProps, nextState);
	}

	function pureRenderDecorator(component) {
	  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
	}

	exports.default = pureRenderDecorator;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(46);

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	module.exports = isEqual;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(47),
	    isObject = __webpack_require__(66),
	    isObjectLike = __webpack_require__(68);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(48),
	    equalArrays = __webpack_require__(83),
	    equalByTag = __webpack_require__(85),
	    equalObjects = __webpack_require__(90),
	    getTag = __webpack_require__(106),
	    isArray = __webpack_require__(102),
	    isHostObject = __webpack_require__(67),
	    isTypedArray = __webpack_require__(109);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag, equalFunc, customizer, bitmask);
	  }
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	  if (!isPartial) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(49),
	    stackDelete = __webpack_require__(50),
	    stackGet = __webpack_require__(54),
	    stackHas = __webpack_require__(56),
	    stackSet = __webpack_require__(58);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add functions to the `Stack` cache.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}

	module.exports = stackClear;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(51);

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}

	module.exports = assocDelete;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(53);

	/**
	 * Gets the index at which the first occurrence of `key` is found in `array`
	 * of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(55);

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocGet(array, key) : data.map.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}

	module.exports = assocGet;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(57);

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocHas(array, key) : data.map.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}

	module.exports = assocHas;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(59),
	    assocSet = __webpack_require__(81);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache object.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;

	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(60),
	    mapDelete = __webpack_require__(73),
	    mapGet = __webpack_require__(77),
	    mapHas = __webpack_require__(79),
	    mapSet = __webpack_require__(80);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add functions to the `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;

	module.exports = MapCache;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(61),
	    Map = __webpack_require__(69);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}

	module.exports = mapClear;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(62);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Creates an hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}

	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

	module.exports = Hash;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(63);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(64);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(65),
	    isHostObject = __webpack_require__(67),
	    isObjectLike = __webpack_require__(68);

	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(funcToString.call(value));
	  }
	  return isObjectLike(value) &&
	    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}

	module.exports = isNative;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(66);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(63),
	    root = __webpack_require__(70);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(72);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)(module), (function() { return this; }())))

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(69),
	    assocDelete = __webpack_require__(51),
	    hashDelete = __webpack_require__(74),
	    isKeyable = __webpack_require__(76);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}

	module.exports = mapDelete;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(75);

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}

	module.exports = hashDelete;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(62);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}

	module.exports = hashHas;


/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}

	module.exports = isKeyable;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(69),
	    assocGet = __webpack_require__(55),
	    hashGet = __webpack_require__(78),
	    isKeyable = __webpack_require__(76);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}

	module.exports = mapGet;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(62);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(69),
	    assocHas = __webpack_require__(57),
	    hashHas = __webpack_require__(75),
	    isKeyable = __webpack_require__(76);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}

	module.exports = mapHas;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(69),
	    assocSet = __webpack_require__(81),
	    hashSet = __webpack_require__(82),
	    isKeyable = __webpack_require__(76);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache object.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}

	module.exports = mapSet;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}

	module.exports = assocSet;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(62);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}

	module.exports = hashSet;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(84);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var index = -1,
	      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isUnordered) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(86),
	    Uint8Array = __webpack_require__(87),
	    mapToArray = __webpack_require__(88),
	    setToArray = __webpack_require__(89);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = Symbol ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
	  switch (tag) {
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      // Recursively compare objects (susceptible to call stack limits).
	      return (isPartial || object.size == other.size) &&
	        equalFunc(convert(object), convert(other), customizer, bitmask | UNORDERED_COMPARE_FLAG);

	    case symbolTag:
	      return !!Symbol && (symbolValueOf.call(object) == symbolValueOf.call(other));
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(70);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(70);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(91),
	    keys = __webpack_require__(92);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(91),
	    baseKeys = __webpack_require__(93),
	    indexKeys = __webpack_require__(94),
	    isArrayLike = __webpack_require__(98),
	    isIndex = __webpack_require__(104),
	    isPrototype = __webpack_require__(105);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(95),
	    isArguments = __webpack_require__(96),
	    isArray = __webpack_require__(102),
	    isLength = __webpack_require__(101),
	    isString = __webpack_require__(103);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(97);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(98),
	    isObjectLike = __webpack_require__(68);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(99),
	    isFunction = __webpack_require__(65),
	    isLength = __webpack_require__(101);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(100);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(102),
	    isObjectLike = __webpack_require__(68);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 104 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(69),
	    Set = __webpack_require__(107),
	    WeakMap = __webpack_require__(108);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var mapCtorString = Map ? funcToString.call(Map) : '',
	    setCtorString = Set ? funcToString.call(Set) : '',
	    weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for IE 11 providing `toStringTag` values for maps, sets, and weakmaps.
	if ((Map && getTag(new Map) != mapTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : null,
	        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case mapCtorString: return mapTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(63),
	    root = __webpack_require__(70);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(63),
	    root = __webpack_require__(70);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(101),
	    isObjectLike = __webpack_require__(68);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(67),
	    isObjectLike = __webpack_require__(68);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = objectProto;
	  if (typeof value.constructor == 'function') {
	    proto = getPrototypeOf(value);
	  }
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Legend
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _server = __webpack_require__(114);

	var _server2 = _interopRequireDefault(_server);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _DefaultLegendContent = __webpack_require__(115);

	var _DefaultLegendContent2 = _interopRequireDefault(_DefaultLegendContent);

	var _DOMUtils = __webpack_require__(116);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SIZE = 32;

	var Legend = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Legend, _Component);

	  function Legend() {
	    _classCallCheck(this, Legend);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Legend).apply(this, arguments));
	  }

	  _createClass(Legend, [{
	    key: 'getDefaultPosition',
	    value: function getDefaultPosition(style) {
	      var _props = this.props;
	      var layout = _props.layout;
	      var align = _props.align;
	      var verticalAlign = _props.verticalAlign;
	      var margin = _props.margin;
	      var chartWidth = _props.chartWidth;
	      var chartHeight = _props.chartHeight;

	      var hPos = undefined;
	      var vPos = undefined;

	      if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
	        if (align === 'center' && layout === 'vertical') {
	          var box = Legend.getLegendBBox(this.props) || { width: 0 };
	          hPos = { left: ((chartWidth || 0) - box.width) / 2 };
	        } else {
	          hPos = align === 'right' ? { right: margin && margin.right || 0 } : { left: margin && margin.left || 0 };
	        }
	      }

	      if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
	        if (verticalAlign === 'middle') {
	          var box = Legend.getLegendBBox(this.props) || { height: 0 };
	          vPos = { top: ((chartHeight || 0) - box.height) / 2 };
	        } else {
	          vPos = verticalAlign === 'bottom' ? { bottom: margin && margin.bottom || 0 } : { top: margin && margin.top || 0 };
	        }
	      }

	      return _extends({}, hPos, vPos);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var content = _props2.content;
	      var width = _props2.width;
	      var height = _props2.height;
	      var layout = _props2.layout;
	      var wrapperStyle = _props2.wrapperStyle;

	      var outerStyle = _extends({
	        position: 'absolute',
	        width: width || 'auto',
	        height: height || 'auto'
	      }, this.getDefaultPosition(wrapperStyle), wrapperStyle);

	      return _react2.default.createElement(
	        'div',
	        { className: 'recharts-legend-wrapper', style: outerStyle },
	        _react2.default.isValidElement(content) ? _react2.default.cloneElement(content, this.props) : _react2.default.createElement(_DefaultLegendContent2.default, this.props)
	      );
	    }
	  }], [{
	    key: 'getWithHeight',
	    value: function getWithHeight(item, chartWidth, chartHeight) {
	      var layout = item.props.layout;


	      if (layout === 'vertical' && (0, _isNumber2.default)(item.props.height)) {
	        return {
	          height: item.props.height
	        };
	      } else if (layout === 'horizontal') {
	        return {
	          width: item.props.width || chartWidth
	        };
	      }

	      return null;
	    }
	  }, {
	    key: 'getLegendBBox',
	    value: function getLegendBBox(props) {
	      if (typeof document !== 'undefined') {
	        var content = props.content;
	        var width = props.width;
	        var height = props.height;
	        var wrapperStyle = props.wrapperStyle;

	        var contentHtml = _server2.default.renderToStaticMarkup(_react2.default.isValidElement(content) ? _react2.default.cloneElement(content, props) : _react2.default.createElement(_DefaultLegendContent2.default, props));
	        var style = _extends({
	          position: 'absolute',
	          width: width || 'auto',
	          height: height || 'auto'
	        }, wrapperStyle, {
	          top: -20000,
	          left: 0,
	          display: 'block'
	        });
	        var wrapper = document.createElement('div');

	        wrapper.setAttribute('style', (0, _DOMUtils.getStyleString)(style));
	        wrapper.innerHTML = contentHtml;
	        document.body.appendChild(wrapper);
	        var box = wrapper.getBoundingClientRect();

	        document.body.removeChild(wrapper);

	        return box;
	      }

	      return null;
	    }
	  }]);

	  return Legend;
	}(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
	  content: _react.PropTypes.element,
	  wrapperStyle: _react.PropTypes.object,
	  chartWidth: _react.PropTypes.number,
	  chartHeight: _react.PropTypes.number,
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  iconSize: _react.PropTypes.number,
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  align: _react.PropTypes.oneOf(['center', 'left', 'right']),
	  verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    left: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    right: _react.PropTypes.number
	  }),
	  payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.any,
	    id: _react.PropTypes.any,
	    type: _react.PropTypes.oneOf(['line', 'scatter', 'square', 'rect'])
	  }))
	}, _class2.defaultProps = {
	  iconSize: 14,
	  layout: 'horizontal',
	  align: 'center',
	  verticalAlign: 'bottom',
	  payload: []
	}, _temp)) || _class;

	exports.default = Legend;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(68);

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	 * as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString.call(value) == numberTag);
	}

	module.exports = isNumber;


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_114__;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Default Legend Content
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SIZE = 32;

	var DefaultLegendContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(DefaultLegendContent, _Component);

	  function DefaultLegendContent() {
	    _classCallCheck(this, DefaultLegendContent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultLegendContent).apply(this, arguments));
	  }

	  _createClass(DefaultLegendContent, [{
	    key: 'renderIcon',


	    /**
	     * Render the path of icon
	     * @param {Object} data Data of each legend item
	     * @return {String} Path element
	     */
	    value: function renderIcon(data) {
	      var halfSize = SIZE / 2;
	      var sixthSize = SIZE / 6;
	      var thirdSize = SIZE / 3;
	      var path = undefined;
	      var fill = data.color;
	      var stroke = data.color;

	      switch (data.type) {
	        case 'line':
	          fill = 'none';
	          path = 'M0,' + halfSize + 'h' + thirdSize + 'A' + sixthSize + ',' + sixthSize + ',' + ('0,1,1,' + 2 * thirdSize + ',' + halfSize) + ('H' + SIZE + 'M' + 2 * thirdSize + ',' + halfSize) + ('A' + sixthSize + ',' + sixthSize + ',0,1,1,' + thirdSize + ',' + halfSize);
	          break;
	        case 'scatter':
	          stroke = 'none';
	          path = 'M' + halfSize + ',0A' + halfSize + ',' + halfSize + ',0,1,1,' + halfSize + ',' + SIZE + ('A' + halfSize + ',' + halfSize + ',0,1,1,' + halfSize + ',0Z');
	          break;
	        case 'rect':
	          stroke = 'none';
	          path = 'M0,' + SIZE / 8 + 'h' + SIZE + 'v' + SIZE * 3 / 4 + 'h' + -SIZE + 'z';
	          break;
	        default:
	          stroke = 'none';
	          path = 'M0,0h' + SIZE + 'v' + SIZE + 'h' + -SIZE + 'z';
	          break;
	      }

	      return _react2.default.createElement('path', {
	        strokeWidth: 4,
	        fill: fill,
	        stroke: stroke,
	        d: path,
	        className: 'recharts-legend-icon'
	      });
	    }

	    /**
	     * Draw items of legend
	     * @return {ReactElement} Items
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems() {
	      var _this2 = this;

	      var _props = this.props;
	      var payload = _props.payload;
	      var iconSize = _props.iconSize;
	      var layout = _props.layout;

	      var viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
	      var itemStyle = {
	        display: layout === 'horizontal' ? 'inline-block' : 'block',
	        marginRight: 10
	      };
	      var svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };

	      return payload.map(function (entry, i) {
	        return _react2.default.createElement(
	          'li',
	          {
	            className: 'recharts-legend-item legend-item-' + i,
	            style: itemStyle,
	            key: 'legend-item-' + i
	          },
	          _react2.default.createElement(
	            _Surface2.default,
	            { width: iconSize, height: iconSize, viewBox: viewBox, style: svgStyle },
	            _this2.renderIcon(entry)
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'recharts-legend-item-text' },
	            entry.value
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var payload = _props2.payload;
	      var layout = _props2.layout;
	      var align = _props2.align;


	      if (!payload || !payload.length) {
	        return null;
	      }

	      var finalStyle = {
	        padding: 0,
	        margin: 0,
	        textAlign: layout === 'horizontal' ? align : 'left'
	      };

	      return _react2.default.createElement(
	        'ul',
	        { className: 'recharts-default-legend', style: finalStyle },
	        this.renderItems()
	      );
	    }
	  }]);

	  return DefaultLegendContent;
	}(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
	  content: _react.PropTypes.element,
	  iconSize: _react.PropTypes.number,
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  align: _react.PropTypes.oneOf(['center', 'left', 'right']),
	  verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
	  payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.any,
	    id: _react.PropTypes.any,
	    type: _react.PropTypes.oneOf(['line', 'scatter', 'square', 'rect'])
	  }))
	}, _class2.defaultProps = {
	  iconSize: 14,
	  layout: 'horizontal',
	  align: 'center',
	  verticalAlign: 'middle',
	  payload: []
	}, _temp)) || _class;

	exports.default = DefaultLegendContent;

/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var stringCache = {
	  widthCache: {},
	  cacheCount: 0
	};
	var MAX_CACHE_NUM = 2000;
	var SPAN_STYLE = {
	  position: 'absolute',
	  top: '-20000px',
	  left: 0,
	  padding: 0,
	  margin: 0,
	  border: 'none',
	  whiteSpace: 'pre'
	};
	var STYLE_LIST = ['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height', 'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];

	var autoCompleteStyle = function autoCompleteStyle(name, value) {
	  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
	    return value + 'px';
	  }

	  return value;
	};
	var camelToMiddleLine = function camelToMiddleLine(text) {
	  var strs = text.split('');

	  var formatStrs = strs.reduce(function (result, entry) {
	    if (entry === entry.toUpperCase()) {
	      return [].concat(_toConsumableArray(result), ['-', entry.toLowerCase()]);
	    }

	    return [].concat(_toConsumableArray(result), [entry]);
	  }, []);

	  return formatStrs.join('');
	};

	var getStyleString = exports.getStyleString = function getStyleString(style) {
	  var result = '';

	  for (var s in style) {
	    if (style.hasOwnProperty(s)) {
	      result += camelToMiddleLine(s) + ':' + autoCompleteStyle(s, style[s]) + ';';
	    }
	  }
	  return result;
	};

	var getStringSize = exports.getStringSize = function getStringSize(text) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (text === undefined || text === null || typeof document === 'undefined') {
	    return 0;
	  }

	  var str = '' + text;
	  var styleString = getStyleString(style);
	  var cacheKey = str + '-' + styleString;

	  if (stringCache.widthCache[cacheKey]) {
	    return stringCache.widthCache[cacheKey];
	  }

	  if (!stringCache.span) {
	    var span = document.createElement('span');
	    span.setAttribute('style', getStyleString(SPAN_STYLE));
	    document.body.appendChild(span);

	    stringCache.span = span;
	  }

	  stringCache.span.setAttribute('style', getStyleString(_extends({}, SPAN_STYLE, style)));
	  stringCache.span.textContent = str;

	  var rect = stringCache.span.getBoundingClientRect();
	  var result = { width: rect.width, height: rect.height };

	  stringCache.widthCache[cacheKey] = result;

	  if (++stringCache.cacheCount > MAX_CACHE_NUM) {
	    stringCache.cacheCount = 0;
	    stringCache.widthCache = {};
	  }

	  return result;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Tooltip
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _server = __webpack_require__(114);

	var _server2 = _interopRequireDefault(_server);

	var _DefaultTooltipContent = __webpack_require__(118);

	var _DefaultTooltipContent2 = _interopRequireDefault(_DefaultTooltipContent);

	var _DOMUtils = __webpack_require__(116);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tooltip = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Tooltip, _Component);

	  function Tooltip() {
	    _classCallCheck(this, Tooltip);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).apply(this, arguments));
	  }

	  _createClass(Tooltip, [{
	    key: 'getTooltipBBox',
	    value: function getTooltipBBox(wrapperStyle) {
	      if (typeof document !== 'undefined') {
	        var content = this.props.content;

	        var contentHtml = _server2.default.renderToStaticMarkup(_react2.default.isValidElement(content) ? _react2.default.cloneElement(content, this.props) : _react2.default.createElement(_DefaultTooltipContent2.default, this.props));
	        var style = _extends({}, wrapperStyle, { top: -20000, left: 0, display: 'block' });

	        var wrapper = document.createElement('div');

	        wrapper.setAttribute('style', (0, _DOMUtils.getStyleString)(style));
	        wrapper.innerHTML = contentHtml;
	        document.body.appendChild(wrapper);
	        var box = wrapper.getBoundingClientRect();

	        document.body.removeChild(wrapper);

	        return box;
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var payload = this.props.payload;

	      if (!payload || !payload.length) {
	        return null;
	      }

	      var _props = this.props;
	      var content = _props.content;
	      var viewBox = _props.viewBox;
	      var coordinate = _props.coordinate;
	      var active = _props.active;
	      var offset = _props.offset;


	      var outerStyle = {
	        pointerEvents: 'none',
	        display: active ? 'block' : 'none',
	        position: 'absolute'
	      };
	      var box = this.getTooltipBBox(outerStyle);

	      if (!box) {
	        return null;
	      }

	      outerStyle.left = Math.max(coordinate.x + box.width + offset > viewBox.x + viewBox.width ? coordinate.x - box.width - offset : coordinate.x + offset, viewBox.x);
	      outerStyle.top = Math.max(coordinate.y + box.height + offset > viewBox.y + viewBox.height ? coordinate.y - box.height - offset : coordinate.y + offset, viewBox.x);

	      return _react2.default.createElement(
	        'div',
	        { className: 'recharts-tooltip-wrapper', style: outerStyle },
	        _react2.default.isValidElement(content) ? _react2.default.cloneElement(content, this.props) : _react2.default.createElement(_DefaultTooltipContent2.default, this.props)
	      );
	    }
	  }]);

	  return Tooltip;
	}(_react.Component), _class2.displayName = 'Tooltip', _class2.propTypes = {
	  content: _react.PropTypes.element,
	  viewBox: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number
	  }),

	  active: _react.PropTypes.bool,
	  separator: _react.PropTypes.string,
	  formatter: _react.PropTypes.func,
	  offset: _react.PropTypes.number,

	  itemStyle: _react.PropTypes.object,
	  labelStyle: _react.PropTypes.object,
	  wrapperStyle: _react.PropTypes.object,
	  cursor: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.element, _react.PropTypes.object]),

	  coordinate: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  }),

	  label: _react.PropTypes.any,
	  payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    name: _react.PropTypes.any,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    unit: _react.PropTypes.any
	  }))
	}, _class2.defaultProps = {
	  active: false,
	  offset: 10,
	  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
	  coordinate: { x: 0, y: 0 },
	  cursorStyle: {},
	  separator: ' : ',
	  wrapperStyle: {},
	  itemStyle: {},
	  labelStyle: {},
	  cursor: true
	}, _temp)) || _class;

	exports.default = Tooltip;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Default Tooltip Content
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultTooltipContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(DefaultTooltipContent, _Component);

	  function DefaultTooltipContent() {
	    _classCallCheck(this, DefaultTooltipContent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultTooltipContent).apply(this, arguments));
	  }

	  _createClass(DefaultTooltipContent, [{
	    key: 'renderContent',
	    value: function renderContent() {
	      var _props = this.props;
	      var payload = _props.payload;
	      var separator = _props.separator;
	      var formatter = _props.formatter;
	      var itemStyle = _props.itemStyle;


	      if (payload && payload.length) {
	        var listStyle = { padding: 0, margin: 0 };
	        var items = payload.map(function (entry, i) {
	          var finalItemStyle = _extends({
	            display: 'block',
	            paddingTop: 4,
	            paddingBottom: 4,
	            color: entry.color || '#000'
	          }, itemStyle);
	          var finalFormatter = entry.formatter || formatter;

	          return _react2.default.createElement(
	            'li',
	            { className: 'recharts-tooltip-item', key: 'tooltip-item-' + i, style: finalItemStyle },
	            _react2.default.createElement(
	              'span',
	              { className: 'recharts-tooltip-item-name' },
	              entry.name
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'recharts-tooltip-item-separator' },
	              separator
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'recharts-tooltip-item-value' },
	              finalFormatter ? finalFormatter(entry.value, entry.name) : entry.value
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'recharts-tooltip-item-unit' },
	              entry.unit || ''
	            )
	          );
	        });

	        return _react2.default.createElement(
	          'ul',
	          { className: 'recharts-tooltip-item-list', style: listStyle },
	          items
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var labelStyle = _props2.labelStyle;
	      var label = _props2.label;
	      var wrapperStyle = _props2.wrapperStyle;

	      var finalStyle = _extends({
	        margin: 0,
	        padding: 10,
	        backgroundColor: '#fff',
	        border: '1px solid #ccc',
	        whiteSpace: 'nowrap'
	      }, wrapperStyle);
	      var finalLabelStyle = _extends({
	        margin: 0
	      }, labelStyle);

	      return _react2.default.createElement(
	        'div',
	        { className: 'recharts-default-tooltip', style: finalStyle },
	        _react2.default.createElement(
	          'p',
	          { className: 'recharts-tooltip-label', style: finalLabelStyle },
	          label || ''
	        ),
	        this.renderContent()
	      );
	    }
	  }]);

	  return DefaultTooltipContent;
	}(_react.Component), _class2.displayName = 'DefaultTooltipContent', _class2.propTypes = {
	  separator: _react.PropTypes.string,
	  formatter: _react.PropTypes.func,
	  wrapperStyle: _react.PropTypes.object,
	  itemStyle: _react.PropTypes.object,
	  labelStyle: _react.PropTypes.object,
	  label: _react.PropTypes.any,
	  payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    name: _react.PropTypes.any,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    unit: _react.PropTypes.any
	  }))
	}, _class2.defaultProps = {
	  separator: ' : ',
	  itemStyle: {},
	  labelStyle: {}
	}, _temp)) || _class;

	exports.default = DefaultTooltipContent;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _DataUtils = __webpack_require__(120);

	var _ouiDomUtils = __webpack_require__(121);

	var _ouiDomUtils2 = _interopRequireDefault(_ouiDomUtils);

	var _invariant = __webpack_require__(122);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResponsiveContainer = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(ResponsiveContainer, _Component);

	  function ResponsiveContainer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ResponsiveContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ResponsiveContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hasInitialized: false
	    }, _this.updateSizeOfWrapper = function () {
	      var container = _this.refs.container;
	      var clientWidth = _ouiDomUtils2.default.width(container);
	      var clientHeight = _ouiDomUtils2.default.height(container);
	      var _this$props = _this.props;
	      var width = _this$props.width;
	      var height = _this$props.height;


	      _this.setState({
	        hasInitialized: true,
	        width: (0, _DataUtils.getPercentValue)(width, clientWidth),
	        height: (0, _DataUtils.getPercentValue)(height, clientHeight)
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ResponsiveContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateSizeOfWrapper();
	      window.addEventListener('resize', this.updateSizeOfWrapper);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.updateSizeOfWrapper);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var hasInitialized = _state.hasInitialized;
	      var width = _state.width;
	      var height = _state.height;
	      var children = this.props.children;

	      var style = {
	        width: '100%',
	        height: '100%'
	      };

	      if (hasInitialized) {
	        (0, _invariant2.default)(width > 0 && height > 0, 'The width(%s) and height(%s) of chart should be greater than 0, ' + 'please check the style of container, or the props width(%s) and height(%s).', width, height, this.props.width, this.props.height);
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'recharts-responsive-container', style: style, ref: 'container' },
	        hasInitialized && width > 0 && height > 0 ? _react2.default.cloneElement(children, { width: width, height: height }) : null
	      );
	    }
	  }]);

	  return ResponsiveContainer;
	}(_react.Component), _class2.displayName = 'ResponsiveContainer', _class2.propTypes = {
	  width: _react.PropTypes.string,
	  height: _react.PropTypes.string,
	  children: _react.PropTypes.node
	}, _class2.defaultProps = {
	  width: '100%',
	  height: '100%'
	}, _temp2)) || _class;

	exports.default = ResponsiveContainer;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateCoordinateInRange = exports.parseSpecifiedDomain = exports.getPercentValue = undefined;

	var _isArray = __webpack_require__(102);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isString = __webpack_require__(103);

	var _isString2 = _interopRequireDefault(_isString);

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get percent value of a total value
	 * @param {Number|String} percent A percent
	 * @param {Number} totalValue     Total value
	 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
	 * @return {Number} value
	 */
	var getPercentValue = exports.getPercentValue = function getPercentValue(percent, totalValue) {
	  var defaultValue = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	  var validate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	  if (!(0, _isNumber2.default)(percent) && !(0, _isString2.default)(percent)) {
	    return defaultValue;
	  }

	  var str = percent.toString();
	  var index = str.indexOf('%');
	  var value = undefined;

	  if (index > 0) {
	    value = totalValue * parseFloat(str.slice(0, index)) / 100;
	  } else if (percent === +percent) {
	    value = percent;
	  }

	  if (isNaN(value)) {
	    value = defaultValue;
	  }

	  if (validate && value > totalValue) {
	    value = totalValue;
	  }

	  return value;
	};

	var parseSpecifiedDomain = exports.parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain) {
	  if (!(0, _isArray2.default)(specifiedDomain)) {
	    return dataDomain;
	  }

	  var domain = [];

	  if (!(0, _isNumber2.default)(specifiedDomain[0]) || specifiedDomain[0] > dataDomain[0]) {
	    domain[0] = dataDomain[0];
	  } else {
	    domain[0] = specifiedDomain[0];
	  }

	  if (!(0, _isNumber2.default)(specifiedDomain[1]) || specifiedDomain[1] < dataDomain[1]) {
	    domain[1] = dataDomain[1];
	  } else {
	    domain[1] = specifiedDomain[1];
	  }

	  return domain;
	};

	var validateCoordinateInRange = exports.validateCoordinateInRange = function validateCoordinateInRange(coordinate, scale) {
	  if (!scale) {
	    return false;
	  }

	  var range = scale.range();
	  var first = range[0];
	  var last = range[range.length - 1];
	  var isValidate = first <= last ? coordinate >= first && coordinate <= last : coordinate >= last && coordinate <= first;

	  return isValidate;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint no-unused-expressions: 0 */
	var reUnit = /width|height|top|left|right|bottom|margin|padding/i;
	var _amId = 1;
	var _amDisplay = {};

	var requestAnimationFrame = undefined;
	if (typeof window !== 'undefined') {
	  requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	  };
	} else {
	  requestAnimationFrame = function () {
	    throw new Error('requestAnimationFrame is not supported, maybe you are running in the server side');
	  };
	}

	function getAmId(obj) {
	  return obj._amId || (obj._amId = _amId++);
	}

	function setAmDisplay(elem, display) {
	  var id = getAmId(elem);
	  _amDisplay['_am_' + id] = display;
	}

	function getAmDisplay(elem) {
	  var id = getAmId(elem);
	  return _amDisplay['_am_' + id];
	}

	exports.default = {
	  // el can be an Element, NodeList or selector

	  addClass: function addClass(el, className) {
	    var _this = this;

	    if (typeof el === 'string') el = document.querySelectorAll(el);
	    var els = el instanceof NodeList ? [].slice.call(el) : [el];

	    els.forEach(function (e) {
	      if (_this.hasClass(e, className)) {
	        return;
	      }

	      if (e.classList) {
	        e.classList.add(className);
	      } else {
	        e.className += ' ' + className;
	      }
	    });
	  },

	  // el can be an Element, NodeList or selector
	  removeClass: function removeClass(el, className) {
	    var _this2 = this;

	    if (typeof el === 'string') el = document.querySelectorAll(el);
	    var els = el instanceof NodeList ? [].slice.call(el) : [el];

	    els.forEach(function (e) {
	      if (_this2.hasClass(e, className)) {
	        if (e.classList) {
	          e.classList.remove(className);
	        } else {
	          e.className = e.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	        }
	      }
	    });
	  },

	  // el can be an Element or selector
	  hasClass: function hasClass(el, className) {
	    if (typeof el === 'string') el = document.querySelector(el);
	    if (el.classList) {
	      return el.classList.contains(className);
	    }
	    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  },

	  // el can be an Element or selector
	  toggleClass: function toggleClass(el, className) {
	    if (typeof el === 'string') el = document.querySelector(el);
	    var flag = this.hasClass(el, className);
	    if (flag) {
	      this.removeClass(el, className);
	    } else {
	      this.addClass(el, className);
	    }
	    return flag;
	  },
	  insertAfter: function insertAfter(newEl, targetEl) {
	    var parent = targetEl.parentNode;

	    if (parent.lastChild === targetEl) {
	      parent.appendChild(newEl);
	    } else {
	      parent.insertBefore(newEl, targetEl.nextSibling);
	    }
	  },

	  // el can be an Element, NodeList or query string
	  remove: function remove(el) {
	    if (typeof el === 'string') {
	      [].forEach.call(document.querySelectorAll(el), function (node) {
	        node.parentNode.removeChild(node);
	      });
	    } else if (el.parentNode) {
	      // it's an Element
	      el.parentNode.removeChild(el);
	    } else if (el instanceof NodeList) {
	      // it's an array of elements
	      [].forEach.call(el, function (node) {
	        node.parentNode.removeChild(node);
	      });
	    } else {
	      throw new Error('you can only pass Element, array of Elements or query string as argument');
	    }
	  },
	  forceReflow: function forceReflow(el) {
	    el.offsetHeight;
	  },
	  getDocumentScrollTop: function getDocumentScrollTop() {
	    // IE8 used `document.documentElement`
	    return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
	  },

	  // Set the current vertical position of the scroll bar for document
	  // Note: do not support fixed position of body
	  setDocumentScrollTop: function setDocumentScrollTop(value) {
	    window.scrollTo(0, value);
	    return value;
	  },
	  outerHeight: function outerHeight(el) {
	    return el.offsetHeight;
	  },
	  outerHeightWithMargin: function outerHeightWithMargin(el) {
	    var height = el.offsetHeight;
	    var style = getComputedStyle(el);

	    height += (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0);
	    return height;
	  },
	  outerWidth: function outerWidth(el) {
	    return el.offsetWidth;
	  },
	  outerWidthWithMargin: function outerWidthWithMargin(el) {
	    var width = el.offsetWidth;
	    var style = getComputedStyle(el);

	    width += (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);
	    return width;
	  },
	  getComputedStyles: function getComputedStyles(el) {
	    return el.ownerDocument.defaultView.getComputedStyle(el, null);
	  },
	  getOffset: function getOffset(el) {
	    var html = el.ownerDocument.documentElement;
	    var box = { top: 0, left: 0 };

	    // If we don't have gBCR, just use 0,0 rather than error
	    // BlackBerry 5, iOS 3 (original iPhone)
	    if (typeof el.getBoundingClientRect !== 'undefined') {
	      box = el.getBoundingClientRect();
	    }

	    return {
	      top: box.top + window.pageYOffset - html.clientTop,
	      left: box.left + window.pageXOffset - html.clientLeft
	    };
	  },
	  getPosition: function getPosition(el) {
	    if (!el) {
	      return {
	        left: 0,
	        top: 0
	      };
	    }

	    return {
	      left: el.offsetLeft,
	      top: el.offsetTop
	    };
	  },
	  setStyle: function setStyle(node, att, val, style) {
	    style = style || node.style;

	    if (style) {
	      if (val === null || val === '') {
	        // normalize unsetting
	        val = '';
	      } else if (!isNaN(Number(val)) && reUnit.test(att)) {
	        // number values may need a unit
	        val += 'px';
	      }

	      if (att === '') {
	        att = 'cssText';
	        val = '';
	      }

	      style[att] = val;
	    }
	  },
	  setStyles: function setStyles(el, hash) {
	    var _this3 = this;

	    var HAS_CSSTEXT_FEATURE = typeof el.style.cssText !== 'undefined';
	    function trim(str) {
	      return str.replace(/^\s+|\s+$/g, '');
	    }
	    var originStyleText = undefined;
	    var originStyleObj = {};
	    if (!!HAS_CSSTEXT_FEATURE) {
	      originStyleText = el.style.cssText;
	    } else {
	      originStyleText = el.getAttribute('style');
	    }
	    originStyleText.split(';').forEach(function (item) {
	      if (item.indexOf(':') !== -1) {
	        var obj = item.split(':');
	        originStyleObj[trim(obj[0])] = trim(obj[1]);
	      }
	    });

	    var styleObj = {};
	    Object.keys(hash).forEach(function (item) {
	      _this3.setStyle(el, item, hash[item], styleObj);
	    });
	    var mergedStyleObj = Object.assign({}, originStyleObj, styleObj);
	    var styleText = Object.keys(mergedStyleObj).map(function (item) {
	      return item + ': ' + mergedStyleObj[item] + ';';
	    }).join(' ');

	    if (!!HAS_CSSTEXT_FEATURE) {
	      el.style.cssText = styleText;
	    } else {
	      el.setAttribute('style', styleText);
	    }
	  },
	  getStyle: function getStyle(el, att, style) {
	    style = style || el.style;

	    var val = '';

	    if (style) {
	      val = style[att];

	      if (val === '') {
	        val = this.getComputedStyle(el, att);
	      }
	    }

	    return val;
	  },

	  // NOTE: Known bug, will return 'auto' if style value is 'auto'
	  getComputedStyle: function getComputedStyle(el, att) {
	    var win = el.ownerDocument.defaultView;
	    // null means not return presudo styles
	    var computed = win.getComputedStyle(el, null);

	    return att ? computed[att] : computed;
	  },
	  getPageSize: function getPageSize() {
	    var xScroll = undefined,
	        yScroll = undefined;

	    if (window.innerHeight && window.scrollMaxY) {
	      xScroll = window.innerWidth + window.scrollMaxX;
	      yScroll = window.innerHeight + window.scrollMaxY;
	    } else {
	      if (document.body.scrollHeight > document.body.offsetHeight) {
	        // all but Explorer Mac
	        xScroll = document.body.scrollWidth;
	        yScroll = document.body.scrollHeight;
	      } else {
	        // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
	        xScroll = document.body.offsetWidth;
	        yScroll = document.body.offsetHeight;
	      }
	    }

	    var windowWidth = undefined,
	        windowHeight = undefined;

	    if (self.innerHeight) {
	      // all except Explorer
	      if (document.documentElement.clientWidth) {
	        windowWidth = document.documentElement.clientWidth;
	      } else {
	        windowWidth = self.innerWidth;
	      }
	      windowHeight = self.innerHeight;
	    } else {
	      if (document.documentElement && document.documentElement.clientHeight) {
	        // Explorer 6 Strict Mode
	        windowWidth = document.documentElement.clientWidth;
	        windowHeight = document.documentElement.clientHeight;
	      } else {
	        if (document.body) {
	          // other Explorers
	          windowWidth = document.body.clientWidth;
	          windowHeight = document.body.clientHeight;
	        }
	      }
	    }

	    var pageHeight = undefined,
	        pageWidth = undefined;

	    // for small pages with total height less then height of the viewport
	    if (yScroll < windowHeight) {
	      pageHeight = windowHeight;
	    } else {
	      pageHeight = yScroll;
	    }
	    // for small pages with total width less then width of the viewport
	    if (xScroll < windowWidth) {
	      pageWidth = xScroll;
	    } else {
	      pageWidth = windowWidth;
	    }

	    return {
	      pageWidth: pageWidth,
	      pageHeight: pageHeight,
	      windowWidth: windowWidth,
	      windowHeight: windowHeight
	    };
	  },
	  get: function get(selector) {
	    return document.querySelector(selector) || {};
	  },
	  getAll: function getAll(selector) {
	    return document.querySelectorAll(selector);
	  },

	  // selector 可选。字符串值，规定在何处停止对祖先元素进行匹配的选择器表达式。
	  // filter   可选。字符串值，包含用于匹配元素的选择器表达式。
	  parentsUntil: function parentsUntil(el, selector, filter) {
	    var result = [];
	    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	    // match start from parent
	    el = el.parentElement;
	    while (el && !matchesSelector.call(el, selector)) {
	      if (!filter) {
	        result.push(el);
	      } else {
	        if (matchesSelector.call(el, filter)) {
	          result.push(el);
	        }
	      }
	      el = el.parentElement;
	    }
	    return result;
	  },

	  // 获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上
	  closest: function closest(el, selector) {
	    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

	    while (el) {
	      if (matchesSelector.call(el, selector)) {
	        return el;
	      }

	      el = el.parentElement;
	    }
	    return null;
	  },

	  // el can be an Element, NodeList or selector
	  _showHide: function _showHide(el, show) {
	    if (typeof el === 'string') el = document.querySelectorAll(el);
	    var els = el instanceof NodeList ? [].slice.call(el) : [el];
	    var display = undefined;
	    var values = [];
	    if (els.length === 0) {
	      return;
	    }
	    els.forEach(function (e, index) {
	      if (e.style) {
	        display = e.style.display;
	        if (show) {
	          if (display === 'none') {
	            values[index] = getAmDisplay(e) || '';
	          }
	        } else {
	          if (display !== 'none') {
	            values[index] = 'none';
	            setAmDisplay(e, display);
	          }
	        }
	      }
	    });

	    els.forEach(function (e, index) {
	      if (values[index] !== null) {
	        els[index].style.display = values[index];
	      }
	    });
	  },
	  show: function show(elements) {
	    this._showHide(elements, true);
	  },
	  hide: function hide(elements) {
	    this._showHide(elements, false);
	  },
	  toggle: function toggle(element) {
	    if (element.style.display === 'none') {
	      this.show(element);
	    } else {
	      this.hide(element);
	    }
	  },

	  /**
	   * scroll to location with animation
	   * @param  {Number} to       to assign the scrollTop value
	   * @param  {Number} duration assign the animate duration
	   * @return {Null}            return null
	   */
	  scrollTo: function scrollTo() {
	    var _this4 = this;

	    var to = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var duration = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];

	    if (duration < 0) {
	      return;
	    }
	    var diff = to - this.getDocumentScrollTop();
	    if (diff === 0) {
	      return;
	    }
	    var perTick = diff / duration * 10;
	    requestAnimationFrame(function () {
	      if (Math.abs(perTick) > Math.abs(diff)) {
	        _this4.setDocumentScrollTop(_this4.getDocumentScrollTop() + diff);
	        return;
	      }
	      _this4.setDocumentScrollTop(_this4.getDocumentScrollTop() + perTick);
	      if (diff > 0 && _this4.getDocumentScrollTop() >= to || diff < 0 && _this4.getDocumentScrollTop() <= to) {
	        return;
	      }
	      _this4.scrollTo(to, duration - 16);
	    });
	  },

	  // matches(el, '.my-class'); 这里不能使用伪类选择器
	  is: function is(el, selector) {
	    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
	  },
	  width: function width(el) {
	    var styles = this.getComputedStyles(el);
	    var width = parseFloat(styles.width.indexOf('px') !== -1 ? styles.width : 0);

	    var boxSizing = styles.boxSizing || 'content-box';
	    if (boxSizing === 'border-box') {
	      return width;
	    }

	    var borderLeftWidth = parseFloat(styles.borderLeftWidth);
	    var borderRightWidth = parseFloat(styles.borderRightWidth);
	    var paddingLeft = parseFloat(styles.paddingLeft);
	    var paddingRight = parseFloat(styles.paddingRight);
	    return width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight;
	  },
	  height: function height(el) {
	    var styles = this.getComputedStyles(el);
	    var height = parseFloat(styles.height.indexOf('px') !== -1 ? styles.height : 0);

	    var boxSizing = styles.boxSizing || 'content-box';
	    if (boxSizing === 'border-box') {
	      return height;
	    }

	    var borderTopWidth = parseFloat(styles.borderTopWidth);
	    var borderBottomWidth = parseFloat(styles.borderBottomWidth);
	    var paddingTop = parseFloat(styles.paddingTop);
	    var paddingBottom = parseFloat(styles.paddingBottom);
	    return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
	  }
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Sector
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ReactUtils = __webpack_require__(124);

	var _PolarUtils = __webpack_require__(125);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sector = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Sector, _Component);

	  function Sector() {
	    _classCallCheck(this, Sector);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sector).apply(this, arguments));
	  }

	  _createClass(Sector, [{
	    key: 'getDeltaAngle',
	    value: function getDeltaAngle(startAngle, endAngle) {
	      var sign = Math.sign(endAngle - startAngle);
	      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.9999);

	      return sign * deltaAngle;
	    }
	  }, {
	    key: 'getPath',
	    value: function getPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
	      var angle = this.getDeltaAngle(startAngle, endAngle);

	      // When the angle of sector equals to 360, star point and end point coincide
	      var _endAngle = startAngle + angle;
	      var outerStartPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, startAngle);
	      var outerEndPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, _endAngle);

	      var path = undefined;

	      if (innerRadius > 0) {
	        var innerStartPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, startAngle);
	        var innerEndPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, _endAngle);
	        path = 'M ' + outerStartPoint.x + ',' + outerStartPoint.y + '\n              A ' + outerRadius + ',' + outerRadius + ',0,\n              ' + +(Math.abs(angle) > 180) + ',' + +(startAngle > _endAngle) + ',\n              ' + outerEndPoint.x + ',' + outerEndPoint.y + '\n              L ' + innerEndPoint.x + ',' + innerEndPoint.y + '\n              A ' + innerRadius + ',' + innerRadius + ',0,\n              ' + +(Math.abs(angle) > 180) + ',' + +(startAngle <= _endAngle) + ',\n              ' + innerStartPoint.x + ',' + innerStartPoint.y + ' Z';
	      } else {
	        path = 'M ' + outerStartPoint.x + ',' + outerStartPoint.y + '\n              A ' + outerRadius + ',' + outerRadius + ',0,\n              ' + +(Math.abs(angle) > 180) + ',' + +(startAngle > _endAngle) + ',\n              ' + outerEndPoint.x + ',' + outerEndPoint.y + '\n              L ' + cx + ',' + cy + ' Z';
	      }

	      return path;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var cx = _props.cx;
	      var cy = _props.cy;
	      var innerRadius = _props.innerRadius;
	      var outerRadius = _props.outerRadius;
	      var startAngle = _props.startAngle;
	      var endAngle = _props.endAngle;
	      var onClick = _props.onClick;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseLeave = _props.onMouseLeave;
	      var className = _props.className;


	      if (outerRadius < innerRadius || startAngle === endAngle) {
	        return null;
	      }

	      var layerClass = (0, _classnames2.default)('recharts-sector', className);

	      return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        className: layerClass,
	        onMouseEnter: onMouseEnter,
	        onMouseLeave: onMouseLeave,
	        onClick: onClick,
	        d: this.getPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle)
	      }));
	    }
	  }]);

	  return Sector;
	}(_react.Component), _class2.displayName = 'Sector', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  cx: _react.PropTypes.number,
	  cy: _react.PropTypes.number,
	  innerRadius: _react.PropTypes.number,
	  outerRadius: _react.PropTypes.number,
	  startAngle: _react.PropTypes.number,
	  endAngle: _react.PropTypes.number,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}), _class2.defaultProps = {
	  cx: 0,
	  cy: 0,
	  innerRadius: 0,
	  outerRadius: 0,
	  startAngle: 0,
	  endAngle: 0,
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onClick: function onClick() {}
	}, _temp)) || _class;

	exports.default = Sector;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateWidthHeight = exports.getEventAttributes = exports.getPresentationAttributes = exports.withoutType = exports.findChildByType = exports.findAllByType = exports.PRESENTATION_ATTRIBUTES = undefined;

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _arguments = arguments;

	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PRESENTATION_ATTRIBUTES = exports.PRESENTATION_ATTRIBUTES = {
	  alignmentBaseline: _react.PropTypes.string,
	  baselineShift: _react.PropTypes.string,
	  clip: _react.PropTypes.string,
	  clipPath: _react.PropTypes.string,
	  clipRule: _react.PropTypes.string,
	  color: _react.PropTypes.string,
	  colorInterpolation: _react.PropTypes.string,
	  colorInterpolationFilters: _react.PropTypes.string,
	  colorProfile: _react.PropTypes.string,
	  colorRendering: _react.PropTypes.string,
	  cursor: _react.PropTypes.string,
	  direction: _react.PropTypes.oneOf(['ltr', 'rtl', 'inherit']),
	  display: _react.PropTypes.string,
	  dominantBaseline: _react.PropTypes.string,
	  enableBackground: _react.PropTypes.string,
	  fill: _react.PropTypes.string,
	  fillOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  fillRule: _react.PropTypes.oneOf(['nonzero', 'evenodd', 'inherit']),
	  filter: _react.PropTypes.string,
	  floodColor: _react.PropTypes.string,
	  floodOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  font: _react.PropTypes.string,
	  fontFamily: _react.PropTypes.string,
	  fontSize: _react.PropTypes.number,
	  fontSizeAdjust: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  fontStretch: _react.PropTypes.oneOf(['normal', 'wider', 'narrower', 'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', 'inherit']),
	  fontStyle: _react.PropTypes.oneOf(['normal', 'italic', 'oblique', 'inherit']),
	  fontVariant: _react.PropTypes.oneOf(['normal', 'small-caps', 'inherit']),
	  fontWeight: _react.PropTypes.oneOf(['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit']),
	  glyphOrientationHorizontal: _react.PropTypes.string,
	  glyphOrientationVertical: _react.PropTypes.string,
	  imageRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeQuality', 'inherit']),
	  kerning: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  letterSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  lightingColor: _react.PropTypes.string,
	  markerEnd: _react.PropTypes.string,
	  markerMid: _react.PropTypes.string,
	  markerStart: _react.PropTypes.string,
	  mask: _react.PropTypes.string,
	  opacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  overflow: _react.PropTypes.oneOf(['visible', 'hidden', 'scroll', 'auto', 'inherit']),
	  pointerEvents: _react.PropTypes.oneOf(['visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none', 'inherit']),
	  shapeRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit']),
	  stopColor: _react.PropTypes.string,
	  stopOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  stroke: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  strokeDasharray: _react.PropTypes.string,
	  strokeDashoffset: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  strokeLinecap: _react.PropTypes.oneOf(['butt', 'round', 'square', 'inherit']),
	  strokeLinejoin: _react.PropTypes.oneOf(['miter', 'round', 'bevel', 'inherit']),
	  strokeMiterlimit: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  strokeOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
	  textDecoration: _react.PropTypes.oneOf(['none', 'underline', 'overline', 'line-through', 'blink', 'inherit']),
	  textRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision', 'inherit']),
	  unicodeBidi: _react.PropTypes.oneOf(['normal', 'embed', 'bidi-override', 'inherit']),
	  visibility: _react.PropTypes.oneOf(['visible', 'hidden', 'collapse', 'inherit']),
	  wordSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  writingMode: _react.PropTypes.oneOf(['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit']),
	  transform: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};

	var EVENT_ATTRIBUTES = {
	  onActivate: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onFocusin: _react.PropTypes.func,
	  onFocusout: _react.PropTypes.func,
	  onload: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseMove: _react.PropTypes.func,
	  onMouseOut: _react.PropTypes.func,
	  onMouseOver: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func
	};

	/*
	 * Find and return all matched children by type. `type` can be a React element class or
	 * string
	 */
	var findAllByType = exports.findAllByType = function findAllByType(children, type) {
	  var result = [];
	  var childType = type;

	  if (type && type.displayName) {
	    childType = type.displayName;
	  }

	  _react2.default.Children.forEach(children, function (child) {
	    if (child && child.type && child.type.displayName === childType) {
	      result.push(child);
	    }
	  });

	  return result;
	};

	/*
	 * Return the first matched child by type, return null otherwise.
	 * `type` can be a React element class or string.
	 */
	var findChildByType = exports.findChildByType = function findChildByType(children, type) {
	  var result = findAllByType(children, type);

	  return result && result[0];
	};

	/*
	 * Create a new array of children excluding the ones matched the type
	 */
	var withoutType = exports.withoutType = function withoutType(children) {
	  var newChildren = [];
	  var types = [].slice.call(_arguments, 1);

	  types = types.map(function (type) {
	    if (type && type.displayName) {
	      return type.displayName;
	    }
	    return type;
	  });

	  _react2.default.Children.forEach(children, function (child) {
	    if (child && child.type && child.type.displayName && types.indexOf(child.type.displayName) !== -1) {
	      return;
	    }
	    newChildren.push(child);
	  });

	  return newChildren;
	};

	/**
	 * get all the presentation attribute of svg element
	 * @param  {Object} el A react element or the props of a react element
	 * @return {Object}    attributes or null
	 */
	var getPresentationAttributes = exports.getPresentationAttributes = function getPresentationAttributes(el) {
	  if (!el) {
	    return null;
	  }

	  var props = _react2.default.isValidElement(el) ? el.props : el;
	  var result = null;

	  for (var key in props) {
	    if (props.hasOwnProperty(key) && PRESENTATION_ATTRIBUTES[key]) {
	      if (!result) {
	        result = {};
	      }
	      result[key] = props[key];
	    }
	  }

	  return result;
	};

	/**
	 * get all the event attribute of svg element
	 * @param  {Object} el A react element or the props of a react element
	 * @return {Object}    attributes or null
	 */
	var getEventAttributes = exports.getEventAttributes = function getEventAttributes(el) {
	  if (!el) {
	    return null;
	  }

	  var props = _react2.default.isValidElement(el) ? el.props : el;
	  var result = null;

	  for (var key in props) {
	    if (props.hasOwnProperty(key) && EVENT_ATTRIBUTES[key]) {
	      if (!result) {
	        result = {};
	      }
	      result[key] = props[key];
	    }
	  }

	  return result;
	};

	/**
	 * validate the width and height props of a chart element
	 * @param  {Object} el A chart element
	 * @return {Boolean}   true If the props width and height are number, and greater than 0
	 */
	var validateWidthHeight = exports.validateWidthHeight = function validateWidthHeight(el) {
	  if (!el || !el.props) {
	    return false;
	  }
	  var _el$props = el.props;
	  var width = _el$props.width;
	  var height = _el$props.height;


	  if (!(0, _isNumber2.default)(width) || width <= 0 || !(0, _isNumber2.default)(height) || height <= 0) {
	    return false;
	  }

	  return true;
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RADIAN = Math.PI / 180;

	var polarToCartesian = exports.polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
	  return {
	    x: cx + Math.cos(-RADIAN * angle) * radius,
	    y: cy + Math.sin(-RADIAN * angle) * radius
	  };
	};

	var getMaxRadius = exports.getMaxRadius = function getMaxRadius(width, height) {
	  var margin = arguments.length <= 2 || arguments[2] === undefined ? {
	    top: 0, right: 0, bottom: 0, left: 0
	  } : arguments[2];
	  return Math.min(Math.abs(width - (margin.left || 0) - (margin.right || 0)), Math.abs(height - (margin.left || 0) - (margin.right || 0))) / 2;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isArray = __webpack_require__(102);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Curve
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _d3Shape = __webpack_require__(127);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CURVE_FACTORIES = {
	  curveLinear: _d3Shape.curveLinear, curveMonotoneX: _d3Shape.curveMonotoneX, curveMonotoneY: _d3Shape.curveMonotoneY, curveStep: _d3Shape.curveStep,
	  curveStepAfter: _d3Shape.curveStepAfter, curveStepBefore: _d3Shape.curveStepBefore
	};

	var Curve = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Curve, _Component);

	  function Curve() {
	    _classCallCheck(this, Curve);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Curve).apply(this, arguments));
	  }

	  _createClass(Curve, [{
	    key: 'getCurveFactory',
	    value: function getCurveFactory(type, layout) {
	      var name = 'curve' + type.slice(0, 1).toUpperCase() + type.slice(1);

	      if (name === 'curveMonotone' && layout) {
	        return CURVE_FACTORIES['' + name + (layout === 'vertical' ? 'Y' : 'X')];
	      }
	      return CURVE_FACTORIES[name] || _d3Shape.curveLinear;
	    }

	    /**
	     * Calculate the path of curve
	     * @return {String} path
	     */

	  }, {
	    key: 'getPath',
	    value: function getPath() {
	      var _props = this.props;
	      var type = _props.type;
	      var points = _props.points;
	      var baseLine = _props.baseLine;
	      var layout = _props.layout;

	      var l = (0, _d3Shape.line)().x(function (p) {
	        return p.x;
	      }).y(function (p) {
	        return p.y;
	      }).defined(function (p) {
	        return p.x === +p.x && p.y === +p.y;
	      }).curve(this.getCurveFactory(type, layout));
	      var len = points.length;
	      var curvePath = l(points);

	      if (!curvePath) {
	        return '';
	      }

	      if (layout === 'horizontal' && (0, _isNumber2.default)(baseLine)) {
	        curvePath += 'L' + points[len - 1].x + ' ' + baseLine + 'L' + points[0].x + ' ' + baseLine + 'Z';
	      } else if (layout === 'vertical' && (0, _isNumber2.default)(baseLine)) {
	        curvePath += 'L' + baseLine + ' ' + points[len - 1].y + 'L' + baseLine + ' ' + points[0].y + 'Z';
	      } else if ((0, _isArray2.default)(baseLine) && baseLine.length) {
	        var revese = baseLine.reduce(function (result, entry) {
	          return [entry].concat(_toConsumableArray(result));
	        }, []);
	        var revesePath = this.fliterMouseToSeg(l(revese) || '');

	        curvePath += 'L' + revese[0].x + ' ' + revese[0].y + revesePath + 'Z';
	      }

	      return curvePath;
	    }
	  }, {
	    key: 'fliterMouseToSeg',
	    value: function fliterMouseToSeg(path) {
	      var reg = /[CSLHVcslhv]/;
	      var res = reg.exec(path);

	      if (res && res.length) {
	        var index = path.indexOf(res[0]);

	        return path.slice(index);
	      }

	      return path;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var className = _props2.className;
	      var points = _props2.points;
	      var type = _props2.type;
	      var onClick = _props2.onClick;
	      var onMouseEnter = _props2.onMouseEnter;
	      var onMouseLeave = _props2.onMouseLeave;


	      if (!points || !points.length) {
	        return null;
	      }

	      return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        className: (0, _classnames2.default)('recharts-curve', className),
	        onMouseEnter: onMouseEnter,
	        onMouseLeave: onMouseLeave,
	        onClick: onClick,
	        d: this.getPath()
	      }));
	    }
	  }]);

	  return Curve;
	}(_react.Component), _class2.displayName = 'Curve', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  type: _react.PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  baseLine: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
	  points: _react.PropTypes.arrayOf(_react.PropTypes.object)
	}), _class2.defaultProps = {
	  type: 'linear',
	  stroke: '#000',
	  fill: 'none',
	  strokeWidth: 1,
	  strokeDasharray: 'none',
	  points: [],
	  onClick: function onClick() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	}, _temp)) || _class;

	exports.default = Curve;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(128)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-path'], factory) :
	  (factory((global.d3_shape = {}),global.d3_path));
	}(this, function (exports,d3Path) { 'use strict';

	  function constant(x) {
	    return function constant() {
	      return x;
	    };
	  }

	  var epsilon = 1e-12;
	  var pi = Math.PI;
	  var halfPi = pi / 2;
	  var tau = 2 * pi;

	  function arcInnerRadius(d) {
	    return d.innerRadius;
	  }

	  function arcOuterRadius(d) {
	    return d.outerRadius;
	  }

	  function arcStartAngle(d) {
	    return d.startAngle;
	  }

	  function arcEndAngle(d) {
	    return d.endAngle;
	  }

	  function arcPadAngle(d) {
	    return d && d.padAngle; // Note: optional!
	  }

	  function asin(x) {
	    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
	  }

	  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	    var x10 = x1 - x0, y10 = y1 - y0,
	        x32 = x3 - x2, y32 = y3 - y2,
	        t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
	    return [x0 + t * x10, y0 + t * y10];
	  }

	  // Compute perpendicular offset line of length rc.
	  // http://mathworld.wolfram.com/Circle-LineIntersection.html
	  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	    var x01 = x0 - x1,
	        y01 = y0 - y1,
	        lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
	        ox = lo * y01,
	        oy = -lo * x01,
	        x11 = x0 + ox,
	        y11 = y0 + oy,
	        x10 = x1 + ox,
	        y10 = y1 + oy,
	        x00 = (x11 + x10) / 2,
	        y00 = (y11 + y10) / 2,
	        dx = x10 - x11,
	        dy = y10 - y11,
	        d2 = dx * dx + dy * dy,
	        r = r1 - rc,
	        D = x11 * y10 - x10 * y11,
	        d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
	        cx0 = (D * dy - dx * d) / d2,
	        cy0 = (-D * dx - dy * d) / d2,
	        cx1 = (D * dy + dx * d) / d2,
	        cy1 = (-D * dx + dy * d) / d2,
	        dx0 = cx0 - x00,
	        dy0 = cy0 - y00,
	        dx1 = cx1 - x00,
	        dy1 = cy1 - y00;

	    // Pick the closer of the two intersection points.
	    // TODO Is there a faster way to determine which intersection to use?
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

	    return {
	      cx: cx0,
	      cy: cy0,
	      x01: -ox,
	      y01: -oy,
	      x11: cx0 * (r1 / r - 1),
	      y11: cy0 * (r1 / r - 1)
	    };
	  }

	  function arc() {
	    var innerRadius = arcInnerRadius,
	        outerRadius = arcOuterRadius,
	        cornerRadius = constant(0),
	        padRadius = null,
	        startAngle = arcStartAngle,
	        endAngle = arcEndAngle,
	        padAngle = arcPadAngle,
	        context = null;

	    function arc() {
	      var buffer,
	          r,
	          r0 = +innerRadius.apply(this, arguments),
	          r1 = +outerRadius.apply(this, arguments),
	          a0 = startAngle.apply(this, arguments) - halfPi,
	          a1 = endAngle.apply(this, arguments) - halfPi,
	          da = Math.abs(a1 - a0),
	          cw = a1 > a0;

	      if (!context) context = buffer = d3Path.path();

	      // Ensure that the outer radius is always larger than the inner radius.
	      if (r1 < r0) r = r1, r1 = r0, r0 = r;

	      // Is it a point?
	      if (!(r1 > epsilon)) context.moveTo(0, 0);

	      // Or is it a circle or annulus?
	      else if (da > tau - epsilon) {
	        context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
	        context.arc(0, 0, r1, a0, a1, !cw);
	        if (r0 > epsilon) {
	          context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
	          context.arc(0, 0, r0, a1, a0, cw);
	        }
	      }

	      // Or is it a circular or annular sector?
	      else {
	        var a01 = a0,
	            a11 = a1,
	            a00 = a0,
	            a10 = a1,
	            da0 = da,
	            da1 = da,
	            ap = padAngle.apply(this, arguments) / 2,
	            rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
	            rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
	            rc0 = rc,
	            rc1 = rc,
	            t0,
	            t1;

	        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
	        if (rp > epsilon) {
	          var p0 = asin(rp / r0 * Math.sin(ap)),
	              p1 = asin(rp / r1 * Math.sin(ap));
	          if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
	          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
	          if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
	          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
	        }

	        var x01 = r1 * Math.cos(a01),
	            y01 = r1 * Math.sin(a01),
	            x10 = r0 * Math.cos(a10),
	            y10 = r0 * Math.sin(a10);

	        // Apply rounded corners?
	        if (rc > epsilon) {
	          var x11 = r1 * Math.cos(a11),
	              y11 = r1 * Math.sin(a11),
	              x00 = r0 * Math.cos(a00),
	              y00 = r0 * Math.sin(a00);

	          // Restrict the corner radius according to the sector angle.
	          if (da < pi) {
	            var oc = da0 > epsilon ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
	                ax = x01 - oc[0],
	                ay = y01 - oc[1],
	                bx = x11 - oc[0],
	                by = y11 - oc[1],
	                kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
	                lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	            rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	            rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	          }
	        }

	        // Is the sector collapsed to a line?
	        if (!(da1 > epsilon)) context.moveTo(x01, y01);

	        // Does the sector’s outer ring have rounded corners?
	        else if (rc1 > epsilon) {
	          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
	          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

	          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
	            context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the outer ring just a circular arc?
	        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

	        // Is there no inner ring, and it’s a circular sector?
	        // Or perhaps it’s an annular sector collapsed due to padding?
	        if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);

	        // Does the sector’s inner ring (or point) have rounded corners?
	        else if (rc0 > epsilon) {
	          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
	          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

	          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
	            context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the inner ring just a circular arc?
	        else context.arc(0, 0, r0, a10, a00, cw);
	      }

	      context.closePath();

	      if (buffer) return context = null, buffer + "" || null;
	    }

	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
	          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
	      return [Math.cos(a) * r, Math.sin(a) * r];
	    };

	    arc.innerRadius = function(_) {
	      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
	    };

	    arc.outerRadius = function(_) {
	      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
	    };

	    arc.cornerRadius = function(_) {
	      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
	    };

	    arc.padRadius = function(_) {
	      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
	    };

	    arc.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
	    };

	    arc.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
	    };

	    arc.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
	    };

	    arc.context = function(_) {
	      return arguments.length ? ((context = _ == null ? null : _), arc) : context;
	    };

	    return arc;
	  }

	  var slice = Array.prototype.slice;

	  function bind(curve, args) {
	    if (args.length < 2) return curve;
	    args = slice.call(args);
	    args[0] = null;
	    return function(context) {
	      args[0] = context;
	      return curve.apply(null, args);
	    };
	  }

	  function Linear(context) {
	    this._context = context;
	  }

	  Linear.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: this._context.lineTo(x, y); break;
	      }
	    }
	  };

	  function curveLinear(context) {
	    return new Linear(context);
	  }

	  function x(p) {
	    return p[0];
	  }

	  function y(p) {
	    return p[1];
	  }

	  function area() {
	    var x0 = x,
	        x1 = null,
	        y0 = constant(0),
	        y1 = y,
	        defined = constant(true),
	        context = null,
	        curve = curveLinear,
	        output = null;

	    function area(data) {
	      var i,
	          j,
	          k,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer,
	          x0z = new Array(n),
	          y0z = new Array(n);

	      if (!context) output = curve(buffer = d3Path.path());

	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) {
	            j = i;
	            output.areaStart();
	            output.lineStart();
	          } else {
	            output.lineEnd();
	            output.lineStart();
	            for (k = i - 1; k >= j; --k) {
	              output.point(x0z[k], y0z[k]);
	            }
	            output.lineEnd();
	            output.areaEnd();
	          }
	        }
	        if (defined0) {
	          x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
	          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
	        }
	      }

	      if (buffer) return output = null, buffer + "" || null;
	    }

	    area.x = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
	    };

	    area.x0 = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
	    };

	    area.x1 = function(_) {
	      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
	    };

	    area.y = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
	    };

	    area.y0 = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
	    };

	    area.y1 = function(_) {
	      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
	    };

	    area.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
	    };

	    area.curve = function(_) {
	      return arguments.length ? (curve = bind(_, arguments), context != null && (output = curve(context)), area) : curve;
	    };

	    area.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
	    };

	    return area;
	  }

	  function line() {
	    var x$$ = x,
	        y$$ = y,
	        defined = constant(true),
	        context = null,
	        curve = curveLinear,
	        output = null;

	    function line(data) {
	      var i,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer;

	      if (!context) output = curve(buffer = d3Path.path());

	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) output.lineStart();
	          else output.lineEnd();
	        }
	        if (defined0) output.point(+x$$(d, i, data), +y$$(d, i, data));
	      }

	      if (buffer) return output = null, buffer + "" || null;
	    }

	    line.x = function(_) {
	      return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant(+_), line) : x$$;
	    };

	    line.y = function(_) {
	      return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant(+_), line) : y$$;
	    };

	    line.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
	    };

	    line.curve = function(_) {
	      return arguments.length ? (curve = bind(_, arguments), context != null && (output = curve(context)), line) : curve;
	    };

	    line.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	    };

	    return line;
	  }

	  function descending$1(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }

	  function identity(d) {
	    return d;
	  }

	  function pie() {
	    var value = identity,
	        sortValues = descending$1,
	        sort = null,
	        startAngle = constant(0),
	        endAngle = constant(tau),
	        padAngle = constant(0);

	    function pie(data) {
	      var i,
	          n = data.length,
	          j,
	          k,
	          sum = 0,
	          index = new Array(n),
	          arcs = new Array(n),
	          a0 = +startAngle.apply(this, arguments),
	          da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
	          a1,
	          p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
	          pa = p * (da < 0 ? -1 : 1),
	          v;

	      for (i = 0; i < n; ++i) {
	        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
	          sum += v;
	        }
	      }

	      // Optionally sort the arcs by previously-computed values or by data.
	      if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
	      else if (sort !== null) index.sort(function(i, j) { return sort(data[i], data[j]); });

	      // Compute the arcs! They are stored in the original data's order.
	      for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
	        j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
	          data: data[j],
	          index: i,
	          value: v,
	          startAngle: a0,
	          endAngle: a1,
	          padAngle: p
	        };
	      }

	      return arcs;
	    }

	    pie.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
	    };

	    pie.sortValues = function(_) {
	      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	    };

	    pie.sort = function(_) {
	      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	    };

	    pie.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
	    };

	    pie.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
	    };

	    pie.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
	    };

	    return pie;
	  }

	  function Radial(curve) {
	    this._curve = curve;
	  }

	  Radial.prototype = {
	    areaStart: function() {
	      this._curve.areaStart();
	    },
	    areaEnd: function() {
	      this._curve.areaEnd();
	    },
	    lineStart: function() {
	      this._curve.lineStart();
	    },
	    lineEnd: function() {
	      this._curve.lineEnd();
	    },
	    point: function(a, r) {
	      a -= halfPi, this._curve.point(r * Math.cos(a), r * Math.sin(a));
	    }
	  };

	  function curveRadial(curve, args) {
	    curve = bind(curve, args);

	    function radial(context) {
	      return new Radial(curve(context));
	    }

	    radial._curve = curve;

	    return radial;
	  }

	  function radialArea() {
	    var a = area(),
	        c = a.curve;

	    a.angle = a.x, delete a.x;
	    a.startAngle = a.x0, delete a.x0;
	    a.endAngle = a.x1, delete a.x1;
	    a.radius = a.y, delete a.y;
	    a.innerRadius = a.y0, delete a.y0;
	    a.outerRadius = a.y1, delete a.y1;

	    a.curve = function(_) {
	      return arguments.length ? c(curveRadial(_, arguments)) : c()._curve;
	    };

	    return a.curve(curveLinear);
	  }

	  function radialLine() {
	    var l = line(),
	        c = l.curve;

	    l.angle = l.x, delete l.x;
	    l.radius = l.y, delete l.y;

	    l.curve = function(_) {
	      return arguments.length ? c(curveRadial(_, arguments)) : c()._curve;
	    };

	    return l.curve(curveLinear);
	  }

	  var circle = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / pi);
	      context.moveTo(r, 0);
	      context.arc(0, 0, r, 0, tau);
	    }
	  };

	  var cross = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / 5) / 2;
	      context.moveTo(-3 * r, -r);
	      context.lineTo(-r, -r);
	      context.lineTo(-r, -3 * r);
	      context.lineTo(r, -3 * r);
	      context.lineTo(r, -r);
	      context.lineTo(3 * r, -r);
	      context.lineTo(3 * r, r);
	      context.lineTo(r, r);
	      context.lineTo(r, 3 * r);
	      context.lineTo(-r, 3 * r);
	      context.lineTo(-r, r);
	      context.lineTo(-3 * r, r);
	      context.closePath();
	    }
	  };

	  var tan30 = Math.sqrt(1 / 3);
	  var tan30_2 = tan30 * 2;
	  var diamond = {
	    draw: function(context, size) {
	      var y = Math.sqrt(size / tan30_2),
	          x = y * tan30;
	      context.moveTo(0, -y);
	      context.lineTo(x, 0);
	      context.lineTo(0, y);
	      context.lineTo(-x, 0);
	      context.closePath();
	    }
	  };

	  var ka = 0.89081309152928522810;
	  var kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10);
	  var kx = Math.sin(tau / 10) * kr;
	  var ky = -Math.cos(tau / 10) * kr;
	  var star = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size * ka),
	          x = kx * r,
	          y = ky * r;
	      context.moveTo(0, -r);
	      context.lineTo(x, y);
	      for (var i = 1; i < 5; ++i) {
	        var a = tau * i / 5,
	            c = Math.cos(a),
	            s = Math.sin(a);
	        context.lineTo(s * r, -c * r);
	        context.lineTo(c * x - s * y, s * x + c * y);
	      }
	      context.closePath();
	    }
	  };

	  var square = {
	    draw: function(context, size) {
	      var w = Math.sqrt(size),
	          x = -w / 2;
	      context.rect(x, x, w, w);
	    }
	  };

	  var sqrt3 = Math.sqrt(3);

	  var triangle = {
	    draw: function(context, size) {
	      var y = -Math.sqrt(size / (sqrt3 * 3));
	      context.moveTo(0, y * 2);
	      context.lineTo(-sqrt3 * y, -y);
	      context.lineTo(sqrt3 * y, -y);
	      context.closePath();
	    }
	  };

	  var c = -0.5;
	  var s = Math.sqrt(3) / 2;
	  var k = 1 / Math.sqrt(12);
	  var a = (k / 2 + 1) * 3;
	  var wye = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / a),
	          x0 = r / 2,
	          y0 = r * k,
	          x1 = x0,
	          y1 = r * k + r,
	          x2 = -x1,
	          y2 = y1;
	      context.moveTo(x0, y0);
	      context.lineTo(x1, y1);
	      context.lineTo(x2, y2);
	      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	      context.closePath();
	    }
	  };

	  var symbols = [
	    circle,
	    cross,
	    diamond,
	    square,
	    star,
	    triangle,
	    wye
	  ];

	  function symbol() {
	    var type = constant(circle),
	        size = constant(64),
	        context = null;

	    function symbol() {
	      var buffer;
	      if (!context) context = buffer = d3Path.path();
	      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
	      if (buffer) return context = null, buffer + "" || null;
	    }

	    symbol.type = function(_) {
	      return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
	    };

	    symbol.size = function(_) {
	      return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
	    };

	    symbol.context = function(_) {
	      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	    };

	    return symbol;
	  }

	  function noop() {}

	  function point(that, x, y) {
	    that._context.bezierCurveTo(
	      (2 * that._x0 + that._x1) / 3,
	      (2 * that._y0 + that._y1) / 3,
	      (that._x0 + 2 * that._x1) / 3,
	      (that._y0 + 2 * that._y1) / 3,
	      (that._x0 + 4 * that._x1 + x) / 6,
	      (that._y0 + 4 * that._y1 + y) / 6
	    );
	  }

	  function Basis(context) {
	    this._context = context;
	  }

	  Basis.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 3: point(this, this._x1, this._y1); // proceed
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basis(context) {
	    return new Basis(context);
	  }

	  function BasisClosed(context) {
	    this._context = context;
	  }

	  BasisClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x2, this._y2);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
	          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x2, this._y2);
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
	        case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
	        case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basisClosed(context) {
	    return new BasisClosed(context);
	  }

	  function BasisOpen(context) {
	    this._context = context;
	  }

	  BasisOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
	        case 3: this._point = 4; // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basisOpen(context) {
	    return new BasisOpen(context);
	  }

	  function Bundle(context, beta) {
	    this._basis = basis(context);
	    this._beta = beta;
	  }

	  Bundle.prototype = {
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	      this._basis.lineStart();
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          j = x.length - 1;

	      if (j > 0) {
	        var x0 = x[0],
	            y0 = y[0],
	            dx = x[j] - x0,
	            dy = y[j] - y0,
	            i = -1,
	            t;

	        while (++i <= j) {
	          t = i / j;
	          this._basis.point(
	            this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
	            this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
	          );
	        }
	      }

	      this._x = this._y = null;
	      this._basis.lineEnd();
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };

	  function bundle(context, beta) {
	    return beta == null ? new Bundle(context, 0.85)
	        : (beta = +beta) === 1 ? basis(context)
	        : new Bundle(context, beta);
	  }

	  function point$1(that, x, y) {
	    that._context.bezierCurveTo(
	      that._x1 + that._k * (that._x2 - that._x0),
	      that._y1 + that._k * (that._y2 - that._y0),
	      that._x2 + that._k * (that._x1 - x),
	      that._y2 + that._k * (that._y1 - y),
	      that._x2,
	      that._y2
	    );
	  }

	  function Cardinal(context, k) {
	    this._context = context;
	    this._k = k;
	  }

	  Cardinal.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: point$1(this, this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
	        case 2: this._point = 3; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function cardinal(context, tension) {
	    return new Cardinal(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function CardinalClosed(context, k) {
	    this._context = context;
	    this._k = k;
	  }

	  CardinalClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function cardinalClosed(context, tension) {
	    return new CardinalClosed(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function CardinalOpen(context, k) {
	    this._context = context;
	    this._k = k;
	  }

	  CardinalOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function cardinalOpen(context, tension) {
	    return new CardinalOpen(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function point$2(that, x, y) {
	    var x1 = that._x1,
	        y1 = that._y1,
	        x2 = that._x2,
	        y2 = that._y2;

	    if (that._l01_a > epsilon) {
	      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	          n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	    }

	    if (that._l23_a > epsilon) {
	      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
	          m = 3 * that._l23_a * (that._l23_a + that._l12_a);
	      x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
	      y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	    }

	    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
	  }

	  function CatmullRom(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRom.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: this.point(this, this._x2, this._y2); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; // proceed
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function catmullRom(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRom(context, alpha)
	        : cardinal(context, 0);
	  }

	  function CatmullRomClosed(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRomClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function catmullRomClosed(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRomClosed(context, alpha)
	        : cardinalClosed(context, 0);
	  }

	  function CatmullRomOpen(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRomOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function catmullRomOpen(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRomOpen(context, alpha)
	        : cardinalOpen(context, 0);
	  }

	  function LinearClosed(context) {
	    this._context = context;
	  }

	  LinearClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._point) this._context.closePath();
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      if (this._point) this._context.lineTo(x, y);
	      else this._point = 1, this._context.moveTo(x, y);
	    }
	  };

	  function linearClosed(context) {
	    return new LinearClosed(context);
	  }

	  function sign(x) {
	    return x < 0 ? -1 : 1;
	  }

	  // Calculate the slopes of the tangents (Hermite-type interpolation) based on
	  // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
	  // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
	  // NOV(II), P. 443, 1990.
	  function slope3(that, x2, y2) {
	    var h0 = that._x1 - that._x0,
	        h1 = x2 - that._x1,
	        s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
	        s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
	        p = (s0 * h1 + s1 * h0) / (h0 + h1);
	    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
	  }

	  // Calculate a one-sided slope.
	  function slope2(that, t) {
	    var h = that._x1 - that._x0;
	    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
	  }

	  // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
	  // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
	  // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
	  function point$3(that, t0, t1) {
	    var x0 = that._x0,
	        y0 = that._y0,
	        x1 = that._x1,
	        y1 = that._y1,
	        dx = (x1 - x0) / 3;
	    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
	  }

	  function MonotoneX(context) {
	    this._context = context;
	  }

	  MonotoneX.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 =
	      this._t0 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	        case 3: point$3(this, this._t0, slope2(this, this._t0)); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      var t1 = NaN;

	      x = +x, y = +y;
	      if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; point$3(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
	        default: point$3(this, this._t0, t1 = slope3(this, x, y)); break;
	      }

	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	      this._t0 = t1;
	    }
	  }

	  function MonotoneY(context) {
	    this._context = new ReflectContext(context);
	  }

	  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
	    MonotoneX.prototype.point.call(this, y, x);
	  };

	  function ReflectContext(context) {
	    this._context = context;
	  }

	  ReflectContext.prototype = {
	    moveTo: function(x, y) { this._context.moveTo(y, x); },
	    closePath: function() { this._context.closePath(); },
	    lineTo: function(x, y) { this._context.lineTo(y, x); },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
	  };

	  function monotoneX(context) {
	    return new MonotoneX(context);
	  }

	  function monotoneY(context) {
	    return new MonotoneY(context);
	  }

	  function Natural(context) {
	    this._context = context;
	  }

	  Natural.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          n = x.length;

	      if (n) {
	        this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
	        if (n === 2) {
	          this._context.lineTo(x[1], y[1]);
	        } else {
	          var px = controlPoints(x),
	              py = controlPoints(y);
	          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
	            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
	          }
	        }
	      }

	      if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	      this._x = this._y = null;
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };

	  // See https://www.particleincell.com/2012/bezier-splines/ for derivation.
	  function controlPoints(x) {
	    var i,
	        n = x.length - 1,
	        m,
	        a = new Array(n),
	        b = new Array(n),
	        r = new Array(n);
	    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	    for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	    for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	    a[n - 1] = r[n - 1] / b[n - 1];
	    for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	    b[n - 1] = (x[n] + a[n - 1]) / 2;
	    for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	    return [a, b];
	  }

	  function natural(context) {
	    return new Natural(context);
	  }

	  function Step(context, t) {
	    this._context = context;
	    this._t = t;
	  }

	  Step.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = this._y = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: {
	          var t = x > this._x ? this._t : 1 - this._t;
	          if (t <= 0) {
	            this._context.lineTo(this._x, y);
	            this._context.lineTo(x, y);
	          } else if (t >= 1) {
	            this._context.lineTo(x, this._y);
	            this._context.lineTo(x, y);
	          } else {
	            var x1 = (this._x + x) * t;
	            this._context.lineTo(x1, this._y);
	            this._context.lineTo(x1, y);
	          }
	          break;
	        }
	      }
	      this._x = x, this._y = y;
	    }
	  };

	  function step(context) {
	    return new Step(context, 0.5);
	  }

	  function stepBefore(context) {
	    return new Step(context, 0);
	  }

	  function stepAfter(context) {
	    return new Step(context, 1);
	  }

	  var slice$1 = Array.prototype.slice;

	  function none(series, order) {
	    if (!((n = series.length) > 1)) return;
	    for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
	      s0 = s1, s1 = series[order[i]];
	      for (var j = 0; j < m; ++j) {
	        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
	      }
	    }
	  }

	  function none$1(series) {
	    var n = series.length, o = new Array(n);
	    while (--n >= 0) o[n] = n;
	    return o;
	  }

	  function stackValue(d, key) {
	    return d[key];
	  }

	  function stack() {
	    var keys = constant([]),
	        order = none$1,
	        offset = none,
	        value = stackValue;

	    function stack(data) {
	      var kz = keys.apply(this, arguments),
	          i,
	          m = data.length,
	          n = kz.length,
	          sz = new Array(n),
	          oz;

	      for (i = 0; i < n; ++i) {
	        for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
	          si[j] = sij = [0, +value(data[j], ki, j, data)];
	          sij.data = data[j];
	        }
	        si.key = ki;
	      }

	      for (i = 0, oz = order(sz); i < n; ++i) {
	        sz[oz[i]].index = i;
	      }

	      offset(sz, oz);
	      return sz;
	    }

	    stack.keys = function(_) {
	      return arguments.length ? (keys = typeof _ === "function" ? _ : constant(slice$1.call(_)), stack) : keys;
	    };

	    stack.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
	    };

	    stack.order = function(_) {
	      return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant(slice$1.call(_)), stack) : order;
	    };

	    stack.offset = function(_) {
	      return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
	    };

	    return stack;
	  }

	  function expand(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
	      for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
	      if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
	    }
	    none(series, order);
	  }

	  function silhouette(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
	      for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
	      s0[j][1] += s0[j][0] = -y / 2;
	    }
	    none(series, order);
	  }

	  function wiggle(series, order) {
	    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
	    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
	      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
	        var si = series[order[i]],
	            sij0 = si[j][1] || 0,
	            sij1 = si[j - 1][1] || 0,
	            s3 = (sij0 - sij1) / 2;
	        for (var k = 0; k < i; ++k) {
	          var sk = series[order[k]],
	              skj0 = sk[j][1] || 0,
	              skj1 = sk[j - 1][1] || 0;
	          s3 += skj0 - skj1;
	        }
	        s1 += sij0, s2 += s3 * sij0;
	      }
	      s0[j - 1][1] += s0[j - 1][0] = y;
	      if (s1) y -= s2 / s1;
	    }
	    s0[j - 1][1] += s0[j - 1][0] = y;
	    none(series, order);
	  }

	  function ascending(series) {
	    var sums = series.map(sum);
	    return none$1(series).sort(function(a, b) { return sums[a] - sums[b]; });
	  }

	  function sum(series) {
	    var s = 0, i = -1, n = series.length, v;
	    while (++i < n) if (v = +series[i][1]) s += v;
	    return s;
	  }

	  function descending(series) {
	    return ascending(series).reverse();
	  }

	  function insideOut(series) {
	    var n = series.length,
	        i,
	        j,
	        sums = series.map(sum),
	        order = none$1(series).sort(function(a, b) { return sums[b] - sums[a]; }),
	        top = 0,
	        bottom = 0,
	        tops = [],
	        bottoms = [];

	    for (i = 0; i < n; ++i) {
	      j = order[i];
	      if (top < bottom) {
	        top += sums[j];
	        tops.push(j);
	      } else {
	        bottom += sums[j];
	        bottoms.push(j);
	      }
	    }

	    return bottoms.reverse().concat(tops);
	  }

	  function reverse(series) {
	    return none$1(series).reverse();
	  }

	  var version = "0.5.1";

	  exports.version = version;
	  exports.arc = arc;
	  exports.area = area;
	  exports.line = line;
	  exports.pie = pie;
	  exports.radialArea = radialArea;
	  exports.radialLine = radialLine;
	  exports.symbol = symbol;
	  exports.symbols = symbols;
	  exports.symbolCircle = circle;
	  exports.symbolCross = cross;
	  exports.symbolDiamond = diamond;
	  exports.symbolSquare = square;
	  exports.symbolStar = star;
	  exports.symbolTriangle = triangle;
	  exports.symbolWye = wye;
	  exports.curveBasisClosed = basisClosed;
	  exports.curveBasisOpen = basisOpen;
	  exports.curveBasis = basis;
	  exports.curveBundle = bundle;
	  exports.curveCardinalClosed = cardinalClosed;
	  exports.curveCardinalOpen = cardinalOpen;
	  exports.curveCardinal = cardinal;
	  exports.curveCatmullRomClosed = catmullRomClosed;
	  exports.curveCatmullRomOpen = catmullRomOpen;
	  exports.curveCatmullRom = catmullRom;
	  exports.curveLinearClosed = linearClosed;
	  exports.curveLinear = curveLinear;
	  exports.curveMonotoneX = monotoneX;
	  exports.curveMonotoneY = monotoneY;
	  exports.curveNatural = natural;
	  exports.curveStep = step;
	  exports.curveStepAfter = stepAfter;
	  exports.curveStepBefore = stepBefore;
	  exports.stack = stack;
	  exports.stackOffsetExpand = expand;
	  exports.stackOffsetNone = none;
	  exports.stackOffsetSilhouette = silhouette;
	  exports.stackOffsetWiggle = wiggle;
	  exports.stackOrderAscending = ascending;
	  exports.stackOrderDescending = descending;
	  exports.stackOrderInsideOut = insideOut;
	  exports.stackOrderNone = none$1;
	  exports.stackOrderReverse = reverse;

	}));

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_path = {})));
	}(this, function (exports) { 'use strict';

	  var pi = Math.PI;
	  var tau = 2 * pi;
	  var epsilon = 1e-6;
	  var tauEpsilon = tau - epsilon;
	  function Path() {
	    this._x0 = this._y0 = // start of current subpath
	    this._x1 = this._y1 = null; // end of current subpath
	    this._ = [];
	  }

	  function path() {
	    return new Path;
	  }

	  Path.prototype = path.prototype = {
	    moveTo: function(x, y) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y);
	    },
	    closePath: function() {
	      if (this._x1 !== null) {
	        this._x1 = this._x0, this._y1 = this._y0;
	        this._.push("Z");
	      }
	    },
	    lineTo: function(x, y) {
	      this._.push("L", this._x1 = +x, ",", this._y1 = +y);
	    },
	    quadraticCurveTo: function(x1, y1, x, y) {
	      this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	      this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    arcTo: function(x1, y1, x2, y2, r) {
	      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
	      var x0 = this._x1,
	          y0 = this._y1,
	          x21 = x2 - x1,
	          y21 = y2 - y1,
	          x01 = x0 - x1,
	          y01 = y0 - y1,
	          l01_2 = x01 * x01 + y01 * y01;

	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);

	      // Is this path empty? Move to (x1,y1).
	      if (this._x1 === null) {
	        this._.push(
	          "M", this._x1 = x1, ",", this._y1 = y1
	        );
	      }

	      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	      else if (!(l01_2 > epsilon));

	      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	      // Equivalently, is (x1,y1) coincident with (x2,y2)?
	      // Or, is the radius zero? Line to (x1,y1).
	      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
	        this._.push(
	          "L", this._x1 = x1, ",", this._y1 = y1
	        );
	      }

	      // Otherwise, draw an arc!
	      else {
	        var x20 = x2 - x0,
	            y20 = y2 - y0,
	            l21_2 = x21 * x21 + y21 * y21,
	            l20_2 = x20 * x20 + y20 * y20,
	            l21 = Math.sqrt(l21_2),
	            l01 = Math.sqrt(l01_2),
	            l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	            t01 = l / l01,
	            t21 = l / l21;

	        // If the start tangent is not coincident with (x0,y0), line to.
	        if (Math.abs(t01 - 1) > epsilon) {
	          this._.push(
	            "L", x1 + t01 * x01, ",", y1 + t01 * y01
	          );
	        }

	        this._.push(
	          "A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21
	        );
	      }
	    },
	    arc: function(x, y, r, a0, a1, ccw) {
	      x = +x, y = +y, r = +r;
	      var dx = r * Math.cos(a0),
	          dy = r * Math.sin(a0),
	          x0 = x + dx,
	          y0 = y + dy,
	          cw = 1 ^ ccw,
	          da = ccw ? a0 - a1 : a1 - a0;

	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);

	      // Is this path empty? Move to (x0,y0).
	      if (this._x1 === null) {
	        this._.push(
	          "M", x0, ",", y0
	        );
	      }

	      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
	        this._.push(
	          "L", x0, ",", y0
	        );
	      }

	      // Is this arc empty? We’re done.
	      if (!r) return;

	      // Is this a complete circle? Draw two arcs to complete the circle.
	      if (da > tauEpsilon) {
	        this._.push(
	          "A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy,
	          "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0
	        );
	      }

	      // Otherwise, draw an arc!
	      else {
	        if (da < 0) da = da % tau + tau;
	        this._.push(
	          "A", r, ",", r, ",0,", +(da >= pi), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1)
	        );
	      }
	    },
	    rect: function(x, y, w, h) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z");
	    },
	    toString: function() {
	      return this._.join("");
	    }
	  };

	  var version = "0.1.4";

	  exports.version = version;
	  exports.path = path;

	}));

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Rectangle
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rectangle = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Rectangle, _Component);

	  function Rectangle() {
	    _classCallCheck(this, Rectangle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).apply(this, arguments));
	  }

	  _createClass(Rectangle, [{
	    key: 'getPath',
	    value: function getPath(x, y, width, height, radius) {
	      var maxRadius = Math.min(width / 2, height / 2);
	      var newRadius = [];
	      var path = undefined;

	      if (maxRadius > 0 && radius instanceof Array) {
	        for (var i = 0, len = 4; i < len; i++) {
	          newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
	        }

	        path = 'M' + x + ',' + (y + newRadius[0]);

	        if (newRadius[0] > 0) {
	          path += 'A ' + newRadius[0] + ',' + newRadius[0] + ',0,0,1,' + (x + newRadius[0]) + ',' + y;
	        }

	        path += 'L ' + (x + width - newRadius[1]) + ',' + y;

	        if (newRadius[1] > 0) {
	          path += 'A ' + newRadius[1] + ',' + newRadius[1] + ',0,0,1,' + (x + width) + ',' + (y + newRadius[1]);
	        }
	        path += 'L ' + (x + width) + ',' + (y + height - newRadius[2]);

	        if (newRadius[2] > 0) {
	          path += 'A ' + newRadius[2] + ',' + newRadius[2] + ',0,0,1,' + (x + width - newRadius[2]) + ',' + (y + height);
	        }
	        path += 'L ' + (x + newRadius[3]) + ',' + (y + height);

	        if (newRadius[3] > 0) {
	          path += 'A ' + newRadius[3] + ',' + newRadius[3] + ',0,0,1,' + x + ',' + (y + height - newRadius[3]);
	        }
	        path += 'Z';
	      } else if (maxRadius > 0 && radius === +radius && radius > 0) {
	        newRadius = radius > maxRadius ? maxRadius : radius;

	        path = 'M ' + x + ',' + (y + newRadius) + ' A ' + newRadius + ',' + newRadius + ',0,0,1,' + (x + newRadius) + ',' + y + '\n              L ' + (x + width - newRadius) + ',' + y + '\n              A ' + newRadius + ',' + newRadius + ',0,0,1,' + (x + width) + ',' + (y + newRadius) + '\n              L ' + (x + width) + ',' + (y + height - newRadius) + '\n              A ' + newRadius + ',' + newRadius + ',0,0,1,' + (x + width - newRadius) + ',' + (y + height) + '\n              L ' + (x + newRadius) + ',' + (y + height) + '\n              A ' + newRadius + ',' + newRadius + ',0,0,1,' + x + ',' + (y + height - newRadius) + ' Z';
	      } else {
	        path = 'M ' + x + ',' + y + ' h ' + width + ' v ' + height + ' h ' + -width + ' Z';
	      }

	      return path;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var x = _props.x;
	      var y = _props.y;
	      var width = _props.width;
	      var height = _props.height;
	      var radius = _props.radius;
	      var onClick = _props.onClick;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseLeave = _props.onMouseLeave;
	      var className = _props.className;


	      if (x !== +x || y !== +y || width !== +width || height !== +height) {
	        return null;
	      }

	      var layerClass = (0, _classnames2.default)('recharts-rectangle', className);

	      return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        className: layerClass,
	        onMouseEnter: onMouseEnter,
	        onMouseLeave: onMouseLeave,
	        onClick: onClick,
	        d: this.getPath(x, y, width, height, radius)
	      }));
	    }
	  }]);

	  return Rectangle;
	}(_react.Component), _class2.displayName = 'Rectangle', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  x: _react.PropTypes.number,
	  y: _react.PropTypes.number,
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}), _class2.defaultProps = {
	  x: 0,
	  y: 0,
	  width: 0,
	  height: 0,
	  // The radius of border
	  // The radius of four corners when radius is a number
	  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
	  radius: 0,
	  stroke: 'none',
	  strokeWidth: 1,
	  strokeDasharray: 'none',
	  fill: '#000',
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onClick: function onClick() {}
	}, _temp)) || _class;

	exports.default = Rectangle;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Triangle
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rectangle = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Rectangle, _Component);

	  function Rectangle() {
	    _classCallCheck(this, Rectangle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).apply(this, arguments));
	  }

	  _createClass(Rectangle, [{
	    key: 'getPath',
	    value: function getPath(points) {
	      if (!points || !points.length) {
	        return '';
	      }

	      var ary = points.map(function (entry) {
	        return entry.x + ' ' + entry.y;
	      });

	      return 'M' + ary.join('L') + 'Z';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var points = _props.points;
	      var radius = _props.radius;
	      var onClick = _props.onClick;
	      var className = _props.className;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseLeave = _props.onMouseLeave;

	      var layerClass = (0, _classnames2.default)('recharts-triangle', className);

	      return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        className: layerClass,
	        onMouseEnter: onMouseEnter,
	        onMouseLeave: onMouseLeave,
	        onClick: onClick,
	        d: this.getPath(points, radius)
	      }));
	    }
	  }]);

	  return Rectangle;
	}(_react.Component), _class2.displayName = 'Rectangle', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  })),
	  radius: _react.PropTypes.number,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}), _class2.defaultProps = {
	  radius: 0,
	  stroke: 'none',
	  strokeWidth: 1,
	  strokeDasharray: 'none',
	  fill: '#000',
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onClick: function onClick() {}
	}, _temp)) || _class;

	exports.default = Rectangle;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Polygon
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Polygon = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Polygon, _Component);

	  function Polygon() {
	    _classCallCheck(this, Polygon);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).apply(this, arguments));
	  }

	  _createClass(Polygon, [{
	    key: 'getPolygonPoints',
	    value: function getPolygonPoints(points) {
	      return points.reduce(function (result, entry) {
	        if (entry.x === +entry.x && entry.y === +entry.y) {
	          result.push([entry.x, entry.y]);
	        }

	        return result;
	      }, []).join(' ');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var points = _props.points;
	      var className = _props.className;


	      if (!points || !points.length) {
	        return null;
	      }

	      var layerClass = (0, _classnames2.default)('recharts-polygon', className);

	      return _react2.default.createElement('polygon', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        className: layerClass,
	        points: this.getPolygonPoints(points)
	      }));
	    }
	  }]);

	  return Polygon;
	}(_react.Component), _class2.displayName = 'Polygon', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  }))
	}), _class2.defaultProps = {
	  fill: 'none',
	  stroke: '#333',
	  strokeWidth: 1
	}, _temp)) || _class;

	exports.default = Polygon;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Dot
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dot = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Dot, _Component);

	  function Dot() {
	    _classCallCheck(this, Dot);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dot).apply(this, arguments));
	  }

	  _createClass(Dot, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var cx = _props.cx;
	      var cy = _props.cy;
	      var r = _props.r;
	      var className = _props.className;

	      var layerClass = (0, _classnames2.default)('recharts-dot', className);

	      if (cx === +cx && cy === +cy && r === +r) {
	        return _react2.default.createElement('circle', _extends({}, this.props, { className: layerClass }));
	      }

	      return null;
	    }
	  }]);

	  return Dot;
	}(_react.Component), _class2.displayName = 'Dot', _class2.propTypes = {
	  className: _react.PropTypes.string,
	  cx: _react.PropTypes.number,
	  cy: _react.PropTypes.number,
	  r: _react.PropTypes.number
	}, _temp)) || _class;

	exports.default = Dot;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Cross
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cross = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Cross, _Component);

	  function Cross() {
	    _classCallCheck(this, Cross);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cross).apply(this, arguments));
	  }

	  _createClass(Cross, [{
	    key: 'getPath',
	    value: function getPath(x, y, width, height, top, left) {
	      return 'M' + x + ',' + top + 'v' + height + 'M' + left + ',' + y + 'h' + width;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var x = _props.x;
	      var y = _props.y;
	      var width = _props.width;
	      var height = _props.height;
	      var top = _props.top;
	      var left = _props.left;
	      var onClick = _props.onClick;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseLeave = _props.onMouseLeave;
	      var className = _props.className;


	      if (!(0, _isNumber2.default)(x) || !(0, _isNumber2.default)(y) || !(0, _isNumber2.default)(width) || !(0, _isNumber2.default)(height) || !(0, _isNumber2.default)(top) || !(0, _isNumber2.default)(left)) {
	        return null;
	      }

	      return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        className: (0, _classnames2.default)('recharts-cross', className),
	        onMouseEnter: onMouseEnter,
	        onMouseLeave: onMouseLeave,
	        onClick: onClick,
	        d: this.getPath(x, y, width, height, top, left)
	      }));
	    }
	  }]);

	  return Cross;
	}(_react.Component), _class2.displayName = 'Cross', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  x: _react.PropTypes.number,
	  y: _react.PropTypes.number,
	  top: _react.PropTypes.number,
	  left: _react.PropTypes.number,
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  className: _react.PropTypes.string,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}), _class2.defaultProps = {
	  x: 0,
	  y: 0,
	  top: 0,
	  left: 0,
	  width: 0,
	  height: 0,
	  stroke: '#000',
	  fill: 'none',
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onClick: function onClick() {}
	}, _temp)) || _class;

	exports.default = Cross;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Polar Grid
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _PolarUtils = __webpack_require__(125);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PolarGrid = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(PolarGrid, _Component);

	  function PolarGrid() {
	    _classCallCheck(this, PolarGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PolarGrid).apply(this, arguments));
	  }

	  _createClass(PolarGrid, [{
	    key: 'renderPolarAngles',


	    /**
	     * Draw axis of radial line
	     * @return {[type]} The lines
	     */
	    value: function renderPolarAngles() {
	      var _props = this.props;
	      var cx = _props.cx;
	      var cy = _props.cy;
	      var innerRadius = _props.innerRadius;
	      var outerRadius = _props.outerRadius;
	      var polarAngles = _props.polarAngles;


	      if (!polarAngles || !polarAngles.length) {
	        return null;
	      }
	      var props = _extends({
	        stroke: '#ccc'
	      }, (0, _ReactUtils.getPresentationAttributes)(this.props));

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-polar-grid-angle' },
	        polarAngles.map(function (entry, i) {
	          var start = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, entry);
	          var end = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, entry);

	          return _react2.default.createElement('line', _extends({}, props, {
	            key: 'line-' + i,
	            x1: start.x,
	            y1: start.y,
	            x2: end.x,
	            y2: end.y
	          }));
	        })
	      );
	    }
	    /**
	     * Draw concentric circles
	     * @param {Number} radius The radius of circle
	     * @param {Number} index  The index of circle
	     * @return {ReactElement} circle
	     */

	  }, {
	    key: 'renderConcentricCircle',
	    value: function renderConcentricCircle(radius, index) {
	      var _props2 = this.props;
	      var cx = _props2.cx;
	      var cy = _props2.cy;

	      var props = _extends({
	        stroke: '#ccc',
	        fill: 'none'
	      }, (0, _ReactUtils.getPresentationAttributes)(this.props));

	      return _react2.default.createElement('circle', _extends({}, props, {
	        className: 'recharts-polar-grid-concentric-circle',
	        key: 'circle-' + index,
	        cx: cx,
	        cy: cy,
	        r: radius
	      }));
	    }

	    /**
	     * Draw concentric polygons
	     * @param {Number} radius The radius of polygon
	     * @param {Number} index  The index of polygon
	     * @return {ReactElement} polygon
	     */

	  }, {
	    key: 'renderConcentricPolygon',
	    value: function renderConcentricPolygon(radius, index) {
	      var _props3 = this.props;
	      var cx = _props3.cx;
	      var cy = _props3.cy;
	      var polarAngles = _props3.polarAngles;

	      var props = _extends({
	        stroke: '#ccc',
	        fill: 'none'
	      }, (0, _ReactUtils.getPresentationAttributes)(this.props));
	      var path = '';

	      polarAngles.forEach(function (angle, i) {
	        var point = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle);

	        if (i) {
	          path += 'L ' + point.x + ',' + point.y;
	        } else {
	          path += 'M ' + point.x + ',' + point.y;
	        }
	      });
	      path += 'Z';

	      return _react2.default.createElement('path', _extends({}, props, {
	        className: 'recharts-polar-grid-concentric-polygon',
	        key: 'path-' + index,
	        d: path
	      }));
	    }

	    /**
	     * Draw concentric axis
	     * @return {ReactElement} Concentric axis
	     * @todo Optimize the name
	     */

	  }, {
	    key: 'renderConcentricPath',
	    value: function renderConcentricPath() {
	      var _this2 = this;

	      var _props4 = this.props;
	      var polarRadius = _props4.polarRadius;
	      var gridType = _props4.gridType;


	      if (!polarRadius || !polarRadius.length) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-polar-grid-concentric' },
	        polarRadius.map(function (entry, i) {
	          return gridType === 'circle' ? _this2.renderConcentricCircle(entry, i) : _this2.renderConcentricPolygon(entry, i);
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var outerRadius = this.props.outerRadius;


	      if (outerRadius <= 0) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-polar-grid' },
	        this.renderPolarAngles(),
	        this.renderConcentricPath()
	      );
	    }
	  }]);

	  return PolarGrid;
	}(_react.Component), _class2.displayName = 'PolarGrid', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  cx: _react.PropTypes.number,
	  cy: _react.PropTypes.number,
	  innerRadius: _react.PropTypes.number,
	  outerRadius: _react.PropTypes.number,

	  polarAngles: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  polarRadius: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  gridType: _react.PropTypes.oneOf(['polygon', 'circle'])
	}), _class2.defaultProps = {
	  cx: 0,
	  cy: 0,
	  innerRadius: 0,
	  outerRadius: 0,
	  gridType: 'polygon'
	}, _temp)) || _class;

	exports.default = PolarGrid;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _maxBy = __webpack_require__(136);

	var _maxBy2 = _interopRequireDefault(_maxBy);

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isString = __webpack_require__(103);

	var _isString2 = _interopRequireDefault(_isString);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview The axis of polar coordinate system
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _ReactUtils = __webpack_require__(124);

	var _PolarUtils = __webpack_require__(125);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PolarRadiusAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(PolarRadiusAxis, _Component);

	  function PolarRadiusAxis() {
	    _classCallCheck(this, PolarRadiusAxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PolarRadiusAxis).apply(this, arguments));
	  }

	  _createClass(PolarRadiusAxis, [{
	    key: 'getTickValueCoord',


	    /**
	     * Calculate the coordinate of tick
	     * @param  {Object} radius The data of a simple tick
	     * @return {Object} (x, y)
	     */
	    value: function getTickValueCoord(_ref) {
	      var radius = _ref.radius;
	      var _props = this.props;
	      var angle = _props.angle;
	      var cx = _props.cx;
	      var cy = _props.cy;


	      return (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle);
	    }
	  }, {
	    key: 'getTickTextAnchor',
	    value: function getTickTextAnchor() {
	      var orientation = this.props.orientation;

	      var textAnchor = undefined;

	      switch (orientation) {
	        case 'left':
	          textAnchor = 'end';
	          break;
	        case 'right':
	          textAnchor = 'start';
	          break;
	        default:
	          textAnchor = 'middle';
	          break;
	      }

	      return textAnchor;
	    }
	  }, {
	    key: 'renderAxisLine',
	    value: function renderAxisLine() {
	      var _props2 = this.props;
	      var cx = _props2.cx;
	      var cy = _props2.cy;
	      var angle = _props2.angle;
	      var ticks = _props2.ticks;
	      var axisLine = _props2.axisLine;

	      var extent = ticks.reduce(function (result, entry) {
	        return [Math.min(result[0], entry.radius), Math.max(result[1], entry.radius)];
	      }, [Infinity, -Infinity]);
	      var point0 = (0, _PolarUtils.polarToCartesian)(cx, cy, extent[0], angle);
	      var point1 = (0, _PolarUtils.polarToCartesian)(cx, cy, extent[1], angle);

	      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        fill: 'none'
	      }, (0, _ReactUtils.getPresentationAttributes)(axisLine), {
	        x1: point0.x,
	        y1: point0.y,
	        x2: point1.x,
	        y2: point1.y
	      });

	      return _react2.default.createElement('line', _extends({ className: 'recharts-polar-radius-axis-line' }, props));
	    }
	  }, {
	    key: 'renderTicks',
	    value: function renderTicks() {
	      var _this2 = this;

	      var _props3 = this.props;
	      var ticks = _props3.ticks;
	      var tick = _props3.tick;
	      var angle = _props3.angle;
	      var tickFormatter = _props3.tickFormatter;
	      var stroke = _props3.stroke;

	      var textAnchor = this.getTickTextAnchor();
	      var axisProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);
	      var isTickElement = _react2.default.isValidElement(tick);

	      var items = ticks.map(function (entry, i) {
	        var coord = _this2.getTickValueCoord(entry);
	        var tickProps = _extends({
	          textAnchor: textAnchor,
	          transform: 'rotate(' + (90 - angle) + ', ' + coord.x + ', ' + coord.y + ')'
	        }, axisProps, {
	          stroke: 'none', fill: stroke
	        }, customTickProps, {
	          index: i, payload: entry
	        }, coord);

	        return _react2.default.createElement(
	          'g',
	          { className: 'recharts-polar-radius-axis-tick', key: 'tick-' + i },
	          isTickElement ? _react2.default.cloneElement(tick, tickProps) : _react2.default.createElement(
	            'text',
	            _extends({}, tickProps, { className: 'recharts-polar-radius-axis-tick-value' }),
	            tickFormatter ? tickFormatter(entry.value) : entry.value
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-polar-radius-axis-ticks' },
	        items
	      );
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      var label = this.props.label;


	      if (_react2.default.isValidElement(label)) {
	        return _react2.default.cloneElement(label, this.props);
	      } else if ((0, _isString2.default)(label) || (0, _isNumber2.default)(label)) {
	        var _props4 = this.props;
	        var ticks = _props4.ticks;
	        var angle = _props4.angle;
	        var stroke = _props4.stroke;

	        var maxRadiusTick = (0, _maxBy2.default)(ticks, function (entry) {
	          return entry.radius || 0;
	        });
	        var radius = maxRadiusTick.radius || 0;
	        var coord = this.getTickValueCoord({ radius: radius + 10 });

	        var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	          stroke: 'none',
	          fill: stroke
	        }, coord, {
	          textAnchor: 'middle',
	          transform: 'rotate(' + (90 - angle) + ', ' + coord.x + ', ' + coord.y + ')'
	        });

	        return _react2.default.createElement(
	          'g',
	          { className: 'recharts-polar-radius-axis-label' },
	          _react2.default.createElement(
	            'text',
	            props,
	            label
	          )
	        );
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var ticks = _props5.ticks;
	      var axisLine = _props5.axisLine;
	      var tick = _props5.tick;


	      if (!ticks || !ticks.length) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-polar-radius-axis' },
	        axisLine && this.renderAxisLine(),
	        tick && this.renderTicks(),
	        this.renderLabel()
	      );
	    }
	  }]);

	  return PolarRadiusAxis;
	}(_react.Component), _class2.displayName = 'PolarRadiusAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  cx: _react.PropTypes.number,
	  cy: _react.PropTypes.number,
	  hide: _react.PropTypes.bool,

	  angle: _react.PropTypes.number,
	  tickCount: _react.PropTypes.number,
	  ticks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.any,
	    radius: _react.PropTypes.value
	  })),
	  orientation: _react.PropTypes.oneOf(['left', 'right', 'middle']),
	  axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element]),
	  tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element]),
	  stroke: _react.PropTypes.string,
	  tickFormatter: _react.PropTypes.func,
	  domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])]))
	}), _class2.defaultProps = {
	  cx: 0,
	  cy: 0,
	  angle: 0,
	  orientation: 'right',
	  stroke: '#ccc',
	  axisLine: true,
	  tick: true,
	  tickCount: 5,
	  domain: [0, 'auto']
	}, _temp)) || _class;

	exports.default = PolarRadiusAxis;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var baseExtremum = __webpack_require__(137),
	    baseIteratee = __webpack_require__(138),
	    gt = __webpack_require__(163);

	/**
	 * This method is like `_.max` except that it accepts `iteratee` which is
	 * invoked for each element in `array` to generate the criterion by which
	 * the value is ranked. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
	 * @returns {*} Returns the maximum value.
	 * @example
	 *
	 * var objects = [{ 'n': 1 }, { 'n': 2 }];
	 *
	 * _.maxBy(objects, function(o) { return o.n; });
	 * // => { 'n': 2 }
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.maxBy(objects, 'n');
	 * // => { 'n': 2 }
	 */
	function maxBy(array, iteratee) {
	  return (array && array.length)
	    ? baseExtremum(array, baseIteratee(iteratee), gt)
	    : undefined;
	}

	module.exports = maxBy;


/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * The base implementation of methods like `_.max` and `_.min` which accepts a
	 * `comparator` to determine the extremum value.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The iteratee invoked per iteration.
	 * @param {Function} comparator The comparator used to compare values.
	 * @returns {*} Returns the extremum value.
	 */
	function baseExtremum(array, iteratee, comparator) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index],
	        current = iteratee(value);

	    if (current != null && (computed === undefined
	          ? current === current
	          : comparator(current, computed)
	        )) {
	      var computed = current,
	          result = value;
	    }
	  }
	  return result;
	}

	module.exports = baseExtremum;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(139),
	    baseMatchesProperty = __webpack_require__(146),
	    identity = __webpack_require__(160),
	    isArray = __webpack_require__(102),
	    property = __webpack_require__(161);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  var type = typeof value;
	  if (type == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(140),
	    getMatchData = __webpack_require__(141);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];

	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value &&
	        (value !== undefined || (key in Object(object)));
	    };
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(48),
	    baseIsEqual = __webpack_require__(46);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack,
	          result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;

	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(142),
	    toPairs = __webpack_require__(143);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(66);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(144),
	    keys = __webpack_require__(92);

	/**
	 * Creates an array of own enumerable key-value pairs for `object` which
	 * can be consumed by `_.fromPairs`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	function toPairs(object) {
	  return baseToPairs(object, keys(object));
	}

	module.exports = toPairs;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(145);

	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the new array of key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}

	module.exports = baseToPairs;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(46),
	    get = __webpack_require__(147),
	    hasIn = __webpack_require__(154);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(148);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined` the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(149),
	    isKey = __webpack_require__(153);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path + ''] : baseCastPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(102),
	    stringToPath = __webpack_require__(150);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function baseCastPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = baseCastPath;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(151);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	function stringToPath(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = stringToPath;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(86),
	    isSymbol = __webpack_require__(152);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = Symbol ? symbolProto.toString : undefined;

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return Symbol ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toString;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(68);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(102);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (typeof value == 'number') {
	    return true;
	  }
	  return !isArray(value) &&
	    (reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}

	module.exports = isKey;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(155),
	    hasPath = __webpack_require__(156);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b.c');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b', 'c']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(149),
	    isArguments = __webpack_require__(96),
	    isArray = __webpack_require__(102),
	    isIndex = __webpack_require__(104),
	    isKey = __webpack_require__(153),
	    isLength = __webpack_require__(101),
	    isString = __webpack_require__(103),
	    last = __webpack_require__(157),
	    parent = __webpack_require__(158);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  if (object == null) {
	    return false;
	  }
	  var result = hasFunc(object, path);
	  if (!result && !isKey(path)) {
	    path = baseCastPath(path);
	    object = parent(object, path);
	    if (object != null) {
	      path = last(path);
	      result = hasFunc(object, path);
	    }
	  }
	  var length = object ? object.length : undefined;
	  return result || (
	    !!length && isLength(length) && isIndex(path, length) &&
	    (isArray(object) || isString(object) || isArguments(object))
	  );
	}

	module.exports = hasPath;


/***/ },
/* 157 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(159),
	    get = __webpack_require__(147);

	/**
	 * Gets the parent value at `path` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path to get the parent value of.
	 * @returns {*} Returns the parent value.
	 */
	function parent(object, path) {
	  return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
	}

	module.exports = parent;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(100),
	    basePropertyDeep = __webpack_require__(162),
	    isKey = __webpack_require__(153);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(148);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 163 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is greater than `other`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	 * @example
	 *
	 * _.gt(3, 1);
	 * // => true
	 *
	 * _.gt(3, 3);
	 * // => false
	 *
	 * _.gt(1, 3);
	 * // => false
	 */
	function gt(value, other) {
	  return value > other;
	}

	module.exports = gt;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Layer
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layer = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Layer, _Component);

	  function Layer() {
	    _classCallCheck(this, Layer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layer).apply(this, arguments));
	  }

	  _createClass(Layer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;

	      var others = _objectWithoutProperties(_props, ['children', 'className']);

	      var layerClass = (0, _classnames2.default)('recharts-layer', className);

	      return _react2.default.createElement(
	        'g',
	        _extends({ className: layerClass }, others),
	        children
	      );
	    }
	  }]);

	  return Layer;
	}(_react.Component), _class2.displayName = 'Layer', _class2.propTypes = {
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
	}, _temp)) || _class;

	exports.default = Layer;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Axis of radial direction
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _ReactUtils = __webpack_require__(124);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _Polygon = __webpack_require__(131);

	var _Polygon2 = _interopRequireDefault(_Polygon);

	var _PolarUtils = __webpack_require__(125);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RADIAN = Math.PI / 180;
	var eps = 1e-5;

	var PolarAngleAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(PolarAngleAxis, _Component);

	  function PolarAngleAxis() {
	    _classCallCheck(this, PolarAngleAxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PolarAngleAxis).apply(this, arguments));
	  }

	  _createClass(PolarAngleAxis, [{
	    key: 'getTickLineCoord',


	    /**
	     * Calculate the coordinate of line endpoint
	     * @param  {Object} data The Data if ticks
	     * @return {Object} (x0, y0): The start point of text,
	     *                  (x1, y1): The end point close to text,
	     *                  (x2, y2): The end point close to axis
	     */
	    value: function getTickLineCoord(data) {
	      var _props = this.props;
	      var cx = _props.cx;
	      var cy = _props.cy;
	      var radius = _props.radius;
	      var orientation = _props.orientation;
	      var tickLine = _props.tickLine;

	      var tickLineSize = tickLine && tickLine.size || 8;
	      var p1 = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, data.angle);
	      var p2 = (0, _PolarUtils.polarToCartesian)(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.angle);

	      return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
	    }
	    /**
	     * Get the text-anchor of each tick
	     * @param  {Object} data Data of ticks
	     * @return {String} text-anchor
	     */

	  }, {
	    key: 'getTickTextAnchor',
	    value: function getTickTextAnchor(data) {
	      var orientation = this.props.orientation;

	      var cos = Math.cos(-data.angle * RADIAN);
	      var textAnchor = undefined;

	      if (cos > eps) {
	        textAnchor = orientation === 'outer' ? 'start' : 'end';
	      } else if (cos < -eps) {
	        textAnchor = orientation === 'outer' ? 'end' : 'start';
	      } else {
	        textAnchor = 'middle';
	      }

	      return textAnchor;
	    }
	  }, {
	    key: 'renderAxisLine',
	    value: function renderAxisLine() {
	      var _props2 = this.props;
	      var cx = _props2.cx;
	      var cy = _props2.cy;
	      var radius = _props2.radius;
	      var axisLine = _props2.axisLine;
	      var axisLineType = _props2.axisLineType;

	      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        fill: 'none'
	      }, (0, _ReactUtils.getPresentationAttributes)(axisLine));

	      if (axisLineType === 'circle') {
	        return _react2.default.createElement(_Dot2.default, _extends({
	          className: 'recharts-polar-angle-axis-line'
	        }, props, {
	          cx: cx,
	          cy: cy,
	          r: radius
	        }));
	      }
	      var ticks = this.props.ticks;

	      var points = ticks.map(function (entry) {
	        return (0, _PolarUtils.polarToCartesian)(cx, cy, radius, entry.angle);
	      });

	      return _react2.default.createElement(_Polygon2.default, _extends({ className: 'recharts-polar-angle-axis-line' }, props, { points: points }));
	    }
	  }, {
	    key: 'renderTicks',
	    value: function renderTicks() {
	      var _this2 = this;

	      var _props3 = this.props;
	      var ticks = _props3.ticks;
	      var tick = _props3.tick;
	      var tickLine = _props3.tickLine;
	      var tickFormatter = _props3.tickFormatter;
	      var stroke = _props3.stroke;

	      var axisProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);
	      var isTickElement = _react2.default.isValidElement(tick);
	      var tickLineProps = _extends({}, axisProps, { fill: 'none' }, (0, _ReactUtils.getPresentationAttributes)(tickLine));

	      var items = ticks.map(function (entry, i) {
	        var lineCoord = _this2.getTickLineCoord(entry);
	        var textAnchor = _this2.getTickTextAnchor(entry);
	        var tickProps = _extends({
	          textAnchor: textAnchor
	        }, axisProps, {
	          stroke: 'none', fill: stroke
	        }, customTickProps, {
	          index: i, payload: entry,
	          x: lineCoord.x2, y: lineCoord.y2
	        });
	        var tickItem = undefined;

	        if (tick) {
	          tickItem = isTickElement ? _react2.default.cloneElement(tick, tickProps) : _react2.default.createElement(
	            'text',
	            _extends({}, tickProps, { className: 'recharts-polar-angle-axis-tick-value' }),
	            tickFormatter ? tickFormatter(entry.value) : entry.value
	          );
	        }

	        return _react2.default.createElement(
	          'g',
	          { className: 'recharts-polar-angle-axis-tick', key: 'tick-' + i },
	          tickLine && _react2.default.createElement('line', _extends({
	            className: 'recharts-polar-angle-axis-tick-line'
	          }, tickLineProps, lineCoord)),
	          tick && tickItem
	        );
	      });

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-polar-angle-axis-ticks' },
	        items
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var ticks = _props4.ticks;
	      var radius = _props4.radius;
	      var axisLine = _props4.axisLine;
	      var tickLine = _props4.tickLine;


	      if (radius <= 0 || !ticks || !ticks.length) {
	        return null;
	      }

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-polar-angle-axis' },
	        axisLine && this.renderAxisLine(),
	        this.renderTicks()
	      );
	    }
	  }]);

	  return PolarAngleAxis;
	}(_react.Component), _class2.displayName = 'PolarAngleAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  cx: _react.PropTypes.number,
	  cy: _react.PropTypes.number,
	  radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  hide: _react.PropTypes.bool,

	  axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  axisLineType: _react.PropTypes.oneOf(['polygon', 'circle']),
	  tickLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element]),

	  ticks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.any,
	    angle: _react.PropTypes.number
	  })),
	  stroke: _react.PropTypes.string,
	  orientation: _react.PropTypes.oneOf(['inner', 'outer']),
	  tickFormatter: _react.PropTypes.func
	}), _class2.defaultProps = {
	  cx: 0,
	  cy: 0,
	  orientation: 'outer',
	  fill: '#666',
	  stroke: '#ccc',
	  axisLine: true,
	  tickLine: true,
	  tick: true,
	  hide: false
	}, _temp)) || _class;

	exports.default = PolarAngleAxis;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Render sectors of a pie
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Sector = __webpack_require__(123);

	var _Sector2 = _interopRequireDefault(_Sector);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	var _reactSmooth = __webpack_require__(167);

	var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

	var _ReactUtils = __webpack_require__(124);

	var _PolarUtils = __webpack_require__(125);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pie = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Pie, _Component);

	  function Pie(props, ctx) {
	    _classCallCheck(this, Pie);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pie).call(this, props, ctx));

	    _this.handleAnimationEnd = function () {
	      _this.setState({
	        isAnimationFinished: true
	      });
	    };

	    _this.handleSectorLeave = function (data, index, e) {
	      var onMouseLeave = _this.props.onMouseLeave;


	      _this.setState({
	        activeIndex: -1
	      }, onMouseLeave);
	    };

	    _this.state = {
	      activeIndex: -1,
	      selectedIndex: -1,
	      isAnimationFinished: false
	    };

	    if (!_this.id) {
	      _this.id = 'clipPath' + Date.now();
	    }
	    return _this;
	  }

	  _createClass(Pie, [{
	    key: 'getDeltaAngle',
	    value: function getDeltaAngle() {
	      var _props = this.props;
	      var startAngle = _props.startAngle;
	      var endAngle = _props.endAngle;

	      var sign = Math.sign(endAngle - startAngle);
	      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

	      return sign * deltaAngle;
	    }
	  }, {
	    key: 'getSectors',
	    value: function getSectors() {
	      var _props2 = this.props;
	      var cx = _props2.cx;
	      var cy = _props2.cy;
	      var innerRadius = _props2.innerRadius;
	      var outerRadius = _props2.outerRadius;
	      var startAngle = _props2.startAngle;
	      var data = _props2.data;
	      var minAngle = _props2.minAngle;
	      var endAngle = _props2.endAngle;
	      var valueKey = _props2.valueKey;

	      var len = data.length;
	      var deltaAngle = this.getDeltaAngle();
	      var absDeltaAngle = Math.abs(deltaAngle);

	      var sum = data.reduce(function (result, entry) {
	        return result + entry[valueKey];
	      }, 0);

	      var sectors = [];
	      var prev = undefined;

	      if (sum > 0) {
	        sectors = data.map(function (entry, i) {
	          var percent = entry[valueKey] / sum;
	          var _startAngle = undefined;
	          var _endAngle = undefined;

	          if (i) {
	            _startAngle = deltaAngle < 0 ? prev.endAngle : prev.startAngle;
	          } else {
	            _startAngle = startAngle;
	          }

	          _endAngle = _startAngle + Math.sign(deltaAngle) * (minAngle + percent * (absDeltaAngle - len * minAngle));

	          prev = _extends({}, entry, {
	            cx: cx,
	            cy: cy,
	            innerRadius: innerRadius,
	            outerRadius: outerRadius,
	            startAngle: deltaAngle < 0 ? _startAngle : _endAngle,
	            endAngle: deltaAngle < 0 ? _endAngle : _startAngle,
	            payload: entry,
	            midAngle: (_startAngle + _endAngle) / 2
	          });

	          return prev;
	        });
	      }

	      return sectors;
	    }
	  }, {
	    key: 'getTextAnchor',
	    value: function getTextAnchor(x, cx) {
	      if (x > cx) {
	        return 'start';
	      } else if (x < cx) {
	        return 'end';
	      }

	      return 'middle';
	    }
	  }, {
	    key: 'handleSectorEnter',
	    value: function handleSectorEnter(data, index, e) {
	      var onMouseEnter = this.props.onMouseEnter;


	      this.setState({
	        activeIndex: index
	      }, function () {
	        if (onMouseEnter) {
	          onMouseEnter(data, index, e);
	        }
	      });
	    }
	  }, {
	    key: 'handleSectorClick',
	    value: function handleSectorClick(data, index, e) {
	      var onClick = this.props.onClick;


	      this.setState({
	        selectedIndex: index
	      }, onClick);
	    }
	  }, {
	    key: 'renderClipPath',
	    value: function renderClipPath() {
	      var _props3 = this.props;
	      var cx = _props3.cx;
	      var cy = _props3.cy;
	      var hoverOffset = _props3.hoverOffset;
	      var selectedOffset = _props3.selectedOffset;
	      var outerRadius = _props3.outerRadius;
	      var innerRadius = _props3.innerRadius;
	      var startAngle = _props3.startAngle;
	      var isAnimationActive = _props3.isAnimationActive;
	      var animationDuration = _props3.animationDuration;
	      var animationEasing = _props3.animationEasing;
	      var animationBegin = _props3.animationBegin;


	      return _react2.default.createElement(
	        'defs',
	        null,
	        _react2.default.createElement(
	          'clipPath',
	          { id: this.id },
	          _react2.default.createElement(
	            _reactSmooth2.default,
	            { easing: animationEasing,
	              isActive: isAnimationActive,
	              duration: animationDuration,
	              animationBegin: animationBegin,
	              onAnimationEnd: this.handleAnimationEnd,
	              from: { endAngle: startAngle },
	              to: { endAngle: this.props.endAngle }
	            },
	            function (_ref) {
	              var endAngle = _ref.endAngle;
	              return _react2.default.createElement(_Sector2.default, { cx: cx,
	                cy: cy,
	                outerRadius: outerRadius + hoverOffset + selectedOffset,
	                innerRadius: innerRadius,
	                startAngle: startAngle,
	                endAngle: endAngle
	              });
	            }
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderLabels',
	    value: function renderLabels(sectors) {
	      var _this2 = this;

	      var isAnimationActive = this.props.isAnimationActive;


	      if (isAnimationActive && !this.state.isAnimationFinished) {
	        return null;
	      }
	      var _props4 = this.props;
	      var label = _props4.label;
	      var valueKey = _props4.valueKey;

	      var pieProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
	      var isLabelElement = _react2.default.isValidElement(label);
	      var offsetRadius = customLabelProps && customLabelProps.offsetRadius || 20;

	      var labels = sectors.map(function (entry, i) {
	        var midAngle = (entry.startAngle + entry.endAngle) / 2;
	        var endPoint = (0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
	        var labelProps = _extends({}, pieProps, entry, {
	          stroke: 'none'
	        }, customLabelProps, {
	          index: i,
	          textAnchor: _this2.getTextAnchor(endPoint.x, entry.cx)
	        }, endPoint);
	        var lineProps = _extends({}, pieProps, entry, {
	          fill: 'none',
	          stroke: entry.fill
	        }, customLabelProps, {
	          points: [(0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
	        });

	        return isLabelElement ? _react2.default.cloneElement(label, { labelProps: labelProps, key: 'label-' + i }) : _react2.default.createElement(
	          'g',
	          { key: 'label-' + i },
	          _react2.default.createElement(_Curve2.default, _extends({}, lineProps, { type: 'linear', className: 'recharts-pie-label-line' })),
	          _react2.default.createElement(
	            'text',
	            _extends({}, labelProps, { className: 'recharts-pie-label-text' }),
	            entry[valueKey]
	          )
	        );
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-pie-labels' },
	        labels
	      );
	    }
	  }, {
	    key: 'renderSectors',
	    value: function renderSectors(sectors) {
	      var _this3 = this;

	      var _state = this.state;
	      var activeIndex = _state.activeIndex;
	      var selectedIndex = _state.selectedIndex;
	      var _props5 = this.props;
	      var selectedOffset = _props5.selectedOffset;
	      var hoverOffset = _props5.hoverOffset;


	      return sectors.map(function (entry, i) {
	        var innerRadius = entry.innerRadius;
	        var outerRadius = entry.outerRadius;
	        var cx = entry.cx;
	        var cy = entry.cy;
	        var midAngle = entry.midAngle;

	        var finalOuterRadius = outerRadius;
	        var finalCx = cx;
	        var finalCy = cy;

	        if (activeIndex === i) {
	          finalOuterRadius = outerRadius + hoverOffset;
	        }
	        if (selectedIndex === i && innerRadius === 0) {
	          var finalCenter = (0, _PolarUtils.polarToCartesian)(cx, cy, selectedOffset, midAngle);
	          finalCx = finalCenter.x;
	          finalCy = finalCenter.y;
	        }

	        return _react2.default.createElement(_Sector2.default, _extends({}, entry, {
	          outerRadius: finalOuterRadius,
	          cx: finalCx,
	          cy: finalCy,
	          className: 'recharts-pie-sector',
	          onMouseEnter: _this3.handleSectorEnter.bind(_this3, entry, i),
	          onMouseLeave: _this3.handleSectorLeave,
	          onClick: _this3.handleSectorClick.bind(_this3, entry, i),
	          key: 'sector-' + i
	        }));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props6 = this.props;
	      var data = _props6.data;
	      var className = _props6.className;
	      var label = _props6.label;
	      var cx = _props6.cx;
	      var cy = _props6.cy;
	      var innerRadius = _props6.innerRadius;
	      var outerRadius = _props6.outerRadius;


	      if (!data || !data.length || !(0, _isNumber2.default)(cx) || !(0, _isNumber2.default)(cy) || !(0, _isNumber2.default)(innerRadius) || !(0, _isNumber2.default)(outerRadius)) {
	        return null;
	      }

	      var sectors = this.getSectors();
	      var layerClass = (0, _classnames2.default)('recharts-pie', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: layerClass },
	        this.renderClipPath(),
	        _react2.default.createElement(
	          'g',
	          { clipPath: 'url(#' + this.id + ')' },
	          this.renderSectors(sectors)
	        ),
	        label && this.renderLabels(sectors)
	      );
	    }
	  }]);

	  return Pie;
	}(_react.Component), _class2.displayName = 'Pie', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  startAngle: _react.PropTypes.number,
	  endAngle: _react.PropTypes.number,
	  innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  nameKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  valueKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  data: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  minAngle: _react.PropTypes.number,
	  legendType: _react.PropTypes.string,
	  label: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.bool]),

	  hoverOffset: _react.PropTypes.number,
	  selectedOffset: _react.PropTypes.number,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  isAnimationActive: _react.PropTypes.bool,
	  animationBegin: _react.PropTypes.number,
	  animationDuration: _react.PropTypes.number,
	  animationEasing: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
	}), _class2.defaultProps = {
	  stroke: '#fff',
	  fill: '#808080',
	  legendType: 'rect',
	  // The abscissa of pole
	  cx: '50%',
	  // The ordinate of pole
	  cy: '50%',
	  // The start angle of first sector
	  startAngle: 0,
	  // The direction of drawing sectors
	  endAngle: 360,
	  // The inner radius of sectors
	  innerRadius: 0,
	  // The outer radius of sectors
	  outerRadius: '80%',
	  hoverOffset: 8,
	  selectedOffset: 8,
	  nameKey: 'name',
	  valueKey: 'value',
	  data: [],
	  minAngle: 0,
	  onAnimationEnd: function onAnimationEnd() {},

	  isAnimationActive: true,
	  animationBegin: 400,
	  animationDuration: 1500,
	  animationEasing: 'ease'
	}, _temp)) || _class;

	exports.default = Pie;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.translateStyle = exports.AnimateGroup = exports.configBezier = exports.configSpring = undefined;

	var _Animate = __webpack_require__(168);

	var _Animate2 = _interopRequireDefault(_Animate);

	var _easing = __webpack_require__(203);

	var _util = __webpack_require__(192);

	var _AnimateGroup = __webpack_require__(213);

	var _AnimateGroup2 = _interopRequireDefault(_AnimateGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.configSpring = _easing.configSpring;
	exports.configBezier = _easing.configBezier;
	exports.AnimateGroup = _AnimateGroup2.default;
	exports.translateStyle = _util.translateStyle;
	exports.default = _Animate2.default;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _isEqual = __webpack_require__(45);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _omit = __webpack_require__(169);

	var _omit2 = _interopRequireDefault(_omit);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _AnimateManager = __webpack_require__(191);

	var _AnimateManager2 = _interopRequireDefault(_AnimateManager);

	var _pureRenderDecorator = __webpack_require__(199);

	var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

	var _easing = __webpack_require__(203);

	var _configUpdate = __webpack_require__(204);

	var _configUpdate2 = _interopRequireDefault(_configUpdate);

	var _util = __webpack_require__(192);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Animate = (0, _pureRenderDecorator2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Animate, _Component);

	  function Animate(props, context) {
	    _classCallCheck(this, Animate);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animate).call(this, props, context));

	    var _this$props = _this.props;
	    var isActive = _this$props.isActive;
	    var attributeName = _this$props.attributeName;
	    var from = _this$props.from;
	    var to = _this$props.to;
	    var steps = _this$props.steps;
	    var children = _this$props.children;

	    if (!isActive) {
	      _this.state = {};

	      // if children is a function and animation is not active, set style to 'to'
	      if (typeof children === 'function') {
	        _this.state = { style: to };
	      }
	      return _possibleConstructorReturn(_this);
	    }

	    if (steps && steps.length) {
	      _this.state = { style: steps[0].style };
	    } else if (from) {
	      if (typeof children === 'function') {
	        _this.state = {
	          style: from
	        };

	        return _possibleConstructorReturn(_this);
	      }
	      _this.state = {
	        style: attributeName ? _defineProperty({}, attributeName, from) : from
	      };
	    } else {
	      _this.state = {};
	    }
	    return _this;
	  }

	  _createClass(Animate, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var isActive = _props.isActive;
	      var canBegin = _props.canBegin;

	      if (!isActive || !canBegin) {
	        return;
	      }

	      this.runAnimation(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var isActive = nextProps.isActive;
	      var canBegin = nextProps.canBegin;

	      if (!isActive || !canBegin) {
	        return;
	      }

	      var omitSpec = (0, _omit2.default)(this.props, ['children', 'onAnimationEnd']);
	      var omitNextSpec = (0, _omit2.default)(nextProps, ['children', 'onAnimationEnd']);

	      if ((0, _isEqual2.default)(omitSpec, omitNextSpec)) {
	        return;
	      }

	      if (this.manager) {
	        this.manager.stop();
	      }

	      if (this.stopJSAnimation) {
	        this.stopJSAnimation();
	      }

	      this.runAnimation(nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.manager) {
	        this.manager.stop();
	        this.manager = null;
	      }

	      if (this.stopJSAnimation) {
	        this.stopJSAnimation();
	      }
	    }
	  }, {
	    key: 'runJSAnimation',
	    value: function runJSAnimation(props) {
	      var _this2 = this;

	      var from = props.from;
	      var to = props.to;
	      var duration = props.duration;
	      var easing = props.easing;
	      var begin = props.begin;
	      var onAnimationEnd = props.onAnimationEnd;

	      var render = function render(style) {
	        return _this2.setState({ style: style });
	      };
	      var startAnimation = (0, _configUpdate2.default)(from, to, (0, _easing.configEasing)(easing), duration, render);

	      var finalStartAnimation = function finalStartAnimation() {
	        _this2.stopJSAnimation = startAnimation();
	      };

	      this.manager.start([from, begin, finalStartAnimation, duration, onAnimationEnd]);
	    }
	  }, {
	    key: 'runStepAnimation',
	    value: function runStepAnimation(props) {
	      var _this3 = this;

	      var steps = props.steps;
	      var begin = props.begin;
	      var _steps$ = steps[0];
	      var initialStyle = _steps$.style;
	      var _steps$$duration = _steps$.duration;
	      var initialTime = _steps$$duration === undefined ? 0 : _steps$$duration;

	      var addStyle = function addStyle(sequence, nextItem, index) {
	        if (index === 0) {
	          return sequence;
	        }

	        var duration = nextItem.duration;
	        var _nextItem$easing = nextItem.easing;
	        var easing = _nextItem$easing === undefined ? 'ease' : _nextItem$easing;
	        var style = nextItem.style;
	        var nextProperties = nextItem.properties;
	        var onAnimationEnd = nextItem.onAnimationEnd;

	        var preItem = index > 0 ? steps[index - 1] : nextItem;
	        var properties = nextProperties || (0, _util.getIntersectionKeys)(preItem.style, style).map(_util.getDashCase);

	        if (typeof easing === 'function') {
	          return [].concat(_toConsumableArray(sequence), [_this3.runJSAnimation.bind(_this3, {
	            from: preItem.style,
	            to: style,
	            duration: duration,
	            easing: easing
	          }), duration]);
	        }

	        var transition = properties.map(function (prop) {
	          return prop + ' ' + duration + 'ms ' + easing;
	        }).join(',');

	        var newStyle = _extends({}, preItem.style, style, {
	          transition: transition
	        });

	        var list = [].concat(_toConsumableArray(sequence), [newStyle, duration]);

	        if (onAnimationEnd) {
	          return [].concat(_toConsumableArray(list), [onAnimationEnd]);
	        }

	        return list;
	      };

	      return this.manager.start([].concat(_toConsumableArray(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
	    }
	  }, {
	    key: 'runAnimation',
	    value: function runAnimation(props) {
	      if (!this.manager) {
	        this.manager = (0, _AnimateManager2.default)();
	      }
	      var begin = props.begin;
	      var duration = props.duration;
	      var attributeName = props.attributeName;
	      var propsFrom = props.from;
	      var propsTo = props.to;
	      var easing = props.easing;
	      var onAnimationEnd = props.onAnimationEnd;
	      var steps = props.steps;
	      var children = props.children;

	      var manager = this.manager;
	      manager.subscribe(this.handleStyleChange.bind(this));

	      if (typeof easing === 'function' || typeof children === 'function' || easing === 'spring') {
	        this.runJSAnimation(props);
	        return;
	      }

	      var from = attributeName ? _defineProperty({}, attributeName, propsFrom) : propsFrom;
	      var to = attributeName ? _defineProperty({}, attributeName, propsTo) : propsTo;

	      if (steps.length > 1) {
	        this.runStepAnimation(props);
	        return;
	      }

	      var transition = (0, _util.getIntersectionKeys)(from, to).map(function (key) {
	        return (0, _util.getDashCase)(key) + ' ' + duration + 'ms ' + easing;
	      }).join(',');

	      manager.start([from, begin, _extends({}, to, { transition: transition }), duration, onAnimationEnd]);
	    }
	  }, {
	    key: 'handleStyleChange',
	    value: function handleStyleChange() {
	      var style = this.manager.getStyle();
	      this.setState({ style: style });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var _props2 = this.props;
	      var children = _props2.children;
	      var begin = _props2.begin;
	      var duration = _props2.duration;
	      var attributeName = _props2.attributeName;
	      var easing = _props2.easing;
	      var isActive = _props2.isActive;
	      var steps = _props2.steps;
	      var from = _props2.from;
	      var to = _props2.to;

	      var others = _objectWithoutProperties(_props2, ['children', 'begin', 'duration', 'attributeName', 'easing', 'isActive', 'steps', 'from', 'to']);

	      var count = _react.Children.count(children);

	      if (typeof children === 'function') {
	        return children(this.state.style);
	      }

	      if (!isActive || count === 0) {
	        return children;
	      }

	      var cloneContainer = function cloneContainer(container) {
	        var _container$props = container.props;
	        var _container$props$styl = _container$props.style;
	        var style = _container$props$styl === undefined ? {} : _container$props$styl;
	        var className = _container$props.className;

	        var res = (0, _react.cloneElement)(container, _extends({}, others, {
	          style: _extends({}, style, _this4.state.style),
	          className: className
	        }));
	        return res;
	      };

	      if (count === 1) {
	        var onlyChild = _react.Children.only(children);

	        return cloneContainer(_react.Children.only(children));
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react.Children.map(children, function (child) {
	          return cloneContainer(child);
	        })
	      );
	    }
	  }]);

	  return Animate;
	}(_react.Component), _class2.displayName = 'Animate', _class2.propTypes = {
	  from: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  to: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  attributeName: _react.PropTypes.string,
	  // animation duration
	  duration: _react.PropTypes.number,
	  begin: _react.PropTypes.number,
	  easing: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	  steps: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    duration: _react.PropTypes.number.isRequired,
	    style: _react.PropTypes.object.isRequired,
	    easing: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']), _react.PropTypes.func]),
	    // transition css properties(dash case), optional
	    properties: _react.PropTypes.arrayOf('string'),
	    onAnimationEnd: _react.PropTypes.func
	  })),
	  children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]),
	  isActive: _react.PropTypes.bool,
	  canBegin: _react.PropTypes.bool,
	  onAnimationEnd: _react.PropTypes.func
	}, _class2.defaultProps = {
	  begin: 0,
	  duration: 1000,
	  from: '',
	  to: '',
	  attributeName: '',
	  easing: 'ease',
	  isActive: true,
	  canBegin: true,
	  steps: [],
	  onAnimationEnd: function onAnimationEnd() {}
	}, _temp)) || _class;

	exports.default = Animate;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(145),
	    baseDifference = __webpack_require__(170),
	    baseFlatten = __webpack_require__(179),
	    basePick = __webpack_require__(181),
	    keysIn = __webpack_require__(183),
	    rest = __webpack_require__(187);

	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable properties of `object` that are not omitted.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property names to omit, specified
	 *  individually or in arrays.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = rest(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  props = arrayMap(baseFlatten(props, 1), String);
	  return basePick(object, baseDifference(keysIn(object), props));
	});

	module.exports = omit;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(171),
	    arrayIncludes = __webpack_require__(173),
	    arrayIncludesWith = __webpack_require__(176),
	    arrayMap = __webpack_require__(145),
	    baseUnary = __webpack_require__(177),
	    cacheHas = __webpack_require__(178);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support for
	 * excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(59),
	    cachePush = __webpack_require__(172);

	/**
	 *
	 * Creates a set cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.push(values[index]);
	  }
	}

	// Add functions to the `SetCache`.
	SetCache.prototype.push = cachePush;

	module.exports = SetCache;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(76);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the set cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var map = this.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;

	    hash[value] = HASH_UNDEFINED;
	  }
	  else {
	    map.set(value, HASH_UNDEFINED);
	  }
	}

	module.exports = cachePush;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(174);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  return !!array.length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(175);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 175 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 176 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.includesWith` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 177 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing wrapper metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(76);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Checks if `value` is in `cache`.
	 *
	 * @private
	 * @param {Object} cache The set cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function cacheHas(cache, value) {
	  var map = cache.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;

	    return hash[value] === HASH_UNDEFINED;
	  }
	  return map.has(value);
	}

	module.exports = cacheHas;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(180),
	    isArguments = __webpack_require__(96),
	    isArray = __webpack_require__(102),
	    isArrayLikeObject = __webpack_require__(97);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, isStrict, result) {
	  result || (result = []);

	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && isArrayLikeObject(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 180 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(182);

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property names.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return arrayReduce(props, function(result, key) {
	    if (key in object) {
	      result[key] = object[key];
	    }
	    return result;
	  }, {});
	}

	module.exports = basePick;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(184),
	    indexKeys = __webpack_require__(94),
	    isIndex = __webpack_require__(104),
	    isPrototype = __webpack_require__(105);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(185),
	    iteratorToArray = __webpack_require__(186);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	module.exports = baseKeysIn;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(70);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	module.exports = iteratorToArray;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(188),
	    toInteger = __webpack_require__(189);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 188 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(190);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(65),
	    isObject = __webpack_require__(66);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(192);

	var _raf = __webpack_require__(196);

	var _raf2 = _interopRequireDefault(_raf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var createAnimateManager = function createAnimateManager(initialStyle) {
	  var currStyle = initialStyle;
	  var handleChange = function handleChange() {};
	  var shouldStop = false;

	  return {
	    subscribe: function subscribe(listener) {
	      handleChange = listener;
	    },
	    setStyle: function setStyle(style) {
	      currStyle = (0, _util.translateStyle)(style);
	      handleChange();
	    },
	    start: function start() {
	      shouldStop = false;
	    },
	    getShouldStop: function getShouldStop() {
	      return shouldStop;
	    },
	    getStyle: function getStyle() {
	      return currStyle;
	    },
	    stop: function stop() {
	      shouldStop = true;
	    }
	  };
	};

	var applyMiddleware = function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (next) {
	    return function (style) {
	      var manager = next(style);
	      var _setStyle = manager.setStyle;
	      var chain = [];

	      var middlewareAPI = _extends({}, manager, {
	        setStyle: function setStyle(_style) {
	          return _setStyle(_style);
	        }
	      });
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _setStyle = _util.compose.apply(undefined, _toConsumableArray(chain))(manager.setStyle);

	      return _extends({}, manager, {
	        setStyle: _setStyle,
	        start: function start(_style) {
	          manager.start();
	          return _setStyle(_style);
	        }
	      });
	    };
	  };
	};

	var setStyleAsync = function setStyleAsync(_ref) {
	  var setStyle = _ref.setStyle;
	  var getShouldStop = _ref.getShouldStop;
	  return function (next) {
	    var timeout = null;

	    return function (style) {
	      if (getShouldStop()) {
	        clearTimeout(timeout);

	        return new Promise(function (resolve, reject) {
	          reject();
	        });
	      }

	      if (typeof style === 'function' || Array.isArray(style)) {
	        return next(style);
	      }

	      return new Promise(function (resolve, reject) {
	        var delay = 0;
	        var callback = next;

	        if (typeof style === 'number') {
	          delay = style;
	          callback = function callback() {};
	        }

	        timeout = setTimeout(function () {
	          // set style in next frame to avoid batch set style
	          var res = null;

	          (0, _raf2.default)(function () {
	            (0, _raf2.default)(function () {
	              res = callback(style);
	              resolve();
	              return res;
	            });
	          });
	        }, delay);
	      });
	    };
	  };
	};

	var sequenceMiddleware = function sequenceMiddleware(_ref2) {
	  var setStyle = _ref2.setStyle;
	  return function (next) {
	    return function (style) {
	      if (Array.isArray(style)) {
	        var styles = style;

	        return styles.reduce(function (result, currStyle) {
	          return result.then(function () {
	            return setStyle(currStyle);
	          }).catch(function () {});
	        }, Promise.resolve());
	      }

	      return next(style);
	    };
	  };
	};

	var thunkMiddeware = function thunkMiddeware(_ref3) {
	  var setStyle = _ref3.setStyle;
	  var getStyle = _ref3.getStyle;
	  return function (next) {
	    return function (style) {
	      if (typeof style === 'function') {
	        return style(setStyle, getStyle);
	      }

	      return next(style);
	    };
	  };
	};

	/*
	 * manager.setStyle:
	 * if style is an object, manager will set a new style.
	 * if style is a number, manager will wait time of style microsecond.
	 * if style is a function, manager will run this function bind arguments of
	 *  getStyle and setStyle.
	 * if style is an array, manager will run setStyle of every element in order.
	 */
	var finalCreateAniamteManager = (0, _util.compose)(applyMiddleware(setStyleAsync, sequenceMiddleware, thunkMiddeware))(createAnimateManager);

	exports.default = finalCreateAniamteManager;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _intersection = __webpack_require__(193);

	var _intersection2 = _interopRequireDefault(_intersection);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = exports.translateStyle = exports.mapObject = exports.judgeNeedTranslated = exports.debugf = exports.debug = exports.log = exports.generatePrefixStyle = exports.getDashCase = exports.getIntersectionKeys = undefined;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var PREFIX_LIST = ['Webkit', 'Moz', 'O', 'ms'];
	var IN_COMPATIBLE_PROPERTY = ['transform', 'transformOrigin', 'transition'];

	var getIntersectionKeys = exports.getIntersectionKeys = function getIntersectionKeys(preObj, nextObj) {
	  return (0, _intersection2.default)(Object.keys(preObj), Object.keys(nextObj));
	};

	/*
	 * @description: convert camel case to dash case
	 * string => string
	 */
	var getDashCase = exports.getDashCase = function getDashCase(name) {
	  return name.replace(/([A-Z])/g, function (v) {
	    return '-' + v.toLowerCase();
	  });
	};

	/*
	 * @description: add compatible style prefix
	 * (string, string) => object
	 */
	var generatePrefixStyle = exports.generatePrefixStyle = function generatePrefixStyle(name, value) {
	  if (!name) {
	    return null;
	  }

	  var camelName = name.replace(/(\w)/, function (v) {
	    return v.toUpperCase();
	  });

	  var result = PREFIX_LIST.reduce(function (res, entry) {
	    return _extends({}, res, _defineProperty({}, entry + camelName, value));
	  }, {});

	  result[name] = value;

	  return result;
	};

	var log = exports.log = console.log.bind(console);

	/*
	 * @description: log the value of a varible
	 * string => any => any
	 */
	var debug = exports.debug = function debug(name) {
	  return function (item) {
	    log(name, item);

	    return item;
	  };
	};

	/*
	 * @description: log name, args, return value of a function
	 * function => function
	 */
	var debugf = exports.debugf = function debugf(tag, f) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var res = f.apply(undefined, args);
	    var name = tag || f.name || 'anonymous function';
	    var argNames = '(' + args.map(JSON.stringify).join(', ') + ')';

	    log(name + ': ' + argNames + ' => ' + JSON.stringify(res));

	    return res;
	  };
	};

	/*
	 * @description: check if the received property need add compatible style prefix
	 * string => boolean
	 */
	var judgeNeedTranslated = exports.judgeNeedTranslated = function judgeNeedTranslated(property) {
	  return IN_COMPATIBLE_PROPERTY.indexOf(property) !== -1;
	};

	/*
	 * @description: map object on every element in this object.
	 * (function, object) => object
	 */
	var mapObject = exports.mapObject = function mapObject(fn, obj) {
	  return Object.keys(obj).reduce(function (res, key) {
	    return _extends({}, res, _defineProperty({}, key, fn(key, obj[key])));
	  }, {});
	};

	/*
	 * @description: add compatible prefix to style
	 * object => object
	 */
	var translateStyle = exports.translateStyle = function translateStyle(style) {
	  return Object.keys(style).reduce(function (res, key) {
	    if (judgeNeedTranslated(key)) {
	      return _extends({}, res, generatePrefixStyle(key, res[key]));
	    }

	    return res;
	  }, style);
	};

	var compose = exports.compose = function compose() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  if (!args.length) {
	    return identity;
	  }

	  var fns = args.reverse();
	  // first function can receive multiply arguments
	  var firstFn = fns[0];
	  var tailsFn = fns.slice(1);

	  return function () {
	    return tailsFn.reduce(function (res, fn) {
	      return fn(res);
	    }, firstFn.apply(undefined, arguments));
	  };
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(145),
	    baseCastArrayLikeObject = __webpack_require__(194),
	    baseIntersection = __webpack_require__(195),
	    rest = __webpack_require__(187);

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of shared values.
	 * @example
	 *
	 * _.intersection([2, 1], [4, 2], [1, 2]);
	 * // => [2]
	 */
	var intersection = rest(function(arrays) {
	  var mapped = arrayMap(arrays, baseCastArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});

	module.exports = intersection;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(97);

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the array-like object.
	 */
	function baseCastArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}

	module.exports = baseCastArrayLikeObject;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(171),
	    arrayIncludes = __webpack_require__(173),
	    arrayIncludesWith = __webpack_require__(176),
	    arrayMap = __webpack_require__(145),
	    baseUnary = __webpack_require__(177),
	    cacheHas = __webpack_require__(178);

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    caches[othIndex] = !comparator && (iteratee || array.length >= 120)
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      length = array.length,
	      seen = caches[0];

	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      var othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseIntersection;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(197)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]

	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
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
	  return raf.call(global, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(198)))

/***/ },
/* 198 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Félix Girault <felix.girault@gmail.com>
	 * @license MIT
	 */
	'use strict';

	var shallowCompare = __webpack_require__(200);



	/**
	 * Tells if a component should update given it's next props
	 * and state.
	 *
	 * @param object nextProps Next props.
	 * @param object nextState Next state.
	 */
	function shouldComponentUpdate(nextProps, nextState) {
	  return shallowCompare(this, nextProps, nextState);
	}

	/**
	 * Makes the given component "pure".
	 *
	 * @param object component Component.
	 */
	function pureRenderDecorator(component) {
	  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
	}



	module.exports = pureRenderDecorator;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(201);

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(202);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 202 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configEasing = exports.configSpring = exports.configBezier = undefined;

	var _invariant = __webpack_require__(122);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var ACCURACY = 1e-3;

	var _cubicBezier = function _cubicBezier(c1, c2) {
	  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
	};

	var _multyTime = function _multyTime(params, t) {
	  return params.map(function (param, i) {
	    return param * Math.pow(t, i);
	  }).reduce(function (pre, curr) {
	    return pre + curr;
	  });
	};

	var cubicBezier = function cubicBezier(c1, c2) {
	  return function (t) {
	    var params = _cubicBezier(c1, c2);

	    return _multyTime(params, t);
	  };
	};

	var derivativeCubicBezier = function derivativeCubicBezier(c1, c2) {
	  return function (t) {
	    var params = _cubicBezier(c1, c2);
	    var newParams = [].concat(_toConsumableArray(params.map(function (param, i) {
	      return param * i;
	    }).slice(1)), [0]);

	    return _multyTime(newParams, t);
	  };
	};

	// calculate cubic-bezier using Newton's method
	var configBezier = exports.configBezier = function configBezier() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var x1 = args[0];
	  var y1 = args[1];
	  var x2 = args[2];
	  var y2 = args[3];

	  if (args.length === 1) {
	    switch (args[0]) {
	      case 'linear':
	        x1 = 0.0;
	        y1 = 0.0;
	        x2 = 1.0;
	        y2 = 1.0;

	        break;
	      case 'ease':
	        x1 = 0.25;
	        y1 = 0.1;
	        x2 = 0.25;
	        y2 = 1.0;

	        break;
	      case 'ease-in':
	        x1 = 0.42;
	        y1 = 0.0;
	        x2 = 1.0;
	        y2 = 1.0;

	        break;
	      case 'ease-out':
	        x1 = 0.42;
	        y1 = 0.0;
	        x2 = 0.58;
	        y2 = 1.0;

	        break;
	      case 'ease-in-out':
	        x1 = 0.0;
	        y1 = 0.0;
	        x2 = 0.58;
	        y2 = 1.0;

	        break;
	      default:
	        (0, _invariant2.default)(false, '[configBezier]: arguments should be one of ' + 'oneOf \'linear\', \'ease\', \'ease-in\', \'ease-out\', ' + '\'ease-in-out\', instead received %s', args);
	    }
	  }

	  (0, _invariant2.default)([x1, x2, y1, y2].every(function (num) {
	    return typeof num === 'number' && num >= 0 && num <= 1;
	  }), '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s', args);

	  var curveX = cubicBezier(x1, x2);
	  var curveY = cubicBezier(y1, y2);
	  var derCurveX = derivativeCubicBezier(x1, x2);
	  var rangeValue = function rangeValue(value) {
	    if (value > 1) {
	      return 1;
	    } else if (value < 0) {
	      return 0;
	    }

	    return value;
	  };

	  var bezier = function bezier(_t) {
	    var t = _t > 1 ? 1 : _t;
	    var x = t;

	    for (var i = 0; i < 8; ++i) {
	      var evalT = curveX(x) - t;
	      var derVal = derCurveX(x);

	      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
	        return curveY(x);
	      }

	      x = rangeValue(x - evalT / derVal);
	    }

	    return curveY(x);
	  };

	  bezier.isStepper = false;

	  return bezier;
	};

	var configSpring = exports.configSpring = function configSpring() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _config$stiff = config.stiff;
	  var stiff = _config$stiff === undefined ? 100 : _config$stiff;
	  var _config$damping = config.damping;
	  var damping = _config$damping === undefined ? 8 : _config$damping;
	  var _config$dt = config.dt;
	  var dt = _config$dt === undefined ? 17 : _config$dt;

	  var stepper = function stepper(currX, destX, currV) {
	    var FSpring = -(currX - destX) * stiff;
	    var FDamping = currV * damping;
	    var newV = currV + (FSpring - FDamping) * dt / 1000;
	    var newX = currV * dt / 1000 + currX;

	    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
	      return [destX, 0];
	    }
	    return [newX, newV];
	  };

	  stepper.isStepper = true;
	  stepper.dt = dt;

	  return stepper;
	};

	var configEasing = exports.configEasing = function configEasing() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var easing = args[0];

	  if (typeof easing === 'string') {
	    switch (easing) {
	      case 'ease':
	      case 'ease-int-out':
	      case 'ease-out':
	      case 'ease-in':
	      case 'linear':
	        return configBezier(easing);
	      case 'spring':
	        return configSpring();
	      default:
	        (0, _invariant2.default)(false, '[configEasing]: first argument should be one of \'ease\', \'ease-in\', ' + '\'ease-out\', \'ease-in-out\', \'linear\' and \'spring\', instead  received %s', args);
	    }
	  }

	  if (typeof easing === 'function') {
	    return easing;
	  }

	  (0, _invariant2.default)(false, '[configEasing]: first argument type should be function or ' + 'string, instead received %s', args);
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _filter = __webpack_require__(205);

	var _filter2 = _interopRequireDefault(_filter);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _raf = __webpack_require__(196);

	var _raf2 = _interopRequireDefault(_raf);

	var _util = __webpack_require__(192);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alpha = function alpha(begin, end, k) {
	  return begin + (end - begin) * k;
	};

	var needContinue = function needContinue(_ref) {
	  var from = _ref.from;
	  var to = _ref.to;

	  return from !== to;
	};

	/*
	 * @description: cal new from value and velocity in each stepper
	 * @return: { [styleProperty]: { from, to, velocity } }
	 */
	var calStepperVals = function calStepperVals(easing, preVals, steps) {
	  var nextStepVals = (0, _util.mapObject)(function (key, val) {
	    if (needContinue(val)) {
	      var _easing = easing(val.from, val.to, val.velocity);

	      var _easing2 = _slicedToArray(_easing, 2);

	      var newX = _easing2[0];
	      var newV = _easing2[1];

	      return _extends({}, val, {
	        from: newX,
	        velocity: newV
	      });
	    }

	    return val;
	  }, preVals);

	  if (steps < 1) {
	    return (0, _util.mapObject)(function (key, val) {
	      if (needContinue(val)) {
	        return _extends({}, val, {
	          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
	          from: alpha(val.from, nextStepVals[key].from, steps)
	        });
	      }

	      return val;
	    }, preVals);
	  }

	  return calStepperVals(easing, nextStepVals, steps - 1);
	};

	// configure update function

	exports.default = function (from, to, easing, duration, render) {
	  var interKeys = (0, _util.getIntersectionKeys)(from, to);
	  var timingStyle = interKeys.reduce(function (res, key) {
	    return _extends({}, res, _defineProperty({}, key, [from[key], to[key]]));
	  }, {});

	  var stepperStyle = interKeys.reduce(function (res, key) {
	    return _extends({}, res, _defineProperty({}, key, {
	      from: from[key],
	      velocity: 0,
	      to: to[key]
	    }));
	  }, {});
	  var cafId = -1;
	  var preTime = undefined;
	  var beginTime = undefined;

	  var getCurrStyle = function getCurrStyle() {
	    return (0, _util.mapObject)(function (key, val) {
	      return val.from;
	    }, stepperStyle);
	  };
	  var shouldStopAnimation = function shouldStopAnimation() {
	    return !(0, _filter2.default)(stepperStyle, needContinue).length;
	  };

	  // stepper timing function like spring
	  var stepperUpdate = function stepperUpdate(now) {
	    if (!preTime) {
	      preTime = now;
	    }
	    var deltaTime = now - preTime;
	    var steps = deltaTime / easing.dt;

	    stepperStyle = calStepperVals(easing, stepperStyle, steps);
	    // get union set and add compatible prefix
	    render((0, _util.translateStyle)(_extends({}, from, to, getCurrStyle(stepperStyle))));

	    preTime = now;

	    if (!shouldStopAnimation()) {
	      cafId = (0, _raf2.default)(update);
	    }
	  };

	  // t => val timing function like cubic-bezier
	  var timingUpdate = function timingUpdate(now) {
	    if (!beginTime) {
	      beginTime = now;
	    }

	    var t = (now - beginTime) / duration;
	    var currStyle = (0, _util.mapObject)(function (key, val) {
	      return alpha.apply(undefined, _toConsumableArray(val).concat([easing(t)]));
	    }, timingStyle);

	    // get union set and add compatible prefix
	    render((0, _util.translateStyle)(_extends({}, from, to, currStyle)));

	    if (t < 1) {
	      cafId = (0, _raf2.default)(update);
	    }
	  };

	  var update = easing.isStepper ? stepperUpdate : timingUpdate;

	  // return start animation method
	  return function () {
	    (0, _raf2.default)(update);

	    // return stop animation method
	    return function () {
	      (0, _raf.cancel)(cafId);
	    };
	  };
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(206),
	    baseFilter = __webpack_require__(207),
	    baseIteratee = __webpack_require__(138),
	    isArray = __webpack_require__(102);

	/**
	 * Iterates over elements of `collection`, returning an array of all elements
	 * `predicate` returns truthy for. The predicate is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * _.filter(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, { 'age': 36, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.filter(users, 'active');
	 * // => objects for ['barney']
	 */
	function filter(collection, predicate) {
	  var func = isArray(collection) ? arrayFilter : baseFilter;
	  return func(collection, baseIteratee(predicate, 3));
	}

	module.exports = filter;


/***/ },
/* 206 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array.length,
	      resIndex = -1,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[++resIndex] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(208);

	/**
	 * The base implementation of `_.filter` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}

	module.exports = baseFilter;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(209),
	    createBaseEach = __webpack_require__(212);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(210),
	    keys = __webpack_require__(92);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(211);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 211 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(98);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsTransitionGroup = __webpack_require__(214);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _AnimateGroupChild = __webpack_require__(215);

	var _AnimateGroupChild2 = _interopRequireDefault(_AnimateGroupChild);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AnimateGroup = (_temp = _class = function (_Component) {
	  _inherits(AnimateGroup, _Component);

	  function AnimateGroup() {
	    _classCallCheck(this, AnimateGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimateGroup).apply(this, arguments));
	  }

	  _createClass(AnimateGroup, [{
	    key: '_wrapChild',
	    value: function _wrapChild(child) {
	      var _props = this.props;
	      var appear = _props.appear;
	      var leave = _props.leave;
	      var enter = _props.enter;

	      return (0, _react.createElement)(_AnimateGroupChild2.default, {
	        appear: appear,
	        leave: leave,
	        enter: enter
	      }, child);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _react.createElement)(_reactAddonsTransitionGroup2.default, {
	        childFactory: this._wrapChild.bind(this)
	      }, this.props.children);
	    }
	  }]);

	  return AnimateGroup;
	}(_react.Component), _class.propTypes = {
	  appear: _react.PropTypes.object,
	  leave: _react.PropTypes.object,
	  enter: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.element])
	}, _temp);
	exports.default = AnimateGroup;

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_214__;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _Animate = __webpack_require__(168);

	var _Animate2 = _interopRequireDefault(_Animate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AnimateGroupChild = (_temp2 = _class = function (_Component) {
	  _inherits(AnimateGroupChild, _Component);

	  function AnimateGroupChild() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AnimateGroupChild);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AnimateGroupChild)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      isActive: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AnimateGroupChild, [{
	    key: 'handleStyleActive',
	    value: function handleStyleActive(style, done) {
	      if (style) {
	        var onAnimationEnd = style.onAnimationEnd ? function () {
	          style.onAnimationEnd();
	          done();
	        } : done;

	        this.setState(_extends({}, style, {
	          onAnimationEnd: onAnimationEnd,
	          isActive: true
	        }));
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(done) {
	      this.handleStyleActive(this.props.appear, done);
	    }
	  }, {
	    key: 'omponentWillEnter',
	    value: function omponentWillEnter(done) {
	      this.handleStyleActive(this.props.enter, done);
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(done) {
	      this.handleStyleActive(this.props.leave, done);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _Animate2.default,
	        this.state,
	        _react.Children.only(this.props.children)
	      );
	    }
	  }]);

	  return AnimateGroupChild;
	}(_react.Component), _class.propTypes = {
	  appear: _react.PropTypes.object,
	  leave: _react.PropTypes.object,
	  enter: _react.PropTypes.object,
	  children: _react.PropTypes.element
	}, _temp2);
	exports.default = AnimateGroupChild;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Radar
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ReactUtils = __webpack_require__(124);

	var _Polygon = __webpack_require__(131);

	var _Polygon2 = _interopRequireDefault(_Polygon);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Radar = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Radar, _Component);

	  function Radar() {
	    _classCallCheck(this, Radar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Radar).apply(this, arguments));
	  }

	  _createClass(Radar, [{
	    key: 'renderPolygon',
	    value: function renderPolygon() {
	      var shape = this.props.shape;

	      var isShapeElement = _react2.default.isValidElement(shape);

	      return isShapeElement ? _react2.default.cloneElement(shape, this.props) : _react2.default.createElement(_Polygon2.default, this.props);
	    }
	  }, {
	    key: 'renderLabels',
	    value: function renderLabels() {
	      var _props = this.props;
	      var points = _props.points;
	      var label = _props.label;

	      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
	      var isLabelElement = _react2.default.isValidElement(label);

	      var labels = points.map(function (entry, i) {
	        var labelProps = _extends({
	          textAnchor: 'middle'
	        }, baseProps, {
	          stroke: 'none',
	          fill: baseProps && baseProps.stroke || '#666'
	        }, customLabelProps, entry, {
	          index: i,
	          key: 'label-' + i,
	          payload: entry
	        });

	        return isLabelElement ? _react2.default.cloneElement(label, labelProps) : _react2.default.createElement(
	          'text',
	          _extends({}, labelProps, { className: 'recharts-radar-label' }),
	          entry.value
	        );
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-radar-labels' },
	        labels
	      );
	    }
	  }, {
	    key: 'renderDots',
	    value: function renderDots() {
	      var _props2 = this.props;
	      var dot = _props2.dot;
	      var points = _props2.points;

	      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
	      var isDotElement = _react2.default.isValidElement(dot);

	      var dots = points.map(function (entry, i) {
	        var dotProps = _extends({
	          key: 'dot-' + i,
	          r: 3
	        }, baseProps, customDotProps, {
	          cx: entry.x,
	          cy: entry.y,
	          index: i,
	          playload: entry
	        });

	        return isDotElement ? _react2.default.cloneElement(dot, dotProps) : _react2.default.createElement(_Dot2.default, _extends({}, dotProps, { className: 'recharts-radar-dot' }));
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-radar-dots' },
	        dots
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var className = _props3.className;
	      var points = _props3.points;
	      var label = _props3.label;
	      var dot = _props3.dot;


	      if (!points || !points.length) {
	        return null;
	      }

	      var layerClass = (0, _classnames2.default)('recharts-radar', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: layerClass },
	        this.renderPolygon(),
	        label && this.renderLabels(),
	        dot && this.renderDots()
	      );
	    }
	  }]);

	  return Radar;
	}(_react.Component), _class2.displayName = 'Radar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  dataKey: _react.PropTypes.string.isRequired,

	  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    cx: _react.PropTypes.number,
	    cy: _react.PropTypes.number,
	    angle: _react.PropTypes.number,
	    radius: _react.PropTypes.number,
	    value: _react.PropTypes.number,
	    payload: _react.PropTypes.object
	  })),
	  shape: _react.PropTypes.element,
	  dot: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool]),
	  label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool])
	}), _class2.defaultProps = {
	  dot: false,
	  label: false
	}, _temp)) || _class;

	exports.default = Radar;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _uniqueId = __webpack_require__(218);

	var _uniqueId2 = _interopRequireDefault(_uniqueId);

	var _isFunction = __webpack_require__(65);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Render a group of radial bar
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Sector = __webpack_require__(123);

	var _Sector2 = _interopRequireDefault(_Sector);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _DOMUtils = __webpack_require__(116);

	var _ReactUtils = __webpack_require__(124);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _PolarUtils = __webpack_require__(125);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RADIAN = Math.PI / 180;

	var RadialBar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(RadialBar, _Component);

	  function RadialBar() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, RadialBar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RadialBar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      activeIndex: -1,
	      selectedIndex: -1
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(RadialBar, [{
	    key: 'getDeltaAngle',
	    value: function getDeltaAngle() {
	      var _props = this.props;
	      var startAngle = _props.startAngle;
	      var endAngle = _props.endAngle;

	      var sign = Math.sign(endAngle - startAngle);
	      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);

	      return sign * deltaAngle;
	    }
	  }, {
	    key: 'getSectors',
	    value: function getSectors() {
	      var _props2 = this.props;
	      var cx = _props2.cx;
	      var cy = _props2.cy;
	      var startAngle = _props2.startAngle;
	      var endAngle = _props2.endAngle;
	      var data = _props2.data;
	      var minAngle = _props2.minAngle;
	      var maxAngle = _props2.maxAngle;

	      var maxValue = Math.max.apply(null, data.map(function (entry) {
	        return Math.abs(entry.value);
	      }));
	      var absMinAngle = Math.abs(minAngle);
	      var absMaxAngle = Math.abs(maxAngle);
	      var deltaAngle = this.getDeltaAngle();
	      var gapAngle = Math.min(Math.abs(absMaxAngle - absMinAngle), 360);

	      var sectors = data.map(function (entry) {
	        var value = entry.value;
	        var _endAngle = maxValue === 0 ? startAngle : startAngle + Math.sign(value * deltaAngle) * (absMinAngle + gapAngle * Math.abs(entry.value) / maxValue);

	        return _extends({}, entry, {
	          cx: cx, cy: cy,
	          startAngle: startAngle,
	          endAngle: _endAngle,
	          payload: entry
	        });
	      });

	      return sectors;
	    }
	  }, {
	    key: 'getLabelPathArc',
	    value: function getLabelPathArc(data, labelContent, style) {
	      var label = this.props.label;

	      var labelProps = _react2.default.isValidElement(label) ? label.props : label;
	      var offsetRadius = labelProps.offsetRadius || 2;
	      var orientation = labelProps.orientation || 'inner';
	      var cx = data.cx;
	      var cy = data.cy;
	      var innerRadius = data.innerRadius;
	      var outerRadius = data.outerRadius;
	      var startAngle = data.startAngle;
	      var endAngle = data.endAngle;

	      var clockWise = this.getDeltaAngle() < 0 && data.value > 0;
	      var radius = clockWise ? innerRadius + offsetRadius : Math.max(outerRadius - offsetRadius, 0);

	      if (radius <= 0) {
	        return '';
	      }

	      var labelSize = (0, _DOMUtils.getStringSize)(labelContent, style);
	      var deltaAngle = labelSize.width / (radius * RADIAN);
	      var _startAngle = undefined;
	      var _endAngle = undefined;

	      if (clockWise) {
	        _startAngle = orientation === 'inner' ? Math.min(endAngle + deltaAngle, startAngle) : endAngle;
	        _endAngle = _startAngle - deltaAngle;
	      } else {
	        _startAngle = orientation === 'inner' ? Math.max(endAngle - deltaAngle, startAngle) : endAngle;
	        _endAngle = _startAngle + deltaAngle;
	      }

	      var startPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, _startAngle);
	      var endPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, _endAngle);

	      return 'M' + startPoint.x + ',' + startPoint.y + '\n            A' + radius + ',' + radius + ',0,\n            ' + (deltaAngle >= 180 ? 1 : 0) + ',\n            ' + (clockWise ? 1 : 0) + ',\n            ' + endPoint.x + ',' + endPoint.y;
	    }
	  }, {
	    key: 'handleSectorClick',
	    value: function handleSectorClick(data, index, e) {
	      var onClick = this.props.onClick;


	      this.setState({
	        selectedIndex: index
	      }, onClick);
	    }
	  }, {
	    key: 'handleSectorEnter',
	    value: function handleSectorEnter(data, index, e) {
	      var onMouseEnter = this.props.onMouseEnter;


	      this.setState({
	        activeIndex: index
	      }, function () {
	        if (onMouseEnter) {
	          onMouseEnter(data, index, e);
	        }
	      });
	    }
	  }, {
	    key: 'handleSectorLeave',
	    value: function handleSectorLeave(data, index, e) {
	      var onMouseLeave = this.props.onMouseLeave;


	      this.setState({
	        activeIndex: -1
	      }, onMouseLeave);
	    }
	  }, {
	    key: 'renderSectors',
	    value: function renderSectors(sectors) {
	      var _this2 = this;

	      var _props3 = this.props;
	      var className = _props3.className;
	      var shape = _props3.shape;
	      var data = _props3.data;

	      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var isShapeElement = _react2.default.isValidElement(shape);

	      return sectors.map(function (entry, i) {
	        var value = entry.value;

	        var rest = _objectWithoutProperties(entry, ['value']);

	        var props = _extends({}, baseProps, rest, {
	          onMouseEnter: _this2.handleSectorEnter.bind(_this2, entry, i),
	          onMouseLeave: _this2.handleSectorLeave.bind(_this2, entry, i),
	          onClick: _this2.handleSectorClick.bind(_this2, entry, i),
	          key: 'sector-' + i
	        });
	        if (!isShapeElement) {
	          props.className = 'recharts-radial-bar-sector';
	        }

	        return isShapeElement ? _react2.default.cloneElement(shape, props) : _react2.default.createElement(_Sector2.default, props);
	      });
	    }
	  }, {
	    key: 'renderBackground',
	    value: function renderBackground(sectors) {
	      var _props4 = this.props;
	      var startAngle = _props4.startAngle;
	      var endAngle = _props4.endAngle;
	      var background = _props4.background;

	      var isBackgroundElement = _react2.default.isValidElement(background);
	      var backgroundProps = (0, _ReactUtils.getPresentationAttributes)(background);

	      return sectors.map(function (entry, i) {
	        var value = entry.value;

	        var rest = _objectWithoutProperties(entry, ['value']);

	        var props = _extends({}, rest, {
	          fill: '#eee'
	        }, backgroundProps, {
	          startAngle: startAngle,
	          endAngle: endAngle,
	          index: i,
	          key: 'sector-' + i,
	          className: 'recharts-radial-bar-background-sector'
	        });

	        return isBackgroundElement ? _react2.default.cloneElement(background, props) : _react2.default.createElement(_Sector2.default, props);
	      });
	    }
	  }, {
	    key: 'renderLabels',
	    value: function renderLabels(sectors) {
	      var _this3 = this;

	      var label = this.props.label;

	      var isElement = _react2.default.isValidElement(label);
	      var formatter = isElement ? label.props.formatter : label.formatter;
	      var hasFormatter = (0, _isFunction2.default)(formatter);

	      return sectors.map(function (entry, i) {
	        var content = hasFormatter ? formatter(entry.value) : entry.value;
	        var id = (0, _uniqueId2.default)('recharts-defs-');

	        var style = (0, _ReactUtils.getPresentationAttributes)(label) || { fontSize: 10, fill: '#000' };
	        var path = _this3.getLabelPathArc(entry, content, style);

	        return _react2.default.createElement(
	          'text',
	          _extends({}, style, { key: 'label-' + i, className: 'recharts-radial-bar-label' }),
	          _react2.default.createElement(
	            'defs',
	            null,
	            _react2.default.createElement('path', { id: id, d: path })
	          ),
	          _react2.default.createElement(
	            'textPath',
	            { xlinkHref: '#' + id },
	            content
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var data = _props5.data;
	      var className = _props5.className;
	      var background = _props5.background;
	      var label = _props5.label;


	      if (!data || !data.length) {
	        return null;
	      }

	      var sectors = this.getSectors();
	      var layerClass = (0, _classnames2.default)('recharts-area', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: layerClass },
	        background && _react2.default.createElement(
	          _Layer2.default,
	          { className: 'recharts-radial-bar-background' },
	          this.renderBackground(sectors)
	        ),
	        _react2.default.createElement(
	          _Layer2.default,
	          { className: 'recharts-radial-bar-sectors' },
	          this.renderSectors(sectors)
	        ),
	        label && _react2.default.createElement(
	          _Layer2.default,
	          { className: 'recharts-radial-bar-labels' },
	          this.renderLabels(sectors)
	        )
	      );
	    }
	  }]);

	  return RadialBar;
	}(_react.Component), _class2.displayName = 'RadialBar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  shape: _react.PropTypes.object,

	  cx: _react.PropTypes.number,
	  cy: _react.PropTypes.number,
	  startAngle: _react.PropTypes.number,
	  endAngle: _react.PropTypes.number,
	  maxAngle: _react.PropTypes.number,
	  minAngle: _react.PropTypes.number,
	  data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    cx: _react.PropTypes.number,
	    cy: _react.PropTypes.number,
	    innerRadius: _react.PropTypes.number,
	    outerRadius: _react.PropTypes.number,
	    value: _react.PropTypes.value
	  })),
	  legendType: _react.PropTypes.string,

	  label: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.element, _react.PropTypes.object]),

	  background: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element]),

	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}), _class2.defaultProps = {
	  startAngle: 180,
	  endAngle: 0,
	  maxAngle: 135,
	  minAngle: 0,
	  stroke: '#fff',
	  fill: '#808080',
	  legendType: 'rect',
	  data: [],
	  onClick: function onClick() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	}, _temp2)) || _class;

	exports.default = RadialBar;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(151);

	/** Used to generate unique IDs. */
	var idCounter = 0;

	/**
	 * Generates a unique ID. If `prefix` is given the ID is appended to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {string} [prefix=''] The value to prefix the ID with.
	 * @returns {string} Returns the unique ID.
	 * @example
	 *
	 * _.uniqueId('contact_');
	 * // => 'contact_104'
	 *
	 * _.uniqueId();
	 * // => '105'
	 */
	function uniqueId(prefix) {
	  var id = ++idCounter;
	  return toString(prefix) + id;
	}

	module.exports = uniqueId;


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _range = __webpack_require__(220);

	var _range2 = _interopRequireDefault(_range);

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Brush
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _d3Scale = __webpack_require__(224);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Brush = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Brush, _Component);

	  function Brush(props) {
	    _classCallCheck(this, Brush);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Brush).call(this, props));

	    _this.handleMove = function (e) {
	      if (_this._leaveTimer) {
	        clearTimeout(_this._leaveTimer);
	        _this._leaveTimer = null;
	      }

	      if (_this.state.isTravellerMoving) {
	        _this.handleTravellerMove(e);
	      } else if (_this.state.isSlideMoving) {
	        _this.handleSlideMove(e);
	      }
	    };

	    _this.handleUp = function () {
	      _this.setState({
	        isTravellerMoving: false,
	        isSlideMoving: false
	      });
	    };

	    _this.handleLeaveWrapper = function () {
	      if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
	        _this._leaveTimer = setTimeout(_this.handleUp, 1000);
	      }
	    };

	    _this.handleEnterSlideOrTraveller = function () {
	      _this.setState({
	        isTextActive: true
	      });
	    };

	    _this.handleLeaveSlideOrTraveller = function () {
	      _this.setState({
	        isTextActive: false
	      });
	    };

	    _this.handleSlideDown = function (e) {
	      _this.setState({
	        isTravellerMoving: false,
	        isSlideMoving: true,
	        slideMoveStartX: e.pageX
	      });
	    };

	    _this.travellerDownHandlers = {
	      startX: _this.handleTravellerDown.bind(_this, 'startX'),
	      endX: _this.handleTravellerDown.bind(_this, 'endX')
	    };

	    if (props.data && props.data.length) {
	      var len = props.data.length;
	      var startIndex = (0, _isNumber2.default)(props.defaultStartIndex) ? props.defaultStartIndex : 0;
	      var endIndex = (0, _isNumber2.default)(props.defaultEndIndex) ? props.defaultEndIndex : len - 1;

	      _this.scale = (0, _d3Scale.scalePoint)().domain((0, _range2.default)(0, len)).range([props.x, props.x + props.width - props.travellerWidth]);
	      _this.scaleValues = _this.scale.domain().map(function (entry) {
	        return _this.scale(entry);
	      });

	      _this.state = {
	        isTextActive: false,
	        isSlideMoving: false,
	        isTravellerMoving: false,
	        startIndex: startIndex, endIndex: endIndex,
	        startX: _this.scale(startIndex),
	        endX: _this.scale(endIndex)
	      };
	    } else {
	      _this.state = {};
	    }
	    return _this;
	  }

	  _createClass(Brush, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._leaveTimer) {
	        clearTimeout(this._leaveTimer);
	        this._leaveTimer = null;
	      }
	    }
	  }, {
	    key: 'getIndexInRange',
	    value: function getIndexInRange(range, x) {
	      var len = range.length;
	      var start = 0;
	      var end = len - 1;

	      while (end - start > 1) {
	        var middle = Math.floor((start + end) / 2);

	        if (range[middle] > x) {
	          end = middle;
	        } else {
	          start = middle;
	        }
	      }

	      return x >= range[end] ? end : start;
	    }
	  }, {
	    key: 'getIndex',
	    value: function getIndex(_ref) {
	      var startX = _ref.startX;
	      var endX = _ref.endX;

	      var min = Math.min(startX, endX);
	      var max = Math.max(startX, endX);
	      var minIndex = this.getIndexInRange(this.scaleValues, min);
	      var maxIndex = this.getIndexInRange(this.scaleValues, max);

	      return {
	        startIndex: minIndex,
	        endIndex: maxIndex
	      };
	    }
	  }, {
	    key: 'handleSlideMove',
	    value: function handleSlideMove(e) {
	      var _state = this.state;
	      var slideMoveStartX = _state.slideMoveStartX;
	      var startX = _state.startX;
	      var endX = _state.endX;
	      var _props = this.props;
	      var x = _props.x;
	      var width = _props.width;
	      var travellerWidth = _props.travellerWidth;
	      var onChange = _props.onChange;

	      var delta = e.pageX - slideMoveStartX;

	      if (delta > 0) {
	        delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
	      } else if (delta < 0) {
	        delta = Math.max(delta, x - startX, x - endX);
	      }
	      var newIndex = this.getIndex({
	        startX: startX + delta,
	        endX: endX + delta
	      });

	      this.setState(_extends({
	        startX: startX + delta,
	        endX: endX + delta,
	        slideMoveStartX: e.pageX
	      }, newIndex), function () {
	        if (onChange) {
	          onChange(newIndex);
	        }
	      });
	    }
	  }, {
	    key: 'handleTravellerDown',
	    value: function handleTravellerDown(id, e) {
	      this.setState({
	        isSlideMoving: false,
	        isTravellerMoving: true,
	        movingTravellerId: id,
	        brushMoveStartX: e.pageX
	      });
	    }
	  }, {
	    key: 'handleTravellerMove',
	    value: function handleTravellerMove(e) {
	      var _extends2;

	      var _state2 = this.state;
	      var brushMoveStartX = _state2.brushMoveStartX;
	      var movingTravellerId = _state2.movingTravellerId;

	      var prevValue = this.state[movingTravellerId];
	      var _props2 = this.props;
	      var x = _props2.x;
	      var width = _props2.width;
	      var travellerWidth = _props2.travellerWidth;
	      var onChange = _props2.onChange;


	      var params = { startX: this.state.startX, endX: this.state.endX };
	      var delta = e.pageX - brushMoveStartX;

	      if (delta > 0) {
	        delta = Math.min(delta, x + width - travellerWidth - prevValue);
	      } else if (delta < 0) {
	        delta = Math.max(delta, x - prevValue);
	      }

	      params[movingTravellerId] = prevValue + delta;
	      var newIndex = this.getIndex(params);

	      this.setState(_extends((_extends2 = {}, _defineProperty(_extends2, movingTravellerId, prevValue + delta), _defineProperty(_extends2, 'brushMoveStartX', e.pageX), _extends2), newIndex), function () {
	        if (onChange) {
	          onChange(newIndex);
	        }
	      });
	    }
	  }, {
	    key: 'renderBackground',
	    value: function renderBackground() {
	      var _props3 = this.props;
	      var x = _props3.x;
	      var y = _props3.y;
	      var width = _props3.width;
	      var height = _props3.height;
	      var fill = _props3.fill;
	      var stroke = _props3.stroke;


	      return _react2.default.createElement('rect', {
	        stroke: stroke,
	        fill: fill,
	        x: x,
	        y: y,
	        width: width,
	        height: height
	      });
	    }
	  }, {
	    key: 'renderTraveller',
	    value: function renderTraveller(startX, id) {
	      var _props4 = this.props;
	      var y = _props4.y;
	      var travellerWidth = _props4.travellerWidth;
	      var height = _props4.height;
	      var stroke = _props4.stroke;

	      var lineY = Math.floor(y + height / 2) - 1;
	      var x = Math.max(startX, this.props.x);

	      return _react2.default.createElement(
	        _Layer2.default,
	        {
	          className: 'recharts-brush-traveller',
	          onMouseEnter: this.handleEnterSlideOrTraveller,
	          onMouseLeave: this.handleLeaveSlideOrTraveller,
	          onMouseDown: this.travellerDownHandlers[id],
	          style: { cursor: 'col-resize' }
	        },
	        _react2.default.createElement('rect', {
	          x: x,
	          y: y,
	          width: travellerWidth,
	          height: height,
	          fill: stroke,
	          stroke: 'none'
	        }),
	        _react2.default.createElement('line', {
	          x1: x + 1,
	          y1: lineY,
	          x2: x + travellerWidth - 1,
	          y2: lineY,
	          fill: 'none',
	          stroke: '#fff'
	        }),
	        _react2.default.createElement('line', {
	          x1: x + 1,
	          y1: lineY + 2,
	          x2: x + travellerWidth - 1,
	          y2: lineY + 2,
	          fill: 'none',
	          stroke: '#fff'
	        })
	      );
	    }
	  }, {
	    key: 'renderSlide',
	    value: function renderSlide(startX, endX) {
	      var _props5 = this.props;
	      var y = _props5.y;
	      var height = _props5.height;
	      var stroke = _props5.stroke;


	      return _react2.default.createElement('rect', {
	        className: 'recharts-brush-slide',
	        onMouseEnter: this.handleEnterSlideOrTraveller,
	        onMouseLeave: this.handleLeaveSlideOrTraveller,
	        onMouseDown: this.handleSlideDown,
	        style: { cursor: 'move' },
	        stroke: 'none',
	        fill: stroke,
	        fillOpacity: 0.2,
	        x: Math.min(startX, endX),
	        y: y,
	        width: Math.abs(endX - startX),
	        height: height
	      });
	    }
	  }, {
	    key: 'renderText',
	    value: function renderText() {
	      var _props6 = this.props;
	      var data = _props6.data;
	      var y = _props6.y;
	      var height = _props6.height;
	      var travellerWidth = _props6.travellerWidth;
	      var stroke = _props6.stroke;
	      var _state3 = this.state;
	      var startIndex = _state3.startIndex;
	      var endIndex = _state3.endIndex;
	      var startX = _state3.startX;
	      var endX = _state3.endX;

	      var offset = 5;
	      var style = {
	        pointerEvents: 'none',
	        fill: stroke
	      };

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-brush-texts' },
	        _react2.default.createElement(
	          'text',
	          {
	            textAnchor: 'end',
	            style: style,
	            dy: offset,
	            x: Math.min(startX, endX) - offset,
	            y: y + height / 2
	          },
	          data[startIndex]
	        ),
	        _react2.default.createElement(
	          'text',
	          {
	            textAnchor: 'start',
	            style: style,
	            dy: offset,
	            x: Math.max(startX, endX) + travellerWidth + offset,
	            y: y + height / 2
	          },
	          data[endIndex]
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props7 = this.props;
	      var x = _props7.x;
	      var width = _props7.width;
	      var travellerWidth = _props7.travellerWidth;
	      var data = _props7.data;
	      var className = _props7.className;
	      var _state4 = this.state;
	      var startX = _state4.startX;
	      var endX = _state4.endX;
	      var isTextActive = _state4.isTextActive;
	      var isSlideMoving = _state4.isSlideMoving;
	      var isTravellerMoving = _state4.isTravellerMoving;


	      if (!data || !data.length) {
	        return null;
	      }

	      var layerClass = (0, _classnames2.default)('recharts-bursh', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        {
	          className: layerClass,
	          onMouseUp: this.handleUp,
	          onMouseMove: this.handleMove,
	          onMouseLeave: this.handleLeaveWrapper
	        },
	        this.renderBackground(),
	        this.renderSlide(startX, endX),
	        this.renderTraveller(startX, 'startX'),
	        this.renderTraveller(endX, 'endX'),
	        (isTextActive || isSlideMoving || isTravellerMoving) && this.renderText()
	      );
	    }
	  }]);

	  return Brush;
	}(_react.Component), _class2.displayName = 'Brush', _class2.propTypes = {
	  className: _react.PropTypes.string,

	  fill: _react.PropTypes.string,
	  stroke: _react.PropTypes.string,
	  x: _react.PropTypes.number.isRequired,
	  y: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  data: _react.PropTypes.array,

	  travellerWidth: _react.PropTypes.number,
	  defaultStartIndex: _react.PropTypes.number,
	  defaultEndIndex: _react.PropTypes.number,

	  onChange: _react.PropTypes.func
	}, _class2.defaultProps = {
	  x: 0,
	  y: 0,
	  width: 0,
	  height: 40,
	  travellerWidth: 5,
	  fill: '#fff',
	  stroke: '#666'
	}, _temp)) || _class;

	exports.default = Brush;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var createRange = __webpack_require__(221);

	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the new array of numbers.
	 * @example
	 *
	 * _.range(4);
	 * // => [0, 1, 2, 3]
	 *
	 * _.range(-4);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 5);
	 * // => [1, 2, 3, 4]
	 *
	 * _.range(0, 20, 5);
	 * // => [0, 5, 10, 15]
	 *
	 * _.range(0, -4, -1);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 4, 0);
	 * // => [1, 1, 1]
	 *
	 * _.range(0);
	 * // => []
	 */
	var range = createRange();

	module.exports = range;


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var baseRange = __webpack_require__(222),
	    isIterateeCall = __webpack_require__(223),
	    toNumber = __webpack_require__(190);

	/**
	 * Creates a `_.range` or `_.rangeRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new range function.
	 */
	function createRange(fromRight) {
	  return function(start, end, step) {
	    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	      end = step = undefined;
	    }
	    // Ensure the sign of `-0` is preserved.
	    start = toNumber(start);
	    start = start === start ? start : 0;
	    if (end === undefined) {
	      end = start;
	      start = 0;
	    } else {
	      end = toNumber(end) || 0;
	    }
	    step = step === undefined ? (start < end ? 1 : -1) : (toNumber(step) || 0);
	    return baseRange(start, end, step, fromRight);
	  };
	}

	module.exports = createRange;


/***/ },
/* 222 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;

	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments to numbers.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the new array of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	      result = Array(length);

	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}

	module.exports = baseRange;


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(53),
	    isArrayLike = __webpack_require__(98),
	    isIndex = __webpack_require__(104),
	    isObject = __webpack_require__(66);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(225), __webpack_require__(226), __webpack_require__(228), __webpack_require__(229), __webpack_require__(230), __webpack_require__(231), __webpack_require__(227)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-array', 'd3-interpolate', 'd3-format', 'd3-collection', 'd3-time', 'd3-time-format', 'd3-color'], factory) :
	  (factory((global.d3_scale = {}),global.d3_array,global.d3_interpolate,global.d3_format,global.d3_collection,global.d3_time,global.d3_time_format,global.d3_color));
	}(this, function (exports,d3Array,d3Interpolate,d3Format,d3Collection,d3Time,d3TimeFormat,d3Color) { 'use strict';

	  var array = Array.prototype;

	  var map$1 = array.map;
	  var slice = array.slice;

	  var implicit = {name: "implicit"};

	  function ordinal() {
	    var index = d3Collection.map(),
	        domain = [],
	        range = [],
	        unknown = implicit;

	    function scale(d) {
	      var key = d + "", i = index.get(key);
	      if (!i) {
	        if (unknown !== implicit) return unknown;
	        index.set(key, i = domain.push(d));
	      }
	      return range[(i - 1) % range.length];
	    }

	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [], index = d3Collection.map();
	      var i = -1, n = _.length, d, key;
	      while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	      return scale;
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), scale) : range.slice();
	    };

	    scale.unknown = function(_) {
	      return arguments.length ? (unknown = _, scale) : unknown;
	    };

	    scale.copy = function() {
	      return ordinal()
	          .domain(domain)
	          .range(range)
	          .unknown(unknown);
	    };

	    return scale;
	  }

	  function band() {
	    var scale = ordinal().unknown(undefined),
	        domain = scale.domain,
	        ordinalRange = scale.range,
	        range = [0, 1],
	        step,
	        bandwidth,
	        round = false,
	        paddingInner = 0,
	        paddingOuter = 0,
	        align = 0.5;

	    delete scale.unknown;

	    function rescale() {
	      var n = domain().length,
	          reverse = range[1] < range[0],
	          start = range[reverse - 0],
	          stop = range[1 - reverse];
	      step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
	      if (round) step = Math.floor(step);
	      start += (stop - start - step * (n - paddingInner)) * align;
	      bandwidth = step * (1 - paddingInner);
	      if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
	      var values = d3Array.range(n).map(function(i) { return start + step * i; });
	      return ordinalRange(reverse ? values.reverse() : values);
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
	    };

	    scale.rangeRound = function(_) {
	      return range = [+_[0], +_[1]], round = true, rescale();
	    };

	    scale.bandwidth = function() {
	      return bandwidth;
	    };

	    scale.step = function() {
	      return step;
	    };

	    scale.round = function(_) {
	      return arguments.length ? (round = !!_, rescale()) : round;
	    };

	    scale.padding = function(_) {
	      return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };

	    scale.paddingInner = function(_) {
	      return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };

	    scale.paddingOuter = function(_) {
	      return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
	    };

	    scale.align = function(_) {
	      return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
	    };

	    scale.copy = function() {
	      return band()
	          .domain(domain())
	          .range(range)
	          .round(round)
	          .paddingInner(paddingInner)
	          .paddingOuter(paddingOuter)
	          .align(align);
	    };

	    return rescale();
	  }

	  function pointish(scale) {
	    var copy = scale.copy;

	    scale.padding = scale.paddingOuter;
	    delete scale.paddingInner;
	    delete scale.paddingOuter;

	    scale.copy = function() {
	      return pointish(copy());
	    };

	    return scale;
	  }

	  function point() {
	    return pointish(band().paddingInner(1));
	  }

	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }

	  function number(x) {
	    return +x;
	  }

	  var unit = [0, 1];

	  function deinterpolateLinear(a, b) {
	    return (b -= (a = +a))
	        ? function(x) { return (x - a) / b; }
	        : constant(b);
	  }

	  function deinterpolateClamp(deinterpolate) {
	    return function(a, b) {
	      var d = deinterpolate(a = +a, b = +b);
	      return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
	    };
	  }

	  function reinterpolateClamp(reinterpolate) {
	    return function(a, b) {
	      var r = reinterpolate(a = +a, b = +b);
	      return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
	    };
	  }

	  function bimap(domain, range, deinterpolate, reinterpolate) {
	    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
	    if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
	    else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
	    return function(x) { return r0(d0(x)); };
	  }

	  function polymap(domain, range, deinterpolate, reinterpolate) {
	    var j = Math.min(domain.length, range.length) - 1,
	        d = new Array(j),
	        r = new Array(j),
	        i = -1;

	    // Reverse descending domains.
	    if (domain[j] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }

	    while (++i < j) {
	      d[i] = deinterpolate(domain[i], domain[i + 1]);
	      r[i] = reinterpolate(range[i], range[i + 1]);
	    }

	    return function(x) {
	      var i = d3Array.bisect(domain, x, 1, j) - 1;
	      return r[i](d[i](x));
	    };
	  }

	  function copy(source, target) {
	    return target
	        .domain(source.domain())
	        .range(source.range())
	        .interpolate(source.interpolate())
	        .clamp(source.clamp());
	  }

	  // deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
	  // reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
	  function continuous(deinterpolate, reinterpolate) {
	    var domain = unit,
	        range = unit,
	        interpolate = d3Interpolate.interpolate,
	        clamp = false,
	        output,
	        input;

	    function rescale() {
	      var map = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
	      output = map(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate);
	      input = map(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate);
	      return scale;
	    }

	    function scale(x) {
	      return output(+x);
	    }

	    scale.invert = function(y) {
	      return input(+y);
	    };

	    scale.domain = function(_) {
	      return arguments.length ? (domain = map$1.call(_, number), rescale()) : domain.slice();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
	    };

	    scale.rangeRound = function(_) {
	      return range = slice.call(_), interpolate = d3Interpolate.interpolateRound, rescale();
	    };

	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, rescale()) : clamp;
	    };

	    scale.interpolate = function(_) {
	      return arguments.length ? (interpolate = _, rescale()) : interpolate;
	    };

	    return rescale();
	  }

	  function tickFormat(domain, count, specifier) {
	    var start = domain[0],
	        stop = domain[domain.length - 1],
	        step = d3Array.tickStep(start, stop, count == null ? 10 : count),
	        precision;
	    specifier = d3Format.formatSpecifier(specifier == null ? ",f" : specifier);
	    switch (specifier.type) {
	      case "s": {
	        var value = Math.max(Math.abs(start), Math.abs(stop));
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionPrefix(step, value))) specifier.precision = precision;
	        return d3Format.formatPrefix(specifier, value);
	      }
	      case "":
	      case "e":
	      case "g":
	      case "p":
	      case "r": {
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
	        break;
	      }
	      case "f":
	      case "%": {
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	        break;
	      }
	    }
	    return d3Format.format(specifier);
	  }

	  function linearish(scale) {
	    var domain = scale.domain;

	    scale.ticks = function(count) {
	      var d = domain();
	      return d3Array.ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	    };

	    scale.tickFormat = function(count, specifier) {
	      return tickFormat(domain(), count, specifier);
	    };

	    scale.nice = function(count) {
	      var d = domain(),
	          i = d.length - 1,
	          n = count == null ? 10 : count,
	          start = d[0],
	          stop = d[i],
	          step = d3Array.tickStep(start, stop, n);

	      if (step) {
	        step = d3Array.tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
	        d[0] = Math.floor(start / step) * step;
	        d[i] = Math.ceil(stop / step) * step;
	        domain(d);
	      }

	      return scale;
	    };

	    return scale;
	  }

	  function linear() {
	    var scale = continuous(deinterpolateLinear, d3Interpolate.interpolateNumber);

	    scale.copy = function() {
	      return copy(scale, linear());
	    };

	    return linearish(scale);
	  }

	  function identity() {
	    var domain = [0, 1];

	    function scale(x) {
	      return +x;
	    }

	    scale.invert = scale;

	    scale.domain = scale.range = function(_) {
	      return arguments.length ? (domain = map$1.call(_, number), scale) : domain.slice();
	    };

	    scale.copy = function() {
	      return identity().domain(domain);
	    };

	    return linearish(scale);
	  }

	  function nice(domain, interval) {
	    domain = domain.slice();

	    var i0 = 0,
	        i1 = domain.length - 1,
	        x0 = domain[i0],
	        x1 = domain[i1],
	        t;

	    if (x1 < x0) {
	      t = i0, i0 = i1, i1 = t;
	      t = x0, x0 = x1, x1 = t;
	    }

	    domain[i0] = interval.floor(x0);
	    domain[i1] = interval.ceil(x1);
	    return domain;
	  }

	  var tickFormat10 = d3Format.format(".0e");
	  var tickFormatOther = d3Format.format(",");
	  function deinterpolate(a, b) {
	    return (b = Math.log(b / a))
	        ? function(x) { return Math.log(x / a) / b; }
	        : constant(b);
	  }

	  function reinterpolate(a, b) {
	    return a < 0
	        ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
	        : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
	  }

	  function pow10(x) {
	    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
	  }

	  function powp(base) {
	    return base === 10 ? pow10
	        : base === Math.E ? Math.exp
	        : function(x) { return Math.pow(base, x); };
	  }

	  function logp(base) {
	    return base === Math.E ? Math.log
	        : base === 10 && Math.log10
	        || base === 2 && Math.log2
	        || (base = Math.log(base), function(x) { return Math.log(x) / base; });
	  }

	  function reflect(f) {
	    return function(x) {
	      return -f(-x);
	    };
	  }

	  function log() {
	    var scale = continuous(deinterpolate, reinterpolate).domain([1, 10]),
	        domain = scale.domain,
	        base = 10,
	        logs = logp(10),
	        pows = powp(10);

	    function rescale() {
	      logs = logp(base), pows = powp(base);
	      if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
	      return scale;
	    }

	    scale.base = function(_) {
	      return arguments.length ? (base = +_, rescale()) : base;
	    };

	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };

	    scale.ticks = function(count) {
	      var d = domain(),
	          u = d[0],
	          v = d[d.length - 1],
	          r;

	      if (r = v < u) i = u, u = v, v = i;

	      var i = logs(u),
	          j = logs(v),
	          p,
	          k,
	          t,
	          n = count == null ? 10 : +count,
	          z = [];

	      if (!(base % 1) && j - i < n) {
	        i = Math.round(i) - 1, j = Math.round(j) + 1;
	        if (u > 0) for (; i < j; ++i) {
	          for (k = 1, p = pows(i); k < base; ++k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        } else for (; i < j; ++i) {
	          for (k = base - 1, p = pows(i); k >= 1; --k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        }
	        if (r) z.reverse();
	      } else {
	        z = d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
	      }

	      return z;
	    };

	    scale.tickFormat = function(count, specifier) {
	      if (specifier == null) specifier = base === 10 ? tickFormat10 : tickFormatOther;
	      else if (typeof specifier !== "function") specifier = d3Format.format(specifier);
	      if (count === Infinity) return specifier;
	      if (count == null) count = 10;
	      var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
	      return function(d) {
	        var i = d / pows(Math.round(logs(d)));
	        if (i * base < base - 0.5) i *= base;
	        return i <= k ? specifier(d) : "";
	      };
	    };

	    scale.nice = function() {
	      return domain(nice(domain(), {
	        floor: function(x) { return pows(Math.floor(logs(x))); },
	        ceil: function(x) { return pows(Math.ceil(logs(x))); }
	      }));
	    };

	    scale.copy = function() {
	      return copy(scale, log().base(base));
	    };

	    return scale;
	  }

	  function raise(x, exponent) {
	    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
	  }

	  function pow() {
	    var exponent = 1,
	        scale = continuous(deinterpolate, reinterpolate),
	        domain = scale.domain;

	    function deinterpolate(a, b) {
	      return (b = raise(b, exponent) - (a = raise(a, exponent)))
	          ? function(x) { return (raise(x, exponent) - a) / b; }
	          : constant(b);
	    }

	    function reinterpolate(a, b) {
	      b = raise(b, exponent) - (a = raise(a, exponent));
	      return function(t) { return raise(a + b * t, 1 / exponent); };
	    }

	    scale.exponent = function(_) {
	      return arguments.length ? (exponent = +_, domain(domain())) : exponent;
	    };

	    scale.copy = function() {
	      return copy(scale, pow().exponent(exponent));
	    };

	    return linearish(scale);
	  }

	  function sqrt() {
	    return pow().exponent(0.5);
	  }

	  function quantile$1() {
	    var domain = [],
	        range = [],
	        thresholds = [];

	    function rescale() {
	      var i = 0, n = Math.max(1, range.length);
	      thresholds = new Array(n - 1);
	      while (++i < n) thresholds[i - 1] = d3Array.quantile(domain, i / n);
	      return scale;
	    }

	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3Array.bisect(thresholds, x)];
	    }

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN] : [
	        i > 0 ? thresholds[i - 1] : domain[0],
	        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
	      ];
	    };

	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [];
	      for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
	      domain.sort(d3Array.ascending);
	      return rescale();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
	    };

	    scale.quantiles = function() {
	      return thresholds.slice();
	    };

	    scale.copy = function() {
	      return quantile$1()
	          .domain(domain)
	          .range(range);
	    };

	    return scale;
	  }

	  function quantize() {
	    var x0 = 0,
	        x1 = 1,
	        n = 1,
	        domain = [0.5],
	        range = [0, 1];

	    function scale(x) {
	      if (x <= x) return range[d3Array.bisect(domain, x, 0, n)];
	    }

	    function rescale() {
	      var i = -1;
	      domain = new Array(n);
	      while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
	      return scale;
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
	    };

	    scale.range = function(_) {
	      return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
	    };

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN]
	          : i < 1 ? [x0, domain[0]]
	          : i >= n ? [domain[n - 1], x1]
	          : [domain[i - 1], domain[i]];
	    };

	    scale.copy = function() {
	      return quantize()
	          .domain([x0, x1])
	          .range(range);
	    };

	    return linearish(scale);
	  }

	  function threshold() {
	    var domain = [0.5],
	        range = [0, 1],
	        n = 1;

	    function scale(x) {
	      if (x <= x) return range[d3Array.bisect(domain, x, 0, n)];
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
	    };

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return [domain[i - 1], domain[i]];
	    };

	    scale.copy = function() {
	      return threshold()
	          .domain(domain)
	          .range(range);
	    };

	    return scale;
	  }

	  var millisecondsPerSecond = 1000;
	  var millisecondsPerMinute = millisecondsPerSecond * 60;
	  var millisecondsPerHour = millisecondsPerMinute * 60;
	  var millisecondsPerDay = millisecondsPerHour * 24;
	  var millisecondsPerWeek = millisecondsPerDay * 7;
	  var millisecondsPerMonth = millisecondsPerDay * 30;
	  var millisecondsPerYear = millisecondsPerDay * 365;
	  var bisectTickIntervals = d3Array.bisector(function(method) { return method[2]; }).right;
	  function newDate(t) {
	    return new Date(t);
	  }

	  function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
	    var scale = continuous(deinterpolateLinear, d3Interpolate.interpolateNumber),
	        invert = scale.invert,
	        domain = scale.domain;

	    var formatMillisecond = format(".%L"),
	        formatSecond = format(":%S"),
	        formatMinute = format("%I:%M"),
	        formatHour = format("%I %p"),
	        formatDay = format("%a %d"),
	        formatWeek = format("%b %d"),
	        formatMonth = format("%B"),
	        formatYear = format("%Y");

	    var tickIntervals = [
	      [second,  1,      millisecondsPerSecond],
	      [second,  5,  5 * millisecondsPerSecond],
	      [second, 15, 15 * millisecondsPerSecond],
	      [second, 30, 30 * millisecondsPerSecond],
	      [minute,  1,      millisecondsPerMinute],
	      [minute,  5,  5 * millisecondsPerMinute],
	      [minute, 15, 15 * millisecondsPerMinute],
	      [minute, 30, 30 * millisecondsPerMinute],
	      [  hour,  1,      millisecondsPerHour  ],
	      [  hour,  3,  3 * millisecondsPerHour  ],
	      [  hour,  6,  6 * millisecondsPerHour  ],
	      [  hour, 12, 12 * millisecondsPerHour  ],
	      [   day,  1,      millisecondsPerDay   ],
	      [   day,  2,  2 * millisecondsPerDay   ],
	      [  week,  1,      millisecondsPerWeek  ],
	      [ month,  1,      millisecondsPerMonth ],
	      [ month,  3,  3 * millisecondsPerMonth ],
	      [  year,  1,      millisecondsPerYear  ]
	    ];

	    function tickFormat(date) {
	      return (second(date) < date ? formatMillisecond
	          : minute(date) < date ? formatSecond
	          : hour(date) < date ? formatMinute
	          : day(date) < date ? formatHour
	          : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
	          : year(date) < date ? formatMonth
	          : formatYear)(date);
	    }

	    function tickInterval(interval, start, stop, step) {
	      if (interval == null) interval = 10;

	      // If a desired tick count is specified, pick a reasonable tick interval
	      // based on the extent of the domain and a rough estimate of tick size.
	      // Otherwise, assume interval is already a time interval and use it.
	      if (typeof interval === "number") {
	        var target = Math.abs(stop - start) / interval,
	            i = bisectTickIntervals(tickIntervals, target);
	        if (i === tickIntervals.length) {
	          step = d3Array.tickStep(start / millisecondsPerYear, stop / millisecondsPerYear, interval);
	          interval = year;
	        } else if (i) {
	          i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
	          step = i[1];
	          interval = i[0];
	        } else {
	          step = d3Array.tickStep(start, stop, interval);
	          interval = millisecond;
	        }
	      }

	      return step == null ? interval : interval.every(step);
	    }

	    scale.invert = function(y) {
	      return new Date(invert(y));
	    };

	    scale.domain = function(_) {
	      return arguments.length ? domain(_) : domain().map(newDate);
	    };

	    scale.ticks = function(interval, step) {
	      var d = domain(),
	          t0 = d[0],
	          t1 = d[d.length - 1],
	          r = t1 < t0,
	          t;
	      if (r) t = t0, t0 = t1, t1 = t;
	      t = tickInterval(interval, t0, t1, step);
	      t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
	      return r ? t.reverse() : t;
	    };

	    scale.tickFormat = function(specifier) {
	      return specifier == null ? tickFormat : format(specifier);
	    };

	    scale.nice = function(interval, step) {
	      var d = domain();
	      return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
	          ? domain(nice(d, interval))
	          : scale;
	    };

	    scale.copy = function() {
	      return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
	    };

	    return scale;
	  }

	  function time() {
	    return calendar(d3Time.timeYear, d3Time.timeMonth, d3Time.timeWeek, d3Time.timeDay, d3Time.timeHour, d3Time.timeMinute, d3Time.timeSecond, d3Time.timeMillisecond, d3TimeFormat.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
	  }

	  function utcTime() {
	    return calendar(d3Time.utcYear, d3Time.utcMonth, d3Time.utcWeek, d3Time.utcDay, d3Time.utcHour, d3Time.utcMinute, d3Time.utcSecond, d3Time.utcMillisecond, d3TimeFormat.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
	  }

	  function colors(s) {
	    return s.match(/.{6}/g).map(function(x) {
	      return "#" + x;
	    });
	  }

	  function category10() {
	    return ordinal().range(colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));
	  }

	  function category20b() {
	    return ordinal().range(colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));
	  }

	  function category20c() {
	    return ordinal().range(colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));
	  }

	  function category20() {
	    return ordinal().range(colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));
	  }

	  function cubehelix$1() {
	    return linear()
	        .interpolate(d3Interpolate.interpolateCubehelixLong)
	        .range([d3Color.cubehelix(300, 0.5, 0.0), d3Color.cubehelix(-240, 0.5, 1.0)]);
	  }

	  function sequential(interpolate) {
	    var x0 = 0,
	        x1 = 1,
	        clamp = false;

	    function scale(x) {
	      var t = (x - x0) / (x1 - x0);
	      return interpolate(clamp ? Math.max(0, Math.min(1, t)) : t);
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
	    };

	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, scale) : clamp;
	    };

	    scale.copy = function() {
	      return sequential(interpolate).domain([x0, x1]).clamp(clamp);
	    };

	    return linearish(scale);
	  }

	  var a = d3Color.cubehelix(-100, 0.75, 0.35);
	  var b = d3Color.cubehelix(80, 1.50, 0.8);
	  var c = d3Color.cubehelix(260, 0.75, 0.35);
	  var d = d3Color.cubehelix();
	  var interpolateWarm = d3Interpolate.interpolateCubehelixLong(a, b);
	  var interpolateCool = d3Interpolate.interpolateCubehelixLong(c, b);
	  function interpolateRainbow(t) {
	    if (t < 0 || t > 1) t -= Math.floor(t);
	    var ts = Math.abs(t - 0.5);
	    d.h = 360 * t - 100;
	    d.s = 1.5 - 1.5 * ts;
	    d.l = 0.8 - 0.9 * ts;
	    return d + "";
	  }

	  function warm() {
	    return sequential(interpolateWarm);
	  }

	  function cool() {
	    return sequential(interpolateCool);
	  }

	  function rainbow() {
	    return sequential(interpolateRainbow);
	  }

	  var rangeViridis = colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725");
	  var rangeMagma = colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf");
	  var rangeInferno = colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4");
	  var rangePlasma = colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921");
	  function ramp(range) {
	    var s = sequential(function(t) { return range[Math.round(t * range.length - t)]; }).clamp(true);
	    delete s.clamp;
	    return s;
	  }

	  function viridis() {
	    return ramp(rangeViridis);
	  }

	  function magma() {
	    return ramp(rangeMagma);
	  }

	  function inferno() {
	    return ramp(rangeInferno);
	  }

	  function plasma() {
	    return ramp(rangePlasma);
	  }

	  var version = "0.6.1";

	  exports.version = version;
	  exports.scaleBand = band;
	  exports.scalePoint = point;
	  exports.scaleIdentity = identity;
	  exports.scaleLinear = linear;
	  exports.scaleLog = log;
	  exports.scaleOrdinal = ordinal;
	  exports.scaleImplicit = implicit;
	  exports.scalePow = pow;
	  exports.scaleSqrt = sqrt;
	  exports.scaleQuantile = quantile$1;
	  exports.scaleQuantize = quantize;
	  exports.scaleThreshold = threshold;
	  exports.scaleTime = time;
	  exports.scaleUtc = utcTime;
	  exports.scaleCategory10 = category10;
	  exports.scaleCategory20b = category20b;
	  exports.scaleCategory20c = category20c;
	  exports.scaleCategory20 = category20;
	  exports.scaleCubehelix = cubehelix$1;
	  exports.scaleRainbow = rainbow;
	  exports.scaleWarm = warm;
	  exports.scaleCool = cool;
	  exports.scaleViridis = viridis;
	  exports.scaleMagma = magma;
	  exports.scaleInferno = inferno;
	  exports.scalePlasma = plasma;

	}));

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_array = {})));
	}(this, function (exports) { 'use strict';

	  function ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }

	  function bisector(compare) {
	    if (compare.length === 1) compare = ascendingComparator(compare);
	    return {
	      left: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1;
	          else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid;
	          else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }

	  function ascendingComparator(f) {
	    return function(d, x) {
	      return ascending(f(d), x);
	    };
	  }

	  var ascendingBisect = bisector(ascending);
	  var bisectRight = ascendingBisect.right;
	  var bisectLeft = ascendingBisect.left;

	  function descending(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }

	  function number$1(x) {
	    return x === null ? NaN : +x;
	  }

	  function variance(array, f) {
	    var n = array.length,
	        m = 0,
	        a,
	        d,
	        s = 0,
	        i = -1,
	        j = 0;

	    if (f == null) {
	      while (++i < n) {
	        if (!isNaN(a = number$1(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }

	    else {
	      while (++i < n) {
	        if (!isNaN(a = number$1(f(array[i], i, array)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }

	    if (j > 1) return s / (j - 1);
	  }

	  function deviation(array, f) {
	    var v = variance(array, f);
	    return v ? Math.sqrt(v) : v;
	  }

	  function extent(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b,
	        c;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }

	    return [a, c];
	  }

	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }

	  function identity(x) {
	    return x;
	  }

	  function range(start, stop, step) {
	    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

	    var i = -1,
	        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
	        range = new Array(n);

	    while (++i < n) {
	      range[i] = start + i * step;
	    }

	    return range;
	  }

	  var e10 = Math.sqrt(50);
	  var e5 = Math.sqrt(10);
	  var e2 = Math.sqrt(2);
	  function ticks(start, stop, count) {
	    var step = tickStep(start, stop, count);
	    return range(
	      Math.ceil(start / step) * step,
	      Math.floor(stop / step) * step + step / 2, // inclusive
	      step
	    );
	  }

	  function tickStep(start, stop, count) {
	    var step0 = Math.abs(stop - start) / Math.max(0, count),
	        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
	        error = step0 / step1;
	    if (error >= e10) step1 *= 10;
	    else if (error >= e5) step1 *= 5;
	    else if (error >= e2) step1 *= 2;
	    return stop < start ? -step1 : step1;
	  }

	  function sturges(values) {
	    return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
	  }

	  function number(x) {
	    return +x;
	  }

	  function histogram() {
	    var value = identity,
	        domain = extent,
	        threshold = sturges;

	    function histogram(data) {
	      var i,
	          n = data.length,
	          x,
	          values = new Array(n);

	      // Coerce values to numbers.
	      for (i = 0; i < n; ++i) {
	        values[i] = +value(data[i], i, data);
	      }

	      var xz = domain(values),
	          x0 = +xz[0],
	          x1 = +xz[1],
	          tz = threshold(values, x0, x1);

	      // Convert number of thresholds into uniform thresholds.
	      if (!Array.isArray(tz)) tz = ticks(x0, x1, +tz);

	      // Coerce thresholds to numbers, ignoring any outside the domain.
	      var m = tz.length;
	      for (i = 0; i < m; ++i) tz[i] = +tz[i];
	      while (tz[0] <= x0) tz.shift(), --m;
	      while (tz[m - 1] >= x1) tz.pop(), --m;

	      var bins = new Array(m + 1),
	          bin;

	      // Initialize bins.
	      for (i = 0; i <= m; ++i) {
	        bin = bins[i] = [];
	        bin.x0 = i > 0 ? tz[i - 1] : x0;
	        bin.x1 = i < m ? tz[i] : x1;
	      }

	      // Assign data to bins by value, ignoring any outside the domain.
	      for (i = 0; i < n; ++i) {
	        x = values[i];
	        if (x0 <= x && x <= x1) {
	          bins[bisectRight(tz, x, 0, m)].push(data[i]);
	        }
	      }

	      return bins;
	    }

	    histogram.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), histogram) : value;
	    };

	    histogram.domain = function(_) {
	      return arguments.length ? (domain = typeof _ === "function" ? _ : constant([+_[0], +_[1]]), histogram) : domain;
	    };

	    histogram.thresholds = function(_) {
	      if (!arguments.length) return threshold;
	      threshold = typeof _ === "function" ? _
	          : Array.isArray(_) ? constant(Array.prototype.map.call(_, number))
	          : constant(+_);
	      return histogram;
	    };

	    return histogram;
	  }

	  function quantile(array, p, f) {
	    if (f == null) f = number$1;
	    if (!(n = array.length)) return;
	    if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
	    if (p >= 1) return +f(array[n - 1], n - 1, array);
	    var n,
	        h = (n - 1) * p,
	        i = Math.floor(h),
	        a = +f(array[i], i, array),
	        b = +f(array[i + 1], i + 1, array);
	    return a + (b - a) * (h - i);
	  }

	  function freedmanDiaconis(values, min, max) {
	    values.sort(ascending);
	    return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(values.length, -1 / 3)));
	  }

	  function scott(values, min, max) {
	    return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
	  }

	  function max(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
	    }

	    return a;
	  }

	  function mean(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1,
	        j = n;

	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number$1(array[i]))) s += a; else --j;
	    }

	    else {
	      while (++i < n) if (!isNaN(a = number$1(f(array[i], i, array)))) s += a; else --j;
	    }

	    if (j) return s / j;
	  }

	  function median(array, f) {
	    var numbers = [],
	        n = array.length,
	        a,
	        i = -1;

	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number$1(array[i]))) numbers.push(a);
	    }

	    else {
	      while (++i < n) if (!isNaN(a = number$1(f(array[i], i, array)))) numbers.push(a);
	    }

	    return quantile(numbers.sort(ascending), 0.5);
	  }

	  function merge(arrays) {
	    var n = arrays.length,
	        m,
	        i = -1,
	        j = 0,
	        merged,
	        array;

	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);

	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }

	    return merged;
	  }

	  function min(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
	    }

	    return a;
	  }

	  function pairs(array) {
	    var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [p, p = array[++i]];
	    return pairs;
	  }

	  function permute(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  }

	  function scan(array, compare) {
	    if (!(n = array.length)) return;
	    var i = 0,
	        n,
	        j = 0,
	        xi,
	        xj = array[j];

	    if (!compare) compare = ascending;

	    while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;

	    if (compare(xj, xj) === 0) return j;
	  }

	  function shuffle(array, i0, i1) {
	    var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	        t,
	        i;

	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0];
	      array[m + i0] = array[i + i0];
	      array[i + i0] = t;
	    }

	    return array;
	  }

	  function sum(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1;

	    if (f == null) {
	      while (++i < n) if (a = +array[i]) s += a; // Note: zero and null are equivalent.
	    }

	    else {
	      while (++i < n) if (a = +f(array[i], i, array)) s += a;
	    }

	    return s;
	  }

	  function transpose(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  }

	  function length(d) {
	    return d.length;
	  }

	  function zip() {
	    return transpose(arguments);
	  }

	  var version = "0.7.1";

	  exports.version = version;
	  exports.bisect = bisectRight;
	  exports.bisectRight = bisectRight;
	  exports.bisectLeft = bisectLeft;
	  exports.ascending = ascending;
	  exports.bisector = bisector;
	  exports.descending = descending;
	  exports.deviation = deviation;
	  exports.extent = extent;
	  exports.histogram = histogram;
	  exports.thresholdFreedmanDiaconis = freedmanDiaconis;
	  exports.thresholdScott = scott;
	  exports.thresholdSturges = sturges;
	  exports.max = max;
	  exports.mean = mean;
	  exports.median = median;
	  exports.merge = merge;
	  exports.min = min;
	  exports.pairs = pairs;
	  exports.permute = permute;
	  exports.quantile = quantile;
	  exports.range = range;
	  exports.scan = scan;
	  exports.shuffle = shuffle;
	  exports.sum = sum;
	  exports.ticks = ticks;
	  exports.tickStep = tickStep;
	  exports.transpose = transpose;
	  exports.variance = variance;
	  exports.zip = zip;

	}));

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(227)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-color'], factory) :
	  (factory((global.d3_interpolate = {}),global.d3_color));
	}(this, function (exports,d3Color) { 'use strict';

	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }

	  function linear(a, d) {
	    return function(t) {
	      return a + t * d;
	    };
	  }

	  function exponential(a, b, y) {
	    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
	      return Math.pow(a + t * b, y);
	    };
	  }

	  function hue(a, b) {
	    var d = b - a;
	    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
	  }

	  function gamma(y) {
	    return (y = +y) === 1 ? nogamma : function(a, b) {
	      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
	    };
	  }

	  function nogamma(a, b) {
	    var d = b - a;
	    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
	  }

	  var rgb$1 = (function gamma$$(y) {
	    var interpolateColor = gamma(y);

	    function interpolateRgb(start, end) {
	      var r = interpolateColor((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r),
	          g = interpolateColor(start.g, end.g),
	          b = interpolateColor(start.b, end.b),
	          opacity = interpolateColor(start.opacity, end.opacity);
	      return function(t) {
	        start.r = r(t);
	        start.g = g(t);
	        start.b = b(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }

	    interpolateRgb.gamma = gamma$$;

	    return interpolateRgb;
	  })(1);

	  // TODO sparse arrays?
	  function array(a, b) {
	    var x = [],
	        c = [],
	        na = a ? a.length : 0,
	        nb = b ? b.length : 0,
	        n0 = Math.min(na, nb),
	        i;

	    for (i = 0; i < n0; ++i) x.push(value(a[i], b[i]));
	    for (; i < na; ++i) c[i] = a[i];
	    for (; i < nb; ++i) c[i] = b[i];

	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }

	  function number(a, b) {
	    return a = +a, b -= a, function(t) {
	      return a + b * t;
	    };
	  }

	  function object(a, b) {
	    var i = {},
	        c = {},
	        k;

	    if (a === null || typeof a !== "object") a = {};
	    if (b === null || typeof b !== "object") b = {};

	    for (k in a) {
	      if (k in b) {
	        i[k] = value(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }

	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }

	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }

	  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
	  var reB = new RegExp(reA.source, "g");
	  function zero(b) {
	    return function() {
	      return b;
	    };
	  }

	  function one(b) {
	    return function(t) {
	      return b(t) + "";
	    };
	  }

	  function string(a, b) {
	    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
	        am, // current match in a
	        bm, // current match in b
	        bs, // string preceding current number in b, if any
	        i = -1, // index in s
	        s = [], // string constants and placeholders
	        q = []; // number interpolators

	    // Coerce inputs to strings.
	    a = a + "", b = b + "";

	    // Interpolate pairs of numbers in a & b.
	    while ((am = reA.exec(a))
	        && (bm = reB.exec(b))) {
	      if ((bs = bm.index) > bi) { // a string precedes the next number in b
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; // coalesce with previous string
	        else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
	        if (s[i]) s[i] += bm; // coalesce with previous string
	        else s[++i] = bm;
	      } else { // interpolate non-matching numbers
	        s[++i] = null;
	        q.push({i: i, x: number(am, bm)});
	      }
	      bi = reB.lastIndex;
	    }

	    // Add remains of b.
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }

	    // Special optimization for only a single match.
	    // Otherwise, interpolate each of the numbers and rejoin the string.
	    return s.length < 2 ? (q[0]
	        ? one(q[0].x)
	        : zero(b))
	        : (b = q.length, function(t) {
	            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	            return s.join("");
	          });
	  }

	  var values = [
	    function(a, b) {
	      var t = typeof b, c;
	      return (t === "string" ? ((c = d3Color.color(b)) ? (b = c, rgb$1) : string)
	          : b instanceof d3Color.color ? rgb$1
	          : Array.isArray(b) ? array
	          : t === "object" && isNaN(b) ? object
	          : number)(a, b);
	    }
	  ];

	  function value(a, b) {
	    var i = values.length, f;
	    while (--i >= 0 && !(f = values[i](a, b)));
	    return f;
	  }

	  function round(a, b) {
	    return a = +a, b -= a, function(t) {
	      return Math.round(a + b * t);
	    };
	  }

	  var rad2deg = 180 / Math.PI;
	  var identity = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
	  var g;
	  // Compute x-scale and normalize the first row.
	  // Compute shear and make second row orthogonal to first.
	  // Compute y-scale and normalize the second row.
	  // Finally, compute the rotation.
	  function Transform(string) {
	    if (!g) g = document.createElementNS("http://www.w3.org/2000/svg", "g");
	    if (string) g.setAttribute("transform", string), t = g.transform.baseVal.consolidate();

	    var t,
	        m = t ? t.matrix : identity,
	        r0 = [m.a, m.b],
	        r1 = [m.c, m.d],
	        kx = normalize(r0),
	        kz = dot(r0, r1),
	        ky = normalize(combine(r1, r0, -kz)) || 0;

	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }

	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * rad2deg;
	    this.translate = [m.e, m.f];
	    this.scale = [kx, ky];
	    this.skew = ky ? Math.atan2(kz, ky) * rad2deg : 0;
	  }

	  function dot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }

	  function normalize(a) {
	    var k = Math.sqrt(dot(a, a));
	    if (k) a[0] /= k, a[1] /= k;
	    return k;
	  }

	  function combine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }

	  function pop(s) {
	    return s.length ? s.pop() + "," : "";
	  }

	  function translate(ta, tb, s, q) {
	    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
	      var i = s.push("translate(", null, ",", null, ")");
	      q.push({i: i - 4, x: number(ta[0], tb[0])}, {i: i - 2, x: number(ta[1], tb[1])});
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    }
	  }

	  function rotate(ra, rb, s, q) {
	    if (ra !== rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360; // shortest path
	      q.push({i: s.push(pop(s) + "rotate(", null, ")") - 2, x: number(ra, rb)});
	    } else if (rb) {
	      s.push(pop(s) + "rotate(" + rb + ")");
	    }
	  }

	  function skew(wa, wb, s, q) {
	    if (wa !== wb) {
	      q.push({i: s.push(pop(s) + "skewX(", null, ")") - 2, x: number(wa, wb)});
	    } else if (wb) {
	      s.push(pop(s) + "skewX(" + wb + ")");
	    }
	  }

	  function scale(ka, kb, s, q) {
	    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
	      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	      q.push({i: i - 4, x: number(ka[0], kb[0])}, {i: i - 2, x: number(ka[1], kb[1])});
	    } else if (kb[0] !== 1 || kb[1] !== 1) {
	      s.push(pop(s) + "scale(" + kb + ")");
	    }
	  }

	  function transform(a, b) {
	    var s = [], // string constants and placeholders
	        q = []; // number interpolators
	    a = new Transform(a), b = new Transform(b);
	    translate(a.translate, b.translate, s, q);
	    rotate(a.rotate, b.rotate, s, q);
	    skew(a.skew, b.skew, s, q);
	    scale(a.scale, b.scale, s, q);
	    a = b = null; // gc
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }

	  var rho = Math.SQRT2;
	  var rho2 = 2;
	  var rho4 = 4;
	  var epsilon2 = 1e-12;
	  function cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }

	  function sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }

	  function tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }

	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function zoom(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
	        dx = ux1 - ux0,
	        dy = uy1 - uy0,
	        d2 = dx * dx + dy * dy,
	        i,
	        S;

	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2) {
	      S = Math.log(w1 / w0) / rho;
	      i = function(t) {
	        return [
	          ux0 + t * dx,
	          uy0 + t * dy,
	          w0 * Math.exp(rho * t * S)
	        ];
	      }
	    }

	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function(t) {
	        var s = t * S,
	            coshr0 = cosh(r0),
	            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [
	          ux0 + u * dx,
	          uy0 + u * dy,
	          w0 * coshr0 / cosh(rho * s + r0)
	        ];
	      }
	    }

	    i.duration = S * 1000;

	    return i;
	  }

	  function interpolateHsl(start, end) {
	    var h = hue((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
	        s = nogamma(start.s, end.s),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.s = s(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateHslLong(start, end) {
	    var h = nogamma((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
	        s = nogamma(start.s, end.s),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.s = s(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateLab(start, end) {
	    var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l),
	        a = nogamma(start.a, end.a),
	        b = nogamma(start.b, end.b),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.l = l(t);
	      start.a = a(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateHcl(start, end) {
	    var h = hue((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
	        c = nogamma(start.c, end.c),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.c = c(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateHclLong(start, end) {
	    var h = nogamma((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
	        c = nogamma(start.c, end.c),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.c = c(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  var cubehelix$1 = (function gamma(y) {
	    y = +y;

	    function interpolateCubehelix(start, end) {
	      var h = hue((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }

	    interpolateCubehelix.gamma = gamma;

	    return interpolateCubehelix;
	  })(1);

	  var cubehelixLong = (function gamma(y) {
	    y = +y;

	    function interpolateCubehelixLong(start, end) {
	      var h = nogamma((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }

	    interpolateCubehelixLong.gamma = gamma;

	    return interpolateCubehelixLong;
	  })(1);

	  var version = "0.5.2";

	  exports.version = version;
	  exports.interpolate = value;
	  exports.interpolators = values;
	  exports.interpolateArray = array;
	  exports.interpolateNumber = number;
	  exports.interpolateObject = object;
	  exports.interpolateRound = round;
	  exports.interpolateString = string;
	  exports.interpolateTransform = transform;
	  exports.interpolateZoom = zoom;
	  exports.interpolateRgb = rgb$1;
	  exports.interpolateHsl = interpolateHsl;
	  exports.interpolateHslLong = interpolateHslLong;
	  exports.interpolateLab = interpolateLab;
	  exports.interpolateHcl = interpolateHcl;
	  exports.interpolateHclLong = interpolateHclLong;
	  exports.interpolateCubehelix = cubehelix$1;
	  exports.interpolateCubehelixLong = cubehelixLong;

	}));

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_color = {})));
	}(this, function (exports) { 'use strict';

	  function Color() {}

	  var darker = 0.7;
	  var brighter = 1 / darker;

	  var reHex3 = /^#([0-9a-f]{3})$/;
	  var reHex6 = /^#([0-9a-f]{6})$/;
	  var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
	  var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var named = {
	    aliceblue: 0xf0f8ff,
	    antiquewhite: 0xfaebd7,
	    aqua: 0x00ffff,
	    aquamarine: 0x7fffd4,
	    azure: 0xf0ffff,
	    beige: 0xf5f5dc,
	    bisque: 0xffe4c4,
	    black: 0x000000,
	    blanchedalmond: 0xffebcd,
	    blue: 0x0000ff,
	    blueviolet: 0x8a2be2,
	    brown: 0xa52a2a,
	    burlywood: 0xdeb887,
	    cadetblue: 0x5f9ea0,
	    chartreuse: 0x7fff00,
	    chocolate: 0xd2691e,
	    coral: 0xff7f50,
	    cornflowerblue: 0x6495ed,
	    cornsilk: 0xfff8dc,
	    crimson: 0xdc143c,
	    cyan: 0x00ffff,
	    darkblue: 0x00008b,
	    darkcyan: 0x008b8b,
	    darkgoldenrod: 0xb8860b,
	    darkgray: 0xa9a9a9,
	    darkgreen: 0x006400,
	    darkgrey: 0xa9a9a9,
	    darkkhaki: 0xbdb76b,
	    darkmagenta: 0x8b008b,
	    darkolivegreen: 0x556b2f,
	    darkorange: 0xff8c00,
	    darkorchid: 0x9932cc,
	    darkred: 0x8b0000,
	    darksalmon: 0xe9967a,
	    darkseagreen: 0x8fbc8f,
	    darkslateblue: 0x483d8b,
	    darkslategray: 0x2f4f4f,
	    darkslategrey: 0x2f4f4f,
	    darkturquoise: 0x00ced1,
	    darkviolet: 0x9400d3,
	    deeppink: 0xff1493,
	    deepskyblue: 0x00bfff,
	    dimgray: 0x696969,
	    dimgrey: 0x696969,
	    dodgerblue: 0x1e90ff,
	    firebrick: 0xb22222,
	    floralwhite: 0xfffaf0,
	    forestgreen: 0x228b22,
	    fuchsia: 0xff00ff,
	    gainsboro: 0xdcdcdc,
	    ghostwhite: 0xf8f8ff,
	    gold: 0xffd700,
	    goldenrod: 0xdaa520,
	    gray: 0x808080,
	    green: 0x008000,
	    greenyellow: 0xadff2f,
	    grey: 0x808080,
	    honeydew: 0xf0fff0,
	    hotpink: 0xff69b4,
	    indianred: 0xcd5c5c,
	    indigo: 0x4b0082,
	    ivory: 0xfffff0,
	    khaki: 0xf0e68c,
	    lavender: 0xe6e6fa,
	    lavenderblush: 0xfff0f5,
	    lawngreen: 0x7cfc00,
	    lemonchiffon: 0xfffacd,
	    lightblue: 0xadd8e6,
	    lightcoral: 0xf08080,
	    lightcyan: 0xe0ffff,
	    lightgoldenrodyellow: 0xfafad2,
	    lightgray: 0xd3d3d3,
	    lightgreen: 0x90ee90,
	    lightgrey: 0xd3d3d3,
	    lightpink: 0xffb6c1,
	    lightsalmon: 0xffa07a,
	    lightseagreen: 0x20b2aa,
	    lightskyblue: 0x87cefa,
	    lightslategray: 0x778899,
	    lightslategrey: 0x778899,
	    lightsteelblue: 0xb0c4de,
	    lightyellow: 0xffffe0,
	    lime: 0x00ff00,
	    limegreen: 0x32cd32,
	    linen: 0xfaf0e6,
	    magenta: 0xff00ff,
	    maroon: 0x800000,
	    mediumaquamarine: 0x66cdaa,
	    mediumblue: 0x0000cd,
	    mediumorchid: 0xba55d3,
	    mediumpurple: 0x9370db,
	    mediumseagreen: 0x3cb371,
	    mediumslateblue: 0x7b68ee,
	    mediumspringgreen: 0x00fa9a,
	    mediumturquoise: 0x48d1cc,
	    mediumvioletred: 0xc71585,
	    midnightblue: 0x191970,
	    mintcream: 0xf5fffa,
	    mistyrose: 0xffe4e1,
	    moccasin: 0xffe4b5,
	    navajowhite: 0xffdead,
	    navy: 0x000080,
	    oldlace: 0xfdf5e6,
	    olive: 0x808000,
	    olivedrab: 0x6b8e23,
	    orange: 0xffa500,
	    orangered: 0xff4500,
	    orchid: 0xda70d6,
	    palegoldenrod: 0xeee8aa,
	    palegreen: 0x98fb98,
	    paleturquoise: 0xafeeee,
	    palevioletred: 0xdb7093,
	    papayawhip: 0xffefd5,
	    peachpuff: 0xffdab9,
	    peru: 0xcd853f,
	    pink: 0xffc0cb,
	    plum: 0xdda0dd,
	    powderblue: 0xb0e0e6,
	    purple: 0x800080,
	    rebeccapurple: 0x663399,
	    red: 0xff0000,
	    rosybrown: 0xbc8f8f,
	    royalblue: 0x4169e1,
	    saddlebrown: 0x8b4513,
	    salmon: 0xfa8072,
	    sandybrown: 0xf4a460,
	    seagreen: 0x2e8b57,
	    seashell: 0xfff5ee,
	    sienna: 0xa0522d,
	    silver: 0xc0c0c0,
	    skyblue: 0x87ceeb,
	    slateblue: 0x6a5acd,
	    slategray: 0x708090,
	    slategrey: 0x708090,
	    snow: 0xfffafa,
	    springgreen: 0x00ff7f,
	    steelblue: 0x4682b4,
	    tan: 0xd2b48c,
	    teal: 0x008080,
	    thistle: 0xd8bfd8,
	    tomato: 0xff6347,
	    turquoise: 0x40e0d0,
	    violet: 0xee82ee,
	    wheat: 0xf5deb3,
	    white: 0xffffff,
	    whitesmoke: 0xf5f5f5,
	    yellow: 0xffff00,
	    yellowgreen: 0x9acd32
	  };

	  color.prototype = Color.prototype = {
	    displayable: function() {
	      return this.rgb().displayable();
	    },
	    toString: function() {
	      return this.rgb() + "";
	    }
	  };

	  function color(format) {
	    var m;
	    format = (format + "").trim().toLowerCase();
	    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
	        : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
	        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	        : named.hasOwnProperty(format) ? rgbn(named[format])
	        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
	        : null;
	  }

	  function rgbn(n) {
	    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	  }

	  function rgba(r, g, b, a) {
	    if (a <= 0) r = g = b = NaN;
	    return new Rgb(r, g, b, a);
	  }

	  function rgbConvert(o) {
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Rgb;
	    o = o.rgb();
	    return new Rgb(o.r, o.g, o.b, o.opacity);
	  }

	  function rgb(r, g, b, opacity) {
	    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	  }

	  function Rgb(r, g, b, opacity) {
	    this.r = +r;
	    this.g = +g;
	    this.b = +b;
	    this.opacity = +opacity;
	  }

	  var _rgb = rgb.prototype = Rgb.prototype = new Color;

	  _rgb.brighter = function(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  };

	  _rgb.darker = function(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  };

	  _rgb.rgb = function() {
	    return this;
	  };

	  _rgb.displayable = function() {
	    return (0 <= this.r && this.r <= 255)
	        && (0 <= this.g && this.g <= 255)
	        && (0 <= this.b && this.b <= 255)
	        && (0 <= this.opacity && this.opacity <= 1);
	  };

	  _rgb.toString = function() {
	    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	    return (a === 1 ? "rgb(" : "rgba(")
	        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
	        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
	        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
	        + (a === 1 ? ")" : ", " + a + ")");
	  };

	  function hsla(h, s, l, a) {
	    if (a <= 0) h = s = l = NaN;
	    else if (l <= 0 || l >= 1) h = s = NaN;
	    else if (s <= 0) h = NaN;
	    return new Hsl(h, s, l, a);
	  }

	  function hslConvert(o) {
	    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Hsl;
	    if (o instanceof Hsl) return o;
	    o = o.rgb();
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        min = Math.min(r, g, b),
	        max = Math.max(r, g, b),
	        h = NaN,
	        s = max - min,
	        l = (max + min) / 2;
	    if (s) {
	      if (r === max) h = (g - b) / s + (g < b) * 6;
	      else if (g === max) h = (b - r) / s + 2;
	      else h = (r - g) / s + 4;
	      s /= l < 0.5 ? max + min : 2 - max - min;
	      h *= 60;
	    } else {
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new Hsl(h, s, l, o.opacity);
	  }

	  function hsl(h, s, l, opacity) {
	    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	  }

	  function Hsl(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }

	  var _hsl = hsl.prototype = Hsl.prototype = new Color;

	  _hsl.brighter = function(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  };

	  _hsl.darker = function(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  };

	  _hsl.rgb = function() {
	    var h = this.h % 360 + (this.h < 0) * 360,
	        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	        l = this.l,
	        m2 = l + (l < 0.5 ? l : 1 - l) * s,
	        m1 = 2 * l - m2;
	    return new Rgb(
	      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
	      hsl2rgb(h, m1, m2),
	      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
	      this.opacity
	    );
	  };

	  _hsl.displayable = function() {
	    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
	        && (0 <= this.l && this.l <= 1)
	        && (0 <= this.opacity && this.opacity <= 1);
	  };

	  /* From FvD 13.37, CSS Color Module Level 3 */
	  function hsl2rgb(h, m1, m2) {
	    return (h < 60 ? m1 + (m2 - m1) * h / 60
	        : h < 180 ? m2
	        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
	        : m1) * 255;
	  }

	  var deg2rad = Math.PI / 180;
	  var rad2deg = 180 / Math.PI;

	  var Kn = 18;
	  var Xn = 0.950470;
	  var Yn = 1;
	  var Zn = 1.088830;
	  var t0 = 4 / 29;
	  var t1 = 6 / 29;
	  var t2 = 3 * t1 * t1;
	  var t3 = t1 * t1 * t1;
	  function labConvert(o) {
	    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	    if (o instanceof Hcl) {
	      var h = o.h * deg2rad;
	      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	    }
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var b = rgb2xyz(o.r),
	        a = rgb2xyz(o.g),
	        l = rgb2xyz(o.b),
	        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
	        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
	        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
	    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	  }

	  function lab(l, a, b, opacity) {
	    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
	  }

	  function Lab(l, a, b, opacity) {
	    this.l = +l;
	    this.a = +a;
	    this.b = +b;
	    this.opacity = +opacity;
	  }

	  var _lab = lab.prototype = Lab.prototype = new Color;

	  _lab.brighter = function(k) {
	    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  };

	  _lab.darker = function(k) {
	    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  };

	  _lab.rgb = function() {
	    var y = (this.l + 16) / 116,
	        x = isNaN(this.a) ? y : y + this.a / 500,
	        z = isNaN(this.b) ? y : y - this.b / 200;
	    y = Yn * lab2xyz(y);
	    x = Xn * lab2xyz(x);
	    z = Zn * lab2xyz(z);
	    return new Rgb(
	      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
	      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
	      this.opacity
	    );
	  };

	  function xyz2lab(t) {
	    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
	  }

	  function lab2xyz(t) {
	    return t > t1 ? t * t * t : t2 * (t - t0);
	  }

	  function xyz2rgb(x) {
	    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	  }

	  function rgb2xyz(x) {
	    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	  }

	  function hclConvert(o) {
	    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	    if (!(o instanceof Lab)) o = labConvert(o);
	    var h = Math.atan2(o.b, o.a) * rad2deg;
	    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	  }

	  function hcl(h, c, l, opacity) {
	    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
	  }

	  function Hcl(h, c, l, opacity) {
	    this.h = +h;
	    this.c = +c;
	    this.l = +l;
	    this.opacity = +opacity;
	  }

	  var _hcl = hcl.prototype = Hcl.prototype = new Color;

	  _hcl.brighter = function(k) {
	    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
	  };

	  _hcl.darker = function(k) {
	    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
	  };

	  _hcl.rgb = function() {
	    return labConvert(this).rgb();
	  };

	  var A = -0.14861;
	  var B = +1.78277;
	  var C = -0.29227;
	  var D = -0.90649;
	  var E = +1.97294;
	  var ED = E * D;
	  var EB = E * B;
	  var BC_DA = B * C - D * A;
	  function cubehelixConvert(o) {
	    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
	        bl = b - l,
	        k = (E * (g - l) - C * bl) / D,
	        s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
	        h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
	    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
	  }

	  function cubehelix(h, s, l, opacity) {
	    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
	  }

	  function Cubehelix(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }

	  var _cubehelix = cubehelix.prototype = Cubehelix.prototype = new Color;

	  _cubehelix.brighter = function(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  };

	  _cubehelix.darker = function(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  };

	  _cubehelix.rgb = function() {
	    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
	        l = +this.l,
	        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	        cosh = Math.cos(h),
	        sinh = Math.sin(h);
	    return new Rgb(
	      255 * (l + a * (A * cosh + B * sinh)),
	      255 * (l + a * (C * cosh + D * sinh)),
	      255 * (l + a * (E * cosh)),
	      this.opacity
	    );
	  };

	  var version = "0.4.1";

	  exports.version = version;
	  exports.color = color;
	  exports.rgb = rgb;
	  exports.hsl = hsl;
	  exports.lab = lab;
	  exports.hcl = hcl;
	  exports.cubehelix = cubehelix;

	}));

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_format = {})));
	}(this, function (exports) { 'use strict';

	  // Computes the decimal coefficient and exponent of the specified number x with
	  // significant digits p, where x is positive and p is in [1, 21] or undefined.
	  // For example, formatDecimal(1.23) returns ["123", 0].
	  function formatDecimal(x, p) {
	    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	    var i, coefficient = x.slice(0, i);

	    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	    return [
	      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
	      +x.slice(i + 1)
	    ];
	  }

	  function exponent(x) {
	    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
	  }

	  function formatGroup(grouping, thousands) {
	    return function(value, width) {
	      var i = value.length,
	          t = [],
	          j = 0,
	          g = grouping[0],
	          length = 0;

	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = grouping[j = (j + 1) % grouping.length];
	      }

	      return t.reverse().join(thousands);
	    };
	  }

	  function formatDefault(x, p) {
	    x = x.toPrecision(p);

	    out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	      switch (x[i]) {
	        case ".": i0 = i1 = i; break;
	        case "0": if (i0 === 0) i0 = i; i1 = i; break;
	        case "e": break out;
	        default: if (i0 > 0) i0 = 0; break;
	      }
	    }

	    return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
	  }

	  var prefixExponent;

	  function formatPrefixAuto(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1],
	        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	        n = coefficient.length;
	    return i === n ? coefficient
	        : i > n ? coefficient + new Array(i - n + 1).join("0")
	        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
	        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	  }

	  function formatRounded(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1];
	    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
	        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
	        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	  }

	  var formatTypes = {
	    "": formatDefault,
	    "%": function(x, p) { return (x * 100).toFixed(p); },
	    "b": function(x) { return Math.round(x).toString(2); },
	    "c": function(x) { return x + ""; },
	    "d": function(x) { return Math.round(x).toString(10); },
	    "e": function(x, p) { return x.toExponential(p); },
	    "f": function(x, p) { return x.toFixed(p); },
	    "g": function(x, p) { return x.toPrecision(p); },
	    "o": function(x) { return Math.round(x).toString(8); },
	    "p": function(x, p) { return formatRounded(x * 100, p); },
	    "r": formatRounded,
	    "s": formatPrefixAuto,
	    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
	    "x": function(x) { return Math.round(x).toString(16); }
	  };

	  // [[fill]align][sign][symbol][0][width][,][.precision][type]
	  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

	  function formatSpecifier(specifier) {
	    return new FormatSpecifier(specifier);
	  }

	  function FormatSpecifier(specifier) {
	    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

	    var match,
	        fill = match[1] || " ",
	        align = match[2] || ">",
	        sign = match[3] || "-",
	        symbol = match[4] || "",
	        zero = !!match[5],
	        width = match[6] && +match[6],
	        comma = !!match[7],
	        precision = match[8] && +match[8].slice(1),
	        type = match[9] || "";

	    // The "n" type is an alias for ",g".
	    if (type === "n") comma = true, type = "g";

	    // Map invalid types to the default format.
	    else if (!formatTypes[type]) type = "";

	    // If zero fill is specified, padding goes after sign and before digits.
	    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

	    this.fill = fill;
	    this.align = align;
	    this.sign = sign;
	    this.symbol = symbol;
	    this.zero = zero;
	    this.width = width;
	    this.comma = comma;
	    this.precision = precision;
	    this.type = type;
	  }

	  FormatSpecifier.prototype.toString = function() {
	    return this.fill
	        + this.align
	        + this.sign
	        + this.symbol
	        + (this.zero ? "0" : "")
	        + (this.width == null ? "" : Math.max(1, this.width | 0))
	        + (this.comma ? "," : "")
	        + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
	        + this.type;
	  };

	  var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

	  function identity(x) {
	    return x;
	  }

	  function locale(locale) {
	    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
	        currency = locale.currency,
	        decimal = locale.decimal;

	    function newFormat(specifier) {
	      specifier = formatSpecifier(specifier);

	      var fill = specifier.fill,
	          align = specifier.align,
	          sign = specifier.sign,
	          symbol = specifier.symbol,
	          zero = specifier.zero,
	          width = specifier.width,
	          comma = specifier.comma,
	          precision = specifier.precision,
	          type = specifier.type;

	      // Compute the prefix and suffix.
	      // For SI-prefix, the suffix is lazily computed.
	      var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	          suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";

	      // What format function should we use?
	      // Is this an integer type?
	      // Can this type generate exponential notation?
	      var formatType = formatTypes[type],
	          maybeSuffix = !type || /[defgprs%]/.test(type);

	      // Set the default precision if not specified,
	      // or clamp the specified precision to the supported range.
	      // For significant precision, it must be in [1, 21].
	      // For fixed precision, it must be in [0, 20].
	      precision = precision == null ? (type ? 6 : 12)
	          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
	          : Math.max(0, Math.min(20, precision));

	      function format(value) {
	        var valuePrefix = prefix,
	            valueSuffix = suffix,
	            i, n, c;

	        if (type === "c") {
	          valueSuffix = formatType(value) + valueSuffix;
	          value = "";
	        } else {
	          value = +value;

	          // Convert negative to positive, and compute the prefix.
	          // Note that -0 is not less than 0, but 1 / -0 is!
	          var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);

	          // Perform the initial formatting.
	          value = formatType(value, precision);

	          // If the original value was negative, it may be rounded to zero during
	          // formatting; treat this as (positive) zero.
	          if (valueNegative) {
	            i = -1, n = value.length;
	            valueNegative = false;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), (48 < c && c < 58)
	                  || (type === "x" && 96 < c && c < 103)
	                  || (type === "X" && 64 < c && c < 71)) {
	                valueNegative = true;
	                break;
	              }
	            }
	          }

	          // Compute the prefix and suffix.
	          valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	          valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

	          // Break the formatted value into the integer “value” part that can be
	          // grouped, and fractional or exponential “suffix” part that is not.
	          if (maybeSuffix) {
	            i = -1, n = value.length;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), 48 > c || c > 57) {
	                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	                value = value.slice(0, i);
	                break;
	              }
	            }
	          }
	        }

	        // If the fill character is not "0", grouping is applied before padding.
	        if (comma && !zero) value = group(value, Infinity);

	        // Compute the padding.
	        var length = valuePrefix.length + value.length + valueSuffix.length,
	            padding = length < width ? new Array(width - length + 1).join(fill) : "";

	        // If the fill character is "0", grouping is applied after padding.
	        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

	        // Reconstruct the final output based on the desired alignment.
	        switch (align) {
	          case "<": return valuePrefix + value + valueSuffix + padding;
	          case "=": return valuePrefix + padding + value + valueSuffix;
	          case "^": return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	        }
	        return padding + valuePrefix + value + valueSuffix;
	      }

	      format.toString = function() {
	        return specifier + "";
	      };

	      return format;
	    }

	    function formatPrefix(specifier, value) {
	      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
	          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
	          k = Math.pow(10, -e),
	          prefix = prefixes[8 + e / 3];
	      return function(value) {
	        return f(k * value) + prefix;
	      };
	    }

	    return {
	      format: newFormat,
	      formatPrefix: formatPrefix
	    };
	  }

	  var defaultLocale = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["$", ""]
	  });

	  var caES = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var csCZ = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0Kč"]
	  });

	  var deCH = locale({
	    decimal: ",",
	    thousands: "'",
	    grouping: [3],
	    currency: ["", "\xa0CHF"]
	  });

	  var deDE = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var enCA = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["$", ""]
	  });

	  var enGB = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["£", ""]
	  });

	  var esES = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var fiFI = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var frCA = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "$"]
	  });

	  var frFR = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var heIL = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["₪", ""]
	  });

	  var huHU = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0Ft"]
	  });

	  var itIT = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["€", ""]
	  });

	  var jaJP = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["", "円"]
	  });

	  var koKR = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["₩", ""]
	  });

	  var mkMK = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0ден."]
	  });

	  var nlNL = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["€\xa0", ""]
	  });

	  var plPL = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "zł"]
	  });

	  var ptBR = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["R$", ""]
	  });

	  var ruRU = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0руб."]
	  });

	  var svSE = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "SEK"]
	  });

	  var zhCN = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["¥", ""]
	  });

	  function precisionFixed(step) {
	    return Math.max(0, -exponent(Math.abs(step)));
	  }

	  function precisionPrefix(step, value) {
	    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
	  }

	  function precisionRound(step, max) {
	    step = Math.abs(step), max = Math.abs(max) - step;
	    return Math.max(0, exponent(max) - exponent(step)) + 1;
	  }

	  var format = defaultLocale.format;
	  var formatPrefix = defaultLocale.formatPrefix;

	  var version = "0.5.1";

	  exports.version = version;
	  exports.format = format;
	  exports.formatPrefix = formatPrefix;
	  exports.formatLocale = locale;
	  exports.formatCaEs = caES;
	  exports.formatCsCz = csCZ;
	  exports.formatDeCh = deCH;
	  exports.formatDeDe = deDE;
	  exports.formatEnCa = enCA;
	  exports.formatEnGb = enGB;
	  exports.formatEnUs = defaultLocale;
	  exports.formatEsEs = esES;
	  exports.formatFiFi = fiFI;
	  exports.formatFrCa = frCA;
	  exports.formatFrFr = frFR;
	  exports.formatHeIl = heIL;
	  exports.formatHuHu = huHU;
	  exports.formatItIt = itIT;
	  exports.formatJaJp = jaJP;
	  exports.formatKoKr = koKR;
	  exports.formatMkMk = mkMK;
	  exports.formatNlNl = nlNL;
	  exports.formatPlPl = plPL;
	  exports.formatPtBr = ptBR;
	  exports.formatRuRu = ruRU;
	  exports.formatSvSe = svSE;
	  exports.formatZhCn = zhCN;
	  exports.formatSpecifier = formatSpecifier;
	  exports.precisionFixed = precisionFixed;
	  exports.precisionPrefix = precisionPrefix;
	  exports.precisionRound = precisionRound;

	}));

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_collection = {})));
	}(this, function (exports) { 'use strict';

	  var prefix = "$";

	  function Map() {}

	  Map.prototype = map.prototype = {
	    has: function(key) {
	      return (prefix + key) in this;
	    },
	    get: function(key) {
	      return this[prefix + key];
	    },
	    set: function(key, value) {
	      this[prefix + key] = value;
	      return this;
	    },
	    remove: function(key) {
	      var property = prefix + key;
	      return property in this && delete this[property];
	    },
	    clear: function() {
	      for (var property in this) if (property[0] === prefix) delete this[property];
	    },
	    keys: function() {
	      var keys = [];
	      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
	      return keys;
	    },
	    values: function() {
	      var values = [];
	      for (var property in this) if (property[0] === prefix) values.push(this[property]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
	      return entries;
	    },
	    size: function() {
	      var size = 0;
	      for (var property in this) if (property[0] === prefix) ++size;
	      return size;
	    },
	    empty: function() {
	      for (var property in this) if (property[0] === prefix) return false;
	      return true;
	    },
	    each: function(f) {
	      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
	    }
	  };

	  function map(object, f) {
	    var map = new Map;

	    // Copy constructor.
	    if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

	    // Index array by numeric index or specified key function.
	    else if (Array.isArray(object)) {
	      var i = -1,
	          n = object.length,
	          o;

	      if (f == null) while (++i < n) map.set(i, object[i]);
	      else while (++i < n) map.set(f(o = object[i], i, object), o);
	    }

	    // Convert object to map.
	    else if (object) for (var key in object) map.set(key, object[key]);

	    return map;
	  }

	  function nest() {
	    var keys = [],
	        sortKeys = [],
	        sortValues,
	        rollup,
	        nest;

	    function apply(array, depth, createResult, setResult) {
	      if (depth >= keys.length) return rollup
	          ? rollup(array) : (sortValues
	          ? array.sort(sortValues)
	          : array);

	      var i = -1,
	          n = array.length,
	          key = keys[depth++],
	          keyValue,
	          value,
	          valuesByKey = map(),
	          values,
	          result = createResult();

	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	          values.push(value);
	        } else {
	          valuesByKey.set(keyValue, [value]);
	        }
	      }

	      valuesByKey.each(function(values, key) {
	        setResult(result, key, apply(values, depth, createResult, setResult));
	      });

	      return result;
	    }

	    function entries(map, depth) {
	      if (depth >= keys.length) return map;

	      var array = [],
	          sortKey = sortKeys[depth++];

	      map.each(function(value, key) {
	        array.push({key: key, values: entries(value, depth)});
	      });

	      return sortKey
	          ? array.sort(function(a, b) { return sortKey(a.key, b.key); })
	          : array;
	    }

	    return nest = {
	      object: function(array) { return apply(array, 0, createObject, setObject); },
	      map: function(array) { return apply(array, 0, createMap, setMap); },
	      entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	      key: function(d) { keys.push(d); return nest; },
	      sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	      sortValues: function(order) { sortValues = order; return nest; },
	      rollup: function(f) { rollup = f; return nest; }
	    };
	  }

	  function createObject() {
	    return {};
	  }

	  function setObject(object, key, value) {
	    object[key] = value;
	  }

	  function createMap() {
	    return map();
	  }

	  function setMap(map, key, value) {
	    map.set(key, value);
	  }

	  function Set() {}

	  var proto = map.prototype;

	  Set.prototype = set.prototype = {
	    has: proto.has,
	    add: function(value) {
	      value += "";
	      this[prefix + value] = value;
	      return this;
	    },
	    remove: proto.remove,
	    clear: proto.clear,
	    values: proto.keys,
	    size: proto.size,
	    empty: proto.empty,
	    each: proto.each
	  };

	  function set(object, f) {
	    var set = new Set;

	    // Copy constructor.
	    if (object instanceof Set) object.each(function(value) { set.add(value); });

	    // Otherwise, assume it’s an array.
	    else if (object) {
	      var i = -1, n = object.length;
	      if (f == null) while (++i < n) set.add(object[i]);
	      else while (++i < n) set.add(f(object[i], i, object));
	    }

	    return set;
	  }

	  function keys(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  }

	  function values(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  }

	  function entries(map) {
	    var entries = [];
	    for (var key in map) entries.push({key: key, value: map[key]});
	    return entries;
	  }

	  var version = "0.1.1";

	  exports.version = version;
	  exports.nest = nest;
	  exports.set = set;
	  exports.map = map;
	  exports.keys = keys;
	  exports.values = values;
	  exports.entries = entries;

	}));

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_time = {})));
	}(this, function (exports) { 'use strict';

	  var t0 = new Date;
	  var t1 = new Date;
	  function newInterval(floori, offseti, count, field) {

	    function interval(date) {
	      return floori(date = new Date(+date)), date;
	    }

	    interval.floor = interval;

	    interval.round = function(date) {
	      var d0 = new Date(+date),
	          d1 = new Date(date - 1);
	      floori(d0), floori(d1), offseti(d1, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    };

	    interval.ceil = function(date) {
	      return floori(date = new Date(date - 1)), offseti(date, 1), date;
	    };

	    interval.offset = function(date, step) {
	      return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	    };

	    interval.range = function(start, stop, step) {
	      var range = [];
	      start = new Date(start - 1);
	      stop = new Date(+stop);
	      step = step == null ? 1 : Math.floor(step);
	      if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	      offseti(start, 1), floori(start);
	      if (start < stop) range.push(new Date(+start));
	      while (offseti(start, step), floori(start), start < stop) range.push(new Date(+start));
	      return range;
	    };

	    interval.filter = function(test) {
	      return newInterval(function(date) {
	        while (floori(date), !test(date)) date.setTime(date - 1);
	      }, function(date, step) {
	        while (--step >= 0) while (offseti(date, 1), !test(date));
	      });
	    };

	    if (count) {
	      interval.count = function(start, end) {
	        t0.setTime(+start), t1.setTime(+end);
	        floori(t0), floori(t1);
	        return Math.floor(count(t0, t1));
	      };

	      interval.every = function(step) {
	        step = Math.floor(step);
	        return !isFinite(step) || !(step > 0) ? null
	            : !(step > 1) ? interval
	            : interval.filter(field
	                ? function(d) { return field(d) % step === 0; }
	                : function(d) { return interval.count(0, d) % step === 0; });
	      };
	    }

	    return interval;
	  }

	  var millisecond = newInterval(function() {
	    // noop
	  }, function(date, step) {
	    date.setTime(+date + step);
	  }, function(start, end) {
	    return end - start;
	  });

	  // An optimized implementation for this simple case.
	  millisecond.every = function(k) {
	    k = Math.floor(k);
	    if (!isFinite(k) || !(k > 0)) return null;
	    if (!(k > 1)) return millisecond;
	    return newInterval(function(date) {
	      date.setTime(Math.floor(date / k) * k);
	    }, function(date, step) {
	      date.setTime(+date + step * k);
	    }, function(start, end) {
	      return (end - start) / k;
	    });
	  };

	  var second = newInterval(function(date) {
	    date.setMilliseconds(0);
	  }, function(date, step) {
	    date.setTime(+date + step * 1e3);
	  }, function(start, end) {
	    return (end - start) / 1e3;
	  }, function(date) {
	    return date.getSeconds();
	  });

	  var minute = newInterval(function(date) {
	    date.setSeconds(0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * 6e4);
	  }, function(start, end) {
	    return (end - start) / 6e4;
	  }, function(date) {
	    return date.getMinutes();
	  });

	  var hour = newInterval(function(date) {
	    date.setMinutes(0, 0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * 36e5);
	  }, function(start, end) {
	    return (end - start) / 36e5;
	  }, function(date) {
	    return date.getHours();
	  });

	  var day = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setDate(date.getDate() + step);
	  }, function(start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 864e5;
	  }, function(date) {
	    return date.getDate() - 1;
	  });

	  function weekday(i) {
	    return newInterval(function(date) {
	      date.setHours(0, 0, 0, 0);
	      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	    }, function(date, step) {
	      date.setDate(date.getDate() + step * 7);
	    }, function(start, end) {
	      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 6048e5;
	    });
	  }

	  var sunday = weekday(0);
	  var monday = weekday(1);
	  var tuesday = weekday(2);
	  var wednesday = weekday(3);
	  var thursday = weekday(4);
	  var friday = weekday(5);
	  var saturday = weekday(6);

	  var month = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	    date.setDate(1);
	  }, function(date, step) {
	    date.setMonth(date.getMonth() + step);
	  }, function(start, end) {
	    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	  }, function(date) {
	    return date.getMonth();
	  });

	  var year = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	    date.setMonth(0, 1);
	  }, function(date, step) {
	    date.setFullYear(date.getFullYear() + step);
	  }, function(start, end) {
	    return end.getFullYear() - start.getFullYear();
	  }, function(date) {
	    return date.getFullYear();
	  });

	  var utcSecond = newInterval(function(date) {
	    date.setUTCMilliseconds(0);
	  }, function(date, step) {
	    date.setTime(+date + step * 1e3);
	  }, function(start, end) {
	    return (end - start) / 1e3;
	  }, function(date) {
	    return date.getUTCSeconds();
	  });

	  var utcMinute = newInterval(function(date) {
	    date.setUTCSeconds(0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * 6e4);
	  }, function(start, end) {
	    return (end - start) / 6e4;
	  }, function(date) {
	    return date.getUTCMinutes();
	  });

	  var utcHour = newInterval(function(date) {
	    date.setUTCMinutes(0, 0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * 36e5);
	  }, function(start, end) {
	    return (end - start) / 36e5;
	  }, function(date) {
	    return date.getUTCHours();
	  });

	  var utcDay = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCDate(date.getUTCDate() + step);
	  }, function(start, end) {
	    return (end - start) / 864e5;
	  }, function(date) {
	    return date.getUTCDate() - 1;
	  });

	  function utcWeekday(i) {
	    return newInterval(function(date) {
	      date.setUTCHours(0, 0, 0, 0);
	      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	    }, function(date, step) {
	      date.setUTCDate(date.getUTCDate() + step * 7);
	    }, function(start, end) {
	      return (end - start) / 6048e5;
	    });
	  }

	  var utcSunday = utcWeekday(0);
	  var utcMonday = utcWeekday(1);
	  var utcTuesday = utcWeekday(2);
	  var utcWednesday = utcWeekday(3);
	  var utcThursday = utcWeekday(4);
	  var utcFriday = utcWeekday(5);
	  var utcSaturday = utcWeekday(6);

	  var utcMonth = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	    date.setUTCDate(1);
	  }, function(date, step) {
	    date.setUTCMonth(date.getUTCMonth() + step);
	  }, function(start, end) {
	    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	  }, function(date) {
	    return date.getUTCMonth();
	  });

	  var utcYear = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	    date.setUTCMonth(0, 1);
	  }, function(date, step) {
	    date.setUTCFullYear(date.getUTCFullYear() + step);
	  }, function(start, end) {
	    return end.getUTCFullYear() - start.getUTCFullYear();
	  }, function(date) {
	    return date.getUTCFullYear();
	  });

	  var timeMilliseconds = millisecond.range;
	  var timeSeconds = second.range;
	  var timeMinutes = minute.range;
	  var timeHours = hour.range;
	  var timeDays = day.range;
	  var timeSundays = sunday.range;
	  var timeMondays = monday.range;
	  var timeTuesdays = tuesday.range;
	  var timeWednesdays = wednesday.range;
	  var timeThursdays = thursday.range;
	  var timeFridays = friday.range;
	  var timeSaturdays = saturday.range;
	  var timeWeeks = sunday.range;
	  var timeMonths = month.range;
	  var timeYears = year.range;

	  var utcMillisecond = millisecond;
	  var utcMilliseconds = timeMilliseconds;
	  var utcSeconds = utcSecond.range;
	  var utcMinutes = utcMinute.range;
	  var utcHours = utcHour.range;
	  var utcDays = utcDay.range;
	  var utcSundays = utcSunday.range;
	  var utcMondays = utcMonday.range;
	  var utcTuesdays = utcTuesday.range;
	  var utcWednesdays = utcWednesday.range;
	  var utcThursdays = utcThursday.range;
	  var utcFridays = utcFriday.range;
	  var utcSaturdays = utcSaturday.range;
	  var utcWeeks = utcSunday.range;
	  var utcMonths = utcMonth.range;
	  var utcYears = utcYear.range;

	  var version = "0.2.1";

	  exports.version = version;
	  exports.timeMilliseconds = timeMilliseconds;
	  exports.timeSeconds = timeSeconds;
	  exports.timeMinutes = timeMinutes;
	  exports.timeHours = timeHours;
	  exports.timeDays = timeDays;
	  exports.timeSundays = timeSundays;
	  exports.timeMondays = timeMondays;
	  exports.timeTuesdays = timeTuesdays;
	  exports.timeWednesdays = timeWednesdays;
	  exports.timeThursdays = timeThursdays;
	  exports.timeFridays = timeFridays;
	  exports.timeSaturdays = timeSaturdays;
	  exports.timeWeeks = timeWeeks;
	  exports.timeMonths = timeMonths;
	  exports.timeYears = timeYears;
	  exports.utcMillisecond = utcMillisecond;
	  exports.utcMilliseconds = utcMilliseconds;
	  exports.utcSeconds = utcSeconds;
	  exports.utcMinutes = utcMinutes;
	  exports.utcHours = utcHours;
	  exports.utcDays = utcDays;
	  exports.utcSundays = utcSundays;
	  exports.utcMondays = utcMondays;
	  exports.utcTuesdays = utcTuesdays;
	  exports.utcWednesdays = utcWednesdays;
	  exports.utcThursdays = utcThursdays;
	  exports.utcFridays = utcFridays;
	  exports.utcSaturdays = utcSaturdays;
	  exports.utcWeeks = utcWeeks;
	  exports.utcMonths = utcMonths;
	  exports.utcYears = utcYears;
	  exports.timeMillisecond = millisecond;
	  exports.timeSecond = second;
	  exports.timeMinute = minute;
	  exports.timeHour = hour;
	  exports.timeDay = day;
	  exports.timeSunday = sunday;
	  exports.timeMonday = monday;
	  exports.timeTuesday = tuesday;
	  exports.timeWednesday = wednesday;
	  exports.timeThursday = thursday;
	  exports.timeFriday = friday;
	  exports.timeSaturday = saturday;
	  exports.timeWeek = sunday;
	  exports.timeMonth = month;
	  exports.timeYear = year;
	  exports.utcSecond = utcSecond;
	  exports.utcMinute = utcMinute;
	  exports.utcHour = utcHour;
	  exports.utcDay = utcDay;
	  exports.utcSunday = utcSunday;
	  exports.utcMonday = utcMonday;
	  exports.utcTuesday = utcTuesday;
	  exports.utcWednesday = utcWednesday;
	  exports.utcThursday = utcThursday;
	  exports.utcFriday = utcFriday;
	  exports.utcSaturday = utcSaturday;
	  exports.utcWeek = utcSunday;
	  exports.utcMonth = utcMonth;
	  exports.utcYear = utcYear;
	  exports.timeInterval = newInterval;

	}));

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(230)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-time'], factory) :
	  (factory((global.d3_time_format = {}),global.d3_time));
	}(this, function (exports,d3Time) { 'use strict';

	  function localDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	      date.setFullYear(d.y);
	      return date;
	    }
	    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	  }

	  function utcDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	      date.setUTCFullYear(d.y);
	      return date;
	    }
	    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	  }

	  function newYear(y) {
	    return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
	  }

	  function locale$1(locale) {
	    var locale_dateTime = locale.dateTime,
	        locale_date = locale.date,
	        locale_time = locale.time,
	        locale_periods = locale.periods,
	        locale_weekdays = locale.days,
	        locale_shortWeekdays = locale.shortDays,
	        locale_months = locale.months,
	        locale_shortMonths = locale.shortMonths;

	    var periodRe = formatRe(locale_periods),
	        periodLookup = formatLookup(locale_periods),
	        weekdayRe = formatRe(locale_weekdays),
	        weekdayLookup = formatLookup(locale_weekdays),
	        shortWeekdayRe = formatRe(locale_shortWeekdays),
	        shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	        monthRe = formatRe(locale_months),
	        monthLookup = formatLookup(locale_months),
	        shortMonthRe = formatRe(locale_shortMonths),
	        shortMonthLookup = formatLookup(locale_shortMonths);

	    var formats = {
	      "a": formatShortWeekday,
	      "A": formatWeekday,
	      "b": formatShortMonth,
	      "B": formatMonth,
	      "c": null,
	      "d": formatDayOfMonth,
	      "e": formatDayOfMonth,
	      "H": formatHour24,
	      "I": formatHour12,
	      "j": formatDayOfYear,
	      "L": formatMilliseconds,
	      "m": formatMonthNumber,
	      "M": formatMinutes,
	      "p": formatPeriod,
	      "S": formatSeconds,
	      "U": formatWeekNumberSunday,
	      "w": formatWeekdayNumber,
	      "W": formatWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatYear,
	      "Y": formatFullYear,
	      "Z": formatZone,
	      "%": formatLiteralPercent
	    };

	    var utcFormats = {
	      "a": formatUTCShortWeekday,
	      "A": formatUTCWeekday,
	      "b": formatUTCShortMonth,
	      "B": formatUTCMonth,
	      "c": null,
	      "d": formatUTCDayOfMonth,
	      "e": formatUTCDayOfMonth,
	      "H": formatUTCHour24,
	      "I": formatUTCHour12,
	      "j": formatUTCDayOfYear,
	      "L": formatUTCMilliseconds,
	      "m": formatUTCMonthNumber,
	      "M": formatUTCMinutes,
	      "p": formatUTCPeriod,
	      "S": formatUTCSeconds,
	      "U": formatUTCWeekNumberSunday,
	      "w": formatUTCWeekdayNumber,
	      "W": formatUTCWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatUTCYear,
	      "Y": formatUTCFullYear,
	      "Z": formatUTCZone,
	      "%": formatLiteralPercent
	    };

	    var parses = {
	      "a": parseShortWeekday,
	      "A": parseWeekday,
	      "b": parseShortMonth,
	      "B": parseMonth,
	      "c": parseLocaleDateTime,
	      "d": parseDayOfMonth,
	      "e": parseDayOfMonth,
	      "H": parseHour24,
	      "I": parseHour24,
	      "j": parseDayOfYear,
	      "L": parseMilliseconds,
	      "m": parseMonthNumber,
	      "M": parseMinutes,
	      "p": parsePeriod,
	      "S": parseSeconds,
	      "U": parseWeekNumberSunday,
	      "w": parseWeekdayNumber,
	      "W": parseWeekNumberMonday,
	      "x": parseLocaleDate,
	      "X": parseLocaleTime,
	      "y": parseYear,
	      "Y": parseFullYear,
	      "Z": parseZone,
	      "%": parseLiteralPercent
	    };

	    // These recursive directive definitions must be deferred.
	    formats.x = newFormat(locale_date, formats);
	    formats.X = newFormat(locale_time, formats);
	    formats.c = newFormat(locale_dateTime, formats);
	    utcFormats.x = newFormat(locale_date, utcFormats);
	    utcFormats.X = newFormat(locale_time, utcFormats);
	    utcFormats.c = newFormat(locale_dateTime, utcFormats);

	    function newFormat(specifier, formats) {
	      return function(date) {
	        var string = [],
	            i = -1,
	            j = 0,
	            n = specifier.length,
	            c,
	            pad,
	            format;

	        if (!(date instanceof Date)) date = new Date(+date);

	        while (++i < n) {
	          if (specifier.charCodeAt(i) === 37) {
	            string.push(specifier.slice(j, i));
	            if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
	            else pad = c === "e" ? " " : "0";
	            if (format = formats[c]) c = format(date, pad);
	            string.push(c);
	            j = i + 1;
	          }
	        }

	        string.push(specifier.slice(j, i));
	        return string.join("");
	      };
	    }

	    function newParse(specifier, newDate) {
	      return function(string) {
	        var d = newYear(1900),
	            i = parseSpecifier(d, specifier, string += "", 0);
	        if (i != string.length) return null;

	        // The am-pm flag is 0 for AM, and 1 for PM.
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;

	        // Convert day-of-week and week-of-year to day-of-year.
	        if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	          d.m = 0;
	          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
	        }

	        // If a time zone is specified, all fields are interpreted as UTC and then
	        // offset according to the specified time zone.
	        if ("Z" in d) {
	          d.H += d.Z / 100 | 0;
	          d.M += d.Z % 100;
	          return utcDate(d);
	        }

	        // Otherwise, all fields are in local time.
	        return newDate(d);
	      };
	    }

	    function parseSpecifier(d, specifier, string, j) {
	      var i = 0,
	          n = specifier.length,
	          m = string.length,
	          c,
	          parse;

	      while (i < n) {
	        if (j >= m) return -1;
	        c = specifier.charCodeAt(i++);
	        if (c === 37) {
	          c = specifier.charAt(i++);
	          parse = parses[c in pads ? specifier.charAt(i++) : c];
	          if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }

	      return j;
	    }

	    function parsePeriod(d, string, i) {
	      var n = periodRe.exec(string.slice(i));
	      return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseShortWeekday(d, string, i) {
	      var n = shortWeekdayRe.exec(string.slice(i));
	      return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseWeekday(d, string, i) {
	      var n = weekdayRe.exec(string.slice(i));
	      return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseShortMonth(d, string, i) {
	      var n = shortMonthRe.exec(string.slice(i));
	      return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseMonth(d, string, i) {
	      var n = monthRe.exec(string.slice(i));
	      return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseLocaleDateTime(d, string, i) {
	      return parseSpecifier(d, locale_dateTime, string, i);
	    }

	    function parseLocaleDate(d, string, i) {
	      return parseSpecifier(d, locale_date, string, i);
	    }

	    function parseLocaleTime(d, string, i) {
	      return parseSpecifier(d, locale_time, string, i);
	    }

	    function formatShortWeekday(d) {
	      return locale_shortWeekdays[d.getDay()];
	    }

	    function formatWeekday(d) {
	      return locale_weekdays[d.getDay()];
	    }

	    function formatShortMonth(d) {
	      return locale_shortMonths[d.getMonth()];
	    }

	    function formatMonth(d) {
	      return locale_months[d.getMonth()];
	    }

	    function formatPeriod(d) {
	      return locale_periods[+(d.getHours() >= 12)];
	    }

	    function formatUTCShortWeekday(d) {
	      return locale_shortWeekdays[d.getUTCDay()];
	    }

	    function formatUTCWeekday(d) {
	      return locale_weekdays[d.getUTCDay()];
	    }

	    function formatUTCShortMonth(d) {
	      return locale_shortMonths[d.getUTCMonth()];
	    }

	    function formatUTCMonth(d) {
	      return locale_months[d.getUTCMonth()];
	    }

	    function formatUTCPeriod(d) {
	      return locale_periods[+(d.getUTCHours() >= 12)];
	    }

	    return {
	      format: function(specifier) {
	        var f = newFormat(specifier += "", formats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      parse: function(specifier) {
	        var p = newParse(specifier += "", localDate);
	        p.toString = function() { return specifier; };
	        return p;
	      },
	      utcFormat: function(specifier) {
	        var f = newFormat(specifier += "", utcFormats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      utcParse: function(specifier) {
	        var p = newParse(specifier, utcDate);
	        p.toString = function() { return specifier; };
	        return p;
	      }
	    };
	  }

	  var pads = {"-": "", "_": " ", "0": "0"};
	  var numberRe = /^\s*\d+/;
	  var percentRe = /^%/;
	  var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  function pad(value, fill, width) {
	    var sign = value < 0 ? "-" : "",
	        string = (sign ? -value : value) + "",
	        length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }

	  function requote(s) {
	    return s.replace(requoteRe, "\\$&");
	  }

	  function formatRe(names) {
	    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	  }

	  function formatLookup(names) {
	    var map = {}, i = -1, n = names.length;
	    while (++i < n) map[names[i].toLowerCase()] = i;
	    return map;
	  }

	  function parseWeekdayNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 1));
	    return n ? (d.w = +n[0], i + n[0].length) : -1;
	  }

	  function parseWeekNumberSunday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.U = +n[0], i + n[0].length) : -1;
	  }

	  function parseWeekNumberMonday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.W = +n[0], i + n[0].length) : -1;
	  }

	  function parseFullYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 4));
	    return n ? (d.y = +n[0], i + n[0].length) : -1;
	  }

	  function parseYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	  }

	  function parseZone(d, string, i) {
	    var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
	    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	  }

	  function parseMonthNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	  }

	  function parseDayOfMonth(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.d = +n[0], i + n[0].length) : -1;
	  }

	  function parseDayOfYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	  }

	  function parseHour24(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.H = +n[0], i + n[0].length) : -1;
	  }

	  function parseMinutes(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.M = +n[0], i + n[0].length) : -1;
	  }

	  function parseSeconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.S = +n[0], i + n[0].length) : -1;
	  }

	  function parseMilliseconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.L = +n[0], i + n[0].length) : -1;
	  }

	  function parseLiteralPercent(d, string, i) {
	    var n = percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }

	  function formatDayOfMonth(d, p) {
	    return pad(d.getDate(), p, 2);
	  }

	  function formatHour24(d, p) {
	    return pad(d.getHours(), p, 2);
	  }

	  function formatHour12(d, p) {
	    return pad(d.getHours() % 12 || 12, p, 2);
	  }

	  function formatDayOfYear(d, p) {
	    return pad(1 + d3Time.timeDay.count(d3Time.timeYear(d), d), p, 3);
	  }

	  function formatMilliseconds(d, p) {
	    return pad(d.getMilliseconds(), p, 3);
	  }

	  function formatMonthNumber(d, p) {
	    return pad(d.getMonth() + 1, p, 2);
	  }

	  function formatMinutes(d, p) {
	    return pad(d.getMinutes(), p, 2);
	  }

	  function formatSeconds(d, p) {
	    return pad(d.getSeconds(), p, 2);
	  }

	  function formatWeekNumberSunday(d, p) {
	    return pad(d3Time.timeSunday.count(d3Time.timeYear(d), d), p, 2);
	  }

	  function formatWeekdayNumber(d) {
	    return d.getDay();
	  }

	  function formatWeekNumberMonday(d, p) {
	    return pad(d3Time.timeMonday.count(d3Time.timeYear(d), d), p, 2);
	  }

	  function formatYear(d, p) {
	    return pad(d.getFullYear() % 100, p, 2);
	  }

	  function formatFullYear(d, p) {
	    return pad(d.getFullYear() % 10000, p, 4);
	  }

	  function formatZone(d) {
	    var z = d.getTimezoneOffset();
	    return (z > 0 ? "-" : (z *= -1, "+"))
	        + pad(z / 60 | 0, "0", 2)
	        + pad(z % 60, "0", 2);
	  }

	  function formatUTCDayOfMonth(d, p) {
	    return pad(d.getUTCDate(), p, 2);
	  }

	  function formatUTCHour24(d, p) {
	    return pad(d.getUTCHours(), p, 2);
	  }

	  function formatUTCHour12(d, p) {
	    return pad(d.getUTCHours() % 12 || 12, p, 2);
	  }

	  function formatUTCDayOfYear(d, p) {
	    return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3);
	  }

	  function formatUTCMilliseconds(d, p) {
	    return pad(d.getUTCMilliseconds(), p, 3);
	  }

	  function formatUTCMonthNumber(d, p) {
	    return pad(d.getUTCMonth() + 1, p, 2);
	  }

	  function formatUTCMinutes(d, p) {
	    return pad(d.getUTCMinutes(), p, 2);
	  }

	  function formatUTCSeconds(d, p) {
	    return pad(d.getUTCSeconds(), p, 2);
	  }

	  function formatUTCWeekNumberSunday(d, p) {
	    return pad(d3Time.utcSunday.count(d3Time.utcYear(d), d), p, 2);
	  }

	  function formatUTCWeekdayNumber(d) {
	    return d.getUTCDay();
	  }

	  function formatUTCWeekNumberMonday(d, p) {
	    return pad(d3Time.utcMonday.count(d3Time.utcYear(d), d), p, 2);
	  }

	  function formatUTCYear(d, p) {
	    return pad(d.getUTCFullYear() % 100, p, 2);
	  }

	  function formatUTCFullYear(d, p) {
	    return pad(d.getUTCFullYear() % 10000, p, 4);
	  }

	  function formatUTCZone() {
	    return "+0000";
	  }

	  function formatLiteralPercent() {
	    return "%";
	  }

	  var locale = locale$1({
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });

	  var caES = locale$1({
	    dateTime: "%A, %e de %B de %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
	    shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
	    months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
	    shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
	  });

	  var deCH = locale$1({
	    dateTime: "%A, der %e. %B %Y, %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
	    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
	  });

	  var deDE = locale$1({
	    dateTime: "%A, der %e. %B %Y, %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
	    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
	  });

	  var enCA = locale$1({
	    dateTime: "%a %b %e %X %Y",
	    date: "%Y-%m-%d",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });

	  var enGB = locale$1({
	    dateTime: "%a %e %b %X %Y",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });

	  var esES = locale$1({
	    dateTime: "%A, %e de %B de %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
	    shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
	    months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
	    shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
	  });

	  var fiFI = locale$1({
	    dateTime: "%A, %-d. %Bta %Y klo %X",
	    date: "%-d.%-m.%Y",
	    time: "%H:%M:%S",
	    periods: ["a.m.", "p.m."],
	    days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
	    shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
	    months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
	    shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
	  });

	  var frCA = locale$1({
	    dateTime: "%a %e %b %Y %X",
	    date: "%Y-%m-%d",
	    time: "%H:%M:%S",
	    periods: ["", ""],
	    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
	    shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
	    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
	    shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
	  });

	  var frFR = locale$1({
	    dateTime: "%A, le %e %B %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
	    shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
	    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
	    shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
	  });

	  var heIL = locale$1({
	    dateTime: "%A, %e ב%B %Y %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
	    shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
	    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
	    shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
	  });

	  var huHU = locale$1({
	    dateTime: "%Y. %B %-e., %A %X",
	    date: "%Y. %m. %d.",
	    time: "%H:%M:%S",
	    periods: ["de.", "du."], // unused
	    days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
	    shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
	    months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
	    shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
	  });

	  var itIT = locale$1({
	    dateTime: "%A %e %B %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
	    shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
	    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
	    shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
	  });

	  var jaJP = locale$1({
	    dateTime: "%Y %b %e %a %X",
	    date: "%Y/%m/%d",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
	    shortDays: ["日", "月", "火", "水", "木", "金", "土"],
	    months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
	    shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
	  });

	  var koKR = locale$1({
	    dateTime: "%Y/%m/%d %a %X",
	    date: "%Y/%m/%d",
	    time: "%H:%M:%S",
	    periods: ["오전", "오후"],
	    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
	    shortDays: ["일", "월", "화", "수", "목", "금", "토"],
	    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
	    shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
	  });

	  var mkMK = locale$1({
	    dateTime: "%A, %e %B %Y г. %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
	    shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
	    months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
	    shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
	  });

	  var nlNL = locale$1({
	    dateTime: "%a %e %B %Y %T",
	    date: "%d-%m-%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
	    shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
	    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
	    shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
	  });

	  var plPL = locale$1({
	    dateTime: "%A, %e %B %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
	    shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
	    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
	    shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."]/* In Polish language abbraviated months are not commonly used so there is a dispute about the proper abbraviations. */
	  });

	  var ptBR = locale$1({
	    dateTime: "%A, %e de %B de %Y. %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
	    shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
	    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
	    shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
	  });

	  var ruRU = locale$1({
	    dateTime: "%A, %e %B %Y г. %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
	    shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
	    months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
	    shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
	  });

	  var svSE = locale$1({
	    dateTime: "%A den %d %B %Y %X",
	    date: "%Y-%m-%d",
	    time: "%H:%M:%S",
	    periods: ["fm", "em"],
	    days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
	    shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
	    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
	  });

	  var zhCN = locale$1({
	    dateTime: "%a %b %e %X %Y",
	    date: "%Y/%-m/%-d",
	    time: "%H:%M:%S",
	    periods: ["上午", "下午"],
	    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	    shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	    shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
	  });

	  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

	  function formatIsoNative(date) {
	    return date.toISOString();
	  }

	  var formatIso = Date.prototype.toISOString
	      ? formatIsoNative
	      : locale.utcFormat(isoSpecifier);

	  function parseIsoNative(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  }

	  var parseIso = +new Date("2000-01-01T00:00:00.000Z")
	      ? parseIsoNative
	      : locale.utcParse(isoSpecifier);

	  var timeFormat = locale.format;
	  var timeParse = locale.parse;
	  var utcFormat = locale.utcFormat;
	  var utcParse = locale.utcParse;

	  var version = "0.3.1";

	  exports.version = version;
	  exports.timeFormat = timeFormat;
	  exports.timeParse = timeParse;
	  exports.utcFormat = utcFormat;
	  exports.utcParse = utcParse;
	  exports.timeFormatLocale = locale$1;
	  exports.timeFormatCaEs = caES;
	  exports.timeFormatDeCh = deCH;
	  exports.timeFormatDeDe = deDE;
	  exports.timeFormatEnCa = enCA;
	  exports.timeFormatEnGb = enGB;
	  exports.timeFormatEnUs = locale;
	  exports.timeFormatEsEs = esES;
	  exports.timeFormatFiFi = fiFI;
	  exports.timeFormatFrCa = frCA;
	  exports.timeFormatFrFr = frFR;
	  exports.timeFormatHeIl = heIL;
	  exports.timeFormatHuHu = huHU;
	  exports.timeFormatItIt = itIT;
	  exports.timeFormatJaJp = jaJP;
	  exports.timeFormatKoKr = koKR;
	  exports.timeFormatMkMk = mkMK;
	  exports.timeFormatNlNl = nlNL;
	  exports.timeFormatPlPl = plPL;
	  exports.timeFormatPtBr = ptBR;
	  exports.timeFormatRuRu = ruRU;
	  exports.timeFormatSvSe = svSE;
	  exports.timeFormatZhCn = zhCN;
	  exports.isoFormat = formatIso;
	  exports.isoParse = parseIso;

	}));

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isString = __webpack_require__(103);

	var _isString2 = _interopRequireDefault(_isString);

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Reference Line
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _ReactUtils = __webpack_require__(124);

	var _DataUtils = __webpack_require__(120);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReferenceLine = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ReferenceLine, _Component);

	  function ReferenceLine() {
	    _classCallCheck(this, ReferenceLine);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReferenceLine).apply(this, arguments));
	  }

	  _createClass(ReferenceLine, [{
	    key: 'getEndPoints',
	    value: function getEndPoints(isX, isY) {
	      var _props = this.props;
	      var xAxisMap = _props.xAxisMap;
	      var yAxisMap = _props.yAxisMap;
	      var xAxisId = _props.xAxisId;
	      var yAxisId = _props.yAxisId;
	      var viewBox = _props.viewBox;
	      var x = viewBox.x;
	      var y = viewBox.y;
	      var width = viewBox.width;
	      var height = viewBox.height;


	      if (isY) {
	        var value = this.props.y;
	        var scale = yAxisMap[yAxisId].scale;
	        var coord = scale(value);

	        if ((0, _DataUtils.validateCoordinateInRange)(coord, scale)) {
	          return yAxisMap[yAxisId].orientation === 'left' ? [{ x: x, y: coord }, { x: x + width, y: coord }] : [{ x: x + width, y: coord }, { x: x, y: coord }];
	        }
	      } else if (isX) {
	        var value = this.props.x;
	        var scale = xAxisMap[xAxisId].scale;
	        var coord = scale(value);

	        if ((0, _DataUtils.validateCoordinateInRange)(coord, scale)) {
	          return yAxisMap[yAxisId].orientation === 'top' ? [{ x: coord, y: y }, { x: coord, y: y + height }] : [{ x: coord, y: y + height }, { x: coord, y: y }];
	        }
	      }

	      return null;
	    }
	  }, {
	    key: 'getLabelProps',
	    value: function getLabelProps(isX, isY) {
	      var _props2 = this.props;
	      var xAxisMap = _props2.xAxisMap;
	      var yAxisMap = _props2.yAxisMap;
	      var xAxisId = _props2.xAxisId;
	      var yAxisId = _props2.yAxisId;
	      var labelPosition = _props2.labelPosition;


	      if (isY) {
	        var axis = yAxisMap[yAxisId];

	        if (axis.orientation === 'left' && labelPosition === 'end') {
	          return { dx: 6, dy: 6, textAnchor: 'start' };
	        }
	        if (axis.orientation === 'right' && labelPosition === 'start') {
	          return { dx: 6, dy: 6, textAnchor: 'start' };
	        }
	        return { dx: -6, dy: 6, textAnchor: 'end' };
	      } else if (isX) {
	        var axis = xAxisMap[xAxisId];

	        if (axis.orientation === 'top') {
	          return { dy: 6, textAnchor: 'middle' };
	        }
	        return { dy: -6, textAnchor: 'middle' };
	      }
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel(isX, isY, end) {
	      var _props3 = this.props;
	      var label = _props3.label;
	      var stroke = _props3.stroke;

	      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(label), {
	        stroke: 'none',
	        fill: stroke
	      }, end, this.getLabelProps(isX, isY));
	      if (_react2.default.isValidElement(label)) {
	        return _react2.default.cloneElement(label, _extends({}, props));
	      } else if ((0, _isString2.default)(label) || (0, _isNumber2.default)(label)) {
	        return _react2.default.createElement(
	          'g',
	          { className: 'recharts-reference-line-label' },
	          _react2.default.createElement(
	            'text',
	            props,
	            label
	          )
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var x = _props4.x;
	      var y = _props4.y;
	      var labelPosition = _props4.labelPosition;

	      var isX = (0, _isNumber2.default)(x) || (0, _isString2.default)(x);
	      var isY = (0, _isNumber2.default)(y) || (0, _isString2.default)(y);

	      if (!isX && !isY) {
	        return null;
	      }

	      var endPoints = this.getEndPoints(isX, isY);

	      if (!endPoints) {
	        return null;
	      }

	      var _endPoints = _slicedToArray(endPoints, 2);

	      var start = _endPoints[0];
	      var end = _endPoints[1];

	      var props = (0, _ReactUtils.getPresentationAttributes)(this.props);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-reference-line' },
	        _react2.default.createElement('line', _extends({}, props, {
	          className: 'recharts-reference-line-line',
	          x1: start.x,
	          y1: start.y,
	          x2: end.x,
	          y2: end.y
	        })),
	        this.renderLabel(isX, isY, labelPosition === 'start' ? start : end)
	      );
	    }
	  }]);

	  return ReferenceLine;
	}(_react.Component), _class2.displayName = 'ReferenceLine', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  viewBox: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number
	  }),

	  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element]),

	  xAxisMap: _react.PropTypes.object,
	  yAxisMap: _react.PropTypes.object,

	  alwaysShow: _react.PropTypes.bool,
	  x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

	  yAxisId: _react.PropTypes.number,
	  xAxisId: _react.PropTypes.number,

	  labelPosition: _react.PropTypes.oneOf(['start', 'end'])
	}), _class2.defaultProps = {
	  alwaysShow: false,
	  xAxisId: 0,
	  yAxisId: 0,
	  fill: 'none',
	  stroke: '#ccc',
	  fillOpacity: 1,
	  strokeWidth: 1,
	  labelPosition: 'end'
	}, _temp)) || _class;

	exports.default = ReferenceLine;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isString = __webpack_require__(103);

	var _isString2 = _interopRequireDefault(_isString);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Reference Line
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _ReactUtils = __webpack_require__(124);

	var _DataUtils = __webpack_require__(120);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReferenceDot = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ReferenceDot, _Component);

	  function ReferenceDot() {
	    _classCallCheck(this, ReferenceDot);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReferenceDot).apply(this, arguments));
	  }

	  _createClass(ReferenceDot, [{
	    key: 'getCoordinate',
	    value: function getCoordinate() {
	      var _props = this.props;
	      var x = _props.x;
	      var y = _props.y;
	      var xAxisMap = _props.xAxisMap;
	      var yAxisMap = _props.yAxisMap;
	      var xAxisId = _props.xAxisId;
	      var yAxisId = _props.yAxisId;

	      var xScale = xAxisMap[xAxisId].scale;
	      var yScale = yAxisMap[yAxisId].scale;
	      var result = {
	        cx: xScale(x),
	        cy: yScale(y)
	      };

	      if ((0, _DataUtils.validateCoordinateInRange)(result.cx, xScale) && (0, _DataUtils.validateCoordinateInRange)(result.cy, yScale)) {
	        return result;
	      }

	      return null;
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel(coordinate) {
	      var _props2 = this.props;
	      var label = _props2.label;
	      var stroke = _props2.stroke;

	      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(label), {
	        stroke: 'none',
	        fill: stroke,
	        x: coordinate.cx,
	        y: coordinate.cy,
	        textAnchor: 'middle'
	      });
	      if (_react2.default.isValidElement(label)) {
	        return _react2.default.cloneElement(label, props);
	      } else if ((0, _isString2.default)(label) || (0, _isNumber2.default)(label)) {
	        return _react2.default.createElement(
	          'g',
	          { className: 'recharts-reference-dot-label' },
	          _react2.default.createElement(
	            'text',
	            props,
	            label
	          )
	        );
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var x = _props3.x;
	      var y = _props3.y;

	      var isX = (0, _isNumber2.default)(x) || (0, _isString2.default)(x);
	      var isY = (0, _isNumber2.default)(y) || (0, _isString2.default)(y);

	      if (!isX || !isY) {
	        return null;
	      }

	      var coordinate = this.getCoordinate();

	      if (!coordinate) {
	        return null;
	      }

	      var props = (0, _ReactUtils.getPresentationAttributes)(this.props);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-reference-dot' },
	        _react2.default.createElement(_Dot2.default, _extends({}, props, {
	          r: this.props.r,
	          className: 'recharts-reference-dot-dot'
	        }, coordinate)),
	        this.renderLabel(coordinate)
	      );
	    }
	  }]);

	  return ReferenceDot;
	}(_react.Component), _class2.displayName = 'ReferenceDot', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  r: _react.PropTypes.number,

	  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element]),

	  xAxisMap: _react.PropTypes.object,
	  yAxisMap: _react.PropTypes.object,

	  alwaysShow: _react.PropTypes.bool,
	  x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

	  yAxisId: _react.PropTypes.number,
	  xAxisId: _react.PropTypes.number
	}), _class2.defaultProps = {
	  alwaysShow: false,
	  xAxisId: 0,
	  yAxisId: 0,
	  r: 20,
	  fill: '#fff',
	  stroke: '#ccc',
	  fillOpacity: 1,
	  strokeWidth: 1
	}, _temp)) || _class;

	exports.default = ReferenceDot;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isString = __webpack_require__(103);

	var _isString2 = _interopRequireDefault(_isString);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Cartesian Axis
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _DOMUtils = __webpack_require__(116);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CartesianAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(CartesianAxis, _Component);

	  function CartesianAxis() {
	    _classCallCheck(this, CartesianAxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CartesianAxis).apply(this, arguments));
	  }

	  _createClass(CartesianAxis, [{
	    key: 'getTickLineCoord',

	    /**
	     * Calculate the coordinates of endpoints in ticks
	     * @param  {Object} data The data of a simple tick
	     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
	     *  (x2, y2): The coordinate of endpoint close to axis
	     */
	    value: function getTickLineCoord(data) {
	      var _props = this.props;
	      var x = _props.x;
	      var y = _props.y;
	      var width = _props.width;
	      var height = _props.height;
	      var orientation = _props.orientation;
	      var tickSize = _props.tickSize;

	      var x1 = undefined;
	      var x2 = undefined;
	      var y1 = undefined;
	      var y2 = undefined;

	      var finalTickSize = data.tickSize || tickSize;

	      switch (orientation) {
	        case 'top':
	          x1 = x2 = data.coord;
	          y1 = y + height - finalTickSize;
	          y2 = y + height;
	          break;
	        case 'left':
	          y1 = y2 = data.coord;
	          x1 = x + width - finalTickSize;
	          x2 = x + width;
	          break;
	        case 'right':
	          y1 = y2 = data.coord;
	          x1 = x + finalTickSize;
	          x2 = x;
	          break;
	        default:
	          x1 = x2 = data.coord;
	          y1 = y + finalTickSize;
	          y2 = y;
	          break;
	      }

	      return { x1: x1, y1: y1, x2: x2, y2: y2 };
	    }
	  }, {
	    key: 'getBaseline',
	    value: function getBaseline() {
	      var orientation = this.props.orientation;

	      var baseline = undefined;

	      switch (orientation) {
	        case 'top':
	          baseline = 'auto';
	          break;
	        case 'bottom':
	          baseline = 'text-before-edge';
	          break;
	        default:
	          baseline = 'central';
	          break;
	      }

	      return baseline;
	    }
	  }, {
	    key: 'getTickTextAnchor',
	    value: function getTickTextAnchor() {
	      var orientation = this.props.orientation;

	      var textAnchor = undefined;

	      switch (orientation) {
	        case 'left':
	          textAnchor = 'end';
	          break;
	        case 'right':
	          textAnchor = 'start';
	          break;
	        default:
	          textAnchor = 'middle';
	          break;
	      }

	      return textAnchor;
	    }
	  }, {
	    key: 'getDy',
	    value: function getDy() {
	      var orientation = this.props.orientation;

	      var dy = 0;

	      switch (orientation) {
	        case 'left':
	        case 'right':
	          dy = 8;
	          break;
	        case 'top':
	          dy = -2;
	          break;
	        default:
	          dy = 15;
	          break;
	      }

	      return dy;
	    }
	  }, {
	    key: 'getLabelProps',
	    value: function getLabelProps() {
	      var _props2 = this.props;
	      var x = _props2.x;
	      var y = _props2.y;
	      var width = _props2.width;
	      var height = _props2.height;
	      var orientation = _props2.orientation;


	      switch (orientation) {
	        case 'left':
	          return { x: x + width, y: y - 6, textAnchor: 'middle' };
	        case 'right':
	          return { x: x, y: y - 6, textAnchor: 'middle' };
	        case 'top':
	          return { x: x + width + 6, y: y + height + 6, textAnchor: 'start' };
	        default:
	          return { x: x + width + 6, y: y + 6, textAnchor: 'start' };
	      }
	    }
	  }, {
	    key: 'renderAxisLine',
	    value: function renderAxisLine() {
	      var _props3 = this.props;
	      var x = _props3.x;
	      var y = _props3.y;
	      var width = _props3.width;
	      var height = _props3.height;
	      var orientation = _props3.orientation;
	      var axisLine = _props3.axisLine;

	      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        fill: 'none'
	      }, (0, _ReactUtils.getPresentationAttributes)(axisLine));

	      switch (orientation) {
	        case 'top':
	          props = _extends({}, props, { x1: x, y1: y + height, x2: x + width, y2: y + height });
	          break;
	        case 'left':
	          props = _extends({}, props, { x1: x + width, y1: y, x2: x + width, y2: y + height });
	          break;
	        case 'right':
	          props = _extends({}, props, { x1: x, y1: y, x2: x, y2: y + height });
	          break;
	        default:
	          props = _extends({}, props, { x1: x, y1: y, x2: x + width, y2: y });
	          break;
	      }

	      return _react2.default.createElement('line', _extends({ className: 'recharts-cartesian-axis-line' }, props));
	    }
	  }, {
	    key: 'renderTicks',
	    value: function renderTicks() {
	      var _this2 = this;

	      var _props4 = this.props;
	      var ticks = _props4.ticks;
	      var tickLine = _props4.tickLine;
	      var stroke = _props4.stroke;
	      var tick = _props4.tick;
	      var tickFormatter = _props4.tickFormatter;


	      if (!ticks || !ticks.length) {
	        return null;
	      }

	      var finalTicks = CartesianAxis.getTicks(this.props);

	      var textAnchor = this.getTickTextAnchor();
	      var axisProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);
	      var istickElement = _react2.default.isValidElement(tick);
	      var tickLineProps = _extends({}, axisProps, { fill: 'none' }, (0, _ReactUtils.getPresentationAttributes)(tickLine));

	      var items = finalTicks.map(function (entry, i) {
	        var lineCoord = _this2.getTickLineCoord(entry);
	        var tickProps = _extends({
	          dy: _this2.getDy(entry),
	          textAnchor: textAnchor
	        }, axisProps, {
	          stroke: 'none',
	          fill: stroke
	        }, customTickProps, {
	          index: i,
	          x: lineCoord.x1,
	          y: lineCoord.y1,
	          payload: entry
	        });
	        var tickItem = undefined;

	        if (tick) {
	          tickItem = istickElement ? _react2.default.cloneElement(tick, tickProps) : _react2.default.createElement(
	            'text',
	            _extends({}, tickProps, { className: 'recharts-cartesian-axis-tick-value' }),
	            tickFormatter ? tickFormatter(entry.value) : entry.value
	          );
	        }

	        return _react2.default.createElement(
	          'g',
	          { className: 'recharts-cartesian-axis-tick', key: 'tick-' + i },
	          tickLine && _react2.default.createElement('line', _extends({
	            className: 'recharts-cartesian-axis-tick-line'
	          }, tickLineProps, lineCoord)),
	          tick && tickItem
	        );
	      });

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-cartesian-axis-ticks' },
	        items
	      );
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel() {
	      var _props5 = this.props;
	      var label = _props5.label;
	      var x = _props5.x;
	      var y = _props5.y;
	      var width = _props5.width;
	      var height = _props5.height;
	      var orientation = _props5.orientation;
	      var stroke = _props5.stroke;


	      if (_react2.default.isValidElement(label)) {
	        return _react2.default.cloneElement(label, this.props);
	      } else if ((0, _isString2.default)(label) || (0, _isNumber2.default)(label)) {
	        var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	          stroke: 'none',
	          fill: stroke
	        }, this.getLabelProps());

	        return _react2.default.createElement(
	          'g',
	          { className: 'recharts-cartesian-axis-label' },
	          _react2.default.createElement(
	            'text',
	            props,
	            label
	          )
	        );
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props6 = this.props;
	      var axisLine = _props6.axisLine;
	      var width = _props6.width;
	      var height = _props6.height;
	      var ticks = _props6.ticks;
	      var label = _props6.label;


	      if (width <= 0 || height <= 0 || !ticks || !ticks.length) {
	        return null;
	      }

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-cartesian-axis' },
	        axisLine && this.renderAxisLine(),
	        this.renderTicks(),
	        this.renderLabel()
	      );
	    }
	  }], [{
	    key: 'getTicks',
	    value: function getTicks(props) {
	      var ticks = props.ticks;
	      var viewBox = props.viewBox;
	      var minTickGap = props.minTickGap;
	      var orientation = props.orientation;
	      var interval = props.interval;


	      if (!ticks || !ticks.length) {
	        return [];
	      }

	      return interval === +interval ? CartesianAxis.getNumberIntervalTicks(ticks, interval) : CartesianAxis.getAutoIntervalTicks(ticks, viewBox, orientation, minTickGap);
	    }
	  }, {
	    key: 'getNumberIntervalTicks',
	    value: function getNumberIntervalTicks(ticks, interval) {
	      return ticks.filter(function (entry, i) {
	        return i % (interval + 1) === 0;
	      });
	    }
	  }, {
	    key: 'getAutoIntervalTicks',
	    value: function getAutoIntervalTicks(ticks, viewBox, orientation, minTickGap) {
	      var x = viewBox.x;
	      var y = viewBox.y;
	      var width = viewBox.width;
	      var height = viewBox.height;

	      var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
	      var sign = ticks.length >= 2 ? Math.sign(ticks[1].coord - ticks[0].coord) : 1;

	      var pointer = undefined;

	      if (sign === 1) {
	        pointer = sizeKey === 'width' ? x : y;
	      } else {
	        pointer = sizeKey === 'width' ? x + width : y + height;
	      }

	      return ticks.filter(function (entry) {
	        var tickSize = (0, _DOMUtils.getStringSize)(entry.value)[sizeKey];
	        var isShow = sign === 1 ? entry.coord - tickSize / 2 >= pointer : entry.coord + tickSize / 2 <= pointer;

	        if (isShow) {
	          pointer = entry.coord + sign * tickSize / 2 + minTickGap;
	        }

	        return isShow;
	      });
	    }
	  }]);

	  return CartesianAxis;
	}(_react.Component), _class2.displayName = 'CartesianAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  x: _react.PropTypes.number,
	  y: _react.PropTypes.number,
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  orientation: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	  viewBox: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number
	  }),
	  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element]),
	  tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element]),
	  axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  tickLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),

	  minLabelGap: _react.PropTypes.number,
	  ticks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.any,
	    coord: _react.PropTypes.value
	  })),
	  tickSize: _react.PropTypes.number,
	  stroke: _react.PropTypes.string,
	  tickFormatter: _react.PropTypes.func,
	  interval: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	}), _class2.defaultProps = {
	  x: 0,
	  y: 0,
	  width: 0,
	  height: 0,
	  viewBox: { x: 0, y: 0, width: 0, height: 0 },
	  // The orientation of axis
	  orientation: 'bottom',
	  // The ticks
	  ticks: [],

	  stroke: '#666',
	  tickLine: true,
	  axisLine: true,
	  tick: true,

	  minTickGap: 5,
	  // The width or height of tick
	  tickSize: 6,
	  interval: 'auto'
	}, _temp)) || _class;

	exports.default = CartesianAxis;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Cartesian Grid
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CartesianGrid = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(CartesianGrid, _Component);

	  function CartesianGrid() {
	    _classCallCheck(this, CartesianGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CartesianGrid).apply(this, arguments));
	  }

	  _createClass(CartesianGrid, [{
	    key: 'renderHorizontal',


	    /**
	     * Draw the horizontal grid lines
	     * @return {Group} Horizontal lines
	     */
	    value: function renderHorizontal() {
	      var _props = this.props;
	      var x = _props.x;
	      var width = _props.width;
	      var horizontalPoints = _props.horizontalPoints;


	      if (!horizontalPoints || !horizontalPoints.length) {
	        return null;
	      }

	      var props = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var items = horizontalPoints.map(function (entry, i) {
	        return _react2.default.createElement('line', _extends({}, props, { key: 'line-' + i, x1: x, y1: entry, x2: x + width, y2: entry }));
	      });

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-cartesian-grid-horizontal' },
	        items
	      );
	    }

	    /**
	     * Draw vertical grid lines
	     * @return {Group} Vertical lines
	     */

	  }, {
	    key: 'renderVertical',
	    value: function renderVertical() {
	      var _props2 = this.props;
	      var y = _props2.y;
	      var height = _props2.height;
	      var verticalPoints = _props2.verticalPoints;


	      if (!verticalPoints || !verticalPoints.length) {
	        return null;
	      }

	      var props = (0, _ReactUtils.getPresentationAttributes)(this.props);

	      var items = verticalPoints.map(function (entry, i) {
	        return _react2.default.createElement('line', _extends({}, props, { key: 'line-' + i, x1: entry, y1: y, x2: entry, y2: y + height }));
	      });

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-cartesian-grid-vertical' },
	        items
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var width = _props3.width;
	      var height = _props3.height;
	      var horizontal = _props3.horizontal;
	      var vertical = _props3.vertical;


	      if (width <= 0 || height <= 0) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'g',
	        { className: 'recharts-cartesian-grid' },
	        horizontal && this.renderHorizontal(),
	        vertical && this.renderVertical()
	      );
	    }
	  }]);

	  return CartesianGrid;
	}(_react.Component), _class2.displayName = 'CartesianGrid', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  x: _react.PropTypes.number,
	  y: _react.PropTypes.number,
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  horizontal: _react.PropTypes.bool,
	  vertical: _react.PropTypes.bool,
	  horizontalPoints: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  verticalPoints: _react.PropTypes.arrayOf(_react.PropTypes.number)
	}), _class2.defaultProps = {
	  x: 0,
	  y: 0,
	  width: 0,
	  height: 0,
	  horizontal: true,
	  vertical: true,
	  // The ordinates of horizontal grid lines
	  horizontalPoints: [],
	  // The abscissas of vertical grid lines
	  verticalPoints: [],

	  stroke: '#ccc',
	  fill: 'none'
	}, _temp)) || _class;

	exports.default = CartesianGrid;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Line
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(237);

	var _reactSmooth = __webpack_require__(167);

	var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Line = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Line, _Component);

	  function Line(props, ctx) {
	    _classCallCheck(this, Line);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props, ctx));

	    _this.handleAnimationEnd = function () {
	      _this.setState({ isAnimationFinished: true });
	    };

	    _this.state = {
	      isAnimationFinished: false,
	      steps: [],
	      totalLength: 0
	    };
	    return _this;
	  }

	  _createClass(Line, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var isAnimationActive = this.props.isAnimationActive;


	      if (!isAnimationActive) {
	        return;
	      }

	      var curveDom = (0, _reactDom.findDOMNode)(this.refs.animate);
	      var totalLength = curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;

	      this.setState({ totalLength: totalLength });
	    }
	  }, {
	    key: 'getStrokeDasharray',
	    value: function getStrokeDasharray(length, totalLength, lines) {
	      var lineLength = lines.reduce(function (pre, next) {
	        return pre + next;
	      });

	      var count = parseInt(length / lineLength, 10);
	      var remainLength = length % lineLength;
	      var restLength = totalLength - length;

	      var remainLines = [];
	      for (var i = 0, sum = 0; true; sum += lines[i], ++i) {
	        if (sum + lines[i] > remainLength) {
	          remainLines = [].concat(_toConsumableArray(lines.slice(0, i)), [remainLength - sum]);
	          break;
	        }
	      }

	      var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];

	      return [].concat(_toConsumableArray(this.repeat(lines, count)), _toConsumableArray(remainLines), emptyLines).map(function (line) {
	        return line + 'px';
	      }).join(', ');
	    }
	  }, {
	    key: 'repeat',
	    value: function repeat(lines, count) {
	      var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray(lines), [0]) : lines;
	      var result = [];

	      for (var i = 0; i < count; ++i) {
	        result = [].concat(_toConsumableArray(result), _toConsumableArray(linesUnit));
	      }

	      return result;
	    }
	  }, {
	    key: 'renderLabels',
	    value: function renderLabels() {
	      var _props = this.props;
	      var points = _props.points;
	      var label = _props.label;

	      var lineProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
	      var isLabelElement = _react2.default.isValidElement(label);

	      var labels = points.map(function (entry, i) {
	        var x = entry.x + entry.width / 2;
	        var y = entry.y;
	        var labelProps = _extends({
	          textAnchor: 'middle'
	        }, entry, lineProps, customLabelProps, {
	          index: i,
	          key: 'label-' + i,
	          payload: entry
	        });

	        return isLabelElement ? _react2.default.cloneElement(label, labelProps) : _react2.default.createElement(
	          'text',
	          _extends({}, labelProps, { className: 'recharts-line-label' }),
	          entry.value
	        );
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-line-labels' },
	        labels
	      );
	    }
	  }, {
	    key: 'renderDots',
	    value: function renderDots() {
	      var isAnimationActive = this.props.isAnimationActive;


	      if (isAnimationActive && !this.state.isAnimationFinished) {
	        return null;
	      }

	      var _props2 = this.props;
	      var dot = _props2.dot;
	      var points = _props2.points;

	      var lineProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
	      var isDotElement = _react2.default.isValidElement(dot);

	      var dots = points.map(function (entry, i) {
	        var dotProps = _extends({
	          key: 'dot-' + i,
	          r: 3
	        }, lineProps, customDotProps, {
	          cx: entry.x,
	          cy: entry.y,
	          index: i,
	          payload: entry
	        });

	        return isDotElement ? _react2.default.cloneElement(dot, dotProps) : _react2.default.createElement(_Dot2.default, _extends({ className: 'recharts-line-dot' }, dotProps));
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-line-dots' },
	        dots
	      );
	    }
	  }, {
	    key: 'renderCurve',
	    value: function renderCurve() {
	      var _this2 = this;

	      var _props3 = this.props;
	      var dot = _props3.dot;
	      var points = _props3.points;
	      var label = _props3.label;
	      var className = _props3.className;
	      var isAnimationActive = _props3.isAnimationActive;
	      var animationBegin = _props3.animationBegin;
	      var animationDuration = _props3.animationDuration;
	      var animationEasing = _props3.animationEasing;
	      var onClick = _props3.onClick;
	      var onMouseEnter = _props3.onMouseEnter;
	      var onMouseLeave = _props3.onMouseLeave;
	      var strokeDasharray = _props3.strokeDasharray;

	      var other = _objectWithoutProperties(_props3, ['dot', 'points', 'label', 'className', 'isAnimationActive', 'animationBegin', 'animationDuration', 'animationEasing', 'onClick', 'onMouseEnter', 'onMouseLeave', 'strokeDasharray']);

	      var totalLength = this.state.totalLength;

	      var animationProps = {
	        isActive: isAnimationActive,
	        begin: animationBegin,
	        canBegin: totalLength > 0,
	        easing: animationEasing,
	        duration: animationDuration,
	        onAnimationEnd: this.handleAnimationEnd,
	        ref: 'animate'
	      };
	      var curveProps = _extends({}, other, {
	        className: 'recharts-line-curve',
	        fill: 'none',
	        onClick: onClick,
	        onMouseEnter: onMouseEnter,
	        onMouseLeave: onMouseLeave,
	        points: points
	      });

	      if (strokeDasharray) {
	        var _ret = function () {
	          var lines = strokeDasharray.split(/[,\s]+/gim).map(function (num) {
	            return parseFloat(num);
	          });

	          return {
	            v: _react2.default.createElement(
	              _reactSmooth2.default,
	              _extends({}, animationProps, {
	                from: { length: 0 },
	                to: { length: totalLength }
	              }),
	              function (_ref) {
	                var length = _ref.length;
	                return _react2.default.createElement(_Curve2.default, _extends({}, curveProps, {
	                  strokeDasharray: _this2.getStrokeDasharray(length, totalLength, lines)
	                }));
	              }
	            )
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }

	      return _react2.default.createElement(
	        _reactSmooth2.default,
	        _extends({}, animationProps, {
	          from: '0px ' + (totalLength === 0 ? 1 : totalLength) + 'px',
	          to: totalLength + 'px 0px',
	          attributeName: 'strokeDasharray'
	        }),
	        _react2.default.createElement(_Curve2.default, curveProps)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var dot = _props4.dot;
	      var points = _props4.points;
	      var label = _props4.label;
	      var className = _props4.className;
	      var onClick = _props4.onClick;
	      var onMouseEnter = _props4.onMouseEnter;
	      var onMouseLeave = _props4.onMouseLeave;


	      if (!points || !points.length) {
	        return null;
	      }

	      var hasSinglePoint = points.length === 1;
	      var layerClass = (0, _classnames2.default)('recharts-line', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: layerClass },
	        !hasSinglePoint && this.renderCurve(),
	        (hasSinglePoint || dot) && this.renderDots(),
	        label && this.renderLabels()
	      );
	    }
	  }]);

	  return Line;
	}(_react.Component), _class2.displayName = 'Line', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  type: _react.PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
	  unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
	  yAxisId: _react.PropTypes.number,
	  xAxisId: _react.PropTypes.number,
	  legendType: _react.PropTypes.string,
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),

	  // whether have dot in line
	  dot: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.bool]),
	  label: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.bool]),

	  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    value: _react.PropTypes.value
	  })),
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  isAnimationActive: _react.PropTypes.bool,
	  animationBegin: _react.PropTypes.number,
	  animationDuration: _react.PropTypes.number,
	  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
	}), _class2.defaultProps = {
	  xAxisId: 0,
	  yAxisId: 0,
	  dot: true,
	  legendType: 'line',
	  stroke: '#3182bd',
	  strokeWidth: 1,
	  fill: '#fff',
	  points: [],
	  onClick: function onClick() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},

	  isAnimationActive: true,
	  animationBegin: 0,
	  animationDuration: 1500,
	  animationEasing: 'ease'
	}, _temp)) || _class;

	exports.default = Line;

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_237__;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Area
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Area = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(Area, _Component);

	  function Area() {
	    _classCallCheck(this, Area);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).apply(this, arguments));
	  }

	  _createClass(Area, [{
	    key: 'renderArea',
	    value: function renderArea() {
	      return _react2.default.createElement(_Curve2.default, _extends({}, this.props, { stroke: 'none', className: 'recharts-area-area' }));
	    }
	  }, {
	    key: 'renderCurve',
	    value: function renderCurve() {
	      var _props = this.props;
	      var points = _props.points;
	      var type = _props.type;
	      var layout = _props.layout;


	      return _react2.default.createElement(_Curve2.default, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
	        className: 'recharts-area-curve',
	        layout: layout,
	        points: points,
	        type: type,
	        fill: 'none'
	      }));
	    }
	  }, {
	    key: 'renderDots',
	    value: function renderDots() {
	      var _props2 = this.props;
	      var dot = _props2.dot;
	      var points = _props2.points;

	      var areaProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
	      var isDotElement = _react2.default.isValidElement(dot);

	      var dots = points.map(function (entry, i) {
	        var dotProps = _extends({
	          key: 'dot-' + i,
	          r: 3
	        }, areaProps, customDotProps, {
	          cx: entry.x,
	          cy: entry.y,
	          index: i,
	          playload: entry
	        });

	        return isDotElement ? _react2.default.cloneElement(dot, dotProps) : _react2.default.createElement(_Dot2.default, _extends({}, dotProps, { className: 'recharts-area-dot' }));
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-area-dots' },
	        dots
	      );
	    }
	  }, {
	    key: 'renderLabels',
	    value: function renderLabels() {
	      var _props3 = this.props;
	      var points = _props3.points;
	      var label = _props3.label;

	      var areaProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
	      var isLabelElement = _react2.default.isValidElement(label);

	      var labels = points.map(function (entry, i) {
	        var labelProps = _extends({
	          textAnchor: 'middle'
	        }, entry, areaProps, customLabelProps, {
	          index: i,
	          key: 'label-' + i,
	          payload: entry
	        });

	        return isLabelElement ? _react2.default.cloneElement(label, labelProps) : _react2.default.createElement(
	          'text',
	          _extends({}, labelProps, { className: 'recharts-area-label' }),
	          entry.value
	        );
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-area-labels' },
	        labels
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var dot = _props4.dot;
	      var curve = _props4.curve;
	      var label = _props4.label;
	      var points = _props4.points;
	      var className = _props4.className;

	      var other = _objectWithoutProperties(_props4, ['dot', 'curve', 'label', 'points', 'className']);

	      if (!points || !points.length) {
	        return null;
	      }

	      var hasSinglePoint = points.length === 1;
	      var layerClass = (0, _classnames2.default)('recharts-area', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: layerClass },
	        curve && !hasSinglePoint && this.renderCurve(),
	        !hasSinglePoint && this.renderArea(),
	        (dot || hasSinglePoint) && this.renderDots(),
	        label && this.renderLabels()
	      );
	    }
	  }]);

	  return Area;
	}(_react.Component), _class2.displayName = 'Area', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
	  className: _react.PropTypes.string,
	  type: _react.PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
	  unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
	  yAxisId: _react.PropTypes.number,
	  xAxisId: _react.PropTypes.number,
	  stackId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  legendType: _react.PropTypes.string,
	  formatter: _react.PropTypes.func,
	  // dot configuration
	  dot: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool]),
	  label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool]),
	  // have curve configuration
	  curve: _react.PropTypes.bool,
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  baseLine: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
	  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    value: _react.PropTypes.value
	  })),
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}), _class2.defaultProps = {
	  strokeWidth: 1,
	  stroke: '#3182bd',
	  fill: '#3182bd',
	  fillOpacity: 0.6,
	  xAxisId: 0,
	  yAxisId: 0,
	  legendType: 'line',
	  // points of area
	  points: [],
	  dot: false,
	  label: false,
	  curve: true,
	  onClick: function onClick() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	}, _temp)) || _class;

	exports.default = Area;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Render a group of bar
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactSmooth = __webpack_require__(167);

	var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

	var _Rectangle = __webpack_require__(129);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _ReactUtils = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(Bar, _Component);

	  function Bar() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Bar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Bar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      isAnimationFinished: false
	    }, _this.handleAnimationEnd = function () {
	      _this.setState({ isAnimationFinished: true });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Bar, [{
	    key: 'renderRectangles',
	    value: function renderRectangles() {
	      var _this2 = this;

	      var _props = this.props;
	      var data = _props.data;
	      var className = _props.className;
	      var shape = _props.shape;
	      var layout = _props.layout;
	      var isAnimationActive = _props.isAnimationActive;
	      var animationBegin = _props.animationBegin;
	      var animationDuration = _props.animationDuration;
	      var animationEasing = _props.animationEasing;

	      var others = _objectWithoutProperties(_props, ['data', 'className', 'shape', 'layout', 'isAnimationActive', 'animationBegin', 'animationDuration', 'animationEasing']);

	      return data.map(function (entry, index) {
	        var value = entry.value;
	        var width = entry.width;
	        var height = entry.height;

	        var rest = _objectWithoutProperties(entry, ['value', 'width', 'height']);

	        var props = _extends({}, others, rest, { width: width, height: height });
	        var getStyle = function getStyle(isBegin) {
	          return {
	            transform: 'scale' + (layout === 'vertical' ? 'X' : 'Y') + '(' + (isBegin ? 0 : 1) + ')'
	          };
	        };
	        var transformOrigin = '';

	        if (layout === 'vertical') {
	          transformOrigin = width > 0 ? 'left center' : 'right center';
	        } else {
	          transformOrigin = height > 0 ? 'center bottom' : 'center top';
	        }

	        return _react2.default.createElement(
	          _reactSmooth2.default,
	          { begin: animationBegin,
	            duration: animationDuration,
	            isActive: isAnimationActive,
	            easing: animationEasing,
	            from: getStyle(true),
	            to: getStyle(false),
	            key: 'rectangle-' + index,
	            onAnimationEnd: _this2.handleAnimationEnd
	          },
	          _react2.default.createElement(
	            'g',
	            { style: { transformOrigin: transformOrigin } },
	            _react2.default.isValidElement(shape) ? _react2.default.cloneElement(shape, _extends({}, props, { index: index })) : _react2.default.createElement(_Rectangle2.default, props)
	          )
	        );
	      });
	    }
	  }, {
	    key: 'renderLabels',
	    value: function renderLabels() {
	      var isAnimationActive = this.props.isAnimationActive;


	      if (isAnimationActive && !this.state.isAnimationFinished) {
	        return null;
	      }

	      var _props2 = this.props;
	      var data = _props2.data;
	      var label = _props2.label;

	      var barProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
	      var isLabelElement = _react2.default.isValidElement(label);

	      var labels = data.map(function (entry, i) {
	        var x = entry.x + entry.width / 2;
	        var labelProps = _extends({
	          textAnchor: 'middle'
	        }, entry, barProps, customLabelProps, {
	          x: x,
	          index: i,
	          key: 'label-' + i,
	          payload: entry
	        });

	        return isLabelElement ? _react2.default.cloneElement(label, labelProps) : _react2.default.createElement(
	          'text',
	          _extends({}, labelProps, { className: 'recharts-bar-label' }),
	          entry.value
	        );
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-bar-labels' },
	        labels
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var data = _props3.data;
	      var className = _props3.className;
	      var label = _props3.label;


	      if (!data || !data.length) {
	        return null;
	      }

	      var layerClass = (0, _classnames2.default)('recharts-bar', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: layerClass },
	        _react2.default.createElement(
	          _Layer2.default,
	          { className: 'recharts-bar-rectangles' },
	          this.renderRectangles()
	        ),
	        label && _react2.default.createElement(
	          _Layer2.default,
	          { className: 'recharts-bar-rectangle-labels' },
	          this.renderLabels()
	        )
	      );
	    }
	  }]);

	  return Bar;
	}(_react.Component), _class2.displayName = 'Bar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {

	  className: _react.PropTypes.string,
	  layout: _react.PropTypes.string,
	  xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  stackId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  barSize: _react.PropTypes.number,
	  unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
	  formatter: _react.PropTypes.func,

	  shape: _react.PropTypes.element,
	  label: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element]),
	  data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number,
	    radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
	    value: _react.PropTypes.value
	  })),
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,

	  isAnimationActive: _react.PropTypes.bool,
	  animationBegin: _react.PropTypes.number,
	  animationDuration: _react.PropTypes.number,
	  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
	}), _class2.defaultProps = {
	  fill: '#fff',
	  xAxisId: 0,
	  yAxisId: 0,
	  legendType: 'rect',
	  // data of bar
	  data: [],
	  onClick: function onClick() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},

	  layout: 'vertical',
	  isAnimationActive: true,
	  animationBegin: 0,
	  animationDuration: 1500,
	  animationEasing: 'ease'
	}, _temp2)) || _class;

	exports.default = Bar;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Render a group of scatters
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _ReactUtils = __webpack_require__(124);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scatter = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(Scatter, _Component);

	  function Scatter() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Scatter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Scatter)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      activeIndex: -1
	    }, _this.handleCircleMouseLeave = function () {
	      var onMouseLeave = _this.props.onMouseLeave;


	      _this.setState({
	        activeIndex: -1
	      }, onMouseLeave);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Scatter, [{
	    key: 'handleCircleMouseEnter',
	    value: function handleCircleMouseEnter(data, index, e) {
	      var onMouseEnter = this.props.onMouseEnter;


	      this.setState({
	        activeIndex: index
	      }, function () {
	        onMouseEnter(data, e);
	      });
	    }
	  }, {
	    key: 'renderCircles',
	    value: function renderCircles() {
	      var _this2 = this;

	      var points = this.props.points;
	      var activeIndex = this.state.activeIndex;

	      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);

	      return points.map(function (entry, i) {
	        var payload = entry.payload;
	        var r = entry.r;

	        var rest = _objectWithoutProperties(entry, ['payload', 'r']);

	        return _react2.default.createElement('circle', _extends({}, baseProps, rest, {
	          r: i === activeIndex ? r * 1.1 : r,
	          onMouseEnter: _this2.handleCircleMouseEnter.bind(_this2, entry, i),
	          onMouseLeave: _this2.handleCircleMouseLeave,
	          key: 'circle-' + i
	        }));
	      });
	    }
	  }, {
	    key: 'renderLine',
	    value: function renderLine() {
	      var _props = this.props;
	      var points = _props.points;
	      var line = _props.line;
	      var lineType = _props.lineType;

	      var scatterProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      var customLineProps = (0, _ReactUtils.getPresentationAttributes)(line);
	      var isLineElement = _react2.default.isValidElement(line);
	      var linePoints = undefined;

	      if (lineType === 'joint') {
	        linePoints = points.map(function (entry) {
	          return { x: entry.cx, y: entry.cy };
	        });
	      }

	      var lineProps = _extends({}, scatterProps, {
	        fill: 'none',
	        stroke: scatterProps.fill
	      }, customLineProps, {
	        points: linePoints
	      });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: 'recharts-scatter-line' },
	        isLineElement ? _react2.default.cloneElement(line, lineProps) : _react2.default.createElement(_Curve2.default, lineProps)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var points = _props2.points;
	      var line = _props2.line;
	      var className = _props2.className;


	      if (!points || !points.length) {
	        return null;
	      }

	      var layerClass = (0, _classnames2.default)('recharts-scatter', className);

	      return _react2.default.createElement(
	        _Layer2.default,
	        { className: layerClass },
	        line && this.renderLine(),
	        this.renderCircles()
	      );
	    }
	  }]);

	  return Scatter;
	}(_react.Component), _class2.displayName = 'Scatter', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {

	  legendType: _react.PropTypes.string,
	  xAxisId: _react.PropTypes.number,
	  yAxisId: _react.PropTypes.number,
	  zAxisId: _react.PropTypes.number,
	  line: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element]),
	  lineType: _react.PropTypes.oneOf(['fitting', 'joint']),
	  className: _react.PropTypes.string,

	  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    cx: _react.PropTypes.number,
	    cy: _react.PropTypes.number,
	    r: _react.PropTypes.number,
	    payload: _react.PropTypes.shape({
	      x: _react.PropTypes.number,
	      y: _react.PropTypes.number,
	      z: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	    })
	  })),
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}), _class2.defaultProps = {
	  fill: '#fff',
	  xAxisId: 0,
	  yAxisId: 0,
	  zAxisId: 0,
	  legendType: 'scatter',
	  lineType: 'joint',
	  data: [],
	  onClick: function onClick() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	}, _temp2)) || _class;

	exports.default = Scatter;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview X Axis
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var XAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(XAxis, _Component);

	  function XAxis() {
	    _classCallCheck(this, XAxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(XAxis).apply(this, arguments));
	  }

	  _createClass(XAxis, [{
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return XAxis;
	}(_react.Component), _class2.displayName = 'XAxis', _class2.propTypes = {
	  hide: _react.PropTypes.bool,
	  // The name of data displayed in the axis
	  name: _react.PropTypes.any,
	  // The unit of data displayed in the axis
	  unit: _react.PropTypes.any,
	  // The unique id of x-axis
	  xAxisId: _react.PropTypes.number,
	  domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
	  // The key of data displayed in the axis
	  dataKey: _react.PropTypes.string,
	  // The width of axis which is usually calculated internally
	  width: _react.PropTypes.number,
	  // The height of axis, which need to be setted by user
	  height: _react.PropTypes.number,
	  // The orientation of axis
	  orientation: _react.PropTypes.oneOf(['top', 'bottom']),
	  type: _react.PropTypes.oneOf(['number', 'category']),
	  // Ticks can be any type when the axis is the type of category
	  // Ticks must be numbers when the axis is the type of number
	  ticks: _react.PropTypes.array,
	  // The count of ticks
	  tickCount: _react.PropTypes.number,
	  // The formatter function of tick
	  tickFormatter: _react.PropTypes.func
	}, _class2.defaultProps = {
	  hide: false,
	  orientation: 'bottom',
	  width: 0,
	  height: 30,
	  xAxisId: 0,
	  tickCount: 5,
	  type: 'category',
	  domain: [0, 'auto']
	}, _temp)) || _class;

	exports.default = XAxis;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Y Axis
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(YAxis, _Component);

	  function YAxis() {
	    _classCallCheck(this, YAxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(YAxis).apply(this, arguments));
	  }

	  _createClass(YAxis, [{
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return YAxis;
	}(_react.Component), _class2.displayName = 'YAxis', _class2.propTypes = {
	  hide: _react.PropTypes.bool,
	  // The name of data displayed in the axis
	  name: _react.PropTypes.any,
	  // The unit of data displayed in the axis
	  unit: _react.PropTypes.any,
	  // The unique id of y-axis
	  yAxisId: _react.PropTypes.number,
	  domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
	  // The key of data displayed in the axis
	  dataKey: _react.PropTypes.string,
	  // Ticks can be any type when the axis is the type of category
	  // Ticks must be numbers when the axis is the type of number
	  ticks: _react.PropTypes.array,
	  // The count of ticks
	  tickCount: _react.PropTypes.number,
	  // The formatter function of tick
	  tickFormatter: _react.PropTypes.func,
	  // The width of axis, which need to be setted by user
	  width: _react.PropTypes.number,
	  // The height of axis which is usually calculated in Chart
	  height: _react.PropTypes.number,
	  // The orientation of axis
	  orientation: _react.PropTypes.oneOf(['left', 'right']),
	  type: _react.PropTypes.oneOf(['number', 'category'])
	}, _class2.defaultProps = {
	  hide: false,
	  orientation: 'left',
	  width: 60,
	  height: 0,
	  yAxisId: 0,
	  tickCount: 5,
	  type: 'number',
	  domain: [0, 'auto']
	}, _temp)) || _class;

	exports.default = YAxis;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Z Axis
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ZAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(ZAxis, _Component);

	  function ZAxis() {
	    _classCallCheck(this, ZAxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ZAxis).apply(this, arguments));
	  }

	  _createClass(ZAxis, [{
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return ZAxis;
	}(_react.Component), _class2.displayName = 'ZAxis', _class2.propTypes = {
	  // The name of data displayed in the axis
	  name: _react.PropTypes.any,
	  // The unit of data displayed in the axis
	  unit: _react.PropTypes.any,
	  // The unique id of z-axis
	  zAxisId: _react.PropTypes.number,
	  // The key of data displayed in the axis
	  dataKey: _react.PropTypes.string,
	  // The range of axis
	  range: _react.PropTypes.arrayOf(_react.PropTypes.number)
	}, _class2.defaultProps = {
	  zAxisId: 0,
	  range: [10, 10]
	}, _temp)) || _class;

	exports.default = ZAxis;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Line Chart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _CartesianChart2 = __webpack_require__(245);

	var _CartesianChart3 = _interopRequireDefault(_CartesianChart2);

	var _Line = __webpack_require__(236);

	var _Line2 = _interopRequireDefault(_Line);

	var _ReactUtils = __webpack_require__(124);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LineChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_CartesianChart) {
	  _inherits(LineChart, _CartesianChart);

	  function LineChart() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LineChart);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LineChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleLineMouseLeave = function () {
	      _this.setState({
	        activeLineKey: null
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LineChart, [{
	    key: 'getComposedData',


	    /**
	     * Compose the data of each group
	     * @param  {Object} xAxis   The configuration of x-axis
	     * @param  {Object} yAxis   The configuration of y-axis
	     * @param  {String} dataKey The unique key of a group
	     * @return {Array}  Composed data
	     */
	    value: function getComposedData(xAxis, yAxis, dataKey) {
	      var _props = this.props;
	      var data = _props.data;
	      var layout = _props.layout;

	      var xTicks = this.getAxisTicks(xAxis);
	      var yTicks = this.getAxisTicks(yAxis);

	      return data.map(function (entry, index) {
	        return {
	          x: layout === 'horizontal' ? xTicks[index].coord : xAxis.scale(entry[dataKey]),
	          y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord,
	          value: entry[dataKey]
	        };
	      });
	    }

	    /**
	     * Handler of mouse entering line chart
	     * @param {String}       key The unique key of a group of data
	     * @return {Object} no return
	     */

	  }, {
	    key: 'handleLineMouseEnter',
	    value: function handleLineMouseEnter(key) {
	      this.setState({
	        activeLineKey: key
	      });
	    }

	    /**
	     * Handler of mouse leaving line chart
	     * @return {Object} no return
	     */

	  }, {
	    key: 'renderCursor',
	    value: function renderCursor(xAxisMap, yAxisMap, offset) {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
	        return null;
	      }

	      var layout = this.props.layout;
	      var activeTooltipIndex = this.state.activeTooltipIndex;

	      var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
	      var ids = Object.keys(axisMap);
	      var axis = axisMap[ids[0]];
	      var ticks = this.getAxisTicks(axis);
	      var start = ticks[activeTooltipIndex].coord;
	      var x1 = layout === 'horizontal' ? start : offset.left;
	      var y1 = layout === 'horizontal' ? offset.top : start;
	      var x2 = layout === 'horizontal' ? start : offset.left + offset.width;
	      var y2 = layout === 'horizontal' ? offset.top + offset.height : start;
	      var cursorProps = _extends({
	        stroke: '#ccc'
	      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
	        points: [{ x: x1, y: y1 }, { x: x2, y: y2 }]
	      });

	      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Curve2.default, _extends({}, cursorProps, { type: 'linear', className: 'recharts-tooltip-cursor' }));
	    }

	    /**
	     * Draw the main part of line chart
	     * @param  {Array} items     All the instance of Line
	     * @param  {Object} xAxisMap The configuration of all x-axes
	     * @param  {Object} yAxisMap The configuration of all y-axes
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @return {ReactComponent}  All the instances of Line
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems(items, xAxisMap, yAxisMap, offset) {
	      var _this2 = this;

	      var _props2 = this.props;
	      var children = _props2.children;
	      var layout = _props2.layout;
	      var _state = this.state;
	      var activeLineKey = _state.activeLineKey;
	      var isTooltipActive = _state.isTooltipActive;
	      var activeTooltipIndex = _state.activeTooltipIndex;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
	      var hasDot = tooltipItem && isTooltipActive;
	      var dotItems = [];

	      var lineItems = items.map(function (child, i) {
	        var _child$props = child.props;
	        var xAxisId = _child$props.xAxisId;
	        var yAxisId = _child$props.yAxisId;
	        var dataKey = _child$props.dataKey;
	        var strokeWidth = _child$props.strokeWidth;
	        var stroke = _child$props.stroke;

	        var points = _this2.getComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);
	        var activePoint = points[activeTooltipIndex];
	        var pointStyle = { fill: stroke, strokeWidth: 2, stroke: '#fff' };

	        var finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
	        finalStrokeWidth = activeLineKey === dataKey ? finalStrokeWidth + 2 : finalStrokeWidth;

	        if (hasDot && activePoint) {
	          dotItems.push(_react2.default.createElement(_Dot2.default, _extends({
	            key: 'area-dot-' + i,
	            cx: activePoint.x,
	            cy: activePoint.y,
	            r: 4
	          }, pointStyle)));
	        }

	        return _react2.default.cloneElement(child, _extends({
	          key: 'line-' + i
	        }, offset, {
	          layout: layout,
	          strokeWidth: finalStrokeWidth,
	          onMouseLeave: _this2.handleLineMouseLeave,
	          onMouseEnter: _this2.handleLineMouseEnter.bind(_this2, dataKey),
	          points: points
	        }));
	      }, this);

	      return _react2.default.createElement(
	        'g',
	        { key: 'recharts-line-wrapper' },
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-line' },
	          lineItems
	        ),
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-line-dot' },
	          dotItems
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props3 = this.props;
	      var style = _props3.style;
	      var children = _props3.children;
	      var className = _props3.className;
	      var width = _props3.width;
	      var height = _props3.height;

	      var items = (0, _ReactUtils.findAllByType)(children, _Line2.default);

	      var xAxisMap = this.getAxisMap('xAxis', items);
	      var yAxisMap = this.getAxisMap('yAxis', items);
	      var offset = this.getOffset(items, xAxisMap, yAxisMap);

	      xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
	      yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style),
	          onMouseEnter: this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseMove: this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseLeave: this.handleMouseLeave
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderGrid(xAxisMap, yAxisMap, offset),
	          this.renderReferenceLines(xAxisMap, yAxisMap, offset),
	          this.renderReferenceDots(xAxisMap, yAxisMap, offset),
	          this.renderXAxis(xAxisMap),
	          this.renderYAxis(yAxisMap),
	          this.renderCursor(xAxisMap, yAxisMap, offset),
	          this.renderItems(items, xAxisMap, yAxisMap, offset)
	        ),
	        this.renderLegend(items),
	        this.renderTooltip(items, offset)
	      );
	    }
	  }]);

	  return LineChart;
	}(_CartesianChart3.default), _class2.displayName = 'LineChart', _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  data: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
	}, _class2.defaultProps = {
	  style: {},
	  layout: 'horizontal',
	  margin: { top: 5, right: 5, bottom: 5, left: 5 }
	}, _temp2)) || _class;

	exports.default = LineChart;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _range = __webpack_require__(220);

	var _range2 = _interopRequireDefault(_range);

	var _uniqueId = __webpack_require__(218);

	var _uniqueId2 = _interopRequireDefault(_uniqueId);

	var _isString = __webpack_require__(103);

	var _isString2 = _interopRequireDefault(_isString);

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Cartesian Chart
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(237);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _rechartsScale = __webpack_require__(246);

	var _d3Scale = __webpack_require__(224);

	var _d3Shape = __webpack_require__(127);

	var _invariant = __webpack_require__(122);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ouiDomUtils = __webpack_require__(121);

	var _ouiDomUtils2 = _interopRequireDefault(_ouiDomUtils);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Legend = __webpack_require__(112);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _ReactUtils = __webpack_require__(124);

	var _CartesianAxis = __webpack_require__(234);

	var _CartesianAxis2 = _interopRequireDefault(_CartesianAxis);

	var _CartesianGrid = __webpack_require__(235);

	var _CartesianGrid2 = _interopRequireDefault(_CartesianGrid);

	var _ReferenceLine = __webpack_require__(232);

	var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);

	var _ReferenceDot = __webpack_require__(233);

	var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);

	var _XAxis = __webpack_require__(241);

	var _XAxis2 = _interopRequireDefault(_XAxis);

	var _YAxis = __webpack_require__(242);

	var _YAxis2 = _interopRequireDefault(_YAxis);

	var _Brush = __webpack_require__(219);

	var _Brush2 = _interopRequireDefault(_Brush);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _DataUtils = __webpack_require__(120);

	var _CartesianUtils = __webpack_require__(251);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ORIENT_MAP = {
	  xAxis: ['bottom', 'top'],
	  yAxis: ['left', 'right']
	};

	/**
	 * The base class of chart in cartesian coordinate system
	 */

	var CartesianChart = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(CartesianChart, _Component);

	  function CartesianChart(props) {
	    _classCallCheck(this, CartesianChart);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CartesianChart).call(this, props));

	    _this.state = {
	      dataStartIndex: 0,
	      dataEndIndex: _this.props.data.length - 1,
	      activeTooltipIndex: -1,
	      activeTooltipLabel: '',
	      activeTooltipCoord: { x: 0, y: 0 },
	      isTooltipActive: false,
	      activeLineKey: null,
	      activeBarKey: null
	    };

	    _this.handleBrushChange = function (_ref) {
	      var startIndex = _ref.startIndex;
	      var endIndex = _ref.endIndex;

	      _this.setState({
	        dataStartIndex: startIndex,
	        dataEndIndex: endIndex
	      });
	    };

	    _this.handleMouseLeave = function () {
	      _this.setState({
	        isTooltipActive: false
	      });
	    };

	    _this.validateAxes();
	    return _this;
	  }

	  _createClass(CartesianChart, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.data !== this.props.data) {
	        this.setState({
	          dataStartIndex: 0,
	          dataEndIndex: nextProps.data.length - 1
	        });
	      }
	    }
	  }, {
	    key: 'getStackGroupsByAxisId',
	    value: function getStackGroupsByAxisId(items, axisIdKey) {
	      var _this2 = this;

	      var stackGroups = items.reduce(function (result, item) {
	        var _item$props = item.props;
	        var stackId = _item$props.stackId;
	        var dataKey = _item$props.dataKey;

	        var axisId = item.props[axisIdKey];

	        if (!result[axisId]) {
	          result[axisId] = { hasStack: false, stackGroups: {} };
	        }

	        if ((0, _isNumber2.default)(stackId) || (0, _isString2.default)(stackId)) {
	          if (!result[axisId].stackGroups[stackId]) {
	            result[axisId].stackGroups[stackId] = {
	              items: []
	            };
	          }
	          result[axisId].stackGroups[stackId].items.push(item);

	          if (result[axisId].stackGroups[stackId].items.length >= 2) {
	            result[axisId].hasStack = true;
	          }
	        } else {
	          result[axisId].stackGroups[(0, _uniqueId2.default)('_stackId_')] = {
	            items: [item]
	          };
	        }

	        return result;
	      }, {});

	      return Object.keys(stackGroups).reduce(function (result, axisId) {
	        var group = stackGroups[axisId];

	        if (group.hasStack) {
	          group.stackGroups = Object.keys(group.stackGroups).reduce(function (res, stackId) {
	            var g = group.stackGroups[stackId];
	            res[stackId] = {
	              items: g.items,
	              stackedData: _this2.getStackedData(g.items)
	            };

	            return res;
	          }, {});
	        }
	        result[axisId] = group;
	        return result;
	      }, {});
	    }
	  }, {
	    key: 'getStackedData',
	    value: function getStackedData(stackItems) {
	      var data = this.props.data;

	      var dataKeys = stackItems.map(function (item) {
	        return item.props.dataKey;
	      });
	      var stack = (0, _d3Shape.stack)().keys(dataKeys).value(function (d, key) {
	        return +d[key] || 0;
	      }).order(_d3Shape.stackOrderNone).offset(_d3Shape.stackOffsetNone);

	      return stack(data);
	    }
	  }, {
	    key: 'getStackedDataOfItem',
	    value: function getStackedDataOfItem(item, stackGroups) {
	      var stackId = item.props.stackId;


	      if ((0, _isNumber2.default)(stackId) || (0, _isString2.default)(stackId)) {
	        var group = stackGroups[stackId];

	        if (group && group.items.length) {
	          var itemIndex = -1;

	          for (var i = 0, len = group.items.length; i < len; i++) {
	            if (group.items[i] === item) {
	              itemIndex = i;
	              break;
	            }
	          }
	          return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
	        }
	      }

	      return null;
	    }

	    /**
	     * Calculate coordinate of cursor in chart
	     * @param  {Object} e               Event object
	     * @param  {Object} containerOffset The offset of main part in the svg element
	     * @return {Object}                 {chartX, chartY}
	     */

	  }, {
	    key: 'getChartPosition',
	    value: function getChartPosition(e, containerOffset) {
	      return {
	        chartX: Math.round(e.pageX - containerOffset.left),
	        chartY: Math.round(e.pageY - containerOffset.top)
	      };
	    }

	    /**
	     * get domain of ticks
	     * @param  {Array} ticks Ticks of axis
	     * @param  {String} type  The type of axis
	     * @return {Array} domain
	     */

	  }, {
	    key: 'getDomainOfTicks',
	    value: function getDomainOfTicks(ticks, type) {
	      if (type === 'number') {
	        return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
	      }

	      return ticks;
	    }

	    /**
	     * Get domain of data by key
	     * @param  {String} key  The unique key of a group of data
	     * @param  {String} type The type of axis
	     * @return {Array} Domain of data
	     */

	  }, {
	    key: 'getDomainByKey',
	    value: function getDomainByKey(key, type) {
	      var data = this.props.data;
	      var _state = this.state;
	      var dataStartIndex = _state.dataStartIndex;
	      var dataEndIndex = _state.dataEndIndex;

	      var domain = data.slice(dataStartIndex, dataEndIndex + 1).map(function (entry) {
	        return entry[key] || 0;
	      });

	      return type === 'number' ? [Math.min.apply(null, domain), Math.max.apply(null, domain)] : domain;
	    }
	  }, {
	    key: 'getDomainOfStackGroups',
	    value: function getDomainOfStackGroups(stackGroups) {
	      var _state2 = this.state;
	      var dataStartIndex = _state2.dataStartIndex;
	      var dataEndIndex = _state2.dataEndIndex;


	      return Object.keys(stackGroups).reduce(function (result, stackId) {
	        var group = stackGroups[stackId];
	        var stackedData = group.stackedData;

	        var minList = stackedData[0].slice(dataStartIndex, dataEndIndex + 1);
	        var maxList = stackedData[stackedData.length - 1].slice(dataStartIndex, dataEndIndex + 1);
	        var min = minList.reduce(function (res, entry) {
	          return Math.min(res, entry[0]);
	        }, Infinity);
	        var max = maxList.reduce(function (res, entry) {
	          return Math.max(res, entry[1]);
	        }, -Infinity);

	        return [Math.min(min, result[0]), Math.max(max, result[1])];
	      }, [Infinity, -Infinity]);
	    }

	    /**
	     * Get domain of data by the configuration of item element
	     * @param  {Array} items  The instances of item
	     * @param  {String} type  The type of axis, number - Number Axis, category - Category Axis
	     * @return {Array}        Domain
	     */

	  }, {
	    key: 'getDomainOfItemsWithSameAxis',
	    value: function getDomainOfItemsWithSameAxis(items, type) {
	      var _this3 = this;

	      var domains = items.map(function (item) {
	        return _this3.getDomainByKey(item.props.dataKey, type);
	      });

	      if (type === 'number') {
	        // Calculate the domain of number axis
	        return domains.reduce(function (result, entry) {
	          return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
	        }, [Infinity, -Infinity]);
	      }

	      var tag = {};
	      // Get the union set of category axis
	      return domains.reduce(function (result, entry) {
	        for (var i = 0, len = entry.length; i < len; i++) {
	          if (!tag[entry[i]]) {
	            tag[entry[i]] = true;

	            result.push(entry[i]);
	          }
	        }
	        return result;
	      }, []);
	    }

	    /**
	     * Get the configuration of all x-axis or y-axis
	     * @param  {String} axisType    The type of axis
	     * @param  {Array} items        The instances of item
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {Object}          Configuration
	     */

	  }, {
	    key: 'getAxisMap',
	    value: function getAxisMap() {
	      var axisType = arguments.length <= 0 || arguments[0] === undefined ? 'xAxis' : arguments[0];
	      var items = arguments[1];
	      var stackGroups = arguments[2];
	      var children = this.props.children;

	      var Axis = axisType === 'xAxis' ? _XAxis2.default : _YAxis2.default;
	      var axisIdKey = axisType === 'xAxis' ? 'xAxisId' : 'yAxisId';
	      // Get all the instance of Axis
	      var axes = (0, _ReactUtils.findAllByType)(children, Axis);

	      var axisMap = {};

	      if (axes && axes.length) {
	        axisMap = this.getAxisMapByAxes(axes, items, axisType, axisIdKey, stackGroups);
	      } else if (items && items.length) {
	        axisMap = this.getAxisMapByItems(items, Axis, axisType, axisIdKey, stackGroups);
	      }

	      return axisMap;
	    }

	    /**
	     * Get the configuration of axis by the options of axis instance
	     * @param {Array}  axes  The instance of axes
	     * @param  {Array} items The instances of item
	     * @param  {String} axisType The type of axis, xAxis - x-axis, yAxis - y-axis
	     * @param  {String} axisIdKey The unique id of an axis
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {Object}      Configuration
	     */

	  }, {
	    key: 'getAxisMapByAxes',
	    value: function getAxisMapByAxes(axes, items, axisType, axisIdKey, stackGroups) {
	      var _this4 = this;

	      var _props = this.props;
	      var layout = _props.layout;
	      var children = _props.children;
	      var _state3 = this.state;
	      var dataEndIndex = _state3.dataEndIndex;
	      var dataStartIndex = _state3.dataStartIndex;

	      var len = dataEndIndex - dataStartIndex + 1;
	      var isCategoryAxis = layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis';

	      // Eliminate duplicated axes
	      var axisMap = axes.reduce(function (result, child) {
	        var _child$props = child.props;
	        var type = _child$props.type;
	        var dataKey = _child$props.dataKey;

	        var axisId = child.props[axisIdKey];

	        if (!result[axisId]) {
	          var domain = undefined;

	          if (dataKey) {
	            domain = _this4.getDomainByKey(dataKey, type);
	          } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
	            domain = _this4.getDomainOfStackGroups(stackGroups[axisId].stackGroups);
	          } else if (isCategoryAxis) {
	            domain = (0, _range2.default)(0, len);
	          } else {
	            domain = _this4.getDomainOfItemsWithSameAxis(items.filter(function (entry) {
	              return entry.props[axisIdKey] === axisId;
	            }), type);
	          }
	          if (type === 'number') {
	            // To detect wether there is any reference lines whose props alwaysShow is true
	            domain = (0, _CartesianUtils.detectReferenceElementsDomain)(children, domain, axisId, axisType);

	            if (child.props.domain) {
	              domain = (0, _DataUtils.parseSpecifiedDomain)(child.props.domain, domain);
	            }
	          }

	          return _extends({}, result, _defineProperty({}, axisId, _extends({}, child.props, {
	            axisType: axisType,
	            domain: domain,
	            originalDomain: child.props.domain
	          })));
	        }

	        return result;
	      }, {});

	      return axisMap;
	    }

	    /**
	     * Get the configuration of axis by the options of item,
	     * this kind of axis does not display in chart
	     * @param  {Array} items       The instances of item
	     * @param  {ReactElement} Axis Axis Component
	     * @param  {String} axisType   The type of axis, xAxis - x-axis, yAxis - y-axis
	     * @param  {String} axisIdKey  The unique id of an axis
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {Object}            Configuration
	     */

	  }, {
	    key: 'getAxisMapByItems',
	    value: function getAxisMapByItems(items, Axis, axisType, axisIdKey, stackGroups) {
	      var _this5 = this;

	      var _props2 = this.props;
	      var layout = _props2.layout;
	      var children = _props2.children;
	      var _state4 = this.state;
	      var dataEndIndex = _state4.dataEndIndex;
	      var dataStartIndex = _state4.dataStartIndex;

	      var len = dataEndIndex - dataStartIndex + 1;
	      var index = -1;
	      var isCategoryAxis = layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis';

	      // The default type of x-axis is category axis,
	      // The default contents of x-axis is the serial numbers of data
	      // The default type of y-axis is number axis
	      // The default contents of y-axis is the domain of data
	      var axisMap = items.reduce(function (result, child) {
	        var axisId = child.props[axisIdKey];

	        if (!result[axisId]) {
	          index++;

	          var domain = undefined;
	          if (isCategoryAxis) {
	            domain = (0, _range2.default)(0, len);
	          } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
	            domain = _this5.getDomainOfStackGroups(stackGroups[axisId].stackGroups);
	            domain = (0, _CartesianUtils.detectReferenceElementsDomain)(children, domain, axisId, axisType);
	          } else {
	            domain = (0, _DataUtils.parseSpecifiedDomain)(Axis.defaultProps.domain, _this5.getDomainOfItemsWithSameAxis(items.filter(function (entry) {
	              return entry.props[axisIdKey] === axisId;
	            }), 'number'));
	            domain = (0, _CartesianUtils.detectReferenceElementsDomain)(children, domain, axisId, axisType);
	          }

	          return _extends({}, result, _defineProperty({}, axisId, {
	            axisType: axisType,
	            type: Axis.defaultProps.type,
	            hide: true,
	            width: Axis.defaultProps.width,
	            height: Axis.defaultProps.height,
	            tickCount: Axis.defaultProps.tickCount,
	            orientation: ORIENT_MAP[axisType][index % 2],
	            originalDomain: Axis.defaultProps.domain,
	            isAutoGenerated: true,
	            domain: domain
	          }));
	        }

	        return result;
	      }, {});

	      return axisMap;
	    }

	    /**
	     * Calculate the offset of main part in the svg element
	     * @param  {Array} items       The instances of item
	     * @param  {Object} xAxisMap  The configuration of x-axis
	     * @param  {Object} yAxisMap  The configuration of y-axis
	     * @return {Object} The offset of main part in the svg element
	     */

	  }, {
	    key: 'getOffset',
	    value: function getOffset(items, xAxisMap, yAxisMap) {
	      var _props3 = this.props;
	      var width = _props3.width;
	      var height = _props3.height;
	      var margin = _props3.margin;
	      var children = _props3.children;

	      var brushItem = (0, _ReactUtils.findChildByType)(children, _Brush2.default);

	      var offsetH = Object.keys(yAxisMap).reduce(function (result, id) {
	        var entry = yAxisMap[id];
	        var orientation = entry.orientation;

	        result[orientation] += entry.hide ? 0 : entry.width;

	        return result;
	      }, { left: margin.left || 0, right: margin.right || 0 });

	      var offsetV = Object.keys(xAxisMap).reduce(function (result, id) {
	        var entry = xAxisMap[id];
	        var orientation = entry.orientation;

	        result[orientation] += entry.hide ? 0 : entry.height;

	        return result;
	      }, { top: margin.top || 0, bottom: margin.bottom || 0 });

	      if (brushItem) {
	        offsetV.bottom += brushItem.props.height || _Brush2.default.defaultProps.height;
	      }
	      var legendProps = this.getLegendProps(items);
	      if (legendProps) {
	        var box = _Legend2.default.getLegendBBox(legendProps, width, height) || {};
	        if (legendProps.layout === 'horizontal' && (0, _isNumber2.default)(offsetV[legendProps.verticalAlign])) {
	          offsetV[legendProps.verticalAlign] += box.height || 0;
	        } else if (legendProps.layout === 'vertical' && (0, _isNumber2.default)(offsetH[legendProps.align])) {
	          offsetH[legendProps.align] += box.width || 0;
	        }
	      }

	      return _extends({}, offsetH, offsetV, {
	        width: width - offsetH.left - offsetH.right,
	        height: height - offsetV.top - offsetV.bottom
	      });
	    }

	    /**
	     * Get the main color of each graphic item
	     * @param  {ReactElement} item A graphic item
	     * @return {String}            Color
	     */

	  }, {
	    key: 'getMainColorOfItem',
	    value: function getMainColorOfItem(item) {
	      var displayName = item.type.displayName;
	      var result = undefined;

	      switch (displayName) {
	        case 'Line':
	          result = item.props.stroke;
	          break;
	        default:
	          result = item.props.fill;
	          break;
	      }

	      return result;
	    }
	    /**
	     * Configure the scale function of axis
	     * @param {Object} scale The scale function
	     * @param {Object} opts  The configuration of axis
	     * @return {Object}      null
	     */

	  }, {
	    key: 'setTicksOfScale',
	    value: function setTicksOfScale(scale, opts) {
	      // Give priority to use the options of ticks
	      if (opts.ticks && opts.ticks) {
	        scale.domain(this.getDomainOfTicks(opts.ticks, opts.type));
	        return;
	      }

	      if (opts.tickCount && opts.type === 'number' && opts.originalDomain && (opts.originalDomain[0] === 'auto' || opts.originalDomain[1] === 'auto')) {
	        // Calculate the ticks by the number of grid when the axis is a number axis
	        var domain = scale.domain();
	        var tickValues = (0, _rechartsScale.getNiceTickValues)(domain, opts.tickCount);

	        opts.ticks = tickValues;
	        scale.domain(this.getDomainOfTicks(tickValues, opts.type));
	      }
	    }

	    /**
	     * Calculate the scale function, position, width, height of axes
	     * @param  {Object} axisMap  The configuration of axes
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} axisType The type of axes, x-axis or y-axis
	     * @return {Object} Configuration
	     */

	  }, {
	    key: 'getFormatAxisMap',
	    value: function getFormatAxisMap(axisMap, offset, axisType) {
	      var _this6 = this;

	      var _props4 = this.props;
	      var width = _props4.width;
	      var height = _props4.height;
	      var layout = _props4.layout;

	      var displayName = this.constructor.displayName;
	      var ids = Object.keys(axisMap);
	      var steps = {
	        left: offset.left,
	        right: width - offset.right,
	        top: offset.top,
	        bottom: height - offset.bottom
	      };

	      return ids.reduce(function (result, id) {
	        var axis = axisMap[id];
	        var orientation = axis.orientation;
	        var type = axis.type;
	        var domain = axis.domain;

	        var range = undefined;

	        if (axisType === 'xAxis') {
	          range = [offset.left, offset.left + offset.width];
	        } else {
	          range = layout === 'horizontal' ? [offset.top + offset.height, offset.top] : [offset.top, offset.top + offset.height];
	        }
	        var scale = undefined;

	        if (type === 'number') {
	          scale = (0, _d3Scale.scaleLinear)().domain(domain).range(range);
	        } else if (displayName === 'LineChart' || displayName === 'AreaChart') {
	          scale = (0, _d3Scale.scalePoint)().domain(domain).range(range);
	        } else {
	          scale = (0, _d3Scale.scaleBand)().domain(domain).range(range);
	        }

	        _this6.setTicksOfScale(scale, axis);

	        var x = undefined;
	        var y = undefined;

	        if (axisType === 'xAxis') {
	          x = offset.left;
	          y = orientation === 'top' ? steps[orientation] - axis.height : steps[orientation];
	        } else {
	          x = orientation === 'left' ? steps[orientation] - axis.width : steps[orientation];
	          y = offset.top;
	        }

	        result[id] = _extends({}, axis, {
	          x: x, y: y, scale: scale,
	          width: axisType === 'xAxis' ? offset.width : axis.width,
	          height: axisType === 'yAxis' ? offset.height : axis.height
	        });

	        if (!axis.hide && axisType === 'xAxis') {
	          steps[orientation] += (orientation === 'top' ? -1 : 1) * result[id].height;
	        } else if (!axis.hide) {
	          steps[orientation] += (orientation === 'left' ? -1 : 1) * result[id].width;
	        }

	        return result;
	      }, {});
	    }

	    /**
	     * Get the ticks of an axis
	     * @param  {Object}  axis The configuration of an axis
	     * @param {Boolean} isGrid Whether or not are the ticks in grid
	     * @return {Array}  Ticks
	     */

	  }, {
	    key: 'getAxisTicks',
	    value: function getAxisTicks(axis) {
	      var isGrid = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      var scale = axis.scale;
	      var offset = isGrid && axis.type === 'category' ? scale.bandwidth() / 2 : 0;

	      if (axis.ticks) {
	        return axis.ticks.map(function (entry) {
	          return { coord: scale(entry) + offset, value: entry };
	        });
	      }

	      if (scale.ticks) {
	        return scale.ticks(axis.tickCount).map(function (entry) {
	          return { coord: scale(entry) + offset, value: entry };
	        });
	      }

	      return scale.domain().map(function (entry) {
	        return { coord: scale(entry) + offset, value: entry };
	      });
	    }

	    /**
	     * Calculate the ticks of grid
	     * @param  {Array} ticks The ticks in axis
	     * @param {Number} min   The minimun value of axis
	     * @param {Number} max   The maximun value of axis
	     * @return {Array}       Ticks
	     */

	  }, {
	    key: 'getGridTicks',
	    value: function getGridTicks(ticks, min, max) {
	      var hasMin = undefined;
	      var hasMax = undefined;
	      var values = undefined;

	      values = ticks.map(function (entry) {
	        if (entry.coord === min) {
	          hasMin = true;
	        }
	        if (entry.coord === max) {
	          hasMax = true;
	        }

	        return entry.coord;
	      });

	      if (!hasMin) {
	        values.push(min);
	      }
	      if (!hasMax) {
	        values.push(max);
	      }

	      return values;
	    }

	    /**
	     * Get the information of mouse in chart, return null when the mouse is not in the chart
	     * @param  {Object}  xAxisMap The configuration of all x-axes
	     * @param  {Object}  yAxisMap The configuration of all y-axes
	     * @param  {Object}  offset   The offset of main part in the svg element
	     * @param  {Object}  e        The event object
	     * @return {Object}           Mouse data
	     */

	  }, {
	    key: 'getMouseInfo',
	    value: function getMouseInfo(xAxisMap, yAxisMap, offset, e) {
	      var isIn = e.chartX >= offset.left && e.chartX <= offset.left + offset.width && e.chartY >= offset.top && e.chartY <= offset.top + offset.height;

	      if (!isIn) {
	        return null;
	      }

	      var layout = this.props.layout;

	      var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
	      var pos = layout === 'horizontal' ? e.chartX : e.chartY;
	      var ids = Object.keys(axisMap);
	      var axis = axisMap[ids[0]];
	      var ticks = this.getAxisTicks(axis, true);

	      var index = 0;
	      var len = ticks.length;

	      if (len > 1) {
	        for (var i = 0; i < len; i++) {
	          if (i === 0 && pos <= (ticks[i].coord + ticks[i + 1].coord) / 2 || i > 0 && i < len - 1 && pos > (ticks[i].coord + ticks[i - 1].coord) / 2 && pos <= (ticks[i].coord + ticks[i + 1].coord) / 2 || i === len - 1 && pos > (ticks[i].coord + ticks[i - 1].coord) / 2) {
	            index = i;
	            break;
	          }
	        }
	      }

	      return {
	        activeTooltipIndex: index,
	        activeTooltipLabel: ticks[index].value,
	        activeTooltipCoord: {
	          x: layout === 'horizontal' ? ticks[index].coord : e.chartX,
	          y: layout === 'horizontal' ? e.chartY : ticks[index].coord
	        }
	      };
	    }

	    /**
	     * Get the content to be displayed in the tooltip
	     * @param  {Array} items The instances of item
	     * @return {Array}       The content of tooltip
	     */

	  }, {
	    key: 'getTooltipContent',
	    value: function getTooltipContent(items) {
	      var _this7 = this;

	      var _state5 = this.state;
	      var activeLineKey = _state5.activeLineKey;
	      var activeBarKey = _state5.activeBarKey;
	      var activeAreaKey = _state5.activeAreaKey;
	      var activeTooltipIndex = _state5.activeTooltipIndex;
	      var dataStartIndex = _state5.dataStartIndex;
	      var dataEndIndex = _state5.dataEndIndex;

	      var data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);

	      if (activeTooltipIndex < 0 || !items || !items.length) {
	        return null;
	      }

	      var activeItems = items;

	      if (activeLineKey) {
	        activeItems = items.filter(function (item) {
	          return item.props.dataKey === activeLineKey && item.type.displayName === 'Line';
	        });
	      } else if (activeBarKey) {
	        activeItems = items.filter(function (item) {
	          return item.props.dataKey === activeBarKey && item.type.displayName === 'Bar';
	        });
	      } else if (activeAreaKey) {
	        activeItems = items.filter(function (item) {
	          return item.props.dataKey === activeAreaKey && item.type.displayName === 'Area';
	        });
	      }

	      return activeItems.map(function (child) {
	        var _child$props2 = child.props;
	        var dataKey = _child$props2.dataKey;
	        var name = _child$props2.name;
	        var unit = _child$props2.unit;
	        var formatter = _child$props2.formatter;


	        return {
	          name: name || dataKey,
	          unit: unit || '',
	          color: _this7.getMainColorOfItem(child),
	          value: data[activeTooltipIndex][dataKey],
	          formatter: formatter
	        };
	      });
	    }
	  }, {
	    key: 'getLegendProps',
	    value: function getLegendProps(items) {
	      var _this8 = this;

	      var children = this.props.children;

	      var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);

	      if (!legendItem) {
	        return null;
	      }

	      var _props5 = this.props;
	      var width = _props5.width;
	      var height = _props5.height;

	      var legendData = items.map(function (child) {
	        var _child$props3 = child.props;
	        var dataKey = _child$props3.dataKey;
	        var name = _child$props3.name;
	        var legendType = _child$props3.legendType;


	        return {
	          type: legendType || 'square',
	          color: _this8.getMainColorOfItem(child),
	          value: name || dataKey
	        };
	      }, this);

	      return _extends({}, legendItem.props, _Legend2.default.getWithHeight(legendItem, width, height), {
	        payload: legendData
	      });
	    }
	  }, {
	    key: 'validateAxes',
	    value: function validateAxes() {
	      var _props6 = this.props;
	      var layout = _props6.layout;
	      var children = _props6.children;

	      var xAxes = (0, _ReactUtils.findAllByType)(children, _XAxis2.default);
	      var yAxes = (0, _ReactUtils.findAllByType)(children, _YAxis2.default);

	      if (layout === 'horizontal' && xAxes && xAxes.length) {
	        xAxes.forEach(function (axis) {
	          (0, _invariant2.default)(axis.props.type === 'category', 'x-axis should be category axis when the layout is horizontal');
	        });
	      } else if (layout === 'vertical') {
	        var displayName = this.constructor.displayName;

	        (0, _invariant2.default)(yAxes && yAxes.length, 'You should add <YAxis type="number"/> in ' + displayName + '.' + 'The layout is vertical now, y-axis should be category axis,' + 'but y-axis is number axis when no YAxis is added.');
	        (0, _invariant2.default)(xAxes && xAxes.length, 'You should add <XAxis /> in ' + displayName + '.' + 'The layout is vertical now, x-axis is category when no XAxis is added.');

	        if (yAxes && yAxes.length) {
	          yAxes.forEach(function (axis) {
	            (0, _invariant2.default)(axis.props.type === 'category', 'y-axis should be category axis when the layout is vertical');
	          });
	        }
	      }

	      return null;
	    }
	  }, {
	    key: 'handleMouseEnter',


	    /**
	     * The handler of mouse entering chart
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} xAxisMap The configuration of all x-axes
	     * @param  {Object} yAxisMap The configuration of all y-axes
	     * @param  {Object} e        Event object
	     * @return {Null}            null
	     */
	    value: function handleMouseEnter(offset, xAxisMap, yAxisMap, e) {
	      var container = _reactDom2.default.findDOMNode(this);
	      var containerOffset = _ouiDomUtils2.default.getOffset(container);
	      var ne = this.getChartPosition(e, containerOffset);
	      var mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);

	      if (mouse) {
	        this.setState(_extends({}, mouse, {
	          isTooltipActive: true
	        }));
	      }
	    }

	    /**
	     * The handler of mouse moving in chart
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} xAxisMap The configuration of all x-axes
	     * @param  {Object} yAxisMap The configuration of all y-axes
	     * @param  {Object} e        Event object
	     * @return {Null} no return
	     */

	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(offset, xAxisMap, yAxisMap, e) {
	      var container = _reactDom2.default.findDOMNode(this);
	      var containerOffset = _ouiDomUtils2.default.getOffset(container);
	      var ne = this.getChartPosition(e, containerOffset);
	      var mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);

	      if (mouse) {
	        this.setState(_extends({}, mouse, {
	          isTooltipActive: true
	        }));
	      } else {
	        this.setState({
	          isTooltipActive: false
	        });
	      }
	    }

	    /**
	     * The handler if mouse leaving chart
	     * @return {Null} no return
	     */

	  }, {
	    key: 'renderXAxis',


	    /**
	     * Draw x-axes
	     * @param {Object} xAxisMap The configuration of all x-axes
	     * @return {ReactElement} The instance of x-axes
	     */
	    value: function renderXAxis(xAxisMap) {
	      var _props7 = this.props;
	      var width = _props7.width;
	      var height = _props7.height;

	      var ids = xAxisMap && Object.keys(xAxisMap);

	      if (ids && ids.length) {
	        var xAxes = [];

	        for (var i = 0, len = ids.length; i < len; i++) {
	          var axis = xAxisMap[ids[i]];

	          if (!axis.hide) {
	            xAxes.push(_react2.default.createElement(_CartesianAxis2.default, _extends({}, axis, {
	              x: axis.x,
	              y: axis.y,
	              width: axis.width,
	              height: axis.height,
	              key: 'x-axis-' + ids[i],
	              orientation: axis.orientation,
	              viewBox: { x: 0, y: 0, width: width, height: height },
	              ticks: this.getAxisTicks(axis, true)
	            })));
	          }
	        }

	        return xAxes.length ? _react2.default.createElement(
	          _Layer2.default,
	          { key: 'x-axis-layer', className: 'recharts-x-axis' },
	          xAxes
	        ) : null;
	      }
	    }

	    /**
	     * Draw y-axes
	     * @param  {Object} yAxisMap The configuration of all y-axes
	     * @return {ReactElement} The instance of y-axes
	     */

	  }, {
	    key: 'renderYAxis',
	    value: function renderYAxis(yAxisMap) {
	      var _props8 = this.props;
	      var width = _props8.width;
	      var height = _props8.height;

	      var ids = yAxisMap && Object.keys(yAxisMap);

	      if (ids && ids.length) {
	        var yAxes = [];

	        for (var i = 0, len = ids.length; i < len; i++) {
	          var axis = yAxisMap[ids[i]];

	          if (!axis.hide) {
	            yAxes.push(_react2.default.createElement(_CartesianAxis2.default, _extends({}, axis, {
	              key: 'y-axis-' + ids[i],
	              x: axis.x,
	              y: axis.y,
	              width: axis.width,
	              height: axis.height,
	              orientation: axis.orientation,
	              viewBox: { x: 0, y: 0, width: width, height: height },
	              ticks: this.getAxisTicks(axis, true)
	            })));
	          }
	        }

	        return yAxes.length ? _react2.default.createElement(
	          _Layer2.default,
	          { key: 'y-axis-layer', className: 'recharts-y-axis' },
	          yAxes
	        ) : null;
	      }
	    }

	    /**
	     * Draw grid
	     * @param  {Object} xAxisMap The configuration of all x-axes
	     * @param  {Object} yAxisMap The configuration of all y-axes
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @return {ReactElement} The instance of grid
	     */

	  }, {
	    key: 'renderGrid',
	    value: function renderGrid(xAxisMap, yAxisMap, offset) {
	      var _props9 = this.props;
	      var children = _props9.children;
	      var width = _props9.width;
	      var height = _props9.height;

	      var gridItem = (0, _ReactUtils.findChildByType)(children, _CartesianGrid2.default);

	      if (!gridItem) {
	        return null;
	      }

	      var xIds = Object.keys(xAxisMap);
	      var yIds = Object.keys(yAxisMap);
	      var xAxis = xAxisMap[xIds[0]];
	      var yAxis = yAxisMap[yIds[0]];

	      var verticalPoints = this.getGridTicks(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, xAxis, {
	        ticks: this.getAxisTicks(xAxis, true),
	        viewBox: { x: 0, y: 0, width: width, height: height }
	      })), offset.left, offset.left + offset.width);

	      var horizontalPoints = this.getGridTicks(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, yAxis, {
	        ticks: this.getAxisTicks(yAxis, true),
	        viewBox: { x: 0, y: 0, width: width, height: height }
	      })), offset.top, offset.top + offset.height);

	      return _react2.default.cloneElement(gridItem, {
	        key: 'grid',
	        x: offset.left,
	        y: offset.top,
	        width: offset.width,
	        height: offset.height,
	        verticalPoints: verticalPoints, horizontalPoints: horizontalPoints
	      });
	    }
	    /**
	     * Draw legend
	     * @param  {Array} items             The instances of item
	     * @return {ReactElement}            The instance of Legend
	     */

	  }, {
	    key: 'renderLegend',
	    value: function renderLegend(items) {
	      var props = this.getLegendProps(items);

	      if (!props) {
	        return null;
	      }

	      var _props10 = this.props;
	      var margin = _props10.margin;
	      var width = _props10.width;
	      var height = _props10.height;


	      return _react2.default.createElement(_Legend2.default, _extends({}, props, {
	        chartWidth: width,
	        chartHeight: height,
	        margin: margin
	      }));
	    }

	    /**
	     * Draw Tooltip
	     * @param  {Array} items   The instances of item
	     * @param  {Object} offset The offset of main part in the svg element
	     * @return {ReactElement}  The instance of Tooltip
	     */

	  }, {
	    key: 'renderTooltip',
	    value: function renderTooltip(items, offset) {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem) {
	        return null;
	      }

	      var _state6 = this.state;
	      var isTooltipActive = _state6.isTooltipActive;
	      var activeTooltipLabel = _state6.activeTooltipLabel;
	      var activeTooltipCoord = _state6.activeTooltipCoord;

	      var viewBox = {
	        x: offset.left,
	        y: offset.top,
	        width: offset.width,
	        height: offset.height
	      };

	      return _react2.default.cloneElement(tooltipItem, {
	        viewBox: viewBox,
	        active: isTooltipActive,
	        label: activeTooltipLabel,
	        payload: isTooltipActive ? this.getTooltipContent(items) : [],
	        coordinate: activeTooltipCoord
	      });
	    }
	  }, {
	    key: 'renderBrush',
	    value: function renderBrush(xAxisMap, yAxisMap, offset) {
	      var _props11 = this.props;
	      var children = _props11.children;
	      var data = _props11.data;

	      var brushItem = (0, _ReactUtils.findChildByType)(children, _Brush2.default);

	      if (!brushItem) {
	        return null;
	      }

	      var dataKey = brushItem.props.dataKey;
	      var height = (brushItem.props.height || _Brush2.default.defaultProps.height) + 1;

	      return _react2.default.cloneElement(brushItem, {
	        onChange: this.handleBrushChange,
	        data: data.map(function (entry) {
	          return entry[dataKey];
	        }),
	        x: offset.left,
	        y: offset.top + offset.height + offset.bottom - height,
	        width: offset.width
	      });
	    }
	  }, {
	    key: 'renderReferenceLines',
	    value: function renderReferenceLines(xAxisMap, yAxisMap, offset) {
	      var children = this.props.children;

	      var lines = (0, _ReactUtils.findAllByType)(children, _ReferenceLine2.default);

	      if (!lines || !lines.length) {
	        return null;
	      }

	      return lines.map(function (entry, i) {
	        return _react2.default.cloneElement(entry, {
	          key: 'reference-line-' + i,
	          xAxisMap: xAxisMap, yAxisMap: yAxisMap,
	          viewBox: {
	            x: offset.left,
	            y: offset.top,
	            width: offset.width,
	            height: offset.height
	          }
	        });
	      });
	    }
	  }, {
	    key: 'renderReferenceDots',
	    value: function renderReferenceDots(xAxisMap, yAxisMap, offset) {
	      var children = this.props.children;

	      var dots = (0, _ReactUtils.findAllByType)(children, _ReferenceDot2.default);

	      if (!dots || !dots.length) {
	        return null;
	      }

	      return dots.map(function (entry, i) {
	        return _react2.default.cloneElement(entry, {
	          key: 'reference-dot-' + i,
	          xAxisMap: xAxisMap, yAxisMap: yAxisMap
	        });
	      });
	    }
	  }]);

	  return CartesianChart;
	}(_react.Component), _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  data: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),

	  className: _react.PropTypes.string,
	  stackType: _react.PropTypes.oneOf(['value', 'percent']),
	  title: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  barCategoryGap: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  barGap: _react.PropTypes.number,
	  barSize: _react.PropTypes.number,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
	}, _class2.defaultProps = {
	  style: {},
	  barCategoryGap: '10%',
	  barGap: 4,
	  layout: 'horizontal',
	  margin: { top: 5, right: 5, bottom: 5, left: 5 }
	}, _temp)) || _class;

	exports.default = CartesianChart;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getNiceTickValues = exports.getTickValues = undefined;

	var _getTickValues = __webpack_require__(247);

	var _getTickValues2 = _interopRequireDefault(_getTickValues);

	var _getNiceTickValues = __webpack_require__(249);

	var _getNiceTickValues2 = _interopRequireDefault(_getNiceTickValues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  getTickValues: _getTickValues2.default,
	  getNiceTickValues: _getNiceTickValues2.default
	};
	exports.getTickValues = _getTickValues2.default;
	exports.getNiceTickValues = _getNiceTickValues2.default;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(248);

	var _getNiceTickValues = __webpack_require__(249);

	var _getNiceTickValues2 = _interopRequireDefault(_getNiceTickValues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getTickValues(domain, tickCount) {
	  if (domain[0] === domain[1]) {
	    return (0, _getNiceTickValues2.default)(domain, tickCount);
	  }

	  tickCount = Math.max(tickCount, 2);

	  var step = (domain[1] - domain[0]) / (tickCount - 1);

	  var fn = (0, _utils.compose)((0, _utils.map)(function (n) {
	    return domain[0] + n * step;
	  }), _utils.range);

	  return fn(0, tickCount);
	}

	exports.default = getTickValues;

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var identity = function identity(i) {
	  return i;
	};

	var __ = exports.__ = {
	  '@@functional/placeholder': true
	};

	var isPlaceHolder = function isPlaceHolder(val) {
	  return val === __;
	};

	var _curry0 = function _curry0(fn) {
	  return function _curried() {
	    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? undefined : arguments[0])) {
	      return _curried;
	    }

	    return fn.apply(undefined, arguments);
	  };
	};

	var curryN = function curryN(n, fn) {
	  if (n === 1) {
	    return fn;
	  }

	  return _curry0(function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var argsLength = args.filter(function (arg) {
	      return arg !== __;
	    }).length;

	    if (argsLength >= n) {
	      return fn.apply(undefined, args);
	    }

	    return curryN(n - argsLength, _curry0(function () {
	      for (var _len2 = arguments.length, restArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        restArgs[_key2] = arguments[_key2];
	      }

	      var newArgs = args.map(function (arg) {
	        return isPlaceHolder(arg) ? restArgs.shift() : arg;
	      });

	      return fn.apply(undefined, _toConsumableArray(newArgs).concat(restArgs));
	    }));
	  });
	};

	var curry = exports.curry = function curry(fn) {
	  return curryN(fn.length, fn);
	};

	var range = exports.range = function range(begin, end) {
	  var arr = [];

	  for (var i = begin; i < end; ++i) {
	    arr[i - begin] = i;
	  }

	  return arr;
	};

	var map = exports.map = curry(function (fn, arr) {
	  if (Array.isArray(arr)) {
	    return arr.map(fn);
	  }

	  return Object.keys(arr).map(function (key) {
	    return arr[key];
	  }).map(fn);
	});

	var compose = exports.compose = function compose() {
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }

	  if (!args.length) {
	    return identity;
	  }

	  var fns = args.reverse();
	  // first function can receive multiply arguments
	  var firstFn = fns[0];
	  var tailsFn = fns.slice(1);

	  return function () {
	    return tailsFn.reduce(function (res, fn) {
	      return fn(res);
	    }, firstFn.apply(undefined, arguments));
	  };
	};

	var reverse = exports.reverse = function reverse(arr) {
	  if (Array.isArray(arr)) {
	    return arr.reverse();
	  }

	  // can be string
	  return arr.split('').reverse.join('');
	};

	var memoize = exports.memoize = function memoize(fn) {
	  var lastArgs = null;
	  var lastResult = null;

	  return function () {
	    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	      args[_key4] = arguments[_key4];
	    }

	    if (lastArgs && args.every(function (val, i) {
	      return val === lastArgs[i];
	    })) {
	      return lastResult;
	    }

	    lastArgs = args;
	    lastResult = fn.apply(undefined, args);

	    return lastResult;
	  };
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @fileOverview calculate tick values of scale
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author xile611, arcthur
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @date 2015-09-17
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(248);

	var _arithmetic = __webpack_require__(250);

	var _arithmetic2 = _interopRequireDefault(_arithmetic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 判断是否为合法的区间，并返回处理后的合法区间
	 *
	 * @param  {Number} min       最小值
	 * @param  {Number} max       最大值
	 * @return {Array} 最小最大值数组
	 */
	function getValidInterval(_ref) {
	  var _ref2 = _slicedToArray(_ref, 2);

	  var min = _ref2[0];
	  var max = _ref2[1];
	  var validMin = min;
	  var validMax = max;

	  // 交换最大值和最小值

	  if (min > max) {
	    validMin = max;
	    validMax = min;
	  }

	  return [validMin, validMax];
	}

	/**
	 * 计算可读性高的刻度间距，如 10, 20
	 *
	 * @param  {Number}  roughStep 计算的原始间隔
	 * @param  {Integer} amendIndex 修正系数
	 * @return {Number}  刻度间距
	 */
	function getFormatStep(roughStep, amendIndex) {
	  if (roughStep <= 0) {
	    return 0;
	  }

	  var digitCount = _arithmetic2.default.getDigitCount(roughStep);
	  // 间隔数与上一个数量级的占比
	  var stepRatio = roughStep / Math.pow(10, digitCount);

	  // 整数与浮点数相乘，需要处理JS精度问题
	  var amendStepRatio = _arithmetic2.default.multiply(Math.ceil(stepRatio / 0.05) + amendIndex, 0.05);

	  var formatStep = _arithmetic2.default.multiply(amendStepRatio, Math.pow(10, digitCount));

	  return formatStep;
	}

	/**
	 * 获取最大值和最小值相等的区间的刻度
	 *
	 * @param  {Number}  value     最大值也是最小值
	 * @param  {Integer} tickCount 刻度数
	 * @return {Array}   刻度组
	 */
	function getTickOfSingleValue(value, tickCount) {
	  var isFlt = _arithmetic2.default.isFloat(value);
	  var step = 1;
	  // 计算刻度的一个中间值
	  var middle = value;

	  if (isFlt) {
	    var absVal = Math.abs(value);

	    if (absVal < 1) {
	      // 小于1的浮点数，刻度的间隔也计算得到一个浮点数
	      step = Math.pow(10, _arithmetic2.default.getDigitCount(value) - 1);

	      middle = _arithmetic2.default.multiply(Math.floor(value / step), step);
	    } else if (absVal > 1) {
	      // 大于1的浮点数，向下取最接近的整数作为一个刻度
	      middle = Math.floor(value);
	    }
	  }

	  var middleIndex = Math.floor((tickCount - 1) / 2);

	  var fn = (0, _utils.compose)((0, _utils.map)(function (n) {
	    return _arithmetic2.default.sum(middle, _arithmetic2.default.multiply(n - middleIndex, step));
	  }), _utils.range);

	  return fn(0, tickCount);
	}

	/**
	 * 计算步长
	 *
	 * @param  {Number}  min        最小值
	 * @param  {Number}  max        最大值
	 * @param  {Integer} tickCount  刻度数
	 * @param  {Number}  amendIndex 修正系数
	 * @return {Object}  步长相关对象
	 */
	function calculateStep(min, max, tickCount) {
	  var amendIndex = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

	  // 获取间隔步长
	  var step = getFormatStep((max - min) / (tickCount - 1), amendIndex);
	  // 计算刻度的一个中间值
	  var middle = undefined;

	  // 当0属于取值范围时
	  if (min <= 0 && max >= 0) {
	    middle = 0;
	  } else {
	    middle = (min + max) / 2;
	    middle = middle - middle % step;
	  }

	  var belowCount = Math.ceil((middle - min) / step);
	  var upCount = Math.ceil((max - middle) / step);
	  var scaleCount = belowCount + upCount + 1;

	  if (scaleCount > tickCount) {
	    // 当计算得到的刻度数大于需要的刻度数时，将步长修正的大一些
	    return calculateStep(min, max, tickCount, amendIndex + 1);
	  } else if (scaleCount < tickCount) {
	    // 当计算得到的刻度数小于需要的刻度数时，人工的增加一些刻度
	    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
	    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
	  }

	  return {
	    step: step,
	    tickMin: _arithmetic2.default.minus(middle, _arithmetic2.default.multiply(belowCount, step)),
	    tickMax: _arithmetic2.default.sum(middle, _arithmetic2.default.multiply(upCount, step))
	  };
	}
	/**
	 * 获取刻度
	 *
	 * @param  {Number}  min        最小值
	 * @param  {Number}  max        最大值
	 * @param  {Integer} tickCount  刻度数
	 * @return {Array}   取刻度数组
	 */
	function getTickValues(_ref3) {
	  var _ref4 = _slicedToArray(_ref3, 2);

	  var min = _ref4[0];
	  var max = _ref4[1];
	  var tickCount = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];

	  // 刻度的数量不能小于1
	  var count = Math.max(tickCount, 2);

	  var _getValidInterval = getValidInterval([min, max]);

	  var _getValidInterval2 = _slicedToArray(_getValidInterval, 2);

	  var cormin = _getValidInterval2[0];
	  var cormax = _getValidInterval2[1];

	  if (cormin === cormax) {
	    return getTickOfSingleValue(cormin, tickCount);
	  }

	  // 获取间隔步长

	  var _calculateStep = calculateStep(cormin, cormax, count);

	  var step = _calculateStep.step;
	  var tickMin = _calculateStep.tickMin;
	  var tickMax = _calculateStep.tickMax;

	  var values = _arithmetic2.default.rangeStep(tickMin, tickMax + 0.1 * step, step);

	  return min > max ? (0, _utils.reverse)(values) : values;
	}

	exports.default = (0, _utils.memoize)(getTickValues);

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(248);

	/**
	 * 判断数据是否为浮点类型
	 *
	 * @param {Number} num 输入值
	 * @return {Boolean} 是否是浮点类型
	 */
	function isFloat(num) {
	  return (/^([+-]?)\d*\.\d+$/.test(num)
	  );
	}

	/**
	 * 获取数值的位数
	 * 其中绝对值属于区间[0.1, 1)， 得到的值为0
	 * 绝对值属于区间[0.01, 0.1)，得到的位数为 -1
	 * 绝对值属于区间[0.001, 0.01)，得到的位数为 -2
	 *
	 * @param  {Number} value 数值
	 * @return {Integer} 位数
	 */
	/**
	 * @fileOverview 一些公用的运算方法
	 * @author xile611
	 * @date 2015-09-17
	 */
	function getDigitCount(value) {
	  var abs = Math.abs(value);
	  var result = undefined;

	  if (value === 0) {
	    result = 1;
	  } else if (abs < 1) {
	    result = Math.floor(Math.log(abs) / Math.log(10)) + 1;
	  } else {
	    var str = '' + value;
	    var ary = str.split('.');

	    result = ary[0].length;
	  }

	  return result;
	}
	/**
	 * 计算数值的小数点后的位数
	 * @param  {Number} a 数值，可能为整数，也可能为浮点数
	 * @return {Integer}   位数
	 */
	function getDecimalDigitCount(a) {
	  var str = a ? '' + a : '';
	  var ary = str.split('.');

	  return ary.length > 1 ? ary[1].length : 0;
	}
	/**
	 * 加法运算，解决了js运算的精度问题
	 * @param  {Number} a 被加数
	 * @param  {Number} b 加数
	 * @return {Number}   和
	 */
	function sum(a, b) {
	  var count = Math.max(getDecimalDigitCount(a), getDecimalDigitCount(b));

	  count = Math.pow(10, count);

	  return (multiply(a, count) + multiply(b, count)) / count;
	}
	/**
	 * 减法运算，解决了js运算的精度问题
	 * @param  {Number} a 被减数
	 * @param  {Number} b 减数
	 * @return {Number}   差
	 */
	function minus(a, b) {
	  return sum(a, -b);
	}
	/**
	 * 乘法运算，解决了js运算的精度问题
	 * @param  {Number} a 被乘数
	 * @param  {Number} b 乘数
	 * @return {Number}   积
	 */
	function multiply(a, b) {
	  var intA = parseInt(('' + a).replace('.', ''), 10);
	  var intB = parseInt(('' + b).replace('.', ''), 10);
	  var count = getDecimalDigitCount(a) + getDecimalDigitCount(b);

	  return intA * intB / Math.pow(10, count);
	}
	/**
	 * 除法运算，解决了js运算的精度问题
	 * @param  {Number} a 被除数
	 * @param  {Number} b 除数
	 * @return {Number}   结果
	 */
	function divide(a, b) {
	  var ca = getDecimalDigitCount(a);
	  var cb = getDecimalDigitCount(b);
	  var intA = parseInt(('' + a).replace('.', ''), 10);
	  var intB = parseInt(('' + b).replace('.', ''), 10);

	  return intA / intB * Math.pow(10, cb - ca);
	}

	/**
	 * 按照固定的步长获取[start, end)这个区间的数据
	 * 并且需要处理js计算精度的问题
	 *
	 * @param  {Number} start 起点
	 * @param  {Number} end   终点，不包含该值
	 * @param  {Number} step  步长
	 * @return {Array}        若干数值
	 */
	function rangeStep(start, end, step) {
	  var num = start;
	  var result = [];

	  while (num < end) {
	    result.push(num);

	    num = sum(num, step);
	  }

	  return result;
	}
	/**
	 * 对数值进行线性插值
	 *
	 * @param  {Number} a  定义域的极点
	 * @param  {Number} b  定义域的极点
	 * @param  {Number} t  [0, 1]内的某个值
	 * @return {Number}    定义域内的某个值
	 */
	var interpolateNumber = (0, _utils.curry)(function (a, b, t) {
	  var newA = +a;
	  var newB = +b;

	  return newA + t * (newB - newA);
	});
	/**
	 * 线性插值的逆运算
	 *
	 * @param  {Number} a 定义域的极点
	 * @param  {Number} b 定义域的极点
	 * @param  {Number} x 可以认为是插值后的一个输出值
	 * @return {Number}   当x在 a ~ b这个范围内时，返回值属于[0, 1]
	 */
	var uninterpolateNumber = (0, _utils.curry)(function (a, b, x) {
	  var diff = b - +a;

	  diff = diff ? diff : Infinity;

	  return (x - a) / diff;
	});
	/**
	 * 线性插值的逆运算，并且有截断的操作
	 *
	 * @param  {Number} a 定义域的极点
	 * @param  {Number} b 定义域的极点
	 * @param  {Number} x 可以认为是插值后的一个输出值
	 * @return {Number}   当x在 a ~ b这个区间内时，返回值属于[0, 1]，
	 * 当x不在 a ~ b这个区间时，会截断到 a ~ b 这个区间
	 */
	var uninterpolateTruncation = (0, _utils.curry)(function (a, b, x) {
	  var diff = b - +a;

	  diff = diff ? diff : Infinity;

	  return Math.max(0, Math.min(1, (x - a) / diff));
	});

	exports.default = {
	  rangeStep: rangeStep,
	  isFloat: isFloat,
	  getDigitCount: getDigitCount,
	  getDecimalDigitCount: getDecimalDigitCount,

	  sum: sum,
	  minus: minus,
	  multiply: multiply,
	  divide: divide,

	  interpolateNumber: interpolateNumber,
	  uninterpolateNumber: uninterpolateNumber,
	  uninterpolateTruncation: uninterpolateTruncation
	};

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.detectReferenceElementsDomain = undefined;

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _ReactUtils = __webpack_require__(124);

	var _ReferenceDot = __webpack_require__(233);

	var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);

	var _ReferenceLine = __webpack_require__(232);

	var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var detectReferenceElementsDomain = exports.detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType) {
	  var lines = (0, _ReactUtils.findAllByType)(children, _ReferenceLine2.default);
	  var dots = (0, _ReactUtils.findAllByType)(children, _ReferenceDot2.default);
	  var elements = lines.concat(dots);
	  var idKey = axisType + 'Id';
	  var valueKey = axisType[0];

	  return elements.reduce(function (result, el) {
	    if (el.props[idKey] === axisId && el.props.alwaysShow && (0, _isNumber2.default)(el.props[valueKey])) {
	      var value = el.props[valueKey];

	      return [Math.min(result[0], value), Math.max(result[1], value)];
	    }
	    return result;
	  }, domain);
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Bar Chart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Rectangle = __webpack_require__(129);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	var _DataUtils = __webpack_require__(120);

	var _ReactUtils = __webpack_require__(124);

	var _CartesianChart2 = __webpack_require__(245);

	var _CartesianChart3 = _interopRequireDefault(_CartesianChart2);

	var _Bar = __webpack_require__(239);

	var _Bar2 = _interopRequireDefault(_Bar);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_CartesianChart) {
	  _inherits(BarChart, _CartesianChart);

	  function BarChart() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, BarChart);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BarChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleBarMouseLeave = function () {
	      _this.setState({
	        activeBarKey: null
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(BarChart, [{
	    key: 'getComposedData',


	    /**
	     * Compose the data of each group
	     * @param  {Array}  barPosition The offset and size of each bar
	     * @param  {Object} xAxis       The configuration of x-axis
	     * @param  {Object} yAxis       The configuration of y-axis
	     * @param  {Object} offset      The offset of main part in the svg element
	     * @param  {String} dataKey     The unique key of a group
	     * @param  {Array} stackedData  The stacked data of a bar item
	     * @return {Array} Composed data
	     */
	    value: function getComposedData(barPosition, xAxis, yAxis, offset, dataKey, stackedData) {
	      var layout = this.props.layout;
	      var _state = this.state;
	      var dataStartIndex = _state.dataStartIndex;
	      var dataEndIndex = _state.dataEndIndex;

	      var data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
	      var pos = barPosition[dataKey];
	      var xTicks = this.getAxisTicks(xAxis);
	      var yTicks = this.getAxisTicks(yAxis);
	      var baseValue = this.getBaseValue(xAxis, yAxis);
	      var hasStack = stackedData && stackedData.length;

	      return data.map(function (entry, index) {
	        var value = stackedData ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];
	        var x = undefined;
	        var y = undefined;
	        var width = undefined;
	        var height = undefined;

	        if (layout === 'horizontal') {
	          x = xTicks[index].coord + pos.offset;
	          y = yAxis.scale(xAxis.orientation === 'top' ? value[0] : value[1]);
	          width = pos.size;
	          height = xAxis.orientation === 'top' ? yAxis.scale(value[1]) - yAxis.scale(value[0]) : yAxis.scale(value[0]) - yAxis.scale(value[1]);
	        } else {
	          x = xAxis.scale(yAxis.orientation === 'left' ? value[0] : value[1]);
	          y = yTicks[index].coord + pos.offset;
	          width = yAxis.orientation === 'left' ? xAxis.scale(value[1]) - xAxis.scale(value[0]) : xAxis.scale(value[0]) - xAxis.scale(value[1]);
	          height = pos.size;
	        }

	        return _extends({}, entry, { x: x, y: y, width: width, height: height, value: value[1] });
	      });
	    }
	  }, {
	    key: 'getBaseValue',
	    value: function getBaseValue(xAxis, yAxis) {
	      var layout = this.props.layout;

	      var numberAxis = layout === 'horizontal' ? yAxis : xAxis;
	      var domain = numberAxis.scale.domain();

	      if (numberAxis.type === 'number') {
	        return Math.max(Math.min(domain[0], domain[1]), 0);
	      }

	      return domain[0];
	    }

	    /**
	     * Calculate the size of each bar and the gap between two bars
	     * @param  {Number}   bandSize  The size of each category
	     * @param  {sizeList} sizeList  The size of all groups
	     * @return {Number} The size of each bar and the gap between two bars
	     */

	  }, {
	    key: 'getBarPosition',
	    value: function getBarPosition(bandSize, sizeList) {
	      var _props = this.props;
	      var barGap = _props.barGap;
	      var barCategoryGap = _props.barCategoryGap;

	      var len = sizeList.length;
	      var result = undefined;

	      // whether or not is barSize setted by user
	      if (sizeList[0].barSize === +sizeList[0].barSize) {
	        (function () {
	          var sum = sizeList.reduce(function (res, entry) {
	            return res + entry.barSize;
	          }, 0);
	          sum += (len - 1) * barGap;
	          var offset = (bandSize - sum) / 2 >> 0;
	          var prev = { offset: offset - barGap, size: 0 };

	          result = sizeList.reduce(function (res, entry) {
	            res[entry.dataKey] = {
	              offset: prev.offset + prev.size + barGap,
	              size: entry.barSize
	            };
	            prev = res[entry.dataKey];

	            if (entry.stackList && entry.stackList.length) {
	              entry.stackList.forEach(function (key) {
	                res[key] = res[entry.dataKey];
	              });
	            }
	            return res;
	          }, {});
	        })();
	      } else {
	        (function () {
	          var offset = (0, _DataUtils.getPercentValue)(barCategoryGap, bandSize, 0, true);
	          var size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;

	          result = sizeList.reduce(function (res, entry, i) {
	            res[entry.dataKey] = {
	              offset: offset + (size + barGap) * i,
	              size: size
	            };

	            if (entry.stackList && entry.stackList.length) {
	              entry.stackList.forEach(function (key) {
	                res[key] = res[entry.dataKey];
	              });
	            }
	            return res;
	          }, {});
	        })();
	      }

	      return result;
	    }

	    /**
	     * Calculate the size of all groups
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {Object} The size of all groups
	     */

	  }, {
	    key: 'getSizeList',
	    value: function getSizeList(stackGroups) {
	      var _props2 = this.props;
	      var layout = _props2.layout;
	      var barSize = _props2.barSize;


	      return Object.keys(stackGroups).reduce(function (result, axisId) {
	        var sgs = stackGroups[axisId].stackGroups;

	        result[axisId] = Object.keys(sgs).map(function (stackId) {
	          var items = sgs[stackId].items;
	          var dataKey = items[0].props.dataKey;


	          return {
	            dataKey: dataKey,
	            stackList: items.slice(1).map(function (item) {
	              return item.props.dataKey;
	            }),
	            barSize: items[0].props.barSize || barSize
	          };
	        });

	        return result;
	      }, {});
	    }

	    /**
	     * Calculate the size between two category
	     * @param  {Function} scale Scale function
	     * @return {Number} Size
	     */

	  }, {
	    key: 'getBandSize',
	    value: function getBandSize(scale) {
	      if (scale && scale.bandwidth) {
	        return scale.bandwidth();
	      }
	      return 0;
	    }

	    /**
	     * Handler of mouse entering bar chart
	     * @param {String} key  The unique key of a group of data
	     * @return {Object}     null
	     */

	  }, {
	    key: 'handleBarMouseEnter',
	    value: function handleBarMouseEnter(key) {
	      this.setState({
	        activeBarKey: key
	      });
	    }

	    /**
	     * Handler of mouse leaving area chart
	     * @return {Object} null
	     */

	  }, {
	    key: 'renderCursor',
	    value: function renderCursor(xAxisMap, yAxisMap, offset) {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
	        return null;
	      }

	      var layout = this.props.layout;
	      var activeTooltipIndex = this.state.activeTooltipIndex;

	      var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
	      var ids = Object.keys(axisMap);
	      var axis = axisMap[ids[0]];
	      var bandSize = axis.scale.bandwidth();

	      var ticks = this.getAxisTicks(axis);
	      var start = ticks[activeTooltipIndex].coord;
	      var cursorProps = _extends({
	        fill: '#f1f1f1'
	      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
	        x: layout === 'horizontal' ? start : offset.left + 0.5,
	        y: layout === 'horizontal' ? offset.top + 0.5 : start,
	        width: layout === 'horizontal' ? bandSize : offset.width - 1,
	        height: layout === 'horizontal' ? offset.height - 1 : bandSize
	      });

	      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Rectangle2.default, cursorProps);
	    }

	    /**
	     * Draw the main part of bar chart
	     * @param  {Array} items     All the instance of Bar
	     * @param  {Object} xAxisMap The configuration of all x-axis
	     * @param  {Object} yAxisMap The configuration of all y-axis
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {ReactComponent}  All the instances of Bar
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
	      var _this2 = this;

	      if (!items || !items.length) {
	        return null;
	      }

	      var layout = this.props.layout;

	      var sizeList = this.getSizeList(stackGroups);

	      var barPositionMap = {};

	      return items.map(function (child, i) {
	        var _child$props = child.props;
	        var xAxisId = _child$props.xAxisId;
	        var yAxisId = _child$props.yAxisId;
	        var dataKey = _child$props.dataKey;

	        var axisId = layout === 'horizontal' ? xAxisId : yAxisId;
	        var bandSize = _this2.getBandSize(layout === 'horizontal' ? xAxisMap[xAxisId].scale : yAxisMap[yAxisId].scale);
	        var barPosition = barPositionMap[axisId] || _this2.getBarPosition(bandSize, sizeList[axisId]);
	        var stackedData = stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && _this2.getStackedDataOfItem(child, stackGroups[axisId].stackGroups);

	        return _react2.default.cloneElement(child, {
	          key: 'bar-' + i,
	          layout: layout,
	          onMouseLeave: _this2.handleBarMouseLeave,
	          onMouseEnter: _this2.handleBarMouseEnter.bind(_this2, dataKey),
	          data: _this2.getComposedData(barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, dataKey, stackedData)
	        });
	      }, this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props3 = this.props;
	      var style = _props3.style;
	      var children = _props3.children;
	      var className = _props3.className;
	      var layout = _props3.layout;
	      var width = _props3.width;
	      var height = _props3.height;

	      var numberAxisName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
	      var items = (0, _ReactUtils.findAllByType)(children, _Bar2.default);
	      var stackGroups = this.getStackGroupsByAxisId(items, numberAxisName + 'Id');

	      var xAxisMap = this.getAxisMap('xAxis', items, numberAxisName === 'xAxis' && stackGroups);
	      var yAxisMap = this.getAxisMap('yAxis', items, numberAxisName === 'yAxis' && stackGroups);
	      var offset = this.getOffset(items, xAxisMap, yAxisMap);

	      xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
	      yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style),
	          onMouseEnter: this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseMove: this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseLeave: this.handleMouseLeave
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderGrid(xAxisMap, yAxisMap, offset),
	          this.renderReferenceLines(xAxisMap, yAxisMap, offset),
	          this.renderReferenceDots(xAxisMap, yAxisMap, offset),
	          this.renderXAxis(xAxisMap),
	          this.renderYAxis(yAxisMap),
	          this.renderCursor(xAxisMap, yAxisMap, offset),
	          this.renderItems(items, xAxisMap, yAxisMap, offset, stackGroups),
	          this.renderBrush(xAxisMap, yAxisMap, offset)
	        ),
	        this.renderLegend(items),
	        this.renderTooltip(items, offset)
	      );
	    }
	  }]);

	  return BarChart;
	}(_CartesianChart3.default), _class2.displayName = 'BarChart', _class2.defaultProps = {
	  style: {},
	  barCategoryGap: '10%',
	  barGap: 4,
	  layout: 'horizontal',
	  margin: { top: 5, right: 5, bottom: 5, left: 5 }
	}, _temp2)) || _class;

	exports.default = BarChart;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Pie Chart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Legend = __webpack_require__(112);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Pie = __webpack_require__(166);

	var _Pie2 = _interopRequireDefault(_Pie);

	var _DataUtils = __webpack_require__(120);

	var _ReactUtils = __webpack_require__(124);

	var _PolarUtils = __webpack_require__(125);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PieChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(PieChart, _Component);

	  function PieChart() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PieChart);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PieChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      activeTooltipLabel: '',
	      activeTooltipCoord: { x: 0, y: 0 },
	      activeTooltipPayload: [],
	      isTooltipActive: false
	    }, _this.handleMouseEnter = function (el, index, e) {
	      var onMouseEnter = _this.props.onMouseEnter;
	      var cx = el.cx;
	      var cy = el.cy;
	      var outerRadius = el.outerRadius;
	      var midAngle = el.midAngle;


	      _this.setState({
	        isTooltipActive: true,
	        activeTooltipCoord: (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, midAngle),
	        activeTooltipPayload: [el.payload]
	      }, function () {
	        if (onMouseEnter) {
	          onMouseEnter(el, index, e);
	        }
	      });
	    }, _this.handleMouseLeave = function (e) {
	      _this.setState({
	        isTooltipActive: false
	      }, function () {
	        if (_this.props.onMouseEnter) {
	          _this.props.onMouseLeave(e);
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PieChart, [{
	    key: 'getComposedData',
	    value: function getComposedData(item) {
	      var _item$props = item.props;
	      var fill = _item$props.fill;
	      var stroke = _item$props.stroke;
	      var strokeWidth = _item$props.strokeWidth;
	      var strokeDasharray = _item$props.strokeDasharray;
	      var data = _item$props.data;


	      return data.map(function (entry) {
	        return _extends({
	          fill: fill, stroke: stroke, strokeWidth: strokeWidth, strokeDasharray: strokeDasharray
	        }, entry);
	      });
	    }
	  }, {
	    key: 'renderLegend',


	    /**
	     * Draw legend
	     * @param  {Array} items             The instances of Pie
	     * @return {ReactElement}            The instance of Legend
	     */
	    value: function renderLegend(items) {
	      var _this2 = this;

	      var children = this.props.children;

	      var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
	      if (!legendItem) {
	        return null;
	      }

	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margin = _props.margin;

	      var legendData = items.reduce(function (result, child) {
	        var nameKey = child.props.nameKey;

	        var data = _this2.getComposedData(child);

	        return result.concat(data.map(function (entry) {
	          var name = entry.name;
	          var value = entry.value;

	          var rest = _objectWithoutProperties(entry, ['name', 'value']);

	          return _extends({ value: entry[nameKey], color: entry.fill }, rest);
	        }));
	      }, []);

	      return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width, height), {
	        payload: legendData,
	        chartWidth: width,
	        chartHeight: height,
	        margin: margin
	      }));
	    }
	  }, {
	    key: 'renderTooltip',
	    value: function renderTooltip() {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem) {
	        return null;
	      }

	      var _props2 = this.props;
	      var width = _props2.width;
	      var height = _props2.height;
	      var _state = this.state;
	      var isTooltipActive = _state.isTooltipActive;
	      var activeTooltipLabel = _state.activeTooltipLabel;
	      var activeTooltipCoord = _state.activeTooltipCoord;
	      var activeTooltipPayload = _state.activeTooltipPayload;

	      var viewBox = { x: 0, y: 0, width: width, height: height };

	      return _react2.default.cloneElement(tooltipItem, {
	        viewBox: viewBox,
	        active: isTooltipActive,
	        label: activeTooltipLabel,
	        payload: activeTooltipPayload,
	        coordinate: activeTooltipCoord
	      });
	    }

	    /**
	     * Draw the main part of bar chart
	     * @param  {Array} items    All the instance of Pie
	     * @return {ReactComponent} All the instance of Pie
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems(items) {
	      var _this3 = this;

	      var _props3 = this.props;
	      var width = _props3.width;
	      var height = _props3.height;
	      var margin = _props3.margin;


	      return items.map(function (child, i) {
	        var _child$props = child.props;
	        var innerRadius = _child$props.innerRadius;
	        var outerRadius = _child$props.outerRadius;
	        var data = _child$props.data;

	        var cx = (0, _DataUtils.getPercentValue)(child.props.cx, width, width / 2);
	        var cy = (0, _DataUtils.getPercentValue)(child.props.cy, height, height / 2);
	        var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);

	        return _react2.default.cloneElement(child, {
	          key: 'recharts-pie-' + i,
	          cx: cx,
	          cy: cy,
	          innerRadius: (0, _DataUtils.getPercentValue)(innerRadius, maxRadius, 0),
	          outerRadius: (0, _DataUtils.getPercentValue)(outerRadius, maxRadius, maxRadius * 0.8),
	          data: _this3.getComposedData(child),
	          onMouseEnter: _this3.handleMouseEnter,
	          onMouseLeave: _this3.handleMouseLeave
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props4 = this.props;
	      var style = _props4.style;
	      var children = _props4.children;
	      var className = _props4.className;
	      var width = _props4.width;
	      var height = _props4.height;

	      var items = (0, _ReactUtils.findAllByType)(children, _Pie2.default);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style)
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderItems(items)
	        ),
	        this.renderLegend(items),
	        this.renderTooltip(items)
	      );
	    }
	  }]);

	  return PieChart;
	}(_react.Component), _class2.displayName = 'PieChart', _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),
	  title: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  className: _react.PropTypes.string,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	}, _class2.defaultProps = {
	  style: {},
	  margin: { top: 0, right: 0, bottom: 0, left: 0 }
	}, _temp2)) || _class;

	exports.default = PieChart;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview TreemapChart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Rectangle = __webpack_require__(129);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	var _ReactUtils = __webpack_require__(124);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Treemap = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(Treemap, _Component);

	  function Treemap() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Treemap);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Treemap)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.squarify = function (node) {
	      var children = node.children;

	      if (children && children.length) {
	        var rect = _this.pad(node);
	        var row = [];
	        var remaining = children.slice(); // copy-on-write
	        var child = undefined;
	        var best = Infinity; // the best row score so far
	        var score = undefined; // the current row score
	        var u = Math.min(rect.width, rect.height); // initial orientation

	        _this.scale(remaining, rect.width * rect.height / node.value);
	        row.area = 0;
	        while (remaining.length > 0) {
	          row.push(child = remaining[0]);
	          row.area += child.area;

	          score = _this.worst(row, u);
	          if (score <= best) {
	            // continue with this orientation
	            remaining.shift();
	            best = score;
	          } else {
	            // abort, and try a different orientation
	            row.area -= row.pop().area;
	            _this.position(row, u, rect, false);
	            u = Math.min(rect.width, rect.height);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          _this.position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(_this.squarify);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Treemap, [{
	    key: 'pad',
	    value: function pad(node) {
	      return { x: node.x, y: node.y, width: node.width, height: node.height };
	    }

	    // Compute the area for each child based on value & scale.

	  }, {
	    key: 'scale',
	    value: function scale(children, k) {
	      var n = children.length;
	      var i = -1;
	      var child = undefined;
	      var area = undefined;

	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }

	    // Recursively arranges the specified node's children into squarified rows.

	  }, {
	    key: 'worst',


	    // Computes the score for the specified row, as the worst aspect ratio.
	    value: function worst(row, u) {
	      var newU = u;
	      var s = row.area;
	      var r = undefined;
	      var rmax = 0;
	      var rmin = Infinity;
	      var i = -1;
	      var n = row.length;
	      var ratio = this.props.ratio;


	      while (++i < n) {
	        r = row[i].area;

	        if (!r) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      newU *= newU;

	      return s ? Math.max(newU * rmax * ratio / s, s / (newU * rmin * ratio)) : Infinity;
	    }

	    // Positions the specified row of nodes. Modifies `rect`.

	  }, {
	    key: 'position',
	    value: function position(row, u, rect, flush) {
	      var i = -1;
	      var n = row.length;
	      var x = rect.x;
	      var y = rect.y;
	      var v = u ? Math.round(row.area / u) : 0;
	      var o = undefined;

	      if (u === rect.width) {
	        // horizontal subdivision
	        if (flush || v > rect.height) v = rect.height; // over+underflow
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.height = v;
	          x += o.width = Math.min(rect.x + rect.width - x, v ? Math.round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.width += rect.x + rect.width - x; // rounding error
	        rect.y += v;
	        rect.height -= v;
	      } else {
	        // vertical subdivision
	        if (flush || v > rect.width) v = rect.width; // over+underflow
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.width = v;
	          y += o.height = Math.min(rect.y + rect.height - y, v ? Math.round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.height += rect.y + rect.height - y; // rounding error
	        rect.x += v;
	        rect.width -= v;
	      }
	    }
	  }, {
	    key: 'computeNode',
	    value: function computeNode(depth, node, index) {
	      var dataKey = this.props.dataKey;
	      var children = node.children;
	      var x = node.x;
	      var y = node.y;
	      var width = node.width;
	      var height = node.height;

	      var payload = _objectWithoutProperties(node, ['children', 'x', 'y', 'width', 'height']);

	      var childDepth = depth + 1;
	      var computedChildren = children && children.length ? children.map(this.computeNode.bind(this, childDepth)) : null;
	      var value = undefined;

	      if (children && children.length) {
	        value = computedChildren.reduce(function (a, b) {
	          return a + b.value;
	        }, 0);
	      } else {
	        value = isNaN(node[dataKey]) || node[dataKey] <= 0 ? 0 : node[dataKey];
	      }

	      return {
	        children: computedChildren,
	        value: value,
	        depth: depth,
	        index: index,
	        x: x,
	        y: y,
	        width: width,
	        height: height,
	        payload: payload
	      };
	    }
	  }, {
	    key: 'renderDefaultNode',
	    value: function renderDefaultNode(nodeProps) {
	      return _react2.default.createElement(_Rectangle2.default, nodeProps);
	    }
	  }, {
	    key: 'renderNode',
	    value: function renderNode(root, node, i) {
	      var content = this.props.content;

	      var nodeProps = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), node, { root: root });

	      return _react2.default.createElement(
	        _Layer2.default,
	        { key: 'recharts-treemap-node-' + i },
	        _react2.default.isValidElement(content) ? _react2.default.cloneElement(content, nodeProps) : this.renderDefaultNode(nodeProps),
	        node.children && node.children.length ? node.children.map(this.renderNode.bind(this, root)) : null
	      );
	    }
	  }, {
	    key: 'renderAllNodes',
	    value: function renderAllNodes() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var data = _props.data;


	      var root = this.computeNode(0, {
	        children: data,
	        x: 0,
	        y: 0,
	        width: width,
	        height: height
	      }, 0);

	      this.squarify(root);

	      return this.renderNode(root, root, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props2 = this.props;
	      var width = _props2.width;
	      var height = _props2.height;
	      var className = _props2.className;
	      var style = _props2.style;


	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style)
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderAllNodes()
	        )
	      );
	    }
	  }]);

	  return Treemap;
	}(_react.Component), _class2.displayName = 'Treemap', _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  data: _react.PropTypes.array,
	  style: _react.PropTypes.object,
	  ratio: _react.PropTypes.number,
	  content: _react.PropTypes.element,
	  fill: _react.PropTypes.string,
	  stroke: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  dataKey: _react.PropTypes.string
	}, _class2.defaultProps = {
	  fill: '#fff',
	  stroke: '#000',
	  dataKey: 'value',
	  ratio: 0.5 * (1 + Math.sqrt(5))
	}, _temp2)) || _class;

	exports.default = Treemap;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _range = __webpack_require__(220);

	var _range2 = _interopRequireDefault(_range);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp; /**
	                             * @fileOverview Radar Chart
	                             */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _d3Scale = __webpack_require__(224);

	var _rechartsScale = __webpack_require__(246);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Legend = __webpack_require__(112);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _Radar = __webpack_require__(216);

	var _Radar2 = _interopRequireDefault(_Radar);

	var _PolarGrid = __webpack_require__(134);

	var _PolarGrid2 = _interopRequireDefault(_PolarGrid);

	var _PolarAngleAxis = __webpack_require__(165);

	var _PolarAngleAxis2 = _interopRequireDefault(_PolarAngleAxis);

	var _PolarRadiusAxis = __webpack_require__(135);

	var _PolarRadiusAxis2 = _interopRequireDefault(_PolarRadiusAxis);

	var _ReactUtils = __webpack_require__(124);

	var _PolarUtils = __webpack_require__(125);

	var _DataUtils = __webpack_require__(120);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RadarChart = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
	  _inherits(RadarChart, _Component);

	  function RadarChart() {
	    _classCallCheck(this, RadarChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadarChart).apply(this, arguments));
	  }

	  _createClass(RadarChart, [{
	    key: 'getRadiusAxisCfg',
	    value: function getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius) {
	      var children = this.props.children;

	      var domain = undefined;
	      var tickCount = undefined;
	      var ticks = undefined;

	      if (radiusAxis && radiusAxis.props.ticks) {
	        ticks = radiusAxis.props.ticks;

	        tickCount = ticks.length;
	        domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
	      } else {
	        tickCount = Math.max(radiusAxis && radiusAxis.props.tickCount || _PolarRadiusAxis2.default.defaultProps.tickCount, 2);
	        ticks = this.getTicksByItems(radiusAxis, tickCount);

	        domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
	      }

	      return {
	        tickCount: tickCount,
	        ticks: ticks,
	        scale: (0, _d3Scale.scaleLinear)().domain(domain).range([innerRadius, outerRadius])
	      };
	    }
	  }, {
	    key: 'getTicksByItems',
	    value: function getTicksByItems(axisItem, tickCount) {
	      var _props = this.props;
	      var data = _props.data;
	      var children = _props.children;

	      var _ref = axisItem ? axisItem.props : _PolarRadiusAxis2.default.defaultProps;

	      var domain = _ref.domain;

	      var radarItems = (0, _ReactUtils.findAllByType)(children, _Radar2.default);
	      var dataKeys = radarItems.map(function (item) {
	        return item.props.dataKey;
	      });
	      var extent = data.reduce(function (prev, current) {
	        var values = dataKeys.map(function (v) {
	          return current[v] || 0;
	        });
	        var currentMax = Math.max.apply(null, values);
	        var currentMin = Math.min.apply(null, values);

	        return [Math.min(prev[0], currentMin), Math.max(prev[1], currentMax)];
	      }, [Infinity, -Infinity]);
	      var finalDomain = (0, _DataUtils.parseSpecifiedDomain)(domain, extent);

	      if (domain && (domain[0] === 'auto' || domain[1] === 'auto')) {
	        return (0, _rechartsScale.getNiceTickValues)(finalDomain, tickCount);
	      }

	      return finalDomain;
	    }
	  }, {
	    key: 'getGridRadius',
	    value: function getGridRadius(gridCount, innerRadius, outerRadius) {
	      var domain = (0, _range2.default)(0, gridCount);
	      var scale = (0, _d3Scale.scalePoint)().domain(domain).range([innerRadius, outerRadius]);

	      return domain.map(function (v) {
	        return scale(v);
	      });
	    }
	  }, {
	    key: 'getAngle',
	    value: function getAngle(index, dataLength, startAngle, clockWise) {
	      var sign = clockWise ? -1 : 1;
	      var angleInterval = 360 / dataLength;

	      return startAngle + index * sign * angleInterval;
	    }
	  }, {
	    key: 'getAngleTicks',
	    value: function getAngleTicks(dataLength, startAngle, clockWise) {
	      var angles = [];

	      for (var i = 0; i < dataLength; i++) {
	        angles.push(this.getAngle(i, dataLength, startAngle, clockWise));
	      }

	      return angles;
	    }
	  }, {
	    key: 'getRadiusTicks',
	    value: function getRadiusTicks(axisCfg) {
	      var ticks = axisCfg.ticks;
	      var scale = axisCfg.scale;


	      if (ticks && ticks.length) {
	        return ticks.map(function (entry) {
	          return {
	            radius: scale(entry),
	            value: entry
	          };
	        });
	      }
	      var tickCount = axisCfg.tickCount;

	      var domain = scale.domain();

	      return (0, _range2.default)(0, tickCount).map(function (v, i) {
	        var value = domain[0] + i * (domain[1] - domain[0]) / (tickCount - 1);
	        return {
	          value: value,
	          radius: scale(value)
	        };
	      });
	    }
	  }, {
	    key: 'getComposedData',
	    value: function getComposedData(item, scale, cx, cy, innerRadius, outerRadius) {
	      var _this2 = this;

	      var dataKey = item.props.dataKey;
	      var _props2 = this.props;
	      var data = _props2.data;
	      var startAngle = _props2.startAngle;
	      var clockWise = _props2.clockWise;

	      var len = data.length;

	      return data.map(function (entry, i) {
	        var value = entry[dataKey] || 0;
	        var angle = _this2.getAngle(i, len, startAngle, clockWise);
	        var radius = scale(value);

	        return _extends({}, (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle), {
	          value: value,
	          cx: cx, cy: cy, radius: radius, angle: angle,
	          payload: entry
	        });
	      });
	    }
	  }, {
	    key: 'renderRadars',
	    value: function renderRadars(items, scale, cx, cy, innerRadius, outerRadius) {
	      var _this3 = this;

	      if (!items || !items.length) {
	        return null;
	      }

	      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
	      return items.map(function (el, index) {
	        return _react2.default.cloneElement(el, _extends({}, baseProps, (0, _ReactUtils.getPresentationAttributes)(el), {
	          points: _this3.getComposedData(el, scale, cx, cy, innerRadius, outerRadius),
	          key: 'radar-' + index
	        }));
	      });
	    }
	  }, {
	    key: 'renderGrid',
	    value: function renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius) {
	      var children = this.props.children;

	      var grid = (0, _ReactUtils.findChildByType)(children, _PolarGrid2.default);

	      if (!grid) {
	        return null;
	      }

	      var _props3 = this.props;
	      var startAngle = _props3.startAngle;
	      var clockWise = _props3.clockWise;
	      var data = _props3.data;

	      var len = data.length;
	      var gridCount = radiusAxisCfg.tickCount;

	      return _react2.default.cloneElement(grid, {
	        polarAngles: this.getAngleTicks(len, startAngle, clockWise),
	        polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
	        cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius,
	        key: 'layer-grid'
	      });
	    }
	  }, {
	    key: 'renderAngleAxis',
	    value: function renderAngleAxis(cx, cy, outerRadius, maxRadius) {
	      var _this4 = this;

	      var children = this.props.children;

	      var angleAxis = (0, _ReactUtils.findChildByType)(children, _PolarAngleAxis2.default);

	      if (!angleAxis || angleAxis.props.hide) {
	        return null;
	      }

	      var _props4 = this.props;
	      var data = _props4.data;
	      var width = _props4.width;
	      var height = _props4.height;
	      var startAngle = _props4.startAngle;
	      var clockWise = _props4.clockWise;

	      var len = data.length;
	      var grid = (0, _ReactUtils.findChildByType)(children, _PolarGrid2.default);
	      var radius = (0, _DataUtils.getPercentValue)(angleAxis.props.radius, maxRadius, outerRadius);
	      var dataKey = angleAxis.props.dataKey;


	      return _react2.default.cloneElement(angleAxis, {
	        ticks: data.map(function (v, i) {
	          return {
	            value: dataKey ? v[dataKey] : i,
	            angle: _this4.getAngle(i, len, startAngle, clockWise)
	          };
	        }),
	        cx: cx, cy: cy, radius: radius,
	        axisLineType: grid && grid.props && grid.props.gridType || _PolarGrid2.default.defaultProps.gridType,
	        key: 'layer-angle-axis'
	      });
	    }
	  }, {
	    key: 'renderRadiusAxis',
	    value: function renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy) {
	      if (!radiusAxis || radiusAxis.props.hide) {
	        return null;
	      }

	      var startAngle = this.props.startAngle;

	      return _react2.default.cloneElement(radiusAxis, {
	        angle: radiusAxis.props.angle || startAngle,
	        ticks: this.getRadiusTicks(radiusAxisCfg),
	        cx: cx, cy: cy
	      });
	    }

	    /**
	     * Draw legend
	     * @param  {Array} items             The instances of item
	     * @return {ReactElement}            The instance of Legend
	     */

	  }, {
	    key: 'renderLegend',
	    value: function renderLegend(items) {
	      var children = this.props.children;

	      var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
	      if (!legendItem) {
	        return null;
	      }

	      var _props5 = this.props;
	      var width = _props5.width;
	      var height = _props5.height;
	      var margin = _props5.margin;

	      var legendData = items.map(function (child) {
	        var _child$props = child.props;
	        var dataKey = _child$props.dataKey;
	        var name = _child$props.name;
	        var legendType = _child$props.legendType;


	        return {
	          type: legendType || 'square',
	          color: child.props.stroke || child.props.fill,
	          value: name || dataKey
	        };
	      }, this);

	      return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width, height), {
	        payload: legendData,
	        chartWidth: width,
	        chartHeight: height,
	        margin: margin
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }
	      var _props6 = this.props;
	      var className = _props6.className;
	      var data = _props6.data;
	      var width = _props6.width;
	      var height = _props6.height;
	      var margin = _props6.margin;
	      var children = _props6.children;
	      var style = _props6.style;

	      var cx = (0, _DataUtils.getPercentValue)(this.props.cx, width, width / 2);
	      var cy = (0, _DataUtils.getPercentValue)(this.props.cy, height, height / 2);
	      var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);
	      var innerRadius = (0, _DataUtils.getPercentValue)(this.props.innerRadius, maxRadius, 0);
	      var outerRadius = (0, _DataUtils.getPercentValue)(this.props.outerRadius, maxRadius, maxRadius * 0.8);

	      if (outerRadius <= 0 || !data || !data.length) {
	        return null;
	      }

	      var items = (0, _ReactUtils.findAllByType)(children, _Radar2.default);
	      var radiusAxis = (0, _ReactUtils.findChildByType)(children, _PolarRadiusAxis2.default);
	      var radiusAxisCfg = this.getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style)
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius),
	          this.renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy),
	          this.renderAngleAxis(cx, cy, outerRadius, maxRadius),
	          this.renderRadars(items, radiusAxisCfg.scale, cx, cy, innerRadius, outerRadius)
	        ),
	        this.renderLegend(items)
	      );
	    }
	  }]);

	  return RadarChart;
	}(_react.Component), _class2.displayName = 'RadarChart', _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),

	  cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  startAngle: _react.PropTypes.number,
	  innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  clockWise: _react.PropTypes.bool,

	  data: _react.PropTypes.array,
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  className: _react.PropTypes.string
	}, _class2.defaultProps = {
	  width: 0,
	  height: 0,
	  cx: '50%',
	  cy: '50%',
	  innerRadius: 0,
	  outerRadius: '80%',

	  startAngle: 90,
	  clockWise: true,
	  data: [],
	  margin: { top: 0, right: 0, bottom: 0, left: 0 }
	}, _temp)) || _class;

	exports.default = RadarChart;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNumber = __webpack_require__(113);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Scatter Chart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(122);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _d3Scale = __webpack_require__(224);

	var _rechartsScale = __webpack_require__(246);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Layer = __webpack_require__(164);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Legend = __webpack_require__(112);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Cross = __webpack_require__(133);

	var _Cross2 = _interopRequireDefault(_Cross);

	var _CartesianAxis = __webpack_require__(234);

	var _CartesianAxis2 = _interopRequireDefault(_CartesianAxis);

	var _CartesianGrid = __webpack_require__(235);

	var _CartesianGrid2 = _interopRequireDefault(_CartesianGrid);

	var _Scatter = __webpack_require__(240);

	var _Scatter2 = _interopRequireDefault(_Scatter);

	var _XAxis = __webpack_require__(241);

	var _XAxis2 = _interopRequireDefault(_XAxis);

	var _YAxis = __webpack_require__(242);

	var _YAxis2 = _interopRequireDefault(_YAxis);

	var _ZAxis = __webpack_require__(243);

	var _ZAxis2 = _interopRequireDefault(_ZAxis);

	var _ReferenceLine = __webpack_require__(232);

	var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);

	var _ReferenceDot = __webpack_require__(233);

	var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);

	var _ReactUtils = __webpack_require__(124);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	var _DataUtils = __webpack_require__(120);

	var _CartesianUtils = __webpack_require__(251);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ScatterChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(ScatterChart, _Component);

	  function ScatterChart() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ScatterChart);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ScatterChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      activeTooltipCoord: { x: 0, y: 0 },
	      isTooltipActive: false,
	      activeItem: null
	    }, _this.handleScatterMouseEnter = function (el, e) {
	      _this.setState({
	        isTooltipActive: true,
	        activeItem: el,
	        activeTooltipCoord: { x: el.cx, y: el.cy }
	      });
	    }, _this.handleScatterMouseLeave = function () {
	      _this.setState({
	        isTooltipActive: false
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ScatterChart, [{
	    key: 'getComposedData',


	    /**
	     * Compose the data of each group
	     * @param  {Array}  data        The original data
	     * @param  {Object} xAxis       The configuration of x-axis
	     * @param  {Object} yAxis       The configuration of y-axis
	     * @param  {Object} zAxis       The configuration of z-axis
	     * @return {Array} Composed data
	     */
	    value: function getComposedData(data, xAxis, yAxis, zAxis) {
	      var xAxisDataKey = xAxis.dataKey;
	      var yAxisDataKey = yAxis.dataKey;
	      var zAxisDataKey = zAxis.dataKey;

	      return data.map(function (entry) {
	        return {
	          cx: xAxis.scale(entry[xAxisDataKey]),
	          cy: yAxis.scale(entry[yAxisDataKey]),
	          r: zAxisDataKey !== undefined ? zAxis.scale(entry[zAxisDataKey]) : zAxis.range[0],
	          payload: {
	            x: entry[xAxisDataKey],
	            y: entry[yAxisDataKey],
	            z: zAxisDataKey !== undefined && entry[zAxisDataKey] || '-'
	          }
	        };
	      });
	    }

	    /**
	     * Get the ticks of an axis
	     * @param  {Object}  axis The configuration of an axis
	     * @param {Boolean} isGrid Whether or not are the ticks in grid
	     * @return {Array}  Ticks
	     */

	  }, {
	    key: 'getAxisTicks',
	    value: function getAxisTicks(axis) {
	      var isGrid = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      var scale = axis.scale;

	      if (axis.ticks) {
	        return axis.ticks.map(function (entry) {
	          return {
	            coord: scale(entry),
	            value: entry
	          };
	        });
	      }

	      if (scale.ticks) {
	        return scale.ticks(axis.tickCount).map(function (entry) {
	          return {
	            coord: scale(entry),
	            value: entry
	          };
	        });
	      }

	      return scale.domain().map(function (entry) {
	        return {
	          coord: scale(entry),
	          value: entry
	        };
	      });
	    }

	    /**
	     * Calculate the ticks of grid
	     * @param  {Array} ticks The ticks in axis
	     * @param {Number} min   The minimun value of axis
	     * @param {Number} max   The maximun value of axis
	     * @return {Array}       Ticks
	     */

	  }, {
	    key: 'getGridTicks',
	    value: function getGridTicks(ticks, min, max) {
	      var hasMin = undefined;
	      var hasMax = undefined;
	      var values = undefined;

	      values = ticks.map(function (entry) {
	        if (entry.coord === min) {
	          hasMin = true;
	        }
	        if (entry.coord === max) {
	          hasMax = true;
	        }

	        return entry.coord;
	      });

	      if (!hasMin) {
	        values.push(min);
	      }
	      if (!hasMax) {
	        values.push(max);
	      }

	      return values;
	    }

	    /**
	     * get domain of ticks
	     * @param  {Array} ticks Ticks of axis
	     * @return {Array} domain
	     */

	  }, {
	    key: 'getDomainOfTicks',
	    value: function getDomainOfTicks(ticks) {
	      return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
	    }
	  }, {
	    key: 'getDomain',
	    value: function getDomain(items, dataKey, axisId, axisType) {
	      var domain = items.reduce(function (result, item) {
	        return result.concat(item.props.data.map(function (entry) {
	          return entry[dataKey];
	        }));
	      }, []);

	      if (axisType === 'xAxis' || axisType === 'yAxis') {
	        domain = (0, _CartesianUtils.detectReferenceElementsDomain)(this.props.children, domain, axisId, axisType);
	      }

	      return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
	    }

	    /**
	     * Get the configuration of x-axis or y-axis
	     * @param  {String} axisType The type of axis
	     * @param  {Array} items     The instances of item
	     * @return {Object}          Configuration
	     */

	  }, {
	    key: 'getAxis',
	    value: function getAxis() {
	      var axisType = arguments.length <= 0 || arguments[0] === undefined ? 'xAxis' : arguments[0];
	      var items = arguments[1];
	      var children = this.props.children;

	      var Axis = axisType === 'xAxis' ? _XAxis2.default : _YAxis2.default;
	      var axis = (0, _ReactUtils.findChildByType)(children, Axis);

	      (0, _invariant2.default)(axis, 'recharts: ScatterChart must has %s', Axis.displayName);

	      if (axis) {
	        var domain = (0, _DataUtils.parseSpecifiedDomain)(axis.props.domain, this.getDomain(items, axis.props.dataKey, axis.props[axisType + 'Id'], axisType));

	        return _extends({}, axis.props, {
	          axisType: axisType,
	          domain: domain,
	          originalDomain: axis.props.domain
	        });
	      }

	      return null;
	    }

	    /**
	     * Get the configuration of z-axis
	     * @param  {Array} items The instances of item
	     * @return {Object}      Configuration
	     */

	  }, {
	    key: 'getZAxis',
	    value: function getZAxis(items) {
	      var children = this.props.children;

	      var axisItem = (0, _ReactUtils.findChildByType)(children, _ZAxis2.default);
	      var axisProps = axisItem && axisItem.props || _ZAxis2.default.defaultProps;
	      var domain = axisProps.dataKey ? this.getDomain(items, axisProps.dataKey) : [-1, 1];

	      return _extends({}, axisProps, {
	        domain: domain,
	        scale: (0, _d3Scale.scaleLinear)().domain(domain).range(axisProps.range)
	      });
	    }
	  }, {
	    key: 'getOffset',
	    value: function getOffset(items, xAxis, yAxis) {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margin = _props.margin;

	      var offset = _extends({}, margin);
	      var legendProps = this.getLegendProps(items);

	      offset[xAxis.orientation] += xAxis.height;
	      offset[yAxis.orientation] += yAxis.width;

	      if (legendProps) {
	        var box = _Legend2.default.getLegendBBox(legendProps, width, height) || {};
	        if (legendProps.layout === 'horizontal' && (0, _isNumber2.default)(offset[legendProps.verticalAlign])) {
	          offset[legendProps.verticalAlign] += box.height || 0;
	        } else if (legendProps.layout === 'vertical' && (0, _isNumber2.default)(offset[legendProps.align])) {
	          offset[legendProps.align] += box.width || 0;
	        }
	      }

	      return _extends({}, offset, {
	        width: width - offset.left - offset.right,
	        height: height - offset.top - offset.bottom
	      });
	    }

	    /**
	     * Configure the scale function of axis
	     * @param {Object} scale The scale function
	     * @param {Object} opts  The configuration of axis
	     * @return {Object}      null
	     */

	  }, {
	    key: 'setTicksOfScale',
	    value: function setTicksOfScale(scale, opts) {
	      // Give priority to use the options of ticks
	      if (opts.ticks && opts.ticks) {
	        opts.domain = this.getDomainOfTicks(opts.ticks, opts.type);
	        scale.domain(opts.domain).ticks(opts.ticks.length);
	        return;
	      }

	      if (opts.tickCount && opts.originalDomain && (opts.originalDomain[0] === 'auto' || opts.originalDomain[1] === 'auto')) {
	        // Calculate the ticks by the number of grid when the axis is a number axis
	        var domain = scale.domain();
	        var tickValues = (0, _rechartsScale.getNiceTickValues)(domain, opts.tickCount);

	        opts.ticks = tickValues;
	        scale.domain(this.getDomainOfTicks(tickValues, opts.type));
	      }
	    }

	    /**
	     * Calculate the scale function, position, width, height of axes
	     * @param  {Object} axis     The configuration of axis
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} axisType The type of axis, x-axis or y-axis
	     * @return {Object} Configuration
	     */

	  }, {
	    key: 'getFormatAxis',
	    value: function getFormatAxis(axis, offset, axisType) {
	      var orientation = axis.orientation;
	      var domain = axis.domain;
	      var tickFormat = axis.tickFormat;

	      var range = axisType === 'xAxis' ? [offset.left, offset.left + offset.width] : [offset.top + offset.height, offset.top];
	      var scale = (0, _d3Scale.scaleLinear)().domain(domain).range(range);

	      this.setTicksOfScale(scale, axis);
	      if (tickFormat) {
	        scale.tickFormat(tickFormat);
	      }

	      var x = undefined;
	      var y = undefined;

	      if (axisType === 'xAxis') {
	        x = offset.left;
	        y = orientation === 'top' ? offset.top - axis.height : offset.top + offset.height;
	      } else {
	        x = orientation === 'left' ? offset.left - axis.width : offset.right;
	        y = offset.top;
	      }

	      return _extends({}, axis, {
	        scale: scale,
	        width: axisType === 'xAxis' ? offset.width : axis.width,
	        height: axisType === 'yAxis' ? offset.height : axis.height,
	        x: x, y: y
	      });
	    }

	    /**
	     * Get the content to be displayed in the tooltip
	     * @param  {Object} data  The data of active item
	     * @param  {Object} xAxis The configuration of x-axis
	     * @param  {Object} yAxis The configuration of y-axis
	     * @param  {Object} zAxis The configuration of z-axis
	     * @return {Array}        The content of tooltip
	     */

	  }, {
	    key: 'getTooltipContent',
	    value: function getTooltipContent(data, xAxis, yAxis, zAxis) {
	      if (!data) {
	        return null;
	      }

	      var content = [{
	        name: xAxis.name || xAxis.dataKey,
	        unit: xAxis.unit || '',
	        value: data.x
	      }, {
	        name: yAxis.name || yAxis.dataKey,
	        unit: yAxis.unit || '',
	        value: data.y
	      }];

	      if (data.z && data.z !== '-') {
	        content.push({
	          name: zAxis.name || zAxis.dataKey,
	          unit: zAxis.unit || '',
	          value: data.z
	        });
	      }

	      return content;
	    }
	  }, {
	    key: 'getLegendProps',
	    value: function getLegendProps(items) {
	      var children = this.props.children;

	      var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
	      if (!legendItem) {
	        return null;
	      }

	      var _props2 = this.props;
	      var width = _props2.width;
	      var height = _props2.height;

	      var legendData = items.map(function (child) {
	        var _child$props = child.props;
	        var name = _child$props.name;
	        var fill = _child$props.fill;
	        var legendType = _child$props.legendType;


	        return {
	          type: legendType || 'square',
	          color: fill,
	          value: name || ''
	        };
	      }, this);

	      return _extends({}, legendItem.props, _Legend2.default.getWithHeight(legendItem, width, height), {
	        payload: legendData
	      });
	    }
	    /**
	     * The handler of mouse entering a scatter
	     * @param {Object} el The active scatter
	     * @param {Object} e  Event object
	     * @return {Object} no return
	     */


	    /**
	     * The handler of mouse leaving a scatter
	     * @return {Object} no return
	     */

	  }, {
	    key: 'renderTooltip',


	    /**
	     * Draw Tooltip
	     * @param  {Array} items   The instances of Scatter
	     * @param  {Object} xAxis  The configuration of x-axis
	     * @param  {Object} yAxis  The configuration of y-axis
	     * @param  {Object} zAxis  The configuration of z-axis
	     * @param  {Object} offset The offset of main part in the svg element
	     * @return {ReactElement}  The instance of Tooltip
	     */
	    value: function renderTooltip(items, xAxis, yAxis, zAxis, offset) {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
	        return null;
	      }

	      var _state = this.state;
	      var isTooltipActive = _state.isTooltipActive;
	      var activeItem = _state.activeItem;
	      var activeTooltipCoord = _state.activeTooltipCoord;

	      var viewBox = {
	        x: offset.left,
	        y: offset.top,
	        width: offset.width,
	        height: offset.height
	      };

	      return _react2.default.cloneElement(tooltipItem, {
	        viewBox: viewBox,
	        active: isTooltipActive,
	        label: '',
	        payload: this.getTooltipContent(activeItem && activeItem.payload, xAxis, yAxis, zAxis),
	        coordinate: activeTooltipCoord
	      });
	    }

	    /**
	     * Draw grid
	     * @param  {Object} xAxis  The configuration of x-axis
	     * @param  {Object} yAxis  The configuration of y-axis
	     * @param  {Object} offset The offset of main part in the svg element
	     * @return {ReactElement} The instance of grid
	     */

	  }, {
	    key: 'renderGrid',
	    value: function renderGrid(xAxis, yAxis, offset) {
	      var _props3 = this.props;
	      var children = _props3.children;
	      var width = _props3.width;
	      var height = _props3.height;

	      var gridItem = (0, _ReactUtils.findChildByType)(children, _CartesianGrid2.default);

	      if (!gridItem) {
	        return null;
	      }

	      var verticalPoints = this.getGridTicks(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, xAxis, {
	        ticks: this.getAxisTicks(xAxis),
	        viewBox: { x: 0, y: 0, width: width, height: height }
	      })), offset.left, offset.left + offset.width);

	      var horizontalPoints = this.getGridTicks(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, yAxis, {
	        ticks: this.getAxisTicks(yAxis),
	        viewBox: { x: 0, y: 0, width: width, height: height }
	      })), offset.top, offset.top + offset.height);

	      return _react2.default.cloneElement(gridItem, {
	        key: 'grid',
	        x: offset.left,
	        y: offset.top,
	        width: offset.width,
	        height: offset.height,
	        verticalPoints: verticalPoints,
	        horizontalPoints: horizontalPoints
	      });
	    }
	    /**
	     * Draw legend
	     * @param  {Array} items     The instances of Scatters
	     * @return {ReactElement}    The instance of Legend
	     */

	  }, {
	    key: 'renderLegend',
	    value: function renderLegend(items) {
	      var props = this.getLegendProps(items);

	      if (!props) {
	        return null;
	      }
	      var _props4 = this.props;
	      var margin = _props4.margin;
	      var width = _props4.width;
	      var height = _props4.height;


	      return _react2.default.createElement(_Legend2.default, _extends({}, props, {
	        chartWidth: width,
	        chartHeight: height,
	        margin: margin
	      }));
	    }

	    /**
	     * Draw axis
	     * @param {Object} axis     The configuration of axis
	     * @param {String} layerKey The key of layer
	     * @return {ReactElement}   The instance of axis
	     */

	  }, {
	    key: 'renderAxis',
	    value: function renderAxis(axis, layerKey) {
	      var _props5 = this.props;
	      var width = _props5.width;
	      var height = _props5.height;


	      if (axis && !axis.hide) {
	        return _react2.default.createElement(
	          _Layer2.default,
	          { key: layerKey, className: layerKey },
	          _react2.default.createElement(_CartesianAxis2.default, {
	            x: axis.x,
	            y: axis.y,
	            width: axis.width,
	            height: axis.height,
	            orientation: axis.orientation,
	            viewBox: { x: 0, y: 0, width: width, height: height },
	            ticks: this.getAxisTicks(axis)
	          })
	        );
	      }
	    }
	  }, {
	    key: 'renderCursor',
	    value: function renderCursor(xAxis, yAxis, offset) {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem || !this.state.isTooltipActive) {
	        return null;
	      }
	      var activeItem = this.state.activeItem;


	      var cursorProps = _extends({
	        fill: '#f1f1f1'
	      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), offset, {
	        x: activeItem.cx,
	        y: activeItem.cy,
	        payload: activeItem
	      });

	      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Cross2.default, cursorProps);
	    }

	    /**
	     * Draw the main part of scatter chart
	     * @param  {Array} items   All the instance of Scatter
	     * @param  {Object} xAxis  The configuration of all x-axis
	     * @param  {Object} yAxis  The configuration of all y-axis
	     * @param  {Object} zAxis  The configuration of all z-axis
	     * @return {ReactComponent}  All the instances of Scatter
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems(items, xAxis, yAxis, zAxis) {
	      var _this2 = this;

	      var activeGroupId = this.state.activeGroupId;

	      return items.map(function (child, i) {
	        var _child$props2 = child.props;
	        var strokeWidth = _child$props2.strokeWidth;
	        var data = _child$props2.data;


	        var finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
	        finalStrokeWidth = activeGroupId === 'scatter-' + i ? finalStrokeWidth + 2 : finalStrokeWidth;

	        return _react2.default.cloneElement(child, {
	          key: 'scatter-' + i,
	          groupId: 'scatter-' + i,
	          strokeWidth: finalStrokeWidth,
	          onMouseLeave: _this2.handleScatterMouseLeave,
	          onMouseEnter: _this2.handleScatterMouseEnter,
	          points: _this2.getComposedData(data, xAxis, yAxis, zAxis)
	        });
	      }, this);
	    }
	  }, {
	    key: 'renderReferenceLines',
	    value: function renderReferenceLines(xAxis, yAxis, offset) {
	      var children = this.props.children;

	      var lines = (0, _ReactUtils.findAllByType)(children, _ReferenceLine2.default);

	      if (!lines || !lines.length) {
	        return null;
	      }

	      return lines.map(function (entry, i) {
	        return _react2.default.cloneElement(entry, {
	          key: 'reference-line-' + i,
	          xAxisMap: _defineProperty({}, xAxis.xAxisId, xAxis),
	          yAxisMap: _defineProperty({}, yAxis.yAxisId, yAxis),
	          viewBox: {
	            x: offset.left,
	            y: offset.top,
	            width: offset.width,
	            height: offset.height
	          }
	        });
	      });
	    }
	  }, {
	    key: 'renderReferenceDots',
	    value: function renderReferenceDots(xAxis, yAxis, offset) {
	      var children = this.props.children;

	      var dots = (0, _ReactUtils.findAllByType)(children, _ReferenceDot2.default);

	      if (!dots || !dots.length) {
	        return null;
	      }

	      return dots.map(function (entry, i) {
	        return _react2.default.cloneElement(entry, {
	          key: 'reference-dot-' + i,
	          xAxisMap: _defineProperty({}, xAxis.xAxisId, xAxis),
	          yAxisMap: _defineProperty({}, yAxis.yAxisId, yAxis)
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props6 = this.props;
	      var style = _props6.style;
	      var children = _props6.children;
	      var className = _props6.className;
	      var width = _props6.width;
	      var height = _props6.height;

	      var items = (0, _ReactUtils.findAllByType)(children, _Scatter2.default);
	      var zAxis = this.getZAxis(items);
	      var xAxis = this.getAxis('xAxis', items);
	      var yAxis = this.getAxis('yAxis', items);

	      var offset = this.getOffset(items, xAxis, yAxis);
	      xAxis = this.getFormatAxis(xAxis, offset, 'xAxis');
	      yAxis = this.getFormatAxis(yAxis, offset, 'yAxis');

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style)
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderGrid(xAxis, yAxis, offset),
	          this.renderReferenceLines(xAxis, yAxis, offset),
	          this.renderReferenceDots(xAxis, yAxis, offset),
	          this.renderAxis(xAxis, 'recharts-x-axis'),
	          this.renderAxis(yAxis, 'recharts-y-axis'),
	          this.renderCursor(xAxis, yAxis, offset),
	          this.renderItems(items, xAxis, yAxis, zAxis, offset)
	        ),
	        this.renderLegend(items),
	        this.renderTooltip(items, xAxis, yAxis, zAxis, offset)
	      );
	    }
	  }]);

	  return ScatterChart;
	}(_react.Component), _class2.displayName = 'ScatterChart', _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),
	  title: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  className: _react.PropTypes.string
	}, _class2.defaultProps = {
	  style: {},
	  margin: { top: 5, right: 5, bottom: 5, left: 5 }
	}, _temp2)) || _class;

	exports.default = ScatterChart;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Area Chart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	var _ReactUtils = __webpack_require__(124);

	var _CartesianChart2 = __webpack_require__(245);

	var _CartesianChart3 = _interopRequireDefault(_CartesianChart2);

	var _Area = __webpack_require__(238);

	var _Area2 = _interopRequireDefault(_Area);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AreaChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_CartesianChart) {
	  _inherits(AreaChart, _CartesianChart);

	  function AreaChart() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AreaChart);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AreaChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleAreaMouseLeave = function () {
	      _this.setState({
	        activeAreaKey: null
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AreaChart, [{
	    key: 'getComposedData',


	    /**
	     * Compose the data of each area
	     * @param  {Object} xAxis       The configuration of x-axis
	     * @param  {Object} yAxis       The configuration of y-axis
	     * @param  {String} dataKey     The unique key of a group
	     * @param  {Array}  stackedData If the area is stacked,
	     * the stackedData is an array of min value and max value
	     * @return {Array} Composed data
	     */
	    value: function getComposedData(xAxis, yAxis, dataKey, stackedData) {
	      var _props = this.props;
	      var data = _props.data;
	      var layout = _props.layout;

	      var xTicks = this.getAxisTicks(xAxis);
	      var yTicks = this.getAxisTicks(yAxis);
	      var hasStack = stackedData && stackedData.length;

	      var points = data.map(function (entry, index) {
	        var value = hasStack ? stackedData[index] : [0, entry[dataKey]];
	        return {
	          x: layout === 'horizontal' ? xTicks[index].coord : xAxis.scale(value[1]),
	          y: layout === 'horizontal' ? yAxis.scale(value[1]) : yTicks[index].coord,
	          value: entry[dataKey]
	        };
	      });

	      var range = undefined;
	      var baseLine = undefined;
	      if (hasStack) {
	        baseLine = stackedData.map(function (entry, index) {
	          return {
	            x: layout === 'horizontal' ? xTicks[index].coord : xAxis.scale(entry[0]),
	            y: layout === 'horizontal' ? yAxis.scale(entry[0]) : yTicks[index].coord
	          };
	        });
	      } else if (layout === 'horizontal') {
	        range = yAxis.scale.range();
	        baseLine = xAxis.orientation === 'top' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
	      } else {
	        range = xAxis.scale.range();
	        baseLine = yAxis.orientation === 'left' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
	      }

	      return { points: points, baseLine: baseLine, layout: layout };
	    }

	    /**
	     * Handler of mouse entering area chart
	     * @param {String} key  The unique key of a group of data
	     * @return {Object} null
	     */

	  }, {
	    key: 'handleAreaMouseEnter',
	    value: function handleAreaMouseEnter(key) {
	      this.setState({
	        activeAreaKey: key
	      });
	    }

	    /**
	     * Handler of mouse leaving area chart
	     * @return {Object} null
	     */

	  }, {
	    key: 'renderCursor',
	    value: function renderCursor(xAxisMap, yAxisMap, offset) {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
	        return null;
	      }

	      var layout = this.props.layout;
	      var activeTooltipIndex = this.state.activeTooltipIndex;

	      var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
	      var ids = Object.keys(axisMap);
	      var axis = axisMap[ids[0]];
	      var ticks = this.getAxisTicks(axis);
	      var start = ticks[activeTooltipIndex].coord;
	      var x1 = layout === 'horizontal' ? start : offset.left;
	      var y1 = layout === 'horizontal' ? offset.top : start;
	      var x2 = layout === 'horizontal' ? start : offset.left + offset.width;
	      var y2 = layout === 'horizontal' ? offset.top + offset.height : start;
	      var cursorProps = _extends({
	        stroke: '#ccc'
	      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
	        points: [{ x: x1, y: y1 }, { x: x2, y: y2 }]
	      });

	      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Curve2.default, _extends({}, cursorProps, { type: 'linear', className: 'recharts-tooltip-cursor' }));
	    }

	    /**
	     * Draw the main part of area chart
	     * @param  {Array} items     React elements of Area
	     * @param  {Object} xAxisMap The configuration of all x-axis
	     * @param  {Object} yAxisMap The configuration of all y-axis
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {ReactComponent} The instances of Area
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
	      var _this2 = this;

	      var _props2 = this.props;
	      var children = _props2.children;
	      var layout = _props2.layout;
	      var _state = this.state;
	      var activeAreaKey = _state.activeAreaKey;
	      var isTooltipActive = _state.isTooltipActive;
	      var activeTooltipIndex = _state.activeTooltipIndex;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
	      var hasDot = tooltipItem && isTooltipActive;
	      var dotItems = [];

	      var areaItems = items.reduce(function (result, child, i) {
	        var _child$props = child.props;
	        var xAxisId = _child$props.xAxisId;
	        var yAxisId = _child$props.yAxisId;
	        var dataKey = _child$props.dataKey;
	        var fillOpacity = _child$props.fillOpacity;
	        var fill = _child$props.fill;

	        var axisId = layout === 'horizontal' ? xAxisId : yAxisId;
	        var stackedData = stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && _this2.getStackedDataOfItem(child, stackGroups[axisId].stackGroups);
	        var composeData = _this2.getComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey, stackedData);

	        var activePoint = composeData.points && composeData.points[activeTooltipIndex];
	        var pointStyle = { fill: fill, strokeWidth: 2, stroke: '#fff' };

	        if (hasDot && activePoint) {
	          dotItems.push(_react2.default.createElement(_Dot2.default, _extends({
	            key: 'area-dot-' + i,
	            cx: activePoint.x,
	            cy: activePoint.y,
	            r: 4
	          }, pointStyle)));
	        }

	        var finalFillOpacity = fillOpacity === +fillOpacity ? fillOpacity : _Area2.default.defaultProps.fillOpacity;
	        finalFillOpacity = activeAreaKey === dataKey ? Math.min(finalFillOpacity * 1.2, 1) : finalFillOpacity;

	        var area = _react2.default.cloneElement(child, _extends({
	          key: 'area-' + i
	        }, offset, composeData, {
	          fillOpacity: finalFillOpacity,
	          onMouseLeave: _this2.handleAreaMouseLeave,
	          onMouseEnter: _this2.handleAreaMouseEnter.bind(_this2, dataKey)
	        }));

	        return activeAreaKey === dataKey ? [].concat(_toConsumableArray(result), [area]) : [area].concat(_toConsumableArray(result));
	      }, []);

	      return _react2.default.createElement(
	        'g',
	        { key: 'recharts-area-wrapper' },
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-area' },
	          areaItems
	        ),
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-area-dot' },
	          dotItems
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props3 = this.props;
	      var style = _props3.style;
	      var children = _props3.children;
	      var layout = _props3.layout;
	      var className = _props3.className;
	      var width = _props3.width;
	      var height = _props3.height;

	      var numberAxisName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
	      var items = (0, _ReactUtils.findAllByType)(children, _Area2.default);
	      var stackGroups = this.getStackGroupsByAxisId(items, numberAxisName + 'Id');

	      var xAxisMap = this.getAxisMap('xAxis', items, numberAxisName === 'xAxis' && stackGroups);
	      var yAxisMap = this.getAxisMap('yAxis', items, numberAxisName === 'yAxis' && stackGroups);
	      var offset = this.getOffset(items, xAxisMap, yAxisMap);

	      xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
	      yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style),
	          onMouseEnter: this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseMove: this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseLeave: this.handleMouseLeave
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderGrid(xAxisMap, yAxisMap, offset),
	          this.renderReferenceLines(xAxisMap, yAxisMap, offset),
	          this.renderReferenceDots(xAxisMap, yAxisMap, offset),
	          this.renderXAxis(xAxisMap),
	          this.renderYAxis(yAxisMap),
	          this.renderCursor(xAxisMap, yAxisMap, offset),
	          this.renderItems(items, xAxisMap, yAxisMap, offset, stackGroups)
	        ),
	        this.renderLegend(items),
	        this.renderTooltip(items, offset)
	      );
	    }
	  }]);

	  return AreaChart;
	}(_CartesianChart3.default), _class2.displayName = 'AreaChart', _class2.defaultProps = {
	  style: {},
	  layout: 'horizontal',
	  margin: { top: 5, right: 5, bottom: 5, left: 5 }
	}, _temp2)) || _class;

	exports.default = AreaChart;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _range = __webpack_require__(220);

	var _range2 = _interopRequireDefault(_range);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Radar Bar Chart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _d3Scale = __webpack_require__(224);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _RadialBar = __webpack_require__(217);

	var _RadialBar2 = _interopRequireDefault(_RadialBar);

	var _DataUtils = __webpack_require__(120);

	var _Legend = __webpack_require__(112);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _ReactUtils = __webpack_require__(124);

	var _PolarUtils = __webpack_require__(125);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RadialBarChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
	  _inherits(RadialBarChart, _Component);

	  function RadialBarChart() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, RadialBarChart);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RadialBarChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      activeTooltipLabel: '',
	      activeTooltipPayload: [],
	      activeTooltipCoord: { x: 0, y: 0 },
	      isTooltipActive: false
	    }, _this.handleMouseEnter = function (el, index, e) {
	      var cx = el.cx;
	      var cy = el.cy;
	      var endAngle = el.endAngle;
	      var outerRadius = el.outerRadius;


	      _this.setState({
	        isTooltipActive: true,
	        activeTooltipCoord: (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, endAngle),
	        activeTooltipPayload: [el.payload]
	      }, function () {
	        if (_this.props.onMouseEnter) {
	          _this.props.onMouseEnter(el, index, e);
	        }
	      });
	    }, _this.handleMouseLeave = function (el, index, e) {
	      _this.setState({
	        isTooltipActive: false
	      }, function () {
	        if (_this.props.onMouseEnter) {
	          _this.props.onMouseLeave(el, index, e);
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(RadialBarChart, [{
	    key: 'getComposedData',


	    /**
	     * Compose the data of each group
	     * @param  {Array}  barPosition The offset and size of each bar
	     * @param  {Object} radiusScale The scale function of radius of bars
	     * @param  {Object} center      The coordinate of center
	     * @param  {String} dataKey     The unique key of a group
	     * @return {Array}              Composed data
	     */
	    value: function getComposedData(barPosition, radiusScale, center, dataKey) {
	      var data = this.props.data;

	      var pos = barPosition[dataKey];

	      return data.map(function (entry, index) {
	        var value = entry[dataKey];
	        var radius = radiusScale(index);

	        return _extends({}, entry, center, {
	          value: value,
	          innerRadius: radius - pos.offset,
	          outerRadius: radius - pos.offset + pos.radius
	        });
	      });
	    }

	    /**
	     * Calculate the size of all groups
	     * @param  {Array} items All the instance of RadialBar
	     * @return {Object} The size of all groups
	     */

	  }, {
	    key: 'getRadiusList',
	    value: function getRadiusList(items) {
	      var barSize = this.props.barSize;


	      return items.map(function (child) {
	        return _extends({}, child.props, {
	          barSize: child.props.barSize || barSize
	        });
	      });
	    }

	    /**
	     * Calculate the scale function of radius
	     * @param {Number} innerRadius The outer radius
	     * @param {Number} outerRadius The inner radius
	     * @return {Object}            A scale function
	     */

	  }, {
	    key: 'getRadiusScale',
	    value: function getRadiusScale(innerRadius, outerRadius) {
	      var data = this.props.data;

	      var bandCount = Math.max(data.length, 1);
	      var range = [outerRadius, innerRadius];
	      var scale = (0, _d3Scale.scaleBand)().domain((0, _range2.default)(0, bandCount)).range(range);

	      return scale;
	    }

	    /**
	     * Calculate the size of each bar and the gap between two bars
	     * @param  {Number} bandRadius  The radius of each category
	     * @param  {Array} radiusList   The radius of all groups
	     * @return {Number} The size of each bar and the gap between two bars
	     */

	  }, {
	    key: 'getBarPosition',
	    value: function getBarPosition(bandRadius, radiusList) {
	      var _props = this.props;
	      var barGap = _props.barGap;
	      var barCategoryGap = _props.barCategoryGap;

	      var len = radiusList.length;
	      var result = undefined;

	      // whether or not is barSize setted by user
	      if (len && radiusList[0].barSize === +radiusList[0].barSize) {
	        (function () {
	          var sum = radiusList.reduce(function (res, entry) {
	            return res + entry.barSize;
	          }, 0);
	          sum += (len - 1) * barGap;
	          var offset = -sum / 2 >> 0;
	          var prev = { offset: offset - barGap, radius: 0 };

	          result = radiusList.reduce(function (res, entry) {
	            res[entry.dataKey] = {
	              offset: prev.offset + prev.radius + barGap,
	              radius: entry.barSize
	            };
	            prev = res[entry.dataKey];

	            return res;
	          }, {});
	        })();
	      } else {
	        (function () {
	          var offset = (0, _DataUtils.getPercentValue)(barCategoryGap, bandRadius);
	          var radius = (bandRadius - 2 * offset - (len - 1) * barGap) / len >> 0;
	          offset = -Math.max((radius * len + (len - 1) * barGap) / 2 >> 0, 0);

	          result = radiusList.reduce(function (res, entry, i) {
	            res[entry.dataKey] = {
	              offset: offset + (radius + barGap) * i,
	              radius: radius
	            };

	            return res;
	          }, {});
	        })();
	      }

	      return result;
	    }
	  }, {
	    key: 'renderLegend',


	    /**
	     * Draw legend
	     * @param  {ReactElement} legendItem The instance of Legend
	     * @return {ReactElement}            The instance of Legend
	     */
	    value: function renderLegend() {
	      var children = this.props.children;

	      var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
	      if (!legendItem) {
	        return null;
	      }

	      var _props2 = this.props;
	      var data = _props2.data;
	      var width = _props2.width;
	      var height = _props2.height;
	      var margin = _props2.margin;


	      var legendData = data.map(function (entry) {
	        return {
	          type: 'square',
	          color: entry.fill || '#000',
	          value: entry.name
	        };
	      });

	      return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width, height), {
	        payload: legendData,
	        chartWidth: width,
	        chartHeight: height,
	        margin: margin
	      }));
	    }
	  }, {
	    key: 'renderTooltip',
	    value: function renderTooltip() {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

	      if (!tooltipItem) {
	        return null;
	      }

	      var _props3 = this.props;
	      var width = _props3.width;
	      var height = _props3.height;
	      var _state = this.state;
	      var isTooltipActive = _state.isTooltipActive;
	      var activeTooltipLabel = _state.activeTooltipLabel;
	      var activeTooltipCoord = _state.activeTooltipCoord;
	      var activeTooltipPayload = _state.activeTooltipPayload;

	      var viewBox = { x: 0, y: 0, width: width, height: height };

	      return _react2.default.cloneElement(tooltipItem, {
	        viewBox: viewBox,
	        active: isTooltipActive,
	        label: activeTooltipLabel,
	        payload: activeTooltipPayload,
	        coordinate: activeTooltipCoord
	      });
	    }

	    /**
	     * Draw the main part of bar chart
	     * @param  {Array} items     All the instance of RadialBar
	     * @param  {Object} radiusScale The scale function of radius of bars
	     * @param  {Object} center      The coordinate of center
	     * @return {ReactComponent}  All the instances of RadialBar
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems(items, radiusScale, center) {
	      var _this2 = this;

	      if (!items || !items.length) {
	        return null;
	      }

	      var radiusList = this.getRadiusList(items);
	      var bandRadius = radiusScale.bandwidth();
	      var barPosition = this.getBarPosition(bandRadius, radiusList);

	      return items.map(function (child, i) {
	        var dataKey = child.props.dataKey;


	        return _react2.default.cloneElement(child, _extends({}, center, {
	          key: 'radial-bar-' + i,
	          onMouseLeave: _this2.handleMouseLeave,
	          onMouseEnter: _this2.handleMouseEnter,
	          onClick: _this2.props.onClick,
	          data: _this2.getComposedData(barPosition, radiusScale, center, dataKey)
	        }));
	      }, this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props4 = this.props;
	      var style = _props4.style;
	      var children = _props4.children;
	      var className = _props4.className;
	      var width = _props4.width;
	      var height = _props4.height;
	      var margin = _props4.margin;

	      var items = (0, _ReactUtils.findAllByType)(children, _RadialBar2.default);
	      var cx = (0, _DataUtils.getPercentValue)(this.props.cx, width, width / 2);
	      var cy = (0, _DataUtils.getPercentValue)(this.props.cy, height, height / 2);
	      var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);
	      var innerRadius = (0, _DataUtils.getPercentValue)(this.props.innerRadius, maxRadius, 0);
	      var outerRadius = (0, _DataUtils.getPercentValue)(this.props.outerRadius, maxRadius, maxRadius * 0.8);
	      var radiusScale = this.getRadiusScale(innerRadius, outerRadius);

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ cursor: 'default' }, style, { position: 'relative' })
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderItems(items, radiusScale, { cx: cx, cy: cy })
	        ),
	        this.renderLegend(),
	        this.renderTooltip(items)
	      );
	    }
	  }]);

	  return RadialBarChart;
	}(_react.Component), _class2.displayName = 'RadialBarChart', _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),
	  cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

	  data: _react.PropTypes.array,
	  innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  // The offset radius between two categorys
	  barCategoryGap: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  // The gap radius of two radial bar in one category
	  barGap: _react.PropTypes.number,
	  // The radius of each radial bar
	  barSize: _react.PropTypes.number,
	  title: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  className: _react.PropTypes.string
	}, _class2.defaultProps = {
	  cx: '50%',
	  cy: '50%',
	  innerRadius: '30%',
	  outerRadius: '90%',
	  barGap: 2,
	  barCategoryGap: '10%',
	  style: {},
	  margin: { top: 0, right: 0, bottom: 0, left: 0 }
	}, _temp2)) || _class;

	exports.default = RadialBarChart;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class2, _temp2; /**
	                              * @fileOverview Composed Chart
	                              */


	var _react = __webpack_require__(43);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(111);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Surface = __webpack_require__(42);

	var _Surface2 = _interopRequireDefault(_Surface);

	var _Tooltip = __webpack_require__(117);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _CartesianChart2 = __webpack_require__(245);

	var _CartesianChart3 = _interopRequireDefault(_CartesianChart2);

	var _Line = __webpack_require__(236);

	var _Line2 = _interopRequireDefault(_Line);

	var _Bar = __webpack_require__(239);

	var _Bar2 = _interopRequireDefault(_Bar);

	var _Area = __webpack_require__(238);

	var _Area2 = _interopRequireDefault(_Area);

	var _Curve = __webpack_require__(126);

	var _Curve2 = _interopRequireDefault(_Curve);

	var _Dot = __webpack_require__(132);

	var _Dot2 = _interopRequireDefault(_Dot);

	var _Rectangle = __webpack_require__(129);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	var _DataUtils = __webpack_require__(120);

	var _ReactUtils = __webpack_require__(124);

	var _PureRender = __webpack_require__(44);

	var _PureRender2 = _interopRequireDefault(_PureRender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ComposedChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_CartesianChart) {
	  _inherits(ComposedChart, _CartesianChart);

	  function ComposedChart() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ComposedChart);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ComposedChart)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleBarMouseLeave = function () {
	      _this.setState({
	        activeBarKey: null
	      });
	    }, _this.handleLineMouseLeave = function () {
	      _this.setState({
	        activeLineKey: null
	      });
	    }, _this.handleAreaMouseLeave = function () {
	      _this.setState({
	        activeAreaKey: null
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ComposedChart, [{
	    key: 'getLineComposedData',


	    /**
	     * Compose the data of each line
	     * @param  {Object} xAxis   The configuration of x-axis
	     * @param  {Object} yAxis   The configuration of y-axis
	     * @param  {String} dataKey The unique key of a group
	     * @return {Array}  Composed data
	     */
	    value: function getLineComposedData(xAxis, yAxis, dataKey) {
	      var _props = this.props;
	      var data = _props.data;
	      var layout = _props.layout;

	      var bandSize = this.getBandSize(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
	      var xTicks = this.getAxisTicks(xAxis);
	      var yTicks = this.getAxisTicks(yAxis);

	      return data.map(function (entry, index) {
	        return {
	          x: layout === 'horizontal' ? xTicks[index].coord + bandSize / 2 : xAxis.scale(entry[dataKey]),
	          y: layout === 'horizontal' ? yAxis.scale(entry[dataKey]) : yTicks[index].coord + bandSize / 2,
	          value: entry[dataKey]
	        };
	      });
	    }

	    /**
	     * Compose the data of each area
	     * @param  {Object} xAxis   The configuration of x-axis
	     * @param  {Object} yAxis   The configuration of y-axis
	     * @param  {String} dataKey The unique key of a group
	     * @param  {Array} stackedData The stacked data of a area item
	     * @return {Array} Composed data
	     */

	  }, {
	    key: 'getAreaComposedData',
	    value: function getAreaComposedData(xAxis, yAxis, dataKey, stackedData) {
	      var _props2 = this.props;
	      var data = _props2.data;
	      var layout = _props2.layout;

	      var xTicks = this.getAxisTicks(xAxis);
	      var yTicks = this.getAxisTicks(yAxis);
	      var bandSize = this.getBandSize(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
	      var hasStack = stackedData && stackedData.length;

	      var points = data.map(function (entry, index) {
	        var value = hasStack ? stackedData[index] : [0, entry[dataKey]];
	        return {
	          x: layout === 'horizontal' ? xTicks[index].coord + bandSize / 2 : xAxis.scale(value[1]),
	          y: layout === 'horizontal' ? yAxis.scale(value[1]) : yTicks[index].coord + bandSize / 2,
	          value: entry[dataKey]
	        };
	      });

	      var range = undefined;
	      var baseLine = undefined;
	      if (hasStack) {
	        baseLine = stackedData.map(function (entry, index) {
	          return {
	            x: layout === 'horizontal' ? xTicks[index].coord + bandSize / 2 : xAxis.scale(entry[0]),
	            y: layout === 'horizontal' ? yAxis.scale(entry[0]) : yTicks[index].coord + bandSize / 2
	          };
	        });
	      } else if (layout === 'horizontal') {
	        range = yAxis.scale.range();
	        baseLine = xAxis.orientation === 'top' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
	      } else {
	        range = xAxis.scale.range();
	        baseLine = yAxis.orientation === 'left' ? Math.min(range[0], range[1]) : Math.max(range[0], range[1]);
	      }

	      return { points: points, baseLine: baseLine, layout: layout };
	    }

	    /**
	     * Compose the data of each bar
	     * @param  {Array}  barPosition The offset and size of each bar
	     * @param  {Object} xAxis       The configuration of x-axis
	     * @param  {Object} yAxis       The configuration of y-axis
	     * @param  {Object} offset      The offset of main part in the svg element
	     * @param  {String} dataKey     The unique key of a group
	     * @param  {Array} stackedData  The stacked data of a bar item
	     * @return {Array} Composed data
	     */

	  }, {
	    key: 'getBarComposedData',
	    value: function getBarComposedData(barPosition, xAxis, yAxis, offset, dataKey, stackedData) {
	      var layout = this.props.layout;
	      var _state = this.state;
	      var dataStartIndex = _state.dataStartIndex;
	      var dataEndIndex = _state.dataEndIndex;

	      var data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
	      var pos = barPosition[dataKey];
	      var xTicks = this.getAxisTicks(xAxis);
	      var yTicks = this.getAxisTicks(yAxis);
	      var baseValue = this.getBaseValue(xAxis, yAxis);
	      var hasStack = stackedData && stackedData.length;

	      return data.map(function (entry, index) {
	        var value = stackedData ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];
	        var x = undefined;
	        var y = undefined;
	        var width = undefined;
	        var height = undefined;

	        if (layout === 'horizontal') {
	          x = xTicks[index].coord + pos.offset;
	          y = yAxis.scale(xAxis.orientation === 'top' ? value[0] : value[1]);
	          width = pos.size;
	          height = xAxis.orientation === 'top' ? yAxis.scale(value[1]) - yAxis.scale(value[0]) : yAxis.scale(value[0]) - yAxis.scale(value[1]);
	        } else {
	          x = xAxis.scale(yAxis.orientation === 'left' ? value[0] : value[1]);
	          y = yTicks[index].coord + pos.offset;
	          width = yAxis.orientation === 'left' ? xAxis.scale(value[1]) - xAxis.scale(value[0]) : xAxis.scale(value[0]) - xAxis.scale(value[1]);
	          height = pos.size;
	        }

	        return _extends({}, entry, { x: x, y: y, width: width, height: height, value: value[1] });
	      });
	    }
	  }, {
	    key: 'getBaseValue',
	    value: function getBaseValue(xAxis, yAxis) {
	      var layout = this.props.layout;

	      var scale = layout === 'horizontal' ? yAxis.scale : xAxis.scale;
	      var domain = scale.domain();

	      return Math.max(Math.min(domain[0], domain[1]), 0);
	    }

	    /**
	     * Calculate the size of each bar and the gap between two bars
	     * @param  {Number}   bandSize  The size of each category
	     * @param  {sizeList} sizeList  The size of all groups
	     * @return {Number} The size of each bar and the gap between two bars
	     */

	  }, {
	    key: 'getBarPosition',
	    value: function getBarPosition(bandSize, sizeList) {
	      var _props3 = this.props;
	      var barGap = _props3.barGap;
	      var barCategoryGap = _props3.barCategoryGap;

	      var len = sizeList.length;
	      var result = undefined;

	      // whether or not is barSize setted by user
	      if (sizeList[0].barSize === +sizeList[0].barSize) {
	        (function () {
	          var sum = sizeList.reduce(function (res, entry) {
	            return res + entry.barSize;
	          }, 0);
	          sum += (len - 1) * barGap;
	          var offset = (bandSize - sum) / 2 >> 0;
	          var prev = { offset: offset - barGap, size: 0 };

	          result = sizeList.reduce(function (res, entry) {
	            res[entry.dataKey] = {
	              offset: prev.offset + prev.size + barGap,
	              size: entry.barSize
	            };
	            prev = res[entry.dataKey];

	            if (entry.stackList && entry.stackList.length) {
	              entry.stackList.forEach(function (key) {
	                res[key] = res[entry.dataKey];
	              });
	            }
	            return res;
	          }, {});
	        })();
	      } else {
	        (function () {
	          var offset = (0, _DataUtils.getPercentValue)(barCategoryGap, bandSize, 0, true);
	          var size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;

	          result = sizeList.reduce(function (res, entry, i) {
	            res[entry.dataKey] = {
	              offset: offset + (size + barGap) * i,
	              size: size
	            };
	            if (entry.stackList && entry.stackList.length) {
	              entry.stackList.forEach(function (key) {
	                res[key] = res[entry.dataKey];
	              });
	            }
	            return res;
	          }, {});
	        })();
	      }

	      return result;
	    }

	    /**
	     * Calculate the size of all groups
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {Object} The size of all groups
	     */

	  }, {
	    key: 'getSizeList',
	    value: function getSizeList(stackGroups) {
	      var _props4 = this.props;
	      var layout = _props4.layout;
	      var barSize = _props4.barSize;


	      return Object.keys(stackGroups).reduce(function (result, axisId) {
	        var sgs = stackGroups[axisId].stackGroups;

	        result[axisId] = Object.keys(sgs).reduce(function (res, stackId) {
	          var items = sgs[stackId].items;

	          var firstItem = items[0];

	          if (firstItem.type.displayName === 'Bar') {
	            var dataKey = firstItem.props.dataKey;


	            res.push({
	              dataKey: dataKey,
	              stackList: items.slice(1).map(function (item) {
	                return item.props.dataKey;
	              }),
	              barSize: firstItem.props.barSize || barSize
	            });
	          }

	          return res;
	        }, []);

	        return result;
	      }, {});
	    }

	    /**
	     * Calculate the size between two category
	     * @param  {Function} scale Scale function
	     * @return {Number} Size
	     */

	  }, {
	    key: 'getBandSize',
	    value: function getBandSize(scale) {
	      if (scale && scale.bandwidth) {
	        return scale.bandwidth();
	      }
	      return 0;
	    }

	    /**
	     * Handler of mouse entering bar chart
	     * @param {String} key  The unique key of a group of data
	     * @return {Object}     null
	     */

	  }, {
	    key: 'handleBarMouseEnter',
	    value: function handleBarMouseEnter(key) {
	      this.setState({
	        activeBarKey: key
	      });
	    }

	    /**
	     * Handler of mouse leaving area chart
	     * @return {Object} null
	     */

	  }, {
	    key: 'handleLineMouseEnter',


	    /**
	     * Handler of mouse entering line chart
	     * @param {String}       key The unique key of a group of data
	     * @return {Object} no return
	     */
	    value: function handleLineMouseEnter(key) {
	      this.setState({
	        activeLineKey: key
	      });
	    }

	    /**
	     * Handler of mouse leaving line chart
	     * @return {Object} no return
	     */

	  }, {
	    key: 'handleAreaMouseEnter',


	    /**
	     * Handler of mouse entering area chart
	     * @param {String} key  The unique key of a group of data
	     * @return {Object} null
	     */
	    value: function handleAreaMouseEnter(key) {
	      this.setState({
	        activeAreaKey: key
	      });
	    }

	    /**
	     * Handler of mouse leaving area chart
	     * @return {Object} null
	     */

	  }, {
	    key: 'renderCursor',
	    value: function renderCursor(xAxisMap, yAxisMap, offset) {
	      var children = this.props.children;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
	      if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
	        return null;
	      }

	      var layout = this.props.layout;
	      var activeTooltipIndex = this.state.activeTooltipIndex;

	      var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
	      var ids = Object.keys(axisMap);
	      var axis = axisMap[ids[0]];
	      var bandSize = this.getBandSize(axis.scale);

	      var ticks = this.getAxisTicks(axis);
	      var start = ticks[activeTooltipIndex].coord;
	      var cursorProps = _extends({
	        fill: '#f1f1f1'
	      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
	        x: layout === 'horizontal' ? start : offset.left + 0.5,
	        y: layout === 'horizontal' ? offset.top + 0.5 : start,
	        width: layout === 'horizontal' ? bandSize : offset.width - 1,
	        height: layout === 'horizontal' ? offset.height - 1 : bandSize
	      });

	      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Rectangle2.default, cursorProps);
	    }

	    /**
	     * Draw the lines
	     * @param  {Array} items     All the instance of Line
	     * @param  {Object} xAxisMap The configuration of all x-axes
	     * @param  {Object} yAxisMap The configuration of all y-axes
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @return {ReactComponent}  All the instances of Line
	     */

	  }, {
	    key: 'renderLineItems',
	    value: function renderLineItems(items, xAxisMap, yAxisMap, offset) {
	      var _this2 = this;

	      var _props5 = this.props;
	      var children = _props5.children;
	      var layout = _props5.layout;
	      var _state2 = this.state;
	      var activeLineKey = _state2.activeLineKey;
	      var isTooltipActive = _state2.isTooltipActive;
	      var activeTooltipIndex = _state2.activeTooltipIndex;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
	      var hasDot = tooltipItem && isTooltipActive;
	      var dotItems = [];

	      var lineItems = items.map(function (child, i) {
	        var _child$props = child.props;
	        var xAxisId = _child$props.xAxisId;
	        var yAxisId = _child$props.yAxisId;
	        var dataKey = _child$props.dataKey;
	        var strokeWidth = _child$props.strokeWidth;
	        var stroke = _child$props.stroke;

	        var points = _this2.getLineComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);
	        var activePoint = points[activeTooltipIndex];
	        var pointStyle = { fill: stroke, strokeWidth: 2, stroke: '#fff' };

	        var finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
	        finalStrokeWidth = activeLineKey === dataKey ? finalStrokeWidth + 2 : finalStrokeWidth;

	        if (hasDot && activePoint) {
	          dotItems.push(_react2.default.createElement(_Dot2.default, _extends({
	            key: 'area-dot-' + i,
	            cx: activePoint.x,
	            cy: activePoint.y,
	            r: 4
	          }, pointStyle)));
	        }

	        return _react2.default.cloneElement(child, _extends({
	          key: 'line-' + i
	        }, offset, {
	          layout: layout,
	          strokeWidth: finalStrokeWidth,
	          onMouseLeave: _this2.handleLineMouseLeave,
	          onMouseEnter: _this2.handleLineMouseEnter.bind(_this2, dataKey),
	          points: points
	        }));
	      }, this);

	      return _react2.default.createElement(
	        'g',
	        { key: 'recharts-line-wrapper' },
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-line' },
	          lineItems
	        ),
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-line-dot' },
	          dotItems
	        )
	      );
	    }

	    /**
	     * Draw the areas
	     * @param  {Array} items     React elements of Area
	     * @param  {Object} xAxisMap The configuration of all x-axis
	     * @param  {Object} yAxisMap The configuration of all y-axis
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {ReactComponent} The instances of Area
	     */

	  }, {
	    key: 'renderAreaItems',
	    value: function renderAreaItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
	      var _this3 = this;

	      var _props6 = this.props;
	      var children = _props6.children;
	      var layout = _props6.layout;
	      var _state3 = this.state;
	      var activeAreaKey = _state3.activeAreaKey;
	      var isTooltipActive = _state3.isTooltipActive;
	      var activeTooltipIndex = _state3.activeTooltipIndex;

	      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
	      var hasDot = tooltipItem && isTooltipActive;
	      var dotItems = [];

	      var areaItems = items.reduce(function (result, child, i) {
	        var _child$props2 = child.props;
	        var xAxisId = _child$props2.xAxisId;
	        var yAxisId = _child$props2.yAxisId;
	        var dataKey = _child$props2.dataKey;
	        var fillOpacity = _child$props2.fillOpacity;
	        var fill = _child$props2.fill;

	        var axisId = layout === 'horizontal' ? xAxisId : yAxisId;
	        var stackedData = stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && _this3.getStackedDataOfItem(child, stackGroups[axisId].stackGroups);
	        var composeData = _this3.getAreaComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey, stackedData);

	        var activePoint = composeData.points && composeData.points[activeTooltipIndex];
	        var pointStyle = { fill: fill, strokeWidth: 2, stroke: '#fff' };

	        if (hasDot && activePoint) {
	          dotItems.push(_react2.default.createElement(_Dot2.default, _extends({
	            key: 'area-dot-' + i,
	            cx: activePoint.x,
	            cy: activePoint.y,
	            r: 4
	          }, pointStyle)));
	        }

	        var finalFillOpacity = fillOpacity === +fillOpacity ? fillOpacity : _Area2.default.defaultProps.fillOpacity;
	        finalFillOpacity = activeAreaKey === dataKey ? Math.min(finalFillOpacity * 1.2, 1) : finalFillOpacity;

	        var area = _react2.default.cloneElement(child, _extends({
	          key: 'area-' + i
	        }, offset, composeData, {
	          fillOpacity: finalFillOpacity,
	          onMouseLeave: _this3.handleAreaMouseLeave,
	          onMouseEnter: _this3.handleAreaMouseEnter.bind(_this3, dataKey)
	        }));

	        return activeAreaKey === dataKey ? [].concat(_toConsumableArray(result), [area]) : [area].concat(_toConsumableArray(result));
	      }, []);

	      return _react2.default.createElement(
	        'g',
	        { key: 'recharts-area-wrapper' },
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-area' },
	          areaItems
	        ),
	        _react2.default.createElement(
	          'g',
	          { key: 'recharts-area-dot' },
	          dotItems
	        )
	      );
	    }

	    /**
	     * Draw the bars
	     * @param  {Array} items     All the instance of Bar
	     * @param  {Object} xAxisMap The configuration of all x-axis
	     * @param  {Object} yAxisMap The configuration of all y-axis
	     * @param  {Object} offset   The offset of main part in the svg element
	     * @param  {Object} stackGroups The items grouped by axisId and stackId
	     * @return {ReactComponent}  All the instances of Bar
	     */

	  }, {
	    key: 'renderBarItems',
	    value: function renderBarItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
	      var _this4 = this;

	      if (!items || !items.length) {
	        return null;
	      }

	      var layout = this.props.layout;

	      var sizeList = this.getSizeList(stackGroups);

	      var barPositionMap = {};

	      return items.map(function (child, i) {
	        var _child$props3 = child.props;
	        var xAxisId = _child$props3.xAxisId;
	        var yAxisId = _child$props3.yAxisId;
	        var dataKey = _child$props3.dataKey;

	        var axisId = layout === 'horizontal' ? xAxisId : yAxisId;
	        var bandSize = _this4.getBandSize(layout === 'horizontal' ? xAxisMap[xAxisId].scale : yAxisMap[yAxisId].scale);
	        var barPosition = barPositionMap[axisId] || _this4.getBarPosition(bandSize, sizeList[axisId]);
	        var stackedData = stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && _this4.getStackedDataOfItem(child, stackGroups[axisId].stackGroups);

	        return _react2.default.cloneElement(child, {
	          key: 'bar-' + i,
	          layout: layout,
	          onMouseLeave: _this4.handleBarMouseLeave,
	          onMouseEnter: _this4.handleBarMouseEnter.bind(_this4, dataKey),
	          data: _this4.getBarComposedData(barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, dataKey, stackedData)
	        });
	      }, this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!(0, _ReactUtils.validateWidthHeight)(this)) {
	        return null;
	      }

	      var _props7 = this.props;
	      var style = _props7.style;
	      var children = _props7.children;
	      var className = _props7.className;
	      var layout = _props7.layout;
	      var width = _props7.width;
	      var height = _props7.height;

	      var numberAxisName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
	      var lineItems = (0, _ReactUtils.findAllByType)(children, _Line2.default);
	      var barItems = (0, _ReactUtils.findAllByType)(children, _Bar2.default);
	      var areaItems = (0, _ReactUtils.findAllByType)(children, _Area2.default);
	      var items = [].concat(_toConsumableArray(lineItems), _toConsumableArray(barItems), _toConsumableArray(areaItems));

	      var stackGroups = this.getStackGroupsByAxisId(items, numberAxisName + 'Id');

	      var xAxisMap = this.getAxisMap('xAxis', items, numberAxisName === 'xAxis' && stackGroups);
	      var yAxisMap = this.getAxisMap('yAxis', items, numberAxisName === 'yAxis' && stackGroups);
	      var offset = this.getOffset(items, xAxisMap, yAxisMap);

	      xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
	      yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');

	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)('recharts-wrapper', className),
	          style: _extends({ position: 'relative', cursor: 'default' }, style),
	          onMouseEnter: this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseMove: this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap),
	          onMouseLeave: this.handleMouseLeave
	        },
	        _react2.default.createElement(
	          _Surface2.default,
	          { width: width, height: height },
	          this.renderGrid(xAxisMap, yAxisMap, offset),
	          this.renderReferenceLines(xAxisMap, yAxisMap, offset),
	          this.renderReferenceDots(xAxisMap, yAxisMap, offset),
	          this.renderXAxis(xAxisMap),
	          this.renderYAxis(yAxisMap),
	          this.renderCursor(xAxisMap, yAxisMap, offset),
	          this.renderAreaItems(areaItems, xAxisMap, yAxisMap, offset, stackGroups),
	          this.renderBarItems(barItems, xAxisMap, yAxisMap, offset, stackGroups),
	          this.renderLineItems(lineItems, xAxisMap, yAxisMap, offset)
	        ),
	        this.renderLegend(items),
	        this.renderTooltip(items, offset)
	      );
	    }
	  }]);

	  return ComposedChart;
	}(_CartesianChart3.default), _class2.displayName = 'ComposedChart', _class2.propTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  data: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
	}, _class2.defaultProps = {
	  style: {},
	  barCategoryGap: '10%',
	  barGap: 4,
	  layout: 'horizontal',
	  margin: { top: 5, right: 5, bottom: 5, left: 5 }
	}, _temp2)) || _class;

	exports.default = ComposedChart;

/***/ }
/******/ ])
});
;