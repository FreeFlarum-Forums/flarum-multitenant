module.exports=function(a){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return a[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=a,n.c=t,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var o in a)n.d(e,o,function(t){return a[t]}.bind(null,o));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="",n(n.s=52)}([,function(a,t){a.exports=flarum.core.compat["admin/app"]},,function(a,t){a.exports=flarum.core.compat["common/Model"]},function(a,t){a.exports=flarum.core.compat["common/components/Button"]},function(a,t,n){"use strict";function e(a,t){return(e=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a})(a,t)}function o(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,e(a,t)}n.d(t,"a",(function(){return o}))},function(a,t){a.exports=flarum.core.compat["common/utils/withAttr"]},,function(a,t,n){"use strict";n.d(t,"a",(function(){return r}));var e=n(5),o=n(3),s=n.n(o),i=n(21),r=function(a){function t(){return a.apply(this,arguments)||this}return Object(e.a)(t,a),t}(n.n(i)()(s.a,{points:s.a.attribute("points"),name:s.a.attribute("name"),color:s.a.attribute("color")}))},function(a,t,n){"use strict";function e(a,t){void 0===t&&(t={}),t.style=t.style||{},t.className="rankLabel "+(t.className||"");var n=a.color();return t.style.backgroundColor=t.style.color=n,t.className+=" colored",m("span",t,m("span",{className:"rankLabel-text"},a.name()))}n.d(t,"a",(function(){return e}))},,function(a,t){a.exports=flarum.core.compat["common/components/Switch"]},,,,,,,function(a,t){a.exports=flarum.core.compat["common/utils/Stream"]},function(a,t,n){"use strict";n.d(t,"a",(function(){return e}));var e={Rank:n(8).a}},function(a,t,n){"use strict";n.d(t,"a",(function(){return e}));var e={rankLabel:n(9).a}},function(a,t){a.exports=flarum.core.compat["common/utils/mixin"]},,,,,,function(a,t){a.exports=flarum.core.compat["common/utils/ItemList"]},,,,,,,,,,,,,,,,,,,function(a,t){a.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(a,t){a.exports=flarum.core.compat["admin/utils/saveSettings"]},function(a,t){a.exports=flarum.core.compat["admin/components/UploadImageButton"]},,,,function(a,t,n){"use strict";n.r(t),n.d(t,"models",(function(){return e.a})),n.d(t,"helpers",(function(){return x.a})),n.d(t,"components",(function(){return O}));var e=n(19),o=n(1),s=n.n(o),i=n(5),r=n(46),l=n.n(r),u=n(4),c=n.n(u),f=n(47),p=n.n(f),d=n(11),g=n.n(d),h=n(6),v=n.n(h),k=n(18),b=n.n(k),y=n(27),P=n.n(y),w=n(48),N=function(a){function t(){return a.apply(this,arguments)||this}return Object(i.a)(t,a),t.prototype.resourceUrl=function(){return s.a.forum.attribute("apiUrl")+"/"+this.attrs.path},t}(n.n(w).a),R=function(a){function t(){return a.apply(this,arguments)||this}Object(i.a)(t,a);var n=t.prototype;return n.oninit=function(t){var n=this;a.prototype.oninit.call(this,t),this.fields=["convertedLikes","amountPerPost","amountPerDiscussion","postStartAmount","rankAmt","iconName","blockedUsers","pointsPlaceholder","iconNameAlt"],this.switches=["autoUpvotePosts","customRankingImages","rateLimit","showVotesOnDiscussionPage","useAlternateLayout","altPostVotingUi","upVotesOnly","firstPostOnly"],this.ranks=s.a.store.all("ranks"),this.values={},this.settingsPrefix="fof-gamification";var e=s.a.data.settings;this.fields.forEach((function(a){return n.values[a]=b()(e[n.addPrefix(a)])})),this.switches.forEach((function(a){return n.values[a]=b()(!!Number(e[n.addPrefix(a)]))})),this.newRank={points:b()(""),name:b()(""),color:b()("")}},n.content=function(){return m("div",{className:"SettingsPage"},m("div",{className:"container"},m("form",{onsubmit:this.onsubmit.bind(this)},this.settingsItems().toArray())))},n.updateName=function(a,t){a.save({name:t})},n.updatePoints=function(a,t){a.save({points:t})},n.updateColor=function(a,t){a.save({color:t})},n.deleteRank=function(a){var t=this;a.delete(),this.ranks.some((function(n,e){if(n.data.id===a.data.id)return t.ranks.splice(e,1),!0}))},n.addRank=function(){var a=this;s.a.store.createRecord("ranks").save({points:this.newRank.points(),name:this.newRank.name(),color:this.newRank.color()}).then((function(){a.newRank.color(""),a.newRank.name(""),a.newRank.points(""),m.redraw()}))},n.changed=function(){var a=this,t=this.switches.some((function(t){return a.values[t]()!==("1"==s.a.data.settings[a.addPrefix(t)])}));return this.fields.some((function(t){return a.values[t]()!==s.a.data.settings[a.addPrefix(t)]}))||t},n.prepareSubmissionData=function(){var a=this,t={};return this.switches.forEach((function(n){return t[a.addPrefix(n)]=a.values[n]()})),this.fields.forEach((function(n){return t[a.addPrefix(n)]=a.values[n]()})),t},n.onsubmit=function(a){var t=this;a.preventDefault(),this.loading||(this.loading=!0,s.a.alerts.dismiss(this.successAlert),p()(this.prepareSubmissionData()).then(this.onsaved.bind(this)).then((function(){return window.location.reload()})).catch(console.error).then((function(){t.loading=!1})))},n.addPrefix=function(a){return this.settingsPrefix+"."+a},n.settingsItems=function(){var a=this,t=new P.a;return t.add("convertLikesToUpvotes",m("div",null,m("div",{className:"helpText"},s.a.translator.trans("fof-gamification.admin.page.convert.help")),void 0===this.values.convertedLikes()?m(c.a,{type:"button",className:"Button Button--warning Ranks-button","aria-label":s.a.translator.trans("fof-gamification.admin.page.convert.button"),onclick:function(){s.a.request({url:s.a.forum.attribute("apiUrl")+"/fof/gamification/convert",method:"POST"}).then(a.values.convertedLikes("converting"))}},s.a.translator.trans("fof-gamification.admin.page.convert.button")):"converting"===this.values.convertedLikes()?m("label",null,s.a.translator.trans("fof-gamification.admin.page.convert.converting")):m("label",null," ",s.a.translator.trans("fof-gamification.admin.page.convert.converted",{number:this.values.convertedLikes()}))),100),t.add("ranks",m("fieldset",{className:"SettingsPage-ranks"},m("legend",null,s.a.translator.trans("fof-gamification.admin.page.ranks.title")),m("label",null,s.a.translator.trans("fof-gamification.admin.page.ranks.ranks")),m("div",{className:"helpText"},s.a.translator.trans("fof-gamification.admin.page.ranks.help.help")),m("div",{className:"Ranks--Container"},this.ranks.map((function(t){return m("div",null,m("input",{className:"FormControl Ranks-number",type:"number",value:t.points(),placeholder:s.a.translator.trans("fof-gamification.admin.page.ranks.help.points"),oninput:v()("value",a.updatePoints.bind(a,t))}),m("input",{className:"FormControl Ranks-name",value:t.name(),placeholder:s.a.translator.trans("fof-gamification.admin.page.ranks.help.name"),oninput:v()("value",a.updateName.bind(a,t))}),m("input",{className:"FormControl Ranks-color",value:t.color(),placeholder:s.a.translator.trans("fof-gamification.admin.page.ranks.help.color"),oninput:v()("value",a.updateColor.bind(a,t))}),m(c.a,{type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-times",onclick:a.deleteRank.bind(a,t)}))}))),m("div",null,m("input",{className:"FormControl Ranks-number",value:this.newRank.points(),placeholder:s.a.translator.trans("fof-gamification.admin.page.ranks.help.points"),type:"number",oninput:v()("value",this.newRank.points)}),m("input",{className:"FormControl Ranks-name",value:this.newRank.name(),placeholder:s.a.translator.trans("fof-gamification.admin.page.ranks.help.name"),oninput:v()("value",this.newRank.name)}),m("input",{className:"FormControl Ranks-color",value:this.newRank.color(),placeholder:s.a.translator.trans("fof-gamification.admin.page.ranks.help.color"),oninput:v()("value",this.newRank.color)}),m(c.a,{type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-plus","aria-label":"add",onclick:this.addRank.bind(this)})),m("label",null,s.a.translator.trans("fof-gamification.admin.page.ranks.number_title")),m("input",{className:"FormControl Ranks-default",value:this.values.rankAmt()||"",placeholder:"2",oninput:v()("value",this.values.rankAmt)})),90),t.add("voteSettings",m("[",null,m("legend",null,s.a.translator.trans("fof-gamification.admin.page.votes.title")),this.voteItems().toArray()),80),t.add("rankingsPage",m("[",null,m("legend",null,s.a.translator.trans("fof-gamification.admin.page.rankings.title")),this.rankingsItems().toArray()),70),t.add("submit",m(c.a,{type:"submit",className:"Button Button--primary Ranks-save",loading:this.loading,disabled:!this.changed()},s.a.translator.trans("fof-gamification.admin.page.save_settings")),0),t},n.voteItems=function(){var a=new P.a;return a.add("icon",m("[",null,m("label",null,s.a.translator.trans("fof-gamification.admin.page.votes.icon_name")),m("div",{className:"helpText"},s.a.translator.trans("fof-gamification.admin.page.votes.icon_help")),m("input",{className:"FormControl Ranks-default",value:this.values.iconName()||"",placeholder:"thumbs",oninput:v()("value",this.values.iconName)})),100),a.add("altIcon",m("[",null,m("label",null,s.a.translator.trans("fof-gamification.admin.page.alt_votes.icon_name")),m("div",{className:"helpText"},s.a.translator.trans("fof-gamification.admin.page.votes.icon_help")),m("input",{className:"FormControl Ranks-default",value:this.values.iconNameAlt()||"",placeholder:"arrow",oninput:v()("value",this.values.iconNameAlt)})),90),a.add("autoUpvote",m(g.a,{state:this.values.autoUpvotePosts()||!1,onchange:this.values.autoUpvotePosts,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.votes.auto_upvote")),80),a.add("rateLimit",m(g.a,{state:this.values.rateLimit()||!1,onchange:this.values.rateLimit,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.votes.rate_limit")),70),a.add("opVotesOnDiscussionList",m(g.a,{state:this.values.showVotesOnDiscussionPage()||!1,onchange:this.values.showVotesOnDiscussionPage,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.votes.discussion_page")),60),a.add("altDiscussionListLayout",m(g.a,{state:this.values.useAlternateLayout()||!1,onchange:this.values.useAlternateLayout,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.votes.alternate_layout")),50),a.add("altPostLayout",m(g.a,{state:this.values.altPostVotingUi()||!1,onchange:this.values.altPostVotingUi,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.votes.alternate_post_layout")),40),a.add("upvotesOnly",m(g.a,{state:this.values.upVotesOnly()||!1,onchange:this.values.upVotesOnly,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.votes.upvotes_only")),30),a.add("firstPostOnly",m(g.a,{state:this.values.firstPostOnly()||!1,onchange:this.values.firstPostOnly,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.votes.first_post_only")),20),a.add("pointsPlaceholder",m("[",null,m("label",null,s.a.translator.trans("fof-gamification.admin.page.votes.points_title")),m("input",{className:"FormControl Ranks-default",value:this.values.pointsPlaceholder()||"",placeholder:s.a.translator.trans("fof-gamification.admin.page.votes.points_placeholder")+"{points}",oninput:v()("value",this.values.pointsPlaceholder)})),10),a},n.rankingsItems=function(){var a=new P.a;return a.add("customImages",m(g.a,{state:this.values.customRankingImages()||!1,onchange:this.values.customRankingImages,className:"votes-switch"},s.a.translator.trans("fof-gamification.admin.page.rankings.enable")),100),a.add("ignoredUsers",m("[",null,m("label",null,s.a.translator.trans("fof-gamification.admin.page.rankings.blocked.title")),m("input",{className:"FormControl Ranks-blocked",placeholder:s.a.translator.trans("fof-gamification.admin.page.rankings.blocked.placeholder"),value:this.values.blockedUsers()||"",oninput:v()("value",this.values.blockedUsers)})),90),a.add("customImages",m("[",null,m("div",{className:"helpText"},s.a.translator.trans("fof-gamification.admin.page.rankings.blocked.help")),[1,2,3].map((function(a){return m("[",null,m("label",{className:"Upload-label"},s.a.translator.trans("fof-gamification.admin.page.rankings.custom_image_"+a)),m(N,{className:"Upload-button",name:"fof-gamification.topimage"+a,path:"fof/gamification/topimage"+a,"aria-label":s.a.translator.trans("fof-gamification.admin.page.rankings.custom_image_"+a)}),m("br",null))}))),80),a},t}(l.a),_=n(8),x=n(20),O={SettingsPage:R,UploadImageButton:N};s.a.initializers.add("fof-gamification",(function(a){a.store.models.ranks=_.a,a.extensionData.for("fof-gamification").registerPermission({icon:"fas fa-thumbs-up",label:a.translator.trans("fof-gamification.admin.permissions.vote_label"),permission:"discussion.votePosts"},"reply").registerPermission({icon:"fas fa-thumbs-up",label:a.translator.trans("fof-gamification.admin.permissions.see_votes_label"),permission:"discussion.canSeeVotes",allowGuest:!0},"view").registerPermission({icon:"fas fa-info-circle",label:a.translator.trans("fof-gamification.admin.permissions.see_voters_label"),permission:"discussion.canSeeVoters"},"view").registerPermission({icon:"fas fa-trophy",label:a.translator.trans("fof-gamification.admin.permissions.see_ranking_page"),permission:"fof.gamification.viewRankingPage",allowGuest:!0},"view").registerPage(R)}))}]);
//# sourceMappingURL=admin.js.map