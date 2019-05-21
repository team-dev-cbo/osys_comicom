new f_aspect("fa_itemClientDatas",{members:{f_getItemClientData:function(t,r){var n,e
if(typeof t!="object")t=this.f_getItemByValue(t,!0)
e=t._y
return!e?n:e[r]},f_getItemClientDatas:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
var t=e._y
return!t?{}:f_core.bo(t)},f_setItemClientData:function(t,i,r){var f,e,n
if(typeof t!="object")t=this.f_getItemByValue(t,!0)
if(!(e=t._y)){if(r===f)return r
t._y=e={}}n=e[i]
e[i]=r
return n},uf:function(e,t){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
e._y=t}}});