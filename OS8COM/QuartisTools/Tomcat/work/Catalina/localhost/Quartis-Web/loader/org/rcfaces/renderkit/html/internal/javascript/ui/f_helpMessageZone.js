new f_class("f_helpMessageZone",{extend:f_component,members:{f_getText:function(){return f_core.at(this)},f_setText:function(e){var t=this
if(e==t.f_getText())return
f_core.nr(t,e)
t.P("text",e)},gC:function(t){this._u=t
var e=t.f_getHelpMessage()
if(!e)e=""
f_core.nr(this,e)},CC:function(n){var t,e=this
if(e._u!=n)return
f_core.nr(e,"")
e._u=t}}});