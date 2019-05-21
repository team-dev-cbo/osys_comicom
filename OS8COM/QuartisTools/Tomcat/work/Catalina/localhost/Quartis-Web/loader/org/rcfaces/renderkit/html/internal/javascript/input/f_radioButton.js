new f_class("f_radioButton",{extend:f_checkButton,aspects:[fa_groupName,fa_required,fa_clientValidatorParameters],members:{f_radioButton:function(){var e=this
e.f_super(arguments)
if(e.f_isRequired())f_radioButton.w(e)},f_finalize:function(){var n,e=this,t
if(t=e._my){e._my=n
f_core.nv(e,t)}e.f_super(arguments)},f_getGroupName:function(){var e=this.J()
return!e?null:e.name},f_getSelectedInGroup:function(){return this.f_mapIntoGroup(this.f_getGroupName(),function(e){if(e.f_isSelected())return e})},f_getValue:function(){var t,e=this.f_getSelectedInGroup()
return!e?t:(!e.f_getRadioValue?null:e.f_getRadioValue())},f_setValue:function(i){var n,t=this
if(t.f_mapIntoGroup(t.f_getGroupName(),function(e){if(!e.f_getRadioValue)return n
if(i!=e.f_getRadioValue())return n
e.f_setSelected(!0)
return!0}))return!0
t.f_mapIntoGroup(t.f_getGroupName(),function(e){var r=e.J()
if(r&&r.checked)r.checked=!1})
return!1},f_listAllInGroup:function(){return this.sl(this.f_getGroupName())},f_isSelected:function(){var e=this.J()
return!e?!1:e.checked==!0},f_setSelected:function(r){var t=this,e=t.J()
if(!e||e.checked==r)return
if(!r){e.checked=!1
return}if(f_core.nt())t.f_mapIntoGroup(t.f_getGroupName(),function(i){var n=i.J()
if(n&&n.checked)n.checked=!1})
e.checked=!0},f_getRadioValue:function(){var t,e=this.J()
return!e?t:e.value},cu:function(){var t=this,e=t.f_getSelectedInGroup(),n=e?e.J().value:null
t.P("selected",n)},yc:function(){return!0},f_:function(){this.ft()}},statics:{w:function(e){var n="REQUIRED_ERROR_SUMMARY",o={os:function(a){var t,r,f,i
if(e.f_getSelectedInGroup())return
t=e.so(n)
r=e.so("REQUIRED_ERROR_DETAIL")
if(!t){f=f_resourceBundle.Get(f_radioButton)
if(!(t=f.f_formatParams(n)))t=f_locale.Get().f_formatMessageParams("javax_faces_component_UIInput_REQUIRED",null,"Radio button selection is required.")}i=f_messageContext.Get(e)
i.f_addMessage(e,2,t,r)
return!1}}
e._my=o
f_core.e_(e,o)}}});