new f_class("f_event",{statics:{F:"Window has been locked.",V:0,M:!0,ADDITIONAL_INFORMATION:"additionalInformation",BLUR:"blur",CHANGE:"change",CHECK:"check",VALIDATION:"validation",CLOSE:"close",DBLCLICK:"dblclick",DRAG:"drag",DROP:"drop",DROP_COMPLETE:"dropComplete",ERROR:"error",EXPAND:"expand",FOCUS:"focus",INIT:"init",KEYDOWN:"keydown",KEYPRESS:"keypress",KEYUP:"keyup",LOAD:"load",MENU:"menu",MOUSEDOWN:"mousedown",MOUSEOUT:"mouseout",MOUSEOVER:"mouseover",MOUSEUP:"mouseup",PRE_SELECTION:"preSelection",PROPERTY_CHANGE:"propertyChange",RESET:"reset",SELECTION:"selection",SORT:"sort",SUBMIT:"submit",SUGGESTION:"suggestion",USER:"user",ACTIVATE_DETAIL:256,RESET_DETAIL:512,IMMEDIATE_DETAIL:1024,REFRESH_DETAIL:2048,GetComponent:function(){var e=f_event.GetEvent()
return!e?null:e.f_getComponent()},GetType:function(){var e=f_event.GetEvent()
return!e?null:e.f_getType()},GetItem:function(){return f_event.GetEvent().f_getItem()},GetValue:function(){return f_event.GetEvent().f_getValue()},GetSelectionProvider:function(){return f_event.GetEvent().f_getSelectionProvider()},GetJsEvent:function(){var e=f_event,t=e.GetEvent()
return!t?null:e.GetEvent().f_getJsEvent()},GetDetail:function(){return f_event.GetEvent().f_getDetail()},GetEvent:function(){return f_event.tn},O:function(n){var e=f_event,t=e.tn
e.tn=n
return t},$:function(){return f_event.M},et:function(e){var t
if(e===t)e=!0;else e=!!e
f_event.M=e},w:function(i,u,f){var n=f_event,s,e,r,o,c,t,a
if(window._rcfacesExiting)return!0
e=n.V
if(f)e&=f
if(!e)return!1
if(e==2)return!(!f_core.lC())
if(n.V&4)if(f_popup.S()===!1){e=n.V
if(f)e&=~f
if(!e)return!1}else if(i){if(!(r=i.target))r=i.srcElement
if(r)o=f_popup.L(r,i)
return o?!1:!1}if(e==8)return!1
c=n.M
if(e==1&&c===!1)return!1
if(u===!1)return!0
t=f_env.Get("CORE_LOCK_MESSAGE")
if(t===s){if(a=f_resourceBundle.Get(n))t=a.f_get("LOCK_MESSAGE")
if(!t)t=n.F}if(t===null)return!0
alert(t)
return!0},S:function(e){var t=f_event,n=t.V
if(n&e){f_core.Error("f_event","Several same lock of type "+e+" !")
return}t.V|=e},L:function(t){var e=f_event,n=e.V
if(!(n&t)){f_core.Error("f_event","No lock for type "+t+" !")
return}e.V&=~t
return e.V}},members:{f_event:function(n,c,f,r,i,a,t,o){var e=this
e._B=c
e._u=n
e._eo=f
e._A=r
e._n=i
e._u1=a
e._2t=t
e._hE=o},f_finalize:function(){var t,e=this
e._u=e._eo=e._A=e._n=e._2t=e._u1=t},f_getType:function(){return this._B},f_getJsEvent:function(){return this._eo},f_getItem:function(){return this._A},f_getComponent:function(){return this._u},f_getValue:function(){return this._n},Er:function(){var n,t=this,e=t._hE
return e!==n?e:t._n},f_getSelectionProvider:function(){return this._u1},f_getDetail:function(){return this._2t},f_findComponent:function(){var e=this._u
return e.f_findComponent.apply(e,arguments)},f_findSiblingComponent:function(){var e=this._u
return e.f_findSiblingComponent.apply(e,arguments)},f_preventDefault:function(){var e=this._eo
f_core.N(e)
return!1},f_isImmediate:function(){return this._nn},f_setImmediate:function(e){this._nn=e},toString:function(){var e=this
return"[f_event type='"+e._B+"' component='"+e._u+"' value='"+e._n+"' item='"+e._A+"' detail='"+e._2t+"' immediate='"+e._nn+"' jsEvent='"+e._eo+"']"}},_tf:!0});