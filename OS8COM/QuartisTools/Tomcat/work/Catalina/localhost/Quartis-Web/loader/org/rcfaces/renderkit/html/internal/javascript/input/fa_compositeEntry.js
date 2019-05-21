new f_aspect("fa_compositeEntry",{w:function(e){var n=f_core,r=this,t=r._lu
if(!e)e=n.I(r)
return t.H(e)?!1:(t.f_isDisabled()||t.f_isReadOnly()?n.N(e):(t._Cr(e,r)?!0:n.N(e)))},S:function(e){var n=f_core,r=this,t=r._lu
if(!e)e=n.I(r)
return t.H(e,!1)?!1:(t.f_isDisabled()||t.f_isReadOnly()?n.N(e):(t._w4(e,r)?!0:n.N(e)))},L:function(e){var r=f_core,n=this,t=n._lu
if(!e)e=r.I(n)
return t.H(e,!1)?!1:(t.f_isDisabled()||t.f_isReadOnly()?r.N(e):t._rE(n,e))}},{fa_compositeEntry:function(){var i=fa_compositeEntry,o=f_core,r=this,n=r.getElementsByTagName("input"),t,e,f
r._t2=n
for(t=0;t<n.length;t++){e=n[t]
if(f=o.D(e,"separators"))n[t-1]._1u=f
e._B=o.D(e,"type")
if(t+1<n.length){e._0i=n[t+1]
n[t+1]._1_=e}e._lu=r
e.onkeypress=i.S
e.onblur=i.L
e.onkeydown=i.w
if(typeof r.og=="function")r.og(e)}},f_finalize:function(){var i,n=this,r,t,e
if(r=n._t2){n._t2=i
for(t=0;t<r.length;t++){e=r[t]
if(typeof n.mw=="function")n.mw(e)
e._0i=e._1_=e._lu=i
e.onkeypress=e.onkeydown=e.onblur=null}}},oC:function(i){var r=null,n=this._t2,e,t
if(!n)return r
for(e=0;e<n.length;e++){t=n[e]
if(t._B==i)return t}return r},_Cr:function(u,e){var i=f_core,s="function",r=this,a=u.keyCode,c=i.li(e),t,f,n,o
switch(a){case 37:case 36:case 8:if(!c[0]&&!c[1]){if(t=e._1_){f=!1
if(a==36){for(;t._1_;t=t._1_);i.ai(t,0)
f=0}else if(a==37&&u.ctrlKey){i.ai(t,0)
f=0}else f=t.value.length
t.focus()
if(f!==!1&&i.K())i.ai(t,f)}return!1}break;case 35:case 39:if(c[0]==c[1]&&c[0]==e.value.length){if(n=e._0i){if(a==35){for(;n._0i;n=n._0i);o=n.value.length
i.ai(n,o)}else if(a==39&&u.ctrlKey){o=n.value.length
i.ai(n,o)}n.focus()}return!1}break;case 38:if(typeof r.gu!=s)break
return r.gu(e,1,e._tt,e._4t,e._1o);case 40:if(typeof r.gu!=s)break
return r.gu(e,-1,e._tt,e._4t,e._1o);case 33:if(typeof r.ih!=s||isNaN(e._4t))break
return r.ih(e,e._4t,e._tt,e._4t,e._1o);case 34:if(typeof r.ih!=s||isNaN(e._tt))break
return r.ih(e,e._tt,e._tt,e._4t,e._1o);}return!0},_w4:function(n,o){var r=f_core,c=this,t=n.keyCode,a=n.charCode,f,e,i
if(!a)f=String.fromCharCode(t);else f=String.fromCharCode(a)
if(t==9)return!0
if(r.K()||r.rf()){if(t<32)return!0}else if(r.nt()){if(t>0){switch(t){case 38:case 40:case 33:case 34:return!1;}return!0}t=a}e=c.sd(o,f,n)
if(e===null){e=!1
i=o._1u
if(i&&i.indexOf(f)>=0)e=c._0w(o,!0,n)}return e?!0:r.N(n)},_rE:function(e){this.ml(e,!0)
return!0},_0w:function(e,n){this.ml(e)
if(n){var t
if(t=e._0i)t.focus()
return!1}return!0},fa_updateReadOnly:function(){var r=this,n=r._t2,i=r._l0,e,t
for(e=0;e<n.length;e++){t=n[e]
t.readOnly=i}},fa_updateDisabled:function(){var r=this,n=r._t2,i=r._s,e,t
for(e=0;e<n.length;e++){t=n[e]
t.disabled=i}},aa:function(){var e=this._t2
return!e?!1:e[0]},f_setFocus:function(){var r=this,n=r._t2,e,t
if(!n)return!1
for(e=0;e<n.length;e++){t=n[e]
try{t.focus()
return!0}catch(i){f_core.Error(fa_compositeEntry,"f_setFocus: Exception while calling focus() of '"+t.id+"' component='"+r.id+"'.",i)}}return!1}},fa_disabled,fa_readOnly);