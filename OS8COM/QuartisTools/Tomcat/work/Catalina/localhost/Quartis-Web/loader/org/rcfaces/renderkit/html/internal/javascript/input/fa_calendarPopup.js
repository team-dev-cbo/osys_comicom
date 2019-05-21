new f_aspect("fa_calendarPopup",{w:function(e){var n=f_popup,r,i=e.f_getCalendarObject(),t
if(!e._f0)return
e._f0=r
e.fb()
n.ne(e)
f_key.L("#calendarPopup")
if(!(t=e._2s))return
if(!e._2i){t.style.visibility="hidden"
return}n.rc(t)
e._2s=r
i.yf()},S:function(t,G,W,z,E){var r=f_core,d=f_popup,k="inherit",T="div",h="px",C=" ",A,g=this,v=t.f_getCalendarObject(),e,n,o,s,b,i,m,p,c,a,l,u,f
if(t._f0)return
if(!(e=t._2s)){n=null
o="f_dateChooser_popup f_dateChooser_popup_"+t._0o
if(s=r.D(t,"popupStyleClass"))o+=C+s+C+s+"_"+t._0o
if(t._2i){b=t.ownerDocument
if(!e){e=d.M(b)
i=e.document
i.body.innerHTML=""
n=i.createElement(T)
n.className=o
n.style.visibility=k
i.body.appendChild(n)}}else{e=t.ownerDocument.createElement(T)
e.className=o
e.onclick=r.ov
e.onmousedown=r.ov
n=e
m=t
m.ownerDocument.body.appendChild(e)}t._2s=e
if(n){n._6r=!0
v.my(n)
if(p=g._h9){g._h9=A
v.f_setSelection(p,g._bg)}}else v.ym()}if(d.et({exit:t._dr,keyDown:function(R){return!0},keyUp:function(R){return!0},keyPress:function(R){return!0}},t,e)==!1)return
if(e){f_key.S("#calendarPopup")
if(t._2i)d.er(e,{component:t,position:8});else{c=r.fi(G)
a=r.fi(e.offsetParent)
l=c.x+W-a.x
u=c.y+z-a.y
l+=0
u+=3
f={x:l,y:u}
r.tb(e,f)
e.style.left=f.x+h
e.style.top=f.y+h
if(E)e.style.width=E+h;else if(E!==!1)e.style.width="auto"
e.style.visibility=k}}t._f0=!0},L:function(r){var f=fa_calendarPopup,a=r.f_getComponent(),t,e,i,o,n
if(r.f_getDetail()!=1)return!0
t=a.f_getTargetComponent()
e=r.f_getValue()
if(e&&e.length){e=e[0]
if(e&&e.length)e=e[0]}i=r.f_getJsEvent()
if(t._Co(e,i)===!1)return!1
f.w(t,i)
if((o=t._uc)&&(n=t.f_findComponent(o)))try{f.F(n,e,t._pp,a)}catch(c){f_core.Error(f,"_DateSelectedEvent: Set date of component '"+n.id+"' throws exception.",c)}return!0},F:function(e,n,r,i){if(e.f_setDate){e.f_setDate(n)
return}if(e.f_setValue&&e.f_setValue(n)!==!1)return
var t=i.ry(n,r)
if(e.f_setText){e.f_setText(t)
return}if(e.tagName.toLowerCase()=="input"){e.value=t
return}f_core.nr(e,t)},V:function(e,n,r){if(e.f_getDate)return e.f_getDate()
var t
if(e.f_getText)t=e.f_getText();else if(e.tagName.toLowerCase()=="input")t=e.value;else return null
if(!t)return null
try{return r.bE(t,n)}catch(i){}alert("La date saisie est incohérente !")
return new Date()}},{fa_calendarPopup:function(){var t=this,e,n
t._0o=f_core.te(t,"layout",2)
switch(t._0o){case 4:e=1|2|8|64|128|16
break;case 3:e=1|2|8|16
break;case 1:e=4|8
break;default:e=4|8|16
break;}t._a=n=f_calendarObject.w(t,e)
n.Z("selection",fa_calendarPopup.L)
n.vw()
t._2i=f_popup.F()},f_finalize:{after:function(){var n,t=this,r,e
if(r=t._a){t._a=n
f_classLoader.Destroy(r)}if(e=t._2s){t._2s=e._Dd=n
if(e.nodeType)e.onclick=e.onmousedown=null}}},f_openCalendarPopup:function(a){var r=fa_calendarPopup,e=this,f,n,t,i
if((f=e._uc)&&(n=e.f_findComponent(f))){try{i=e._pp
if(!(t=r.V(n,i,e._a)))t=e.f_getDefaultSelectedDate()}catch(o){t=null}try{e.f_setSelection(t,!0)}catch(o){f_core.Error(r,"f_openCalendarPopup: set Selection '"+n.id+"' with date '"+t+"' throws exception.",o)}}if(e.f_fireEvent("menu",a.f_getJsEvent())===!1)return!1
r.S(e,e,0,e.offsetHeight,!1,!1)
return!1},lh:function(){var e=this._a
e.lh.apply(e,arguments)},hf:function(e){this._a.hf(e)},f_getCalendarObject:function(){return this._a},_dr:function(e){fa_calendarPopup.w(this,e)
return!1},f_getDefaultSelectedDate:function(){if(this._pm)return this._pm},f_setDefaultSelectedDate:function(e){if(e instanceof Date)this._pm=e
return},f_getSelection:function(){var e=this,t=e._a
return!t?e._h9:t.f_getSelection()},f_setSelection:function(n,t){var e=this,r=e._a
if(!r){e._h9=n
e._bg=t
return}r.f_setSelection(n,t)}},fa_itemsWrapper,fa_selectionProvider);