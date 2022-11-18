import{S as Y,i as X,s as Q,k as b,l as y,m,h as d,n as l,b as L,B as f,A as S,C as yn,D as yt,q,a as U,r as J,c as B,E as F,F as H,p as In,v as z,e as Kt,w as W,x as G,G as Se,g as Me,t as O,d as xe,f as R,y as K,H as qt,u as wn,I as kr,J as Tr,K as Sr,L as Ar,o as En}from"../../chunks/index-979af05b.js";import{e as Re}from"../../chunks/env-public-6aa99648.js";import{p as kn}from"../../chunks/stores-05c12c25.js";import{w as Rr}from"../../chunks/singletons-c4cdbbd3.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tn=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],o=r[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Or={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,o=a?r[s+1]:0,c=s+2<r.length,u=c?r[s+2]:0,h=i>>2,p=(i&3)<<4|o>>4;let g=(o&15)<<2|u>>6,_=u&63;c||(_=64,a||(g=64)),n.push(t[h],t[p],t[g],t[_])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Cr(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Tn(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],o=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||o==null||u==null||p==null)throw Error();const g=i<<2|o>>4;if(n.push(g),u!==64){const _=o<<4&240|u>>2;if(n.push(_),p!==64){const k=u<<6&192|p;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Sn=function(r){const e=Cr(r);return Or.encodeByteArray(e,!0)},Dr=function(r){return Sn(r).replace(/\./g,"")},An=function(r){try{return Or.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cn(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())}function On(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Dn(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pn(){const r=V();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Nn(){return typeof indexedDB=="object"}function Mn(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="FirebaseError";class _e extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=xn,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,je.prototype.create)}}class je{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ln(i,n):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new _e(s,o,n)}}function Ln(r,e){return r.replace($n,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const $n=/\{\$([^}]+)}/g;function Un(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function et(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(Jt(i)&&Jt(a)){if(!et(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Jt(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Bn(r,e){const t=new Vn(r,e);return t.subscribe.bind(t)}class Vn{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Fn(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ht),s.error===void 0&&(s.error=ht),s.complete===void 0&&(s.complete=ht);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fn(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ht(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(r){return r&&r._delegate?r._delegate:r}class De{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Rn;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zn(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);n===o&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(!!n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:jn(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jn(r){return r===ye?void 0:r}function zn(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(C||(C={}));const Gn={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Kn=C.INFO,qn={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},Jn=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=qn[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pr{constructor(e){this.name=e,this._logLevel=Kn,this._logHandler=Jn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const Yn=(r,e)=>e.some(t=>r instanceof t);let Yt,Xt;function Xn(){return Yt||(Yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qn(){return Xt||(Xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nr=new WeakMap,It=new WeakMap,Mr=new WeakMap,ft=new WeakMap,Rt=new WeakMap;function Zn(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(me(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Nr.set(t,r)}).catch(()=>{}),Rt.set(e,r),e}function es(r){if(It.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});It.set(r,e)}let wt={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return It.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Mr.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return me(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ts(r){wt=r(wt)}function rs(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(pt(this),e,...t);return Mr.set(n,e.sort?e.sort():[e]),me(n)}:Qn().includes(r)?function(...e){return r.apply(pt(this),e),me(Nr.get(this))}:function(...e){return me(r.apply(pt(this),e))}}function ns(r){return typeof r=="function"?rs(r):(r instanceof IDBTransaction&&es(r),Yn(r,Xn())?new Proxy(r,wt):r)}function me(r){if(r instanceof IDBRequest)return Zn(r);if(ft.has(r))return ft.get(r);const e=ns(r);return e!==r&&(ft.set(r,e),Rt.set(e,r)),e}const pt=r=>Rt.get(r);function ss(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),o=me(a);return n&&a.addEventListener("upgradeneeded",c=>{n(me(a.result),c.oldVersion,c.newVersion,me(a.transaction))}),t&&a.addEventListener("blocked",()=>t()),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),o}const is=["get","getKey","getAll","getAllKeys","count"],as=["put","add","delete","clear"],gt=new Map;function Qt(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(gt.get(e))return gt.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=as.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||is.includes(t)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),s&&c.done]))[0]};return gt.set(e,i),i}ts(r=>({...r,get:(e,t,n)=>Qt(e,t)||r.get(e,t,n),has:(e,t)=>!!Qt(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cs(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function cs(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Et="@firebase/app",Zt="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Pr("@firebase/app"),ls="@firebase/app-compat",us="@firebase/analytics-compat",ds="@firebase/analytics",hs="@firebase/app-check-compat",fs="@firebase/app-check",ps="@firebase/auth",gs="@firebase/auth-compat",ms="@firebase/database",_s="@firebase/database-compat",vs="@firebase/functions",bs="@firebase/functions-compat",ys="@firebase/installations",Is="@firebase/installations-compat",ws="@firebase/messaging",Es="@firebase/messaging-compat",ks="@firebase/performance",Ts="@firebase/performance-compat",Ss="@firebase/remote-config",As="@firebase/remote-config-compat",Rs="@firebase/storage",Cs="@firebase/storage-compat",Os="@firebase/firestore",Ds="@firebase/firestore-compat",Ps="firebase",Ns="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="[DEFAULT]",Ms={[Et]:"fire-core",[ls]:"fire-core-compat",[ds]:"fire-analytics",[us]:"fire-analytics-compat",[fs]:"fire-app-check",[hs]:"fire-app-check-compat",[ps]:"fire-auth",[gs]:"fire-auth-compat",[ms]:"fire-rtdb",[_s]:"fire-rtdb-compat",[vs]:"fire-fn",[bs]:"fire-fn-compat",[ys]:"fire-iid",[Is]:"fire-iid-compat",[ws]:"fire-fcm",[Es]:"fire-fcm-compat",[ks]:"fire-perf",[Ts]:"fire-perf-compat",[Ss]:"fire-rc",[As]:"fire-rc-compat",[Rs]:"fire-gcs",[Cs]:"fire-gcs-compat",[Os]:"fire-fst",[Ds]:"fire-fst-compat","fire-js":"fire-js",[Ps]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Map,kt=new Map;function xs(r,e){try{r.container.addComponent(e)}catch(t){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Be(r){const e=r.name;if(kt.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;kt.set(e,r);for(const t of Ue.values())xs(t,r);return!0}function Lr(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ke=new je("app","Firebase",Ls);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=Ns;function Us(r,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:xr,automaticDataCollectionEnabled:!1},e),n=t.name;if(typeof n!="string"||!n)throw ke.create("bad-app-name",{appName:String(n)});const s=Ue.get(n);if(s){if(et(r,s.options)&&et(t,s.config))return s;throw ke.create("duplicate-app",{appName:n})}const i=new Wn(n);for(const o of kt.values())i.addComponent(o);const a=new $s(r,t,i);return Ue.set(n,a),a}function $r(r=xr){const e=Ue.get(r);if(!e)throw ke.create("no-app",{appName:r});return e}function Bs(){return Array.from(Ue.values())}function Le(r,e,t){var n;let s=(n=Ms[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ee.warn(o.join(" "));return}Be(new De(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="firebase-heartbeat-database",Fs=1,Ve="firebase-heartbeat-store";let mt=null;function Ur(){return mt||(mt=ss(Vs,Fs,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ve)}}}).catch(r=>{throw ke.create("idb-open",{originalErrorMessage:r.message})})),mt}async function Hs(r){var e;try{return(await Ur()).transaction(Ve).objectStore(Ve).get(Br(r))}catch(t){if(t instanceof _e)Ee.warn(t.message);else{const n=ke.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});Ee.warn(n.message)}}}async function er(r,e){var t;try{const s=(await Ur()).transaction(Ve,"readwrite");return await s.objectStore(Ve).put(e,Br(r)),s.done}catch(n){if(n instanceof _e)Ee.warn(n.message);else{const s=ke.create("idb-set",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Ee.warn(s.message)}}}function Br(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=1024,zs=30*24*60*60*1e3;class Ws{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ks(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=tr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=zs}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tr(),{heartbeatsToSend:t,unsentEntries:n}=Gs(this._heartbeatsCache.heartbeats),s=Dr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tr(){return new Date().toISOString().substring(0,10)}function Gs(r,e=js){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),rr(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),rr(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ks{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nn()?Mn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hs(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return er(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return er(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rr(r){return Dr(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(r){Be(new De("platform-logger",e=>new os(e),"PRIVATE")),Be(new De("heartbeat",e=>new Ws(e),"PRIVATE")),Le(Et,Zt,r),Le(Et,Zt,"esm2017"),Le("fire-js","")}qs("");function Ct(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Vr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Js=Vr,Fr=new je("auth","Firebase",Vr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Pr("@firebase/auth");function Ye(r,...e){nr.logLevel<=C.ERROR&&nr.error(`Auth (${ot}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(r,...e){throw Ot(r,...e)}function Z(r,...e){return Ot(r,...e)}function Hr(r,e,t){const n=Object.assign(Object.assign({},Js()),{[e]:t});return new je("auth","Firebase",n).create(e,{appName:r.name})}function Ys(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&te(r,"argument-error"),Hr(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ot(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Fr.create(r,...e)}function I(r,e,...t){if(!r)throw Ot(e,...t)}function se(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ye(e),new Error(e)}function ae(r,e){r||se(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Map;function ie(r){ae(r instanceof Function,"Expected a class definition");let e=sr.get(r);return e?(ae(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,sr.set(r,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(r,e){const t=Lr(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(et(i,e!=null?e:{}))return s;te(s,"already-initialized")}return t.initialize({options:e})}function Qs(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ie);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Zs(){return ir()==="http:"||ir()==="https:"}function ir(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zs()||On()||"connection"in navigator)?navigator.onLine:!0}function ti(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.shortDelay=e,this.longDelay=t,ae(t>e,"Short delay should be less than long delay!"),this.isMobile=Cn()||Dn()}get(){return ei()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r,e){ae(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new We(3e4,6e4);function si(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ct(r,e,t,n,s={}){return zr(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const o=ze(Object.assign({key:r.config.apiKey},a)).slice(1),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),jr.fetch()(Wr(r,r.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function zr(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},ri),e);try{const s=new ai(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Je(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const o=i.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Je(r,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Je(r,"email-already-in-use",a);if(c==="USER_DISABLED")throw Je(r,"user-disabled",a);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hr(r,h,u);te(r,h)}}catch(s){if(s instanceof _e)throw s;te(r,"network-request-failed")}}async function ii(r,e,t,n,s={}){const i=await ct(r,e,t,n,s);return"mfaPendingCredential"in i&&te(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Wr(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Dt(r.config,s):`${r.config.apiScheme}://${s}`}class ai{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Z(this.auth,"network-request-failed")),ni.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Je(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Z(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(r,e){return ct(r,"POST","/v1/accounts:delete",e)}async function ci(r,e){return ct(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(r){if(!!r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function li(r,e=!1){const t=at(r),n=await t.getIdToken(e),s=Pt(n);I(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:$e(_t(s.auth_time)),issuedAtTime:$e(_t(s.iat)),expirationTime:$e(_t(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _t(r){return Number(r)*1e3}function Pt(r){var e;const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Ye("JWT malformed, contained fewer than 3 sections"),null;try{const i=An(n);return i?JSON.parse(i):(Ye("Failed to decode base64 JWT payload"),null)}catch(i){return Ye("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function ui(r){const e=Pt(r);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof _e&&di(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function di({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$e(this.lastLoginAt),this.creationTime=$e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Fe(r,ci(t,{idToken:n}));I(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gi(i.providerUserInfo):[],o=pi(r.providerData,a),c=r.isAnonymous,u=!(r.email&&i.passwordHash)&&!(o!=null&&o.length),h=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Gr(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(r,p)}async function fi(r){const e=at(r);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pi(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function gi(r){return r.map(e=>{var{providerId:t}=e,n=Ct(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(r,e){const t=await zr(r,{},async()=>{const n=ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=Wr(r,s,"/v1/token",`key=${i}`),o=await r._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",jr.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ui(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await mi(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new He;return n&&(I(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(I(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(I(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new He,this.toJSON())}_performRefresh(){return se("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(r,e){I(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class we{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Ct(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Fe(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return li(this,e)}reload(){return fi(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new we(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fe(this,oi(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,a,o,c,u,h;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,E=(o=t.tenantId)!==null&&o!==void 0?o:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=t.createdAt)!==null&&u!==void 0?u:void 0,T=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:re,isAnonymous:$,providerData:M,stsTokenManager:ve}=t;I(D&&ve,e,"internal-error");const oe=He.fromJSON(this.name,ve);I(typeof D=="string",e,"internal-error"),he(p,e.name),he(g,e.name),I(typeof re=="boolean",e,"internal-error"),I(typeof $=="boolean",e,"internal-error"),he(_,e.name),he(k,e.name),he(E,e.name),he(v,e.name),he(A,e.name),he(T,e.name);const ce=new we({uid:D,auth:e,email:g,emailVerified:re,displayName:p,isAnonymous:$,photoURL:k,phoneNumber:_,tenantId:E,stsTokenManager:oe,createdAt:A,lastLoginAt:T});return M&&Array.isArray(M)&&(ce.providerData=M.map(Ne=>Object.assign({},Ne))),v&&(ce._redirectEventId=v),ce}static async _fromIdTokenResponse(e,t,n=!1){const s=new He;s.updateFromServerResponse(t);const i=new we({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await tt(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kr.type="NONE";const ar=Kr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(r,e,t){return`firebase:${r}:${e}:${t}`}class Ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Xe(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xe("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?we._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ce(ie(ar),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ie(ar);const a=Xe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const h=await u._get(a);if(h){const p=we._fromJSON(e,h);u!==i&&(o=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ce(i,e,n):(i=c[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new Ce(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qr(e))return"Blackberry";if(Zr(e))return"Webos";if(Nt(e))return"Safari";if((e.includes("chrome/")||Jr(e))&&!e.includes("edge/"))return"Chrome";if(Xr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function qr(r=V()){return/firefox\//i.test(r)}function Nt(r=V()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jr(r=V()){return/crios\//i.test(r)}function Yr(r=V()){return/iemobile/i.test(r)}function Xr(r=V()){return/android/i.test(r)}function Qr(r=V()){return/blackberry/i.test(r)}function Zr(r=V()){return/webos/i.test(r)}function lt(r=V()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _i(r=V()){var e;return lt(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vi(){return Pn()&&document.documentMode===10}function en(r=V()){return lt(r)||Xr(r)||Zr(r)||Qr(r)||/windows phone/i.test(r)||Yr(r)}function bi(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(r,e=[]){let t;switch(r){case"Browser":t=or(V());break;case"Worker":t=`${or(V())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ot}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,o)=>{try{const c=e(i);a(c)}catch(c){o(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=s)===null||t===void 0?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cr(this),this.idTokenSubscription=new cr(this),this.beforeStateQueue=new yi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Ce.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await tt(e)}catch(n){if(((t=n)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ti()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?at(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ie(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new je("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await Ce.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return I(a,this,"internal-error"),a.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Mt(r){return at(r)}class cr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bn(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return se("not implemented")}_getIdTokenResponse(e){return se("not implemented")}_linkToIdToken(e,t){return se("not implemented")}_getReauthenticationResolver(e){return se("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(r,e){return ii(r,"POST","/v1/accounts:signInWithIdp",si(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="http://localhost";class Te extends rn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):te("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Ct(t,["providerId","signInMethod"]);if(!n||!s)return null;const a=new Te(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Oe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Oe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oe(e,t)}buildRequest(){const e={requestUri:wi,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends xt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Ge{constructor(){super("facebook.com")}static credential(e){return Te._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fe.credential(e.oauthAccessToken)}catch{return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";fe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Te._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ne.credential(t,n)}catch{return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com";ne.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends Ge{constructor(){super("github.com")}static credential(e){return Te._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Te._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ge.credential(t,n)}catch{return null}}}ge.TWITTER_SIGN_IN_METHOD="twitter.com";ge.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await we._fromIdTokenResponse(e,n,s),a=lr(n);return new Pe({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=lr(n);return new Pe({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function lr(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends _e{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,rt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new rt(e,t,n,s)}}function nn(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?rt._fromErrorAndOperation(r,i,e,n):i})}async function Ei(r,e,t=!1){const n=await Fe(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Pe._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(r,e,t=!1){var n;const{auth:s}=r,i="reauthenticate";try{const a=await Fe(r,nn(s,i,e,r),t);I(a.idToken,s,"internal-error");const o=Pt(a.idToken);I(o,s,"internal-error");const{sub:c}=o;return I(r.uid===c,s,"user-mismatch"),Pe._forOperation(r,i,a)}catch(a){throw((n=a)===null||n===void 0?void 0:n.code)==="auth/user-not-found"&&te(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(r,e,t=!1){const n="signIn",s=await nn(r,n,e),i=await Pe._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}const nt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nt,"1"),this.storage.removeItem(nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){const r=V();return Nt(r)||lt(r)}const Ai=1e3,Ri=10;class an extends sn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Si()&&bi(),this.fallbackToPolling=en(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);vi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ri):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ai)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}an.type="LOCAL";const Ci=an;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends sn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}on.type="SESSION";const cn=on;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(r){return Promise.all(r.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ut(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(a).map(async u=>u(t.origin,i)),c=await Oi(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ut.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((o,c)=>{const u=Lt("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return window}function Pi(r){ee().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof ee().WorkerGlobalScope<"u"&&typeof ee().importScripts=="function"}async function Ni(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mi(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function xi(){return ln()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="firebaseLocalStorageDb",Li=1,st="firebaseLocalStorage",dn="fbase_key";class Ke{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dt(r,e){return r.transaction([st],e?"readwrite":"readonly").objectStore(st)}function $i(){const r=indexedDB.deleteDatabase(un);return new Ke(r).toPromise()}function St(){const r=indexedDB.open(un,Li);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(st,{keyPath:dn})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(st)?e(n):(n.close(),await $i(),e(await St()))})})}async function ur(r,e,t){const n=dt(r,!0).put({[dn]:e,value:t});return new Ke(n).toPromise()}async function Ui(r,e){const t=dt(r,!1).get(e),n=await new Ke(t).toPromise();return n===void 0?null:n.value}function dr(r,e){const t=dt(r,!0).delete(e);return new Ke(t).toPromise()}const Bi=800,Vi=3;class hn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await St(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Vi)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ln()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ut._getInstance(xi()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ni(),!this.activeServiceWorker)return;this.sender=new Di(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((t=n[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await St();return await ur(e,nt,"1"),await dr(e,nt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ur(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ui(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dt(s,!1).getAll();return new Ke(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hn.type="LOCAL";const Fi=hn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function ji(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Z("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Hi().appendChild(n)})}function zi(r){return`__${r}${Math.floor(Math.random()*1e6)}`}new We(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(r,e){return e?ie(e):(I(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends rn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wi(r){return Ti(r.auth,new $t(r),r.bypassAuthState)}function Gi(r){const{auth:e,user:t}=r;return I(t,e,"internal-error"),ki(t,new $t(r),r.bypassAuthState)}async function Ki(r){const{auth:e,user:t}=r;return I(t,e,"internal-error"),Ei(t,new $t(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wi;case"linkViaPopup":case"linkViaRedirect":return Ki;case"reauthViaPopup":case"reauthViaRedirect":return Gi;default:te(this.auth,"internal-error")}}resolve(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new We(2e3,1e4);async function Ji(r,e,t){const n=Mt(r);Ys(r,e,xt);const s=fn(n,t);return new Ie(n,"signInViaPopup",e,s).executeNotNull()}class Ie extends pn{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){ae(this.filter.length===1,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Z(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Z(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qi.get())};e()}}Ie.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="pendingRedirect",Qe=new Map;class Xi extends pn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Qe.get(this.auth._key());if(!e){try{const n=await Qi(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Qe.set(this.auth._key(),e)}return this.bypassAuthState||Qe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qi(r,e){const t=ta(e),n=ea(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Zi(r,e){Qe.set(r._key(),e)}function ea(r){return ie(r._redirectPersistence)}function ta(r){return Xe(Yi,r.config.apiKey,r.name)}async function ra(r,e,t=!1){const n=Mt(r),s=fn(n,e),a=await new Xi(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=10*60*1e3;class sa{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ia(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!gn(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Z(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=na&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(e))}saveEventToCache(e){this.cachedEventUids.add(hr(e)),this.lastProcessedEventTime=Date.now()}}function hr(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function gn({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ia(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gn(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(r,e={}){return ct(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ca=/^https?/;async function la(r){if(r.config.emulator)return;const{authorizedDomains:e}=await aa(r);for(const t of e)try{if(ua(t))return}catch{}te(r,"unauthorized-domain")}function ua(r){const e=Tt(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!ca.test(t))return!1;if(oa.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new We(3e4,6e4);function fr(){const r=ee().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function ha(r){return new Promise((e,t)=>{var n,s,i;function a(){fr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fr(),t(Z(r,"network-request-failed"))},timeout:da.get()})}if(!((s=(n=ee().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ee().gapi)===null||i===void 0)&&i.load)a();else{const o=zi("iframefcb");return ee()[o]=()=>{gapi.load?a():t(Z(r,"network-request-failed"))},ji(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw Ze=null,e})}let Ze=null;function fa(r){return Ze=Ze||ha(r),Ze}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new We(5e3,15e3),ga="__/auth/iframe",ma="emulator/auth/iframe",_a={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},va=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ba(r){const e=r.config;I(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Dt(e,ma):`https://${r.config.authDomain}/${ga}`,n={apiKey:e.apiKey,appName:r.name,v:ot},s=va.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ze(n).slice(1)}`}async function ya(r){const e=await fa(r),t=ee().gapi;return I(t,r,"internal-error"),e.open({where:document.body,url:ba(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_a,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=Z(r,"network-request-failed"),o=ee().setTimeout(()=>{i(a)},pa.get());function c(){ee().clearTimeout(o),s(n)}n.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wa=500,Ea=600,ka="_blank",Ta="http://localhost";class pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sa(r,e,t,n=wa,s=Ea){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Ia),{width:n.toString(),height:s.toString(),top:i,left:a}),u=V().toLowerCase();t&&(o=Jr(u)?ka:t),qr(u)&&(e=e||Ta,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[_,k])=>`${g}${_}=${k},`,"");if(_i(u)&&o!=="_self")return Aa(e||"",o),new pr(null);const p=window.open(e||"",o,h);I(p,r,"popup-blocked");try{p.focus()}catch{}return new pr(p)}function Aa(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="__/auth/handler",Ca="emulator/auth/handler";function gr(r,e,t,n,s,i){I(r.config.authDomain,r,"auth-domain-config-required"),I(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ot,eventId:s};if(e instanceof xt){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Un(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))a[c]=u}if(e instanceof Ge){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(a.scopes=c.join(","))}r.tenantId&&(a.tid=r.tenantId);const o=a;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];return`${Oa(r)}?${ze(o).slice(1)}`}function Oa({config:r}){return r.emulator?Dt(r,Ca):`https://${r.authDomain}/${Ra}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="webStorageSupport";class Da{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cn,this._completeRedirectFn=ra,this._overrideRedirectResult=Zi}async _openPopup(e,t,n,s){var i;ae((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=gr(e,t,n,Tt(),s);return Sa(e,a,Lt())}async _openRedirect(e,t,n,s){return await this._originValidation(e),Pi(gr(e,t,n,Tt(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ae(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ya(e),n=new sa(e);return t.register("authEvent",s=>(I(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vt,{type:vt},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vt];a!==void 0&&t(!!a),te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=la(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return en()||Nt()||lt()}}const Pa=Da;var mr="@firebase/auth",_r="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{var s;e(((s=n)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xa(r){Be(new De("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:a}=n.options;return((o,c)=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),I(!(a!=null&&a.includes(":")),"argument-error",{appName:o.name});const u={apiKey:i,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tn(r)},h=new Ii(o,c,u);return Qs(h,t),h})(n,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Be(new De("auth-internal",e=>{const t=Mt(e.getProvider("auth").getImmediate());return(n=>new Na(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(mr,_r,Ma(r)),Le(mr,_r,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(r=$r()){const e=Lr(r,"auth");return e.isInitialized()?e.getImmediate():Xs(r,{popupRedirectResolver:Pa,persistence:[Fi,Ci,cn]})}xa("Browser");const $a={apiKey:Re.PUBLIC_FIREBASE_API_KEY,authDomain:Re.PUBLIC_FIREBASE_AUTH_DOMAIN,projectId:Re.PUBLIC_FIREBASE_PROJECT_ID,storageBucket:Re.PUBLIC_FIREBASE_STORAGE_BUCKET,messagingSenderId:Re.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,appId:Re.PUBLIC_FIREBASE_APP_ID};Bs().length||Us($a);const it=()=>La($r()),Ua=new ne,vr=()=>Ji(it(),Ua);function br(r,e,t){const n=r.slice();return n[2]=e[t],n}function yr(r){let e,t,n,s=r[2].name+"",i,a,o;return{c(){e=b("li"),t=b("a"),n=b("div"),i=q(s),o=U(),this.h()},l(c){e=y(c,"LI",{class:!0});var u=m(e);t=y(u,"A",{"data-sveltekit-prefetch":!0,href:!0});var h=m(t);n=y(h,"DIV",{class:!0});var p=m(n);i=J(p,s),p.forEach(d),h.forEach(d),o=B(u),u.forEach(d),this.h()},h(){l(n,"class",a=`text-xs md:text-sm px-0 sm:px-4 py-1 rounded ${r[2].href===r[0].url.pathname?"bg-green-700 hover:bg-green-800 text-white":"bg-gray-800 hover:text-green-500 text-gray-400"}`),l(t,"data-sveltekit-prefetch",""),l(t,"href",r[2].href),l(e,"class","mb-4 text-center relative cursor-pointer")},m(c,u){L(c,e,u),f(e,t),f(t,n),f(n,i),f(e,o)},p(c,u){u&1&&a!==(a=`text-xs md:text-sm px-0 sm:px-4 py-1 rounded ${c[2].href===c[0].url.pathname?"bg-green-700 hover:bg-green-800 text-white":"bg-gray-800 hover:text-green-500 text-gray-400"}`)&&l(n,"class",a)},d(c){c&&d(e)}}}function Ba(r){let e,t,n,s,i=r[1],a=[];for(let o=0;o<i.length;o+=1)a[o]=yr(br(r,i,o));return{c(){e=b("nav"),t=b("div"),n=b("div"),s=b("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=y(o,"NAV",{class:!0});var c=m(e);t=y(c,"DIV",{class:!0});var u=m(t);n=y(u,"DIV",{class:!0});var h=m(n);s=y(h,"UL",{class:!0});var p=m(s);for(let g=0;g<a.length;g+=1)a[g].l(p);p.forEach(d),h.forEach(d),u.forEach(d),c.forEach(d),this.h()},h(){l(s,"class","flex flex-col flex-wrap align-middle items-left text-sm font-semibold justify-around mx-2"),l(n,"class","mt-10"),l(t,"class","mt-5 mb-5"),l(e,"class","bg-gray-900 w-2/12 justify-between flex flex-col h-full")},m(o,c){L(o,e,c),f(e,t),f(t,n),f(n,s);for(let u=0;u<a.length;u+=1)a[u].m(s,null)},p(o,[c]){if(c&3){i=o[1];let u;for(u=0;u<i.length;u+=1){const h=br(o,i,u);a[u]?a[u].p(h,c):(a[u]=yr(h),a[u].c(),a[u].m(s,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=i.length}},i:S,o:S,d(o){o&&d(e),yn(a,o)}}}function Va(r,e,t){let n;return yt(r,kn,i=>t(0,n=i)),[n,[{href:"/album",name:"Photos",tooltip:"Photos App"}]]}class Fa extends Y{constructor(e){super(),X(this,e,Va,Ba,Q,{})}}const Ir=Rr({isLoggedIn:!1,firebaseControlled:!1}),mn={subscribe:Ir.subscribe,set:Ir.set},bt=Rr(!1),At={subscribe:bt.subscribe,set:bt.set,update:bt.update};function Ha(r){let e,t,n,s,i;return{c(){e=F("svg"),t=F("style"),n=q(".st0{fill:#ff3e00}.st1{fill:#fff}"),s=F("path"),i=F("path"),this.h()},l(a){e=H(a,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0,height:!0,width:!0});var o=m(e);t=H(o,"style",{lang:!0});var c=m(t);n=J(c,".st0{fill:#ff3e00}.st1{fill:#fff}"),c.forEach(d),s=H(o,"path",{class:!0,d:!0}),m(s).forEach(d),i=H(o,"path",{class:!0,d:!0}),m(i).forEach(d),o.forEach(d),this.h()},h(){l(t,"lang","css"),l(s,"class","st0"),l(s,"d",`M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
	c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
	c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6`),l(i,"class","st1"),l(i,"d",`M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
	c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
	c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
	c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
	c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
	c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
	c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
	c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9`),l(e,"version","1.1"),l(e,"id","Layer_1"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),l(e,"x","0px"),l(e,"y","0px"),l(e,"viewBox","0 0 98.1 118"),In(e,"enable-background","new 0 0 98.1 118"),l(e,"xml:space","preserve"),l(e,"height","30px"),l(e,"width","30px")},m(a,o){L(a,e,o),f(e,t),f(t,n),f(e,s),f(e,i)},p:S,i:S,o:S,d(a){a&&d(e)}}}class ja extends Y{constructor(e){super(),X(this,e,null,Ha,Q,{})}}function za(r){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(n){e=H(n,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var s=m(e);t=H(s,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),m(t).forEach(d),s.forEach(d),this.h()},h(){l(t,"fill-rule","evenodd"),l(t,"d","M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"),l(t,"clip-rule","evenodd"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"class","h-6 w-6"),l(e,"viewBox","0 0 20 20"),l(e,"fill","currentColor")},m(n,s){L(n,e,s),f(e,t)},p:S,i:S,o:S,d(n){n&&d(e)}}}class Wa extends Y{constructor(e){super(),X(this,e,null,za,Q,{})}}function Ga(r){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(n){e=H(n,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var s=m(e);t=H(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),m(t).forEach(d),s.forEach(d),this.h()},h(){l(t,"stroke-linecap","round"),l(t,"stroke-linejoin","round"),l(t,"stroke-width","2"),l(t,"d","M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"class","h-6 w-6"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor")},m(n,s){L(n,e,s),f(e,t)},p:S,i:S,o:S,d(n){n&&d(e)}}}class Ka extends Y{constructor(e){super(),X(this,e,null,Ga,Q,{})}}function qa(r){let e,t,n;return{c(){e=F("svg"),t=F("path"),n=F("path"),this.h()},l(s){e=H(s,"svg",{xmlns:!0,viewBox:!0,class:!0});var i=m(e);t=H(i,"path",{fill:!0,d:!0}),m(t).forEach(d),n=H(i,"path",{d:!0,fill:!0}),m(n).forEach(d),i.forEach(d),this.h()},h(){l(t,"fill","none"),l(t,"d","M0 0h24v24H0z"),l(n,"d","M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"),l(n,"fill","#000"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"viewBox","0 0 24 24"),l(e,"class","w-6 h-6")},m(s,i){L(s,e,i),f(e,t),f(e,n)},p:S,i:S,o:S,d(s){s&&d(e)}}}class _n extends Y{constructor(e){super(),X(this,e,null,qa,Q,{})}}function Ja(r){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(n){e=H(n,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var s=m(e);t=H(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),m(t).forEach(d),s.forEach(d),this.h()},h(){l(t,"stroke-linecap","round"),l(t,"stroke-linejoin","round"),l(t,"stroke-width","2"),l(t,"d","M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"class","h-4 w-4"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor")},m(n,s){L(n,e,s),f(e,t)},p:S,i:S,o:S,d(n){n&&d(e)}}}class vn extends Y{constructor(e){super(),X(this,e,null,Ja,Q,{})}}function Ya(r){let e,t;return{c(){e=F("svg"),t=F("path"),this.h()},l(n){e=H(n,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0});var s=m(e);t=H(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),m(t).forEach(d),s.forEach(d),this.h()},h(){l(t,"stroke-linecap","round"),l(t,"stroke-linejoin","round"),l(t,"stroke-width","2"),l(t,"d","M4 6h16M4 12h16M4 18h16"),l(e,"class","block h-6 w-6"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor"),l(e,"aria-hidden","true")},m(n,s){L(n,e,s),f(e,t)},p:S,i:S,o:S,d(n){n&&d(e)}}}class Xa extends Y{constructor(e){super(),X(this,e,null,Ya,Q,{})}}function Qa(r){let e,t;return e=new Ka({}),{c(){z(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,s){G(e,n,s),t=!0},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function Za(r){let e,t;return e=new Wa({}),{c(){z(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,s){G(e,n,s),t=!0},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function eo(r){let e,t,n,s,i,a;return n=new _n({}),{c(){e=b("div"),t=b("button"),z(n.$$.fragment),this.h()},l(o){e=y(o,"DIV",{});var c=m(e);t=y(c,"BUTTON",{type:!0,class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0,"aria-label":!0});var u=m(t);W(n.$$.fragment,u),u.forEach(d),c.forEach(d),this.h()},h(){l(t,"type","button"),l(t,"class","max-w-xs bg-green-200 border rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"),l(t,"id","user-sign-in-sm"),l(t,"aria-expanded","false"),l(t,"aria-haspopup","true"),l(t,"aria-label","Sign In")},m(o,c){L(o,e,c),f(e,t),G(n,t,null),s=!0,i||(a=Se(t,"click",r[5]),i=!0)},p:S,i(o){s||(R(n.$$.fragment,o),s=!0)},o(o){O(n.$$.fragment,o),s=!1},d(o){o&&d(e),K(n),i=!1,a()}}}function to(r){let e,t,n=r[2].user.displayName+"",s,i,a,o,c,u,h,p,g,_,k;return{c(){e=b("div"),t=b("p"),s=q(n),i=U(),a=b("button"),o=b("span"),c=q("Open user menu"),u=U(),h=b("img"),this.h()},l(E){e=y(E,"DIV",{class:!0});var v=m(e);t=y(v,"P",{class:!0});var A=m(t);s=J(A,n),A.forEach(d),i=B(v),a=y(v,"BUTTON",{type:!0,class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var T=m(a);o=y(T,"SPAN",{class:!0});var D=m(o);c=J(D,"Open user menu"),D.forEach(d),u=B(T),h=y(T,"IMG",{class:!0,src:!0,alt:!0}),T.forEach(d),v.forEach(d),this.h()},h(){l(t,"class","text-xs text-gray-700 dark:text-gray-100 mx-1"),l(o,"class","sr-only"),l(h,"class","h-8 w-8 rounded-full"),qt(h.src,p=`https://ui-avatars.com/api/?font-size=0.33&background=ff3e00&color=fff&name=${r[2].user.displayName}`)||l(h,"src",p),l(h,"alt",g=r[2].user.displayName),l(a,"type","button"),l(a,"class","max-w-xs bg-gray-800 dark:bg-gray-100 border-0 rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"),l(a,"id","user-menu-button"),l(a,"aria-expanded","false"),l(a,"aria-haspopup","true"),l(e,"class","flex justify-end align-middle items-center")},m(E,v){L(E,e,v),f(e,t),f(t,s),f(e,i),f(e,a),f(a,o),f(o,c),f(a,u),f(a,h),_||(k=Se(a,"click",r[4]),_=!0)},p(E,v){v&4&&n!==(n=E[2].user.displayName+"")&&wn(s,n),v&4&&!qt(h.src,p=`https://ui-avatars.com/api/?font-size=0.33&background=ff3e00&color=fff&name=${E[2].user.displayName}`)&&l(h,"src",p),v&4&&g!==(g=E[2].user.displayName)&&l(h,"alt",g)},i:S,o:S,d(E){E&&d(e),_=!1,k()}}}function wr(r){let e,t,n,s,i,a,o,c,u,h;return s=new vn({}),{c(){e=b("div"),t=b("button"),n=b("div"),z(s.$$.fragment),i=U(),a=b("div"),o=q("Sign out"),this.h()},l(p){e=y(p,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0});var g=m(e);t=y(g,"BUTTON",{type:!0,class:!0,role:!0,tabindex:!0,id:!0});var _=m(t);n=y(_,"DIV",{class:!0});var k=m(n);W(s.$$.fragment,k),i=B(k),a=y(k,"DIV",{class:!0});var E=m(a);o=J(E,"Sign out"),E.forEach(d),k.forEach(d),_.forEach(d),g.forEach(d),this.h()},h(){l(a,"class","mx-1"),l(n,"class","flex align-middle text-center items-center w-full "),l(t,"type","button"),l(t,"class","block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"),l(t,"role","menuitem"),l(t,"tabindex","-1"),l(t,"id","user-menu-item-2"),l(e,"class","origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"),l(e,"role","menu"),l(e,"aria-orientation","vertical"),l(e,"aria-labelledby","user-menu-button"),l(e,"tabindex","-1")},m(p,g){L(p,e,g),f(e,t),f(t,n),G(s,n,null),f(n,i),f(n,a),f(a,o),c=!0,u||(h=Se(t,"click",r[6]),u=!0)},p:S,i(p){c||(R(s.$$.fragment,p),c=!0)},o(p){O(s.$$.fragment,p),c=!1},d(p){p&&d(e),K(s),u=!1,h()}}}function ro(r){let e,t,n,s,i,a;return n=new _n({}),{c(){e=b("div"),t=b("button"),z(n.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0});var c=m(e);t=y(c,"BUTTON",{type:!0,class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var u=m(t);W(n.$$.fragment,u),u.forEach(d),c.forEach(d),this.h()},h(){l(t,"type","button"),l(t,"class","max-w-xs bg-green-200 border rounded-full flex items-center text-sm focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white shadow"),l(t,"id","user-menu-button"),l(t,"aria-expanded","false"),l(t,"aria-haspopup","true"),l(e,"class","-mr-2 flex md:hidden")},m(o,c){L(o,e,c),f(e,t),G(n,t,null),s=!0,i||(a=Se(t,"click",r[8]),i=!0)},p:S,i(o){s||(R(n.$$.fragment,o),s=!0)},o(o){O(n.$$.fragment,o),s=!1},d(o){o&&d(e),K(n),i=!1,a()}}}function no(r){let e,t,n,s,i,a,o,c,u;return a=new Xa({}),{c(){e=b("div"),t=b("button"),n=b("span"),s=q("Open main menu"),i=U(),z(a.$$.fragment),this.h()},l(h){e=y(h,"DIV",{class:!0});var p=m(e);t=y(p,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var g=m(t);n=y(g,"SPAN",{class:!0});var _=m(n);s=J(_,"Open main menu"),_.forEach(d),i=B(g),W(a.$$.fragment,g),g.forEach(d),p.forEach(d),this.h()},h(){l(n,"class","sr-only"),l(t,"type","button"),l(t,"class","bg-gray-800 relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),l(t,"aria-controls","mobile-menu"),l(t,"aria-expanded","false"),l(e,"class","-mr-2 flex md:hidden")},m(h,p){L(h,e,p),f(e,t),f(t,n),f(n,s),f(t,i),G(a,t,null),o=!0,c||(u=Se(t,"click",r[7]),c=!0)},p:S,i(h){o||(R(a.$$.fragment,h),o=!0)},o(h){O(a.$$.fragment,h),o=!1},d(h){h&&d(e),K(a),c=!1,u()}}}function Er(r){let e,t,n,s,i,a,o,c,u,h,p,g;return a=new vn({}),{c(){e=b("div"),t=b("div"),n=b("div"),s=b("button"),i=b("div"),z(a.$$.fragment),o=U(),c=b("div"),u=q("Sign out"),this.h()},l(_){e=y(_,"DIV",{class:!0,id:!0});var k=m(e);t=y(k,"DIV",{class:!0});var E=m(t);n=y(E,"DIV",{class:!0});var v=m(n);s=y(v,"BUTTON",{type:!0,class:!0});var A=m(s);i=y(A,"DIV",{class:!0});var T=m(i);W(a.$$.fragment,T),o=B(T),c=y(T,"DIV",{class:!0});var D=m(c);u=J(D,"Sign out"),D.forEach(d),T.forEach(d),A.forEach(d),v.forEach(d),E.forEach(d),k.forEach(d),this.h()},h(){l(c,"class","mx-1"),l(i,"class","flex align-middle text-center items-center w-full "),l(s,"type","button"),l(s,"class","block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"),l(n,"class","mt-1 px-2 space-y-1"),l(t,"class","pt-4 pb-3 border-gray-700 dark:bg-gray-700"),l(e,"class","md:hidden"),l(e,"id","mobile-menu")},m(_,k){L(_,e,k),f(e,t),f(t,n),f(n,s),f(s,i),G(a,i,null),f(i,o),f(i,c),f(c,u),h=!0,p||(g=Se(s,"click",r[9]),p=!0)},p:S,i(_){h||(R(a.$$.fragment,_),h=!0)},o(_){O(a.$$.fragment,_),h=!1},d(_){_&&d(e),K(a),p=!1,g()}}}function so(r){let e,t,n,s,i,a,o,c,u,h,p,g,_,k,E,v,A,T,D,re,$,M,ve,oe,ce,Ne,Ut;s=new ja({});const Bt=[Za,Qa],be=[];function Vt(w,x){return w[0]===!0?0:1}_=Vt(r),k=be[_]=Bt[_](r);const Ft=[to,eo],le=[];function Ht(w,x){return w[2].isLoggedIn?0:1}A=Ht(r),T=le[A]=Ft[A](r);let P=r[1]&&wr(r);const jt=[no,ro],ue=[];function zt(w,x){return w[2].isLoggedIn?0:1}$=zt(r),M=ue[$]=jt[$](r);let N=r[1]&&Er(r);return{c(){e=b("div"),t=b("div"),n=b("a"),z(s.$$.fragment),i=U(),a=b("span"),o=q("SvelteKit Experiments"),c=U(),u=b("div"),h=U(),p=b("div"),g=b("button"),k.c(),E=U(),v=b("div"),T.c(),D=U(),P&&P.c(),re=U(),M.c(),ve=U(),N&&N.c(),oe=Kt(),this.h()},l(w){e=y(w,"DIV",{class:!0});var x=m(e);t=y(x,"DIV",{class:!0});var j=m(t);n=y(j,"A",{"data-sveltekit-prefetch":!0,href:!0,class:!0});var de=m(n);W(s.$$.fragment,de),i=B(de),a=y(de,"SPAN",{class:!0});var Ae=m(a);o=J(Ae,"SvelteKit Experiments"),Ae.forEach(d),de.forEach(d),c=B(j),u=y(j,"DIV",{class:!0});var bn=m(u);bn.forEach(d),h=B(j),p=y(j,"DIV",{class:!0});var Wt=m(p);g=y(Wt,"BUTTON",{type:!0,"aria-label":!0});var Gt=m(g);k.l(Gt),Gt.forEach(d),Wt.forEach(d),E=B(j),v=y(j,"DIV",{class:!0});var qe=m(v);T.l(qe),D=B(qe),P&&P.l(qe),qe.forEach(d),re=B(j),M.l(j),j.forEach(d),x.forEach(d),ve=B(w),N&&N.l(w),oe=Kt(),this.h()},h(){l(a,"class","font-semibold tracking-tight text-gray-700 dark:text-gray-100 p-2"),l(n,"data-sveltekit-prefetch",""),l(n,"href","/"),l(n,"class","flex flex-1"),l(u,"class","text-gray-700 dark:text-gray-100 p-2 mx-1"),l(g,"type","button"),l(g,"aria-label",`${At?"Turn on Light Mode":"Turn on Dark Mode"}`),l(p,"class","text-gray-700 dark:text-gray-100 mt-2 mx-2"),l(v,"class","ml-3 relative hidden md:block"),l(t,"class","flex items-center flex-no-shrink text-white flex-1 justify-start mr-6"),l(e,"class","flex items-center justify-between flex-wrap bg-gray-50 dark:bg-gray-900 dark:text-white p-2 align-middle")},m(w,x){L(w,e,x),f(e,t),f(t,n),G(s,n,null),f(n,i),f(n,a),f(a,o),f(t,c),f(t,u),f(t,h),f(t,p),f(p,g),be[_].m(g,null),f(t,E),f(t,v),le[A].m(v,null),f(v,D),P&&P.m(v,null),f(t,re),ue[$].m(t,null),L(w,ve,x),N&&N.m(w,x),L(w,oe,x),ce=!0,Ne||(Ut=Se(g,"click",r[3]),Ne=!0)},p(w,[x]){let j=_;_=Vt(w),_!==j&&(Me(),O(be[j],1,1,()=>{be[j]=null}),xe(),k=be[_],k||(k=be[_]=Bt[_](w),k.c()),R(k,1),k.m(g,null));let de=A;A=Ht(w),A===de?le[A].p(w,x):(Me(),O(le[de],1,1,()=>{le[de]=null}),xe(),T=le[A],T?T.p(w,x):(T=le[A]=Ft[A](w),T.c()),R(T,1),T.m(v,D)),w[1]?P?(P.p(w,x),x&2&&R(P,1)):(P=wr(w),P.c(),R(P,1),P.m(v,null)):P&&(Me(),O(P,1,1,()=>{P=null}),xe());let Ae=$;$=zt(w),$===Ae?ue[$].p(w,x):(Me(),O(ue[Ae],1,1,()=>{ue[Ae]=null}),xe(),M=ue[$],M?M.p(w,x):(M=ue[$]=jt[$](w),M.c()),R(M,1),M.m(t,null)),w[1]?N?(N.p(w,x),x&2&&R(N,1)):(N=Er(w),N.c(),R(N,1),N.m(oe.parentNode,oe)):N&&(Me(),O(N,1,1,()=>{N=null}),xe())},i(w){ce||(R(s.$$.fragment,w),R(k),R(T),R(P),R(M),R(N),ce=!0)},o(w){O(s.$$.fragment,w),O(k),O(T),O(P),O(M),O(N),ce=!1},d(w){w&&d(e),K(s),be[_].d(),le[A].d(),P&&P.d(),ue[$].d(),w&&d(ve),N&&N.d(w),w&&d(oe),Ne=!1,Ut()}}}function io(r,e,t){let n,s;yt(r,At,_=>t(0,n=_)),yt(r,mn,_=>t(2,s=_));let i=!1;const a=()=>At.update(_=>_=!_),o=()=>t(1,i=!i),c=()=>vr(),u=async()=>{t(1,i=!1),await it().signOut()},h=()=>t(1,i=!i),p=()=>vr(),g=async()=>{t(1,i=!1),await it().signOut()};return r.$$.update=()=>{r.$$.dirty&1&&(n===!0?document.documentElement.classList.add("dark"):n===!1&&document.documentElement.classList.remove("dark"))},[n,i,s,a,o,c,u,h,p,g]}class ao extends Y{constructor(e){super(),X(this,e,io,so,Q,{})}}function oo(r){let e,t,n,s,i,a,o,c,u,h;return{c(){e=b("footer"),t=b("div"),n=q("tsukhu@github"),s=U(),i=b("div"),a=b("a"),o=q("Github Repo"),c=U(),u=b("div"),h=q("Powered by SvelteKit"),this.h()},l(p){e=y(p,"FOOTER",{class:!0});var g=m(e);t=y(g,"DIV",{});var _=m(t);n=J(_,"tsukhu@github"),_.forEach(d),s=B(g),i=y(g,"DIV",{});var k=m(i);a=y(k,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var E=m(a);o=J(E,"Github Repo"),E.forEach(d),k.forEach(d),c=B(g),u=y(g,"DIV",{});var v=m(u);h=J(v,"Powered by SvelteKit"),v.forEach(d),g.forEach(d),this.h()},h(){l(a,"href","https://github.com/tsukhu/sveltekit-demo"),l(a,"target","_blank"),l(a,"rel","noreferrer"),l(a,"aria-label","Github Repo"),l(a,"class","hover:text-green-700 dark:hover:text-green-200"),l(e,"class","p-2 bg-white dark:bg-gray-900 flex text-gray-600 dark:text-gray-100 text-xs align-middle items-center justify-between shadow-sm border-t border-gray-100 dark:border-gray-700")},m(p,g){L(p,e,g),f(e,t),f(t,n),f(e,s),f(e,i),f(i,a),f(a,o),f(e,c),f(e,u),f(u,h)},p:S,i:S,o:S,d(p){p&&d(e)}}}class co extends Y{constructor(e){super(),X(this,e,null,oo,Q,{})}}function lo(r){let e,t,n,s,i,a,o,c,u,h,p,g,_;n=new Fa({}),a=new ao({});const k=r[1].default,E=kr(k,r,r[0],null);return g=new co({}),{c(){e=b("div"),t=b("div"),z(n.$$.fragment),s=U(),i=b("div"),z(a.$$.fragment),o=U(),c=b("div"),u=b("div"),h=b("div"),E&&E.c(),p=U(),z(g.$$.fragment),this.h()},l(v){e=y(v,"DIV",{class:!0});var A=m(e);t=y(A,"DIV",{class:!0});var T=m(t);W(n.$$.fragment,T),s=B(T),i=y(T,"DIV",{class:!0});var D=m(i);W(a.$$.fragment,D),o=B(D),c=y(D,"DIV",{class:!0});var re=m(c);u=y(re,"DIV",{class:!0});var $=m(u);h=y($,"DIV",{class:!0});var M=m(h);E&&E.l(M),M.forEach(d),$.forEach(d),re.forEach(d),p=B(D),W(g.$$.fragment,D),D.forEach(d),T.forEach(d),A.forEach(d),this.h()},h(){l(h,"class","border border-gray-100 dark:border-gray-500 bg-white dark:bg-gray-500 rounded-lg flex-1 p-2 shadow"),l(u,"class","px-2 py-2 sm:px-0 flex flex-col h-full"),l(c,"class","flex-1 py-6 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-600"),l(i,"class","flex-1 flex flex-col"),l(t,"class","flex flex-row flex-1"),l(e,"class","flex flex-col h-screen justify-between")},m(v,A){L(v,e,A),f(e,t),G(n,t,null),f(t,s),f(t,i),G(a,i,null),f(i,o),f(i,c),f(c,u),f(u,h),E&&E.m(h,null),f(i,p),G(g,i,null),_=!0},p(v,[A]){E&&E.p&&(!_||A&1)&&Tr(E,k,v,v[0],_?Ar(k,v[0],A,null):Sr(v[0]),null)},i(v){_||(R(n.$$.fragment,v),R(a.$$.fragment,v),R(E,v),R(g.$$.fragment,v),_=!0)},o(v){O(n.$$.fragment,v),O(a.$$.fragment,v),O(E,v),O(g.$$.fragment,v),_=!1},d(v){v&&d(e),K(n),K(a),E&&E.d(v),K(g)}}}function uo(r,e,t){let{$$slots:n={},$$scope:s}=e;return En(()=>{it().onAuthStateChanged(i=>{mn.set({isLoggedIn:i!==null,user:i,firebaseControlled:!0})})}),r.$$set=i=>{"$$scope"in i&&t(0,s=i.$$scope)},[s,n]}class ho extends Y{constructor(e){super(),X(this,e,uo,lo,Q,{})}}function fo(r){let e;const t=r[0].default,n=kr(t,r,r[1],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&2)&&Tr(n,t,s,s[1],e?Ar(t,s[1],i,null):Sr(s[1]),null)},i(s){e||(R(n,s),e=!0)},o(s){O(n,s),e=!1},d(s){n&&n.d(s)}}}function po(r){let e,t;return e=new ho({props:{$$slots:{default:[fo]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(n){W(e.$$.fragment,n)},m(n,s){G(e,n,s),t=!0},p(n,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){K(e,n)}}}function go(r,e,t){let{$$slots:n={},$$scope:s}=e;return r.$$set=i=>{"$$scope"in i&&t(1,s=i.$$scope)},[n,s]}class yo extends Y{constructor(e){super(),X(this,e,go,po,Q,{})}}export{yo as default};
