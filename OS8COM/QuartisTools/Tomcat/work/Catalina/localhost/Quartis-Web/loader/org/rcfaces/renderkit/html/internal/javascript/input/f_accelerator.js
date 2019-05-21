new f_class("f_accelerator",{extend:f_object,aspects:[fa_immediate,fa_eventTarget],statics:{w:{init:"init",keyPress:"keypress",propertyChange:"propertyChange",user:"user"}},members:{f_accelerator:function(s,c,h,t,u,l){var a=f_key,n=f_core,o="keypress",f,e,r,i,t
e=this
e.f_super(arguments)
if(e.nodeType==1){e._7a=n.D(e,"character",f)
if(r=n.D(e,"virtualKey"))e._1c=[parseInt(r,10)]
e._0c=n.te(e,"keyFlags")
e._ra=n.Q(e,"ignoreEditableComponent")
a.$(e._7a,e._1c,e._0c,e,e._m6,e._ra)
if(i=n.D(e,"events"))e.au(f_accelerator.w,i)
if(t=n.D(e,"for")){e._v4=fa_namingContainer.$(e,t)
e._pn=n.D(e,"forItemValue")
e.Z(o,e._hy)}}else{e._7a=s
e._1c=c
e._0c=h
e._ra=l
a.$(e._7a,e._1c,e._0c,e,e._m6,e._ra)
if(t){e._v4=t
e._pn=u
e.Z(o,e._hy)}}},_m6:function(e){var i=null,r=this,t=0,n
if(e.altKey)t|=4
if(e.ctrlKey)t|=2
if(e.shiftKey)t|=1
if(e.metaKey)t|=8
n=new f_event(r,"keypress",e,i,e.keyCode,i,t)
try{return r.f_fireEvent(n)}finally{f_classLoader.Destroy(n)}},_hy:function(a){var r=f_core,i=this,o=i._v4,e=r.GetElementByClientId(o,i.ownerDocument),n,t
if(!e)return!1
n=e.f_isDisabled
if(n&&n.call(e)===!0)return!1
r.SetFocus(e,!1)
t=e.f_fireEvent
if(typeof t!="function")return!1
try{return t.call(e,"selection",a.f_getJsEvent(),i)}catch(f){r.Error(f_accelerator,"_forListener: Call onSelect on component '"+o+"' throws exception.",f)
throw f}},Dm:function(){return this._7a},DE:function(){return this._1c},f_getKeyFlags:function(){return this._0c},f_getFor:function(){return this._v4},f_getForItemValue:function(){return this._pn},f_isIgnoreEditableComponent:function(){return this._ra}}});