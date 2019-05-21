new f_aspect("fa_filterProperties",{members:{fa_filterProperties:function(){var e=this
e._0l=f_core.Q(e,"filtred",e._0l)},f_getFilterProperties:function(){var t={},n=this.ed(),e
if(!n)return t
for(e in n)t[e]=n[e];return t},f_setFilterProperty:function(){var n=arguments,f=this,t=f.ed(),e,r,i
if(!t)t={}
for(e=0;e<n.length;){r=n[e++]
t[r]=i=n[e++]}f.f_setFilterProperties(t)},f_setFilterProperties:function(t){var r=this,i="",e,n
if(t)i=f_core.iv(t)
e={}
if(t)for(n in t)e[n]=t[n];r._2d=e
r._dd=i
r.P("filterExpression",i)
r.su(e)},ed:function(){var r=f_core,i,n=this,e=n._2d,t
if(e!==i)return e
t=r.D(n,"filterExpression")
e=null
if(t)e=r.rw(t)
n._dd=t
return n._2d=e},as:function(){this.ed()
return this._dd}}});