new f_class("f_focusManager",{extend:f_object,aspects:[fa_serializable],statics:{Get:function(n){var t=f_focusManager,e=t.w
if(!e&&n!==!1)e=t.f_newInstance()
return e},Set:function(e){f_focusManager.w=e},Finalizer:function(){var e
f_focusManager.w=e}},members:{f_focusManager:function(){var o=f_focusManager,i=f_core,e=this,t,r,n,f
e.f_super(arguments)
t=o.w
if(e.nodeType==1){r=i.Q(e,"setFocusIfMessage",!0)
n=i.D(e,"focusId")
if(t){if(r===!1)t.f_setFocusIfMessage(!1)
if(n)t.f_setFocus(n)
return}e.by(null,n,r)}else{if(t)throw new Error("FocusManager is already installed !")}o.Set(e)
if(i.nt()){f=e
e._ug=function(c){var a=c.target
f._ma=a
return!0}
window.addEventListener("focus",e._ug,!0)}},f_finalize:function(){var n,e=this,r,t
if(r=e._1i){e._1i=n
r.pg(e)}if(t=e._ug){e._ug=n
window.removeEventListener("focus",t,!0)}e._ma=n
e.f_super(arguments)},by:function(n,r,i){var e=this,t
if(n)e.id=n
if(r)e.f_setFocus(r,!0)
if(i!==!1){e._Ds=!0
if(t=f_messageContext.Get()){t.vy(e)
e._1i=t}}},f_documentComplete:function(){var i,e=this,t,r,n
e._i6=!0
t=e._es
e._es=i
if(!t)return
if(r=e._2_()){n=r.tagName
if(n&&n.toUpperCase()!="BODY")return
if(r.id==t)return}e.f_setFocus(t,!0)},_2_:function(){var e
if(f_core.K())e=document.activeElement;else e=this._ma
return e},f_getFocusId:function(){var r=this,f,e,t,n,i
if(!r._i6)return r._es
if(f=r._2_()){if(!(e=f.id))return e
t=e.lastIndexOf("::")
if(t>0){e=e.substring(0,t)
n=f_core.GetElementByClientId(e)
if(typeof n.lw=="function"&&(i=n.lw()))e=i.id}return e}return r._es},f_getFocusComponent:function(){var t=this,e
return(e=t._2_())?t.f_getClassLoader().oa(e,!0,!0):null},f_setFocus:function(t,f){var r=f_core,i,n=this,e=t
if(typeof t=="string"){if(!n._i6){n._es=t
return i}try{e=r.GetElementByClientId(t)}catch(o){e=document.getElementById(t)}}else if(!n._i6)n._es=i
return!e?!1:(e==n._2_()?!0:!(!r.SetFocus(e,f)))},ir:function(){var e=this,t
if(e.id){t=e.f_getFocusId()
e.P("focusId",t)}},se:function(s,u){var t,a,f,i,r,e,n,c,o
switch(u.type){case"POSTCHECK":case"ADD":break;default:return;}a=-1
f=s.f_listComponentIdsWithMessages(!0)
for(i=0;i<f.length;i++){if(!(r=f[i]))continue
e=s.f_listMessages(r)
if(!e||!e.length)continue
for(n=0;n<e.length;n++){c=e[n]
o=c.f_getSeverity()
if(t&&o<=a)continue
t=r
a=o}}if(t)this.f_setFocus(t)}}});