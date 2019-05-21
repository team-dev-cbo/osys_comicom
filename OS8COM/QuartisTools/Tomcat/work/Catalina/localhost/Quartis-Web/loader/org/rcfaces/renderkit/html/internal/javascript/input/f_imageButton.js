new f_class("f_imageButton",{extend:f_component,aspects:[fa_readOnly,fa_disabled,fa_tabIndex,fa_borderType,fa_images,fa_immediate,fa_value,fa_aria],members:{f_imageButton:function(){var e=this
e.f_super(arguments)
e.onselectstart=f_core.oo
e.EC()
e.Z("selection",e.hg)
e.Z("mousedown",e._lg)
e.Z("mouseup",e._7g)
e.Z("keydown",e._fv)
e.f_addEventListener("selectionPost",e.ld)
if(e.f_isDisabled())e.fa_updateDisabled(!0)},f_finalize:function(){var t,e=this
e.onselectstart=null
e._e7=e._l=t
e.f_super(arguments)
e._dl=t},sc:function(){var f="::image",o="input",a,e=this,t=e._dl,n,i,r
if(t!==a)return t
t=e
n=null
switch(e.tagName.toLowerCase()){case o:n=e
break;case"a":n=e.ownerDocument.getElementById(e.id+f)
break;case"ul":t=e.ownerDocument.getElementById(e.id+"::a")
break;default:if(n=e.ownerDocument.getElementById(e.id+f)){t=n
if(n.tagName.toLowerCase()!=o&&(i=e.ownerDocument.getElementById(e.id+"::input")))t=i
if(!(r=f_core.D(e,"tabIndex")))r=0
if(r>=0&&!t.tabIndex)t.tabIndex=r}}e._dl=t
e._e7=n
return t},J:function(){return this.sc()},EC:function(){var e=this
if(e.Cm()||e.f_getBorderType())e._eh()},hg:function(t){var e=this
e.po(!1)
if(!e._f)e.f_setFocus()
if(e.f_isReadOnly()||e.f_isDisabled())return!1
e.checked=!1
return e.tv(t)},po:function(t){var n,e=this
e._sc=e._1r=n
if(t!==!1)e._U()},tv:function(){return!0},ld:function(){return!0},_lg:function(){var e=this
if(e.f_isReadOnly()||e.f_isDisabled())return!1
e.la()
e._1r=!0
e._sc=!1
e._U()
if(!e._f)e.f_setFocus()
return!0},_7g:function(){var t,e=this
if(!e._1r)return!1
e._sc=e._1r=t
return!0},_hg:function(t){var e=this
if(e.H(t.f_getJsEvent(),!1))return!1
e.la()
e._e3=!0
e._U()
return!0},_h7:function(){var t,e=this
if(!e._e3)return!0
e._1r=e._e3=t
e._U()
return!0},_fv:function(n){var t=this,e=n.f_getJsEvent()
return t.H(e,!1)?!1:(e.keyCode==32&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey?t.f_fireEvent("selection"):!0)},_o6:function(){var e=this
e.la()
e._f=!0
e._U()
return!0},_to:function(){var e
this._f=e
this._U()
return!0},_U:function(){var c="_focus",s="_hover",u,e=this,t=null,n="",i,a,r,o,f
if(e.f_isDisabled()){t=e.f_getDisabledImageURL()
n="_disabled"}else if(e._1r){if(!(t=e.f_getSelectedImageURL()))t=e.f_getHoverImageURL()
n="_pushed"}else if(e.aC()){if(!(t=e.f_getSelectedImageURL()))t=e.f_getHoverImageURL()
i=n="_selected"
if(e._f)n+=c;else if(e._e3)n+=s}else if(e._e3){t=e.f_getHoverImageURL()
i=n
n=s}else if(e._f){i=n
n=c}a=e.fe(n)
if(e.className!=a)e.className=a
if(!t&&!(t=e.f_getImageURL()))t=f_env.M()+"/imageButton/blank.gif"
r=e.ud()
if(r&&r._Y){o=r._Y+n
if(e.ev()&&i!==u&&e!=fa_borderType.w())o=r._Y+i
if(r.className!=o)r.className=o}f=e.hy()
if(f&&t&&f.src!=t)f.src=t},aC:function(){return this.f_isSelected&&this.f_isSelected()},_eh:function(){var e=this
if(e._s_)return
e._s_=!0
e.Z("mouseover",e._hg)
e.Z("mouseout",e._h7)
e.Z("focus",e._o6)
e.Z("blur",e._to)},on:function(n,t){switch(n){case"blur":case"focus":case"keydown":case"keyup":case"keypress":var e
if(e=this.sc())t=e
break;}this.f_super(arguments,n,t)},fo:function(n,t){switch(n){case"blur":case"focus":case"keydown":case"keyup":case"keypress":var e
if(e=this.sc())t=e
break;}this.f_super(arguments,n,t)},rg:function(){this._eh()
this._U()},fa_updateDisabled:function(i){var n=fa_aria,t=this,e=t.sc(),r=e.tagName.toLowerCase()=="input"
if(i){t.fa_getTabIndex()
if(r)e.disabled=!0;else e.tabIndex=-1
e.hideFocus=!0
n.SetElementAriaDisabled(e,i)}else{if(r)e.disabled=!1;else e.tabIndex=t.fa_getTabIndex()
e.hideFocus=!1
e.removeAttribute(n.ARIA_DISABLED)}if(!t.tr)return
t._U()},fa_updateReadOnly:function(){},y_:function(){var n,t=this,e=t._l
if(e!==n)return e
e=doc.getElementById(t.id+"::text")
return t._l=e},hy:function(){var n,e=this,t=e._e7
if(t!==n)return t
e.sc()
return e._e7},f_setText:function(t){var e=this,n=e.y_()
if(!n)return
f_core.nr(n,t,e._3e)
e.P("text",t)},f_getText:function(){var e=this.y_()
return!e?null:f_core.at(e,!0)},f_setFocus:function(){var t=this,e
if(!f_core.nl(t))return
if(t.f_isDisabled())return
if(!(e=t.sc()))e=t
e.focus()},aa:function(){return this.sc()},f_fireEvent:function(r,a,o,n,s,f,u){var i=arguments,c="selection",e,t
e=this
if(r==c){if(e.f_isReadOnly()||e.f_isDisabled())return!1
if(!n)n=e.f_getValue()}t=e.f_super(i,r,a,o,n,s,f,u)
if(t!==!1&&r==c&&!u)t=e.f_super(i,r,a,o,n,s,f,"selectionPost")
return t},sb:function(){var t=null,e=this.hy()
return e==t?t:e.src}}});