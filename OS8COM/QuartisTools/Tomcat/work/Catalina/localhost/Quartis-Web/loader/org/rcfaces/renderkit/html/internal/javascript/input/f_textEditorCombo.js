new f_class("f_textEditorCombo",{extend:f_combo,members:{f_textEditorCombo:function(){var t=f_core,e=this
e.f_super(arguments)
e._B=t.D(e,"type")
e._9r=t.D(e,"for")
e.f_addEventListener("selection",e._1b)},ef:function(){var e=this
e.f_super(arguments)
f_textEditor.M(e._9r,e)},f_getType:function(){return this._B},_1b:function(t){var e=this,n=e._B
if(!n)return!1
f_textEditor.O(e._9r,e,t.f_getValue())
return!0}}});