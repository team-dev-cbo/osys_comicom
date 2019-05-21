new f_class("f_card",{extend:f_component,aspects:[fa_asyncRender],members:{f_card:function(){this.f_super(arguments)
this.f_setHiddenMode(4)},f_finalize:function(){var r,e=this,n=e._X,t
e._X=r
if(t=e._7t){if(n.vi)n.vi(t)
e._7t=r}e.f_super(arguments)},hn:function(t,e){this._X=t
this._n=e},f_setFocus:function(n){var t=this,e
if(t.f_isDisabled())return
if(e=t._X)e.hp(t,n)},lw:function(){return this._X},pa:function(){return this},f_getValue:function(){return this._n},ir:function(){var t,e=this
if(!e.f_isVisible())e.P("visible",t)
e.f_super(arguments)}}});