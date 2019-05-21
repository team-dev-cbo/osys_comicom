new f_class("f_checkButton",{extend:f_button,members:{f_finalize:function(){var e
this._i=e
this.f_super(arguments)},dl:function(){return this.ownerDocument.getElementById(this.id+"::input")},dp:function(){var n,t=this,e=t._i
if(e!==n)return e
e=t.ownerDocument.getElementById(t.id+"::text")
return t._i=e},f_isSelected:function(){var e=this.J()
return!!e.checked},f_setSelected:function(e){e=e!==!1
var t=this.J()
if(t.checked==e)return
t.checked=e},f_getText:function(){var t=this,e=t.dp()
return!e?t.f_super(arguments):f_core.at(e)},f_setText:function(e){var t=this,n=t.dp()
if(!n){t.f_super(arguments,e)
return}if(e==t.f_getText())return
f_core.nr(n,e)
t.P("text",e)},ir:function(){this.cu()
this.f_super(arguments)},cu:function(){var t=this,e=t.J()
t.P("selected",e.checked?e.value:"")},f_getValue:function(){return this.f_isSelected()},f_setValue:function(e){this.f_setSelected(!!e)},gn:function(){return this}}});