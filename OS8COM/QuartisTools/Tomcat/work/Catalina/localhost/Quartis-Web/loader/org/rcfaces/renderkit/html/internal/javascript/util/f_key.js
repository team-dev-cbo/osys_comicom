new f_class("f_key",{statics:{VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_SEMICOLON:59,VK_EQUALS:61,VK_CONTEXTMENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,KF_SHIFT:1,KF_CONTROL:2,KF_ALT:4,KF_META:8,IsPrintable:function(e){return!!(f_key.IsLetterOrDigit(e)||e==32||e>=106&&e<=111||e>=96&&e<=222||e>=59&&e<=61)},IsLetterOrDigit:function(e){return!!(e>=48&&e<=57||e>=65&&e<=90)},Finalizer:function(){var e=f_key,t
e.or=e.ta=t
e.cr(!1)},S:function(r){var e=f_key,n=e.V(r),t=e.or
if(!t)e.or=t=[]
t.push(n)},L:function(){f_key.or.pop()},F:function(n,t){var e=f_key.ta[n]
e._yr=t},V:function(n){var r=f_key,i="--MainScope--",t,e
if(!n)n=i
if(!(t=r.ta))r.ta=t={}
if(e=t[n])return e
t[n]=e={_d:n}
if(n!=i)return e
e._yr=!0
r.S(n)
r.cr(!0)
return e},M:function(a,t,f,o,r){var n=f_key.V(a),i={_u:f,_8e:o,_Ed:r},e
t=t.toUpperCase()
if(!(e=n._si))n._si=e={}
e[t]=i
return!0},w:function(o){var i=f_key,f=i.V(),n=f._si,r,e,t
if(!n)f._si=n={}
r=i.O
for(e in o){t=o[e].toUpperCase()
n[t]={_u:e,_8e:r}}},O:function(e){f_core.SetFocus(e)},$:function(c,f,a,r,i,o){var n=f_key.V(),e=n._3p,t
if(!e)n._3p=e=[]
t={_7a:c,_1c:f,_0c:a,_u:r,_8e:i,_ra:o}
e.push(t)},et:function(i,e){var r,n=f_key.ta[i],t=n._si
if(!t)return
e=e.toUpperCase()
t[e]=r},tn:function(t){var r,e=f_key.ta,n=e[t]
if(!n)return!1
e[t]=r
return!0},ne:function(){},ni:function(t){var f=f_key,n=f_core,e,i,s,o,r,a,c
if(!t)t=n.I(this)
if(f_event.w(t,!1))return n.N(t)
if(!(e=f.oe(t,!0)))return!0
i=e._8e
if(i==f.ne)return!0
s=e._ra
if(s&&f.rn(t))return!0
o=!1
if(i){r=e._u
if(typeof r=="string")if(!(a=n.GetElementByClientId(r)))n.Error(f,"_PerformKey: Can not find componentClientId '"+r+"'.");else r=e._u=a
if(r)try{c=i.call(e._u,t,e._Ed,window)
if(c===!0)o=!0}catch(u){n.Error(f,"_PerformKey: Exception/keyHandler, method="+i,u)}}if(o===!0)return!0
if(n.K())try{t.keyCode=1}catch(l){}return n.N(t)},tf:function(t){var n=f_key,f=f_core,e,r,i
if(!t)t=f.I(this)
if(!(e=n.oe(t,!1)))return!0
r=e._8e
if(r==n.ne)return!0
i=e._ra
return i&&n.rn(t)?!0:f.N(t)},rn:function(e){var t
if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement
return f_core.ab(t)},oe:function(t,u){var f=f_key,n=t.keyCode,s=t.charCode,e,r,i,a,c,o
if(!s)e=String.fromCharCode(n);else e=String.fromCharCode(s)
if(e)e=e.toUpperCase()
if(f_core.nt())if(t.type=="keypress"&&t.which)e=0;else if(n<=0)n=s
if(u&&n==18)f.ar(window)
r=f.or
if(e){i=r[r.length-1]
if(((a=i._si)&&i._yr==t.altKey)&&(c=a[e]))return c}o=r[0]
return f.ro(o,e,n,t)},ro:function(u,l,h,a){var s=null,i=u._3p,e,r,t,f,c,o,n
if(!i||!i.length)return s
e=0
if(a.altKey)e|=4
if(a.ctrlKey)e|=2
if(a.shiftKey)e|=1
if(a.metaKey)e|=8
for(r=0;r<i.length;r++){t=i[r]
f=t._0c
if(f&&e!=f)continue
c=t._7a
if(c&&c==l)return t
if(o=t._1c)for(n=0;n<o.length;n++){if(o[n]!=h)continue
return t}}return s},ar:function(r,e){var t=f_core
if(!e)e=r
if(e._Cg)return
e._Cg=!0
var n=e.document.styleSheets[0]
if(t.K()){n.addRule(".f_accessKey","text-decoration: underline")
return}if(t.nt()||t.rf()){try{n.insertRule(".f_accessKey { text-decoration: underline }",n.cssRules.length)}catch(i){t.Error(f_key,"Enable accessKey underline error !",i)}return}},cr:function(r){var e=f_key,t="keydown",n="keypress"
if(f_core.K()){if(r)document.onkeydown=e.ni;else document.onkeydown=null
return}if(r){document.addEventListener(t,e.ni,!0)
document.addEventListener(n,e.tf,!0)}else{document.removeEventListener(t,e.ni,!0)
document.removeEventListener(n,e.tf,!0)}},ea:function(e){return!!(e==16||e==17||e==18)}}});