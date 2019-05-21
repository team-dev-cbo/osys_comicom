function f_aspect(s,e,c,u){var o=f_class,i=arguments,a=i.length,t=this,f,r,n
if(!a)return
if(e&&(e.statics||e.members||e.extend)){n=e
e=n.statics
c=n.members
f=n.extend
r=n._6e}else if(a>3)f=f_core.io(null,i,3)
if(!e)e={}
if(!e.f_getName)e.f_getName=o.f_getName
if(!e.toString)e.toString=o.toString
t._d=s
t._s2=c
t._rf=e
if(!r)r=f_classLoader.Get(window)
t._6e=r
t._l5=f
t._6e.Eo(t)}
f_aspect.prototype={f_getName:function(){return this._d},f_getClassLoader:function(){return this._6e},f_getAspects:function(){var e=this
if(!e._l5)e._l5=[]
return e._l5},toString:function(){return"[Aspect "+this._d+"]"}}
f_aspect.f_getName=function(){return"f_aspect"}
f_aspect.w=!0;