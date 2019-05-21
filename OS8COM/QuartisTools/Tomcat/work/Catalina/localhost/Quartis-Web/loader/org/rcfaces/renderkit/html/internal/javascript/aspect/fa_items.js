new f_aspect("fa_items",{extend:[fa_itemClientDatas],statics:{AS_PUSH_BUTTON:1,AS_CHECK_BUTTON:2,AS_DROP_DOWN_MENU:4,AS_RADIO_BUTTON:8,AS_SUBMIT_BUTTON:16,AS_RESET_BUTTON:32,AS_SEPARATOR:64},members:{fa_items:function(){},f_finalize:function(){var n,e=this,t
e._cd=e._8g=e._a0=e._4a=e._cg=n
if(t=e._e8){e._e8=n
e.lt(t)}},is:function(i,n){var f=this,t=i._e8,r,e
if(!t)i._e8=t=[]
t.push(n)
if(r=n._n){if(!(e=f._cg))f._cg=e={}
e[r]=n}},sg:function(e,f,r,i,n){var t=this
if(f)t.f_setItemImageURL(e,f)
if(r)t.f_setItemDisabledImageURL(e,r)
if(i)t.f_setItemHoverImageURL(e,i)
if(n)t.f_setItemSelectedImageURL(e,n)},f_setItemToolTip:function(e,n){var t=this
if(typeof e!="object")e=t.f_getItemByValue(e,!0)
e.title=n
if(!t.tr)return
t.fa_updateItemStyle(e)},f_getItemToolTip:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e.title},f_setItemImageURL:function(e,n){var t=this
if(typeof e!="object")e=t.f_getItemByValue(e,!0)
e._h=n
if(n)f_imageRepository.PrepareImage(n)
if(!t.tr)return
t.fa_updateItemStyle(e)},f_getItemImageURL:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._h},f_setItemDisabledImageURL:function(e,n){var t=this
if(typeof e!="object")e=t.f_getItemByValue(e,!0)
e._e0=n
if(n)f_imageRepository.PrepareImage(n)
if(!t.tr)return
t.fa_updateItemStyle(e)},f_getItemDisabledImageURL:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._e0},f_setItemHoverImageURL:function(e,n){var t=this
if(typeof e!="object")e=t.f_getItemByValue(e,!0)
e._5t=n
if(n)f_imageRepository.PrepareImage(n)
if(!t.tr)return
t.fa_updateItemStyle(e)},f_getItemHoverImageURL:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._5t},f_setItemSelectedImageURL:function(e,n){var t=this
if(typeof e!="object")e=t.f_getItemByValue(e,!0)
e._2e=n
if(n)f_imageRepository.PrepareImage(n)
if(!t.tr)return
t.fa_updateItemStyle(e)},f_getItemSelectedImageURL:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._2e},f_isItemDisabled:function(e){if(e===null||typeof e!="object")e=this.f_getItemByValue(e,!0)
return!!e._s},f_setItemDisabled:function(e,n){var i,t=this,r
if(e===null||typeof e!="object")e=t.f_getItemByValue(e,!0)
if(n===i)n=!0;else n=!!n
r=!!e._s
e._s=!!n
if(r==e._s)return
if(!t.tr)return
t.fa_updateItemStyle(e)
if(e.id)if(e._s){if(t._4a)delete t._4a[e.id]
if(!t._a0)t._a0={}
t._a0[e.id]=!0}else{if(t._a0)delete t._a0[e.id]
if(!t._4a)t._4a={}
t._4a[e.id]=!0}},f_isItemVisible:function(e){if(e===null||typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._7f===!1?!1:!0},f_setItemVisible:function(t,e){var i,r=this,n
if(t===null||typeof t!="object")t=r.f_getItemByValue(t,!0)
if(e===i)e=!0;else e=e===!1?!1:!0
n=t._7f===!1?!1:!0
t._7f=e
if(e==n)return
if(!r.tr)return
r.fa_updateItemStyle(t)
r.cg("visible",e,n)},f_isItemChecked:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return!!e._e4},f_setItemChecked:function(t,n){var c,e=this,o,a,f,r,i
if(typeof t!="object")t=e.f_getItemByValue(t,!0)
if(n===c)n=!0;else n=!!n
if(t._8i&&n){o=e.f_getCheckedItemInGroup(t)
if(o&&e.f_isItemChecked(o))e.f_setItemChecked(o,!1)}a=!!t._e4
if(n==a)return
t._e4=n
if(!e.tr)return
if(f=e.f_getItemValue(t)){r=e._cd
i=e._8g
if(n){if(!i||!i.it(f)){if(!r)e._cd=r=[]
r.fr(f)}}else{if(!r||!r.it(f)){if(!i)e._8g=i=[]
i.fr(f)}}}e.fa_updateItemStyle(t)
e.f_fireEvent("check",null,t,t._e4)},f_getItemByValue:function(r){var n=null,t=this._cg,e
return!t?n:((e=t[r])?e:n)},f_getItemValue:function(e){return e._n},f_getItemAccessKey:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._3e},Dp:function(t,e){t._3e=e},f_getItemStyleClass:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._G},f_setItemStyleClass:function(e,n){var t=this
if(typeof e!="object")e=t.f_getItemByValue(e,!0)
if(e._G==n)return
e._G=n
if(!t.tr)return
t.fa_updateItemStyle(e)},f_getItemGroupName:function(e){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
return e._8i},f_setItemGroupName:function(e,t){if(typeof e!="object")e=this.f_getItemByValue(e,!0)
this.oE(e._8i,t,e)
e._8i=t},ma:function(){var e=this,i,n,t,r
if(i=e._cd)e.P("checkedItems",i,!0)
if(n=e._8g)e.P("uncheckedItems",n,!0)
if(t=e._a0)e.P("disabledItems",t,!0)
if(r=e._4a)e.P("enabledItems",r,!0)},f_listItemChildren:function(e){return e._e8},f_listVisibleItemChildren:function(i){var r=[],n=i._e8,e,t
if(!n||!n.length)return r
for(e=0;e<n.length;e++){t=n[e]
if(!this.f_isItemVisible(t))continue
r.push(t)}return r},f_hasItemChildren:function(t){var e=t._e8
return!(!e||!e.length)},f_getInputType:function(e){return e._e5},f_hasVisibleItemChildren:function(n){var t=n._e8,e
if(!t||!t.length)return!1
for(e=0;e<t.length;e++){if(this.f_isItemVisible(t[e])==!1)continue
return!0}return!1}}});