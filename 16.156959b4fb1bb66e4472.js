(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gFsD:function(l,n,a){"use strict";a.r(n);var u=a("CcnG"),c=function(){},i=a("zl1X"),d=a("Ip0R"),e=a("+Xo0"),t=a("0G9f"),r=a("QkwE"),s=a("vAyd"),o=a("mrSG"),v='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n            \n',b=function(l){function n(){var n=l.call(this,"cards")||this;return n.htmlExample=v,n.cards=[{title:"Card 1",active:!0},{title:"Card 2",active:!1},{title:"Card 3",active:!1}],n}return Object(o.b)(n,l),n.prototype.activateCard=function(l){for(var n=0,a=this.cards;n<a.length;n++)a[n].active=!1;this.cards[l].active=!0},n}(a("N+3j").a),V=u.La({encapsulation:2,styles:[],data:{}});function f(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" Click to activate me "]))],null,null)}function m(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" I am an active card "]))],null,null)}function h(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,7,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),u.Na(1,0,null,null,6,"div",[["class","card clickable"]],[[2,"card-active",null]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==l.component.activateCard(l.context.index)&&u),u},null,null)),(l()(),u.Na(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.fb(3,null,[" "," "])),(l()(),u.Fa(16777216,null,null,1,null,f)),u.Ma(5,16384,null,0,d.o,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.Fa(16777216,null,null,1,null,m)),u.Ma(7,16384,null,0,d.o,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,!n.context.$implicit.active),l(n,7,0,n.context.$implicit.active)},function(l,n){l(n,1,0,n.context.$implicit.active),l(n,3,0,n.context.$implicit.title)})}function N(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,44,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,e.b,e.a)),u.Ma(1,49152,null,0,t.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),u.Na(2,0,null,0,42,"article",[],null,null,null,null,null)),(l()(),u.Na(3,0,null,null,4,"h5",[["class","component-summary"],["id","cards-header"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["The original card documentation can be found in the official Clarity Documentation. This document only extends the clarity documentation by a single added class: "])),(l()(),u.Na(5,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["card-active"])),(l()(),u.fb(-1,null,["."])),(l()(),u.Na(8,0,null,null,7,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),u.Na(9,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.fb(-1,null,["Usage"])),(l()(),u.Na(11,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.fb(-1,null,[" Use the "])),(l()(),u.Na(13,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["card-active"])),(l()(),u.fb(-1,null,[" class when you have a list of cards and want to show which card is currently selected. "])),(l()(),u.Na(16,0,null,null,28,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),u.Na(17,0,null,null,1,"h3",[["id","variants"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["Variants"])),(l()(),u.Na(19,0,null,null,18,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),u.Na(20,0,null,null,5,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),u.Na(21,0,null,null,4,"div",[["class","card card-active clickable"]],null,null,null,null,null)),(l()(),u.Na(22,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" I am an active card "])),(l()(),u.Na(24,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" This makes me not clickable "])),(l()(),u.Na(26,0,null,null,5,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),u.Na(27,0,null,null,4,"div",[["class","card clickable"]],null,null,null,null,null)),(l()(),u.Na(28,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" I am a non active card "])),(l()(),u.Na(30,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" But I am clickable "])),(l()(),u.Na(32,0,null,null,5,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),u.Na(33,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.Na(34,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" I am a non active card "])),(l()(),u.Na(36,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),u.fb(-1,null,[" And I am also not clickable "])),(l()(),u.Na(38,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),u.Ma(39,4243456,null,0,s.a,[],{code:[0,"code"]},null),(l()(),u.Na(40,0,null,null,1,"h3",[["id","demo"]],null,null,null,null,null)),(l()(),u.fb(-1,null,["Demo"])),(l()(),u.Na(42,0,null,null,2,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),u.Fa(16777216,null,null,1,null,h)),u.Ma(44,802816,null,0,d.n,[u.O,u.L,u.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var a=n.component;l(n,1,0,a.title,a.newLayout,a.ui,a.ng),l(n,39,0,a.htmlExample),l(n,44,0,a.cards)},function(l,n){l(n,0,0,!0)})}var k=u.Ja("clr-cards-demo",b,function(l){return u.hb(0,[(l()(),u.Na(0,0,null,null,1,"clr-cards-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,N,V)),u.Ma(1,49152,null,0,b,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),p=a("gIcY"),w=a("KZfJ"),g=a("5lT0"),I=a("XPsC"),y=a("ZYCi"),C=a("JsA7");a.d(n,"CardsDemoModuleNgFactory",function(){return x});var x=u.Ka(c,[],function(l){return u.Ua([u.Va(512,u.j,u.Aa,[[8,[i.o,i.a,i.n,k]],[3,u.j],u.v]),u.Va(4608,d.q,d.p,[u.s,[2,d.F]]),u.Va(4608,p.r,p.r,[]),u.Va(4608,w.Eb,w.Eb,[]),u.Va(5120,w.uc,w.vc,[[3,w.uc]]),u.Va(4608,g.d,g.d,[]),u.Va(1073742336,d.b,d.b,[]),u.Va(1073742336,p.o,p.o,[]),u.Va(1073742336,p.e,p.e,[]),u.Va(1073742336,w.Y,w.Y,[]),u.Va(1073742336,w.Fb,w.Fb,[]),u.Va(1073742336,w.Rc,w.Rc,[]),u.Va(1073742336,w.R,w.R,[]),u.Va(1073742336,w.d,w.d,[]),u.Va(1073742336,w.T,w.T,[]),u.Va(1073742336,w.n,w.n,[]),u.Va(1073742336,w.Yc,w.Yc,[]),u.Va(1073742336,w.ad,w.ad,[]),u.Va(1073742336,w.K,w.K,[]),u.Va(1073742336,w.U,w.U,[]),u.Va(1073742336,w.Fa,w.Fa,[]),u.Va(1073742336,w.Mb,w.Mb,[]),u.Va(1073742336,w.mc,w.mc,[]),u.Va(1073742336,w.D,w.D,[]),u.Va(1073742336,w.Za,w.Za,[]),u.Va(1073742336,w.mb,w.mb,[]),u.Va(1073742336,w.u,w.u,[]),u.Va(1073742336,w.Ja,w.Ja,[]),u.Va(1073742336,w.Ea,w.Ea,[]),u.Va(1073742336,w.i,w.i,[]),u.Va(1073742336,w.j,w.j,[]),u.Va(1073742336,w.ab,w.ab,[]),u.Va(1073742336,w.q,w.q,[]),u.Va(1073742336,w.Ha,w.Ha,[]),u.Va(1073742336,w.Ma,w.Ma,[]),u.Va(1073742336,w.wc,w.wc,[]),u.Va(1073742336,w.fb,w.fb,[]),u.Va(1073742336,w.rb,w.rb,[]),u.Va(1073742336,w.Ca,w.Ca,[]),u.Va(1073742336,w.Sa,w.Sa,[]),u.Va(1073742336,w.kb,w.kb,[]),u.Va(1073742336,w.Na,w.Na,[]),u.Va(1073742336,w.vb,w.vb,[]),u.Va(1073742336,w.a,w.a,[]),u.Va(1073742336,I.a,I.a,[]),u.Va(1073742336,y.o,y.o,[[2,y.t],[2,y.l]]),u.Va(1073742336,C.a,C.a,[]),u.Va(1073742336,g.u,g.u,[]),u.Va(1073742336,g.s,g.s,[]),u.Va(1073742336,g.q,g.q,[]),u.Va(1073742336,g.f,g.f,[]),u.Va(1073742336,g.c,g.c,[]),u.Va(1073742336,g.o,g.o,[]),u.Va(1073742336,g.k,g.k,[]),u.Va(1073742336,g.m,g.m,[]),u.Va(1073742336,g.a,g.a,[]),u.Va(1073742336,c,c,[]),u.Va(1024,y.j,function(){return[[{path:"",component:b}]]},[])])})}}]);