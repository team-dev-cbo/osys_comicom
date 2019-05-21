new f_class("f_frameSetAppender",{extend:f_object,aspects:[fa_abstractAppender],statics:{Initializer:function(){var t=window,e=t.parent,n,o,i,r,f
for(;e.parent&&e.parent!=e;)e=e.parent;if(!e||!e.rcfacesLogCB){n=null
o=document.getElementsByTagName("LINK")
for(i=0;i<o.length;i++){r=o[i]
if(r.rel!="stylesheet")continue
f=r.href.indexOf("rcfaces.css")
if(f<0)continue
n=r.href.substring(0,f)
break}if(!n||t.top!=t)return
n+="frameSetAppender/base.html?url="+encodeURI(t.document.location)
if(!e)e=t
t.document.location=n
return}}}});