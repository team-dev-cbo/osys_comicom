new f_class("f_externalBox",{extend:f_component,statics:{FIRST_LOAD:1,NEXT_LOAD:0,w:function(r){var f=f_event,i="load",e=null,o=this,t=o,n
if(!r)r=f_core.I(o)
if(t._p2){t._p2=!1
n=new f(t,i,r,e,e,e,1)}else n=new f(t,i,r,e,e,e,0)
t.f_fireEvent(n)}},members:{f_externalBox:function(){var e=this
e.f_super(arguments)
e._s3=f_core.D(e,"contentURL")
e.onload=f_externalBox.w},f_finalize:function(){this.onload=null
this.f_super(arguments)},f_setVisible:function(t){var e=this
e.f_super(arguments,t)
if(t&&!e.src)e.src=e.f_getContentURL()},f_getContentURL:function(){return this._s3},f_setContentURL:function(t){var e=this
if(t!=e._s3){e._s3=t
e.P("contentURL",t)
e._p2=!0
e.src=t}},f_refresh:function(){var e=this
if(e._s3)e.src=e._s3}}});