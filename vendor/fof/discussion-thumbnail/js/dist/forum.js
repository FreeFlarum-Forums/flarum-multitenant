(()=>{var t={8780:(t,e,r)=>{"use strict";var o=r(6893),n=r(3862),i=n(o("String.prototype.indexOf"));t.exports=function(t,e){var r=o(t,!!e);return"function"==typeof r&&i(t,".prototype.")>-1?n(r):r}},3862:(t,e,r)=>{"use strict";var o=r(5246),n=r(6893),i=n("%Function.prototype.apply%"),a=n("%Function.prototype.call%"),s=n("%Reflect.apply%",!0)||o.call(a,i),c=n("%Object.getOwnPropertyDescriptor%",!0),p=n("%Object.defineProperty%",!0),u=n("%Math.max%");if(p)try{p({},"a",{value:1})}catch(t){p=null}t.exports=function(t){var e=s(o,a,arguments);if(c&&p){var r=c(e,"length");r.configurable&&p(e,"length",{value:1+u(0,t.length-(arguments.length-1))})}return e};var l=function(){return s(o,i,arguments)};p?p(t.exports,"apply",{value:l}):t.exports.apply=l},7921:(t,e,r)=>{"use strict";var o=r(3818),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,s=Object.defineProperty,c=s&&function(){var t={};try{for(var e in s(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),p=function(t,e,r,o){var n;(!(e in t)||"function"==typeof(n=o)&&"[object Function]"===i.call(n)&&o())&&(c?s(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},u=function(t,e){var r=arguments.length>2?arguments[2]:{},i=o(e);n&&(i=a.call(i,Object.getOwnPropertySymbols(e)));for(var s=0;s<i.length;s+=1)p(t,i[s],e[i[s]],r[i[s]])};u.supportsDescriptors=!!c,t.exports=u},5929:t=>{"use strict";var e="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,o=Object.prototype.toString,n="[object Function]";t.exports=function(t){var i=this;if("function"!=typeof i||o.call(i)!==n)throw new TypeError(e+i);for(var a,s=r.call(arguments,1),c=function(){if(this instanceof a){var e=i.apply(this,s.concat(r.call(arguments)));return Object(e)===e?e:this}return i.apply(t,s.concat(r.call(arguments)))},p=Math.max(0,i.length-s.length),u=[],l=0;l<p;l++)u.push("$"+l);if(a=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(c),i.prototype){var y=function(){};y.prototype=i.prototype,a.prototype=new y,y.prototype=null}return a}},5246:(t,e,r)=>{"use strict";var o=r(5929);t.exports=Function.prototype.bind||o},6893:(t,e,r)=>{"use strict";var o,n=SyntaxError,i=Function,a=TypeError,s=function(t){try{return i('"use strict"; return ('+t+").constructor;")()}catch(t){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(t){c=null}var p=function(){throw new a},u=c?function(){try{return p}catch(t){try{return c(arguments,"callee").get}catch(t){return p}}}():p,l=r(5990)(),y=Object.getPrototypeOf||function(t){return t.__proto__},f={},h="undefined"==typeof Uint8Array?o:y(Uint8Array),d={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":l?y([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":f,"%AsyncGenerator%":f,"%AsyncGeneratorFunction%":f,"%AsyncIteratorPrototype%":f,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":f,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":l?y(y([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&l?y((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&l?y((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":l?y(""[Symbol.iterator]()):o,"%Symbol%":l?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":u,"%TypedArray%":h,"%TypeError%":a,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet},v=function t(e){var r;if("%AsyncFunction%"===e)r=s("async function () {}");else if("%GeneratorFunction%"===e)r=s("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=s("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&(r=y(n.prototype))}return d[e]=r,r},g={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=r(5246),m=r(7751),_=b.call(Function.call,Array.prototype.concat),w=b.call(Function.apply,Array.prototype.splice),O=b.call(Function.call,String.prototype.replace),x=b.call(Function.call,String.prototype.slice),A=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,j=/\\(\\)?/g,I=function(t){var e=x(t,0,1),r=x(t,-1);if("%"===e&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return O(t,A,(function(t,e,r,n){o[o.length]=r?O(n,j,"$1"):e||t})),o},P=function(t,e){var r,o=t;if(m(g,o)&&(o="%"+(r=g[o])[0]+"%"),m(d,o)){var i=d[o];if(i===f&&(i=v(o)),void 0===i&&!e)throw new a("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:i}}throw new n("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new a("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new a('"allowMissing" argument must be a boolean');var r=I(t),o=r.length>0?r[0]:"",i=P("%"+o+"%",e),s=i.name,p=i.value,u=!1,l=i.alias;l&&(o=l[0],w(r,_([0,1],l)));for(var y=1,f=!0;y<r.length;y+=1){var h=r[y],v=x(h,0,1),g=x(h,-1);if(('"'===v||"'"===v||"`"===v||'"'===g||"'"===g||"`"===g)&&v!==g)throw new n("property names with quotes must have matching quotes");if("constructor"!==h&&f||(u=!0),m(d,s="%"+(o+="."+h)+"%"))p=d[s];else if(null!=p){if(!(h in p)){if(!e)throw new a("base intrinsic for "+t+" exists, but the property is not available.");return}if(c&&y+1>=r.length){var b=c(p,h);p=(f=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:p[h]}else f=m(p,h),p=p[h];f&&!u&&(d[s]=p)}}return p}},5990:(t,e,r)=>{"use strict";var o=r.g.Symbol,n=r(3031);t.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"==typeof o("foo")&&"symbol"==typeof Symbol("bar")&&n()}},3031:t=>{"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},7751:(t,e,r)=>{"use strict";var o=r(5246);t.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},2489:()=>{!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,r=n(e);r;)r=n(e=r.ownerDocument);return e}(),e=[],r=null,o=null;a.prototype.THROTTLE_TIMEOUT=100,a.prototype.POLL_INTERVAL=null,a.prototype.USE_MUTATION_OBSERVER=!0,a._setupCrossOriginUpdater=function(){return r||(r=function(t,r){o=t&&r?l(t,r):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),r},a._resetCrossOriginUpdater=function(){r=null,o=null},a.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},a.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},a.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},a.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},a.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]}))},a.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},a.prototype._monitorIntersections=function(e){var r=e.defaultView;if(r&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,a=null;this.POLL_INTERVAL?i=r.setInterval(o,this.POLL_INTERVAL):(s(r,"resize",o,!0),s(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in r&&(a=new r.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),c(t,"resize",o,!0)),c(e,"scroll",o,!0),a&&a.disconnect()}));var p=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=p){var u=n(e);u&&this._monitorIntersections(u.ownerDocument)}}},a.prototype._unmonitorIntersections=function(e){var r=this._monitoringDocuments.indexOf(e);if(-1!=r){var o=this.root&&(this.root.ownerDocument||this.root)||t,i=this._observationTargets.some((function(t){var r=t.element.ownerDocument;if(r==e)return!0;for(;r&&r!=o;){var i=n(r);if((r=i&&i.ownerDocument)==e)return!0}return!1}));if(!i){var a=this._monitoringUnsubscribes[r];if(this._monitoringDocuments.splice(r,1),this._monitoringUnsubscribes.splice(r,1),a(),e!=o){var s=n(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},a.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},a.prototype._checkForIntersections=function(){if(this.root||!r||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var n=o.element,a=p(n),s=this._rootContainsTarget(n),c=o.entry,u=t&&s&&this._computeTargetAndRootIntersection(n,a,e),l=null;this._rootContainsTarget(n)?r&&!this.root||(l=e):l={top:0,bottom:0,left:0,right:0,width:0,height:0};var y=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:n,boundingClientRect:a,rootBounds:l,intersectionRect:u});c?t&&s?this._hasCrossedThreshold(c,y)&&this._queuedEntries.push(y):c&&c.isIntersecting&&this._queuedEntries.push(y):this._queuedEntries.push(y)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},a.prototype._computeTargetAndRootIntersection=function(e,n,i){if("none"!=window.getComputedStyle(e).display){for(var a,s,c,u,y,h,d,v,g=n,b=f(e),m=!1;!m&&b;){var _=null,w=1==b.nodeType?window.getComputedStyle(b):{};if("none"==w.display)return null;if(b==this.root||9==b.nodeType)if(m=!0,b==this.root||b==t)r&&!this.root?!o||0==o.width&&0==o.height?(b=null,_=null,g=null):_=o:_=i;else{var O=f(b),x=O&&p(O),A=O&&this._computeTargetAndRootIntersection(O,x,i);x&&A?(b=O,_=l(x,A)):(b=null,g=null)}else{var j=b.ownerDocument;b!=j.body&&b!=j.documentElement&&"visible"!=w.overflow&&(_=p(b))}if(_&&(a=_,s=g,void 0,void 0,void 0,void 0,void 0,void 0,c=Math.max(a.top,s.top),u=Math.min(a.bottom,s.bottom),y=Math.max(a.left,s.left),v=u-c,g=(d=(h=Math.min(a.right,s.right))-y)>=0&&v>=0&&{top:c,bottom:u,left:y,right:h,width:d,height:v}||null),!g)break;b=b&&f(b)}return g}},a.prototype._getRootRect=function(){var e;if(this.root&&!h(this.root))e=p(this.root);else{var r=h(this.root)?this.root:t,o=r.documentElement,n=r.body;e={top:0,left:0,right:o.clientWidth||n.clientWidth,width:o.clientWidth||n.clientWidth,bottom:o.clientHeight||n.clientHeight,height:o.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(e)},a.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100})),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},a.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==o)for(var n=0;n<this.thresholds.length;n++){var i=this.thresholds[n];if(i==r||i==o||i<r!=i<o)return!0}},a.prototype._rootIsInDom=function(){return!this.root||y(t,this.root)},a.prototype._rootContainsTarget=function(e){var r=this.root&&(this.root.ownerDocument||this.root)||t;return y(r,e)&&(!this.root||r==e.ownerDocument)},a.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},a.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=a,window.IntersectionObserverEntry=i}function n(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=u(t.rootBounds),this.boundingClientRect=u(t.boundingClientRect),this.intersectionRect=u(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,o=this.intersectionRect,n=o.width*o.height;this.intersectionRatio=r?Number((n/r).toFixed(4)):this.isIntersecting?1:0}function a(t,e){var r,o,n,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,n=null,function(){n||(n=setTimeout((function(){r(),n=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,r,o){"function"==typeof t.addEventListener?t.addEventListener(e,r,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function c(t,e,r,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function p(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function u(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,e){var r=e.top-t.top,o=e.left-t.left;return{top:r,left:o,height:e.height,width:e.width,bottom:r+e.height,right:o+e.width}}function y(t,e){for(var r=e;r;){if(r==t)return!0;r=f(r)}return!1}function f(e){var r=e.parentNode;return 9==e.nodeType&&e!=t?n(e):(r&&r.assignedSlot&&(r=r.assignedSlot.parentNode),r&&11==r.nodeType&&r.host?r.host:r)}function h(t){return t&&9===t.nodeType}}()},8431:(t,e,r)=>{var o=r(2514),n=r(5485),i=r(243),a=r(8454),s=r(3984);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},3472:(t,e,r)=>{var o=r(9801),n=r(2442),i=r(8146),a=r(4612),s=r(6275);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},6588:(t,e,r)=>{var o=r(1095)(r(4366),"Map");t.exports=o},460:(t,e,r)=>{var o=r(4917),n=r(6890),i=r(9413),a=r(3583),s=r(9399);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},7206:(t,e,r)=>{var o=r(4366).Symbol;t.exports=o},3994:t=>{t.exports=function(t,e){for(var r=-1,o=null==t?0:t.length,n=Array(o);++r<o;)n[r]=e(t[r],r,t);return n}},5509:(t,e,r)=>{var o=r(3114);t.exports=function(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1}},2457:(t,e,r)=>{var o=r(3378),n=r(9998);t.exports=function(t,e){for(var r=0,i=(e=o(e,t)).length;null!=t&&r<i;)t=t[n(e[r++])];return r&&r==i?t:void 0}},7807:(t,e,r)=>{var o=r(7206),n=r(3187),i=r(2778),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?n(t):i(t)}},2254:(t,e,r)=>{var o=r(5220),n=r(4528),i=r(1716),a=r(8255),s=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,u=c.toString,l=p.hasOwnProperty,y=RegExp("^"+u.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||n(t))&&(o(t)?y:s).test(a(t))}},9697:(t,e,r)=>{var o=r(7206),n=r(3994),i=r(1304),a=r(2570),s=o?o.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return n(e,t)+"";if(a(e))return c?c.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},3378:(t,e,r)=>{var o=r(1304),n=r(8225),i=r(2140),a=r(31);t.exports=function(t,e){return o(t)?t:n(t,e)?[t]:i(a(t))}},8510:(t,e,r)=>{var o=r(4366)["__core-js_shared__"];t.exports=o},4891:(t,e,r)=>{var o="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=o},3872:(t,e,r)=>{var o=r(2754);t.exports=function(t,e){var r=t.__data__;return o(e)?r["string"==typeof e?"string":"hash"]:r.map}},1095:(t,e,r)=>{var o=r(2254),n=r(4781);t.exports=function(t,e){var r=n(t,e);return o(r)?r:void 0}},3187:(t,e,r)=>{var o=r(7206),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),r=t[s];try{t[s]=void 0;var o=!0}catch(t){}var n=a.call(t);return o&&(e?t[s]=r:delete t[s]),n}},4781:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},2514:(t,e,r)=>{var o=r(9535);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},5485:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},243:(t,e,r)=>{var o=r(9535),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(o){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return n.call(e,t)?e[t]:void 0}},8454:(t,e,r)=>{var o=r(9535),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return o?void 0!==e[t]:n.call(e,t)}},3984:(t,e,r)=>{var o=r(9535);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this}},8225:(t,e,r)=>{var o=r(1304),n=r(2570),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(o(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!n(t))||a.test(t)||!i.test(t)||null!=e&&t in Object(e)}},2754:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},4528:(t,e,r)=>{var o,n=r(8510),i=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!i&&i in t}},9801:t=>{t.exports=function(){this.__data__=[],this.size=0}},2442:(t,e,r)=>{var o=r(5509),n=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=o(e,t);return!(r<0||(r==e.length-1?e.pop():n.call(e,r,1),--this.size,0))}},8146:(t,e,r)=>{var o=r(5509);t.exports=function(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]}},4612:(t,e,r)=>{var o=r(5509);t.exports=function(t){return o(this.__data__,t)>-1}},6275:(t,e,r)=>{var o=r(5509);t.exports=function(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}},4917:(t,e,r)=>{var o=r(8431),n=r(3472),i=r(6588);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(i||n),string:new o}}},6890:(t,e,r)=>{var o=r(3872);t.exports=function(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}},9413:(t,e,r)=>{var o=r(3872);t.exports=function(t){return o(this,t).get(t)}},3583:(t,e,r)=>{var o=r(3872);t.exports=function(t){return o(this,t).has(t)}},9399:(t,e,r)=>{var o=r(3872);t.exports=function(t,e){var r=o(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}},2415:(t,e,r)=>{var o=r(6210);t.exports=function(t){var e=o(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},9535:(t,e,r)=>{var o=r(1095)(Object,"create");t.exports=o},2778:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},4366:(t,e,r)=>{var o=r(4891),n="object"==typeof self&&self&&self.Object===Object&&self,i=o||n||Function("return this")();t.exports=i},2140:(t,e,r)=>{var o=r(2415),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=o((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,(function(t,r,o,n){e.push(o?n.replace(i,"$1"):r||t)})),e}));t.exports=a},9998:(t,e,r)=>{var o=r(2570);t.exports=function(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},8255:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},3114:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},1139:(t,e,r)=>{var o=r(2457);t.exports=function(t,e,r){var n=null==t?void 0:o(t,e);return void 0===n?r:n}},1304:t=>{var e=Array.isArray;t.exports=e},5220:(t,e,r)=>{var o=r(7807),n=r(1716);t.exports=function(t){if(!n(t))return!1;var e=o(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1716:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},8667:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},2570:(t,e,r)=>{var o=r(7807),n=r(8667);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==o(t)}},6210:(t,e,r)=>{var o=r(460);function n(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var o=arguments,n=e?e.apply(this,o):o[0],i=r.cache;if(i.has(n))return i.get(n);var a=t.apply(this,o);return r.cache=i.set(n,a)||i,a};return r.cache=new(n.Cache||o),r}n.Cache=o,t.exports=n},31:(t,e,r)=>{var o=r(9697);t.exports=function(t){return null==t?"":o(t)}},6164:(t,e,r)=>{"use strict";var o;if(!Object.keys){var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=r(5184),s=Object.prototype.propertyIsEnumerable,c=!s.call({toString:null},"toString"),p=s.call((function(){}),"prototype"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(t){var e=t.constructor;return e&&e.prototype===t},y={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!y["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{l(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();o=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===i.call(t),o=a(t),s=e&&"[object String]"===i.call(t),y=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var h=p&&r;if(s&&t.length>0&&!n.call(t,0))for(var d=0;d<t.length;++d)y.push(String(d));if(o&&t.length>0)for(var v=0;v<t.length;++v)y.push(String(v));else for(var g in t)h&&"prototype"===g||!n.call(t,g)||y.push(String(g));if(c)for(var b=function(t){if("undefined"==typeof window||!f)return l(t);try{return l(t)}catch(t){return!1}}(t),m=0;m<u.length;++m)b&&"constructor"===u[m]||!n.call(t,u[m])||y.push(u[m]);return y}}t.exports=o},3818:(t,e,r)=>{"use strict";var o=Array.prototype.slice,n=r(5184),i=Object.keys,a=i?function(t){return i(t)}:r(6164),s=Object.keys;a.shim=function(){if(Object.keys){var t=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);t||(Object.keys=function(t){return n(t)?s(o.call(t)):s(t)})}else Object.keys=a;return Object.keys||a},t.exports=a},5184:t=>{"use strict";var e=Object.prototype.toString;t.exports=function(t){var r=e.call(t),o="[object Arguments]"===r;return o||(o="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===e.call(t.callee)),o}},5266:(t,e,r)=>{"use strict";r(5041)()},6339:(t,e,r)=>{"use strict";var o=r(3818),n=function(t){return null!=t},i=r(3031)(),a=r(8780),s=Object,c=a("Array.prototype.push"),p=a("Object.prototype.propertyIsEnumerable"),u=i?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!n(t))throw new TypeError("target must be an object");var r,a,l,y,f,h,d,v=s(t);for(r=1;r<arguments.length;++r){a=s(arguments[r]),y=o(a);var g=i&&(Object.getOwnPropertySymbols||u);if(g)for(f=g(a),l=0;l<f.length;++l)d=f[l],p(a,d)&&c(y,d);for(l=0;l<y.length;++l)h=a[d=y[l]],p(a,d)&&(v[d]=h)}return v}},9441:(t,e,r)=>{"use strict";var o=r(6339);t.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),r={},o=0;o<e.length;++o)r[e[o]]=e[o];var n=Object.assign({},r),i="";for(var a in n)i+=a;return t!==i}()||function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1}()?o:Object.assign:o}},5041:(t,e,r)=>{"use strict";var o=r(7921),n=r(9441);t.exports=function(){var t=n();return o(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";r.r(o);var t=r(1139),e=r.n(t);const n=flarum.core.compat["common/extend"],i=flarum.core.compat["common/Model"];var a=r.n(i);const s=flarum.core.compat["common/models/Discussion"];var c=r.n(s);const p=flarum.core.compat["forum/components/DiscussionListItem"];var u=r.n(p);const l=flarum.core.compat["common/components/Tooltip"];var y=r.n(l);function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},f.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}const d=flarum.core.compat["common/Component"];var v=r.n(d);const g=flarum.core.compat["common/components/LoadingIndicator"];var b=r.n(g);const _=flarum.core.compat["common/utils/classList"];var w=r.n(_),O=(r(5266),r(2489),new Set),x=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,h(e,r);var n=o.prototype;return n.view=function(){var t=f({},this.attrs.elementAttrs),e=O.has(this.attrs.src);return t.style||(t.style={}),t.style.position="relative",e||(t.style.opacity="0",t.oncreate=this.configImage.bind(this),t.onload=this.onLoad.bind(this)),t[e?"src":"data-src"]=this.attrs.src,m("div",{className:w()(t.className,"DiscussionListItem-thumbnail")},!e&&m(b(),null),m("img",t))},n.configImage=function(t){new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting){var r=t.target;r.src=r.dataset.src,e.unobserve(r)}}))})).observe(t.dom)},n.onLoad=function(t){var e=t.target;O.add(this.attrs.src),e.style.opacity=1,this.$(".LoadingIndicator-container").remove()},o}(v()),A=function(t,r){return t&&t.children&&t.children.filter((function(t){return-1!==e()(t,"attrs.className","").indexOf(r)}))[0]};app.initializers.add("fof/discussion-thumbnail",(function(){c().prototype.customThumbnail=a().attribute("customThumbnail"),(0,n.extend)(u().prototype,"view",(function(t){var e=this.attrs.discussion.customThumbnail();if(e){var r=A(t,"DiscussionListItem-content");if(r&&r.children){var o=r.children.find((function(t){return(null==t?void 0:t.tag)===y()})),n=A(o,"DiscussionListItem-author"),i=A(n,"Avatar");i&&(delete i.attrs.src,n.children[n.children.indexOf(i)]=m(x,{elementAttrs:i.attrs,src:e}),app.forum.attribute("fof-discussion-thumbnail.link_to_discussion")&&(n.attrs.href=app.route.discussion(this.attrs.discussion)))}}}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map