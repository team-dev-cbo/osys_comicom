new f_aspect("fa_additionalInformationManager",{extend:[fa_itemsManager,fa_clientFullState],members:{fa_additionalInformationManager:function(){var i=f_core,n,e=this,t,r
if(e._nm===n){t=i.te(e,"additionalInformationCardinality",n)
if(t===n)return
e._nm=t
if(r=i.te(e,"clientAdditionalInformationFullState",0)){e._Ct=r
e._7_=[]}}e._r7=!0
e._fr=[]
e._ff=[]
e._f1=[]},f_finalize:function(){var e
this._f1=e},ir:{before:function(){var i="all",f="showAdditional",r="hideAdditional",e,t,n
e=this
if(!e._r7)return
if(e._Ct==2){e.P(r,i)
e.P(f,e.f_getAdditionalInformationValues(),!0)
return}t=e._fr
if(t.length)e.P(f,t,!0)
if(e._c3)e.P(r,i);else{n=e._ff
if(n.length)e.P(r,n,!0)}}},Cu:function(t){var f="hideAdditional",n=this,i="",r=n._fr,e
if(r.length)t["showAdditional"]=r.join(i)
if(n._c3)t[f]="all";else{e=n._ff
if(e.length)t[f]=e.join(i)}},eC:function(n,e){var t=this,r=t.ti(n)
e=t.sE(r,e)
t.ga(n,e)
if(!e)return!1
t._f1.push(n)
return!0},__l:function(t,n,r){var i,e=this
if(e.ac(t))return
e.ga(t,!0)
e.nn(t)
e._f1.push(t)
if(n===i)n=e.ti(t)
if(!e._ff.it(n))e._fr.fr(n)
if(r)e.ae(t)},_d4:function(t,n){var r,e=this
if(!e.ac(t))return!1
e.ga(t,!1)
e.nn(t)
e._f1.it(t)
if(n===r)n=e.ti(t)
return e._fr.it(n)?!0:(e._c3?!1:e._ff.fr(n))},_d2:function(){var e=this,r=e._f1,t,n
if(r.length){e._f1=[]
for(t=0;t<r.length;t++){n=r[t]
e.ga(n,!1)
e.nn(n)}}e._c3=!0
e._ff=[]
e._fr=[]},_E1:function(r,v,l,g){var d,i=this,u={},e,t,o,h,f,n,s,a,c
if(g===d)g=i.ff()
for(e=0;e<g.length;e++){t=g[e]
u[i.ti(t)]=t}o=i._fr
for(e=0;e<o.length;){h=o[e]
f=!1
for(n=0;n<r.length;n++){if(h!=r[n])continue
r.splice(n,1)
f=!0
break}if(f||v){e++
continue}if(t=u[h]){i._d4(t)
continue}o.splice(e,1)}if(!i._c3){s=i._ff
for(e=0;e<s.length;){a=s[e]
f=!1
for(n=0;n<r.length;n++){if(a!=r[n])continue
f=!0
r.splice(n,1)
break}if(!f){e++
continue}if(t=u[a]){i.__l(t,a,l)
l=!1
continue}s.splice(e,1)}}for(e=0;e<r.length;e++){c=r[e]
if(!(t=u[c])){o.push(c)
continue}i.__l(t,c,l)
l=!1}},go:function(t,a,s,o){var e=this,c=e._nm,r,n,i,f
if(!c)return!1
if(e.tc(t))return!1
r=e.ac(t)
n=e.ti(t)
switch(c){case 3:if(r)return!1;case 1:e._d2()
if(o)e.__l(t,n,a)
break;case 4:if(r&&e._f1.length<2)return!1;case 2:if(r){e._d4(t,n)
break}e.__l(t,n,a)
break;}i=0
if(o)i|=1
f=e.fh(t)
e.mf(s,i,f,n)
return!0},oD:function(e){this._7_=e},f_getAdditionalInformationValues:function(){var s,t=this,e=[],n,i,a,f,r,c,o
if(!t._r7)return e
if(t._0D){if(!t._c3){n=t._7_
if(n&&n.length)e.push.apply(e,n)}i=t._fr
if(i.length)e.dr.apply(e,i)
a=t._ff
if(a.length)e.fd.apply(e,a)
return e}f=t._f1
for(r=0;r<f.length;r++){c=f[r]
o=t.ti(c)
if(o===s)continue
e.push(o)}return e},sE:function(n,i){var e=this,t=i,r=e._7_
if(!t&&r)t=r.cf(n)
return t&&!e._c3?!e._ff.cf(n):e._fr.cf(n)},f_expandAdditionalInformations:function(e,n){var t=this
if(e&&typeof e=="object"&&e instanceof Array==!1)e=[e]
if(!e||!e.length){t._d2()
t.mf()
return}t._E1(e,n)
t.mf()},mf:function(r,e,n,t){this.f_fireEvent("additionalInformation",r,n,t,this,e)}}});