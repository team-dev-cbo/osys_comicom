new f_class("f_effect",{extend:f_object,statics:{w:function(n,r){var t=f_effect,e=t.S
if(!e)t.S=e={}
e[n]=r},Create:function(i,r,f){var n=null,t=f_effect.S,e
if(!t)return n
e=t[i]
return!e?n:e.f_newInstance(r,f)},Finalizer:function(){var e
f_effect.S=e}},members:{f_effect:function(t,n){var e=this
e.f_super(arguments)
e._u=t
e._u6=n},f_finalize:function(){var t,e=this
e._u=e._u6=t
e.f_super(arguments)},f_performEffect:function(){},f_getComponent:function(){return this._u}}});