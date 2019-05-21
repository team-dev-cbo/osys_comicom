new f_class("f_abstractList",{extend:f_input,aspects:[fa_required,fa_filterProperties,fa_commands,fa_immediate],members:{f_finalize:function(){var e
this._g=e
this.f_super(arguments)},f_getItemByValue:function(r){var t,e,n
if(r.nodeType==1&&r.tagName.toLowerCase()=="option")return r
t=this.options
for(e=0;e<t.length;e++){n=t[e]
if(n.value!=r)continue
return n}return null},f_getSelectedIndex:function(){return this.f_getValue(!0)},f_setSelectedIndex:function(e){this.f_setValue(e,!0)},f_getValueFromIndex:function(e){var t=this.options
return e<0||e>=t.length?null:t[e].value},f_clear:function(a){var i=arguments,o=0,f=this.J(),t,e,n,r
for(t=0;t<i.length;t++){a=i[t]
e=f.options
for(n=0;n<e.length;n++){r=e[n]
if(e.value!=a)continue
f.removeChild(r)
o++
break}}return o},f_clearArray:function(e){return this.f_clear.apply(this,e)},f_clearAll:function(){var i=this,n=i.J(),r=n.items,t=r.length,e
if(!t)return 0
for(e=t-1;e>=0;e--)n.removeChild(r[e]);i._g=null
return t},f_getIndexFromValue:function(n){var t=this.options,e
for(e=0;e<t.length;e++)if(t[e].value==n)return e;return-1},ir:function(){var r,e=this,n,t
if(n=e._g){e._g=r
e.removeChild(n)}if(e.f_isDisabled()){t=e.f_getValue()
e.P("selectedItems",t,t instanceof Array)}e.f_super(arguments)},on:function(e,t){switch(e){case"selection":this.onchange=f_abstractList.w
return;}this.f_super(arguments,e,t)},fo:function(e,t){switch(e){case"selection":this.onchange=null
return;}this.f_super(arguments,e,t)},su:function(){this.cc(function(e){e._i4()})},_i4:function(){var b=f_waiting,a=f_core,v="text/javascript",p="auto",m="px",i,n,f,o,h,l,r,e
n=this
f_class.S("f_httpRequest",!0)
f=a.uh(n,"width")
if(a.nt()&&!n.style.width)f=(n.offsetWidth+2)+m
if(!f||f==p){if(!n._3f){n._3f=p
n._3f=f}f=n.offsetWidth
if(f<128)f=128
n.style.width=f+m}n.className=n.fe("_loading")
while(n.hasChildNodes())n.removeChild(n.lastChild);o={}
o.componentId=n.id
if(h=n.as())o.filterExpression=h
l=f_env.rn()
r=new f_httpRequest(n,l,v)
e=n
r.f_setListener({onInit:function(r){var t=e._g
if(!t&&!e.childNodes.length){t=e.ownerDocument.createElement("option")
t.disabled=!0
e.appendChild(t)
if(e.size>1)e.selectedIndex=-1;else e.selectedIndex=0
e._g=t}if(t){t.innerHTML=a.sr(b.S())
t.disabled=!0}},onError:function(r,G,R){if(e.to())return
e._E=!1
var t
if(t=e._g){e._g=i
e.removeChild(t)}if(e._3f){e.style.width=e._3f
e._3f=i}e.className=this.fe()},onProgress:function(r,E,T,C){var t
if(t=e._g){t.innerHTML=a.sr(b.L())
t.disabled=!0}},onLoad:function(r,E,C){var t,g,c,d,s,u
if(e.to())return
t=e._g
e._g=i
try{if(t){e.removeChild(t)
t=null}if(e._3f){e.style.width=e._3f
e._3f=i}if(r.f_getStatus()!=200){e.q(r,33554436,"Bad http response status ! ("+r.f_getStatusText()+")")
return}if(!(g=r.f_getResponseHeader("X-Camelia-Service"))){e.q(r,33554438,"Not a service response !")
return}c=r.f_getResponseContentType().toLowerCase()
if(c.indexOf("x-camelia/error")>=0){d=f_error.V(r)
e.q(r,d,E)
return}if(c.indexOf(v)<0){e.q(r,33554435,"Unsupported content type: "+c)
return}s=r.f_getResponse()
try{a.of(s)}catch(k){a.Error(f_abstractList,"_callServer.onLoad: Can not eval response '"+s+"'.",k)}}finally{e._E=i
e.className=e.fe()}u=new f_event(e,"load")
try{e.f_fireEvent(u)}finally{f_classLoader.Destroy(u)}}})
n._E=!0
r.f_setRequestHeader("X-Camelia","items.request")
r.f_doFormRequest(o)},q:function(n,t,e){return f_error.w(this,t,e,n)},f_appendItem:function(l,o,g,h,u,s){var r=arguments,a=r.length,c=f_core,i=this,t,e,f,n
if(l){t=i.ownerDocument.createElement("optgroup")
if(u)t.disabled=!0
t.innerHTML=c.sr(o)
i.appendChild(t)
return t}e=i.ownerDocument.createElement("option")
e.value=g
if(u)e.disabled=!0
if(h)e.selected=!0
if(s)e.title=s
if(a>5){e._y=f={}
for(n=6;n<a;n+=2)f[r[n]]=r[n+1];}e.innerHTML=c.sr(o)
i.appendChild(e)
return e},f_isItemDisabled:function(t){var e=this.f_getItemByValue(t)
return!e?null:e.disabled},f_getItemToolTip:function(t){var e=this.f_getItemByValue(t)
return!e?null:e.title},f_getItemLabel:function(t){var e=this.f_getItemByValue(t)
return!e?null:e.innerHTML},f_getItemClientData:function(t,n){var e=this.f_getItemClientSet(t)
return!e?null:e[n]},f_getItemClientSet:function(n){var t=this.f_getItemByValue(n),e
if(!t)return null
if(e=t._y)return e
e=f_core.ua(t)
return t._y=e},lu:function(){}},statics:{w:function(e){var n=this,t=n
if(!e)e=f_core.I(n)
return t.f_fireEvent("selection",e,null,t.f_getValue(),t)}}});