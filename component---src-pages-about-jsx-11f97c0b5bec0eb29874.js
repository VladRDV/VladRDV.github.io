(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(95),r=n(187),l=n(38),s=n(186),c=n(185),d=i.StyleSheet.create({main:{alignSelf:"stretch",flexDirection:"row",alignItems:"stretch",justifyContent:"center",paddingTop:"70px",textAlign:"left",minHeight:"100vh",height:"auto",width:"100%",background:c.a},container:{width:"60%","@media screen and (max-width: 900px)":{width:"90%"},"@media screen and (max-width: 480px)":{width:"94%"}},me:{width:"25%",minWidth:"220px",border:" 3px solid #fff",borderRadius:"70px 0",margin:"5px",height:"auto",float:"right","@media screen and (max-width: 400px)":{float:"none",width:"100%",margin:0}},txt:{whiteSpace:"pre-wrap",lineHeight:"1.5em"}}),m=n(191),u=n.n(m);t.default=function(e){var t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("main",{className:Object(i.css)(d.main)+" normal_font"},o.a.createElement("div",{className:""+Object(i.css)(d.container)},o.a.createElement("img",{className:""+Object(i.css)(d.me),src:u.a,alt:"Vladimir Radovanovich"}),o.a.createElement("p",{className:""+Object(i.css)(d.txt)},"Hi there)",o.a.createElement("br",null),"My name is Vladimir.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold"}},"Who I am?"),o.a.createElement("br",null),o.a.createElement("br",null),"I'm a programmer and maker from Belgrade.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold"}},"What I do?"),o.a.createElement("br",null),o.a.createElement("br",null),"While the base of my activity is Web-Development, I have a lot of hobbies, and from time to time I challenge myself in areas that share borders with what I usually do in order to keep an open the mind.",o.a.createElement("br",null),"I'm also a fond of learning.",o.a.createElement("br",null),"What can I say... keep the excitement coming by constantly seeking new knowledge and skills.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold"}},"What else?"),"I could go on and on about myself, beeing boring, but I think, that my ",o.a.createElement(l.Link,{style:{color:"#fff"},to:s.a.blog},"BLOG")," can give you a better idea of who I am"))))}},185:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"h",function(){return o}),n.d(t,"l",function(){return i}),n.d(t,"f",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"k",function(){return c}),n.d(t,"j",function(){return d}),n.d(t,"e",function(){return m}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return f}),n.d(t,"g",function(){return p});var a="#000",o=a,i="#fff",r="#1565c0",l="#d32f2f",s="#308732",c="#ffca28",d="rgba(0,0,0,0)",m="#f57c00",u="#4b0082",f="#222",p="#e0e0e0"},186:function(e,t,n){"use strict";t.a={home:"/",blog:"/blog",about:"/about",contact:"/contact",portfolio:"/portfolio"}},187:function(e,t,n){"use strict";var a,o,i,r=n(8),l=n.n(r),s=n(37),c=n.n(s),d=n(0),m=n.n(d),u=n(95),f=n(185),p=u.StyleSheet.create({root_std:{background:f.h,color:f.l,dispaly:"flex",flexGrow:1,flexDirection:"column",height:"100vh",minWidth:"100vw",position:"relative",zIndex:0,overflowY:"auto"}}),h="@media screen and (max-width: 768px)",b=u.StyleSheet.create({container:(a={justifyContent:"center",alignItems:"stretch",height:"60px"},a[h]={display:"none"},a),bgTrns:{background:f.j},bgBlack:{background:f.a},menuStylerBg:{width:"100%",position:"fixed",top:0,left:0,zIndex:1e3},btn:{display:"flex",backgroundColor:f.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",minWidth:"12.25%",border:"1px solid",textDecoration:"none",color:f.l,borderColor:f.j,transition:".8s ease-in-out all",":hover":{borderColor:f.l}},mobileNav:(o={flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",display:"none",transition:".8s background-color"},o[h]={display:"flex"},o),mobileNav_close:{backgroundColor:f.j},mobileNav_open:{backgroundColor:f.a},mobileMenu:(i={display:"flex",flex:.8,flexDirection:"column",overflowY:"hidden",backgroundColor:f.j,alignItems:"stretch",justifyContent:"space-around",transition:".7s"},i["@media screen and (max-width: 576px) and (orientation: landscape)"]={flexDirection:"row"},i),mobileMenu_close:{height:0,opacity:0},mobileMenu_open:{height:"calc(100vh - 40px)",opacity:1},mobileMenuBtn:{display:"flex",flex:.1,backgroundColor:f.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",textDecoration:"none",border:"1px solid",color:f.l,borderColor:f.j},mobileMenuOpenerContainer:{display:"flex",minHeight:"40px",alignItems:"center",justifyContent:"center"},mobileMenuOpener:{backgroundColor:f.l,alignSelf:"center",borderRadius:"50px",border:"1px solid "+f.a,minWidth:"95px",justifyContent:"center",alignItems:"center",height:"22px",width:"21%"},btn_danger:{":hover":{backgroundColor:f.b}},btn_white:{":hover":{backgroundColor:f.l,color:f.a}},btn_indigo:{":hover":{backgroundColor:f.d}},btn_success:{":hover":{backgroundColor:f.i}},btn_warning:{":hover":{backgroundColor:f.k}},btn_primary:{":hover":{backgroundColor:f.f}},btn_orange:{":hover":{backgroundColor:f.e}}}),g=n(38),k=n(186),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobileNavigatorMode:!1},n.toggleMobileMenu=n.toggleMobileMenu.bind(c()(c()(n))),n.defineMobileNavStyles=n.defineMobileNavStyles.bind(c()(c()(n))),n.defineMenuStyles=n.defineMenuStyles.bind(c()(c()(n))),n.defineNavStyles=n.defineNavStyles.bind(c()(c()(n))),n.linkNavToggle=n.linkNavToggle.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.toggleMobileMenu=function(){this.setState({mobileNavigatorMode:!this.state.mobileNavigatorMode})},n.defineMobileNavStyles=function(){var e=this.state.mobileNavigatorMode,t=[b.mobileNav,b.menuStylerBg,b.mobileNav_open],n=[b.mobileNav,b.menuStylerBg,b.mobileNav_close],a=e?t:n;return u.css.apply(void 0,a)},n.defineMenuStyles=function(){var e=this.state.mobileNavigatorMode,t=[b.mobileMenu,b.mobileMenu_close],n=[b.mobileMenu,b.mobileMenu_open],a=e?n:t;return u.css.apply(void 0,a)},n.defineNavStyles=function(){var e=[b.container,b.menuStylerBg,b.bgTrns],t=[b.container,b.menuStylerBg,b.bgBlack];return"/"===this.props.location.pathname?u.css.apply(void 0,e):u.css.apply(void 0,t)},n.linkNavToggle=function(e){return this.props.location===e?this.toggleMobileMenu():null},n.render=function(){var e=this,t=[b.btn,b.btn_indigo],n=[b.btn,b.btn_primary],a=[b.btn,b.btn_success],o=[b.btn,b.btn_orange],i=[b.btn,b.btn_warning];return m.a.createElement(d.Fragment,null,m.a.createElement("nav",{className:""+this.defineNavStyles()},m.a.createElement(g.Link,{to:k.a.home,state:{terminalNoShow:!0},className:"normal_font "+u.css.apply(void 0,t)},"Home"),m.a.createElement(g.Link,{to:k.a.portfolio,className:"normal_font "+u.css.apply(void 0,n)},"Portfolio"),m.a.createElement(g.Link,{to:k.a.blog,className:"normal_font "+u.css.apply(void 0,a)},"Blog"),m.a.createElement(g.Link,{to:k.a.about,className:"normal_font "+u.css.apply(void 0,o)},"About"),m.a.createElement(g.Link,{to:k.a.contact,className:"normal_font "+u.css.apply(void 0,i)},"Contact")),m.a.createElement("nav",{className:""+this.defineMobileNavStyles()},m.a.createElement("div",{className:""+this.defineMenuStyles()},m.a.createElement(g.Link,{onClick:function(){return e.linkNavToggle(k.a.home)},to:k.a.home,state:{terminalNoShow:!0},className:"normal_font "+Object(u.css)(b.mobileMenuBtn)},"Home"),m.a.createElement(g.Link,{onClick:function(){return e.linkNavToggle(k.a.portfolio)},to:k.a.portfolio,className:"normal_font "+Object(u.css)(b.mobileMenuBtn)},"Portfolio"),m.a.createElement(g.Link,{onClick:function(){return e.linkNavToggle(k.a.blog)},to:k.a.blog,className:"normal_font "+Object(u.css)(b.mobileMenuBtn)},"Blog"),m.a.createElement(g.Link,{onClick:function(){return e.linkNavToggle(k.a.about)},to:k.a.about,className:"normal_font "+Object(u.css)(b.mobileMenuBtn)},"About"),m.a.createElement(g.Link,{onClick:function(){return e.linkNavToggle(k.a.contact)},to:k.a.contact,className:"normal_font "+Object(u.css)(b.mobileMenuBtn)},"Contact")),m.a.createElement("div",{className:""+Object(u.css)(b.mobileMenuOpenerContainer)},m.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:""+Object(u.css)(b.mobileMenuOpener)},"Open menu"))))},t}(d.Component),v="1px solid "+f.l,x=u.StyleSheet.create({container:{background:f.h,color:f.l,dispaly:"flex",flexGrow:1,border:v,flexDirection:"column",height:"37vh",minWidth:"40vw",maxWidth:"600px",maxHeight:"300px",position:"fixed",bottom:0,zIndex:5,"@media screen and (max-width: 600px)":{minWidth:"100vw",transition:"none"}},terminal_open:{right:0},terminal_close:{right:"-200vh",transition:"1.8s linear all",opacity:0,opinterEvents:"none"},terminalTaskbar:{display:"flex",justifyContent:"space-between",alignItems:"stretch",minWidth:"100%",minHeight:"25px",padding:"0 5px",borderBottom:v},terminalTaskbarBtn:{display:"inline-flex",flex:".03",lineHeight:"1.4em",alignItems:"center",cursor:"pointer"},fsIcon:{fontSize:"1.4em"},fsTitle:{fontSize:".8em",letterSpacing:"2px",whiteSpace:"pre"},terminalViewportContainer:{flex:1,flexDirection:"column",justifyContent:"flex-start",overflowY:"auto"},terminalViewport:{width:"100%",height:"auto",padding:"6px",maxHeight:"100%",overflowY:"auto",wordWrap:"break-word",whiteSpace:"pre-wrap"},terminalMsgMe:{marginBottom:"5px",":before":{content:"'<vlad_rdv>: '",color:f.k}},terminalMsgSystem:{marginBottom:"5px",":before":{content:"'[ [SYSTEM] ]: '",color:f.i}},terminalMsgDefault:{marginBottom:"5px",":before":{content:"'<guest>: '",color:f.d}}}),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOnscreen:!0,messages:[{from:"system",txt:"Loading..."},{from:"me",txt:"Hi,I'm glad you made it here. Feel free to look around :)"}]},n.defineTermilalPosition=n.defineTermilalPosition.bind(c()(c()(n))),n.toggleTerminal=n.toggleTerminal.bind(c()(c()(n))),n.defineMsgStyle=n.defineMsgStyle.bind(c()(c()(n))),n.renderMessages=n.renderMessages.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.toggleTerminal=function(){this.setState({isOnscreen:!this.state.isOnscreen})},n.defineTermilalPosition=function(){var e=[x.container,x.terminal_open],t=[x.container,x.terminal_close];return this.state.isOnscreen?u.css.apply(void 0,e):u.css.apply(void 0,t)},n.renderMessages=function(){var e=this;return this.state.messages.map(function(t,n){return m.a.createElement("p",{id:"msg_"+t.from+"_"+n,key:"msg_"+t.from+"_"+n,className:""+e.defineMsgStyle(t.from)},t.txt)})},n.defineMsgStyle=function(e,t){switch(e){case"me":return Object(u.css)(x.terminalMsgMe);case"system":return Object(u.css)(x.terminalMsgSystem);default:return Object(u.css)(x.terminalMsgDefault)}},n.render=function(){var e=this;return m.a.createElement("aside",{className:"terminal "+this.defineTermilalPosition()},m.a.createElement("div",{className:""+Object(u.css)(x.terminalTaskbar)},m.a.createElement("span",{onClick:function(){return e.toggleTerminal()},className:""+Object(u.css)(x.terminalTaskbarBtn,x.fsIcon)},"☒"),m.a.createElement("span",{className:"normal_font "+Object(u.css)(x.terminalTaskbarBtn,x.fsTitle)},"Terminal v0.1.2")),m.a.createElement("div",{className:""+Object(u.css)(x.terminalViewportContainer)},m.a.createElement("div",{className:""+Object(u.css)(x.terminalViewport)},this.renderMessages())))},t}(d.Component),w=u.StyleSheet.create({container:{display:"block",background:f.j,overflow:"hidden",position:"absolute",height:"100vh",width:"100vw",zIndex:-1},path:{willChange:"stroke-dashoffset",animationName:{"0%":{strokeOpacity:.8},"50%":{strokeDashoffset:0,strokeOpacity:1}},animationDuration:"20s",animationIterationCount:"infinite",animationTimingFunction:"ease-in"},delay_10:{animationDelay:"10s"},delay_12:{animationDelay:"8s"},delay_16:{animationDelay:"12s"},delay_20:{animationDelay:"14s"},delay_22:{animationDelay:"18s"},delay_26:{animationDelay:"16s"}}),M=[w.container],N=[w.path],S=function(){return m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:""+u.css.apply(void 0,M),version:"1.1",x:"0",y:"0",viewBox:"0 0 800 600",preserveAspectRatio:"none"},m.a.createElement("defs",null,m.a.createElement("path",{id:"d1",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 500h100l50 100"}),m.a.createElement("path",{id:"c1",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,N.concat([w.delay_20])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.b,d:"M0 500h100l50 100"}),m.a.createElement("path",{id:"d2",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 500H700l-50 100"}),m.a.createElement("path",{id:"c2",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,N.concat([w.delay_12])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.f,d:"M800 500H700l-50 100"}),m.a.createElement("path",{id:"d3",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 100h100L150 0"}),m.a.createElement("path",{id:"c3",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,N.concat([w.delay_16])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.d,d:"M0 100h100L150 0"}),m.a.createElement("path",{id:"d4",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 100H700L650 0"}),m.a.createElement("path",{id:"c4",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,N.concat([w.delay_26])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.k,d:"M800 100H700L650 0"}),m.a.createElement("path",{id:"eLeft",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 150l30 50v200L0 450"}),m.a.createElement("path",{id:"fLeft",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,N.concat([w.delay_22])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.i,d:"M0 150l30 50v200L0 450"}),m.a.createElement("path",{id:"eRight",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 150l-30 50v200l30 50"}),m.a.createElement("path",{id:"fRight",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,N.concat([w.delay_10])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.i,d:"M800 150l-30 50v200l30 50"})),m.a.createElement("g",{fill:"none",fillRule:"evenodd"},m.a.createElement("use",{xlinkHref:"#c1"}),m.a.createElement("use",{xlinkHref:"#d1"}),m.a.createElement("use",{xlinkHref:"#c2"}),m.a.createElement("use",{xlinkHref:"#d2"}),m.a.createElement("use",{xlinkHref:"#c3"}),m.a.createElement("use",{xlinkHref:"#d3"}),m.a.createElement("use",{xlinkHref:"#c4"}),m.a.createElement("use",{xlinkHref:"#d4"}),m.a.createElement("use",{xlinkHref:"#eLeft"}),m.a.createElement("use",{xlinkHref:"#fLeft"}),m.a.createElement("use",{xlinkHref:"#eRight"}),m.a.createElement("use",{xlinkHref:"#fRight"})))},_=[p.root_std],j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n.restrictShowup=n.restrictShowup.bind(c()(c()(n))),n.defineShowupPermission=n.defineShowupPermission.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.restrictShowup=function(){this.setState({showTerminal:!1})},n.defineShowupPermission=function(){var e=this.props.location;return void 0===e||(void 0===e.state||null===e.state||!e.state.terminalNoShow)},n.render=function(){var e=this.props,t=e.children,n=e.location;return m.a.createElement("div",{id:"my_root",className:""+u.css.apply(void 0,_),style:{direction:"ltr"}},m.a.createElement(y,{location:n}),"/"===n.pathname&&m.a.createElement(S,null),t,"/"===n.pathname&&this.defineShowupPermission()&&m.a.createElement(E,{restrictShowup:this.restrictShowup,location:n}))},t}(d.Component);t.a=j},191:function(e,t,n){e.exports=n.p+"static/me-f90ab90c1de87928d38f7d1a1cc35ffb.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-jsx-11f97c0b5bec0eb29874.js.map