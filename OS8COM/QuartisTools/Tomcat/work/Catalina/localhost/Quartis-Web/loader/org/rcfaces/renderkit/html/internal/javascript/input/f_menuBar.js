new f_class("f_menuBar",{extend:f_menuBarBase,aspects:[fa_readOnly,fa_disabled,fa_immediate],statics:{w:function(e){var n=f_core,i=this,r=i._A,t=r._0t
if(!e)e=n.I(i)
if(t.H(e,!1))return!1
t._Cs(r,e)
return n.N(e)},S:function(e){var t=f_core,r=this,n=r._A,i=n._0t
if(!e)e=t.I(r)
i._eD(n)
return t.N(e)},L:function(e){var i=f_menuBar,t=f_core,f=this,n=f._A,r=n._0t
if(!e)e=t.I(f)
if(r.H(e))return!1
try{r._mw(n,!1,e)
i.F(n)}catch(o){t.Error(i,"_MenuBarItemInput_click: Click exception",o)}return t.N(e)},F:function(e){if(e._in)return
var t=e._0t.ur(e)
if(!t)return
t.focus()},V:function(e){var n=this,r=n._A,t=r._0t
if(!e)e=f_core.I(n)
return t.H(e)?!1:fa_menuCore.$(t,e)},M:function(r){var i=this,t=i._A,e=t._0t,n
if(!r)r=f_core.I(i)
if(e.H(r,!1))return!1
e._in=!0
n=e.ao(e)
if(n==t)return!0
if(n){e.sf(t)
e.ct()}e.af(t)
if(e.f_isItemDisabled(t))return!0
if(e._er)e.cn(t,r,!0)
return!0},O:function(r){var i=this,n=i._A,e=n._0t,t
if(!r)r=f_core.I(i)
if(e.H(r,!1))return!1
t=e.ao(e)
if(t!=n)return!0
e.sf(n)
e.ct()
return!0}},members:{f_finalize:function(){var e
this._et=e
this.f_super(arguments)},ir:function(){this.ma()
this.f_super(arguments)},on:function(e,t){if(e=="selection")return
this.f_super(arguments,e,t)},fo:function(e,t){if(e=="selection")return
this.f_super(arguments,e,t)},lt:function(r){var f=this,i=f._ai,e,t,n
for(e=0;e<r.length;e++){t=r[e]
if(!(n=i[t]))continue
delete i[t]
f.wE(n)}},wE:function(e){var t
e.onmouseover=e.onmouseout=e.onmousedown=e.onclick=e.onblur=e.onfocus=e.onkeypress=e.onkeydown=null
e._A=t},_Cs:function(t,i){var e=this,n=e.ao(e),r=e._er
if(n==t){if(!e.f_isItemDisabled(n)&&r)e.cn(t,i,!1)
return}if(n){e.sf(n)
e.ct()}e.af(t)
if(e.f_isItemDisabled(t)){e._er=r
return}e._er=r
if(r){f_menuBar.F(t)
e.cn(t,i,!1)}},_eD:function(n){var e=this,t=e.ao(e)
if(t!=n)return
if(e._er)return
e.sf(t)
e.ct()},_mw:function(n,f,i){var o,e=this,t=e.ao(e),r
if(t&&e.un(t)){e._er=o
e.ct()
e.uc(t)
return}if(e.f_isDisabled()||e.f_isItemDisabled(n)){if(t)e.sf(t)
return}if(!e.f_hasVisibleItemChildren(n)){if(e.f_isReadOnly())return
r=e.f_getItemValue(n)
e.ls(n,r,i)
return}e._er=!0
e.cn(n,i,f)},cn:function(t,f,i,n){var e=this,r
if(!n){r=e.ii(t)
if(r==e)n={position:8,component:e.ur(t),deltaX:-1,deltaY:1}}return e.f_super(arguments,t,f,i,n)},uc:function(n){var f="_hover",e=this,i=e.ur(n),r="f_menuBar_bitem",t=""
if(e.f_isDisabled()||e.f_isItemDisabled(n)){t+="_disabled"
if(e._et==n)t+=f}else if(e._et==n){if(e.un(n))t+="_selected"
t+=f}if(t)r+=" "+r+t
if(i.className!=r)i.className=r},md:function(t,i){var n=this,e,r
if(t==null){e=n.f_listVisibleItemChildren(n)
if(!e||!e.length)return
t=e[0]}r=n.ii(t)
if(r==n&&n.un(t)){e=n.f_listVisibleItemChildren(t)
t=e[0]}n.f_super(arguments,t,i)},od:function(t,r){var e=this,i=e.ii(t),n
if(i!=e){e.f_super(arguments,t,r)
return}e.af(t)
e._er=!0
e.cn(t,r,!1)
n=e.f_listVisibleItemChildren(t)
if(n&&n.length)e.hi(n[0],!1,r)},di:function(t,r){var e=this,i=e.ii(t),n
if(i!=e){e.f_super(arguments,t,r)
return}e.af(t)
e._er=!0
e.cn(t,jsEvt,!1)
n=e.f_listVisibleItemChildren(t)
if(n&&n.length)e.hi(n[0],!1,jsEvt)},lp:function(i,o){var e=this,a=e.ii(i),n,t,r,f
if(a!=e){if(e.f_hasVisibleItemChildren(i)){e.f_super(arguments,i,o)
return}i=e.ao(e)}e.ct()
n=e.f_listVisibleItemChildren(e)
for(t=0;t<n.length;t++){r=n[t]
if(i!=r)continue
t++
if(t==n.length)t=0
r=n[t]
f=e._et
if(r==f)break
e.ur(r).focus()
break}},vm:function(i,a){var e=this,o=e.ii(i),n,t,r,f
if(o!=e){if(e.ii(o)!=e){e.f_super(arguments,i,a)
return}i=e.ao(e)}e.ct()
n=e.f_listVisibleItemChildren(e)
for(t=0;t<n.length;t++){r=n[t]
if(i!=r)continue
t--
if(t<0)t=n.length-1
r=n[t]
f=e._et
if(r==f)break
e.ur(r).focus()
break}},gD:function(r,e){var n=this,t=n.be(r,e._i,e._n,e._3e,e._s)
if(e._h)n.sg(t,e._h,e._e0,e._5t,e._2e)
if(e._y)n.uf(t,e._y)
if(e._G)t._G=e._G
return t},be:function(c,s,u,r,l){var n=f_menuBar,a=null,t=this,f=t.f_appendItem(t,c,s,u,r,a,l),e=t.ownerDocument.createElement("button"),o,i
t._ai[f]=e
e._A=f
e.id=c
e.tabIndex=-1
e.className="f_menuBar_bitem"
f_component.w(e,s,r)
e.onmouseover=n.w
e.onmouseout=n.S
if(r){e.accessKey=r
f_key.M(a,r,t,a,e)}e.tabIndex=t._t7
e.onkeydown=n.V
e.onclick=n.L
e.onfocus=n.M
e.onblur=n.O
e.hideFocus=!0
t.uc(f)
if(t._e8.length==1){o=t.getElementsByTagName("a")
for(i=0;i<o.length;i++)t.removeChild(o[i]);}t.appendChild(e)
return f},De:function(e){var n=this,t
for(;e._li;)e=e._li;t=n._et
if(t==e)return
f_menuBar.F(e)
if(t)n.sf(t)
n.af(e)},fa_updateDisabled:function(){var n=this,t,e
if(!n.tr)return
t=n.f_listVisibleItemChildren(n)
for(e=0;e<t.length;e++)n.fa_updateItemStyle(t[e]);},fa_updateReadOnly:function(){},vd:function(){return null},f_setFocus:function(){var t=this,e,n,i,r
if(!f_core.nl(t))return
if(t.f_isDisabled())return!1
e=t.f_listVisibleItemChildren(t)
if(!e.length)return!1
for(n=0;n<e.length;n++){i=e[n]
if(!(r=t.ur(i)))continue
r.focus()
return!0}return!1},ct:function(){var n=this,r=n.f_listVisibleItemChildren(n),e,t
for(e=0;e<r.length;e++){t=r[e]
n.ic(t)}},fa_updateItemStyle:function(t){var e=this
if(e.ii(t)==e){e.uc(t)
return}e.f_super(arguments,t)},lc:function(e){var t=this,n=t.id
return e==t?n:n+"::"+e._T},uo:function(t){var e=this
if(e.ii(t)==e){e.uc(t)
return}e.f_super(arguments,t)},ls:function(e,n,t){var r
this._er=r
this.f_super(arguments,e,n,t)},mo:function(){var e
this._er=e
this.f_super(arguments)},lm:function(t,n){var r,e=this
e._er=r
if(e.ii(t)==e){e.ic(t)
return}e.f_super(arguments,t,n)},ao:function(t){var e=this
return t==e?e._et:e.f_super(arguments,t)},af:function(n){var e=this,r=e.ii(n),t
if(r==e){t=e._et
e._et=n
if(t)e.uc(t)
e.uc(n)
return}return e.f_super(arguments,n)},sf:function(n){var i,e=this,r=e.ii(n),t
if(r==e){if(!(t=e._et))return
e._et=i
if(t)e.uc(t)
return}return e.f_super(arguments,n)},wu:function(){var t=this
return{exit:t.mo,keyDown:function(e){if(!e)e=f_core.I(this)
return fa_menuCore.$(t,e)},keyUp:function(e){return!0},keyPress:function(e){return!0}}},dy:function(){return null},cp:function(e){return e==this},yy:function(r){var t=this,n=t.ao(t),e
if(!n)return!1
e=t.ia(n)
return e==r}}});