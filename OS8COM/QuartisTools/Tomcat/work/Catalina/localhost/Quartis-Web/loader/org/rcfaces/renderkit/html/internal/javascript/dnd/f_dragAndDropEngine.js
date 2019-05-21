new f_class("f_dragAndDropEngine",{extend:f_object,aspects:[fa_screenAutoScroll],statics:{S:["popup"],w:function(e){return f_dragAndDropEngine.f_newInstance(e)},IsDragInProgress:function(){var e
return!!e},ComputeTypes:function(a,r){var h=f_dragAndDropEngine,o="*",l=[],f,e,c,s,i,u,t,n
if(r&&r.length&&a&&a.length){f=[]
for(e=0;e<r.length;e++){c=r[e]
s=h.$(c)
f.push(s)}for(i=0;i<a.length;i++){u=a[i]
if(!(t=h.$(u)))continue
for(e=0;e<r.length;e++){n=f[e]
if((t[0]==o||n[0]==o||t[0]==n[0])&&(t[1]==o||n[1]==o||t[1]==n[1]))l.fr(r[e])}}}return l},L:function(t){var n=f_core,r,e
if(!t)t=n.I(this)
try{e=r
return!e?r:e._1p(t)}catch(i){n.Error(f_dragAndDropEngine,"_DragMove: exception",i)}},F:function(e){var n=f_core,r=f_dragAndDropEngine,i,t
if(!e)e=n.I(this)
try{if(!(t=i))return
t._h1(e,!1)
r.O()
if(n.K())try{e.srcElement.fireEvent("onmouseup")}catch(o){}return}catch(f){n.Error(r,"_DragStop: exception",f)}},V:function(e){var n=f_core,r=f_dragAndDropEngine,i,t
if(!e)e=n.I(this)
try{if(!(t=i))return
if(e.keyCode==27){t._h1(e,!0)
return r.O()}switch(e.keyCode){case 16:case 17:case 18:t._w8(e)
return!0;}}catch(f){n.Error(r,"_KeyDown/_KeyUp: exception",f)}},M:function(t){var n=f_core,r=f_dragAndDropEngine,i,e
if(!t)t=n.I(this)
try{if(!(e=i))return
e._h1(t,!0)
return r.O()}catch(f){n.Error(r,"_FocusExit: exception",f)}},O:function(){var e,t=e
if(!t)return
e=e
return t._w0()},$:function(n){var r=f_core,f=f_dragAndDropEngine,o,i=n.indexOf(";"),t,e
if(i>=0)n=n.substring(0,i)
if(!(t=f._wu))f._wu=t={}
e=t[n]
if(e!==o)return e
e=n.split("/")
if(e.length!=2)e=null;else e=[r.rs(e[0]),r.rs(e[1])]
return t[n]=e},RegisterDragAndDropPopup:function(n,r){var t=f_dragAndDropEngine,e=t._6h
if(!e)t._6h=e={}
e[n]=r},SetDefaultDragAndDropPopup:function(e){f_dragAndDropEngine.S=f_core.io(null,e)},Finalizer:function(){var e=f_dragAndDropEngine,t
t=e._6h=e.S=t}},members:{f_dragAndDropEngine:function(n,t){var e=this
e.f_super(arguments)
e._n1=n
e._5b=t},f_finalize:function(){var n,e=this,t
e._hn=n
if(t=e._ae){e._ae=n
f_core.rt(e._n1).clearTimeout(t)}e._n1=n
e._6y()
e.f_super(arguments)},f_addDragAndDropInfoByName:function(r){var o=arguments,i=this,a=f_dragAndDropEngine._6h,t,r,n,e,f
if(!a)return null
for(t=0;t<o.length;t++){r=o[t]
if(!(n=a[r]))continue
if(!(e=n(i)))continue
if(f=i._6o)e.f_setParent(f)
i._6o=e}return i._6o},f_start:function(r,n){var i,e=this,t
if(e._1E(r)===!1)return!1
i=e
t=e._n1
e._4s=t.f_getDragItems(n)
e._s1=t.f_getDragItemsValue(n)
e._Cp=t.f_getDragItemsValue(n)
e._yd=t.f_getDragEffects(n)
e._m4=t.f_getDragTypes(n)
return!0},_6y:function(){var t,e=this
e._4s=e._s1=e._Cp=e._yd=e._m4=e._e9=e._2f=e._i0=e._lp=e._hD=e._mD=e._9s=e._cp=e._tp=e._ip=e._c1=e.__i=e._gh=e._1l=e._a_=e.__t=e._8_=t
e._f_(!0)},_1E:function(o){var t=f_core,n=f_dragAndDropEngine,r=this,i,e,f
n.O()
i=r.sa(f_dndEvent.DRAG_INIT_STAGE,o)
if(i===!1)return!1
r._2n=!0
r._fs=!1
e=r._n1.ownerDocument
r._ob=f=t.ts(o,e)
t.re(e,"mousemove",n.L,e)
t.re(e,"mouseup",n.F,e)
t.re(e,"keydown",n.V,e)
t.re(e,"keyup",n.V,e)
t.re(e,"focus",n.M,e)
t.re(e,"blur",n.M,e)
r.dc()
return!0},_w0:function(){var t=f_core,n=f_dragAndDropEngine,r=this,e,i
r._f_(!0)
r.lg()
e=r._n1.ownerDocument
t.ee(e,"mousemove",n.L,e)
t.ee(e,"mouseup",n.F,e)
t.ee(e,"keydown",n.V,e)
t.ee(e,"keyup",n.V,e)
t.ee(e,"focus",n.M,e)
t.ee(e,"blur",n.M,e)
if(r._vo){r._vo=!1
f_event.L(8)}if(i=r._6o)try{i.f_end()}catch(f){t.Error(n,"_exit: call f_end of dndInfo throws exception",f)}r._6y()},sa:function(i,r,a,n,o){var e=this,t
try{t=f_dndEvent.w(e._n1,"drag",r,e,i,e._2f,e._i0,e._e9,n,a,o)}catch(f){f_core.Error(f_dragAndDropEngine,"f_fireEventToSource: fire to source ("+e._n1+") '"+i+"' jsEvent='"+r+"' effect='"+n+"' throws exception",f)
throw f}return t},ht:function(i,r,a,n,o){var e=this,t
try{t=f_dndEvent.w(e._e9,"drop",r,e,i,e._2f,e._i0,e._e9,n,a,o)}catch(f){f_core.Error(f_dragAndDropEngine,"f_fireEventToTarget: fire to target ("+e._e9+") '"+i+"' jsEvent='"+r+"' effect='"+n+"' throws exception",f)
throw f}return t},_bt:function(f){var i=f_dragAndDropEngine,o,e=this,r,t,n
if(e._fs)return!1
r=e.sa(f_dndEvent.DRAG_START_STAGE,f)
if(r===!1)return!1
e._fs=!0
if(!e._vo){e._vo=!0
f_event.S(8)}if(!(t=e._6o)){n=e._5b
if(n===o)n=i.S
if(n)e.f_addDragAndDropInfoByName.apply(e,n)}if(t=e._6o)try{t.f_start()}catch(a){f_core.Error(i,"_dragStart: call f_start of dndInfo throws exception",a)}return!0},_h1:function(t,s){var n=f_dndEvent,c=f_core,u,e=this,a,i,r,o,f
if(!e._fs)return
e._fs=u
a=e._e9
if(!a||!e._c1||s){e.sa(n.DRAG_ABORTED_STAGE,t)
return!1}i=e.__i
r=e._c1
o=!1
f=e.sa(n.DRAG_REQUEST_STAGE,t,i,r)
if(f===!1)o=!0;else{f=e.ht(n.DROP_REQUEST_STAGE,t,i,r)
if(f===!1)o=!0}if(o){e.sa(n.DRAG_CANCELED_STAGE,t)
e.ht(n.DROP_CANCELED_STAGE,t)
return!1}e.sa(n.DRAG_COMPLETE_STAGE,t,i,r)
e.ht(n.DROP_COMPLETE_STAGE,t,i,r)
try{n.w(e._e9,"dropComplete",t,e,null,e._2f,e._i0,e._e9,r,i,!0)}catch(l){c.Error(f_dragAndDropEngine,"_dragStop: fire DROP_COMPLETE throws exception: jsEvent='"+t+"'.",l)}return c.N(t)},_1p:function(n){var o=f_core,b=f_dragAndDropEngine,m=Math,T=m.pow,p,e=this,a=o.ts(n),d,E,k,i,h,t,g,s,l,f,c,u,C,r
e._gh=a
e._1l=n.shiftKey
e._a_=n.altKey
e.__t=n.ctrlKey
e._8_=n.metaKey
e._ho=n.clientX
e._fh=n.clientY
if(!e._fs){d=e._ob
E=m.sqrt(T(d.x-a.x,2)+T(d.y-a.y,2))
if(E<5)return!1
if(e._bt()===!1)return!1}if(k=e._6o)try{k.f_move(a.x,a.y)}catch(v){o.Error(b,"_dragMove: call f_move of dndInfo throws exception",v)}if(!(i=n.srcElement))i=n.target
h=o.Cp(a.x,a.y)
i=h.length?h[h.length-1]:null
if(!i||i.nodeType!=1)return e._cs(n)
t=o.Cb(i)
if(e._e9&&!e._b8(e._e9,t))e._f_(!0)
if(!t)return e._cs(n)
g=!1
s=!1
l=e._ae
if(t.fa_findAutoOpenElement){f=t.fa_findAutoOpenElement(i)
c=e._hn
e._hn=f
if(f&&c&&t.gy(f,c));else if(f&&c)s=g=!0;else if(f)g=!0;else if(c)s=!0}else if(l)s=!0
if(s){e._ae=p
o.rt(e._n1).clearTimeout(l)}if(g){u=e
C=t
e._ae=l=o.rt(e._n1).setTimeout(function(){if(window._rcfacesExiting)return!1
try{var f=u._hn
u._ae=u._hn=p
C.pe(f)}catch(v){o.Error(b,"_dragMove: auto open timeout throws exception",v)}},500)}if(!t.f_isDroppable||!t.f_isDroppable())return e._cs(n,!1)
e._p9=t
if(!(r=t.f_queryDropInfos(e,n,i)))return e._cs(n,!1)
if(e._n1==t&&e._4D==r.itemValue)return
if(e._e9==t&&e._i0==r.itemValue)return
e._cs(n,!1)
e._e9=t
e._2f=r.item
e._i0=r.itemValue
e._lp=r.itemElement
e._d7=r.dropTypes
e._nd=r.dropEffects
e._9s=p
e._4p=r
try{t.f_overDropInfos(e,r)}catch(v){o.Error(b,"_dragMove: call f_overDropInfos throws exception",v)}return e._3l(n)},_b8:function(t,e){if(t==e)return!0
for(;e&&e!=t;e=e.parentNode);return!!e},_cs:function(t,f){var r=f_dndEvent,i,e=this,o=e._e9,n
if(!o){e._3l(t)
return!1}e.sa(r.DRAG_OVER_CANCELED_STAGE,t)
e.ht(r.DROP_OVER_CANCELED_STAGE,t)
e._9s=e._e9=e._2f=e._i0=e._lp=e._d7=e._nd=i
e._f_(!1)
if(f!==!1&&(n=e._ae)){e._ae=i
f_core.rt(e._n1).clearTimeout(n)}e._3l(t)
return!1},_f_:function(a){var i=f_core,f=f_dragAndDropEngine,o,e=this,n=e._p9,t
if(!n)return
if(t=e._4p){e._4p=o
try{n.f_outDropInfos(e,t)}catch(r){i.Error(f,"_releaseDropInfos: call f_outDropInfos throws exception",r)}}if(a===!0){e._p9=o
try{n.f_releaseDropInfos(e)}catch(r){i.Error(f,"_releaseDropInfos: call f_releaseDropInfos throws exception",r)}}},_w8:function(t){var e=this,n
e._1l=t.shiftKey
e._a_=t.altKey
e.__t=t.ctrlKey
e._8_=t.metaKey
if(!e._nd)return!0
n=e._9y(t)
if(n==e._c1)return!0
e._3l(t)
return!0},_9y:function(r){var e=f_dndEvent,i=this,f=i._nd,o=i._yd,n=f&o,t=e.NONE_DND_EFFECT
if(n){if(r)if((r.shiftKey||r.ctrlKey)&&r.altKey&&n&e.MOVE_DND_EFFECT)t=e.MOVE_DND_EFFECT;else if(r.shiftKey&&r.ctrlKey&&n&e.LINK_DND_EFFECT)t=e.LINK_DND_EFFECT;else if(r.altKey&&n&e.LINK_DND_EFFECT)t=e.LINK_DND_EFFECT;else if(r.ctrlKey&&n&e.COPY_DND_EFFECT)t=e.COPY_DND_EFFECT;else if(r.shiftKey&&n&e.MOVE_DND_EFFECT)t=e.MOVE_DND_EFFECT
if(!t)if(n&e.DEFAULT_DND_EFFECT)t=e.DEFAULT_DND_EFFECT;else if(n&e.LINK_DND_EFFECT)t=e.LINK_DND_EFFECT;else if(n&e.MOVE_DND_EFFECT)t=e.MOVE_DND_EFFECT;else if(n&e.COPY_DND_EFFECT)t=e.COPY_DND_EFFECT}return t},_3l:function(o){var c=f_dndEvent,f,u=null,e=this,s,a,r,n,t,i
e._c1=0
e.__i=u
if(!e._e9){e._ic()
return}s=e._d7
a=e._m4
r=f_dragAndDropEngine.ComputeTypes(a,s)
if(!r.length){e._ic()
return}if(!(n=e._9y(o))){e._ic()
return}e._9s=u
t={}
i=e.sa(c.DRAG_OVER_STAGE,o,r,n,t)
if(i===!1){e._ic()
return}if(t._r5!==f)n=t._r5
if(t._a4!==f)r=t._a4
t={}
i=e.ht(c.DROP_OVER_STAGE,o,r,n,t)
if(i===!1){e.sa(c.DRAG_OVER_CANCELED_STAGE,o)
e._ic()
return}if(t._r5!==f)n=t._r5
if(t._a4!==f)r=t._a4
e._c1=n
e.__i=r
e._tp=e._ip=f
e._ic()
return!0},_ic:function(){var e=this,n=e._c1,r=e.__i,t
if(t=e._6o){e._tp=n
e._ip=r
try{t.f_updateTarget(r,n,e._e9,e._2f,e._i0,e._9s)}catch(i){f_core.Error(f_dragAndDropEngine,"_updateDnDMask: call f_updateTarget of dndInfo throws exception",i)}}},f_setTargetAdditionnalInformations:function(e){this._9s=e},f_setSourceAdditionnalInformations:function(e){this._cp=e},f_getSourceAdditionnalInformations:function(){return this._cp},f_getSourceItem:function(){var e=this
return e._4s&&e._4s[0]?e._4s[0]:null},f_getSourceItemValue:function(){var e=this
return e._s1&&e._s1[0]?e._s1[0]:null},f_getSourceItems:function(){return this._4s},f_getSourceItemsValue:function(){return this._s1},f_getSourceComponent:function(){return this._n1},f_getLastMousePosition:function(){return this._gh},fa_getLastMousePosition:function(){return this._gh},fa_getScrollableContainer:function(){return document.body},f_updateMousePosition:function(){var e=this,t
if(f_core.K()){t=document.createEventObject()
t.detail=0
t.screenX=e._ho
t.screenY=e._fh
t.clientX=e._ho
t.clientY=e._fh
t.ctrlKey=e.__t
t.altKey=e._a_
t.shiftKey=e._1l
t.metaKey=e._8_
t.button=0
t.relatedTarget=document.body}else{t=document.createEvent("MouseEvents")
t.initMouseEvent("move",!0,!0,window,0,e._ho,e._fh,e._ho,e._fh,e.__t,e._a_,e._1l,e._8_,0,document.body)}e._1p(t)},fa_autoScrollPerformed:function(){this.f_updateMousePosition()}}});