new f_class("f_dateChooser",{extend:f_imageButton,aspects:[fa_calendarPopup],members:{f_dateChooser:function(){var t=f_core,e=this,n
e.f_super(arguments)
e._uc=t.D(e,"for")
if(e._uc)e._pp=t.D(e,"forValueFormat")
if(n=t.D(e,"defaultSelectedDate"))e.f_setDefaultSelectedDate(t.nf(n))},hg:function(t){var e=this
if(e.f_isDisabled())return!1
if(!e._f)e.f_setFocus()
return e.f_isReadOnly()?!1:e.f_openCalendarPopup(t)},on:function(e,t){if(e=="change")return
this.f_super(arguments,e,t)},fo:function(e,t){var n
return e=="change"?n:this.f_super(arguments,e,t)},_Co:function(t,e){return this.f_fireEvent("change",e,null,t)},fb:function(){this.po()},ir:function(){var e=this,n=e.f_getCalendarObject(),t
if(t=n.f_getSelection())e.P("value",t)
e.f_super(arguments)},f_getFor:function(){return this._uc},f_getForComponent:function(){var e=this._uc
return!e?null:f_core.FindComponent(e)}}});