new f_aspect("fa_pagedComponent",{extend:[fa_filterProperties],statics:{w:function(r,e){var f=fa_pagedComponent,i=f.L,n,t
if(!i)f.L=i={}
r=fa_namingContainer.$(e,r)
if(!(n=i[r]))i[r]=n=[]
n.push(e)
t=e.ownerDocument.getElementById(r)
if(t&&f_class.w(t)){try{e.om(t)}catch(o){f_core.Error(f,"RegisterPager: Call of fa_pagedComponentInitialized() throws an exception ! (pager="+e.id+")",o)}return}},S:function(n){var e=fa_pagedComponent.L,t
if(!e)return
for(t in e)e[t].it(n);},Finalizer:function(){var e
fa_pagedComponent.L=e}},members:{fa_pagedComponent:function(){var t=f_core,e=this
e._n4=t.Q(e,"asyncRender")
e._r9=t.Q(e,"interactiveShow")
if(e._r9&&!e.f_isVisible())e.f_getClass().f_getClassLoader().pE(e)
e._b=t.te(e,"rows",0)
e._M=t.te(e,"first",0)
e._r2=t.Q(e,"paged",!0)
e._v=t.te(e,"rowCount",-1)
if(e._v<0)e._n7=e._M+e._b},ns:function(){var r=fa_pagedComponent,o,f=this,i=r.L,e,t,n
if(!i)return
if(!(e=i[f.id]))return
for(t=0;t<e.length;t++){if(!(n=e[t]))continue
try{n.om(f)}catch(a){f_core.Error(r,"f_performPagedComponentInitialized: Call of fa_pagedComponentInitialized() throws an exception ! (pager="+n.id+")",a)
e[t]=o}}},Cf:function(){this._r9=!0},f_getFirst:function(){return this._M},f_getMaxRows:function(){return this._n7},f_getRows:function(){return this._b},f_getRowCount:function(){return this._v},f_isPaged:function(){return this._r2}}});