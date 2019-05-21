new f_class("f_scheduler",{extend:f_component,aspects:[fa_items,fa_selectionManager],statics:{w:function(t){var n=this,i=n._4l,e,r
if(!t)t=f_core.I(n)
if(i.H(t,!1))return!1
e=n
r=e._ac
if(!r._P)return!1
if(e._e3==!0)return!1
e._e3=!0
i.nn(e)
return!0},S:function(n){var t=this,r=t._4l,e
if(!n)n=f_core.I(t)
e=t
if(e._e3==!1)return!1
e._e3=!1
r.nn(e)
return!0},L:function(e){var n=this,f=n._4l,t,r,i
if(!e)e=f_core.I(n)
if(f.H(e))return!1
t=n
r=t._ac
if(!r._P)return!1
i=fa_selectionManager.w(e)
f.ie(t,!0,e,i)
return!0}},members:{f_scheduler:function(){this.f_super(arguments)
this._c0=1},f_finalize:function(){this.f_super(arguments)},f_addPeriod:function(e){e._8a=f_core.nf(e._8a)
e._4f=f_core.nf(e._4f)
this.is(this,e)},ef:function(){var o=f_scheduler,ri=f_resourceBundle,i=f_core,ot="f_scheduler_period",n="px",ce="h",fn="div",u=" ",ut,r=this,j=r._e8,k,E,s,A,v,b,z,R,T,C,p,e,f,a,tt,h,g,W,G,l,c,m,t,rr,d,en,U
if(!j)return
k=i.te(r,"columnNumber")
E=i.te(r,"tabIndex")
if(s=i.D(r,"dateBegin"))s=i.nf(s)
A=s.getDay()
v=new Date(s.getTime())
v.setTime(v.getTime()+k*24*3600*1000)
b=i.te(r,"minutesDayBegin")
z=i.te(r,"minutesDayEnd")
R=parseFloat(i.D(r,"minPerPx"))
T=i.te(r,"columnWidth")
C=r.ownerDocument.getElementById(r.id+"::periods")
j.sort(function(sn,eu){return sn._8a.getTime()-eu._8a.getTime()})
for(p=0;p<j.length;p++){e=j[p]
if(!e._8a||!e._4f)continue
f=e._8a
a=e._4f
tt=f.getDay()
if(a.getTime()>=s.getTime()&&f.getTime()<=v.getTime()){h=f.getHours()*60+f.getMinutes()
if(h<b)h=b
g=a.getHours()*60+a.getMinutes()
if(g>z)g=z
W=((h-b)*R).toFixed(0)
G=T*(tt-A)
l=(g-h)*R
c=T-1
if(tt-A==k-1)c-=1
m=ot
if(e._la)m+=u+e._la
t=ut
if(e._P){t=i.B(C,"a",{className:m,cssTop:W+n,cssLeft:G+n,cssWidth:c+n,cssHeight:l+n,href:"javascript:void(0)",title:e._E_})
if(E)t.tabIndex=E}else t=i.B(C,fn,{className:m,cssTop:W+n,cssLeft:G+n,cssWidth:c+n,cssHeight:l+n,title:e._E_})
rr=i.B(t,fn,{className:ot+"_div_lab",cssWidth:c+n,cssHeight:l+n})
e._1t=t
if(!(d=e._D4))d=""
en=f_dateFormat.FormatDate(f,"EEEE dd MMM yyyy")+u+ri.Get(o).f_get("FROM")+u+f.getHours()+ce+f.getMinutes()+u+ri.Get(o).f_get("TO")+u+a.getHours()+ce+a.getMinutes()+u+d
U=i.B(rr,"label",{textnode:e._i,cssWidth:c+n,cssHeight:l+n,className:e._la+"_label"})
fa_aria.SetElementAriaLabel(U,en)
e._uw=U
t._ac=e
t._4l=r
t.onclick=o.L
t.onmouseover=o.w
t.onfocus=o.w
t.onmouseout=o.S
t.onblur=o.S}}return r.f_super(arguments)},f_getItemDateBegin:function(e){return e._8a},f_getItemDateEnd:function(e){return e._4f},ae:function(){},tc:function(){return!1},nn:function(n){var f="_over",i="f_scheduler_period",r=" ",o=n._ac,t=i,e
if(o._la)e=o._la
if(e)t+=r+e
if(n._e3){t+=r+i+f
if(e)t+=r+e+f}if(n.className!=t)n.className=t},fh:function(e){return e._ac},fa_updateItemStyle:function(e){this.fa_updateElmentStyle(e._1t)},lt:function(n){var e,t
for(e=0;e<n.length;e++){t=n[e]
this.yb(t)}},yb:function(t){var n,e
t._uw=n
if(e=t._1t){t._1t=e._ac=e._4l=n
e.onmouseover=e.onmouseout=e.onclick=e.onfocus=e.onblur=e.onkeypress=null}},ou:function(e){return e.__},ol:function(t,e){t.__=e},ti:function(e){return e._ac._n},on:function(e,t){switch(e){case"selection":return;}this.f_super(arguments,e,t)},fo:function(e,t){switch(e){case"selection":return;}this.f_super(arguments,e,t)}}});