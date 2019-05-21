new f_class("f_compositeNumEntry",{extend:f_component,aspects:[fa_compositeNumEntry,fa_required,fa_message,fa_clientValidatorParameters],members:{f_compositeNumEntry:function(){var e=this
e.f_super(arguments)
f_core.e_(e,e)},f_finalize:function(){var e=this
f_core.nv(e,e)
e.f_super(arguments)},os:function(){return!0},ft:function(r){var e=this,n="",t
if(e.f_isDisabled())n+="_disabled";else if(e.f_isReadOnly())n+="_readOnly"
if(r)n+=r
t=e.fe(n)
if(e.className!=t)e.className=t},fe:function(o){var e=this,i=e.f_super(arguments,o),r,f,n,t
if((e._in&&!e.f_isDisabled())&&(r=e.f_getFocusStyleClass()))i+=" "+r
if(f=e._en){n=f.f_getSeverity()
t=e.lo(n)
if(!t&&n>=2)t=e.ue()+"_error"
if(t)i+=" "+t}return i},se:function(){var r=this,i=f_messageContext.ListMessages(r),t,e,n
for(e=0;e<i.length;e++){n=i[e]
if(!t||t.f_getSeverity()<n.f_getSeverity())t=n}if(t==r._en)return
r._en=t
r.ft()},mn:function(c,n){var o=null,t=this,e=o,f=o,a=2,e,i,r
if(e=t.so(n+".summary"))f=t.so(n+".detail");else e=t.so(n)
if(!e){i=f_resourceBundle.Get(c)
e=i.f_get(n.toUpperCase().replace(/\./g,"_")+"_SUMMARY")}r=f_messageContext.Get(t)
r.f_addMessage(t,a,e,f)},ef:function(){this.se()
return this.f_super(arguments)}}});