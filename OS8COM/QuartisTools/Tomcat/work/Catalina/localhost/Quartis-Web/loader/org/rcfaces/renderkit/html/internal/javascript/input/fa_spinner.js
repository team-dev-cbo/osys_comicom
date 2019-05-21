new f_aspect("fa_spinner",{statics:{Finalizer:function(){var t=fa_spinner,n,e=t.O
if(!e)return
t.O=n
window.clearInterval(e)},w:function(t){var i=fa_spinner,r=f_core,e=this,n=e._ct
if(!t)t=r.I(e)
if(n.H(t,!1)||n.f_isDisabled())return!1
if(!r.gm(t)&&e._o8){e._o8=!1
i.F(null)}e._e3=!0
n.ui(e)
if(e._o8)i.F(e)
return!0},S:function(){var n,e=this,t=e._ct
if(!e._e3)return!0
e._e3=n
t.ui(e)
fa_spinner.F(null)
return!0},L:function(n){var e=this,t=e._ct
if(!n)n=f_core.I(e)
if(t.H(n)||t.f_isDisabled())return!1
e._o8=t._0y=!0
t.ui(e)
t.vl(e._ca,n)
fa_spinner.F(e,!0)
return!0},F:function(i,r){var t=fa_spinner,n=window,f,e
if(e=t.O){n.clearInterval(e)
e=t.$=f}if(i){t.$=r
e=n.setInterval(function(){t.V(i)},r?500:100)}t.O=e},V:function(e){var n=fa_spinner
if(!e._e3||!e._o8)return
var t=e._ct
if(t.H(null)||t.f_isDisabled())return
t.vl(e._ca,null)
if(n.$)n.F(e)},M:function(){var n,t=this,e=t._ct
if(!t._o8)return
t._o8=n
e.ui(t)
if(e._0y){e._0y=n
e.f_setFocus()}}},members:{fa_spinner:function(){var e=this,t=e.ownerDocument
e._gm=f_core.Q(e,"cycle",!1)
e._ut=t.getElementById(e.id+"::up")
e._tm(e._ut,"_up",1)
e._us=t.getElementById(e.id+"::down")
e._tm(e._us,"_down",-1)
e.Z("keydown",e._3w)
e.Z("keyup",e._ba)
e.Z("keypress",e._0E)},f_finalize:function(){var n,e=this,r,t
if(r=e._ut){e._ut=n
e._dm(r)}if(t=e._us){e._us=n
e._dm(t)}},DD:function(){this._aD=!0},_0E:function(c){var r=f_core,n=this,i=c.f_getJsEvent(),a,e,o,t,f
if(a=n._ge(c)){n.vl(a._ca,i)
return}e=i.keyCode
o=i.charCode
if(r.K()||r.rf()){if(e<32)return!0}else if(r.nt()){if(e>0)return!0
e=o}if(e==44||e==46){t=n.f_getValue()
return!(t.indexOf(".")>=0||t.indexOf(",")>=0)}if(e==45){t=n.f_getValue()
f=r.li(n.J())
return!(f[0]>0||t.indexOf("-")>=0)}return!!(e>=48&&e<=58)},_3w:function(n){var t=this,e=t._ge(n)
if(!e)return
e._dh=!0
t.ui(e)},_ba:function(r){var n,t=this,e=t._ge(r)
if(!e)return
e._dh=n
t.ui(e)},_ge:function(n){var e=this,t=n.f_getJsEvent()
switch(t.keyCode){case 40:return e._us;case 38:return e._ut;}return null},_dm:function(e){var t
e._ct=t
e.onmouseover=e.onmouseout=e.onmousedown=e.onmouseup=null},_tm:function(e,r,n){var t=fa_spinner
e._ca=n
e._ct=this
e._ab=r
e.onmouseover=t.w
e.onmouseout=t.S
e.onmousedown=t.L
e.onmouseup=t.M},ui:function(e){var r="_pushed",i=this,t,n
if(i.f_isDisabled())t="_disabled";else if(e._dh)t=r;else if(e._e3)if(e._o8)t=r;else t="_hover"
n=i.ue()+e._ab
if(t)n+=" "+n+t
if(e.className==n)return
e.className=n},f_getMinimum:function(){var n,t=this,e=t._6E
if(e===n){e=f_core.D(t,"minimum")
t._6E=e=e?parseFloat(e):null}return e},f_getMaximum:function(){var n,t=this,e=t._oE
if(e===n){e=f_core.D(t,"maximum")
t._oE=e=e?parseFloat(e):null}return e},f_getStep:function(){var n,e=this,t=e._1o
if(t===n)e._1o=f_core.D(e,"step")
return t},wl:{before:function(){var e=this,n,t
if(!e.tr)return
if(n=e._ut)e.ui(n)
if(t=e._us)e.ui(t)}}}});