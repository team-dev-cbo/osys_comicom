new f_aspect("fa_readOnly",{members:{f_isReadOnly:function(){var t,e=this
if(e._l0===t)e._l0=f_core.Q(e,"readOnly",!1)
return e._l0},f_setReadOnly:function(e){var t=this
if(e!==!1)e=!0
if(t.f_isReadOnly()==e)return
t._l0=e
t.fa_updateReadOnly(e)
t.P("readOnly",e)}}});