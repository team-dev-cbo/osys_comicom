new f_class("f_cardBox",{extend:f_component,aspects:[fa_immediate],members:{f_cardBox:function(){this.f_super(arguments)
this._4e=[]},f_finalize:function(){var i,e=this,n,t,r
e._q=i
if(n=e._4e){e._4e=i
for(t=0;t<n.length;t++){r=n[t]
e.vi(r)}}e.f_super(arguments)},nC:function(){var r=this,i=r._4e,n,e,t
for(n=0;n<i.length;n++){e=i[n]
e._1n=t=f_core.GetElementByClientId(e._T)
t._7t=e
t.hn(r,e._n)}},vi:function(e){var n,r,t
if(r=this._4e)r.it(e)
if(!e._X)return
e._X=n
if(t=e._1n)e._1n=t._7t=n},hp:function(){},ra:function(){},hn:function(e){var r=this,t=r._4e,n
if(t.length){n=t[t.length-1]
n._t6=e
e._t9=n}t.push(e)
e._X=r
if(e.__)r._q=e
return e},f_selectCard:function(t){var n,e
if(typeof t=="string"){n=t
t=f_core.GetElementByClientId(n)}e=t._7t
return!e?!1:this._y6(e)},f_getSelectedCard:function(){var e=this._q
return!e?null:e._1n},f_getValue:function(){var e=this.f_getSelectedCard()
return!e?null:e.f_getValue()},f_setValue:function(n){var t=this,e=t.f_getCardByValue(n)
return!e?!1:t._y6(e)},f_getCardByValue:function(i){var r=null,n=this._4e,e,t
if(!n)return r
for(e=0;e<n.length;e++){t=n[e]
if(t._n!=i)continue
return t}return r},_y6:function(n){var e=this,t
if(e._q==n)return!1
t=e._q
e._q=null
if(t)e.ra(t)
if(t)t._1n.f_setVisible(!1)
n._1n.f_setVisible(!0)
e._q=n
e.ra(n)
e.P("selected",n._T)
return!0},on:function(e,t){switch(e){case"selection":return;}this.f_super(arguments,e,t)},fo:function(e,t){switch(e){case"selection":return;}this.f_super(arguments,e,t)},f_listCards:function(){var t=[],n=this._4e,e
if(!n)return t
for(e=0;e<n.length;e++)t.push(n[e]._1n);return t}}});