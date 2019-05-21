new f_aspect("fa_screenAutoScroll",{extend:[fa_autoScroll],members:{p_:function(){return!0},tp:function(c,l,t){var a=f_core,s=null,u=this,e=a.ln(s,c.ownerDocument),n=a.GetViewSize(s,c.ownerDocument),o=a.GetDocumentSize(s,c.ownerDocument),i=e.x,r=e.y,f=32
if(e.y&&t.y-e.y<f){r=t.y-f
if(r<0)r=0
t.y+=r-e.y}else if(o.height>n.height&&t.y>n.height+e.y-f){r=t.y+f-n.height
if(r>o.height-n.height)r=o.height-n.height
t.y+=r-e.y}if(e.x&&t.x-e.x<f){i=t.x-f
if(i<0)i=0
t.x-=e.x-i}else if(o.width>n.width&&t.x>n.width+e.x-f){i=t.x+f-n.width
if(i>o.width-n.width)i=o.width-n.width
t.x+=i-e.x}if(i!=e.x||r!=e.y){window.scrollTo(i,r)
if(u.fa_autoScrollPerformed)u.fa_autoScrollPerformed()}}}});