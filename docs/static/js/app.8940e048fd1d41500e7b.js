webpackJsonp([1],{"L/dc":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=n("Zrlr"),a=n.n(o),r=n("wxAW"),c=n.n(r),l=n("Xxa5"),s=n.n(l),u=n("exGp"),p=n.n(u),d=new i.a,v={data:function(){return{title:null,content:null,active:!1}},created:function(){var t=this;return p()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d.$on("dialog",t.open);case 1:case"end":return e.stop()}},e,t)}))()},methods:{open:function(t){this.active=!0,this.title=t.title||"Title",this.content=t.content||null},close:function(){this.active=!1}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.active?n("div",{attrs:{id:"vue-dialog"}},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("div",[t._v(t._s(t.content))]),t._v(" "),n("button",{on:{click:t.close}},[t._v("close")])]):t._e()},staticRenderFns:[]};var h=n("VU/8")(v,f,!1,function(t){n("L/dc")},"data-v-742a5168",null).exports,_=new(function(){function t(){a()(this,t),this.isInstalled=!1}return c()(t,[{key:"install",value:function(t,e){this.isInstalled||(this.isInstalled=!0,t.component("VueDialogPlugin",h),t.prototype.$dialog=function(t){d.$emit("dialog",t)})}}]),t}());i.a.use(_);var m={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},w=n("VU/8")({name:"App"},m,!1,null,null,null).exports,g=n("/ocq");i.a.use(g.a);var x=new g.a({routes:[{path:"/",name:"Demo",component:Demo}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:x,components:{App:w},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.8940e048fd1d41500e7b.js.map