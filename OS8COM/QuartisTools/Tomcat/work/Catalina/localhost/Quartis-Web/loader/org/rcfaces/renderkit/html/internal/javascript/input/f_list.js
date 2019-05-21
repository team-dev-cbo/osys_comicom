new f_class("f_list",{extend:f_abstractList,aspects:[fa_selectionProvider],members:{f_getValue:function(i){var n=this.options,r=[],e,t
for(e=0;e<n.length;e++){t=n[e]
if(!t.selected)continue
r.push(i?e:t.value)}return r},f_setValue:function(n,a){var t,e,r,i,o,f
if(!n.length)return
t=this.options
if(!t.length)return
if(a){for(e=0;e<n.length;e++){r=n[e]
if(r<0||r>=t.length)continue
t[r].selected=!0}return}i=[]
for(e=0;e<t.length;e++)i[o.value]=o=t[e];for(e=0;e<n.length;e++){f=n[e]
if(i[f])i[f].selected=!0}},f_getSelection:function(){return this.f_getValue()},f_setSelection:function(e){this.f_setValue(e,!1,!0)},f_getSelectedIndexes:function(){return this.f_getValue(!0)},f_setSelectedIndexes:function(e){this.f_setValue(e,!0)},f_isMultiple:function(){return this.multiple==!0},f_setMultiple:function(e){var t=this
if(e==t.multiple)return
t.multiple=e
t.P("multiple",e)}}});