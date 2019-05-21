new f_class("f_json",{statics:{w:{"":"\\b","\t":"\\t","\n":"\\n","":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},S:function(e,t){var u=f_json,l=":",h="-",v=",",i='"',a,n,c,r
a=null
switch(typeof e){case"string":if(/["\\\x00-\x1f]/.test(e)){t.push(i,e.replace(/([\x00-\x1f\\"])/g,function(d,g){var o
if(o=u.w[g])return o
o=g.charCodeAt()
return"\\u00"+Math.floor(o/16).toString(16)+(o%16).toString(16)}),i)
return}t.append(i,e,i)
return;case"boolean":t.push(e)
return;case"number":t.push(isFinite(e)?e:a)
return;case"object":if(e===a){t.push(e)
return}if(e instanceof Array){t.push("[")
for(n=0;n<e.length;n++){if(n>0)t.push(v)
u.S(e[n],t)}t.push("]")
return}if(e instanceof Date){function f(s){return s<10?"0"+s:s}
t.push(i,e.getFullYear(),h,f(e.getMonth()+1),h,f(e.getDate()),"T",f(e.getHours()),l,f(e.getMinutes()),l,f(e.getSeconds()),i)
return}t.push("{")
c=!0
for(r in obj2){if(!obj2.hasOwnProperty(r))continue
if(c)c=!1;else t.push(v)
t.push(r,l)
u.S(obj2[r],t)}t.push("}")
return;}return a},Parse:function(i,f){function r(o,e){if(e&&typeof e==="object")for(var t in e)if(e.hasOwnProperty(t))e[t]=r(t,e[t]);return f(o,e)}
if(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(i.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""))){var n=f_core.of("("+i+")")
if(typeof f==="function")n=r("",n)
return n}throw new SyntaxError("parseJSON")},Format:function(t,n){var e=[]
f_json.S(t,e,n)
return e.join("")}}});