(this["webpackJsonp@lereacteur/apollo-student"]=this["webpackJsonp@lereacteur/apollo-student"]||[]).push([[3],{198:function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2),a=n.n(r),c=n(18);function i(){var e=Object(c.a)(),t=e.useSelector.selectLocation(),n=e.useSelector.selectCreateLinkProps();return a.a.useCallback((function(e,r){return n(t,e,r)}),[n,t])}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2);function a(e){var t=Object(r.useState)(e.current),n=t[0],a=t[1];return Object(r.useEffect)((function(){n!==e.current&&a(e.current)})),n}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(2),a=n.n(r),c=n(218),i=n(98),s=n(203);function o(e){return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:void 0,height:void 0}}function l(e){var t=Object(i.a)(null,e),n=Object(s.a)(t),r=a.a.useState(o(n)),l=r[0],u=r[1],d=a.a.useCallback((function(){n&&u(o(n))}),[n]);return a.a.useLayoutEffect((function(){if(n){d();var e=new c.a((function(){return d()}));return e.observe(n),function(){e&&(e.disconnect(),e=null)}}}),[d,n]),a.a.useMemo((function(){return{width:l.width,height:l.height,ref:t}}),[l.height,l.width,t])}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a=n.n(r),c=a.a.memo((function(e){var t=e.whiteVersion,n=void 0!==t&&t,r=e.width,c=e.height;return n?a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 589.61 108.23",width:r,height:c},a.a.createElement("g",null,a.a.createElement("path",{d:"M581.12,65.22a8.45,8.45,0,1,1,0,16.89,8.45,8.45,0,0,1,0-16.89Z",fill:"#fcc01a"}),a.a.createElement("polygon",{fill:"#ffffff",points:"139.03 81.11 148.15 81.11 148.15 26.17 139.03 33.92 139.03 81.11"}),a.a.createElement("path",{fill:"#ffffff",d:"M165.91 60.47A14.54 14.54 0 0 0 180.5 74.1c6.72 0 10.37-3.27 13-6.15l5.95 5.67c-3.36 4.32-9.79 8.45-19 8.45-13.15 0-23.33-10-23.33-23.52S166.3 35 179.06 35c12.58 0 21.7 10.17 21.7 23.52a16 16 0 0 1-.1 1.92zm.77-7.68h24.57A12.59 12.59 0 0 0 179.35 43 13.11 13.11 0 0 0 166.68 52.79zM258.54 60.47A14.54 14.54 0 0 0 273.13 74.1c6.72 0 10.36-3.27 13-6.15l6 5.67c-3.36 4.32-9.79 8.45-19 8.45-13.15 0-23.33-10-23.33-23.52S258.92 35 271.69 35c12.57 0 21.69 10.17 21.69 23.52a17.72 17.72 0 0 1-.09 1.92zm.76-7.68h24.58A12.61 12.61 0 0 0 272 43 13.12 13.12 0 0 0 259.3 52.79zM335.24 77a20.7 20.7 0 0 1-13.92 5.09 23.18 23.18 0 0 1-11.33-3 24.11 24.11 0 0 1 .1-41.18 21.47 21.47 0 0 1 11-2.88 21.1 21.1 0 0 1 14.11 5.09V36h8.83V81.11h-8.83zM335 50.1a16.24 16.24 0 0 0-12.86-6.43c-8.74 0-14.5 7-14.5 14.88a14.74 14.74 0 0 0 15 14.88A15.65 15.65 0 0 0 335 67zM396.16 71.51c-3.75 6.24-11.81 10.56-20.06 10.56-13.92 0-24.1-10.18-24.1-23.52S362 35 375.52 35a23.8 23.8 0 0 1 19.2 9.79L388 50.48a15.49 15.49 0 0 0-12.48-6.81c-8.16 0-14.4 6.33-14.4 14.88 0 8.83 6.34 14.88 15 14.88 5.95 0 10.17-3.17 13-7zM444.49 60.47A14.54 14.54 0 0 0 459.08 74.1c6.72 0 10.37-3.27 13-6.15L478 73.62c-3.36 4.32-9.79 8.45-19 8.45-13.15 0-23.32-10-23.32-23.52S444.87 35 457.64 35c12.57 0 21.69 10.17 21.69 23.52a17.72 17.72 0 0 1-.09 1.92zm.77-7.68h24.57A12.6 12.6 0 0 0 457.93 43 13.1 13.1 0 0 0 445.26 52.79zM491.43 74.48C488.65 71 487.3 66.61 487.3 59V36h9.12V60.47c0 4.6 1 7.1 2.6 9a11.51 11.51 0 0 0 8.73 3.94c5.57 0 10.08-3.36 12.67-6.44V36h9.12V81.11h-8.83V77a20.31 20.31 0 0 1-29.28-2.5z"}),a.a.createElement("polygon",{fill:"#ffffff",points:"551.43 38.93 551.43 37.99 551.43 35.99 542.31 35.99 542.31 81.11 551.43 81.11 551.43 54.99 551.43 49.47 551.43 48.2 567.4 45.26 567.4 35.99 551.43 38.93"}),a.a.createElement("path",{fill:"#ffffff",d:"M432,44.15V36h-14.4V26.16l-9.12,7.75L406.05,36,397,43.71v.44h11.52V64.79c0,4.89,1,9,3.65,12,2.88,3.26,7.1,5.28,12.76,5.28a25.2,25.2,0,0,0,7.11-1l-1.83-8.26a22.36,22.36,0,0,1-5,.58c-2.4,0-5-.87-6.24-2.4-1.15-1.35-1.34-3.36-1.34-5.76V44.15Z"}),a.a.createElement("polygon",{fill:"#ffffff",points:"231.18 38.93 231.18 37.99 231.18 35.99 222.06 35.99 222.06 81.11 231.18 81.11 231.18 54.99 231.18 49.47 231.18 48.2 247.14 45.62 247.14 35.99 231.18 38.93"}),a.a.createElement("path",{fill:"#ffffff",d:"M106.85,66.51A54.23,54.23,0,0,0,41.72,1.38,53.18,53.18,0,0,0,1.38,41.71a54.24,54.24,0,0,0,65.14,65.14A53.21,53.21,0,0,0,106.85,66.51Z"}),a.a.createElement("path",{d:"M60.77,70.47h0l29.53-12-.55-7.33L71.18,58.68a17.37,17.37,0,0,0,.42-2.15h0L76,25l-6.62-3.2L66.6,41.64A16.49,16.49,0,0,0,65,40.17L39.78,20.6l-6.07,4.14L49.55,37.06a19,19,0,0,0-2.09.7h0l-29.52,12,.54,7.33L37,49.54a17.53,17.53,0,0,0-.42,2.16h0L32.25,83.28l6.63,3.2,2.74-19.89a16.49,16.49,0,0,0,1.65,1.47h0L68.44,87.63l6.08-4.15L58.67,71.16A18.42,18.42,0,0,0,60.77,70.47ZM54.11,43.75A10.36,10.36,0,1,1,43.75,54.11,10.37,10.37,0,0,1,54.11,43.75Z",fill:"#5c47d3"}))):a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 589.61 108.23",width:r,height:c},a.a.createElement("g",null,a.a.createElement("path",{d:"M581.12,65.17a8.45,8.45,0,1,1,0,16.89,8.45,8.45,0,0,1,0-16.89Z",fill:"#fcc01a"}),a.a.createElement("polygon",{points:"139.03 81.11 148.15 81.11 148.15 26.17 139.03 33.92 139.03 81.11",fill:"#5c47d3"}),a.a.createElement("path",{d:"M165.91 60.47A14.54 14.54 0 0 0 180.5 74.1c6.72 0 10.37-3.27 13-6.15l5.95 5.67c-3.36 4.32-9.79 8.45-19 8.45-13.15 0-23.33-10-23.33-23.52S166.3 35 179.06 35c12.58 0 21.7 10.17 21.7 23.52a16 16 0 0 1-.1 1.92zm.77-7.68h24.57A12.59 12.59 0 0 0 179.35 43 13.11 13.11 0 0 0 166.68 52.79zM258.54 60.47A14.54 14.54 0 0 0 273.13 74.1c6.72 0 10.36-3.27 13-6.15l6 5.67c-3.36 4.32-9.79 8.45-19 8.45-13.15 0-23.33-10-23.33-23.52S258.92 35 271.69 35c12.57 0 21.69 10.17 21.69 23.52a17.72 17.72 0 0 1-.09 1.92zm.76-7.68h24.58A12.61 12.61 0 0 0 272 43 13.12 13.12 0 0 0 259.3 52.79zM335.24 77a20.7 20.7 0 0 1-13.92 5.09 23.18 23.18 0 0 1-11.33-3 24.11 24.11 0 0 1 .1-41.18 21.47 21.47 0 0 1 11-2.88 21.1 21.1 0 0 1 14.11 5.09V36h8.83V81.11h-8.83zM335 50.1a16.24 16.24 0 0 0-12.86-6.43c-8.74 0-14.5 7-14.5 14.88a14.74 14.74 0 0 0 15 14.88A15.65 15.65 0 0 0 335 67zM396.16 71.51c-3.75 6.24-11.81 10.56-20.06 10.56-13.92 0-24.1-10.18-24.1-23.52S362 35 375.52 35a23.8 23.8 0 0 1 19.2 9.79L388 50.48a15.49 15.49 0 0 0-12.48-6.81c-8.16 0-14.4 6.33-14.4 14.88 0 8.83 6.34 14.88 15 14.88 5.95 0 10.17-3.17 13-7zM444.49 60.47A14.54 14.54 0 0 0 459.08 74.1c6.72 0 10.37-3.27 13-6.15L478 73.62c-3.36 4.32-9.79 8.45-19 8.45-13.15 0-23.32-10-23.32-23.52S444.87 35 457.64 35c12.57 0 21.69 10.17 21.69 23.52a17.72 17.72 0 0 1-.09 1.92zm.77-7.68h24.57A12.6 12.6 0 0 0 457.93 43 13.1 13.1 0 0 0 445.26 52.79zM491.43 74.48C488.65 71 487.3 66.61 487.3 59V36h9.12V60.47c0 4.6 1 7.1 2.6 9a11.51 11.51 0 0 0 8.73 3.94c5.57 0 10.08-3.36 12.67-6.44V36h9.12V81.11h-8.83V77a20.31 20.31 0 0 1-29.28-2.5z",fill:"#5c47d3"}),a.a.createElement("polygon",{points:"551.43 38.93 551.43 37.99 551.43 35.99 542.31 35.99 542.31 81.11 551.43 81.11 551.43 54.99 551.43 49.47 551.43 48.2 567.4 45.26 567.4 35.99 551.43 38.93",fill:"#5c47d3"}),a.a.createElement("path",{d:"M432,44.15V36h-14.4V26.16l-9.12,7.75L406.05,36,397,43.71v.44h11.52V64.79c0,4.89,1,9,3.65,12,2.88,3.26,7.1,5.28,12.76,5.28a25.2,25.2,0,0,0,7.11-1l-1.83-8.26a22.36,22.36,0,0,1-5,.58c-2.4,0-5-.87-6.24-2.4-1.15-1.35-1.34-3.36-1.34-5.76V44.15Z",fill:"#5c47d3"}),a.a.createElement("polygon",{points:"231.18 38.98 231.18 37.99 231.18 35.99 222.06 35.99 222.06 81.11 231.18 81.11 231.18 54.99 231.18 49.47 231.18 48.26 247.14 45.31 247.14 36.04 231.18 38.98",fill:"#5c47d3"}),a.a.createElement("path",{d:"M106.85,66.51A54.23,54.23,0,0,0,41.72,1.38,53.18,53.18,0,0,0,1.38,41.71a54.24,54.24,0,0,0,65.14,65.14A53.21,53.21,0,0,0,106.85,66.51Z",fill:"#5c47d3"}),a.a.createElement("path",{d:"M60.77,70.47h0l29.53-12-.55-7.33L71.18,58.68a17.37,17.37,0,0,0,.42-2.15h0L76,25l-6.62-3.2L66.6,41.64A16.49,16.49,0,0,0,65,40.17L39.78,20.6l-6.07,4.14L49.55,37.06a19,19,0,0,0-2.09.7h0l-29.52,12,.54,7.33L37,49.54a17.53,17.53,0,0,0-.42,2.16h0L32.25,83.28l6.63,3.2,2.74-19.89a16.49,16.49,0,0,0,1.65,1.47h0L68.44,87.63l6.08-4.15L58.67,71.16A18.42,18.42,0,0,0,60.77,70.47ZM54.11,43.75A10.36,10.36,0,1,1,43.75,54.11,10.37,10.37,0,0,1,54.11,43.75Z",fill:"#fff"})))}))},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return he}));var r=n(10),a=n(21),c=n(2),i=n.n(c),s=n(18),o=n(20),l=n(64),u=o.b.button(l.b.center(),{minWidth:60,border:"none",cursor:"pointer",background:"none",outline:"none"}),d=o.b.div(l.b.center(),{minWidth:160,paddingLeft:30,flex:1}),h=n(184),f=n(190),b=n(206),m=n(401),j=n(40),p=n.n(j),O=n(4),g=o.b.div({display:"flex",flexDirection:"column",alignItems:"flex-start",width:"100%",maxWidth:620,marginRight:10}),x=o.c.input((function(e){var t=e.isBorder,n=e.height,r=Object(O.__rest)(e,["isBorder","height"]);return Object(O.__assign)({zs:[l.c.Averta.styles.Normal,{padding:"7px 10px 5px 40px",borderRadius:3,display:"block",width:"100%",height:n,position:"relative"},function(e){return{border:t?"1px solid "+e.aliases.input.border:"none",background:e.aliases.input.background,"&:active, &:focus":{outline:"none",border:t?"1px solid "+e.colors.brandViolet:"none"},"::placeholder":{fontWeight:500,color:e.colors.regentGrey}}}]},r)})),v=o.b.div({position:"absolute",zIndex:2,marginLeft:13}),C=o.b.label((function(e){return{fontSize:11,color:e.colors.regentGrey,letterSpacing:1.1,textTransform:"uppercase"}}),l.c.Averta.styles.Normal),w=o.b.div({display:"flex",alignItems:"center",position:"relative",width:"100%"}),E=n(59),y=i.a.memo((function(e){var t=e.wrapperRef,n=e.inputRef,r=e.value,a=e.label,c=e.defaultValue,s=void 0===c?"":c,o=e.onBlur,l=e.onFocus,u=e.onChange,d=e.type,h=void 0===d?"text":d,f=e.autoComplete,b=void 0===f?"no-autocomplete":f,m=e.name,j=e.disabled,O=void 0!==j&&j,y=e.placeholder,S=e.isBorder,A=void 0===S||S,z=e.height,M=e.readOnly,R=void 0!==M&&M,P=i.a.useState((function(){return p.a.slug()}))[0],_=null!==r&&void 0!==r?r:s;return i.a.createElement(g,{ref:t},i.a.createElement(C,{htmlFor:P},a),i.a.createElement(w,null,i.a.createElement(v,null,i.a.createElement(E.a,{iconSize:16,icon:"search"})),i.a.createElement(x,{ref:n,readOnly:R,name:m,type:h,autoComplete:b,onBlur:o,onFocus:l,onChange:u,value:_,id:P,disabled:O,placeholder:y,isBorder:A,height:z})))})),S=o.b.div({borderRadius:3,boxShadow:"0 5px 8px 2px rgba(0, 0, 0, 0.05)",background:"#ffffff",overflow:"hidden"}),A=o.b.a(l.b.child,{display:"flex",cursor:"pointer",fontSize:"1rem",lineHeight:"1.6rem",padding:"0.5rem 1rem",textDecoration:"none",overflow:"hidden",boxSizing:"content-box"},(function(e){return{color:e.colors.blackcurrant,"&:hover":{background:e.colors.lavender}}})),z=o.b.div(l.b.center(),l.c.Averta.styles.Normal,{height:100,fontSize:"1.5rem",opacity:.6,padding:"1rem",textAlign:"center"}),M=n(91),R=n(36),P=n(198),_=n(69),k=n(214),L=n(200),I=n(8),V=n(97),T=n(6),N=function(e){var t,n=e.style,a=e.wrapperRef,c=e.close,o=e.query,l=e.setQuery,u=Object(s.a)().useSelector.selectSearchRes(),d=Object(L.a)(),h=u.dataOrNull,f=i.a.useRef(),m=i.a.useRef(null),j=Object(b.a)(m),p=Object(M.b)();i.a.useEffect((function(){setTimeout((function(){f.current&&f.current.focus()}),0)}),[]);var O=Object(R.clamp)(null!==(t=j.height)&&void 0!==t?t:200,0,p.height-100),g=Math.min(200,p.width-200),x=o.length>0&&h?h:[];return Object(T.jsxs)(S,{zs:[Object(r.a)(Object(r.a)({},n),{},{minWidth:g})],ref:a,children:[Object(T.jsx)(y,{inputRef:f,isBorder:!1,placeholder:Object(P.a)("Entrez votre recherche"),height:46,value:o,onChange:function(e){return l(e.target.value)}}),Object(T.jsx)(k.a,{style:{height:O},children:Object(T.jsx)("div",{ref:m,children:0===u.params.length?null:u.pending?Object(T.jsx)(V.a,{isDev:!1,devInfo:""}):0===x.length?Object(T.jsx)(z,{children:Object(T.jsx)("p",{children:Object(P.a)("Aucun r\xe9sultat")})}):x.map((function(e){return Object(T.jsx)(A,Object(r.a)(Object(r.a)({},d(I.STUDENT_APP_ROUTES.coursePage.serialize({sessionId:e.session,atomId:e._id}),{onClick:function(e){_.a.isModifiedEvent(e)||(c(),l(""))}})),{},{children:e.title||"[MISSING TITLE]"}),e.session+"___"+e._id)}))})})]})};var U,B=function(e){var t=e.openOnMount,n=void 0!==t&&t,c=Object(s.a)().useSelector.selectSearchRes(),l=i.a.useRef(null),u=i.a.useRef(null),d=i.a.useState(n),h=Object(a.a)(d,2),j=h[0],p=h[1],O=function(e,t){var n=i.a.useState(e),r=n[0],a=n[1],c=i.a.useState(r),s=c[0],o=c[1];return i.a.useEffect((function(){var e=setTimeout((function(){o(r)}),t);return function(){clearTimeout(e)}}),[t,r]),[r,s,a]}("",300),g=Object(a.a)(O,3),x=g[0],v=g[1],C=g[2],w=c.setParams,E=c.setRequested;i.a.useLayoutEffect((function(){w(v)}),[v,w]),i.a.useLayoutEffect((function(){E(j)}),[j,E]);var S=i.a.useMemo((function(){return{inner:{enabled:!0,order:250},preventOverflow:{padding:7,enabled:!0}}}),[]),A=Object(m.a)({placement:"top",targetRef:l,popperRef:u,arrow:!1,modifiers:S}),z=Object(b.a)(l);return Object(T.jsxs)(i.a.Fragment,{children:[Object(T.jsx)(o.a.div,{zs:{flex:1},onClick:function(e){p(!0),e.stopPropagation()},children:Object(T.jsx)(y,{wrapperRef:l,readOnly:!0,placeholder:Object(P.a)("Entrez votre recherche"),isBorder:!1,height:46,value:x})}),j&&Object(T.jsx)(f.a,{onClose:function(){return p(!1)},canEscapeKeyClose:!0,canOutsideClickClose:!0,children:Object(T.jsx)(N,{style:Object(r.a)({width:z.width},A.styles),wrapperRef:u,close:function(){return p(!1)},query:x,setQuery:C})})]})},D=n(210),F=n(100),Z=o.b.img({height:"46px",width:"46px",borderRadius:"35px",marginRight:"13px",objectFit:"contain"}),W=o.b.div(l.b.horizontal("center"),{height:"46px",width:"46px",borderRadius:"35px",backgroundColor:"white",justifyContent:"center",textAlign:"center",marginRight:"13px"}),H=o.b.span((function(e){return{color:e.colors.regentGrey,fontSize:15,textTransform:"uppercase"}}),l.c.Averta.styles.Normal),q=[l.b.horizontal("center"),l.c.Averta.styles.Normal,{border:"none",cursor:"pointer",background:"none",textAlign:"left",outline:"none",fontSize:"1.2rem",padding:"0.5rem 1rem",color:h.b.colors.blackcurrant,"&:hover":{background:h.b.colors.lavender}}],G=o.b.button.apply(o.b,q),K=o.b.a.apply(o.b,q.concat([{textDecoration:"none"}])),J=o.b.span({padding:5,paddingRight:10,display:"flex"}),Q=o.b.div({position:"fixed",right:10,minWidth:200,boxShadow:"0 5px 8px 2px rgba(0, 0, 0, 0.05), 0 0 2px 2px rgba(0, 0, 0, 0.1)",borderRadius:4,background:"white"},l.b.vertical("stretch")),X=o.c.path((function(e){var t=e.arrowBorder,n=Object(F.a)(e,["arrowBorder"]);return Object(r.a)({fillOpacity:t?.1:0,fill:t?"#10161a":"transparent"},n)})),Y=o.c.path((function(e){var t=e.arrowColor,n=Object(F.a)(e,["arrowColor"]);return Object(r.a)({fill:t||"#fff"},n)})),$=o.b.div({position:"absolute",width:"30px",height:"30px"}),ee=n(41),te=n(9),ne=n.n(te),re=n(17),ae=n(70);!function(e){e[e.Closed=0]="Closed",e[e.Pending=1]="Pending",e[e.Opened=2]="Opened",e[e.Error=3]="Error"}(U||(U={}));var ce=n(402),ie=n(22),se="5e189e582182e808620a935a",oe="5d63f94d6dc1a122807cf185",le="5e9055e52b7739930f7fd7ec",ue="5e74db1c24c9b9569abf46ad",de=function(e){var t,n,u=e.meUser,d=e.topbarHeight,h=Object(s.a)().useSelector,b=i.a.useState(!1),m=Object(a.a)(b,2),j=m[0],O=m[1],g=h.selectAdminMode(),x=h.selectLogout(),v=h.selectSetAdminMode(),C=Object(L.a)(),w=h.selectAllRoutesMatch(),y=w.courseHome,S=w.coursePage,A=Object(c.useMemo)((function(){return y?ie.a.REACT_APP_ADMIN_APP+ce.ADMIN_APP_ROUTES.sessionContent.serialize({sessionId:y.sessionId}):S?ie.a.REACT_APP_ADMIN_APP+ce.ADMIN_APP_ROUTES.sessionContentAtom.serialize({sessionId:S.sessionId,atomId:S.atomId}):null}),[y,S]),z=function(){var e=i.a.useState(U.Closed),t=Object(a.a)(e,2),n=t[0],r=t[1],c=i.a.useRef(null),s=i.a.useRef(null),o=i.a.useCallback(Object(re.a)(ne.a.mark((function e(){var t,n,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p()(),c.current=t,r(U.Pending),e.prev=3,e.next=6,ae.a.get("https://lereacteur-api.herokuapp.com/open-gate");case 6:return n=e.sent,e.next=9,n.json();case 9:a=e.sent,t===c.current&&("OK"===a.message?r(U.Opened):r(U.Error)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),t===c.current&&r(U.Error);case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))),[]);return i.a.useEffect((function(){return s.current&&window.clearTimeout(s.current),n!==U.Error&&n!==U.Opened||(s.current=window.setTimeout((function(){r(U.Closed)}),4e3)),function(){null!==s.current&&window.clearTimeout(s.current)}}),[n]),{status:n,open:o}}(),M=u&&(u.sessions&&u.sessions.find((function(e){return[se,oe,le,ue].includes(e.id)}))||u.role===ee.UserRole.Values.admin);return Object(T.jsxs)(i.a.Fragment,{children:[Object(T.jsx)(o.a.div,{zs:[l.b.horizontal("center"),{cursor:"pointer"}],onClick:function(){return O((function(e){return!e}))},children:u.profilePicture&&u.profilePicture.url?Object(T.jsx)(Z,{src:u.profilePicture.url}):u.githubProfilePicture?Object(T.jsx)(Z,{src:u.githubProfilePicture}):u.firstname&&u.lastname?Object(T.jsx)(W,{children:Object(T.jsxs)(H,{children:[u.firstname.charAt(0),u.lastname.charAt(0)]})}):Object(T.jsx)(W,{children:Object(T.jsxs)(H,{children:[null===(t=u.email)||void 0===t?void 0:t.charAt(0),null===(n=u.email)||void 0===n?void 0:n.charAt(1)]})})}),j&&Object(T.jsx)(f.a,{onClose:function(){return O(!1)},canEscapeKeyClose:!0,canOutsideClickClose:!0,children:Object(T.jsxs)(Q,{zs:{top:d+10},children:[Object(T.jsx)($,{style:{right:11,top:-11,pointerEvents:"none"},children:Object(T.jsxs)("svg",{viewBox:"0 0 30 30",style:{transform:"rotate(90deg)"},children:[Object(T.jsx)(X,{d:"M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z",arrowBorder:!0}),Object(T.jsx)(Y,{d:"M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z",arrowColor:"white"})]})}),Object(T.jsxs)(K,Object(r.a)(Object(r.a)({},C(I.STUDENT_APP_ROUTES.studentProfile.serialize())),{},{children:[Object(T.jsx)(J,{children:Object(T.jsx)(E.a,{icon:"user"})}),Object(T.jsx)(o.a.span,{zs:{flex:1},children:Object(P.a)("Mon compte")})]})),u&&u.role===ee.UserRole.Values.admin&&Object(T.jsxs)(G,{onClick:function(){v(!g)},children:[Object(T.jsx)(J,{children:Object(T.jsx)(E.a,{icon:g?"eye-off":"eye"})}),Object(T.jsx)(o.a.span,{children:Object(P.a)(g?"View as Student":"View as Admin")})]}),M&&Object(T.jsxs)(G,{onClick:function(){z.open()},children:[Object(T.jsx)(J,{children:Object(T.jsx)(E.a,{icon:z.status===U.Opened?"unlock":z.status===U.Error?"alert-triangle":"lock"})}),Object(T.jsx)(o.a.span,{children:Object(P.a)(z.status===U.Closed?"Ouvrir la grille":z.status===U.Opened?"Grille Ouverte":z.status===U.Pending?"Ouverture...":"Erreur")})]}),A&&u&&u.role===ee.UserRole.Values.admin&&Object(T.jsxs)(K,{href:A,children:[Object(T.jsx)(J,{children:Object(T.jsx)(E.a,{icon:"settings"})}),Object(T.jsx)(o.a.span,{children:Object(P.a)("Admin")})]}),Object(T.jsxs)(G,{onClick:x,children:[Object(T.jsx)(J,{children:Object(T.jsx)(E.a,{icon:"log-out"})}),Object(T.jsx)(o.a.span,{zs:{flex:1},children:Object(P.a)("Se d\xe9connecter")})]})]})})]})},he=function(e){var t=e.menuVisible,n=e.setMenuVisible,c=e.showMenuButton,f=e.height,b=e.lavenderVariant,m=e.hideLogo,j=e.hideSearch,p=Object(s.a)().useSelector,O=i.a.useState(!1),g=Object(a.a)(O,2),x=g[0],v=g[1],C=Object(M.b)(),w=Object(L.a)(),y=C.width>700,S=!1===y&&x,A=p.selectMeUser().dataOrNull;return Object(T.jsx)(o.a.div,{zs:[l.b.horizontal("center"),{height:f,minHeight:f,flexShrink:0},function(e){return{backgroundColor:b?e.colors.lavender:e.colors.brandViolet}}],children:S&&!1===j?Object(T.jsxs)(i.a.Fragment,{children:[Object(T.jsx)(u,{onClick:function(){v(!1)},children:Object(T.jsx)(E.a,{iconSize:26,icon:"chevron-left",color:h.b.colors.white})}),Object(T.jsx)(o.a.div,{zs:[l.b.horizontalChild(),{paddingRight:20}],children:Object(T.jsx)(B,{openOnMount:!0})})]}):Object(T.jsxs)(i.a.Fragment,{children:[c&&Object(T.jsx)(u,{onClick:function(){return n((function(e){return!e}))},children:Object(T.jsx)(E.a,{iconSize:26,icon:t?"x":"menu",color:h.b.colors.white})}),j&&Object(T.jsx)(o.a.div,{zs:{flex:1}}),!m&&Object(T.jsx)(o.a.div,{zs:y?{}:Object(r.a)({flex:1},l.b.center()),children:Object(T.jsx)(o.a.a,Object(r.a)(Object(r.a)({},w(I.STUDENT_APP_ROUTES.home.serialize())),{},{zs:[{display:"block"}],children:Object(T.jsx)(d,{children:Object(T.jsx)(D.a,{whiteVersion:!b,height:30})})}))}),j?Object(T.jsx)(o.a.div,{zs:{flex:1}}):y?Object(T.jsx)(i.a.Fragment,{children:Object(T.jsx)(o.a.div,{zs:[l.b.child,{paddingLeft:46,paddingRight:46}],children:Object(T.jsx)(B,{})})}):Object(T.jsx)(i.a.Fragment,{children:Object(T.jsx)(u,{onClick:function(){return v(!0)},children:Object(T.jsx)(E.a,{iconSize:20,icon:"search",color:h.b.colors.white})})}),A&&Object(T.jsx)(de,{meUser:A,topbarHeight:f,whiteVersion:!b})]})})}},401:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(4),a=n(2),c=n.n(a),i=n(88),s=n(245),o=n(36),l=n(98),u=n(203),d={position:"absolute",top:0,left:0,opacity:0,pointerEvents:"none"};function h(e){void 0===e&&(e={});var t=e.placement,n=void 0===t?"bottom":t,a=e.positionFixed,h=void 0!==a&&a,f=e.eventsEnabled,b=void 0===f||f,m=e.modifiers,j=void 0===m?{}:m,p=e.arrowRef,O=e.popperRef,g=e.targetRef,x=e.arrow,v=void 0===x||x,C=Object(i.b)(),w=c.a.useRef(null),E=Object(l.a)(null,g,C&&C.targetRef),y=Object(l.a)(null,O),S=Object(l.a)(null,p),A=c.a.useState((function(){return{placement:n,styles:d,arrowStyles:{}}})),z=A[0],M=A[1],R=c.a.useCallback((function(e){return M((function(t){return t.placement===e.placement&&Object(o.shalowEqual)(t.arrowStyles,e.arrowStyles)&&Object(o.shalowEqual)(t.styles,e.styles)?t:{placement:e.placement,arrowStyles:e.arrowStyles,styles:e.styles}})),e}),[]),P=Object(u.a)(E),_=Object(u.a)(y);return c.a.useEffect((function(){if(null!==w.current&&w.current.destroy(),null!==P&&null!==_){var e={placement:n,positionFixed:h,modifiers:Object(r.__assign)(Object(r.__assign)({},j),{arrow:Object(r.__assign)(Object(r.__assign)({},j&&j.arrow),{enabled:v,element:S.current}),applyStyle:{enabled:!1},updateStateModifier:{enabled:!0,order:900,fn:R}})};return w.current=new s.a(P,_,e),function(){null!==w.current&&w.current.destroy()}}}),[S,y,E,j,n,_,h,P,R,v]),c.a.useEffect((function(){null!==w.current&&(b?w.current.enableEventListeners():w.current.disableEventListeners())}),[w,b]),Object(r.__assign)(Object(r.__assign)({},z),{arrowRef:S,popperRef:y,targetRef:E})}},402:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ADMIN_APP_ROUTES=void 0;var r=n(44),a=n(85),c=r.Chemin.create("session",a.ExpressCheminParams.objectId("sessionId")),i=r.Chemin.create("course",a.ExpressCheminParams.objectId("courseId")),s=r.Chemin.create("user",a.ExpressCheminParams.objectId("userId")),o=r.Chemin.create("academy");t.ADMIN_APP_ROUTES={adminHome:r.Chemin.create(),createAdmin:r.Chemin.create("create-admin"),login:r.Chemin.create("login"),requestResetPassword:r.Chemin.create("reset-password"),resetPassword:r.Chemin.create("reset-password-with-token"),loginWithGithubToken:r.Chemin.create("login-with-github-token"),signupAdminFromInvite:r.Chemin.create("signup_admin_from_invite"),createAcademy:r.Chemin.create("create-academy"),academyInfos:o,academyInfosEdit:r.Chemin.create(o,"infos-edit"),academyDetailsTheme:r.Chemin.create(o,"theme"),academyDetailsThemeEdit:r.Chemin.create(o,"theme-edit"),academyTeam:r.Chemin.create(o,"team"),academyMemberInvite:r.Chemin.create(o,"invite-member"),courses:r.Chemin.create("courses"),createCourse:r.Chemin.create("course","create"),courseInfos:i,courseSessionsList:r.Chemin.create(i,"course-sessions-list"),courseEdit:r.Chemin.create(i,"edit"),users:r.Chemin.create("users"),usersInvite:r.Chemin.create("users","invite"),userInfos:s,userInfosLogin:r.Chemin.create(s,"login-infos"),userEdit:r.Chemin.create(s,"edit"),userLoginEdit:r.Chemin.create(s,"login-edit"),userSessions:r.Chemin.create(s,"sessions"),modules:r.Chemin.create("modules"),sessions:r.Chemin.create("sessions"),sessionInfos:c,sessionEdit:r.Chemin.create(c,"edit"),sessionChecklist:r.Chemin.create(c,"checklist"),sessionCalendar:r.Chemin.create(c,"calendar"),sessionStudents:r.Chemin.create(c,"students"),sessionAddStudents:r.Chemin.create(c,"students","add"),sessionContent:r.Chemin.create(c,"content"),sessionContentAtom:r.Chemin.create(c,"content",a.ExpressCheminParams.objectId("atomId")),createSession:r.Chemin.create("session","create"),sessionInviteUser:r.Chemin.create("session","invite-user",a.ExpressCheminParams.objectId("sessionId"))}}}]);
//# sourceMappingURL=3.ef90cf87.chunk.js.map