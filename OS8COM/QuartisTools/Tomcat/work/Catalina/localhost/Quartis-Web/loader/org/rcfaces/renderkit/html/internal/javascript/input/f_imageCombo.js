new f_class("f_imageCombo",{extend:f_imageButton,aspects:[fa_subMenu,fa_itemsWrapper],members:{f_imageCombo:function(){var e=this
e.f_super(arguments)
e.Z("keydown",e._fv)},_fv:function(e){var r=this,n=e.f_getJsEvent().keyCode,t
if(n!=40&&n!=38)return!0
e.f_preventDefault()
if(t=r.f_getSubMenuById("#popup"))t.f_open(e.f_getJsEvent(),{component:r,position:2},n==40?1:-1)
return!1},hg:function(n){var e=this,t
if(!e._f)e.f_setFocus()
if(e.f_isReadOnly()||e.f_isDisabled())return!1
if(f_popup.tl(e,n.f_getJsEvent()))return!1
if(n.f_getItem())return!0
if(!(t=e.f_getSubMenuById("#popup")))return!0
t.f_open(n,{component:e,position:2})
return!1},a_:function(){return this},rp:function(){return this.f_getSubMenuById("#popup")},yy:function(){return!1}}});