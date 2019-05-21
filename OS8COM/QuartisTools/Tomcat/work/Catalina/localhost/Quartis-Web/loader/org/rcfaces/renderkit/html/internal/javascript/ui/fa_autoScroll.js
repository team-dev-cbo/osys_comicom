new f_aspect("fa_autoScroll",{members:{f_finalize:function(){this.lg()},dc:function(){var r=f_core,t=this,o,e,i,n
if(o=t._h4)return
if(!(e=t.fa_getScrollableContainer()))return
if(!t.p_(e))return
i=r.fi(e)
n=t
t._h4=r.rt(e).setInterval(function(){if(window._rcfacesExiting)return!1
var f=n.fa_getLastMousePosition()
if(!f)return
try{n.tp(e,i,f)}catch(a){r.Error(fa_autoScroll,"fa_installAutoScroll.interval: throws exception",a)}},200)},lg:function(){var r,t=this,n=t._h4,e
if(!n)return
t._h4=r
e=t.fa_getScrollableContainer()
f_core.rt(e).clearInterval(n)},p_:function(e){return!(e.offsetWidth-e.clientWidth<2)},tp:function(t,o,f){var n=this,i=f.y-o.y,r=o.y+t.offsetHeight-f.y,e
if(t.offsetWidth-t.clientWidth>2)r-=t.offsetHeight-t.clientHeight
if(i>=0&&i<=20){e=t.scrollTop
if(e>0){e-=20
if(e<0)e=0
t.scrollTop=e
if(n.fa_autoScrollPerformed)n.fa_autoScrollPerformed()}}else if(r>=0&&r<=20){e=t.scrollTop
e+=20
if(e<0)e=0
t.scrollTop=e
if(n.fa_autoScrollPerformed)n.fa_autoScrollPerformed()}}}});