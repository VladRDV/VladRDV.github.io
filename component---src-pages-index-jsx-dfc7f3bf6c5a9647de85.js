(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(e,t,n){"use strict";n.r(t);n(188);var o=n(0),a=n.n(o),i=n(95),r=n(185),l=i.StyleSheet.create({main:{flex:1,flexBasis:0,alignSelf:"stretch",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",width:"100%",background:r.j},name:{height:"auto",width:"90%",maxWidth:"460px",textAlign:"center",padding:"12px 0",fontSize:"3.8rem",whiteSpace:"pre-wrap",lineHeight:"1.5em",marginBottom:"20px","@media screen and (max-width: 768px)":{fontSize:"2rem"}}}),s=n(187);t.default=function(e){var t=e.location;return a.a.createElement(s.a,{location:t},a.a.createElement("main",{className:""+Object(i.css)(l.main)},a.a.createElement("p",{className:"normal_font"},"Hello, my name is"),a.a.createElement("h1",{className:"asteroids "+Object(i.css)(l.name)},"Vladimir\nRadovanovich"),a.a.createElement("p",{className:"normal_font"},"Welcome to my online hideout")))}},185:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"h",function(){return a}),n.d(t,"l",function(){return i}),n.d(t,"f",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"k",function(){return c}),n.d(t,"j",function(){return d}),n.d(t,"e",function(){return m}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return f}),n.d(t,"g",function(){return p});var o="#000",a=o,i="#fff",r="#1565c0",l="#d32f2f",s="#308732",c="#ffca28",d="rgba(0,0,0,0)",m="#f57c00",u="#4b0082",f="#222",p="#e0e0e0"},186:function(e,t,n){"use strict";t.a={home:"/",blog:"/blog",about:"/about",contact:"/contact",portfolio:"/portfolio"}},187:function(e,t,n){"use strict";var o,a,i,r=n(8),l=n.n(r),s=n(37),c=n.n(s),d=n(0),m=n.n(d),u=n(95),f=n(185),p=u.StyleSheet.create({root_std:{background:f.h,color:f.l,dispaly:"flex",flexGrow:1,flexDirection:"column",height:"100vh",minWidth:"100vw",position:"relative",zIndex:0,overflowY:"auto"}}),h="@media screen and (max-width: 768px)",g=u.StyleSheet.create({container:(o={justifyContent:"center",alignItems:"stretch",height:"60px"},o[h]={display:"none"},o),bgTrns:{background:f.j},bgBlack:{background:f.a},menuStylerBg:{width:"100%",position:"fixed",top:0,left:0,zIndex:1e3},btn:{display:"flex",backgroundColor:f.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",minWidth:"12.25%",border:"1px solid",textDecoration:"none",color:f.l,borderColor:f.j,transition:".8s ease-in-out all",":hover":{borderColor:f.l}},mobileNav:(a={flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",display:"none",transition:".8s background-color"},a[h]={display:"flex"},a),mobileNav_close:{backgroundColor:f.j},mobileNav_open:{backgroundColor:f.a},mobileMenu:(i={display:"flex",flex:.8,flexDirection:"column",overflowY:"hidden",backgroundColor:f.j,alignItems:"stretch",justifyContent:"space-around",transition:".7s"},i["@media screen and (max-width: 576px) and (orientation: landscape)"]={flexDirection:"row"},i),mobileMenu_close:{height:0,opacity:0},mobileMenu_open:{height:"calc(100vh - 40px)",opacity:1},mobileMenuBtn:{display:"flex",flex:.1,backgroundColor:f.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",textDecoration:"none",border:"1px solid",color:f.l,borderColor:f.j},mobileMenuOpenerContainer:{display:"flex",minHeight:"40px",alignItems:"center",justifyContent:"center"},mobileMenuOpener:{backgroundColor:f.l,alignSelf:"center",borderRadius:"50px",border:"1px solid "+f.a,minWidth:"95px",justifyContent:"center",alignItems:"center",height:"22px",width:"21%"},btn_danger:{":hover":{backgroundColor:f.b}},btn_white:{":hover":{backgroundColor:f.l,color:f.a}},btn_indigo:{":hover":{backgroundColor:f.d}},btn_success:{":hover":{backgroundColor:f.i}},btn_warning:{":hover":{backgroundColor:f.k}},btn_primary:{":hover":{backgroundColor:f.f}},btn_orange:{":hover":{backgroundColor:f.e}}}),b=n(38),k=n(186),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobileNavigatorMode:!1},n.toggleMobileMenu=n.toggleMobileMenu.bind(c()(c()(n))),n.defineMobileNavStyles=n.defineMobileNavStyles.bind(c()(c()(n))),n.defineMenuStyles=n.defineMenuStyles.bind(c()(c()(n))),n.defineNavStyles=n.defineNavStyles.bind(c()(c()(n))),n.linkNavToggle=n.linkNavToggle.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.toggleMobileMenu=function(){this.setState({mobileNavigatorMode:!this.state.mobileNavigatorMode})},n.defineMobileNavStyles=function(){var e=this.state.mobileNavigatorMode,t=[g.mobileNav,g.menuStylerBg,g.mobileNav_open],n=[g.mobileNav,g.menuStylerBg,g.mobileNav_close],o=e?t:n;return u.css.apply(void 0,o)},n.defineMenuStyles=function(){var e=this.state.mobileNavigatorMode,t=[g.mobileMenu,g.mobileMenu_close],n=[g.mobileMenu,g.mobileMenu_open],o=e?n:t;return u.css.apply(void 0,o)},n.defineNavStyles=function(){var e=[g.container,g.menuStylerBg,g.bgTrns],t=[g.container,g.menuStylerBg,g.bgBlack];return"/"===this.props.location.pathname?u.css.apply(void 0,e):u.css.apply(void 0,t)},n.linkNavToggle=function(e){return this.props.location===e?this.toggleMobileMenu():null},n.render=function(){var e=this,t=[g.btn,g.btn_indigo],n=[g.btn,g.btn_primary],o=[g.btn,g.btn_success],a=[g.btn,g.btn_orange],i=[g.btn,g.btn_warning];return m.a.createElement(d.Fragment,null,m.a.createElement("nav",{className:""+this.defineNavStyles()},m.a.createElement(b.Link,{to:k.a.home,state:{terminalNoShow:!0},className:"normal_font "+u.css.apply(void 0,t)},"Home"),m.a.createElement(b.Link,{to:k.a.portfolio,className:"normal_font "+u.css.apply(void 0,n)},"Portfolio"),m.a.createElement(b.Link,{to:k.a.blog,className:"normal_font "+u.css.apply(void 0,o)},"Blog"),m.a.createElement(b.Link,{to:k.a.about,className:"normal_font "+u.css.apply(void 0,a)},"About"),m.a.createElement(b.Link,{to:k.a.contact,className:"normal_font "+u.css.apply(void 0,i)},"Contact")),m.a.createElement("nav",{className:""+this.defineMobileNavStyles()},m.a.createElement("div",{className:""+this.defineMenuStyles()},m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.home)},to:k.a.home,state:{terminalNoShow:!0},className:"normal_font "+Object(u.css)(g.mobileMenuBtn)},"Home"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.portfolio)},to:k.a.portfolio,className:"normal_font "+Object(u.css)(g.mobileMenuBtn)},"Portfolio"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.blog)},to:k.a.blog,className:"normal_font "+Object(u.css)(g.mobileMenuBtn)},"Blog"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.about)},to:k.a.about,className:"normal_font "+Object(u.css)(g.mobileMenuBtn)},"About"),m.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(k.a.contact)},to:k.a.contact,className:"normal_font "+Object(u.css)(g.mobileMenuBtn)},"Contact")),m.a.createElement("div",{className:""+Object(u.css)(g.mobileMenuOpenerContainer)},m.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:""+Object(u.css)(g.mobileMenuOpener)},"Open menu"))))},t}(d.Component),v="1px solid "+f.l,x=u.StyleSheet.create({container:{background:f.h,color:f.l,dispaly:"flex",flexGrow:1,border:v,flexDirection:"column",height:"37vh",minWidth:"40vw",maxWidth:"600px",maxHeight:"300px",position:"fixed",bottom:0,zIndex:5,"@media screen and (max-width: 600px)":{minWidth:"100vw",transition:"none"}},terminal_open:{right:0},terminal_close:{right:"-200vh",transition:"1.8s linear all",opacity:0,opinterEvents:"none"},terminalTaskbar:{display:"flex",justifyContent:"space-between",alignItems:"stretch",minWidth:"100%",minHeight:"25px",padding:"0 5px",borderBottom:v},terminalTaskbarBtn:{display:"inline-flex",flex:".03",lineHeight:"1.4em",alignItems:"center",cursor:"pointer"},fsIcon:{fontSize:"1.4em"},fsTitle:{fontSize:".8em",letterSpacing:"2px",whiteSpace:"pre"},terminalViewportContainer:{flex:1,flexDirection:"column",justifyContent:"flex-start",overflowY:"auto"},terminalViewport:{width:"100%",height:"auto",padding:"6px",maxHeight:"100%",overflowY:"auto",wordWrap:"break-word",whiteSpace:"pre-wrap"},terminalMsgMe:{marginBottom:"5px",":before":{content:"'<vlad_rdv>: '",color:f.k}},terminalMsgSystem:{marginBottom:"5px",":before":{content:"'[ [SYSTEM] ]: '",color:f.i}},terminalMsgDefault:{marginBottom:"5px",":before":{content:"'<guest>: '",color:f.d}}}),M=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOnscreen:!0,messages:[{from:"system",txt:"Loading..."},{from:"me",txt:"Hi,I'm glad you made it here. Feel free to look around :)"}]},n.defineTermilalPosition=n.defineTermilalPosition.bind(c()(c()(n))),n.toggleTerminal=n.toggleTerminal.bind(c()(c()(n))),n.defineMsgStyle=n.defineMsgStyle.bind(c()(c()(n))),n.renderMessages=n.renderMessages.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.toggleTerminal=function(){this.setState({isOnscreen:!this.state.isOnscreen})},n.defineTermilalPosition=function(){var e=[x.container,x.terminal_open],t=[x.container,x.terminal_close];return this.state.isOnscreen?u.css.apply(void 0,e):u.css.apply(void 0,t)},n.renderMessages=function(){var e=this;return this.state.messages.map(function(t,n){return m.a.createElement("p",{id:"msg_"+t.from+"_"+n,key:"msg_"+t.from+"_"+n,className:""+e.defineMsgStyle(t.from)},t.txt)})},n.defineMsgStyle=function(e,t){switch(e){case"me":return Object(u.css)(x.terminalMsgMe);case"system":return Object(u.css)(x.terminalMsgSystem);default:return Object(u.css)(x.terminalMsgDefault)}},n.render=function(){var e=this;return m.a.createElement("aside",{className:"terminal "+this.defineTermilalPosition()},m.a.createElement("div",{className:""+Object(u.css)(x.terminalTaskbar)},m.a.createElement("span",{onClick:function(){return e.toggleTerminal()},className:""+Object(u.css)(x.terminalTaskbarBtn,x.fsIcon)},"☒"),m.a.createElement("span",{className:"normal_font "+Object(u.css)(x.terminalTaskbarBtn,x.fsTitle)},"Terminal v0.1.2")),m.a.createElement("div",{className:""+Object(u.css)(x.terminalViewportContainer)},m.a.createElement("div",{className:""+Object(u.css)(x.terminalViewport)},this.renderMessages())))},t}(d.Component),N=u.StyleSheet.create({container:{display:"block",background:f.j,overflow:"hidden",position:"absolute",height:"100vh",width:"100vw",zIndex:-1},path:{willChange:"stroke-dashoffset",animationName:{"0%":{strokeOpacity:.8},"50%":{strokeDashoffset:0,strokeOpacity:1}},animationDuration:"20s",animationIterationCount:"infinite",animationTimingFunction:"ease-in"},delay_10:{animationDelay:"10s"},delay_12:{animationDelay:"8s"},delay_16:{animationDelay:"12s"},delay_20:{animationDelay:"14s"},delay_22:{animationDelay:"18s"},delay_26:{animationDelay:"16s"}}),w=[N.container],S=[N.path],E=function(){return m.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:""+u.css.apply(void 0,w),version:"1.1",x:"0",y:"0",viewBox:"0 0 800 600",preserveAspectRatio:"none"},m.a.createElement("defs",null,m.a.createElement("path",{id:"d1",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 500h100l50 100"}),m.a.createElement("path",{id:"c1",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,S.concat([N.delay_20])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.b,d:"M0 500h100l50 100"}),m.a.createElement("path",{id:"d2",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 500H700l-50 100"}),m.a.createElement("path",{id:"c2",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,S.concat([N.delay_12])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.f,d:"M800 500H700l-50 100"}),m.a.createElement("path",{id:"d3",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 100h100L150 0"}),m.a.createElement("path",{id:"c3",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,S.concat([N.delay_16])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.d,d:"M0 100h100L150 0"}),m.a.createElement("path",{id:"d4",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 100H700L650 0"}),m.a.createElement("path",{id:"c4",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,S.concat([N.delay_26])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.k,d:"M800 100H700L650 0"}),m.a.createElement("path",{id:"eLeft",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 150l30 50v200L0 450"}),m.a.createElement("path",{id:"fLeft",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,S.concat([N.delay_22])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.i,d:"M0 150l30 50v200L0 450"}),m.a.createElement("path",{id:"eRight",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 150l-30 50v200l30 50"}),m.a.createElement("path",{id:"fRight",fill:"none",strokeWidth:2,className:""+u.css.apply(void 0,S.concat([N.delay_10])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:f.i,d:"M800 150l-30 50v200l30 50"})),m.a.createElement("g",{fill:"none",fillRule:"evenodd"},m.a.createElement("use",{xlinkHref:"#c1"}),m.a.createElement("use",{xlinkHref:"#d1"}),m.a.createElement("use",{xlinkHref:"#c2"}),m.a.createElement("use",{xlinkHref:"#d2"}),m.a.createElement("use",{xlinkHref:"#c3"}),m.a.createElement("use",{xlinkHref:"#d3"}),m.a.createElement("use",{xlinkHref:"#c4"}),m.a.createElement("use",{xlinkHref:"#d4"}),m.a.createElement("use",{xlinkHref:"#eLeft"}),m.a.createElement("use",{xlinkHref:"#fLeft"}),m.a.createElement("use",{xlinkHref:"#eRight"}),m.a.createElement("use",{xlinkHref:"#fRight"})))},_=[p.root_std],C=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n.restrictShowup=n.restrictShowup.bind(c()(c()(n))),n.defineShowupPermission=n.defineShowupPermission.bind(c()(c()(n))),n}l()(t,e);var n=t.prototype;return n.restrictShowup=function(){this.setState({showTerminal:!1})},n.defineShowupPermission=function(){var e=this.props.location;return void 0===e||(void 0===e.state||!e.state.terminalNoShow)},n.render=function(){var e=this.props,t=e.children,n=e.location;return m.a.createElement("div",{id:"my_root",className:""+u.css.apply(void 0,_),style:{direction:"ltr"}},m.a.createElement(y,{location:n}),"/"===n.pathname&&m.a.createElement(E,null),t,"/"===n.pathname&&this.defineShowupPermission()&&m.a.createElement(M,{restrictShowup:this.restrictShowup,location:n}))},t}(d.Component);t.a=C},188:function(e,t,n){var o=n(28).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(19)&&o(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-jsx-dfc7f3bf6c5a9647de85.js.map