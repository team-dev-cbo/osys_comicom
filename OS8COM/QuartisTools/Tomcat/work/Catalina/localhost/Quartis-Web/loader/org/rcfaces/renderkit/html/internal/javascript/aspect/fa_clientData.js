new f_aspect("fa_clientData",{members:{f_getClientData:function(n){var r,t=this,e=t._y
if(e===r)t._y=e=f_core.ua(t)
return e[n]},f_getClientDatas:function(){return this.f_getClientDataSet()},f_getClientDataSet:function(){var i,r=this,n,t,e
if(r._y===i)r.f_getClientData("")
n=r._y
t={}
for(e in n)t[e]=n[e];return t},f_setClientData:function(){var n=arguments,c=n.length,s,f=this,r,t,e,i,o,a
if(f._y===s)f.f_getClientData("")
r=f._y
if(!f.tr){for(t=0;t<c;){e=n[t++]
r=n[t++]
r[e]=a}return}i=f._om
o=f._C8
if(!i){f._om=i={}
f._C8=o={}}for(t=0;t<c;){e=n[t++]
if(t<c)a=n[t++]
if(!r[e]&&!i[e]&&!o[e])o[e]=!0
if(!a){delete r[e]
if(o[e]){delete i[e]
continue}i[e]="removed"
continue}i[e]="changed"
r[e]=a}},ir:{after:function(){var f=this,i=f._om,t,r,e,o,n
if(!i)return
t=[]
r=f._y
for(e in i){o=i[e]
if(o=="removed"){t.push("R",e)
continue}n=r[e]
t.push("S",e,n)}f.P("data",t,!0)}}}});