new f_class("f_componentsGrid",{extend:f_grid,members:{f_componentsGrid:function(){var e=this
e.f_super(arguments)
e._5_=!0
e._9h=f_core.D(e,"cellTextWrap",!1)
e._i5="f_cGrid_cell"
e._r_="f_cGrid_row"},fc:function(U,l,tt,C,k,A){var b=f_waiting,G=f_classLoader,p="text/javascript",f,e,i,u,v,o,a,h,r,g,n,t
e=this
if(!C)C=0
i={}
i.componentsGridId=e.id
i.index=U
if(l>0)i.rows=l
if(A||e.f_isRefreshFullUpdateState()||e._v<0)i.unknownRowCount=!0
if(u=e._so)i.sortIndex=u
if(v=e.as())i.filterExpression=v
e._st=tt
e._uo=C
e._hh=k
e.gh()
if(!k){o=e._c
a=e._o
if(!e._r1){e._r1=!0
e._f6=a.style.height
a.style.height=a.offsetHeight+"px"}if(o){e.em()
e.dt()
if(e._3t==1)e.hu()
e._on=e._os=f
G.V(i,o,!0)
if(h=e.f_getClass().f_getClassLoader().uu(!0,o))i["VFC_SERIAL"]=h
while(o.hasChildNodes())o.removeChild(o.lastChild);i.serializedFirst=e._M
i.serializedRows=e._b}}r=k&&!l?e._oc:e._g
g=f_env.rn()
n=new f_httpRequest(e,g,p)
t=e
n.f_setListener({onInit:function(n){if(!r)t._g=r=b.w(t,null,!1)
if(r){r.f_setText(b.S())
r.f_show()}},onError:function(n,en,j){var T
try{T=t.q(n,16777216,j)}catch(z){T=!1}if(T===!1){t._E=f
if(r)r.f_hide()
return}if(t.to())return
t._E=f
if(r)r.f_hide()},onProgress:function(n,R,l,W){if(r)r.f_setText(b.L())},onLoad:function(n,R,W){var m,c,E,d,s
if(t.to())return
try{if(n.f_getStatus()!=200){t.q(n,33554436,"Bad http response status ! ("+n.f_getStatusText()+")")
return}if(!(m=n.f_getResponseHeader("X-Camelia-Service"))){t.q(n,33554438,"Not a service response !")
return}c=n.f_getResponseContentType().toLowerCase()
if(c.indexOf("x-camelia/error")>=0){E=f_error.V(n)
t.q(n,E,R)
return}if(c.indexOf(p)<0){t.q(n,33554435,"Unsupported content type: "+c)
return}d=n.f_getResponse()
if(t._6n&&t._3t==1)t.hu()
try{f_core.of(d)}catch(z){t.q(z,33554437,"Evaluation exception")}}finally{t._E=f
if(r)r.f_hide(!0)
t._6n=f
if(t._3t==1)t.hr(!1);else if(t._3t==2)t.eh()}s=new f_event(t,"load")
try{t.f_fireEvent(s)}finally{G.Destroy(s)}}})
e._E=!0
n.f_setRequestHeader("X-Camelia","componentsGrid.update")
n.f_doFormRequest(i)},mm:function(i){var r,e=this,n,t
e.gh()
n=e._o
if(e._r1){n.style.height=e._f6
e._r1=e._f6=r}if(!e._6n){e._M=i
if(e._P){t=e._1e.length
e._1e=[]
e._nf=r
if(t&&!e._r8)e.tu(null,2048)}}e.tr=!1},cv:function(){var h=f_core,r,e=this,v=e._c,s,n,u,c,t,o,l,a,f,g,i
try{e.f_getClass().f_getClassLoader().Ce(e,v)}catch(d){h.Error(f_componentsGrid,"f_updateNewPage: Can not load content of componentsGrid cell '"+content+"'",d)}if(e._v<0){s=e._K.length+e._M
if(e._n7<s)e._n7=s}n=r
if(!e._hh){u="table"
if(h.K())u="block"
e._I.style.display=u
if(e._F&&e._o)e._o.scrollLeft=e._F.scrollLeft
c=v.childNodes
for(t=0;t<c.length;t++){o=c[t]
l=o._w
if(l===r)continue
if(e._M+t==e._st){n=o
e._st=r
break}}if(h.nt()&&(e._b>0&&!e.style.height)){a=e._I.offsetHeight
if(f=e._o)a+=g=f.offsetHeight-f.clientHeight
e._I.parentNode.style.height=a+"px"}switch(e._3t){case 2:e.eh()
break;case 1:e.hr()
break;}}e.tr=!0
e.th()
if(e._r9||!e._ig)e._r9=r
if(n){e._nf=n
i=e._uo
e._uo=r
if(i&4)i|=2
e.ie(n,!0,null,i)}e.ns()
if(!e._K.length)e.pi()},ef:function(){var r=f_grid,s=f_core,n=this,h=r.pf(n._I),g=n._6i,i=null,l=n._N,f=0,t,a,e,u,o,c
for(t=0;t<l.length;t++){a=l[t]
if(!a._C)continue
f++
if(!a._yD)continue
if(!i)i=[]
i.push(f-1)}for(t=0;t<h.length;t++){e=h[t]
n._K.push(e)
e._t=n
e._w=s.D(e,"rowValue")
e._0n=s.te(e,"rowIndex")
if(!e.id)e.id=n.id+"::row"+t
e._y4=!0
e._Y=g[(t+1)%g.length]
if(i){u=e.cells
for(o=0;o<i.length;o++){f=i[o]
c=u[f]
c._i5=s.D(c,"className")}}if(n._P){e.onmousedown=r.dg
e.onmouseup=r.uv
e.onclick=r.uv
e.ondblclick=r.fm
e.onfocus=r.n_
if(!n._r8&&s.Q(e,"selected"))n.vn(e,!0)}}n.f_super(arguments)},yg:function(l,h,p){var v,f=this,n,r,o,e,t,a
function g(d,m){var e,c,u,s,i
for(e=0;e<l.length;e++){c=p[e]
u=d.childNodes[c]
s=m.childNodes[c]
if(!(i=l[e].call(this,u,s,u._w,s._w)))continue
return h[e]?i:-i}return 0}
n=f._I.tBodies[0]
r=[]
o=n.rows
for(e=0;e<o.length;e++){t=o[e]
if(t._w===v)continue
r.push(t)}r.sort(g)
f._I.removeChild(n)
while(n.firstChild)n.removeChild(n.firstChild);for(e=0;e<r.length;e++){t=r[e]
t._Ep=null
n.appendChild(t)}a=f._r_
for(e=0;e<r.length;e++){t=r[e]
t._Y=a[e%a.length]
f.nn(t)}f._I.appendChild(n)},uy:function(){var m=f_grid,h=arguments,C=f_core,R,E=null,t=this,e,i,b=t._on,k,o,n,T,f,l,a,u,p,s,c,r,v,g,d
if(b&&b.length){e=b.shift()
i=e.firstChild
while(i.hasChildNodes())i.removeChild(i.lastChild);}else{e=document.createElement("tr")
t._c.appendChild(e)}t._K.push(e)
e._t=t
k=t._K.length
o=0
e.id=h[o++]
if(t._P){e.onmousedown=m.dg
e.onmouseup=C.oo
e.onclick=C.oo
e.ondblclick=m.fm
e.onfocus=m.n_}e._y4=!0
n=h[o++]
if(T=n._n)e._w=T;else e._w=e.id
e._0n=n._0n
f=E
if(n)f=n._G
if(!f)f=t._6i[k%t._6i.length]
e.className=e._Y=f
if(t._P){l=!1
if(!t._r8&&n)l=n.__
t.vn(e,l)}e._8r=a=[]
u=t._N
p=t._9h
for(s=0;s<u.length;s++){c=u[s]
if(c._C===E){a.push(E)
continue}n=h[o++]
if(!c._C){if(!n)n={}
r=n
a.push(r)
continue}v=h[o++]
if(i){r=i
r.colSpan=1
r.className=""
i=R}else{r=document.createElement("td")
e.appendChild(r)}t._0s.push(r)
r.valign="top"
if(!p)r.noWrap=!0
g=c._ea
if(n){if(n._G)r._i5=n._G
if(n._l7)r.tooltip=n._l7
if(n._ea)g=n._ea}r.align=g
try{t.f_getClass().f_getClassLoader().rh(t,r,v)}catch(G){C.Error(f_componentsGrid,"f_addRow2: Can not load content of componentsGrid cell '"+v+"'")}}d=t._ne
if(!t._e&&e._w==d){t._e=e
t._ne=R}t.nn(e)
return e},f_findComponentInRow:function(n){var e=f_core.io(null,arguments,1),t=this.f_getRowByValue(n,!0)
return fa_namingContainer.w(t,e)},f_clearAll:function(){var a,e=this,o=e.ff(),n,f,i,r,t
if(!o.length)return 0
e._e=a
e._v=e._M=0
n=e._c
f=e._K
i=0
for(r=0;r<o.length;r++){t=o[r]
if(e._af(t))selectionChanged=!0
e.vt(t)
i++}e.f_getClass().f_getClassLoader().uu(!1,n)
while(n.hasChildNodes()){t=n.lastChild
f.it(t)
n.removeChild(t)}e.ns()
if(selectionChanged)e.tu()
return i},f_clear:function(){var f=arguments,s,e=this,r=0,o=e._c,c=e._K,a=!1,n,i,t
for(n=0;n<f.length;n++){i=f[n]
if(!(t=e.f_getRowByValue(i,!1)))continue
if(e._af(t))a=!0
if(t==e._e)e._e=s
o.removeChild(t)
c.it(t)
e.vt(t)
r++
if(e._v>=0)e._v--}if(r<1)return 0
e.f_getClass().f_getClassLoader().uu(!1,o)
e.ns()
if(a)e.tu()
return r}}});