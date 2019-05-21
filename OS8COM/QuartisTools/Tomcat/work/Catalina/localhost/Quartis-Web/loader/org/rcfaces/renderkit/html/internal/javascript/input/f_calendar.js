new f_class("f_calendar",{extend:f_component,aspects:[fa_readOnly,fa_disabled,fa_itemsWrapper],statics:{SHORT_LAYOUT:1,MEDIUM_LAYOUT:2,LONG_LAYOUT:3,FULL_LAYOUT:4,DEFAULT_LAYOUT:2},members:{f_calendar:function(){var e=this,t
e.f_super(arguments)
switch(f_core.te(e,"layout",2)){default:t=1|2|8|32|64|128
break;}e._a=f_calendarObject.w(e,t)},f_finalize:function(){var n,e=this,t
if(t=e._a){e._a=n
f_classLoader.Destroy(t)}e.f_super(arguments)},ef:function(){this.ww()
this.f_super(arguments)},ww:function(){this._a.my(this)},aa:function(){return this},lh:function(){this._a.lh.apply(this._a,arguments)},hf:function(e){this._a.hf(e)},rp:function(){return this._a},f_getCalendarObject:function(){return this._a},ir:function(){var e=this,r=e.f_getCalendarObject(),n,t
if(n=r.f_getSelection())e.P("value",n)
if(t=r.f_getCursorDate())e.P("cursor",t)
e.f_super(arguments)}}});