new f_class("f_spinner",{extend:f_textEntry,aspects:[fa_spinner],members:{f_spinner:function(){var e=this
e.f_super(arguments)
e._x=f_core.GetElementByClientId(e.id+"::input")},vl:function(c){var s=parseFloat,o="number",t,f,i,r,e,a,n
t=this
if(t.f_isReadOnly())return
f=t.f_getValue()
i=t.f_getMaximum()
r=t.f_getMinimum()
if(f==""){if(c>0){if(typeof i==o)t.f_setValue(i)
return}if(typeof r==o)t.f_setValue(r)
return}if(typeof f!=o)f=s(t.f_getText())
if(isNaN(f))return
e=f
if(!(a=t.f_getStep()))e+=c;else if(a.charAt(0)=="%"){e=Math.floor(e)
n=s(a.substring(1))
if(e%n==0)e+=c*n;else e+=((c>0)?n:0)-e%n}else{n=s(a)
if(!isNaN(n))e+=c*n}if(typeof i==o&&i<e)if(t._gm&&typeof r==o)e=r;else e=i
if(typeof r==o&&r>e)if(t._gm&&typeof i==o)e=i;else e=r
t.f_setValue(e)}}});