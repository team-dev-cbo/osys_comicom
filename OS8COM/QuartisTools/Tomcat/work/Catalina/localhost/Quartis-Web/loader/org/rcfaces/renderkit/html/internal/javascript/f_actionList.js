new f_class("f_actionList",{statics:{w:function(l,h,n,o,g,c){var u=" tagName=",a="evt.component=",r="\n",s=" cssClass=",e="*** Action Error: type="+h+" (action #"+l+")\n",t,f,i
e+="-- Target Object --------------------------\n"
if(!n)e+="link=NULL\n";else{if(n.tagName)e+="id="+n.id+u+n.tagName+s+n.className+r
if(n._R)e+="f_class="+n._R._d+r
if(n.toString)e+=n.toString();else e+=n}e+="\n-- Event Object --------------------------\n"
if(t=o.f_getComponent())if(t==n)e+="evt.component = *** target ***\n";else{if(t.tagName)e+="evt.component: id="+t.id+u+t.tagName+s+t.className+r
if(t._R)e+="evt.component: f_class="+t._R._d+r
if(t.toString)e+=a+t.toString()+r;else e+=a+t+r}if(o.f_getItem())e+=a+o.f_getItem()+r
if(o.f_getValue())e+=a+o.f_getValue()+r
e+="-- Exception Object -----------------------\n"
e+=c
f=g.toString().split(r)
if(f.length>15)e+="\n-- Function source - (first 15 lines) ---\n";else e+="\n-- Function source ----------------------\n"
for(i=0;i<f.length&&i<15;i++)e+=f[i]+r;f_core.Error(f_actionList,e,c)}},members:{f_actionList:function(e,t){this._t4=e
this._B=t},f_finalize:function(){var t,e=this
e._t4=e._8n=e._2a=t},f_getElement:function(){return this._t4},f_getType:function(){return this._B},f_addAction:function(){var t=this,e=t._8n
if(!e)t._8n=e=[]
f_core.io(e,arguments)},Dh:function(e){this.f_addAction.apply(this,e)},pm:function(){var i=arguments,f=this,r=f._8n,n=f._2a,e,t
if(!r&&!n)return
for(e=0;e<i.length;e++){t=i[e]
if(r&&r.it(t))continue
if(n)n.it(t)}},CD:function(e){this.pm.apply(this,e)},iC:function(){var e
this._8n=e},yD:function(){var e
this._2a=e},f_isEmpty:function(){var t=this,n=t._8n,e
if(n&&n.length)return!1
e=t._2a
return!(e&&e.length)},Em:function(){var t=this,e=t._2a
if(!e)t._2a=e=[]
e.unshift.apply(e,arguments)},Eu:function(u){var o=f_event,s=this,c=window,i=!0,r=s._2a,t=s._8n,a,n,e,f
if(!t||!t.length){if(!r||!r.length)return i
t=r}else if(r&&r.length)t=r.concat(t)
a=s._t4
for(n=0;n<t.length;n++){if(!(e=t[n]))continue
f=null
try{f=o.O(u)
if(typeof e=="string")t[n]=e=new c.Function("event",e)
i=e.call(a,u)}catch(l){if(c._rcfacesExiting)return!1
f_actionList.w(n,s._B,a,u,e,l)
i=!1}finally{if(!c._rcfacesExiting&&o&&o.O)o.O(f)}if(c._rcfacesExiting)return!1
if(i===!1)break}return i},toString:function(){return"[f_actionList type="+this._B+"]"}}});