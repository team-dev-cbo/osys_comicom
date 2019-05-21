new f_aspect("fa_borderType",{statics:{w:function(){return fa_borderType.S},Finalizer:function(){var e
fa_borderType.S=e}},members:{f_finalize:function(){var e
this._mi=e},f_getBorderType:function(){var i=f_core,o,e=this,r=e._rC,n,t,f
if(r!==o)return r
n=i.D(e,"borderType")
if(n&&n!="none"){t=e.ownerDocument.getElementById(e.id+"::border")
r=n
if(t){e._mi=t
if(f=i.D(t,"className"))t._Y=f;else t._Y=t.className
e._Ee=i.Q(e,"flatMode",!1)}}else r=null
return e._rC=r},ud:function(){return!this.f_getBorderType()?null:this._mi},ev:function(){var e
return!this.f_getBorderType()?e:this._Ee},la:function(){var t=fa_borderType,r,n=this,e=t.S
if(e&&f_class.w(e)){if(e==n)return
t.S=r
if(typeof e._U=="function")e._U()}if(!n.ev())return
t.S=n}}});