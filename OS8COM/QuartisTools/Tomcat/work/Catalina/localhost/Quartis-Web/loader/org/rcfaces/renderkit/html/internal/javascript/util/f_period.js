new f_class("f_period",null,{w:function(i){var t=f_core,r=i.f_getStart(),e=i.f_getEnd(),n=t.mr(r)
if(e&&e.getTime()!=r.getTime())n+=":"+t.mr(e)
return n},S:function(t){var f=f_period,n=f_core,r=t.indexOf(":"),e,i
if(r<0){e=n.nf(t)
return new f(e,e)}e=n.nf(t.substring(0,r))
i=n.nf(t.substring(r+1))
return new f(e,i)}},{f_period:function(e,t){if(e instanceof Array&&e.length==2&&arguments.length==1){t=e[1]
e=e[0]}this._s5=e
this._4f=t},f_getStart:function(){return this._s5},f_getEnd:function(){return this._4f},toString:function(){var e=this
return!e._4f?"[f_period start=end="+e._s5+"]":"[f_period start="+e._s5+" end="+e._4f+"]"}});