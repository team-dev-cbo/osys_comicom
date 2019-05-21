new f_class("f_tab",{extend:f_card,members:{f_tab:function(){var t=f_core,e=this,r,i,n
e.f_super(arguments)
if(r=t.D(e,"tabbedPaneId")){i={_T:e.id,_cy:!0,_n:t.D(e,"value"),__:t.Q(e,"selected",!1),_s:t.Q(e,"disabled",!1),_l:t.D(e,"text"),_3e:t.D(e,"accessKey"),_h:t.D(e,"imageURL"),_2e:t.D(e,"selectedImageURL"),_5t:t.D(e,"hoverImageURL"),_e0:t.D(e,"disabledImageURL")}
n=t.GetElementByClientId(r,e.ownerDocument,!0)
n.hn(i)}},f_finalize:function(){var e
this._dy=e
this.f_super(arguments)},f_getText:function(){return this._l},f_setText:function(t){var e=this,n
if(t==e._l)return
e._l=t
e.P("text",t)
if(n=e._X)n.Ei(e,t)},f_setImageURL:function(n){var t=this,e
t._h=n
if(e=t._X)e.Ch(t,n)},f_setDisabledImageURL:function(n){var t=this,e
t._e0=n
if(e=t._X)e.hC(t,n)},f_setHoverImageURL:function(n){var t=this,e
t._5t=n
if(e=t._X)e.tE(t,n)},f_setSelectedImageURL:function(n){var t=this,e
t._2e=n
if(e=t._X)e.Cv(t,n)},f_setDisabled:function(e){var t=this,n
if(e!==!1)e=!0
if(t._s==e)return
t._s=e
if(n=t._X)n.bp(t,e)
t.P("disabled",e)},f_isDisabled:function(){return this._s},pb:function(c,a,f,i,u,s,r,n,o){var e=this,t
e.hn(c,a)
e._l=f
e._3e=i
e._s=u
e._h=s
e._e0=r
e._5t=o
e._2e=n
t=e.ownerDocument.createElement("div")
t.className="f_tabbedPane_tab_mask"
e._dy=t
e.insertBefore(t,e.firstChild)},f_getAccessKey:function(){return this._3e},gs:function(n){var t=this,e
if(e=t._X)e.wC(t,n)},ge:function(){var e=this
if(e.f_isDisabled())return!1
e._X.f_selectCard(e,!1)
return e.f_super(arguments)},f_forceChildVisibility:function(){return!1}}});