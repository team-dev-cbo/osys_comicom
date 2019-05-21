function f_multiWindowClassLoader(t){var e=this
f_classLoader.call(e,t)
e._R=f_multiWindowClassLoader
e._e1=window._rcfacesClassLoader
e._cD=t.location.toString()
t._rcfacesClassLoader=e
e.yv(e._e1._4v)}
f_multiWindowClassLoader.prototype=new f_classLoader()
f_multiWindowClassLoader.f_getName=function(){return"f_multiWindowClassLoader"};