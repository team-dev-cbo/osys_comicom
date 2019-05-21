new f_aspect("fa_value",{members:{f_getValue:function(){return this.tw()},tw:function(){var n,t=this,e=t._n
if(e!==n)return e
e=f_core.D(t,"value",null)
return t._n=e},f_setValue:function(t){var e=this
if(e.f_getValue()==t)return
e._n=t
if(e.vu)e.vu(t)
e.P("value",t)}}});