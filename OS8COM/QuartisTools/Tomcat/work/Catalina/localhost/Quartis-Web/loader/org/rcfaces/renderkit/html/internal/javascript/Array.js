Array.prototype.it=function(n){var t=this,e
for(e=0;e<t.length;e++){if(t[e]!=n)continue
t.splice(e,1)
return!0}return!1}
Array.prototype.fd=function(){var i=arguments,n=this,f=0,t,r,e
for(t=0;t<i.length&&n.length;t++){r=i[t]
for(e=0;e<n.length;e++){if(n[e]!=r)continue
n.splice(e,1)
f++
break}}return f}
Array.prototype.fr=function(t){var e=this
if(e.length&&e.cf(t))return!1
e.push(t)
return!0}
Array.prototype.dr=function(){var n=arguments,r=0,e,t
for(e=0;e<n.length;e++){t=n[e]
if(!this.fr(t))continue
r++}return r}
Array.prototype.cf=function(t){for(var e=0;e<this.length;e++){if(this[e]!=t)continue
return!0}return!1}
Array.f_getName=function(){return"Array"};