(()=>{var o={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const e=flarum.core.compat["forum/app"];var n=o.n(e);const r=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/IndexPage"];var s=o.n(a);const c=flarum.core.compat["common/components/Button"];var u=o.n(c);const m=flarum.core.compat["common/utils/classList"];var i=o.n(m);const l=flarum.core.compat["forum/components/SignUpModal"];var d=o.n(l);n().initializers.add("datlechin/flarum-signup-button",(function(){(0,r.extend)(s().prototype,"sidebarItems",(function(o){var t=i()("Button","Button--primary","SignUpButton"),e=document.querySelector(".fas.fa-edit");null===n().session.user&&(e&&e.classList.remove(".IndexPage-newDiscussion>fa-edit"),e&&e.classList.add("fa-sign-in-alt"),o.add("signupButton",u().component({className:t,onclick:function(){return n().modal.show(d())}},n().translator.trans("datlechin-signup-button.forum.sign_up")),100))}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map