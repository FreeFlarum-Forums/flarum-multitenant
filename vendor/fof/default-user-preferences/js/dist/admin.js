(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat["admin/app"];var o=e.n(r);function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}const a=flarum.core.compat["admin/components/ExtensionPage"];var s=e.n(a);const u=flarum.core.compat["common/utils/ItemList"];var f=e.n(u),i=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,n(t,r);var s=a.prototype;return s.content=function(){return m("div",{className:"FoFDefaultPreferencesSettingsPage"},m("div",{className:"container"},m("div",{className:"Form-group"},this.defaultSettingsItems().toArray(),this.submitButton())))},s.defaultSettingsItems=function(){var e=this,t=new(f());return o().forum.attribute("fof-default-user-preferences").forEach((function(r){var n=r.key,a=r.type,s=r.value;t.add(n,e.buildSettingComponent({label:o().translator.trans("fof-default-user-preferences.admin.settings."+n),help:o().translator.trans("fof-default-user-preferences.admin.settings."+n+"-help"),setting:"fof-default-user-preferences."+n,type:a,placeholder:s}))})),t},a}(s());o().initializers.add("fof/default-user-preferences",(function(){o().extensionData.for("fof-default-user-preferences").registerPage(i)}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map