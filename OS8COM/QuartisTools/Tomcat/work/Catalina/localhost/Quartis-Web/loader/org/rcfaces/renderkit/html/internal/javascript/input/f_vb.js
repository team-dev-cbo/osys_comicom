new f_class("f_vb",{statics:{w:"àäâéèëêïîöôùüûÿçÀÄÂÉÈËÊÏÎÖÔÙÜÛÇ",S:[/[áãàâäå]/,97,/[éèêë]/,101,/[íìîï]/,105,/[ñ]/,110,/[óõòôö]/,111,/[úùûüµ]/,117,/[ç]/,99,/[ýÿ]/,121,/[ÀÁÂÃÄÅ]/,65,/[ÈÉÊË]/,69,/[ÌÍÎÏ]/,73,/[Ñ]/,78,/[ÓÔÕÖÒ]/,79,/[ÙÚÛÜ]/,85,/[Ç]/,67,/[Ý]/,89],L:/[áãàâäåçéèêëíìîïñóõòôöúùûüý]/,F:/[ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÓÔÕÖÒÙÚÛÜÝ]/,V:/([\\\/\.\*\+\?\|\(\)\[\]\{\}\-\^])/g,M:function(e){return!e?"":e.replace(f_vb.V,"\\$1")},Filter_alpha:function(t,n,i){var e="[a-zA-Z",r=t.f_getParameter("alpha.otherChars")
e+=f_vb.M(r)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(e),n,i)},Filter_alpha_fr:function(n,r,f){var t=f_vb,e="[a-zA-Z"+t.w,i=n.f_getParameter("alpha.otherChars")
e+=t.M(i)+"]"
return f_clientValidator.Filter_generic(n,new RegExp(e),r,f)},Filter_alphanum:function(t,n,i){var e="[0-9a-zA-Z",r=t.f_getParameter("alpha.otherChars")
e+=f_vb.M(r)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(e),n,i)},Filter_card:function(t,n,i){var e="[0-9.",r=t.f_getParameter("card.otherChars")
e+=f_vb.M(r)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(e),n,i)},Filter_code:function(t,n,i){var e="[0-9a-zA-Z",r=t.f_getParameter("code.otherChars")
e+=f_vb.M(r)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(e),n,i)},Filter_dat:function(t,n,i){var e="[0-9",r=t.f_getParameter("date.sepSign")
e+=f_vb.M(r)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(e),n,i)},Filter_digit:function(t,n,i){var e="[0-9",r=t.f_getParameter("digit.otherChars")
e+=f_vb.M(r)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(e),n,i)},Filter_dps:function(t,e,n){return f_clientValidator.Filter_generic(t,/[\040-\177]/,e,n)},Filter_hour:function(t,n,i){var e="[0-9",r=t.f_getParameter("hour.sepSign")
e+=f_vb.M(r)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(e),n,i)},Filter_insee:function(t,e,n){return f_clientValidator.Filter_generic(t,/[0-9aAbB]/,e,n)},Filter_integer:function(t,e,n){return f_clientValidator.Filter_generic(t,/[0-9]/,e,n)},Filter_money:function(t,e,n){return f_clientValidator.Filter_generic(t,/[0-9\.\+\-]/,e,n)},Filter_name:function(t,e,n){return f_clientValidator.Filter_generic(t,/[ a-zA-Z0-9\*\.\-]/,e,n)},Filter_noblank:function(t,e,n){return f_clientValidator.Filter_generic(t,/[^ ]/,e,n)},Filter_num:function(t,i,o,f){var r=f_vb,n="[0-9",e
if(t.f_getBoolParameter("num.signed",!1)){e=t.f_getParameter("num.negSign","-")
n+=r.M(e)}if(f||t.f_getIntParameter("num.decimal",-1)!==0){e=t.f_getParameter("num.decSign")
n+=r.M(e)}e=t.f_getParameter("num.sepSign")
n+=r.M(e)+"]"
return f_clientValidator.Filter_generic(t,new RegExp(n),i,o)},Filter_number:function(t,e,n){return f_clientValidator.Filter_generic(t,/[0-9\,\-]/,e,n)},Filter_signed:function(t,e,n){return f_clientValidator.Filter_generic(t,/[0-9\-]/,e,n)},Filter_scientific:function(t,e,n){return f_clientValidator.Filter_generic(t,/[0-9\.\-eE]/,e,n)},Filter_time:function(t,e,n){return f_clientValidator.Filter_generic(t,/[0-9\:]/,e,n)},Translator_date:function(n,t,r){var e=n.f_getParameter("date.sepSign")
return e&&e.length>1&&e.indexOf(r)!=-1?e.charCodeAt(0):t},Translator_hour:function(n,t,r){var e=n.f_getParameter("hour.sepSign")
return e&&e.length>1&&e.indexOf(r)>=0?e.charCodeAt(0):t},Translator_num:function(n,t,r){var e=n.f_getParameter("num.decSign")
return e&&e.length>1&&e.indexOf(r)>=0?e.charCodeAt(0):t},Translator_removeaccent:function(o,i,f){var t=f_vb.S,e,n,r
for(e=0;e<t.length;){n=t[e++]
r=t[e++]
if(n.test(f))return r}return i},Translator_uppercase:function(n,e,t){return e>=97&&e<=122?e-32:(e>127&&f_vb.L.test(t)?e-32:e)},Translator_lowercase:function(n,e,t){return e>=65&&e<=90?e+32:(e>127&&f_vb.F.test(t)?e+32:e)},Checker_dat:function(t,s){var d=parseInt,E="Le format de saisie de date est invalide",b="VALIDATION DATE",k="0",C="",i=null,T=t.f_getBoolParameter("date.auto",!1),g,v,p,h,c,l,e,r,f,n,u,o,m,a
if(!s&&!t.f_getComponent().f_isRequired()||!s&&!T){t.f_setObject(i)
return s}g=t.f_getIntParameter("date.min",1850)
v=t.f_getIntParameter("date.max",2100)
p=t.f_getIntParameter("date.pivot",0)
h=t.f_getParameter("date.sepSign")
c="["+f_vb.M(h)+"]"
l=h.charAt(0)
e=s
u=new Date()
r=f=n=i
if(o=e.match(/^\d*$/))switch(e.length){case 8:case 6:n=e.substr(4);case 4:f=e.substr(2,2);case 2:r=e.substr(0,2)
break;case 1:r=e;case 0:break;default:e=i;}else{m="^(\\d{1,2})?"+c+"(\\d{1,2})?"+c+"?(\\d{2}|\\d{4})?$"
o=e.match(new RegExp(m))
if(o==i)e=i;else{r=o[1]
f=o[2]
n=o[3]}}if(e==i){e=s.replace(new RegExp("("+c+")","g"),l)
t.no(e)
t.fa(e)
t.f_setObject(i)
t.f_setLastError(b,E)
return i}n=n?d(n,10):u.getFullYear()
n+=n>=100?0:((n>p)?1900:2000)
f=f?d(f,10):u.getMonth()+1
r=r?d(r,10):u.getDate()
e=((r<10)?k:C)+r+l+((f<10)?k:C)+f+l+n
t.no(e)
t.fa(e)
if(n<g||n>v){t.f_setObject(i)
t.f_setLastError(b,"L'année se trouve en dehors de la période de référence")
return i}a=new Date(n,f-1,r,12,0,0,0)
if(a.getDate()==r&&a.getMonth()==f-1&&a.getFullYear()==n)t.f_setObject(a);else{t.f_setObject(i)
t.f_setLastError(b,E)
e=i}return e},Checker_dat_msa:function(n,o){var u=parseInt,i=null,v=n.f_getIntParameter("date.pivot",0),h=n.f_getParameter("date.sepSign"),s="["+f_vb.M(h)+"]",l=h.charAt(0),e=o,g,d=n.f_getBoolParameter("date.auto",!1),a,r,t,f,c
if(!o&&(!n.f_getComponent().f_isRequired()||!d)){n.f_setObject(i)
return o}a=new Date()
r=t=i
if(f=e.match(/^\d*$/))switch(g=e.length){case 6:case 4:t=e.substr(2);case 2:r=e.substr(0,2)
break;case 1:r=e;case 0:break;default:e=i;}else{c="^(\\d{1,2})?"+s+"(\\d{2}|\\d{4})?$"
f=e.match(new RegExp(c))
if(f==i)e=i;else{r=f[1]
t=f[2]}}if(e==i){e=o.replace(new RegExp("("+s+")","g"),l)
n.no(e)
n.fa(e)
n.f_setObject(i)
n.f_setLastError("VALIDATION DATE","Le format de saisie de date est invalide")
return i}t=t?u(t,10):a.getFullYear()
t+=t>=100?0:((t>v)?1900:2000)
r=r?u(r,10):a.getMonth()+1
e=((r<10)?"0":"")+r+l+t
n.f_setObject(e)
return e},Checker_dat_nai:function(a,z){var U=parseInt,ri=Math.floor,rr="VALIDATION DATE",W="0",R="Année invalide",tt="",en,u,G,E,m,t,g,d,b,f,r,i,C,v,c,k,o,T,h,e,n,s,p,j,A,l
u=null
if(!z){a.f_setObject(u)
return z}G=a.f_getParameter("date.sepSign")
E="["+f_vb.M(G)+"]"
m=G.charAt(0)
t=z
n=!1
s=tt
g=d=b=u
if(p=t.match(/^\d*$/))switch(j=t.length){case 8:case 7:case 6:case 5:b=t.substr(4);case 4:case 3:d=t.substr(2,2);case 2:g=t.substr(0,2)
break;case 1:g=t;case 0:break;default:t=u;}else{A="^(\\d{1,2})?"+E+"(\\d{1,2})?"+E+"?(\\d{1,4})?$"
p=t.match(new RegExp(A))
if(p==u)t=u;else{g=p[1]
d=p[2]
b=p[3]}}if(t==u){s="Format de saisie invalide"
t=z.replace(new RegExp("("+E+")","g"),m)
a.no(t)
a.fa(t)
a.f_setObject(u)
a.f_setLastError(rr,s)
return u}k=new Date()
C=k.getDate()
v=k.getMonth()+1
c=k.getFullYear()
f=g?U(g,10):C
r=d?U(d,10):v
i=b?U(b,10):c
if(r==0)f=0
if(f==0&&!d)r=0
T=ri(c/100)*100
h=ri(c/1000)*1000
if(r<=0||r>12){if(i<100){e=i+T
o=e-100
e=e<=c?e:o}else if(i==100)e=i+h;else if(i<850){e=i+h
n=!0
s=R}else if(i<1000)e=i+h-1000;else{e=i
if(e<1850||e>2100){n=!0
s=R}}if(!n){n=e>c
if(n&&o)e=o
if(n=e>c)s=R}if(!n&&(r>12&&r<20)){n=!0
s="Mois invalide"}t=((f<10)?W+f:tt+f)+m+((r<10)?W+r:r)+m+e
if(n){a.no(t)
a.fa(t)
a.f_setObject(u)
a.f_setLastError(rr,s)
return u}a.f_setObject(t)
return t}o=en
if(i<100){e=i+T
o=e-100}else if(i==100){e=i+h
n=!0
s=R}else if(i<850){e=i+h
n=!0
s=R}else if(i<1000)e=i+h-1000;else e=i
if(!n){l=new Date(o,r-1,f,12,0,0,0)
o=l.getFullYear()!=o||l.getMonth()!=r-1||l.getDate()!=f?en:o
l=new Date(e,r-1,f,12,0,0,0)
n=l.getFullYear()!=e||l.getMonth()!=r-1||l.getDate()!=f
if(n&&o){n=!1
e=o}else s="Date invalide"}if(!n){n=e>c||e==c&&r>v||e==c&&r==v&&f>C
if(n&&o&&e!=o){e=o
n=e>c||e==c&&r>v||e==c&&r==v&&f>C}if(n)s="Date supérieure à la date courante"}t=((f<10)?W+f:tt+f)+m+((r<10)?W+r:r)+m+e
if(n){a.no(t)
a.fa(t)
a.f_setObject(u)
a.f_setLastError(rr,s)
return u}a.f_setObject(t)
return t},Checker_hour:function(t,u){var g=parseInt,m="0",l="VALIDATION HEURE",v="",i=null,b=t.f_getBoolParameter("date.auto",!1),h,c,a,n,r,f,e,o,p,d,s
if(!u&&(!t.f_getComponent().f_isRequired()||!b)){t.f_setObject(i)
return u}h=t.f_getParameter("hour.sepSign")
c=h.charAt(0)
a="["+f_vb.M(h)+"]"
e=u
if(o=e.match(/^\d*$/))switch(p=e.length){case 6:f=e.substr(4,2);case 4:r=e.substr(2,2);case 2:n=e.substr(0,2)
break;case 1:n=e;case 0:break;default:e=i;}else{d="^(\\d{1,2})?"+a+"(\\d{1,2})?"+a+"(\\d{1,2})?$"
if(!(o=e.match(new RegExp(d))))e=i;else{n=o[1]
r=o[2]
f=o[3]}}if(e==i){e=u.replace(new RegExp("("+a+")","g"),c)
t.no(e)
t.fa(e)
t.f_setObject(i)
t.f_setLastError(l,"Le format de saisie d'heure est invalide")
return i}n=n?g(n,10):0
if(n<0||n>23){t.f_setObject(i)
t.f_setLastError(l,"Heure invalide")
return i}r=r?g(r,10):0
if(r<0||r>59){t.f_setObject(i)
t.f_setLastError(l,"Minute invalide")
return i}f=f?g(f,10):0
if(f<0||f>59){t.f_setObject(i)
t.f_setLastError(l,"Seconde invalide")
return i}e=((n<10)?m:v)+n+c+((r<10)?m:v)+r+c+((f<10)?m:v)+f
if(window.f_time)s=new f_time(n,r,f);else s=new Date(2000,0,1,n,r,f,0)
t.f_setObject(s)
return e},Checker_insee:function(r,e){var c=parseInt,a="VALIDATION INSEE",t,i,n,o,f
t=null
if(!e){r.f_setObject(t)
return e}i=e.length
n=t
if(e!=t&&e!=""&&(i==13||i==15))n=e.match(/^([125678])(\d{2})(\d{2})(\d{2}|2A|2B)(\d{3})(\d{3})(\d{2})?$/)
if(n==t||e.match(/^[78][1-9].*$/)||e.match(/^[03456789]\d{4}(2A|2B).*$/)){r.f_setLastError(a,"Le format de saisie du N° INSEE est invalide")
r.f_setObject(t)
return t}if(i==15){o=c(n[7])
f=c(e.substr(0,13).replace(/2A/,"19").replace(/2B/,"18"),10)
if(o!=97-f%97){r.f_setLastError(a,"La clé du N° INSEE est invalide")
r.f_setObject(t)
return t}}r.f_setObject(e)
return e},Checker_num:function(r,p){var b=f_vb,d="0",u="",l,t,o,c,h,f,m,v,n,s,i,a,e,g
l=null
if(!p){r.f_setObject(l)
return p}t=p
o=r.f_getIntParameter("num.cutDecimal",-1)
c=r.f_getIntParameter("num.decimal",-1)
h=r.f_getParameter("num.decSign")
f=r.f_getParameter("num.negSign","-")
if(m=r.f_getParameter("num.sepSign"))t=t.replace(new RegExp("["+b.M(m)+"]","g"),u)
v="^("+b.M(f)+"?)(\\d*)(["+b.M(h)+"]?)(\\d*)$"
if(t.lastIndexOf(f)>0)t=f+t.split(f).join(u)
if(!(n=t.match(new RegExp(v)))){r.no(t)
r.fa(t)
r.f_setLastError("VALIDATION NUMERIQUE","Le format de saisie est invalide")
r.f_setObject(l)
return l}s=n[1]
i=n[2]?n[2]:d
a=n[3]?h.charAt(0):u
e=n[4]?n[4]:u
if(o>0&&e.length>o)e=e.substring(0,o);else if(o==0)a=e=u
if(i.length>1&&(n=i.match(new RegExp("^(0+)(\\d*)$"))))i=n[2]?n[2]:d
if(c<1)c=1
for(;e.length>c;){if(e.charAt(e.length-1)!=d)break
e=e.substring(0,e.length-1)}if(a&&!e.length)e=d
t=s+i+a+e
g=parseFloat(s+i+"."+e)
r.f_setObject(g)
return t},Checker_trim:function(n,e){if(!e){n.f_setObject(null)
return e}var t=f_core.rs(e)
n.f_setObject(t)
return t},Formatter_insee:function(r,e){var t=e.length,n=/^(\d{1})(\d{2})(\d{2})(\d{1}[0-9AB]{1})(\d{3})(\d{3})(\d{2})?$/
return e.replace(n,t==15?"$1 $2 $3 $4 $5 $6 $7":"$1 $2 $3 $4 $5 $6")},Formatter_date:function(t){var r=t.f_getObject(),n,e
if(!r)return""
n=t.f_getParameter("date.format")
e=f_dateFormat.FormatDate(r,n)
t.no(e)
return e},Formatter_num:function(a,d){var s=f_vb,g="0",r="",u=d,o=a.f_getIntParameter("num.decimal",-1),h=a.f_getParameter("num.decSign"),v=a.f_getParameter("num.negSign","-"),f,l,i,c,e,n,t
if(f=a.f_getParameter("num.sepSign"))u=u.replace(new RegExp(s.M(f),"g"),r)
l="^("+s.M(v)+"?)(\\d*)(["+s.M(h)+"]?)(\\d*)$"
if(!(i=u.match(new RegExp(l))))return
c=i[1]
e=i[2]
n=i[3]
t=i[4]
for(;e.length>1&&e.charAt(0)==g;e=e.substring(1));if(o===0)n=t=r;else if(o>0){n=!0
if(t.length>o)t=t.substring(0,o);else for(;t.length<o;)t+=g;}if(n)n=h.charAt(0)
if(!f||e.length<4)return c+e+n+t
if(!f)f=" "
e=e.split(r).reverse().join(r).replace(/(\d{3})/g,"$1"+s.M(f.charAt(0))).split(r).reverse().join(r)
e=e.replace(/^(\s)/,r)
return c+e+n+t},Formatter_padding:function(f,o){var s=f.f_getComponent(),r,i,e,c,a,n,t
if(typeof s.f_getMaxTextLength=="function"){r=s.f_getMaxTextLength()
if(r>0&&r<100000){i=r-o.length
if(i>0){e=f.f_getParameter("padder.value"," ")
c=f.f_getBoolParameter("padder.leftSide",!0)
a=f.f_getBoolParameter("padder.modifyInput",!0)
if(e.length>1)e=e[0]
n=""
for(;i>0;i--)n+=e;if(c)t=n+o;else t=o+n
if(a)f.no(t)
return t}}}return o},Behavior_required:function(n,e){var t=e!=null&&e!=""
if(!t)f_vb.O(n,"required.error","REQUIRED_ERROR")
return t},O:function(n,i,c,r){var o=f_core,s=null,a=f_resourceBundle.Get(f_vb),t=n.f_getStringParameter(i+".summary"),e,f
if(!t)t=a.f_get(c+"_SUMMARY")
if(t&&r)t=o.he(t,r)
if(!(e=n.f_getStringParameter(i+".detail")))e=a.f_formatParams(c+"_DETAIL",s,s)
if(e&&r)e=o.he(e,r)
f=n.f_getStringParameter(i+".severity")
n.f_setLastError(t,e,f)},Behavior_forcefill:function(n,t){var r=!0,e=n.f_getComponent().f_getMaxLength()
if(!e)return!0
if(!(r=t&&t.length==e))f_vb.O(n,"required.error","REQUIRED_ERROR",[e])
return r},Processor_autoTab:function(f,o){var i=f_core,t,r,e,n
if(!f_key.IsPrintable(o))return!0
t=f.f_getComponent()
if(!(r=t.maxLength))return!0
e=f.ul()
if(!e.length)return!0
if(e.length!=r)return!0
if(!(n=i.de(t)))return!0
i.SetFocus(n,!0)
return!1},Converter_dat:{f_getAsObject:function(t){var e=t.f_getObject()
return e instanceof Date?e:null},f_getAsString:function(n,t){var r,e
if(!(t instanceof Date))return r
e=n.f_getParameter("date.sepSign")
if(e.length>1)e=e.charAt(0)
return t.getDate()+e+(t.getMonth()+1)+e+t.getFullYear()}},Converter_hour:{f_getAsObject:function(t){var e=t.f_getObject()
return e instanceof Date?e:(window.f_time&&e instanceof f_time?e:null)},f_getAsString:function(o,e){var r=Math.floor,t=o.f_getParameter("hour.sepSign"),f,n,i
if(t.length>1)t=t.charAt(0)
if(e instanceof Date)return e.getHours()+t+e.getMinutes()+t+e.getSeconds()
if(window.f_time&&e instanceof f_time)return e.f_getHours()+t+e.f_getMinutes()+t+e.f_getSeconds()
if(typeof e=="number"){f=r(number/(60*60*1000))
n=r(number/(60*1000))%60
i=r(number/1000)%60
return f+t+n+t+i}return String(e)}},Converter_num:{f_getAsObject:function(c,o){var a=f_vb,u=c.f_getParameter("num.decSign"),f=c.f_getParameter("num.negSign","-"),l,n,t,s,e,i,r
if(l=c.f_getParameter("num.sepSign"))o=o.replace(new RegExp(a.M(l),"g"),"")
n="^"
if(f)n+="("+a.M(f)+"?)"
n+="(\\d*)"
if(u)n+="(["+a.M(u)+"]?)(\\d*)"
n+="$"
if(!(t=o.match(new RegExp(n))))return null
if(f){s=t[1]
e=t[2]
i=t[4]}else{e=t[1]
i=t[3]}for(;e.length>1&&e.charAt(0)=="0";e=e.substring(1));if(i)r=parseFloat(e+"."+i);else r=parseInt(e)
if(s)r=-r
return r},f_getAsString:function(f,o){var t=o,r,e,i,n
if(typeof t!="number")t=parseFloat(t)
r=""
if(t<0){if(e=f.f_getParameter("num.negSign","-"))r+=e
t=-t}i=f.f_getIntParameter("num.decimal",-1)
if(i>=0)n=t.toFixed(i);else n=String(t)
if(e=f.f_getParameter("num.decSign")){e=e[0]
if(e!=".")n=n.replace("/./g",e)}return r+n}}}});