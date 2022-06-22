(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const n=flarum.core.compat["admin/app"];var r=e.n(n);function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}const i=flarum.core.compat["common/Model"];var s=e.n(i),l=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).name=s().attribute("name"),t.description=s().attribute("description"),t.type=s().attribute("type"),t.validation=s().attribute("validation"),t.required=s().attribute("required"),t.prefix=s().attribute("prefix"),t.icon=s().attribute("icon"),t.sort=s().attribute("sort"),t.deleted_at=s().attribute("deleted_at",s().transformDate),t.answer=s().hasOne("answer"),t.on_bio=s().attribute("on_bio"),t}return a(t,e),t.prototype.apiEndpoint=function(){return"/masquerade/fields"+(this.exists?"/"+this.data.id:"")},t}(s());function d(e,t,n){if(void 0===n)return e&&e.h5s&&e.h5s.data&&e.h5s.data[t];e.h5s=e.h5s||{},e.h5s.data=e.h5s.data||{},e.h5s.data[t]=n}var u=function(e,t){if(!(e instanceof NodeList||e instanceof HTMLCollection||e instanceof Array))throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");return"string"!=typeof t?Array.from(e):Array.from(e).filter((function(e){return 1===e.nodeType&&e.matches(t)}))},c=new Map,f=function(){function e(){this._config=new Map,this._placeholder=void 0,this._data=new Map}return Object.defineProperty(e.prototype,"config",{get:function(){var e={};return this._config.forEach((function(t,n){e[n]=t})),e},set:function(e){if("object"!=typeof e)throw new Error("You must provide a valid configuration object to the config setter.");var t=Object.assign({},e);this._config=new Map(Object.entries(t))},enumerable:!1,configurable:!0}),e.prototype.setConfig=function(e,t){if(!this._config.has(e))throw new Error("Trying to set invalid configuration item: "+e);this._config.set(e,t)},e.prototype.getConfig=function(e){if(!this._config.has(e))throw new Error("Invalid configuration item requested: "+e);return this._config.get(e)},Object.defineProperty(e.prototype,"placeholder",{get:function(){return this._placeholder},set:function(e){if(!(e instanceof HTMLElement)&&null!==e)throw new Error("A placeholder must be an html element or null.");this._placeholder=e},enumerable:!1,configurable:!0}),e.prototype.setData=function(e,t){if("string"!=typeof e)throw new Error("The key must be a string.");this._data.set(e,t)},e.prototype.getData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.get(e)},e.prototype.deleteData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.delete(e)},e}(),p=function(e){if(!(e instanceof HTMLElement))throw new Error("Please provide a sortable to the store function.");return c.has(e)||c.set(e,new f),c.get(e)};function h(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)h(e[r],t,n);else e.addEventListener(t,n),p(e).setData("event"+t,n)}function g(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)g(e[n],t);else e.removeEventListener(t,p(e).getData("event"+t)),p(e).deleteData("event"+t)}function v(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)v(e[r],t,n);else e.setAttribute(t,n)}function b(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)b(e[n],t);else e.removeAttribute(t)}var y,w,E,T,C,x,q,F,L,O=function(e){if(!e.parentElement||0===e.getClientRects().length)throw new Error("target element must be part of the dom");var t=e.getClientRects()[0];return{left:t.left+window.pageXOffset,right:t.right+window.pageXOffset,top:t.top+window.pageYOffset,bottom:t.bottom+window.pageYOffset}},S=function(e,t){if(!(e instanceof HTMLElement&&(t instanceof NodeList||t instanceof HTMLCollection||t instanceof Array)))throw new Error("You must provide an element and a list of elements.");return Array.from(t).indexOf(e)},_=function(e){if(!(e instanceof HTMLElement))throw new Error("Element is not a node element.");return null!==e.parentNode},I=function(e,t,n){if(!(e instanceof HTMLElement&&e.parentElement instanceof HTMLElement))throw new Error("target and element must be a node");e.parentElement.insertBefore(t,"before"===n?e:e.nextElementSibling)},M=function(e,t){return I(e,t,"after")},A=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return"border-box"===t.getPropertyValue("box-sizing")?parseInt(t.getPropertyValue("height"),10):["height","padding-top","padding-bottom"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},P=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return["width","padding-left","padding-right"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},D=function(e,t){if(!(e instanceof Array))throw new Error("You must provide a Array of HTMLElements to be filtered.");return"string"!=typeof t?e:e.filter((function(e){return e.querySelector(t)instanceof HTMLElement||e.shadowRoot&&e.shadowRoot.querySelector(t)instanceof HTMLElement})).map((function(e){return e.querySelector(t)||e.shadowRoot&&e.shadowRoot.querySelector(t)}))},H=function(e){return e.composedPath&&e.composedPath()[0]||e.target},B=function(e,t,n){return{element:e,posX:n.pageX-t.left,posY:n.pageY-t.top}},Y=function(e,t){if(!0===e.isSortable){var n=p(e).getConfig("acceptFrom");if(null!==n&&!1!==n&&"string"!=typeof n)throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');if(null!==n)return!1!==n&&n.split(",").filter((function(e){return e.length>0&&t.matches(e)})).length>0;if(e===t)return!0;if(void 0!==p(e).getConfig("connectWith")&&null!==p(e).getConfig("connectWith"))return p(e).getConfig("connectWith")===p(t).getConfig("connectWith")}return!1},j={items:null,connectWith:null,disableIEFix:null,acceptFrom:null,copy:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,dropTargetContainerClass:!1,debounce:0,throttleTime:100,maxItems:0,itemSerializer:void 0,containerSerializer:void 0,customDragImage:null,orientation:"vertical"},N=function(e){g(e,"dragstart"),g(e,"dragend"),g(e,"dragover"),g(e,"dragenter"),g(e,"drop"),g(e,"mouseenter"),g(e,"mouseleave")},k=function(e,t){e&&g(e,"dragleave"),t&&t!==e&&g(t,"dragleave")},R=function(e){var t;(t=e).h5s&&delete t.h5s.data,b(e,"aria-dropeffect")},z=function(e){b(e,"aria-grabbed"),b(e,"aria-copied"),b(e,"draggable"),b(e,"role")};function W(e,t){if(t.composedPath)return t.composedPath().find((function(e){return e.isSortable}));for(;!0!==e.isSortable;)e=e.parentElement;return e}function X(e,t){var n=d(e,"opts"),r=u(e.children,n.items).filter((function(e){return e.contains(t)||e.shadowRoot&&e.shadowRoot.contains(t)}));return r.length>0?r[0]:t}var U=function(e){var t=d(e,"opts"),n=u(e.children,t.items),r=D(n,t.handle);v(e,"aria-dropeffect","move"),d(e,"_disabled","false"),v(r,"draggable","true"),!1===t.disableIEFix&&"function"==typeof(document||window.document).createElement("span").dragDrop&&h(r,"mousedown",(function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var e=this.parentElement;-1===n.indexOf(e);)e=e.parentElement;e.dragDrop()}}))};function V(e,t){var n=String(t);return t=t||{},"string"==typeof e&&(e=document.querySelectorAll(e)),e instanceof HTMLElement&&(e=[e]),e=Array.prototype.slice.call(e),/serialize/.test(n)?e.map((function(e){var t=d(e,"opts");return function(e,t,n){if(void 0===t&&(t=function(e,t){return e}),void 0===n&&(n=function(e){return e}),!(e instanceof HTMLElement)||1==!e.isSortable)throw new Error("You need to provide a sortableContainer to be serialized.");if("function"!=typeof t||"function"!=typeof n)throw new Error("You need to provide a valid serializer for items and the container.");var r=d(e,"opts").items,o=u(e.children,r),a=o.map((function(t){return{parent:e,node:t,html:t.outerHTML,index:S(t,o)}}));return{container:n({node:e,itemCount:a.length}),items:a.map((function(n){return t(n,e)}))}}(e,t.itemSerializer,t.containerSerializer)})):(e.forEach((function(e){if(/enable|disable|destroy/.test(n))return V[n](e);["connectWith","disableIEFix"].forEach((function(e){Object.prototype.hasOwnProperty.call(t,e)&&null!==t[e]&&console.warn('HTML5Sortable: You are using the deprecated configuration "'+e+'". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')})),t=Object.assign({},j,p(e).config,t),p(e).config=t,d(e,"opts",t),e.isSortable=!0,function(e){var t=d(e,"opts"),n=u(e.children,t.items),r=D(n,t.handle);d(e,"_disabled","false"),N(n),k(T,F),g(r,"mousedown"),g(e,"dragover"),g(e,"dragenter"),g(e,"drop")}(e);var r,o=u(e.children,t.items);if(null!==t.placeholder&&void 0!==t.placeholder){var a=document.createElement(e.tagName);t.placeholder instanceof HTMLElement?a.appendChild(t.placeholder):a.innerHTML=t.placeholder,r=a.children[0]}p(e).placeholder=function(e,t,n){var r;if(void 0===n&&(n="sortable-placeholder"),!(e instanceof HTMLElement))throw new Error("You must provide a valid element as a sortable.");if(!(t instanceof HTMLElement)&&void 0!==t)throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");return void 0===t&&(["UL","OL"].includes(e.tagName)?t=document.createElement("li"):["TABLE","TBODY"].includes(e.tagName)?(t=document.createElement("tr")).innerHTML='<td colspan="100"></td>':t=document.createElement("div")),"string"==typeof n&&(r=t.classList).add.apply(r,n.split(" ")),t}(e,r,t.placeholderClass),d(e,"items",t.items),t.acceptFrom?d(e,"acceptFrom",t.acceptFrom):t.connectWith&&d(e,"connectWith",t.connectWith),U(e),v(o,"role","option"),v(o,"aria-grabbed","false"),function(e,t){if("string"==typeof p(e).getConfig("hoverClass")){var n=p(e).getConfig("hoverClass").split(" ");!0===t?(h(e,"mousemove",function(e,t){var n=this;if(void 0===t&&(t=250),"number"!=typeof t)throw new Error("You must provide a number as the second argument for throttle.");var r=null;return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];var i=Date.now();(null===r||i-r>=t)&&(r=i,e.apply(n,o))}}((function(t){0===t.buttons&&u(e.children,p(e).getConfig("items")).forEach((function(e){var r,o;e!==t.target?(r=e.classList).remove.apply(r,n):(o=e.classList).add.apply(o,n)}))}),p(e).getConfig("throttleTime"))),h(e,"mouseleave",(function(){u(e.children,p(e).getConfig("items")).forEach((function(e){var t;(t=e.classList).remove.apply(t,n)}))}))):(g(e,"mousemove"),g(e,"mouseleave"))}}(e,!0),h(e,"dragstart",(function(e){var n=H(e);if(!0!==n.isSortable&&(e.stopImmediatePropagation(),(!t.handle||n.matches(t.handle))&&"false"!==n.getAttribute("draggable"))){var r=W(n,e),o=X(r,n);q=u(r.children,t.items),C=q.indexOf(o),x=S(o,r.children),T=r,function(e,t,n){if(!(e instanceof Event))throw new Error("setDragImage requires a DragEvent as the first argument.");if(!(t instanceof HTMLElement))throw new Error("setDragImage requires the dragged element as the second argument.");if(n||(n=B),e.dataTransfer&&e.dataTransfer.setDragImage){var r=n(t,O(t),e);if(!(r.element instanceof HTMLElement)||"number"!=typeof r.posX||"number"!=typeof r.posY)throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");e.dataTransfer.effectAllowed="copyMove",e.dataTransfer.setData("text/plain",H(e).id),e.dataTransfer.setDragImage(r.element,r.posX,r.posY)}}(e,o,t.customDragImage),w=A(o),E=P(o),o.classList.add(t.draggingClass),y=function(e,t){var n=e;return!0===p(t).getConfig("copy")&&(v(n=e.cloneNode(!0),"aria-copied","true"),e.parentElement.appendChild(n),n.style.display="none",n.oldDisplay=e.style.display),n}(o,r),v(y,"aria-grabbed","true"),r.dispatchEvent(new CustomEvent("sortstart",{detail:{origin:{elementIndex:x,index:C,container:T},item:y,originalTarget:n}}))}})),h(e,"dragenter",(function(n){var r=H(n),o=W(r,n);o&&o!==F&&(L=u(o.children,d(o,"items")).filter((function(t){return t!==p(e).placeholder})),t.dropTargetContainerClass&&o.classList.add(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortenter",{detail:{origin:{elementIndex:x,index:C,container:T},destination:{container:o,itemsBeforeUpdate:L},item:y,originalTarget:r}})),h(o,"dragleave",(function(e){var n=e.relatedTarget||e.fromElement;e.currentTarget.contains(n)||(t.dropTargetContainerClass&&o.classList.remove(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortleave",{detail:{origin:{elementIndex:x,index:C,container:o},item:y,originalTarget:r}})))}))),F=o})),h(e,"dragend",(function(n){if(y){y.classList.remove(t.draggingClass),v(y,"aria-grabbed","false"),"true"===y.getAttribute("aria-copied")&&"true"!==d(y,"dropped")&&y.remove(),y.style.display=y.oldDisplay,delete y.oldDisplay;var r=Array.from(c.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(_)[0];r&&r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:x,index:C,container:T},item:y}})),F=null,y=null,w=null,E=null}})),h(e,"drop",(function(n){if(Y(e,y.parentElement)){n.preventDefault(),n.stopPropagation(),d(y,"dropped","true");var r=Array.from(c.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(_)[0];M(r,y),r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:x,index:C,container:T},item:y}}));var o=p(e).placeholder,a=u(T.children,t.items).filter((function(e){return e!==o})),i=!0===this.isSortable?this:this.parentElement,s=u(i.children,d(i,"items")).filter((function(e){return e!==o})),l=S(y,Array.from(y.parentElement.children).filter((function(e){return e!==o}))),f=S(y,s);t.dropTargetContainerClass&&i.classList.remove(t.dropTargetContainerClass),x===l&&T===i||e.dispatchEvent(new CustomEvent("sortupdate",{detail:{origin:{elementIndex:x,index:C,container:T,itemsBeforeUpdate:q,items:a},destination:{index:f,elementIndex:l,container:i,itemsBeforeUpdate:L,items:s},item:y}}))}}));var i,s,l,f=(i=function(e,n,r,o){if(y)if(t.forcePlaceholderSize&&(p(e).placeholder.style.height=w+"px",p(e).placeholder.style.width=E+"px"),Array.from(e.children).indexOf(n)>-1){var a=A(n),i=P(n),s=S(p(e).placeholder,n.parentElement.children),l=S(n,n.parentElement.children);if(a>w||i>E){var d=a-w,f=i-E,m=O(n).top,h=O(n).left;if(s<l&&("vertical"===t.orientation&&o<m||"horizontal"===t.orientation&&r<h))return;if(s>l&&("vertical"===t.orientation&&o>m+a-d||"horizontal"===t.orientation&&r>h+i-f))return}void 0===y.oldDisplay&&(y.oldDisplay=y.style.display),"none"!==y.style.display&&(y.style.display="none");var g=!1;try{var v=O(n).top+n.offsetHeight/2,b=O(n).left+n.offsetWidth/2;g="vertical"===t.orientation&&o>=v||"horizontal"===t.orientation&&r>=b}catch(e){g=s<l}g?M(n,p(e).placeholder):function(e,t){I(e,t,"before")}(n,p(e).placeholder),Array.from(c.values()).filter((function(e){return void 0!==e.placeholder})).forEach((function(t){t.placeholder!==p(e).placeholder&&t.placeholder.remove()}))}else{var T=Array.from(c.values()).filter((function(e){return void 0!==e.placeholder})).map((function(e){return e.placeholder}));-1!==T.indexOf(n)||e!==n||u(n.children,t.items).length||(T.forEach((function(e){return e.remove()})),n.appendChild(p(e).placeholder))}},void 0===(s=t.debounce)&&(s=0),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(l),l=setTimeout((function(){i.apply(void 0,e)}),s)}),m=function(e){var t=e.target,n=!0===t.isSortable?t:W(t,e);if(t=X(n,t),y&&Y(n,y.parentElement)&&"true"!==d(n,"_disabled")){var r=d(n,"opts");parseInt(r.maxItems)&&u(n.children,d(n,"items")).length>=parseInt(r.maxItems)&&y.parentElement!==n||(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=!0===p(n).getConfig("copy")?"copy":"move",f(n,t,e.pageX,e.pageY))}};h(o.concat(e),"dragover",m),h(o.concat(e),"dragenter",m)})),e)}V.destroy=function(e){!function(e){var t=d(e,"opts")||{},n=u(e.children,t.items),r=D(n,t.handle);g(e,"dragover"),g(e,"dragenter"),g(e,"dragstart"),g(e,"dragend"),g(e,"drop"),R(e),g(r,"mousedown"),N(n),z(n),k(T,F),e.isSortable=!1}(e)},V.enable=function(e){U(e)},V.disable=function(e){!function(e){var t=d(e,"opts"),n=u(e.children,t.items),r=D(n,t.handle);v(e,"aria-dropeffect","none"),d(e,"_disabled","true"),v(r,"draggable","false"),g(r,"mousedown")}(e)},V.__testing={_data:d,_removeItemEvents:N,_removeItemData:z,_removeSortableData:R,_removeContainerEvents:k};const G=V,J=flarum.core.compat["common/helpers/icon"];var K=e.n(J);const Q=flarum.core.compat["admin/components/ExtensionPage"];var Z=e.n(Q);const ee=flarum.core.compat["common/components/Select"];var te=e.n(ee);const ne=flarum.core.compat["common/components/Switch"];var re=e.n(ne);const oe=flarum.core.compat["common/components/Button"];var ae=e.n(oe);const ie=flarum.core.compat["admin/utils/saveSettings"];var se=e.n(ie);const le=flarum.core.compat["common/utils/withAttr"];var de=e.n(le);const ue=flarum.core.compat["common/Component"];var ce=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.newOption=""},n.view=function(){var e=this;return m(".Form-group",[m("label",r().translator.trans("fof-masquerade.admin.fields.options")),m("table",m("tbody",this.options().map((function(t,n){return m("tr",[m("td",m("input[type=text].FormControl",{oninput:function(t){e.updateOption(n,t.target.value)},value:t})),m("td",m("button.Button",{onclick:function(){e.moveOption(n,-1)}},K()("fas fa-chevron-up"))),m("td",m("button.Button",{onclick:function(){e.moveOption(n,1)}},K()("fas fa-chevron-down"))),m("td",m("button.Button.Button--danger",{onclick:function(){e.deleteOption(n)}},K()("fas fa-times")))])})))),m(".helpText",r().translator.trans("fof-masquerade.admin.fields.option-comma-warning")),m("table",m("tbody"),m("tr",[m("td",m("input[type=text].FormControl",{onchange:function(t){e.newOption=t.target.value},value:this.newOption,placeholder:r().translator.trans("fof-masquerade.admin.fields.option-new")})),m("td",m("button.Button.Button--primary",{onclick:function(){e.addOption()}},K()("fas fa-plus")))]))])},n.updateRules=function(e){this.attrs.onchange("in:"+e.join(","))},n.options=function(){var e=this.attrs.value.split("|"),t=[];return e.forEach((function(e){var n=e.split(":",2);"in"===n[0]&&(t=n[1].split(","))})),t},n.updateOption=function(e,t){var n=this.options();n[e]=t,this.updateRules(n)},n.moveOption=function(e,t){var n=this.options(),r=e+t;if(!(r<0||r>n.length-1)){var o=n.splice(e,1);n.splice(r,0,o[0]),this.updateRules(n)}},n.deleteOption=function(e){var t=this.options();t.splice(e,1),this.updateRules(t)},n.addOption=function(){if(""!==this.newOption){var e=this.options();e.push(this.newOption),this.newOption="",this.updateRules(e)}},t}(e.n(ue)()),fe=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.resetNew(),this.loading=!1,this.existing=[],this.loadExisting(),this.enforceProfileCompletion="1"===r().data.settings["masquerade.force-profile-completion"]},n.config=function(){var e=this;G(this.element.querySelector(".js-sortable-fields"),{handle:"legend"})[0].addEventListener("sortupdate",(function(){var t=e.$(".js-sortable-fields > .Field").map((function(){return $(this).data("id")})).get();e.updateSort(t)}))},n.oncreate=function(t){e.prototype.oncreate.call(this,t),this.config()},n.onupdate=function(){this.config()},n.content=function(){var e=this;return m(".ExtensionPage-settings.ProfileConfigurePane",m(".container",[m("h2",r().translator.trans("fof-masquerade.admin.general-options")),m(".Form-group",re().component({state:this.enforceProfileCompletion,onchange:function(t){var n=t?"1":"0";se()({"masquerade.force-profile-completion":n}),e.enforceProfileCompletion=n}},r().translator.trans("fof-masquerade.admin.fields.force-user-to-completion"))),m("h2",r().translator.trans("fof-masquerade.admin.fields.title")),m("form.js-sortable-fields",this.existing.map((function(t){return e.addField(t)}))),this.addField(this.new)]))},n.addField=function(e){var t=this,n=e.id();return m("fieldset.Field",{"data-id":e.id(),key:e.id()},[m("legend",[n?[ae().component({className:"Button Button--icon Button--danger",icon:"fas fa-trash",onclick:this.deleteField.bind(this,e)})," "]:null,m("span.Field-toggle",{onclick:function(e){return t.toggleField(e)}},[r().translator.trans("fof-masquerade.admin.fields."+(n?"edit":"add"),{field:e.name()})," ",K()("fas fa-caret-down")])]),m(".Field-body",[m(".Form-group",[m("label",r().translator.trans("fof-masquerade.admin.fields.name")),m("input.FormControl",{value:e.name(),oninput:de()("value",this.updateExistingFieldInput.bind(this,"name",e))}),m("span.helpText",r().translator.trans("fof-masquerade.admin.fields.name-help"))]),m(".Form-group",[m("label",r().translator.trans("fof-masquerade.admin.fields.description")),m("input.FormControl",{value:e.description(),oninput:de()("value",this.updateExistingFieldInput.bind(this,"description",e))}),m("span.helpText",r().translator.trans("fof-masquerade.admin.fields.description-help"))]),m(".Form-group",[m("label",r().translator.trans("fof-masquerade.admin.fields.icon")),m("input.FormControl",{value:e.icon(),oninput:de()("value",this.updateExistingFieldInput.bind(this,"icon",e))}),m("span.helpText",r().translator.trans("fof-masquerade.admin.fields.icon-help",{a:m("a",{href:"https://fontawesome.com/icons?m=free",target:"_blank"})}))]),m(".Form-group",re().component({state:e.on_bio(),onchange:this.updateExistingFieldInput.bind(this,"on_bio",e)},r().translator.trans("fof-masquerade.admin.fields.on_bio"))),m(".Form-group",re().component({state:e.required(),onchange:this.updateExistingFieldInput.bind(this,"required",e)},r().translator.trans("fof-masquerade.admin.fields.required"))),m(".Form-group",[m("label",r().translator.trans("fof-masquerade.admin.fields.type")),te().component({onchange:function(n){"null"===n&&(n=null),t.updateExistingFieldInput("type",e,n)},options:this.availableTypes(),value:e.type()})]),"select"===e.type()?ce.component({onchange:function(n){t.updateExistingFieldInput("validation",e,n)},value:e.validation()}):null,null===e.type()?m(".Form-group",[m("label",r().translator.trans("fof-masquerade.admin.fields.validation")),m("input.FormControl",{value:e.validation(),oninput:de()("value",this.updateExistingFieldInput.bind(this,"validation",e))}),m("span.helpText",r().translator.trans("fof-masquerade.admin.fields.validation-help",{a:m("a",{href:"https://laravel.com/docs/5.2/validation#available-validation-rules",target:"_blank"})}))]):null,m(".Form-group",m(".ButtonGroup",[ae().component({className:"Button Button--primary",loading:this.loading,disabled:!this.readyToAdd(e),onclick:n?this.updateExistingField.bind(this,e):this.submitAddField.bind(this)},r().translator.trans("fof-masquerade.admin.buttons."+(n?"edit":"add")+"-field")),n?ae().component({className:"Button Button--danger",loading:this.loading,onclick:this.deleteField.bind(this,e)},r().translator.trans("fof-masquerade.admin.buttons.delete-field")):null]))])])},n.updateExistingFieldInput=function(e,t,n){var r;t.pushAttributes(((r={})[e]=n,r))},n.updateSort=function(e){r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/masquerade/fields/order",body:{sort:e}}).then(this.requestSuccess.bind(this))},n.toggleField=function(e){$(e.target).parents(".Field").toggleClass("active")},n.deleteField=function(e){e.delete().then(this.requestSuccess.bind(this))},n.submitAddField=function(e){var t=this;e.preventDefault(),this.new.save(this.new.data.attributes).then(this.requestSuccess.bind(this)).then((function(){t.resetNew()})),m.redraw()},n.updateExistingField=function(e){e.id()&&e.save(e.data.attributes).then(this.requestSuccess.bind(this))},n.requestSuccess=function(){this.existing=r().store.all("masquerade-field"),this.existing.sort((function(e,t){return e.sort()<t.sort()?-1:e.sort()>t.sort()?1:0})),this.loading=!1,m.redraw()},n.loadExisting=function(){var e=this;return this.loading=!0,r().request({method:"GET",url:r().forum.attribute("apiUrl")+"/masquerade/fields"}).then((function(t){r().store.pushPayload(t),e.requestSuccess()}))},n.resetNew=function(){this.new=r().store.createRecord("masquerade-field",{attributes:{name:"",description:"",prefix:"",icon:"",required:!1,on_bio:!1,type:null,validation:""}})},n.readyToAdd=function(e){return!!e.name()},n.availableTypes=function(){return{url:r().translator.trans("fof-masquerade.admin.types.url"),email:r().translator.trans("fof-masquerade.admin.types.email"),boolean:r().translator.trans("fof-masquerade.admin.types.boolean"),select:r().translator.trans("fof-masquerade.admin.types.select"),null:r().translator.trans("fof-masquerade.admin.types.advanced")}},t}(Z());r().initializers.add("fof-masquerade",(function(){r().store.models["masquerade-field"]=l,r().extensionData.for("fof-masquerade").registerPage(fe).registerPermission({icon:"far fa-id-card",label:r().translator.trans("fof-masquerade.admin.permissions.view-profile"),permission:"fof.masquerade.view-profile",allowGuest:!0},"view").registerPermission({icon:"far fa-id-card",label:r().translator.trans("fof-masquerade.admin.permissions.have-profile"),permission:"fof.masquerade.have-profile"},"start").registerPermission({icon:"far fa-id-card",label:r().translator.trans("fof-masquerade.admin.permissions.edit-others-profile"),permission:"fof.masquerade.edit-others-profile"},"moderate")}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map