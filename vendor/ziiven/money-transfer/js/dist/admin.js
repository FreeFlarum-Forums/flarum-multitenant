(()=>{var e={n:n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};(()=>{"use strict";function t(e,n){return t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(e,n)}e.r(n),flarum.core.compat.extend;const r=flarum.core.compat["components/ExtensionPage"];var o=e.n(r);flarum.core.compat["components/Button"];var a=function(e){var n,r;function o(){return e.apply(this,arguments)||this}r=e,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,t(n,r);var a=o.prototype;return a.oninit=function(n){e.prototype.oninit.call(this,n)},a.content=function(){return m("div",{className:"ExtensionPage-settings"},m("div",{className:"container"},this.buildSettingComponent({type:"switch",setting:"moneyTransfer.moneyTransferClient1Customization",label:app.translator.trans("ziven-transfer-money.admin.transfer-money-client-customization"),help:app.translator.trans("ziven-transfer-money.admin.transfer-money-client-customization-help")}),this.buildSettingComponent({type:"string",setting:"moneyTransfer.moneyTransferTimeZone",label:app.translator.trans("ziven-transfer-money.admin.transfer-money-timezone"),help:app.translator.trans("ziven-transfer-money.admin.transfer-money-timezone-help"),placeholder:app.translator.trans("ziven-transfer-money.admin.transfer-money-timezone-default")}),m("div",{className:"Form-group"},this.submitButton())))},o}(o());app.initializers.add("ziven-money-transfer",(function(){app.extensionData.for("ziiven-money-transfer").registerPage(a).registerPermission({icon:"fas fa-exchange-alt",label:app.translator.trans("ziven-transfer-money.admin.permission.allow_use_transfer_money"),permission:"transferMoney.allowUseTranferMoney"},"moderate",90)}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map