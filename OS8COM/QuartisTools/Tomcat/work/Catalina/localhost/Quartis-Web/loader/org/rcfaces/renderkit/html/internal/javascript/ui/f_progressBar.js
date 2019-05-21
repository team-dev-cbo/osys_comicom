new f_class("f_progressBar",{extend:f_component,members:{f_progressBar:function(){var f=parseFloat,i=f_core,e=this,r,n,t
e.f_super(arguments)
if(e.nodeType==1){r=i.D(e,"min")
e._tt=r?f(r):0
n=i.D(e,"max")
e._4t=n?f(n):0
t=i.D(e,"value")
e._n=t?f(t):0}if(!e.childNodes.length)e.wh()
e._2l()},f_finalize:function(){var r=f_core,n,e=this,t
e._4r=n
if(t=e._3c){e._3c=n
r.rt(e).clearTimeout(t)}if(t=e._r3){e._r3=n
r.rt(e).clearInterval(t)}e.f_super(arguments)},wh:function(){var v=parseInt,e=f_core,g="img",u=this,r=v(e.uh(u,"width")),a=v(e.uh(u,"height")),s=20,h=f_env.GetBlankImageURL(),d=["f_progressBar_bg","f_progressBar_fg"],l=[],f,n,c,t,o,i
u._4r=l
for(f=0;f<d.length;f++){n=d[f]
c=e.B(u,"div",{className:n,cssWidth:r,cssHeight:a})
t=s
o=r-s*2
i=s
if(r<s*2){t=Math.floor(r/2)
o=0
i=r-t}l.push(e.B(c,g,{className:n+"Left",width:t,cssWidth:t,height:a,src:h}),e.B(c,g,{className:n+"Center",width:o,cssWidth:o,height:a,src:h}),e.B(c,g,{className:n+"Right",width:i,cssWidth:i,height:a,src:h}))}l.push(e.B(l[3].parentNode,g,{className:"f_progressBar_anim",width:75,cssWidth:75,height:a,src:h}))},f_getMin:function(){return this._tt},f_setMin:function(t){var e=this
e._tt=t
e.P("min",t)
e._2l()},f_getMax:function(){return this._4t},f_setMax:function(t){var e=this
e._4t=t
e.P("max",t)
e._2l()},f_getValue:function(){return this._n},f_setValue:function(t){var e=this
e._n=t
e.P("value",t)
e._2l()},f_setIndeterminate:function(e){this.__n=e},f_isIndeterminate:function(){return this.__n},_2l:function(){var l=f_core,E=Math.floor,m="inherit",b="hidden",f="px",p,e=this,s=e._tt,c=e._4t,n=e._4r,h,g,a,o,r,t,v,i,u,d
if(!n)return
h=n[3].parentNode
g=h.parentNode.offsetWidth-2
if(g<1)return
a=h.style
o=e._n
if(s>=c||o<=s){if(a.visibility!=b)a.visibility=b
if(r=e._3c){e._3c=p
l.rt(e).clearTimeout(r)}if(r=e._r3){e._r3=p
l.rt(e).clearInterval(r)}return}if(o>c)o=c
t=E((o-s)/(c-s)*g)
v=e._1o
if(v&&o<c)t-=t%v
n[3].parentNode.style.width=t+f
i=20
if(t<i*2){t-=u=E(t/2)
n[3].style.width=u+f
n[4].style.width="0"
n[5].style.width=t+f}else{t-=i*2
n[3].style.width=i+f
n[4].style.width=t+f
n[5].style.width=i+f
if(l.nt()){n[5].style.position="absolute"
n[5].style.left=(i+t)+f}}if(a.visibility!=m)a.visibility=m
r=e._3c
if(e.tr&&!r&&!e._r3){d=e
e._3c=l.rt(e).setTimeout(function(){d._eC()},2000)}},_eC:function(){var r=f_core,i,e=this,t,n
e._3c=i
if(!e._4r)return
t=e._4r[6]
t.style.left=-75+"px"
t.style.visibility="inherit"
if(e._r3)r.rt(e).clearInterval(e._r3)
n=e
e._r3=r.rt(e).setInterval(function(){n._cb()},50)},_cb:function(){var r=f_core,a,e=this,t,n,o,i,f
if(!e._4r){if(t=e._r3){e._r3=a
r.rt(e).clearInterval(t)}return}n=e._4r[6]
o=parseInt(n.style.left)+14
i=n.parentNode
f=i.offsetWidth
if(r.K())f-=r.st(i,"left","right")
if(o>f){if(t=e._r3){e._r3=a
r.rt(e).clearInterval(t)}n.style.visibility="hidden"
return}n.style.left=o+"px"}},statics:{Create:function(f,i,r,e){var t,n
if(!e)e=""
e="f_progressBar "+e
t=f_core.B(f,"div",{className:e,width:i,height:r})
t.style.width=i+"px"
t.style.height=r+"px"
n=f_progressBar.me(t)
n.sh()
return n}}});