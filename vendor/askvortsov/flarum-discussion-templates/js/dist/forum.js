module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=15)}([function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e,o){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["tags/models/Tag"]},function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e){t.exports=flarum.core.compat["forum/components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["forum/states/ComposerState"]},function(t,e){t.exports=flarum.core.compat["tags/components/TagDiscussionModal"]},,function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(2),a=o.n(r),s=o(7),i=o.n(s),p=o(1),c=o.n(p),u=o(8),l=o.n(u),f=o(9),d=o.n(f),y=o(3),v=o(4),g=o.n(v),b=o(5),h=o.n(b),x=function(t){function e(){return t.apply(this,arguments)||this}Object(y.a)(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.discussion=this.attrs.discussion,this.replyTemplate=h()(this.discussion.replyTemplate())},o.className=function(){return"ReplyTemplateModal Modal"},o.title=function(){return app.translator.trans("askvortsov-discussion-templates.forum.reply_template.title")},o.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("textarea",{className:"FormControl",bidi:this.replyTemplate,rows:"6"})),m("div",{className:"Form-group"},c.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("askvortsov-discussion-templates.forum.reply_template.submit_button")))))},o.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var o=this.replyTemplate();if(o!==this.discussion.replyTemplate())return this.discussion.save({replyTemplate:o}).then((function(){m.redraw(),e.hide()})).catch((function(){e.loading=!1,m.redraw()}));this.hide()},e}(g.a);var _=o(10),T=o.n(_),O=o(11),j=o.n(O),C=o(12),M=o.n(C),k=o(6),w=o.n(k),N=o(13),S=o.n(N);function A(t){if(void 0===t&&(t=!1),app.composer.fields.tags){var e=app.composer.body.attrs.originalContent||"",o=app.composer.fields.content().trim();if(o===e||app.forum.attribute("appendTemplateOnTagChange")){var n={};app.composer.fields.tags.forEach((function(t){null!==t.position()&&t.template()&&(n[t.id()]=t.template())}));var r=Object.keys(n);if(2===r.length){var a=app.store.getById("tags",r[0]),s=app.store.getById("tags",r[1]);a.parent()===s&&delete n[r[1]],s.parent()===a&&delete n[r[0]]}if(1===Object.keys(n).length){var i=Object.values(n)[0];if(o===i)return;o===e?app.composer.body.attrs.originalContent=i:i="\n\n"+i,t?app.composer.fields.content(i):app.composer.editor.insertAtCursor(i,!1)}}}}app.initializers.add("askvortsov/flarum-discussion-templates",(function(){i.a.prototype.replyTemplate=a.a.attribute("replyTemplate"),i.a.prototype.canManageReplyTemplates=a.a.attribute("canManageReplyTemplates"),Object(n.extend)(l.a,"initAttrs",(function(t,e){e.originalContent||(e.originalContent=e.discussion.replyTemplate())})),Object(n.extend)(d.a,"userControls",(function(t,e){app.session.user&&e.canManageReplyTemplates()&&t.add("reply-template",m(c.a,{icon:"fas fa-reply",onclick:function(){return app.modal.show(x,{discussion:e})}},app.translator.trans("askvortsov-discussion-templates.forum.discussion_controls.reply_template_button")))})),w.a.prototype.template=a.a.attribute("template"),Object(n.extend)(T.a.prototype,"newDiscussionAction",(function(t){t.then((function(t){if(t.fields.tags.length>0)A();else{var e=app.forum.attribute("askvortsov-discussion-templates.no_tag_template");e&&t.editor.insertAtCursor(e,!1)}})).catch((function(){}))})),Object(n.extend)(S.a.prototype,"onremove",(function(){var t;(null==(t=app.composer.fields.tags)?void 0:t.length)>0&&A()})),Object(n.override)(M.a.prototype,"show",(function(t){if(this.body.componentClass===j.a&&""===this.fields.content().trim())if(this.fields.tags)A(!0);else if(Array.isArray(this.fields.tags)){var e=app.forum.attribute("askvortsov-discussion-templates.no_tag_template");e&&this.fields.content(e)}return t()}))}))}]);
//# sourceMappingURL=forum.js.map