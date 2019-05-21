new f_class("f_dataGridPopup",{extend:f_dataGrid,statics:{w:function(f,i){var r=arguments,e,t,n
for(e=2;e<r.length;e++){t=r[e]
try{if(!(n=i.getAttribute(t)))continue
f[t]=n}catch(o){}}},S:function(ce,m,b,u,ri){var ot=f_dataGridPopup,j=parseInt,e=f_core,f="px",en=":emptyDataMessage",rr="left",s="div",o=m._N,c=m.id+"::popup",fn="f_grid",t,i,C,z,E,h,r,n,d,g,T,W,k,R,v,tt,G,A,p,U,l,a
if(ri)fn+=" "+ri
t={id:c,role:"grid",className:fn}
t[e._m+":nc"]=!0
t[e._m+":asyncRender"]=t[e._m+":filtred"]="true"
t[e._m+":selectionCardinality"]=3
if(b){t.cssWidth=b+f
if(u)t.cssHeight=u+f}ot.w(t,m,e._m+":rows",e._m+":rowStyleClass",e._m+":paged",e._m+":headerVisible",e._m+en)
i=e.B(ce,s,t)
C=e.vo(i,rr,"right")
z=e.vo(i,"top","bottom")
b-=C
u-=z
E=e.Q(m,"headerVisible",!1)
h=0
for(r=0;r<o.length;r++){n=o[r]
if(n._C===!1)continue
d=n._cr
g=j(d)
if(d==g||d==g+f){h+=g
continue}h=-1
break}if(T=t[e._m+en])e.B(i,s,{id:c+"::emptyDataMessage",className:"f_grid_empty_data_message",textNode:T})
if(E){t={id:c+"::dataTitle_scroll",className:"f_grid_dataTitle_scroll",cssHeight:19+f}
W=e.B(i,s,t)
u-=19
if(e.K())u-=2
t={id:c+"::fixedHeader",className:"f_grid_fttitle"}
k=e.B(W,"ul",t)
for(r=0;r<o.length;r++){n=o[r]
if(n._C===!1)continue
t={className:"f_grid_tcell"}
if(n._cr)t.cssWidth=n._cr
R=e.B(k,"li",t)
if(!(v=n._ea))v=rr
tt=e.B(R,s,{className:"f_grid_stext"})
G=e.B(tt,s,{className:"f_grid_ttext",align:v})
if(n._l)e.nr(G,n._l)}}A=e.B(i,s,{id:c+"::dataBody_scroll",className:"f_grid_dataBody_scroll",cssWidth:b+f,cssHeight:u+f})
t={id:c+"::dataTable",className:"f_grid_table",cellPadding:0,cellSpacing:0}
if(h>=0)t.cssWidth=h+f
p=e.B(A,"table",t)
U=e.B(p,"colgroup")
for(r=0;r<o.length;r++){n=o[r]
if(n._C===!1)continue
t={}
if(l=n._cr){if(l==j(l))l+=f
t.cssWidth=l}e.B(U,"col",t)}e.B(p,"tbody")
fa_selectionManager.L(i,1,!0)
a=f_class.V(i,ot,[m])
a.ay.apply(a,o)
a.th()
a.sh()
return a}},members:{f_dataGridPopup:function(t){var e=this
e.f_super(arguments)
e._5p="popupGrid.update"
e._l8=t.id
e._sd=e._f=!0
e._ru=!1},cv:function(){var n,t=this,e
t.f_super(arguments)
if(!(e=t._ly))return
t._ly=n
t.ny(e)},ny:function(i){var f,e=this,r=e.ff(),t,n
if(!r.length)return
if(i>0)t=e.ti(r[0]);else if(i<0)t=e.ti(r[r.length-1])
if(t!==f){e.f_setSelection([t],!0)
n=e.f_getRowByValue(t)
if(n!==f||n!==null)e.ie(n,!0)}},Ef:function(e){this._ly=e},ey:function(e){var t
switch(t=e.keyCode){case 32:case 36:case 35:return!0;}return this.f_super(arguments,e)}}});