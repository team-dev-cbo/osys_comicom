new f_class("f_itemsList",{extend:f_component,aspects:[fa_readOnly,fa_disabled,fa_items,fa_subMenu],statics:{w:function(){return this._T}},members:{f_itemsList:function(){var e=this
e.f_super(arguments)
e._3v=0
e._tn={}},f_finalize:function(){var e
this._tn=e
this.f_super(arguments)},ir:function(){this.ma()
this.f_super(arguments)},lt:function(){},on:function(e,t){switch(e){case"dblclick":case"selection":case"blur":case"focus":case"keydown":case"keypress":case"keyup":return;}this.f_super(arguments,e,t)},fo:function(e,t){switch(e){case"dblclick":case"selection":case"blur":case"focus":case"keydown":case"keypress":case"keyup":return;}this.f_super(arguments,e,t)},bf:function(u,o){var c=f_itemsList,s="selection",t=this,f=o._e5,e={},i,r,n
if(f==64){e._e5=f
e._T="#SEP#"+t._3v++
e._n=e._T
e.toString=c.w
t.is(t,e)
return e}else if(!f)f=1
e._e5=f
i=t.f_findComponent(u)
e={}
e._T=i.id
e._n=o._n
e._s=o._s
if(o._7f===!1)t.f_setItemVisible(e,!1)
if(o._y)t.uf(e,o._y)
e.toString=c.w
t.is(t,e)
t._tn[e._n]=i
switch(f){case 1:case 2:case 8:r=t
n=function(a){return r.__s(a)}
i.f_addEventListener(s,n)
break;case 4:r=t
n=function(a){return r._0_(a)}
i.f_addEventListener(s,n)
break;case 16:case 32:break;default:;}return e},__s:function(r){var f,n=this,e,i=r.f_getComponent(),e=n._is(i),t
if(e===f)return!0
t=n.f_getItemByValue(e,!0)
n.f_fireEvent("selection",r.f_getJsEvent(),t,e)
return!1},_is:function(n){var r,t=this._tn,e
for(e in t)if(t[e]==n)return e;return r},_0_:function(e){var o,n=this,i=e.f_getValue(),f=e.f_getComponent(),r=n._is(f),t
if(r===o)return!0
t=n.f_getItemByValue(r,!0)
n.f_fireEvent("selection",e.f_getJsEvent(),t,i)
return!1},fa_updateDisabled:function(){var n=this,i=n.f_isDisabled(),r=n.f_listItemChildren(),e,t
for(e=0;e<r.length;e++){if(!(t=n._tn[r[e]]))continue
t.f_setDisabled(i)}},fa_updateReadOnly:function(){var n=this,i=n.f_isReadOnly(),r=n.f_listItemChildren(),e,t
for(e=0;e<r.length;e++){if(!(t=n._tn[r[e]]))continue
t.f_setReadOnly(i)}},fa_updateItemStyle:function(t){var n=this,e=n.f_getItemComponent(t)
if(!e)return
e.f_setDisabled(n.f_isItemDisabled(t))
e.f_setVisible(n.f_isItemVisible(t))},f_getItemComponent:function(e){var n=this,t=e
if(typeof e=="object")t=n.f_getItemValue(e)
return n._tn[t]}}});