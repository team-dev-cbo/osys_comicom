new f_class("f_hyperLink",{extend:f_input,aspects:[fa_immediate,fa_value],members:{f_hyperLink:function(){var n=f_core,t=this,e,r
t.f_super(arguments)
t.fg("selection",!1)
e=t.J()
if(e.tagName.toLowerCase()=="a"&&!e.href)e.href=n.O
if(r=n.ci(t,"disabled"))t.f_setDisabled(!0)},f_getText:function(){return f_core.at(this,!0)},f_setText:function(t){var e=this
f_core.nr(e,t,e.f_getAccessKey())
e.P("text",t)},f_fireEvent:function(n,f,i,t,o,r,a){var e=this
if(n=="selection"){if(e.f_isReadOnly()||e.f_isDisabled())return!1
if(!t)t=e.f_getValue()}return e.f_super(arguments,n,f,i,t,o,r,a)}}});