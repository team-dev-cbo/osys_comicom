new f_class("f_comboGrid",{extend:f_keyEntry,aspects:[fa_dataGridPopup],statics:{w:function(e){var t=f_core,r=this,n=r._s9
if(!e)e=t.I(r)
if(e.timeStamp-fa_dataGridPopup.pl<100)return!1
if(n.H(e))return!1
if(n.f_isDisabled())return t.N(e)
n._Cn(e)
return t.N(e)},S:function(e){var t=f_core,n=this,r=n._s9
if(!e)e=t.I(n)
r._Cw(e)
return t.N(e)},L:function(e){var t=f_core,r=this,n=r._s9
if(!e)e=t.I(r)
if(n.H(e,!1))return!1
if(n.f_isDisabled())return t.N(e)
n._Eh(e)
return t.N(e)},F:function(e){var t=f_core,n=this,r=n._s9
if(!e)e=t.I(n)
r._w5(e)
return t.N(e)}},members:{f_comboGrid:function(){var n=f_comboGrid,t=this,e
t.f_super(arguments)
t._t3=e=t.ownerDocument.getElementById(t.id+"::button")
e._s9=t
e.onmousedown=n.w
e.onmouseup=n.S
e.onmouseover=n.L
e.onmouseout=n.F},f_finalize:function(){var n,t=this,e
if(e=t._t3){t._t3=e._s9=n
e.onmousedown=e.onmouseup=e.onmouseover=e.onmouseout=null}t.f_super(arguments)},dl:function(){return this.ownerDocument.getElementById(this.id+"::input")},_Cn:function(n){var e=this,t
e._u_=!0
e.h_()
if(t=e.oh()){e.du(n)
return}e.f_setFocus()
e.w_(n)},_Cw:function(){var e=this
if(!e._u_)return
e._u_=!1
e.h_()},_Eh:function(){this._v1=!0
this.h_()},_w5:function(){var e=this
if(!e._v1)return
e._u_=e._v1=!1
e.h_()},h_:function(){var t=this,n=t._t3,e
if(!n)return
e="f_comboGrid_button"
if(t.f_isDisabled());else if(t._u_)e+=" "+e+"_selected";else if(t._v1)e+=" "+e+"_hover"
if(n.className!=e)n.className=e},w_:function(t,e){this.nd(t,null,e)},du:function(e){this.hh(e)},H:function(t,n,e){if(this.oh()){if(!e)e=0
e|=4}return this.f_super(arguments,t,n,e)},sy:function(t){var n=this,e=t.f_getJsEvent()
if(e.cancelBubble)return!0
switch(e.keyCode){case 40:case 38:case 14:case 13:case f_key.VK_ESPACE:if(n.oh())return f_core.N(e);}return n.f_super(arguments,t)},sp:function(r){var t=this,n=r.f_getJsEvent(),i,e
if(n.cancelBubble||t.f_isDisabled())return!0
if(i=t.oh()){t.du(n)
return!0}if(!(e=t.f_super(arguments,r)))return e
switch(n.keyCode){case 40:case 38:t.w_(n)
return f_core.N(n);}return e},ty:function(t){var r,e=this,n
return(n=e.oh())?r:e.f_super(arguments,t)}}});