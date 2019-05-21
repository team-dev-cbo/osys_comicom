new f_class("f_flashObject",{statics:{w:function(){var o=f_flashObject,g="$version",C="Shockwave Flash 2.0",d="r",c=".",m="ShockwaveFlash.ShockwaveFlash.3",p=" ",b="Shockwave Flash",E="",k,e=o.L,n,s,v,r,a,h,l,u,t,i
if(e!==k)return e
if((n=navigator.plugins)&&(n[C]||n[b])){s=n[C]?" 2.0":E
v=n[b+s].description
r=v.split(p)
a=r[2].split(c)
h=a[0]
l=a[1]
if(r[3]!=E)tempArrayMinor=r[3].split(d);else tempArrayMinor=r[4].split(d)
u=tempArrayMinor[1]>0?tempArrayMinor[1]:0
e=h+c+l+c+u
return o.L=e}try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
e=t.GetVariable(g)}catch(f){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")
e="WIN 6,0,21,0"
t.AllowScriptAccess="always"
e=t.GetVariable(g)}catch(f){}if(!e)try{new ActiveXObject(m)
e=t.GetVariable(g)}catch(f){}if(!e)try{new ActiveXObject(m)
e="WIN 3,0,18,0"}catch(f){}if(!e)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
e="WIN 2,0,0,11"}catch(f){}if(!e)return o.L=null
i=f_core.rs(e).replace(/\,/g,c)
if(i.charAt(0)>"9")i=i.split(p)[1]
return o.L=i},S:function(){var n=arguments,f=n.length,o=f_flashObject.w(),r,e,t,i
if(!o)return!1
if(!f)return!0
r=o.split(".")
for(e=0;e<f;e++){t=0
if(e<r.length)t=parseInt(r[e],10)
i=n[e]
if(t<i)return!1;else if(t>i)return!0}return!0}}});