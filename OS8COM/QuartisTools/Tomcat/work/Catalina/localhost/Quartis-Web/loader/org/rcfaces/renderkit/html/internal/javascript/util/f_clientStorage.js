new f_class("f_clientStorage",{extend:f_object,statics:{COOKIE_STORAGE_TYPE:1,FLASH_STORAGE_TYPE:2,USER_DATA_STORAGE_TYPE:4,DOM_STORAGE_TYPE:8,SERVER_STORAGE_STYPE:16,Get:function(){var f=arguments,i=f_clientStorage,r=i.S,n,t,e
if(!r)i.S=r={}
for(n=0;!n||n<f.length;n++){if(!(t=f[n])){if(e=i.L)return e
t=-1}else{if(e=r[t])return e}if(!(e=i.w(r,t)))continue
if(!t)i.L=e
return r[e.f_getStorageType()]=e}return null},w:function(t,r){var a=f_flashClientStorage,f=f_userDataClientStorage,n=f_class,i=f_domClientStorage,c=f_clientStorage,o=f_cookieClientStorage,e
if(r&8&&n.S("f_domClientStorage")){if(t&&(e=t[8]))return e
if(i.w())return i.f_newInstance()}if(r&4&&n.S("f_userDataClientStorage")){if(t&&(e=t[4]))return e
if(f.w())return f.f_newInstance()}if(r&2&&n.S("f_flashClientStorage")){if(t&&(e=t[2]))return e
if(a.w())return a.f_newInstance()}if(r&1&&n.S("f_cookieClientStorage")){if(t&&(e=t[1]))return e
if(o.bd())return o.f_newInstance()}if(r&c.SERVER_STORAGE_TYPE&&n.S("f_serverClientStorage")){if(t&&(e=t[c.SERVER_STORAGE_TYPE]))return e
if(f_serverClientStorage.bd())return f_serverClientStorage.f_newInstance()}return null},Finalizer:function(){var e=f_clientStorage,t
e.L=e.S=t}}});