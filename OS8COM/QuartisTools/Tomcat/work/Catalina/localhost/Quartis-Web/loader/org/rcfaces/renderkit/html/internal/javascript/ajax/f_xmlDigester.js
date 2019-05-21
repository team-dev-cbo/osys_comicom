new f_class("f_xmlDigester",{extend:f_object,statics:{w:function(c,s,a){var e,r,o,i,t,n,f
if(s!=0)return
e=a[0]
if(r=a[1]){o=c.attributes
if((i=o.getNamedItem(r))&&((t=i.nodeValue)&&(t=window[t])))e=t}if(!e){f_core.Error(f_xmlDigester,"Can not get class to instanciate specified by rule.")
return}if(e.f_newInstance)n=e.f_newInstance();else{n={}
n.prototype=e.prototype}f=this
f.f_push(n)},S:function(v,d,l){var g=null,o,h,e,s,u,t,r,a,n,i,f,c
if(d!=0)return
o=this
h=o.f_peek()
for(e=0;e<l.length;){s=l[e++]
u=l[e++]
t=r=g
a=v.attributes
for(n=0;n<a.length;n++){i=a[n]
f=i.nodeName
c=i.nodeValue
if(f==s){t=c
continue}if(f==u){r=c
continue}}if(!t)continue
o._wc(h,t,r)}},L:function(t,e){if(e!=0)return},F:function(s,u,c){var n=f_xmlDigester,r=f_core,f=this,i=f.peek(0),e=f.peek(1),o=c[0],t
if(typeof e!="object"){r.Error(n,"Invalid parent in the stack ! ("+e+")")
return}t=e[o]
if(typeof t!="function"){r.Error(n,"Invalid methodName '"+o+"' for parent '"+e+"'")
return}try{t.call(e,i)}catch(a){r.Error(n,"Call of method '"+t+"' of object '"+e+"' with parameter '"+i+"' throws an exception !",a)
throw a}},V:function(s,u,c){var f=f_xmlDigester,o=f_core,r=this,e=r.peek(0),n=r.peek(1),i,t
if(i=c[0]){t=e[i]
if(typeof t!="function"){o.Error(f,"Invalid methodName '"+i+"' for object '"+e+"'.")
return}try{t.call(e,n)}catch(a){o.Error(f,"Call of method '"+t+"' of object '"+n+"' with parameter '"+e+"' throws an exception !",a)
throw a}return}r._wc(e,"parent",n)}},members:{f_xmlDigester:function(){var e=this
e.f_super(arguments)
e._c4=[]
e.__6={}},f_finalize:function(){var t,e=this
e._O=e._c4=e._g5=e.__6=t
e.f_super(arguments)},f_getRoot:function(){return this._g5},f_addObjectCreate:function(t,n,e){this._c2(t,f_xmlDigester.w,n,e)},f_addSetProperty:function(e){this._c2(e,f_xmlDigester.S,arguments)},f_addSetProperties:function(e){this._c2(e,f_xmlDigester.L,clazz)},f_addSetNextRule:function(e,t){this._c2(e,f_xmlDigester.F,t)},f_addSetTopRule:function(e,t){this._c2(e,f_xmlDigester.V,t)},f_addCallMethod:function(e,t,n){this._c2(e,f_xmlDigester._Dh,t,n)},_c2:function(r,i,n){var t=arguments,f,e
if(t.length>2)n=f_core.io(null,t,2)
e={_Dt:r,_8e:i,_9e:n}
this._c4.push(e)
this._O=f
return e},_pb:function(){var h=this,f,r,c,i,u,o,e,l,n,s,t,a
if(f=h._O)return!0
h._O=f={}
if(!(r=h._c4))return f
c={}
for(i=0;i<r.length;i++){u=r[i]
o=u._Dt
if(!(e=c[o])){e=f
l=o.split("/")
for(n=0;n<l.length;n++){s=l[n]
if(t=e[s]){e=t
continue}t={}
e[s]=e=t}c[o]=e}if(!(a=e._c4))e._c4=a=[]
a.push(u)}return f},_8p:function(t,n){var r=this,i=t.tagName,e
if(e=n[i])r._aw(t,e)
if(e=n["*"])r._aw(t,e)},_aw:function(c,u){var s=this,i=u._c4,e,t,n,r,a,o,f
for(e=0;e<i.length;e++){t=i[e]
n=t._8e
r=t._9e
n.call(s,c,0,r)}a=""
o=c.childNodes
if(o&&o.length)for(e=0;e<o.length;e++){f=chilren[e]
switch(f.nodeType){case 1:s._8p(f,u)
break;case 3:case 4:a+=f.data
break;}}for(e=0;e<i.length;e++){t=i[e]
n=t._8e
r=t._9e
n.call(s,c,1,r,a)}for(e=i.length;e>0;){t=i[--e]
n=t._8e
r=t._9e
n.call(s,c,2,r)}},f_popParams:function(){return this.f_pop("_--params--_")},f_pop:function(t){var e=this._5h(t)
return!e?null:e.pop()},f_pushParams:function(e){this.f_push("_--params--_",e)},f_push:function(i,t){var n="_--main--_",f=this,r=f.__6,e
if(!t)t=n
if(!(e=r[t]))r[t]=e=[]
e.push(i)
if(e.length==1&&t==n)f._g5=i},f_peekParams:function(e){return this.f_peek("_--params--_",e)},f_peek:function(e,r){var i,n=null,t=this._5h(r)
if(!t)return n
if(e===i)e=0
return e>=t.length?n:t[t.length-1-e]},_5h:function(e){if(!e)e="_--main--_"
return this.__6[e]},f_isEmpty:function(e){return this.f_getCount(e)==0},f_getCount:function(t){var e=this._5h(t)
return!e?0:e.length},f_parse:function(t){var r=this,i=t,e,n
if(typeof t=="string")i=f_xml.FromString(t)
e=r._pb()
n=i.rootElement
r._8p(n,e)
return r._g5},f_clear:function(){this.__6=[]},_wc:function(t,n,e){var f=f_xmlDigester,a=f_core,u="' throws exception (value='",s="')",c="' of object '",r="set"+n.charAt(0).toUpperCase()+n.substring(1),o=t[r]
if(typeof o=="function"){try{o.call(t,e)}catch(i){a.Error(f,"_setProperty: Setter '"+r+c+t+u+e+s)
throw i}return}try{t[n]=e}catch(i){a.Error(f,"_setProperty: Set field '"+r+c+t+"' with value '"+e+u+e+s)
throw i}}}});