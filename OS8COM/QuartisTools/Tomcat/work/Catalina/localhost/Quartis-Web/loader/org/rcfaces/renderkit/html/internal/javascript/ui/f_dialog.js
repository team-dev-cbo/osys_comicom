new f_class("f_dialog",{extend:f_shell,members:{f_dialog:function(l){var s=f_core,n=null,e=this,t,i,c,r,o,f,a,u
e.f_super(arguments,l|f_shell.COPY_STYLESHEET)
t=e.fl()
i=n
c=-1
r=-1
o=0
f=a=n
if(e.nodeType==1){i=s.D(e,"title",n)
c=s.te(e,"height",-1)
r=s.te(e,"width",-1)
o=s.te(e,"dialogPriority",0)
f=s.D(e,"styleClass",n)
a=s.D(e,"backgroundMode",n)}if(u=t.shellDecorator)e.f_setShellDecorator(u)
if(i===n)i=t.title
if(i)e.f_setTitle(i)
if(c<0&&t.height>0)c=t.height
if(c>0)e.f_setHeight(c)
if(r<0&&t.width>0)r=t.width
if(r>0)e.f_setWidth(r)
if(o<0&&t.dialogPriority>0)o=t.dialogPriority
if(o>0)e.f_setPriority(o)
if(f===n)f=t.styleClass
if(f)e.f_setStyleClass(f)
if(a===n&&t.backgroundMode)a=t.backgroundMode
if(a)e.f_setBackgroundMode(a)},fl:function(){return f_dialog.w}},statics:{w:{priority:0,styleClass:"f_dialog"}}});