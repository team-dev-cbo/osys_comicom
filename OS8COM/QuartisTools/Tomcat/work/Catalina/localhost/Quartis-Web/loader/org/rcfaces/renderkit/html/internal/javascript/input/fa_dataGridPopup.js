new f_aspect("fa_dataGridPopup",{pl:0,w:function(n,u,h,l,g){var d=fa_dataGridPopup,c=f_core,a="div",r="px",o="f_dataGridPopup_popup",m,e,s,t,f
if(m=c.D(n,"popupStyleClass"))o+=" "+m
if(!(e=n._ua)){if(n._2i){s=n.ownerDocument
f_popup.M(s,1,function(e,v){var t,i
e.style.width=n._cl+r
e.style.height=n._ev+r
t=v.createElement(a)
t.className=o
t.style.visibility="inherit"
t.style.position="relative"
t.style.width=n._cl+r
v.body.appendChild(t)
n._ua=e
if(t){t._6r=!0
n.wa(t)}i=t.offsetHeight
e.style.height=i+r
t.style.height=i+r
d.S(e,n,u,h,l,g)})
return}e=n.ownerDocument.createElement(a)
e.className=o
e.style.width=n._cl+r
e.style.height=n._ev+r
e.onclick=c.ov
e.onmousedown=c.ov
t=e
f=n
f.ownerDocument.body.appendChild(e)
n._ua=e
if(t){t._6r=!0
n.wa(t)}}d.S(e,n,u,h,l,g)},S:function(n,e,o,c,a,f){var r=f_popup
if(r.et({exit:function(t){return e._dr(t)},keyDown:function(t){switch(t.keyCode){case 13:case 14:e._0g(e._t,t)
return!1;case 9:e._0g(e._t,t)
return e._wr=!0;case 27:e.hh(t)
return!1;case 40:case 38:case 34:case 33:e._t.f_fireEvent("keydown",t)
return!1;}return!0},keyUp:function(t){switch(t.keyCode){case 40:case 38:case 34:case 33:case 35:case 36:case 16:case 17:e._t.f_fireEvent("keyup",t)
return!1;}return!0},keyPress:function(s){return!0}},e,n)==!1)return
if(n){f_key.S("#dataGridPopup")
var i={component:o,position:8}
if(e._2i)r.er(n,i);else r.cs(n,i)
if(e._ot)e._ot.focus();else if(e._x){e._t8=e._x
e._t8._pg=!0
e._t8.setAttribute("role","listbox")}}e._f0=!0
if(typeof f=="function")f.call(e)},L:function(e){var r=window,n=f_popup,i,t
if(!e._f0)return
if(e._t8){e._t8.removeAttribute("aria-activedescendant")
if(e._t8._pg){e._t8.setAttribute("role","textbox")
e._t8._pg=!1}}e._f0=i
n.ne(e)
f_key.L("#dataGridPopup")
if(!(t=e._ua))return
e._ua=i
if(!e._2i){n.el(t)
r.setTimeout(function(){e._1g()
if(!1==!1)n.oi(t)},0)
return}n.rc(t)
r.setTimeout(function(){e._1g()
n.ca(t)},0)},F:function(e){var n=this,r=n,t=r._uu
if(!e)e=f_core.I(n)
return t.H(e)?!1:t._4w(e)},V:function(e){var n=this,r=n,t=r._uu
if(!e)e=f_core.I(n)
return t.H(e)?!1:t._Cv(e)}},{fa_dataGridPopup:function(){var n=f_core,e=this,r,t
e._oC=n.D(e,"valueColumnId")
if(r=n.D(e,"labelColumnId"))e._md=r
if(!(t=n.D(e,"valueFormat")))if(r)t="{"+r+"}";else t="{0}"
e._cl=n.te(e,"popupWidth",320)
e._ev=n.te(e,"popupHeight",200)
e._wi=t
e._2i=f_popup.F()},f_finalize:function(){var n,e=this,t
if(t=e._D){e._D=n
window.clearTimeout(t)}e._ua=e._N=n
e._1g()},_1g:function(){var a=f_classLoader,i,c=null,e=this,o,f,r,t,n
try{if(o=e._ot){e._ot=o._uu=i
o.onkeyup=c}if(e._t8)e._t8=i
if(f=e._iw){e._iw=f._uu=i
f.onclick=c}if(r=e._t){e._t=i
if(t=r.parentNode)t.removeChild(r)
a.Destroy(r)}if(n=e._wo){e._wo=i
if(t=n.parentNode)t.removeChild(n)
a.Destroy(n)}}catch(s){}},wa:function(k){var v=fa_dataGridPopup,t=f_core,G="px",tt="left",A="div",W=" ",rr="role",T="middle",C="td",R="tr",ot="listbox",ri,e=this,vf=t.te(e,"rows"),ce=t.Q(e,"paged",!0),fn=vf>0&&ce,en=e._cl-2,U=e._ev-2,g=fn?18:0,z=0,sn="fa_dataGridPopup_table",ut=t.B(k,"table",{cellSpacing:0,cellPadding:0,className:sn,style:"width:"+en+"px;height:"+U+G}),E=t.B(ut,"tbody"),eu=t.Q(e,"searchFieldVisible",!0),j=en,u=U,n=f_resourceBundle.Get(v),l,m,o,c,f,r,i,s,b,a,d,h
if(eu){z=20
j-=2+2
u-=2+2+z+2+2
l=t.B(E,R,{className:"fa_dataGridPopup_search"})
m=t.B(l,C,{align:tt,valign:T})
o=t.B(m,A,{className:"fa_dataGridPopup_title"})
t.B(o,A,{className:"fa_dataGridPopup_label",textNode:n.f_get("SEARCH_LABEL")})
c=t.B(o,"form",{className:"fa_dataGridPopup_form"})
e._iw=f=t.B(c,"img",{className:"fa_dataGridPopup_icon",src:f_env.GetBlankImageURL(),name:"searchButton"})
f._uu=e
f.onclick=v.V
e._ot=r=t.B(c,"input",{className:"fa_dataGridPopup_input",name:"searchValue",type:"text",role:ot,autocomplete:"off"})
r._uu=e
r.onkeyup=v.F
e._t8=r
e._t8.setAttribute(rr,ot)}e._5i=""
if(g)u-=g+2+2
i=t.B(E,R,{height:u},C,{align:tt,valign:T})
s="fa_dataGridPopup_grid"
if(b=t.D(e,"gridStyleClass"))s+=W+b
dataGrid=f_dataGridPopup.S(i,e,j,u,s)
dataGrid._w3=!0
dataGrid.removeAttribute(rr)
e._t=dataGrid
if(fn){if(!t.D(e,"message")){e.setAttribute(t._m+":message",n.f_get("MESSAGE"))
e.setAttribute(t._m+":zeroResultMessage",n.f_get("ZERO_RESULT_MESSAGE"))
e.setAttribute(t._m+":oneResultMessage",n.f_get("ONE_RESULT_MESSAGE"))
e.setAttribute(t._m+":manyResultMessage",n.f_get("MANY_RESULTS_MESSAGE"))
e.setAttribute(t._m+":manyResultMessage2",n.f_get("MANY_RESULTS_MESSAGE2"))}i=t.B(E,R,{height:g+4},C,{align:"center",valign:T})
a="fa_dataGridPopup_pager"
if(d=t.D(e,"pagerStyleClass"))a+=W+d
e._wo=pager=f_pager.O(i,e,":"+dataGrid.id,a)}h=e
dataGrid.f_addEventListener("selection",function(p){return!(p.f_getDetail()&256)?ri:h._0g(p.f_getSelectionProvider(),p.f_getJsEvent())})
if(t.nt())k.style.height=(k.scrollHeight+2)+G
return dataGrid},hD:function(e){this._dD=e},ay:function(){this._N=f_core.io(null,arguments)},hh:function(n){fa_dataGridPopup.L(this,n)
var e=this
window.setTimeout(function(){var t=e
e=null
t.f_setFocus()},10)},nd:function(i,n){var e=this,r=e._f0,t
if(!r){if(e.f_fireEvent("menu",i)===!1)return!1
t=e
fa_dataGridPopup.w(e,e,0,e.offsetHeight,function(){t._2m(n)})}else e._2m(n)
return!1},_2m:function(n){var r=this,t=r._t,e
if(!t)return
t.Ef(1)
e=r.f_getFilterProperties()
if(n)e.text=n
t.f_setFilterProperties(e)},_dr:function(e){if(!e)e=f_core.I(this)
if(e.type=="blur")return!0
fa_dataGridPopup.pl=e.timeStamp
this.hh(e)
return!1},oh:function(){return this._f0},ys:function(){return this._t},rD:function(t){var e=this.ys()
if(!e)return
e.ny(t)},dD:function(){var e=this.ys()
if(!e)return
e.f_clearAll()},_0g:function(s,l){var n=this,a,o,r,e,i,c,t,u,f
n._wr=!1
a=s.f_getSelection()
if(!a.length)return
o=a[0]
r=s.f_getRowValues(o)
e=s.f_getRowValuesSet(o)
n.hh(l)
if(e)for(i in e)r[i]=e[i];c=f_core.he(n._wi,r)
if(!(t=n._oC))t=0
u=r[t]
f=n
window.setTimeout(function(){popup=f
f=null
popup.E_(u,c,e,popup._wr)},0)},_Cv:function(){var r,e=this,n,t
if(n=e._D){e._D=r
window.clearTimeout(n)}t=e._ot.value
e.nd(null,t)},_4w:function(i){var f=window,s=f_core,l,e=this,u=!1,t,c,o,r,a,n
switch(i.keyCode){case 40:case 38:case 34:case 33:break;case 14:case 13:case 9:e.du(i)
return!0;}t=e._ot.value
if(t==e._5i)return!0
e._5i=t
c=i.keyCode
if(o=e._D){e._D=l
f.clearTimeout(o)}r=e.f_getSuggestionDelayMs()
if(r<1)return!0
a=r
n=e
e._D=f.setTimeout(function(){var h=n
n=null
if(f._rcfacesExiting)return
try{h._ul()}catch(g){s.Error(fa_dataGridPopup,"_onSearchSuggest.timer: Timeout processing error !",g)}},a)
return u?s.N(i):!0},_ul:function(t){var n=this,e
if(!t)t=n._ot.value
e=n.f_getSuggestionMinChars()
if(e>0&&t.length<e)return
n.nd(null,t)}},fa_filterProperties);