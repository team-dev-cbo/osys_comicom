new f_class("f_shellManager",{statics:{Get:function(){var t=f_shellManager,e
if(e=t._he)return e
e=new t()
return t._he=e},DocumentComplete:function(){var e=f_shellManager
e._0m=!0
var t
if(t=e._he)t.cm()},fy:function(){var i,r=f_core.es(document,"select"),n,t,e
for(n=0;n<r.length;n++){t=r[n]
e=t.__e
if(e===i){if(!(e=t.style.visibility))e="inherit"
t.__e=e}t.style.visibility="hidden"}},gE:function(){var r,n=f_core.es(document,"select"),t,e
for(t=0;t<n.length;t++){e=n[t]
if(e.__e){e.style.visibility=e.__e
e.__e=r}}},w:function(e){var f=f_core,r,n,t,i
if(window._rcfacesExiting)return!0
r=f_shellManager.Get()
if(!(n=r.f_getTopShell()))return!0
if(!e)e=f.I(this)
if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement
if(!t)return!0
i=r.f_getShellDecorator(n)
if(i.yi(t))return!0
i.f_setFocus()
return f.N(e)},GetScreenSize:function(r){var n=f_core,i=null,t=n.GetViewSize(i,r),e=n.GetDocumentSize(i,r)
return{width:t.width>e.width?t.width:e.width,height:t.height>e.height?t.height:e.height}},GetShell:function(e){var r=f_core,f=e,t,n
try{for(;e;){if(e._ee)return e._ee
if(e._rcfacesShellDecoratorIdentifier){t=r.rt(e)
return t.f_shellDecorator.w(e._rcfacesShellIdentifier)}n=e.parentNode
if(n&&n.nodeType!=9){e=n
continue}if(!(t=r.rt(e)))break
e=t.frameElement}}catch(i){r.Error(f_shellManager,"Can not find shell from root='"+f.id+"' and component='"+e.id+"'.",i)}return null},CloseShell:function(e,n){if(e instanceof f_event)e=e.f_getComponent()
if(e.nodeType!=1)return!1
var t=f_shellManager.GetShell(e)
if(!t)return!1
t.f_close(n)
return!0},Finalizer:function(){var e=f_shellManager,n,t
if(t=e._he){e._he=n
if(t._1a){t._1a=n
f_core.ee(document,"focus",e.w)}}e._0m=n},RegisterShellDecorator:function(n,r){var t=f_shellManager,e=t._t_
if(!e)t._t_=e={}
e[n]=r},S:function(){var e
f_shellManager._t_=e}},members:{f_shellManager:function(){this._nc=[]
this._do={}},f_finalize:function(){var n,e=this,t
e._nc=e._el=n
if(t=e._na)e._na=t._7r=n
e._6g()
if(e._1a)e.op()},bb:function(t){var n=f_shell,e=this
e._nc.fr(t)
if(!e._na&&t.f_getBackgroundMode())e._bu()
if(t.f_getStyle()&(n.PRIMARY_MODAL_STYLE|n.APPLICATION_MODAL_STYLE))e.b_()
e.f_getShellDecorator(t).f_showShell()},wm:function(r){var i=f_shell,n=this,e,t
r.fs(48)
e=n._nc
if(!e.it(r))return
if(!e.length||!(e[e.length-1].f_getStyle()&(i.PRIMARY_MODAL_STYLE|i.APPLICATION_MODAL_STYLE)))n.op()
if(n._na){for(t=0;t<e.length;t++)if(e[t].f_getBackgroundMode())return;n._0C()}},f_getTopShell:function(){var n=this._nc,t,e
for(t=n.length;t>0;){e=n[--t]
if(e.f_getStatus()==18)return e}return null},_bu:function(){var o=f_shellManager,r=f_core,c="iexplorer.6",e=this,f,a=e._nc,n,t,i
for(n=0;n<a.length;n++)if(f=a[n].f_getBackgroundMode())break;if(!f)return
if(r.K(c))o.fy()
e._na=t=document.createElement("div")
t._7r=e
t.className="f_shellManager_background f_shellManager_background_"+f
e._6g()
i=e
e.__9=function(){i._wv()}
r.nw(document.body,e.__9)
e.__9()
if(r.K(c))o.fy()
document.body.insertBefore(t,document.body.firstChild)},_wv:function(){var r="px",o=this
function c(){var f,i,n,e,t,a
if(f=o._na){i=f_shellManager.GetScreenSize()
f.style.width=i.width+r
f.style.height=i.height+r}if(n=o._nc)for(e=0;e<n.length;e++){t=n[e]
if(t.f_getStatus()!=18)continue
a=o.f_getShellDecorator(t)
a.mp()}}
c()
window.setTimeout(c,10)},_0C:function(){var n,t=this,e=t._na
if(!e)return
t._na=e._7r=n
e.parentNode.removeChild(e)
t._6g()
if(f_core.K("iexplorer.6"))f_shellManager.gE()},_6g:function(){var n,t=this,e=t.__9
if(!e)return
t.__9=n
f_core.wn(document.body,e)},b_:function(){if(this._1a)return
this._1a=!0
f_core.re(document,"focus",f_shellManager.w)},op:function(){var e
if(!this._1a)return
this._1a=e
f_core.ee(document,"focus",f_shellManager.w)},f_getShellDecorator:function(t){var n=this,r=n._do,i=t.f_getId(),e
if(e=r[i])return e
e=n.bg(t)
n.f_setShellDecorator(t,e)
return e},f_setShellDecorator:function(e,r){var n=e.f_getId(),t=this._do
if(t[n])throw new Error("Shell decorator is already setted !")
e.Eh(r)
t[n]=r},bg:function(e){var r=f_shellManager,i=e.f_getShellDecoratorName(),t,n
return((i&&r._t_)&&(t=r._t_[i]))&&(n=t.call(this,e))?n:(e.f_getStyle()&f_shell.LIGHT_CONTAINER_STYLE?f_divShellDecorator.f_newInstance(e):f_frameShellDecorator.f_newInstance(e))},iy:function(e){var n=this,t,r
if(!f_shellManager._0m){if(!(t=n._el))n._el=t=[]
t.push(e)
return}e.bv()
r=n
n.f_getShellDecorator(e).yd(function(i,e){e.fs(16)
e.Eb()
e.f_fillBody(i.wd())
e.yn()
e.fs(18)
r.bb(e)})},mb:function(e,f){var n=f_shellManager,r=f_core,i=this
if(e.f_getStatus()==0)e.fs(48)
if(e.f_getStatus()==16||e.f_getStatus()==18)e.fs(32)
if(e.f_getStatus()==32){try{i.f_getShellDecorator(e).f_hideShell()}catch(t){r.Error(n,"f_closeShell: f_hideShell throws exception self="+self,t)}try{e.s_()}catch(t){r.Error(n,"f_closeShell: f_preDestruction throws exception self="+self,t)}}if(e.f_getStatus()==33)try{i.f_getShellDecorator(e).ad()}catch(t){r.Error(n,"f_closeShell: f_destroyDecoration throws exception self="+self,t)}if(e.f_getStatus()==36)try{i.wm(e)}catch(t){r.Error(n,"f_closeShell: f_popShell throws exception self="+self,t)}if(e.f_getStatus()==48)try{e.ds()}catch(t){r.Error(n,"f_closeShell: postDestruction throws exception self="+self,t)}if(e.f_getStatus()==49){if(f!==!1)f=e.f_isNextShellCanceled()===!0
if(f!==!1)i.cm()}},cm:function(){var i=f_shell,f=this,t=f._el,e,n,r
if(!t)return
for(;t.length;){e=null
for(n=0;n<t.length;n++){r=t[n]
if(!e||r.__o>e.__o)e=r}if(!e)return
t.it(e)
f.iy(e)
if(e.f_getStyle()&(i.PRIMARY_MODAL_STYLE|i.APPLICATION_MODAL_STYLE))return}},hb:function(e){var t=this._do
return!!t[e.f_getId()]},ip:function(e,n,t){if(n=="instance"){this.f_setShellDecorator(e,t)
return}this.f_getShellDecorator(e).np(n,t)},g_:function(e,i,r,n,t){this.f_getShellDecorator(e).g_(e,i,r,n,t)},f_clearPendingShells:function(){var e
this._el=e}}});