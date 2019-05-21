new f_class("f_service",{extend:f_object,aspects:[fa_serializable,fa_eventTarget,fa_filterProperties,fa_commands],statics:{INIT_STATE:0,REQUESTING_STATE:1,LOADING_STATE:10,LOADED_STATE:20,ERRORED_STATE:21,w:0,S:{error:"error",propertyChange:"propertyChange",user:"user"}},members:{f_service:function(){var n=f_core,e=this,t
e.f_super(arguments)
e._C6=n.D(e,"serviceId")
if(t=n.D(e,"events"))e.au(f_service.S,t)},f_finalize:function(){var e
this._hs=e
this.f_super(arguments)},_o1:function(n,r){var t=this,e=t._hs
if(!e)t._hs=e={}
e[n]=r},f_getRequestState:function(n){var r,t=this._hs,e
if(!t)return-1
e=t[n]
return e===r?-1:e},f_getServiceId:function(){return this._C6},_np:function(){return f_service.w+++"."+new Date().getTime()*Math.random()},f_asyncCall:function(i,f,r,e){var a,n=this,t=n._np()
n._o1(t,0)
if(r&&e===a)e=100
n.cc(function(o){o._tb(t,i,f,r,e)})
return t},f_syncCall:function(v,h){var g="Not a service response !",t=this,a=t._np(),o,u,e,c,i,r,l,f,s,n
if(h)o=f_subProgressMonitor.f_newInstance(h,20)
t._o1(a,0)
u=f_env.rn()
e=new f_httpRequest(t,u)
c=t._ph(e,a,v)
t._yi(e,c,o)
i=21
try{if(e.f_getStatus()!=200){r="Bad http response status ! ("+e.f_getStatusText()+")"
t.q(e,33554436,r)
throw new Error(r)}if(!(l=e.f_getResponseHeader("X-Camelia-Service"))){r=g
t.q(e,33554438,g)
throw new Error(r)}f=e.f_getResponseContentType().toLowerCase()
if(f.indexOf("x-camelia/error")>=0){s=f_error.V(e)
n=e.f_getResponse()
t.q(e,s,n)
throw new Error("Application error")}if(e.f_isXmlResponse()){i=20
return e.f_getXmlResponse()}n=e.f_getResponse()
if(f.indexOf("text/javascript")>=0)n=f_core.of(n);else{n=t.pr(n,f,e)
i=20}}finally{t._o1(a,i)
if(o)o.f_done()}return n},_ph:function(r,a,n){var f="object",o=this,e,t,i
if(n==null)t="null";else if(typeof n==f){if(n.nodeType==9){t="xml"
e=n}else{t=f
e={}
e.type=t
e.data=f_core.iv(n)}}else{t="string"
e={}
e.type=t
e.data=String(n)}if(!t&&(i=o.as()))e.filterExpression=i
r.f_setRequestHeader("X-Camelia","client.newService")
r.f_setRequestHeader("X-Camelia-Request-Id",a)
r.f_setRequestHeader("X-Camelia-Component-Id",o.id)
if(t)r.f_setRequestHeader("X-Camelia-Content-Type",t)
return e},_tb:function(u,g,p,E,a){var R=f_subProgressMonitor,k=f_core,z=f_service,i,c=null,o=this,U=f_env.rn(),t=new f_httpRequest(o,U),A=o._ph(t,u,p),n,d,e
if(E){d=a?20:1
n=R.f_newInstance(E,d)}o._oy=!1
e=o
t.f_setListener({onInit:function(t){e._o1(u,1)
if(a)n.f_work(1)},onProgress:function(t){if(e._oy)return
e._oy=!0
e._o1(u,10)
if(a)n.f_work(1)},onLoad:function(t,f,G){var l,r,h,v,m,b,s,C
if(a)n.f_work(1)
l=!1
try{r=21
h=!1
v=!1
if(t.f_getStatus()!=200){f=c
e.q(t,33554436,"Bad http response status ! ("+t.f_getStatusText()+")")}else{if(!(m=t.f_getResponseHeader("X-Camelia-Service"))){f=c
e.q(t,33554438,"Not a service response !")}else{h=!0
b=t.f_getResponseContentType().toLowerCase()
if(b.indexOf("x-camelia/error")>=0)v=!0;else if(G.indexOf("text/javascript")>=0){k.of(f)
f=c}else{f=e.pr(f,G,t)
r=20}}}e._o1(u,r)
if(h){s=n
if(a)s=R.f_newInstance(s,17)
try{g.call(e,r,p,f,s)}catch(T){k.Error(z,"_asyncCallServer.onLoad: Call of callback throws an exception : "+g+".",T)}if(a)s.f_done()}if(n)n.f_done()
if(v){C=f_error.V(t)
if(e.q(t,C,f)===!1){l=i
return}}if(e.to()){l=!0
return}}finally{e._E=l}},onError:function(t,tt,W){var r=21
e._o1(u,r)
try{g.call(e,r,p,i)}catch(T){k.Error(z,"_asyncCallServer.onError: Call of callback throws an exception : "+g+".",T)}if(n)n.f_done()
if(e.q(t,16777216,W)===!1){e._E=i
return}if(e.to())return
e._E=i}})
o._E=!0
o._yi(t,A,E)},_yi:function(n,t,r){var e="text/plain"
if(t&&t.nodeType==9)e="text/xml"
e+="; charset=UTF-8"
n.f_setAcceptType(e)
try{return n.f_doFormRequest(t,r)}catch(i){throw i}},pr:function(e,t,n){if(t.indexOf(f_httpRequest.XML_MIME_TYPE)>=0)return e
if(t.indexOf("text/javascript")>=0)return e
var r
switch(r=n.f_getResponseHeader("X-Camelia-Content-Type")){case"object":return f_core.rw(e,!0);case"null":return null;}return e},q:function(n,t,e){return f_error.w(this,t,e,n)},f_findComponent:function(){return fa_namingContainer.w(this,arguments)},f_findSiblingComponent:function(){return fa_namingContainer.O(this,arguments)},lu:function(){}}});