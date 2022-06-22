(()=>{var t={n:o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return t.d(a,{a}),a},d:(o,a)=>{for(var n in a)t.o(a,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:a[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const a=flarum.core.compat["forum/app"];var n=t.n(a);const i=flarum.core.compat["common/Model"];var e=t.n(i);const s=flarum.core.compat["common/models/User"];var r=t.n(s);const c=flarum.core.compat["common/extend"],l=flarum.core.compat["forum/components/UserCard"];var f=t.n(l);const u=flarum.core.compat["common/components/Badge"];var b=t.n(u);const d=flarum.core.compat["common/utils/ItemList"];var p=t.n(d);const h=flarum.core.compat["common/utils/classList"];var v=t.n(h);function g(t,o){return g=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},g(t,o)}function y(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,g(t,o)}const w=flarum.core.compat["common/components/Modal"];var x=t.n(w);const k=flarum.core.compat["common/components/Button"];var S=t.n(k);const B=flarum.core.compat["common/utils/Stream"];var N=t.n(B);const C=flarum.core.compat["common/Component"];var E=t.n(C);const F=flarum.core.compat["common/utils/withAttr"];var _=t.n(F);const O=flarum.core.compat["common/components/Dropdown"];var j=t.n(O);const P=flarum.core.compat["common/helpers/icon"];var I=t.n(P),U=function(t){function o(){return t.apply(this,arguments)||this}y(o,t),o.initAttrs=function(o){t.initAttrs.call(this,o),o.className="icondropdown",o.buttonClassName="Button Button--icon",o.menuClassName="social-dropdown-menu"};var a=o.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o),this.icons={social:["fas fa-envelope","fas fa-globe","fab fa-amazon","fab fa-angellist","fab fa-apple","fab fa-behance","fab fa-bitbucket","fab fa-codepen","fab fa-connectdevelop","fab fa-dashcube","fab fa-delicious","fab fa-deviantart","fab fa-digg","fab fa-discord","fab fa-dribbble","fab fa-dropbox","fab fa-drupal","fab fa-facebook","fab fa-flickr","fab fa-foursquare","fab fa-get-pocket","fab fa-git","fab fa-github","fab fa-github-alt","fab fa-google","fab fa-google-plus","fab fa-google-wallet","fab fa-hacker-news","fab fa-instagram","fab fa-ioxhost","fab fa-joomla","fab fa-jsfiddle","fab fa-lastfm","fab fa-leanpub","fab fa-linkedin","fab fa-mastodon","fab fa-medium","fab fa-odnoklassniki","fab fa-opencart","fab fa-pagelines","fab fa-paypal","fab fa-pied-piper-alt","fab fa-pinterest-p","fab fa-playstation","fab fa-qq","fab fa-reddit","fab fa-renren","fab fa-sellsy","fas fa-share-alt","fab fa-shirtsinbulk","fab fa-simplybuilt","fab fa-skyatlas","fab fa-skype","fab fa-slack","fab fa-slideshare","fab fa-soundcloud","fab fa-spotify","fab fa-stack-exchange","fab fa-stack-overflow","fab fa-steam","fab fa-stumbleupon","fab fa-telegram","fab fa-tencent-weibo","fab fa-trello","fab fa-tripadvisor","fab fa-tumblr","fab fa-twitch","fab fa-twitter","fab fa-viacoin","fab fa-vimeo","fab fa-vine","fab fa-vk","fab fa-weibo","fab fa-weixin","fab fa-whatsapp","fab fa-wordpress","fab fa-xbox","fab fa-xing","fab fa-y-combinator","fab fa-yandex","fab fa-yandex-international","fab fa-yelp","fab fa-youtube"]}},a.view=function(o){return o.children=this.items().toArray(),t.prototype.view.call(this,o)},a.getButtonContent=function(){var t=this,o=function(t){return I()(t,{className:"icondropdown-activeIcon fa-fw"})};return[/^favicon(-\w+)?$/.test(this.attrs.selection())?this.attrs.allowsExternal?[m("img",{className:v()({"icondropdown-activeIcon":!0,"social-greyscale-button":"favicon-grey"===this.attrs.selection(),"social-button":"favicon-grey"===!this.attrs.selection()}),alt:"",src:this.attrs.favicon(),onerror:function(){t.attrs.favicon("none"),t.select(t.icons.social[0])}})]:o("fas fa-globe"):o(this.attrs.selection()),this.attrs.caretIcon?I()(this.attrs.caretIcon,{className:"Button-caret"}):""]},a.items=function(){var t=this,o=new(p());return"none"!==this.attrs.favicon()&&this.attrs.allowsExternal&&(o.add("favicon",m("div",{onclick:function(){return t.select("favicon")},role:"button",className:v()({"iconpicker-item":!0,"iconpicker-item--highlighted":"favicon"===this.attrs.selection()}),title:"Favicon"},m("img",{className:"iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),102),o.add("favicon-grey",m("div",{onclick:function(){return t.select("favicon-grey")},role:"button",className:v()({"iconpicker-item iconpicker-item--invertColors":!0,"iconpicker-item--highlighted":"favicon-grey"===this.attrs.selection()}),title:"Grey Favicon"},m("img",{className:"social-greyscale-button iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),101)),this.icons.social.forEach((function(a){o.add(a.replace(/ /,"-"),m("div",{onclick:function(){return t.select(a)},className:v()({"iconpicker-item":!0,"iconpicker-item--highlighted":t.attrs.selection()===a}),role:"button",title:"."+a},I()(a,{className:"social-icon fa-fw"})),100)})),o},a.select=function(t){this.attrs.selection(t)},o}(j()),M=function(t){function o(){return t.apply(this,arguments)||this}y(o,t);var a=o.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o),this.button=this.attrs.button,this.allowsExternal=n().forum.attribute("fof-socialprofile.allow_external_favicons")},a.view=function(t){return m("div",{className:"Form-group form-group-social",id:"socialgroup-"+this.button.index()},m("input",{type:"text",className:"FormControl SocialFormControl SocialFormControl-title",placeholder:n().translator.trans("fof-socialprofile.forum.edit.title"),tabIndex:2*(this.button.index()+1)-1,bidi:this.button.title}),U.component({selection:this.button.icon,favicon:this.button.favicon,index:this.button.index,allowsExternal:this.allowsExternal}),m("input",{type:"text",className:"FormControl SocialFormControl SocialFormControl-url",placeholder:n().translator.trans("fof-socialprofile.forum.edit.url"),tabIndex:2*(this.button.index()+1),value:this.button.url(),onchange:_()("value",this.onUrlChange.bind(this))}),m("input",{type:"hidden",className:"FormControl SocialFormControl SocialFormControl-icon",id:"icon"+this.button.index()+"-icon",bidi:this.button.icon}),m("input",{type:"hidden",className:"SocialFormControl SocialFormControl-favicon",id:"icon"+this.button.index()+"-favicon",bidi:this.button.favicon}))},a.onUrlChange=function(t){var o=this;this.button.url(t),this.allowsExternal&&(clearTimeout(this.waitUntilFinished),"fas fa-circle-notch fa-spin"!==this.button.icon()&&(this.button.icon("fas fa-circle-notch fa-spin"),this.button.favicon("none")),this.waitUntilFinished=setTimeout((function(){if(function(t){var o;try{o=new URL(t)}catch(t){return!1}return["http:","https:"].includes(o.protocol)}(o.button.url())){var t="https://icons.duckduckgo.com/ip3/"+function(t){var o;try{o=new URL(t)}catch(t){return null}return["http:","https:"].includes(o.protocol)?o.host:null}(o.button.url())+".ico";o.button.favicon(t),o.button.icon("favicon"),m.redraw()}else o.button.icon("fas fa-globe"),o.button.favicon("none"),m.redraw()}),1e3))},o}(E()),A=function(t){function o(){return t.apply(this,arguments)||this}y(o,t);var a=o.prototype;return a.oninit=function(o){var a=this;t.prototype.oninit.call(this,o),this.buttons=[];var n=this.attrs.user.socialButtons();n.length?n.forEach((function(t,o){t&&t.title&&a.createButtonObject(o,t)})):this.createButtonObject(0)},a.className=function(){return"SocialButtonsModal Modal--small"},a.title=function(){return n().translator.trans("fof-socialprofile.forum.edit.headtitle")},a.content=function(){var t=this.buttons.some((function(t){return"fas fa-circle-notch fa-spin"===t.icon()}));return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.buttons.map((function(t){return M.component({button:t})})),m("div",{className:"Form-group",id:"submit-button-group"},m("div",{className:"Button Button--primary EditSocialButtons-add",style:"margin-left: 1%;",onclick:this.addSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-plus"})),m("div",{className:"Button Button--primary EditSocialButtons-del",style:"margin-left: 1%;",onclick:this.delSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-minus"})),S().component({type:"submit",style:"float: right;",className:"Button Button--primary EditSocialButtons-save",loading:this.loading,disabled:t,title:t?n().translator.trans("fof-socialprofile.forum.edit.save_disabled_fetching_favicons"):null},n().translator.trans("fof-socialprofile.forum.edit.submit")))))},a.data=function(){var t=[];return this.buttons.forEach((function(o){o&&o.title()&&o.url()&&t.push({title:o.title(),url:o.url(),icon:o.icon(),favicon:o.favicon()})})),{socialButtons:JSON.stringify(t)}},a.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,this.attrs.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then($("#app").trigger("refreshSocialButtons",[this.data().socialButtons])).catch((function(){o.loading=!1,m.redraw()}))},a.addSocialButton=function(){var t=this;this.createButtonObject(this.buttons.length),m.redraw(),$("document").ready((function(){$("#socialgroup-"+(t.buttons.length-1)).slideDown()}))},a.delSocialButton=function(){var t=this,o=this.buttons.length-1;$("#socialgroup-"+o).slideUp("normal",(function(){t.buttons.splice(o,1),m.redraw()}))},a.createButtonObject=function(t,o){void 0===o&&(o=null),null==o?(this.buttons[t]={},this.buttons[t].index=N()(t),this.buttons[t].favicon=N()("none"),this.buttons[t].title=N()(""),this.buttons[t].url=N()(""),this.buttons[t].icon=N()("fas fa-globe")):(this.buttons[t]={},this.buttons[t].index=N()(t),this.buttons[t].favicon=N()(o.favicon),this.buttons[t].title=N()(o.title),this.buttons[t].url=N()(o.url),this.buttons[t].icon=N()(o.icon))},o}(x());n().initializers.add("fof/socialprofile",(function(){r().prototype.socialButtons=e().attribute("socialButtons",(function(t){return JSON.parse(t||"[]")})),r().prototype.canViewSocialProfile=e().attribute("canViewSocialProfile"),r().prototype.canEditSocialProfile=e().attribute("canEditSocialProfile"),(0,c.extend)(f().prototype,"infoItems",(function(t){var o=this,a=this.attrs.user;if(a.canViewSocialProfile()){this.canEdit=a.canEditSocialProfile(),this.buttons=this.attrs.user.socialButtons();var i=new(p());this.buttons.length?(this.buttons.forEach((function(t,a){if(t&&t.title&&t.icon&&t.url){var e,s,r={},c=v()(((e={})["social-button "+t.icon+"-"+a+" social-icon-"+a]=!0,e["social-greyscale-button"]="favicon-grey"===t.icon,e));"favicon"!==t.icon&&"favicon-grey"!==t.icon||(n().forum.attribute("fof-socialprofile.allow_external_favicons")?r={backgroundImage:'url("'+t.favicon+'")',backgroundSize:"60%",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:c+=" fas fa-globe"),i.add("social-icon-"+a,m("a",{href:t.url,target:"_blank",rel:"noreferrer noopener nofollow"},b().component({className:v()((s={},s[c]=!0,s["social-icon--deleting"]=o.deleting,s)),type:"social",icon:t.icon,label:t.title,style:r})))}})),this.canEdit&&i.add("settings social-button",b().component({type:"social social-settings",icon:"fas fa-cog",label:n().translator.trans("fof-socialprofile.forum.edit.edit"),onclick:function(){n().modal.show(A,{user:o.attrs.user})}}),-1)):this.canEdit&&i.add("settings social-button",b().component({type:"social null-social-settings",icon:"fas fa-plus",label:n().translator.trans("fof-socialprofile.forum.edit.add"),onclick:function(){n().modal.show(A,{user:o.attrs.user})}}),-1),i.toArray().length>0&&t.add("fofsocialprofile",i.toArray(),20)}}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map