new f_aspect("fa_subMenu",{members:{f_finalize:function(){var e
this._cu=e},ef:{after:function(){var e,n,t
if(e=this._cu)for(n in e){t=e[n]
t.ef()}}},Ep:function(c,n){var e=this,r,t,a,f,o,i
f_class.S("f_menu",!0)
if(!n)n={}
if(!(r=n._T)){if(!(t=e._eb))t=0
t++
e._eb=t
r=e.id+"__subMenu"+t}a=e.a_()
f=null
if(e.f_getSelection)f=e
o=f_menu.f_newInstance(e,f,a,r,c,n._ue,n._c9,n._El)
if(!(i=e._cu))e._cu=i={}
return i[c]=o},f_listSubMenus:function(){var t=[],e,r,n
if(!f_class.S("f_menu"))return t
if(!(e=this._cu))return t
for(r in e){n=e[r]
t.push(n)}return t},f_getSubMenuById:function(r){var n=null,t=this._cu,e
if(!t)return n
e=t[r]
return e?e:n}}});