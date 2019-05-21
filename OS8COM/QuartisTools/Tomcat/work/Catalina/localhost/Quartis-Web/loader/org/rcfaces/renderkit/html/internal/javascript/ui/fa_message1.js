new f_aspect("fa_message1",{extend:[fa_messageText],members:{f_finalize:function(){var e
this._en=e},ef:{after:function(){this.se()}},f_getFor:function(){var e=this.f_getForComponentIds()
return e[0]},f_getForComponentIds:function(){var c=f_core,s,n=this,e=n._od,i,f,o,r,t,a
if(e!==s)return e
i=c.D(n,"for")
n._od=e=[]
n._v0=f=[]
if(!i)return e
o=i.split(",")
for(r=0;r<o.length;r++){t=c.rs(o[r])
if(!t.length)continue
e.push(t)
a=fa_namingContainer.$(n,t)
f.push(a)}return e},_4b:function(){this.f_getForComponentIds()
return this._v0},se:function(){var s=f_messageContext,u=null,t=this,o=t._4b(),e,i,c,r,f,n,a
if(!o.length)o=[u]
for(i=0;i<o.length;i++){if(!(c=o[i]))r=s.Get(t).f_listMessages(u);else{if(!(f=f_core.GetElementByClientId(c)))continue
r=s.ListMessages(f)}for(n=0;n<r.length;n++){a=r[n]
if(!e||e.f_getSeverity()<a.f_getSeverity())e=a}}if(e==t._en)return
t._en=e
t.lr()}}});