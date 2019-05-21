new f_aspect("fa_immediate",{members:{f_isImmediate:function(){var t,e=this
if(e._nn===t)e._nn=f_core.Q(e,"immediate",!1)
return e._nn},f_setImmediate:function(e){var t=this
if(e!==!1)e=!0
if(t.f_isImmediate()==e)return
t._nn=e
t.P("immediate",t._nn)}}});