new f_class("f_imageRadioButton",{extend:f_imageCheckButton,aspects:[fa_groupName,fa_required],members:{f_imageRadioButton:function(){var e=this,t
e.f_super(arguments)
if(t=f_core.D(e,"groupName")){e._8i=t
e.v_(t,e)}},tv:function(){var e=this
if(e.f_isSelected())return!1
e.f_setSelected(!e.f_isSelected())
return!0},f_setSelected:function(e){if(e!==!1)e=!0
if(e){var t
if(t=this.f_getSelectedInGroup())t.f_setSelected(!1)}this.f_super(arguments,e)},f_getGroupName:function(){return this._8i},f_getSelectedInGroup:function(){return this.f_mapIntoGroup(this.f_getGroupName(),function(e){if(e.f_isSelected())return e})},f_listAllInGroup:function(){return this.sl(this.f_getGroupName())},f_:function(){},f_getValue:function(){var e=this.f_getSelectedInGroup()
return!e?null:e.tw()},f_setValue:function(e){this.f_setSelected(e!==!1)}}});