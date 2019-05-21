new f_class("f_textEntry",{extend:f_abstractEntry,members:{gd:function(){this.f_super(arguments)
if(f_class.S("f_clientValidator"))f_clientValidator.S(this)},ef:function(){var e=this
if(e.f_isAutoTab())e._bl()
e.f_super(arguments)},f_getMaxTextLength:function(){return this.J().maxLength},f_setValue:function(e){if(typeof e=="string"){var t=this.f_getMaxTextLength()
if(t>0&&e.length>t)e=e.substring(0,t)}return this.f_super(arguments,e)},f_isAutoTab:function(){var n,t=this,e=t._Eo
if(e!==n)return e
e=!!f_core.Q(t,"autoTab")
return t._Eo=e},am:function(r){var i="selection",n,e,t
n=this
if(n.f_isDisabled())return
if(n.il(i))return
if(!(e=r.f_getJsEvent()))return
t=e.keyCode
if(t!=13&&t!=14)return
r.f_preventDefault()
n.f_fireEvent(i,e)
return!1},f_isAutoCompletion:function(){var e=this.J()
return f_core.ci(e,"autoComplete")!="off"},_bl:function(){var t=f_clientValidator
f_class.S("f_clientValidator",!0)
var e=t.w(this)
if(!e)e=t.f_newInstance(this)
e.Et(f_vb.Processor_autoTab)},f_:function(){var n=f_clientValidator,t=this,e
t.ft()
if(t._6b)return
t._6b=!0
f_class.S("f_clientValidator",!0)
if(!(e=n.w(t)))e=n.f_newInstance(t)
e.aw(f_vb.Behavior_required)},cu:function(){var t=this,n,e
if(n=t._7n){e=n.cu()
t.P("text",e)
return}t.f_super(arguments)}}});