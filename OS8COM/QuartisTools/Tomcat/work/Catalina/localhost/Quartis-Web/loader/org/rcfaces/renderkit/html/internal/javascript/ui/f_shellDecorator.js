new f_class("f_shellDecorator",{extend:f_object,statics:{S:0,L:function(){var e=this,t=e,n=t._fi
if(e.__)return
e.__=!0
n.___(t)},F:function(n){var e=this,t=e,r=t._fi
if(!n)n=f_core.I(e)
if(!e.__)return
e.__=!1
r.___(t)
r._pC(t,n)},V:function(){var e=this,t=e,n=t._fi
if(e._$)return
e._$=!0
n.___(t)},M:function(){var e=this,t=e,n=t._fi
if(!e._$)return
e._$=e.__=!1
n.___(t)},O:function(o){var a=f_shellDecorator,t=f_core,c=this,n=c._fi,i,e,r,f
if(!o)o=t.I(c)
if(!(i=n._0e))return!1
e=i.contentWindow.document
a._6l=n
t.N(o)
r=t.ts(o,e)
f=t.fi(n._hc)
n._fn=r.x-f.x
n._eg=r.y-f.y
n._Dv=r
t.re(e,"mousemove",a.$,e.body)
t.re(e,"mouseup",a.et,e.body)},$:function(d){var s=parseInt,i=f_core,c="px",u=f_shellDecorator._6l,e=u._0e,v,l,a,h,g,o,f,r,n,t
if(!e)return!1
v=e.contentWindow.document
l=i.ts(d,v)
a=i.fi(u._hc)
h=l.x-a.x-u._fn
g=l.y-a.y-u._eg
o=s(e.style.left)+h
f=s(e.style.top)+g
r=e._8l
n=e._ah
t=f_shellManager.GetScreenSize(e.ownerDocument)
if(i.nt()){t.width-=i.st(e,"left","right")
t.height-=i.st(e,"top","bottom")}if(o+r>=t.width){r=t.width-o-1
if(r<1)r=1}if(r!=s(e.style.width))e.style.width=r+c
if(f+n>=t.height){n=t.height-f-1
if(n<1)n=1}if(n!=s(e.style.height))e.style.height=n+c
e.style.left=o+c
e.style.top=f+c},et:function(){var n=f_shellDecorator,r=f_core,i,f=n._6l,t,e
n._6l=i
if(!(t=f._0e))return
e=t.contentWindow.document
r.ee(e,"mousemove",n.$,e.body)
r.ee(e,"mouseup",n.et,e.body)},w:function(t){var e=f_shellDecorator.ne
return!e?null:e[t]},tn:function(){var e=f_shellDecorator,t
e._6l=e.ne=t}},members:{f_shellDecorator:function(t){var e=this
e.f_super(arguments)
e._ee=t
e._di={}},f_finalize:function(){var r,e=this,n,f,i,t
e._ee=e._di=e._3i=e._L=r
if(n=e._W){e.buttons=r
for(f in n){i=n[f]
e.rC(i)}}if(t=e._hc){e._hc=r
try{t._fi=r
t.onmousedown=null}catch(o){}}e.f_super(arguments)},rC:function(e){var t
e._fi=t
e.onmousedown=e.onmouseup=e.onmouseover=e.onmouseout=null},f_computeTrim:function(n,e){var i=f_shell,o,f=this,r=f._ee,t
if(n===o)n=r.f_getWidth()
if(e===o)e=r.f_getHeight()
t=r.f_getStyle()
if(t&(i.TITLE_STYLE|i.CLOSE_STYLE)){e+=f.Ca()+f.eE()
e+=1}if(t&i.RESIZE_STYLE){n+=2
e+=2}return{width:n,height:e}},ad:function(){this._ee.fs(36)},wd:function(){return this._3i},np:function(n,t){var e=this
e._di[n]=t
switch(n){case"title":if(e._L)f_core.nr(e._L,t)
break;}},mv:function(o){var e=f_shell,s=e.TITLE_STYLE,l=e.CLOSE_STYLE,i=f_core,a="td",c="100%",u="tr",n=this,f=n._ee.f_getStyle(),h=f&(s|l|e.RESIZE_STYLE),r,t
if(!h)return n._3i=o
r=i.B(o,"table",{cellPadding:0,cellSpacing:0,cssWidth:c,cssHeight:c,className:f&e.TRANSPARENT?"f_shellDecorator_background_tranparent":"f_shellDecorator_background"},"tbody")
if(f&(s|l)){t=i.B(r,u,{className:"f_shellDecorator_title"},a,{className:"f_shellDecorator_title_cell"})
n.bu(t)}t=i.B(r,u,{className:"f_shellDecorator_body"},a,{className:"f_shellDecorator_body_cell"})
return n._3i=t},bu:function(t){var i=f_shell,e=this,f=e._ee.f_getStyle(),r,n
if(f&i.CLOSE_STYLE){r=f_resourceBundle.Get(f_shell).f_get("CLOSE_TITLE_BUTTON_TOOLTIP")
e.dw(t,"close","f_shellDecorator_close",r,"closeButton")}if(n=e._di["title"])e._L=f_core.B(t,"div",{className:"f_shellDecorator_title_text",textNode:n})
if(f&i.MOVE_STYLE){e._hc=t
t._fi=e
t.onmousedown=f_shellDecorator.O}},dw:function(o,f,i,c,a){var n=f_shellDecorator,t=this,r=t._o2,e
if(!r)t._o2=r=f_env.GetBlankImageURL()
e=f_core.B(o,"img",{className:i,src:r,title:c})
e.onmousedown=n.L
e.onmouseup=n.F
e.onmouseover=n.V
e.onmouseout=n.M
e._fi=t
e._Y=i
e._mv=a
e._d=f
if(!t._W)t._W={}
t._W[f]=i},f_setFocus:function(){},___:function(t){var n="_over",r=" ",e=t._Y
if(t.__){e+=r+e+"_selected"
if(t._$)e+=n}else if(t._$)e+=r+e+n
if(t.className!=e)t.className=e},_pC:function(e,r){var n=this._ee,t
if(e._mv){t=new f_event(n,e._mv,r,e,e._d)
try{if(n.f_fireEvent(t)===!1)return!1}finally{f_classLoader.Destroy(t)}}switch(e._d){case"close":n.f_close()
break;}return!0},vp:function(r){var e=f_shellDecorator,n="rcfaces_shell_"+e.S++,t=e.ne
if(!t)e.ne=t={}
t[n]=r
return n},Ca:function(){return 20},eE:function(){return 0}}});