new f_class("f_abstractElementDnDInfo",{extend:f_dragAndDropInfo,members:{_lm:0,_m_:0,f_abstractElementDnDInfo:function(e){this.f_super(arguments,e)},f_finalize:function(){var n,t=this,e
if(e=t._e){t._e=n
e.parentNode.removeChild(e)}t.f_super(arguments)},f_start:function(){var e=this,t=e.lE()
e._e=t
e.da(t)
e.rd(0)
e.f_super(arguments)},lE:function(){var e=document.createElement(this.cy()),t=document.body
t.insertBefore(e,null)
f_core.bl(e)
return e},cy:function(){return"div"},da:function(){},f_end:function(){var n,t=this,e
if(e=t._e){t._e=n
e.parentNode.removeChild(e)}t.f_super(arguments)},td:function(e,t){this._lm=e
this._m_=t},f_updateTarget:function(f,e,o,r,i,n){var t=this
if(t._E0!==e){t._E0=e
t.rd(e)}t.f_super(arguments,f,e,o,r,i,n)},f_move:function(n,t){var e=this
e.f_super(arguments,n,t)
if(e._0h==n&&e._h0==t)return
e._0h=n
e._h0=t
e.mc()},mc:function(e){if(!e&&!(e=this.cd()))return
var t=this
f_core.rt(e).setTimeout(function(){if(window._rcfacesExiting)return!1
t._E2(e)
t=null},10)},_E2:function(r){var u=f_core,c="px",s=null,e=this,l=r.offsetWidth,h=r.offsetHeight,o=u.GetViewSize(s,r.ownerDocument),a=u.ln(s,r.ownerDocument),f=a.x,i=a.y,v=o.width,g=o.height,t=e._0h+e._lm,n=e._h0+e._m_
if(t+l>f+v)t=e._0h-l
if(t<f)t=f
if(n+h>i+g)n=e._h0-h
if(n<i)n=i
if(e._wC!==t||e._Cb!==n){e._wC=t
e._Cb=n
r.style.left=t+c
r.style.top=n+c}},rd:function(r){var t=this,n=t.cd(),e
if(!n)return
n.className=e=t.ew(r)
t.mc()},ew:function(n){var f="_",r=" ",e=this.lv(),i="f_elementDnDInfo",t=i
if(e)t+=r+e
if(n>=0){t+=r+i+f+n
if(e)t+=r+e+f+n}return t},lv:function(){return null},cd:function(){return this._e},ah:function(r,o,t,s,n,f){var c,a=null,e,i
if(f&&(e=f[r]))return e
if(n!==c&&n!==a){if(t.f_getItemClientData&&(e=t.f_getItemClientData(n,r)))return e
if((o&&t.f_getElementLabel)&&(e=t.f_getElementLabel(n)))return e
if((t.f_getRowValuesSet&&(i=t.f_getRowValuesSet(n)))&&(e=i[r]))return e}return t.f_getClientData&&(e=t.f_getClientData(r))?e:((o&&t.f_getText)&&(e=t.f_getText())?e:a)}}});