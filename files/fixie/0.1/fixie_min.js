var fixie=function(){function c(a){if(!/^\s*$/.test(a.innerHTML)){var d=a.children;if(d.length){for(var e=0;e<d.length;e++){c(d[e])}}return}switch(a.nodeName.toLowerCase()){case"b":case"em":case"strong":case"button":case"th":case"td":case"title":case"tr":a.innerHTML=g();break;case"header":case"cite":case"caption":case"mark":case"q":case"s":case"u":case"small":case"span":case"code":case"pre":case"li":case"dt":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":a.innerHTML=k();break;case"footer":case"aside":case"summary":case"blockquote":case"p":a.innerHTML=m();break;case"article":case"section":a.innerHTML=n();break;case"a":a.href="http://ryhan.me/";a.innerHTML="www."+g()+f(g())+".com";break;case"img":var h=a.getAttribute("src")||a.src;var i=a.getAttribute("fixie-temp-img");if(h==""||h==null||i==true||i=="true"){var j=a.getAttribute("width")||a.width||(a.width=250);var q=a.getAttribute("height")||a.height||(a.height=100);var r=a.getAttribute("title")||"";a.src=b.replace("${w}",j).replace("${h}",q).replace("${text}",r);a.setAttribute("fixie-temp-img",true)}break;case"ol":case"ul":a.innerHTML=o();break;case"dl":a.innerHTML=p();break;case"hr":break;default:a.innerHTML=l()}}function d(a){for(var b=0;b<a.length;b++){c(a[b])}}function f(a){return a.charAt(0).toUpperCase()+a.slice(1)}function g(){return e[h(0,e.length-1)]}function h(a,b){return Math.round(Math.random()*(b-a)+a)}function i(a,b,c,d){d||(d=" ");var e=h(a,b);var g=[];for(var i=0;i<e;i++){g.push(c())}return f(g.join(d))}function j(a,b,c,d){var e="<"+d+">";var f="</"+d+">";return e+i(a,b,c,f+e)+f}function k(){return i(3,5,g)}function l(){return i(4,9,g)+"."}function m(){return i(3,7,l)}function n(){return j(3,7,m,"p")}function o(){return j(4,8,k,"li")}function p(){var a="";for(var b=0,c=h(3,5);b<c;b++){a+=j(1,1,k,"dt")+j(1,1,k,"dd")}console.log(a);return a}function q(a){if(!document.querySelectorAll){return false}try{d(document.querySelectorAll(a));return true}catch(b){return false}}var a;var b="http://placehold.it/${w}x${h}&text=${text}";if(typeof document.getElementsByClassName!="function"){document.getElementsByClassName=function(a){var b=[];var c=new RegExp("\\b"+a+"\\b");var d=this.getElementsByTagName("*");for(var e=0;e<d.length;e++){var f=d[e].className;if(c.test(f))b.push(d[e])}return b}}var e=["I","8-bit","ethical","reprehenderit","delectus","non","latte","fixie","mollit","authentic","1982","moon","helvetica","dreamcatcher","esse","vinyl","nulla","Carles","bushwick","bronson","clothesline","fin","frado","jug","kale","organic","local","fresh","tassel","liberal","art","the","of","bennie","chowder","daisy","gluten","hog","capitalism","is","vegan","ut","farm-to-table","etsy","incididunt","sunt","twee","yr","before","gentrify","whatever","wes","Anderson","chillwave","dubstep","sriracha","voluptate","pour-over","esse","trust-fund","Pinterest","Instagram","DSLR","vintage","dumpster","totally","selvage","gluten-free","brooklyn","placeat","delectus","sint","magna","brony","pony","party","beer","shot","narwhal","salvia","letterpress","art","party","street-art","seitan","anime","wayfarers","non-ethical","viral","iphone","anim","polaroid","gastropub","city","classy","original","brew"];d(document.getElementsByClassName("fixie"));return{init:function(){if(a){q(a)}else{d(document.getElementsByClassName("fixie"))}},setImagePlaceholder:function(a){b=a;return this},setSelector:function(b){if(typeof b==="object"){a=b.join(",")}else if(b){a=b}return this}}}()