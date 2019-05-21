new f_class("f_dateEntry",{extend:f_compositeNumEntry,aspects:[fa_calendarPopup],members:{f_dateEntry:function(){var t=f_core,e=this,n
e.f_super(arguments)
e._uD=t.D(e,"showOnFocus")
if(n=t.D(e,"twoDigitYearStart"))e._cn=t.nf(n)},og:function(e){var t
this.f_super(arguments,e)
if(e._tt===t)e._tt=0},f_getMinDate:function(){var n=f_core,r,t=this,e=t._oe
if(e!==r)return e
if(e=n.D(t,"minDate"))e=n.nf(e);else e=null
return t._oe=e},f_getMaxDate:function(){var n=f_core,r,t=this,e=t._o0
if(e!==r)return e
if(e=n.D(t,"maxDate"))e=n.nf(e);else e=null
return t._o0=e},f_getValue:function(){return this.f_getDate()},f_getDate:function(v){var u,h=null,l=this,n=-1,o=1,i=1,g=l._t2,f,t,s,a,c,e,r
for(f=0;f<g.length;f++){t=g[f]
s=t._B
a=t._tt
c=t._4t
switch(v){case"default":e=t._at
break;default:e=parseInt(t.value,10)
if(isNaN(e)||a!==u&&e<a||c!==u&&e>c)e=-1;}if(e===u)e=-1
switch(s){case"d":i=e
break;case"M":o=e
break;case"y":n=e
break;}}if(n<0||o<1||i<1)return h
if(n<100)n=f_dateFormat.ResolveYear(n,o,i,l._cn)
r=new Date(n,o-1,i)
return r.getDate()!=i||r.getMonth()!=o-1||r.getFullYear()!=n?h:r},f_setValue:function(e){this.f_setDate(e)},f_setDate:function(n){var c=null,f=this,a=f._t2,r,t,o,i,e
for(r=0;r<a.length;r++){t=a[r]
if(!n){t.value=""
continue}o=t._B
i=parseInt(t.maxLength,10)
e=-1
switch(o){case"d":e=n.getDate()
break;case"M":e=n.getMonth()+1
break;case"y":e=n.getFullYear()
if(i==2)e%=100
break;}if(e<0)continue
e=f.nu(t,e,i)
if(e!=t.value)t.value=e}f.f_fireEvent("change",c,c,n)},ir:function(){var e=this,t=e.f_getDate()
e.P("value",t)
e.f_super(arguments)},os:function(){var E=parseInt,C="y",b="invalidDate.error",T="M",k="d",r=this,R=f_messageContext.Get(r),n,a,f,p,l,t,u,s,h,o,c,m,e,i,g,d,v
if(!R)return!0
n=2000
a=f=1
p=r.f_isRequired()
l=0
u=r._t2
for(s=0;s<u.length;s++){h=u[s]
c=0
switch(m=h._B){case k:o=b
c=31
break;case T:o="invalidMonth.error"
c=12
break;case C:o="invalidYear.error"
break;}if(!(e=h.value)){if(!p){l++
continue}t=o
break}e=E(e,10)
if(isNaN(e)||e<1||c&&E(e,10)>c){t=o
break}switch(m){case k:f=e
break;case T:a=e
break;case C:n=e
break;}}if(!t)if(l&&l!=u.length)t="required.error";else{if(n<100)n=f_dateFormat.ResolveYear(n,a,f,r._cn)
i=new Date(n,a-1,f)
if(i.getDate()!=f||i.getMonth()!=a-1||i.getFullYear()!=n)t=b;else{g=i.getTime()
d=r.f_getMinDate()
v=r.f_getMaxDate()
if(d&&g<d.getTime())t="minDate.error";else if(v&&g>v.getTime())t="maxDate.error"}}if(!t)return!0
r.mn(f_dateEntry,t)
return!1}}});