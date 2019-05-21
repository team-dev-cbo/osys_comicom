new f_class("f_subProgressMonitor",null,{SUPPRESS_SUBTASK_LABEL:2,PREPEND_MAIN_LABEL_TO_SUBTASK:4},{f_subProgressMonitor:function(r,n,t){var e=this
e.f_super(arguments)
e._7o=r
e._g3=n?n:0
e._nr=t?t:0
e._oh=e._ca=e._se=0
e._wa=!1},f_finalize:function(){var e
this._7o=e
this.f_super(arguments)},f_beginTask:function(n,t){var e=this
e._se++
if(e._se>1)return
e._ca=t<=0?0:e._g3/t
if(e._nr&4)e._de=n},f_done:function(){var e=this,t
if(!e._se||--e._se>0)return
t=e._g3-e._oh
if(t>0)e._7o.ch(t)
e.f_subTask("")
e._oh=0},ch:function(n){var e=this,t
if(e._wa||e._se!=1)return
t=e._ca*n
e._7o.ch(t)
e._oh+=t
if(e._oh>=e._g3)e._wa=!0},f_isCanceled:function(){return this._7o.f_isCanceled()},f_cancel:function(){this._7o.f_cancel()},f_setTaskName:function(e){this._7o.f_setTaskName(e)},f_subTask:function(n){var e=this,t
if(e._nr&2)return
t=n
if(e._nr&4&&e._de&&e._de.length>0)t=e._de+" "+t
e._7o.f_subTask(t)}},f_progressMonitor);