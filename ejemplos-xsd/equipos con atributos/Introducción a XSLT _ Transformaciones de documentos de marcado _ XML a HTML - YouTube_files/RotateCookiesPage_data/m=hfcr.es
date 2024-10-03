"use strict";this.default_IdentityRotateCookiesHttp=this.default_IdentityRotateCookiesHttp||{};(function(_){var window=this;
try{
_._F_toggles_initialize=function(a){(typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:this)._F_toggles=a||[]};(0,_._F_toggles_initialize)([0x3040, ]);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=function(a){return aa?m?m.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1},r=function(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return b.indexOf(a)!=-1},v=function(){return aa?!!m&&m.brands.length>0:!1},w=function(){return v()?n("Chromium"):(r("Chrome")||r("CriOS"))&&!(v()?0:r("Edge"))||r("Silk")},x=function(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a},
y=function(){return typeof BigInt==="function"},ca=function(a){return!(!a||typeof a!=="object"||a.g!==ba)},A=function(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object},C=function(a){return!Array.isArray(a)||a.length?!1:B(a)&1?!0:!1},D=function(a){a.J=!0;return a},F=function(a){var b=a;if(da(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ea(b)&&!Number.isSafeInteger(b))throw Error(String(b));return E?BigInt(a):a=fa(a)?a?"1":"0":da(a)?a.trim()||
"0":String(a)},ja=function(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var e=a[c],f=b[c];if(e>f)return!1;if(e<f)return!0}},ka=function(a){var b=a>>>0;G=b;H=(a-b)/4294967296>>>0},K=function(a){if(a<0){ka(-a);var b=I(J(G,H));a=b.next().value;b=b.next().value;G=a>>>0;H=b>>>0}else ka(a)},ma=function(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else y()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=
(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+la(c)+la(a));return c},la=function(a){a=String(a);return"0000000".slice(a.length)+a},na=function(){var a=G,b=H;b&2147483648?y()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=I(J(a,b)),a=b.next().value,b=b.next().value,a="-"+ma(a,b)):a=ma(a,b);return a},J=function(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]},pa=function(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!==
"string"?!1:oa.test(a)},ta=function(a){var b=0;b=b===void 0?0:b;if(!pa(a))throw x("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return L(a);case "bigint":return String(BigInt.asIntN(64,a));default:return a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),qa(b)?a=b:(K(a),a=na())),a}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=F(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=y()?F(BigInt.asIntN(64,BigInt(a))):F(ra(a))),
a;case "bigint":return F(BigInt.asIntN(64,a));default:return F(sa(a))}case 0:switch(c){case "string":return L(a);case "bigint":return F(BigInt.asIntN(64,a));default:return sa(a)}default:throw Error("Unknown format requested type for int64");}},qa=function(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337},ra=function(a){if(qa(a))return a;if(a.length<16)K(Number(a));else if(y())a=BigInt(a),G=Number(a&BigInt(4294967295))>>>
0,H=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");H=G=0;for(var c=a.length,e=b,f=(c-b)%6+b;f<=c;e=f,f+=6)e=Number(a.slice(e,f)),H*=1E6,G=G*1E6+e,G>=4294967296&&(H+=Math.trunc(G/4294967296),H>>>=0,G>>>=0);b&&(b=I(J(G,H)),a=b.next().value,b=b.next().value,G=a,H=b)}return na()},sa=function(a){a=Math.trunc(a);if(!Number.isSafeInteger(a)){K(a);var b=G,c=H;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a},L=function(a){var b=Math.trunc(Number(a));
if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return ra(a)},va=function(a,b,c){a==null&&(a=M);M=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("i");e=B(a);if(e&2048)throw Error("j");if(e&64)return a;e|=64;if(c&&(e|=512,c!==a[0]))throw Error("k");a:{c=a;var f=c.length;if(f){var k=f-1;if(A(c[k])){e|=256;b=k-(+!!(e&512)-1);if(b>=1024)throw Error("l");e=e&-16760833|(b&1023)<<14;break a}}if(b){b=
Math.max(b,f-(+!!(e&512)-1));if(b>1024)throw Error("m");e=e&-16760833|(b&1023)<<14}}}ua(a,e);return a},xa=function(a,b){return wa(b)},wa=function(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return ya(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(C(a))return}else if(za&&a!=null&&a instanceof Uint8Array){if(Aa){for(var b="",c=0,e=a.length-10240;c<e;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,
c?a.subarray(c):a);a=btoa(b)}else{b===void 0&&(b=0);if(!N){N={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");e=["+/=","+/","-_=","-_.","-_"];for(var f=0;f<5;f++){var k=c.concat(e[f].split(""));Ba[f]=k;for(var d=0;d<k.length;d++){var g=k[d];N[g]===void 0&&(N[g]=d)}}}b=Ba[b];c=Array(Math.floor(a.length/3));e=b[64]||"";for(f=k=0;k<a.length-2;k+=3){var h=a[k],l=a[k+1];g=a[k+2];d=b[h>>2];h=b[(h&3)<<4|l>>4];l=b[(l&15)<<2|g>>6];g=b[g&63];c[f++]=d+h+l+g}d=0;g=e;switch(a.length-
k){case 2:d=a[k+1],g=b[(d&15)<<2]||e;case 1:a=a[k],c[f]=b[a>>2]+b[(a&3)<<4|d>>4]+g+e}a=c.join("")}return a}}return a},Da=function(a,b,c,e,f){if(a!=null){if(Array.isArray(a))a=C(a)?void 0:f&&B(a)&2?a:Ca(a,b,c,e!==void 0,f);else if(A(a)){var k={},d;for(d in a)k[d]=Da(a[d],b,c,e,f);a=k}else a=b(a,e);return a}},Ca=function(a,b,c,e,f){var k=e||c?B(a):0;e=e?!!(k&32):void 0;a=Array.prototype.slice.call(a);for(var d=0;d<a.length;d++)a[d]=Da(a[d],b,c,e,f);c&&c(k,a);return a},Fa=function(a){return a.G===Ea?
a.toJSON():wa(a)},Ga=function(a){a=O?a.m:Ca(a.m,Fa,void 0,void 0,!1);var b=!O,c=a.length;if(c){var e=a[c-1],f=A(e);f?c--:e=void 0;var k=a;if(f){b:{var d=e;var g={};f=!1;if(d)for(var h in d)if(isNaN(+h))g[h]=d[h];else{var l=d[h];Array.isArray(l)&&(C(l)||ca(l)&&l.size===0)&&(l=null);l==null&&(f=!0);l!=null&&(g[h]=l)}if(f){for(var q in g)break b;g=null}else g=d}d=g==null?e!=null:g!==e}for(;c>0;c--){h=k[c-1];if(!(h==null||C(h)||ca(h)&&h.size===0))break;var t=!0}if(k!==a||d||t){if(!b)k=Array.prototype.slice.call(k,
0,c);else if(t||d||g)k.length=c;g&&k.push(g)}t=k}else t=a;return t},Ha=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},Ia=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},Ja=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=
a[b];if(c&&c.Math==Math)return c}throw Error("a");},P=Ja(this),Q=function(a,b){if(b)a:{var c=P;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];if(!(f in c))break a;c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&b!=null&&Ia(c,a,{configurable:!0,writable:!0,value:b})}},I=function(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:Ha(a)};throw Error("b`"+String(a));},Ka=typeof Object.create=="function"?Object.create:
function(a){var b=function(){};b.prototype=a;return new b},La;if(typeof Object.setPrototypeOf=="function")La=Object.setPrototypeOf;else{var Ma;a:{var Na={a:!0},Oa={};try{Oa.__proto__=Na;Ma=Oa.a;break a}catch(a){}Ma=!1}La=Ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError("c`"+a);return a}:null}
var Pa=La,Qa=function(a,b){a.prototype=Ka(b.prototype);a.prototype.constructor=a;if(Pa)Pa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.K=b.prototype};
Q("Promise",function(a){function b(){this.g=null}function c(d){return d instanceof f?d:new f(function(g){g(d)})}if(a)return a;b.prototype.h=function(d){if(this.g==null){this.g=[];var g=this;this.i(function(){g.l()})}this.g.push(d)};var e=P.setTimeout;b.prototype.i=function(d){e(d,0)};b.prototype.l=function(){for(;this.g&&this.g.length;){var d=this.g;this.g=[];for(var g=0;g<d.length;++g){var h=d[g];d[g]=null;try{h()}catch(l){this.j(l)}}}this.g=null};b.prototype.j=function(d){this.i(function(){throw d;
})};var f=function(d){this.h=0;this.i=void 0;this.g=[];this.u=!1;var g=this.j();try{d(g.resolve,g.reject)}catch(h){g.reject(h)}};f.prototype.j=function(){function d(l){return function(q){h||(h=!0,l.call(g,q))}}var g=this,h=!1;return{resolve:d(this.B),reject:d(this.l)}};f.prototype.B=function(d){if(d===this)this.l(new TypeError("d"));else if(d instanceof f)this.D(d);else{a:switch(typeof d){case "object":var g=d!=null;break a;case "function":g=!0;break a;default:g=!1}g?this.A(d):this.s(d)}};f.prototype.A=
function(d){var g=void 0;try{g=d.then}catch(h){this.l(h);return}typeof g=="function"?this.F(g,d):this.s(d)};f.prototype.l=function(d){this.v(2,d)};f.prototype.s=function(d){this.v(1,d)};f.prototype.v=function(d,g){if(this.h!=0)throw Error("e`"+d+"`"+g+"`"+this.h);this.h=d;this.i=g;this.h===2&&this.C();this.H()};f.prototype.C=function(){var d=this;e(function(){if(d.I()){var g=P.console;typeof g!=="undefined"&&g.error(d.i)}},1)};f.prototype.I=function(){if(this.u)return!1;var d=P.CustomEvent,g=P.Event,
h=P.dispatchEvent;if(typeof h==="undefined")return!0;typeof d==="function"?d=new d("unhandledrejection",{cancelable:!0}):typeof g==="function"?d=new g("unhandledrejection",{cancelable:!0}):(d=P.document.createEvent("CustomEvent"),d.initCustomEvent("unhandledrejection",!1,!0,d));d.promise=this;d.reason=this.i;return h(d)};f.prototype.H=function(){if(this.g!=null){for(var d=0;d<this.g.length;++d)k.h(this.g[d]);this.g=null}};var k=new b;f.prototype.D=function(d){var g=this.j();d.o(g.resolve,g.reject)};
f.prototype.F=function(d,g){var h=this.j();try{d.call(g,h.resolve,h.reject)}catch(l){h.reject(l)}};f.prototype.then=function(d,g){function h(u,z){return typeof u=="function"?function(ha){try{l(u(ha))}catch(ia){q(ia)}}:z}var l,q,t=new f(function(u,z){l=u;q=z});this.o(h(d,l),h(g,q));return t};f.prototype.catch=function(d){return this.then(void 0,d)};f.prototype.o=function(d,g){function h(){switch(l.h){case 1:d(l.i);break;case 2:g(l.i);break;default:throw Error("f`"+l.h);}}var l=this;this.g==null?k.h(h):
this.g.push(h);this.u=!0};f.resolve=c;f.reject=function(d){return new f(function(g,h){h(d)})};f.race=function(d){return new f(function(g,h){for(var l=I(d),q=l.next();!q.done;q=l.next())c(q.value).o(g,h)})};f.all=function(d){var g=I(d),h=g.next();return h.done?c([]):new f(function(l,q){function t(ha){return function(ia){u[ha]=ia;z--;z==0&&l(u)}}var u=[],z=0;do u.push(void 0),z++,c(h.value).o(t(u.length-1),q),h=g.next();while(!h.done)})};return f});
Q("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});Q("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});Q("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});Q("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});Q("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
Q("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});Q("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});var p=this||self,Ra=p._F_toggles||[];var Sa=!!(Ra[0]>>14&1);var Ta;if(Ra[0]&8192)Ta=Sa;else{var R;a:{for(var Ua=["WIZ_global_data","oxN3nb"],S=p,Va=0;Va<Ua.length;Va++)if(S=S[Ua[Va]],S==null){R=null;break a}R=S}var Wa=R&&R[610401301];Ta=Wa!=null?Wa:!1}var aa=Ta;var m,Xa=p.navigator;m=Xa?Xa.userAgentData||null:null;var Ya=v()?!1:r("Trident")||r("MSIE");!r("Android")||w();w();r("Safari")&&(w()||(v()?0:r("Coast"))||(v()?0:r("Opera"))||(v()?0:r("Edge"))||(v()?n("Microsoft Edge"):r("Edg/"))||v()&&n("Opera"));var Ba={},N=null;var za=typeof Uint8Array!=="undefined",Aa=!Ya&&typeof btoa==="function";var T=typeof Symbol==="function"&&typeof Symbol()==="symbol",U;U=typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():void 0;var Za=T?function(a,b){a[U]|=b}:function(a,b){a.g!==void 0?a.g|=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})},B=T?function(a){return a[U]|0}:function(a){return a.g|0},$a=T?function(a){return a[U]}:function(a){return a.g},ua=T?function(a,b){a[U]=b}:function(a,b){a.g!==void 0?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};var Ea={},ba={};var ea=D(function(a){return typeof a==="number"}),da=D(function(a){return typeof a==="string"}),fa=D(function(a){return typeof a==="boolean"});var E=typeof p.BigInt==="function"&&typeof p.BigInt(0)==="bigint";var ya=D(function(a){return E?a>=ab&&a<=bb:a[0]==="-"?ja(a,cb):ja(a,db)}),cb=Number.MIN_SAFE_INTEGER.toString(),ab=E?BigInt(Number.MIN_SAFE_INTEGER):void 0,db=Number.MAX_SAFE_INTEGER.toString(),bb=E?BigInt(Number.MAX_SAFE_INTEGER):void 0;var G=0,H=0;var oa=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;var M;var eb=function(a,b,c){var e=a.m,f=$a(e);if(f&2)throw Error();a:{var k=f>>14&1023||536870912;if(b>=k){var d=f;if(f&256)var g=e[e.length-1];else{if(c==null)break a;g=e[k+(+!!(f&512)-1)]={};d|=256}g[b]=c;b<k&&(e[b+(+!!(f&512)-1)]=void 0);d!==f&&ua(e,d)}else e[b+(+!!(f&512)-1)]=c,f&256&&(c=e[e.length-1],b in c&&delete c[b])}return a},fb=function(a){var b=b===void 0?0:b;a=a.m;var c=$a(a),e=c>>14&1023||536870912;1>=e?a=c&256?a[a.length-1][1]:void 0:(c=1+(+!!(c&512)-1),a=c<0||c>=a.length||c>=e?void 0:a[c]);
a!=null&&(typeof a==="bigint"?ya(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=ya(a)?Number(a):String(a)):a=pa(a)?typeof a==="number"?sa(a):L(a):void 0);return a!=null?a:b},gb=function(a,b,c){if(c!=null){if(typeof c!=="number")throw x("int32");if(!Number.isFinite(c))throw x("int32");c|=0}eb(a,b,c)};var O,V=function(a,b,c){this.m=va(a,b,c)};V.prototype.toJSON=function(){return Ga(this)};var hb=function(a){try{return O=!0,JSON.stringify(Ga(a),xa)}finally{O=!1}};V.prototype.G=Ea;V.prototype.toString=function(){try{return O=!0,Ga(this).toString()}finally{O=!1}};var ib=function(a){this.m=va(a)};Qa(ib,V);var jb=function(a){this.m=va(a,0,"identity.hfcr")};Qa(jb,V);var kb=function(a){return function(b){if(b==null||b=="")b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error("n");Za(b,32);M=b;b=new a(b);M=void 0}return b}}(jb);var lb=function(a,b,c,e,f){this.l=a;this.i=b;this.j=c;this.h=e;this.g=f};lb.prototype.start=function(){var a=this;if(typeof fetch!=="undefined")if(mb()){var b=nb(),c=Date.now();b&&b>c+this.g*1E3&&(b=Date.now()+this.g*1E3,W(b));var e=function(){ob(a).then(function(){setTimeout(e,a.g*1E3)})};setTimeout(function(){e()},b&&b>c?b-c:0)}else pb(this)};
var pb=function(a){qb(a).then(function(){var b=function(){qb(a).then(function(){setTimeout(b,a.g*1E3)})};setTimeout(function(){b()},a.g*1E3)})},qb=function(a){var b=rb(a);return sb(b).then(function(c){c=tb(fb(c));c!==a.g&&(a.g=c)}).catch(function(){a.g*=2})},ob=function(a){var b=nb();if(!b||Date.now()>=b){var c=Math.floor(Math.random()*1E3);return new Promise(function(e){setTimeout(function(){var f=nb();!f||Date.now()>=f?e(ub(a)):e()},c)})}return Promise.resolve()},sb=function(a){a={method:"POST",
credentials:"same-origin",cache:"no-store",mode:"same-origin",headers:{"Content-Type":"application/json"},body:hb(a)};if(typeof AbortController!=="undefined"){var b=new AbortController;setTimeout(function(){b.abort()},3E4);a.signal=b.signal}return fetch(new Request("/RotateCookies",a)).then(function(c){return c.text()}).then(function(c){return kb(JSON.stringify(JSON.parse(c.substring(5))[0]))})},rb=function(a){var b=new ib;var c=a.l;c=c==null?c:ta(c);b=eb(b,2,c);a.i!==0&&gb(b,1,a.i);a.j!==0&&gb(b,
3,a.j);a.h!==0&&gb(b,4,a.h);return b},ub=function(a){W(Date.now()+a.g*1E3);var b=rb(a);return sb(b).then(function(c){c=tb(fb(c));c!==a.g&&(W(Date.now()+c*1E3),a.g=c)}).catch(function(){a.g*=2;W(Date.now()+a.g*1E3)})},mb=function(){try{var a=window.localStorage;if(!a)return!1;a.setItem("cookieRotationStorageAccessTest","1");a.removeItem("cookieRotationStorageAccessTest");return!0}catch(b){return!1}},tb=function(a){a<60&&(a=60);return a},nb=function(){try{var a=window.localStorage.getItem("nextRotationAttemptTs");
if(!a)return null;var b=Math.floor(Number(a));return Number.isNaN(b)?null:b}catch(c){return null}},W=function(a){try{window.localStorage.setItem("nextRotationAttemptTs",a.toString())}catch(b){}};var vb=function(a,b,c,e,f){(new lb(a,b,c,e,f)).start()},X=["init"],Y=p;X[0]in Y||typeof Y.execScript=="undefined"||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||vb===void 0?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=vb;
}catch(e){_._DumpException(e)}
}).call(this,this.default_IdentityRotateCookiesHttp);
// Google Inc.
