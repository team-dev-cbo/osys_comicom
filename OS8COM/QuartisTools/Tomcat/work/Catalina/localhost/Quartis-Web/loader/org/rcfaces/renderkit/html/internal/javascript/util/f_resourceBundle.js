new f_class("f_resourceBundle",{statics:{Get:function(e,o){var r=f_resourceBundle,n,t,i,f
if(e instanceof f_class||e instanceof f_aspect||typeof e.f_getName=="function")e=e.f_getName()
if(!e)return null
if(!(n=r.V))r.V=n={}
if(t=n[e])return t
if((i=r.M)&&(f=i[e])){delete i[e]
n[e]=t=new r(e)
t._yE(f)
return t}if(!o)return t
t=new r(e)
return n[e]=t},Define:function(t,e){var n=f_resourceBundle.Get(t,!0)
n._E3(e)},Define2:function(r,n){var t=f_resourceBundle,e=t.M
if(!e)t.M=e={}
e[r]=n},w:function(n,r){var e=f_resourceBundle,f,t=e.O,i=t[n]
t[n]=f
e.Define(i,r)},S:function(r,n,i){var t=f_resourceBundle,e=t.O
if(!e)t.O=e=[]
e[n]=r
document.write('<SCRIPT type="text/javascript" charset="UTF-8" src="'+i+'"></SCRIPT>')},L:function(r){var n=f_resourceBundle,e,t
for(e in n.M)n.Get(e);t=n.V
for(e in t)r[e]=t[e];},F:function(){var e={}
return f_resourceBundle.V=e},Finalizer:function(){var e
f_resourceBundle.V=e}},members:{f_resourceBundle:function(e){this._d=e},f_get:function(r,n){var a=f_resourceBundle,o=f_core,t="??",c="'.",f,i=this,s=i._i8,e
if(!s){if(n!==f)return n
o.Error(a,"No keys for resourceBundle '"+i._d+c)
return t+r+t}e=s[r]
if(e===f){if(n!==f)return n
o.Error(a,"Unknown key '"+r+"' for resourceBundle '"+i._d+c)
return t+r+t}return e},f_format:function(t){var e=arguments
if(e.length<2)return this.f_formatParams(t)
var n=f_core.io(null,e,1)
return this.f_formatParams(t,n)},f_formatParams:function(n,a,t){var r=f_core,i="??",o,f=this,e=f.f_get(n,t)
if(e===o){if(t===o){r.Error(f_resourceBundle,"Unknown key '"+n+"' for resourceBundle '"+f._d+"'.")
return i+n+i}e=t}return!e?e:r.he(e,a)},_E3:function(e){var o=this,r=o._i8,t,f,i,n
if(!r)o._i8=r={}
if(e instanceof Array){for(t=0;t<e.length;){f=e[t++]
r[f]=i=e[t++]}return}for(n in e)r[n]=e[n];},_yE:function(e){this._i8=e},toString:function(){return"[f_resourceBundle name="+this._d+"]"}}});