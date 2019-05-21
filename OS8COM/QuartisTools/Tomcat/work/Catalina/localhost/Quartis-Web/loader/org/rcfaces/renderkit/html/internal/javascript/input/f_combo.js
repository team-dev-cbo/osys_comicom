new f_class("f_combo",{extend:f_abstractList,aspects:[fa_selectionProvider],members:{ef:function(){var e=this
if(f_core.Q(e,"noSelection"))e.selectedIndex=-1
e.f_super(arguments)},f_getValue:function(n){var r=this.options,e,t
for(e=0;e<r.length;e++){t=r[e]
if(!t.selected)continue
return n?e:t.value}return n?-1:null},f_setValue:function(f,o,i){var a=this,r=a.options,e,t,n
if(o){if(i)for(e=0;e<r.length;e++){t=r[e]
if(!t.selected||e==o)continue
t.selected=!1}return r[f].selected=!0}n=!1
for(e=0;e<r.length;e++){t=r[e]
if(t.value!=f){if(i&&t.selected)t.selected=!1
continue}t.selected=!0
if(!i)return!0
n=!0}if(!n)a.selectedIndex=-1
return n},f_getSelection:function(){return this.f_getValue()},f_setSelection:function(e){this.f_setValue(e,!1,!0)}}});