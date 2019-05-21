new f_class("f_progressIndicator",{extend:f_component,aspects:[fa_progressIndicator],members:{f_progressIndicator:function(){var t=this,e,n
t.f_super(arguments)
t._o7=e=t.f_findComponent("progressBar")
e.yu()
e.f_setValue(-1)
e.f_setMin(0)
e.f_setMax(1000)
t._i=n=t.f_findComponent("label")
n.yu()},f_finalize:function(){var t,e=this
e._o7=e._i=t
e.f_super(arguments)},f_getProgressBar:function(){return this._o7},hl:function(r,e){var t=this,n
if(n=t._i){if(!e)e=" "
if(e!=t._0b){t._0b=e
n.f_setText(e)}}},nm:function(){if(this.f_getStatus()!=18)return
this.f_close()}}});