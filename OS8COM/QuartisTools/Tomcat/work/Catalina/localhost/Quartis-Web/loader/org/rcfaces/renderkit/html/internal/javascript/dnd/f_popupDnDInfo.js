new f_class("f_popupDnDInfo",{extend:f_abstractElementDnDInfo,statics:{w:function(){f_dragAndDropEngine.RegisterDragAndDropPopup("popup",function(e){return f_popupDnDInfo.f_newInstance(e)})}},members:{f_popupDnDInfo:function(e){this.f_super(arguments,e)
this.td(16,16)},f_finalize:function(){var t,e=this
e._wm=e._p0=e._pv=t
e.f_super(arguments)},f_start:function(){this._va=!1
this.f_super(arguments)},da:function(t){var n=f_core,r="LABEL",e
e=this
e._wm=n.B(t,"img",{className:"f_popupDnDInfo_effect",src:f_env.GetBlankImageURL(),width:16,height:16})
e._p0=n.B(t,r,{className:"f_popupDnDInfo_action"})
e._pv=n.B(t,r,{className:"f_popupDnDInfo_info"})},f_updateTarget:function(l,f,o,c,u,s){var h=f_core,a="none",g="inline",e,n,r,i,t
e=this
e.f_super(arguments,l,f,o,c,u,s)
n=e._p0
r=e._pv
if(!o){n.style.display=r.style.display=a
e.pv(!1,f)
return}i=!1
if(!(t=e.Ed(l,f,o,c,u,s)))n.style.display=a;else{n.style.display=g
h.nr(n,t)
i=!0}if(!(t=e.bw(l,f,o,c,u,s)))r.style.display=a;else{r.style.display=g
h.nr(r,t)
i=!0}e.pv(i,f)},pv:function(t,n){var e=this
if(e._va===t)return
e._va=t
e.rd(n)},ew:function(n){var t=this,e=t.f_super(arguments,n)
if(t._va)e+=" f_popupDnDInfo_border"
return e},Ed:function(a,i,o,r,f,n){var e=f_dndEvent,t
if(t=this.ah("dnd.target.action",!1,o,r,f,n))return t
switch(i){case e.COPY_DND_EFFECT:return"Copier sur";case e.MOVE_DND_EFFECT:return"Déplacer vers";case e.LINK_DND_EFFECT:return"Créer le lien dans";}return null},bw:function(f,i,r,t,n,e){return this.ah("dnd.target.info",!0,r,t,n,e)},lv:function(){return"f_popupDnDInfo"}}});