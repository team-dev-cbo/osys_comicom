new f_class("f_help",{statics:{w:"VFCHelpWindow",S:function(e){f_help.tn=e},L:function(){return f_help.tn},F:function(){var e=f_help
if(e.ne)return
e.ne=!0
if(f_core.K()){window.onhelp=e.V
return}document.onkeydown=e.M},V:function(){var e=f_help
return e.ni?e.et(e.ni):!1},M:function(t){var e=f_help
return e.ni&&t.keyCode==112?e.et(e.ni):!0},O:function(n){var e=n.f_getComponent(),t=f_help.tn
if(!t)window.status=e.f_getHelpMessage();else t.gC(e)
return!0},$:function(n){var t=n.f_getComponent(),e=f_help.tn
if(!e)window.status="";else e.CC(t)
return!0},et:function(s){var t=f_env,f=f_help,n=null,e,i,r,a,c,o
if(s&&typeof s.f_getHelpURL=="function")n=s.f_getHelpURL()
if(!n)return!1
e=f.tf
if(!e||e.closed){i=t.Get("WINHELP_ID",f.w)
r=t.Get("WINHELP_W",600)
a=t.Get("WINHELP_H",450)
c=t.Get("WINHELP_X",100)
o=t.Get("WINHELP_Y",100)
f.tf=e=f_core.OpenWindow(window,{url:n,target:i,x:c,y:o,width:r,height:a})}e.location.href=n
e.focus()
return!1},DocumentComplete:function(){if(f_help.tn!==!1)return
f_help.tn=f_core.ws(document,f_helpMessageZone.f_getName())},Finalizer:function(){var e=f_help,t
e.ni=e.tn=e.tf=t}}});