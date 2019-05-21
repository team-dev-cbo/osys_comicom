new f_class("f_eventTarget",{extend:f_object,aspects:[fa_eventTarget],statics:{w:{change:"change",check:"check",blur:"blur",dblClick:"dblclick",drag:"drag",drop:"drop",dropComplete:"dropComplete",error:"error",expand:"expand",focus:"focus",init:"init",keyUp:"keyup",keyDown:"keydown",keyPress:"keypress",load:"load",menu:"menu",mouseDown:"mousedown",mouseOver:"mouseover",mouseOut:"mouseout",mouseUp:"mouseup",preSelection:"preSelection",propertyChange:"propertyChange",selection:"selection",sort:"sort",suggestion:"suggestion",user:"user",validation:"validation"},Initializer:function(){var r="reset",n=null,e={},t
this.S=e
t={_ef:!1}
e["blur"]={_9t:"onblur",_ef:!1}
e["change"]={_9t:"onchange"}
e["check"]=n
e["close"]=t
e["dblclick"]={_9t:"ondblclick"}
e["drag"]=e["drop"]=e["dropComplete"]=n
e["error"]=t
e["expand"]=n
e["focus"]={_9t:"onfocus",_ef:!1}
e["init"]=t
e["keydown"]={_9t:"onkeydown"}
e["keypress"]={_9t:"onkeypress"}
e["keyup"]={_9t:"onkeyup",_ef:!1}
e["load"]=e["menu"]=t
e["mousedown"]={_9t:"onmousedown"}
e["mouseout"]={_9t:"onmouseout",_ef:!1}
e["mouseover"]={_9t:"onmouseover",_ef:!1}
e["mouseup"]={_9t:"onmouseup",_ef:!1}
e["preSelection"]={_ef:!0}
e["propertyChange"]=t
e[r]=r
e["selection"]={_9t:"onclick"}
e["sort"]=e["submit"]=e["suggestion"]=n
e["user"]=t}},members:{f_eventTarget:function(){var e=this,t
e.f_super(arguments)
if(e.nodeType==1&&(t=f_core.D(e,"events")))e.au(f_eventTarget.w,t)},f_finalize:function(){var e
this.f_super(arguments)
this._ht=e},on:function(a,c){var f=f_core,n=this,e,o,i,t
if(e=f_eventTarget.S[a]){o=e._ef
i=n
t=function(r){if(window._rcfacesExiting)return!1
if(!r)r=f.I(this)
return o!==!1&&i.H(r)?!1:i.f_fireEvent(a,r)}
if(e=="reset"){if(!n._ht){n._ht=t
f.Cs(n,t)}return}c[e._9t]=t
return}else if(e===null)return
switch(a){case"validation":f.e_(n)
return;}},fo:function(i,o){var r=f_core,a,f=null,t=this,e,n
if(e=f_eventTarget.S[i]){if(e=="reset"){if(n=t._ht){t._ht=a
r.sC(t,n)}return}o[e._9t]=f
return}else if(e===f)return
switch(i){case"validation":r.nv(t)
return;}}}});