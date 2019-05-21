new f_class("f_progressIndicatorMonitor",{extend:f_progressMonitor,members:{f_progressIndicatorMonitor:function(e){this.f_super(arguments)
this._ft=e},f_finalize:function(){var e
this._ft=e
this.f_super(arguments)},f_beginTask:function(n,t){var e=this
e._hw=t
e._pe=0
e.__n=t==-1
e._ft.f_setIndeterminate(e.__n)
e._ft.c_(-1,n,null,!0)},f_done:function(){this._ft.c_(1000,null,null,!0,!0)},ch:function(i){var t=this,e,n,r
if(!i||t.__n)return
e=t._pe
n=t._hw
e+=i
if(e>n)e=n
if(e<0)e=0
t._pe=e
r=Math.floor(e/n*1000)
if(t._ft.f_getValue()<r)t._ft.c_(r)},f_setTaskName:function(e){var t
this._ft.c_(t,e)},f_subTask:function(t){var e
this._ft.c_(e,e,t)}}});