(this["webpackJsonpcalc-v0.1"]=this["webpackJsonpcalc-v0.1"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(98),a(99),a(34)),u=a(8),i=a(180),d=a(178),s=(a(100),a(101),a(56)),m=a.n(s),E=i.a.Option;var h=function(e){e.data;var t=e.setData,a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){m.a.get("https://script.google.com/macros/s/AKfycbzFUWnahPRuSEgrJQTROThXHvqBkxGE_RDCRgng_gnlGovAKJeJ/exec?getCode=true").then((function(e){console.log(Object.values(e.data.codes)),o(Object.values(e.data.codes))}))}),[]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Code:")),l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement(i.a,{showSearch:!0,style:{width:"100%"},placeholder:"Select a quality code",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),m.a.get("https://script.google.com/macros/s/AKfycbzFUWnahPRuSEgrJQTROThXHvqBkxGE_RDCRgng_gnlGovAKJeJ/exec?code="+e).then((function(e){console.log("getting this",e.data),t(e.data)}))},onFocus:function(){},onBlur:function(){},onSearch:function(e){}},c&&c.map((function(e){return l.a.createElement(E,{value:e,key:e},e)}))))))},b=i.a.Option;var v=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({code:"0",read:"0",pick:"0",width:"0",ends:"0",view:"",warp:"",warpDinier:"0",weft:"",weftDinier:"0"}),s=Object(u.a)(c,2),m=s[0],E=s[1],v=Object(n.useState)(),g=Object(u.a)(v,2),p=g[0],f=g[1],y=Object(n.useState)(),w=Object(u.a)(y,2),O=w[0],j=w[1],C=Object(n.useState)(),S=Object(u.a)(C,2),k=S[0],F=S[1],D=Object(n.useState)(),A=Object(u.a)(D,2),B=A[0],R=A[1],W=Object(n.useState)(),N=Object(u.a)(W,2),T=N[0],x=N[1],J=Object(n.useState)(),M=Object(u.a)(J,2),G=M[0],P=M[1],U=Object(n.useState)(),K=Object(u.a)(U,2),_=K[0],q=K[1],L=Object(n.useState)(),z=Object(u.a)(L,2),H=z[0],Q=z[1],V=Object(n.useState)(),X=Object(u.a)(V,2),Y=X[0],I=X[1],$=Object(n.useState)(),Z=Object(u.a)($,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(),ne=Object(u.a)(ae,2),le=ne[0],re=ne[1],ce=Object(n.useState)(),oe=Object(u.a)(ce,2),ue=oe[0],ie=oe[1],de=Object(n.useState)(),se=Object(u.a)(de,2),me=se[0],Ee=se[1];return Object(n.useEffect)((function(){}),[a]),Object(n.useEffect)((function(){console.log(m);var e=parseFloat(m.read);f((e-=4).toString());var t=parseFloat(m.pick);j((t-=4).toString());var a=parseFloat(m.width);(F((a+=2.5).toString()),e>=0&&a>=0)&&R((e*a).toString())}),[m]),Object(n.useEffect)((function(){var e=parseFloat(m.ends)*parseFloat(m.warpDinier)*110/9e6,t=e*_;ie(e),re(e+me),I((t+parseFloat(G)).toString()),x(t)})),Object(n.useEffect)((function(){var e=(parseFloat(m.weftDinier)+5)*O*(parseFloat(m.width)+7)/9e4,t=e*H;Ee(e),re(e+ue),I((t+parseFloat(T)).toString()),P(t),console.log("weftValue",e,t)})),l.a.createElement("div",{className:"main"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Select Mode:")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("center",null,l.a.createElement(i.a,{defaultValue:"true",style:{width:"100%"},onChange:function(e){console.log("selected ".concat(e)),r("true"===e)}},l.a.createElement(b,{value:"true"},"Online"),l.a.createElement(b,{value:"false"},"Offline")))))),l.a.createElement("div",null,a&&l.a.createElement(h,{data:m,setData:E})),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Read"),l.a.createElement("th",null,"Pick"),l.a.createElement("th",null,"Width"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"ON Table:"),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#589DD1"},value:m.read,onChange:function(e){var t=Object(o.a)({},m);t.read=e.target.value,E(t)}})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#FEE89B"},value:m.pick,onChange:function(e){var t=Object(o.a)({},m);t.pick=e.target.value,E(t)}})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#F6C8AD"},value:m.width,onChange:function(e){var t=Object(o.a)({},m);t.width=e.target.value,E(t)}}))),l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"ON Loom:"),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#589DD1"},value:p,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#FEE89B"},value:O,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#F6C8AD"},value:k,readOnly:!0}))),l.a.createElement("br",null),l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"ENDS:"),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#FBD0CF"},value:B})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#FBD0CF"},value:m.ends,onChange:function(e){var t=Object(o.a)({},m);t.ends=e.target.value,E(t)}})))))),a&&l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Warp:"),l.a.createElement("th",null,"Weft:"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(d.a,{type:"text",style:{width:"100%"},value:m.warp,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"text",style:{width:"100%"},value:m.weft,readOnly:!0})))))),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Warp"),l.a.createElement("th",null,"Weft"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"YARN:"),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#C7E4CA"},value:m.warpDinier,onChange:function(e){var t=Object(o.a)({},m);t.warpDinier=e.target.value,E(t)}})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#C7E4CA"},value:m.weftDinier,onChange:function(e){var t=Object(o.a)({},m);t.weftDinier=e.target.value,E(t)}}))),l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"RATE:"),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#BCE1F7"},onChange:function(e){q(e.target.value)},value:_})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#BCE1F7"},onChange:function(e){Q(e.target.value)},value:H})))))),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Yarn Rate"),l.a.createElement("th",null,"Selling Rate"),l.a.createElement("th",null,"GST"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#6EB546"},value:Y,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#4A6AB2"},value:ee,onChange:function(e){te(e.target.value)}})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#4A6AB2"},value:5*parseFloat(ee)/100+parseFloat(ee),readOnly:!0}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%"},value:parseFloat(Y)/100,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#6EB546"},value:parseFloat(ee)-parseFloat(Y)/100,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%",backgroundColor:"#6EB546"},value:5*parseFloat(ee)/100+parseFloat(ee)-parseFloat(Y)/100,readOnly:!0})))))),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Weight:"),l.a.createElement("th",null,"GSM:"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%"},value:le,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(d.a,{type:"number",style:{width:"100%"},value:parseFloat(le)/100/parseFloat(m.width)*39.36,readOnly:!0})))))))};var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null))},p=(a(176),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},93:function(e,t,a){e.exports=a(177)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.2af82301.chunk.js.map