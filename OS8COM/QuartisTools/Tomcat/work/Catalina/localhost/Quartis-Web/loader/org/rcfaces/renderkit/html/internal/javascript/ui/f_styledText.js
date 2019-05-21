new f_class("f_styledText",{extend:f_text,members:{f_getText:function(){return this.innerHTML},f_setText:function(e){var t=this
if(t.f_getText()==e)return
t.innerHTML=e
t.P("text",e)}}});