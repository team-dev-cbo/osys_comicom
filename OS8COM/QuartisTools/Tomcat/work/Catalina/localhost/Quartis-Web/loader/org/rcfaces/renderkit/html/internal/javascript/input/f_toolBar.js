new f_class("f_toolBar",{extend:f_component,members:{f_finalize:function(){var e
this._1u=e
this.f_super(arguments)},ef:function(){this.f_super(arguments)
this._0d()},f_documentComplete:function(){this.f_super(arguments)
this._0d()},_6C:function(){var i=this,e,r,t,n
if(e=i._1u)return e
i._1u=e=[]
r=i.getElementsByTagName("li")
for(t=0;t<r.length;t++){n=r[t]
if(!f_core.D(n,"separator"))continue
e.push(n)}return e},_0d:function(){var o="none",u=this._6C(),a,r,e,f,i,c,s,t,n
for(a=0;a<u.length;a++){r=u[a]
e=r.style
if(!(f=r.nextSibling)){e.display=o
continue}if(!(i=r.previousSibling)){e.display=o
continue}if(u.cf(i)){e.display=o
continue}c=(r.offsetHeight+i.offsetHeight+f.offsetHeight)/3
s=r.offsetTop
t=i.offsetTop-s
if(t>0)t=0;else t-=t%(c/2)
n=f.offsetTop-s
if(n<0)n=0;else n-=n%(c/2)
if(t<0){e.display=o
continue}if(n>0){e.display=o
continue}e.display="block"}}}});