var gE=Object.defineProperty,vE=Object.defineProperties;var bE=Object.getOwnPropertyDescriptors;var og=Object.getOwnPropertySymbols;var yE=Object.prototype.hasOwnProperty,_E=Object.prototype.propertyIsEnumerable;var sg=(t,n,e)=>n in t?gE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,g=(t,n)=>{for(var e in n||={})yE.call(n,e)&&sg(t,e,n[e]);if(og)for(var e of og(n))_E.call(n,e)&&sg(t,e,n[e]);return t},G=(t,n)=>vE(t,bE(n));var st=null,wa=!1,hu=1,DE=null,Fe=Symbol("SIGNAL");function N(t){let n=st;return st=t,n}function Ca(){return st}var tr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function nr(t){if(wa)throw new Error("");if(st===null)return;st.consumerOnSignalRead(t);let n=st.producersTail;if(n!==void 0&&n.producer===t)return;let e,r=st.recomputing;if(r&&(e=n!==void 0?n.nextProducer:st.producers,e!==void 0&&e.producer===t)){st.producersTail=e,e.lastReadVersion=t.version;return}let i=t.consumersTail;if(i!==void 0&&i.consumer===st&&(!r||CE(i,st)))return;let o=Ei(st),s={producer:t,consumer:st,nextProducer:e,prevConsumer:i,lastReadVersion:t.version,nextConsumer:void 0};st.producersTail=s,n!==void 0?n.nextProducer=s:st.producers=s,o&&dg(t,s)}function ag(){hu++}function Mr(t){if(!(Ei(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===hu)){if(!t.producerMustRecompute(t)&&!Ci(t)){wi(t);return}t.producerRecomputeValue(t),wi(t)}}function pu(t){if(t.consumers===void 0)return;let n=wa;wa=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let r=e.consumer;r.dirty||wE(r)}}finally{wa=n}}function mu(){return st?.consumerAllowSignalWrites!==!1}function wE(t){t.dirty=!0,pu(t),t.consumerMarkedDirty?.(t)}function wi(t){t.dirty=!1,t.lastCleanEpoch=hu}function Pn(t){return t&&lg(t),N(t)}function lg(t){t.producersTail=void 0,t.recomputing=!0}function rr(t,n){N(n),t&&cg(t)}function cg(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Ei(t))do e=gu(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Ci(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,r=n.lastReadVersion;if(r!==e.version||(Mr(e),r!==e.version))return!0}return!1}function ir(t){if(Ei(t)){let n=t.producers;for(;n!==void 0;)n=gu(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function dg(t,n){let e=t.consumersTail,r=Ei(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!r)for(let i=t.producers;i!==void 0;i=i.nextProducer)dg(i.producer,i)}function gu(t){let n=t.producer,e=t.nextProducer,r=t.nextConsumer,i=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!Ei(n)){let o=n.producers;for(;o!==void 0;)o=gu(o)}return e}function Ei(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ro(t){DE?.(t)}function CE(t,n){let e=n.producersTail;if(e!==void 0){let r=n.producers;do{if(r===t)return!0;if(r===e)break;r=r.nextProducer}while(r!==void 0)}return!1}function ko(t,n){return Object.is(t,n)}function No(t,n){let e=Object.create(EE);e.computation=t,n!==void 0&&(e.equal=n);let r=()=>{if(Mr(e),nr(e),e.value===yn)throw e.error;return e.value};return r[Fe]=e,Ro(e),r}var Ir=Symbol("UNSET"),Sr=Symbol("COMPUTING"),yn=Symbol("ERRORED"),EE=G(g({},tr),{value:Ir,dirty:!0,error:null,equal:ko,kind:"computed",producerMustRecompute(t){return t.value===Ir||t.value===Sr},producerRecomputeValue(t){if(t.value===Sr)throw new Error("");let n=t.value;t.value=Sr;let e=Pn(t),r,i=!1;try{r=t.computation(),N(null),i=n!==Ir&&n!==yn&&r!==yn&&t.equal(n,r)}catch(o){r=yn,t.error=o}finally{rr(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function xE(){throw new Error}var ug=xE;function fg(t){ug(t)}function vu(t){ug=t}var IE=null;function bu(t,n){let e=Object.create(Oo);e.value=t,n!==void 0&&(e.equal=n);let r=()=>hg(e);return r[Fe]=e,Ro(e),[r,s=>Tr(e,s),s=>Ea(e,s)]}function hg(t){return nr(t),t.value}function Tr(t,n){mu()||fg(t),t.equal(t.value,n)||(t.value=n,SE(t))}function Ea(t,n){mu()||fg(t),Tr(t,n(t.value))}var Oo=G(g({},tr),{equal:ko,value:void 0,kind:"signal"});function SE(t){t.version++,ag(),pu(t),IE?.(t)}var yu=G(g({},tr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function _u(t){if(t.dirty=!1,t.version>0&&!Ci(t))return;t.version++;let n=Pn(t);try{t.cleanup(),t.fn()}finally{rr(t,n)}}function K(t){return typeof t=="function"}function xi(t){let e=t(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var xa=xi(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Ar(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var se=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(K(r))try{r()}catch(o){n=o instanceof xa?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{pg(o)}catch(s){n=n??[],s instanceof xa?n=[...n,...s.errors]:n.push(s)}}if(n)throw new xa(n)}}add(n){var e;if(n&&n!==this)if(this.closed)pg(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Ar(e,n)}remove(n){let{_finalizers:e}=this;e&&Ar(e,n),n instanceof t&&n._removeParent(this)}};se.EMPTY=(()=>{let t=new se;return t.closed=!0,t})();var Du=se.EMPTY;function Ia(t){return t instanceof se||t&&"closed"in t&&K(t.remove)&&K(t.add)&&K(t.unsubscribe)}function pg(t){K(t)?t():t.unsubscribe()}var Kt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ii={setTimeout(t,n,...e){let{delegate:r}=Ii;return r?.setTimeout?r.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ii;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Sa(t){Ii.setTimeout(()=>{let{onUnhandledError:n}=Kt;if(n)n(t);else throw t})}function Rr(){}var mg=wu("C",void 0,void 0);function gg(t){return wu("E",void 0,t)}function vg(t){return wu("N",t,void 0)}function wu(t,n,e){return{kind:t,value:n,error:e}}var kr=null;function Si(t){if(Kt.useDeprecatedSynchronousErrorHandling){let n=!kr;if(n&&(kr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:r}=kr;if(kr=null,e)throw r}}else t()}function bg(t){Kt.useDeprecatedSynchronousErrorHandling&&kr&&(kr.errorThrown=!0,kr.error=t)}var Nr=class extends se{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Ia(n)&&n.add(this)):this.destination=AE}static create(n,e,r){return new Ln(n,e,r)}next(n){this.isStopped?Eu(vg(n),this):this._next(n)}error(n){this.isStopped?Eu(gg(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Eu(mg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},ME=Function.prototype.bind;function Cu(t,n){return ME.call(t,n)}var xu=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(r){Ma(r)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(r){Ma(r)}else Ma(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Ma(e)}}},Ln=class extends Nr{constructor(n,e,r){super();let i;if(K(n)||!n)i={next:n??void 0,error:e??void 0,complete:r??void 0};else{let o;this&&Kt.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Cu(n.next,o),error:n.error&&Cu(n.error,o),complete:n.complete&&Cu(n.complete,o)}):i=n}this.destination=new xu(i)}};function Ma(t){Kt.useDeprecatedSynchronousErrorHandling?bg(t):Sa(t)}function TE(t){throw t}function Eu(t,n){let{onStoppedNotification:e}=Kt;e&&Ii.setTimeout(()=>e(t,n))}var AE={closed:!0,next:Rr,error:TE,complete:Rr};var Mi=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Et(t){return t}function Iu(...t){return Su(t)}function Su(t){return t.length===0?Et:t.length===1?t[0]:function(e){return t.reduce((r,i)=>i(r),e)}}var L=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let r=new t;return r.source=this,r.operator=e,r}subscribe(e,r,i){let o=kE(e)?e:new Ln(e,r,i);return Si(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(r){e.error(r)}}forEach(e,r){return r=yg(r),new r((i,o)=>{let s=new Ln({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)}[Mi](){return this}pipe(...e){return Su(e)(this)}toPromise(e){return e=yg(e),new e((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return t.create=n=>new t(n),t})();function yg(t){var n;return(n=t??Kt.Promise)!==null&&n!==void 0?n:Promise}function RE(t){return t&&K(t.next)&&K(t.error)&&K(t.complete)}function kE(t){return t&&t instanceof Nr||RE(t)&&Ia(t)}function NE(t){return K(t?.lift)}function X(t){return n=>{if(NE(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ee(t,n,e,r,i){return new Mu(t,n,e,r,i)}var Mu=class extends Nr{constructor(n,e,r,i,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var _g=xi(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var D=(()=>{class t extends L{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let r=new Ta(this,this);return r.operator=e,r}_throwIfClosed(){if(this.closed)throw new _g}next(e){Si(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(e)}})}error(e){Si(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:r}=this;for(;r.length;)r.shift().error(e)}})}complete(){Si(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:r,isStopped:i,observers:o}=this;return r||i?Du:(this.currentObservers=null,o.push(e),new se(()=>{this.currentObservers=null,Ar(o,e)}))}_checkFinalizedStatuses(e){let{hasError:r,thrownError:i,isStopped:o}=this;r?e.error(i):o&&e.complete()}asObservable(){let e=new L;return e.source=this,e}}return t.create=(n,e)=>new Ta(n,e),t})(),Ta=class extends D{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,n)}error(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&r!==void 0?r:Du}};var Be=class extends D{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:r}=this;if(n)throw e;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var Fo={now(){return(Fo.delegate||Date).now()},delegate:void 0};var Aa=class extends D{constructor(n=1/0,e=1/0,r=Fo){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;e||(r.push(n),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!n.closed;s+=r?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=e.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var Ra=class extends se{constructor(n,e){super()}schedule(n,e=0){return this}};var Po={setInterval(t,n,...e){let{delegate:r}=Po;return r?.setInterval?r.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Po;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ka=class extends Ra{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,r=0){return Po.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,e,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return e;e!=null&&Po.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,e);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Ar(r,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ti=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,r){return new this.schedulerActionCtor(this,n).schedule(r,e)}};Ti.now=Fo.now;var Na=class extends Ti{constructor(n,e=Ti.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,r){for(;n=e.shift();)n.unsubscribe();throw r}}};var Or=new Na(ka),Dg=Or;var ke=new L(t=>t.complete());function Oa(t){return t&&K(t.schedule)}function Tu(t){return t[t.length-1]}function Fa(t){return K(Tu(t))?t.pop():void 0}function _n(t){return Oa(Tu(t))?t.pop():void 0}function wg(t,n){return typeof Tu(t)=="number"?t.pop():n}function Eg(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(t,n||[])).next())})}function Cg(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Fr(t){return this instanceof Fr?(this.v=t,this):new Fr(t)}function xg(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(m){return Promise.resolve(m).then(p,f)}}function a(p,m){r[p]&&(i[p]=function(_){return new Promise(function(E,M){o.push([p,_,E,M])>1||l(p,_)})},m&&(i[p]=m(i[p])))}function l(p,m){try{c(r[p](m))}catch(_){h(o[0][3],_)}}function c(p){p.value instanceof Fr?Promise.resolve(p.value.v).then(d,f):h(o[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,m){p(m),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Ig(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Cg=="function"?Cg(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Pa=t=>t&&typeof t.length=="number"&&typeof t!="function";function La(t){return K(t?.then)}function Va(t){return K(t[Mi])}function ja(t){return Symbol.asyncIterator&&K(t?.[Symbol.asyncIterator])}function Ba(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function OE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ha=OE();function Ua(t){return K(t?.[Ha])}function za(t){return xg(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:r,done:i}=yield Fr(e.read());if(i)return yield Fr(void 0);yield yield Fr(r)}}finally{e.releaseLock()}})}function $a(t){return K(t?.getReader)}function Ce(t){if(t instanceof L)return t;if(t!=null){if(Va(t))return FE(t);if(Pa(t))return PE(t);if(La(t))return LE(t);if(ja(t))return Sg(t);if(Ua(t))return VE(t);if($a(t))return jE(t)}throw Ba(t)}function FE(t){return new L(n=>{let e=t[Mi]();if(K(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function PE(t){return new L(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function LE(t){return new L(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Sa)})}function VE(t){return new L(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Sg(t){return new L(n=>{BE(t,n).catch(e=>n.error(e))})}function jE(t){return Sg(za(t))}function BE(t,n){var e,r,i,o;return Eg(this,void 0,void 0,function*(){try{for(e=Ig(t);r=yield e.next(),!r.done;){let s=r.value;if(n.next(s),n.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=e.return)&&(yield o.call(e))}finally{if(i)throw i.error}}n.complete()})}function Dt(t,n,e,r=0,i=!1){let o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function Wa(t,n=0){return X((e,r)=>{e.subscribe(ee(r,i=>Dt(r,t,()=>r.next(i),n),()=>Dt(r,t,()=>r.complete(),n),i=>Dt(r,t,()=>r.error(i),n)))})}function Ga(t,n=0){return X((e,r)=>{r.add(t.schedule(()=>e.subscribe(r),n))})}function Mg(t,n){return Ce(t).pipe(Ga(n),Wa(n))}function Tg(t,n){return Ce(t).pipe(Ga(n),Wa(n))}function Ag(t,n){return new L(e=>{let r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Rg(t,n){return new L(e=>{let r;return Dt(e,n,()=>{r=t[Ha](),Dt(e,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){e.error(s);return}o?e.complete():e.next(i)},0,!0)}),()=>K(r?.return)&&r.return()})}function qa(t,n){if(!t)throw new Error("Iterable cannot be null");return new L(e=>{Dt(e,n,()=>{let r=t[Symbol.asyncIterator]();Dt(e,n,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function kg(t,n){return qa(za(t),n)}function Ng(t,n){if(t!=null){if(Va(t))return Mg(t,n);if(Pa(t))return Ag(t,n);if(La(t))return Tg(t,n);if(ja(t))return qa(t,n);if(Ua(t))return Rg(t,n);if($a(t))return kg(t,n)}throw Ba(t)}function Re(t,n){return n?Ng(t,n):Ce(t)}function U(...t){let n=_n(t);return Re(t,n)}function Au(t,n){let e=K(t)?t:()=>t,r=i=>i.error(e());return new L(n?i=>n.schedule(r,0,i):r)}function Lo(t){return!!t&&(t instanceof L||K(t.lift)&&K(t.subscribe))}var Pr=xi(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Og(t){return t instanceof Date&&!isNaN(t)}function q(t,n){return X((e,r)=>{let i=0;e.subscribe(ee(r,o=>{r.next(t.call(n,o,i++))}))})}var{isArray:HE}=Array;function UE(t,n){return HE(n)?t(...n):t(n)}function Za(t){return q(n=>UE(t,n))}var{isArray:zE}=Array,{getPrototypeOf:$E,prototype:WE,keys:GE}=Object;function Ya(t){if(t.length===1){let n=t[0];if(zE(n))return{args:n,keys:null};if(qE(n)){let e=GE(n);return{args:e.map(r=>n[r]),keys:e}}}return{args:t,keys:null}}function qE(t){return t&&typeof t=="object"&&$E(t)===WE}function Qa(t,n){return t.reduce((e,r,i)=>(e[r]=n[i],e),{})}function Vo(...t){let n=_n(t),e=Fa(t),{args:r,keys:i}=Ya(t);if(r.length===0)return Re([],n);let o=new L(ZE(r,n,i?s=>Qa(i,s):Et));return e?o.pipe(Za(e)):o}function ZE(t,n,e=Et){return r=>{Fg(n,()=>{let{length:i}=t,o=new Array(i),s=i,a=i;for(let l=0;l<i;l++)Fg(n,()=>{let c=Re(t[l],n),d=!1;c.subscribe(ee(r,f=>{o[l]=f,d||(d=!0,a--),a||r.next(e(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function Fg(t,n,e){t?Dt(e,t,n):n()}function Pg(t,n,e,r,i,o,s,a){let l=[],c=0,d=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},p=_=>c<r?m(_):l.push(_),m=_=>{o&&n.next(_),c++;let E=!1;Ce(e(_,d++)).subscribe(ee(n,M=>{i?.(M),o?p(M):n.next(M)},()=>{E=!0},void 0,()=>{if(E)try{for(c--;l.length&&c<r;){let M=l.shift();s?Dt(n,s,()=>m(M)):m(M)}h()}catch(M){n.error(M)}}))};return t.subscribe(ee(n,p,()=>{f=!0,h()})),()=>{a?.()}}function tt(t,n,e=1/0){return K(n)?tt((r,i)=>q((o,s)=>n(r,o,i,s))(Ce(t(r,i))),e):(typeof n=="number"&&(e=n),X((r,i)=>Pg(r,i,t,e)))}function Ka(t=1/0){return tt(Et,t)}function Lg(){return Ka(1)}function Dn(...t){return Lg()(Re(t,_n(t)))}function Lr(t){return new L(n=>{Ce(t()).subscribe(n)})}function Ru(...t){let n=Fa(t),{args:e,keys:r}=Ya(t),i=new L(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;Ce(e[d]).subscribe(ee(o,h=>{f||(f=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Qa(r,a):a),o.complete())}))}});return n?i.pipe(Za(n)):i}function Vr(t=0,n,e=Dg){let r=-1;return n!=null&&(Oa(n)?e=n:r=n),new L(i=>{let o=Og(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function xt(...t){let n=_n(t),e=wg(t,1/0),r=t;return r.length?r.length===1?Ce(r[0]):Ka(e)(Re(r,n)):ke}function ae(t,n){return X((e,r)=>{let i=0;e.subscribe(ee(r,o=>t.call(n,o,i++)&&r.next(o)))})}function Vg(t){return X((n,e)=>{let r=!1,i=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(ee(e,c=>{r=!0,i=c,o||Ce(t(c)).subscribe(o=ee(e,a,l))},()=>{s=!0,(!r||!o||o.closed)&&e.complete()}))})}function Xa(t,n=Or){return Vg(()=>Vr(t,n))}function jo(t){return X((n,e)=>{let r=null,i=!1,o;r=n.subscribe(ee(e,void 0,void 0,s=>{o=Ce(t(s,jo(t)(n))),r?(r.unsubscribe(),r=null,o.subscribe(e)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(e))})}function Ai(t,n){return K(n)?tt(t,n,1):tt(t,1)}function Xt(t,n=Or){return X((e,r)=>{let i=null,o=null,s=null,a=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}a()}e.subscribe(ee(r,c=>{o=c,s=n.now(),i||(i=n.schedule(l,t),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function jg(t){return X((n,e)=>{let r=!1;n.subscribe(ee(e,i=>{r=!0,e.next(i)},()=>{r||e.next(t),e.complete()}))})}function Xe(t){return t<=0?()=>ke:X((n,e)=>{let r=0;n.subscribe(ee(e,i=>{++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function Bg(){return X((t,n)=>{t.subscribe(ee(n,Rr))})}function Ri(t){return q(()=>t)}function ku(t,n){return n?e=>Dn(n.pipe(Xe(1),Bg()),e.pipe(ku(t))):tt((e,r)=>Ce(t(e,r)).pipe(Xe(1),Ri(e)))}function Nu(t,n=Or){let e=Vr(t,n);return ku(()=>e)}function Ja(t,n=Et){return t=t??YE,X((e,r)=>{let i,o=!0;e.subscribe(ee(r,s=>{let a=n(s);(o||!t(i,a))&&(o=!1,i=a,r.next(s))}))})}function YE(t,n){return t===n}function Hg(t=QE){return X((n,e)=>{let r=!1;n.subscribe(ee(e,i=>{r=!0,e.next(i)},()=>r?e.complete():e.error(t())))})}function QE(){return new Pr}function Bo(t){return X((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Vn(t,n){let e=arguments.length>=2;return r=>r.pipe(t?ae((i,o)=>t(i,o,r)):Et,Xe(1),e?jg(n):Hg(()=>new Pr))}function el(t){return t<=0?()=>ke:X((n,e)=>{let r=[];n.subscribe(ee(e,i=>{r.push(i),t<r.length&&r.shift()},()=>{for(let i of r)e.next(i);e.complete()},void 0,()=>{r=null}))})}function tl(){return X((t,n)=>{let e,r=!1;t.subscribe(ee(n,i=>{let o=e;e=i,r&&n.next([o,i]),r=!0}))})}function Ug(t={}){let{connector:n=()=>new D,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=l=void 0,d=f=!1},m=()=>{let _=s;p(),_?.unsubscribe()};return X((_,E)=>{c++,!f&&!d&&h();let M=l=l??n();E.add(()=>{c--,c===0&&!f&&!d&&(a=Ou(m,i))}),M.subscribe(E),!s&&c>0&&(s=new Ln({next:pe=>M.next(pe),error:pe=>{f=!0,h(),a=Ou(p,e,pe),M.error(pe)},complete:()=>{d=!0,h(),a=Ou(p,r),M.complete()}}),Ce(_).subscribe(s))})(o)}}function Ou(t,n,...e){if(n===!0){t();return}if(n===!1)return;let r=new Ln({next:()=>{r.unsubscribe(),t()}});return Ce(n(...e)).subscribe(r)}function nl(t,n,e){let r,i=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:e}=t:r=t??1/0,Ug({connector:()=>new Aa(r,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function jr(t){return ae((n,e)=>t<=e)}function nt(...t){let n=_n(t);return X((e,r)=>{(n?Dn(t,e,n):Dn(t,e)).subscribe(r)})}function He(t,n){return X((e,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();e.subscribe(ee(r,l=>{i?.unsubscribe();let c=0,d=o++;Ce(t(l,d)).subscribe(i=ee(r,f=>r.next(n?n(l,f,d,c++):f),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function Ee(t){return X((n,e)=>{Ce(t).subscribe(ee(e,()=>e.complete(),Rr)),!e.closed&&n.subscribe(e)})}function at(t,n,e){let r=K(t)||n||e?{next:t,error:n,complete:e}:t;return r?X((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(ee(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Et}var Fu;function rl(){return Fu}function wn(t){let n=Fu;return Fu=t,n}var zg=Symbol("NotFound");function ki(t){return t===zg||t?.name==="\u0275NotFound"}function Pu(t,n,e){let r=Object.create(KE);r.source=t,r.computation=n,e!=null&&(r.equal=e);let o=()=>{if(Mr(r),nr(r),r.value===yn)throw r.error;return r.value};return o[Fe]=r,Ro(r),o}function $g(t,n){Mr(t),Tr(t,n),wi(t)}function Wg(t,n){if(Mr(t),t.value===yn)throw t.error;Ea(t,n),wi(t)}var KE=G(g({},tr),{value:Ir,dirty:!0,error:null,equal:ko,kind:"linkedSignal",producerMustRecompute(t){return t.value===Ir||t.value===Sr},producerRecomputeValue(t){if(t.value===Sr)throw new Error("");let n=t.value;t.value=Sr;let e=Pn(t),r,i=!1;try{let o=t.source(),s=n!==Ir&&n!==yn,a=s?{source:t.sourceValue,value:n}:void 0;r=t.computation(o,a),t.sourceValue=o,N(null),i=s&&r!==yn&&t.equal(n,r)}catch(o){r=yn,t.error=o}finally{rr(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function Gg(t){let n=N(null);try{return t()}finally{N(n)}}var dl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",C=class extends Error{code;constructor(n,e){super(ar(n,e)),this.code=n}};function XE(t){return`NG0${Math.abs(t)}`}function ar(t,n){return`${XE(t)}${n?": "+n:""}`}var qo=globalThis;function De(t){for(let n in t)if(t[n]===De)return n;throw Error("")}function Kg(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Zo(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Zo).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let r=e.indexOf(`
`);return r>=0?e.slice(0,r):e}function ul(t,n){return t?n?`${t} ${n}`:t:n||""}var JE=De({__forward_ref__:De});function jt(t){return t.__forward_ref__=jt,t}function rt(t){return Yu(t)?t():t}function Yu(t){return typeof t=="function"&&t.hasOwnProperty(JE)&&t.__forward_ref__===jt}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ne(t){return{providers:t.providers||[],imports:t.imports||[]}}function Yo(t){return e0(t,fl)}function Qu(t){return Yo(t)!==null}function e0(t,n){return t.hasOwnProperty(n)&&t[n]||null}function t0(t){let n=t?.[fl]??null;return n||null}function Vu(t){return t&&t.hasOwnProperty(ol)?t[ol]:null}var fl=De({\u0275prov:De}),ol=De({\u0275inj:De}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ku(t){return t&&!!t.\u0275providers}var Xu=De({\u0275cmp:De}),Ju=De({\u0275dir:De}),ef=De({\u0275pipe:De}),tf=De({\u0275mod:De}),Uo=De({\u0275fac:De}),Wr=De({__NG_ELEMENT_ID__:De}),qg=De({__NG_ENV_ID__:De});function nf(t){return hl(t,"@NgModule"),t[tf]||null}function Bn(t){return hl(t,"@Component"),t[Xu]||null}function rf(t){return hl(t,"@Directive"),t[Ju]||null}function Xg(t){return hl(t,"@Pipe"),t[ef]||null}function hl(t,n){if(t==null)throw new C(-919,!1)}function Qo(t){return typeof t=="string"?t:t==null?"":String(t)}var Jg=De({ngErrorCode:De}),n0=De({ngErrorMessage:De}),r0=De({ngTokenPath:De});function of(t,n){return ev("",-200,n)}function pl(t,n){throw new C(-201,!1)}function ev(t,n,e){let r=new C(n,t);return r[Jg]=n,r[n0]=t,e&&(r[r0]=e),r}function i0(t){return t[Jg]}var ju;function tv(){return ju}function It(t){let n=ju;return ju=t,n}function sf(t,n,e){let r=Yo(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(e&8)return null;if(n!==void 0)return n;pl(t,"")}var o0={},Br=o0,s0="__NG_DI_FLAG__",Bu=class{injector;constructor(n){this.injector=n}retrieve(n,e){let r=Hr(e)||0;try{return this.injector.get(n,r&8?null:Br,r)}catch(i){if(ki(i))return i;throw i}}};function a0(t,n=0){let e=rl();if(e===void 0)throw new C(-203,!1);if(e===null)return sf(t,void 0,n);{let r=l0(n),i=e.retrieve(t,r);if(ki(i)){if(r.optional)return null;throw i}return i}}function P(t,n=0){return(tv()||a0)(rt(t),n)}function u(t,n){return P(t,Hr(n))}function Hr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function l0(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Hu(t){let n=[];for(let e=0;e<t.length;e++){let r=rt(t[e]);if(Array.isArray(r)){if(r.length===0)throw new C(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=c0(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}n.push(P(i,o))}else n.push(P(r))}return n}function c0(t){return t[s0]}function Ur(t,n){let e=t.hasOwnProperty(Uo);return e?t[Uo]:null}function nv(t,n,e){if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(e&&(i=e(i),o=e(o)),o!==i)return!1}return!0}function rv(t){return t.flat(Number.POSITIVE_INFINITY)}function ml(t,n){t.forEach(e=>Array.isArray(e)?ml(e,n):n(e))}function af(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ko(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function iv(t,n){let e=[];for(let r=0;r<t;r++)e.push(n);return e}function ov(t,n,e,r){let i=t.length;if(i==n)t.push(e,r);else if(i===1)t.push(r,t[0]),t[0]=e;else{for(i--,t.push(t[i-1],t[i]);i>n;){let o=i-2;t[i]=t[o],i--}t[n]=e,t[n+1]=r}}function gl(t,n,e){let r=Oi(t,n);return r>=0?t[r|1]=e:(r=~r,ov(t,r,n,e)),r}function vl(t,n){let e=Oi(t,n);if(e>=0)return t[e|1]}function Oi(t,n){return d0(t,n,1)}function d0(t,n,e){let r=0,i=t.length>>e;for(;i!==r;){let o=r+(i-r>>1),s=t[o<<e];if(n===s)return o<<e;s>n?i=o:r=o+1}return~(i<<e)}var lr={},lt=[],Gr=new v(""),lf=new v("",-1),cf=new v(""),zo=class{get(n,e=Br){if(e===Br){let i=ev("",-201);throw i.name="\u0275NotFound",i}return e}};function qr(t){return{\u0275providers:t}}function sv(t){return qr([{provide:Gr,multi:!0,useValue:t}])}function av(...t){return{\u0275providers:df(!0,t),\u0275fromNgModule:!0}}function df(t,...n){let e=[],r=new Set,i,o=s=>{e.push(s)};return ml(n,s=>{let a=s;sl(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&lv(i,o),e}function lv(t,n){for(let e=0;e<t.length;e++){let{ngModule:r,providers:i}=t[e];uf(i,o=>{n(o,r)})}}function sl(t,n,e,r){if(t=rt(t),!t)return!1;let i=null,o=Vu(t),s=!o&&Bn(t);if(!o&&!s){let l=t.ngModule;if(o=Vu(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=t}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)sl(c,n,e,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;ml(o.imports,d=>{sl(d,n,e,r)&&(c||=[],c.push(d))}),c!==void 0&&lv(c,n)}if(!a){let c=Ur(i)||(()=>new i);n({provide:i,useFactory:c,deps:lt},i),n({provide:cf,useValue:i,multi:!0},i),n({provide:Gr,useValue:()=>P(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=t;uf(l,d=>{n(d,c)})}}else return!1;return i!==t&&t.providers!==void 0}function uf(t,n){for(let e of t)Ku(e)&&(e=e.\u0275providers),Array.isArray(e)?uf(e,n):n(e)}var u0=De({provide:String,useValue:De});function cv(t){return t!==null&&typeof t=="object"&&u0 in t}function f0(t){return!!(t&&t.useExisting)}function h0(t){return!!(t&&t.useFactory)}function zr(t){return typeof t=="function"}function dv(t){return!!t.useClass}var Xo=new v(""),il={},Zg={},Lu;function Fi(){return Lu===void 0&&(Lu=new zo),Lu}var me=class{},$r=class extends me{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,r,i){super(),this.parent=e,this.source=r,this.scopes=i,zu(n,s=>this.processProvider(s)),this.records.set(lf,Ni(void 0,this)),i.has("environment")&&this.records.set(me,Ni(void 0,this));let o=this.records.get(Xo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(cf,lt,{self:!0}))}retrieve(n,e){let r=Hr(e)||0;try{return this.get(n,Br,r)}catch(i){if(ki(i))return i;throw i}}destroy(){Ho(this),this._destroyed=!0;let n=N(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),N(n)}}onDestroy(n){return Ho(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ho(this);let e=wn(this),r=It(void 0),i;try{return n()}finally{wn(e),It(r)}}get(n,e=Br,r){if(Ho(this),n.hasOwnProperty(qg))return n[qg](this);let i=Hr(r),o,s=wn(this),a=It(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=b0(n)&&Yo(n);d&&this.injectableDefInScope(d)?c=Ni(Uu(n),il):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Fi():this.parent;return e=i&8&&e===Br?null:e,l.get(n,e)}catch(l){let c=i0(l);throw c===-200||c===-201?new C(c,null):l}finally{It(a),wn(s)}}resolveInjectorInitializers(){let n=N(null),e=wn(this),r=It(void 0),i;try{let o=this.get(Gr,lt,{self:!0});for(let s of o)s()}finally{wn(e),It(r),N(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=rt(n);let e=zr(n)?n:rt(n&&n.provide),r=m0(n);if(!zr(n)&&n.multi===!0){let i=this.records.get(e);i||(i=Ni(void 0,il,!0),i.factory=()=>Hu(i.multi),this.records.set(e,i)),e=n,i.multi.push(n)}this.records.set(e,r)}hydrate(n,e,r){let i=N(null);try{if(e.value===Zg)throw of("");return e.value===il&&(e.value=Zg,e.value=e.factory(void 0,r)),typeof e.value=="object"&&e.value&&v0(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{N(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=rt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Uu(t){let n=Yo(t),e=n!==null?n.factory:Ur(t);if(e!==null)return e;if(t instanceof v)throw new C(-204,!1);if(t instanceof Function)return p0(t);throw new C(-204,!1)}function p0(t){if(t.length>0)throw new C(-204,!1);let e=t0(t);return e!==null?()=>e.factory(t):()=>new t}function m0(t){if(cv(t))return Ni(void 0,t.useValue);{let n=ff(t);return Ni(n,il)}}function ff(t,n,e){let r;if(zr(t)){let i=rt(t);return Ur(i)||Uu(i)}else if(cv(t))r=()=>rt(t.useValue);else if(h0(t))r=()=>t.useFactory(...Hu(t.deps||[]));else if(f0(t))r=(i,o)=>P(rt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let i=rt(t&&(t.useClass||t.provide));if(g0(t))r=()=>new i(...Hu(t.deps));else return Ur(i)||Uu(i)}return r}function Ho(t){if(t.destroyed)throw new C(-205,!1)}function Ni(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function g0(t){return!!t.deps}function v0(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function b0(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function zu(t,n){for(let e of t)Array.isArray(e)?zu(e,n):e&&Ku(e)?zu(e.\u0275providers,n):n(e)}function Je(t,n){let e;t instanceof $r?(Ho(t),e=t):e=new Bu(t);let r,i=wn(e),o=It(void 0);try{return n()}finally{wn(i),It(o)}}function uv(){return tv()!==void 0||rl()!=null}var en=0,V=1,z=2,$e=3,Bt=4,gt=5,Zr=6,Pi=7,Pe=8,Hn=9,tn=10,Ae=11,Li=12,hf=13,Yr=14,vt=15,cr=16,Qr=17,En=18,Un=19,pf=20,jn=21,bl=22,or=23,St=24,Kr=25,dr=26,Le=27,fv=1,mf=6,ur=7,Jo=8,Xr=9,Ne=10;function zn(t){return Array.isArray(t)&&typeof t[fv]=="object"}function nn(t){return Array.isArray(t)&&t[fv]===!0}function gf(t){return(t.flags&4)!==0}function xn(t){return t.componentOffset>-1}function es(t){return(t.flags&1)===1}function In(t){return!!t.template}function Vi(t){return(t[z]&512)!==0}function Jr(t){return(t[z]&256)===256}var hv="svg",pv="math";function Ht(t){for(;Array.isArray(t);)t=t[en];return t}function vf(t,n){return Ht(n[t])}function Ut(t,n){return Ht(n[t.index])}function yl(t,n){return t.data[n]}function mv(t,n){return t[n]}function zt(t,n){let e=n[t];return zn(e)?e:e[en]}function gv(t){return(t[z]&4)===4}function _l(t){return(t[z]&128)===128}function vv(t){return nn(t[$e])}function Mt(t,n){return n==null?null:t[n]}function bf(t){t[Qr]=0}function yf(t){t[z]&1024||(t[z]|=1024,_l(t)&&ei(t))}function bv(t,n){for(;t>0;)n=n[Yr],t--;return n}function ts(t){return!!(t[z]&9216||t[St]?.dirty)}function Dl(t){t[tn].changeDetectionScheduler?.notify(8),t[z]&64&&(t[z]|=1024),ts(t)&&ei(t)}function ei(t){t[tn].changeDetectionScheduler?.notify(0);let n=sr(t);for(;n!==null&&!(n[z]&8192||(n[z]|=8192,!_l(n)));)n=sr(n)}function _f(t,n){if(Jr(t))throw new C(911,!1);t[jn]===null&&(t[jn]=[]),t[jn].push(n)}function yv(t,n){if(t[jn]===null)return;let e=t[jn].indexOf(n);e!==-1&&t[jn].splice(e,1)}function sr(t){let n=t[$e];return nn(n)?n[$e]:n}function Df(t){return t[Pi]??=[]}function wf(t){return t.cleanup??=[]}function _v(t,n,e,r){let i=Df(n);i.push(e),t.firstCreatePass&&wf(t).push(r,i.length-1)}var oe={lFrame:kv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var $u=!1;function Dv(){return oe.lFrame.elementDepthCount}function wv(){oe.lFrame.elementDepthCount++}function Cf(){oe.lFrame.elementDepthCount--}function Ef(){return oe.bindingsEnabled}function xf(){return oe.skipHydrationRootTNode!==null}function If(t){return oe.skipHydrationRootTNode===t}function Sf(){oe.skipHydrationRootTNode=null}function Z(){return oe.lFrame.lView}function Oe(){return oe.lFrame.tView}function Tt(t){return oe.lFrame.contextLView=t,t[Pe]}function At(t){return oe.lFrame.contextLView=null,t}function ct(){let t=Mf();for(;t!==null&&t.type===64;)t=t.parent;return t}function Mf(){return oe.lFrame.currentTNode}function Cv(){let t=oe.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function ji(t,n){let e=oe.lFrame;e.currentTNode=t,e.isParent=n}function Tf(){return oe.lFrame.isParent}function Af(){oe.lFrame.isParent=!1}function Ev(){return oe.lFrame.contextLView}function Rf(){return $u}function $o(t){let n=$u;return $u=t,n}function xv(){let t=oe.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Iv(t){return oe.lFrame.bindingIndex=t}function $n(){return oe.lFrame.bindingIndex++}function kf(t){let n=oe.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Sv(){return oe.lFrame.inI18n}function Mv(t,n){let e=oe.lFrame;e.bindingIndex=e.bindingRootIndex=t,wl(n)}function Tv(){return oe.lFrame.currentDirectiveIndex}function wl(t){oe.lFrame.currentDirectiveIndex=t}function Av(t){let n=oe.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Cl(){return oe.lFrame.currentQueryIndex}function ns(t){oe.lFrame.currentQueryIndex=t}function y0(t){let n=t[V];return n.type===2?n.declTNode:n.type===1?t[gt]:null}function Nf(t,n,e){if(e&4){let i=n,o=t;for(;i=i.parent,i===null&&!(e&1);)if(i=y0(o),i===null||(o=o[Yr],i.type&10))break;if(i===null)return!1;n=i,t=o}let r=oe.lFrame=Rv();return r.currentTNode=n,r.lView=t,!0}function El(t){let n=Rv(),e=t[V];oe.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Rv(){let t=oe.lFrame,n=t===null?null:t.child;return n===null?kv(t):n}function kv(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Nv(){let t=oe.lFrame;return oe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Of=Nv;function xl(){let t=Nv();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Ov(t){return(oe.lFrame.contextLView=bv(t,oe.lFrame.contextLView))[Pe]}function Wn(){return oe.lFrame.selectedIndex}function fr(t){oe.lFrame.selectedIndex=t}function rs(){let t=oe.lFrame;return yl(t.tView,t.selectedIndex)}function Fv(){return oe.lFrame.currentNamespace}var Pv=!0;function Il(){return Pv}function Sl(t){Pv=t}function Wu(t,n=null,e=null,r){let i=Ff(t,n,e,r);return i.resolveInjectorInitializers(),i}function Ff(t,n=null,e=null,r,i=new Set){let o=[e||lt,av(t)],s;return new $r(o,n||Fi(),s||null,i)}var te=class t{static THROW_IF_NOT_FOUND=Br;static NULL=new zo;static create(n,e){if(Array.isArray(n))return Wu({name:""},e,n,"");{let r=n.name??"";return Wu({name:r},n.parent,n.providers,r)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>P(lf)});static __NG_ELEMENT_ID__=-1},Y=new v(""),bt=(()=>{class t{static __NG_ELEMENT_ID__=_0;static __NG_ENV_ID__=e=>e}return t})(),al=class extends bt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Jr(this._lView)}onDestroy(n){let e=this._lView;return _f(e,n),()=>yv(e,n)}};function _0(){return new al(Z())}var Lv=!1,Vv=new v(""),Gn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Be(!1);debugTaskTracker=u(Vv,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new L(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Gu=class extends D{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,uv()&&(this.destroyRef=u(bt,{optional:!0})??void 0,this.pendingTasks=u(Gn,{optional:!0})??void 0)}emit(n){let e=N(null);try{super.next(n)}finally{N(e)}}subscribe(n,e,r){let i=n,o=e||(()=>null),s=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return n instanceof se&&n.add(a),a}wrapInTimeout(n){return e=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},O=Gu;function ll(...t){}function Pf(t){let n,e;function r(){t=ll;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),r()})),()=>r()}function jv(t){return queueMicrotask(()=>t()),()=>{t=ll}}var Lf="isAngularZone",Wo=Lf+"_ID",D0=0,S=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new O(!1);onMicrotaskEmpty=new O(!1);onStable=new O(!1);onError=new O(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Lv}=n;if(typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,E0(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Lf)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new C(909,!1)}run(n,e,r){return this._inner.run(n,e,r)}runTask(n,e,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,n,w0,ll,ll);try{return o.runTask(s,e,r)}finally{o.cancelTask(s)}}runGuarded(n,e,r){return this._inner.runGuarded(n,e,r)}runOutsideAngular(n){return this._outer.run(n)}},w0={};function Vf(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function C0(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Pf(()=>{t.callbackScheduled=!1,qu(t),t.isCheckStableRunning=!0,Vf(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),qu(t)}function E0(t){let n=()=>{C0(t)},e=D0++;t._inner=t._inner.fork({name:"angular",properties:{[Lf]:!0,[Wo]:e,[Wo+e]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(x0(l))return r.invokeTask(o,s,a,l);try{return Yg(t),r.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Qg(t)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return Yg(t),r.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!I0(l)&&n(),Qg(t)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,qu(t),Vf(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function qu(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Yg(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Qg(t){t._nesting--,Vf(t)}var Go=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new O;onMicrotaskEmpty=new O;onStable=new O;onError=new O;run(n,e,r){return n.apply(e,r)}runGuarded(n,e,r){return n.apply(e,r)}runOutsideAngular(n){return n()}runTask(n,e,r,i){return n.apply(e,r)}};function x0(t){return Bv(t,"__ignore_ng_zone__")}function I0(t){return Bv(t,"__scheduler_tick__")}function Bv(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Jt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Rt=new v("",{factory:()=>{let t=u(S),n=u(me),e;return r=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw r}):(e??=n.get(Jt),e.handleError(r))})}}}),Hv={provide:Gr,useValue:()=>{let t=u(Jt,{optional:!0})},multi:!0},S0=new v("",{factory:()=>{let t=u(Y).defaultView;if(!t)return;let n=u(Rt),e=o=>{n(o.reason),o.preventDefault()},r=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),u(bt).onDestroy(()=>{t.removeEventListener("error",r),t.removeEventListener("unhandledrejection",e)})}});function jf(){return qr([sv(()=>{u(S0)})])}function F(t,n){let[e,r,i]=bu(t,n?.equal),o=e,s=o[Fe];return o.set=r,o.update=i,o.asReadonly=Ml.bind(o),o}function Ml(){let t=this[Fe];if(t.readonlyFn===void 0){let n=()=>this();n[Fe]=t,t.readonlyFn=n}return t.readonlyFn}var Bi=(()=>{class t{view;node;constructor(e,r){this.view=e,this.node=r}static __NG_ELEMENT_ID__=M0}return t})();function M0(){return new Bi(Z(),ct())}var Cn=class{},is=new v("",{factory:()=>!0});var Bf=new v(""),os=(()=>{class t{internalPendingTasks=u(Gn);scheduler=u(Cn);errorHandler=u(Rt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let r=this.add();e().catch(this.errorHandler).finally(r)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Tl=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new Zu})}return t})(),Zu=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,r=this.queues.get(e);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let r=this.queues.get(e);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,r]of this.queues)e===null?n||=this.flushQueue(r):n||=e.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,e=!0,r.run());return e}},cl=class{[Fe];constructor(n){this[Fe]=n}destroy(){this[Fe].destroy()}};function rn(t,n){let e=n?.injector??u(te),r=n?.manualCleanup!==!0?e.get(bt):null,i,o=e.get(Bi,null,{optional:!0}),s=e.get(Cn);return o!==null?(i=R0(o.view,s,t),r instanceof al&&r._lView===o.view&&(r=null)):i=k0(t,e.get(Tl),s),i.injector=e,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new cl(i)}var Uv=G(g({},yu),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=$o(!1);try{_u(this)}finally{$o(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=N(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],N(t)}}}),T0=G(g({},Uv),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ir(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),A0=G(g({},Uv),{consumerMarkedDirty(){this.view[z]|=8192,ei(this.view),this.notifier.notify(13)},destroy(){if(ir(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[or]?.delete(this)}});function R0(t,n,e){let r=Object.create(A0);return r.view=t,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.fn=zv(r,e),t[or]??=new Set,t[or].add(r),r.consumerMarkedDirty(r),r}function k0(t,n,e){let r=Object.create(T0);return r.fn=zv(r,t),r.scheduler=n,r.notifier=e,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function zv(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ms(t){return{toString:t}.toString()}function U0(t){return typeof t=="function"}function yb(t,n,e,r){n!==null?n.applyValueToInputSignal(n,r):t[e]=r}var Pl=class{previousValue;currentValue;firstChange;constructor(n,e,r){this.previousValue=n,this.currentValue=e,this.firstChange=r}isFirstChange(){return this.firstChange}},We=(()=>{let t=()=>_b;return t.ngInherit=!0,t})();function _b(t){return t.type.prototype.ngOnChanges&&(t.setInput=$0),z0}function z0(){let t=wb(this),n=t?.current;if(n){let e=t.previous;if(e===lr)t.previous=n;else for(let r in n)e[r]=n[r];t.current=null,this.ngOnChanges(n)}}function $0(t,n,e,r,i){let o=this.declaredInputs[r],s=wb(t)||W0(t,{previous:lr,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Pl(c&&c.currentValue,e,l===lr),yb(t,n,i,e)}var Db="__ngSimpleChanges__";function wb(t){return t[Db]||null}function W0(t,n){return t[Db]=n}var $v=[];var we=function(t,n=null,e){for(let r=0;r<$v.length;r++){let i=$v[r];i(t,n,e)}},fe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(fe||{});function G0(t,n,e){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let s=_b(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}i&&(e.preOrderHooks??=[]).push(0-t,i),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Cb(t,n){for(let e=n.directiveStart,r=n.directiveEnd;e<r;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function kl(t,n,e){Eb(t,n,3,e)}function Nl(t,n,e,r){(t[z]&3)===e&&Eb(t,n,e,r)}function Hf(t,n){let e=t[z];(e&3)===n&&(e&=16383,e+=1,t[z]=e)}function Eb(t,n,e,r){let i=r!==void 0?t[Qr]&65535:0,o=r??-1,s=n.length-1,a=0;for(let l=i;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],r!=null&&a>=r)break}else n[l]<0&&(t[Qr]+=65536),(a<o||o==-1)&&(q0(t,e,n,l),t[Qr]=(t[Qr]&4294901760)+l+2),l++}function Wv(t,n){we(fe.LifecycleHookStart,t,n);let e=N(null);try{n.call(t)}finally{N(e),we(fe.LifecycleHookEnd,t,n)}}function q0(t,n,e,r){let i=e[r]<0,o=e[r+1],s=i?-e[r]:e[r],a=t[s];i?t[z]>>14<t[Qr]>>16&&(t[z]&3)===n&&(t[z]+=16384,Wv(a,o)):Wv(a,o)}var Ui=-1,ni=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=e,this.injectImpl=r}};function Z0(t){return(t.flags&8)!==0}function Y0(t){return(t.flags&16)!==0}function Q0(t,n,e){let r=0;for(;r<e.length;){let i=e[r];if(typeof i=="number"){if(i!==0)break;r++;let o=e[r++],s=e[r++],a=e[r++];t.setAttribute(n,s,a,o)}else{let o=i,s=e[++r];K0(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),r++}}return r}function xb(t){return t===3||t===4||t===6}function K0(t){return t.charCodeAt(0)===64}function zi(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?e=i:e===0||(e===-1||e===2?Gv(t,e,i,null,n[++r]):Gv(t,e,i,null,null))}}return t}function Gv(t,n,e,r,i){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){i!==null&&(t[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),i!==null&&t.splice(o++,0,i)}function Ib(t){return t!==Ui}function Ll(t){return t&32767}function X0(t){return t>>16}function Vl(t,n){let e=X0(t),r=n;for(;e>0;)r=r[Yr],e--;return r}var Xf=!0;function qv(t){let n=Xf;return Xf=t,n}var J0=256,Sb=J0-1,Mb=5,ex=0,Sn={};function tx(t,n,e){let r;typeof e=="string"?r=e.charCodeAt(0)||0:e.hasOwnProperty(Wr)&&(r=e[Wr]),r==null&&(r=e[Wr]=ex++);let i=r&Sb,o=1<<i;n.data[t+(i>>Mb)]|=o}function jl(t,n){let e=Tb(t,n);if(e!==-1)return e;let r=n[V];r.firstCreatePass&&(t.injectorIndex=n.length,Uf(r.data,t),Uf(n,null),Uf(r.blueprint,null));let i=Ih(t,n),o=t.injectorIndex;if(Ib(i)){let s=Ll(i),a=Vl(i,n),l=a[V].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=i,o}function Uf(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Tb(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Ih(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,r=null,i=n;for(;i!==null;){if(r=Ob(i),r===null)return Ui;if(e++,i=i[Yr],r.injectorIndex!==-1)return r.injectorIndex|e<<16}return Ui}function Jf(t,n,e){tx(t,n,e)}function nx(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let r=e.length,i=0;for(;i<r;){let o=e[i];if(xb(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof e[i]=="string";)i++;else{if(o===n)return e[i+1];i=i+2}}}return null}function Ab(t,n,e){if(e&8||t!==void 0)return t;pl(n,"NodeInjector")}function Rb(t,n,e,r){if(e&8&&r===void 0&&(r=null),(e&3)===0){let i=t[Hn],o=It(void 0);try{return i?i.get(n,r,e&8):sf(n,r,e&8)}finally{It(o)}}return Ab(r,n,e)}function kb(t,n,e,r=0,i){if(t!==null){if(n[z]&2048&&!(r&2)){let s=sx(t,n,e,r,Sn);if(s!==Sn)return s}let o=Nb(t,n,e,r,Sn);if(o!==Sn)return o}return Rb(n,e,r,i)}function Nb(t,n,e,r,i){let o=ix(e);if(typeof o=="function"){if(!Nf(n,t,r))return r&1?Ab(i,e,r):Rb(n,e,r,i);try{let s;if(s=o(r),s==null&&!(r&8))pl(e);else return s}finally{Of()}}else if(typeof o=="number"){let s=null,a=Tb(t,n),l=Ui,c=r&1?n[vt][gt]:null;for((a===-1||r&4)&&(l=a===-1?Ih(t,n):n[a+8],l===Ui||!Yv(r,!1)?a=-1:(s=n[V],a=Ll(l),n=Vl(l,n)));a!==-1;){let d=n[V];if(Zv(o,a,d.data)){let f=rx(a,n,e,s,r,c);if(f!==Sn)return f}l=n[a+8],l!==Ui&&Yv(r,n[V].data[a+8]===c)&&Zv(o,a,n)?(s=d,a=Ll(l),n=Vl(l,n)):a=-1}}return i}function rx(t,n,e,r,i,o){let s=n[V],a=s.data[t+8],l=r==null?xn(a)&&Xf:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=Ol(a,s,e,l,c);return d!==null?cs(n,s,d,a,i):Sn}function Ol(t,n,e,r,i){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=r?a:a+d,h=i?a+d:c;for(let p=f;p<h;p++){let m=s[p];if(p<l&&e===m||p>=l&&m.type===e)return p}if(i){let p=s[l];if(p&&In(p)&&p.type===e)return l}return null}function cs(t,n,e,r,i){let o=t[e],s=n.data;if(o instanceof ni){let a=o;if(a.resolving)throw of("");let l=qv(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?It(a.injectImpl):null,h=Nf(t,r,0);try{o=t[e]=a.factory(void 0,i,s,t,r),n.firstCreatePass&&e>=r.directiveStart&&G0(e,s[e],n)}finally{f!==null&&It(f),qv(l),a.resolving=!1,Of()}}return o}function ix(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Wr)?t[Wr]:void 0;return typeof n=="number"?n>=0?n&Sb:ox:n}function Zv(t,n,e){let r=1<<t;return!!(e[n+(t>>Mb)]&r)}function Yv(t,n){return!(t&2)&&!(t&1&&n)}var ti=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,r){return kb(this._tNode,this._lView,n,Hr(r),e)}};function ox(){return new ti(ct(),Z())}function Ge(t){return ms(()=>{let n=t.prototype.constructor,e=n[Uo]||eh(n),r=Object.prototype,i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==r;){let o=i[Uo]||eh(i);if(o&&o!==e)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function eh(t){return Yu(t)?()=>{let n=eh(rt(t));return n&&n()}:Ur(t)}function sx(t,n,e,r,i){let o=t,s=n;for(;o!==null&&s!==null&&s[z]&2048&&!Vi(s);){let a=Nb(o,s,e,r|2,Sn);if(a!==Sn)return a;let l=o.parent;if(!l){let c=s[pf];if(c){let d=c.get(e,Sn,r&-5);if(d!==Sn)return d}l=Ob(s),s=s[Yr]}o=l}return i}function Ob(t){let n=t[V],e=n.type;return e===2?n.declTNode:e===1?t[gt]:null}function gs(t){return nx(ct(),t)}function ax(){return Zi(ct(),Z())}function Zi(t,n){return new k(Ut(t,n))}var k=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=ax}return t})();function Fb(t){return t instanceof k?t.nativeElement:t}function lx(){return this._results[Symbol.iterator]()}var an=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new D}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let r=rv(n);(this._changesDetected=!nv(this._results,r,e))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=lx};function Pb(t){return(t.flags&128)===128}var Sh=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Sh||{}),Lb=new Map,cx=0;function dx(){return cx++}function ux(t){Lb.set(t[Un],t)}function th(t){Lb.delete(t[Un])}var Qv="__ngContext__";function $i(t,n){zn(n)?(t[Qv]=n[Un],ux(n)):t[Qv]=n}function Vb(t){return Bb(t[Li])}function jb(t){return Bb(t[Bt])}function Bb(t){for(;t!==null&&!nn(t);)t=t[Bt];return t}var fx;function Mh(t){fx=t}var Yi=new v("",{factory:()=>hx}),hx="ng";var Jl=new v(""),si=new v("",{providedIn:"platform",factory:()=>"unknown"}),vs=new v(""),ai=new v("",{factory:()=>u(Y).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Hb="r";var Ub="di";var zb=!1,$b=new v("",{factory:()=>zb});var px=(t,n,e,r)=>{};function mx(t,n,e,r){px(t,n,e,r)}function ec(t){return(t.flags&32)===32}var gx=()=>null;function Wb(t,n,e=!1){return gx(t,n,e)}function Gb(t,n){let e=t.contentQueries;if(e!==null){let r=N(null);try{for(let i=0;i<e.length;i+=2){let o=e[i],s=e[i+1];if(s!==-1){let a=t.data[s];ns(o),a.contentQueries(2,n[s],s)}}}finally{N(r)}}}function nh(t,n,e){ns(0);let r=N(null);try{n(t,e)}finally{N(r)}}function qb(t,n,e){if(gf(n)){let r=N(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let s=i;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{N(r)}}}var ln=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ln||{});var Al;function vx(){if(Al===void 0&&(Al=null,qo.trustedTypes))try{Al=qo.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Al}function Kv(t){return vx()?.createScriptURL(t)||t}var Bl=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${dl})`}};function bs(t){return t instanceof Bl?t.changingThisBreaksApplicationSecurity:t}function Th(t,n){let e=Zb(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${dl})`)}return e===n}function Zb(t){return t instanceof Bl&&t.getTypeName()||null}var bx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Yb(t){return t=String(t),t.match(bx)?t:"unsafe:"+t}function yx(t,n){return t.createText(n)}function _x(t,n,e){t.setValue(n,e)}function Qb(t,n,e){return t.createElement(n,e)}function Hl(t,n,e,r,i){t.insertBefore(n,e,r,i)}function Kb(t,n,e){t.appendChild(n,e)}function Xv(t,n,e,r,i){r!==null?Hl(t,n,e,r,i):Kb(t,n,e)}function Xb(t,n,e,r){t.removeChild(null,n,e,r)}function Dx(t,n,e){t.setAttribute(n,"style",e)}function wx(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Jb(t,n,e){let{mergedAttrs:r,classes:i,styles:o}=e;r!==null&&Q0(t,n,r),i!==null&&wx(t,n,i),o!==null&&Dx(t,n,o)}var tc=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(tc||{});function Qi(t){let n=ty();return n?n.sanitize(tc.URL,t)||"":Th(t,"URL")?bs(t):Yb(Qo(t))}function ey(t){let n=ty();if(n)return Kv(n.sanitize(tc.RESOURCE_URL,t)||"");if(Th(t,"ResourceURL"))return Kv(bs(t));throw new C(904,!1)}var Cx={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Ex(t,n){return Cx[t]?.[n]===!0?ey:Qi}function Ah(t,n,e){return Ex(n,e)(t)}function ty(){let t=Z();return t&&t[tn].sanitizer}function ny(t){return t instanceof Function?t():t}function xx(t,n,e){let r=t.length;for(;;){let i=t.indexOf(n,e);if(i===-1)return i;if(i===0||t.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||t.charCodeAt(i+o)<=32)return i}e=i+1}}var ry="ng-template";function Ix(t,n,e,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&xx(n[i+1].toLowerCase(),e,0)!==-1)return!0}else if(Rh(t))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Rh(t){return t.type===4&&t.value!==ry}function Sx(t,n,e){let r=t.type===4&&!e?ry:t.value;return n===r}function Mx(t,n,e){let r=4,i=t.attrs,o=i!==null?Rx(i):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!on(r)&&!on(l))return!1;if(s&&on(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!Sx(t,l,e)||l===""&&n.length===1){if(on(r))return!1;s=!0}}else if(r&8){if(i===null||!Ix(t,i,l,e)){if(on(r))return!1;s=!0}}else{let c=n[++a],d=Tx(l,i,Rh(t),e);if(d===-1){if(on(r))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(on(r))return!1;s=!0}}}}return on(r)||s}function on(t){return(t&1)===0}function Tx(t,n,e,r){if(n===null)return-1;let i=0;if(r||!e){let o=!1;for(;i<n.length;){let s=n[i];if(s===t)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++i];for(;typeof a=="string";)a=n[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return kx(n,t)}function iy(t,n,e=!1){for(let r=0;r<n.length;r++)if(Mx(t,n[r],e))return!0;return!1}function Ax(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function Rx(t){for(let n=0;n<t.length;n++){let e=t[n];if(xb(e))return n}return t.length}function kx(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let r=t[e];if(typeof r=="number")return-1;if(r===n)return e;e++}return-1}function Nx(t,n){e:for(let e=0;e<n.length;e++){let r=n[e];if(t.length===r.length){for(let i=0;i<t.length;i++)if(t[i]!==r[i])continue e;return!0}}return!1}function Jv(t,n){return t?":not("+n.trim()+")":n}function Ox(t){let n=t[0],e=1,r=2,i="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(r&2){let a=t[++e];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!on(s)&&(n+=Jv(o,i),i=""),r=s,o=o||!on(r);e++}return i!==""&&(n+=Jv(o,i)),n}function Fx(t){return t.map(Ox).join(",")}function Px(t){let n=[],e=[],r=1,i=2;for(;r<t.length;){let o=t[r];if(typeof o=="string")i===2?o!==""&&n.push(o,t[++r]):i===8&&e.push(o);else{if(!on(i))break;i=o}r++}return e.length&&n.push(1,...e),n}var kt={};function kh(t,n,e,r,i,o,s,a,l,c,d){let f=Le+r,h=f+i,p=Lx(f,h),m=typeof c=="function"?c():c;return p[V]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:d}}function Lx(t,n){let e=[];for(let r=0;r<n;r++)e.push(r<t?null:kt);return e}function Vx(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=kh(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Nh(t,n,e,r,i,o,s,a,l,c,d){let f=n.blueprint.slice();return f[en]=i,f[z]=r|4|128|8|64|1024,(c!==null||t&&t[z]&2048)&&(f[z]|=2048),bf(f),f[$e]=f[Yr]=t,f[Pe]=e,f[tn]=s||t&&t[tn],f[Ae]=a||t&&t[Ae],f[Hn]=l||t&&t[Hn]||null,f[gt]=o,f[Un]=dx(),f[Zr]=d,f[pf]=c,f[vt]=n.type==2?t[vt]:f,f}function jx(t,n,e){let r=Ut(n,t),i=Vx(e),o=t[tn].rendererFactory,s=Oh(t,Nh(t,i,null,oy(e),r,n,null,o.createRenderer(r,e),null,null,null));return t[n.index]=s}function oy(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function sy(t,n,e,r){if(e===0)return-1;let i=n.length;for(let o=0;o<e;o++)n.push(r),t.blueprint.push(r),t.data.push(null);return i}function Oh(t,n){return t[Li]?t[hf][Bt]=n:t[Li]=n,t[hf]=n,n}function I(t=1){ay(Oe(),Z(),Wn()+t,!1)}function ay(t,n,e,r){if(!r)if((n[z]&3)===3){let o=t.preOrderCheckHooks;o!==null&&kl(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Nl(n,o,0,e)}fr(e)}var nc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(nc||{});function rh(t,n,e,r){let i=N(null);try{let[o,s,a]=t.inputs[e],l=null;(s&nc.SignalBased)!==0&&(l=n[o][Fe]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(n,r)),t.setInput!==null?t.setInput(n,l,r,e,o):yb(n,l,o,r)}finally{N(i)}}var cn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(cn||{}),Bx;function Fh(t,n){return Bx(t,n)}var dH=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var ih=new WeakMap,ss=new WeakSet;function Hx(t,n){let e=ih.get(t);if(!e||e.length===0)return;let r=n.parentNode,i=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),ss.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(i&&s===i||a&&r&&a!==r)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function Ux(t,n){let e=ih.get(t);e?e.includes(n)||e.push(n):ih.set(t,[n])}var ri=new Set,rc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(rc||{}),dn=new v(""),eb=new Set;function pr(t){eb.has(t)||(eb.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var ic=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ph=[0,1,2,3],Lh=(()=>{class t{ngZone=u(S);scheduler=u(Cn);errorHandler=u(Jt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(dn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&we(fe.AfterRenderHooksStart),this.executing=!0;for(let r of Ph)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&we(fe.AfterRenderHooksEnd)}register(e){let{view:r}=e;r!==void 0?((r[Kr]??=[]).push(e),ei(r),r[z]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,r){return r?r.run(rc.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),ds=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,r,i,o,s=null){this.impl=n,this.hooks=e,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Kr];n&&(this.view[Kr]=n.filter(e=>e!==this))}};function qe(t,n){let e=n?.injector??u(te);return pr("NgAfterNextRender"),$x(t,e,n,!0)}function zx(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function $x(t,n,e,r){let i=n.get(ic);i.impl??=n.get(Lh);let o=n.get(dn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(bt):null,a=n.get(Bi,null,{optional:!0}),l=new ds(i.impl,zx(t),a?.view,r,s,o?.snapshot(null));return i.impl.register(l),l}var ly=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(me)})});function cy(t,n,e){let r=t.get(ly);if(Array.isArray(n))for(let i of n)r.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);else r.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(t)}function Wx(t,n){let e=t.get(ly);if(n.detachedLeaveAnimationFns){for(let r of n.detachedLeaveAnimationFns)e.queue.delete(r);n.detachedLeaveAnimationFns=void 0}}function Gx(t,n){for(let[e,r]of n)cy(t,r.animateFns)}function tb(t,n,e,r){let i=t?.[dr]?.enter;n!==null&&i&&i.has(e.index)&&Gx(r,i)}function Hi(t,n,e,r,i,o,s,a){if(i!=null){let l,c=!1;nn(i)?l=i:zn(i)&&(c=!0,i=i[en]);let d=Ht(i);t===0&&r!==null?(tb(a,r,o,e),s==null?Kb(n,r,d):Hl(n,r,d,s||null,!0)):t===1&&r!==null?(tb(a,r,o,e),Hl(n,r,d,s||null,!0),Hx(o,d)):t===2?(a?.[dr]?.leave?.has(o.index)&&Ux(o,d),ss.delete(d),nb(a,o,e,f=>{if(ss.has(d)){ss.delete(d);return}Xb(n,d,c,f)})):t===3&&(ss.delete(d),nb(a,o,e,()=>{n.destroyNode(d)})),l!=null&&rI(n,t,e,l,o,r,s)}}function qx(t,n){dy(t,n),n[en]=null,n[gt]=null}function Zx(t,n,e,r,i,o){r[en]=i,r[gt]=n,sc(t,r,e,1,i,o)}function dy(t,n){n[tn].changeDetectionScheduler?.notify(9),sc(t,n,n[Ae],2,null,null)}function Yx(t){let n=t[Li];if(!n)return zf(t[V],t);for(;n;){let e=null;if(zn(n))e=n[Li];else{let r=n[Ne];r&&(e=r)}if(!e){for(;n&&!n[Bt]&&n!==t;)zn(n)&&zf(n[V],n),n=n[$e];n===null&&(n=t),zn(n)&&zf(n[V],n),e=n&&n[Bt]}n=e}}function Vh(t,n){let e=t[Xr],r=e.indexOf(n);e.splice(r,1)}function oc(t,n){if(Jr(n))return;let e=n[Ae];e.destroyNode&&sc(t,n,e,3,null,null),Yx(n)}function zf(t,n){if(Jr(n))return;let e=N(null);try{n[z]&=-129,n[z]|=256,n[St]&&ir(n[St]),Xx(t,n),Kx(t,n),n[V].type===1&&n[Ae].destroy();let r=n[cr];if(r!==null&&nn(n[$e])){r!==n[$e]&&Vh(r,n);let i=n[En];i!==null&&i.detachView(t)}th(n)}finally{N(e)}}function nb(t,n,e,r){let i=t?.[dr];if(i==null||i.leave==null||!i.leave.has(n.index))return r(!1);t&&ri.add(t[Un]),cy(e,()=>{if(i.leave&&i.leave.has(n.index)){let s=i.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}i.detachedLeaveAnimationFns=void 0}i.running=Promise.allSettled(a),Qx(t,r)}else t&&ri.delete(t[Un]),r(!1)},i)}function Qx(t,n){let e=t[dr]?.running;if(e){e.then(()=>{t[dr].running=void 0,ri.delete(t[Un]),n(!0)});return}n(!1)}function Kx(t,n){let e=t.cleanup,r=n[Pi];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[e[s+1]];e[s].call(a)}r!==null&&(n[Pi]=null);let i=n[jn];if(i!==null){n[jn]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=n[or];if(o!==null){n[or]=null;for(let s of o)s.destroy()}}function Xx(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let r=0;r<e.length;r+=2){let i=n[e[r]];if(!(i instanceof ni)){let o=e[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];we(fe.LifecycleHookStart,a,l);try{l.call(a)}finally{we(fe.LifecycleHookEnd,a,l)}}else{we(fe.LifecycleHookStart,i,o);try{o.call(i)}finally{we(fe.LifecycleHookEnd,i,o)}}}}}function uy(t,n,e){return Jx(t,n.parent,e)}function Jx(t,n,e){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return e[en];if(xn(r)){let{encapsulation:i}=t.data[r.directiveStart+r.componentOffset];if(i===ln.None||i===ln.Emulated)return null}return Ut(r,e)}function fy(t,n,e){return tI(t,n,e)}function eI(t,n,e){return t.type&40?Ut(t,e):null}var tI=eI,rb;function jh(t,n,e,r){let i=uy(t,r,n),o=n[Ae],s=r.parent||n[gt],a=fy(s,r,n);if(i!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Xv(o,i,e[l],a,!1);else Xv(o,i,e,a,!1);rb!==void 0&&rb(o,r,n,e,i)}function as(t,n){if(n!==null){let e=n.type;if(e&3)return Ut(n,t);if(e&4)return oh(-1,t[n.index]);if(e&8){let r=n.child;if(r!==null)return as(t,r);{let i=t[n.index];return nn(i)?oh(-1,i):Ht(i)}}else{if(e&128)return as(t,n.next);if(e&32)return Fh(n,t)()||Ht(t[n.index]);{let r=hy(t,n);if(r!==null){if(Array.isArray(r))return r[0];let i=sr(t[vt]);return as(i,r)}else return as(t,n.next)}}}return null}function hy(t,n){if(n!==null){let r=t[vt][gt],i=n.projection;return r.projection[i]}return null}function oh(t,n){let e=Ne+t+1;if(e<n.length){let r=n[e],i=r[V].firstChild;if(i!==null)return as(r,i)}return n[ur]}function Bh(t,n,e,r,i,o,s){for(;e!=null;){let a=r[Hn];if(e.type===128){e=e.next;continue}let l=r[e.index],c=e.type;if(s&&n===0&&(l&&$i(Ht(l),r),e.flags|=2),!ec(e))if(c&8)Bh(t,n,e.child,r,i,o,!1),Hi(n,t,a,i,l,e,o,r);else if(c&32){let d=Fh(e,r),f;for(;f=d();)Hi(n,t,a,i,f,e,o,r);Hi(n,t,a,i,l,e,o,r)}else c&16?py(t,n,r,e,i,o):Hi(n,t,a,i,l,e,o,r);e=s?e.projectionNext:e.next}}function sc(t,n,e,r,i,o){Bh(e,r,t.firstChild,n,i,o,!1)}function nI(t,n,e){let r=n[Ae],i=uy(t,e,n),o=e.parent||n[gt],s=fy(o,e,n);py(r,0,n,e,i,s)}function py(t,n,e,r,i,o){let s=e[vt],l=s[gt].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Hi(n,t,e[Hn],i,d,r,o,e)}else{let c=l,d=s[$e];Pb(r)&&(c.flags|=128),Bh(t,n,c,d,i,o,!0)}}function rI(t,n,e,r,i,o,s){let a=r[ur],l=Ht(r);a!==l&&Hi(n,t,e,o,a,i,s);for(let c=Ne;c<r.length;c++){let d=r[c];sc(d[V],d,t,n,o,a)}}function iI(t,n,e,r,i){if(n)i?t.addClass(e,r):t.removeClass(e,r);else{let o=r.indexOf("-")===-1?void 0:cn.DashCase;i==null?t.removeStyle(e,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=cn.Important),t.setStyle(e,r,i,o))}}function my(t,n,e,r,i){let o=Wn(),s=r&2;try{fr(-1),s&&n.length>Le&&ay(t,n,Le,!1);let a=s?fe.TemplateUpdateStart:fe.TemplateCreateStart;we(a,i,e),e(r,i)}finally{fr(o);let a=s?fe.TemplateUpdateEnd:fe.TemplateCreateEnd;we(a,i,e)}}function Hh(t,n,e){dI(t,n,e),(e.flags&64)===64&&uI(t,n,e)}function ac(t,n,e=Ut){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?e(n,t):t[s];t[i++]=a}}}function oI(t,n,e,r){let o=r.get($b,zb)||e===ln.ShadowDom||e===ln.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return sI(s),s}function sI(t){aI(t)}var aI=()=>null;function lI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function cI(t,n,e,r,i,o){let s=n[V];if(lc(t,s,n,e,r)){xn(t)&&vy(n,t.index);return}t.type&3&&(e=lI(e)),gy(t,n,e,r,i,o)}function gy(t,n,e,r,i,o){if(t.type&3){let s=Ut(t,n);r=o!=null?o(r,t.value||"",e):r,i.setProperty(s,e,r)}else t.type&12}function vy(t,n){let e=zt(n,t);e[z]&16||(e[z]|=64)}function dI(t,n,e){let r=e.directiveStart,i=e.directiveEnd;xn(e)&&jx(n,e,t.data[r+e.componentOffset]),t.firstCreatePass||jl(e,n);let o=e.initialInputs;for(let s=r;s<i;s++){let a=t.data[s],l=cs(n,t,s,e);if($i(l,n),o!==null&&pI(n,s-r,l,a,e,o),In(a)){let c=zt(e.index,n);c[Pe]=cs(n,t,s,e)}}}function uI(t,n,e){let r=e.directiveStart,i=e.directiveEnd,o=e.index,s=Tv();try{fr(o);for(let a=r;a<i;a++){let l=t.data[a],c=n[a];wl(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&fI(l,c)}}finally{fr(-1),wl(s)}}function fI(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function by(t,n){let e=t.directiveRegistry,r=null;if(e)for(let i=0;i<e.length;i++){let o=e[i];iy(n,o.selectors,!1)&&(r??=[],In(o)?r.unshift(o):r.push(o))}return r}function hI(t,n,e,r,i,o){let s=Ut(t,n);yy(n[Ae],s,o,t.value,e,r,i)}function yy(t,n,e,r,i,o,s){if(o==null)t.removeAttribute(n,i,e);else{let a=s==null?Qo(o):s(o,r||"",i);t.setAttribute(n,i,a,e)}}function pI(t,n,e,r,i,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];rh(r,e,l,c)}}function _y(t,n,e,r,i){let o=Le+e,s=n[V],a=i(s,n,t,r,e);n[o]=a,ji(t,!0);let l=t.type===2;return l?(Jb(n[Ae],a,t),(Dv()===0||es(t))&&$i(a,n),wv()):$i(a,n),Il()&&(!l||!ec(t))&&jh(s,n,a,t),t}function Dy(t){let n=t;return Tf()?Af():(n=n.parent,ji(n,!1)),n}function mI(t,n){let e=t[Hn];if(!e)return;let r;try{r=e.get(Rt,null)}catch{r=null}r?.(n)}function lc(t,n,e,r,i){let o=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];rh(f,e[c],d,i),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];rh(d,c,r,i),a=!0}return a}function gI(t,n){let e=zt(n,t),r=e[V];vI(r,e);let i=e[en];i!==null&&e[Zr]===null&&(e[Zr]=Wb(i,e[Hn])),we(fe.ComponentStart);try{Uh(r,e,e[Pe])}finally{we(fe.ComponentEnd,e[Pe])}}function vI(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Uh(t,n,e){El(n);try{let r=t.viewQuery;r!==null&&nh(1,r,e);let i=t.template;i!==null&&my(t,n,i,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[En]?.finishViewCreation(t),t.staticContentQueries&&Gb(t,n),t.staticViewQueries&&nh(2,t.viewQuery,e);let o=t.components;o!==null&&bI(n,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{n[z]&=-5,xl()}}function bI(t,n){for(let e=0;e<n.length;e++)gI(t,n[e])}function ys(t,n,e,r){let i=N(null);try{let o=n.tView,a=t[z]&4096?4096:16,l=Nh(t,o,e,a,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=t[n.index];l[cr]=c;let d=t[En];return d!==null&&(l[En]=d.createEmbeddedView(o)),Uh(o,l,e),l}finally{N(i)}}function Wi(t,n){return!n||n.firstChild===null||Pb(t)}function us(t,n,e,r,i=!1){for(;e!==null;){if(e.type===128){e=i?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&r.push(Ht(o)),nn(o)&&wy(o,r);let s=e.type;if(s&8)us(t,n,e.child,r);else if(s&32){let a=Fh(e,n),l;for(;l=a();)r.push(l)}else if(s&16){let a=hy(n,e);if(Array.isArray(a))r.push(...a);else{let l=sr(n[vt]);us(l[V],l,a,r,!0)}}e=i?e.projectionNext:e.next}return r}function wy(t,n){for(let e=Ne;e<t.length;e++){let r=t[e],i=r[V].firstChild;i!==null&&us(r[V],r,i,n)}t[ur]!==t[en]&&n.push(t[ur])}function Cy(t){if(t[Kr]!==null){for(let n of t[Kr])n.impl.addSequence(n);t[Kr].length=0}}var Ey=[];function yI(t){return t[St]??_I(t)}function _I(t){let n=Ey.pop()??Object.create(wI);return n.lView=t,n}function DI(t){t.lView[St]!==t&&(t.lView=null,Ey.push(t))}var wI=G(g({},tr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{ei(t.lView)},consumerOnSignalRead(){this.lView[St]=this}});function CI(t){let n=t[St]??Object.create(EI);return n.lView=t,n}var EI=G(g({},tr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=sr(t.lView);for(;n&&!xy(n[V]);)n=sr(n);n&&yf(n)},consumerOnSignalRead(){this.lView[St]=this}});function xy(t){return t.type!==2}function Iy(t){if(t[or]===null)return;let n=!0;for(;n;){let e=!1;for(let r of t[or])r.dirty&&(e=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));n=e&&!!(t[z]&8192)}}var xI=100;function Sy(t,n=0){let r=t[tn].rendererFactory,i=!1;i||r.begin?.();try{II(t,n)}finally{i||r.end?.()}}function II(t,n){let e=Rf();try{$o(!0),sh(t,n);let r=0;for(;ts(t);){if(r===xI)throw new C(103,!1);r++,sh(t,1)}}finally{$o(e)}}function SI(t,n,e,r){if(Jr(n))return;let i=n[z],o=!1,s=!1;El(n);let a=!0,l=null,c=null;o||(xy(t)?(c=yI(n),l=Pn(c)):Ca()===null?(a=!1,c=CI(n),l=Pn(c)):n[St]&&(ir(n[St]),n[St]=null));try{bf(n),Iv(t.bindingStartIndex),e!==null&&my(t,n,e,2,r);let d=(i&3)===3;if(!o)if(d){let p=t.preOrderCheckHooks;p!==null&&kl(n,p,null)}else{let p=t.preOrderHooks;p!==null&&Nl(n,p,0,null),Hf(n,0)}if(s||MI(n),Iy(n),My(n,0),t.contentQueries!==null&&Gb(t,n),!o)if(d){let p=t.contentCheckHooks;p!==null&&kl(n,p)}else{let p=t.contentHooks;p!==null&&Nl(n,p,1),Hf(n,1)}AI(t,n);let f=t.components;f!==null&&Ay(n,f,0);let h=t.viewQuery;if(h!==null&&nh(2,h,r),!o)if(d){let p=t.viewCheckHooks;p!==null&&kl(n,p)}else{let p=t.viewHooks;p!==null&&Nl(n,p,2),Hf(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[bl]){for(let p of n[bl])p();n[bl]=null}o||(Cy(n),n[z]&=-73)}catch(d){throw o||ei(n),d}finally{c!==null&&(rr(c,l),a&&DI(c)),xl()}}function My(t,n){for(let e=Vb(t);e!==null;e=jb(e))for(let r=Ne;r<e.length;r++){let i=e[r];Ty(i,n)}}function MI(t){for(let n=Vb(t);n!==null;n=jb(n)){if(!(n[z]&2))continue;let e=n[Xr];for(let r=0;r<e.length;r++){let i=e[r];yf(i)}}}function TI(t,n,e){we(fe.ComponentStart);let r=zt(n,t);try{Ty(r,e)}finally{we(fe.ComponentEnd,r[Pe])}}function Ty(t,n){_l(t)&&sh(t,n)}function sh(t,n){let r=t[V],i=t[z],o=t[St],s=!!(n===0&&i&16);if(s||=!!(i&64&&n===0),s||=!!(i&1024),s||=!!(o?.dirty&&Ci(o)),s||=!1,o&&(o.dirty=!1),t[z]&=-9217,s)SI(r,t,r.template,t[Pe]);else if(i&8192){let a=N(null);try{Iy(t),My(t,1);let l=r.components;l!==null&&Ay(t,l,1),Cy(t)}finally{N(a)}}}function Ay(t,n,e){for(let r=0;r<n.length;r++)TI(t,n[r],e)}function AI(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let r=0;r<e.length;r++){let i=e[r];if(i<0)fr(~i);else{let o=i,s=e[++r],a=e[++r];Mv(s,o);let l=n[o];we(fe.HostBindingsUpdateStart,l);try{a(2,l)}finally{we(fe.HostBindingsUpdateEnd,l)}}}}finally{fr(-1)}}function zh(t,n){let e=Rf()?64:1088;for(t[tn].changeDetectionScheduler?.notify(n);t;){t[z]|=e;let r=sr(t);if(Vi(t)&&!r)return t;t=r}return null}function Ry(t,n,e,r){return[t,!0,0,n,null,r,null,e,null,null]}function ky(t,n){let e=Ne+n;if(e<t.length)return t[e]}function _s(t,n,e,r=!0){let i=n[V];if(RI(i,n,t,e),r){let s=oh(e,t),a=n[Ae],l=a.parentNode(t[ur]);l!==null&&Zx(i,t[gt],a,n,l,s)}let o=n[Zr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Ny(t,n){let e=fs(t,n);return e!==void 0&&oc(e[V],e),e}function fs(t,n){if(t.length<=Ne)return;let e=Ne+n,r=t[e];if(r){let i=r[cr];i!==null&&i!==t&&Vh(i,r),n>0&&(t[e-1][Bt]=r[Bt]);let o=Ko(t,Ne+n);qx(r[V],r);let s=o[En];s!==null&&s.detachView(o[V]),r[$e]=null,r[Bt]=null,r[z]&=-129}return r}function RI(t,n,e,r){let i=Ne+r,o=e.length;r>0&&(e[i-1][Bt]=n),r<o-Ne?(n[Bt]=e[i],af(e,Ne+r,n)):(e.push(n),n[Bt]=null),n[$e]=e;let s=n[cr];s!==null&&e!==s&&Oy(s,n);let a=n[En];a!==null&&a.insertView(t),Dl(n),n[z]|=128}function Oy(t,n){let e=t[Xr],r=n[$e];if(zn(r))t[z]|=2;else{let i=r[$e][vt];n[vt]!==i&&(t[z]|=2)}e===null?t[Xr]=[n]:e.push(n)}var hr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[V];return us(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Pe]}set context(n){this._lView[Pe]=n}get destroyed(){return Jr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[$e];if(nn(n)){let e=n[Jo],r=e?e.indexOf(this):-1;r>-1&&(fs(n,r),Ko(e,r))}this._attachedToViewContainer=!1}oc(this._lView[V],this._lView)}onDestroy(n){_f(this._lView,n)}markForCheck(){zh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[z]&=-129}reattach(){Dl(this._lView),this._lView[z]|=128}detectChanges(){this._lView[z]|=1024,Sy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Vi(this._lView),e=this._lView[cr];e!==null&&!n&&Vh(e,this._lView),dy(this._lView[V],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=n;let e=Vi(this._lView),r=this._lView[cr];r!==null&&!e&&Oy(r,this._lView),Dl(this._lView)}};var dt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=kI;constructor(e,r,i){this._declarationLView=e,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,i){let o=ys(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:r,dehydratedView:i});return new hr(o)}}return t})();function kI(){return cc(ct(),Z())}function cc(t,n){return t.type&4?new dt(n,t,Zi(t,n)):null}function Ki(t,n,e,r,i){let o=t.data[n];if(o===null)o=NI(t,n,e,r,i),Sv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=r,o.attrs=i;let s=Cv();o.injectorIndex=s===null?-1:s.injectorIndex}return ji(o,!0),o}function NI(t,n,e,r,i){let o=Mf(),s=Tf(),a=s?o:o&&o.parent,l=t.data[n]=FI(t,a,e,n,r,i);return OI(t,l,o,s),l}function OI(t,n,e,r){t.firstChild===null&&(t.firstChild=n),e!==null&&(r?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function FI(t,n,e,r,i,o){let s=n?n.injectorIndex:-1,a=0;return xf()&&(a|=128),{type:e,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function PI(t){let n=t[mf]??[],r=t[$e][Ae],i=[];for(let o of n)o.data[Ub]!==void 0?i.push(o):LI(o,r);t[mf]=i}function LI(t,n){let e=0,r=t.firstChild;if(r){let i=t.data[Hb];for(;e<i;){let o=r.nextSibling;Xb(n,r,!1),r=o,e++}}}var VI=()=>null,jI=()=>null;function Ul(t,n){return VI(t,n)}function Fy(t,n,e){return jI(t,n,e)}var Py=class{},dc=class{},ah=class{resolveComponentFactory(n){throw new C(917,!1)}},Ds=class{static NULL=new ah},Ue=class{},Se=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>BI()}return t})();function BI(){let t=Z(),n=ct(),e=zt(n.index,t);return(zn(e)?e:t)[Ae]}var Ly=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var Fl={},lh=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,r){let i=this.injector.get(n,Fl,r);return i!==Fl||e===Fl?i:this.parentInjector.get(n,e,r)}};function zl(t,n,e){let r=e?t.styles:null,i=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)i=ul(i,a);else if(o==2){let l=a,c=n[++s];r=ul(r,l+": "+c+";")}}e?t.styles=r:t.stylesWithoutHost=r,e?t.classes=i:t.classesWithoutHost=i}function $(t,n=0){let e=Z();if(e===null)return P(t,n);let r=ct();return kb(r,e,rt(t),n)}function Vy(t,n,e,r,i){let o=r===null?null:{"":-1},s=i(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}zI(t,n,e,a,o,l,c)}o!==null&&r!==null&&HI(e,r,o)}function HI(t,n,e){let r=t.localNames=[];for(let i=0;i<n.length;i+=2){let o=e[n[i+1]];if(o==null)throw new C(-301,!1);r.push(n[i],o)}}function UI(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function zI(t,n,e,r,i,o,s){let a=r.length,l=null;for(let h=0;h<a;h++){let p=r[h];l===null&&In(p)&&(l=p,UI(t,e,h)),Jf(jl(e,n),t,p.type)}YI(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let p=r[h];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,f=sy(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=r[h];if(e.mergedAttrs=zi(e.mergedAttrs,p.hostAttrs),WI(t,e,n,f,p),ZI(f,p,i),s!==null&&s.has(p)){let[_,E]=s.get(p);e.directiveToIndex.set(p.type,[f,_+e.directiveStart,E+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let m=p.type.prototype;!c&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}$I(t,e,o)}function $I(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=t.data[r];if(e===null||!e.has(i))ib(0,n,i,r),ib(1,n,i,r),sb(n,r,!1);else{let o=e.get(i);ob(0,n,o,r),ob(1,n,o,r),sb(n,r,!0)}}}function ib(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(r),jy(n,o)}}function ob(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),jy(n,s)}}function jy(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function sb(t,n,e){let{attrs:r,inputs:i,hostDirectiveInputs:o}=t;if(r===null||!e&&i===null||e&&o===null||Rh(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===n){s??=[],s.push(l,r[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function WI(t,n,e,r,i){t.data[r]=i;let o=i.factory||(i.factory=Ur(i.type,!0)),s=new ni(o,In(i),$,null);t.blueprint[r]=s,e[r]=s,GI(t,n,r,sy(t,e,i.hostVars,kt),i)}function GI(t,n,e,r,i){let o=i.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;qI(s)!=a&&s.push(a),s.push(e,r,o)}}function qI(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function ZI(t,n,e){if(e){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)e[n.exportAs[r]]=t;In(n)&&(e[""]=t)}}function YI(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function By(t,n,e,r,i,o,s,a){let l=n[V],c=l.consts,d=Mt(c,s),f=Ki(l,t,e,r,d);return o&&Vy(l,n,f,Mt(c,a),i),f.mergedAttrs=zi(f.mergedAttrs,f.attrs),f.attrs!==null&&zl(f,f.attrs,!1),f.mergedAttrs!==null&&zl(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Hy(t,n){Cb(t,n),gf(n)&&t.queries.elementEnd(n)}function QI(t,n,e,r,i,o){let s=n.consts,a=Mt(s,i),l=Ki(n,t,e,r,a);if(l.mergedAttrs=zi(l.mergedAttrs,l.attrs),o!=null){let c=Mt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&zl(l,l.attrs,!1),l.mergedAttrs!==null&&zl(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function $h(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function KI(t,n,e){return t[n]=e}function un(t,n,e){if(e===kt)return!1;let r=t[n];return Object.is(r,e)?!1:(t[n]=e,!0)}function $f(t,n,e){return function r(i){let o=xn(t)?zt(t.index,n):n;zh(o,5);let s=n[Pe],a=ab(n,s,e,i),l=r.__ngNextListenerFn__;for(;l;)a=ab(n,s,l,i)&&a,l=l.__ngNextListenerFn__;return a}}function ab(t,n,e,r){let i=N(null);try{return we(fe.OutputStart,n,e),e(r)!==!1}catch(o){return mI(t,o),!1}finally{we(fe.OutputEnd,n,e),N(i)}}function XI(t,n,e,r,i,o,s,a){let l=es(t),c=!1,d=null;if(!r&&l&&(d=eS(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=Ut(t,e),h=r?r(f):f;mx(e,h,o,a);let p=i.listen(h,o,a);if(!JI(o)){let m=r?_=>r(Ht(_[t.index])):t.index;Uy(m,n,e,o,a,p,!1)}}return c}function JI(t){return t.startsWith("animation")||t.startsWith("transition")}function eS(t,n,e,r){let i=t.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===e&&i[o+1]===r){let a=n[Pi],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Uy(t,n,e,r,i,o,s){let a=n.firstCreatePass?wf(n):null,l=Df(e),c=l.length;l.push(i,o),a&&a.push(r,t,c,(c+1)*(s?-1:1))}function lb(t,n,e,r,i,o){let s=n[e],a=n[V],c=a.data[e].outputs[r],f=s[c].subscribe(o);Uy(t.index,a,n,i,o,f,!0)}var ch=Symbol("BINDING");function zy(t){return t.debugInfo?.className||t.type.name||null}var $l=class extends Ds{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Bn(n);return new ii(e,this.ngModule)}};function tS(t){return Object.keys(t).map(n=>{let[e,r,i]=t[n],o={propName:e,templateName:n,isSignal:(r&nc.SignalBased)!==0};return i&&(o.transform=i),o})}function nS(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function rS(t,n,e){let r=n instanceof me?n:n?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new lh(e,r):e}function iS(t){let n=t.get(Ue,null);if(n===null)throw new C(407,!1);let e=t.get(Ly,null),r=t.get(Cn,null),i=t.get(dn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function oS(t,n){let e=$y(t);return Qb(n,e,e==="svg"?hv:e==="math"?pv:null)}function $y(t){return(t.selectors[0][0]||"div").toLowerCase()}var ii=class extends dc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=tS(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=nS(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=Fx(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,r,i,o,s){we(fe.DynamicComponentStart);let a=N(null);try{let l=this.componentDef,c=rS(l,i||this.ngModule,n),d=iS(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(zy(l),()=>this.createComponentRef(d,c,e,r,o,s)):this.createComponentRef(d,c,e,r,o,s)}finally{N(a)}}createComponentRef(n,e,r,i,o,s){let a=this.componentDef,l=sS(i,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=i?oI(c,i,a.encapsulation,e):oS(a,c),f=s?.some(cb)||o?.some(m=>typeof m!="function"&&m.bindings.some(cb)),h=Nh(null,l,null,512|oy(a),null,null,n,c,e,null,Wb(d,e,!0));h[Le]=d,El(h);let p=null;try{let m=By(Le,h,2,"#host",()=>l.directiveRegistry,!0,0);Jb(c,d,m),$i(d,h),Hh(l,h,m),qb(l,m,h),Hy(l,m),r!==void 0&&lS(m,this.ngContentSelectors,r),p=zt(m.index,h),h[Pe]=p[Pe],Uh(l,h,null)}catch(m){throw p!==null&&th(p),th(h),m}finally{we(fe.DynamicComponentEnd),xl()}return new Wl(this.componentType,h,!!f)}};function sS(t,n,e,r){let i=t?["ng-version","21.2.10"]:Px(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[ch].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let h of f.bindings){a+=h[ch].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[n];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,h=rf(f);l.push(h)}return kh(0,null,aS(o,s),1,a,l,null,null,null,[i],null)}function aS(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let r of t)r.create();if(e&2&&n)for(let r of n)r.update()}}function cb(t){let n=t[ch].kind;return n==="input"||n==="twoWay"}var Wl=class extends Py{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,r){super(),this._rootLView=e,this._hasInputBindings=r,this._tNode=yl(e[V],Le),this.location=Zi(this._tNode,e),this.instance=zt(this._tNode.index,e)[Pe],this.hostView=this.changeDetectorRef=new hr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let i=this._rootLView,o=lc(r,i[V],i,n,e);this.previousInputValues.set(n,e);let s=zt(r.index,i);zh(s,1)}get injector(){return new ti(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function lS(t,n,e){let r=t.projection=[];for(let i=0;i<n.length;i++){let o=e[i];r.push(o!=null&&o.length?Array.from(o):null)}}var it=(()=>{class t{static __NG_ELEMENT_ID__=cS}return t})();function cS(){let t=ct();return Wy(t,Z())}var dh=class t extends it{_lContainer;_hostTNode;_hostLView;constructor(n,e,r){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=r}get element(){return Zi(this._hostTNode,this._hostLView)}get injector(){return new ti(this._hostTNode,this._hostLView)}get parentInjector(){let n=Ih(this._hostTNode,this._hostLView);if(Ib(n)){let e=Vl(n,this._hostLView),r=Ll(n),i=e[V].data[r+8];return new ti(i,e)}else return new ti(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=db(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Ne}createEmbeddedView(n,e,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=Ul(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,i,Wi(this._hostTNode,s)),a}createComponent(n,e,r,i,o,s,a){let l=n&&!U0(n),c;if(l)c=e;else{let E=e||{};c=E.index,r=E.injector,i=E.projectableNodes,o=E.environmentInjector||E.ngModuleRef,s=E.directives,a=E.bindings}let d=l?n:new ii(Bn(n)),f=r||this.parentInjector;if(!o&&d.ngModule==null){let M=(l?f:this.parentInjector).get(me,null);M&&(o=M)}let h=Bn(d.componentType??{}),p=Ul(this._lContainer,h?.id??null),m=p?.firstChild??null,_=d.create(f,i,m,o,s,a);return this.insertImpl(_.hostView,c,Wi(this._hostTNode,p)),_}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,r){let i=n._lView;if(vv(i)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=i[$e],c=new t(l,l[gt],l[$e]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return _s(s,i,o,r),n.attachToViewContainerRef(),af(Wf(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=db(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),r=fs(this._lContainer,e);r&&(Ko(Wf(this._lContainer),e),oc(r[V],r))}detach(n){let e=this._adjustIndex(n,-1),r=fs(this._lContainer,e);return r&&Ko(Wf(this._lContainer),e)!=null?new hr(r):null}_adjustIndex(n,e=0){return n??this.length+e}};function db(t){return t[Jo]}function Wf(t){return t[Jo]||(t[Jo]=[])}function Wy(t,n){let e,r=n[t.index];return nn(r)?e=r:(e=Ry(r,n,null,t),n[t.index]=e,Oh(n,e)),uS(e,n,t,r),new dh(e,t,n)}function dS(t,n){let e=t[Ae],r=e.createComment(""),i=Ut(n,t),o=e.parentNode(i);return Hl(e,o,r,e.nextSibling(i),!1),r}var uS=pS,fS=()=>!1;function hS(t,n,e){return fS(t,n,e)}function pS(t,n,e,r){if(t[ur])return;let i;e.type&8?i=Ht(r):i=dS(n,e),t[ur]=i}var uh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},fh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let r=n.contentQueries!==null?n.contentQueries[0]:e.length,i=[];for(let o=0;o<r;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new t(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Gh(n,e).matches!==null&&this.queries[e].setDirty()}},Gl=class{flags;read;predicate;constructor(n,e,r=null){this.flags=e,this.read=r,typeof n=="string"?this.predicate=yS(n):this.predicate=n}},hh=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let r=0;r<this.length;r++){let i=e!==null?e.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},ph=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==e;)r=r.parent;return e===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,e,mS(e,o)),this.matchTNodeWithReadOption(n,e,Ol(e,n,o,!1,!1))}else r===dt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Ol(e,n,r,!1,!1))}matchTNodeWithReadOption(n,e,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===k||i===it||i===dt&&e.type&4)this.addMatch(e.index,-2);else{let o=Ol(e,n,i,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,r)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function mS(t,n){let e=t.localNames;if(e!==null){for(let r=0;r<e.length;r+=2)if(e[r]===n)return e[r+1]}return null}function gS(t,n){return t.type&11?Zi(t,n):t.type&4?cc(t,n):null}function vS(t,n,e,r){return e===-1?gS(n,t):e===-2?bS(t,n,r):cs(t,t[V],e,n)}function bS(t,n,e){if(e===k)return Zi(n,t);if(e===dt)return cc(n,t);if(e===it)return Wy(n,t)}function Gy(t,n,e,r){let i=n[En].queries[r];if(i.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(vS(n,d,s[l+1],e.metadata.read))}}i.matches=a}return i.matches}function mh(t,n,e,r){let i=t.queries.getByIndex(e),o=i.matches;if(o!==null){let s=Gy(t,n,i,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=Ne;f<d.length;f++){let h=d[f];h[cr]===h[$e]&&mh(h[V],h,c,r)}if(d[Xr]!==null){let f=d[Xr];for(let h=0;h<f.length;h++){let p=f[h];mh(p[V],p,c,r)}}}}}return r}function Wh(t,n){return t[En].queries[n].queryList}function qy(t,n,e){let r=new an((e&4)===4);return _v(t,n,r,r.destroy),(n[En]??=new fh).queries.push(new uh(r))-1}function Zy(t,n,e){let r=Oe();return r.firstCreatePass&&(Qy(r,new Gl(t,n,e),-1),(n&2)===2&&(r.staticViewQueries=!0)),qy(r,Z(),n)}function Yy(t,n,e,r){let i=Oe();if(i.firstCreatePass){let o=ct();Qy(i,new Gl(n,e,r),o.index),_S(i,t),(e&2)===2&&(i.staticContentQueries=!0)}return qy(i,Z(),e)}function yS(t){return t.split(",").map(n=>n.trim())}function Qy(t,n,e){t.queries===null&&(t.queries=new hh),t.queries.track(new ph(n,e))}function _S(t,n){let e=t.contentQueries||(t.contentQueries=[]),r=e.length?e[e.length-1]:-1;n!==r&&e.push(t.queries.length-1,n)}function Gh(t,n){return t.queries.getByIndex(n)}function Ky(t,n){let e=t[V],r=Gh(e,n);return r.crossesNgTemplate?mh(e,t,n,[]):Gy(e,t,r,n)}function Xy(t,n,e){let r,i=No(()=>{r._dirtyCounter();let o=DS(r,t);if(n&&o===void 0)throw new C(-951,!1);return o});return r=i[Fe],r._dirtyCounter=F(0),r._flatValue=void 0,i}function qh(t){return Xy(!0,!1,t)}function Zh(t){return Xy(!0,!0,t)}function Jy(t,n){let e=t[Fe];e._lView=Z(),e._queryIndex=n,e._queryList=Wh(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(r=>r+1))}function DS(t,n){let e=t._lView,r=t._queryIndex;if(e===void 0||r===void 0||e[z]&4)return n?void 0:lt;let i=Wh(e,r),o=Ky(e,r);return i.reset(o,Fb),n?i.first:i._changesDetected||t._flatValue===void 0?t._flatValue=i.toArray():t._flatValue}var Mn=class{},uc=class{};var ql=class extends Mn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new $l(this);constructor(n,e,r,i=!0){super(),this.ngModuleType=n,this._parent=e;let o=nf(n);this._bootstrapComponents=ny(o.bootstrap),this._r3Injector=Ff(n,e,[{provide:Mn,useValue:this},{provide:Ds,useValue:this.componentFactoryResolver},...r],Zo(n),new Set(["environment"])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Zl=class extends uc{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new ql(this.moduleType,n,[])}};var hs=class extends Mn{injector;componentFactoryResolver=new $l(this);instance=null;constructor(n){super();let e=new $r([...n.providers,{provide:Mn,useValue:this},{provide:Ds,useValue:this.componentFactoryResolver}],n.parent||Fi(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ws(t,n,e=null){return new hs({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var wS=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let r=df(!1,e.type),i=r.length>0?ws([r],this._injector,""):null;this.cachedInjectors.set(e,i)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(P(me))})}return t})();function x(t){return ms(()=>{let n=e_(t),e=G(g({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Sh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(wS).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ln.Emulated,styles:t.styles||lt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&pr("NgStandalone"),t_(e);let r=t.dependencies;return e.directiveDefs=ub(r,CS),e.pipeDefs=ub(r,Xg),e.id=IS(e),e})}function CS(t){return Bn(t)||rf(t)}function ie(t){return ms(()=>({type:t.type,bootstrap:t.bootstrap||lt,declarations:t.declarations||lt,imports:t.imports||lt,exports:t.exports||lt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function ES(t,n){if(t==null)return lr;let e={};for(let r in t)if(t.hasOwnProperty(r)){let i=t[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=nc.None,l=null),e[o]=[r,a,l],n[o]=s}return e}function xS(t){if(t==null)return lr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function R(t){return ms(()=>{let n=e_(t);return t_(n),n})}function e_(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||lr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||lt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:ES(t.inputs,n),outputs:xS(t.outputs),debugInfo:null}}function t_(t){t.features?.forEach(n=>n(t))}function ub(t,n){return t?()=>{let e=typeof t=="function"?t():t,r=[];for(let i of e){let o=n(i);o!==null&&r.push(o)}return r}:null}function IS(t){let n=0,e=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function SS(t){return Object.getPrototypeOf(t.prototype).constructor}function xe(t){let n=SS(t.type),e=!0,r=[t];for(;n;){let i;if(In(t))i=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new C(903,!1);i=n.\u0275dir}if(i){if(e){r.push(i);let s=t;s.inputs=Gf(t.inputs),s.declaredInputs=Gf(t.declaredInputs),s.outputs=Gf(t.outputs);let a=i.hostBindings;a&&kS(t,a);let l=i.viewQuery,c=i.contentQueries;if(l&&AS(t,l),c&&RS(t,c),MS(t,i),Kg(t.outputs,i.outputs),In(i)&&i.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(i.data.animation)}}let o=i.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===xe&&(e=!1)}}n=Object.getPrototypeOf(n)}TS(r)}function MS(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let r=n.inputs[e];r!==void 0&&(t.inputs[e]=r,t.declaredInputs[e]=n.declaredInputs[e])}}function TS(t){let n=0,e=null;for(let r=t.length-1;r>=0;r--){let i=t[r];i.hostVars=n+=i.hostVars,i.hostAttrs=zi(i.hostAttrs,e=zi(e,i.hostAttrs))}}function Gf(t){return t===lr?{}:t===lt?[]:t}function AS(t,n){let e=t.viewQuery;e?t.viewQuery=(r,i)=>{n(r,i),e(r,i)}:t.viewQuery=n}function RS(t,n){let e=t.contentQueries;e?t.contentQueries=(r,i,o)=>{n(r,i,o),e(r,i,o)}:t.contentQueries=n}function kS(t,n){let e=t.hostBindings;e?t.hostBindings=(r,i)=>{n(r,i),e(r,i)}:t.hostBindings=n}function n_(t,n,e,r,i,o,s,a){if(e.firstCreatePass){t.mergedAttrs=zi(t.mergedAttrs,t.attrs);let d=t.tView=kh(2,t,i,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),ji(t,!1);let l=OS(e,n,t,r);Il()&&jh(e,n,l,t),$i(l,n);let c=Ry(l,n,l,t);n[r+Le]=c,Oh(n,c),hS(c,t,n)}function NS(t,n,e,r,i,o,s,a,l,c,d){let f=e+Le,h;return n.firstCreatePass?(h=Ki(n,f,4,s||null,a||null),Ef()&&Vy(n,t,h,Mt(n.consts,c),by),Cb(n,h)):h=n.data[f],n_(h,t,n,e,r,i,o,l),es(h)&&Hh(n,t,h),c!=null&&ac(t,h,d),h}function Gi(t,n,e,r,i,o,s,a,l,c,d){let f=e+Le,h;if(n.firstCreatePass){if(h=Ki(n,f,4,s||null,a||null),c!=null){let p=Mt(n.consts,c);h.localNames=[];for(let m=0;m<p.length;m+=2)h.localNames.push(p[m],-1)}}else h=n.data[f];return n_(h,t,n,e,r,i,o,l),c!=null&&ac(t,h,d),h}function yt(t,n,e,r,i,o,s,a){let l=Z(),c=Oe(),d=Mt(c.consts,o);return NS(l,c,t,n,e,r,i,d,void 0,s,a),yt}function Xi(t,n,e,r,i,o,s,a){let l=Z(),c=Oe(),d=Mt(c.consts,o);return Gi(l,c,t,n,e,r,i,d,void 0,s,a),Xi}var OS=FS;function FS(t,n,e,r){return Sl(!0),n[Ae].createComment("")}var Yh=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function qn(t){return typeof t=="function"&&t[Fe]!==void 0}var Qh=new v("");function mr(t){return!!t&&typeof t.then=="function"}function Kh(t){return!!t&&typeof t.subscribe=="function"}var r_=new v("");var Xh=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,r)=>{this.resolve=e,this.reject=r});appInits=u(r_,{optional:!0})??[];injector=u(te);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let i of this.appInits){let o=Je(this.injector,i);if(mr(o))e.push(o);else if(Kh(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{r()}).catch(i=>{this.reject(i)}),e.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fc=new v("");function i_(){vu(()=>{let t="";throw new C(600,t)})}function o_(t){return t.isBoundToModule}var PS=10;var $t=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Rt);afterRenderManager=u(ic);zonelessEnabled=u(is);rootEffectScheduler=u(Tl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new D;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Gn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(q(e=>!e))}constructor(){u(dn,{optional:!0})}whenStable(){let e;return new Promise(r=>{e=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{e.unsubscribe()})}_injector=u(me);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,r){return this.bootstrapImpl(e,r)}bootstrapImpl(e,r,i=te.NULL){return this._injector.get(S).run(()=>{we(fe.BootstrapComponentStart);let s=e instanceof dc;if(!this._injector.get(Xh).done){let m="";throw new C(405,m)}let l;s?l=e:l=this._injector.get(Ds).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=o_(l)?void 0:this._injector.get(Mn),d=r||l.selector,f=l.create(i,[],d,c),h=f.location.nativeElement,p=f.injector.get(Qh,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),ls(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),we(fe.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){we(fe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(rc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw we(fe.ChangeDetectionEnd),new C(101,!1);let e=N(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,N(e),this.afterTick.next(),we(fe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ue,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<PS;){we(fe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{we(fe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!ts(i))continue;let o=r&&!this.zonelessEnabled?0:1;Sy(i,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ts(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let r=e;this._views.push(r),r.attachToAppRef(this)}detachView(e){let r=e;ls(this._views,r),r.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(e),this._injector.get(fc,[]).forEach(i=>i(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>ls(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new C(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ls(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function hc(t,n){let e=Z(),r=$n();if(un(e,r,n)){let i=Oe(),o=rs();if(lc(o,i,e,t,n))xn(o)&&vy(e,o.index);else{let a=Ut(o,e);yy(e[Ae],a,null,o.value,t,n,null)}}return hc}function Ie(t,n,e,r){let i=Z(),o=$n();if(un(i,o,n)){let s=Oe(),a=rs();hI(a,i,t,n,e,r)}return Ie}var gh=class{destroy(n){}updateValue(n,e){}swap(n,e){let r=Math.min(n,e),i=Math.max(n,e),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(n,e){this.attach(e,this.detach(n))}};function qf(t,n,e,r,i){return t===e&&Object.is(n,r)?1:Object.is(i(t,n),i(e,r))?-1:0}function LS(t,n,e,r){let i,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){N(r);let c=n.length-1;for(N(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],h=qf(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let p=t.at(a),m=n[c],_=qf(a,p,c,m,e);if(_!==0){_<0&&t.updateValue(a,m),a--,c--;continue}let E=e(s,d),M=e(a,p),pe=e(s,f);if(Object.is(pe,M)){let Qe=e(c,m);Object.is(Qe,E)?(t.swap(s,a),t.updateValue(a,m),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(i??=new Yl,o??=hb(t,s,a,e),vh(t,i,s,pe))t.updateValue(s,f),s++,a++;else if(o.has(pe))i.set(E,t.detach(s)),a--;else{let Qe=t.create(s,n[s]);t.attach(s,Qe),s++,a++}}for(;s<=c;)fb(t,i,e,s,n[s]),s++}else if(n!=null){N(r);let c=n[Symbol.iterator]();N(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,p=qf(s,f,s,h,e);if(p!==0)p<0&&t.updateValue(s,h),s++,d=c.next();else{i??=new Yl,o??=hb(t,s,a,e);let m=e(s,h);if(vh(t,i,s,m))t.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(m))t.attach(s,t.create(s,h)),s++,a++,d=c.next();else{let _=e(s,f);i.set(_,t.detach(s)),a--}}}for(;!d.done;)fb(t,i,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));i?.forEach(c=>{t.destroy(c)})}function vh(t,n,e,r){return n!==void 0&&n.has(r)?(t.attach(e,n.get(r)),n.delete(r),!0):!1}function fb(t,n,e,r,i){if(vh(t,n,r,e(r,i)))t.updateValue(r,i);else{let o=t.create(r,i);t.attach(r,o)}}function hb(t,n,e,r){let i=new Set;for(let o=n;o<=e;o++)i.add(r(o,t.at(o)));return i}var Yl=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let r=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,r]of this.kvMap)if(n(r,e),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),n(r,e)}}};function ge(t,n,e,r,i,o,s,a){pr("NgControlFlow");let l=Z(),c=Oe(),d=Mt(c.consts,o);return Gi(l,c,t,n,e,r,i,d,256,s,a),Jh}function Jh(t,n,e,r,i,o,s,a){pr("NgControlFlow");let l=Z(),c=Oe(),d=Mt(c.consts,o);return Gi(l,c,t,n,e,r,i,d,512,s,a),Jh}function ve(t,n){pr("NgControlFlow");let e=Z(),r=$n(),i=e[r]!==kt?e[r]:-1,o=i!==-1?Ql(e,Le+i):void 0,s=0;if(un(e,r,t)){let a=N(null);try{if(o!==void 0&&Ny(o,s),t!==-1){let l=Le+t,c=Ql(e,l),d=Dh(e[V],l),f=Fy(c,d,e),h=ys(e,d,n,{dehydratedView:f});_s(c,h,s,Wi(d,f))}}finally{N(a)}}else if(o!==void 0){let a=ky(o,s);a!==void 0&&(a[Pe]=n)}}var bh=class{lContainer;$implicit;$index;constructor(n,e,r){this.lContainer=n,this.$implicit=e,this.$index=r}get $count(){return this.lContainer.length-Ne}};function Cs(t){return t}function pc(t,n){return n}var yh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,r){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=r}};function Tn(t,n,e,r,i,o,s,a,l,c,d,f,h){pr("NgControlFlow");let p=Z(),m=Oe(),_=l!==void 0,E=Z(),M=a?s.bind(E[vt][Pe]):s,pe=new yh(_,M);E[Le+t]=pe,Gi(p,m,t+1,n,e,r,i,Mt(m.consts,o),256),_&&Gi(p,m,t+2,l,c,d,f,Mt(m.consts,h),512)}var _h=class extends gh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,r){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=r}get length(){return this.lContainer.length-Ne}at(n){return this.getLView(n)[Pe].$implicit}attach(n,e){let r=e[Zr];this.needsIndexUpdate||=n!==this.length,_s(this.lContainer,e,n,Wi(this.templateTNode,r)),VS(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,jS(this.lContainer,n),BS(this.lContainer,n)}create(n,e){let r=Ul(this.lContainer,this.templateTNode.tView.ssrId);return ys(this.hostLView,this.templateTNode,new bh(this.lContainer,e,n),{dehydratedView:r})}destroy(n){oc(n[V],n)}updateValue(n,e){this.getLView(n)[Pe].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Pe].$index=n}getLView(n){return HS(this.lContainer,n)}};function An(t){let n=N(null),e=Wn();try{let r=Z(),i=r[V],o=r[e],s=e+1,a=Ql(r,s);if(o.liveCollection===void 0){let c=Dh(i,s);o.liveCollection=new _h(a,r,c)}else o.liveCollection.reset();let l=o.liveCollection;if(LS(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=$n(),d=l.length===0;if(un(r,c,d)){let f=e+2,h=Ql(r,f);if(d){let p=Dh(i,f),m=Fy(h,p,r),_=ys(r,p,void 0,{dehydratedView:m});_s(h,_,0,Wi(p,m))}else i.firstUpdatePass&&PI(h),Ny(h,0)}}}finally{N(n)}}function Ql(t,n){return t[n]}function VS(t,n){if(t.length<=Ne)return;let e=Ne+n,r=t[e],i=r?r[dr]:void 0;if(r&&i&&i.detachedLeaveAnimationFns&&i.detachedLeaveAnimationFns.length>0){let o=r[Hn];Wx(o,i),ri.delete(r[Un]),i.detachedLeaveAnimationFns=void 0}}function jS(t,n){if(t.length<=Ne)return;let e=Ne+n,r=t[e],i=r?r[dr]:void 0;i&&i.leave&&i.leave.size>0&&(i.detachedLeaveAnimationFns=[])}function BS(t,n){return fs(t,n)}function HS(t,n){return ky(t,n)}function Dh(t,n){return yl(t,n)}function J(t,n,e){let r=Z(),i=$n();if(un(r,i,n)){let o=Oe(),s=rs();cI(s,r,t,n,r[Ae],e)}return J}function wh(t,n,e,r,i){lc(n,t,e,i?"class":"style",r)}function y(t,n,e,r){let i=Z(),o=i[V],s=t+Le,a=o.firstCreatePass?By(s,i,2,n,by,Ef(),e,r):o.data[s];if(xn(a)){let l=i[tn].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(zy(c),()=>(pb(t,n,i,a,r),y))}}return pb(t,n,i,a,r),y}function pb(t,n,e,r,i){if(_y(r,e,t,n,s_),es(r)){let o=e[V];Hh(o,e,r),qb(o,r,e)}i!=null&&ac(e,r)}function w(){let t=Oe(),n=ct(),e=Dy(n);return t.firstCreatePass&&Hy(t,e),If(e)&&Sf(),Cf(),e.classesWithoutHost!=null&&Z0(e)&&wh(t,e,Z(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Y0(e)&&wh(t,e,Z(),e.stylesWithoutHost,!1),w}function le(t,n,e,r){return y(t,n,e,r),w(),le}function he(t,n,e,r){let i=Z(),o=i[V],s=t+Le,a=o.firstCreatePass?QI(s,o,2,n,e,r):o.data[s];return _y(a,i,t,n,s_),r!=null&&ac(i,a),he}function be(){let t=ct(),n=Dy(t);return If(n)&&Sf(),Cf(),be}function ut(t,n,e,r){return he(t,n,e,r),be(),ut}var s_=(t,n,e,r,i)=>(Sl(!0),Qb(n[Ae],r,Fv()));function Zn(){return Z()}function Wt(t,n,e){let r=Z(),i=$n();if(un(r,i,n)){let o=Oe(),s=rs();gy(s,r,t,n,r[Ae],e)}return Wt}var Es="en-US";var US=Es;function a_(t){typeof t=="string"&&(US=t.toLowerCase().replace(/_/g,"-"))}function de(t,n,e){let r=Z(),i=Oe(),o=ct();return zS(i,r,r[Ae],o,t,n,e),de}function zS(t,n,e,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=$f(r,n,o),XI(r,t,n,s,e,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],p=d[f+1];l??=$f(r,n,o),lb(r,n,h,p,i,l)}if(c&&c.length)for(let f of c)l??=$f(r,n,o),lb(r,n,f,i,i,l)}}function ce(t=1){return Ov(t)}function $S(t,n){let e=null,r=Ax(t);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){e=i;continue}if(r===null?iy(t,o,!0):Nx(r,o))return i}return e}function Me(t){let n=Z()[vt][gt];if(!n.projection){let e=t?t.length:1,r=n.projection=iv(e,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?$S(o,t):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function W(t,n=0,e,r,i,o){let s=Z(),a=Oe(),l=r?t+1:null;l!==null&&Gi(s,a,l,r,i,o,null,e);let c=Ki(a,Le+t,16,null,e||null);c.projection===null&&(c.projection=n),Af();let f=!s[Zr]||xf();s[vt][gt].projection[c.projection]===null&&l!==null?WS(s,a,l):f&&!ec(c)&&nI(a,s,c)}function WS(t,n,e){let r=Le+e,i=n.data[r],o=t[r],s=Ul(o,i.tView.ssrId),a=ys(t,i,void 0,{dehydratedView:s});_s(o,a,0,Wi(i,s))}function wt(t,n,e,r){return Yy(t,n,e,r),wt}function ze(t,n,e){return Zy(t,n,e),ze}function j(t){let n=Z(),e=Oe(),r=Cl();ns(r+1);let i=Gh(e,r);if(t.dirty&&gv(n)===((i.metadata.flags&2)===2)){if(i.matches===null)t.reset([]);else{let o=Ky(n,r);t.reset(o,Fb),t.notifyOnChanges()}return!0}return!1}function B(){return Wh(Z(),Cl())}function mc(t,n,e,r,i){return Jy(n,Yy(t,e,r,i)),mc}function gc(t,n,e,r){return Jy(t,Zy(n,e,r)),gc}function vc(t=1){ns(Cl()+t)}function fn(t){let n=Ev();return mv(n,Le+t)}function Rl(t,n){return t<<17|n<<2}function oi(t){return t>>17&32767}function GS(t){return(t&2)==2}function qS(t,n){return t&131071|n<<17}function Ch(t){return t|2}function qi(t){return(t&131068)>>2}function Zf(t,n){return t&-131069|n<<2}function ZS(t){return(t&1)===1}function Eh(t){return t|1}function YS(t,n,e,r,i,o){let s=o?n.classBindings:n.styleBindings,a=oi(s),l=qi(s);t[r]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Oi(f,d)>0)&&(c=!0)}else d=e;if(i)if(l!==0){let h=oi(t[a+1]);t[r+1]=Rl(h,a),h!==0&&(t[h+1]=Zf(t[h+1],r)),t[a+1]=qS(t[a+1],r)}else t[r+1]=Rl(a,0),a!==0&&(t[a+1]=Zf(t[a+1],r)),a=r;else t[r+1]=Rl(l,0),a===0?a=r:t[l+1]=Zf(t[l+1],r),l=r;c&&(t[r+1]=Ch(t[r+1])),mb(t,d,r,!0),mb(t,d,r,!1),QS(n,d,t,r,o),s=Rl(a,l),o?n.classBindings=s:n.styleBindings=s}function QS(t,n,e,r,i){let o=i?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Oi(o,n)>=0&&(e[r+1]=Eh(e[r+1]))}function mb(t,n,e,r){let i=t[e+1],o=n===null,s=r?oi(i):qi(i),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];KS(l,n)&&(a=!0,t[s+1]=r?Eh(c):Ch(c)),s=r?oi(c):qi(c)}a&&(t[e+1]=r?Ch(i):Eh(i))}function KS(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Oi(t,n)>=0:!1}var sn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function XS(t){return t.substring(sn.key,sn.keyEnd)}function JS(t){return eM(t),l_(t,c_(t,0,sn.textEnd))}function l_(t,n){let e=sn.textEnd;return e===n?-1:(n=sn.keyEnd=tM(t,sn.key=n,e),c_(t,n,e))}function eM(t){sn.key=0,sn.keyEnd=0,sn.value=0,sn.valueEnd=0,sn.textEnd=t.length}function c_(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function tM(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Yn(t,n,e){return d_(t,n,e,!1),Yn}function H(t,n){return d_(t,n,null,!0),H}function hn(t){rM(cM,nM,t,!0)}function nM(t,n){for(let e=JS(n);e>=0;e=l_(n,e))gl(t,XS(n),!0)}function d_(t,n,e,r){let i=Z(),o=Oe(),s=kf(2);if(o.firstUpdatePass&&f_(o,t,s,r),n!==kt&&un(i,s,n)){let a=o.data[Wn()];h_(o,a,i,i[Ae],t,i[s+1]=uM(n,e),r,s)}}function rM(t,n,e,r){let i=Oe(),o=kf(2);i.firstUpdatePass&&f_(i,null,o,r);let s=Z();if(e!==kt&&un(s,o,e)){let a=i.data[Wn()];if(p_(a,r)&&!u_(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=ul(l,e||"")),wh(i,a,s,e,r)}else dM(i,a,s,s[Ae],s[o+1],s[o+1]=lM(t,n,e),r,o)}}function u_(t,n){return n>=t.expandoStartIndex}function f_(t,n,e,r){let i=t.data;if(i[e+1]===null){let o=i[Wn()],s=u_(t,e);p_(o,r)&&n===null&&!s&&(n=!1),n=iM(i,o,n,r),YS(i,o,n,e,s,r)}}function iM(t,n,e,r){let i=Av(t),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(e=Yf(null,t,n,e,r),e=ps(e,n.attrs,r),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==i)if(e=Yf(i,t,n,e,r),o===null){let l=oM(t,n,r);l!==void 0&&Array.isArray(l)&&(l=Yf(null,t,n,l[1],r),l=ps(l,n.attrs,r),sM(t,n,r,l))}else o=aM(t,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),e}function oM(t,n,e){let r=e?n.classBindings:n.styleBindings;if(qi(r)!==0)return t[oi(r)]}function sM(t,n,e,r){let i=e?n.classBindings:n.styleBindings;t[oi(i)]=r}function aM(t,n,e){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let s=t[o].hostAttrs;r=ps(r,s,e)}return ps(r,n.attrs,e)}function Yf(t,n,e,r,i){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],r=ps(r,o.hostAttrs,i),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),r}function ps(t,n,e){let r=e?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?i=s:i===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),gl(t,s,e?!0:n[++o]))}return t===void 0?null:t}function lM(t,n,e){if(e==null||e==="")return lt;let r=[],i=bs(e);if(Array.isArray(i))for(let o=0;o<i.length;o++)t(r,i[o],!0);else if(i instanceof Set)for(let o of i)t(r,o,!0);else if(typeof i=="object")for(let o in i)i.hasOwnProperty(o)&&t(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function cM(t,n,e){let r=String(n);r!==""&&!r.includes(" ")&&gl(t,r,e)}function dM(t,n,e,r,i,o,s,a){i===kt&&(i=lt);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=l<i.length?i[l+1]:void 0,p=c<o.length?o[c+1]:void 0,m=null,_;d===f?(l+=2,c+=2,h!==p&&(m=f,_=p)):f===null||d!==null&&d<f?(l+=2,m=d):(c+=2,m=f,_=p),m!==null&&h_(t,n,e,r,m,_,s,a),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function h_(t,n,e,r,i,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=ZS(c)?gb(l,n,e,i,qi(c),s):void 0;if(!Kl(d)){Kl(o)||GS(c)&&(o=gb(l,null,e,i,a,s));let f=vf(Wn(),e);iI(r,s,f,i,o)}}function gb(t,n,e,r,i,o){let s=n===null,a;for(;i>0;){let l=t[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,h=e[i+1];h===kt&&(h=f?lt:void 0);let p=f?vl(h,r):d===r?h:void 0;if(c&&!Kl(p)&&(p=vl(l,r)),Kl(p)&&(a=p,s))return a;let m=t[i+1];i=s?oi(m):qi(m)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=vl(l,r))}return a}function Kl(t){return t!==void 0}function uM(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Zo(bs(t)))),t}function p_(t,n){return(t.flags&(n?8:16))!==0}function A(t,n=""){let e=Z(),r=Oe(),i=t+Le,o=r.firstCreatePass?Ki(r,i,1,n,null):r.data[i],s=fM(r,e,o,n);e[i]=s,Il()&&jh(r,e,s,o),ji(o,!1)}var fM=(t,n,e,r)=>(Sl(!0),yx(n[Ae],r));function hM(t,n,e,r=""){return un(t,$n(),e)?n+Qo(e)+r:kt}function pn(t){return Gt("",t),pn}function Gt(t,n,e){let r=Z(),i=hM(r,t,n,e);return i!==kt&&pM(r,Wn(),i),Gt}function pM(t,n,e){let r=vf(n,t);_x(t[Ae],r,e)}function bc(t){return un(Z(),$n(),t)?Qo(t):kt}function vb(t,n,e){let r=Oe();r.firstCreatePass&&m_(n,r.data,r.blueprint,In(t),e)}function m_(t,n,e,r,i){if(t=rt(t),Array.isArray(t))for(let o=0;o<t.length;o++)m_(t[o],n,e,r,i);else{let o=Oe(),s=Z(),a=ct(),l=zr(t)?t:rt(t.provide),c=ff(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(zr(t)||!t.multi){let p=new ni(c,i,$,null),m=Kf(l,n,i?d:d+h,f);m===-1?(Jf(jl(a,s),o,l),Qf(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[m]=p,s[m]=p)}else{let p=Kf(l,n,d+h,f),m=Kf(l,n,d,d+h),_=p>=0&&e[p],E=m>=0&&e[m];if(i&&!E||!i&&!_){Jf(jl(a,s),o,l);let M=vM(i?gM:mM,e.length,i,r,c,t);!i&&E&&(e[m].providerFactory=M),Qf(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(M),s.push(M)}else{let M=g_(e[i?m:p],c,!i&&r);Qf(o,t,p>-1?p:m,M)}!i&&r&&E&&e[m].componentProviders++}}}function Qf(t,n,e,r){let i=zr(n),o=dv(n);if(i||o){let l=(o?rt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[r,l]):c[d+1].push(r,l)}else c.push(e,l)}}}function g_(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Kf(t,n,e,r){for(let i=e;i<r;i++)if(n[i]===t)return i;return-1}function mM(t,n,e,r,i){return xh(this.multi,[])}function gM(t,n,e,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=cs(r,r[V],this.providerFactory.index,i);s=l.slice(0,a),xh(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],xh(o,s);return s}function xh(t,n){for(let e=0;e<t.length;e++){let r=t[e];n.push(r())}return n}function vM(t,n,e,r,i,o){let s=new ni(t,e,$,null);return s.multi=[],s.index=n,s.componentProviders=0,g_(s,i,r&&!e),s}function Te(t,n){return e=>{e.providersResolver=(r,i)=>vb(r,i?i(t):t,!1),n&&(e.viewProvidersResolver=(r,i)=>vb(r,i?i(n):n,!0))}}function mn(t,n,e){return yM(Z(),xv(),t,n,e)}function bM(t,n){let e=t[n];return e===kt?void 0:e}function yM(t,n,e,r,i,o){let s=n+e;return un(t,s,i)?KI(t,s+1,o?r.call(o,i):r(i)):bM(t,s+1)}function ep(t,n){return cc(t,n)}var Xl=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},tp=(()=>{class t{compileModuleSync(e){return new Zl(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let r=this.compileModuleSync(e),i=nf(e),o=ny(i.declarations).reduce((s,a)=>{let l=Bn(a);return l&&s.push(new ii(l)),s},[]);return new Xl(r,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var v_=(()=>{class t{applicationErrorHandler=u(Rt);appRef=u($t);taskService=u(Gn);ngZone=u(S);zonelessEnabled=u(is);tracing=u(dn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new se;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Wo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Bf,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?jv:Pf;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Wo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function b_(){return[{provide:Cn,useExisting:v_},{provide:S,useClass:Go},{provide:is,useValue:!0}]}function _M(){return typeof $localize<"u"&&$localize.locale||Es}var yc=new v("",{factory:()=>u(yc,{optional:!0,skipSelf:!0})||_M()});function ye(t){return Gg(t)}function ot(t,n){return No(t,n?.equal)}var DM=t=>t;function np(t,n){if(typeof t=="function"){let e=Pu(t,DM,n?.equal);return y_(e,n?.debugName)}else{let e=Pu(t.source,t.computation,t.equal);return y_(e,t.debugName)}}function y_(t,n){let e=t[Fe],r=t;return r.set=i=>$g(e,i),r.update=i=>Wg(e,i),r.asReadonly=Ml.bind(t),r}var E_=Symbol("InputSignalNode#UNSET"),jM=G(g({},Oo),{transformFn:void 0,applyValueToInputSignal(t,n){Tr(t,n)}});function x_(t,n){let e=Object.create(jM);e.value=t,e.transformFn=n?.transform;function r(){if(nr(e),e.value===E_){let i=null;throw new C(-950,i)}return e.value}return r[Fe]=e,r}var Is=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>gs(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function __(t,n){return x_(t,n)}function BM(t){return x_(E_,t)}var Ji=(__.required=BM,__);function D_(t,n){return qh(n)}function HM(t,n){return Zh(n)}var Ss=(D_.required=HM,D_);function w_(t,n){return qh(n)}function UM(t,n){return Zh(n)}var I_=(w_.required=UM,w_);var ip=new v(""),zM=new v("");function xs(t){return!t.moduleRef}function $M(t){let n=xs(t)?t.r3Injector:t.moduleRef.injector,e=n.get(S);return e.run(()=>{xs(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=n.get(Rt),i;if(e.runOutsideAngular(()=>{i=e.onError.subscribe({next:r})}),xs(t)){let o=()=>n.destroy(),s=t.platformInjector.get(ip);s.add(o),n.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(ip);s.add(o),t.moduleRef.onDestroy(()=>{ls(t.allPlatformModules,t.moduleRef),i.unsubscribe(),s.delete(o)})}return GM(r,e,()=>{let o=n.get(Gn),s=o.add(),a=n.get(Xh);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(yc,Es);if(a_(l||Es),!n.get(zM,!0))return xs(t)?n.get($t):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(xs(t)){let d=n.get($t);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return WM?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var WM;function GM(t,n,e){try{let r=e();return mr(r)?r.catch(i=>{throw n.runOutsideAngular(()=>t(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>t(r)),r}}var _c=null;function qM(t=[],n){return te.create({name:n,providers:[{provide:Xo,useValue:"platform"},{provide:ip,useValue:new Set([()=>_c=null])},...t]})}function ZM(t=[]){if(_c)return _c;let n=qM(t);return _c=n,i_(),YM(n),n}function YM(t){let n=t.get(Jl,null);Je(t,()=>{n?.forEach(e=>e())})}var QM=1e4;var D8=QM-1e3;var Ve=(()=>{class t{static __NG_ELEMENT_ID__=KM}return t})();function KM(t){return XM(ct(),Z(),(t&16)===16)}function XM(t,n,e){if(xn(t)&&!e){let r=zt(t.index,n);return new hr(r,r)}else if(t.type&175){let r=n[vt];return new hr(r,n)}return null}var op=class{supports(n){return n instanceof Map||$h(n)}create(){return new sp}},sp=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||$h(n)))throw new C(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(r,i)=>{if(e&&e.key===i)this._maybeAddToChanges(e,r),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(i,r);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let r=e;r!==null;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let r=n._prev;return e._next=n,e._prev=r,n._prev=e,r&&(r._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let i=this._records.get(n);this._maybeAddToChanges(i,e);let o=i._prev,s=i._next;return o&&(o._next=s),s&&(s._prev=o),i._next=null,i._prev=null,i}let r=new ap(n);return this._records.set(n,r),r.currentValue=e,this._addToAdditions(r),r}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(r=>e(n[r],r))}},ap=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function C_(){return new cp([new op])}var cp=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:C_});factories;constructor(e){this.factories=e}static create(e,r){if(r){let i=r.factories.slice();e=e.concat(i)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let r=u(t,{optional:!0,skipSelf:!0});return t.create(e,r||C_())}}}find(e){let r=this.factories.find(i=>i.supports(e));if(r)return r;throw new C(901,!1)}}return t})();function S_(t){let{rootComponent:n,appProviders:e,platformProviders:r,platformRef:i}=t;we(fe.BootstrapApplicationStart);try{let o=i?.injector??ZM(r),s=[b_(),Hv,...e||[]],a=new hs({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return $M({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{we(fe.BootstrapApplicationEnd)}}function re(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function eo(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var rp=Symbol("NOT_SET"),M_=new Set,JM=G(g({},Oo),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:rp,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==rp&&!Ci(this))return this.signal;try{for(let i of this.cleanup??M_)i()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Pn(this),r;try{r=this.userFn.apply(null,n)}finally{rr(this,e)}return(this.value===rp||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),lp=class extends ds{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,r,i,o,s=null){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(bt),s),this.scheduler=i;for(let a of Ph){let l=e[a];if(l===void 0)continue;let c=Object.create(JM);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(nr(c),c.value),c.signal[Fe]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??M_)e()}finally{ir(n)}}};function T_(t,n){let e=n?.injector??u(te),r=e.get(Cn),i=e.get(ic),o=e.get(dn,null,{optional:!0});i.impl??=e.get(Lh);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Bi,null,{optional:!0}),l=new lp(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,e,o?.snapshot(null));return i.impl.register(l),l}function Dc(t,n){let e=Bn(t),r=n.elementInjector||Fi();return new ii(e).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var A_=null;function qt(){return A_}function dp(t){A_??=t}var Ms=class{},wc=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(R_),providedIn:"platform"})}return t})();var R_=(()=>{class t extends wc{_location;_history;_doc=u(Y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return qt().getBaseHref(this._doc)}onPopState(e){let r=qt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=qt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function O_(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function k_(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function gr(t){return t&&t[0]!=="?"?`?${t}`:t}var to=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(tT),providedIn:"root"})}return t})(),eT=new v(""),tT=(()=>{class t extends to{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return O_(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+gr(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let s=this.prepareExternalUrl(i+gr(o));this._platformLocation.pushState(e,r,s)}replaceState(e,r,i,o){let s=this.prepareExternalUrl(i+gr(o));this._platformLocation.replaceState(e,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||t)(P(wc),P(eT,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vr=(()=>{class t{_subject=new D;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=iT(k_(N_(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+gr(r))}normalize(e){return t.stripTrailingSlash(rT(this._basePath,N_(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gr(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gr(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=gr;static joinWithSlash=O_;static stripTrailingSlash=k_;static \u0275fac=function(r){return new(r||t)(P(to))};static \u0275prov=b({token:t,factory:()=>nT(),providedIn:"root"})}return t})();function nT(){return new vr(P(to))}function rT(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function N_(t){return t.replace(/\/index.html$/,"")}function iT(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var up=/\s+/,F_=[],fp=(()=>{class t{_ngEl;_renderer;initialClasses=F_;rawClass;stateMap=new Map;constructor(e,r){this._ngEl=e,this._renderer=r}set klass(e){this.initialClasses=e!=null?e.trim().split(up):F_}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(up):e}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let r of e)this._updateState(r,!0);else if(e!=null)for(let r of Object.keys(e))this._updateState(r,!!e[r]);this._applyStateDiff()}_updateState(e,r){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(e,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let r=e[0],i=e[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(e,r){e=e.trim(),e.length>0&&e.split(up).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(r){return new(r||t)($(k),$(Se))};static \u0275dir=R({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var hp=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,r,i){this._ngEl=e,this._differs=r,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,r){let[i,o]=e.split("."),s=i.indexOf("-")===-1?void 0:cn.DashCase;r!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${r}${o}`:r,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(r=>this._setStyle(r.key,null)),e.forEachAddedItem(r=>this._setStyle(r.key,r.currentValue)),e.forEachChangedItem(r=>this._setStyle(r.key,r.currentValue))}static \u0275fac=function(r){return new(r||t)($(k),$(cp),$(Se))};static \u0275dir=R({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),pp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(te);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||t)($(it))};static \u0275dir=R({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[We]})}return t})();function Cc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var li=class{};var mp="browser";function P_(t){return t===mp}var Ts=class{_doc;constructor(n){this._doc=n}manager},Ec=(()=>{class t extends Ts{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||t)(P(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Sc=new v(""),yp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(s=>{s.manager=this});let i=e.filter(s=>!(s instanceof Ec));this._plugins=i.slice().reverse();let o=e.find(s=>s instanceof Ec);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new C(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(P(Sc),P(S))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),gp="ng-app-id";function L_(t){for(let n of t)n.remove()}function V_(t,n){let e=n.createElement("style");return e.textContent=t,e}function cT(t,n,e,r){let i=t.head?.querySelectorAll(`style[${gp}="${n}"],link[${gp}="${n}"]`);if(i)for(let o of i)o.removeAttribute(gp),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function bp(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var _p=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,cT(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,V_);r?.forEach(i=>this.addUsage(i,this.external,bp))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(L_(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])L_(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,V_(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,bp(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(P(Y),P(Yi),P(ai,8),P(si))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),vp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Dp=/%COMP%/g;var B_="%COMP%",dT=`_nghost-${B_}`,uT=`_ngcontent-${B_}`,fT=!0,hT=new v("",{factory:()=>fT});function pT(t){return uT.replace(Dp,t)}function mT(t){return dT.replace(Dp,t)}function H_(t,n){return n.map(e=>e.replace(Dp,t))}var wp=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,r,i,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new As(e,s,a,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof Ic?i.applyToHost(e):i instanceof Rs&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case ln.Emulated:o=new Ic(l,c,r,this.appId,d,s,a,f);break;case ln.ShadowDom:return new xc(l,e,r,s,a,this.nonce,f,c);case ln.ExperimentalIsolatedShadowDom:return new xc(l,e,r,s,a,this.nonce,f);default:o=new Rs(l,c,r,d,s,a,f);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(P(yp),P(_p),P(Yi),P(hT),P(Y),P(S),P(ai),P(dn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),As=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i){this.eventManager=n,this.doc=e,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(vp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(j_(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){n&&(j_(n)?n.content:n).insertBefore(e,r)}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new C(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+":"+e;let o=vp[i];o?n.setAttributeNS(o,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=vp[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){i&(cn.DashCase|cn.Important)?n.style.setProperty(e,r,i&cn.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){r&cn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n=="string"&&(n=qt().getGlobalEventTarget(this.doc,n),!n))throw new C(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,i)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function j_(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var xc=class extends As{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,r,i,o,s,a,l){super(n,i,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=H_(r.id,c);for(let f of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=bp(f,i);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Rs=class extends As{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let c=r.styles;this.styles=l?H_(l,c):c,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ri.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ic=class extends Rs{contentAttr;hostAttr;constructor(n,e,r,i,o,s,a,l){let c=i+"-"+r.id;super(n,e,r,o,s,a,l,c),this.contentAttr=pT(c),this.hostAttr=mT(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}};var Mc=class t extends Ms{supportsDOMEvents=!0;static makeCurrent(){dp(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=gT();return e==null?null:vT(e)}resetBaseElement(){ks=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Cc(document.cookie,n)}},ks=null;function gT(){return ks=ks||document.head.querySelector("base"),ks?ks.getAttribute("href"):null}function vT(t){return new URL(t,document.baseURI).pathname}var bT=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),U_=["alt","control","meta","shift"],yT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},_T={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},z_=(()=>{class t extends Ts{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,o){let s=t.parseEventName(r),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qt().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),U_.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(e,r){let i=yT[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),U_.forEach(s=>{if(s!==i){let a=_T[s];a(e)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(P(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function Cp(t,n,e){let r=g({rootComponent:t},DT(n,e));return S_(r)}function DT(t,n){return{platformRef:n?.platformRef,appProviders:[...IT,...t?.providers??[]],platformProviders:xT}}function wT(){Mc.makeCurrent()}function CT(){return new Jt}function ET(){return Mh(document),document}var xT=[{provide:si,useValue:mp},{provide:Jl,useValue:wT,multi:!0},{provide:Y,useFactory:ET}];var IT=[{provide:Xo,useValue:"root"},{provide:Jt,useFactory:CT},{provide:Sc,useClass:Ec,multi:!0},{provide:Sc,useClass:z_,multi:!0},wp,_p,yp,{provide:Ue,useExisting:wp},{provide:li,useClass:bT},[]];var br=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=(n.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var xp=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ip=class{encodeKey(n){return $_(n)}encodeValue(n){return $_(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function ST(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var MT=/%(\d[a-f0-9])/gi,TT={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $_(t){return encodeURIComponent(t).replace(MT,(n,e)=>TT[e]??n)}function Tc(t){return`${t}`}var Qn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ip,n.fromString){if(n.fromObject)throw new C(2805,!1);this.map=ST(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(Tc):[Tc(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Tc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(Tc(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function AT(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function W_(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function G_(t){return typeof Blob<"u"&&t instanceof Blob}function q_(t){return typeof FormData<"u"&&t instanceof FormData}function RT(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Z_="Content-Type",Y_="Accept",Q_="text/plain",K_="application/json",kT=`${K_}, ${Q_}, */*`,no=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let o;if(AT(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new C(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new br,this.context??=new xp,!this.params)this.params=new Qn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||W_(this.body)||G_(this.body)||q_(this.body)||RT(this.body)?this.body:this.body instanceof Qn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||q_(this.body)?null:G_(this.body)?this.body.type||null:W_(this.body)?null:typeof this.body=="string"?Q_:this.body instanceof Qn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?K_:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,m=n.transferCache??this.transferCache,_=n.timeout??this.timeout,E=n.body!==void 0?n.body:this.body,M=n.withCredentials??this.withCredentials,pe=n.reportProgress??this.reportProgress,Qe=n.headers||this.headers,Ke=n.params||this.params,To=n.context??this.context;return n.setHeaders!==void 0&&(Qe=Object.keys(n.setHeaders).reduce((Ao,xr)=>Ao.set(xr,n.setHeaders[xr]),Qe)),n.setParams&&(Ke=Object.keys(n.setParams).reduce((Ao,xr)=>Ao.set(xr,n.setParams[xr]),Ke)),new t(e,r,E,{params:Ke,headers:Qe,context:To,reportProgress:pe,responseType:i,withCredentials:M,transferCache:m,keepalive:o,cache:a,priority:s,timeout:_,mode:l,redirect:c,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},ci=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ci||{}),Ns=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,r="OK"){this.headers=n.headers||new br,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Sp=class t extends Ns{constructor(n={}){super(n)}type=ci.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Os=class t extends Ns{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=ci.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},ro=class extends Ns{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},NT=200,OT=204;var FT=/^\)\]\}',?\n/;var PT=(()=>{class t{xhrFactory;tracingService=u(dn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new C(-2800,!1);let r=this.xhrFactory;return U(null).pipe(He(()=>new L(o=>{let s=r.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((E,M)=>s.setRequestHeader(E,M.join(","))),e.headers.has(Y_)||s.setRequestHeader(Y_,kT),!e.headers.has(Z_)){let E=e.detectContentTypeHeader();E!==null&&s.setRequestHeader(Z_,E)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let E=e.responseType.toLowerCase();s.responseType=E!=="json"?E:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let E=s.statusText||"OK",M=new br(s.getAllResponseHeaders()),pe=s.responseURL||e.url;return l=new Sp({headers:M,status:s.status,statusText:E,url:pe}),l},d=this.maybePropagateTrace(()=>{let{headers:E,status:M,statusText:pe,url:Qe}=c(),Ke=null;M!==OT&&(Ke=typeof s.response>"u"?s.responseText:s.response),M===0&&(M=Ke?NT:0);let To=M>=200&&M<300;if(e.responseType==="json"&&typeof Ke=="string"){let Ao=Ke;Ke=Ke.replace(FT,"");try{Ke=Ke!==""?JSON.parse(Ke):null}catch(xr){Ke=Ao,To&&(To=!1,Ke={error:xr,text:Ke})}}To?(o.next(new Os({body:Ke,headers:E,status:M,statusText:pe,url:Qe||void 0})),o.complete()):o.error(new ro({error:Ke,headers:E,status:M,statusText:pe,url:Qe||void 0}))}),f=this.maybePropagateTrace(E=>{let{url:M}=c(),pe=new ro({error:E,status:s.status||0,statusText:s.statusText||"Unknown Error",url:M||void 0});o.error(pe)}),h=f;e.timeout&&(h=this.maybePropagateTrace(E=>{let{url:M}=c(),pe=new ro({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:M||void 0});o.error(pe)}));let p=!1,m=this.maybePropagateTrace(E=>{p||(o.next(c()),p=!0);let M={type:ci.DownloadProgress,loaded:E.loaded};E.lengthComputable&&(M.total=E.total),e.responseType==="text"&&s.responseText&&(M.partialText=s.responseText),o.next(M)}),_=this.maybePropagateTrace(E=>{let M={type:ci.UploadProgress,loaded:E.loaded};E.lengthComputable&&(M.total=E.total),o.next(M)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",_)),s.send(a),o.next({type:ci.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",_)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||t)(P(li))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function LT(t,n){return n(t)}function VT(t,n,e){return(r,i)=>Je(e,()=>n(r,o=>t(o,i)))}var jT=new v("",{factory:()=>[]}),X_=new v(""),BT=new v("",{factory:()=>!0});var HT=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(PT),i},providedIn:"root"})}return t})();var UT=(()=>{class t{backend;injector;chain=null;pendingTasks=u(os);contributeToStability=u(BT);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(jT),...this.injector.get(X_,[])]));this.chain=r.reduceRight((i,o)=>VT(i,o,this.injector),LT)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Bo(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(P(HT),P(me))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zT=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(UT),i},providedIn:"root"})}return t})();function Ep(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var di=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof no)o=e;else{let l;i.headers instanceof br?l=i.headers:l=new br(i.headers);let c;i.params&&(i.params instanceof Qn?c=i.params:c=new Qn({fromObject:i.params})),o=new no(e,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=U(o).pipe(Ai(l=>this.handler.handle(l)));if(e instanceof no||i.observe==="events")return s;let a=s.pipe(ae(l=>l instanceof Os));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(q(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new C(2806,!1);return l.body}));case"blob":return a.pipe(q(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new C(2807,!1);return l.body}));case"text":return a.pipe(q(l=>{if(l.body!==null&&typeof l.body!="string")throw new C(2808,!1);return l.body}));default:return a.pipe(q(l=>l.body))}case"response":return a;default:throw new C(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new Qn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,Ep(i,r))}post(e,r,i={}){return this.request("POST",e,Ep(i,r))}put(e,r,i={}){return this.request("PUT",e,Ep(i,r))}static \u0275fac=function(r){return new(r||t)(P(zT))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var eD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(P(Y))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Q="primary",Zs=Symbol("RouteTitle"),kp=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function fi(t){return new kp(t)}function Mp(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function lD(t,n,e){let r=e.path.split("/"),i=r.indexOf("**");if(i===-1){if(r.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||r.length<t.length))return null;let l={},c=t.slice(0,r.length);return Mp(r,c,l)?{consumed:c,posParams:l}:null}if(i!==r.lastIndexOf("**"))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Mp(o,t.slice(0,o.length),a)||!Mp(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Fc(t){return new Promise((n,e)=>{t.pipe(Vn()).subscribe({next:r=>n(r),error:r=>e(r)})})}function WT(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Rn(t[e],n[e]))return!1;return!0}function Rn(t,n){let e=t?Np(t):void 0,r=n?Np(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!cD(t[i],n[i]))return!1;return!0}function Np(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function cD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function GT(t){return t.length>0?t[t.length-1]:null}function mi(t){return Lo(t)?t:mr(t)?Re(Promise.resolve(t)):U(t)}function dD(t){return Lo(t)?Fc(t):Promise.resolve(t)}var qT={exact:hD,subset:pD},uD={exact:ZT,subset:YT,ignored:()=>!0},fD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Op={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tD(t,n,e){return qT[e.paths](t.root,n.root,e.matrixParams)&&uD[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function ZT(t,n){return Rn(t,n)}function hD(t,n,e){if(!ui(t.segments,n.segments)||!kc(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!hD(t.children[r],n.children[r],e))return!1;return!0}function YT(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>cD(t[e],n[e]))}function pD(t,n,e){return mD(t,n,n.segments,e)}function mD(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ui(i,e)||n.hasChildren()||!kc(i,e,r))}else if(t.segments.length===e.length){if(!ui(t.segments,e)||!kc(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!pD(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ui(t.segments,i)||!kc(t.segments,i,r)||!t.children[Q]?!1:mD(t.children[Q],n,o,r)}}function kc(t,n,e){return n.every((r,i)=>uD[e](t[i].parameters,r.parameters))}var Ft=class{root;queryParams;fragment;_queryParamMap;constructor(n=new _e([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=fi(this.queryParams),this._queryParamMap}toString(){return XT.serialize(this)}},_e=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Nc(this)}},yr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=fi(this.parameters),this._parameterMap}toString(){return vD(this)}};function QT(t,n){return ui(t,n)&&t.every((e,r)=>Rn(e.parameters,n[r].parameters))}function ui(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function KT(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===Q&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==Q&&(e=e.concat(n(i,r)))}),e}var ho=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>new _r,providedIn:"root"})}return t})(),_r=class{parse(n){let e=new Pp(n);return new Ft(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Fs(n.root,!0)}`,r=tA(n.queryParams),i=typeof n.fragment=="string"?`#${JT(n.fragment)}`:"";return`${e}${r}${i}`}},XT=new _r;function Nc(t){return t.segments.map(n=>vD(n)).join("/")}function Fs(t,n){if(!t.hasChildren())return Nc(t);if(n){let e=t.children[Q]?Fs(t.children[Q],!1):"",r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==Q&&r.push(`${i}:${Fs(o,!1)}`)}),r.length>0?`${e}(${r.join("//")})`:e}else{let e=KT(t,(r,i)=>i===Q?[Fs(t.children[Q],!1)]:[`${i}:${Fs(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[Q]!=null?`${Nc(t)}/${e[0]}`:`${Nc(t)}/(${e.join("//")})`}}function gD(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ac(t){return gD(t).replace(/%3B/gi,";")}function JT(t){return encodeURI(t)}function Fp(t){return gD(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Oc(t){return decodeURIComponent(t)}function nD(t){return Oc(t.replace(/\+/g,"%20"))}function vD(t){return`${Fp(t.path)}${eA(t.parameters)}`}function eA(t){return Object.entries(t).map(([n,e])=>`;${Fp(n)}=${Fp(e)}`).join("")}function tA(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${Ac(e)}=${Ac(i)}`).join("&"):`${Ac(e)}=${Ac(r)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var nA=/^[^\/()?;#]+/;function Tp(t){let n=t.match(nA);return n?n[0]:""}var rA=/^[^\/()?;=#]+/;function iA(t){let n=t.match(rA);return n?n[0]:""}var oA=/^[^=?&#]+/;function sA(t){let n=t.match(oA);return n?n[0]:""}var aA=/^[^&#]+/;function lA(t){let n=t.match(aA);return n?n[0]:""}var Pp=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _e([],{}):new _e([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new C(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,n));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[Q]=new _e(e,r)),i}parseSegment(){let n=Tp(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(n),new yr(Oc(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=iA(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let i=Tp(this.remaining);i&&(r=i,this.capture(r))}n[Oc(e)]=Oc(r)}parseQueryParam(n){let e=sA(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let s=lA(this.remaining);s&&(r=s,this.capture(r))}let i=nD(e),o=nD(r);if(n.hasOwnProperty(i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,e){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Tp(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new C(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=Q);let a=this.parseChildren(e+1);r[s??Q]=Object.keys(a).length===1&&a[Q]?a[Q]:new _e([],a),this.consumeOptional("//")}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new C(4011,!1)}};function bD(t){return t.segments.length>0?new _e([],{[Q]:t}):t}function yD(t){let n={};for(let[r,i]of Object.entries(t.children)){let o=yD(i);if(r===Q&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}let e=new _e(t.segments,n);return cA(e)}function cA(t){if(t.numberOfChildren===1&&t.children[Q]){let n=t.children[Q];return new _e(t.segments.concat(n.segments),n.children)}return t}function Dr(t){return t instanceof Ft}function _D(t,n,e=null,r=null,i=new _r){let o=DD(t);return wD(o,n,e,r,i)}function DD(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new _e(o.url,s);return o===t&&(n=a),a}let r=e(t.root),i=bD(r);return n??i}function wD(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Ap(o,o,o,e,r,i);let s=dA(n);if(s.toRoot())return Ap(o,o,new _e([],{}),e,r,i);let a=uA(s,o,t),l=a.processChildren?Ls(a.segmentGroup,a.index,s.commands):ED(a.segmentGroup,a.index,s.commands);return Ap(o,a.segmentGroup,l,e,r,i)}function Pc(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Bs(t){return typeof t=="object"&&t!=null&&t.outlets}function rD(t,n,e){t||="\u0275";let r=new Ft;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Ap(t,n,e,r,i,o){let s={};for(let[c,d]of Object.entries(r??{}))s[c]=Array.isArray(d)?d.map(f=>rD(c,f,o)):rD(c,d,o);let a;t===n?a=e:a=CD(t,n,e);let l=bD(yD(a));return new Ft(l,s,i)}function CD(t,n,e){let r={};return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=CD(o,n,e)}),new _e(t.segments,r)}var Lc=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&Pc(r[0]))throw new C(4003,!1);let i=r.find(Bs);if(i&&i!==GT(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function dA(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Lc(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new Lc(e,n,r)}var oo=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function uA(t,n,e){if(t.isAbsolute)return new oo(n,!0,0);if(!e)return new oo(n,!1,NaN);if(e.parent===null)return new oo(e,!0,0);let r=Pc(t.commands[0])?0:1,i=e.segments.length-1+r;return fA(e,i,t.numberOfDoubleDots)}function fA(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new C(4005,!1);i=r.segments.length}return new oo(r,!1,i-o)}function hA(t){return Bs(t[0])?t[0].outlets:{[Q]:t}}function ED(t,n,e){if(t??=new _e([],{}),t.segments.length===0&&t.hasChildren())return Ls(t,n,e);let r=pA(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new _e(t.segments.slice(0,r.pathIndex),{});return o.children[Q]=new _e(t.segments.slice(r.pathIndex),t.children),Ls(o,0,i)}else return r.match&&i.length===0?new _e(t.segments,{}):r.match&&!t.hasChildren()?Lp(t,n,e):r.match?Ls(t,0,i):Lp(t,n,e)}function Ls(t,n,e){if(e.length===0)return new _e(t.segments,{});{let r=hA(e),i={};if(Object.keys(r).some(o=>o!==Q)&&t.children[Q]&&t.numberOfChildren===1&&t.children[Q].segments.length===0){let o=Ls(t.children[Q],n,e);return new _e(t.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=ED(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new _e(t.segments,i)}}function pA(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let s=t.segments[i],a=e[r];if(Bs(a))break;let l=`${a}`,c=r<e.length-1?e[r+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!oD(l,c,s))return o;r+=2}else{if(!oD(l,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Lp(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Bs(o)){let l=mA(o.outlets);return new _e(r,l)}if(i===0&&Pc(e[0])){let l=t.segments[n];r.push(new yr(l.path,iD(e[0]))),i++;continue}let s=Bs(o)?o.outlets[Q]:`${o}`,a=i<e.length-1?e[i+1]:null;s&&a&&Pc(a)?(r.push(new yr(s,iD(a))),i+=2):(r.push(new yr(s,{})),i++)}return new _e(r,{})}function mA(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[e]=Lp(new _e([],{}),0,r))}),n}function iD(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function oD(t,n,e){return t==e.path&&Rn(n,e.parameters)}var Vs="imperative",et=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(et||{}),Pt=class{id;url;constructor(n,e){this.id=n,this.url=e}},hi=class extends Pt{type=et.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r="imperative",i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},kn=class extends Pt{urlAfterRedirects;type=et.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ft=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ft||{}),Hs=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Hs||{}),Zt=class extends Pt{reason;code;type=et.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function xD(t){return t instanceof Zt&&(t.code===ft.Redirect||t.code===ft.SupersededByNewNavigation)}var Xn=class extends Pt{reason;code;type=et.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}},pi=class extends Pt{error;target;type=et.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Us=class extends Pt{urlAfterRedirects;state;type=et.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vc=class extends Pt{urlAfterRedirects;state;type=et.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jc=class extends Pt{urlAfterRedirects;state;shouldActivate;type=et.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Bc=class extends Pt{urlAfterRedirects;state;type=et.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hc=class extends Pt{urlAfterRedirects;state;type=et.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Uc=class{route;type=et.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},zc=class{route;type=et.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},$c=class{snapshot;type=et.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wc=class{snapshot;type=et.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gc=class{snapshot;type=et.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qc=class{snapshot;type=et.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ao=class{},zs=class{},lo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function gA(t){return!(t instanceof ao)&&!(t instanceof lo)&&!(t instanceof zs)}var Zc=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new po(this.rootInjector)}},po=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Zc(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(r){return new(r||t)(P(me))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yc=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Vp(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Vp(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=jp(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return jp(n,this._root).map(e=>e.value)}};function Vp(t,n){if(t===n.value)return n;for(let e of n.children){let r=Vp(t,e);if(r)return r}return null}function jp(t,n){if(t===n.value)return[n];for(let e of n.children){let r=jp(t,e);if(r.length)return r.unshift(n),r}return[]}var Ot=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function io(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var $s=class extends Yc{snapshot;constructor(n,e){super(n),this.snapshot=e,Zp(this,n)}toString(){return this.snapshot.toString()}};function ID(t,n){let e=vA(t,n),r=new Be([new yr("",{})]),i=new Be({}),o=new Be({}),s=new Be({}),a=new Be(""),l=new Lt(r,i,s,a,o,Q,t,e.root);return l.snapshot=e.root,new $s(new Ot(l,[]),e)}function vA(t,n){let e={},r={},i={},s=new co([],e,i,"",r,Q,t,null,{},n);return new Ws("",new Ot(s,[]))}var Lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,r,i,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(q(c=>c[Zs]))??U(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(q(n=>fi(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(q(n=>fi(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function qp(t,n,e="emptyOnly"){let r,{routeConfig:i}=t;return n!==null&&(e==="always"||i?.path===""||!n.component&&!n.routeConfig?.loadComponent)?r={params:g(g({},n.params),t.params),data:g(g({},n.data),t.data),resolve:g(g(g(g({},t.data),n.data),i?.data),t._resolvedData)}:r={params:g({},t.params),data:g({},t.data),resolve:g(g({},t.data),t._resolvedData??{})},i&&MD(i)&&(r.resolve[Zs]=i.title),r}var co=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Zs]}constructor(n,e,r,i,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=fi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=fi(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(r=>r.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ws=class extends Yc{url;constructor(n,e){super(e),this.url=n,Zp(this,e)}toString(){return SD(this._root)}};function Zp(t,n){n.value._routerState=t,n.children.forEach(e=>Zp(t,e))}function SD(t){let n=t.children.length>0?` { ${t.children.map(SD).join(", ")} } `:"";return`${t.value}${n}`}function Rp(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Rn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Rn(n.params,e.params)||t.paramsSubject.next(e.params),WT(n.url,e.url)||t.urlSubject.next(e.url),Rn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Bp(t,n){let e=Rn(t.params,n.params)&&QT(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||Bp(t.parent,n.parent))}function MD(t){return typeof t.title=="string"||t.title===null}var TD=new v(""),Ys=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Q;activateEvents=new O;deactivateEvents=new O;attachEvents=new O;detachEvents=new O;routerOutletData=Ji();parentContexts=u(po);location=u(it);changeDetector=u(Ve);inputBinder=u(Jc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new C(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Hp(e,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[We]})}return t})(),Hp=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===Lt?this.route:n===po?this.childContexts:n===TD?this.outletData:this.parent.get(n,e)}},Jc=new v("");var Yp=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,i){r&1&&le(0,"router-outlet")},dependencies:[Ys],encapsulation:2})}return t})();function Qp(t){let n=t.children&&t.children.map(Qp),e=n?G(g({},t),{children:n}):g({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==Q&&(e.component=Yp),e}function bA(t,n,e){let r=Gs(t,n._root,e?e._root:void 0);return new $s(r,n)}function Gs(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=n.value;let i=yA(t,n,e);return new Ot(r,i)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Gs(t,a)),s}}let r=_A(n.value),i=n.children.map(o=>Gs(t,o));return new Ot(r,i)}}function yA(t,n,e){return n.children.map(r=>{for(let i of e.children)if(t.shouldReuseRoute(r.value,i.value.snapshot))return Gs(t,r,i);return Gs(t,r)})}function _A(t){return new Lt(new Be(t.url),new Be(t.params),new Be(t.queryParams),new Be(t.fragment),new Be(t.data),t.outlet,t.component,t)}var uo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},AD="ngNavigationCancelingError";function Qc(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=Dr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=RD(!1,ft.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function RD(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[AD]=!0,e.cancellationCode=n,e}function DA(t){return kD(t)&&Dr(t.url)}function kD(t){return!!t&&t[AD]}var Up=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Rp(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=io(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=io(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=io(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(n,e,r){let i=io(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new qc(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Wc(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Rp(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Rp(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}},Kc=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},so=class{component;route;constructor(n,e){this.component=n,this.route=e}};function wA(t,n,e){let r=t._root,i=n?n._root:null;return Ps(r,i,e,[r.value])}function CA(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function mo(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t=="function"&&!Qu(t)?t:n.get(t):r}function Ps(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=io(n);return t.children.forEach(s=>{EA(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>js(a,e.getContext(s),i)),i}function EA(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=xA(s,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Kc(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ps(t,n,a?a.children:null,r,i):Ps(t,n,e,r,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new so(a.outlet.component,s))}else s&&js(n,a,i),i.canActivateChecks.push(new Kc(r)),o.component?Ps(t,null,a?a.children:null,r,i):Ps(t,null,e,r,i);return i}function xA(t,n,e){if(typeof e=="function")return Je(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!ui(t.url,n.url);case"pathParamsOrQueryParamsChange":return!ui(t.url,n.url)||!Rn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Bp(t,n)||!Rn(t.queryParams,n.queryParams);default:return!Bp(t,n)}}function js(t,n,e){let r=io(t),i=t.value;Object.entries(r).forEach(([o,s])=>{i.component?n?js(s,n.children.getContext(o),e):js(s,null,e):js(s,n,e)}),i.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new so(n.outlet.component,i)):e.canDeactivateChecks.push(new so(null,i)):e.canDeactivateChecks.push(new so(null,i))}function Qs(t){return typeof t=="function"}function IA(t){return typeof t=="boolean"}function SA(t){return t&&Qs(t.canLoad)}function MA(t){return t&&Qs(t.canActivate)}function TA(t){return t&&Qs(t.canActivateChild)}function AA(t){return t&&Qs(t.canDeactivate)}function RA(t){return t&&Qs(t.canMatch)}function ND(t){return t instanceof Pr||t?.name==="EmptyError"}var Rc=Symbol("INITIAL_VALUE");function fo(){return He(t=>Vo(t.map(n=>n.pipe(Xe(1),nt(Rc)))).pipe(q(n=>{for(let e of n)if(e!==!0){if(e===Rc)return Rc;if(e===!1||kA(e))return e}return!0}),ae(n=>n!==Rc),Xe(1)))}function kA(t){return Dr(t)||t instanceof uo}function OD(t){return t.aborted?U(void 0).pipe(Xe(1)):new L(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function FD(t){return Ee(OD(t))}function NA(t){return tt(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?U(G(g({},n),{guardsResult:!0})):OA(o,e,r).pipe(tt(s=>s&&IA(s)?FA(e,i,t):U(s)),q(s=>G(g({},n),{guardsResult:s})))})}function OA(t,n,e){return Re(t).pipe(tt(r=>BA(r.component,r.route,e,n)),Vn(r=>r!==!0,!0))}function FA(t,n,e){return Re(n).pipe(Ai(r=>Dn(LA(r.route.parent,e),PA(r.route,e),jA(t,r.path),VA(t,r.route))),Vn(r=>r!==!0,!0))}function PA(t,n){return t!==null&&n&&n(new Gc(t)),U(!0)}function LA(t,n){return t!==null&&n&&n(new $c(t)),U(!0)}function VA(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return U(!0);let r=e.map(i=>Lr(()=>{let o=n._environmentInjector,s=mo(i,o),a=MA(s)?s.canActivate(n,t):Je(o,()=>s(n,t));return mi(a).pipe(Vn())}));return U(r).pipe(fo())}function jA(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>CA(o)).filter(o=>o!==null).map(o=>Lr(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=mo(a,l),d=TA(c)?c.canActivateChild(e,t):Je(l,()=>c(e,t));return mi(d).pipe(Vn())});return U(s).pipe(fo())}));return U(i).pipe(fo())}function BA(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return U(!0);let o=i.map(s=>{let a=n._environmentInjector,l=mo(s,a),c=AA(l)?l.canDeactivate(t,n,e,r):Je(a,()=>l(t,n,e,r));return mi(c).pipe(Vn())});return U(o).pipe(fo())}function HA(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return U(!0);let s=o.map(a=>{let l=mo(a,t),c=SA(l)?l.canLoad(n,e):Je(t,()=>l(n,e)),d=mi(c);return i?d.pipe(FD(i)):d});return U(s).pipe(fo(),PD(r))}function PD(t){return Iu(at(n=>{if(typeof n!="boolean")throw Qc(t,n)}),q(n=>n===!0))}function UA(t,n,e,r,i,o){let s=n.canMatch;if(!s||s.length===0)return U(!0);let a=s.map(l=>{let c=mo(l,t),d=RA(c)?c.canMatch(n,e,i):Je(t,()=>c(n,e,i));return mi(d).pipe(FD(o))});return U(a).pipe(fo(),PD(r))}var Kn=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},qs=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function zA(t){throw new C(4e3,!1)}function $A(t){throw RD(!1,ft.GuardRejected)}var zp=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[Q])throw zA(`${n.redirectTo}`);i=i.children[Q]}}async applyRedirectCommands(n,e,r,i,o){let s=await WA(e,i,o);if(s instanceof Ft)throw new qs(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]==="/")throw new qs(a);return a}applyRedirectCreateUrlTree(n,e,r,i){let o=this.createSegmentGroup(n,e.root,r,i);return new Ft(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=e[a]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,r,i)}),new _e(o,s)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new C(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function WA(t,n,e){if(typeof t=="string")return Promise.resolve(t);let r=t;return Fc(mi(Je(e,()=>r(n))))}function GA(t,n){return t.providers&&!t._injector&&(t._injector=ws(t.providers,n,`Route: ${t.path}`)),t._injector??n}function gn(t){return t.outlet||Q}function qA(t,n){let e=t.filter(r=>gn(r)===n);return e.push(...t.filter(r=>gn(r)!==n)),e}var $p={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function LD(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function ZA(t,n,e,r,i,o,s){let a=VD(t,n,e);if(!a.matched)return U(a);let l=LD(o(a));return r=GA(n,r),UA(r,n,e,i,l,s).pipe(q(c=>c===!0?a:g({},$p)))}function VD(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?g({},$p):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||lD)(e,t,n);if(!i)return g({},$p);let o={};Object.entries(i.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=i.consumed.length>0?g(g({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function sD(t,n,e,r,i){return e.length>0&&KA(t,e,r,i)?{segmentGroup:new _e(n,QA(r,new _e(e,t.children))),slicedSegments:[]}:e.length===0&&XA(t,e,r)?{segmentGroup:new _e(t.segments,YA(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new _e(t.segments,t.children),slicedSegments:e}}function YA(t,n,e,r){let i={};for(let o of e)if(ed(t,n,o)&&!r[gn(o)]){let s=new _e([],{});i[gn(o)]=s}return g(g({},r),i)}function QA(t,n){let e={};e[Q]=n;for(let r of t)if(r.path===""&&gn(r)!==Q){let i=new _e([],{});e[gn(r)]=i}return e}function KA(t,n,e,r){return e.some(i=>!ed(t,n,i)||!(gn(i)!==Q)?!1:!(r!==void 0&&gn(i)===r))}function XA(t,n,e){return e.some(r=>ed(t,n,r))}function ed(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function JA(t,n,e){return n.length===0&&!t.children[e]}var Wp=class{};async function eR(t,n,e,r,i,o,s="emptyOnly",a){return new Gp(t,n,e,r,i,s,o,a).recognize()}var tR=31,Gp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new zp(this.urlSerializer,this.urlTree)}noMatchError(n){return new C(4002,`'${n.segmentGroup}'`)}async recognize(){let n=sD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),i=new Ot(r,e),o=new Ws("",i),s=_D(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new co([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Q,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,Q,e),rootSnapshot:e}}catch(r){if(r instanceof qs)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Kn?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let s=await this.processSegment(n,e,r,r.segments,i,!0,o);return s instanceof Ot?[s]:[]}async processChildren(n,e,r,i){let o=[];for(let l of Object.keys(r.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=r.children[l],d=qA(e,l),f=await this.processSegmentGroup(n,d,c,l,i);s.push(...f)}let a=jD(s);return nR(a),a}async processSegment(n,e,r,i,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,r,i,o,s,a)}catch(c){if(c instanceof Kn||ND(c))continue;throw c}if(JA(r,i,o))return new Wp;throw new Kn(r)}async processSegmentAgainstRoute(n,e,r,i,o,s,a,l){if(gn(r)!==s&&(s===Q||!ed(i,o,r)))throw new Kn(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s,l);throw new Kn(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=VD(e,i,o);if(!l)throw new Kn(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>tR&&(this.allowRedirects=!1));let p=this.createSnapshot(n,i,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let m=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,f,LD(p),n),_=await this.applyRedirects.lineralizeSegments(i,m);return this.processSegment(n,r,e,_.concat(h),s,!1,a)}createSnapshot(n,e,r,i,o){let s=new co(r,i,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,iR(e),gn(e),e.component??e._loadedComponent??null,e,oR(e),n),a=qp(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,r,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Qe=>this.createSnapshot(n,r,Qe.consumedSegments,Qe.parameters,s),l=await Fc(ZA(e,r,i,n,this.urlSerializer,a,this.abortSignal));if(r.path==="**"&&(e.children={}),!l?.matched)throw new Kn(e);n=r._injector??n;let{routes:c}=await this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=l,m=this.createSnapshot(n,r,h,f,s),{segmentGroup:_,slicedSegments:E}=sD(e,h,p,c,o);if(E.length===0&&_.hasChildren()){let Qe=await this.processChildren(d,c,_,m);return new Ot(m,Qe)}if(c.length===0&&E.length===0)return new Ot(m,[]);let M=gn(r)===o,pe=await this.processSegment(d,c,_,E,M?Q:o,!0,m);return new Ot(m,pe instanceof Ot?[pe]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Fc(HA(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw $A(e)}return{routes:[],injector:n}}};function nR(t){t.sort((n,e)=>n.value.outlet===Q?-1:e.value.outlet===Q?1:n.value.outlet.localeCompare(e.value.outlet))}function rR(t){let n=t.value.routeConfig;return n&&n.path===""}function jD(t){let n=[],e=new Set;for(let r of t){if(!rR(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=jD(r.children);n.push(new Ot(r.value,i))}return n.filter(r=>!e.has(r))}function iR(t){return t.data||{}}function oR(t){return t.resolve||{}}function sR(t,n,e,r,i,o,s){return tt(async a=>{let{state:l,tree:c}=await eR(t,n,e,r,a.extractedUrl,i,o,s);return G(g({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function aR(t){return tt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return U(n);let i=new Set(r.map(a=>a.route)),o=new Set;for(let a of i)if(!o.has(a))for(let l of BD(a))o.add(l);let s=0;return Re(o).pipe(Ai(a=>i.has(a)?lR(a,e,t):(a.data=qp(a,a.parent,t).resolve,U(void 0))),at(()=>s++),el(1),tt(a=>s===o.size?U(n):ke))})}function BD(t){let n=t.children.map(e=>BD(e)).flat();return[t,...n]}function lR(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!MD(r)&&(i[Zs]=r.title),Lr(()=>(t.data=qp(t,t.parent,e).resolve,cR(i,t,n).pipe(q(o=>(t._resolvedData=o,t.data=g(g({},t.data),o),null)))))}function cR(t,n,e){let r=Np(t);if(r.length===0)return U({});let i={};return Re(r).pipe(tt(o=>dR(t[o],n,e).pipe(Vn(),at(s=>{if(s instanceof uo)throw Qc(new _r,s);i[o]=s}))),el(1),q(()=>i),jo(o=>ND(o)?ke:Au(o)))}function dR(t,n,e){let r=n._environmentInjector,i=mo(t,r),o=i.resolve?i.resolve(n,e):Je(r,()=>i(n,e));return mi(o)}function aD(t){return He(n=>{let e=t(n);return e?Re(e).pipe(q(()=>n)):U(n)})}var Kp=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===Q);return r}getResolvedTitleForRoute(e){return e.data[Zs]}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(HD),providedIn:"root"})}return t})(),HD=(()=>{class t extends Kp{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||t)(P(eD))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),go=new v("",{factory:()=>({})}),Ks=new v(""),UD=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(tp);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await dD(Je(e,()=>r.loadComponent())),s=await WD($D(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await zD(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function zD(t,n,e,r){let i=await dD(Je(e,()=>t.loadChildren())),o=await WD($D(i)),s;o instanceof uc||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),r&&r(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(Ks,[],{optional:!0,self:!0}).flat()),{routes:l.map(Qp),injector:a,factory:d}}function uR(t){return t&&typeof t=="object"&&"default"in t}function $D(t){return uR(t)?t.default:t}async function WD(t){return t}var td=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(fR),providedIn:"root"})}return t})(),fR=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),GD=new v("");var hR=()=>{},qD=new v(""),ZD=(()=>{class t{currentNavigation=F(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=F(null);events=new D;transitionAbortWithErrorSubject=new D;configLoader=u(UD);environmentInjector=u(me);destroyRef=u(bt);urlSerializer=u(ho);rootContexts=u(po);location=u(vr);inputBindingEnabled=u(Jc,{optional:!0})!==null;titleStrategy=u(Kp);options=u(go,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(td);createViewTransition=u(GD,{optional:!0});navigationErrorHandler=u(qD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>U(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Uc(i)),r=i=>this.events.next(new zc(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;ye(()=>{this.transitions?.next(G(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Be(null),this.transitions.pipe(ae(r=>r!==null),He(r=>{let i=!1,o=new AbortController,s=()=>!i&&this.currentTransition?.id===r.id;return U(r).pipe(He(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",ft.SupersededByNewNavigation),ke;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?G(g({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new Xn(a.id,this.urlSerializer.serialize(a.rawUrl),"",Hs.IgnoredSameUrlNavigation)),a.resolve(!1),ke;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return U(a).pipe(He(f=>(this.events.next(new hi(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?ke:Promise.resolve(f))),sR(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),at(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new zs)}),He(f=>Re(r.routesRecognizeHandler.deferredHandle??U(void 0)).pipe(q(()=>f))),at(()=>{let f=new Us(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:m,extras:_}=a,E=new hi(f,this.urlSerializer.serialize(h),p,m);this.events.next(E);let M=ID(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=G(g({},a),{targetSnapshot:M,urlAfterRedirects:h,extras:G(g({},_),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(pe=>(pe.finalUrl=h,pe)),U(r)}else return this.events.next(new Xn(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Hs.IgnoredByUrlHandlingStrategy)),a.resolve(!1),ke}),q(a=>{let l=new Vc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=r=G(g({},a),{guards:wA(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),NA(a=>this.events.next(a)),He(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Qc(this.urlSerializer,a.guardsResult);let l=new jc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return ke;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",ft.GuardRejected),ke;if(a.guards.canActivateChecks.length===0)return U(a);let c=new Bc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return ke;let d=!1;return U(a).pipe(aR(this.paramsInheritanceStrategy),at({next:()=>{d=!0;let f=new Hc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",ft.NoDataFromResolver)}}))}),aD(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},c=l(a.targetSnapshot.root);return c.length===0?U(a):Re(Promise.all(c).then(()=>a))}),aD(()=>this.afterPreactivation()),He(()=>{let{currentSnapshot:a,targetSnapshot:l}=r,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Re(c).pipe(q(()=>r)):U(r)}),Xe(1),He(a=>{let l=bA(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=r=a=G(g({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new ao);let c=r.beforeActivateHandler.deferredHandle;return c?Re(c.then(()=>a)):U(a)}),at(a=>{new Up(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(i=!0,this.currentNavigation.update(l=>(l.abort=hR,l)),this.lastSuccessfulNavigation.set(ye(this.currentNavigation)),this.events.next(new kn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Ee(OD(o.signal).pipe(ae(()=>!i&&!r.targetRouterState),at(()=>{this.cancelNavigationTransition(r,o.signal.reason+"",ft.Aborted)}))),at({complete:()=>{i=!0}}),Ee(this.transitionAbortWithErrorSubject.pipe(at(a=>{throw a}))),Bo(()=>{o.abort(),i||this.cancelNavigationTransition(r,"",ft.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),jo(a=>{if(i=!0,this.destroyed)return r.resolve(!1),ke;if(kD(a))this.events.next(new Zt(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),DA(a)?this.events.next(new lo(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let l=new pi(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let c=Je(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof uo){let{message:d,cancellationCode:f}=Qc(this.urlSerializer,c);this.events.next(new Zt(r.id,this.urlSerializer.serialize(r.extractedUrl),d,f)),this.events.next(new lo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(c)}}return ke}))}))}cancelNavigationTransition(e,r,i){let o=new Zt(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=ye(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pR(t){return t!==Vs}var YD=new v("");var QD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(mR),providedIn:"root"})}return t})(),Xc=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},mR=(()=>{class t extends Xc{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nd=(()=>{class t{urlSerializer=u(ho);options=u(go,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(vr);urlHandlingStrategy=u(td);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ft;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=i??o;return s instanceof Ft?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=ID(null,u(me));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(gR),providedIn:"root"})}return t})(),gR=(()=>{class t extends nd{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{e(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof hi?this.updateStateMemento():e instanceof Xn?this.commitTransition(r):e instanceof Us?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof ao?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Zt&&!xD(e)?this.restoreHistory(r):e instanceof pi?this.restoreHistory(r,!0):e instanceof kn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:s,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=g(g({},a),this.generateNgRouterState(o,l,r));this.location.replaceState(e,"",c)}else{let l=g(g({},a),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,"",l)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:r},this.routerUrlState(i)):g({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xp(t,n){t.events.pipe(ae(e=>e instanceof kn||e instanceof Zt||e instanceof pi||e instanceof Xn),q(e=>e instanceof kn||e instanceof Xn?0:(e instanceof Zt?e.code===ft.Redirect||e.code===ft.SupersededByNewNavigation:!1)?2:1),ae(e=>e!==2),Xe(1)).subscribe(()=>{n()})}var vo=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Yh);stateManager=u(nd);options=u(go,{optional:!0})||{};pendingTasks=u(Gn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(ZD);urlSerializer=u(ho);location=u(vr);urlHandlingStrategy=u(td);injector=u(me);_events=new D;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(QD);injectorCleanup=u(YD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Ks,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Jc,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new se;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=ye(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Zt&&r.code!==ft.Redirect&&r.code!==ft.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof kn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof lo){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),l=g({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||pR(i.source)},s);this.scheduleNavigation(a,Vs,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}gA(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vs,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let s=i?.navigationId?i:null,a=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=G(g({},o),{browserUrl:e})),i){let c=g({},i);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,r,s,o).catch(c=>{this.disposed||this.injector.get(Rt)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ye(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Qp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=i?i.snapshot:this.routerState.snapshot.root;f=DD(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return wD(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Dr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Vs,null,r)}navigate(e,r={skipLocationChange:!1}){return vR(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ar(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,r){let i;if(r===!0?i=g({},fD):r===!1?i=g({},Op):i=g(g({},Op),r),Dr(e))return tD(this.currentUrlTree,e,i);let o=this.parseUrl(e);return tD(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});let d=this.pendingTasks.add();return Xp(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vR(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new C(4008,!1)}var _R=(()=>{class t{router=u(vo);stateManager=u(nd);fragment=F("");queryParams=F({});path=F("");serializer=u(ho);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof kn&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new Ft(r)))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rd=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Is("href"),{optional:!0});reactiveHref=np(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ye(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ye(this._target)}_target=F(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ye(this._queryParams)}_queryParams=F(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ye(this._fragment)}_fragment=F(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ye(this._queryParamsHandling)}_queryParamsHandling=F(void 0);set state(e){this._state.set(e)}get state(){return ye(this._state)}_state=F(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ye(this._info)}_info=F(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ye(this._relativeTo)}_relativeTo=F(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ye(this._preserveFragment)}_preserveFragment=F(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ye(this._skipLocationChange)}_skipLocationChange=F(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ye(this._replaceUrl)}_replaceUrl=F(!1);isAnchorElement;onChanges=new D;applicationErrorHandler=u(Rt);options=u(go,{optional:!0});reactiveRouterState=u(_R);constructor(e,r,i,o,s,a){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=F(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Dr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,r,i,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||r||i||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}_urlTree=ot(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let r=this.routerLinkInput();return r===null||!this.router.createUrlTree?null:Dr(r)?r:this.router.createUrlTree(r,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,r)=>this.computeHref(e)===this.computeHref(r)});get urlTree(){return ye(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(r){return new(r||t)($(vo),$(Lt),gs("tabindex"),$(Se),$(k),$(to))};static \u0275dir=R({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(r,i){r&1&&de("click",function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&Ie("href",i.reactiveHref(),Ah)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",re],skipLocationChange:[2,"skipLocationChange","skipLocationChange",re],replaceUrl:[2,"replaceUrl","replaceUrl",re],routerLink:"routerLink"},features:[We]})}return t})();var DR=new v("");function Jp(t,...n){return qr([{provide:Ks,multi:!0,useValue:t},[],{provide:Lt,useFactory:wR},{provide:fc,multi:!0,useFactory:CR},n.map(e=>e.\u0275providers)])}function wR(){return u(vo).routerState.root}function CR(){let t=u(te);return n=>{let e=t.get($t);if(n!==e.components[0])return;let r=t.get(vo),i=t.get(ER);t.get(xR)===1&&r.initialNavigation(),t.get(IR,null,{optional:!0})?.setUpPreloading(),t.get(DR,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var ER=new v("",{factory:()=>new D}),xR=new v("",{factory:()=>1});var IR=new v("");var bo=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=F(!0);isLoading=this.loading.asReadonly();error=F("");errorMessage=this.error.asReadonly();teams=F([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(P(di))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var TR=new v("cdk-dir-doc",{providedIn:"root",factory:()=>u(Y)}),AR=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function KD(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?AR.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ct=(()=>{class t{get value(){return this.valueSignal()}valueSignal=F("ltr");change=new O;constructor(){let e=u(TR,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(KD(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ze=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var RR=["*"];var kR=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],NR=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],OR=new v("MAT_CARD_CONFIG"),XD=(()=>{class t{appearance;constructor(){let e=u(OR,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,i){r&2&&H("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:RR,decls:1,vars:0,template:function(r,i){r&1&&(Me(),W(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),JD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ew=(()=>{class t{align="start";static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),tw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:NR,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,i){r&1&&(Me(kR),W(0),he(1,"div",0),W(2,1),be(),W(3,2))},encapsulation:2,changeDetection:0})}return t})();function Xs(t){return t.buttons===0||t.detail===0}function Js(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var em;function nw(){if(em==null){let t=typeof document<"u"?document.head:null;em=!!(t&&(t.createShadowRoot||t.attachShadow))}return em}function tm(t){if(nw()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function nm(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function ht(t){return t.composedPath?t.composedPath()[0]:t.target}var rm;try{rm=typeof Intl<"u"&&Intl.v8BreakIterator}catch{rm=!1}var ue=(()=>{class t{_platformId=u(si);isBrowser=this._platformId?P_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||rm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ea;function rw(){if(ea==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ea=!0}))}finally{ea=ea||!1}return ea}function yo(t){return rw()?t:!!t.capture}function wr(t,n=0){return iw(t)?Number(t):arguments.length===2?n:0}function iw(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function _t(t){return t instanceof k?t.nativeElement:t}var ow=new v("cdk-input-modality-detector-options"),sw={ignoreKeys:[18,17,224,91,16]},aw=650,im={passive:!0,capture:!0},lw=(()=>{class t{_platform=u(ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Be(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ht(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<aw||(this._modality.next(Xs(e)?"keyboard":"mouse"),this._mostRecentTarget=ht(e))};_onTouchstart=e=>{if(Js(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ht(e)};constructor(){let e=u(S),r=u(Y),i=u(ow,{optional:!0});if(this._options=g(g({},sw),i),this.modalityDetected=this._modality.pipe(jr(1)),this.modalityChanged=this.modalityDetected.pipe(Ja()),this._platform.isBrowser){let o=u(Ue).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,im),o.listen(r,"mousedown",this._onMousedown,im),o.listen(r,"touchstart",this._onTouchstart,im)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ta=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ta||{}),cw=new v("cdk-focus-monitor-default-options"),id=yo({passive:!0,capture:!0}),gi=(()=>{class t{_ngZone=u(S);_platform=u(ue);_inputModalityDetector=u(lw);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(Y);_stopInputModalityDetector=new D;constructor(){let e=u(cw,{optional:!0});this._detectionMode=e?.detectionMode||ta.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=ht(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=_t(e);if(!this._platform.isBrowser||i.nodeType!==1)return U();let o=tm(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new D,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let r=_t(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=_t(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ta.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===ta.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?aw:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=ht(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,id),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,id)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ee(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,id),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,id),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),om=(()=>{class t{_elementRef=u(k);_focusMonitor=u(gi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new O;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(r=>{this._focusOrigin=r,this.cdkFocusChange.emit(r)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var od=new WeakMap,pt=(()=>{class t{_appRef;_injector=u(te);_environmentInjector=u(me);load(e){let r=this._appRef=this._appRef||this._injector.get($t),i=od.get(r);i||(i={loaders:new Set,refs:[]},od.set(r,i),r.onDestroy(()=>{od.get(r)?.refs.forEach(o=>o.destroy()),od.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Dc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sd=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})();function Jn(t){return Array.isArray(t)?t:[t]}var dw=new Set,vi,ad=(()=>{class t{_platform=u(ue);_nonce=u(ai,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):PR}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&FR(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function FR(t,n){if(!dw.has(t))try{vi||(vi=document.createElement("style"),n&&vi.setAttribute("nonce",n),vi.setAttribute("type","text/css"),document.head.appendChild(vi)),vi.sheet&&(vi.sheet.insertRule(`@media ${t} {body{ }}`,0),dw.add(t))}catch(e){console.error(e)}}function PR(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var na=(()=>{class t{_mediaMatcher=u(ad);_zone=u(S);_queries=new Map;_destroySubject=new D;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return uw(Jn(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=uw(Jn(e)).map(s=>this._registerQuery(s).observable),o=Vo(i);return o=Dn(o.pipe(Xe(1)),o.pipe(jr(1),Xt(0))),o.pipe(q(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let r=this._mediaMatcher.matchMedia(e),o={observable:new L(s=>{let a=l=>this._zone.run(()=>s.next(l));return r.addListener(a),()=>{r.removeListener(a)}}).pipe(nt(r),q(({matches:s})=>({query:e,matches:s})),Ee(this._destroySubject)),mql:r};return this._queries.set(e,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uw(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function LR(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var fw=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),VR=(()=>{class t{_mutationObserverFactory=u(fw);_observedElements=new Map;_ngZone=u(S);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,r)=>this._cleanupObserver(r))}observe(e){let r=_t(e);return new L(i=>{let s=this._observeElement(r).pipe(q(a=>a.filter(l=>!LR(l))),ae(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{i.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(r)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let r=new D,i=this._mutationObserverFactory.create(o=>r.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:r,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:r,stream:i}=this._observedElements.get(e);r&&r.disconnect(),i.complete(),this._observedElements.delete(e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hw=(()=>{class t{_contentObserver=u(VR);_elementRef=u(k);event=new O;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=wr(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Xt(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",re],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),pw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({providers:[fw]})}return t})();var cd=(()=>{class t{_platform=u(ue);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return BR(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let r=jR(ZR(e));if(r&&(mw(r)===-1||!this.isVisible(r)))return!1;let i=e.nodeName.toLowerCase(),o=mw(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!GR(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,r){return qR(e)&&!this.isDisabled(e)&&(r?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jR(t){try{return t.frameElement}catch{return null}}function BR(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function HR(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function UR(t){return $R(t)&&t.type=="hidden"}function zR(t){return WR(t)&&t.hasAttribute("href")}function $R(t){return t.nodeName.toLowerCase()=="input"}function WR(t){return t.nodeName.toLowerCase()=="a"}function gw(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function mw(t){if(!gw(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function GR(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function qR(t){return UR(t)?!1:HR(t)||zR(t)||t.hasAttribute("contenteditable")||gw(t)}function ZR(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ld=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,r,i,o=!1,s){this._element=n,this._checker=e,this._ngZone=r,this._document=i,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let r=this._getFirstTabbableElement(e);return r?.focus(n),!!r}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=0;r<e.length;r++){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=e.length-1;r>=0;r--){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?qe(n,{injector:this._injector}):setTimeout(n)}},sm=(()=>{class t{_checker=u(cd);_ngZone=u(S);_document=u(Y);_injector=u(te);constructor(){u(pt).load(sd)}create(e,r=!1){return new ld(e,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YR=200,dd=class{_letterKeyStream=new D;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new D;selectedItem=this._selectedItem;constructor(n,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:YR;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(at(e=>this._pressedLetters.push(e)),Xt(n),ae(()=>this._pressedLetters.length>0),q(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Yt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var _o=class{_items;_activeItemIndex=F(-1);_activeItem=F(null);_wrap=!1;_typeaheadSubscription=se.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof an?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):qn(n)&&(this._effectRef=rn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new D;change=new D;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new dd(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||Yt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),r=typeof n=="number"?n:e.indexOf(n),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+n*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=e,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return qn(this._items)?this._items():this._items instanceof an?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let r=n.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var ra=class extends _o{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var ia=class extends _o{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var lm={},mt=class t{_appId=u(Yi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),lm.hasOwnProperty(n)||(lm[n]=0),`${n}${e?t._infix+"-":""}${lm[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var yw=" ";function cm(t,n,e){let r=_w(t,n);e=e.trim(),!r.some(i=>i.trim()===e)&&(r.push(e),t.setAttribute(n,r.join(yw)))}function ud(t,n,e){let r=_w(t,n);e=e.trim();let i=r.filter(o=>o!==e);i.length?t.setAttribute(n,i.join(yw)):t.removeAttribute(n)}function _w(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var vn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(vn||{}),fd,bi;function hd(){if(bi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return bi=!1,bi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)bi=!0;else{let t=Element.prototype.scrollTo;t?bi=!/\{\s*\[native code\]\s*\}/.test(t.toString()):bi=!1}}return bi}function Do(){if(typeof document!="object"||!document)return vn.NORMAL;if(fd==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),r=e.style;r.width="2px",r.height="1px",t.appendChild(e),document.body.appendChild(t),fd=vn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,fd=t.scrollLeft===0?vn.NEGATED:vn.INVERTED),t.remove()}return fd}function dm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var wo,Dw=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function um(){if(wo)return wo;if(typeof document!="object"||!document)return wo=new Set(Dw),wo;let t=document.createElement("input");return wo=new Set(Dw.filter(n=>(t.setAttribute("type",n),t.type===n))),wo}var ww={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var QR=new v("MATERIAL_ANIMATIONS"),Cw=null;function KR(){return u(QR,{optional:!0})?.animationsDisabled||u(vs,{optional:!0})==="NoopAnimations"?"di-disabled":(Cw??=u(ad).matchMedia("(prefers-reduced-motion)").matches,Cw?"reduced-motion":"enabled")}function Ye(){return KR()!=="enabled"}function je(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Vt(t){return t!=null&&`${t}`!="false"}var Qt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Qt||{}),fm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Qt.HIDDEN;constructor(n,e,r,i=!1){this._renderer=n,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Ew=yo({passive:!0,capture:!0}),hm=class{_events=new Map;addHandler(n,e,r,i){let o=this._events.get(e);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ew)})}removeHandler(n,e,r){let i=this._events.get(n);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ew)))}_delegateEventHandler=n=>{let e=ht(n);e&&this._events.get(n.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(n))})}},oa={enterDuration:225,exitDuration:150},XR=800,xw=yo({passive:!0,capture:!0}),Iw=["mousedown","touchstart"],Sw=["mouseup","mouseleave","touchend","touchcancel"],JR=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),sa=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new hm;constructor(n,e,r,i,o){this._target=n,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=_t(r)),o&&o.get(pt).load(JR)}fadeInRipple(n,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},oa),r.animation);r.centered&&(n=i.left+i.width/2,e=i.top+i.height/2);let s=r.radius||ek(n,e,i),a=n-i.left,l=e-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,p=f.transitionDuration,m=h==="none"||p==="0s"||p==="0s, 0s"||i.width===0&&i.height===0,_=new fm(this,d,r,m);d.style.transform="scale3d(1, 1, 1)",_.state=Qt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=_);let E=null;return!m&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let M=()=>{E&&(E.fallbackTimer=null),clearTimeout(Qe),this._finishRippleTransition(_)},pe=()=>this._destroyRipple(_),Qe=setTimeout(pe,c+100);d.addEventListener("transitionend",M),d.addEventListener("transitioncancel",pe),E={onTransitionEnd:M,onTransitionCancel:pe,fallbackTimer:Qe}}),this._activeRipples.set(_,E),(m||!c)&&this._finishRippleTransition(_),_}fadeOutRipple(n){if(n.state===Qt.FADING_OUT||n.state===Qt.HIDDEN)return;let e=n.element,r=g(g({},oa),n.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",n.state=Qt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=_t(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Iw.forEach(r=>{t._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Sw.forEach(e=>{this._triggerElement.addEventListener(e,this,xw)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Qt.FADING_IN?this._startFadeOutTransition(n):n.state===Qt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=Qt.VISIBLE,!r&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Qt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Xs(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+XR;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Js(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Qt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Qt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Iw.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Sw.forEach(e=>n.removeEventListener(e,this,xw)),this._pointerUpEventsRegistered=!1))}};function ek(t,n,e){let r=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(r*r+i*i)}var pd=new v("mat-ripple-global-options"),aa=(()=>{class t{_elementRef=u(k);_animationsDisabled=Ye();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(S),r=u(ue),i=u(pd,{optional:!0}),o=u(te);this._globalOptions=i||{},this._rippleRenderer=new sa(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,g(g({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var tk={capture:!0},nk=["focus","mousedown","mouseenter","touchstart"],pm="mat-ripple-loader-uninitialized",mm="mat-ripple-loader-class-name",Mw="mat-ripple-loader-centered",md="mat-ripple-loader-disabled",Tw=(()=>{class t{_document=u(Y);_animationsDisabled=Ye();_globalRippleOptions=u(pd,{optional:!0});_platform=u(ue);_ngZone=u(S);_injector=u(te);_eventCleanups;_hosts=new Map;constructor(){let e=u(Ue).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>nk.map(r=>e.listen(this._document,r,this._onInteraction,tk)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(pm,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute(mm))&&e.setAttribute(mm,r.className||""),r.centered&&e.setAttribute(Mw,""),r.disabled&&e.setAttribute(md,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(md,""):e.removeAttribute(md)}_onInteraction=e=>{let r=ht(e);if(r instanceof HTMLElement){let i=r.closest(`[${pm}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute(mm)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??oa.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??oa.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(md),rippleConfig:{centered:e.hasAttribute(Mw),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new sa(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(pm)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Co=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var rk=new v("MAT_BUTTON_CONFIG");function Aw(t){return t==null?void 0:eo(t)}var gm=(()=>{class t{_elementRef=u(k);_ngZone=u(S);_animationsDisabled=Ye();_config=u(rk,{optional:!0});_focusMonitor=u(gi);_cleanupClick;_renderer=u(Se);_rippleLoader=u(Tw);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(pt).load(Co);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(Ie("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),hn(i.color?"mat-"+i.color:""),H("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",re],disabled:[2,"disabled","disabled",re],ariaDisabled:[2,"aria-disabled","ariaDisabled",re],disabledInteractive:[2,"disabledInteractive","disabledInteractive",re],tabIndex:[2,"tabIndex","tabIndex",Aw],_tabindex:[2,"tabindex","_tabindex",Aw]}})}return t})();var Rw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ze]})}return t})();var ik=["matButton",""],Nw=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ow=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],ok=["mat-fab",""];var kw=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Fw=(()=>{class t extends gm{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=sk(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?kw.get(this._appearance):null,o=kw.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[xe],attrs:ik,ngContentSelectors:Ow,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Me(Nw),ut(0,"span",0),W(1),he(2,"span",1),W(3,1),be(),W(4,2),ut(5,"span",2)(6,"span",3)),r&2&&H("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function sk(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ak=new v("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>vm}),vm={color:"accent"},Pw=(()=>{class t extends gm{_options=u(ak,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||vm,this.color=this._options.color||vm.color}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(r,i){r&2&&H("mdc-fab--extended",i.extended)("mat-mdc-extended-fab",i.extended)},inputs:{extended:[2,"extended","extended",re]},exportAs:["matButton","matAnchor"],features:[xe],attrs:ok,ngContentSelectors:Ow,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Me(Nw),ut(0,"span",0),W(1),he(2,"span",1),W(3,1),be(),W(4,2),ut(5,"span",2)(6,"span",3)),r&2&&H("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var lk=t=>[t,"map"],ck=t=>[t,"convoy"],dk=t=>[t,"shop"],gd=class t{team=Ji.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:14,consts:[["align","end"],["matButton",""],[1,"buttonContent",3,"routerLink"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[1,"buttonContent"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,r){e&1&&(y(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),A(3),w()(),y(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),le(7,"img",3),A(8," Map "),w()(),y(9,"button",4)(10,"span",5)(11,"div",6),A(12,"?"),w(),A(13," Convoy "),w()(),y(14,"button",4)(15,"span",5),le(16,"img",7),A(17," Shop "),w()()()()),e&2&&(I(3),Gt(" ",r.team().teamName," "),I(3),J("routerLink",mn(8,lk,r.GetTeamNameWithoutSpaces())),I(3),J("disabled",bc(!r.team().showConvoyLink))("routerLink",mn(10,ck,r.GetTeamNameWithoutSpaces())),I(5),J("disabled",bc(!r.team().showShopLink))("routerLink",mn(12,dk,r.GetTeamNameWithoutSpaces())))},dependencies:[XD,tw,JD,ew,Fw,rd],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var Lw="(max-width: 900px)",Nn=class t{breakpointObserver=u(na);isSmallWidth=F(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([Lw]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[Lw])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var vd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,r){e&1&&(he(0,"div",0)(1,"div",1),ut(2,"div",2),he(3,"div",3),A(4,"Loading..."),be()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var On=class t{DARK_MODE_CLASS="dark-mode";document=u(Y);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=F(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=ot(()=>this.themeMode()==="dark");constructor(){rn(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var bm=t=>({width:t});function uk(t,n){t&1&&le(0,"loading-icon")}function fk(t,n){if(t&1&&(y(0,"div",7)(1,"p",17),A(2),w()()),t&2){let e=ce();I(2),Gt(" ",e.teamListService.errorMessage()," ")}}function hk(t,n){if(t&1&&le(0,"team-listing",14),t&2){let e=n.$implicit;J("team",e)}}function pk(t,n){t&1&&(y(0,"div",7)(1,"p",17),A(2," There are no teams available. "),w()())}function mk(t,n){if(t&1&&Tn(0,hk,1,1,"team-listing",14,Cs,!1,pk,3,0,"div",7),t&2){let e=ce();An(e.teamListService.teamsList())}}var bd=class t{constructor(n,e,r){this.breakpointService=n;this.themeService=e;this.teamListService=r;this.breakpointService=u(Nn),this.themeService=u(On),this.teamListService=u(bo),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)($(Nn),$(On),$(bo))};static \u0275cmp=x({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,r){e&1&&(le(0,"div",0)(1,"div",1),y(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),A(6),w(),y(7,"button",5),de("click",function(){return r.themeService.setThemeMode(r.themeService.isDarkMode()?"light":"dark")}),A(8,"Toggle Theme"),w()(),y(9,"div",6),ge(10,uk,1,0,"loading-icon")(11,fk,3,1,"div",7)(12,mk,3,1),w()(),y(13,"div",3)(14,"div",8)(15,"h1",9),A(16,"Information"),w(),y(17,"p"),A(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),w(),y(19,"h2",9),A(20,"Resources"),w(),y(21,"ul")(22,"li")(23,"a",10),A(24,"Reddit Emblem Maps Documentation"),w()(),y(25,"li")(26,"a",11),A(27,"API Github Repository"),w()(),y(28,"li")(29,"a",12),A(30,"Webapp Github Repository"),w()()(),y(31,"h2",9),A(32,"Example"),w(),y(33,"p"),A(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),w(),y(35,"ul")(36,"li")(37,"a",13),A(38,"Team Example Google Spreadsheet"),w()()(),le(39,"team-listing",14),w(),y(40,"div",8)(41,"h2",9),A(42,"Credits"),w(),y(43,"ul")(44,"li")(45,"a",15),A(46,'Website background texture "Az Subtle" by Anli'),w()(),y(47,"li")(48,"a",16),A(49,`"Mac's Minecraft" pixel font`),w()()()()()()),e&2&&(I(3),J("ngClass",r.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),I(),J("ngClass",r.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),I(2),Gt(" This will be the logo! Screen width is <= 900px: ",r.breakpointService.isScreenSmallWidth()," "),I(3),J("ngStyle",mn(9,bm,r.breakpointService.isScreenSmallWidth()?"100%":"60%")),I(),ve(r.teamListService.isLoading()?10:r.teamListService.errorMessage().length>0?11:12),I(3),J("ngClass",r.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),I(),J("ngStyle",mn(11,bm,r.breakpointService.isScreenSmallWidth()?"100%":"50%")),I(25),J("team",r.teamExample),I(),J("ngStyle",mn(13,bm,r.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[gd,fp,hp,vd],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var gk=20,Eo=(()=>{class t{_ngZone=u(S);_platform=u(ue);_renderer=u(Ue).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=gk){return this._platform.isBrowser?new L(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Xa(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):U()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){let i=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe(ae(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let r=[];return this.scrollContainers.forEach((i,o)=>{this._scrollableContainsElement(o,e)&&r.push(o)}),r}_scrollableContainsElement(e,r){let i=_t(r),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cr=(()=>{class t{elementRef=u(k);scrollDispatcher=u(Eo);ngZone=u(S);dir=u(Ct,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new D;_renderer=u(Se);_cleanupScroll;_elementScrolled=new D;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=r.scrollHeight-r.clientHeight-e.bottom),i&&Do()!=vn.NORMAL?(e.left!=null&&(e.right=r.scrollWidth-r.clientWidth-e.left),Do()==vn.INVERTED?e.left=e.right:Do()==vn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=r.scrollWidth-r.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let r=this.elementRef.nativeElement;hd()?r.scrollTo(e):(e.top!=null&&(r.scrollTop=e.top),e.left!=null&&(r.scrollLeft=e.left))}measureScrollOffset(e){let r="left",i="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?i:r:e=="end"&&(e=s?r:i),s&&Do()==vn.INVERTED?e==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Do()==vn.NEGATED?e==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),vk=20,bn=(()=>{class t{_platform=u(ue);_listeners;_viewportSize=null;_change=new D;_document=u(Y);constructor(){let e=u(S),r=u(Ue).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,r=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||r.scrollY||i.scrollTop||0,a=-o.left||e.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(e=vk){return e>0?this._change.pipe(Xa(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var la=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})(),ym=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ze,la,Ze,la]})}return t})();var wd=["*"],bk=["content"],yk=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],_k=["mat-drawer","mat-drawer-content","*"];function Dk(t,n){if(t&1){let e=Zn();y(0,"div",1),de("click",function(){Tt(e);let i=ce();return At(i._onBackdropClicked())}),w()}if(t&2){let e=ce();H("mat-drawer-shown",e._isShowingBackdrop())}}function wk(t,n){t&1&&(y(0,"mat-drawer-content"),W(1,2),w())}var Ck=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Ek=["mat-sidenav","mat-sidenav-content","*"];function xk(t,n){if(t&1){let e=Zn();y(0,"div",1),de("click",function(){Tt(e);let i=ce();return At(i._onBackdropClicked())}),w()}if(t&2){let e=ce();H("mat-drawer-shown",e._isShowingBackdrop())}}function Ik(t,n){t&1&&(y(0,"mat-sidenav-content"),W(1,2),w())}var Sk=`.mat-drawer-container {
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
`;var Mk=new v("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),wm=new v("MAT_DRAWER_CONTAINER"),yd=(()=>{class t extends Cr{_platform=u(ue);_changeDetectorRef=u(Ve);_container=u(Dm);constructor(){let e=u(k),r=u(Eo),i=u(S);super(e,r,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:r}=this._container;return e!=null&&e.mode!=="over"&&e.opened||r!=null&&r.mode!=="over"&&r.opened}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(r,i){r&2&&(Yn("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),H("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[Te([{provide:Cr,useExisting:t}]),xe],ngContentSelectors:wd,decls:1,vars:0,template:function(r,i){r&1&&(Me(),W(0))},encapsulation:2,changeDetection:0})}return t})(),_m=(()=>{class t{_elementRef=u(k);_focusTrapFactory=u(sm);_focusMonitor=u(gi);_platform=u(ue);_ngZone=u(S);_renderer=u(Se);_interactivityChecker=u(cd);_doc=u(Y);_container=u(wm,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Vt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Vt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Vt(e))}_opened=F(!1);_openedVia=null;_animationStarted=new D;_animationEnd=new D;openedChange=new O(!0);_openedStream=this.openedChange.pipe(ae(e=>e),q(()=>{}));openedStart=this._animationStarted.pipe(ae(()=>this.opened),Ri(void 0));_closedStream=this.openedChange.pipe(ae(e=>!e),q(()=>{}));closedStart=this._animationStarted.pipe(ae(()=>!this.opened),Ri(void 0));_destroyed=new D;onPositionChanged=new O;_content;_modeChanged=new D;_injector=u(te);_changeDetectorRef=u(Ve);constructor(){this.openedChange.pipe(Ee(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,r=this._elementRef.nativeElement;return[e.listen(r,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Yt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(r,"transitionend",this._handleTransitionEvent),e.listen(r,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,r){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),s=this._renderer.listen(e,"mousedown",i)})),e.focus(r)}_focusByCssSelector(e,r){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,r)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":qe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,r){e&&r&&(this._openedVia=r);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,r,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&r&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Xe(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let r=this._elementRef.nativeElement,i=r.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,r)),i.appendChild(r)):this._anchor&&this._anchor.parentNode.insertBefore(r,this._anchor)}_handleTransitionEvent=e=>{let r=this._elementRef.nativeElement;e.target===r&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-drawer"]],viewQuery:function(r,i){if(r&1&&ze(bk,5),r&2){let o;j(o=B())&&(i._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(r,i){r&2&&(Ie("align",null)("tabIndex",i.mode!=="side"?"-1":null),Yn("visibility",!i._container&&!i.opened?"hidden":null),H("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:wd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(Me(),y(0,"div",1,0),W(2),w())},dependencies:[Cr],encapsulation:2,changeDetection:0})}return t})(),Dm=(()=>{class t{_dir=u(Ct,{optional:!0});_element=u(k);_ngZone=u(S);_changeDetectorRef=u(Ve);_animationDisabled=Ye();_transitionsEnabled=!1;_allDrawers;_drawers=new an;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Vt(e)}_autosize=u(Mk);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Vt(e)}_backdropOverride=null;backdropClick=new O;_start=null;_end=null;_left=null;_right=null;_destroyed=new D;_doCheckSubject=new D;_contentMargins={left:null,right:null};_contentMarginChanges=new D;get scrollable(){return this._userContent||this._content}_injector=u(te);constructor(){let e=u(ue),r=u(bn);this._dir?.change.pipe(Ee(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),r.change().pipe(Ee(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(nt(this._allDrawers),Ee(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(r=>!r._container||r._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(nt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Xt(10),Ee(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,r=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,r-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")r+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();r+=i,e-=i}}e=e||null,r=r||null,(e!==this._contentMargins.left||r!==this._contentMargins.right)&&(this._contentMargins={left:e,right:r},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Ee(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Ee(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Ee(this._drawers.changes)).subscribe(()=>{qe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Ee(xt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let r=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?r.add(i):r.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(r,i,o){if(r&1&&wt(o,yd,5)(o,_m,5),r&2){let s;j(s=B())&&(i._content=s.first),j(s=B())&&(i._allDrawers=s)}},viewQuery:function(r,i){if(r&1&&ze(yd,5),r&2){let o;j(o=B())&&(i._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Te([{provide:wm,useExisting:t}])],ngContentSelectors:_k,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(Me(yk),ge(0,Dk,1,2,"div",0),W(1),W(2,1),ge(3,wk,2,0,"mat-drawer-content")),r&2&&(ve(i.hasBackdrop?0:-1),I(3),ve(i._content?-1:3))},dependencies:[yd],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),_d=(()=>{class t extends yd{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Te([{provide:Cr,useExisting:t}]),xe],ngContentSelectors:wd,decls:1,vars:0,template:function(r,i){r&1&&(Me(),W(0))},encapsulation:2,changeDetection:0})}return t})(),Cm=(()=>{class t extends _m{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Vt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=wr(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=wr(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(r,i){r&2&&(Ie("tabIndex",i.mode!=="side"?"-1":null)("align",null),Yn("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),H("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Te([{provide:_m,useExisting:t}]),xe],ngContentSelectors:wd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(Me(),y(0,"div",1,0),W(2),w())},dependencies:[Cr],encapsulation:2,changeDetection:0})}return t})(),Bw=(()=>{class t extends Dm{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(r,i,o){if(r&1&&wt(o,_d,5)(o,Cm,5),r&2){let s;j(s=B())&&(i._content=s.first),j(s=B())&&(i._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[Te([{provide:wm,useExisting:t},{provide:Dm,useExisting:t}]),xe],ngContentSelectors:Ek,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(Me(Ck),ge(0,xk,1,2,"div",0),W(1),W(2,1),ge(3,Ik,2,0,"mat-sidenav-content")),r&2&&(ve(i.hasBackdrop?0:-1),I(3),ve(i._content?-1:3))},dependencies:[_d],styles:[Sk],encapsulation:2,changeDetection:0})}return t})();var ca=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Em=class extends ca{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,r,i,o){super(),this.component=n,this.viewContainerRef=e,this.injector=r,this.projectableNodes=i,this.bindings=o||null}},er=class extends ca{templateRef;viewContainerRef;context;injector;constructor(n,e,r,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},xm=class extends ca{element;constructor(n){super(),this.element=n instanceof k?n.nativeElement:n}},Cd=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Em)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof er)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof xm)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ed=class extends Cd{outletElement;_appRef;_defaultInjector;constructor(n,e,r){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=r}attachComponentPortal(n){let e;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(Mn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||te.NULL,o=i.get(me,r.injector);e=Dc(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),r.attachView(e.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,r=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(r);i!==-1&&e.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let e=n.element;e.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(r,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(e,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Hw=(()=>{class t extends er{constructor(){let e=u(dt),r=u(it);super(e,r)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[xe]})}return t})(),Im=(()=>{class t extends Cd{_moduleRef=u(Mn,{optional:!0});_document=u(Y);_viewContainerRef=u(it);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new O;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let r=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=r.createComponent(e.component,{index:r.length,injector:e.injector||r.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=e=>{let r=e.element;r.parentNode;let i=this._document.createComment("dom-portal");e.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[xe]})}return t})(),Uw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var Sm=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new L(e=>{let r=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ae(e=>e.some(r=>r.target===n)),nl({bufferSize:1,refCount:!0}),Ee(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},xd=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(S);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Sm(i)),this._observers.get(i).observe(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Nm=["*"];function Tk(t,n){t&1&&W(0)}var Ak=["tabListContainer"],Rk=["tabList"],kk=["tabListInner"],Nk=["nextPaginator"],Ok=["previousPaginator"],Fk=["content"];function Pk(t,n){}var Lk=["tabBodyWrapper"],Vk=["tabHeader"];function jk(t,n){}function Bk(t,n){if(t&1&&yt(0,jk,0,0,"ng-template",12),t&2){let e=ce().$implicit;J("cdkPortalOutlet",e.templateLabel)}}function Hk(t,n){if(t&1&&A(0),t&2){let e=ce().$implicit;pn(e.textLabel)}}function Uk(t,n){if(t&1){let e=Zn();y(0,"div",7,2),de("click",function(){let i=Tt(e),o=i.$implicit,s=i.$index,a=ce(),l=fn(1);return At(a._handleClick(o,l,s))})("cdkFocusChange",function(i){let o=Tt(e).$index,s=ce();return At(s._tabFocusChanged(i,o))}),le(2,"span",8)(3,"div",9),y(4,"span",10)(5,"span",11),ge(6,Bk,1,1,null,12)(7,Hk,1,1),w()()()}if(t&2){let e=n.$implicit,r=n.$index,i=fn(1),o=ce();hn(e.labelClass),H("mdc-tab--active",o.selectedIndex===r),J("id",o._getTabLabelId(e,r))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Ie("tabIndex",o._getTabIndex(r))("aria-posinset",r+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(r))("aria-selected",o.selectedIndex===r)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),I(3),J("matRippleTrigger",i)("matRippleDisabled",e.disabled||o.disableRipple),I(3),ve(e.templateLabel?6:7)}}function zk(t,n){t&1&&W(0)}function $k(t,n){if(t&1){let e=Zn();y(0,"mat-tab-body",13),de("_onCentered",function(){Tt(e);let i=ce();return At(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){Tt(e);let o=ce();return At(o._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){Tt(e);let o=ce();return At(o._bodyCentered(i))}),w()}if(t&2){let e=n.$implicit,r=n.$index,i=ce();hn(e.bodyClass),J("id",i._getTabContentId(r))("content",e.content)("position",e.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),Ie("tabindex",i.contentTabIndex!=null&&i.selectedIndex===r?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(e,r))("aria-hidden",i.selectedIndex!==r)}}var Wk=new v("MatTabContent"),Gk=(()=>{class t{template=u(dt);constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","matTabContent",""]],features:[Te([{provide:Wk,useExisting:t}])]})}return t})(),qk=new v("MatTabLabel"),Gw=new v("MAT_TAB"),Om=(()=>{class t extends Hw{_closestTab=u(Gw,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Te([{provide:qk,useExisting:t}]),xe]})}return t})(),qw=new v("MAT_TAB_GROUP"),Fm=(()=>{class t{_viewContainerRef=u(it);_closestTabGroup=u(qw,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new D;position=null;origin=null;isActive=!1;constructor(){u(pt).load(Co)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new er(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab"]],contentQueries:function(r,i,o){if(r&1&&wt(o,Om,5)(o,Gk,7,dt),r&2){let s;j(s=B())&&(i.templateLabel=s.first),j(s=B())&&(i._explicitContent=s.first)}},viewQuery:function(r,i){if(r&1&&ze(dt,7),r&2){let o;j(o=B())&&(i._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(r,i){r&2&&Ie("id",null)},inputs:{disabled:[2,"disabled","disabled",re],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Te([{provide:Gw,useExisting:t}]),We],ngContentSelectors:Nm,decls:1,vars:0,template:function(r,i){r&1&&(Me(),Xi(0,Tk,1,0,"ng-template"))},encapsulation:2})}return t})(),Mm="mdc-tab-indicator--active",zw="mdc-tab-indicator--no-transition",Tm=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(i=>i.elementRef.nativeElement===n),r=this._currentItem;if(e!==r&&(r?.deactivateInkBar(),e)){let i=r?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},Zk=(()=>{class t{_elementRef=u(k);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let r=this._elementRef.nativeElement;if(!e||!r.getBoundingClientRect||!this._inkBarContentElement){r.classList.add(Mm);return}let i=r.getBoundingClientRect(),o=e.width/i.width,s=e.left-i.left;r.classList.add(zw),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),r.getBoundingClientRect(),r.classList.remove(zw),r.classList.add(Mm),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Mm)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,r=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");r.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",r.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",re]}})}return t})();var Zw=(()=>{class t extends Zk{elementRef=u(k);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(r,i){r&2&&(Ie("aria-disabled",!!i.disabled),H("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",re]},features:[xe]})}return t})(),$w={passive:!0},Yk=650,Qk=100,Kk=(()=>{class t{_elementRef=u(k);_changeDetectorRef=u(Ve);_viewportRuler=u(bn);_dir=u(Ct,{optional:!0});_ngZone=u(S);_platform=u(ue);_sharedResizeObserver=u(xd);_injector=u(te);_renderer=u(Se);_animationsDisabled=Ye();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new D;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new D;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let r=isNaN(e)?0:e;this._selectedIndex!=r&&(this._selectedIndexChanged=!0,this._selectedIndex=r,this._keyManager&&this._keyManager.updateActiveItem(r))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),$w),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),$w))}ngAfterContentInit(){let e=this._dir?this._dir.change:U("ltr"),r=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Xt(32),Ee(this._destroyed)),i=this._viewportRuler.change(150).pipe(Ee(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ia(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),qe(o,{injector:this._injector}),xt(e,i,r,this._items.changes,this._itemsResized()).pipe(Ee(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?ke:this._items.changes.pipe(nt(this._items),He(e=>new L(r=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>r.next(o));return e.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),jr(1),ae(e=>e.some(r=>r.contentRect.width>0&&r.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Yt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let r=this._items.get(this.focusIndex);r&&!r.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let r=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?r.scrollLeft=0:r.scrollLeft=r.scrollWidth-r.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,r=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(r)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let r=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*r/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let r=this._items?this._items.toArray()[e]:null;if(!r)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=r.elementRef.nativeElement,a,l;this._getLayoutDirection()=="ltr"?(a=o,l=a+s):(l=this._tabListInner.nativeElement.offsetWidth-o,a=l-s);let c=this.scrollDistance,d=this.scrollDistance+i;a<c?this.scrollDistance-=c-a:l>d&&(this.scrollDistance+=Math.min(l-d,a-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,r=this._elementRef.nativeElement.offsetWidth,i=e-r>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,r=this._tabListContainer.nativeElement.offsetWidth;return e-r||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,r=e?e.elementRef.nativeElement:null;r?this._inkBar.alignToElement(r):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,r){r&&r.button!=null&&r.button!==0||(this._stopInterval(),Vr(Yk,Qk).pipe(Ee(xt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(e);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let r=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(r,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:r,distance:this._scrollDistance}}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",re],selectedIndex:[2,"selectedIndex","selectedIndex",eo]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),Xk=(()=>{class t extends Kk{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Tm(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-tab-header"]],contentQueries:function(r,i,o){if(r&1&&wt(o,Zw,4),r&2){let s;j(s=B())&&(i._items=s)}},viewQuery:function(r,i){if(r&1&&ze(Ak,7)(Rk,7)(kk,7)(Nk,5)(Ok,5),r&2){let o;j(o=B())&&(i._tabListContainer=o.first),j(o=B())&&(i._tabList=o.first),j(o=B())&&(i._tabListInner=o.first),j(o=B())&&(i._nextPaginator=o.first),j(o=B())&&(i._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(r,i){r&2&&H("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",re]},features:[xe],ngContentSelectors:Nm,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(r,i){r&1&&(Me(),y(0,"div",5,0),de("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(s){return i._handlePaginatorPress("before",s)})("touchend",function(){return i._stopInterval()}),le(2,"div",6),w(),y(3,"div",7,1),de("keydown",function(s){return i._handleKeydown(s)}),y(5,"div",8,2),de("cdkObserveContent",function(){return i._onContentChanges()}),y(7,"div",9,3),W(9),w()()(),y(10,"div",10,4),de("mousedown",function(s){return i._handlePaginatorPress("after",s)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),le(12,"div",6),w()),r&2&&(H("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),J("matRippleDisabled",i._disableScrollBefore||i.disableRipple),I(3),H("_mat-animation-noopable",i._animationsDisabled),I(2),Ie("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),I(5),H("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),J("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[aa,hw],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),Jk=new v("MAT_TABS_CONFIG"),Ww=(()=>{class t extends Im{_host=u(Am);_ngZone=u(S);_centeringSub=se.EMPTY;_leavingSub=se.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(nt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","matTabBodyHost",""]],features:[xe]})}return t})(),Am=(()=>{class t{_elementRef=u(k);_dir=u(Ct,{optional:!0});_ngZone=u(S);_injector=u(te);_renderer=u(Se);_diAnimationsDisabled=Ye();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=se.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Ve);this._dirChangeSubscription=this._dir.change.subscribe(r=>{this._computePositionAnimationState(r),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),qe(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,r=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",r),this._renderer.listen(e,"transitioncancel",r)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),qe(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-body"]],viewQuery:function(r,i){if(r&1&&ze(Ww,5)(Fk,5),r&2){let o;j(o=B())&&(i._portalHost=o.first),j(o=B())&&(i._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(r,i){r&2&&Ie("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(r,i){r&1&&(y(0,"div",1,0),yt(2,Pk,0,0,"ng-template",2),w()),r&2&&H("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[Ww,Cr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Yw=(()=>{class t{_elementRef=u(k);_changeDetectorRef=u(Ve);_ngZone=u(S);_tabsSubscription=se.EMPTY;_tabLabelSubscription=se.EMPTY;_tabBodySubscription=se.EMPTY;_diAnimationsDisabled=Ye();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new an;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let r=e+"";this._animationDuration=/^\d+$/.test(r)?e+"ms":r}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let r=this._elementRef.nativeElement.classList;r.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&r.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!u(ue).isBrowser;constructor(){let e=u(Jk,{optional:!0});this._groupId=u(mt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let r=this._selectedIndex==null;if(!r){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,o)=>i.isActive=o===e),r||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((r,i)=>{r.position=i-e,this._selectedIndex!=null&&r.position==0&&!r.origin&&(r.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let r=this._tabs.toArray(),i;for(let o=0;o<r.length;o++)if(r[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,i=r[o];break}!i&&r[e]&&Promise.resolve().then(()=>{r[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(nt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(r=>r._closestTabGroup===this||!r._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let r=this._tabHeader;r&&(r.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let r=new Rm;return r.index=e,this._tabs&&this._tabs.length&&(r.tab=this._tabs.toArray()[e]),r}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=xt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,r){return e.id||`${this._groupId}-label-${r}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let r=this._tabBodyWrapper.nativeElement;r.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(r.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,r,i){r.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let r=this._lastFocusedTabIndex??this.selectedIndex;return e===r?0:-1}_tabFocusChanged(e,r){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=r)}_bodyCentered(e){e&&this._tabBodies?.forEach((r,i)=>r._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-group"]],contentQueries:function(r,i,o){if(r&1&&wt(o,Fm,5),r&2){let s;j(s=B())&&(i._allTabs=s)}},viewQuery:function(r,i){if(r&1&&ze(Lk,5)(Vk,5)(Am,5),r&2){let o;j(o=B())&&(i._tabBodyWrapper=o.first),j(o=B())&&(i._tabHeader=o.first),j(o=B())&&(i._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(r,i){r&2&&(Ie("mat-align-tabs",i.alignTabs),hn("mat-"+(i.color||"primary")),Yn("--mat-tab-animation-duration",i.animationDuration),H("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",re],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",re],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",re],selectedIndex:[2,"selectedIndex","selectedIndex",eo],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",eo],disablePagination:[2,"disablePagination","disablePagination",re],disableRipple:[2,"disableRipple","disableRipple",re],preserveContent:[2,"preserveContent","preserveContent",re],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Te([{provide:qw,useExisting:t}])],ngContentSelectors:Nm,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(r,i){r&1&&(Me(),y(0,"mat-tab-header",3,0),de("indexFocused",function(s){return i._focusChanged(s)})("selectFocusedIndex",function(s){return i.selectedIndex=s}),Tn(2,Uk,8,17,"div",4,pc),w(),ge(4,zk,1,0),y(5,"div",5,1),Tn(7,$k,1,10,"mat-tab-body",6,pc),w()),r&2&&(J("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),hc("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),I(2),An(i._tabs),I(2),ve(i._isServer?4:-1),I(),H("_mat-animation-noopable",i._animationsDisabled()),I(2),An(i._tabs))},dependencies:[Xk,Zw,om,aa,Im,Am],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Rm=class{index;tab};var Id=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-dice-roller-sidenav"]],decls:2,vars:0,template:function(e,r){e&1&&(he(0,"p"),A(1,"map-dice-roller-sidenav works!"),be())},encapsulation:2})};var Sd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-links-sidenav"]],decls:2,vars:0,template:function(e,r){e&1&&(he(0,"p"),A(1,"map-links-sidenav works!"),be())},encapsulation:2})};var Fn=class t{constructor(n){this.http=n;this.http=u(di)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=F(!0);isLoading=this.loading.asReadonly();error=F("");errorMessage=this.error.asReadonly();map=F({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getUnitsList(){return this.mapData().units??[]}static \u0275fac=function(e){return new(e||t)(P(di))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var nC=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(r){return new(r||t)($(Se),$(k))};static \u0275dir=R({type:t})}return t})(),eN=(()=>{class t extends nC{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,features:[xe]})}return t})(),Ud=new v("");var tN={provide:Ud,useExisting:jt(()=>zd),multi:!0};function nN(){let t=qt()?qt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var rN=new v(""),zd=(()=>{class t extends nC{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!nN())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(r){return new(r||t)($(Se),$(k),$(rN,8))};static \u0275dir=R({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&de("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[Te([tN]),xe]})}return t})();function Lm(t){return t==null||Vm(t)===0}function Vm(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var jm=new v(""),Bm=new v(""),iN=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Td=class{static min(n){return oN(n)}static max(n){return sN(n)}static required(n){return aN(n)}static requiredTrue(n){return lN(n)}static email(n){return cN(n)}static minLength(n){return dN(n)}static maxLength(n){return uN(n)}static pattern(n){return fN(n)}static nullValidator(n){return rC()}static compose(n){return cC(n)}static composeAsync(n){return dC(n)}};function oN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function sN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function aN(t){return Lm(t.value)?{required:!0}:null}function lN(t){return t.value===!0?null:{required:!0}}function cN(t){return Lm(t.value)||iN.test(t.value)?null:{email:!0}}function dN(t){return n=>{let e=n.value?.length??Vm(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function uN(t){return n=>{let e=n.value?.length??Vm(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function fN(t){if(!t)return rC;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),r=>{if(Lm(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function rC(t){return null}function iC(t){return t!=null}function oC(t){return mr(t)?Re(t):t}function sC(t){let n={};return t.forEach(e=>{n=e!=null?g(g({},n),e):n}),Object.keys(n).length===0?null:n}function aC(t,n){return n.map(e=>e(t))}function hN(t){return!t.validate}function lC(t){return t.map(n=>hN(n)?n:e=>n.validate(e))}function cC(t){if(!t)return null;let n=t.filter(iC);return n.length==0?null:function(e){return sC(aC(e,n))}}function Hm(t){return t!=null?cC(lC(t)):null}function dC(t){if(!t)return null;let n=t.filter(iC);return n.length==0?null:function(e){let r=aC(e,n).map(oC);return Ru(r).pipe(q(sC))}}function Um(t){return t!=null?dC(lC(t)):null}function Kw(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function uC(t){return t._rawValidators}function fC(t){return t._rawAsyncValidators}function Pm(t){return t?Array.isArray(t)?t:[t]:[]}function Ad(t,n){return Array.isArray(t)?t.includes(n):t===n}function Xw(t,n){let e=Pm(n);return Pm(t).forEach(i=>{Ad(e,i)||e.push(i)}),e}function Jw(t,n){return Pm(n).filter(e=>!Ad(t,e))}var Rd=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Hm(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Um(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},yi=class extends Rd{name;get formDirective(){return null}get path(){return null}},_i=class extends Rd{_parent=null;name=null;valueAccessor=null},kd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var hC=(()=>{class t extends kd{constructor(e){super(e)}static \u0275fac=function(r){return new(r||t)($(_i,2))};static \u0275dir=R({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&H("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[xe]})}return t})(),pC=(()=>{class t extends kd{constructor(e){super(e)}static \u0275fac=function(r){return new(r||t)($(yi,10))};static \u0275dir=R({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){r&2&&H("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[xe]})}return t})();var ua="VALID",Md="INVALID",xo="PENDING",fa="DISABLED",Er=class{},Nd=class extends Er{value;source;constructor(n,e){super(),this.value=n,this.source=e}},pa=class extends Er{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},ma=class extends Er{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Io=class extends Er{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Od=class extends Er{source;constructor(n){super(),this.source=n}},Fd=class extends Er{source;constructor(n){super(),this.source=n}};function mC(t){return($d(t)?t.validators:t)||null}function pN(t){return Array.isArray(t)?Hm(t):t||null}function gC(t,n){return($d(n)?n.asyncValidators:t)||null}function mN(t){return Array.isArray(t)?Um(t):t||null}function $d(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function gN(t,n,e){let r=t.controls;if(!(n?Object.keys(r):r).length)throw new C(1e3,"");if(!r[e])throw new C(1001,"")}function vN(t,n,e){t._forEachChild((r,i)=>{if(e[i]===void 0)throw new C(-1002,"")})}var Pd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ye(this.statusReactive)}set status(n){ye(()=>this.statusReactive.set(n))}_status=ot(()=>this.statusReactive());statusReactive=F(void 0);get valid(){return this.status===ua}get invalid(){return this.status===Md}get pending(){return this.status===xo}get disabled(){return this.status===fa}get enabled(){return this.status!==fa}errors;get pristine(){return ye(this.pristineReactive)}set pristine(n){ye(()=>this.pristineReactive.set(n))}_pristine=ot(()=>this.pristineReactive());pristineReactive=F(!0);get dirty(){return!this.pristine}get touched(){return ye(this.touchedReactive)}set touched(n){ye(()=>this.touchedReactive.set(n))}_touched=ot(()=>this.touchedReactive());touchedReactive=F(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Xw(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Xw(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Jw(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Jw(n,this._rawAsyncValidators))}hasValidator(n){return Ad(this._rawValidators,n)}hasAsyncValidator(n){return Ad(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(g({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new ma(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),e&&n.emitEvent!==!1&&this._events.next(new ma(!1,r))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(g({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new pa(!1,r))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),e&&n.emitEvent!==!1&&this._events.next(new pa(!0,r))}markAsPending(n={}){this.status=xo;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Io(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(g({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=fa,this.errors=null,this._forEachChild(i=>{i.disable(G(g({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Nd(this.value,r)),this._events.next(new Io(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ua,this._forEachChild(r=>{r.enable(G(g({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ua||this.status===xo)&&this._runAsyncValidator(r,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Nd(this.value,e)),this._events.next(new Io(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(g({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?fa:ua}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=xo,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let r=oC(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){let r=e?this.get(e):this;return r?.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new Io(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,r)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?fa:this.errors?Md:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xo)?xo:this._anyControlsHaveStatus(Md)?Md:ua}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new pa(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new ma(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){$d(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=pN(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=mN(this._rawAsyncValidators)}},Ld=class extends Pd{constructor(n,e,r){super(mC(e),gC(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){vN(this,!0,n),Object.keys(n).forEach(r=>{gN(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,G(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fd(this))}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(n,e){let r=n;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ga=new v("",{factory:()=>Wd}),Wd="always";function Vd(t,n,e=Wd){zm(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),yN(t,n),DN(t,n),_N(t,n),bN(t,n)}function jd(t,n,e=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),Hd(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Bd(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function bN(t,n){if(n.valueAccessor.setDisabledState){let e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function zm(t,n){let e=uC(t);n.validator!==null?t.setValidators(Kw(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let r=fC(t);n.asyncValidator!==null?t.setAsyncValidators(Kw(r,n.asyncValidator)):typeof r=="function"&&t.setAsyncValidators([r]);let i=()=>t.updateValueAndValidity();Bd(n._rawValidators,i),Bd(n._rawAsyncValidators,i)}function Hd(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=uC(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let i=fC(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let r=()=>{};return Bd(n._rawValidators,r),Bd(n._rawAsyncValidators,r),e}function yN(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&vC(t,n)})}function _N(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&vC(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function vC(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function DN(t,n){let e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function bC(t,n){t==null,zm(t,n)}function wN(t,n){return Hd(t,n)}function CN(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function EN(t){return Object.getPrototypeOf(t.constructor)===eN}function yC(t,n){t._syncPendingControls(),n.forEach(e=>{let r=e.control;r.updateOn==="submit"&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function xN(t,n){if(!n)return null;Array.isArray(n);let e,r,i;return n.forEach(o=>{o.constructor===zd?e=o:EN(o)?r=o:i=o}),i||r||e||null}function IN(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var SN={provide:yi,useExisting:jt(()=>va)},ha=Promise.resolve(),va=(()=>{class t extends yi{callSetDisabledState;get submitted(){return ye(this.submittedReactive)}_submitted=ot(()=>this.submittedReactive());submittedReactive=F(!1);_directives=new Set;form;ngSubmit=new O;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new Ld({},Hm(e),Um(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ha.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),Vd(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ha.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ha.then(()=>{let r=this._findContainer(e.path),i=new Ld({});bC(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ha.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){ha.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),yC(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Od(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(r){return new(r||t)($(jm,10),$(Bm,10),$(ga,8))};static \u0275dir=R({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&de("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([SN]),xe]})}return t})();function eC(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function tC(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var $m=class extends Pd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,r){super(mC(e),gC(r,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$d(e)&&(e.nonNullable||e.initialValueIsDefault)&&(tC(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Fd(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){eC(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){eC(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){tC(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var MN=t=>t instanceof $m;var _C=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var TN=(()=>{class t extends yi{callSetDisabledState;get submitted(){return ye(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ot(()=>this._submittedReactive());_submittedReactive=F(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Hd(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);return Vd(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){jd(e.control||null,e,!1),IN(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,yC(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Od(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(jd(r||null,e),MN(i)&&(Vd(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);bC(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&wN(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){zm(this.form,this),this._oldForm&&Hd(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||t)($(jm,10),$(Bm,10),$(ga,8))};static \u0275dir=R({type:t,features:[xe,We]})}return t})();var DC=new v(""),AN={provide:_i,useExisting:jt(()=>Wm)},Wm=(()=>{class t extends _i{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new O;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,r,i,o,s){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=xN(this,i)}ngOnChanges(e){if(this._isControlChanged(e)){let r=e.form.previousValue;r&&jd(r,this,!1),Vd(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}CN(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&jd(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(r){return new(r||t)($(jm,10),$(Bm,10),$(Ud,10),$(DC,8),$(ga,8))};static \u0275dir=R({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Te([AN]),xe,We]})}return t})();var RN={provide:yi,useExisting:jt(()=>Gm)},Gm=(()=>{class t extends TN{form=null;ngSubmit=new O;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&de("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([RN]),xe]})}return t})();var wC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var CC=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ga,useValue:e.callSetDisabledState??Wd}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[wC]})}return t})(),EC=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:DC,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ga,useValue:e.callSetDisabledState??Wd}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[wC]})}return t})();var NN=["notch"],ON=["matFormFieldNotchedOutline",""],FN=["*"],xC=["iconPrefixContainer"],IC=["textPrefixContainer"],SC=["iconSuffixContainer"],MC=["textSuffixContainer"],PN=["textField"],LN=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],VN=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function jN(t,n){t&1&&le(0,"span",21)}function BN(t,n){if(t&1&&(y(0,"label",20),W(1,1),ge(2,jN,1,0,"span",21),w()),t&2){let e=ce(2);J("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Ie("for",e._control.disableAutomaticLabeling?null:e._control.id),I(2),ve(!e.hideRequiredMarker&&e._control.required?2:-1)}}function HN(t,n){if(t&1&&ge(0,BN,3,5,"label",20),t&2){let e=ce();ve(e._hasFloatingLabel()?0:-1)}}function UN(t,n){t&1&&le(0,"div",7)}function zN(t,n){}function $N(t,n){if(t&1&&yt(0,zN,0,0,"ng-template",13),t&2){ce(2);let e=fn(1);J("ngTemplateOutlet",e)}}function WN(t,n){if(t&1&&(y(0,"div",9),ge(1,$N,1,1,null,13),w()),t&2){let e=ce();J("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),I(),ve(e._forceDisplayInfixLabel()?-1:1)}}function GN(t,n){t&1&&(y(0,"div",10,2),W(2,2),w())}function qN(t,n){t&1&&(y(0,"div",11,3),W(2,3),w())}function ZN(t,n){}function YN(t,n){if(t&1&&yt(0,ZN,0,0,"ng-template",13),t&2){ce();let e=fn(1);J("ngTemplateOutlet",e)}}function QN(t,n){t&1&&(y(0,"div",14,4),W(2,4),w())}function KN(t,n){t&1&&(y(0,"div",15,5),W(2,5),w())}function XN(t,n){t&1&&le(0,"div",16)}function JN(t,n){t&1&&(y(0,"div",18),W(1,6),w())}function eO(t,n){if(t&1&&(y(0,"mat-hint",22),A(1),w()),t&2){let e=ce(2);J("id",e._hintLabelId),I(),pn(e.hintLabel)}}function tO(t,n){if(t&1&&(y(0,"div",19),ge(1,eO,2,2,"mat-hint",22),W(2,7),le(3,"div",23),W(4,8),w()),t&2){let e=ce();I(),ve(e.hintLabel?1:-1)}}var qm=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-label"]]})}return t})(),nO=new v("MatError");var Zm=(()=>{class t{align="start";id=u(mt).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(Wt("id",i.id),Ie("align",null),H("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),rO=new v("MatPrefix");var iO=new v("MatSuffix");var FC=new v("FloatingLabelParent"),TC=(()=>{class t{_elementRef=u(k);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(xd);_ngZone=u(S);_parent=u(FC);_resizeSubscription=new se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return oO(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&H("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function oO(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let r=e.scrollWidth;return e.remove(),r}var AC="mdc-line-ripple--active",Gd="mdc-line-ripple--deactivating",RC=(()=>{class t{_elementRef=u(k);_cleanupTransitionEnd;constructor(){let e=u(S),r=u(Se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Gd),e.add(AC)}deactivate(){this._elementRef.nativeElement.classList.add(Gd)}_handleTransitionEnd=e=>{let r=this._elementRef.nativeElement.classList,i=r.contains(Gd);e.propertyName==="opacity"&&i&&r.remove(AC,Gd)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),kC=(()=>{class t{_elementRef=u(k);_ngZone=u(S);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,r=e.querySelector(".mdc-floating-label");r?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let r=this._notch.nativeElement;!this.open||!e?r.style.width="":r.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&ze(NN,5),r&2){let o;j(o=B())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&H("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ON,ngContentSelectors:FN,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(Me(),ut(0,"div",1),he(1,"div",2,0),W(3),be(),ut(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Ym=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t})}return t})();var ba=new v("MatFormField"),sO=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),NC="fill",aO="auto",OC="fixed",lO="translateY(-50%)",qd=(()=>{class t{_elementRef=u(k);_changeDetectorRef=u(Ve);_platform=u(ue);_idGenerator=u(mt);_ngZone=u(S);_defaults=u(sO,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ss("iconPrefixContainer");_textPrefixContainerSignal=Ss("textPrefixContainer");_iconSuffixContainerSignal=Ss("iconSuffixContainer");_textSuffixContainerSignal=Ss("textSuffixContainer");_prefixSuffixContainers=ot(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=I_(qm);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Vt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||aO}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let r=e||this._defaults?.appearance||NC;this._appearanceSignal.set(r)}_appearanceSignal=F(NC);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||OC}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||OC}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ye();constructor(){let e=this._defaults,r=u(Ct);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),rn(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ot(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let r=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe(nt([void 0,void 0]),q(()=>[r.errorState,r.userAriaDescribedBy]),tl(),ae(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(Ee(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),xt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){T_({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ot(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let r=this._control?this._control.ngControl:null;return r&&r[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||e;i=e.concat(r.filter(s=>s&&!o.includes(s)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,p=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,m=`var(--mat-mdc-form-field-label-transform, ${lO} translateX(${p}))`,_=s+a+l+c;return[m,_]}_writeOutlinedLabelStyles(e){if(e!==null){let[r,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let r=e.getRootNode();return r&&r!==e}return document.documentElement.contains(e)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(mc(o,i._labelChild,qm,5),wt(o,Ym,5)(o,rO,5)(o,iO,5)(o,nO,5)(o,Zm,5)),r&2){vc();let s;j(s=B())&&(i._formFieldControl=s.first),j(s=B())&&(i._prefixChildren=s),j(s=B())&&(i._suffixChildren=s),j(s=B())&&(i._errorChildren=s),j(s=B())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(gc(i._iconPrefixContainerSignal,xC,5)(i._textPrefixContainerSignal,IC,5)(i._iconSuffixContainerSignal,SC,5)(i._textSuffixContainerSignal,MC,5),ze(PN,5)(xC,5)(IC,5)(SC,5)(MC,5)(TC,5)(kC,5)(RC,5)),r&2){vc(4);let o;j(o=B())&&(i._textField=o.first),j(o=B())&&(i._iconPrefixContainer=o.first),j(o=B())&&(i._textPrefixContainer=o.first),j(o=B())&&(i._iconSuffixContainer=o.first),j(o=B())&&(i._textSuffixContainer=o.first),j(o=B())&&(i._floatingLabel=o.first),j(o=B())&&(i._notchedOutline=o.first),j(o=B())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&H("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Te([{provide:ba,useExisting:t},{provide:FC,useExisting:t}])],ngContentSelectors:VN,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(Me(LN),yt(0,HN,1,1,"ng-template",null,0,ep),y(2,"div",6,1),de("click",function(s){return i._control.onContainerClick(s)}),ge(4,UN,1,0,"div",7),y(5,"div",8),ge(6,WN,2,2,"div",9),ge(7,GN,3,0,"div",10),ge(8,qN,3,0,"div",11),y(9,"div",12),ge(10,YN,1,1,null,13),W(11),w(),ge(12,QN,3,0,"div",14),ge(13,KN,3,0,"div",15),w(),ge(14,XN,1,0,"div",16),w(),y(15,"div",17),ge(16,JN,2,0,"div",18)(17,tO,5,1,"div",19),w()),r&2){let o;I(2),H("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),I(2),ve(!i._hasOutline()&&!i._control.disabled?4:-1),I(2),ve(i._hasOutline()?6:-1),I(),ve(i._hasIconPrefix?7:-1),I(),ve(i._hasTextPrefix?8:-1),I(2),ve(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),I(2),ve(i._hasTextSuffix?12:-1),I(),ve(i._hasIconSuffix?13:-1),I(),ve(i._hasOutline()?-1:14),I(),H("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();I(),ve((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[TC,kC,pp,RC,Zm],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var ya=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[pw,qd,Ze]})}return t})();var dO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),uO={passive:!0},PC=(()=>{class t{_platform=u(ue);_ngZone=u(S);_renderer=u(Ue).createRenderer(null,null);_styleLoader=u(pt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ke;this._styleLoader.load(dO);let r=_t(e),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new D,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(s)?(r.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(s)&&(r.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",a,uO)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(e){let r=_t(e),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((e,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var LC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var VC=new v("MAT_INPUT_VALUE_ACCESSOR");var jC=(()=>{class t{isErrorState(e,r){return!!(e&&e.invalid&&(e.touched||r&&r.submitted))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zd=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,r,i,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,r=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=r?.isErrorState(i,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var fO=["button","checkbox","file","hidden","image","radio","range","reset","submit"],hO=new v("MAT_INPUT_CONFIG"),BC=(()=>{class t{_elementRef=u(k);_platform=u(ue);ngControl=u(_i,{optional:!0,self:!0});_autofillMonitor=u(PC);_ngZone=u(S);_formField=u(ba,{optional:!0});_renderer=u(Se);_uid=u(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(hO,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Vt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Td.required)??!1}set required(e){this._required=Vt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&um().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Vt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>um().has(e));constructor(){let e=u(va,{optional:!0}),r=u(Gm,{optional:!0}),i=u(jC),o=u(VC,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?qn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Zd(i,this.ngControl,r,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&rn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=e,e?r.setAttribute("placeholder",e):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){fO.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,r=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute("aria-describedby",e.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let r=e.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&de("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(Wt("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),Ie("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),H("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",re]},exportAs:["matInput"],features:[Te([{provide:Ym,useExisting:t}]),We]})}return t})(),HC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[ya,ya,LC,Ze]})}return t})();var UC=(()=>{class t{_animationsDisabled=Ye();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(r,i){r&2&&H("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var mO=["text"],gO=[[["mat-icon"]],"*"],vO=["mat-icon","*"];function bO(t,n){if(t&1&&le(0,"mat-pseudo-checkbox",1),t&2){let e=ce();J("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function yO(t,n){if(t&1&&le(0,"mat-pseudo-checkbox",3),t&2){let e=ce();J("disabled",e.disabled)}}function _O(t,n){if(t&1&&(y(0,"span",4),A(1),w()),t&2){let e=ce();I(),Gt("(",e.group.label,")")}}var Qm=new v("MAT_OPTION_PARENT_COMPONENT"),Km=new v("MatOptgroup");var _a=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},So=(()=>{class t{_element=u(k);_changeDetectorRef=u(Ve);_parent=u(Qm,{optional:!0});group=u(Km,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=F(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new O;_text;_stateChanges=new D;constructor(){let e=u(pt);e.load(Co),e.load(sd),this._signalDisableRipple=!!this._parent&&qn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,r){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(r)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Yt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new _a(this,e))}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-option"]],viewQuery:function(r,i){if(r&1&&ze(mO,7),r&2){let o;j(o=B())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(r,i){r&1&&de("click",function(){return i._selectViaInteraction()})("keydown",function(s){return i._handleKeydown(s)}),r&2&&(Wt("id",i.id),Ie("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),H("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",re]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:vO,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(r,i){r&1&&(Me(gO),ge(0,bO,1,2,"mat-pseudo-checkbox",1),W(1),y(2,"span",2,0),W(4,1),w(),ge(5,yO,1,1,"mat-pseudo-checkbox",3),ge(6,_O,2,1,"span",4),le(7,"div",5)),r&2&&(ve(i.multiple?0:-1),I(5),ve(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),I(),ve(i.group&&i.group._inert?6:-1),I(),J("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[UC,aa],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function zC(t,n,e){if(e.length){let r=n.toArray(),i=e.toArray(),o=0;for(let s=0;s<t+1;s++)r[s].group&&r[s].group===i[o]&&o++;return o}return 0}function $C(t,n,e,r){return t<e?t:t+n>e+r?Math.max(0,t-r+n):e}var WC=hd();function XC(t){return new Yd(t.get(bn),t.get(Y))}var Yd=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=je(-this._previousScrollPosition.left),n.style.top=je(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,r=n.style,i=e.style,o=r.scrollBehavior||"",s=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),WC&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),WC&&(r.scrollBehavior=o,i.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,r=this._viewportRuler.getViewportSize();return e.scrollHeight>r.height||e.scrollWidth>r.width}};function JC(t,n){return new Qd(t.get(Eo),t.get(S),t.get(bn),n)}var Qd=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,r,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ae(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Da=class{enable(){}disable(){}attach(){}};function Xm(t,n){return n.some(e=>{let r=t.bottom<e.top,i=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return r||i||o||s})}function GC(t,n){return n.some(e=>{let r=t.top<e.top,i=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return r||i||o||s})}function nu(t,n){return new Kd(t.get(Eo),t.get(bn),t.get(S),n)}var Kd=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,r,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Xm(e,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},eE=(()=>{class t{_injector=u(te);constructor(){}noop=()=>new Da;close=e=>JC(this._injector,e);block=()=>XC(this._injector);reposition=e=>nu(this._injector,e);static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mo=class{positionStrategy;scrollStrategy=new Da;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let r of e)n[r]!==void 0&&(this[r]=n[r])}}};var Xd=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var tE=(()=>{class t{_attachedOverlays=[];_document=u(Y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let r=this._attachedOverlays.indexOf(e);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,r,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nE=(()=>{class t extends tE{_ngZone=u(S);_renderer=u(Ue).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rE=(()=>{class t extends tE{_platform=u(ue);_ngZone=u(S);_renderer=u(Ue).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ht(e)};_clickListener=e=>{let r=ht(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(qC(a.overlayElement,r)||qC(a.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qC(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===t)return!0;r=e&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var iE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),oE=(()=>{class t{_platform=u(ue);_containerElement;_document=u(Y);_styleLoader=u(pt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||dm()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(e),dm()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(iE)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jm=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,r,i){this._renderer=e,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function eg(t){return t&&t.nodeType===1}var Jd=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(n,e,r,i,o,s,a,l,c,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=h,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=qe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=g(g({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(g({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=je(this._config.width),n.height=je(this._config.height),n.minWidth=je(this._config.minWidth),n.minHeight=je(this._config.minHeight),n.maxWidth=je(this._config.maxWidth),n.maxHeight=je(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;eg(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Jm(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,r){let i=Jn(e||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=qe(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},ZC="cdk-overlay-connected-position-bounding-box",DO=/([A-Za-z%]+)$/;function ru(t,n){return new eu(n,t.get(bn),t.get(Y),t.get(ue),t.get(oE))}var eu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,r,i,o){this._viewportRuler=e,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(ZC),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,i,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,r,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Di(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ZC),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof k?this._origin.nativeElement:eg(this._origin)?this._origin:null}_getOriginPoint(n,e,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;i=r.originX=="start"?s:a}e.left<0&&(i-=e.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(n,e,r){let i;r.overlayX=="center"?i=-e.width/2:r.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return r.overlayY=="center"?o=-e.height/2:o=r.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,e,r,i){let o=QC(e),{x:s,y:a}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-r.width,h=0-a,p=a+o.height-r.height,m=this._subtractOverflows(o.width,d,f),_=this._subtractOverflows(o.height,h,p),E=m*_;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:_===o.height,fitsInViewportHorizontally:m==o.width}}_canFitWithFlexibleDimensions(n,e,r){if(this._hasFlexibleDimensions){let i=r.bottom-e.y,o=r.right-e.x,s=YC(this._overlayRef.getConfig().minHeight),a=YC(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=i,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=QC(e),o=this._viewportRect,s=Math.max(n.x+i.width-o.width,0),a=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,f=0;return i.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!wO(this._lastScrollVisibility,r)){let i=new Xd(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,e){let r=this._viewportRect,i=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=r.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-a+this._getViewportMarginTop();else{let p=Math.min(r.bottom-n.y+r.top,n.y),m=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>m&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-m/2)}let l=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,c=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,d,f,h;if(c)h=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(r.right-n.x+r.left,n.x),m=this._lastBoundingBoxSize.width;d=p*2,f=n.x-p,d>m&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-m/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let r=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;i.width=je(r.width),i.height=je(r.height),i.top=je(r.top)||"auto",i.bottom=je(r.bottom)||"auto",i.left=je(r.left)||"auto",i.right=je(r.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=je(o)),s&&(i.maxWidth=je(s))}this._lastBoundingBoxSize=r,Di(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Di(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Di(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Di(r,this._getExactOverlayY(e,n,d)),Di(r,this._getExactOverlayX(e,n,d))}else r.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),r.transform=a.trim(),s.maxHeight&&(i?r.maxHeight=je(s.maxHeight):o&&(r.maxHeight="")),s.maxWidth&&(i?r.maxWidth=je(s.maxWidth):o&&(r.maxWidth="")),Di(this._pane.style,r)}_getExactOverlayY(n,e,r){let i={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;i.bottom=`${s-(o.y+this._overlayRect.height)}px`}else i.top=je(o.y);return i}_getExactOverlayX(n,e,r){let i={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(o.x+this._overlayRect.width)}px`}else i.left=je(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:GC(n,r),isOriginOutsideView:Xm(n,r),isOverlayClipped:GC(e,r),isOverlayOutsideView:Xm(e,r)}}_subtractOverflows(n,...e){return e.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Jn(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof k)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+e,height:r,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let r=e.getBoundingClientRect();return n&&(e.style.display=""),r}};function Di(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function YC(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(DO);return!e||e==="px"?parseFloat(n):null}return t||null}function QC(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function wO(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var KC="cdk-global-overlay-wrapper";function sE(t){return new tu}var tu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(KC),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:s,maxHeight:a}=r,l=(i==="100%"||i==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",p="",m="",_="";l?_="flex-start":d==="center"?(_="center",h?m=f:p=f):h?d==="left"||d==="end"?(_="flex-end",p=f):(d==="right"||d==="start")&&(_="flex-start",m=f):d==="left"||d==="start"?(_="flex-start",p=f):(d==="right"||d==="end")&&(_="flex-end",m=f),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":m,e.justifyContent=_,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,r=e.style;e.classList.remove(KC),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},aE=(()=>{class t{_injector=u(te);constructor(){}global(){return sE()}flexibleConnectedTo(e){return ru(this._injector,e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lE=new v("OVERLAY_DEFAULT_CONFIG");function iu(t,n){t.get(pt).load(iE);let e=t.get(oE),r=t.get(Y),i=t.get(mt),o=t.get($t),s=t.get(Ct),a=t.get(Se,null,{optional:!0})||t.get(Ue).createRenderer(null,null),l=new Mo(n),c=t.get(lE,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in r.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return eg(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new Jd(new Ed(d,o,t),f,d,l,t.get(S),t.get(nE),r,t.get(vr),t.get(rE),n?.disableAnimations??t.get(vs,null,{optional:!0})==="NoopAnimations",t.get(me),a)}var cE=(()=>{class t{scrollStrategies=u(eE);_positionBuilder=u(aE);_injector=u(te);constructor(){}create(e){return iu(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tg=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({providers:[cE],imports:[Ze,Uw,ym,ym]})}return t})();var dE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ze]})}return t})();var ng=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Rw,dE,So,Ze]})}return t})();var CO=["panel"],EO=["*"];function xO(t,n){if(t&1&&(he(0,"div",1,0),W(2),be()),t&2){let e=n.id,r=ce();hn(r._classList),H("mat-mdc-autocomplete-visible",r.showPanel)("mat-mdc-autocomplete-hidden",!r.showPanel)("mat-autocomplete-panel-animations-enabled",!r._animationsDisabled)("mat-primary",r._color==="primary")("mat-accent",r._color==="accent")("mat-warn",r._color==="warn"),Wt("id",r.id),Ie("aria-label",r.ariaLabel||null)("aria-labelledby",r._getPanelAriaLabelledby(e))}}var rg=class{source;option;constructor(n,e){this.source=n,this.option=e}},uE=new v("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),fE=(()=>{class t{_changeDetectorRef=u(Ve);_elementRef=u(k);_defaults=u(uE);_animationsDisabled=Ye();_activeOptionChanges=se.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new O;opened=new O;closed=new O;optionActivated=new O;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(mt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(ue);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ra(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let r=new rg(this,e);this.optionSelected.emit(r)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let r=e?e+" ":"";return this.ariaLabelledby?r+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(r,i,o){if(r&1&&wt(o,So,5)(o,Km,5),r&2){let s;j(s=B())&&(i.options=s),j(s=B())&&(i.optionGroups=s)}},viewQuery:function(r,i){if(r&1&&ze(dt,7)(CO,5),r&2){let o;j(o=B())&&(i.template=o.first),j(o=B())&&(i.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",re],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",re],requireSelection:[2,"requireSelection","requireSelection",re],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",re],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",re]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Te([{provide:Qm,useExisting:t}])],ngContentSelectors:EO,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(r,i){r&1&&(Me(),Xi(0,xO,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var IO={provide:Ud,useExisting:jt(()=>ig),multi:!0};var SO=new v("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(te);return()=>nu(t)}}),ig=(()=>{class t{_environmentInjector=u(me);_element=u(k);_injector=u(te);_viewContainerRef=u(it);_zone=u(S);_changeDetectorRef=u(Ve);_dir=u(Ct,{optional:!0});_formField=u(ba,{optional:!0,host:!0});_viewportRuler=u(bn);_scrollStrategy=u(SO);_renderer=u(Se);_animationsDisabled=Ye();_defaults=u(uE,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new D;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=se.EMPTY;_breakpointObserver=u(na);_handsetLandscapeSubscription=se.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new D;_overlayPanelClass=Jn(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ud(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return xt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ae(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ae(()=>this._overlayAttached)):U()).pipe(q(e=>e instanceof _a?e:null))}optionSelections=Lr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(nt(e),He(()=>xt(...e.map(r=>r.onSelectionChange)))):this._initialized.pipe(He(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new L(e=>{let r=o=>{let s=ht(o),a=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&s!==this._element.nativeElement&&!this._hasFocus()&&(!a||!a.contains(s))&&(!l||!l.contains(s))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(s)&&e.next(o)},i=[this._renderer.listen("document","click",r),this._renderer.listen("document","auxclick",r),this._renderer.listen("document","touchend",r)];return()=>{i.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let r=e,i=r.keyCode,o=Yt(r);if(i===27&&!o&&r.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),r.preventDefault();else if(this.autocomplete){let s=this.autocomplete._keyManager.activeItem,a=i===38||i===40;i===9||a&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(r):a&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(a||this.autocomplete._keyManager.activeItem!==s)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let r=e.target,i=r.value;if(r.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(s=>s.selected);if(o){let s=this._getDisplayValue(o.value);i!==s&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return nm()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new L(i=>{qe(()=>{i.next()},{injector:this._environmentInjector})}),r=this.autocomplete.options?.changes.pipe(at(()=>this._positionStrategy.reapplyLastPosition()),Nu(0))??U();return xt(e,r).pipe(He(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Xe(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let r=this.autocomplete;return r&&r.displayWith?r.displayWith(e):e}_assignOptionValue(e){let r=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(r??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let r=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),r._emitSelectEvent(i),this._element.nativeElement.focus()):r.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,r){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(r)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let r=this.autocomplete.id;cm(this._trackedModal,"aria-owns",r)}}_attachOverlay(e){if(!this.autocomplete)return;let r=this._overlayRef;r?(this._positionStrategy.setOrigin(this._getConnectedElement()),r.updateSize({width:this._getPanelWidth()})):(this._portal=new er(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),r=iu(this._injector,this._getOverlayConfig()),this._overlayRef=r,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&r&&r.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(ww.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),r&&!r.hasAttached()&&(r.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Yt(e)||e.keyCode===38&&Yt(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Mo({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ru(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let r=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],s;this.position==="above"?s=o:this.position==="below"?s=r:s=[...r,...o],e.withPositions(s)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let r=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){r=i;break}e._keyManager.setActiveItem(r)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let r=this.autocomplete,i=zC(e,r.options,r.optionGroups);if(e===0&&i===1)r._setScrollTop(0);else if(r.panel){let o=r.options.toArray()[e];if(o){let s=o._getHostElement(),a=$C(s.offsetTop,s.offsetHeight,r._getScrollTop(),r.panel.nativeElement.offsetHeight);r._setScrollTop(a)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let r=this.autocomplete.id;this._trackedModal&&ud(this._trackedModal,"aria-owns",r),cm(e,"aria-owns",r),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ud(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(r,i){r&1&&de("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(s){return i._handleInput(s)})("keydown",function(s){return i._handleKeydown(s)})("click",function(){return i._handleClick()}),r&2&&Ie("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",re]},exportAs:["matAutocompleteTrigger"],features:[Te([IO]),We]})}return t})(),hE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[tg,ng,la,ng,Ze]})}return t})();var TO=t=>({smooth:t}),ou=class t{unit=Ji.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},decls:6,vars:7,consts:[[1,"unitPortraitSprite",3,"src"],[1,"unitNameplateContainer"],[1,"unitNameplate"]],template:function(e,r){e&1&&(ut(0,"img",0),he(1,"div",1)(2,"div"),A(3),be(),he(4,"div",2),A(5),be()()),e&2&&(hn(mn(5,TO,r.unit().sprite.portraitURL)),Wt("src",r.unit().sprite.portraitURL?r.unit().sprite.portraitURL:r.unit().sprite.spriteURL,Qi),I(3),pn(r.unit().player),I(2),pn(r.unit().name))},styles:['img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:275px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitNameplate[_ngcontent-%COMP%]{display:flex;padding:24px 0 20px 24px;border-radius:8px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,linear-gradient(to right,var(--mat-sys-secondary-container),transparent 70%);font-family:macExtMinecraft;font-size:var(--mat-sys-body-large-line-height);line-height:var(--mat-sys-body-large-line-height)}']})};var AO=["unitAutocompleteInput"],RO=(t,n)=>n.name;function kO(t,n){if(t&1&&(y(0,"mat-option",5)(1,"div",7),le(2,"img",8),y(3,"div"),A(4),w()()()),t&2){let e=n.$implicit;J("value",e),I(2),J("src",e.sprite.spriteURL,Qi),I(2),pn(e.name)}}function NO(t,n){if(t&1&&le(0,"unit-sidenav-display",6),t&2){let e=ce();J("unit",e.selectedUnit.value)}}var su=class t{constructor(n){this.dataService=n;this.dataService=u(Fn),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new $m(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,r)=>this._sortUnits(e,r))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)($(Fn))};static \u0275cmp=x({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,r){if(e&1&&ze(AO,5),e&2){let i;j(i=B())&&(r.unitAutocompleteInput=i.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,r){if(e&1&&(y(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),de("focus",function(){return r.filterUnits()})("input",function(){return r.filterUnits()}),w(),y(5,"mat-autocomplete",4,1),Tn(7,kO,5,3,"mat-option",5,RO),w()()(),ge(9,NO,1,1,"unit-sidenav-display",6),w()),e&2){let i=fn(6);I(3),J("formControl",r.selectedUnit)("matAutocomplete",i),I(2),J("displayWith",r.formatAutocompleteDisplayValue),I(2),An(r.filteredUnits),I(2),ve(r.selectedUnit.value?9:-1)}},dependencies:[CC,_C,zd,hC,pC,va,ya,qd,HC,BC,hE,fE,So,ig,EC,Wm,ou],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var au=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,r){e&1&&(he(0,"p"),A(1,"map-tiles-view works!"),be())},encapsulation:2})};function OO(t,n){t&1&&A(0," U ")}function FO(t,n){t&1&&A(0," T ")}function PO(t,n){t&1&&A(0," I ")}function LO(t,n){t&1&&A(0," L ")}function VO(t,n){t&1&&A(0," DR ")}function jO(t,n){if(t&1&&(y(0,"mat-tab",6),A(1),w()),t&2){let e=n.$implicit;J("label",e.title),I(),Gt(" ",e.title," ")}}var lu=class t{constructor(n,e,r,i){this.route=n;this.breakpointService=e;this.themeService=r;this.teamDataService=i;this.route=u(Lt),this.breakpointService=u(Nn),this.themeService=u(On),this.teamDataService=u(Fn);var o=this.route.snapshot.paramMap.get("teamName")??"";this.teamDataService.loadDataForTeam(o)}static \u0275fac=function(e){return new(e||t)($(Lt),$(Nn),$(On),$(Fn))};static \u0275cmp=x({type:t,selectors:[["map-view"]],decls:25,vars:1,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],["mat-stretch-tabs","false","mat-align-tabs","start",1,"segmentTabs"],[3,"label"]],template:function(e,r){if(e&1){let i=Zn();y(0,"button",1),de("click",function(){Tt(i);let s=fn(4);return At(s.toggle())}),A(1,">"),w(),y(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),yt(7,OO,1,0,"ng-template",4),le(8,"map-units-sidenav"),w(),y(9,"mat-tab"),yt(10,FO,1,0,"ng-template",4),le(11,"map-tiles-sidenav"),w(),y(12,"mat-tab"),yt(13,PO,1,0,"ng-template",4),A(14," Image download "),w(),y(15,"mat-tab"),yt(16,LO,1,0,"ng-template",4),le(17,"map-links-sidenav"),w(),y(18,"mat-tab"),yt(19,VO,1,0,"ng-template",4),le(20,"map-dice-roller-sidenav"),w()()(),y(21,"mat-sidenav-content")(22,"mat-tab-group",5),Tn(23,jO,2,2,"mat-tab",6,Cs),w()()()}if(e&2){let i;I(3),J("mode",r.breakpointService.isScreenSmallWidth()?"over":"side"),I(20),An((i=r.teamDataService.mapData().map)==null?null:i.segments)}},dependencies:[Cm,Bw,_d,Fm,Yw,Om,Pw,Sd,su,au,Id],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}']})};var cu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,r){e&1&&(he(0,"p"),A(1,"map-analysis-view works!"),be())},encapsulation:2})};var du=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,r){e&1&&(he(0,"p"),A(1,"convoy-view works!"),be())},encapsulation:2})};var uu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,r){e&1&&(he(0,"p"),A(1,"shop-view works!"),be())},encapsulation:2})};var pE=[{path:"",component:bd,title:"Reddit Emblem Maps"},{path:":teamName/map",component:lu,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:cu,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:du,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:uu,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var mE={providers:[jf(),Jp(pE)]};var fu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,r){e&1&&le(0,"router-outlet")},dependencies:[Ys],encapsulation:2})};Cp(fu,mE).catch(t=>console.error(t));
