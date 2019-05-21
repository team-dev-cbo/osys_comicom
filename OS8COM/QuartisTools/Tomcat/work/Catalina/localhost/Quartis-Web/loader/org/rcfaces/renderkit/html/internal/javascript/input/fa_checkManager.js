new f_aspect("fa_checkManager",{extend:[fa_itemsManager,fa_clientFullState],members:{fa_checkManager:function(){var r=f_core,i,e=this,n=r.te(e,"checkCardinality",i),t
if(n===i)return
if(t=r.te(e,"clientCheckFullState",0)){e._b7=t
e._io=[]}e._df=n
e._6t=!0
e._f9=[]
e._ta=[]
e._ni=[]},f_finalize:function(){var e
this._ni=e},ir:{before:function(){var r="uncheckedItems",f="checkedItems",i="all",e,n,t
e=this
if(!e._6t)return
if(e._b7==2){e.P(r,i)
e.P(f,e.f_getCheckedValues(),!0)
return}n=e._f9
if(n.length)e.P(f,n,!0)
if(e._s8)e.P(r,i);else{t=e._ta
if(t.length)e.P(r,t,!0)}}},wD:function(e){this._io=e},_6u:function(t,n,r){var i,e=this
if(e.ec(t))return
e.hc(t,!0)
e.nn(t)
e._ni.push(t)
if(n===i)n=e.ti(t)
if(!e._ta.it(n))e._f9.fr(n)
if(r)e.ae(t)},_tE:function(r,d,l,g){var m,i=this,h=!1,u={},e,t,o,v,f,n,a,s,c
if(g===m)g=i.ff()
for(e=0;e<g.length;e++){t=g[e]
u[i.ti(t)]=t}o=i._f9
for(e=0;e<o.length;){v=o[e]
f=!1
for(n=0;n<r.length;n++){if(v!=r[n])continue
r.splice(n,1)
f=!0
break}if(f||d){e++
continue}if(t=u[v]){h=!0
i._h6(t)
continue}o.splice(e,1)}if(!i._s8){a=i._ta
for(e=0;e<a.length;){s=a[e]
f=!1
for(n=0;n<r.length;n++){if(s!=r[n])continue
h=f=!0
r.splice(n,1)
break}if(!f){e++
continue}if(t=u[s]){i._6u(t,s,l)
l=!1
h=!0
continue}a.splice(e,1)}}for(e=0;e<r.length;e++){c=r[e]
if(!(t=u[c])){o.push(c)
continue}i._6u(t,c,l)
l=!1}return h},_h6:function(t,n){var r,e=this
if(!e.ec(t))return!1
e.hc(t,!1)
e.nn(t)
e._ni.it(t)
if(n===r)n=e.ti(t)
return e._f9.it(n)?!0:(e._s8?!1:e._ta.fr(n))},_9_:function(){var e=this,r=e._ni,t,n
if(r.length){e._ni=[]
for(t=0;t<r.length;t++){n=r[t]
e.hc(n,!1)
e.nn(n)}}e._s8=!0
e._ta=[]
e._f9=[]},dh:function(n,t){var e=this,r=e.ti(n)
t=e.pp(r,t)
e.hc(n,t)
if(!t)return!1
e._ni.push(n)
return!0},ru:function(t,o,s,c){var e=this,a=e._df,r,n,i,f
if(!a)return!1
if(e.tc(t))return!1
r=e.ec(t)
n=e.ti(t)
switch(a){case 3:if(r)return!1;case 1:e._9_()
if(c)e._6u(t,n,o)
break;case 4:if(r&&e._ni.length<2)return!1;case 2:if(r){e._h6(t,n)
break}e._6u(t,n,o)
break;}i=0
if(c)i|=1
f=e.fh(t)
e.ha(s,i,f,n)
return!0},ha:function(r,e,n,t){return this.f_fireEvent("check",r,n,t,null,e)},pp:function(t,i){var e=this,n=i,r=e._io
if(!n&&r)n=r.cf(t)
return n&&!e._s8?!e._ta.cf(t):e._f9.cf(t)},f_getCheckedValues:function(){var s,t=this,e=[],n,a,f,i,r,c,o
if(!t._6t)return e
if(t._io){if(!t._s8){n=t._io
if(n&&n.length)e.push.apply(e,n)}a=t._f9
if(a.length)e.dr.apply(e,a)
f=t._ta
if(f.length)e.fd.apply(e,f)
return e}i=t._ni
for(r=0;r<i.length;r++){c=i[r]
o=t.ti(c)
if(o===s)continue
e.push(o)}return e},f_setCheckedValues:function(t,n){var e=this
if(!t||!t.length){e._9_()
e.ha()
return}e._9_()
e._tE(t,n)
e.ha()}}});