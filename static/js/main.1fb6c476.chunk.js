(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=a(19),i=a(98),m=(a(56),a(57),Object(n.createContext)(null)),s=Object(n.createContext)(null),u=Object(n.createContext)(null),h=Object(n.createContext)(null),d=a(83),f=a(13),g=a(84),p=a(85),b=a(86),E=a(65),v=a(81),y=a(18),x=function(e){var t=Object(n.useState)([]),a=Object(y.a)(t,2),o=a[0],c=a[1];Object(n.useEffect)((function(){fetch("https://uinames.com/api/?amount=100&ext").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var l={person:o};return r.a.createElement(m.Provider,{value:l},e.children)},w=a(42),k=function(e){var t=Object(n.useState)({theme:localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):{card:"#491578",paper:"#491578",navbar:"#491578",body:"#762CB7",button:"#491578",color:"#fff",colorSecondary:"#aaa"}}),a=Object(y.a)(t,2),o=a[0],c=a[1],l={initTheme:O,theme:o.theme,cngTheme:function(e){c(Object(w.a)({},o,{theme:e}))}};return r.a.createElement(u.Provider,{value:l},e.children)},j=function(e){var t=Object(n.useState)(),a=Object(y.a)(t,2);a[0],a[1];return r.a.createElement(h.Provider,{value:{}},e.children)},O={default:{card:"#491578",paper:"#491578",navbar:"#491578",body:"#762CB7",button:"#491578",color:"#fff",colorSecondary:"#aaa"},light:{card:"linear-gradient(45deg, #DCD4F1, #D9A7FF)",paper:"linear-gradient(180deg, #DCD4F1, #D9A7FF)",navbar:"#D9A7FF",body:"#fff",button:"linear-gradient(45deg, #8385EB, #D9A7FF)",color:"#000",colorSecondary:"#444"},dark:{card:"#333",paper:"#333",navbar:"#444",body:"#555",button:"#333",color:"#fff",colorSecondary:"#ccc"}},S=Object(v.a)({root:{maxWidth:400,display:"flex",cursor:"pointer",boxShadow:"none",margin:"auto"},content:{flex:"1 0 auto"},cover:{width:100},sl:{minWidth:"100px",background:"#ffffffcc",padding:"2px 5px",fontWeight:500}}),N=function(e){var t=S(),a=Object(l.f)(),o=Object(n.useContext)(u).theme,c=e.avater,i=e.name,m=e.sl,s=e.alive,h=e.country;return r.a.createElement(d.a,{item:!0,lg:3,md:4,sm:6,xs:12},r.a.createElement(g.a,{style:{background:o.card},className:t.root,onClick:function(){"POP"===a.action&&a.push("/v/".concat(m))}},r.a.createElement(p.a,{className:t.cover,image:c,title:i},r.a.createElement("span",{className:t.sl},m)),r.a.createElement(b.a,{className:t.content},r.a.createElement(E.a,{component:"h5",variant:"h5",style:{color:o.color}},i),r.a.createElement(E.a,{variant:"subtitle1",style:{color:o.colorSecondary}},s,r.a.createElement(f.b,{className:"ml-2",style:{color:o.colorSecondary},to:"/".concat(h)},h)))))},C=a(87),F=a(88),T=a(89),D=a(90),B=a(91),I=a(92),W=Object(v.a)({appBar:{top:0},menuIcons:{marginLeft:"auto"}}),A=function(){var e=W(),t=Object(n.useContext)(u).theme;return r.a.createElement(C.a,{position:"fixed",style:{background:t.navbar},className:e.appBar},r.a.createElement(F.a,null,r.a.createElement(E.a,{variant:"h5"},r.a.createElement(f.b,{style:{textDecoration:"none",color:t.color},to:"/"},"The Hundred")),r.a.createElement("div",{className:e.menuIcons},r.a.createElement(f.b,{to:"/f"},r.a.createElement(T.a,{style:{color:t.color}},r.a.createElement(D.a,null))),r.a.createElement(f.b,{to:"/settings"},r.a.createElement(T.a,{style:{color:t.color}},r.a.createElement(B.a,null))),r.a.createElement("a",{href:"//github.com/reactsc/the100",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(T.a,{edge:"end",style:{color:t.color}},r.a.createElement(I.a,null))))))},L=Object(v.a)({appBar:{top:"auto",bottom:0}}),P=function(){var e=L(),t=Object(n.useContext)(u).theme;return r.a.createElement(C.a,{position:"fixed",className:e.appBar,style:{background:t.navbar}},r.a.createElement(E.a,{className:"text-center py-2",variant:"h5",style:{color:t.color}},"by:",r.a.createElement("a",{style:{textDecoration:"none",color:t.color,marginLeft:10},href:"//facebook.com/schoolwab",target:"_blank",rel:"noopener noreferrer"},"SChoolWab")))},J=a(93),Y=a(94),z=Object(v.a)({root:{position:"fixed",top:75,left:0}}),H=function(){var e=z(),t=Object(l.f)(),a=Object(n.useContext)(u).theme;return r.a.createElement(J.a,{variant:"contained",className:e.root,style:{background:a.button,color:a.color},onClick:function(){t.goBack()}},r.a.createElement(Y.a,null))},R=function(){var e=Object(n.useContext)(m).person;return r.a.createElement(d.a,{container:!0,spacing:2,justify:"center"},e.map((function(e,t){return r.a.createElement(N,{key:t,avater:e.photo,name:"".concat(e.name," ").concat(e.surname),sl:t+1,alive:"".concat(new Date(e.birthday.raw).getFullYear()),country:e.region})})))},U=a(43),M=a(95),_=a(96),q=Object(v.a)((function(e){return{root:{display:"flex",cursor:"pointer"},content:{flex:"1 0 auto"},cover:{width:100},p:{marginTop:10,minHeight:"400px",padding:10,boxShadow:"none"}}})),$=function(e){var t=Object(n.useContext)(m).person,a=Number(e.match.params.id),o=t[a-1];return void 0===o?r.a.createElement("h4",{className:"mx-auto text-center",variant:"p"},"Something Error!"):(document.title="".concat(a,". ").concat(o.name," ").concat(o.surname," | The 100"),r.a.createElement(n.Fragment,null,r.a.createElement(H,null),r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(G,{avater:o.photo,name:"".concat(o.name,"  ").concat(o.surname),alive:"".concat(new Date(o.birthday.raw).getFullYear()," - ").concat(new Date(o.birthday.raw).getFullYear()),country:o.region})),r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(K,null))))},G=function(e){var t=q(),a=e.avater,n=e.name,o=e.alive,c=e.country;return r.a.createElement(d.a,{item:!0,lg:6,md:8,xs:12},r.a.createElement(g.a,{className:t.root},r.a.createElement(p.a,{className:t.cover,image:a,title:n}),r.a.createElement(b.a,{className:t.content},r.a.createElement(E.a,{component:"h5",variant:"h5"},n),r.a.createElement(E.a,{variant:"subtitle1",color:"textSecondary"},o,r.a.createElement(f.b,{className:"ml-2",to:"/s/".concat(c)},c))),r.a.createElement("div",{className:"mx-2 my-auto"},r.a.createElement(T.a,{size:"small"}," ",r.a.createElement(M.a,null)," "),r.a.createElement("br",null),r.a.createElement(T.a,{size:"small"}," ",r.a.createElement(D.a,null)," "),r.a.createElement("br",null),r.a.createElement(T.a,{size:"small"}," ",r.a.createElement(_.a,null)," "))))},K=function(e){var t=q(),a=Object(n.useContext)(u).theme;return r.a.createElement(d.a,{item:!0,lg:6,md:8,xs:12},r.a.createElement(U.a,{className:t.p,style:{background:a.paper,color:a.color}},r.a.createElement("p",null,"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.")))},Q=function(){var e=Object(n.useContext)(m).person,t=Object(n.useContext)(u).theme;return document.title="Favourite List | The 100",r.a.createElement(n.Fragment,null,r.a.createElement(H,null),r.a.createElement(E.a,{variant:"h4",style:{color:t.color,textAlign:"center",marginBottom:25}},"Favourite ",12),r.a.createElement(d.a,{container:!0,spacing:2,justify:"center"},e.map((function(e,t){return r.a.createElement(N,{key:t,avater:e.photo,name:"".concat(e.name," ").concat(e.surname),sl:t+1,alive:"".concat(new Date(e.birthday.raw).getFullYear()),country:e.region})}))))},V=a(100),X=a(101),Z=a(97),ee=a(99),te=function(){var e=Object(n.useContext)(u),t=e.initTheme,a=Object(n.useState)(localStorage.getItem("themeName")?localStorage.getItem("themeName"):"default"),o=Object(y.a)(a,2),c=o[0],l=o[1];return document.title="Settings | The 100",r.a.createElement(n.Fragment,null,r.a.createElement(H,null),r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(d.a,{item:!0,md:6,xs:8},r.a.createElement(U.a,{style:{background:e.theme.paper,padding:20}},r.a.createElement(V.a,{component:"fieldset"},r.a.createElement(E.a,{variant:"h5",component:"legend",style:{color:e.theme.color,marginBottom:10}},"Choose Your Theme"),r.a.createElement(X.a,{"aria-label":"Choose Your Theme",style:{color:e.theme.color},name:"theme",value:c,onChange:function(a){switch(l(a.target.value),a.target.value){case"default":e.cngTheme(t.default),localStorage.setItem("themeName","default"),localStorage.setItem("theme",JSON.stringify(t.default));break;case"light":e.cngTheme(t.light),localStorage.setItem("themeName","light"),localStorage.setItem("theme",JSON.stringify(t.light));break;case"dark":e.cngTheme(t.dark),localStorage.setItem("themeName","dark"),localStorage.setItem("theme",JSON.stringify(t.dark));break;default:e.cngTheme(t.default),localStorage.setItem("themeName","default"),localStorage.setItem("theme",JSON.stringify(t.default))}}},r.a.createElement(Z.a,{value:"default",control:r.a.createElement(ee.a,null),label:"Default"}),r.a.createElement(Z.a,{value:"light",control:r.a.createElement(ee.a,null),label:"Light"}),r.a.createElement(Z.a,{value:"dark",control:r.a.createElement(ee.a,null),label:"Dark"})))))))},ae=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(H,null))},ne=function(){return r.a.createElement("h1",null,"About")},re=function(){var e=Object(n.useContext)(u).theme;return r.a.createElement("div",{style:{background:e.body,minHeight:"100vh"}},r.a.createElement(A,null),r.a.createElement(i.a,{style:{paddingTop:75,paddingBottom:75}},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/about",component:ne}),r.a.createElement(l.a,{path:"/faq",component:ae}),r.a.createElement(l.a,{path:"/settings",component:te}),r.a.createElement(l.a,{path:"/f",component:Q}),r.a.createElement(l.a,{path:"/v/:id",component:$}),r.a.createElement(l.a,{path:"/the100",component:R}),r.a.createElement(l.a,{path:"/",exact:!0,component:R}))),r.a.createElement(P,null))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(63);var le=function(e){return r.a.createElement(s.Provider,null,r.a.createElement(x,null,r.a.createElement(k,null,r.a.createElement(j,null,e.children))))},ie=r.a.createElement(f.a,null,r.a.createElement(le,null,r.a.createElement(re,null)));c.a.render(ie,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/the100",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/the100","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[51,1,2]]]);
//# sourceMappingURL=main.1fb6c476.chunk.js.map