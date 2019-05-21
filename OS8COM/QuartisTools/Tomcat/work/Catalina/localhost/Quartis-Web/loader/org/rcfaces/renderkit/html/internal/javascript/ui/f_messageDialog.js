new f_class("f_messageDialog",{extend:f_dialog,statics:{w:{selection:"selection"},S:{width:500,height:300,dialogPriority:0,styleClass:"f_messageDialog",backgroundMode:"greyed"},L:function(e){var t=f_core,r=this,n=r,i=n._8m
if(!e)e=t.I(r)
if(i.H(e,!0))return!1
i.o_(n,e)
return t.N(e)}},members:{f_messageDialog:function(i,o,a){var f=f_shell,t=f_core,e=this,r,n
e.f_super(arguments,f.PRIMARY_MODAL_STYLE|f.MOVE_STYLE)
if(e.nodeType==1){e._l=t.D(e,"text")
e._0a=t.D(e,"defaultValue")
if(r=t.D(e,"imageURL"))e.f_setImageURL(r)
if(n=t.D(e,"events"))e.au(f_messageDialog.w,n)}else{if(i)e.f_setTitle(i)
e._l=o
e._0a=a}e._8n=[]},f_finalize:function(){var t,e=this
e._8n=t
e._ap()
e.f_super(arguments)},fl:function(){return f_messageDialog.S},f_getText:function(){return this._l},f_setText:function(e){this._l=e},f_getDefaultValue:function(){return this._0a},f_setDefaultValue:function(e){this._0a=e},f_addAction:function(n,e,r,t){this._8n.push({_l:e,_n:n,_s:r,_by:t})},f_getActions:function(){return this._8n},f_openMessage:function(n){var r="selection",e,t
e=this
if(n){if(t=e.fv(r))t.iC()
e.f_addEventListener(r,n)}e.f_open()},f_fillBody:function(z){var R=f_messageDialog,G="tbody",p="px",d="td",T="table",C="tr",i=this,e=z.ownerDocument,b=e.createElement("form"),f,s,n,k,t,o,E,m,v,g,l,a,u,c,h,r
b.className="f_messageDialog_form"
z.appendChild(b)
f=e.createElement(T)
b.appendChild(f)
f.className="f_messageDialog_body"
i._W=[]
f.style.width=i.f_getWidth()+p
f.style.height=i.f_getHeight()+p
f.cellPadding=f.cellSpacing=0
s=e.createElement(G)
f.appendChild(s)
n=e.createElement(C)
s.appendChild(n)
n.className="f_messageDialog_body_tr"
n.style.height=(i.f_getHeight()-60)+p
t=e.createElement(d)
n.appendChild(t)
t.className="f_messageDialog_image_td"
if(k=i.f_getImageResolvedURL()){o=e.createElement("img")
o.className="f_messageDialog_image"
o.src=k
t.appendChild(o)}t=e.createElement(d)
n.appendChild(t)
t.className="f_messageDialog_text_td"
o=e.createElement("span")
t.appendChild(o)
o.className="f_messageDialog_text"
if(E=i._l)f_core.nr(o,E)
n=e.createElement(C)
s.appendChild(n)
n.className="f_messageDialog_actions_tr"
n.style.height="60px"
t=e.createElement(d)
n.appendChild(t)
t.colSpan=2
t.className="f_messageDialog_actions_td"
t.align="center"
m=e.createElement(T)
t.appendChild(m)
v=e.createElement(G)
m.appendChild(v)
g=e.createElement(C)
v.appendChild(g)
l=i._8n
if(!l.length){if(!(a=i._0a))a=f_resourceBundle.Get(f_shell).f_get("OK_BUTTON")
i.f_addAction(a,a,!1,!0)}for(u=0;u<l.length;u++){c=l[u]
h=e.createElement(d)
g.appendChild(h)
r=e.createElement("input")
if(c._by){r.type="submit"
r.onclick=R.L}else{r.type="button"
r.onclick=R.L}r.className="f_messageDialog_button"
r.disabled=c._s
r._n=c._n
r.value=c._l
r._8m=i
i._W.push(r)
h.appendChild(r)}},s_:function(){this._ap()
this.f_super(arguments)},_ap:function(){var i,r=this,n,t,e
if(n=r._W){r._W=i
for(t=0;t<n.length;t++){e=n[t]
e._8m=e._n=i
e.onclick=e.onfocusin=null}}},o_:function(n,i){var e=this,r=n._n,t=e.f_fireEvent("selection",i,null,r)
if(t===!1)e.fp().f_clearPendingShells()
e.f_close()},f_getImageURL:function(){return this._h},f_getImageResolvedURL:function(){return!this._h?null:f_env.ResolveContentUrl(this._h)},f_setImageURL:function(e){this._h=e},_ty:function(){var e=this,t=e.f_super(arguments)
return t+"\n[f_messageDialog title='"+e._L+"' text='"+e._l+"' defaultValue='"+e._0a+"']"}}});