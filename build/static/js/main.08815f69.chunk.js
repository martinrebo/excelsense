(this.webpackJsonpexcelsense=this.webpackJsonpexcelsense||[]).push([[0],{19:function(e,t,a){e.exports=a(37)},24:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),r=a.n(l),o=(a(24),a(25),a(7)),i=a(1),s=a(3),u=a(11),m=a.n(u),d=(a(28),function(e){var t=e.fields,a=Object(n.useState)(!1),l=Object(s.a)(a,2),r=l[0],o=l[1],i=function(e){o(!r)};return c.a.createElement(c.a.Fragment,null,r?c.a.createElement("div",{className:"modal"},c.a.createElement("button",{onClick:i}," ",c.a.createElement("span",{role:"img"},"\u274c")," "),c.a.createElement("p",null," Add new ROW "),c.a.createElement("form",null,c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement("input",{type:"text",name:e,placeholder:e})}))),c.a.createElement("button",{className:"submit-button",type:"submit"}," Submit "))):c.a.createElement(c.a.Fragment,null),c.a.createElement("div",{className:"modal-button"},c.a.createElement("button",{onClick:i}," ",c.a.createElement("span",{role:"img"}," \u270f\ufe0f"),"  ")))}),E=a(10),p={compact:!1,nightmode:!1},v=Object(n.createContext)(p),f=v.Provider,b=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){switch(t.type){case"CHANGE_VIEW_COMPACT":return Object(E.a)(Object(E.a)({},e),{},{compact:t.payload});case"CHANGE_VIEW_MODE":return Object(E.a)(Object(E.a)({},e),{},{nightmode:t.payload});default:throw new Error}}),p),l=Object(s.a)(a,2),r=l[0],o=l[1];return c.a.createElement(f,{value:{state:r,dispatch:o}},t)},g=(a(29),function(e){var t=e.columns,a=e.isLoading,l=e.isError,r=e.dataSet,i=e.isLinked,s=Object(n.useContext)(v),u=s.state.compact?"min-content":"100px",m=s.state.compact?"100px":"1fr",d=i?(null===t||void 0===t?void 0:t.length)+1:null===t||void 0===t?void 0:t.length,E={gridTemplateColumns:"repeat(".concat(d,", minmax(").concat(u,", ").concat(m,"))")},p=s.state.nightmode?"nightmode":"daymode";return c.a.createElement("div",{className:"grid-view",style:E},null===t||void 0===t?void 0:t.map((function(e,t){var a=e.replace(/_/g," ");return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"header",key:t}," ",a," "))})),i?c.a.createElement("span",{className:"header"}," Link to Entities "):null,a?"...loading":r.map((function(e,t){var a=Object.keys(e);return c.a.createElement(c.a.Fragment,null,a.map((function(t,a){return c.a.createElement("span",{className:"".concat(p),key:a,"data-id":null===e||void 0===e?void 0:e.id}," ",e[t]," ")})),i?c.a.createElement("span",{className:"".concat(p)},"  ",c.a.createElement(o.b,{className:"".concat(p),to:"/entity/".concat(null===e||void 0===e?void 0:e.id)}," Link_To_Entitie ",null===e||void 0===e?void 0:e.id," ")):null)})),l?"...There is a problem":"")});var h=function(){var e=m()("/api/assets",{assets:[]}),t=Object(s.a)(e,2),a=t[0],n=a.data,l=a.isLoading,r=a.isError,o=(t[1],function(){if(n.assets.length>0)return Object.keys(n.assets[0])}());return c.a.createElement("div",{className:"grid-content"},c.a.createElement("div",{className:"grid-assets"},c.a.createElement(g,{dataSet:n.assets,isLoading:l,isError:r,columns:o,isLinked:!0})),c.a.createElement(d,{fields:o}))},O=function(e){var t=Object(n.useState)("0px"),a=Object(s.a)(t,2),c=a[0],l=a[1],r=Object(n.useState)("0px"),o=Object(s.a)(r,2),i=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),E=d[0],p=d[1],v=Object(n.useState)(!1),f=Object(s.a)(v,2),b=f[0],g=f[1],h=Object(n.useCallback)((function(t){var a;t.preventDefault(),e&&(null===e||void 0===e||null===(a=e.current)||void 0===a?void 0:a.contains(t.target))?(l("".concat(t.pageX,"px")),u("".concat(t.pageY,"px")),p(!0),g(t.target.dataset.id),console.log(t.target)):p(!1)}),[p,e,l,u]),O=Object(n.useCallback)((function(e){p(!1)}),[p]);return Object(n.useEffect)((function(){return document.addEventListener("click",O),document.addEventListener("contextmenu",h),function(){document.removeEventListener("click",O),document.removeEventListener("contextmenu",h)}}),[]),{xPos:c,yPos:i,menu:E,dataId:b}},j=(a(35),function(e){var t=e.outerRef,a=O(t),n=a.xPos,l=a.yPos,r=a.menu,o=a.dataId;return r?c.a.createElement("ul",{className:"menu",style:{top:l,left:n}},c.a.createElement("li",{onClick:function(e){e.preventDefault(),console.log("Context Menu Test ID:",o)}}," TEST Console ID: ",o,"  ")):c.a.createElement(c.a.Fragment,null)});var y=function(){var e,t=Object(i.f)().entityId,a=m()("/api/entities",{entities:[]}),l=Object(s.a)(a,2),r=l[0],o=r.data,u=r.isLoading,E=r.isError;l[1],e="nofilter"===t?o.entities:o.entities.filter((function(e){return e.id_asset===parseInt(t)}));var p=function(){if(o.entities.length>0)return Object.keys(o.entities[0])}(),v=Object(n.useRef)(null);return c.a.createElement("div",{className:"grid-content"},c.a.createElement("div",{ref:v},c.a.createElement(j,{outerRef:v}),c.a.createElement(g,{dataSet:e,isLoading:u,isError:E,columns:p}),c.a.createElement(d,{fields:p})))};a(36);var k=function(){var e=Object(n.useContext)(v),t=e.dispatch;return console.log(e.state),c.a.createElement("div",{className:"heroBanner"},c.a.createElement("div",{className:"heroContent"},c.a.createElement("h1",null," ExcelSense Technical Test "),c.a.createElement(o.b,{className:"link",to:"/"}," Assets "),c.a.createElement(o.b,{className:"link",to:"/entity/nofilter/"}," Entities "),c.a.createElement("button",{onClick:function(a){t({type:"CHANGE_VIEW_COMPACT",payload:!e.state.compact})},className:"button-view"}," ",c.a.createElement("span",null,e.state.compact?"\ud83d\udc41\ufe0f\ud83d\udc41\ufe0f ":"\ud83d\udc40"),"   "),c.a.createElement("button",{onClick:function(a){t({type:"CHANGE_VIEW_MODE",payload:!e.state.nightmode})},className:"button-mode"}," ",c.a.createElement("span",null,e.state.nightmode?"\u2600\ufe0f ":"\ud83c\udf19")," ")))};var N=function(){var e=Object(n.useContext)(v).state.nightmode?"App-nightmode":"App-daymode";return c.a.createElement("div",{className:"App ".concat(e)},c.a.createElement(o.a,null,c.a.createElement(k,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"}," ",c.a.createElement(h,null)," "),c.a.createElement(i.a,{path:"/entity/:entityId"}," ",c.a.createElement(y,null)," "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null,c.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.08815f69.chunk.js.map