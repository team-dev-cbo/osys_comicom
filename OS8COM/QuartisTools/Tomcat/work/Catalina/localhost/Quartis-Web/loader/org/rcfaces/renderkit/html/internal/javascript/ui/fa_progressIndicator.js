new f_aspect("fa_progressIndicator",{members:{f_finalize:function(){var r,e=this,t,n
e._o7=r
if(t=e._c8){e._c8=r
if(t.f_cancel)t.f_cancel()}if(n=e._hu){e._hu=r
window.clearTimeout(n)}},f_createProgressMonitor:function(){var r,e=this,t,n
if(t=e._c8){e._c8=r
if(!t.f_isCanceled())t.f_cancel()}n=f_progressIndicatorMonitor.f_newInstance(e)
return e._c8=n},f_getCurrentProgressMonitor:function(){return this._c8},f_setIndeterminate:function(t){var e
if(e=this.f_getProgressBar())e.f_setIndeterminate(t)},f_getValue:function(){var e=this.f_getProgressBar()
return!e?0:e.f_getValue()},c_:function(f,a,i,u,r){var c,e=this,t=!1,n,s,o
if(f!==c&&f!=e._cc){e._cc=f
t=!0}if(a!==c&&a!=e._yc){e._yc=a
t=!0}if(i!==c&&i!=e._6p){e._6p=i
t=!0}if(!t){if(r)e.nm()
return}if(u||r){e._av()
if(r)e.nm()
return}n=new Date().getTime()
if(!e._wn||n-e._wn>200){e._av()
return}if(s=e._hu)return
o=e
e._hu=window.setTimeout(function(){o._av()},200)},_av:function(){var r,e=this,t,n
e._wn=new Date().getTime()
t=e._cc
if(t===r)return
e._cc=r
if(n=e.f_getProgressBar())n.f_setValue(t)
e.hl(t,e._yc,e._6p)}}});