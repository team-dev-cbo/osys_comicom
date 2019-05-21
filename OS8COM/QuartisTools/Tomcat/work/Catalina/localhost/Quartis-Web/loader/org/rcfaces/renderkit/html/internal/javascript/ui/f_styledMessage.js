new f_class("f_styledMessage",{extend:f_component,aspects:[fa_message1],members:{f_styledMessage:function(){var e=this
e.f_super(arguments)
e._9u=f_core.D(e,"showIfMessage")},lr:function(){var e=this,t,n
if(n=e._en)t=e.lo(n.f_getSeverity())
if(!t)t=e._Y
if(e.className!=t)e.className=t
if(e._9u)e.f_setVisible(n!=null)}}});