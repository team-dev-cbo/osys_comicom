new f_class("f_timerEffect",{extend:f_effect,statics:{w:function(t){var f,e=t._a9,n=t._cc,r=t.f_getStep(),i=t._u
if(n!=e)e+=n>e?r:-r
if(e>1)e=1;else if(e<0)e=0
t._a9=e
if(e==n){window.clearInterval(t._D)
t._D=f}t.f_performTick(i,e,n)}},members:{f_finalize:function(){var n,e=this,t
if(t=e._D){e._D=n
window.clearInterval(t)}e.f_super(arguments)},f_getStepMs:function(){return 100},f_getStep:function(){return 0.1},f_performTick:function(){},f_wakeUpTimer:function(){var n=f_timerEffect,e=this,t
if(e._D)return
t=e
e._D=window.setInterval(function(){n.w.call(n,t)},e.f_getStepMs())}}});