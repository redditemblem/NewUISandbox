import"./chunk-YGNH4IZQ.js";import{a as dn,b as un,c as Xc,d as Hi,e as V_,f as j_,g as Ya}from"./chunk-TIUDEM6F.js";import"./chunk-ZK42EGRD.js";import"./chunk-QLVYIERW.js";import"./chunk-3FLVH57M.js";import"./chunk-IUZROHWA.js";import{c as el,g as U_}from"./chunk-EYURC6HL.js";import{n as Co,o as B_,p as zf,r as $f}from"./chunk-HOLRDYB5.js";import"./chunk-PN6G22QX.js";import{a as _r,b as jt}from"./chunk-PS44K3ZS.js";import"./chunk-WI2ARUOM.js";import{j as H_}from"./chunk-K3ZTBVCS.js";import{a as Jc}from"./chunk-XLGSZT3T.js";import"./chunk-TUN25R3O.js";import"./chunk-RYUROZ73.js";import{D as Qc,E as Ge,a as _,b as W,c as jf,d as Q,e as Kt,m as Uf,o as Hf,p as en}from"./chunk-YBH2XKKE.js";var At=null,tl=!1,Gf=1,mM=null,We=Symbol("SIGNAL");function X(t){let n=At;return At=t,n}function nl(){return At}var ui={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function zi(t){if(tl)throw new Error("");if(At===null)return;At.consumerOnSignalRead(t);let n=At.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=At.recomputing;if(i&&(e=n!==void 0?n.nextProducer:At.producers,e!==void 0&&e.producer===t)){At.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===At&&(!i||fM(r,At)))return;let o=Do(At),a={producer:t,consumer:At,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};At.producersTail=a,n!==void 0?n.nextProducer=a:At.producers=a,o&&q_(t,a)}function z_(){Gf++}function Cr(t){if(!(Do(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Gf)){if(!t.producerMustRecompute(t)&&!wr(t)){wo(t);return}t.producerRecomputeValue(t),wo(t)}}function Wf(t){if(t.consumers===void 0)return;let n=tl;tl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||$_(i)}}finally{tl=n}}function qf(){return At?.consumerAllowSignalWrites!==!1}function $_(t){t.dirty=!0,Wf(t),t.consumerMarkedDirty?.(t)}function wo(t){t.dirty=!1,t.lastCleanEpoch=Gf}function Gn(t){return t&&G_(t),X(t)}function G_(t){t.producersTail=void 0,t.recomputing=!0}function mi(t,n){X(n),t&&W_(t)}function W_(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Do(t))do e=Zf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function wr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Cr(e),i!==e.version))return!0}return!1}function fi(t){if(Do(t)){let n=t.producers;for(;n!==void 0;)n=Zf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function q_(t,n){let e=t.consumersTail,i=Do(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)q_(r.producer,r)}function Zf(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Do(n)){let o=n.producers;for(;o!==void 0;)o=Zf(o)}return e}function Do(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ka(t){mM?.(t)}function fM(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Qa(t,n){return Object.is(t,n)}function Xa(t,n){let e=Object.create(pM);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Cr(e),zi(e),e.value===$n)throw e.error;return e.value};return i[We]=e,Ka(e),i}var yr=Symbol("UNSET"),xr=Symbol("COMPUTING"),$n=Symbol("ERRORED"),pM=W(_({},ui),{value:yr,dirty:!0,error:null,equal:Qa,kind:"computed",producerMustRecompute(t){return t.value===yr||t.value===xr},producerRecomputeValue(t){if(t.value===xr)throw new Error("");let n=t.value;t.value=xr;let e=Gn(t),i,r=!1;try{i=t.computation(),X(null),r=n!==yr&&n!==$n&&i!==$n&&t.equal(n,i)}catch(o){i=$n,t.error=o}finally{mi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function hM(){throw new Error}var Z_=hM;function Y_(t){Z_(t)}function Yf(t){Z_=t}var gM=null;function Kf(t,n){let e=Object.create(Ja);e.value=t,n!==void 0&&(e.equal=n);let i=()=>K_(e);return i[We]=e,Ka(e),[i,a=>Dr(e,a),a=>il(e,a)]}function K_(t){return zi(t),t.value}function Dr(t,n){qf()||Y_(t),t.equal(t.value,n)||(t.value=n,vM(t))}function il(t,n){qf()||Y_(t),Dr(t,n(t.value))}var Ja=W(_({},ui),{equal:Qa,value:void 0,kind:"signal"});function vM(t){t.version++,z_(),Wf(t),gM?.(t)}var Qf=W(_({},ui),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Xf(t){if(t.dirty=!1,t.version>0&&!wr(t))return;t.version++;let n=Gn(t);try{t.cleanup(),t.fn()}finally{mi(t,n)}}function he(t){return typeof t=="function"}function Eo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var rl=Eo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Er(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ve=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(he(i))try{i()}catch(o){n=o instanceof rl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Q_(o)}catch(a){n=n??[],a instanceof rl?n=[...n,...a.errors]:n.push(a)}}if(n)throw new rl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Q_(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Er(e,n)}remove(n){let{_finalizers:e}=this;e&&Er(e,n),n instanceof t&&n._removeParent(this)}};ve.EMPTY=(()=>{let t=new ve;return t.closed=!0,t})();var Jf=ve.EMPTY;function ol(t){return t instanceof ve||t&&"closed"in t&&he(t.remove)&&he(t.add)&&he(t.unsubscribe)}function Q_(t){he(t)?t():t.unsubscribe()}var Sn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var So={setTimeout(t,n,...e){let{delegate:i}=So;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=So;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function al(t){So.setTimeout(()=>{let{onUnhandledError:n}=Sn;if(n)n(t);else throw t})}function Sr(){}var X_=ep("C",void 0,void 0);function J_(t){return ep("E",void 0,t)}function ey(t){return ep("N",t,void 0)}function ep(t,n,e){return{kind:t,value:n,error:e}}var Ir=null;function Io(t){if(Sn.useDeprecatedSynchronousErrorHandling){let n=!Ir;if(n&&(Ir={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Ir;if(Ir=null,e)throw i}}else t()}function ty(t){Sn.useDeprecatedSynchronousErrorHandling&&Ir&&(Ir.errorThrown=!0,Ir.error=t)}var Mr=class extends ve{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ol(n)&&n.add(this)):this.destination=yM}static create(n,e,i){return new pi(n,e,i)}next(n){this.isStopped?np(ey(n),this):this._next(n)}error(n){this.isStopped?np(J_(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?np(X_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},bM=Function.prototype.bind;function tp(t,n){return bM.call(t,n)}var ip=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){sl(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){sl(i)}else sl(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){sl(e)}}},pi=class extends Mr{constructor(n,e,i){super();let r;if(he(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Sn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&tp(n.next,o),error:n.error&&tp(n.error,o),complete:n.complete&&tp(n.complete,o)}):r=n}this.destination=new ip(r)}};function sl(t){Sn.useDeprecatedSynchronousErrorHandling?ty(t):al(t)}function _M(t){throw t}function np(t,n){let{onStoppedNotification:e}=Sn;e&&So.setTimeout(()=>e(t,n))}var yM={closed:!0,next:Sr,error:_M,complete:Sr};var Mo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function tn(t){return t}function rp(...t){return op(t)}function op(t){return t.length===0?tn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ie=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=CM(e)?e:new pi(e,i,r);return Io(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=ny(i),new i((r,o)=>{let a=new pi({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Mo](){return this}pipe(...e){return op(e)(this)}toPromise(e){return e=ny(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function ny(t){var n;return(n=t??Sn.Promise)!==null&&n!==void 0?n:Promise}function xM(t){return t&&he(t.next)&&he(t.error)&&he(t.complete)}function CM(t){return t&&t instanceof Mr||xM(t)&&ol(t)}function wM(t){return he(t?.lift)}function be(t){return n=>{if(wM(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ye(t,n,e,i,r){return new ap(t,n,e,i,r)}var ap=class extends Mr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var iy=Eo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var O=(()=>{class t extends ie{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new cl(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new iy}next(e){Io(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Io(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Io(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Jf:(this.currentObservers=null,o.push(e),new ve(()=>{this.currentObservers=null,Er(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ie;return e.source=this,e}}return t.create=(n,e)=>new cl(n,e),t})(),cl=class extends O{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Jf}};var ut=class extends O{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var es={now(){return(es.delegate||Date).now()},delegate:void 0};var ll=class extends O{constructor(n=1/0,e=1/0,i=es){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var dl=class extends ve{constructor(n,e){super()}schedule(n,e=0){return this}};var ts={setInterval(t,n,...e){let{delegate:i}=ts;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ts;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ul=class extends dl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ts.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ts.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Er(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var To=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};To.now=es.now;var ml=class extends To{constructor(n,e=To.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Tr=new ml(ul),ry=Tr;var tt=new ie(t=>t.complete());function fl(t){return t&&he(t.schedule)}function sp(t){return t[t.length-1]}function pl(t){return he(sp(t))?t.pop():void 0}function Wn(t){return fl(sp(t))?t.pop():void 0}function oy(t,n){return typeof sp(t)=="number"?t.pop():n}function sy(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{l(i.next(d))}catch(m){a(m)}}function c(d){try{l(i.throw(d))}catch(m){a(m)}}function l(d){d.done?o(d.value):r(d.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function ay(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function kr(t){return this instanceof kr?(this.v=t,this):new kr(t)}function cy(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(y){return Promise.resolve(y).then(h,m)}}function s(h,y){i[h]&&(r[h]=function(A){return new Promise(function(k,N){o.push([h,A,k,N])>1||c(h,A)})},y&&(r[h]=y(r[h])))}function c(h,y){try{l(i[h](y))}catch(A){p(o[0][3],A)}}function l(h){h.value instanceof kr?Promise.resolve(h.value.v).then(d,m):p(o[0][2],h)}function d(h){c("next",h)}function m(h){c("throw",h)}function p(h,y){h(y),o.shift(),o.length&&c(o[0][0],o[0][1])}}function ly(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof ay=="function"?ay(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var hl=t=>t&&typeof t.length=="number"&&typeof t!="function";function gl(t){return he(t?.then)}function vl(t){return he(t[Mo])}function bl(t){return Symbol.asyncIterator&&he(t?.[Symbol.asyncIterator])}function _l(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function DM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yl=DM();function xl(t){return he(t?.[yl])}function Cl(t){return cy(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield kr(e.read());if(r)return yield kr(void 0);yield yield kr(i)}}finally{e.releaseLock()}})}function wl(t){return he(t?.getReader)}function Be(t){if(t instanceof ie)return t;if(t!=null){if(vl(t))return EM(t);if(hl(t))return SM(t);if(gl(t))return IM(t);if(bl(t))return dy(t);if(xl(t))return MM(t);if(wl(t))return TM(t)}throw _l(t)}function EM(t){return new ie(n=>{let e=t[Mo]();if(he(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function SM(t){return new ie(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function IM(t){return new ie(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,al)})}function MM(t){return new ie(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function dy(t){return new ie(n=>{kM(t,n).catch(e=>n.error(e))})}function TM(t){return dy(Cl(t))}function kM(t,n){var e,i,r,o;return sy(this,void 0,void 0,function*(){try{for(e=ly(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Qt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Dl(t,n=0){return be((e,i)=>{e.subscribe(ye(i,r=>Qt(i,t,()=>i.next(r),n),()=>Qt(i,t,()=>i.complete(),n),r=>Qt(i,t,()=>i.error(r),n)))})}function El(t,n=0){return be((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function uy(t,n){return Be(t).pipe(El(n),Dl(n))}function my(t,n){return Be(t).pipe(El(n),Dl(n))}function fy(t,n){return new ie(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function py(t,n){return new ie(e=>{let i;return Qt(e,n,()=>{i=t[yl](),Qt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>he(i?.return)&&i.return()})}function Sl(t,n){if(!t)throw new Error("Iterable cannot be null");return new ie(e=>{Qt(e,n,()=>{let i=t[Symbol.asyncIterator]();Qt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function hy(t,n){return Sl(Cl(t),n)}function gy(t,n){if(t!=null){if(vl(t))return uy(t,n);if(hl(t))return fy(t,n);if(gl(t))return my(t,n);if(bl(t))return Sl(t,n);if(xl(t))return py(t,n);if(wl(t))return hy(t,n)}throw _l(t)}function Ze(t,n){return n?gy(t,n):Be(t)}function K(...t){let n=Wn(t);return Ze(t,n)}function ns(t,n){let e=he(t)?t:()=>t,i=r=>r.error(e());return new ie(n?r=>n.schedule(i,0,r):i)}function is(t){return!!t&&(t instanceof ie||he(t.lift)&&he(t.subscribe))}var Ar=Eo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function vy(t){return t instanceof Date&&!isNaN(t)}function J(t,n){return be((e,i)=>{let r=0;e.subscribe(ye(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:AM}=Array;function RM(t,n){return AM(n)?t(...n):t(n)}function Il(t){return J(n=>RM(t,n))}var{isArray:OM}=Array,{getPrototypeOf:NM,prototype:PM,keys:FM}=Object;function Ml(t){if(t.length===1){let n=t[0];if(OM(n))return{args:n,keys:null};if(LM(n)){let e=FM(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function LM(t){return t&&typeof t=="object"&&NM(t)===PM}function Tl(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function rs(...t){let n=Wn(t),e=pl(t),{args:i,keys:r}=Ml(t);if(i.length===0)return Ze([],n);let o=new ie(BM(i,n,r?a=>Tl(r,a):tn));return e?o.pipe(Il(e)):o}function BM(t,n,e=tn){return i=>{by(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)by(n,()=>{let l=Ze(t[c],n),d=!1;l.subscribe(ye(i,m=>{o[c]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function by(t,n,e){t?Qt(e,t,n):n()}function _y(t,n,e,i,r,o,a,s){let c=[],l=0,d=0,m=!1,p=()=>{m&&!c.length&&!l&&n.complete()},h=A=>l<i?y(A):c.push(A),y=A=>{o&&n.next(A),l++;let k=!1;Be(e(A,d++)).subscribe(ye(n,N=>{r?.(N),o?h(N):n.next(N)},()=>{k=!0},void 0,()=>{if(k)try{for(l--;c.length&&l<i;){let N=c.shift();a?Qt(n,a,()=>y(N)):y(N)}p()}catch(N){n.error(N)}}))};return t.subscribe(ye(n,h,()=>{m=!0,p()})),()=>{s?.()}}function Ct(t,n,e=1/0){return he(n)?Ct((i,r)=>J((o,a)=>n(i,o,r,a))(Be(t(i,r))),e):(typeof n=="number"&&(e=n),be((i,r)=>_y(i,r,t,e)))}function kl(t=1/0){return Ct(tn,t)}function yy(){return kl(1)}function qn(...t){return yy()(Ze(t,Wn(t)))}function Rr(t){return new ie(n=>{Be(t()).subscribe(n)})}function os(...t){let n=pl(t),{args:e,keys:i}=Ml(t),r=new ie(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let d=0;d<a;d++){let m=!1;Be(e[d]).subscribe(ye(o,p=>{m||(m=!0,l--),s[d]=p},()=>c--,void 0,()=>{(!c||!m)&&(l||o.next(i?Tl(i,s):s),o.complete())}))}});return n?r.pipe(Il(n)):r}function Or(t=0,n,e=ry){let i=-1;return n!=null&&(fl(n)?e=n:i=n),new ie(r=>{let o=vy(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Ut(...t){let n=Wn(t),e=oy(t,1/0),i=t;return i.length?i.length===1?Be(i[0]):kl(e)(Ze(i,n)):tt}function Te(t,n){return be((e,i)=>{let r=0;e.subscribe(ye(i,o=>t.call(n,o,r++)&&i.next(o)))})}function xy(t){return be((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(ye(e,l=>{i=!0,r=l,o||Be(t(l)).subscribe(o=ye(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function Al(t,n=Tr){return xy(()=>Or(t,n))}function Nr(t){return be((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ye(e,void 0,void 0,a=>{o=Be(t(a,Nr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function ko(t,n){return he(n)?Ct(t,n,1):Ct(t,1)}function In(t,n=Tr){return be((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}s()}e.subscribe(ye(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function Cy(t){return be((n,e)=>{let i=!1;n.subscribe(ye(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function mt(t){return t<=0?()=>tt:be((n,e)=>{let i=0;n.subscribe(ye(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function wy(){return be((t,n)=>{t.subscribe(ye(n,Sr))})}function Ao(t){return J(()=>t)}function cp(t,n){return n?e=>qn(n.pipe(mt(1),wy()),e.pipe(cp(t))):Ct((e,i)=>Be(t(e,i)).pipe(mt(1),Ao(e)))}function lp(t,n=Tr){let e=Or(t,n);return cp(()=>e)}function Rl(t,n=tn){return t=t??VM,be((e,i)=>{let r,o=!0;e.subscribe(ye(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function VM(t,n){return t===n}function Dy(t=jM){return be((n,e)=>{let i=!1;n.subscribe(ye(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function jM(){return new Ar}function Pr(t){return be((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function hi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Te((r,o)=>t(r,o,i)):tn,mt(1),e?Cy(n):Dy(()=>new Ar))}function Ol(t){return t<=0?()=>tt:be((n,e)=>{let i=[];n.subscribe(ye(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Nl(){return be((t,n)=>{let e,i=!1;t.subscribe(ye(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function as(t={}){let{connector:n=()=>new O,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,d=!1,m=!1,p=()=>{s?.unsubscribe(),s=void 0},h=()=>{p(),a=c=void 0,d=m=!1},y=()=>{let A=a;h(),A?.unsubscribe()};return be((A,k)=>{l++,!m&&!d&&p();let N=c=c??n();k.add(()=>{l--,l===0&&!m&&!d&&(s=dp(y,r))}),N.subscribe(k),!a&&l>0&&(a=new pi({next:Ie=>N.next(Ie),error:Ie=>{m=!0,p(),s=dp(h,e,Ie),N.error(Ie)},complete:()=>{d=!0,p(),s=dp(h,i),N.complete()}}),Be(A).subscribe(a))})(o)}}function dp(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new pi({next:()=>{i.unsubscribe(),t()}});return Be(n(...e)).subscribe(i)}function Pl(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,as({connector:()=>new ll(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Fr(t){return Te((n,e)=>t<=e)}function wt(...t){let n=Wn(t);return be((e,i)=>{(n?qn(t,e,n):qn(t,e)).subscribe(i)})}function ft(t,n){return be((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(ye(i,c=>{r?.unsubscribe();let l=0,d=o++;Be(t(c,d)).subscribe(r=ye(i,m=>i.next(n?n(c,m,d,l++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Ve(t){return be((n,e)=>{Be(t).subscribe(ye(e,()=>e.complete(),Sr)),!e.closed&&n.subscribe(e)})}function pt(t,n,e){let i=he(t)||n||e?{next:t,error:n,complete:e}:t;return i?be((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(ye(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):tn}var up;function Fl(){return up}function Zn(t){let n=up;return up=t,n}var Ey=Symbol("NotFound");function Ro(t){return t===Ey||t?.name==="\u0275NotFound"}function mp(t,n,e){let i=Object.create(UM);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Cr(i),zi(i),i.value===$n)throw i.error;return i.value};return o[We]=i,Ka(i),o}function Sy(t,n){Cr(t),Dr(t,n),wo(t)}function Iy(t,n){if(Cr(t),t.value===$n)throw t.error;il(t,n),wo(t)}var UM=W(_({},ui),{value:yr,dirty:!0,error:null,equal:Qa,kind:"linkedSignal",producerMustRecompute(t){return t.value===yr||t.value===xr},producerRecomputeValue(t){if(t.value===xr)throw new Error("");let n=t.value;t.value=xr;let e=Gn(t),i,r=!1;try{let o=t.source(),a=n!==yr&&n!==$n,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,X(null),r=a&&i!==$n&&t.equal(n,i)}catch(o){i=$n,t.error=o}finally{mi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function My(t){let n=X(null);try{return t()}finally{X(n)}}var zl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",T=class extends Error{code;constructor(n,e){super(vi(n,e)),this.code=n}};function HM(t){return`NG0${Math.abs(t)}`}function vi(t,n){return`${HM(t)}${n?": "+n:""}`}var qi=globalThis;function Pe(t){for(let n in t)if(t[n]===Pe)return n;throw Error("")}function Oy(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function fs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(fs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function $l(t,n){return t?n?`${t} ${n}`:t:n||""}var zM=Pe({__forward_ref__:Pe});function $t(t){return t.__forward_ref__=$t,t}function Dt(t){return Ep(t)?t():t}function Ep(t){return typeof t=="function"&&t.hasOwnProperty(zM)&&t.__forward_ref__===$t}function S(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ae(t){return{providers:t.providers||[],imports:t.imports||[]}}function ps(t){return $M(t,Gl)}function Sp(t){return ps(t)!==null}function $M(t,n){return t.hasOwnProperty(n)&&t[n]||null}function GM(t){let n=t?.[Gl]??null;return n||null}function pp(t){return t&&t.hasOwnProperty(Bl)?t[Bl]:null}var Gl=Pe({\u0275prov:Pe}),Bl=Pe({\u0275inj:Pe}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=S({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ip(t){return t&&!!t.\u0275providers}var Mp=Pe({\u0275cmp:Pe}),Tp=Pe({\u0275dir:Pe}),kp=Pe({\u0275pipe:Pe}),Ap=Pe({\u0275mod:Pe}),cs=Pe({\u0275fac:Pe}),Ur=Pe({__NG_ELEMENT_ID__:Pe}),Ty=Pe({__NG_ENV_ID__:Pe});function Rp(t){return Wl(t,"@NgModule"),t[Ap]||null}function bi(t){return Wl(t,"@Component"),t[Mp]||null}function Op(t){return Wl(t,"@Directive"),t[Tp]||null}function Ny(t){return Wl(t,"@Pipe"),t[kp]||null}function Wl(t,n){if(t==null)throw new T(-919,!1)}function No(t){return typeof t=="string"?t:t==null?"":String(t)}var Py=Pe({ngErrorCode:Pe}),WM=Pe({ngErrorMessage:Pe}),qM=Pe({ngTokenPath:Pe});function Np(t,n){return Fy("",-200,n)}function ql(t,n){throw new T(-201,!1)}function Fy(t,n,e){let i=new T(n,t);return i[Py]=n,i[WM]=t,e&&(i[qM]=e),i}function ZM(t){return t[Py]}var hp;function Ly(){return hp}function Ht(t){let n=hp;return hp=t,n}function Pp(t,n,e){let i=ps(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;ql(t,"")}var YM={},Lr=YM,KM="__NG_DI_FLAG__",gp=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Br(e)||0;try{return this.injector.get(n,i&8?null:Lr,i)}catch(r){if(Ro(r))return r;throw r}}};function QM(t,n=0){let e=Fl();if(e===void 0)throw new T(-203,!1);if(e===null)return Pp(t,void 0,n);{let i=XM(n),r=e.retrieve(t,i);if(Ro(r)){if(i.optional)return null;throw r}return r}}function G(t,n=0){return(Ly()||QM)(Dt(t),n)}function u(t,n){return G(t,Br(n))}function Br(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function XM(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function vp(t){let n=[];for(let e=0;e<t.length;e++){let i=Dt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new T(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=JM(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(G(r,o))}else n.push(G(i))}return n}function JM(t){return t[KM]}function $i(t,n){let e=t.hasOwnProperty(cs);return e?t[cs]:null}function By(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Vy(t){return t.flat(Number.POSITIVE_INFINITY)}function Zl(t,n){t.forEach(e=>Array.isArray(e)?Zl(e,n):n(e))}function Fp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function hs(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function jy(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Uy(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Yl(t,n,e){let i=Po(t,n);return i>=0?t[i|1]=e:(i=~i,Uy(t,i,n,e)),i}function Kl(t,n){let e=Po(t,n);if(e>=0)return t[e|1]}function Po(t,n){return eT(t,n,1)}function eT(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Zi={},Rt=[],Yi=new D(""),Lp=new D("",-1),Bp=new D(""),ls=class{get(n,e=Lr){if(e===Lr){let r=Fy("",-201);throw r.name="\u0275NotFound",r}return e}};function Ki(t){return{\u0275providers:t}}function Hy(t){return Ki([{provide:Yi,multi:!0,useValue:t}])}function zy(...t){return{\u0275providers:Vp(!0,t),\u0275fromNgModule:!0}}function Vp(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return Zl(n,a=>{let s=a;Vl(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&$y(r,o),e}function $y(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];jp(r,o=>{n(o,i)})}}function Vl(t,n,e,i){if(t=Dt(t),!t)return!1;let r=null,o=pp(t),a=!o&&bi(t);if(!o&&!a){let c=t.ngModule;if(o=pp(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)Vl(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;Zl(o.imports,d=>{Vl(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&$y(l,n)}if(!s){let l=$i(r)||(()=>new r);n({provide:r,useFactory:l,deps:Rt},r),n({provide:Bp,useValue:r,multi:!0},r),n({provide:Yi,useValue:()=>G(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;jp(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function jp(t,n){for(let e of t)Ip(e)&&(e=e.\u0275providers),Array.isArray(e)?jp(e,n):n(e)}var tT=Pe({provide:String,useValue:Pe});function Gy(t){return t!==null&&typeof t=="object"&&tT in t}function nT(t){return!!(t&&t.useExisting)}function iT(t){return!!(t&&t.useFactory)}function Vr(t){return typeof t=="function"}function Wy(t){return!!t.useClass}var gs=new D(""),Ll={},ky={},fp;function Fo(){return fp===void 0&&(fp=new ls),fp}var Oe=class{},jr=class extends Oe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,_p(n,a=>this.processProvider(a)),this.records.set(Lp,Oo(void 0,this)),r.has("environment")&&this.records.set(Oe,Oo(void 0,this));let o=this.records.get(gs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Bp,Rt,{self:!0}))}retrieve(n,e){let i=Br(e)||0;try{return this.get(n,Lr,i)}catch(r){if(Ro(r))return r;throw r}}destroy(){ss(this),this._destroyed=!0;let n=X(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),X(n)}}onDestroy(n){return ss(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){ss(this);let e=Zn(this),i=Ht(void 0),r;try{return n()}finally{Zn(e),Ht(i)}}get(n,e=Lr,i){if(ss(this),n.hasOwnProperty(Ty))return n[Ty](this);let r=Br(i),o,a=Zn(this),s=Ht(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=cT(n)&&ps(n);d&&this.injectableDefInScope(d)?l=Oo(bp(n),Ll):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Fo():this.parent;return e=r&8&&e===Lr?null:e,c.get(n,e)}catch(c){let l=ZM(c);throw l===-200||l===-201?new T(l,null):c}finally{Ht(s),Zn(a)}}resolveInjectorInitializers(){let n=X(null),e=Zn(this),i=Ht(void 0),r;try{let o=this.get(Yi,Rt,{self:!0});for(let a of o)a()}finally{Zn(e),Ht(i),X(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Dt(n);let e=Vr(n)?n:Dt(n&&n.provide),i=oT(n);if(!Vr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Oo(void 0,Ll,!0),r.factory=()=>vp(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=X(null);try{if(e.value===ky)throw Np("");return e.value===Ll&&(e.value=ky,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&sT(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{X(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Dt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function bp(t){let n=ps(t),e=n!==null?n.factory:$i(t);if(e!==null)return e;if(t instanceof D)throw new T(-204,!1);if(t instanceof Function)return rT(t);throw new T(-204,!1)}function rT(t){if(t.length>0)throw new T(-204,!1);let e=GM(t);return e!==null?()=>e.factory(t):()=>new t}function oT(t){if(Gy(t))return Oo(void 0,t.useValue);{let n=Up(t);return Oo(n,Ll)}}function Up(t,n,e){let i;if(Vr(t)){let r=Dt(t);return $i(r)||bp(r)}else if(Gy(t))i=()=>Dt(t.useValue);else if(iT(t))i=()=>t.useFactory(...vp(t.deps||[]));else if(nT(t))i=(r,o)=>G(Dt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Dt(t&&(t.useClass||t.provide));if(aT(t))i=()=>new r(...vp(t.deps));else return $i(r)||bp(r)}return i}function ss(t){if(t.destroyed)throw new T(-205,!1)}function Oo(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function aT(t){return!!t.deps}function sT(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function cT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function _p(t,n){for(let e of t)Array.isArray(e)?_p(e,n):e&&Ip(e)?_p(e.\u0275providers,n):n(e)}function st(t,n){let e;t instanceof jr?(ss(t),e=t):e=new gp(t);let i,r=Zn(e),o=Ht(void 0);try{return n()}finally{Zn(r),Ht(o)}}function qy(){return Ly()!==void 0||Fl()!=null}var Mn=0,ee=1,le=2,vt=3,mn=4,Gt=5,Hr=6,Lo=7,ct=8,_i=9,Tn=10,He=11,Bo=12,Hp=13,zr=14,Wt=15,Qi=16,$r=17,Kn=18,yi=19,zp=20,gi=21,Ql=22,Gi=23,nn=24,Gr=25,Xi=26,Ye=27,Zy=1,$p=6,Ji=7,vs=8,Wr=9,it=10;function xi(t){return Array.isArray(t)&&typeof t[Zy]=="object"}function kn(t){return Array.isArray(t)&&t[Zy]===!0}function Gp(t){return(t.flags&4)!==0}function Qn(t){return t.componentOffset>-1}function bs(t){return(t.flags&1)===1}function Xn(t){return!!t.template}function Vo(t){return(t[le]&512)!==0}function qr(t){return(t[le]&256)===256}var Wp="svg",Yy="math";function fn(t){for(;Array.isArray(t);)t=t[Mn];return t}function qp(t,n){return fn(n[t])}function pn(t,n){return fn(n[t.index])}function Xl(t,n){return t.data[n]}function Jl(t,n){return t[n]}function Zp(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function hn(t,n){let e=n[t];return xi(e)?e:e[Mn]}function Ky(t){return(t[le]&4)===4}function ed(t){return(t[le]&128)===128}function Qy(t){return kn(t[vt])}function rn(t,n){return n==null?null:t[n]}function Yp(t){t[$r]=0}function Kp(t){t[le]&1024||(t[le]|=1024,ed(t)&&Zr(t))}function Xy(t,n){for(;t>0;)n=n[zr],t--;return n}function _s(t){return!!(t[le]&9216||t[nn]?.dirty)}function td(t){t[Tn].changeDetectionScheduler?.notify(8),t[le]&64&&(t[le]|=1024),_s(t)&&Zr(t)}function Zr(t){t[Tn].changeDetectionScheduler?.notify(0);let n=Wi(t);for(;n!==null&&!(n[le]&8192||(n[le]|=8192,!ed(n)));)n=Wi(n)}function Qp(t,n){if(qr(t))throw new T(911,!1);t[gi]===null&&(t[gi]=[]),t[gi].push(n)}function Jy(t,n){if(t[gi]===null)return;let e=t[gi].indexOf(n);e!==-1&&t[gi].splice(e,1)}function Wi(t){let n=t[vt];return kn(n)?n[vt]:n}function Xp(t){return t[Lo]??=[]}function Jp(t){return t.cleanup??=[]}function e0(t,n,e,i){let r=Xp(n);r.push(e),t.firstCreatePass&&Jp(t).push(i,r.length-1)}var _e={lFrame:m0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var yp=!1;function t0(){return _e.lFrame.elementDepthCount}function n0(){_e.lFrame.elementDepthCount++}function eh(){_e.lFrame.elementDepthCount--}function th(){return _e.bindingsEnabled}function nh(){return _e.skipHydrationRootTNode!==null}function ih(t){return _e.skipHydrationRootTNode===t}function rh(){_e.skipHydrationRootTNode=null}function te(){return _e.lFrame.lView}function qe(){return _e.lFrame.tView}function Ot(t){return _e.lFrame.contextLView=t,t[ct]}function Nt(t){return _e.lFrame.contextLView=null,t}function Et(){let t=oh();for(;t!==null&&t.type===64;)t=t.parent;return t}function oh(){return _e.lFrame.currentTNode}function i0(){let t=_e.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function jo(t,n){let e=_e.lFrame;e.currentTNode=t,e.isParent=n}function ah(){return _e.lFrame.isParent}function sh(){_e.lFrame.isParent=!1}function r0(){return _e.lFrame.contextLView}function ch(){return yp}function ds(t){let n=yp;return yp=t,n}function ys(){let t=_e.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function o0(){return _e.lFrame.bindingIndex}function a0(t){return _e.lFrame.bindingIndex=t}function er(){return _e.lFrame.bindingIndex++}function nd(t){let n=_e.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function s0(){return _e.lFrame.inI18n}function c0(t,n){let e=_e.lFrame;e.bindingIndex=e.bindingRootIndex=t,id(n)}function l0(){return _e.lFrame.currentDirectiveIndex}function id(t){_e.lFrame.currentDirectiveIndex=t}function d0(t){let n=_e.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function rd(){return _e.lFrame.currentQueryIndex}function xs(t){_e.lFrame.currentQueryIndex=t}function lT(t){let n=t[ee];return n.type===2?n.declTNode:n.type===1?t[Gt]:null}function lh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=lT(o),r===null||(o=o[zr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=_e.lFrame=u0();return i.currentTNode=n,i.lView=t,!0}function od(t){let n=u0(),e=t[ee];_e.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function u0(){let t=_e.lFrame,n=t===null?null:t.child;return n===null?m0(t):n}function m0(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function f0(){let t=_e.lFrame;return _e.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var dh=f0;function ad(){let t=f0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function p0(t){return(_e.lFrame.contextLView=Xy(t,_e.lFrame.contextLView))[ct]}function Jn(){return _e.lFrame.selectedIndex}function tr(t){_e.lFrame.selectedIndex=t}function Uo(){let t=_e.lFrame;return Xl(t.tView,t.selectedIndex)}function Cs(){_e.lFrame.currentNamespace=Wp}function ws(){dT()}function dT(){_e.lFrame.currentNamespace=null}function h0(){return _e.lFrame.currentNamespace}var g0=!0;function sd(){return g0}function cd(t){g0=t}function xp(t,n=null,e=null,i){let r=uh(t,n,e,i);return r.resolveInjectorInitializers(),r}function uh(t,n=null,e=null,i,r=new Set){let o=[e||Rt,zy(t)],a;return new jr(o,n||Fo(),a||null,r)}var oe=class t{static THROW_IF_NOT_FOUND=Lr;static NULL=new ls;static create(n,e){if(Array.isArray(n))return xp({name:""},e,n,"");{let i=n.name??"";return xp({name:i},n.parent,n.providers,i)}}static \u0275prov=S({token:t,providedIn:"any",factory:()=>G(Lp)});static __NG_ELEMENT_ID__=-1},se=new D(""),St=(()=>{class t{static __NG_ELEMENT_ID__=uT;static __NG_ENV_ID__=e=>e}return t})(),jl=class extends St{_lView;constructor(n){super(),this._lView=n}get destroyed(){return qr(this._lView)}onDestroy(n){let e=this._lView;return Qp(e,n),()=>Jy(e,n)}};function uT(){return new jl(te())}var v0=!1,b0=new D(""),Ci=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ut(!1);debugTaskTracker=u(b0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ie(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),Cp=class extends O{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,qy()&&(this.destroyRef=u(St,{optional:!0})??void 0,this.pendingTasks=u(Ci,{optional:!0})??void 0)}emit(n){let e=X(null);try{super.next(n)}finally{X(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof ve&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},q=Cp;function Ul(...t){}function mh(t){let n,e;function i(){t=Ul;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function _0(t){return queueMicrotask(()=>t()),()=>{t=Ul}}var fh="isAngularZone",us=fh+"_ID",mT=0,L=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new q(!1);onMicrotaskEmpty=new q(!1);onStable=new q(!1);onError=new q(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=v0}=n;if(typeof Zone>"u")throw new T(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,hT(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(fh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new T(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new T(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,fT,Ul,Ul);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},fT={};function ph(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function pT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){mh(()=>{t.callbackScheduled=!1,wp(t),t.isCheckStableRunning=!0,ph(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),wp(t)}function hT(t){let n=()=>{pT(t)},e=mT++;t._inner=t._inner.fork({name:"angular",properties:{[fh]:!0,[us]:e,[us+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(gT(c))return i.invokeTask(o,a,s,c);try{return Ay(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Ry(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return Ay(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!vT(c)&&n(),Ry(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,wp(t),ph(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function wp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Ay(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Ry(t){t._nesting--,ph(t)}var ms=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new q;onMicrotaskEmpty=new q;onStable=new q;onError=new q;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function gT(t){return y0(t,"__ignore_ng_zone__")}function vT(t){return y0(t,"__scheduler_tick__")}function y0(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var zt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},on=new D("",{factory:()=>{let t=u(L),n=u(Oe),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(zt),e.handleError(i))})}}}),x0={provide:Yi,useValue:()=>{let t=u(zt,{optional:!0})},multi:!0},bT=new D("",{factory:()=>{let t=u(se).defaultView;if(!t)return;let n=u(on),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(St).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function hh(){return Ki([Hy(()=>{u(bT)})])}function F(t,n){let[e,i,r]=Kf(t,n?.equal),o=e,a=o[We];return o.set=i,o.update=r,o.asReadonly=ld.bind(o),o}function ld(){let t=this[We];if(t.readonlyFn===void 0){let n=()=>this();n[We]=t,t.readonlyFn=n}return t.readonlyFn}var Ho=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=_T}return t})();function _T(){return new Ho(te(),Et())}var Yn=class{},Ds=new D("",{factory:()=>!0});var gh=new D(""),Es=(()=>{class t{internalPendingTasks=u(Ci);scheduler=u(Yn);errorHandler=u(on);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),dd=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>new Dp})}return t})(),Dp=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Hl=class{[We];constructor(n){this[We]=n}destroy(){this[We].destroy()}};function qt(t,n){let e=n?.injector??u(oe),i=n?.manualCleanup!==!0?e.get(St):null,r,o=e.get(Ho,null,{optional:!0}),a=e.get(Yn);return o!==null?(r=CT(o.view,a,t),i instanceof jl&&i._lView===o.view&&(i=null)):r=wT(t,e.get(dd),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Hl(r)}var C0=W(_({},Qf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=ds(!1);try{Xf(this)}finally{ds(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=X(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],X(t)}}}),yT=W(_({},C0),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(fi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),xT=W(_({},C0),{consumerMarkedDirty(){this.view[le]|=8192,Zr(this.view),this.notifier.notify(13)},destroy(){if(fi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Gi]?.delete(this)}});function CT(t,n,e){let i=Object.create(xT);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=w0(i,e),t[Gi]??=new Set,t[Gi].add(i),i.consumerMarkedDirty(i),i}function wT(t,n,e){let i=Object.create(yT);return i.fn=w0(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function w0(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Ps(t){return{toString:t}.toString()}function kT(t){return typeof t=="function"}function nx(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var _d=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ce=(()=>{let t=()=>ix;return t.ngInherit=!0,t})();function ix(t){return t.type.prototype.ngOnChanges&&(t.setInput=RT),AT}function AT(){let t=ox(this),n=t?.current;if(n){let e=t.previous;if(e===Zi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function RT(t,n,e,i,r){let o=this.declaredInputs[i],a=ox(t)||OT(t,{previous:Zi,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new _d(l&&l.currentValue,e,c===Zi),nx(t,n,r,e)}var rx="__ngSimpleChanges__";function ox(t){return t[rx]||null}function OT(t,n){return t[rx]=n}var D0=[];var Fe=function(t,n=null,e){for(let i=0;i<D0.length;i++){let r=D0[i];r(t,n,e)}},Re=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Re||{});function NT(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=ix(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function ax(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function hd(t,n,e){sx(t,n,3,e)}function gd(t,n,e,i){(t[le]&3)===e&&sx(t,n,e,i)}function vh(t,n){let e=t[le];(e&3)===n&&(e&=16383,e+=1,t[le]=e)}function sx(t,n,e,i){let r=i!==void 0?t[$r]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[$r]+=65536),(s<o||o==-1)&&(PT(t,e,n,c),t[$r]=(t[$r]&4294901760)+c+2),c++}function E0(t,n){Fe(Re.LifecycleHookStart,t,n);let e=X(null);try{n.call(t)}finally{X(e),Fe(Re.LifecycleHookEnd,t,n)}}function PT(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[le]>>14<t[$r]>>16&&(t[le]&3)===n&&(t[le]+=16384,E0(s,o)):E0(s,o)}var $o=-1,Kr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function FT(t){return(t.flags&8)!==0}function LT(t){return(t.flags&16)!==0}function BT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];VT(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function cx(t){return t===3||t===4||t===6}function VT(t){return t.charCodeAt(0)===64}function qo(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?S0(t,e,r,null,n[++i]):S0(t,e,r,null,null))}}return t}function S0(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function lx(t){return t!==$o}function yd(t){return t&32767}function jT(t){return t>>16}function xd(t,n){let e=jT(t),i=n;for(;e>0;)i=i[zr],e--;return i}var Ih=!0;function Cd(t){let n=Ih;return Ih=t,n}var UT=256,dx=UT-1,ux=5,HT=0,ei={};function zT(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Ur)&&(i=e[Ur]),i==null&&(i=e[Ur]=HT++);let r=i&dx,o=1<<r;n.data[t+(r>>ux)]|=o}function wd(t,n){let e=mx(t,n);if(e!==-1)return e;let i=n[ee];i.firstCreatePass&&(t.injectorIndex=n.length,bh(i.data,t),bh(n,null),bh(i.blueprint,null));let r=cg(t,n),o=t.injectorIndex;if(lx(r)){let a=yd(r),s=xd(r,n),c=s[ee].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function bh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function mx(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function cg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=vx(r),i===null)return $o;if(e++,r=r[zr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return $o}function Mh(t,n,e){zT(t,n,e)}function $T(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(cx(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function fx(t,n,e){if(e&8||t!==void 0)return t;ql(n,"NodeInjector")}function px(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[_i],o=Ht(void 0);try{return r?r.get(n,i,e&8):Pp(n,i,e&8)}finally{Ht(o)}}return fx(i,n,e)}function hx(t,n,e,i=0,r){if(t!==null){if(n[le]&2048&&!(i&2)){let a=ZT(t,n,e,i,ei);if(a!==ei)return a}let o=gx(t,n,e,i,ei);if(o!==ei)return o}return px(n,e,i,r)}function gx(t,n,e,i,r){let o=WT(e);if(typeof o=="function"){if(!lh(n,t,i))return i&1?fx(r,e,i):px(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))ql(e);else return a}finally{dh()}}else if(typeof o=="number"){let a=null,s=mx(t,n),c=$o,l=i&1?n[Wt][Gt]:null;for((s===-1||i&4)&&(c=s===-1?cg(t,n):n[s+8],c===$o||!M0(i,!1)?s=-1:(a=n[ee],s=yd(c),n=xd(c,n)));s!==-1;){let d=n[ee];if(I0(o,s,d.data)){let m=GT(s,n,e,a,i,l);if(m!==ei)return m}c=n[s+8],c!==$o&&M0(i,n[ee].data[s+8]===l)&&I0(o,s,n)?(a=d,s=yd(c),n=xd(c,n)):s=-1}}return r}function GT(t,n,e,i,r,o){let a=n[ee],s=a.data[t+8],c=i==null?Qn(s)&&Ih:i!=a&&(s.type&3)!==0,l=r&1&&o===s,d=vd(s,a,e,c,l);return d!==null?Ts(n,a,d,s,r):ei}function vd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,m=i?s:s+d,p=r?s+d:l;for(let h=m;h<p;h++){let y=a[h];if(h<c&&e===y||h>=c&&y.type===e)return h}if(r){let h=a[c];if(h&&Xn(h)&&h.type===e)return c}return null}function Ts(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Kr){let s=o;if(s.resolving)throw Np("");let c=Cd(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],d,m=s.injectImpl?Ht(s.injectImpl):null,p=lh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&NT(e,a[e],n)}finally{m!==null&&Ht(m),Cd(c),s.resolving=!1,dh()}}return o}function WT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Ur)?t[Ur]:void 0;return typeof n=="number"?n>=0?n&dx:qT:n}function I0(t,n,e){let i=1<<t;return!!(e[n+(t>>ux)]&i)}function M0(t,n){return!(t&2)&&!(t&1&&n)}var Yr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return hx(this._tNode,this._lView,n,Br(i),e)}};function qT(){return new Yr(Et(),te())}function Ke(t){return Ps(()=>{let n=t.prototype.constructor,e=n[cs]||Th(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[cs]||Th(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Th(t){return Ep(t)?()=>{let n=Th(Dt(t));return n&&n()}:$i(t)}function ZT(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[le]&2048&&!Vo(a);){let s=gx(o,a,e,i|2,ei);if(s!==ei)return s;let c=o.parent;if(!c){let l=a[zp];if(l){let d=l.get(e,ei,i&-5);if(d!==ei)return d}c=vx(a),a=a[zr]}o=c}return r}function vx(t){let n=t[ee],e=n.type;return e===2?n.declTNode:e===1?t[Gt]:null}function Fs(t){return $T(Et(),t)}function YT(){return Xo(Et(),te())}function Xo(t,n){return new V(pn(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=YT}return t})();function bx(t){return t instanceof V?t.nativeElement:t}function KT(){return this._results[Symbol.iterator]()}var On=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new O}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Vy(n);(this._changesDetected=!By(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=KT};function _x(t){return(t.flags&128)===128}var lg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(lg||{}),yx=new Map,QT=0;function XT(){return QT++}function JT(t){yx.set(t[yi],t)}function kh(t){yx.delete(t[yi])}var T0="__ngContext__";function Zo(t,n){xi(n)?(t[T0]=n[yi],JT(n)):t[T0]=n}function xx(t){return wx(t[Bo])}function Cx(t){return wx(t[mn])}function wx(t){for(;t!==null&&!kn(t);)t=t[mn];return t}var ek;function dg(t){ek=t}var ir=new D("",{factory:()=>tk}),tk="ng";var Bd=new D(""),eo=new D("",{providedIn:"platform",factory:()=>"unknown"}),Ls=new D(""),to=new D("",{factory:()=>u(se).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Dx="r";var Ex="di";var Sx=!1,Ix=new D("",{factory:()=>Sx});var nk=(t,n,e,i)=>{};function ik(t,n,e,i){nk(t,n,e,i)}function Vd(t){return(t.flags&32)===32}var rk=()=>null;function Mx(t,n,e=!1){return rk(t,n,e)}function Tx(t,n){let e=t.contentQueries;if(e!==null){let i=X(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];xs(o),s.contentQueries(2,n[a],a)}}}finally{X(i)}}}function Ah(t,n,e){xs(0);let i=X(null);try{n(t,e)}finally{X(i)}}function kx(t,n,e){if(Gp(n)){let i=X(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{X(i)}}}var Nn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Nn||{});var ud;function ok(){if(ud===void 0&&(ud=null,qi.trustedTypes))try{ud=qi.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return ud}function jd(t){return ok()?.createHTML(t)||t}var md;function ak(){if(md===void 0&&(md=null,qi.trustedTypes))try{md=qi.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return md}function k0(t){return ak()?.createScriptURL(t)||t}var wi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${zl})`}},Rh=class extends wi{getTypeName(){return"HTML"}},Oh=class extends wi{getTypeName(){return"Style"}},Nh=class extends wi{getTypeName(){return"Script"}},Ph=class extends wi{getTypeName(){return"URL"}},Fh=class extends wi{getTypeName(){return"ResourceURL"}};function Fn(t){return t instanceof wi?t.changingThisBreaksApplicationSecurity:t}function Di(t,n){let e=Ax(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${zl})`)}return e===n}function Ax(t){return t instanceof wi&&t.getTypeName()||null}function ug(t){return new Rh(t)}function mg(t){return new Oh(t)}function fg(t){return new Nh(t)}function pg(t){return new Ph(t)}function hg(t){return new Fh(t)}function sk(t){let n=new Bh(t);return ck()?new Lh(n):n}var Lh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(jd(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Bh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=jd(n),e}};function ck(){try{return!!new window.DOMParser().parseFromString(jd(""),"text/html")}catch{return!1}}var lk=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Bs(t){return t=String(t),t.match(lk)?t:"unsafe:"+t}function Ei(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Vs(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Rx=Ei("area,br,col,hr,img,wbr"),Ox=Ei("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Nx=Ei("rp,rt"),dk=Vs(Nx,Ox),uk=Vs(Ox,Ei("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),mk=Vs(Nx,Ei("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),A0=Vs(Rx,uk,mk,dk),Px=Ei("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),fk=Ei("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),pk=Ei("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),hk=Vs(Px,fk,pk),gk=Ei("script,style,template");var Vh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=_k(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=bk(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=R0(n).toLowerCase();if(!A0.hasOwnProperty(e))return this.sanitizedSomething=!0,!gk.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!hk.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;Px[s]&&(c=Bs(c)),this.buf.push(" ",a,'="',O0(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=R0(n).toLowerCase();A0.hasOwnProperty(e)&&!Rx.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(O0(n))}};function vk(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function bk(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Fx(n);return n}function _k(t){let n=t.firstChild;if(n&&vk(t,n))throw Fx(n);return n}function R0(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Fx(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var yk=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,xk=/([^\#-~ |!])/g;function O0(t){return t.replace(/&/g,"&amp;").replace(yk,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(xk,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var fd;function gg(t,n){let e=null;try{fd=fd||sk(t);let i=n?String(n):"";e=fd.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=fd.getInertBodyElement(i)}while(i!==o);let s=new Vh().sanitizeChildren(N0(e)||e);return jd(s)}finally{if(e){let i=N0(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function N0(t){return"content"in t&&Ck(t)?t.content:null}function Ck(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function wk(t,n){return t.createText(n)}function Dk(t,n,e){t.setValue(n,e)}function Lx(t,n,e){return t.createElement(n,e)}function Dd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Bx(t,n,e){t.appendChild(n,e)}function P0(t,n,e,i,r){i!==null?Dd(t,n,e,i,r):Bx(t,n,e)}function Vx(t,n,e,i){t.removeChild(null,n,e,i)}function Ek(t,n,e){t.setAttribute(n,"style",e)}function Sk(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function jx(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&BT(t,n,i),r!==null&&Sk(t,n,r),o!==null&&Ek(t,n,o)}var It=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(It||{});function ze(t){let n=Hx();return n?n.sanitize(It.URL,t)||"":Di(t,"URL")?Fn(t):Bs(No(t))}function Ux(t){let n=Hx();if(n)return k0(n.sanitize(It.RESOURCE_URL,t)||"");if(Di(t,"ResourceURL"))return k0(Fn(t));throw new T(904,!1)}var Ik={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Mk(t,n){return Ik[t]?.[n]===!0?Ux:ze}function vg(t,n,e){return Mk(n,e)(t)}function Hx(){let t=te();return t&&t[Tn].sanitizer}function zx(t){return t instanceof Function?t():t}function Tk(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var $x="ng-template";function kk(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Tk(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(bg(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function bg(t){return t.type===4&&t.value!==$x}function Ak(t,n,e){let i=t.type===4&&!e?$x:t.value;return n===i}function Rk(t,n,e){let i=4,r=t.attrs,o=r!==null?Pk(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!An(i)&&!An(c))return!1;if(a&&An(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!Ak(t,c,e)||c===""&&n.length===1){if(An(i))return!1;a=!0}}else if(i&8){if(r===null||!kk(t,r,c,e)){if(An(i))return!1;a=!0}}else{let l=n[++s],d=Ok(c,r,bg(t),e);if(d===-1){if(An(i))return!1;a=!0;continue}if(l!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&l!==m){if(An(i))return!1;a=!0}}}}return An(i)||a}function An(t){return(t&1)===0}function Ok(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return Fk(n,t)}function Gx(t,n,e=!1){for(let i=0;i<n.length;i++)if(Rk(t,n[i],e))return!0;return!1}function Nk(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function Pk(t){for(let n=0;n<t.length;n++){let e=t[n];if(cx(e))return n}return t.length}function Fk(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function Lk(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function F0(t,n){return t?":not("+n.trim()+")":n}function Bk(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!An(a)&&(n+=F0(o,r),r=""),i=a,o=o||!An(i);e++}return r!==""&&(n+=F0(o,r)),n}function Vk(t){return t.map(Bk).join(",")}function jk(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!An(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Zt={};function _g(t,n,e,i,r,o,a,s,c,l,d){let m=Ye+i,p=m+r,h=Uk(m,p),y=typeof l=="function"?l():l;return h[ee]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:y,incompleteFirstPass:!1,ssrId:d}}function Uk(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Zt);return e}function Hk(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=_g(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function yg(t,n,e,i,r,o,a,s,c,l,d){let m=n.blueprint.slice();return m[Mn]=r,m[le]=i|4|128|8|64|1024,(l!==null||t&&t[le]&2048)&&(m[le]|=2048),Yp(m),m[vt]=m[zr]=t,m[ct]=e,m[Tn]=a||t&&t[Tn],m[He]=s||t&&t[He],m[_i]=c||t&&t[_i]||null,m[Gt]=o,m[yi]=XT(),m[Hr]=d,m[zp]=l,m[Wt]=n.type==2?t[Wt]:m,m}function zk(t,n,e){let i=pn(n,t),r=Hk(e),o=t[Tn].rendererFactory,a=xg(t,yg(t,r,null,Wx(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function Wx(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function qx(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function xg(t,n){return t[Bo]?t[Hp][mn]=n:t[Bo]=n,t[Hp]=n,n}function f(t=1){Zx(qe(),te(),Jn()+t,!1)}function Zx(t,n,e,i){if(!i)if((n[le]&3)===3){let o=t.preOrderCheckHooks;o!==null&&hd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&gd(n,o,0,e)}tr(e)}var Ud=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Ud||{});function Go(t,n,e,i){let r=X(null);try{let[o,a,s]=t.inputs[e],c=null;(a&Ud.SignalBased)!==0&&(c=n[o][We]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):nx(n,c,o,i)}finally{X(r)}}var Pn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Pn||{}),$k;function Cg(t,n){return $k(t,n)}var N5=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var jh=new WeakMap,Ss=new WeakSet;function Gk(t,n){let e=jh.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Ss.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function Wk(t,n){let e=jh.get(t);e?e.includes(n)||e.push(n):jh.set(t,[n])}var Qr=new Set,Hd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Hd||{}),Ln=new D(""),L0=new Set;function Si(t){L0.has(t)||(L0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var zd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),wg=[0,1,2,3],Dg=(()=>{class t{ngZone=u(L);scheduler=u(Yn);errorHandler=u(zt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Ln,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Fe(Re.AfterRenderHooksStart),this.executing=!0;for(let i of wg)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Fe(Re.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Gr]??=[]).push(e),Zr(i),i[le]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Hd.AFTER_NEXT_RENDER,e):e()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),ks=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Gr];n&&(this.view[Gr]=n.filter(e=>e!==this))}};function bt(t,n){let e=n?.injector??u(oe);return Si("NgAfterNextRender"),Zk(t,e,n,!0)}function qk(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function Zk(t,n,e,i){let r=n.get(zd);r.impl??=n.get(Dg);let o=n.get(Ln,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(St):null,s=n.get(Ho,null,{optional:!0}),c=new ks(r.impl,qk(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var Yx=new D("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Oe)})});function Kx(t,n,e){let i=t.get(Yx);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function Yk(t,n){let e=t.get(Yx);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function Kk(t,n){for(let[e,i]of n)Kx(t,i.animateFns)}function B0(t,n,e,i){let r=t?.[Xi]?.enter;n!==null&&r&&r.has(e.index)&&Kk(i,r)}function zo(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;kn(r)?c=r:xi(r)&&(l=!0,r=r[Mn]);let d=fn(r);t===0&&i!==null?(B0(s,i,o,e),a==null?Bx(n,i,d):Dd(n,i,d,a||null,!0)):t===1&&i!==null?(B0(s,i,o,e),Dd(n,i,d,a||null,!0),Gk(o,d)):t===2?(s?.[Xi]?.leave?.has(o.index)&&Wk(o,d),Ss.delete(d),V0(s,o,e,m=>{if(Ss.has(d)){Ss.delete(d);return}Vx(n,d,l,m)})):t===3&&(Ss.delete(d),V0(s,o,e,()=>{n.destroyNode(d)})),c!=null&&sA(n,t,e,c,o,i,a)}}function Qk(t,n){Qx(t,n),n[Mn]=null,n[Gt]=null}function Xk(t,n,e,i,r,o){i[Mn]=r,i[Gt]=n,Gd(t,i,e,1,r,o)}function Qx(t,n){n[Tn].changeDetectionScheduler?.notify(9),Gd(t,n,n[He],2,null,null)}function Jk(t){let n=t[Bo];if(!n)return _h(t[ee],t);for(;n;){let e=null;if(xi(n))e=n[Bo];else{let i=n[it];i&&(e=i)}if(!e){for(;n&&!n[mn]&&n!==t;)xi(n)&&_h(n[ee],n),n=n[vt];n===null&&(n=t),xi(n)&&_h(n[ee],n),e=n&&n[mn]}n=e}}function Eg(t,n){let e=t[Wr],i=e.indexOf(n);e.splice(i,1)}function $d(t,n){if(qr(n))return;let e=n[He];e.destroyNode&&Gd(t,n,e,3,null,null),Jk(n)}function _h(t,n){if(qr(n))return;let e=X(null);try{n[le]&=-129,n[le]|=256,n[nn]&&fi(n[nn]),nA(t,n),tA(t,n),n[ee].type===1&&n[He].destroy();let i=n[Qi];if(i!==null&&kn(n[vt])){i!==n[vt]&&Eg(i,n);let r=n[Kn];r!==null&&r.detachView(t)}kh(n)}finally{X(e)}}function V0(t,n,e,i){let r=t?.[Xi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Qr.add(t[yi]),Kx(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:d}=l();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),eA(t,i)}else t&&Qr.delete(t[yi]),i(!1)},r)}function eA(t,n){let e=t[Xi]?.running;if(e){e.then(()=>{t[Xi].running=void 0,Qr.delete(t[yi]),n(!0)});return}n(!1)}function tA(t,n){let e=t.cleanup,i=n[Lo];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Lo]=null);let r=n[gi];if(r!==null){n[gi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[Gi];if(o!==null){n[Gi]=null;for(let a of o)a.destroy()}}function nA(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Kr)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];Fe(Re.LifecycleHookStart,s,c);try{c.call(s)}finally{Fe(Re.LifecycleHookEnd,s,c)}}else{Fe(Re.LifecycleHookStart,r,o);try{o.call(r)}finally{Fe(Re.LifecycleHookEnd,r,o)}}}}}function Xx(t,n,e){return iA(t,n.parent,e)}function iA(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Mn];if(Qn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Nn.None||r===Nn.Emulated)return null}return pn(i,e)}function Jx(t,n,e){return oA(t,n,e)}function rA(t,n,e){return t.type&40?pn(t,e):null}var oA=rA,j0;function Sg(t,n,e,i){let r=Xx(t,i,n),o=n[He],a=i.parent||n[Gt],s=Jx(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)P0(o,r,e[c],s,!1);else P0(o,r,e,s,!1);j0!==void 0&&j0(o,i,n,e,r)}function Is(t,n){if(n!==null){let e=n.type;if(e&3)return pn(n,t);if(e&4)return Uh(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Is(t,i);{let r=t[n.index];return kn(r)?Uh(-1,r):fn(r)}}else{if(e&128)return Is(t,n.next);if(e&32)return Cg(n,t)()||fn(t[n.index]);{let i=eC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Wi(t[Wt]);return Is(r,i)}else return Is(t,n.next)}}}return null}function eC(t,n){if(n!==null){let i=t[Wt][Gt],r=n.projection;return i.projection[r]}return null}function Uh(t,n){let e=it+t+1;if(e<n.length){let i=n[e],r=i[ee].firstChild;if(r!==null)return Is(i,r)}return n[Ji]}function Ig(t,n,e,i,r,o,a){for(;e!=null;){let s=i[_i];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&Zo(fn(c),i),e.flags|=2),!Vd(e))if(l&8)Ig(t,n,e.child,i,r,o,!1),zo(n,t,s,r,c,e,o,i);else if(l&32){let d=Cg(e,i),m;for(;m=d();)zo(n,t,s,r,m,e,o,i);zo(n,t,s,r,c,e,o,i)}else l&16?tC(t,n,i,e,r,o):zo(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function Gd(t,n,e,i,r,o){Ig(e,i,t.firstChild,n,r,o,!1)}function aA(t,n,e){let i=n[He],r=Xx(t,e,n),o=e.parent||n[Gt],a=Jx(o,e,n);tC(i,0,n,e,r,a)}function tC(t,n,e,i,r,o){let a=e[Wt],c=a[Gt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];zo(n,t,e[_i],r,d,i,o,e)}else{let l=c,d=a[vt];_x(i)&&(l.flags|=128),Ig(t,n,l,d,r,o,!0)}}function sA(t,n,e,i,r,o,a){let s=i[Ji],c=fn(i);s!==c&&zo(n,t,e,o,s,r,a);for(let l=it;l<i.length;l++){let d=i[l];Gd(d[ee],d,t,n,o,s)}}function cA(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Pn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Pn.Important),t.setStyle(e,i,r,o))}}function nC(t,n,e,i,r){let o=Jn(),a=i&2;try{tr(-1),a&&n.length>Ye&&Zx(t,n,Ye,!1);let s=a?Re.TemplateUpdateStart:Re.TemplateCreateStart;Fe(s,r,e),e(i,r)}finally{tr(o);let s=a?Re.TemplateUpdateEnd:Re.TemplateCreateEnd;Fe(s,r,e)}}function Mg(t,n,e){pA(t,n,e),(e.flags&64)===64&&hA(t,n,e)}function Wd(t,n,e=pn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function lA(t,n,e,i){let o=i.get(Ix,Sx)||e===Nn.ShadowDom||e===Nn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return dA(a),a}function dA(t){uA(t)}var uA=()=>null;function mA(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function fA(t,n,e,i,r,o){let a=n[ee];if(qd(t,a,n,e,i)){Qn(t)&&rC(n,t.index);return}t.type&3&&(e=mA(e)),iC(t,n,e,i,r,o)}function iC(t,n,e,i,r,o){if(t.type&3){let a=pn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function rC(t,n){let e=hn(n,t);e[le]&16||(e[le]|=64)}function pA(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Qn(e)&&zk(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||wd(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=Ts(n,t,a,e);if(Zo(c,n),o!==null&&bA(n,a-i,c,s,e,o),Xn(s)){let l=hn(e.index,n);l[ct]=Ts(n,t,a,e)}}}function hA(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=l0();try{tr(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];id(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&gA(c,l)}}finally{tr(-1),id(a)}}function gA(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function oC(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Gx(n,o.selectors,!1)&&(i??=[],Xn(o)?i.unshift(o):i.push(o))}return i}function vA(t,n,e,i,r,o){let a=pn(t,n);aC(n[He],a,o,t.value,e,i,r)}function aC(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?No(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function bA(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];Go(i,e,c,l)}}function sC(t,n,e,i,r){let o=Ye+e,a=n[ee],s=r(a,n,t,i,e);n[o]=s,jo(t,!0);let c=t.type===2;return c?(jx(n[He],s,t),(t0()===0||bs(t))&&Zo(s,n),n0()):Zo(s,n),sd()&&(!c||!Vd(t))&&Sg(a,n,s,t),t}function cC(t){let n=t;return ah()?sh():(n=n.parent,jo(n,!1)),n}function _A(t,n){let e=t[_i];if(!e)return;let i;try{i=e.get(on,null)}catch{i=null}i?.(n)}function qd(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],d=a[c+1],m=n.data[l];Go(m,e[l],d,r),s=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];Go(d,l,i,r),s=!0}return s}function yA(t,n){let e=hn(n,t),i=e[ee];xA(i,e);let r=e[Mn];r!==null&&e[Hr]===null&&(e[Hr]=Mx(r,e[_i])),Fe(Re.ComponentStart);try{Tg(i,e,e[ct])}finally{Fe(Re.ComponentEnd,e[ct])}}function xA(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Tg(t,n,e){od(n);try{let i=t.viewQuery;i!==null&&Ah(1,i,e);let r=t.template;r!==null&&nC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Kn]?.finishViewCreation(t),t.staticContentQueries&&Tx(t,n),t.staticViewQueries&&Ah(2,t.viewQuery,e);let o=t.components;o!==null&&CA(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[le]&=-5,ad()}}function CA(t,n){for(let e=0;e<n.length;e++)yA(t,n[e])}function js(t,n,e,i){let r=X(null);try{let o=n.tView,s=t[le]&4096?4096:16,c=yg(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Qi]=l;let d=t[Kn];return d!==null&&(c[Kn]=d.createEmbeddedView(o)),Tg(o,c,e),c}finally{X(r)}}function Yo(t,n){return!n||n.firstChild===null||_x(t)}function As(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(fn(o)),kn(o)&&lC(o,i);let a=e.type;if(a&8)As(t,n,e.child,i);else if(a&32){let s=Cg(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=eC(n,e);if(Array.isArray(s))i.push(...s);else{let c=Wi(n[Wt]);As(c[ee],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function lC(t,n){for(let e=it;e<t.length;e++){let i=t[e],r=i[ee].firstChild;r!==null&&As(i[ee],i,r,n)}t[Ji]!==t[Mn]&&n.push(t[Ji])}function dC(t){if(t[Gr]!==null){for(let n of t[Gr])n.impl.addSequence(n);t[Gr].length=0}}var uC=[];function wA(t){return t[nn]??DA(t)}function DA(t){let n=uC.pop()??Object.create(SA);return n.lView=t,n}function EA(t){t.lView[nn]!==t&&(t.lView=null,uC.push(t))}var SA=W(_({},ui),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Zr(t.lView)},consumerOnSignalRead(){this.lView[nn]=this}});function IA(t){let n=t[nn]??Object.create(MA);return n.lView=t,n}var MA=W(_({},ui),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Wi(t.lView);for(;n&&!mC(n[ee]);)n=Wi(n);n&&Kp(n)},consumerOnSignalRead(){this.lView[nn]=this}});function mC(t){return t.type!==2}function fC(t){if(t[Gi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Gi])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[le]&8192)}}var TA=100;function pC(t,n=0){let i=t[Tn].rendererFactory,r=!1;r||i.begin?.();try{kA(t,n)}finally{r||i.end?.()}}function kA(t,n){let e=ch();try{ds(!0),Hh(t,n);let i=0;for(;_s(t);){if(i===TA)throw new T(103,!1);i++,Hh(t,1)}}finally{ds(e)}}function AA(t,n,e,i){if(qr(n))return;let r=n[le],o=!1,a=!1;od(n);let s=!0,c=null,l=null;o||(mC(t)?(l=wA(n),c=Gn(l)):nl()===null?(s=!1,l=IA(n),c=Gn(l)):n[nn]&&(fi(n[nn]),n[nn]=null));try{Yp(n),a0(t.bindingStartIndex),e!==null&&nC(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&hd(n,h,null)}else{let h=t.preOrderHooks;h!==null&&gd(n,h,0,null),vh(n,0)}if(a||RA(n),fC(n),hC(n,0),t.contentQueries!==null&&Tx(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&hd(n,h)}else{let h=t.contentHooks;h!==null&&gd(n,h,1),vh(n,1)}NA(t,n);let m=t.components;m!==null&&vC(n,m,0);let p=t.viewQuery;if(p!==null&&Ah(2,p,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&hd(n,h)}else{let h=t.viewHooks;h!==null&&gd(n,h,2),vh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ql]){for(let h of n[Ql])h();n[Ql]=null}o||(dC(n),n[le]&=-73)}catch(d){throw o||Zr(n),d}finally{l!==null&&(mi(l,c),s&&EA(l)),ad()}}function hC(t,n){for(let e=xx(t);e!==null;e=Cx(e))for(let i=it;i<e.length;i++){let r=e[i];gC(r,n)}}function RA(t){for(let n=xx(t);n!==null;n=Cx(n)){if(!(n[le]&2))continue;let e=n[Wr];for(let i=0;i<e.length;i++){let r=e[i];Kp(r)}}}function OA(t,n,e){Fe(Re.ComponentStart);let i=hn(n,t);try{gC(i,e)}finally{Fe(Re.ComponentEnd,i[ct])}}function gC(t,n){ed(t)&&Hh(t,n)}function Hh(t,n){let i=t[ee],r=t[le],o=t[nn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&wr(o)),a||=!1,o&&(o.dirty=!1),t[le]&=-9217,a)AA(i,t,i.template,t[ct]);else if(r&8192){let s=X(null);try{fC(t),hC(t,1);let c=i.components;c!==null&&vC(t,c,1),dC(t)}finally{X(s)}}}function vC(t,n,e){for(let i=0;i<n.length;i++)OA(t,n[i],e)}function NA(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)tr(~r);else{let o=r,a=e[++i],s=e[++i];c0(a,o);let c=n[o];Fe(Re.HostBindingsUpdateStart,c);try{s(2,c)}finally{Fe(Re.HostBindingsUpdateEnd,c)}}}}finally{tr(-1)}}function kg(t,n){let e=ch()?64:1088;for(t[Tn].changeDetectionScheduler?.notify(n);t;){t[le]|=e;let i=Wi(t);if(Vo(t)&&!i)return t;t=i}return null}function bC(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function _C(t,n){let e=it+n;if(e<t.length)return t[e]}function Us(t,n,e,i=!0){let r=n[ee];if(PA(r,n,t,e),i){let a=Uh(e,t),s=n[He],c=s.parentNode(t[Ji]);c!==null&&Xk(r,t[Gt],s,n,c,a)}let o=n[Hr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function yC(t,n){let e=Rs(t,n);return e!==void 0&&$d(e[ee],e),e}function Rs(t,n){if(t.length<=it)return;let e=it+n,i=t[e];if(i){let r=i[Qi];r!==null&&r!==t&&Eg(r,i),n>0&&(t[e-1][mn]=i[mn]);let o=hs(t,it+n);Qk(i[ee],i);let a=o[Kn];a!==null&&a.detachView(o[ee]),i[vt]=null,i[mn]=null,i[le]&=-129}return i}function PA(t,n,e,i){let r=it+i,o=e.length;i>0&&(e[r-1][mn]=n),i<o-it?(n[mn]=e[r],Fp(e,it+i,n)):(e.push(n),n[mn]=null),n[vt]=e;let a=n[Qi];a!==null&&e!==a&&xC(a,n);let s=n[Kn];s!==null&&s.insertView(t),td(n),n[le]|=128}function xC(t,n){let e=t[Wr],i=n[vt];if(xi(i))t[le]|=2;else{let r=i[vt][Wt];n[Wt]!==r&&(t[le]|=2)}e===null?t[Wr]=[n]:e.push(n)}var nr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ee];return As(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ct]}set context(n){this._lView[ct]=n}get destroyed(){return qr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[vt];if(kn(n)){let e=n[vs],i=e?e.indexOf(this):-1;i>-1&&(Rs(n,i),hs(e,i))}this._attachedToViewContainer=!1}$d(this._lView[ee],this._lView)}onDestroy(n){Qp(this._lView,n)}markForCheck(){kg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[le]&=-129}reattach(){td(this._lView),this._lView[le]|=128}detectChanges(){this._lView[le]|=1024,pC(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new T(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Vo(this._lView),e=this._lView[Qi];e!==null&&!n&&Eg(e,this._lView),Qx(this._lView[ee],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new T(902,!1);this._appRef=n;let e=Vo(this._lView),i=this._lView[Qi];i!==null&&!e&&xC(i,this._lView),td(this._lView)}};var Pt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=FA;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=js(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new nr(o)}}return t})();function FA(){return Zd(Et(),te())}function Zd(t,n){return t.type&4?new Pt(n,t,Xo(t,n)):null}function Jo(t,n,e,i,r){let o=t.data[n];if(o===null)o=LA(t,n,e,i,r),s0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=i0();o.injectorIndex=a===null?-1:a.injectorIndex}return jo(o,!0),o}function LA(t,n,e,i,r){let o=oh(),a=ah(),s=a?o:o&&o.parent,c=t.data[n]=VA(t,s,e,n,i,r);return BA(t,c,o,a),c}function BA(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function VA(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return nh()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function jA(t){let n=t[$p]??[],i=t[vt][He],r=[];for(let o of n)o.data[Ex]!==void 0?r.push(o):UA(o,i);t[$p]=r}function UA(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[Dx];for(;e<r;){let o=i.nextSibling;Vx(n,i,!1),i=o,e++}}}var HA=()=>null,zA=()=>null;function Ed(t,n){return HA(t,n)}function CC(t,n,e){return zA(t,n,e)}var wC=class{},Yd=class{},zh=class{resolveComponentFactory(n){throw new T(917,!1)}},Hs=class{static NULL=new zh},ht=class{},Le=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>$A()}return t})();function $A(){let t=te(),n=Et(),e=hn(n.index,t);return(xi(e)?e:t)[He]}var DC=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>null})}return t})();var bd={},$h=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,bd,i);return r!==bd||e===bd?r:this.parentInjector.get(n,e,i)}};function Sd(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=$l(r,s);else if(o==2){let c=s,l=n[++a];i=$l(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function B(t,n=0){let e=te();if(e===null)return G(t,n);let i=Et();return hx(i,e,Dt(t),n)}function EC(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,c,l]=d.resolveHostDirectives(a);break}qA(t,n,e,s,o,c,l)}o!==null&&i!==null&&GA(e,i,o)}function GA(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new T(-301,!1);i.push(n[r],o)}}function WA(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function qA(t,n,e,i,r,o,a){let s=i.length,c=null;for(let p=0;p<s;p++){let h=i[p];c===null&&Xn(h)&&(c=h,WA(t,e,p)),Mh(wd(e,n),t,h.type)}JA(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let p=0;p<s;p++){let h=i[p];h.providersResolver&&h.providersResolver(h)}let l=!1,d=!1,m=qx(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let h=i[p];if(e.mergedAttrs=qo(e.mergedAttrs,h.hostAttrs),YA(t,e,n,m,h),XA(m,h,r),a!==null&&a.has(h)){let[A,k]=a.get(h);e.directiveToIndex.set(h.type,[m,A+e.directiveStart,k+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,m);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let y=h.type.prototype;!l&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}ZA(t,e,o)}function ZA(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))U0(0,n,r,i),U0(1,n,r,i),z0(n,i,!1);else{let o=e.get(r);H0(0,n,o,i),H0(1,n,o,i),z0(n,i,!0)}}}function U0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),SC(n,o)}}function H0(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),SC(n,a)}}function SC(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function z0(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||bg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){a??=[],a.push(l[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function YA(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=$i(r.type,!0)),a=new Kr(o,Xn(r),B,null);t.blueprint[i]=a,e[i]=a,KA(t,n,i,qx(t,e,r.hostVars,Zt),r)}function KA(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;QA(a)!=s&&a.push(s),a.push(e,i,o)}}function QA(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function XA(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Xn(n)&&(e[""]=t)}}function JA(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function IC(t,n,e,i,r,o,a,s){let c=n[ee],l=c.consts,d=rn(l,a),m=Jo(c,t,e,i,d);return o&&EC(c,n,m,rn(l,s),r),m.mergedAttrs=qo(m.mergedAttrs,m.attrs),m.attrs!==null&&Sd(m,m.attrs,!1),m.mergedAttrs!==null&&Sd(m,m.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,m),m}function MC(t,n){ax(t,n),Gp(n)&&t.queries.elementEnd(n)}function eR(t,n,e,i,r,o){let a=n.consts,s=rn(a,r),c=Jo(n,t,e,i,s);if(c.mergedAttrs=qo(c.mergedAttrs,c.attrs),o!=null){let l=rn(a,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Sd(c,c.attrs,!1),c.mergedAttrs!==null&&Sd(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function Ag(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function Rg(t,n,e){return t[n]=e}function tR(t,n){return t[n]}function gn(t,n,e){if(e===Zt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function TC(t,n,e,i){let r=gn(t,n,e);return gn(t,n+1,i)||r}function Wo(t,n,e){return function i(r){let o=Qn(t)?hn(t.index,n):n;kg(o,5);let a=n[ct],s=$0(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=$0(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function $0(t,n,e,i){let r=X(null);try{return Fe(Re.OutputStart,n,e),e(i)!==!1}catch(o){return _A(t,o),!1}finally{Fe(Re.OutputEnd,n,e),X(r)}}function kC(t,n,e,i,r,o,a,s){let c=bs(t),l=!1,d=null;if(!i&&c&&(d=iR(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,l=!0}else{let m=pn(t,e),p=i?i(m):m;ik(e,p,o,s);let h=r.listen(p,o,s);if(!nR(o)){let y=i?A=>i(fn(A[t.index])):t.index;AC(y,n,e,o,s,h,!1)}}return l}function nR(t){return t.startsWith("animation")||t.startsWith("transition")}function iR(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Lo],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function AC(t,n,e,i,r,o,a){let s=n.firstCreatePass?Jp(n):null,c=Xp(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function Id(t,n,e,i,r,o){let a=n[e],s=n[ee],l=s.data[e].outputs[i],m=a[l].subscribe(o);AC(t.index,s,n,r,o,m,!0)}function ea(){rR()}function rR(){let t=te(),n=qe(),e=Et();if(n.firstCreatePass&&aR(n,e),e.controlDirectiveIndex===-1)return;Si("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new Md(t,n,e))}function ta(){oR()}function oR(){let t=te(),n=qe(),e=Uo();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new Md(t,n,e))}var Md=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){RC(this.tView.data[this.tNode.customControlIndex],n)&&Id(this.tNode,this.lView,this.tNode.customControlIndex,n,n,Wo(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";Id(this.tNode,this.lView,this.tNode.customControlIndex,e,e,Wo(this.tNode,this.lView,n))}listenToDom(n,e){kC(this.tNode,this.tView,this.lView,void 0,this.lView[He],n,e,Wo(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];Go(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],c=this.tView.data[a],l=this.lView[a];Go(c,l,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";Go(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function aR(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}sR(t,n)}function sR(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(G0(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(G0(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function G0(t,n){return cR(t,n)&&RC(t,n+"Change")}function cR(t,n){return n in t.inputs}function RC(t,n){return n in t.outputs}var Gh=Symbol("BINDING");function OC(t){return t.debugInfo?.className||t.type.name||null}var Td=class extends Hs{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=bi(n);return new Xr(e,this.ngModule)}};function lR(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Ud.SignalBased)!==0};return r&&(o.transform=r),o})}function dR(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function uR(t,n,e){let i=n instanceof Oe?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new $h(e,i):e}function mR(t){let n=t.get(ht,null);if(n===null)throw new T(407,!1);let e=t.get(DC,null),i=t.get(Yn,null),r=t.get(Ln,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function fR(t,n){let e=NC(t);return Lx(n,e,e==="svg"?Wp:e==="math"?Yy:null)}function NC(t){return(t.selectors[0][0]||"div").toLowerCase()}var Xr=class extends Yd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=lR(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=dR(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=Vk(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Fe(Re.DynamicComponentStart);let s=X(null);try{let c=this.componentDef,l=uR(c,r||this.ngModule,n),d=mR(l),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(OC(c),()=>this.createComponentRef(d,l,e,i,o,a)):this.createComponentRef(d,l,e,i,o,a)}finally{X(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=pR(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),d=r?lA(l,r,s.encapsulation,e):fR(s,l),m=a?.some(W0)||o?.some(y=>typeof y!="function"&&y.bindings.some(W0)),p=yg(null,c,null,512|Wx(s),null,null,n,l,e,null,Mx(d,e,!0));p[Ye]=d,od(p);let h=null;try{let y=IC(Ye,p,2,"#host",()=>c.directiveRegistry,!0,0);jx(l,d,y),Zo(d,p),Mg(c,p,y),kx(c,y,p),MC(c,y),i!==void 0&&gR(y,this.ngContentSelectors,i),h=hn(y.index,p),p[ct]=h[ct],Tg(c,p,null)}catch(y){throw h!==null&&kh(h),kh(p),y}finally{Fe(Re.DynamicComponentEnd),ad()}return new kd(this.componentType,p,!!m)}};function pR(t,n,e,i){let r=t?["ng-version","21.2.10"]:jk(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[Gh].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let p of m.bindings){s+=p[Gh].requiredVars;let h=d+1;p.create&&(p.targetIdx=h,(o??=[]).push(p)),p.update&&(p.targetIdx=h,(a??=[]).push(p))}}let c=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,p=Op(m);c.push(p)}return _g(0,null,hR(o,a),1,s,c,null,null,null,[r],null)}function hR(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function W0(t){let n=t[Gh].kind;return n==="input"||n==="twoWay"}var kd=class extends wC{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Xl(e[ee],Ye),this.location=Xo(this._tNode,e),this.instance=hn(this._tNode.index,e)[ct],this.hostView=this.changeDetectorRef=new nr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=qd(i,r[ee],r,n,e);this.previousInputValues.set(n,e);let a=hn(i.index,r);kg(a,1)}get injector(){return new Yr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function gR(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Mt=(()=>{class t{static __NG_ELEMENT_ID__=vR}return t})();function vR(){let t=Et();return PC(t,te())}var Wh=class t extends Mt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Xo(this._hostTNode,this._hostLView)}get injector(){return new Yr(this._hostTNode,this._hostLView)}get parentInjector(){let n=cg(this._hostTNode,this._hostLView);if(lx(n)){let e=xd(n,this._hostLView),i=yd(n),r=e[ee].data[i+8];return new Yr(r,e)}else return new Yr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=q0(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-it}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Ed(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Yo(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!kT(n),l;if(c)l=e;else{let k=e||{};l=k.index,i=k.injector,r=k.projectableNodes,o=k.environmentInjector||k.ngModuleRef,a=k.directives,s=k.bindings}let d=c?n:new Xr(bi(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let N=(c?m:this.parentInjector).get(Oe,null);N&&(o=N)}let p=bi(d.componentType??{}),h=Ed(this._lContainer,p?.id??null),y=h?.firstChild??null,A=d.create(m,r,y,o,a,s);return this.insertImpl(A.hostView,l,Yo(this._hostTNode,h)),A}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Qy(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[vt],l=new t(c,c[Gt],c[vt]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Us(a,r,o,i),n.attachToViewContainerRef(),Fp(yh(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=q0(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Rs(this._lContainer,e);i&&(hs(yh(this._lContainer),e),$d(i[ee],i))}detach(n){let e=this._adjustIndex(n,-1),i=Rs(this._lContainer,e);return i&&hs(yh(this._lContainer),e)!=null?new nr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function q0(t){return t[vs]}function yh(t){return t[vs]||(t[vs]=[])}function PC(t,n){let e,i=n[t.index];return kn(i)?e=i:(e=bC(i,n,null,t),n[t.index]=e,xg(n,e)),_R(e,n,t,i),new Wh(e,t,n)}function bR(t,n){let e=t[He],i=e.createComment(""),r=pn(n,t),o=e.parentNode(r);return Dd(e,o,i,e.nextSibling(r),!1),i}var _R=CR,yR=()=>!1;function xR(t,n,e){return yR(t,n,e)}function CR(t,n,e,i){if(t[Ji])return;let r;e.type&8?r=fn(i):r=bR(n,e),t[Ji]=r}var qh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Zh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Ng(n,e).matches!==null&&this.queries[e].setDirty()}},Ad=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=IR(n):this.predicate=n}},Yh=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Kh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,wR(e,o)),this.matchTNodeWithReadOption(n,e,vd(e,n,o,!1,!1))}else i===Pt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,vd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===Mt||r===Pt&&e.type&4)this.addMatch(e.index,-2);else{let o=vd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function wR(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function DR(t,n){return t.type&11?Xo(t,n):t.type&4?Zd(t,n):null}function ER(t,n,e,i){return e===-1?DR(n,t):e===-2?SR(t,n,i):Ts(t,t[ee],e,n)}function SR(t,n,e){if(e===V)return Xo(n,t);if(e===Pt)return Zd(n,t);if(e===Mt)return PC(n,t)}function FC(t,n,e,i){let r=n[Kn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let d=o[l];s.push(ER(n,d,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function Qh(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=FC(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],d=n[-c];for(let m=it;m<d.length;m++){let p=d[m];p[Qi]===p[vt]&&Qh(p[ee],p,l,i)}if(d[Wr]!==null){let m=d[Wr];for(let p=0;p<m.length;p++){let h=m[p];Qh(h[ee],h,l,i)}}}}}return i}function Og(t,n){return t[Kn].queries[n].queryList}function LC(t,n,e){let i=new On((e&4)===4);return e0(t,n,i,i.destroy),(n[Kn]??=new Zh).queries.push(new qh(i))-1}function BC(t,n,e){let i=qe();return i.firstCreatePass&&(jC(i,new Ad(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),LC(i,te(),n)}function VC(t,n,e,i){let r=qe();if(r.firstCreatePass){let o=Et();jC(r,new Ad(n,e,i),o.index),MR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return LC(r,te(),e)}function IR(t){return t.split(",").map(n=>n.trim())}function jC(t,n,e){t.queries===null&&(t.queries=new Yh),t.queries.track(new Kh(n,e))}function MR(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Ng(t,n){return t.queries.getByIndex(n)}function UC(t,n){let e=t[ee],i=Ng(e,n);return i.crossesNgTemplate?Qh(e,t,n,[]):FC(e,t,i,n)}function HC(t,n,e){let i,r=Xa(()=>{i._dirtyCounter();let o=TR(i,t);if(n&&o===void 0)throw new T(-951,!1);return o});return i=r[We],i._dirtyCounter=F(0),i._flatValue=void 0,r}function Pg(t){return HC(!0,!1,t)}function Fg(t){return HC(!0,!0,t)}function zC(t,n){let e=t[We];e._lView=te(),e._queryIndex=n,e._queryList=Og(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function TR(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[le]&4)return n?void 0:Rt;let r=Og(e,i),o=UC(e,i);return r.reset(o,bx),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ti=class{},Kd=class{};var Rd=class extends ti{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Td(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Rp(n);this._bootstrapComponents=zx(o.bootstrap),this._r3Injector=uh(n,e,[{provide:ti,useValue:this},{provide:Hs,useValue:this.componentFactoryResolver},...i],fs(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Od=class extends Kd{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Rd(this.moduleType,n,[])}};var Os=class extends ti{injector;componentFactoryResolver=new Td(this);instance=null;constructor(n){super();let e=new jr([...n.providers,{provide:ti,useValue:this},{provide:Hs,useValue:this.componentFactoryResolver}],n.parent||Fo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function zs(t,n,e=null){return new Os({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var kR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Vp(!1,e.type),r=i.length>0?zs([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=S({token:t,providedIn:"environment",factory:()=>new t(G(Oe))})}return t})();function I(t){return Ps(()=>{let n=$C(t),e=W(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===lg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(kR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Nn.Emulated,styles:t.styles||Rt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Si("NgStandalone"),GC(e);let i=t.dependencies;return e.directiveDefs=Z0(i,AR),e.pipeDefs=Z0(i,Ny),e.id=NR(e),e})}function AR(t){return bi(t)||Op(t)}function ce(t){return Ps(()=>({type:t.type,bootstrap:t.bootstrap||Rt,declarations:t.declarations||Rt,imports:t.imports||Rt,exports:t.exports||Rt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function RR(t,n){if(t==null)return Zi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=Ud.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function OR(t){if(t==null)return Zi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function P(t){return Ps(()=>{let n=$C(t);return GC(n),n})}function Lg(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function $C(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Zi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Rt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:RR(t.inputs,n),outputs:OR(t.outputs),debugInfo:null}}function GC(t){t.features?.forEach(n=>n(t))}function Z0(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function NR(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Bg(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function PR(t){return Object.getPrototypeOf(t.prototype).constructor}function ke(t){let n=PR(t.type),e=!0,i=[t];for(;n;){let r;if(Xn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new T(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=xh(t.inputs),a.declaredInputs=xh(t.declaredInputs),a.outputs=xh(t.outputs);let s=r.hostBindings;s&&jR(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&BR(t,c),l&&VR(t,l),FR(t,r),Oy(t.outputs,r.outputs),Xn(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===ke&&(e=!1)}}n=Object.getPrototypeOf(n)}LR(i)}function FR(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function LR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=qo(r.hostAttrs,e=qo(e,r.hostAttrs))}}function xh(t){return t===Zi?{}:t===Rt?[]:t}function BR(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function VR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function jR(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function WC(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=qo(t.mergedAttrs,t.attrs);let d=t.tView=_g(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),jo(t,!1);let c=HR(e,n,t,i);sd()&&Sg(e,n,c,t),Zo(c,n);let l=bC(c,n,c,t);n[i+Ye]=l,xg(n,l),xR(l,t,n)}function UR(t,n,e,i,r,o,a,s,c,l,d){let m=e+Ye,p;return n.firstCreatePass?(p=Jo(n,m,4,a||null,s||null),th()&&EC(n,t,p,rn(n.consts,l),oC),ax(n,p)):p=n.data[m],WC(p,t,n,e,i,r,o,c),bs(p)&&Mg(n,t,p),l!=null&&Wd(t,p,d),p}function Ko(t,n,e,i,r,o,a,s,c,l,d){let m=e+Ye,p;if(n.firstCreatePass){if(p=Jo(n,m,4,a||null,s||null),l!=null){let h=rn(n.consts,l);p.localNames=[];for(let y=0;y<h.length;y+=2)p.localNames.push(h[y],-1)}}else p=n.data[m];return WC(p,t,n,e,i,r,o,c),l!=null&&Wd(t,p,d),p}function Ft(t,n,e,i,r,o,a,s){let c=te(),l=qe(),d=rn(l.consts,o);return UR(c,l,t,n,e,i,r,d,void 0,a,s),Ft}function na(t,n,e,i,r,o,a,s){let c=te(),l=qe(),d=rn(l.consts,o);return Ko(c,l,t,n,e,i,r,d,void 0,a,s),na}var HR=zR;function zR(t,n,e,i){return cd(!0),n[He].createComment("")}var Qd=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Ii(t){return typeof t=="function"&&t[We]!==void 0}var Vg=new D("");function Mi(t){return!!t&&typeof t.then=="function"}function jg(t){return!!t&&typeof t.subscribe=="function"}var qC=new D("");var Ug=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(qC,{optional:!0})??[];injector=u(oe);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=st(this.injector,r);if(Mi(o))e.push(o);else if(jg(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xd=new D("");function ZC(){Yf(()=>{let t="";throw new T(600,t)})}function YC(t){return t.isBoundToModule}var $R=10;var an=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(on);afterRenderManager=u(zd);zonelessEnabled=u(Ds);rootEffectScheduler=u(dd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new O;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Ci);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(J(e=>!e))}constructor(){u(Ln,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Oe);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=oe.NULL){return this._injector.get(L).run(()=>{Fe(Re.BootstrapComponentStart);let a=e instanceof Yd;if(!this._injector.get(Ug).done){let y="";throw new T(405,y)}let c;a?c=e:c=this._injector.get(Hs).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=YC(c)?void 0:this._injector.get(ti),d=i||c.selector,m=c.create(r,[],d,l),p=m.location.nativeElement,h=m.injector.get(Vg,null);return h?.registerApplication(p),m.onDestroy(()=>{this.detachView(m.hostView),Ms(this.components,m),h?.unregisterApplication(p)}),this._loadComponent(m),Fe(Re.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Fe(Re.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Hd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Fe(Re.ChangeDetectionEnd),new T(101,!1);let e=X(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,X(e),this.afterTick.next(),Fe(Re.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ht,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<$R;){Fe(Re.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Fe(Re.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!_s(r))continue;let o=i&&!this.zonelessEnabled?0:1;pC(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>_s(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ms(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Xd,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ms(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new T(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ms(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Jd(t,n){let e=te(),i=er();if(gn(e,i,n)){let r=qe(),o=Uo();if(qd(o,r,e,t,n))Qn(o)&&rC(e,o.index);else{let s=pn(o,e);aC(e[He],s,null,o.value,t,n,null)}}return Jd}function xe(t,n,e,i){let r=te(),o=er();if(gn(r,o,n)){let a=qe(),s=Uo();vA(s,r,t,n,e,i)}return xe}var Xh=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Ch(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function GR(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){X(i);let l=n.length-1;for(X(null);a<=s&&a<=l;){let d=t.at(a),m=n[a],p=Ch(a,d,a,m,e);if(p!==0){p<0&&t.updateValue(a,m),a++;continue}let h=t.at(s),y=n[l],A=Ch(s,h,l,y,e);if(A!==0){A<0&&t.updateValue(s,y),s--,l--;continue}let k=e(a,d),N=e(s,h),Ie=e(a,m);if(Object.is(Ie,N)){let at=e(l,y);Object.is(at,k)?(t.swap(a,s),t.updateValue(s,y),l--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new Nd,o??=K0(t,a,s,e),Jh(t,r,a,Ie))t.updateValue(a,m),a++,s++;else if(o.has(Ie))r.set(k,t.detach(a)),s--;else{let at=t.create(a,n[a]);t.attach(a,at),a++,s++}}for(;a<=l;)Y0(t,r,e,a,n[a]),a++}else if(n!=null){X(i);let l=n[Symbol.iterator]();X(null);let d=l.next();for(;!d.done&&a<=s;){let m=t.at(a),p=d.value,h=Ch(a,m,a,p,e);if(h!==0)h<0&&t.updateValue(a,p),a++,d=l.next();else{r??=new Nd,o??=K0(t,a,s,e);let y=e(a,p);if(Jh(t,r,a,y))t.updateValue(a,p),a++,s++,d=l.next();else if(!o.has(y))t.attach(a,t.create(a,p)),a++,s++,d=l.next();else{let A=e(a,m);r.set(A,t.detach(a)),s--}}}for(;!d.done;)Y0(t,r,e,t.length,d.value),d=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function Jh(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Y0(t,n,e,i,r){if(Jh(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function K0(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Nd=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){Si("NgControlFlow");let c=te(),l=qe(),d=rn(l.consts,o);return Ko(c,l,t,n,e,i,r,d,256,a,s),Hg}function Hg(t,n,e,i,r,o,a,s){Si("NgControlFlow");let c=te(),l=qe(),d=rn(l.consts,o);return Ko(c,l,t,n,e,i,r,d,512,a,s),Hg}function w(t,n){Si("NgControlFlow");let e=te(),i=er(),r=e[i]!==Zt?e[i]:-1,o=r!==-1?Pd(e,Ye+r):void 0,a=0;if(gn(e,i,t)){let s=X(null);try{if(o!==void 0&&yC(o,a),t!==-1){let c=Ye+t,l=Pd(e,c),d=ig(e[ee],c),m=CC(l,d,e),p=js(e,d,n,{dehydratedView:m});Us(l,p,a,Yo(d,m))}}finally{X(s)}}else if(o!==void 0){let s=_C(o,a);s!==void 0&&(s[ct]=n)}}var eg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-it}};function $e(t){return t}function vn(t,n){return n}var tg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function de(t,n,e,i,r,o,a,s,c,l,d,m,p){Si("NgControlFlow");let h=te(),y=qe(),A=c!==void 0,k=te(),N=s?a.bind(k[Wt][ct]):a,Ie=new tg(A,N);k[Ye+t]=Ie,Ko(h,y,t+1,n,e,i,r,rn(y.consts,o),256),A&&Ko(h,y,t+2,c,l,d,m,rn(y.consts,p),512)}var ng=class extends Xh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-it}at(n){return this.getLView(n)[ct].$implicit}attach(n,e){let i=e[Hr];this.needsIndexUpdate||=n!==this.length,Us(this.lContainer,e,n,Yo(this.templateTNode,i)),WR(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,qR(this.lContainer,n),ZR(this.lContainer,n)}create(n,e){let i=Ed(this.lContainer,this.templateTNode.tView.ssrId);return js(this.hostLView,this.templateTNode,new eg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){$d(n[ee],n)}updateValue(n,e){this.getLView(n)[ct].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ct].$index=n}getLView(n){return YR(this.lContainer,n)}};function ue(t){let n=X(null),e=Jn();try{let i=te(),r=i[ee],o=i[e],a=e+1,s=Pd(i,a);if(o.liveCollection===void 0){let l=ig(r,a);o.liveCollection=new ng(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(GR(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=er(),d=c.length===0;if(gn(i,l,d)){let m=e+2,p=Pd(i,m);if(d){let h=ig(r,m),y=CC(p,h,i),A=js(i,h,void 0,{dehydratedView:y});Us(p,A,0,Yo(h,y))}else r.firstUpdatePass&&jA(p),yC(p,0)}}}finally{X(n)}}function Pd(t,n){return t[n]}function WR(t,n){if(t.length<=it)return;let e=it+n,i=t[e],r=i?i[Xi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[_i];Yk(o,r),Qr.delete(i[yi]),r.detachedLeaveAnimationFns=void 0}}function qR(t,n){if(t.length<=it)return;let e=it+n,i=t[e],r=i?i[Xi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function ZR(t,n){return Rs(t,n)}function YR(t,n){return _C(t,n)}function ig(t,n){return Xl(t,n)}function M(t,n,e){let i=te(),r=er();if(gn(i,r,n)){let o=qe(),a=Uo();fA(a,i,t,n,i[He],e)}return M}function rg(t,n,e,i,r){qd(n,t,e,r?"class":"style",i)}function v(t,n,e,i){let r=te(),o=r[ee],a=t+Ye,s=o.firstCreatePass?IC(a,r,2,n,oC,th(),e,i):o.data[a];if(Qn(s)){let c=r[Tn].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(OC(l),()=>(Q0(t,n,r,s,i),v))}}return Q0(t,n,r,s,i),v}function Q0(t,n,e,i,r){if(sC(i,e,t,n,KC),bs(i)){let o=e[ee];Mg(o,e,i),kx(o,i,e)}r!=null&&Wd(e,i)}function g(){let t=qe(),n=Et(),e=cC(n);return t.firstCreatePass&&MC(t,e),ih(e)&&rh(),eh(),e.classesWithoutHost!=null&&FT(e)&&rg(t,e,te(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&LT(e)&&rg(t,e,te(),e.stylesWithoutHost,!1),g}function E(t,n,e,i){return v(t,n,e,i),g(),E}function me(t,n,e,i){let r=te(),o=r[ee],a=t+Ye,s=o.firstCreatePass?eR(a,o,2,n,e,i):o.data[a];return sC(s,r,t,n,KC),i!=null&&Wd(r,s),me}function ge(){let t=Et(),n=cC(t);return ih(n)&&rh(),eh(),ge}function Ee(t,n,e,i){return me(t,n,e,i),ge(),Ee}var KC=(t,n,e,i,r)=>(cd(!0),Lx(n[He],i,h0()));function bn(){return te()}function je(t,n,e){let i=te(),r=er();if(gn(i,r,n)){let o=qe(),a=Uo();iC(a,i,t,n,i[He],e)}return je}var $s="en-US";var KR=$s;function QC(t){typeof t=="string"&&(KR=t.toLowerCase().replace(/_/g,"-"))}function Y(t,n,e){let i=te(),r=qe(),o=Et();return QR(r,i,i[He],o,t,n,e),Y}function QR(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=Wo(i,n,o),kC(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let p=d[m],h=d[m+1];c??=Wo(i,n,o),Id(i,n,p,h,r,c)}if(l&&l.length)for(let m of l)c??=Wo(i,n,o),Id(i,n,m,r,r,c)}}function x(t=1){return p0(t)}function XR(t,n){let e=null,i=Nk(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Gx(t,o,!0):Lk(i,o))return r}return e}function Se(t){let n=te()[Wt][Gt];if(!n.projection){let e=t?t.length:1,i=n.projection=jy(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?XR(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function U(t,n=0,e,i,r,o){let a=te(),s=qe(),c=i?t+1:null;c!==null&&Ko(a,s,c,i,r,o,null,e);let l=Jo(s,Ye+t,16,null,e||null);l.projection===null&&(l.projection=n),sh();let m=!a[Hr]||nh();a[Wt][Gt].projection[l.projection]===null&&c!==null?JR(a,s,c):m&&!Vd(l)&&aA(s,a,l)}function JR(t,n,e){let i=Ye+e,r=n.data[i],o=t[i],a=Ed(o,r.tView.ssrId),s=js(t,r,void 0,{dehydratedView:a});Us(o,s,0,Yo(r,a))}function Tt(t,n,e,i){return VC(t,n,e,i),Tt}function Qe(t,n,e){return BC(t,n,e),Qe}function H(t){let n=te(),e=qe(),i=rd();xs(i+1);let r=Ng(e,i);if(t.dirty&&Ky(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=UC(n,i);t.reset(o,bx),t.notifyOnChanges()}return!0}return!1}function z(){return Og(te(),rd())}function eu(t,n,e,i,r){return zC(n,VC(t,e,i,r)),eu}function tu(t,n,e,i){return zC(t,BC(n,e,i)),tu}function nu(t=1){xs(rd()+t)}function Xt(t){let n=r0();return Jl(n,Ye+t)}function pd(t,n){return t<<17|n<<2}function Jr(t){return t>>17&32767}function eO(t){return(t&2)==2}function tO(t,n){return t&131071|n<<17}function og(t){return t|2}function Qo(t){return(t&131068)>>2}function wh(t,n){return t&-131069|n<<2}function nO(t){return(t&1)===1}function ag(t){return t|1}function iO(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=Jr(a),c=Qo(a);t[i]=e;let l=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||Po(m,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let p=Jr(t[s+1]);t[i+1]=pd(p,s),p!==0&&(t[p+1]=wh(t[p+1],i)),t[s+1]=tO(t[s+1],i)}else t[i+1]=pd(s,0),s!==0&&(t[s+1]=wh(t[s+1],i)),s=i;else t[i+1]=pd(c,0),s===0?s=i:t[c+1]=wh(t[c+1],i),c=i;l&&(t[i+1]=og(t[i+1])),X0(t,d,i,!0),X0(t,d,i,!1),rO(n,d,t,i,o),a=pd(s,c),o?n.classBindings=a:n.styleBindings=a}function rO(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Po(o,n)>=0&&(e[i+1]=ag(e[i+1]))}function X0(t,n,e,i){let r=t[e+1],o=n===null,a=i?Jr(r):Qo(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];oO(c,n)&&(s=!0,t[a+1]=i?ag(l):og(l)),a=i?Jr(l):Qo(l)}s&&(t[e+1]=i?og(r):ag(r))}function oO(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Po(t,n)>=0:!1}var Rn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function aO(t){return t.substring(Rn.key,Rn.keyEnd)}function sO(t){return cO(t),XC(t,JC(t,0,Rn.textEnd))}function XC(t,n){let e=Rn.textEnd;return e===n?-1:(n=Rn.keyEnd=lO(t,Rn.key=n,e),JC(t,n,e))}function cO(t){Rn.key=0,Rn.keyEnd=0,Rn.value=0,Rn.valueEnd=0,Rn.textEnd=t.length}function JC(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function lO(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function rt(t,n,e){return ew(t,n,e,!1),rt}function j(t,n){return ew(t,n,null,!0),j}function yt(t){uO(vO,dO,t,!0)}function dO(t,n){for(let e=sO(n);e>=0;e=XC(n,e))Yl(t,aO(n),!0)}function ew(t,n,e,i){let r=te(),o=qe(),a=nd(2);if(o.firstUpdatePass&&nw(o,t,a,i),n!==Zt&&gn(r,a,n)){let s=o.data[Jn()];iw(o,s,r,r[He],t,r[a+1]=_O(n,e),i,a)}}function uO(t,n,e,i){let r=qe(),o=nd(2);r.firstUpdatePass&&nw(r,null,o,i);let a=te();if(e!==Zt&&gn(a,o,e)){let s=r.data[Jn()];if(rw(s,i)&&!tw(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=$l(c,e||"")),rg(r,s,a,e,i)}else bO(r,s,a,a[He],a[o+1],a[o+1]=gO(t,n,e),i,o)}}function tw(t,n){return n>=t.expandoStartIndex}function nw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Jn()],a=tw(t,e);rw(o,i)&&n===null&&!a&&(n=!1),n=mO(r,o,n,i),iO(r,o,n,e,a,i)}}function mO(t,n,e,i){let r=d0(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Dh(null,t,n,e,i),e=Ns(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Dh(r,t,n,e,i),o===null){let c=fO(t,n,i);c!==void 0&&Array.isArray(c)&&(c=Dh(null,t,n,c[1],i),c=Ns(c,n.attrs,i),pO(t,n,i,c))}else o=hO(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function fO(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Qo(i)!==0)return t[Jr(i)]}function pO(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Jr(r)]=i}function hO(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Ns(i,a,e)}return Ns(i,n.attrs,e)}function Dh(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Ns(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Ns(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Yl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function gO(t,n,e){if(e==null||e==="")return Rt;let i=[],r=Fn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function vO(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Yl(t,i,e)}function bO(t,n,e,i,r,o,a,s){r===Zt&&(r=Rt);let c=0,l=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let p=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,y=null,A;d===m?(c+=2,l+=2,p!==h&&(y=m,A=h)):m===null||d!==null&&d<m?(c+=2,y=d):(l+=2,y=m,A=h),y!==null&&iw(t,n,e,i,y,A,a,s),d=c<r.length?r[c]:null,m=l<o.length?o[l]:null}}function iw(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],d=nO(l)?J0(c,n,e,r,Qo(l),a):void 0;if(!Fd(d)){Fd(o)||eO(l)&&(o=J0(c,null,e,r,s,a));let m=qp(Jn(),e);cA(i,a,m,r,o)}}function J0(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,m=d===null,p=e[r+1];p===Zt&&(p=m?Rt:void 0);let h=m?Kl(p,i):d===i?p:void 0;if(l&&!Fd(h)&&(h=Kl(c,i)),Fd(h)&&(s=h,a))return s;let y=t[r+1];r=a?Jr(y):Qo(y)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=Kl(c,i))}return s}function Fd(t){return t!==void 0}function _O(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=fs(Fn(t)))),t}function rw(t,n){return(t.flags&(n?8:16))!==0}function b(t,n=""){let e=te(),i=qe(),r=t+Ye,o=i.firstCreatePass?Jo(i,r,1,n,null):i.data[r],a=yO(i,e,o,n);e[r]=a,sd()&&Sg(i,e,a,o),jo(o,!1)}var yO=(t,n,e,i)=>(cd(!0),wk(n[He],i));function xO(t,n,e,i=""){return gn(t,er(),e)?n+No(e)+i:Zt}function CO(t,n,e,i,r,o=""){let a=o0(),s=TC(t,a,e,r);return nd(2),s?n+No(e)+i+No(r)+o:Zt}function re(t){return we("",t),re}function we(t,n,e){let i=te(),r=xO(i,t,n,e);return r!==Zt&&ow(i,Jn(),r),we}function Ti(t,n,e,i,r){let o=te(),a=CO(o,t,n,e,i,r);return a!==Zt&&ow(o,Jn(),a),Ti}function ow(t,n,e){let i=qp(n,t);Dk(t[He],i,e)}function ex(t,n,e){let i=qe();i.firstCreatePass&&aw(n,i.data,i.blueprint,Xn(t),e)}function aw(t,n,e,i,r){if(t=Dt(t),Array.isArray(t))for(let o=0;o<t.length;o++)aw(t[o],n,e,i,r);else{let o=qe(),a=te(),s=Et(),c=Vr(t)?t:Dt(t.provide),l=Up(t),d=s.providerIndexes&1048575,m=s.directiveStart,p=s.providerIndexes>>20;if(Vr(t)||!t.multi){let h=new Kr(l,r,B,null),y=Sh(c,n,r?d:d+p,m);y===-1?(Mh(wd(s,a),o,c),Eh(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[y]=h,a[y]=h)}else{let h=Sh(c,n,d+p,m),y=Sh(c,n,d,d+p),A=h>=0&&e[h],k=y>=0&&e[y];if(r&&!k||!r&&!A){Mh(wd(s,a),o,c);let N=EO(r?DO:wO,e.length,r,i,l,t);!r&&k&&(e[y].providerFactory=N),Eh(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(N),a.push(N)}else{let N=sw(e[r?y:h],l,!r&&i);Eh(o,t,h>-1?h:y,N)}!r&&i&&k&&e[y].componentProviders++}}}function Eh(t,n,e,i){let r=Vr(n),o=Wy(n);if(r||o){let c=(o?Dt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function sw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Sh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function wO(t,n,e,i,r){return sg(this.multi,[])}function DO(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=Ts(i,i[ee],this.providerFactory.index,r);a=c.slice(0,s),sg(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],sg(o,a);return a}function sg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function EO(t,n,e,i,r,o){let a=new Kr(t,e,B,null);return a.multi=[],a.index=n,a.componentProviders=0,sw(a,r,i&&!e),a}function Ae(t,n){return e=>{e.providersResolver=(i,r)=>ex(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>ex(i,r?r(n):n,!0))}}function _n(t,n){let e=ys()+t,i=te();return i[e]===Zt?Rg(i,e,n()):tR(i,e)}function Xe(t,n,e){return lw(te(),ys(),t,n,e)}function cw(t,n){let e=t[n];return e===Zt?void 0:e}function lw(t,n,e,i,r,o){let a=n+e;return gn(t,a,r)?Rg(t,a+1,o?i.call(o,r):i(r)):cw(t,a+1)}function SO(t,n,e,i,r,o,a){let s=n+e;return TC(t,s,r,o)?Rg(t,s+2,a?i.call(a,r,o):i(r,o)):cw(t,s+2)}function Bn(t,n){let e=qe(),i,r=t+Ye;e.firstCreatePass?(i=IO(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=$i(i.type,!0)),a,s=Ht(B);try{let c=Cd(!1),l=o();return Cd(c),Zp(e,te(),r,l),l}finally{Ht(s)}}function IO(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Gs(t,n,e){let i=t+Ye,r=te(),o=Jl(r,i);return dw(r,i)?lw(r,ys(),n,o.transform,e,o):o.transform(e)}function no(t,n,e,i){let r=t+Ye,o=te(),a=Jl(o,r);return dw(o,r)?SO(o,ys(),n,a.transform,e,i,a):a.transform(e,i)}function dw(t,n){return t[ee].data[n].pure}function iu(t,n){return Zd(t,n)}var Ld=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},zg=(()=>{class t{compileModuleSync(e){return new Od(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Rp(e),o=zx(r.declarations).reduce((a,s)=>{let c=bi(s);return c&&a.push(new Xr(c)),a},[]);return new Ld(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var uw=(()=>{class t{applicationErrorHandler=u(on);appRef=u(an);taskService=u(Ci);ngZone=u(L);zonelessEnabled=u(Ds);tracing=u(Ln,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ve;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(us):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(gh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?_0:mh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(us+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mw(){return[{provide:Yn,useExisting:uw},{provide:L,useClass:ms},{provide:Ds,useValue:!0}]}function MO(){return typeof $localize<"u"&&$localize.locale||$s}var ru=new D("",{factory:()=>u(ru,{optional:!0,skipSelf:!0})||MO()});function Z(t){return My(t)}function $(t,n){return Xa(t,n?.equal)}var TO=t=>t;function ni(t,n){if(typeof t=="function"){let e=mp(t,TO,n?.equal);return fw(e,n?.debugName)}else{let e=mp(t.source,t.computation,t.equal);return fw(e,t.debugName)}}function fw(t,n){let e=t[We],i=t;return i.set=r=>Sy(e,r),i.update=r=>Iy(e,r),i.asReadonly=ld.bind(t),i}var yw=Symbol("InputSignalNode#UNSET"),WO=W(_({},Ja),{transformFn:void 0,applyValueToInputSignal(t,n){Dr(t,n)}});function xw(t,n){let e=Object.create(WO);e.value=t,e.transformFn=n?.transform;function i(){if(zi(e),e.value===yw){let r=null;throw new T(-950,r)}return e.value}return i[We]=e,i}var ki=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Fs(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function pw(t,n){return xw(t,n)}function qO(t){return xw(yw,t)}var fe=(pw.required=qO,pw);function hw(t,n){return Pg(n)}function ZO(t,n){return Fg(n)}var qs=(hw.required=ZO,hw);function gw(t,n){return Pg(n)}function YO(t,n){return Fg(n)}var Cw=(gw.required=YO,gw);var Gg=new D(""),KO=new D("");function Ws(t){return!t.moduleRef}function QO(t){let n=Ws(t)?t.r3Injector:t.moduleRef.injector,e=n.get(L);return e.run(()=>{Ws(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(on),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Ws(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Gg);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Gg);a.add(o),t.moduleRef.onDestroy(()=>{Ms(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return JO(i,e,()=>{let o=n.get(Ci),a=o.add(),s=n.get(Ug);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(ru,$s);if(QC(c||$s),!n.get(KO,!0))return Ws(t)?n.get(an):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Ws(t)){let d=n.get(an);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return XO?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var XO;function JO(t,n,e){try{let i=e();return Mi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var ou=null;function e1(t=[],n){return oe.create({name:n,providers:[{provide:gs,useValue:"platform"},{provide:Gg,useValue:new Set([()=>ou=null])},...t]})}function t1(t=[]){if(ou)return ou;let n=e1(t);return ou=n,ZC(),n1(n),n}function n1(t){let n=t.get(Bd,null);st(t,()=>{n?.forEach(e=>e())})}var i1=1e4;var kY=i1-1e3;var et=(()=>{class t{static __NG_ELEMENT_ID__=r1}return t})();function r1(t){return o1(Et(),te(),(t&16)===16)}function o1(t,n,e){if(Qn(t)&&!e){let i=hn(t.index,n);return new nr(i,i)}else if(t.type&175){let i=n[Wt];return new nr(i,n)}return null}var Wg=class{supports(n){return n instanceof Map||Ag(n)}create(){return new qg}},qg=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||Ag(n)))throw new T(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Zg(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Zg=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function vw(){return new au([new Wg])}var au=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:vw});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||vw())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new T(901,!1)}}return t})();function ww(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Fe(Re.BootstrapApplicationStart);try{let o=r?.injector??t1(i),a=[mw(),x0,...e||[]],s=new Os({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return QO({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Fe(Re.BootstrapApplicationEnd)}}function ne(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function rr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var $g=Symbol("NOT_SET"),Dw=new Set,a1=W(_({},Ja),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:$g,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==$g&&!wr(this))return this.signal;try{for(let r of this.cleanup??Dw)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Gn(this),i;try{i=this.userFn.apply(null,n)}finally{mi(this,e)}return(this.value===$g||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Yg=class extends ks{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(St),a),this.scheduler=r;for(let s of wg){let c=e[s];if(c===void 0)continue;let l=Object.create(a1);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(zi(l),l.value),l.signal[We]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[s]=l,this.hooks[s]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??Dw)e()}finally{fi(n)}}};function su(t,n){let e=n?.injector??u(oe),i=e.get(Yn),r=e.get(zd),o=e.get(Ln,null,{optional:!0});r.impl??=e.get(Dg);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Ho,null,{optional:!0}),c=new Yg(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function cu(t,n){let e=bi(t),i=n.elementInjector||Fo();return new Xr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var Ew=null;function yn(){return Ew}function Kg(t){Ew??=t}var Zs=class{},lu=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(Sw),providedIn:"platform"})}return t})();var Sw=(()=>{class t extends lu{_location;_history;_doc=u(se);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return yn().getBaseHref(this._doc)}onPopState(e){let i=yn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=yn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Tw(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Iw(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function or(t){return t&&t[0]!=="?"?`?${t}`:t}var ia=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(c1),providedIn:"root"})}return t})(),s1=new D(""),c1=(()=>{class t extends ia{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(se).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Tw(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+or(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+or(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+or(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(G(lu),G(s1,8))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ar=(()=>{class t{_subject=new O;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=u1(Iw(Mw(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+or(i))}normalize(e){return t.stripTrailingSlash(d1(this._basePath,Mw(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+or(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+or(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=or;static joinWithSlash=Tw;static stripTrailingSlash=Iw;static \u0275fac=function(i){return new(i||t)(G(ia))};static \u0275prov=S({token:t,factory:()=>l1(),providedIn:"root"})}return t})();function l1(){return new ar(G(ia))}function d1(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Mw(t){return t.replace(/\/index.html$/,"")}function u1(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Qg=/\s+/,kw=[],Ai=(()=>{class t{_ngEl;_renderer;initialClasses=kw;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Qg):kw}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Qg):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Qg).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(B(V),B(Le))};static \u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Xg=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:Pn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(B(V),B(au),B(Le))};static \u0275dir=P({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Jg=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(oe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(B(Mt))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ce]})}return t})();function f1(t,n){return{key:t,value:n}}var Ri=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=Aw;transform(e,i=Aw){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(f1(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(B(au,16))};static \u0275pipe=Lg({name:"keyvalue",type:t,pure:!1})}return t})();function Aw(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function du(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var io=class{};var ev="browser";function Rw(t){return t===ev}var Ys=class{_doc;constructor(n){this._doc=n}manager},uu=(()=>{class t extends Ys{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(G(se))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),pu=new D(""),rv=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof uu));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof uu);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new T(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(G(pu),G(L))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),tv="ng-app-id";function Ow(t){for(let n of t)n.remove()}function Nw(t,n){let e=n.createElement("style");return e.textContent=t,e}function v1(t,n,e,i){let r=t.head?.querySelectorAll(`style[${tv}="${n}"],link[${tv}="${n}"]`);if(r)for(let o of r)o.removeAttribute(tv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function iv(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ov=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,v1(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,Nw);i?.forEach(r=>this.addUsage(r,this.external,iv))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(Ow(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ow(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,Nw(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,iv(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(G(se),G(ir),G(to,8),G(eo))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),nv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},av=/%COMP%/g;var Fw="%COMP%",b1=`_nghost-${Fw}`,_1=`_ngcontent-${Fw}`,y1=!0,x1=new D("",{factory:()=>y1});function C1(t){return _1.replace(av,t)}function w1(t){return b1.replace(av,t)}function Lw(t,n){return n.map(e=>e.replace(av,t))}var sv=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Ks(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof fu?r.applyToHost(e):r instanceof Qs&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case Nn.Emulated:o=new fu(c,l,i,this.appId,d,a,s,m);break;case Nn.ShadowDom:return new mu(c,e,i,a,s,this.nonce,m,l);case Nn.ExperimentalIsolatedShadowDom:return new mu(c,e,i,a,s,this.nonce,m);default:o=new Qs(c,l,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(G(rv),G(ov),G(ir),G(x1),G(se),G(L),G(to),G(Ln,8))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Ks=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(nv[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Pw(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(Pw(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new T(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=nv[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=nv[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Pn.DashCase|Pn.Important)?n.style.setProperty(e,i,r&Pn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Pn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=yn().getGlobalEventTarget(this.doc,n),!n))throw new T(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Pw(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var mu=class extends Ks{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=Lw(i.id,l);for(let m of l){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=m,this.shadowRoot.appendChild(p)}let d=i.getExternalStyles?.();if(d)for(let m of d){let p=iv(m,r);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Qs=class extends Ks{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?Lw(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Qr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},fu=class extends Qs{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=C1(l),this.hostAttr=w1(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var hu=class t extends Zs{supportsDOMEvents=!0;static makeCurrent(){Kg(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=D1();return e==null?null:E1(e)}resetBaseElement(){Xs=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return du(document.cookie,n)}},Xs=null;function D1(){return Xs=Xs||document.head.querySelector("base"),Xs?Xs.getAttribute("href"):null}function E1(t){return new URL(t,document.baseURI).pathname}var S1=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Bw=["alt","control","meta","shift"],I1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},M1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Vw=(()=>{class t extends Ys{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>yn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),Bw.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=I1[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Bw.forEach(a=>{if(a!==r){let s=M1[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(G(se))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();async function cv(t,n,e){let i=_({rootComponent:t},T1(n,e));return ww(i)}function T1(t,n){return{platformRef:n?.platformRef,appProviders:[...N1,...t?.providers??[]],platformProviders:O1}}function k1(){hu.makeCurrent()}function A1(){return new zt}function R1(){return dg(document),document}var O1=[{provide:eo,useValue:ev},{provide:Bd,useValue:k1,multi:!0},{provide:se,useFactory:R1}];var N1=[{provide:gs,useValue:"root"},{provide:zt,useFactory:A1},{provide:pu,useClass:uu,multi:!0},{provide:pu,useClass:Vw,multi:!0},sv,ov,rv,{provide:ht,useExisting:sv},{provide:io,useClass:S1},[]];var sr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var dv=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},uv=class{encodeKey(n){return jw(n)}encodeValue(n){return jw(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function P1(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var F1=/%(\d[a-f0-9])/gi,L1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function jw(t){return encodeURIComponent(t).replace(F1,(n,e)=>L1[e]??n)}function gu(t){return`${t}`}var Oi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new uv,n.fromString){if(n.fromObject)throw new T(2805,!1);this.map=P1(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(gu):[gu(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(gu(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(gu(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function B1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Uw(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Hw(t){return typeof Blob<"u"&&t instanceof Blob}function zw(t){return typeof FormData<"u"&&t instanceof FormData}function V1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var $w="Content-Type",Gw="Accept",Ww="text/plain",qw="application/json",j1=`${qw}, ${Ww}, */*`,ra=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(B1(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new T(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new sr,this.context??=new dv,!this.params)this.params=new Oi,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Uw(this.body)||Hw(this.body)||zw(this.body)||V1(this.body)?this.body:this.body instanceof Oi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||zw(this.body)?null:Hw(this.body)?this.body.type||null:Uw(this.body)?null:typeof this.body=="string"?Ww:this.body instanceof Oi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?qw:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,p=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,A=n.timeout??this.timeout,k=n.body!==void 0?n.body:this.body,N=n.withCredentials??this.withCredentials,Ie=n.reportProgress??this.reportProgress,at=n.headers||this.headers,dt=n.params||this.params,qa=n.context??this.context;return n.setHeaders!==void 0&&(at=Object.keys(n.setHeaders).reduce((Za,br)=>Za.set(br,n.setHeaders[br]),at)),n.setParams&&(dt=Object.keys(n.setParams).reduce((Za,br)=>Za.set(br,n.setParams[br]),dt)),new t(e,i,k,{params:dt,headers:at,context:qa,reportProgress:Ie,responseType:r,withCredentials:N,transferCache:y,keepalive:o,cache:s,priority:a,timeout:A,mode:c,redirect:l,credentials:d,referrer:m,integrity:p,referrerPolicy:h})}},ro=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ro||{}),Js=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new sr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},mv=class t extends Js{constructor(n={}){super(n)}type=ro.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ec=class t extends Js{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=ro.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},oa=class extends Js{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},U1=200,H1=204;var z1=/^\)\]\}',?\n/;var $1=(()=>{class t{xhrFactory;tracingService=u(Ln,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new T(-2800,!1);let i=this.xhrFactory;return K(null).pipe(ft(()=>new ie(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((k,N)=>a.setRequestHeader(k,N.join(","))),e.headers.has(Gw)||a.setRequestHeader(Gw,j1),!e.headers.has($w)){let k=e.detectContentTypeHeader();k!==null&&a.setRequestHeader($w,k)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let k=e.responseType.toLowerCase();a.responseType=k!=="json"?k:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let k=a.statusText||"OK",N=new sr(a.getAllResponseHeaders()),Ie=a.responseURL||e.url;return c=new mv({headers:N,status:a.status,statusText:k,url:Ie}),c},d=this.maybePropagateTrace(()=>{let{headers:k,status:N,statusText:Ie,url:at}=l(),dt=null;N!==H1&&(dt=typeof a.response>"u"?a.responseText:a.response),N===0&&(N=dt?U1:0);let qa=N>=200&&N<300;if(e.responseType==="json"&&typeof dt=="string"){let Za=dt;dt=dt.replace(z1,"");try{dt=dt!==""?JSON.parse(dt):null}catch(br){dt=Za,qa&&(qa=!1,dt={error:br,text:dt})}}qa?(o.next(new ec({body:dt,headers:k,status:N,statusText:Ie,url:at||void 0})),o.complete()):o.error(new oa({error:dt,headers:k,status:N,statusText:Ie,url:at||void 0}))}),m=this.maybePropagateTrace(k=>{let{url:N}=l(),Ie=new oa({error:k,status:a.status||0,statusText:a.statusText||"Unknown Error",url:N||void 0});o.error(Ie)}),p=m;e.timeout&&(p=this.maybePropagateTrace(k=>{let{url:N}=l(),Ie=new oa({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:N||void 0});o.error(Ie)}));let h=!1,y=this.maybePropagateTrace(k=>{h||(o.next(l()),h=!0);let N={type:ro.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(N.total=k.total),e.responseType==="text"&&a.responseText&&(N.partialText=a.responseText),o.next(N)}),A=this.maybePropagateTrace(k=>{let N={type:ro.UploadProgress,loaded:k.loaded};k.lengthComputable&&(N.total=k.total),o.next(N)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",p),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",y),s!==null&&a.upload&&a.upload.addEventListener("progress",A)),a.send(s),o.next({type:ro.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",p),e.reportProgress&&(a.removeEventListener("progress",y),s!==null&&a.upload&&a.upload.removeEventListener("progress",A)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(G(io))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function G1(t,n){return n(t)}function W1(t,n,e){return(i,r)=>st(e,()=>n(i,o=>t(o,r)))}var q1=new D("",{factory:()=>[]}),Zw=new D(""),Z1=new D("",{factory:()=>!0});var Y1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G($1),r},providedIn:"root"})}return t})();var K1=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Es);contributeToStability=u(Z1);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(q1),...this.injector.get(Zw,[])]));this.chain=i.reduceRight((r,o)=>W1(r,o,this.injector),G1)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Pr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(G(Y1),G(Oe))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Q1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(K1),r},providedIn:"root"})}return t})();function lv(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ni=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof ra)o=e;else{let c;r.headers instanceof sr?c=r.headers:c=new sr(r.headers);let l;r.params&&(r.params instanceof Oi?l=r.params:l=new Oi({fromObject:r.params})),o=new ra(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=K(o).pipe(ko(c=>this.handler.handle(c)));if(e instanceof ra||r.observe==="events")return a;let s=a.pipe(Te(c=>c instanceof ec));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(J(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new T(2806,!1);return c.body}));case"blob":return s.pipe(J(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new T(2807,!1);return c.body}));case"text":return s.pipe(J(c=>{if(c.body!==null&&typeof c.body!="string")throw new T(2808,!1);return c.body}));default:return s.pipe(J(c=>c.body))}case"response":return s;default:throw new T(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Oi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,lv(r,i))}post(e,i,r={}){return this.request("POST",e,lv(r,i))}put(e,i,r={}){return this.request("PUT",e,lv(r,i))}static \u0275fac=function(i){return new(i||t)(G(Q1))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yw=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(G(se))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(X1),r},providedIn:"root"})}return t})(),X1=(()=>{class t extends pv{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case It.NONE:return i;case It.HTML:return Di(i,"HTML")?Fn(i):gg(this._doc,String(i)).toString();case It.STYLE:return Di(i,"Style")?Fn(i):i;case It.SCRIPT:if(Di(i,"Script"))return Fn(i);throw new T(5200,!1);case It.URL:return Di(i,"URL")?Fn(i):Bs(String(i));case It.RESOURCE_URL:if(Di(i,"ResourceURL"))return Fn(i);throw new T(5201,!1);default:throw new T(5202,!1)}}bypassSecurityTrustHtml(e){return ug(e)}bypassSecurityTrustStyle(e){return mg(e)}bypassSecurityTrustScript(e){return fg(e)}bypassSecurityTrustUrl(e){return pg(e)}bypassSecurityTrustResourceUrl(e){return hg(e)}static \u0275fac=function(i){return new(i||t)(G(se))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pe="primary",pc=Symbol("RouteTitle"),_v=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ao(t){return new _v(t)}function hv(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function rD(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return hv(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!hv(o,t.slice(0,o.length),s)||!hv(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Cu(t){return new Promise((n,e)=>{t.pipe(hi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function J1(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!ii(t[e],n[e]))return!1;return!0}function ii(t,n){let e=t?yv(t):void 0,i=n?yv(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!oD(t[r],n[r]))return!1;return!0}function yv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function oD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function eN(t){return t.length>0?t[t.length-1]:null}function lo(t){return is(t)?t:Mi(t)?Ze(Promise.resolve(t)):K(t)}function aD(t){return is(t)?Cu(t):Promise.resolve(t)}var tN={exact:lD,subset:dD},sD={exact:nN,subset:iN,ignored:()=>!0},cD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},xv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Qw(t,n,e){return tN[e.paths](t.root,n.root,e.matrixParams)&&sD[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function nN(t,n){return ii(t,n)}function lD(t,n,e){if(!oo(t.segments,n.segments)||!_u(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!lD(t.children[i],n.children[i],e))return!1;return!0}function iN(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>oD(t[e],n[e]))}function dD(t,n,e){return uD(t,n,n.segments,e)}function uD(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!oo(r,e)||n.hasChildren()||!_u(r,e,i))}else if(t.segments.length===e.length){if(!oo(t.segments,e)||!_u(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!dD(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!oo(t.segments,r)||!_u(t.segments,r,i)||!t.children[pe]?!1:uD(t.children[pe],n,o,i)}}function _u(t,n,e){return n.every((i,r)=>sD[e](t[r].parameters,i.parameters))}var cn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ne([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ao(this.queryParams),this._queryParamMap}toString(){return aN.serialize(this)}},Ne=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yu(this)}},cr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=ao(this.parameters),this._parameterMap}toString(){return fD(this)}};function rN(t,n){return oo(t,n)&&t.every((e,i)=>ii(e.parameters,n[i].parameters))}function oo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function oN(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===pe&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==pe&&(e=e.concat(n(r,i)))}),e}var pa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new lr,providedIn:"root"})}return t})(),lr=class{parse(n){let e=new wv(n);return new cn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${tc(n.root,!0)}`,i=lN(n.queryParams),r=typeof n.fragment=="string"?`#${sN(n.fragment)}`:"";return`${e}${i}${r}`}},aN=new lr;function yu(t){return t.segments.map(n=>fD(n)).join("/")}function tc(t,n){if(!t.hasChildren())return yu(t);if(n){let e=t.children[pe]?tc(t.children[pe],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==pe&&i.push(`${r}:${tc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=oN(t,(i,r)=>r===pe?[tc(t.children[pe],!1)]:[`${r}:${tc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[pe]!=null?`${yu(t)}/${e[0]}`:`${yu(t)}/(${e.join("//")})`}}function mD(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vu(t){return mD(t).replace(/%3B/gi,";")}function sN(t){return encodeURI(t)}function Cv(t){return mD(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function xu(t){return decodeURIComponent(t)}function Xw(t){return xu(t.replace(/\+/g,"%20"))}function fD(t){return`${Cv(t.path)}${cN(t.parameters)}`}function cN(t){return Object.entries(t).map(([n,e])=>`;${Cv(n)}=${Cv(e)}`).join("")}function lN(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${vu(e)}=${vu(r)}`).join("&"):`${vu(e)}=${vu(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var dN=/^[^\/()?;#]+/;function gv(t){let n=t.match(dN);return n?n[0]:""}var uN=/^[^\/()?;=#]+/;function mN(t){let n=t.match(uN);return n?n[0]:""}var fN=/^[^=?&#]+/;function pN(t){let n=t.match(fN);return n?n[0]:""}var hN=/^[^&#]+/;function gN(t){let n=t.match(hN);return n?n[0]:""}var wv=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ne([],{}):new Ne([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new T(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[pe]=new Ne(e,i)),r}parseSegment(){let n=gv(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(n),new cr(xu(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=mN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=gv(this.remaining);r&&(i=r,this.capture(i))}n[xu(e)]=xu(i)}parseQueryParam(n){let e=pN(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=gN(this.remaining);a&&(i=a,this.capture(i))}let r=Xw(e),o=Xw(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=gv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new T(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=pe);let s=this.parseChildren(e+1);i[a??pe]=Object.keys(s).length===1&&s[pe]?s[pe]:new Ne([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new T(4011,!1)}};function pD(t){return t.segments.length>0?new Ne([],{[pe]:t}):t}function hD(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=hD(r);if(i===pe&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ne(t.segments,n);return vN(e)}function vN(t){if(t.numberOfChildren===1&&t.children[pe]){let n=t.children[pe];return new Ne(t.segments.concat(n.segments),n.children)}return t}function dr(t){return t instanceof cn}function gD(t,n,e=null,i=null,r=new lr){let o=vD(t);return bD(o,n,e,i,r)}function vD(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new Ne(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=pD(i);return n??r}function bD(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return vv(o,o,o,e,i,r);let a=bN(n);if(a.toRoot())return vv(o,o,new Ne([],{}),e,i,r);let s=_N(a,o,t),c=s.processChildren?ic(s.segmentGroup,s.index,a.commands):yD(s.segmentGroup,s.index,a.commands);return vv(o,s.segmentGroup,c,e,i,r)}function wu(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function ac(t){return typeof t=="object"&&t!=null&&t.outlets}function Jw(t,n,e){t||="\u0275";let i=new cn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function vv(t,n,e,i,r,o){let a={};for(let[l,d]of Object.entries(i??{}))a[l]=Array.isArray(d)?d.map(m=>Jw(l,m,o)):Jw(l,d,o);let s;t===n?s=e:s=_D(t,n,e);let c=pD(hD(s));return new cn(c,a,r)}function _D(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=_D(o,n,e)}),new Ne(t.segments,i)}var Du=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&wu(i[0]))throw new T(4003,!1);let r=i.find(ac);if(r&&r!==eN(i))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function bN(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Du(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Du(e,n,i)}var sa=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function _N(t,n,e){if(t.isAbsolute)return new sa(n,!0,0);if(!e)return new sa(n,!1,NaN);if(e.parent===null)return new sa(e,!0,0);let i=wu(t.commands[0])?0:1,r=e.segments.length-1+i;return yN(e,r,t.numberOfDoubleDots)}function yN(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new T(4005,!1);r=i.segments.length}return new sa(i,!1,r-o)}function xN(t){return ac(t[0])?t[0].outlets:{[pe]:t}}function yD(t,n,e){if(t??=new Ne([],{}),t.segments.length===0&&t.hasChildren())return ic(t,n,e);let i=CN(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ne(t.segments.slice(0,i.pathIndex),{});return o.children[pe]=new Ne(t.segments.slice(i.pathIndex),t.children),ic(o,0,r)}else return i.match&&r.length===0?new Ne(t.segments,{}):i.match&&!t.hasChildren()?Dv(t,n,e):i.match?ic(t,0,r):Dv(t,n,e)}function ic(t,n,e){if(e.length===0)return new Ne(t.segments,{});{let i=xN(e),r={};if(Object.keys(i).some(o=>o!==pe)&&t.children[pe]&&t.numberOfChildren===1&&t.children[pe].segments.length===0){let o=ic(t.children[pe],n,e);return new Ne(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=yD(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ne(t.segments,r)}}function CN(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(ac(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!tD(c,l,a))return o;i+=2}else{if(!tD(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Dv(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(ac(o)){let c=wN(o.outlets);return new Ne(i,c)}if(r===0&&wu(e[0])){let c=t.segments[n];i.push(new cr(c.path,eD(e[0]))),r++;continue}let a=ac(o)?o.outlets[pe]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&wu(s)?(i.push(new cr(a,eD(s))),r+=2):(i.push(new cr(a,{})),r++)}return new Ne(i,{})}function wN(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Dv(new Ne([],{}),0,i))}),n}function eD(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function tD(t,n,e){return t==e.path&&ii(n,e.parameters)}var rc="imperative",xt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(xt||{}),ln=class{id;url;constructor(n,e){this.id=n,this.url=e}},so=class extends ln{type=xt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ri=class extends ln{urlAfterRedirects;type=xt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Lt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Lt||{}),sc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(sc||{}),xn=class extends ln{reason;code;type=xt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function xD(t){return t instanceof xn&&(t.code===Lt.Redirect||t.code===Lt.SupersededByNewNavigation)}var Fi=class extends ln{reason;code;type=xt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},co=class extends ln{error;target;type=xt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},cc=class extends ln{urlAfterRedirects;state;type=xt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Eu=class extends ln{urlAfterRedirects;state;type=xt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Su=class extends ln{urlAfterRedirects;state;shouldActivate;type=xt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Iu=class extends ln{urlAfterRedirects;state;type=xt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mu=class extends ln{urlAfterRedirects;state;type=xt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Tu=class{route;type=xt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ku=class{route;type=xt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Au=class{snapshot;type=xt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ru=class{snapshot;type=xt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ou=class{snapshot;type=xt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nu=class{snapshot;type=xt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var la=class{},lc=class{},da=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function DN(t){return!(t instanceof la)&&!(t instanceof da)&&!(t instanceof lc)}var Pu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ha(this.rootInjector)}},ha=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Pu(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(G(Oe))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fu=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Ev(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Ev(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Sv(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Sv(n,this._root).map(e=>e.value)}};function Ev(t,n){if(t===n.value)return n;for(let e of n.children){let i=Ev(t,e);if(i)return i}return null}function Sv(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Sv(t,e);if(i.length)return i.unshift(n),i}return[]}var sn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function aa(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var dc=class extends Fu{snapshot;constructor(n,e){super(n),this.snapshot=e,Pv(this,n)}toString(){return this.snapshot.toString()}};function CD(t,n){let e=EN(t,n),i=new ut([new cr("",{})]),r=new ut({}),o=new ut({}),a=new ut({}),s=new ut(""),c=new kt(i,r,a,s,o,pe,t,e.root);return c.snapshot=e.root,new dc(new sn(c,[]),e)}function EN(t,n){let e={},i={},r={},a=new ua([],e,r,"",i,pe,t,null,{},n);return new uc("",new sn(a,[]))}var kt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(J(l=>l[pc]))??K(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(J(n=>ao(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(J(n=>ao(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Nv(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&DD(r)&&(i.resolve[pc]=r.title),i}var ua=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[pc]}constructor(n,e,i,r,o,a,s,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ao(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ao(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},uc=class extends Fu{url;constructor(n,e){super(e),this.url=n,Pv(this,e)}toString(){return wD(this._root)}};function Pv(t,n){n.value._routerState=t,n.children.forEach(e=>Pv(t,e))}function wD(t){let n=t.children.length>0?` { ${t.children.map(wD).join(", ")} } `:"";return`${t.value}${n}`}function bv(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ii(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ii(n.params,e.params)||t.paramsSubject.next(e.params),J1(n.url,e.url)||t.urlSubject.next(e.url),ii(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Iv(t,n){let e=ii(t.params,n.params)&&rN(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Iv(t.parent,n.parent))}function DD(t){return typeof t.title=="string"||t.title===null}var ED=new D(""),hc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=pe;activateEvents=new q;deactivateEvents=new q;attachEvents=new q;detachEvents=new q;routerOutletData=fe();parentContexts=u(ha);location=u(Mt);changeDetector=u(et);inputBinder=u(ju,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Mv(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ce]})}return t})(),Mv=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===kt?this.route:n===ha?this.childContexts:n===ED?this.outletData:this.parent.get(n,e)}},ju=new D("");var Fv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&E(0,"router-outlet")},dependencies:[hc],encapsulation:2})}return t})();function Lv(t){let n=t.children&&t.children.map(Lv),e=n?W(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==pe&&(e.component=Fv),e}function SN(t,n,e){let i=mc(t,n._root,e?e._root:void 0);return new dc(i,n)}function mc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=IN(t,n,e);return new sn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>mc(t,s)),a}}let i=MN(n.value),r=n.children.map(o=>mc(t,o));return new sn(i,r)}}function IN(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return mc(t,i,r);return mc(t,i)})}function MN(t){return new kt(new ut(t.url),new ut(t.params),new ut(t.queryParams),new ut(t.fragment),new ut(t.data),t.outlet,t.component,t)}var ma=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},SD="ngNavigationCancelingError";function Lu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=dr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=ID(!1,Lt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function ID(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[SD]=!0,e.cancellationCode=n,e}function TN(t){return MD(t)&&dr(t.url)}function MD(t){return!!t&&t[SD]}var Tv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),bv(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=aa(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=aa(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=aa(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=aa(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Nu(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Ru(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(bv(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),bv(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Bu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ca=class{component;route;constructor(n,e){this.component=n,this.route=e}};function kN(t,n,e){let i=t._root,r=n?n._root:null;return nc(i,r,e,[i.value])}function AN(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ga(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Sp(t)?t:n.get(t):i}function nc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=aa(n);return t.children.forEach(a=>{RN(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>oc(s,e.getContext(a),r)),r}function RN(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=ON(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Bu(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?nc(t,n,s?s.children:null,i,r):nc(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ca(s.outlet.component,a))}else a&&oc(n,s,r),r.canActivateChecks.push(new Bu(i)),o.component?nc(t,null,s?s.children:null,i,r):nc(t,null,e,i,r);return r}function ON(t,n,e){if(typeof e=="function")return st(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!oo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!oo(t.url,n.url)||!ii(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Iv(t,n)||!ii(t.queryParams,n.queryParams);default:return!Iv(t,n)}}function oc(t,n,e){let i=aa(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?oc(a,n.children.getContext(o),e):oc(a,null,e):oc(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ca(n.outlet.component,r)):e.canDeactivateChecks.push(new ca(null,r)):e.canDeactivateChecks.push(new ca(null,r))}function gc(t){return typeof t=="function"}function NN(t){return typeof t=="boolean"}function PN(t){return t&&gc(t.canLoad)}function FN(t){return t&&gc(t.canActivate)}function LN(t){return t&&gc(t.canActivateChild)}function BN(t){return t&&gc(t.canDeactivate)}function VN(t){return t&&gc(t.canMatch)}function TD(t){return t instanceof Ar||t?.name==="EmptyError"}var bu=Symbol("INITIAL_VALUE");function fa(){return ft(t=>rs(t.map(n=>n.pipe(mt(1),wt(bu)))).pipe(J(n=>{for(let e of n)if(e!==!0){if(e===bu)return bu;if(e===!1||jN(e))return e}return!0}),Te(n=>n!==bu),mt(1)))}function jN(t){return dr(t)||t instanceof ma}function kD(t){return t.aborted?K(void 0).pipe(mt(1)):new ie(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function AD(t){return Ve(kD(t))}function UN(t){return Ct(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?K(W(_({},n),{guardsResult:!0})):HN(o,e,i).pipe(Ct(a=>a&&NN(a)?zN(e,r,t):K(a)),J(a=>W(_({},n),{guardsResult:a})))})}function HN(t,n,e){return Ze(t).pipe(Ct(i=>ZN(i.component,i.route,e,n)),hi(i=>i!==!0,!0))}function zN(t,n,e){return Ze(n).pipe(ko(i=>qn(GN(i.route.parent,e),$N(i.route,e),qN(t,i.path),WN(t,i.route))),hi(i=>i!==!0,!0))}function $N(t,n){return t!==null&&n&&n(new Ou(t)),K(!0)}function GN(t,n){return t!==null&&n&&n(new Au(t)),K(!0)}function WN(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return K(!0);let i=e.map(r=>Rr(()=>{let o=n._environmentInjector,a=ga(r,o),s=FN(a)?a.canActivate(n,t):st(o,()=>a(n,t));return lo(s).pipe(hi())}));return K(i).pipe(fa())}function qN(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>AN(o)).filter(o=>o!==null).map(o=>Rr(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=ga(s,c),d=LN(l)?l.canActivateChild(e,t):st(c,()=>l(e,t));return lo(d).pipe(hi())});return K(a).pipe(fa())}));return K(r).pipe(fa())}function ZN(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return K(!0);let o=r.map(a=>{let s=n._environmentInjector,c=ga(a,s),l=BN(c)?c.canDeactivate(t,n,e,i):st(s,()=>c(t,n,e,i));return lo(l).pipe(hi())});return K(o).pipe(fa())}function YN(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return K(!0);let a=o.map(s=>{let c=ga(s,t),l=PN(c)?c.canLoad(n,e):st(t,()=>c(n,e)),d=lo(l);return r?d.pipe(AD(r)):d});return K(a).pipe(fa(),RD(i))}function RD(t){return rp(pt(n=>{if(typeof n!="boolean")throw Lu(t,n)}),J(n=>n===!0))}function KN(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return K(!0);let s=a.map(c=>{let l=ga(c,t),d=VN(l)?l.canMatch(n,e,r):st(t,()=>l(n,e,r));return lo(d).pipe(AD(o))});return K(s).pipe(fa(),RD(i))}var Pi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},fc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function QN(t){throw new T(4e3,!1)}function XN(t){throw ID(!1,Lt.GuardRejected)}var kv=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[pe])throw QN(`${n.redirectTo}`);r=r.children[pe]}}async applyRedirectCommands(n,e,i,r,o){let a=await JN(e,r,o);if(a instanceof cn)throw new fc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new fc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new cn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new Ne(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function JN(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Cu(lo(st(e,()=>i(n))))}function eP(t,n){return t.providers&&!t._injector&&(t._injector=zs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Vn(t){return t.outlet||pe}function tP(t,n){let e=t.filter(i=>Vn(i)===n);return e.push(...t.filter(i=>Vn(i)!==n)),e}var Av={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function OD(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function nP(t,n,e,i,r,o,a){let s=ND(t,n,e);if(!s.matched)return K(s);let c=OD(o(s));return i=eP(n,i),KN(i,n,e,r,c,a).pipe(J(l=>l===!0?s:_({},Av)))}function ND(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},Av):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||rD)(e,t,n);if(!r)return _({},Av);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function nD(t,n,e,i,r){return e.length>0&&oP(t,e,i,r)?{segmentGroup:new Ne(n,rP(i,new Ne(e,t.children))),slicedSegments:[]}:e.length===0&&aP(t,e,i)?{segmentGroup:new Ne(t.segments,iP(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ne(t.segments,t.children),slicedSegments:e}}function iP(t,n,e,i){let r={};for(let o of e)if(Uu(t,n,o)&&!i[Vn(o)]){let a=new Ne([],{});r[Vn(o)]=a}return _(_({},i),r)}function rP(t,n){let e={};e[pe]=n;for(let i of t)if(i.path===""&&Vn(i)!==pe){let r=new Ne([],{});e[Vn(i)]=r}return e}function oP(t,n,e,i){return e.some(r=>!Uu(t,n,r)||!(Vn(r)!==pe)?!1:!(i!==void 0&&Vn(r)===i))}function aP(t,n,e){return e.some(i=>Uu(t,n,i))}function Uu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function sP(t,n,e){return n.length===0&&!t.children[e]}var Rv=class{};async function cP(t,n,e,i,r,o,a="emptyOnly",s){return new Ov(t,n,e,i,r,a,o,s).recognize()}var lP=31,Ov=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new kv(this.urlSerializer,this.urlTree)}noMatchError(n){return new T(4002,`'${n.segmentGroup}'`)}async recognize(){let n=nD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new sn(i,e),o=new uc("",r),a=gD(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new ua([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),pe,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,pe,e),rootSnapshot:e}}catch(i){if(i instanceof fc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Pi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof sn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],d=tP(e,c),m=await this.processSegmentGroup(n,d,l,c,r);a.push(...m)}let s=PD(a);return dP(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof Pi||TD(l))continue;throw l}if(sP(i,r,o))return new Rv;throw new Pi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(Vn(i)!==a&&(a===pe||!Uu(r,o,i)))throw new Pi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new Pi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:m,remainingSegments:p}=ND(e,r,o);if(!c)throw new Pi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>lP&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,OD(h),n),A=await this.applyRedirects.lineralizeSegments(r,y);return this.processSegment(n,i,e,A.concat(p),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new ua(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,mP(e),Vn(e),e.component??e._loadedComponent??null,e,fP(e),n),s=Nv(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=at=>this.createSnapshot(n,i,at.consumedSegments,at.parameters,a),c=await Cu(nP(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new Pi(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:p,remainingSegments:h}=c,y=this.createSnapshot(n,i,p,m,a),{segmentGroup:A,slicedSegments:k}=nD(e,p,h,l,o);if(k.length===0&&A.hasChildren()){let at=await this.processChildren(d,l,A,y);return new sn(y,at)}if(l.length===0&&k.length===0)return new sn(y,[]);let N=Vn(i)===o,Ie=await this.processSegment(d,l,A,k,N?pe:o,!0,y);return new sn(y,Ie instanceof sn?[Ie]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Cu(YN(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw XN(e)}return{routes:[],injector:n}}};function dP(t){t.sort((n,e)=>n.value.outlet===pe?-1:e.value.outlet===pe?1:n.value.outlet.localeCompare(e.value.outlet))}function uP(t){let n=t.value.routeConfig;return n&&n.path===""}function PD(t){let n=[],e=new Set;for(let i of t){if(!uP(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=PD(i.children);n.push(new sn(i.value,r))}return n.filter(i=>!e.has(i))}function mP(t){return t.data||{}}function fP(t){return t.resolve||{}}function pP(t,n,e,i,r,o,a){return Ct(async s=>{let{state:c,tree:l}=await cP(t,n,e,i,s.extractedUrl,r,o,a);return W(_({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function hP(t){return Ct(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return K(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of FD(s))o.add(c);let a=0;return Ze(o).pipe(ko(s=>r.has(s)?gP(s,e,t):(s.data=Nv(s,s.parent,t).resolve,K(void 0))),pt(()=>a++),Ol(1),Ct(s=>a===o.size?K(n):tt))})}function FD(t){let n=t.children.map(e=>FD(e)).flat();return[t,...n]}function gP(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!DD(i)&&(r[pc]=i.title),Rr(()=>(t.data=Nv(t,t.parent,e).resolve,vP(r,t,n).pipe(J(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function vP(t,n,e){let i=yv(t);if(i.length===0)return K({});let r={};return Ze(i).pipe(Ct(o=>bP(t[o],n,e).pipe(hi(),pt(a=>{if(a instanceof ma)throw Lu(new lr,a);r[o]=a}))),Ol(1),J(()=>r),Nr(o=>TD(o)?tt:ns(o)))}function bP(t,n,e){let i=n._environmentInjector,r=ga(t,i),o=r.resolve?r.resolve(n,e):st(i,()=>r(n,e));return lo(o)}function iD(t){return ft(n=>{let e=t(n);return e?Ze(e).pipe(J(()=>n)):K(n)})}var Bv=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===pe);return i}getResolvedTitleForRoute(e){return e.data[pc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(LD),providedIn:"root"})}return t})(),LD=(()=>{class t extends Bv{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(G(Yw))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),va=new D("",{factory:()=>({})}),vc=new D(""),BD=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(zg);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await aD(st(e,()=>i.loadComponent())),a=await UD(jD(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await VD(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function VD(t,n,e,i){let r=await aD(st(e,()=>t.loadChildren())),o=await UD(jD(r)),a;o instanceof Kd||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,d;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,d=a,c=s.get(vc,[],{optional:!0,self:!0}).flat()),{routes:c.map(Lv),injector:s,factory:d}}function _P(t){return t&&typeof t=="object"&&"default"in t}function jD(t){return _P(t)?t.default:t}async function UD(t){return t}var Hu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(yP),providedIn:"root"})}return t})(),yP=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),HD=new D("");var xP=()=>{},zD=new D(""),$D=(()=>{class t{currentNavigation=F(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=F(null);events=new O;transitionAbortWithErrorSubject=new O;configLoader=u(BD);environmentInjector=u(Oe);destroyRef=u(St);urlSerializer=u(pa);rootContexts=u(ha);location=u(ar);inputBindingEnabled=u(ju,{optional:!0})!==null;titleStrategy=u(Bv);options=u(va,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(Hu);createViewTransition=u(HD,{optional:!0});navigationErrorHandler=u(zD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>K(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Tu(r)),i=r=>this.events.next(new ku(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Z(()=>{this.transitions?.next(W(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ut(null),this.transitions.pipe(Te(i=>i!==null),ft(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return K(i).pipe(ft(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Lt.SupersededByNewNavigation),tt;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?W(_({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload")return this.events.next(new Fi(s.id,this.urlSerializer.serialize(s.rawUrl),"",sc.IgnoredSameUrlNavigation)),s.resolve(!1),tt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return K(s).pipe(ft(m=>(this.events.next(new so(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?tt:Promise.resolve(m))),pP(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),pt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=m.urlAfterRedirects,p)),this.events.next(new lc)}),ft(m=>Ze(i.routesRecognizeHandler.deferredHandle??K(void 0)).pipe(J(()=>m))),pt(()=>{let m=new cc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:p,source:h,restoredState:y,extras:A}=s,k=new so(m,this.urlSerializer.serialize(p),h,y);this.events.next(k);let N=CD(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=W(_({},s),{targetSnapshot:N,urlAfterRedirects:p,extras:W(_({},A),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Ie=>(Ie.finalUrl=p,Ie)),K(i)}else return this.events.next(new Fi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",sc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),tt}),J(s=>{let c=new Eu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=W(_({},s),{guards:kN(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),UN(s=>this.events.next(s)),ft(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Lu(this.urlSerializer,s.guardsResult);let c=new Su(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return tt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Lt.GuardRejected),tt;if(s.guards.canActivateChecks.length===0)return K(s);let l=new Iu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return tt;let d=!1;return K(s).pipe(hP(this.paramsInheritanceStrategy),pt({next:()=>{d=!0;let m=new Mu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",Lt.NoDataFromResolver)}}))}),iD(s=>{let c=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let p=d._environmentInjector;m.push(this.configLoader.loadComponent(p,d.routeConfig).then(h=>{d.component=h}))}for(let p of d.children)m.push(...c(p));return m},l=c(s.targetSnapshot.root);return l.length===0?K(s):Ze(Promise.all(l).then(()=>s))}),iD(()=>this.afterPreactivation()),ft(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?Ze(l).pipe(J(()=>i)):K(i)}),mt(1),ft(s=>{let c=SN(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=W(_({},s),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new la);let l=i.beforeActivateHandler.deferredHandle;return l?Ze(l.then(()=>s)):K(s)}),pt(s=>{new Tv(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=xP,c)),this.lastSuccessfulNavigation.set(Z(this.currentNavigation)),this.events.next(new ri(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ve(kD(o.signal).pipe(Te(()=>!r&&!i.targetRouterState),pt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Lt.Aborted)}))),pt({complete:()=>{r=!0}}),Ve(this.transitionAbortWithErrorSubject.pipe(pt(s=>{throw s}))),Pr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Lt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Nr(s=>{if(r=!0,this.destroyed)return i.resolve(!1),tt;if(MD(s))this.events.next(new xn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),TN(s)?this.events.next(new da(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new co(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=st(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof ma){let{message:d,cancellationCode:m}=Lu(this.urlSerializer,l);this.events.next(new xn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new da(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return tt}))}))}cancelNavigationTransition(e,i,r){let o=new xn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Z(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function CP(t){return t!==rc}var GD=new D("");var WD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(wP),providedIn:"root"})}return t})(),Vu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},wP=(()=>{class t extends Vu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zu=(()=>{class t{urlSerializer=u(pa);options=u(va,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(ar);urlHandlingStrategy=u(Hu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new cn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof cn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=CD(null,u(Oe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(DP),providedIn:"root"})}return t})(),DP=(()=>{class t extends zu{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof so?this.updateStateMemento():e instanceof Fi?this.commitTransition(i):e instanceof cc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof la?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof xn&&!xD(e)?this.restoreHistory(i):e instanceof co?this.restoreHistory(i,!0):e instanceof ri&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,l=_(_({},s),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=_(_({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vv(t,n){t.events.pipe(Te(e=>e instanceof ri||e instanceof xn||e instanceof co||e instanceof Fi),J(e=>e instanceof ri||e instanceof Fi?0:(e instanceof xn?e.code===Lt.Redirect||e.code===Lt.SupersededByNewNavigation:!1)?2:1),Te(e=>e!==2),mt(1)).subscribe(()=>{n()})}var ba=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Qd);stateManager=u(zu);options=u(va,{optional:!0})||{};pendingTasks=u(Ci);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u($D);urlSerializer=u(pa);location=u(ar);urlHandlingStrategy=u(Hu);injector=u(Oe);_events=new O;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(WD);injectorCleanup=u(GD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(vc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(ju,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ve;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Z(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof xn&&i.code!==Lt.Redirect&&i.code!==Lt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof ri)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof da){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||CP(r.source)},a);this.scheduleNavigation(s,rc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}DN(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),rc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=W(_({},o),{browserUrl:e})),r){let l=_({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,a,o).catch(l=>{this.disposed||this.injector.get(on)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Z(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Lv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let p=r?r.snapshot:this.routerState.snapshot.root;m=vD(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return bD(m,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=dr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,rc,null,i)}navigate(e,i={skipLocationChange:!1}){return EP(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(vi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},cD):i===!1?r=_({},xv):r=_(_({},xv),i),dr(e))return Qw(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Qw(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((m,p)=>{s=m,c=p});let d=this.pendingTasks.add();return Vv(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function EP(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new T(4008,!1)}var MP=(()=>{class t{router=u(ba);stateManager=u(zu);fragment=F("");queryParams=F({});path=F("");serializer=u(pa);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ri&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new cn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_a=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new ki("href"),{optional:!0});reactiveHref=ni(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Z(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Z(this._target)}_target=F(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Z(this._queryParams)}_queryParams=F(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Z(this._fragment)}_fragment=F(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Z(this._queryParamsHandling)}_queryParamsHandling=F(void 0);set state(e){this._state.set(e)}get state(){return Z(this._state)}_state=F(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Z(this._info)}_info=F(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Z(this._relativeTo)}_relativeTo=F(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Z(this._preserveFragment)}_preserveFragment=F(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Z(this._skipLocationChange)}_skipLocationChange=F(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Z(this._replaceUrl)}_replaceUrl=F(!1);isAnchorElement;onChanges=new O;applicationErrorHandler=u(on);options=u(va,{optional:!0});reactiveRouterState=u(MP);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=F(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(dr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=$(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:dr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Z(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(B(ba),B(kt),Fs("tabindex"),B(Le),B(V),B(ia))};static \u0275dir=P({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&Y("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xe("href",r.reactiveHref(),vg)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ne],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ne],replaceUrl:[2,"replaceUrl","replaceUrl",ne],routerLink:"routerLink"},features:[Ce]})}return t})();var TP=new D("");function jv(t,...n){return Ki([{provide:vc,multi:!0,useValue:t},[],{provide:kt,useFactory:kP},{provide:Xd,multi:!0,useFactory:AP},n.map(e=>e.\u0275providers)])}function kP(){return u(ba).routerState.root}function AP(){let t=u(oe);return n=>{let e=t.get(an);if(n!==e.components[0])return;let i=t.get(ba),r=t.get(RP);t.get(OP)===1&&i.initialNavigation(),t.get(NP,null,{optional:!0})?.setUpPreloading(),t.get(TP,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var RP=new D("",{factory:()=>new O}),OP=new D("",{factory:()=>1});var NP=new D("");var ya=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=F(!0);isLoading=this.loading.asReadonly();error=F("");errorMessage=this.error.asReadonly();teams=F([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(G(Ni))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var FP=new D("cdk-dir-doc",{providedIn:"root",factory:()=>u(se)}),LP=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ZD(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?LP.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Jt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=F("ltr");change=new q;constructor(){let e=u(FP,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ZD(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ue=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var BP=["*"];var VP=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],jP=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],UP=new D("MAT_CARD_CONFIG"),YD=(()=>{class t{appearance;constructor(){let e=u(UP,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:BP,decls:1,vars:0,template:function(i,r){i&1&&(Se(),U(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),KD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var QD=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),XD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:jP,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Se(VP),U(0),me(1,"div",0),U(2,1),ge(),U(3,2))},encapsulation:2,changeDetection:0})}return t})();function bc(t){return t.buttons===0||t.detail===0}function _c(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Uv;function JD(){if(Uv==null){let t=typeof document<"u"?document.head:null;Uv=!!(t&&(t.createShadowRoot||t.attachShadow))}return Uv}function Hv(t){if(JD()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function $u(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Bt(t){return t.composedPath?t.composedPath()[0]:t.target}var zv;try{zv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zv=!1}var Me=(()=>{class t{_platformId=u(eo);isBrowser=this._platformId?Rw(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yc;function eE(){if(yc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>yc=!0}))}finally{yc=yc||!1}return yc}function xa(t){return eE()?t:!!t.capture}function oi(t,n=0){return tE(t)?Number(t):arguments.length===2?n:0}function tE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Yt(t){return t instanceof V?t.nativeElement:t}var nE=new D("cdk-input-modality-detector-options"),iE={ignoreKeys:[18,17,224,91,16]},rE=650,$v={passive:!0,capture:!0},oE=(()=>{class t{_platform=u(Me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ut(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Bt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<rE||(this._modality.next(bc(e)?"keyboard":"mouse"),this._mostRecentTarget=Bt(e))};_onTouchstart=e=>{if(_c(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Bt(e)};constructor(){let e=u(L),i=u(se),r=u(nE,{optional:!0});if(this._options=_(_({},iE),r),this.modalityDetected=this._modality.pipe(Fr(1)),this.modalityChanged=this.modalityDetected.pipe(Rl()),this._platform.isBrowser){let o=u(ht).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,$v),o.listen(i,"mousedown",this._onMousedown,$v),o.listen(i,"touchstart",this._onTouchstart,$v)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(xc||{}),aE=new D("cdk-focus-monitor-default-options"),Gu=xa({passive:!0,capture:!0}),uo=(()=>{class t{_ngZone=u(L);_platform=u(Me);_inputModalityDetector=u(oE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(se);_stopInputModalityDetector=new O;constructor(){let e=u(aE,{optional:!0});this._detectionMode=e?.detectionMode||xc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Bt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Yt(e);if(!this._platform.isBrowser||r.nodeType!==1)return K();let o=Hv(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new O,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Yt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Yt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===xc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===xc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?rE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Bt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Gu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Gu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ve(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Gu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Gu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gv=(()=>{class t{_elementRef=u(V);_focusMonitor=u(uo);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new q;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Wu=new WeakMap,gt=(()=>{class t{_appRef;_injector=u(oe);_environmentInjector=u(Oe);load(e){let i=this._appRef=this._appRef||this._injector.get(an),r=Wu.get(i);r||(r={loaders:new Set,refs:[]},Wu.set(i,r),i.onDestroy(()=>{Wu.get(i)?.refs.forEach(o=>o.destroy()),Wu.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(cu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),qu;function HP(){if(qu===void 0&&(qu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(qu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return qu}function Ca(t){return HP()?.createHTML(t)||t}function Li(t){return Array.isArray(t)?t:[t]}var sE=new Set,mo,Yu=(()=>{class t{_platform=u(Me);_nonce=u(to,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):$P}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&zP(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zP(t,n){if(!sE.has(t))try{mo||(mo=document.createElement("style"),n&&mo.setAttribute("nonce",n),mo.setAttribute("type","text/css"),document.head.appendChild(mo)),mo.sheet&&(mo.sheet.insertRule(`@media ${t} {body{ }}`,0),sE.add(t))}catch(e){console.error(e)}}function $P(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Cc=(()=>{class t{_mediaMatcher=u(Yu);_zone=u(L);_queries=new Map;_destroySubject=new O;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return cE(Li(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=cE(Li(e)).map(a=>this._registerQuery(a).observable),o=rs(r);return o=qn(o.pipe(mt(1)),o.pipe(Fr(1),In(0))),o.pipe(J(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ie(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(wt(i),J(({matches:a})=>({query:e,matches:a})),Ve(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cE(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function GP(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var lE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),WP=(()=>{class t{_mutationObserverFactory=u(lE);_observedElements=new Map;_ngZone=u(L);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Yt(e);return new ie(r=>{let a=this._observeElement(i).pipe(J(s=>s.filter(c=>!GP(c))),Te(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new O,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ku=(()=>{class t{_contentObserver=u(WP);_elementRef=u(V);event=new q;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=oi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(In(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ne],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Qu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({providers:[lE]})}return t})();var Ju=(()=>{class t{_platform=u(Me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return ZP(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=qP(nF(e));if(i&&(dE(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=dE(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!eF(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return tF(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qP(t){try{return t.frameElement}catch{return null}}function ZP(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function YP(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function KP(t){return XP(t)&&t.type=="hidden"}function QP(t){return JP(t)&&t.hasAttribute("href")}function XP(t){return t.nodeName.toLowerCase()=="input"}function JP(t){return t.nodeName.toLowerCase()=="a"}function uE(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function dE(t){if(!uE(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function eF(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function tF(t){return KP(t)?!1:YP(t)||QP(t)||t.hasAttribute("contenteditable")||uE(t)}function nF(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Xu=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?bt(n,{injector:this._injector}):setTimeout(n)}},Wv=(()=>{class t{_checker=u(Ju);_ngZone=u(L);_document=u(se);_injector=u(oe);constructor(){u(gt).load(Zu)}create(e,i=!1){return new Xu(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var iF=200,em=class{_letterKeyStream=new O;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new O;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:iF;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(pt(e=>this._pressedLetters.push(e)),In(n),Te(()=>this._pressedLetters.length>0),J(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Cn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var wa=class{_items;_activeItemIndex=F(-1);_activeItem=F(null);_wrap=!1;_typeaheadSubscription=ve.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof On?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Ii(n)&&(this._effectRef=qt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new O;change=new O;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new em(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Cn(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Ii(this._items)?this._items():this._items instanceof On?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var wc=class extends wa{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Dc=class extends wa{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Zv={},_t=class t{_appId=u(ir);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Zv.hasOwnProperty(n)||(Zv[n]=0),`${n}${e?t._infix+"-":""}${Zv[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var pE=" ";function Yv(t,n,e){let i=hE(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(pE)))}function tm(t,n,e){let i=hE(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(pE)):t.removeAttribute(n)}function hE(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var jn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(jn||{}),nm,fo;function im(){if(fo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return fo=!1,fo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)fo=!0;else{let t=Element.prototype.scrollTo;t?fo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):fo=!1}}return fo}function Da(){if(typeof document!="object"||!document)return jn.NORMAL;if(nm==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),nm=jn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,nm=t.scrollLeft===0?jn.NEGATED:jn.INVERTED),t.remove()}return nm}function Kv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ea,gE=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Qv(){if(Ea)return Ea;if(typeof document!="object"||!document)return Ea=new Set(gE),Ea;let t=document.createElement("input");return Ea=new Set(gE.filter(n=>(t.setAttribute("type",n),t.type===n))),Ea}var vE={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var rF=new D("MATERIAL_ANIMATIONS"),bE=null;function oF(){return u(rF,{optional:!0})?.animationsDisabled||u(Ls,{optional:!0})==="NoopAnimations"?"di-disabled":(bE??=u(Yu).matchMedia("(prefers-reduced-motion)").matches,bE?"reduced-motion":"enabled")}function nt(){return oF()!=="enabled"}function lt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ot(t){return t!=null&&`${t}`!="false"}var wn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(wn||{}),Xv=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=wn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},_E=xa({passive:!0,capture:!0}),Jv=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,_E)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,_E)))}_delegateEventHandler=n=>{let e=Bt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Ec={enterDuration:225,exitDuration:150},aF=800,yE=xa({passive:!0,capture:!0}),xE=["mousedown","touchstart"],CE=["mouseup","mouseleave","touchend","touchcancel"],sF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),po=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Jv;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Yt(i)),o&&o.get(gt).load(sF)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},Ec),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||cF(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),p=m.transitionProperty,h=m.transitionDuration,y=p==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,A=new Xv(this,d,i,y);d.style.transform="scale3d(1, 1, 1)",A.state=wn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=A);let k=null;return!y&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let N=()=>{k&&(k.fallbackTimer=null),clearTimeout(at),this._finishRippleTransition(A)},Ie=()=>this._destroyRipple(A),at=setTimeout(Ie,l+100);d.addEventListener("transitionend",N),d.addEventListener("transitioncancel",Ie),k={onTransitionEnd:N,onTransitionCancel:Ie,fallbackTimer:at}}),this._activeRipples.set(A,k),(y||!l)&&this._finishRippleTransition(A),A}fadeOutRipple(n){if(n.state===wn.FADING_OUT||n.state===wn.HIDDEN)return;let e=n.element,i=_(_({},Ec),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=wn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Yt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,xE.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{CE.forEach(e=>{this._triggerElement.addEventListener(e,this,yE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===wn.FADING_IN?this._startFadeOutTransition(n):n.state===wn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=wn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=wn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=bc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+aF;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!_c(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===wn.VISIBLE||n.config.terminateOnPointerUp&&n.state===wn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(xE.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(CE.forEach(e=>n.removeEventListener(e,this,yE)),this._pointerUpEventsRegistered=!1))}};function cF(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Sa=new D("mat-ripple-global-options"),ho=(()=>{class t{_elementRef=u(V);_animationsDisabled=nt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(L),i=u(Me),r=u(Sa,{optional:!0}),o=u(oe);this._globalOptions=r||{},this._rippleRenderer=new po(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var lF={capture:!0},dF=["focus","mousedown","mouseenter","touchstart"],eb="mat-ripple-loader-uninitialized",tb="mat-ripple-loader-class-name",wE="mat-ripple-loader-centered",rm="mat-ripple-loader-disabled",DE=(()=>{class t{_document=u(se);_animationsDisabled=nt();_globalRippleOptions=u(Sa,{optional:!0});_platform=u(Me);_ngZone=u(L);_injector=u(oe);_eventCleanups;_hosts=new Map;constructor(){let e=u(ht).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>dF.map(i=>e.listen(this._document,i,this._onInteraction,lF)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(eb,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(tb))&&e.setAttribute(tb,i.className||""),i.centered&&e.setAttribute(wE,""),i.disabled&&e.setAttribute(rm,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(rm,""):e.removeAttribute(rm)}_onInteraction=e=>{let i=Bt(e);if(i instanceof HTMLElement){let r=i.closest(`[${eb}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(tb)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ec.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ec.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(rm),rippleConfig:{centered:e.hasAttribute(wE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new po(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(eb)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ai=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var uF=["mat-icon-button",""],mF=["*"],fF=new D("MAT_BUTTON_CONFIG");function EE(t){return t==null?void 0:rr(t)}var om=(()=>{class t{_elementRef=u(V);_ngZone=u(L);_animationsDisabled=nt();_config=u(fF,{optional:!0});_focusMonitor=u(uo);_cleanupClick;_renderer=u(Le);_rippleLoader=u(DE);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(gt).load(ai);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),yt(r.color?"mat-"+r.color:""),j("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ne],disabled:[2,"disabled","disabled",ne],ariaDisabled:[2,"aria-disabled","ariaDisabled",ne],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ne],tabIndex:[2,"tabIndex","tabIndex",EE],_tabindex:[2,"tabindex","_tabindex",EE]}})}return t})(),Sc=(()=>{class t extends om{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ke],attrs:uF,ngContentSelectors:mF,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(),Ee(0,"span",0),U(1),Ee(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ia=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ue]})}return t})();var pF=["matButton",""],IE=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ME=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],hF=["mat-fab",""];var SE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ic=(()=>{class t extends om{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=gF(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?SE.get(this._appearance):null,o=SE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ke],attrs:pF,ngContentSelectors:ME,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(IE),Ee(0,"span",0),U(1),me(2,"span",1),U(3,1),ge(),U(4,2),Ee(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function gF(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var TE=Ic,vF=new D("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>nb}),nb={color:"accent"},kE=(()=>{class t extends om{_options=u(vF,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||nb,this.color=this._options.color||nb.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",ne]},exportAs:["matButton","matAnchor"],features:[ke],attrs:hF,ngContentSelectors:ME,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(IE),Ee(0,"span",0),U(1),me(2,"span",1),U(3,1),ge(),U(4,2),Ee(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return t})();var AE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ia,Ue]})}return t})();var _F=t=>[t,"map"],yF=t=>[t,"convoy"],xF=t=>[t,"shop"],am=class t{team=fe.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(v(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),b(3),g()(),v(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),E(7,"img",3),b(8," Map "),g()(),v(9,"button",4)(10,"span",2)(11,"div",5),b(12,"?"),g(),b(13," Convoy "),g()(),v(14,"button",4)(15,"span",2),E(16,"img",6),b(17," Shop "),g()()()()),e&2&&(f(3),we(" ",i.team().teamName," "),f(2),M("routerLink",Xe(6,_F,i.GetTeamNameWithoutSpaces())),f(4),M("disabled",!i.team().showConvoyLink)("routerLink",Xe(8,yF,i.GetTeamNameWithoutSpaces())),f(5),M("disabled",!i.team().showShopLink)("routerLink",Xe(10,xF,i.GetTeamNameWithoutSpaces())))},dependencies:[YD,XD,KD,QD,Ic,_a],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var RE="(max-width: 900px)",si=class t{breakpointObserver=u(Cc);isSmallWidth=F(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([RE]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[RE])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var sm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"div",1),Ee(2,"div",2),me(3,"div",3),b(4,"Loading..."),ge()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var ci=class t{DARK_MODE_CLASS="dark-mode";document=u(se);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=F(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=$(()=>this.themeMode()==="dark");constructor(){qt(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var ib=t=>({width:t});function CF(t,n){t&1&&E(0,"loading-icon")}function wF(t,n){if(t&1&&(v(0,"div",7)(1,"p",17),b(2),g()()),t&2){let e=x();f(2),we(" ",e.teamListService.errorMessage()," ")}}function DF(t,n){if(t&1&&E(0,"team-listing",14),t&2){let e=n.$implicit;M("team",e)}}function EF(t,n){t&1&&(v(0,"div",7)(1,"p",17),b(2," There are no teams available. "),g()())}function SF(t,n){if(t&1&&de(0,DF,1,1,"team-listing",14,$e,!1,EF,3,0,"div",7),t&2){let e=x();ue(e.teamListService.teamsList())}}var cm=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(si),this.themeService=u(ci),this.teamListService=u(ya),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(B(si),B(ci),B(ya))};static \u0275cmp=I({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(E(0,"div",0)(1,"div",1),v(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),b(6),g(),v(7,"button",5),Y("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),b(8,"Toggle Theme"),g()(),v(9,"div",6),C(10,CF,1,0,"loading-icon")(11,wF,3,1,"div",7)(12,SF,3,1),g()(),v(13,"div",3)(14,"div",8)(15,"h1",9),b(16,"Information"),g(),v(17,"p"),b(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),g(),v(19,"h2",9),b(20,"Resources"),g(),v(21,"ul")(22,"li")(23,"a",10),b(24,"Reddit Emblem Maps Documentation"),g()(),v(25,"li")(26,"a",11),b(27,"API Github Repository"),g()(),v(28,"li")(29,"a",12),b(30,"Webapp Github Repository"),g()()(),v(31,"h2",9),b(32,"Example"),g(),v(33,"p"),b(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),g(),v(35,"ul")(36,"li")(37,"a",13),b(38,"Team Example Google Spreadsheet"),g()()(),E(39,"team-listing",14),g(),v(40,"div",8)(41,"h2",9),b(42,"Credits"),g(),v(43,"ul")(44,"li")(45,"a",15),b(46,'Website background texture "Az Subtle" by Anli'),g()(),v(47,"li")(48,"a",16),b(49,`"Mac's Minecraft" pixel font`),g()()()()()()),e&2&&(f(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),f(),M("ngClass",i.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),f(2),we(" This will be the logo! Screen width is <= 900px: ",i.breakpointService.isScreenSmallWidth()," "),f(3),M("ngStyle",Xe(9,ib,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),f(),w(i.teamListService.isLoading()?10:i.teamListService.errorMessage().length>0?11:12),f(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),f(),M("ngStyle",Xe(11,ib,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),f(25),M("team",i.teamExample),f(),M("ngStyle",Xe(13,ib,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[am,Ai,Xg,sm],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var IF=20,Ma=(()=>{class t{_ngZone=u(L);_platform=u(Me);_renderer=u(ht).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new O;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=IF){return this._platform.isBrowser?new ie(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Al(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):K()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Te(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Yt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ur=(()=>{class t{elementRef=u(V);scrollDispatcher=u(Ma);ngZone=u(L);dir=u(Jt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new O;_renderer=u(Le);_cleanupScroll;_elementScrolled=new O;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Da()!=jn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Da()==jn.INVERTED?e.left=e.right:Da()==jn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;im()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&Da()==jn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Da()==jn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),MF=20,Un=(()=>{class t{_platform=u(Me);_listeners;_viewportSize=null;_change=new O;_document=u(se);constructor(){let e=u(L),i=u(ht).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=MF){return e>0?this._change.pipe(Al(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})(),rb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ue,Mc,Ue,Mc]})}return t})();var mm=["*"],TF=["content"],kF=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],AF=["mat-drawer","mat-drawer-content","*"];function RF(t,n){if(t&1){let e=bn();v(0,"div",1),Y("click",function(){Ot(e);let r=x();return Nt(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function OF(t,n){t&1&&(v(0,"mat-drawer-content"),U(1,2),g())}var NF=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],PF=["mat-sidenav","mat-sidenav-content","*"];function FF(t,n){if(t&1){let e=bn();v(0,"div",1),Y("click",function(){Ot(e);let r=x();return Nt(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function LF(t,n){t&1&&(v(0,"mat-sidenav-content"),U(1,2),g())}var BF=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var VF=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),sb=new D("MAT_DRAWER_CONTAINER"),lm=(()=>{class t extends ur{_platform=u(Me);_changeDetectorRef=u(et);_container=u(ab);constructor(){let e=u(V),i=u(Ma),r=u(L);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(rt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ae([{provide:ur,useExisting:t}]),ke],ngContentSelectors:mm,decls:1,vars:0,template:function(i,r){i&1&&(Se(),U(0))},encapsulation:2,changeDetection:0})}return t})(),ob=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(Wv);_focusMonitor=u(uo);_platform=u(Me);_ngZone=u(L);_renderer=u(Le);_interactivityChecker=u(Ju);_doc=u(se);_container=u(sb,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ot(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ot(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ot(e))}_opened=F(!1);_openedVia=null;_animationStarted=new O;_animationEnd=new O;openedChange=new q(!0);_openedStream=this.openedChange.pipe(Te(e=>e),J(()=>{}));openedStart=this._animationStarted.pipe(Te(()=>this.opened),Ao(void 0));_closedStream=this.openedChange.pipe(Te(e=>!e),J(()=>{}));closedStart=this._animationStarted.pipe(Te(()=>!this.opened),Ao(void 0));_destroyed=new O;onPositionChanged=new q;_content;_modeChanged=new O;_injector=u(oe);_changeDetectorRef=u(et);constructor(){this.openedChange.pipe(Ve(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Cn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":bt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(mt(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Qe(TF,5),i&2){let o;H(o=z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(xe("align",null)("tabIndex",r.mode!=="side"?"-1":null),rt("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:mm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Se(),v(0,"div",1,0),U(2),g())},dependencies:[ur],encapsulation:2,changeDetection:0})}return t})(),ab=(()=>{class t{_dir=u(Jt,{optional:!0});_element=u(V);_ngZone=u(L);_changeDetectorRef=u(et);_animationDisabled=nt();_transitionsEnabled=!1;_allDrawers;_drawers=new On;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ot(e)}_autosize=u(VF);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ot(e)}_backdropOverride=null;backdropClick=new q;_start=null;_end=null;_left=null;_right=null;_destroyed=new O;_doCheckSubject=new O;_contentMargins={left:null,right:null};_contentMarginChanges=new O;get scrollable(){return this._userContent||this._content}_injector=u(oe);constructor(){let e=u(Me),i=u(Un);this._dir?.change.pipe(Ve(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Ve(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(wt(this._allDrawers),Ve(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(wt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(In(10),Ve(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Ve(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Ve(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Ve(this._drawers.changes)).subscribe(()=>{bt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Ve(Ut(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Tt(o,lm,5)(o,ob,5),i&2){let a;H(a=z())&&(r._content=a.first),H(a=z())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Qe(lm,5),i&2){let o;H(o=z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ae([{provide:sb,useExisting:t}])],ngContentSelectors:AF,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Se(kF),C(0,RF,1,2,"div",0),U(1),U(2,1),C(3,OF,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),f(3),w(r._content?-1:3))},dependencies:[lm],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return t})(),dm=(()=>{class t extends lm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ae([{provide:ur,useExisting:t}]),ke],ngContentSelectors:mm,decls:1,vars:0,template:function(i,r){i&1&&(Se(),U(0))},encapsulation:2,changeDetection:0})}return t})(),cb=(()=>{class t extends ob{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ot(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=oi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=oi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(xe("tabIndex",r.mode!=="side"?"-1":null)("align",null),rt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ae([{provide:ob,useExisting:t}]),ke],ngContentSelectors:mm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Se(),v(0,"div",1,0),U(2),g())},dependencies:[ur],encapsulation:2,changeDetection:0})}return t})(),PE=(()=>{class t extends ab{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Tt(o,dm,5)(o,cb,5),i&2){let a;H(a=z())&&(r._content=a.first),H(a=z())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ae([{provide:sb,useExisting:t},{provide:ab,useExisting:t}]),ke],ngContentSelectors:PF,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Se(NF),C(0,FF,1,2,"div",0),U(1),U(2,1),C(3,LF,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),f(3),w(r._content?-1:3))},dependencies:[dm],styles:[BF],encapsulation:2,changeDetection:0})}return t})();var Tc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},lb=class extends Tc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Bi=class extends Tc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},db=class extends Tc{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},fm=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof lb)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Bi)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof db)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},pm=class extends fm{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(ti,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||oe.NULL,o=r.get(Oe,i.injector);e=cu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},FE=(()=>{class t extends Bi{constructor(){let e=u(Pt),i=u(Mt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ke]})}return t})(),ub=(()=>{class t extends fm{_moduleRef=u(ti,{optional:!0});_document=u(se);_viewContainerRef=u(Mt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new q;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ke]})}return t})(),LE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var mb=class{_box;_destroyed=new O;_resizeSubject=new O;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ie(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Te(e=>e.some(i=>i.target===n)),Pl({bufferSize:1,refCount:!0}),Ve(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},hm=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(L);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new mb(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bb=["*"];function jF(t,n){t&1&&U(0)}var UF=["tabListContainer"],HF=["tabList"],zF=["tabListInner"],$F=["nextPaginator"],GF=["previousPaginator"],WF=["content"];function qF(t,n){}var ZF=["tabBodyWrapper"],YF=["tabHeader"];function KF(t,n){}function QF(t,n){if(t&1&&Ft(0,KF,0,0,"ng-template",12),t&2){let e=x().$implicit;M("cdkPortalOutlet",e.templateLabel)}}function XF(t,n){if(t&1&&b(0),t&2){let e=x().$implicit;re(e.textLabel)}}function JF(t,n){if(t&1){let e=bn();v(0,"div",7,2),Y("click",function(){let r=Ot(e),o=r.$implicit,a=r.$index,s=x(),c=Xt(1);return Nt(s._handleClick(o,c,a))})("cdkFocusChange",function(r){let o=Ot(e).$index,a=x();return Nt(a._tabFocusChanged(r,o))}),E(2,"span",8)(3,"div",9),v(4,"span",10)(5,"span",11),C(6,QF,1,1,null,12)(7,XF,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=Xt(1),o=x();yt(e.labelClass),j("mdc-tab--active",o.selectedIndex===i),M("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),xe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),f(3),M("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),f(3),w(e.templateLabel?6:7)}}function eL(t,n){t&1&&U(0)}function tL(t,n){if(t&1){let e=bn();v(0,"mat-tab-body",13),Y("_onCentered",function(){Ot(e);let r=x();return Nt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Ot(e);let o=x();return Nt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Ot(e);let o=x();return Nt(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=x();yt(e.bodyClass),M("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),xe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var nL=new D("MatTabContent"),iL=(()=>{class t{template=u(Pt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabContent",""]],features:[Ae([{provide:nL,useExisting:t}])]})}return t})(),rL=new D("MatTabLabel"),UE=new D("MAT_TAB"),_b=(()=>{class t extends FE{_closestTab=u(UE,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ae([{provide:rL,useExisting:t}]),ke]})}return t})(),HE=new D("MAT_TAB_GROUP"),yb=(()=>{class t{_viewContainerRef=u(Mt);_closestTabGroup=u(HE,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new O;position=null;origin=null;isActive=!1;constructor(){u(gt).load(ai)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Bi(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Tt(o,_b,5)(o,iL,7,Pt),i&2){let a;H(a=z())&&(r.templateLabel=a.first),H(a=z())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Qe(Pt,7),i&2){let o;H(o=z())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&xe("id",null)},inputs:{disabled:[2,"disabled","disabled",ne],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ae([{provide:UE,useExisting:t}]),Ce],ngContentSelectors:bb,decls:1,vars:0,template:function(i,r){i&1&&(Se(),na(0,jF,1,0,"ng-template"))},encapsulation:2})}return t})(),fb="mdc-tab-indicator--active",BE="mdc-tab-indicator--no-transition",pb=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},oL=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(fb);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(BE),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(BE),i.classList.add(fb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(fb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ne]}})}return t})();var zE=(()=>{class t extends oL{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(xe("aria-disabled",!!r.disabled),j("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",ne]},features:[ke]})}return t})(),VE={passive:!0},aL=650,sL=100,cL=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(et);_viewportRuler=u(Un);_dir=u(Jt,{optional:!0});_ngZone=u(L);_platform=u(Me);_sharedResizeObserver=u(hm);_injector=u(oe);_renderer=u(Le);_animationsDisabled=nt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new O;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new O;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new q;indexFocused=new q;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),VE),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),VE))}ngAfterContentInit(){let e=this._dir?this._dir.change:K("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(In(32),Ve(this._destroyed)),r=this._viewportRuler.change(150).pipe(Ve(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Dc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),bt(o,{injector:this._injector}),Ut(e,r,i,this._items.changes,this._itemsResized()).pipe(Ve(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?tt:this._items.changes.pipe(wt(this._items),ft(e=>new ie(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Fr(1),Te(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Cn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,d=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>d&&(this.scrollDistance+=Math.min(c-d,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Or(aL,sL).pipe(Ve(Ut(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ne],selectedIndex:[2,"selectedIndex","selectedIndex",rr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),lL=(()=>{class t extends cL{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new pb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Tt(o,zE,4),i&2){let a;H(a=z())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Qe(UF,7)(HF,7)(zF,7)($F,5)(GF,5),i&2){let o;H(o=z())&&(r._tabListContainer=o.first),H(o=z())&&(r._tabList=o.first),H(o=z())&&(r._tabListInner=o.first),H(o=z())&&(r._nextPaginator=o.first),H(o=z())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&j("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ne]},features:[ke],ngContentSelectors:bb,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Se(),v(0,"div",5,0),Y("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),E(2,"div",6),g(),v(3,"div",7,1),Y("keydown",function(a){return r._handleKeydown(a)}),v(5,"div",8,2),Y("cdkObserveContent",function(){return r._onContentChanges()}),v(7,"div",9,3),U(9),g()()(),v(10,"div",10,4),Y("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),E(12,"div",6),g()),i&2&&(j("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),M("matRippleDisabled",r._disableScrollBefore||r.disableRipple),f(3),j("_mat-animation-noopable",r._animationsDisabled),f(2),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),f(5),j("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),M("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ho,Ku],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return t})(),dL=new D("MAT_TABS_CONFIG"),jE=(()=>{class t extends ub{_host=u(hb);_ngZone=u(L);_centeringSub=ve.EMPTY;_leavingSub=ve.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(wt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabBodyHost",""]],features:[ke]})}return t})(),hb=(()=>{class t{_elementRef=u(V);_dir=u(Jt,{optional:!0});_ngZone=u(L);_injector=u(oe);_renderer=u(Le);_diAnimationsDisabled=nt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ve.EMPTY;_position;_previousPosition;_onCentering=new q;_beforeCentering=new q;_afterLeavingCenter=new q;_onCentered=new q(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(et);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),bt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),bt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Qe(jE,5)(WF,5),i&2){let o;H(o=z())&&(r._portalHost=o.first),H(o=z())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&xe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(v(0,"div",1,0),Ft(2,qF,0,0,"ng-template",2),g()),i&2&&j("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[jE,ur],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return t})(),$E=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(et);_ngZone=u(L);_tabsSubscription=ve.EMPTY;_tabLabelSubscription=ve.EMPTY;_tabBodySubscription=ve.EMPTY;_diAnimationsDisabled=nt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new On;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new q;focusChange=new q;animationDone=new q;selectedTabChange=new q(!0);_groupId;_isServer=!u(Me).isBrowser;constructor(){let e=u(dL,{optional:!0});this._groupId=u(_t).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(wt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new gb;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ut(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Tt(o,yb,5),i&2){let a;H(a=z())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Qe(ZF,5)(YF,5)(hb,5),i&2){let o;H(o=z())&&(r._tabBodyWrapper=o.first),H(o=z())&&(r._tabHeader=o.first),H(o=z())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(xe("mat-align-tabs",r.alignTabs),yt("mat-"+(r.color||"primary")),rt("--mat-tab-animation-duration",r.animationDuration),j("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ne],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ne],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ne],selectedIndex:[2,"selectedIndex","selectedIndex",rr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",rr],disablePagination:[2,"disablePagination","disablePagination",ne],disableRipple:[2,"disableRipple","disableRipple",ne],preserveContent:[2,"preserveContent","preserveContent",ne],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ae([{provide:HE,useExisting:t}])],ngContentSelectors:bb,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Se(),v(0,"mat-tab-header",3,0),Y("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),de(2,JF,8,17,"div",4,vn),g(),C(4,eL,1,0),v(5,"div",5,1),de(7,tL,1,10,"mat-tab-body",6,vn),g()),i&2&&(M("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Jd("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),f(2),ue(r._tabs),f(2),w(r._isServer?4:-1),f(),j("_mat-animation-noopable",r._animationsDisabled()),f(2),ue(r._tabs))},dependencies:[lL,zE,Gv,ho,ub,hb],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return t})(),gb=class{index;tab};var li=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ot(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ot(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(xe("aria-orientation",r.vertical?"vertical":"horizontal"),j("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),GE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ue]})}return t})();var uL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),mL={passive:!0},WE=(()=>{class t{_platform=u(Me);_ngZone=u(L);_renderer=u(ht).createRenderer(null,null);_styleLoader=u(gt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return tt;this._styleLoader.load(uL);let i=Yt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new O,a="cdk-text-field-autofilled",s=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,mL)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Yt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var JE=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(B(Le),B(V))};static \u0275dir=P({type:t})}return t})(),fL=(()=>{class t extends JE{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275dir=P({type:t,features:[ke]})}return t})(),fr=new D("");var pL={provide:fr,useExisting:$t(()=>Im),multi:!0};function hL(){let t=yn()?yn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var gL=new D(""),Im=(()=>{class t extends JE{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!hL())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(B(Le),B(V),B(gL,8))};static \u0275dir=P({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&Y("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ae([pL]),ke]})}return t})();function Cb(t){return t==null||wb(t)===0}function wb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Lc=new D(""),Db=new D(""),vL=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Aa=class{static min(n){return bL(n)}static max(n){return _L(n)}static required(n){return yL(n)}static requiredTrue(n){return xL(n)}static email(n){return CL(n)}static minLength(n){return wL(n)}static maxLength(n){return DL(n)}static pattern(n){return EL(n)}static nullValidator(n){return eS()}static compose(n){return aS(n)}static composeAsync(n){return sS(n)}};function bL(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function _L(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function yL(t){return Cb(t.value)?{required:!0}:null}function xL(t){return t.value===!0?null:{required:!0}}function CL(t){return Cb(t.value)||vL.test(t.value)?null:{email:!0}}function wL(t){return n=>{let e=n.value?.length??wb(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function DL(t){return n=>{let e=n.value?.length??wb(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function EL(t){if(!t)return eS;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Cb(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function eS(t){return null}function tS(t){return t!=null}function nS(t){return Mi(t)?Ze(t):t}function iS(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function rS(t,n){return n.map(e=>e(t))}function SL(t){return!t.validate}function oS(t){return t.map(n=>SL(n)?n:e=>n.validate(e))}function aS(t){if(!t)return null;let n=t.filter(tS);return n.length==0?null:function(e){return iS(rS(e,n))}}function Eb(t){return t!=null?aS(oS(t)):null}function sS(t){if(!t)return null;let n=t.filter(tS);return n.length==0?null:function(e){let i=rS(e,n).map(nS);return os(i).pipe(J(iS))}}function Sb(t){return t!=null?sS(oS(t)):null}function ZE(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function cS(t){return t._rawValidators}function lS(t){return t._rawAsyncValidators}function xb(t){return t?Array.isArray(t)?t:[t]:[]}function vm(t,n){return Array.isArray(t)?t.includes(n):t===n}function YE(t,n){let e=xb(n);return xb(t).forEach(r=>{vm(e,r)||e.push(r)}),e}function KE(t,n){return xb(n).filter(e=>!vm(t,e))}var bm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Eb(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Sb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},go=class extends bm{name;get formDirective(){return null}get path(){return null}},Vi=class extends bm{_parent=null;name=null;valueAccessor=null},_m=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var dS=(()=>{class t extends _m{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Vi,2))};static \u0275dir=P({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ke]})}return t})(),uS=(()=>{class t extends _m{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(go,10))};static \u0275dir=P({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ke]})}return t})();var Ac="VALID",gm="INVALID",Ta="PENDING",Rc="DISABLED",mr=class{},ym=class extends mr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Nc=class extends mr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Pc=class extends mr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},ka=class extends mr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},xm=class extends mr{source;constructor(n){super(),this.source=n}},Cm=class extends mr{source;constructor(n){super(),this.source=n}};function mS(t){return(Mm(t)?t.validators:t)||null}function IL(t){return Array.isArray(t)?Eb(t):t||null}function fS(t,n){return(Mm(n)?n.asyncValidators:t)||null}function ML(t){return Array.isArray(t)?Sb(t):t||null}function Mm(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function TL(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new T(1e3,"");if(!i[e])throw new T(1001,"")}function kL(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new T(-1002,"")})}var Ra=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Z(this.statusReactive)}set status(n){Z(()=>this.statusReactive.set(n))}_status=$(()=>this.statusReactive());statusReactive=F(void 0);get valid(){return this.status===Ac}get invalid(){return this.status===gm}get pending(){return this.status===Ta}get disabled(){return this.status===Rc}get enabled(){return this.status!==Rc}errors;get pristine(){return Z(this.pristineReactive)}set pristine(n){Z(()=>this.pristineReactive.set(n))}_pristine=$(()=>this.pristineReactive());pristineReactive=F(!0);get dirty(){return!this.pristine}get touched(){return Z(this.touchedReactive)}set touched(n){Z(()=>this.touchedReactive.set(n))}_touched=$(()=>this.touchedReactive());touchedReactive=F(!1);get untouched(){return!this.touched}_events=new O;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(YE(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(YE(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(KE(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(KE(n,this._rawAsyncValidators))}hasValidator(n){return vm(this._rawValidators,n)}hasAsyncValidator(n){return vm(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(W(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Pc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Pc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(W(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Nc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Nc(!0,i))}markAsPending(n={}){this.status=Ta;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ka(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(W(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Rc,this.errors=null,this._forEachChild(r=>{r.disable(W(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ym(this.value,i)),this._events.next(new ka(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ac,this._forEachChild(i=>{i.enable(W(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(W(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ac||this.status===Ta)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ym(this.value,e)),this._events.next(new ka(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(W(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Rc:Ac}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ta,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=nS(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ka(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?Rc:this.errors?gm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ta)?Ta:this._anyControlsHaveStatus(gm)?gm:Ac}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Nc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Pc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Mm(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=IL(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=ML(this._rawAsyncValidators)}},Fc=class extends Ra{constructor(n,e,i){super(mS(e),fS(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){kL(this,!0,n),Object.keys(n).forEach(i=>{TL(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,W(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Cm(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Bc=new D("",{factory:()=>Tm}),Tm="always";function wm(t,n,e=Tm){Ib(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),RL(t,n),NL(t,n),OL(t,n),AL(t,n)}function Dm(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Sm(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Em(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function AL(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Ib(t,n){let e=cS(t);n.validator!==null?t.setValidators(ZE(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=lS(t);n.asyncValidator!==null?t.setAsyncValidators(ZE(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Em(n._rawValidators,r),Em(n._rawAsyncValidators,r)}function Sm(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=cS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=lS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Em(n._rawValidators,i),Em(n._rawAsyncValidators,i),e}function RL(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&pS(t,n)})}function OL(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&pS(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function pS(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function NL(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function hS(t,n){t==null,Ib(t,n)}function PL(t,n){return Sm(t,n)}function FL(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function LL(t){return Object.getPrototypeOf(t.constructor)===fL}function gS(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function BL(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Im?e=o:LL(o)?i=o:r=o}),r||i||e||null}function VL(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var jL={provide:go,useExisting:$t(()=>Vc)},Oc=Promise.resolve(),Vc=(()=>{class t extends go{callSetDisabledState;get submitted(){return Z(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=F(!1);_directives=new Set;form;ngSubmit=new q;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Fc({},Eb(e),Sb(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Oc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),wm(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Oc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Oc.then(()=>{let i=this._findContainer(e.path),r=new Fc({});hS(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Oc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Oc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),gS(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new xm(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(B(Lc,10),B(Db,10),B(Bc,8))};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&Y("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ae([jL]),ke]})}return t})();function QE(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function XE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Mb=class extends Ra{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(mS(e),fS(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Mm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(XE(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Cm(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){QE(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){QE(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){XE(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var UL=t=>t instanceof Mb;var vS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var HL=(()=>{class t extends go{callSetDisabledState;get submitted(){return Z(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=F(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Sm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return wm(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Dm(e.control||null,e,!1),VL(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,gS(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new xm(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Dm(i||null,e),UL(r)&&(wm(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);hS(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&PL(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ib(this.form,this),this._oldForm&&Sm(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(B(Lc,10),B(Db,10),B(Bc,8))};static \u0275dir=P({type:t,features:[ke,Ce]})}return t})();var bS=new D(""),zL={provide:Vi,useExisting:$t(()=>Tb)},Tb=(()=>{class t extends Vi{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new q;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=BL(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Dm(i,this,!1),wm(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}FL(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Dm(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(B(Lc,10),B(Db,10),B(fr,10),B(bS,8),B(Bc,8))};static \u0275dir=P({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Ae([zL]),ke,Ce]})}return t})();var $L={provide:go,useExisting:$t(()=>kb)},kb=(()=>{class t extends HL{form=null;ngSubmit=new q;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&Y("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ae([$L]),ke]})}return t})();var _S=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var yS=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Bc,useValue:e.callSetDisabledState??Tm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[_S]})}return t})(),xS=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:bS,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Bc,useValue:e.callSetDisabledState??Tm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[_S]})}return t})();var CS=new D("MAT_INPUT_VALUE_ACCESSOR");var WL=["notch"],qL=["matFormFieldNotchedOutline",""],ZL=["*"],wS=["iconPrefixContainer"],DS=["textPrefixContainer"],ES=["iconSuffixContainer"],SS=["textSuffixContainer"],YL=["textField"],KL=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],QL=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function XL(t,n){t&1&&E(0,"span",21)}function JL(t,n){if(t&1&&(v(0,"label",20),U(1,1),C(2,XL,1,0,"span",21),g()),t&2){let e=x(2);M("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function eB(t,n){if(t&1&&C(0,JL,3,5,"label",20),t&2){let e=x();w(e._hasFloatingLabel()?0:-1)}}function tB(t,n){t&1&&E(0,"div",7)}function nB(t,n){}function iB(t,n){if(t&1&&Ft(0,nB,0,0,"ng-template",13),t&2){x(2);let e=Xt(1);M("ngTemplateOutlet",e)}}function rB(t,n){if(t&1&&(v(0,"div",9),C(1,iB,1,1,null,13),g()),t&2){let e=x();M("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),w(e._forceDisplayInfixLabel()?-1:1)}}function oB(t,n){t&1&&(v(0,"div",10,2),U(2,2),g())}function aB(t,n){t&1&&(v(0,"div",11,3),U(2,3),g())}function sB(t,n){}function cB(t,n){if(t&1&&Ft(0,sB,0,0,"ng-template",13),t&2){x();let e=Xt(1);M("ngTemplateOutlet",e)}}function lB(t,n){t&1&&(v(0,"div",14,4),U(2,4),g())}function dB(t,n){t&1&&(v(0,"div",15,5),U(2,5),g())}function uB(t,n){t&1&&E(0,"div",16)}function mB(t,n){t&1&&(v(0,"div",18),U(1,6),g())}function fB(t,n){if(t&1&&(v(0,"mat-hint",22),b(1),g()),t&2){let e=x(2);M("id",e._hintLabelId),f(),re(e.hintLabel)}}function pB(t,n){if(t&1&&(v(0,"div",19),C(1,fB,2,2,"mat-hint",22),U(2,7),E(3,"div",23),U(4,8),g()),t&2){let e=x();f(),w(e.hintLabel?1:-1)}}var Oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-label"]]})}return t})(),OS=new D("MatError"),Rm=(()=>{class t{id=u(_t).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&je("id",r.id)},inputs:{id:"id"},features:[Ae([{provide:OS,useExisting:t}])]})}return t})(),Am=(()=>{class t{align="start";id=u(_t).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(je("id",r.id),xe("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),hB=new D("MatPrefix");var gB=new D("MatSuffix");var NS=new D("FloatingLabelParent"),IS=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(hm);_ngZone=u(L);_parent=u(NS);_resizeSubscription=new ve;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return vB(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function vB(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var MS="mdc-line-ripple--active",km="mdc-line-ripple--deactivating",TS=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(L),i=u(Le);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(km),e.add(MS)}deactivate(){this._elementRef.nativeElement.classList.add(km)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(km);e.propertyName==="opacity"&&r&&i.remove(MS,km)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),kS=(()=>{class t{_elementRef=u(V);_ngZone=u(L);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Qe(WL,5),i&2){let o;H(o=z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:qL,ngContentSelectors:ZL,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Se(),Ee(0,"div",1),me(1,"div",2,0),U(3),ge(),Ee(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Ab=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t})}return t})();var jc=new D("MatFormField"),bB=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),AS="fill",_B="auto",RS="fixed",yB="translateY(-50%)",vo=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(et);_platform=u(Me);_idGenerator=u(_t);_ngZone=u(L);_defaults=u(bB,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=qs("iconPrefixContainer");_textPrefixContainerSignal=qs("textPrefixContainer");_iconSuffixContainerSignal=qs("iconSuffixContainer");_textSuffixContainerSignal=qs("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Cw(Oa);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ot(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||_B}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||AS;this._appearanceSignal.set(i)}_appearanceSignal=F(AS);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||RS}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||RS}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new O;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=nt();constructor(){let e=this._defaults,i=u(Jt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),qt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(wt([void 0,void 0]),J(()=>[i.errorState,i.userAriaDescribedBy]),Nl(),Te(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Ve(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ut(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){su({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,h=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${yB} translateX(${h}))`,A=a+s+c+l;return[y,A]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(eu(o,r._labelChild,Oa,5),Tt(o,Ab,5)(o,hB,5)(o,gB,5)(o,OS,5)(o,Am,5)),i&2){nu();let a;H(a=z())&&(r._formFieldControl=a.first),H(a=z())&&(r._prefixChildren=a),H(a=z())&&(r._suffixChildren=a),H(a=z())&&(r._errorChildren=a),H(a=z())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(tu(r._iconPrefixContainerSignal,wS,5)(r._textPrefixContainerSignal,DS,5)(r._iconSuffixContainerSignal,ES,5)(r._textSuffixContainerSignal,SS,5),Qe(YL,5)(wS,5)(DS,5)(ES,5)(SS,5)(IS,5)(kS,5)(TS,5)),i&2){nu(4);let o;H(o=z())&&(r._textField=o.first),H(o=z())&&(r._iconPrefixContainer=o.first),H(o=z())&&(r._textPrefixContainer=o.first),H(o=z())&&(r._iconSuffixContainer=o.first),H(o=z())&&(r._textSuffixContainer=o.first),H(o=z())&&(r._floatingLabel=o.first),H(o=z())&&(r._notchedOutline=o.first),H(o=z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ae([{provide:jc,useExisting:t},{provide:NS,useExisting:t}])],ngContentSelectors:QL,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Se(KL),Ft(0,eB,1,1,"ng-template",null,0,iu),v(2,"div",6,1),Y("click",function(a){return r._control.onContainerClick(a)}),C(4,tB,1,0,"div",7),v(5,"div",8),C(6,rB,2,2,"div",9),C(7,oB,3,0,"div",10),C(8,aB,3,0,"div",11),v(9,"div",12),C(10,cB,1,1,null,13),U(11),g(),C(12,lB,3,0,"div",14),C(13,dB,3,0,"div",15),g(),C(14,uB,1,0,"div",16),g(),v(15,"div",17),C(16,mB,2,0,"div",18)(17,pB,5,1,"div",19),g()),i&2){let o;f(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),w(r._hasOutline()?6:-1),f(),w(r._hasIconPrefix?7:-1),f(),w(r._hasTextPrefix?8:-1),f(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),w(r._hasTextSuffix?12:-1),f(),w(r._hasIconSuffix?13:-1),f(),w(r._hasOutline()?-1:14),f(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[IS,kS,Jg,TS,Am],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var PS=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Om=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Uc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Qu,vo,Ue]})}return t})();var wB=["button","checkbox","file","hidden","image","radio","range","reset","submit"],DB=new D("MAT_INPUT_CONFIG"),Nm=(()=>{class t{_elementRef=u(V);_platform=u(Me);ngControl=u(Vi,{optional:!0,self:!0});_autofillMonitor=u(WE);_ngZone=u(L);_formField=u(jc,{optional:!0});_renderer=u(Le);_uid=u(_t).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(DB,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new O;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ot(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Aa.required)??!1}set required(e){this._required=ot(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Qv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ot(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Qv().has(e));constructor(){let e=u(Vc,{optional:!0}),i=u(kb,{optional:!0}),r=u(PS),o=u(CS,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Ii(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Om(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&qt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){wB.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&Y("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(je("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ne]},exportAs:["matInput"],features:[Ae([{provide:Ab,useExisting:t}]),Ce]})}return t})(),Pm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Uc,Uc,qE,Ue]})}return t})();var EB=["mat-internal-form-field",""],SB=["*"],LS=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:EB,ngContentSelectors:SB,decls:1,vars:0,template:function(i,r){i&1&&(Se(),U(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var IB=["input"],MB=["label"],TB=["*"],Rb={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},kB=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>Rb}),Vt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Vt||{}),Ob=class{source;checked},Nb=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(et);_ngZone=u(L);_animationsDisabled=nt();_options=u(kB,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new Ob;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new q;indeterminateChange=new q;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Vt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(gt).load(ai);let e=u(new ki("tabindex"),{optional:!0});this._options=this._options||Rb,this.color=this._options.color||Rb.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(_t).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Vt.Indeterminate):this._transitionCheckState(this.checked?Vt.Checked:Vt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=F(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Vt.Checked:Vt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Vt.Init:if(i===Vt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Vt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Vt.Unchecked:return i===Vt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Vt.Checked:return i===Vt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Vt.Indeterminate:return i===Vt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Qe(IB,5)(MB,5),i&2){let o;H(o=z())&&(r._inputElement=o.first),H(o=z())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(je("id",r.id),xe("tabindex",null)("aria-label",null)("aria-labelledby",null),yt(r.color?"mat-"+r.color:"mat-accent"),j("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ne],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ne],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ne],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:rr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ne],checked:[2,"checked","checked",ne],disabled:[2,"disabled","disabled",ne],indeterminate:[2,"indeterminate","indeterminate",ne]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Ae([{provide:fr,useExisting:$t(()=>t),multi:!0},{provide:Lc,useExisting:t,multi:!0}]),Ce],ngContentSelectors:TB,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Se(),v(0,"div",3),Y("click",function(a){return r._preventBubblingFromLabel(a)}),v(1,"div",4,0)(3,"div",5),Y("click",function(){return r._onTouchTargetClick()}),g(),v(4,"input",6,1),Y("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),E(6,"div",7),v(7,"div",8),Cs(),v(8,"svg",9),E(9,"path",10),g(),ws(),E(10,"div",11),g(),E(11,"div",12),g(),v(12,"label",13,2),U(14),g()()),i&2){let o=Xt(2);M("labelPosition",r.labelPosition),f(4),j("mdc-checkbox--selected",r.checked),M("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),f(7),M("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),f(),M("for",r.inputId)}},dependencies:[ho,LS],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),BS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Nb,Ue]})}return t})();var Pb=0;function RB(){return Pb}function pr(t,n){return(...e)=>{try{return Pb=n,t(...e)}finally{Pb=0}}}function OB(t){return!t}function VS(t){return t}function Hn(t){return Array.isArray(t)}function Na(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var bo=Symbol(),zm=Symbol(),zc=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(jS(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>jS(this.predicates,i)):n.fns;this.fns.push(...e)}},Lm=class extends zc{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==zm})}},Pa=class t extends zc{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===zm?e:Hn(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},Fb=class extends Pa{constructor(n){super(n,void 0)}},Lb=class extends zc{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==zm&&(e=this.key.reducer.reduce(e,r))}return e}};function jS(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=Z(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return zm}return n(e)}}var Fa=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new Lm(n),this.disabledReasons=new Fb(n),this.readonly=new Lm(n),this.syncErrors=Pa.ignoreNull(n),this.syncTreeErrors=Pa.ignoreNull(n),this.asyncErrors=Pa.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new Lb(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},Bm=class{depth;constructor(n){this.depth=n}build(){return new Vm(this,[],0)}},La=class t extends Bm{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===bo){let e=this.getCurrent().children;e.size>(e.has(bo)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:pr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new $c(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},$c=class extends Bm{logic=new Fa([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(pr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(pr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(pr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(pr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(pr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(pr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(pr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new La(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},Vm=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?NB(n,e,i):new Fa([])}getChild(n){let e=this.builder?zS(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>Vb(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>Vb(a,this.depth))],this.depth+1));return new Bb(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},Bb=class t{all;logic;constructor(n){this.all=n,this.logic=new Fa([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function zS(t,n){if(t instanceof La)return t.all.flatMap(({builder:e,predicate:i})=>{let r=zS(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof $c)return[...n!==bo&&t.children.has(bo)?[{builder:t.getChild(bo),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new T(1909,!1)}function NB(t,n,e){let i=new Fa(n);if(t instanceof La){let r=t.all.map(({builder:o,predicate:a})=>new Vm(o,a?[...n,Vb(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof $c)i.mergeIn(t.logic);else throw new T(1909,!1);return i}function Vb(t,n){return W(_({},t),{depth:n})}var $S=Symbol("PATH"),di=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,PB);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=La.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[$S]}static newRoot(){return new t([],void 0,void 0,void 0)}},PB={get(t,n){return n===$S?t:t.getChild(n).fieldPathProxy}},Fm,Hc=new Map,jm=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(Hc.has(this))return Hc.get(this);let n=di.newRoot();Hc.set(this,n);let e=Fm;try{Fm=n,this.schemaFn(n.fieldPathProxy)}finally{Fm=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return Hc.clear(),n===void 0?di.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{Hc.clear()}}};function FB(t){return t instanceof jm||typeof t=="function"}function $m(t){if(Fm!==di.unwrapFieldPath(t).root)throw new T(1908,!1)}function _o(t,n,e){return $m(t),di.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var hr={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:LB};function LB(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var Um=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function zn(t){return new Um(t??hr.override())}var Qb=zn(hr.or()),Xb=zn(hr.max()),Jb=zn(hr.min()),GS=zn(hr.max()),WS=zn(hr.min()),qS=zn(hr.list());function BB(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var jb=class{node;constructor(n){this.node=n}rawSyncTreeErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...VB(this.node.submitState.submissionErrors())]);syncValid=$(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),OB));syncTreeErrors=$(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=$(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=$(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=$(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=$(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return Z(()=>n.sort(jB)),n});pending=$(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=$(()=>{if(this.shouldSkipValidation())return"valid";let n=BB(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=$(()=>this.status()==="valid");invalid=$(()=>this.status()==="invalid");shouldSkipValidation=$(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function VB(t){return t===void 0?[]:Hn(t)?t:[t]}function Gm(t,n){if(Hn(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function US(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function jB(t,n){let e=US(t),i=US(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Ub=zn(),Hb=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=$(()=>{let i=di.unwrapFieldPath(n),r=this.node,o=RB();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new T(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new T(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=$(()=>{let n=this.key();if(!Hn(Z(this.node.structure.parent.value)))throw new T(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof Ra)throw new T(1907,!1);return e}},zb=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=Z(()=>st(this.node.structure.injector,()=>e.create($(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new T(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,$(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},UB={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=Z(i.value);if(Hn(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Na(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=Z(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=Z(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function HB(t,n){let e=$(()=>t()[n()]);return e[We]=t[We],e.set=i=>{t.update(r=>zB(r,i,n()))},e.update=i=>{e.set(i(Z(e)))},e.asReadonly=()=>e,e}function zB(t,n,e){if(Hn(t)){let i=[...t];return i[e]=n,i}else return W(_({},t),{[e]:n})}var Hm=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=oe.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>Z(e.reader))}getChild(n){let e=n.toString(),i=Z(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(Z(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return ZS;if(e===void 0){let r=i;return $(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new T(1902,!1);return r})}else{let r=i;return $(()=>{let o=this.parent.structure.value();if(!Hn(o))throw new T(1903,!1);let a=o[r];if(Na(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let c=o[s];if(Na(c)&&c.hasOwnProperty(this.parent.structure.identitySymbol)&&c[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new T(1904,!1)})}}createChildrenMap(){return ni({source:this.value,computation:(n,e)=>{if(!Na(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=Hn(n);i!==void 0&&(o?r=GB(i,n,this.identitySymbol):r=WB(i,n));for(let a of Object.keys(n)){let s,c=n[a];if(c===void 0){i.byPropertyKey.has(a)&&(r??=_({},i),r.byPropertyKey.delete(a));continue}o&&Na(c)&&!Hn(c)&&(s=c[this.identitySymbol]??=Symbol(""));let l;s&&(i.byTrackingKey?.has(s)||(r??=_({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),l=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=_({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l??this.createChildNode(a,s,o)})):l&&l!==d.node&&(r??=_({},i),d.node=l)}return r??i}})}createReader(n){return $(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},$b=class extends Hm{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return $B}get keyInParent(){return ZS}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},Gb=class extends Hm{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=$(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=HB(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var $B=$(()=>[]),ZS=$(()=>{throw new T(1905,!1)});function GB(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),Na(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=_({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=_({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function WB(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=_({},t),e.byPropertyKey.delete(i));return e}var Wb=class{node;selfSubmitting=F(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=ni({source:this.node.structure.value,computation:()=>[]})}submitting=$(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},Gc=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Hb(this)}fieldProxy=new Proxy(()=>this,UB);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new zb(this),this.submitState=new Wb(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(HS,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(HS,void 0)}pendingSync=ni({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(Jb)}get maxLength(){return this.metadata(WS)}get min(){return this.metadata(Xb)}get minLength(){return this.metadata(GS)}get pattern(){return this.metadata(qS)??qB}get required(){return this.metadata(Qb)??ZB}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){Z(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){Z(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=ni(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=Z(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new $b(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new Gb(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(bo),o=this.structure.logic.getChild(bo)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},qB=$(()=>[]),ZB=$(()=>!1);function HS(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var qb=class{node;selfTouched=F(!1);selfDirty=F(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=F([]);constructor(n){this.node=n}dirty=$(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),VS)});touched=$(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),VS)});disabledReasons=$(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=$(()=>!!this.disabledReasons().length);readonly=$(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=$(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=$(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=$(()=>{if(this.node.logicNode.logic.hasMetadata(Ub)){let e=this.node.logicNode.logic.getMetadata(Ub).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=$(()=>this.hidden()||this.disabled()||this.readonly())},Zb=class{newRoot(n,e,i,r){return new Gc({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new Gc(n)}createNodeState(n){return new qb(n)}createValidationState(n){return new jb(n)}createStructure(n,e){return n.createStructure(e)}},Yb=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(ir)}.form${YB++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){qt(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),Z(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},YB=0;function KB(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?FB(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function e_(...t){let[n,e,i]=KB(t),r=i?.injector??u(oe),o=st(r,()=>jm.rootCompile(e)),a=new Yb(r,i?.name,i?.submission),s=i?.adapter??new Zb,c=Gc.newRoot(a,n,o,s);return a.createFieldManagementEffect(c.structure),c.fieldTree}async function t_(t,n){let e=Z(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new T(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",c=!0;Z(()=>{YS(e),s==="none"?c=e.valid():s==="pending"&&(c=!e.invalid())});try{if(c){e.submitState.selfSubmitting.set(!0);let l=await Z(()=>o?.(i,r));return l&&QB(e,l),!l||Hn(l)&&l.length===0}else Z(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function YS(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())YS(n)}}function QB(t,n){Hn(n)||(n=[n]);let e=new Map;for(let i of n){let r=Gm(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var Kb=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function KS(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof Kb?e.context:e;return n}var XB=new D("");function Ba(t,n){return t instanceof Function?t(n):t}function c_(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function QS(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function l_(t,n){$m(t),di.unwrapFieldPath(t).builder.addSyncErrorRule(i=>Gm(n(i),i.fieldTree))}function JB(t){return new n_(t)}function e2(t,n){return new i_(t,n)}function t2(t,n){return new r_(t,n)}var Va=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},n_=class extends Va{kind="required"},i_=class extends Va{min;kind="min";constructor(n,e){super(e),this.min=n}},r_=class extends Va{max;kind="max";constructor(n,e){super(e),this.max=n}};var o_=class extends Va{kind="parse"};function Wm(t,n,e){let i=_o(t,zn(),r=>typeof n=="number"?n:n(r));_o(t,Jb,({state:r})=>r.metadata(i)()),l_(t,r=>{if(c_(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?Ba(e.error,r):t2(o,{message:Ba(e?.message,r)})})}function qm(t,n,e){let i=_o(t,zn(),r=>typeof n=="number"?n:n(r));_o(t,Xb,({state:r})=>r.metadata(i)()),l_(t,r=>{if(c_(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?Ba(e.error,r):e2(o,{message:Ba(e?.message,r)})})}function Zm(t,n){let e=_o(t,zn(),i=>n?.when?n.when(i):!0);_o(t,Qb,({state:i})=>i.metadata(e)()),l_(t,i=>{if(i.state.metadata(e)()&&c_(i.value()))return n?.error?Ba(n.error,i):JB({message:Ba(n?.message,i)})})}function JS(t,n){$m(t),di.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>Gm(n(i),i.fieldTree))}var n2=new D("");function i2(t,n,e){let i=ni({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(QS(a.error)),a.value!==void 0&&n(a.value),i.set(QS(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var a_=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return KS(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new T(1910,!1)}valueAccessor=null;hasValidator(n){return n===Aa.required?this.field().required():!1}updateValueAndValidity(){}},s_={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},r2=(()=>{let t={};for(let n of Object.keys(s_))t[s_[n]]=n;return t})();function d_(t,n){let e=r2[n];return t[e]?.()}var u_=Object.values(s_);function Ym(){return{}}function yo(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function o2(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function a2(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function s2(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function c2(t,n){let e;if(t.validity.badInput)return{error:new o_};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=Z(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=Z(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function l2(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){XS(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){XS(t,n);return}}t.value=n}function XS(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function m_(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function d2(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=Ym();return()=>{let i=n.state(),r=i.controlValue();yo(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of u_){let a;o==="errors"?a=n.errors():a=d_(i,o),yo(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&m_(n.renderer,n.nativeFormElement,o,a))}}}function u2(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=Ym();return()=>{let i=n.state(),r=i.value();yo(e,"controlValue",r)&&Z(()=>n.controlValueAccessor.writeValue(r));for(let o of u_){let a=d_(i,o);if(yo(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?Z(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&m_(n.renderer,n.nativeFormElement,o,a)}}}}function m2(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>f2(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function f2(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function p2(t,n,e){let i=!1,r=n.nativeFormElement,o=i2(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>c2(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&m2(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=Ym();return()=>{let s=n.state(),c=s.controlValue();yo(a,"controlValue",c)&&l2(r,c);for(let l of u_){let d=d_(s,l);yo(a,l,d)&&(t.setInputOnDirectives(l,d),n.elementAcceptsNativeProperty(l)&&m_(n.renderer,r,l,d))}i=!0}}var h2=Symbol(),g2=new D(""),eI=(()=>{class t{field=fe.required({alias:"formField"});renderer=u(Le);destroyRef=u(St);state=$(()=>this.field()());injector=u(oe);element=u(V).nativeElement;elementIsNativeFormElement=o2(this.element);elementAcceptsNumericValues=a2(this.element);elementAcceptsTextualValues=s2(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(fr,{optional:!0,self:!0});config=u(XB,{optional:!0});parseErrorsSource=F(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new a_(this.state)}parseErrors=$(()=>this.parseErrorsSource()?.().map(e=>W(_({},e),{fieldTree:Z(this.state).fieldTree,formField:this}))??[]);errors=$(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,$(()=>o(this))]);if(e.length===0)return;let i=Ym();su({write:()=>{for(let[r,o]of e){let a=o();yo(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new T(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),qt(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[h2];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=u2(e,this);else if(e.customControl)this.\u0275ngControlUpdate=d2(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=p2(e,this,this.parseErrorsSource);else throw new T(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Ae([{provide:g2,useExisting:t},{provide:Vi,useFactory:()=>u(t).interopNgControl},{provide:n2,useFactory:()=>u(t).parseErrorsSource}]),Bg("formField")]})}return t})();function v2(t,n){if(t&1&&(v(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;f(),re(e.message)}}function b2(t,n){if(t&1&&(v(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;f(),re(e.message)}}function _2(t,n){if(t&1&&(v(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;f(),re(e.message)}}function y2(t,n){t&1&&b(0," + ")}function x2(t,n){if(t&1&&(b(0),C(1,y2,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;we(" ",e," "),f(),w(i!==r-1?1:-1)}}function C2(t,n){if(t&1&&(v(0,"div"),b(1),v(2,"span",18),b(3,"= ("),de(4,x2,2,2,null,null,$e),b(6),g()()),t&2){let e=x().$implicit;rt("width","100%"),f(),we(" ",e.calculateRollAverage()," "),f(3),ue(e.diceValues),f(2),we(") / ",e.diceValues.length)}}function w2(t,n){if(t&1&&(v(0,"div"),b(1),g()),t&2){let e=x().$implicit;f(),re(e.diceValues[0])}}function D2(t,n){if(t&1&&C(0,C2,7,4,"div",17)(1,w2,2,1,"div"),t&2){let e=x().$implicit;w(e.useAveragedRolls?0:1)}}function E2(t,n){if(t&1&&(v(0,"div",12)(1,"div",14)(2,"b"),b(3,"# of Rolls"),g(),v(4,"p"),b(5),g(),v(6,"b"),b(7,"Bounds"),g(),v(8,"p"),b(9),g()(),v(10,"div",15)(11,"b"),b(12,"Results"),g(),v(13,"div",16),de(14,D2,2,1,null,null,$e),g()()()),t&2){let e=n.$implicit;f(5),re(e.numberOfRolls),f(4),Ti("",e.lowerBound," - ",e.upperBound),f(5),ue(e.rolls)}}function S2(t,n){t&1&&(v(0,"div",13)(1,"span",19),b(2,"No rolls yet :("),g()())}var Km=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=F({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=e_(this.customRollParams,n=>{Zm(n.minimum),Zm(n.maximum),Zm(n.count),qm(n.minimum,1,{message:"Must be > 0"}),qm(n.maximum,2,{message:"Must be > 1"}),qm(n.count,1,{message:"Must be > 0"}),Wm(n.minimum,999,{message:"Must be <= 999"}),Wm(n.maximum,1e3,{message:"Must be <= 1000"}),Wm(n.count,20,{message:"Must be <= 20"}),JS(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){t_(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new f_(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"h1"),b(3,"Dice Roller"),g(),v(4,"div",2)(5,"mat-form-field")(6,"mat-label"),b(7,"Lowest Value"),g(),E(8,"input",3),ea(),de(9,v2,2,1,"mat-error",null,vn),g(),v(11,"mat-form-field")(12,"mat-label"),b(13,"Highest Value"),g(),E(14,"input",3),ea(),de(15,b2,2,1,"mat-error",null,vn),g(),v(17,"mat-form-field")(18,"mat-label"),b(19,"# of Dice"),g(),E(20,"input",3),ea(),de(21,_2,2,1,"mat-error",null,vn),g()(),v(23,"mat-checkbox",4),b(24,"Use averaged rolls (True Hit)"),g(),ea(),v(25,"button",5),Y("click",function(){return i.customRollDice()}),b(26,"Roll Dice"),g(),v(27,"div",6)(28,"button",7),Y("click",function(){return i.quickRollDice(1,2,1,!1)}),b(29,"1 d2"),g(),v(30,"button",7),Y("click",function(){return i.quickRollDice(1,100,1,!1)}),b(31,"1 d100"),g(),v(32,"button",7),Y("click",function(){return i.quickRollDice(1,100,1,!0)}),b(33,"1 d100 Avg."),g()(),E(34,"mat-divider"),v(35,"div",8)(36,"h2"),b(37,"History"),g(),v(38,"button",9),Y("click",function(){return i.clearRollHistory()}),E(39,"img",10),g()()(),v(40,"div",11),de(41,E2,16,3,"div",12,$e,!1,S2,3,0,"div",13),g()()),e&2&&(f(5),rt("width","30%"),f(3),M("formField",i.customDiceRollForm.minimum),ta(),f(),ue(i.customDiceRollForm.minimum().errors()),f(2),rt("width","30%"),f(3),M("formField",i.customDiceRollForm.maximum),ta(),f(),ue(i.customDiceRollForm.maximum().errors()),f(2),rt("width","30%"),f(3),M("formField",i.customDiceRollForm.count),ta(),f(),ue(i.customDiceRollForm.count().errors()),f(2),M("formField",i.customDiceRollForm.useAverages),ta(),f(2),rt("width","100%"),f(3),rt("width","30%"),f(2),rt("width","30%"),f(2),rt("width","30%"),f(9),ue(i.rollHistory))},dependencies:[li,AE,Ic,Sc,Pm,Nm,vo,Oa,Rm,BS,Nb,eI],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},f_=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new p_(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},p_=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var De=class t{constructor(n){this.http=n;this.http=u(Ni)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=F(!0);isLoading=this.loading.asReadonly();error=F("");errorMessage=this.error.asReadonly();map=F({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(G(Ni))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var tI=(()=>{class t{_animationsDisabled=nt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var I2=["text"],M2=[[["mat-icon"]],"*"],T2=["mat-icon","*"];function k2(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=x();M("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function A2(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=x();M("disabled",e.disabled)}}function R2(t,n){if(t&1&&(v(0,"span",4),b(1),g()),t&2){let e=x();f(),we("(",e.group.label,")")}}var h_=new D("MAT_OPTION_PARENT_COMPONENT"),g_=new D("MatOptgroup");var Wc=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},ja=(()=>{class t{_element=u(V);_changeDetectorRef=u(et);_parent=u(h_,{optional:!0});group=u(g_,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(_t).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=F(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new q;_text;_stateChanges=new O;constructor(){let e=u(gt);e.load(ai),e.load(Zu),this._signalDisableRipple=!!this._parent&&Ii(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Cn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Wc(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Qe(I2,7),i&2){let o;H(o=z())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&Y("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(je("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ne]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:T2,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Se(M2),C(0,k2,1,2,"mat-pseudo-checkbox",1),U(1),v(2,"span",2,0),U(4,1),g(),C(5,A2,1,1,"mat-pseudo-checkbox",3),C(6,R2,2,1,"span",4),E(7,"div",5)),i&2&&(w(r.multiple?0:-1),f(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),f(),w(r.group&&r.group._inert?6:-1),f(),M("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[tI,ho],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function nI(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function iI(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var rI=im();function uI(t){return new Qm(t.get(Un),t.get(se))}var Qm=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=lt(-this._previousScrollPosition.left),n.style.top=lt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),rI&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),rI&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function mI(t,n){return new Xm(t.get(Ma),t.get(L),t.get(Un),n)}var Xm=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Te(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var qc=class{enable(){}disable(){}attach(){}};function v_(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function oI(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function of(t,n){return new Jm(t.get(Ma),t.get(Un),t.get(L),n)}var Jm=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();v_(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fI=(()=>{class t{_injector=u(oe);constructor(){}noop=()=>new qc;close=e=>mI(this._injector,e);block=()=>uI(this._injector);reposition=e=>of(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ua=class{positionStrategy;scrollStrategy=new qc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var ef=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var pI=(()=>{class t{_attachedOverlays=[];_document=u(se);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hI=(()=>{class t extends pI{_ngZone=u(L);_renderer=u(ht).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gI=(()=>{class t extends pI{_platform=u(Me);_ngZone=u(L);_renderer=u(ht).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Bt(e)};_clickListener=e=>{let i=Bt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(aI(s.overlayElement,i)||aI(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function aI(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var vI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),bI=(()=>{class t{_platform=u(Me);_containerElement;_document=u(se);_styleLoader=u(gt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Kv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Kv()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(vI)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),b_=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function __(t){return t&&t.nodeType===1}var tf=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new O;_attachments=new O;_detachments=new O;_positionStrategy;_scrollStrategy;_locationChanges=ve.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new O;_outsidePointerEvents=new O;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,d=!1,m,p){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=m,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=bt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=W(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=lt(this._config.width),n.height=lt(this._config.height),n.minWidth=lt(this._config.minWidth),n.minHeight=lt(this._config.minHeight),n.maxWidth=lt(this._config.maxWidth),n.maxHeight=lt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;__(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new b_(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Li(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=bt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},sI="cdk-overlay-connected-position-bounding-box",O2=/([A-Za-z%]+)$/;function af(t,n){return new nf(n,t.get(Un),t.get(se),t.get(Me),t.get(bI))}var nf=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new O;_resizeSubscription=ve.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(sI),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),d=this._getOverlayFit(l,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&xo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(sI),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:__(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=lI(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let d=0-a,m=a+o.width-i.width,p=0-s,h=s+o.height-i.height,y=this._subtractOverflows(o.width,d,m),A=this._subtractOverflows(o.height,p,h),k=y*A;return{visibleArea:k,isCompletelyWithinViewport:o.width*o.height===k,fitsInViewportVertically:A===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=cI(this._overlayRef.getConfig().minHeight),s=cI(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=lI(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=l||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=c||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!N2(this._lastScrollVisibility,i)){let r=new ef(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),y=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-y/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,p;if(l)p=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),y=this._lastBoundingBoxSize.width;d=h*2,m=n.x-h,d>y&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-y/2)}return{top:a,left:m,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=lt(i.width),r.height=lt(i.height),r.top=lt(i.top)||"auto",r.bottom=lt(i.bottom)||"auto",r.left=lt(i.left)||"auto",r.right=lt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=lt(o)),a&&(r.maxWidth=lt(a))}this._lastBoundingBoxSize=i,xo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){xo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){xo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();xo(i,this._getExactOverlayY(e,n,d)),xo(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=lt(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=lt(a.maxWidth):o&&(i.maxWidth="")),xo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=lt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=lt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:oI(n,i),isOriginOutsideView:v_(n,i),isOverlayClipped:oI(e,i),isOverlayOutsideView:v_(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Li(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function xo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function cI(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(O2);return!e||e==="px"?parseFloat(n):null}return t||null}function lI(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function N2(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var dI="cdk-global-overlay-wrapper";function _I(t){return new rf}var rf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(dI),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",h="",y="",A="";c?A="flex-start":d==="center"?(A="center",p?y=m:h=m):p?d==="left"||d==="end"?(A="flex-end",h=m):(d==="right"||d==="start")&&(A="flex-start",y=m):d==="left"||d==="start"?(A="flex-start",h=m):(d==="right"||d==="end")&&(A="flex-end",y=m),n.position=this._cssPosition,n.marginLeft=c?"0":h,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":y,e.justifyContent=A,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(dI),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},yI=(()=>{class t{_injector=u(oe);constructor(){}global(){return _I()}flexibleConnectedTo(e){return af(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xI=new D("OVERLAY_DEFAULT_CONFIG");function sf(t,n){t.get(gt).load(vI);let e=t.get(bI),i=t.get(se),r=t.get(_t),o=t.get(an),a=t.get(Jt),s=t.get(Le,null,{optional:!0})||t.get(ht).createRenderer(null,null),c=new Ua(n),l=t.get(xI,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),c.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let p=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return __(p)?p.after(m):p?.type==="parent"?p.element.appendChild(m):e.getContainerElement().appendChild(m),new tf(new pm(d,o,t),m,d,c,t.get(L),t.get(hI),i,t.get(ar),t.get(gI),n?.disableAnimations??t.get(Ls,null,{optional:!0})==="NoopAnimations",t.get(Oe),s)}var CI=(()=>{class t{scrollStrategies=u(fI);_positionBuilder=u(yI);_injector=u(oe);constructor(){}create(e){return sf(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var y_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({providers:[CI],imports:[Ue,LE,rb,rb]})}return t})();var cf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ue]})}return t})();var x_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ia,cf,ja,Ue]})}return t})();var P2=["panel"],F2=["*"];function L2(t,n){if(t&1&&(me(0,"div",1,0),U(2),ge()),t&2){let e=n.id,i=x();yt(i._classList),j("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),je("id",i.id),xe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var C_=class{source;option;constructor(n,e){this.source=n,this.option=e}},wI=new D("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),DI=(()=>{class t{_changeDetectorRef=u(et);_elementRef=u(V);_defaults=u(wI);_animationsDisabled=nt();_activeOptionChanges=ve.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new q;opened=new q;closed=new q;optionActivated=new q;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(_t).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Me);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new wc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new C_(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Tt(o,ja,5)(o,g_,5),i&2){let a;H(a=z())&&(r.options=a),H(a=z())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Qe(Pt,7)(P2,5),i&2){let o;H(o=z())&&(r.template=o.first),H(o=z())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ne],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ne],requireSelection:[2,"requireSelection","requireSelection",ne],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ne],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ne]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Ae([{provide:h_,useExisting:t}])],ngContentSelectors:F2,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Se(),na(0,L2,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})();var B2={provide:fr,useExisting:$t(()=>w_),multi:!0};var V2=new D("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(oe);return()=>of(t)}}),w_=(()=>{class t{_environmentInjector=u(Oe);_element=u(V);_injector=u(oe);_viewContainerRef=u(Mt);_zone=u(L);_changeDetectorRef=u(et);_dir=u(Jt,{optional:!0});_formField=u(jc,{optional:!0,host:!0});_viewportRuler=u(Un);_scrollStrategy=u(V2);_renderer=u(Le);_animationsDisabled=nt();_defaults=u(wI,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new O;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=ve.EMPTY;_breakpointObserver=u(Cc);_handsetLandscapeSubscription=ve.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new O;_overlayPanelClass=Li(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&tm(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Ut(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Te(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Te(()=>this._overlayAttached)):K()).pipe(J(e=>e instanceof Wc?e:null))}optionSelections=Rr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(wt(e),ft(()=>Ut(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(ft(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ie(e=>{let i=o=>{let a=Bt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!c||!c.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=Cn(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return $u()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ie(r=>{bt(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(pt(()=>this._positionStrategy.reapplyLastPosition()),lp(0))??K();return Ut(e,i).pipe(ft(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),mt(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;Yv(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Bi(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=sf(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(vE.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Cn(e)||e.keyCode===38&&Cn(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ua({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=af(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=nI(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=iI(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&tm(this._trackedModal,"aria-owns",i),Yv(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;tm(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&Y("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ne]},exportAs:["matAutocompleteTrigger"],features:[Ae([B2]),Ce]})}return t})(),EI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[y_,x_,Mc,x_,Ue]})}return t})();function U2(t,n){if(t&1&&(me(0,"a",4),b(1),ge()),t&2){let e=x();je("href",e.titleHref(),ze),f(),re(e.title())}}function H2(t,n){if(t&1&&b(0),t&2){let e=x();we(" ",e.title()," ")}}function z2(t,n){if(t&1&&(me(0,"p"),b(1),ge()),t&2){let e=n.$implicit;f(),re(e)}}var lf=class t{label=fe.required();title=fe.required();titleHref=fe();textFields=fe();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"h2",1),b(2),ge(),Ee(3,"div",2),me(4,"h2",3),C(5,U2,2,2,"a",4)(6,H2,1,1),ge()(),de(7,z2,2,1,"p",null,$e)),e&2&&(f(2),re(i.label()),f(3),w(i.titleHref()?5:6),f(2),ue(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function $2(t,n){t&1&&b(0," \xA0 ")}function G2(t,n){if(t&1&&(b(0),C(1,$2,1,0),b(2)),t&2){let e=x(3);we(" ",e.constants.currencySymbol," "),f(),w(e.constants.includeSpace?1:-1),f(),we(" ",e.amount()," ")}}function W2(t,n){t&1&&b(0," \xA0 ")}function q2(t,n){if(t&1&&(b(0),C(1,W2,1,0),b(2)),t&2){let e=x(3);we(" ",e.amount()," "),f(),w(e.constants.includeSpace?1:-1),f(),we(" ",e.constants.currencySymbol," ")}}function Z2(t,n){if(t&1&&C(0,G2,3,3)(1,q2,3,3),t&2){let e=x(2);w(e.constants.isSymbolLeftAligned?0:1)}}function Y2(t,n){if(t&1&&b(0),t&2){let e=x(2);we(" ",e.amount()," ")}}function K2(t,n){if(t&1&&C(0,Z2,2,1)(1,Y2,1,1),t&2){let e=x();w(e.constants?0:1)}}var df=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(De),this.constants=this.teamDataService.getCurrencyConstants()}amount=fe.required();constants;static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&C(0,K2,2,1),e&2&&w(i.amount()?0:-1)},encapsulation:2})};function Q2(t,n){if(t&1&&Ee(0,"img",1),t&2){let e=x();je("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}var uf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(De)}tag=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Ce],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(me(0,"div",0),C(1,Q2,1,1,"img",1),me(2,"p"),b(3),ge()()),e&2&&(je("title",i.tag()),f(),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),f(2),re(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var mf=class t{percentage=fe.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Ce],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Ee(0,"div",0),e&2&&rt("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function X2(t,n){if(t&1&&Ee(0,"img",1),t&2){let e=x(3);je("height",e.height())}}function J2(t,n){if(t&1&&Ee(0,"img",2),t&2){let e=x(3);je("height",e.height())}}function eV(t,n){if(t&1&&C(0,X2,1,1,"img",1)(1,J2,1,1,"img",2),t&2){let e=x(2);w(e.final()<e.base()?0:1)}}function tV(t,n){if(t&1&&Ee(0,"img",3),t&2){let e=x(3);je("height",e.height())}}function nV(t,n){if(t&1&&Ee(0,"img",4),t&2){let e=x(3);je("height",e.height())}}function iV(t,n){if(t&1&&C(0,tV,1,1,"img",3)(1,nV,1,1,"img",4),t&2){let e=x(2);w(e.final()>e.base()?0:1)}}function rV(t,n){if(t&1&&C(0,eV,2,1)(1,iV,2,1),t&2){let e=x();w(e.invertColors()?0:1)}}var Ha=class t{base=fe.required();final=fe.required();invertColors=fe(!1);height=fe(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(me(0,"span",0),C(1,rV,2,1),me(2,"span"),b(3),ge()()),e&2&&(f(),w(i.base()!==i.final()?1:-1),f(2),re(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var oV=t=>({shaded:t}),aV=(t,n)=>n.key;function sV(t,n){if(t&1&&(v(0,"div",10)(1,"p"),b(2),g(),v(3,"p"),b(4),g()()),t&2){let e=n.$implicit,i=n.$index;M("ngClass",Xe(3,oV,i%2===0)),f(2),re(e.key),f(2),re(e.value)}}function cV(t,n){if(t&1&&(v(0,"div",6),E(1,"div",7),v(2,"div",8)(3,"div",9)(4,"p"),b(5,"Base"),g(),v(6,"p"),b(7),g()(),de(8,sV,5,5,"div",10,aV),Bn(10,"keyvalue"),g()()),t&2){let e=x();f(7),re(e.values().baseValue),f(),ue(Gs(10,1,e.values().modifiers))}}var ff=class t{name=fe.required();values=fe.required();expanded=fe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),b(4),g(),E(5,"div",4),g(),E(6,"stat-with-buff-icon",5),g(),C(7,cV,11,3,"div",6),g()),e&2&&(f(4),re(i.name()),f(2),M("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),f(),w(i.expanded()?7:-1))},dependencies:[Ai,Ha,Ri],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var lV=(t,n)=>n.key;function dV(t,n){if(t&1&&Ee(0,"img",4),t&2){let e=x();je("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function uV(t,n){if(t&1&&b(0),t&2){let e=x(2);Ti(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function mV(t,n){if(t&1&&b(0),t&2){let e=x(2);we(" (",e.status().remainingTurns," turns) ")}}function fV(t,n){if(t&1&&C(0,uV,1,2)(1,mV,1,1),t&2){let e=x();w(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function pV(t,n){t&1&&b(0,", ")}function hV(t,n){if(t&1&&(b(0),C(1,pV,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ti(" ",e.value," ",e.key),f(),w(i!==r-1?1:-1)}}function gV(t,n){t&1&&Ee(0,"img",6)}function vV(t,n){t&1&&Ee(0,"img",7)}function bV(t,n){t&1&&Ee(0,"img",8)}function _V(t,n){t&1&&Ee(0,"img",9)}function yV(t,n){if(t&1&&(me(0,"p"),b(1),ge()),t&2){let e=n.$implicit;f(),re(e)}}var pf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(De)}status=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Ce],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(me(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,dV,1,1,"img",4),b(5),C(6,fV,2,1),ge(),me(7,"p"),de(8,hV,2,3,null,null,lV),Bn(10,"keyvalue"),ge()(),me(11,"div",5),C(12,gV,1,0,"img",6),C(13,vV,1,0,"img",7)(14,bV,1,0,"img",8)(15,_V,1,0,"img",9),ge()(),de(16,yV,2,1,"p",null,$e),ge()),e&2){let r;f(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),f(),we(" ",i.status().name," "),f(),w((i.status().remainingTurns??0)>0?6:-1),f(2),ue(Gs(10,5,i.status().additionalStats)),f(4),w(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),f(),w((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),f(3),ue(i.systemData==null?null:i.systemData.textFields)}},dependencies:[Ri],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var D_=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(D_||{});function xV(t,n){if(t&1&&Ee(0,"img",2),t&2){let e=x();je("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function CV(t,n){if(t&1&&(me(0,"p"),b(1),ge()),t&2){let e=n.$implicit;f(),re(e)}}var hf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(De)}name=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Ce],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"div",1),C(2,xV,1,1,"img",2),me(3,"span"),b(4),ge()(),de(5,CV,2,1,"p",null,$e),ge()),e&2&&(f(2),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),f(2),re(i.name()),f(),ue(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var wV=t=>({opacity50:t}),DV=t=>({droppableTextColor:t}),Zc=()=>[],EV=(t,n)=>n.key;function SV(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function IV(t,n){if(t&1&&b(0),t&2){let e=x();we(" (",e.item().uses,") ")}}function MV(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,ze)("title",i)}}function TV(t,n){if(t&1&&C(0,MV,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function kV(t,n){if(t&1&&de(0,TV,1,1,null,null,vn),t&2){let e=x();ue(e.item().engravings)}}function AV(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getTagByName(i))==null?null:e.spriteURL,ze)("title",i)}}function RV(t,n){if(t&1&&C(0,AV,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function OV(t,n){if(t&1&&de(0,RV,1,1,null,null,vn),t&2){let e=x();ue(e.item().tags)}}function NV(t,n){if(t&1&&b(0),t&2){let e=x();we(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function PV(t,n){t&1&&E(0,"img",8)}function FV(t,n){t&1&&E(0,"img",9)}function LV(t,n){t&1&&E(0,"img",10)}function BV(t,n){if(t&1&&(v(0,"div",14)(1,"div"),b(2),g(),E(3,"stat-with-buff-icon",15),g()),t&2){let e=n.$implicit;f(2),re(e.key),f(),M("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function VV(t,n){if(t&1&&(de(0,BV,4,5,"div",14,EV),Bn(2,"keyvalue")),t&2){let e=x(3);ue(no(2,0,e.item().stats,e.sortStats))}}function jV(t,n){if(t&1&&(b(0," \xA0-\xA0"),E(1,"stat-with-buff-icon",17)),t&2){let e,i,r=x(4);f(),M("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function UV(t,n){if(t&1&&(v(0,"div",14)(1,"div"),b(2,"Rng"),g(),v(3,"div",16),E(4,"stat-with-buff-icon",17),C(5,jV,2,3),g()()),t&2){let e,i,r,o=x(3);f(4),M("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),f(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function HV(t,n){t&1&&b(0," Square ")}function zV(t,n){t&1&&b(0," Cross ")}function $V(t,n){t&1&&b(0," Saltire ")}function GV(t,n){t&1&&b(0," Star ")}function WV(t,n){if(t&1&&(v(0,"div",14)(1,"div"),b(2,"Shp"),g(),v(3,"div"),C(4,HV,1,0)(5,zV,1,0)(6,$V,1,0)(7,GV,1,0),g()()),t&2){let e,i=x(3);f(4),w((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function qV(t,n){t&1&&b(0," Quantity ")}function ZV(t,n){t&1&&b(0," Uses ")}function YV(t,n){if(t&1&&b(0),t&2){let e=x(4);we(" ",e.item().uses," ")}}function KV(t,n){t&1&&b(0," /\xA0 ")}function QV(t,n){if(t&1&&(C(0,KV,1,0),E(1,"stat-with-buff-icon",15)),t&2){let e=x(4);w((e.item().uses??0)>0?0:-1),f(),M("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function XV(t,n){if(t&1&&(v(0,"div",14)(1,"div"),C(2,qV,1,0)(3,ZV,1,0),g(),v(4,"div",16),C(5,YV,1,1),C(6,QV,2,5),g()()),t&2){let e=x(3);f(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),f(3),w((e.item().uses??0)>0?5:-1),f(),w((e.item().maxUses??0)>0?6:-1)}}function JV(t,n){if(t&1&&(E(0,"mat-divider"),v(1,"div",13),C(2,VV,3,3),C(3,UV,6,4,"div",14),C(4,WV,8,1,"div",14),C(5,XV,7,3,"div",14),g()),t&2){let e,i=x(2);f(2),w(((i.systemData==null?null:i.systemData.utilizedStats)??_n(4,Zc)).length>0||i.hasNonZeroStatValue()?2:-1),f(),w((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),f(),w(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),f(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function ej(t,n){if(t&1&&E(0,"engraving",18),t&2){let e=n.$implicit;M("name",e)}}function tj(t,n){if(t&1&&(v(0,"p"),b(1),g()),t&2){let e=n.$implicit;f(),re(e)}}function nj(t,n){if(t&1&&E(0,"img",19),t&2){let e=x(3);M("src",e.systemData==null?null:e.systemData.graphicUrl,ze)}}function ij(t,n){if(t&1&&(E(0,"mat-divider"),de(1,ej,1,1,"engraving",18,vn),de(3,tj,2,1,"p",null,$e),C(5,nj,1,1,"img",19)),t&2){let e=x(2);f(),ue(e.item().engravings),f(2),ue(e.systemData==null?null:e.systemData.textFields),f(2),w(((e.systemData==null?null:e.systemData.graphicUrl)??"").length>0?5:-1)}}function rj(t,n){if(t&1&&(v(0,"div",11),C(1,JV,6,5),C(2,ij,6,1),g()),t&2){let e,i=x();f(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??_n(2,Zc)).length>0?1:-1),f(),w(((i.systemData==null?null:i.systemData.textFields)??_n(3,Zc)).length>0||((i.systemData==null?null:i.systemData.graphicUrl)??"").length>0?2:-1)}}function oj(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),b(3,"Item Range Not Visible"),g()())}function aj(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),b(3,"Item Not Found In Inventory"),g()())}function sj(t,n){if(t&1&&(E(0,"mat-divider"),C(1,oj,4,0,"div",20),C(2,aj,4,0,"div",20)),t&2){let e=x();f(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),f(),w(e.item().isNotInInventory?2:-1)}}var gf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(De)}ItemRangeShape=D_;item=fe.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Ce],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(v(0,"div",0),Y("click",function(){return i.toggleExpansion()}),v(1,"div",1)(2,"div",2)(3,"div",3),C(4,SV,1,1,"img",4),v(5,"div",5),b(6),C(7,IV,1,1),g(),C(8,kV,2,0),C(9,OV,2,0),g(),v(10,"div",6),C(11,NV,1,1),b(12),g()(),v(13,"div",7),C(14,PV,1,0,"img",8),C(15,FV,1,0,"img",9),C(16,LV,1,0,"img",10),g()(),C(17,rj,3,4,"div",11),C(18,sj,3,2),g()),e&2&&(f(),M("ngClass",Xe(15,wV,!i.item().canEquip||i.item().isUsePrevented)),f(3),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),f(),M("ngClass",Xe(17,DV,i.item().isDroppable)),f(),we(" ",i.item().name," "),f(),w((i.item().uses??0)>0?7:-1),f(),w((i.item().engravings??_n(19,Zc)).length>0?8:-1),f(),w((i.item().tags??_n(20,Zc)).length>0?9:-1),f(2),w(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),f(),Ti(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),f(2),w(i.item().isUsePrevented?14:-1),f(),w(i.item().isDroppable?15:-1),f(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),f(),w(i.isExpanded?17:-1),f(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[li,Ha,Ai,hf,Ri],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function cj(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function lj(t,n){if(t&1&&(v(0,"div",5),b(1),g()),t&2){let e=x();f(),we(" ",e.getAdditionalStatsText()," ")}}function dj(t,n){t&1&&E(0,"img",7)}function uj(t,n){if(t&1&&(v(0,"p"),b(1),g()),t&2){let e=n.$implicit;f(),re(e)}}function mj(t,n){if(t&1&&(E(0,"mat-divider"),de(1,uj,2,1,"p",null,$e)),t&2){let e=x();f(),ue(e.systemData==null?null:e.systemData.textFields)}}var vf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(De)}skill=fe.required();expanded=fe(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Ce],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,cj,1,1,"img",4),b(5),g(),C(6,lj,2,1,"div",5),g(),v(7,"div",6),C(8,dj,1,0,"img",7),g()(),C(9,mj,3,0),g()),e&2&&(f(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),f(),we(" ",i.skill().name," "),f(),w(i.getAdditionalStatsText().length>0?6:-1),f(2),w(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),f(),w(i.expanded()?9:-1))},dependencies:[li],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var fj=t=>({flipHorz:t}),bf=t=>({rotate90:t}),SI=()=>[],E_=(t,n)=>n.key;function pj(t,n){if(t&1&&(v(0,"div",0),E(1,"img",32),g()),t&2){let e=x();f(),M("src",e.unit().sprite.portraitURL,ze)}}function hj(t,n){if(t&1&&b(0),t&2){let e=x();we(" Lvl. ",e.unit().stats.level," ")}}function gj(t,n){if(t&1&&b(0),t&2){let e,i=x();we(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function vj(t,n){if(t&1&&E(0,"img",6),t&2){let e,i=x();M("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,ze)}}function bj(t,n){if(t&1&&(v(0,"div",10)(1,"div",33)(2,"div",34),b(3),g(),v(4,"div",35),E(5,"div",36)(6,"div",37),g()()()),t&2){let e=x();M("title",e.unit().player),f(3),re(e.unit().player)}}function _j(t,n){if(t&1&&(v(0,"p",41),b(1),g()),t&2){let e=n.$implicit;f(),re(e)}}function yj(t,n){if(t&1&&de(0,_j,2,1,"p",41,$e),t&2){let e=x(2);ue(e.unit().textFields)}}function xj(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=x(3);M("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function Cj(t,n){if(t&1&&de(0,xj,1,3,"text-fields-with-labeled-header",42,$e),t&2){let e=x(2);ue(e.unit().classes)}}function wj(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",40),t&2){let e=x(2);M("titleHref",e.unit().characterApplicationURL)}}function Dj(t,n){if(t&1&&(v(0,"div",13),C(1,yj,2,0),E(2,"text-fields-with-labeled-header",38),C(3,Cj,2,0),E(4,"text-fields-with-labeled-header",39),C(5,wj,1,1,"text-fields-with-labeled-header",40),g()),t&2){let e,i=x();f(),w(i.unit().textFields?1:-1),f(),M("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),f(),w(i.unit().classes?3:-1),f(),M("title",i.unit().movementType),f(),w(i.unit().characterApplicationURL?5:-1)}}function Ej(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),b(2,"Exp"),g(),v(3,"div"),b(4),g()()),t&2){let e=x();f(4),re(e.unit().stats.experience)}}function Sj(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),b(2,"Money"),g(),E(3,"currency",43),g()),t&2){let e=x();f(3),M("amount",e.unit().stats.heldCurrency)}}function Ij(t,n){if(t&1&&E(0,"unit-tag",47),t&2){let e=n.$implicit;M("tag",e)}}function Mj(t,n){if(t&1&&(v(0,"div",23)(1,"div",44),E(2,"img",45),g(),v(3,"div",46),de(4,Ij,1,1,"unit-tag",47,$e),g()()),t&2){let e=x();f(4),ue(e.unit().tags)}}function Tj(t,n){if(t&1&&(v(0,"div",24)(1,"div",48),E(2,"img",49),g(),v(3,"div",34)(4,"p"),b(5),g()()()),t&2){let e=x();f(5),re(e.unit().behavior)}}function kj(t,n){if(t&1&&E(0,"unit-status-condition",53),t&2){let e=n.$implicit;M("status",e)}}function Aj(t,n){if(t&1&&(v(0,"div",25)(1,"div",50),E(2,"img",51),g(),v(3,"div",52),de(4,kj,1,1,"unit-status-condition",53,$e),g()()),t&2){let e=x();f(4),ue(e.unit().statusConditions)}}function Rj(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function Oj(t,n){if(t&1&&(v(0,"div",29),de(1,Rj,1,3,"modified-unit-stat",54,E_),Bn(3,"keyvalue"),g()),t&2){let e=x();f(),ue(no(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function Nj(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function Pj(t,n){if(t&1&&(v(0,"div",29),de(1,Nj,1,3,"modified-unit-stat",54,E_),Bn(3,"keyvalue"),g()),t&2){let e=x();f(),ue(no(3,0,e.unit().stats.system,e.sortModifiedUnitStat))}}function Fj(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function Lj(t,n){if(t&1&&(v(0,"div",29),de(1,Fj,1,3,"modified-unit-stat",54,E_),Bn(3,"keyvalue"),g()),t&2){let e=x();f(),ue(no(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function Bj(t,n){if(t&1&&(v(0,"h3"),b(1),g()),t&2){let e=x().$index,i=x(2);f(),re(i.getInventorySubsectionLabel(e))}}function Vj(t,n){if(t&1&&E(0,"inventory-item",56),t&2){let e=n.$implicit;M("item",e)}}function jj(t,n){if(t&1&&(v(0,"div",57)(1,"span"),b(2),g()()),t&2){let e=x().$implicit;f(),rt("opacity",.5),f(),we("Empty x",e.emptySlotCount)}}function Uj(t,n){if(t&1&&(v(0,"div",55),C(1,Bj,2,1,"h3"),de(2,Vj,1,1,"inventory-item",56,$e),C(4,jj,3,3,"div",57),g()),t&2){let e=n.$implicit,i=n.$index,r=x(2);f(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),f(),ue(e.items),f(2),w(e.emptySlotCount>0?4:-1)}}function Hj(t,n){if(t&1&&de(0,Uj,5,2,"div",55,$e),t&2){let e,i=x();ue((e=i.unit().inventory)==null?null:e.subsections)}}function zj(t,n){if(t&1&&(v(0,"h3"),b(1),g()),t&2){let e=x().$index,i=x(3);f(),re(i.getSkillSubsectionLabel(e))}}function $j(t,n){if(t&1&&E(0,"unit-skill",60),t&2){let e=n.$implicit;M("skill",e)}}function Gj(t,n){if(t&1&&(v(0,"div",55),C(1,zj,2,1,"h3"),de(2,$j,1,1,"unit-skill",60,$e),g()),t&2){let e=n.$implicit,i=n.$index,r=x(3);f(),w(r.getSkillSubsectionLabel(i).length>0?1:-1),f(),ue(e.skills)}}function Wj(t,n){if(t&1&&de(0,Gj,4,1,"div",55,$e),t&2){let e=x(2);ue(e.unit().skillSubsections)}}function qj(t,n){if(t&1){let e=bn();E(0,"mat-divider"),v(1,"div",58)(2,"div",59)(3,"button",8),Y("click",function(){Ot(e);let r=x();return Nt(r.toggleSkillsExpansion())}),E(4,"img",9),g(),v(5,"h2"),b(6),g()(),C(7,Wj,2,0),g()}if(t&2){let e=x();f(3),M("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),f(),yt(Xe(5,bf,e.isSkillsInfoExpanded)),f(2),re(e.getSkillsLabel()),f(),w(e.isSkillsInfoExpanded?7:-1)}}var _f=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(De)}unit=fe.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Ce],decls:52,vars:42,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src","ngClass"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(C(0,pj,2,1,"div",0),v(1,"div",1),E(2,"img",2),v(3,"hgroup",3)(4,"h1",4),b(5),g(),v(6,"p",5),C(7,hj,1,1),C(8,gj,1,1),g()(),C(9,vj,1,1,"img",6),g(),v(10,"div",7)(11,"button",8),Y("click",function(){return i.toggleUnitInfoExpansion()}),E(12,"img",9),g(),C(13,bj,7,2,"div",10),v(14,"button",11),E(15,"img",12),g()(),C(16,Dj,6,6,"div",13),v(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),b(21,"HP"),g(),v(22,"div",18)(23,"span",19),b(24),g(),v(25,"span",20),b(26),g()()(),E(27,"unit-hp-bar",21),g(),C(28,Ej,5,1,"div",22),C(29,Sj,4,1,"div",22),g(),C(30,Mj,6,0,"div",23),C(31,Tj,6,1,"div",24),C(32,Aj,6,0,"div",25),v(33,"div",26)(34,"div",27)(35,"button",8),Y("click",function(){return i.toggleStatExpansion()}),E(36,"img",9),g(),v(37,"h2"),b(38,"Stats"),g()(),v(39,"div",28),C(40,Oj,4,3,"div",29),C(41,Pj,4,3,"div",29),C(42,Lj,4,3,"div",29),g()(),E(43,"mat-divider"),v(44,"div",30)(45,"div",31)(46,"button",8),Y("click",function(){return i.toggleInventoryExpansion()}),E(47,"img",9),g(),v(48,"h2"),b(49),g()(),C(50,Hj,2,0),g(),C(51,qj,8,7)),e&2){let r;w(i.unit().sprite.portraitURL?0:-1),f(2),M("src",i.unit().sprite.spriteURL,ze)("ngClass",Xe(32,fj,i.shouldFlipUnitSprite())),f(3),re(i.unit().name),f(2),w(i.unit().stats.level>0?7:-1),f(),w(i.unit().classes?8:-1),f(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),f(2),M("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),f(),yt(Xe(34,bf,i.isUnitInfoExpanded)),f(),w(i.unit().player?13:-1),f(3),w(i.isUnitInfoExpanded?16:-1),f(8),re(i.unit().stats.hp.current),f(2),we("/ ",i.unit().stats.hp.maximum),f(),M("percentage",i.unit().stats.hp.percentage),f(),w((i.unit().stats.experience??0)>0?28:-1),f(),w((i.unit().stats.heldCurrency??0)>0?29:-1),f(),w((i.unit().tags??_n(36,SI)).length>0?30:-1),f(),w(i.unit().behavior?31:-1),f(),w((i.unit().statusConditions??_n(37,SI)).length>0?32:-1),f(3),M("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),f(),yt(Xe(38,bf,i.isStatsInfoExpanded)),f(4),w(i.unit().stats.combat?40:-1),f(),w(i.unit().stats.system?41:-1),f(),w(i.unit().stats.general?42:-1),f(4),M("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),f(),yt(Xe(40,bf,i.isInventoryExpanded)),f(2),re(i.getInventoryLabel()),f(),w(i.isInventoryExpanded?50:-1),f(),w(i.unit().hasSkills?51:-1)}},dependencies:[Sc,lf,df,uf,mf,ff,pf,li,gf,vf,Ai,Ri],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var Zj=["unitAutocompleteInput"],Yj=(t,n)=>n.name;function Kj(t,n){if(t&1&&(v(0,"mat-option",5)(1,"div",7),E(2,"img",8),v(3,"div"),b(4),g()()()),t&2){let e=n.$implicit;M("value",e),f(2),M("src",e.sprite.spriteURL,ze),f(2),re(e.name)}}function Qj(t,n){if(t&1&&E(0,"unit-sidenav-display",6),t&2){let e=x();M("unit",e.selectedUnit.value)}}var yf=class t{constructor(n){this.dataService=n;this.dataService=u(De),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new Mb(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(B(De))};static \u0275cmp=I({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Qe(Zj,5),e&2){let r;H(r=z())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(v(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),Y("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),v(5,"mat-autocomplete",4,1),de(7,Kj,5,3,"mat-option",5,Yj),g()()(),C(9,Qj,1,1,"unit-sidenav-display",6),g()),e&2){let r=Xt(6);f(3),M("formControl",i.selectedUnit)("matAutocomplete",r),f(2),M("displayWith",i.formatAutocompleteDisplayValue),f(2),ue(i.filteredUnits),f(2),w(i.selectedUnit.value?9:-1)}},dependencies:[yS,vS,Im,dS,uS,Vc,Uc,vo,Pm,Nm,EI,DI,ja,w_,xS,Tb,_f],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var xf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"map-tiles-view works!"),ge())},encapsulation:2})};var Xj=["*"];var Jj=["unscopedContent"],eU=["text"],tU=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],nU=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var iU=new D("ListOption"),rU=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),oU=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),I_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),II=(()=>{class t{_listOption=u(iU,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),aU=(()=>{class t extends II{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ke]})}return t})(),M_=(()=>{class t extends II{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ke]})}return t})(),sU=new D("MAT_LIST_CONFIG"),S_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ot(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ot(e))}_disabled=F(!1);_defaultOptions=u(sU,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:1,hostBindings:function(i,r){i&2&&xe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),cU=(()=>{class t{_elementRef=u(V);_ngZone=u(L);_listBase=u(S_,{optional:!0});_platform=u(Me);_hostElement;_isButtonElement;_noopAnimations=nt();_avatars;_icons;set lines(e){this._explicitLines=oi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ot(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ot(e))}_disabled=F(!1);_subscriptions=new ve;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(gt).load(ai);let e=u(Sa,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new po(this,this._ngZone,this._hostElement,this._platform,u(oe)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ut(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,contentQueries:function(i,r,o){if(i&1&&Tt(o,aU,4)(o,M_,4),i&2){let a;H(a=z())&&(r._avatars=a),H(a=z())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(xe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var MI=(()=>{class t extends S_{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ae([{provide:S_,useExisting:t}]),ke],ngContentSelectors:Xj,decls:1,vars:0,template:function(i,r){i&1&&(Se(),U(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`],encapsulation:2,changeDetection:0})}return t})();var TI=(()=>{class t extends cU{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ot(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Tt(o,oU,5)(o,rU,5)(o,I_,5),i&2){let a;H(a=z())&&(r._lines=a),H(a=z())&&(r._titles=a),H(a=z())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Qe(Jj,5)(eU,5),i&2){let o;H(o=z())&&(r._unscopedContent=o.first),H(o=z())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ke],ngContentSelectors:nU,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Se(tU),U(0),v(1,"span",1),U(2,1),U(3,2),v(4,"span",2,0),Y("cdkObserveContent",function(){return r._updateItemLines(!0)}),U(6,3),g()(),U(7,4),U(8,5),E(9,"div",3))},dependencies:[Ku],encapsulation:2,changeDetection:0})}return t})();var kI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Qu,Ia,cf,Ue,GE]})}return t})();function AI(t){return Error(`Unable to find icon with the name "${t}"`)}function dU(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function RI(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function OI(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ui=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},PI=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Ui(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(It.HTML,r);if(!a)throw OI(r);let s=Ca(a);return this._addSvgIconConfig(e,i,new Ui("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Ui(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(It.HTML,i);if(!o)throw OI(i);let a=Ca(o);return this._addSvgIconSetConfig(e,new Ui("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(It.RESOURCE_URL,e);if(!i)throw RI(e);let r=this._cachedIconsByUrl.get(i);return r?K(Cf(r)):this._loadSvgIconFromConfig(new Ui(e,null)).pipe(pt(o=>this._cachedIconsByUrl.set(i,o)),J(o=>Cf(o)))}getNamedSvgIcon(e,i=""){let r=NI(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):ns(AI(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?K(Cf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(J(i=>Cf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return K(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Nr(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(It.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),K(null)})));return os(o).pipe(J(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw AI(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(pt(i=>e.svgText=i),J(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?K(null):this._fetchIcon(e).pipe(pt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Ca("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Ca("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw dU();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(It.RESOURCE_URL,i);if(!a)throw RI(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(J(l=>Ca(l)),Pr(()=>this._inProgressUrlFetches.delete(a)),as());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(NI(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return uU(o)?new Ui(o.url,null,o.options):new Ui(o,null)}}static \u0275fac=function(i){return new(i||t)(G(Ni,8),G(pv),G(se,8),G(zt))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Cf(t){return t.cloneNode(!0)}function NI(t,n){return t+":"+n}function uU(t){return!!(t.url&&t.options)}var mU=["*"],fU=new D("MAT_ICON_DEFAULT_OPTIONS"),pU=new D("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(se),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),FI=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],hU=FI.map(t=>`[${t}]`).join(", "),gU=/^url\(['"]?#(.*?)['"]?\)$/,LI=(()=>{class t{_elementRef=u(V);_iconRegistry=u(PI);_location=u(pU);_errorHandler=u(zt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ve.EMPTY;constructor(){let e=u(new ki("aria-hidden"),{optional:!0}),i=u(fU,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(hU),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)FI.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(gU):null;if(l){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(mt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),yt(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ne],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:mU,decls:1,vars:0,template:function(i,r){i&1&&(Se(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})();var vU=()=>["../.."],bU=t=>[t,"convoy"],_U=t=>[t,"shop"],yU=t=>[t,"map","analyze"];function xU(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),b(3,"Google Sheets"),g(),v(4,"div",5)(5,"mat-icon"),b(6,"open_in_new"),g()()()),t&2){let e=x();M("href",e.getGoogleSheetUrl(),ze)}}function CU(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),b(3,"Chapter Post"),g(),v(4,"div",5)(5,"mat-icon"),b(6,"open_in_new"),g()()()),t&2){let e=x();M("href",e.chapterPostUrl(),ze)}}function wU(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),b(3,"Convoy"),g()()),t&2){let e=x();M("routerLink",Xe(1,bU,`/${e.teamName}`))}}function DU(t,n){if(t&1&&(v(0,"a",2),E(1,"img",6),v(2,"span",4),b(3,"Shop"),g()()),t&2){let e=x();M("routerLink",Xe(1,_U,`/${e.teamName}`))}}function EU(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),b(3,"Map Analyzer Tool"),g()()),t&2){let e=x();M("routerLink",Xe(1,yU,`/${e.teamName}`))}}var wf=class t{constructor(n){this.activatedRoute=n;this.activatedRoute=u(kt)}googleWorksheetID=fe(void 0);chapterPostUrl=fe(void 0);showConvoyLink=fe(!1);showShopLink=fe(!1);showMapAnalyzerLink=fe(!1);teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(B(kt))};static \u0275cmp=I({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:11,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list"),C(2,xU,7,1,"a",1),C(3,CU,7,1,"a",1),C(4,wU,4,3,"a",2),C(5,DU,4,3,"a",2),C(6,EU,4,3,"a",2),v(7,"a",2),E(8,"img",3),v(9,"span",4),b(10,"Home"),g()()()()),e&2&&(f(2),w((i.googleWorksheetID()??"").length>0?2:-1),f(),w((i.chapterPostUrl()??"").length>0?3:-1),f(),w(i.showConvoyLink()?4:-1),f(),w(i.showShopLink()?5:-1),f(),w(i.showMapAnalyzerLink()?6:-1),f(),M("routerLink",_n(6,vU)))},dependencies:[kI,MI,TI,M_,I_,_a,LI],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var BI={extension:{type:Q.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-MSZVPQBM.js")}};var VI={extension:{type:Q.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-N2UPVA7J.js")}};var Df;function jI(t){return Df!==void 0||(Df=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??el.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Ge.get().getWebGLRenderingContext())return!1;let i=Ge.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Df}var Ef;async function UI(t={}){return Ef!==void 0||(Ef=await(async()=>{let n=Ge.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ef}var HI=["webgl","webgpu","canvas"];async function zI(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),HI.forEach(o=>{o!==t.preference&&n.push(o)})):n=HI.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await UI()){let{WebGPURenderer:s}=await import("./chunk-Y7AKAFQQ.js");e=s,i=_(_({},t),t.webgpu);break}else if(a==="webgl"&&jI(t.failIfMajorPerformanceCaveat??el.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-43YUDAVE.js");e=s,i=_(_({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-JJ6LZN4N.js");e=s,i=_(_({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var Yc=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};Yc.extension=Q.Application;var Kc=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,B_.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?zf.shared:new zf,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};Kc.extension=Q.Application;Kt.add(Yc);Kt.add(Kc);var SU=(()=>{let t=class T_{constructor(...e){this.stage=new Co,e[0]!==void 0&&Hf(Uf,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=_({},e),this.stage||(this.stage=new Co),this.renderer=await zI(e),T_._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Hf(Uf,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=T_._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),Sf=SU;Kt.handleByList(Q.Application,Sf._plugins);Kt.add(U_);var If={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let p=n[m].match(/^[a-z]+/gm)[0],h=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),y={};for(let A in h){let k=h[A].split("="),N=k[0],Ie=k[1].replace(/"/gm,""),at=parseFloat(Ie),dt=isNaN(at)?Ie:at;y[N]=dt}e[p].push(y)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let c={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let l=e.char;for(let m=0;m<l.length;m++){let p=l[m],h=parseInt(p.id,10),y=p.letter??p.char??String.fromCharCode(h);y==="space"&&(y=" "),c[h]=y,i.chars[y]={id:h,page:parseInt(p.page,10)||0,x:parseInt(p.x,10),y:parseInt(p.y,10),width:parseInt(p.width,10),height:parseInt(p.height,10),xOffset:parseInt(p.xoffset,10),yOffset:parseInt(p.yoffset,10),xAdvance:parseInt(p.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let p=parseInt(d[m].first,10),h=parseInt(d[m].second,10),y=parseInt(d[m].amount,10);i.chars[c[h]]&&(i.chars[c[h]].kerning[c[p]]=y)}return i}};var k_={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let l=0;l<o.length;l++)n.pages.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});let c={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let l=0;l<a.length;l++){let d=a[l],m=parseInt(d.getAttribute("id"),10),p=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);p==="space"&&(p=" "),c[m]=p,n.chars[p]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let l=0;l<s.length;l++){let d=parseInt(s[l].getAttribute("first"),10),m=parseInt(s[l].getAttribute("second"),10),p=parseInt(s[l].getAttribute("amount"),10);n.chars[c[m]]&&(n.chars[c[m]].kerning[c[d]]=p)}return n}};var A_={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?k_.test(Ge.get().parseXML(t)):!1},parse(t){return k_.parse(Ge.get().parseXML(t))}};var IU=[".xml",".fnt"],$I={extension:{type:Q.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},GI={extension:{type:Q.LoadParser,priority:dn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return IU.includes(un.extname(t).toLowerCase())},async testParse(t){return If.test(t)||A_.test(t)},async parse(t,n,e){let i=If.test(t)?If.parse(t):A_.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let p=0;p<o.length;++p){let h=o[p].file,y=un.join(un.dirname(r),h);y=V_(y,r),a.push({src:y,data:s})}let[c,{BitmapFont:l}]=await Promise.all([e.load(a),import("./chunk-CUCI5BXO.js")]),d=a.map(p=>c[p.src]);return new l({data:i,textures:d},r)},async load(t,n){return await(await Ge.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var Mf=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var WI={extension:{type:Q.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof Qc),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function Tf(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var qI={extension:{type:Q.DetectionParser,priority:1},test:async()=>Tf("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var ZI=["png","jpg","jpeg"],YI={extension:{type:Q.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...ZI],remove:async t=>t.filter(n=>!ZI.includes(n))};var MU="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function gr(t){return MU?!1:document.createElement("video").canPlayType(t)!==""}var KI={extension:{type:Q.DetectionParser,priority:0},test:async()=>gr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var QI={extension:{type:Q.DetectionParser,priority:0},test:async()=>gr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var XI={extension:{type:Q.DetectionParser,priority:0},test:async()=>gr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var JI={extension:{type:Q.DetectionParser,priority:0},test:async()=>Tf("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var TU=(()=>{let t=class kf{constructor(){this.loadOptions=_({},kf.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&en(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||en(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let c=this.parsers[s];if(c.load&&c.test?.(e,i,this)){a=c;break}}if(!a)return en(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let c=this.parsers[s];c.parse&&c.parse&&await c.testParse?.(o,i,this)&&(o=await c.parse(o,i,this)||o,r.parser=c)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?W(_(_({},kf.defaultOptions),this.loadOptions),{onProgress:i}):_(_(_({},kf.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:c,retryDelay:l}=r,d=0,m={},p=Xc(e),h=_r(e,k=>({alias:[k],src:k,data:{}})),y=h.reduce((k,N)=>k+(N.progressSize||1),0),A=h.map(async k=>{let N=un.toAbsolute(k.src);m[k.src]||(await this._loadAssetWithRetry(N,k,{onProgress:o,onError:a,strategy:s,retryCount:c,retryDelay:l},m),d+=k.progressSize||1,o&&o(d/y))});return await Promise.all(A),p?m[h[0].src]:m}async unload(e){let r=_r(e,o=>({alias:[o],src:o})).map(async o=>{let a=un.toAbsolute(o.src),s=this.promiseCache[a];if(s){let c=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(c,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?en("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&en(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:c,retryCount:l,retryDelay:d}=r,m=p=>new Promise(h=>setTimeout(h,p));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(p){delete this.promiseCache[e],delete o[i.src],a++;let h=c!=="retry"||a>l;if(c==="retry"&&!h){s&&s(p,i),await m(d);continue}if(c==="skip"){s&&s(p,i);return}s&&s(p,i);let y=new Error(`[Loader.load] Failed to load ${e}.
${p}`);throw p instanceof Error&&p.stack&&(y.stack=p.stack),y}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),eM=TU;function Dn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function En(t,n){let e=t.split("?")[0],i=un.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var kU=".json",AU="application/json",tM={extension:{type:Q.LoadParser,priority:dn.Low},name:"loadJson",id:"json",test(t){return Dn(t,AU)||En(t,kU)},async load(t){return await(await Ge.get().fetch(t)).json()}};var RU=".txt",OU="text/plain",nM={name:"loadTxt",id:"text",extension:{type:Q.LoadParser,priority:dn.Low,name:"loadTxt"},test(t){return Dn(t,OU)||En(t,RU)},async load(t){return await(await Ge.get().fetch(t)).text()}};var NU=["normal","bold","100","200","300","400","500","600","700","800","900"],PU=[".ttf",".otf",".woff",".woff2"],FU=["font/ttf","font/otf","font/woff","font/woff2"],LU=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function BU(t){let n=un.extname(t),r=un.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(LU)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var VU=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function jU(t){return VU.test(t)?t:encodeURI(t)}var iM={extension:{type:Q.LoadParser,priority:dn.Low},name:"loadWebFont",id:"web-font",test(t){return Dn(t,FU)||En(t,PU)},async load(t,n){let e=Ge.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??BU(t),o=n.data?.weights?.filter(s=>NU.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let c=o[s],l=new FontFace(r,`url('${jU(t)}')`,W(_({},a),{weight:c}));await l.load(),e.add(l),i.push(l)}return jt.has(`${r}-and-url`)?jt.get(`${r}-and-url`).entries.push({url:t,faces:i}):jt.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return en("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=jt.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{Ge.get().getFontFaceSet().delete(o)}),i.entries.length===0&&jt.remove(`${e}-and-url`)}};function za(t,n=1){let e=Hi.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function $a(t,n,e){t.label=e,t._sourceOrigin=e;let i=new Qc({source:t,label:e}),r=()=>{delete n.promiseCache[e],jt.has(e)&&jt.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(en("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(en("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var UU=".svg",HU="image/svg+xml",rM={extension:{type:Q.LoadParser,priority:dn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Dn(t,HU)||En(t,UU)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?$U(t):zU(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function zU(t,n,e,i){let r=await Ge.get().fetch(t),o=Ge.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,c=n.data?.resolution||za(t),l=Math.ceil(a*c),d=Math.ceil(s*c),m=Ge.get().createCanvas(l,d),p=m.getContext("2d");p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.drawImage(o,0,0,a*c,s*c);let k=n.data??{},{parseAsGraphicsContext:h}=k,y=jf(k,["parseAsGraphicsContext"]),A=new Jc(_({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:c},y));return $a(A,e,t)}async function $U(t){let e=await(await Ge.get().fetch(t)).text(),i=new H_;return i.svg(e),i}var GU=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function") return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`,Ga=null,R_=(()=>{class t{constructor(){Ga||(Ga=URL.createObjectURL(new Blob([GU],{type:"application/javascript"}))),this.worker=new Worker(Ga)}}return t.revokeObjectURL=function(){Ga&&(URL.revokeObjectURL(Ga),Ga=null)},t})();var WU=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`,Wa=null,oM=(()=>{class t{constructor(){Wa||(Wa=URL.createObjectURL(new Blob([WU],{type:"application/javascript"}))),this.worker=new Worker(Wa)}}return t.revokeObjectURL=function(){Wa&&(URL.revokeObjectURL(Wa),Wa=null)},t})();var aM=0,O_,N_=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new R_;e.addEventListener("message",i=>{e.terminate(),R_.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){O_===void 0&&(O_=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<O_&&(this._createdWorkers++,n=new oM().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[aM]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:aM++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},P_=new N_;var qU=[".jpeg",".jpg",".png",".webp",".avif"],ZU=["image/jpeg","image/png","image/webp","image/avif"];async function YU(t,n){let e=await Ge.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var Af={name:"loadTextures",id:"texture",extension:{type:Q.LoadParser,priority:dn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Dn(t,ZU)||En(t,qU)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await P_.isImageBitmapSupported()?i=await P_.loadImageBitmap(t,n):i=await YU(t,n):i=await new Promise((o,a)=>{i=Ge.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new Jc(_({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||za(t)},n.data));return $a(r,e,t)},unload(t){t.destroy(!0)}};var KU=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],F_,L_;function QU(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=JU(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function XU(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function JU(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function eH(){let t=[],n=[];for(let e of KU){let i=Ya.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;gr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var sM={name:"loadVideo",id:"video",extension:{type:Q.LoadParser,name:"loadVideo"},test(t){if(!F_||!L_){let{validVideoExtensions:i,validVideoMime:r}=eH();F_=i,L_=r}let n=Dn(t,L_),e=En(t,F_);return n||e},async load(t,n,e){let i=_(W(_({},Ya.defaultOptions),{resolution:n.data?.resolution||za(t),alphaMode:n.data?.alphaMode||await j_()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(c=>{let l=o[c];l!==void 0&&r.setAttribute(c,l)}),i.muted===!0&&(r.muted=!0),QU(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=Ya.MIME_TYPES[c]||`video/${c}`}return a.src=t,s&&(a.type=s),new Promise((c,l)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let h=new Ya(W(_({},i),{resource:r}));p(),n.data.preload&&await XU(r),c($a(h,e,t))}function m(h){p(),l(h)}function p(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var Rf={extension:{type:Q.ResolveParser,name:"resolveTexture"},test:Af.test,parse:t=>({resolution:parseFloat(Hi.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var cM={extension:{type:Q.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Hi.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Rf.parse};var Of=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Hi,this.loader=new eM,this.cache=jt,this._backgroundLoader=new Mf(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){en("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=_(_({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=Xc(n),r=_r(n).map(s=>{if(typeof s!="string"){let c=this.resolver.getAlias(s);return c.some(l=>!this.resolver.hasKey(l))&&this.add(s),Array.isArray(c)?c[0]:c}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,c=[],l=()=>{e?.(c.reduce((m,p)=>m+p,0)/s)},d=a.map((m,p)=>{let h=r[m],y=Object.values(h),k=[...new Set(y.flat())].reduce((N,Ie)=>N+(Ie.progressSize||1),0);return c.push(0),s+=k,this._mapLoadToResolve(h,N=>{c[p]=N*k,l()}).then(N=>{o[m]=N})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return jt.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=jt.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],c=[a.src];a.alias&&c.push(...a.alias),c.forEach(l=>{o[l]=s}),jt.set(c,s)}),o}async unload(n){this._initialized||await this.init();let e=_r(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=_r(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{jt.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},vr=new Of;Kt.handleByList(Q.LoadParser,vr.loader.parsers).handleByList(Q.ResolveParser,vr.resolver.parsers).handleByList(Q.CacheParser,vr.cache.parsers).handleByList(Q.DetectionParser,vr.detections);Kt.add(WI,YI,qI,JI,KI,QI,XI,tM,nM,iM,rM,Af,sM,GI,$I,Rf,cM);var lM={loader:Q.LoadParser,resolver:Q.ResolveParser,cache:Q.CacheParser,detection:Q.DetectionParser};Kt.handle(Q.Asset,t=>{let n=t.ref;Object.entries(lM).filter(([e])=>!!n[e]).forEach(([e,i])=>Kt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(lM).filter(e=>!!n[e]).forEach(e=>Kt.remove(n[e]))});Kt.add(BI,VI);var Nf=class t{segment=fe.required();pixiApp;constructor(){this.pixiApp=new Sf}async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}await vr.setPreferences({crossOrigin:"anonymous"}),await this.initializePixiApp(n),await this.AddMapParentContainer()}async ngOnChanges(){this.pixiApp.stage.children.length!==0&&(this.pixiApp.stage.removeChildren(),await this.AddMapParentContainer())}async initializePixiApp(n){await this.pixiApp.init({background:"#ffaadd",resizeTo:n}),n.appendChild(this.pixiApp.canvas)}async AddMapParentContainer(){let n=new Co;this.pixiApp.stage.addChild(n);let e=await this.loadExternalAsset(this.segment().imageURL),i=new $f(e);n.addChild(i),n.x=0,n.y=0}async loadExternalAsset(n){return await vr.load({src:n,parser:"texture"})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-segment"]],inputs:{segment:[1,"segment"]},features:[Ce],decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Ee(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:100%;width:100%}"]})};var tH=(t,n)=>n.title;function nH(t,n){t&1&&b(0," U ")}function iH(t,n){t&1&&E(0,"img",9)}function rH(t,n){t&1&&E(0,"img",10)}function oH(t,n){t&1&&E(0,"img",11)}function aH(t,n){t&1&&E(0,"img",12)}function sH(t,n){if(t&1){let e=bn();v(0,"button",13),Y("click",function(){let r=Ot(e).$implicit,o=x();return Nt(o.setCurrentSegment(r))}),b(1),g()}if(t&2){let e=n.$implicit;f(),re(e.title)}}function cH(t,n){if(t&1&&E(0,"map-segment",8),t&2){let e=x();M("segment",e.currentSegment)}}var Pf=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(kt),this.breakpointService=u(si),this.themeService=u(ci),this.teamDataService=u(De),this.loadDataForTeam()}currentSegment;async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment=n}static \u0275fac=function(e){return new(e||t)(B(kt),B(si),B(ci),B(De))};static \u0275cmp=I({type:t,selectors:[["map-view"]],decls:27,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentButtonRow"],["matButton","filled"],[3,"segment"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"],["matButton","filled",3,"click"]],template:function(e,i){if(e&1){let r=bn();v(0,"button",1),Y("click",function(){Ot(r);let a=Xt(4);return Nt(a.toggle())}),b(1,">"),g(),v(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),Ft(7,nH,1,0,"ng-template",4),E(8,"map-units-sidenav"),g(),v(9,"mat-tab"),Ft(10,iH,1,0,"ng-template",4),E(11,"map-tiles-sidenav"),g(),v(12,"mat-tab"),Ft(13,rH,1,0,"ng-template",4),b(14," Image download "),g(),v(15,"mat-tab"),Ft(16,oH,1,0,"ng-template",4),E(17,"links-sidenav",5),g(),v(18,"mat-tab"),Ft(19,aH,1,0,"ng-template",4),E(20,"map-dice-roller-sidenav"),g()()(),v(21,"mat-sidenav-content")(22,"div",6),de(23,sH,2,1,"button",7,tH),g(),E(25,"mat-divider"),C(26,cH,1,1,"map-segment",8),g()()}if(e&2){let r;f(3),M("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(14),M("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),f(6),ue((r=i.teamDataService.mapData().map)==null?null:r.segments),f(3),w(i.currentSegment!==void 0?26:-1)}},dependencies:[cb,PE,dm,yb,$E,_b,kE,yf,xf,Km,wf,Nf,TE,li],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}']})};var Ff=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"map-analysis-view works!"),ge())},encapsulation:2})};var Lf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"convoy-view works!"),ge())},encapsulation:2})};var Bf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"shop-view works!"),ge())},encapsulation:2})};var dM=[{path:"",component:cm,title:"Reddit Emblem Maps"},{path:":teamName/map",component:Pf,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:Ff,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Lf,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:Bf,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var uM={providers:[hh(),jv(dM)]};var Vf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&E(0,"router-outlet")},dependencies:[hc],encapsulation:2})};cv(Vf,uM).catch(t=>console.error(t));
