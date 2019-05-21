new f_class("f_imagePagerButton",{extend:f_imageButton,aspects:[fa_pager],members:{f_imagePagerButton:function(){var t=f_core,e=this,n
e.f_super(arguments)
e._B=t.D(e,"type")
n=t.D(e,"for")
e._Cm=t.Q(e,"hideIfDisabled",!1)
if(n)e._9r=n;else t.Error(f_imagePagerButton,"f_imagePagerButton: 'for' attribute is not defined !")},f_finalize:function(){var e
this._6s=e
this.f_super(arguments)},om:function(o){var f=this,n,t,r,e,a,i
f._6s=o
n=!0
t=f._B
r=o.f_getRows()
e=o.f_getRowCount()
if(o&&t&&e&&r){t=t.toLowerCase()
a=o.f_getFirst()
switch(t){case"first":case"prev":n=a<1
break;case"next":case"last":n=e>0&&a+r>=e
break;default:i=parseInt(t,10)
if(!isNaN(i)&&a/r!=i)n=e>=0&&i*r>e;}}f.f_setDisabled(n)
if(!f.tr&&!n)f._U()},fa_updateDisabled:function(t){var e=this
e.f_super(arguments,t)
if(e._Cm)e.f_setVisible(e.f_isDisabled())},hg:function(){var i=this,a,n,o,t,e,r,f
if(!i._f)i.f_setFocus()
if(i.f_isReadOnly()||i.f_isDisabled())return!1
if(!(a=i._B))return!1
if(!(n=i._6s))return!1
o=n.f_getFirst()
t=n.f_getRows()
e=-1
switch(a.toLowerCase()){case"first":e=0
break;case"prev":e=o-t
if(e<0)e=0
break;case"next":e=o+t
break;case"last":r=n.f_getMaxRows()
f=n.f_getRowCount()
if(f>0)e=f-(f+t-1)%t-1;else if(o+t==r)e=r;else e=r-(r+t-1)%t-1
break;}if(e>=0)n.f_setFirst(e)
return!1},ef:function(){var t=this,e
t.f_super(arguments)
if(e=t._9r)fa_pagedComponent.w(e,t)}}});