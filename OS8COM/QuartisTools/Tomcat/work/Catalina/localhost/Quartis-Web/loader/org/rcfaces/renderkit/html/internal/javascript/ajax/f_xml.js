new f_class("f_xml",{statics:{GetChildElements:function(c,f,o,a){var i=[],n=c.childNodes,t,e,r
if(!n||!n.length)return i
for(t=0;t<n.length;t++){e=n[t]
if(e.nodeType!=1)continue
if(f&&e.nodeName!=f)continue
if(o){if(!(r=e.getAttributeNode(o)))continue
if(a&&r.nodeValue!=a)continue}i.push(e)}return i},GetFirstChildElement:function(f,r){var i=null,n=f.childNodes,t,e
if(!n||!n.length)return i
for(t=0;t<n.length;t++){e=n[t]
if(e.nodeType!=1)continue
if(r&&e.nodeName!=r)continue
return e}return i},GetValue:function(o,a){var f=null,i=o.childNodes,e,r,n,t
if(!i||!i.length)return value
e=f
for(r=0;r<i.length;r++){n=i[r]
if(n.nodeType!=3&&n.nodeType!=4)continue
if(!(t=n.nodeValue))continue
if(!e){e=t
continue}e+=t}return e==f?a:e},Object:function(){var t=f_core,n=null,e=n
if(t.K())e=new ActiveXObject("microsoft.XMLDOM");else if(t.nt())e=document.implementation.createDocument("","",n)
if(!e)throw"f_xml: failed to create DOM object"
return e},FromString:function(n){var t=f_core,e
if(t.K()){e=new ActiveXObject("microsoft.XMLDOM")
e.loadXML(n)}else if(t.nt()){e=new DOMParser()
e=e.parseFromString(n,"text/xml")}if(!e)throw"f_xml: failed to create DOM object from string"
return e},Serialize:function(u){var e="",o=u.childNodes,i,t,n,a,r,c,s,f
if(!o||!o.length)return e
for(i=0;i<o.length;i++){t=o[i]
n=t.nodeValue
switch(t.nodeType){case 1:e+="<"+t.tagName
a=t.attributes
for(r=0;r<a.length;r++){c=a[r]
e+=" "+c.nodeName+'="'
if(s=c.nodeValue)e+=s
e+='"'}f=f_xml.serialize(t)
if(!f.length){e+="/>"
break}e+=">"+f+"</"+t.tagName+">"
break;case 3:e+=n
break;case 4:e+="<![CDATA["+n+"]]>"
break;case 7:e+="<?xml "+n+"?>"
break;case 8:e+="<!-- "+n+" -->"
break;default:break;}}return e}}});