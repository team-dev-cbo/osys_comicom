new f_class("f_fieldSet",{extend:f_component,aspects:[fa_overStyleClass],members:{f_finalize:function(){var e
this._4h=e
this.f_super(arguments)},f_getText:function(){var n,t=this,e=t._4h
if(e===n)t._4h=e=t.ownerDocument.getElementById(t.id+"::label")
return!e?"":f_core.at(e)},f_setText:function(t){var i="none",r,n,e
r=this
if(t==r.f_getText())return
if(!(n=r._4h))return
if(!t)t=""
f_core.nr(n,t)
e=n.style
if(t.length){if(e.display==i)e.display="inherit"}else if(e.display!=i)e.display=i
r.P("text",t)},ft:function(){var t=this,r=t.gf(),i=null,e,n
if(r)i="_over"
e=t.fe(i)
if(r&&(n=t.f_getOverStyleClass()))e+=" "+n
if(t.className!=e)t.className=e}}});