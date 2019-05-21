new f_class("f_abstractEntry",{extend:f_input,aspects:[fa_required,fa_selectionProvider,fa_subMenu,fa_immediate],members:{gd:function(){var t=f_core,e=this
e.f_super(arguments)
e._ei=t.D(e,"emptyMessage")
if(e._ei)e._3n=t.Q(e.J(),"emptyMessageShown")
if(e._ei)e.yl()
e.Z("keypress",e.am)},yl:function(){var e=this
if(e._bv)return
e._bv=!0
e.Z("focus",e._EC)
e.Z("blur",e._5w)},ef:function(){var e=this,t
if(t=e.f_getSubMenuById("#text"))e.Z("mousedown",e._lh)
if(e.f_isRequired())e.f_()
e.f_super(arguments)},ir:function(){this.cu()
this.f_super(arguments)},cu:function(){var t="text",e
e=this
if(e.f_isDisabled())e.P(t,e.f_getText());else e.P(t)
if(e._3n)e.J().value=""},on:function(e,t){switch(e){case"selection":return;}this.f_super(arguments,e,t)},fo:function(e,t){switch(e){case"selection":return;}this.f_super(arguments,e,t)},am:function(r){var i="selection",n,e,t
n=this
if(n.f_isDisabled())return
if(n.il(i))return
if(!(e=r.f_getJsEvent()))return
if(!e.ctrlKey)return
t=e.keyCode
if(t!=13&&t!=14)return
r.f_preventDefault()
n.f_fireEvent(i,e)
return!1},_lh:function(n){var t=this,r=n.f_getJsEvent(),i=f_core.an(r),e
if(!i)return!0
if(e=t.f_getSubMenuById("#text")){e.f_open(t,{position:f_menu.Dv},t,r)
return n.f_preventDefault()}return!0},_EC:function(){var t,e=this
if(e._3n){e._3n=t
e.J().value=""
e.ft()}},_5w:function(){var e=this
if(e._ei&&e.f_getText()==""){e._3n=!0
e.value=""
e.ft()
e.value=e._ei}},fe:function(n){var e=this,t=e.f_super(arguments,n)
if(e._3n)t+=" "+e.ue()+"_empty_message"
return t},f_getSelection:function(){var n=this,e=f_core.li(n),t=n.f_getText()
return!e?new f_textSelection(0,t.length,t):new f_textSelection(e[0],e[1]-e[0],t.substring(e[0],e[1]))},f_setSelection:function(r,i){var n=this,t=r.f_getStart(),e=r.f_getLength()
if(!e||e<0)e=t;else e+=t
f_core.ai(n.J(),t,e)
if(i)n.scrollIntoView()},f_selectAll:function(){this.J().select()},a_:function(){return null},f_:function(){this.ft()},f_getEmptyMessage:function(){return this._ei},f_setEmptyMessage:function(e){this._ei=e
if(e)this.yl()}}});