new f_aspect("fa_eventTarget",{statics:{w:function(e){f_core.SubmitEvent(e)
return!1}},members:{f_finalize:function(){var f=f_classLoader,o,e=this,i=e._rs,n,t,r
if(!i)return
e._rs=o
n=[]
t=e.fo
for(r in i){if(t)t.call(e,r,e)
n.push(i[r])}f.Destroy.apply(f,n)},au:function(u,s){var a=this,c=s.split("|"),n,e,o,t,i,r,f
for(n=0;n<c.length;n++){e=f_core.vv(c[n],[])
o=e[0]
t=u[o]
if(e.length==2){i=e[1]
if(i=="submit"){a.f_addEventListener(t,fa_eventTarget.w)
continue}if(i=="submitPPR"&&window.f_pprEngine){a.f_addEventListener(t,f_pprEngine.St)
continue}}for(r=1;r<e.length;r++){f=e[r]
a.f_addEventListener(t,f)}}},H:function(e,n,t){return window._rcfacesExiting?!0:f_event.w(e,n,t)},sw:function(){var e
return e},f_fireEvent:function(n,r,b,E,p,v,u){var g=window,m=f_event,f,i=this,d=f,e,t,a,h,l,c,s,o
if(!g._rcfacesWindowInitialized)return!1
if(n instanceof m){e=n
n=e.f_getType()
r=e.f_getJsEvent()
v=e.f_getDetail()
p=e.f_getSelectionProvider()
e._Cf=d}t=i.sw(n,r)
if(t!==f)return t
{if(!u)u=n
if(!(a=i.fv(u)))return!0
if(!e){e=new m(i,n,r,b,E,p,v)
e._Cf=d
h=!0}t=!0
if(l=i._pd){c=l[n]
if(c!==f)e._yv=c}try{t=a.Eu(e)}finally{if(h&&g.f_classLoader)f_classLoader.Destroy(e)}if(t!==!1&&e&&e._yv!==f)t=e._yv
if(s=i._5y){o=s[n]
if(o!==f)t=o}if(r){if(t===!1)f_core.N(r)
r.returnValue=t}return t}},fv:function(t){var e=this._rs
return!e?null:e[t]},il:function(n){var t=this._rs,e
if(!t)return!0
e=t[n]
return!e?!0:e.f_isEmpty()},f_addEventListener:function(r){var t=arguments,n=this.hs(r),e
for(e=1;e<t.length;e++)n.f_addAction(t[e]);},Z:function(r){var t=arguments,n=this.hs(r),e
for(e=1;e<t.length;e++)n.Em(t[e]);},f_removeEventListener:function(r){var t=arguments,n=this.fv(r),e
if(!n)return
for(e=1;e<t.length;e++)n.pm(t[e]);},hs:function(n){var e=this,r,t
if(r=e.fv(n))return r
if(n=="init")e._lr=!0
if(!(t=e._rs))e._rs=t={}
t[n]=r=new f_actionList(e,n)
if(e.on)e.on(n,e)
return r},cg:function(i,f,o){var r=window,n="propertyChange",e,t
e=null
if(this.il(n))return
t=this
r.setTimeout(function(){if(r._rcfacesExiting)return
t.f_fireEvent(n,e,e,{name:i,value:f,oldValue:o})
t=i=f=o=e},10)},fg:function(r,n){var t=this,e=t._5y
if(!e)t._5y=e={}
e[r]=n},vb:function(r,n){var t=this,e=t._pd
if(!e)t._pd=e={}
e[r]=n}}});