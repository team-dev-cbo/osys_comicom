new f_class("f_filtredComponent",{extend:f_component,aspects:[fa_filterProperties,fa_commands],members:{f_finalize:function(){var e
this._g=e
this.f_super(arguments)},su:function(){this.cc(function(e){e._i4()})},_i4:function(){var v=f_core,c="text/javascript",l,n,r,a,o,e,t
n=this
f_class.S("f_httpRequest",!0)
n.className=n.fe("_loading")
r={}
r.componentId=n.id
if(a=n.as())r.filterExpression=a
o=f_env.rn()
e=new f_httpRequest(n,o,c)
t=n
e.f_setListener({onInit:function(e){},onError:function(e,b,m){var h
try{h=t.q(e,16777216,m)}catch(d){h=!1}if(h===!1){t._E=!1
t.className=t.fe()
return}if(t.to())return
t._E=!1
t.className=t.fe()},onProgress:function(e,g,E,p){},onLoad:function(e,g,p){var u,i,s,f
if(t.to())return
try{t.className=t.fe()
if(e.f_getStatus()!=200){t.q(e,33554436,"Bad http response status ! ("+e.f_getStatusText()+")")
return}if(!(u=e.f_getResponseHeader("X-Camelia-Service"))){t.q(e,33554438,"Not a service response !")
return}i=e.f_getResponseContentType().toLowerCase()
if(i.indexOf("x-camelia/error")>=0){s=f_error.V(e)
t.q(e,s,g)
return}if(i.indexOf(c)<0){t.q(e,33554435,"Unsupported content type: "+i)
return}f=e.f_getResponse()
try{v.of(f)}catch(d){v.Error(f_filtredComponent,"_callServer.onLoad: Can not eval response '"+f+"'.",d)}}finally{t._E=l}}})
e.f_setRequestHeader("X-Camelia",n.f_getServiceId())
e.f_doFormRequest(r)
n._E=!0},q:function(n,t,e){return f_error.w(this,t,e,n)},lu:function(){},vu:function(e){this.f_setFilterProperty("value",e)}}});