new f_class("f_time",null,{w:function(t){var i,n,e,r
if(i=t.f_getMilliseconds())return"S"+t.f_getTime().toString(32)
n=t.f_getHours()
e=t.f_getMinutes()
if(r=t.f_getSeconds()){r+=(n*60+e)*60
return"s"+r.toString(32)}if(e){e+=n*60
return"m"+e.toString(32)}return"H"+n.toString(32)},S:function(r){var f=f_time,a=Math.floor,c=null,o,e,t,n,i
if(!r.length)return c
o=r.charAt(0)
e=parseInt(r.substring(1),32)
switch(o){case"H":return new f(e,0,0);case"m":t=e
n=a(e/60)
return new f(n,t%60,0);case"s":i=e
t=a(i/60)
n=a(t/60)
return new Date(n,t%60,i%60);case"S":return new f(e);}f_core.Error(f,"Deserialize: Invalid time format ! ("+r+")")
return c}},{f_time:function(t,i,f,o){var r=Math.floor,e=this,n
if(arguments.length==1){if(t instanceof Date){n=t
e._fu=n.getHours()
e._ci=n.getMinutes()
e._co=n.getSeconds()
e._fo=n.getMilliseconds()
return}if(typeof t=="number"){e._fu=r((t/(60*60*1000)))
e._ci=r((t/(60*1000))%60)
e._co=r((t/1000)%60)
e._fo=r(t%1000)
return}}e._fu=t
e._ci=e._co=e._fo=0
if(i)e._ci=i
if(f)e._co=f
if(o)e._fo=o},f_getHours:function(){return this._fu},f_getMinutes:function(){return this._ci},f_getSeconds:function(){return this._co},f_getMilliseconds:function(){return this._fo},toString:function(){var e=this
return"[f_time "+e._fu+":"+e._ci+":"+e._co+"."+e._fo+"]"},f_toDate:function(){var e=this
return new Date(1,0,2000,e._Da,e._D_,e._gD,e._fo)},f_getTime:function(){var e=this
return((e._fu*60+e._ci)*60+e._co)*1000+e._fo}});