(()=>{var o={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const e=flarum.core.compat["forum/app"];var n=o.n(e);const r=flarum.core.compat["common/extend"],s=flarum.core.compat["common/models/Post"];var a=o.n(s);const c=flarum.core.compat["common/models/User"];var i=o.n(c);const d=flarum.core.compat["common/Model"];var p=o.n(d);const u=flarum.core.compat["forum/components/CommentPost"];var l=o.n(u);const f=flarum.core.compat["forum/components/SettingsPage"];var O=o.n(f);const b=flarum.core.compat["common/components/Switch"];var v=o.n(b);function y(o,t){return y=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o},y(o,t)}const P=flarum.core.compat["common/Component"];var h=o.n(P);const g=flarum.core.compat["common/components/Tooltip"];var _=o.n(g);const w=flarum.core.compat["common/helpers/icon"];var x=o.n(w),S=function(o){var t,e;function r(){return o.apply(this,arguments)||this}e=o,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,y(t,e);var s=r.prototype;return s.oninit=function(t){o.prototype.oninit.call(this,t)},s.view=function(){var o=this.attrs.post;return m(_(),{text:this.getPostedOn(o)},m("span",{className:"PostedOn"},x()(this.getIcon(o))," ",o.postedOn()))},s.getPostedOn=function(o){return n().translator.trans("datlechin-posted-on.forum.post.posted_on_text",{posted_on:o.postedOn()})},s.getIcon=function(o){switch(o.postedOn()){case"Windows":return"fab fa-windows";case"Ubuntu":return"fab fa-ubuntu";case"Linux":return"fab fa-linux";case"Mac OS":case"iPhone":case"iPad":return"fab fa-apple";case"Android":return"fab fa-android";case"BlackBerry":return"fab fa-blackberry";case"Mobile":return"fas fa-mobile-alt";default:return"fas fa-globe"}},r}(h());n().initializers.add("datlechin/flarum-posted-on",(function(){a().prototype.postedOn=p().attribute("posted_on"),i().prototype.disclosePostedOn=p().attribute("disclosePostedOn"),(0,r.extend)(l().prototype,"headerItems",(function(o){var t=this.attrs.post,e=t.user();null!==t.postedOn()&&!1!==e.disclosePostedOn()&&o.add("postedOn",S.component({post:t}))})),(0,r.extend)(O().prototype,"privacyItems",(function(o){var t=this;o.add("disclosePostedOn",m(v(),{state:this.user.disclosePostedOn(),onchange:function(o){t.disclosePostedOnLoading=!0,t.user.save({disclosePostedOn:o}).then((function(){t.disclosePostedOnLoading=!1,m.redraw()}))},loading:this.disclosePostedOnLoading},n().translator.trans("datlechin-posted-on.forum.settings.privacy_disclose_posted_on_label")))}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map