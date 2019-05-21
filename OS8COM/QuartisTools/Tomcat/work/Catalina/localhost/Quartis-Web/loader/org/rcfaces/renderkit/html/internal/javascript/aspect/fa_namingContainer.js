new f_aspect("fa_namingContainer",{statics:{L:":",F:f_core._m+":nc",V:f_core._m+":namingContainer",M:new RegExp(":","g"),FindComponent:function(e,t,a,c){var i=fa_namingContainer,f=t,o=":",n,r
if(t.charAt(0)!=o){n=i.L
if(o!=n)f=t.replace(i.M,n)
if(e.id==f)return e}r=i.$(e,t,a)
return c?e.ownerDocument.getElementById(r):f_core.GetElementByClientId(r,e.ownerDocument)},w:function(t,r){var e,n
for(e=0;t&&e<r.length;e++){n=r[e]
t=fa_namingContainer.FindComponent(t,n)}return t},O:function(t,r){var e,n
for(e=0;t&&e<r.length;e++){n=r[e]
t=fa_namingContainer.FindComponent(t,n,!e)}return t},$:function(a,i,c){var f=fa_namingContainer,o,t,e,r,n
if(f._ya)return i
o=":"
t=f.L
if(i.charAt(0)==o){e=i.substring(1)
if(o!=t)e=e.replace(f.M,t)
return e}e=i
if(o!=t)e=i.replace(f.M,t)
r=a.id
if(c||!f.et(a)){n=r.lastIndexOf(t)
if(n<0)return e
if(t.length>1)for(;n;n--){if(r.substring(n-1,n+1)==t)continue
break}r=r.substring(0,n)}return r+t+e},et:function(e){var n=fa_namingContainer,t=e.tagName
return!t?!1:(t.toLowerCase()=="form"||t==n.V?!0:(e._y4?!0:f_core.ci(e,n.F)!=null))},tn:function(e){e.setAttribute(fa_namingContainer.F,"true")},ne:function(t){var e=fa_namingContainer
if(t===!1){e._ya=!0
return}e.L=t},ni:function(){return fa_namingContainer.L},S:function(s,c){var u=fa_namingContainer,a=null,o,f,i,n,e,r,t
if(u._ya)return a
o=":"
if(c.indexOf(o)>=0)return a
f=u.L
i=c
n=s.forms
for(e=0;e<n.length;e++){r=n[e].id+f+i
if(!(t=s.getElementById(r)))continue
return t}return a}}});