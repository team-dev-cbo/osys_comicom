new f_class("f_userDataClientStorage",{extend:f_clientStorage,statics:{Finalizer:function(){var e=f_userDataClientStorage,n,t
e._Ei=!0
if(!(t=e.F))return
e.L()
e.F=n},w:function(){return f_core.K()},S:function(){var t=f_userDataClientStorage,e
if(e=t.F)return e
e=document.createElement("div")
e.className="f_userDataClientStorage"
document.body.appendChild(e)
if(!t._Ei)t.F=e
try{e.load("camelia")}catch(n){f_core.Error(t,"Can not load storage",n)}return e},L:function(t){var e=f_userDataClientStorage,n
if(!e.V)return
if(!t&&!(t=e.F))return
try{t.save("camelia")
e.V=n}catch(r){f_core.Error(e,"Can not save storage",r)}}},members:{f_getStorageType:function(){return 4},f_getStorageMaxSize:function(){return 1048576},f_get:function(t){var e=f_userDataClientStorage.S()
return!e?null:e.getAttribute(t)},f_set:function(r){var t=f_userDataClientStorage,e=t.S(),n
if(!e)return null
n=e.getAttribute(r)
t.V=!0
e.setAttribute(r)
if(t.M)t.L(e)
return n}}});