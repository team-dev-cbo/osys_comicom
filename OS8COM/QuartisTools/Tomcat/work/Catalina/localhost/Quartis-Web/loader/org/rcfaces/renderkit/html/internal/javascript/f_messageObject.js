new f_class("f_messageObject",{statics:{SEVERITY_INFO:0,SEVERITY_WARN:1,SEVERITY_ERROR:2,SEVERITY_FATAL:3,w:function(t){var e=f_core,a=e.D(t,"detail"),o=e.D(t,"summary"),c=e.te(t,"severity"),f=e.ua(t),r=null,i,n
if(i=e.D(t,"for"))r=e.GetElementById(i)
n=new f_messageObject(c,o,a,f)
f_messageContext.Get(r).us(r,n,!0)}},members:{f_messageObject:function(e,i,f,r){var n=this,t
if(typeof e=="object"&&e){t=e
i=t._a7
f=t._2t
e=t._5u
r=t._y}if(typeof e!="number")e=0
n._5u=e
n._a7=i
n._2t=f
n._y=r},f_getSeverity:function(){return this._5u},f_getSummary:function(){return this._a7},f_getDetail:function(){var t=this,e
return(e=t._2t)?e:t._a7},f_getClientData:function(t){var e=this._y
return!e?null:e[t]},f_equals:function(e){var t=this
return t==e?!0:!(!e||e._5u!=t._5u||e._2t!=t._2t||e._a7!=t._a7||e._y!=t._y)},toString:function(){var e=this
return"[f_messageObject severity='"+e._5u+"' summary='"+e._a7+"' detail='"+e._2t+"']"}}});