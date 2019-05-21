new f_class("f_log",{extend:f_object,_tf:!0,statics:{FATAL:0,ERROR:1,WARN:2,INFO:3,DEBUG:4,TRACE:5,Initializer:function(){var e=window.rcfacesLogAppender
if(!e)return
f_log.L({f_doAppend:e})},Finalizer:function(){var e=f_log,t
e.F=e.V=t},GetLog:function(r){var a=f_log,c=f_core,t=a._dw,i,n,o,f,e
if(window._rcfacesExiting)return t?t[r]:null
if(!t)a._dw=t={}
if(i=t[r])return i
n=0
if(c&&c.si)n=4
if(o=a.F)for(e in o){if(e.length&&r.indexOf(e))continue
if(f&&f.length>e.length)continue
f=e
n=o[e]}i=a.f_newInstance(r,n)
return t[r]=i},w:function(){var f=f_log,t=arguments,r=f.F,e,i,n
if(!r)f.F=r={}
for(e=0;e<t.length;){i=t[e++]
r[i]=n=t[e++]}},S:function(i){var r=window,f,t=f_log.V,e,n
if(!t||!t.length)return!1
try{r.__f=!0
for(e=0;e<t.length;e++){n=t[e]
if(typeof n.f_doAppend!="function")continue
try{n.f_doAppend(i)}catch(o){alert("Append log event exception:\n"+o)}}}finally{r.__f=f}return!0},L:function(){var t=f_log,e=t.V
if(!e)t.V=e=[]
f_core.io(e,arguments)}},members:{f_log:function(n,e){var t=this
t.f_super(arguments)
if(typeof e!="number")e=1
t._i9=e
t._d=n},f_fatal:function(e,n,t){return this._a8(0,e,n,t)},f_error:function(e,n,t){return this._a8(1,e,n,t)},f_warn:function(e,n,t){return this._a8(2,e,n,t)},f_info:function(e,n,t){return this._a8(3,e,n,t)},f_debug:function(e,n,t){return this._a8(4,e,n,t)},f_trace:function(e,n,t){return this._a8(5,e,n,t)},_a8:function(t,n,i,e){if(!e)e=window
if(this._i9<t)return!1
var r={name:this._d,level:t,message:n,exception:i,window:e,date:new Date()}
return f_log.S(r)},f_isFatalEnabled:function(){return this._i9>=0},f_isErrorEnabled:function(){return this._i9>=1},f_isWarnEnabled:function(){return this._i9>=2},f_isInfoEnabled:function(){return this._i9>=3},f_isDebugEnabled:function(){return this._i9>=4},f_isTraceEnabled:function(){return this._i9>=5}}});