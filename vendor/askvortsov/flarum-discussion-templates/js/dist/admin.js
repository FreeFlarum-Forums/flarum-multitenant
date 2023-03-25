module.exports=function(t){var e={};function a(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=16)}([function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e,a){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["tags/models/Tag"]},,,,,,,,function(t,e){t.exports=flarum.core.compat["tags/components/EditTagModal"]},,function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(2),s=a.n(n),r=a(1),i=a.n(r),l=a(6),p=a.n(l),u=a(14),c=a.n(u),d=a(3),f=a(4),g=a.n(f),v=a(5),_=a.n(v),b=function(t){function e(){return t.apply(this,arguments)||this}Object(d.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.template=_()(this.attrs.model.template())},a.className=function(){return"TagTemplateModal Modal--large"},a.title=function(){return app.translator.trans("askvortsov-discussion-templates.admin.tag_template_modal.title")},a.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"Form"},m("p",null,app.translator.trans("askvortsov-discussion-templates.admin.tag_template_modal.customize_text")),m("div",{className:"Form-group"},m("textarea",{className:"FormControl",rows:"30",bidi:this.template})),m(i.a,{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.changed()},app.translator.trans("askvortsov-discussion-templates.admin.tag_template_modal.submit_button"))))]},a.changed=function(){return this.template()!==this.attrs.model.template()},a.onsubmit=function(t){t.preventDefault();var e=this.attrs.model,a=this.template();this.loading=!0,app.request({method:"PATCH",url:app.forum.attribute("apiUrl")+"/tags/"+e.id()+"/template",body:{data:{template:a}}}).then((function(){e.data.attributes.template=a,app.modal.close()}))},e}(g.a);app.initializers.add("askvortsov/flarum-discussion-templates",(function(){p.a.prototype.template=s.a.attribute("template"),Object(o.extend)(c.a.prototype,"fields",(function(t){var e=this;this.tag.id()&&t.add("tag-template-modal-button",m("fieldset",null,m("legend",null,app.translator.trans("askvortsov-discussion-templates.admin.tags.tag_template_heading")),m("div",{className:"helpText"},app.translator.trans("askvortsov-discussion-templates.admin.tags.tag_template_text")),m(i.a,{className:"Button Button--primary",onclick:function(){app.modal.show(b,{model:e.tag})}},app.translator.trans("askvortsov-discussion-templates.admin.tags.tag_template_button"))),-20)})),app.extensionData.for("askvortsov-discussion-templates").registerSetting({setting:"appendTemplateOnTagChange",label:app.translator.trans("askvortsov-discussion-templates.admin.settings.append_template_on_tag_change"),help:app.translator.trans("askvortsov-discussion-templates.admin.settings.append_template_on_tag_change_help"),type:"boolean"}).registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("askvortsov-discussion-templates.admin.settings.no_tag_template")),m("textarea",{className:"FormControl",rows:"10",bidi:this.setting("askvortsov-discussion-templates.no_tag_template")}))})).registerPermission({icon:"fas fa-reply",label:app.translator.trans("askvortsov-discussion-templates.admin.permissions.manage_own_discussion_reply_templates"),permission:"discussion.manageOwnDiscussionReplyTemplates"},"start",3).registerPermission({icon:"fas fa-reply",label:app.translator.trans("askvortsov-discussion-templates.admin.permissions.manage_all_reply_templates"),permission:"discussion.manageAllReplyTemplates"},"moderate",3)}))}]);
//# sourceMappingURL=admin.js.map