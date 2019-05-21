new f_aspect("fa_menuCore",{w:0,S:function(){return this._T},L:function(e){var t=f_core,i=this,r=i._A,n=r._0t
if(!e)e=t.I(i)
if(n.H(e,!1))return!1
n.hi(r,!0,e)
return t.N(e)},F:function(e){var t=f_core,r=this,n=r._A,i=n._0t
i._eE(n)
if(!e)e=t.I(r)
return t.N(e)},V:function(e){var t=f_core,i=this,r=i._A,n=r._0t
if(!e)e=t.I(i)
if(n.H(e))return!1
n.hw(r,e)
return t.N(e)},M:f_core.oo,O:f_core.oo,$:function(e,n){var r=null,f=e,i,o,t
for(;;){if(!(i=e.ao(f)))break
r=i
if(!e.un(i))break
f=i}switch(o=n.keyCode){case 93:t=!0
break;case 40:e.od(r,n)
t=!0
break;case 38:e.di(r,n)
t=!0
break;case 39:e.lp(r,n)
t=!0
break;case 37:e.vm(r,n)
t=!0
break;case 36:t=!0
break;case 35:t=!0
break;case 9:if(!e.oy||!e.oy())break;case 13:case 14:e.aE(r,n)
t=!0
break;case 27:e.lm(r,n)
t=!0
break;default:if(!n.altKey){t=!0
e.md(r,n)}}return t?f_core.N(n):!0},et:0,tn:function(e){if(e._vn)return e._vn
e._vn="key"+fa_menuCore.et++
return e._vn}},{fa_menuCore:function(){var t=f_core,e=this
e._ai={}
e.__c={}
e._0t=e
if(e.tagName){e._ue=t.te(e,"itemImageWidth")
e._c9=t.te(e,"itemImageHeight")}e._sm=f_env.M()+"/menu/blank.gif"
f_imageRepository.PrepareImage(e._sm)},f_finalize:function(){var t,e=this
e._0t=e._ai=e.__c=t},f_appendRadioItem:function(u,a,n,o,s,r,i,h,l,f,c){var t=this,e=t.f_appendItem(u,a,o,s,i,h,l,f,c)
e._e5=8
if(n)t.f_setItemGroupName(e,n)
if(r)t.f_setItemChecked(e,r)
return e},f_appendCheckItem:function(s,i,c,a,n,f,l,u,o,r){var t=this,e=t.f_appendItem(s,i,c,a,f,l,u,o,r)
e._e5=2
if(n)t.f_setItemChecked(e,n)
return e},yE:function(i,r,e){var n=this,t=n.f_appendItem(i,r,e._i,e._n,e._3e,e._8c,e._s,e._7f,e._iy)
switch(e._B){case 8:if(e._8i)n.f_setItemGroupName(t,e._8i);case 2:t._e5=e._B
if(e._e4)n.f_setItemChecked(t,!0)
break;}if(e._dv)t._dv=!0
if(e._h)n.sg(t,e._h,e._e0,e._5t,e._2e)
if(e._y)n.uf(t,e._y)
if(e._G)n.f_setItemStyleClass(t,e._G)
return t},f_appendItem:function(n,r,l,u,s,a,o,f,c){var i=fa_menuCore,t=this,e
if(!n)n=t
e={}
e._e5=1
e._3e=s
e._n=u
e._li=n
e._0t=t
e._i=l
e._iy=c
e.toString=i.S
if(!r)r=t.id+"::"+i.w++
e._T=r
t.is(n,e)
if(o)t.f_setItemDisabled(e,o)
if(a)t.f_setItemToolTip(e,a)
if(f===!1)t.f_setItemVisible(e,f)
return e},f_appendSeparatorItem:function(t){var n=this,e
if(!t)t=n
e={}
e._e5=64
e._s=!0
e._li=t
e._0t=n
e.toString=function(){return"[MenuItemSeparator]"}
n.is(t,e)
return e},Cy:function(t,e){this._ue=t
this._c9=e},Co:function(m,o){var a=fa_menuCore,A="::label",C="role",T="label",t=this,E,f,n,k,G,u,g,c,h,i,l,e,W,r,s,b,z,R,p,d,v
if(f_popup.F()){E=m
f=m.document
m=f.body}else f=m.ownerDocument
n=f.createElement("ul")
k="f_menu_popup"
if((o._u&&o._u.f_getStyleClass)&&(G=o._u.f_getStyleClass()))k+=" "+G+"_popup"
n.className=k
if(!E){n.style.visibility="hidden"
E=n}n._6r=E
m.appendChild(n)
u=a.tn(o)
t.__c[u]=n
n.id=t.lc(o)
n._A=o
if(!t._ue)t._ue=18
if(!t._c9)t._c9=18
g=!0
c=t.f_listVisibleItemChildren(o)
for(h=0;h<c.length;h++){i=c[h]
if(i._e5==64){if(g)continue
for(l=h+1;l<c.length;l++)if(c[l]._e5!=64)break;if(l==c.length)break}e=f.createElement("li")
if(W=i._T)e.id=W
n.appendChild(e)
u=a.tn(i)
t._ai[u]=e
e._A=i
g=!1
switch(i._e5){case 2:e.setAttribute(C,"menuitemcheckbox")
break;case 8:e.setAttribute(C,"menuitemradio")
break;case 64:e.setAttribute(C,"menuitemseparator")
e.className="f_menu_item_sep"
e.onmousedown=a.M
g=!0;default:e.setAttribute(C,"option")
break;}if(g)continue
e.className="f_menu_item"
r=f.createElement("img")
r.align=r.valign="middle"
r.border=0
r.width=t._ue
r.height=t._c9
r.src=t._sm
r.className="f_menu_item_image"
fa_aria.SetElementAriaLabelledBy(r,t.lc(o)+A)
e._u5=r
e.appendChild(r)
s=f.createElement(T)
s.className="f_menu_item_text"
s.id=t.lc(o)+A
if(b=i._3e)e._3e=e.accessKey=b
z=t.f_getItemLabel(i)
f_component.w(s,z,b)
e.appendChild(s)
if(R=i._iy){p=f_core.sr(R)
d=f.createElement(T)
d.className="f_menu_item_accelV"
d.innerHTML=p
e.appendChild(d)
v=f.createElement(T)
v.className="f_menu_item_accel"
v.innerHTML=p
e.appendChild(v)}e.onmouseover=a.L
e.onmouseout=a.F
e.onmousedown=a.V
e.onclick=a.O
t.uo(i,e)}return n},ur:function(e){var t=fa_menuCore.tn(e)
return this._ai[t]},ia:function(e){var t=fa_menuCore.tn(e)
return this.__c[t]},un:function(e){return this.ia(e)!=null},ao:function(t){var e=this.ia(t)
return!e?null:e._et},md:function(e,f){var t=this,c=f.keyCode,s=String.fromCharCode(c).toUpperCase(),a=t.ii(e),o=t.f_listVisibleItemChildren(a),n,r,i
for(n=0;n<o.length;n++){e=o[n]
r=t.f_getItemAccessKey(e)
if(r!=s)continue
if(t.f_isItemDisabled(e))return
t.af(e)
if(t.f_hasVisibleItemChildren(e)){t.cn(e,f,!0)
return}i=t.f_getItemValue(e)
t.ls(e,i,f)
return}},af:function(n){var e=this,f=e.ii(n),i=e.ia(f,!0),t=i._et,r
if(t==n)return
i._et=n
if(t){if(r=e.ia(t))e.ic(t)
e.uo(t)}e.uo(n)},sf:function(r){var f,e=this,i=e.ii(r),n=e.ia(i,!0),t=n._et
if(!t)return
n._et=f
e.uo(t)},od:function(f){var i=this,o=i.ii(f),n=i.f_listVisibleItemChildren(o),e,t,r
for(e=0;e<n.length;e++){t=n[e]
if(t!=f)continue
for(r=0;r<n.length;r++){e++
if(e==n.length)e=0
t=n[e]
if(t._e5==64)continue
i.af(t)
return}return}},di:function(f){var i=this,o=i.ii(f),n=i.f_listVisibleItemChildren(o),e,t,r
for(e=0;e<n.length;e++){t=n[e]
if(t!=f)continue
for(r=0;r<n.length;r++){e--
if(e<0)e=n.length-1
t=n[e]
if(t._e5==64)continue
i.af(t)
break}break}},lp:function(n,r){var e=this,t
if(e.f_isItemDisabled(n))return
if(!e.un(n)){e.cn(n,r,!0)
return}t=e.f_listVisibleItemChildren(n)
if(t&&t.length)e.hi(t[0],!1,r)},vm:function(t){var e=this,n=e.ii(t)
e.ic(n)},aE:function(t,r){var e=this,n
if(e.f_isReadOnly())return
if(e.f_isItemDisabled(t))return
if(!e.f_hasVisibleItemChildren(t)){n=e.f_getItemValue(t)
e.ls(t,n,r)
return}if(e.f_hasVisibleItemChildren(t)){e.cn(t,evt,!0)
return}e.ic(t)
n=e.f_getItemValue(t)
e.ls(t,n,r)},lm:function(n){var e=this,t
if(!n){e.ic(e)
return}t=e.ii(n)
e.ic(t)},ii:function(e){return e._li},hi:function(t,i,o,f){var e=this,r=e.ii(t),a=e.ia(r),n
if(!a)return
n=e.ao(r)
if(n&&n!=t){e.ic(n)
e.sf(n)}e.af(t)
if(e.f_isItemDisabled(t))return
if(e.f_hasVisibleItemChildren(t)&&i)e.cn(t,o,f)},_eE:function(e){if(this.un(e))return
this.sf(e)},hw:function(t,r){var e=this,n
if(e.f_hasVisibleItemChildren(t))return
if(e.f_isItemDisabled(t))return
e.ic(t)
if(e.f_isReadOnly())return
n=e.f_getItemValue(t)
e.ls(t,n,r)},fa_updateItemStyle:function(){},uo:function(t,r){var l=fa_aria,W="_hover",A="_disabled",v=" ",z="",i,p,k,o,E,e,n,f,u,h,T,a,G,R,C,d,s,g,c,m,b
i=this
if(t._e5==64)return
if(!r)r=i.ur(t)
p=i.ii(t)
k=i.ao(p)
o=k==t
E=i.f_isItemDisabled(t)
e=z
n=t._h
f=i.f_getItemStyleClass(t)
h=p._u
if(h&&h.sc)u=h.sc()
if(i.f_hasVisibleItemChildren(t)){T=i.un(t)
if(T||o){e+="_selected"
l.SetElementAriaSelected(r,!0)}else e+="_popup"
if(!o)r.removeAttribute(l.ARIA_SELECTED)
if(E){e+=A
l.SetElementAriaDisabled(r,!0)
if(a=t._e0)n=a}else{r.removeAttribute(l.ARIA_DISABLED)
if(G=t.__1)n=G}}else if(E){e+=A
l.SetElementAriaDisabled(r,!0)
if(o){e+=W
if(u)l.SetElementAriaActiveDescendant(u,r.id)}if(a=t._e0)n=a}else if(o){e+=W
if(u)l.SetElementAriaActiveDescendant(u,r.id)
if(R=t._5t)n=R}else if(t._e4&&(C=t._2e))n=C
s=d="f_menu_item"
if(f)s+=v+f
if(e){s+=v+d+e
if(f&&f.indexOf(v)<0)f+=v+f+e}if(r.className!=s)r.className=s
if(g=r._u5){c="f_menu_item_image"
e=z
if(!n){if(t._e4){m=t._e5
if(m==2)e="_check";else if(m==8)e="_radio"}if(o)e+=W
if(e)c+=v+c+e}n=typeof n=="string"?"url('"+n+"')":z
b=g.style
if(b.backgroundImage!=n)b.backgroundImage=n
if(g.className!=c)g.className=c}},ls:function(t,f,i){var e=this,n,r
e.ct()
switch(t._e5){case 2:n=e.f_isItemChecked(t)
e.f_setItemChecked(t,!n)
return;case 8:e.f_setItemChecked(t,!0)
return;}r=e.vd()
e.f_fireEvent("selection",i,t,f,r)},f_getItemLabel:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._i},f_setItemLabel:function(e,t){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
e._i=t},f_getCheckedItemInGroup:function(t){return this.f_mapIntoGroup(this.f_getItemGroupName(t),function(e){if(this.f_isItemChecked(e))return e})},f_listAllInGroup:function(e){return this.sl(this.f_getItemGroupName(e))},f_removeAllItems:function(e){var t=e._e8
if(!t)return
e._e8=[]},ve:function(){return this},lt:function(){},_Cd:function(e){var i="menu",r,t,n
r=null
t=this
if(t.ia(e)){f_core.N()
return!1}if(e._dv)t.f_removeAllItems(e)
if(e.il&&!e.il(i)){n=new f_event(t,i,r,e,r,t.vd())
try{if(e.f_fireEvent(n)===!1)return!1}finally{f_classLoader.Destroy(n)}}return t.f_hasVisibleItemChildren(e)},_cC:function(i){var r=f_popup,n=this,t=n.ii(i),e
if(r.F()){if(n.cp(t))return r.M(document)
e=n.ia(t)
return r.M(e.ownerDocument)}if(!t)return document.body
e=n.ia(t)
return!e?document.body:e.ownerDocument.body},_5D:function(){},f_open:function(t,e,n){if(!e)e={position:0}
if(t)e.jsEvent=t
return this.cn(this,t,n,e)},cn:function(n,v,g,s){var o=f_popup,e=this,c,h,a,u,l,r,f,t,i
if(!e._Cd(n))return!1
c=e.ii(n)
h=e._cC(n)
a=e.Co(h,n)
if(c)u=e.ia(c)
if(!u&&o.et(e.wu(),e,a,e.dy())==!1)return!1
try{if(n!=e)e.uo(n)
l=e.lc(n)
f_key.S(l)
if(!s)s={component:e.ur(n),position:16}
if(o.F())o.er(a._6r,s);else o.cs(a._6r,s)}catch(d){if(!c)o.ne(e)
throw d}if(g){r=e.f_listVisibleItemChildren(n)
if(r&&r.length){f=null
if(g<0)for(t=r.length-1;t>=0;t--){i=r[t]
if(e.f_isItemDisabled(i))continue
f=i
break}else for(t=0;t<r.length;t++){i=r[t]
if(e.f_isItemDisabled(i))continue
f=i
break}if(!f)f=r[0]
e.hi(f,!1,v)}}return!0},ic:function(i,n){var m=fa_menuCore,r=f_popup,c,e=this,o,l,h,u,s,a,v,f,t,g,d
if(!n&&!(n=e.ia(i)))return
if(n._A===c)return
o=n._6r
n._6r=n._A=c
if(l=n._et){n._et=c
e.ic(l)}h=e.lc(i)
f_key.L(h)
if(i!=e)e.uo(i)
if(r.F())r.rc(o);else r.el(o)
u=e._ai
s=e.f_listItemChildren(i)
for(a=0;a<s.length;a++){v=s[a]
f=m.tn(v)
if(!(t=u[f]))continue
delete u[f]
t._A=t._u5=c
t.onclick=t.onmousedown=t.onmouseover=t.onmouseout=null}f=m.tn(i)
delete e.__c[f]
if(r.F())r.ca(o);else r.oi(o)
if(d=e.ii(i))g=e.ia(d)
if(!g)r.ne(e)},ct:function(){this.ic(this)},mo:function(){this.ct()}},fa_groupName,fa_items,fa_aria);