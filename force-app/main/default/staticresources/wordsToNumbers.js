(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":9}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":10}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":11}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":12}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":13}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":2}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":1}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":4,"../core-js/symbol/iterator":5}],9:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;

},{"../../modules/_core":20,"../../modules/es6.array.from":77,"../../modules/es6.string.iterator":82}],10:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":20,"../../modules/es6.object.assign":79}],11:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":20,"../../modules/es6.object.keys":80}],12:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":20,"../../modules/es6.object.to-string":81,"../../modules/es6.symbol":83,"../../modules/es7.symbol.async-iterator":84,"../../modules/es7.symbol.observable":85}],13:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":74,"../../modules/es6.string.iterator":82,"../../modules/web.dom.iterable":86}],14:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],15:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],16:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":38}],17:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":66,"./_to-iobject":68,"./_to-length":69}],18:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":19,"./_wks":75}],19:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],20:[function(require,module,exports){
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],21:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":49,"./_property-desc":60}],22:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":14}],23:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],24:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":29}],25:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":30,"./_is-object":38}],26:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],27:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":54,"./_object-keys":57,"./_object-pie":58}],28:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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

},{"./_core":20,"./_ctx":22,"./_global":30,"./_has":31,"./_hide":32}],29:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],30:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],31:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],32:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":24,"./_object-dp":49,"./_property-desc":60}],33:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":30}],34:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":24,"./_dom-create":25,"./_fails":29}],35:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":19}],36:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":44,"./_wks":75}],37:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":19}],38:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],39:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":16}],40:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":32,"./_object-create":48,"./_property-desc":60,"./_set-to-string-tag":62,"./_wks":75}],41:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":28,"./_hide":32,"./_iter-create":40,"./_iterators":44,"./_library":45,"./_object-gpo":55,"./_redefine":61,"./_set-to-string-tag":62,"./_wks":75}],42:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":75}],43:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],44:[function(require,module,exports){
module.exports = {};

},{}],45:[function(require,module,exports){
module.exports = true;

},{}],46:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":29,"./_has":31,"./_is-object":38,"./_object-dp":49,"./_uid":72}],47:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

},{"./_descriptors":24,"./_fails":29,"./_iobject":35,"./_object-gops":54,"./_object-keys":57,"./_object-pie":58,"./_to-object":70}],48:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":16,"./_dom-create":25,"./_enum-bug-keys":26,"./_html":33,"./_object-dps":50,"./_shared-key":63}],49:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":16,"./_descriptors":24,"./_ie8-dom-define":34,"./_to-primitive":71}],50:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":16,"./_descriptors":24,"./_object-dp":49,"./_object-keys":57}],51:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":24,"./_has":31,"./_ie8-dom-define":34,"./_object-pie":58,"./_property-desc":60,"./_to-iobject":68,"./_to-primitive":71}],52:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":53,"./_to-iobject":68}],53:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":26,"./_object-keys-internal":56}],54:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],55:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":31,"./_shared-key":63,"./_to-object":70}],56:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":17,"./_has":31,"./_shared-key":63,"./_to-iobject":68}],57:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":26,"./_object-keys-internal":56}],58:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],59:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":20,"./_export":28,"./_fails":29}],60:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],61:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":32}],62:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":31,"./_object-dp":49,"./_wks":75}],63:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":64,"./_uid":72}],64:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":20,"./_global":30,"./_library":45}],65:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":23,"./_to-integer":67}],66:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":67}],67:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],68:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":23,"./_iobject":35}],69:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":67}],70:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":23}],71:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":38}],72:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],73:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":20,"./_global":30,"./_library":45,"./_object-dp":49,"./_wks-ext":74}],74:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":75}],75:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":30,"./_shared":64,"./_uid":72}],76:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":18,"./_core":20,"./_iterators":44,"./_wks":75}],77:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":21,"./_ctx":22,"./_export":28,"./_is-array-iter":36,"./_iter-call":39,"./_iter-detect":42,"./_to-length":69,"./_to-object":70,"./core.get-iterator-method":76}],78:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":15,"./_iter-define":41,"./_iter-step":43,"./_iterators":44,"./_to-iobject":68}],79:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":28,"./_object-assign":47}],80:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":57,"./_object-sap":59,"./_to-object":70}],81:[function(require,module,exports){

},{}],82:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":41,"./_string-at":65}],83:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toObject = require('./_to-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $GOPS = require('./_object-gops');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":16,"./_descriptors":24,"./_enum-keys":27,"./_export":28,"./_fails":29,"./_global":30,"./_has":31,"./_hide":32,"./_is-array":37,"./_is-object":38,"./_library":45,"./_meta":46,"./_object-create":48,"./_object-dp":49,"./_object-gopd":51,"./_object-gopn":53,"./_object-gopn-ext":52,"./_object-gops":54,"./_object-keys":57,"./_object-pie":58,"./_property-desc":60,"./_redefine":61,"./_set-to-string-tag":62,"./_shared":64,"./_to-iobject":68,"./_to-object":70,"./_to-primitive":71,"./_uid":72,"./_wks":75,"./_wks-define":73,"./_wks-ext":74}],84:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":73}],85:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":73}],86:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":30,"./_hide":32,"./_iterators":44,"./_wks":75,"./es6.array.iterator":78}],87:[function(require,module,exports){
/* clj-fuzzy - v0.3.3 - Author: Yomguithereal (Guillaume Plique) - Repository: https://github.com/Yomguithereal/clj-fuzzy */
if(typeof Math.imul=="undefined"||Math.imul(4294967295,5)==0){Math.imul=function(a,b){var ah=a>>>16&65535;var al=a&65535;var bh=b>>>16&65535;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16>>>0)|0}}(function(){var f,ba=this;function l(a){var b=typeof a;if("object"==b){if(a){if(a instanceof Array){return"array"}if(a instanceof Object){return b}var c=Object.prototype.toString.call(a);if("[object Window]"==c){return"object"}if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice")){return"array"}if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call")){return"function"}}else{return"null"}}else{if("function"==b&&"undefined"==typeof a.call){return"object"}}return b}var ca="closure_uid_"+(1e9*Math.random()>>>0),da=0;function ea(a,b){var c=a.split("."),d=ba;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());){c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}}var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ga(a){return Array.prototype.join.call(arguments,"")}function ha(a,b){for(var c in a){b.call(void 0,a[c],c,a)}}function ia(a,b){null!=a&&this.append.apply(this,arguments)}f=ia.prototype;f.Ha="";f.set=function(a){this.Ha=""+a};f.append=function(a,b,c){this.Ha+=a;if(null!=b){for(var d=1;d<arguments.length;d++){this.Ha+=arguments[d]}}return this};f.clear=function(){this.Ha=""};f.toString=function(){return this.Ha};if("undefined"===typeof ja){var ja=function(){throw Error("No *print-fn* fn set for evaluation environment")}}var ka=null;if("undefined"===typeof la){var la=null}function ma(){return new pa(null,5,[qa,!0,ra,!0,ua,!1,va,!1,wa,null],null)}function n(a){return null!=a&&!1!==a}function xa(a){return null==a}function Ba(a){return a instanceof Array}function Ca(a){return n(a)?!1:!0}function r(a,b){return a[l(null==b?null:b)]?!0:a._?!0:!1}function t(a,b){var c=null==b?null:b.constructor,c=n(n(c)?c.Jb:c)?c.Ib:l(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function Da(a){var b=a.Ib;return n(b)?b:""+u(a)}var Ga="undefined"!==typeof Symbol&&"function"===l(Symbol)?Symbol.iterator:"@@iterator";function Ha(a){for(var b=a.length,c=Array(b),d=0;;){if(d<b){c[d]=a[d],d+=1}else{break}}return c}function Ia(a){function b(a,b){a.push(b);return a}var c=[];return Ka?Ka(b,c,a):La.call(null,b,c,a)}var Ma={},Na={},Oa=function Oa(b){if(b?b.L:b){return b.L(b)}var c;c=Oa[l(null==b?null:b)];if(!c&&(c=Oa._,!c)){throw t("ICounted.-count",b)}return c.call(null,b)},Qa=function Qa(b){if(b?b.M:b){return b.M(b)}var c;c=Qa[l(null==b?null:b)];if(!c&&(c=Qa._,!c)){throw t("IEmptyableCollection.-empty",b)}return c.call(null,b)},Ra={},Sa=function Sa(b,c){if(b?b.J:b){return b.J(b,c)}var d;d=Sa[l(null==b?null:b)];if(!d&&(d=Sa._,!d)){throw t("ICollection.-conj",b)}return d.call(null,b,c)},Va={},v=function v(){switch(arguments.length){case 2:return v.a(arguments[0],arguments[1]);case 3:return v.i(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};v.a=function(a,b){if(a?a.N:a){return a.N(a,b)}var c;c=v[l(null==a?null:a)];if(!c&&(c=v._,!c)){throw t("IIndexed.-nth",a)}return c.call(null,a,b)};v.i=function(a,b,c){if(a?a.da:a){return a.da(a,b,c)}var d;d=v[l(null==a?null:a)];if(!d&&(d=v._,!d)){throw t("IIndexed.-nth",a)}return d.call(null,a,b,c)};v.v=3;var Wa={},Xa=function Xa(b){if(b?b.R:b){return b.R(b)}var c;c=Xa[l(null==b?null:b)];if(!c&&(c=Xa._,!c)){throw t("ISeq.-first",b)}return c.call(null,b)},Za=function Za(b){if(b?b.Y:b){return b.Y(b)}var c;c=Za[l(null==b?null:b)];if(!c&&(c=Za._,!c)){throw t("ISeq.-rest",b)}return c.call(null,b)},$a={},ab={},bb=function bb(){switch(arguments.length){case 2:return bb.a(arguments[0],arguments[1]);case 3:return bb.i(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};bb.a=function(a,b){if(a?a.G:a){return a.G(a,b)}var c;c=bb[l(null==a?null:a)];if(!c&&(c=bb._,!c)){throw t("ILookup.-lookup",a)}return c.call(null,a,b)};bb.i=function(a,b,c){if(a?a.F:a){return a.F(a,b,c)}var d;d=bb[l(null==a?null:a)];if(!d&&(d=bb._,!d)){throw t("ILookup.-lookup",a)}return d.call(null,a,b,c)};bb.v=3;var cb=function cb(b,c){if(b?b.eb:b){return b.eb(b,c)}var d;d=cb[l(null==b?null:b)];if(!d&&(d=cb._,!d)){throw t("IAssociative.-contains-key?",b)}return d.call(null,b,c)},db=function db(b,c,d){if(b?b.Qa:b){return b.Qa(b,c,d)}var e;e=db[l(null==b?null:b)];if(!e&&(e=db._,!e)){throw t("IAssociative.-assoc",b)}return e.call(null,b,c,d)},eb={},fb=function fb(b,c){if(b?b.ib:b){return b.ib(b,c)}var d;d=fb[l(null==b?null:b)];if(!d&&(d=fb._,!d)){throw t("IMap.-dissoc",b)}return d.call(null,b,c)},hb={},ib=function ib(b){if(b?b.jb:b){return b.jb()}var c;c=ib[l(null==b?null:b)];if(!c&&(c=ib._,!c)){throw t("IMapEntry.-key",b)}return c.call(null,b)},jb=function jb(b){if(b?b.kb:b){return b.kb()}var c;c=jb[l(null==b?null:b)];if(!c&&(c=jb._,!c)){throw t("IMapEntry.-val",b)}return c.call(null,b)},kb={},lb=function lb(b,c){if(b?b.pb:b){return b.pb(0,c)}var d;d=lb[l(null==b?null:b)];if(!d&&(d=lb._,!d)){throw t("ISet.-disjoin",b)}return d.call(null,b,c)},mb=function mb(b){if(b?b.Sa:b){return b.Sa(b)}var c;c=mb[l(null==b?null:b)];if(!c&&(c=mb._,!c)){throw t("IStack.-peek",b)}return c.call(null,b)},nb={},ob=function ob(b,c,d){if(b?b.lb:b){return b.lb(b,c,d)}var e;e=ob[l(null==b?null:b)];if(!e&&(e=ob._,!e)){throw t("IVector.-assoc-n",b)}return e.call(null,b,c,d)},pb={},qb=function qb(b){if(b?b.O:b){return b.O(b)}var c;c=qb[l(null==b?null:b)];if(!c&&(c=qb._,!c)){throw t("IMeta.-meta",b)}return c.call(null,b)},rb={},sb=function sb(b,c){if(b?b.S:b){return b.S(b,c)}var d;d=sb[l(null==b?null:b)];if(!d&&(d=sb._,!d)){throw t("IWithMeta.-with-meta",b)}return d.call(null,b,c)},tb={},ub=function ub(){switch(arguments.length){case 2:return ub.a(arguments[0],arguments[1]);case 3:return ub.i(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};ub.a=function(a,b){if(a?a.T:a){return a.T(a,b)}var c;c=ub[l(null==a?null:a)];if(!c&&(c=ub._,!c)){throw t("IReduce.-reduce",a)}return c.call(null,a,b)};ub.i=function(a,b,c){if(a?a.U:a){return a.U(a,b,c)}var d;d=ub[l(null==a?null:a)];if(!d&&(d=ub._,!d)){throw t("IReduce.-reduce",a)}return d.call(null,a,b,c)};ub.v=3;var vb=function vb(b,c){if(b?b.s:b){return b.s(b,c)}var d;d=vb[l(null==b?null:b)];if(!d&&(d=vb._,!d)){throw t("IEquiv.-equiv",b)}return d.call(null,b,c)},wb=function wb(b){if(b?b.I:b){return b.I(b)}var c;c=wb[l(null==b?null:b)];if(!c&&(c=wb._,!c)){throw t("IHash.-hash",b)}return c.call(null,b)},xb={},zb=function zb(b){if(b?b.K:b){return b.K(b)}var c;c=zb[l(null==b?null:b)];if(!c&&(c=zb._,!c)){throw t("ISeqable.-seq",b)}return c.call(null,b)},Ab={},Bb={},Cb=function Cb(b){if(b?b.Za:b){return b.Za(b)}var c;c=Cb[l(null==b?null:b)];if(!c&&(c=Cb._,!c)){throw t("IReversible.-rseq",b)}return c.call(null,b)},Db=function Db(b,c){if(b?b.rb:b){return b.rb(0,c)}var d;d=Db[l(null==b?null:b)];if(!d&&(d=Db._,!d)){throw t("IWriter.-write",b)}return d.call(null,b,c)},Gb={},Hb=function Hb(b,c,d){if(b?b.H:b){return b.H(b,c,d)}var e;e=Hb[l(null==b?null:b)];if(!e&&(e=Hb._,!e)){throw t("IPrintWithWriter.-pr-writer",b)}return e.call(null,b,c,d)},Ib=function Ib(b){if(b?b.La:b){return b.La(b)}var c;c=Ib[l(null==b?null:b)];if(!c&&(c=Ib._,!c)){throw t("IEditableCollection.-as-transient",b)}return c.call(null,b)},Jb=function Jb(b,c){if(b?b.Ia:b){return b.Ia(b,c)}var d;d=Jb[l(null==b?null:b)];if(!d&&(d=Jb._,!d)){throw t("ITransientCollection.-conj!",b)}return d.call(null,b,c)},Kb=function Kb(b){if(b?b.Ma:b){return b.Ma(b)}var c;c=Kb[l(null==b?null:b)];if(!c&&(c=Kb._,!c)){throw t("ITransientCollection.-persistent!",b)}return c.call(null,b)},Lb=function Lb(b,c,d){if(b?b.Ta:b){return b.Ta(b,c,d)}var e;e=Lb[l(null==b?null:b)];if(!e&&(e=Lb._,!e)){throw t("ITransientAssociative.-assoc!",b)}return e.call(null,b,c,d)},Mb=function Mb(b,c,d){if(b?b.qb:b){return b.qb(0,c,d)}var e;e=Mb[l(null==b?null:b)];if(!e&&(e=Mb._,!e)){throw t("ITransientVector.-assoc-n!",b)}return e.call(null,b,c,d)},Nb=function Nb(b){if(b?b.ob:b){return b.ob()}var c;c=Nb[l(null==b?null:b)];if(!c&&(c=Nb._,!c)){throw t("IChunk.-drop-first",b)}return c.call(null,b)},Ob=function Ob(b){if(b?b.gb:b){return b.gb(b)}var c;c=Ob[l(null==b?null:b)];if(!c&&(c=Ob._,!c)){throw t("IChunkedSeq.-chunked-first",b)}return c.call(null,b)},Qb=function Qb(b){if(b?b.hb:b){return b.hb(b)}var c;c=Qb[l(null==b?null:b)];if(!c&&(c=Qb._,!c)){throw t("IChunkedSeq.-chunked-rest",b)}return c.call(null,b)},Rb=function Rb(b){if(b?b.fb:b){return b.fb(b)}var c;c=Rb[l(null==b?null:b)];if(!c&&(c=Rb._,!c)){throw t("IChunkedNext.-chunked-next",b)}return c.call(null,b)},Sb=function Sb(b){if(b?b.Ra:b){return b.Ra(b)}var c;c=Sb[l(null==b?null:b)];if(!c&&(c=Sb._,!c)){throw t("IIterable.-iterator",b)}return c.call(null,b)};function Tb(a){this.Kb=a;this.h=1073741824;this.w=0}Tb.prototype.rb=function(a,b){return this.Kb.append(b)};function Ub(a){var b=new ia;a.H(null,new Tb(b),ma());return""+u(b)}var Vb="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function Wb(a){a=Vb(a|0,-862048943);return Vb(a<<15|a>>>-15,461845907)}function Xb(a,b){var c=(a|0)^(b|0);return Vb(c<<13|c>>>-13,5)+-430675100|0}function Yb(a,b){var c=(a|0)^b,c=Vb(c^c>>>16,-2048144789),c=Vb(c^c>>>13,-1028477387);return c^c>>>16}function Zb(a){var b;a:{b=1;for(var c=0;;){if(b<a.length){var d=b+2,c=Xb(c,Wb(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}}b=1===(a.length&1)?b^Wb(a.charCodeAt(a.length-1)):b;return Yb(b,Vb(2,a.length))}var $b={},ac=0;function bc(a){255<ac&&($b={},ac=0);var b=$b[a];if("number"!==typeof b){a:{if(null!=a){if(b=a.length,0<b){for(var c=0,d=0;;){if(c<b){var e=c+1,d=Vb(31,d)+a.charCodeAt(c),c=e}else{b=d;break a}}}else{b=0}}else{b=0}}$b[a]=b;ac+=1}return a=b}function cc(a){a&&(a.h&4194304||a.Ob)?a=a.I(null):"number"===typeof a?a=Math.floor(a)%2147483647:!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=bc(a),0!==a&&(a=Wb(a),a=Xb(0,a),a=Yb(a,4))):a=a instanceof Date?a.valueOf():null==a?0:wb(a);return a}function dc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function w(a){if(null==a){return null}if(a&&(a.h&8388608||a.Qb)){return a.K(null)}if(Ba(a)||"string"===typeof a){return 0===a.length?null:new x(a,0)}if(r(xb,a)){return zb(a)}throw Error([u(a),u(" is not ISeqable")].join(""))}function y(a){if(null==a){return null}if(a&&(a.h&64||a.$a)){return a.R(null)}a=w(a);return null==a?null:Xa(a)}function ec(a){return null!=a?a&&(a.h&64||a.$a)?a.Y(null):(a=w(a))?Za(a):C:C}function D(a){return null==a?null:a&&(a.h&128||a.Ya)?a.W(null):w(ec(a))}var E=function E(){switch(arguments.length){case 1:return E.b(arguments[0]);case 2:return E.a(arguments[0],arguments[1]);default:return E.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};E.b=function(){return!0};E.a=function(a,b){return null==a?null==b:a===b||vb(a,b)};E.m=function(a,b,c){for(;;){if(E.a(a,b)){if(D(c)){a=b,b=y(c),c=D(c)}else{return E.a(b,y(c))}}else{return!1}}};E.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return E.m(b,a,c)};E.v=2;function fc(a){this.u=a}fc.prototype.next=function(){if(null!=this.u){var a=y(this.u);this.u=D(this.u);return{value:a,done:!1}}return{value:null,done:!0}};function gc(a){return new fc(w(a))}function hc(a,b){var c=Wb(a),c=Xb(0,c);return Yb(c,b)}function ic(a){var b=0,c=1;for(a=w(a);;){if(null!=a){b+=1,c=Vb(31,c)+cc(y(a))|0,a=D(a)}else{return hc(c,b)}}}var jc=hc(1,0);function kc(a){var b=0,c=0;for(a=w(a);;){if(null!=a){b+=1,c=c+cc(y(a))|0,a=D(a)}else{return hc(c,b)}}}var lc=hc(0,0);Na["null"]=!0;Oa["null"]=function(){return 0};Date.prototype.s=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};vb.number=function(a,b){return a===b};Ma["function"]=!0;pb["function"]=!0;qb["function"]=function(){return null};wb._=function(a){return a[ca]||(a[ca]=++da)};function mc(a,b){var c=Oa(a);if(0===c){return b.C?b.C():b.call(null)}for(var d=v.a(a,0),e=1;;){if(e<c){var g=v.a(a,e),d=b.a?b.a(d,g):b.call(null,d,g),e=e+1}else{return d}}}function nc(a,b,c){var d=Oa(a),e=c;for(c=0;;){if(c<d){var g=v.a(a,c),e=b.a?b.a(e,g):b.call(null,e,g);c+=1}else{return e}}}function oc(a,b){var c=a.length;if(0===a.length){return b.C?b.C():b.call(null)}for(var d=a[0],e=1;;){if(e<c){var g=a[e],d=b.a?b.a(d,g):b.call(null,d,g),e=e+1}else{return d}}}function pc(a,b,c){var d=a.length,e=c;for(c=0;;){if(c<d){var g=a[c],e=b.a?b.a(e,g):b.call(null,e,g);c+=1}else{return e}}}function qc(a,b,c,d){for(var e=a.length;;){if(d<e){var g=a[d];c=b.a?b.a(c,g):b.call(null,c,g);d+=1}else{return c}}}function rc(a){return a?a.h&2||a.vb?!0:a.h?!1:r(Na,a):r(Na,a)}function sc(a,b){this.c=a;this.j=b}sc.prototype.ab=function(){return this.j<this.c.length};sc.prototype.next=function(){var a=this.c[this.j];this.j+=1;return a};function x(a,b){this.c=a;this.j=b;this.h=166199550;this.w=8192}f=x.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.N=function(a,b){var c=b+this.j;return c<this.c.length?this.c[c]:null};f.da=function(a,b,c){a=b+this.j;return a<this.c.length?this.c[a]:c};f.Ra=function(){return new sc(this.c,this.j)};f.W=function(){return this.j+1<this.c.length?new x(this.c,this.j+1):null};f.L=function(){var a=this.c.length-this.j;return 0>a?0:a};f.Za=function(){var a=Oa(this);return 0<a?new uc(this,a-1,null):null};f.I=function(){return ic(this)};f.s=function(a,b){return vc.a?vc.a(this,b):vc.call(null,this,b)};f.M=function(){return C};f.T=function(a,b){return qc(this.c,b,this.c[this.j],this.j+1)};f.U=function(a,b,c){return qc(this.c,b,c,this.j)};f.R=function(){return this.c[this.j]};f.Y=function(){return this.j+1<this.c.length?new x(this.c,this.j+1):C};f.K=function(){return this.j<this.c.length?this:null};f.J=function(a,b){return F.a?F.a(b,this):F.call(null,b,this)};x.prototype[Ga]=function(){return gc(this)};function wc(a,b){return b<a.length?new x(a,b):null}function xc(){switch(arguments.length){case 1:return wc(arguments[0],0);case 2:return wc(arguments[0],arguments[1]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function uc(a,b,c){this.Wa=a;this.j=b;this.l=c;this.h=32374990;this.w=8192}f=uc.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.W=function(){return 0<this.j?new uc(this.Wa,this.j-1,null):null};f.L=function(){return this.j+1};f.I=function(){return ic(this)};f.s=function(a,b){return vc.a?vc.a(this,b):vc.call(null,this,b)};f.M=function(){var a=this.l;return yc.a?yc.a(C,a):yc.call(null,C,a)};f.T=function(a,b){return zc?zc(b,this):Ac.call(null,b,this)};f.U=function(a,b,c){return Bc?Bc(b,c,this):Ac.call(null,b,c,this)};f.R=function(){return v.a(this.Wa,this.j)};f.Y=function(){return 0<this.j?new uc(this.Wa,this.j-1,null):C};f.K=function(){return this};f.S=function(a,b){return new uc(this.Wa,this.j,b)};f.J=function(a,b){return F.a?F.a(b,this):F.call(null,b,this)};uc.prototype[Ga]=function(){return gc(this)};function Cc(a){return y(D(a))}function Dc(a){for(;;){var b=D(a);if(null!=b){a=b}else{return y(a)}}}vb._=function(a,b){return a===b};var Ec=function Ec(){switch(arguments.length){case 0:return Ec.C();case 1:return Ec.b(arguments[0]);case 2:return Ec.a(arguments[0],arguments[1]);default:return Ec.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};Ec.C=function(){return Fc};Ec.b=function(a){return a};Ec.a=function(a,b){return null!=a?Sa(a,b):Sa(C,b)};Ec.m=function(a,b,c){for(;;){if(n(c)){a=Ec.a(a,b),b=y(c),c=D(c)}else{return Ec.a(a,b)}}};Ec.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return Ec.m(b,a,c)};Ec.v=2;function H(a){if(null!=a){if(a&&(a.h&2||a.vb)){a=a.L(null)}else{if(Ba(a)){a=a.length}else{if("string"===typeof a){a=a.length}else{if(r(Na,a)){a=Oa(a)}else{a:{a=w(a);for(var b=0;;){if(rc(a)){a=b+Oa(a);break a}a=D(a);b+=1}}}}}}}else{a=0}return a}function Gc(a,b){for(var c=null;;){if(null==a){return c}if(0===b){return w(a)?y(a):c}var d=a;if(d?d.h&16||d.Bb||(d.h?0:r(Va,d)):r(Va,d)){return v.i(a,b,c)}if(w(a)){var d=D(a),e=b-1;a=d;b=e}else{return c}}}function L(a,b){if("number"!==typeof b){throw Error("index argument to nth must be a number.")}if(null==a){return null}if(a&&(a.h&16||a.Bb)){return a.da(null,b,null)}if(Ba(a)||"string"===typeof a){return b<a.length?a[b]:null}if(r(Va,a)){return v.a(a,b)}if(a?a.h&64||a.$a||(a.h?0:r(Wa,a)):r(Wa,a)){return Gc(a,b)}throw Error([u("nth not supported on this type "),u(Da(null==a?null:a.constructor))].join(""))}function Hc(a,b){return null==a?null:a&&(a.h&256||a.Cb)?a.G(null,b):Ba(a)?b<a.length?a[b|0]:null:"string"===typeof a?b<a.length?a[b|0]:null:r(ab,a)?bb.a(a,b):null}function Ic(a,b,c){return null!=a?a&&(a.h&256||a.Cb)?a.F(null,b,c):Ba(a)?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:r(ab,a)?bb.i(a,b,c):c:c}var Jc=function Jc(){switch(arguments.length){case 3:return Jc.i(arguments[0],arguments[1],arguments[2]);default:return Jc.m(arguments[0],arguments[1],arguments[2],new x(Array.prototype.slice.call(arguments,3),0))}};Jc.i=function(a,b,c){return null!=a?db(a,b,c):Kc([b],[c])};Jc.m=function(a,b,c,d){for(;;){if(a=Jc.i(a,b,c),n(d)){b=y(d),c=Cc(d),d=D(D(d))}else{return a}}};Jc.A=function(a){var b=y(a),c=D(a);a=y(c);var d=D(c),c=y(d),d=D(d);return Jc.m(b,a,c,d)};Jc.v=3;function Lc(a){var b="function"==l(a);return n(b)?b:a?n(n(null)?null:a.ub)?!0:a.mb?!1:r(Ma,a):r(Ma,a)}function Mc(a,b){this.f=a;this.l=b;this.h=393217;this.w=0}f=Mc.prototype;f.O=function(){return this.l};f.S=function(a,b){return new Mc(this.f,b)};f.ub=!0;f.call=function(){function a(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V,aa,Ja){a=this.f;return Nc.Xa?Nc.Xa(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V,aa,Ja):Nc.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V,aa,Ja)}function b(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V,aa){a=this;return a.f.wa?a.f.wa(b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V,aa):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V,aa)}function c(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V){a=this;return a.f.va?a.f.va(b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J,V)}function d(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J){a=this;return a.f.ua?a.f.ua(b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,J)}function e(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O){a=this;return a.f.ta?a.f.ta(b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O)}function g(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K){a=this;return a.f.sa?a.f.sa(b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K)}function h(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I){a=this;return a.f.ra?a.f.ra(b,c,d,e,g,h,k,m,q,p,z,B,A,G,I):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I)}function k(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G){a=this;return a.f.qa?a.f.qa(b,c,d,e,g,h,k,m,q,p,z,B,A,G):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A,G)}function m(a,b,c,d,e,g,h,k,m,q,p,z,B,A){a=this;return a.f.pa?a.f.pa(b,c,d,e,g,h,k,m,q,p,z,B,A):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B,A)}function q(a,b,c,d,e,g,h,k,m,q,p,z,B){a=this;return a.f.oa?a.f.oa(b,c,d,e,g,h,k,m,q,p,z,B):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z,B)}function p(a,b,c,d,e,g,h,k,m,q,p,z){a=this;return a.f.na?a.f.na(b,c,d,e,g,h,k,m,q,p,z):a.f.call(null,b,c,d,e,g,h,k,m,q,p,z)}function z(a,b,c,d,e,g,h,k,m,q,p){a=this;return a.f.ma?a.f.ma(b,c,d,e,g,h,k,m,q,p):a.f.call(null,b,c,d,e,g,h,k,m,q,p)}function B(a,b,c,d,e,g,h,k,m,q){a=this;return a.f.Aa?a.f.Aa(b,c,d,e,g,h,k,m,q):a.f.call(null,b,c,d,e,g,h,k,m,q)}function A(a,b,c,d,e,g,h,k,m){a=this;return a.f.za?a.f.za(b,c,d,e,g,h,k,m):a.f.call(null,b,c,d,e,g,h,k,m)}function G(a,b,c,d,e,g,h,k){a=this;return a.f.ya?a.f.ya(b,c,d,e,g,h,k):a.f.call(null,b,c,d,e,g,h,k)}function I(a,b,c,d,e,g,h){a=this;return a.f.xa?a.f.xa(b,c,d,e,g,h):a.f.call(null,b,c,d,e,g,h)}function K(a,b,c,d,e,g){a=this;return a.f.ba?a.f.ba(b,c,d,e,g):a.f.call(null,b,c,d,e,g)}function O(a,b,c,d,e){a=this;return a.f.aa?a.f.aa(b,c,d,e):a.f.call(null,b,c,d,e)}function V(a,b,c,d){a=this;return a.f.i?a.f.i(b,c,d):a.f.call(null,b,c,d)}function aa(a,b,c){a=this;return a.f.a?a.f.a(b,c):a.f.call(null,b,c)}function Fa(a,b){a=this;return a.f.b?a.f.b(b):a.f.call(null,b)}function Ja(a){a=this;return a.f.C?a.f.C():a.f.call(null)}var J=null,J=function(J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb,Fb,Pb,tc,Uc,Vc,pe){switch(arguments.length){case 1:return Ja.call(this,J);case 2:return Fa.call(this,J,na);case 3:return aa.call(this,J,na,oa);case 4:return V.call(this,J,na,oa,sa);case 5:return O.call(this,J,na,oa,sa,ta);case 6:return K.call(this,J,na,oa,sa,ta,ya);case 7:return I.call(this,J,na,oa,sa,ta,ya,za);case 8:return G.call(this,J,na,oa,sa,ta,ya,za,Aa);case 9:return A.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea);case 10:return B.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya);case 11:return z.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta);case 12:return p.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb);case 13:return q.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa);case 14:return m.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua);case 15:return k.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb);case 16:return h.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb);case 17:return g.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb,Fb);case 18:return e.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb,Fb,Pb);case 19:return d.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb,Fb,Pb,tc);case 20:return c.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb,Fb,Pb,tc,Uc);case 21:return b.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb,Fb,Pb,tc,Uc,Vc);case 22:return a.call(this,J,na,oa,sa,ta,ya,za,Aa,Ea,Ya,Ta,gb,Pa,Ua,Eb,yb,Fb,Pb,tc,Uc,Vc,pe)}throw Error("Invalid arity: "+arguments.length)};J.b=Ja;J.a=Fa;J.i=aa;J.aa=V;J.ba=O;J.xa=K;J.ya=I;J.za=G;J.Aa=A;J.ma=B;J.na=z;J.oa=p;J.pa=q;J.qa=m;J.ra=k;J.sa=h;J.ta=g;J.ua=e;J.va=d;J.wa=c;J.Ab=b;J.Xa=a;return J}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.C=function(){return this.f.C?this.f.C():this.f.call(null)};f.b=function(a){return this.f.b?this.f.b(a):this.f.call(null,a)};f.a=function(a,b){return this.f.a?this.f.a(a,b):this.f.call(null,a,b)};f.i=function(a,b,c){return this.f.i?this.f.i(a,b,c):this.f.call(null,a,b,c)};f.aa=function(a,b,c,d){return this.f.aa?this.f.aa(a,b,c,d):this.f.call(null,a,b,c,d)};f.ba=function(a,b,c,d,e){return this.f.ba?this.f.ba(a,b,c,d,e):this.f.call(null,a,b,c,d,e)};f.xa=function(a,b,c,d,e,g){return this.f.xa?this.f.xa(a,b,c,d,e,g):this.f.call(null,a,b,c,d,e,g)};f.ya=function(a,b,c,d,e,g,h){return this.f.ya?this.f.ya(a,b,c,d,e,g,h):this.f.call(null,a,b,c,d,e,g,h)};f.za=function(a,b,c,d,e,g,h,k){return this.f.za?this.f.za(a,b,c,d,e,g,h,k):this.f.call(null,a,b,c,d,e,g,h,k)};f.Aa=function(a,b,c,d,e,g,h,k,m){return this.f.Aa?this.f.Aa(a,b,c,d,e,g,h,k,m):this.f.call(null,a,b,c,d,e,g,h,k,m)};f.ma=function(a,b,c,d,e,g,h,k,m,q){return this.f.ma?this.f.ma(a,b,c,d,e,g,h,k,m,q):this.f.call(null,a,b,c,d,e,g,h,k,m,q)};f.na=function(a,b,c,d,e,g,h,k,m,q,p){return this.f.na?this.f.na(a,b,c,d,e,g,h,k,m,q,p):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p)};f.oa=function(a,b,c,d,e,g,h,k,m,q,p,z){return this.f.oa?this.f.oa(a,b,c,d,e,g,h,k,m,q,p,z):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z)};f.pa=function(a,b,c,d,e,g,h,k,m,q,p,z,B){return this.f.pa?this.f.pa(a,b,c,d,e,g,h,k,m,q,p,z,B):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B)};f.qa=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A){return this.f.qa?this.f.qa(a,b,c,d,e,g,h,k,m,q,p,z,B,A):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A)};f.ra=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G){return this.f.ra?this.f.ra(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G)};f.sa=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I){return this.f.sa?this.f.sa(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I)};f.ta=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K){return this.f.ta?this.f.ta(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K)};f.ua=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O){return this.f.ua?this.f.ua(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O)};f.va=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V){return this.f.va?this.f.va(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V)};f.wa=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa){return this.f.wa?this.f.wa(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa):this.f.call(null,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa)};f.Ab=function(a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa){var Ja=this.f;return Nc.Xa?Nc.Xa(Ja,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa):Nc.call(null,Ja,a,b,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa)};function yc(a,b){return Lc(a)&&!(a?a.h&262144||a.Ub||(a.h?0:r(rb,a)):r(rb,a))?new Mc(a,b):null==a?null:sb(a,b)}function Oc(a){var b=null!=a;return(b?a?a.h&131072||a.Fb||(a.h?0:r(pb,a)):r(pb,a):b)?qb(a):null}function Pc(a){return null==a?null:mb(a)}var Qc=function Qc(){switch(arguments.length){case 1:return Qc.b(arguments[0]);case 2:return Qc.a(arguments[0],arguments[1]);default:return Qc.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};Qc.b=function(a){return a};Qc.a=function(a,b){return null==a?null:lb(a,b)};Qc.m=function(a,b,c){for(;;){if(null==a){return null}a=Qc.a(a,b);if(n(c)){b=y(c),c=D(c)}else{return a}}};Qc.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return Qc.m(b,a,c)};Qc.v=2;function Rc(a){return null==a||Ca(w(a))}function Sc(a){return null==a?!1:a?a.h&8||a.Mb?!0:a.h?!1:r(Ra,a):r(Ra,a)}function Tc(a){return null==a?!1:a?a.h&4096||a.Sb?!0:a.h?!1:r(kb,a):r(kb,a)}function Wc(a){return a?a.h&16777216||a.Rb?!0:a.h?!1:r(Ab,a):r(Ab,a)}function Xc(a){return null==a?!1:a?a.h&1024||a.Db?!0:a.h?!1:r(eb,a):r(eb,a)}function Yc(a){return a?a.h&16384||a.Tb?!0:a.h?!1:r(nb,a):r(nb,a)}function Zc(a){return a?a.w&512||a.Lb?!0:!1:!1}function $c(a){var b=[];ha(a,function(a,b){return function(a,c){return b.push(c)}}(a,b));return b}function ad(a,b,c,d,e){for(;0!==e;){c[d]=a[b],d+=1,--e,b+=1}}var bd={};function cd(a){return null==a?!1:a?a.h&64||a.$a?!0:a.h?!1:r(Wa,a):r(Wa,a)}function dd(a){return n(a)?!0:!1}function ed(a,b){return Ic(a,b,bd)===bd?!1:!0}function Ac(){switch(arguments.length){case 2:return zc(arguments[0],arguments[1]);case 3:return Bc(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function zc(a,b){var c=w(b);if(c){var d=y(c),c=D(c);return Ka?Ka(a,d,c):La.call(null,a,d,c)}return a.C?a.C():a.call(null)}function Bc(a,b,c){for(c=w(c);;){if(c){var d=y(c);b=a.a?a.a(b,d):a.call(null,b,d);c=D(c)}else{return b}}}function La(){switch(arguments.length){case 2:var a=arguments[0],b=arguments[1];return b&&(b.h&524288||b.Hb)?b.T(null,a):Ba(b)?oc(b,a):"string"===typeof b?oc(b,a):r(tb,b)?ub.a(b,a):zc(a,b);case 3:return Ka(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function Ka(a,b,c){return c&&(c.h&524288||c.Hb)?c.U(null,a,b):Ba(c)?pc(c,a,b):"string"===typeof c?pc(c,a,b):r(tb,c)?ub.i(c,a,b):Bc(a,b,c)}function fd(a){return a}function gd(a,b,c,d){a=a.b?a.b(b):a.call(null,b);c=Ka(a,c,d);return a.b?a.b(c):a.call(null,c)}function hd(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function id(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function jd(a){return 0===a}var u=function u(){switch(arguments.length){case 0:return u.C();case 1:return u.b(arguments[0]);default:return u.m(arguments[0],new x(Array.prototype.slice.call(arguments,1),0))}};u.C=function(){return""};u.b=function(a){return null==a?"":ga(a)};u.m=function(a,b){for(var c=new ia(""+u(a)),d=b;;){if(n(d)){c=c.append(""+u(y(d))),d=D(d)}else{return c.toString()}}};u.A=function(a){var b=y(a);a=D(a);return u.m(b,a)};u.v=1;function kd(a,b){return a.substring(b)}function ld(a,b){return a.substring(0,b)}function vc(a,b){var c;if(Wc(b)){if(rc(a)&&rc(b)&&H(a)!==H(b)){c=!1}else{a:{c=w(a);for(var d=w(b);;){if(null==c){c=null==d;break a}if(null!=d&&E.a(y(c),y(d))){c=D(c),d=D(d)}else{c=!1;break a}}}}}else{c=null}return dd(c)}function md(a,b,c,d,e){this.l=a;this.first=b;this.Ca=c;this.count=d;this.o=e;this.h=65937646;this.w=8192}f=md.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.W=function(){return 1===this.count?null:this.Ca};f.L=function(){return this.count};f.Sa=function(){return this.first};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return sb(C,this.l)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return this.first};f.Y=function(){return 1===this.count?C:this.Ca};f.K=function(){return this};f.S=function(a,b){return new md(b,this.first,this.Ca,this.count,this.o)};f.J=function(a,b){return new md(this.l,b,this,this.count+1,null)};md.prototype[Ga]=function(){return gc(this)};function nd(a){this.l=a;this.h=65937614;this.w=8192}f=nd.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.W=function(){return null};f.L=function(){return 0};f.Sa=function(){return null};f.I=function(){return jc};f.s=function(a,b){return vc(this,b)};f.M=function(){return this};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return null};f.Y=function(){return C};f.K=function(){return null};f.S=function(a,b){return new nd(b)};f.J=function(a,b){return new md(this.l,b,null,1,null)};var C=new nd(null);nd.prototype[Ga]=function(){return gc(this)};function sd(a){return(a?a.h&134217728||a.Pb||(a.h?0:r(Bb,a)):r(Bb,a))?Cb(a):Ka(Ec,C,a)}function M(){a:{var a=0<arguments.length?new x(Array.prototype.slice.call(arguments,0),0):null,b;if(a instanceof x&&0===a.j){b=a.c}else{b:{for(b=[];;){if(null!=a){b.push(a.R(null)),a=a.W(null)}else{break b}}}}for(var a=b.length,c=C;;){if(0<a){var d=a-1,c=c.J(null,b[a-1]),a=d}else{break a}}}return c}function td(a,b,c,d){this.l=a;this.first=b;this.Ca=c;this.o=d;this.h=65929452;this.w=8192}f=td.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.W=function(){return null==this.Ca?null:w(this.Ca)};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.l)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return this.first};f.Y=function(){return null==this.Ca?C:this.Ca};f.K=function(){return this};f.S=function(a,b){return new td(b,this.first,this.Ca,this.o)};f.J=function(a,b){return new td(null,b,this,this.o)};td.prototype[Ga]=function(){return gc(this)};function F(a,b){var c=null==b;return(c?c:b&&(b.h&64||b.$a))?new td(null,a,b,null):new td(null,a,w(b),null)}function N(a,b,c,d){this.sb=a;this.name=b;this.Ea=c;this.nb=d;this.h=2153775105;this.w=4096}f=N.prototype;f.toString=function(){return[u(":"),u(this.Ea)].join("")};f.equiv=function(a){return this.s(null,a)};f.s=function(a,b){return b instanceof N?this.Ea===b.Ea:!1};f.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return Hc(c,this);case 3:return Ic(c,this,d)}throw Error("Invalid arity: "+arguments.length)};a.a=function(a,c){return Hc(c,this)};a.i=function(a,c,d){return Ic(c,this,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return Hc(a,this)};f.a=function(a,b){return Ic(a,this,b)};f.I=function(){var a=this.nb;return null!=a?a:this.nb=a=dc(Zb(this.name),bc(this.sb))+2654435769|0;
};f.H=function(a,b){return Db(b,[u(":"),u(this.Ea)].join(""))};var ud=function ud(){switch(arguments.length){case 1:return ud.b(arguments[0]);case 2:return ud.a(arguments[0],arguments[1]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};ud.b=function(a){var b;return a instanceof N?a:"string"===typeof a?(b=a.split("/"),2===b.length?new N(b[0],b[1],a,null):new N(null,b[0],a,null)):null};ud.a=function(a,b){return new N(a,b,[u(n(a)?[u(a),u("/")].join(""):null),u(b)].join(""),null)};ud.v=2;function vd(a,b,c,d){this.l=a;this.Oa=b;this.u=c;this.o=d;this.h=32374988;this.w=0}f=vd.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};function wd(a){null!=a.Oa&&(a.u=a.Oa.C?a.Oa.C():a.Oa.call(null),a.Oa=null);return a.u}f.O=function(){return this.l};f.W=function(){zb(this);return null==this.u?null:D(this.u)};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.l)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){zb(this);return null==this.u?null:y(this.u)};f.Y=function(){zb(this);return null!=this.u?ec(this.u):C};f.K=function(){wd(this);if(null==this.u){return null}for(var a=this.u;;){if(a instanceof vd){a=wd(a)}else{return this.u=a,w(this.u)}}};f.S=function(a,b){return new vd(b,this.Oa,this.u,this.o)};f.J=function(a,b){return F(b,this)};vd.prototype[Ga]=function(){return gc(this)};function xd(a,b){this.cb=a;this.end=b;this.h=2;this.w=0}xd.prototype.add=function(a){this.cb[this.end]=a;return this.end+=1};xd.prototype.ea=function(){var a=new yd(this.cb,0,this.end);this.cb=null;return a};xd.prototype.L=function(){return this.end};function yd(a,b,c){this.c=a;this.V=b;this.end=c;this.h=524306;this.w=0}f=yd.prototype;f.L=function(){return this.end-this.V};f.N=function(a,b){return this.c[this.V+b]};f.da=function(a,b,c){return 0<=b&&b<this.end-this.V?this.c[this.V+b]:c};f.ob=function(){if(this.V===this.end){throw Error("-drop-first of empty chunk")}return new yd(this.c,this.V+1,this.end)};f.T=function(a,b){return qc(this.c,b,this.c[this.V],this.V+1)};f.U=function(a,b,c){return qc(this.c,b,c,this.V)};function zd(a,b,c,d){this.ea=a;this.ja=b;this.l=c;this.o=d;this.h=31850732;this.w=1536}f=zd.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.W=function(){if(1<Oa(this.ea)){return new zd(Nb(this.ea),this.ja,this.l,null)}var a=zb(this.ja);return null==a?null:a};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.l)};f.R=function(){return v.a(this.ea,0)};f.Y=function(){return 1<Oa(this.ea)?new zd(Nb(this.ea),this.ja,this.l,null):null==this.ja?C:this.ja};f.K=function(){return this};f.gb=function(){return this.ea};f.hb=function(){return null==this.ja?C:this.ja};f.S=function(a,b){return new zd(this.ea,this.ja,b,this.o)};f.J=function(a,b){return F(b,this)};f.fb=function(){return null==this.ja?null:this.ja};zd.prototype[Ga]=function(){return gc(this)};function Ad(a,b){return 0===Oa(a)?b:new zd(a,b,null,null)}function Bd(a,b){a.add(b)}function Cd(a){for(var b=[];;){if(w(a)){b.push(y(a)),a=D(a)}else{return b}}}function Dd(a,b){if(rc(a)){return H(a)}for(var c=a,d=b,e=0;;){if(0<d&&w(c)){c=D(c),--d,e+=1}else{return e}}}var Ed=function Ed(b){return null==b?null:null==D(b)?w(y(b)):F(y(b),Ed(D(b)))},Fd=function Fd(){switch(arguments.length){case 0:return Fd.C();case 1:return Fd.b(arguments[0]);case 2:return Fd.a(arguments[0],arguments[1]);default:return Fd.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};Fd.C=function(){return new vd(null,function(){return null},null,null)};Fd.b=function(a){return new vd(null,function(){return a},null,null)};Fd.a=function(a,b){return new vd(null,function(){var c=w(a);return c?Zc(c)?Ad(Ob(c),Fd.a(Qb(c),b)):F(y(c),Fd.a(ec(c),b)):b},null,null)};Fd.m=function(a,b,c){return function e(a,b){return new vd(null,function(){var c=w(a);return c?Zc(c)?Ad(Ob(c),e(Qb(c),b)):F(y(c),e(ec(c),b)):n(b)?e(y(b),D(b)):null},null,null)}(Fd.a(a,b),c)};Fd.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return Fd.m(b,a,c)};Fd.v=2;var Gd=function Gd(){switch(arguments.length){case 0:return Gd.C();case 1:return Gd.b(arguments[0]);case 2:return Gd.a(arguments[0],arguments[1]);default:return Gd.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};Gd.C=function(){return Ib(Fc)};Gd.b=function(a){return a};Gd.a=function(a,b){return Jb(a,b)};Gd.m=function(a,b,c){for(;;){if(a=Jb(a,b),n(c)){b=y(c),c=D(c)}else{return a}}};Gd.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return Gd.m(b,a,c)};Gd.v=2;function Hd(a,b,c){var d=w(c);if(0===b){return a.C?a.C():a.call(null)}c=Xa(d);var e=Za(d);if(1===b){return a.b?a.b(c):a.b?a.b(c):a.call(null,c)}var d=Xa(e),g=Za(e);if(2===b){return a.a?a.a(c,d):a.a?a.a(c,d):a.call(null,c,d)}var e=Xa(g),h=Za(g);if(3===b){return a.i?a.i(c,d,e):a.i?a.i(c,d,e):a.call(null,c,d,e)}var g=Xa(h),k=Za(h);if(4===b){return a.aa?a.aa(c,d,e,g):a.aa?a.aa(c,d,e,g):a.call(null,c,d,e,g)}var h=Xa(k),m=Za(k);if(5===b){return a.ba?a.ba(c,d,e,g,h):a.ba?a.ba(c,d,e,g,h):a.call(null,c,d,e,g,h)}var k=Xa(m),q=Za(m);if(6===b){return a.xa?a.xa(c,d,e,g,h,k):a.xa?a.xa(c,d,e,g,h,k):a.call(null,c,d,e,g,h,k)}var m=Xa(q),p=Za(q);if(7===b){return a.ya?a.ya(c,d,e,g,h,k,m):a.ya?a.ya(c,d,e,g,h,k,m):a.call(null,c,d,e,g,h,k,m)}var q=Xa(p),z=Za(p);if(8===b){return a.za?a.za(c,d,e,g,h,k,m,q):a.za?a.za(c,d,e,g,h,k,m,q):a.call(null,c,d,e,g,h,k,m,q)}var p=Xa(z),B=Za(z);if(9===b){return a.Aa?a.Aa(c,d,e,g,h,k,m,q,p):a.Aa?a.Aa(c,d,e,g,h,k,m,q,p):a.call(null,c,d,e,g,h,k,m,q,p)}var z=Xa(B),A=Za(B);if(10===b){return a.ma?a.ma(c,d,e,g,h,k,m,q,p,z):a.ma?a.ma(c,d,e,g,h,k,m,q,p,z):a.call(null,c,d,e,g,h,k,m,q,p,z)}var B=Xa(A),G=Za(A);if(11===b){return a.na?a.na(c,d,e,g,h,k,m,q,p,z,B):a.na?a.na(c,d,e,g,h,k,m,q,p,z,B):a.call(null,c,d,e,g,h,k,m,q,p,z,B)}var A=Xa(G),I=Za(G);if(12===b){return a.oa?a.oa(c,d,e,g,h,k,m,q,p,z,B,A):a.oa?a.oa(c,d,e,g,h,k,m,q,p,z,B,A):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A)}var G=Xa(I),K=Za(I);if(13===b){return a.pa?a.pa(c,d,e,g,h,k,m,q,p,z,B,A,G):a.pa?a.pa(c,d,e,g,h,k,m,q,p,z,B,A,G):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G)}var I=Xa(K),O=Za(K);if(14===b){return a.qa?a.qa(c,d,e,g,h,k,m,q,p,z,B,A,G,I):a.qa?a.qa(c,d,e,g,h,k,m,q,p,z,B,A,G,I):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G,I)}var K=Xa(O),V=Za(O);if(15===b){return a.ra?a.ra(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K):a.ra?a.ra(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K)}var O=Xa(V),aa=Za(V);if(16===b){return a.sa?a.sa(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O):a.sa?a.sa(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O)}var V=Xa(aa),Fa=Za(aa);if(17===b){return a.ta?a.ta(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V):a.ta?a.ta(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V)}var aa=Xa(Fa),Ja=Za(Fa);if(18===b){return a.ua?a.ua(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa):a.ua?a.ua(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa)}Fa=Xa(Ja);Ja=Za(Ja);if(19===b){return a.va?a.va(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa):a.va?a.va(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa)}var J=Xa(Ja);Za(Ja);if(20===b){return a.wa?a.wa(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa,J):a.wa?a.wa(c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa,J):a.call(null,c,d,e,g,h,k,m,q,p,z,B,A,G,I,K,O,V,aa,Fa,J)}throw Error("Only up to 20 arguments supported on functions")}function Nc(){switch(arguments.length){case 2:return Id(arguments[0],arguments[1]);case 3:return Jd(arguments[0],arguments[1],arguments[2]);case 4:return Kd(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:var a;a=arguments[0];var b=F(arguments[1],F(arguments[2],F(arguments[3],arguments[4]))),c=a.v;if(a.A){var d=Dd(b,c+1);a=d<=c?Hd(a,d,b):a.A(b)}else{a=a.apply(a,Cd(b))}return a;default:return a=arguments[0],b=F(arguments[1],F(arguments[2],F(arguments[3],F(arguments[4],Ed(new x(Array.prototype.slice.call(arguments,5),0)))))),c=a.v,a.A?(d=Dd(b,c+1),a=d<=c?Hd(a,d,b):a.A(b)):a=a.apply(a,Cd(b)),a}}function Id(a,b){var c=a.v;if(a.A){var d=Dd(b,c+1);return d<=c?Hd(a,d,b):a.A(b)}return a.apply(a,Cd(b))}function Jd(a,b,c){b=F(b,c);c=a.v;if(a.A){var d=Dd(b,c+1);return d<=c?Hd(a,d,b):a.A(b)}return a.apply(a,Cd(b))}function Kd(a,b,c,d){b=F(b,F(c,d));c=a.v;return a.A?(d=Dd(b,c+1),d<=c?Hd(a,d,b):a.A(b)):a.apply(a,Cd(b))}function Ld(a,b){return!E.a(a,b)}function Md(a,b){for(;;){if(null==w(b)){return!0}var c;c=y(b);c=a.b?a.b(c):a.call(null,c);if(n(c)){c=a;var d=D(b);a=c;b=d}else{return!1}}}function Nd(a,b){for(;;){if(w(b)){var c;c=y(b);c=a.b?a.b(c):a.call(null,c);if(n(c)){return c}c=a;var d=D(b);a=c;b=d}else{return null}}}function Od(a){return function(){function b(b,c){return Ca(a.a?a.a(b,c):a.call(null,b,c))}function c(b){return Ca(a.b?a.b(b):a.call(null,b))}function d(){return Ca(a.C?a.C():a.call(null))}var e=null,g=function(){function b(a,d,e){var g=null;if(2<arguments.length){for(var g=0,h=Array(arguments.length-2);g<h.length;){h[g]=arguments[g+2],++g}g=new x(h,0)}return c.call(this,a,d,g)}function c(b,d,e){return Ca(Kd(a,b,d,e))}b.v=2;b.A=function(a){var b=y(a);a=D(a);var d=y(a);a=ec(a);return c(b,d,a)};b.m=c;return b}(),e=function(a,e,m){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,a);case 2:return b.call(this,a,e);default:var q=null;if(2<arguments.length){for(var q=0,p=Array(arguments.length-2);q<p.length;){p[q]=arguments[q+2],++q}q=new x(p,0)}return g.m(a,e,q)}throw Error("Invalid arity: "+arguments.length)};e.v=2;e.A=g.A;e.C=d;e.b=c;e.a=b;e.m=g.m;return e}()}function Pd(a,b){return function d(b,g){return new vd(null,function(){var h=w(g);if(h){if(Zc(h)){for(var k=Ob(h),m=H(k),q=new xd(Array(m),0),p=0;;){if(p<m){Bd(q,function(){var d=b+p,g=v.a(k,p);return a.a?a.a(d,g):a.call(null,d,g)}()),p+=1}else{break}}return Ad(q.ea(),d(b+m,Qb(h)))}return F(function(){var d=y(h);return a.a?a.a(b,d):a.call(null,b,d)}(),d(b+1,ec(h)))}return null},null,null)}(0,b)}var P=function P(){switch(arguments.length){case 1:return P.b(arguments[0]);case 2:return P.a(arguments[0],arguments[1]);case 3:return P.i(arguments[0],arguments[1],arguments[2]);case 4:return P.aa(arguments[0],arguments[1],arguments[2],arguments[3]);default:return P.m(arguments[0],arguments[1],arguments[2],arguments[3],new x(Array.prototype.slice.call(arguments,4),0))}};P.b=function(a){return function(b){return function(){function c(c,d){var e=a.b?a.b(d):a.call(null,d);return b.a?b.a(c,e):b.call(null,c,e)}function d(a){return b.b?b.b(a):b.call(null,a)}function e(){return b.C?b.C():b.call(null)}var g=null,h=function(){function c(a,b,e){var g=null;if(2<arguments.length){for(var g=0,h=Array(arguments.length-2);g<h.length;){h[g]=arguments[g+2],++g}g=new x(h,0)}return d.call(this,a,b,g)}function d(c,e,g){e=Jd(a,e,g);return b.a?b.a(c,e):b.call(null,c,e)}c.v=2;c.A=function(a){var b=y(a);a=D(a);var c=y(a);a=ec(a);return d(b,c,a)};c.m=d;return c}(),g=function(a,b,g){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var p=null;if(2<arguments.length){for(var p=0,z=Array(arguments.length-2);p<z.length;){z[p]=arguments[p+2],++p}p=new x(z,0)}return h.m(a,b,p)}throw Error("Invalid arity: "+arguments.length)};g.v=2;g.A=h.A;g.C=e;g.b=d;g.a=c;g.m=h.m;return g}()}};P.a=function(a,b){return new vd(null,function(){var c=w(b);if(c){if(Zc(c)){for(var d=Ob(c),e=H(d),g=new xd(Array(e),0),h=0;;){if(h<e){Bd(g,function(){var b=v.a(d,h);return a.b?a.b(b):a.call(null,b)}()),h+=1}else{break}}return Ad(g.ea(),P.a(a,Qb(c)))}return F(function(){var b=y(c);return a.b?a.b(b):a.call(null,b)}(),P.a(a,ec(c)))}return null},null,null)};P.i=function(a,b,c){return new vd(null,function(){var d=w(b),e=w(c);if(d&&e){var g=F,h;h=y(d);var k=y(e);h=a.a?a.a(h,k):a.call(null,h,k);d=g(h,P.i(a,ec(d),ec(e)))}else{d=null}return d},null,null)};P.aa=function(a,b,c,d){return new vd(null,function(){var e=w(b),g=w(c),h=w(d);if(e&&g&&h){var k=F,m;m=y(e);var q=y(g),p=y(h);m=a.i?a.i(m,q,p):a.call(null,m,q,p);e=k(m,P.aa(a,ec(e),ec(g),ec(h)))}else{e=null}return e},null,null)};P.m=function(a,b,c,d,e){var g=function k(a){return new vd(null,function(){var b=P.a(w,a);return Md(fd,b)?F(P.a(y,b),k(P.a(ec,b))):null},null,null)};return P.a(function(){return function(b){return Id(a,b)}}(g),g(Ec.m(e,d,xc([c,b],0))))};P.A=function(a){var b=y(a),c=D(a);a=y(c);var d=D(c),c=y(d),e=D(d),d=y(e),e=D(e);return P.m(b,a,c,d,e)};P.v=4;function Qd(a,b){return new vd(null,function(){if(0<a){var c=w(b);return c?F(y(c),Qd(a-1,ec(c))):null}return null},null,null)}function Rd(a,b){return new vd(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=w(b);if(0<a&&e){var g=a-1,e=ec(e);a=g;b=e}else{return e}}}),null,null)}function Sd(a,b){for(var c=w(b),d=w(Rd(a,b));;){if(d){c=D(c),d=D(d)}else{return c}}}function Td(a){return new vd(null,function(){return F(a,Td(a))},null,null)}function Ud(a,b){return Qd(a,Td(b))}var Yd=function Yd(){switch(arguments.length){case 2:return Yd.a(arguments[0],arguments[1]);default:return Yd.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};Yd.a=function(a,b){return new vd(null,function(){var c=w(a),d=w(b);return c&&d?F(y(c),F(y(d),Yd.a(ec(c),ec(d)))):null},null,null)};Yd.m=function(a,b,c){return new vd(null,function(){var d=P.a(w,Ec.m(c,b,xc([a],0)));return Md(fd,d)?Fd.a(P.a(y,d),Id(Yd,P.a(ec,d))):null},null,null)};Yd.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return Yd.m(b,a,c)};Yd.v=2;function Zd(a,b){return new vd(null,function(){var c=w(b);if(c){if(Zc(c)){for(var d=Ob(c),e=H(d),g=new xd(Array(e),0),h=0;;){if(h<e){var k;k=v.a(d,h);k=a.b?a.b(k):a.call(null,k);n(k)&&(k=v.a(d,h),g.add(k));h+=1}else{break}}return Ad(g.ea(),Zd(a,Qb(c)))}d=y(c);c=ec(c);return n(a.b?a.b(d):a.call(null,d))?F(d,Zd(a,c)):Zd(a,c)}return null},null,null)}function $d(a,b){return Zd(Od(a),b)}function ae(a){return function c(a){return new vd(null,function(){var e;n(Wc.b?Wc.b(a):Wc.call(null,a))?(e=xc([w.b?w.b(a):w.call(null,a)],0),e=Id(Fd,Jd(P,c,e))):e=null;return F(a,e)},null,null)}(a)}function be(a){return Zd(function(a){return!Wc(a)},ec(ae(a)))}var ce=function ce(){switch(arguments.length){case 2:return ce.a(arguments[0],arguments[1]);case 3:return ce.i(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};ce.a=function(a,b){var c;null!=a?a&&(a.w&4||a.wb)?(c=Ka(Jb,Ib(a),b),c=Kb(c),c=yc(c,Oc(a))):c=Ka(Sa,a,b):c=Ka(Ec,C,b);return c};ce.i=function(a,b,c){a&&(a.w&4||a.wb)?(b=gd(b,Gd,Ib(a),c),b=Kb(b),a=yc(b,Oc(a))):a=gd(b,Ec,a,c);return a};ce.v=3;function de(a){return ee(2,2,a)}function ee(a,b,c){return new vd(null,function(){var d=w(c);if(d){var e=Qd(a,d);return a===H(e)?F(e,ee(a,b,Rd(b,d))):null}return null},null,null)}function fe(a,b){this.B=a;this.c=b}function ge(a){return new fe(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function he(a){a=a.g;return 32>a?0:a-1>>>5<<5}function ie(a,b,c){for(;;){if(0===b){return c}var d=ge(a);d.c[0]=c;c=d;b-=5}}var je=function je(b,c,d,e){var g=new fe(d.B,Ha(d.c)),h=b.g-1>>>c&31;5===c?g.c[h]=e:(d=d.c[h],b=null!=d?je(b,c-5,d,e):ie(null,c-5,e),g.c[h]=b);return g};function ke(a,b){throw Error([u("No item "),u(a),u(" in vector of length "),u(b)].join(""))}function le(a,b){if(b>=he(a)){return a.$}for(var c=a.root,d=a.shift;;){if(0<d){var e=d-5,c=c.c[b>>>d&31],d=e}else{return c.c}}}function me(a,b){return 0<=b&&b<a.g?le(a,b):ke(b,a.g)}var ne=function ne(b,c,d,e,g){var h=new fe(d.B,Ha(d.c));if(0===c){h.c[e&31]=g}else{var k=e>>>c&31;b=ne(b,c-5,d.c[k],e,g);h.c[k]=b}return h};function oe(a,b,c,d,e,g){this.j=a;this.bb=b;this.c=c;this.ka=d;this.start=e;this.end=g}oe.prototype.ab=function(){return this.j<this.end};oe.prototype.next=function(){32===this.j-this.bb&&(this.c=le(this.ka,this.j),this.bb+=32);var a=this.c[this.j&31];this.j+=1;return a};function Q(a,b,c,d,e,g){this.l=a;this.g=b;this.shift=c;this.root=d;this.$=e;this.o=g;this.h=167668511;this.w=8196}f=Q.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){return"number"===typeof b?v.i(this,b,c):c};f.N=function(a,b){return me(this,b)[b&31]};f.da=function(a,b,c){return 0<=b&&b<this.g?le(this,b)[b&31]:c};f.lb=function(a,b,c){if(0<=b&&b<this.g){return he(this)<=b?(a=Ha(this.$),a[b&31]=c,new Q(this.l,this.g,this.shift,this.root,a,null)):new Q(this.l,this.g,this.shift,ne(this,this.shift,this.root,b,c),this.$,null)}if(b===this.g){return Sa(this,c)}throw Error([u("Index "),u(b),u(" out of bounds  [0,"),u(this.g),u("]")].join(""))};f.Ra=function(){var a=this.g;return new oe(0,0,0<H(this)?le(this,0):null,this,0,a)};f.O=function(){return this.l};f.L=function(){return this.g};f.jb=function(){return v.a(this,0)};f.kb=function(){return v.a(this,1)};f.Sa=function(){return 0<this.g?v.a(this,this.g-1):null};f.Za=function(){return 0<this.g?new uc(this,this.g-1,null):null};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){if(b instanceof Q){if(this.g===H(b)){for(var c=Sb(this),d=Sb(b);;){if(n(c.ab())){var e=c.next(),g=d.next();if(!E.a(e,g)){return!1}}else{return!0}}}else{return!1}}else{return vc(this,b)}};f.La=function(){var a=this;return new qe(a.g,a.shift,function(){var b=a.root;return re.b?re.b(b):re.call(null,b)}(),function(){var b=a.$;return se.b?se.b(b):se.call(null,b)}())};f.M=function(){return yc(Fc,this.l)};f.T=function(a,b){return mc(this,b)};f.U=function(a,b,c){a=0;for(var d=c;;){if(a<this.g){var e=le(this,a);c=e.length;a:{for(var g=0;;){if(g<c){var h=e[g],d=b.a?b.a(d,h):b.call(null,d,h),g=g+1}else{e=d;break a}}}a+=c;d=e}else{return d}}};f.Qa=function(a,b,c){if("number"===typeof b){return ob(this,b,c)}throw Error("Vector's key for assoc must be a number.")};f.K=function(){if(0===this.g){return null}if(32>=this.g){return new x(this.$,0)}var a;a:{a=this.root;for(var b=this.shift;;){if(0<b){b-=5,a=a.c[0]}else{a=a.c;break a}}}return te?te(this,a,0,0):ue.call(null,this,a,0,0)};f.S=function(a,b){return new Q(b,this.g,this.shift,this.root,this.$,this.o)};f.J=function(a,b){if(32>this.g-he(this)){for(var c=this.$.length,d=Array(c+1),e=0;;){if(e<c){d[e]=this.$[e],e+=1}else{break}}d[c]=b;return new Q(this.l,this.g+1,this.shift,this.root,d,null)}c=(d=this.g>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=ge(null),d.c[0]=this.root,e=ie(null,this.shift,new fe(null,this.$)),d.c[1]=e):d=je(this,this.shift,this.root,new fe(null,this.$));return new Q(this.l,this.g+1,c,d,[b],null)};f.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.N(null,c);case 3:return this.da(null,c,d)}throw Error("Invalid arity: "+arguments.length)};a.a=function(a,c){return this.N(null,c)};a.i=function(a,c,d){return this.da(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return this.N(null,a)};f.a=function(a,b){return this.da(null,a,b)};var R=new fe(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Fc=new Q(null,0,5,R,[],jc);function ve(a){var b=a.length;if(32>b){return new Q(null,b,5,R,a,null)}for(var c=32,d=new Q(null,32,5,R,a.slice(0,32),null).La(null);;){if(c<b){var e=c+1,d=Gd.a(d,a[c]),c=e}else{return Kb(d)}}}Q.prototype[Ga]=function(){return gc(this)};function we(a){return Ba(a)?ve(a):Kb(Ka(Jb,Ib(Fc),a))}var xe=function xe(){return xe.m(0<arguments.length?new x(Array.prototype.slice.call(arguments,0),0):null)};xe.m=function(a){return a instanceof x&&0===a.j?ve(a.c):we(a)};xe.v=0;xe.A=function(a){return xe.m(w(a))};function ye(a,b,c,d,e,g){this.ga=a;this.node=b;this.j=c;this.V=d;this.l=e;this.o=g;this.h=32375020;this.w=1536}f=ye.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.W=function(){if(this.V+1<this.node.length){var a;a=this.ga;var b=this.node,c=this.j,d=this.V+1;a=te?te(a,b,c,d):ue.call(null,a,b,c,d);return null==a?null:a}return Rb(this)};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(Fc,this.l)};f.T=function(a,b){var c;c=this.ga;var d=this.j+this.V,e=H(this.ga);c=ze?ze(c,d,e):Ae.call(null,c,d,e);return mc(c,b)};f.U=function(a,b,c){a=this.ga;var d=this.j+this.V,e=H(this.ga);a=ze?ze(a,d,e):Ae.call(null,a,d,e);return nc(a,b,c)};f.R=function(){return this.node[this.V]};f.Y=function(){if(this.V+1<this.node.length){var a;a=this.ga;var b=this.node,c=this.j,d=this.V+1;a=te?te(a,b,c,d):ue.call(null,a,b,c,d);return null==a?C:a}return Qb(this)};f.K=function(){return this};f.gb=function(){var a=this.node;return new yd(a,this.V,a.length)};f.hb=function(){var a=this.j+this.node.length;if(a<Oa(this.ga)){var b=this.ga,c=le(this.ga,a);return te?te(b,c,a,0):ue.call(null,b,c,a,0)}return C};f.S=function(a,b){var c=this.ga,d=this.node,e=this.j,g=this.V;return Be?Be(c,d,e,g,b):ue.call(null,c,d,e,g,b)};f.J=function(a,b){return F(b,this)};f.fb=function(){var a=this.j+this.node.length;if(a<Oa(this.ga)){var b=this.ga,c=le(this.ga,a);return te?te(b,c,a,0):ue.call(null,b,c,a,0)}return null};ye.prototype[Ga]=function(){return gc(this)};function ue(){switch(arguments.length){case 3:var a=arguments[0],b=arguments[1],c=arguments[2];return new ye(a,me(a,b),b,c,null,null);case 4:return te(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Be(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function te(a,b,c,d){return new ye(a,b,c,d,null,null)}function Be(a,b,c,d,e){return new ye(a,b,c,d,e,null)}function Ce(a,b,c,d,e){this.l=a;this.ka=b;this.start=c;this.end=d;this.o=e;this.h=167666463;this.w=8192}f=Ce.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){return"number"===typeof b?v.i(this,b,c):c};f.N=function(a,b){return 0>b||this.end<=this.start+b?ke(b,this.end-this.start):v.a(this.ka,this.start+b)};f.da=function(a,b,c){return 0>b||this.end<=this.start+b?c:v.i(this.ka,this.start+b,c)};f.lb=function(a,b,c){var d=this.start+b;a=this.l;c=Jc.i(this.ka,d,c);b=this.start;var e=this.end,d=d+1,d=e>d?e:d;return De.ba?De.ba(a,c,b,d,null):De.call(null,a,c,b,d,null)};f.O=function(){return this.l};f.L=function(){return this.end-this.start};f.Sa=function(){return v.a(this.ka,this.end-1)};f.Za=function(){return this.start!==this.end?new uc(this,this.end-this.start-1,null):null};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(Fc,this.l)};f.T=function(a,b){return mc(this,b)};f.U=function(a,b,c){return nc(this,b,c)};f.Qa=function(a,b,c){if("number"===typeof b){return ob(this,b,c)}throw Error("Subvec's key for assoc must be a number.")};f.K=function(){var a=this;return function(b){return function d(e){return e===a.end?null:F(v.a(a.ka,e),new vd(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};f.S=function(a,b){var c=this.ka,d=this.start,e=this.end,g=this.o;return De.ba?De.ba(b,c,d,e,g):De.call(null,b,c,d,e,g)};f.J=function(a,b){var c=this.l,d=ob(this.ka,this.end,b),e=this.start,g=this.end+1;return De.ba?De.ba(c,d,e,g,null):De.call(null,c,d,e,g,null)};f.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.N(null,c);case 3:return this.da(null,c,d)}throw Error("Invalid arity: "+arguments.length)};a.a=function(a,c){return this.N(null,c)};a.i=function(a,c,d){return this.da(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return this.N(null,a)};f.a=function(a,b){return this.da(null,a,b)};Ce.prototype[Ga]=function(){return gc(this)};function De(a,b,c,d,e){for(;;){if(b instanceof Ce){c=b.start+c,d=b.start+d,b=b.ka}else{var g=H(b);if(0>c||0>d||c>g||d>g){throw Error("Index out of bounds")}return new Ce(a,b,c,d,e)}}}function Ae(){switch(arguments.length){case 2:var a=arguments[0];return ze(a,arguments[1],H(a));case 3:return ze(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function ze(a,b,c){return De(null,a,b,c,null)}function Ee(a,b){return a===b.B?b:new fe(a,Ha(b.c))}function re(a){return new fe({},Ha(a.c))}function se(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];ad(a,0,b,0,a.length);return b}var Fe=function Fe(b,c,d,e){d=Ee(b.root.B,d);var g=b.g-1>>>c&31;if(5===c){b=e}else{var h=d.c[g];b=null!=h?Fe(b,c-5,h,e):ie(b.root.B,c-5,e)}d.c[g]=b;return d};function qe(a,b,c,d){this.g=a;this.shift=b;this.root=c;this.$=d;this.w=88;this.h=275}f=qe.prototype;f.Ia=function(a,b){if(this.root.B){if(32>this.g-he(this)){this.$[this.g&31]=b}else{var c=new fe(this.root.B,this.$),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.$=d;if(this.g>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+5;d[0]=this.root;d[1]=ie(this.root.B,this.shift,c);this.root=new fe(this.root.B,d);this.shift=e}else{this.root=Fe(this,this.shift,this.root,c)}}this.g+=1;return this}throw Error("conj! after persistent!")};f.Ma=function(){if(this.root.B){this.root.B=null;var a=this.g-he(this),b=Array(a);ad(this.$,0,b,0,a);return new Q(null,this.g,this.shift,this.root,b,null)}throw Error("persistent! called twice")};f.Ta=function(a,b,c){if("number"===typeof b){return Mb(this,b,c)}throw Error("TransientVector's key for assoc! must be a number.")};f.qb=function(a,b,c){var d=this;if(d.root.B){if(0<=b&&b<d.g){return he(this)<=b?d.$[b&31]=c:(a=function(){return function g(a,k){var m=Ee(d.root.B,k);if(0===a){m.c[b&31]=c}else{var q=b>>>a&31,p=g(a-5,m.c[q]);m.c[q]=p}return m}}(this).call(null,d.shift,d.root),d.root=a),this}if(b===d.g){return Jb(this,c)}throw Error([u("Index "),u(b),u(" out of bounds for TransientVector of length"),u(d.g)].join(""))}throw Error("assoc! after persistent!")};f.L=function(){if(this.root.B){return this.g}throw Error("count after persistent!")};f.N=function(a,b){if(this.root.B){return me(this,b)[b&31]}throw Error("nth after persistent!")};f.da=function(a,b,c){return 0<=b&&b<this.g?v.a(this,b):c};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){return"number"===typeof b?v.i(this,b,c):c};f.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.G(null,c);case 3:return this.F(null,c,d)}throw Error("Invalid arity: "+arguments.length)};a.a=function(a,c){return this.G(null,c)};a.i=function(a,c,d){return this.F(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return this.G(null,a)};f.a=function(a,b){return this.F(null,a,b)};function Ge(){this.h=2097152;this.w=0}Ge.prototype.equiv=function(a){return this.s(null,a)};Ge.prototype.s=function(){return!1};var He=new Ge;function Ie(a,b){return dd(Xc(b)?H(a)===H(b)?Md(fd,P.a(function(a){return E.a(Ic(b,y(a),He),Cc(a))},a)):null:null)}function Je(a){this.u=a}Je.prototype.next=function(){if(null!=this.u){var a=y(this.u),b=L(a,0),a=L(a,1);this.u=D(this.u);return{value:[b,a],done:!1}}return{value:null,done:!0}};function Ke(a){return new Je(w(a))}function Le(a){this.u=a}Le.prototype.next=function(){if(null!=this.u){var a=y(this.u);this.u=D(this.u);return{value:[a,a],done:!1}}return{value:null,done:!0}};function Me(a,b){var c;if(b instanceof N){a:{c=a.length;for(var d=b.Ea,e=0;;){if(c<=e){c=-1;break a}var g=a[e];if(g instanceof N&&d===g.Ea){c=e;break a}e+=2}}}else{if(c="string"==typeof b,n(n(c)?c:"number"===typeof b)){a:{for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(b===a[d]){c=d;break a}d+=2}}}else{if(null==b){a:{for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(null==a[d]){c=d;break a}d+=2}}}else{a:{for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(E.a(b,a[d])){c=d;break a}d+=2}}}}}return c}function Ne(a,b,c){this.c=a;this.j=b;this.ca=c;this.h=32374990;this.w=0}f=Ne.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.ca};f.W=function(){return this.j<this.c.length-2?new Ne(this.c,this.j+2,this.ca):null};f.L=function(){return(this.c.length-this.j)/2};f.I=function(){return ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.ca)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return new Q(null,2,5,R,[this.c[this.j],this.c[this.j+1]],null)};f.Y=function(){return this.j<this.c.length-2?new Ne(this.c,this.j+2,this.ca):C};f.K=function(){return this};f.S=function(a,b){return new Ne(this.c,this.j,b)};f.J=function(a,b){return F(b,this)};Ne.prototype[Ga]=function(){return gc(this)};function Te(a,b,c){this.c=a;this.j=b;this.g=c}Te.prototype.ab=function(){return this.j<this.g};Te.prototype.next=function(){var a=new Q(null,2,5,R,[this.c[this.j],this.c[this.j+1]],null);this.j+=2;return a};function pa(a,b,c,d){this.l=a;this.g=b;this.c=c;this.o=d;this.h=16647951;this.w=8196}f=pa.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.keys=function(){return gc(Ue.b?Ue.b(this):Ue.call(null,this))};f.entries=function(){return Ke(w(this))};f.values=function(){return gc(Ve.b?Ve.b(this):Ve.call(null,this))};f.has=function(a){return ed(this,a)};f.get=function(a,b){return this.F(null,a,b)};f.forEach=function(a){for(var b=w(this),c=null,d=0,e=0;;){if(e<d){var g=c.N(null,e),h=L(g,0),g=L(g,1);a.a?a.a(g,h):a.call(null,g,h);e+=1}else{if(b=w(b)){Zc(b)?(c=Ob(b),b=Qb(b),h=c,d=H(c),c=h):(c=y(b),h=L(c,0),c=g=L(c,1),a.a?a.a(c,h):a.call(null,c,h),b=D(b),c=null,d=0),e=0}else{return null}}}};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){a=Me(this.c,b);return-1===a?c:this.c[a+1]};f.Ra=function(){return new Te(this.c,0,2*this.g)};f.O=function(){return this.l};f.L=function(){return this.g};f.I=function(){var a=this.o;return null!=a?a:this.o=a=kc(this)};f.s=function(a,b){if(b&&(b.h&1024||b.Db)){var c=this.c.length;if(this.g===b.L(null)){for(var d=0;;){if(d<c){var e=b.F(null,this.c[d],bd);if(e!==bd){if(E.a(this.c[d+1],e)){d+=2}else{return!1}}else{return!1}}else{return!0}}}else{return!1}}else{return Ie(this,b)}};f.La=function(){return new We({},this.c.length,Ha(this.c))};f.M=function(){return sb(Xe,this.l)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.ib=function(a,b){if(0<=Me(this.c,b)){var c=this.c.length,d=c-2;if(0===d){return Qa(this)}for(var d=Array(d),e=0,g=0;;){if(e>=c){return new pa(this.l,this.g-1,d,null)}E.a(b,this.c[e])||(d[g]=this.c[e],d[g+1]=this.c[e+1],g+=2);e+=2}}else{return this}};f.Qa=function(a,b,c){a=Me(this.c,b);if(-1===a){if(this.g<Ye){a=this.c;for(var d=a.length,e=Array(d+2),g=0;;){if(g<d){e[g]=a[g],g+=1}else{break}}e[d]=b;e[d+1]=c;return new pa(this.l,this.g+1,e,null)}return sb(db(ce.a(Ze,this),b,c),this.l)}if(c===this.c[a+1]){return this}b=Ha(this.c);b[a+1]=c;return new pa(this.l,this.g,b,null)};f.eb=function(a,b){return-1!==Me(this.c,b)};f.K=function(){var a=this.c;return 0<=a.length-2?new Ne(a,0,null):null};f.S=function(a,b){return new pa(b,this.g,this.c,this.o)};f.J=function(a,b){if(Yc(b)){return db(this,v.a(b,0),v.a(b,1))}for(var c=this,d=w(b);;){if(null==d){return c}var e=y(d);if(Yc(e)){c=db(c,v.a(e,0),v.a(e,1)),d=D(d)}else{throw Error("conj on a map takes map entries or seqables of map entries");
}}};f.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.G(null,c);case 3:return this.F(null,c,d)}throw Error("Invalid arity: "+arguments.length)};a.a=function(a,c){return this.G(null,c)};a.i=function(a,c,d){return this.F(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return this.G(null,a)};f.a=function(a,b){return this.F(null,a,b)};var Xe=new pa(null,0,[],lc),Ye=8;pa.prototype[Ga]=function(){return gc(this)};function We(a,b,c){this.Na=a;this.Pa=b;this.c=c;this.h=258;this.w=56}f=We.prototype;f.L=function(){if(n(this.Na)){return hd(this.Pa)}throw Error("count after persistent!")};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){if(n(this.Na)){return a=Me(this.c,b),-1===a?c:this.c[a+1]}throw Error("lookup after persistent!")};f.Ia=function(a,b){if(n(this.Na)){if(b?b.h&2048||b.Eb||(b.h?0:r(hb,b)):r(hb,b)){return Lb(this,$e.b?$e.b(b):$e.call(null,b),af.b?af.b(b):af.call(null,b))}for(var c=w(b),d=this;;){var e=y(c);if(n(e)){var g=e,c=D(c),d=Lb(d,function(){var a=g;return $e.b?$e.b(a):$e.call(null,a)}(),function(){var a=g;return af.b?af.b(a):af.call(null,a)}())}else{return d}}}else{throw Error("conj! after persistent!")}};f.Ma=function(){if(n(this.Na)){return this.Na=!1,new pa(null,hd(this.Pa),this.c,null)}throw Error("persistent! called twice")};f.Ta=function(a,b,c){if(n(this.Na)){a=Me(this.c,b);if(-1===a){if(this.Pa+2<=2*Ye){return this.Pa+=2,this.c.push(b),this.c.push(c),this}a=this.Pa;var d=this.c;a=bf.a?bf.a(a,d):bf.call(null,a,d);return Lb(a,b,c)}c!==this.c[a+1]&&(this.c[a+1]=c);return this}throw Error("assoc! after persistent!")};function bf(a,b){for(var c=Ib(Ze),d=0;;){if(d<a){c=Lb(c,b[d],b[d+1]),d+=2}else{return c}}}function cf(){this.la=!1}function df(a,b){return a===b?!0:a===b||a instanceof N&&b instanceof N&&a.Ea===b.Ea?!0:E.a(a,b)}function ff(a,b,c){a=Ha(a);a[b]=c;return a}function gf(a,b){var c=Array(a.length-2);ad(a,0,c,0,2*b);ad(a,2*(b+1),c,2*b,c.length-2*b);return c}function hf(a,b,c,d){a=a.Ja(b);a.c[c]=d;return a}function jf(a,b,c){this.B=a;this.D=b;this.c=c}f=jf.prototype;f.Ja=function(a){if(a===this.B){return this}var b=id(this.D),c=Array(0>b?4:2*(b+1));ad(this.c,0,c,0,2*b);return new jf(a,this.D,c)};f.Ua=function(){var a=this.c;return kf?kf(a):lf.call(null,a)};f.Fa=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.D&e)){return d}var g=id(this.D&e-1),e=this.c[2*g],g=this.c[2*g+1];return null==e?g.Fa(a+5,b,c,d):df(c,e)?g:d};f.ia=function(a,b,c,d,e,g){var h=1<<(c>>>b&31),k=id(this.D&h-1);if(0===(this.D&h)){var m=id(this.D);if(2*m<this.c.length){a=this.Ja(a);b=a.c;g.la=!0;a:{for(c=2*(m-k),g=2*k+(c-1),m=2*(k+1)+(c-1);;){if(0===c){break a}b[m]=b[g];--m;--c;--g}}b[2*k]=d;b[2*k+1]=e;a.D|=h;return a}if(16<=m){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=mf.ia(a,b+5,c,d,e,g);for(e=d=0;;){if(32>d){0!==(this.D>>>d&1)&&(k[d]=null!=this.c[e]?mf.ia(a,b+5,cc(this.c[e]),this.c[e],this.c[e+1],g):this.c[e+1],e+=2),d+=1}else{break}}return new nf(a,m+1,k)}b=Array(2*(m+4));ad(this.c,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;ad(this.c,2*k,b,2*(k+1),2*(m-k));g.la=!0;a=this.Ja(a);a.c=b;a.D|=h;return a}m=this.c[2*k];h=this.c[2*k+1];if(null==m){return m=h.ia(a,b+5,c,d,e,g),m===h?this:hf(this,a,2*k+1,m)}if(df(d,m)){return e===h?this:hf(this,a,2*k+1,e)}g.la=!0;g=b+5;d=of?of(a,g,m,h,c,d,e):pf.call(null,a,g,m,h,c,d,e);e=2*k;k=2*k+1;a=this.Ja(a);a.c[e]=null;a.c[k]=d;return a};f.ha=function(a,b,c,d,e){var g=1<<(b>>>a&31),h=id(this.D&g-1);if(0===(this.D&g)){var k=id(this.D);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=mf.ha(a+5,b,c,d,e);for(d=c=0;;){if(32>c){0!==(this.D>>>c&1)&&(h[c]=null!=this.c[d]?mf.ha(a+5,cc(this.c[d]),this.c[d],this.c[d+1],e):this.c[d+1],d+=2),c+=1}else{break}}return new nf(null,k+1,h)}a=Array(2*(k+1));ad(this.c,0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;ad(this.c,2*h,a,2*(h+1),2*(k-h));e.la=!0;return new jf(null,this.D|g,a)}var m=this.c[2*h],g=this.c[2*h+1];if(null==m){return k=g.ha(a+5,b,c,d,e),k===g?this:new jf(null,this.D,ff(this.c,2*h+1,k))}if(df(c,m)){return d===g?this:new jf(null,this.D,ff(this.c,2*h+1,d))}e.la=!0;e=this.D;k=this.c;a+=5;a=qf?qf(a,m,g,b,c,d):pf.call(null,a,m,g,b,c,d);c=2*h;h=2*h+1;d=Ha(k);d[c]=null;d[h]=a;return new jf(null,e,d)};f.Va=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.D&d)){return this}var e=id(this.D&d-1),g=this.c[2*e],h=this.c[2*e+1];return null==g?(a=h.Va(a+5,b,c),a===h?this:null!=a?new jf(null,this.D,ff(this.c,2*e+1,a)):this.D===d?null:new jf(null,this.D^d,gf(this.c,e))):df(c,g)?new jf(null,this.D^d,gf(this.c,e)):this};var mf=new jf(null,0,[]);function nf(a,b,c){this.B=a;this.g=b;this.c=c}f=nf.prototype;f.Ja=function(a){return a===this.B?this:new nf(a,this.g,Ha(this.c))};f.Ua=function(){var a=this.c;return rf?rf(a):sf.call(null,a)};f.Fa=function(a,b,c,d){var e=this.c[b>>>a&31];return null!=e?e.Fa(a+5,b,c,d):d};f.ia=function(a,b,c,d,e,g){var h=c>>>b&31,k=this.c[h];if(null==k){return a=hf(this,a,h,mf.ia(a,b+5,c,d,e,g)),a.g+=1,a}b=k.ia(a,b+5,c,d,e,g);return b===k?this:hf(this,a,h,b)};f.ha=function(a,b,c,d,e){var g=b>>>a&31,h=this.c[g];if(null==h){return new nf(null,this.g+1,ff(this.c,g,mf.ha(a+5,b,c,d,e)))}a=h.ha(a+5,b,c,d,e);return a===h?this:new nf(null,this.g,ff(this.c,g,a))};f.Va=function(a,b,c){var d=b>>>a&31,e=this.c[d];if(null!=e){a=e.Va(a+5,b,c);if(a===e){d=this}else{if(null==a){if(8>=this.g){a:{e=this.c;a=e.length;b=Array(2*(this.g-1));c=0;for(var g=1,h=0;;){if(c<a){c!==d&&null!=e[c]&&(b[g]=e[c],g+=2,h|=1<<c),c+=1}else{d=new jf(null,h,b);break a}}}}else{d=new nf(null,this.g-1,ff(this.c,d,a))}}else{d=new nf(null,this.g,ff(this.c,d,a))}}return d}return this};function tf(a,b,c){b*=2;for(var d=0;;){if(d<b){if(df(c,a[d])){return d}d+=2}else{return-1}}}function uf(a,b,c,d){this.B=a;this.Ba=b;this.g=c;this.c=d}f=uf.prototype;f.Ja=function(a){if(a===this.B){return this}var b=Array(2*(this.g+1));ad(this.c,0,b,0,2*this.g);return new uf(a,this.Ba,this.g,b)};f.Ua=function(){var a=this.c;return kf?kf(a):lf.call(null,a)};f.Fa=function(a,b,c,d){a=tf(this.c,this.g,c);return 0>a?d:df(c,this.c[a])?this.c[a+1]:d};f.ia=function(a,b,c,d,e,g){if(c===this.Ba){b=tf(this.c,this.g,d);if(-1===b){if(this.c.length>2*this.g){return b=2*this.g,c=2*this.g+1,a=this.Ja(a),a.c[b]=d,a.c[c]=e,g.la=!0,a.g+=1,a}c=this.c.length;b=Array(c+2);ad(this.c,0,b,0,c);b[c]=d;b[c+1]=e;g.la=!0;d=this.g+1;a===this.B?(this.c=b,this.g=d,a=this):a=new uf(this.B,this.Ba,d,b);return a}return this.c[b+1]===e?this:hf(this,a,b+1,e)}return new jf(a,1<<(this.Ba>>>b&31),[null,this,null,null]).ia(a,b,c,d,e,g)};f.ha=function(a,b,c,d,e){return b===this.Ba?(a=tf(this.c,this.g,c),-1===a?(a=2*this.g,b=Array(a+2),ad(this.c,0,b,0,a),b[a]=c,b[a+1]=d,e.la=!0,new uf(null,this.Ba,this.g+1,b)):E.a(this.c[a],d)?this:new uf(null,this.Ba,this.g,ff(this.c,a+1,d))):new jf(null,1<<(this.Ba>>>a&31),[null,this]).ha(a,b,c,d,e)};f.Va=function(a,b,c){a=tf(this.c,this.g,c);return-1===a?this:1===this.g?null:new uf(null,this.Ba,this.g-1,gf(this.c,hd(a)))};function pf(){switch(arguments.length){case 6:return qf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return of(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function qf(a,b,c,d,e,g){var h=cc(b);if(h===d){return new uf(null,h,2,[b,c,e,g])}var k=new cf;return mf.ha(a,h,b,c,k).ha(a,d,e,g,k)}function of(a,b,c,d,e,g,h){var k=cc(c);if(k===e){return new uf(null,k,2,[c,d,g,h])}var m=new cf;return mf.ia(a,b,k,c,d,m).ia(a,b,e,g,h,m)}function vf(a,b,c,d,e){this.l=a;this.Ga=b;this.j=c;this.u=d;this.o=e;this.h=32374860;this.w=0}f=vf.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.l)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return null==this.u?new Q(null,2,5,R,[this.Ga[this.j],this.Ga[this.j+1]],null):y(this.u)};f.Y=function(){if(null==this.u){var a=this.Ga,b=this.j+2;return wf?wf(a,b,null):lf.call(null,a,b,null)}var a=this.Ga,b=this.j,c=D(this.u);return wf?wf(a,b,c):lf.call(null,a,b,c)};f.K=function(){return this};f.S=function(a,b){return new vf(b,this.Ga,this.j,this.u,this.o)};f.J=function(a,b){return F(b,this)};vf.prototype[Ga]=function(){return gc(this)};function lf(){switch(arguments.length){case 1:return kf(arguments[0]);case 3:return wf(arguments[0],arguments[1],arguments[2]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function kf(a){return wf(a,0,null)}function wf(a,b,c){if(null==c){for(c=a.length;;){if(b<c){if(null!=a[b]){return new vf(null,a,b,null,null)}var d=a[b+1];if(n(d)&&(d=d.Ua(),n(d))){return new vf(null,a,b+2,d,null)}b+=2}else{return null}}}else{return new vf(null,a,b,c,null)}}function xf(a,b,c,d,e){this.l=a;this.Ga=b;this.j=c;this.u=d;this.o=e;this.h=32374860;this.w=0}f=xf.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.l};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.l)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return y(this.u)};f.Y=function(){var a=this.Ga,b=this.j,c=D(this.u);return yf?yf(null,a,b,c):sf.call(null,null,a,b,c)};f.K=function(){return this};f.S=function(a,b){return new xf(b,this.Ga,this.j,this.u,this.o)};f.J=function(a,b){return F(b,this)};xf.prototype[Ga]=function(){return gc(this)};function sf(){switch(arguments.length){case 1:return rf(arguments[0]);case 4:return yf(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}}function rf(a){return yf(null,a,0,null)}function yf(a,b,c,d){if(null==d){for(d=b.length;;){if(c<d){var e=b[c];if(n(e)&&(e=e.Ua(),n(e))){return new xf(a,b,c+1,e,null)}c+=1}else{return null}}}else{return new xf(a,b,c,d,null)}}function zf(a,b,c,d,e,g){this.l=a;this.g=b;this.root=c;this.Z=d;this.fa=e;this.o=g;this.h=16123663;this.w=8196}f=zf.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.keys=function(){return gc(Ue.b?Ue.b(this):Ue.call(null,this))};f.entries=function(){return Ke(w(this))};f.values=function(){return gc(Ve.b?Ve.b(this):Ve.call(null,this))};f.has=function(a){return ed(this,a)};f.get=function(a,b){return this.F(null,a,b)};f.forEach=function(a){for(var b=w(this),c=null,d=0,e=0;;){if(e<d){var g=c.N(null,e),h=L(g,0),g=L(g,1);a.a?a.a(g,h):a.call(null,g,h);e+=1}else{if(b=w(b)){Zc(b)?(c=Ob(b),b=Qb(b),h=c,d=H(c),c=h):(c=y(b),h=L(c,0),c=g=L(c,1),a.a?a.a(c,h):a.call(null,c,h),b=D(b),c=null,d=0),e=0}else{return null}}}};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){return null==b?this.Z?this.fa:c:null==this.root?c:this.root.Fa(0,cc(b),b,c)};f.O=function(){return this.l};f.L=function(){return this.g};f.I=function(){var a=this.o;return null!=a?a:this.o=a=kc(this)};f.s=function(a,b){return Ie(this,b)};f.La=function(){return new Af({},this.root,this.g,this.Z,this.fa)};f.M=function(){return sb(Ze,this.l)};f.ib=function(a,b){if(null==b){return this.Z?new zf(this.l,this.g-1,this.root,!1,null,null):this}if(null==this.root){return this}var c=this.root.Va(0,cc(b),b);return c===this.root?this:new zf(this.l,this.g-1,c,this.Z,this.fa,null)};f.Qa=function(a,b,c){if(null==b){return this.Z&&c===this.fa?this:new zf(this.l,this.Z?this.g:this.g+1,this.root,!0,c,null)}a=new cf;b=(null==this.root?mf:this.root).ha(0,cc(b),b,c,a);return b===this.root?this:new zf(this.l,a.la?this.g+1:this.g,b,this.Z,this.fa,null)};f.eb=function(a,b){return null==b?this.Z:null==this.root?!1:this.root.Fa(0,cc(b),b,bd)!==bd};f.K=function(){if(0<this.g){var a=null!=this.root?this.root.Ua():null;return this.Z?F(new Q(null,2,5,R,[null,this.fa],null),a):a}return null};f.S=function(a,b){return new zf(b,this.g,this.root,this.Z,this.fa,this.o)};f.J=function(a,b){if(Yc(b)){return db(this,v.a(b,0),v.a(b,1))}for(var c=this,d=w(b);;){if(null==d){return c}var e=y(d);if(Yc(e)){c=db(c,v.a(e,0),v.a(e,1)),d=D(d)}else{throw Error("conj on a map takes map entries or seqables of map entries")}}};f.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.G(null,c);case 3:return this.F(null,c,d)}throw Error("Invalid arity: "+arguments.length)};a.a=function(a,c){return this.G(null,c)};a.i=function(a,c,d){return this.F(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return this.G(null,a)};f.a=function(a,b){return this.F(null,a,b)};var Ze=new zf(null,0,null,!1,null,lc);function Kc(a,b){for(var c=a.length,d=0,e=Ib(Ze);;){if(d<c){var g=d+1,e=e.Ta(null,a[d],b[d]),d=g}else{return Kb(e)}}}zf.prototype[Ga]=function(){return gc(this)};function Af(a,b,c,d,e){this.B=a;this.root=b;this.count=c;this.Z=d;this.fa=e;this.h=258;this.w=56}function Bf(a,b){if(a.B){if(b?b.h&2048||b.Eb||(b.h?0:r(hb,b)):r(hb,b)){return Cf(a,$e.b?$e.b(b):$e.call(null,b),af.b?af.b(b):af.call(null,b))}for(var c=w(b),d=a;;){var e=y(c);if(n(e)){var g=e,c=D(c),d=Cf(d,function(){var a=g;return $e.b?$e.b(a):$e.call(null,a)}(),function(){var a=g;return af.b?af.b(a):af.call(null,a)}())}else{return d}}}else{throw Error("conj! after persistent")}}function Cf(a,b,c){if(a.B){if(null==b){a.fa!==c&&(a.fa=c),a.Z||(a.count+=1,a.Z=!0)}else{var d=new cf;b=(null==a.root?mf:a.root).ia(a.B,0,cc(b),b,c,d);b!==a.root&&(a.root=b);d.la&&(a.count+=1)}return a}throw Error("assoc! after persistent!")}f=Af.prototype;f.L=function(){if(this.B){return this.count}throw Error("count after persistent!")};f.G=function(a,b){return null==b?this.Z?this.fa:null:null==this.root?null:this.root.Fa(0,cc(b),b)};f.F=function(a,b,c){return null==b?this.Z?this.fa:c:null==this.root?c:this.root.Fa(0,cc(b),b,c)};f.Ia=function(a,b){return Bf(this,b)};f.Ma=function(){var a;if(this.B){this.B=null,a=new zf(null,this.count,this.root,this.Z,this.fa,null)}else{throw Error("persistent! called twice")}return a};f.Ta=function(a,b,c){return Cf(this,b,c)};var Df=function Df(){return Df.m(0<arguments.length?new x(Array.prototype.slice.call(arguments,0),0):null)};Df.m=function(a){for(var b=w(a),c=Ib(Ze);;){if(b){a=D(D(b));var d=y(b),b=Cc(b),c=Lb(c,d,b),b=a}else{return Kb(c)}}};Df.v=0;Df.A=function(a){return Df.m(w(a))};var Ef=function Ef(){return Ef.m(0<arguments.length?new x(Array.prototype.slice.call(arguments,0),0):null)};Ef.m=function(a){a=a instanceof x&&0===a.j?a.c:Ia(a);for(var b=[],c=0;;){if(c<a.length){var d=a[c],e=a[c+1];-1===Me(b,d)&&(b.push(d),b.push(e));c+=2}else{break}}return new pa(null,b.length/2,b,null)};Ef.v=0;Ef.A=function(a){return Ef.m(w(a))};function Ff(a,b){this.X=a;this.ca=b;this.h=32374988;this.w=0}f=Ff.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.ca};f.W=function(){var a=this.X,a=(a?a.h&128||a.Ya||(a.h?0:r($a,a)):r($a,a))?this.X.W(null):D(this.X);return null==a?null:new Ff(a,this.ca)};f.I=function(){return ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.ca)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return this.X.R(null).jb()};f.Y=function(){var a=this.X,a=(a?a.h&128||a.Ya||(a.h?0:r($a,a)):r($a,a))?this.X.W(null):D(this.X);return null!=a?new Ff(a,this.ca):C};f.K=function(){return this};f.S=function(a,b){return new Ff(this.X,b)};f.J=function(a,b){return F(b,this)};Ff.prototype[Ga]=function(){return gc(this)};function Ue(a){return(a=w(a))?new Ff(a,null):null}function $e(a){return ib(a)}function Gf(a,b){this.X=a;this.ca=b;this.h=32374988;this.w=0}f=Gf.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.O=function(){return this.ca};f.W=function(){var a=this.X,a=(a?a.h&128||a.Ya||(a.h?0:r($a,a)):r($a,a))?this.X.W(null):D(this.X);return null==a?null:new Gf(a,this.ca)};f.I=function(){return ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.ca)};f.T=function(a,b){return zc(b,this)};f.U=function(a,b,c){return Bc(b,c,this)};f.R=function(){return this.X.R(null).kb()};f.Y=function(){var a=this.X,a=(a?a.h&128||a.Ya||(a.h?0:r($a,a)):r($a,a))?this.X.W(null):D(this.X);return null!=a?new Gf(a,this.ca):C};f.K=function(){return this};f.S=function(a,b){return new Gf(this.X,b)};f.J=function(a,b){return F(b,this)};Gf.prototype[Ga]=function(){return gc(this)};function Ve(a){return(a=w(a))?new Gf(a,null):null}function af(a){return jb(a)}function Hf(a,b,c){this.l=a;this.Ka=b;this.o=c;this.h=15077647;this.w=8196}f=Hf.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.keys=function(){return gc(w(this))};f.entries=function(){var a=w(this);return new Le(w(a))};f.values=function(){return gc(w(this))};f.has=function(a){return ed(this,a)};f.forEach=function(a){for(var b=w(this),c=null,d=0,e=0;;){if(e<d){var g=c.N(null,e),h=L(g,0),g=L(g,1);a.a?a.a(g,h):a.call(null,g,h);e+=1}else{if(b=w(b)){Zc(b)?(c=Ob(b),b=Qb(b),h=c,d=H(c),c=h):(c=y(b),h=L(c,0),c=g=L(c,1),a.a?a.a(c,h):a.call(null,c,h),b=D(b),c=null,d=0),e=0}else{return null}}}};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){return cb(this.Ka,b)?b:c};f.O=function(){return this.l};f.L=function(){return Oa(this.Ka)};f.I=function(){var a=this.o;return null!=a?a:this.o=a=kc(this)};f.s=function(a,b){return Tc(b)&&H(this)===H(b)&&Md(function(a){return function(b){return ed(a,b)}}(this),b)};f.La=function(){return new If(Ib(this.Ka))};f.M=function(){return yc(Jf,this.l)};f.pb=function(a,b){return new Hf(this.l,fb(this.Ka,b),null)};f.K=function(){return Ue(this.Ka)};f.S=function(a,b){return new Hf(b,this.Ka,this.o)};f.J=function(a,b){return new Hf(this.l,Jc.i(this.Ka,b,null),null)};f.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.G(null,c);case 3:return this.F(null,c,d)}throw Error("Invalid arity: "+arguments.length)};a.a=function(a,c){return this.G(null,c)};a.i=function(a,c,d){return this.F(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return this.G(null,a)};f.a=function(a,b){return this.F(null,a,b)};var Jf=new Hf(null,Xe,lc);Hf.prototype[Ga]=function(){return gc(this)};function If(a){this.Da=a;this.w=136;this.h=259}f=If.prototype;f.Ia=function(a,b){this.Da=Lb(this.Da,b,null);return this};f.Ma=function(){return new Hf(null,Kb(this.Da),null)};f.L=function(){return H(this.Da)};f.G=function(a,b){return bb.i(this,b,null)};f.F=function(a,b,c){return bb.i(this.Da,b,bd)===bd?c:b};f.call=function(){function a(a,b,c){return bb.i(this.Da,b,bd)===bd?c:b}function b(a,b){return bb.i(this.Da,b,bd)===bd?null:b}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length)};c.a=b;c.i=a;return c}();f.apply=function(a,b){return this.call.apply(this,[this].concat(Ha(b)))};f.b=function(a){return bb.i(this.Da,a,bd)===bd?null:a};f.a=function(a,b){return bb.i(this.Da,a,bd)===bd?b:a};function Kf(a){a=w(a);if(null==a){return Jf}if(a instanceof x&&0===a.j){a=a.c;a:{for(var b=0,c=Ib(Jf);;){if(b<a.length){var d=b+1,c=c.Ia(null,a[b]),b=d}else{break a}}}return c.Ma(null)}for(d=Ib(Jf);;){if(null!=a){b=D(a),d=d.Ia(null,a.R(null)),a=b}else{return Kb(d)}}}function Lf(a){if(a&&(a.w&4096||a.Gb)){return a.name}if("string"===typeof a){return a}throw Error([u("Doesn't support name: "),u(a)].join(""))}var Mf=function Mf(){switch(arguments.length){case 2:return Mf.a(arguments[0],arguments[1]);case 3:return Mf.i(arguments[0],arguments[1],arguments[2]);default:return Mf.m(arguments[0],arguments[1],arguments[2],new x(Array.prototype.slice.call(arguments,3),0))}};Mf.a=function(a,b){return b};Mf.i=function(a,b,c){return(a.b?a.b(b):a.call(null,b))>(a.b?a.b(c):a.call(null,c))?b:c};Mf.m=function(a,b,c,d){return Ka(function(b,c){return Mf.i(a,b,c)},Mf.i(a,b,c),d)};Mf.A=function(a){var b=y(a),c=D(a);a=y(c);var d=D(c),c=y(d),d=D(d);return Mf.m(b,a,c,d)};Mf.v=3;function Nf(a,b){return new vd(null,function(){var c=w(b);if(c){var d;d=y(c);d=a.b?a.b(d):a.call(null,d);c=n(d)?F(y(c),Nf(a,ec(c))):null}else{c=null}return c},null,null)}function Of(a,b,c){this.j=a;this.end=b;this.step=c}Of.prototype.ab=function(){return 0<this.step?this.j<this.end:this.j>this.end};Of.prototype.next=function(){var a=this.j;this.j+=this.step;return a};function Pf(a,b,c,d,e){this.l=a;this.start=b;this.end=c;this.step=d;this.o=e;this.h=32375006;this.w=8192}f=Pf.prototype;f.toString=function(){return Ub(this)};f.equiv=function(a){return this.s(null,a)};f.N=function(a,b){if(b<Oa(this)){return this.start+b*this.step}if(this.start>this.end&&0===this.step){return this.start}throw Error("Index out of bounds")};f.da=function(a,b,c){return b<Oa(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};f.Ra=function(){return new Of(this.start,this.end,this.step)};f.O=function(){return this.l};f.W=function(){return 0<this.step?this.start+this.step<this.end?new Pf(this.l,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new Pf(this.l,this.start+this.step,this.end,this.step,null):null};f.L=function(){return Ca(zb(this))?0:Math.ceil((this.end-this.start)/this.step)};f.I=function(){var a=this.o;return null!=a?a:this.o=a=ic(this)};f.s=function(a,b){return vc(this,b)};f.M=function(){return yc(C,this.l)};f.T=function(a,b){return mc(this,b)};f.U=function(a,b,c){for(a=this.start;;){if(0<this.step?a<this.end:a>this.end){var d=a;c=b.a?b.a(c,d):b.call(null,c,d);a+=this.step}else{return c}}};f.R=function(){return null==zb(this)?null:this.start};f.Y=function(){return null!=zb(this)?new Pf(this.l,this.start+this.step,this.end,this.step,null):C};f.K=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};f.S=function(a,b){return new Pf(b,this.start,this.end,this.step,this.o)};f.J=function(a,b){return F(b,this)};Pf.prototype[Ga]=function(){return gc(this)};function Qf(a,b){return new vd(null,function(){var c=w(b);if(c){var d=y(c),e=a.b?a.b(d):a.call(null,d),d=F(d,Nf(function(b,c){return function(b){return E.a(c,a.b?a.b(b):a.call(null,b))}}(d,e,c,c),D(c)));return F(d,Qf(a,w(Rd(H(d),c))))}return null},null,null)}function yg(a){a:{for(var b=a;;){if(w(b)){b=D(b)}else{break a}}}return a}function zg(a,b){if("string"===typeof b){var c=a.exec(b);return null==c?null:1===H(c)?y(c):we(c)}throw new TypeError("re-find must match against a string.")}function Ag(a){if(a instanceof RegExp){return a}var b=zg(/^\(\?([idmsux]*)\)/,a),c=L(b,0),b=L(b,1);a=kd(a,H(c));return new RegExp(a,n(b)?b:"")}function Bg(a,b,c,d,e,g,h){var k=ka;ka=null==ka?null:ka-1;try{if(null!=ka&&0>ka){return Db(a,"#")}Db(a,c);if(0===wa.b(g)){w(h)&&Db(a,function(){var a=Cg.b(g);return n(a)?a:"..."}())}else{if(w(h)){var m=y(h);b.i?b.i(m,a,g):b.call(null,m,a,g)}for(var q=D(h),p=wa.b(g)-1;;){if(!q||null!=p&&0===p){w(q)&&0===p&&(Db(a,d),Db(a,function(){var a=Cg.b(g);return n(a)?a:"..."}()));break}else{Db(a,d);var z=y(q);c=a;h=g;b.i?b.i(z,c,h):b.call(null,z,c,h);var B=D(q);c=p-1;q=B;p=c}}}return Db(a,e)}finally{ka=k}}function Dg(a,b){for(var c=w(b),d=null,e=0,g=0;;){if(g<e){var h=d.N(null,g);Db(a,h);g+=1}else{if(c=w(c)){d=c,Zc(d)?(c=Ob(d),e=Qb(d),d=c,h=H(c),c=e,e=h):(h=y(d),Db(a,h),c=D(d),d=null,e=0),g=0}else{return null}}}}var Eg={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function Fg(a){return[u('"'),u(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Eg[a]})),u('"')].join("")}function Gg(a,b,c){if(null==a){return Db(b,"nil")}if(void 0===a){return Db(b,"#<undefined>")}if(n(function(){var b=Hc(c,ua);return n(b)?(b=a?a.h&131072||a.Fb?!0:a.h?!1:r(pb,a):r(pb,a))?Oc(a):b:b}())){Db(b,"^");var d=Oc(a);Hg.i?Hg.i(d,b,c):Hg.call(null,d,b,c);Db(b," ")}return null==a?Db(b,"nil"):a.Jb?a.Vb(a,b,c):a&&(a.h&2147483648||a.P)?a.H(null,b,c):(null==a?null:a.constructor)===Boolean||"number"===typeof a?Db(b,""+u(a)):null!=a&&a.constructor===Object?(Db(b,"#js "),d=P.a(function(b){return new Q(null,2,5,R,[ud.b(b),a[b]],null)},$c(a)),Ig.aa?Ig.aa(d,Hg,b,c):Ig.call(null,d,Hg,b,c)):Ba(a)?Bg(b,Hg,"#js ["," ","]",c,a):n("string"==typeof a)?n(ra.b(c))?Db(b,Fg(a)):Db(b,a):Lc(a)?Dg(b,xc(["#<",""+u(a),">"],0)):a instanceof Date?(d=function(a,b){for(var c=""+u(a);;){if(H(c)<b){c=[u("0"),u(c)].join("")}else{return c}}},Dg(b,xc(['#inst "',""+u(a.getUTCFullYear()),"-",d(a.getUTCMonth()+1,2),"-",d(a.getUTCDate(),2),"T",d(a.getUTCHours(),2),":",d(a.getUTCMinutes(),2),":",d(a.getUTCSeconds(),2),".",d(a.getUTCMilliseconds(),3),"-",'00:00"'],0))):n(a instanceof RegExp)?Dg(b,xc(['#"',a.source,'"'],0)):(a?a.h&2147483648||a.P||(a.h?0:r(Gb,a)):r(Gb,a))?Hb(a,b,c):Dg(b,xc(["#<",""+u(a),">"],0))}function Hg(a,b,c){var d=Jg.b(c);return n(d)?(c=Jc.i(c,Kg,Gg),d.i?d.i(a,b,c):d.call(null,a,b,c)):Gg(a,b,c)}function Ig(a,b,c,d){return Bg(c,function(a,c,d){var k=ib(a);b.i?b.i(k,c,d):b.call(null,k,c,d);Db(c," ");a=jb(a);return b.i?b.i(a,c,d):b.call(null,a,c,d)},"{",", ","}",d,w(a))}x.prototype.P=!0;x.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};vd.prototype.P=!0;vd.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};vf.prototype.P=!0;vf.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};Ne.prototype.P=!0;Ne.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};ye.prototype.P=!0;ye.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};td.prototype.P=!0;td.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};uc.prototype.P=!0;uc.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};zf.prototype.P=!0;zf.prototype.H=function(a,b,c){return Ig(this,Hg,b,c)};xf.prototype.P=!0;xf.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};Ce.prototype.P=!0;Ce.prototype.H=function(a,b,c){return Bg(b,Hg,"["," ","]",c,this)};Hf.prototype.P=!0;Hf.prototype.H=function(a,b,c){return Bg(b,Hg,"#{"," ","}",c,this)};zd.prototype.P=!0;zd.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};Gf.prototype.P=!0;Gf.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};Q.prototype.P=!0;Q.prototype.H=function(a,b,c){return Bg(b,Hg,"["," ","]",c,this)};nd.prototype.P=!0;nd.prototype.H=function(a,b){return Db(b,"()")};pa.prototype.P=!0;pa.prototype.H=function(a,b,c){return Ig(this,Hg,b,c)};Pf.prototype.P=!0;Pf.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};Ff.prototype.P=!0;Ff.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};md.prototype.P=!0;md.prototype.H=function(a,b,c){return Bg(b,Hg,"("," ",")",c,this)};var Lg={},Mg=function Mg(b){if(b?b.zb:b){return b.zb(b)}var c;c=Mg[l(null==b?null:b)];if(!c&&(c=Mg._,!c)){throw t("IEncodeJS.-clj->js",b)}return c.call(null,b)};function Ng(a){if(a?n(n(null)?null:a.yb)||(a.mb?0:r(Lg,a)):r(Lg,a)){a=Mg(a)}else{if("string"===typeof a||"number"===typeof a||a instanceof N){a=Og.b?Og.b(a):Og.call(null,a)}else{var b=xc([a],0);a=ma();if(Rc(b)){a=""}else{var c=u,d=new ia;a:{var e=new Tb(d);Hg(y(b),e,a);for(var b=w(D(b)),g=null,h=0,k=0;;){if(k<h){var m=g.N(null,k);Db(e," ");Hg(m,e,a);k+=1}else{if(b=w(b)){g=b,Zc(g)?(b=Ob(g),h=Qb(g),g=b,m=H(b),b=h,h=m):(m=y(g),Db(e," "),Hg(m,e,a),b=D(g),g=null,h=0),k=0}else{break a}}}}a=""+c(d)}}}return a}var Og=function Og(b){if(null==b){return null}if(b?n(n(null)?null:b.yb)||(b.mb?0:r(Lg,b)):r(Lg,b)){return Mg(b)}if(b instanceof N){return Lf(b)}if(Xc(b)){var c={};b=w(b);for(var d=null,e=0,g=0;;){if(g<e){var h=d.N(null,g),k=L(h,0),h=L(h,1);c[Ng(k)]=Og(h);g+=1}else{if(b=w(b)){Zc(b)?(e=Ob(b),b=Qb(b),d=e,e=H(e)):(e=y(b),d=L(e,0),e=L(e,1),c[Ng(d)]=Og(e),b=D(b),d=null,e=0),g=0}else{break}}}return c}if(Sc(b)){c=[];b=w(P.a(Og,b));d=null;for(g=e=0;;){if(g<e){k=d.N(null,g),c.push(k),g+=1}else{if(b=w(b)){d=b,Zc(d)?(b=Ob(d),g=Qb(d),d=b,e=H(b),b=g):(b=y(d),c.push(b),b=D(d),d=null,e=0),g=0}else{break}}}return c}return b},Pg={},Qg=function Qg(b,c){if(b?b.xb:b){return b.xb(b,c)}var d;d=Qg[l(null==b?null:b)];if(!d&&(d=Qg._,!d)){throw t("IEncodeClojure.-js->clj",b)}return d.call(null,b,c)};function Rg(a){var b=xc([Sg,!0],0),c=cd(b)?Id(Df,b):b,d=Hc(c,Sg);return function(a,c,d,k){return function q(p){return(p?n(n(null)?null:p.Nb)||(p.mb?0:r(Pg,p)):r(Pg,p))?Qg(p,Id(Ef,b)):cd(p)?yg(P.a(q,p)):Sc(p)?ce.a(null==p?null:Qa(p),P.a(q,p)):Ba(p)?we(P.a(q,p)):(null==p?null:p.constructor)===Object?ce.a(Xe,function(){return function(a,b,c,d){return function K(e){return new vd(null,function(a,b,c,d){return function(){for(;;){var a=w(e);if(a){if(Zc(a)){var b=Ob(a),c=H(b),g=new xd(Array(c),0);return function(){for(var a=0;;){if(a<c){var e=v.a(b,a),h=g,k=R,z;z=e;z=d.b?d.b(z):d.call(null,z);e=new Q(null,2,5,k,[z,q(p[e])],null);h.add(e);a+=1}else{return!0}}}()?Ad(g.ea(),K(Qb(a))):Ad(g.ea(),null)}var h=y(a);return F(new Q(null,2,5,R,[function(){var a=h;return d.b?d.b(a):d.call(null,a)}(),q(p[h])],null),K(ec(a)))}return null}}}(a,b,c,d),null,null)}}(a,c,d,k)($c(p))}()):p}}(b,c,d,n(d)?ud:u)(a)}var Tg=new N(null,"L","L",-1038307519),Ug=new N(null,"M","M",-1755742206),Vg=new N(null,"SK","SK",-2019305726),Wg=new N(null,"I","I",1827140963),Xg=new N(null,"codex","codex",-1831831581),Yg=new N(null,"CC","CC",-1077285628),ua=new N(null,"meta","meta",1499536964),Zg=new N(null,"protect","protect",-67966332),$g=new N(null,"beta","beta",455605892),va=new N(null,"dup","dup",556298533),ah=new N(null,"verb","verb",-1492655803),bh=new N(null,"R","R",-936662523),ch=new N(null,"AA","AA",2016584549),dh=new N(null,"O","O",795252742),S=new N(null,"A","A",-1688942394),eh=new N(null,"F","F",-1115543258),fh=new N(null,"second","second",-444702010),T=new N(null,"continue","continue",-207346553),gh=new N(null,"W","W",-2035370425),hh=new N(null,"Q","Q",663320520),ih=new N(null,"0","0",351625802),jh=new N(null,"P","P",1668913291),kh=new N(null,"original","original",-445386197),lh=new N(null,"D","D",-8015893),mh=new N(null,"revisited","revisited",-474682004),nh=new N(null,"refined","refined",-448168596),U=new N(null,"B","B",-1422503380),oh=new N(null,"TS","TS",-510110068),ph=new N(null,"J","J",1394734828),qh=new N(null,"Z","Z",459124588),rh=new N(null,"KN","KN",-509476499),Kg=new N(null,"fallback-impl","fallback-impl",-1501286995),sh=new N(null,"T","T",175240877),th=new N(null,"C","C",-173629587),qa=new N(null,"flush-on-newline","flush-on-newline",-151457939),uh=new N(null,"similarity","similarity",1871163855),vh=new N(null,"intact","intact",-1755370897),wh=new N(null,"KS","KS",-1201182352),ra=new N(null,"readably","readably",1129599760),Cg=new N(null,"more-marker","more-marker",-14717935),xh=new N(null,"BB","BB",1873237105),W=new N(null,"stop","stop",-2140911342),yh=new N(null,"E","E",230849842),zh=new N(null,"G","G",-738544397),wa=new N(null,"print-length","print-length",1931866356),Ah=new N(null,"Y","Y",-560717356),Bh=new N(null,"minimum","minimum",-1621006059),Ch=new N(null,"alpha","alpha",-1574982441),Dh=new N(null,"symmetric","symmetric",-960442568),Eh=new N(null,"TK","TK",-906932264),Fh=new N(null,"X","X",1705996313),Gh=new N(null,"H","H",-938148327),Hh=new N(null,"V","V",-1169284006),Ih=new N(null,"first","first",-644103046),Jh=new N(null,"KL","KL",1621356699),Jg=new N(null,"alt-impl","alt-impl",670969595),Kh=new N(null,"U","U",1362002044),Lh=new N(null,"S","S",1267293308),Mh=new N(null,"noun","noun",185846460),Sg=new N(null,"keywordize-keys","keywordize-keys",1310784252),Nh=new N(null,"N","N",-640629860),X=new N(null,"K","K",711741),Oh=new N(null,"match","match",1220059550);function Ph(a,b,c){if("string"===typeof b){return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);
}if(b instanceof RegExp){return a.replace(new RegExp(b.source,"g"),c)}throw[u("Invalid match arg: "),u(b)].join("")}function Qh(a){var b=new ia;for(a=w(a);;){if(a){b.append(""+u(y(a))),a=D(a),null!=a&&b.append("|")}else{return b.toString()}}}function Rh(a){return a.toUpperCase()}function Sh(a){return a.toLowerCase()}function Y(a,b,c){b=0>b?H(a)+b:b;return Id(u,Qd(c,Rd(b,a)))}function Th(a){return ld(a,H(a)-1)}function Uh(a,b){var c=de(b);return Ka(function(){return function(a,b){return Jd(Ph,a,b)}}(c),a,c)}function qi(a){return Ph(a,/[^a-zA-Z]/,"")}function Z(a,b){return null!=zg(a,b)}function ri(a){return P.a(y,Qf(fd,a))}function si(a,b){var c;a:{c=[a];var d=c.length;if(d<=Ye){for(var e=0,g=Ib(Xe);;){if(e<d){var h=e+1,g=Lb(g,c[e],null),e=h}else{c=new Hf(null,Kb(g),null);break a}}}else{for(e=0,g=Ib(Jf);;){if(e<d){h=e+1,g=Jb(g,c[e]),e=h}else{c=Kb(g);break a}}}}return dd(Nd(c,b))}var ti=Od(si);var ui;a:{for(var vi=Ib(Xe),wi=w("AEIOUYWHBPFVCSKGJQXZDTLMNR"),xi=w("000000DD111122222222334556");;){if(wi&&xi){var yi,zi=y(wi),Ai=y(xi);yi=Lb(vi,zi,Ai);var Bi=D(wi),Ci=D(xi),vi=yi,wi=Bi,xi=Ci}else{ui=Kb(vi);break a}}}function Di(a){return ui.b?ui.b(a):ui.call(null,a)}function Ei(a){return ld([u(a),u("000")].join(""),4)}function Fi(a){return Zd(function(a){return Ld("D",a)},P.a(Di,a))}function Gi(a,b){return E.a(y(a),ui.b?ui.b(b):ui.call(null,b))?Rd(1,a):a}function Hi(a){return Z(/W|K|CZ|WITZ/,a)}function Ii(a){return Z(/^A|E|I|O|U|Y$/,a)}var Ji=Od(Z);function Ki(a,b){return 0<b&&E.a("CHAE",Y(a,b,4))?new Q(null,3,5,R,[X,Fh,2],null):n(function(){var c=0===b;return c?(c=si(Y(a,b+1,5),new Q(null,2,5,R,["HARAC","HARIS"],null)),c=n(c)?c:si(Y(a,b+1,3),new Q(null,4,5,R,["HOR","HYM","HIA","HEM"],null)),n(c)?Ld("CHORE",Y(a,0,5)):c):c}())?new Q(null,3,5,R,[X,X,2],null):n(function(){var c=si(Y(a,0,4),new Q(null,2,5,R,["VAN ","VON "],null));if(n(c)||(c=E.a("SCH",Y(a,0,3)))){return c}c=si(Y(a,b-2,6),new Q(null,3,5,R,["ORCHES","ARCHIT","ORCHID"],null));if(n(c)){return c}c=si(Y(a,b+2,1),new Q(null,2,5,R,["T","S"],null));if(n(c)){return c}c=(c=0===b)?c:si(Y(a,b-1,1),new Q(null,4,5,R,["A","O","U","E"],null));return n(c)?si(Y(a,b+2,1),new Q(null,10,5,R,"LRNMBHFVW ".split(""),null)):c}())?new Q(null,3,5,R,[X,X,2],null):0<b?new Q(null,3,5,R,[E.a("MC",Y(a,0,2))?X:Fh,X,2],null):new Q(null,3,5,R,[Fh,Fh,2],null)}function Li(a,b){return n(function(){var c=Z(/^I|E|H$/,Y(a,b+2,1));return n(c)?Ld("HU",Y(a,b+2,2)):c}())?n(function(){var c=E.a(b,1)&&E.a("A",Y(a,b-1,1));return c?c:Z(/^UCCE(E|S)$/,Y(a,b-1,5))}())?new Q(null,3,5,R,[wh,wh,3],null):new Q(null,3,5,R,[Fh,Fh,3],null):new Q(null,3,5,R,[X,X,2],null)}function Mi(a,b){var c;n(Z(/^ (C|Q|G)$/,Y(a,b+1,2)))?c=new Q(null,3,5,R,[X,X,3],null):(c=Z(/^C|K|Q$/,Y(a,b+1,1)),c=n(c)?Ca(si(Y(a,b+1,2),new Q(null,2,5,R,["CE","CI"],null))):c,c=new Q(null,3,5,R,[X,X,n(c)?2:1],null));return c}function Ni(a,b){return n(function(){var c=1<b;return c&&(c=Ii(Y(a,b-2,1)),n(c)&&(c=E.a("ACH",Y(a,b-1,3))))&&(c=Ld("I",Y(a,b+2,1)))?(c=Ld("E",Y(a,b+2,1)))?c:Z(/^(B|M)ACHER$/,Y(a,b-2,6)):c}())?new Q(null,3,5,R,[X,X,2],null):0===b&&E.a("CAESAR",Y(a,b,6))?new Q(null,3,5,R,[Lh,Lh,2],null):E.a("CHIA",Y(a,b,4))?new Q(null,3,5,R,[X,X,2],null):E.a("CH",Y(a,b,2))?Ki(a,b):E.a("CZ",Y(a,b,2))&&Ld("WICZ",Y(a,b-2,4))?new Q(null,3,5,R,[Lh,Fh,2],null):E.a("CIA",Y(a,b+1,3))?new Q(null,3,5,R,[Fh,Fh,3],null):!E.a("CC",Y(a,b,2))||E.a(b,1)||E.a("M",Y(a,0,1))?n(Z(/^C(K|G|Q)$/,Y(a,b,2)))?new Q(null,3,5,R,[X,X,2],null):n(Z(/^C(I|E|Y)$/,Y(a,b,2)))?new Q(null,3,5,R,[Lh,n(Z(/^CI(O|E|A)$/,Y(a,b,3)))?Fh:Lh,2],null):Mi(a,b):Li(a,b)}function Oi(a,b){var c;if(c=2<b){c=(c=E.a("U",Y(a,b-1,1)))?Z(/^C|G|L|R|T$/,Y(a,b-3,1)):c}return n(c)?new Q(null,3,5,R,[eh,eh,2],null):0<b&&Ld("I",Y(a,b-1,1))?new Q(null,3,5,R,[X,X,2],null):new Q(null,3,5,R,[null,null,2],null)}function Pi(a,b){return 0<b&&Ca(Ii(Y(a,b-1,1)))?new Q(null,3,5,R,[X,X,2],null):0===b?E.a("I",Y(a,b+2,1))?new Q(null,3,5,R,[ph,ph,2],null):new Q(null,3,5,R,[X,X,2],null):n(function(){var c=function(){var c=1<b;return c?Z(/^B|H|D$/,Y(a,b-2,1)):c}();if(n(c)){return c}c=function(){var c=2<b;return c?Z(/^B|H|D$/,Y(a,b-3,1)):c}();return n(c)?c:(c=3<b)?Z(/^B|H$/,Y(a,b-4,1)):c}())?new Q(null,3,5,R,[null,null,2],null):Oi(a,b)}function Qi(a,b){var c;if(c=E.a(b,1)){c=Ii(Y(a,0,1)),c=n(c)?Ca(Hi(a)):c}return n(c)?new Q(null,3,5,R,[rh,Nh,2],null):Ld("EY",Y(a,b+2,2))&&Ld("Y",Y(a,b+1,1))&&Ca(Hi(a))?new Q(null,3,5,R,[Nh,rh,2],null):new Q(null,3,5,R,[rh,rh,2],null)}function Ri(a,b){var c;c=Z(/^V(A|O)N $/,Y(a,0,4));c=n(c)?c:E.a("SCH",Y(a,0,3))||E.a("ET",Y(a,b+1,2));return n(c)?new Q(null,3,5,R,[X,X,2],null):E.a("IER ",Y(a,b+1,4))?new Q(null,3,5,R,[ph,ph,2],null):new Q(null,3,5,R,[ph,X,2],null)}function Si(a,b){return E.a("H",Y(a,b+1,1))?Pi(a,b):E.a("N",Y(a,b+1,1))?Qi(a,b):E.a("LI",Y(a,b+1,2))&&Ca(Hi(a))?new Q(null,3,5,R,[Jh,Tg,2],null):n(function(){var c=0===b;return c?(c=E.a("Y",Y(a,b+1,1)))?c:Z(/^(E(S|P|B|L|Y|I|R)|I(B|L|N|E))$/,Y(a,b+1,2)):c}())?new Q(null,3,5,R,[X,ph,2],null):n(function(){var c=E.a("ER",Y(a,b+1,2))||E.a("Y",Y(a,b+1,1));if(c&&(c=function(){var b=/^(D|R|M)ANGER$/,c=Y(a,0,6);return Ji.a?Ji.a(b,c):Ji.call(null,b,c)}(),n(c)&&(c=function(){var c=/^E|I$/,d=Y(a,b-1,1);return Ji.a?Ji.a(c,d):Ji.call(null,c,d)}(),n(c)))){var c=/^(R|O)GY$/,d=Y(a,b-1,3);return Ji.a?Ji.a(c,d):Ji.call(null,c,d)}return c}())?new Q(null,3,5,R,[X,ph,2],null):n(function(){var c=Z(/^E|I|Y$/,Y(a,b+1,1));return n(c)?c:Z(/^(A|O)GGI$/,Y(a,b-1,4))}())?Ri(a,b):E.a("G",Y(a,b+1,1))?new Q(null,3,5,R,[X,X,2],null):new Q(null,3,5,R,[X,X,1],null)}function Ti(a,b,c,d){return n(function(){var e=function(){var d=E.a(c-3,b);return d?Z(/^(ILL(O|A)|ALLE)$/,Y(a,b-1,4)):d}();if(n(e)){return e}e=function(){var b=Z(/^(A|O)S$/,Y(a,d-1,2));return n(b)?b:Z(/^A|O$/,Y(a,d,1))}();return n(e)?E.a("ALLE",Y(a,b-1,4)):e}())?new Q(null,3,5,R,[Tg,null,2],null):new Q(null,3,5,R,[Tg,Tg,2],null)}function Ui(a,b,c){var d=E.a("R",Y(a,b+1,1))?2:1;return n(function(){var d=E.a(c,b);if(d&&(d=Ca(Hi(a)))&&(d=E.a("IE",Y(a,b-2,2)))){var d=/^M(E|A)$/,g=Y(a,b-4,2);return Ji.a?Ji.a(d,g):Ji.call(null,d,g)}return d}())?new Q(null,3,5,R,[null,bh,d],null):new Q(null,3,5,R,[bh,bh,d],null)}function Vi(a,b){return E.a("H",Y(a,b+2,1))?n(Z(/^OO|ER|EN|UY|ED|EM$/,Y(a,b+3,2)))?new Q(null,3,5,R,[n(Z(/^E(R|N)$/,Y(a,b+3,2)))?Fh:Vg,Vg,3],null):new Q(null,3,5,R,[Fh,0===b&&Ca(Ii(Y(a,3,1)))&&Ld("W",Y(a,b+3,1))?Lh:Fh,3],null):n(Z(/^I|E|Y$/,Y(a,b+2,1)))?new Q(null,3,5,R,[Lh,Lh,3],null):new Q(null,3,5,R,[Vg,Vg,3],null)}function Wi(a,b,c){return n(Z(/^(I|Y)SL$/,Y(a,b-1,3)))?new Q(null,3,5,R,[null,null,1],null):0===b&&E.a("SUGAR",Y(a,b,5))?new Q(null,3,5,R,[Fh,Lh,1],null):E.a("SH",Y(a,b,2))?n(Z(/^H(EIM|OEK|OLM|OLZ)$/,Y(a,b+1,4)))?new Q(null,3,5,R,[Lh,Lh,2],null):new Q(null,3,5,R,[Fh,Fh,2],null):n(function(){var c=Z(/^SI(O|A)$/,Y(a,b,3));return n(c)?c:E.a("SIAN",Y(a,b,4))}())?new Q(null,3,5,R,[Lh,n(Hi(a))?Lh:Fh,3],null):n(function(){var c;c=(c=0===b)?Z(/^M|N|L|W$/,Y(a,b+1,1)):c;return n(c)?c:E.a("Z",Y(a,b+1,1))}())?new Q(null,3,5,R,[Lh,Fh,E.a("Z",Y(a,b+1,1))?2:1],null):E.a("SC",Y(a,b,2))?Vi(a,b):new Q(null,3,5,R,[n(function(){var d=E.a(c,b);return d?Z(/^(A|O)I$/,Y(a,b-2,2)):d}())?null:Lh,Lh,n(Z(/^S|Z$/,Y(a,b+1,1)))?2:1],null)}function Xi(a){return Ag([u("("),u(Qh(a)),u(")$")].join(""))}var Yi=Xi(xc("ational tional enci anci izer bli alli entli ousli ization ation ator alism iveness fulness ousness aliti iviti biliti logi".split(" "),0)),Zi=Xi(xc("icate ative alize iciti ical ful ness".split(" "),0)),$i=Xi(xc("al ance ence er ic able ible ant ement ment ent ou ism ate iti ous ive ize".split(" "),0)),aj=Kc("izer biliti fulness iveness logi alli ousness bli alism aliti ator ation anci ational tional iviti ization enci".split(" "),"ize ble ful ive log al ous ble al al ate ate ance ate tion ive ize ence".split(" ")),bj=new pa(null,7,"icate ic ative  alize al iciti ic ical ic ful  ness ".split(" "),null),cj=[u("[^aeiou]"),u("[^aeiou]"),u("*")].join(""),dj=[u("[aeiouy]"),u("[aeiouy]"),u("*")].join("");function ej(a){return function(b){return Z(Ag(a),b)}}var fj=ej([u("^("),u(cj),u(")?"),u(dj),u(cj)].join("")),gj=ej([u("^("),u(cj),u(")?"),u(dj),u(cj),u("("),u(dj),u(")?$")].join("")),hj=ej([u("^("),u(cj),u(")?"),u(dj),u(cj),u(dj),u(cj)].join("")),ij=ej([u("^("),u(cj),u(")?"),u("[aeiouy]")].join("")),jj=ej([u("^"),u(cj),u("[aeiouy]"),u("[^aeiouwxy]$")].join(""));function kj(a,b){var c=zg(a,b),d=L(c,0),e=L(c,1);null!=c?(c=""+u(d),d=b.lastIndexOf(c),c=0>d?b:[u(ld(b,d)),u(kd(b,d+H(c)))].join(""),e=new Q(null,2,5,R,[c,e],null)):e=new Q(null,2,5,R,[null,null],null);return e}function lj(a,b,c){var d=kj(b,a);b=L(d,0);d=L(d,1);return n(n(b)?fj.b?fj.b(b):fj.call(null,b):b)?[u(b),u(Hc(c,d))].join(""):a}var mj=new pa(null,2,[kh,M(/e$/,"",/^(cou|rou|tou|enou|trou)gh/,"$12f",/^gn/,"2n",/^mb/,"m2",/cq/,"2q",/ci/,"si",/ce/,"se",/cy/,"sy",/tch/,"2ch",/c/,"k",/q/,"k",/x/,"k",/v/,"f",/dg/,"2g",/tio/,"sio",/tia/,"sia",/d/,"t",/ph/,"fh",/b/,"p",/sh/,"s2",/z/,"s",/^[aieou]/,"A",/[aeiou]/,"3",/i/,"y",/^y3/,"Y3",/^y/,"A",/y/,"3",/3gh3/,"3kh3",/gh/,"22",/g/,"k",/s+/,"S",/t+/,"T",/p+/,"P",/k+/,"K",/f+/,"F",/m+/,"M",/n+/,"N",/w3/,"W3",/wh3/,"Wh3",/w$/,"3",/w/,"2",/^h/,"A",/h/,"2",/r3/,"R3",/r$/,"3",/r/,"2",/l3/,"L3",/l$/,"3",/l/,"2",/2/,"",/3$/,"A",/3/,""),mh,M(/e$/,"",/^(cou|rou|tou|enou|trou)gh/,"$12f",/^gn/,"2n",/mb$/,"mb",/cq/,"2q",/c([iey])/,"s",/tch/,"2ch",/[cqx]/,"k",/v/,"f",/dg/,"2g",/ti([oa])/,"si",/d/,"t",/ph/,"fh",/b/,"p",/sh/,"s2",/z/,"s",/^[aeiou]/,"A",/[aeiou]/,"3",/j/,"y",/^y3/,"Y3",/^y/,"A",/y/,"3",/3gh3/,"3kh3",/gh/,"22",/g/,"k",/s+/,"S",/t+/,"T",/p+/,"P",/k+/,"K",/f+/,"F",/m+/,"M",/n+/,"N",/w3/,"W3",/wh3/,"Wh3",/w$/,"3",/w/,"2",/^h/,"A",/h/,"2",/r3/,"R3",/r$/,"3",/r/,"2",/l3/,"L3",/l$/,"3",/l/,"2",/2/,"",/3$/,"A",/3/,"")],null);function nj(a,b){var c=qi(Sh(a)),c=Uh(c,mj.b?mj.b(b):mj.call(null,b));return ld([u(c),u(Id(u,Ud(10,"1")))].join(""),10)}var oj=function oj(){switch(arguments.length){case 1:return oj.b(arguments[0]);case 2:return oj.a(arguments[0],arguments[1]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};oj.b=function(a){return nj(a,kh)};oj.a=function(a,b){return nj(a,b)};oj.v=2;function pj(a){return $d(xa,a)}function qj(a,b){return de(Yd.a(a,Fd.a(b,Ud(H(a)-H(b),null))))}function rj(a){return Zd(function(a){return Ld(y(a),Cc(a))},a)}function sj(a){a=qi(Rh(a));a=Jd(u,y(a),Ph(Id(u,Rd(1,a)),/[AEIOU]/,""));a=ri(a);var b=H(a)-3;return Id(u,Fd.a(Qd(3,a),Sd(3<b?3:b,a)))}var tj=new pa(null,2,[kh,new pa(null,2,[Ih,M(/JR$/,"",/SR$/,"",/^MAC/,"MCC",/^KN/,"NN",/^K/,"C",/^(PH|PF)/,"FF",/^SCH/,"SSS",/(EE|IE)$/,"Y",/(DT|RT|RD|NT|ND)$/,"D"),fh,M(/EV/,"AF",/[EIOU]/,"A",/Q/,"G",/Z/,"S",/(M|KN)/,"N",/K/,"C",/SCH/,"SSS",/PH/,"FF",/([^A])H/,"$1",/(.)H[^A]/,"$1",/AW/,"A",/S$/,"",/AY$/,"Y",/A$/,"")],null),nh,new pa(null,2,[Ih,M(/JR$/,"",/SR$/,"",/(S|Z)$/,"",/MAC/,"MC",/PH/,"F",/IX$/,"IC",/EX$/,"EC",/(YE|EE|IE)/,"Y",/(DT|RT|RD|NT|ND)$/,"D",/(.+)EV/,"$1EF"),fh,M(/([AEIOU]+)W/,"$1",/[EIOU]/,"A",/AA+/,"A",/GHT/,"GT",/DG/,"G",/PH/,"F",/(.+)HA/,"$1A",/A+H/,"A",/KN/,"N",/K/,"C",/(.+)M/,"$1N",/(.+)Q/,"$1G",/(SH|SCH)/,"S",/YW/,"Y",/(.+)Y(.+)/,"$1A$2",/WR/,"R",/(.+)Z/,"$1S",/AY$/,"Y",/A+$/,"",/^\w/,"")],null)],null);function uj(a,b){return ri(Uh(a,b))}function vj(a,b){return(tj.b?tj.b(a):tj.call(null,a)).call(null,b)}function wj(a){return function(b){b=qi(fa(Rh(b)));var c=vj(a,Ih);b=Uh(b,c);return Id(u,Fd.a(Qd(1,b),uj(E.a(a,kh)?Id(u,Rd(1,b)):b,vj(a,fh))))}}var xj=new pa(null,2,[kh,wj(kh),nh,wj(nh)],null),yj=function yj(){switch(arguments.length){case 1:return yj.b(arguments[0]);case 2:return yj.a(arguments[0],arguments[1]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};yj.b=function(a){return(xj.b?xj.b(kh):xj.call(null,kh)).call(null,a)};yj.a=function(a,b){var c=ud.b(b);return(xj.b?xj.b(c):xj.call(null,c)).call(null,a)};yj.v=2;var zj=M(/([bcdfhjklmnpqrstvwxyz])\1+/,"$1",/^ae/,"E",/^[gkp]n/,"N",/^wr/,"R",/^x/,"S",/^wh/,"W",/mb$/,"M",/(?!^)sch/,"SK",/th/,"0",/t?ch|sh/,"X",/c(?=ia)/,"X",/[st](?=i[ao])/,"X",/s?c(?=[iey])/,"S",/[cq]/,"K",/dg(?=[iey])/,"J",/d/,"T",/g(?=h[^aeiou])/,"",/gn(ed)?/,"N",/([^g]|^)g(?=[iey])/,"$1J",/g+/,"K",/ph/,"F",/([aeiou])h(?=\b|[^aeiou])/,"$1",/[wy](?![aeiou])/,"",/z/,"S",/v/,"F",/(?!^)[aeiou]+/,"");function Aj(a){return Pd(function(b,c){return new Q(null,3,5,R,[Hc(a,b-1),c,Hc(a,b+1)],null)},a)}function Bj(a,b){return n(function(){var c;c=(c=null==a)?si(b,M("A","H","K","L","O","Q","R","U","X")):c;if(n(c)){return c}c=si(b,M("A","H","K","O","Q","U","X"));return n(c)?(c=M("S","Z"),ti.a?ti.a(a,c):ti.call(null,a,c)):c}())?4:8}function Cj(a){var b=y(a),c=Cc(a);a=Dc(a);return n(si(c,M("A","E","I","O","U","J","Y")))?0:E.a("H",c)?null:n(si(c,M("B","P")))?1:n(si(c,M("D","T")))?n(si(a,M("C","S","Z")))?8:2:n(si(c,M("F","V","W")))?3:n(si(c,M("G","K","Q")))?4:E.a("C",c)?Bj(b,a):E.a("X",c)?n(si(b,M("C","Q","K")))?8:48:E.a("L",c)?5:n(si(c,M("M","N")))?6:E.a("R",c)?7:n(si(c,M("S","Z")))?8:null}ea("clj_fuzzy.phonetics.metaphone",function(a){a=Sh(qi(a));return Rh(Uh(a,zj))});ea("clj_fuzzy.phonetics.double_metaphone",function(a){for(var b=[u(Rh(a)),u("     ")].join(""),c=n(Z(/^GN|KN|PN|WR|PS$/,Y(b,0,2)))?1:0,d=H(a),e=d-1,g=c,h=Fc,k=Fc;;){if(g>d||4<=H(h)&&4<=H(k)){return new Q(null,2,5,R,[Y(Id(u,P.a(Lf,h)),0,4),Y(Id(u,P.a(Lf,k)),0,4)],null)}var m,q=b,p=g,z=d,B=e,A=Y(q,p,1),G;if(n(Ii(A))){G=0===p?new Q(null,3,5,R,[S,S,1],null):new Q(null,3,5,R,[null,null,1],null)}else{var I;if(E.a("B",A)){I=new Q(null,3,5,R,[jh,jh,E.a("B",Y(q,p+1,1))?2:1],null)}else{var K;if(E.a("Ç",A)){K=new Q(null,3,5,R,[Lh,Lh,1],null)}else{var O;if(E.a("C",A)){O=Ni(q,p)}else{var V;if(E.a("D",A)){var aa=q,Fa=p;V=E.a("DG",Y(aa,Fa,2))?n(Z(/^I|E|Y$/,Y(aa,Fa+2,1)))?new Q(null,3,5,R,[ph,ph,3],null):new Q(null,3,5,R,[Eh,Eh,2],null):new Q(null,3,5,R,[sh,sh,n(Z(/^D(T|D)$/,Y(aa,Fa,2)))?2:1],null)}else{var Ja;if(E.a("F",A)){Ja=new Q(null,3,5,R,[eh,eh,E.a("F",Y(q,p+1,1))?2:1],null)}else{var J;if(E.a("G",A)){J=Si(q,p)}else{var ef;if(E.a("H",A)){var na=q,oa=p,sa=void 0,ta=void 0,ya=0===oa,ta=ya?ya:Ii(Y(na,oa-1,1)),sa=n(ta)?Ii(Y(na,oa+1,1)):ta;ef=n(sa)?new Q(null,3,5,R,[Gh,Gh,2],null):new Q(null,3,5,R,[null,null,1],null)}else{var za;if(E.a("J",A)){var Aa=q,Ea=p,Ya=B,Ta;if(E.a("JOSE",Y(Aa,Ea,4))||E.a("SAN ",Y(Aa,0,4))){var gb=Aa;Ta=0===Ea&&E.a(" ",Y(gb,Ea+4,1))||E.a("SAN ",Y(gb,0,4))?new Q(null,3,5,R,[Gh,Gh,1],null):new Q(null,3,5,R,[ph,Gh,1],null)}else{var Pa=Aa,Ua=Ea,Eb=Ya,yb=E.a("J",Y(Pa,Ua+1,1))?2:1,Fb=void 0;if(0===Ua&&Ld("JOSE",Y(Pa,Ua,4))){Fb=new Q(null,3,5,R,[ph,S,yb],null)}else{var Pb=void 0;var tc=Ii(Y(Pa,Ua-1,1));if(n(tc)){var Uc=Ca(Hi(Pa)),Pb=Uc?Z(/^A|O$/,Y(Pa,Ua+1,1)):Uc}else{Pb=tc}var Vc;if(n(Pb)){Vc=new Q(null,3,5,R,[ph,Gh,yb],null)}else{var pe=Pa,Rf=Ua,Sf=yb,Tf=void 0;if(E.a(Eb,Rf)){Tf=new Q(null,3,5,R,[ph,null,Sf],null)}else{var Uf=void 0;var Vf=void 0,Vh=/^L|T|K|S|N|M|B|Z$/,Wh=Y(pe,Rf+1,1),Vf=Ji.a?Ji.a(Vh,Wh):Ji.call(null,Vh,Wh);if(n(Vf)){var Xh=/^S|K|L$/,Yh=Y(pe,Rf-1,1),Uf=Ji.a?Ji.a(Xh,Yh):Ji.call(null,Xh,Yh)}else{Uf=Vf}Tf=n(Uf)?new Q(null,3,5,R,[ph,ph,Sf],null):new Q(null,3,5,R,[null,null,Sf],null)}Vc=Tf}Fb=Vc}Ta=Fb}za=Ta}else{var Wf;if(E.a("K",A)){Wf=new Q(null,3,5,R,[X,X,E.a("K",Y(q,p+1,1))?2:1],null)}else{var Xf;if(E.a("L",A)){var Zh=q,$h=p,Oj=z,Pj=B;Xf=E.a("L",Y(Zh,$h+1,1))?Ti(Zh,$h,Oj,Pj):new Q(null,3,5,R,[Tg,Tg,1],null)}else{var Yf;if(E.a("M",A)){var Zf=q,Oe=p,Qj=B;Yf=E.a("UMB",Y(Zf,Oe-1,3))&&(E.a(Qj-1,Oe)||E.a("ER",Y(Zf,Oe+2,2)))||E.a("M",Y(Zf,Oe+1,1))?new Q(null,3,5,R,[Ug,Ug,2],null):new Q(null,3,5,R,[Ug,Ug,1],null)}else{var $f;if(E.a("N",A)){$f=new Q(null,3,5,R,[Nh,Nh,E.a("N",Y(q,p+1,1))?2:1],null)}else{var ag;if(E.a("Ñ",A)){ag=new Q(null,3,5,R,[Nh,Nh,1],null)}else{var bg;if(E.a("P",A)){var ai=q,bi=p;bg=E.a("H",Y(ai,bi+1,1))?new Q(null,3,5,R,[eh,eh,2],null):new Q(null,3,5,R,[jh,jh,n(Z(/^P|B$/,Y(ai,bi+1,1)))?2:1],null)}else{var cg;if(E.a("Q",A)){cg=new Q(null,3,5,R,[X,X,E.a("Q",Y(q,p+1,1))?2:1],null)}else{var dg;if(E.a("R",A)){dg=Ui(q,p,B)}else{var eg;if(E.a("S",A)){eg=Wi(q,p,B)}else{var fg;if(E.a("T",A)){var od=q,pd=p,gg;if(E.a("TION",Y(od,pd,4))){gg=new Q(null,3,5,R,[Fh,Fh,3],null)}else{var hg;if(n(Z(/^T(IA|CH)$/,Y(od,pd,3)))){hg=new Q(null,3,5,R,[Fh,Fh,3],null)}else{var ig;if(E.a("TH",Y(od,pd,2))||E.a("TTH",Y(od,pd,3))){var jg=od,kg=void 0;var ci=Z(/^(O|A)M$/,Y(jg,pd+2,2));if(n(ci)){kg=ci}else{var di=Z(/^V(A|O)N /,Y(jg,0,4)),kg=n(di)?di:E.a("SCH",Y(jg,0,3))}ig=n(kg)?new Q(null,3,5,R,[sh,sh,2],null):new Q(null,3,5,R,[ih,sh,2],null)}else{ig=new Q(null,3,5,R,[sh,sh,n(Z(/^T|D$/,Y(od,pd+1,1)))?2:1],null)}hg=ig}gg=hg}fg=gg}else{var lg;if(E.a("V",A)){lg=new Q(null,3,5,R,[eh,eh,E.a("V",Y(q,p+1,1))?2:1],null)}else{var Pe;if(E.a("W",A)){var qd=q,rd=p,Rj=B;if(E.a("WR",Y(qd,rd,2))){Pe=new Q(null,3,5,R,[bh,bh,2],null)}else{var mg,ng=qd,Qe=rd,og=void 0;var ei=0===Qe;if(ei){var fi=Ii(Y(ng,Qe+1,1)),og=n(fi)?fi:E.a("WH",Y(ng,Qe,2))}else{og=ei}mg=n(og)?new Q(null,2,5,R,["A",n(Ii(Y(ng,Qe+1,1)))?"F":"A"],null):new Q(null,2,5,R,[null,null],null);var pg=L(mg,0),qg=L(mg,1),rg=void 0;var sg=void 0,gi=E.a(Rj,rd),sg=gi?Ii(Y(qd,rd-1,1)):gi;if(n(sg)){rg=sg}else{var hi=E.a("SCH",Y(qd,0,3)),rg=hi?hi:Z(/^EWSKI|EWSKY|OWSKI|OWSKY$/,Y(qd,rd-1,5))}var tg;if(n(rg)){var Sj=qg;tg=new Q(null,3,5,R,[ud.b(pg),ud.b([u(Sj),u("F")].join("")),1],null)}else{var ug;if(n(Z(/^WI(C|T)Z$/,Y(qd,rd,4)))){var Tj=qg;ug=new Q(null,3,5,R,[ud.b([u(pg),u("TS")].join("")),ud.b([u(Tj),u("FX")].join("")),4],null)}else{ug=new Q(null,3,5,R,[ud.b(pg),ud.b(qg),1],null)}tg=ug}Pe=tg}}else{var Re;if(E.a("X",A)){var vg=q,Vd=p,Uj=B;if(0===Vd){Re=new Q(null,3,5,R,[Lh,Lh,1],null)}else{var ii=n(Z(/^C|X$/,Y(vg,Vd+1,1)))?2:1,wg=void 0;var ji=E.a(Uj,Vd);if(ji){var ki=Z(/^(I|E)AU$/,Y(vg,Vd-3,3)),wg=n(ki)?ki:Z(/^(A|O)U$/,Y(vg,Vd-2,2))}else{wg=ji}Re=Ca(wg)?new Q(null,3,5,R,[wh,wh,ii],null):new Q(null,3,5,R,[null,null,ii],null)}}else{var Se;if(E.a("Z",A)){var Wd=q,Xd=p;if(E.a("H",Y(Wd,Xd+1,1))){Se=new Q(null,3,5,R,[ph,ph,2],null)}else{var li=E.a("Z",Y(Wd,Xd+1,1))?2:1,xg=void 0;var mi=Z(/^Z(O|I|A)$/,Y(Wd,Xd+1,2));if(n(mi)){xg=mi}else{var ni=Hi(Wd),xg=n(ni)?0<Xd&&Ld("T",Y(Wd,Xd-1,1)):ni}Se=n(xg)?new Q(null,3,5,R,[Lh,oh,li],null):new Q(null,3,5,R,[Lh,Lh,li],null)}}else{Se=new Q(null,3,5,R,[null,null,1],null)}Re=Se}Pe=Re}lg=Pe}fg=lg}eg=fg}dg=eg}cg=dg}bg=cg}ag=bg}$f=ag}Yf=$f}Xf=Yf}Wf=Xf}za=Wf}ef=za}J=ef}Ja=J}V=Ja}O=V}K=O}I=K}G=I}m=G;var oi=L(m,0),pi=L(m,1),Vj=L(m,2)+g,Wj=null==oi?h:Ec.a(h,oi),Xj=null==pi?k:Ec.a(k,pi),g=Vj,h=Wj,k=Xj}});ea("clj_fuzzy.phonetics.soundex",function(a){a=qi(Rh(a));var b=y(a),c=Fi(Id(u,Rd(1,a))),d=Gi(c,b);return Ei([u(b),u(Id(u,Zd(function(){return function(a){return Ld("0",a)}}(a,b,c,d),ri(d))))].join(""))});ea("clj_fuzzy.phonetics.nysiis",yj);ea("clj_fuzzy.phonetics.caverphone",oj);ea("clj_fuzzy.phonetics.mra_codex",sj);ea("clj_fuzzy.phonetics.cologne",function(a){a=Aj(qi(Uh(Rh(a),M(/\u00c4/,"A",/\u00d6/,"O",/\u00dc/,"U",/\u00df/,"SS",/PH/,"F"))));return Id(u,$d(jd,ri($d(xa,P.a(Cj,a)))))});var Dj=M(/alistically$/,U,/arizability$/,S,/izationally$/,U,/antialness$/,S,/arisations$/,S,/arizations$/,S,/entialness$/,S,/allically$/,th,/antaneous$/,S,/antiality$/,S,/arisation$/,S,/arization$/,S,/ationally$/,U,/ativeness$/,S,/eableness$/,yh,/entations$/,S,/entiality$/,S,/entialize$/,S,/entiation$/,S,/ionalness$/,S,/istically$/,S,/itousness$/,S,/izability$/,S,/izational$/,S,/ableness$/,S,/arizable$/,S,/entation$/,S,/entially$/,S,/eousness$/,S,/ibleness$/,S,/icalness$/,S,/ionalism$/,S,/ionality$/,S,/ionalize$/,S,/iousness$/,S,/izations$/,S,/lessness$/,S,/ability$/,S,/aically$/,S,/alistic$/,U,/alities$/,S,/ariness$/,yh,/aristic$/,S,/arizing$/,S,/ateness$/,S,/atingly$/,S,/ational$/,U,/atively$/,S,/ativism$/,S,/elihood$/,yh,/encible$/,S,/entally$/,S,/entials$/,S,/entiate$/,S,/entness$/,S,/fulness$/,S,/ibility$/,S,/icalism$/,S,/icalist$/,S,/icality$/,S,/icalize$/,S,/ication$/,zh,/icianry$/,S,/ination$/,S,/ingness$/,S,/ionally$/,S,/isation$/,S,/ishness$/,S,/istical$/,S,/iteness$/,S,/iveness$/,S,/ivistic$/,S,/ivities$/,S,/ization$/,eh,/izement$/,S,/oidally$/,S,/ousness$/,S,/aceous$/,S,/acious$/,U,/action$/,zh,/alness$/,S,/ancial$/,S,/ancies$/,S,/ancing$/,U,/ariser$/,S,/arized$/,S,/arizer$/,S,/atable$/,S,/ations$/,U,/atives$/,S,/eature$/,qh,/efully$/,S,/encies$/,S,/encing$/,S,/ential$/,S,/enting$/,th,/entist$/,S,/eously$/,S,/ialist$/,S,/iality$/,S,/ialize$/,S,/ically$/,S,/icance$/,S,/icians$/,S,/icists$/,S,/ifully$/,S,/ionals$/,S,/ionate$/,lh,/ioning$/,S,/ionist$/,S,/iously$/,S,/istics$/,S,/izable$/,yh,/lessly$/,S,/nesses$/,S,/oidism$/,S,/acies$/,S,/acity$/,S,/aging$/,U,/aical$/,S,/alist$/,S,/alism$/,U,/ality$/,S,/alize$/,S,/allic$/,xh,/anced$/,U,/ances$/,U,/antic$/,th,/arial$/,S,/aries$/,S,/arily$/,S,/arity$/,U,/arize$/,S,/aroid$/,S,/ately$/,S,/ating$/,Wg,/ation$/,U,/ative$/,S,/ators$/,S,/atory$/,S,/ature$/,yh,/early$/,Ah,/ehood$/,S,/eless$/,S,/elity$/,S,/ement$/,S,/enced$/,S,/ences$/,S,/eness$/,yh,/ening$/,yh,/ental$/,S,/ented$/,th,/ently$/,S,/fully$/,S,/ially$/,S,/icant$/,S,/ician$/,S,/icide$/,S,/icism$/,S,/icist$/,S,/icity$/,S,/idine$/,Wg,/iedly$/,S,/ihood$/,S,/inate$/,S,/iness$/,S,/ingly$/,U,/inism$/,ph,/inity$/,Yg,/ional$/,S,/ioned$/,S,/ished$/,S,/istic$/,S,/ities$/,S,/itous$/,S,/ively$/,S,/ivity$/,S,/izers$/,eh,/izing$/,eh,/oidal$/,S,/oides$/,S,/otide$/,S,/ously$/,S,/able$/,S,/ably$/,S,/ages$/,U,/ally$/,U,/ance$/,U,/ancy$/,U,/ants$/,U,/aric$/,S,/arly$/,X,/ated$/,Wg,/ates$/,S,/atic$/,U,/ator$/,S,/ealy$/,Ah,/edly$/,yh,/eful$/,S,/eity$/,S,/ence$/,S,/ency$/,S,/ened$/,yh,/enly$/,yh,/eous$/,S,/hood$/,S,/ials$/,S,/ians$/,S,/ible$/,S,/ibly$/,S,/ical$/,S,/ides$/,Tg,/iers$/,S,/iful$/,S,/ines$/,Ug,/ings$/,Nh,/ions$/,U,/ious$/,S,/isms$/,U,/ists$/,S,/itic$/,Gh,/ized$/,eh,/izer$/,eh,/less$/,S,/lily$/,S,/ness$/,S,/ogen$/,S,/ward$/,S,/wise$/,S,/ying$/,U,/yish$/,S,/acy$/,S,/age$/,U,/aic$/,S,/als$/,xh,/ant$/,U,/ars$/,dh,/ary$/,eh,/ata$/,S,/ate$/,S,/eal$/,Ah,/ear$/,Ah,/ely$/,yh,/ene$/,yh,/ent$/,th,/ery$/,yh,/ese$/,S,/ful$/,S,/ial$/,S,/ian$/,S,/ics$/,S,/ide$/,Tg,/ied$/,S,/ier$/,S,/ies$/,jh,/ily$/,S,/ine$/,Ug,/ing$/,Nh,/ion$/,hh,/ish$/,th,/ism$/,U,/ist$/,S,/ite$/,ch,/ity$/,S,/ium$/,S,/ive$/,S,/ize$/,eh,/oid$/,S,/one$/,bh,/ous$/,S,/ae$/,S,/al$/,xh,/ar$/,Fh,/as$/,U,/ed$/,yh,/en$/,eh,/es$/,yh,/ia$/,S,/ic$/,S,/is$/,S,/ly$/,U,/on$/,Lh,/or$/,sh,/um$/,Kh,/us$/,Hh,/yl$/,bh,/s'/,S,/'s$/,S,/a$/,S,/e$/,S,/i$/,S,/o$/,S,/s$/,gh,/y$/,U),Ej=Kc([Tg,Ug,Wg,Yg,bh,ch,dh,S,eh,gh,hh,jh,lh,U,ph,qh,sh,th,xh,yh,zh,Ah,Fh,Gh,Hh,Kh,Lh,Nh,X],[function(a){return Ca(Z(/(u|x|([^o]s))$/,a))},function(a){return Ca(Z(/[acem]$/,a))},function(a){return Ca(Z(/[oe]$/,a))},function(a){return Z(/l$/,a)},function(a){return Z(/[nr]$/,a)},function(a){return Z(/([dflt]|ph|th|er|or|es)$/,a)},function(a){return Z(/[li]$/,a)},function(){return!0},function(a){var b=(Ej.b?Ej.b(U):Ej.call(null,U)).call(null,a);return n(b)?Ej.a?Ej.a(yh,a):Ej.call(null,yh,a):b},function(a){return Ca(Z(/[su]$/,a))},function(a){var b=(Ej.b?Ej.b(U):Ej.call(null,U)).call(null,a);return n(b)?Ca(Z(/[ln]$/,a)):b},function(a){return Ca(Z(/c$/,a))},function(a){return 4<H(a)},function(a){return 2<H(a)},function(a){return Ca(Z(/[ae]$/,a))},function(a){return Ca(Z(/f$/,a))},function(a){return Z(/(s|[^o]t)$/,a)},function(a){return 3<H(a)},function(a){var b=(Ej.b?Ej.b(U):Ej.call(null,U)).call(null,a);return n(b)?Ca(Z(/(met|ryst)/,a)):b},function(a){return Ca(Z(/e$/,a))},function(a){var b=(Ej.b?Ej.b(U):Ej.call(null,U)).call(null,a);return n(b)?Z(/f$/,a):b},function(a){return Z(/in$/,a)},function(a){return Z(/(l|i|u\we)$/,a)},function(a){return Z(/(t|ll)$/,a)},function(a){return Z(/c$/,a)},function(a){return Z(/[lmnr]$/,a)},function(a){return Z(/(dr|[^t]t)$/,a)},function(a){return n(Z(/s\w{2}$/,a))?(Ej.b?Ej.b(th):Ej.call(null,th)).call(null,a):(Ej.b?Ej.b(U):Ej.call(null,U)).call(null,a)},function(a){var b=(Ej.b?Ej.b(U):Ej.call(null,U)).call(null,a);return n(b)?Z(/(l|i|(u\we))$/,a):b}]),Fj=M(/iev$/,"ief",/uct$/,"uc",/umpt$/,"um",/rpt$/,"rb",/urs$/,"ur",/istr$/,"ister",/metr$/,"meter",/olv$/,"olut",/([^aoi])ul$/,"$1l",/bex$/,"bic",/dex$/,"dic",/pex$/,"pic",/tex$/,"tic",/ax$/,"ac",/ex$/,"ec",/ix$/,"ic",/lux$/,"luc",/uad$/,"uas",/vad$/,"vas",/cid$/,"cis",/lid$/,"lis",/erid$/,"eris",/pand$/,"pans",/([^s])end$/,"$1ens",/ond$/,"ons",/lud$/,"lus",/rud$/,"rus",/([^pt])her$/,"$1hes",/mit$/,"mis",/([^m])ent$/,"$1ens",/ert$/,"ers",/([^n])et$/,"$1es",/(yt|yz)$/,"ys");function Gj(a){return function(b){var c=y(b);b=Cc(b);c=Ph(a,c,"");var d=H(c)<H(a);b=d?(d=1<H(c))?(Ej.b?Ej.b(b):Ej.call(null,b)).call(null,c):d:d;return n(b)?c:null}}function Hj(a){var b=Nd(function(b){return n(Z(y(b),a))?b:null},de(Fj));if(n(b)){var c=L(b,0),b=L(b,1);return Ph(a,c,b)}return a}var Ij=ve("atque quoque neque itaque absque apsque abusque adaeque adusque denique deque susque oblique peraeque plenisque quandoque quisque quaeque cuiusque cuique quemque quamque quaque quique quorumque quarumque quibusque quosque quasque quotusquisque quousque ubique undique usque uterque utique utroque utribique torque coque concoque contorque detorque decoque excoque extorque obtorque optorque retorque recoque attorque incoque intorque praetorque".split(" ")),Jj=new Q(null,19,5,R,[/ibus$/,/ius$/,/ae$/,/am$/,/as$/,/em$/,/es$/,/ia$/,/is$/,/nt$/,/os$/,/ud$/,/um$/,/us$/,/a$/,/e$/,/i$/,/o$/,/u$/],null),Kj=new Q(null,25,5,R,[M(/iuntur$/,"$1i"),M(/erunt$/,"$1i"),M(/untur$/,"$1i"),M(/iunt$/,"$1i"),M(/unt$/,"$1i"),M(/beris$/,"$1bi"),M(/bor$/,"$1bi"),M(/bo$/,"$1bi"),M(/ero$/,"$1eri"),M(/mini$/),M(/ntur$/),M(/stis$/),M(/mur$/),M(/mus$/),M(/ris$/),M(/sti$/),M(/tis$/),M(/tur$/),M(/ns$/),M(/nt$/),M(/ri$/),M(/m$/),M(/r$/),M(/s$/),M(/t$/)],null);function Lj(a){var b=Nd(function(b){return n(Z(b,a))?b:null},Jj);return n(b)?Ph(a,b,""):a}function Mj(a){var b=Nd(function(b){return n(Z(y(b),a))?b:null},Kj);if(n(b)){var c=n(Cc(b))?Ag([u("(.{2,})"),u(y(b))].join("")):y(b),d=function(){var a=Cc(b);return n(a)?a:""}();return Ph(a,c,d)}return a}var Nj=Kc("abcdefghijlmnprstuvyz".split(""),[new Q(null,2,5,R,[M("ia","",vh),M("a","",vh)],null),new Q(null,1,5,R,[M("bb","b",W)],null),new Q(null,3,5,R,[M("ytic","ys",W),M("ic","",T),M("nc","nt",T)],null),new Q(null,6,5,R,[M("dd","d",W),M("ied","y",T),M("ceed","cess",W),M("eed","ee",W),M("ed","",T),M("hood","",T)],null),new Q(null,1,5,R,[M("e","",T)],null),new Q(null,2,5,R,[M("lief","liev",W),M("if","",T)],null),new Q(null,4,5,R,[M("ing","",T),M("iag","y",W),M("ag","",T),M("gg","g",W)],null),new Q(null,3,5,R,[M("th","",vh),M("guish","ct",W),M("ish","",T)],null),new Q(null,2,5,R,[M("i","",vh),M("i","y",T)],null),new Q(null,9,5,R,[M("ij","id",W),M("fuj","fus",W),M("uj","ud",W),M("oj","od",W),M("hej","her",W),M("verj","vert",W),M("misj","mit",W),M("nj","nd",W),M("j","s",W)],null),new Q(null,13,5,R,[M("ifiabl","",W),M("iabl","y",W),M("abl","",T),M("ibl","",W),M("bil","bl",T),M("cl","c",W),M("iful","y",W),M("ful","",T),M("ul","",W),M("ial","",T),M("ual","",T),M("al","",T),M("ll","l",W)],null),new Q(null,4,5,R,[M("ium","",W),M("um","",vh),M("ism","",T),M("mm","m",W)],null),new Q(null,8,5,R,[M("sion","j",T),M("xion","ct",W),M("ion","",T),M("ian","",T),M("an","",T),M("een","",Zg),M("en","",T),M("nn","n",W)],null),new Q(null,2,5,R,[M("ship","",T),M("pp","p",W)],null),new Q(null,9,5,R,[M("er","",T),M("ear","",Zg),M("ar","",W),M("ior","",T),M("or","",T),M("ur","",T),M("rr","r",W),M("tr","t",T),M("ier","y",T)],null),new Q(null,9,5,R,[M("ies","y",T),M("sis","s",W),M("is","",T),M("ness","",T),M("ss","",Zg),M("ous","",T),M("us","",vh),M("s","",T),M("s","",W)],null),new Q(null,14,5,R,[M("plicat","ply",W),M("at","",T),M("ment","",T),M("ent","",T),M("ant","",T),M("ript","rib",W),M("orpt","orb",W),M("duct","duc",W),M("sumpt","sum",W),M("cept","ceiv",W),M("olut","olv",W),M("sist","",Zg),M("ist","",T),M("tt","t",W)],null),new Q(null,2,5,R,[M("iqu","",W),M("ogu","og",W)],null),new Q(null,3,5,R,[M("siv","j",T),M("eiv","",Zg),M("iv","",T)],null),new Q(null,17,5,R,[M("bly","bl",T),M("ily","y",T),M("ply","",Zg),M("ly","",T),M("ogy","og",W),M("phy","ph",W),M("omy","om",W),M("opy","op",W),M("ity","",T),M("ety","",T),M("lty","l",W),M("istry","",W),M("ary","",T),M("ory","",T),M("ify","",W),M("ncy","nt",T),M("acy","",T)],null),new Q(null,2,5,R,[M("iz","",T),M("yz","ys",W)],null)]);function Yj(a){return Z(/[aeiouy]/,""+u(a))}ea("clj_fuzzy.stemmers.lancaster",function(a){a:{a=Sh(qi(a));for(var b=!0;;){var c;c=Dc(a);c=Nj.b?Nj.b(c):Nj.call(null,c);if(n(c)){b:{for(var d=0;;){var e=Ic(c,d,C),g=y(e),h=Cc(e),k=Dc(e),m=H(a)-H(g);if(null==w(e)){c=new Q(null,2,5,R,[!1,a],null);break b}if(Ca(b)&&E.a(k,vh)){d+=1}else{if(0>m||Ld(a.substring(m),g)){d+=1}else{if(E.a(k,Zg)){c=new Q(null,2,5,R,[!1,a],null);break b}e=[u(ld(a,m)),u(h)].join("");g=e;g=n(Yj(y(g)))?1<H(g):(h=2<H(g))?Yj(g):h;if(Ca(g)){d+=1}else{c=E.a(k,T)?new Q(null,2,5,R,[!0,e],null):new Q(null,2,5,R,[!1,e],null);break b}}}}}a=L(c,0);c=L(c,1);if(n(a)){a=c,b=!1}else{a=c;break a}}else{break a}}}return a});ea("clj_fuzzy.stemmers.lovins",function(a){a=Ph(Sh(a),/[^a-zA-Z']/,"");var b=Nd(Gj(a),de(Dj));a=Ph(n(b)?b:a,/([bdglmnprst])\1{1,}$/,"$1");return Hj(a)});ea("clj_fuzzy.stemmers.porter",function(a){if(!(3>H(a))){a=Sh(a);a=n(Z(/^y/,a))?2>H(a)?Rh(a):[u(Rh(ld(a,1))),u(Sh(a.substring(1)))].join(""):a;var b=kj(/(ss|i)es$/,a),c=L(b,0),b=L(b,1),d=kj(/([^s])s$/,a),e=L(d,0),d=L(d,1);a=n(c)?[u(c),u(b)].join(""):n(e)?[u(e),u(d)].join(""):a;n(Z(/eed$/,a))?(c=ld(a,H(a)-3),c=fj.b?fj.b(c):fj.call(null,c),a=n(c)?Th(a):a):n(Z(/(ed|ing)$/,a))&&(c=kj(/(ed|ing)$/,a),b=L(c,0),L(c,1),a=n(ij.b?ij.b(b):ij.call(null,b))?n(Z(/(at|bl|iz)$/,b))?[u(b),u("e")].join(""):n(Z(/([^aeiouylsz])\1$/,b))?Th(b):n(jj.b?jj.b(b):jj.call(null,b))?[u(b),u("e")].join(""):b:a);c=zg(/y$/,a);b=Th(a);a=n(n(c)?ij.b?ij.b(b):ij.call(null,b):c)?[u(b),u("i")].join(""):a;a=lj(a,Yi,aj);a=lj(a,Zi,bj);c=kj($i,a);b=L(c,0);L(c,1);n(n(b)?hj.b?hj.b(b):hj.call(null,b):b)?a=b:(b=kj(/(s|t)(ion)$/,a),c=L(b,0),b=L(b,1),b=[u(c),u(b)].join(""),a=n(n(c)?hj.b?hj.b(b):hj.call(null,b):c)?b:a);n(Z(/e$/,a))&&(c=Th(a),b=hj.b?hj.b(c):hj.call(null,c),n(b)||(b=gj.b?gj.b(c):gj.call(null,c),b=n(b)?Ca(jj.b?jj.b(c):jj.call(null,c)):b),a=n(b)?c:a);c=Z(/ll$/,a);c=n(c)?hj.b?hj.b(a):hj.call(null,a):c;a=n(c)?Th(a):a;a=E.a("Y",y(a))?[u("y"),u(Rd(1,a))].join(""):a}return a});ea("clj_fuzzy.stemmers.schinke",function(a){a=qi(Sh(a));a=Uh(a,M(/j/,"i",/v/,"u"));var b;b=Z(/que$/,a);b=n(b)?si(a,Ij):b;b=n(b)?!1:Ph(a,/que$/,"");if(n(b)){a=Lj(b);var c=Mj(b);return new pa(null,2,[Mh,1<H(a)?a:b,ah,1<H(c)?c:b],null)}return new pa(null,2,[Mh,a,ah,a],null)});function Zj(a,b){var c=Jd(Mf,a,b);return F(c,$d(function(a){return function(b){return a===b}}(c),b))}var ak=function ak(){switch(arguments.length){case 1:return ak.b(arguments[0]);case 2:return ak.a(arguments[0],arguments[1]);default:return ak.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};ak.b=function(a){return a};ak.a=function(a,b){for(;;){if(H(b)<H(a)){var c=a;a=b;b=c}else{return Ka(function(a,b){return function(a,c){return ed(b,c)?a:Qc.a(a,c)}}(a,b),a,a)}}};ak.m=function(a,b,c){a=Zj(function(a){return-H(a)},Ec.m(c,b,xc([a],0)));return Ka(ak,y(a),ec(a))};ak.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return ak.m(b,a,c)};ak.v=2;var bk=function bk(){switch(arguments.length){case 1:return bk.b(arguments[0]);case 2:return bk.a(arguments[0],arguments[1]);default:return bk.m(arguments[0],arguments[1],new x(Array.prototype.slice.call(arguments,2),0))}};bk.b=function(a){return a};bk.a=function(a,b){return H(a)<H(b)?Ka(function(a,d){return ed(b,d)?Qc.a(a,d):a},a,a):Ka(Qc,a,b)};bk.m=function(a,b,c){return Ka(bk,a,Ec.a(c,b))};bk.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return bk.m(b,a,c)};bk.v=2;function ck(a,b){var c=Kf(a),d=Kf(b),e=H(ak.a(c,d)),c=H(c)<H(d)?Ka(Ec,d,c):Ka(Ec,c,d);return 1-e/H(c)}function dk(a,b,c){return Ka(function(a,c){var g=L(c,0),h=L(c,1),k=L(c,2);E.a(k,b)||(g=g<h?g:h,h=Pc(a),g=(g<h?g:h)+1);return Ec.a(a,g)},new Q(null,1,5,R,[y(a)+1],null),P.aa(xe,a,D(a),c))}function ek(a,b,c,d){a=Kf(a);b=Kf(b);var e=H(ak.a(a,b));return e/(e+c*H(bk.a(a,b))+d*H(bk.a(b,a)))}function fk(a,b,c,d){a=Kf(a);var e=Kf(b);b=H(ak.a(a,e));var g=H(bk.a(a,e));a=H(bk.a(e,a));return b/(b+d*(c*(g<a?g:a)+Math.pow(1-c,g>a?g:a)))}var gk=function gk(){return gk.m(arguments[0],arguments[1],2<arguments.length?new x(Array.prototype.slice.call(arguments,2),0):null);
};gk.m=function(a,b,c){var d=cd(c)?Id(Df,c):c;c=Ic(d,Ch,1);var e=Ic(d,$g,1),d=Ic(d,Dh,!1);return(n(d)?fk:ek).call(null,a,b,c,e)};gk.v=2;gk.A=function(a){var b=y(a),c=D(a);a=y(c);c=D(c);return gk.m(b,a,c)};function hk(a,b){return H(a)>=H(b)?new Q(null,2,5,R,[a,b],null):new Q(null,2,5,R,[b,a],null)}function ik(a){a=(a/2|0)-1;return 0<a?a:0}function jk(a,b,c,d,e,g,h){for(var k=h;;){var m=Od(xa).call(null,d);if(n(n(m)?d<=e:m)){Ca(Hc(h,d))&&E.a(b,Hc(c,d))?(g=Jc.i(g,a,b),k=Jc.i(k,d,Hc(c,d)),d=null):d+=1}else{return new Q(null,2,5,R,[g,k],null)}}}function kk(a,b){for(var c=hk(a,b),d=L(c,0),c=L(c,1),e=H(d),g=H(c),h=ik(e),k=0,m=we(Ud(e,null)),q=we(Ud(e,null));;){if(k<e){var p=function(){var a=k-h;return 0<a?a:0}(),z=function(){var a=k+h+1;return a<g?a:g}(),q=jk(k,Hc(d,k),c,p,z,m,q),m=L(q,0),q=L(q,1),k=k+1}else{return new Q(null,2,5,R,[$d(xa,m),$d(xa,q)],null)}}}function lk(a,b){var c=H(a)-H(b),d=de(Yd.a(a,Fd.a(b,Ud(c,null))));return H(Zd(function(){return function(a){return Ld(y(a),Cc(a))}}(c,d),d))/2}function mk(a,b){var c=kk(a,b),d=L(c,0),e=L(c,1),c=H(d),d=lk(d,e);return 0===c?0:(c/H(a)+c/H(b)+(c-d)/c)/3}function nk(a,b){if(E.a(a,b)){return 1}if(2>H(a)&&2>H(b)){return 0}var c=Rh(Ph(a,/\s+/,"")),c=Kf(ee(2,1,c)),d=Rh(Ph(b,/\s+/,"")),d=Kf(ee(2,1,d)),e=H(c)+H(d);return 2*H(ak.a(c,d))/e}ea("clj_fuzzy.metrics.levenshtein",function(a,b){return Rc(a)&&Rc(b)?0:Rc(a)?H(b):Rc(b)?H(a):Pc(Ka(function(a,d){return dk(a,d,b)},P.i(function(a,b){return b},F(null,b),new Pf(null,0,Number.MAX_VALUE,1,null)),a))});ea("clj_fuzzy.metrics.dice",nk);ea("clj_fuzzy.metrics.sorensen",nk);ea("clj_fuzzy.metrics.mra_comparison",function(a,b){var c=sj(a),d=sj(b),e=H(c)-H(d);if(3>Math.abs(e)){var e=H(c)+H(d),e=4>=e?5:4<e&&7>=e?4:7<e&&11>=e?3:2,g,h;g=H(c);h=H(d);h=g>h?new Q(null,2,5,R,[c,d],null):new Q(null,2,5,R,[d,c],null);g=L(h,0);h=L(h,1);h=rj(qj(g,h));g=pj(P.a(y,h));h=pj(P.a(Cc,h));g=qj(sd(g),sd(h));g=6-H(pj(rj(g)));return new pa(null,4,[Bh,e,uh,g,Xg,new Q(null,2,5,R,[c,d],null),Oh,g>=e],null)}return null});ea("clj_fuzzy.metrics.jaccard",ck);ea("clj_fuzzy.metrics.tanimoto",ck);ea("clj_fuzzy.metrics.hamming",function(a,b){var c=H(a),d=H(b);return E.a(c,d)?H($d(function(){return function(a){return E.a(y(a),Cc(a))}}(c,d),de(Yd.a(a,b)))):null});ea("clj_fuzzy.metrics.jaro",mk);ea("clj_fuzzy.metrics.jaro_winkler",function(a,b){var c=mk(a,b);a:{for(var d=0,e=0;;){if(4>d){E.a(Hc(a,d),Hc(b,d))?(e+=1,d+=1):d=5}else{break a}}}return c+.1*e*(1-c)});ea("clj_fuzzy.metrics.tversky",gk);function ok(a,b){return function(){function c(a){var b=null;if(0<arguments.length){for(var b=0,c=Array(arguments.length-0);b<c.length;){c[b]=arguments[b+0],++b}b=new x(c,0)}return d.call(this,b)}function d(c){var d=Qd(b,c);c=y(Rd(b,c));c=Rg(c);c=be(w(c));return Id(a,Fd.a(d,c))}c.v=0;c.A=function(a){a=w(a);return d(a)};c.m=d;return c}()}var pk=function pk(){switch(arguments.length){case 1:return pk.b(arguments[0]);case 2:return pk.a(arguments[0],arguments[1]);default:throw Error([u("Invalid arity: "),u(arguments.length)].join(""))}};ea("clj_fuzzy.js.convert_keyword_fn",pk);pk.b=function(a){return ok(a,0)};pk.a=function(a,b){return ok(a,b)};pk.v=2;ea("clj_fuzzy.js.clj_to_js",Og)})();(function(){var js=clj_fuzzy.js,mra=clj_fuzzy.metrics.mra_comparison,tversky=clj_fuzzy.metrics.tversky,dm=clj_fuzzy.phonetics.double_metaphone,schinke=clj_fuzzy.stemmers.schinke;clj_fuzzy.metrics.mra_comparison=function(){return js.clj_to_js(mra.apply(null,arguments))};clj_fuzzy.phonetics.double_metaphone=function(){return js.clj_to_js(dm.apply(null,arguments))};clj_fuzzy.stemmers.schinke=function(){return js.clj_to_js(schinke.apply(null,arguments))};clj_fuzzy.metrics.tversky=js.convert_keyword_fn(tversky,2);delete clj_fuzzy.js})();if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=clj_fuzzy;exports.clj_fuzzy=clj_fuzzy}else if(typeof define==="function"&&define.amd)define("clj_fuzzy",[],function(){return clj_fuzzy});

},{}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itsSet = itsSet;

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function itsSet(val) {
  var checkVal = function checkVal(v) {
    return typeof v !== 'undefined' && v !== null;
  };
  if (!checkVal(val)) return false;
  if (val.constructor === Array) {
    return val.every(function (v) {
      return checkVal(v);
    });
  } else if (arguments.length === 2) {
    return checkVal((0, _lodash2.default)(arguments[0], arguments[1]));
  }
  return true;
}

exports.default = itsSet;
},{"lodash.get":89}],89:[function(require,module,exports){
(function (global){(function (){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

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

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
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

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
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

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
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

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
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
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
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

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
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
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
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

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _util = require('./util');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getNumber = function getNumber(region) {
  var sum = 0;
  var decimalReached = false;
  var decimalUnits = [];
  region.subRegions.forEach(function (subRegion) {
    var tokens = subRegion.tokens;
    var type = subRegion.type;

    var subRegionSum = 0;
    if (type === _constants.TOKEN_TYPE.DECIMAL) {
      decimalReached = true;
      return;
    }
    if (decimalReached) {
      decimalUnits.push(subRegion);
      return;
    }
    switch (type) {
      case _constants.TOKEN_TYPE.MAGNITUDE:
      case _constants.TOKEN_TYPE.HUNDRED:
        {
          var _ret = function () {
            subRegionSum = 1;
            var tokensCount = tokens.length;
            tokens.reduce(function (acc, token, i) {
              if (token.type === _constants.TOKEN_TYPE.HUNDRED) {
                var _ret2 = function () {
                  var tokensToAdd = tokensCount - 1 ? tokens.slice(i + 1) : [];
                  tokensToAdd = tokensToAdd.filter(function (tokenToAdd, j) {
                    return j === 0 || tokensToAdd[j - 1].type > tokenToAdd.type;
                  });
                  var tokensToAddSum = tokensToAdd.reduce(function (acc2, tokenToAdd) {
                    return acc2 + _constants.NUMBER[tokenToAdd.lowerCaseValue];
                  }, 0);
                  return {
                    v: acc.concat((0, _extends3.default)({}, tokens[i + 1], {
                      numberValue: tokensToAddSum + _constants.NUMBER[token.lowerCaseValue] * 100
                    }))
                  };
                }();

                if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
              }
              if (i > 0 && tokens[i - 1].type === _constants.TOKEN_TYPE.HUNDRED) return acc;
              if (i > 1 && tokens[i - 1].type === _constants.TOKEN_TYPE.TEN && tokens[i - 2].type === _constants.TOKEN_TYPE.HUNDRED) return acc;
              return acc.concat({ token: token, numberValue: _constants.NUMBER[token.lowerCaseValue] });
            }, []).forEach(function (_ref) {
              var numberValue = _ref.numberValue;

              subRegionSum *= numberValue;
            });
            return 'break';
          }();

          if (_ret === 'break') break;
        }
      case _constants.TOKEN_TYPE.UNIT:
      case _constants.TOKEN_TYPE.TEN:
        {
          tokens.forEach(function (token) {
            subRegionSum += _constants.NUMBER[token.lowerCaseValue];
          });
          break;
        }
      // no default
    }
    sum += subRegionSum;
  });

  var currentDecimalPlace = 1;
  decimalUnits.forEach(function (_ref2) {
    var tokens = _ref2.tokens;

    tokens.forEach(function (_ref3) {
      var lowerCaseValue = _ref3.lowerCaseValue;

      sum += _constants.NUMBER[lowerCaseValue] / Math.pow(10, currentDecimalPlace);
      currentDecimalPlace += 1;
    });
  });

  return sum;
};

var replaceRegionsInText = function replaceRegionsInText(regions, text) {
  var replaced = text;
  var offset = 0;
  regions.forEach(function (region) {
    var length = region.end - region.start + 1;
    var replaceWith = '' + getNumber(region);
    replaced = (0, _util.splice)(replaced, region.start + offset, length, replaceWith);
    offset -= length - replaceWith.length;
  });
  return replaced;
};

exports.default = function (_ref4) {
  var regions = _ref4.regions;
  var text = _ref4.text;

  if (!regions) return text;
  if (regions[0].end - regions[0].start === text.length - 1) return getNumber(regions[0]);
  return replaceRegionsInText(regions, text);
};
},{"./constants":91,"./util":95,"babel-runtime/helpers/extends":6,"babel-runtime/helpers/typeof":8}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BLACKLIST_SINGULAR_WORDS = exports.ALL_WORDS = exports.TOKEN_TYPE = exports.PUNCTUATION = exports.DECIMALS = exports.JOINERS = exports.NUMBER_WORDS = exports.MAGNITUDE_KEYS = exports.TEN_KEYS = exports.UNIT_KEYS = exports.NUMBER = exports.MAGNITUDE = exports.TEN = exports.UNIT = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNIT = exports.UNIT = {
  zero: 0,
  first: 1,
  one: 1,
  second: 2,
  two: 2,
  third: 3,
  thirteenth: 13,
  thirteen: 13,
  three: 3,
  fourth: 4,
  fourteenth: 14,
  fourteen: 14,
  four: 4,
  fifteenth: 15,
  fifteen: 15,
  fifth: 5,
  five: 5,
  sixth: 6,
  sixteenth: 16,
  sixteen: 16,
  six: 6,
  seventeenth: 17,
  seventeen: 17,
  seventh: 7,
  seven: 7,
  eighteenth: 18,
  eighteen: 18,
  eighth: 8,
  eight: 8,
  nineteenth: 19,
  nineteen: 19,
  ninth: 9,
  nine: 9,
  tenth: 10,
  ten: 10,
  eleventh: 11,
  eleven: 11,
  twelfth: 12,
  twelve: 12,
  a: 1
};

var TEN = exports.TEN = {
  twenty: 20,
  twentieth: 20,
  thirty: 30,
  thirtieth: 30,
  forty: 40,
  fortieth: 40,
  fifty: 50,
  fiftieth: 50,
  sixty: 60,
  sixtieth: 60,
  seventy: 70,
  seventieth: 70,
  eighty: 80,
  eightieth: 80,
  ninety: 90,
  ninetieth: 90
};

var MAGNITUDE = exports.MAGNITUDE = {
  hundred: 100,
  hundredth: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
  quadrillion: 1000000000000000,
  quintillion: 1000000000000000000,
  sextillion: 1000000000000000000000,
  septillion: 1000000000000000000000000,
  octillion: 1000000000000000000000000000,
  nonillion: 1000000000000000000000000000000,
  decillion: 1000000000000000000000000000000000
};

var NUMBER = exports.NUMBER = (0, _extends3.default)({}, UNIT, TEN, MAGNITUDE);

var UNIT_KEYS = exports.UNIT_KEYS = (0, _keys2.default)(UNIT);
var TEN_KEYS = exports.TEN_KEYS = (0, _keys2.default)(TEN);
var MAGNITUDE_KEYS = exports.MAGNITUDE_KEYS = (0, _keys2.default)(MAGNITUDE);

var NUMBER_WORDS = exports.NUMBER_WORDS = [].concat((0, _toConsumableArray3.default)(UNIT_KEYS), (0, _toConsumableArray3.default)(TEN_KEYS), (0, _toConsumableArray3.default)(MAGNITUDE_KEYS));

var JOINERS = exports.JOINERS = ['and'];
var DECIMALS = exports.DECIMALS = ['point', 'dot'];

var PUNCTUATION = exports.PUNCTUATION = ['.', ',', '\\', '#', '!', '$', '%', '^', '&', '/', '*', ';', ':', '{', '}', '=', '-', '_', '`', '~', '(', ')', ' '];

var TOKEN_TYPE = exports.TOKEN_TYPE = {
  UNIT: 0,
  TEN: 1,
  MAGNITUDE: 2,
  DECIMAL: 3,
  HUNDRED: 4
};

var ALL_WORDS = exports.ALL_WORDS = [].concat((0, _toConsumableArray3.default)(NUMBER_WORDS), JOINERS, DECIMALS);

var BLACKLIST_SINGULAR_WORDS = exports.BLACKLIST_SINGULAR_WORDS = ['a'];
},{"babel-runtime/core-js/object/keys":3,"babel-runtime/helpers/extends":6,"babel-runtime/helpers/toConsumableArray":7}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cljFuzzy = require('clj-fuzzy');

var _cljFuzzy2 = _interopRequireDefault(_cljFuzzy);

var _itsSet = require('its-set');

var _itsSet2 = _interopRequireDefault(_itsSet);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (word, haystack) {
  return (haystack || _constants.ALL_WORDS).map(function (numberWord) {
    return {
      word: numberWord,
      score: _cljFuzzy2.default.metrics.jaro(numberWord, word)
    };
  }).reduce(function (acc, stat) {
    return !(0, _itsSet2.default)(acc.score) || stat.score > acc.score ? stat : acc;
  }, {}).word;
};
},{"./constants":91,"clj-fuzzy":87,"its-set":88}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordsToNumbers = wordsToNumbers;

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.wordsToNumbers = function(text) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var regions = (0, _parser2.default)(text, options);
  if (!regions.length) return text;
  var compiled = (0, _compiler2.default)({ text: text, regions: regions });
  return compiled;
}

exports.default = wordsToNumbers;
},{"./compiler":90,"./parser":94}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _constants = require('./constants');

var _fuzzy = require('./fuzzy');

var _fuzzy2 = _interopRequireDefault(_fuzzy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-extra-parens */
var SKIP = 0;
var ADD = 1;
var START_NEW_REGION = 2;
var NOPE = 3;

var canAddTokenToEndOfSubRegion = function canAddTokenToEndOfSubRegion(subRegion, currentToken, _ref) {
  var impliedHundreds = _ref.impliedHundreds;
  var tokens = subRegion.tokens;

  var prevToken = tokens[0];
  if (!prevToken) return true;
  if (prevToken.type === _constants.TOKEN_TYPE.MAGNITUDE && currentToken.type === _constants.TOKEN_TYPE.UNIT) return true;
  if (prevToken.type === _constants.TOKEN_TYPE.MAGNITUDE && currentToken.type === _constants.TOKEN_TYPE.TEN) return true;
  if (impliedHundreds && subRegion.type === _constants.TOKEN_TYPE.MAGNITUDE && prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.UNIT) return true;
  if (impliedHundreds && subRegion.type === _constants.TOKEN_TYPE.MAGNITUDE && prevToken.type === _constants.TOKEN_TYPE.UNIT && currentToken.type === _constants.TOKEN_TYPE.TEN) return true;
  if (prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.UNIT) return true;
  if (!impliedHundreds && prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.UNIT) return true;
  if (prevToken.type === _constants.TOKEN_TYPE.MAGNITUDE && currentToken.type === _constants.TOKEN_TYPE.MAGNITUDE) return true;
  if (!impliedHundreds && prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.TEN) return false;
  if (impliedHundreds && prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.TEN) return true;
  return false;
};

var getSubRegionType = function getSubRegionType(subRegion, currentToken) {
  if (!subRegion) {
    return { type: currentToken.type };
  }
  var prevToken = subRegion.tokens[0];
  var isHundred = prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.UNIT || prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.TEN || prevToken.type === _constants.TOKEN_TYPE.UNIT && currentToken.type === _constants.TOKEN_TYPE.TEN && _constants.NUMBER[prevToken.lowerCaseValue] > 9 || prevToken.type === _constants.TOKEN_TYPE.UNIT && currentToken.type === _constants.TOKEN_TYPE.UNIT || prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.UNIT && subRegion.type === _constants.TOKEN_TYPE.MAGNITUDE;
  if (subRegion.type === _constants.TOKEN_TYPE.MAGNITUDE) return { type: _constants.TOKEN_TYPE.MAGNITUDE, isHundred: isHundred };
  if (isHundred) return { type: _constants.TOKEN_TYPE.HUNDRED, isHundred: isHundred };
  return { type: currentToken.type, isHundred: isHundred };
};

var checkIfTokenFitsSubRegion = function checkIfTokenFitsSubRegion(subRegion, token, options) {
  var _getSubRegionType = getSubRegionType(subRegion, token);

  var type = _getSubRegionType.type;
  var isHundred = _getSubRegionType.isHundred;

  if (!subRegion) return { action: START_NEW_REGION, type: type, isHundred: isHundred };
  if (canAddTokenToEndOfSubRegion(subRegion, token, options)) {
    return { action: ADD, type: type, isHundred: isHundred };
  }
  return { action: START_NEW_REGION, type: type, isHundred: isHundred };
};

var getSubRegions = function getSubRegions(region, options) {
  var subRegions = [];
  var currentSubRegion = void 0;
  var tokensCount = region.tokens.length;
  var i = tokensCount - 1;
  while (i >= 0) {
    var token = region.tokens[i];

    var _checkIfTokenFitsSubR = checkIfTokenFitsSubRegion(currentSubRegion, token, options);

    var action = _checkIfTokenFitsSubR.action;
    var type = _checkIfTokenFitsSubR.type;
    var isHundred = _checkIfTokenFitsSubR.isHundred;

    token.type = isHundred ? _constants.TOKEN_TYPE.HUNDRED : token.type;
    switch (action) {
      case ADD:
        {
          currentSubRegion.type = type;
          currentSubRegion.tokens.unshift(token);
          break;
        }
      case START_NEW_REGION:
        {
          currentSubRegion = {
            tokens: [token],
            type: type
          };
          subRegions.unshift(currentSubRegion);
          break;
        }
      // no default
    }
    i--;
  }
  return subRegions;
};

var canAddTokenToEndOfRegion = function canAddTokenToEndOfRegion(region, currentToken, _ref2) {
  var impliedHundreds = _ref2.impliedHundreds;
  var tokens = region.tokens;

  var prevToken = tokens[tokens.length - 1];
  if (!impliedHundreds && prevToken.type === _constants.TOKEN_TYPE.UNIT && currentToken.type === _constants.TOKEN_TYPE.UNIT && !region.hasDecimal) return false;
  if (!impliedHundreds && prevToken.type === _constants.TOKEN_TYPE.UNIT && currentToken.type === _constants.TOKEN_TYPE.TEN) return false;
  if (!impliedHundreds && prevToken.type === _constants.TOKEN_TYPE.TEN && currentToken.type === _constants.TOKEN_TYPE.TEN) return false;
  return true;
};

var checkIfTokenFitsRegion = function checkIfTokenFitsRegion(region, token, options) {
  var isDecimal = _constants.DECIMALS.includes(token.lowerCaseValue);
  if ((!region || !region.tokens.length) && isDecimal) {
    return START_NEW_REGION;
  }
  var isPunctuation = _constants.PUNCTUATION.includes(token.lowerCaseValue);
  if (isPunctuation) return SKIP;
  var isJoiner = _constants.JOINERS.includes(token.lowerCaseValue);
  if (isJoiner) return SKIP;
  if (isDecimal && !region.hasDecimal) {
    return ADD;
  }
  var isNumberWord = _constants.NUMBER_WORDS.includes(token.lowerCaseValue);
  if (isNumberWord) {
    if (!region) return START_NEW_REGION;
    if (canAddTokenToEndOfRegion(region, token, options)) {
      return ADD;
    }
    return START_NEW_REGION;
  }
  return NOPE;
};

var checkBlacklist = function checkBlacklist(tokens) {
  return tokens.length === 1 && _constants.BLACKLIST_SINGULAR_WORDS.includes(tokens[0].lowerCaseValue);
};

var matchRegions = function matchRegions(tokens, options) {
  var regions = [];

  if (checkBlacklist(tokens)) return regions;

  var i = 0;
  var currentRegion = void 0;
  var tokensCount = tokens.length;
  while (i < tokensCount) {
    var token = tokens[i];
    var tokenFits = checkIfTokenFitsRegion(currentRegion, token, options);
    switch (tokenFits) {
      case SKIP:
        {
          break;
        }
      case ADD:
        {
          if (currentRegion) {
            currentRegion.end = token.end;
            currentRegion.tokens.push(token);
            if (token.type === _constants.TOKEN_TYPE.DECIMAL) {
              currentRegion.hasDecimal = true;
            }
          }
          break;
        }
      case START_NEW_REGION:
        {
          currentRegion = {
            start: token.start,
            end: token.end,
            tokens: [token]
          };
          regions.push(currentRegion);
          if (token.type === _constants.TOKEN_TYPE.DECIMAL) {
            currentRegion.hasDecimal = true;
          }
          break;
        }
      case NOPE:
      default:
        {
          currentRegion = null;
          break;
        }
    }
    i++;
  }

  return regions.map(function (region) {
    return (0, _extends3.default)({}, region, { subRegions: getSubRegions(region, options) });
  });
};

var getTokenType = function getTokenType(chunk) {
  if (_constants.UNIT_KEYS.includes(chunk.toLowerCase())) return _constants.TOKEN_TYPE.UNIT;
  if (_constants.TEN_KEYS.includes(chunk.toLowerCase())) return _constants.TOKEN_TYPE.TEN;
  if (_constants.MAGNITUDE_KEYS.includes(chunk.toLowerCase())) return _constants.TOKEN_TYPE.MAGNITUDE;
  if (_constants.DECIMALS.includes(chunk.toLowerCase())) return _constants.TOKEN_TYPE.DECIMAL;
};

exports.default = function (text, options) {
  var tokens = text.split(/(\w+|\s|[[:punct:]])/i).reduce(function (acc, chunk) {
    var unfuzzyChunk = chunk.length && options.fuzzy && !_constants.PUNCTUATION.includes(chunk) ? (0, _fuzzy2.default)(chunk) : chunk;
    var start = acc.length ? acc[acc.length - 1].end + 1 : 0;
    var end = start + chunk.length;
    return end !== start ? acc.concat({
      start: start,
      end: end - 1,
      value: unfuzzyChunk,
      lowerCaseValue: unfuzzyChunk.toLowerCase(),
      type: getTokenType(unfuzzyChunk, options)
    }) : acc;
  }, []);
  var regions = matchRegions(tokens, options);
  return regions;
};
},{"./constants":91,"./fuzzy":92,"babel-runtime/helpers/extends":6}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var splice = exports.splice = function splice(str, index, count, add) {
  var i = index;
  if (i < 0) {
    i = str.length + i;
    if (i < 0) {
      i = 0;
    }
  }
  return str.slice(0, i) + (add || '') + str.slice(i + count);
};
},{}],96:[function(require,module,exports){
module.exports = require('./dist/index');
},{"./dist/index":93}]},{},[96]);
