new f_class("f_input",{extend:f_component,aspects:[fa_message,fa_focusStyleClass,fa_tabIndex],members:{f_input:function(){var e=this
e.f_super(arguments)
e.gd()
if(f_core.rf())e.vb("keypress",!0)},f_finalize:function(){var t,e=this
e._en=e._7n=t
e.f_super(arguments)
e._x=t},aa:function(){return this.J()},gd:function(){var e=this,t
if(t=e.f_getFocusStyleClass()){e.Z("focus",e._b9)
e.Z("blur",e._1w)}},J:function(){var e=this,t
if(t=e._x)return t
if(!(t=e.dl()))throw new Error("Can not find input associated to component '#"+e.id+"."+e.className+"' class='"+e.f_getClass()+"'.")
return e._x=t},aa:function(){return this.J()},dl:function(){return this},f_setFocus:function(){var r=f_core,t=this,e,n
if(!r.nl(t))return
if(t.f_isDisabled&&t.f_isDisabled())return
if(!t.tabIndex)t._t7=0
e=t.J()
try{e.focus()}catch(i){r.Error(f_input,"f_setFocus: Error while setting focus to '"+e.id+"'.",i)}if(e.tagName.toLowerCase()=="textarea")e.select();else{if(n=e.type)switch(n.toUpperCase()){case"TEXT":e.select()
break;}}},f_getText:function(){var t=this,e
return(e=t._7n)?e.f_getValue():t.J().value},f_setText:function(e){var n=this,r=n.J(),t
if(e==r.value)return
r.value=e
n.P("text",e)
if(t=n._7n)t.vs(e)},f_isDisabled:function(){return this.J().disabled},f_setDisabled:function(t){var e=this
e.J().disabled=t
e.wl(t)
e.P("disabled",t)},wl:function(r){var n=this,t,e
n.ft()
t=n.fa_getTabIndex()
e=n.gn()
e.tabIndex=r?-1:t},f_isReadOnly:function(){return this.J().readOnly==!0},f_setReadOnly:function(e){var t=this,n=t.J()
if(n.readOnly==e)return
t.P("readOnly",e)
n.readOnly=e
t.pw()},pw:function(){this.ft()},ft:function(r){var e=this,n="",t
if(e.f_isDisabled())n+="_disabled";else if(e.f_isReadOnly())n+="_readOnly"
if(r)n+=r
t=e.fe(n)
if(e.className!=t)e.className=t},f_getValue:function(){var t=this,e=t._7n
return e&&e.yp()?e.f_getConvertedValue():t.J().value},f_setValue:function(e){var n=this,t=n._7n
if((t&&t.yp())&&t.f_setConvertedValue(e))return!0
if(typeof e=="number")e=String(e);else if(typeof e!="string"){f_core.Error(f_input,"f_setValue: Invalid value: "+e+" (typeof="+typeof e+")")
return!1}if(t)return t.vs(e)
n.J().value=e
return!0},f_fireEvent:function(n,f,i,t,o,r,a){var e=this
if(n=="change"){if(e.f_isReadOnly()||e.f_isDisabled())return!1
if(!t)t=e.f_getValue()}return e.f_super(arguments,n,f,i,t,o,r,a)},f_isValid:function(){var t=this,e
try{if(e=f_messageContext.Get(t))e.f_clearMessages(t)}catch(n){}return t.gw()},gw:function(){var e=this._7n
return!e?!0:e.Ev()},fe:function(o){var e=this,i=e.f_super(arguments,o),r,f,n,t
if((e._in&&!e.f_isDisabled())&&(r=e.f_getFocusStyleClass()))i+=" "+r
if(f=e._en){n=f.f_getSeverity()
t=e.lo(n)
if(!t&&n>=2)t=e.ue()+"_error f_input_error"
if(t)i+=" "+t}return i},se:function(){var r=this,f=f_messageContext.ListMessages(r),e,t,n,i
for(t=0;t<f.length;t++){n=f[t]
if(!e||e.f_getSeverity()<n.f_getSeverity())e=n}if((i=r._en)&&(e==i||i.f_equals(e)))return
r._en=e
r.ft()},_b9:function(){this._in=!0
this.ft()},_1w:function(){var e
this._in=e
this.ft()},on:function(t,e){if(f_input.w[t])e=this.J()
this.f_super(arguments,t,e)},fo:function(t,e){if(f_input.w[t])e=this.J()
this.f_super(arguments,t,e)}},statics:{w:{},Initializer:function(){var e=f_input.w
e["blur"]=e["focus"]=e["keypress"]=e["keydown"]=e["keyup"]=!0}}});