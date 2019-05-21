new f_class("f_component",{extend:f_eventTarget,aspects:[fa_serializable,fa_clientData],statics:{HIDDEN_MODE_SERVER:1,HIDDEN_MODE_PHANTOM:2,HIDDEN_MODE_IGNORE:4,DEFAULT_HIDDEN_MODE:4,w:function(t,r,f,u){var s=null,n,o,e,i,a,c
if(u)while(t.firstChild)t.removeChild(t.firstChild);n=t.ownerDocument
if(!f||f.length!=1){t.appendChild(n.createTextNode(r))
return s}f=f.toUpperCase()
o=r.toUpperCase()
e=o.indexOf(f)
if(e<0){t.appendChild(n.createTextNode(r))
return s}i=t.ownerDocument.createDocumentFragment()
if(e)i.appendChild(n.createTextNode(r.substring(0,e)))
a=f_core.B(i,"u",{className:"f_accessKey",textnode:r.substring(e,e+1)})
if(e+1<o.length){c=r.substring(e+1,o.length)
i.appendChild(n.createTextNode(c))}t.appendChild(i)
return a},Ci:function(){return 4}},members:{f_component:function(){var t=this,e
t.f_super(arguments)
t.tr=!1
if(!(e=f_core.D(t,"accessKey")))e=t.accessKey
if(e)t._3e=e
if(e)f_key.M(null,e,t,t.gs)},f_getId:function(){return this.id},f_getX:function(){return this.__u(this.style.left)},__u:function(e){return!e?null:parseInt(e,10)},f_setX:function(e){this.style.left=e+"px"
this.P("x",e)},f_getY:function(){return this.__u(this.style.top)},f_setY:function(e){this.style.top=e+"px"
this.P("y",e)},f_getWidth:function(){return this.__u(this.style.width)},f_setWidth:function(e){this.style.width=e+"px"
this.P("width",e)},f_getHeight:function(){return this.__u(this.style.height)},f_setHeight:function(e){this.style.height=e+"px"
this.P("height",e)},f_getBackgroundColor:function(){return this.style.backgroundColor},f_setBackgroundColor:function(e){this.style.backgroundColor=e
this.P("background",e)},f_getForegroundColor:function(){return this.style.color},f_setForegroundColor:function(e){this.style.color=e
this.P("foreground",e)},f_getToolTipText:function(){return this.title},f_setToolTipText:function(e){this.title=e
this.P("toolTip",e)},f_getVisible:function(){var r,t=this,e=t._7f,n
if(e!==r)return e
n=t.f_getHiddenMode()
if(n==2)e=t.style.visibility!="hidden";else e=t.style.display!="none"
return t._7f=e},f_isVisible:function(){return!this.f_getVisible()?!1:f_core.av(this)},f_setVisible:function(e){var t=this
e=!!e
if(e==t.f_getVisible())return
t._7f=e
t.um(e)
t.f_getClass().f_getClassLoader().fE(t)
t.P("visible",e)},um:function(r){var i="none",e=this,t=e.style,f=e.f_getHiddenMode(),n
if(f==2){t.visibility=r?"inherit":"hidden"
return}if(!r){if(t.display!=i){e._g8=t.display
t.display=i}return}if(e._g8){t.display=e._g8
return}n=f_core.dC(e)
t.display=e._g8=n},f_setHiddenMode:function(e){if(e==this.f_getHiddenMode())return
this._mn=e},f_getHiddenMode:function(){var n,t=this,e=t._mn
if(e!==n)return e
if(e=f_core.D(t,"hiddenMode"))e=parseInt(e,10);else e=f_component.Ci()
return t._mn=e},f_getHelpURL:function(){var n,t=this,e=t._wt
if(e!==n)return e
e=f_core.D(t,"helpURL",null)
return t._wt=e},f_setHelpURL:function(e){if(e==this.f_getHelpURL())return
this._wt=e},f_getHelpMessage:function(){var n,t=this,e=t._gu
if(e!==n)return e
e=f_core.D(t,"helpMessage",null)
return t._gu=e},f_setHelpMessage:function(t){var e=this,n=e._gu
if(n==t)return
e._gu=t},gs:f_key.ne,f_setFocus:function(){},f_getStyleClass:function(){var n,t=this,e=t._G
if(e!==n)return e
if(!(e=f_core.D(t,"styleClass")))e=null
return t._G=e},ue:function(){return this.f_getClass().f_getName()},fe:function(f){var i=" ",n,r,e,t
n=this
if(f){r=n.ue()
e=r+i+r+f
if(t=n.f_getStyleClass())e+=i+t+i+t+f
return e}if(!(e=n._rm)){e=n.ue()
if(t=n.f_getStyleClass())e+=i+t
n._rm=e}return e},f_show:function(e){var t
if(!this.ge())return!1
if(e!==t)this.scrollIntoView(e)
return!0},ge:function(){var e=f_core.co(this)
return!e?!0:e.ge()},f_getAccessKey:function(){return this._3e},f_getParent:function(){return this.parentNode},f_documentComplete:function(){},ef:function(e){var t
this.tr=e===t?!0:e},sh:function(){var t,e=this
try{e.ef(!0)}catch(n){f_core.Error(f_component,"f_completeComponent: Call of f_update throws exception ! (#"+e.id+"."+e.className+") class='"+e._R._d+"'",n)}if(!e._lr)return
e._lr=t
e.f_getClass().f_getClassLoader().bh(e)},ir:function(){},f_findComponent:function(){return fa_namingContainer.w(this,arguments)},f_findSiblingComponent:function(){return fa_namingContainer.O(this,arguments)},aa:function(){return null},f_getDocument:function(){return this.f_getClassLoader().f_getDocument()},toString:function(){var r='"',e=this,t="[f_component",n
if(e.id)t+=' id="'+e.id+r
if(n=e._R)t+=' class="'+n.f_getName()+r;else t+=" class=*undefined*"
if(e.tagName)t+=" tag="+e.tagName.toLowerCase()
if(e.className)t+=' styleClass="'+e.className+r
return t+"]"}}});