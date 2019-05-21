new f_class("f_shell",{extend:f_object,aspects:[fa_eventTarget],statics:{w:{init:"init",close:"close",user:"user"},CLOSE_BUTTON_EVENT:"closeButton",GREYED_BACKGROUND_MODE:"greyed",LIGHT_GREYED_BACKGROUND_MODE:"light",TRANSPARENT_BACKGROUND_MODE:"transparent",OPAQUE_BACKGROUND_MODE:"opaque",MOVE_STYLE:1<<3,RESIZE_STYLE:1<<4,TITLE_STYLE:1<<5,CLOSE_STYLE:1<<6,MIN_STYLE:1<<7,H_SCROLL_STYLE:1<<8,V_SCROLL_STYLE:1<<9,MAX_STYLE:1<<10,HIDE_SCREEN_STYLE:1<<11,COPY_STYLESHEET:1<<12,FRAME_ELEMENT:1<<13,TRANSPARENT:1<<14,MODELESS_STYLE:0,PRIMARY_MODAL_STYLE:1<<15,APPLICATION_MODAL_STYLE:1<<16,LIGHT_CONTAINER_STYLE:1<<30,S:0,CREATED_STATUS:0,OPENING_STATUS:16,OPENED_STATUS:18,CLOSING_STATUS:32,ABOUT_TO_CLOSE_STATUS:33,CLOSED_STATUS:36,DESTROYING_STATUS:48,DESTROYED_STATUS:49},members:{__o:0,_0u:0,_4d:!0,f_shell:function(o,c,a){var t=f_shell,n=f_core,e=this,f,r,i
e.f_super(arguments)
e._T="shell_"+t.S++
e._nr=o?o:0
e.__m=e._nr&t.HIDE_BACKGROUND_STYLE?"greyed":null
e._C_=c
e._h2=a
e._cr=300
e._yl=100
e._7r=f_shellManager.Get()
if(e.nodeType==1){if(f=n.D(e,"events"))e.au(t.w,f)
if(r=n.D(e,"shellDecorator"))e._sp=r
i=n.Q(e,"closable")
if(i===!0)e._nr|=t.CLOSE_STYLE}},f_finalize:function(){var n,e=this,t=e._0u
if(t!=0&&t!=49){if(t<36)e.s_()
e._0u=48
e.ds()
e._0u=49}e._C_=e._h2=e._1d=e._7r=e._3i=n
e.f_super(arguments)},f_getId:function(){return this._T},f_getPriority:function(){return this.__o},f_setPriority:function(e){this.__o=e},f_getStyle:function(){return this._nr},f_getBackgroundMode:function(){return this.__m},f_setBackgroundMode:function(e){this.__m=e},f_getHeight:function(){return this._yl},f_setHeight:function(e){this._yl=e},f_getWidth:function(){return this._cr},f_setWidth:function(e){this._cr=e},yn:function(){var s=f_core,u=Math.round,n=this,i=n.f_getWidth(),r,c,e,t,o,f,a
if(!i||i<1){i=300
n.f_setWidth(i)}r=n.f_getHeight()
if(!r||r<1){r=100
n.f_setHeight(r)}c=n._7r.f_getShellDecorator(n)
e=c.f_computeTrim(i,r)
t=s.GetViewSize()
o=0
if(t.width>e.width)o=u((t.width-e.width)/2);else e.width=t.width
f=0
if(t.height>e.height)f=u((t.height-e.height)/2);else e.height=t.height
a=s.ln()
o+=a.x
f+=a.y
n._7r.g_(n,o,f,e.width,e.height)},f_fillBody:function(e){this._3i=e},Db:function(){this._3i=null},f_setFocus:function(o){var i=f_core,f=this,e,r,n,t
if(!f._3i)return
e=null
if(o){r=i.es(f._3i,"input")
for(n=0;n<r.length;n++){t=r[n]
if(!t.type)continue
if(t.type.toLowerCase()!="submit")continue
e=t
break}}if(!e)e=i.de(f._3i)
if(e)i.SetFocus(e,!1)},f_open:function(t){var e=this
e._h2=t
e._7r.iy(e)},f_close:function(f){var r=window,e=this,n,t
if(e.f_getStatus()!=18)return
e._1d=f
e.fs(32)
n=e
t=e._7r
r.setTimeout(function(){if(r._rcfacesExiting)return!1
try{t.mb(n)}catch(i){f_core.Error(f_shell,"f_close.timer: Can not close '"+n+"'",i)}finally{t=null}},0)},bv:function(){},Eb:function(){},s_:function(){this.fs(33)},ds:function(){var r=null,e=this,t,n
e.fs(49)
t=e._1d
e.f_fireEvent("close",r,r,t,r,r)
n=e._h2
if(typeof n=="function")try{if(n.call(e,t)==!1)e.f_cancelNextShell()}catch(i){f_core.Error(f_shell,"f_shell.f_close: Exception when calling return value '"+t+"'.",i)}else if(t===!1)e.f_cancelNextShell()},f_cancelNextShell:function(){this._4d=!1},f_isNextShellCanceled:function(){return this._4d},f_getTitle:function(){return this._L},f_setTitle:function(n){var i=f_shell.TITLE_STYLE,e=this,r,t
if(n==e._L)return
r=!1
if(n&&!(e._nr&i)){e._nr|=i
r=!0}e._L=n
t=e.fp()
if(t.hb(e)==!1)return
if(r)t.ip(e,f_shellDecorator.STYLE_DECORATOR,e._nr)
t.ip(e,"title",n)},Eh:function(t){var e
if(e=this.f_getTitle())t.np("title",e)},f_setShellDecorator:function(e){this._7r.f_setShellDecorator(this,e)},fp:function(){return this._7r},f_getStyleClass:function(){return this._G},f_setStyleClass:function(e){this._G=e},f_getStatus:function(){return this._0u},fs:function(e){this._0u=e},f_getShellDecoratorName:function(){return this._sp},f_setShellDecoratorName:function(e){this._sp=e},_ty:function(){return"[f_shell id="+this._T+" styleClass='"+this._G+"']"}}});