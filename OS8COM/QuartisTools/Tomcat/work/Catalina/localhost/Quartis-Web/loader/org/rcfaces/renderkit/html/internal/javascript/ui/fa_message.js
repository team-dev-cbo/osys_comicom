new f_aspect("fa_message",{members:{fa_message:function(){var e=this,t=f_messageContext.Get(e)
e._1i=t
t.vy(e)
if(t.f_containsMessagesFor(e.id))e.se(t)},f_finalize:function(){var n,e=this,t
if(t=e._1i){e._1i=n
t.pg(e)}},gi:function(){var n=f_core,f="_warn",o="_info",a="_fatal",r=" ",c="_error",s,e=this,i=e._pE,t
if(i!==s)return i
e._sl=n.D(e,"fatalStyleClass")
e._al=n.D(e,"errorStyleClass")
e._3_=n.D(e,"warnStyleClass")
e._7l=n.D(e,"infoStyleClass")
e._pE=i=e._sl||e._al||e._3_||e._7l
if(i)return!0
t=e.ue()
e._sl=t+a
e._al=t+c
e._3_=t+f
e._7l=t+o
if(t=e.f_getStyleClass()){e._sl+=r+t+a
e._al+=r+t+c
e._3_+=r+t+f
e._7l+=r+t+o}return!1},f_getFatalStyleClass:function(){this.gi()
return this._sl},f_getErrorStyleClass:function(){this.gi()
return this._al},f_getWarnStyleClass:function(){this.gi()
return this._3_},f_getInfoStyleClass:function(){this.gi()
return this._7l},lo:function(r){var n=null,t=this,e=n
switch(r){case 3:if(e=t.f_getFatalStyleClass())return e;case 2:if(e=t.f_getErrorStyleClass())return e;case 1:if(e=t.f_getWarnStyleClass())return e;case 0:if(e=t.f_getInfoStyleClass())return e;}return n}}});