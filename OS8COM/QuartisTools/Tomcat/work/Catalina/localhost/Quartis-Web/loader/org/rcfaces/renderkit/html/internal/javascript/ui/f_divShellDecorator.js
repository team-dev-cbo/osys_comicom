new f_class("f_divShellDecorator",{extend:f_shellDecorator,members:{f_divShellDecorator:function(e){this.f_super(arguments,e)},f_finalize:function(){var n,e=this,t
if(t=e._8t){e._8t=n
e.wc(t)}e.f_super(arguments)},f_getId:function(){return"divShellDecorator"},yd:function(f){var t=this,e=document.createElement("div"),r,i,n
t._8t=e
e.id=t._ee.f_getId()+"::div"
e.name=e.id+"::name"
r=t._ee
e._rcfacesShellIdentifier=i=t.vp(r)
e._rcfacesShellDecoratorIdentifier=t.f_getId()
n="f_shellDecorator_frame"
if(t._ee.f_getStyle()&f_shell.TRANSPARENT){if(f_core.K("iexplorer.6"))e.allowTransparency=!0
n+=" "+n+"_transparent"}else n+=" "+n+"_border"
e.className=n
t.vc(e)
f.call(window,t,r)
document.body.insertBefore(e,document.body.firstChild)},ad:function(){var n,t=this,e
if(e=t._8t){t._8t=n
t.wc(e)
e.parentNode.removeChild(e)}t.f_super(arguments)},wc:function(){},vc:function(f){var r=this,i=r._ee.f_getStyle(),t=f_core.B(f,"div"),e,n
t.style.width=t.style.height="100%"
e="f_shellDecorator_body"
if(i&&f_shell.TRANSPARENT)e+=" "+e+"_transparent"
if(n=r._ee.f_getStyleClass())e+=" "+n
t.className=e
r.mv(t)},f_showShell:function(){if(!this._8t)return
this._8t.style.visibility="visible"},f_hideShell:function(){if(!this._8t)return
this._8t.style.visibility="hidden"},g_:function(c,a,o,i,r){var t="px",f=this,e=f._8t,n
if(!e)return
e.style.top=o+t
e.style.left=a+t
e.style.height=r+t
e.style.width=i+t
e._8l=i
e._ah=r
if(n=f._8t.firstChild){n.style.height=r+t
n.style.width=i+t}},yi:function(e){var t=this._8t
if(!t)return!1
for(;e;e=e.parentNode)if(e._ee._8t==t)return!0;return!1},f_setFocus:function(){},mp:function(){var i=parseInt,a=f_core,c="px",e=this._8t,o,f,n,r,t
if(!e)return
o=i(e.style.left)
f=i(e.style.top)
n=e._8l
r=e._ah
t=f_shellManager.GetScreenSize(e.ownerDocument)
if(a.nt()){t.width-=a.st(e,"left","right")
t.height-=a.st(e,"top","bottom")}if(o+n>=t.width){n=t.width-o-1
if(n<1)n=1}if(n!=i(e.style.width))e.style.width=n+c
if(f+r>=t.height){r=t.height-f-1
if(r<1)r=1}if(r!=i(e.style.height))e.style.height=r+c}}});