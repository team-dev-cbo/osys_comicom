new f_aspect("fa_commands",{members:{f_finalize:function(){var e
this._ti=e},cc:function(t){var e=this
if(!e._E){t.call(e,e)
return}e._ti=t},to:function(){var r,e=this,t=e._ti
if(!t)return!1
e._ti=r
try{t.call(e,e)}catch(n){f_core.Error(fa_commands,"f_processNextCommand: Call of callback: "+t+" throws exception.",n)
return!1}return!0},bm:function(){var e
this._ti=e}}});