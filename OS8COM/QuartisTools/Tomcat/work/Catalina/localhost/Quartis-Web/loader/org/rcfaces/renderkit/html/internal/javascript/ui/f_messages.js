new f_class("f_messages",null,{w:function(e,n){var r=Array,i,t
if(e===i)return n===e
if(!(e instanceof r)||!(n instanceof r)||e.length!=n.length)return!1
for(t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}},{f_finalize:function(){var t,e=this
e._u0=e._c=t
e.f_super(arguments)},ef:function(){var e=this,t=f_messageContext.Get(e)
e._u0=t.f_listMessages(null,e.f_isGlobalOnly())
e.lr()
return e.f_super(arguments)},f_isGlobalOnly:function(){var n,e=this,t
if(e._yh!==n)return e._yh
t=f_core.Q(e,"globalOnly",!1)
return e._yh=t},se:function(i){var r=null,t=this,n=i.f_listMessages(r,t.f_isGlobalOnly()),e
if(f_messages.w(n,t._u0))return
if(!n)t._u0=r;else{e=[]
e.push.apply(e,n)
t._u0=e}t.lr()},lr:function(){var h="td",u=null,e=this,c=e._u0,t=e._c,r,a,o,s,l,n,f,i
if(!t){if(!c)return
t=document.createElement("tbody")}else{while(t.hasChildNodes())t.removeChild(t.lastChild);if(!c)return}r=c.length
a=f_core.te(e,"maxCount",0)
if(a>0&&r>a)r=a
for(o=0;o<r;o++){s=c[o]
l=e.lo(s.f_getSeverity())
n=document.createElement("tr")
t.appendChild(n)
f=u
if(e.f_isShowSummary()){f=document.createElement(h)
n.appendChild(f)}i=u
if(e.f_isShowDetail()){i=document.createElement(h)
n.appendChild(i)}f_message.w(e.fe(),n,u,f,i,s,l)}if(!e._c){e._c=t
e.appendChild(t)}}},f_component,fa_messageText);