new f_class("f_box",{extend:f_component,aspects:[fa_asyncRender,fa_subMenu,fa_overStyleClass],members:{ef:function(){var e=this,t
e.f_super(arguments)
if(t=e.f_getSubMenuById("#body"))e.Z("mousedown",e._lh)},f_setDefaultMenuId:function(e){this._uC=e},f_getDefaultMenuId:function(){var e=this._uC
return e?e:null},_lh:function(n){var i=this,r=n.f_getJsEvent(),f=f_core.an(r),e,t
if(!f)return!0
if(!(e=i.f_getDefaultMenuId()))e="#body"
if(t=i.f_getSubMenuById(e)){t.f_open(r)
return n.f_preventDefault()}return!0},a_:function(){return null},ft:function(){var t=this,r=t.gf(),i=null,e,n
if(r)i="_over"
e=t.fe(i)
if(r&&(n=t.f_getOverStyleClass()))e+=" "+n
if(t.className!=e)t.className=e}}});