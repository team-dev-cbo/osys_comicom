new f_aspect("fa_selectionManager",{extend:[fa_itemsManager,fa_selectionProvider,fa_clientFullState],statics:{BEGIN_PHASE:"begin",END_PHASE:"end",w:function(n){var t=f_core,e=0
if(t.IsAppendRangeMode(n))e|=4
if(t.IsAppendMode(n))e|=2
if(!e)e|=1
e|=8
if(!(e&4))e|=16
return e},S:function(t){var n=f_core,e=0,r
if(n.IsAppendRangeMode(t))e|=4;else if(!n.IsAppendMode(t)){e|=1
e|=16}switch(r=t.keyCode){case 13:case 14:e|=8;case 32:if(!(e&4))e|=16
if(t.ctrlKey)e|=2
break;}return e},L:function(e,n,t){e._c0=n
e._r8=t?[]:null}},members:{fa_selectionManager:function(){var i=f_core,n,e=this,t,r
if(e._c0===n){t=i.te(e,"selectionCardinality",n)
if(t===n)return
e._c0=t
if(r=i.te(e,"clientSelectionFullState",0)){e._m9=r
e._r8=[]}}e._P=!0
e._o9=[]
e._8o=[]
e._1e=[]},f_finalize:function(){var e
this._1e=this._nf=e},ir:{before:function(){var r="deselectedItems",i="selectedItems",f="all",e,t,n
e=this
if(!e._P)return
if(e._m9==2){e.P(r,f)
e.P(i,e.f_getSelection(),!0)
return}t=e._o9
if(t.length)e.P(i,t,!0)
if(e._u2)e.P(r,f);else{n=e._8o
if(n.length)e.P(r,n,!0)}}},ie:function(e,r,f,i,o,a){var t=this,n=t._e
if(e!=n){t._e=e
if(n)t.nn(n)
if(e)t.nn(e)}if(!e)return
if(i&&t.r_(e,r,f,i,o,a))r=!1
if(r)t.ae(e)
if(!t._P)return
if(i&16&&!t.tc(e))t._nf=e},vn:function(n,e){var t=this,r=t.ti(n)
e=t._um(r,e)
t.ol(n,e)
if(!e)return!1
t._1e.push(n)
return!0},_e_:function(t,n,r){var i,e=this
if(e.ou(t))return
e.ol(t,!0)
e.nn(t)
e._1e.push(t)
if(n===i)n=e.ti(t)
if(!e._8o.it(n))e._o9.fr(n)
if(r)e.ae(t)},_af:function(t,n){var r,e=this
if(!e.ou(t))return!1
e.ol(t,!1)
e.nn(t)
e._1e.it(t)
if(n===r)n=e.ti(t)
if(e._o9.it(n)){e._6m=t
return!0}return e._u2?!1:e._8o.fr(n)},_5c:function(){var e=this,r=e._1e,t,n
if(r.length){e._1e=[]
for(t=0;t<r.length;t++){n=r[t]
e.ol(n,!1)
e.nn(n)}}e._u2=!0
e._8o=[]
e._o9=[]},_gd:function(c,a,s){var u,r=this,o=r.ff(!0),n,t,i,e,f
if(!o)return
n=[]
t=!1
for(i=0;i<o.length;i++){e=o[i]
f=r.ti(e)
if(t&&!r.tc(e))n.push(f)
if(e!=c&&e!=a)continue
if(t){t=!1
break}if(!r.tc(e))n.push(f)
if(c==a)break
t=!0}return t||!n.length?u:r._p4(n,s,!1,o)},_p4:function(r,v,l,g){var d,i=this,u={},e,t,o,h,f,n,s,a,c
if(g===d)g=i.ff()
for(e=0;e<g.length;e++){t=g[e]
u[i.ti(t)]=t}o=i._o9
for(e=0;e<o.length;){h=o[e]
f=!1
for(n=0;n<r.length;n++){if(h!=r[n])continue
r.splice(n,1)
f=!0
break}if(f||v){e++
continue}if(t=u[h]){i._af(t)
continue}o.splice(e,1)}if(!i._u2){s=i._8o
for(e=0;e<s.length;){a=s[e]
f=!1
for(n=0;n<r.length;n++){if(a!=r[n])continue
f=!0
r.splice(n,1)
break}if(!f){e++
continue}if(t=u[a]){i._e_(t,a,l)
l=!1
continue}s.splice(e,1)}}for(e=0;e<r.length;e++){c=r[e]
if(!(t=u[c])){o.push(c)
continue}i._e_(t,c,l)
l=!1}},r_:function(r,d,h,n,v,i){var e=this,m=e._c0,t=!0,s,c,o,f,l,a,g,u
if(v)t=v=="end"
e._3D=v
if(!m)return!1
if(e.tc(r))return!1
s=n&4
c=e.ou(r)
if(c&&f_core.an(h))return!0
o=e.ti(r)
f=0
if(n&8)f|=256
if(n&32)f|=2048
if(n)f|=1
l=e.fh(r)
if(!t&&e.uE(h,f,l,o)===!1){e._uv=!0
return!1}if(i&&n&1)e._uv=!0
if(t&&e._uv)return e._uv=!1
switch(m){case 1:if(c&&(n&2&&t)){e._5c()
break}if(n&2&&i)return!1;case 3:if(i||t){e._5c()
e._e_(r,o,d)}break;case 4:if((c&&!s)&&e._1e.length<2)break;case 2:a=e._nf
if(s){if(!(a=e._nf))e._nf=a=r
if(t||i)e._gd(r,a,(n&2))}else if(c){if(n&2&&t){e._af(r,o)
break}g=e.f_getSelection()
if(n&1&&(t||i)&&g.length>1)e._5c()}else if(n&1&&(t||i))e._5c()
if(n&2&&!t)break
if(n&2&&(t||i)){u=e._6m
if(u&&u==r)e._6m=null}if(i||t)e._e_(r,o,d)
break;}if(!t&&!i)return!0
e.tu(h,f,l,o)
return!0},bD:function(e){this._r8=e},f_getSelection:function(){var s,t=this,e=[],n,i,a,f,r,c,o
if(!t._P)return e
if(t._m9){if(!t._u2){n=t._r8
if(n&&n.length)e.push.apply(e,n)}i=t._o9
if(i.length)e.dr.apply(e,i)
a=t._8o
if(a.length)e.fd.apply(e,a)
return e}f=t._1e
for(r=0;r<f.length;r++){c=f[r]
o=t.ti(c)
if(o===s)continue
e.push(o)}return e},_um:function(n,i){var e=this,t=i,r=e._r8
if(!t&&r)t=r.cf(n)
return t&&!e._u2?!e._8o.cf(n):e._o9.cf(n)},f_setSelection:function(t,n){var e=this
if(!t||!t.length){e._5c()
e.tu()
return}e._5c()
e._p4(t,n)
e.tu()},uE:function(r,e,n,t){return this.f_fireEvent("preSelection",r,n,t,this,e)},tu:function(r,e,n,t){return this.f_fireEvent("selection",r,n,t,this,e)}}});