(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{W4OA:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),s=u("SVse"),b=u("mrSG"),c=u("mloo"),h=u("Mb+C");class a{constructor(l,n,u){this.httpcalls=l,this.modalCtrl=n,this.loading=u,this.httpcalls.GetForumQuestions(),this.lists=this.httpcalls.forumList}refresh(l){setTimeout(()=>{this.httpcalls.GetForumQuestions(),this.lists=this.httpcalls.forumList,l.target.complete()},2e3)}LoadQuesAndComment(l){this.httpcalls.getQuestion(l),this.httpcalls.getComments(l),this.presentLoading(),setTimeout(()=>{this.openQues(l)},2e3)}presentLoading(){return b.b(this,void 0,void 0,(function*(){const l=yield this.loading.create({spinner:"lines",message:"Please Wait",duration:2e3});yield l.present()}))}openQues(l){return b.b(this,void 0,void 0,(function*(){const n=yield this.modalCtrl.create({component:h.a,componentProps:{Qid:l}});return yield n.present()}))}ngOnInit(){this.httpcalls.GetForumQuestions(),this.lists=this.httpcalls.forumList}}var p=t.pb({encapsulation:0,styles:[["h5[_ngcontent-%COMP%]{color:gray}"]],data:{}});function m(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,11,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.LoadQuesAndComment(l.context.$implicit.id)&&t),t}),o.M,o.m)),t.qb(1,49152,null,0,r.F,[t.h,t.k,t.x],{button:[0,"button"]},null),(l()(),t.rb(2,0,null,0,9,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.N,o.n)),t.qb(3,49152,null,0,r.L,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(5,null,["",""])),(l()(),t.rb(6,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),t.Jb(7,null,["Name: ",""])),(l()(),t.rb(8,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),t.Jb(9,null,["Type: ",""])),(l()(),t.rb(10,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),t.Jb(11,null,["Source: ",""]))],(function(l,n){l(n,1,0,"")}),(function(l,n){l(n,5,0,n.context.$implicit.question),l(n,7,0,n.context.$implicit.name),l(n,9,0,n.context.$implicit.atype),l(n,11,0,n.context.$implicit.source)}))}function f(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,6,"ion-header",[],null,null,null,o.K,o.k)),t.qb(1,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.Z,o.z)),t.qb(3,49152,null,0,r.Ab,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,2,"ion-title",[],null,null,null,o.Y,o.y)),t.qb(5,49152,null,0,r.yb,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,["Misc Questions"])),(l()(),t.rb(7,0,null,null,12,"ion-content",[],null,null,null,o.H,o.h)),t.qb(8,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.rb(9,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.refresh(u)&&t),t}),o.Q,o.p)),t.qb(10,49152,null,0,r.bb,[t.h,t.k,t.x],null,null),(l()(),t.rb(11,0,null,0,1,"ion-refresher-content",[["pullingText","Pull to refresh"],["refreshingSpinner","lines"],["refreshingText","Loading"]],null,null,null,o.P,o.q)),t.qb(12,49152,null,0,r.cb,[t.h,t.k,t.x],{pullingText:[0,"pullingText"],refreshingSpinner:[1,"refreshingSpinner"],refreshingText:[2,"refreshingText"]},null),(l()(),t.rb(13,0,null,0,1,"h5",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Pull down to refresh"])),(l()(),t.rb(15,0,null,0,4,"ion-list",[],null,null,null,o.O,o.o)),t.qb(16,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,2,null,m)),t.qb(18,278528,null,0,s.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Fb(0,s.n,[])],(function(l,n){var u=n.component;l(n,12,0,"Pull to refresh","lines","Loading"),l(n,18,0,t.Kb(n,18,0,t.Db(n,19).transform(u.lists,0,u.lists.length-1)))}),null)}function d(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-forum",[],null,null,null,f,p)),t.qb(1,114688,null,0,a,[c.a,r.Fb,r.Eb],null,null)],(function(l,n){l(n,1,0)}),null)}var g=t.nb("app-forum",a,d,{},{},[]),x=u("s7LF"),k=u("iInd");u.d(n,"ForumPageModuleNgFactory",(function(){return q}));var q=t.ob(e,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[i.a,g]],[3,t.j],t.v]),t.Bb(4608,s.k,s.j,[t.s,[2,s.r]]),t.Bb(4608,x.l,x.l,[]),t.Bb(4608,r.b,r.b,[t.x,t.g]),t.Bb(4608,r.Fb,r.Fb,[r.b,t.j,t.p]),t.Bb(4608,r.Ib,r.Ib,[r.b,t.j,t.p]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,x.k,x.k,[]),t.Bb(1073742336,x.c,x.c,[]),t.Bb(1073742336,r.Cb,r.Cb,[]),t.Bb(1073742336,k.q,k.q,[[2,k.v],[2,k.m]]),t.Bb(1073742336,e,e,[]),t.Bb(1024,k.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);