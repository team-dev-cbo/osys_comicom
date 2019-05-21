new f_class("f_text",{extend:f_component,members:{f_getText:function(){return f_core.at(this,!0)},f_setText:function(t){var e=this
if(e.f_getText()==t)return
f_core.nr(e,t,e._3e)
e.P("text",t)},f_getValue:function(){return this.f_getText()},f_setValue:function(e){if(typeof e=="string"){this.f_setText(e)
return!0}return!1}}});