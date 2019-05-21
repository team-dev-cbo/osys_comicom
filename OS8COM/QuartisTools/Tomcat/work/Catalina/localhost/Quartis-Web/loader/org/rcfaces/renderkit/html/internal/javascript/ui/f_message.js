new f_class("f_message",{extend:f_component,aspects:[fa_message1],statics:{w:function(e,l,a,i,n,f,s){var u=f_core,h="inline",o="",c,t=c,r=c
if(f){t=f.f_getSummary()
r=f.f_getDetail()
if(s)e+=" "+s}if(!t)t=o
if(!r)r=o
if(l.className!=e)l.className=e
if(a)a.style.display="none"
if(i){u.nr(i,t)
i.className=e+"_summary"
i.style.display=h}if(n){u.nr(n,r)
n.className=e+"_detail"
n.style.display=h}}},members:{f_message:function(){var t=f_core,e=this,n
e.f_super(arguments)
e._sn=t.eo(e,"label")
if(n=t.eo(e,"img")){e._e7=n
e._h=n.src
e._dC=t.D(e,"infoImageURL")
e._Dr=t.D(e,"warnImageURL")
e._gC=t.D(e,"errorImageURL")
e._mE=t.D(e,"fatalImageURL")}e._9u=t.Q(e,"showIfMessage",!1)
e._Eg=t.Q(e,"showActiveComponentMessage",!1)
if(e._Eg&&!e.f_getFor())e.Ec()},f_finalize:function(){var t,e=this
e._vc=e._8v=e._sn=e._e7=t
e.eb()
e.f_super(arguments)},lr:function(){var u="label",o="none",l="inline",e=this,n=e._vc,t=e._8v,c=e._sn,a=e._e7,i=e._en,f,s,r
if(!i){f=e.fe()
if(e.className!=f)e.className=f
if(n&&n.style.display!=o)n.style.display=o
if(t&&t.style.display!=o)t.style.display=o
if(c&&c.style.display!=l)c.style.display=l
if(a)e._3y(a,e._h)
if(e._9u)e.f_setVisible(!1)
return}s=e.lo(i.f_getSeverity())
if(!n&&e.f_isShowSummary())n=document.createElement(u)
if(!t&&e.f_isShowDetail())t=document.createElement(u)
f_message.w(e.fe(),e,c,n,t,i,s)
if(n&&!e._vc){e._vc=n
e.appendChild(n)}if(t&&!e._8v){e._8v=t
e.appendChild(t)}if(a){r=null
switch(i.f_getSeverity()){case 3:if(r=e._mE)break;case 2:if(r=e._gC)break;case 1:if(r=e._Dr)break;case 0:if(r=e._dC)break;default:r=e._h;}e._3y(a,r)}if(e._9u)e.f_setVisible(!0)},_3y:function(n,r){var t="none",e=n.style
if(r){if(e.display==t)e.display="inline"
n.src=r
return}if(e.display!=t)e.display=t},eb:function(){var n=f_core,r,e=this,t
if(e._l6){t=r
if(!n.K())t=document
n.ee(document,"focus",e._l6,t)
e._l6=r}if(e._im){n.ee(document,"blur",e._im)
e._im=r}},Ec:function(){var t=f_core,f,r=this,i=r,e
r._l6=function(n){if(window._rcfacesExiting)return
if(!n)n=t.I(this)
i._br(n)}
e=f
if(!t.K())e=document
t.re(document,"focus",r._l6,e)},_br:function(e){var r=this,n,t,f,i
if(!e)e=f_core.I(r)
if(e.target)n=e.target;else if(e.srcElement)n=e.srcElement
if(t=n.id){f=f_messageContext.Get(n)
i=f.f_listMessages(t)
if(!i.length)t=null}r._od=r._v0=[t]
r.se()},_Dg:function(){var e=this
e._od=e._v0=[null]
e.se()},f_getText:function(){var e=this._sn
return!e?"":f_core.at(e)},f_setText:function(r){var t=this,e=t._sn,n
if(!e){e=document.createElement("label")
if(!(n=t._en))e.style.display="none"
t.appendChild(e)
t._sn=e}f_core.nr(e,r)
t.P("text",r)}}});