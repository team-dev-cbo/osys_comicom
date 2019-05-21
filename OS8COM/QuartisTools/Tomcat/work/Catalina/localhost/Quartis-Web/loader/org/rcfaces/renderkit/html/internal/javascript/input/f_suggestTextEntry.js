new f_class("f_suggestTextEntry",{extend:f_textEntry,aspects:[fa_filterProperties,fa_commands],members:{f_suggestTextEntry:function(){var t=f_core,e=this,n,r
e.f_super(arguments)
e.setAttribute("autocomplete","off")
e._0l=!0
e._v=0
e._rl=t.te(e,"maxResultNumber",5)
e._a1=t.te(e,"suggestionDelayMs",300)
e._a6=t.te(e,"suggestionMinChars",0)
e._5o=t.Q(e,"caseSensitive",!1)
e._g1=t.Q(e,"forceProposal",!1)
if(e._g1&&e._a6<1)e._a6=1
e._p6=t.D(e,"orderedResult")
e._p6=!0
e._vs=t.D(e,"suggestionValue")
e._wh=t.D(e,"moreResultsMessage")
e.Z("keydown",e._nb)
e.Z("keyup",e.__b)
n=e.Ep("#suggestion")
n.CE(!0)
r=e
n.Z("selection",function(f){var o=f.f_getJsEvent(),i=f.f_getValue()
r._3m(i._i,i._n,i,o)})
e.Z("focus",e._o6)
e.Z("blur",e._to)},f_finalize:function(){var n,e=this,t
if(t=e._D){e._D=n
window.clearTimeout(t)}e._9i=n
e.f_super(arguments)},f_documentComplete:function(){var e=this
e.f_super(arguments)
e._nC=!0
if(typeof e._v=="number"&&e._9i&&e._9i.length==e._v)e._yp=""},f_getMaxResultNumber:function(){return this._rl},f_setMaxResultNumber:function(e){var t=this
if(t._rl==e)return
t._rl=e
t.P("rows",e)},f_getSuggestionDelayMs:function(){return this._a1},f_setSuggestionDelayMs:function(e){var t=this
if(t._a1==e)return
t._a1=e
t.P("delayMs",e)},_nb:function(t){var e=t.f_getJsEvent()
if(e.cancelBubble)return!0
switch(e.keyCode){case 40:case 38:return f_core.N(e);}return!0},__b:function(p){var l=window,s=f_core,m,d=null,e=this,n=p.f_getJsEvent(),f,o,v,t,i,a,c,h,u,r,g
if(n.cancelBubble)return!0
f=e.f_getSubMenuById("#suggestion")
o=f&&f.f_isOpened()
v=!1
t=e.f_getValue()
i=!1
switch(n.keyCode){case 40:case 38:if(o)return s.N(n)
a=e._a6
if((a<1||a<=t.length)&&t==e._5i){e._gs(n,n.keyCode==40?1:-1)
return s.N(n)}i=!0
break;case 14:case 13:case 9:return!0;}t=e.f_getValue()
if(t==e._5i)return!0
if(o)f.ct()
e._da(d,d,n)
c=n.keyCode
if(!i)c<32
if(h=e._D){e._D=m
l.clearTimeout(h)}u=e._a1
if(u<1)return
r=u
if(o){r/=3
if(r<1)r=1}else if(!i&&c<32)r*=2
if(i){e._5i=t
e._ul()}else{e._5i=t
g=e
e._D=l.setTimeout(function(){if(l._rcfacesExiting)return
try{g._ul()}catch(b){s.Error(f_suggestTextEntry,"_onSuggest.timer: Timeout processing error !",b)}},r)}return v?s.N(n):!0},_ul:function(n){var e=this,f,t,r,o,i
if(!e._f||window._rcfacesExiting)return
if(!n)n=e.f_getText()
f=e._a6
if(f>0&&n.length<f)return
t=e._yp
r=n
if(!e._5o){r=n.toLowerCase()
if(t)t=t.toLowerCase()}if(t==r){e._go()
return}o=e._9i
if((o&&o.length&&typeof t=="string"&&!r.indexOf(t))&&e._v6([],n)){e._go()
return}i=e.f_getFilterProperties()
i.text=r
i.caseSensitive=e._5o
e.f_setFilterProperties(i)},su:function(){var t=this,e,n,i,r
if(t._1y)return
e={}
e.componentId=t.id
n=null
if(i=t.as()){e.filterExpression=i
n=t.f_getFilterProperties().text}r=t._rl
if(r>0)e.maxResultNumber=r
t.cc(function(f){f._i4(e,n)})},_i4:function(d,o){var a="text/javascript",i,n,u,e,t
n=this
n._1y=!0
try{if(n.f_fireEvent("menu")==!1)return
n.ho(!0)
u=f_env.rn()
e=new f_httpRequest(n,u,a)
t=n
e.f_setListener({onError:function(e,m,o){var l
try{l=t.q(e,16777216,o)}catch(g){l=!1}if(l===!1){t.ho(!1)
return}if(t.to())return
t.ho(!1)},onProgress:function(e,h,p,v){},onLoad:function(e,h,v){var s,r,c,f
if(t.to())return
try{if(e.f_getStatus()!=200){t.q(e,33554436,"Bad http response status ! ("+e.f_getStatusText()+")")
return}if(!(s=e.f_getResponseHeader("X-Camelia-Service"))){t.q(e,33554438,"Not a service response !")
return}r=e.f_getResponseContentType().toLowerCase()
if(r.indexOf("x-camelia/error")>=0){c=f_error.V(e)
t.q(e,c,h)
return}if(r.indexOf(a)){t.q(e,33554435,"Unsupported content type: "+r)
return}f=e.f_getResponse()
t._9i=i
t._yp=o
try{f_core.of(f)}catch(g){t.q(g,33554437,"Evaluation exception")}}finally{t.ho(!1)}}})
n.ho(!0)
e.f_setRequestHeader("X-Camelia","items.request")
e.f_doFormRequest(d)}finally{n._1y=i}},q:function(n,t,e){return f_error.w(this,t,e,n)},ho:function(n){var e=this,t
if(n==e._E)return
e._E=n
t=e.fe(n?"_waiting":null)
if(e.className!=t)e.className=t},f_appendItem:function(s,c,a,u){var e=arguments,o=e.length,n,t,r,i,f
if(o>4){n={}
for(t=4;t<o-1;){r=e[t++]
n[r]=i=e[t++]}}f={_i:s,_n:c,_8c:a,_h:u,_y:n}
return this.f_appendItem(f)},yE:function(t){var n=this,e=n._9i
if(!e)n._9i=e=[]
e.push(t)
return t},Ey:function(t){var e=this
e._v=t
if(!e._nC)return
e._go()},_go:function(n){var t=this,r=t._9i,e
if(!r)return
e=[]
t._v6(e)
if(!e.length)return
if(!t._g1&&e.length>1){t._gs(n)
return}t.f_showProposal(e[0]._i,e[0]._n,e[0],n)
if(e.length>1)t._gs(n)},_gs:function(v,g){var h="_result",c=this,e=c.f_getSubMenuById("#suggestion"),i,s,t,n,a,u,f,l,r,o
if(!e)return
if(e.f_isOpened())e.ct()
e.f_removeAllItems(e)
i=[]
s=c._v6(i)
if(!i.length)return
for(t=0;t<i.length;t++){n=i[t]
a=n._i
if(u=n._8c)a+=u
f=e.f_appendItem(e,h+t,a,n)
if(l=n._h)e.sg(f,l)}r=c._wh
if(!s&&r!=""){if(!r)r=f_resourceBundle.Get(f_suggestTextEntry).f_get("MORE_RELEVANT_RESULTS")
f=e.f_appendItem(e,h+t,r)
e.f_setItemDisabled(f,!0)}o={component:c.J(),position:2}
if(!f_core.K()){o.deltaY=-1
o.deltaWidth=-4}e.f_open(v,o,g)},f_showProposal:function(o,l,h,g){var t=this,r=t.f_getText(),s=r,f=o,n,e,u,i,a,c
if(!t._5o){s=s.toLowerCase()
f=f.toLowerCase()}if(f.indexOf(s))return
if(t._g1){n=t._9i
if(n&&n.length&&n.length==t._v)for(e=r.length+1;e>=0&&e<=f.length;e++){u=f.substring(0,e)
for(i=0;i<n.length;i++){a=n[i]._i
c=t._5o?a:a.toLowerCase()
if(c.indexOf(s)<0)continue
if(!c.indexOf(u))continue
e=-1
break}if(e<1)break
r=o.substring(0,e)}}t._3m(o,l,h,g)
t.f_setSelection(new f_textSelection(r.length,o.length,o.substring(r.length)))},_3m:function(r,n,t,i){var e=this
e.f_setText(r,!0)
e._da(n,t,i)
e._5i=e.f_getValue()},f_setText:function(e,t){this.f_super(arguments,e)
if(!t)this._da(null)},_v6:function(u,n){var l,t=this,e=t._9i,s,r,i,a,o,c,f
if(!e||!e.length)return!0
if(n===l){if(!(s=t.f_getSelection()))return!0
n=t.f_getValue().substring(0,s.start)}if(!t._p6)return!1
if(!t._5o)n=n.toLowerCase()
r=0
for(i=0;i<e.length;i++){a=e[i]._i
if(!t._5o)a=a.toLowerCase()
if(a.indexOf(n)){if(r==1){r=2
break}continue}if(!r)r=1
u.push(e[i])}switch(r){case 0:c=e[0]._i
f=e[e.length-1]._i
if(!t._5o){c=c.toLowerCase()
f=f.toLowerCase()}o=e.length==t._v||n>=c&&n<f
break;case 1:o=e.length==t._v
break;case 2:o=!0
break;}return o},f_getSuggestionValue:function(){return this._vs},_da:function(e,n,r){var t=this
if(t._vs==e)return
t._vs=e
t.f_fireEvent("suggestion",r,n,e)},f_getItemClientData:function(t,n){var e=t._y
return!e?null:e[n]},f_getItemLabel:function(e){return e._i},f_getItemValue:function(e){return e._n},H:function(r,f,e){var n=this,t=n.f_getSubMenuById("#suggestion"),i
if(i=t&&t.f_isOpened()){if(!e)e=0
e|=4}return n.f_super(arguments,r,f,e)},lu:function(){},_o6:function(){var e=this
if(e._f||e.f_isDisabled())return
e._f=!0},_to:function(){var e
if(!this._f)return
this._f=e}}});