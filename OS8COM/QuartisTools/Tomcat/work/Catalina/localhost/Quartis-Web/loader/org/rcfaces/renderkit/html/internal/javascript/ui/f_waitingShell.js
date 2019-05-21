new f_class("f_waitingShell",{extend:f_dialog,statics:{w:{priority:0,width:150,height:150,styleClass:"f_waitingShell",backgroundMode:"greyed",closable:!1},WaitForSubmit:function(){var e=f_waitingShell.f_newInstance()
e.f_open()}},members:{f_waitingShell:function(n,t,a,f,r,c){var o=f_shell,i=f_core,s,e=this
e.f_super(arguments,o.TRANSPARENT|o.LIGHT_CONTAINER_STYLE)
if(e.nodeType==1){if(!n)n=i.D(e,"imageURL")
if(!t)t=i.D(e,"text")
if(r===s)r=i.Q(e,"visible",!0)}if(n)e.f_setImageURL(n)
if(t)e.f_setText(t)
if(a>0)e.f_setWidth(a)
if(f>0)e.f_setHeight(f)
if(r)e.f_installShowOnSubmit()
if(c)e.f_setBackgroundMode(c)},fl:function(){return f_waitingShell.w},f_installShowOnSubmit:function(){var e=this,t=function(){if(e)e.f_open()
e=null}
f_core.uC(t)},f_fillBody:function(e){this.f_super(arguments,e)
this.dE(e)},dE:function(s){var e=f_core,r="middle",f="td",n="center",c=null,o=this,i=e.B(s,"table",{cellPadding:0,cellSpacing:0},"tbody",c,"tr",c),a,t
if(a=o.f_getImageResolvedURL())e.B(i,f,{align:n,valign:r},"img",{className:"f_waitingShell_image",src:a})
if(t=o._l)e.B(i,f,{align:n,valign:r},"span",{className:"f_waitingShell_text",textNode:t})},f_getImageURL:function(){return this._h},f_getImageResolvedURL:function(){return!this._h?null:f_env.ResolveContentUrl(this._h)},f_setImageURL:function(e){this._h=e},f_setText:function(e){this._l=e},f_getText:function(){return this._l},toString:function(){return"[f_waitingShell]"}}});