new f_class("f_error",{statics:{APPLICATION_ERROR_MIME_TYPE:"x-camelia/error",ERROR_TYPE_MASK:4278190080,HTTP_ERROR:16777216,SERVICE_ERROR:33554432,INVALID_PARAMETER_SERVICE_ERROR:33554433,SESSION_EXPIRED_SERVICE_ERROR:33554434,RESPONSE_TYPE_SERVICE_ERROR:33554435,INVALID_RESPONSE_SERVICE_ERROR:33554436,RESPONSE_EVALUATION_SERVICE_ERROR:33554437,INVALID_SERVICE_RESPONSE_ERROR:33554438,INTERNAL_SERVICE_RESPONSE_ERROR:33554439,ASYNC_RENDER_ERROR:50331648,RESPONSE_TYPE_ASYNC_RENDER_ERROR:50331649,INVALID_RESPONSE_ASYNC_RENDER_ERROR:50331650,RESPONSE_EVALUATION_ASYNC_RENDER_ERROR:50331652,APPLICATION_ERROR:0,w:function(o,e,s,f){var g=f_error,h=f_core,u="error",l,c,t,i,r,a,n
c=null
if(!o.il(u))return o.f_fireEvent(u,c,f,e,c,s)
t=g._hr
if(t&&t.length){i=!0
for(r=0;r<t.length;r++){a=t[r]
try{if(a.call(window,o,e,s,f)===!1)i=!1}catch(n){h.Error(g,"PerformErrorEvent: Exception when calling '"+a+"' (component="+o+", messageCode='"+e+"' message='"+s+"' param='"+f+"')",n)}}return i}n=l
if(f instanceof Error)n=f
if(e)e="[0x"+e.toString(16)+"]";else e=""
h.Error(o.f_getClass(),"Error"+e+"  "+s,n)},S:function(n){var t=f_error,e=t._hr
if(!e)t._hr=e=[]
e.fr(n)},L:function(t){var e=f_error._hr
if(!e)return
e.it(t)},F:function(){var e
f_error._hr=e},V:function(n){var t=0,e
if(e=n.f_getResponseHeader("X-Camelia-Error-Code"))t|=parseInt(e)&~4278190080
return t}},_tf:!0});