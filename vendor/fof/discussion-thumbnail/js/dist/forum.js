module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=78)}([function(t,e,r){var o=r(10)(Object,"create");t.exports=o},function(t,e,r){var o=r(52);t.exports=function(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1}},function(t,e,r){var o=r(58);t.exports=function(t,e){var r=t.__data__;return o(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var o=r(8),n=r(31);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==o(t)}},function(t,e,r){var o=r(6).Symbol;t.exports=o},function(t,e,r){var o=r(28),n="object"==typeof self&&self&&self.Object===Object&&self,i=o||n||Function("return this")();t.exports=i},function(t,e,r){"use strict";var o=r(74);t.exports=Function.prototype.bind||o},function(t,e,r){var o=r(5),n=r(29),i=r(30),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?n(t):i(t)}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var o=r(39),n=r(44);t.exports=function(t,e){var r=n(t,e);return o(r)?r:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){"use strict";var o=Array.prototype.slice,n=r(13),i=Object.keys,a=i?function(t){return i(t)}:r(69),s=Object.keys;a.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return n(t)?s(o.call(t)):s(t)}):Object.keys=a;return Object.keys||a},t.exports=a},function(t,e,r){"use strict";var o=Object.prototype.toString;t.exports=function(t){var e=o.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===o.call(t.callee)),r}},function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},function(t,e,r){"use strict";var o=SyntaxError,n=Function,i=TypeError,a=function(t){try{return n('"use strict"; return ('+t+").constructor;")()}catch(t){}},s=Object.getOwnPropertyDescriptor;if(s)try{s({},"")}catch(t){s=null}var c=function(){throw new i},u=s?function(){try{return c}catch(t){try{return s(arguments,"callee").get}catch(t){return c}}}():c,p=r(73)(),f=Object.getPrototypeOf||function(t){return t.__proto__},l={},y="undefined"==typeof Uint8Array?void 0:f(Uint8Array),h={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":p?f([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":l,"%AsyncGenerator%":l,"%AsyncGeneratorFunction%":l,"%AsyncIteratorPrototype%":l,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":n,"%GeneratorFunction%":l,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":p?f(f([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&p?f((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&p?f((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":p?f(""[Symbol.iterator]()):void 0,"%Symbol%":p?Symbol:void 0,"%SyntaxError%":o,"%ThrowTypeError%":u,"%TypedArray%":y,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet},d={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=r(7),g=r(75),m=v.call(Function.call,Array.prototype.concat),b=v.call(Function.apply,Array.prototype.splice),_=v.call(Function.call,String.prototype.replace),w=v.call(Function.call,String.prototype.slice),O=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,x=/\\(\\)?/g,A=function(t){var e=w(t,0,1),r=w(t,-1);if("%"===e&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return _(t,O,(function(t,e,r,o){n[n.length]=r?_(o,x,"$1"):e||t})),n},j=function(t,e){var r,n=t;if(g(d,n)&&(n="%"+(r=d[n])[0]+"%"),g(h,n)){var s=h[n];if(s===l&&(s=function t(e){var r;if("%AsyncFunction%"===e)r=a("async function () {}");else if("%GeneratorFunction%"===e)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=a("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&(r=f(n.prototype))}return h[e]=r,r}(n)),void 0===s&&!e)throw new i("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:s}}throw new o("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new i('"allowMissing" argument must be a boolean');var r=A(t),n=r.length>0?r[0]:"",a=j("%"+n+"%",e),c=a.name,u=a.value,p=!1,f=a.alias;f&&(n=f[0],b(r,m([0,1],f)));for(var l=1,y=!0;l<r.length;l+=1){var d=r[l],v=w(d,0,1),_=w(d,-1);if(('"'===v||"'"===v||"`"===v||'"'===_||"'"===_||"`"===_)&&v!==_)throw new o("property names with quotes must have matching quotes");if("constructor"!==d&&y||(p=!0),g(h,c="%"+(n+="."+d)+"%"))u=h[c];else if(null!=u){if(!(d in u)){if(!e)throw new i("base intrinsic for "+t+" exists, but the property is not available.");return}if(s&&l+1>=r.length){var O=s(u,d);u=(y=!!O)&&"get"in O&&!("originalValue"in O.get)?O.get:u[d]}else y=g(u,d),u=u[d];y&&!p&&(h[c]=u)}}return u}},function(t,e,r){var o=r(25);t.exports=function(t,e,r){var n=null==t?void 0:o(t,e);return void 0===n?r:n}},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},function(t,e,r){var o=r(26),n=r(65);t.exports=function(t,e){for(var r=0,i=(e=o(e,t)).length;null!=t&&r<i;)t=t[n(e[r++])];return r&&r==i?t:void 0}},function(t,e,r){var o=r(3),n=r(27),i=r(32),a=r(62);t.exports=function(t,e){return o(t)?t:n(t,e)?[t]:i(a(t))}},function(t,e,r){var o=r(3),n=r(4),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(o(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!n(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(9))},function(t,e,r){var o=r(5),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),r=t[s];try{t[s]=void 0;var o=!0}catch(t){}var n=a.call(t);return o&&(e?t[s]=r:delete t[s]),n}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var o=r(33),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=o((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,(function(t,r,o,n){e.push(o?n.replace(i,"$1"):r||t)})),e}));t.exports=a},function(t,e,r){var o=r(34);t.exports=function(t){var e=o(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},function(t,e,r){var o=r(35);function n(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var o=arguments,n=e?e.apply(this,o):o[0],i=r.cache;if(i.has(n))return i.get(n);var a=t.apply(this,o);return r.cache=i.set(n,a)||i,a};return r.cache=new(n.Cache||o),r}n.Cache=o,t.exports=n},function(t,e,r){var o=r(36),n=r(57),i=r(59),a=r(60),s=r(61);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,r){var o=r(37),n=r(49),i=r(56);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(i||n),string:new o}}},function(t,e,r){var o=r(38),n=r(45),i=r(46),a=r(47),s=r(48);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,r){var o=r(0);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},function(t,e,r){var o=r(40),n=r(41),i=r(11),a=r(43),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,f=u.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||n(t))&&(o(t)?l:s).test(a(t))}},function(t,e,r){var o=r(8),n=r(11);t.exports=function(t){if(!n(t))return!1;var e=o(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var o,n=r(42),i=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!i&&i in t}},function(t,e,r){var o=r(6)["__core-js_shared__"];t.exports=o},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var o=r(0),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(o){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return n.call(e,t)?e[t]:void 0}},function(t,e,r){var o=r(0),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return o?void 0!==e[t]:n.call(e,t)}},function(t,e,r){var o=r(0);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var o=r(50),n=r(51),i=r(53),a=r(54),s=r(55);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var o=r(1),n=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=o(e,t);return!(r<0)&&(r==e.length-1?e.pop():n.call(e,r,1),--this.size,!0)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var o=r(1);t.exports=function(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var o=r(1);t.exports=function(t){return o(this.__data__,t)>-1}},function(t,e,r){var o=r(1);t.exports=function(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}},function(t,e,r){var o=r(10)(r(6),"Map");t.exports=o},function(t,e,r){var o=r(2);t.exports=function(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var o=r(2);t.exports=function(t){return o(this,t).get(t)}},function(t,e,r){var o=r(2);t.exports=function(t){return o(this,t).has(t)}},function(t,e,r){var o=r(2);t.exports=function(t,e){var r=o(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}},function(t,e,r){var o=r(63);t.exports=function(t){return null==t?"":o(t)}},function(t,e,r){var o=r(5),n=r(64),i=r(3),a=r(4),s=o?o.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return n(e,t)+"";if(a(e))return c?c.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,o=null==t?0:t.length,n=Array(o);++r<o;)n[r]=e(t[r],r,t);return n}},function(t,e,r){var o=r(4);t.exports=function(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,r){"use strict";r(67)()},function(t,e,r){"use strict";var o=r(68),n=r(70);t.exports=function(){var t=n();return o(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}},function(t,e,r){"use strict";var o=r(12),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,s=Object.defineProperty,c=s&&function(){var t={};try{for(var e in s(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),u=function(t,e,r,o){var n;(!(e in t)||"function"==typeof(n=o)&&"[object Function]"===i.call(n)&&o())&&(c?s(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},p=function(t,e){var r=arguments.length>2?arguments[2]:{},i=o(e);n&&(i=a.call(i,Object.getOwnPropertySymbols(e)));for(var s=0;s<i.length;s+=1)u(t,i[s],e[i[s]],r[i[s]])};p.supportsDescriptors=!!c,t.exports=p},function(t,e,r){"use strict";var o;if(!Object.keys){var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=r(13),s=Object.prototype.propertyIsEnumerable,c=!s.call({toString:null},"toString"),u=s.call((function(){}),"prototype"),p=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(t){var e=t.constructor;return e&&e.prototype===t},l={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!l["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{f(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();o=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===i.call(t),o=a(t),s=e&&"[object String]"===i.call(t),l=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var h=u&&r;if(s&&t.length>0&&!n.call(t,0))for(var d=0;d<t.length;++d)l.push(String(d));if(o&&t.length>0)for(var v=0;v<t.length;++v)l.push(String(v));else for(var g in t)h&&"prototype"===g||!n.call(t,g)||l.push(String(g));if(c)for(var m=function(t){if("undefined"==typeof window||!y)return f(t);try{return f(t)}catch(t){return!1}}(t),b=0;b<p.length;++b)m&&"constructor"===p[b]||!n.call(t,p[b])||l.push(p[b]);return l}}t.exports=o},function(t,e,r){"use strict";var o=r(71);t.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),r={},o=0;o<e.length;++o)r[e[o]]=e[o];var n=Object.assign({},r),i="";for(var a in n)i+=a;return t!==i}()||function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1}()?o:Object.assign:o}},function(t,e,r){"use strict";var o=r(12),n=function(t){return null!=t},i=r(14)(),a=r(72),s=Object,c=a("Array.prototype.push"),u=a("Object.prototype.propertyIsEnumerable"),p=i?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!n(t))throw new TypeError("target must be an object");var r,a,f,l,y,h,d,v=s(t);for(r=1;r<arguments.length;++r){a=s(arguments[r]),l=o(a);var g=i&&(Object.getOwnPropertySymbols||p);if(g)for(y=g(a),f=0;f<y.length;++f)d=y[f],u(a,d)&&c(l,d);for(f=0;f<l.length;++f)h=a[d=l[f]],u(a,d)&&(v[d]=h)}return v}},function(t,e,r){"use strict";var o=r(15),n=r(76),i=n(o("String.prototype.indexOf"));t.exports=function(t,e){var r=o(t,!!e);return"function"==typeof r&&i(t,".prototype.")>-1?n(r):r}},function(t,e,r){"use strict";(function(e){var o=e.Symbol,n=r(14);t.exports=function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"==typeof o("foo")&&("symbol"==typeof Symbol("bar")&&n())))}}).call(this,r(9))},function(t,e,r){"use strict";var o="Function.prototype.bind called on incompatible ",n=Array.prototype.slice,i=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==i.call(e))throw new TypeError(o+e);for(var r,a=n.call(arguments,1),s=function(){if(this instanceof r){var o=e.apply(this,a.concat(n.call(arguments)));return Object(o)===o?o:this}return e.apply(t,a.concat(n.call(arguments)))},c=Math.max(0,e.length-a.length),u=[],p=0;p<c;p++)u.push("$"+p);if(r=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(s),e.prototype){var f=function(){};f.prototype=e.prototype,r.prototype=new f,f.prototype=null}return r}},function(t,e,r){"use strict";var o=r(7);t.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},function(t,e,r){"use strict";var o=r(7),n=r(15),i=n("%Function.prototype.apply%"),a=n("%Function.prototype.call%"),s=n("%Reflect.apply%",!0)||o.call(a,i),c=n("%Object.getOwnPropertyDescriptor%",!0),u=n("%Object.defineProperty%",!0),p=n("%Math.max%");if(u)try{u({},"a",{value:1})}catch(t){u=null}t.exports=function(t){var e=s(o,a,arguments);if(c&&u){var r=c(e,"length");r.configurable&&u(e,"length",{value:1+p(0,t.length-(arguments.length-1))})}return e};var f=function(){return s(o,i,arguments)};u?u(t.exports,"apply",{value:f}):t.exports.apply=f},function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,r=n(e);r;)r=n(e=r.ownerDocument);return e}(),e=[],r=null,o=null;a.prototype.THROTTLE_TIMEOUT=100,a.prototype.POLL_INTERVAL=null,a.prototype.USE_MUTATION_OBSERVER=!0,a._setupCrossOriginUpdater=function(){return r||(r=function(t,r){o=t&&r?f(t,r):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),r},a._resetCrossOriginUpdater=function(){r=null,o=null},a.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},a.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},a.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},a.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},a.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]}))},a.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},a.prototype._monitorIntersections=function(e){var r=e.defaultView;if(r&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,a=null;this.POLL_INTERVAL?i=r.setInterval(o,this.POLL_INTERVAL):(s(r,"resize",o,!0),s(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in r&&(a=new r.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),c(t,"resize",o,!0)),c(e,"scroll",o,!0),a&&a.disconnect()}));var u=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=u){var p=n(e);p&&this._monitorIntersections(p.ownerDocument)}}},a.prototype._unmonitorIntersections=function(e){var r=this._monitoringDocuments.indexOf(e);if(-1!=r){var o=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some((function(t){var r=t.element.ownerDocument;if(r==e)return!0;for(;r&&r!=o;){var i=n(r);if((r=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[r];if(this._monitoringDocuments.splice(r,1),this._monitoringUnsubscribes.splice(r,1),i(),e!=o){var a=n(e);a&&this._unmonitorIntersections(a.ownerDocument)}}}},a.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},a.prototype._checkForIntersections=function(){if(this.root||!r||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var n=o.element,a=u(n),s=this._rootContainsTarget(n),c=o.entry,p=t&&s&&this._computeTargetAndRootIntersection(n,a,e),f=null;this._rootContainsTarget(n)?r&&!this.root||(f=e):f={top:0,bottom:0,left:0,right:0,width:0,height:0};var l=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:n,boundingClientRect:a,rootBounds:f,intersectionRect:p});c?t&&s?this._hasCrossedThreshold(c,l)&&this._queuedEntries.push(l):c&&c.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},a.prototype._computeTargetAndRootIntersection=function(e,n,i){if("none"!=window.getComputedStyle(e).display){for(var a,s,c,p,l,h,d,v,g=n,m=y(e),b=!1;!b&&m;){var _=null,w=1==m.nodeType?window.getComputedStyle(m):{};if("none"==w.display)return null;if(m==this.root||9==m.nodeType)if(b=!0,m==this.root||m==t)r&&!this.root?!o||0==o.width&&0==o.height?(m=null,_=null,g=null):_=o:_=i;else{var O=y(m),x=O&&u(O),A=O&&this._computeTargetAndRootIntersection(O,x,i);x&&A?(m=O,_=f(x,A)):(m=null,g=null)}else{var j=m.ownerDocument;m!=j.body&&m!=j.documentElement&&"visible"!=w.overflow&&(_=u(m))}if(_&&(a=_,s=g,c=void 0,p=void 0,l=void 0,h=void 0,d=void 0,v=void 0,c=Math.max(a.top,s.top),p=Math.min(a.bottom,s.bottom),l=Math.max(a.left,s.left),h=Math.min(a.right,s.right),v=p-c,g=(d=h-l)>=0&&v>=0&&{top:c,bottom:p,left:l,right:h,width:d,height:v}||null),!g)break;m=m&&y(m)}return g}},a.prototype._getRootRect=function(){var e;if(this.root&&!h(this.root))e=u(this.root);else{var r=h(this.root)?this.root:t,o=r.documentElement,n=r.body;e={top:0,left:0,right:o.clientWidth||n.clientWidth,width:o.clientWidth||n.clientWidth,bottom:o.clientHeight||n.clientHeight,height:o.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(e)},a.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100})),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},a.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==o)for(var n=0;n<this.thresholds.length;n++){var i=this.thresholds[n];if(i==r||i==o||i<r!=i<o)return!0}},a.prototype._rootIsInDom=function(){return!this.root||l(t,this.root)},a.prototype._rootContainsTarget=function(e){var r=this.root&&(this.root.ownerDocument||this.root)||t;return l(r,e)&&(!this.root||r==e.ownerDocument)},a.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},a.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=a,window.IntersectionObserverEntry=i}function n(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=p(t.rootBounds),this.boundingClientRect=p(t.boundingClientRect),this.intersectionRect=p(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,o=this.intersectionRect,n=o.width*o.height;this.intersectionRatio=r?Number((n/r).toFixed(4)):this.isIntersecting?1:0}function a(t,e){var r,o,n,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,n=null,function(){n||(n=setTimeout((function(){r(),n=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,r,o){"function"==typeof t.addEventListener?t.addEventListener(e,r,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function c(t,e,r,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function u(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function p(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function f(t,e){var r=e.top-t.top,o=e.left-t.left;return{top:r,left:o,height:e.height,width:e.width,bottom:r+e.height,right:o+e.width}}function l(t,e){for(var r=e;r;){if(r==t)return!0;r=y(r)}return!1}function y(e){var r=e.parentNode;return 9==e.nodeType&&e!=t?n(e):(r&&r.assignedSlot&&(r=r.assignedSlot.parentNode),r&&11==r.nodeType&&r.host?r.host:r)}function h(t){return t&&9===t.nodeType}}()},function(t,e,r){"use strict";r.r(e);var o=r(16),n=r.n(o),i=r(17),a=r(18),s=r.n(a),c=r(19),u=r.n(c),p=r(20),f=r.n(p),l=r(21),y=r.n(l);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=r(22),g=r.n(v),b=r(23),_=r.n(b),w=r(24),O=r.n(w),x=(r(66),r(77),new Set),A=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,d(e,r);var n=o.prototype;return n.view=function(){var t=h({},this.attrs.elementAttrs),e=x.has(this.attrs.src);return t.style||(t.style={}),t.style.position="relative",e||(t.style.opacity="0",t.oncreate=this.configImage.bind(this),t.onload=this.onLoad.bind(this)),t[e?"src":"data-src"]=this.attrs.src,m("div",{className:O()(t.className,"DiscussionListItem-thumbnail")},!e&&m(_.a,null),m("img",t))},n.configImage=function(t){new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting){var r=t.target;r.src=r.dataset.src,e.unobserve(r)}}))})).observe(t.dom)},n.onLoad=function(t){var e=t.target;x.add(this.attrs.src),e.style.opacity=1,this.$(".LoadingIndicator-container").remove()},o}(g.a),j=function(t,e){return t&&t.children&&t.children.filter((function(t){return-1!==n()(t,"attrs.className","").indexOf(e)}))[0]};app.initializers.add("fof/discussion-thumbnail",(function(){u.a.prototype.customThumbnail=s.a.attribute("customThumbnail"),Object(i.extend)(f.a.prototype,"view",(function(t){var e=this.attrs.discussion.customThumbnail();if(e){var r=j(t,"DiscussionListItem-content");if(r&&r.children){var o=r.children.find((function(t){return(null==t?void 0:t.tag)===y.a})),n=j(o,"DiscussionListItem-author"),i=j(n,"Avatar");i&&(delete i.attrs.src,n.children[n.children.indexOf(i)]=m(A,{elementAttrs:i.attrs,src:e}))}}}))}))}]);
//# sourceMappingURL=forum.js.map