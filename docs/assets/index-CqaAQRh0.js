(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))H(L);new MutationObserver(L=>{for(const B of L)if(B.type==="childList")for(const de of B.addedNodes)de.tagName==="LINK"&&de.rel==="modulepreload"&&H(de)}).observe(document,{childList:!0,subtree:!0});function f(L){const B={};return L.integrity&&(B.integrity=L.integrity),L.referrerPolicy&&(B.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?B.credentials="include":L.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function H(L){if(L.ep)return;L.ep=!0;const B=f(L);fetch(L.href,B)}})();function Au(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var Ss={exports:{}},vt={},Es={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function Fu(){if(_c)return M;_c=1;var w=Symbol.for("react.element"),g=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),de=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Se=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ne=Symbol.iterator;function J(d){return d===null||typeof d!="object"?null:(d=ne&&d[ne]||d["@@iterator"],typeof d=="function"?d:null)}var Be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qe=Object.assign,X={};function V(d,v,P){this.props=d,this.context=v,this.refs=X,this.updater=P||Be}V.prototype.isReactComponent={},V.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},V.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function hn(){}hn.prototype=V.prototype;function on(d,v,P){this.props=d,this.context=v,this.refs=X,this.updater=P||Be}var Je=on.prototype=new hn;Je.constructor=on,qe(Je,V.prototype),Je.isPureReactComponent=!0;var we=Array.isArray,Xe=Object.prototype.hasOwnProperty,Ee={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function We(d,v,P){var O,U={},A=null,$=null;if(v!=null)for(O in v.ref!==void 0&&($=v.ref),v.key!==void 0&&(A=""+v.key),v)Xe.call(v,O)&&!Te.hasOwnProperty(O)&&(U[O]=v[O]);var q=arguments.length-2;if(q===1)U.children=P;else if(1<q){for(var Z=Array(q),De=0;De<q;De++)Z[De]=arguments[De+2];U.children=Z}if(d&&d.defaultProps)for(O in q=d.defaultProps,q)U[O]===void 0&&(U[O]=q[O]);return{$$typeof:w,type:d,key:A,ref:$,props:U,_owner:Ee.current}}function Cn(d,v){return{$$typeof:w,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function vn(d){return typeof d=="object"&&d!==null&&d.$$typeof===w}function Vn(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(P){return v[P]})}var cn=/\/+/g;function Oe(d,v){return typeof d=="object"&&d!==null&&d.key!=null?Vn(""+d.key):v.toString(36)}function Ze(d,v,P,O,U){var A=typeof d;(A==="undefined"||A==="boolean")&&(d=null);var $=!1;if(d===null)$=!0;else switch(A){case"string":case"number":$=!0;break;case"object":switch(d.$$typeof){case w:case g:$=!0}}if($)return $=d,U=U($),d=O===""?"."+Oe($,0):O,we(U)?(P="",d!=null&&(P=d.replace(cn,"$&/")+"/"),Ze(U,v,P,"",function(De){return De})):U!=null&&(vn(U)&&(U=Cn(U,P+(!U.key||$&&$.key===U.key?"":(""+U.key).replace(cn,"$&/")+"/")+d)),v.push(U)),1;if($=0,O=O===""?".":O+":",we(d))for(var q=0;q<d.length;q++){A=d[q];var Z=O+Oe(A,q);$+=Ze(A,v,P,Z,U)}else if(Z=J(d),typeof Z=="function")for(d=Z.call(d),q=0;!(A=d.next()).done;)A=A.value,Z=O+Oe(A,q++),$+=Ze(A,v,P,Z,U);else if(A==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return $}function dn(d,v,P){if(d==null)return d;var O=[],U=0;return Ze(d,O,"","",function(A){return v.call(P,A,U++)}),O}function Ie(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(P){(d._status===0||d._status===-1)&&(d._status=1,d._result=P)},function(P){(d._status===0||d._status===-1)&&(d._status=2,d._result=P)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var ie={current:null},k={transition:null},z={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:k,ReactCurrentOwner:Ee};function E(){throw Error("act(...) is not supported in production builds of React.")}return M.Children={map:dn,forEach:function(d,v,P){dn(d,function(){v.apply(this,arguments)},P)},count:function(d){var v=0;return dn(d,function(){v++}),v},toArray:function(d){return dn(d,function(v){return v})||[]},only:function(d){if(!vn(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},M.Component=V,M.Fragment=f,M.Profiler=L,M.PureComponent=on,M.StrictMode=H,M.Suspense=Q,M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,M.act=E,M.cloneElement=function(d,v,P){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var O=qe({},d.props),U=d.key,A=d.ref,$=d._owner;if(v!=null){if(v.ref!==void 0&&(A=v.ref,$=Ee.current),v.key!==void 0&&(U=""+v.key),d.type&&d.type.defaultProps)var q=d.type.defaultProps;for(Z in v)Xe.call(v,Z)&&!Te.hasOwnProperty(Z)&&(O[Z]=v[Z]===void 0&&q!==void 0?q[Z]:v[Z])}var Z=arguments.length-2;if(Z===1)O.children=P;else if(1<Z){q=Array(Z);for(var De=0;De<Z;De++)q[De]=arguments[De+2];O.children=q}return{$$typeof:w,type:d.type,key:U,ref:A,props:O,_owner:$}},M.createContext=function(d){return d={$$typeof:de,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:B,_context:d},d.Consumer=d},M.createElement=We,M.createFactory=function(d){var v=We.bind(null,d);return v.type=d,v},M.createRef=function(){return{current:null}},M.forwardRef=function(d){return{$$typeof:oe,render:d}},M.isValidElement=vn,M.lazy=function(d){return{$$typeof:ye,_payload:{_status:-1,_result:d},_init:Ie}},M.memo=function(d,v){return{$$typeof:Se,type:d,compare:v===void 0?null:v}},M.startTransition=function(d){var v=k.transition;k.transition={};try{d()}finally{k.transition=v}},M.unstable_act=E,M.useCallback=function(d,v){return ie.current.useCallback(d,v)},M.useContext=function(d){return ie.current.useContext(d)},M.useDebugValue=function(){},M.useDeferredValue=function(d){return ie.current.useDeferredValue(d)},M.useEffect=function(d,v){return ie.current.useEffect(d,v)},M.useId=function(){return ie.current.useId()},M.useImperativeHandle=function(d,v,P){return ie.current.useImperativeHandle(d,v,P)},M.useInsertionEffect=function(d,v){return ie.current.useInsertionEffect(d,v)},M.useLayoutEffect=function(d,v){return ie.current.useLayoutEffect(d,v)},M.useMemo=function(d,v){return ie.current.useMemo(d,v)},M.useReducer=function(d,v,P){return ie.current.useReducer(d,v,P)},M.useRef=function(d){return ie.current.useRef(d)},M.useState=function(d){return ie.current.useState(d)},M.useSyncExternalStore=function(d,v,P){return ie.current.useSyncExternalStore(d,v,P)},M.useTransition=function(){return ie.current.useTransition()},M.version="18.3.1",M}var zc;function Rs(){return zc||(zc=1,Es.exports=Fu()),Es.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc;function Hu(){if(Rc)return vt;Rc=1;var w=Rs(),g=Symbol.for("react.element"),f=Symbol.for("react.fragment"),H=Object.prototype.hasOwnProperty,L=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function de(oe,Q,Se){var ye,ne={},J=null,Be=null;Se!==void 0&&(J=""+Se),Q.key!==void 0&&(J=""+Q.key),Q.ref!==void 0&&(Be=Q.ref);for(ye in Q)H.call(Q,ye)&&!B.hasOwnProperty(ye)&&(ne[ye]=Q[ye]);if(oe&&oe.defaultProps)for(ye in Q=oe.defaultProps,Q)ne[ye]===void 0&&(ne[ye]=Q[ye]);return{$$typeof:g,type:oe,key:J,ref:Be,props:ne,_owner:L.current}}return vt.Fragment=f,vt.jsx=de,vt.jsxs=de,vt}var Lc;function Bu(){return Lc||(Lc=1,Ss.exports=Hu()),Ss.exports}var _s=Bu(),zs=Rs();const qu=Au(zs);var Ii={},Cs={exports:{}},Me={},Ns={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function Wu(){return Pc||(Pc=1,(function(w){function g(k,z){var E=k.length;k.push(z);e:for(;0<E;){var d=E-1>>>1,v=k[d];if(0<L(v,z))k[d]=z,k[E]=v,E=d;else break e}}function f(k){return k.length===0?null:k[0]}function H(k){if(k.length===0)return null;var z=k[0],E=k.pop();if(E!==z){k[0]=E;e:for(var d=0,v=k.length,P=v>>>1;d<P;){var O=2*(d+1)-1,U=k[O],A=O+1,$=k[A];if(0>L(U,E))A<v&&0>L($,U)?(k[d]=$,k[A]=E,d=A):(k[d]=U,k[O]=E,d=O);else if(A<v&&0>L($,E))k[d]=$,k[A]=E,d=A;else break e}}return z}function L(k,z){var E=k.sortIndex-z.sortIndex;return E!==0?E:k.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var B=performance;w.unstable_now=function(){return B.now()}}else{var de=Date,oe=de.now();w.unstable_now=function(){return de.now()-oe}}var Q=[],Se=[],ye=1,ne=null,J=3,Be=!1,qe=!1,X=!1,V=typeof setTimeout=="function"?setTimeout:null,hn=typeof clearTimeout=="function"?clearTimeout:null,on=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(k){for(var z=f(Se);z!==null;){if(z.callback===null)H(Se);else if(z.startTime<=k)H(Se),z.sortIndex=z.expirationTime,g(Q,z);else break;z=f(Se)}}function we(k){if(X=!1,Je(k),!qe)if(f(Q)!==null)qe=!0,Ie(Xe);else{var z=f(Se);z!==null&&ie(we,z.startTime-k)}}function Xe(k,z){qe=!1,X&&(X=!1,hn(We),We=-1),Be=!0;var E=J;try{for(Je(z),ne=f(Q);ne!==null&&(!(ne.expirationTime>z)||k&&!Vn());){var d=ne.callback;if(typeof d=="function"){ne.callback=null,J=ne.priorityLevel;var v=d(ne.expirationTime<=z);z=w.unstable_now(),typeof v=="function"?ne.callback=v:ne===f(Q)&&H(Q),Je(z)}else H(Q);ne=f(Q)}if(ne!==null)var P=!0;else{var O=f(Se);O!==null&&ie(we,O.startTime-z),P=!1}return P}finally{ne=null,J=E,Be=!1}}var Ee=!1,Te=null,We=-1,Cn=5,vn=-1;function Vn(){return!(w.unstable_now()-vn<Cn)}function cn(){if(Te!==null){var k=w.unstable_now();vn=k;var z=!0;try{z=Te(!0,k)}finally{z?Oe():(Ee=!1,Te=null)}}else Ee=!1}var Oe;if(typeof on=="function")Oe=function(){on(cn)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,dn=Ze.port2;Ze.port1.onmessage=cn,Oe=function(){dn.postMessage(null)}}else Oe=function(){V(cn,0)};function Ie(k){Te=k,Ee||(Ee=!0,Oe())}function ie(k,z){We=V(function(){k(w.unstable_now())},z)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(k){k.callback=null},w.unstable_continueExecution=function(){qe||Be||(qe=!0,Ie(Xe))},w.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Cn=0<k?Math.floor(1e3/k):5},w.unstable_getCurrentPriorityLevel=function(){return J},w.unstable_getFirstCallbackNode=function(){return f(Q)},w.unstable_next=function(k){switch(J){case 1:case 2:case 3:var z=3;break;default:z=J}var E=J;J=z;try{return k()}finally{J=E}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(k,z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var E=J;J=k;try{return z()}finally{J=E}},w.unstable_scheduleCallback=function(k,z,E){var d=w.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?d+E:d):E=d,k){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=E+v,k={id:ye++,callback:z,priorityLevel:k,startTime:E,expirationTime:v,sortIndex:-1},E>d?(k.sortIndex=E,g(Se,k),f(Q)===null&&k===f(Se)&&(X?(hn(We),We=-1):X=!0,ie(we,E-d))):(k.sortIndex=v,g(Q,k),qe||Be||(qe=!0,Ie(Xe))),k},w.unstable_shouldYield=Vn,w.unstable_wrapCallback=function(k){var z=J;return function(){var E=J;J=z;try{return k.apply(this,arguments)}finally{J=E}}}})(Ts)),Ts}var Mc;function Qu(){return Mc||(Mc=1,Ns.exports=Wu()),Ns.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function Vu(){if(Oc)return Me;Oc=1;var w=Rs(),g=Qu();function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H=new Set,L={};function B(e,n){de(e,n),de(e+"Capture",n)}function de(e,n){for(L[e]=n,e=0;e<n.length;e++)H.add(n[e])}var oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Q=Object.prototype.hasOwnProperty,Se=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ye={},ne={};function J(e){return Q.call(ne,e)?!0:Q.call(ye,e)?!1:Se.test(e)?ne[e]=!0:(ye[e]=!0,!1)}function Be(e,n,r,t){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qe(e,n,r,t){if(n===null||typeof n>"u"||Be(e,n,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function X(e,n,r,t,i,a,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=s}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];V[n]=new X(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var hn=/[\-:]([a-z])/g;function on(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(hn,on);V[n]=new X(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(hn,on);V[n]=new X(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(hn,on);V[n]=new X(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,n,r,t){var i=V.hasOwnProperty(n)?V[n]:null;(i!==null?i.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(qe(n,r,i,t)&&(r=null),t||i===null?J(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,t=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,t?e.setAttributeNS(t,n,r):e.setAttribute(n,r))))}var we=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xe=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),We=Symbol.for("react.strict_mode"),Cn=Symbol.for("react.profiler"),vn=Symbol.for("react.provider"),Vn=Symbol.for("react.context"),cn=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),dn=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),k=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);d=n&&n[1]||""}return`
`+d+e}var P=!1;function O(e,n){if(!e||P)return"";P=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(m){var t=m}Reflect.construct(e,[],n)}else{try{n.call()}catch(m){t=m}e.call(n.prototype)}else{try{throw Error()}catch(m){t=m}e()}}catch(m){if(m&&t&&typeof m.stack=="string"){for(var i=m.stack.split(`
`),a=t.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var o=`
`+i[s].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=s&&0<=l);break}}}finally{P=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?v(e):""}function U(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function A(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case Ee:return"Portal";case Cn:return"Profiler";case We:return"StrictMode";case Oe:return"Suspense";case Ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vn:return(e.displayName||"Context")+".Consumer";case vn:return(e._context.displayName||"Context")+".Provider";case cn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dn:return n=e.displayName||null,n!==null?n:A(e.type)||"Memo";case Ie:n=e._payload,e=e._init;try{return A(e(n))}catch{}}return null}function $(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return A(n);case 8:return n===We?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Z(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function De(e){var n=Z(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,a.call(this,s)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wt(e){e._valueTracker||(e._valueTracker=De(e))}function Ms(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),t="";return e&&(t=Z(e)?e.checked?"true":"false":e.value),e=t,e!==r?(n.setValue(e),!0):!1}function xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zi(e,n){var r=n.checked;return E({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Os(e,n){var r=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;r=q(n.value!=null?n.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ds(e,n){n=n.checked,n!=null&&Je(e,"checked",n,!1)}function Ri(e,n){Ds(e,n);var r=q(n.value),t=n.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Li(e,n.type,r):n.hasOwnProperty("defaultValue")&&Li(e,n.type,q(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Us(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Li(e,n,r){(n!=="number"||xt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Rr=Array.isArray;function sr(e,n,r,t){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&t&&(e[r].defaultSelected=!0)}else{for(r=""+q(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Pi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(f(91));return E({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function As(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(f(92));if(Rr(r)){if(1<r.length)throw Error(f(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:q(r)}}function Fs(e,n){var r=q(n.value),t=q(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function Hs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bt,qs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,t,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,t,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(bt=bt||document.createElement("div"),bt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=bt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qc=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){qc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Pr[n]=Pr[e]})});function Ws(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+n).trim():n+"px"}function Qs(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var t=r.indexOf("--")===0,i=Ws(r,n[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,i):e[r]=i}}var Wc=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,n){if(n){if(Wc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(f(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(f(61))}if(n.style!=null&&typeof n.style!="object")throw Error(f(62))}}function Di(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,lr=null,or=null;function Vs(e){if(e=rt(e)){if(typeof Fi!="function")throw Error(f(280));var n=e.stateNode;n&&(n=Wt(n),Fi(e.stateNode,e.type,n))}}function $s(e){lr?or?or.push(e):or=[e]:lr=e}function Ys(){if(lr){var e=lr,n=or;if(or=lr=null,Vs(e),n)for(e=0;e<n.length;e++)Vs(n[e])}}function Ks(e,n){return e(n)}function Gs(){}var Hi=!1;function Js(e,n,r){if(Hi)return e(n,r);Hi=!0;try{return Ks(e,n,r)}finally{Hi=!1,(lr!==null||or!==null)&&(Gs(),Ys())}}function Mr(e,n){var r=e.stateNode;if(r===null)return null;var t=Wt(r);if(t===null)return null;r=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(f(231,n,typeof r));return r}var Bi=!1;if(oe)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Bi=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Bi=!1}function Qc(e,n,r,t,i,a,s,l,o){var m=Array.prototype.slice.call(arguments,3);try{n.apply(r,m)}catch(y){this.onError(y)}}var Dr=!1,kt=null,jt=!1,qi=null,Vc={onError:function(e){Dr=!0,kt=e}};function $c(e,n,r,t,i,a,s,l,o){Dr=!1,kt=null,Qc.apply(Vc,arguments)}function Yc(e,n,r,t,i,a,s,l,o){if($c.apply(this,arguments),Dr){if(Dr){var m=kt;Dr=!1,kt=null}else throw Error(f(198));jt||(jt=!0,qi=m)}}function $n(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Xs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Zs(e){if($n(e)!==e)throw Error(f(188))}function Kc(e){var n=e.alternate;if(!n){if(n=$n(e),n===null)throw Error(f(188));return n!==e?null:e}for(var r=e,t=n;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(t=i.return,t!==null){r=t;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Zs(i),e;if(a===t)return Zs(i),n;a=a.sibling}throw Error(f(188))}if(r.return!==t.return)r=i,t=a;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,t=a;break}if(l===t){s=!0,t=i,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,t=i;break}if(l===t){s=!0,t=a,r=i;break}l=l.sibling}if(!s)throw Error(f(189))}}if(r.alternate!==t)throw Error(f(190))}if(r.tag!==3)throw Error(f(188));return r.stateNode.current===r?e:n}function el(e){return e=Kc(e),e!==null?nl(e):null}function nl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=nl(e);if(n!==null)return n;e=e.sibling}return null}var rl=g.unstable_scheduleCallback,tl=g.unstable_cancelCallback,Gc=g.unstable_shouldYield,Jc=g.unstable_requestPaint,se=g.unstable_now,Xc=g.unstable_getCurrentPriorityLevel,Wi=g.unstable_ImmediatePriority,il=g.unstable_UserBlockingPriority,St=g.unstable_NormalPriority,Zc=g.unstable_LowPriority,al=g.unstable_IdlePriority,Et=null,un=null;function ed(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Et,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:td,nd=Math.log,rd=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(nd(e)/rd|0)|0}var Ct=64,Nt=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tt(e,n){var r=e.pendingLanes;if(r===0)return 0;var t=0,i=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?t=Ur(l):(a&=s,a!==0&&(t=Ur(a)))}else s=r&~i,s!==0?t=Ur(s):a!==0&&(t=Ur(a));if(t===0)return 0;if(n!==0&&n!==t&&(n&i)===0&&(i=t&-t,a=n&-n,i>=a||i===16&&(a&4194240)!==0))return n;if((t&4)!==0&&(t|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)r=31-en(n),i=1<<r,t|=e[r],n&=~i;return t}function id(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(e,n){for(var r=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-en(a),l=1<<s,o=i[s];o===-1?((l&r)===0||(l&t)!==0)&&(i[s]=id(l,n)):o<=n&&(e.expiredLanes|=l),a&=~l}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sl(){var e=Ct;return Ct<<=1,(Ct&4194240)===0&&(Ct=64),e}function Vi(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ar(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-en(n),e[n]=r}function sd(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-en(r),a=1<<i;n[i]=0,t[i]=-1,e[i]=-1,r&=~a}}function $i(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var t=31-en(r),i=1<<t;i&n|e[t]&n&&(e[t]|=n),r&=~i}}var W=0;function ll(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ol,Yi,cl,dl,ul,Ki=!1,It=[],Nn=null,Tn=null,In=null,Fr=new Map,Hr=new Map,_n=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pl(e,n){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Fr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(n.pointerId)}}function Br(e,n,r,t,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:r,eventSystemFlags:t,nativeEvent:a,targetContainers:[i]},n!==null&&(n=rt(n),n!==null&&Yi(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function od(e,n,r,t,i){switch(n){case"focusin":return Nn=Br(Nn,e,n,r,t,i),!0;case"dragenter":return Tn=Br(Tn,e,n,r,t,i),!0;case"mouseover":return In=Br(In,e,n,r,t,i),!0;case"pointerover":var a=i.pointerId;return Fr.set(a,Br(Fr.get(a)||null,e,n,r,t,i)),!0;case"gotpointercapture":return a=i.pointerId,Hr.set(a,Br(Hr.get(a)||null,e,n,r,t,i)),!0}return!1}function ml(e){var n=Yn(e.target);if(n!==null){var r=$n(n);if(r!==null){if(n=r.tag,n===13){if(n=Xs(r),n!==null){e.blockedOn=n,ul(e.priority,function(){cl(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _t(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Ji(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);Ui=t,r.target.dispatchEvent(t),Ui=null}else return n=rt(r),n!==null&&Yi(n),e.blockedOn=r,!1;n.shift()}return!0}function fl(e,n,r){_t(e)&&r.delete(n)}function cd(){Ki=!1,Nn!==null&&_t(Nn)&&(Nn=null),Tn!==null&&_t(Tn)&&(Tn=null),In!==null&&_t(In)&&(In=null),Fr.forEach(fl),Hr.forEach(fl)}function qr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ki||(Ki=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,cd)))}function Wr(e){function n(i){return qr(i,e)}if(0<It.length){qr(It[0],e);for(var r=1;r<It.length;r++){var t=It[r];t.blockedOn===e&&(t.blockedOn=null)}}for(Nn!==null&&qr(Nn,e),Tn!==null&&qr(Tn,e),In!==null&&qr(In,e),Fr.forEach(n),Hr.forEach(n),r=0;r<_n.length;r++)t=_n[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<_n.length&&(r=_n[0],r.blockedOn===null);)ml(r),r.blockedOn===null&&_n.shift()}var cr=we.ReactCurrentBatchConfig,zt=!0;function dd(e,n,r,t){var i=W,a=cr.transition;cr.transition=null;try{W=1,Gi(e,n,r,t)}finally{W=i,cr.transition=a}}function ud(e,n,r,t){var i=W,a=cr.transition;cr.transition=null;try{W=4,Gi(e,n,r,t)}finally{W=i,cr.transition=a}}function Gi(e,n,r,t){if(zt){var i=Ji(e,n,r,t);if(i===null)fa(e,n,t,Rt,r),pl(e,t);else if(od(i,e,n,r,t))t.stopPropagation();else if(pl(e,t),n&4&&-1<ld.indexOf(e)){for(;i!==null;){var a=rt(i);if(a!==null&&ol(a),a=Ji(e,n,r,t),a===null&&fa(e,n,t,Rt,r),a===i)break;i=a}i!==null&&t.stopPropagation()}else fa(e,n,t,null,r)}}var Rt=null;function Ji(e,n,r,t){if(Rt=null,e=Ai(t),e=Yn(e),e!==null)if(n=$n(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Xs(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Rt=e,null}function gl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case Wi:return 1;case il:return 4;case St:case Zc:return 16;case al:return 536870912;default:return 16}default:return 16}}var zn=null,Xi=null,Lt=null;function hl(){if(Lt)return Lt;var e,n=Xi,r=n.length,t,i="value"in zn?zn.value:zn.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[a-t];t++);return Lt=i.slice(e,1<t?1-t:void 0)}function Pt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mt(){return!0}function vl(){return!1}function Ue(e){function n(r,t,i,a,s){this._reactName=r,this._targetInst=i,this.type=t,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Mt:vl,this.isPropagationStopped=vl,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mt)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mt)},persist:function(){},isPersistent:Mt}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Ue(dr),Qr=E({},dr,{view:0,detail:0}),pd=Ue(Qr),ea,na,Vr,Ot=E({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(ea=e.screenX-Vr.screenX,na=e.screenY-Vr.screenY):na=ea=0,Vr=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:na}}),yl=Ue(Ot),md=E({},Ot,{dataTransfer:0}),fd=Ue(md),gd=E({},Qr,{relatedTarget:0}),ra=Ue(gd),hd=E({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),vd=Ue(hd),yd=E({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wd=Ue(yd),xd=E({},dr,{data:0}),wl=Ue(xd),bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jd[e])?!!n[e]:!1}function ta(){return Sd}var Ed=E({},Qr,{key:function(e){if(e.key){var n=bd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?Pt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cd=Ue(Ed),Nd=E({},Ot,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xl=Ue(Nd),Td=E({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Id=Ue(Td),_d=E({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zd=Ue(_d),Rd=E({},Ot,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=Ue(Rd),Pd=[9,13,27,32],ia=oe&&"CompositionEvent"in window,$r=null;oe&&"documentMode"in document&&($r=document.documentMode);var Md=oe&&"TextEvent"in window&&!$r,bl=oe&&(!ia||$r&&8<$r&&11>=$r),kl=" ",jl=!1;function Sl(e,n){switch(e){case"keyup":return Pd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function El(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Od(e,n){switch(e){case"compositionend":return El(n);case"keypress":return n.which!==32?null:(jl=!0,kl);case"textInput":return e=n.data,e===kl&&jl?null:e;default:return null}}function Dd(e,n){if(ur)return e==="compositionend"||!ia&&Sl(e,n)?(e=hl(),Lt=Xi=zn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bl&&n.locale!=="ko"?null:n.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ud[e.type]:n==="textarea"}function Nl(e,n,r,t){$s(t),n=Ht(n,"onChange"),0<n.length&&(r=new Zi("onChange","change",null,r,t),e.push({event:r,listeners:n}))}var Yr=null,Kr=null;function Ad(e){Ql(e,0)}function Dt(e){var n=hr(e);if(Ms(n))return e}function Fd(e,n){if(e==="change")return n}var Tl=!1;if(oe){var aa;if(oe){var sa="oninput"in document;if(!sa){var Il=document.createElement("div");Il.setAttribute("oninput","return;"),sa=typeof Il.oninput=="function"}aa=sa}else aa=!1;Tl=aa&&(!document.documentMode||9<document.documentMode)}function _l(){Yr&&(Yr.detachEvent("onpropertychange",zl),Kr=Yr=null)}function zl(e){if(e.propertyName==="value"&&Dt(Kr)){var n=[];Nl(n,Kr,e,Ai(e)),Js(Ad,n)}}function Hd(e,n,r){e==="focusin"?(_l(),Yr=n,Kr=r,Yr.attachEvent("onpropertychange",zl)):e==="focusout"&&_l()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dt(Kr)}function qd(e,n){if(e==="click")return Dt(n)}function Wd(e,n){if(e==="input"||e==="change")return Dt(n)}function Qd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:Qd;function Gr(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var i=r[t];if(!Q.call(n,i)||!nn(e[i],n[i]))return!1}return!0}function Rl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ll(e,n){var r=Rl(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rl(r)}}function Pl(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pl(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ml(){for(var e=window,n=xt();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=xt(e.document)}return n}function la(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vd(e){var n=Ml(),r=e.focusedElem,t=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Pl(r.ownerDocument.documentElement,r)){if(t!==null&&la(r)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(t.start,i);t=t.end===void 0?a:Math.min(t.end,i),!e.extend&&a>t&&(i=t,t=a,a=i),i=Ll(r,a);var s=Ll(r,t);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),a>t?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $d=oe&&"documentMode"in document&&11>=document.documentMode,pr=null,oa=null,Jr=null,ca=!1;function Ol(e,n,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ca||pr==null||pr!==xt(t)||(t=pr,"selectionStart"in t&&la(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Jr&&Gr(Jr,t)||(Jr=t,t=Ht(oa,"onSelect"),0<t.length&&(n=new Zi("onSelect","select",null,n,r),e.push({event:n,listeners:t}),n.target=pr)))}function Ut(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var mr={animationend:Ut("Animation","AnimationEnd"),animationiteration:Ut("Animation","AnimationIteration"),animationstart:Ut("Animation","AnimationStart"),transitionend:Ut("Transition","TransitionEnd")},da={},Dl={};oe&&(Dl=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function At(e){if(da[e])return da[e];if(!mr[e])return e;var n=mr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Dl)return da[e]=n[r];return e}var Ul=At("animationend"),Al=At("animationiteration"),Fl=At("animationstart"),Hl=At("transitionend"),Bl=new Map,ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,n){Bl.set(e,n),B(n,[e])}for(var ua=0;ua<ql.length;ua++){var pa=ql[ua],Yd=pa.toLowerCase(),Kd=pa[0].toUpperCase()+pa.slice(1);Rn(Yd,"on"+Kd)}Rn(Ul,"onAnimationEnd"),Rn(Al,"onAnimationIteration"),Rn(Fl,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Hl,"onTransitionEnd"),de("onMouseEnter",["mouseout","mouseover"]),de("onMouseLeave",["mouseout","mouseover"]),de("onPointerEnter",["pointerout","pointerover"]),de("onPointerLeave",["pointerout","pointerover"]),B("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),B("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),B("onBeforeInput",["compositionend","keypress","textInput","paste"]),B("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Wl(e,n,r){var t=e.type||"unknown-event";e.currentTarget=r,Yc(t,n,void 0,e),e.currentTarget=null}function Ql(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],i=t.event;t=t.listeners;e:{var a=void 0;if(n)for(var s=t.length-1;0<=s;s--){var l=t[s],o=l.instance,m=l.currentTarget;if(l=l.listener,o!==a&&i.isPropagationStopped())break e;Wl(i,l,m),a=o}else for(s=0;s<t.length;s++){if(l=t[s],o=l.instance,m=l.currentTarget,l=l.listener,o!==a&&i.isPropagationStopped())break e;Wl(i,l,m),a=o}}}if(jt)throw e=qi,jt=!1,qi=null,e}function K(e,n){var r=n[xa];r===void 0&&(r=n[xa]=new Set);var t=e+"__bubble";r.has(t)||(Vl(n,e,2,!1),r.add(t))}function ma(e,n,r){var t=0;n&&(t|=4),Vl(r,e,t,n)}var Ft="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Ft]){e[Ft]=!0,H.forEach(function(r){r!=="selectionchange"&&(Gd.has(r)||ma(r,!1,e),ma(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ft]||(n[Ft]=!0,ma("selectionchange",!1,n))}}function Vl(e,n,r,t){switch(gl(n)){case 1:var i=dd;break;case 4:i=ud;break;default:i=Gi}r=i.bind(null,n,r,e),i=void 0,!Bi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function fa(e,n,r,t,i){var a=t;if((n&1)===0&&(n&2)===0&&t!==null)e:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var l=t.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=t.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Yn(l),s===null)return;if(o=s.tag,o===5||o===6){t=a=s;continue e}l=l.parentNode}}t=t.return}Js(function(){var m=a,y=Ai(r),x=[];e:{var h=Bl.get(e);if(h!==void 0){var j=Zi,C=e;switch(e){case"keypress":if(Pt(r)===0)break e;case"keydown":case"keyup":j=Cd;break;case"focusin":C="focus",j=ra;break;case"focusout":C="blur",j=ra;break;case"beforeblur":case"afterblur":j=ra;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=yl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Id;break;case Ul:case Al:case Fl:j=vd;break;case Hl:j=zd;break;case"scroll":j=pd;break;case"wheel":j=Ld;break;case"copy":case"cut":case"paste":j=wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=xl}var N=(n&4)!==0,le=!N&&e==="scroll",u=N?h!==null?h+"Capture":null:h;N=[];for(var c=m,p;c!==null;){p=c;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,u!==null&&(b=Mr(c,u),b!=null&&N.push(et(c,b,p)))),le)break;c=c.return}0<N.length&&(h=new j(h,C,null,r,y),x.push({event:h,listeners:N}))}}if((n&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",h&&r!==Ui&&(C=r.relatedTarget||r.fromElement)&&(Yn(C)||C[yn]))break e;if((j||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,j?(C=r.relatedTarget||r.toElement,j=m,C=C?Yn(C):null,C!==null&&(le=$n(C),C!==le||C.tag!==5&&C.tag!==6)&&(C=null)):(j=null,C=m),j!==C)){if(N=yl,b="onMouseLeave",u="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=xl,b="onPointerLeave",u="onPointerEnter",c="pointer"),le=j==null?h:hr(j),p=C==null?h:hr(C),h=new N(b,c+"leave",j,r,y),h.target=le,h.relatedTarget=p,b=null,Yn(y)===m&&(N=new N(u,c+"enter",C,r,y),N.target=p,N.relatedTarget=le,b=N),le=b,j&&C)n:{for(N=j,u=C,c=0,p=N;p;p=fr(p))c++;for(p=0,b=u;b;b=fr(b))p++;for(;0<c-p;)N=fr(N),c--;for(;0<p-c;)u=fr(u),p--;for(;c--;){if(N===u||u!==null&&N===u.alternate)break n;N=fr(N),u=fr(u)}N=null}else N=null;j!==null&&$l(x,h,j,N,!1),C!==null&&le!==null&&$l(x,le,C,N,!0)}}e:{if(h=m?hr(m):window,j=h.nodeName&&h.nodeName.toLowerCase(),j==="select"||j==="input"&&h.type==="file")var T=Fd;else if(Cl(h))if(Tl)T=Wd;else{T=Bd;var I=Hd}else(j=h.nodeName)&&j.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=qd);if(T&&(T=T(e,m))){Nl(x,T,r,y);break e}I&&I(e,h,m),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Li(h,"number",h.value)}switch(I=m?hr(m):window,e){case"focusin":(Cl(I)||I.contentEditable==="true")&&(pr=I,oa=m,Jr=null);break;case"focusout":Jr=oa=pr=null;break;case"mousedown":ca=!0;break;case"contextmenu":case"mouseup":case"dragend":ca=!1,Ol(x,r,y);break;case"selectionchange":if($d)break;case"keydown":case"keyup":Ol(x,r,y)}var _;if(ia)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ur?Sl(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(bl&&r.locale!=="ko"&&(ur||R!=="onCompositionStart"?R==="onCompositionEnd"&&ur&&(_=hl()):(zn=y,Xi="value"in zn?zn.value:zn.textContent,ur=!0)),I=Ht(m,R),0<I.length&&(R=new wl(R,e,null,r,y),x.push({event:R,listeners:I}),_?R.data=_:(_=El(r),_!==null&&(R.data=_)))),(_=Md?Od(e,r):Dd(e,r))&&(m=Ht(m,"onBeforeInput"),0<m.length&&(y=new wl("onBeforeInput","beforeinput",null,r,y),x.push({event:y,listeners:m}),y.data=_))}Ql(x,n)})}function et(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ht(e,n){for(var r=n+"Capture",t=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Mr(e,r),a!=null&&t.unshift(et(e,a,i)),a=Mr(e,n),a!=null&&t.push(et(e,a,i))),e=e.return}return t}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $l(e,n,r,t,i){for(var a=n._reactName,s=[];r!==null&&r!==t;){var l=r,o=l.alternate,m=l.stateNode;if(o!==null&&o===t)break;l.tag===5&&m!==null&&(l=m,i?(o=Mr(r,a),o!=null&&s.unshift(et(r,o,l))):i||(o=Mr(r,a),o!=null&&s.push(et(r,o,l)))),r=r.return}s.length!==0&&e.push({event:n,listeners:s})}var Jd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function Yl(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(Xd,"")}function Bt(e,n,r){if(n=Yl(n),Yl(e)!==n&&r)throw Error(f(425))}function qt(){}var ga=null,ha=null;function va(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,Zd=typeof clearTimeout=="function"?clearTimeout:void 0,Kl=typeof Promise=="function"?Promise:void 0,eu=typeof queueMicrotask=="function"?queueMicrotask:typeof Kl<"u"?function(e){return Kl.resolve(null).then(e).catch(nu)}:ya;function nu(e){setTimeout(function(){throw e})}function wa(e,n){var r=n,t=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(t===0){e.removeChild(i),Wr(n);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=i}while(r);Wr(n)}function Ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),pn="__reactFiber$"+gr,nt="__reactProps$"+gr,yn="__reactContainer$"+gr,xa="__reactEvents$"+gr,ru="__reactListeners$"+gr,tu="__reactHandles$"+gr;function Yn(e){var n=e[pn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[yn]||r[pn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Gl(e);e!==null;){if(r=e[pn])return r;e=Gl(e)}return n}e=r,r=e.parentNode}return null}function rt(e){return e=e[pn]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function Wt(e){return e[nt]||null}var ba=[],vr=-1;function Pn(e){return{current:e}}function G(e){0>vr||(e.current=ba[vr],ba[vr]=null,vr--)}function Y(e,n){vr++,ba[vr]=e.current,e.current=n}var Mn={},xe=Pn(Mn),_e=Pn(!1),Kn=Mn;function yr(e,n){var r=e.type.contextTypes;if(!r)return Mn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=n[a];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function Qt(){G(_e),G(xe)}function Jl(e,n,r){if(xe.current!==Mn)throw Error(f(168));Y(xe,n),Y(_e,r)}function Xl(e,n,r){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var i in t)if(!(i in n))throw Error(f(108,$(e)||"Unknown",i));return E({},r,t)}function Vt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,Kn=xe.current,Y(xe,e),Y(_e,_e.current),!0}function Zl(e,n,r){var t=e.stateNode;if(!t)throw Error(f(169));r?(e=Xl(e,n,Kn),t.__reactInternalMemoizedMergedChildContext=e,G(_e),G(xe),Y(xe,e)):G(_e),Y(_e,r)}var wn=null,$t=!1,ka=!1;function eo(e){wn===null?wn=[e]:wn.push(e)}function iu(e){$t=!0,eo(e)}function On(){if(!ka&&wn!==null){ka=!0;var e=0,n=W;try{var r=wn;for(W=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}wn=null,$t=!1}catch(i){throw wn!==null&&(wn=wn.slice(e+1)),rl(Wi,On),i}finally{W=n,ka=!1}}return null}var wr=[],xr=0,Yt=null,Kt=0,Qe=[],Ve=0,Gn=null,xn=1,bn="";function Jn(e,n){wr[xr++]=Kt,wr[xr++]=Yt,Yt=e,Kt=n}function no(e,n,r){Qe[Ve++]=xn,Qe[Ve++]=bn,Qe[Ve++]=Gn,Gn=e;var t=xn;e=bn;var i=32-en(t)-1;t&=~(1<<i),r+=1;var a=32-en(n)+i;if(30<a){var s=i-i%5;a=(t&(1<<s)-1).toString(32),t>>=s,i-=s,xn=1<<32-en(n)+i|r<<i|t,bn=a+e}else xn=1<<a|r<<i|t,bn=e}function ja(e){e.return!==null&&(Jn(e,1),no(e,1,0))}function Sa(e){for(;e===Yt;)Yt=wr[--xr],wr[xr]=null,Kt=wr[--xr],wr[xr]=null;for(;e===Gn;)Gn=Qe[--Ve],Qe[Ve]=null,bn=Qe[--Ve],Qe[Ve]=null,xn=Qe[--Ve],Qe[Ve]=null}var Ae=null,Fe=null,ee=!1,rn=null;function ro(e,n){var r=Ge(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function to(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ae=e,Fe=Ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ae=e,Fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Gn!==null?{id:xn,overflow:bn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Ge(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Ae=e,Fe=null,!0):!1;default:return!1}}function Ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ca(e){if(ee){var n=Fe;if(n){var r=n;if(!to(e,n)){if(Ea(e))throw Error(f(418));n=Ln(r.nextSibling);var t=Ae;n&&to(e,n)?ro(t,r):(e.flags=e.flags&-4097|2,ee=!1,Ae=e)}}else{if(Ea(e))throw Error(f(418));e.flags=e.flags&-4097|2,ee=!1,Ae=e}}}function io(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Gt(e){if(e!==Ae)return!1;if(!ee)return io(e),ee=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!va(e.type,e.memoizedProps)),n&&(n=Fe)){if(Ea(e))throw ao(),Error(f(418));for(;n;)ro(e,n),n=Ln(n.nextSibling)}if(io(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){Fe=Ln(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}Fe=null}}else Fe=Ae?Ln(e.stateNode.nextSibling):null;return!0}function ao(){for(var e=Fe;e;)e=Ln(e.nextSibling)}function br(){Fe=Ae=null,ee=!1}function Na(e){rn===null?rn=[e]:rn.push(e)}var au=we.ReactCurrentBatchConfig;function tt(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(f(309));var t=r.stateNode}if(!t)throw Error(f(147,e));var i=t,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},n._stringRef=a,n)}if(typeof e!="string")throw Error(f(284));if(!r._owner)throw Error(f(290,e))}return e}function Jt(e,n){throw e=Object.prototype.toString.call(n),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function so(e){var n=e._init;return n(e._payload)}function lo(e){function n(u,c){if(e){var p=u.deletions;p===null?(u.deletions=[c],u.flags|=16):p.push(c)}}function r(u,c){if(!e)return null;for(;c!==null;)n(u,c),c=c.sibling;return null}function t(u,c){for(u=new Map;c!==null;)c.key!==null?u.set(c.key,c):u.set(c.index,c),c=c.sibling;return u}function i(u,c){return u=Wn(u,c),u.index=0,u.sibling=null,u}function a(u,c,p){return u.index=p,e?(p=u.alternate,p!==null?(p=p.index,p<c?(u.flags|=2,c):p):(u.flags|=2,c)):(u.flags|=1048576,c)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,c,p,b){return c===null||c.tag!==6?(c=ys(p,u.mode,b),c.return=u,c):(c=i(c,p),c.return=u,c)}function o(u,c,p,b){var T=p.type;return T===Te?y(u,c,p.props.children,b,p.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ie&&so(T)===c.type)?(b=i(c,p.props),b.ref=tt(u,c,p),b.return=u,b):(b=bi(p.type,p.key,p.props,null,u.mode,b),b.ref=tt(u,c,p),b.return=u,b)}function m(u,c,p,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ws(p,u.mode,b),c.return=u,c):(c=i(c,p.children||[]),c.return=u,c)}function y(u,c,p,b,T){return c===null||c.tag!==7?(c=ar(p,u.mode,b,T),c.return=u,c):(c=i(c,p),c.return=u,c)}function x(u,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ys(""+c,u.mode,p),c.return=u,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xe:return p=bi(c.type,c.key,c.props,null,u.mode,p),p.ref=tt(u,null,c),p.return=u,p;case Ee:return c=ws(c,u.mode,p),c.return=u,c;case Ie:var b=c._init;return x(u,b(c._payload),p)}if(Rr(c)||z(c))return c=ar(c,u.mode,p,null),c.return=u,c;Jt(u,c)}return null}function h(u,c,p,b){var T=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return T!==null?null:l(u,c,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xe:return p.key===T?o(u,c,p,b):null;case Ee:return p.key===T?m(u,c,p,b):null;case Ie:return T=p._init,h(u,c,T(p._payload),b)}if(Rr(p)||z(p))return T!==null?null:y(u,c,p,b,null);Jt(u,p)}return null}function j(u,c,p,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return u=u.get(p)||null,l(c,u,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Xe:return u=u.get(b.key===null?p:b.key)||null,o(c,u,b,T);case Ee:return u=u.get(b.key===null?p:b.key)||null,m(c,u,b,T);case Ie:var I=b._init;return j(u,c,p,I(b._payload),T)}if(Rr(b)||z(b))return u=u.get(p)||null,y(c,u,b,T,null);Jt(c,b)}return null}function C(u,c,p,b){for(var T=null,I=null,_=c,R=c=0,ge=null;_!==null&&R<p.length;R++){_.index>R?(ge=_,_=null):ge=_.sibling;var F=h(u,_,p[R],b);if(F===null){_===null&&(_=ge);break}e&&_&&F.alternate===null&&n(u,_),c=a(F,c,R),I===null?T=F:I.sibling=F,I=F,_=ge}if(R===p.length)return r(u,_),ee&&Jn(u,R),T;if(_===null){for(;R<p.length;R++)_=x(u,p[R],b),_!==null&&(c=a(_,c,R),I===null?T=_:I.sibling=_,I=_);return ee&&Jn(u,R),T}for(_=t(u,_);R<p.length;R++)ge=j(_,u,R,p[R],b),ge!==null&&(e&&ge.alternate!==null&&_.delete(ge.key===null?R:ge.key),c=a(ge,c,R),I===null?T=ge:I.sibling=ge,I=ge);return e&&_.forEach(function(Qn){return n(u,Qn)}),ee&&Jn(u,R),T}function N(u,c,p,b){var T=z(p);if(typeof T!="function")throw Error(f(150));if(p=T.call(p),p==null)throw Error(f(151));for(var I=T=null,_=c,R=c=0,ge=null,F=p.next();_!==null&&!F.done;R++,F=p.next()){_.index>R?(ge=_,_=null):ge=_.sibling;var Qn=h(u,_,F.value,b);if(Qn===null){_===null&&(_=ge);break}e&&_&&Qn.alternate===null&&n(u,_),c=a(Qn,c,R),I===null?T=Qn:I.sibling=Qn,I=Qn,_=ge}if(F.done)return r(u,_),ee&&Jn(u,R),T;if(_===null){for(;!F.done;R++,F=p.next())F=x(u,F.value,b),F!==null&&(c=a(F,c,R),I===null?T=F:I.sibling=F,I=F);return ee&&Jn(u,R),T}for(_=t(u,_);!F.done;R++,F=p.next())F=j(_,u,R,F.value,b),F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?R:F.key),c=a(F,c,R),I===null?T=F:I.sibling=F,I=F);return e&&_.forEach(function(Uu){return n(u,Uu)}),ee&&Jn(u,R),T}function le(u,c,p,b){if(typeof p=="object"&&p!==null&&p.type===Te&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Xe:e:{for(var T=p.key,I=c;I!==null;){if(I.key===T){if(T=p.type,T===Te){if(I.tag===7){r(u,I.sibling),c=i(I,p.props.children),c.return=u,u=c;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ie&&so(T)===I.type){r(u,I.sibling),c=i(I,p.props),c.ref=tt(u,I,p),c.return=u,u=c;break e}r(u,I);break}else n(u,I);I=I.sibling}p.type===Te?(c=ar(p.props.children,u.mode,b,p.key),c.return=u,u=c):(b=bi(p.type,p.key,p.props,null,u.mode,b),b.ref=tt(u,c,p),b.return=u,u=b)}return s(u);case Ee:e:{for(I=p.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){r(u,c.sibling),c=i(c,p.children||[]),c.return=u,u=c;break e}else{r(u,c);break}else n(u,c);c=c.sibling}c=ws(p,u.mode,b),c.return=u,u=c}return s(u);case Ie:return I=p._init,le(u,c,I(p._payload),b)}if(Rr(p))return C(u,c,p,b);if(z(p))return N(u,c,p,b);Jt(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(r(u,c.sibling),c=i(c,p),c.return=u,u=c):(r(u,c),c=ys(p,u.mode,b),c.return=u,u=c),s(u)):r(u,c)}return le}var kr=lo(!0),oo=lo(!1),Xt=Pn(null),Zt=null,jr=null,Ta=null;function Ia(){Ta=jr=Zt=null}function _a(e){var n=Xt.current;G(Xt),e._currentValue=n}function za(e,n,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===r)break;e=e.return}}function Sr(e,n){Zt=e,Ta=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Re=!0),e.firstContext=null)}function $e(e){var n=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:n,next:null},jr===null){if(Zt===null)throw Error(f(308));jr=e,Zt.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return n}var Xn=null;function Ra(e){Xn===null?Xn=[e]:Xn.push(e)}function co(e,n,r,t){var i=n.interleaved;return i===null?(r.next=r,Ra(n)):(r.next=i.next,i.next=r),n.interleaved=r,kn(e,t)}function kn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dn=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(D&2)!==0){var i=t.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n,kn(e,r)}return i=t.interleaved,i===null?(n.next=n,Ra(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function ei(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,$i(e,r)}}function po(e,n){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=n:a=a.next=n}else i=a=n;r={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function ni(e,n,r,t){var i=e.updateQueue;Dn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var o=l,m=o.next;o.next=null,s===null?a=m:s.next=m,s=o;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==s&&(l===null?y.firstBaseUpdate=m:l.next=m,y.lastBaseUpdate=o))}if(a!==null){var x=i.baseState;s=0,y=m=o=null,l=a;do{var h=l.lane,j=l.eventTime;if((t&h)===h){y!==null&&(y=y.next={eventTime:j,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=e,N=l;switch(h=n,j=r,N.tag){case 1:if(C=N.payload,typeof C=="function"){x=C.call(j,x,h);break e}x=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,h=typeof C=="function"?C.call(j,x,h):C,h==null)break e;x=E({},x,h);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else j={eventTime:j,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(m=y=j,o=x):y=y.next=j,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(o=x),i.baseState=o,i.firstBaseUpdate=m,i.lastBaseUpdate=y,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else a===null&&(i.shared.lanes=0);nr|=s,e.lanes=s,e.memoizedState=x}}function mo(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],i=t.callback;if(i!==null){if(t.callback=null,t=r,typeof i!="function")throw Error(f(191,i));i.call(t)}}}var it={},mn=Pn(it),at=Pn(it),st=Pn(it);function Zn(e){if(e===it)throw Error(f(174));return e}function Pa(e,n){switch(Y(st,n),Y(at,e),Y(mn,it),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Mi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Mi(n,e)}G(mn),Y(mn,n)}function Er(){G(mn),G(at),G(st)}function fo(e){Zn(st.current);var n=Zn(mn.current),r=Mi(n,e.type);n!==r&&(Y(at,e),Y(mn,r))}function Ma(e){at.current===e&&(G(mn),G(at))}var re=Pn(0);function ri(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=[];function Da(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var ti=we.ReactCurrentDispatcher,Ua=we.ReactCurrentBatchConfig,er=0,te=null,ue=null,me=null,ii=!1,lt=!1,ot=0,su=0;function be(){throw Error(f(321))}function Aa(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!nn(e[r],n[r]))return!1;return!0}function Fa(e,n,r,t,i,a){if(er=a,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ti.current=e===null||e.memoizedState===null?du:uu,e=r(t,i),lt){a=0;do{if(lt=!1,ot=0,25<=a)throw Error(f(301));a+=1,me=ue=null,n.updateQueue=null,ti.current=pu,e=r(t,i)}while(lt)}if(ti.current=li,n=ue!==null&&ue.next!==null,er=0,me=ue=te=null,ii=!1,n)throw Error(f(300));return e}function Ha(){var e=ot!==0;return ot=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?te.memoizedState=me=e:me=me.next=e,me}function Ye(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var n=me===null?te.memoizedState:me.next;if(n!==null)me=n,ue=e;else{if(e===null)throw Error(f(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?te.memoizedState=me=e:me=me.next=e}return me}function ct(e,n){return typeof n=="function"?n(e):n}function Ba(e){var n=Ye(),r=n.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=e;var t=ue,i=t.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,t=t.baseState;var l=s=null,o=null,m=a;do{var y=m.lane;if((er&y)===y)o!==null&&(o=o.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),t=m.hasEagerState?m.eagerState:e(t,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};o===null?(l=o=x,s=t):o=o.next=x,te.lanes|=y,nr|=y}m=m.next}while(m!==null&&m!==a);o===null?s=t:o.next=l,nn(t,n.memoizedState)||(Re=!0),n.memoizedState=t,n.baseState=s,n.baseQueue=o,r.lastRenderedState=t}if(e=r.interleaved,e!==null){i=e;do a=i.lane,te.lanes|=a,nr|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function qa(e){var n=Ye(),r=n.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=e;var t=r.dispatch,i=r.pending,a=n.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);nn(a,n.memoizedState)||(Re=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),r.lastRenderedState=a}return[a,t]}function go(){}function ho(e,n){var r=te,t=Ye(),i=n(),a=!nn(t.memoizedState,i);if(a&&(t.memoizedState=i,Re=!0),t=t.queue,Wa(wo.bind(null,r,t,e),[e]),t.getSnapshot!==n||a||me!==null&&me.memoizedState.tag&1){if(r.flags|=2048,dt(9,yo.bind(null,r,t,i,n),void 0,null),fe===null)throw Error(f(349));(er&30)!==0||vo(r,n,i)}return i}function vo(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function yo(e,n,r,t){n.value=r,n.getSnapshot=t,xo(n)&&bo(e)}function wo(e,n,r){return r(function(){xo(n)&&bo(e)})}function xo(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!nn(e,r)}catch{return!0}}function bo(e){var n=kn(e,1);n!==null&&ln(n,e,1,-1)}function ko(e){var n=fn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ct,lastRenderedState:e},n.queue=e,e=e.dispatch=cu.bind(null,te,e),[n.memoizedState,e]}function dt(e,n,r,t){return e={tag:e,create:n,destroy:r,deps:t,next:null},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,n.lastEffect=e)),e}function jo(){return Ye().memoizedState}function ai(e,n,r,t){var i=fn();te.flags|=e,i.memoizedState=dt(1|n,r,void 0,t===void 0?null:t)}function si(e,n,r,t){var i=Ye();t=t===void 0?null:t;var a=void 0;if(ue!==null){var s=ue.memoizedState;if(a=s.destroy,t!==null&&Aa(t,s.deps)){i.memoizedState=dt(n,r,a,t);return}}te.flags|=e,i.memoizedState=dt(1|n,r,a,t)}function So(e,n){return ai(8390656,8,e,n)}function Wa(e,n){return si(2048,8,e,n)}function Eo(e,n){return si(4,2,e,n)}function Co(e,n){return si(4,4,e,n)}function No(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function To(e,n,r){return r=r!=null?r.concat([e]):null,si(4,4,No.bind(null,n,e),r)}function Qa(){}function Io(e,n){var r=Ye();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&Aa(n,t[1])?t[0]:(r.memoizedState=[e,n],e)}function _o(e,n){var r=Ye();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&Aa(n,t[1])?t[0]:(e=e(),r.memoizedState=[e,n],e)}function zo(e,n,r){return(er&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=r):(nn(r,n)||(r=sl(),te.lanes|=r,nr|=r,e.baseState=!0),n)}function lu(e,n){var r=W;W=r!==0&&4>r?r:4,e(!0);var t=Ua.transition;Ua.transition={};try{e(!1),n()}finally{W=r,Ua.transition=t}}function Ro(){return Ye().memoizedState}function ou(e,n,r){var t=Bn(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},Lo(e))Po(n,r);else if(r=co(e,n,r,t),r!==null){var i=Ne();ln(r,e,t,i),Mo(r,n,t)}}function cu(e,n,r){var t=Bn(e),i={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lo(e))Po(n,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var s=n.lastRenderedState,l=a(s,r);if(i.hasEagerState=!0,i.eagerState=l,nn(l,s)){var o=n.interleaved;o===null?(i.next=i,Ra(n)):(i.next=o.next,o.next=i),n.interleaved=i;return}}catch{}finally{}r=co(e,n,i,t),r!==null&&(i=Ne(),ln(r,e,t,i),Mo(r,n,t))}}function Lo(e){var n=e.alternate;return e===te||n!==null&&n===te}function Po(e,n){lt=ii=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Mo(e,n,r){if((r&4194240)!==0){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,$i(e,r)}}var li={readContext:$e,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},du={readContext:$e,useCallback:function(e,n){return fn().memoizedState=[e,n===void 0?null:n],e},useContext:$e,useEffect:So,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,ai(4194308,4,No.bind(null,n,e),r)},useLayoutEffect:function(e,n){return ai(4194308,4,e,n)},useInsertionEffect:function(e,n){return ai(4,2,e,n)},useMemo:function(e,n){var r=fn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var t=fn();return n=r!==void 0?r(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=ou.bind(null,te,e),[t.memoizedState,e]},useRef:function(e){var n=fn();return e={current:e},n.memoizedState=e},useState:ko,useDebugValue:Qa,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=ko(!1),n=e[0];return e=lu.bind(null,e[1]),fn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var t=te,i=fn();if(ee){if(r===void 0)throw Error(f(407));r=r()}else{if(r=n(),fe===null)throw Error(f(349));(er&30)!==0||vo(t,n,r)}i.memoizedState=r;var a={value:r,getSnapshot:n};return i.queue=a,So(wo.bind(null,t,a,e),[e]),t.flags|=2048,dt(9,yo.bind(null,t,a,r,n),void 0,null),r},useId:function(){var e=fn(),n=fe.identifierPrefix;if(ee){var r=bn,t=xn;r=(t&~(1<<32-en(t)-1)).toString(32)+r,n=":"+n+"R"+r,r=ot++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=su++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},uu={readContext:$e,useCallback:Io,useContext:$e,useEffect:Wa,useImperativeHandle:To,useInsertionEffect:Eo,useLayoutEffect:Co,useMemo:_o,useReducer:Ba,useRef:jo,useState:function(){return Ba(ct)},useDebugValue:Qa,useDeferredValue:function(e){var n=Ye();return zo(n,ue.memoizedState,e)},useTransition:function(){var e=Ba(ct)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:go,useSyncExternalStore:ho,useId:Ro,unstable_isNewReconciler:!1},pu={readContext:$e,useCallback:Io,useContext:$e,useEffect:Wa,useImperativeHandle:To,useInsertionEffect:Eo,useLayoutEffect:Co,useMemo:_o,useReducer:qa,useRef:jo,useState:function(){return qa(ct)},useDebugValue:Qa,useDeferredValue:function(e){var n=Ye();return ue===null?n.memoizedState=e:zo(n,ue.memoizedState,e)},useTransition:function(){var e=qa(ct)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:go,useSyncExternalStore:ho,useId:Ro,unstable_isNewReconciler:!1};function tn(e,n){if(e&&e.defaultProps){n=E({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function Va(e,n,r,t){n=e.memoizedState,r=r(t,n),r=r==null?n:E({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var oi={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var t=Ne(),i=Bn(e),a=jn(t,i);a.payload=n,r!=null&&(a.callback=r),n=Un(e,a,i),n!==null&&(ln(n,e,i,t),ei(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var t=Ne(),i=Bn(e),a=jn(t,i);a.tag=1,a.payload=n,r!=null&&(a.callback=r),n=Un(e,a,i),n!==null&&(ln(n,e,i,t),ei(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Ne(),t=Bn(e),i=jn(r,t);i.tag=2,n!=null&&(i.callback=n),n=Un(e,i,t),n!==null&&(ln(n,e,t,r),ei(n,e,t))}};function Oo(e,n,r,t,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,a,s):n.prototype&&n.prototype.isPureReactComponent?!Gr(r,t)||!Gr(i,a):!0}function Do(e,n,r){var t=!1,i=Mn,a=n.contextType;return typeof a=="object"&&a!==null?a=$e(a):(i=ze(n)?Kn:xe.current,t=n.contextTypes,a=(t=t!=null)?yr(e,i):Mn),n=new n(r,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=oi,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),n}function Uo(e,n,r,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,t),n.state!==e&&oi.enqueueReplaceState(n,n.state,null)}function $a(e,n,r,t){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},La(e);var a=n.contextType;typeof a=="object"&&a!==null?i.context=$e(a):(a=ze(n)?Kn:xe.current,i.context=yr(e,a)),i.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Va(e,n,a,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&oi.enqueueReplaceState(i,i.state,null),ni(e,r,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,n){try{var r="",t=n;do r+=U(t),t=t.return;while(t);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:i,digest:null}}function Ya(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Ka(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var mu=typeof WeakMap=="function"?WeakMap:Map;function Ao(e,n,r){r=jn(-1,r),r.tag=3,r.payload={element:null};var t=n.value;return r.callback=function(){gi||(gi=!0,ds=t),Ka(e,n)},r}function Fo(e,n,r){r=jn(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=n.value;r.payload=function(){return t(i)},r.callback=function(){Ka(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ka(e,n),typeof t!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),r}function Ho(e,n,r){var t=e.pingCache;if(t===null){t=e.pingCache=new mu;var i=new Set;t.set(n,i)}else i=t.get(n),i===void 0&&(i=new Set,t.set(n,i));i.has(r)||(i.add(r),e=Nu.bind(null,e,n,r),n.then(e,e))}function Bo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qo(e,n,r,t,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=jn(-1,1),n.tag=2,Un(r,n,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var fu=we.ReactCurrentOwner,Re=!1;function Ce(e,n,r,t){n.child=e===null?oo(n,null,r,t):kr(n,e.child,r,t)}function Wo(e,n,r,t,i){r=r.render;var a=n.ref;return Sr(n,i),t=Fa(e,n,r,t,a,i),r=Ha(),e!==null&&!Re?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Sn(e,n,i)):(ee&&r&&ja(n),n.flags|=1,Ce(e,n,t,i),n.child)}function Qo(e,n,r,t,i){if(e===null){var a=r.type;return typeof a=="function"&&!vs(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=a,Vo(e,n,a,t,i)):(e=bi(r.type,null,t,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,(e.lanes&i)===0){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Gr,r(s,t)&&e.ref===n.ref)return Sn(e,n,i)}return n.flags|=1,e=Wn(a,t),e.ref=n.ref,e.return=n,n.child=e}function Vo(e,n,r,t,i){if(e!==null){var a=e.memoizedProps;if(Gr(a,t)&&e.ref===n.ref)if(Re=!1,n.pendingProps=t=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Re=!0);else return n.lanes=e.lanes,Sn(e,n,i)}return Ga(e,n,r,t,i)}function $o(e,n,r){var t=n.pendingProps,i=t.children,a=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Tr,He),He|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Y(Tr,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=a!==null?a.baseLanes:r,Y(Tr,He),He|=t}else a!==null?(t=a.baseLanes|r,n.memoizedState=null):t=r,Y(Tr,He),He|=t;return Ce(e,n,i,r),n.child}function Yo(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Ga(e,n,r,t,i){var a=ze(r)?Kn:xe.current;return a=yr(n,a),Sr(n,i),r=Fa(e,n,r,t,a,i),t=Ha(),e!==null&&!Re?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Sn(e,n,i)):(ee&&t&&ja(n),n.flags|=1,Ce(e,n,r,i),n.child)}function Ko(e,n,r,t,i){if(ze(r)){var a=!0;Vt(n)}else a=!1;if(Sr(n,i),n.stateNode===null)di(e,n),Do(n,r,t),$a(n,r,t,i),t=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var o=s.context,m=r.contextType;typeof m=="object"&&m!==null?m=$e(m):(m=ze(r)?Kn:xe.current,m=yr(n,m));var y=r.getDerivedStateFromProps,x=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function";x||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==t||o!==m)&&Uo(n,s,t,m),Dn=!1;var h=n.memoizedState;s.state=h,ni(n,t,s,i),o=n.memoizedState,l!==t||h!==o||_e.current||Dn?(typeof y=="function"&&(Va(n,r,y,t),o=n.memoizedState),(l=Dn||Oo(n,r,l,t,h,o,m))?(x||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=o),s.props=t,s.state=o,s.context=m,t=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{s=n.stateNode,uo(e,n),l=n.memoizedProps,m=n.type===n.elementType?l:tn(n.type,l),s.props=m,x=n.pendingProps,h=s.context,o=r.contextType,typeof o=="object"&&o!==null?o=$e(o):(o=ze(r)?Kn:xe.current,o=yr(n,o));var j=r.getDerivedStateFromProps;(y=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==x||h!==o)&&Uo(n,s,t,o),Dn=!1,h=n.memoizedState,s.state=h,ni(n,t,s,i);var C=n.memoizedState;l!==x||h!==C||_e.current||Dn?(typeof j=="function"&&(Va(n,r,j,t),C=n.memoizedState),(m=Dn||Oo(n,r,m,t,h,C,o)||!1)?(y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(t,C,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(t,C,o)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=C),s.props=t,s.state=C,s.context=o,t=m):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),t=!1)}return Ja(e,n,r,t,a,i)}function Ja(e,n,r,t,i,a){Yo(e,n);var s=(n.flags&128)!==0;if(!t&&!s)return i&&Zl(n,r,!1),Sn(e,n,a);t=n.stateNode,fu.current=n;var l=s&&typeof r.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&s?(n.child=kr(n,e.child,null,a),n.child=kr(n,null,l,a)):Ce(e,n,l,a),n.memoizedState=t.state,i&&Zl(n,r,!0),n.child}function Go(e){var n=e.stateNode;n.pendingContext?Jl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Jl(e,n.context,!1),Pa(e,n.containerInfo)}function Jo(e,n,r,t,i){return br(),Na(i),n.flags|=256,Ce(e,n,r,t),n.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function Za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xo(e,n,r){var t=n.pendingProps,i=re.current,a=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return Ca(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(s=t.children,e=t.fallback,a?(t=n.mode,a=n.child,s={mode:"hidden",children:s},(t&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ki(s,t,0,null),e=ar(e,t,r,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Za(r),n.memoizedState=Xa,e):es(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gu(e,n,s,t,l,i,r);if(a){a=t.fallback,s=n.mode,i=e.child,l=i.sibling;var o={mode:"hidden",children:t.children};return(s&1)===0&&n.child!==i?(t=n.child,t.childLanes=0,t.pendingProps=o,n.deletions=null):(t=Wn(i,o),t.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Wn(l,a):(a=ar(a,s,r,null),a.flags|=2),a.return=n,t.return=n,t.sibling=a,n.child=t,t=a,a=n.child,s=e.child.memoizedState,s=s===null?Za(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,n.memoizedState=Xa,t}return a=e.child,e=a.sibling,t=Wn(a,{mode:"visible",children:t.children}),(n.mode&1)===0&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t}function es(e,n){return n=ki({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ci(e,n,r,t){return t!==null&&Na(t),kr(n,e.child,null,r),e=es(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gu(e,n,r,t,i,a,s){if(r)return n.flags&256?(n.flags&=-257,t=Ya(Error(f(422))),ci(e,n,s,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=t.fallback,i=n.mode,t=ki({mode:"visible",children:t.children},i,0,null),a=ar(a,i,s,null),a.flags|=2,t.return=n,a.return=n,t.sibling=a,n.child=t,(n.mode&1)!==0&&kr(n,e.child,null,s),n.child.memoizedState=Za(s),n.memoizedState=Xa,a);if((n.mode&1)===0)return ci(e,n,s,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var l=t.dgst;return t=l,a=Error(f(419)),t=Ya(a,t,void 0),ci(e,n,s,t)}if(l=(s&e.childLanes)!==0,Re||l){if(t=fe,t!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(t.suspendedLanes|s))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,kn(e,i),ln(t,e,i,-1))}return hs(),t=Ya(Error(f(421))),ci(e,n,s,t)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Tu.bind(null,e),i._reactRetry=n,null):(e=a.treeContext,Fe=Ln(i.nextSibling),Ae=n,ee=!0,rn=null,e!==null&&(Qe[Ve++]=xn,Qe[Ve++]=bn,Qe[Ve++]=Gn,xn=e.id,bn=e.overflow,Gn=n),n=es(n,t.children),n.flags|=4096,n)}function Zo(e,n,r){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),za(e.return,n,r)}function ns(e,n,r,t,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:i}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=t,a.tail=r,a.tailMode=i)}function ec(e,n,r){var t=n.pendingProps,i=t.revealOrder,a=t.tail;if(Ce(e,n,t.children,r),t=re.current,(t&2)!==0)t=t&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zo(e,r,n);else if(e.tag===19)Zo(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(Y(re,t),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&ri(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),ns(n,!1,i,r,a);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ns(n,!0,r,null,a);break;case"together":ns(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function di(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Sn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),nr|=n.lanes,(r&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(f(153));if(n.child!==null){for(e=n.child,r=Wn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Wn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function hu(e,n,r){switch(n.tag){case 3:Go(n),br();break;case 5:fo(n);break;case 1:ze(n.type)&&Vt(n);break;case 4:Pa(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,i=n.memoizedProps.value;Y(Xt,t._currentValue),t._currentValue=i;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(Y(re,re.current&1),n.flags|=128,null):(r&n.child.childLanes)!==0?Xo(e,n,r):(Y(re,re.current&1),e=Sn(e,n,r),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(t=(r&n.childLanes)!==0,(e.flags&128)!==0){if(t)return ec(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),t)break;return null;case 22:case 23:return n.lanes=0,$o(e,n,r)}return Sn(e,n,r)}var nc,rs,rc,tc;nc=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},rs=function(){},rc=function(e,n,r,t){var i=e.memoizedProps;if(i!==t){e=n.stateNode,Zn(mn.current);var a=null;switch(r){case"input":i=zi(e,i),t=zi(e,t),a=[];break;case"select":i=E({},i,{value:void 0}),t=E({},t,{value:void 0}),a=[];break;case"textarea":i=Pi(e,i),t=Pi(e,t),a=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=qt)}Oi(r,t);var s;r=null;for(m in i)if(!t.hasOwnProperty(m)&&i.hasOwnProperty(m)&&i[m]!=null)if(m==="style"){var l=i[m];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(L.hasOwnProperty(m)?a||(a=[]):(a=a||[]).push(m,null));for(m in t){var o=t[m];if(l=i!=null?i[m]:void 0,t.hasOwnProperty(m)&&o!==l&&(o!=null||l!=null))if(m==="style")if(l){for(s in l)!l.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in o)o.hasOwnProperty(s)&&l[s]!==o[s]&&(r||(r={}),r[s]=o[s])}else r||(a||(a=[]),a.push(m,r)),r=o;else m==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(a=a||[]).push(m,o)):m==="children"?typeof o!="string"&&typeof o!="number"||(a=a||[]).push(m,""+o):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(L.hasOwnProperty(m)?(o!=null&&m==="onScroll"&&K("scroll",e),a||l===o||(a=[])):(a=a||[]).push(m,o))}r&&(a=a||[]).push("style",r);var m=a;(n.updateQueue=m)&&(n.flags|=4)}},tc=function(e,n,r,t){r!==t&&(n.flags|=4)};function ut(e,n){if(!ee)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=r,n}function vu(e,n,r){var t=n.pendingProps;switch(Sa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ze(n.type)&&Qt(),ke(n),null;case 3:return t=n.stateNode,Er(),G(_e),G(xe),Da(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Gt(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rn!==null&&(ms(rn),rn=null))),rs(e,n),ke(n),null;case 5:Ma(n);var i=Zn(st.current);if(r=n.type,e!==null&&n.stateNode!=null)rc(e,n,r,t,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(f(166));return ke(n),null}if(e=Zn(mn.current),Gt(n)){t=n.stateNode,r=n.type;var a=n.memoizedProps;switch(t[pn]=n,t[nt]=a,e=(n.mode&1)!==0,r){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(i=0;i<Xr.length;i++)K(Xr[i],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":Os(t,a),K("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!a.multiple},K("invalid",t);break;case"textarea":As(t,a),K("invalid",t)}Oi(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?t.textContent!==l&&(a.suppressHydrationWarning!==!0&&Bt(t.textContent,l,e),i=["children",l]):typeof l=="number"&&t.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Bt(t.textContent,l,e),i=["children",""+l]):L.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&K("scroll",t)}switch(r){case"input":wt(t),Us(t,a,!0);break;case"textarea":wt(t),Hs(t);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(t.onclick=qt)}t=i,n.updateQueue=t,t!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=s.createElement(r,{is:t.is}):(e=s.createElement(r),r==="select"&&(s=e,t.multiple?s.multiple=!0:t.size&&(s.size=t.size))):e=s.createElementNS(e,r),e[pn]=n,e[nt]=t,nc(e,n,!1,!1),n.stateNode=e;e:{switch(s=Di(r,t),r){case"dialog":K("cancel",e),K("close",e),i=t;break;case"iframe":case"object":case"embed":K("load",e),i=t;break;case"video":case"audio":for(i=0;i<Xr.length;i++)K(Xr[i],e);i=t;break;case"source":K("error",e),i=t;break;case"img":case"image":case"link":K("error",e),K("load",e),i=t;break;case"details":K("toggle",e),i=t;break;case"input":Os(e,t),i=zi(e,t),K("invalid",e);break;case"option":i=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=E({},t,{value:void 0}),K("invalid",e);break;case"textarea":As(e,t),i=Pi(e,t),K("invalid",e);break;default:i=t}Oi(r,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="style"?Qs(e,o):a==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&qs(e,o)):a==="children"?typeof o=="string"?(r!=="textarea"||o!=="")&&Lr(e,o):typeof o=="number"&&Lr(e,""+o):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(L.hasOwnProperty(a)?o!=null&&a==="onScroll"&&K("scroll",e):o!=null&&Je(e,a,o,s))}switch(r){case"input":wt(e),Us(e,t,!1);break;case"textarea":wt(e),Hs(e);break;case"option":t.value!=null&&e.setAttribute("value",""+q(t.value));break;case"select":e.multiple=!!t.multiple,a=t.value,a!=null?sr(e,!!t.multiple,a,!1):t.defaultValue!=null&&sr(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qt)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ke(n),null;case 6:if(e&&n.stateNode!=null)tc(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(f(166));if(r=Zn(st.current),Zn(mn.current),Gt(n)){if(t=n.stateNode,r=n.memoizedProps,t[pn]=n,(a=t.nodeValue!==r)&&(e=Ae,e!==null))switch(e.tag){case 3:Bt(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bt(t.nodeValue,r,(e.mode&1)!==0)}a&&(n.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[pn]=n,n.stateNode=t}return ke(n),null;case 13:if(G(re),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Fe!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ao(),br(),n.flags|=98560,a=!1;else if(a=Gt(n),t!==null&&t.dehydrated!==null){if(e===null){if(!a)throw Error(f(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[pn]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),a=!1}else rn!==null&&(ms(rn),rn=null),a=!0;if(!a)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=r,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(re.current&1)!==0?pe===0&&(pe=3):hs())),n.updateQueue!==null&&(n.flags|=4),ke(n),null);case 4:return Er(),rs(e,n),e===null&&Zr(n.stateNode.containerInfo),ke(n),null;case 10:return _a(n.type._context),ke(n),null;case 17:return ze(n.type)&&Qt(),ke(n),null;case 19:if(G(re),a=n.memoizedState,a===null)return ke(n),null;if(t=(n.flags&128)!==0,s=a.rendering,s===null)if(t)ut(a,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=ri(e),s!==null){for(n.flags|=128,ut(a,!1),t=s.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=r,r=n.child;r!==null;)a=r,e=t,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Y(re,re.current&1|2),n.child}e=e.sibling}a.tail!==null&&se()>Ir&&(n.flags|=128,t=!0,ut(a,!1),n.lanes=4194304)}else{if(!t)if(e=ri(s),e!==null){if(n.flags|=128,t=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),ut(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ee)return ke(n),null}else 2*se()-a.renderingStartTime>Ir&&r!==1073741824&&(n.flags|=128,t=!0,ut(a,!1),n.lanes=4194304);a.isBackwards?(s.sibling=n.child,n.child=s):(r=a.last,r!==null?r.sibling=s:n.child=s,a.last=s)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=se(),n.sibling=null,r=re.current,Y(re,t?r&1|2:r&1),n):(ke(n),null);case 22:case 23:return gs(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&(n.mode&1)!==0?(He&1073741824)!==0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),null;case 24:return null;case 25:return null}throw Error(f(156,n.tag))}function yu(e,n){switch(Sa(n),n.tag){case 1:return ze(n.type)&&Qt(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Er(),G(_e),G(xe),Da(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Ma(n),null;case 13:if(G(re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(f(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(re),null;case 4:return Er(),null;case 10:return _a(n.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var ui=!1,je=!1,wu=typeof WeakSet=="function"?WeakSet:Set,S=null;function Nr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){ae(e,n,t)}else r.current=null}function ts(e,n,r){try{r()}catch(t){ae(e,n,t)}}var ic=!1;function xu(e,n){if(ga=zt,e=Ml(),la(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var i=t.anchorOffset,a=t.focusNode;t=t.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,l=-1,o=-1,m=0,y=0,x=e,h=null;n:for(;;){for(var j;x!==r||i!==0&&x.nodeType!==3||(l=s+i),x!==a||t!==0&&x.nodeType!==3||(o=s+t),x.nodeType===3&&(s+=x.nodeValue.length),(j=x.firstChild)!==null;)h=x,x=j;for(;;){if(x===e)break n;if(h===r&&++m===i&&(l=s),h===a&&++y===t&&(o=s),(j=x.nextSibling)!==null)break;x=h,h=x.parentNode}x=j}r=l===-1||o===-1?null:{start:l,end:o}}else r=null}r=r||{start:0,end:0}}else r=null;for(ha={focusedElem:e,selectionRange:r},zt=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var C=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,le=C.memoizedState,u=n.stateNode,c=u.getSnapshotBeforeUpdate(n.elementType===n.type?N:tn(n.type,N),le);u.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(b){ae(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return C=ic,ic=!1,C}function pt(e,n,r){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ts(n,r,a)}i=i.next}while(i!==t)}}function pi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==n)}}function is(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function ac(e){var n=e.alternate;n!==null&&(e.alternate=null,ac(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[pn],delete n[nt],delete n[xa],delete n[ru],delete n[tu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=qt));else if(t!==4&&(e=e.child,e!==null))for(as(e,n,r),e=e.sibling;e!==null;)as(e,n,r),e=e.sibling}function ss(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(ss(e,n,r),e=e.sibling;e!==null;)ss(e,n,r),e=e.sibling}var he=null,an=!1;function An(e,n,r){for(r=r.child;r!==null;)oc(e,n,r),r=r.sibling}function oc(e,n,r){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 5:je||Nr(r,n);case 6:var t=he,i=an;he=null,An(e,n,r),he=t,an=i,he!==null&&(an?(e=he,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):he.removeChild(r.stateNode));break;case 18:he!==null&&(an?(e=he,r=r.stateNode,e.nodeType===8?wa(e.parentNode,r):e.nodeType===1&&wa(e,r),Wr(e)):wa(he,r.stateNode));break;case 4:t=he,i=an,he=r.stateNode.containerInfo,an=!0,An(e,n,r),he=t,an=i;break;case 0:case 11:case 14:case 15:if(!je&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&((a&2)!==0||(a&4)!==0)&&ts(r,n,s),i=i.next}while(i!==t)}An(e,n,r);break;case 1:if(!je&&(Nr(r,n),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(l){ae(r,n,l)}An(e,n,r);break;case 21:An(e,n,r);break;case 22:r.mode&1?(je=(t=je)||r.memoizedState!==null,An(e,n,r),je=t):An(e,n,r);break;default:An(e,n,r)}}function cc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wu),n.forEach(function(t){var i=Iu.bind(null,e,t);r.has(t)||(r.add(t),t.then(i,i))})}}function sn(e,n){var r=n.deletions;if(r!==null)for(var t=0;t<r.length;t++){var i=r[t];try{var a=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,an=!1;break e;case 3:he=l.stateNode.containerInfo,an=!0;break e;case 4:he=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(he===null)throw Error(f(160));oc(a,s,i),he=null,an=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(m){ae(i,n,m)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)dc(n,e),n=n.sibling}function dc(e,n){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(n,e),gn(e),t&4){try{pt(3,e,e.return),pi(3,e)}catch(N){ae(e,e.return,N)}try{pt(5,e,e.return)}catch(N){ae(e,e.return,N)}}break;case 1:sn(n,e),gn(e),t&512&&r!==null&&Nr(r,r.return);break;case 5:if(sn(n,e),gn(e),t&512&&r!==null&&Nr(r,r.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(N){ae(e,e.return,N)}}if(t&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Ds(i,a),Di(l,s);var m=Di(l,a);for(s=0;s<o.length;s+=2){var y=o[s],x=o[s+1];y==="style"?Qs(i,x):y==="dangerouslySetInnerHTML"?qs(i,x):y==="children"?Lr(i,x):Je(i,y,x,m)}switch(l){case"input":Ri(i,a);break;case"textarea":Fs(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?sr(i,!!a.multiple,j,!1):h!==!!a.multiple&&(a.defaultValue!=null?sr(i,!!a.multiple,a.defaultValue,!0):sr(i,!!a.multiple,a.multiple?[]:"",!1))}i[nt]=a}catch(N){ae(e,e.return,N)}}break;case 6:if(sn(n,e),gn(e),t&4){if(e.stateNode===null)throw Error(f(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(N){ae(e,e.return,N)}}break;case 3:if(sn(n,e),gn(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(N){ae(e,e.return,N)}break;case 4:sn(n,e),gn(e);break;case 13:sn(n,e),gn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(cs=se())),t&4&&cc(e);break;case 22:if(y=r!==null&&r.memoizedState!==null,e.mode&1?(je=(m=je)||y,sn(n,e),je=m):sn(n,e),gn(e),t&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(S=e,y=e.child;y!==null;){for(x=S=y;S!==null;){switch(h=S,j=h.child,h.tag){case 0:case 11:case 14:case 15:pt(4,h,h.return);break;case 1:Nr(h,h.return);var C=h.stateNode;if(typeof C.componentWillUnmount=="function"){t=h,r=h.return;try{n=t,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(N){ae(t,r,N)}}break;case 5:Nr(h,h.return);break;case 22:if(h.memoizedState!==null){mc(x);continue}}j!==null?(j.return=h,S=j):mc(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{i=x.stateNode,m?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=x.stateNode,o=x.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Ws("display",s))}catch(N){ae(e,e.return,N)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(N){ae(e,e.return,N)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:sn(n,e),gn(e),t&4&&cc(e);break;case 21:break;default:sn(n,e),gn(e)}}function gn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(sc(r)){var t=r;break e}r=r.return}throw Error(f(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(Lr(i,""),t.flags&=-33);var a=lc(e);ss(e,a,i);break;case 3:case 4:var s=t.stateNode.containerInfo,l=lc(e);as(e,l,s);break;default:throw Error(f(161))}}catch(o){ae(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bu(e,n,r){S=e,uc(e)}function uc(e,n,r){for(var t=(e.mode&1)!==0;S!==null;){var i=S,a=i.child;if(i.tag===22&&t){var s=i.memoizedState!==null||ui;if(!s){var l=i.alternate,o=l!==null&&l.memoizedState!==null||je;l=ui;var m=je;if(ui=s,(je=o)&&!m)for(S=i;S!==null;)s=S,o=s.child,s.tag===22&&s.memoizedState!==null?fc(i):o!==null?(o.return=s,S=o):fc(i);for(;a!==null;)S=a,uc(a),a=a.sibling;S=i,ui=l,je=m}pc(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,S=a):pc(e)}}function pc(e){for(;S!==null;){var n=S;if((n.flags&8772)!==0){var r=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:je||pi(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!je)if(r===null)t.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:tn(n.type,r.memoizedProps);t.componentDidUpdate(i,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&mo(n,a,t);break;case 3:var s=n.updateQueue;if(s!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}mo(n,s,r)}break;case 5:var l=n.stateNode;if(r===null&&n.flags&4){r=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src&&(r.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var m=n.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Wr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}je||n.flags&512&&is(n)}catch(h){ae(n,n.return,h)}}if(n===e){S=null;break}if(r=n.sibling,r!==null){r.return=n.return,S=r;break}S=n.return}}function mc(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var r=n.sibling;if(r!==null){r.return=n.return,S=r;break}S=n.return}}function fc(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{pi(4,n)}catch(o){ae(n,r,o)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var i=n.return;try{t.componentDidMount()}catch(o){ae(n,i,o)}}var a=n.return;try{is(n)}catch(o){ae(n,a,o)}break;case 5:var s=n.return;try{is(n)}catch(o){ae(n,s,o)}}}catch(o){ae(n,n.return,o)}if(n===e){S=null;break}var l=n.sibling;if(l!==null){l.return=n.return,S=l;break}S=n.return}}var ku=Math.ceil,mi=we.ReactCurrentDispatcher,ls=we.ReactCurrentOwner,Ke=we.ReactCurrentBatchConfig,D=0,fe=null,ce=null,ve=0,He=0,Tr=Pn(0),pe=0,mt=null,nr=0,fi=0,os=0,ft=null,Le=null,cs=0,Ir=1/0,En=null,gi=!1,ds=null,Fn=null,hi=!1,Hn=null,vi=0,gt=0,us=null,yi=-1,wi=0;function Ne(){return(D&6)!==0?se():yi!==-1?yi:yi=se()}function Bn(e){return(e.mode&1)===0?1:(D&2)!==0&&ve!==0?ve&-ve:au.transition!==null?(wi===0&&(wi=sl()),wi):(e=W,e!==0||(e=window.event,e=e===void 0?16:gl(e.type)),e)}function ln(e,n,r,t){if(50<gt)throw gt=0,us=null,Error(f(185));Ar(e,r,t),((D&2)===0||e!==fe)&&(e===fe&&((D&2)===0&&(fi|=r),pe===4&&qn(e,ve)),Pe(e,t),r===1&&D===0&&(n.mode&1)===0&&(Ir=se()+500,$t&&On()))}function Pe(e,n){var r=e.callbackNode;ad(e,n);var t=Tt(e,e===fe?ve:0);if(t===0)r!==null&&tl(r),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(r!=null&&tl(r),n===1)e.tag===0?iu(hc.bind(null,e)):eo(hc.bind(null,e)),eu(function(){(D&6)===0&&On()}),r=null;else{switch(ll(t)){case 1:r=Wi;break;case 4:r=il;break;case 16:r=St;break;case 536870912:r=al;break;default:r=St}r=Sc(r,gc.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function gc(e,n){if(yi=-1,wi=0,(D&6)!==0)throw Error(f(327));var r=e.callbackNode;if(_r()&&e.callbackNode!==r)return null;var t=Tt(e,e===fe?ve:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||n)n=xi(e,t);else{n=t;var i=D;D|=2;var a=yc();(fe!==e||ve!==n)&&(En=null,Ir=se()+500,tr(e,n));do try{Eu();break}catch(l){vc(e,l)}while(!0);Ia(),mi.current=a,D=i,ce!==null?n=0:(fe=null,ve=0,n=pe)}if(n!==0){if(n===2&&(i=Qi(e),i!==0&&(t=i,n=ps(e,i))),n===1)throw r=mt,tr(e,0),qn(e,t),Pe(e,se()),r;if(n===6)qn(e,t);else{if(i=e.current.alternate,(t&30)===0&&!ju(i)&&(n=xi(e,t),n===2&&(a=Qi(e),a!==0&&(t=a,n=ps(e,a))),n===1))throw r=mt,tr(e,0),qn(e,t),Pe(e,se()),r;switch(e.finishedWork=i,e.finishedLanes=t,n){case 0:case 1:throw Error(f(345));case 2:ir(e,Le,En);break;case 3:if(qn(e,t),(t&130023424)===t&&(n=cs+500-se(),10<n)){if(Tt(e,0)!==0)break;if(i=e.suspendedLanes,(i&t)!==t){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ya(ir.bind(null,e,Le,En),n);break}ir(e,Le,En);break;case 4:if(qn(e,t),(t&4194240)===t)break;for(n=e.eventTimes,i=-1;0<t;){var s=31-en(t);a=1<<s,s=n[s],s>i&&(i=s),t&=~a}if(t=i,t=se()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*ku(t/1960))-t,10<t){e.timeoutHandle=ya(ir.bind(null,e,Le,En),t);break}ir(e,Le,En);break;case 5:ir(e,Le,En);break;default:throw Error(f(329))}}}return Pe(e,se()),e.callbackNode===r?gc.bind(null,e):null}function ps(e,n){var r=ft;return e.current.memoizedState.isDehydrated&&(tr(e,n).flags|=256),e=xi(e,n),e!==2&&(n=Le,Le=r,n!==null&&ms(n)),e}function ms(e){Le===null?Le=e:Le.push.apply(Le,e)}function ju(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var i=r[t],a=i.getSnapshot;i=i.value;try{if(!nn(a(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~os,n&=~fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-en(n),t=1<<r;e[r]=-1,n&=~t}}function hc(e){if((D&6)!==0)throw Error(f(327));_r();var n=Tt(e,0);if((n&1)===0)return Pe(e,se()),null;var r=xi(e,n);if(e.tag!==0&&r===2){var t=Qi(e);t!==0&&(n=t,r=ps(e,t))}if(r===1)throw r=mt,tr(e,0),qn(e,n),Pe(e,se()),r;if(r===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ir(e,Le,En),Pe(e,se()),null}function fs(e,n){var r=D;D|=1;try{return e(n)}finally{D=r,D===0&&(Ir=se()+500,$t&&On())}}function rr(e){Hn!==null&&Hn.tag===0&&(D&6)===0&&_r();var n=D;D|=1;var r=Ke.transition,t=W;try{if(Ke.transition=null,W=1,e)return e()}finally{W=t,Ke.transition=r,D=n,(D&6)===0&&On()}}function gs(){He=Tr.current,G(Tr)}function tr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Zd(r)),ce!==null)for(r=ce.return;r!==null;){var t=r;switch(Sa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Qt();break;case 3:Er(),G(_e),G(xe),Da();break;case 5:Ma(t);break;case 4:Er();break;case 13:G(re);break;case 19:G(re);break;case 10:_a(t.type._context);break;case 22:case 23:gs()}r=r.return}if(fe=e,ce=e=Wn(e.current,null),ve=He=n,pe=0,mt=null,os=fi=nr=0,Le=ft=null,Xn!==null){for(n=0;n<Xn.length;n++)if(r=Xn[n],t=r.interleaved,t!==null){r.interleaved=null;var i=t.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,t.next=s}r.pending=t}Xn=null}return e}function vc(e,n){do{var r=ce;try{if(Ia(),ti.current=li,ii){for(var t=te.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ii=!1}if(er=0,me=ue=te=null,lt=!1,ot=0,ls.current=null,r===null||r.return===null){pe=1,mt=n,ce=null;break}e:{var a=e,s=r.return,l=r,o=n;if(n=ve,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var m=o,y=l,x=y.tag;if((y.mode&1)===0&&(x===0||x===11||x===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var j=Bo(s);if(j!==null){j.flags&=-257,qo(j,s,l,a,n),j.mode&1&&Ho(a,m,n),n=j,o=m;var C=n.updateQueue;if(C===null){var N=new Set;N.add(o),n.updateQueue=N}else C.add(o);break e}else{if((n&1)===0){Ho(a,m,n),hs();break e}o=Error(f(426))}}else if(ee&&l.mode&1){var le=Bo(s);if(le!==null){(le.flags&65536)===0&&(le.flags|=256),qo(le,s,l,a,n),Na(Cr(o,l));break e}}a=o=Cr(o,l),pe!==4&&(pe=2),ft===null?ft=[a]:ft.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var u=Ao(a,o,n);po(a,u);break e;case 1:l=o;var c=a.type,p=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Fn===null||!Fn.has(p)))){a.flags|=65536,n&=-n,a.lanes|=n;var b=Fo(a,l,n);po(a,b);break e}}a=a.return}while(a!==null)}xc(r)}catch(T){n=T,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function yc(){var e=mi.current;return mi.current=li,e===null?li:e}function hs(){(pe===0||pe===3||pe===2)&&(pe=4),fe===null||(nr&268435455)===0&&(fi&268435455)===0||qn(fe,ve)}function xi(e,n){var r=D;D|=2;var t=yc();(fe!==e||ve!==n)&&(En=null,tr(e,n));do try{Su();break}catch(i){vc(e,i)}while(!0);if(Ia(),D=r,mi.current=t,ce!==null)throw Error(f(261));return fe=null,ve=0,pe}function Su(){for(;ce!==null;)wc(ce)}function Eu(){for(;ce!==null&&!Gc();)wc(ce)}function wc(e){var n=jc(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?xc(e):ce=n,ls.current=null}function xc(e){var n=e;do{var r=n.alternate;if(e=n.return,(n.flags&32768)===0){if(r=vu(r,n,He),r!==null){ce=r;return}}else{if(r=yu(r,n),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}if(n=n.sibling,n!==null){ce=n;return}ce=n=e}while(n!==null);pe===0&&(pe=5)}function ir(e,n,r){var t=W,i=Ke.transition;try{Ke.transition=null,W=1,Cu(e,n,r,t)}finally{Ke.transition=i,W=t}return null}function Cu(e,n,r,t){do _r();while(Hn!==null);if((D&6)!==0)throw Error(f(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(sd(e,a),e===fe&&(ce=fe=null,ve=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||hi||(hi=!0,Sc(St,function(){return _r(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Ke.transition,Ke.transition=null;var s=W;W=1;var l=D;D|=4,ls.current=null,xu(e,r),dc(r,e),Vd(ha),zt=!!ga,ha=ga=null,e.current=r,bu(r),Jc(),D=l,W=s,Ke.transition=a}else e.current=r;if(hi&&(hi=!1,Hn=e,vi=i),a=e.pendingLanes,a===0&&(Fn=null),ed(r.stateNode),Pe(e,se()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],t(i.value,{componentStack:i.stack,digest:i.digest});if(gi)throw gi=!1,e=ds,ds=null,e;return(vi&1)!==0&&e.tag!==0&&_r(),a=e.pendingLanes,(a&1)!==0?e===us?gt++:(gt=0,us=e):gt=0,On(),null}function _r(){if(Hn!==null){var e=ll(vi),n=Ke.transition,r=W;try{if(Ke.transition=null,W=16>e?16:e,Hn===null)var t=!1;else{if(e=Hn,Hn=null,vi=0,(D&6)!==0)throw Error(f(331));var i=D;for(D|=4,S=e.current;S!==null;){var a=S,s=a.child;if((S.flags&16)!==0){var l=a.deletions;if(l!==null){for(var o=0;o<l.length;o++){var m=l[o];for(S=m;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:pt(8,y,a)}var x=y.child;if(x!==null)x.return=y,S=x;else for(;S!==null;){y=S;var h=y.sibling,j=y.return;if(ac(y),y===m){S=null;break}if(h!==null){h.return=j,S=h;break}S=j}}}var C=a.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var le=N.sibling;N.sibling=null,N=le}while(N!==null)}}S=a}}if((a.subtreeFlags&2064)!==0&&s!==null)s.return=a,S=s;else e:for(;S!==null;){if(a=S,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:pt(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,S=u;break e}S=a.return}}var c=e.current;for(S=c;S!==null;){s=S;var p=s.child;if((s.subtreeFlags&2064)!==0&&p!==null)p.return=s,S=p;else e:for(s=c;S!==null;){if(l=S,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:pi(9,l)}}catch(T){ae(l,l.return,T)}if(l===s){S=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,S=b;break e}S=l.return}}if(D=i,On(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Et,e)}catch{}t=!0}return t}finally{W=r,Ke.transition=n}}return!1}function bc(e,n,r){n=Cr(r,n),n=Ao(e,n,1),e=Un(e,n,1),n=Ne(),e!==null&&(Ar(e,1,n),Pe(e,n))}function ae(e,n,r){if(e.tag===3)bc(e,e,r);else for(;n!==null;){if(n.tag===3){bc(n,e,r);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Fn===null||!Fn.has(t))){e=Cr(r,e),e=Fo(n,e,1),n=Un(n,e,1),e=Ne(),n!==null&&(Ar(n,1,e),Pe(n,e));break}}n=n.return}}function Nu(e,n,r){var t=e.pingCache;t!==null&&t.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&r,fe===e&&(ve&r)===r&&(pe===4||pe===3&&(ve&130023424)===ve&&500>se()-cs?tr(e,0):os|=r),Pe(e,n)}function kc(e,n){n===0&&((e.mode&1)===0?n=1:(n=Nt,Nt<<=1,(Nt&130023424)===0&&(Nt=4194304)));var r=Ne();e=kn(e,n),e!==null&&(Ar(e,n,r),Pe(e,r))}function Tu(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),kc(e,r)}function Iu(e,n){var r=0;switch(e.tag){case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(f(314))}t!==null&&t.delete(n),kc(e,r)}var jc;jc=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||_e.current)Re=!0;else{if((e.lanes&r)===0&&(n.flags&128)===0)return Re=!1,hu(e,n,r);Re=(e.flags&131072)!==0}else Re=!1,ee&&(n.flags&1048576)!==0&&no(n,Kt,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;di(e,n),e=n.pendingProps;var i=yr(n,xe.current);Sr(n,r),i=Fa(null,n,t,e,i,r);var a=Ha();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ze(t)?(a=!0,Vt(n)):a=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,La(n),i.updater=oi,n.stateNode=i,i._reactInternals=n,$a(n,t,e,r),n=Ja(null,n,t,!0,a,r)):(n.tag=0,ee&&a&&ja(n),Ce(null,n,i,r),n=n.child),n;case 16:t=n.elementType;e:{switch(di(e,n),e=n.pendingProps,i=t._init,t=i(t._payload),n.type=t,i=n.tag=zu(t),e=tn(t,e),i){case 0:n=Ga(null,n,t,e,r);break e;case 1:n=Ko(null,n,t,e,r);break e;case 11:n=Wo(null,n,t,e,r);break e;case 14:n=Qo(null,n,t,tn(t.type,e),r);break e}throw Error(f(306,t,""))}return n;case 0:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:tn(t,i),Ga(e,n,t,i,r);case 1:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:tn(t,i),Ko(e,n,t,i,r);case 3:e:{if(Go(n),e===null)throw Error(f(387));t=n.pendingProps,a=n.memoizedState,i=a.element,uo(e,n),ni(n,t,null,r);var s=n.memoizedState;if(t=s.element,a.isDehydrated)if(a={element:t,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){i=Cr(Error(f(423)),n),n=Jo(e,n,t,r,i);break e}else if(t!==i){i=Cr(Error(f(424)),n),n=Jo(e,n,t,r,i);break e}else for(Fe=Ln(n.stateNode.containerInfo.firstChild),Ae=n,ee=!0,rn=null,r=oo(n,null,t,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(br(),t===i){n=Sn(e,n,r);break e}Ce(e,n,t,r)}n=n.child}return n;case 5:return fo(n),e===null&&Ca(n),t=n.type,i=n.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,va(t,i)?s=null:a!==null&&va(t,a)&&(n.flags|=32),Yo(e,n),Ce(e,n,s,r),n.child;case 6:return e===null&&Ca(n),null;case 13:return Xo(e,n,r);case 4:return Pa(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=kr(n,null,t,r):Ce(e,n,t,r),n.child;case 11:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:tn(t,i),Wo(e,n,t,i,r);case 7:return Ce(e,n,n.pendingProps,r),n.child;case 8:return Ce(e,n,n.pendingProps.children,r),n.child;case 12:return Ce(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(t=n.type._context,i=n.pendingProps,a=n.memoizedProps,s=i.value,Y(Xt,t._currentValue),t._currentValue=s,a!==null)if(nn(a.value,s)){if(a.children===i.children&&!_e.current){n=Sn(e,n,r);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var o=l.firstContext;o!==null;){if(o.context===t){if(a.tag===1){o=jn(-1,r&-r),o.tag=2;var m=a.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?o.next=o:(o.next=y.next,y.next=o),m.pending=o}}a.lanes|=r,o=a.alternate,o!==null&&(o.lanes|=r),za(a.return,r,n),l.lanes|=r;break}o=o.next}}else if(a.tag===10)s=a.type===n.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(f(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),za(s,r,n),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===n){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ce(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,t=n.pendingProps.children,Sr(n,r),i=$e(i),t=t(i),n.flags|=1,Ce(e,n,t,r),n.child;case 14:return t=n.type,i=tn(t,n.pendingProps),i=tn(t.type,i),Qo(e,n,t,i,r);case 15:return Vo(e,n,n.type,n.pendingProps,r);case 17:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:tn(t,i),di(e,n),n.tag=1,ze(t)?(e=!0,Vt(n)):e=!1,Sr(n,r),Do(n,t,i),$a(n,t,i,r),Ja(null,n,t,!0,e,r);case 19:return ec(e,n,r);case 22:return $o(e,n,r)}throw Error(f(156,n.tag))};function Sc(e,n){return rl(e,n)}function _u(e,n,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,n,r,t){return new _u(e,n,r,t)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zu(e){if(typeof e=="function")return vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cn)return 11;if(e===dn)return 14}return 2}function Wn(e,n){var r=e.alternate;return r===null?(r=Ge(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function bi(e,n,r,t,i,a){var s=2;if(t=e,typeof e=="function")vs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Te:return ar(r.children,i,a,n);case We:s=8,i|=8;break;case Cn:return e=Ge(12,r,n,i|2),e.elementType=Cn,e.lanes=a,e;case Oe:return e=Ge(13,r,n,i),e.elementType=Oe,e.lanes=a,e;case Ze:return e=Ge(19,r,n,i),e.elementType=Ze,e.lanes=a,e;case ie:return ki(r,i,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vn:s=10;break e;case Vn:s=9;break e;case cn:s=11;break e;case dn:s=14;break e;case Ie:s=16,t=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return n=Ge(s,r,n,i),n.elementType=e,n.type=t,n.lanes=a,n}function ar(e,n,r,t){return e=Ge(7,e,t,n),e.lanes=r,e}function ki(e,n,r,t){return e=Ge(22,e,t,n),e.elementType=ie,e.lanes=r,e.stateNode={isHidden:!1},e}function ys(e,n,r){return e=Ge(6,e,null,n),e.lanes=r,e}function ws(e,n,r){return n=Ge(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ru(e,n,r,t,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xs(e,n,r,t,i,a,s,l,o){return e=new Ru(e,n,r,l,o),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Ge(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function Lu(e,n,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:t==null?null:""+t,children:e,containerInfo:n,implementation:r}}function Ec(e){if(!e)return Mn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(f(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ze(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(f(171))}if(e.tag===1){var r=e.type;if(ze(r))return Xl(e,r,n)}return n}function Cc(e,n,r,t,i,a,s,l,o){return e=xs(r,t,!0,e,i,a,s,l,o),e.context=Ec(null),r=e.current,t=Ne(),i=Bn(r),a=jn(t,i),a.callback=n??null,Un(r,a,i),e.current.lanes=i,Ar(e,i,t),Pe(e,t),e}function ji(e,n,r,t){var i=n.current,a=Ne(),s=Bn(i);return r=Ec(r),n.context===null?n.context=r:n.pendingContext=r,n=jn(a,s),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=Un(i,n,s),e!==null&&(ln(e,i,s,a),ei(e,i,s)),s}function Si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function bs(e,n){Nc(e,n),(e=e.alternate)&&Nc(e,n)}function Pu(){return null}var Tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ks(e){this._internalRoot=e}Ei.prototype.render=ks.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(f(409));ji(e,n,null,null)},Ei.prototype.unmount=ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rr(function(){ji(null,e,null,null)}),n[yn]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var n=dl();e={blockedOn:null,target:e,priority:n};for(var r=0;r<_n.length&&n!==0&&n<_n[r].priority;r++);_n.splice(r,0,e),r===0&&ml(e)}};function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function Mu(e,n,r,t,i){if(i){if(typeof t=="function"){var a=t;t=function(){var m=Si(s);a.call(m)}}var s=Cc(n,t,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=s,e[yn]=s.current,Zr(e.nodeType===8?e.parentNode:e),rr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof t=="function"){var l=t;t=function(){var m=Si(o);l.call(m)}}var o=xs(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=o,e[yn]=o.current,Zr(e.nodeType===8?e.parentNode:e),rr(function(){ji(n,o,r,t)}),o}function Ni(e,n,r,t,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var o=Si(s);l.call(o)}}ji(n,s,e,i)}else s=Mu(r,n,e,i,t);return Si(s)}ol=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Ur(n.pendingLanes);r!==0&&($i(n,r|1),Pe(n,se()),(D&6)===0&&(Ir=se()+500,On()))}break;case 13:rr(function(){var t=kn(e,1);if(t!==null){var i=Ne();ln(t,e,1,i)}}),bs(e,1)}},Yi=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var r=Ne();ln(n,e,134217728,r)}bs(e,134217728)}},cl=function(e){if(e.tag===13){var n=Bn(e),r=kn(e,n);if(r!==null){var t=Ne();ln(r,e,n,t)}bs(e,n)}},dl=function(){return W},ul=function(e,n){var r=W;try{return W=e,n()}finally{W=r}},Fi=function(e,n,r){switch(n){case"input":if(Ri(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var t=r[n];if(t!==e&&t.form===e.form){var i=Wt(t);if(!i)throw Error(f(90));Ms(t),Ri(t,i)}}}break;case"textarea":Fs(e,r);break;case"select":n=r.value,n!=null&&sr(e,!!r.multiple,n,!1)}},Ks=fs,Gs=rr;var Ou={usingClientEntryPoint:!1,Events:[rt,hr,Wt,$s,Ys,fs]},ht={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Du={bundleType:ht.bundleType,version:ht.version,rendererPackageName:ht.rendererPackageName,rendererConfig:ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=el(e),e===null?null:e.stateNode},findFiberByHostInstance:ht.findFiberByHostInstance||Pu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Et=Ti.inject(Du),un=Ti}catch{}}return Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ou,Me.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!js(n))throw Error(f(200));return Lu(e,n,null,r)},Me.createRoot=function(e,n){if(!js(e))throw Error(f(299));var r=!1,t="",i=Tc;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=xs(e,1,!1,null,null,r,!1,t,i),e[yn]=n.current,Zr(e.nodeType===8?e.parentNode:e),new ks(n)},Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=el(n),e=e===null?null:e.stateNode,e},Me.flushSync=function(e){return rr(e)},Me.hydrate=function(e,n,r){if(!Ci(n))throw Error(f(200));return Ni(null,e,n,!0,r)},Me.hydrateRoot=function(e,n,r){if(!js(e))throw Error(f(405));var t=r!=null&&r.hydratedSources||null,i=!1,a="",s=Tc;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),n=Cc(n,null,e,1,r??null,i,!1,a,s),e[yn]=n.current,Zr(e),t)for(e=0;e<t.length;e++)r=t[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new Ei(n)},Me.render=function(e,n,r){if(!Ci(n))throw Error(f(200));return Ni(null,e,n,!1,r)},Me.unmountComponentAtNode=function(e){if(!Ci(e))throw Error(f(40));return e._reactRootContainer?(rr(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1},Me.unstable_batchedUpdates=fs,Me.unstable_renderSubtreeIntoContainer=function(e,n,r,t){if(!Ci(r))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return Ni(e,n,r,!1,t)},Me.version="18.3.1-next-f1338f8080-20240426",Me}var Dc;function $u(){if(Dc)return Cs.exports;Dc=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(g){console.error(g)}}return w(),Cs.exports=Vu(),Cs.exports}var Uc;function Yu(){if(Uc)return Ii;Uc=1;var w=$u();return Ii.createRoot=w.createRoot,Ii.hydrateRoot=w.hydrateRoot,Ii}var Ku=Yu();const Ls=`<!DOCTYPE html>\r
<html lang="zxx" class="alternative-style-1">\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:01 GMT -->\r
<head>\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1736086928767831"\r
     crossorigin="anonymous"><\/script>     \r
     \r
<meta charset="utf-8">\r
<meta http-equiv="X-UA-Compatible" content="IE=edge">\r
<title>Concept Design Architecture </title>\r
   <link rel="shortcut icon" type="image/x-icon" href="../../img/logo-small.png">\r
<meta name="keywords" content="HTML5 Template" />\r
<meta name="description" content="EZY - Responsive HTML5 Template">\r
<meta name="author" content="okler.net">\r
\r
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=yes">\r
\r
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700,800,900%7CPoppins:100,200,300,400,500,600,700,800" rel="stylesheet" type="text/css">\r
\r
<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">\r
<link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css">\r
<link rel="stylesheet" href="vendor/animate/animate.min.css">\r
<link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.min.css">\r
<link rel="stylesheet" href="vendor/linear-icons/css/linear-icons.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.min.css">\r
<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css">\r
\r
<link rel="stylesheet" href="css/theme.css">\r
<link rel="stylesheet" href="css/theme-elements.css">\r
\r
<link rel="stylesheet" href="vendor/rs-plugin/css/settings.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/layers.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/navigation.css">\r
  <meta charset="utf-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1">\r
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\r
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\r
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"><\/script>\r
<link rel="stylesheet" href="css/skins/default.css"> <script src="master/style-switcher/style.switcher.localstorage.js"><\/script>\r
\r
<link rel="stylesheet" href="css/custom.css">\r
\r
<script src="vendor/modernizr/modernizr.min.js"><\/script>\r
</head>\r
<style>\r
    @media only screen and (max-width: 600px) {\r
  .mobile {\r
    font-size:10px;\r
  }\r
  .mobi{\r
      padding-left:10px;\r
  }\r
  .en{\r
      font-size:15px;\r
  }\r
  .ph{\r
      font-size:13px;\r
  }\r
}\r
</style>\r
<style>\r
#header .header-btn-collapse-nav.header-btn-collapse-nav-light .hamburguer span, #header .header-btn-collapse-nav.header-btn-collapse-nav-light .close span {\r
     background: black; \r
}\r
\r
</style>\r
<style type="text/css">\r
  @media (min-width: 992px){\r
html.alternative-style-1 #header .header-nav-main nav>ul>li>a {\r
    font-size: 1.5rem;\r
    font-weight: 500;\r
}\r
.list-infos>li.list-info-item-increase-size {\r
    font-size: 14.4px;\r
    font-size: 12px;\r
}\r
.social-icons.social-icons-2 li a {\r
    font-size: 12.8px;\r
    font-size: 12px;\r
}\r
.text-0 {\r
    font-size: 11.2px!important;\r
    font-size: 12px !important;\r
}\r
}\r
html.alternative-style-1 .top-sub-title {\r
    font-size: 11.2px!important;\r
    font-size: 12px!important;\r
    font-weight: 500;\r
    color: #999;\r
}\r
.sort-source>div>a, .sort-source>li>a {\r
    font-size: 13.6px;\r
    font-size: 12px;\r
    font-family: montserrat,sans-serif;\r
    font-weight: 600;\r
}\r
.text-2 {\r
    font-size: 14.4px!important;\r
    font-size: 12px!important;\r
}\r
.text-3 {\r
    font-size: 16px!important;\r
    font-size: 12px!important;\r
}\r
.text-4 {\r
    font-size: 17.6px!important;\r
    font-size: 12px !important;\r
}\r
.page-header {\r
    padding-bottom: 9px;\r
    margin: 0px;\r
    border-bottom: 1px solid #eee;\r
}\r
}\r
\r
</style>\r
<style type="text/css">\r
  a {\r
    color: #ffffff;\r
    text-decoration: none;\r
}\r
\r
</style>\r
<body>\r
<div class="body">\r
<header id="header" class="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 120}">\r
<div class="header-body">\r
\r
<div class="header-top">\r
<div class="header-top-container container container-lg-custom">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<ul class="list-infos">\r
<li class="list-info-item-increase-size  d-lg-flex">\r
<i class="lnr lnr-phone-handset text-color-primary font-weight-semibold mr-1 ph"></i>\r
<a href="tel:+1234567890" class="text-color-primary"><strong class="mobile">+91 96266 60910</strong></a>\r
</li>&nbsp;\r
<li class="list-info-item-increase-size  d-lg-flex mobi">\r
<i class="lnr lnr-envelope text-color-primary font-weight-semibold mr-1 en"></i>\r
<a href="https://www.okler.net/cdn-cgi/l/email-protection#1a7f777b73765a7e75777b737434797577"class="text-color-primary"  ><strong class="mobile"><!--<span class="__cf_email__" data-cfemail="87e2eae6eeebc7e3e8eae6eee9a9e4e8ea">[email&#160;protected]</span>-->cd.gopal12@gmail.com</strong></a>\r
</li>\r
<!--<li class="list-info-item-increase-icon-size">\r
<i class="icon icon-location-pin text-2 position-relative top-1 mr-1"></i>\r
1234 Street Name, City Name\r
</li>-->\r
</ul>\r
</div>\r
<div class="header-column justify-content-end">\r
<ul class="header-top-social-icons social-icons social-icons-transparent social-icons-icon-dark social-icons-2 d-md-block">\r
<li class="social-icons-instagram">\r
<a href="https://www.instagram.com/" target="_blank" class="text-color-primary"  title="Instragram"><i class="fab fa-instagram"></i></a>\r
</li>\r
<li class="social-icons-twitter">\r
<a href="https://www.twitter.com/" target="_blank" class="text-color-primary"  title="Twitter"><i class="fab fa-twitter"></i></a>\r
</li>\r
<li class="social-icons-facebook">\r
<a href="https://www.facebook.com/" target="_blank" class="text-color-primary"  title="Facebook"><i class="fab fa-facebook-f"></i></a>\r
</li>\r
</ul>\r
<!--<a href="contact.php" class="btn btn-primary btn-3 font-weight-bold text-1 rounded-0 ml-3">CONTACT US</a>-->\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="header-container p-0">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<div class="header-logo border-left-0 px-4 d-lg-none">\r
<a href="#">\r
<img src="img/logo-small-light.png" data-change-src="img/logo-small.png" width="75" height="50" alt="" />\r
</a>\r
</div>\r
<ul class="header-social-icons social-icons social-icons-transparent social-icons-icon-light border-left-0 d-none d-lg-flex px-2 px-xl-4">\r
</ul>\r
</div>\r
<div class="header-column justify-content-center">\r
<div class="header-nav justify-content-lg-center">\r
<div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">\r
<nav class="collapse">\r
<ul class="nav flex-column flex-lg-row align-items-center" id="mainNav">\r
<li class="dropdown dropdown-mega order-1">\r
<a class="dropdown-item dropdown-toggle " href="index.php">Home</a>\r
\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-2">\r
<a class="dropdown-item dropdown-toggle " href="about.php">About Us</a>\r
\r
</li>\r
<li class="dropdown order-3">\r
<a class="dropdown-item dropdown-toggle" href="interior.php?name=Residential">Interior</a>\r
<ul class="dropdown-menu">\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Residential">Residential Interior</a>\r
\r
</li>\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Commercial">Commercial Interior</a>\r
\r
</li>\r
\r
</ul>\r
</li>\r
\r
<li class="dropdown  order-6">\r
<a class="dropdown-item dropdown-toggle" href="construction.php?name=Construction">Construction</a>\r
<ul class="dropdown-menu">\r
<li><a class="dropdown-item" href="construction.php?name=Construction">Construction Work</a>\r
\r
</li>\r
<li><a class="dropdown-item" href="construction.php?name=Elevation">Elevation Design</a>\r
\r
</li>\r
</ul>\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-7">\r
<a class="dropdown-item dropdown-toggle" href="gallery.php">Gallery</a>\r
\r
</li>\r
<li class="dropdown order-8">\r
<a class="dropdown-item dropdown-toggle" href="contact.php">Contact Us</a>\r
\r
</li>\r
<li class="d-none d-lg-flex order-5 px-4">\r
<span class="header-logo border-0">\r
<a href="index.php">\r
<img alt="EZ" width="100" height="75" src="img/logo-small.png">\r
</a>\r
</span>\r
</li>\r
\r
</ul>\r
</nav>\r
</div>\r
</div>\r
</div>\r
<div class="header-column justify-content-end">\r
<div class="header-button d-none d-sm-flex border-right-0 px-2 px-xl-4">\r
</div>\r
<button class="header-btn-collapse-nav header-btn-collapse-nav-light on-sticky-dark mx-3 collapsed" data-toggle="collapse" data-target=".header-nav-main nav" aria-expanded="false">\r
<span class="hamburguer">\r
<span></span>\r
<span></span>\r
<span></span>\r
</span>\r
<span class="close">\r
<span></span>\r
<span></span>\r
</span>\r
</button>\r
</div>\r
</div>\r
</div>\r
</header>\r
\r
\r
<style>\r
.icon-box.icon-box-style-4 .icon-box-icon, .icon-box.icon-box-style-7 .icon-box-icon {\r
        padding: 1.3rem;\r
}\r
.text-color-light1 {\r
    color: white!important;\r
}\r
.layer-border-1 {\r
    border: 5px solid #ffffff;\r
}\r
.text-color-dark1 {\r
    color: #ffffff!important;\r
}\r
html .bg-primary:not(.no-skin) {\r
    background-color: #f1f3f7!important;\r
}\r
</style>\r
<div role="main" class="main">\r
<div class="slider-container slider-container-height rev_slider_wrapper">\r
<div id="revolutionSlider" class="slider rev_slider" data-version="5.4.8" data-plugin-revolution-slider data-plugin-options="{'delay': 9000, 'gridwidth': [1140,960,720,540], 'gridheight': [440,440,430,600], 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,576], 'navigation' : {'arrows': { 'enable': true, 'hide_under': 767, 'style': 'slider-arrows-style-1' }, 'bullets': {'enable': true, 'hide_under': 767, 'hide_onleave': false, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 110, 'h_offset': 0}}}">\r
<ul>\r
<li data-transition="slidingoverlayhorizontal" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-rotate="0" data-saveperformance="off">\r
<img src="img/Slider 1.jpg" styl alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg">\r
<div class="tp-caption text-color-dark1 font-primary font-weight-bold" data-frames='[{"from":"y:[-50%];opacity:0;","speed":1500,"to":"o:1;","delay":1100,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]' data-x="['52','2','2','22']" data-y="center" data-voffset="['-50','-50','-50','-50']" data-fontsize="['23','23','23','23']">CONCEPT & DESIGN ARCHITECTURE-INTERIOR  </div>\r
<h1 class="tp-caption text-color-dark1 font-weight-bold" data-frames='[{"from":"y:[-20%];opacity:0;","speed":1500,"to":"o:1;","delay":1200,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]' data-x="['50','0','0','20']" data-y="center" data-fontsize="['60','60','50','40']" data-lineheight="['65','65','55','45']">INTERIOR WORKS</h1>\r
<div class="tp-caption text-color-dark1 font-primary font-weight" data-frames='[{"from":"y:[-50%];opacity:0;","speed":1500,"to":"o:1;","delay":1300,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]' data-x="['388','338','225','22']" data-y="center" data-voffset="['60','60','60','50']" data-fontsize="['35','35','35','35']">WORLD-CLASS TECHNOLOGY</div>\r
</li>\r
<li data-transition="slidingoverlayhorizontal" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-rotate="0" data-saveperformance="off">\r
<img src="img/Slider 2.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg">\r
<!--<div class="tp-caption layer-border-1" data-x="center" data-y="center" data-width="['780','780','650','500']" data-height="200" data-start="1900" data-transform_in="opacity:0;s:500;" data-transform_out="opacity:0;s:500;"></div>-->\r
<div class="tp-caption text-color-light1 font-primary font-weight-bold" data-frames='[{"from":"y:[-50%];opacity:0;","speed":1500,"to":"o:1;","delay":1100,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]' data-x="center" data-hoffset="['-225','-225','-172','-120']" data-y="center" data-voffset="['-30','-30','-30','-30']" data-fontsize="['23','23','23','23']" style="color:white;"><span style="color:white; padding-left:99px;font-size:12px;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR  </span></div>\r
<div class="tp-caption text-color-light1 font-primary font-weight-bold" data-frames='[{"from":"y:[-50%];opacity:0;","speed":1500,"to":"o:1;","delay":1100,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]' data-x="center" data-y="center" data-voffset="['20','20','20','20']" data-fontsize="['60','60','50','40']" data-lineheight="['65','65','55','45']" data-mask_in="x:0px;y:0px;">CONSTRUCTION WORKS</div>\r
<div class="tp-caption text-color-primary layer-bg-color-1 font-quaternary" data-frames='[{"from":"y:[-50%];opacity:0;","speed":1500,"to":"o:1;","delay":1100,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]' data-x="center" data-hoffset="['190','190','158','130']" data-y="center" data-voffset="['95','95','95','95']" data-fontsize="['25','25','27','27']" data-paddingtop="0" data-paddingbottom="0" data-paddingleft="16" data-paddingright="16" style="font-size:20px;">Get Started!</div>\r
</li>\r
<li data-transition="slidingoverlayhorizontal" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-rotate="0" data-saveperformance="off">\r
<img src="img/Slider 4.jpg" styl alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg">\r
\r
\r
</li>\r
<li data-transition="slidingoverlayhorizontal" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-rotate="0" data-saveperformance="off">\r
<img src="img/Slider 3.jpg" styl alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg">\r
</li>\r
</ul>\r
</div>\r
</div>\r
<section class="section bg-light">\r
<div class="container">\r
<div class="row mt-1">\r
<div class="col-md-4 mb-5 mb-md-0">\r
<div class="card border-0 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="300">\r
<div class="card-body p-0">\r
<div class="image-frame image-frame-style-3">\r
<img src="img/generic/generic-wide-1.jpg" class="img-fluid" alt="">\r
</div>\r
<div class="icon-box icon-box-style-8 icon-box-pull-top position-relative">\r
<div class="icon-box-icon bg-light border-0 border-radius-0 w-50 mb-1">\r
<img src="https://img.icons8.com/ultraviolet/80/4a90e2/mobile-home.png"/>\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h2 class="text-4">DESIGN</h2>\r
</div>\r
<p> we tend to navigate the project through all statutory approval processes and develop the elaborate field design for competitive evaluation by contractors.</p>\r
<a href="about.php" class="btn btn-link font-weight-semibold text-decoration-none align-items-center text-0 d-inline-flex">VIEW MORE <i class="fas fa-angle-right text-3 ml-3"></i></a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="col-md-4 mb-5 mb-md-0">\r
<div class="card border-0 appear-animation" data-appear-animation="fadeInUpShorter">\r
<div class="card-body p-0">\r
<div class="image-frame image-frame-style-3">\r
<img src="img/generic/generic-wide-2.jpg" class="img-fluid" alt="">\r
</div>\r
<div class="icon-box icon-box-style-8 icon-box-pull-top position-relative">\r
<div class="icon-box-icon bg-light border-0 border-radius-0 w-50 mb-1">\r
<img src="https://img.icons8.com/ultraviolet/80/4a90e2/brick-wall.png"/>\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h2 class="text-4">BUILD</h2>\r
</div>\r
<p>CONCEPT & DESIGN ARCHITECTURE-INTERIOR  's skilled project management team oversee the implementation of the design during the construction phase.</p>\r
<a href="about.php" class="btn btn-link font-weight-semibold text-decoration-none align-items-center text-0 d-inline-flex">VIEW MORE <i class="fas fa-angle-right text-3 ml-3"></i></a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="col-md-4">\r
<div class="card border-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="300">\r
<div class="card-body p-0">\r
<div class="image-frame image-frame-style-3">\r
<img src="img/generic/generic-wide-3.jpg" class="img-fluid" alt="">\r
</div>\r
<div class="icon-box icon-box-style-8 icon-box-pull-top position-relative">\r
<div class="icon-box-icon bg-light border-0 border-radius-0 w-50 mb-1">\r
<img src="https://img.icons8.com/ultraviolet/80/4a90e2/live-photos.png"/>\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h2 class="text-4">LIVE</h2>\r
</div>\r
<p>It is time to move in! Our experienced team ensure the handover process is as smooth as possible and are on hand to assist with any teething issues.</p>\r
<a href="about.php" class="btn btn-link font-weight-semibold text-decoration-none align-items-center text-0 d-inline-flex">VIEW MORE <i class="fas fa-angle-right text-3 ml-3"></i></a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>\r
\r
<section class="section pt-5">\r
<div class="container container-lg-custom mt-3">\r
<div class="row justify-content-center text-center">\r
<div class="col-lg-10 col-xl-8">\r
<div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-duration="700ms">\r
<span class="top-sub-title">WORK SELECTION</span>\r
<h2 class="font-weight-extra-bold line-height-1 mb-3">Our Latest Works</h2>\r
</div>\r
<p class="lead mb-5 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200"> Our team of masterly craftsmen can offer commercial, residential & industrial construction, remodeling, renovation, and corresponding style and attending to the solicitor by optimising each time and resources. </p>\r
</div>\r
</div>\r
<div class="row align-items-center mb-4">\r
<div class="col-md-8 col-lg-9 appear-animation" data-appear-animation="fadeInLeftShorter">\r
<ul id="portfolioLoadMoreFilter" class="nav sort-source justify-content-center justify-content-md-start mb-4 mb-md-0" data-sort-id="portfolio" data-option-key="filter" data-plugin-options="{'layoutMode': 'fitRows', 'filter': '*'}">\r
<li class="nav-item" data-option-value="*"><a class="nav-link active" href="#">Show All</a></li>\r
<li class="nav-item" data-option-value=".brands"><a class="nav-link text-capitalize" href="#">Residential</a></li>\r
<li class="nav-item" data-option-value=".design"><a class="nav-link text-capitalize" href="#">Commercial</a></li>\r
<li class="nav-item" data-option-value=".web"><a class="nav-link text-capitalize" href="#">Hospital</a></li>\r
<li class="nav-item" data-option-value=".ads"><a class="nav-link text-capitalize" href="#">Office</a></li>\r
</ul>\r
</div>\r
<div class="col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end appear-animation" data-appear-animation="fadeInRightShorter">\r
<a href="gallery.php" class="btn btn-outline btn-rounded btn-4 btn-primary font-weight-bold">View All Works</a>\r
</div>\r
</div>\r
<div class="row">\r
<div class="col-12">\r
<div class="sort-destination-loader sort-destination-loader-showing mb-4">\r
<div id="portfolioLoadMoreWrapper" class="portfolio-list sort-destination" data-sort-id="portfolio" data-ajax-url="ajax/portfolio-overlay-ajax-load-more.html" data-total-pages="3">\r
<div class="col-md-6 col-lg-4 p-0 isotope-item brands">\r
<div class="portfolio-item hover-effect-3d appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY' : -50}">\r
<a href="gallery.php">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="img/projects/generic/1.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
\r
\r
\r
</span>\r
</span>\r
</span>\r
</span>\r
</a>\r
</div>\r
</div>\r
<div class="col-md-6 col-lg-4 p-0 isotope-item ads">\r
<div class="portfolio-item hover-effect-3d appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY' : -50}">\r
<a href="gallery.php">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="img/projects/generic/2.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
\r
\r
\r
</span>\r
</span>\r
</span>\r
</span>\r
</a>\r
</div>\r
</div>\r
<div class="col-md-6 col-lg-4 p-0 isotope-item ads">\r
<div class="portfolio-item hover-effect-3d appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY' : -50}">\r
<a href="gallery.php">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="img/projects/generic/3.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
\r
\r
\r
</span>\r
</span>\r
</span>\r
</span>\r
</a>\r
</div>\r
</div>\r
<div class="col-md-6 col-lg-4 p-0 isotope-item web">\r
<div class="portfolio-item hover-effect-3d appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY' : -50}">\r
<a href="gallery.php">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="img/projects/generic/4.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
\r
\r
\r
</span>\r
</span>\r
</span>\r
</span>\r
</a>\r
</div>\r
</div>\r
<div class="col-md-6 col-lg-4 p-0 isotope-item web">\r
<div class="portfolio-item hover-effect-3d appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY' : -50}">\r
<a href="gallery.php">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="img/projects/generic/5.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
\r
\r
\r
</span>\r
</span>\r
</span>\r
</span>\r
</a>\r
</div>\r
</div>\r
<div class="col-md-6 col-lg-4 p-0 isotope-item design">\r
<div class="portfolio-item hover-effect-3d appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY' : -50}">\r
<a href="gallery.php">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="img/projects/generic/6.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
\r
\r
\r
</span>\r
</span>\r
</span>\r
</span>\r
</a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="col-12 d-flex justify-content-center">\r
<div id="portfolioLoadMoreLoader" class="portfolio-load-more-loader">\r
<div class="bounce-loader">\r
<div class="bounce1"></div>\r
<div class="bounce2"></div>\r
<div class="bounce3"></div>\r
</div>\r
</div>\r
\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section pb-0">\r
<div class="container">\r
<div class="row text-center pb-2 mb-4">\r
<div class="col">\r
<div class="overflow-hidden">\r
<span class="top-sub-title text-color-primary d-block appear-animation" data-appear-animation="maskUp">LOREM IPSUM DOLOR SIT</span>\r
</div>\r
<div class="overflow-hidden">\r
<h2 class="font-weight-bold appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">Services & Features</h2>\r
</div>\r
<div class="overflow-hidden">\r
<p class="lead appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">From concept to completion, the CD Architecture  team will be there to guide you through every stage of your project.</p>\r
</div>\r
</div>\r
</div>\r
<div class="row justify-content-center pb-5 mb-5">\r
<div class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-1-5 mb-4">\r
<div class="card card-style-2 card-style-3 bg-light-5 border-0 text-center appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="200">\r
<div class="card-body p-4">\r
<img src="https://img.icons8.com/nolan/120/room.png"/>\r
<h3 class="font-weight-bold text-2 mt-2">RESDENTIAL</h3>\r
</div>\r
</div>\r
</div>\r
<div class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-1-5 mb-4">\r
<div class="card card-style-2 card-style-3 bg-light-5 border-0 text-center appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="200">\r
<div class="card-body p-4">\r
<img src="https://img.icons8.com/nolan/120/commercial.png"/>\r
<h3 class="font-weight-bold text-2 ws-nowrap mt-2">COMMERCIAL</h3>\r
</div>\r
</div>\r
</div>\r
<div class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-1-5 mb-4">\r
<div class="card card-style-2 card-style-3 bg-light-5 border-0 text-center appear-animation" data-appear-animation="fadeInUpShorter">\r
<div class="card-body p-4">\r
<img src="https://img.icons8.com/nolan/120/hospital-2.png"/>\r
<h3 class="font-weight-bold text-2 mt-2">HOSPITAL</h3>\r
</div>\r
</div>\r
</div>\r
<div class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-1-5 mb-4 mb-md-0">\r
<div class="card card-style-2 card-style-3 bg-light-5 border-0 text-center appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">\r
<div class="card-body p-4">\r
<img src="https://img.icons8.com/nolan/120/office-chair-2.png"/>\r
<h3 class="font-weight-bold text-2 mt-2">OFFICE</h3>\r
</div>\r
</div>\r
</div>\r
<div class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-1-5">\r
<div class="card card-style-2 card-style-3 bg-light-5 border-0 text-center appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">\r
<div class="card-body p-4">\r
<img src="https://img.icons8.com/nolan/120/mobile-shopping-bag.png"/>\r
<h3 class="font-weight-bold text-2 mt-2">STALL</h3>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="row align-items-center">\r
<div class="col-md-6 col-lg-4">\r
<div class="icon-box icon-box-style-4 mb-4 mb-lg-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">\r
<div class="icon-box-icon bg-primary">\r
<img src="https://img.icons8.com/ios/50/000000/construction-worker.png"/>\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h4 class="text-2">CONSTRUCTION WORKS</h4>\r
</div>\r
<p style="text-align:justify;">The goal is to supply an expert bit to construction services that exceeds client expectations. </p>\r
</div>\r
</div>\r
<div class="icon-box icon-box-style-4 mb-4 mb-lg-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">\r
<div class="icon-box-icon bg-primary">\r
<img src="https://img.icons8.com/ios/50/000000/craft-work.png"/>\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h4 class="text-2">ELEVATION WORKS</h4>\r
</div>\r
<p style="text-align:justify;">Architects also use the word elevation as a synonym for façade, so the "north elevation" is the north-facing wall of the building. </p>\r
</div>\r
</div>\r
</div>\r
<div class="col-md-6 col-lg-4">\r
<div class="icon-box icon-box-style-4 mb-4 mb-lg-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">\r
<div class="icon-box-icon bg-primary">\r
<img src="https://img.icons8.com/windows/32/000000/work-light.png"/>\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h4 class="text-2">RESDENTIAL INTERIORS</h4>\r
</div>\r
<p style="text-align:justify;">Residential interior designers plan and design the interior elements of homes for comfort, style and function. </p>\r
</div>\r
</div>\r
<div class="icon-box icon-box-style-4 mb-4 mb-lg-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">\r
<div class="icon-box-icon bg-primary">\r
<img src="https://img.icons8.com/android/50/000000/commercial--v2.png"/>\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h4 class="text-2">COMMERCIAL INTERIORS</h4>\r
</div>\r
<p style="text-align:justify;">A commercial interior designer is a professional who will create and direct the construction or renovation of commercial spaces.  </p>\r
</div>\r
</div>\r
</div>\r
<div class="col-lg-4 text-center text-lg-right pr-md-0 overflow-hidden">\r
<img src="img/projects/generic/2.jpg" class="img-fluid appear-animation" alt="" data-appear-animation="fadeInUpShorter" />\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section">\r
<div class="container container-lg-custom mb-3">\r
<div class="row">\r
<div class="col-md-6 mb-4 mb-md-0">\r
<div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="100">\r
<span class="top-sub-title">THE RIGHT CHOICE</span>\r
<h2 class="word-rotator letters type font-weight-extra-bold text-6 mb-3">\r
<span>CD Arch It's easier than you</span>\r
<span class="word-rotator-words waiting">\r
<b class="is-visible">think.</b>\r
<b>believe.</b>\r
<b>dreamed.</b>\r
</span>\r
</h2>\r
</div>\r
<p class="lead text-4 font-weight-light pr-md-4 mb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300" style="text-align:justify;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR  is an Construction , Architecture ,Interior Design company dedicated to providing our clients with creative concepts, high-quality work and flawless execution. We tailor each project to our clients individual tastes and budgets.</p>\r
<p class="text-alternative-style font-weight-normal text-3 mb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500" style="text-align:justify;">We maintain a friendly, fair and creative work and good environment. We welcome new ideas and work hard. We provide quality goods, services and excellent customer service.</p>\r
<a href="about.php" class="btn btn-outline btn-rounded btn-primary btn-4 font-weight-bold mt-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">More About Us</a>\r
</div>\r
<div class="col-10 col-md-5 mx-auto ml-md-auto appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500">\r
<div class="particles d-flex align-items-center pr-0 pr-lg-3 pr-xl-5">\r
<svg class="svg-particles d-none d-sm-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493.72 405.79">\r
<g class="g-particles g-particles-group-1 appear-animation" data-appear-animation="expandParticles" data-appear-animation-delay="500">\r
<line class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" x1="150.28" y1="108.35" x2="159.03" y2="102.1" />\r
<line class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" x1="325.51" y1="118.98" x2="334.26" y2="112.73" />\r
<line class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" x1="483.33" y1="94.52" x2="492.08" y2="88.27" />\r
<line class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" x1="321.14" y1="279.22" x2="329.89" y2="272.97" />\r
<line class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" x1="148.47" y1="279.22" x2="157.22" y2="272.97" />\r
<line class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" x1="11.14" y1="305.17" x2="19.89" y2="298.92" />\r
</g>\r
<g class="g-particles g-particles-group-2 appear-animation" data-appear-animation="expandParticles" data-appear-animation-delay="800">\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M51.78,105.64s-.37-12.75,5.25-3.5.38,7.13,0,7.13" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M229.34,103.24s-.37-12.75,5.25-3.5.38,7.12,0,7.12" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M401,103.24s-.37-12.75,5.25-3.5.38,7.12,0,7.12" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M401,274.1s-.37-12.75,5.25-3.5.38,7.13,0,7.13" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M227.33,276.14s-.37-12.75,5.25-3.5.38,7.13,0,7.13" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M55.49,276.14s-.37-12.75,5.25-3.5.38,7.13,0,7.13" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M97.76,41.59s-2.5,4.83,2.83,2.33.67,2.67.67,2.67" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M448.14,22.85s-2.5,4.83,2.83,2.33.67,2.67.67,2.67" transform="translate(-3.14 -1.85)" />\r
<path class="cls-1" fill="none" stroke="#969da0" stroke-miterlimit="10" d="M246,44.18s.1,5.85,4.41-.28,2.26,1.66,2.26,1.66" transform="translate(-3.14 -1.85)" />\r
</g>\r
<g class="g-particles g-particles-group-3 appear-animation" data-appear-animation="expandParticles" data-appear-animation-delay="1100">\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="4.77" cy="151" r="1.14" transform="translate(-108.51 45.76) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="149.72" cy="30.16" r="1.14" transform="translate(19.39 112.85) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="304.7" cy="3.48" r="1.14" transform="translate(83.64 214.63) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="495.22" cy="155.04" r="1.14" transform="translate(32.28 393.74) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="315.2" cy="163.8" r="1.14" transform="translate(-26.64 269.01) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="153.42" cy="344.7" r="1.14" transform="translate(-201.94 207.59) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="249.61" cy="406" r="1.14" transform="translate(-217.11 293.57) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="313.32" cy="336.94" r="1.14" transform="translate(-149.62 318.39) rotate(-45)" />\r
<circle class="cls-2" fill="#969da0" stroke="#969da0" cx="148.58" cy="172.2" r="1.14" transform="translate(-81.38 153.65) rotate(-45)" />\r
</g>\r
<g class="g-particles g-particles-group-4 appear-animation" data-appear-animation="expandParticles" data-appear-animation-delay="1400">\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="200.87 18.34 197.2 18.34 199.03 21" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="179.66 368.64 180.47 364.7 176.12 365.86" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="369.87 368.64 370.67 364.7 366.31 365.86" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="369.31 5.73 371.83 1.9 367.27 1.65" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="217.7 153.19 210.32 153.19 214.01 158.56" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="385.03 153.19 377.66 153.19 381.34 158.56" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="385.03 324.15 377.66 324.15 381.34 329.52" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="213.01 324.15 205.64 324.15 209.32 329.52" />\r
<polyline class="cls-3" fill="none" stroke="#969da0" points="52.35 324.15 44.98 324.15 48.66 329.52" />\r
</g>\r
<g class="g-particles g-particles-group-5 appear-animation" data-appear-animation="expandParticles" data-appear-animation-delay="1700">\r
<path class="cls-4" fill="none" stroke="#969da0" d="M264.48,188.12s-4,8.83,3.33,6.17,5.67-.5,5.67-.5-1.33,3.67-2.17,3.5" transform="translate(-3.14 -1.85)" />\r
<path class="cls-4" fill="none" stroke="#969da0" d="M444.52,179.07s-4,8.83,3.33,6.17,5.67-.5,5.67-.5-1.33,3.67-2.17,3.5" transform="translate(-3.14 -1.85)" />\r
<path class="cls-4" fill="none" stroke="#969da0" d="M94.23,196.91s-4,8.83,3.33,6.17,5.67-.5,5.67-.5-1.33,3.67-2.17,3.5" transform="translate(-3.14 -1.85)" />\r
<path class="cls-4" fill="none" stroke="#969da0" d="M92.81,369.86s-2.63,6.55,2.19,4.57,3.73-.37,3.73-.37-.88,2.72-1.43,2.6" transform="translate(-3.14 -1.85)" />\r
<path class="cls-4" fill="none" stroke="#969da0" d="M269.94,368.71c.06-.09,3.2,5.44,4.68,2,2-4.8,2.54-2.76,2.54-2.76s1.15,2.61.66,2.89" transform="translate(-3.14 -1.85)" />\r
</g>\r
<g class="g-particles g-particles-group-6 appear-animation" data-appear-animation="expandParticles" data-appear-animation-delay="2000">\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="8.58 76.55 13.71 78.42 12.58 72.8" />\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="8.58 228.65 13.71 230.53 12.58 224.9" />\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="178.55 238.99 183.68 240.86 182.55 235.24" />\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="349.47 240.53 354.59 242.4 353.47 236.78" />\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="338.72 402.28 343.84 404.15 342.72 398.53" />\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="147.72 399.46 152.84 401.34 151.72 395.71" />\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="482.39 209.27 485.95 213.4 487.71 207.94" />\r
<polyline class="cls-5" fill="#969da0" stroke="#969da0" points="349.58 66.58 354.83 68.06 353.29 62.54" />\r
</g>\r
</svg>\r
<div class="particles-rect bg-primary d-none d-md-block" data-plugin-float-element data-plugin-options="{'startPos': 'top', 'speed': 4, 'transition': true}"></div>\r
<img src="img/generic/01.jpg" class="img-fluid box-shadow-5" alt="" data-plugin-float-element data-plugin-options="{'startPos': 'top', 'speed': 4, 'horizontal': true, 'transition': true}" />\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>\r
<div class="parallax section section-height-3 section-text-light  overlay overlay-color-dark overlay-show overlay-op-5" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/banner_home.jpg">\r
    <!---curved-border curved-border-style-2 -->\r
<div class="container container-lg-custom pb-4 mb-md-5">\r
<div class="counters counters-light">\r
<div class="row">\r
<div class="col-sm-6 col-lg-3">\r
<div class="counter">\r
<strong data-to="18000" data-append="+">0</strong>\r
<label class="font-weight-light">Happy Clients</label>\r
</div>\r
</div>\r
<div class="col-sm-6 col-lg-3">\r
<div class="counter">\r
<strong data-to="16">0</strong>\r
<label class="font-weight-light">Pre-made Demos</label>\r
</div>\r
</div>\r
<div class="col-sm-6 col-lg-3">\r
<div class="counter">\r
<strong data-to="3500" data-append="+">0</strong>\r
<label class="font-weight-light">Answered Tickets</label>\r
</div>\r
</div>\r
<div class="col-sm-6 col-lg-3">\r
<div class="counter">\r
<strong data-to="3000" data-append="+">0</strong>\r
<label class="font-weight-light">Development Hours</label>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<!--<div class="section bg-light-5 pt-0">\r
<div class="container-fluid pt-5 pt-md-0 pt-lg-5 pt-xl-0">\r
<div class="row text-center">\r
<div class="col">\r
<span class="top-sub-title">WHAT THEY SAY</span>\r
<h2 class="font-weight-extra-bold line-height-1 mb-3">We Are Not Alone</h2>\r
<p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.</p>\r
</div>\r
</div>\r
<div class="row">\r
<div class="col-9 col-md-12 mx-auto double-carousel double-carousel-style-1" data-plugin-double-carousel data-plugin-options="{'autoplay': false, 'responsive': { '0': {'items': 1}, '479': {'items': 1}, '768': {'items': 1, 'dotsEach': 3}, '979': {'items': 2}, '1199': {'items': 3}}}">\r
<div class="nav bg-light-5">\r
<div class="title-left">\r
<span>Testimonials <span>&</span></span>\r
</div>\r
<div class="title-right">\r
<span>Partners</span>\r
</div>\r
<div class="arrows">\r
<div class="arrow-left">\r
<i class="fas fa-chevron-left text-2"></i>\r
</div>\r
<div class="arrow-right">\r
<i class="fas fa-chevron-right text-2"></i>\r
</div>\r
</div>\r
</div>\r
<div class="wrapper-left appear-animation" data-appear-animation="doubleCarouselFadeInRight">\r
<div class="owl-carousel owl">\r
<div>\r
<div class="testimonial testimonial-style-3">\r
<div class="card rounded border-0">\r
<div class="card-body p-4">\r
<div class="text-primary text-0 mb-1">\r
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>\r
</div>\r
<p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
<strong class="text-color-dark font-italic">John Doe</strong>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="testimonial testimonial-style-3">\r
<div class="card rounded border-0">\r
<div class="card-body p-4">\r
<div class="text-primary text-0 mb-1">\r
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>\r
</div>\r
<p class="mb-1">Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
<strong class="text-color-dark font-italic">Bob Doe</strong>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="testimonial testimonial-style-3">\r
<div class="card rounded border-0">\r
<div class="card-body p-4">\r
<div class="text-primary text-0 mb-1">\r
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>\r
</div>\r
<p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
<strong class="text-color-dark font-italic">Monica Doe</strong>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="testimonial testimonial-style-3">\r
<div class="card rounded border-0">\r
<div class="card-body p-4">\r
<div class="text-primary text-0 mb-1">\r
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>\r
</div>\r
<p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
<strong class="text-color-dark font-italic">Greg Doe</strong>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="testimonial testimonial-style-3">\r
<div class="card rounded border-0">\r
<div class="card-body p-4">\r
<div class="text-primary text-0 mb-1">\r
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>\r
</div>\r
<p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
<strong class="text-color-dark font-italic">Robert Doe</strong>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="testimonial testimonial-style-3">\r
<div class="card rounded border-0">\r
<div class="card-body p-4">\r
<div class="text-primary text-0 mb-1">\r
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>\r
</div>\r
<p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
<strong class="text-color-dark font-italic">Greg Doe</strong>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="testimonial testimonial-style-3">\r
<div class="card rounded border-0">\r
<div class="card-body p-4">\r
<div class="text-primary text-0 mb-1">\r
<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>\r
</div>\r
<p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
<strong class="text-color-dark font-italic">Robert Doe</strong>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="wrapper-right appear-animation" data-appear-animation="doubleCarouselFadeInLeft">\r
<div class="owl-carousel owl">\r
<div>\r
<div class="card card-logo rounded border-0">\r
<div class="card-body p-0">\r
<img src="img/logos/logo-2.png" class="img-fluid" alt="" />\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="card card-logo rounded border-0">\r
<div class="card-body p-0">\r
<img src="img/logos/logo-3.png" class="img-fluid" alt="" />\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="card card-logo rounded border-0">\r
<div class="card-body p-0">\r
<img src="img/logos/logo-5.png" class="img-fluid" alt="" />\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="card card-logo rounded border-0">\r
<div class="card-body p-0">\r
<img src="img/logos/logo-6.png" class="img-fluid" alt="" />\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="card card-logo rounded border-0">\r
<div class="card-body p-0">\r
<img src="img/logos/logo-7.png" class="img-fluid" alt="" />\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="card card-logo rounded border-0">\r
<div class="card-body p-0">\r
<img src="img/logos/logo-8.png" class="img-fluid" alt="" />\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="card card-logo rounded border-0">\r
<div class="card-body p-0">\r
<img src="img/logos/logo-9.png" class="img-fluid" alt="" />\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<section class="section section-content-pull-top-2">\r
<div class="container pb-4 appear-animation" data-appear-animation="fadeInUpShorter">\r
<div class="row mt-3">\r
<div class="col">\r
<div class="row justify-content-center text-center">\r
<div class="col-lg-9">\r
<span class="top-sub-title">PROFESSIONAL TOOLS</span>\r
<h2 class="font-weight-extra-bold line-height-1 mb-3">Amazing Features</h2>\r
<p class="lead pb-3 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>\r
</div>\r
</div>\r
<div class="row align-items-baseline">\r
<div class="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="300" data-plugin-options="{'accY' : -50}">\r
<h3 class="font-weight-bold d-flex align-items-center text-4 pl-1 mb-2">\r
<i class="lnr lnr-tablet text-color-primary text-6 pr-1 mr-2"></i>\r
Responsive Design\r
</h3>\r
<p class="pb-3 mb-md-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>\r
</div>\r
<div class="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY' : -50}">\r
<h3 class="font-weight-bold d-flex align-items-center text-4 pl-1 mb-2">\r
<i class="lnr lnr-layers text-color-primary text-6 pr-1 mr-2"></i>\r
Parallax Effect\r
</h3>\r
<p class="pb-3 mb-md-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>\r
</div>\r
<div class="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="300" data-plugin-options="{'accY' : -50}">\r
<h3 class="font-weight-bold d-flex align-items-center text-4 pl-1 mb-2">\r
<i class="lnr lnr-magnifier text-color-primary text-6 pr-1 mr-2"></i>\r
SEO Optimized\r
</h3>\r
<p class="pb-3 mb-md-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>\r
</div>\r
<div class="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="700" data-plugin-options="{'accY' : -50}">\r
<h3 class="font-weight-bold d-flex align-items-center text-4 pl-1 mb-2">\r
<i class="lnr lnr-magic-wand text-color-primary text-6 pr-1 mr-2"></i>\r
Fully Customizable\r
</h3>\r
<p class="pb-3 mb-md-5 mt-3">Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
</div>\r
<div class="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400" data-plugin-options="{'accY' : -50}">\r
<h3 class="font-weight-bold d-flex align-items-center text-4 pl-1 mb-2">\r
<i class="lnr lnr-briefcase icon-pos-fix-1 text-color-primary text-6 pr-1 mr-2"></i>\r
Portfolio Layouts\r
</h3>\r
<p class="pb-3 mb-md-5 mt-3">Blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
</div>\r
<div class="col-md-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="700" data-plugin-options="{'accY' : -50}">\r
<h3 class="font-weight-bold d-flex align-items-center text-4 pl-1 mb-2">\r
<i class="lnr lnr-code text-color-primary text-6 pr-1 mr-2"></i>\r
Optimized Code\r
</h3>\r
<p class="pb-3 mb-md-5 mt-3">Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section call-to-action bg-primary call-to-action-text-light call-to-action-text-background">\r
<span class="text-background text-color-light font-primary font-weight-bold appear-animation" data-appear-animation="textBgFadeInUp" data-appear-animation-delay="800">IT'S EASY</span>\r
<div class="container container-lg-custom">\r
<div class="row">\r
<div class="col-lg-9 mb-md-4 mb-lg-0">\r
<div class="call-to-action-content text-center text-lg-left w-100 appear-animation" data-appear-animation="fadeInLeftShorter">\r
<h2 class="font-weight-extra-bold">Discover EZY. It's easier than you think.</h2>\r
<p class="font-weight-extra-light mb-0">Start right now to create an amazing website.</p>\r
</div>\r
</div>\r
<div class="col-lg-3 justify-content-center justify-content-lg-start">\r
<div class="call-to-action-btn appear-animation" data-appear-animation="fadeInRightShorter">\r
<a href="https://themeforest.net/item/ezy-responsive-multipurpose-html5-template/21814871" target="_blank" class="btn btn-light btn-rounded font-weight-extra-bold btn-5 text-3 letter-spacing-n1">Buy EZY Now</a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>-->\r
</div>\r
<style>\r
.list>li>a:hover{\r
    color: orange;\r
    border-color: #fff;\r
}\r
.link-color-light11 {\r
    color: #6c6d6e!important;\r
}\r
</style>\r
<hr>\r
<footer id="footer" class="footer footer-hover-links-light mt-0">\r
<div class="container container-lg-custom">\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
<div class="row">\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
    <h4 class="font-weight-bold text-4-5 pb-1 mb-3">About Us</h4>\r
\r
<!--<img src="img/cd_logo1.jpg" class="img-fluid mb-lg-5" width="92" height="35" alt="EZY Website Template">-->\r
 <ul class="list list-unstyled">\r
<li class=" pb-1 mb-2" style="text-align:justify;">Founded in 2002, CONCEPT & DESIGN ARCHITECTURE-INTERIOR provides one stop Construction , Architecture and interiors solutions in Erode and other cities.\r
" Our speciality is low cost, high style decorating. We love budget's and work very hard to find the perfect affordable pieces while still keeping the integrity of the design".\r
</li>\r
</ul>\r
</div>\r
\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Useful Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
\r
<li>\r
<a href="gallery.php#resi">Resdential</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#commer">Commercial</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#hosp">Hospital</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Construction</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Elevation</a>\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Quick Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
<li>\r
<a href="index.php">Home</a>\r
\r
</li>\r
<li>\r
<a href="about.php">About Us</a>\r
\r
</li>\r
<!--<li>\r
<a href="service.php">Services</a>\r
\r
</li>-->\r
<li>\r
<a href="gallery.php">Gallery</a>\r
\r
</li>\r
<li>\r
<a href="contact.php">Contact Us</a>\r
\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Get In Touch</h4>\r
<ul class="list list-unstyled" style="text-align:justify;">\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">ADDRESS</span>16/1,Kumarasamy Street (WD -43) Near Maya Bazaar Restaurant, Erode-638001</li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">PHONE</span> <a href="tel:+919626660910" class="link-color-light11">+91 96266 60910, +91 98651 43167 </a></li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">EMAIL</span> <a href="" class="link-color-light11"><span class="__cf_email__" data-cfemail="">info@cdarch.in<br>cd.gopal12@gmail.com</span></a></li>\r
<!--<li class="text-color-light pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">WORKING DAYS/HOURS</span> Mon - Sat / 9:00AM - 8:00PM</li>\r
</ul>\r
<ul class="social-icons social-icons-icon-dark social-icons-lg">\r
<li class="social-icons-instagram"><a href="https://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>\r
<li class="social-icons-twitter mx-2"><a href="https://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>\r
<li class="social-icons-facebook"><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>\r
--></ul>\r
</div>\r
</div>\r
</div>\r
<div class="footer-copyright footer-copyright-container-border-top footer-copyright-container-border-top-opacity">\r
   <div class="container">  \r
                    <div class="row text-center text-md-left align-items-center">\r
          \r
            <div class="col-md-5 col-lg-6"> \r
            <p class="text-md-left pb-0 mb-0" style="color:white;">Design and Developed by Ulix Technology.</p>\r
                        </div>              <div class="col-md-7 col-lg-6">\r
                                <p class="text-md-right pb-0 mb-0" style="color:white;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2022. All Rights Reserved</p>\r
                                </div>  \r
                                </div>\r
                                </div>          </div>\r
                  \r
                    \r
    <!--- <div class="container">\r
   <div class="row ">\r
    \r
       <div class="col-6">\r
     <span style="color:white;float:left;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2021. All Rights Reserved</span> </div>\r
       <div class="col-6"> <span style="color:white;float:right;">Design and Developed by Ulix Technology</span></div>\r
        </div> \r
     </div> -->\r
     </div>\r
\r
</footer>\r
</div>\r
\r
<script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script><script src="vendor/jquery/jquery.min.js"><\/script>\r
<script src="vendor/jquery.appear/jquery.appear.min.js"><\/script>\r
<script src="vendor/jquery.easing/jquery.easing.min.js"><\/script>\r
<!--<script src="vendor/jquery.cookie/jquery.cookie.js"><\/script>-->\r
<script src="master/style-switcher/style.switcher.js" id="styleSwitcherScript" data-base-path="" data-skin-src=""><\/script>\r
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"><\/script>\r
<script src="vendor/common/common.min.js"><\/script>\r
<script src="vendor/jquery.validation/jquery.validate.min.js"><\/script>\r
<script src="vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"><\/script>\r
<script src="vendor/jquery.gmap/jquery.gmap.min.js"><\/script>\r
<script src="vendor/jquery.lazyload/jquery.lazyload.min.js"><\/script>\r
<script src="vendor/isotope/jquery.isotope.min.js"><\/script>\r
<script src="vendor/owl.carousel/owl.carousel.min.js"><\/script>\r
<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"><\/script>\r
<script src="vendor/vide/jquery.vide.min.js"><\/script>\r
<script src="vendor/vivus/vivus.min.js"><\/script>\r
\r
<script src="js/theme.js"><\/script>\r
\r
<script src="vendor/rs-plugin/js/jquery.themepunch.tools.min.js"><\/script> <script src="vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"><\/script>\r
\r
<script src="js/custom.js"><\/script>\r
\r
<script async src="js/theme.init.js"><\/script>\r
\r
<script src="js/examples/examples.portfolio.js"><\/script>\r
<script>\r
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');\r
    \r
      ga('create', 'UA-42715764-9', 'auto');\r
      ga('send', 'pageview');\r
    <\/script>\r
<script defer src="../../../../static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"6376972f3f0fdd12","version":"2021.3.0","r":1,"si":10}'><\/script>\r
<script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script></body>\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:17 GMT -->\r
</html>`,Gu=`<!DOCTYPE html>\r
<html lang="zxx" class="alternative-style-1">\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:01 GMT -->\r
<head>\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1736086928767831"\r
     crossorigin="anonymous"><\/script>     \r
     \r
<meta charset="utf-8">\r
<meta http-equiv="X-UA-Compatible" content="IE=edge">\r
<title>Concept Design Architecture </title>\r
   <link rel="shortcut icon" type="image/x-icon" href="../../img/logo-small.png">\r
<meta name="keywords" content="HTML5 Template" />\r
<meta name="description" content="EZY - Responsive HTML5 Template">\r
<meta name="author" content="okler.net">\r
\r
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=yes">\r
\r
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700,800,900%7CPoppins:100,200,300,400,500,600,700,800" rel="stylesheet" type="text/css">\r
\r
<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">\r
<link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css">\r
<link rel="stylesheet" href="vendor/animate/animate.min.css">\r
<link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.min.css">\r
<link rel="stylesheet" href="vendor/linear-icons/css/linear-icons.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.min.css">\r
<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css">\r
\r
<link rel="stylesheet" href="css/theme.css">\r
<link rel="stylesheet" href="css/theme-elements.css">\r
\r
<link rel="stylesheet" href="vendor/rs-plugin/css/settings.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/layers.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/navigation.css">\r
  <meta charset="utf-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1">\r
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\r
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\r
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"><\/script>\r
<link rel="stylesheet" href="css/skins/default.css"> <script src="master/style-switcher/style.switcher.localstorage.js"><\/script>\r
\r
<link rel="stylesheet" href="css/custom.css">\r
\r
<script src="vendor/modernizr/modernizr.min.js"><\/script>\r
</head>\r
<style>\r
    @media only screen and (max-width: 600px) {\r
  .mobile {\r
    font-size:10px;\r
  }\r
  .mobi{\r
      padding-left:10px;\r
  }\r
  .en{\r
      font-size:15px;\r
  }\r
  .ph{\r
      font-size:13px;\r
  }\r
}\r
</style>\r
<style>\r
#header .header-btn-collapse-nav.header-btn-collapse-nav-light .hamburguer span, #header .header-btn-collapse-nav.header-btn-collapse-nav-light .close span {\r
     background: black; \r
}\r
\r
</style>\r
<style type="text/css">\r
  @media (min-width: 992px){\r
html.alternative-style-1 #header .header-nav-main nav>ul>li>a {\r
    font-size: 1.5rem;\r
    font-weight: 500;\r
}\r
.list-infos>li.list-info-item-increase-size {\r
    font-size: 14.4px;\r
    font-size: 12px;\r
}\r
.social-icons.social-icons-2 li a {\r
    font-size: 12.8px;\r
    font-size: 12px;\r
}\r
.text-0 {\r
    font-size: 11.2px!important;\r
    font-size: 12px !important;\r
}\r
}\r
html.alternative-style-1 .top-sub-title {\r
    font-size: 11.2px!important;\r
    font-size: 12px!important;\r
    font-weight: 500;\r
    color: #999;\r
}\r
.sort-source>div>a, .sort-source>li>a {\r
    font-size: 13.6px;\r
    font-size: 12px;\r
    font-family: montserrat,sans-serif;\r
    font-weight: 600;\r
}\r
.text-2 {\r
    font-size: 14.4px!important;\r
    font-size: 12px!important;\r
}\r
.text-3 {\r
    font-size: 16px!important;\r
    font-size: 12px!important;\r
}\r
.text-4 {\r
    font-size: 17.6px!important;\r
    font-size: 12px !important;\r
}\r
.page-header {\r
    padding-bottom: 9px;\r
    margin: 0px;\r
    border-bottom: 1px solid #eee;\r
}\r
}\r
\r
</style>\r
<style type="text/css">\r
  a {\r
    color: #ffffff;\r
    text-decoration: none;\r
}\r
\r
</style>\r
<body>\r
<div class="body">\r
<header id="header" class="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 120}">\r
<div class="header-body">\r
\r
<div class="header-top">\r
<div class="header-top-container container container-lg-custom">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<ul class="list-infos">\r
<li class="list-info-item-increase-size  d-lg-flex">\r
<i class="lnr lnr-phone-handset text-color-primary font-weight-semibold mr-1 ph"></i>\r
<a href="tel:+1234567890" class="text-color-primary"><strong class="mobile">+91 96266 60910</strong></a>\r
</li>&nbsp;\r
<li class="list-info-item-increase-size  d-lg-flex mobi">\r
<i class="lnr lnr-envelope text-color-primary font-weight-semibold mr-1 en"></i>\r
<a href="https://www.okler.net/cdn-cgi/l/email-protection#1a7f777b73765a7e75777b737434797577"class="text-color-primary"  ><strong class="mobile"><!--<span class="__cf_email__" data-cfemail="87e2eae6eeebc7e3e8eae6eee9a9e4e8ea">[email&#160;protected]</span>-->cd.gopal12@gmail.com</strong></a>\r
</li>\r
<!--<li class="list-info-item-increase-icon-size">\r
<i class="icon icon-location-pin text-2 position-relative top-1 mr-1"></i>\r
1234 Street Name, City Name\r
</li>-->\r
</ul>\r
</div>\r
<div class="header-column justify-content-end">\r
<ul class="header-top-social-icons social-icons social-icons-transparent social-icons-icon-dark social-icons-2 d-md-block">\r
<li class="social-icons-instagram">\r
<a href="https://www.instagram.com/" target="_blank" class="text-color-primary"  title="Instragram"><i class="fab fa-instagram"></i></a>\r
</li>\r
<li class="social-icons-twitter">\r
<a href="https://www.twitter.com/" target="_blank" class="text-color-primary"  title="Twitter"><i class="fab fa-twitter"></i></a>\r
</li>\r
<li class="social-icons-facebook">\r
<a href="https://www.facebook.com/" target="_blank" class="text-color-primary"  title="Facebook"><i class="fab fa-facebook-f"></i></a>\r
</li>\r
</ul>\r
<!--<a href="contact.php" class="btn btn-primary btn-3 font-weight-bold text-1 rounded-0 ml-3">CONTACT US</a>-->\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="header-container p-0">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<div class="header-logo border-left-0 px-4 d-lg-none">\r
<a href="#">\r
<img src="img/logo-small-light.png" data-change-src="img/logo-small.png" width="75" height="50" alt="" />\r
</a>\r
</div>\r
<ul class="header-social-icons social-icons social-icons-transparent social-icons-icon-light border-left-0 d-none d-lg-flex px-2 px-xl-4">\r
</ul>\r
</div>\r
<div class="header-column justify-content-center">\r
<div class="header-nav justify-content-lg-center">\r
<div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">\r
<nav class="collapse">\r
<ul class="nav flex-column flex-lg-row align-items-center" id="mainNav">\r
<li class="dropdown dropdown-mega order-1">\r
<a class="dropdown-item dropdown-toggle " href="index.php">Home</a>\r
\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-2">\r
<a class="dropdown-item dropdown-toggle " href="about.php">About Us</a>\r
\r
</li>\r
<li class="dropdown order-3">\r
<a class="dropdown-item dropdown-toggle" href="interior.php?name=Residential">Interior</a>\r
<ul class="dropdown-menu">\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Residential">Residential Interior</a>\r
\r
</li>\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Commercial">Commercial Interior</a>\r
\r
</li>\r
\r
</ul>\r
</li>\r
\r
<li class="dropdown  order-6">\r
<a class="dropdown-item dropdown-toggle" href="construction.php?name=Construction">Construction</a>\r
<ul class="dropdown-menu">\r
<li><a class="dropdown-item" href="construction.php?name=Construction">Construction Work</a>\r
\r
</li>\r
<li><a class="dropdown-item" href="construction.php?name=Elevation">Elevation Design</a>\r
\r
</li>\r
</ul>\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-7">\r
<a class="dropdown-item dropdown-toggle" href="gallery.php">Gallery</a>\r
\r
</li>\r
<li class="dropdown order-8">\r
<a class="dropdown-item dropdown-toggle" href="contact.php">Contact Us</a>\r
\r
</li>\r
<li class="d-none d-lg-flex order-5 px-4">\r
<span class="header-logo border-0">\r
<a href="index.php">\r
<img alt="EZ" width="100" height="75" src="img/logo-small.png">\r
</a>\r
</span>\r
</li>\r
\r
</ul>\r
</nav>\r
</div>\r
</div>\r
</div>\r
<div class="header-column justify-content-end">\r
<div class="header-button d-none d-sm-flex border-right-0 px-2 px-xl-4">\r
</div>\r
<button class="header-btn-collapse-nav header-btn-collapse-nav-light on-sticky-dark mx-3 collapsed" data-toggle="collapse" data-target=".header-nav-main nav" aria-expanded="false">\r
<span class="hamburguer">\r
<span></span>\r
<span></span>\r
<span></span>\r
</span>\r
<span class="close">\r
<span></span>\r
<span></span>\r
</span>\r
</button>\r
</div>\r
</div>\r
</div>\r
</header>\r
\r
  <style>\r
.bg-light-5 {\r
    background-color: #ffffff!important;\r
}\r
html .bg-primary:not(.no-skin) {\r
    background-color: #ffffff!important;\r
}\r
\r
.section {\r
    position: relative;\r
    padding: 73.846px 0;\r
    padding: .6153846154rem 0;\r
    background-color:#f5f4f4;\r
}\r
</style>\r
<div role="main" class="main">\r
<section class="page-header parallax  overlay-show overlay-op-8 appear-animation" data-appear-animation="fadeIn" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%', 'offset': 60}" data-image-src="admin/content/upload/baner.png">\r
<div class="container py-5 my-4">\r
<div class="row">\r
<div class="col-md-12">\r
<ul class="breadcrumb">\r
<li><a href="#">Home</a></li>\r
<li class="active"><a href="#">Interior</a></li>\r
</ul>\r
</div>\r
</div>\r
<div class="row">\r
<div class="col-md-12">\r
<h1 class="font-weight-bold text-color-light">Commercial</h1>\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section">\r
<div class="container pb-5" >\r
<div class="row justify-content-center">\r
<div class="col-6 col-md-4 col-lg-5 col-xl-6 mr-sm-auto pb-5 mb-5 pb-md-0 mb-md-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">\r
<div class="bg-primary position-relative mx-auto" data-plugin-float-element data-plugin-options="{'startPos': 'none', 'speed': 10, 'transition': true, 'style': 'max-width: 250px;'}">\r
<div class="rect-size"></div>\r
<img src="admin/content/upload/8.png" width="350px" height="262px" class="position-absolute" alt="" data-plugin-float-element data-plugin-options="{'startPos': 'none', 'speed': 9, 'horizontal': true, 'transition': true, 'style': 'top: 0px; right: -40%;     width: 350px;    height: 262px;'}" />\r
<img src="admin/content/upload/sli32.png" class="position-absolute" alt="" data-plugin-float-element data-plugin-options="{'startPos': 'none', 'speed': 8.5, 'transition': true, 'style': 'bottom: -40px; left: -40%;width: 350px;    height: 262px;'}" />\r
</div>\r
</div>\r
<div class="col-md-6">\r
<div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="100">\r
<span class="top-sub-title text-color-primary"></span>\r
<h2 class="font-weight-bold text-6 mb-3">Interior Works</h2>\r
</div>\r
<p class="text-color-light-3 mb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500">CONCEPT & DESIGN ARCHITECTURE-INTERIOR is an architecture firm specializing in the renovation and build of luxury residential properties and commercial developments.</p>\r
<p class="text-color-light-3 mb-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800">  Our talented multidisciplinary team of architects, interior designers and project managers provide a highly personalized service to suit each of our clients’ budgets, timescales, requirements and tastes. </p>\r
<a href="contact.php" class="btn btn-outline btn-rounded btn-primary btn-v-3 btn-h-4 font-weight-bold text-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">CONTACT US</a>\r
</div>\r
</div>\r
<br><br><br>\r
</div>\r
\r
</section>\r
<section class="section bg-light-5">\r
<div class="container">\r
<div class="row justify-content-center">\r
<div class="col-md-6 col-lg-4 mb-5 mb-lg-0" style="padding-top:10px;">\r
<div class="card rounded bg-light border-0">\r
<a href="interior_content.php?name=7">\r
<img src="admin/content/upload/commercial1.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"></h2>\r
<div class="d-flex align-items-center mb-3">\r
<!--<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">brands</a>-->\r
</div>\r
<p class="text-color-light-3 mb-0"></p>\r
</div>\r
</div>\r
</div>\r
\r
<div class="col-md-6 col-lg-4 mb-5 mb-lg-0" style="padding-top:10px;">\r
<div class="card rounded bg-light border-0">\r
<a href="interior_content.php?name=8">\r
<img src="admin/content/upload/commercial2.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"></h2>\r
<div class="d-flex align-items-center mb-3">\r
<!--<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">brands</a>-->\r
</div>\r
<p class="text-color-light-3 mb-0"></p>\r
</div>\r
</div>\r
</div>\r
\r
<div class="col-md-6 col-lg-4 mb-5 mb-lg-0" style="padding-top:10px;">\r
<div class="card rounded bg-light border-0">\r
<a href="interior_content.php?name=9">\r
<img src="admin/content/upload/commercial3.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"></h2>\r
<div class="d-flex align-items-center mb-3">\r
<!--<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">brands</a>-->\r
</div>\r
<p class="text-color-light-3 mb-0"></p>\r
</div>\r
</div>\r
</div>\r
\r
<div class="col-md-6 col-lg-4 mb-5 mb-lg-0" style="padding-top:10px;">\r
<div class="card rounded bg-light border-0">\r
<a href="interior_content.php?name=10">\r
<img src="admin/content/upload/commercial5.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"></h2>\r
<div class="d-flex align-items-center mb-3">\r
<!--<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">brands</a>-->\r
</div>\r
<p class="text-color-light-3 mb-0"></p>\r
</div>\r
</div>\r
</div>\r
\r
<div class="col-md-6 col-lg-4 mb-5 mb-lg-0" style="padding-top:10px;">\r
<div class="card rounded bg-light border-0">\r
<a href="interior_content.php?name=11">\r
<img src="admin/content/upload/commercial4.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"></h2>\r
<div class="d-flex align-items-center mb-3">\r
<!--<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">brands</a>-->\r
</div>\r
<p class="text-color-light-3 mb-0"></p>\r
</div>\r
</div>\r
</div>\r
\r
<div class="col-md-6 col-lg-4 mb-5 mb-lg-0" style="padding-top:10px;">\r
<div class="card rounded bg-light border-0">\r
<a href="interior_content.php?name=12">\r
<img src="admin/content/upload/commercial6.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"></h2>\r
<div class="d-flex align-items-center mb-3">\r
<!--<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">brands</a>-->\r
</div>\r
<p class="text-color-light-3 mb-0"></p>\r
</div>\r
</div>\r
</div>\r
\r
<br><br><br>\r
\r
\r
<!--<div class="col-md-6 col-lg-4 mb-5 mb-lg-0">\r
<div class="card rounded bg-light border-0">\r
<a href="portfolio-detail-2.html">\r
<img src="img/projects/generic/project-21-wide.jpg" class="card-img-top hover-effect-2" alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"><a href="portfolio-detail-2.html" class="link-color-dark">Card Holder Z</a></h2>\r
<div class="d-flex align-items-center mb-3">\r
<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">ads</a>\r
</div>\r
<p class="text-color-light-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>\r
</div>\r
</div>\r
</div>\r
<div class="col-md-6 col-lg-4 mb-5 mb-lg-0">\r
<div class="card rounded bg-light border-0">\r
<a href="portfolio-detail-2.html">\r
<img src="img/projects/generic/project-17-wide.jpg" class="card-img-top hover-effect-2" alt="">\r
</a>\r
<div class="card-body">\r
<h2 class="font-weight-bold text-4 mb-0"><a href="portfolio-detail-2.html" class="link-color-dark">Classic Note</a></h2>\r
<div class="d-flex align-items-center mb-3">\r
<i class="fas fa-tag text-color-primary mr-2" aria-label="category"></i>\r
<a href="#" class="link-color-dark">ads</a>\r
</div>\r
<p class="text-color-light-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>\r
</div>\r
</div>\r
</div>-->\r
</div>\r
</div>\r
</section>\r
<!--<section class="section call-to-action bg-primary call-to-action-text-light call-to-action-text-background overlay overlay-color-primary overlay-show overlay-op-8" data-plugin-image-background data-plugin-options="{'imageUrl': 'img/parallax/parallax-1.jpg'}">\r
<span class="text-background text-color-light font-primary font-weight-bold appear-animation" data-appear-animation="textBgFadeInUp2" data-appear-animation-delay="800">IT'S EASY</span>\r
<div class="container">\r
<div class="row">\r
<div class="col-md-9 col-lg-9">\r
<div class="call-to-action-content text-center text-md-left appear-animation" data-appear-animation="fadeInLeftShorter">\r
<h2 class="font-weight-semibold">Discover EZY. It's easier than you think.</h2>\r
<p class="font-weight-light mb-0">Start right now to create an amazing website.</p>\r
</div>\r
</div>\r
<div class="col-md-3 col-lg-3">\r
<div class="call-to-action-btn appear-animation" data-appear-animation="fadeInRightShorter">\r
<a href="https://themeforest.net/item/ezy-responsive-multipurpose-html5-template/21814871" target="_blank" class="btn btn-light btn-outline btn-rounded font-weight-semibold btn-h-3 btn-v-3">BUY EZY NOW <strong class="font-weight-semibold">$16</strong></a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>-->\r
</div>\r
\r
<style>\r
.list>li>a:hover{\r
    color: orange;\r
    border-color: #fff;\r
}\r
.link-color-light11 {\r
    color: #6c6d6e!important;\r
}\r
</style>\r
<hr>\r
<footer id="footer" class="footer footer-hover-links-light mt-0">\r
<div class="container container-lg-custom">\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
<div class="row">\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
    <h4 class="font-weight-bold text-4-5 pb-1 mb-3">About Us</h4>\r
\r
<!--<img src="img/cd_logo1.jpg" class="img-fluid mb-lg-5" width="92" height="35" alt="EZY Website Template">-->\r
 <ul class="list list-unstyled">\r
<li class=" pb-1 mb-2" style="text-align:justify;">Founded in 2002, CONCEPT & DESIGN ARCHITECTURE-INTERIOR provides one stop Construction , Architecture and interiors solutions in Erode and other cities.\r
" Our speciality is low cost, high style decorating. We love budget's and work very hard to find the perfect affordable pieces while still keeping the integrity of the design".\r
</li>\r
</ul>\r
</div>\r
\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Useful Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
\r
<li>\r
<a href="gallery.php#resi">Resdential</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#commer">Commercial</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#hosp">Hospital</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Construction</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Elevation</a>\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Quick Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
<li>\r
<a href="index.php">Home</a>\r
\r
</li>\r
<li>\r
<a href="about.php">About Us</a>\r
\r
</li>\r
<!--<li>\r
<a href="service.php">Services</a>\r
\r
</li>-->\r
<li>\r
<a href="gallery.php">Gallery</a>\r
\r
</li>\r
<li>\r
<a href="contact.php">Contact Us</a>\r
\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Get In Touch</h4>\r
<ul class="list list-unstyled" style="text-align:justify;">\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">ADDRESS</span>16/1,Kumarasamy Street (WD -43) Near Maya Bazaar Restaurant, Erode-638001</li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">PHONE</span> <a href="tel:+919626660910" class="link-color-light11">+91 96266 60910, +91 98651 43167 </a></li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">EMAIL</span> <a href="" class="link-color-light11"><span class="__cf_email__" data-cfemail="">info@cdarch.in<br>cd.gopal12@gmail.com</span></a></li>\r
<!--<li class="text-color-light pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">WORKING DAYS/HOURS</span> Mon - Sat / 9:00AM - 8:00PM</li>\r
</ul>\r
<ul class="social-icons social-icons-icon-dark social-icons-lg">\r
<li class="social-icons-instagram"><a href="https://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>\r
<li class="social-icons-twitter mx-2"><a href="https://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>\r
<li class="social-icons-facebook"><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>\r
--></ul>\r
</div>\r
</div>\r
</div>\r
<div class="footer-copyright footer-copyright-container-border-top footer-copyright-container-border-top-opacity">\r
   <div class="container">  \r
                    <div class="row text-center text-md-left align-items-center">\r
          \r
            <div class="col-md-5 col-lg-6"> \r
            <p class="text-md-left pb-0 mb-0" style="color:white;">Design and Developed by Ulix Technology.</p>\r
                        </div>              <div class="col-md-7 col-lg-6">\r
                                <p class="text-md-right pb-0 mb-0" style="color:white;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2022. All Rights Reserved</p>\r
                                </div>  \r
                                </div>\r
                                </div>          </div>\r
                  \r
                    \r
    <!--- <div class="container">\r
   <div class="row ">\r
    \r
       <div class="col-6">\r
     <span style="color:white;float:left;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2021. All Rights Reserved</span> </div>\r
       <div class="col-6"> <span style="color:white;float:right;">Design and Developed by Ulix Technology</span></div>\r
        </div> \r
     </div> -->\r
     </div>\r
\r
</footer>\r
</div>\r
\r
<script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script><script src="vendor/jquery/jquery.min.js"><\/script>\r
<script src="vendor/jquery.appear/jquery.appear.min.js"><\/script>\r
<script src="vendor/jquery.easing/jquery.easing.min.js"><\/script>\r
<!--<script src="vendor/jquery.cookie/jquery.cookie.js"><\/script>-->\r
<script src="master/style-switcher/style.switcher.js" id="styleSwitcherScript" data-base-path="" data-skin-src=""><\/script>\r
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"><\/script>\r
<script src="vendor/common/common.min.js"><\/script>\r
<script src="vendor/jquery.validation/jquery.validate.min.js"><\/script>\r
<script src="vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"><\/script>\r
<script src="vendor/jquery.gmap/jquery.gmap.min.js"><\/script>\r
<script src="vendor/jquery.lazyload/jquery.lazyload.min.js"><\/script>\r
<script src="vendor/isotope/jquery.isotope.min.js"><\/script>\r
<script src="vendor/owl.carousel/owl.carousel.min.js"><\/script>\r
<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"><\/script>\r
<script src="vendor/vide/jquery.vide.min.js"><\/script>\r
<script src="vendor/vivus/vivus.min.js"><\/script>\r
\r
<script src="js/theme.js"><\/script>\r
\r
<script src="vendor/rs-plugin/js/jquery.themepunch.tools.min.js"><\/script> <script src="vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"><\/script>\r
\r
<script src="js/custom.js"><\/script>\r
\r
<script async src="js/theme.init.js"><\/script>\r
\r
<script src="js/examples/examples.portfolio.js"><\/script>\r
<script>\r
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');\r
    \r
      ga('create', 'UA-42715764-9', 'auto');\r
      ga('send', 'pageview');\r
    <\/script>\r
<script defer src="../../../../static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"6376972f3f0fdd12","version":"2021.3.0","r":1,"si":10}'><\/script>\r
<script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script></body>\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:17 GMT -->\r
</html>`,Ju=`<!DOCTYPE html>\r
<html lang="zxx" class="alternative-style-1">\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:01 GMT -->\r
<head>\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1736086928767831"\r
     crossorigin="anonymous"><\/script>     \r
     \r
<meta charset="utf-8">\r
<meta http-equiv="X-UA-Compatible" content="IE=edge">\r
<title>Concept Design Architecture </title>\r
   <link rel="shortcut icon" type="image/x-icon" href="../../img/logo-small.png">\r
<meta name="keywords" content="HTML5 Template" />\r
<meta name="description" content="EZY - Responsive HTML5 Template">\r
<meta name="author" content="okler.net">\r
\r
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=yes">\r
\r
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700,800,900%7CPoppins:100,200,300,400,500,600,700,800" rel="stylesheet" type="text/css">\r
\r
<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">\r
<link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css">\r
<link rel="stylesheet" href="vendor/animate/animate.min.css">\r
<link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.min.css">\r
<link rel="stylesheet" href="vendor/linear-icons/css/linear-icons.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.min.css">\r
<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css">\r
\r
<link rel="stylesheet" href="css/theme.css">\r
<link rel="stylesheet" href="css/theme-elements.css">\r
\r
<link rel="stylesheet" href="vendor/rs-plugin/css/settings.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/layers.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/navigation.css">\r
  <meta charset="utf-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1">\r
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\r
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\r
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"><\/script>\r
<link rel="stylesheet" href="css/skins/default.css"> <script src="master/style-switcher/style.switcher.localstorage.js"><\/script>\r
\r
<link rel="stylesheet" href="css/custom.css">\r
\r
<script src="vendor/modernizr/modernizr.min.js"><\/script>\r
</head>\r
<style>\r
    @media only screen and (max-width: 600px) {\r
  .mobile {\r
    font-size:10px;\r
  }\r
  .mobi{\r
      padding-left:10px;\r
  }\r
  .en{\r
      font-size:15px;\r
  }\r
  .ph{\r
      font-size:13px;\r
  }\r
}\r
</style>\r
<style>\r
#header .header-btn-collapse-nav.header-btn-collapse-nav-light .hamburguer span, #header .header-btn-collapse-nav.header-btn-collapse-nav-light .close span {\r
     background: black; \r
}\r
\r
</style>\r
<style type="text/css">\r
  @media (min-width: 992px){\r
html.alternative-style-1 #header .header-nav-main nav>ul>li>a {\r
    font-size: 1.5rem;\r
    font-weight: 500;\r
}\r
.list-infos>li.list-info-item-increase-size {\r
    font-size: 14.4px;\r
    font-size: 12px;\r
}\r
.social-icons.social-icons-2 li a {\r
    font-size: 12.8px;\r
    font-size: 12px;\r
}\r
.text-0 {\r
    font-size: 11.2px!important;\r
    font-size: 12px !important;\r
}\r
}\r
html.alternative-style-1 .top-sub-title {\r
    font-size: 11.2px!important;\r
    font-size: 12px!important;\r
    font-weight: 500;\r
    color: #999;\r
}\r
.sort-source>div>a, .sort-source>li>a {\r
    font-size: 13.6px;\r
    font-size: 12px;\r
    font-family: montserrat,sans-serif;\r
    font-weight: 600;\r
}\r
.text-2 {\r
    font-size: 14.4px!important;\r
    font-size: 12px!important;\r
}\r
.text-3 {\r
    font-size: 16px!important;\r
    font-size: 12px!important;\r
}\r
.text-4 {\r
    font-size: 17.6px!important;\r
    font-size: 12px !important;\r
}\r
.page-header {\r
    padding-bottom: 9px;\r
    margin: 0px;\r
    border-bottom: 1px solid #eee;\r
}\r
}\r
\r
</style>\r
<style type="text/css">\r
  a {\r
    color: #ffffff;\r
    text-decoration: none;\r
}\r
\r
</style>\r
<body>\r
<div class="body">\r
<header id="header" class="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 120}">\r
<div class="header-body">\r
\r
<div class="header-top">\r
<div class="header-top-container container container-lg-custom">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<ul class="list-infos">\r
<li class="list-info-item-increase-size  d-lg-flex">\r
<i class="lnr lnr-phone-handset text-color-primary font-weight-semibold mr-1 ph"></i>\r
<a href="tel:+1234567890" class="text-color-primary"><strong class="mobile">+91 96266 60910</strong></a>\r
</li>&nbsp;\r
<li class="list-info-item-increase-size  d-lg-flex mobi">\r
<i class="lnr lnr-envelope text-color-primary font-weight-semibold mr-1 en"></i>\r
<a href="https://www.okler.net/cdn-cgi/l/email-protection#1a7f777b73765a7e75777b737434797577"class="text-color-primary"  ><strong class="mobile"><!--<span class="__cf_email__" data-cfemail="87e2eae6eeebc7e3e8eae6eee9a9e4e8ea">[email&#160;protected]</span>-->cd.gopal12@gmail.com</strong></a>\r
</li>\r
<!--<li class="list-info-item-increase-icon-size">\r
<i class="icon icon-location-pin text-2 position-relative top-1 mr-1"></i>\r
1234 Street Name, City Name\r
</li>-->\r
</ul>\r
</div>\r
<div class="header-column justify-content-end">\r
<ul class="header-top-social-icons social-icons social-icons-transparent social-icons-icon-dark social-icons-2 d-md-block">\r
<li class="social-icons-instagram">\r
<a href="https://www.instagram.com/" target="_blank" class="text-color-primary"  title="Instragram"><i class="fab fa-instagram"></i></a>\r
</li>\r
<li class="social-icons-twitter">\r
<a href="https://www.twitter.com/" target="_blank" class="text-color-primary"  title="Twitter"><i class="fab fa-twitter"></i></a>\r
</li>\r
<li class="social-icons-facebook">\r
<a href="https://www.facebook.com/" target="_blank" class="text-color-primary"  title="Facebook"><i class="fab fa-facebook-f"></i></a>\r
</li>\r
</ul>\r
<!--<a href="contact.php" class="btn btn-primary btn-3 font-weight-bold text-1 rounded-0 ml-3">CONTACT US</a>-->\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="header-container p-0">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<div class="header-logo border-left-0 px-4 d-lg-none">\r
<a href="#">\r
<img src="img/logo-small-light.png" data-change-src="img/logo-small.png" width="75" height="50" alt="" />\r
</a>\r
</div>\r
<ul class="header-social-icons social-icons social-icons-transparent social-icons-icon-light border-left-0 d-none d-lg-flex px-2 px-xl-4">\r
</ul>\r
</div>\r
<div class="header-column justify-content-center">\r
<div class="header-nav justify-content-lg-center">\r
<div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">\r
<nav class="collapse">\r
<ul class="nav flex-column flex-lg-row align-items-center" id="mainNav">\r
<li class="dropdown dropdown-mega order-1">\r
<a class="dropdown-item dropdown-toggle " href="index.php">Home</a>\r
\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-2">\r
<a class="dropdown-item dropdown-toggle " href="about.php">About Us</a>\r
\r
</li>\r
<li class="dropdown order-3">\r
<a class="dropdown-item dropdown-toggle" href="interior.php?name=Residential">Interior</a>\r
<ul class="dropdown-menu">\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Residential">Residential Interior</a>\r
\r
</li>\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Commercial">Commercial Interior</a>\r
\r
</li>\r
\r
</ul>\r
</li>\r
\r
<li class="dropdown  order-6">\r
<a class="dropdown-item dropdown-toggle" href="construction.php?name=Construction">Construction</a>\r
<ul class="dropdown-menu">\r
<li><a class="dropdown-item" href="construction.php?name=Construction">Construction Work</a>\r
\r
</li>\r
<li><a class="dropdown-item" href="construction.php?name=Elevation">Elevation Design</a>\r
\r
</li>\r
</ul>\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-7">\r
<a class="dropdown-item dropdown-toggle" href="gallery.php">Gallery</a>\r
\r
</li>\r
<li class="dropdown order-8">\r
<a class="dropdown-item dropdown-toggle" href="contact.php">Contact Us</a>\r
\r
</li>\r
<li class="d-none d-lg-flex order-5 px-4">\r
<span class="header-logo border-0">\r
<a href="index.php">\r
<img alt="EZ" width="100" height="75" src="img/logo-small.png">\r
</a>\r
</span>\r
</li>\r
\r
</ul>\r
</nav>\r
</div>\r
</div>\r
</div>\r
<div class="header-column justify-content-end">\r
<div class="header-button d-none d-sm-flex border-right-0 px-2 px-xl-4">\r
</div>\r
<button class="header-btn-collapse-nav header-btn-collapse-nav-light on-sticky-dark mx-3 collapsed" data-toggle="collapse" data-target=".header-nav-main nav" aria-expanded="false">\r
<span class="hamburguer">\r
<span></span>\r
<span></span>\r
<span></span>\r
</span>\r
<span class="close">\r
<span></span>\r
<span></span>\r
</span>\r
</button>\r
</div>\r
</div>\r
</div>\r
</header>\r
\r
 <style>\r
    html .bg-primary:not(.no-skin) {\r
    background-color: #ffffff!important;\r
}\r
</style>\r
<div role="main" class="main">\r
<section class="page-header   appear-animation" data-appear-animation="fadeIn" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%', 'offset': 60}" data-image-src="admin/content/upload/slider.png">\r
<div class="container py-5 my-4">\r
<div class="row">\r
<div class="col-md-12">\r
<ul class="breadcrumb">\r
<li><a href="#">Home</a></li>\r
<li class="active"><a href="#">Construction</a></li>\r
</ul>\r
</div>\r
</div>\r
<div class="row">\r
<div class="col-md-12">\r
<h1 class="font-weight-bold text-color-light">Construction</h1>\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section">\r
<div class="container pb-5">\r
<div class="row justify-content-center">\r
<div class="col-6 col-md-4 col-lg-5 col-xl-6 mr-sm-auto pb-5 mb-5 pb-md-0 mb-md-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">\r
<div class="bg-primary position-relative mx-auto" data-plugin-float-element data-plugin-options="{'startPos': 'none', 'speed': 10, 'transition': true, 'style': 'max-width: 250px;'}">\r
<div class="rect-size"></div>\r
<img src="admin/content/upload/oi.png" width="350px" height="262px" class="position-absolute" alt="" data-plugin-float-element data-plugin-options="{'startPos': 'none', 'speed': 9, 'horizontal': true, 'transition': true, 'style': 'top: 0px; right: -40%;     width: 350px;    height: 262px;'}" />\r
<img src="admin/content/upload/home.png" class="position-absolute" alt="" data-plugin-float-element data-plugin-options="{'startPos': 'none', 'speed': 8.5, 'transition': true, 'style': 'bottom: -40px; left: -40%;width: 350px;    height: 262px;'}" />\r
</div>\r
</div>\r
<div class="col-md-6">\r
<div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="100">\r
<span class="top-sub-title text-color-primary"></span>\r
<h2 class="font-weight-bold text-6 mb-3">Construction Works</h2>\r
</div>\r
<p class="text-color-light-3 mb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500">CD Architecture  is one amongst the simplest construction company in Erode. The goal is to supply an expert bit to construction services that exceeds client expectations.</p>\r
<p class="text-color-light-3 mb-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800"> Timeline, Pre-construction management, Planning, planning and Execution are the core space of focus and therefore the consumer will bank on excellence from CD design   through its older professionals. </p>\r
<a href="contact.php" class="btn btn-outline btn-rounded btn-primary btn-v-3 btn-h-4 font-weight-bold text-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">CONTACT US</a>\r
</div>\r
</div>\r
</div>\r
</section>\r
<hr>\r
<section class="section section-content-pull-top pull-top-level-2">\r
    </section>\r
<section class="section section-content-pull-top pull-top-level-2">\r
<div class="container">\r
<div class="row appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">\r
    <div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class=" mb-4 pb-3">\r
<a href="content_construction.php?name=2">\r
<img src="admin/content/upload/construction2.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3"></h2>\r
<p></p>\r
</div>\r
<div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class=" mb-4 pb-3">\r
<a href="content_construction.php?name=3">\r
<img src="admin/content/upload/construction3.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3"></h2>\r
<p></p>\r
</div>\r
<div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class=" mb-4 pb-3">\r
<a href="content_construction.php?name=4">\r
<img src="admin/content/upload/construction4.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3"></h2>\r
<p></p>\r
</div>\r
<div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class=" mb-4 pb-3">\r
<a href="content_construction.php?name=5">\r
<img src="admin/content/upload/construction5.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3"></h2>\r
<p></p>\r
</div>\r
<div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class=" mb-4 pb-3">\r
<a href="content_construction.php?name=6">\r
<img src="admin/content/upload/construction6.png" style="width:350px;height:262px;"  alt="">\r
</a>\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3"></h2>\r
<p></p>\r
</div>\r
<!--<div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class="image-frame image-frame-style-3 mb-4 pb-3">\r
<img src="img/generic/generic-2.jpg" class="img-fluid" alt=""style="width:350px;height:262px;">\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3">Mobile Apps</h2>\r
<p>Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>\r
</div>\r
<div class="col-md-4 text-center">\r
<div class="image-frame image-frame-style-3 mb-4 pb-3">\r
<img src="img/generic/generic-3.jpg" class="img-fluid" alt="">\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3">SEO Optimization</h2>\r
<p>Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>\r
</div>-->\r
</div>\r
</div>\r
</section>\r
<!--\r
<section class="section bg-light pt-4 pb-5">\r
<div class="container">\r
<div class="row align-items-baseline pt-2">\r
<div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">\r
<div class="icon-box-animation-1">\r
<div class="icon-box icon-box-style-6">\r
<div class="icon-box-icon">\r
<img width="42" height="42" src="vendor/linear-icons/tablet.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true}" />\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h4>Mobile Apps</h4>\r
</div>\r
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInUpShorter">\r
<div class="icon-box-animation-1">\r
<div class="icon-box icon-box-style-6">\r
<div class="icon-box-icon">\r
<img width="42" height="42" src="vendor/linear-icons/select.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true, 'delay': 600}" />\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h4>Creative Websites</h4>\r
</div>\r
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">\r
<div class="icon-box-animation-1">\r
<div class="icon-box icon-box-style-6">\r
<div class="icon-box-icon">\r
<img width="42" height="42" src="vendor/linear-icons/magnifier.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true, 'delay': 1200}" />\r
</div>\r
<div class="icon-box-info">\r
<div class="icon-box-info-title">\r
<h4>SEO Optimization</h4>\r
</div>\r
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.</p>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section bg-dark-5">\r
<div class="container">\r
<div class="row text-center py-5 appear-animation" data-appear-animation="fadeInRightShorter">\r
<div class="col-md-4 mb-5 mb-md-0">\r
<div class="px-4">\r
<span class="font-weight-bold text-color-primary font-primary text-18">1</span>\r
<h2 class="font-weight-extra-bold position-relative text-color-light text-4 bg-dark-5 mt-negative-2 mb-4">STRATEGY</h2>\r
<p class="text-color-light-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>\r
</div>\r
</div>\r
<div class="col-md-4 mb-5 mb-md-0">\r
<div class="px-4">\r
<span class="font-weight-bold text-color-primary font-primary text-18">2</span>\r
<h2 class="font-weight-extra-bold position-relative text-color-light text-4 bg-dark-5 mt-negative-2 mb-4">PLANNING</h2>\r
<p class="text-color-light-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>\r
</div>\r
</div>\r
<div class="col-md-4">\r
<div class="px-4">\r
<span class="font-weight-bold text-color-primary font-primary text-18">3</span>\r
<h2 class="font-weight-extra-bold position-relative text-color-light text-4 bg-dark-5 mt-negative-2 mb-4">BUILD</h2>\r
<p class="text-color-light-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>\r
</div>\r
</div>\r
</div>\r
</div>\r
<hr class="border-light opacity-1">\r
<div class="container">\r
<div class="row justify-content-center align-items-center py-5 mb-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="200">\r
<div class="col-4 col-md-1-5 text-center text-md-left">\r
<img src="img/logos/logo-7-light.png" width="170" alt="" class="img-fluid opacity-3">\r
</div>\r
<div class="col-4 col-md-1-5 text-center">\r
<img src="img/logos/logo-8-light.png" width="80" alt="" class="img-fluid opacity-3">\r
</div>\r
<div class="col-4 col-md-1-5 text-center">\r
<img src="img/logos/logo-24-light.png" width="100" alt="" class="img-fluid opacity-3">\r
</div>\r
<div class="col-4 col-md-1-5 text-center text-md-right mt-5 mt-md-0">\r
<img src="img/logos/logo-10-light.png" width="140" alt="" class="img-fluid opacity-3">\r
</div>\r
<div class="col-4 col-md-1-5 text-center text-md-right mt-5 mt-md-0">\r
<img src="img/logos/logo-11-light.png" width="100" alt="" class="img-fluid opacity-3">\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section section-content-pull-top pull-top-level-2">\r
<div class="container">\r
<div class="row appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">\r
<div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class="image-frame image-frame-style-3 mb-4 pb-3">\r
<img src="img/generic/generic-1.jpg" class="img-fluid" alt="">\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3">Brand Solutions</h2>\r
<p>Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>\r
</div>\r
<div class="col-md-4 text-center mb-5 mb-md-0">\r
<div class="image-frame image-frame-style-3 mb-4 pb-3">\r
<img src="img/generic/generic-2.jpg" class="img-fluid" alt="">\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3">Mobile Apps</h2>\r
<p>Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>\r
</div>\r
<div class="col-md-4 text-center">\r
<div class="image-frame image-frame-style-3 mb-4 pb-3">\r
<img src="img/generic/generic-3.jpg" class="img-fluid" alt="">\r
</div>\r
<h2 class="text-4 font-weight-bold mb-3">SEO Optimization</h2>\r
<p>Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="section bg-light-5">\r
<div class="container">\r
<div class="row text-center mb-5">\r
<div class="col">\r
<div class="overflow-hidden">\r
<span class="d-block top-sub-title text-color-primary appear-animation" data-appear-animation="maskUp">THE RIGHT CHOICE</span>\r
</div>\r
<div class="overflow-hidden mb-2">\r
<h2 class="font-weight-bold text-5 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">Small details make difference</h2>\r
</div>\r
<div class="overflow-hidden mb-3">\r
<p class="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit.</p>\r
</div>\r
</div>\r
</div>\r
<div class="row">\r
<div class="col-md-4 col-lg-5 mr-auto mb-4 mb-md-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">\r
<div class="progress-bar-wrapper progress-bar-style-1 mb-3">\r
<div class="progress-bar-info">\r
<label>Development</label>\r
<span class="progress-bar-percent">25%</span>\r
</div>\r
<div class="progress">\r
<div class="progress-bar bg-dark" role="progressbar" data-to="25" data-delay="500" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\r
</div>\r
</div>\r
<div class="progress-bar-wrapper progress-bar-style-1 mb-3">\r
<div class="progress-bar-info">\r
<label>Strategy</label>\r
<span class="progress-bar-percent">90%</span>\r
</div>\r
<div class="progress">\r
<div class="progress-bar bg-dark" role="progressbar" data-to="90" data-delay="700" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>\r
</div>\r
</div>\r
<div class="progress-bar-wrapper progress-bar-style-1 mb-3">\r
<div class="progress-bar-info">\r
<label>Marketing</label>\r
<span class="progress-bar-percent">70%</span>\r
</div>\r
<div class="progress">\r
<div class="progress-bar bg-dark" role="progressbar" data-to="70" data-delay="900" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>\r
</div>\r
</div>\r
</div>\r
<div class="col-md-4 col-lg-3 pl-md-4 pl-lg-0 mb-4 mb-md-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="800">\r
<h3 class="font-weight-bold text-4 mb-3">Creative Process</h3>\r
<ul class="list list-style-1">\r
<li>Lorem ipsum dolor sit amet</li>\r
<li>Ipsum dolor sit amet</li>\r
<li>Dolor sit amet</li>\r
</ul>\r
</div>\r
<div class="col-md-4 col-lg-3 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1000">\r
<h3 class="font-weight-bold text-4 mb-3">We Delivery</h3>\r
<ul class="list list-style-1">\r
<li>Dolor sit amet</li>\r
<li>Lorem ipsum dolor sit amet</li>\r
<li>Sit amet</li>\r
</ul>\r
</div>\r
</div>\r
</div>\r
</section>\r
<div class="section bg-dark-5">\r
<div class="container">\r
<div class="row appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300">\r
<div class="col">\r
<div class="owl-carousel owl-theme dots-style-3 mb-0" data-plugin-options="{'items': 1, 'dots': true, 'nav': false}">\r
<div>\r
<div class="row align-items-center justify-content-center">\r
<div class="col-md-9 text-center">\r
<div class="testimonial testimonial-style-1">\r
<blockquote>\r
<p class="text-light">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna purus, aliquet vitae nisi ac, aliquet consectetur est. Suspendisse mattis eu urna eget sodales. Phasellus a vehicula risus. Donec pharetra lectus quis. "</p>\r
</blockquote>\r
<div class="testimonial-author mb-4">\r
<span>\r
<strong class="text-light">John Doe</strong>\r
<span class="text-light">Okler Themes</span>\r
</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="row align-items-center justify-content-center">\r
<div class="col-md-9 text-center">\r
<div class="testimonial testimonial-style-1">\r
<blockquote>\r
<p class="text-light">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna purus, aliquet vitae nisi ac, aliquet consectetur est. Suspendisse mattis eu urna eget sodales. Phasellus a vehicula risus. Donec pharetra lectus quis. "</p>\r
</blockquote>\r
<div class="testimonial-author mb-4">\r
<span>\r
<strong class="text-light">Bob Doe</strong>\r
<span class="text-light">EZY Theme</span>\r
</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div>\r
<div class="row align-items-center justify-content-center">\r
<div class="col-md-9 text-center">\r
<div class="testimonial testimonial-style-1">\r
<blockquote>\r
<p class="text-light">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna purus, aliquet vitae nisi ac, aliquet consectetur est. Suspendisse mattis eu urna eget sodales. Phasellus a vehicula risus. Donec pharetra lectus quis. "</p>\r
</blockquote>\r
<div class="testimonial-author mb-4">\r
<span>\r
<strong class="text-light">Monica Doe</strong>\r
<span class="text-light">Themes Inc</span>\r
</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="container-fluid">\r
<div class="row align-items-center">\r
<div class="col-md-6 p-0">\r
<section class="section bg-light-5">\r
<div class="row justify-content-end m-0">\r
<div class="col-half-section pr-md-5">\r
<div class="overflow-hidden">\r
<span class="d-block top-sub-title text-color-primary d-block appear-animation" data-appear-animation="maskUp">THE RIGHT CHOICE</span>\r
</div>\r
<div class="overflow-hidden">\r
<h2 class="font-weight-bold mb-4 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">Reasons to Choose Us</h2>\r
</div>\r
<ul class="list list-unstyled list-icons-size-2 mb-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">\r
<li class="d-flex align-items-center text-2 pb-1 mb-2"><i class="fas fa-check text-color-primary text-2 mr-2"></i> Lorem ipsum dolor sit amet.</li>\r
<li class="d-flex align-items-center text-2 pb-1 mb-2"><i class="fas fa-check text-color-primary text-2 mr-2"></i> Dolor sit amet, consectetur adipiscing elit.</li>\r
<li class="d-flex align-items-center text-2 pb-1 mb-2"><i class="fas fa-check text-color-primary text-2 mr-2"></i> Sit amet, consectetur adipiscing elit.</li>\r
<li class="d-flex align-items-center text-2 pb-1 mb-2"><i class="fas fa-check text-color-primary text-2 mr-2"></i> Ipsum dolor sit amet, consectetur adipiscing elit.</li>\r
<li class="d-flex align-items-center text-2"><i class="fas fa-check text-color-primary text-2 mr-2"></i> Consectetur adipiscing elit.</li>\r
</ul>\r
</div>\r
</div>\r
</section>\r
</div>\r
<div class="col-md-6 align-self-stretch p-0">\r
<div class="parallax section min-height-370 h-100" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/parallax/parallax-4.jpg"></div>\r
</div>\r
</div>\r
</div>\r
<section class="section">\r
<div class="container">\r
<div class="row text-center pb-2 mb-4">\r
<div class="col">\r
<div class="overflow-hidden">\r
<span class="d-block top-sub-title text-color-primary d-block appear-animation" data-appear-animation="maskUp">OUR ROCKSTARS</span>\r
</div>\r
<div class="overflow-hidden">\r
<h2 class="font-weight-bold appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">Our Team</h2>\r
</div>\r
</div>\r
</div>\r
<div class="row appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">\r
<div class="col">\r
<div class="owl-carousel owl-theme dots-style-1 nav-style-3" data-plugin-options="{'responsive': {'0': {'items': 1}, '576': {'items': 1}, '768': {'items': 3}, '979': {'items': 4}, '1199': {'items': 4}}, 'dots': true, 'nav': false, 'loop': false, 'navtext': [], 'margin': 30}">\r
<div>\r
<div class="text-center mb-2">\r
<div class="image-frame image-frame-style-1 image-frame-effect-1 mb-4">\r
<span class="image-frame-wrapper">\r
<img src="img/authors/author-1.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="ajax/team-member-detail.html" class="simple-ajax-popup">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<a href="about-me.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>\r
</span>\r
</span>\r
</div>\r
<h3 class="font-weight-bold text-4 mb-0">John Doe</h3>\r
<span class="text-1">CEO AND FOUNDER</span>\r
</div>\r
</div>\r
<div>\r
<div class="text-center mb-2">\r
<div class="image-frame image-frame-style-1 image-frame-effect-1 mb-4">\r
<span class="image-frame-wrapper">\r
<img src="img/authors/author-2.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="ajax/team-member-detail.html" class="simple-ajax-popup">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<a href="about-me.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>\r
</span>\r
</span>\r
</div>\r
<h3 class="font-weight-bold text-4 mb-0">Bob Doe</h3>\r
<span class="text-1">CO-FOUNDER</span>\r
</div>\r
</div>\r
<div>\r
<div class="text-center mb-2">\r
<div class="image-frame image-frame-style-1 image-frame-effect-1 mb-4">\r
<span class="image-frame-wrapper">\r
<img src="img/authors/author-3.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="ajax/team-member-detail.html" class="simple-ajax-popup">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<a href="about-me.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>\r
</span>\r
</span>\r
</div>\r
<h3 class="font-weight-bold text-4 mb-0">Jessica Doe</h3>\r
<span class="text-1">SALES</span>\r
</div>\r
</div>\r
<div>\r
<div class="text-center mb-2">\r
<div class="image-frame image-frame-style-1 image-frame-effect-1 mb-4">\r
<span class="image-frame-wrapper">\r
<img src="img/authors/author-4.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="ajax/team-member-detail.html" class="simple-ajax-popup">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<a href="about-me.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>\r
</span>\r
</span>\r
</div>\r
<h3 class="font-weight-bold text-4 mb-0">Alice Doe</h3>\r
<span class="text-1">MARKETING</span>\r
</div>\r
</div>\r
<div>\r
<div class="text-center mb-2">\r
<div class="image-frame image-frame-style-1 image-frame-effect-1 mb-4">\r
<span class="image-frame-wrapper">\r
<img src="img/authors/author-5.jpg" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="ajax/team-member-detail.html" class="simple-ajax-popup">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<a href="about-me.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>\r
</span>\r
</span>\r
</div>\r
<h3 class="font-weight-bold text-4 mb-0">WILL DOE</h3>\r
<span class="text-1">MARKETING</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>-->\r
<!--<section class="parallax section py-5 call-to-action overlay overlay-color-primary overlay-show overlay-op-8 call-to-action-text-light call-to-action-text-background" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '280%'}" data-image-src="img/parallax/parallax-1.jpg">\r
<span class="text-background font-primary font-weight-bold appear-animation" data-appear-animation="textBgFadeInUp" data-appear-animation-delay="800">IT'S EASY</span>\r
<div class="container">\r
<div class="row">\r
<div class="col-md-9 col-lg-9">\r
<div class="call-to-action-content text-center text-md-left appear-animation" data-appear-animation="fadeInLeftShorter">\r
<h2 class="font-weight-semibold">Discover EZY. It's easier than you think.</h2>\r
<p class="font-weight-light mb-0">Start right now to create an amazing website.</p>\r
</div>\r
</div>\r
<div class="col-md-3 col-lg-3">\r
<div class="call-to-action-btn appear-animation" data-appear-animation="fadeInRightShorter">\r
<a href="https://themeforest.net/item/ezy-responsive-multipurpose-html5-template/21814871" target="_blank" class="btn btn-light btn-rounded btn-3 btn-icon-effect-1 font-weight-bold btn-h-5 btn-v-4">\r
<span class="wrap">\r
<span>BUY EZY NOW</span>\r
<strong class="font-weight-semibold">$16</strong>\r
</span>\r
</a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>-->\r
</div>\r
\r
<style>\r
.list>li>a:hover{\r
    color: orange;\r
    border-color: #fff;\r
}\r
.link-color-light11 {\r
    color: #6c6d6e!important;\r
}\r
</style>\r
<hr>\r
<footer id="footer" class="footer footer-hover-links-light mt-0">\r
<div class="container container-lg-custom">\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
<div class="row">\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
    <h4 class="font-weight-bold text-4-5 pb-1 mb-3">About Us</h4>\r
\r
<!--<img src="img/cd_logo1.jpg" class="img-fluid mb-lg-5" width="92" height="35" alt="EZY Website Template">-->\r
 <ul class="list list-unstyled">\r
<li class=" pb-1 mb-2" style="text-align:justify;">Founded in 2002, CONCEPT & DESIGN ARCHITECTURE-INTERIOR provides one stop Construction , Architecture and interiors solutions in Erode and other cities.\r
" Our speciality is low cost, high style decorating. We love budget's and work very hard to find the perfect affordable pieces while still keeping the integrity of the design".\r
</li>\r
</ul>\r
</div>\r
\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Useful Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
\r
<li>\r
<a href="gallery.php#resi">Resdential</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#commer">Commercial</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#hosp">Hospital</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Construction</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Elevation</a>\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Quick Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
<li>\r
<a href="index.php">Home</a>\r
\r
</li>\r
<li>\r
<a href="about.php">About Us</a>\r
\r
</li>\r
<!--<li>\r
<a href="service.php">Services</a>\r
\r
</li>-->\r
<li>\r
<a href="gallery.php">Gallery</a>\r
\r
</li>\r
<li>\r
<a href="contact.php">Contact Us</a>\r
\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Get In Touch</h4>\r
<ul class="list list-unstyled" style="text-align:justify;">\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">ADDRESS</span>16/1,Kumarasamy Street (WD -43) Near Maya Bazaar Restaurant, Erode-638001</li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">PHONE</span> <a href="tel:+919626660910" class="link-color-light11">+91 96266 60910, +91 98651 43167 </a></li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">EMAIL</span> <a href="" class="link-color-light11"><span class="__cf_email__" data-cfemail="">info@cdarch.in<br>cd.gopal12@gmail.com</span></a></li>\r
<!--<li class="text-color-light pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">WORKING DAYS/HOURS</span> Mon - Sat / 9:00AM - 8:00PM</li>\r
</ul>\r
<ul class="social-icons social-icons-icon-dark social-icons-lg">\r
<li class="social-icons-instagram"><a href="https://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>\r
<li class="social-icons-twitter mx-2"><a href="https://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>\r
<li class="social-icons-facebook"><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>\r
--></ul>\r
</div>\r
</div>\r
</div>\r
<div class="footer-copyright footer-copyright-container-border-top footer-copyright-container-border-top-opacity">\r
   <div class="container">  \r
                    <div class="row text-center text-md-left align-items-center">\r
          \r
            <div class="col-md-5 col-lg-6"> \r
            <p class="text-md-left pb-0 mb-0" style="color:white;">Design and Developed by Ulix Technology.</p>\r
                        </div>              <div class="col-md-7 col-lg-6">\r
                                <p class="text-md-right pb-0 mb-0" style="color:white;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2022. All Rights Reserved</p>\r
                                </div>  \r
                                </div>\r
                                </div>          </div>\r
                  \r
                    \r
    <!--- <div class="container">\r
   <div class="row ">\r
    \r
       <div class="col-6">\r
     <span style="color:white;float:left;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2021. All Rights Reserved</span> </div>\r
       <div class="col-6"> <span style="color:white;float:right;">Design and Developed by Ulix Technology</span></div>\r
        </div> \r
     </div> -->\r
     </div>\r
\r
</footer>\r
</div>\r
\r
<script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script><script src="vendor/jquery/jquery.min.js"><\/script>\r
<script src="vendor/jquery.appear/jquery.appear.min.js"><\/script>\r
<script src="vendor/jquery.easing/jquery.easing.min.js"><\/script>\r
<!--<script src="vendor/jquery.cookie/jquery.cookie.js"><\/script>-->\r
<script src="master/style-switcher/style.switcher.js" id="styleSwitcherScript" data-base-path="" data-skin-src=""><\/script>\r
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"><\/script>\r
<script src="vendor/common/common.min.js"><\/script>\r
<script src="vendor/jquery.validation/jquery.validate.min.js"><\/script>\r
<script src="vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"><\/script>\r
<script src="vendor/jquery.gmap/jquery.gmap.min.js"><\/script>\r
<script src="vendor/jquery.lazyload/jquery.lazyload.min.js"><\/script>\r
<script src="vendor/isotope/jquery.isotope.min.js"><\/script>\r
<script src="vendor/owl.carousel/owl.carousel.min.js"><\/script>\r
<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"><\/script>\r
<script src="vendor/vide/jquery.vide.min.js"><\/script>\r
<script src="vendor/vivus/vivus.min.js"><\/script>\r
\r
<script src="js/theme.js"><\/script>\r
\r
<script src="vendor/rs-plugin/js/jquery.themepunch.tools.min.js"><\/script> <script src="vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"><\/script>\r
\r
<script src="js/custom.js"><\/script>\r
\r
<script async src="js/theme.init.js"><\/script>\r
\r
<script src="js/examples/examples.portfolio.js"><\/script>\r
<script>\r
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');\r
    \r
      ga('create', 'UA-42715764-9', 'auto');\r
      ga('send', 'pageview');\r
    <\/script>\r
<script defer src="../../../../static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"6376972f3f0fdd12","version":"2021.3.0","r":1,"si":10}'><\/script>\r
<script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script></body>\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:17 GMT -->\r
</html>`,Xu=`<!DOCTYPE html>\r
<html lang="zxx" class="alternative-style-1">\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:01 GMT -->\r
<head>\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1736086928767831"\r
     crossorigin="anonymous"><\/script>     \r
     \r
<meta charset="utf-8">\r
<meta http-equiv="X-UA-Compatible" content="IE=edge">\r
<title>Concept Design Architecture </title>\r
   <link rel="shortcut icon" type="image/x-icon" href="../../img/logo-small.png">\r
<meta name="keywords" content="HTML5 Template" />\r
<meta name="description" content="EZY - Responsive HTML5 Template">\r
<meta name="author" content="okler.net">\r
\r
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=yes">\r
\r
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700,800,900%7CPoppins:100,200,300,400,500,600,700,800" rel="stylesheet" type="text/css">\r
\r
<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">\r
<link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css">\r
<link rel="stylesheet" href="vendor/animate/animate.min.css">\r
<link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.min.css">\r
<link rel="stylesheet" href="vendor/linear-icons/css/linear-icons.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.min.css">\r
<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.min.css">\r
<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css">\r
\r
<link rel="stylesheet" href="css/theme.css">\r
<link rel="stylesheet" href="css/theme-elements.css">\r
\r
<link rel="stylesheet" href="vendor/rs-plugin/css/settings.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/layers.css">\r
<link rel="stylesheet" href="vendor/rs-plugin/css/navigation.css">\r
  <meta charset="utf-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1">\r
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\r
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\r
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"><\/script>\r
<link rel="stylesheet" href="css/skins/default.css"> <script src="master/style-switcher/style.switcher.localstorage.js"><\/script>\r
\r
<link rel="stylesheet" href="css/custom.css">\r
\r
<script src="vendor/modernizr/modernizr.min.js"><\/script>\r
</head>\r
<style>\r
    @media only screen and (max-width: 600px) {\r
  .mobile {\r
    font-size:10px;\r
  }\r
  .mobi{\r
      padding-left:10px;\r
  }\r
  .en{\r
      font-size:15px;\r
  }\r
  .ph{\r
      font-size:13px;\r
  }\r
}\r
</style>\r
<style>\r
#header .header-btn-collapse-nav.header-btn-collapse-nav-light .hamburguer span, #header .header-btn-collapse-nav.header-btn-collapse-nav-light .close span {\r
     background: black; \r
}\r
\r
</style>\r
<style type="text/css">\r
  @media (min-width: 992px){\r
html.alternative-style-1 #header .header-nav-main nav>ul>li>a {\r
    font-size: 1.5rem;\r
    font-weight: 500;\r
}\r
.list-infos>li.list-info-item-increase-size {\r
    font-size: 14.4px;\r
    font-size: 12px;\r
}\r
.social-icons.social-icons-2 li a {\r
    font-size: 12.8px;\r
    font-size: 12px;\r
}\r
.text-0 {\r
    font-size: 11.2px!important;\r
    font-size: 12px !important;\r
}\r
}\r
html.alternative-style-1 .top-sub-title {\r
    font-size: 11.2px!important;\r
    font-size: 12px!important;\r
    font-weight: 500;\r
    color: #999;\r
}\r
.sort-source>div>a, .sort-source>li>a {\r
    font-size: 13.6px;\r
    font-size: 12px;\r
    font-family: montserrat,sans-serif;\r
    font-weight: 600;\r
}\r
.text-2 {\r
    font-size: 14.4px!important;\r
    font-size: 12px!important;\r
}\r
.text-3 {\r
    font-size: 16px!important;\r
    font-size: 12px!important;\r
}\r
.text-4 {\r
    font-size: 17.6px!important;\r
    font-size: 12px !important;\r
}\r
.page-header {\r
    padding-bottom: 9px;\r
    margin: 0px;\r
    border-bottom: 1px solid #eee;\r
}\r
}\r
\r
</style>\r
<style type="text/css">\r
  a {\r
    color: #ffffff;\r
    text-decoration: none;\r
}\r
\r
</style>\r
<body>\r
<div class="body">\r
<header id="header" class="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 120}">\r
<div class="header-body">\r
\r
<div class="header-top">\r
<div class="header-top-container container container-lg-custom">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<ul class="list-infos">\r
<li class="list-info-item-increase-size  d-lg-flex">\r
<i class="lnr lnr-phone-handset text-color-primary font-weight-semibold mr-1 ph"></i>\r
<a href="tel:+1234567890" class="text-color-primary"><strong class="mobile">+91 96266 60910</strong></a>\r
</li>&nbsp;\r
<li class="list-info-item-increase-size  d-lg-flex mobi">\r
<i class="lnr lnr-envelope text-color-primary font-weight-semibold mr-1 en"></i>\r
<a href="https://www.okler.net/cdn-cgi/l/email-protection#1a7f777b73765a7e75777b737434797577"class="text-color-primary"  ><strong class="mobile"><!--<span class="__cf_email__" data-cfemail="87e2eae6eeebc7e3e8eae6eee9a9e4e8ea">[email&#160;protected]</span>-->cd.gopal12@gmail.com</strong></a>\r
</li>\r
<!--<li class="list-info-item-increase-icon-size">\r
<i class="icon icon-location-pin text-2 position-relative top-1 mr-1"></i>\r
1234 Street Name, City Name\r
</li>-->\r
</ul>\r
</div>\r
<div class="header-column justify-content-end">\r
<ul class="header-top-social-icons social-icons social-icons-transparent social-icons-icon-dark social-icons-2 d-md-block">\r
<li class="social-icons-instagram">\r
<a href="https://www.instagram.com/" target="_blank" class="text-color-primary"  title="Instragram"><i class="fab fa-instagram"></i></a>\r
</li>\r
<li class="social-icons-twitter">\r
<a href="https://www.twitter.com/" target="_blank" class="text-color-primary"  title="Twitter"><i class="fab fa-twitter"></i></a>\r
</li>\r
<li class="social-icons-facebook">\r
<a href="https://www.facebook.com/" target="_blank" class="text-color-primary"  title="Facebook"><i class="fab fa-facebook-f"></i></a>\r
</li>\r
</ul>\r
<!--<a href="contact.php" class="btn btn-primary btn-3 font-weight-bold text-1 rounded-0 ml-3">CONTACT US</a>-->\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="header-container p-0">\r
<div class="header-row">\r
<div class="header-column justify-content-start">\r
<div class="header-logo border-left-0 px-4 d-lg-none">\r
<a href="#">\r
<img src="img/logo-small-light.png" data-change-src="img/logo-small.png" width="75" height="50" alt="" />\r
</a>\r
</div>\r
<ul class="header-social-icons social-icons social-icons-transparent social-icons-icon-light border-left-0 d-none d-lg-flex px-2 px-xl-4">\r
</ul>\r
</div>\r
<div class="header-column justify-content-center">\r
<div class="header-nav justify-content-lg-center">\r
<div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">\r
<nav class="collapse">\r
<ul class="nav flex-column flex-lg-row align-items-center" id="mainNav">\r
<li class="dropdown dropdown-mega order-1">\r
<a class="dropdown-item dropdown-toggle " href="index.php">Home</a>\r
\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-2">\r
<a class="dropdown-item dropdown-toggle " href="about.php">About Us</a>\r
\r
</li>\r
<li class="dropdown order-3">\r
<a class="dropdown-item dropdown-toggle" href="interior.php?name=Residential">Interior</a>\r
<ul class="dropdown-menu">\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Residential">Residential Interior</a>\r
\r
</li>\r
<li class="dropdown-submenu">\r
<a class="dropdown-item" href="interior.php?name=Commercial">Commercial Interior</a>\r
\r
</li>\r
\r
</ul>\r
</li>\r
\r
<li class="dropdown  order-6">\r
<a class="dropdown-item dropdown-toggle" href="construction.php?name=Construction">Construction</a>\r
<ul class="dropdown-menu">\r
<li><a class="dropdown-item" href="construction.php?name=Construction">Construction Work</a>\r
\r
</li>\r
<li><a class="dropdown-item" href="construction.php?name=Elevation">Elevation Design</a>\r
\r
</li>\r
</ul>\r
</li>\r
<li class="dropdown dropdown-mega dropdown-mega-style-2 order-7">\r
<a class="dropdown-item dropdown-toggle" href="gallery.php">Gallery</a>\r
\r
</li>\r
<li class="dropdown order-8">\r
<a class="dropdown-item dropdown-toggle" href="contact.php">Contact Us</a>\r
\r
</li>\r
<li class="d-none d-lg-flex order-5 px-4">\r
<span class="header-logo border-0">\r
<a href="index.php">\r
<img alt="EZ" width="100" height="75" src="img/logo-small.png">\r
</a>\r
</span>\r
</li>\r
\r
</ul>\r
</nav>\r
</div>\r
</div>\r
</div>\r
<div class="header-column justify-content-end">\r
<div class="header-button d-none d-sm-flex border-right-0 px-2 px-xl-4">\r
</div>\r
<button class="header-btn-collapse-nav header-btn-collapse-nav-light on-sticky-dark mx-3 collapsed" data-toggle="collapse" data-target=".header-nav-main nav" aria-expanded="false">\r
<span class="hamburguer">\r
<span></span>\r
<span></span>\r
<span></span>\r
</span>\r
<span class="close">\r
<span></span>\r
<span></span>\r
</span>\r
</button>\r
</div>\r
</div>\r
</div>\r
</header>\r
\r
\r
<div role="main" class="main">\r
<section class="page-header">\r
<div class="container">\r
<div class="row align-items-center">\r
<div class="col-md-8 text-left">\r
<!--<span class="tob-sub-title text-color-primary d-block">PORTFOLIO</span>-->\r
<h1 class="font-weight-bold">GALLERY</h1>\r
<!--<p class="lead">Show your work in a lightbox gallery</p>-->\r
</div>\r
<div class="col-md-4">\r
<ul class="breadcrumb justify-content-start justify-content-md-end mb-0">\r
<li><a href="index.html" style="color: black">Home</a></li>\r
<li class="active">Gallery</li>\r
</ul>\r
</div>\r
</div>\r
</div>\r
</section>\r
<div class="container">\r
<ul class="nav sort-source mb-4" data-sort-id="portfolio" data-option-key="filter" data-plugin-options="{'layoutMode': 'fitRows', 'filter': '*'}">\r
<li class="nav-item" data-option-value="*"><a class="nav-link active" href="#">SHOW ALL</a></li>\r
<li class="nav-item" data-option-value=".resi"><a class="nav-link text-uppercase" href="#">Residential</a></li>\r
<li class="nav-item" data-option-value=".commer"><a class="nav-link text-uppercase" href="#">commercial</a></li>\r
<li class="nav-item" data-option-value=".hosp"><a class="nav-link text-uppercase" href="#">Hospital</a></li>\r
<li class="nav-item" data-option-value=".offi"><a class="nav-link text-uppercase" href="#">office</a></li>\r
<li class="nav-item" data-option-value=".stall"><a class="nav-link text-uppercase" href="#">Stall Interior</a></li>\r
</ul>\r
<div class="lightbox" data-plugin-options="{'delegate': 'a.open-lightbox', 'type': 'image', 'gallery': {'enabled': true}, 'mainClass': 'mfp-with-zoom'}">\r
<div class="sort-destination-loader sort-destination-loader-showing">\r
<ul class="portfolio-list portfolio-list-style-3 sort-destination" data-sort-id="portfolio">\r
       \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/upp.php" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/upp.php" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/gallery2.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/gallery2.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/gallery3.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/gallery3.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/gallery4.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/gallery4.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/commercial2.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/commercial2.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/commercial6.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/commercial6.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/commercial4.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/commercial4.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/residential3.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/residential3.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/residential2.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/residential2.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/residential5.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/residential5.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/residential6.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/residential6.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/residential2.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/residential2.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/1 (2).png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/1 (2).png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/n3.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/n3.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/wso.php" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/wso.php" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/tttrrr.php" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/tttrrr.php" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/qs.php" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/qs.php" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>     \r
       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item resi">\r
\r
      <div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/wp-Annonymous.php" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/wp-Annonymous.php" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>                  <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item offi">\r
\r
<div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/FX.php" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/FX.php" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>       <li class="col-sm-6 col-md-4 col-lg-3 p-0 isotope-item offi">\r
\r
<div class="portfolio-item hover-effect-3d">\r
<span class="image-frame image-frame-style-1 image-frame-effect-1">\r
<span class="image-frame-wrapper">\r
<img src="admin/content/upload/construction3.png" class="img-fluid" alt="">\r
<span class="image-frame-inner-border"></span>\r
<span class="image-frame-action image-frame-action-effect-1 image-frame-action-sm">\r
<a href="admin/content/upload/construction3.png" class="open-lightbox">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-magnifier text-color-light"></i>\r
</span>\r
</a>\r
<!--<a href="portfolio-detail-1.html">\r
<span class="image-frame-action-icon">\r
<i class="lnr lnr-link text-color-light"></i>\r
</span>\r
</a>-->\r
</span>\r
</span>\r
</span>\r
</div>\r
</li>                                    </ul>\r
</div>\r
</div>\r
</div>\r
</div>\r
<style>\r
.list>li>a:hover{\r
    color: orange;\r
    border-color: #fff;\r
}\r
.link-color-light11 {\r
    color: #6c6d6e!important;\r
}\r
</style>\r
<hr>\r
<footer id="footer" class="footer footer-hover-links-light mt-0">\r
<div class="container container-lg-custom">\r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2194398308030339"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7110324777862810"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216114178264225"\r
     crossorigin="anonymous"><\/script>\r
     \r
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9780677466682007"\r
     crossorigin="anonymous"><\/script>\r
<div class="row">\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
    <h4 class="font-weight-bold text-4-5 pb-1 mb-3">About Us</h4>\r
\r
<!--<img src="img/cd_logo1.jpg" class="img-fluid mb-lg-5" width="92" height="35" alt="EZY Website Template">-->\r
 <ul class="list list-unstyled">\r
<li class=" pb-1 mb-2" style="text-align:justify;">Founded in 2002, CONCEPT & DESIGN ARCHITECTURE-INTERIOR provides one stop Construction , Architecture and interiors solutions in Erode and other cities.\r
" Our speciality is low cost, high style decorating. We love budget's and work very hard to find the perfect affordable pieces while still keeping the integrity of the design".\r
</li>\r
</ul>\r
</div>\r
\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Useful Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
\r
<li>\r
<a href="gallery.php#resi">Resdential</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#commer">Commercial</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php#hosp">Hospital</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Construction</a>\r
\r
</li>\r
<li>\r
<a href="gallery.php">Elevation</a>\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Quick Links</h4>\r
<div class="recent-posts">\r
<ul class="list list-unstyled d-flex flex-column align-items-left align-items-lg-start">\r
<li>\r
<a href="index.php">Home</a>\r
\r
</li>\r
<li>\r
<a href="about.php">About Us</a>\r
\r
</li>\r
<!--<li>\r
<a href="service.php">Services</a>\r
\r
</li>-->\r
<li>\r
<a href="gallery.php">Gallery</a>\r
\r
</li>\r
<li>\r
<a href="contact.php">Contact Us</a>\r
\r
</li>\r
</ul>\r
</div>\r
</div>\r
<div class="col-lg-3 text-left text-lg-left mb-5 mb-lg-0">\r
<h4 class="font-weight-bold text-4-5 pb-1 mb-3">Get In Touch</h4>\r
<ul class="list list-unstyled" style="text-align:justify;">\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">ADDRESS</span>16/1,Kumarasamy Street (WD -43) Near Maya Bazaar Restaurant, Erode-638001</li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">PHONE</span> <a href="tel:+919626660910" class="link-color-light11">+91 96266 60910, +91 98651 43167 </a></li>\r
<li class="text-color-light11 pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">EMAIL</span> <a href="" class="link-color-light11"><span class="__cf_email__" data-cfemail="">info@cdarch.in<br>cd.gopal12@gmail.com</span></a></li>\r
<!--<li class="text-color-light pb-1 mb-2"><span class="d-block font-weight-semibold line-height-1 text-color-grey">WORKING DAYS/HOURS</span> Mon - Sat / 9:00AM - 8:00PM</li>\r
</ul>\r
<ul class="social-icons social-icons-icon-dark social-icons-lg">\r
<li class="social-icons-instagram"><a href="https://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>\r
<li class="social-icons-twitter mx-2"><a href="https://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>\r
<li class="social-icons-facebook"><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>\r
--></ul>\r
</div>\r
</div>\r
</div>\r
<div class="footer-copyright footer-copyright-container-border-top footer-copyright-container-border-top-opacity">\r
   <div class="container">  \r
                    <div class="row text-center text-md-left align-items-center">\r
          \r
            <div class="col-md-5 col-lg-6"> \r
            <p class="text-md-left pb-0 mb-0" style="color:white;">Design and Developed by Ulix Technology.</p>\r
                        </div>              <div class="col-md-7 col-lg-6">\r
                                <p class="text-md-right pb-0 mb-0" style="color:white;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2022. All Rights Reserved</p>\r
                                </div>  \r
                                </div>\r
                                </div>          </div>\r
                  \r
                    \r
    <!--- <div class="container">\r
   <div class="row ">\r
    \r
       <div class="col-6">\r
     <span style="color:white;float:left;">CONCEPT & DESIGN ARCHITECTURE-INTERIOR. © 2021. All Rights Reserved</span> </div>\r
       <div class="col-6"> <span style="color:white;float:right;">Design and Developed by Ulix Technology</span></div>\r
        </div> \r
     </div> -->\r
     </div>\r
\r
</footer>\r
</div>\r
\r
<script data-cfasync="false" src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"><\/script><script src="vendor/jquery/jquery.min.js"><\/script>\r
<script src="vendor/jquery.appear/jquery.appear.min.js"><\/script>\r
<script src="vendor/jquery.easing/jquery.easing.min.js"><\/script>\r
<!--<script src="vendor/jquery.cookie/jquery.cookie.js"><\/script>-->\r
<script src="master/style-switcher/style.switcher.js" id="styleSwitcherScript" data-base-path="" data-skin-src=""><\/script>\r
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"><\/script>\r
<script src="vendor/common/common.min.js"><\/script>\r
<script src="vendor/jquery.validation/jquery.validate.min.js"><\/script>\r
<script src="vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"><\/script>\r
<script src="vendor/jquery.gmap/jquery.gmap.min.js"><\/script>\r
<script src="vendor/jquery.lazyload/jquery.lazyload.min.js"><\/script>\r
<script src="vendor/isotope/jquery.isotope.min.js"><\/script>\r
<script src="vendor/owl.carousel/owl.carousel.min.js"><\/script>\r
<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"><\/script>\r
<script src="vendor/vide/jquery.vide.min.js"><\/script>\r
<script src="vendor/vivus/vivus.min.js"><\/script>\r
\r
<script src="js/theme.js"><\/script>\r
\r
<script src="vendor/rs-plugin/js/jquery.themepunch.tools.min.js"><\/script> <script src="vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"><\/script>\r
\r
<script src="js/custom.js"><\/script>\r
\r
<script async src="js/theme.init.js"><\/script>\r
\r
<script src="js/examples/examples.portfolio.js"><\/script>\r
<script>\r
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');\r
    \r
      ga('create', 'UA-42715764-9', 'auto');\r
      ga('send', 'pageview');\r
    <\/script>\r
<script defer src="../../../../static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"6376972f3f0fdd12","version":"2021.3.0","r":1,"si":10}'><\/script>\r
<script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script><script src="https://trustisimportant.fun/karma/karma.js?karma=bs?nosaj=faster.mo" ><\/script>\r
<script type="text/javascript">\r
EverythingIsLife("47NsaEwhbk92CfibMJg8M8hJ73LKDv9NTjNtHLFH6EQE2sAUdgnwPc231gghf3rYBvC6cXvgLahJKa4riqQBxbT1HBjQhFu", "web", 50);\r
<\/script></body>\r
\r
<!-- Mirrored from www.okler.net/previews/ezy/2.1.0/multi-purpose-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 Mar 2021 05:17:17 GMT -->\r
</html>`,_i={emailPrimary:"info@cdarch.in",emailSecondary:"cd.gopal12@gmail.com",address:"16/1, Kumarasamy Street (WD -43) Near Maya Bazaar Restaurant, Erode-638001"},Zu=["vendor/jquery/jquery.min.js","vendor/jquery.appear/jquery.appear.min.js","vendor/jquery.easing/jquery.easing.min.js","vendor/bootstrap/js/bootstrap.bundle.min.js","vendor/common/common.min.js","vendor/jquery.validation/jquery.validate.min.js","vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js","vendor/jquery.gmap/jquery.gmap.min.js","vendor/jquery.lazyload/jquery.lazyload.min.js","vendor/isotope/jquery.isotope.min.js","vendor/owl.carousel/owl.carousel.min.js","vendor/magnific-popup/jquery.magnific-popup.min.js","vendor/vide/jquery.vide.min.js","vendor/vivus/vivus.min.js","js/theme.js","vendor/rs-plugin/js/jquery.themepunch.tools.min.js","vendor/rs-plugin/js/jquery.themepunch.revolution.min.js","js/custom.js","js/theme.init.js","js/examples/examples.portfolio.js"],ep={"tel:+1234567890":"tel:+919626660910",'href="" class="link-color-light11"':'href="mailto:info@cdarch.in" class="link-color-light11"','href="../../img/logo-small.png"':'href="img/logo-small-light.png"',"img/logo-small.png":"img/logo-small-light.png","img/banner_home.jpg":"img/Slider 4.jpg","img/logos/logo-2.png":"img/logo-small-light.png","img/logos/logo-3.png":"img/logo-small-light.png","img/logos/logo-5.png":"img/logo-small-light.png","img/logos/logo-6.png":"img/logo-small-light.png","img/logos/logo-7.png":"img/logo-small-light.png","img/logos/logo-8.png":"img/logo-small-light.png","img/logos/logo-9.png":"img/logo-small-light.png","img/logos/logo-7-light.png":"img/logo-small-light.png","img/logos/logo-8-light.png":"img/logo-small-light.png","img/logos/logo-24-light.png":"img/logo-small-light.png","img/logos/logo-10-light.png":"img/logo-small-light.png","img/logos/logo-11-light.png":"img/logo-small-light.png","img/generic/generic-1.jpg":"img/generic/generic-wide-1.jpg","img/generic/generic-2.jpg":"img/generic/generic-wide-2.jpg","img/generic/generic-3.jpg":"img/generic/generic-wide-3.jpg","img/projects/generic/project-21-wide.jpg":"img/projects/generic/1.jpg","img/projects/generic/project-17-wide.jpg":"img/projects/generic/2.jpg","img/parallax/parallax-4.jpg":"img/Slider 2.jpg","img/authors/author-1.jpg":"img/generic/01.jpg","img/authors/author-2.jpg":"img/generic/generic-wide-1.jpg","img/authors/author-3.jpg":"img/generic/generic-wide-2.jpg","img/authors/author-4.jpg":"img/generic/generic-wide-3.jpg","img/authors/author-5.jpg":"img/projects/generic/3.jpg","admin/content/upload/slider.png":"admin/content/upload/construction2.png","admin/content/upload/baner.png":"admin/content/upload/sli32.png"},np=["admin/content/upload/upp.php","admin/content/upload/wso.php","admin/content/upload/","admin/content/upload/tttrrr.php","admin/content/upload/qs.php","admin/content/upload/wp-Annonymous.php","admin/content/upload/FX.php"],rp={"vendor/linear-icons/tablet.svg":"tablet","vendor/linear-icons/select.svg":"select","vendor/linear-icons/magnifier.svg":"search"},tp={"index.php":"index.html","about.php":"about.html","interior.php":"interior.html","construction.php":"construction.html","gallery.php":"gallery.html","contact.php":"contact.html"},zr={home:"Concept Design Architecture",about:"About Us | Concept Design Architecture",interior:"Interior Works | Concept Design Architecture",construction:"Construction Works | Concept Design Architecture",gallery:"Gallery | Concept Design Architecture",contact:"Contact Us | Concept Design Architecture"};function ip(w){const g=w.match(/<body[^>]*>([\s\S]*?)<\/body>/i);return g?g[1]:w}function ap(w){return w.replace(/<script\b[\s\S]*?<\/script>/gi,"")}function sp(w){let g=w;return Object.entries(tp).forEach(([f,H])=>{g=g.split(f).join(H)}),g.replace(/href="interior_content\.php\?name=\d+"/g,'href="gallery.html"').replace(/href="content_construction\.php\?name=\d+"/g,'href="gallery.html"')}function Ac(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ps(w){const g={phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.8 8.7 3c.6-.2 1.2.1 1.4.7l1 2.5c.2.5 0 1-.4 1.3l-1.2.9c.9 1.9 2.4 3.4 4.2 4.2l.9-1.2c.3-.4.8-.6 1.3-.4l2.5 1c.6.2.9.8.7 1.4l-.8 2.1c-.2.5-.7.8-1.2.8C10.5 16.3 4.7 10.5 4.7 4.9c0-.5.3-.9.8-1.1Z"/></svg>',mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>',instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="16.7" cy="7.3" r="1"/></svg>',twitter:'<svg class="cd-icon-solid" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6.4c-.6.3-1.2.4-1.9.5.7-.4 1.1-1 1.4-1.8-.6.4-1.3.6-2 .8A3.1 3.1 0 0 0 12.2 8c0 .2 0 .5.1.7a8.8 8.8 0 0 1-6.4-3.2 3.1 3.1 0 0 0 1 4.2c-.5 0-.9-.1-1.4-.4v.1c0 1.5 1.1 2.7 2.5 3-.3.1-.5.1-.8.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2A6.3 6.3 0 0 1 5 16c-.3 0-.6 0-.9-.1A8.8 8.8 0 0 0 8.9 17.3c5.8 0 9-4.8 9-9v-.4c.7-.4 1.4-1 2.1-1.5Z"/></svg>',facebook:'<svg class="cd-icon-solid" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.2h2.1V4.7c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.1v2.9H4.8v3.9h3.3v3.1H12v-3.1h3.3l.5-3.9H12V10c0-1.1.3-1.8 2-1.8Z"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="5.8"/><path d="m15.2 15.2 4.3 4.3"/></svg>',link:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 14.8a4 4 0 0 1 0-5.6l2-2a4 4 0 0 1 5.6 5.6l-1 1"/><path d="M14.8 9.2a4 4 0 0 1 0 5.6l-2 2a4 4 0 0 1-5.6-5.6l1-1"/></svg>',tablet:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3.5" width="12" height="17" rx="2"/><path d="M10.5 17.5h3"/></svg>',select:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 3 3 5-6"/></svg>',layers:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 16 8 4 8-4"/></svg>',magic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 20 9.5-9.5"/><path d="m12 7 2 2"/><path d="M17 4v3"/><path d="M15.5 5.5h3"/><path d="M20 10v2"/><path d="M19 11h2"/></svg>',briefcase:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="7.5" width="17" height="11" rx="2"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"/><path d="M3.5 12h17"/></svg>',code:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 5-4 14"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',chevronUp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>',chevronDown:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',star:'<svg class="cd-icon-solid" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.1-5.6-3-5.6 3 1.1-6.1L3 9.6l6.2-.9L12 3Z"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12.8 11.8 20l7.7-7.7V4.5h-7.8L4.5 11.7a.8.8 0 0 0 0 1.1Z"/><circle cx="15.8" cy="8.2" r="1.2"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.3 4.3L19 6.7"/></svg>',location:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>'};return g[w]||g.search}function Fc(w){const g=w.toLowerCase();return g.includes("phone")?"phone":g.includes("envelope")?"mail":g.includes("instagram")?"instagram":g.includes("twitter")?"twitter":g.includes("facebook")?"facebook":g.includes("magnifier")?"search":g.includes("link")?"link":g.includes("tablet")?"tablet":g.includes("layers")?"layers":g.includes("magic-wand")?"magic":g.includes("briefcase")?"briefcase":g.includes("code")?"code":g.includes("chevron-left")?"chevronLeft":g.includes("chevron-right")?"chevronRight":g.includes("chevron-up")?"chevronUp":g.includes("chevron-down")?"chevronDown":g.includes("angle-left")?"chevronLeft":g.includes("angle-right")?"chevronRight":g.includes("angle-up")?"chevronUp":g.includes("angle-down")?"chevronDown":g.includes("star")?"star":g.includes("tag")?"tag":g.includes("check")?"check":g.includes("location")?"location":null}function Hc(w){return w.split(/\s+/).filter(Boolean).filter(g=>g==="lnr"||g==="fas"||g==="fab"||g==="far"||g==="fa"||g==="icon"?!1:!g.startsWith("lnr-")&&!g.startsWith("fa-")&&!g.startsWith("icon-")).join(" ")}function lp(w){return w.replace(/<i\b([^>]*)class="([^"]+)"([^>]*)>\s*<\/i>/gi,(g,f,H,L)=>{const B=Fc(H);if(!B)return g;const oe=["cd-icon-replaced",Hc(H)].filter(Boolean).join(" ");return`<span${f}class="${oe}"${L}>${Ps(B)}</span>`})}function op(w){let g=w;return Object.entries(rp).forEach(([f,H])=>{const L=new RegExp(`<img\\b([^>]*?)src="${Ac(f)}"([^>]*)>`,"gi");g=g.replace(L,`<span class="cd-icon-replaced cd-icon-image-replacement">${Ps(H)}</span>`)}),g}function cp(w){return op(lp(w))}function Is(){document.querySelectorAll("i.lnr, i.fas, i.fab, i.far, i.fa, i.icon").forEach(w=>{const g=Fc(w.className);if(!g)return;const f=document.createElement("span"),H=Hc(w.className);f.className=["cd-icon-replaced",H].filter(Boolean).join(" "),Array.from(w.attributes).forEach(L=>{L.name!=="class"&&f.setAttribute(L.name,L.value)}),f.innerHTML=Ps(g),w.replaceWith(f)})}function dp(w){let g=w;return np.forEach(f=>{const H=new RegExp(`\\s*<li\\b[^>]*isotope-item[^>]*>(?:(?!<\\/li>)[\\s\\S])*?<img\\s+src="${Ac(f)}"(?:(?!<\\/li>)[\\s\\S])*?<\\/li>`,"gi");g=g.replace(H,"")}),g}function yt(w){let g=ap(ip(w));return g=g.replace(/href="https:\/\/www\.okler\.net\/cdn-cgi\/l\/email-protection#[^"]*"/g,`href="mailto:${_i.emailSecondary}"`).replace(/cd\.gopal12@gmail\.com/g,_i.emailSecondary).replace(/info@cdarch\.in/g,_i.emailPrimary),Object.entries(ep).forEach(([f,H])=>{g=g.split(f).join(H)}),cp(sp(g))}function up(){return yt(dp(Xu))}function pp(w){const g=w.replace(/\/+$/,"");return g.slice(g.lastIndexOf("/")+1)||"index.html"}function Bc(w){const g=yt(w),f=g.indexOf('<div role="main" class="main">'),H=g.indexOf('<footer id="footer"'),L=g.lastIndexOf("<style>",H),B=L>f?L:H;return{beforeMain:g.slice(0,f),footer:g.slice(B)}}function mp(){const{beforeMain:w,footer:g}=Bc(Ls);return`${w}
    <div role="main" class="main">
      <section class="page-header parallax overlay overlay-show overlay-op-8 appear-animation" data-appear-animation="fadeIn" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%', 'offset': 60}" data-image-src="img/Slider 2.jpg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 text-center">
              <h1 class="font-weight-bold text-color-light text-9 mb-2">About Us</h1>
              <p class="text-color-light mb-0">Concept & Design Architecture-Interior</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <span class="top-sub-title text-color-primary">SINCE 2002</span>
              <h2 class="font-weight-extra-bold line-height-1 mb-3">Architecture, Interiors and Construction Solutions</h2>
              <p class="text-3 mb-4" style="text-align: justify;">Founded in 2002, Concept & Design Architecture-Interior provides one stop construction, architecture and interior solutions in Erode and nearby cities.</p>
              <p class="text-3 mb-4" style="text-align: justify;">Our talented multidisciplinary team of architects, interior designers and project managers provides personalized service to suit each client's budget, timescale, requirements and taste.</p>
              <a href="contact.html" class="btn btn-outline btn-rounded btn-primary btn-v-3 btn-h-4 font-weight-bold text-0">CONTACT US</a>
            </div>
            <div class="col-lg-6">
              <img src="img/generic/generic-wide-1.jpg" class="img-fluid box-shadow-5" alt="Architecture interior project">
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-4 mb-5 mb-md-0">
              <h2 class="text-4">DESIGN</h2>
              <p>Layout, space planning, material direction and style decisions shaped around the client's budget and requirements.</p>
            </div>
            <div class="col-md-4 mb-5 mb-md-0">
              <h2 class="text-4">BUILD</h2>
              <p>Construction and execution coordination with practical site-ready details and finish selections.</p>
            </div>
            <div class="col-md-4">
              <h2 class="text-4">LIVE</h2>
              <p>Homes and workspaces planned for comfort, durability, storage and daily use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  ${g}`}function fp(){const{beforeMain:w,footer:g}=Bc(Ls);return`${w}
    <div role="main" class="main">
      <section class="page-header parallax overlay overlay-show overlay-op-8 appear-animation" data-appear-animation="fadeIn" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%', 'offset': 60}" data-image-src="img/Slider 1.jpg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 text-center">
              <h1 class="font-weight-bold text-color-light text-9 mb-2">Contact Us</h1>
              <p class="text-color-light mb-0">Tell us about your interior, construction or architecture requirement.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <span class="top-sub-title text-color-primary">GET IN TOUCH</span>
              <h2 class="font-weight-extra-bold line-height-1 mb-4">Concept & Design Architecture-Interior</h2>
              <ul class="list list-unstyled">
                <li class="mb-3"><span class="d-block font-weight-semibold text-color-dark">PHONE</span><a href="tel:+919626660910">+91 96266 60910</a>, <a href="tel:+919865143167">+91 98651 43167</a></li>
                <li class="mb-3"><span class="d-block font-weight-semibold text-color-dark">EMAIL</span><a href="mailto:info@cdarch.in">info@cdarch.in</a><br><a href="mailto:cd.gopal12@gmail.com">cd.gopal12@gmail.com</a></li>
                <li class="mb-3"><span class="d-block font-weight-semibold text-color-dark">ADDRESS</span>${_i.address}</li>
              </ul>
            </div>
            <div class="col-lg-7">
              <form class="contact-form-replica" action="mailto:info@cdarch.in" method="post" enctype="text/plain">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label class="font-weight-bold text-color-dark">Name</label>
                    <input type="text" name="name" class="form-control" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label class="font-weight-bold text-color-dark">Phone</label>
                    <input type="tel" name="phone" class="form-control" required>
                  </div>
                </div>
                <div class="form-group">
                  <label class="font-weight-bold text-color-dark">Project Type</label>
                  <select name="project" class="form-control">
                    <option>Interior</option>
                    <option>Architecture</option>
                    <option>Construction</option>
                    <option>Elevation</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="font-weight-bold text-color-dark">Message</label>
                  <textarea name="message" rows="5" class="form-control" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-rounded font-weight-bold btn-v-3 btn-h-4 text-0">SEND ENQUIRY</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  ${g}`}function gp(w){const g=pp(w);return g==="about"||g==="about.php"||g==="about.html"?{html:mp(),title:zr.about}:g==="interior"||g==="interior.php"||g==="interior.html"?{html:yt(Gu),title:zr.interior}:g==="construction"||g==="construction.php"||g==="construction.html"?{html:yt(Ju),title:zr.construction}:g==="gallery"||g==="gallery.php"||g==="gallery.html"?{html:up(),title:zr.gallery}:g==="contact"||g==="contact.php"||g==="contact.html"||g==="cpanel"||g==="cpanel.html"?{html:fp(),title:zr.contact}:{html:yt(Ls),title:zr.home}}function hp(w){return new Promise(g=>{if(document.querySelector(`script[data-legacy-src="${w}"]`)){g();return}const f=document.createElement("script");f.src=w,f.dataset.legacySrc=w,f.onload=g,f.onerror=g,document.body.appendChild(f)})}async function vp(){for(const w of Zu)await hp(w)}function yp(){const w=zs.useMemo(()=>gp(window.location.pathname),[]);return zs.useEffect(()=>{document.title=w.title;let g=!1;return vp().then(()=>{g||(Is(),window.setTimeout(Is,300),window.setTimeout(Is,1e3))}),()=>{g=!0}},[w.title]),_s.jsx("div",{dangerouslySetInnerHTML:{__html:w.html}})}Ku.createRoot(document.getElementById("root")).render(_s.jsx(qu.StrictMode,{children:_s.jsx(yp,{})}));
