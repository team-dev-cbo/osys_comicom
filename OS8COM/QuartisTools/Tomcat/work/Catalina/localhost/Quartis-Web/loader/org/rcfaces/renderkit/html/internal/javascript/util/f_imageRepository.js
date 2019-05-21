new f_class("f_imageRepository",{statics:{w:0,PrepareImage:function(i){var c=window,e=f_imageRepository,s,n,t,f,r,a,o
if(c._rcfacesPrepareImages!==!0)return
if(!(n=e.M)){e.M=n={}
e.O=[]}if(n[i]!==s)return
f=e.O
if(f.length)t=f.pop();else if(2<0||e.w<2){t=new Image()
t.id="ImageObject #"+e.w
t._e6=c
t.onerror=e.S
t.onload=e.L
e.w++}else{if(!(r=e.$))e.$=r=[]
r.push(i)
return}n[i]=t
if(100>0){a=t
o=i
c.setTimeout(function(){a.src=o
a=o=null},100)}else t.src=i},S:function(){var t=f_imageRepository,e=this,n=e._e6
if(n._rcfacesExiting){t.V(e)
return}f_core.Error(t,"_OnErrorHandler: Error while loading image '"+e.src+"'.")
t.F(e,!1)},L:function(){var t=f_imageRepository,e=this,n=e._e6
if(n._rcfacesExiting){t.V(e)
return}t.F(e,!0)},F:function(r,f){var n=f_imageRepository,o=r.src,i=n.M,e,t
if(!i)return
i[o]=f
e=n.$
if(e&&e.length){this.src=t=e.unshift()
return}n.O.push(r)},V:function(e){var t
e.onload=e.onerror=null
e._e6=t},Finalizer:function(){var t=f_imageRepository,f,i,o,e,r,n
if(i=t.M){t.M=f
for(o in i){e=i[o]
if(!e._e6)continue
t.V(e)}}if(r=t._C4){t._C4=f
for(n=0;n<r.length;n++){e=r[n]
t.V(e)}}t.$=f}}});