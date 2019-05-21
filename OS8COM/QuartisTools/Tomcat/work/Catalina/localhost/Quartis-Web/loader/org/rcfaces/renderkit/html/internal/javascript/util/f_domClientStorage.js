new f_class("f_domClientStorage",{extend:f_clientStorage,statics:{Initializer:function(){var e=window.globalStorage,t,n
if(!e||e instanceof StorageList==!1)return
t=f_env.oe()
f_domClientStorage._4g=n=e[t]},w:function(){return f_domClientStorage._4g!=null}},members:{f_getStorageType:function(){return 8},f_getStorageMaxSize:function(){return 5242880},f_get:function(t){var e=f_domClientStorage._4g.getItem(t)
return!e?null:e.value},f_set:function(t,n){var f=null,r=f_domClientStorage._4g,i=r.getItem(t),e=f
if(!i){if(!n)return f}else{e=i.value
if(!n){r.removeItem(t)
return e}}r.setItem(t,n)
return e}}});