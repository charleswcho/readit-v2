(this.webpackJsonpreadit=this.webpackJsonpreadit||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},171:function(e,t,a){},177:function(e,t,a){},180:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(37),s=a(99),i=a.n(s),m=(a(104),a(17)),u=a(36),p=a(55),d=a.n(p),E=a(95),b=a.n(E),h=a(19),f=a.n(h),v=a(98),w=a.n(v),g=a(39),j=a.n(g),N=a(38),O=a.n(N),S=a(96),y=a.n(S),x=a(97),k=a.n(x),B=a(56),M=a.n(B),_=a(57),z=a.n(_),H=a(58),T=a.n(H),R=a(93),q=a.n(R),C=a(91),J=a.n(C);a(105);var Q=function({ups:e,isMobile:t}){const a=t?"inherit":"small",n=t?"caption":"body1";return r.a.createElement("div",{className:"upvotes"},r.a.createElement(J.a,{className:"upvote-icon",fontSize:a}),r.a.createElement(f.a,{variant:n,gutterBottom:!0},e.toLocaleString()))};a(171);var A=({post:e,idx:t})=>{const a=e.thumbnail,n=e.ups,c=e.permalink,l=e.url,o=e.title,s=e.author,i=e.subreddit,m=Object(u.unstable_useMediaQuery)("(max-width:600px)"),p=a.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g);return r.a.createElement("li",{key:t,className:"post"},r.a.createElement("div",{className:"metrics"},!m&&r.a.createElement(Q,{ups:n,isMobile:m}),p?r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"thumbnail",src:a,alt:"thumbnail"})):null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:"https://www.reddit.com".concat(c),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{variant:"body2",gutterBottom:!0},o))),r.a.createElement("div",{className:"under"},r.a.createElement("div",{className:"author"},r.a.createElement(f.a,{variant:"caption",gutterBottom:!0},"by",r.a.createElement("a",{href:"https://www.reddit.com/user/".concat(s),target:"_blank",rel:"noopener noreferrer"}," ",s))),r.a.createElement("div",{className:"subreddit"},r.a.createElement(f.a,{variant:"caption",gutterBottom:!0},"to",r.a.createElement("a",{href:"https://www.reddit.com/r/".concat(i),target:"_blank",rel:"noopener noreferrer"}," ",i)))),m&&r.a.createElement(Q,{ups:n,isMobile:m})))};a(177);var D=function({posts:e,loading:t,handleScrollBottom:a}){return t?r.a.createElement("div",{className:"loading-page"},r.a.createElement(q.a,null)):r.a.createElement("ul",{className:"posts",onScroll:function({target:e}){e.scrollHeight-e.scrollTop===e.clientHeight&&a()}},e.map(((e,t)=>r.a.createElement(A,{post:e,idx:t}))))},I=a(54),L=a.n(I),P=a(94),U=a(2),V=a.n(U);const W=(e,t)=>{const a=Object(n.useState)(e),r=Object(m.a)(a,2),c=r[0],l=r[1],o=Object(n.useState)(t),s=Object(m.a)(o,2),i=s[0],u=s[1],p=Object(n.useState)(!1),d=Object(m.a)(p,2),E=d[0],b=d[1],h=Object(n.useState)(!1),f=Object(m.a)(h,2),v=f[0],w=f[1];return Object(n.useEffect)((()=>{Object(P.a)(L.a.mark((function e(){var t,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),w(!1),e.prev=2,e.next=5,fetch(c);case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,u(a.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),w(e.t0);case 15:b(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))()}),[c]),[i,E,v,l]};W.propTypes={initialUrl:V.a.string.isRequired,initialData:V.a.shape.isRequired};var F=W;a(180);var G=function(){const e=Object(u.unstable_useMediaQuery)("(max-width: 600px)"),t=Object(n.useState)("best"),a=Object(m.a)(t,2),c=a[0],l=a[1],o=F("https://www.reddit.com/best.json",{children:[]}),s=Object(m.a)(o,4),i=s[0],p=s[1],E=s[3],h=Object(n.useState)(25),v=Object(m.a)(h,2),g=v[0],N=v[1],S=i.children.map((e=>e.data));return r.a.createElement("div",{className:"App"},!e&&r.a.createElement(d.a,{position:"static"},r.a.createElement(b.a,{className:"toolbar"},r.a.createElement("a",{href:"/"},r.a.createElement(f.a,{variant:"h6"},"Readit")),r.a.createElement(y.a,null,r.a.createElement(k.a,{value:c,onChange:e=>{l(e.target.value),E("https://www.reddit.com/".concat(e.target.value,".json")),N(25)}},r.a.createElement(O.a,{value:"best"},r.a.createElement(M.a,{className:"select-icon",fontSize:"small"})," Best"),r.a.createElement(O.a,{value:"hot"},r.a.createElement(z.a,{className:"select-icon",fontSize:"small"}),"Hot"),r.a.createElement(O.a,{value:"new"},r.a.createElement(T.a,{className:"select-icon",fontSize:"small"}),"New"))))),r.a.createElement(D,{posts:S,loading:p,handleScrollBottom:()=>{const e=i.before?"&before".concat(i.before):"";E("https://www.reddit.com/hot.json?after=".concat(i.after).concat(e,"&count=").concat(g)),N(g+25)}}),e&&r.a.createElement(d.a,{position:"fixed",color:"primary",className:"app-bar"},r.a.createElement(w.a,{variant:"fullWidth",value:c,onChange:(e,t)=>{l(t),E("https://www.reddit.com/".concat(t,".json")),N(25)}},r.a.createElement(j.a,{value:"best",icon:r.a.createElement(M.a,null),label:"Best"}),r.a.createElement(j.a,{value:"hot",icon:r.a.createElement(z.a,null),label:"Hot"}),r.a.createElement(j.a,{value:"new",icon:r.a.createElement(T.a,null),label:"New"}))))};const K=Object(o.createMuiTheme)({palette:{type:"dark",primary:{main:"#0080ff"}},typography:{useNextVariants:!0}});l.a.render(r.a.createElement(o.MuiThemeProvider,{theme:K},r.a.createElement(i.a,null),r.a.createElement(G,null)),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.018ac792.chunk.js.map