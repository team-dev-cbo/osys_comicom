new f_aspect("fa_selected",{members:{f_isSelected:function(){var t,e=this
if(e.__===t){e.__=f_core.Q(e,"selected",!1)
e._yy=e.__}return e.__},f_setSelected:function(e){var t=this
if(e!==!1)e=!0
if(t.f_isSelected()==e)return
t.__=e
t.P("selected",e)
t.gp(e)},gr:function(){var t,e=this
if(e._yy===t)e.f_isSelected()
return e._yy}}});