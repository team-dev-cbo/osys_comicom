new f_class("f_dateFormat",{statics:{INVALID_DATE_ERROR:"invalid.date",INVALID_MONTH_ERROR:"invalid.month",INVALID_YEAR_ERROR:"invalid.year",FormatDate:function(f,v,d){var c="0",m="'",h,a,n,t,i,o,u,s,r,l,e,p,g
if(!d)d=f_locale.Get()
if(!v&&!(v=d.f_getDateFormat()))return String(f)
h=v.length
n=0
t=""
for(i=0;i<=h;i++){o=0
if(i<h){o=v.charAt(i)
if(o==a){n++
continue}if(!a){a=o
n=1
if(o!=m)continue}}if(!n)break
u=2
if(n<3)u=0;else if(n<4)u=1
switch(a){case"y":s=f.getFullYear()
if(n<4){s%=100
if(n>1&&s<10)s=c+s}t+=s
break;case"M":r=f.getMonth()
if(n<2){t+=r+1
break}if(n<3){t+=r>8?r+1:c+(r+1)
break}t+=d.f_getMonthName(r,u)
break;case"d":l=f.getDate()
if(n<2){t+=l
break}t+=l>9?l:c+l
break;case"H":e=f.getHours()
if(n<2){t+=e
break}t+=e>9?e:c+e
break;case"k":e=(f.getHours()+23)%24+1
if(n<2){t+=e
break}t+=e>9?e:c+e
break;case"K":e=f.getHours()%12
if(n<2){t+=e
break}t+=e>9?e:c+e
break;case"h":e=(f.getHours()+11)%12+1
if(n<2){t+=e
break}t+=e>9?e:c+e
break;case"a":e=f.getHours()
if(e<1||e>12){t+="PM"
break}t+="AM"
break;case"m":r=f.getMinutes()
if(n<2){t+=r
break}t+=r>9?r:c+r
break;case"E":p=f.getDay()
t+=d.f_getDayName(p,u)
break;case"z":t+=f.getTimezoneOffset()
break;case m:break;default:for(;n;n--)t+=a;}if(!o)break
if(o!=m){a=o
n=1
continue}for(i++;i<h;i++){g=v.charAt(i)
if(g!=m){t+=g
continue}if(i+1<h&&v.charAt(i+1)==g){t+=g
i++
continue}break}n=1
a=o}return t},ParseDate:function(a,g,z,v){var T="Invalid char at position '",p="y",C="0",R="') for token '",b="' nb='",G="M",k="' (expression='",E="d",m="'.",d,h,t,e,f,i,n,r,u,s,l,o,c
if(!g){if(!v)v=f_locale.Get()
if(!(g=v.f_getDateFormat()))return new Date(a)}h=g.length
e=f=0
for(u=0;u<=h;u++){s=0
if(u<h){s=g.charAt(u)
if(s==t){e++
continue}if(!t){t=s
e=1
continue}}switch(t){case p:case G:case E:e=l=0
for(;f<a.length;){o=a.charAt(f)
if(o<C||o>"9")break
e=e*10+(o-C)
f++
l++}if(l<1)throw new Error(T+f+k+a+R+t+b+e+m)
switch(t){case p:i=e
break;case G:n=e
break;case E:r=e
break;}break;default:for(;e;e--){if(f>=a.length)throw new Error("Not enough character '"+t+"' for expression '"+a+m)
o=a.charAt(f++)
if(o!=t)throw new Error(T+f+k+a+"', character '"+o+R+t+b+e+m)}break;}t=s
e=1}if(r===d||r<1)r=1
if(n===d)n=0;else if(n>0)n--
if(i===d)throw new Error("Invalid parse date for expression '"+a+"' format='"+g+"' year="+i+" month="+n+" date="+r)
if(i<100)i=f_dateFormat.ResolveYear(i,n,r,z,v)
c=new Date(i,n,r)
if(c.getDate()!=r)throw new Error("invalid.date")
if(c.getMonth()!=n)throw new Error("invalid.month")
if(c.getFullYear()!=i)throw new Error("invalid.year")
return c},ResolveYear:function(e,f,o,t,i){var n,r
if(e>=100)return e
if(!t){if(!i)i=f_locale.Get()
if(!(t=f_core.nf(i.f_getTwoDigitYearStart())))t=new Date(1960,0,1)}n=t.getFullYear()
e+=n-n%100
r=new Date(e,f,o)
if(r.getTime()<t.getTime())e+=100
return e}}});