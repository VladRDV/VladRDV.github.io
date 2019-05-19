(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(95),i=n(187),s=n(185),l=a.StyleSheet.create({main:{alignSelf:"stretch",flexDirection:"row",alignItems:"stretch",justifyContent:"center",paddingTop:"70px",minHeight:"100vh",height:"100%",width:"100%",background:s.a},container:{width:"60%",height:"100%",display:"grid",color:s.l,gridTemplateColumns:"repeat(4, minmax(25%, 220px))",gridAutoRows:"repeat(5, minmax(20%, 220px))",gridGap:"10px",justifyContent:"space-evenly",alignItems:"stretch","@media screen and (max-width: 900px)":{width:"90%"}},currently_learning:{gridRow:"1/3",gridColumn:"1/3",flexDirection:"column",minHeight:"220px",alignItems:"stretch",justifyContent:"space-around",padding:"10px","@media screen and (max-width: 600px)":{gridColumn:"1/5"}},border:{backgroundColor:s.a,border:"1px solid "+s.l},part_title:{marginBottom:"10px",minHeight:"19px"},projectsContainer:{gridRow:"3/8",gridColumn:"1/5",padding:"10px","@media screen and (max-width: 600px)":{gridRow:"5/8"}},projectsTitle:{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"30px",width:"100%"},projects:{display:"grid",gridTemplateColumns:"repeat(2, minmax(220px, 50%))",gridAutoRows:"repeat(2, minmax(220px, 50%))",gridGap:"10px",justifyContent:"ceenter",alignItems:"stretch",height:"auto",width:"100%","@media screen and (max-width: 600px)":{gridTemplateColumns:"1fr"}},upperTxtFormat:{whiteSpace:"pre-wrap",lineHeight:"1.4em",fontSize:".9rem"},skills:{gridRow:"1/3",gridColumn:"3/5",padding:"10px",minHeight:"220px",position:"relative",overflow:"hidden","@media screen and (max-width: 600px)":{minHeight:"220px",gridColumn:"1/5",gridRow:"3/5"}},skills_list:{width:"100%",height:"auto",paddingBottom:"20px"},scrollBarHider:{position:"absolute",bottom:"-10px",left:"10px",display:"block",overflowY:"scroll",overflowX:"hidden",height:"100%",paddingRight:"10px",width:"calc(100% + 12px)","@media screen and (max-width: 700px)":{paddingRight:"20px"}},gradient:{position:"absolute",bottom:0,left:0,zIndex:"1020",height:"20px",width:"100%",background:"linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 10%,rgba(0,0,0,0.65) 82%,rgba(0,0,0,1) 99%)"}}),c=(n(188),n(39),a.StyleSheet.create({project:{minHeight:"220px",color:s.a,padding:"10px 0 10px 10px",backgroundColor:s.l,display:"flex",flex:1,flexDirection:"column",alignItems:"stretch"},ptoject_name:{fontSize:".9rem",textTransform:"uppercase",flex:.2},project_desc:{flex:.3,fontSize:".9rem"},other_contributors:{fontSize:".8rem",flex:.3,flexWrap:"wrap"},bottom:{flex:.2,justifyContent:"flex-end",paddingRight:0,minHeight:"37px"},alignCenter:{display:"flex",alignItems:"center",paddingRight:"10px"},divider:{maxHeight:0,borderBottom:"1px solid #000",borderTop:"none",borderLeft:"none",borderRight:"none",backgroundColor:s.j},divider_1:{width:"50%",marginLeft:"50%"},divider_2:{width:"70%",marginLeft:"30%"},divider_3:{width:"50%",marginLeft:"50%"},to_project:{display:"inline-flex",fontSize:"1rem",backgroundColor:s.a,textDecoration:"none",justifyContent:"flex-start",color:s.l,flex:.2,padding:"8px 11px",":hover":{backgroundColor:s.l,color:s.a,transition:"1s ease-in-out all"}},contributor:{marginLeft:"3px",color:s.a,fontStyle:"italic",whiteSpace:"pre-wrap"}})),d=function(e,t){return e.map(function(e,n,r){return o.a.createElement("a",{key:t.replace(/\s/g,"_")+"_other_contributar_"+n,href:e.href,className:""+Object(a.css)(c.contributor),target:"_blank",rel:"noopener noreferrer"},e.name+(n<r.length-1?",":""))})},u=function(e){var t=e.title,n=e.href,r=e.desc,i=e.contr;return o.a.createElement("li",{className:""+Object(a.css)(c.project)},o.a.createElement("h6",{className:""+Object(a.css)(c.alignCenter,c.ptoject_name)},t),o.a.createElement("hr",{className:""+Object(a.css)(c.divider,c.divider_1)}),o.a.createElement("p",{className:""+Object(a.css)(c.alignCenter,c.project_desc)},r),o.a.createElement("hr",{className:""+Object(a.css)(c.divider,c.divider_2)}),o.a.createElement("p",{className:""+Object(a.css)(c.alignCenter,c.other_contributors)},o.a.createElement("span",null,"Other contributors:"),d(i,t)),o.a.createElement("hr",{className:""+Object(a.css)(c.divider,c.divider_3)}),o.a.createElement("div",{className:""+Object(a.css)(c.alignCenter,c.bottom)},""!==n&&o.a.createElement("a",{href:n,className:""+Object(a.css)(c.alignCenter,c.to_project),target:"_blank",rel:"noopener noreferrer"},"Visit")))},p=n(192),m=n.n(p),f=(n(190),n(194)),h=n.n(f),g=n(8),b=n.n(g),x=n(37),y=n.n(x),v=a.StyleSheet.create({skill:{backgroundColor:s.c,position:"relative",height:"24px",marginBottom:"8px",display:"flex",alignItems:"center",fontSize:".75rem",fontWeight:"bold",justifyContent:"space-between",width:"calc(100% - 10px)",padding:"0 55px 0 0",borderRadiusTopRight:"150px"},skill_txt:{lineHeight:"1rem",verticalAlign:"middle",zIndex:100},skill_txt_bg:{padding:"0 5px",minWidth:"22%",backgroundColor:"rgba(0,0,0,.14)",height:"100%",alignItems:"center",display:"flex"},skill_grade:{color:s.j,animationFillMode:"forwards",animationName:[{"0%":{color:s.c},"100%":{color:s.l}}],willChange:"color",animationDuration:"2s"},square:{position:"absolute",zIndex:"150",bottom:"-8px",width:"2px",height:"150%",transform:"rotate(-30deg)",backgroundColor:s.a},square_offset1:{right:"25px",width:"4px"},square_offset2:{right:"15px",width:"4px"},square_offset3:{right:"6px",width:"4px"},trapezoidBottom:{display:"block",borderBottom:"7px solid "+s.a,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",height:0,width:"50px",position:"absolute",zIndex:"150",bottom:"-3px",right:"-7px"},trapezoidTop:{display:"block",borderTop:"7px solid "+s.a,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",height:0,width:"70px",position:"absolute",zIndex:"150",top:"-4px",right:"-7px"},filler:{position:"absolute",zIndex:0,height:"100%",transition:"1s linear width",top:0,left:0}}),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={grade_line_width:"1%",grade_visible:!1,timeout_id:""},n.setGrade=n.setGrade.bind(y()(y()(n))),n}b()(t,e);var n=t.prototype;return n.setGrade=function(){var e=this.props.grade;this.setState({grade_line_width:e,grade_visible:!0})},n.componentDidMount=function(){var e=h()(m.a.mark(function e(){var t,n,r=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.num,n=setTimeout(function(){r.setGrade()},250*t),e.next=4,this.setState({timeout_id:n});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.componentWillUnmount=function(){clearTimeout(this.state.timeout_id)},n.render=function(){var e=this.props,t=e.num,n=e.grade,r=e.color,i=e.skill,s=this.state,l=s.grade_line_width;s.grade_visible;return o.a.createElement("li",{className:""+Object(a.css)(v.skill)},o.a.createElement("span",{className:""+Object(a.css)(v.skill_txt,v.skill_txt_bg)},i),o.a.createElement("span",{className:""+Object(a.css)(v.skill_txt,v.skill_grade),style:{animationDelay:.3*t+"s"}},n),o.a.createElement("span",{className:""+Object(a.css)(v.square,v.square_offset1)}),o.a.createElement("span",{className:""+Object(a.css)(v.square,v.square_offset2)}),o.a.createElement("span",{className:""+Object(a.css)(v.square,v.square_offset3)}),o.a.createElement("span",{className:""+Object(a.css)(v.trapezoidBottom)}),o.a.createElement("span",{className:""+Object(a.css)(v.trapezoidTop)}),o.a.createElement("span",{className:""+Object(a.css)(v.filler),style:{backgroundColor:r,width:l}}))},t}(r.Component),w=a.StyleSheet.create({lang:{backgroundColor:s.c,position:"relative",height:"24px",marginBottom:"8px",display:"flex",alignItems:"center",fontSize:".75rem",fontWeight:"bold",justifyContent:"space-between",width:"calc(100% - 10px)",padding:"0 55px 0 0",borderRadiusTopRight:"150px"},lang_txt:{lineHeight:"1rem",verticalAlign:"middle",zIndex:100},lang_txt_bg:{padding:"0 5px",minWidth:"22%",backgroundColor:"rgba(0,0,0,.14)",height:"100%",alignItems:"center",display:"flex"},square:{position:"absolute",zIndex:"150",bottom:"-8px",width:"2px",height:"150%",transform:"rotate(-30deg)",backgroundColor:s.a},square_offset1:{right:"25px",width:"4px"},square_offset2:{right:"15px",width:"4px"},square_offset3:{right:"6px",width:"4px"},trapezoidBottom:{display:"block",borderBottom:"7px solid "+s.a,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",height:0,width:"50px",position:"absolute",zIndex:"150",bottom:"-3px",right:"-7px"},trapezoidTop:{display:"block",borderTop:"7px solid "+s.a,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",height:0,width:"70px",position:"absolute",zIndex:"150",top:"-4px",right:"-7px"},filler:{position:"absolute",zIndex:0,height:"100%",transition:"1s linear width",top:0,left:0}}),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={grade_line_width:"1%",grade_visible:!1},n.setGrade=n.setGrade.bind(y()(y()(n))),n}b()(t,e);var n=t.prototype;return n.setGrade=function(){var e=this.props.grade;this.setState({grade_line_width:e,grade_visible:!0})},n.render=function(){var e=this.props,t=e.grade,n=e.color,r=e.lang;return o.a.createElement("li",{className:""+Object(a.css)(w.lang)},o.a.createElement("span",{className:""+Object(a.css)(w.lang_txt,w.lang_txt_bg)},r),o.a.createElement("span",{className:""+Object(a.css)(w.lang_txt)},t),o.a.createElement("span",{className:""+Object(a.css)(w.square,w.square_offset1)}),o.a.createElement("span",{className:""+Object(a.css)(w.square,w.square_offset2)}),o.a.createElement("span",{className:""+Object(a.css)(w.square,w.square_offset3)}),o.a.createElement("span",{className:""+Object(a.css)(w.trapezoidBottom)}),o.a.createElement("span",{className:""+Object(a.css)(w.trapezoidTop)}),o.a.createElement("span",{className:""+Object(a.css)(w.filler),style:{backgroundColor:n,width:"100%"}}))},t}(r.Component);n.d(t,"query",function(){return O});t.default=function(e){var t=e.location,n=e.data.allJson.edges[0].node;return o.a.createElement(i.a,{location:t},o.a.createElement("main",{className:Object(a.css)(l.main)+" normal_font"},o.a.createElement("div",{className:""+Object(a.css)(l.container)},o.a.createElement("div",{className:""+Object(a.css)(l.currently_learning,l.border)},o.a.createElement("h3",{className:""+Object(a.css)(l.part_title)},"Currently learning"),o.a.createElement("p",{className:""+Object(a.css)(l.upperTxtFormat)},n.currently_learning)),o.a.createElement("div",{className:""+Object(a.css)(l.skills,l.border)},o.a.createElement("div",{className:""+Object(a.css)(l.scrollBarHider)},o.a.createElement("h3",{className:""+Object(a.css)(l.part_title)},"My skill list"),o.a.createElement("ul",{className:""+Object(a.css)(l.skills_list,l.upperTxtFormat)},E(n.skills.programmer_skills.set)),o.a.createElement("h3",{className:""+Object(a.css)(l.part_title)},"Natural languages"),o.a.createElement("ul",{className:""+Object(a.css)(l.skills_list,l.upperTxtFormat)},j(n.skills.human_languages.set))),o.a.createElement("div",{className:""+Object(a.css)(l.gradient)})),o.a.createElement("div",{className:""+Object(a.css)(l.projectsContainer,l.border)},o.a.createElement("h3",{className:""+Object(a.css)(l.projectsTitle,l.part_title)},"Projects I've worked on"),o.a.createElement("ul",{className:""+Object(a.css)(l.projects)},N(n.projects))))))};var E=function(e){return e.map(function(e,t){return o.a.createElement(k,{key:"SkillBar-"+t,num:t,grade:e.grade,color:e.color,skill:e.skill})})},j=function(e){return e.map(function(e,t){return o.a.createElement(_,{key:"SkillBar-"+t,grade:e.grade,color:e.color,lang:e.lang})})},N=function(e){return e.map(function(e,t){return o.a.createElement(u,{title:e.title,contr:e.other_contributors,desc:e.desc,href:e.href,key:"Project-"+t})})},O="4228445480"},185:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"h",function(){return o}),n.d(t,"l",function(){return a}),n.d(t,"f",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"i",function(){return l}),n.d(t,"k",function(){return c}),n.d(t,"j",function(){return d}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return m}),n.d(t,"g",function(){return f});var r="#000",o=r,a="#fff",i="#1565c0",s="#d32f2f",l="#308732",c="#ffca28",d="rgba(0,0,0,0)",u="#f57c00",p="#4b0082",m="#222",f="#e0e0e0"},186:function(e,t,n){"use strict";t.a={home:"/",blog:"/blog",about:"/about",contact:"/contact",portfolio:"/portfolio"}},187:function(e,t,n){"use strict";var r,o,a,i=n(8),s=n.n(i),l=n(37),c=n.n(l),d=n(0),u=n.n(d),p=n(95),m=n(185),f=p.StyleSheet.create({root_std:{background:m.h,color:m.l,dispaly:"flex",flexGrow:1,flexDirection:"column",height:"100vh",minWidth:"100vw",position:"relative",zIndex:0,overflowY:"auto"}}),h="@media screen and (max-width: 768px)",g=p.StyleSheet.create({container:(r={justifyContent:"center",alignItems:"stretch",height:"60px"},r[h]={display:"none"},r),bgTrns:{background:m.j},bgBlack:{background:m.a},menuStylerBg:{width:"100%",position:"fixed",top:0,left:0,zIndex:1e3},btn:{display:"flex",backgroundColor:m.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",minWidth:"12.25%",border:"1px solid",textDecoration:"none",color:m.l,borderColor:m.j,transition:".8s ease-in-out all",":hover":{borderColor:m.l}},mobileNav:(o={flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",display:"none",transition:".8s background-color"},o[h]={display:"flex"},o),mobileNav_close:{backgroundColor:m.j},mobileNav_open:{backgroundColor:m.a},mobileMenu:(a={display:"flex",flex:.8,flexDirection:"column",overflowY:"hidden",backgroundColor:m.j,alignItems:"stretch",justifyContent:"space-around",transition:".7s"},a["@media screen and (max-width: 576px) and (orientation: landscape)"]={flexDirection:"row"},a),mobileMenu_close:{height:0,opacity:0},mobileMenu_open:{height:"calc(100vh - 40px)",opacity:1},mobileMenuBtn:{display:"flex",flex:.1,backgroundColor:m.j,cursor:"pointer",fontSize:"1.1rem",fontWeight:"400",justifyContent:"center",alignItems:"center",textDecoration:"none",border:"1px solid",color:m.l,borderColor:m.j},mobileMenuOpenerContainer:{display:"flex",minHeight:"40px",alignItems:"center",justifyContent:"center"},mobileMenuOpener:{backgroundColor:m.l,alignSelf:"center",borderRadius:"50px",border:"1px solid "+m.a,minWidth:"95px",justifyContent:"center",alignItems:"center",height:"22px",width:"21%"},btn_danger:{":hover":{backgroundColor:m.b}},btn_white:{":hover":{backgroundColor:m.l,color:m.a}},btn_indigo:{":hover":{backgroundColor:m.d}},btn_success:{":hover":{backgroundColor:m.i}},btn_warning:{":hover":{backgroundColor:m.k}},btn_primary:{":hover":{backgroundColor:m.f}},btn_orange:{":hover":{backgroundColor:m.e}}}),b=n(38),x=n(186),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobileNavigatorMode:!1},n.toggleMobileMenu=n.toggleMobileMenu.bind(c()(c()(n))),n.defineMobileNavStyles=n.defineMobileNavStyles.bind(c()(c()(n))),n.defineMenuStyles=n.defineMenuStyles.bind(c()(c()(n))),n.defineNavStyles=n.defineNavStyles.bind(c()(c()(n))),n.linkNavToggle=n.linkNavToggle.bind(c()(c()(n))),n}s()(t,e);var n=t.prototype;return n.toggleMobileMenu=function(){this.setState({mobileNavigatorMode:!this.state.mobileNavigatorMode})},n.defineMobileNavStyles=function(){var e=this.state.mobileNavigatorMode,t=[g.mobileNav,g.menuStylerBg,g.mobileNav_open],n=[g.mobileNav,g.menuStylerBg,g.mobileNav_close],r=e?t:n;return p.css.apply(void 0,r)},n.defineMenuStyles=function(){var e=this.state.mobileNavigatorMode,t=[g.mobileMenu,g.mobileMenu_close],n=[g.mobileMenu,g.mobileMenu_open],r=e?n:t;return p.css.apply(void 0,r)},n.defineNavStyles=function(){var e=[g.container,g.menuStylerBg,g.bgTrns],t=[g.container,g.menuStylerBg,g.bgBlack];return"/"===this.props.location.pathname?p.css.apply(void 0,e):p.css.apply(void 0,t)},n.linkNavToggle=function(e){return this.props.location===e?this.toggleMobileMenu():null},n.render=function(){var e=this,t=[g.btn,g.btn_indigo],n=[g.btn,g.btn_primary],r=[g.btn,g.btn_success],o=[g.btn,g.btn_orange],a=[g.btn,g.btn_warning];return u.a.createElement(d.Fragment,null,u.a.createElement("nav",{className:""+this.defineNavStyles()},u.a.createElement(b.Link,{to:x.a.home,state:{terminalNoShow:!0},className:"normal_font "+p.css.apply(void 0,t)},"Home"),u.a.createElement(b.Link,{to:x.a.portfolio,className:"normal_font "+p.css.apply(void 0,n)},"Portfolio"),u.a.createElement(b.Link,{to:x.a.blog,className:"normal_font "+p.css.apply(void 0,r)},"Blog"),u.a.createElement(b.Link,{to:x.a.about,className:"normal_font "+p.css.apply(void 0,o)},"About"),u.a.createElement(b.Link,{to:x.a.contact,className:"normal_font "+p.css.apply(void 0,a)},"Contact")),u.a.createElement("nav",{className:""+this.defineMobileNavStyles()},u.a.createElement("div",{className:""+this.defineMenuStyles()},u.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(x.a.home)},to:x.a.home,state:{terminalNoShow:!0},className:"normal_font "+Object(p.css)(g.mobileMenuBtn)},"Home"),u.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(x.a.portfolio)},to:x.a.portfolio,className:"normal_font "+Object(p.css)(g.mobileMenuBtn)},"Portfolio"),u.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(x.a.blog)},to:x.a.blog,className:"normal_font "+Object(p.css)(g.mobileMenuBtn)},"Blog"),u.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(x.a.about)},to:x.a.about,className:"normal_font "+Object(p.css)(g.mobileMenuBtn)},"About"),u.a.createElement(b.Link,{onClick:function(){return e.linkNavToggle(x.a.contact)},to:x.a.contact,className:"normal_font "+Object(p.css)(g.mobileMenuBtn)},"Contact")),u.a.createElement("div",{className:""+Object(p.css)(g.mobileMenuOpenerContainer)},u.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:""+Object(p.css)(g.mobileMenuOpener)},"Open menu"))))},t}(d.Component),v="1px solid "+m.l,k=p.StyleSheet.create({container:{background:m.h,color:m.l,dispaly:"flex",flexGrow:1,border:v,flexDirection:"column",height:"37vh",minWidth:"40vw",maxWidth:"600px",maxHeight:"300px",position:"fixed",bottom:0,zIndex:5,"@media screen and (max-width: 600px)":{minWidth:"100vw",transition:"none"}},terminal_open:{right:0},terminal_close:{right:"-200vh",transition:"1.8s linear all",opacity:0,opinterEvents:"none"},terminalTaskbar:{display:"flex",justifyContent:"space-between",alignItems:"stretch",minWidth:"100%",minHeight:"25px",padding:"0 5px",borderBottom:v},terminalTaskbarBtn:{display:"inline-flex",flex:".03",lineHeight:"1.4em",alignItems:"center",cursor:"pointer"},fsIcon:{fontSize:"1.4em"},fsTitle:{fontSize:".8em",letterSpacing:"2px",whiteSpace:"pre"},terminalViewportContainer:{flex:1,flexDirection:"column",justifyContent:"flex-start",overflowY:"auto"},terminalViewport:{width:"100%",height:"auto",padding:"6px",maxHeight:"100%",overflowY:"auto",wordWrap:"break-word",whiteSpace:"pre-wrap"},terminalMsgMe:{marginBottom:"5px",":before":{content:"'<vlad_rdv>: '",color:m.k}},terminalMsgSystem:{marginBottom:"5px",":before":{content:"'[ [SYSTEM] ]: '",color:m.i}},terminalMsgDefault:{marginBottom:"5px",":before":{content:"'<guest>: '",color:m.d}}}),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOnscreen:!0,messages:[{from:"system",txt:"Loading..."},{from:"me",txt:"Hi,I'm glad you made it here. Feel free to look around :)"}]},n.defineTermilalPosition=n.defineTermilalPosition.bind(c()(c()(n))),n.toggleTerminal=n.toggleTerminal.bind(c()(c()(n))),n.defineMsgStyle=n.defineMsgStyle.bind(c()(c()(n))),n.renderMessages=n.renderMessages.bind(c()(c()(n))),n}s()(t,e);var n=t.prototype;return n.toggleTerminal=function(){this.setState({isOnscreen:!this.state.isOnscreen})},n.defineTermilalPosition=function(){var e=[k.container,k.terminal_open],t=[k.container,k.terminal_close];return this.state.isOnscreen?p.css.apply(void 0,e):p.css.apply(void 0,t)},n.renderMessages=function(){var e=this;return this.state.messages.map(function(t,n){return u.a.createElement("p",{id:"msg_"+t.from+"_"+n,key:"msg_"+t.from+"_"+n,className:""+e.defineMsgStyle(t.from)},t.txt)})},n.defineMsgStyle=function(e,t){switch(e){case"me":return Object(p.css)(k.terminalMsgMe);case"system":return Object(p.css)(k.terminalMsgSystem);default:return Object(p.css)(k.terminalMsgDefault)}},n.render=function(){var e=this;return u.a.createElement("aside",{className:"terminal "+this.defineTermilalPosition()},u.a.createElement("div",{className:""+Object(p.css)(k.terminalTaskbar)},u.a.createElement("span",{onClick:function(){return e.toggleTerminal()},className:""+Object(p.css)(k.terminalTaskbarBtn,k.fsIcon)},"☒"),u.a.createElement("span",{className:"normal_font "+Object(p.css)(k.terminalTaskbarBtn,k.fsTitle)},"Terminal v0.1.2")),u.a.createElement("div",{className:""+Object(p.css)(k.terminalViewportContainer)},u.a.createElement("div",{className:""+Object(p.css)(k.terminalViewport)},this.renderMessages())))},t}(d.Component),_=p.StyleSheet.create({container:{display:"block",background:m.j,overflow:"hidden",position:"absolute",height:"100vh",width:"100vw",zIndex:-1},path:{willChange:"stroke-dashoffset",animationName:{"0%":{strokeOpacity:.8},"50%":{strokeDashoffset:0,strokeOpacity:1}},animationDuration:"20s",animationIterationCount:"infinite",animationTimingFunction:"ease-in"},delay_10:{animationDelay:"10s"},delay_12:{animationDelay:"8s"},delay_16:{animationDelay:"12s"},delay_20:{animationDelay:"14s"},delay_22:{animationDelay:"18s"},delay_26:{animationDelay:"16s"}}),E=[_.container],j=[_.path],N=function(){return u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:""+p.css.apply(void 0,E),version:"1.1",x:"0",y:"0",viewBox:"0 0 800 600",preserveAspectRatio:"none"},u.a.createElement("defs",null,u.a.createElement("path",{id:"d1",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 500h100l50 100"}),u.a.createElement("path",{id:"c1",fill:"none",strokeWidth:2,className:""+p.css.apply(void 0,j.concat([_.delay_20])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:m.b,d:"M0 500h100l50 100"}),u.a.createElement("path",{id:"d2",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 500H700l-50 100"}),u.a.createElement("path",{id:"c2",fill:"none",strokeWidth:2,className:""+p.css.apply(void 0,j.concat([_.delay_12])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:m.f,d:"M800 500H700l-50 100"}),u.a.createElement("path",{id:"d3",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 100h100L150 0"}),u.a.createElement("path",{id:"c3",fill:"none",strokeWidth:2,className:""+p.css.apply(void 0,j.concat([_.delay_16])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:m.d,d:"M0 100h100L150 0"}),u.a.createElement("path",{id:"d4",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 100H700L650 0"}),u.a.createElement("path",{id:"c4",fill:"none",strokeWidth:2,className:""+p.css.apply(void 0,j.concat([_.delay_26])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:m.k,d:"M800 100H700L650 0"}),u.a.createElement("path",{id:"eLeft",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M0 150l30 50v200L0 450"}),u.a.createElement("path",{id:"fLeft",fill:"none",strokeWidth:2,className:""+p.css.apply(void 0,j.concat([_.delay_22])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:m.i,d:"M0 150l30 50v200L0 450"}),u.a.createElement("path",{id:"eRight",fill:"none",strokeWidth:2,strokeOpacity:.4,stroke:"#222",d:"M800 150l-30 50v200l30 50"}),u.a.createElement("path",{id:"fRight",fill:"none",strokeWidth:2,className:""+p.css.apply(void 0,j.concat([_.delay_10])),fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:1,strokeDasharray:"1200 1200",strokeDashoffset:3e3,stroke:m.i,d:"M800 150l-30 50v200l30 50"})),u.a.createElement("g",{fill:"none",fillRule:"evenodd"},u.a.createElement("use",{xlinkHref:"#c1"}),u.a.createElement("use",{xlinkHref:"#d1"}),u.a.createElement("use",{xlinkHref:"#c2"}),u.a.createElement("use",{xlinkHref:"#d2"}),u.a.createElement("use",{xlinkHref:"#c3"}),u.a.createElement("use",{xlinkHref:"#d3"}),u.a.createElement("use",{xlinkHref:"#c4"}),u.a.createElement("use",{xlinkHref:"#d4"}),u.a.createElement("use",{xlinkHref:"#eLeft"}),u.a.createElement("use",{xlinkHref:"#fLeft"}),u.a.createElement("use",{xlinkHref:"#eRight"}),u.a.createElement("use",{xlinkHref:"#fRight"})))},O=[f.root_std],S=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n.restrictShowup=n.restrictShowup.bind(c()(c()(n))),n.defineShowupPermission=n.defineShowupPermission.bind(c()(c()(n))),n}s()(t,e);var n=t.prototype;return n.restrictShowup=function(){this.setState({showTerminal:!1})},n.defineShowupPermission=function(){var e=this.props.location;return void 0===e||(void 0===e.state||null===e.state||!e.state.terminalNoShow)},n.render=function(){var e=this.props,t=e.children,n=e.location;return u.a.createElement("div",{id:"my_root",className:""+p.css.apply(void 0,O),style:{direction:"ltr"}},u.a.createElement(y,{location:n}),"/"===n.pathname&&u.a.createElement(N,null),t,"/"===n.pathname&&this.defineShowupPermission()&&u.a.createElement(w,{restrictShowup:this.restrictShowup,location:n}))},t}(d.Component);t.a=S},188:function(e,t,n){var r=n(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(19)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},190:function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",c="object"==typeof e,d=t.regeneratorRuntime;if(d)c&&(e.exports=d);else{(d=t.regeneratorRuntime=c?e.exports:{}).wrap=v;var u="suspendedStart",p="suspendedYield",m="executing",f="completed",h={},g={};g[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(L([])));x&&x!==r&&o.call(x,i)&&(g=x);var y=E.prototype=w.prototype=Object.create(g);_.prototype=y.constructor=E,E.constructor=_,E[l]=_.displayName="GeneratorFunction",d.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},d.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(y),e},d.awrap=function(e){return{__await:e}},j(N.prototype),N.prototype[s]=function(){return this},d.AsyncIterator=N,d.async=function(e,t,n,r){var o=new N(v(e,t,n,r));return d.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},j(y),y[l]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},d.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},d.values=L,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return s.type="throw",s.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function v(e,t,n,r){var o=t&&t.prototype instanceof w?t:w,a=Object.create(o.prototype),i=new M(r||[]);return a._invoke=function(e,t,n){var r=u;return function(o,a){if(r===m)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=O(i,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var l=k(e,t,n);if("normal"===l.type){if(r=n.done?f:p,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=f,n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function k(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function _(){}function E(){}function j(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function N(e){var t;this._invoke=function(n,r){function a(){return new Promise(function(t,a){!function t(n,r,a,i){var s=k(e[n],e,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(c).then(function(e){l.value=e,a(l)},function(e){return t("throw",e,a,i)})}i(s.arg)}(n,r,t,a)})}return t=t?t.then(a,a):a()}}function O(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=k(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},192:function(e,t,n){e.exports=n(193)},193:function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(190),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(i){r.regeneratorRuntime=void 0}},194:function(e,t){function n(e,t,n,r,o,a,i){try{var s=e[a](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,l,"next",e)}function l(e){n(i,o,a,s,l,"throw",e)}s(void 0)})}}}}]);
//# sourceMappingURL=component---src-pages-portfolio-jsx-8ac45f2d0c1cc93f584b.js.map