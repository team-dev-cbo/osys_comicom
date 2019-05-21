new f_class("f_progressMonitorDialog",{extend:f_dialog,aspects:[fa_progressIndicator],members:{f_progressMonitorDialog:function(){var e=f_shell
this.f_super(arguments,e.PRIMARY_MODAL_STYLE|e.COPY_STYLESHEET)},f_finalize:function(){var t,e=this
e._5g=e._lt=t
e.f_super(arguments)},s_:function(){var t,e=this,i=f_core.rt(e),o,f,r,n
if(o=e._l3){e._l3=t
i.clearTimeout(o)}if(f=e.__h){e.__h=t
i.clearTimeout(f)}if(r=e._ls){e._ls=t
i.clearInterval(r)}e._v5=e._m2=e._1m=t
if(n=e._o7){e._o7=t
f_classLoader.Destroy(n)}e.f_super(arguments)},f_enableRemainingTime:function(){this._f8=1
this.hl()},fl:function(){return f_progressMonitorDialog.w},f_fillBody:function(s){var e=f_core,o="&nbsp;",c="li",i="label",t=this,f=e.B(s,"ul",{className:"f_progressMonitorDialog_container"}),u=e.B(f,c,{className:"f_progressMonitorDialog_title"}),r,a,n
t._v5=e.B(u,i,{className:"f_progressMonitorDialog_titleText",innerHTML:o})
if(t._dp)e.nr(t._v5,t._dp)
r=e.B(f,c,{className:"f_progressMonitorDialog_body"})
t._m2=e.B(r,i,{className:"f_progressMonitorDialog_bodyText1",innerHTML:o})
t._1m=e.B(r,i,{className:"f_progressMonitorDialog_bodyText2",innerHTML:o})
a=e.B(f,c,{className:"f_shellDecorator_body_buttons"})
t._w1=e.B(a,"input",{type:"button",className:"f_progressMonitorDialog_cancel",value:"Annuler"})
t._o7=n=f_progressBar.Create(r,355,16,"f_progressMonitorDialog_bar")
n.f_setValue(-1)
n.f_setMin(0)
n.f_setMax(1000)
t.f_super(arguments,s)},f_getProgressBar:function(){return this._o7},f_setProgressTitle:function(e){this._dp=e
var t
if(t=this._v5)if(!e)t.innerHTML="&nbsp;";else f_core.nr(t,e)},hl:function(r,s,o){var g=f_core,d=Math.floor,v="&nbsp;",l,e=this,a=e._m2,n,u,h,t,i,f,c
if(a&&s!==l&&s!=e._fC){e._fC=s
if(!s)a.innerHTML=v;else g.nr(a,s)}if(!(a=e._1m))return
if(e._f8){if(r===l||e._5i==r)return
n=f_resourceBundle.Get(f_progressMonitorDialog)
u=new Date().getTime()
if(u-e.__C<1000)return
e.__C=u
e._5i=r
if(r>0&&!e._ay){e._yt=r
e._ay=u}o=n.f_get("TIME_COMPUTING")
if(e._f8==2&&r>e._yt){h=new Date().getTime()
t=h-e._ay
if(r>1000)r=1000
t/=r-e._yt
t*=1000-r
t=d(t/1000)
if(t<1)o=n.f_get("TIME_ZERO");else{i={}
f=!0
if(t>59){c=d(t/60)
t-=c*60
if(c>1){i.minutes=n.f_formatParams("TIME_MINUTES",{minutes:c})
f=!0}else{i.minutes=n.f_get("TIME_MINUTE")
f=!1}}if(t>1){i.seconds=n.f_formatParams("TIME_SECONDS",{seconds:t})
f=!0}else if(t==1){i.seconds=n.f_get("TIME_SECOND")
if(!f)f=!0;else f=!1}if(f)i.left=n.f_get("TIME_MANY_LEFT");else i.left=n.f_get("TIME_ONE_LEFT")
o=n.f_formatParams("TIME_REMAINING",i)}}}else if(o===l)return
if(e._Er==o)return
e._Er=o
if(!o)a.innerHTML=v;else g.nr(a,o)
if(e._f8)e.f_setTitle(o)},f_run:function(f,o){var i,e=this,r,n,t
if(r=e._lt)f_classLoader.Destroy(r)
e._lt=r=f_progressIndicatorMonitor.f_newInstance(e)
e._5g=f
e._tD=o
e.f_open()
if(e._f8==1){n=f_core.rt(e)
t=e
e._l3=n.setTimeout(function(){t._l3=i
if(t._f8!=1)return
t._f8=2
t.hl()
t._ls=n.setInterval(function(){t.hl()},2000)},2000)}},yn:function(){var r,t=this,e,n
t.f_super(arguments)
t._w1.disabled=!t._tD
e=t
n=f_core.rt(t)
n.setTimeout(function(){var f=e._5g,i
if(!f)return
e._5g=r
i=e._lt
e._lt=r
f.call(n,i)},10)},nm:function(){var f,e=this,t,r,i,n
if(e._f8){t=f_core.rt(e)
e._f8=3
if(r=e._l3)t.clearTimeout(r)
if(i=e._ls){e._ls=f
t.clearInterval(i)}n=e
e.__h=t.setTimeout(function(){n.__h=f
n.f_close()},f_progressIndicatorMonitor._Du)
return}e.f_close()},toString:function(){return"[f_progressMonitorDialog]"}},statics:{REMAINING_TIME:1,w:{width:400,height:164,dialogPriority:0,styleClass:"f_progressMonitorDialog",backgroundMode:"light"},Create:function(n,r,t){var e
if(!t)t=document
e=t.createElement(f_core._m+":progressMonitorDialog")
t.body.appendChild(e)
e=f_progressMonitorDialog.me(e)
if(n){e.f_setTitle(n)
e.f_setProgressTitle(n)}if(r&1)e.f_enableRemainingTime()
return e}}});