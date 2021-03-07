module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.Model},function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,"a",(function(){return o}))},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(2),o=n(4),a=n(3),i=n(1),s=n.n(i),l=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o))||this,Object(a.a)(Object(r.a)(t),"name",s.a.attribute("name")),Object(a.a)(Object(r.a)(t),"description",s.a.attribute("description")),Object(a.a)(Object(r.a)(t),"type",s.a.attribute("type")),Object(a.a)(Object(r.a)(t),"validation",s.a.attribute("validation")),Object(a.a)(Object(r.a)(t),"required",s.a.attribute("required")),Object(a.a)(Object(r.a)(t),"prefix",s.a.attribute("prefix")),Object(a.a)(Object(r.a)(t),"icon",s.a.attribute("icon")),Object(a.a)(Object(r.a)(t),"sort",s.a.attribute("sort")),Object(a.a)(Object(r.a)(t),"deleted_at",s.a.attribute("deleted_at",s.a.transformDate)),Object(a.a)(Object(r.a)(t),"answer",s.a.hasOne("answer")),Object(a.a)(Object(r.a)(t),"on_bio",s.a.attribute("on_bio")),t}return Object(o.a)(t,e),t.prototype.apiEndpoint=function(){return"/masquerade/fields"+(this.exists?"/"+this.data.id:"")},t}(s.a)},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["utils/withAttr"]},,function(e,t){e.exports=flarum.core.compat["components/Switch"]},,,,,function(e,t){e.exports=flarum.core.compat["components/ExtensionPage"]},function(e,t){e.exports=flarum.core.compat["utils/saveSettings"]},function(e,t){e.exports=flarum.core.compat.Component},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),i=n(4);function s(e,t,n){if(void 0===n)return e&&e.h5s&&e.h5s.data&&e.h5s.data[t];e.h5s=e.h5s||{},e.h5s.data=e.h5s.data||{},e.h5s.data[t]=n}var l=function(e,t){if(!(e instanceof NodeList||e instanceof HTMLCollection||e instanceof Array))throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");return"string"!=typeof t?Array.from(e):Array.from(e).filter((function(e){return 1===e.nodeType&&e.matches(t)}))},u=new Map,d=function(){function e(){this._config=new Map,this._placeholder=void 0,this._data=new Map}return Object.defineProperty(e.prototype,"config",{get:function(){var e={};return this._config.forEach((function(t,n){e[n]=t})),e},set:function(e){if("object"!=typeof e)throw new Error("You must provide a valid configuration object to the config setter.");var t=Object.assign({},e);this._config=new Map(Object.entries(t))},enumerable:!1,configurable:!0}),e.prototype.setConfig=function(e,t){if(!this._config.has(e))throw new Error("Trying to set invalid configuration item: "+e);this._config.set(e,t)},e.prototype.getConfig=function(e){if(!this._config.has(e))throw new Error("Invalid configuration item requested: "+e);return this._config.get(e)},Object.defineProperty(e.prototype,"placeholder",{get:function(){return this._placeholder},set:function(e){if(!(e instanceof HTMLElement)&&null!==e)throw new Error("A placeholder must be an html element or null.");this._placeholder=e},enumerable:!1,configurable:!0}),e.prototype.setData=function(e,t){if("string"!=typeof e)throw new Error("The key must be a string.");this._data.set(e,t)},e.prototype.getData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.get(e)},e.prototype.deleteData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.delete(e)},e}(),c=function(e){if(!(e instanceof HTMLElement))throw new Error("Please provide a sortable to the store function.");return u.has(e)||u.set(e,new d),u.get(e)};function f(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)f(e[r],t,n);else e.addEventListener(t,n),c(e).setData("event"+t,n)}function p(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)p(e[n],t);else e.removeEventListener(t,c(e).getData("event"+t)),c(e).deleteData("event"+t)}function h(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)h(e[r],t,n);else e.setAttribute(t,n)}function g(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)g(e[n],t);else e.removeAttribute(t)}var v=function(e){if(!e.parentElement||0===e.getClientRects().length)throw new Error("target element must be part of the dom");var t=e.getClientRects()[0];return{left:t.left+window.pageXOffset,right:t.right+window.pageXOffset,top:t.top+window.pageYOffset,bottom:t.bottom+window.pageYOffset}},b=function(e,t){if(!(e instanceof HTMLElement&&(t instanceof NodeList||t instanceof HTMLCollection||t instanceof Array)))throw new Error("You must provide an element and a list of elements.");return Array.from(t).indexOf(e)},y=function(e){if(!(e instanceof HTMLElement))throw new Error("Element is not a node element.");return null!==e.parentNode},w=function(e,t,n){if(!(e instanceof HTMLElement&&e.parentElement instanceof HTMLElement))throw new Error("target and element must be a node");e.parentElement.insertBefore(t,"before"===n?e:e.nextElementSibling)},E=function(e,t){return w(e,t,"after")},x=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return"border-box"===t.getPropertyValue("box-sizing")?parseInt(t.getPropertyValue("height"),10):["height","padding-top","padding-bottom"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},O=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return["width","padding-left","padding-right"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},T=function(e,t){if(!(e instanceof Array))throw new Error("You must provide a Array of HTMLElements to be filtered.");return"string"!=typeof t?e:e.filter((function(e){return e.querySelector(t)instanceof HTMLElement||e.shadowRoot&&e.shadowRoot.querySelector(t)instanceof HTMLElement})).map((function(e){return e.querySelector(t)||e.shadowRoot&&e.shadowRoot.querySelector(t)}))},C=function(e){return e.composedPath&&e.composedPath()[0]||e.target},q=function(e,t,n){return{element:e,posX:n.pageX-t.left,posY:n.pageY-t.top}},F=function(e,t){if(!0===e.isSortable){var n=c(e).getConfig("acceptFrom");if(null!==n&&!1!==n&&"string"!=typeof n)throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');if(null!==n)return!1!==n&&n.split(",").filter((function(e){return e.length>0&&t.matches(e)})).length>0;if(e===t)return!0;if(void 0!==c(e).getConfig("connectWith")&&null!==c(e).getConfig("connectWith"))return c(e).getConfig("connectWith")===c(t).getConfig("connectWith")}return!1},j={items:null,connectWith:null,disableIEFix:null,acceptFrom:null,copy:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,dropTargetContainerClass:!1,debounce:0,throttleTime:100,maxItems:0,itemSerializer:void 0,containerSerializer:void 0,customDragImage:null,orientation:"vertical"};var L,_,S,I,M,P,A,D,H,Y=function(e,t){if("string"==typeof c(e).getConfig("hoverClass")){var n=c(e).getConfig("hoverClass").split(" ");!0===t?(f(e,"mousemove",function(e,t){var n=this;if(void 0===t&&(t=250),"function"!=typeof e)throw new Error("You must provide a function as the first argument for throttle.");if("number"!=typeof t)throw new Error("You must provide a number as the second argument for throttle.");var r=null;return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];var i=Date.now();(null===r||i-r>=t)&&(r=i,e.apply(n,o))}}((function(t){0===t.buttons&&l(e.children,c(e).getConfig("items")).forEach((function(e){var r,o;e!==t.target?(r=e.classList).remove.apply(r,n):(o=e.classList).add.apply(o,n)}))}),c(e).getConfig("throttleTime"))),f(e,"mouseleave",(function(){l(e.children,c(e).getConfig("items")).forEach((function(e){var t;(t=e.classList).remove.apply(t,n)}))}))):(p(e,"mousemove"),p(e,"mouseleave"))}},B=function(e){p(e,"dragstart"),p(e,"dragend"),p(e,"dragover"),p(e,"dragenter"),p(e,"drop"),p(e,"mouseenter"),p(e,"mouseleave")},N=function(e,t){e&&p(e,"dragleave"),t&&t!==e&&p(t,"dragleave")},k=function(e){var t;(t=e).h5s&&delete t.h5s.data,g(e,"aria-dropeffect")},R=function(e){g(e,"aria-grabbed"),g(e,"aria-copied"),g(e,"draggable"),g(e,"role")};function z(e,t){if(t.composedPath)return t.composedPath().find((function(e){return e.isSortable}));for(;!0!==e.isSortable;)e=e.parentElement;return e}function W(e,t){var n=s(e,"opts"),r=l(e.children,n.items).filter((function(e){return e.contains(t)||e.shadowRoot&&e.shadowRoot.contains(t)}));return r.length>0?r[0]:t}var X=function(e){var t=s(e,"opts"),n=l(e.children,t.items),r=T(n,t.handle);(h(e,"aria-dropeffect","move"),s(e,"_disabled","false"),h(r,"draggable","true"),!1===t.disableIEFix)&&("function"==typeof(document||window.document).createElement("span").dragDrop&&f(r,"mousedown",(function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var e=this.parentElement;-1===n.indexOf(e);)e=e.parentElement;e.dragDrop()}})))};function U(e,t){var n=String(t);return t=t||{},"string"==typeof e&&(e=document.querySelectorAll(e)),e instanceof HTMLElement&&(e=[e]),e=Array.prototype.slice.call(e),/serialize/.test(n)?e.map((function(e){var t=s(e,"opts");return function(e,t,n){if(void 0===t&&(t=function(e,t){return e}),void 0===n&&(n=function(e){return e}),!(e instanceof HTMLElement)||!0==!e.isSortable)throw new Error("You need to provide a sortableContainer to be serialized.");if("function"!=typeof t||"function"!=typeof n)throw new Error("You need to provide a valid serializer for items and the container.");var r=s(e,"opts").items,o=l(e.children,r),a=o.map((function(t){return{parent:e,node:t,html:t.outerHTML,index:b(t,o)}}));return{container:n({node:e,itemCount:a.length}),items:a.map((function(n){return t(n,e)}))}}(e,t.itemSerializer,t.containerSerializer)})):(e.forEach((function(e){if(/enable|disable|destroy/.test(n))return U[n](e);["connectWith","disableIEFix"].forEach((function(e){Object.prototype.hasOwnProperty.call(t,e)&&null!==t[e]&&console.warn('HTML5Sortable: You are using the deprecated configuration "'+e+'". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')})),t=Object.assign({},j,c(e).config,t),c(e).config=t,s(e,"opts",t),e.isSortable=!0,function(e){var t=s(e,"opts"),n=l(e.children,t.items),r=T(n,t.handle);s(e,"_disabled","false"),B(n),N(I,D),p(r,"mousedown"),p(e,"dragover"),p(e,"dragenter"),p(e,"drop")}(e);var r,o=l(e.children,t.items);if(null!==t.placeholder&&void 0!==t.placeholder){var a=document.createElement(e.tagName);t.placeholder instanceof HTMLElement?a.appendChild(t.placeholder):a.innerHTML=t.placeholder,r=a.children[0]}c(e).placeholder=function(e,t,n){var r;if(void 0===n&&(n="sortable-placeholder"),!(e instanceof HTMLElement))throw new Error("You must provide a valid element as a sortable.");if(!(t instanceof HTMLElement)&&void 0!==t)throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");return void 0===t&&(["UL","OL"].includes(e.tagName)?t=document.createElement("li"):["TABLE","TBODY"].includes(e.tagName)?(t=document.createElement("tr")).innerHTML='<td colspan="100"></td>':t=document.createElement("div")),"string"==typeof n&&(r=t.classList).add.apply(r,n.split(" ")),t}(e,r,t.placeholderClass),s(e,"items",t.items),t.acceptFrom?s(e,"acceptFrom",t.acceptFrom):t.connectWith&&s(e,"connectWith",t.connectWith),X(e),h(o,"role","option"),h(o,"aria-grabbed","false"),Y(e,!0),f(e,"dragstart",(function(e){var n=C(e);if(!0!==n.isSortable&&(e.stopImmediatePropagation(),(!t.handle||n.matches(t.handle))&&"false"!==n.getAttribute("draggable"))){var r=z(n,e),o=W(r,n);A=l(r.children,t.items),M=A.indexOf(o),P=b(o,r.children),I=r,function(e,t,n){if(!(e instanceof Event))throw new Error("setDragImage requires a DragEvent as the first argument.");if(!(t instanceof HTMLElement))throw new Error("setDragImage requires the dragged element as the second argument.");if(n||(n=q),e.dataTransfer&&e.dataTransfer.setDragImage){var r=n(t,v(t),e);if(!(r.element instanceof HTMLElement)||"number"!=typeof r.posX||"number"!=typeof r.posY)throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");e.dataTransfer.effectAllowed="copyMove",e.dataTransfer.setData("text/plain",C(e).id),e.dataTransfer.setDragImage(r.element,r.posX,r.posY)}}(e,o,t.customDragImage),_=x(o),S=O(o),o.classList.add(t.draggingClass),L=function(e,t){var n=e;return!0===c(t).getConfig("copy")&&(h(n=e.cloneNode(!0),"aria-copied","true"),e.parentElement.appendChild(n),n.style.display="none",n.oldDisplay=e.style.display),n}(o,r),h(L,"aria-grabbed","true"),r.dispatchEvent(new CustomEvent("sortstart",{detail:{origin:{elementIndex:P,index:M,container:I},item:L,originalTarget:n}}))}})),f(e,"dragenter",(function(n){var r=C(n),o=z(r,n);o&&o!==D&&(H=l(o.children,s(o,"items")).filter((function(t){return t!==c(e).placeholder})),t.dropTargetContainerClass&&o.classList.add(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortenter",{detail:{origin:{elementIndex:P,index:M,container:I},destination:{container:o,itemsBeforeUpdate:H},item:L,originalTarget:r}})),f(o,"dragleave",(function(e){var n=e.relatedTarget||e.fromElement;e.currentTarget.contains(n)||(t.dropTargetContainerClass&&o.classList.remove(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortleave",{detail:{origin:{elementIndex:P,index:M,container:o},item:L,originalTarget:r}})))}))),D=o})),f(e,"dragend",(function(n){if(L){L.classList.remove(t.draggingClass),h(L,"aria-grabbed","false"),"true"===L.getAttribute("aria-copied")&&"true"!==s(L,"dropped")&&L.remove(),L.style.display=L.oldDisplay,delete L.oldDisplay;var r=Array.from(u.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(y)[0];r&&r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:P,index:M,container:I},item:L}})),D=null,L=null,_=null,S=null}})),f(e,"drop",(function(n){if(F(e,L.parentElement)){n.preventDefault(),n.stopPropagation(),s(L,"dropped","true");var r=Array.from(u.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(y)[0];E(r,L),r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:P,index:M,container:I},item:L}}));var o=c(e).placeholder,a=l(I.children,t.items).filter((function(e){return e!==o})),i=!0===this.isSortable?this:this.parentElement,d=l(i.children,s(i,"items")).filter((function(e){return e!==o})),f=b(L,Array.from(L.parentElement.children).filter((function(e){return e!==o}))),p=b(L,d);t.dropTargetContainerClass&&i.classList.remove(t.dropTargetContainerClass),P===f&&I===i||e.dispatchEvent(new CustomEvent("sortupdate",{detail:{origin:{elementIndex:P,index:M,container:I,itemsBeforeUpdate:A,items:a},destination:{index:p,elementIndex:f,container:i,itemsBeforeUpdate:H,items:d},item:L}}))}}));var i,d,m,g=(i=function(e,n,r,o){if(L)if(t.forcePlaceholderSize&&(c(e).placeholder.style.height=_+"px",c(e).placeholder.style.width=S+"px"),Array.from(e.children).indexOf(n)>-1){var a=x(n),i=O(n),s=b(c(e).placeholder,n.parentElement.children),d=b(n,n.parentElement.children);if(a>_||i>S){var f=a-_,p=i-S,m=v(n).top,h=v(n).left;if(s<d&&("vertical"===t.orientation&&o<m||"horizontal"===t.orientation&&r<h))return;if(s>d&&("vertical"===t.orientation&&o>m+a-f||"horizontal"===t.orientation&&r>h+i-p))return}void 0===L.oldDisplay&&(L.oldDisplay=L.style.display),"none"!==L.style.display&&(L.style.display="none");var g=!1;try{var y=v(n).top+n.offsetHeight/2,T=v(n).left+n.offsetWidth/2;g="vertical"===t.orientation&&o>=y||"horizontal"===t.orientation&&r>=T}catch(e){g=s<d}g?E(n,c(e).placeholder):function(e,t){w(e,t,"before")}(n,c(e).placeholder),Array.from(u.values()).filter((function(e){return void 0!==e.placeholder})).forEach((function(t){t.placeholder!==c(e).placeholder&&t.placeholder.remove()}))}else{var C=Array.from(u.values()).filter((function(e){return void 0!==e.placeholder})).map((function(e){return e.placeholder}));-1!==C.indexOf(n)||e!==n||l(n.children,t.items).length||(C.forEach((function(e){return e.remove()})),n.appendChild(c(e).placeholder))}},void 0===(d=t.debounce)&&(d=0),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(m),m=setTimeout((function(){i.apply(void 0,e)}),d)}),k=function(e){var t=e.target,n=!0===t.isSortable?t:z(t,e);if(t=W(n,t),L&&F(n,L.parentElement)&&"true"!==s(n,"_disabled")){var r=s(n,"opts");parseInt(r.maxItems)&&l(n.children,s(n,"items")).length>=parseInt(r.maxItems)&&L.parentElement!==n||(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=!0===c(n).getConfig("copy")?"copy":"move",g(n,t,e.pageX,e.pageY))}};f(o.concat(e),"dragover",k),f(o.concat(e),"dragenter",k)})),e)}U.destroy=function(e){!function(e){var t=s(e,"opts")||{},n=l(e.children,t.items),r=T(n,t.handle);p(e,"dragover"),p(e,"dragenter"),p(e,"dragstart"),p(e,"dragend"),p(e,"drop"),k(e),p(r,"mousedown"),B(n),R(n),N(I,D),e.isSortable=!1}(e)},U.enable=function(e){X(e)},U.disable=function(e){!function(e){var t=s(e,"opts"),n=l(e.children,t.items),r=T(n,t.handle);h(e,"aria-dropeffect","none"),s(e,"_disabled","true"),h(r,"draggable","false"),p(r,"mousedown")}(e)},U.__testing={_data:s,_removeItemEvents:B,_removeItemData:R,_removeSortableData:k,_removeContainerEvents:N};var V=U,G=n(5),J=n.n(G),K=n(17),Q=n.n(K),Z=n(9),ee=n.n(Z),te=n(12),ne=n.n(te),re=n(6),oe=n.n(re),ae=n(18),ie=n.n(ae),se=n(10),le=n.n(se),ue=n(19),de=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.newOption=""},n.view=function(){var e=this;return m(".Form-group",[m("label",o.a.translator.trans("fof-masquerade.admin.fields.options")),m("table",m("tbody",this.options().map((function(t,n){return m("tr",[m("td",m("input[type=text].FormControl",{oninput:function(t){e.updateOption(n,t.target.value)},value:t})),m("td",m("button.Button",{onclick:function(){e.moveOption(n,-1)}},J()("fas fa-chevron-up"))),m("td",m("button.Button",{onclick:function(){e.moveOption(n,1)}},J()("fas fa-chevron-down"))),m("td",m("button.Button.Button--danger",{onclick:function(){e.deleteOption(n)}},J()("fas fa-times")))])})))),m(".helpText",o.a.translator.trans("fof-masquerade.admin.fields.option-comma-warning")),m("table",m("tbody"),m("tr",[m("td",m("input[type=text].FormControl",{onchange:function(t){e.newOption=t.target.value},value:this.newOption,placeholder:o.a.translator.trans("fof-masquerade.admin.fields.option-new")})),m("td",m("button.Button.Button--primary",{onclick:function(){e.addOption()}},J()("fas fa-plus")))]))])},n.updateRules=function(e){this.attrs.onchange("in:"+e.join(","))},n.options=function(){var e=this.attrs.value.split("|"),t=[];return e.forEach((function(e){var n=e.split(":",2);"in"===n[0]&&(t=n[1].split(","))})),t},n.updateOption=function(e,t){var n=this.options();n[e]=t,this.updateRules(n)},n.moveOption=function(e,t){var n=this.options(),r=e+t;if(!(r<0||r>n.length-1)){var o=n.splice(e,1);n.splice(r,0,o[0]),this.updateRules(n)}},n.deleteOption=function(e){var t=this.options();t.splice(e,1),this.updateRules(t)},n.addOption=function(){if(""!==this.newOption){var e=this.options();e.push(this.newOption),this.newOption="",this.updateRules(e)}},t}(n.n(ue).a),ce=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.resetNew(),this.loading=!1,this.existing=[],this.loadExisting(),this.enforceProfileCompletion="1"===o.a.data.settings["masquerade.force-profile-completion"]},n.config=function(){var e=this;V(this.element.querySelector(".js-sortable-fields"),{handle:"legend"})[0].addEventListener("sortupdate",(function(){var t=e.$(".js-sortable-fields > .Field").map((function(){return $(this).data("id")})).get();e.updateSort(t)}))},n.oncreate=function(t){e.prototype.oncreate.call(this,t),this.config()},n.onupdate=function(){this.config()},n.content=function(){var e=this;return m(".ExtensionPage-settings.ProfileConfigurePane",m(".container",[m("h2",o.a.translator.trans("fof-masquerade.admin.general-options")),m(".Form-group",ne.a.component({state:this.enforceProfileCompletion,onchange:function(t){var n=t?"1":"0";ie()({"masquerade.force-profile-completion":n}),e.enforceProfileCompletion=n}},o.a.translator.trans("fof-masquerade.admin.fields.force-user-to-completion"))),m("h2",o.a.translator.trans("fof-masquerade.admin.fields.title")),m("form.js-sortable-fields",this.existing.map((function(t){return e.addField(t)}))),this.addField(this.new)]))},n.addField=function(e){var t=this,n=e.id();return m("fieldset.Field",{"data-id":e.id(),key:e.id()},[m("legend",[n?[oe.a.component({className:"Button Button--icon Button--danger",icon:"fas fa-trash",onclick:this.deleteField.bind(this,e)})," "]:null,m("span.Field-toggle",{onclick:function(e){return t.toggleField(e)}},[o.a.translator.trans("fof-masquerade.admin.fields."+(n?"edit":"add"),{field:e.name()})," ",J()("fas fa-caret-down")])]),m(".Field-body",[m(".Form-group",[m("label",o.a.translator.trans("fof-masquerade.admin.fields.name")),m("input.FormControl",{value:e.name(),oninput:le()("value",this.updateExistingFieldInput.bind(this,"name",e))}),m("span.helpText",o.a.translator.trans("fof-masquerade.admin.fields.name-help"))]),m(".Form-group",[m("label",o.a.translator.trans("fof-masquerade.admin.fields.description")),m("input.FormControl",{value:e.description(),oninput:le()("value",this.updateExistingFieldInput.bind(this,"description",e))}),m("span.helpText",o.a.translator.trans("fof-masquerade.admin.fields.description-help"))]),m(".Form-group",[m("label",o.a.translator.trans("fof-masquerade.admin.fields.icon")),m("input.FormControl",{value:e.icon(),oninput:le()("value",this.updateExistingFieldInput.bind(this,"icon",e))}),m("span.helpText",o.a.translator.trans("fof-masquerade.admin.fields.icon-help",{a:m("a",{href:"https://fontawesome.com/icons?m=free",target:"_blank"})}))]),m(".Form-group",ne.a.component({state:e.on_bio(),onchange:this.updateExistingFieldInput.bind(this,"on_bio",e)},o.a.translator.trans("fof-masquerade.admin.fields.on_bio"))),m(".Form-group",ne.a.component({state:e.required(),onchange:this.updateExistingFieldInput.bind(this,"required",e)},o.a.translator.trans("fof-masquerade.admin.fields.required"))),m(".Form-group",[m("label",o.a.translator.trans("fof-masquerade.admin.fields.type")),ee.a.component({onchange:function(n){"null"===n&&(n=null),t.updateExistingFieldInput("type",e,n)},options:this.availableTypes(),value:e.type()})]),"select"===e.type()?de.component({onchange:function(n){t.updateExistingFieldInput("validation",e,n)},value:e.validation()}):null,null===e.type()?m(".Form-group",[m("label",o.a.translator.trans("fof-masquerade.admin.fields.validation")),m("input.FormControl",{value:e.validation(),oninput:le()("value",this.updateExistingFieldInput.bind(this,"validation",e))}),m("span.helpText",o.a.translator.trans("fof-masquerade.admin.fields.validation-help",{a:m("a",{href:"https://laravel.com/docs/5.2/validation#available-validation-rules",target:"_blank"})}))]):null,m(".Form-group",m(".ButtonGroup",[oe.a.component({className:"Button Button--primary",loading:this.loading,disabled:!this.readyToAdd(e),onclick:n?this.updateExistingField.bind(this,e):this.submitAddField.bind(this)},o.a.translator.trans("fof-masquerade.admin.buttons."+(n?"edit":"add")+"-field")),n?oe.a.component({className:"Button Button--danger",loading:this.loading,onclick:this.deleteField.bind(this,e)},o.a.translator.trans("fof-masquerade.admin.buttons.delete-field")):null]))])])},n.updateExistingFieldInput=function(e,t,n){var r;t.pushAttributes(((r={})[e]=n,r))},n.updateSort=function(e){o.a.request({method:"POST",url:o.a.forum.attribute("apiUrl")+"/masquerade/fields/order",body:{sort:e}}).then(this.requestSuccess.bind(this))},n.toggleField=function(e){$(e.target).parents(".Field").toggleClass("active")},n.deleteField=function(e){e.delete().then(this.requestSuccess.bind(this))},n.submitAddField=function(e){var t=this;e.preventDefault(),this.new.save(this.new.data.attributes).then(this.requestSuccess.bind(this)).then((function(){t.resetNew()})),m.redraw()},n.updateExistingField=function(e){e.id()&&e.save(e.data.attributes).then(this.requestSuccess.bind(this))},n.requestSuccess=function(){this.existing=o.a.store.all("masquerade-field"),this.existing.sort((function(e,t){return e.sort()<t.sort()?-1:e.sort()>t.sort()?1:0})),this.loading=!1,m.redraw()},n.loadExisting=function(){var e=this;return this.loading=!0,o.a.request({method:"GET",url:o.a.forum.attribute("apiUrl")+"/masquerade/fields"}).then((function(t){o.a.store.pushPayload(t),e.requestSuccess()}))},n.resetNew=function(){this.new=o.a.store.createRecord("masquerade-field",{attributes:{name:"",description:"",prefix:"",icon:"",required:!1,on_bio:!1,type:null,validation:""}})},n.readyToAdd=function(e){return!!e.name()},n.availableTypes=function(){return{url:o.a.translator.trans("fof-masquerade.admin.types.url"),email:o.a.translator.trans("fof-masquerade.admin.types.email"),boolean:o.a.translator.trans("fof-masquerade.admin.types.boolean"),select:o.a.translator.trans("fof-masquerade.admin.types.select"),null:o.a.translator.trans("fof-masquerade.admin.types.advanced")}},t}(Q.a);o.a.initializers.add("fof-masquerade",(function(){o.a.store.models["masquerade-field"]=a.a,o.a.extensionData.for("fof-masquerade").registerPage(ce).registerPermission({icon:"far fa-id-card",label:o.a.translator.trans("fof-masquerade.admin.permissions.view-profile"),permission:"fof.masquerade.view-profile",allowGuest:!0},"view").registerPermission({icon:"far fa-id-card",label:o.a.translator.trans("fof-masquerade.admin.permissions.have-profile"),permission:"fof.masquerade.have-profile"},"start")}))}]);
//# sourceMappingURL=admin.js.map