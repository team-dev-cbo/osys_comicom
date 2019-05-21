new f_class("f_customButton",{extend:f_component,aspects:[fa_readOnly,fa_disabled,fa_borderType,fa_value],statics:{w:function(e){var t=this,n=t.f_link
if(!e)e=f_core.I(t)
return n.H(e)?!1:n._lg()},S:function(e){var t=this,n=t.f_link
if(!e)e=f_core.I(t)
return n.H(e,!1)?!1:n._7g()}},members:{f_customButton:function(){var f=f_core,o="selection",e,n,i,t,r
e=this
e.f_super(arguments)
e.fg(o,!1)
n=!1
if(i=e.ud()){n=!0
e._eh()}if(t=f.eo(e,"a",!0)){e._t4=t
t.href=f.O
if(e.tabIndex)t.tabIndex=e.tabIndex}if(n)e.Z(o,e._g7)
e._t7=e.tabIndex
if(e.f_isDisabled()){r=t?t:e
r.tabIndex=-1
r.hideFocus=!0}},f_finalize:function(){var i,e=this,r,n,t
e._t7=i
if(r=e._2h){e._2h=i
for(n=0;n<r.length;n++){t=r[n]
t.onmousedown=t.onmouseup=null
t.f_link=i}}e._t4=e._e3=e._s_=e._1r=e._sc=i
e.f_super(arguments)},_7D:function(o){var f=f_customButton,n=this,r=n._2h,i=n.getElementsByTagName(o),t,e
for(t=0;t<i.length;t++){e=i[t]
e.onmousedown=f.w
e.onmouseup=f.S
e.f_link=n
if(!r)n._2h=r=[]
r.push(e)}},D_:function(t){var e=this
return e.f_isReadOnly()||e.f_isDisabled()?!1:e.f_super(arguments,t)},_g7:function(){this.checked=!1
return!0},_lg:function(){var e=this
if(e.f_isReadOnly()||e.f_isDisabled())return!1
e.la()
e._1r=!0
e._sc=!1
e._U()
if(!e._f)e.f_setFocus()
return!0},_7g:function(){var t,e=this
if(!e._1r)return!1
e._sc=e._1r=t
e._U()
return!0},_hg:function(){var e=this
e.la()
e._e3=!0
e._U()
return!0},_h7:function(){var t,e=this
e._1r=e._e3=t
e._U()
return!0},_o6:function(){var e=this
e.la()
e._f=!0
e._U()
return!0},_to:function(){var t,e=this
if(e.ev())e._e3=t
e._f=t
e._U()
return!0},_U:function(){var f="_focus",o="_hover",a,e=this,t="",r,n,i
if(e.f_isDisabled())t="_disabled";else if(e._1r)t="_pushed";else if(e.f_isSelected&&e.f_isSelected()){r=t="_selected"
if(e._f)t+=f;else if(e._e3)t+=o}else if(e._e3){r=t
t=o}else if(e._f){r=t
t=f}if(n=e.ud()){i=n._Y+t
if(e.ev()&&r!==a&&e!=fa_borderType.w())i=n._Y+r
if(n.className!=i)n.className=i}},_eh:function(){var e=this
if(e._s_)return
e._s_=!0
e.Z("mouseover",e._hg)
e.Z("mouseout",e._h7)
e.Z("focus",e._o6)
e.Z("blur",e._to)},on:function(r,t){var n=this,e
if(e=n._t4)switch(r){case"blur":case"focus":t=e
return;}n.f_super(arguments,r,t)},fo:function(r,t){var n=this,e
if(e=n._t4)switch(r){case"blur":case"focus":t=e
return;}n.f_super(arguments,r,t)},fa_updateDisabled:function(n){var e=this,t=e._t4?e._t4:e
if(n){t.tabIndex=-1
t.hideFocus=!0}else{t.tabIndex=e._t7
t.hideFocus=!1}if(!e.tr)return
e._U()},fa_updateReadOnly:function(){},vu:function(){},ef:function(){this._U()
this.f_super(arguments)},f_setFocus:function(){var t=this,e=t._t4
if(!e)e=t
e.focus()},gs:function(n){var e=this,t
if(e.f_isReadOnly()||e.f_isDisabled())return!1
t=e.f_fireEvent("selection",n)
e.f_setFocus()
return t}}});