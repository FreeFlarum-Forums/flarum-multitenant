(()=>{var e={116:function(e,t){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};function n(e,t){if(!t)return"";var o="; "+e;return!0===t?o:o+"="+t}function r(e,t,o){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return n("Expires",e.expires?e.expires.toUTCString():"")+n("Domain",e.domain)+n("Path",e.path)+n("Secure",e.secure)+n("SameSite",e.sameSite)}(o)}function a(e){for(var t={},o=e?e.split("; "):[],n=/(%[\dA-F]{2})+/gi,r=0;r<o.length;r++){var a=o[r].split("="),i=a.slice(1).join("=");'"'===i.charAt(0)&&(i=i.slice(1,-1));try{t[a[0].replace(n,decodeURIComponent)]=i.replace(n,decodeURIComponent)}catch(e){}}return t}function i(){return a(document.cookie)}function s(e,t,n){document.cookie=r(e,t,o({path:"/"},n))}t.__esModule=!0,t.encode=r,t.parse=a,t.getAll=i,t.get=function(e){return i()[e]},t.set=s,t.remove=function(e,t){s(e,"",o(o({},t),{expires:-1}))}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";o.r(n);const e=flarum.core.compat["admin/app"];var t=o.n(e);const r=flarum.core.compat["common/app"];var a=o.n(r);const i=flarum.core.compat["common/extend"],s=flarum.core.compat["common/components/Page"];var c=o.n(s);const l={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){return a().forum.attribute("fof-nightmode.default_theme")||0}};var d=o(116),f="flarum_nightmode",m=function(){var e=d.get(f);return e||"0"===e?Number(e):l.DEFAULT()};function u(){var e=Array.from(new Set(Object.values(l))),t=m();isNaN(t)?p("Theme is not a valid integer! Resetting..."):e.includes(t)||p("Theme is out of bounds! Resetting...")}function p(e){var t;console.warn(e),t=l.DEFAULT(),d.set(f,t,{sameSite:"lax",secure:"https:"===location.protocol})}function h(){var e,t=a().session.user,o=!t||!!t.preferences().fofNightMode_perDevice,n=t&&t.preferences().fofNightMode;return o?e=m():"number"==typeof n&&-1!==n&&(e=n),"number"==typeof e?e:l.DEFAULT()}function g(){var e,t,o=a().session.user,n=null==(e=a().session.user)?void 0:e.preferences().fofNightMode_perDevice;o&&!n||u(),n&&u(),y((t=h())===l.DARK?"night":t===l.LIGHT?"day":window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day")}function v(){return{day:a().data["fof-nightmode.assets.day"],night:a().data["fof-nightmode.assets.night"]}}function y(e){var t=document.querySelector("link.nightmode-light[rel=stylesheet]"),o=document.querySelector("link.nightmode-dark[rel=stylesheet]");if(t&&o){if(h()===l.AUTO)return;var n=document.createElement("link");"onload"in n?n.onload=function(){t.remove(),o.remove()}:(t.remove(),o.remove()),n.rel="stylesheet",n.className="nightmode",n.href=v()[e],document.head.append(n)}else{var r=t||o||document.querySelector("link.nightmode[rel=stylesheet]"),a=v()[e];a!==r.href&&(r.href=a,r.className="nightmode")}}t().initializers.add("fof-nightmode",(function(){var e;t().extensionData.for("fof-nightmode").registerSetting({label:t().translator.trans("fof-nightmode.admin.settings.modal.always_show_theme_toggle_on_header"),setting:"fofNightMode.show_theme_toggle_on_header_always",type:"switch"}).registerSetting({label:t().translator.trans("fof-nightmode.admin.settings.modal.default_theme"),setting:"fof-nightmode.default_theme",type:"select",options:(e={},Object.keys(l).forEach((function(o,n){"DEFAULT"!==o&&(e[n]=t().translator.trans("fof-nightmode.admin.settings.modal.theme_"+o.toLowerCase()))})),e)}).registerSetting({label:t().translator.trans("fof-nightmode.admin.settings.modal.default_theme_helper"),type:"hidden"}),(0,i.extend)(c().prototype,"oninit",g)}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map