new f_aspect("fa_editable",{members:{f_isEditable:function(){var t,e=this
if(e._fd===t)e._fd=f_core.Q(e,"editable",!0)
return e._fd},f_setEditable:function(e){var t=this
if(e!==!1)e=!0;else e=!!e
if(t.f_isEditable()==e)return
t._fd=e
t.Cd(e)
t.P("editable",e)}}});