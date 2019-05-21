new f_class("f_consoleAppender",{extend:f_object,statics:{Initializer:function(){this.f_newInstance()},w:function(){var e=this._k
e._w6()},S:function(){var t=this._k,e=t._tc
while(e.hasChildNodes())e.removeChild(e.lastChild);},L:function(){var e=this._k
e._r6=!e._r6
f_core.SetCookieValue("consoleError",e._r6?"true":"false")
e._lo()},F:function(){var e=this._k
e._il=!e._il
f_core.SetCookieValue("consoleWarning",e._il?"true":"false")
e._lo()},V:function(){var e=this._k
e._tl=!e._tl
f_core.SetCookieValue("consoleInfo",e._tl?"true":"false")
e._lo()},M:function(){var e=this._k
e.__0=!e.__0
f_core.SetCookieValue("consoleDebug",e.__0?"true":"false")
e._lo()},O:function(n){var o=window,a=f_consoleAppender,t=f_core,r=this,e,f,i
if(!n)n=t.I(r)
e=r._k
if(e._2r)return t.N(n)
t.re(document,"mousemove",a.et,r)
t.re(document,"mouseup",a.$,r)
t.N(n)
f=t.ts(n,document)
i=t.fi(e._k)
e._fn=f.x-i.x
e._eg=f.y-(i.y+e._k.clientHeight)
o._ms=document.body.style.cursor
document.body.style.cursor="e-resize"
o._7v=e
o._uh=r
return!1},$:function(){var e=window,r=f_consoleAppender,t=f_core,i,n
t.ee(document,"mousemove",r.et,e._uh)
t.ee(document,"mouseup",r.$,e._uh)
document.body.style.cursor=e._ms
e._ms=i
n=e._7v
t.SetCookieValue("consoleWidth",n._k.clientWidth)
t.SetCookieValue("consoleHeight",n._k.clientHeight)
e._7v=e._uh=i},et:function(a){var f=f_core,i=Math.abs,e,c,o,t,n,r
if(!a)a=f.I(this)
e=window._7v
c=f.ts(a,document)
o=f.fi(e._k)
t=c.x-o.x-e._fn
n=c.y-(o.y+e._k.clientHeight)-e._eg
e._4m=e._k.clientWidth-t
e._m3=e._k.clientHeight+n
if(i(t)<i(n))r="n-resize";else if(i(t)>i(n))r="e-resize"
if(r)document.body.style.cursor=r
e._g6()
return f.N(a)}},members:{f_consoleAppender:function(){var h=window,g=parseInt,r=f_core,l="load",i="true",f,t,s,c,u,e,n
t=this
t.f_super(arguments)
t._wl=0
f_log.L(t)
if(s=r.GetCookieValue("consoleWidth"))t._4m=g(s,10)
if(c=r.GetCookieValue("consoleHeight"))t._m3=g(c,10)
u=r.GetCookieValue("consoleClosed")
if(u==i)t._2r=!0
e=r.GetCookieValue("consoleError")
t._r6=!e?!0:e==i
e=r.GetCookieValue("consoleWarning")
t._il=!e?!0:e==i
e=r.GetCookieValue("consoleInfo")
t._tl=!e?!0:e==i
e=r.GetCookieValue("consoleDebug")
t.__0=!e?!0:e==i
n=t
t._su=function(){var o,a
r.ee(h,l,n._su)
n._su=f
n._i6=!0
if(!(o=n._l2))return
n._l2=f
for(a=0;a<o.length;a++)n.f_doAppend(o[a]);}
r.re(h,l,t._su)},f_finalize:function(){var n,r=null,t=this,i,e
t._k=t._tc=t._Z=t._i6=t._l2=t._W=n
if(i=t._su){t._su=n
f_core.ee(window,"load",i)}if(e=t._t3){t._t3=n
e.onclick=r
e._k=n}if(e=t.__7){t.__7=n
e.onclick=r
e._k=n}if(e=t.__7){t.__7=n
e.onclick=r
e._k=n}if(e=t._d3){t._d3=n
e.onclick=r
e._k=n}if(e=t._y1){t._y1=n
e.onclick=r
e._k=n}if(e=t._mo){t._mo=n
e.onclick=r
e._k=n}if(e=t._p_){t._p_=n
e.onclick=r
e._k=n}t.f_super(arguments)},f_doAppend:function(l){var rr=window,c="span",g="small",tt=":",U="#666",R="string",k="0",j=" ",z="br",en="#888",W="\n",A="block",u,E,G,T,t,r,d,p,f,b,h,m,s,e,o,n,i,v,a,C
u=this
if(!u._i6){if(!(E=u._l2))u._l2=E=[]
E.push(l)
return}if(!(G=u._k))G=u._w_(l.window.document)
T=u._tc
t=T.ownerDocument
r=t.createElement("li")
r.className="f_consoleAppender_item"
if(u._wl++%2)r.style.backgroundColor="#eeeeee";else r.style.backgroundColor="#dedede"
d=l.date
p=d.getHours()
if(p<10)p=k+p
f=d.getMinutes()
if(f<10)f=k+f
b=d.getSeconds()
if(b<10)b=k+b
h=d.getMilliseconds()
if(h<10)h=k+h
if(h<100)h=k+h
m=l.message
s="["+p+tt+f+tt+b+"."+h+"]"
if(l.window!=rr)s+=" {window: "+rr.name+"}"
switch(l.level){case 0:s+=" FATAL"
break;case 1:s+=" ERROR"
break;case 2:s+=" WARN"
break;case 3:s+=" INFO"
break;case 4:s+=" DEBUG"
break;}r._i9=l.level
if(m)s+=j+l.name;else m=l.name
e=t.createElement(c)
e.style.fontSize=g
e.style.fontWeight="bold"
e.style.display=A
e.appendChild(t.createTextNode(s+j))
r.appendChild(e)
if(typeof m==R){o=m.split(W)
for(n=0;n<o.length;n++){if(n)r.appendChild(t.createElement(z))
r.appendChild(t.createTextNode(o[n]))}}if(i=l.exception){if(typeof i!=R){r.appendChild(t.createElement("hr"))
e=t.createElement(c)
e.style.fontSize=g
e.style.color=U
e.appendChild(t.createTextNode("Exception: "))
r.appendChild(e)}if(i.fileName&&i.lineNumber){e=t.createElement(c)
e.style.fontSize=g
e.appendChild(t.createTextNode("    ("))
v=t.createElement("a")
v.target="_blank"
v.href="view-source:"+i.fileName+"#"+i.lineNumber
e.appendChild(v)
v.appendChild(t.createTextNode(i.fileName+tt+i.lineNumber))
e.appendChild(t.createTextNode(")"))
r.appendChild(e)}r.appendChild(t.createElement(z))
if(i.number){e=t.createElement(c)
e.style.fontSize=g
e.style.color=en
e.appendChild(t.createTextNode("Number: "))
e=t.createElement(c)
e.style.fontSize=g
e.appendChild(t.createTextNode((i.number&65535).toString(16)))}if(i.name){e=t.createElement(c)
e.style.fontSize=g
e.style.color=en
e.appendChild(t.createTextNode("Name: "))
e=t.createElement(c)
e.style.fontSize=g
e.appendChild(t.createTextNode(i.name))}f=i.message
if(!f&&typeof i==R)f=i
if(typeof f==R){e=t.createElement(c)
e.style.fontSize=g
e.style.display=A
a=t.createElement(c)
a.style.color=U
a.appendChild(t.createTextNode("Message: "))
e.appendChild(a)
o=f.split(W)
for(n=0;n<o.length;n++){if(n)e.appendChild(t.createElement(z))
e.appendChild(t.createTextNode(o[n]))}r.appendChild(e)}C=i.description
if(C&&f!=C){e=t.createElement(c)
e.style.fontSize=g
e.style.display=A
a=t.createElement(c)
a.style.color=U
a.appendChild(t.createTextNode("Description: "))
e.appendChild(a)
o=C.split(W)
for(n=0;n<o.length;n++){if(n)e.appendChild(t.createElement(z))
e.appendChild(t.createTextNode(o[n]))}r.appendChild(e)}f=i.stack
if(typeof f==R){e=t.createElement(c)
e.style.fontSize=g
e.style.display=A
a=t.createElement(c)
a.style.color=U
a.appendChild(t.createTextNode("Stack: "))
e.appendChild(a)
o=f.split(W)
for(n=0;n<o.length;n++){if(n)e.appendChild(t.createElement(z))
e.appendChild(t.createTextNode(o[n]))}r.appendChild(e)}}u._ld(r)
T.appendChild(r)
r.scrollIntoView(!1)},_w_:function(n){var l=f_env,o=f_consoleAppender,g="none",a="img",h="div",u="f_consoleAppender_button",t=this,s=n.createElement(h),f,i,c,v,r,e
s.className="f_consoleAppender_table"
f=n.createElement(h)
f.className="f_consoleAppender_command"
s.appendChild(f)
i=n.createElement(h)
i.className="f_consoleAppender_body"
s.appendChild(i)
t._Z=i
if(t._2r)i.style.display=g
if(f_core.nt())i.style.overflow="-moz-scrollbars-vertical"
c=n.createElement("ul")
c.className="f_consoleAppender_list"
i.appendChild(c)
t._tc=c
if(v=!0){r=n.createElement(h)
f.appendChild(r)
r.className="f_consoleAppender_buttons"
if(t._2r)r.style.display=g
t._W=r
e=n.createElement(a)
e.className=u
r.appendChild(e)
e.onclick=o.S
e._k=t
e.width=e.height=16
e.title="Permanently delete all entries"
e.src=l.M()+"/consoleAppender/delete.gif"
t.__7=e
e=n.createElement(a)
e.className=u
r.appendChild(e)
e.onclick=o.L
e._k=t
e.width=e.height=16
e.title="Shows/hides all Errors"
e.src=l.M()+"/consoleAppender/error.gif"
t._d3=e
e=n.createElement(a)
e.className=u
r.appendChild(e)
e.onclick=o.F
e._k=t
e.width=e.height=16
e.title="Shows/hides all Warnings"
e.src=l.M()+"/consoleAppender/warning.gif"
t._y1=e
e=n.createElement(a)
e.className=u
r.appendChild(e)
e.onclick=o.V
e._k=t
e.width=e.height=16
e.title="Shows/hides all Infos"
e.src=l.M()+"/consoleAppender/info.gif"
t._mo=e
e=n.createElement(a)
e.className=u
r.appendChild(e)
e.onclick=o.M
e._k=t
e.width=e.height=16
e.title="Shows/hides all Debugs"
e.src=l.M()+"/consoleAppender/debug.gif"
t._p_=e}e=n.createElement(a)
e.className="f_consoleAppender_image"
f.appendChild(e)
e.onclick=o.w
e._k=t
t._t3=e
t._p8()
f.onmousedown=o.O
f._k=t
n.body.appendChild(s)
t._k=s
t._fm()
t._g6()},_w6:function(){var e=this,n="block",t
e._2r=!e._2r
if(e._2r)n="none"
f_core.SetCookieValue("consoleClosed",e._2r?"true":"false")
e._fm()
e._Z.style.display=n
if(e._W)e._W.style.display=n
e._g6()
if(!e._2r){t=e._Z.scrollHeight-e._tc.scrollHeight
if(t>0)e._Z.scrollTop=e._tc.scrollHeight+t}e._p8()},_fm:function(){var t=this,n=t._2r?"none":"solid",e=t._k.style
e.borderLeftStyle=e.borderTopStyle=e.borderBottomStyle=n},_p8:function(){var e=this,t="buttonLeft.gif"
if(!e._2r)t="button.gif"
e._t3.src=f_env.M()+"/consoleAppender/"+t},_g6:function(){var o=f_core,a=Math.floor,i="px",t=this,f=t._k.style,n,e,r
if(t._2r){f.width="16px"
f.height="41px"
t._t3.style.top="0px"
t._Z.style.width=t._Z.style.height="auto"
return}n=o.GetViewSize()
e=t._4m
r=t._m3
if(!e){e=a(n.width/3)
r=a(n.height/3)}else{if(e>n.width)e=n.width-32
if(r>n.height)r=n.height-32}f.width=e+i
f.height=r+i
e-=16
if(o.K()){e-=2
r-=2}t._Z.style.width=e+i
t._Z.style.height=r+i
t._t3.style.top="50%"},_lo:function(){var r=this,n=r._tc.childNodes,e,t
for(e=0;e<n.length;e++){t=n[e]
r._ld(t)}},_ld:function(t){var r="none",n=this,e=!0
switch(t._i9){case 0:e=!0
break;case 1:e=n._r6
break;case 2:e=n._il
break;case 3:e=n._tl
break;case 4:e=n.__0
break;}if(!e){if(t.style.display!=r)t.style.display=r
return}if(t.style.display==r)t.style.display="block"
return}}});