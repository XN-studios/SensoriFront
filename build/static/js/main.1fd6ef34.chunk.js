(this.webpackJsonpcharter=this.webpackJsonpcharter||[]).push([[0],{104:function(e,t,r){},220:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(29),i=r.n(c),s=(r(104),r(10)),l=r(9),u=r(7),o=r(89),j=(r(105),o.a.initializeApp({apiKey:"AIzaSyD5CFWQBsvUlsxn6WGT3XIChdCwCdM9me8",authDomain:"auth-charter.firebaseapp.com",projectId:"auth-charter",storageBucket:"auth-charter.appspot.com",messagingSenderId:"840552889038",appId:"1:840552889038:web:2d703051fef87beda6ee9f",measurementId:"G-KLTWTRFV6J"})),d=j.auth(),b=r(2),_=n.a.createContext();function O(){return Object(a.useContext)(_)}function I(e){var t=e.children,r=Object(a.useState)(),n=Object(u.a)(r,2),c=n[0],i=n[1],s=Object(a.useState)(!0),l=Object(u.a)(s,2),o=l[0],j=l[1];Object(a.useEffect)((function(){return d.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]);var O={currentUser:c,login:function(e,t){return d.signInWithEmailAndPassword(e,t)},signup:function(e,t){return d.createUserWithEmailAndPassword(e,t)},logout:function(){return d.signOut()},resetPassword:function(e){return d.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(b.jsx)(_.Provider,{value:O,children:!o&&t})}var h=function(){var e=O().currentUser;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:"Charter"}),e?Object(b.jsx)("div",{className:"session-head",children:Object(b.jsx)(s.b,{to:"/update-profile",style:{color:"green",textDecoration:"none"},children:"Modifica credenziali"})}):Object(b.jsx)(b.Fragment,{})]})},x=function(){var e=Object(l.h)();return Object(b.jsxs)("footer",{children:[Object(b.jsx)("p",{children:"Copyright \xa9 2021"}),"/about"!==e.pathname?Object(b.jsx)(s.b,{to:"/about",children:"About"}):Object(b.jsx)(b.Fragment,{})]})},p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:" Versione 1.0.0  "}),Object(b.jsx)(s.b,{to:"/SensoriFront",children:"Indietro"})]})},m=r(11),L=r.n(m),N=r(19),v=r(225),g=r(224),f=r(223),C=r(222);function H(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),n=O().signup,c=Object(a.useState)(""),i=Object(u.a)(c,2),o=i[0],j=i[1],d=Object(a.useState)(!1),_=Object(u.a)(d,2),I=_[0],h=_[1],x=Object(l.g)();function p(){return(p=Object(N.a)(L.a.mark((function a(c){return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),t.current.value===r.current.value){a.next=3;break}return a.abrupt("return",j("Le due password non corrispondono."));case 3:return a.prev=3,j(""),h(!0),a.next=8,n(e.current.value,t.current.value);case 8:x.push("/SensoriFront"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),j("Non \xe8 stato possibile creare l'account.");case 14:h(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)(v.a,{className:"log-in",children:Object(b.jsxs)(v.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),Object(b.jsxs)(g.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[o&&Object(b.jsx)(f.a,{variant:"danger",children:o}),Object(b.jsxs)(g.a.Group,{id:"email",children:[Object(b.jsx)(g.a.Label,{children:"Email"}),Object(b.jsx)(g.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsxs)(g.a.Group,{id:"password",children:[Object(b.jsx)(g.a.Label,{children:"Password"}),Object(b.jsx)(g.a.Control,{type:"password",ref:t,required:!0})]}),Object(b.jsxs)(g.a.Group,{id:"password-confirm",children:[Object(b.jsx)(g.a.Label,{children:"Conferma password"}),Object(b.jsx)(g.a.Control,{type:"password",ref:r,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a,{disabled:I,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(b.jsxs)("div",{className:"text-center mt-2",children:["Hai gi\xe0 un account?",Object(b.jsx)(s.b,{to:"/login",children:"Accedi"})]})]})}var F=function(e){var t=e.text,r=e.onClick,a=e.buttonStyle;return Object(b.jsx)("button",{onClick:r,style:a,className:"btn",children:t})},E=r(93),T=function(e){var t=e.entry,r=e.onClick;return Object(b.jsx)("div",{className:"entry",onClick:function(){return r(t.id)},children:Object(b.jsxs)("h3",{children:[t.label,Object(b.jsx)(E.a,{style:{color:"green",cursor:"pointer"}})]})})},R=function(e){var t=e.entries,r=e.onClick;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(T,{entry:e,onClick:r},e.id)}))})},y=function(e){var t=e.title,r=e.onClick;return Object(b.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[Object(b.jsx)("h2",{style:{display:"inline"},children:t}),Object(b.jsx)(F,{text:"Indietro",onClick:r,buttonStyle:{display:"inline",backgroundColor:"rgb(64, 168, 50)"}})]})},D=r(97),W=r(96),w=function(e){var t=e.val1,r=e.val2,n=e.val3,c=e.val4,i=e.val5,s=e.val6,l=e.val7,o=(e.val8,e.val9,e.val10,Object(a.useRef)()),j=Object(a.useRef)(),d=Object(a.useRef)(),_=Object(a.useRef)(),O=Object(a.useState)(),I=Object(u.a)(O,2),h=I[0],x=I[1],p=Object(a.useState)(),m=Object(u.a)(p,2),L=m[0],N=m[1],v=Object(a.useState)(""),C=Object(u.a)(v,2),H=C[0],E=C[1];var T,R,y=(T=t.slice(h,L),R=r.slice(h,L),T.map((function(e,t){return e+" "+R[t]})));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"canvas-container",children:Object(b.jsx)(D.a,{data:{labels:y,datasets:[{label:"Temperatura 1",data:n.slice(h,L),backgroundColor:"blue",borderColor:"rgb(2, 0, 99)",borderWidth:1},{label:"T.H.I. 1",data:c.slice(h,L),backgroundColor:"dark grey",borderColor:"grey",borderWidth:1},{label:"Temperatura 2",data:i.slice(h,L),backgroundColor:"red",borderColor:"rgb(99, 0, 0)",borderWidth:1},{label:"T.H.I. 2",data:s.slice(h,L),backgroundColor:"green",borderColor:"rgb(3, 89, 0)",borderWidth:1},{label:"RH%",data:l.slice(h,L),backgroundColor:"blue",borderColor:"rgb(2, 155, 207)",borderWidth:1}]},height:400,width:500,options:{responsive:!0,maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!1}}]},legend:{labels:{fontSize:50}}}})}),Object(b.jsx)("div",{className:"chart-settings",children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)("h5",{children:"Selezione periodo"}),Object(b.jsx)("br",{}),H&&Object(b.jsx)(f.a,{variant:"danger",children:H}),Object(b.jsxs)("div",{className:"chart-settings-cont",children:[Object(b.jsx)("label",{className:"sel-lab",htmlFor:"day-from",children:"Dal giorno:"}),Object(b.jsxs)("select",{className:"sel-form",ref:o,id:"day-from",name:"day-from",children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"02 Lug",children:"02 Lug"}),Object(b.jsx)("option",{value:"03 Lug",children:"03 Lug"}),Object(b.jsx)("option",{value:"04 Lug",children:"04 Lug"}),Object(b.jsx)("option",{value:"05 Lug",children:"05 Lug"}),Object(b.jsx)("option",{value:"06 Lug",children:"06 Lug"}),Object(b.jsx)("option",{value:"07 Lug",children:"07 Lug"})]}),Object(b.jsx)("label",{className:"sel-lab",htmlFor:"day-to",children:"al giorno:"}),Object(b.jsxs)("select",{className:"sel-form",ref:j,id:"day-to",name:"day-to",children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"02 Lug",children:"02 Lug"}),Object(b.jsx)("option",{value:"03 Lug",children:"03 Lug"}),Object(b.jsx)("option",{value:"04 Lug",children:"04 Lug"}),Object(b.jsx)("option",{value:"05 Lug",children:"05 Lug"}),Object(b.jsx)("option",{value:"06 Lug",children:"06 Lug"}),Object(b.jsx)("option",{value:"07 Lug",children:"07 Lug"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{className:"sel-lab",htmlFor:"time-from",children:"Dalle ore:"}),Object(b.jsxs)("select",{className:"sel-form",ref:d,id:"time-from",name:"time-from",children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"15:30",children:"15:30"}),Object(b.jsx)("option",{value:"16:30",children:"16:30"}),Object(b.jsx)("option",{value:"17:30",children:"17:30"}),Object(b.jsx)("option",{value:"18:30",children:"18:30"}),Object(b.jsx)("option",{value:"19:30",children:"19:30"}),Object(b.jsx)("option",{value:"20:30",children:"20:30"})]}),Object(b.jsx)("label",{className:"sel-lab",htmlFor:"time-to",children:"alle ore:"}),Object(b.jsxs)("select",{className:"sel-form",ref:_,id:"time-to",name:"time-to",children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"15:30",children:"15:30"}),Object(b.jsx)("option",{value:"16:30",children:"16:30"}),Object(b.jsx)("option",{value:"17:30",children:"17:30"}),Object(b.jsx)("option",{value:"18:30",children:"18:30"}),Object(b.jsx)("option",{value:"19:30",children:"19:30"}),Object(b.jsx)("option",{value:"20:30",children:"20:30"})]}),Object(b.jsx)("br",{})]}),Object(b.jsx)(W.a,{style:{color:"grey",marginRight:"0"}}),Object(b.jsx)("button",{className:"show-all",onClick:function(e){e.preventDefault(),e.stopPropagation(),o.current.value="",j.current.value="",d.current.value="",_.current.value="",x(0),N(r.length)},children:"Mostra tutti"}),Object(b.jsx)("br",{}),Object(b.jsx)(F,{text:"Render",onClick:function(e){e.preventDefault(),e.stopPropagation();var a=0,n=t.length;""!==o.current.value&&(a=t.indexOf(o.current.value)),""!==j.current.value&&(n=t.lastIndexOf(j.current.value)+1),""!==d.current.value&&(a+=r.slice(a,n).indexOf(d.current.value)),""!==_.current.value&&(n=r.slice(a,n).lastIndexOf(_.current.value)+a+1);try{x(a),N(n)}catch(c){E("C'\xe8 stato un problema nei termini inseriti.")}},buttonStyle:{backgroundColor:"rgb(64, 168, 50)",float:"right"}})]})})]})},S=function(e){var t=e.title,r=e.onClick,a=e.val1,n=e.val2,c=e.val3,i=e.val4,s=e.val5,l=e.val6,u=e.val7,o=e.val8,j=e.val9,d=e.val10;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{title:t,onClick:r}),Object(b.jsx)("div",{className:"chart",children:Object(b.jsx)(w,{val1:a,val2:n,val3:c,val4:i,val5:s,val6:l,val7:u,val8:o,val9:j,val10:d})})]})},k=r(66);function P(){var e=O(),t=e.currentUser,r=e.logout,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],o=Object(l.g)();function j(){return(j=Object(N.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,r();case 4:o.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s("Logout fallito");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var d=Object(a.useState)(!0),_=Object(u.a)(d,2),I=_[0],h=_[1],x=Object(a.useState)([]),p=Object(u.a)(x,2),m=p[0],v=p[1],g=Object(a.useState)(),C=Object(u.a)(g,2),H=C[0],E=C[1],T=Object(a.useState)([]),y=Object(u.a)(T,2),D=y[0],W=y[1],w=Object(a.useState)([]),P=Object(u.a)(w,2),U=P[0],A=P[1],G=Object(a.useState)([]),B=Object(u.a)(G,2),M=B[0],q=B[1],z=Object(a.useState)([]),J=Object(u.a)(z,2),V=J[0],K=J[1],Q=Object(a.useState)([]),X=Object(u.a)(Q,2),Z=X[0],Y=X[1],$=Object(a.useState)([]),ee=Object(u.a)($,2),te=ee[0],re=ee[1],ae=Object(a.useState)([]),ne=Object(u.a)(ae,2),ce=ne[0],ie=ne[1],se=Object(a.useState)([]),le=Object(u.a)(se,2),ue=le[0],oe=le[1];Object(a.useEffect)((function(){(function(){var e=Object(N.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var je=function(){var e=Object(N.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.users[0].entries);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(N.a)(L.a.mark((function e(t){var r,a,n,c,i,s,l,u,o,j;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!I),r=k.users[0],a=r.entries[t-1].label,E(a),n=r.entries[t-1].results.map((function(e){return e.date})),W(n),c=r.entries[t-1].results.map((function(e){return e.time})),A(c),i=r.entries[t-1].results.map((function(e){return e.CF_LINE_1})),q(i),s=r.entries[t-1].results.map((function(e){return e.THI_1})),K(s),l=r.entries[t-1].results.map((function(e){return e.CF_LINE_2})),Y(l),u=r.entries[t-1].results.map((function(e){return e.THI_2})),re(u),o=r.entries[t-1].results.map((function(e){return e.RH})),ie(o),j=r.entries[t-1].results.map((function(e){return e.RH})),oe(j);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsxs)("div",{className:"container",children:[I?Object(b.jsxs)(b.Fragment,{children:[i&&Object(b.jsxs)(f.a,{variant:"danger",children:[" ",i," "]}),m.length>0?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(R,{entries:m,onClick:de})}):"Nessuna entrata da mostrare."]}):Object(b.jsxs)(b.Fragment,{children:[i&&Object(b.jsxs)(f.a,{variant:"danger",children:[" ",i," "]}),Object(b.jsx)(S,{title:H,onClick:function(){return h(!I)},val1:D,val2:U,val3:M,val4:V,val5:Z,val6:te,val7:ce,val8:ue})]}),Object(b.jsxs)("div",{className:"text-center mt-2",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(F,{text:"Log Out",variant:"link",onClick:function(){return j.apply(this,arguments)},buttonStyle:{backgroundColor:"rgb(64, 168, 50)"}})]})]}):Object(b.jsx)(l.a,{to:"/login"})})}function U(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=O(),n=r.currentUser,c=r.login,i=Object(a.useState)(""),o=Object(u.a)(i,2),j=o[0],d=o[1],_=Object(a.useState)(!1),I=Object(u.a)(_,2),h=I[0],x=I[1],p=Object(l.g)();function m(){return(m=Object(N.a)(L.a.mark((function r(a){return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,d(""),x(!0),r.next=6,c(e.current.value,t.current.value);case 6:p.push("/SensoriFront"),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),x(!1),d("Login fallito.");case 13:return r.abrupt("return",(function(){x(!1)}));case 14:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)(l.a,{to:"/SensoriFront"}):Object(b.jsxs)("div",{children:[Object(b.jsx)(v.a,{className:"log-in",children:Object(b.jsxs)(v.a.Body,{children:[Object(b.jsx)("h2",{children:"Log In"}),Object(b.jsxs)(g.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[j&&Object(b.jsx)(f.a,{variant:"danger",children:j}),Object(b.jsxs)(g.a.Group,{id:"email",children:[Object(b.jsx)(g.a.Label,{children:"Email"}),Object(b.jsx)(g.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsxs)(g.a.Group,{id:"password",children:[Object(b.jsx)(g.a.Label,{children:"Password"}),Object(b.jsx)(g.a.Control,{type:"password",ref:t,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a,{disabled:h,className:"w-100",type:"submit",children:"Log In"})]}),Object(b.jsx)("div",{className:"text-center mt-2",children:Object(b.jsx)(s.b,{to:"/forgot-password",children:"Password dimenticata?"})})]})}),Object(b.jsxs)("div",{className:"text-center mt-2",children:["Non hai ancora un account?",Object(b.jsx)(s.b,{to:"/signup",children:"Creane uno"})]})]})})}var A=r(23),G=r(98),B=["component"],M=function(e){var t=e.component,r=Object(G.a)(e,B),a=O().currentUser;return Object(b.jsx)(l.b,Object(A.a)(Object(A.a)({},r),{},{render:function(e){return a?Object(b.jsx)(t,Object(A.a)({},e)):Object(b.jsx)(l.a,{to:"/login"})}}))};function q(){var e=Object(a.useRef)(),t=O().resetPassword,r=Object(a.useState)(""),n=Object(u.a)(r,2),c=n[0],i=n[1],l=Object(a.useState)(!1),o=Object(u.a)(l,2),j=o[0],d=o[1],_=Object(a.useState)(""),I=Object(u.a)(_,2),h=I[0],x=I[1];function p(){return(p=Object(N.a)(L.a.mark((function r(a){return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,i(""),x(""),d(!0),r.next=7,t(e.current.value);case 7:x("Controlla la tua mailbox per ulteriori istruzioni"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),i("Invio della mail fallito.");case 13:d(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)(v.a,{className:"log-in",children:Object(b.jsxs)(v.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),Object(b.jsxs)(g.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[c&&Object(b.jsx)(f.a,{variant:"danger",children:c}),h&&Object(b.jsx)(f.a,{variant:"success",children:h}),Object(b.jsxs)(g.a.Group,{id:"email",children:[Object(b.jsx)(g.a.Label,{children:"Email"}),Object(b.jsx)(g.a.Control,{type:"email",ref:e,required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a,{disabled:j,className:"w-100",type:"submit",children:"Invia Link"})]}),Object(b.jsx)("div",{className:"text-center mt-2",children:Object(b.jsx)(s.b,{to:"/login",children:"Torna al login"})})]})}),Object(b.jsxs)("div",{className:"text-center mt-2",children:["Non hai ancora un account?",Object(b.jsx)(s.b,{to:"/signup",children:"Creane uno"})]})]})}function z(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),n=O(),c=n.currentUser,i=n.updateEmail,o=n.updatePassword,j=Object(a.useState)(""),d=Object(u.a)(j,2),_=d[0],I=d[1],h=Object(a.useState)(!1),x=Object(u.a)(h,2),p=x[0],m=x[1],L=Object(l.g)();return Object(b.jsxs)("div",{children:[Object(b.jsx)(v.a,{className:"log-in",children:Object(b.jsxs)(v.a.Body,{children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),Object(b.jsxs)(g.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==r.current.value)return I("Le due password non corrispondono.");var n=[];m(!0),I(""),e.current.value!==c.email&&n.push(i(e.current.value)),t.current.value&&n.push(o(t.current.value)),Promise.all(n).then((function(){L.push("/SensoriFront")})).catch((function(){I("Modifica dell'account fallita.")})).finally((function(){m(!1)}))},children:[_&&Object(b.jsx)(f.a,{variant:"danger",children:_}),Object(b.jsxs)(g.a.Group,{id:"email",children:[Object(b.jsx)(g.a.Label,{children:"Email"}),Object(b.jsx)(g.a.Control,{type:"email",ref:e,required:!0,defaultValue:c.email})]}),Object(b.jsxs)(g.a.Group,{id:"password",children:[Object(b.jsx)(g.a.Label,{children:"Password"}),Object(b.jsx)(g.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(b.jsxs)(g.a.Group,{id:"password-confirm",children:[Object(b.jsx)(g.a.Label,{children:"Conferma password"}),Object(b.jsx)(g.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a,{disabled:p,className:"w-100",type:"submit",children:"Update Profile"})]})]})}),Object(b.jsx)("div",{className:"text-center mt-2",children:Object(b.jsx)(s.b,{to:"/SensoriFront",children:"Annulla"})})]})}var J=function(){return Object(b.jsx)(I,{children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"w-100",children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/signup",component:H}),Object(b.jsx)(M,{path:"/SensoriFront",exact:!0,component:P}),Object(b.jsx)(M,{path:"/update-profile",exact:!0,component:z}),Object(b.jsx)(l.b,{path:"/login",component:U}),Object(b.jsx)(l.b,{path:"/forgot-password",component:q}),Object(b.jsx)(l.b,{path:"/about",component:p})]}),Object(b.jsx)(x,{})]})})})})},V=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,226)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),c(e),i(e)}))};r(219);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(I,{children:Object(b.jsx)(J,{})})}),document.getElementById("root")),V()},66:function(e){e.exports=JSON.parse('{"users":[{"id":1,"uid":"PPFmT0MvyyMKzIVkMsvInhL67fn2","entries":[{"id":1,"label":"Entrata 1","results":[{"id":1,"CF_LINE_1":220,"THI_1":75,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"02 Lug","time":"15:30"},{"id":2,"CF_LINE_1":224,"THI_1":70,"CF_LINE_2":234,"THI_2":78,"WIND":0,"RH":503,"date":"02 Lug","time":"16:30"},{"id":3,"CF_LINE_1":223,"THI_1":80,"CF_LINE_2":231,"THI_2":88,"WIND":0,"RH":503,"date":"02 Lug","time":"17:30"},{"id":4,"CF_LINE_1":231,"THI_1":70,"CF_LINE_2":241,"THI_2":79,"WIND":0,"RH":503,"date":"02 Lug","time":"18:30"},{"id":5,"CF_LINE_1":237,"THI_1":72,"CF_LINE_2":247,"THI_2":80,"WIND":0,"RH":503,"date":"02 Lug","time":"19:30"},{"id":6,"CF_LINE_1":233,"THI_1":78,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"02 Lug","time":"20:30"},{"id":1,"CF_LINE_1":220,"THI_1":75,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"03 Lug","time":"15:30"},{"id":2,"CF_LINE_1":224,"THI_1":70,"CF_LINE_2":234,"THI_2":78,"WIND":0,"RH":503,"date":"03 Lug","time":"16:30"},{"id":3,"CF_LINE_1":223,"THI_1":80,"CF_LINE_2":231,"THI_2":88,"WIND":0,"RH":503,"date":"03 Lug","time":"17:30"},{"id":4,"CF_LINE_1":231,"THI_1":70,"CF_LINE_2":241,"THI_2":79,"WIND":0,"RH":503,"date":"03 Lug","time":"18:30"},{"id":5,"CF_LINE_1":237,"THI_1":72,"CF_LINE_2":247,"THI_2":80,"WIND":0,"RH":503,"date":"03 Lug","time":"19:30"},{"id":6,"CF_LINE_1":233,"THI_1":78,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"03 Lug","time":"20:30"},{"id":1,"CF_LINE_1":220,"THI_1":75,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"04 Lug","time":"15:30"},{"id":2,"CF_LINE_1":224,"THI_1":70,"CF_LINE_2":234,"THI_2":78,"WIND":0,"RH":503,"date":"04 Lug","time":"16:30"},{"id":3,"CF_LINE_1":223,"THI_1":80,"CF_LINE_2":231,"THI_2":88,"WIND":0,"RH":503,"date":"04 Lug","time":"17:30"},{"id":4,"CF_LINE_1":231,"THI_1":70,"CF_LINE_2":241,"THI_2":79,"WIND":0,"RH":503,"date":"04 Lug","time":"18:30"},{"id":5,"CF_LINE_1":237,"THI_1":72,"CF_LINE_2":247,"THI_2":80,"WIND":0,"RH":503,"date":"04 Lug","time":"19:30"},{"id":6,"CF_LINE_1":233,"THI_1":78,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"04 Lug","time":"20:30"},{"id":1,"CF_LINE_1":220,"THI_1":75,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"05 Lug","time":"15:30"},{"id":2,"CF_LINE_1":224,"THI_1":70,"CF_LINE_2":234,"THI_2":78,"WIND":0,"RH":503,"date":"05 Lug","time":"16:30"},{"id":3,"CF_LINE_1":223,"THI_1":80,"CF_LINE_2":231,"THI_2":88,"WIND":0,"RH":503,"date":"05 Lug","time":"17:30"},{"id":4,"CF_LINE_1":231,"THI_1":70,"CF_LINE_2":241,"THI_2":79,"WIND":0,"RH":503,"date":"05 Lug","time":"18:30"},{"id":5,"CF_LINE_1":237,"THI_1":72,"CF_LINE_2":247,"THI_2":80,"WIND":0,"RH":503,"date":"05 Lug","time":"19:30"},{"id":6,"CF_LINE_1":233,"THI_1":78,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"05 Lug","time":"20:30"},{"id":1,"CF_LINE_1":220,"THI_1":75,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"06 Lug","time":"15:30"},{"id":2,"CF_LINE_1":224,"THI_1":70,"CF_LINE_2":234,"THI_2":78,"WIND":0,"RH":503,"date":"06 Lug","time":"16:30"},{"id":3,"CF_LINE_1":223,"THI_1":80,"CF_LINE_2":231,"THI_2":88,"WIND":0,"RH":503,"date":"06 Lug","time":"17:30"},{"id":4,"CF_LINE_1":231,"THI_1":70,"CF_LINE_2":241,"THI_2":79,"WIND":0,"RH":503,"date":"06 Lug","time":"18:30"},{"id":5,"CF_LINE_1":237,"THI_1":72,"CF_LINE_2":247,"THI_2":80,"WIND":0,"RH":503,"date":"06 Lug","time":"19:30"},{"id":6,"CF_LINE_1":233,"THI_1":78,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"06 Lug","time":"20:30"},{"id":1,"CF_LINE_1":220,"THI_1":75,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"07 Lug","time":"15:30"},{"id":2,"CF_LINE_1":224,"THI_1":70,"CF_LINE_2":234,"THI_2":78,"WIND":0,"RH":503,"date":"07 Lug","time":"16:30"},{"id":3,"CF_LINE_1":223,"THI_1":80,"CF_LINE_2":231,"THI_2":88,"WIND":0,"RH":503,"date":"07 Lug","time":"17:30"},{"id":4,"CF_LINE_1":231,"THI_1":70,"CF_LINE_2":241,"THI_2":79,"WIND":0,"RH":503,"date":"07 Lug","time":"18:30"},{"id":5,"CF_LINE_1":237,"THI_1":72,"CF_LINE_2":247,"THI_2":80,"WIND":0,"RH":503,"date":"07 Lug","time":"19:30"},{"id":6,"CF_LINE_1":233,"THI_1":78,"CF_LINE_2":240,"THI_2":83,"WIND":0,"RH":503,"date":"07 Lug","time":"20:30"}]},{"id":2,"label":"Entrata 2","results":[{"id":1,"CF_LINE_1":220,"THI_1":75,"CF_LINE_2":229,"THI_2":79,"WIND":0,"RH":500,"date":"02 Lug","time":"15:30"},{"id":2,"CF_LINE_1":224,"THI_1":70,"CF_LINE_2":232,"THI_2":78,"WIND":0,"RH":500,"date":"02 Lug","time":"16:30"},{"id":3,"CF_LINE_1":223,"THI_1":80,"CF_LINE_2":231,"THI_2":87,"WIND":0,"RH":500,"date":"02 Lug","time":"17:30"},{"id":4,"CF_LINE_1":231,"THI_1":70,"CF_LINE_2":264,"THI_2":80,"WIND":0,"RH":500,"date":"02 Lug","time":"18:30"},{"id":5,"CF_LINE_1":237,"THI_1":72,"CF_LINE_2":244,"THI_2":79,"WIND":0,"RH":500,"date":"02 Lug","time":"19:30"},{"id":6,"CF_LINE_1":230,"THI_1":77,"CF_LINE_2":239,"THI_2":84,"WIND":0,"RH":500,"date":"02 Lug","time":"20:30"}]},{"id":3,"label":"Entrata 3","results":[{"id":1,"CF_LINE_1":240,"THI_1":72,"CF_LINE_2":250,"THI_2":78,"WIND":0,"RH":490,"date":"02 Lug","time":"15:30"},{"id":2,"CF_LINE_1":229,"THI_1":70,"CF_LINE_2":239,"THI_2":78,"WIND":0,"RH":491,"date":"02 Lug","time":"16:30"},{"id":3,"CF_LINE_1":228,"THI_1":80,"CF_LINE_2":237,"THI_2":88,"WIND":0,"RH":490,"date":"02 Lug","time":"17:30"},{"id":4,"CF_LINE_1":225,"THI_1":73,"CF_LINE_2":234,"THI_2":80,"WIND":0,"RH":490,"date":"02 Lug","time":"18:30"},{"id":5,"CF_LINE_1":238,"THI_1":72,"CF_LINE_2":238,"THI_2":80,"WIND":0,"RH":490,"date":"02 Lug","time":"19:30"},{"id":6,"CF_LINE_1":220,"THI_1":74,"CF_LINE_2":230,"THI_2":84,"WIND":0,"RH":490,"date":"02 Lug","time":"20:30"}]}]},{"id":2,"uid":"****","username":"Utente numero 2","entries":[{"id":1,"label":"Sondaggio","uomini":56,"donne":92}]}]}')}},[[220,1,2]]]);
//# sourceMappingURL=main.1fd6ef34.chunk.js.map