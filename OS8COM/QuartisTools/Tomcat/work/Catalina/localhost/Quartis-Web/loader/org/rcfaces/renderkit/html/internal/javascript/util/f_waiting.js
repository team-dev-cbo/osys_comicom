new f_class("f_waiting",{extend:f_object,statics:{LEFT:1,CENTER:2,RIGHT:3,TOP:4,MIDDLE:8,BOTTOM:12,WAIT_IMAGE_WIDTH:16,WAIT_IMAGE_HEIGHT:16,w:function(t,a,h,o,n,s,g){var c=f_waiting,l=f_core,f="number",u,r,e,i
if(n===u)n=10
r=t.ownerDocument
e=r.createElement("div")
i="f_waiting"
e.className=i+((h)?" f_waiting_inline":" f_waiting_absolute")
e.setAttribute(l._m+":class",i)
if(a)e.setAttribute(l._m+":lookId",a)
e._8E=h
if(!o)o=c.S()
e.appendChild(r.createTextNode(o))
e._6a=t
if(t.tagName.toLowerCase()=="select")t=t.parentNode
t.appendChild(e)
if(typeof s==f)e._pa=s
if(typeof g==f)e._pf=g
if(typeof n==f)e._5v=n
return c.f_getClassLoader().oa(e,!1,!0)},S:function(){return f_resourceBundle.Get(f_waiting).f_get("LOADING_MESSAGE")},L:function(){return f_resourceBundle.Get(f_waiting).f_get("RECEIVING_MESSAGE")},F:function(e){var a="px",i=e._6a,n,t,o,f,r,c
if(!i||!i.tagName)return
n=0
if(e._pa)n+=e._pa
t=0
if(e._pf)t+=e._pf
if(e._5v){o=e._5v&3
f=e._5v&12
if(o>0)if(o==2)n=(i.offsetWidth-100)/2;else if(o==3){n=i.offsetWidth-n
if(n>=100)n-=100}if(f>0)if(f==8)t=(i.offsetHeight-24)/2;else if(f==12){t=i.offsetHeight-t
if(t>=24)t-=24}}if(n<0)n=0
if(t<0)t=0
if(e._8E){e.style.marginLeft=n+a
e.style.marginTop=t+a}else{for(r=e._6a;r;r=r.offsetParent){c=f_core.uh(r,"position")
if(c=="absolute"||c=="relative")break
n+=r.offsetLeft
t+=r.offsetTop}e.style.left=n+a
e.style.top=t+a}},V:function(e){var f=f_core,i="none",a="block",o,t=e._l9,n=e._t6,r
if(t==n){if(n==0&&e.style.display!=i)e.style.display=i
window.clearInterval(e._D)
e._D=o
return}if(e._mu>0){e._mu--
return}r=t
if(t>n){t-=0.3
if(t<n)t=n}else{t+=0.3
if(t>n)t=n}e._l9=t
if(e.style.opacity!==o)e.style.opacity=t;else if(f.K())e.style.filter="alpha(opacity="+Math.floor(t*100)+")";else if(f.nt())e.style.MozOpacity=t;else{e._l9=n
if(n>0)e.style.display=a;else e.style.display=i
return}if(r==0)e.style.display=a},M:function(){return f_waiting.$("/waiting/waiting2.gif")},O:function(){return f_waiting.$("/waiting/error.gif")},$:function(e){var t=f_env.M()
e=t+e
f_imageRepository.PrepareImage(e)
return e}},members:{f_finalize:function(){var r,e=this,n,t
if(n=e._D){e._D=r
e._R._6e._e6.clearInterval(n)}e._6a=r
if(t=e.parentNode)t.removeChild(e)
e.f_super(arguments)},f_getText:function(){return this._l},f_setText:function(e){this._l=e
e=f_core.sr(e)
if(f_core.K())e="<span style='background-color: white'>&nbsp;"+e+"</span>"
this.innerHTML=e},f_close:function(){this.style.display="none"},f_show:function(){var t=this,e
if(!t.__4){if(!(e=t._6a.style.cursor))e="auto"
t.__4=e}t._6a.style.cursor="wait"
t._3d(1)},f_hide:function(r){var n,e=this,t
e._3d(0,r)
if(e.__4){t=e._6a
if(t.style.cursor=="wait")t.style.cursor=e.__4
e.__4=n}},_3d:function(t,i){var n=f_waiting,e=this,r
if(t<0)t=0;else if(t>1)t=1
if(typeof e._l9!="number")e._l9=0
if(e._t6==t)return
e._t6=t
n.F(e)
if(e._D)return
if(!i)e._mu=3
r=e
e._D=window.setInterval(function(){n.V.call(n,r)},100)}}});