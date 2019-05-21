new f_class("f_httpRequest",{statics:{POST_METHOD:"POST",GET_METHOD:"GET",w:"application/x-www-form-urlencoded; charset=UTF-8",TEXT_HTML_MIME_TYPE:"text/html",TEXT_PLAIN_MIME_TYPE:"text/plain",TEXT_XML_MIME_TYPE:"text/xml",JAVASCRIPT_MIME_TYPE:"text/javascript",ANY_MIME_TYPE:"*/*",OK_STATUS:200,HTTP_CONTENT_TYPE:"Content-Type"},members:{f_httpRequest:function(t,i,n,r){var e=this
e._u=t
e._lD=r
e._8f=i
e.f_setAcceptType(n)
e.f_cancelRequest()},f_finalize:function(){var t,e=this
e.f_cancelRequest()
e._5f=e._u=t},f_setListener:function(e){this._5f=e},f_getReady:function(){return this._ce},f_getStatus:function(){var e=this._2o
return!e?null:e.status},f_getStatusText:function(){var e=this._2o
return!e?null:e.statusText},f_getResponse:function(){var e=this._8s
if(e===!1)throw new Error("HTTP Request is not an plain text request !")
return e},f_getXmlResponse:function(){var e=this._a5
if(e===!1)throw new Error("HTTP Request is not an XML request !")
return e},f_isXmlResponse:function(){return typeof this._a5=="object"},f_getResponseContentType:function(){return this._c5},f_getResponseHeader:function(e){var t=this._2o
try{return t.getResponseHeader(e)}catch(n){f_core.Error(f_httpRequest,"f_getResponseHeader: Can not get reponse header '"+e+"'.",n)
return null}},f_cancelRequest:function(){var f=f_httpRequest,i=f_core,r,e=this,n,t
if(n=e._2o){e._2o=r
if(!e._ce)try{n.abort()}catch(o){i.Error(f,"f_cancelRequest: Cancel request has failed !",o)}try{n.onreadystatechange=null}catch(o){}}if((e._2n&&!e._ce)&&(t=e._5f.onAbort))try{t.call(e,e)}catch(a){i.Error(f,"f_cancelRequest: Exception when calling onAbort for url="+e._8f+".\n"+t,a)}e._c5=e._8s=e._a5=r
e._ce=!1
e._2n=e._p=r},f_setRequestHeader:function(n,t){var f,i=null,r=this,e=r.__y
if(!e){if(t===i)return
r.__y=e={}}if(t===i){e[n]=f
return}e[n]=t},f_doRequest:function(i,r){var t=this,e=null
if(!t._5f){if(!(e=document.body.style.cursor))e="default"
document.body.style.cursor="wait"}try{t._wp.apply(t,arguments)}catch(n){f_core.Error(f_httpRequest,"f_doRequest: Can not send request to "+t._8f+" data="+r,n)
throw n}finally{if(e)document.body.style.cursor=e}},_wp:function(l,f,c){var g=window,v=f_httpRequest,r=f_core,E="Content-Type",m="text/xml",d=")",C="f_httpRequest.doRequest(",o,e,t,s,n,a,u,h
o=null
e=this
r.er(!1,C+e._8f+d)
try{if(e._ce)return!1
e.f_cancelRequest()
e._5a=!1
e._p=new Date().getTime()
t=o
if(g.XMLHttpRequest)try{t=new XMLHttpRequest()}catch(i){r.Error(v,"_doRequest: Can not create XMLHttpRequest !",i)
throw i}else if(r.K())try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(i){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(i){r.Error(v,"_doRequest: Can not find ActiveX XmlHttp !",i)
throw i}}if(!t)throw"f_httpRequest: Cannot create XML Http object..."
e._2o=t
if(s=typeof e._5f=="object"){n=e
t.onreadystatechange=function(){if(g._rcfacesExiting){n=o
return!1}n._wb()}
if(r.nt()||r.rf())t.onerror=function(){if(g._rcfacesExiting)return!1
if(!n._5a)return
var t=n._2o,p,b
try{p=t.status
b=t.statusText}catch(i){}n._gi(p,b)}}if(!l)l="GET"
t.open(l,e._8f,s)
if((!c&&f&&l=="POST")&&typeof f=="string")if(f.indexOf("<?xml")>=0)c=m;else c="text/plain"
if(c)t.setRequestHeader(E,c)
if(e._sy)t.setRequestHeader("Accept",e._sy)
if(a=e.__y)for(u in a){h=a[u]
t.setRequestHeader(u,h)}try{if(f)t.send(f);else t.send(o)}catch(k){r.Error(v,"_doRequest: Can not send data '"+f+"'.",k)
throw k}if(!s){e._c5=t.getResponseHeader(E)
if(e._c5&&e._c5.indexOf(m)>=0){e._a5=t.responseXML
e._8s=!1}else{e._8s=t.responseText
e._a5=!1}e._ce=!0}return!0}finally{r.er(!0,C+e._8f+d)}},f_doFormRequest:function(t,n,a){var o=f_httpRequest.w,s,f=this,e=null,c="POST",r,i
if(t=f_core.br(f._u,f._8f,t))if(typeof t=="object"){e=""
for(r in t){if(e)e+="&"
e+=encodeURIComponent(r)+"="
i=t[r]
if(i===s)continue
e+=encodeURIComponent(i)}if(!n)n=o}else if(typeof t=="string"){e=t
if(!n)n=o}f.f_doRequest(c,e,n,a)},_wb:function(){var u=f_httpRequest,f=f_core,C="Content-Type",E="'.\n",p="function",b="text/xml",m=")",l=null,e=this,n=e._2o,a,d,o,r,g,i,c,v,s,h
if(!n)return
a=e._8f
switch(n.readyState){case 1:{f.er(l,"f_httpRequest.stateChange.loading("+a+m)
if(e._2n)return
e._2n=!0
d=e._5f.onInit
if(typeof d==p)try{d.call(e,e)}catch(t){f.Error(u,"_onReadyStateChange.loading: Exception when calling onInit for url="+a+".\n"+d,t)}return}case 2:{f.er(l,"f_httpRequest.stateChange.loaded("+a+m)
if(f.K())return
if(e._5a)return
try{o=n.status
if(o==200)return}catch(t){try{f.Error(u,"_onReadyStateChange.loaded: Can not get status of request !",t)}catch(k){}}try{r=n.statusText}catch(T){}if(!r||r=="Unknown")r=f_resourceBundle.Get(u).f_get("STATUS_ERROR")
e._gi(o,r)
return}case 3:{if(e._5a)return
g=0
i=c=l
try{g=n.getResponseHeader("Content-Length")}catch(t){g=NaN}try{if(c=n.getResponseHeader(C))e._c5=c}catch(t){}if(!c||c.indexOf(b)<0)try{i=n.responseText}catch(t){}v=e._5f.onProgress
if(typeof v==p)try{v.call(e,e,i,g,c)}catch(t){f.Error(u,"_onReadyStateChange.interactive: Exception when calling onProgress method for url='"+a+E+v,t)}return}case 4:{f.er(l,"f_httpRequest.stateChange.complete("+a+m)
if(e._5a)return
try{s=n.getResponseHeader(C)}catch(T){return}e._c5=s
i=l
if(s&&s.indexOf(b)>=0){e._8s=!1
i=e._a5=n.responseXML}else{i=e._8s=n.responseText
e._a5=!1}e._ce=!0
try{o=n.status
r=n.statusText}catch(t){try{f.Error(u,"_onReadyStateChange.complete: Can not get status of request !",t)}catch(k){}}if(o!=200){e._gi(o,r)
return}h=e._5f.onLoad
if(typeof h!=p)return
try{h.call(e,e,i,s)}catch(t){f.Error(u,"_onReadyStateChange.complete: Exception when calling onLoad method for url '"+a+E+h,t)}return}default:return;}},_gi:function(r,i){var t=this,e
if(t._5a)return
t._5a=!0
e=t._5f.onError
if(typeof e!="function")return
try{e.call(t,t,r,i)}catch(n){f_core.Error(f_httpRequest,"_callError: Exception when calling onError.\n"+e,n)}},f_setAcceptType:function(e){if(!e)e="*/*"
this._sy=e}}});