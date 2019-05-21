new f_class("f_expandBar",{extend:f_component,aspects:[fa_disabled,fa_readOnly,fa_collapsed,fa_groupName,fa_overStyleClass],statics:{w:function(){var e="f_expandBar_head"
this.className=e+" "+e+"_over"
return!0},S:function(){this.className="f_expandBar_head"
return!0},L:function(e){var t=f_core,n=this,r=n._t4
if(!e)e=t.I(n)
r.f_fireEvent("selection",e)
return t.N(e)}},members:{f_expandBar:function(){var s=f_expandBar,n=f_core,e=this,i,o,t,f,r,c,a
e.f_super(arguments)
i=e.ownerDocument
o=n.Q(e,"userExpandable",!0)
t=null
if(f=i.getElementById(e.id+"::head")){e._rr=f
f._t4=e
if(o){f.onmouseover=s.w
f.onmouseout=s.S}if(r=i.getElementById(e.id+"::label")){e._l=r
r._t4=e
if(o)r.onclick=s.L
if(t=n.at(r,!0))t=n.rb(t)}}if(c=i.getElementById(e.id+"::body")){e._Z=c
e._td=i.getElementById(e.id+"::content")}e._2c=n.D(e,"text",t)
e._ui=n.D(e,"collapsedText",t)
if(a=n.D(e,"groupName")){e._8i=a
e.v_(a,e)}if(o)e.Z("selection",e._g7)},f_finalize:function(){var t,f=null,e=this,o,n,r,i
if(o=e._r5){e._r5=t
f_classLoader.Destroy(o)}e._Z=e._td=t
if(n=e._rr){e._rr=t
n.onmouseover=n.onmouseout=f
n._t4=t}if(r=e._l){e._l=r._t4=t
r.onclick=f}if(i=e._t3){e._t3=t
i.onclick=f
i.f_link=t}e.f_super(arguments)},on:function(n,t){switch(n){case"selection":case"blur":case"focus":case"keydown":case"keyup":var e=this.sm()
if(!e||!e.offsetTop)return
t=e
break;}this.f_super(arguments,n,t)},sm:function(){var n,t=this,e=t._t3
if(e!==n)return e
if(e=t.ownerDocument.getElementById(t.id+"::button"))e.f_link=t
return t._t3=e},fo:function(n,t){switch(n){case"selection":case"blur":case"focus":case"keydown":case"keyup":var e=this._t3
if(!e)return
t=e
break;}this.f_super(arguments,n,t)},_g7:function(t){var e=this
if(!e._f)e.f_setFocus()
if(e.f_isReadOnly()||e.f_isDisabled())return!1
if(e.f_fireEvent("expand",t.f_getJsEvent())===!1)return!1
e.f_setCollapsed(!e.f_isCollapsed())
return!0},f_setFocus:function(){var t=this,e
if(!f_core.nl(t))return
if(t.f_isDisabled())return
if(!(e=t._t3))e=t
if(e.visible)e.focus()},gs:function(t){var e=this
if(e.f_isReadOnly()||e.f_isDisabled())return!1
e.f_fireEvent("selection",t)
e.f_setFocus()
return f_core.N(t)},ft:function(){var e=this,i=e.gf(),r="",t,n
if(e.f_isCollapsed())r+="_collapsed";else if(i)r="_over"
t=e.fe(r)
if(i&&(n=e.f_getOverStyleClass()))t+=" "+n
if(t!=e.className)e.className=t},yC:function(f){var d=f_expandBar,m=f_resourceBundle,p=" ",g="_collapsed",e=this,h=e._Z,u,o,s,i,n,c,t,r,a,v
if(!h)return
if(u=e.sm()){if(f)o=m.Get(d).f_get("EXPAND_BUTTON");else o=m.Get(d).f_get("COLLAPSE_BUTTON")
if(u.alt!=o)u.alt=o}e.ft()
s=e.f_getEffect()
i=e._ui
if(i&&e._l){if(!f)i=e._2c
f_core.nr(e._l,i,e._3e)}n=""
if(s){s.f_performEffect(f)
n=!1}else if(f)n+=g
if(n!==!1){c=e._td
t="f_expandBar_content"
r="f_expandBar_body"
if(n){t+=p+t+g
r+=p+r+g}if(c.className!=t)c.className=t
if(h.className!=r)h.className=r}a=e.f_getGroupName()
if(!f&&a){v=e
e.f_mapIntoGroup(a,function(l){if(l==v)return
if(l.f_isCollapsed&&l.f_isCollapsed())return
l.f_setCollapsed(!0)})}},f_getEffect:function(){var a=f_core,s,i=this,e=i._r5,r,o
if(e!==s)return e
r=i._td
o=i._Z
if(e=a.D(i,"effect"))e=a.bt(e,r,function(c){var f="",n,t
if(c==0){display="none"
f+="_collapsed"}else if(c!=1)f+="_effect"
n="f_expandBar_content"
t="f_expandBar_body"
if(f){n+=" "+n+f
t+=" "+t+f}if(r.className!=n)r.className=n
if(o.className!=t)o.className=t})
if(!e)e=null
return i._r5=e},f_getGroupName:function(){return this._8i},f_setText:function(t){var e=this,n
if(e._2c==t)return
e._2c=t
if((!e.f_isCollapsed()&&e._ui)&&(n=e._l))f_core.nr(n,t,e._3e)
e.P("text",t)},f_getText:function(){return this._2c},f_setCollapsedText:function(t){var i=f_core,e=this,r,n
if(e._ui==t)return
e._ui=t
if(e.f_isCollapsed()&&(r=e._l)){n=i.sr(t)
i.nr(r,n,e._3e)}e.P("collapsedText",t)},f_getCollapsedText:function(){return this._ui},ge:function(){this.f_setCollapsed(!1)
return this.f_super(arguments)}}});