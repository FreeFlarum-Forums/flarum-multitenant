(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=flarum.core.compat["admin/app"];var n=t.n(e);function r(t,o){return r=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},r(t,o)}const a=flarum.core.compat["admin/components/ExtensionPage"];var i=t.n(a);const s=flarum.core.compat["common/components/LinkButton"];var u=t.n(s),c=function(t){var o,e;function a(){return t.apply(this,arguments)||this}e=t,(o=a).prototype=Object.create(e.prototype),o.prototype.constructor=o,r(o,e);var i=a.prototype;return i.oninit=function(o){t.prototype.oninit.call(this,o)},i.content=function(){var t=this;return[m("div",{className:"container"},m("div",{className:"FoFFormattingSettingsPage"},m("div",{className:"Form"},n().forum.attribute("fof-formatting.plugins").map((function(o){return t.buildSettingComponent({type:"boolean",setting:"fof-formatting.plugin."+o.toLowerCase(),label:m(u(),{href:"https://s9etextformatter.readthedocs.io/Plugins/"+o+"/Synopsis",external:!0,target:"_blank"},o),help:n().translator.trans("fof-formatting.admin.plugins."+o)})})),m("div",{className:"Form-group"},this.submitButton()))))]},a}(i());n().initializers.add("fof/formatting",(function(){n().extensionData.for("fof-formatting").registerPage(c)}))})(),module.exports=o})();
//# sourceMappingURL=admin.js.map