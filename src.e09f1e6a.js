parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"bTUY":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAutocomplete=void 0;var t=e(require("lodash.throttle"));exports.createAutocomplete=function(e,i,n,d,r){if(void 0===i&&(i=1),void 0===n&&(n=500),void 0===d&&(d=[]),void 0===r&&(r=""),e){var a=0,l=document.createElement("div");l.classList.add("inputWrapper");var o=document.createElement("div"),c=document.createElement("input");c.classList.add("input"),c.setAttribute("type","text"),r&&(c.placeholder=r),l.appendChild(c),l.appendChild(o);var s="";c.addEventListener("input",function(t){(s=c.value)&&s.length>=i?(o.classList.add("loading"),a=0,h()):e.children[1]&&s.length<=i-1&&(a=0,e.removeChild(v))});c.addEventListener("keydown",t.default(function(t){var i=u();if("ArrowDown"===t.code&&i)delete i[a].isActive,a===i.length-1?a=0:a+=1,i&&(i[a].isActive=!0),p();else{if("ArrowUp"!==t.code||!i)return"Enter"===t.code&&i?(c.value=i[a].name,e.removeChild(v),void(a=0)):void 0;delete i[a].isActive,0===a?a=i.length-1:a-=1,i&&(i[a].isActive=!0),p()}},100,{leading:!1}));var u=function(){if(s.length>=i)return d.filter(function(e){return e.name.substr(0,s.length).toUpperCase()===s.toUpperCase()})},v=document.createElement("ul");v.classList.add("list");var p=function(){o.classList.remove("loading"),v.innerHTML="";var t=u();console.log(t),t&&0!==t.length&&(t.forEach(function(e){e.isActive=!1}),t[a].isActive=!0,t.forEach(function(e){var t=document.createElement("li");t.innerHTML=e.name,!0===e.isActive&&t.classList.add("isActive"),v.appendChild(t)}),e.appendChild(v))},h=t.default(p,n,{leading:!1});e.appendChild(l)}};
},{"lodash.throttle":"FNyO"}],"Tnu0":[function(require,module,exports) {

},{}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=require("./autocomplete");require("./styles.css/");var e=function(){return[{name:"Afghanistan"},{name:"Albania"},{name:"Algeria"},{name:"Andorra"},{name:"Angola"},{name:"Anguilla"},{name:"Antigua &amp; Barbuda"},{name:"Argentina"},{name:"Armenia"},{name:"Aruba"},{name:"Australia"},{name:"Austria"},{name:"Azerbaijan"},{name:"Bahamas"},{name:"Bahrain"},{name:"Bangladesh"},{name:"Barbados"},{name:"Belarus"},{name:"Belgium"},{name:"Belize"},{name:"Benin"},{name:"Bermuda"},{name:"Bhutan"},{name:"Bolivia"},{name:"Bosnia &amp; Herzegovina"},{name:"Botswana"},{name:"Brazil"},{name:"British Virgin Islands"},{name:"Brunei"},{name:"Bulgaria"},{name:"Burkina Faso"},{name:"Burundi"},{name:"Cambodia"},{name:"Cameroon"},{name:"Canada"},{name:"Cape Verde"},{name:"Cayman Islands"},{name:"Central Arfrican Republic"},{name:"Chad"},{name:"Chile"},{name:"China"},{name:"Colombia"},{name:"Congo"},{name:"Cook Islands"},{name:"Costa Rica"},{name:"Cote D Ivoire"},{name:"Croatia"},{name:"Cuba"},{name:"Curacao"},{name:"Cyprus"},{name:"Czech Republic"},{name:"Denmark"},{name:"Djibouti"},{name:"Dominica"},{name:"Dominican Republic"},{name:"Ecuador"},{name:"Egypt"},{name:"El Salvador"},{name:"Equatorial Guinea"},{name:"Eritrea"},{name:"Estonia"},{name:"Ethiopia"},{name:"Falkland Islands"},{name:"Faroe Islands"},{name:"Fiji"},{name:"Finland"},{name:"France"},{name:"French Polynesia"},{name:"French West Indies"},{name:"Gabon"},{name:"Gambia"},{name:"Georgia"},{name:"Germany"},{name:"Ghana"},{name:"Gibraltar"},{name:"Greece"},{name:"Greenland"},{name:"Grenada"},{name:"Guam"},{name:"Guatemala"},{name:"Guernsey"},{name:"Guinea"},{name:"Guinea Bissau"},{name:"Guyana"},{name:"Haiti"},{name:"Honduras"},{name:"Hong Kong"},{name:"Hungary"},{name:"Iceland"},{name:"India"},{name:"Indonesia"},{name:"Iran"},{name:"Iraq"},{name:"Ireland"},{name:"Isle of Man"},{name:"Israel"},{name:"Italy"},{name:"Jamaica"},{name:"Japan"},{name:"Jersey"},{name:"Jordan"},{name:"Kazakhstan"},{name:"Kenya"},{name:"Kiribati"},{name:"Kosovo"},{name:"Kuwait"},{name:"Kyrgyzstan"},{name:"Laos"},{name:"Latvia"},{name:"Lebanon"},{name:"Lesotho"},{name:"Liberia"},{name:"Libya"},{name:"Liechtenstein"},{name:"Lithuania"},{name:"Luxembourg"},{name:"Macau"},{name:"Macedonia"},{name:"Madagascar"},{name:"Malawi"},{name:"Malaysia"},{name:"Maldives"},{name:"Mali"},{name:"Malta"},{name:"Marshall Islands"},{name:"Mauritania"},{name:"Mauritius"},{name:"Mexico"},{name:"Micronesia"},{name:"Moldova"},{name:"Monaco"},{name:"Mongolia"},{name:"Montenegro"},{name:"Montserrat"},{name:"Morocco"},{name:"Mozambique"},{name:"Myanmar"},{name:"Namibia"},{name:"Nauro"},{name:"Nepal"},{name:"Netherlands"},{name:"Netherlands Antilles"},{name:"New Caledonia"},{name:"New Zealand"},{name:"Nicaragua"},{name:"Niger"},{name:"Nigeria"},{name:"North Korea"},{name:"Norway"},{name:"Oman"},{name:"Pakistan"},{name:"Palau"},{name:"Palestine"},{name:"Panama"},{name:"Papua New Guinea"},{name:"Paraguay"},{name:"Peru"},{name:"Philippines"},{name:"Poland"},{name:"Portugal"},{name:"Puerto Rico"},{name:"Qatar"},{name:"Reunion"},{name:"Romania"},{name:"Russia"},{name:"Rwanda"},{name:"Saint Pierre &amp; Miquelon"},{name:"Samoa"},{name:"San Marino"},{name:"Sao Tome and Principe"},{name:"Saudi Arabia"},{name:"Senegal"},{name:"Serbia"},{name:"Seychelles"},{name:"Sierra Leone"},{name:"Singapore"},{name:"Slovakia"},{name:"Slovenia"},{name:"Solomon Islands"},{name:"Somalia"},{name:"South Africa"},{name:"South Korea"},{name:"South Sudan"},{name:"Spain"},{name:"Sri Lanka"},{name:"St Kitts &amp; Nevis"},{name:"St Lucia"},{name:"St Vincent"},{name:"Sudan"},{name:"Suriname"},{name:"Swaziland"},{name:"Sweden"},{name:"Switzerland"},{name:"Syria"},{name:"Taiwan"},{name:"Tajikistan"},{name:"Tanzania"},{name:"Thailand"},{name:"Timor L'Este"},{name:"Togo"},{name:"Tonga"},{name:"Trinidad &amp; Tobago"},{name:"Tunisia"},{name:"Turkey"},{name:"Turkmenistan"},{name:"Turks &amp; Caicos"},{name:"Tuvalu"},{name:"Uganda"},{name:"Ukraine"},{name:"United Arab Emirates"},{name:"United Kingdom"},{name:"United States of America"},{name:"Uruguay"},{name:"Uzbekistan"},{name:"Vanuatu"},{name:"Vatican City"},{name:"Venezuela"},{name:"Vietnam"},{name:"Virgin Islands (US)"},{name:"Yemen"},{name:"Zambia"},{name:"Zimbabwe"}]},n=document.getElementById("first");a.createAutocomplete(n,2,2e3,e(),"Input country (min 2 letter)");var m=document.getElementById("second");a.createAutocomplete(m,3,1e3,e(),"Input country (min 3 letter)");
},{"./autocomplete":"bTUY","./styles.css/":"Tnu0"}]},{},["QCba"], null)
//# sourceMappingURL=/autocomlete/src.e09f1e6a.js.map