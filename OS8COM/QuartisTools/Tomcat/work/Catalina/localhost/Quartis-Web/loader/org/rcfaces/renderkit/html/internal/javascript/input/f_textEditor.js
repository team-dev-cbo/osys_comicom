new f_class("f_textEditor",{extend:f_component,aspects:[fa_disabled,fa_readOnly],statics:{TEXT_HTML_MIME_TYPE:"text/html",TEXT_PLAIN_MIME_TYPE:"text/plain",w:["font-weight","font-size","font-family","font-style","text-decoration","color","background-color"],S:{bold:1,italic:2,underline:4,subscript:8,superscript:16,justifyleft:32,justifycenter:64,justifyright:128,justifyfull:256,strikethrough:512},L:{undo:1,redo:2,indent:4,outdent:8,copy:16,cut:32,paste:64,decreasefontsize:128,increasefontsize:256,insertorderedlist:512,insertunorderedlist:1024},F:{undo:!0,redo:!0,copy:!0,cut:!0,paste:!0},V:function(e){var t=f_textEditor
try{t.f_getClassLoader().oa(e,!1,!0)
e._vp()}catch(n){f_core.Error(t,"_OnLoad: load exception on textEditor "+e.id,n)}},M:function(n,i){var r=f_textEditor,t=r.tn,e
if(!t)r.tn=t={}
if(!(e=t[n]))t[n]=e=[]
e.push(i)},Finalizer:function(){var e
f_textEditor.tn=e},O:function(n,a,o){var f=f_textEditor,r=f_core,c,i=f.tn,t,e
if(!i)return
if(!(t=i[n]))return
e=t._yw
if(e===c)t._yw=e=r.GetElementByClientId(n)
if(!e){r.Error(f,"PerformCommand: Can not find textEditor '"+n+"'.")
return}e._9b(a.f_getType(),o)},$:function(e){var n=f_core,r=this,t
if(!e)e=n.I(r)
if(!r.nodeType)t=n.rt(e.srcElement);else t=n.rt(r)
return t.frameElement._o6(e)},et:function(e){var n=f_core,r=this,t
if(!e)e=n.I(r)
if(!r.nodeType)t=n.rt(e.srcElement);else t=n.rt(r)
return t.frameElement._to(e)}},members:{f_textEditor:function(){var e=this,t
e.f_super(arguments)
if(!(t=f_core.D(e,"mimeType")))t="text/html"
e._7u=t
if(!e._yn)if(e._D7)e._vp();else e.onload=f_textEditor.V},f_finalize:function(){var n,e=this,t
e.onload=null
e._n2=n
if(t=e._D){e._D=n
window.clearInterval(t)}e._sa=n
e._mc()
e.f_super(arguments)},_vp:function(){var a=f_textEditor,n=f_core,o=null,e=this,r,t,f,i
if(e._yn)return
e._yn=!0
e.onload=o
e._sa=r=e.contentWindow
if(n.K())t=r.document;else t=e.contentDocument
e._n2=t
if(f=n.D(e,"text"))e.f_setText(f)
n.re(t,"focus",a.$)
n.re(t,"blur",a.et)
t.designMode="on"
e.dv(!0)
i=e
e._7h=function(){try{i._mc()}catch(c){}i=o}
n.re(r,"unload",e._7h)},_mc:function(){var o=f_textEditor,n=f_core,i,e=this,f=e._7h,r,t
e._7h=i
if(window._rcfacesExiting)return
if(r=e._sa){e._sa=i
if(f)n.ee(r,"unload",f)}if(!(t=e._n2))return
e._n2=i
t.designMode="off"
n.ee(t,"focus",o.$)
n.ee(t,"blur",o.et)},_o6:function(){var e=this,t
if(e._tg)return
e._tg=!0
t=e
if(!e._D)e._D=window.setInterval(function(){try{t.dv()}catch(n){}},500)},_to:function(){var n,e=this,t
if(t=e._D){e._D=n
window.clearInterval(t)}if(!e._tg)return
e._tg=n},ir:function(){var e=this,t
if(t=e._n2)e.P("value",e.f_getText())
e.f_super(arguments)},f_getText:function(){var t=this,e=t._n2
if(!e)return null
switch(t._7u){case"text/plain":return f_core.at(e.body);default:return e.body.innerHTML;}},aa:function(){var e=this._n2
return!e?null:e.body},f_setText:function(t){var n=this,e=n._n2
if(!e)return
switch(n._7u){case"text/plain":f_core.nr(e.body,t)
return;default:e.body.innerHTML=t;}},f_toggleBold:function(e){this._lf("Bold",e)},f_toggleItalic:function(e){this._lf("Italic",e)},f_toggleUnderline:function(e){this._lf("Underline",e)},_lf:function(t,e,i){var r=f_core,n=this._n2
if(!n)return
if(typeof e=="number")r.ai(n.body,e,e);else if(e instanceof Array&&e.length>1)r.ai(n.body,e[0],e[1])
t=t.charAt(0).toUpperCase()+t.substring(1)
n.execCommand(t,!1,i)},_ll:function(r,n){var e=this,t=e._n2
if(!t)return null
switch(e._7u){case"text/plain":return;}return t.queryCommandState(r,!1,n)},_hp:function(e){var r=null,t=this,n=t._n2
if(!n)return r
switch(t._7u){case"text/plain":if(!f_textEditor.F[e])return r;}return n.queryCommandEnabled(e)},_tC:function(t){var e=this._n2
return!e?null:e.queryCommandValue(t)},mD:function(){var s=null,u=this,o=u._n2,e,t,n,a,c,f,r,i
if(!o)return s
e=t=s
if(f_core.K()){if(e=o.body.createTextRange().parentElement)t=component.currentStyle}else if(o.createRange){n=u._sa.getSelection()
if(n&&n.rangeCount){a=n.getRangeAt(0)
e=a.startContainer
for(;e.nodeType==3;e=e.parentNode);c=o.defaultView.getComputedStyle(e,"")
t={}
f=f_textEditor.w
for(r=0;r<f.length;r++){i=f[r]
t[i]=c.getPropertyValue(i)}}n.dettach()}return t},fD:function(e){var t=this
return{bold:t._ll("Bold",e),italic:t._ll("Italic",e),underline:t._ll("Underline",e)}},dv:function(l){var h=f_textEditor,t=this,a,f,g,u,s,c,o,i,n,r,e
if(t.f_isDisabled())return
if(!(a=h.tn))return
if(!(f=a[t.id]))return
g=t._w7
u=t._cE
s=c=0
for(o=0;o<f.length;o++){i=f[o]
n=i.f_getType()
if(r=h.S[n]){e=t._ll(n)
s|=e?r:0
if(e^(g&r)>0)i.f_setSelected(e)
if(l)i.f_setDisabled(!1)
continue}if(r=h.L[n]){e=t._hp(n)
c|=e?r:0
if(l||e^(u&r)>0)i.f_setDisabled(!e)
continue}switch(n){case"fontname":case"fontsize":if(e=t._hp(n)){i.f_setValue(t._tC(n))
if(l)i.f_setDisabled(!1)}break;}}t._w7=s
t._cE=c},_9b:function(e,f){var i=f_textEditor,r=this,t=i.S[e]||i.L[e],n
if(!t)switch(e){case"fontname":case"fontsize":t=!0
break;}if(t){r._lf(e,null,f)
r.dv()}if(n=r._sa)n.focus()}}});