(this["webpackJsonpcalc-v0.1"]=this["webpackJsonpcalc-v0.1"]||[]).push([[0],{103:function(e,t,a){e.exports=a(193)},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=(a(108),a(109),a(36)),u=a(8),i=a(195),d=a(197),m=a(196),s=a(62),E=(a(110),a(111),a(43)),p=a.n(E),h=i.a.Option;var b=function(e){e.data;var t=e.setData,a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){p.a.get("https://script.google.com/macros/s/AKfycbwyKPzFJjmlnZGNly6dYgnKExNIpZnb-qyFOrVsC7k7jlxtq5l8/exec?getCode=true").then((function(e){console.log(Object.values(e.data.codes)),o(Object.values(e.data.codes))}))}),[]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Code:")),l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement(i.a,{showSearch:!0,style:{width:"100%"},placeholder:"Select a quality code",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),p.a.get("https://script.google.com/macros/s/AKfycbwyKPzFJjmlnZGNly6dYgnKExNIpZnb-qyFOrVsC7k7jlxtq5l8/exec?code="+e).then((function(e){console.log("getting this",e.data),t(e.data)}))},onFocus:function(){},onBlur:function(){},onSearch:function(e){}},c&&c.map((function(e){return l.a.createElement(h,{value:e,key:e},e)}))))))},g=i.a.Option;var y=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({code:"",read:"",pick:"",width:"",ends:"",view:"",warp:"",warpDinier:"",weft:"",weftDinier:""}),E=Object(u.a)(c,2),h=E[0],y=E[1],v=Object(n.useState)(),f=Object(u.a)(v,2),w=f[0],O=f[1],j=Object(n.useState)(),C=Object(u.a)(j,2),F=C[0],k=C[1],S=Object(n.useState)(),D=Object(u.a)(S,2),N=D[0],A=D[1],x=Object(n.useState)(),B=Object(u.a)(x,2),W=B[0],K=B[1],M=Object(n.useState)(),R=Object(u.a)(M,2),q=R[0],P=R[1],V=Object(n.useState)(),Z=Object(u.a)(V,2),G=Z[0],J=Z[1],T=Object(n.useState)(),Y=Object(u.a)(T,2),I=Y[0],z=Y[1],L=Object(n.useState)(),U=Object(u.a)(L,2),$=U[0],H=U[1],Q=Object(n.useState)(),X=Object(u.a)(Q,2),_=X[0],ee=X[1],te=Object(n.useState)(),ae=Object(u.a)(te,2),ne=ae[0],le=ae[1],re=Object(n.useState)(),ce=Object(u.a)(re,2),oe=ce[0],ue=ce[1],ie=Object(n.useState)(),de=Object(u.a)(ie,2),me=de[0],se=de[1],Ee=Object(n.useState)(),pe=Object(u.a)(Ee,2),he=pe[0],be=pe[1],ge=Object(n.useState)(!1),ye=Object(u.a)(ge,2),ve=ye[0],fe=ye[1];return Object(n.useEffect)((function(){}),[a]),Object(n.useEffect)((function(){console.log(h);var e=parseFloat(h.read);O((e-=4).toString());var t=parseFloat(h.pick);k((t-=4).toString());var a=parseFloat(h.width);(A((a+=2.5).toString()),e>=0&&a>=0)&&K((e*a).toString())}),[h]),Object(n.useEffect)((function(){var e=parseFloat(h.ends)*parseFloat(h.warpDinier)*110/9e6,t=e*I;se(e),ue(e+he),ee((t+parseFloat(G)).toString()),P(t)})),Object(n.useEffect)((function(){var e=(parseFloat(h.weftDinier)+5)*F*(parseFloat(h.width)+7)/9e4,t=e*$;be(e),ue(e+me),ee((t+parseFloat(q)).toString()),J(t),console.log("weftValue",e,t)})),l.a.createElement("div",{className:"main"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Select Mode:")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("center",null,l.a.createElement(i.a,{defaultValue:"true",style:{width:"100%"},onChange:function(e){console.log("selected ".concat(e)),r("true"===e)}},l.a.createElement(g,{value:"true"},"Online"),l.a.createElement(g,{value:"false"},"Offline")))))),l.a.createElement("div",null,a&&l.a.createElement(b,{data:h,setData:y})),l.a.createElement("div",{className:"topMargin"},a&&ve&&l.a.createElement(m.a,{type:"text",value:"Current Code: "+h.code,style:{textAlign:"center"},readOnly:!0})),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Read"),l.a.createElement("th",null,"Pick"),l.a.createElement("th",null,"Width"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"ON Table:"),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#589DD1"},value:h.read,onChange:function(e){var t=Object(o.a)({},h);t.read=e.target.value,y(t)}})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#FEE89B"},value:h.pick,onChange:function(e){var t=Object(o.a)({},h);t.pick=e.target.value,y(t)}})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#F6C8AD"},value:h.width,onChange:function(e){var t=Object(o.a)({},h);t.width=e.target.value,y(t)}}))),l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"ON Loom:"),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#589DD1"},value:w,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#FEE89B"},value:F,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#F6C8AD"},value:N,readOnly:!0}))),l.a.createElement("br",null),l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"ENDS:"),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#FBD0CF"},value:W,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#FBD0CF"},value:h.ends,onChange:function(e){var t=Object(o.a)({},h);t.ends=e.target.value,y(t)}})),a&&l.a.createElement("td",{style:{float:"right"}},l.a.createElement(s.a,{type:"primary",onClick:function(){d.a.loading("Searching the code..."),p.a.get("https://script.google.com/macros/s/AKfycbwyKPzFJjmlnZGNly6dYgnKExNIpZnb-qyFOrVsC7k7jlxtq5l8/exec?findCodeFromData=true&read="+h.read+"&pick="+h.pick+"&width="+h.width).then((function(e){console.log(e),!1!==e.data.foundCodeFromData?(d.a.success("Code found"),fe(!0),y(e.data.foundCodeFromData)):d.a.error("No such code found")}))},danger:!0},"Find")))))),a&&l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Warp:"),l.a.createElement("th",null,"Weft:"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(m.a,{type:"text",style:{width:"100%"},value:h.warp,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"text",style:{width:"100%"},value:h.weft,readOnly:!0})))))),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Warp"),l.a.createElement("th",null,"Weft"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"YARN:"),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#C7E4CA"},value:h.warpDinier,onChange:function(e){var t=Object(o.a)({},h);t.warpDinier=e.target.value,y(t)}})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#C7E4CA"},value:h.weftDinier,onChange:function(e){var t=Object(o.a)({},h);t.weftDinier=e.target.value,y(t)}}))),l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"20%"}},"RATE:"),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#BCE1F7"},onChange:function(e){z(e.target.value)},value:I})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#BCE1F7"},onChange:function(e){H(e.target.value)},value:$})))))),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Yarn Rate"),l.a.createElement("th",null,"Selling Rate"),l.a.createElement("th",null,"GST"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#6EB546"},value:_,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#4A6AB2"},value:ne,onChange:function(e){le(e.target.value)}})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#4A6AB2"},value:5*parseFloat(ne)/100+parseFloat(ne),readOnly:!0}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%"},value:parseFloat(_)/100,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#6EB546"},value:parseFloat(ne)-parseFloat(_)/100,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%",backgroundColor:"#6EB546"},value:5*parseFloat(ne)/100+parseFloat(ne)-parseFloat(_)/100,readOnly:!0})))))),l.a.createElement("div",{className:"topMargin"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Weight:"),l.a.createElement("th",null,"GSM:"),a&&l.a.createElement("th",null,"View:"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%"},value:oe,readOnly:!0})),l.a.createElement("td",null,l.a.createElement(m.a,{type:"number",inputmode:"tel",style:{width:"100%"},value:parseFloat(oe)/parseFloat(h.width)*393.6,readOnly:!0})),a&&l.a.createElement("td",null,l.a.createElement(m.a,{type:"text",style:{width:"100%"},value:h.view,readOnly:!0})))))))};var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y,null))},f=(a(192),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[103,1,2]]]);
//# sourceMappingURL=main.0be5ba4b.chunk.js.map