/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/* perfect-scrollbar v0.7.0 */
!function t(e,n,r){function o(i,s){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(l)return l(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};e[i][0].call(u.exports,function(t){var n=e[i][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[i].exports}for(var l="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||"undefined"==typeof t){var e=t;l.get(this)||o.initialize(this,e)}else{var n=t;"update"===n?o.update(this):"destroy"===n&&o.destroy(this)}})}}var o=t("../main"),l=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],r);else{var i=window.jQuery?window.jQuery:window.$;"undefined"!=typeof i&&r(i)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function l(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var i={};i.e=function(t,e){var n=document.createElement(t);return n.className=e,n},i.appendTo=function(t,e){return e.appendChild(t),t},i.css=function(t,e,n){return"object"==typeof e?l(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},i.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},i.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},i.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return i.matches(t,e)})},e.exports=i},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom"),l=n.toInt=function(t){return parseInt(t,10)||0},i=n.clone=function(t){if(t){if(Array.isArray(t))return t.map(i);if("object"==typeof t){var e={};for(var n in t)e[n]=i(t[n]);return e}return t}return null};n.extend=function(t,e){var n=i(t);for(var r in e)n[r]=i(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return l(o.css(t,"width"))+l(o.css(t,"paddingLeft"))+l(o.css(t,"paddingRight"))+l(o.css(t,"borderLeftWidth"))+l(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),l=t("./plugin/update");e.exports={initialize:o,update:l,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances");e.exports=function(t){var e=l.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),l.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var o=r.pageY-window.pageYOffset-n(e.scrollbarYRail).top,s=o>e.scrollbarYTop?1:-1;i(t,"top",t.scrollTop+s*e.containerHeight),l(t),r.stopPropagation()}),e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var o=r.pageX-window.pageXOffset-n(e.scrollbarXRail).left,s=o>e.scrollbarXLeft?1:-1;i(t,"left",t.scrollLeft+s*e.containerWidth),l(t),r.stopPropagation()})}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,i=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var l=t("../../lib/helper"),i=t("../../lib/dom"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var i=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=l.matches(e.scrollbarX,":focus")||l.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:p=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+p),s(t),i=n(p,f),i&&c.preventDefault()}}})}var o=t("../../lib/helper"),l=t("../../lib/dom"),i=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){var o=window.getComputedStyle(r),l=[o.overflow,o.overflowX,o.overflowY].join("");if(!l.match(/(scroll|auto)/))return!1;var i=r.scrollHeight-r.clientHeight;if(i>0&&!(0===r.scrollTop&&n>0||r.scrollTop===i&&n<0))return!0;var s=r.scrollLeft-r.clientWidth;if(s>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===s&&e>0))return!0}return!1}function s(s){var c=r(s),u=c[0],d=c[1];o(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?i(t,"top",t.scrollTop-d*e.settings.wheelSpeed):i(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):i(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),a=!0):(i(t,"top",t.scrollTop-d*e.settings.wheelSpeed),i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),l(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){l(t)})}var o=t("../instances"),l=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return l.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void i(t)):void clearInterval(c)},50))}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a())}),e.event.bind(window,"keyup",function(){d&&(d=!1,a())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},l={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<l.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>l.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<l.top+3?(l.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>l.bottom-3?(n.y-l.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r()}})}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,l=t.scrollLeft,i=Math.abs(n),s=Math.abs(r);if(s>i){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(i>s&&(n<0&&l===e.contentWidth-e.containerWidth||n>0&&0===l))return!e.settings.swipePropagation;return!0}function a(e,n){s(t,"top",t.scrollTop-n),s(t,"left",t.scrollLeft-e),i(t)}function c(){w=!0}function u(){w=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(p(t)){Y=!0;var e=d(t);g.pageX=e.pageX,g.pageY=e.pageY,v=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!Y&&e.settings.swipePropagation&&f(t),!w&&Y&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},l=r.pageX-g.pageX,i=r.pageY-g.pageY;a(l,i),g=r;var s=(new Date).getTime(),c=s-v;c>0&&(m.x=l/c,m.y=i/c,v=s),o(l,i)&&(t.stopPropagation(),t.preventDefault())}}function b(){!w&&Y&&(Y=!1,e.settings.swipeEasing&&(clearInterval(y),y=setInterval(function(){return l.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10)))}var g={},v=0,m={},y=null,w=!1,Y=!1;n?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)):r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=l.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),l=t("./instances"),i=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},a=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps");var n=l.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps--theme_"+n.settings.theme),n.settings.handlers.forEach(function(e){s[e](t)}),a(t),i(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){a.add(t,"ps--focus")}function n(){a.remove(t,"ps--focus")}var r=this;r.settings=s.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps__scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps__scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=s.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:s.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=s.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+s.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=s.toInt(u.css(r.scrollbarXRail,"marginLeft"))+s.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps__scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps__scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=s.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:s.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?s.outerWidth(r.scrollbarY):null,r.railBorderYWidth=s.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+s.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=s.toInt(u.css(r.scrollbarYRail,"marginTop"))+s.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function l(t,e){t.setAttribute("data-ps-id",e)}function i(t){t.removeAttribute("data-ps-id")}var s=t("../lib/helper"),a=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return l(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],i(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,s.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,s.css(e.scrollbarYRail,r),s.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),s.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var l=t("../lib/helper"),i=t("../lib/class"),s=t("../lib/dom"),a=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=s.queryChildren(t,".ps__scrollbar-x-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=s.queryChildren(t,".ps__scrollbar-y-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?i.add(t,"ps--active-x"):(i.remove(t,"ps--active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?i.add(t,"ps--active-y"):(i.remove(t,"ps--active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r=t("./instances"),o=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(o("ps-y-reach-start"))),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(o("ps-x-reach-start")));var l=r.get(t);"top"===e&&n>=l.contentHeight-l.containerHeight&&(n=l.contentHeight-l.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(o("ps-y-reach-end"))),"left"===e&&n>=l.contentWidth-l.containerWidth&&(n=l.contentWidth-l.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(o("ps-x-reach-end"))),void 0===l.lastTop&&(l.lastTop=t.scrollTop),void 0===l.lastLeft&&(l.lastLeft=t.scrollLeft),"top"===e&&n<l.lastTop&&t.dispatchEvent(o("ps-scroll-up")),"top"===e&&n>l.lastTop&&t.dispatchEvent(o("ps-scroll-down")),"left"===e&&n<l.lastLeft&&t.dispatchEvent(o("ps-scroll-left")),"left"===e&&n>l.lastLeft&&t.dispatchEvent(o("ps-scroll-right")),"top"===e&&n!==l.lastTop&&(t.scrollTop=l.lastTop=n,t.dispatchEvent(o("ps-scroll-y"))),"left"===e&&n!==l.lastLeft&&(t.scrollLeft=l.lastLeft=n,t.dispatchEvent(o("ps-scroll-x")))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances"),i=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=l.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),i(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);
/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a,b){function c(a){var b=ga[a]={};return S.each(a.split(V),function(a,c){b[c]=!0}),b}function d(a,c,d){if(d===b&&1===a.nodeType){var e="data-"+c.replace(ia,"-$1").toLowerCase();if(d=a.getAttribute(e),"string"==typeof d){try{d="true"===d||"false"!==d&&("null"===d?null:+d+""===d?+d:ha.test(d)?S.parseJSON(d):d)}catch(a){}S.data(a,c,d)}else d=b}return d}function e(a){var b;for(b in a)if(("data"!==b||!S.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function f(){return!1}function g(){return!0}function h(a){return!a||!a.parentNode||11===a.parentNode.nodeType}function i(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function j(a,b,c){if(b=b||0,S.isFunction(b))return S.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return S.grep(a,function(a,d){return a===b===c});if("string"==typeof b){var d=S.grep(a,function(a){return 1===a.nodeType});if(Aa.test(b))return S.filter(b,d,!c);b=S.filter(b,d)}return S.grep(a,function(a,d){return S.inArray(a,b)>=0===c})}function k(a){var b=Da.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function l(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function m(a,b){if(1===b.nodeType&&S.hasData(a)){var c,d,e,f=S._data(a),g=S._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)S.event.add(b,c,h[c][d])}g.data&&(g.data=S.extend({},g.data))}}function n(a,b){var c;1===b.nodeType&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),S.support.html5Clone&&a.innerHTML&&!S.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Na.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.selected=a.defaultSelected:"input"===c||"textarea"===c?b.defaultValue=a.defaultValue:"script"===c&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(S.expando))}function o(a){return"undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function p(a){Na.test(a.type)&&(a.defaultChecked=a.checked)}function q(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=hb.length;e--;)if(b=hb[e]+c,b in a)return b;return d}function r(a,b){return a=b||a,"none"===S.css(a,"display")||!S.contains(a.ownerDocument,a)}function s(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)c=a[f],c.style&&(e[f]=S._data(c,"olddisplay"),b?(e[f]||"none"!==c.style.display||(c.style.display=""),""===c.style.display&&r(c)&&(e[f]=S._data(c,"olddisplay",w(c.nodeName)))):(d=Ua(c,"display"),e[f]||"none"===d||S._data(c,"olddisplay",d)));for(f=0;f<g;f++)c=a[f],c.style&&(b&&"none"!==c.style.display&&""!==c.style.display||(c.style.display=b?e[f]||"":"none"));return a}function t(a,b,c){var d=ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function u(a,b,c,d){for(var e=c===(d?"border":"content")?4:"width"===b?1:0,f=0;e<4;e+=2)"margin"===c&&(f+=S.css(a,c+gb[e],!0)),d?("content"===c&&(f-=parseFloat(Ua(a,"padding"+gb[e]))||0),"margin"!==c&&(f-=parseFloat(Ua(a,"border"+gb[e]+"Width"))||0)):(f+=parseFloat(Ua(a,"padding"+gb[e]))||0,"padding"!==c&&(f+=parseFloat(Ua(a,"border"+gb[e]+"Width"))||0));return f}function v(a,b,c){var d="width"===b?a.offsetWidth:a.offsetHeight,e=!0,f=S.support.boxSizing&&"border-box"===S.css(a,"boxSizing");if(d<=0||null==d){if(d=Ua(a,b),(d<0||null==d)&&(d=a.style[b]),bb.test(d))return d;e=f&&(S.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+u(a,b,c||(f?"border":"content"),e)+"px"}function w(a){if(db[a])return db[a];var b=S("<"+a+">").appendTo(I.body),c=b.css("display");return b.remove(),"none"!==c&&""!==c||(Va=I.body.appendChild(Va||S.extend(I.createElement("iframe"),{frameBorder:0,width:0,height:0})),Wa&&Va.createElement||(Wa=(Va.contentWindow||Va.contentDocument).document,Wa.write("<!doctype html><html><body>"),Wa.close()),b=Wa.body.appendChild(Wa.createElement(a)),c=Ua(b,"display"),I.body.removeChild(Va)),db[a]=c,c}function x(a,b,c,d){var e;if(S.isArray(b))S.each(b,function(b,e){c||kb.test(a)?d(a,e):x(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==S.type(b))d(a,b);else for(e in b)x(a+"["+e+"]",b[e],c,d)}function y(){return setTimeout(function(){ob=b},0),ob=S.now()}function z(a,b){S.each(b,function(b,c){for(var d=(ub[b]||[]).concat(ub["*"]),e=0,f=d.length;e<f;e++)if(d[e].call(a,b,c))return})}function A(a,b,c){var d,e=0,f=tb.length,g=S.Deferred().always(function(){delete h.elem}),h=function(){for(var b=ob||y(),c=Math.max(0,i.startTime+i.duration-b),d=c/i.duration||0,e=1-d,f=0,h=i.tweens.length;f<h;f++)i.tweens[f].run(e);return g.notifyWith(a,[i,e,c]),e<1&&h?c:(g.resolveWith(a,[i]),!1)},i=g.promise({elem:a,props:S.extend({},b),opts:S.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:ob||y(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=S.Tween(a,i.opts,b,c,i.opts.specialEasing[b]||i.opts.easing);return i.tweens.push(e),e},stop:function(b){for(var c=0,d=b?i.tweens.length:0;c<d;c++)i.tweens[c].run(1);return b?g.resolveWith(a,[i,b]):g.rejectWith(a,[i,b]),this}}),j=i.props;for(B(j,i.opts.specialEasing);e<f;e++)if(d=tb[e].call(i,a,j,i.opts))return d;return z(i,j),S.isFunction(i.opts.start)&&i.opts.start.call(a,i),S.fx.timer(S.extend(h,{anim:i,queue:i.opts.queue,elem:a})),i.progress(i.opts.progress).done(i.opts.done,i.opts.complete).fail(i.opts.fail).always(i.opts.always)}function B(a,b){var c,d,e,f,g;for(c in a)if(d=S.camelCase(c),e=b[d],f=a[c],S.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=S.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function C(a,b,c){var d,e,f,g,h,i,j,k,l,m=this,n=a.style,o={},p=[],q=a.nodeType&&r(a);c.queue||(k=S._queueHooks(a,"fx"),null==k.unqueued&&(k.unqueued=0,l=k.empty.fire,k.empty.fire=function(){k.unqueued||l()}),k.unqueued++,m.always(function(){m.always(function(){k.unqueued--,S.queue(a,"fx").length||k.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],"inline"===S.css(a,"display")&&"none"===S.css(a,"float")&&(S.support.inlineBlockNeedsLayout&&"inline"!==w(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",S.support.shrinkWrapBlocks||m.done(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(f=b[d],qb.exec(f)){if(delete b[d],i=i||"toggle"===f,f===(q?"hide":"show"))continue;p.push(d)}if(g=p.length){h=S._data(a,"fxshow")||S._data(a,"fxshow",{}),"hidden"in h&&(q=h.hidden),i&&(h.hidden=!q),q?S(a).show():m.done(function(){S(a).hide()}),m.done(function(){var b;S.removeData(a,"fxshow",!0);for(b in o)S.style(a,b,o[b])});for(d=0;d<g;d++)e=p[d],j=m.createTween(e,q?h[e]:0),o[e]=h[e]||S.style(a,e),e in h||(h[e]=j.start,q&&(j.end=j.start,j.start="width"===e||"height"===e?1:0))}}function D(a,b,c,d,e){return new D.prototype.init(a,b,c,d,e)}function E(a,b){var c,d={height:a},e=0;for(b=b?1:0;e<4;e+=2-b)c=gb[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function F(a){return S.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}var G,H,I=a.document,J=(a.location,a.navigator),K=a.JQXLite,L=a.$,M=Array.prototype.push,N=Array.prototype.slice,O=Array.prototype.indexOf,P=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,R=String.prototype.trim,S=function(a,b){return new S.fn.init(a,b,G)},T=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,U=/\S/,V=/\s+/,W=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,X=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Y=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Z=/^[\],:{}\s]*$/,$=/(?:^|:|,)(?:\s*\[)+/g,_=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,aa=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,ba=/^-ms-/,ca=/-([\da-z])/gi,da=function(a,b){return(b+"").toUpperCase()},ea=function(){I.addEventListener?(I.removeEventListener("DOMContentLoaded",ea,!1),S.ready()):"complete"===I.readyState&&(I.detachEvent("onreadystatechange",ea),S.ready())},fa={};S.fn=S.prototype={constructor:S,init:function(a,c,d){var e,f,g;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:X.exec(a),!e||!e[1]&&c)return!c||c.jqx?(c||d).find(a):this.constructor(c).find(a);if(e[1])return c=c instanceof S?c[0]:c,g=c&&c.nodeType?c.ownerDocument||c:I,a=S.parseHTML(e[1],g,!0),Y.test(e[1])&&S.isPlainObject(c)&&this.attr.call(a,c,!0),S.merge(this,a);if(f=I.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return d.find(a);this.length=1,this[0]=f}return this.context=I,this.selector=a,this}return S.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),S.makeArray(a,this))},selector:"",jqx:"4.5.0",length:0,size:function(){return this.length},toArray:function(){return N.call(this)},get:function(a){return null==a?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=S.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,"find"===b?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return S.each(this,a,b)},ready:function(a){return S.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(a){return this.pushStack(S.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:M,sort:[].sort,splice:[].splice},S.fn.init.prototype=S.fn,S.extend=S.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[1]||{},i=2),"object"==typeof h||S.isFunction(h)||(h={}),j===i&&(h=this,--i);i<j;i++)if(null!=(a=arguments[i]))for(c in a)d=h[c],e=a[c],h!==e&&(k&&e&&(S.isPlainObject(e)||(f=S.isArray(e)))?(f?(f=!1,g=d&&S.isArray(d)?d:[]):g=d&&S.isPlainObject(d)?d:{},h[c]=S.extend(k,g,e)):e!==b&&(h[c]=e));return h},S.extend({noConflict:function(b){return a.$===S&&(a.$=L),b&&a.JQXLite===S&&(a.JQXLite=K),S},isReady:!1,readyWait:1,holdReady:function(a){a?S.readyWait++:S.ready(!0)},ready:function(a){if(a===!0?!--S.readyWait:!S.isReady){if(!I.body)return setTimeout(S.ready,1);S.isReady=!0,a!==!0&&--S.readyWait>0||(H.resolveWith(I,[S]),S.fn.trigger&&S(I).trigger("ready").off("ready"))}},isFunction:function(a){return"function"===S.type(a)},isArray:Array.isArray||function(a){return"array"===S.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):fa[P.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==S.type(a)||a.nodeType||S.isWindow(a))return!1;try{if(a.constructor&&!Q.call(a,"constructor")&&!Q.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}var c;for(c in a);return c===b||Q.call(a,c)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return a&&"string"==typeof a?("boolean"==typeof b&&(c=b,b=0),b=b||I,(d=Y.exec(a))?[b.createElement(d[1])]:(d=S.buildFragment([a],b,c?null:[]),S.merge([],(d.cacheable?S.clone(d.fragment):d.fragment).childNodes))):null},parseJSON:function(b){return b&&"string"==typeof b?(b=S.trim(b),a.JSON&&a.JSON.parse?a.JSON.parse(b):Z.test(b.replace(_,"@").replace(aa,"]").replace($,""))?new Function("return "+b)():void S.error("Invalid JSON: "+b)):null},parseXML:function(c){var d,e;if(!c||"string"!=typeof c)return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(a){d=b}return d&&d.documentElement&&!d.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&U.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(ba,"ms-").replace(ca,da)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||S.isFunction(a);if(d)if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g&&c.apply(a[f++],d)!==!1;);else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g&&c.call(a[f],f,a[f++])!==!1;);return a},trim:R&&!R.call("\ufeff ")?function(a){return null==a?"":R.call(a)}:function(a){return null==a?"":(a+"").replace(W,"")},makeArray:function(a,b){var c,d=b||[];return null!=a&&(c=S.type(a),null==a.length||"string"===c||"function"===c||"regexp"===c||S.isWindow(a)?M.call(d,a):S.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(O)return O.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if("number"==typeof d)for(;f<d;f++)a[e++]=c[f];else for(;c[f]!==b;)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;for(c=!!c;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof S||i!==b&&"number"==typeof i&&(i>0&&a[0]&&a[i-1]||0===i||S.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),null!=e&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return"string"==typeof c&&(d=a[c],c=a,a=d),S.isFunction(a)?(e=N.call(arguments,2),f=function(){return a.apply(c,e.concat(N.call(arguments)))},f.guid=a.guid=a.guid||S.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=null==d,k=0,l=a.length;if(d&&"object"==typeof d){for(k in d)S.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){if(i=h===b&&S.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(S(a),c)}):(c.call(a,e),c=null)),c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),S.ready.promise=function(b){if(!H)if(H=S.Deferred(),"complete"===I.readyState)setTimeout(S.ready,1);else if(I.addEventListener)I.addEventListener("DOMContentLoaded",ea,!1),a.addEventListener("load",S.ready,!1);else{I.attachEvent("onreadystatechange",ea),a.attachEvent("onload",S.ready);var c=!1;try{c=null==a.frameElement&&I.documentElement}catch(a){}c&&c.doScroll&&!function a(){if(!S.isReady){try{c.doScroll("left")}catch(b){return setTimeout(a,50)}S.ready()}}()}return H.promise(b)},S.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){fa["[object "+b+"]"]=b.toLowerCase()}),G=S(I);var ga={};S.Callbacks=function(a){a="string"==typeof a?ga[a]||c(a):S.extend({},a);var d,e,f,g,h,i,j=[],k=!a.once&&[],l=function(b){for(d=a.memory&&b,e=!0,i=g||0,g=0,h=j.length,f=!0;j&&i<h;i++)if(j[i].apply(b[0],b[1])===!1&&a.stopOnFalse){d=!1;break}f=!1,j&&(k?k.length&&l(k.shift()):d?j=[]:m.disable())},m={add:function(){if(j){var b=j.length;!function b(c){S.each(c,function(c,d){var e=S.type(d);"function"===e?a.unique&&m.has(d)||j.push(d):d&&d.length&&"string"!==e&&b(d)})}(arguments),f?h=j.length:d&&(g=b,l(d))}return this},remove:function(){return j&&S.each(arguments,function(a,b){for(var c;(c=S.inArray(b,j,c))>-1;)j.splice(c,1),f&&(c<=h&&h--,c<=i&&i--)}),this},has:function(a){return S.inArray(a,j)>-1},empty:function(){return j=[],this},disable:function(){return j=k=d=b,this},disabled:function(){return!j},lock:function(){return k=b,d||m.disable(),this},locked:function(){return!k},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],!j||e&&!k||(f?k.push(b):l(b)),this},fire:function(){return m.fireWith(this,arguments),this},fired:function(){return!!e}};return m},S.extend({Deferred:function(a){var b=[["resolve","done",S.Callbacks("once memory"),"resolved"],["reject","fail",S.Callbacks("once memory"),"rejected"],["notify","progress",S.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return S.Deferred(function(c){S.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](S.isFunction(g)?function(){var a=g.apply(this,arguments);a&&S.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return null!=a?S.extend(a,d):d}},e={};return d.pipe=d.then,S.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=N.call(arguments),g=f.length,h=1!==g||a&&S.isFunction(a.promise)?g:0,i=1===h?a:S.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?N.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);e<g;e++)f[e]&&S.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}}),S.support=function(){var b,c,d,e,f,g,h,i,j,k,l,m=I.createElement("div");if(m.setAttribute("className","t"),m.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=m.getElementsByTagName("*"),d=m.getElementsByTagName("a")[0],!c||!d||!c.length)return{};e=I.createElement("select"),f=e.appendChild(I.createElement("option")),g=m.getElementsByTagName("input")[0],d.style.cssText="top:1px;float:left;opacity:.5",b={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:"/a"===d.getAttribute("href"),opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:"on"===g.value,optSelected:f.selected,getSetAttribute:"t"!==m.className,enctype:!!I.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==I.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===I.compatMode,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},g.checked=!0,b.noCloneChecked=g.cloneNode(!0).checked,e.disabled=!0,b.optDisabled=!f.disabled;try{delete m.test}catch(a){b.deleteExpando=!1}if(!m.addEventListener&&m.attachEvent&&m.fireEvent&&(m.attachEvent("onclick",l=function(){b.noCloneEvent=!1}),m.cloneNode(!0).fireEvent("onclick"),m.detachEvent("onclick",l)),g=I.createElement("input"),g.value="t",g.setAttribute("type","radio"),b.radioValue="t"===g.value,g.setAttribute("checked","checked"),g.setAttribute("name","t"),m.appendChild(g),h=I.createDocumentFragment(),h.appendChild(m.lastChild),b.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=g.checked,h.removeChild(g),h.appendChild(m),m.attachEvent)for(j in{submit:!0,change:!0,focusin:!0})i="on"+j,k=i in m,k||(m.setAttribute(i,"return;"),k="function"==typeof m[i]),b[j+"Bubbles"]=k;return S(function(){var c,d,e,f,g="padding:0;margin:0;border:0;display:block;overflow:hidden;",h=I.getElementsByTagName("body")[0];h&&(c=I.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",h.insertBefore(c,h.firstChild),d=I.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=d.getElementsByTagName("td"),e[0].style.cssText="padding:0;margin:0;border:0;display:none",k=0===e[0].offsetHeight,e[0].style.display="",e[1].style.display="none",b.reliableHiddenOffsets=k&&0===e[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=4===d.offsetWidth,b.doesNotIncludeMarginInBodyOffset=1!==h.offsetTop,a.getComputedStyle&&(b.pixelPosition="1%"!==(a.getComputedStyle(d,null)||{}).top,b.boxSizingReliable="4px"===(a.getComputedStyle(d,null)||{width:"4px"}).width,f=I.createElement("div"),f.style.cssText=d.style.cssText=g,f.style.marginRight=f.style.width="0",d.style.width="1px",d.appendChild(f),b.reliableMarginRight=!parseFloat((a.getComputedStyle(f,null)||{}).marginRight)),"undefined"!=typeof d.style.zoom&&(d.innerHTML="",d.style.cssText=g+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=3!==d.offsetWidth,c.style.zoom=1),h.removeChild(c),c=d=e=f=null)}),h.removeChild(m),c=d=e=f=g=h=m=null,b}();var ha=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,ia=/([A-Z])/g;S.extend({cache:{},deletedIds:[],uuid:0,expando:"JQXLite"+(S.fn.jqx+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?S.cache[a[S.expando]]:a[S.expando],!!a&&!e(a)},data:function(a,c,d,e){if(S.acceptData(a)){var f,g,h=S.expando,i="string"==typeof c,j=a.nodeType,k=j?S.cache:a,l=j?a[h]:a[h]&&h;if(l&&k[l]&&(e||k[l].data)||!i||d!==b)return l||(j?a[h]=l=S.deletedIds.pop()||S.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=S.noop)),"object"!=typeof c&&"function"!=typeof c||(e?k[l]=S.extend(k[l],c):k[l].data=S.extend(k[l].data,c)),f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[S.camelCase(c)]=d),i?(g=f[c],null==g&&(g=f[S.camelCase(c)])):g=f,g}},removeData:function(a,b,c){if(S.acceptData(a)){var d,f,g,h=a.nodeType,i=h?S.cache:a,j=h?a[S.expando]:S.expando;if(i[j]){if(b&&(d=c?i[j]:i[j].data)){S.isArray(b)||(b in d?b=[b]:(b=S.camelCase(b),b=b in d?[b]:b.split(" ")));for(f=0,g=b.length;f<g;f++)delete d[b[f]];if(!(c?e:S.isEmptyObject)(d))return}(c||(delete i[j].data,e(i[j])))&&(h?S.cleanData([a],!0):S.support.deleteExpando||i!=i.window?delete i[j]:i[j]=null)}}},_data:function(a,b,c){return S.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&S.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),S.fn.extend({data:function(a,c){var e,f,g,h,i,j=this[0],k=0,l=null;if(a===b){if(this.length&&(l=S.data(j),1===j.nodeType&&!S._data(j,"parsedAttrs"))){for(g=j.attributes,i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")||(h=S.camelCase(h.substring(5)),d(j,h,l[h]));S._data(j,"parsedAttrs",!0)}return l}return"object"==typeof a?this.each(function(){S.data(this,a)}):(e=a.split(".",2),e[1]=e[1]?"."+e[1]:"",f=e[1]+"!",S.access(this,function(c){return c===b?(l=this.triggerHandler("getData"+f,[e[0]]),l===b&&j&&(l=S.data(j,a),l=d(j,a,l)),l===b&&e[1]?this.data(e[0]):l):(e[1]=c,void this.each(function(){var b=S(this);b.triggerHandler("setData"+f,e),S.data(this,a,c),b.triggerHandler("changeData"+f,e)}))},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){S.removeData(this,a)})}}),S.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=S._data(a,b),c&&(!d||S.isArray(c)?d=S._data(a,b,S.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=S.queue(a,b),d=c.length,e=c.shift(),f=S._queueHooks(a,b),g=function(){S.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return S._data(a,c)||S._data(a,c,{empty:S.Callbacks("once memory").add(function(){S.removeData(a,b+"queue",!0),S.removeData(a,c,!0)})})}}),S.fn.extend({queue:function(a,c){var d=2;return"string"!=typeof a&&(c=a,a="fx",d--),arguments.length<d?S.queue(this[0],a):c===b?this:this.each(function(){var b=S.queue(this,a,c);S._queueHooks(this,a),"fx"===a&&"inprogress"!==b[0]&&S.dequeue(this,a)})},dequeue:function(a){return this.each(function(){S.dequeue(this,a)})},delay:function(a,b){return a=S.fx?S.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=S.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};for("string"!=typeof a&&(c=a,a=b),a=a||"fx";h--;)d=S._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var ja,ka,la=/[\t\r\n]/g,ma=/\r/g,na=/^(?:button|input)$/i,oa=/^(?:button|input|object|select|textarea)$/i,pa=/^a(?:rea|)$/i,qa=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,ra=S.support.getSetAttribute;S.fn.extend({attr:function(a,b){return S.access(this,S.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){S.removeAttr(this,a)})},prop:function(a,b){return S.access(this,S.prop,a,b,arguments.length>1)},removeProp:function(a){return a=S.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(a){}})},addClass:function(a){var b,c,d,e,f,g,h;if(S.isFunction(a))return this.each(function(b){S(this).addClass(a.call(this,b,this.className))});if(a&&"string"==typeof a)for(b=a.split(V),c=0,d=this.length;c<d;c++)if(e=this[c],1===e.nodeType)if(e.className||1!==b.length){for(f=" "+e.className+" ",g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=S.trim(f)}else e.className=a;return this},removeClass:function(a){var c,d,e,f,g,h,i;if(S.isFunction(a))return this.each(function(b){S(this).removeClass(a.call(this,b,this.className))});if(a&&"string"==typeof a||a===b)for(c=(a||"").split(V),h=0,i=this.length;h<i;h++)if(e=this[h],1===e.nodeType&&e.className){for(d=(" "+e.className+" ").replace(la," "),f=0,g=c.length;f<g;f++)for(;d.indexOf(" "+c[f]+" ")>=0;)d=d.replace(" "+c[f]+" "," ");e.className=a?S.trim(d):""}return this},toggleClass:function(a,b){var c=typeof a,d="boolean"==typeof b;return S.isFunction(a)?this.each(function(c){S(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var e,f=0,g=S(this),h=b,i=a.split(V);e=i[f++];)h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e);else"undefined"!==c&&"boolean"!==c||(this.className&&S._data(this,"__className__",this.className),this.className=this.className||a===!1?"":S._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;c<d;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(la," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];{if(arguments.length)return e=S.isFunction(a),this.each(function(d){var f,g=S(this);1===this.nodeType&&(f=e?a.call(this,d,g.val()):a,null==f?f="":"number"==typeof f?f+="":S.isArray(f)&&(f=S.map(f,function(a){return null==a?"":a+""})),c=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()],c&&"set"in c&&c.set(this,f,"value")!==b||(this.value=f))});if(f)return c=S.valHooks[f.type]||S.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,"string"==typeof d?d.replace(ma,""):null==d?"":d)}}}),S.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&(S.support.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!S.nodeName(c.parentNode,"optgroup"))){if(b=S(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c=S.makeArray(b);return S(a).find("option").each(function(){this.selected=S.inArray(S(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(a&&3!==i&&8!==i&&2!==i)return e&&S.isFunction(S.fn[c])?S(a)[c](d):"undefined"==typeof a.getAttribute?S.prop(a,c,d):(h=1!==i||!S.isXMLDoc(a),h&&(c=c.toLowerCase(),g=S.attrHooks[c]||(qa.test(c)?ka:ja)),d!==b?null===d?void S.removeAttr(a,c):g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d):g&&"get"in g&&h&&null!==(f=g.get(a,c))?f:(f=a.getAttribute(c),null===f?b:f))},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&1===a.nodeType)for(d=b.split(V);g<d.length;g++)e=d[g],e&&(c=S.propFix[e]||e,f=qa.test(e),f||S.attr(a,e,""),a.removeAttribute(ra?e:c),f&&c in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(na.test(a.nodeName)&&a.parentNode)S.error("type property can't be changed");else if(!S.support.radioValue&&"radio"===b&&S.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return ja&&S.nodeName(a,"button")?ja.get(a,b):b in a?a.value:null},set:function(a,b,c){return ja&&S.nodeName(a,"button")?ja.set(a,b,c):void(a.value=b)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(a&&3!==h&&8!==h&&2!==h)return g=1!==h||!S.isXMLDoc(a),g&&(c=S.propFix[c]||c,f=S.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):oa.test(a.nodeName)||pa.test(a.nodeName)&&a.href?0:b}}}}),ka={get:function(a,c){var d,e=S.prop(a,c);return e===!0||"boolean"!=typeof e&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?S.removeAttr(a,c):(d=S.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},S.support.enctype||(S.propFix.enctype="encoding");var sa=/^([^\.]*|)(?:\.(.+)|)$/,ta=/(?:^|\s)hover(\.\S+|)\b/,ua=/^key/,va=/^(?:mouse|contextmenu)|click/,wa=/^(?:focusinfocus|focusoutblur)$/,xa=function(a){return S.event.special.hover?a:a.replace(ta,"mouseenter$1 mouseleave$1")};S.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;if(3!==a.nodeType&&8!==a.nodeType&&c&&d&&(g=S._data(a))){for(d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=S.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return"undefined"==typeof S||a&&S.event.triggered===a.type?b:S.event.dispatch.apply(h.elem,arguments)},h.elem=a),c=S.trim(xa(c)).split(" "),j=0;j<c.length;j++)k=sa.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),q=S.event.special[l]||{},l=(f?q.delegateType:q.bindType)||l,q=S.event.special[l]||{},n=S.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&S.expr.match.needsContext.test(f),namespace:m.join(".")},o),p=i[l],p||(p=i[l]=[],p.delegateCount=0,q.setup&&q.setup.call(a,e,m,h)!==!1||(a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h))),q.add&&(q.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?p.splice(p.delegateCount++,0,n):p.push(n),S.event.global[l]=!0;a=null}},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=S.hasData(a)&&S._data(a);if(q&&(m=q.events)){for(b=S.trim(xa(b||"")).split(" "),f=0;f<b.length;f++)if(g=sa.exec(b[f])||[],h=i=g[1],j=g[2],h){for(n=S.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l=0;l<o.length;l++)p=o[l],!e&&i!==p.origType||c&&c.guid!==p.guid||j&&!j.test(p.namespace)||d&&d!==p.selector&&("**"!==d||!p.selector)||(o.splice(l--,1),p.selector&&o.delegateCount--,n.remove&&n.remove.call(a,p));0===o.length&&k!==o.length&&(n.teardown&&n.teardown.call(a,j,q.handle)!==!1||S.removeEvent(a,h,q.handle),delete m[h])}else for(h in m)S.event.remove(a,h+b[f],c,d,!0);S.isEmptyObject(m)&&(delete q.handle,S.removeData(a,"events",!0));
}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,f){if(!e||3!==e.nodeType&&8!==e.nodeType){var g,h,i,j,k,l,m,n,o,p,q=c.type||c,r=[];if(!wa.test(q+S.event.triggered)&&(q.indexOf("!")>=0&&(q=q.slice(0,-1),h=!0),q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),e&&!S.event.customEvent[q]||S.event.global[q]))if(c="object"==typeof c?c[S.expando]?c:new S.Event(q,c):new S.Event(q),c.type=q,c.isTrigger=!0,c.exclusive=h,c.namespace=r.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l=q.indexOf(":")<0?"on"+q:"",e){if(c.result=b,c.target||(c.target=e),d=null!=d?S.makeArray(d):[],d.unshift(c),m=S.event.special[q]||{},!m.trigger||m.trigger.apply(e,d)!==!1){if(o=[[e,m.bindType||q]],!f&&!m.noBubble&&!S.isWindow(e)){for(p=m.delegateType||q,j=wa.test(p+q)?e:e.parentNode,k=e;j;j=j.parentNode)o.push([j,p]),k=j;k===(e.ownerDocument||I)&&o.push([k.defaultView||k.parentWindow||a,p])}for(i=0;i<o.length&&!c.isPropagationStopped();i++)j=o[i][0],c.type=o[i][1],n=(S._data(j,"events")||{})[c.type]&&S._data(j,"handle"),n&&n.apply(j,d),n=l&&j[l],n&&S.acceptData(j)&&n.apply&&n.apply(j,d)===!1&&c.preventDefault();return c.type=q,f||c.isDefaultPrevented()||m._default&&m._default.apply(e.ownerDocument,d)!==!1||"click"===q&&S.nodeName(e,"a")||!S.acceptData(e)||l&&e[q]&&("focus"!==q&&"blur"!==q||0!==c.target.offsetWidth)&&!S.isWindow(e)&&(k=e[l],k&&(e[l]=null),S.event.triggered=q,e[q](),S.event.triggered=b,k&&(e[l]=k)),c.result}}else{g=S.cache;for(i in g)g[i].events&&g[i].events[q]&&S.event.trigger(c,d,g[i].handle.elem,!0)}}},dispatch:function(c){c=S.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m=(S._data(this,"events")||{})[c.type]||[],n=m.delegateCount,o=N.call(arguments),p=!c.exclusive&&!c.namespace,q=S.event.special[c.type]||{},r=[];if(o[0]=c,c.delegateTarget=this,!q.preDispatch||q.preDispatch.call(this,c)!==!1){if(n&&(!c.button||"click"!==c.type))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||"click"!==c.type){for(h={},j=[],d=0;d<n;d++)k=m[d],l=k.selector,h[l]===b&&(h[l]=k.needsContext?S(l,this).index(f)>=0:S.find(l,this,null,[f]).length),h[l]&&j.push(k);j.length&&r.push({elem:f,matches:j})}for(m.length>n&&r.push({elem:this,matches:m.slice(n)}),d=0;d<r.length&&!c.isPropagationStopped();d++)for(i=r[d],c.currentTarget=i.elem,e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++)k=i.matches[e],(p||!c.namespace&&!k.namespace||c.namespace_re&&c.namespace_re.test(k.namespace))&&(c.data=k.data,c.handleObj=k,g=((S.event.special[k.origType]||{}).handle||k.handler).apply(i.elem,o),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation())));return q.postDispatch&&q.postDispatch.call(this,c),c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,e,f,g=c.button,h=c.fromElement;return null==a.pageX&&null!=c.clientX&&(d=a.target.ownerDocument||I,e=d.documentElement,f=d.body,a.pageX=c.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=c.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h),a.which||g===b||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[S.expando])return a;var b,c,d=a,e=S.event.fixHooks[a.type]||{},f=e.props?this.props.concat(e.props):this.props;for(a=S.Event(d),b=f.length;b;)c=f[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||I),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,e.filter?e.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){S.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=S.extend(new S.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?S.event.trigger(e,null,b):S.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},S.event.handle=S.event.dispatch,S.removeEvent=I.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},S.Event=function(a,b){return this instanceof S.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?g:f):this.type=a,b&&S.extend(this,b),this.timeStamp=a&&a.timeStamp||S.now(),void(this[S.expando]=!0)):new S.Event(a,b)},S.Event.prototype={preventDefault:function(){this.isDefaultPrevented=g;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=g;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=g,this.stopPropagation()},isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f},S.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){S.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;f.selector;return e&&(e===d||S.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),S.fn.extend({on:function(a,c,d,e,g){var h,i;if("object"==typeof a){"string"!=typeof c&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}if(null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof c?(e=d,d=b):(e=d,d=c,c=b)),e===!1)e=f;else if(!e)return this;return 1===g&&(h=e,e=function(a){return S().off(a),h.apply(this,arguments)},e.guid=h.guid||(h.guid=S.guid++)),this.each(function(){S.event.add(this,a,e,d,c)})},off:function(a,c,d){var e,g;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,S(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if("object"==typeof a){for(g in a)this.off(g,c,a[g]);return this}return c!==!1&&"function"!=typeof c||(d=c,c=b),d===!1&&(d=f),this.each(function(){S.event.remove(this,a,d,c)})},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){S.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return S.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||S.guid++,d=0,e=function(c){var e=(S._data(this,"lastToggle"+a.guid)||0)%d;return S._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};for(e.guid=c;d<b.length;)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){S.fn[b]=function(a,c){return null==c&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},ua.test(b)&&(S.event.fixHooks[b]=S.event.keyHooks),va.test(b)&&(S.event.fixHooks[b]=S.event.mouseHooks)}),function(a,b){function c(a,b,c,d){c=c||[],b=b||F;var e,f,g,h,i=b.nodeType;if(!a||"string"!=typeof a)return c;if(1!==i&&9!==i)return[];if(g=v(b),!g&&!d&&(e=ca.exec(a)))if(h=e[1]){if(9===i){if(f=b.getElementById(h),!f||!f.parentNode)return c;if(f.id===h)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(h))&&w(b,f)&&f.id===h)return c.push(f),c}else{if(e[2])return K.apply(c,L.call(b.getElementsByTagName(a),0)),c;if((h=e[3])&&ma&&b.getElementsByClassName)return K.apply(c,L.call(b.getElementsByClassName(h),0)),c}return p(a.replace($,"$1"),b,c,d,g)}function d(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function e(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function f(a){return N(function(b){return b=+b,N(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function g(a,b,c){if(a===b)return c;for(var d=a.nextSibling;d;){if(d===b)return-1;d=d.nextSibling}return 1}function h(a,b){var d,e,f,g,h,i,j,k=Q[D][a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],j=t.preFilter;h;){d&&!(e=_.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=aa.exec(h))&&(f.push(d=new E(e.shift())),h=h.slice(d.length),d.type=e[0].replace($," "));for(g in t.filter)!(e=ha[g].exec(h))||j[g]&&!(e=j[g](e))||(f.push(d=new E(e.shift())),h=h.slice(d.length),d.type=g,d.matches=e);if(!d)break}return b?h.length:h?c.error(a):Q(a,i).slice(0)}function i(a,b,c){var d=b.dir,e=c&&"parentNode"===b.dir,f=I++;return b.first?function(b,c,f){for(;b=b[d];)if(e||1===b.nodeType)return a(b,c,f)}:function(b,c,g){if(g){for(;b=b[d];)if((e||1===b.nodeType)&&a(b,c,g))return b}else for(var h,i=H+" "+f+" ",j=i+r;b=b[d];)if(e||1===b.nodeType){if((h=b[D])===j)return b.sizset;if("string"==typeof h&&0===h.indexOf(i)){if(b.sizset)return b}else{if(b[D]=j,a(b,c,g))return b.sizset=!0,b;b.sizset=!1}}}}function j(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function k(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function l(a,b,c,d,e,f){return d&&!d[D]&&(d=l(d)),e&&!e[D]&&(e=l(e,f)),N(function(f,g,h,i){var j,l,m,n=[],p=[],q=g.length,r=f||o(b||"*",h.nodeType?[h]:h,[]),s=!a||!f&&b?r:k(r,n,a,h,i),t=c?e||(f?a:q||d)?[]:g:s;if(c&&c(s,t,h,i),d)for(j=k(t,p),d(j,[],h,i),l=j.length;l--;)(m=j[l])&&(t[p[l]]=!(s[p[l]]=m));if(f){if(e||a){if(e){for(j=[],l=t.length;l--;)(m=t[l])&&j.push(s[l]=m);e(null,t=[],j,i)}for(l=t.length;l--;)(m=t[l])&&(j=e?M.call(f,m):n[l])>-1&&(f[j]=!(g[j]=m))}}else t=k(t===g?t.splice(q,t.length):t),e?e(null,g,t,i):K.apply(g,t)})}function m(a){for(var b,c,d,e=a.length,f=t.relative[a[0].type],g=f||t.relative[" "],h=f?1:0,k=i(function(a){return a===b},g,!0),n=i(function(a){return M.call(b,a)>-1},g,!0),o=[function(a,c,d){return!f&&(d||c!==A)||((b=c).nodeType?k(a,c,d):n(a,c,d))}];h<e;h++)if(c=t.relative[a[h].type])o=[i(j(o),c)];else{if(c=t.filter[a[h].type].apply(null,a[h].matches),c[D]){for(d=++h;d<e&&!t.relative[a[d].type];d++);return l(h>1&&j(o),h>1&&a.slice(0,h-1).join("").replace($,"$1"),c,h<d&&m(a.slice(h,d)),d<e&&m(a=a.slice(d)),d<e&&a.join(""))}o.push(c)}return j(o)}function n(a,b){var d=b.length>0,e=a.length>0,f=function(g,h,i,j,l){var m,n,o,p=[],q=0,s="0",u=g&&[],v=null!=l,w=A,x=g||e&&t.find.TAG("*",l&&h.parentNode||h),y=H+=null==w?1:Math.E;for(v&&(A=h!==F&&h,r=f.el);null!=(m=x[s]);s++){if(e&&m){for(n=0;o=a[n];n++)if(o(m,h,i)){j.push(m);break}v&&(H=y,r=++f.el)}d&&((m=!o&&m)&&q--,g&&u.push(m))}if(q+=s,d&&s!==q){for(n=0;o=b[n];n++)o(u,p,h,i);if(g){if(q>0)for(;s--;)u[s]||p[s]||(p[s]=J.call(j));p=k(p)}K.apply(j,p),v&&!g&&p.length>0&&q+b.length>1&&c.uniqueSort(j)}return v&&(H=y,A=w),u};return f.el=0,d?N(f):f}function o(a,b,d){for(var e=0,f=b.length;e<f;e++)c(a,b[e],d);return d}function p(a,b,c,d,e){var f,g,i,j,k,l=h(a);l.length;if(!d&&1===l.length){if(g=l[0]=l[0].slice(0),g.length>2&&"ID"===(i=g[0]).type&&9===b.nodeType&&!e&&t.relative[g[1].type]){if(b=t.find.ID(i.matches[0].replace(ga,""),b,e)[0],!b)return c;a=a.slice(g.shift().length)}for(f=ha.POS.test(a)?-1:g.length-1;f>=0&&(i=g[f],!t.relative[j=i.type]);f--)if((k=t.find[j])&&(d=k(i.matches[0].replace(ga,""),da.test(g[0].type)&&b.parentNode||b,e))){if(g.splice(f,1),a=d.length&&g.join(""),!a)return K.apply(c,L.call(d,0)),c;break}}return x(a,l)(d,b,e,c,da.test(a)),c}function q(){}var r,s,t,u,v,w,x,y,z,A,B=!0,C="undefined",D=("sizcache"+Math.random()).replace(".",""),E=String,F=a.document,G=F.documentElement,H=0,I=0,J=[].pop,K=[].push,L=[].slice,M=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},N=function(a,b){return a[D]=null==b||b,a},O=function(){var a={},b=[];return N(function(c,d){return b.push(c)>t.cacheLength&&delete a[b.shift()],a[c+" "]=d},a)},P=O(),Q=O(),R=O(),T="[\\x20\\t\\r\\n\\f]",U="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",V=U.replace("w","w#"),W="([*^$|!~]?=)",X="\\["+T+"*("+U+")"+T+"*(?:"+W+T+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+V+")|)|)"+T+"*\\]",Y=":("+U+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+X+")|[^:]|\\\\.)*|.*))\\)|)",Z=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+T+"*((?:-\\d)?\\d*)"+T+"*\\)|)(?=[^-]|$)",$=new RegExp("^"+T+"+|((?:^|[^\\\\])(?:\\\\.)*)"+T+"+$","g"),_=new RegExp("^"+T+"*,"+T+"*"),aa=new RegExp("^"+T+"*([\\x20\\t\\r\\n\\f>+~])"+T+"*"),ba=new RegExp(Y),ca=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,da=/[\x20\t\r\n\f]*[+~]/,ea=/h\d/i,fa=/input|select|textarea|button/i,ga=/\\(?!\\)/g,ha={ID:new RegExp("^#("+U+")"),CLASS:new RegExp("^\\.("+U+")"),NAME:new RegExp("^\\[name=['\"]?("+U+")['\"]?\\]"),TAG:new RegExp("^("+U.replace("w","w*")+")"),ATTR:new RegExp("^"+X),PSEUDO:new RegExp("^"+Y),POS:new RegExp(Z,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+T+"*(even|odd|(([+-]|)(\\d*)n|)"+T+"*(?:([+-]|)"+T+"*(\\d+)|))"+T+"*\\)|)","i"),needsContext:new RegExp("^"+T+"*[>+~]|"+Z,"i")},ia=function(a){var b=F.createElement("div");try{return a(b)}catch(a){return!1}finally{b=null}},ja=ia(function(a){return a.appendChild(F.createComment("")),!a.getElementsByTagName("*").length}),ka=ia(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==C&&"#"===a.firstChild.getAttribute("href")}),la=ia(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return"boolean"!==b&&"string"!==b}),ma=ia(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!(!a.getElementsByClassName||!a.getElementsByClassName("e").length)&&(a.lastChild.className="e",2===a.getElementsByClassName("e").length)}),na=ia(function(a){a.id=D+0,a.innerHTML="<a name='"+D+"'></a><div name='"+D+"'></div>",G.insertBefore(a,G.firstChild);var b=F.getElementsByName&&F.getElementsByName(D).length===2+F.getElementsByName(D+0).length;return s=!F.getElementById(D),G.removeChild(a),b});try{L.call(G.childNodes,0)[0].nodeType}catch(a){L=function(a){for(var b,c=[];b=this[a];a++)c.push(b);return c}}c.matches=function(a,b){return c(a,null,null,b)},c.matchesSelector=function(a,b){return c(b,null,null,[a]).length>0},u=c.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=u(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d];d++)c+=u(b);return c},v=c.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},w=c.contains=G.contains?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&1===d.nodeType&&c.contains&&c.contains(d))}:G.compareDocumentPosition?function(a,b){return b&&!!(16&a.compareDocumentPosition(b))}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},c.attr=function(a,b){var c,d=v(a);return d||(b=b.toLowerCase()),(c=t.attrHandle[b])?c(a):d||la?a.getAttribute(b):(c=a.getAttributeNode(b),c?"boolean"==typeof a[b]?a[b]?b:null:c.specified?c.value:null:null)},t=c.selectors={cacheLength:50,createPseudo:N,match:ha,attrHandle:ka?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:s?function(a,b,c){if(typeof b.getElementById!==C&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==C&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==C&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:ja?function(a,b){if(typeof b.getElementsByTagName!==C)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if("*"===a){for(var d,e=[],f=0;d=c[f];f++)1===d.nodeType&&e.push(d);return e}return c},NAME:na&&function(a,b){if(typeof b.getElementsByName!==C)return b.getElementsByName(name)},CLASS:ma&&function(a,b,c){if(typeof b.getElementsByClassName!==C&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ga,""),a[3]=(a[4]||a[5]||"").replace(ga,""),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1]?(a[2]||c.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*("even"===a[2]||"odd"===a[2])),a[4]=+(a[6]+a[7]||"odd"===a[2])):a[2]&&c.error(a[0]),a},PSEUDO:function(a){var b,c;return ha.CHILD.test(a[0])?null:(a[3]?a[2]=a[3]:(b=a[4])&&(ba.test(b)&&(c=h(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b),a.slice(0,3))}},filter:{ID:s?function(a){return a=a.replace(ga,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(ga,""),function(b){var c=typeof b.getAttributeNode!==C&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return"*"===a?function(){return!0}:(a=a.replace(ga,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=P[D][a+" "];return b||(b=new RegExp("(^|"+T+")"+a+"("+T+"|$)"))&&P(a,function(a){return b.test(a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,d){return function(e,f){var g=c.attr(e,a);return null==g?"!="===b:!b||(g+="","="===b?g===d:"!="===b?g!==d:"^="===b?d&&0===g.indexOf(d):"*="===b?d&&g.indexOf(d)>-1:"$="===b?d&&g.substr(g.length-d.length)===d:"~="===b?(" "+g+" ").indexOf(d)>-1:"|="===b&&(g===d||g.substr(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d){return"nth"===a?function(a){var b,e,f=a.parentNode;if(1===c&&0===d)return!0;if(f)for(e=0,b=f.firstChild;b&&(1!==b.nodeType||(e++,a!==b));b=b.nextSibling);return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":for(;c=c.previousSibling;)if(1===c.nodeType)return!1;if("first"===a)return!0;c=b;case"last":for(;c=c.nextSibling;)if(1===c.nodeType)return!1;return!0}}},PSEUDO:function(a,b){var d,e=t.pseudos[a]||t.setFilters[a.toLowerCase()]||c.error("unsupported pseudo: "+a);return e[D]?e(b):e.length>1?(d=[a,a,"",b],t.setFilters.hasOwnProperty(a.toLowerCase())?N(function(a,c){for(var d,f=e(a,b),g=f.length;g--;)d=M.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,d)}):e}},pseudos:{not:N(function(a){var b=[],c=[],d=x(a.replace($,"$1"));return d[D]?N(function(a,b,c,e){for(var f,g=d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:N(function(a){return function(b){return c(a,b).length>0}}),contains:N(function(a){return function(b){return(b.textContent||b.innerText||u(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!t.pseudos.empty(a)},empty:function(a){var b;for(a=a.firstChild;a;){if(a.nodeName>"@"||3===(b=a.nodeType)||4===b)return!1;a=a.nextSibling}return!0},header:function(a){return ea.test(a.nodeName)},text:function(a){var b,c;return"input"===a.nodeName.toLowerCase()&&"text"===(b=a.type)&&(null==(c=a.getAttribute("type"))||c.toLowerCase()===b)},radio:d("radio"),checkbox:d("checkbox"),file:d("file"),password:d("password"),image:d("image"),submit:e("submit"),reset:e("reset"),button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},input:function(a){return fa.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},active:function(a){return a===a.ownerDocument.activeElement},first:f(function(){return[0]}),last:f(function(a,b){return[b-1]}),eq:f(function(a,b,c){return[c<0?c+b:c]}),even:f(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:f(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:f(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:f(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},y=G.compareDocumentPosition?function(a,b){return a===b?(z=!0,0):(a.compareDocumentPosition&&b.compareDocumentPosition?4&a.compareDocumentPosition(b):a.compareDocumentPosition)?-1:1}:function(a,b){if(a===b)return z=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return g(a,b);if(!h)return-1;if(!i)return 1;for(;j;)e.unshift(j),j=j.parentNode;for(j=i;j;)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return g(e[k],f[k]);return k===c?g(a,f[k],-1):g(e[k],b,1)},[0,0].sort(y),B=!z,c.uniqueSort=function(a){var b,c=[],d=1,e=0;if(z=B,a.sort(y),z){for(;b=a[d];d++)b===a[d-1]&&(e=c.push(d));for(;e--;)a.splice(c[e],1)}return a},c.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},x=c.compile=function(a,b){var c,d=[],e=[],f=R[D][a+" "];if(!f){for(b||(b=h(a)),c=b.length;c--;)f=m(b[c]),f[D]?d.push(f):e.push(f);f=R(a,n(e,d))}return f},F.querySelectorAll&&!function(){var a,b=p,d=/'|\\/g,e=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,f=[":focus"],g=[":active"],i=G.matchesSelector||G.mozMatchesSelector||G.webkitMatchesSelector||G.oMatchesSelector||G.msMatchesSelector;ia(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||f.push("\\["+T+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||f.push(":checked")}),ia(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&f.push("[*^$]="+T+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||f.push(":enabled",":disabled")}),f=new RegExp(f.join("|")),p=function(a,c,e,g,i){if(!g&&!i&&!f.test(a)){var j,k,l=!0,m=D,n=c,o=9===c.nodeType&&a;if(1===c.nodeType&&"object"!==c.nodeName.toLowerCase()){for(j=h(a),(l=c.getAttribute("id"))?m=l.replace(d,"\\$&"):c.setAttribute("id",m),m="[id='"+m+"'] ",k=j.length;k--;)j[k]=m+j[k].join("");n=da.test(a)&&c.parentNode||c,o=j.join(",")}if(o)try{return K.apply(e,L.call(n.querySelectorAll(o),0)),e}catch(a){}finally{l||c.removeAttribute("id")}}return b(a,c,e,g,i)},i&&(ia(function(b){a=i.call(b,"div");try{i.call(b,"[test!='']:sizzle"),g.push("!=",Y)}catch(a){}}),g=new RegExp(g.join("|")),c.matchesSelector=function(b,d){if(d=d.replace(e,"='$1']"),!v(b)&&!g.test(d)&&!f.test(d))try{var h=i.call(b,d);if(h||a||b.document&&11!==b.document.nodeType)return h}catch(a){}return c(d,null,null,[b]).length>0})}(),t.pseudos.nth=t.pseudos.eq,t.filters=q.prototype=t.pseudos,t.setFilters=new q,c.attr=S.attr,S.find=c,S.expr=c.selectors,S.expr[":"]=S.expr.pseudos,S.unique=c.uniqueSort,S.text=c.getText,S.isXMLDoc=c.isXML,S.contains=c.contains}(a);var ya=/Until$/,za=/^(?:parents|prev(?:Until|All))/,Aa=/^.[^:#\[\.,]*$/,Ba=S.expr.match.needsContext,Ca={children:!0,contents:!0,next:!0,prev:!0};S.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if("string"!=typeof a)return S(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(S.contains(h[b],this))return!0});for(g=this.pushStack("","find",a),b=0,c=this.length;b<c;b++)if(d=g.length,S.find(a,this[b],g),b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}return g},has:function(a){var b,c=S(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(S.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(j(this,a,!1),"not",a)},filter:function(a){return this.pushStack(j(this,a,!0),"filter",a)},is:function(a){return!!a&&("string"==typeof a?Ba.test(a)?S(a,this.context).index(this[0])>=0:S.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=Ba.test(a)||"string"!=typeof a?S(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c.ownerDocument&&c!==b&&11!==c.nodeType;){if(g?g.index(c)>-1:S.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}return f=f.length>1?S.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?"string"==typeof a?S.inArray(this[0],S(a)):S.inArray(a.jqx?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c="string"==typeof a?S(a,b):S.makeArray(a&&a.nodeType?[a]:a),d=S.merge(this.get(),c);return this.pushStack(h(c[0])||h(d[0])?d:S.unique(d))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),S.fn.andSelf=S.fn.addBack,S.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return S.dir(a,"parentNode")},parentsUntil:function(a,b,c){return S.dir(a,"parentNode",c)},next:function(a){return i(a,"nextSibling")},prev:function(a){return i(a,"previousSibling")},nextAll:function(a){return S.dir(a,"nextSibling")},prevAll:function(a){return S.dir(a,"previousSibling")},nextUntil:function(a,b,c){return S.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return S.dir(a,"previousSibling",c)},siblings:function(a){return S.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return S.sibling(a.firstChild)},contents:function(a){return S.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:S.merge([],a.childNodes)}},function(a,b){S.fn[a]=function(c,d){var e=S.map(this,b,c);return ya.test(a)||(d=c),d&&"string"==typeof d&&(e=S.filter(d,e)),e=this.length>1&&!Ca[a]?S.unique(e):e,this.length>1&&za.test(a)&&(e=e.reverse()),this.pushStack(e,a,N.call(arguments).join(","))}}),S.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),1===b.length?S.find.matchesSelector(b[0],a)?[b[0]]:[]:S.find.matches(a,b)},dir:function(a,c,d){for(var e=[],f=a[c];f&&9!==f.nodeType&&(d===b||1!==f.nodeType||!S(f).is(d));)1===f.nodeType&&e.push(f),f=f[c];return e},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Da="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ea=/ JQXLite\d+="(?:null|\d+)"/g,Fa=/^\s+/,Ga=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ha=/<([\w:]+)/,Ia=/<tbody/i,Ja=/<|&#?\w+;/,Ka=/<(?:script|style|link)/i,La=/<(?:script|object|embed|option|style)/i,Ma=new RegExp("<(?:"+Da+")[\\s/>]","i"),Na=/^(?:checkbox|radio)$/,Oa=/checked\s*(?:[^=]|=\s*.checked.)/i,Pa=/\/(java|ecma)script/i,Qa=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Sa=k(I),Ta=Sa.appendChild(I.createElement("div"));Ra.optgroup=Ra.option,Ra.tbody=Ra.tfoot=Ra.colgroup=Ra.caption=Ra.thead,Ra.th=Ra.td,S.support.htmlSerialize||(Ra._default=[1,"X<div>","</div>"]),S.fn.extend({text:function(a){return S.access(this,function(a){return a===b?S.text(this):this.empty().append((this[0]&&this[0].ownerDocument||I).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(S.isFunction(a))return this.each(function(b){S(this).wrapAll(a.call(this,b))});if(this[0]){var b=S(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return S.isFunction(a)?this.each(function(b){S(this).wrapInner(a.call(this,b))}):this.each(function(){var b=S(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=S.isFunction(a);return this.each(function(c){S(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){S.nodeName(this,"body")||S(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){1!==this.nodeType&&11!==this.nodeType||this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){1!==this.nodeType&&11!==this.nodeType||this.insertBefore(a,this.firstChild)})},before:function(){if(!h(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=S.clean(arguments);return this.pushStack(S.merge(a,this),"before",this.selector)}},after:function(){if(!h(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=S.clean(arguments);return this.pushStack(S.merge(this,a),"after",this.selector)}},remove:function(a,b){for(var c,d=0;null!=(c=this[d]);d++)a&&!S.filter(a,[c]).length||(b||1!==c.nodeType||(S.cleanData(c.getElementsByTagName("*")),S.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)for(1===a.nodeType&&S.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return S.clone(this,a,b)})},html:function(a){return S.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return 1===c.nodeType?c.innerHTML.replace(Ea,""):b;if("string"==typeof a&&!Ka.test(a)&&(S.support.htmlSerialize||!Ma.test(a))&&(S.support.leadingWhitespace||!Fa.test(a))&&!Ra[(Ha.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ga,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},1===c.nodeType&&(S.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(a){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return h(this[0])?this.length?this.pushStack(S(S.isFunction(a)?a():a),"replaceWith",a):this:S.isFunction(a)?this.each(function(b){var c=S(this),d=c.html();c.replaceWith(a.call(this,b,d))}):("string"!=typeof a&&(a=S(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;S(this).remove(),b?S(b).before(a):S(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],m=this.length;if(!S.support.checkClone&&m>1&&"string"==typeof j&&Oa.test(j))return this.each(function(){S(this).domManip(a,c,d)});if(S.isFunction(j))return this.each(function(e){var f=S(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){if(e=S.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,1===g.childNodes.length&&(g=f),f)for(c=c&&S.nodeName(f,"tr"),h=e.cacheable||m-1;i<m;i++)d.call(c&&S.nodeName(this[i],"table")?l(this[i],"tbody"):this[i],i===h?g:S.clone(g,!0,!0));g=f=null,k.length&&S.each(k,function(a,b){b.src?S.ajax?S.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,throws:!0}):S.error("no ajax"):S.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Qa,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),S.buildFragment=function(a,c,d){var e,f,g,h=a[0];return c=c||I,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,!(1===a.length&&"string"==typeof h&&h.length<512&&c===I&&"<"===h.charAt(0))||La.test(h)||!S.support.checkClone&&Oa.test(h)||!S.support.html5Clone&&Ma.test(h)||(f=!0,e=S.fragments[h],g=e!==b),e||(e=c.createDocumentFragment(),S.clean(a,c,e,d),f&&(S.fragments[h]=g&&e)),{fragment:e,
cacheable:f}},S.fragments={},S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){S.fn[a]=function(c){var d,e=0,f=[],g=S(c),h=g.length,i=1===this.length&&this[0].parentNode;if((null==i||i&&11===i.nodeType&&1===i.childNodes.length)&&1===h)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),S(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),S.extend({clone:function(a,b,c){var d,e,f,g;if(S.support.html5Clone||S.isXMLDoc(a)||!Ma.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(Ta.innerHTML=a.outerHTML,Ta.removeChild(g=Ta.firstChild)),!(S.support.noCloneEvent&&S.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||S.isXMLDoc(a)))for(n(a,g),d=o(a),e=o(g),f=0;d[f];++f)e[f]&&n(d[f],e[f]);if(b&&(m(a,g),c))for(d=o(a),e=o(g),f=0;d[f];++f)m(d[f],e[f]);return d=e=null,g},clean:function(a,b,c,d){var e,f,g,h,i,j,l,m,n,o,q,r=b===I&&Sa,s=[];for(b&&"undefined"!=typeof b.createDocumentFragment||(b=I),e=0;null!=(g=a[e]);e++)if("number"==typeof g&&(g+=""),g){if("string"==typeof g)if(Ja.test(g)){for(r=r||k(b),l=b.createElement("div"),r.appendChild(l),g=g.replace(Ga,"<$1></$2>"),h=(Ha.exec(g)||["",""])[1].toLowerCase(),i=Ra[h]||Ra._default,j=i[0],l.innerHTML=i[1]+g+i[2];j--;)l=l.lastChild;if(!S.support.tbody)for(m=Ia.test(g),n="table"!==h||m?"<table>"!==i[1]||m?[]:l.childNodes:l.firstChild&&l.firstChild.childNodes,f=n.length-1;f>=0;--f)S.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f]);!S.support.leadingWhitespace&&Fa.test(g)&&l.insertBefore(b.createTextNode(Fa.exec(g)[0]),l.firstChild),g=l.childNodes,l.parentNode.removeChild(l)}else g=b.createTextNode(g);g.nodeType?s.push(g):S.merge(s,g)}if(l&&(g=l=r=null),!S.support.appendChecked)for(e=0;null!=(g=s[e]);e++)S.nodeName(g,"input")?p(g):"undefined"!=typeof g.getElementsByTagName&&S.grep(g.getElementsByTagName("input"),p);if(c)for(o=function(a){if(!a.type||Pa.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)},e=0;null!=(g=s[e]);e++)S.nodeName(g,"script")&&o(g)||(c.appendChild(g),"undefined"!=typeof g.getElementsByTagName&&(q=S.grep(S.merge([],g.getElementsByTagName("script")),o),s.splice.apply(s,[e+1,0].concat(q)),e+=q.length));return s},cleanData:function(a,b){for(var c,d,e,f,g=0,h=S.expando,i=S.cache,j=S.support.deleteExpando,k=S.event.special;null!=(e=a[g]);g++)if((b||S.acceptData(e))&&(d=e[h],c=d&&i[d])){if(c.events)for(f in c.events)k[f]?S.event.remove(e,f):S.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,S.deletedIds.push(d))}}}),function(){var a,b;S.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=S.uaMatch(J.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),S.browser=b,S.sub=function(){function a(b,c){return new a.fn.init(b,c)}S.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(c,d){return d&&d instanceof S&&!(d instanceof a)&&(d=a(d)),S.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(I);return a}}();var Ua,Va,Wa,Xa=/alpha\([^)]*\)/i,Ya=/opacity=([^)]*)/,Za=/^(top|right|bottom|left)$/,$a=/^(none|table(?!-c[ea]).+)/,_a=/^margin/,ab=new RegExp("^("+T+")(.*)$","i"),bb=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),cb=new RegExp("^([-+])=("+T+")","i"),db={BODY:"block"},eb={position:"absolute",visibility:"hidden",display:"block"},fb={letterSpacing:0,fontWeight:400},gb=["Top","Right","Bottom","Left"],hb=["Webkit","O","Moz","ms"],ib=S.fn.toggle;S.fn.extend({css:function(a,c){return S.access(this,function(a,c,d){return d!==b?S.style(a,c,d):S.css(a,c)},a,c,arguments.length>1)},show:function(){return s(this,!0)},hide:function(){return s(this)},toggle:function(a,b){var c="boolean"==typeof a;return S.isFunction(a)&&S.isFunction(b)?ib.apply(this,arguments):this.each(function(){(c?a:r(this))?S(this).show():S(this).hide()})}}),S.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ua(a,"opacity");return""===c?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:S.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,h,i=S.camelCase(c),j=a.style;if(c=S.cssProps[i]||(S.cssProps[i]=q(j,i)),h=S.cssHooks[c]||S.cssHooks[i],d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];if(g=typeof d,"string"===g&&(f=cb.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(S.css(a,c)),g="number"),!(null==d||"number"===g&&isNaN(d)||("number"!==g||S.cssNumber[i]||(d+="px"),h&&"set"in h&&(d=h.set(a,d,e))===b)))try{j[c]=d}catch(a){}}},css:function(a,c,d,e){var f,g,h,i=S.camelCase(c);return c=S.cssProps[i]||(S.cssProps[i]=q(a.style,i)),h=S.cssHooks[c]||S.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=Ua(a,c)),"normal"===f&&c in fb&&(f=fb[c]),d||e!==b?(g=parseFloat(f),d||S.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?Ua=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h.getPropertyValue(c)||h[c],""!==d||S.contains(b.ownerDocument,b)||(d=S.style(b,c)),bb.test(d)&&_a.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:I.documentElement.currentStyle&&(Ua=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return null==e&&f&&f[b]&&(e=f[b]),bb.test(e)&&!Za.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left="fontSize"===b?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),""===e?"auto":e}),S.each(["height","width"],function(a,b){S.cssHooks[b]={get:function(a,c,d){if(c)return 0===a.offsetWidth&&$a.test(Ua(a,"display"))?S.swap(a,eb,function(){return v(a,b,d)}):v(a,b,d)},set:function(a,c,d){return t(a,c,d?u(a,b,d,S.support.boxSizing&&"border-box"===S.css(a,"boxSizing")):0)}}}),S.support.opacity||(S.cssHooks.opacity={get:function(a,b){return Ya.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=S.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,b>=1&&""===S.trim(f.replace(Xa,""))&&c.removeAttribute&&(c.removeAttribute("filter"),d&&!d.filter)||(c.filter=Xa.test(f)?f.replace(Xa,e):f+" "+e)}}),S(function(){S.support.reliableMarginRight||(S.cssHooks.marginRight={get:function(a,b){return S.swap(a,{display:"inline-block"},function(){if(b)return Ua(a,"marginRight")})}}),!S.support.pixelPosition&&S.fn.position&&S.each(["top","left"],function(a,b){S.cssHooks[b]={get:function(a,c){if(c){var d=Ua(a,b);return bb.test(d)?S(a).position()[b]+"px":d}}}})}),S.expr&&S.expr.filters&&(S.expr.filters.hidden=function(a){return 0===a.offsetWidth&&0===a.offsetHeight||!S.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||Ua(a,"display"))},S.expr.filters.visible=function(a){return!S.expr.filters.hidden(a)}),S.each({margin:"",padding:"",border:"Width"},function(a,b){S.cssHooks[a+b]={expand:function(c){var d,e="string"==typeof c?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+gb[d]+b]=e[d]||e[d-2]||e[0];return f}},_a.test(a)||(S.cssHooks[a+b].set=t)});var jb=/%20/g,kb=/\[\]$/,lb=/\r?\n/g,mb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,nb=/^(?:select|textarea)/i;S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?S.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||nb.test(this.nodeName)||mb.test(this.type))}).map(function(a,b){var c=S(this).val();return null==c?null:S.isArray(c)?S.map(c,function(a,c){return{name:b.name,value:a.replace(lb,"\r\n")}}):{name:b.name,value:c.replace(lb,"\r\n")}}).get()}}),S.param=function(a,c){var d,e=[],f=function(a,b){b=S.isFunction(b)?b():null==b?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(c===b&&(c=S.ajaxSettings&&S.ajaxSettings.traditional),S.isArray(a)||a.jqx&&!S.isPlainObject(a))S.each(a,function(){f(this.name,this.value)});else for(d in a)x(d,a[d],c,f);return e.join("&").replace(jb,"+")},S.support.ajax&&S.ajaxTransport(function(c){if(!c.crossDomain||S.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();if(c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async),c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),c.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(a){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||4===i.readyState))if(d=b,g&&(i.onreadystatechange=S.noop,xhrOnUnloadAbort&&delete xhrCallbacks[g]),e)4!==i.readyState&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(a){j=""}h||!c.isLocal||c.crossDomain?1223===h&&(h=204):h=l.text?200:404}}catch(a){e||f(-1,a)}l&&f(h,j,l,k)},c.async?4===i.readyState?setTimeout(d,0):(g=++xhrId,xhrOnUnloadAbort&&(xhrCallbacks||(xhrCallbacks={},S(a).unload(xhrOnUnloadAbort)),xhrCallbacks[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var ob,pb,qb=/^(?:toggle|show|hide)$/,rb=new RegExp("^(?:([-+])=|)("+T+")([a-z%]*)$","i"),sb=/queueHooks$/,tb=[C],ub={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=rb.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){if(c=+f[2],d=f[3]||(S.cssNumber[a]?"":"px"),"px"!==d&&h){h=S.css(e.elem,a,!0)||c||1;do i=i||".5",h/=i,S.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&1!==i&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};S.Animation=S.extend(A,{tweener:function(a,b){S.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;d<e;d++)c=a[d],ub[c]=ub[c]||[],ub[c].unshift(b)},prefilter:function(a,b){b?tb.unshift(a):tb.push(a)}}),S.Tween=D,D.prototype={constructor:D,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(S.cssNumber[c]?"":"px")},cur:function(){var a=D.propHooks[this.prop];return a&&a.get?a.get(this):D.propHooks._default.get(this)},run:function(a){var b,c=D.propHooks[this.prop];return this.options.duration?this.pos=b=S.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):D.propHooks._default.set(this),this}},D.prototype.init.prototype=D.prototype,D.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=S.css(a.elem,a.prop,!1,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){S.fx.step[a.prop]?S.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[S.cssProps[a.prop]]||S.cssHooks[a.prop])?S.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},S.each(["toggle","show","hide"],function(a,b){var c=S.fn[b];S.fn[b]=function(d,e,f){return null==d||"boolean"==typeof d||!a&&S.isFunction(d)&&S.isFunction(e)?c.apply(this,arguments):this.animate(E(b,!0),d,e,f)}}),S.fn.extend({fadeTo:function(a,b,c,d){return this.filter(r).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=S.isEmptyObject(a),f=S.speed(b,c,d),g=function(){var b=A(this,S.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return"string"!=typeof a&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=null!=a&&a+"queueHooks",f=S.timers,g=S._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&sb.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem!==this||null!=a&&f[c].queue!==a||(f[c].anim.stop(d),b=!1,f.splice(c,1));!b&&d||S.dequeue(this,a)})}}),S.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){S.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),S.speed=function(a,b,c){var d=a&&"object"==typeof a?S.extend({},a):{complete:c||!c&&b||S.isFunction(a)&&a,duration:a,easing:c&&b||b&&!S.isFunction(b)&&b};return d.duration=S.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in S.fx.speeds?S.fx.speeds[d.duration]:S.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){S.isFunction(d.old)&&d.old.call(this),d.queue&&S.dequeue(this,d.queue)},d},S.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},S.timers=[],S.fx=D.prototype.init,S.fx.tick=function(){var a,c=S.timers,d=0;for(ob=S.now();d<c.length;d++)a=c[d],a()||c[d]!==a||c.splice(d--,1);c.length||S.fx.stop(),ob=b},S.fx.timer=function(a){a()&&S.timers.push(a)&&!pb&&(pb=setInterval(S.fx.tick,S.fx.interval))},S.fx.interval=13,S.fx.stop=function(){clearInterval(pb),pb=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fx.step={},S.expr&&S.expr.filters&&(S.expr.filters.animated=function(a){return S.grep(S.timers,function(b){return a===b.elem}).length});var vb=/^(?:body|html)$/i;S.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){S.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(l)return(d=l.body)===k?S.offset.bodyOffset(k):(c=l.documentElement,S.contains(c,k)?("undefined"!=typeof k.getBoundingClientRect&&(j=k.getBoundingClientRect()),e=F(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},S.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return S.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(S.css(a,"marginTop"))||0,c+=parseFloat(S.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=S.css(a,"position");"static"===d&&(a.style.position="relative");var e,f,g=S(a),h=g.offset(),i=S.css(a,"top"),j=S.css(a,"left"),k=("absolute"===d||"fixed"===d)&&S.inArray("auto",[i,j])>-1,l={},m={};k?(m=g.position(),e=m.top,f=m.left):(e=parseFloat(i)||0,f=parseFloat(j)||0),S.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(l.top=b.top-h.top+e),null!=b.left&&(l.left=b.left-h.left+f),"using"in b?b.using.call(a,l):g.css(l)}},S.fn.extend({isRendered:function(){var a=this[0];return null!=a.parentNode&&0!==a.offsetWidth&&0!==a.offsetHeight},getSizeFromStyle:function(){var b,c=null,d=null,e=this[0];return e.style.width&&(c=e.style.width),e.style.height&&(d=e.style.height),b=a.getComputedStyle?getComputedStyle(e,null):e.currentStyle,b&&(b.width&&(c=b.width),b.height&&(d=b.height)),"0px"===c&&(c=0),"0px"===d&&(d=0),null===c&&(c=0),null===d&&(d=0),{width:c,height:d}},initAnimate:function(){},sizeStyleChanged:function(a){var b,c=this,d=function(a){var d=b;a&&a[0]&&"style"===a[0].attributeName&&"attributes"===a[0].type&&(d.element.offsetWidth===d.offsetWidth&&d.element.offsetHeight===d.offsetHeight||(d.offsetWidth=d.element.offsetWidth,d.offsetHeight=d.element.offsetHeight,c.isRendered()&&d.callback()))};b={element:c[0],offsetWidth:c[0].offsetWidth,offsetHeight:c[0].offsetHeight,callback:a};try{c.elementStyleObserver||(c.elementStyleObserver=new MutationObserver(d),c.elementStyleObserver.observe(c[0],{attributes:!0,childList:!1,characterData:!1}))}catch(a){}},position:function(){if(this[0]){var a=this[0],b=this.offsetParent(),c=this.offset(),d=vb.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(S.css(a,"marginTop"))||0,c.left-=parseFloat(S.css(a,"marginLeft"))||0,d.top+=parseFloat(S.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(S.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||I.body;a&&!vb.test(a.nodeName)&&"static"===S.css(a,"position");)a=a.offsetParent;return a||I.body})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);S.fn[a]=function(e){return S.access(this,function(a,e,f){var g=F(a);return f===b?g?c in g?g[c]:g.document.documentElement[e]:a[e]:void(g?g.scrollTo(d?S(g).scrollLeft():f,d?f:S(g).scrollTop()):a[e]=f)},a,e,arguments.length,null)}}),S.each({Height:"height",Width:"width"},function(a,c){S.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){S.fn[e]=function(e,f){var g=arguments.length&&(d||"boolean"!=typeof e),h=d||(e===!0||f===!0?"margin":"border");return S.access(this,function(c,d,e){var f;return S.isWindow(c)?c.document.documentElement["client"+a]:9===c.nodeType?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?S.css(c,d,e,h):S.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.JQXLite=a.jqxHelper=S,"function"==typeof define&&define.amd&&define.amd.JQXLite&&define("jqx",[],function(){return S})}(window),function(a){a.jQuery||a.$||(a.$=a.minQuery=a.JQXLite)}(window);var jqxBaseFramework=window.minQuery||window.jQuery;!function(a){a.jqx=a.jqx||{},jqwidgets={createInstance:function(b,c,d){if("jqxDataAdapter"==c){var e=d[0],f=d[1]||{};return new a.jqx.dataAdapter(e,f)}return a(b)[c](d||{}),a(b)[c]("getInstance")}},a.jqx.define=function(a,b,c){a[b]=function(){this.baseType&&(this.base=new a[this.baseType],this.base.defineInstance()),this.defineInstance(),this.metaInfo()},a[b].prototype.defineInstance=function(){},a[b].prototype.metaInfo=function(){},a[b].prototype.base=null,a[b].prototype.baseType=void 0,c&&a[c]&&(a[b].prototype.baseType=c)},a.jqx.invoke=function(b,c){if(0!=c.length){for(var d=typeof c==Array||c.length>0?c[0]:c,e=typeof c==Array||c.length>1?Array.prototype.slice.call(c,1):a({}).toArray();void 0==b[d]&&null!=b.base;){if(void 0!=b[d]&&a.isFunction(b[d]))return b[d].apply(b,e);if("string"==typeof d){var f=d.toLowerCase();if(void 0!=b[f]&&a.isFunction(b[f]))return b[f].apply(b,e)}b=b.base}if(void 0!=b[d]&&a.isFunction(b[d]))return b[d].apply(b,e);if("string"==typeof d){var f=d.toLowerCase();if(void 0!=b[f]&&a.isFunction(b[f]))return b[f].apply(b,e)}}},a.jqx.hasProperty=function(a,b){if("object"==typeof b)for(var c in b){for(var d=a;d;){if(d.hasOwnProperty(c))return!0;if(d.hasOwnProperty(c.toLowerCase()))return!0;d=d.base}return!1}else for(;a;){if(a.hasOwnProperty(b))return!0;if(a.hasOwnProperty(b.toLowerCase()))return!0;a=a.base}return!1},a.jqx.hasFunction=function(b,c){if(0==c.length)return!1;if(void 0==b)return!1;var d=typeof c==Array||c.length>0?c[0]:c;for(typeof c==Array||c.length>1?Array.prototype.slice.call(c,1):{};void 0==b[d]&&null!=b.base;){if(b[d]&&a.isFunction(b[d]))return!0;if("string"==typeof d){var e=d.toLowerCase();if(b[e]&&a.isFunction(b[e]))return!0}b=b.base}if(b[d]&&a.isFunction(b[d]))return!0;if("string"==typeof d){var e=d.toLowerCase();if(b[e]&&a.isFunction(b[e]))return!0}return!1},a.jqx.isPropertySetter=function(b,c){return 1==c.length&&"object"==typeof c[0]||2==c.length&&"string"==typeof c[0]&&!a.jqx.hasFunction(b,c)},a.jqx.validatePropertySetter=function(b,c,d){if(!a.jqx.propertySetterValidation)return!0;if(1==c.length&&"object"==typeof c[0]){for(var e in c[0]){for(var f=b;!f.hasOwnProperty(e)&&f.base;)f=f.base;if(!f||!f.hasOwnProperty(e)){if(!d){var g=f.hasOwnProperty(e.toString().toLowerCase());if(g)return!0;throw"Invalid property: "+e}return!1}}return!0}if(2!=c.length){if(!d)throw"Invalid property: "+c.length>=0?c[0]:"";return!1}for(;!b.hasOwnProperty(c[0])&&b.base;)b=b.base;if(!b||!b.hasOwnProperty(c[0])){if(!d)throw"Invalid property: "+c[0];return!1}return!0},Object.keys||(Object.keys=function(){"use strict";var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;g<d;g++)a.call(e,c[g])&&h.push(c[g]);return h}}()),a.jqx.set=function(b,c){var d=0;if(1==c.length&&"object"==typeof c[0]){if(b.isInitialized&&Object.keys&&Object.keys(c[0]).length>1){var e=b.base?b.base.element:b.element,f=a.data(e,b.widgetName).initArgs;if(f&&JSON&&JSON.stringify&&c[0]&&f[0])try{if(JSON.stringify(c[0])==JSON.stringify(f[0])){var g=!0;if(a.each(c[0],function(a,c){if(b[a]!=c)return g=!1,!1}),g)return}}catch(a){}b.batchUpdate=c[0];var h={},i={};a.each(c[0],function(a,c){for(var e=b;!e.hasOwnProperty(a)&&null!=e.base;)e=e.base;e.hasOwnProperty(a)?b[a]!=c&&(h[a]=b[a],i[a]=c,d++):e.hasOwnProperty(a.toLowerCase())&&b[a.toLowerCase()]!=c&&(h[a.toLowerCase()]=b[a.toLowerCase()],i[a.toLowerCase()]=c,d++)}),d<2&&(b.batchUpdate=null)}a.each(c[0],function(c,d){for(var e=b;!e.hasOwnProperty(c)&&null!=e.base;)e=e.base;if(e.hasOwnProperty(c))a.jqx.setvalueraiseevent(e,c,d);else if(e.hasOwnProperty(c.toLowerCase()))a.jqx.setvalueraiseevent(e,c.toLowerCase(),d);else if(a.jqx.propertySetterValidation)throw"jqxCore: invalid property '"+c+"'"}),null!=b.batchUpdate&&(b.batchUpdate=null,b.propertiesChangedHandler&&d>1&&b.propertiesChangedHandler(b,h,i))}else if(2==c.length){for(;!b.hasOwnProperty(c[0])&&b.base;)b=b.base;if(b.hasOwnProperty(c[0]))a.jqx.setvalueraiseevent(b,c[0],c[1]);else if(b.hasOwnProperty(c[0].toLowerCase()))a.jqx.setvalueraiseevent(b,c[0].toLowerCase(),c[1]);else if(a.jqx.propertySetterValidation)throw"jqxCore: invalid property '"+c[0]+"'"}},a.jqx.setvalueraiseevent=function(a,b,c){var d=a[b];a[b]=c,a.isInitialized&&(void 0!=a.propertyChangedHandler&&a.propertyChangedHandler(a,b,d,c),void 0!=a.propertyChangeMap&&void 0!=a.propertyChangeMap[b]&&a.propertyChangeMap[b](a,b,d,c))},a.jqx.get=function(a,b){if(void 0!=b&&null!=b){if(a.propertyMap){var c=a.propertyMap(b);if(null!=c)return c}if(a.hasOwnProperty(b))return a[b];if(a.hasOwnProperty(b.toLowerCase()))return a[b.toLowerCase()];var d=void 0;if(typeof b==Array){if(1!=b.length)return;d=b[0]}else"string"==typeof b&&(d=b);for(;!a.hasOwnProperty(d)&&a.base;)a=a.base;return a?a[d]:void 0}},a.jqx.serialize=function(b){var c="";if(a.isArray(b)){c="[";for(var d=0;d<b.length;d++)d>0&&(c+=", "),c+=a.jqx.serialize(b[d]);c+="]"}else if("object"==typeof b){c="{";var e=0;for(var d in b)e++>0&&(c+=", "),c+=d+": "+a.jqx.serialize(b[d]);c+="}"}else c=b.toString();return c},a.jqx.propertySetterValidation=!0,a.jqx.jqxWidgetProxy=function(b,c,d){var e=(a(c),a.data(c,b));if(void 0!=e){var f=e.instance;if(a.jqx.hasFunction(f,d))return a.jqx.invoke(f,d);if(a.jqx.isPropertySetter(f,d)){if(a.jqx.validatePropertySetter(f,d))return void a.jqx.set(f,d)}else{if("object"==typeof d&&0==d.length)return;if("object"==typeof d&&1==d.length&&a.jqx.hasProperty(f,d[0]))return a.jqx.get(f,d[0]);if("string"==typeof d&&a.jqx.hasProperty(f,d[0]))return a.jqx.get(f,d)}throw"jqxCore: Invalid parameter '"+a.jqx.serialize(d)+"' does not exist."}},a.jqx.applyWidget=function(b,c,d,e){var f=!1;try{f=void 0!=window.MSApp}catch(a){}var g=a(b);e?(e.host=g,e.element=b):e=new a.jqx["_"+c],""==b.id&&(b.id=a.jqx.utilities.createId());var h={host:g,element:b,instance:e,initArgs:d};e.widgetName=c,a.data(b,c,h),a.data(b,"jqxWidget",h.instance);for(var i=new Array,e=h.instance;e;)e.isInitialized=!1,i.push(e),e=e.base;i.reverse(),i[0].theme=a.jqx.theme||"",a.jqx.jqxWidgetProxy(c,b,d);for(var j in i)e=i[j],0==j&&(e.host=g,e.element=b,e.WinJS=f),void 0!=e&&(e.definedInstance&&e.definedInstance(),null!=e.createInstance&&(f?MSApp.execUnsafeLocalFunction(function(){e.createInstance(d)}):e.createInstance(d)));for(var j in i)void 0!=i[j]&&(i[j].isInitialized=!0);f?MSApp.execUnsafeLocalFunction(function(){h.instance.refresh(!0)}):h.instance.refresh(!0)},a.jqx.jqxWidget=function(b,c,d){var e=!1;try{jqxArgs=Array.prototype.slice.call(d,0)}catch(a){jqxArgs=""}try{e=void 0!=window.MSApp}catch(a){}var f=b,g="";c&&(g="_"+c),a.jqx.define(a.jqx,"_"+f,g);var h=new Array;if(!window[f]){var i=function(b){if(null==b)return"";var c=a.type(b);switch(c){case"string":case"number":case"date":case"boolean":case"bool":return null===b?"":b.toString()}var d="";return a.each(b,function(b,c){var e=c;b>0&&(d+=", "),d+="[";var f=0;if("object"==a.type(e))for(var g in e)f>0&&(d+=", "),d+="{"+g+":"+e[g]+"}",f++;else f>0&&(d+=", "),d+="{"+b+":"+e+"}",f++;d+="]"}),d};jqwidgets[f]=window[f]=function(b,c){var d=[];c||(c={}),d.push(c);var e=b;if("object"===a.type(e)&&b[0]?(e=b[0].id,""===e&&(e=b[0].id=a.jqx.utilities.createId())):"object"===a.type(b)&&b&&b.nodeName&&(e=b.id,""===e&&(e=b.id=a.jqx.utilities.createId())),window.jqxWidgets&&window.jqxWidgets[e]){if(c&&a.each(window.jqxWidgets[e],function(b){var d=a(this.element).data();d&&d.jqxWidget&&a(this.element)[f](c)}),1==window.jqxWidgets[e].length){var g=a(window.jqxWidgets[e][0].widgetInstance.element).data();if(g&&g.jqxWidget)return window.jqxWidgets[e][0]}var g=a(window.jqxWidgets[e][0].widgetInstance.element).data();if(g&&g.jqxWidget)return window.jqxWidgets[e]}var j=a(b);0===j.length&&(j=a("<div></div>"),"jqxInput"!==f&&"jqxPasswordInput"!==f&&"jqxMaskedInput"!==f||(j=a("<input/>")),"jqxTextArea"===f&&(j=a("<textarea></textarea>")),"jqxButton"!==f&&"jqxRepeatButton"!==f&&"jqxToggleButton"!==f||(j=a("<button/>")),"jqxSplitter"===f&&(j=a("<div><div>Panel 1</div><div>Panel 2</div></div>")),"jqxTabs"===f&&(j=a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")),"jqxRibbon"===f&&(j=a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")),"jqxDocking"===f&&(j=a("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")),"jqxWindow"===f&&(j=a("<div><div>Title 1</div><div>Content 1</div></div>")));var k=[];return a.each(j,function(b){var c=j[b];if(a.jqx.applyWidget(c,f,d,void 0),!h[f]){var g=a.data(c,"jqxWidget"),l=a.jqx["_"+f].prototype.defineInstance(),m={};a.jqx["_"+f].prototype.metaInfo&&(m=a.jqx["_"+f].prototype.metaInfo()),"jqxDockingLayout"==f&&(l=a.extend(l,a.jqx._jqxLayout.prototype.defineInstance())),"jqxToggleButton"!=f&&"jqxRepeatButton"!=f||(l=a.extend(l,a.jqx._jqxButton.prototype.defineInstance())),"jqxTreeGrid"==f&&(l=a.extend(l,a.jqx._jqxDataTable.prototype.defineInstance()));var n=function(b){var c=a.data(b,"jqxWidget");this.widgetInstance=c;var d=a.extend(this,c);d.on=d.addEventListener=function(a,b){d.addHandler(d.base?d.base.host:d.host,a,b)},d.off=d.removeEventListener=function(a){d.removeHandler(d.base?d.base.host:d.host,a)};for(var e in c)"function"==a.type(c[e])&&(d[e]=a.proxy(c[e],c));return d};h[f]=n,a.each(l,function(b,c){Object.defineProperty(n.prototype,b,{get:function(){return this.widgetInstance?this.widgetInstance[b]:c},set:function(c){if(this.widgetInstance&&(this.widgetInstance[b]!=c||"width"===b||"height"===b)){var d=this.widgetInstance[b],e=c,g=a.type(d),h=a.type(e),j=!1;if(g==h&&"source"!==b&&"width"!==b&&"height"!==b||(j=!0),j||i(d)!=i(e)){var k={};k[b]=c,this.widgetInstance.host?this.widgetInstance.host[f](k):this.widgetInstance.base.host[f](k),this.widgetInstance[b]=c,this.widgetInstance.propertyUpdated&&this.widgetInstance.propertyUpdated(b,d,c)}}}})})}var g=new h[f](c);k.push(g),window.jqxWidgets||(window.jqxWidgets=new Array),window.jqxWidgets[e]||(window.jqxWidgets[e]=new Array),window.jqxWidgets[e].push(g)}),1===k.length?k[0]:k}}a.fn[f]=function(){var b=Array.prototype.slice.call(arguments,0);if(0==b.length||1==b.length&&"object"==typeof b[0]){if(0==this.length)throw this.selector?new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct."):new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.");return this.each(function(){var c=(a(this),this),d=a.data(c,f);null==d?a.jqx.applyWidget(c,f,b,void 0):a.jqx.jqxWidgetProxy(f,this,b)})}if(0==this.length)throw this.selector?new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct."):new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.");var c=null,d=0;return this.each(function(){var e=a.jqx.jqxWidgetProxy(f,this,b);if(0==d)c=e,d++;else{if(1==d){var g=[];g.push(c),c=g}c.push(e)}}),c};try{a.extend(a.jqx["_"+f].prototype,Array.prototype.slice.call(d,0)[0])}catch(a){}a.extend(a.jqx["_"+f].prototype,{toThemeProperty:function(b,c){return a.jqx.toThemeProperty(this,b,c)}}),a.jqx["_"+f].prototype.refresh=function(){this.base&&this.base.refresh(!0)},a.jqx["_"+f].prototype.createInstance=function(){},a.jqx["_"+f].prototype.addEventHandler=function(a,b){this.host.bind(a,b)},a.jqx["_"+f].prototype.removeEventHandler=function(a,b){this.host.unbind(a)},a.jqx["_"+f].prototype.applyTo=function(b,c){if(!(c instanceof Array)){var d=[];d.push(c),c=d}a.jqx.applyWidget(b,f,c,this)},a.jqx["_"+f].prototype.getInstance=function(){return this},a.jqx["_"+f].prototype.propertyChangeMap={},a.jqx["_"+f].prototype.addHandler=function(b,c,d,e){a.jqx.addHandler(a(b),c,d,e)},a.jqx["_"+f].prototype.removeHandler=function(b,c,d){a.jqx.removeHandler(a(b),c,d)},a.jqx["_"+f].prototype.setOptions=function(){if(this.host&&this.host.length&&1==this.host.length)return a.jqx.jqxWidgetProxy(f,this.host[0],arguments)}},a.jqx.toThemeProperty=function(a,b,c){if(""==a.theme)return b;for(var d=b.split(" "),e="",f=0;f<d.length;f++){f>0&&(e+=" ");var g=d[f];e+=null!=c&&c?g+"-"+a.theme:g+" "+g+"-"+a.theme}return e},a.jqx.addHandler=function(b,c,d,e){for(var f=c.split(" "),g=0;g<f.length;g++){var h=f[g];if(window.addEventListener)switch(h){case"mousewheel":a.jqx.browser.mozilla?b[0].addEventListener("DOMMouseScroll",d,!1):b[0].addEventListener("mousewheel",d,!1);continue;case"mousemove":if(!e){b[0].addEventListener("mousemove",d,!1);continue}}void 0==e||null==e?b.on?b.on(h,d):b.bind(h,d):b.on?b.on(h,e,d):b.bind(h,e,d)}},a.jqx.removeHandler=function(b,c,d){if(!c)return void(b.off?b.off():b.unbind());for(var e=c.split(" "),f=0;f<e.length;f++){var g=e[f];if(window.removeEventListener)switch(g){case"mousewheel":a.jqx.browser.mozilla?b[0].removeEventListener("DOMMouseScroll",d,!1):b[0].removeEventListener("mousewheel",d,!1);continue;case"mousemove":if(d){b[0].removeEventListener("mousemove",d,!1);continue}}void 0!=g?void 0==d?b.off?b.off(g):b.unbind(g):b.off?b.off(g,d):b.unbind(g,d):b.off?b.off():b.unbind()}},a.jqx.theme=a.jqx.theme||"",a.jqx.scrollAnimation=a.jqx.scrollAnimation||!1,a.jqx.resizeDelay=a.jqx.resizeDelay||10,a.jqx.ready=function(){a(window).trigger("jqxReady")},a.jqx.init=function(){a.each(arguments[0],function(b,c){"theme"==b&&(a.jqx.theme=c),"scrollBarSize"==b&&(a.jqx.utilities.scrollBarSize=c),"touchScrollBarSize"==b&&(a.jqx.utilities.touchScrollBarSize=c),"scrollBarButtonsVisibility"==b&&(a.jqx.utilities.scrollBarButtonsVisibility=c)})},a.jqx.utilities=a.jqx.utilities||{},a.extend(a.jqx.utilities,{scrollBarSize:13,touchScrollBarSize:0,scrollBarButtonsVisibility:"visible",createId:function(){var a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return"jqxWidget"+a()+a()},setTheme:function(b,c,d){if("undefined"!=typeof d&&d[0].className.split){for(var e=d[0].className.split(" "),f=[],g=[],h=d.children(),i=0;i<e.length;i+=1)e[i].indexOf(b)>=0&&(b.length>0?(f.push(e[i]),
g.push(e[i].replace(b,c))):g.push(e[i].replace("-"+c,"")+"-"+c));this._removeOldClasses(f,d),this._addNewClasses(g,d);for(var i=0;i<h.length;i+=1)this.setTheme(b,c,a(h[i]))}},_removeOldClasses:function(a,b){for(var c=0;c<a.length;c+=1)b.removeClass(a[c])},_addNewClasses:function(a,b){for(var c=0;c<a.length;c+=1)b.addClass(a[c])},getOffset:function(b){var c=a.jqx.mobile.getLeftPos(b[0]),d=a.jqx.mobile.getTopPos(b[0]);return{top:d,left:c}},resize:function(b,c,d,e){void 0===e&&(e=!0);var f=-1,g=this,h=function(a){if(!g.hiddenWidgets)return-1;for(var b=-1,c=0;c<g.hiddenWidgets.length;c++)if(a.id){if(g.hiddenWidgets[c].id==a.id){b=c;break}}else if(g.hiddenWidgets[c].id==a[0].id){b=c;break}return b};if(this.resizeHandlers){for(var i=0;i<this.resizeHandlers.length;i++)if(b.id){if(this.resizeHandlers[i].id==b.id){f=i;break}}else if(this.resizeHandlers[i].id==b[0].id){f=i;break}if(d===!0){if(f!=-1&&this.resizeHandlers.splice(f,1),0==this.resizeHandlers.length){var j=a(window);j.off?(j.off("resize.jqx"),j.off("orientationchange.jqx"),j.off("orientationchanged.jqx")):(j.unbind("resize.jqx"),j.unbind("orientationchange.jqx"),j.unbind("orientationchanged.jqx")),this.resizeHandlers=null}var k=h(b);return void(k!=-1&&this.hiddenWidgets&&this.hiddenWidgets.splice(k,1))}}else if(d===!0){var k=h(b);return void(k!=-1&&this.hiddenWidgets&&this.hiddenWidgets.splice(k,1))}var g=this,l=function(b,c){if(g.resizeHandlers){var d=function(a){for(var b=-1,c=a.parentNode;c;)b++,c=c.parentNode;return b},e=function(a,b){if(!a.widget||!b.widget)return 0;var c=d(a.widget[0]),e=d(b.widget[0]);try{if(c<e)return-1;if(c>e)return 1}catch(a){}return 0},f=function(b){if(g.hiddenWidgets.length>0){g.hiddenWidgets.sort(e);var d=function(){for(var b=!1,d=new Array,e=0;e<g.hiddenWidgets.length;e++){var f=g.hiddenWidgets[e];a.jqx.isHidden(f.widget)?(b=!0,d.push(f)):f.callback&&f.callback(c)}g.hiddenWidgets=d,b||clearInterval(g.__resizeInterval)};if(0==b)return d(),void(g.__resizeInterval&&clearInterval(g.__resizeInterval));g.__resizeInterval&&clearInterval(g.__resizeInterval),g.__resizeInterval=setInterval(function(){d()},100)}};g.hiddenWidgets&&g.hiddenWidgets.length>0&&f(!1),g.hiddenWidgets=new Array,g.resizeHandlers.sort(e);for(var i=0;i<g.resizeHandlers.length;i++){var j=g.resizeHandlers[i],k=j.widget,l=j.data;if(l&&l.jqxWidget){var m=l.jqxWidget.width,n=l.jqxWidget.height;l.jqxWidget.base&&(void 0==m&&(m=l.jqxWidget.base.width),void 0==n&&(n=l.jqxWidget.base.height)),void 0===m&&void 0===n&&(m=l.jqxWidget.element.style.width,n=l.jqxWidget.element.style.height);var o=!1;if(null!=m&&m.toString().indexOf("%")!=-1&&(o=!0),null!=n&&n.toString().indexOf("%")!=-1&&(o=!0),a.jqx.isHidden(k))h(k)===-1&&(o||b===!0)&&j.data.nestedWidget!==!0&&g.hiddenWidgets.push(j);else if(void 0===b||b!==!0){if(o){if(j.callback(c),g.watchedElementData)for(var p=0;p<g.watchedElementData.length;p++)if(g.watchedElementData[p].element==l.jqxWidget.element){g.watchedElementData[p].offsetWidth=l.jqxWidget.element.offsetWidth,g.watchedElementData[p].offsetHeight=l.jqxWidget.element.offsetHeight;break}g.hiddenWidgets.indexOf(j)>=0&&g.hiddenWidgets.splice(g.hiddenWidgets.indexOf(j),1)}if(l.jqxWidget.element){var q=l.jqxWidget.element.className;if((q.indexOf("dropdownlist")>=0||q.indexOf("datetimeinput")>=0||q.indexOf("combobox")>=0||q.indexOf("menu")>=0)&&l.jqxWidget.isOpened){var r=l.jqxWidget.isOpened();if(r){if(c&&"resize"==c&&a.jqx.mobile.isTouchDevice())continue;l.jqxWidget.close()}}}}}}f()}};if(!this.resizeHandlers){this.resizeHandlers=new Array;var j=a(window);j.on?(this._resizeTimer=null,this._initResize=null,j.on("resize.jqx",function(b){void 0!=g._resizeTimer&&clearTimeout(g._resizeTimer),g._initResize?g._resizeTimer=setTimeout(function(){l(null,"resize")},a.jqx.resizeDelay):(g._initResize=!0,l(null,"resize"))}),j.on("orientationchange.jqx",function(a){l(null,"orientationchange")}),j.on("orientationchanged.jqx",function(a){l(null,"orientationchange")})):(j.bind("resize.jqx",function(a){l(null,"orientationchange")}),j.bind("orientationchange.jqx",function(a){l(null,"orientationchange")}),j.bind("orientationchanged.jqx",function(a){l(null,"orientationchange")}))}var m=b.data();e&&f===-1&&this.resizeHandlers.push({id:b[0].id,widget:b,callback:c,data:m});try{var n=m.jqxWidget.width,o=m.jqxWidget.height;m.jqxWidget.base&&(void 0==n&&(n=m.jqxWidget.base.width),void 0==o&&(o=m.jqxWidget.base.height)),void 0===n&&void 0===o&&(n=m.jqxWidget.element.style.width,o=m.jqxWidget.element.style.height);var p=!1;if(null!=n&&n.toString().indexOf("%")!=-1&&(p=!0),null!=o&&o.toString().indexOf("%")!=-1&&(p=!0),p){this.watchedElementData||(this.watchedElementData=[]);var g=this,q=function(b){g.watchedElementData.forEach&&g.watchedElementData.forEach(function(b){b.element.offsetWidth===b.offsetWidth&&b.element.offsetHeight===b.offsetHeight||(b.offsetWidth=b.element.offsetWidth,b.offsetHeight=b.element.offsetHeight,b.timer&&clearTimeout(b.timer),b.timer=setTimeout(function(){a.jqx.isHidden(a(b.element))?b.timer=setInterval(function(){a.jqx.isHidden(a(b.element))||(clearInterval(b.timer),b.callback())},100):b.callback()}))})};g.watchedElementData.push({element:b[0],offsetWidth:b[0].offsetWidth,offsetHeight:b[0].offsetHeight,callback:c}),g.observer||(g.observer=new MutationObserver(q),g.observer.observe(document.body,{attributes:!0,childList:!0,characterData:!0}))}}catch(a){}a.jqx.isHidden(b)&&e===!0&&l(!0),a.jqx.resize=function(){l(null,"resize")}},parseJSON:function(b){if(!b||"string"!=typeof b)return null;var c=/^[\],:{}\s]*$/,d=/(?:^|:|,)(?:\s*\[)+/g,e=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,f=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;if(b=a.trim(b),window.JSON&&window.JSON.parse)return window.JSON.parse(b);if(c.test(b.replace(e,"@").replace(f,"]").replace(d,"")))return new Function("return "+b)();throw new Error("Invalid JSON: "+b)},html:function(b,c){if(!a(b).on)return a(b).html(c);try{return a.access(b,function(c){var d=b[0]||{},e=0,f=b.length;if(void 0===c)return 1===d.nodeType?d.innerHTML.replace(rinlinejQuery,""):void 0;var g=/<(?:script|style|link)/i,h="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",i=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,j=/<([\w:]+)/,k=new RegExp("<(?:"+h+")[\\s/>]","i"),l=/^\s+/,m={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};if("string"==typeof c&&!g.test(c)&&(a.support.htmlSerialize||!k.test(c))&&(a.support.leadingWhitespace||!l.test(c))&&!m[(j.exec(c)||["",""])[1].toLowerCase()]){c=c.replace(i,"<$1></$2>");try{for(;e<f;e++)d=this[e]||{},1===d.nodeType&&(a.cleanData(d.getElementsByTagName("*")),d.innerHTML=c);d=0}catch(a){}}d&&b.empty().append(c)},null,c,arguments.length)}catch(d){return a(b).html(c)}},hasTransform:function(b){var c="";if(c=b.css("transform"),""==c||"none"==c){if(c=b.parents().css("transform"),""!=c&&"none"!=c)return""!=c&&"none"!=c;var d=a.jqx.utilities.getBrowser();"msie"==d.browser?(c=b.css("-ms-transform"),""!=c&&"none"!=c||(c=b.parents().css("-ms-transform"))):"chrome"==d.browser?(c=b.css("-webkit-transform"),""!=c&&"none"!=c||(c=b.parents().css("-webkit-transform"))):"opera"==d.browser?(c=b.css("-o-transform"),""!=c&&"none"!=c||(c=b.parents().css("-o-transform"))):"mozilla"==d.browser&&(c=b.css("-moz-transform"),""!=c&&"none"!=c||(c=b.parents().css("-moz-transform")))}return""!=c&&"none"!=c||(c=a(document.body).css("transform")),""!=c&&"none"!=c&&null!=c},getBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c={browser:b[1]||"",version:b[2]||"0"};return a.indexOf("rv:11.0")>=0&&a.indexOf(".net4.0c")>=0&&(c.browser="msie",c.version="11",b[1]="msie"),a.indexOf("edge")>=0&&(c.browser="msie",c.version="12",b[1]="msie"),c[b[1]]=b[1],c}}),a.jqx.browser=a.jqx.utilities.getBrowser(),a.jqx.isHidden=function(a){if(!a||!a[0])return!1;var b=a[0].offsetWidth,c=a[0].offsetHeight;return 0===b||0===c},a.jqx.ariaEnabled=!0,a.jqx.aria=function(b,c,d){if(a.jqx.ariaEnabled)if(void 0==c)a.each(b.aria,function(c,d){var e=b.base?b.base.host.attr(c):b.host.attr(c);if(void 0==e||a.isFunction(e)){var e=b[d.name];a.isFunction(e)&&(e=b[d.name]()),void 0==e&&(e="");try{b.base?b.base.host.attr(c,e.toString()):b.host.attr(c,e.toString())}catch(a){}}else{var f=e;switch(d.type){case"number":f=new Number(e),isNaN(f)&&(f=e);break;case"boolean":f="true"==e;break;case"date":f=new Date(e),("Invalid Date"==f||isNaN(f))&&(f=e)}b[d.name]=f}});else try{b.host?b.base?b.base.host?b.base.host.attr(c,d.toString()):b.attr(c,d.toString()):b.host?b.element.setAttribute?b.element.setAttribute(c,d.toString()):b.host.attr(c,d.toString()):b.attr(c,d.toString()):b.setAttribute&&b.setAttribute(c,d.toString())}catch(a){}},Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length,c=Number(arguments[1])||0;for(c=c<0?Math.ceil(c):Math.floor(c),c<0&&(c+=b);c<b;c++)if(c in this&&this[c]===a)return c;return-1}),a.jqx.mobile=a.jqx.mobile||{},a.jqx.position=function(b){var c=parseInt(b.pageX),d=parseInt(b.pageY);if(a.jqx.mobile.isTouchDevice()){var e=a.jqx.mobile.getTouches(b),f=e[0];c=parseInt(f.pageX),d=parseInt(f.pageY)}return{left:c,top:d}},a.extend(a.jqx.mobile,{_touchListener:function(a,b){var c=function(a,b){var c=document.createEvent("MouseEvents");return c.initMouseEvent(a,b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget),c._pageX=b.pageX,c._pageY=b.pageY,c},d={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"},e=c(d[a.type],a);a.target.dispatchEvent(e);var f=a.target["on"+d[a.type]];"function"==typeof f&&f(a)},setMobileSimulator:function(b,c){if(!this.isTouchDevice()){this.simulatetouches=!0,0==c&&(this.simulatetouches=!1);var d={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"},e=this;if(window.addEventListener){var f=function(){for(var a in d)b.addEventListener&&(b.removeEventListener(a,e._touchListener),b.addEventListener(a,e._touchListener,!1))};a.jqx.browser.msie,f()}}},isTouchDevice:function(){if(void 0!=this.touchDevice)return this.touchDevice;var a="Browser CodeName: "+navigator.appCodeName;if(a+="Browser Name: "+navigator.appName,a+="Browser Version: "+navigator.appVersion,a+="Platform: "+navigator.platform,a+="User-agent header: "+navigator.userAgent,a.indexOf("Android")!=-1)return!0;if(a.indexOf("IEMobile")!=-1)return!0;if(a.indexOf("Windows Phone")!=-1)return!0;if(a.indexOf("WPDesktop")!=-1)return!0;if(a.indexOf("ZuneWP7")!=-1)return!0;if(a.indexOf("BlackBerry")!=-1&&a.indexOf("Mobile Safari")!=-1)return!0;if(a.indexOf("ipod")!=-1)return!0;if(a.indexOf("nokia")!=-1||a.indexOf("Nokia")!=-1)return!0;if(a.indexOf("Chrome/17")!=-1)return!1;if(a.indexOf("CrOS")!=-1)return!1;if(a.indexOf("Opera")!=-1&&a.indexOf("Mobi")==-1&&a.indexOf("Mini")==-1&&a.indexOf("Platform: Win")!=-1)return!1;if(a.indexOf("Opera")!=-1&&a.indexOf("Mobi")!=-1&&a.indexOf("Opera Mobi")!=-1)return!0;var b={ios:"i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",android:"(Android |HTC_|Silk/)",blackberry:"BlackBerry(?:.*)Version/",rimTablet:"RIM Tablet OS ",webos:"(?:webOS|hpwOS)/",bada:"Bada/"};try{if(void 0!=this.touchDevice)return this.touchDevice;this.touchDevice=!1;for(i in b)if(b.hasOwnProperty(i)&&(prefix=b[i],match=a.match(new RegExp("(?:"+prefix+")([^\\s;]+)")),match))return"blackberry"==i.toString()?(this.touchDevice=!1,!1):(this.touchDevice=!0,!0);var c=navigator.userAgent;if(navigator.platform.toLowerCase().indexOf("win")!=-1){if(c.indexOf("Windows Phone")>=0||c.indexOf("WPDesktop")>=0||c.indexOf("IEMobile")>=0||c.indexOf("ZuneWP7")>=0)return this.touchDevice=!0,!0;if(c.indexOf("Touch")>=0){var d="MSPointerDown"in window||"pointerdown"in window;return d?(this.touchDevice=!0,!0):c.indexOf("ARM")>=0?(this.touchDevice=!0,!0):(this.touchDevice=!1,!1)}}return navigator.platform.toLowerCase().indexOf("win")!=-1?(this.touchDevice=!1,!1):(("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(this.touchDevice=!0),this.touchDevice)}catch(a){return this.touchDevice=!1,!1}},getLeftPos:function(a){for(var b=a.offsetLeft;null!=(a=a.offsetParent);)"HTML"!=a.tagName&&(b+=a.offsetLeft,document.all&&(b+=a.clientLeft));return b},getTopPos:function(b){for(var c=b.offsetTop,d=a(b).coord();null!=(b=b.offsetParent);)"HTML"!=b.tagName&&(c+=b.offsetTop-b.scrollTop,document.all&&(c+=b.clientTop));var e=navigator.userAgent.toLowerCase(),f=(e.indexOf("windows phone")!=-1||e.indexOf("WPDesktop")!=-1||e.indexOf("ZuneWP7")!=-1||e.indexOf("msie 9")!=-1||e.indexOf("msie 11")!=-1||e.indexOf("msie 10")!=-1)&&e.indexOf("touch")!=-1;return f?d.top:this.isSafariMobileBrowser()?this.isSafari4MobileBrowser()&&this.isIPadSafariMobileBrowser()?c:e.indexOf("version/7")!=-1?d.top:(e.indexOf("version/6")==-1&&e.indexOf("version/5")==-1||(c+=a(window).scrollTop()),/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)?c+a(window).scrollTop():/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)?c+a(window).scrollTop():d.top):c},isChromeMobileBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("android")!=-1;return b},isOperaMiniMobileBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("opera mini")!=-1||a.indexOf("opera mobi")!=-1;return b},isOperaMiniBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("opera mini")!=-1;return b},isNewSafariMobileBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("ipad")!=-1||a.indexOf("iphone")!=-1||a.indexOf("ipod")!=-1;return b=b&&a.indexOf("version/5")!=-1},isSafari4MobileBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("ipad")!=-1||a.indexOf("iphone")!=-1||a.indexOf("ipod")!=-1;return b=b&&a.indexOf("version/4")!=-1},isWindowsPhone:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("windows phone")!=-1||a.indexOf("WPDesktop")!=-1||a.indexOf("ZuneWP7")!=-1||a.indexOf("msie 9")!=-1||a.indexOf("msie 11")!=-1||a.indexOf("msie 10")!=-1&&a.indexOf("touch")!=-1;return b},isSafariMobileBrowser:function(){var a=navigator.userAgent.toLowerCase();if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent))return!0;if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent))return!0;var b=a.indexOf("ipad")!=-1||a.indexOf("iphone")!=-1||a.indexOf("ipod")!=-1||a.indexOf("mobile safari")!=-1;return b},isIPadSafariMobileBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("ipad")!=-1;return b},isMobileBrowser:function(){var a=navigator.userAgent.toLowerCase(),b=a.indexOf("ipad")!=-1||a.indexOf("iphone")!=-1||a.indexOf("android")!=-1;return b},getTouches:function(a){if(a.originalEvent){if(a.originalEvent.touches&&a.originalEvent.touches.length)return a.originalEvent.touches;if(a.originalEvent.changedTouches&&a.originalEvent.changedTouches.length)return a.originalEvent.changedTouches}return a.touches||(a.touches=new Array,a.touches[0]=void 0!=a.originalEvent?a.originalEvent:a,void 0!=a.originalEvent&&a.pageX&&(a.touches[0]=a),"mousemove"==a.type&&(a.touches[0]=a)),a.touches},getTouchEventName:function(a){if(!this.isWindowsPhone())return a;var b=navigator.userAgent.toLowerCase();if(b.indexOf("windows phone 7")!=-1){if(a.toLowerCase().indexOf("start")!=-1)return"MSPointerDown";if(a.toLowerCase().indexOf("move")!=-1)return"MSPointerMove";if(a.toLowerCase().indexOf("end")!=-1)return"MSPointerUp"}return a.toLowerCase().indexOf("start")!=-1?"pointerdown":a.toLowerCase().indexOf("move")!=-1?"pointermove":a.toLowerCase().indexOf("end")!=-1?"pointerup":void 0},dispatchMouseEvent:function(a,b,c){if(!this.simulatetouches){var d=document.createEvent("MouseEvent");d.initMouseEvent(a,!0,!0,b.view,1,b.screenX,b.screenY,b.clientX,b.clientY,!1,!1,!1,!1,0,null),null!=c&&c.dispatchEvent(d)}},getRootNode:function(a){for(;1!==a.nodeType;)a=a.parentNode;return a},setTouchScroll:function(a,b){this.enableScrolling||(this.enableScrolling=[]),this.enableScrolling[b]=a},touchScroll:function(b,c,d,e,f,g){function h(a){if(a.targetTouches&&a.targetTouches.length>=1)return a.targetTouches[0].clientY;if(a.originalEvent&&void 0!==a.originalEvent.clientY)return a.originalEvent.clientY;var b=l.getTouches(a);return b[0].clientY}function i(a){if(a.targetTouches&&a.targetTouches.length>=1)return a.targetTouches[0].clientX;if(a.originalEvent&&void 0!==a.originalEvent.clientX)return a.originalEvent.clientX;var b=l.getTouches(a);return b[0].clientX}function j(){var a,b;H&&(a=Date.now()-F,b=-H*Math.exp(-a/L),b>.5||b<-.5?(R(I+b),requestAnimationFrame(j)):(R(I),g.fadeOut("fast")))}function k(){var a,b;H&&(a=Date.now()-F,b=-H*Math.exp(-a/L),b>.5||b<-.5?(S(J+b),requestAnimationFrame(k)):(S(J),f.fadeOut("fast")))}if(null!=b){var l=this,m=0,n=0,o=0,p=0,q=0,r=0;this.scrolling||(this.scrolling=[]),this.scrolling[e]=!1;var s=!1,t=a(b),u=["select","input","textarea"],v=0,w=0;this.enableScrolling||(this.enableScrolling=[]),this.enableScrolling[e]=!0;var x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,e=e,M=this.getTouchEventName("touchstart")+".touchScroll",N=this.getTouchEventName("touchend")+".touchScroll",O=this.getTouchEventName("touchmove")+".touchScroll";z=c,y=0,A=0,xoffset=0,initialOffset=0,initialXOffset=0,x=f.jqxScrollBar("max"),L=325;var P=function(){var a,b,c,d;a=Date.now(),b=a-F,F=a,c=A-E,xdelta=xoffset-xframe,E=A,xframe=xoffset,C=!0,d=1e3*c/(1+b),xv=1e3*xdelta/(1+b),D=.8*d+.2*D,xjqxAnimations=.8*xv+.2*xjqxAnimations},Q=!1,v=function(b){function c(a){Q=!1,C=!0,B=h(a),K=i(a),D=H=xjqxAnimations=0,E=A,xframe=xoffset,F=Date.now(),clearInterval(G),G=setInterval(P,100),initialOffset=A,initialXOffset=xoffset,A>0&&A<z&&"hidden"!=g[0].style.visibility}if(!l.enableScrolling[e])return!0;if(a.inArray(b.target.tagName.toLowerCase(),u)===-1){A=g.jqxScrollBar("value"),xoffset=f.jqxScrollBar("value");var d=l.getTouches(b),j=d[0];return 1==d.length&&l.dispatchMouseEvent("mousedown",j,l.getRootNode(j.target)),x=f.jqxScrollBar("max"),z=g.jqxScrollBar("max"),c(b),s=!1,n=j.pageY,q=j.pageX,l.simulatetouches&&void 0!=j._pageY&&(n=j._pageY,q=j._pageX),l.scrolling[e]=!0,m=0,p=0,!0}};t.on?t.on(M,v):t.bind(M,v);var R=function(a,b){return A=a>z?z:a<y?y:a,d(null,a,0,0,b),a>z?"max":a<y?"min":"value"},S=function(a,b){return xoffset=a>x?x:a<y?y:a,d(a,null,0,0,b),a>x?"max":a<y?"min":"value"},T=function(a){function b(a){var b,c,d;if(C){b=h(a),d=i(a),c=B-b,xdelta=K-d;var e="value";if(c>2||c<-2)return B=b,e=R(A+c,a),P(),"min"==e&&0===initialOffset||("max"==e&&initialOffset===z||(!v||(a.preventDefault(),a.stopPropagation(),Q=!0,!1)));if(xdelta>2||xdelta<-2)return K=d,e=S(xoffset+xdelta,a),P(),"min"==e&&0===initialXOffset||("max"==e&&initialXOffset===x||(!u||(Q=!0,a.preventDefault(),a.stopPropagation(),!1)));a.preventDefault()}}if(!l.enableScrolling[e])return!0;if(!l.scrolling[e])return!0;Q&&(a.preventDefault(),a.stopPropagation());var c=l.getTouches(a);if(c.length>1)return!0;var d=c[0].pageY,j=c[0].pageX;l.simulatetouches&&void 0!=c[0]._pageY&&(d=c[0]._pageY,j=c[0]._pageX);var k=d-n,t=j-q;w=d,touchHorizontalEnd=j,o=k-m,r=t-p,s=!0,m=k,p=t;var u=null==f||"hidden"!=f[0].style.visibility,v=null==g||"hidden"!=g[0].style.visibility;(u||v)&&(u||v)&&b(a)};t.on?t.on(O,T):t.bind(O,T);var U=function(a){if(!l.enableScrolling[e])return!0;var b=l.getTouches(a)[0];if(!l.scrolling[e])return!0;if(C=!1,clearInterval(G),D>10||D<-10?(H=.8*D,I=Math.round(A+H),F=Date.now(),requestAnimationFrame(j),g.fadeIn(100)):xjqxAnimations>10||xjqxAnimations<-10?(H=.8*xjqxAnimations,J=Math.round(xoffset+H),F=Date.now(),requestAnimationFrame(k),f.fadeIn(100)):(f.fadeOut(100),g.fadeOut(100)),l.scrolling[e]=!1,!s){var b=l.getTouches(a)[0],c=l.getRootNode(b.target);return l.dispatchMouseEvent("mouseup",b,c),l.dispatchMouseEvent("click",b,c),!0}l.dispatchMouseEvent("mouseup",b,a.target)};if(this.simulatetouches){var V=(void 0!=a(window).on||a(window).bind,function(a){try{U(a)}catch(a){}l.scrolling[e]=!1});if(void 0!=a(window).on?a(document).on("mouseup.touchScroll",V):a(document).bind("mouseup.touchScroll",V),window.frameElement&&null!=window.top){var W=function(a){try{U(a)}catch(a){}l.scrolling[e]=!1};window.top.document&&(a(window.top.document).on?a(window.top.document).on("mouseup",W):a(window.top.document).bind("mouseup",W))}var X=(void 0!=a(document).on||a(document).bind,function(a){if(!l.scrolling[e])return!0;l.scrolling[e]=!1;var b=l.getTouches(a)[0],c=l.getRootNode(b.target);l.dispatchMouseEvent("mouseup",b,c),l.dispatchMouseEvent("click",b,c)});void 0!=a(document).on?a(document).on("touchend",X):a(document).bind("touchend",X)}t.on&&(t.on("dragstart",function(a){a.preventDefault()}),t.on("selectstart",function(a){a.preventDefault()})),t.on?t.on(N+" touchcancel.touchScroll",U):t.bind(N+" touchcancel.touchScroll",U)}}}),a.jqx.cookie=a.jqx.cookie||{},a.extend(a.jqx.cookie,{cookie:function(b,c,d){if(arguments.length>1&&"[object Object]"!==String(c)){if(d=a.extend({},d),null!==c&&void 0!==c||(d.expires=-1),"number"==typeof d.expires){var e=d.expires,f=d.expires=new Date;f.setDate(f.getDate()+e)}return c=String(c),document.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}d=c||{};var g,h=d.raw?function(a){return a}:decodeURIComponent;return(g=new RegExp("(?:^|; )"+encodeURIComponent(b)+"=([^;]*)").exec(document.cookie))?h(g[1]):null}}),a.jqx.string=a.jqx.string||{},a.extend(a.jqx.string,{replace:function(a,b,c){if(b===c)return this;for(var d=a,e=d.indexOf(b);e!=-1;)d=d.replace(b,c),e=d.indexOf(b);return d},contains:function(a,b){return null!=a&&null!=b&&a.indexOf(b)!=-1},containsIgnoreCase:function(a,b){return null!=a&&null!=b&&a.toString().toUpperCase().indexOf(b.toString().toUpperCase())!=-1},equals:function(a,b){return null!=a&&null!=b&&(a=this.normalize(a),b.length==a.length&&a.slice(0,b.length)==b)},equalsIgnoreCase:function(a,b){return null!=a&&null!=b&&(a=this.normalize(a),b.length==a.length&&a.toUpperCase().slice(0,b.length)==b.toUpperCase())},startsWith:function(a,b){return null!=a&&null!=b&&a.slice(0,b.length)==b},startsWithIgnoreCase:function(a,b){return null!=a&&null!=b&&a.toUpperCase().slice(0,b.length)==b.toUpperCase()},normalize:function(a){return 65279==a.charCodeAt(a.length-1)&&(a=a.substring(0,a.length-1)),a},endsWith:function(a,b){return null!=a&&null!=b&&(a=this.normalize(a),a.slice(-b.length)==b)},endsWithIgnoreCase:function(a,b){return null!=a&&null!=b&&(a=this.normalize(a),a.toUpperCase().slice(-b.length)==b.toUpperCase())}}),a.extend(a.easing,{easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c}})}(jqxBaseFramework),function(a){a.event&&a.event.special&&a.extend(a.event.special,{close:{noBubble:!0},open:{noBubble:!0},cellclick:{noBubble:!0},rowclick:{noBubble:!0},tabclick:{noBubble:!0},selected:{noBubble:!0},expanded:{noBubble:!0},collapsed:{noBubble:!0},valuechanged:{noBubble:!0},expandedItem:{noBubble:!0},collapsedItem:{noBubble:!0},expandingItem:{noBubble:!0},collapsingItem:{noBubble:!0}}),a.fn.extend&&a.fn.extend({ischildof:function(b){if(!a(this).parents){var c=b.element.contains(this.element);return c}for(var d=a(this).parents().get(),e=0;e<d.length;e++)if("string"!=typeof b){var f=d[e];if(void 0!==b&&f==b[0])return!0}else if(void 0!==b&&a(d[e]).is(b))return!0;return!1}}),a.fn.jqxProxy=function(){var b=a(this).data().jqxWidget,c=Array.prototype.slice.call(arguments,0),d=b.element;return d||(d=b.base.element),a.jqx.jqxWidgetProxy(b.widgetName,d,c)};var b=this.originalVal=a.fn.val;a.fn.val=function(c){if("undefined"==typeof c){if(a(this).hasClass("jqx-widget")){var d=a(this).data().jqxWidget;if(d&&d.val)return d.val()}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var d=a(this).find(".jqx-widget").data().jqxWidget;if(d&&d.val)return d.val()}return b.call(this)}if(a(this).hasClass("jqx-widget")){var d=a(this).data().jqxWidget;if(d&&d.val)return 2!=arguments.length?d.val(c):d.val(c,arguments[1])}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var d=a(this).find(".jqx-widget").data().jqxWidget;if(d&&d.val)return 2!=arguments.length?d.val(c):d.val(c,arguments[1])}return b.call(this,c)},a.fn.modal&&a.fn.modal.Constructor&&(a.fn.modal.Constructor.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(b){if(this.$element[0]!==b.target&&!this.$element.has(b.target).length){if(a(b.target).parents().hasClass("jqx-popup"))return!0;this.$element.trigger("focus")}},this))}),a.fn.coord=function(b){var c,d,e={top:0,left:0},f=this[0],g=f&&f.ownerDocument;if(g){if(c=g.documentElement,!a.contains(c,f))return e;void 0!==typeof f.getBoundingClientRect&&(e=f.getBoundingClientRect());var h=function(b){return a.isWindow(b)?b:9===b.nodeType&&(b.defaultView||b.parentWindow)};d=h(g);var i=0,j=0,k=navigator.userAgent.toLowerCase(),l=k.indexOf("ipad")!=-1||k.indexOf("iphone")!=-1;if(l&&(i=2),1==b&&"static"!=document.body.style.position&&""!=document.body.style.position){var m=a(document.body).coord();i=-m.left,j=-m.top}return{top:j+e.top+(d.pageYOffset||c.scrollTop)-(c.clientTop||0),left:i+e.left+(d.pageXOffset||c.scrollLeft)-(c.clientLeft||0)}}}}(jqxBaseFramework);


/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.cssroundedcorners=function(a){var b={all:"jqx-rc-all",top:"jqx-rc-t",bottom:"jqx-rc-b",left:"jqx-rc-l",right:"jqx-rc-r","top-right":"jqx-rc-tr","top-left":"jqx-rc-tl","bottom-right":"jqx-rc-br","bottom-left":"jqx-rc-bl"};for(prop in b)if(b.hasOwnProperty(prop)&&a==prop)return b[prop]},a.jqx.jqxWidget("jqxButton","",{}),a.extend(a.jqx._jqxButton.prototype,{defineInstance:function(){var b={type:"",cursor:"arrow",roundedCorners:"all",disabled:!1,height:null,width:null,overrideTheme:!1,enableHover:!0,enableDefault:!0,enablePressed:!0,imgPosition:"center",imgSrc:"",imgWidth:16,imgHeight:16,value:null,textPosition:"",textImageRelation:"overlay",rtl:!1,_ariaDisabled:!1,_scrollAreaButton:!1,template:"default",aria:{"aria-disabled":{name:"disabled",type:"boolean"}}};return this===a.jqx._jqxButton.prototype?b:(a.extend(!0,this,b),b)},_addImage:function(b){var c=this;if("input"==c.element.nodeName.toLowerCase()||"button"==c.element.nodeName.toLowerCase()||"div"==c.element.nodeName.toLowerCase()){if(c._img)c._img.setAttribute("src",c.imgSrc),c._img.setAttribute("width",c.imgWidth),c._img.setAttribute("height",c.imgHeight),c._text.innerHTML=c.value;else{c.field=c.element,c.field.className&&(c._className=c.field.className);var d={title:c.field.title},e=null;if(c.field.getAttribute("value"))var e=c.field.getAttribute("value");else if("input"!=c.element.nodeName.toLowerCase())var e=c.element.innerHTML;c.value&&(e=c.value),c.field.id.length?d.id=c.field.id.replace(/[^\w]/g,"_")+"_"+b:d.id=a.jqx.utilities.createId()+"_"+b;var f=document.createElement("div");f.id=d.id,f.title=d.title,f.style.cssText=c.field.style.cssText,f.style.boxSizing="border-box";var g=document.createElement("img");g.setAttribute("src",c.imgSrc),g.setAttribute("width",c.imgWidth),g.setAttribute("height",c.imgHeight),f.appendChild(g),c._img=g;var h=document.createElement("span");e&&(h.innerHTML=e,c.value=e),f.appendChild(h),c._text=h,c.field.style.display="none",c.field.parentNode&&c.field.parentNode.insertBefore(f,c.field.nextSibling);var i=c.host.data();c.host=a(f),c.host.data(i),c.element=f,c.element.id=c.field.id,c.field.id=d.id;var j=new jqxHelper(c.element),k=new jqxHelper(c.field);if(c._className&&(j.addClass(c._className),k.removeClass(c._className)),c.field.tabIndex){var l=c.field.tabIndex;c.field.tabIndex=-1,c.element.tabIndex=l}}c.imgSrc?c._img.style.display="inline":c._img.style.display="none",c.value?c._text.style.display="inline":c._text.style.display="none",c._positionTextAndImage()}},_positionTextAndImage:function(){var a=this,b=a.element.offsetWidth,c=a.element.offsetHeight,d=a.imgWidth,e=a.imgHeight;""==a.imgSrc&&(d=0,e=0);var f=a._text.offsetWidth,g=a._text.offsetHeight,h=4,i=4,j=4,k=0,l=0;switch(a.textImageRelation){case"imageBeforeText":case"textBeforeImage":k=d+f+2*j+h+2*i,l=Math.max(e,g)+2*j+h+2*i;break;case"imageAboveText":case"textAboveImage":k=Math.max(d,f)+2*j,l=e+g+h+2*j+2*i;break;case"overlay":k=Math.max(d,f)+2*j,l=Math.max(e,g)+2*j}a.width||(a.element.style.width=k+"px",b=k),a.height||(a.element.style.height=l+"px",c=l),a._img.style.position="absolute",a._text.style.position="absolute",a.element.style.position="relative",a.element.style.overflow="hidden";var m={},n={},o=function(a,b,c,d,e){switch(b.width<d&&(b.width=d),b.height<e&&(b.height=e),c){case"left":a.style.left=b.left+"px",a.style.top=b.top+b.height/2-e/2+"px";break;case"topLeft":a.style.left=b.left+"px",a.style.top=b.top+"px";break;case"bottomLeft":a.style.left=b.left+"px",a.style.top=b.top+b.height-e+"px";break;default:case"center":a.style.left=b.left+b.width/2-d/2+"px",a.style.top=b.top+b.height/2-e/2+"px";break;case"top":a.style.left=b.left+b.width/2-d/2+"px",a.style.top=b.top+"px";break;case"bottom":a.style.left=b.left+b.width/2-d/2+"px",a.style.top=b.top+b.height-e+"px";break;case"right":a.style.left=b.left+b.width-d+"px",a.style.top=b.top+b.height/2-e/2+"px";break;case"topRight":a.style.left=b.left+b.width-d+"px",a.style.top=b.top+"px";break;case"bottomRight":a.style.left=b.left+b.width-d+"px",a.style.top=b.top+b.height-e+"px"}},p=0,q=0,r=b,s=c,t=(r-p)/2,u=(s-q)/2,v=a._img,w=a._text,x=s-q,y=r-p;switch(p+=i,q+=i,r=r-i-2,y=y-2*i-2,x=x-2*i-2,a.textImageRelation){case"imageBeforeText":switch(a.imgPosition){case"left":case"topLeft":case"bottomLeft":n={left:p,top:q,width:p+d,height:x},m={left:p+d+h,top:q,width:y-d-h,height:x};break;case"center":case"top":case"bottom":n={left:t-f/2-d/2-h/2,top:q,width:d,height:x},m={left:n.left+d+h,top:q,width:r-n.left-d-h,height:x};break;case"right":case"topRight":case"bottomRight":n={left:r-f-d-h,top:q,width:d,height:x},m={left:n.left+d+h,top:q,width:r-n.left-d-h,height:x}}o(v,n,a.imgPosition,d,e),o(w,m,a.textPosition,f,g);break;case"textBeforeImage":switch(a.textPosition){case"left":case"topLeft":case"bottomLeft":m={left:p,top:q,width:p+f,height:x},n={left:p+f+h,top:q,width:y-f-h,height:x};break;case"center":case"top":case"bottom":m={left:t-f/2-d/2-h/2,top:q,width:f,height:x},n={left:m.left+f+h,top:q,width:r-m.left-f-h,height:x};break;case"right":case"topRight":case"bottomRight":m={left:r-f-d-h,top:q,width:f,height:x},n={left:m.left+f+h,top:q,width:r-m.left-f-h,height:x}}o(v,n,a.imgPosition,d,e),o(w,m,a.textPosition,f,g);break;case"imageAboveText":switch(a.imgPosition){case"topRight":case"top":case"topLeft":n={left:p,top:q,width:y,height:e},m={left:p,top:q+e+h,width:y,height:x-e-h};break;case"left":case"center":case"right":n={left:p,top:u-e/2-g/2-h/2,width:y,height:e},m={left:p,top:n.top+h+e,width:y,height:x-n.top-h-e};break;case"bottomLeft":case"bottom":case"bottomRight":n={left:p,top:s-e-g-h,width:y,height:e},m={left:p,top:n.top+h+e,width:y,height:g}}o(v,n,a.imgPosition,d,e),o(w,m,a.textPosition,f,g);break;case"textAboveImage":switch(a.textPosition){case"topRight":case"top":case"topLeft":m={left:p,top:q,width:y,height:g},n={left:p,top:q+g+h,width:y,height:x-g-h};break;case"left":case"center":case"right":m={left:p,top:u-e/2-g/2-h/2,width:y,height:g},n={left:p,top:m.top+h+g,width:y,height:x-m.top-h-g};break;case"bottomLeft":case"bottom":case"bottomRight":m={left:p,top:s-e-g-h,width:y,height:g},n={left:p,top:m.top+h+g,width:y,height:e}}o(v,n,a.imgPosition,d,e),o(w,m,a.textPosition,f,g);break;case"overlay":default:m={left:p,top:q,width:y,height:x},n={left:p,top:q,width:y,height:x},o(v,n,a.imgPosition,d,e),o(w,m,a.textPosition,f,g)}},createInstance:function(b){var c=this;c._setSize(),c.buttonObj=new jqxHelper(c.element),(""!=c.imgSrc||""!=c.textPosition||c.element.value&&c.element.value.indexOf("<")>=0||null!=c.value)&&(c.refresh(),c._addImage("jqxButton"),c.buttonObj=new jqxHelper(c.element)),c._ariaDisabled||c.element.setAttribute("role","button"),""!==c.type&&c.element.setAttribute("type",c.type),c.overrideTheme||(c.buttonObj.addClass(c.toThemeProperty(a.jqx.cssroundedcorners(c.roundedCorners))),c.enableDefault&&c.buttonObj.addClass(c.toThemeProperty("jqx-button")),c.buttonObj.addClass(c.toThemeProperty("jqx-widget"))),c.isTouchDevice=a.jqx.mobile.isTouchDevice(),c._ariaDisabled||a.jqx.aria(this),"arrow"!=c.cursor&&(c.disabled?c.element.style.cursor="arrow":c.element.style.cursor=c.cursor);var d="mouseenter mouseleave mousedown focus blur";if(c._scrollAreaButton)var d="mousedown";c.isTouchDevice&&(c.addHandler(c.host,a.jqx.mobile.getTouchEventName("touchstart"),function(a){c.isPressed=!0,c.refresh()}),c.addHandler(a(document),a.jqx.mobile.getTouchEventName("touchend")+"."+c.element.id,function(a){c.isPressed=!1,c.refresh()})),c.addHandler(c.host,d,function(a){switch(a.type){case"mouseenter":c.isTouchDevice||!c.disabled&&c.enableHover&&(c.isMouseOver=!0,c.refresh());break;case"mouseleave":c.isTouchDevice||!c.disabled&&c.enableHover&&(c.isMouseOver=!1,c.refresh());break;case"mousedown":c.disabled||(c.isPressed=!0,c.refresh());break;case"focus":c.disabled||(c.isFocused=!0,c.refresh());break;case"blur":c.disabled||(c.isFocused=!1,c.refresh())}}),c.mouseupfunc=function(a){c.disabled||(c.isPressed||c.isMouseOver)&&(c.isPressed=!1,c.refresh())},c.addHandler(document,"mouseup.button"+c.element.id,c.mouseupfunc);try{if((""!=document.referrer||window.frameElement)&&null!=window.top&&window.top!=window.that){var e="";if(window.parent&&document.referrer&&(e=document.referrer),e.indexOf(document.location.host)!=-1){var f=function(a){c.isPressed=!1,c.refresh()};window.top.document&&c.addHandler(a(window.top.document),"mouseup",f)}}}catch(a){}c.propertyChangeMap.roundedCorners=function(b,c,d,e){b.buttonObj.removeClass(b.toThemeProperty(a.jqx.cssroundedcorners(d))),b.buttonObj.addClass(b.toThemeProperty(a.jqx.cssroundedcorners(e)))},c.propertyChangeMap.disabled=function(b,c,d,e){d!=e&&(b.refresh(),b.element.setAttribute("disabled",e),b.element.disabled=e,e?b.element.style.cursor="default":b.element.style.cursor=b.cursor,a.jqx.aria(b,"aria-disabled",b.disabled))},c.propertyChangeMap.rtl=function(a,b,c,d){c!=d&&a.refresh()},c.propertyChangeMap.template=function(a,b,c,d){c!=d&&(a.buttonObj.removeClass(a.toThemeProperty("jqx-"+c)),a.refresh())},c.propertyChangeMap.theme=function(b,c,d,e){b.buttonObj.removeClass(b.element),b.enableDefault&&b.buttonObj.addClass(b.toThemeProperty("jqx-button")),b.buttonObj.addClass(b.toThemeProperty("jqx-widget")),b.overrideTheme||b.buttonObj.addClass(b.toThemeProperty(a.jqx.cssroundedcorners(b.roundedCorners))),b._oldCSSCurrent=null,b.refresh()},c.disabled&&(c.element.disabled=!0,c.element.setAttribute("disabled","true"))},resize:function(a,b){this.width=a,this.height=b,this._setSize()},val:function(){var b=this,c=b.host.find("input");return c.length>0?0==arguments.length||"object"==typeof value?c.val():(c.val(value),b.refresh(),c.val()):0==arguments.length||"object"==typeof value?"button"==b.element.nodeName.toLowerCase()?a(b.element).text():b.element.value:(b.element.value=arguments[0],"button"==b.element.nodeName.toLowerCase()&&a(b.element).text(arguments[0]),void b.refresh())},_setSize:function(){var a=this,b=a.height,c=a.width;b&&(isNaN(b)||(b+="px"),a.element.style.height=b),c&&(isNaN(c)||(c+="px"),a.element.style.width=c)},_removeHandlers:function(){var b=this;b.removeHandler(b.host,"selectstart"),b.removeHandler(b.host,"click"),b.removeHandler(b.host,"focus"),b.removeHandler(b.host,"blur"),b.removeHandler(b.host,"mouseenter"),b.removeHandler(b.host,"mouseleave"),b.removeHandler(b.host,"mousedown"),b.removeHandler(a(document),"mouseup.button"+b.element.id,b.mouseupfunc),b.isTouchDevice&&(b.removeHandler(b.host,a.jqx.mobile.getTouchEventName("touchstart")),b.removeHandler(a(document),a.jqx.mobile.getTouchEventName("touchend")+"."+b.element.id)),b.mouseupfunc=null,delete b.mouseupfunc},focus:function(){this.host.focus()},destroy:function(){var b=this;b._removeHandlers();var c=a.data(b.element,"jqxButton");c&&delete c.instance,b.host.removeClass(),b.host.removeData(),b.host.remove(),delete b.set,delete b.get,delete b.call,delete b.element,delete b.host},render:function(){this.refresh()},propertiesChangedHandler:function(a,b,c){c&&c.width&&c.height&&2==Object.keys(c).length&&(a._setSize(),a.refresh())},propertyChangedHandler:function(a,b,c,d){void 0!=this.isInitialized&&0!=this.isInitialized&&d!=c&&(a.batchUpdate&&a.batchUpdate.width&&a.batchUpdate.height&&2==Object.keys(a.batchUpdate).length||("type"===b&&a.element.setAttribute("type",d),"textImageRelation"!=b&&"textPosition"!=b&&"imgPosition"!=b||(a._img?a._positionTextAndImage():a._addImage("jqxButton")),"imgSrc"!=b&&"imgWidth"!=b&&"imgHeight"!=b&&"value"!=b||a._addImage("jqxButton"),"width"!=b&&"height"!=b||(a._setSize(),a.refresh())))},refresh:function(){var a=this;if(!a.overrideTheme){var b=a.toThemeProperty("jqx-fill-state-focus"),c=a.toThemeProperty("jqx-fill-state-disabled"),d=a.toThemeProperty("jqx-fill-state-normal");a.enableDefault||(d="");var e=a.toThemeProperty("jqx-fill-state-hover"),f=a.toThemeProperty("jqx-fill-state-pressed"),g=a.toThemeProperty("jqx-fill-state-pressed");a.enablePressed||(f="");var h="";if(a.host){if(a.element.disabled=a.disabled,a.disabled)return a._oldCSSCurrent&&a.buttonObj.removeClass(a._oldCSSCurrent),h=d+" "+c,"default"!==a.template&&""!==a.template&&(h+=" jqx-"+a.template,""!=a.theme&&(h+=" jqx-"+a.template+"-"+a.theme)),a.buttonObj.addClass(h),void(a._oldCSSCurrent=h);h=a.isMouseOver&&!a.isTouchDevice?a.isPressed?g:e:a.isPressed?f:d,a.isFocused&&(h+=" "+b),"default"!==a.template&&""!==a.template&&(h+=" jqx-"+a.template,""!=a.theme&&(h+=" jqx-"+a.template+"-"+a.theme)),h!=a._oldCSSCurrent&&(a._oldCSSCurrent&&a.buttonObj.removeClass(a._oldCSSCurrent),a.buttonObj.addClass(h),a._oldCSSCurrent=h),a.rtl&&(a.buttonObj.addClass(a.toThemeProperty("jqx-rtl")),a.element.style.direction="rtl")}}}}),a.jqx.jqxWidget("jqxLinkButton","",{}),a.extend(a.jqx._jqxLinkButton.prototype,{defineInstance:function(){this.disabled=!1,this.height=null,this.width=null,this.rtl=!1,this.href=null},createInstance:function(b){var c=this;this.host.onselectstart=function(){return!1},this.host.attr("role","button");var d=this.height||this.element.offsetHeight,e=this.width||this.element.offsetWidth;this.href=this.element.getAttribute("href"),this.target=this.element.getAttribute("target"),this.content=this.host.text(),this.element.innerHTML="";var f=document.createElement("input");f.type="button",f.className="jqx-wrapper "+this.toThemeProperty("jqx-reset"),this._setSize(f,e,d),f.value=this.content;var g=new jqxHelper(this.element);g.addClass(this.toThemeProperty("jqx-link")),this.element.style.color="inherit",this.element.appendChild(f),this._setSize(f,e,d);var h=void 0==b?{}:b[0]||{};a(f).jqxButton(h),this.wrapElement=f,this.disabled&&(this.element.disabled=!0),this.propertyChangeMap.disabled=function(a,b,c,d){a.element.disabled=d,a.wrapElement.jqxButton({disabled:d})},this.addHandler(a(f),"click",function(a){return this.disabled||c.onclick(a),!1})},_setSize:function(a,b,c){c&&(isNaN(c)||(c+="px"),a.style.height=c),b&&(isNaN(b)||(b+="px"),a.style.width=b)},onclick:function(a){null!=this.target?window.open(this.href,this.target):window.location=this.href}}),a.jqx.jqxWidget("jqxRepeatButton","jqxButton",{}),a.extend(a.jqx._jqxRepeatButton.prototype,{defineInstance:function(){this.delay=50},createInstance:function(b){var c=this,d=a.jqx.mobile.isTouchDevice(),e=d?"touchend."+this.base.element.id:"mouseup."+this.base.element.id,f=d?"touchstart."+this.base.element.id:"mousedown."+this.base.element.id;this.addHandler(a(document),e,function(a){null!=c.timeout&&(clearTimeout(c.timeout),c.timeout=null,c.refresh()),void 0!=c.timer&&(clearInterval(c.timer),c.timer=null,c.refresh())}),this.addHandler(this.base.host,f,function(a){null!=c.timer&&clearInterval(c.timer),c.timeout=setTimeout(function(){clearInterval(c.timer),c.timer=setInterval(function(a){c.ontimer(a)},c.delay)},150)}),this.mousemovefunc=function(a){d||0==a.which&&null!=c.timer&&(clearInterval(c.timer),c.timer=null)},this.addHandler(this.base.host,"mousemove",this.mousemovefunc)},destroy:function(){var b=a.jqx.mobile.isTouchDevice(),c=b?"touchend."+this.base.element.id:"mouseup."+this.base.element.id,d=b?"touchstart."+this.base.element.id:"mousedown."+this.base.element.id;this.removeHandler(this.base.host,"mousemove",this.mousemovefunc),this.removeHandler(this.base.host,d),this.removeHandler(a(document),c),this.timer=null,delete this.mousemovefunc,delete this.timer;var e=a.data(this.base.element,"jqxRepeatButton");e&&delete e.instance,a(this.base.element).removeData(),this.base.destroy(),delete this.base},stop:function(){clearInterval(this.timer),this.timer=null},ontimer:function(b){var b=new a.Event("click");null!=this.base&&null!=this.base.host&&this.base.host.trigger(b)}}),a.jqx.jqxWidget("jqxToggleButton","jqxButton",{}),a.extend(a.jqx._jqxToggleButton.prototype,{defineInstance:function(){this.toggled=!1,this.uiToggle=!0,this.aria={"aria-checked":{name:"toggled",type:"boolean"},"aria-disabled":{name:"disabled",type:"boolean"}}},createInstance:function(b){var c=this;c.base.overrideTheme=!0,c.isTouchDevice=a.jqx.mobile.isTouchDevice(),a.jqx.aria(this),c.propertyChangeMap.roundedCorners=function(b,c,d,e){b.base.buttonObj.removeClass(b.toThemeProperty(a.jqx.cssroundedcorners(d))),b.base.buttonObj.addClass(b.toThemeProperty(a.jqx.cssroundedcorners(e)))},c.propertyChangeMap.toggled=function(a,b,c,d){a.refresh()},c.propertyChangeMap.disabled=function(a,b,c,d){a.base.disabled=d,a.refresh()},c.addHandler(c.base.host,"click",function(a){!c.base.disabled&&c.uiToggle&&c.toggle()}),c.isTouchDevice||(c.addHandler(c.base.host,"mouseenter",function(a){c.base.disabled||c.refresh()}),c.addHandler(c.base.host,"mouseleave",function(a){c.base.disabled||c.refresh()})),c.addHandler(c.base.host,"mousedown",function(a){c.base.disabled||c.refresh()}),c.addHandler(a(document),"mouseup.togglebutton"+c.base.element.id,function(a){c.base.disabled||c.refresh()})},destroy:function(){this._removeHandlers(),this.base.destroy()},_removeHandlers:function(){this.removeHandler(this.base.host,"click"),this.removeHandler(this.base.host,"mouseenter"),this.removeHandler(this.base.host,"mouseleave"),this.removeHandler(this.base.host,"mousedown"),this.removeHandler(a(document),"mouseup.togglebutton"+this.base.element.id)},toggle:function(){this.toggled=!this.toggled,this.refresh(),a.jqx.aria(this,"aria-checked",this.toggled)},unCheck:function(){this.toggled=!1,this.refresh()},check:function(){this.toggled=!0,this.refresh()},refresh:function(){var a=this,b=a.base.toThemeProperty("jqx-fill-state-disabled"),c=a.base.toThemeProperty("jqx-fill-state-normal");a.base.enableDefault||(c="");var d=a.base.toThemeProperty("jqx-fill-state-hover"),e=a.base.toThemeProperty("jqx-fill-state-pressed"),f=a.base.toThemeProperty("jqx-fill-state-pressed"),g="";return a.base.element.disabled=a.base.disabled,a.base.disabled?(g=c+" "+b,void a.base.buttonObj.addClass(g)):(g=a.base.isMouseOver&&!a.isTouchDevice?a.base.isPressed||a.toggled?f:d:a.base.isPressed||a.toggled?e:c,"default"!==a.base.template&&""!==a.base.template&&(g+=" jqx-"+a.base.template,""!=a.base.theme&&(g+=" jqx-"+a.template+"-"+a.base.theme)),a.base.buttonObj.hasClass(b)&&b!=g&&a.base.buttonObj.removeClass(b),a.base.buttonObj.hasClass(c)&&c!=g&&a.base.buttonObj.removeClass(c),a.base.buttonObj.hasClass(d)&&d!=g&&a.base.buttonObj.removeClass(d),a.base.buttonObj.hasClass(e)&&e!=g&&a.base.buttonObj.removeClass(e),a.base.buttonObj.hasClass(f)&&f!=g&&a.base.buttonObj.removeClass(f),void(a.base.buttonObj.hasClass(g)||a.base.buttonObj.addClass(g)))}})}(jqxBaseFramework);


/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.jqxWidget("jqxNumberInput","",{}),a.extend(a.jqx._jqxNumberInput.prototype,{defineInstance:function(){var b={value:null,decimal:0,min:-99999999,max:99999999,width:200,validationMessage:"Invalid value",height:25,textAlign:"right",readOnly:!1,promptChar:"_",decimalDigits:2,decimalSeparator:".",groupSeparator:",",groupSize:3,symbol:"",symbolPosition:"left",digits:8,negative:!1,negativeSymbol:"-",disabled:!1,inputMode:"advanced",spinButtons:!1,spinButtonsWidth:18,spinButtonsStep:1,autoValidate:!0,spinMode:"advanced",enableMouseWheel:!0,touchMode:"auto",allowNull:!0,placeHolder:"",changeType:null,template:"",rtl:!1,events:["valueChanged","textchanged","mousedown","mouseup","keydown","keyup","keypress","change"],aria:{"aria-valuenow":{name:"decimal",type:"number"},"aria-valuemin":{name:"min",type:"number"},"aria-valuemax":{name:"max",type:"number"},"aria-disabled":{name:"disabled",type:"boolean"}},invalidArgumentExceptions:["invalid argument exception"]};return this===a.jqx._jqxNumberInput.prototype?b:(a.extend(!0,this,b),b)},createInstance:function(a){var b=this.host.attr("value");void 0!=b&&(this.decimal=b),null!=this.value&&(this.decimal=this.value);var c=this;c._createFromInput("jqxNumberInput"),this.render()},_createFromInput:function(b){var c=this;if("input"==c.element.nodeName.toLowerCase()){c.field=c.element,c.field.className&&(c._className=c.field.className);var d={title:c.field.title};if(c.field.value&&(c.decimal=parseFloat(c.field.value)),c.field.getAttribute("min")){var e=c.field.getAttribute("min");c.min=parseFloat(e)}if(c.field.getAttribute("step")){var f=c.field.getAttribute("step");c.spinButtonsStep=parseFloat(f)}if(c.field.getAttribute("max")){var g=c.field.getAttribute("max");c.max=parseFloat(g)}c.field.id.length?d.id=c.field.id.replace(/[^\w]/g,"_")+"_"+b:d.id=a.jqx.utilities.createId()+"_"+b;var h=a("<div></div>",d);h[0].style.cssText=c.field.style.cssText,c.width||(c.width=a(c.field).width()),c.height||(c.height=a(c.field).outerHeight()),a(c.field).hide().after(h);var i=c.host.data();if(c.host=h,c.host.data(i),c.element=h[0],c.element.id=c.field.id,c.field.id=d.id,c._className&&(c.host.addClass(c._className),a(c.field).removeClass(c._className)),c.field.tabIndex){var j=c.field.tabIndex;c.field.tabIndex=-1,c.element.tabIndex=j}}},_doTouchHandling:function(){var a=this,b=a.savedValue;if(a.parsing||(a.parsing=!0),a.parsing){a.numberInput.val()&&0==a.numberInput.val().indexOf("-")?a.setvalue("negative",!0):a.setvalue("negative",!1);for(var c=a.numberInput.val(),d=0;d<c.length-1;d++){var e=c.substring(d,d+1);if(isNaN(parseFloat(e))&&a.symbol.toString().indexOf(e)===-1&&"%"!=e&&"$"!=e&&"."!=e&&","!=e&&"-"!=e)return a.numberInput[0].value=b,void(a.parsing=!1)}a.ValueString=a.GetValueString(a.numberInput.val(),a.decimalSeparator,""!=a.decimalSeparator),a._parseDecimalInSimpleMode(),a.decimal=a.ValueString;var f=a.getvalue("negative");f&&(a.decimal="-"+a.ValueString),a.parsing=!1}},render:function(){this.host.attr({role:"spinbutton"}),this.host.attr("data-role","input"),a.jqx.aria(this),a.jqx.aria(this,"aria-multiline",!1);var b=this;(this.officeMode||this.theme&&this.theme.indexOf("office")!=-1)&&18==this.spinButtonsWidth&&(this.spinButtonsWidth=15),(a.jqx.mobile.isTouchDevice()||this.touchMode===!0)&&(this.inputMode="textbox",this.spinMode="simple"),""==this.decimalSeparator&&(this.decimalSeparator=" "),this.host.addClass(this.toThemeProperty("jqx-input")),this.host.addClass(this.toThemeProperty("jqx-rc-all")),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-widget-content")),this.host.addClass(this.toThemeProperty("jqx-numberinput")),this.spinButtons?this._spinButtons():(this.numberInput=a("<input style='border:none;' autocomplete='off' type='textarea'/>").appendTo(this.host),this.numberInput.addClass(this.toThemeProperty("jqx-input-content")),this.numberInput.addClass(this.toThemeProperty("jqx-widget-content"))),this.numberInput.attr("placeholder",this.placeHolder);var c=this.host.attr("name");if(c&&this.numberInput.attr("name",c),this.host.attr("tabindex")&&(this.numberInput.attr("tabindex",this.host.attr("tabindex")),this.host.removeAttr("tabindex")),a.jqx.mobile.isTouchDevice()||this.touchMode===!0||"textbox"==this.inputMode){var b=this;b.savedValue="",this.addHandler(this.numberInput,"focus",function(){b.savedValue=b.numberInput[0].value}),this.addHandler(this.numberInput,"change",function(){b._doTouchHandling()})}var d=a.data(this.host[0],"jqxNumberInput");d.jqxNumberInput=this;var b=this;this.host.parents("form").length>0&&this.addHandler(this.host.parents("form"),"reset",function(){setTimeout(function(){b.setDecimal(0)},10)}),this.propertyChangeMap.disabled=function(a,b,c,d){d?(a.numberInput.addClass(e.toThemeProperty("jqx-input-disabled")),a.numberInput.attr("disabled",!0)):(a.host.removeClass(e.toThemeProperty("jqx-input-disabled")),a.numberInput.attr("disabled",!1)),a.spinButtons&&a.host.jqxRepeatButton&&(a.upbutton.jqxRepeatButton({disabled:d}),a.downbutton.jqxRepeatButton({disabled:d}))},this.disabled&&(this.numberInput.addClass(this.toThemeProperty("jqx-input-disabled")),this.numberInput.attr("disabled",!0),this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))),this.selectedText="",this.decimalSeparatorPosition=-1;var e=(this.element.id,this.element,this);this.oldValue=this._value(),this.items=new Array;var f=(this.value,this.decimal);this._initializeLiterals(),this._render(),this.setDecimal(f);var b=this;setTimeout(function(){},100),this._addHandlers(),a.jqx.utilities.resize(this.host,function(){b._render()})},refresh:function(a){a||this._render()},wheel:function(a,b){if(b.enableMouseWheel){b.changeType="mouse";var c=0;if(a||(a=window.event),a.originalEvent&&a.originalEvent.wheelDelta&&(a.wheelDelta=a.originalEvent.wheelDelta),a.wheelDelta?c=a.wheelDelta/120:a.detail&&(c=-a.detail/3),c){var d=b._handleDelta(c);return a.preventDefault&&a.preventDefault(),null!=a.originalEvent&&(a.originalEvent.mouseHandled=!0),void 0!=a.stopPropagation&&a.stopPropagation(),!!d&&(d=!1,a.returnValue=d,d)}a.preventDefault&&a.preventDefault(),a.returnValue=!1}},_handleDelta:function(a){return a<0?this.spinDown():this.spinUp(),!0},_addHandlers:function(){var b=this;this.addHandler(this.numberInput,"paste",function(c){var d=b._selection();c.preventDefault(),c.originalEvent.clipboardData?content=(c.originalEvent||c).clipboardData.getData("text/plain"):window.clipboardData&&(content=window.clipboardData.getData("Text")),this.selectedText=content,a.data(document.body,"jqxSelection",this.selectedText),"simple"!=b.inputMode?b._pasteSelectedText():b.val(content),setTimeout(function(){b._setSelectionStart(d.start)})}),this.addHandler(this.numberInput,"mousedown",function(a){return b._raiseEvent(2,a)}),this._mousewheelfunc=this._mousewheelfunc||function(a){if(!b.editcell)return b.wheel(a,b),!1},this.removeHandler(this.host,"mousewheel",this._mousewheelfunc),this.addHandler(this.host,"mousewheel",this._mousewheelfunc);var c="";this.addHandler(this.numberInput,"focus",function(d){a.data(b.numberInput,"selectionstart",b._selection().start),b.host.addClass(b.toThemeProperty("jqx-fill-state-focus")),b.spincontainer&&b.spincontainer.addClass(b.toThemeProperty("jqx-numberinput-focus")),c=b.numberInput.val(),b._savedValue=b.decimal}),this.addHandler(this.numberInput,"blur",function(d){if("simple"==b.inputMode&&b._exitSimpleInputMode(d,b,!1,c),b.autoValidate){var e=parseFloat(b.decimal),f=b.getvalue("negative");f&&b.decimal>0&&(e=-parseFloat(b.decimal)),e>b.max&&(b._disableSetSelection=!0,b.setDecimal(b.max),b._disableSetSelection=!1),e<b.min&&(b._disableSetSelection=!0,b.setDecimal(b.min),b._disableSetSelection=!1)}return b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus")),b.spincontainer&&b.spincontainer.removeClass(b.toThemeProperty("jqx-numberinput-focus")),b.numberInput.val()!=c&&(b._raiseEvent(7,d),a.jqx.aria(b,"aria-valuenow",b.decimal),b.element.value=b.decimal),!0}),this.addHandler(this.numberInput,"mouseup",function(a){return b._raiseEvent(3,a)}),this.addHandler(this.numberInput,"keydown",function(a){return b.changeType="keyboard",b._raiseEvent(4,a)}),this.addHandler(this.numberInput,"keyup",function(a){return b._raiseEvent(5,a)}),this.addHandler(this.numberInput,"keypress",function(a){return b._raiseEvent(6,a)})},focus:function(){try{this.numberInput.focus()}catch(a){}},_removeHandlers:function(){var b=this;this.removeHandler(this.numberInput,"mousedown");var c=a.jqx.mobile.isOperaMiniMobileBrowser();c&&this.removeHandler(a(document),"click."+this.element.id,b._exitSimpleInputMode,b),this.removeHandler(this.numberInput,"paste"),this.removeHandler(this.numberInput,"focus"),this.removeHandler(this.numberInput,"blur"),this.removeHandler(this.numberInput,"mouseup"),this.removeHandler(this.numberInput,"keydown"),this.removeHandler(this.numberInput,"keyup"),this.removeHandler(this.numberInput,"keypress")},_spinButtons:function(){if(!this.host.jqxRepeatButton)throw new Error("jqxNumberInput: Missing reference to jqxbuttons.js.");this.numberInput?this.numberInput.css("float","left"):(this.numberInput=a("<input autocomplete='off' style='border: none; position: relative; float: left;' type='textarea'/>"),this.numberInput.appendTo(this.host),this.numberInput.addClass(this.toThemeProperty("jqx-input-content")),this.numberInput.addClass(this.toThemeProperty("jqx-widget-content"))),this.spincontainer&&(this.upbutton&&this.upbutton.jqxRepeatButton("destroy"),this.downbutton&&this.downbutton.jqxRepeatButton("destroy"),this.spincontainer.remove()),this.spincontainer=a('<div style="float: right; height: 100%; overflow: hidden; position: relative;"></div>'),this.rtl&&(this.spincontainer.css("float","right"),this.numberInput.css("float","right"),this.spincontainer.css("left","-1px")),this.host.append(this.spincontainer),this.upbutton=a('<div style="overflow: hidden; padding: 0px; margin-left: -1px; position: relative;"><div></div></div>'),this.spincontainer.append(this.upbutton),this.upbutton.jqxRepeatButton({overrideTheme:!0,disabled:this.disabled,roundedCorners:"top-right"}),this.downbutton=a('<div style="overflow: hidden; padding: 0px; margin-left: -1px; position: relative;"><div></div></div>'),this.spincontainer.append(this.downbutton),this.downbutton.jqxRepeatButton({overrideTheme:!0,disabled:this.disabled,roundedCorners:"bottom-right"}),this.template&&(this.upbutton.addClass(this.toThemeProperty("jqx-"+this.template)),this.downbutton.addClass(this.toThemeProperty("jqx-"+this.template)));var b=this;this.downbutton.addClass(this.toThemeProperty("jqx-fill-state-normal jqx-action-button")),this.upbutton.addClass(this.toThemeProperty("jqx-fill-state-normal jqx-action-button")),this.upbutton.addClass(this.toThemeProperty("jqx-rc-tr")),this.downbutton.addClass(this.toThemeProperty("jqx-rc-br")),this.addHandler(this.downbutton,"mouseup",function(a){b.disabled||(b.downbutton.removeClass(b.toThemeProperty("jqx-fill-state-pressed")),b._downArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-selected")))}),this.addHandler(this.upbutton,"mouseup",function(a){b.disabled||(b.upbutton.removeClass(b.toThemeProperty("jqx-fill-state-pressed")),b._upArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-up-selected")))}),this.removeHandler(a(document),"mouseup."+this.element.id),this.addHandler(a(document),"mouseup."+this.element.id,function(a){b.upbutton.removeClass(b.toThemeProperty("jqx-fill-state-pressed")),b._upArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-up-selected")),b.downbutton.removeClass(b.toThemeProperty("jqx-fill-state-pressed")),b._downArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-selected"))}),this.addHandler(this.downbutton,"mousedown",function(c){if(!b.disabled)return a.jqx.browser.msie&&a.jqx.browser.version<9&&(b._inputSelection=b._selection()),b.downbutton.addClass(b.toThemeProperty("jqx-fill-state-pressed")),b._downArrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-selected")),c.preventDefault(),c.stopPropagation(),!1}),this.addHandler(this.upbutton,"mousedown",function(c){if(!b.disabled)return a.jqx.browser.msie&&a.jqx.browser.version<9&&(b._inputSelection=b._selection()),b.upbutton.addClass(b.toThemeProperty("jqx-fill-state-pressed")),b._upArrow.addClass(b.toThemeProperty("jqx-icon-arrow-up-selected")),c.preventDefault(),c.stopPropagation(),!1}),this.addHandler(this.upbutton,"mouseenter",function(a){b.upbutton.addClass(b.toThemeProperty("jqx-fill-state-hover")),b._upArrow.addClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))}),this.addHandler(this.upbutton,"mouseleave",function(a){b.upbutton.removeClass(b.toThemeProperty("jqx-fill-state-hover")),b._upArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))}),this.addHandler(this.downbutton,"mouseenter",function(a){b.downbutton.addClass(b.toThemeProperty("jqx-fill-state-hover")),b._downArrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover"))}),this.addHandler(this.downbutton,"mouseleave",function(a){b.downbutton.removeClass(b.toThemeProperty("jqx-fill-state-hover")),b._downArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-hover"))}),this.upbutton.css("border-width","0px"),this.downbutton.css("border-width","0px"),this.disabled?(this.upbutton[0].disabled=!0,this.downbutton[0].disabled=!0):(this.upbutton[0].disabled=!1,this.downbutton[0].disabled=!1),this.spincontainer.addClass(this.toThemeProperty("jqx-input")),this.spincontainer.addClass(this.toThemeProperty("jqx-rc-r")),this.spincontainer.css("border-width","0px"),this.rtl?this.spincontainer.css("border-right-width","1px"):this.spincontainer.css("border-left-width","1px"),this._upArrow=this.upbutton.find("div"),this._downArrow=this.downbutton.find("div"),this._upArrow.addClass(this.toThemeProperty("jqx-icon-arrow-up")),this._downArrow.addClass(this.toThemeProperty("jqx-icon-arrow-down")),this._upArrow.addClass(this.toThemeProperty("jqx-input-icon")),this._downArrow.addClass(this.toThemeProperty("jqx-input-icon"));var b=this;this._upArrow.hover(function(){b.disabled||b._upArrow.addClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))},function(){b._upArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))}),this._downArrow.hover(function(){b.disabled||b._downArrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover"))},function(){b._downArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-hover"))});var c=a.jqx.mobile.isTouchDevice(),d="click";c&&(d=a.jqx.mobile.getTouchEventName("touchstart")),c&&(this.addHandler(this.downbutton,"click",function(a){b.spinDown()}),this.addHandler(this.upbutton,"click",function(a){b.spinUp()})),this.addHandler(this.downbutton,d,function(d){return c?(d.preventDefault(),d.stopPropagation()):(0==b._selection().start&&b._setSelectionStart(b.numberInput.val().length),a.jqx.browser.msie&&a.jqx.browser.version<9&&b._setSelectionStart(b._inputSelection.start)),b.spinDown(),!1}),this.addHandler(this.upbutton,d,function(d){return c?(d.preventDefault(),d.stopPropagation()):(0==b._selection().start&&b._setSelectionStart(b.numberInput.val().length),a.jqx.browser.msie&&a.jqx.browser.version<9&&b._setSelectionStart(b._inputSelection.start)),b.spinUp(),!1})},spinDown:function(){var b=this,c=this.decimal;if("none"!=b.spinMode){if(null==this.decimal)return void this.setDecimal(0);var d=this.getvalue("negative"),e=d?-1:0;if((a.jqx.mobile.isTouchDevice()||"textbox"==this.inputMode)&&b._doTouchHandling(),!b.disabled){var f=this._selection(),g=this.decimal,h=this.getDecimal();if(h<this.min)return h=this.min,this.setDecimal(this.min),this._setSelectionStart(f.start),void this.spinDown();if(h>this.max)return h=this.max,this.setDecimal(this.max),this._setSelectionStart(f.start),void this.spinDown();b.spinButtonsStep<0&&(b.spinButtonsStep=1);var i=parseInt(b.decimal)-b.spinButtonsStep;i=i.toString().length;var j=e+i<=b.digits;if("advanced"!=b.spinMode){if(h-b.spinButtonsStep>=b.min&&j){var k=1;for(p=0;p<b.decimalDigits;p++)k*=10;var l=k*h-k*b.spinButtonsStep;l/=k,l=this._parseDecimalValueToEditorValue(l),b.setDecimal(l)}}else{var m=this._getspindecimal(),h=(this._getSeparatorPosition(),parseFloat(m.decimal));b.spinButtonsStep<0&&(b.spinButtonsStep=1);var i=parseInt(h)-b.spinButtonsStep;i=i.toString().length;var j=e+i<=b.digits,k=1,n=m.decimal.indexOf(".");if(n!=-1){for(var o=m.decimal.length-n-1,k=1,p=0;p<o;p++)k*=10;h-=new Number(b.spinButtonsStep/k),h=h.toFixed(o);var n=h.toString().indexOf(".");n==-1&&(h=h.toString()+".");var q=h.toString()+m.afterdecimal;q=new Number(q),q=q.toFixed(b.decimalDigits),q>=b.min&&(q=this._parseDecimalValueToEditorValue(q),b.setDecimal(q))}else if(h-b.spinButtonsStep>=b.min&&j){var l=k*h-k*b.spinButtonsStep;l/=k;var q=l.toString()+m.afterdecimal;q>=b.min&&(q=this._parseDecimalValueToEditorValue(q),b.setDecimal(q))}}if(void 0==q||"simple"!=this.inputMode)return this._setSelectionStart(f.start),b.savedValue=b.numberInput[0].value,c!=this.decimal&&(a.jqx.mobile.isTouchDevice()&&this._raiseEvent(0,{}),this._raiseEvent(7,{})),void a.jqx.aria(self,"aria-valuenow",this.decimal);q=this.decimal.toString();var d=this.getvalue("negative");0==e&&d?this._setSelectionStart(f.start+1):void 0==q||void 0!=g&&g.toString().length!=q.length?d?this._setSelectionStart(f.start+1):this._setSelectionStart(f.start-1):this._setSelectionStart(f.start),c!=this.decimal&&(a.jqx.mobile.isTouchDevice()&&this._raiseEvent(0,{}),this._raiseEvent(7,{})),a.jqx.aria(self,"aria-valuenow",this.decimal)}}},_getspindecimal:function(){var a=this._selection(),b="",c=(this._getSeparatorPosition(),this._getVisibleItems()),d=this._getHiddenPrefixCount(),e=this.numberInput.val();this.numberInput.val().length==a.start&&0==a.length&&(this._setSelection(a.start,a.start+1),a=this._selection());for(var f="advanced"!=this.inputMode,g=0;g<a.start;g++)if(f){var h=e.substring(g,g+1),i=!isNaN(parseInt(h));i&&(b+=h),h==this.decimalSeparator&&(b+=h)}else c[g].canEdit&&c[g].character!=this.promptChar?b+=c[g].character:c[g].canEdit||this.decimalSeparatorPosition==-1||c[g]!=c[this.decimalSeparatorPosition-d]||(0==b.length&&(b="0"),b+=c[g].character);for(var j="",g=a.start;g<c.length;g++)if(f){var h=e.substring(g,g+1),i=!isNaN(parseInt(h));i&&(j+=h),h==this.decimalSeparator&&(j+=h)}else c[g].canEdit&&c[g].character!=this.promptChar?j+=c[g].character:c[g].canEdit||this.decimalSeparatorPosition==-1||c[g]!=c[this.decimalSeparatorPosition-d]||(j+=c[g].character);var k=this.getvalue("negative"),l=k?"-"+this._parseDecimalValue(b).toString():this._parseDecimalValue(b).toString();return{decimal:l,afterdecimal:this._parseDecimalValue(j)}},_parseDecimalValue:function(a){if("."!=this.decimalSeparator){var b=a.toString().indexOf(this.decimalSeparator);if(b>=0){var c=a.toString().substring(0,b)+"."+a.toString().substring(b+1);return c}}return a},_parseDecimalValueToEditorValue:function(a){if("."!=this.decimalSeparator){var b=a.toString().indexOf(".");if(b>=0){var c=a.toString().substring(0,b)+this.decimalSeparator+a.toString().substring(b+1);return c}}return a},spinUp:function(){var b=this,c=this.decimal;if("none"!=b.spinMode){if(null==this.decimal)return void this.setDecimal(0);(a.jqx.mobile.isTouchDevice()||"textbox"==this.inputMode)&&b._doTouchHandling();var d=this.getvalue("negative"),e=d?-1:0;if(!b.disabled){var f=this._selection(),g=b.decimal,h=b.getDecimal();if(h<this.min)return h=this.min,this.setDecimal(this.min),this._setSelectionStart(f.start),void this.spinUp();if(h>this.max)return h=this.max,this.setDecimal(this.max),this._setSelectionStart(f.start),void this.spinUp();b.spinButtonsStep<0&&(b.spinButtonsStep=1);var i=parseInt(b.decimal)+b.spinButtonsStep;i=i.toString().length;var j=e+i<=b.digits;if("advanced"!=b.spinMode){if(h+b.spinButtonsStep<=b.max&&j){for(var k=1,l=0;l<b.decimalDigits;l++)k*=10;var m=k*h+k*b.spinButtonsStep;m/=k,m=this._parseDecimalValueToEditorValue(m),b.setDecimal(m)}}else{var n=this._getspindecimal(),h=(this._getSeparatorPosition(),parseFloat(n.decimal));b.spinButtonsStep<0&&(b.spinButtonsStep=1);var i=parseInt(h)+b.spinButtonsStep;i=i.toString().length;var j=e+i<=b.digits,k=1,o=n.decimal.indexOf(".");if(o!=-1){for(var p=n.decimal.length-o-1,k=1,l=0;l<p;l++)k*=10;h+=new Number(b.spinButtonsStep/k),h=h.toFixed(p);var o=h.toString().indexOf(".");o==-1&&(h=h.toString()+".");var q=h.toString()+n.afterdecimal;q=new Number(q),q=q.toFixed(b.decimalDigits);var r=new Number(q).toFixed(b.decimalDigits);r<=b.max?(q=this._parseDecimalValueToEditorValue(q),b.setDecimal(q)):q=void 0}else if(h+b.spinButtonsStep<=b.max&&j){var m=k*h+k*b.spinButtonsStep;m/=k;var q=m.toString()+n.afterdecimal,r=new Number(q).toFixed(b.decimalDigits);r<=b.max?(q=this._parseDecimalValueToEditorValue(q),d&&q.indexOf("-")==-1&&"-0"!=n.decimal&&(q="-"+q),b.setDecimal(q)):q=void 0}}if(void 0==q||"simple"!=this.inputMode)return this._setSelectionStart(f.start),b.savedValue=b.numberInput[0].value,c!=this.decimal&&(a.jqx.mobile.isTouchDevice()&&this._raiseEvent(0,{}),this._raiseEvent(7,{})),void a.jqx.aria(self,"aria-valuenow",this.decimal);q=this.decimal.toString();var d=this.getvalue("negative");e!=-1||d?void 0==q||void 0!=g&&g.toString().length!=q.length?d?this._setSelectionStart(f.start):this._setSelectionStart(1+f.start):this._setSelectionStart(f.start):this._setSelectionStart(-1+f.start),c!=this.decimal&&(a.jqx.mobile.isTouchDevice()&&this._raiseEvent(0,{}),this._raiseEvent(7,{})),a.jqx.aria(self,"aria-valuenow",this.decimal)}}},_exitSimpleInputMode:function(b,c,d,e){if(void 0==c&&(c=b.data),null!=c){if(void 0==d){if(null!=b.target&&null!=c.element&&(void 0!=b.target.id&&b.target.id.toString().length>0&&c.host.find("#"+b.target.id).length>0||b.target==c.element))return;var f=c.host.offset(),g=f.left,h=f.top,i=c.host.width(),j=c.host.height(),k=a(b.target).offset();if(k.left>=g&&k.left<=g+i&&k.top>=h&&k.top<=h+j)return}if(a.jqx.mobile.isOperaMiniBrowser()&&c.numberInput.attr("readonly",!0),!c.disabled&&!c.readOnly){var l=a.data(c.numberInput,"simpleInputMode");if(null!=l)return a.data(c.numberInput,"simpleInputMode",null),this._parseDecimalInSimpleMode(),!1}}},_getDecimalInSimpleMode:function(){var a=this.decimal;if("."!=this.decimalSeparator){var b=a.toString().indexOf(this.decimalSeparator);if(b>0)var c=a.toString().substring(0,b),a=c+"."+a.toString().substring(b+1)}return a},_parseDecimalInSimpleMode:function(a){var b=this,c=b.getvalue("negative"),d=this.ValueString;if(void 0==d&&(d=this.GetValueString(this.numberInput.val(),this.decimalSeparator,""!=this.decimalSeparator)),"."!=this.decimalSeparator){var e=d.toString().indexOf(".");if(e>0){var f=d.toString().substring(0,e),g=f+this.decimalSeparator+d.toString().substring(e+1);d=g}}var h=c?"-":"";"left"==this.symbolPosition&&(h+=this.symbol);var i=this.digits%this.groupSize;0==i&&(i=this.groupSize);var j=d.toString();j.indexOf("-")>=0&&(j=j.substring(j.indexOf("-")+1)),h+=j,"right"==this.symbolPosition&&(h+=this.symbol),0!=a&&b.numberInput.val(h)},_enterSimpleInputMode:function(b,c){void 0==c&&(c=b.data);var d=this._selection();if(null!=c){var e=c.getvalue("negative"),f=c.decimal;e&&f>0&&(f=-f),c.numberInput.val(f),a.data(c.numberInput,"simpleInputMode",!0),a.jqx.mobile.isOperaMiniBrowser()&&c.numberInput.attr("readonly",!1),this._parseDecimalInSimpleMode(),this._setSelectionStart(d.start)}},setvalue:function(a,b){void 0!==this[a]&&("decimal"==a?this._setDecimal(b):(this[a]=b,this.propertyChangedHandler(this,a,b,b)))},getvalue:function(a){return"decimal"==a&&void 0!=this.negative&&1==this.negative?-Math.abs(this[a]):a in this?this[a]:null},_getString:function(){for(var a="",b=0;b<this.items.length;b++){var c=this.items[b].character;a+=c}return a},_literal:function(a,b,c,d){return{character:a,regex:b,canEdit:c,isSeparator:d}},_initializeLiterals:function(){if("textbox"!=this.inputMode){for(var a=0,b=this.negativeSymbol.length,c=0;c<b;c++){var d=this.negativeSymbol.substring(c,c+1),e="",f=!1,g=null;g=this.negative?this._literal(d,e,f,!1):this._literal("",e,f,!1),this.items[a]=g,a++}var h=this.symbol.length;if("left"==this.symbolPosition)for(c=0;c<h;c++){var d=this.symbol.substring(c,c+1),e="",f=!1,g=this._literal(d,e,f,!1);this.items[a]=g,a++}var i=this.digits%this.groupSize;0==i&&(i=this.groupSize);for(var c=0;c<this.digits;c++){var d=this.promptChar,e="\\d",f=!0,g=this._literal(d,e,f,!1);if(this.items[a]=g,a++,c<this.digits-1&&void 0!=this.groupSeparator&&this.groupSeparator.length>0){if(i--,0==i){i=this.groupSize;var j=this._literal(this.groupSeparator,"",!1,!1);this.items[a]=j,a++}}else c==this.digits-1&&(g.character=0)}if(this.decimalSeparatorPosition=-1,void 0!=this.decimalDigits&&this.decimalDigits>0){var d=this.decimalSeparator;0==d.length&&(d=".");var g=this._literal(d,"",!1,!0);this.items[a]=g,this.decimalSeparatorPosition=a,a++;for(var c=0;c<this.decimalDigits;c++){var k=0,e="\\d",l=this._literal(k,e,!0,!1);this.items[a]=l,a++}}if("right"==this.symbolPosition)for(var c=0;c<h;c++){var d=this.symbol.substring(c,c+1),e="",f=!1,g=this._literal(d,e,f);this.items[a]=g,a++}}},_match:function(a,b){var c=new RegExp(b,"i");return c.test(a)},_raiseEvent:function(b,c){var d=this.events[b],e={};if(e.owner=this,"none"==this.host.css("display"))return!0;var f=c.charCode?c.charCode:c.keyCode?c.keyCode:0,g=!0,h=this.readOnly,i=this;if((3==b||2==b)&&!this.disabled){if("simple"==this.inputMode||"textbox"==this.inputMode)return!0;this._handleMouse(c)}if(0==b){var j=this.getvalue("decimal");this.max<j||this.min>j?this.host.addClass(this.toThemeProperty("jqx-input-invalid")):(this.host.removeClass(this.toThemeProperty("jqx-input-invalid")),this.host.addClass(this.toThemeProperty("jqx-input")),this.host.addClass(this.toThemeProperty("jqx-rc-all")))}var k=new a.Event(d);k.owner=this,e.value=this.getvalue("decimal"),e.text=this.numberInput.val(),k.args=e,7==b&&(e.type=this.changeType,this.changeType=null),void 0!=d&&4!=b&&5!=b&&6!=b&&(g=this.host.trigger(k));var i=this;if("textbox"==this.inputMode)return g;if("simple"!=this.inputMode){if(4==b){if(h||this.disabled)return!1;g=i._handleKeyDown(c,f)}else if(5==b)(h||this.disabled)&&(g=!1);else if(6==b){if(h||this.disabled)return!1;g=i._handleKeyPress(c,f)}}else if(4==b||5==b||6==b){if(a.jqx.mobile.isTouchDevice()||this.touchMode===!0)return!0;if(h||this.disabled)return!1;var l=String.fromCharCode(f),m=(parseInt(l),!0);if(c.ctrlKey||c.shiftKey||c.metaKey||f>=65&&f<=90&&(m=!1),6==b&&void 0!=a.jqx.browser.opera&&8==f)return!1;if(m){if(4==b&&(m=i._handleSimpleKeyDown(c,f)),189==f||45==f||109==f||173==f){var n=i._selection();if(4==b){var o=i.getvalue("negative");0==o?i.setvalue("negative",!0):i.setvalue("negative",!1),i.decimal=i.ValueString,i._parseDecimalInSimpleMode(),i._setSelectionStart(n.start),m=!1,i._raiseEvent(0,i.value),i._raiseEvent(1,i.numberInput.val())}}var p=e.ctrlKey||e.metaKey;if(!a.jqx.browser.msie){var q=c;if(p&&99==f||p&&67==f||p&&122==f||p&&90==f||p&&118==f||p&&86==f||q.shiftKey&&45==f)return(a.jqx.browser.webkit||a.jqx.browser.chrome)&&i._handleSimpleKeyDown(c,f),67==f}if(p&&97==f||p&&65==f)return!0;if(6==b&&m){var r=this._isSpecialKey(f);return r}}return m}return g},GetSelectionInValue:function(a,b,c,d){var e=0;for(i=0;i<b.length&&!(i>=a);i++){var f=b.substring(i,i+1),g=!isNaN(parseInt(f));(g||d&&b.substring(i,i+1)==c)&&e++}return e},GetSelectionLengthInValue:function(a,b,c,d){var e=0;for(i=0;i<c.length&&!(i>=a+b);i++){var f=c.substring(i,i+1),g=!isNaN(parseInt(f));(b>0&&i>=a&&g||i>=a&&c[i].toString()==d)&&e++}return e},GetInsertTypeByPositionInValue:function(a,b,c,d){var e="before",f=this.GetValueString(c,b,d),g=this.GetDigitsToSeparator(0,f,b);return a>g&&(e="after"),e},RemoveRange:function(a,b,c,d,e,f){var g=this.digits,h=a,i=b,j=0,d=(this.decimal,this._selection(),this.decimalSeparator),k=""!=d;if(0==i&&this.ValueString.length<this.decimalPossibleChars-1)return j;var l=this.GetSeparatorPositionInText(d,c);e||(l=this.GetSeparatorPositionInText(d,c)),l<0&&!k&&c.length>1&&(l=c.length),l==-1&&(l=c.length);var m=k?1:0;if(b<2&&1==f){var n=this.ValueString.length-this.decimalDigits-m;n==g&&a+b<l&&i++}for(var o="",p=0;p<c.length;p++)if(p<h||p>=h+i)o+=c.substring(p,p+1);else{var q=c.substring(p,p+1);if(q!=d){var q=c.substring(p,p+1);if(!(this.symbol&&""!=this.symbol&&this.symbol.indexOf(q)>=0))if(p>l)o+="0";else{var q=c.substring(p,p+1),r=!isNaN(parseInt(q));r&&j++}}else o+=d}0==o.length&&(o="0"),e?this.numberInput.val(o):this.ValueString=o;var s=o.substring(0,1);if(s==d&&isNaN(parseInt(s))){var t="0"+o;o=t}return this.ValueString=this.GetValueString(o,d,k),this.decimal=this.ValueString,this._parseDecimalInSimpleMode(),this._setSelectionStart(h),j},InsertDigit:function(a,b){"number"!=typeof this.digits&&(this.digits=parseInt(this.digits)),"number"!=typeof this.decimalDigits&&(this.decimalDigits=parseInt(this.decimalDigits));var c=1+this.digits,d=this._selection(),e=this.getvalue("negative"),f=!1;0==d.start&&""!=this.symbol&&"left"==this.symbolPosition&&(this._setSelectionStart(d.start+1),d=this._selection(),f=!0),(e&&f||e&&!f&&0==d.start)&&(this._setSelectionStart(d.start+1),d=this._selection());var g=this.numberInput.val().substring(d.start,d.start+1),h=this.numberInput.val(),i=this.decimalSeparator,j=""!=i&&this.decimalDigits>0;if(g==this.symbol&&"right"==this.symbolPosition){if(0!=this.decimalDigits)return;if(this.ValueString=this.GetValueString(h,i,j),this.ValueString.length>=c)return}this.ValueString=this.GetValueString(h,i,j),""==this.ValueString&&(this.ValueString=new Number(0).toFixed(this.decimalDigits));var k=this.ValueString;this.decimalDigits>0&&b>=k.length&&(b=k.length-1);var l="";b<k.length&&(l=k.substring(b,b+1));var m=!1,n=this.GetInsertTypeByPositionInValue(b,i,h,j);"after"==n&&(m=!0);var o=j?1:0;l!=i&&this.ValueString.length-this.decimalDigits-o>=c-1&&(m=!0),"0"===l&&1===this.ValueString.length&&0===this.decimalDigits&&(m=!0);var p=!1,q=j?1:0;if(!(!m&&this.ValueString&&this.ValueString.length>=this.digits+this.decimalDigits+q)){if(m&&l!=i){p&&b++;var r=k.substring(0,b);if(r.length==k.length&&this.ValueString.length>=this.digits+this.decimalDigits+q)return;var s=a,t="";b+1<k.length&&(t=k.substring(b+1));var u=r+s+t;this.ValueString=u}else{var r=k.substring(0,b),s=a,t=k.substring(b),u=r+s+t;"0"==k.substring(0,1)&&k.substring(1,2)==i&&(u=s+k.substring(1),l==i&&(this._setSelectionStart(d.start-1),d=this._selection())),this.ValueString=u}e?this.decimal=-this.ValueString:this.decimal=this.ValueString,this._parseDecimalInSimpleMode();var v=d.start;v+=1,this._setSelectionStart(v),this.value=this.decimal,this._raiseEvent(0,this.value),this._raiseEvent(1,this.numberInput.val())}},GetStringToSeparator:function(a,b,c){var d="",e=this.GetSeparatorPositionInText(b,a),f=a.subString(0,e);return d=this.GetValueString(f,b,c)},GetSeparatorPositionInText:function(a,b){var c=-1;for(i=0;i<b.length;i++)if(b.substring(i,i+1)==a){c=i;break}return c},GetValueString:function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a.substring(e,e+1),g=!isNaN(parseInt(f));g&&(d+=f),f==b&&(d+=b)}return d},Backspace:function(){var a=this._selection(),b=this._selection(),c=this.numberInput.val();if(0!=a.start||0!=a.length){this.isBackSpace=!0;var d=c.substring[(a.start,a.start+1)];!isNaN(parseInt(d));if(a.start>0&&0==a.length){this._setSelectionStart(a.start-1);var a=this._selection()}this.Delete(),this._setSelectionStart(b.start-1),this.isBackSpace=!1}},Delete:function(a){var b=this._selection(),c=this.numberInput.val();if(0===b.start&&"-"==c.substring(0,1)){this.setvalue("negative",!1);var b=this._selection(),c=this.numberInput.val()}var d=b.start,e=b.length;e=Math.max(e,1),this.ValueString=this.GetValueString(c,this.decimalSeparator,""!=this.decimalSeparator),d>this.ValueString.indexOf(this.decimalSeparator)&&this.decimalDigits>0&&d++;var f=0;this.symbol&&("left"==this.symbolPosition&&f--,this.negative&&f--),this.RemoveRange(b.start+f,e,this.ValueString,".",!1);var g=this.ValueString.substring(0,1),h=!isNaN(parseInt(g));h||(this.ValueString="0"+this.ValueString),this.decimal=this.ValueString,this._parseDecimalInSimpleMode(),
this._setSelectionStart(d),this.value=this.decimal,this._raiseEvent(0,this.value),this._raiseEvent(1,this.numberInput.val())},insertsimple:function(a){var b=this._selection(),c=this.numberInput.val();if(!(b.start==c.length&&null!=this.decimal&&this.decimalDigits>0)){var d=(this.decimal,this.decimalSeparator);this.ValueString=this.GetValueString(c,d,""!=d);var e=this.GetSelectionInValue(b.start,c,d,""!=d),f=this.GetSelectionLengthInValue(b.start,b.length,c,d);this.GetDigitsToSeparator(0,this.ValueString,d);if(this.decimalDigits>0&&e>=this.ValueString.length&&e--,""==this.ValueString)return this.ValueString=new Number(0).toFixed(this.decimalDigits),this.ValueString=this.ValueString.replace(".",d),this.RemoveRange(b.start,f,this.ValueString,d,!1,!0),void this.InsertDigit(a,0,b);this.RemoveRange(b.start,f,this.ValueString,d,!1,!0),this.InsertDigit(a,e,b)}},GetDigitsToSeparator:function(a,b,c){if(void 0==c&&(c="."),b.indexOf(c)<0)return b.length;for(i=0;i<b.length;i++)if(b.substring(i,i+1)==c){a=i;break}return a},_handleSimpleKeyDown:function(b,c){var d=this._selection(),e=b.ctrlKey||b.metaKey;if((8==c||46==c)&&e)return this.setDecimal(null),!1;if(d.start>=0&&d.start<this.items.length)var f=String.fromCharCode(c);if(27===c){this.setDecimal(this._savedValue);var g=this.GetSeparatorPositionInText(this.decimalSeparator,this.numberInput.val());g!=-1&&this._setSelectionStart(g),b.preventDefault()}if(this.rtl&&37==c){var h=b.shiftKey,i=h?1:0;return h?this._setSelection(d.start+1-i,d.start+d.length+1):this._setSelection(d.start+1-i,d.start+1),!1}if(this.rtl&&39==c){var h=b.shiftKey,i=h?1:0;return h?this._setSelection(d.start-1,d.length+i+d.start-1):this._setSelection(d.start-1,d.start-1),!1}if(8==c)return this.Backspace(),!1;if(190==c||110==c){var g=this.GetSeparatorPositionInText(this.decimalSeparator,this.numberInput.val());return g!=-1&&this._setSelectionStart(g+1),!1}if(188==c){var j=this.numberInput.val();for(m=d.start;m<j.length;m++)if(j[m]==this.groupSeparator){this._setSelectionStart(1+m);break}return!1}var e=b.ctrlKey||b.metaKey;if(e&&99==c||e&&67==c){var d=this._selection(),k="",l=this.numberInput.val();if(d.start>0||d.length>0)for(var m=d.start;m<d.end;m++)k+=l.substring(m,m+1);if(a.data(document.body,"jqxSelection",k),a.jqx.browser.msie)window.clipboardData.setData("Text",k);else{var n=this,o=a('<textarea style="position: absolute; left: -1000px; top: -1000px;"/>');o.val(k),a("body").append(o),o.select(),setTimeout(function(){document.designMode="off",o.select(),o.remove(),n.focus()},100)}return this.savedText=k,!0}if(e&&122==c||e&&90==c)return!1;if(e&&118==c||e&&86==c||b.shiftKey&&45==c)return a.jqx.browser.msie&&!this.savedText&&(this.savedText=window.clipboardData.getData("Text")),null!=this.savedText&&this.savedText.length>0?this.val(this.savedText):this.val(a.data(document.body,"jqxSelection")),!1;var f=String.fromCharCode(c),p=parseInt(f);if(c>=96&&c<=105&&(p=c-96,c-=48),!isNaN(p)){var n=this;return this.insertsimple(p),!1}if(46==c)return this.Delete(),!1;if(38==c)return this.spinUp(),!1;if(40==c)return this.spinDown(),!1;var q=this._isSpecialKey(c);return!a.jqx.browser.mozilla||q},_getEditRange:function(){var a=0,b=0;for(i=0;i<this.items.length;i++)if(this.items[i].canEdit){a=i;break}for(i=this.items.length-1;i>=0;i--)if(this.items[i].canEdit){b=i;break}return{start:a,end:b}},_getVisibleItems:function(){var a=new Array,b=0;for(i=0;i<this.items.length;i++)this.items[i].character.toString().length>0&&(a[b]=this.items[i],b++);return a},_hasEmptyVisibleItems:function(){var a=this._getVisibleItems();for(i=0;i<a.length;i++)if(a[i].canEdit&&a[i].character==this.promptChar)return!0;return!1},_getFirstVisibleNonEmptyIndex:function(){var a=this._getVisibleItems();for(i=0;i<a.length;i++)if(a[i].canEdit&&a[i].character!=this.promptChar)return i},_handleMouse:function(a,b){var c=this._selection();if(c.length<=1){var d=this._getFirstVisibleNonEmptyIndex();c.start<d&&this._setSelectionStart(d)}},_insertKey:function(b){this.numberInput[0].focus();var c=String.fromCharCode(b),d=parseInt(c);if(!isNaN(d)){var e=0;for(i=0;i<this.items.length;i++)0==this.items[i].character.length&&e++;var f=this._selection(),g=this;if(f.start>=0&&f.start<=this.items.length){var h=!1,k=this._getFirstVisibleNonEmptyIndex();f.start<k&&0==f.length&&(isNaN(c)&&" "!=c||(this._setSelectionStart(k),f=this._selection()));var l=(this._getFirstEditableItemIndex(),this._getLastEditableItemIndex()),m=this._getVisibleItems();a.each(m,function(a,b){if(!(f.start>a&&a!=m.length-1)){var d=m[a];if(a>l&&(d=m[l]),!isNaN(c)&&" "!=c&&d.canEdit){var i=g._getSeparatorPosition();if(g._match(c,d.regex)){if(!h&&f.length>0){for(j=f.start+e;j<f.end+e;j++)g.items[j].canEdit&&(j>i?g.items[j].character="0":g.items[j].character=g.promptChar);var k=g._getString();h=!0}var i=g._getSeparatorPosition(),n=g._hasEmptyVisibleItems();if(null==g.decimal&&(f.start=i-1,f.start<0&&(f.start=0),f.end=f.start),f.start<=i&&n){var o=a;g.decimalSeparatorPosition==-1&&f.start==i&&(o=a+1),null==g.decimal&&(o=f.start);var q="";for(p=0;p<o;p++)m[p].canEdit&&m[p].character!=g.promptChar&&(q+=m[p].character);q+=c;var r=g.decimal<1?1:0;for(f.start==i&&g.decimalSeparatorPosition!=-1&&(q+=g.decimalSeparator,r=0),p=o+r;p<m.length;p++)m[p].character==g.decimalSeparator&&m[p].isSeparator?q+=m[p].character:m[p].canEdit&&m[p].character!=g.promptChar&&(q+=m[p].character);"."!=g.decimalSeparator&&(q=g._parseDecimalValue(q)),q=parseFloat(q).toString(),q=new Number(q),q=q.toFixed(g.decimalDigits),"."!=g.decimalSeparator&&(q=g._parseDecimalValueToEditorValue(q)),g.setvalue("decimal",q);var k=g._getString();if(f.end<i?g._setSelectionStart(f.end+r):g._setSelectionStart(f.end),f.length>=1&&g._setSelectionStart(f.end),f.length==g.numberInput.val().length){var s=g._moveCaretToDecimalSeparator(),t=g.decimalSeparatorPosition>=0?1:0;g._setSelectionStart(s-t)}}else if(f.start<i||f.start>i){if(g.numberInput.val().length==f.start&&g.decimalSeparatorPosition!=-1)return!1;if(g.numberInput.val().length==f.start&&g.decimalSeparatorPosition==-1&&!n)return!1;var q="",u=!1;for(p=0;p<a;p++)m[p].canEdit&&m[p].character!=g.promptChar&&(q+=m[p].character),m[p].character==g.decimalSeparator&&m[p].isSeparator&&(q+=m[p].character,u=!0);q+=c;var r=g.decimal<1?1:0;for(u||f.start!=i-1||(q+=g.decimalSeparator,u=!0),p=a+1;p<m.length;p++)!u&&m[p].character==g.decimalSeparator&&m[p].isSeparator?q+=m[p].character:m[p].canEdit&&m[p].character!=g.promptChar&&(q+=m[p].character);g.setvalue("decimal",q);var k=g._getString();if(g.decimalSeparatorPosition<0&&d==m[l])return g._setSelectionStart(a),!1;var v=k.indexOf(g.symbol),w=g.getvalue("negative")?1:0;if(v<=w&&(v=k.length),f.start<v?g._setSelectionStart(a+1):g._setSelectionStart(a),f.length>=1,f.length==g.numberInput.val().length){var s=g._moveCaretToDecimalSeparator();g._setSelectionStart(s-1)}}return!1}}}})}}},_handleKeyPress:function(b,c){var d=this._selection(),e=this,f=b.ctrlKey||b.metaKey;if(f&&97==c||f&&65==c)return!0;if(8==c)return d.start>0&&e._setSelectionStart(d.start),!1;if(46==c)return d.start<this.items.length&&e._setSelectionStart(d.start),!1;if(!a.jqx.browser.mozilla&&(45==c||173==c||109==c||189==c)){var g=this.getvalue("negative");0==g?this.setvalue("negative",!0):this.setvalue("negative",!1)}a.jqx.browser.msie&&this._insertKey(c);var h=this._isSpecialKey(c);return h},_deleteSelectedText:function(){var a=this._selection(),b="",c=this._getSeparatorPosition(),d=this._getVisibleItems(),e=this._getHiddenPrefixCount();for(this.numberInput.val().length==a.start&&0==a.length&&(this._setSelection(a.start,a.start+1),a=this._selection()),i=0;i<a.start;i++)d[i].canEdit&&d[i].character!=this.promptChar?b+=d[i].character:d[i].canEdit||this.decimalSeparatorPosition==-1||d[i]!=d[this.decimalSeparatorPosition-e]||(0==b.length&&(b="0"),b+=d[i].character);for(i=a.start;i<a.end;i++)i>c&&this.decimalSeparatorPosition!=-1?d[i].canEdit&&d[i].character!=this.promptChar&&(b+="0"):d[i].canEdit||this.decimalSeparatorPosition==-1||d[i]!=d[this.decimalSeparatorPosition-e]||(0==b.length&&(b="0"),b+=d[i].character);for(i=a.end;i<d.length;i++)d[i].canEdit&&d[i].character!=this.promptChar?b+=d[i].character:d[i].canEdit||this.decimalSeparatorPosition==-1||d[i]!=d[this.decimalSeparatorPosition-e]||(0==b.length&&(b="0"),b+=d[i].character);return this.setvalue("decimal",b),a.length>0},_restoreInitialState:function(){var a=parseInt(this.decimalDigits);for(a>0&&(a+=2),k=this.items.length-1;k>this.items.length-1-a&&this.items[k];k--)this.items[k].canEdit&&this.items[k].character==this.promptChar&&(this.items[k].character=0)},clear:function(){this.setDecimal(0)},clearDecimal:function(){if("textbox"==this.inputMode)return void this.numberInput.val();for(var a=0;a<this.items.length;a++)this.items[a].canEdit&&(this.items[a].character=this.promptChar);this._restoreInitialState()},_saveSelectedText:function(){var b=this._selection(),c="",d=this._getVisibleItems();if(b.start>0||b.length>0)for(i=b.start;i<b.end;i++)d[i].canEdit&&d[i].character!=this.promptChar?c+=d[i].character:d[i].isSeparator&&(c+=d[i].character);return a.jqx.browser.msie&&window.clipboardData.setData("Text",c),c},_pasteSelectedText:function(){var b=this._selection();if(this.selectedText=a.data(document.body,"jqxSelection"),window.clipboardData){var c=window.clipboardData.getData("Text");if(c!=this.selectedText&&c.length>0&&(this.selectedText=window.clipboardData.getData("Text"),null==this.selectedText||void 0==this.selectedText))return}b.start,this._getVisibleItems();if(null!=this.selectedText)for(var d=0;d<this.selectedText.length;d++){var e=parseInt(this.selectedText[d]);if(!isNaN(e)){var f=48+e;this._insertKey(f)}}},_getHiddenPrefixCount:function(){var a=0;if(this.negative||a++,"left"==this.symbolPosition)for(i=0;i<this.symbol.length;i++)""==this.symbol.substring(i,i+1)&&a++;return a},_getEditableItem:function(){var a=this._selection();for(i=0;i<this.items.length;i++)if(i<a.start&&this.items[i].canEdit&&this.items[i].character!=this.promptChar)return this.items[i];return null},_getEditableItems:function(){var a=new Array,b=0;for(i=0;i<this.items.length;i++)this.items[i].canEdit&&(a[b]=this.items[i],b++);return a},_getValidSelectionStart:function(a){for(i=this.items.length-1;i>=0;i--)if(this.items[i].canEdit&&this.items[i].character!=this.promptChar)return i;return-1},_getEditableItemIndex:function(a){var b=this._selection(),c=this._getHiddenPrefixCount(),d=this._getVisibleItems(),e=b.start,f=-1;for(i=0;i<e;i++)i<d.length&&d[i].canEdit&&(f=i+c);if(f==-1&&b.length>0)for(e=b.end,i=0;i<e;i++)if(i<d.length&&d[i].canEdit){f=i+c;break}return f},_getEditableItemByIndex:function(a){for(k=0;k<this.items.length;k++)if(k>a&&this.items[k].canEdit&&this.items[k].character!=this.promptChar)return k;return-1},_getFirstEditableItemIndex:function(){var a=this._getVisibleItems();for(m=0;m<a.length;m++)if(a[m].character!=this.promptChar&&a[m].canEdit&&"0"!=a[m].character)return m;return-1},_getLastEditableItemIndex:function(){var a=this._getVisibleItems();for(m=a.length-1;m>=0;m--)if(a[m].character!=this.promptChar&&a[m].canEdit)return m;return-1},_moveCaretToDecimalSeparator:function(){for(i=this.items.length-1;i>=0;i--)if(this.items[i].character==this.decimalSeparator&&this.items[i].isSeparator)return this.negative?(this._setSelectionStart(i+1),i):(this._setSelectionStart(i),i);return this.numberInput.val().length},_handleBackspace:function(){var a=this._selection(),b=this._getHiddenPrefixCount(),c=this._getEditableItemIndex()-b,d=this._getFirstVisibleNonEmptyIndex(),e=!1;if(this.negative&&(e=!0,(d>=c+1||0==a.start)&&(this.setvalue("negative",!1),0==a.length))){this._setSelectionStart(a.start-1);var a=this._selection()}if(c>=0){0==a.length&&c!=-1&&this._setSelection(c,c+1);var f=a.start>this._getSeparatorPosition()+1&&this.decimalSeparatorPosition>0;f&&(a=this._selection());this._deleteSelectedText();if(a.length<1||f?this._setSelectionStart(a.start):a.length>=1&&this._setSelectionStart(a.end),a.length==this.numberInput.val().length||e){var g=this._moveCaretToDecimalSeparator();this._setSelectionStart(g-1)}}else this._setSelectionStart(a.start)},_handleKeyDown:function(b,c){var d=this._selection(),e=b.ctrlKey||b.metaKey;if((8==c||46==c)&&e)return this.setDecimal(null),!1;if(this.rtl&&37==c){var f=b.shiftKey,g=f?1:0;return f?this._setSelection(d.start+1-g,d.start+d.length+1):this._setSelection(d.start+1-g,d.start+1),!1}if(this.rtl&&39==c){var f=b.shiftKey,g=f?1:0;return f?this._setSelection(d.start-1,d.length+g+d.start-1):this._setSelection(d.start-1,d.start-1),!1}if(e&&97==c||e&&65==c)return!0;if(e&&120==c||e&&88==c)return this.selectedText=this._saveSelectedText(b),a.data(document.body,"jqxSelection",this.selectedText),this._handleBackspace(),!1;if(e&&99==c||e&&67==c)return this.selectedText=this._saveSelectedText(b),a.data(document.body,"jqxSelection",this.selectedText),!1;if(e&&122==c||e&&90==c)return!1;if(e&&118==c||e&&86==c||b.shiftKey&&45==c)return this._pasteSelectedText(),!1;if(d.start>=0&&d.start<this.items.length){var h=String.fromCharCode(c);this.items[d.start]}if(8==c)return this._handleBackspace(),!1;if(190==c||110==c)return this._moveCaretToDecimalSeparator(),!1;if(188==c){var j=this.numberInput.val();for(i=d.start;i<j.length;i++)if(j[i]==this.groupSeparator){this._setSelectionStart(1+i);break}return!1}if(null==a.jqx.browser.msie){var h=String.fromCharCode(c),k=parseInt(h);if(c>=96&&c<=105&&(k=c-96,c-=48),!isNaN(k)){var l=this;return l._insertKey(c),!1}}if(46==c){var m=this._getVisibleItems();if(d.start<m.length){var g=0==m[d.start].canEdit?2:1;if(0==d.start&&this.negative){this.setvalue("negative",!1),0==d.length&&this._setSelectionStart(0);var d=this._selection();if(0==d.length)return!1}0==d.length&&this._setSelection(d.start+g,d.start+g+d.length),this._handleBackspace(),new Number(this.decimal)<1||d.start>this._getSeparatorPosition()?this._setSelectionStart(d.end+g):d.start+1<this.decimalSeparatorPosition&&this._setSelectionStart(d.end+g)}return!1}if(38==c)return this.spinUp(),!1;if(40==c)return this.spinDown(),!1;27===c&&(this.setDecimal(this._savedValue),this._setSelectionStart(d.end),b.preventDefault());var n=this._isSpecialKey(c);if(a.jqx.browser.mozilla&&(45==c||173==c||109==c||189==c)){var o=this.getvalue("negative");0==o?this.setvalue("negative",!0):this.setvalue("negative",!1)}return!a.jqx.browser.mozilla||n},_isSpecialKey:function(a){return 8==a||9==a||13==a||35==a||36==a||37==a||39==a||27==a||46==a},_selection:function(){try{if("selectionStart"in this.numberInput[0]){var a=this.numberInput[0],b=a.selectionEnd-a.selectionStart;return{start:a.selectionStart,end:a.selectionEnd,length:b,text:a.value}}var c=document.selection.createRange();if(null==c)return{start:0,end:a.value.length,length:0};var d=this.numberInput[0].createTextRange(),e=d.duplicate();d.moveToBookmark(c.getBookmark()),e.setEndPoint("EndToStart",d);var b=c.text.length;return{start:e.text.length,end:e.text.length+c.text.length,length:b,text:c.text}}catch(a){return{start:0,end:0,length:0}}},selectAll:function(){var a=this.numberInput;setTimeout(function(){if("selectionStart"in a[0])a[0].focus(),a[0].setSelectionRange(0,a[0].value.length);else{var b=a[0].createTextRange();b.collapse(!0),b.moveEnd("character",a[0].value.length),b.moveStart("character",0),b.select()}},10)},_setSelection:function(b,c){if(1!=this._disableSetSelection){var d=a.jqx.mobile.isTouchDevice();if(!d&&1!=this.touchMode)try{if("selectionStart"in this.numberInput[0])this.numberInput[0].focus(),this.numberInput[0].setSelectionRange(b,c);else{var e=this.numberInput[0].createTextRange();e.collapse(!0),e.moveEnd("character",c),e.moveStart("character",b),e.select()}}catch(a){}}},_setSelectionStart:function(b){this._setSelection(b,b),a.data(this.numberInput,"selectionstart",b)},resize:function(a,b){this.width=a,this.height=b,this._render(!1)},_render:function(b){var c=parseInt(this.host.css("border-left-width")),d=parseInt(this.host.css("border-left-width")),e=parseInt(this.host.css("border-left-width")),f=parseInt(this.host.css("border-left-width"));this.numberInput.css("padding-top","0px"),this.numberInput.css("padding-bottom","0px"),this.host.height(this.height),this.host.width(this.width);var g=this.host.width(),h=this.host.height();this.numberInput.css({"border-left-width":0,"border-right-width":0,"border-bottom-width":0,"border-top-width":0}),isNaN(e)&&(e=1),isNaN(d)&&(d=1),isNaN(f)&&(f=1),isNaN(c)&&(c=1),this.numberInput.css("text-align",this.textAlign);var i=this.numberInput.css("font-size");""==i&&(i=13),this.numberInput.css("height",parseInt(i)+4+"px"),this.numberInput.css("width",g-2);var j=h-2*e-parseInt(i)-2;if(isNaN(j)&&(j=0),j<0&&(j=0),this.spinButtons&&this.spincontainer){g-=parseInt(this.spinButtonsWidth-2);var k=a.jqx.mobile.isTouchDevice();k||this.touchMode===!0?(this.spincontainer.width(2*this.spinButtonsWidth),g-=this.spinButtonsWidth,this.upbutton.height("100%"),this.downbutton.height("100%"),this.downbutton.css("float","left"),this.upbutton.css("float","right"),this.upbutton.width(this.spinButtonsWidth),this.downbutton.width(1+this.spinButtonsWidth)):(this.spincontainer.width(this.spinButtonsWidth),this.upbutton.width(this.spinButtonsWidth+2),this.downbutton.width(this.spinButtonsWidth+2),this.upbutton.height("50%"),this.downbutton.height("50%"),this.spincontainer.width(this.spinButtonsWidth)),this._upArrow.height("100%"),this._downArrow.height("100%"),this.numberInput.css("width",g-6),this.numberInput.css("margin-right","2px")}var l=j/2;a.jqx.browser.msie&&a.jqx.browser.version<8&&(l=j/4),this.numberInput.css("padding-left","0px"),this.numberInput.css("padding-right","0px"),this.numberInput.css("padding-top",Math.round(l)+"px"),this.numberInput.css("padding-bottom",Math.round(l)+"px"),void 0!=b&&1!=b||(this.numberInput.val(this._getString()),"advanced"!=this.inputMode&&this._parseDecimalInSimpleMode())},destroy:function(){this._removeHandlers(),this.host.remove()},inputValue:function(a){return void 0===a?this._value():(this.propertyChangedHandler(this,"value",this._value,a),this._refreshValue(),this)},_value:function(){var a=this.numberInput.val();return a},val:function(a){if((void 0===a||"object"==typeof a)&&null!==a)return this.getDecimal();if(null===a)return void this.setDecimal(null);var b=a;b=b.toString(),b.indexOf(this.symbol)>-1&&(b=b.replace(this.symbol,""));var c=function(a,b,c){var d=a;if(b==c)return a;for(var e=d.indexOf(b);e!=-1;)d=d.replace(b,c),e=d.indexOf(b);return d};b=c(b,this.groupSeparator,""),b=b.replace(this.decimalSeparator,".");for(var d="",e=0;e<b.length;e++){var f=b.substring(e,e+1);"-"===f&&(d+="-"),"."===f&&(d+="."),null!=f.match(/^[0-9]+$/)&&(d+=f)}b=d,b=b.replace(/ /g,""),b=new Number(b),this.setDecimal(b)},getDecimal:function(){if(null==this.decimal)return null;if("simple"==this.inputMode&&(this._parseDecimalInSimpleMode(!1),this.decimal=this._getDecimalInSimpleMode(this.decimal)),""==this.decimal)return 0;var a=this.getvalue("negative");return a&&this.decimal>0?-parseFloat(this.decimal):parseFloat(this.decimal)},setDecimal:function(a){var b=a;if("."!=this.decimalSeparator)if(null===a)this._setDecimal(a);else{var c=a;if("number"!=typeof a){a=a.toString();var d=a.indexOf(".");if(d!=-1){var e=a.substring(0,d),f=a.substring(d+1);c=e+"."+f,e.indexOf("-")!=-1&&(e=e.substring(1)),a="advanced"!=this.inputMode?e+"."+f:e+this.decimalSeparator+f}else{var d=a.indexOf(this.decimalSeparator);if(d!=-1){var e=a.substring(0,d),f=a.substring(d+1);c=e+"."+f,e.indexOf("-")!=-1&&(e=e.substring(1)),a="advanced"!=this.inputMode?e+"."+f:e+this.decimalSeparator+f}}}c<0?this.setvalue("negative",!0):this.setvalue("negative",!1),this._setDecimal(a)}else a<0?this.setvalue("negative",!0):this.setvalue("negative",!1),null===a?this._setDecimal(a):this._setDecimal(Math.abs(a));null==b&&this.numberInput.val("")},_setDecimal:function(a){if(this.allowNull||null!=a||(this.decimal=0,a=0),null==a)return this.decimal=null,this.value=null,this.clearDecimal(),this._refreshValue(),this.decimal=null,void(this.value=null);a.toString().indexOf("e")!=-1&&(a=new Number(a).toFixed(this.decimalDigits).toString()),this.clearDecimal();var b=a.toString(),c="",d="",e=!0;0==b.length&&(b="0");for(var f=0;f<b.length;f++){if("number"==typeof a){if("."==b.substring(f,f+1)){e=!1;continue}}else if(b.substring(f,f+1)==this.decimalSeparator){e=!1;continue}e?c+=b.substring(f,f+1):d+=b.substring(f,f+1)}c.length>0&&(c=parseFloat(c).toString());var g=this.digits;g<c.length&&(c=c.substr(0,g));var h=0,i=this._getSeparatorPosition(),j=this._getHiddenPrefixCount();i+=j;for(var f=i;f>=0;f--)f<this.items.length&&this.items[f].canEdit&&h<c.length&&(this.items[f].character=c.substring(c.length-h-1,c.length-h),h++);h=0;for(var f=i;f<this.items.length;f++)this.items[f].canEdit&&h<d.length&&(this.items[f].character=d.substring(h,h+1),h++);if(this._refreshValue(),"."==this.decimalSeparator)this.ValueString=new Number(a).toFixed(this.decimalDigits);else{var k=a.toString().indexOf(this.decimalSeparator);if(k>0){var l=a.toString().substring(0,k),m=l+"."+a.toString().substring(k+1);this.ValueString=new Number(m).toFixed(this.decimalDigits)}else this.ValueString=new Number(a).toFixed(this.decimalDigits)}if("advanced"!=this.inputMode&&(this._parseDecimalInSimpleMode(),this._raiseEvent(1,this.ValueString)),"textbox"==this.inputMode){this.decimal=this.ValueString;var n=this.getvalue("negative");n&&(this.decimal="-"+this.ValueString)}var a=this.val();a<this.min||a>this.max?this.host.addClass("jqx-input-invalid"):this.host.removeClass("jqx-input-invalid")},_getSeparatorPosition:function(){var a=this._getHiddenPrefixCount();return this.decimalSeparatorPosition>0?this.decimalSeparatorPosition-a:this.items.length-a},_setTheme:function(){this.host.removeClass(),this.host.addClass(this.toThemeProperty("jqx-input")),this.host.addClass(this.toThemeProperty("jqx-rc-all")),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-widget-content")),this.host.addClass(this.toThemeProperty("jqx-numberinput")),this.spinButtons&&(this.downbutton.removeClass(),this.upbutton.removeClass(),this.downbutton.addClass(this.toThemeProperty("jqx-scrollbar-button-state-normal")),this.upbutton.addClass(this.toThemeProperty("jqx-scrollbar-button-state-normal")),this._upArrow.removeClass(),this._downArrow.removeClass(),this._upArrow.addClass(this.toThemeProperty("jqx-icon-arrow-up")),this._downArrow.addClass(this.toThemeProperty("jqx-icon-arrow-down"))),this.numberInput.removeClass(),this.numberInput.addClass(this.toThemeProperty("jqx-input-content"))},propertiesChangedHandler:function(a,b,c){c&&c.width&&c.height&&2==Object.keys(c).length&&a._render()},propertyChangedHandler:function(b,c,d,e){if(!(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&2==Object.keys(b.batchUpdate).length)){if("template"==c&&(b.upbutton.removeClass(b.toThemeProperty("jqx-"+b.template)),b.downbutton.removeClass(b.toThemeProperty("jqx-"+b.template)),b.upbutton.addClass(b.toThemeProperty("jqx-"+b.template)),b.downbutton.addClass(b.toThemeProperty("jqx-"+b.template))),("digits"==c||"groupSize"==c||"decimalDigits"==c)&&e<0)throw new Exception(this.invalidArgumentExceptions[0]);if("placeHolder"==c&&b.numberInput.attr("placeholder",b.placeHolder),"theme"===c&&a.jqx.utilities.setTheme(d,e,b.host),"digits"==c&&e!=d&&(b.digits=parseInt(e)),"min"!=c&&"max"!=c||(a.jqx.aria(b,"aria-value"+c,e.toString()),b._refreshValue()),"decimalDigits"==c&&e!=d&&(b.decimalDigits=parseInt(e)),"decimalSeparator"==c||"digits"==c||"symbol"==c||"symbolPosition"==c||"groupSize"==c||"groupSeparator"==c||"decimalDigits"==c||"negativeSymbol"==c){var f=b.decimal;if("decimalSeparator"==c&&""==e&&(e=" "),d!=e){var g=b._selection();b.items=new Array,b._initializeLiterals(),b.value=b._getString(),b._refreshValue(),b._setDecimal(f)}}if("rtl"==c&&(b.rtl?(b.spincontainer&&(b.spincontainer.css("float","right"),b.spincontainer.css("border-right-width","1px")),b.numberInput.css("float","right")):(b.spincontainer&&(b.spincontainer.css("float","right"),b.spincontainer.css("border-right-width","1px")),b.numberInput.css("float","left"))),"spinButtons"==c&&(b.spincontainer?(e?b.spincontainer.css("display","block"):b.spincontainer.css("display","none"),b._render()):b._spinButtons()),"touchMode"===c&&(b.inputMode="textbox",b.spinMode="simple",b.render()),"negative"==c&&"advanced"==b.inputMode){var g=b._selection(),h=0;e?(b.items[0].character=b.negativeSymbol[0],h=1):(b.items[0].character="",h=-1),b._refreshValue(),b.isInitialized&&b._setSelection(g.start+h,g.end+h)}if("decimal"==c&&(b.value=e,b.setDecimal(e)),"value"===c&&(b.value=e,b.setDecimal(e),b._raiseEvent(1,e)),"textAlign"==c&&(b.textAlign=e,b._render()),"disabled"==c&&(b.numberInput.attr("disabled",e),b.disabled?b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled")):b.host.removeClass(b.toThemeProperty("jqx-fill-state-disabled")),a.jqx.aria(b,"aria-disabled",e.toString())),"readOnly"==c&&(b.readOnly=e),"promptChar"==c){for(i=0;i<b.items.length;i++)b.items[i].character==b.promptChar&&(b.items[i].character=e);b.promptChar=e}"width"==c?(b.width=e,b._render()):"height"==c&&(b.height=e,b._render())}},_value:function(){var a=this.value;return a},_refreshValue:function(){var a=this.value;if("textbox"!==this.inputMode){this.value=this._getString(),a=this.value;for(var b="",c=0;c<this.items.length;c++){var d=this.items[c];d.canEdit&&d.character!=this.promptChar&&(b+=d.character),c==this.decimalSeparatorPosition&&(b+=".")}this.decimal=b;var e=!1;this.oldValue!==a&&(this.oldValue=a,this._raiseEvent(0,a),e=!0),"simple"!=this.inputMode&&(this.numberInput.val(a),e&&this._raiseEvent(1,a)),null==a&&this.numberInput.val("")}}})}(jqxBaseFramework);


/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*! nouislider - 9.2.0 - 2017-01-11 10:35:34 */

(function (factory) {

    if ( typeof define === 'function' && define.amd ) {

        // AMD. Register as an anonymous module.
        define([], factory);

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

	'use strict';

	var VERSION = '9.2.0';


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {
		var div = document.createElement('div');
		addClass(div, className);
		target.appendChild(div);
		return div;
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

	var rect = elem.getBoundingClientRect(),
		doc = elem.ownerDocument,
		docElem = doc.documentElement,
		pageOffset = getPageOffset();

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( ) {

		var supportPageOffset = window.pageXOffset !== undefined,
			isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
			x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	// The interface to Spectrum handles all direction-based
	// conversions, so the above values are unaware.

	function Spectrum ( entry, snap, direction, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;
		this.direction = direction;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if ( entry === 0 ) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if ( !parsed.padding ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if ( parsed.padding >= 50 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testFormat ( parsed, entry ) {

		parsed.format = entry;

		// Any object with a to and from method is supported.
		if ( typeof entry.to === 'function' && typeof entry.from === 'function' ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions( );

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandle = false;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;


	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( !values ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values - 1) );
			var v;
			var i = 0;

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( (v = i++ * spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = document.createElement('div');
		var out = '';
		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function getTags( offset, source, values ) {
			return 'class="' + getClasses(values[1], source) + '" style="' + options.style + ': ' + offset + '%"';
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			out += '<div ' + getTags(offset, options.cssClasses.marker, values) + '></div>';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				out += '<div ' + getTags(offset, options.cssClasses.value, values) + '>' + formatter.to(values[0]) + '</div>';
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		element.innerHTML = out;

		return element;
	}

	function pips ( grid ) {

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		return scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset);

			// Handle reject of multitouch
			if ( !e ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset ) {

		// Prevent scrolling and panning on touch events, while
		// attempting to slide. The tap event also depends on this.
		e.preventDefault();

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;
		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		if ( touch ) {

			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( e.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset();

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o]);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( scope_ActiveHandle ) {
			removeClass(scope_ActiveHandle, options.cssClasses.active);
			scope_ActiveHandle = false;
		}

		// Remove cursor styles and text-selection events bound to the body.
		if ( event.cursor ) {
			document.body.style.cursor = '';
			document.body.removeEventListener('selectstart', document.body.noUiListener);
		}

		// Unbind the move and end events, which are added on 'start'.
		document.documentElement.noUiListeners.forEach(function( c ) {
			document.documentElement.removeEventListener(c[0], c[1]);
		});

		// Remove dragging class.
		removeClass(scope_Target, options.cssClasses.drag);

		setZindex();

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('set', handleNumber);
			fireEvent('change', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		if ( data.handleNumbers.length === 1 ) {

			var handle = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handle.hasAttribute('disabled') ) {
				return false;
			}

			// Mark the handle as 'active' so it can be styled.
			scope_ActiveHandle = handle.children[0];
			addClass(scope_ActiveHandle, options.cssClasses.active);
		}

		// Fix #551, where a handle gets selected instead of dragged.
		event.preventDefault();

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, document.documentElement, eventMove, {
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, document.documentElement, eventEnd, {
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", document.documentElement, documentLeave, {
			handleNumbers: data.handleNumbers
		});

		document.documentElement.noUiListeners = moveEvent.concat(endEvent, outEvent);

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			document.body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			var f = function(){
				return false;
			};

			document.body.noUiListener = f;

			// Prevent text selection when dragging the handles.
			document.body.addEventListener('selectstart', f, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('set', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('update', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated, 'direction' cannot, due to event binding.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		// Save current spectrum direction as testOptions in testRange call
		// doesn't rely on current direction
		newOptions.spectrum.direction = scope_Spectrum.direction;
		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element.");
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};

}));
(function(){

	'use strict';

var
/** @const */ FormatOptions = [
	'decimals',
	'thousand',
	'mark',
	'prefix',
	'postfix',
	'encoder',
	'decoder',
	'negativeBefore',
	'negative',
	'edit',
	'undo'
];

// General

	// Reverse a string
	function strReverse ( a ) {
		return a.split('').reverse().join('');
	}

	// Check if a string starts with a specified prefix.
	function strStartsWith ( input, match ) {
		return input.substring(0, match.length) === match;
	}

	// Check is a string ends in a specified postfix.
	function strEndsWith ( input, match ) {
		return input.slice(-1 * match.length) === match;
	}

	// Throw an error if formatting options are incompatible.
	function throwEqualError( F, a, b ) {
		if ( (F[a] || F[b]) && (F[a] === F[b]) ) {
			throw new Error(a);
		}
	}

	// Check if a number is finite and not NaN
	function isValidNumber ( input ) {
		return typeof input === 'number' && isFinite( input );
	}

	// Provide rounding-accurate toFixed method.
	function toFixed ( value, decimals ) {
		var scale = Math.pow(10, decimals);
		return ( Math.round(value * scale) / scale).toFixed( decimals );
	}


// Formatting

	// Accept a number as input, output formatted string.
	function formatTo ( decimals, thousand, mark, prefix, postfix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

		var originalInput = input, inputIsNegative, inputPieces, inputBase, inputDecimals = '', output = '';

		// Apply user encoder to the input.
		// Expected outcome: number.
		if ( encoder ) {
			input = encoder(input);
		}

		// Stop if no valid number was provided, the number is infinite or NaN.
		if ( !isValidNumber(input) ) {
			return false;
		}

		// Rounding away decimals might cause a value of -0
		// when using very small ranges. Remove those cases.
		if ( decimals !== false && parseFloat(input.toFixed(decimals)) === 0 ) {
			input = 0;
		}

		// Formatting is done on absolute numbers,
		// decorated by an optional negative symbol.
		if ( input < 0 ) {
			inputIsNegative = true;
			input = Math.abs(input);
		}

		// Reduce the number of decimals to the specified option.
		if ( decimals !== false ) {
			input = toFixed( input, decimals );
		}

		// Transform the number into a string, so it can be split.
		input = input.toString();

		// Break the number on the decimal separator.
		if ( input.indexOf('.') !== -1 ) {
			inputPieces = input.split('.');

			inputBase = inputPieces[0];

			if ( mark ) {
				inputDecimals = mark + inputPieces[1];
			}

		} else {

		// If it isn't split, the entire number will do.
			inputBase = input;
		}

		// Group numbers in sets of three.
		if ( thousand ) {
			inputBase = strReverse(inputBase).match(/.{1,3}/g);
			inputBase = strReverse(inputBase.join( strReverse( thousand ) ));
		}

		// If the number is negative, prefix with negation symbol.
		if ( inputIsNegative && negativeBefore ) {
			output += negativeBefore;
		}

		// Prefix the number
		if ( prefix ) {
			output += prefix;
		}

		// Normal negative option comes after the prefix. Defaults to '-'.
		if ( inputIsNegative && negative ) {
			output += negative;
		}

		// Append the actual number.
		output += inputBase;
		output += inputDecimals;

		// Apply the postfix.
		if ( postfix ) {
			output += postfix;
		}

		// Run the output through a user-specified post-formatter.
		if ( edit ) {
			output = edit ( output, originalInput );
		}

		// All done.
		return output;
	}

	// Accept a sting as input, output decoded number.
	function formatFrom ( decimals, thousand, mark, prefix, postfix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

		var originalInput = input, inputIsNegative, output = '';

		// User defined pre-decoder. Result must be a non empty string.
		if ( undo ) {
			input = undo(input);
		}

		// Test the input. Can't be empty.
		if ( !input || typeof input !== 'string' ) {
			return false;
		}

		// If the string starts with the negativeBefore value: remove it.
		// Remember is was there, the number is negative.
		if ( negativeBefore && strStartsWith(input, negativeBefore) ) {
			input = input.replace(negativeBefore, '');
			inputIsNegative = true;
		}

		// Repeat the same procedure for the prefix.
		if ( prefix && strStartsWith(input, prefix) ) {
			input = input.replace(prefix, '');
		}

		// And again for negative.
		if ( negative && strStartsWith(input, negative) ) {
			input = input.replace(negative, '');
			inputIsNegative = true;
		}

		// Remove the postfix.
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
		if ( postfix && strEndsWith(input, postfix) ) {
			input = input.slice(0, -1 * postfix.length);
		}

		// Remove the thousand grouping.
		if ( thousand ) {
			input = input.split(thousand).join('');
		}

		// Set the decimal separator back to period.
		if ( mark ) {
			input = input.replace(mark, '.');
		}

		// Prepend the negative symbol.
		if ( inputIsNegative ) {
			output += '-';
		}

		// Add the number
		output += input;

		// Trim all non-numeric characters (allow '.' and '-');
		output = output.replace(/[^0-9\.\-.]/g, '');

		// The value contains no parse-able number.
		if ( output === '' ) {
			return false;
		}

		// Covert to number.
		output = Number(output);

		// Run the user-specified post-decoder.
		if ( decoder ) {
			output = decoder(output);
		}

		// Check is the output is valid, otherwise: return false.
		if ( !isValidNumber(output) ) {
			return false;
		}

		return output;
	}


// Framework

	// Validate formatting options
	function validate ( inputOptions ) {

		var i, optionName, optionValue,
			filteredOptions = {};

		for ( i = 0; i < FormatOptions.length; i+=1 ) {

			optionName = FormatOptions[i];
			optionValue = inputOptions[optionName];

			if ( optionValue === undefined ) {

				// Only default if negativeBefore isn't set.
				if ( optionName === 'negative' && !filteredOptions.negativeBefore ) {
					filteredOptions[optionName] = '-';
				// Don't set a default for mark when 'thousand' is set.
				} else if ( optionName === 'mark' && filteredOptions.thousand !== '.' ) {
					filteredOptions[optionName] = '.';
				} else {
					filteredOptions[optionName] = false;
				}

			// Floating points in JS are stable up to 7 decimals.
			} else if ( optionName === 'decimals' ) {
				if ( optionValue >= 0 && optionValue < 8 ) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

			// These options, when provided, must be functions.
			} else if ( optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo' ) {
				if ( typeof optionValue === 'function' ) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

			// Other options are strings.
			} else {

				if ( typeof optionValue === 'string' ) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}
			}
		}

		// Some values can't be extracted from a
		// string if certain combinations are present.
		throwEqualError(filteredOptions, 'mark', 'thousand');
		throwEqualError(filteredOptions, 'prefix', 'negative');
		throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

		return filteredOptions;
	}

	// Pass all options as function arguments
	function passAll ( options, method, input ) {
		var i, args = [];

		// Add all options in order of FormatOptions
		for ( i = 0; i < FormatOptions.length; i+=1 ) {
			args.push(options[FormatOptions[i]]);
		}

		// Append the input, then call the method, presenting all
		// options as arguments.
		args.push(input);
		return method.apply('', args);
	}

	/** @constructor */
	function wNumb ( options ) {

		if ( !(this instanceof wNumb) ) {
			return new wNumb ( options );
		}

		if ( typeof options !== "object" ) {
			return;
		}

		options = validate(options);

		// Call 'formatTo' with proper arguments.
		this.to = function ( input ) {
			return passAll(options, formatTo, input);
		};

		// Call 'formatFrom' with proper arguments.
		this.from = function ( input ) {
			return passAll(options, formatFrom, input);
		};
	}

	/** @export */
	window.wNumb = wNumb;

}());

$(document).ready(function() {

	$('.js-select').select2({
		placeholder: "Выберите город",
		allowClear: true
	});


	// show/hide dropdown in navigation
	function initSubmenuToggle() {
		var navLink = $('.js-nav-link'),
			subnavLink = $('.js-subnav-link'),
			navDrop = $('.js-navdrop'),
			active = 'is-active',
			subDrop = $('.js-subnav-drop');

		var hideCurrentNavDrop = function() {
			navLink.removeClass(active);
			navDrop.removeClass(active);

		};

		var showNavDrop = function(el) {

			$(el).addClass(active);
			$(el).parent().find(navDrop).addClass(active);
		};

		navLink.click(function(evt) {

            if ( $(this).siblings(navDrop).length ) {
                evt.preventDefault();
                var isActive = $(this).hasClass(active);

                hideCurrentNavDrop();
                if ( !isActive ) showNavDrop($(this));
            } else {
                hideCurrentNavDrop();
                $(this).addClass(active);
            }
            if ($(this).hasClass(active)) {
                $('.js-scroll-sidebar').perfectScrollbar({
                    suppressScrollX: true
                });
            } else{
               $('.js-scroll-sidebar').perfectScrollbar('destroy'); 
            }
        });


		subnavLink.click(function(evt) {
			if ( $(this).siblings(subDrop).length ) {
				evt.preventDefault();

				$(this).toggleClass(active);
				$(this).siblings(subDrop).toggleClass(active);
			}
		});
	};
 
    function switchSidebarTab() {
        
        $('.js-tabs-item').each(function() {

            $(this).on('click', function(e) {

                var targetLink = $(e.currentTarget),
                    idLink = targetLink.index(),
                    parentLink = targetLink.closest( $('.js-sidebar-tabs') ),
                    links = parentLink.find( $('.js-tabs-item') ),
                    content = parentLink.find( $('.js-tabs-content') ),
                    // content = parentLink.find(`${'.js-tabs-content'}:not(:nth-child(${idLink+1}))`),
                    toShow = parentLink.find(content).eq(idLink),
                    active = 'is-active';

                    links.removeClass(active);
                    targetLink.addClass(active);

                    content.hide();
                    toShow.fadeIn('fast');

                    e.preventDefault();
            });
        });
    }    

    jQuery.fn.exists = function() {return this.length>0;}

    // quantity
    if ($('.js-quantity').exists()) {
    
        $('.js-quantity').jqxNumberInput({
            spinButtons: true,
            inputMode: 'advanced',
            digits: 3,
            decimalDigits: 0,
            min: 0,
            promptChar: "",
            width: 50,
            height: "25px"
        });
    };

    function tableTabs() {
        var allTabs = $('.js-tab-parent'),
            allTabsContent = allTabs.find('.js-toggle-drop');

            if (!(allTabs).hasClass('is-active') ) {
                allTabsContent.slideUp();
            }

        $('.js-toggle-item').click(function(e) {

            var _this = $(this),
                parentTab = _this.closest('.js-tab-parent'),
                siblingsTab = parentTab.siblings(),
                tabContent = parentTab.find( $('.js-toggle-drop') ),
                active = 'is-active',
                flag = false, 
                currentSlide = parentTab.find('.js-detail-features');

            e.preventDefault();
            

            siblingsTab.find( $('.js-toggle-drop') ).slideUp()
                                                 .removeClass(active);
            if ( !(parentTab.hasClass(active)) ) {
                parentTab.addClass(active);
                tabContent.slideDown().addClass(active);

                flag = true;

            } else {
                parentTab.removeClass(active);
                tabContent.slideUp().removeClass(active);

                flag = false;
            };

            siblingsTab.removeClass(active);

            if (flag) {
                $(currentSlide).each(function() {
                    $(this).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: true, 
                        infinite: false,
                        adaptiveHeight: true,
                        dots: true,
                        focusOnSelect: true,
                        dotsClass: 'detail-features__dots',
                        prevArrow: $('.detail-features__arrow_prev'),
                        nextArrow: $('.detail-features__arrow_next') 
                    }); 
                })
            };

        });
    };

    $('.js-drop-popup').on('click', function(){
        $(this).parent().toggleClass(active);
    });

    (function init() {
	   initSubmenuToggle();
       switchSidebarTab();
       tableTabs();
    })();

});

const toggleBlock = '.js-toggle-block';
const toggleBtn = '.js-toggle-btn';
const toggleText = '.js-toggle-text';

$(document).on('click', toggleBtn, function(e) {
    console.log('11');
    e.preventDefault();
    
    const target = $(this);
    const data = target.data('toggle');
    const dataText = target.data('text');
    const toOpen = $(toggleBlock).filter(`[data-toggle="${data}"]`);
    const isVisible = toOpen.is(':visible');
    const opacityFrom = isVisible ? 1 : 0;
    const opacityTo = isVisible ? 0 : 1;
    // if toggle is button
    const isBtn = target.data('btn');
    const textButton = target.find(toggleText).data('text');
    const changeText = target.find(toggleText).text();

    let textTmp = target.text();
    
    if(isBtn) {
        $(toggleText).text(textButton);
        $(toggleText).data('text', changeText);
    } else {
        target.text(dataText);
        target.data('text',textTmp);
    }
    
    toOpen.stop(true).css('opacity', opacityFrom).slideToggle('fast').animate(
        {opacity: opacityTo},
        {queue: false, duration: 'fast'},
    );
    
});


$(document).ready(function() {

const slider = '.js-slider';
const sliderLine = '.js-slider-line';
const sliderInputFrom = '.js-slider-from';
const sliderInputTo = '.js-slider-to';

$(slider).each(function(i, item) {
    const target = $(item);
    const line = target.find(sliderLine).get(0);
    const inputFrom = target.find(sliderInputFrom);
    const inputTo = target.find(sliderInputTo);
    const inputs = target.find(`${sliderInputFrom}, ${sliderInputTo}`);
    
    const max = target.data('max');
    const min = target.data('min');
    const start = target.data('initial');
    const units = target.data('units');
    
    noUiSlider.create(line, {
        start,
        connect: true,
        range: {
            'min': min,
            'max': max
        },
        tooltips: [true, true],
        format: wNumb({
            decimals: 0,
            postfix: ` ${units}`
        })
    });
    
    line.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        inputFrom.val(parseInt(values[0]));
        inputTo.val(parseInt(values[1]));
    
        inputs.change();
    });
    
    inputs.on('change', function() {
        const target = $(this);
        const value = target.val();
        const i = target.index();
        
        // console.log('hi');
    });
    
    
    function setSliderHandle(i, value) {
        let r = [null,null];
        r[i] = value;
        line.noUiSlider.set(r);
    }

// Listen to keydown events on the input field.
    inputs.toArray().forEach(function(input, handle) {

        input.addEventListener('change', function(){
            console.log('changed');
            setSliderHandle(handle, this.value);
        });

        input.addEventListener('keydown', function( e ) {

            let values = line.noUiSlider.get();
            let value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            let steps = line.noUiSlider.steps();

            // [down, up]
            let step = steps[handle];

            let position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch ( e.which ) {

                case 13:
                    setSliderHandle(handle, this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if ( position === false ) {
                        position = 1;
                    }

                    // null = edge of slider
                    if ( position !== null ) {
                        setSliderHandle(handle, value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if ( position === false ) {
                        position = 1;
                    }

                    if ( position !== null ) {
                        setSliderHandle(handle, value - position);
                    }

                    break;
            }
        });
    });

});



});
$(document).ready(function() {

	$('.js-detail-img-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		fade: true,
		asNavFor: '.js-detail-img-thumb'
	});

	$('.js-detail-img-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-detail-img-main',
		vertical: true, 
		dots: false,
		focusOnSelect: true,
		prevArrow: $('.image-thumb__arrow_prev'),
		nextArrow: $('.image-thumb__arrow_next')
	});

	// $('.js-detail-features').each(function() {
	// 	$(this).slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		vertical: true, 
	// 		infinite: false,
	// 		adaptiveHeight: true,
	// 		dots: true,
	// 		focusOnSelect: true,
	// 		dotsClass: 'detail-features__dots',
	// 		prevArrow: $('.detail-features__arrow_prev'),
	// 		nextArrow: $('.detail-features__arrow_next') 
	// 	}); 
	// })

	// function slideArrow(btnClass) {
	// 	let parent = $(this).closest('.js-detail-features');

	// 	// return parent.find(btnClass).css('class');

	// 	console.log( parent );
	// }


// slideArrow();
})


