module.exports=function(t){var e={};function r(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=20)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Component},,function(t,e){t.exports=flarum.core.compat["components/Select"]},,,,,,,,,,,,,function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e,r){"use strict";r.r(e);var s=r(1),o=r(0),n=r.n(o),i=r(17),a=r.n(i),p=r(18),c=r.n(p),l=r(19),u=r.n(l),d=r(2),f=r.n(d);class h extends f.a{init(){this.key=this.props.key,this.cast=this.props.cast||(t=>t)}setting(){return app.modal.component.setting(this.key)}getValue(){return this.cast(this.setting()())}}class b extends h{view(){return u.a.component({state:!!Number(this.getValue()),children:this.props.label||this.props.children,onchange:this.setting()})}}class y extends h{view(){const t=Object.assign({},this.props),e=this.props.label||this.props.children;return t.className="FormControl "+(t.className||""),t.bidi=this.setting(),t.simple?m("input",t):m("div.Form-group",[m("label",e),m("input",t)])}}class g extends y{init(){y.prototype.init.call(this),this.cast=(t=>Number(t)),this.props.type="number"}}r(4);const v={boolean:b,string:y,integer:g,number:g};class x extends c.a{init(){this.props.items=Array.from(this.props.items||[]),this.settings={},this.setting=this.setting.bind(this),this.props.onsaved&&(this.onsaved=this.props.onsaved.bind(this))}className(){return[this.props.className,this.props.size&&`Modal--${this.props.size}`].filter(Boolean).join(" ")}title(){return this.props.title}form(){return this.props.form||[...this.props.items].map(t=>!t||"div"===t.tag||t.attrs&&t.attrs.className&&t.attrs.className.contains("Form-group")?t:m("div.Form-group",t))}static createItemsFromValidationRules(t,e,r){const s=[];for(const o in t){const n=e+o.toLowerCase(),i=t[o].split("|"),a=i.find(t=>v[t])||"string",p=a&&v[a]||y,c=i.includes("required"),l=r&&(app.translator.trans[`${r}${o.toLowerCase()}-label`]||o)||o,u=app.translator.translations[`${r}${o.toLowerCase()}-description`];s.push(m.prop(`div.Form-group${c?".required":""}`,["boolean"!==a&&m("label",l),p.component({type:a,key:n,required:c,children:l,simple:!0}),u&&m("span",u)]))}return s}}n.a.initializers.add("fof-user-directory",function(t){Object(s.extend)(a.a.prototype,"viewItems",function(e){e.add("fof-user-directory",{icon:"far fa-address-book",label:t.translator.trans("fof-user-directory.admin.permissions.view_user_directory"),permission:"fof.user-directory.view",allowGuest:!0})}),t.extensionSettings["fof-user-directory"]=function(){return t.modal.show(new x({title:t.translator.trans("fof-user-directory.admin.settings.title"),size:"medium",items:[m(b,{key:"fof-user-directory-link"},t.translator.trans("fof-user-directory.admin.settings.link"))]}))}})}]);
//# sourceMappingURL=admin.js.map