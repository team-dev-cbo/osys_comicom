new f_aspect("fa_images",{members:{ug:function(){var o=f_imageRepository,n=f_core,c,e=this,t,a,f,i,r
if(e._h!==c)return
t=e.sb()
if(a=n.D(e,"imageURL")){if(e.gt&&e.gt())e._e0=t;else if(e.gr&&e.gr())e._2e=t
t=a
o.PrepareImage(t)}else if(e.gt&&e.gt())e._e0=t;else if(e.gr&&e.gr())e._2e=t
if(t===c)t=null
e._h=t
if(!e._e0&&(f=n.D(e,"disabledImageURL"))){e._e0=f
o.PrepareImage(f)}if(!e._2e&&(i=n.D(e,"selectedImageURL"))){e._2e=i
o.PrepareImage(i)}if(r=n.D(e,"hoverImageURL")){e._5t=r
o.PrepareImage(r)}},f_getImageURL:function(){this.ug()
return this._h},f_getHoverImageURL:function(){this.ug()
return this._5t},f_getSelectedImageURL:function(){this.ug()
return this._2e},f_getDisabledImageURL:function(){this.ug()
return this._e0},f_setImageURL:function(t){var e=this,n
if(e.f_getImageURL()==t)return!1
e._h=t
f_imageRepository.PrepareImage(t)
if(!e.tr)return!0
n="imageURL"
e.P(n,t)
e.rg(n,t)
return!0},f_setSelectedImageURL:function(t){var e=this,n
if(e.f_getSelectedImageURL()==t)return!1
e._2e=t
f_imageRepository.PrepareImage(t)
if(!e.tr)return!0
n="selectedImageURL"
e.P(n,t)
e.rg(n,t)
return!0},f_setDisabledImageURL:function(t){var e=this,n
if(e.f_getDisabledImageURL()==t)return!1
e._e0=t
f_imageRepository.PrepareImage(t)
if(!e.tr)return!0
n="disabledImageURL"
e.P(n,t)
e.rg(n,t)
return!0},f_setHoverImageURL:function(t){var e=this,n
if(e.f_getHoverImageURL()==t)return!1
e._5t=t
f_imageRepository.PrepareImage(t)
if(!e.tr)return!0
n="hoverImageURL"
e.P(n,t)
e.rg(n,t)
return!0},Cm:function(){var t,e=this
return e._h!==t?e._5t!==t:f_core.D(e,"hoverImageURL")!=null}}});