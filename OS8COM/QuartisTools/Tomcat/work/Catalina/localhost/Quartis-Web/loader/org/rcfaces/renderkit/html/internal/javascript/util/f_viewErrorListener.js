new f_class("f_viewErrorListener",{extend:f_object,aspects:[fa_eventTarget],members:{f_viewErrorListener:function(){var e=this,n,t
e.f_super(arguments)
n=e
f_error.S(function(o,i,r,f){n.f_fireEvent("error",null,{component:o,message:r,param:f},i)})
if(e.nodeType==1&&(t=f_core.D(e,"events")))e.au(f_viewErrorListener.w,t)}},statics:{w:{error:"error",propertyChange:"propertyChange",user:"user"}}});