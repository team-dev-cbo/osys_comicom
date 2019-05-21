new f_class("f_itemsToolFolder",{extend:f_component,aspects:[fa_readOnly,fa_disabled,fa_items,fa_subMenu],statics:{w:function(){return this._T}},members:{f_itemsToolFolder:function(){var e=this
e.f_super(arguments)
e._3v=0
e._tn={}},f_finalize:function(){var t,e=this,n
e._tn=t
if(n=e._du){e._du=e._l_=t
n.mE(e._op)
e._op=t}e.f_super(arguments)},ef:function(){return this.f_super(arguments)},ir:function(){this.ma()
this.f_super(arguments)},lt:function(){},on:function(e,t){switch(e){case"dblclick":case"selection":case"blur":case"focus":case"keydown":case"keypress":case"keyup":return;}this.f_super(arguments,e,t)},fo:function(e,t){switch(e){case"dblclick":case"selection":case"blur":case"focus":case"keydown":case"keypress":case"keyup":return;}this.f_super(arguments,e,t)},bf:function(v,i){var h=f_itemsToolFolder,g="selection",e=this,r=i._e5,t={},n,c,a,u,s,o,f
if(r==64){t._e5=r
t._T="#SEP#"+e._3v++
t._n=t._T
t.toString=h.w
e.is(e,t)
return t}else if(!r)r=1
t._e5=r
n=fa_namingContainer.FindComponent(e,v,!1,!1)
if((c=!f_class.w(n))&&!(a=e._du)){e._du=a=e.f_getClass().f_getClassLoader()
e._l_={}
u=e
e._op=s=function(n){return u._ub.call(u,n)}
a.vE(s)}t={_T:n.id,_n:i._n,_s:i._s,_nn:i._nn}
if(i._7f===!1)e.f_setItemVisible(t,!1)
if(i._y)e.uf(t,i._y)
t.toString=h.w
e.is(e,t)
e._tn[t._n]=n
switch(r){case 1:case 2:case 8:if(c)e._l_[n.id]=r;else{o=e
f=function(l){return o.__s(l)}
n.f_addEventListener(g,f)}break;case 4:if(c)e._l_[n.id]=r;else{o=e
f=function(l){return o._0_(l)}
n.f_addEventListener(g,f)}break;case 16:case 32:break;default:;}return t},_ub:function(n){var a="selection",f=this,o=f._l_,r,t,e
if(!o)return
if(!(r=o[n.id]))return
delete o[n.id]
switch(r){case 1:case 2:case 8:t=f
e=function(i){return t.__s(i)}
n.f_addEventListener(a,e)
break;case 4:t=f
e=function(i){return t._0_(i)}
n.f_addEventListener(a,e)
break;}},__s:function(i){var o,n=this,t,f=i.f_getComponent(),t=n._is(f),e,r
if(t===o)return!0
e=n.f_getItemByValue(t,!0)
n._ep=e&&e._nn
r=e&&e._nn?1024:0
n.f_fireEvent("selection",i.f_getJsEvent(),e,t,null,r)
return!1},_is:function(n){var r,t=this._tn,e
for(e in t)if(t[e]==n)return e;return r},_0_:function(r){var a,t=this,f=r.f_getValue(),o=r.f_getComponent(),i=t._is(o),e,n
if(i===a)return!0
e=t.f_getItemByValue(i,!0)
t._ep=e&&e._nn
n=e&&e._nn?1024:0
t.f_fireEvent("selection",r.f_getJsEvent(),e,f,null,n)
return!1},fa_updateDisabled:function(){var n=this,i=n.f_isDisabled(),r=n.f_listItemChildren(),e,t
for(e=0;e<r.length;e++){if(!(t=n._tn[r[e]]))continue
t.f_setDisabled(i)}},fa_updateReadOnly:function(){var n=this,i=n.f_isReadOnly(),r=n.f_listItemChildren(),e,t
for(e=0;e<r.length;e++){if(!(t=n._tn[r[e]]))continue
t.f_setReadOnly(i)}},fa_updateItemStyle:function(t){var n=this,e=n.f_getItemComponent(t)
if(!e)return
e.f_setDisabled(n.f_isItemDisabled(t))
e.f_setVisible(n.f_isItemVisible(t))},f_getItemComponent:function(e){var n=this,t=e
if(typeof e=="object")t=n.f_getItemValue(e)
return n._tn[t]},f_isImmediate:function(){return this._ep}}});