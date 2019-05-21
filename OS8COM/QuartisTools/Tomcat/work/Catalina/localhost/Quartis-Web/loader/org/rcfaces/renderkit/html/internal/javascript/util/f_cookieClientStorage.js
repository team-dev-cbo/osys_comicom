new f_class("f_cookieClientStorage",{extend:f_clientStorage,members:{f_getStorageType:function(){return 1},f_getStorageMaxSize:function(){return 4096},f_get:function(e){e="_CM_"+e
return f_core.GetCookieValue(e)},f_set:function(e,n){e="_CM_"+e
var t=f_core.GetCookieValue(e)
f_core.SetCookieValue(e,n)
return t}}});