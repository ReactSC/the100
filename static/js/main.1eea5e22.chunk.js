(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,a){e.exports=a(133)},126:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=a(45),i=a(181),m=(a(125),a(126),Object(n.createContext)(null)),s=Object(n.createContext)(null),u=Object(n.createContext)(null),d=Object(n.createContext)(null),h=a(163),g=a(24),f=a(165),p=a(166),E=a(167),b=a(134),v=a(160),y=a(39),w=function(e){var t=Object(n.useState)([]),a=Object(y.a)(t,2),o=a[0],c=a[1];Object(n.useEffect)((function(){fetch("https://uinames.com/api/?amount=100&ext").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var l={person:o};return r.a.createElement(m.Provider,{value:l},e.children)},S=a(110),x=function(e){var t=Object(n.useState)({theme:localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):k.default}),a=Object(y.a)(t,2),o=a[0],c=a[1],l={initTheme:k,theme:o.theme,cngTheme:function(e){c(Object(S.a)({},o,{theme:e}))}};return r.a.createElement(u.Provider,{value:l},e.children)},O=a(96),j=function(e){var t=Object(n.useState)({fev:localStorage.fev?JSON.parse(localStorage.getItem("fev")):[]}),a=Object(y.a)(t,2),o=a[0],c=a[1],l={fev:o.fev,setFev:function(e){c({fev:[].concat(Object(O.a)(o.fev),[e])}),localStorage.setItem("fev",JSON.stringify([].concat(Object(O.a)(o.fev),[e])))},rmFev:function(e){console.log("remove"+e)}};return r.a.createElement(d.Provider,{value:l},e.children)},k={default:{card:"linear-gradient(90deg, #52227E, #491578)",paper:"linear-gradient(180deg, #52227E, #491578)",navbar:"#491578",body:"#762CB7",button:"#491578",color:"#fff",colorSecondary:"#aaa"},light:{card:"linear-gradient(45deg, #DCD4F1, #D9A7FF)",paper:"linear-gradient(180deg, #DCD4F1, #D9A7FF)",navbar:"#D9A7FF",body:"#fff",button:"linear-gradient(45deg, #8385EB, #D9A7FF)",color:"#000",colorSecondary:"#444"},dark:{card:"#333",paper:"#333",navbar:"#444",body:"#555",button:"#333",color:"#fff",colorSecondary:"#ccc"}},N=Object(v.a)({root:{maxWidth:400,display:"flex",cursor:"pointer",boxShadow:"none",margin:"auto"},content:{flex:"1 0 auto"},cover:{width:100},sl:{minWidth:"100px",background:"#ffffffcc",padding:"2px 5px",fontWeight:500}}),C=function(e){var t=N(),a=Object(l.f)(),o=Object(n.useContext)(u).theme,c=e.avater,i=e.name,m=e.sl,s=e.alive,d=e.country;return r.a.createElement(h.a,{item:!0,lg:3,md:4,sm:6,xs:12},r.a.createElement(f.a,{style:{background:o.card},className:t.root,onClick:function(){"POP"===a.action&&a.push("/v/".concat(m))}},r.a.createElement(p.a,{className:t.cover,image:c,title:i},m&&r.a.createElement("span",{className:t.sl},m)),r.a.createElement(E.a,{className:t.content},r.a.createElement(b.a,{component:"h5",variant:"h5",style:{color:o.color}},i),r.a.createElement(b.a,{variant:"subtitle1",style:{color:o.colorSecondary}},s,r.a.createElement(g.b,{className:"ml-2",style:{color:o.colorSecondary},to:"/country/".concat(d)},d)))))},F=a(168),T=a(169),I=a(170),D=a(171),B=a(172),W=a(173),A=a(174),J=Object(v.a)({appBar:{top:0},menuIcons:{marginLeft:"auto"}}),P=function(){var e=J(),t=Object(n.useContext)(u).theme,a=localStorage.fev&&JSON.parse(localStorage.getItem("fev")).length;return r.a.createElement(F.a,{position:"fixed",style:{background:t.navbar},className:e.appBar},r.a.createElement(T.a,null,r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.b,{style:{textDecoration:"none",color:t.color,textTransform:"uppercase",fontWeight:600},to:"/"},"The Hundred")),r.a.createElement("div",{className:e.menuIcons},r.a.createElement(g.b,{to:"/f"},r.a.createElement(I.a,{style:{color:t.color}},a>0&&r.a.createElement(D.a,{variant:"dot",color:"secondary"}),r.a.createElement(B.a,null))),r.a.createElement(g.b,{to:"/settings"},r.a.createElement(I.a,{style:{color:t.color}},r.a.createElement(W.a,null))),r.a.createElement("a",{href:"//github.com/reactsc/the100",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I.a,{edge:"end",style:{color:t.color}},r.a.createElement(A.a,null))))))},q=Object(v.a)({appBar:{top:"auto",bottom:0}}),L=function(){var e=q(),t=Object(n.useContext)(u).theme;return r.a.createElement(F.a,{className:e.appBar,style:{background:t.navbar}},r.a.createElement(b.a,{className:"text-center py-2",variant:"h5",style:{color:t.color}},"by:",r.a.createElement("a",{style:{textDecoration:"none",color:t.color,marginLeft:10},href:"//facebook.com/schoolwab",target:"_blank",rel:"noopener noreferrer"},"SChoolWab")))},Y=a(175),R=a(176),H=Object(v.a)({root:{position:"fixed",top:75,left:0}}),U=function(){var e=H(),t=Object(l.f)(),a=Object(n.useContext)(u).theme;return r.a.createElement(Y.a,{variant:"contained",className:e.root,style:{background:a.button,color:a.color},onClick:function(){t.goBack()}},r.a.createElement(R.a,null))},z=a(71),M=a(184),_=a(182),V=function(e){var t=e.name,a=e.label,o=e.placeholder,c=e.required,l=e.type;return r.a.createElement(n.Fragment,null,r.a.createElement(M.a,{className:"mt-3"},r.a.createElement(z.b,{as:_.a,type:l,name:t,label:a,placeholder:o,fullWidth:!0,required:c})),r.a.createElement(z.a,{name:t}))},$=a(90),G="admin",K="password",Q=!1,X=Object(v.a)({root:{display:"grid"}}),Z=function(){var e=Object(n.useContext)(u).theme,t=X(),a=$.a().shape({username:$.b().min(3,"Too Short!").required("Required"),password:$.b().min(3,"Too Short!").required("Required")});return r.a.createElement(n.Fragment,null,r.a.createElement(b.a,{variant:"h5",style:{color:e.color}},"Add or Edit Person Data"),r.a.createElement(z.d,{initialValues:{username:"",password:""},validationSchema:a,onSubmit:function(e){var t;Q=!(!(t=e)||t.username!==G||t.password!==K),localStorage.setItem("auth",Q)}},(function(a){return r.a.createElement(z.c,{className:t.root},r.a.createElement(V,{style:{color:e.color},name:"username",type:"text",label:"UserName",required:!0}),r.a.createElement(V,{style:{color:e.color},name:"password",type:"password",label:"Password",required:!0}),r.a.createElement(Y.a,{disabled:!a,className:"mt-3",variant:"contained",type:"submit",fullWidth:!0,style:{background:e.body,color:e.color}},"Login"))})))},ee=function(){var e=Object(n.useContext)(m).person;return r.a.createElement(h.a,{container:!0,spacing:2,justify:"center"},e.map((function(e,t){return r.a.createElement(C,{key:t,avater:e.photo,name:"".concat(e.name," ").concat(e.surname),sl:t+1,alive:"".concat(new Date(e.birthday.raw).getFullYear()),country:e.region})})))},te=a(111),ae=a(177),ne=a(178),re=a(179),oe=Object(v.a)({root:{display:"flex",cursor:"pointer"},content:{flex:"1 0 auto"},cover:{width:100},p:{marginTop:10,minHeight:"400px",padding:20,boxShadow:"none",lineHeight:"30px"}}),ce=function(e){var t=Object(n.useContext)(m).person,a=Number(e.match.params.id),o=t[a-1];return void 0===o?r.a.createElement("h4",{className:"mx-auto text-center",variant:"p"},"Something Error!"):(document.title="".concat(a,". ").concat(o.name," ").concat(o.surname," | The 100"),r.a.createElement(n.Fragment,null,r.a.createElement(U,null),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(le,{id:a,avater:o.photo,name:"".concat(o.name,"  ").concat(o.surname),alive:"".concat(new Date(o.birthday.raw).getFullYear()," - ").concat(new Date(o.birthday.raw).getFullYear()),country:o.region})),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(ie,null))))},le=function(e){var t=oe(),a=Object(n.useContext)(d),o=e.avater,c=e.name,l=e.alive,i=e.country,m=localStorage.fev?JSON.parse(localStorage.getItem("fev")).find((function(t){return t===e.id})):null;return r.a.createElement(h.a,{item:!0,lg:6,md:8,xs:12},r.a.createElement(f.a,{className:t.root},r.a.createElement(p.a,{className:t.cover,image:o,title:c}),r.a.createElement(E.a,{className:t.content},r.a.createElement(b.a,{component:"h5",variant:"h5"},c),r.a.createElement(b.a,{variant:"subtitle1",color:"textSecondary"},l,r.a.createElement(g.b,{className:"ml-2",to:"/country/".concat(i)},i))),r.a.createElement("div",{className:"mx-2 my-auto"},r.a.createElement(I.a,{size:"small",onClick:function(){return console.log("Share ...!")}},r.a.createElement(ae.a,null)),r.a.createElement("br",null),r.a.createElement(I.a,{size:"small",onClick:function(){return t=e.id,void a.setFev(t);var t},disabled:!!m},m?r.a.createElement(B.a,null):r.a.createElement(ne.a,null)),r.a.createElement("br",null),r.a.createElement(I.a,{size:"small",onClick:function(){return window.print()}},r.a.createElement(re.a,null)))))},ie=function(e){var t=oe(),a=Object(n.useContext)(u).theme;return r.a.createElement(h.a,{item:!0,lg:6,md:8,xs:12},r.a.createElement(te.a,{className:t.p,style:{background:a.paper,color:a.color}},r.a.createElement("p",null,"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.")))},me=function(){var e=Object(n.useContext)(m).person,t=Object(n.useContext)(u).theme,a=localStorage.fev?JSON.parse(localStorage.getItem("fev")).sort((function(e,t){return e-t})):[];return document.title="(".concat(a.length,") Favourite List | The 100"),r.a.createElement(n.Fragment,null,r.a.createElement(U,null),r.a.createElement(b.a,{variant:"h4",style:{color:t.color,textAlign:"center",marginBottom:25}},"Favourite ",a.length),r.a.createElement(h.a,{container:!0,spacing:2,justify:"center"},a&&a.map((function(t,a){return e[t-1]&&r.a.createElement(C,{key:a,avater:e[t].photo,name:"".concat(e[t].name," ").concat(e[t].surname),sl:t,alive:"".concat(new Date(e[t].birthday.raw).getFullYear()),country:e[t].region})}))))},se=function(e){var t=Object(n.useContext)(m).person,a=Object(n.useContext)(u).theme,o=e.match.params.country,c=t&&t.filter((function(e){return e.region===o}));return document.title="".concat(o,"'s Person | The 100"),r.a.createElement(n.Fragment,null,r.a.createElement(U,null),r.a.createElement(b.a,{variant:"h4",style:{color:a.color,textAlign:"center",marginBottom:25}},"People of ",o),r.a.createElement(h.a,{container:!0,spacing:2,justify:"center"},c&&c.map((function(e,t){return r.a.createElement(C,{key:t,avater:e.photo,name:"".concat(e.name," ").concat(e.surname),alive:"".concat(new Date(e.birthday.raw).getFullYear()),country:e.region})}))))},ue=a(185),de=a(180),he=a(183),ge=function(){var e=Object(n.useContext)(u),t=e.initTheme,a=Object(n.useState)(localStorage.getItem("themeName")?localStorage.getItem("themeName"):"default"),o=Object(y.a)(a,2),c=o[0],l=o[1];document.title="Settings | The 100";localStorage.getItem("auth");return r.a.createElement(n.Fragment,null,r.a.createElement(U,null),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(h.a,{item:!0,md:6,xs:8},r.a.createElement(te.a,{style:{background:e.theme.paper,padding:20}},r.a.createElement(M.a,{component:"fieldset"},r.a.createElement(b.a,{variant:"h5",component:"legend",style:{color:e.theme.color,marginBottom:10}},"Choose Your Theme"),r.a.createElement(ue.a,{"aria-label":"Choose Your Theme",style:{color:e.theme.color},name:"theme",value:c,onChange:function(a){switch(l(a.target.value),a.target.value){case"default":e.cngTheme(t.default),localStorage.setItem("themeName","default"),localStorage.setItem("theme",JSON.stringify(t.default));break;case"light":e.cngTheme(t.light),localStorage.setItem("themeName","light"),localStorage.setItem("theme",JSON.stringify(t.light));break;case"dark":e.cngTheme(t.dark),localStorage.setItem("themeName","dark"),localStorage.setItem("theme",JSON.stringify(t.dark));break;default:e.cngTheme(t.default),localStorage.setItem("themeName","default"),localStorage.setItem("theme",JSON.stringify(t.default))}}},r.a.createElement(de.a,{value:"default",control:r.a.createElement(he.a,null),label:"Default"}),r.a.createElement(de.a,{value:"light",control:r.a.createElement(he.a,null),label:"Light"}),r.a.createElement(de.a,{value:"dark",control:r.a.createElement(he.a,null),label:"Dark"}))))),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(h.a,{item:!0,md:6,xs:8,className:"my-3"},r.a.createElement(te.a,{style:{background:e.theme.paper,padding:20}},r.a.createElement(Z,null))))))},fe=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(U,null))},pe=function(){return r.a.createElement("h1",null,"About")},Ee=function(){var e=Object(n.useContext)(u).theme;return r.a.createElement("div",{style:{background:e.body,minHeight:"100vh"}},r.a.createElement(P,null),r.a.createElement(i.a,{style:{paddingTop:75,paddingBottom:75}},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/about",component:pe}),r.a.createElement(l.a,{path:"/faq",component:fe}),r.a.createElement(l.a,{path:"/settings",component:ge}),r.a.createElement(l.a,{path:"/f",component:me}),r.a.createElement(l.a,{path:"/v/:id",component:ce}),r.a.createElement(l.a,{path:"/country/:country",component:se}),r.a.createElement(l.a,{path:"/the100",component:ee}),r.a.createElement(l.a,{path:"/",exact:!0,component:ee}))),r.a.createElement(L,null))},be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(132);var ye=function(e){return r.a.createElement(s.Provider,null,r.a.createElement(w,null,r.a.createElement(x,null,r.a.createElement(j,null,e.children))))},we=r.a.createElement(g.a,null,r.a.createElement(ye,null,r.a.createElement(Ee,null)));c.a.render(we,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/the100",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/the100","/service-worker.js");be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(t,e)}))}}()}},[[120,1,2]]]);
//# sourceMappingURL=main.1eea5e22.chunk.js.map