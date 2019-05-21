new f_class("f_textEditorImageButton",{extend:f_imageButton,aspects:[fa_selected],members:{f_textEditorImageButton:function(){var t=f_core,e=this
e.f_super(arguments)
e._B=t.D(e,"type")
e._9r=t.D(e,"for")},ef:function(){var e=this
e.f_super(arguments)
f_textEditor.M(e._9r,e)},tv:function(){var e=this,t=e._B
if(!t)return!1
f_textEditor.O(e._9r,e)
return!1},gp:function(){this._U()},f_getType:function(){return this._B}}});