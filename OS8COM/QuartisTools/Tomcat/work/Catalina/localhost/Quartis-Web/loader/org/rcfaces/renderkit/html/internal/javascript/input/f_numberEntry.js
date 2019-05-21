new f_class("f_numberEntry",{extend:f_compositeNumEntry,members:{f_numberEntry:function(){this.f_super(arguments)
var e
if(e=this.oC("D"))e._wd=!0},og:function(e){e._vr=f_core.te(e,"auto")
if(e._vr<1)e._vr=1},f_getNumber:function(h){var u=parseInt,r,s=-1,c=0,l=this._t2,i,t,a,f,o,e,n
for(i=0;i<l.length;i++){t=l[i]
a=t._B
f=t._tt
o=t._4t
e=r
switch(h){case"default":e=t._at
break;default:e=u(t.value,10)
if(isNaN(e)||f!==r&&e<f||o!==r&&e>o)e=r;}switch(a){case"I":s=e
break;case"D":c=t.value
break;}}if(s===r)return null
n=s
if(c)n=parseFloat(n+"."+c);else n=u(n,10)
return n},f_setNumber:function(r){var a=Math.floor,c=this,o=c._t2,n,t,f,i,e
for(n=0;n<o.length;n++){t=o[n]
f=t._B
i=parseInt(t.maxLength,10)
e=-1
switch(f){case"I":e=a(r)
break;case"F":e=r-a(r)
e!=0
break;}if(e<0)continue
e=c.nu(t,e,i)
if(e!=t.value)t.value=e}},f_getMinNumber:function(){var n,t=this,e=t._E7
if(e!==n)return e
if(e=f_core.D(t,"minNumber")){if(e.indexOf(".")>=0)e=parseFloat(e);else e=parseInt(e,10)}else e=null
return t._E7=e},f_getMaxNumber:function(){var n,t=this,e=t._1C
if(e!==n)return e
if(e=f_core.D(t,"maxNumber")){if(e.indexOf(".")>=0)e=parseFloat(e);else e=parseInt(e,10)}else e=null
return t._1C=e},ir:function(){var e=this,t=e.f_getNumber()
e.P("value",t)
e.f_super(arguments)},os:function(){var t=this,n=f_messageContext.Get(t),e
if(!n)return!0
e=null
t.f_getNumber()
if(!e)return!0
t.mn(f_numberEntry,e)
return!1},nu:function(n,r){var e=String(r),t=n._vr-e.length
if(t<1)return e
if(n._wd){for(;t;t--)e+="0";return e}for(;t;t--)e="0"+e;return e}}});