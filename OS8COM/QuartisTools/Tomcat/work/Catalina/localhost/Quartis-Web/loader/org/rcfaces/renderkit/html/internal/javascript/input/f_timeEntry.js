new f_class("f_timeEntry",{extend:f_compositeNumEntry,members:{f_timeEntry:function(){this.f_super(arguments)},f_getTime:function(v){var u,h=null,o=-1,l=0,a=0,s=0,g=this._t2,r,t,c,i,f,e,n
for(r=0;r<g.length;r++){t=g[r]
c=t._B
i=t._tt
f=t._4t
switch(v){case"default":e=t._at
break;default:e=parseInt(t.value,10)
if(isNaN(e)||i!==u&&e<i||f!==u&&e>f)e=-1;}if(e===u)e=-1
switch(c){case"H":o=e
break;case"m":l=e
break;case"s":a=e
break;case"S":s=e
break;}}if(o<0)return h
n=new f_time(o,l,a,s)
return n.f_getHours()!=o||n.f_getMinutes()!=l||n.f_getSeconds()!=a||n.f_getMilliseconds()!=s?h:n},f_setTime:function(r){var a=this,o=a._t2,n,t,f,i,e
for(n=0;n<o.length;n++){t=o[n]
f=t._B
i=parseInt(t.maxLength,10)
e=-1
switch(f){case"H":e=r.f_getHours()
break;case"m":e=r.f_getMinutes()
break;case"s":e=r.f_getSeconds()
break;case"S":e=m.f_getMilliseconds()
break;}if(e<0)continue
e=a.nu(t,e,i)
if(e!=t.value)t.value=e}},f_getMinTime:function(){var n,t=this,e=t._ao
if(e!==n)return e
if(e=f_core.D(t,"minTime"))e=new f_time(parseInt(e,10));else e=null
return t._ao=e},f_getMaxTime:function(){var n,t=this,e=t._c6
if(e!==n)return e
if(e=f_core.D(t,"maxTime"))e=new f_time(parseInt(e,10));else e=null
return t._c6=e},ir:function(){var e=this,t=e.f_getTime()
e.P("value",t)
e.f_super(arguments)},os:function(){var u="invalidTime.error",n=this,l=f_messageContext.Get(n),e,t,c,a,f,i,r,o,s
if(!l)return!0
e=null
if(!(t=n.f_getTime())){if(!n.f_isRequired()){c=!0
a=n._t2
for(f=0;f<a.length;f++){if(a[f].value.length<1)continue
c=!1
break}if(c)return!0
e=u}else e="required.error"}else{i=t.f_getTime()
r=new f_time(i)
if(r.f_getHours()!=t.f_getHours())e=u;else if(r.f_getMinutes()!=t.f_getMinutes())e="invalidMinute.error";else if(r.f_getSeconds()!=t.f_getSeconds())e="invalidSecond.error";else if(r.f_getMilliseconds()!=t.f_getMilliseconds())e="invalideMillisecond.error";else{o=n.f_getMinTime()
s=n.f_getMaxTime()
if(o&&i<o.f_getTime())e="minTime.error";else if(s&&i>s.f_getTime())e="maxTime.error"}}if(!e)return!0
n.mn(f_timeEntry,e)
return!0}}});