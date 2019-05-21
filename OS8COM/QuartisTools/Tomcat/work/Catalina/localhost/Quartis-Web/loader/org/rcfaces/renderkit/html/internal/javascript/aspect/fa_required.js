new f_aspect("fa_required",{members:{f_isRequired:function(){var n,e=this,t=e._s0
if(t===n)e._s0=t=f_core.Q(e,"required",!1)
return t},f_setRequired:function(e){var t=this
if(e!==!1)e=!0
if(t.f_isRequired()==e)return
t._s0=e
t.P(f_prop.REQUIRED,t._s0)
t.f_(e)}}});