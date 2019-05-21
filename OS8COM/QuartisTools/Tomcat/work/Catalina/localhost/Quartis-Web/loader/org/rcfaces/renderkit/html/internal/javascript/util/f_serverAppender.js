new f_class("f_serverAppender",{extend:f_object,aspects:[fa_abstractAppender],statics:{Initializer:function(){this.f_newInstance()}},members:{f_serverAppender:function(){var e=this
e.f_super(arguments)
e._we=!0
f_log.L(e)},f_finalize:function(){var n,e=this,t
e._we=n
if(t=e._D){e._D=n
window.clearTimeout(t)}e._oa=n},f_doAppend:function(n){var t=this,e
if(!t._we)return
if(!(e=t._oa))t._oa=e=[]
e.push(n)
t._3g()},_4E:function(){var u=window,o,c=this,i,n,t,e,r,s,a,f
c._D=o
i=c._oa
if(!i||i.length<1)return
c._oa=[]
n={}
for(t=0;t<i.length;t++){e=i[t]
if(e.name)n["name"+t]=e.name
if(e.level)n["level"+t]=e.level
if(e.message)n["message"+t]=e.message
if(e.fileName)n["fileName"+t]=e.fileName
if(e.lineNumber)n["lineNumber"+t]=e.lineNumber
if(e.date)n["date"+t]=e.date.getTime()
if(r=e.exception){if(typeof r!="string")r=r.toString()
n["exception"+t]=r}}try{c._h3=u.__f=!0
s=f_env.rn()
a=new f_httpRequest(document,s,null,!0)
f=c
a.f_setListener({onError:function(){f._h3=o
f._3g()},onLoad:function(){f._h3=o
f._3g()}})
a.f_setRequestHeader("X-Camelia","log.append")
a.f_doFormRequest(n)}finally{u.__f=o}},_3g:function(){var r,t=this,n=t._oa,e
if(!n||n.length<1||t._D!==r||t._h3)return
e=t
t._D=window.setTimeout(function(){e._4E.call(e)
e=null},500)}}});