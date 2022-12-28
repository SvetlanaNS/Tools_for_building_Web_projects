"use strict";(self.webpackChunkawesome_modulewebproject=self.webpackChunkawesome_modulewebproject||[]).push([[273],{99:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,"body{margin:0;font-family:Lato,sans-serif;box-sizing:border-box}div.header{display:grid;color:red;font-size:30px;grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;grid-gap:2vw}.gallery{color:red;font-size:30px}.gallery-item{text-align:center;background-color:#fff;box-shadow:0 4px 8px rgba(0,0,0,.2) 0 6px 20px 0 rgba(0,0,0,.2)}.gallery__image{width:100%;height:250px;object-fit:cover}.gallery__title{padding:20px 0}.gallery__audio{width:400px;height:250px}.gallery__video{width:100%;max-width:330px;height:250px}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},273:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(379),o=r.n(n),a=r(795),i=r.n(a),s=r(569),c=r.n(s),l=r(565),u=r.n(l),p=r(216),d=r.n(p),f=r(589),v=r.n(f),h=r(99),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),o()(h.Z,m);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);