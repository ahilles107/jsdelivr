(function(a){if(!Modernizr.genericDOM){var f=document,j,i,p=/<([\w:]+)/,k={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||k[(p.exec(a)||["",""])[1].toLowerCase()])return a;if(!i){j=f.body;if(!j)return a;i=f.createElement("div");i.style.display="none"}var l=i.cloneNode(!1);j.appendChild(l);l.innerHTML=a;j.removeChild(l);return l.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,f,j,i,p){var k=f.modules,o=/\s*,\s*/,l={},C={},r={},h={},x={},A=a.fn.val,y=function(e,b,c,d,g){return g?A.call(a(e)):A.call(a(e),c)};a.fn.val=function(e){var b=this[0];arguments.length&&null==e&&(e="");if(!arguments.length)return!b||1!==b.nodeType?A.call(this):a.prop(b,"value",e,"val",!0);if(a.isArray(e))return A.apply(this,arguments);var c=a.isFunction(e);return this.each(function(d){b=this;1===b.nodeType&&(c?(d=e.call(b,d,a.prop(b,"value",p,"val",
!0)),null==d&&(d=""),a.prop(b,"value",d,"val")):a.prop(b,"value",e,"val"))})};var v="_webshimsLib"+Math.round(1E3*Math.random()),q=function(e,b,c){e=e.jquery?e[0]:e;if(!e)return c||{};var d=a.data(e,v);c!==p&&(d||(d=a.data(e,v,{})),b&&(d[b]=c));return b?d&&d[b]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(e){a.fn[e.name]=function(){return this.map(function(){var b=q(this,
"shadowData");return b&&b[e.prop]||this})}});["removeAttr","prop","attr"].forEach(function(e){l[e]=a[e];a[e]=function(b,c,d,g,t){var u="val"==g,f=!u?l[e]:y;if(!b||!C[c]||1!==b.nodeType||!u&&g&&"attr"==e&&a.attrFn[c])return f(b,c,d,g,t);var E=(b.nodeName||"").toLowerCase(),k=r[E],o="attr"==e&&(!1===d||null===d)?"removeAttr":e,h,i,n;k||(k=r["*"]);k&&(k=k[c]);k&&(h=k[o]);if(h){if("value"==c)i=h.isVal,h.isVal=u;if("removeAttr"===o)return h.value.call(b);if(d===p)return h.get?h.get.call(b):h.value;h.set&&
("attr"==e&&!0===d&&(d=c),n=h.set.call(b,d));if("value"==c)h.isVal=i}else n=f(b,c,d,g,t);if((d!==p||"removeAttr"===o)&&x[E]&&x[E][c]){var j;j="removeAttr"==o?!1:"prop"==o?!!d:!0;x[E][c].forEach(function(a){if(!a.only||(a.only="prop"==e)||"attr"==a.only&&"prop"!=e)a.call(b,d,j,u?"val":o,e)})}return n};h[e]=function(b,c,d){r[b]||(r[b]={});r[b][c]||(r[b][c]={});var g=r[b][c][e],t=function(a,b,g){return b&&b[a]?b[a]:g&&g[a]?g[a]:"prop"==e&&"value"==c?function(a){return d.isVal?y(this,c,a,!1,0===arguments.length):
l[e](this,c,a)}:"prop"==e&&"value"==a&&d.value.apply?function(d){var a=l[e](this,c);a&&a.apply&&(a=a.apply(this,arguments));return a}:function(d){return l[e](this,c,d)}};r[b][c][e]=d;if(d.value===p){if(!d.set)d.set=d.writeable?t("set",d,g):f.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+b;}:a.noop;if(!d.get)d.get=t("get",d,g)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=t(a,g))})}});var w=!a.browser.msie||8<parseInt(a.browser.version,10),n=function(){var a=f.getPrototypeOf(i.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(c,d,g){var t=i.createElement(c),u=f.getPrototypeOf(t);if(w&&u&&a!==u&&(!t[d]||!b.call(t,d))){var k=t[d];g._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k};u[d]=g.value}else g._supvalue=function(){var a=q(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},s.extendValue(c,d,g.value);g.value._supvalue=g._supvalue}}(),s=function(){var e={};f.addReady(function(d,b){var c={},k=function(e){c[e]||(c[e]=a(d.getElementsByTagName(e)),
b[0]&&a.nodeName(b[0],e)&&(c[e]=c[e].add(b)))};a.each(e,function(d,a){k(d);!a||!a.forEach?f.warn("Error: with "+d+"-property. methods: "+a):a.forEach(function(a){c[d].each(a)})});c=null});var b,c=a([]),d=function(d,c){e[d]?e[d].push(c):e[d]=[c];a.isDOMReady&&(b||a(i.getElementsByTagName(d))).each(c)};return{createTmpCache:function(d){a.isDOMReady&&(b=b||a(i.getElementsByTagName(d)));return b||c},flushTmpCache:function(){b=null},content:function(b,c){d(b,function(){var d=a.attr(this,c);null!=d&&a.attr(this,
c,d)})},createElement:function(a,b){d(a,b)},extendValue:function(b,c,e){d(b,function(){a(this).each(function(){q(this,"propValue",{})[c]=this[c];this[c]=e})})}}}(),B=function(a,b){if(a.defaultValue===p)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(f,{getID:function(){var e=(new Date).getTime();return function(b){var b=a(b),c=b.attr("id");c||(e++,c="ID-"+e,b.attr("id",c));return c}}(),extendUNDEFProp:function(e,
b){a.each(b,function(a,d){a in e||(e[a]=d)})},createPropDefault:B,data:q,moveToFirstEvent:function(){var e=a._data?"_data":"data";return function(b,c,d){if((b=(a[e](b,"events")||{})[c])&&1<b.length)c=b.pop(),d||(d="bind"),"bind"==d&&b.delegateCount?b.splice(b.delegateCount,0,c):b.unshift(c)}}(),addShadowDom:function(e,b,c){c=c||{};e.jquery&&(e=e[0]);b.jquery&&(b=b[0]);if(!c.shadowFocusElement)c.shadowFocusElement=b;var d=a.data(e,v)||a.data(e,v,{}),g=a.data(b,v)||a.data(b,v,{});d.hasShadow=b;g.nativeElement=
e;g.shadowData=d.shadowData={nativeElement:e,shadowElement:b,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){q(this,"shadowData",g.shadowData)});if(c.data)d.shadowData.data=c.data,g.shadowData.data=c.data;c=null},propTypes:{standard:function(a){B(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){B(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(e,b){"string"==typeof b&&(b=b.split(o));b.forEach(function(b){f.defineNodeNamesProperty(e,b,{prop:{set:function(d){a.attr(this,b,d)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(e,b,c){C[b]=!0;if(c.reflect)f.propTypes[c.propType||"standard"](c);["prop","attr","removeAttr"].forEach(function(d){var g=c[d];g&&(g="prop"===d?a.extend({writeable:!0},g):a.extend({},
g,{writeable:!0}),h[d](e,b,g),"*"!=e&&f.cfg.extendNative&&"prop"==d&&g.value&&a.isFunction(g.value)&&n(e,b,g),c[d]=g)});c.initAttr&&s.content(e,b);return c},defineNodeNameProperties:function(a,b,c,d){for(var g in b)!d&&b[g].initAttr&&s.createTmpCache(a),c&&(b[g][c]?f.log("override: "+a+"["+g+"] for "+c):(b[g][c]={},["value","set","get"].forEach(function(a){a in b[g]&&(b[g][c][a]=b[g][a],delete b[g][a])}))),b[g]=f.defineNodeNameProperty(a,g,b[g]);d||s.flushTmpCache();return b},createElement:function(e,
b,c){var d;a.isFunction(b)&&(b={after:b});s.createTmpCache(e);b.before&&s.createElement(e,b.before);c&&(d=f.defineNodeNameProperties(e,c,!1,!0));b.after&&s.createElement(e,b.after);s.flushTmpCache();return d},onNodeNamesPropertyModify:function(e,b,c,d){"string"==typeof e&&(e=e.split(o));a.isFunction(c)&&(c={set:c});e.forEach(function(a){x[a]||(x[a]={});"string"==typeof b&&(b=b.split(o));c.initAttr&&s.createTmpCache(a);b.forEach(function(b){x[a][b]||(x[a][b]=[],C[b]=!0);if(c.set){if(d)c.set.only=d;
x[a][b].push(c.set)}c.initAttr&&s.content(a,b)});s.flushTmpCache()})},defineNodeNamesBooleanProperty:function(e,b,c){c||(c={});if(a.isFunction(c))c.set=c;f.defineNodeNamesProperty(e,b,{attr:{set:function(a){this.setAttribute(b,a);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?p:b}},removeAttr:{value:function(){this.removeAttribute(b);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){if(c===
p)return c=(a.attributes[b]||{}).value,null==c?p:c;"boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var e=[],b={},c,d,g=/:\/\/|^\.*\//,t=function(d,b,c){return b&&c&&-1!==a.inArray(b,c.availabeLangs||[])?(d.loading=!0,c=c.langSrc,g.test(c)||(c=f.cfg.basePath+c),f.loader.loadScript(c+b+".js",function(){d.langObj[b]?(d.loading=!1,o(d,!0)):a(function(){d.langObj[b]&&o(d,!0);d.loading=!1})}),!0):!1},u=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
o=function(a,b){if(a.activeLang!=c&&a.activeLang!==d){var g=k[a.module].options;if(a.langObj[c]||d&&a.langObj[d])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[d],c),u(a.module);else if(!b&&!t(a,c,g)&&!t(a,d,g)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),u(a.module)}};return function(g){if("string"==typeof g&&g!==c)c=g,d=c.split("-")[0],c==d&&(d=!1),a.each(e,function(a,d){o(d)});else if("object"==typeof g)if(g.register)b[g.register]||(b[g.register]=[]),b[g.register].push(g),
g.callback();else{if(!g.activeLang)g.activeLang="";e.push(g);o(g)}return c}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){f[a]=function(a,d,g,e){"string"==typeof a&&(a=a.split(o));var k={};a.forEach(function(a){k[a]=f[b](a,d,g,e)});return k}});f.isReady("webshimLocalization",!0)});
(function(a,f){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<j)&&(!a.browser.msie||12>j&&7<j)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},p=function(a,f){a.getAttribute("role")||a.setAttribute("role",f)};a.webshims.addReady(function(k,o){a.each(i,function(f,i){for(var j=a(f,k).add(o.filter(f)),l=0,r=j.length;l<r;l++)p(j[l],i)});if(k===f){var l=f.getElementsByTagName("header")[0],j=f.getElementsByTagName("footer"),r=j.length;
l&&!a(l).closest("section, article")[0]&&p(l,"banner");r&&(l=j[r-1],a(l).closest("section, article")[0]||p(l,"contentinfo"))}})}})(jQuery,document);
(function(a,f,j){var i=f.audio&&f.video,p=!1;if(i)a=document.createElement("video"),f.videoBuffered="buffered"in a,p="loop"in a,j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),f.videoBuffered||(j.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),j.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(a,f,l,j,r){var h=f.mediaelement,x=f.cfg.mediaelement,
A=function(d,b){var d=a(d),c={src:d.attr("src")||"",elem:d,srcProp:d.prop("src")};if(!c.src)return c;var e=d.attr("type");if(e)c.type=e,c.container=a.trim(e.split(";")[0]);else if(b||(b=d[0].nodeName.toLowerCase(),"source"==b&&(b=(d.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=h.getTypeForSrc(c.src,b))c.type=e,c.container=e;if(e=d.attr("media"))c.media=e;return c},y=swfobject.hasFlashPlayerVersion("9.0.115"),v=!y&&"postMessage"in l&&i,q=function(){f.ready("mediaelement-swf",
function(){if(!h.createSWF)f.modules["mediaelement-swf"].test=a.noop,f.reTest(["mediaelement-swf"],i)})},w=function(){var a;return function(){!a&&v&&(a=!0,f.loader.loadScript("https://www.youtube.com/player_api"),f.polyfill("mediaelement-yt"))}}(),n=function(){y?q():w()};f.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]});h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],
"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=a.extend({},h.mimeTypes.audio,
h.mimeTypes.video);h.getTypeForSrc=function(d,b){if(-1!=d.indexOf("youtube.com/watch?")||-1!=d.indexOf("youtube.com/v/"))return"video/youtube";var d=d.split("?")[0].split("."),d=d[d.length-1],c;a.each(h.mimeTypes[b],function(a,b){if(-1!==b.indexOf(d))return c=a,!1});return c};h.srces=function(d,b){d=a(d);if(b)d.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(b)||(b=[b]),b.forEach(function(a){var b=j.createElement("source");"string"==typeof a&&(a={src:a});b.setAttribute("src",
a.src);a.type&&b.setAttribute("type",a.type);a.media&&b.setAttribute("media",a.media);d.append(b)});else{var b=[],c=d[0].nodeName.toLowerCase(),e=A(d,c);e.src?b.push(e):a("source",d).each(function(){e=A(this,c);e.src&&b.push(e)});return b}};a.fn.loadMediaSrc=function(d,b){return this.each(function(){b!==r&&(a(this).removeAttr("poster"),b&&a.attr(this,"poster",b));h.srces(this,d);a(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canThirdPlaySrces=function(d,b){var c="";if(y||v)d=a(d),b=b||h.srces(d),a.each(b,function(a,b){if(b.container&&b.src&&(y&&-1!=h.swfMimeTypes.indexOf(b.container)||v&&"video/youtube"==b.container))return c=b,!1});return c};var s={};h.canNativePlaySrces=function(b,c){var e="";if(i){var b=a(b),f=(b[0].nodeName||"").toLowerCase();if(!s[f])return e;c=c||h.srces(b);a.each(c,function(a,c){if(c.type&&s[f].prop._supvalue.call(b[0],c.type))return e=c,!1})}return e};h.setError=function(b,c){c||(c="can't play sources");
a(b).pause().data("mediaerror",c);f.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var B=function(){var a;return function(b,c,e){f.ready(y?"mediaelement-swf":"mediaelement-yt",function(){h.createSWF?h.createSWF(b,c,e):a||(a=!0,n(),B(b,c,e))});!a&&v&&!h.createSWF&&w()}}(),e=function(a,b,c,f,k){c||!1!==c&&b&&"third"==b.isActive?(c=h.canThirdPlaySrces(a,f))?B(a,c,b):k?h.setError(a,!1):e(a,b,!1,f,!0):(c=h.canNativePlaySrces(a,f))?b&&"third"==
b.isActive&&h.setActive(a,"html5",b):k?(h.setError(a,!1),b&&"third"==b.isActive&&h.setActive(a,"html5",b)):e(a,b,!0,f,!0)},b=/^(?:embed|object|datalist)$/i,c=function(c,g){var j=f.data(c,"mediaelementBase")||f.data(c,"mediaelementBase",{}),i=h.srces(c),l=c.parentNode;clearTimeout(j.loadTimer);a.data(c,"mediaerror",!1);if(i.length&&l&&!(1!=l.nodeType||b.test(l.nodeName||"")))g=g||f.data(c,"mediaelement"),e(c,g,x.preferFlash||r,i)};a(j).bind("ended",function(b){var c=f.data(b.target,"mediaelement");
(!p||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});p||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var e=f.defineNodeNameProperty(b,"load",{prop:{value:function(){var a=f.data(this,"mediaelement");c(this,a);i&&(!a||"html5"==a.isActive)&&e.prop._supvalue&&e.prop._supvalue.apply(this,arguments)}}});s[b]=f.defineNodeNameProperty(b,
"canPlayType",{prop:{value:function(c){var e="";i&&s[b].prop._supvalue&&(e=s[b].prop._supvalue.call(this,c),"no"==e&&(e=""));!e&&y&&(c=a.trim((c||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(c)&&(e="maybe"));return e}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){c(a);a=null},9)}});l=function(){f.addReady(function(b,e){a("video, audio",
b).add(e.filter("video, audio")).each(function(){a.browser.msie&&8<f.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():c(this);if(i){var b,d,e=this,g=function(){var b=a.prop(e,"buffered");if(b){for(var c="",d=0,f=b.length;d<f;d++)c+=b.end(d);return c}},h=function(){var b=g();b!=d&&(d=b,a(e).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==
a.type&&(d=g());clearTimeout(b);b=setTimeout(h,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(d=!1);clearTimeout(b)})}})})};i?(f.isReady("mediaelement-core",!0),l(),f.ready("WINDOWLOAD mediaelement",n)):f.ready("mediaelement-swf",l)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(a,f,j,i,p,k){var o=f.mediaelement,l=j.swfobject,C=Modernizr.audio&&Modernizr.video,r=l.hasFlashPlayerVersion("9.0.115"),h=0,j={paused:!0,ended:!1,currentSrc:"",duration:j.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)f.error("buffered index size error");else return 0},end:function(a){if(a)f.error("buffered index size error");else return 0},length:0}},x=Object.keys(j),A={currentTime:0,volume:1,
muted:!1};Object.keys(A);var y=a.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:p},j,A),v=/^jwplayer-/,q=function(a){if(a=i.getElementById(a.replace(v,"")))return a=f.data(a,"mediaelement"),"third"==a.isActive?a:null},w=function(a){return(a=f.data(a,"mediaelement"))&&"third"==a.isActive?a:null},n=function(b,m){m=a.Event(m);m.preventDefault();a.event.trigger(m,p,b)},s=k.playerPath||f.cfg.basePath+
"jwplayer/"+(k.playerName||"player.swf"),B=k.pluginPath||f.cfg.basePath+"swf/jwwebshims.swf";f.extendUNDEFProp(k.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});f.extendUNDEFProp(k.jwVars,{screencolor:"ffffffff"});f.extendUNDEFProp(k.jwAttrs,{bgcolor:"#000000"});var e=function(b,m){var c=b.duration;if(!(c&&0<b._durationCalcs)){try{if(b.duration=b.jwapi.getPlaylist()[0].duration,!b.duration||0>=b.duration||b.duration===b._lastDuration)b.duration=c}catch(d){}b.duration&&
b.duration!=b._lastDuration?(n(b._elem,"durationchange"),("audio"==b._elemNodeName||b._callMeta)&&o.jwEvents.Model.META(a.extend({duration:b.duration},m),b),b._durationCalcs--):b._durationCalcs++}},b=function(a,m){3>a&&clearTimeout(m._canplaythroughTimer);if(3<=a&&3>m.readyState)m.readyState=a,n(m._elem,"canplay"),clearTimeout(m._canplaythroughTimer),m._canplaythroughTimer=setTimeout(function(){b(4,m)},4E3);if(4<=a&&4>m.readyState)m.readyState=a,n(m._elem,"canplaythrough");m.readyState=a};o.jwEvents=
{View:{PLAY:function(a){var b=q(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;n(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(c){var m=q(c.id);if(m&&"percentage"in c&&m._bufferedEnd!=c.percentage){m.networkState=100==c.percentage?1:2;(isNaN(m.duration)||5<c.percentage&&25>c.percentage||100===c.percentage)&&e(m,c);if(m.ended)m.ended=!1;if(m.duration){2<c.percentage&&20>c.percentage?b(3,m):20<c.percentage&&b(4,m);if(m._bufferedEnd&&
m._bufferedEnd>c.percentage)m._bufferedStart=m.currentTime||0;m._bufferedEnd=c.percentage;m.buffered.length=1;if(100==c.percentage)m.networkState=1,b(4,m);a.event.trigger("progress",p,m._elem,!0)}}},META:function(a,c){if(c=c&&c.networkState?c:q(a.id))if("duration"in a){if(!c._metadata||!((!a.height||c.videoHeight==a.height)&&a.duration===c.duration)){c._metadata=!0;var d=c.duration;if(a.duration)c.duration=a.duration;c._lastDuration=c.duration;if(a.height||a.width)c.videoHeight=a.height||0,c.videoWidth=
a.width||0;if(!c.networkState)c.networkState=2;1>c.readyState&&b(1,c);c.duration&&d!==c.duration&&n(c._elem,"durationchange");n(c._elem,"loadedmetadata")}}else c._callMeta=!0},TIME:function(a){var c=q(a.id);if(c&&c.currentTime!==a.position){c.currentTime=a.position;c.duration&&c.duration<c.currentTime&&e(c,a);2>c.readyState&&b(2,c);if(c.ended)c.ended=!1;n(c._elem,"timeupdate")}},STATE:function(a){var c=q(a.id);if(c)switch(a.newstate){case "BUFFERING":if(c.ended)c.ended=!1;b(1,c);n(c._elem,"waiting");
break;case "PLAYING":c.paused=!1;c._ppFlag=!0;c.duration||e(c,a);3>c.readyState&&b(3,c);if(c.ended)c.ended=!1;n(c._elem,"playing");break;case "PAUSED":if(!c.paused&&!c.stopPlayPause)c.paused=!0,c._ppFlag=!0,n(c._elem,"pause");break;case "COMPLETED":4>c.readyState&&b(4,c),c.ended=!0,n(c._elem,"ended")}}},Controller:{ERROR:function(a){var b=q(a.id);b&&o.setError(b._elem,a.message)},SEEK:function(a){var b=q(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=
a.position)b.currentTime=a.position,n(b._elem,"timeupdate")}},VOLUME:function(a){var b=q(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,n(b._elem,"volumechange")},MUTE:function(a){if(!a.state){var b=q(a.id);if(b&&b.muted!=a.state)b.muted=a.state,n(b._elem,"volumechange")}}}};var c=function(b){var c=!0;a.each(o.jwEvents,function(d,e){a.each(e,function(a){try{b.jwapi["add"+d+"Listener"](a,"jQuery.webshims.mediaelement.jwEvents."+d+"."+a)}catch(e){return c=!1}})});return c},d=function(a){var b=
a.actionQueue.length,c=0,d;if(b&&"third"==a.isActive)for(;a.actionQueue.length&&b>c;)c++,d=a.actionQueue.shift(),a.jwapi[d.fn].apply(a.jwapi,d.args);if(a.actionQueue.length)a.actionQueue=[]},g=function(b){b&&(b._ppFlag===p&&a.prop(b._elem,"autoplay")||!b.paused)&&setTimeout(function(){if("third"==b.isActive&&(b._ppFlag===p||!b.paused))try{a(b._elem).play()}catch(c){}},1)},t=function(b){if(b&&"video"==b._elemNodeName){var c,d,e,f,g,z,h,k,i=function(i,j){if(j&&i&&!(1>j||1>i||"third"!=b.isActive))if(c&&
(c.remove(),c=!1),f=i,g=j,clearTimeout(h),d="auto"==b._elem.style.width,e="auto"==b._elem.style.height,d||e){z=z||a(b._elem).getShadowElement();var l;d&&!e?(l=z.height(),i*=l/j,j=l):!d&&e&&(l=z.width(),j*=l/i,i=l);k=!0;setTimeout(function(){k=!1},9);z.css({width:i,height:j})}},j=function(){if(!("third"!=b.isActive||a.prop(b._elem,"readyState")&&a.prop(this,"videoWidth"))){var f=a.prop(b._elem,"poster");if(f&&(d="auto"==b._elem.style.width,e="auto"==b._elem.style.height,d||e))c&&(c.remove(),c=!1),
c=a('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),c.bind("load error alreadycomplete",function(){clearTimeout(h);var b=this,d=b.naturalWidth||b.width||b.offsetWidth,e=b.naturalHeight||b.height||b.offsetHeight;e&&d?(i(d,e),b=null):setTimeout(function(){d=b.naturalWidth||b.width||b.offsetWidth;e=b.naturalHeight||b.height||b.offsetHeight;i(d,e);c&&(c.remove(),c=!1);b=null},9);a(this).unbind()}).prop("src",f).appendTo("body").each(function(){this.complete||
this.error?a(this).triggerHandler("alreadycomplete"):(clearTimeout(h),h=setTimeout(function(){a(b._elem).triggerHandler("error")},9999))})}};a(b._elem).bind("loadedmetadata",function(){i(a.prop(this,"videoWidth"),a.prop(this,"videoHeight"))}).bind("emptied",j).bind("swfstageresize updatemediaelementdimensions",function(){k||i(f,g)}).bind("emptied",function(){f=void 0;g=void 0}).triggerHandler("swfstageresize");j();a.prop(b._elem,"readyState")&&i(a.prop(b._elem,"videoWidth"),a.prop(b._elem,"videoHeight"))}};
o.playerResize=function(b){b&&(b=i.getElementById(b.replace(v,"")))&&a(b).triggerHandler("swfstageresize")};a(i).bind("emptied",function(a){a=w(a.target);g(a)});var u;o.jwPlayerReady=function(b){var e=q(b.id),G=0,h=function(){if(!(9<G))if(G++,c(e)){if(e.wasSwfReady)a(e._elem).mediaLoad();else{var i=parseFloat(b.version,10);(5.6>i||6<=i)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+")}e.wasSwfReady=!0;e.tryedReframeing=0;d(e);g(e)}else clearTimeout(e.reframeTimer),e.reframeTimer=setTimeout(h,
9*G),2<G&&9>e.tryedReframeing&&(e.tryedReframeing++,e.shadowElem.css({overflow:"visible"}),setTimeout(function(){e.shadowElem.css({overflow:"hidden"})},16))};if(e&&e.jwapi){if(!e.tryedReframeing)e.tryedReframeing=0;clearTimeout(u);e.jwData=b;e.shadowElem.removeClass("flashblocker-assumed");a.prop(e._elem,"volume",e.volume);a.prop(e._elem,"muted",e.muted);h()}};var H=a.noop;if(C){var E={play:1,playing:1},J="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),
K=J.map(function(a){return a+".webshimspolyfill"}).join(" "),L=function(b){var c=f.data(b.target,"mediaelement");c&&(b.originalEvent&&b.originalEvent.type===b.type)==("third"==c.activating)&&(b.stopImmediatePropagation(),E[b.type]&&c.isActive!=c.activating&&a(b.target).pause())},H=function(b){a(b).unbind(K).bind(K,L);J.forEach(function(a){f.moveToFirstEvent(b,a)})};H(i)}o.setActive=function(b,c,d){d||(d=f.data(b,"mediaelement"));if(d&&d.isActive!=c){"html5"!=c&&"third"!=c&&f.warn("wrong type for mediaelement activating: "+
c);var e=f.data(b,"shadowData");d.activating=c;a(b).pause();d.isActive=c;"third"==c?(e.shadowElement=e.shadowFocusElement=d.shadowElem[0],a(b).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(a(b).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),e.shadowElement=e.shadowFocusElement=!1);a(b).trigger("mediaelementapichange")}};var M=function(){var a="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),
c=a.length;return function(d){if(d){var e=c,f=d.networkState;for(b(0,d);--e;)delete d[a[e]];d.actionQueue=[];d.buffered.length=0;f&&n(d._elem,"emptied")}}}(),I=function(b,c){var d=b._elem,e=b.shadowElem;a(d)[c?"addClass":"removeClass"]("webshims-controls");"audio"==b._elemNodeName&&!c?e.css({width:0,height:0}):e.css({width:d.style.width||a(d).width(),height:d.style.height||a(d).height()})};o.createSWF=function(b,c,d){if(r){1>h?h=1:h++;var e=a.extend({},k.jwVars,{image:a.prop(b,"poster")||"",file:c.srcProp}),
g=a(b).data("jwvars")||{};d||(d=f.data(b,"mediaelement"));if(d&&d.swfCreated)o.setActive(b,"third",d),M(d),d.currentSrc=c.srcProp,a.extend(e,g),k.changeJW(e,b,c,d,"load"),F(b,"sendEvent",["LOAD",e]);else{var i=a.prop(b,"controls"),z="jwplayer-"+f.getID(b),j=a.extend({},k.jwParams,a(b).data("jwparams")),n=b.nodeName.toLowerCase(),p=a.extend({},k.jwAttrs,{name:z,id:z},a(b).data("jwattrs")),q=a('<div class="polyfill-'+n+' polyfill-mediaelement" id="wrapper-'+z+'"><div id="'+z+'"></div>').css({position:"relative",
overflow:"hidden"}),d=f.data(b,"mediaelement",f.objectCreate(y,{actionQueue:{value:[]},shadowElem:{value:q},_elemNodeName:{value:n},_elem:{value:b},currentSrc:{value:c.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=d.buffered.length)f.error("buffered index size error");else return 0},end:function(a){if(a>=d.buffered.length)f.error("buffered index size error");else return(d.duration-d._bufferedStart)*d._bufferedEnd/100+d._bufferedStart},length:0}}}));I(d,i);q.insertBefore(b);
C&&a.extend(d,{volume:a.prop(b,"volume"),muted:a.prop(b,"muted")});a.extend(e,{id:z,controlbar:i?k.jwVars.controlbar||("video"==n?"over":"bottom"):"video"==n?"none":"bottom",icons:""+(i&&"video"==n)},g,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});e.plugins=e.plugins?e.plugins+(","+B):B;f.addShadowDom(b,q);H(b);o.setActive(b,"third",d);k.changeJW(e,b,c,d,"embed");a(b).bind("updatemediaelementdimensions",function(){I(d,a.prop(b,"controls"))});t(d);l.embedSWF(s,z,"100%","100%","9.0.0",
!1,e,j,p,function(c){if(c.success)d.jwapi=c.ref,i||a(c.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!c.ref.parentNode&&q[0].parentNode||"none"==c.ref.style.display)q.addClass("flashblocker-assumed"),a(b).trigger("flashblocker"),f.warn("flashblocker assumed");a(c.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),u||(clearTimeout(u),u=setTimeout(function(){var b=a(c.ref);1<b[0].offsetWidth&&1<b[0].offsetHeight&&0===location.protocol.indexOf("file:")?f.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(2>b[0].offsetWidth||2>b[0].offsetHeight)&&f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){a(b).mediaLoad()},1)};var F=function(a,b,c,d){return(d=d||w(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(b){var c={},d,e=function(a){"audio"==b&&
("videoHeight"==a||"videoWidth"==a)||(c[a]={get:function(){var b=w(this);return b?b[a]:C&&d[a].prop._supget?d[a].prop._supget.apply(this):y[a]},writeable:!1})},g=function(a,b){e(a);delete c[a].writeable;c[a].set=b};g("volume",function(a){var b=w(this);if(b){if(a*=100,!isNaN(a)){var c=b.muted;(0>a||100<a)&&f.error("volume greater or less than allowed "+a/100);F(this,"sendEvent",["VOLUME",a],b);if(c)try{b.jwapi.sendEvent("mute","true")}catch(e){}a/=100;if(!(b.volume==a||"third"!=b.isActive))b.volume=
a,n(b._elem,"volumechange")}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});g("muted",function(a){var b=w(this);if(b){if(a=!!a,F(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"third"!=b.isActive))b.muted=a,n(b._elem,"volumechange")}else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});g("currentTime",function(a){var b=w(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=
!0;b.stopPlayPause=!1},50);F(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,n(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){c[a]={value:function(){var b=w(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),F(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=
!0,b.paused!=("play"!=a)))b.paused="play"!=a,n(b._elem,a)},1);else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}});x.forEach(e);f.onNodeNamesPropertyModify(b,"controls",function(c,d){var e=w(this);a(this)[d?"addClass":"removeClass"]("webshims-controls");if(e){try{F(this,d?"showControls":"hideControls",[b],e)}catch(g){f.warn("you need to generate a crossdomain.xml")}"audio"==b&&I(e,d);a(e.jwapi).attr("tabindex",d?"0":"-1")}});d=f.defineNodeNameProperties(b,c,"prop")});if(r){var N=
a.cleanData,O=a.browser.msie&&9>f.browserVersion,P={object:1,OBJECT:1};a.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&h)for(b=0;b<c;b++)if(P[a[b].nodeName]){if("sendEvent"in a[b]){h--;try{a[b].sendEvent("play",!1)}catch(e){}}if(O)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return N.apply(this,arguments)}}if(!C){var D=i.createElement("a");D.style.display="none";["poster","src"].forEach(function(b){f.defineNodeNamesProperty("src"==b?["audio","video","source"]:["video"],
b,{prop:{get:function(){var c=this.getAttribute(b),d;if(null==c)return"";D.setAttribute("href",c+"");if(!a.support.hrefNormalized){try{a(D).appendTo(this),d=D.getAttribute("href",4)}catch(e){d=D.getAttribute("href",4)}a(D).detach()}return d||D.href},set:function(c){a.attr(this,b,c)}}})});["autoplay","controls"].forEach(function(a){f.defineNodeNamesBooleanProperty(["audio","video"],a)});f.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},
HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")}});