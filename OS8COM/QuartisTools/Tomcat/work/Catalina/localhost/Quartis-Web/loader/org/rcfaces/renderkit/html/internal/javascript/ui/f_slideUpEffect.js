new f_class("f_slideUpEffect",null,{Initializer:function(){f_effect.w("slideUp",this)}},{f_slideUpEffect:function(t,n){var e=this
e.f_super(arguments,t,n)
if(!t.offsetHeight)e._a9=0;else e._a9=1},f_performEffect:function(n){var e=this,t
e._cc=n?0:1
t=e._u
if(e._a9!=e._cc&&e._a9==0){t.style.display="block"
t.style.height="1px"}if(e._u6)e._u6(e._a9)
e.f_wakeUpTimer()},f_getStepMs:function(){return 50},f_getStep:function(){return 0.3},f_performTick:function(e,t){if(this._u6)this._u6(t)
if(t<0.0001){e.style.display="none"
return}if(t>0.9999){e.style.height="auto"
e.scrollTop=0
return}var r=e.scrollHeight,n=Math.floor(r*t)
e.style.height=n+"px"
e.scrollTop=r-n}},f_timerEffect);