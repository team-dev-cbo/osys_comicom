new f_aspect("fa_disabled",{members:{f_isDisabled:function(){var t,e=this
if(e._s===t){e._s=f_core.Q(e,"disabled",!1)
e._ws=e._s}return e._s},f_setDisabled:function(e){var t=this
if(e!==!1)e=!0
if(t.f_isDisabled()==e)return
t._s=e
t.P("disabled",e)
t.fa_updateDisabled(e)},gt:function(){var t,e=this
if(e._ws===t)e.f_isDisabled()
return e._ws}}});