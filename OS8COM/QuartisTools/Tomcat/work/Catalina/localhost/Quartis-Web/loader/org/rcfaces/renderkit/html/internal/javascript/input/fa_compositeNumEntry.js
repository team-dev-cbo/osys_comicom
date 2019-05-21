new f_aspect("fa_compositeNumEntry",{extend:[fa_compositeEntry],members:{og:function(e){var t=f_core
e._tt=t.te(e,"min")
e._4t=t.te(e,"max")
e._at=t.te(e,"default")
e._8y=t.Q(e,"cycle")
e._Ce=t.Q(e,"auto")
var n
if(n=t.D(e,"step"))e._1o=n},gu:function(e,o,r,n,c){var a=parseInt,u,f=this,s=e.value,t=a(s,10),i
if(isNaN(t)){if(e._at)t=e._at;else if(o>0)t=r?r:0;else{if(isNaN(n))return!1
t=n}return isNaN(t)?u:f.ih(e,t,r,n,c)}i=f._9l(t,o,r,n,c,e._8y)
e.value=f.nu(e,i)
f_core.ai(e,0,a(e.maxLength,10))
return!1},ih:function(e,n,c,a,s){var r=parseInt,i=this,o=e.value,f=r(o,10),t
if(f==n)return!1
t=i._9l(n,0,c,a,s,e._8y)
e.value=i.nu(e,t)
f_core.ai(e,0,r(e.maxLength,10))
return!1},_9l:function(u,f,r,n,i,o){var a=parseInt,s,c=this,e=u,t
if(i){if(i.charAt(0)=="%"){t=a(i.substring(1),10)
if(!isNaN(t))if(e%t==0)e+=t*f;else e+=((f>0)?t:0)-e%t}else{t=a(i,10)
if(!isNaN(t))e+=t*f}}else e+=f
if(r!==s&&e<r)if(o)e=c._9l(n,0,r,n,i,!1);else e=r
if(n!==s&&e>n)if(o)e=c._9l(r,0,r,n,i,!1);else e=n
return e},sd:function(t,u,b,v){var d=parseInt,p=f_core,l,m=this,o,i,f,e,n,r,a,c,g,h,s
if(u<"0"||u>"9")return null
o=p.li(t)
i=t.value
f=d(t.maxLength,10)
if(i.length==f){if(o[0]==f){if(e=t._0i){e.value=""
e.focus()
m.sd(e,u,b,!0)
return!1}return!1}if(o[0]!=0||o[1]!=f)return!0}n=i.substring(0,o[0])+u+i.substring(o[1])
if(t._Ce){r=d(n,10)
a=t._tt
c=t._4t
if((r||n.length==f)&&(a!==l&&a>r&&n.length==f||c!==l&&c<r)){if(o[1]!=i.length)return!1
if(!i.length){g=t._at
if(g===l)return!1
n=g
v=!0}else if(!r)return!1;else if(a===l||a<r){h=m.nu(t,i,f)
if(h!=t.value)t.value=h
if(e=t._0i){e.value=""
e.focus()
m.sd(e,u,b,!0)
return!1}return!1}else return!1}if(o[1]==i.length){r=d(n,10)
s=f-n.length
if(c!==l)for(;s;s--){if(c>=r*10)break
r*=10
n="0"+n
v=!0}if(!s){t.value=n
if(e=t._0i){e.focus()
p.ai(e,0,e.value.length)
return!1}return!1}}}if(v)t.value=n
return!0},ml:function(e,o){var a,i=e.value,n,t,f,r
if(!i.length){n=e._at
if(n===a)return!1
i=n}t=this.nu(e,i)
if(t!=e.value)e.value=t
if(o)return!0
if(f=e._1u){if(r=e._0i)r.focus()
return!1}return!0},nu:function(n,r,t){var i,e
if(t===i)t=parseInt(n.maxLength,10)
e=String(r)
for(t-=e.length;t>0;t--)e="0"+e;return e}}});