new f_class("f_fireBugAppender",{extend:f_object,aspects:[fa_abstractAppender],statics:{w:function(){},Initializer:function(){var t=f_fireBugAppender,e=window
try{if(!e.console||!e.console.firebug)return}catch(n){return}this.f_newInstance()
if(!e.rcfacesProfilerCB)f_core.ea(t.w)
t._lb=f_core.Assert},Assert:function(t,n){var e
if(e=window.console){e.assert(t,n)
if(!t)e.trace()
return}f_fireBugAppender._lb.call(f_core,t,n)}},members:{f_fireBugAppender:function(){this.f_super(arguments)
f_log.L(this)},f_doAppend:function(t){var n,e,r
if(!window.console)return
n=[]
e=""
if(t.name){e+="%s:"
n.push(t.name)}if(t.message){e+=" %s"
n.push(t.message)}if(t.exception){e+=" %o"
n.push(t.exception)}r=console.debug
switch(t.level){case 0:e="[FATAL] "+e;case 1:r=console.error
break;case 2:r=console.warn
break;case 3:r=console.info
break;case 4:break;default:e="[UNKNOWN LEVEL] "+e;}n.unshift(e)
r.apply(console,n)
if(t.exception)console.exception("Exception of previous message",t.exception)}}});