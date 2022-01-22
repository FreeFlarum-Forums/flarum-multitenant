module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e){t.exports=flarum.core.compat["admin/app"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/components/Placeholder"]},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a);function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}var l=n(5),s=n.n(l),c=n(3),u=n.n(c),d=n(6),h=n.n(d),p=n(7),f=n.n(p),b=n(1),y=n.n(b),v=n(8),g=n.n(v),x=n(9),_=n.n(x),N=n(4),P=n.n(N),w=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.item=this.attrs.item||o.a.store.createRecord("html-headers"),this.description=P()(this.item.description()||""),this.header=P()(this.item.header()||""),this.loading=!1},n.className=function(){return"Modal--medium"},n.title=function(){return this.item.exists?o.a.translator.trans("ianm-html-head.admin.modal.edit_title"):o.a.translator.trans("ianm-html-head.admin.modal.create_title")},n.content=function(){return m("div",{className:"Modal-body"},m("p",null,o.a.translator.trans("ianm-html-head.admin.modal.text")),m("div",{className:"Form-group"},m("label",{className:"label"},o.a.translator.trans("ianm-html-head.admin.modal.description_label")),m("input",{type:"text",className:"FormControl",bidi:this.description,required:!0})),m("div",{className:"Form-group"},m("label",{className:"label"},o.a.translator.trans("ianm-html-head.admin.modal.header_label")),m("input",{type:"text",className:"FormControl",bidi:this.header,required:!0,placeholder:'<link rel="example" href="example">'})),m("div",{className:"Form-group"},m(y.a,{className:"Button Button--primary",type:"submit",loading:this.loading},o.a.translator.trans("ianm-html-head.admin.modal.save_button"))))},n.onsubmit=function(t){if(t.preventDefault(),this.header()){this.loading=!0;var e={description:this.description(),header:this.header()};this.item.save(e).then(this.hide.bind(this),this.onerror.bind(this),this.loaded.bind(this))}},e}(_.a),B=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.item=this.attrs.headItem},n.view=function(){var t=this;return m("tr",null,m("td",null,this.item.description()),m("td",null,m("code",null,this.item.header())),m("td",null,g.a.component({state:this.item.data.attributes.active,onchange:function(e){t.activeLoading=!0,o.a.request({method:"PATCH",url:o.a.forum.attribute("apiUrl")+"/html-headers/"+t.item.id(),body:{active:e}}).then((function(e){t.item.data=e.data,t.activeLoading=!1,m.redraw()}))},loading:this.activeLoading})),m("td",null,m("div",{className:"Button--group"},y.a.component({className:"Button Button--secondary",onclick:function(){return o.a.modal.show(w,{item:t.item})}},o.a.translator.trans("ianm-html-head.admin.table.edit_button")),y.a.component({className:"Button Button--danger",onclick:function(){t.deleting=!0,t.item.delete().then((function(){t.deleting=!1,m.redraw()}))},loading:this.deleting},o.a.translator.trans("ianm-html-head.admin.table.delete_button")))))},e}(u.a),O=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.refresh()},n.view=function(){return m("div",null,m("div",{className:"HtmlHeadSettingsPage--controls"},y.a.component({className:"Button Button--primary",icon:"fas fa-plus",onclick:function(){return o.a.modal.show(w)}},o.a.translator.trans("ianm-html-head.admin.create_button"))),m("br",null),m("div",{className:"HtmlHeadSettingsPage-table"},this.loading?h.a.component():o.a.store.all("html-headers").length?m("table",{style:{width:"100%",textAlign:"left"},className:"table"},m("thead",null,m("tr",null,m("th",null,o.a.translator.trans("ianm-html-head.admin.table.description_label")),m("th",null,o.a.translator.trans("ianm-html-head.admin.table.header_label")),m("th",null,o.a.translator.trans("ianm-html-head.admin.table.active_label")),m("th",null))),m("tbody",null,o.a.store.all("html-headers").map((function(t){return B.component({headItem:t})})))):m("div",null,f.a.component({text:o.a.translator.trans("ianm-html-head.admin.table.empty_text")}))))},n.refresh=function(){return this.loadResults().then(this.parseResults.bind(this))},n.loadResults=function(){return o.a.store.find("html-headers")},n.parseResults=function(t){this.loading=!1,m.redraw()},e}(u.a),S=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e)},n.content=function(){return[m("div",{className:"container"},m("div",{className:"HtmlHeadSettingsPage"},m(O,null)))]},e}(s.a),j=n(2),M=n.n(j),H=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).id=M.a.attribute("id"),e.description=M.a.attribute("description"),e.header=M.a.attribute("header"),e.active=M.a.attribute("active"),e}return i(e,t),e}(M.a);o.a.initializers.add("ianm-html-head",(function(){o.a.store.models["html-headers"]=H,o.a.extensionData.for("ianm-html-head").registerPage(S)}))}]);
//# sourceMappingURL=admin.js.map