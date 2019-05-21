new f_class("f_image",{extend:f_filtredComponent,members:{f_image:function(){var e=this
e.f_super(arguments)
e._h=f_core.D(e,"blank")?null:e.src},f_finalize:function(){this.f_super(arguments)},f_getImageURL:function(){return this._h},f_setImageURL:function(n){var t=this,e
t._h=n
if(!(e=n))e=f_env.GetBlankImageURL()
t.src=e
t.P("imageURL",n)},Dd:function(n,t){var e=this
e.width=n
e.height=t
e.P("width",n)
e.P("height",t)},f_getServiceId:function(){return"image.request"}}});