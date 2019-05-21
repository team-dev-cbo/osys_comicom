new f_aspect("fa_scrollPositions",{members:{fa_scrollPositions:function(){var t=f_core,e=this
e._mg=t.te(e,"hsp")
e._cw=t.te(e,"vsp")},ye:function(){var e=this,r=e.fu(),n,t
if(!r)return
if(n=e._mg)e.f_setHorizontalScrollPosition(n)
if(t=e._cw)e.f_setVerticalScrollPosition(t)},ir:{before:function(){var n=f_prop,t=this,e
if(e=t.fu()){t.P(n.w,e.scrollLeft)
t.P(n.S,e.scrollTop)}}},f_getVerticalScrollPosition:function(){var e=this.fu()
return!e?-1:e.scrollTop},f_setVerticalScrollPosition:function(e){var r=this,t=r.fu(),n
if(!t)return
t.scrollTop=e
if(n=r.ep())titlee.scrollTop=e},f_getHorizontalScrollPosition:function(){var e=this.fu()
return!e?-1:e.scrollLeft},f_setHorizontalScrollPosition:function(t){var r=this,n=r.fu(),e
if(!n)return
n.scrollLeft=t
if(e=r.mu())e.scrollLeft=t}}});