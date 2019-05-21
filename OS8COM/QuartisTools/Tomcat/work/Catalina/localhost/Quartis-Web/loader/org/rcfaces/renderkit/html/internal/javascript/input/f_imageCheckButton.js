new f_class("f_imageCheckButton",{extend:f_imageButton,aspects:[fa_selected],members:{tv:function(){this.f_setSelected(!this.f_isSelected())
return!0},gp:function(){this._U()},ir:function(){var e=this
e.P("selected",e.f_isSelected())
e.f_super(arguments)},f_getValue:function(){return this.f_isSelected()},f_setValue:function(e){this.f_setSelected(!!e)}}});