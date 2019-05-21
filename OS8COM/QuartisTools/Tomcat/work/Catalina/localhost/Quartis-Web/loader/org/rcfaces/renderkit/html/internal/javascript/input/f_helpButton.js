new f_class("f_helpButton",{extend:f_imageButton,statics:{w:"/helpButton/helpButton.gif",S:"/helpButton/helpButtonHover.gif"},members:{f_helpButton:function(){var i=f_env,o=f_imageRepository,f=f_helpButton,r=this,n,e,t
r.f_super(arguments)
n=r._e7
if(n&&!n.src){if(!(e=i.Get("HELPBUTTON_IMAGE_URL")))e=i.M()+f.w
o.PrepareImage(e)
n.src=e
r.f_setImageURL(e)
if(!(t=i.Get("HELPBUTTON_HOVER_URL")))t=i.M()+f.S
o.PrepareImage(t)
r.f_setHoverImageURL(t)}r.f_addEventListener("selection",function(){f_help.et(this)
return!1})}}});