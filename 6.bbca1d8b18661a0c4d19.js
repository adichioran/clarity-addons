(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{FqkS:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=function(){},o=u("zl1X"),e=u("8KBR"),c=u("KZfJ"),i=u("Ip0R"),r=u("5lT0"),f=u("mN7P"),b=u("2HPr"),g=function(){function l(l){this.router=l,this.withCommandBar=!1,this.withContentPanel=!1}return l.prototype.ngOnInit=function(){this.withCommandBar=this.collectRouteData("withCommand")[0],this.withContentPanel=this.collectRouteData("withPanel")[0],this.id=this.collectRouteData("id")[0]},l.prototype.toggleLeftPanel=function(){this.leftContentPanel.toggle()},l.prototype.toggleRightPanel=function(){this.rightContentPanel.toggle()},l.prototype.collectRouteData=function(l){for(var n=this.router.routerState.snapshot.root,u=[];n;)n.data&&n.data[l]&&u.push(n.data[l]),n=n.firstChild;return u},l}(),h=u("ZYCi"),V=t.La({encapsulation:2,styles:[],data:{}});function d(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["Base Pagelayout"]))],null,null)}function m(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["Command bar"]))],null,null)}function s(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["Content Panel"]))],null,null)}function p(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,3,"clr-button",[],null,null,null,o.m,o.d)),t.cb(6144,null,c.Bb,null,[c.g]),t.Ma(2,4243456,[[3,4]],0,c.g,[[3,c.tc]],null,null),(l()(),t.fb(-1,0,["Command1"]))],null,null)}function C(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,3,"clr-button",[],null,null,null,o.m,o.d)),t.cb(6144,null,c.Bb,null,[c.g]),t.Ma(2,4243456,[[3,4]],0,c.g,[[3,c.tc]],null,null),(l()(),t.fb(-1,0,["Command2"]))],null,null)}function M(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,3,"clr-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleRightPanel()&&t),t},o.m,o.d)),t.cb(6144,null,c.Bb,null,[c.g]),t.Ma(2,4243456,[[3,4]],0,c.g,[[3,c.tc]],null,{_click:"click"}),(l()(),t.fb(-1,0,["Show/Hide Right"]))],null,null)}function P(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,3,"clr-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleLeftPanel()&&t),t},o.m,o.d)),t.cb(6144,null,c.Bb,null,[c.g]),t.Ma(2,4243456,[[3,4]],0,c.g,[[3,c.tc]],{inMenu:[0,"inMenu"]},{_click:"click"}),(l()(),t.fb(-1,0,["Show/Hide Left "]))],function(l,n){l(n,2,0,!0)},null)}function w(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,15,"clr-button-group",[["class","command-bar"]],[[2,"btn-group",null]],[["document","click"]],function(l,n,u){var a=!0;return"document:click"===n&&(a=!1!==t.Xa(l,2).onMouseClick(u.target)&&a),a},o.l,o.e)),t.cb(512,null,c.tc,c.tc,[]),t.Ma(2,1097728,null,1,c.h,[c.tc,t.k],{menuPosition:[0,"menuPosition"]},null),t.db(603979776,3,{buttons:1}),(l()(),t.Fa(16777216,null,null,1,null,p)),t.Ma(5,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,C)),t.Ma(7,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,M)),t.Ma(9,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,P)),t.Ma(11,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Na(12,0,null,null,3,"clr-button",[],null,null,null,o.m,o.d)),t.cb(6144,null,c.Bb,null,[c.g]),t.Ma(14,4243456,[[3,4]],0,c.g,[[3,c.tc]],{inMenu:[0,"inMenu"]},null),(l()(),t.fb(-1,0,["Command3"]))],function(l,n){var u=n.component;l(n,2,0,"bottom-right"),l(n,5,0,!u.withContentPanel),l(n,7,0,!u.withContentPanel),l(n,9,0,u.withContentPanel),l(n,11,0,u.withContentPanel),l(n,14,0,!0)},function(l,n){l(n,0,0,!0)})}function N(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.fb(1,null,[" for submenu ",""]))],null,function(l,n){l(n,1,0,n.component.id)})}function I(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,4,"div",[["class","content-container"]],null,null,null,null,null)),(l()(),t.Na(1,0,null,null,3,"div",[["class","content-area"]],null,null,null,null,null)),(l()(),t.fb(-1,null,[" This is the page content"])),(l()(),t.Fa(16777216,null,null,1,null,N)),t.Ma(4,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,4,0,n.component.id)},null)}function k(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,15,"clr-content-panel-container",[],[[2,"content-container",null],[2,"content-panel-container",null]],null,null,e.q,e.e)),t.Ma(1,49152,null,0,r.h,[],null,null),(l()(),t.Na(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["Content Area"])),(l()(),t.Na(4,0,null,2,5,"clr-content-panel",[["clrDirection","left"]],[[2,"content-panel",null],[2,"left",null]],null,null,e.r,e.d)),t.Ma(5,114688,[[1,4],["leftContentPanel",4]],0,r.g,[],{direction:[0,"direction"]},null),(l()(),t.Na(6,0,null,0,1,null,null,null,null,null,null,null)),(l()(),t.fb(-1,null,["Left Content Panel"])),(l()(),t.Na(8,0,null,1,1,null,null,null,null,null,null,null)),(l()(),t.fb(-1,null,["Content"])),(l()(),t.Na(10,0,null,2,5,"clr-content-panel",[],[[2,"content-panel",null],[2,"left",null]],null,null,e.r,e.d)),t.Ma(11,114688,[[2,4],["rightContentPanel",4]],0,r.g,[],null,null),(l()(),t.Na(12,0,null,0,1,null,null,null,null,null,null,null)),(l()(),t.fb(-1,null,["Right Content Panel"])),(l()(),t.Na(14,0,null,1,1,null,null,null,null,null,null,null)),(l()(),t.fb(-1,null,["Content"]))],function(l,n){l(n,5,0,"left"),l(n,11,0)},function(l,n){l(n,0,0,!0,!0),l(n,4,0,!0,"left"===t.Xa(n,5).direction),l(n,10,0,!0,"left"===t.Xa(n,11).direction)})}function v(l){return t.hb(0,[t.db(671088640,1,{leftContentPanel:0}),t.db(671088640,2,{rightContentPanel:0}),(l()(),t.Na(2,0,null,null,18,"clr-main-container",[],[[2,"main-container",null]],null,null,null,null)),t.Ma(3,212992,null,0,c.Ga,[t.k,c.uc],null,null),t.Ma(4,8404992,null,0,c.Cb,[],null,null),(l()(),t.Na(5,0,null,null,1,"clr-demo-menu",[],null,null,null,f.b,f.a)),t.Ma(6,49152,null,0,b.a,[i.d,t.z],null,null),(l()(),t.Na(7,0,null,null,9,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),t.Na(8,0,null,null,6,"h2",[],null,null,null,null,null)),(l()(),t.Fa(16777216,null,null,1,null,d)),t.Ma(10,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,m)),t.Ma(12,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,s)),t.Ma(14,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,w)),t.Ma(16,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,I)),t.Ma(18,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,k)),t.Ma(20,16384,null,0,i.o,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0),l(n,10,0,!u.withCommandBar&&!u.withContentPanel),l(n,12,0,u.withCommandBar&&!u.withContentPanel),l(n,14,0,u.withCommandBar&&u.withContentPanel),l(n,16,0,u.withCommandBar),l(n,18,0,!u.withContentPanel),l(n,20,0,u.withContentPanel)},function(l,n){l(n,2,0,!0)})}var F=t.Ja("clr-basepage-layout-demo",g,function(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"clr-basepage-layout-demo",[],null,null,null,v,V)),t.Ma(1,114688,null,0,g,[h.l],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),L=u("gIcY"),B=u("fTK2");u.d(n,"BasepageLayoutDemoModuleNgFactory",function(){return R});var R=t.Ka(a,[],function(l){return t.Ua([t.Va(512,t.j,t.Aa,[[8,[o.s,o.a,o.r,e.a,F]],[3,t.j],t.v]),t.Va(4608,i.q,i.p,[t.s,[2,i.F]]),t.Va(4608,c.Eb,c.Eb,[]),t.Va(4608,L.r,L.r,[]),t.Va(5120,c.uc,c.vc,[[3,c.uc]]),t.Va(4608,r.d,r.d,[]),t.Va(1073742336,i.b,i.b,[]),t.Va(1073742336,c.Y,c.Y,[]),t.Va(1073742336,c.Fb,c.Fb,[]),t.Va(1073742336,c.Rc,c.Rc,[]),t.Va(1073742336,c.R,c.R,[]),t.Va(1073742336,c.d,c.d,[]),t.Va(1073742336,c.T,c.T,[]),t.Va(1073742336,c.n,c.n,[]),t.Va(1073742336,c.Yc,c.Yc,[]),t.Va(1073742336,c.ad,c.ad,[]),t.Va(1073742336,c.K,c.K,[]),t.Va(1073742336,c.U,c.U,[]),t.Va(1073742336,L.o,L.o,[]),t.Va(1073742336,L.e,L.e,[]),t.Va(1073742336,c.Fa,c.Fa,[]),t.Va(1073742336,c.Mb,c.Mb,[]),t.Va(1073742336,c.mc,c.mc,[]),t.Va(1073742336,c.D,c.D,[]),t.Va(1073742336,c.Za,c.Za,[]),t.Va(1073742336,c.mb,c.mb,[]),t.Va(1073742336,c.u,c.u,[]),t.Va(1073742336,c.Ja,c.Ja,[]),t.Va(1073742336,c.Ea,c.Ea,[]),t.Va(1073742336,c.i,c.i,[]),t.Va(1073742336,c.j,c.j,[]),t.Va(1073742336,c.ab,c.ab,[]),t.Va(1073742336,c.q,c.q,[]),t.Va(1073742336,c.Ha,c.Ha,[]),t.Va(1073742336,c.Ma,c.Ma,[]),t.Va(1073742336,c.wc,c.wc,[]),t.Va(1073742336,c.fb,c.fb,[]),t.Va(1073742336,c.rb,c.rb,[]),t.Va(1073742336,c.Ca,c.Ca,[]),t.Va(1073742336,c.Sa,c.Sa,[]),t.Va(1073742336,c.kb,c.kb,[]),t.Va(1073742336,c.Na,c.Na,[]),t.Va(1073742336,c.vb,c.vb,[]),t.Va(1073742336,c.a,c.a,[]),t.Va(1073742336,h.o,h.o,[[2,h.t],[2,h.l]]),t.Va(1073742336,r.x,r.x,[]),t.Va(1073742336,r.v,r.v,[]),t.Va(1073742336,r.t,r.t,[]),t.Va(1073742336,r.f,r.f,[]),t.Va(1073742336,r.c,r.c,[]),t.Va(1073742336,r.o,r.o,[]),t.Va(1073742336,r.k,r.k,[]),t.Va(1073742336,r.q,r.q,[]),t.Va(1073742336,r.m,r.m,[]),t.Va(1073742336,r.a,r.a,[]),t.Va(1073742336,B.a,B.a,[]),t.Va(1073742336,a,a,[]),t.Va(1024,h.j,function(){return[[{path:"",component:g,outlet:"fullpage"}]]},[])])})}}]);