new f_class("f_gridColumn",{extend:f_object,aspects:[fa_eventTarget],statics:{w:{init:"init",selection:"selection",dblClick:"dblclick",propertyChange:"propertyChange",user:"user"}},members:{f_gridColumn:function(){var n,e=this,t
if(t=e._oa)e.au(f_gridColumn.w,t)
if(e._lr){e._lr=n
e.f_fireEvent("init")}},f_getId:function(){return this._T},f_getGrid:function(){return this._t},f_isVisible:function(){return this._C},f_isSortable:function(){return!!this._8e},f_getColumnOrderState:function(){if(this._5e===!0)return 1;else if(this._5e===!1)return-1
return 0}}});