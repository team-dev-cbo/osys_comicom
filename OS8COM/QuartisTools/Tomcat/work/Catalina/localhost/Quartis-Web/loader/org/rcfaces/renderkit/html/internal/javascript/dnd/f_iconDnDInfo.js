new f_class("f_iconDnDInfo",{extend:f_abstractElementDnDInfo,statics:{w:function(){f_dragAndDropEngine.RegisterDragAndDropPopup("icon",function(e){return f_iconDnDInfo.f_newInstance(e)})}},members:{f_iconDnDInfo:function(t){var e=this
e.f_super(arguments,t)
e._c7=e._3a=32},f_finalize:function(){this.f_super(arguments)},f_start:function(){var l=parseInt,e=this,t,a,s,c,o,r,f,u,i,n
e.f_super(arguments)
t=e.cd()
a=e.f_getDragAndDropEngine()
s=a.f_getSourceAdditionnalInformations()
c=a.f_getSourceItem()
o=a.f_getSourceItemValue()
r=a.f_getSourceComponent()
f=e.ah("dnd.source.image",!1,r,c,o,s)
if(!f&&r.f_getItemImage)f=r.f_getItemImage(o)
if(!f){t.style.display="none"
return}if(t.src!=f)t.src=f
u=!1
if(!(i=e.ah("dnd.source.imageWidth",!1,r,c,o,s)))i=""
if(i&&e._c7!=i){e._c7=l(i)
t.width=e._c7
u=!0}if(!(n=e.ah("dnd.source.imageHeight",!1,r,c,o,s)))n=""
if(n&&e._3a!=n){e._3a=l(n)
t.height=e._3a
u=!0}if(u)e.td(-e._c7/2,-e._3a/2)
t.style.display="block"},cy:function(){return"img"},da:function(t){var e=this
t.style.display="none"
t.width=e._c7
t.height=e._3a
e.td(-e._c7/2,-e._3a/2)},lv:function(){return"f_iconDnDInfo"}}});