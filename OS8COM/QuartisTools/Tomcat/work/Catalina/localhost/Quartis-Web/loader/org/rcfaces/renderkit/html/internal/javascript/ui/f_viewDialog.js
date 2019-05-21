new f_class("f_viewDialog",{extend:f_dialog,aspects:[fa_immediate],members:{f_viewDialog:function(n){var t=f_core,e=this
e.f_super(arguments,n|f_shell.PRIMARY_MODAL_STYLE)
if(e.nodeType==1){e._9e=t.ua(e,t._m+":parameter")
e.f_setViewURL(t.D(e,"viewURL","about:blank"))
if(t.Q(e,"visible",!0))e.f_open()}},f_finalize:function(){var n,e=this,t
if(t=e._0e){e._0e=n
e.gl(t)}e._9e=n
e.f_super(arguments)},fl:function(){return f_viewDialog.w},f_getParameter:function(e){return this._9e?this._9e[e]:null},f_setParameter:function(n,t){var e=this
if(!e._9e)e._9e={}
e._9e[n]=t},f_removeParameter:function(e){if(this._9e)delete this._9e[e]},f_getViewURL:function(){return this._pu},f_setViewURL:function(t){var e=this
e._pu=f_env.ResolveContentUrl(t)
if(e._0e&&e.f_getStatus()==18)e._0e.src=e.pt()},pt:function(){var f=f_core,o=this,t=o.f_getViewURL(),n,e,r,i
if(!t)t="about:blank"
if(n=o._9e){e=""
r=!0
for(i in n){if(r)r=!1;else e+=","
e+=encodeURIComponent(i)+"="+encodeURIComponent(n[i])}if(e)t=f.AddParameter(t,"__rcfaces_utf8",e)}return f.AddParameter(t,"__rcfaces_requestKey",f.ob())},f_fillBody:function(s){var a=window,c=f_viewDialog,r=f_core,n="f_fillBody: f_performFrameReady throws exception.",f=null,e=this,t=r.B(s,"iframe"),i
e._0e=t
t.className="f_viewDialog_frame"
t.frameBorder=0
t.style.width=e.f_getWidth()
t.style.height=e.f_getHeight()
i=e
if(r.K())t.onreadystatechange=function(){var e=this
if(a._rcfacesExiting)return!1
if(e.readyState!="interactive")return
e.onreadystatechange=f
try{i.pc(e,e.contentWindow.document)}catch(o){r.Error(c,n,o)}};else t.onload=function(){var e=this
if(a._rcfacesExiting)return!1
e.onload=f
try{i.pc(e,e.contentWindow.document)}catch(o){r.Error(c,n,o)}}
t.src=e.pt()},gl:function(e){e.onreadystatechange=e.onload=null},pc:function(){},ds:function(){var e
this._0e=e
this.f_super(arguments)},toString:function(){return"[f_viewDialog viewURL='"+this._pu+"']"}},statics:{w:{width:500,height:400,priority:0,styleClass:"f_viewDialog",backgroundMode:"greyed"}}});