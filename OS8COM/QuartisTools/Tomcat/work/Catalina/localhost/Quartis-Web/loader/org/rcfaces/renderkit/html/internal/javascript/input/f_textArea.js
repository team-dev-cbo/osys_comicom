new f_class("f_textArea",{extend:f_abstractEntry,members:{f_textArea:function(){var t=f_textArea,n=f_core,e=this
e.f_super(arguments)
e._ir=n.te(e,"maxTextLength",0)
if(e._ir>0){e._En=n.Q(e,"ignoreWhenFull",!1)
t.V(e)
e.f_addEventListener("validation",t.w)}},f_finalize:function(){var e=this
if(e._ir>0)f_textArea.M(e)
e.f_super(arguments)},f_getMaxTextLength:function(){return this._ir}},statics:{w:function(f){var i=f.f_getComponent(),t=i.f_getMaxTextLength(),n,e,r
if(!t||t<1)return!0
if(!(n=i.f_getValue()))return!0
if(n.length<=t)return!0
if(!(e=f_resourceBundle.Get(f_textArea).f_formatParams("MAX_TEXT_LENGTH",[t])))e=f_locale.Get().f_formatMessageParams("javax_faces_validator_LengthValidator_MAXIMUM",[t],"Value is greater than allowable maximum of ''{0}''")
r=f_messageContext.Get(f)
r.f_addMessage(i,2,e,null)
return!1},S:function(f){var r=f.f_getJsEvent(),e=r.keyCode,i=r.charCode,n=this,t
if(n.f_isReadOnly()||n.f_isDisabled())return!0
if(!i)t=String.fromCharCode(e);else t=String.fromCharCode(i)
if(f_core.nt()){if(e>0&&e!=13)return!0}else if(e<32&&e!=13)return!0
return f_textArea.F(n,t)},L:function(h){var u=f_core,a=null,l=this,n,c,s,r,t,e
if(!h)h=u.I(l)
n=l
if(n.f_isReadOnly()||n.f_isDisabled())return!1
c=n.J()
s=n._ir
r=c.value
if(r.length>=s)return!1
t=c
e=s
window.setTimeout(function(){var r=t.value,o,f,i
if(r.length<=e){t=e=a
return}o=u.li(t)
f=o[0]
i=o[1]
if(f>=e)f=e
if(i>=e)i=e
t.value=r.substring(0,e)
u.ai(t,f,i)
t=e=a},10)},F:function(f,o){var c=f_core,n=f.J(),i=f._ir,a=n.value,r,e,t
if(a.length+o.length<=i)return!0
r=c.li(n)
e=r[0]
t=r[1]
if(t-e+1>o.length)return!0
if(f._En||e==i)return!1
n.value=a=a.substring(0,i-o.length)
c.ai(n,e,t)
return!0},V:function(n){var e=f_textArea
n.f_addEventListener("keypress",e.S)
var t
if(t=n.J())t.onpaste=e.L},M:function(t){var e
if(e=t.J())e.onpaste=null}}});