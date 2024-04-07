"use strict";(self.webpackChunksnake_frontend=self.webpackChunksnake_frontend||[]).push([[421],{8421:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,c,o,i,a,s,l=n(9439),f=n(3433),u=n(2791),h=n(168),x=n(5867),d=x.ZP.canvas(r||(r=(0,h.Z)(["\n\tbackground-color: #ecf0f1;\n\tborder: 3px solid #bdc3d9;\n"]))),y=n(184),g=function(e){var t=e.score,n=e.setScore,r=e.onGameOver,c=(0,u.useState)(!1),o=(0,l.Z)(c,2),i=o[0],a=o[1],s=(0,u.useRef)(),h=10,x=(0,u.useState)({x:180,y:100}),g=(0,l.Z)(x,2),w=g[0],p=g[1],v=(0,u.useState)([{x:100,y:50},{x:95,y:50}]),Z=(0,l.Z)(v,2),S=Z[0],k=Z[1],m=(0,u.useState)(null),j=(0,l.Z)(m,2),b=j[0],P=j[1];return(0,u.useEffect)((function(){var e=s.current,c=e.getContext("2d"),o=function(e){window.addEventListener("keydown",e)};if(o((function(e){" "===e.key&&(a(!i),P(null))})),!i){var l=function(t){(t.x+h>e.width||t.x+h<0)&&r("wall"),(t.y+h>e.height||t.y<0)&&r("wall")},u=function(e){for(var t=e[0],n=1;n<e.length;n++)t.x===e[n].x&&t.y===e[n].y&&r("self")},x=function(r){var c=r[0];c.x===w.x&&c.y===w.y&&(n(++t),p({x:Math.floor(Math.random()*e.width/h)*h,y:Math.floor(Math.random()*e.height/h)*h}),r.push({x:r[r.length-1].x,y:r[r.length-1].y}))};o((function(e){switch(e.key){case"ArrowRight":P("right");break;case"ArrowLeft":P("left");break;case"ArrowUp":P("up");break;case"ArrowDown":P("down")}}));var d=setInterval((function(){c.clearRect(0,0,e.width,e.height),S.forEach((function(e){c.beginPath(),c.rect(e.x,e.y,14,14),c.fillStyle="#90ee90",c.fill(),c.closePath()})),c.beginPath(),c.rect(w.x,w.y,14,14),c.fillStyle="#ff0000",c.fill(),c.closePath(),b&&k((function(e){for(var t=(0,f.Z)(e),n={x:t[0].x,y:t[0].y},r=t.length-1;r>0;r--)t[r].x=t[r-1].x,t[r].y=t[r-1].y;switch(b){case"right":n.x+=h;break;case"left":n.x-=h;break;case"up":n.y-=h;break;case"down":n.y+=h}return t[0]=n,x(t),l(n),u(t),t}))}),100);return function(){clearInterval(d)}}}),[w,b,r,i,t,n,S]),(0,y.jsxs)("div",{children:[i&&(0,y.jsx)("p",{children:"pause"}),(0,y.jsx)(d,{ref:s,width:750,height:420})]})},w=x.ZP.div(c||(c=(0,h.Z)(["\n\tdisplay: flex\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n"]))),p=x.ZP.p(o||(o=(0,h.Z)(["\n\tcolor: #1e88e5;\n\tfont-size: 24px;\n"]))),v=x.ZP.p(i||(i=(0,h.Z)(["\n\tcolor: #e74c3c;\n\tfont-size: 18px;\n"]))),Z=x.ZP.div(a||(a=(0,h.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tcolor: #e74c3c;\n\tfont-size: 24px;\n\tmargin-top: 20px;\n"]))),S=function(){var e=(0,u.useState)(0),t=(0,l.Z)(e,2),n=t[0],r=t[1],c=(0,u.useState)(parseInt(localStorage.getItem("highScore"))||0),o=(0,l.Z)(c,2),i=o[0],a=o[1],s=(0,u.useState)(!1),f=(0,l.Z)(s,2),h=f[0],x=f[1],d=(0,u.useState)(null),S=(0,l.Z)(d,2),k=S[0],m=S[1];return(0,u.useEffect)((function(){window.addEventListener("keydown",(function(e){h&&"Enter"===e.key&&(r(0),x(!1))}))}),[h]),(0,y.jsxs)(w,{children:[(0,y.jsxs)(p,{className:"score",children:["Score: ",n]}),(0,y.jsxs)(v,{children:["High Score: ",i]}),h&&(0,y.jsxs)(Z,{children:[(0,y.jsxs)("p",{children:["Game Over!"," ","wall"===k?"You Hit the wall":"You Ate yourself","!"]}),(0,y.jsx)("p",{children:"Press Enter to reset the game."})]}),!h&&(0,y.jsx)(g,{score:n,setScore:r,onGameOver:function(e){return function(e){x(!0),n>i&&(a(n),localStorage.setItem("highScore",n.toString())),m(e)}(e)}})]})},k=x.ZP.div(s||(s=(0,h.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]))),m=function(){return(0,y.jsx)(k,{children:(0,y.jsx)(S,{})})}}}]);
//# sourceMappingURL=421.3c8b584b.chunk.js.map