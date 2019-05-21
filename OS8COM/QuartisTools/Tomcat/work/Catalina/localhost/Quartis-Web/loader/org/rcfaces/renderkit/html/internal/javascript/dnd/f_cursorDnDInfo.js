new f_class("f_cursorDnDInfo",{extend:f_dragAndDropInfo,statics:{w:function(){f_dragAndDropEngine.RegisterDragAndDropPopup("cursor",function(e){return f_cursorDnDInfo.f_newInstance(e)})}},members:{f_cursorDnDInfo:function(e){this.f_super(arguments,e)},f_finalize:function(){this.f_super(arguments)
this.sv(-1)},sv:function(n){var r,t=this,e
if(n==t._Df)return
t._Df=n
e=document.body
if(n<0){e.style.cursor=t._tv?t._tv:"auto"
return}if(t._tv===r)t._tv=e.style.cursor
if(n==f_dndEvent.NONE_DND_EFFECT)e.style.cursor="no-drop";else e.style.cursor="default"},f_updateTarget:function(i,e,f,t,r,n){this.sv(e)
this.f_super(arguments,i,e,f,t,r,n)},f_end:function(){this.sv(-1)
this.f_super(arguments)}}});