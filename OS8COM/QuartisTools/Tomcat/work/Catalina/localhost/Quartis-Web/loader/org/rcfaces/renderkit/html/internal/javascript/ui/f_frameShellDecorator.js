new f_class("f_frameShellDecorator",{extend:f_shellDecorator,members:{f_frameShellDecorator:function(e){this.f_super(arguments,e)},f_finalize:function(){var n,e=this,t
if(t=e._0e){e._0e=n
e.gl(t)}e.f_super(arguments)},f_getId:function(){return"frameShellDecorator"},yd:function(h){var a=window,s=f_core,v="about:blank",g="_transparent",o=" ",l="_border",c=null,t=this,e=document.createElement("iframe"),i,u,n,f,r
t._0e=e
e.id=t._ee.f_getId()+"::iframe"
e.name=e.id+"::name"
i=t._ee
e._rcfacesShellIdentifier=u=t.vp(i)
e._rcfacesShellDecoratorIdentifier=t.f_getId()
e.frameBorder=0
e.scrolling="no"
n="f_shellDecorator_frame"
if(t.wy()){if(s.K("iexplorer.6"))e.allowTransparency=!0
n+=o+n+g}else n+=o+n+l
if(f=t.f_getStyleClass()){n+=o+f
if(t._ee.f_getStyle()&f_shell.TRANSPARENT)n+=o+f+g;else n+=o+f+l}e.className=n
r=t
if(s.K())e.onreadystatechange=function(){var t=this
if(a._rcfacesExiting)return!1
if(t.readyState!="interactive")return
t.onreadystatechange=c
r.vc(t)
h.call(a,r,i)};else e.onload=function(){if(a._rcfacesExiting)return!1
this.onload=c
r.vc(this)
h.call(a,r,i)}
e.src=v
document.body.insertBefore(e,document.body.firstChild)
if(s.K())e.src=v},wy:function(){return this._ee.f_getStyle()&f_shell.TRANSPARENT},ad:function(){var n,t=this,e
if(e=t._0e){t._0e=n
t.gl(e)
e.parentNode.removeChild(e)}t.f_super(arguments)},gl:function(e){e.onreadystatechange=e.onload=null},vc:function(m){var c=f_shell,v=c.TRANSPARENT,r=f_core,d="head",g="base",o=" ",a=this,l=a._ee.f_getStyle(),s=m.contentWindow.document,n=s.body,t,f,u,e,i,h
n.topmargin=n.leftmargin=n.marginheight=n.marginwidth=0
t="f_shellDecorator_body"
if(l&&v)t+=o+t+"_transparent"
if(f=a.f_getStyleClass()){t+=o+f+"_body"
if(l&&v)t+=o+f+"_body_transparent"}if(u=a._ee.f_getStyleClass())t+=o+u
n.className=t
if(l&c.COPY_STYLESHEET){if(!(e=s.head)){i=s.documentElement
if(!(e=r.eo(i,d)))e=r.B(i,d)}h=document.baseURI||document.URL
if(!r.eo(e,g))r.B(e,g,{href:h})}r.va(s,document)
a.mv(n)},f_getStyleClass:function(){return null},f_showShell:function(){if(!this._0e)return
this._0e.style.visibility="visible"},f_hideShell:function(){if(!this._0e)return
this._0e.style.visibility="hidden"},g_:function(a,o,f,i,r){var t="px",e=this._0e,n
if(!e)return
e.style.top=f+t
e.style.left=o+t
e.style.height=r+t
e.style.width=i+t
e._8l=i
e._ah=r
if(n=e.contentWindow.document.body){n.style.height=r+t
n.style.width=i+t}},yi:function(t){var r=this._0e,e,n
if(!r)return!1
e=null
switch(t.nodeType){case 9:e=t
break;case 1:if(t.tagName.toLowerCase()=="iframe"){e=t.contentWindow.document
break}e=t.ownerDocument
break;default:e=t.document;}if(!e)return!1
n=r.contentWindow.document
return!!(e==n)},f_setFocus:function(){var t=this,e=t._0e
if(!e)return
e.contentWindow.focus()
t._ee.f_setFocus()},mp:function(){var i=parseInt,a=f_core,c="px",e=this._0e,o,f,n,r,t
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