!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","AlloyEditor","react-dom"],t):"object"==typeof exports?exports.ezBtnImage=t(require("react"),require("AlloyEditor"),require("react-dom")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnImage=t(e.React,e.AlloyEditor,e.ReactDOM))}("undefined"!=typeof self?self:this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=44)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?y=d.concat(y):b=-1,y.length&&a())}function a(){if(!h){var e=o(u);h=!0;for(var t=y.length;t;){for(d=y,y=[];++b<t;)d&&d[b].run();b=-1,t=y.length}d=null,h=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var s,l,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,y=[],h=!1,b=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||h||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,i,u,a,c){if(r(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,i,u,a,c],l=0;f=new Error(t.replace(/%s/g,function(){return s[l++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(8)(o,!0)}else e.exports=n(11)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),o=r;if("production"!==t.env.NODE_ENV){var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},function(e,n){e.exports=t},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(2),i=n(6),u=n(9),a=n(3),c=n(10);e.exports=function(e,n){function f(e){var t=e&&(P&&e[P]||e[C]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function p(e){function r(r,f,s,p,d,y,h){if(p=p||S,y=y||s,h!==a)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=p+":"+s;!u[b]&&c<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),u[b]=!0,c++)}return null==f[s]?r?new l(null===f[s]?"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(f,s,p,d,y)}if("production"!==t.env.NODE_ENV)var u={},c=0;var f=r.bind(null,!1);return f.isRequired=r.bind(null,!0),f}function d(e){function t(t,n,r,o,i,u){var a=t[n];if(j(a)!==e)return new l("Invalid "+o+" `"+i+"` of type `"+E(a)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return p(t)}function y(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new l("Invalid "+o+" `"+i+"` of type `"+j(u)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var f=e(u,c,r,o,i+"["+c+"]",a);if(f instanceof Error)return f}return null}return p(t)}function h(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var u=e.name||S;return new l("Invalid "+o+" `"+i+"` of type `"+x(t[n])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return p(t)}function b(e){function n(t,n,r,o,i){for(var u=t[n],a=0;a<e.length;a++)if(s(u,e[a]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?p(n):("production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function m(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=j(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var f in u)if(u.hasOwnProperty(f)){var s=e(u,f,r,o,i+"."+f,a);if(s instanceof Error)return s}return null}return p(t)}function v(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new l("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<e.length;o++){var u=e[o];if("function"!=typeof u)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",T(u),o),r.thatReturnsNull}return p(n)}function g(e){function t(t,n,r,o,i){var u=t[n],c=j(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var s=e[f];if(s){var p=s(u,f,r,o,i+"."+f,a);if(p)return p}}return null}return p(t)}function w(e){function t(t,n,r,o,i){var c=t[n],f=j(c);if("object"!==f)return new l("Invalid "+o+" `"+i+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var s=u({},t[n],e);for(var p in s){var d=e[p];if(!d)return new l("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(c,p,r,o,i+"."+p,a);if(y)return y}return null}return p(t)}function O(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(O);if(null===t||e(t))return!0;var n=f(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!O(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!O(i[1]))return!1}return!0;default:return!1}}function _(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function j(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":_(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e;var t=j(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function T(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function x(e){return e.constructor&&e.constructor.name?e.constructor.name:S}var P="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",S="<<anonymous>>",k={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:function(){return p(r.thatReturnsNull)}(),arrayOf:y,element:function(){function t(t,n,r,o,i){var u=t[n];if(!e(u)){return new l("Invalid "+o+" `"+i+"` of type `"+j(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return p(t)}(),instanceOf:h,node:function(){function e(e,t,n,r,o){return O(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}(),objectOf:m,oneOf:b,oneOfType:v,shape:g,exact:w};return l.prototype=Error.prototype,k.checkPropTypes=c,k.PropTypes=k,k}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,c=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var s in n)i.call(n,s)&&(c[s]=n[s]);if(o){a=o(n);for(var l=0;l<a.length;l++)u.call(n,a[l])&&(c[a[l]]=n[a[l]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,c,f){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var l;try{o("function"==typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",r,s,typeof e[s]),l=e[s](n,s,c,r,null,u)}catch(e){l=e}if(i(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,s,typeof l),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var p=f?f():"";i(!1,"Failed %s type: %s%s",r,l.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(2),i=n(6),u=n(3),a={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(3);e.exports=function(){function e(e,t,n,r,u,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),c=(r(a),n(5)),f=(r(c),n(7)),s=r(f),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getStateClasses=s.default.ButtonStateClasses.getStateClasses,n.execCommand=s.default.ButtonCommand.execCommand.bind(n),n}return u(t,e),t}(a.Component);t.default=l},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=(r(c),n(5)),s=(r(f),n(12)),l=r(s),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"getWidget",value:function(){var e=this.props.editor.get("nativeEditor"),t=e.getSelection().getStartElement();return e.widgets.getByElement(t)}}]),t}(l.default);t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=r(c),s=n(13),l=r(s),p=n(5),d=(r(p),n(14)),y=r(d),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"chooseContent",value:function(){var e=this.props.udwIsSelectableMethod?this[this.props.udwIsSelectableMethod]:function(e,t){return t(!0)},t=document.querySelector("#react-udw"),n=document.querySelector('meta[name="CSRF-Token"]').content,r=document.querySelector('meta[name="SiteAccess"]').content;l.default.render(f.default.createElement(eZ.modules.UniversalDiscovery,{onConfirm:this[this.props.udwContentDiscoveredMethod].bind(this),onCancel:function(){return t.innerHTML=""},confirmLabel:"Select content",title:this.props.udwTitle,multiple:!1,startingLocationId:window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,restInfo:{token:n,siteaccess:r},canSelectContent:e}),t)}},{key:"setContentInfo",value:function(e){var t=this.getWidget();t.setHref("ezcontent://"+e),t.focus()}}]),t}(y.default);t.default=h},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=(r(c),n(5)),s=(r(f),n(15)),l=r(s),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"isImage",value:function(e,t){var n=new Request(e.item.ContentInfo.Content.ContentType._href,{method:"GET",headers:{Accept:"application/vnd.ez.api.ContentType+json"},credentials:"same-origin",mode:"cors"});fetch(n).then(function(e){return e.json()}).then(function(e){return t(!!e.ContentType.FieldDefinitions.FieldDefinition.find(function(e){return"ezimage"===e.fieldType}))})}}]),t}(l.default);t.default=p},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=r(c),s=n(5),l=(r(s),n(7)),p=r(l),d=n(18),y=r(d),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"isDisabled",value:function(){return!this.props.editor.get("nativeEditor").ezembed.canBeAdded()}},{key:"addImage",value:function(e){this.execCommand(),this.setContentInfo(e[0].ContentInfo.Content._id);var t=this.getWidget().setConfig("size","medium").setImageType().setWidgetContent("");t.loadImagePreviewFromCurrentVersion(e[0].ContentInfo.Content.CurrentVersion._href),t.setFocused(!0),document.querySelector("#react-udw").innerHTML=""}},{key:"render",value:function(){var e="ae-button ez-btn-ae ez-btn-ae--image "+this.getStateClasses(),t=this.isDisabled();return f.default.createElement("button",{className:e,disabled:t,onClick:this.chooseContent.bind(this),tabIndex:this.props.tabIndex},f.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},f.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#image"})),f.default.createElement("p",{className:"ez-btn-ae__label"},"Image"))}}],[{key:"key",get:function(){return"ezimage"}}]),t}(y.default);t.default=h,p.default.Buttons[h.key]=p.default.EzBtnImage=h,h.defaultProps={command:"ezembed",modifiesSelection:!0,udwTitle:"Select an image to embed",udwContentDiscoveredMethod:"addImage",udwIsSelectableMethod:"isImage",udwLoadContent:!0}}]).default});
//# sourceMappingURL=ezBtnImage.js.map