new f_class("f_env",{statics:{BLANK_IMAGE_URL:"/blank.gif",$:"camelia.domain",et:"$context",Set:function(e,r){var t=f_env,n=t[e]
t[e]=r
return n},Get:function(t,n){var r,e=f_env[t]
return e===r?n:e},Delete:function(t){var n=f_env,r,e=n[t]
if(e!==r)delete n[t]
return e},tn:function(){return f_env.ar},O:function(t){var e=f_env.cr
return!e?t:e+"/"+t},M:function(){var e=f_env
if(e.ea)return e.ea
var t
return(t=e.Get("styleSheet.base"))?(e.ea=t):null},ne:function(){return f_env.or},ni:function(a,n,o,f,i){var t=f_env
t.ar=a
t.cr=f
t.or=o
if(!i)i=f
t.ea=i
if(n.charAt(0)=="/"){var r=window.location.toString(),e=r.indexOf("//")
if(e>0){e=r.indexOf("/",e+2)
if(e>0)n=r.substring(0,e)+n}}t.ta=n},S:function(){return f_env.Get("cancel.external.submit",!1)},tf:function(){f_env.re=!0},L:function(){return f_env.re},rn:function(){var e
return(e=f_env.ta)?e:window.location.toString()},w:function(){return f_env.oc!==!0},EnableSensitiveCaseTagName:function(){if(f_core.nt())return
f_env.V=!0},F:function(){var e=f_resourceBundle.Get(f_env)
return!e?null:e.f_get("OPEN_WINDOW_ERROR_MESSAGE")},oe:function(){var r=f_env,e,i,n,t,o,f
if(e=r.Get(r.$))return e
i=window.location.toString()
n=i.indexOf("//")
if(n<0){r.Set(r.$,"")
return""}t=i.indexOf("/",n+2)
if(t>n)e=i.substring(n+2,t);else e=i.substring(n+2)
t=e.indexOf(":")
if(t>0)e=e.substring(0,t)
o=e.split(".")
f=o.length
if(f>1)e=o[f-2]+"."+o[f-1]
r.Set(r.$,e)
return e},ResolveContentUrl:function(r,s){var c=f_env,n="/",e,o,f,i,t,a
if(!s)s=window
e=r.indexOf(":")
if(e>0&&e<r.indexOf(n))return r
o=s.location.toString()
e=o.indexOf("//")
if(e<0)return r
e=o.indexOf(n,e+2)
f=o
i=""
if(e>=0){f=o.substring(0,e)
i=o.substring(e+1)}if(!r.indexOf(n))return f+r;else if(!r.indexOf(c.et))return f+c.ar+r.substring(c.et.length)
if(!i.length)return f+n+r
t=i.split(n)
if(i.charAt(i.length-1)!=n)t.pop()
if(t.length&&n+t[0]==c.ar)t.shift()
a=r.split(n)
while(a.length&&t.length&&a[0]==".."){a.shift()
t.pop()}return f+n+t.concat(a).join(n)},ro:function(){f_env.oc=!0},GetBlankImageURL:function(){var t=f_env,e
if(e=t.ee)return e
t.ee=e=t.ResolveContentUrl(t.M()+"/blank.gif")
f_imageRepository.PrepareImage(e)
return e}},_tf:!0});