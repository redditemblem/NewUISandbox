var jI=Object.defineProperty,UI=Object.defineProperties;var HI=Object.getOwnPropertyDescriptors;var Hb=Object.getOwnPropertySymbols;var zI=Object.prototype.hasOwnProperty,$I=Object.prototype.propertyIsEnumerable;var zb=(t,n,e)=>n in t?jI(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,D=(t,n)=>{for(var e in n||={})zI.call(n,e)&&zb(t,e,n[e]);if(Hb)for(var e of Hb(n))$I.call(n,e)&&zb(t,e,n[e]);return t},te=(t,n)=>UI(t,HI(n));var kt=null,kc=!1,rm=1,WI=null,$e=Symbol("SIGNAL");function Q(t){let n=kt;return kt=t,n}function Tc(){return kt}var ti={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ri(t){if(kc)throw new Error("");if(kt===null)return;kt.consumerOnSignalRead(t);let n=kt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=kt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:kt.producers,e!==void 0&&e.producer===t)){kt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===kt&&(!i||GI(r,kt)))return;let o=lo(kt),a={producer:t,consumer:kt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};kt.producersTail=a,n!==void 0?n.nextProducer=a:kt.producers=a,o&&Zb(t,a)}function $b(){rm++}function cr(t){if(!(lo(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===rm)){if(!t.producerMustRecompute(t)&&!lr(t)){co(t);return}t.producerRecomputeValue(t),co(t)}}function om(t){if(t.consumers===void 0)return;let n=kc;kc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||Wb(i)}}finally{kc=n}}function am(){return kt?.consumerAllowSignalWrites!==!1}function Wb(t){t.dirty=!0,om(t),t.consumerMarkedDirty?.(t)}function co(t){t.dirty=!1,t.lastCleanEpoch=rm}function Fn(t){return t&&Gb(t),Q(t)}function Gb(t){t.producersTail=void 0,t.recomputing=!0}function ni(t,n){Q(n),t&&qb(t)}function qb(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(lo(t))do e=sm(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function lr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(cr(e),i!==e.version))return!0}return!1}function ii(t){if(lo(t)){let n=t.producers;for(;n!==void 0;)n=sm(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Zb(t,n){let e=t.consumersTail,i=lo(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Zb(r.producer,r)}function sm(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!lo(n)){let o=n.producers;for(;o!==void 0;)o=sm(o)}return e}function lo(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ra(t){WI?.(t)}function GI(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Aa(t,n){return Object.is(t,n)}function Oa(t,n){let e=Object.create(qI);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(cr(e),Ri(e),e.value===Pn)throw e.error;return e.value};return i[$e]=e,Ra(e),i}var ar=Symbol("UNSET"),sr=Symbol("COMPUTING"),Pn=Symbol("ERRORED"),qI=te(D({},ti),{value:ar,dirty:!0,error:null,equal:Aa,kind:"computed",producerMustRecompute(t){return t.value===ar||t.value===sr},producerRecomputeValue(t){if(t.value===sr)throw new Error("");let n=t.value;t.value=sr;let e=Fn(t),i,r=!1;try{i=t.computation(),Q(null),r=n!==ar&&n!==Pn&&i!==Pn&&t.equal(n,i)}catch(o){i=Pn,t.error=o}finally{ni(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function ZI(){throw new Error}var Yb=ZI;function Qb(t){Yb(t)}function cm(t){Yb=t}var YI=null;function lm(t,n){let e=Object.create(Na);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Kb(e);return i[$e]=e,Ra(e),[i,a=>dr(e,a),a=>Rc(e,a)]}function Kb(t){return Ri(t),t.value}function dr(t,n){am()||Qb(t),t.equal(t.value,n)||(t.value=n,QI(t))}function Rc(t,n){am()||Qb(t),dr(t,n(t.value))}var Na=te(D({},ti),{equal:Aa,value:void 0,kind:"signal"});function QI(t){t.version++,$b(),om(t),YI?.(t)}var dm=te(D({},ti),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function um(t){if(t.dirty=!1,t.version>0&&!lr(t))return;t.version++;let n=Fn(t);try{t.cleanup(),t.fn()}finally{ni(t,n)}}function me(t){return typeof t=="function"}function uo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Ac=uo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function ur(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ge=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(me(i))try{i()}catch(o){n=o instanceof Ac?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Xb(o)}catch(a){n=n??[],a instanceof Ac?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Ac(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Xb(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&ur(e,n)}remove(n){let{_finalizers:e}=this;e&&ur(e,n),n instanceof t&&n._removeParent(this)}};ge.EMPTY=(()=>{let t=new ge;return t.closed=!0,t})();var fm=ge.EMPTY;function Oc(t){return t instanceof ge||t&&"closed"in t&&me(t.remove)&&me(t.add)&&me(t.unsubscribe)}function Xb(t){me(t)?t():t.unsubscribe()}var gn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var fo={setTimeout(t,n,...e){let{delegate:i}=fo;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=fo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Nc(t){fo.setTimeout(()=>{let{onUnhandledError:n}=gn;if(n)n(t);else throw t})}function fr(){}var Jb=mm("C",void 0,void 0);function e_(t){return mm("E",void 0,t)}function t_(t){return mm("N",t,void 0)}function mm(t,n,e){return{kind:t,value:n,error:e}}var mr=null;function mo(t){if(gn.useDeprecatedSynchronousErrorHandling){let n=!mr;if(n&&(mr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=mr;if(mr=null,e)throw i}}else t()}function n_(t){gn.useDeprecatedSynchronousErrorHandling&&mr&&(mr.errorThrown=!0,mr.error=t)}var hr=class extends ge{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Oc(n)&&n.add(this)):this.destination=JI}static create(n,e,i){return new ri(n,e,i)}next(n){this.isStopped?pm(t_(n),this):this._next(n)}error(n){this.isStopped?pm(e_(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?pm(Jb,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},KI=Function.prototype.bind;function hm(t,n){return KI.call(t,n)}var gm=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Pc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Pc(i)}else Pc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Pc(e)}}},ri=class extends hr{constructor(n,e,i){super();let r;if(me(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&gn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&hm(n.next,o),error:n.error&&hm(n.error,o),complete:n.complete&&hm(n.complete,o)}):r=n}this.destination=new gm(r)}};function Pc(t){gn.useDeprecatedSynchronousErrorHandling?n_(t):Nc(t)}function XI(t){throw t}function pm(t,n){let{onStoppedNotification:e}=gn;e&&fo.setTimeout(()=>e(t,n))}var JI={closed:!0,next:fr,error:XI,complete:fr};var ho=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Qt(t){return t}function vm(...t){return bm(t)}function bm(t){return t.length===0?Qt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ne=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=tS(e)?e:new ri(e,i,r);return mo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=i_(i),new i((r,o)=>{let a=new ri({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[ho](){return this}pipe(...e){return bm(e)(this)}toPromise(e){return e=i_(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function i_(t){var n;return(n=t??gn.Promise)!==null&&n!==void 0?n:Promise}function eS(t){return t&&me(t.next)&&me(t.error)&&me(t.complete)}function tS(t){return t&&t instanceof hr||eS(t)&&Oc(t)}function nS(t){return me(t?.lift)}function ve(t){return n=>{if(nS(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function _e(t,n,e,i,r){return new _m(t,n,e,i,r)}var _m=class extends hr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var r_=uo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var R=(()=>{class t extends ne{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Fc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new r_}next(e){mo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){mo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){mo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?fm:(this.currentObservers=null,o.push(e),new ge(()=>{this.currentObservers=null,ur(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ne;return e.source=this,e}}return t.create=(n,e)=>new Fc(n,e),t})(),Fc=class extends R{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:fm}};var st=class extends R{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Pa={now(){return(Pa.delegate||Date).now()},delegate:void 0};var Lc=class extends R{constructor(n=1/0,e=1/0,i=Pa){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var Bc=class extends ge{constructor(n,e){super()}schedule(n,e=0){return this}};var Fa={setInterval(t,n,...e){let{delegate:i}=Fa;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Fa;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Vc=class extends Bc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Fa.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Fa.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,ur(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var po=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};po.now=Pa.now;var jc=class extends po{constructor(n,e=po.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var pr=new jc(Vc),o_=pr;var Ke=new ne(t=>t.complete());function Uc(t){return t&&me(t.schedule)}function ym(t){return t[t.length-1]}function Hc(t){return me(ym(t))?t.pop():void 0}function Ln(t){return Uc(ym(t))?t.pop():void 0}function a_(t,n){return typeof ym(t)=="number"?t.pop():n}function c_(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{l(i.next(u))}catch(f){a(f)}}function c(u){try{l(i.throw(u))}catch(f){a(f)}}function l(u){u.done?o(u.value):r(u.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function s_(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function gr(t){return this instanceof gr?(this.v=t,this):new gr(t)}function l_(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(w){return Promise.resolve(w).then(v,f)}}function s(v,w){i[v]&&(r[v]=function(A){return new Promise(function(N,z){o.push([v,A,N,z])>1||c(v,A)})},w&&(r[v]=w(r[v])))}function c(v,w){try{l(i[v](w))}catch(A){g(o[0][3],A)}}function l(v){v.value instanceof gr?Promise.resolve(v.value.v).then(u,f):g(o[0][2],v)}function u(v){c("next",v)}function f(v){c("throw",v)}function g(v,w){v(w),o.shift(),o.length&&c(o[0][0],o[0][1])}}function d_(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof s_=="function"?s_(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var zc=t=>t&&typeof t.length=="number"&&typeof t!="function";function $c(t){return me(t?.then)}function Wc(t){return me(t[ho])}function Gc(t){return Symbol.asyncIterator&&me(t?.[Symbol.asyncIterator])}function qc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function iS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Zc=iS();function Yc(t){return me(t?.[Zc])}function Qc(t){return l_(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield gr(e.read());if(r)return yield gr(void 0);yield yield gr(i)}}finally{e.releaseLock()}})}function Kc(t){return me(t?.getReader)}function Le(t){if(t instanceof ne)return t;if(t!=null){if(Wc(t))return rS(t);if(zc(t))return oS(t);if($c(t))return aS(t);if(Gc(t))return u_(t);if(Yc(t))return sS(t);if(Kc(t))return cS(t)}throw qc(t)}function rS(t){return new ne(n=>{let e=t[ho]();if(me(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function oS(t){return new ne(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function aS(t){return new ne(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Nc)})}function sS(t){return new ne(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function u_(t){return new ne(n=>{lS(t,n).catch(e=>n.error(e))})}function cS(t){return u_(Qc(t))}function lS(t,n){var e,i,r,o;return c_(this,void 0,void 0,function*(){try{for(e=d_(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function qt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Xc(t,n=0){return ve((e,i)=>{e.subscribe(_e(i,r=>qt(i,t,()=>i.next(r),n),()=>qt(i,t,()=>i.complete(),n),r=>qt(i,t,()=>i.error(r),n)))})}function Jc(t,n=0){return ve((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function f_(t,n){return Le(t).pipe(Jc(n),Xc(n))}function m_(t,n){return Le(t).pipe(Jc(n),Xc(n))}function h_(t,n){return new ne(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function p_(t,n){return new ne(e=>{let i;return qt(e,n,()=>{i=t[Zc](),qt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>me(i?.return)&&i.return()})}function el(t,n){if(!t)throw new Error("Iterable cannot be null");return new ne(e=>{qt(e,n,()=>{let i=t[Symbol.asyncIterator]();qt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function g_(t,n){return el(Qc(t),n)}function v_(t,n){if(t!=null){if(Wc(t))return f_(t,n);if(zc(t))return h_(t,n);if($c(t))return m_(t,n);if(Gc(t))return el(t,n);if(Yc(t))return p_(t,n);if(Kc(t))return g_(t,n)}throw qc(t)}function Ge(t,n){return n?v_(t,n):Le(t)}function Z(...t){let n=Ln(t);return Ge(t,n)}function La(t,n){let e=me(t)?t:()=>t,i=r=>r.error(e());return new ne(n?r=>n.schedule(i,0,r):i)}function Ba(t){return!!t&&(t instanceof ne||me(t.lift)&&me(t.subscribe))}var vr=uo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function b_(t){return t instanceof Date&&!isNaN(t)}function K(t,n){return ve((e,i)=>{let r=0;e.subscribe(_e(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:dS}=Array;function uS(t,n){return dS(n)?t(...n):t(n)}function tl(t){return K(n=>uS(t,n))}var{isArray:fS}=Array,{getPrototypeOf:mS,prototype:hS,keys:pS}=Object;function nl(t){if(t.length===1){let n=t[0];if(fS(n))return{args:n,keys:null};if(gS(n)){let e=pS(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function gS(t){return t&&typeof t=="object"&&mS(t)===hS}function il(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Va(...t){let n=Ln(t),e=Hc(t),{args:i,keys:r}=nl(t);if(i.length===0)return Ge([],n);let o=new ne(vS(i,n,r?a=>il(r,a):Qt));return e?o.pipe(tl(e)):o}function vS(t,n,e=Qt){return i=>{__(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)__(n,()=>{let l=Ge(t[c],n),u=!1;l.subscribe(_e(i,f=>{o[c]=f,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function __(t,n,e){t?qt(e,t,n):n()}function y_(t,n,e,i,r,o,a,s){let c=[],l=0,u=0,f=!1,g=()=>{f&&!c.length&&!l&&n.complete()},v=A=>l<i?w(A):c.push(A),w=A=>{o&&n.next(A),l++;let N=!1;Le(e(A,u++)).subscribe(_e(n,z=>{r?.(z),o?v(z):n.next(z)},()=>{N=!0},void 0,()=>{if(N)try{for(l--;c.length&&l<i;){let z=c.shift();a?qt(n,a,()=>w(z)):w(z)}g()}catch(z){n.error(z)}}))};return t.subscribe(_e(n,v,()=>{f=!0,g()})),()=>{s?.()}}function yt(t,n,e=1/0){return me(n)?yt((i,r)=>K((o,a)=>n(i,o,r,a))(Le(t(i,r))),e):(typeof n=="number"&&(e=n),ve((i,r)=>y_(i,r,t,e)))}function rl(t=1/0){return yt(Qt,t)}function C_(){return rl(1)}function Bn(...t){return C_()(Ge(t,Ln(t)))}function br(t){return new ne(n=>{Le(t()).subscribe(n)})}function ja(...t){let n=Hc(t),{args:e,keys:i}=nl(t),r=new ne(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let u=0;u<a;u++){let f=!1;Le(e[u]).subscribe(_e(o,g=>{f||(f=!0,l--),s[u]=g},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?il(i,s):s),o.complete())}))}});return n?r.pipe(tl(n)):r}function _r(t=0,n,e=o_){let i=-1;return n!=null&&(Uc(n)?e=n:i=n),new ne(r=>{let o=b_(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Ft(...t){let n=Ln(t),e=a_(t,1/0),i=t;return i.length?i.length===1?Le(i[0]):rl(e)(Ge(i,n)):Ke}function Ie(t,n){return ve((e,i)=>{let r=0;e.subscribe(_e(i,o=>t.call(n,o,r++)&&i.next(o)))})}function w_(t){return ve((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(_e(e,l=>{i=!0,r=l,o||Le(t(l)).subscribe(o=_e(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function ol(t,n=pr){return w_(()=>_r(t,n))}function yr(t){return ve((n,e)=>{let i=null,r=!1,o;i=n.subscribe(_e(e,void 0,void 0,a=>{o=Le(t(a,yr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function go(t,n){return me(n)?yt(t,n,1):yt(t,1)}function vn(t,n=pr){return ve((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,u=n.now();if(u<l){r=this.schedule(void 0,l-u),i.add(r);return}s()}e.subscribe(_e(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function x_(t){return ve((n,e)=>{let i=!1;n.subscribe(_e(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ct(t){return t<=0?()=>Ke:ve((n,e)=>{let i=0;n.subscribe(_e(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function D_(){return ve((t,n)=>{t.subscribe(_e(n,fr))})}function vo(t){return K(()=>t)}function Cm(t,n){return n?e=>Bn(n.pipe(ct(1),D_()),e.pipe(Cm(t))):yt((e,i)=>Le(t(e,i)).pipe(ct(1),vo(e)))}function wm(t,n=pr){let e=_r(t,n);return Cm(()=>e)}function al(t,n=Qt){return t=t??bS,ve((e,i)=>{let r,o=!0;e.subscribe(_e(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function bS(t,n){return t===n}function E_(t=_S){return ve((n,e)=>{let i=!1;n.subscribe(_e(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function _S(){return new vr}function Cr(t){return ve((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function oi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ie((r,o)=>t(r,o,i)):Qt,ct(1),e?x_(n):E_(()=>new vr))}function sl(t){return t<=0?()=>Ke:ve((n,e)=>{let i=[];n.subscribe(_e(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function cl(){return ve((t,n)=>{let e,i=!1;t.subscribe(_e(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Ua(t={}){let{connector:n=()=>new R,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,u=!1,f=!1,g=()=>{s?.unsubscribe(),s=void 0},v=()=>{g(),a=c=void 0,u=f=!1},w=()=>{let A=a;v(),A?.unsubscribe()};return ve((A,N)=>{l++,!f&&!u&&g();let z=c=c??n();N.add(()=>{l--,l===0&&!f&&!u&&(s=xm(w,r))}),z.subscribe(N),!a&&l>0&&(a=new ri({next:Re=>z.next(Re),error:Re=>{f=!0,g(),s=xm(v,e,Re),z.error(Re)},complete:()=>{u=!0,g(),s=xm(v,i),z.complete()}}),Le(A).subscribe(a))})(o)}}function xm(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new ri({next:()=>{i.unsubscribe(),t()}});return Le(n(...e)).subscribe(i)}function ll(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Ua({connector:()=>new Lc(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function wr(t){return Ie((n,e)=>t<=e)}function Ct(...t){let n=Ln(t);return ve((e,i)=>{(n?Bn(t,e,n):Bn(t,e)).subscribe(i)})}function lt(t,n){return ve((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(_e(i,c=>{r?.unsubscribe();let l=0,u=o++;Le(t(c,u)).subscribe(r=_e(i,f=>i.next(n?n(c,f,u,l++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Be(t){return ve((n,e)=>{Le(t).subscribe(_e(e,()=>e.complete(),fr)),!e.closed&&n.subscribe(e)})}function dt(t,n,e){let i=me(t)||n||e?{next:t,error:n,complete:e}:t;return i?ve((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(_e(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Qt}var Dm;function dl(){return Dm}function Vn(t){let n=Dm;return Dm=t,n}var I_=Symbol("NotFound");function bo(t){return t===I_||t?.name==="\u0275NotFound"}function Em(t,n,e){let i=Object.create(yS);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(cr(i),Ri(i),i.value===Pn)throw i.error;return i.value};return o[$e]=i,Ra(i),o}function S_(t,n){cr(t),dr(t,n),co(t)}function M_(t,n){if(cr(t),t.value===Pn)throw t.error;Rc(t,n),co(t)}var yS=te(D({},ti),{value:ar,dirty:!0,error:null,equal:Aa,kind:"linkedSignal",producerMustRecompute(t){return t.value===ar||t.value===sr},producerRecomputeValue(t){if(t.value===sr)throw new Error("");let n=t.value;t.value=sr;let e=Fn(t),i,r=!1;try{let o=t.source(),a=n!==ar&&n!==Pn,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,Q(null),r=a&&i!==Pn&&t.equal(n,i)}catch(o){i=Pn,t.error=o}finally{ni(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function k_(t){let n=Q(null);try{return t()}finally{Q(n)}}var vl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",k=class extends Error{code;constructor(n,e){super(si(n,e)),this.code=n}};function CS(t){return`NG0${Math.abs(t)}`}function si(t,n){return`${CS(t)}${n?": "+n:""}`}var Pi=globalThis;function Ne(t){for(let n in t)if(t[n]===Ne)return n;throw Error("")}function N_(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Za(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Za).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function bl(t,n){return t?n?`${t} ${n}`:t:n||""}var wS=Ne({__forward_ref__:Ne});function Vt(t){return t.__forward_ref__=Vt,t}function wt(t){return Bm(t)?t():t}function Bm(t){return typeof t=="function"&&t.hasOwnProperty(wS)&&t.__forward_ref__===Vt}function I(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function re(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ya(t){return xS(t,_l)}function Vm(t){return Ya(t)!==null}function xS(t,n){return t.hasOwnProperty(n)&&t[n]||null}function DS(t){let n=t?.[_l]??null;return n||null}function Sm(t){return t&&t.hasOwnProperty(fl)?t[fl]:null}var _l=Ne({\u0275prov:Ne}),fl=Ne({\u0275inj:Ne}),x=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=I({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function jm(t){return t&&!!t.\u0275providers}var Um=Ne({\u0275cmp:Ne}),Hm=Ne({\u0275dir:Ne}),zm=Ne({\u0275pipe:Ne}),$m=Ne({\u0275mod:Ne}),za=Ne({\u0275fac:Ne}),Sr=Ne({__NG_ELEMENT_ID__:Ne}),T_=Ne({__NG_ENV_ID__:Ne});function Wm(t){return yl(t,"@NgModule"),t[$m]||null}function ci(t){return yl(t,"@Component"),t[Um]||null}function Gm(t){return yl(t,"@Directive"),t[Hm]||null}function P_(t){return yl(t,"@Pipe"),t[zm]||null}function yl(t,n){if(t==null)throw new k(-919,!1)}function yo(t){return typeof t=="string"?t:t==null?"":String(t)}var F_=Ne({ngErrorCode:Ne}),ES=Ne({ngErrorMessage:Ne}),IS=Ne({ngTokenPath:Ne});function qm(t,n){return L_("",-200,n)}function Cl(t,n){throw new k(-201,!1)}function L_(t,n,e){let i=new k(n,t);return i[F_]=n,i[ES]=t,e&&(i[IS]=e),i}function SS(t){return t[F_]}var Mm;function B_(){return Mm}function Lt(t){let n=Mm;return Mm=t,n}function Zm(t,n,e){let i=Ya(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Cl(t,"")}var MS={},xr=MS,kS="__NG_DI_FLAG__",km=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Dr(e)||0;try{return this.injector.get(n,i&8?null:xr,i)}catch(r){if(bo(r))return r;throw r}}};function TS(t,n=0){let e=dl();if(e===void 0)throw new k(-203,!1);if(e===null)return Zm(t,void 0,n);{let i=RS(n),r=e.retrieve(t,i);if(bo(r)){if(i.optional)return null;throw r}return r}}function W(t,n=0){return(B_()||TS)(wt(t),n)}function d(t,n){return W(t,Dr(n))}function Dr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function RS(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Tm(t){let n=[];for(let e=0;e<t.length;e++){let i=wt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new k(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=AS(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(W(r,o))}else n.push(W(i))}return n}function AS(t){return t[kS]}function Ai(t,n){let e=t.hasOwnProperty(za);return e?t[za]:null}function V_(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function j_(t){return t.flat(Number.POSITIVE_INFINITY)}function wl(t,n){t.forEach(e=>Array.isArray(e)?wl(e,n):n(e))}function Ym(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Qa(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function U_(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function H_(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function xl(t,n,e){let i=Co(t,n);return i>=0?t[i|1]=e:(i=~i,H_(t,i,n,e)),i}function Dl(t,n){let e=Co(t,n);if(e>=0)return t[e|1]}function Co(t,n){return OS(t,n,1)}function OS(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Fi={},Tt=[],Li=new x(""),Qm=new x("",-1),Km=new x(""),$a=class{get(n,e=xr){if(e===xr){let r=L_("",-201);throw r.name="\u0275NotFound",r}return e}};function Bi(t){return{\u0275providers:t}}function z_(t){return Bi([{provide:Li,multi:!0,useValue:t}])}function $_(...t){return{\u0275providers:Xm(!0,t),\u0275fromNgModule:!0}}function Xm(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return wl(n,a=>{let s=a;ml(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&W_(r,o),e}function W_(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Jm(r,o=>{n(o,i)})}}function ml(t,n,e,i){if(t=wt(t),!t)return!1;let r=null,o=Sm(t),a=!o&&ci(t);if(!o&&!a){let c=t.ngModule;if(o=Sm(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)ml(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;wl(o.imports,u=>{ml(u,n,e,i)&&(l||=[],l.push(u))}),l!==void 0&&W_(l,n)}if(!s){let l=Ai(r)||(()=>new r);n({provide:r,useFactory:l,deps:Tt},r),n({provide:Km,useValue:r,multi:!0},r),n({provide:Li,useValue:()=>W(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;Jm(c,u=>{n(u,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Jm(t,n){for(let e of t)jm(e)&&(e=e.\u0275providers),Array.isArray(e)?Jm(e,n):n(e)}var NS=Ne({provide:String,useValue:Ne});function G_(t){return t!==null&&typeof t=="object"&&NS in t}function PS(t){return!!(t&&t.useExisting)}function FS(t){return!!(t&&t.useFactory)}function Er(t){return typeof t=="function"}function q_(t){return!!t.useClass}var Ka=new x(""),ul={},R_={},Im;function wo(){return Im===void 0&&(Im=new $a),Im}var Ae=class{},Ir=class extends Ae{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Am(n,a=>this.processProvider(a)),this.records.set(Qm,_o(void 0,this)),r.has("environment")&&this.records.set(Ae,_o(void 0,this));let o=this.records.get(Ka);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Km,Tt,{self:!0}))}retrieve(n,e){let i=Dr(e)||0;try{return this.get(n,xr,i)}catch(r){if(bo(r))return r;throw r}}destroy(){Ha(this),this._destroyed=!0;let n=Q(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Q(n)}}onDestroy(n){return Ha(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ha(this);let e=Vn(this),i=Lt(void 0),r;try{return n()}finally{Vn(e),Lt(i)}}get(n,e=xr,i){if(Ha(this),n.hasOwnProperty(T_))return n[T_](this);let r=Dr(i),o,a=Vn(this),s=Lt(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let u=US(n)&&Ya(n);u&&this.injectableDefInScope(u)?l=_o(Rm(n),ul):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?wo():this.parent;return e=r&8&&e===xr?null:e,c.get(n,e)}catch(c){let l=SS(c);throw l===-200||l===-201?new k(l,null):c}finally{Lt(s),Vn(a)}}resolveInjectorInitializers(){let n=Q(null),e=Vn(this),i=Lt(void 0),r;try{let o=this.get(Li,Tt,{self:!0});for(let a of o)a()}finally{Vn(e),Lt(i),Q(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=wt(n);let e=Er(n)?n:wt(n&&n.provide),i=BS(n);if(!Er(n)&&n.multi===!0){let r=this.records.get(e);r||(r=_o(void 0,ul,!0),r.factory=()=>Tm(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=Q(null);try{if(e.value===R_)throw qm("");return e.value===ul&&(e.value=R_,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&jS(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{Q(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=wt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Rm(t){let n=Ya(t),e=n!==null?n.factory:Ai(t);if(e!==null)return e;if(t instanceof x)throw new k(-204,!1);if(t instanceof Function)return LS(t);throw new k(-204,!1)}function LS(t){if(t.length>0)throw new k(-204,!1);let e=DS(t);return e!==null?()=>e.factory(t):()=>new t}function BS(t){if(G_(t))return _o(void 0,t.useValue);{let n=eh(t);return _o(n,ul)}}function eh(t,n,e){let i;if(Er(t)){let r=wt(t);return Ai(r)||Rm(r)}else if(G_(t))i=()=>wt(t.useValue);else if(FS(t))i=()=>t.useFactory(...Tm(t.deps||[]));else if(PS(t))i=(r,o)=>W(wt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=wt(t&&(t.useClass||t.provide));if(VS(t))i=()=>new r(...Tm(t.deps));else return Ai(r)||Rm(r)}return i}function Ha(t){if(t.destroyed)throw new k(-205,!1)}function _o(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function VS(t){return!!t.deps}function jS(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function US(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Am(t,n){for(let e of t)Array.isArray(e)?Am(e,n):e&&jm(e)?Am(e.\u0275providers,n):n(e)}function rt(t,n){let e;t instanceof Ir?(Ha(t),e=t):e=new km(t);let i,r=Vn(e),o=Lt(void 0);try{return n()}finally{Vn(r),Lt(o)}}function Z_(){return B_()!==void 0||dl()!=null}var bn=0,X=1,ce=2,mt=3,on=4,jt=5,Mr=6,xo=7,ot=8,li=9,_n=10,He=11,Do=12,th=13,kr=14,Ut=15,Vi=16,Tr=17,Un=18,di=19,nh=20,ai=21,El=22,Oi=23,Kt=24,Rr=25,ji=26,qe=27,Y_=1,ih=6,Ui=7,Xa=8,Ar=9,tt=10;function ui(t){return Array.isArray(t)&&typeof t[Y_]=="object"}function yn(t){return Array.isArray(t)&&t[Y_]===!0}function rh(t){return(t.flags&4)!==0}function Hn(t){return t.componentOffset>-1}function Ja(t){return(t.flags&1)===1}function zn(t){return!!t.template}function Eo(t){return(t[ce]&512)!==0}function Or(t){return(t[ce]&256)===256}var oh="svg",Q_="math";function an(t){for(;Array.isArray(t);)t=t[bn];return t}function ah(t,n){return an(n[t])}function sn(t,n){return an(n[t.index])}function Il(t,n){return t.data[n]}function Sl(t,n){return t[n]}function sh(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function cn(t,n){let e=n[t];return ui(e)?e:e[bn]}function K_(t){return(t[ce]&4)===4}function Ml(t){return(t[ce]&128)===128}function X_(t){return yn(t[mt])}function Xt(t,n){return n==null?null:t[n]}function ch(t){t[Tr]=0}function lh(t){t[ce]&1024||(t[ce]|=1024,Ml(t)&&Nr(t))}function J_(t,n){for(;t>0;)n=n[kr],t--;return n}function es(t){return!!(t[ce]&9216||t[Kt]?.dirty)}function kl(t){t[_n].changeDetectionScheduler?.notify(8),t[ce]&64&&(t[ce]|=1024),es(t)&&Nr(t)}function Nr(t){t[_n].changeDetectionScheduler?.notify(0);let n=Ni(t);for(;n!==null&&!(n[ce]&8192||(n[ce]|=8192,!Ml(n)));)n=Ni(n)}function dh(t,n){if(Or(t))throw new k(911,!1);t[ai]===null&&(t[ai]=[]),t[ai].push(n)}function ey(t,n){if(t[ai]===null)return;let e=t[ai].indexOf(n);e!==-1&&t[ai].splice(e,1)}function Ni(t){let n=t[mt];return yn(n)?n[mt]:n}function uh(t){return t[xo]??=[]}function fh(t){return t.cleanup??=[]}function ty(t,n,e,i){let r=uh(n);r.push(e),t.firstCreatePass&&fh(t).push(i,r.length-1)}var be={lFrame:my(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Om=!1;function ny(){return be.lFrame.elementDepthCount}function iy(){be.lFrame.elementDepthCount++}function mh(){be.lFrame.elementDepthCount--}function hh(){return be.bindingsEnabled}function ph(){return be.skipHydrationRootTNode!==null}function gh(t){return be.skipHydrationRootTNode===t}function vh(){be.skipHydrationRootTNode=null}function J(){return be.lFrame.lView}function We(){return be.lFrame.tView}function Ht(t){return be.lFrame.contextLView=t,t[ot]}function zt(t){return be.lFrame.contextLView=null,t}function xt(){let t=bh();for(;t!==null&&t.type===64;)t=t.parent;return t}function bh(){return be.lFrame.currentTNode}function ry(){let t=be.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Io(t,n){let e=be.lFrame;e.currentTNode=t,e.isParent=n}function _h(){return be.lFrame.isParent}function yh(){be.lFrame.isParent=!1}function oy(){return be.lFrame.contextLView}function Ch(){return Om}function Wa(t){let n=Om;return Om=t,n}function ts(){let t=be.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function ay(){return be.lFrame.bindingIndex}function sy(t){return be.lFrame.bindingIndex=t}function Hi(){return be.lFrame.bindingIndex++}function Tl(t){let n=be.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function cy(){return be.lFrame.inI18n}function ly(t,n){let e=be.lFrame;e.bindingIndex=e.bindingRootIndex=t,Rl(n)}function dy(){return be.lFrame.currentDirectiveIndex}function Rl(t){be.lFrame.currentDirectiveIndex=t}function uy(t){let n=be.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Al(){return be.lFrame.currentQueryIndex}function ns(t){be.lFrame.currentQueryIndex=t}function HS(t){let n=t[X];return n.type===2?n.declTNode:n.type===1?t[jt]:null}function wh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=HS(o),r===null||(o=o[kr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=be.lFrame=fy();return i.currentTNode=n,i.lView=t,!0}function Ol(t){let n=fy(),e=t[X];be.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function fy(){let t=be.lFrame,n=t===null?null:t.child;return n===null?my(t):n}function my(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function hy(){let t=be.lFrame;return be.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var xh=hy;function Nl(){let t=hy();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function py(t){return(be.lFrame.contextLView=J_(t,be.lFrame.contextLView))[ot]}function $n(){return be.lFrame.selectedIndex}function zi(t){be.lFrame.selectedIndex=t}function So(){let t=be.lFrame;return Il(t.tView,t.selectedIndex)}function is(){be.lFrame.currentNamespace=oh}function rs(){zS()}function zS(){be.lFrame.currentNamespace=null}function gy(){return be.lFrame.currentNamespace}var vy=!0;function Pl(){return vy}function Fl(t){vy=t}function Nm(t,n=null,e=null,i){let r=Dh(t,n,e,i);return r.resolveInjectorInitializers(),r}function Dh(t,n=null,e=null,i,r=new Set){let o=[e||Tt,$_(t)],a;return new Ir(o,n||wo(),a||null,r)}var ie=class t{static THROW_IF_NOT_FOUND=xr;static NULL=new $a;static create(n,e){if(Array.isArray(n))return Nm({name:""},e,n,"");{let i=n.name??"";return Nm({name:i},n.parent,n.providers,i)}}static \u0275prov=I({token:t,providedIn:"any",factory:()=>W(Qm)});static __NG_ELEMENT_ID__=-1},oe=new x(""),Dt=(()=>{class t{static __NG_ELEMENT_ID__=$S;static __NG_ENV_ID__=e=>e}return t})(),hl=class extends Dt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Or(this._lView)}onDestroy(n){let e=this._lView;return dh(e,n),()=>ey(e,n)}};function $S(){return new hl(J())}var by=!1,_y=new x(""),fi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new st(!1);debugTaskTracker=d(_y,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ne(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Pm=class extends R{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Z_()&&(this.destroyRef=d(Dt,{optional:!0})??void 0,this.pendingTasks=d(fi,{optional:!0})??void 0)}emit(n){let e=Q(null);try{super.next(n)}finally{Q(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof ge&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},G=Pm;function pl(...t){}function Eh(t){let n,e;function i(){t=pl;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function yy(t){return queueMicrotask(()=>t()),()=>{t=pl}}var Ih="isAngularZone",Ga=Ih+"_ID",WS=0,F=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new G(!1);onMicrotaskEmpty=new G(!1);onStable=new G(!1);onError=new G(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=by}=n;if(typeof Zone>"u")throw new k(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,ZS(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Ih)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new k(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new k(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,GS,pl,pl);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},GS={};function Sh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function qS(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Eh(()=>{t.callbackScheduled=!1,Fm(t),t.isCheckStableRunning=!0,Sh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Fm(t)}function ZS(t){let n=()=>{qS(t)},e=WS++;t._inner=t._inner.fork({name:"angular",properties:{[Ih]:!0,[Ga]:e,[Ga+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(YS(c))return i.invokeTask(o,a,s,c);try{return A_(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),O_(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return A_(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!QS(c)&&n(),O_(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Fm(t),Sh(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Fm(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function A_(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function O_(t){t._nesting--,Sh(t)}var qa=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new G;onMicrotaskEmpty=new G;onStable=new G;onError=new G;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function YS(t){return Cy(t,"__ignore_ng_zone__")}function QS(t){return Cy(t,"__scheduler_tick__")}function Cy(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Bt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Jt=new x("",{factory:()=>{let t=d(F),n=d(Ae),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Bt),e.handleError(i))})}}}),wy={provide:Li,useValue:()=>{let t=d(Bt,{optional:!0})},multi:!0},KS=new x("",{factory:()=>{let t=d(oe).defaultView;if(!t)return;let n=d(Jt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(Dt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Mh(){return Bi([z_(()=>{d(KS)})])}function P(t,n){let[e,i,r]=lm(t,n?.equal),o=e,a=o[$e];return o.set=i,o.update=r,o.asReadonly=Ll.bind(o),o}function Ll(){let t=this[$e];if(t.readonlyFn===void 0){let n=()=>this();n[$e]=t,t.readonlyFn=n}return t.readonlyFn}var Mo=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=XS}return t})();function XS(){return new Mo(J(),xt())}var jn=class{},os=new x("",{factory:()=>!0});var kh=new x(""),as=(()=>{class t{internalPendingTasks=d(fi);scheduler=d(jn);errorHandler=d(Jt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Bl=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>new Lm})}return t})(),Lm=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},gl=class{[$e];constructor(n){this[$e]=n}destroy(){this[$e].destroy()}};function $t(t,n){let e=n?.injector??d(ie),i=n?.manualCleanup!==!0?e.get(Dt):null,r,o=e.get(Mo,null,{optional:!0}),a=e.get(jn);return o!==null?(r=tM(o.view,a,t),i instanceof hl&&i._lView===o.view&&(i=null)):r=nM(t,e.get(Bl),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new gl(r)}var xy=te(D({},dm),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Wa(!1);try{um(this)}finally{Wa(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=Q(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],Q(t)}}}),JS=te(D({},xy),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ii(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),eM=te(D({},xy),{consumerMarkedDirty(){this.view[ce]|=8192,Nr(this.view),this.notifier.notify(13)},destroy(){if(ii(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Oi]?.delete(this)}});function tM(t,n,e){let i=Object.create(eM);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Dy(i,e),t[Oi]??=new Set,t[Oi].add(i),i.consumerMarkedDirty(i),i}function nM(t,n,e){let i=Object.create(JS);return i.fn=Dy(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Dy(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function gs(t){return{toString:t}.toString()}function lM(t){return typeof t=="function"}function i0(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var ql=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},De=(()=>{let t=()=>r0;return t.ngInherit=!0,t})();function r0(t){return t.type.prototype.ngOnChanges&&(t.setInput=uM),dM}function dM(){let t=a0(this),n=t?.current;if(n){let e=t.previous;if(e===Fi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function uM(t,n,e,i,r){let o=this.declaredInputs[i],a=a0(t)||fM(t,{previous:Fi,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new ql(l&&l.currentValue,e,c===Fi),i0(t,n,r,e)}var o0="__ngSimpleChanges__";function a0(t){return t[o0]||null}function fM(t,n){return t[o0]=n}var Ey=[];var Pe=function(t,n=null,e){for(let i=0;i<Ey.length;i++){let r=Ey[i];r(t,n,e)}},Te=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Te||{});function mM(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=r0(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function s0(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function zl(t,n,e){c0(t,n,3,e)}function $l(t,n,e,i){(t[ce]&3)===e&&c0(t,n,e,i)}function Th(t,n){let e=t[ce];(e&3)===n&&(e&=16383,e+=1,t[ce]=e)}function c0(t,n,e,i){let r=i!==void 0?t[Tr]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[Tr]+=65536),(s<o||o==-1)&&(hM(t,e,n,c),t[Tr]=(t[Tr]&4294901760)+c+2),c++}function Iy(t,n){Pe(Te.LifecycleHookStart,t,n);let e=Q(null);try{n.call(t)}finally{Q(e),Pe(Te.LifecycleHookEnd,t,n)}}function hM(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ce]>>14<t[Tr]>>16&&(t[ce]&3)===n&&(t[ce]+=16384,Iy(s,o)):Iy(s,o)}var To=-1,Fr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function pM(t){return(t.flags&8)!==0}function gM(t){return(t.flags&16)!==0}function vM(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];bM(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function l0(t){return t===3||t===4||t===6}function bM(t){return t.charCodeAt(0)===64}function Oo(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Sy(t,e,r,null,n[++i]):Sy(t,e,r,null,null))}}return t}function Sy(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function d0(t){return t!==To}function Zl(t){return t&32767}function _M(t){return t>>16}function Yl(t,n){let e=_M(t),i=n;for(;e>0;)i=i[kr],e--;return i}var jh=!0;function Ql(t){let n=jh;return jh=t,n}var yM=256,u0=yM-1,f0=5,CM=0,Wn={};function wM(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Sr)&&(i=e[Sr]),i==null&&(i=e[Sr]=CM++);let r=i&u0,o=1<<r;n.data[t+(r>>f0)]|=o}function Kl(t,n){let e=m0(t,n);if(e!==-1)return e;let i=n[X];i.firstCreatePass&&(t.injectorIndex=n.length,Rh(i.data,t),Rh(n,null),Rh(i.blueprint,null));let r=Cp(t,n),o=t.injectorIndex;if(d0(r)){let a=Zl(r),s=Yl(r,n),c=s[X].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function Rh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function m0(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Cp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=b0(r),i===null)return To;if(e++,r=r[kr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return To}function Uh(t,n,e){wM(t,n,e)}function xM(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(l0(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function h0(t,n,e){if(e&8||t!==void 0)return t;Cl(n,"NodeInjector")}function p0(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[li],o=Lt(void 0);try{return r?r.get(n,i,e&8):Zm(n,i,e&8)}finally{Lt(o)}}return h0(i,n,e)}function g0(t,n,e,i=0,r){if(t!==null){if(n[ce]&2048&&!(i&2)){let a=SM(t,n,e,i,Wn);if(a!==Wn)return a}let o=v0(t,n,e,i,Wn);if(o!==Wn)return o}return p0(n,e,i,r)}function v0(t,n,e,i,r){let o=EM(e);if(typeof o=="function"){if(!wh(n,t,i))return i&1?h0(r,e,i):p0(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Cl(e);else return a}finally{xh()}}else if(typeof o=="number"){let a=null,s=m0(t,n),c=To,l=i&1?n[Ut][jt]:null;for((s===-1||i&4)&&(c=s===-1?Cp(t,n):n[s+8],c===To||!ky(i,!1)?s=-1:(a=n[X],s=Zl(c),n=Yl(c,n)));s!==-1;){let u=n[X];if(My(o,s,u.data)){let f=DM(s,n,e,a,i,l);if(f!==Wn)return f}c=n[s+8],c!==To&&ky(i,n[X].data[s+8]===l)&&My(o,s,n)?(a=u,s=Zl(c),n=Yl(c,n)):s=-1}}return r}function DM(t,n,e,i,r,o){let a=n[X],s=a.data[t+8],c=i==null?Hn(s)&&jh:i!=a&&(s.type&3)!==0,l=r&1&&o===s,u=Wl(s,a,e,c,l);return u!==null?ds(n,a,u,s,r):Wn}function Wl(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,u=o>>20,f=i?s:s+u,g=r?s+u:l;for(let v=f;v<g;v++){let w=a[v];if(v<c&&e===w||v>=c&&w.type===e)return v}if(r){let v=a[c];if(v&&zn(v)&&v.type===e)return c}return null}function ds(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Fr){let s=o;if(s.resolving)throw qm("");let c=Ql(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],u,f=s.injectImpl?Lt(s.injectImpl):null,g=wh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&mM(e,a[e],n)}finally{f!==null&&Lt(f),Ql(c),s.resolving=!1,xh()}}return o}function EM(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Sr)?t[Sr]:void 0;return typeof n=="number"?n>=0?n&u0:IM:n}function My(t,n,e){let i=1<<t;return!!(e[n+(t>>f0)]&i)}function ky(t,n){return!(t&2)&&!(t&1&&n)}var Pr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return g0(this._tNode,this._lView,n,Dr(i),e)}};function IM(){return new Pr(xt(),J())}function Ze(t){return gs(()=>{let n=t.prototype.constructor,e=n[za]||Hh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[za]||Hh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Hh(t){return Bm(t)?()=>{let n=Hh(wt(t));return n&&n()}:Ai(t)}function SM(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ce]&2048&&!Eo(a);){let s=v0(o,a,e,i|2,Wn);if(s!==Wn)return s;let c=o.parent;if(!c){let l=a[nh];if(l){let u=l.get(e,Wn,i&-5);if(u!==Wn)return u}c=b0(a),a=a[kr]}o=c}return r}function b0(t){let n=t[X],e=n.type;return e===2?n.declTNode:e===1?t[jt]:null}function vs(t){return xM(xt(),t)}function MM(){return Bo(xt(),J())}function Bo(t,n){return new B(sn(t,n))}var B=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=MM}return t})();function _0(t){return t instanceof B?t.nativeElement:t}function kM(){return this._results[Symbol.iterator]()}var xn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new R}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=j_(n);(this._changesDetected=!V_(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=kM};function y0(t){return(t.flags&128)===128}var wp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(wp||{}),C0=new Map,TM=0;function RM(){return TM++}function AM(t){C0.set(t[di],t)}function zh(t){C0.delete(t[di])}var Ty="__ngContext__";function No(t,n){ui(n)?(t[Ty]=n[di],AM(n)):t[Ty]=n}function w0(t){return D0(t[Do])}function x0(t){return D0(t[on])}function D0(t){for(;t!==null&&!yn(t);)t=t[on];return t}var OM;function xp(t){OM=t}var Wi=new x("",{factory:()=>NM}),NM="ng";var fd=new x(""),jr=new x("",{providedIn:"platform",factory:()=>"unknown"}),bs=new x(""),Ur=new x("",{factory:()=>d(oe).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var E0="r";var I0="di";var S0=!1,M0=new x("",{factory:()=>S0});var PM=(t,n,e,i)=>{};function FM(t,n,e,i){PM(t,n,e,i)}function md(t){return(t.flags&32)===32}var LM=()=>null;function k0(t,n,e=!1){return LM(t,n,e)}function T0(t,n){let e=t.contentQueries;if(e!==null){let i=Q(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];ns(o),s.contentQueries(2,n[a],a)}}}finally{Q(i)}}}function $h(t,n,e){ns(0);let i=Q(null);try{n(t,e)}finally{Q(i)}}function R0(t,n,e){if(rh(n)){let i=Q(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{Q(i)}}}var Dn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Dn||{});var Vl;function BM(){if(Vl===void 0&&(Vl=null,Pi.trustedTypes))try{Vl=Pi.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Vl}function hd(t){return BM()?.createHTML(t)||t}var jl;function VM(){if(jl===void 0&&(jl=null,Pi.trustedTypes))try{jl=Pi.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return jl}function Ry(t){return VM()?.createScriptURL(t)||t}var mi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${vl})`}},Wh=class extends mi{getTypeName(){return"HTML"}},Gh=class extends mi{getTypeName(){return"Style"}},qh=class extends mi{getTypeName(){return"Script"}},Zh=class extends mi{getTypeName(){return"URL"}},Yh=class extends mi{getTypeName(){return"ResourceURL"}};function In(t){return t instanceof mi?t.changingThisBreaksApplicationSecurity:t}function hi(t,n){let e=A0(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${vl})`)}return e===n}function A0(t){return t instanceof mi&&t.getTypeName()||null}function Dp(t){return new Wh(t)}function Ep(t){return new Gh(t)}function Ip(t){return new qh(t)}function Sp(t){return new Zh(t)}function Mp(t){return new Yh(t)}function jM(t){let n=new Kh(t);return UM()?new Qh(n):n}var Qh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(hd(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Kh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=hd(n),e}};function UM(){try{return!!new window.DOMParser().parseFromString(hd(""),"text/html")}catch{return!1}}var HM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function _s(t){return t=String(t),t.match(HM)?t:"unsafe:"+t}function pi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function ys(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var O0=pi("area,br,col,hr,img,wbr"),N0=pi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),P0=pi("rp,rt"),zM=ys(P0,N0),$M=ys(N0,pi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),WM=ys(P0,pi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Ay=ys(O0,$M,WM,zM),F0=pi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),GM=pi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),qM=pi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),ZM=ys(F0,GM,qM),YM=pi("script,style,template");var Xh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=XM(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=KM(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Oy(n).toLowerCase();if(!Ay.hasOwnProperty(e))return this.sanitizedSomething=!0,!YM.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!ZM.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;F0[s]&&(c=_s(c)),this.buf.push(" ",a,'="',Ny(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=Oy(n).toLowerCase();Ay.hasOwnProperty(e)&&!O0.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Ny(n))}};function QM(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function KM(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw L0(n);return n}function XM(t){let n=t.firstChild;if(n&&QM(t,n))throw L0(n);return n}function Oy(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function L0(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var JM=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,ek=/([^\#-~ |!])/g;function Ny(t){return t.replace(/&/g,"&amp;").replace(JM,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(ek,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ul;function kp(t,n){let e=null;try{Ul=Ul||jM(t);let i=n?String(n):"";e=Ul.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Ul.getInertBodyElement(i)}while(i!==o);let s=new Xh().sanitizeChildren(Py(e)||e);return hd(s)}finally{if(e){let i=Py(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Py(t){return"content"in t&&tk(t)?t.content:null}function tk(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function nk(t,n){return t.createText(n)}function ik(t,n,e){t.setValue(n,e)}function B0(t,n,e){return t.createElement(n,e)}function Xl(t,n,e,i,r){t.insertBefore(n,e,i,r)}function V0(t,n,e){t.appendChild(n,e)}function Fy(t,n,e,i,r){i!==null?Xl(t,n,e,i,r):V0(t,n,e)}function j0(t,n,e,i){t.removeChild(null,n,e,i)}function rk(t,n,e){t.setAttribute(n,"style",e)}function ok(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function U0(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&vM(t,n,i),r!==null&&ok(t,n,r),o!==null&&rk(t,n,o)}var Et=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Et||{});function ze(t){let n=z0();return n?n.sanitize(Et.URL,t)||"":hi(t,"URL")?In(t):_s(yo(t))}function H0(t){let n=z0();if(n)return Ry(n.sanitize(Et.RESOURCE_URL,t)||"");if(hi(t,"ResourceURL"))return Ry(In(t));throw new k(904,!1)}var ak={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function sk(t,n){return ak[t]?.[n]===!0?H0:ze}function Tp(t,n,e){return sk(n,e)(t)}function z0(){let t=J();return t&&t[_n].sanitizer}function $0(t){return t instanceof Function?t():t}function ck(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var W0="ng-template";function lk(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&ck(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Rp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Rp(t){return t.type===4&&t.value!==W0}function dk(t,n,e){let i=t.type===4&&!e?W0:t.value;return n===i}function uk(t,n,e){let i=4,r=t.attrs,o=r!==null?hk(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!Cn(i)&&!Cn(c))return!1;if(a&&Cn(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!dk(t,c,e)||c===""&&n.length===1){if(Cn(i))return!1;a=!0}}else if(i&8){if(r===null||!lk(t,r,c,e)){if(Cn(i))return!1;a=!0}}else{let l=n[++s],u=fk(c,r,Rp(t),e);if(u===-1){if(Cn(i))return!1;a=!0;continue}if(l!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&l!==f){if(Cn(i))return!1;a=!0}}}}return Cn(i)||a}function Cn(t){return(t&1)===0}function fk(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return pk(n,t)}function G0(t,n,e=!1){for(let i=0;i<n.length;i++)if(uk(t,n[i],e))return!0;return!1}function mk(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function hk(t){for(let n=0;n<t.length;n++){let e=t[n];if(l0(e))return n}return t.length}function pk(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function gk(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Ly(t,n){return t?":not("+n.trim()+")":n}function vk(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Cn(a)&&(n+=Ly(o,r),r=""),i=a,o=o||!Cn(i);e++}return r!==""&&(n+=Ly(o,r)),n}function bk(t){return t.map(vk).join(",")}function _k(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Cn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Wt={};function Ap(t,n,e,i,r,o,a,s,c,l,u){let f=qe+i,g=f+r,v=yk(f,g),w=typeof l=="function"?l():l;return v[X]={type:t,blueprint:v,template:e,queries:null,viewQuery:s,declTNode:n,data:v.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:g,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:w,incompleteFirstPass:!1,ssrId:u}}function yk(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Wt);return e}function Ck(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Ap(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Op(t,n,e,i,r,o,a,s,c,l,u){let f=n.blueprint.slice();return f[bn]=r,f[ce]=i|4|128|8|64|1024,(l!==null||t&&t[ce]&2048)&&(f[ce]|=2048),ch(f),f[mt]=f[kr]=t,f[ot]=e,f[_n]=a||t&&t[_n],f[He]=s||t&&t[He],f[li]=c||t&&t[li]||null,f[jt]=o,f[di]=RM(),f[Mr]=u,f[nh]=l,f[Ut]=n.type==2?t[Ut]:f,f}function wk(t,n,e){let i=sn(n,t),r=Ck(e),o=t[_n].rendererFactory,a=Np(t,Op(t,r,null,q0(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function q0(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Z0(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Np(t,n){return t[Do]?t[th][on]=n:t[Do]=n,t[th]=n,n}function m(t=1){Y0(We(),J(),$n()+t,!1)}function Y0(t,n,e,i){if(!i)if((n[ce]&3)===3){let o=t.preOrderCheckHooks;o!==null&&zl(n,o,e)}else{let o=t.preOrderHooks;o!==null&&$l(n,o,0,e)}zi(e)}var pd=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(pd||{});function Ro(t,n,e,i){let r=Q(null);try{let[o,a,s]=t.inputs[e],c=null;(a&pd.SignalBased)!==0&&(c=n[o][$e]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):i0(n,c,o,i)}finally{Q(r)}}var En=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(En||{}),xk;function Pp(t,n){return xk(t,n)}var F5=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Jh=new WeakMap,ss=new WeakSet;function Dk(t,n){let e=Jh.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),ss.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function Ek(t,n){let e=Jh.get(t);e?e.includes(n)||e.push(n):Jh.set(t,[n])}var Lr=new Set,gd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(gd||{}),Sn=new x(""),By=new Set;function gi(t){By.has(t)||(By.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var vd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Fp=[0,1,2,3],Lp=(()=>{class t{ngZone=d(F);scheduler=d(jn);errorHandler=d(Bt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(Sn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Pe(Te.AfterRenderHooksStart),this.executing=!0;for(let i of Fp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Pe(Te.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Rr]??=[]).push(e),Nr(i),i[ce]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(gd.AFTER_NEXT_RENDER,e):e()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),us=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Rr];n&&(this.view[Rr]=n.filter(e=>e!==this))}};function ht(t,n){let e=n?.injector??d(ie);return gi("NgAfterNextRender"),Sk(t,e,n,!0)}function Ik(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function Sk(t,n,e,i){let r=n.get(vd);r.impl??=n.get(Lp);let o=n.get(Sn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Dt):null,s=n.get(Mo,null,{optional:!0}),c=new us(r.impl,Ik(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var Q0=new x("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(Ae)})});function K0(t,n,e){let i=t.get(Q0);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function Mk(t,n){let e=t.get(Q0);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function kk(t,n){for(let[e,i]of n)K0(t,i.animateFns)}function Vy(t,n,e,i){let r=t?.[ji]?.enter;n!==null&&r&&r.has(e.index)&&kk(i,r)}function ko(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;yn(r)?c=r:ui(r)&&(l=!0,r=r[bn]);let u=an(r);t===0&&i!==null?(Vy(s,i,o,e),a==null?V0(n,i,u):Xl(n,i,u,a||null,!0)):t===1&&i!==null?(Vy(s,i,o,e),Xl(n,i,u,a||null,!0),Dk(o,u)):t===2?(s?.[ji]?.leave?.has(o.index)&&Ek(o,u),ss.delete(u),jy(s,o,e,f=>{if(ss.has(u)){ss.delete(u);return}j0(n,u,l,f)})):t===3&&(ss.delete(u),jy(s,o,e,()=>{n.destroyNode(u)})),c!=null&&jk(n,t,e,c,o,i,a)}}function Tk(t,n){X0(t,n),n[bn]=null,n[jt]=null}function Rk(t,n,e,i,r,o){i[bn]=r,i[jt]=n,_d(t,i,e,1,r,o)}function X0(t,n){n[_n].changeDetectionScheduler?.notify(9),_d(t,n,n[He],2,null,null)}function Ak(t){let n=t[Do];if(!n)return Ah(t[X],t);for(;n;){let e=null;if(ui(n))e=n[Do];else{let i=n[tt];i&&(e=i)}if(!e){for(;n&&!n[on]&&n!==t;)ui(n)&&Ah(n[X],n),n=n[mt];n===null&&(n=t),ui(n)&&Ah(n[X],n),e=n&&n[on]}n=e}}function Bp(t,n){let e=t[Ar],i=e.indexOf(n);e.splice(i,1)}function bd(t,n){if(Or(n))return;let e=n[He];e.destroyNode&&_d(t,n,e,3,null,null),Ak(n)}function Ah(t,n){if(Or(n))return;let e=Q(null);try{n[ce]&=-129,n[ce]|=256,n[Kt]&&ii(n[Kt]),Pk(t,n),Nk(t,n),n[X].type===1&&n[He].destroy();let i=n[Vi];if(i!==null&&yn(n[mt])){i!==n[mt]&&Bp(i,n);let r=n[Un];r!==null&&r.detachView(t)}zh(n)}finally{Q(e)}}function jy(t,n,e,i){let r=t?.[ji];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Lr.add(t[di]),K0(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:u}=l();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),Ok(t,i)}else t&&Lr.delete(t[di]),i(!1)},r)}function Ok(t,n){let e=t[ji]?.running;if(e){e.then(()=>{t[ji].running=void 0,Lr.delete(t[di]),n(!0)});return}n(!1)}function Nk(t,n){let e=t.cleanup,i=n[xo];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[xo]=null);let r=n[ai];if(r!==null){n[ai]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[Oi];if(o!==null){n[Oi]=null;for(let a of o)a.destroy()}}function Pk(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Fr)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];Pe(Te.LifecycleHookStart,s,c);try{c.call(s)}finally{Pe(Te.LifecycleHookEnd,s,c)}}else{Pe(Te.LifecycleHookStart,r,o);try{o.call(r)}finally{Pe(Te.LifecycleHookEnd,r,o)}}}}}function J0(t,n,e){return Fk(t,n.parent,e)}function Fk(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[bn];if(Hn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Dn.None||r===Dn.Emulated)return null}return sn(i,e)}function eC(t,n,e){return Bk(t,n,e)}function Lk(t,n,e){return t.type&40?sn(t,e):null}var Bk=Lk,Uy;function Vp(t,n,e,i){let r=J0(t,i,n),o=n[He],a=i.parent||n[jt],s=eC(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)Fy(o,r,e[c],s,!1);else Fy(o,r,e,s,!1);Uy!==void 0&&Uy(o,i,n,e,r)}function cs(t,n){if(n!==null){let e=n.type;if(e&3)return sn(n,t);if(e&4)return ep(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return cs(t,i);{let r=t[n.index];return yn(r)?ep(-1,r):an(r)}}else{if(e&128)return cs(t,n.next);if(e&32)return Pp(n,t)()||an(t[n.index]);{let i=tC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Ni(t[Ut]);return cs(r,i)}else return cs(t,n.next)}}}return null}function tC(t,n){if(n!==null){let i=t[Ut][jt],r=n.projection;return i.projection[r]}return null}function ep(t,n){let e=tt+t+1;if(e<n.length){let i=n[e],r=i[X].firstChild;if(r!==null)return cs(i,r)}return n[Ui]}function jp(t,n,e,i,r,o,a){for(;e!=null;){let s=i[li];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&No(an(c),i),e.flags|=2),!md(e))if(l&8)jp(t,n,e.child,i,r,o,!1),ko(n,t,s,r,c,e,o,i);else if(l&32){let u=Pp(e,i),f;for(;f=u();)ko(n,t,s,r,f,e,o,i);ko(n,t,s,r,c,e,o,i)}else l&16?nC(t,n,i,e,r,o):ko(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function _d(t,n,e,i,r,o){jp(e,i,t.firstChild,n,r,o,!1)}function Vk(t,n,e){let i=n[He],r=J0(t,e,n),o=e.parent||n[jt],a=eC(o,e,n);nC(i,0,n,e,r,a)}function nC(t,n,e,i,r,o){let a=e[Ut],c=a[jt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ko(n,t,e[li],r,u,i,o,e)}else{let l=c,u=a[mt];y0(i)&&(l.flags|=128),jp(t,n,l,u,r,o,!0)}}function jk(t,n,e,i,r,o,a){let s=i[Ui],c=an(i);s!==c&&ko(n,t,e,o,s,r,a);for(let l=tt;l<i.length;l++){let u=i[l];_d(u[X],u,t,n,o,s)}}function Uk(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:En.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=En.Important),t.setStyle(e,i,r,o))}}function iC(t,n,e,i,r){let o=$n(),a=i&2;try{zi(-1),a&&n.length>qe&&Y0(t,n,qe,!1);let s=a?Te.TemplateUpdateStart:Te.TemplateCreateStart;Pe(s,r,e),e(i,r)}finally{zi(o);let s=a?Te.TemplateUpdateEnd:Te.TemplateCreateEnd;Pe(s,r,e)}}function Up(t,n,e){qk(t,n,e),(e.flags&64)===64&&Zk(t,n,e)}function yd(t,n,e=sn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function Hk(t,n,e,i){let o=i.get(M0,S0)||e===Dn.ShadowDom||e===Dn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return zk(a),a}function zk(t){$k(t)}var $k=()=>null;function Wk(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function Gk(t,n,e,i,r,o){let a=n[X];if(Cd(t,a,n,e,i)){Hn(t)&&oC(n,t.index);return}t.type&3&&(e=Wk(e)),rC(t,n,e,i,r,o)}function rC(t,n,e,i,r,o){if(t.type&3){let a=sn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function oC(t,n){let e=cn(n,t);e[ce]&16||(e[ce]|=64)}function qk(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Hn(e)&&wk(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Kl(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=ds(n,t,a,e);if(No(c,n),o!==null&&Kk(n,a-i,c,s,e,o),zn(s)){let l=cn(e.index,n);l[ot]=ds(n,t,a,e)}}}function Zk(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=dy();try{zi(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];Rl(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Yk(c,l)}}finally{zi(-1),Rl(a)}}function Yk(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function aC(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];G0(n,o.selectors,!1)&&(i??=[],zn(o)?i.unshift(o):i.push(o))}return i}function Qk(t,n,e,i,r,o){let a=sn(t,n);sC(n[He],a,o,t.value,e,i,r)}function sC(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?yo(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function Kk(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];Ro(i,e,c,l)}}function cC(t,n,e,i,r){let o=qe+e,a=n[X],s=r(a,n,t,i,e);n[o]=s,Io(t,!0);let c=t.type===2;return c?(U0(n[He],s,t),(ny()===0||Ja(t))&&No(s,n),iy()):No(s,n),Pl()&&(!c||!md(t))&&Vp(a,n,s,t),t}function lC(t){let n=t;return _h()?yh():(n=n.parent,Io(n,!1)),n}function Xk(t,n){let e=t[li];if(!e)return;let i;try{i=e.get(Jt,null)}catch{i=null}i?.(n)}function Cd(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],u=a[c+1],f=n.data[l];Ro(f,e[l],u,r),s=!0}if(o)for(let c of o){let l=e[c],u=n.data[c];Ro(u,l,i,r),s=!0}return s}function Jk(t,n){let e=cn(n,t),i=e[X];eT(i,e);let r=e[bn];r!==null&&e[Mr]===null&&(e[Mr]=k0(r,e[li])),Pe(Te.ComponentStart);try{Hp(i,e,e[ot])}finally{Pe(Te.ComponentEnd,e[ot])}}function eT(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Hp(t,n,e){Ol(n);try{let i=t.viewQuery;i!==null&&$h(1,i,e);let r=t.template;r!==null&&iC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Un]?.finishViewCreation(t),t.staticContentQueries&&T0(t,n),t.staticViewQueries&&$h(2,t.viewQuery,e);let o=t.components;o!==null&&tT(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ce]&=-5,Nl()}}function tT(t,n){for(let e=0;e<n.length;e++)Jk(t,n[e])}function Cs(t,n,e,i){let r=Q(null);try{let o=n.tView,s=t[ce]&4096?4096:16,c=Op(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[Vi]=l;let u=t[Un];return u!==null&&(c[Un]=u.createEmbeddedView(o)),Hp(o,c,e),c}finally{Q(r)}}function Po(t,n){return!n||n.firstChild===null||y0(t)}function fs(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(an(o)),yn(o)&&dC(o,i);let a=e.type;if(a&8)fs(t,n,e.child,i);else if(a&32){let s=Pp(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=tC(n,e);if(Array.isArray(s))i.push(...s);else{let c=Ni(n[Ut]);fs(c[X],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function dC(t,n){for(let e=tt;e<t.length;e++){let i=t[e],r=i[X].firstChild;r!==null&&fs(i[X],i,r,n)}t[Ui]!==t[bn]&&n.push(t[Ui])}function uC(t){if(t[Rr]!==null){for(let n of t[Rr])n.impl.addSequence(n);t[Rr].length=0}}var fC=[];function nT(t){return t[Kt]??iT(t)}function iT(t){let n=fC.pop()??Object.create(oT);return n.lView=t,n}function rT(t){t.lView[Kt]!==t&&(t.lView=null,fC.push(t))}var oT=te(D({},ti),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Nr(t.lView)},consumerOnSignalRead(){this.lView[Kt]=this}});function aT(t){let n=t[Kt]??Object.create(sT);return n.lView=t,n}var sT=te(D({},ti),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Ni(t.lView);for(;n&&!mC(n[X]);)n=Ni(n);n&&lh(n)},consumerOnSignalRead(){this.lView[Kt]=this}});function mC(t){return t.type!==2}function hC(t){if(t[Oi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Oi])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ce]&8192)}}var cT=100;function pC(t,n=0){let i=t[_n].rendererFactory,r=!1;r||i.begin?.();try{lT(t,n)}finally{r||i.end?.()}}function lT(t,n){let e=Ch();try{Wa(!0),tp(t,n);let i=0;for(;es(t);){if(i===cT)throw new k(103,!1);i++,tp(t,1)}}finally{Wa(e)}}function dT(t,n,e,i){if(Or(n))return;let r=n[ce],o=!1,a=!1;Ol(n);let s=!0,c=null,l=null;o||(mC(t)?(l=nT(n),c=Fn(l)):Tc()===null?(s=!1,l=aT(n),c=Fn(l)):n[Kt]&&(ii(n[Kt]),n[Kt]=null));try{ch(n),sy(t.bindingStartIndex),e!==null&&iC(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let v=t.preOrderCheckHooks;v!==null&&zl(n,v,null)}else{let v=t.preOrderHooks;v!==null&&$l(n,v,0,null),Th(n,0)}if(a||uT(n),hC(n),gC(n,0),t.contentQueries!==null&&T0(t,n),!o)if(u){let v=t.contentCheckHooks;v!==null&&zl(n,v)}else{let v=t.contentHooks;v!==null&&$l(n,v,1),Th(n,1)}mT(t,n);let f=t.components;f!==null&&bC(n,f,0);let g=t.viewQuery;if(g!==null&&$h(2,g,i),!o)if(u){let v=t.viewCheckHooks;v!==null&&zl(n,v)}else{let v=t.viewHooks;v!==null&&$l(n,v,2),Th(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[El]){for(let v of n[El])v();n[El]=null}o||(uC(n),n[ce]&=-73)}catch(u){throw o||Nr(n),u}finally{l!==null&&(ni(l,c),s&&rT(l)),Nl()}}function gC(t,n){for(let e=w0(t);e!==null;e=x0(e))for(let i=tt;i<e.length;i++){let r=e[i];vC(r,n)}}function uT(t){for(let n=w0(t);n!==null;n=x0(n)){if(!(n[ce]&2))continue;let e=n[Ar];for(let i=0;i<e.length;i++){let r=e[i];lh(r)}}}function fT(t,n,e){Pe(Te.ComponentStart);let i=cn(n,t);try{vC(i,e)}finally{Pe(Te.ComponentEnd,i[ot])}}function vC(t,n){Ml(t)&&tp(t,n)}function tp(t,n){let i=t[X],r=t[ce],o=t[Kt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&lr(o)),a||=!1,o&&(o.dirty=!1),t[ce]&=-9217,a)dT(i,t,i.template,t[ot]);else if(r&8192){let s=Q(null);try{hC(t),gC(t,1);let c=i.components;c!==null&&bC(t,c,1),uC(t)}finally{Q(s)}}}function bC(t,n,e){for(let i=0;i<n.length;i++)fT(t,n[i],e)}function mT(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)zi(~r);else{let o=r,a=e[++i],s=e[++i];ly(a,o);let c=n[o];Pe(Te.HostBindingsUpdateStart,c);try{s(2,c)}finally{Pe(Te.HostBindingsUpdateEnd,c)}}}}finally{zi(-1)}}function zp(t,n){let e=Ch()?64:1088;for(t[_n].changeDetectionScheduler?.notify(n);t;){t[ce]|=e;let i=Ni(t);if(Eo(t)&&!i)return t;t=i}return null}function _C(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function yC(t,n){let e=tt+n;if(e<t.length)return t[e]}function ws(t,n,e,i=!0){let r=n[X];if(hT(r,n,t,e),i){let a=ep(e,t),s=n[He],c=s.parentNode(t[Ui]);c!==null&&Rk(r,t[jt],s,n,c,a)}let o=n[Mr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function CC(t,n){let e=ms(t,n);return e!==void 0&&bd(e[X],e),e}function ms(t,n){if(t.length<=tt)return;let e=tt+n,i=t[e];if(i){let r=i[Vi];r!==null&&r!==t&&Bp(r,i),n>0&&(t[e-1][on]=i[on]);let o=Qa(t,tt+n);Tk(i[X],i);let a=o[Un];a!==null&&a.detachView(o[X]),i[mt]=null,i[on]=null,i[ce]&=-129}return i}function hT(t,n,e,i){let r=tt+i,o=e.length;i>0&&(e[r-1][on]=n),i<o-tt?(n[on]=e[r],Ym(e,tt+i,n)):(e.push(n),n[on]=null),n[mt]=e;let a=n[Vi];a!==null&&e!==a&&wC(a,n);let s=n[Un];s!==null&&s.insertView(t),kl(n),n[ce]|=128}function wC(t,n){let e=t[Ar],i=n[mt];if(ui(i))t[ce]|=2;else{let r=i[mt][Ut];n[Ut]!==r&&(t[ce]|=2)}e===null?t[Ar]=[n]:e.push(n)}var $i=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[X];return fs(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ot]}set context(n){this._lView[ot]=n}get destroyed(){return Or(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[mt];if(yn(n)){let e=n[Xa],i=e?e.indexOf(this):-1;i>-1&&(ms(n,i),Qa(e,i))}this._attachedToViewContainer=!1}bd(this._lView[X],this._lView)}onDestroy(n){dh(this._lView,n)}markForCheck(){zp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ce]&=-129}reattach(){kl(this._lView),this._lView[ce]|=128}detectChanges(){this._lView[ce]|=1024,pC(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new k(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Eo(this._lView),e=this._lView[Vi];e!==null&&!n&&Bp(e,this._lView),X0(this._lView[X],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new k(902,!1);this._appRef=n;let e=Eo(this._lView),i=this._lView[Vi];i!==null&&!e&&wC(i,this._lView),kl(this._lView)}};var Rt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=pT;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Cs(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new $i(o)}}return t})();function pT(){return wd(xt(),J())}function wd(t,n){return t.type&4?new Rt(n,t,Bo(t,n)):null}function Vo(t,n,e,i,r){let o=t.data[n];if(o===null)o=gT(t,n,e,i,r),cy()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=ry();o.injectorIndex=a===null?-1:a.injectorIndex}return Io(o,!0),o}function gT(t,n,e,i,r){let o=bh(),a=_h(),s=a?o:o&&o.parent,c=t.data[n]=bT(t,s,e,n,i,r);return vT(t,c,o,a),c}function vT(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function bT(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return ph()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function _T(t){let n=t[ih]??[],i=t[mt][He],r=[];for(let o of n)o.data[I0]!==void 0?r.push(o):yT(o,i);t[ih]=r}function yT(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[E0];for(;e<r;){let o=i.nextSibling;j0(n,i,!1),i=o,e++}}}var CT=()=>null,wT=()=>null;function Jl(t,n){return CT(t,n)}function xC(t,n,e){return wT(t,n,e)}var DC=class{},xd=class{},np=class{resolveComponentFactory(n){throw new k(917,!1)}},xs=class{static NULL=new np},ut=class{},Fe=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>xT()}return t})();function xT(){let t=J(),n=xt(),e=cn(n.index,t);return(ui(e)?e:t)[He]}var EC=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>null})}return t})();var Gl={},ip=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Gl,i);return r!==Gl||e===Gl?r:this.parentInjector.get(n,e,i)}};function ed(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=bl(r,s);else if(o==2){let c=s,l=n[++a];i=bl(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function L(t,n=0){let e=J();if(e===null)return W(t,n);let i=xt();return g0(i,e,wt(t),n)}function IC(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,c,l]=u.resolveHostDirectives(a);break}IT(t,n,e,s,o,c,l)}o!==null&&i!==null&&DT(e,i,o)}function DT(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new k(-301,!1);i.push(n[r],o)}}function ET(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function IT(t,n,e,i,r,o,a){let s=i.length,c=null;for(let g=0;g<s;g++){let v=i[g];c===null&&zn(v)&&(c=v,ET(t,e,g)),Uh(Kl(e,n),t,v.type)}AT(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let g=0;g<s;g++){let v=i[g];v.providersResolver&&v.providersResolver(v)}let l=!1,u=!1,f=Z0(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let g=0;g<s;g++){let v=i[g];if(e.mergedAttrs=Oo(e.mergedAttrs,v.hostAttrs),MT(t,e,n,f,v),RT(f,v,r),a!==null&&a.has(v)){let[A,N]=a.get(v);e.directiveToIndex.set(v.type,[f,A+e.directiveStart,N+e.directiveStart])}else(o===null||!o.has(v))&&e.directiveToIndex.set(v.type,f);v.contentQueries!==null&&(e.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(e.flags|=64);let w=v.type.prototype;!l&&(w.ngOnChanges||w.ngOnInit||w.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!u&&(w.ngOnChanges||w.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}ST(t,e,o)}function ST(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Hy(0,n,r,i),Hy(1,n,r,i),$y(n,i,!1);else{let o=e.get(r);zy(0,n,o,i),zy(1,n,o,i),$y(n,i,!0)}}}function Hy(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),SC(n,o)}}function zy(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),SC(n,a)}}function SC(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function $y(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Rp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===n){a??=[],a.push(l[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function MT(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Ai(r.type,!0)),a=new Fr(o,zn(r),L,null);t.blueprint[i]=a,e[i]=a,kT(t,n,i,Z0(t,e,r.hostVars,Wt),r)}function kT(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;TT(a)!=s&&a.push(s),a.push(e,i,o)}}function TT(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function RT(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;zn(n)&&(e[""]=t)}}function AT(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function MC(t,n,e,i,r,o,a,s){let c=n[X],l=c.consts,u=Xt(l,a),f=Vo(c,t,e,i,u);return o&&IC(c,n,f,Xt(l,s),r),f.mergedAttrs=Oo(f.mergedAttrs,f.attrs),f.attrs!==null&&ed(f,f.attrs,!1),f.mergedAttrs!==null&&ed(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function kC(t,n){s0(t,n),rh(n)&&t.queries.elementEnd(n)}function OT(t,n,e,i,r,o){let a=n.consts,s=Xt(a,r),c=Vo(n,t,e,i,s);if(c.mergedAttrs=Oo(c.mergedAttrs,c.attrs),o!=null){let l=Xt(a,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&ed(c,c.attrs,!1),c.mergedAttrs!==null&&ed(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function $p(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function Wp(t,n,e){return t[n]=e}function NT(t,n){return t[n]}function ln(t,n,e){if(e===Wt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function TC(t,n,e,i){let r=ln(t,n,e);return ln(t,n+1,i)||r}function Ao(t,n,e){return function i(r){let o=Hn(t)?cn(t.index,n):n;zp(o,5);let a=n[ot],s=Wy(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=Wy(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function Wy(t,n,e,i){let r=Q(null);try{return Pe(Te.OutputStart,n,e),e(i)!==!1}catch(o){return Xk(t,o),!1}finally{Pe(Te.OutputEnd,n,e),Q(r)}}function RC(t,n,e,i,r,o,a,s){let c=Ja(t),l=!1,u=null;if(!i&&c&&(u=FT(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,l=!0}else{let f=sn(t,e),g=i?i(f):f;FM(e,g,o,s);let v=r.listen(g,o,s);if(!PT(o)){let w=i?A=>i(an(A[t.index])):t.index;AC(w,n,e,o,s,v,!1)}}return l}function PT(t){return t.startsWith("animation")||t.startsWith("transition")}function FT(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[xo],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function AC(t,n,e,i,r,o,a){let s=n.firstCreatePass?fh(n):null,c=uh(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function td(t,n,e,i,r,o){let a=n[e],s=n[X],l=s.data[e].outputs[i],f=a[l].subscribe(o);AC(t.index,s,n,r,o,f,!0)}function jo(){LT()}function LT(){let t=J(),n=We(),e=xt();if(n.firstCreatePass&&VT(n,e),e.controlDirectiveIndex===-1)return;gi("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new nd(t,n,e))}function Uo(){BT()}function BT(){let t=J(),n=We(),e=So();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new nd(t,n,e))}var nd=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){OC(this.tView.data[this.tNode.customControlIndex],n)&&td(this.tNode,this.lView,this.tNode.customControlIndex,n,n,Ao(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";td(this.tNode,this.lView,this.tNode.customControlIndex,e,e,Ao(this.tNode,this.lView,n))}listenToDom(n,e){RC(this.tNode,this.tView,this.lView,void 0,this.lView[He],n,e,Ao(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];Ro(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],c=this.tView.data[a],l=this.lView[a];Ro(c,l,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";Ro(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function VT(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}jT(t,n)}function jT(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(Gy(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(Gy(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function Gy(t,n){return UT(t,n)&&OC(t,n+"Change")}function UT(t,n){return n in t.inputs}function OC(t,n){return n in t.outputs}var rp=Symbol("BINDING");function NC(t){return t.debugInfo?.className||t.type.name||null}var id=class extends xs{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=ci(n);return new Br(e,this.ngModule)}};function HT(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&pd.SignalBased)!==0};return r&&(o.transform=r),o})}function zT(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function $T(t,n,e){let i=n instanceof Ae?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new ip(e,i):e}function WT(t){let n=t.get(ut,null);if(n===null)throw new k(407,!1);let e=t.get(EC,null),i=t.get(jn,null),r=t.get(Sn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function GT(t,n){let e=PC(t);return B0(n,e,e==="svg"?oh:e==="math"?Q_:null)}function PC(t){return(t.selectors[0][0]||"div").toLowerCase()}var Br=class extends xd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=HT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=zT(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=bk(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Pe(Te.DynamicComponentStart);let s=Q(null);try{let c=this.componentDef,l=$T(c,r||this.ngModule,n),u=WT(l),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(NC(c),()=>this.createComponentRef(u,l,e,i,o,a)):this.createComponentRef(u,l,e,i,o,a)}finally{Q(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=qT(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),u=r?Hk(l,r,s.encapsulation,e):GT(s,l),f=a?.some(qy)||o?.some(w=>typeof w!="function"&&w.bindings.some(qy)),g=Op(null,c,null,512|q0(s),null,null,n,l,e,null,k0(u,e,!0));g[qe]=u,Ol(g);let v=null;try{let w=MC(qe,g,2,"#host",()=>c.directiveRegistry,!0,0);U0(l,u,w),No(u,g),Up(c,g,w),R0(c,w,g),kC(c,w),i!==void 0&&YT(w,this.ngContentSelectors,i),v=cn(w.index,g),g[ot]=v[ot],Hp(c,g,null)}catch(w){throw v!==null&&zh(v),zh(g),w}finally{Pe(Te.DynamicComponentEnd),Nl()}return new rd(this.componentType,g,!!f)}};function qT(t,n,e,i){let r=t?["ng-version","21.2.10"]:_k(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[rp].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let g of f.bindings){s+=g[rp].requiredVars;let v=u+1;g.create&&(g.targetIdx=v,(o??=[]).push(g)),g.update&&(g.targetIdx=v,(a??=[]).push(g))}}let c=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,g=Gm(f);c.push(g)}return Ap(0,null,ZT(o,a),1,s,c,null,null,null,[r],null)}function ZT(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function qy(t){let n=t[rp].kind;return n==="input"||n==="twoWay"}var rd=class extends DC{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Il(e[X],qe),this.location=Bo(this._tNode,e),this.instance=cn(this._tNode.index,e)[ot],this.hostView=this.changeDetectorRef=new $i(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Cd(i,r[X],r,n,e);this.previousInputValues.set(n,e);let a=cn(i.index,r);zp(a,1)}get injector(){return new Pr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function YT(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var It=(()=>{class t{static __NG_ELEMENT_ID__=QT}return t})();function QT(){let t=xt();return FC(t,J())}var op=class t extends It{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Bo(this._hostTNode,this._hostLView)}get injector(){return new Pr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Cp(this._hostTNode,this._hostLView);if(d0(n)){let e=Yl(n,this._hostLView),i=Zl(n),r=e[X].data[i+8];return new Pr(r,e)}else return new Pr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Zy(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-tt}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Jl(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Po(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!lM(n),l;if(c)l=e;else{let N=e||{};l=N.index,i=N.injector,r=N.projectableNodes,o=N.environmentInjector||N.ngModuleRef,a=N.directives,s=N.bindings}let u=c?n:new Br(ci(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let z=(c?f:this.parentInjector).get(Ae,null);z&&(o=z)}let g=ci(u.componentType??{}),v=Jl(this._lContainer,g?.id??null),w=v?.firstChild??null,A=u.create(f,r,w,o,a,s);return this.insertImpl(A.hostView,l,Po(this._hostTNode,v)),A}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(X_(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[mt],l=new t(c,c[jt],c[mt]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return ws(a,r,o,i),n.attachToViewContainerRef(),Ym(Oh(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Zy(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=ms(this._lContainer,e);i&&(Qa(Oh(this._lContainer),e),bd(i[X],i))}detach(n){let e=this._adjustIndex(n,-1),i=ms(this._lContainer,e);return i&&Qa(Oh(this._lContainer),e)!=null?new $i(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Zy(t){return t[Xa]}function Oh(t){return t[Xa]||(t[Xa]=[])}function FC(t,n){let e,i=n[t.index];return yn(i)?e=i:(e=_C(i,n,null,t),n[t.index]=e,Np(n,e)),XT(e,n,t,i),new op(e,t,n)}function KT(t,n){let e=t[He],i=e.createComment(""),r=sn(n,t),o=e.parentNode(r);return Xl(e,o,i,e.nextSibling(r),!1),i}var XT=tR,JT=()=>!1;function eR(t,n,e){return JT(t,n,e)}function tR(t,n,e,i){if(t[Ui])return;let r;e.type&8?r=an(i):r=KT(n,e),t[Ui]=r}var ap=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},sp=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)qp(n,e).matches!==null&&this.queries[e].setDirty()}},od=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=aR(n):this.predicate=n}},cp=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},lp=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,nR(e,o)),this.matchTNodeWithReadOption(n,e,Wl(e,n,o,!1,!1))}else i===Rt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Wl(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===B||r===It||r===Rt&&e.type&4)this.addMatch(e.index,-2);else{let o=Wl(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function nR(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function iR(t,n){return t.type&11?Bo(t,n):t.type&4?wd(t,n):null}function rR(t,n,e,i){return e===-1?iR(n,t):e===-2?oR(t,n,i):ds(t,t[X],e,n)}function oR(t,n,e){if(e===B)return Bo(n,t);if(e===Rt)return wd(n,t);if(e===It)return FC(n,t)}function LC(t,n,e,i){let r=n[Un].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let u=o[l];s.push(rR(n,u,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function dp(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=LC(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],u=n[-c];for(let f=tt;f<u.length;f++){let g=u[f];g[Vi]===g[mt]&&dp(g[X],g,l,i)}if(u[Ar]!==null){let f=u[Ar];for(let g=0;g<f.length;g++){let v=f[g];dp(v[X],v,l,i)}}}}}return i}function Gp(t,n){return t[Un].queries[n].queryList}function BC(t,n,e){let i=new xn((e&4)===4);return ty(t,n,i,i.destroy),(n[Un]??=new sp).queries.push(new ap(i))-1}function VC(t,n,e){let i=We();return i.firstCreatePass&&(UC(i,new od(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),BC(i,J(),n)}function jC(t,n,e,i){let r=We();if(r.firstCreatePass){let o=xt();UC(r,new od(n,e,i),o.index),sR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return BC(r,J(),e)}function aR(t){return t.split(",").map(n=>n.trim())}function UC(t,n,e){t.queries===null&&(t.queries=new cp),t.queries.track(new lp(n,e))}function sR(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function qp(t,n){return t.queries.getByIndex(n)}function HC(t,n){let e=t[X],i=qp(e,n);return i.crossesNgTemplate?dp(e,t,n,[]):LC(e,t,i,n)}function zC(t,n,e){let i,r=Oa(()=>{i._dirtyCounter();let o=cR(i,t);if(n&&o===void 0)throw new k(-951,!1);return o});return i=r[$e],i._dirtyCounter=P(0),i._flatValue=void 0,r}function Zp(t){return zC(!0,!1,t)}function Yp(t){return zC(!0,!0,t)}function $C(t,n){let e=t[$e];e._lView=J(),e._queryIndex=n,e._queryList=Gp(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function cR(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ce]&4)return n?void 0:Tt;let r=Gp(e,i),o=HC(e,i);return r.reset(o,_0),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Gn=class{},Dd=class{};var ad=class extends Gn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new id(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Wm(n);this._bootstrapComponents=$0(o.bootstrap),this._r3Injector=Dh(n,e,[{provide:Gn,useValue:this},{provide:xs,useValue:this.componentFactoryResolver},...i],Za(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},sd=class extends Dd{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new ad(this.moduleType,n,[])}};var hs=class extends Gn{injector;componentFactoryResolver=new id(this);instance=null;constructor(n){super();let e=new Ir([...n.providers,{provide:Gn,useValue:this},{provide:xs,useValue:this.componentFactoryResolver}],n.parent||wo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ds(t,n,e=null){return new hs({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var lR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Xm(!1,e.type),r=i.length>0?Ds([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=I({token:t,providedIn:"environment",factory:()=>new t(W(Ae))})}return t})();function S(t){return gs(()=>{let n=WC(t),e=te(D({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===wp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(lR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Dn.Emulated,styles:t.styles||Tt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&gi("NgStandalone"),GC(e);let i=t.dependencies;return e.directiveDefs=Yy(i,dR),e.pipeDefs=Yy(i,P_),e.id=mR(e),e})}function dR(t){return ci(t)||Gm(t)}function ae(t){return gs(()=>({type:t.type,bootstrap:t.bootstrap||Tt,declarations:t.declarations||Tt,imports:t.imports||Tt,exports:t.exports||Tt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function uR(t,n){if(t==null)return Fi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=pd.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function fR(t){if(t==null)return Fi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function O(t){return gs(()=>{let n=WC(t);return GC(n),n})}function Qp(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function WC(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Fi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Tt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:uR(t.inputs,n),outputs:fR(t.outputs),debugInfo:null}}function GC(t){t.features?.forEach(n=>n(t))}function Yy(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function mR(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Kp(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function hR(t){return Object.getPrototypeOf(t.prototype).constructor}function Se(t){let n=hR(t.type),e=!0,i=[t];for(;n;){let r;if(zn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new k(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Nh(t.inputs),a.declaredInputs=Nh(t.declaredInputs),a.outputs=Nh(t.outputs);let s=r.hostBindings;s&&_R(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&vR(t,c),l&&bR(t,l),pR(t,r),N_(t.outputs,r.outputs),zn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Se&&(e=!1)}}n=Object.getPrototypeOf(n)}gR(i)}function pR(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function gR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Oo(r.hostAttrs,e=Oo(e,r.hostAttrs))}}function Nh(t){return t===Fi?{}:t===Tt?[]:t}function vR(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function bR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function _R(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function qC(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=Oo(t.mergedAttrs,t.attrs);let u=t.tView=Ap(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Io(t,!1);let c=CR(e,n,t,i);Pl()&&Vp(e,n,c,t),No(c,n);let l=_C(c,n,c,t);n[i+qe]=l,Np(n,l),eR(l,t,n)}function yR(t,n,e,i,r,o,a,s,c,l,u){let f=e+qe,g;return n.firstCreatePass?(g=Vo(n,f,4,a||null,s||null),hh()&&IC(n,t,g,Xt(n.consts,l),aC),s0(n,g)):g=n.data[f],qC(g,t,n,e,i,r,o,c),Ja(g)&&Up(n,t,g),l!=null&&yd(t,g,u),g}function Fo(t,n,e,i,r,o,a,s,c,l,u){let f=e+qe,g;if(n.firstCreatePass){if(g=Vo(n,f,4,a||null,s||null),l!=null){let v=Xt(n.consts,l);g.localNames=[];for(let w=0;w<v.length;w+=2)g.localNames.push(v[w],-1)}}else g=n.data[f];return qC(g,t,n,e,i,r,o,c),l!=null&&yd(t,g,u),g}function At(t,n,e,i,r,o,a,s){let c=J(),l=We(),u=Xt(l.consts,o);return yR(c,l,t,n,e,i,r,u,void 0,a,s),At}function Ho(t,n,e,i,r,o,a,s){let c=J(),l=We(),u=Xt(l.consts,o);return Fo(c,l,t,n,e,i,r,u,void 0,a,s),Ho}var CR=wR;function wR(t,n,e,i){return Fl(!0),n[He].createComment("")}var Ed=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function vi(t){return typeof t=="function"&&t[$e]!==void 0}var Xp=new x("");function bi(t){return!!t&&typeof t.then=="function"}function Jp(t){return!!t&&typeof t.subscribe=="function"}var ZC=new x("");var eg=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(ZC,{optional:!0})??[];injector=d(ie);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=rt(this.injector,r);if(bi(o))e.push(o);else if(Jp(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Id=new x("");function YC(){cm(()=>{let t="";throw new k(600,t)})}function QC(t){return t.isBoundToModule}var xR=10;var en=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(Jt);afterRenderManager=d(vd);zonelessEnabled=d(os);rootEffectScheduler=d(Bl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new R;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(fi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(K(e=>!e))}constructor(){d(Sn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(Ae);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=ie.NULL){return this._injector.get(F).run(()=>{Pe(Te.BootstrapComponentStart);let a=e instanceof xd;if(!this._injector.get(eg).done){let w="";throw new k(405,w)}let c;a?c=e:c=this._injector.get(xs).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=QC(c)?void 0:this._injector.get(Gn),u=i||c.selector,f=c.create(r,[],u,l),g=f.location.nativeElement,v=f.injector.get(Xp,null);return v?.registerApplication(g),f.onDestroy(()=>{this.detachView(f.hostView),ls(this.components,f),v?.unregisterApplication(g)}),this._loadComponent(f),Pe(Te.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Pe(Te.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(gd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Pe(Te.ChangeDetectionEnd),new k(101,!1);let e=Q(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Q(e),this.afterTick.next(),Pe(Te.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ut,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<xR;){Pe(Te.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Pe(Te.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!es(r))continue;let o=i&&!this.zonelessEnabled?0:1;pC(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>es(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;ls(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Id,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>ls(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new k(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ls(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Sd(t,n){let e=J(),i=Hi();if(ln(e,i,n)){let r=We(),o=So();if(Cd(o,r,e,t,n))Hn(o)&&oC(e,o.index);else{let s=sn(o,e);sC(e[He],s,null,o.value,t,n,null)}}return Sd}function ye(t,n,e,i){let r=J(),o=Hi();if(ln(r,o,n)){let a=We(),s=So();Qk(s,r,t,n,e,i)}return ye}var up=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Ph(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function DR(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){Q(i);let l=n.length-1;for(Q(null);a<=s&&a<=l;){let u=t.at(a),f=n[a],g=Ph(a,u,a,f,e);if(g!==0){g<0&&t.updateValue(a,f),a++;continue}let v=t.at(s),w=n[l],A=Ph(s,v,l,w,e);if(A!==0){A<0&&t.updateValue(s,w),s--,l--;continue}let N=e(a,u),z=e(s,v),Re=e(a,f);if(Object.is(Re,z)){let gt=e(l,w);Object.is(gt,N)?(t.swap(a,s),t.updateValue(s,w),l--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new cd,o??=Ky(t,a,s,e),fp(t,r,a,Re))t.updateValue(a,f),a++,s++;else if(o.has(Re))r.set(N,t.detach(a)),s--;else{let gt=t.create(a,n[a]);t.attach(a,gt),a++,s++}}for(;a<=l;)Qy(t,r,e,a,n[a]),a++}else if(n!=null){Q(i);let l=n[Symbol.iterator]();Q(null);let u=l.next();for(;!u.done&&a<=s;){let f=t.at(a),g=u.value,v=Ph(a,f,a,g,e);if(v!==0)v<0&&t.updateValue(a,g),a++,u=l.next();else{r??=new cd,o??=Ky(t,a,s,e);let w=e(a,g);if(fp(t,r,a,w))t.updateValue(a,g),a++,s++,u=l.next();else if(!o.has(w))t.attach(a,t.create(a,g)),a++,s++,u=l.next();else{let A=e(a,f);r.set(A,t.detach(a)),s--}}}for(;!u.done;)Qy(t,r,e,t.length,u.value),u=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function fp(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Qy(t,n,e,i,r){if(fp(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function Ky(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var cd=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function y(t,n,e,i,r,o,a,s){gi("NgControlFlow");let c=J(),l=We(),u=Xt(l.consts,o);return Fo(c,l,t,n,e,i,r,u,256,a,s),tg}function tg(t,n,e,i,r,o,a,s){gi("NgControlFlow");let c=J(),l=We(),u=Xt(l.consts,o);return Fo(c,l,t,n,e,i,r,u,512,a,s),tg}function C(t,n){gi("NgControlFlow");let e=J(),i=Hi(),r=e[i]!==Wt?e[i]:-1,o=r!==-1?ld(e,qe+r):void 0,a=0;if(ln(e,i,t)){let s=Q(null);try{if(o!==void 0&&CC(o,a),t!==-1){let c=qe+t,l=ld(e,c),u=gp(e[X],c),f=xC(l,u,e),g=Cs(e,u,n,{dehydratedView:f});ws(l,g,a,Po(u,f))}}finally{Q(s)}}else if(o!==void 0){let s=yC(o,a);s!==void 0&&(s[ot]=n)}}var mp=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-tt}};function Ve(t){return t}function dn(t,n){return n}var hp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function le(t,n,e,i,r,o,a,s,c,l,u,f,g){gi("NgControlFlow");let v=J(),w=We(),A=c!==void 0,N=J(),z=s?a.bind(N[Ut][ot]):a,Re=new hp(A,z);N[qe+t]=Re,Fo(v,w,t+1,n,e,i,r,Xt(w.consts,o),256),A&&Fo(v,w,t+2,c,l,u,f,Xt(w.consts,g),512)}var pp=class extends up{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-tt}at(n){return this.getLView(n)[ot].$implicit}attach(n,e){let i=e[Mr];this.needsIndexUpdate||=n!==this.length,ws(this.lContainer,e,n,Po(this.templateTNode,i)),ER(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,IR(this.lContainer,n),SR(this.lContainer,n)}create(n,e){let i=Jl(this.lContainer,this.templateTNode.tView.ssrId);return Cs(this.hostLView,this.templateTNode,new mp(this.lContainer,e,n),{dehydratedView:i})}destroy(n){bd(n[X],n)}updateValue(n,e){this.getLView(n)[ot].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ot].$index=n}getLView(n){return MR(this.lContainer,n)}};function de(t){let n=Q(null),e=$n();try{let i=J(),r=i[X],o=i[e],a=e+1,s=ld(i,a);if(o.liveCollection===void 0){let l=gp(r,a);o.liveCollection=new pp(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(DR(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=Hi(),u=c.length===0;if(ln(i,l,u)){let f=e+2,g=ld(i,f);if(u){let v=gp(r,f),w=xC(g,v,i),A=Cs(i,v,void 0,{dehydratedView:w});ws(g,A,0,Po(v,w))}else r.firstUpdatePass&&_T(g),CC(g,0)}}}finally{Q(n)}}function ld(t,n){return t[n]}function ER(t,n){if(t.length<=tt)return;let e=tt+n,i=t[e],r=i?i[ji]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[li];Mk(o,r),Lr.delete(i[di]),r.detachedLeaveAnimationFns=void 0}}function IR(t,n){if(t.length<=tt)return;let e=tt+n,i=t[e],r=i?i[ji]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function SR(t,n){return ms(t,n)}function MR(t,n){return yC(t,n)}function gp(t,n){return Il(t,n)}function M(t,n,e){let i=J(),r=Hi();if(ln(i,r,n)){let o=We(),a=So();Gk(a,i,t,n,i[He],e)}return M}function vp(t,n,e,i,r){Cd(n,t,e,r?"class":"style",i)}function p(t,n,e,i){let r=J(),o=r[X],a=t+qe,s=o.firstCreatePass?MC(a,r,2,n,aC,hh(),e,i):o.data[a];if(Hn(s)){let c=r[_n].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(NC(l),()=>(Xy(t,n,r,s,i),p))}}return Xy(t,n,r,s,i),p}function Xy(t,n,e,i,r){if(cC(i,e,t,n,KC),Ja(i)){let o=e[X];Up(o,e,i),R0(o,i,e)}r!=null&&yd(e,i)}function h(){let t=We(),n=xt(),e=lC(n);return t.firstCreatePass&&kC(t,e),gh(e)&&vh(),mh(),e.classesWithoutHost!=null&&pM(e)&&vp(t,e,J(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&gM(e)&&vp(t,e,J(),e.stylesWithoutHost,!1),h}function E(t,n,e,i){return p(t,n,e,i),h(),E}function ue(t,n,e,i){let r=J(),o=r[X],a=t+qe,s=o.firstCreatePass?OT(a,o,2,n,e,i):o.data[a];return cC(s,r,t,n,KC),i!=null&&yd(r,s),ue}function he(){let t=xt(),n=lC(t);return gh(n)&&vh(),mh(),he}function Me(t,n,e,i){return ue(t,n,e,i),he(),Me}var KC=(t,n,e,i,r)=>(Fl(!0),B0(n[He],i,gy()));function Mn(){return J()}function je(t,n,e){let i=J(),r=Hi();if(ln(i,r,n)){let o=We(),a=So();rC(a,i,t,n,i[He],e)}return je}var Es="en-US";var kR=Es;function XC(t){typeof t=="string"&&(kR=t.toLowerCase().replace(/_/g,"-"))}function Y(t,n,e){let i=J(),r=We(),o=xt();return TR(r,i,i[He],o,t,n,e),Y}function TR(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=Ao(i,n,o),RC(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let g=u[f],v=u[f+1];c??=Ao(i,n,o),td(i,n,g,v,r,c)}if(l&&l.length)for(let f of l)c??=Ao(i,n,o),td(i,n,f,r,r,c)}}function _(t=1){return py(t)}function RR(t,n){let e=null,i=mk(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?G0(t,o,!0):gk(i,o))return r}return e}function xe(t){let n=J()[Ut][jt];if(!n.projection){let e=t?t.length:1,i=n.projection=U_(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?RR(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function j(t,n=0,e,i,r,o){let a=J(),s=We(),c=i?t+1:null;c!==null&&Fo(a,s,c,i,r,o,null,e);let l=Vo(s,qe+t,16,null,e||null);l.projection===null&&(l.projection=n),yh();let f=!a[Mr]||ph();a[Ut][jt].projection[l.projection]===null&&c!==null?AR(a,s,c):f&&!md(l)&&Vk(s,a,l)}function AR(t,n,e){let i=qe+e,r=n.data[i],o=t[i],a=Jl(o,r.tView.ssrId),s=Cs(t,r,void 0,{dehydratedView:a});ws(o,s,0,Po(r,a))}function St(t,n,e,i){return jC(t,n,e,i),St}function Ye(t,n,e){return VC(t,n,e),Ye}function U(t){let n=J(),e=We(),i=Al();ns(i+1);let r=qp(e,i);if(t.dirty&&K_(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=HC(n,i);t.reset(o,_0),t.notifyOnChanges()}return!0}return!1}function H(){return Gp(J(),Al())}function Md(t,n,e,i,r){return $C(n,jC(t,e,i,r)),Md}function kd(t,n,e,i){return $C(t,VC(n,e,i)),kd}function Td(t=1){ns(Al()+t)}function Zt(t){let n=oy();return Sl(n,qe+t)}function Hl(t,n){return t<<17|n<<2}function Vr(t){return t>>17&32767}function OR(t){return(t&2)==2}function NR(t,n){return t&131071|n<<17}function bp(t){return t|2}function Lo(t){return(t&131068)>>2}function Fh(t,n){return t&-131069|n<<2}function PR(t){return(t&1)===1}function _p(t){return t|1}function FR(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=Vr(a),c=Lo(a);t[i]=e;let l=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||Co(f,u)>0)&&(l=!0)}else u=e;if(r)if(c!==0){let g=Vr(t[s+1]);t[i+1]=Hl(g,s),g!==0&&(t[g+1]=Fh(t[g+1],i)),t[s+1]=NR(t[s+1],i)}else t[i+1]=Hl(s,0),s!==0&&(t[s+1]=Fh(t[s+1],i)),s=i;else t[i+1]=Hl(c,0),s===0?s=i:t[c+1]=Fh(t[c+1],i),c=i;l&&(t[i+1]=bp(t[i+1])),Jy(t,u,i,!0),Jy(t,u,i,!1),LR(n,u,t,i,o),a=Hl(s,c),o?n.classBindings=a:n.styleBindings=a}function LR(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Co(o,n)>=0&&(e[i+1]=_p(e[i+1]))}function Jy(t,n,e,i){let r=t[e+1],o=n===null,a=i?Vr(r):Lo(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];BR(c,n)&&(s=!0,t[a+1]=i?_p(l):bp(l)),a=i?Vr(l):Lo(l)}s&&(t[e+1]=i?bp(r):_p(r))}function BR(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Co(t,n)>=0:!1}var wn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function VR(t){return t.substring(wn.key,wn.keyEnd)}function jR(t){return UR(t),JC(t,ew(t,0,wn.textEnd))}function JC(t,n){let e=wn.textEnd;return e===n?-1:(n=wn.keyEnd=HR(t,wn.key=n,e),ew(t,n,e))}function UR(t){wn.key=0,wn.keyEnd=0,wn.value=0,wn.valueEnd=0,wn.textEnd=t.length}function ew(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function HR(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function nt(t,n,e){return tw(t,n,e,!1),nt}function V(t,n){return tw(t,n,null,!0),V}function bt(t){$R(QR,zR,t,!0)}function zR(t,n){for(let e=jR(n);e>=0;e=JC(n,e))xl(t,VR(n),!0)}function tw(t,n,e,i){let r=J(),o=We(),a=Tl(2);if(o.firstUpdatePass&&iw(o,t,a,i),n!==Wt&&ln(r,a,n)){let s=o.data[$n()];rw(o,s,r,r[He],t,r[a+1]=XR(n,e),i,a)}}function $R(t,n,e,i){let r=We(),o=Tl(2);r.firstUpdatePass&&iw(r,null,o,i);let a=J();if(e!==Wt&&ln(a,o,e)){let s=r.data[$n()];if(ow(s,i)&&!nw(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=bl(c,e||"")),vp(r,s,a,e,i)}else KR(r,s,a,a[He],a[o+1],a[o+1]=YR(t,n,e),i,o)}}function nw(t,n){return n>=t.expandoStartIndex}function iw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[$n()],a=nw(t,e);ow(o,i)&&n===null&&!a&&(n=!1),n=WR(r,o,n,i),FR(r,o,n,e,a,i)}}function WR(t,n,e,i){let r=uy(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Lh(null,t,n,e,i),e=ps(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Lh(r,t,n,e,i),o===null){let c=GR(t,n,i);c!==void 0&&Array.isArray(c)&&(c=Lh(null,t,n,c[1],i),c=ps(c,n.attrs,i),qR(t,n,i,c))}else o=ZR(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function GR(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Lo(i)!==0)return t[Vr(i)]}function qR(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Vr(r)]=i}function ZR(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=ps(i,a,e)}return ps(i,n.attrs,e)}function Lh(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=ps(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function ps(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),xl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function YR(t,n,e){if(e==null||e==="")return Tt;let i=[],r=In(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function QR(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&xl(t,i,e)}function KR(t,n,e,i,r,o,a,s){r===Wt&&(r=Tt);let c=0,l=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let g=c<r.length?r[c+1]:void 0,v=l<o.length?o[l+1]:void 0,w=null,A;u===f?(c+=2,l+=2,g!==v&&(w=f,A=v)):f===null||u!==null&&u<f?(c+=2,w=u):(l+=2,w=f,A=v),w!==null&&rw(t,n,e,i,w,A,a,s),u=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function rw(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],u=PR(l)?e0(c,n,e,r,Lo(l),a):void 0;if(!dd(u)){dd(o)||OR(l)&&(o=e0(c,null,e,r,s,a));let f=ah($n(),e);Uk(i,a,f,r,o)}}function e0(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),u=l?c[1]:c,f=u===null,g=e[r+1];g===Wt&&(g=f?Tt:void 0);let v=f?Dl(g,i):u===i?g:void 0;if(l&&!dd(v)&&(v=Dl(c,i)),dd(v)&&(s=v,a))return s;let w=t[r+1];r=a?Vr(w):Lo(w)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=Dl(c,i))}return s}function dd(t){return t!==void 0}function XR(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Za(In(t)))),t}function ow(t,n){return(t.flags&(n?8:16))!==0}function b(t,n=""){let e=J(),i=We(),r=t+qe,o=i.firstCreatePass?Vo(i,r,1,n,null):i.data[r],a=JR(i,e,o,n);e[r]=a,Pl()&&Vp(i,e,a,o),Io(o,!1)}var JR=(t,n,e,i)=>(Fl(!0),nk(n[He],i));function eA(t,n,e,i=""){return ln(t,Hi(),e)?n+yo(e)+i:Wt}function tA(t,n,e,i,r,o=""){let a=ay(),s=TC(t,a,e,r);return Tl(2),s?n+yo(e)+i+yo(r)+o:Wt}function se(t){return Ce("",t),se}function Ce(t,n,e){let i=J(),r=eA(i,t,n,e);return r!==Wt&&aw(i,$n(),r),Ce}function _i(t,n,e,i,r){let o=J(),a=tA(o,t,n,e,i,r);return a!==Wt&&aw(o,$n(),a),_i}function aw(t,n,e){let i=ah(n,t);ik(t[He],i,e)}function t0(t,n,e){let i=We();i.firstCreatePass&&sw(n,i.data,i.blueprint,zn(t),e)}function sw(t,n,e,i,r){if(t=wt(t),Array.isArray(t))for(let o=0;o<t.length;o++)sw(t[o],n,e,i,r);else{let o=We(),a=J(),s=xt(),c=Er(t)?t:wt(t.provide),l=eh(t),u=s.providerIndexes&1048575,f=s.directiveStart,g=s.providerIndexes>>20;if(Er(t)||!t.multi){let v=new Fr(l,r,L,null),w=Vh(c,n,r?u:u+g,f);w===-1?(Uh(Kl(s,a),o,c),Bh(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(v),a.push(v)):(e[w]=v,a[w]=v)}else{let v=Vh(c,n,u+g,f),w=Vh(c,n,u,u+g),A=v>=0&&e[v],N=w>=0&&e[w];if(r&&!N||!r&&!A){Uh(Kl(s,a),o,c);let z=rA(r?iA:nA,e.length,r,i,l,t);!r&&N&&(e[w].providerFactory=z),Bh(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(z),a.push(z)}else{let z=cw(e[r?w:v],l,!r&&i);Bh(o,t,v>-1?v:w,z)}!r&&i&&N&&e[w].componentProviders++}}}function Bh(t,n,e,i){let r=Er(n),o=q_(n);if(r||o){let c=(o?wt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=l.indexOf(e);u===-1?l.push(e,[i,c]):l[u+1].push(i,c)}else l.push(e,c)}}}function cw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Vh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function nA(t,n,e,i,r){return yp(this.multi,[])}function iA(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=ds(i,i[X],this.providerFactory.index,r);a=c.slice(0,s),yp(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],yp(o,a);return a}function yp(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function rA(t,n,e,i,r,o){let a=new Fr(t,e,L,null);return a.multi=[],a.index=n,a.componentProviders=0,cw(a,r,i&&!e),a}function ke(t,n){return e=>{e.providersResolver=(i,r)=>t0(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>t0(i,r?r(n):n,!0))}}function un(t,n){let e=ts()+t,i=J();return i[e]===Wt?Wp(i,e,n()):NT(i,e)}function Xe(t,n,e){return dw(J(),ts(),t,n,e)}function lw(t,n){let e=t[n];return e===Wt?void 0:e}function dw(t,n,e,i,r,o){let a=n+e;return ln(t,a,r)?Wp(t,a+1,o?i.call(o,r):i(r)):lw(t,a+1)}function oA(t,n,e,i,r,o,a){let s=n+e;return TC(t,s,r,o)?Wp(t,s+2,a?i.call(a,r,o):i(r,o)):lw(t,s+2)}function kn(t,n){let e=We(),i,r=t+qe;e.firstCreatePass?(i=aA(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Ai(i.type,!0)),a,s=Lt(L);try{let c=Ql(!1),l=o();return Ql(c),sh(e,J(),r,l),l}finally{Lt(s)}}function aA(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Is(t,n,e){let i=t+qe,r=J(),o=Sl(r,i);return uw(r,i)?dw(r,ts(),n,o.transform,e,o):o.transform(e)}function Hr(t,n,e,i){let r=t+qe,o=J(),a=Sl(o,r);return uw(o,r)?oA(o,ts(),n,a.transform,e,i,a):a.transform(e,i)}function uw(t,n){return t[X].data[n].pure}function Rd(t,n){return wd(t,n)}var ud=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},ng=(()=>{class t{compileModuleSync(e){return new sd(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Wm(e),o=$0(r.declarations).reduce((a,s)=>{let c=ci(s);return c&&a.push(new Br(c)),a},[]);return new ud(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fw=(()=>{class t{applicationErrorHandler=d(Jt);appRef=d(en);taskService=d(fi);ngZone=d(F);zonelessEnabled=d(os);tracing=d(Sn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ge;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ga):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(kh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?yy:Eh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ga+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mw(){return[{provide:jn,useExisting:fw},{provide:F,useClass:qa},{provide:os,useValue:!0}]}function sA(){return typeof $localize<"u"&&$localize.locale||Es}var Ad=new x("",{factory:()=>d(Ad,{optional:!0,skipSelf:!0})||sA()});function q(t){return k_(t)}function $(t,n){return Oa(t,n?.equal)}var cA=t=>t;function qn(t,n){if(typeof t=="function"){let e=Em(t,cA,n?.equal);return hw(e,n?.debugName)}else{let e=Em(t.source,t.computation,t.equal);return hw(e,t.debugName)}}function hw(t,n){let e=t[$e],i=t;return i.set=r=>S_(e,r),i.update=r=>M_(e,r),i.asReadonly=Ll.bind(t),i}var Cw=Symbol("InputSignalNode#UNSET"),EA=te(D({},Na),{transformFn:void 0,applyValueToInputSignal(t,n){dr(t,n)}});function ww(t,n){let e=Object.create(EA);e.value=t,e.transformFn=n?.transform;function i(){if(Ri(e),e.value===Cw){let r=null;throw new k(-950,r)}return e.value}return i[$e]=e,i}var yi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>vs(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function pw(t,n){return ww(t,n)}function IA(t){return ww(Cw,t)}var pe=(pw.required=IA,pw);function gw(t,n){return Zp(n)}function SA(t,n){return Yp(n)}var Ms=(gw.required=SA,gw);function vw(t,n){return Zp(n)}function MA(t,n){return Yp(n)}var xw=(vw.required=MA,vw);var rg=new x(""),kA=new x("");function Ss(t){return!t.moduleRef}function TA(t){let n=Ss(t)?t.r3Injector:t.moduleRef.injector,e=n.get(F);return e.run(()=>{Ss(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Jt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Ss(t)){let o=()=>n.destroy(),a=t.platformInjector.get(rg);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(rg);a.add(o),t.moduleRef.onDestroy(()=>{ls(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return AA(i,e,()=>{let o=n.get(fi),a=o.add(),s=n.get(eg);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(Ad,Es);if(XC(c||Es),!n.get(kA,!0))return Ss(t)?n.get(en):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Ss(t)){let u=n.get(en);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return RA?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var RA;function AA(t,n,e){try{let i=e();return bi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Od=null;function OA(t=[],n){return ie.create({name:n,providers:[{provide:Ka,useValue:"platform"},{provide:rg,useValue:new Set([()=>Od=null])},...t]})}function NA(t=[]){if(Od)return Od;let n=OA(t);return Od=n,YC(),PA(n),n}function PA(t){let n=t.get(fd,null);rt(t,()=>{n?.forEach(e=>e())})}var FA=1e4;var A7=FA-1e3;var Qe=(()=>{class t{static __NG_ELEMENT_ID__=LA}return t})();function LA(t){return BA(xt(),J(),(t&16)===16)}function BA(t,n,e){if(Hn(t)&&!e){let i=cn(t.index,n);return new $i(i,i)}else if(t.type&175){let i=n[Ut];return new $i(i,n)}return null}var og=class{supports(n){return n instanceof Map||$p(n)}create(){return new ag}},ag=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||$p(n)))throw new k(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new sg(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},sg=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function bw(){return new Nd([new og])}var Nd=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:bw});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=d(t,{optional:!0,skipSelf:!0});return t.create(e,i||bw())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new k(901,!1)}}return t})();function Dw(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Pe(Te.BootstrapApplicationStart);try{let o=r?.injector??NA(i),a=[mw(),wy,...e||[]],s=new hs({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return TA({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Pe(Te.BootstrapApplicationEnd)}}function ee(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Gi(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var ig=Symbol("NOT_SET"),Ew=new Set,VA=te(D({},Na),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:ig,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==ig&&!lr(this))return this.signal;try{for(let r of this.cleanup??Ew)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Fn(this),i;try{i=this.userFn.apply(null,n)}finally{ni(this,e)}return(this.value===ig||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),cg=class extends us{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Dt),a),this.scheduler=r;for(let s of Fp){let c=e[s];if(c===void 0)continue;let l=Object.create(VA);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(Ri(l),l.value),l.signal[$e]=l,l.registerCleanupFn=u=>(l.cleanup??=new Set).add(u),this.nodes[s]=l,this.hooks[s]=u=>l.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??Ew)e()}finally{ii(n)}}};function Pd(t,n){let e=n?.injector??d(ie),i=e.get(jn),r=e.get(vd),o=e.get(Sn,null,{optional:!0});r.impl??=e.get(Lp);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Mo,null,{optional:!0}),c=new cg(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function Fd(t,n){let e=ci(t),i=n.elementInjector||wo();return new Br(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var Iw=null;function fn(){return Iw}function lg(t){Iw??=t}var ks=class{},Ld=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>d(Sw),providedIn:"platform"})}return t})();var Sw=(()=>{class t extends Ld{_location;_history;_doc=d(oe);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return fn().getBaseHref(this._doc)}onPopState(e){let i=fn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=fn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Tw(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Mw(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function qi(t){return t&&t[0]!=="?"?`?${t}`:t}var zo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>d(UA),providedIn:"root"})}return t})(),jA=new x(""),UA=(()=>{class t extends zo{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Tw(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+qi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+qi(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+qi(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(W(Ld),W(jA,8))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zi=(()=>{class t{_subject=new R;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=$A(Mw(kw(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+qi(i))}normalize(e){return t.stripTrailingSlash(zA(this._basePath,kw(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+qi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+qi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=qi;static joinWithSlash=Tw;static stripTrailingSlash=Mw;static \u0275fac=function(i){return new(i||t)(W(zo))};static \u0275prov=I({token:t,factory:()=>HA(),providedIn:"root"})}return t})();function HA(){return new Zi(W(zo))}function zA(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function kw(t){return t.replace(/\/index.html$/,"")}function $A(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var dg=/\s+/,Rw=[],zr=(()=>{class t{_ngEl;_renderer;initialClasses=Rw;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(dg):Rw}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(dg):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(dg).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(L(B),L(Fe))};static \u0275dir=O({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var ug=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:En.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(L(B),L(Nd),L(Fe))};static \u0275dir=O({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),fg=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(ie);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(L(It))};static \u0275dir=O({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[De]})}return t})();function GA(t,n){return{key:t,value:n}}var Ci=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=Aw;transform(e,i=Aw){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(GA(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(L(Nd,16))};static \u0275pipe=Qp({name:"keyvalue",type:t,pure:!1})}return t})();function Aw(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Bd(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var $r=class{};var mg="browser";function Ow(t){return t===mg}var Ts=class{_doc;constructor(n){this._doc=n}manager},Vd=(()=>{class t extends Ts{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Hd=new x(""),vg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Vd));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Vd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new k(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(W(Hd),W(F))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),hg="ng-app-id";function Nw(t){for(let n of t)n.remove()}function Pw(t,n){let e=n.createElement("style");return e.textContent=t,e}function QA(t,n,e,i){let r=t.head?.querySelectorAll(`style[${hg}="${n}"],link[${hg}="${n}"]`);if(r)for(let o of r)o.removeAttribute(hg),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function gg(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var bg=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,QA(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,Pw);i?.forEach(r=>this.addUsage(r,this.external,gg))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(Nw(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Nw(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,Pw(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,gg(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(W(oe),W(Wi),W(Ur,8),W(jr))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),pg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},_g=/%COMP%/g;var Lw="%COMP%",KA=`_nghost-${Lw}`,XA=`_ngcontent-${Lw}`,JA=!0,e1=new x("",{factory:()=>JA});function t1(t){return XA.replace(_g,t)}function n1(t){return KA.replace(_g,t)}function Bw(t,n){return n.map(e=>e.replace(_g,t))}var yg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Rs(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Ud?r.applyToHost(e):r instanceof As&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Dn.Emulated:o=new Ud(c,l,i,this.appId,u,a,s,f);break;case Dn.ShadowDom:return new jd(c,e,i,a,s,this.nonce,f,l);case Dn.ExperimentalIsolatedShadowDom:return new jd(c,e,i,a,s,this.nonce,f);default:o=new As(c,l,i,u,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(W(vg),W(bg),W(Wi),W(e1),W(oe),W(F),W(Ur),W(Sn,8))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Rs=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(pg[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Fw(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(Fw(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new k(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=pg[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=pg[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(En.DashCase|En.Important)?n.style.setProperty(e,i,r&En.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&En.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=fn().getGlobalEventTarget(this.doc,n),!n))throw new k(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Fw(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var jd=class extends Rs{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=Bw(i.id,l);for(let f of l){let g=document.createElement("style");a&&g.setAttribute("nonce",a),g.textContent=f,this.shadowRoot.appendChild(g)}let u=i.getExternalStyles?.();if(u)for(let f of u){let g=gg(f,r);a&&g.setAttribute("nonce",a),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},As=class extends Rs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?Bw(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Lr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ud=class extends As{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=t1(l),this.hostAttr=n1(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var zd=class t extends ks{supportsDOMEvents=!0;static makeCurrent(){lg(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=i1();return e==null?null:r1(e)}resetBaseElement(){Os=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Bd(document.cookie,n)}},Os=null;function i1(){return Os=Os||document.head.querySelector("base"),Os?Os.getAttribute("href"):null}function r1(t){return new URL(t,document.baseURI).pathname}var o1=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Vw=["alt","control","meta","shift"],a1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},s1={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},jw=(()=>{class t extends Ts{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>fn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),Vw.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=a1[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Vw.forEach(a=>{if(a!==r){let s=s1[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();async function Cg(t,n,e){let i=D({rootComponent:t},c1(n,e));return Dw(i)}function c1(t,n){return{platformRef:n?.platformRef,appProviders:[...m1,...t?.providers??[]],platformProviders:f1}}function l1(){zd.makeCurrent()}function d1(){return new Bt}function u1(){return xp(document),document}var f1=[{provide:jr,useValue:mg},{provide:fd,useValue:l1,multi:!0},{provide:oe,useFactory:u1}];var m1=[{provide:Ka,useValue:"root"},{provide:Bt,useFactory:d1},{provide:Hd,useClass:Vd,multi:!0},{provide:Hd,useClass:jw,multi:!0},yg,bg,vg,{provide:ut,useExisting:yg},{provide:$r,useClass:o1},[]];var Yi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var xg=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Dg=class{encodeKey(n){return Uw(n)}encodeValue(n){return Uw(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function h1(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var p1=/%(\d[a-f0-9])/gi,g1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Uw(t){return encodeURIComponent(t).replace(p1,(n,e)=>g1[e]??n)}function $d(t){return`${t}`}var wi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Dg,n.fromString){if(n.fromObject)throw new k(2805,!1);this.map=h1(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map($d):[$d(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push($d(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf($d(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function v1(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Hw(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function zw(t){return typeof Blob<"u"&&t instanceof Blob}function $w(t){return typeof FormData<"u"&&t instanceof FormData}function b1(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Ww="Content-Type",Gw="Accept",qw="text/plain",Zw="application/json",_1=`${Zw}, ${qw}, */*`,$o=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(v1(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new k(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Yi,this.context??=new xg,!this.params)this.params=new wi,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Hw(this.body)||zw(this.body)||$w(this.body)||b1(this.body)?this.body:this.body instanceof wi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||$w(this.body)?null:zw(this.body)?this.body.type||null:Hw(this.body)?null:typeof this.body=="string"?qw:this.body instanceof wi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Zw:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,g=n.integrity||this.integrity,v=n.referrerPolicy||this.referrerPolicy,w=n.transferCache??this.transferCache,A=n.timeout??this.timeout,N=n.body!==void 0?n.body:this.body,z=n.withCredentials??this.withCredentials,Re=n.reportProgress??this.reportProgress,gt=n.headers||this.headers,vt=n.params||this.params,ka=n.context??this.context;return n.setHeaders!==void 0&&(gt=Object.keys(n.setHeaders).reduce((Ta,or)=>Ta.set(or,n.setHeaders[or]),gt)),n.setParams&&(vt=Object.keys(n.setParams).reduce((Ta,or)=>Ta.set(or,n.setParams[or]),vt)),new t(e,i,N,{params:vt,headers:gt,context:ka,reportProgress:Re,responseType:r,withCredentials:z,transferCache:w,keepalive:o,cache:s,priority:a,timeout:A,mode:c,redirect:l,credentials:u,referrer:f,integrity:g,referrerPolicy:v})}},Wr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Wr||{}),Ns=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Yi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Eg=class t extends Ns{constructor(n={}){super(n)}type=Wr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ps=class t extends Ns{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Wr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Wo=class extends Ns{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},y1=200,C1=204;var w1=/^\)\]\}',?\n/;var x1=(()=>{class t{xhrFactory;tracingService=d(Sn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new k(-2800,!1);let i=this.xhrFactory;return Z(null).pipe(lt(()=>new ne(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((N,z)=>a.setRequestHeader(N,z.join(","))),e.headers.has(Gw)||a.setRequestHeader(Gw,_1),!e.headers.has(Ww)){let N=e.detectContentTypeHeader();N!==null&&a.setRequestHeader(Ww,N)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let N=e.responseType.toLowerCase();a.responseType=N!=="json"?N:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let N=a.statusText||"OK",z=new Yi(a.getAllResponseHeaders()),Re=a.responseURL||e.url;return c=new Eg({headers:z,status:a.status,statusText:N,url:Re}),c},u=this.maybePropagateTrace(()=>{let{headers:N,status:z,statusText:Re,url:gt}=l(),vt=null;z!==C1&&(vt=typeof a.response>"u"?a.responseText:a.response),z===0&&(z=vt?y1:0);let ka=z>=200&&z<300;if(e.responseType==="json"&&typeof vt=="string"){let Ta=vt;vt=vt.replace(w1,"");try{vt=vt!==""?JSON.parse(vt):null}catch(or){vt=Ta,ka&&(ka=!1,vt={error:or,text:vt})}}ka?(o.next(new Ps({body:vt,headers:N,status:z,statusText:Re,url:gt||void 0})),o.complete()):o.error(new Wo({error:vt,headers:N,status:z,statusText:Re,url:gt||void 0}))}),f=this.maybePropagateTrace(N=>{let{url:z}=l(),Re=new Wo({error:N,status:a.status||0,statusText:a.statusText||"Unknown Error",url:z||void 0});o.error(Re)}),g=f;e.timeout&&(g=this.maybePropagateTrace(N=>{let{url:z}=l(),Re=new Wo({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:z||void 0});o.error(Re)}));let v=!1,w=this.maybePropagateTrace(N=>{v||(o.next(l()),v=!0);let z={type:Wr.DownloadProgress,loaded:N.loaded};N.lengthComputable&&(z.total=N.total),e.responseType==="text"&&a.responseText&&(z.partialText=a.responseText),o.next(z)}),A=this.maybePropagateTrace(N=>{let z={type:Wr.UploadProgress,loaded:N.loaded};N.lengthComputable&&(z.total=N.total),o.next(z)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",g),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",w),s!==null&&a.upload&&a.upload.addEventListener("progress",A)),a.send(s),o.next({type:Wr.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",g),e.reportProgress&&(a.removeEventListener("progress",w),s!==null&&a.upload&&a.upload.removeEventListener("progress",A)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(W($r))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function D1(t,n){return n(t)}function E1(t,n,e){return(i,r)=>rt(e,()=>n(i,o=>t(o,r)))}var I1=new x("",{factory:()=>[]}),Yw=new x(""),S1=new x("",{factory:()=>!0});var M1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(x1),r},providedIn:"root"})}return t})();var k1=(()=>{class t{backend;injector;chain=null;pendingTasks=d(as);contributeToStability=d(S1);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(I1),...this.injector.get(Yw,[])]));this.chain=i.reduceRight((r,o)=>E1(r,o,this.injector),D1)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Cr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(W(M1),W(Ae))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),T1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(k1),r},providedIn:"root"})}return t})();function wg(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var xi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof $o)o=e;else{let c;r.headers instanceof Yi?c=r.headers:c=new Yi(r.headers);let l;r.params&&(r.params instanceof wi?l=r.params:l=new wi({fromObject:r.params})),o=new $o(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Z(o).pipe(go(c=>this.handler.handle(c)));if(e instanceof $o||r.observe==="events")return a;let s=a.pipe(Ie(c=>c instanceof Ps));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(K(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new k(2806,!1);return c.body}));case"blob":return s.pipe(K(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new k(2807,!1);return c.body}));case"text":return s.pipe(K(c=>{if(c.body!==null&&typeof c.body!="string")throw new k(2808,!1);return c.body}));default:return s.pipe(K(c=>c.body))}case"response":return s;default:throw new k(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new wi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,wg(r,i))}post(e,i,r={}){return this.request("POST",e,wg(r,i))}put(e,i,r={}){return this.request("PUT",e,wg(r,i))}static \u0275fac=function(i){return new(i||t)(W(T1))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Qw=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(R1),r},providedIn:"root"})}return t})(),R1=(()=>{class t extends Sg{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Et.NONE:return i;case Et.HTML:return hi(i,"HTML")?In(i):kp(this._doc,String(i)).toString();case Et.STYLE:return hi(i,"Style")?In(i):i;case Et.SCRIPT:if(hi(i,"Script"))return In(i);throw new k(5200,!1);case Et.URL:return hi(i,"URL")?In(i):_s(String(i));case Et.RESOURCE_URL:if(hi(i,"ResourceURL"))return In(i);throw new k(5201,!1);default:throw new k(5202,!1)}}bypassSecurityTrustHtml(e){return Dp(e)}bypassSecurityTrustStyle(e){return Ep(e)}bypassSecurityTrustScript(e){return Ip(e)}bypassSecurityTrustUrl(e){return Sp(e)}bypassSecurityTrustResourceUrl(e){return Mp(e)}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fe="primary",Ys=Symbol("RouteTitle"),Ag=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function qr(t){return new Ag(t)}function Mg(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function ox(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Mg(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Mg(o,t.slice(0,o.length),s)||!Mg(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Qd(t){return new Promise((n,e)=>{t.pipe(oi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function A1(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Zn(t[e],n[e]))return!1;return!0}function Zn(t,n){let e=t?Og(t):void 0,i=n?Og(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!ax(t[r],n[r]))return!1;return!0}function Og(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ax(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function O1(t){return t.length>0?t[t.length-1]:null}function Qr(t){return Ba(t)?t:bi(t)?Ge(Promise.resolve(t)):Z(t)}function sx(t){return Ba(t)?Qd(t):Promise.resolve(t)}var N1={exact:dx,subset:ux},cx={exact:P1,subset:F1,ignored:()=>!0},lx={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ng={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Xw(t,n,e){return N1[e.paths](t.root,n.root,e.matrixParams)&&cx[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function P1(t,n){return Zn(t,n)}function dx(t,n,e){if(!Gr(t.segments,n.segments)||!qd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!dx(t.children[i],n.children[i],e))return!1;return!0}function F1(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>ax(t[e],n[e]))}function ux(t,n,e){return fx(t,n,n.segments,e)}function fx(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Gr(r,e)||n.hasChildren()||!qd(r,e,i))}else if(t.segments.length===e.length){if(!Gr(t.segments,e)||!qd(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!ux(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Gr(t.segments,r)||!qd(t.segments,r,i)||!t.children[fe]?!1:fx(t.children[fe],n,o,i)}}function qd(t,n,e){return n.every((i,r)=>cx[e](t[r].parameters,i.parameters))}var nn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Oe([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=qr(this.queryParams),this._queryParamMap}toString(){return V1.serialize(this)}},Oe=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Zd(this)}},Qi=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=qr(this.parameters),this._parameterMap}toString(){return hx(this)}};function L1(t,n){return Gr(t,n)&&t.every((e,i)=>Zn(e.parameters,n[i].parameters))}function Gr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function B1(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===fe&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==fe&&(e=e.concat(n(r,i)))}),e}var ea=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new Ki,providedIn:"root"})}return t})(),Ki=class{parse(n){let e=new Fg(n);return new nn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Fs(n.root,!0)}`,i=H1(n.queryParams),r=typeof n.fragment=="string"?`#${j1(n.fragment)}`:"";return`${e}${i}${r}`}},V1=new Ki;function Zd(t){return t.segments.map(n=>hx(n)).join("/")}function Fs(t,n){if(!t.hasChildren())return Zd(t);if(n){let e=t.children[fe]?Fs(t.children[fe],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==fe&&i.push(`${r}:${Fs(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=B1(t,(i,r)=>r===fe?[Fs(t.children[fe],!1)]:[`${r}:${Fs(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[fe]!=null?`${Zd(t)}/${e[0]}`:`${Zd(t)}/(${e.join("//")})`}}function mx(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wd(t){return mx(t).replace(/%3B/gi,";")}function j1(t){return encodeURI(t)}function Pg(t){return mx(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Yd(t){return decodeURIComponent(t)}function Jw(t){return Yd(t.replace(/\+/g,"%20"))}function hx(t){return`${Pg(t.path)}${U1(t.parameters)}`}function U1(t){return Object.entries(t).map(([n,e])=>`;${Pg(n)}=${Pg(e)}`).join("")}function H1(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Wd(e)}=${Wd(r)}`).join("&"):`${Wd(e)}=${Wd(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var z1=/^[^\/()?;#]+/;function kg(t){let n=t.match(z1);return n?n[0]:""}var $1=/^[^\/()?;=#]+/;function W1(t){let n=t.match($1);return n?n[0]:""}var G1=/^[^=?&#]+/;function q1(t){let n=t.match(G1);return n?n[0]:""}var Z1=/^[^&#]+/;function Y1(t){let n=t.match(Z1);return n?n[0]:""}var Fg=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Oe([],{}):new Oe([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new k(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[fe]=new Oe(e,i)),r}parseSegment(){let n=kg(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new k(4009,!1);return this.capture(n),new Qi(Yd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=W1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=kg(this.remaining);r&&(i=r,this.capture(i))}n[Yd(e)]=Yd(i)}parseQueryParam(n){let e=q1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=Y1(this.remaining);a&&(i=a,this.capture(i))}let r=Jw(e),o=Jw(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=kg(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new k(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=fe);let s=this.parseChildren(e+1);i[a??fe]=Object.keys(s).length===1&&s[fe]?s[fe]:new Oe([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new k(4011,!1)}};function px(t){return t.segments.length>0?new Oe([],{[fe]:t}):t}function gx(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=gx(r);if(i===fe&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Oe(t.segments,n);return Q1(e)}function Q1(t){if(t.numberOfChildren===1&&t.children[fe]){let n=t.children[fe];return new Oe(t.segments.concat(n.segments),n.children)}return t}function Xi(t){return t instanceof nn}function vx(t,n,e=null,i=null,r=new Ki){let o=bx(t);return _x(o,n,e,i,r)}function bx(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new Oe(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=px(i);return n??r}function _x(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Tg(o,o,o,e,i,r);let a=K1(n);if(a.toRoot())return Tg(o,o,new Oe([],{}),e,i,r);let s=X1(a,o,t),c=s.processChildren?Bs(s.segmentGroup,s.index,a.commands):Cx(s.segmentGroup,s.index,a.commands);return Tg(o,s.segmentGroup,c,e,i,r)}function Kd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Us(t){return typeof t=="object"&&t!=null&&t.outlets}function ex(t,n,e){t||="\u0275";let i=new nn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Tg(t,n,e,i,r,o){let a={};for(let[l,u]of Object.entries(i??{}))a[l]=Array.isArray(u)?u.map(f=>ex(l,f,o)):ex(l,u,o);let s;t===n?s=e:s=yx(t,n,e);let c=px(gx(s));return new nn(c,a,r)}function yx(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=yx(o,n,e)}),new Oe(t.segments,i)}var Xd=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Kd(i[0]))throw new k(4003,!1);let r=i.find(Us);if(r&&r!==O1(i))throw new k(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function K1(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Xd(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Xd(e,n,i)}var qo=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function X1(t,n,e){if(t.isAbsolute)return new qo(n,!0,0);if(!e)return new qo(n,!1,NaN);if(e.parent===null)return new qo(e,!0,0);let i=Kd(t.commands[0])?0:1,r=e.segments.length-1+i;return J1(e,r,t.numberOfDoubleDots)}function J1(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new k(4005,!1);r=i.segments.length}return new qo(i,!1,r-o)}function eO(t){return Us(t[0])?t[0].outlets:{[fe]:t}}function Cx(t,n,e){if(t??=new Oe([],{}),t.segments.length===0&&t.hasChildren())return Bs(t,n,e);let i=tO(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Oe(t.segments.slice(0,i.pathIndex),{});return o.children[fe]=new Oe(t.segments.slice(i.pathIndex),t.children),Bs(o,0,r)}else return i.match&&r.length===0?new Oe(t.segments,{}):i.match&&!t.hasChildren()?Lg(t,n,e):i.match?Bs(t,0,r):Lg(t,n,e)}function Bs(t,n,e){if(e.length===0)return new Oe(t.segments,{});{let i=eO(e),r={};if(Object.keys(i).some(o=>o!==fe)&&t.children[fe]&&t.numberOfChildren===1&&t.children[fe].segments.length===0){let o=Bs(t.children[fe],n,e);return new Oe(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Cx(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Oe(t.segments,r)}}function tO(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Us(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!nx(c,l,a))return o;i+=2}else{if(!nx(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Lg(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Us(o)){let c=nO(o.outlets);return new Oe(i,c)}if(r===0&&Kd(e[0])){let c=t.segments[n];i.push(new Qi(c.path,tx(e[0]))),r++;continue}let a=Us(o)?o.outlets[fe]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Kd(s)?(i.push(new Qi(a,tx(s))),r+=2):(i.push(new Qi(a,{})),r++)}return new Oe(i,{})}function nO(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Lg(new Oe([],{}),0,i))}),n}function tx(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function nx(t,n,e){return t==e.path&&Zn(n,e.parameters)}var Vs="imperative",_t=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(_t||{}),rn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Zr=class extends rn{type=_t.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Yn=class extends rn{urlAfterRedirects;type=_t.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ot=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ot||{}),Hs=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Hs||{}),mn=class extends rn{reason;code;type=_t.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function wx(t){return t instanceof mn&&(t.code===Ot.Redirect||t.code===Ot.SupersededByNewNavigation)}var Ei=class extends rn{reason;code;type=_t.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Yr=class extends rn{error;target;type=_t.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},zs=class extends rn{urlAfterRedirects;state;type=_t.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jd=class extends rn{urlAfterRedirects;state;type=_t.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},eu=class extends rn{urlAfterRedirects;state;shouldActivate;type=_t.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},tu=class extends rn{urlAfterRedirects;state;type=_t.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nu=class extends rn{urlAfterRedirects;state;type=_t.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},iu=class{route;type=_t.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ru=class{route;type=_t.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ou=class{snapshot;type=_t.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},au=class{snapshot;type=_t.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},su=class{snapshot;type=_t.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cu=class{snapshot;type=_t.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Yo=class{},$s=class{},Qo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function iO(t){return!(t instanceof Yo)&&!(t instanceof Qo)&&!(t instanceof $s)}var lu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ta(this.rootInjector)}},ta=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new lu(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(W(Ae))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),du=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Bg(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Bg(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Vg(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Vg(n,this._root).map(e=>e.value)}};function Bg(t,n){if(t===n.value)return n;for(let e of n.children){let i=Bg(t,e);if(i)return i}return null}function Vg(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Vg(t,e);if(i.length)return i.unshift(n),i}return[]}var tn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Go(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Ws=class extends du{snapshot;constructor(n,e){super(n),this.snapshot=e,Zg(this,n)}toString(){return this.snapshot.toString()}};function xx(t,n){let e=rO(t,n),i=new st([new Qi("",{})]),r=new st({}),o=new st({}),a=new st({}),s=new st(""),c=new Mt(i,r,a,s,o,fe,t,e.root);return c.snapshot=e.root,new Ws(new tn(c,[]),e)}function rO(t,n){let e={},i={},r={},a=new Ko([],e,r,"",i,fe,t,null,{},n);return new Gs("",new tn(a,[]))}var Mt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(K(l=>l[Ys]))??Z(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(K(n=>qr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(K(n=>qr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function qg(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:D(D({},n.params),t.params),data:D(D({},n.data),t.data),resolve:D(D(D(D({},t.data),n.data),r?.data),t._resolvedData)}:i={params:D({},t.params),data:D({},t.data),resolve:D(D({},t.data),t._resolvedData??{})},r&&Ex(r)&&(i.resolve[Ys]=r.title),i}var Ko=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ys]}constructor(n,e,i,r,o,a,s,c,l,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=qr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=qr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Gs=class extends du{url;constructor(n,e){super(e),this.url=n,Zg(this,e)}toString(){return Dx(this._root)}};function Zg(t,n){n.value._routerState=t,n.children.forEach(e=>Zg(t,e))}function Dx(t){let n=t.children.length>0?` { ${t.children.map(Dx).join(", ")} } `:"";return`${t.value}${n}`}function Rg(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Zn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Zn(n.params,e.params)||t.paramsSubject.next(e.params),A1(n.url,e.url)||t.urlSubject.next(e.url),Zn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function jg(t,n){let e=Zn(t.params,n.params)&&L1(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||jg(t.parent,n.parent))}function Ex(t){return typeof t.title=="string"||t.title===null}var Ix=new x(""),Qs=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=fe;activateEvents=new G;deactivateEvents=new G;attachEvents=new G;detachEvents=new G;routerOutletData=pe();parentContexts=d(ta);location=d(It);changeDetector=d(Qe);inputBinder=d(hu,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new k(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new k(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new k(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new k(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Ug(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[De]})}return t})(),Ug=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Mt?this.route:n===ta?this.childContexts:n===Ix?this.outletData:this.parent.get(n,e)}},hu=new x("");var Yg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&E(0,"router-outlet")},dependencies:[Qs],encapsulation:2})}return t})();function Qg(t){let n=t.children&&t.children.map(Qg),e=n?te(D({},t),{children:n}):D({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==fe&&(e.component=Yg),e}function oO(t,n,e){let i=qs(t,n._root,e?e._root:void 0);return new Ws(i,n)}function qs(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=aO(t,n,e);return new tn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>qs(t,s)),a}}let i=sO(n.value),r=n.children.map(o=>qs(t,o));return new tn(i,r)}}function aO(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return qs(t,i,r);return qs(t,i)})}function sO(t){return new Mt(new st(t.url),new st(t.params),new st(t.queryParams),new st(t.fragment),new st(t.data),t.outlet,t.component,t)}var Xo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Sx="ngNavigationCancelingError";function uu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Xi(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Mx(!1,Ot.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Mx(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Sx]=!0,e.cancellationCode=n,e}function cO(t){return kx(t)&&Xi(t.url)}function kx(t){return!!t&&t[Sx]}var Hg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Rg(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Go(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Go(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Go(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Go(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new cu(o.value.snapshot))}),n.children.length&&this.forwardEvent(new au(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Rg(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Rg(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},fu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Zo=class{component;route;constructor(n,e){this.component=n,this.route=e}};function lO(t,n,e){let i=t._root,r=n?n._root:null;return Ls(i,r,e,[i.value])}function dO(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function na(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Vm(t)?t:n.get(t):i}function Ls(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Go(n);return t.children.forEach(a=>{uO(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>js(s,e.getContext(a),r)),r}function uO(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=fO(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new fu(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ls(t,n,s?s.children:null,i,r):Ls(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Zo(s.outlet.component,a))}else a&&js(n,s,r),r.canActivateChecks.push(new fu(i)),o.component?Ls(t,null,s?s.children:null,i,r):Ls(t,null,e,i,r);return r}function fO(t,n,e){if(typeof e=="function")return rt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Gr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Gr(t.url,n.url)||!Zn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!jg(t,n)||!Zn(t.queryParams,n.queryParams);default:return!jg(t,n)}}function js(t,n,e){let i=Go(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?js(a,n.children.getContext(o),e):js(a,null,e):js(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Zo(n.outlet.component,r)):e.canDeactivateChecks.push(new Zo(null,r)):e.canDeactivateChecks.push(new Zo(null,r))}function Ks(t){return typeof t=="function"}function mO(t){return typeof t=="boolean"}function hO(t){return t&&Ks(t.canLoad)}function pO(t){return t&&Ks(t.canActivate)}function gO(t){return t&&Ks(t.canActivateChild)}function vO(t){return t&&Ks(t.canDeactivate)}function bO(t){return t&&Ks(t.canMatch)}function Tx(t){return t instanceof vr||t?.name==="EmptyError"}var Gd=Symbol("INITIAL_VALUE");function Jo(){return lt(t=>Va(t.map(n=>n.pipe(ct(1),Ct(Gd)))).pipe(K(n=>{for(let e of n)if(e!==!0){if(e===Gd)return Gd;if(e===!1||_O(e))return e}return!0}),Ie(n=>n!==Gd),ct(1)))}function _O(t){return Xi(t)||t instanceof Xo}function Rx(t){return t.aborted?Z(void 0).pipe(ct(1)):new ne(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Ax(t){return Be(Rx(t))}function yO(t){return yt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Z(te(D({},n),{guardsResult:!0})):CO(o,e,i).pipe(yt(a=>a&&mO(a)?wO(e,r,t):Z(a)),K(a=>te(D({},n),{guardsResult:a})))})}function CO(t,n,e){return Ge(t).pipe(yt(i=>SO(i.component,i.route,e,n)),oi(i=>i!==!0,!0))}function wO(t,n,e){return Ge(n).pipe(go(i=>Bn(DO(i.route.parent,e),xO(i.route,e),IO(t,i.path),EO(t,i.route))),oi(i=>i!==!0,!0))}function xO(t,n){return t!==null&&n&&n(new su(t)),Z(!0)}function DO(t,n){return t!==null&&n&&n(new ou(t)),Z(!0)}function EO(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Z(!0);let i=e.map(r=>br(()=>{let o=n._environmentInjector,a=na(r,o),s=pO(a)?a.canActivate(n,t):rt(o,()=>a(n,t));return Qr(s).pipe(oi())}));return Z(i).pipe(Jo())}function IO(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>dO(o)).filter(o=>o!==null).map(o=>br(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=na(s,c),u=gO(l)?l.canActivateChild(e,t):rt(c,()=>l(e,t));return Qr(u).pipe(oi())});return Z(a).pipe(Jo())}));return Z(r).pipe(Jo())}function SO(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Z(!0);let o=r.map(a=>{let s=n._environmentInjector,c=na(a,s),l=vO(c)?c.canDeactivate(t,n,e,i):rt(s,()=>c(t,n,e,i));return Qr(l).pipe(oi())});return Z(o).pipe(Jo())}function MO(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Z(!0);let a=o.map(s=>{let c=na(s,t),l=hO(c)?c.canLoad(n,e):rt(t,()=>c(n,e)),u=Qr(l);return r?u.pipe(Ax(r)):u});return Z(a).pipe(Jo(),Ox(i))}function Ox(t){return vm(dt(n=>{if(typeof n!="boolean")throw uu(t,n)}),K(n=>n===!0))}function kO(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return Z(!0);let s=a.map(c=>{let l=na(c,t),u=bO(l)?l.canMatch(n,e,r):rt(t,()=>l(n,e,r));return Qr(u).pipe(Ax(o))});return Z(s).pipe(Jo(),Ox(i))}var Di=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Zs=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function TO(t){throw new k(4e3,!1)}function RO(t){throw Mx(!1,Ot.GuardRejected)}var zg=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[fe])throw TO(`${n.redirectTo}`);r=r.children[fe]}}async applyRedirectCommands(n,e,i,r,o){let a=await AO(e,r,o);if(a instanceof nn)throw new Zs(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Zs(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new nn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new Oe(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new k(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function AO(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Qd(Qr(rt(e,()=>i(n))))}function OO(t,n){return t.providers&&!t._injector&&(t._injector=Ds(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Tn(t){return t.outlet||fe}function NO(t,n){let e=t.filter(i=>Tn(i)===n);return e.push(...t.filter(i=>Tn(i)!==n)),e}var $g={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Nx(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function PO(t,n,e,i,r,o,a){let s=Px(t,n,e);if(!s.matched)return Z(s);let c=Nx(o(s));return i=OO(n,i),kO(i,n,e,r,c,a).pipe(K(l=>l===!0?s:D({},$g)))}function Px(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?D({},$g):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||ox)(e,t,n);if(!r)return D({},$g);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?D(D({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function ix(t,n,e,i,r){return e.length>0&&BO(t,e,i,r)?{segmentGroup:new Oe(n,LO(i,new Oe(e,t.children))),slicedSegments:[]}:e.length===0&&VO(t,e,i)?{segmentGroup:new Oe(t.segments,FO(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Oe(t.segments,t.children),slicedSegments:e}}function FO(t,n,e,i){let r={};for(let o of e)if(pu(t,n,o)&&!i[Tn(o)]){let a=new Oe([],{});r[Tn(o)]=a}return D(D({},i),r)}function LO(t,n){let e={};e[fe]=n;for(let i of t)if(i.path===""&&Tn(i)!==fe){let r=new Oe([],{});e[Tn(i)]=r}return e}function BO(t,n,e,i){return e.some(r=>!pu(t,n,r)||!(Tn(r)!==fe)?!1:!(i!==void 0&&Tn(r)===i))}function VO(t,n,e){return e.some(i=>pu(t,n,i))}function pu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function jO(t,n,e){return n.length===0&&!t.children[e]}var Wg=class{};async function UO(t,n,e,i,r,o,a="emptyOnly",s){return new Gg(t,n,e,i,r,a,o,s).recognize()}var HO=31,Gg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new zg(this.urlSerializer,this.urlTree)}noMatchError(n){return new k(4002,`'${n.segmentGroup}'`)}async recognize(){let n=ix(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new tn(i,e),o=new Gs("",r),a=vx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Ko([],Object.freeze({}),Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),fe,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,fe,e),rootSnapshot:e}}catch(i){if(i instanceof Zs)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Di?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof tn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],u=NO(e,c),f=await this.processSegmentGroup(n,u,l,c,r);a.push(...f)}let s=Fx(a);return zO(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof Di||Tx(l))continue;throw l}if(jO(i,r,o))return new Wg;throw new Di(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(Tn(i)!==a&&(a===fe||!pu(r,o,i)))throw new Di(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new Di(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:f,remainingSegments:g}=Px(e,r,o);if(!c)throw new Di(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>HO&&(this.allowRedirects=!1));let v=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let w=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,Nx(v),n),A=await this.applyRedirects.lineralizeSegments(r,w);return this.processSegment(n,i,e,A.concat(g),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Ko(i,r,Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,WO(e),Tn(e),e.component??e._loadedComponent??null,e,GO(e),n),s=qg(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=gt=>this.createSnapshot(n,i,gt.consumedSegments,gt.parameters,a),c=await Qd(PO(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new Di(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:g,remainingSegments:v}=c,w=this.createSnapshot(n,i,g,f,a),{segmentGroup:A,slicedSegments:N}=ix(e,g,v,l,o);if(N.length===0&&A.hasChildren()){let gt=await this.processChildren(u,l,A,w);return new tn(w,gt)}if(l.length===0&&N.length===0)return new tn(w,[]);let z=Tn(i)===o,Re=await this.processSegment(u,l,A,N,z?fe:o,!0,w);return new tn(w,Re instanceof tn?[Re]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Qd(MO(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw RO(e)}return{routes:[],injector:n}}};function zO(t){t.sort((n,e)=>n.value.outlet===fe?-1:e.value.outlet===fe?1:n.value.outlet.localeCompare(e.value.outlet))}function $O(t){let n=t.value.routeConfig;return n&&n.path===""}function Fx(t){let n=[],e=new Set;for(let i of t){if(!$O(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=Fx(i.children);n.push(new tn(i.value,r))}return n.filter(i=>!e.has(i))}function WO(t){return t.data||{}}function GO(t){return t.resolve||{}}function qO(t,n,e,i,r,o,a){return yt(async s=>{let{state:c,tree:l}=await UO(t,n,e,i,s.extractedUrl,r,o,a);return te(D({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function ZO(t){return yt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Z(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of Lx(s))o.add(c);let a=0;return Ge(o).pipe(go(s=>r.has(s)?YO(s,e,t):(s.data=qg(s,s.parent,t).resolve,Z(void 0))),dt(()=>a++),sl(1),yt(s=>a===o.size?Z(n):Ke))})}function Lx(t){let n=t.children.map(e=>Lx(e)).flat();return[t,...n]}function YO(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!Ex(i)&&(r[Ys]=i.title),br(()=>(t.data=qg(t,t.parent,e).resolve,QO(r,t,n).pipe(K(o=>(t._resolvedData=o,t.data=D(D({},t.data),o),null)))))}function QO(t,n,e){let i=Og(t);if(i.length===0)return Z({});let r={};return Ge(i).pipe(yt(o=>KO(t[o],n,e).pipe(oi(),dt(a=>{if(a instanceof Xo)throw uu(new Ki,a);r[o]=a}))),sl(1),K(()=>r),yr(o=>Tx(o)?Ke:La(o)))}function KO(t,n,e){let i=n._environmentInjector,r=na(t,i),o=r.resolve?r.resolve(n,e):rt(i,()=>r(n,e));return Qr(o)}function rx(t){return lt(n=>{let e=t(n);return e?Ge(e).pipe(K(()=>n)):Z(n)})}var Kg=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===fe);return i}getResolvedTitleForRoute(e){return e.data[Ys]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>d(Bx),providedIn:"root"})}return t})(),Bx=(()=>{class t extends Kg{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(W(Qw))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ia=new x("",{factory:()=>({})}),Xs=new x(""),Vx=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(ng);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await sx(rt(e,()=>i.loadComponent())),a=await Hx(Ux(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await jx(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function jx(t,n,e,i){let r=await sx(rt(e,()=>t.loadChildren())),o=await Hx(Ux(r)),a;o instanceof Dd||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,u;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,u=a,c=s.get(Xs,[],{optional:!0,self:!0}).flat()),{routes:c.map(Qg),injector:s,factory:u}}function XO(t){return t&&typeof t=="object"&&"default"in t}function Ux(t){return XO(t)?t.default:t}async function Hx(t){return t}var gu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>d(JO),providedIn:"root"})}return t})(),JO=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zx=new x("");var eN=()=>{},$x=new x(""),Wx=(()=>{class t{currentNavigation=P(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=P(null);events=new R;transitionAbortWithErrorSubject=new R;configLoader=d(Vx);environmentInjector=d(Ae);destroyRef=d(Dt);urlSerializer=d(ea);rootContexts=d(ta);location=d(Zi);inputBindingEnabled=d(hu,{optional:!0})!==null;titleStrategy=d(Kg);options=d(ia,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(gu);createViewTransition=d(zx,{optional:!0});navigationErrorHandler=d($x,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Z(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new iu(r)),i=r=>this.events.next(new ru(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;q(()=>{this.transitions?.next(te(D({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new st(null),this.transitions.pipe(Ie(i=>i!==null),lt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return Z(i).pipe(lt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Ot.SupersededByNewNavigation),Ke;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?te(D({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new Ei(s.id,this.urlSerializer.serialize(s.rawUrl),"",Hs.IgnoredSameUrlNavigation)),s.resolve(!1),Ke;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Z(s).pipe(lt(f=>(this.events.next(new Zr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Ke:Promise.resolve(f))),qO(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),dt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(g=>(g.finalUrl=f.urlAfterRedirects,g)),this.events.next(new $s)}),lt(f=>Ge(i.routesRecognizeHandler.deferredHandle??Z(void 0)).pipe(K(()=>f))),dt(()=>{let f=new zs(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:g,source:v,restoredState:w,extras:A}=s,N=new Zr(f,this.urlSerializer.serialize(g),v,w);this.events.next(N);let z=xx(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=te(D({},s),{targetSnapshot:z,urlAfterRedirects:g,extras:te(D({},A),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Re=>(Re.finalUrl=g,Re)),Z(i)}else return this.events.next(new Ei(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Hs.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ke}),K(s=>{let c=new Jd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=te(D({},s),{guards:lO(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),yO(s=>this.events.next(s)),lt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw uu(this.urlSerializer,s.guardsResult);let c=new eu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Ke;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ot.GuardRejected),Ke;if(s.guards.canActivateChecks.length===0)return Z(s);let l=new tu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return Ke;let u=!1;return Z(s).pipe(ZO(this.paramsInheritanceStrategy),dt({next:()=>{u=!0;let f=new nu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",Ot.NoDataFromResolver)}}))}),rx(s=>{let c=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let g=u._environmentInjector;f.push(this.configLoader.loadComponent(g,u.routeConfig).then(v=>{u.component=v}))}for(let g of u.children)f.push(...c(g));return f},l=c(s.targetSnapshot.root);return l.length===0?Z(s):Ge(Promise.all(l).then(()=>s))}),rx(()=>this.afterPreactivation()),lt(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?Ge(l).pipe(K(()=>i)):Z(i)}),ct(1),lt(s=>{let c=oO(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=te(D({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new Yo);let l=i.beforeActivateHandler.deferredHandle;return l?Ge(l.then(()=>s)):Z(s)}),dt(s=>{new Hg(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=eN,c)),this.lastSuccessfulNavigation.set(q(this.currentNavigation)),this.events.next(new Yn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Be(Rx(o.signal).pipe(Ie(()=>!r&&!i.targetRouterState),dt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Ot.Aborted)}))),dt({complete:()=>{r=!0}}),Be(this.transitionAbortWithErrorSubject.pipe(dt(s=>{throw s}))),Cr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Ot.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),yr(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Ke;if(kx(s))this.events.next(new mn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),cO(s)?this.events.next(new Qo(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Yr(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=rt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Xo){let{message:u,cancellationCode:f}=uu(this.urlSerializer,l);this.events.next(new mn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Qo(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return Ke}))}))}cancelNavigationTransition(e,i,r){let o=new mn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=q(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tN(t){return t!==Vs}var Gx=new x("");var qx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>d(nN),providedIn:"root"})}return t})(),mu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},nN=(()=>{class t extends mu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vu=(()=>{class t{urlSerializer=d(ea);options=d(ia,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Zi);urlHandlingStrategy=d(gu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new nn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof nn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=xx(null,d(Ae));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>d(iN),providedIn:"root"})}return t})(),iN=(()=>{class t extends vu{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Zr?this.updateStateMemento():e instanceof Ei?this.commitTransition(i):e instanceof zs?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Yo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof mn&&!wx(e)?this.restoreHistory(i):e instanceof Yr?this.restoreHistory(i,!0):e instanceof Yn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,l=D(D({},s),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=D(D({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?D({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):D({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xg(t,n){t.events.pipe(Ie(e=>e instanceof Yn||e instanceof mn||e instanceof Yr||e instanceof Ei),K(e=>e instanceof Yn||e instanceof Ei?0:(e instanceof mn?e.code===Ot.Redirect||e.code===Ot.SupersededByNewNavigation:!1)?2:1),Ie(e=>e!==2),ct(1)).subscribe(()=>{n()})}var ra=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Ed);stateManager=d(vu);options=d(ia,{optional:!0})||{};pendingTasks=d(fi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Wx);urlSerializer=d(ea);location=d(Zi);urlHandlingStrategy=d(gu);injector=d(Ae);_events=new R;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(qx);injectorCleanup=d(Gx,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Xs,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(hu,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ge;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=q(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof mn&&i.code!==Ot.Redirect&&i.code!==Ot.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Yn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Qo){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=D({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||tN(r.source)},a);this.scheduleNavigation(s,Vs,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}iO(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vs,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=te(D({},o),{browserUrl:e})),r){let l=D({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,a,o).catch(l=>{this.disposed||this.injector.get(Jt)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return q(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Qg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=D(D({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let g=r?r.snapshot:this.routerState.snapshot.root;f=bx(g)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return _x(f,e,u,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Xi(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Vs,null,i)}navigate(e,i={skipLocationChange:!1}){return rN(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(si(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=D({},lx):i===!1?r=D({},Ng):r=D(D({},Ng),i),Xi(e))return Xw(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Xw(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((f,g)=>{s=f,c=g});let u=this.pendingTasks.add();return Xg(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new k(4008,!1)}var sN=(()=>{class t{router=d(ra);stateManager=d(vu);fragment=P("");queryParams=P({});path=P("");serializer=d(ea);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Yn&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new nn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oa=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new yi("href"),{optional:!0});reactiveHref=qn(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return q(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return q(this._target)}_target=P(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return q(this._queryParams)}_queryParams=P(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return q(this._fragment)}_fragment=P(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return q(this._queryParamsHandling)}_queryParamsHandling=P(void 0);set state(e){this._state.set(e)}get state(){return q(this._state)}_state=P(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return q(this._info)}_info=P(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return q(this._relativeTo)}_relativeTo=P(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return q(this._preserveFragment)}_preserveFragment=P(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return q(this._skipLocationChange)}_skipLocationChange=P(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return q(this._replaceUrl)}_replaceUrl=P(!1);isAnchorElement;onChanges=new R;applicationErrorHandler=d(Jt);options=d(ia,{optional:!0});reactiveRouterState=d(sN);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=P(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Xi(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=$(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Xi(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return q(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(L(ra),L(Mt),vs("tabindex"),L(Fe),L(B),L(zo))};static \u0275dir=O({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&Y("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&ye("href",r.reactiveHref(),Tp)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ee],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ee],replaceUrl:[2,"replaceUrl","replaceUrl",ee],routerLink:"routerLink"},features:[De]})}return t})();var cN=new x("");function Jg(t,...n){return Bi([{provide:Xs,multi:!0,useValue:t},[],{provide:Mt,useFactory:lN},{provide:Id,multi:!0,useFactory:dN},n.map(e=>e.\u0275providers)])}function lN(){return d(ra).routerState.root}function dN(){let t=d(ie);return n=>{let e=t.get(en);if(n!==e.components[0])return;let i=t.get(ra),r=t.get(uN);t.get(fN)===1&&i.initialNavigation(),t.get(mN,null,{optional:!0})?.setUpPreloading(),t.get(cN,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var uN=new x("",{factory:()=>new R}),fN=new x("",{factory:()=>1});var mN=new x("");var aa=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=P(!0);isLoading=this.loading.asReadonly();error=P("");errorMessage=this.error.asReadonly();teams=P([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(W(xi))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var pN=new x("cdk-dir-doc",{providedIn:"root",factory:()=>d(oe)}),gN=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Yx(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?gN.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Yt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=P("ltr");change=new G;constructor(){let e=d(pN,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Yx(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ue=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({})}return t})();var vN=["*"];var bN=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],_N=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],yN=new x("MAT_CARD_CONFIG"),Qx=(()=>{class t{appearance;constructor(){let e=d(yN,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&V("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:vN,decls:1,vars:0,template:function(i,r){i&1&&(xe(),j(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),Kx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Xx=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),Jx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:_N,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(xe(bN),j(0),ue(1,"div",0),j(2,1),he(),j(3,2))},encapsulation:2,changeDetection:0})}return t})();function Js(t){return t.buttons===0||t.detail===0}function ec(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var ev;function eD(){if(ev==null){let t=typeof document<"u"?document.head:null;ev=!!(t&&(t.createShadowRoot||t.attachShadow))}return ev}function tv(t){if(eD()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function bu(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Nt(t){return t.composedPath?t.composedPath()[0]:t.target}var nv;try{nv=typeof Intl<"u"&&Intl.v8BreakIterator}catch{nv=!1}var Ee=(()=>{class t{_platformId=d(jr);isBrowser=this._platformId?Ow(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||nv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tc;function tD(){if(tc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>tc=!0}))}finally{tc=tc||!1}return tc}function sa(t){return tD()?t:!!t.capture}function Qn(t,n=0){return nD(t)?Number(t):arguments.length===2?n:0}function nD(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Gt(t){return t instanceof B?t.nativeElement:t}var iD=new x("cdk-input-modality-detector-options"),rD={ignoreKeys:[18,17,224,91,16]},oD=650,iv={passive:!0,capture:!0},aD=(()=>{class t{_platform=d(Ee);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new st(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Nt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<oD||(this._modality.next(Js(e)?"keyboard":"mouse"),this._mostRecentTarget=Nt(e))};_onTouchstart=e=>{if(ec(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Nt(e)};constructor(){let e=d(F),i=d(oe),r=d(iD,{optional:!0});if(this._options=D(D({},rD),r),this.modalityDetected=this._modality.pipe(wr(1)),this.modalityChanged=this.modalityDetected.pipe(al()),this._platform.isBrowser){let o=d(ut).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,iv),o.listen(i,"mousedown",this._onMousedown,iv),o.listen(i,"touchstart",this._onTouchstart,iv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(nc||{}),sD=new x("cdk-focus-monitor-default-options"),_u=sa({passive:!0,capture:!0}),Kr=(()=>{class t{_ngZone=d(F);_platform=d(Ee);_inputModalityDetector=d(aD);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(oe);_stopInputModalityDetector=new R;constructor(){let e=d(sD,{optional:!0});this._detectionMode=e?.detectionMode||nc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Nt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Gt(e);if(!this._platform.isBrowser||r.nodeType!==1)return Z();let o=tv(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new R,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Gt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Gt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===nc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===nc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?oD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Nt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,_u),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,_u)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,_u),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,_u),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rv=(()=>{class t{_elementRef=d(B);_focusMonitor=d(Kr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new G;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var yu=new WeakMap,ft=(()=>{class t{_appRef;_injector=d(ie);_environmentInjector=d(Ae);load(e){let i=this._appRef=this._appRef||this._injector.get(en),r=yu.get(i);r||(r={loaders:new Set,refs:[]},yu.set(i,r),i.onDestroy(()=>{yu.get(i)?.refs.forEach(o=>o.destroy()),yu.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Fd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),Cu;function CN(){if(Cu===void 0&&(Cu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Cu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Cu}function ca(t){return CN()?.createHTML(t)||t}function Ii(t){return Array.isArray(t)?t:[t]}var cD=new Set,Xr,xu=(()=>{class t{_platform=d(Ee);_nonce=d(Ur,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xN}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&wN(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wN(t,n){if(!cD.has(t))try{Xr||(Xr=document.createElement("style"),n&&Xr.setAttribute("nonce",n),Xr.setAttribute("type","text/css"),document.head.appendChild(Xr)),Xr.sheet&&(Xr.sheet.insertRule(`@media ${t} {body{ }}`,0),cD.add(t))}catch(e){console.error(e)}}function xN(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ic=(()=>{class t{_mediaMatcher=d(xu);_zone=d(F);_queries=new Map;_destroySubject=new R;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return lD(Ii(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=lD(Ii(e)).map(a=>this._registerQuery(a).observable),o=Va(r);return o=Bn(o.pipe(ct(1)),o.pipe(wr(1),vn(0))),o.pipe(K(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ne(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Ct(i),K(({matches:a})=>({query:e,matches:a})),Be(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lD(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function DN(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var dD=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),EN=(()=>{class t{_mutationObserverFactory=d(dD);_observedElements=new Map;_ngZone=d(F);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Gt(e);return new ne(r=>{let a=this._observeElement(i).pipe(K(s=>s.filter(c=>!DN(c))),Ie(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new R,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Du=(()=>{class t{_contentObserver=d(EN);_elementRef=d(B);event=new G;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Qn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(vn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ee],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Eu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({providers:[dD]})}return t})();var Su=(()=>{class t{_platform=d(Ee);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return SN(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=IN(PN(e));if(i&&(uD(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=uD(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ON(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return NN(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function IN(t){try{return t.frameElement}catch{return null}}function SN(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function MN(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function kN(t){return RN(t)&&t.type=="hidden"}function TN(t){return AN(t)&&t.hasAttribute("href")}function RN(t){return t.nodeName.toLowerCase()=="input"}function AN(t){return t.nodeName.toLowerCase()=="a"}function fD(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function uD(t){if(!fD(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function ON(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function NN(t){return kN(t)?!1:MN(t)||TN(t)||t.hasAttribute("contenteditable")||fD(t)}function PN(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Iu=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ht(n,{injector:this._injector}):setTimeout(n)}},ov=(()=>{class t{_checker=d(Su);_ngZone=d(F);_document=d(oe);_injector=d(ie);constructor(){d(ft).load(wu)}create(e,i=!1){return new Iu(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var FN=200,Mu=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:FN;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(dt(e=>this._pressedLetters.push(e)),vn(n),Ie(()=>this._pressedLetters.length>0),K(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function hn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var la=class{_items;_activeItemIndex=P(-1);_activeItem=P(null);_wrap=!1;_typeaheadSubscription=ge.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof xn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):vi(n)&&(this._effectRef=$t(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Mu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||hn(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return vi(this._items)?this._items():this._items instanceof xn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var rc=class extends la{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var oc=class extends la{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var sv={},pt=class t{_appId=d(Wi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),sv.hasOwnProperty(n)||(sv[n]=0),`${n}${e?t._infix+"-":""}${sv[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var pD=" ";function cv(t,n,e){let i=gD(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(pD)))}function ku(t,n,e){let i=gD(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(pD)):t.removeAttribute(n)}function gD(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Rn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Rn||{}),Tu,Jr;function Ru(){if(Jr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Jr=!1,Jr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Jr=!0;else{let t=Element.prototype.scrollTo;t?Jr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Jr=!1}}return Jr}function da(){if(typeof document!="object"||!document)return Rn.NORMAL;if(Tu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Tu=Rn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Tu=t.scrollLeft===0?Rn.NEGATED:Rn.INVERTED),t.remove()}return Tu}function lv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ua,vD=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function dv(){if(ua)return ua;if(typeof document!="object"||!document)return ua=new Set(vD),ua;let t=document.createElement("input");return ua=new Set(vD.filter(n=>(t.setAttribute("type",n),t.type===n))),ua}var bD={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var LN=new x("MATERIAL_ANIMATIONS"),_D=null;function BN(){return d(LN,{optional:!0})?.animationsDisabled||d(bs,{optional:!0})==="NoopAnimations"?"di-disabled":(_D??=d(xu).matchMedia("(prefers-reduced-motion)").matches,_D?"reduced-motion":"enabled")}function et(){return BN()!=="enabled"}function at(t){return t==null?"":typeof t=="string"?t:`${t}px`}function it(t){return t!=null&&`${t}`!="false"}var pn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(pn||{}),uv=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=pn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},yD=sa({passive:!0,capture:!0}),fv=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,yD)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,yD)))}_delegateEventHandler=n=>{let e=Nt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},ac={enterDuration:225,exitDuration:150},VN=800,CD=sa({passive:!0,capture:!0}),wD=["mousedown","touchstart"],xD=["mouseup","mouseleave","touchend","touchcancel"],jN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),eo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new fv;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Gt(i)),o&&o.get(ft).load(jN)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=D(D({},ac),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||UN(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),g=f.transitionProperty,v=f.transitionDuration,w=g==="none"||v==="0s"||v==="0s, 0s"||r.width===0&&r.height===0,A=new uv(this,u,i,w);u.style.transform="scale3d(1, 1, 1)",A.state=pn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=A);let N=null;return!w&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let z=()=>{N&&(N.fallbackTimer=null),clearTimeout(gt),this._finishRippleTransition(A)},Re=()=>this._destroyRipple(A),gt=setTimeout(Re,l+100);u.addEventListener("transitionend",z),u.addEventListener("transitioncancel",Re),N={onTransitionEnd:z,onTransitionCancel:Re,fallbackTimer:gt}}),this._activeRipples.set(A,N),(w||!l)&&this._finishRippleTransition(A),A}fadeOutRipple(n){if(n.state===pn.FADING_OUT||n.state===pn.HIDDEN)return;let e=n.element,i=D(D({},ac),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=pn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Gt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,wD.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{xD.forEach(e=>{this._triggerElement.addEventListener(e,this,CD)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===pn.FADING_IN?this._startFadeOutTransition(n):n.state===pn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=pn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=pn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Js(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+VN;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ec(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===pn.VISIBLE||n.config.terminateOnPointerUp&&n.state===pn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(wD.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(xD.forEach(e=>n.removeEventListener(e,this,CD)),this._pointerUpEventsRegistered=!1))}};function UN(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var fa=new x("mat-ripple-global-options"),to=(()=>{class t{_elementRef=d(B);_animationsDisabled=et();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(F),i=d(Ee),r=d(fa,{optional:!0}),o=d(ie);this._globalOptions=r||{},this._rippleRenderer=new eo(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:D(D(D({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,D(D({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,D(D({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var HN={capture:!0},zN=["focus","mousedown","mouseenter","touchstart"],mv="mat-ripple-loader-uninitialized",hv="mat-ripple-loader-class-name",DD="mat-ripple-loader-centered",Au="mat-ripple-loader-disabled",ED=(()=>{class t{_document=d(oe);_animationsDisabled=et();_globalRippleOptions=d(fa,{optional:!0});_platform=d(Ee);_ngZone=d(F);_injector=d(ie);_eventCleanups;_hosts=new Map;constructor(){let e=d(ut).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zN.map(i=>e.listen(this._document,i,this._onInteraction,HN)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(mv,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(hv))&&e.setAttribute(hv,i.className||""),i.centered&&e.setAttribute(DD,""),i.disabled&&e.setAttribute(Au,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Au,""):e.removeAttribute(Au)}_onInteraction=e=>{let i=Nt(e);if(i instanceof HTMLElement){let r=i.closest(`[${mv}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(hv)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??ac.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??ac.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Au),rippleConfig:{centered:e.hasAttribute(DD),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new eo(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(mv)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var $N=["mat-icon-button",""],WN=["*"],GN=new x("MAT_BUTTON_CONFIG");function ID(t){return t==null?void 0:Gi(t)}var Ou=(()=>{class t{_elementRef=d(B);_ngZone=d(F);_animationsDisabled=et();_config=d(GN,{optional:!0});_focusMonitor=d(Kr);_cleanupClick;_renderer=d(Fe);_rippleLoader=d(ED);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(ft).load(Kn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ye("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),bt(r.color?"mat-"+r.color:""),V("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ee],disabled:[2,"disabled","disabled",ee],ariaDisabled:[2,"aria-disabled","ariaDisabled",ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee],tabIndex:[2,"tabIndex","tabIndex",ID],_tabindex:[2,"tabindex","_tabindex",ID]}})}return t})(),sc=(()=>{class t extends Ou{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Se],attrs:$N,ngContentSelectors:WN,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(),Me(0,"span",0),j(1),Me(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var ma=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Ue]})}return t})();var qN=["matButton",""],MD=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],kD=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],ZN=["mat-fab",""];var SD=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Nu=(()=>{class t extends Ou{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=YN(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?SD.get(this._appearance):null,o=SD.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Se],attrs:qN,ngContentSelectors:kD,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(MD),Me(0,"span",0),j(1),ue(2,"span",1),j(3,1),he(),j(4,2),Me(5,"span",2)(6,"span",3)),i&2&&V("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function YN(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var QN=new x("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>pv}),pv={color:"accent"},TD=(()=>{class t extends Ou{_options=d(QN,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||pv,this.color=this._options.color||pv.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&V("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",ee]},exportAs:["matButton","matAnchor"],features:[Se],attrs:ZN,ngContentSelectors:kD,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(xe(MD),Me(0,"span",0),j(1),ue(2,"span",1),j(3,1),he(),j(4,2),Me(5,"span",2)(6,"span",3)),i&2&&V("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var RD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[ma,Ue]})}return t})();var XN=t=>[t,"map"],JN=t=>[t,"convoy"],eP=t=>[t,"shop"],Pu=class t{team=pe.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(p(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),b(3),h()(),p(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),E(7,"img",3),b(8," Map "),h()(),p(9,"button",4)(10,"span",2)(11,"div",5),b(12,"?"),h(),b(13," Convoy "),h()(),p(14,"button",4)(15,"span",2),E(16,"img",6),b(17," Shop "),h()()()()),e&2&&(m(3),Ce(" ",i.team().teamName," "),m(2),M("routerLink",Xe(6,XN,i.GetTeamNameWithoutSpaces())),m(4),M("disabled",!i.team().showConvoyLink)("routerLink",Xe(8,JN,i.GetTeamNameWithoutSpaces())),m(5),M("disabled",!i.team().showShopLink)("routerLink",Xe(10,eP,i.GetTeamNameWithoutSpaces())))},dependencies:[Qx,Jx,Kx,Xx,Nu,oa],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var AD="(max-width: 900px)",Xn=class t{breakpointObserver=d(ic);isSmallWidth=P(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([AD]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[AD])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var Fu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"div",1),Me(2,"div",2),ue(3,"div",3),b(4,"Loading..."),he()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var Jn=class t{DARK_MODE_CLASS="dark-mode";document=d(oe);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=P(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=$(()=>this.themeMode()==="dark");constructor(){$t(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var gv=t=>({width:t});function tP(t,n){t&1&&E(0,"loading-icon")}function nP(t,n){if(t&1&&(p(0,"div",7)(1,"p",17),b(2),h()()),t&2){let e=_();m(2),Ce(" ",e.teamListService.errorMessage()," ")}}function iP(t,n){if(t&1&&E(0,"team-listing",14),t&2){let e=n.$implicit;M("team",e)}}function rP(t,n){t&1&&(p(0,"div",7)(1,"p",17),b(2," There are no teams available. "),h()())}function oP(t,n){if(t&1&&le(0,iP,1,1,"team-listing",14,Ve,!1,rP,3,0,"div",7),t&2){let e=_();de(e.teamListService.teamsList())}}var Lu=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=d(Xn),this.themeService=d(Jn),this.teamListService=d(aa),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(L(Xn),L(Jn),L(aa))};static \u0275cmp=S({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(E(0,"div",0)(1,"div",1),p(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),b(6),h(),p(7,"button",5),Y("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),b(8,"Toggle Theme"),h()(),p(9,"div",6),y(10,tP,1,0,"loading-icon")(11,nP,3,1,"div",7)(12,oP,3,1),h()(),p(13,"div",3)(14,"div",8)(15,"h1",9),b(16,"Information"),h(),p(17,"p"),b(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),h(),p(19,"h2",9),b(20,"Resources"),h(),p(21,"ul")(22,"li")(23,"a",10),b(24,"Reddit Emblem Maps Documentation"),h()(),p(25,"li")(26,"a",11),b(27,"API Github Repository"),h()(),p(28,"li")(29,"a",12),b(30,"Webapp Github Repository"),h()()(),p(31,"h2",9),b(32,"Example"),h(),p(33,"p"),b(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),h(),p(35,"ul")(36,"li")(37,"a",13),b(38,"Team Example Google Spreadsheet"),h()()(),E(39,"team-listing",14),h(),p(40,"div",8)(41,"h2",9),b(42,"Credits"),h(),p(43,"ul")(44,"li")(45,"a",15),b(46,'Website background texture "Az Subtle" by Anli'),h()(),p(47,"li")(48,"a",16),b(49,`"Mac's Minecraft" pixel font`),h()()()()()()),e&2&&(m(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),m(),M("ngClass",i.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),m(2),Ce(" This will be the logo! Screen width is <= 900px: ",i.breakpointService.isScreenSmallWidth()," "),m(3),M("ngStyle",Xe(9,gv,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),m(),C(i.teamListService.isLoading()?10:i.teamListService.errorMessage().length>0?11:12),m(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),m(),M("ngStyle",Xe(11,gv,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),m(25),M("team",i.teamExample),m(),M("ngStyle",Xe(13,gv,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Pu,zr,ug,Fu],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var aP=20,ha=(()=>{class t{_ngZone=d(F);_platform=d(Ee);_renderer=d(ut).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=aP){return this._platform.isBrowser?new ne(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ol(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Z()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ie(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Gt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ji=(()=>{class t{elementRef=d(B);scrollDispatcher=d(ha);ngZone=d(F);dir=d(Yt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new R;_renderer=d(Fe);_cleanupScroll;_elementScrolled=new R;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&da()!=Rn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),da()==Rn.INVERTED?e.left=e.right:da()==Rn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Ru()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&da()==Rn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&da()==Rn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),sP=20,An=(()=>{class t{_platform=d(Ee);_listeners;_viewportSize=null;_change=new R;_document=d(oe);constructor(){let e=d(F),i=d(ut).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=sP){return e>0?this._change.pipe(ol(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({})}return t})(),vv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Ue,cc,Ue,cc]})}return t})();var Uu=["*"],cP=["content"],lP=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],dP=["mat-drawer","mat-drawer-content","*"];function uP(t,n){if(t&1){let e=Mn();p(0,"div",1),Y("click",function(){Ht(e);let r=_();return zt(r._onBackdropClicked())}),h()}if(t&2){let e=_();V("mat-drawer-shown",e._isShowingBackdrop())}}function fP(t,n){t&1&&(p(0,"mat-drawer-content"),j(1,2),h())}var mP=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],hP=["mat-sidenav","mat-sidenav-content","*"];function pP(t,n){if(t&1){let e=Mn();p(0,"div",1),Y("click",function(){Ht(e);let r=_();return zt(r._onBackdropClicked())}),h()}if(t&2){let e=_();V("mat-drawer-shown",e._isShowingBackdrop())}}function gP(t,n){t&1&&(p(0,"mat-sidenav-content"),j(1,2),h())}var vP=`.mat-drawer-container {
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
`;var bP=new x("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),yv=new x("MAT_DRAWER_CONTAINER"),Bu=(()=>{class t extends Ji{_platform=d(Ee);_changeDetectorRef=d(Qe);_container=d(_v);constructor(){let e=d(B),i=d(ha),r=d(F);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(nt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),V("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[ke([{provide:Ji,useExisting:t}]),Se],ngContentSelectors:Uu,decls:1,vars:0,template:function(i,r){i&1&&(xe(),j(0))},encapsulation:2,changeDetection:0})}return t})(),bv=(()=>{class t{_elementRef=d(B);_focusTrapFactory=d(ov);_focusMonitor=d(Kr);_platform=d(Ee);_ngZone=d(F);_renderer=d(Fe);_interactivityChecker=d(Su);_doc=d(oe);_container=d(yv,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=it(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=it(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(it(e))}_opened=P(!1);_openedVia=null;_animationStarted=new R;_animationEnd=new R;openedChange=new G(!0);_openedStream=this.openedChange.pipe(Ie(e=>e),K(()=>{}));openedStart=this._animationStarted.pipe(Ie(()=>this.opened),vo(void 0));_closedStream=this.openedChange.pipe(Ie(e=>!e),K(()=>{}));closedStart=this._animationStarted.pipe(Ie(()=>!this.opened),vo(void 0));_destroyed=new R;onPositionChanged=new G;_content;_modeChanged=new R;_injector=d(ie);_changeDetectorRef=d(Qe);constructor(){this.openedChange.pipe(Be(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!hn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ht(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ct(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ye(cP,5),i&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(ye("align",null)("tabIndex",r.mode!=="side"?"-1":null),nt("visibility",!r._container&&!r.opened?"hidden":null),V("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Uu,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(xe(),p(0,"div",1,0),j(2),h())},dependencies:[Ji],encapsulation:2,changeDetection:0})}return t})(),_v=(()=>{class t{_dir=d(Yt,{optional:!0});_element=d(B);_ngZone=d(F);_changeDetectorRef=d(Qe);_animationDisabled=et();_transitionsEnabled=!1;_allDrawers;_drawers=new xn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=it(e)}_autosize=d(bP);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:it(e)}_backdropOverride=null;backdropClick=new G;_start=null;_end=null;_left=null;_right=null;_destroyed=new R;_doCheckSubject=new R;_contentMargins={left:null,right:null};_contentMarginChanges=new R;get scrollable(){return this._userContent||this._content}_injector=d(ie);constructor(){let e=d(Ee),i=d(An);this._dir?.change.pipe(Be(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Be(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ct(this._allDrawers),Be(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ct(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(vn(10),Be(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Be(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Be(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Be(this._drawers.changes)).subscribe(()=>{ht({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Be(Ft(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&St(o,Bu,5)(o,bv,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ye(Bu,5),i&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[ke([{provide:yv,useExisting:t}])],ngContentSelectors:dP,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(xe(lP),y(0,uP,1,2,"div",0),j(1),j(2,1),y(3,fP,2,0,"mat-drawer-content")),i&2&&(C(r.hasBackdrop?0:-1),m(3),C(r._content?-1:3))},dependencies:[Bu],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Vu=(()=>{class t extends Bu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[ke([{provide:Ji,useExisting:t}]),Se],ngContentSelectors:Uu,decls:1,vars:0,template:function(i,r){i&1&&(xe(),j(0))},encapsulation:2,changeDetection:0})}return t})(),Cv=(()=>{class t extends bv{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=it(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Qn(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Qn(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(ye("tabIndex",r.mode!=="side"?"-1":null)("align",null),nt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),V("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[ke([{provide:bv,useExisting:t}]),Se],ngContentSelectors:Uu,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(xe(),p(0,"div",1,0),j(2),h())},dependencies:[Ji],encapsulation:2,changeDetection:0})}return t})(),PD=(()=>{class t extends _v{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&St(o,Vu,5)(o,Cv,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[ke([{provide:yv,useExisting:t},{provide:_v,useExisting:t}]),Se],ngContentSelectors:hP,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(xe(mP),y(0,pP,1,2,"div",0),j(1),j(2,1),y(3,gP,2,0,"mat-sidenav-content")),i&2&&(C(r.hasBackdrop?0:-1),m(3),C(r._content?-1:3))},dependencies:[Vu],styles:[vP],encapsulation:2,changeDetection:0})}return t})();var lc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},wv=class extends lc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Si=class extends lc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},xv=class extends lc{element;constructor(n){super(),this.element=n instanceof B?n.nativeElement:n}},Hu=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof wv)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Si)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof xv)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},zu=class extends Hu{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Gn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||ie.NULL,o=r.get(Ae,i.injector);e=Fd(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},FD=(()=>{class t extends Si{constructor(){let e=d(Rt),i=d(It);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Se]})}return t})(),Dv=(()=>{class t extends Hu{_moduleRef=d(Gn,{optional:!0});_document=d(oe);_viewContainerRef=d(It);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new G;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Se]})}return t})(),LD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({})}return t})();var Ev=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ne(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ie(e=>e.some(i=>i.target===n)),ll({bufferSize:1,refCount:!0}),Be(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},$u=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ev(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rv=["*"];function _P(t,n){t&1&&j(0)}var yP=["tabListContainer"],CP=["tabList"],wP=["tabListInner"],xP=["nextPaginator"],DP=["previousPaginator"],EP=["content"];function IP(t,n){}var SP=["tabBodyWrapper"],MP=["tabHeader"];function kP(t,n){}function TP(t,n){if(t&1&&At(0,kP,0,0,"ng-template",12),t&2){let e=_().$implicit;M("cdkPortalOutlet",e.templateLabel)}}function RP(t,n){if(t&1&&b(0),t&2){let e=_().$implicit;se(e.textLabel)}}function AP(t,n){if(t&1){let e=Mn();p(0,"div",7,2),Y("click",function(){let r=Ht(e),o=r.$implicit,a=r.$index,s=_(),c=Zt(1);return zt(s._handleClick(o,c,a))})("cdkFocusChange",function(r){let o=Ht(e).$index,a=_();return zt(a._tabFocusChanged(r,o))}),E(2,"span",8)(3,"div",9),p(4,"span",10)(5,"span",11),y(6,TP,1,1,null,12)(7,RP,1,1),h()()()}if(t&2){let e=n.$implicit,i=n.$index,r=Zt(1),o=_();bt(e.labelClass),V("mdc-tab--active",o.selectedIndex===i),M("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),ye("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),M("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),m(3),C(e.templateLabel?6:7)}}function OP(t,n){t&1&&j(0)}function NP(t,n){if(t&1){let e=Mn();p(0,"mat-tab-body",13),Y("_onCentered",function(){Ht(e);let r=_();return zt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Ht(e);let o=_();return zt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Ht(e);let o=_();return zt(o._bodyCentered(r))}),h()}if(t&2){let e=n.$implicit,i=n.$index,r=_();bt(e.bodyClass),M("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),ye("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var PP=new x("MatTabContent"),FP=(()=>{class t{template=d(Rt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","matTabContent",""]],features:[ke([{provide:PP,useExisting:t}])]})}return t})(),LP=new x("MatTabLabel"),UD=new x("MAT_TAB"),Av=(()=>{class t extends FD{_closestTab=d(UD,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ke([{provide:LP,useExisting:t}]),Se]})}return t})(),HD=new x("MAT_TAB_GROUP"),Ov=(()=>{class t{_viewContainerRef=d(It);_closestTabGroup=d(HD,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new R;position=null;origin=null;isActive=!1;constructor(){d(ft).load(Kn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Si(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&St(o,Av,5)(o,FP,7,Rt),i&2){let a;U(a=H())&&(r.templateLabel=a.first),U(a=H())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ye(Rt,7),i&2){let o;U(o=H())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&ye("id",null)},inputs:{disabled:[2,"disabled","disabled",ee],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ke([{provide:UD,useExisting:t}]),De],ngContentSelectors:Rv,decls:1,vars:0,template:function(i,r){i&1&&(xe(),Ho(0,_P,1,0,"ng-template"))},encapsulation:2})}return t})(),Iv="mdc-tab-indicator--active",BD="mdc-tab-indicator--no-transition",Sv=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},BP=(()=>{class t{_elementRef=d(B);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Iv);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(BD),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(BD),i.classList.add(Iv),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Iv)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ee]}})}return t})();var zD=(()=>{class t extends BP{elementRef=d(B);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(ye("aria-disabled",!!r.disabled),V("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",ee]},features:[Se]})}return t})(),VD={passive:!0},VP=650,jP=100,UP=(()=>{class t{_elementRef=d(B);_changeDetectorRef=d(Qe);_viewportRuler=d(An);_dir=d(Yt,{optional:!0});_ngZone=d(F);_platform=d(Ee);_sharedResizeObserver=d($u);_injector=d(ie);_renderer=d(Fe);_animationsDisabled=et();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new R;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new R;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new G;indexFocused=new G;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),VD),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),VD))}ngAfterContentInit(){let e=this._dir?this._dir.change:Z("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(vn(32),Be(this._destroyed)),r=this._viewportRuler.change(150).pipe(Be(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new oc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ht(o,{injector:this._injector}),Ft(e,r,i,this._items.changes,this._itemsResized()).pipe(Be(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Ke:this._items.changes.pipe(Ct(this._items),lt(e=>new ne(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),wr(1),Ie(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!hn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,u=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>u&&(this.scrollDistance+=Math.min(c-u,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),_r(VP,jP).pipe(Be(Ft(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ee],selectedIndex:[2,"selectedIndex","selectedIndex",Gi]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),HP=(()=>{class t extends UP{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Sv(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&St(o,zD,4),i&2){let a;U(a=H())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ye(yP,7)(CP,7)(wP,7)(xP,5)(DP,5),i&2){let o;U(o=H())&&(r._tabListContainer=o.first),U(o=H())&&(r._tabList=o.first),U(o=H())&&(r._tabListInner=o.first),U(o=H())&&(r._nextPaginator=o.first),U(o=H())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&V("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ee]},features:[Se],ngContentSelectors:Rv,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(xe(),p(0,"div",5,0),Y("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),E(2,"div",6),h(),p(3,"div",7,1),Y("keydown",function(a){return r._handleKeydown(a)}),p(5,"div",8,2),Y("cdkObserveContent",function(){return r._onContentChanges()}),p(7,"div",9,3),j(9),h()()(),p(10,"div",10,4),Y("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),E(12,"div",6),h()),i&2&&(V("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),M("matRippleDisabled",r._disableScrollBefore||r.disableRipple),m(3),V("_mat-animation-noopable",r._animationsDisabled),m(2),ye("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),m(5),V("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),M("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[to,Du],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),zP=new x("MAT_TABS_CONFIG"),jD=(()=>{class t extends Dv{_host=d(Mv);_ngZone=d(F);_centeringSub=ge.EMPTY;_leavingSub=ge.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ct(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","matTabBodyHost",""]],features:[Se]})}return t})(),Mv=(()=>{class t{_elementRef=d(B);_dir=d(Yt,{optional:!0});_ngZone=d(F);_injector=d(ie);_renderer=d(Fe);_diAnimationsDisabled=et();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ge.EMPTY;_position;_previousPosition;_onCentering=new G;_beforeCentering=new G;_afterLeavingCenter=new G;_onCentered=new G(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(Qe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ht(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ht(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ye(jD,5)(EP,5),i&2){let o;U(o=H())&&(r._portalHost=o.first),U(o=H())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&ye("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(p(0,"div",1,0),At(2,IP,0,0,"ng-template",2),h()),i&2&&V("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[jD,Ji],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),$D=(()=>{class t{_elementRef=d(B);_changeDetectorRef=d(Qe);_ngZone=d(F);_tabsSubscription=ge.EMPTY;_tabLabelSubscription=ge.EMPTY;_tabBodySubscription=ge.EMPTY;_diAnimationsDisabled=et();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new xn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new G;focusChange=new G;animationDone=new G;selectedTabChange=new G(!0);_groupId;_isServer=!d(Ee).isBrowser;constructor(){let e=d(zP,{optional:!0});this._groupId=d(pt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ct(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new kv;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ft(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&St(o,Ov,5),i&2){let a;U(a=H())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ye(SP,5)(MP,5)(Mv,5),i&2){let o;U(o=H())&&(r._tabBodyWrapper=o.first),U(o=H())&&(r._tabHeader=o.first),U(o=H())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(ye("mat-align-tabs",r.alignTabs),bt("mat-"+(r.color||"primary")),nt("--mat-tab-animation-duration",r.animationDuration),V("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ee],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ee],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ee],selectedIndex:[2,"selectedIndex","selectedIndex",Gi],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Gi],disablePagination:[2,"disablePagination","disablePagination",ee],disableRipple:[2,"disableRipple","disableRipple",ee],preserveContent:[2,"preserveContent","preserveContent",ee],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ke([{provide:HD,useExisting:t}])],ngContentSelectors:Rv,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(xe(),p(0,"mat-tab-header",3,0),Y("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),le(2,AP,8,17,"div",4,dn),h(),y(4,OP,1,0),p(5,"div",5,1),le(7,NP,1,10,"mat-tab-body",6,dn),h()),i&2&&(M("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Sd("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),m(2),de(r._tabs),m(2),C(r._isServer?4:-1),m(),V("_mat-animation-noopable",r._animationsDisabled()),m(2),de(r._tabs))},dependencies:[HP,zD,rv,to,Dv,Mv],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),kv=class{index;tab};var er=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=it(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=it(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ye("aria-orientation",r.vertical?"vertical":"horizontal"),V("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),WD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Ue]})}return t})();var $P=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),WP={passive:!0},GD=(()=>{class t{_platform=d(Ee);_ngZone=d(F);_renderer=d(ut).createRenderer(null,null);_styleLoader=d(ft);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ke;this._styleLoader.load($P);let i=Gt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new R,a="cdk-text-field-autofilled",s=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,WP)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Gt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({})}return t})();var JD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(L(Fe),L(B))};static \u0275dir=O({type:t})}return t})(),GP=(()=>{class t extends JD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=O({type:t,features:[Se]})}return t})(),nr=new x("");var qP={provide:nr,useExisting:Vt(()=>nf),multi:!0};function ZP(){let t=fn()?fn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var YP=new x(""),nf=(()=>{class t extends JD{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!ZP())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(L(Fe),L(B),L(YP,8))};static \u0275dir=O({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&Y("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ke([qP]),Se]})}return t})();function Pv(t){return t==null||Fv(t)===0}function Fv(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var vc=new x(""),Lv=new x(""),QP=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,va=class{static min(n){return KP(n)}static max(n){return XP(n)}static required(n){return JP(n)}static requiredTrue(n){return eF(n)}static email(n){return tF(n)}static minLength(n){return nF(n)}static maxLength(n){return iF(n)}static pattern(n){return rF(n)}static nullValidator(n){return eE()}static compose(n){return aE(n)}static composeAsync(n){return sE(n)}};function KP(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function XP(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function JP(t){return Pv(t.value)?{required:!0}:null}function eF(t){return t.value===!0?null:{required:!0}}function tF(t){return Pv(t.value)||QP.test(t.value)?null:{email:!0}}function nF(t){return n=>{let e=n.value?.length??Fv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function iF(t){return n=>{let e=n.value?.length??Fv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function rF(t){if(!t)return eE;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Pv(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function eE(t){return null}function tE(t){return t!=null}function nE(t){return bi(t)?Ge(t):t}function iE(t){let n={};return t.forEach(e=>{n=e!=null?D(D({},n),e):n}),Object.keys(n).length===0?null:n}function rE(t,n){return n.map(e=>e(t))}function oF(t){return!t.validate}function oE(t){return t.map(n=>oF(n)?n:e=>n.validate(e))}function aE(t){if(!t)return null;let n=t.filter(tE);return n.length==0?null:function(e){return iE(rE(e,n))}}function Bv(t){return t!=null?aE(oE(t)):null}function sE(t){if(!t)return null;let n=t.filter(tE);return n.length==0?null:function(e){let i=rE(e,n).map(nE);return ja(i).pipe(K(iE))}}function Vv(t){return t!=null?sE(oE(t)):null}function ZD(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function cE(t){return t._rawValidators}function lE(t){return t._rawAsyncValidators}function Nv(t){return t?Array.isArray(t)?t:[t]:[]}function Gu(t,n){return Array.isArray(t)?t.includes(n):t===n}function YD(t,n){let e=Nv(n);return Nv(t).forEach(r=>{Gu(e,r)||e.push(r)}),e}function QD(t,n){return Nv(n).filter(e=>!Gu(t,e))}var qu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Bv(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Vv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},no=class extends qu{name;get formDirective(){return null}get path(){return null}},Mi=class extends qu{_parent=null;name=null;valueAccessor=null},Zu=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var dE=(()=>{class t extends Zu{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(L(Mi,2))};static \u0275dir=O({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Se]})}return t})(),uE=(()=>{class t extends Zu{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(L(no,10))};static \u0275dir=O({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Se]})}return t})();var uc="VALID",Wu="INVALID",pa="PENDING",fc="DISABLED",tr=class{},Yu=class extends tr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},hc=class extends tr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},pc=class extends tr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},ga=class extends tr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Qu=class extends tr{source;constructor(n){super(),this.source=n}},Ku=class extends tr{source;constructor(n){super(),this.source=n}};function fE(t){return(rf(t)?t.validators:t)||null}function aF(t){return Array.isArray(t)?Bv(t):t||null}function mE(t,n){return(rf(n)?n.asyncValidators:t)||null}function sF(t){return Array.isArray(t)?Vv(t):t||null}function rf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function cF(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new k(1e3,"");if(!i[e])throw new k(1001,"")}function lF(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new k(-1002,"")})}var ba=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return q(this.statusReactive)}set status(n){q(()=>this.statusReactive.set(n))}_status=$(()=>this.statusReactive());statusReactive=P(void 0);get valid(){return this.status===uc}get invalid(){return this.status===Wu}get pending(){return this.status===pa}get disabled(){return this.status===fc}get enabled(){return this.status!==fc}errors;get pristine(){return q(this.pristineReactive)}set pristine(n){q(()=>this.pristineReactive.set(n))}_pristine=$(()=>this.pristineReactive());pristineReactive=P(!0);get dirty(){return!this.pristine}get touched(){return q(this.touchedReactive)}set touched(n){q(()=>this.touchedReactive.set(n))}_touched=$(()=>this.touchedReactive());touchedReactive=P(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(YD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(YD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(QD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(QD(n,this._rawAsyncValidators))}hasValidator(n){return Gu(this._rawValidators,n)}hasAsyncValidator(n){return Gu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(te(D({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new pc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new pc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(te(D({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new hc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new hc(!0,i))}markAsPending(n={}){this.status=pa;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ga(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(te(D({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=fc,this.errors=null,this._forEachChild(r=>{r.disable(te(D({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Yu(this.value,i)),this._events.next(new ga(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(te(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=uc,this._forEachChild(i=>{i.enable(te(D({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(te(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===uc||this.status===pa)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Yu(this.value,e)),this._events.next(new ga(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(te(D({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?fc:uc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=pa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=nE(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ga(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?fc:this.errors?Wu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(pa)?pa:this._anyControlsHaveStatus(Wu)?Wu:uc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new hc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new pc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){rf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=aF(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=sF(this._rawAsyncValidators)}},gc=class extends ba{constructor(n,e,i){super(fE(e),mE(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){lF(this,!0,n),Object.keys(n).forEach(i=>{cF(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,te(D({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ku(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var bc=new x("",{factory:()=>of}),of="always";function Xu(t,n,e=of){jv(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),uF(t,n),mF(t,n),fF(t,n),dF(t,n)}function Ju(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),tf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function ef(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function dF(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function jv(t,n){let e=cE(t);n.validator!==null?t.setValidators(ZD(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=lE(t);n.asyncValidator!==null?t.setAsyncValidators(ZD(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();ef(n._rawValidators,r),ef(n._rawAsyncValidators,r)}function tf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=cE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=lE(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return ef(n._rawValidators,i),ef(n._rawAsyncValidators,i),e}function uF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&hE(t,n)})}function fF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&hE(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function hE(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function mF(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function pE(t,n){t==null,jv(t,n)}function hF(t,n){return tf(t,n)}function pF(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function gF(t){return Object.getPrototypeOf(t.constructor)===GP}function gE(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function vF(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===nf?e=o:gF(o)?i=o:r=o}),r||i||e||null}function bF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var _F={provide:no,useExisting:Vt(()=>_c)},mc=Promise.resolve(),_c=(()=>{class t extends no{callSetDisabledState;get submitted(){return q(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=P(!1);_directives=new Set;form;ngSubmit=new G;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new gc({},Bv(e),Vv(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){mc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Xu(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){mc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){mc.then(()=>{let i=this._findContainer(e.path),r=new gc({});pE(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){mc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){mc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),gE(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Qu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(L(vc,10),L(Lv,10),L(bc,8))};static \u0275dir=O({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&Y("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([_F]),Se]})}return t})();function KD(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function XD(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Uv=class extends ba{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(fE(e),mE(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),rf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(XD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ku(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){KD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){KD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){XD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var yF=t=>t instanceof Uv;var vE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var CF=(()=>{class t extends no{callSetDisabledState;get submitted(){return q(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=P(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(tf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Xu(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Ju(e.control||null,e,!1),bF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,gE(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Qu(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Ju(i||null,e),yF(r)&&(Xu(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);pE(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&hF(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){jv(this.form,this),this._oldForm&&tf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(L(vc,10),L(Lv,10),L(bc,8))};static \u0275dir=O({type:t,features:[Se,De]})}return t})();var bE=new x(""),wF={provide:Mi,useExisting:Vt(()=>Hv)},Hv=(()=>{class t extends Mi{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new G;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=vF(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Ju(i,this,!1),Xu(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}pF(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ju(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(L(vc,10),L(Lv,10),L(nr,10),L(bE,8),L(bc,8))};static \u0275dir=O({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[ke([wF]),Se,De]})}return t})();var xF={provide:no,useExisting:Vt(()=>zv)},zv=(()=>{class t extends CF{form=null;ngSubmit=new G;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&Y("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([xF]),Se]})}return t})();var _E=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({})}return t})();var yE=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:bc,useValue:e.callSetDisabledState??of}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[_E]})}return t})(),CE=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:bE,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:bc,useValue:e.callSetDisabledState??of}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[_E]})}return t})();var wE=new x("MAT_INPUT_VALUE_ACCESSOR");var EF=["notch"],IF=["matFormFieldNotchedOutline",""],SF=["*"],xE=["iconPrefixContainer"],DE=["textPrefixContainer"],EE=["iconSuffixContainer"],IE=["textSuffixContainer"],MF=["textField"],kF=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],TF=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function RF(t,n){t&1&&E(0,"span",21)}function AF(t,n){if(t&1&&(p(0,"label",20),j(1,1),y(2,RF,1,0,"span",21),h()),t&2){let e=_(2);M("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ye("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),C(!e.hideRequiredMarker&&e._control.required?2:-1)}}function OF(t,n){if(t&1&&y(0,AF,3,5,"label",20),t&2){let e=_();C(e._hasFloatingLabel()?0:-1)}}function NF(t,n){t&1&&E(0,"div",7)}function PF(t,n){}function FF(t,n){if(t&1&&At(0,PF,0,0,"ng-template",13),t&2){_(2);let e=Zt(1);M("ngTemplateOutlet",e)}}function LF(t,n){if(t&1&&(p(0,"div",9),y(1,FF,1,1,null,13),h()),t&2){let e=_();M("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),C(e._forceDisplayInfixLabel()?-1:1)}}function BF(t,n){t&1&&(p(0,"div",10,2),j(2,2),h())}function VF(t,n){t&1&&(p(0,"div",11,3),j(2,3),h())}function jF(t,n){}function UF(t,n){if(t&1&&At(0,jF,0,0,"ng-template",13),t&2){_();let e=Zt(1);M("ngTemplateOutlet",e)}}function HF(t,n){t&1&&(p(0,"div",14,4),j(2,4),h())}function zF(t,n){t&1&&(p(0,"div",15,5),j(2,5),h())}function $F(t,n){t&1&&E(0,"div",16)}function WF(t,n){t&1&&(p(0,"div",18),j(1,6),h())}function GF(t,n){if(t&1&&(p(0,"mat-hint",22),b(1),h()),t&2){let e=_(2);M("id",e._hintLabelId),m(),se(e.hintLabel)}}function qF(t,n){if(t&1&&(p(0,"div",19),y(1,GF,2,2,"mat-hint",22),j(2,7),E(3,"div",23),j(4,8),h()),t&2){let e=_();m(),C(e.hintLabel?1:-1)}}var _a=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["mat-label"]]})}return t})(),OE=new x("MatError"),cf=(()=>{class t{id=d(pt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&je("id",r.id)},inputs:{id:"id"},features:[ke([{provide:OE,useExisting:t}])]})}return t})(),sf=(()=>{class t{align="start";id=d(pt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(je("id",r.id),ye("align",null),V("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),ZF=new x("MatPrefix");var YF=new x("MatSuffix");var NE=new x("FloatingLabelParent"),SE=(()=>{class t{_elementRef=d(B);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d($u);_ngZone=d(F);_parent=d(NE);_resizeSubscription=new ge;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return QF(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function QF(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var ME="mdc-line-ripple--active",af="mdc-line-ripple--deactivating",kE=(()=>{class t{_elementRef=d(B);_cleanupTransitionEnd;constructor(){let e=d(F),i=d(Fe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(af),e.add(ME)}deactivate(){this._elementRef.nativeElement.classList.add(af)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(af);e.propertyName==="opacity"&&r&&i.remove(ME,af)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),TE=(()=>{class t{_elementRef=d(B);_ngZone=d(F);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ye(EF,5),i&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:IF,ngContentSelectors:SF,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(xe(),Me(0,"div",1),ue(1,"div",2,0),j(3),he(),Me(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),$v=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t})}return t})();var yc=new x("MatFormField"),KF=new x("MAT_FORM_FIELD_DEFAULT_OPTIONS"),RE="fill",XF="auto",AE="fixed",JF="translateY(-50%)",io=(()=>{class t{_elementRef=d(B);_changeDetectorRef=d(Qe);_platform=d(Ee);_idGenerator=d(pt);_ngZone=d(F);_defaults=d(KF,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ms("iconPrefixContainer");_textPrefixContainerSignal=Ms("textPrefixContainer");_iconSuffixContainerSignal=Ms("iconSuffixContainer");_textSuffixContainerSignal=Ms("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=xw(_a);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=it(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||XF}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||RE;this._appearanceSignal.set(i)}_appearanceSignal=P(RE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||AE}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||AE}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=et();constructor(){let e=this._defaults,i=d(Yt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),$t(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Ct([void 0,void 0]),K(()=>[i.errorState,i.userAriaDescribedBy]),cl(),Ie(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Be(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ft(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Pd({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,v=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,w=`var(--mat-mdc-form-field-label-transform, ${JF} translateX(${v}))`,A=a+s+c+l;return[w,A]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Md(o,r._labelChild,_a,5),St(o,$v,5)(o,ZF,5)(o,YF,5)(o,OE,5)(o,sf,5)),i&2){Td();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(kd(r._iconPrefixContainerSignal,xE,5)(r._textPrefixContainerSignal,DE,5)(r._iconSuffixContainerSignal,EE,5)(r._textSuffixContainerSignal,IE,5),Ye(MF,5)(xE,5)(DE,5)(EE,5)(IE,5)(SE,5)(TE,5)(kE,5)),i&2){Td(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&V("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ke([{provide:yc,useExisting:t},{provide:NE,useExisting:t}])],ngContentSelectors:TF,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(xe(kF),At(0,OF,1,1,"ng-template",null,0,Rd),p(2,"div",6,1),Y("click",function(a){return r._control.onContainerClick(a)}),y(4,NF,1,0,"div",7),p(5,"div",8),y(6,LF,2,2,"div",9),y(7,BF,3,0,"div",10),y(8,VF,3,0,"div",11),p(9,"div",12),y(10,UF,1,1,null,13),j(11),h(),y(12,HF,3,0,"div",14),y(13,zF,3,0,"div",15),h(),y(14,$F,1,0,"div",16),h(),p(15,"div",17),y(16,WF,2,0,"div",18)(17,qF,5,1,"div",19),h()),i&2){let o;m(2),V("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),m(2),C(!r._hasOutline()&&!r._control.disabled?4:-1),m(2),C(r._hasOutline()?6:-1),m(),C(r._hasIconPrefix?7:-1),m(),C(r._hasTextPrefix?8:-1),m(2),C(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),m(2),C(r._hasTextSuffix?12:-1),m(),C(r._hasIconSuffix?13:-1),m(),C(r._hasOutline()?-1:14),m(),V("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();m(),C((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[SE,TE,fg,kE,sf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var PE=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Cc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Eu,io,Ue]})}return t})();var nL=["button","checkbox","file","hidden","image","radio","range","reset","submit"],iL=new x("MAT_INPUT_CONFIG"),df=(()=>{class t{_elementRef=d(B);_platform=d(Ee);ngControl=d(Mi,{optional:!0,self:!0});_autofillMonitor=d(GD);_ngZone=d(F);_formField=d(yc,{optional:!0});_renderer=d(Fe);_uid=d(pt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(iL,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=it(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(va.required)??!1}set required(e){this._required=it(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&dv().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=it(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>dv().has(e));constructor(){let e=d(_c,{optional:!0}),i=d(zv,{optional:!0}),r=d(PE),o=d(wE,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?vi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new lf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&$t(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){nL.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&Y("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(je("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ye("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),V("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee]},exportAs:["matInput"],features:[ke([{provide:$v,useExisting:t}]),De]})}return t})(),uf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Cc,Cc,qD,Ue]})}return t})();var rL=["mat-internal-form-field",""],oL=["*"],LE=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:rL,ngContentSelectors:oL,decls:1,vars:0,template:function(i,r){i&1&&(xe(),j(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var aL=["input"],sL=["label"],cL=["*"],Wv={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},lL=new x("mat-checkbox-default-options",{providedIn:"root",factory:()=>Wv}),Pt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Pt||{}),Gv=class{source;checked},qv=(()=>{class t{_elementRef=d(B);_changeDetectorRef=d(Qe);_ngZone=d(F);_animationsDisabled=et();_options=d(lL,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new Gv;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new G;indeterminateChange=new G;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Pt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){d(ft).load(Kn);let e=d(new yi("tabindex"),{optional:!0});this._options=this._options||Wv,this.color=this._options.color||Wv.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=d(pt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Pt.Indeterminate):this._transitionCheckState(this.checked?Pt.Checked:Pt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=P(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Pt.Checked:Pt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Pt.Init:if(i===Pt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Pt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Pt.Unchecked:return i===Pt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Pt.Checked:return i===Pt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Pt.Indeterminate:return i===Pt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ye(aL,5)(sL,5),i&2){let o;U(o=H())&&(r._inputElement=o.first),U(o=H())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(je("id",r.id),ye("tabindex",null)("aria-label",null)("aria-labelledby",null),bt(r.color?"mat-"+r.color:"mat-accent"),V("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ee],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ee],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ee],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Gi(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee],checked:[2,"checked","checked",ee],disabled:[2,"disabled","disabled",ee],indeterminate:[2,"indeterminate","indeterminate",ee]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ke([{provide:nr,useExisting:Vt(()=>t),multi:!0},{provide:vc,useExisting:t,multi:!0}]),De],ngContentSelectors:cL,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(xe(),p(0,"div",3),Y("click",function(a){return r._preventBubblingFromLabel(a)}),p(1,"div",4,0)(3,"div",5),Y("click",function(){return r._onTouchTargetClick()}),h(),p(4,"input",6,1),Y("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),h(),E(6,"div",7),p(7,"div",8),is(),p(8,"svg",9),E(9,"path",10),h(),rs(),E(10,"div",11),h(),E(11,"div",12),h(),p(12,"label",13,2),j(14),h()()),i&2){let o=Zt(2);M("labelPosition",r.labelPosition),m(4),V("mdc-checkbox--selected",r.checked),M("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),ye("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),m(7),M("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),m(),M("for",r.inputId)}},dependencies:[to,LE],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),BE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[qv,Ue]})}return t})();var Zv=0;function uL(){return Zv}function ir(t,n){return(...e)=>{try{return Zv=n,t(...e)}finally{Zv=0}}}function fL(t){return!t}function VE(t){return t}function On(t){return Array.isArray(t)}function ya(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var ro=Symbol(),_f=Symbol(),xc=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(jE(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>jE(this.predicates,i)):n.fns;this.fns.push(...e)}},mf=class extends xc{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==_f})}},Ca=class t extends xc{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===_f?e:On(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},Yv=class extends Ca{constructor(n){super(n,void 0)}},Qv=class extends xc{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==_f&&(e=this.key.reducer.reduce(e,r))}return e}};function jE(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=q(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return _f}return n(e)}}var wa=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new mf(n),this.disabledReasons=new Yv(n),this.readonly=new mf(n),this.syncErrors=Ca.ignoreNull(n),this.syncTreeErrors=Ca.ignoreNull(n),this.asyncErrors=Ca.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new Qv(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},hf=class{depth;constructor(n){this.depth=n}build(){return new pf(this,[],0)}},xa=class t extends hf{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===ro){let e=this.getCurrent().children;e.size>(e.has(ro)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:ir(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Dc(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},Dc=class extends hf{logic=new wa([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(ir(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(ir(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(ir(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(ir(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(ir(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(ir(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(ir(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new xa(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},pf=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?mL(n,e,i):new wa([])}getChild(n){let e=this.builder?zE(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>Xv(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>Xv(a,this.depth))],this.depth+1));return new Kv(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},Kv=class t{all;logic;constructor(n){this.all=n,this.logic=new wa([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function zE(t,n){if(t instanceof xa)return t.all.flatMap(({builder:e,predicate:i})=>{let r=zE(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof Dc)return[...n!==ro&&t.children.has(ro)?[{builder:t.getChild(ro),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new k(1909,!1)}function mL(t,n,e){let i=new wa(n);if(t instanceof xa){let r=t.all.map(({builder:o,predicate:a})=>new pf(o,a?[...n,Xv(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof Dc)i.mergeIn(t.logic);else throw new k(1909,!1);return i}function Xv(t,n){return te(D({},t),{depth:n})}var $E=Symbol("PATH"),ei=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,hL);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=xa.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[$E]}static newRoot(){return new t([],void 0,void 0,void 0)}},hL={get(t,n){return n===$E?t:t.getChild(n).fieldPathProxy}},ff,wc=new Map,gf=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(wc.has(this))return wc.get(this);let n=ei.newRoot();wc.set(this,n);let e=ff;try{ff=n,this.schemaFn(n.fieldPathProxy)}finally{ff=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return wc.clear(),n===void 0?ei.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{wc.clear()}}};function pL(t){return t instanceof gf||typeof t=="function"}function yf(t){if(ff!==ei.unwrapFieldPath(t).root)throw new k(1908,!1)}function oo(t,n,e){return yf(t),ei.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var rr={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:gL};function gL(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var vf=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function Nn(t){return new vf(t??rr.override())}var db=Nn(rr.or()),ub=Nn(rr.max()),fb=Nn(rr.min()),WE=Nn(rr.max()),GE=Nn(rr.min()),qE=Nn(rr.list());function vL(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var Jv=class{node;constructor(n){this.node=n}rawSyncTreeErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...bL(this.node.submitState.submissionErrors())]);syncValid=$(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),fL));syncTreeErrors=$(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=$(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=$(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=$(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=$(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return q(()=>n.sort(_L)),n});pending=$(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=$(()=>{if(this.shouldSkipValidation())return"valid";let n=vL(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=$(()=>this.status()==="valid");invalid=$(()=>this.status()==="invalid");shouldSkipValidation=$(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function bL(t){return t===void 0?[]:On(t)?t:[t]}function Cf(t,n){if(On(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function UE(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function _L(t,n){let e=UE(t),i=UE(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var eb=Nn(),tb=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=$(()=>{let i=ei.unwrapFieldPath(n),r=this.node,o=uL();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new k(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new k(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=$(()=>{let n=this.key();if(!On(q(this.node.structure.parent.value)))throw new k(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof ba)throw new k(1907,!1);return e}},nb=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=q(()=>rt(this.node.structure.injector,()=>e.create($(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new k(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,$(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},yL={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=q(i.value);if(On(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(ya(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=q(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=q(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function CL(t,n){let e=$(()=>t()[n()]);return e[$e]=t[$e],e.set=i=>{t.update(r=>wL(r,i,n()))},e.update=i=>{e.set(i(q(e)))},e.asReadonly=()=>e,e}function wL(t,n,e){if(On(t)){let i=[...t];return i[e]=n,i}else return te(D({},t),{[e]:n})}var bf=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=ie.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>q(e.reader))}getChild(n){let e=n.toString(),i=q(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(q(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return ZE;if(e===void 0){let r=i;return $(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new k(1902,!1);return r})}else{let r=i;return $(()=>{let o=this.parent.structure.value();if(!On(o))throw new k(1903,!1);let a=o[r];if(ya(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let c=o[s];if(ya(c)&&c.hasOwnProperty(this.parent.structure.identitySymbol)&&c[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new k(1904,!1)})}}createChildrenMap(){return qn({source:this.value,computation:(n,e)=>{if(!ya(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=On(n);i!==void 0&&(o?r=DL(i,n,this.identitySymbol):r=EL(i,n));for(let a of Object.keys(n)){let s,c=n[a];if(c===void 0){i.byPropertyKey.has(a)&&(r??=D({},i),r.byPropertyKey.delete(a));continue}o&&ya(c)&&!On(c)&&(s=c[this.identitySymbol]??=Symbol(""));let l;s&&(i.byTrackingKey?.has(s)||(r??=D({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),l=(r??i).byTrackingKey.get(s));let u=i.byPropertyKey.get(a);u===void 0?(r??=D({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l??this.createChildNode(a,s,o)})):l&&l!==u.node&&(r??=D({},i),u.node=l)}return r??i}})}createReader(n){return $(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},ib=class extends bf{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return xL}get keyInParent(){return ZE}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},rb=class extends bf{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=$(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=CL(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var xL=$(()=>[]),ZE=$(()=>{throw new k(1905,!1)});function DL(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),ya(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=D({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=D({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function EL(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=D({},t),e.byPropertyKey.delete(i));return e}var ob=class{node;selfSubmitting=P(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=qn({source:this.node.structure.value,computation:()=>[]})}submitting=$(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},Ec=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new tb(this)}fieldProxy=new Proxy(()=>this,yL);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new nb(this),this.submitState=new ob(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(HE,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(HE,void 0)}pendingSync=qn({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(fb)}get maxLength(){return this.metadata(GE)}get min(){return this.metadata(ub)}get minLength(){return this.metadata(WE)}get pattern(){return this.metadata(qE)??IL}get required(){return this.metadata(db)??SL}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){q(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){q(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=qn(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=q(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new ib(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new rb(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(ro),o=this.structure.logic.getChild(ro)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},IL=$(()=>[]),SL=$(()=>!1);function HE(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var ab=class{node;selfTouched=P(!1);selfDirty=P(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=P([]);constructor(n){this.node=n}dirty=$(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),VE)});touched=$(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),VE)});disabledReasons=$(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=$(()=>!!this.disabledReasons().length);readonly=$(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=$(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=$(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=$(()=>{if(this.node.logicNode.logic.hasMetadata(eb)){let e=this.node.logicNode.logic.getMetadata(eb).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=$(()=>this.hidden()||this.disabled()||this.readonly())},sb=class{newRoot(n,e,i,r){return new Ec({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new Ec(n)}createNodeState(n){return new ab(n)}createValidationState(n){return new Jv(n)}createStructure(n,e){return n.createStructure(e)}},cb=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(Wi)}.form${ML++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){$t(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),q(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},ML=0;function kL(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?pL(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function mb(...t){let[n,e,i]=kL(t),r=i?.injector??d(ie),o=rt(r,()=>gf.rootCompile(e)),a=new cb(r,i?.name,i?.submission),s=i?.adapter??new sb,c=Ec.newRoot(a,n,o,s);return a.createFieldManagementEffect(c.structure),c.fieldTree}async function hb(t,n){let e=q(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new k(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",c=!0;q(()=>{YE(e),s==="none"?c=e.valid():s==="pending"&&(c=!e.invalid())});try{if(c){e.submitState.selfSubmitting.set(!0);let l=await q(()=>o?.(i,r));return l&&TL(e,l),!l||On(l)&&l.length===0}else q(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function YE(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())YE(n)}}function TL(t,n){On(n)||(n=[n]);let e=new Map;for(let i of n){let r=Cf(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var lb=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function QE(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof lb?e.context:e;return n}var RL=new x("");function Da(t,n){return t instanceof Function?t(n):t}function Cb(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function KE(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function wb(t,n){yf(t),ei.unwrapFieldPath(t).builder.addSyncErrorRule(i=>Cf(n(i),i.fieldTree))}function AL(t){return new pb(t)}function OL(t,n){return new gb(t,n)}function NL(t,n){return new vb(t,n)}var Ea=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},pb=class extends Ea{kind="required"},gb=class extends Ea{min;kind="min";constructor(n,e){super(e),this.min=n}},vb=class extends Ea{max;kind="max";constructor(n,e){super(e),this.max=n}};var bb=class extends Ea{kind="parse"};function wf(t,n,e){let i=oo(t,Nn(),r=>typeof n=="number"?n:n(r));oo(t,fb,({state:r})=>r.metadata(i)()),wb(t,r=>{if(Cb(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?Da(e.error,r):NL(o,{message:Da(e?.message,r)})})}function xf(t,n,e){let i=oo(t,Nn(),r=>typeof n=="number"?n:n(r));oo(t,ub,({state:r})=>r.metadata(i)()),wb(t,r=>{if(Cb(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?Da(e.error,r):OL(o,{message:Da(e?.message,r)})})}function Df(t,n){let e=oo(t,Nn(),i=>n?.when?n.when(i):!0);oo(t,db,({state:i})=>i.metadata(e)()),wb(t,i=>{if(i.state.metadata(e)()&&Cb(i.value()))return n?.error?Da(n.error,i):AL({message:Da(n?.message,i)})})}function JE(t,n){yf(t),ei.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>Cf(n(i),i.fieldTree))}var PL=new x("");function FL(t,n,e){let i=qn({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(KE(a.error)),a.value!==void 0&&n(a.value),i.set(KE(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var _b=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return QE(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new k(1910,!1)}valueAccessor=null;hasValidator(n){return n===va.required?this.field().required():!1}updateValueAndValidity(){}},yb={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},LL=(()=>{let t={};for(let n of Object.keys(yb))t[yb[n]]=n;return t})();function xb(t,n){let e=LL[n];return t[e]?.()}var Db=Object.values(yb);function Ef(){return{}}function ao(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function BL(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function VL(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function jL(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function UL(t,n){let e;if(t.validity.badInput)return{error:new bb};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=q(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=q(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function HL(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){XE(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){XE(t,n);return}}t.value=n}function XE(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function Eb(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function zL(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=Ef();return()=>{let i=n.state(),r=i.controlValue();ao(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of Db){let a;o==="errors"?a=n.errors():a=xb(i,o),ao(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&Eb(n.renderer,n.nativeFormElement,o,a))}}}function $L(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=Ef();return()=>{let i=n.state(),r=i.value();ao(e,"controlValue",r)&&q(()=>n.controlValueAccessor.writeValue(r));for(let o of Db){let a=xb(i,o);if(ao(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?q(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&Eb(n.renderer,n.nativeFormElement,o,a)}}}}function WL(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>GL(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function GL(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function qL(t,n,e){let i=!1,r=n.nativeFormElement,o=FL(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>UL(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&WL(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=Ef();return()=>{let s=n.state(),c=s.controlValue();ao(a,"controlValue",c)&&HL(r,c);for(let l of Db){let u=xb(s,l);ao(a,l,u)&&(t.setInputOnDirectives(l,u),n.elementAcceptsNativeProperty(l)&&Eb(n.renderer,r,l,u))}i=!0}}var ZL=Symbol(),YL=new x(""),eI=(()=>{class t{field=pe.required({alias:"formField"});renderer=d(Fe);destroyRef=d(Dt);state=$(()=>this.field()());injector=d(ie);element=d(B).nativeElement;elementIsNativeFormElement=BL(this.element);elementAcceptsNumericValues=VL(this.element);elementAcceptsTextualValues=jL(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=d(nr,{optional:!0,self:!0});config=d(RL,{optional:!0});parseErrorsSource=P(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new _b(this.state)}parseErrors=$(()=>this.parseErrorsSource()?.().map(e=>te(D({},e),{fieldTree:q(this.state).fieldTree,formField:this}))??[]);errors=$(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,$(()=>o(this))]);if(e.length===0)return;let i=Ef();Pd({write:()=>{for(let[r,o]of e){let a=o();ao(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new k(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),$t(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[ZL];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=$L(e,this);else if(e.customControl)this.\u0275ngControlUpdate=zL(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=qL(e,this,this.parseErrorsSource);else throw new k(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[ke([{provide:YL,useExisting:t},{provide:Mi,useFactory:()=>d(t).interopNgControl},{provide:PL,useFactory:()=>d(t).parseErrorsSource}]),Kp("formField")]})}return t})();function QL(t,n){if(t&1&&(p(0,"mat-error"),b(1),h()),t&2){let e=n.$implicit;m(),se(e.message)}}function KL(t,n){if(t&1&&(p(0,"mat-error"),b(1),h()),t&2){let e=n.$implicit;m(),se(e.message)}}function XL(t,n){if(t&1&&(p(0,"mat-error"),b(1),h()),t&2){let e=n.$implicit;m(),se(e.message)}}function JL(t,n){t&1&&b(0," + ")}function e2(t,n){if(t&1&&(b(0),y(1,JL,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ce(" ",e," "),m(),C(i!==r-1?1:-1)}}function t2(t,n){if(t&1&&(p(0,"div"),b(1),p(2,"span",18),b(3,"= ("),le(4,e2,2,2,null,null,Ve),b(6),h()()),t&2){let e=_().$implicit;nt("width","100%"),m(),Ce(" ",e.calculateRollAverage()," "),m(3),de(e.diceValues),m(2),Ce(") / ",e.diceValues.length)}}function n2(t,n){if(t&1&&(p(0,"div"),b(1),h()),t&2){let e=_().$implicit;m(),se(e.diceValues[0])}}function i2(t,n){if(t&1&&y(0,t2,7,4,"div",17)(1,n2,2,1,"div"),t&2){let e=_().$implicit;C(e.useAveragedRolls?0:1)}}function r2(t,n){if(t&1&&(p(0,"div",12)(1,"div",14)(2,"b"),b(3,"# of Rolls"),h(),p(4,"p"),b(5),h(),p(6,"b"),b(7,"Bounds"),h(),p(8,"p"),b(9),h()(),p(10,"div",15)(11,"b"),b(12,"Results"),h(),p(13,"div",16),le(14,i2,2,1,null,null,Ve),h()()()),t&2){let e=n.$implicit;m(5),se(e.numberOfRolls),m(4),_i("",e.lowerBound," - ",e.upperBound),m(5),de(e.rolls)}}function o2(t,n){t&1&&(p(0,"div",13)(1,"span",19),b(2,"No rolls yet :("),h()())}var If=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=P({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=mb(this.customRollParams,n=>{Df(n.minimum),Df(n.maximum),Df(n.count),xf(n.minimum,1,{message:"Must be > 0"}),xf(n.maximum,2,{message:"Must be > 1"}),xf(n.count,1,{message:"Must be > 0"}),wf(n.minimum,999,{message:"Must be <= 999"}),wf(n.maximum,1e3,{message:"Must be <= 1000"}),wf(n.count,20,{message:"Must be <= 20"}),JE(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){hb(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new Ib(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"h1"),b(3,"Dice Roller"),h(),p(4,"div",2)(5,"mat-form-field")(6,"mat-label"),b(7,"Lowest Value"),h(),E(8,"input",3),jo(),le(9,QL,2,1,"mat-error",null,dn),h(),p(11,"mat-form-field")(12,"mat-label"),b(13,"Highest Value"),h(),E(14,"input",3),jo(),le(15,KL,2,1,"mat-error",null,dn),h(),p(17,"mat-form-field")(18,"mat-label"),b(19,"# of Dice"),h(),E(20,"input",3),jo(),le(21,XL,2,1,"mat-error",null,dn),h()(),p(23,"mat-checkbox",4),b(24,"Use averaged rolls (True Hit)"),h(),jo(),p(25,"button",5),Y("click",function(){return i.customRollDice()}),b(26,"Roll Dice"),h(),p(27,"div",6)(28,"button",7),Y("click",function(){return i.quickRollDice(1,2,1,!1)}),b(29,"1 d2"),h(),p(30,"button",7),Y("click",function(){return i.quickRollDice(1,100,1,!1)}),b(31,"1 d100"),h(),p(32,"button",7),Y("click",function(){return i.quickRollDice(1,100,1,!0)}),b(33,"1 d100 Avg."),h()(),E(34,"mat-divider"),p(35,"div",8)(36,"h2"),b(37,"History"),h(),p(38,"button",9),Y("click",function(){return i.clearRollHistory()}),E(39,"img",10),h()()(),p(40,"div",11),le(41,r2,16,3,"div",12,Ve,!1,o2,3,0,"div",13),h()()),e&2&&(m(5),nt("width","30%"),m(3),M("formField",i.customDiceRollForm.minimum),Uo(),m(),de(i.customDiceRollForm.minimum().errors()),m(2),nt("width","30%"),m(3),M("formField",i.customDiceRollForm.maximum),Uo(),m(),de(i.customDiceRollForm.maximum().errors()),m(2),nt("width","30%"),m(3),M("formField",i.customDiceRollForm.count),Uo(),m(),de(i.customDiceRollForm.count().errors()),m(2),M("formField",i.customDiceRollForm.useAverages),Uo(),m(2),nt("width","100%"),m(3),nt("width","30%"),m(2),nt("width","30%"),m(2),nt("width","30%"),m(9),de(i.rollHistory))},dependencies:[er,RD,Nu,sc,uf,df,io,_a,cf,BE,qv,eI],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},Ib=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new Sb(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},Sb=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var we=class t{constructor(n){this.http=n;this.http=d(xi)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=P(!0);isLoading=this.loading.asReadonly();error=P("");errorMessage=this.error.asReadonly();map=P({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(W(xi))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var tI=(()=>{class t{_animationsDisabled=et();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&V("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var a2=["text"],s2=[[["mat-icon"]],"*"],c2=["mat-icon","*"];function l2(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=_();M("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function d2(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=_();M("disabled",e.disabled)}}function u2(t,n){if(t&1&&(p(0,"span",4),b(1),h()),t&2){let e=_();m(),Ce("(",e.group.label,")")}}var Mb=new x("MAT_OPTION_PARENT_COMPONENT"),kb=new x("MatOptgroup");var Ic=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Ia=(()=>{class t{_element=d(B);_changeDetectorRef=d(Qe);_parent=d(Mb,{optional:!0});group=d(kb,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(pt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=P(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new G;_text;_stateChanges=new R;constructor(){let e=d(ft);e.load(Kn),e.load(wu),this._signalDisableRipple=!!this._parent&&vi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!hn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ic(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ye(a2,7),i&2){let o;U(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&Y("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(je("id",r.id),ye("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),V("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ee]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:c2,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(xe(s2),y(0,l2,1,2,"mat-pseudo-checkbox",1),j(1),p(2,"span",2,0),j(4,1),h(),y(5,d2,1,1,"mat-pseudo-checkbox",3),y(6,u2,2,1,"span",4),E(7,"div",5)),i&2&&(C(r.multiple?0:-1),m(5),C(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),m(),C(r.group&&r.group._inert?6:-1),m(),M("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[tI,to],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function nI(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function iI(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var rI=Ru();function uI(t){return new Sf(t.get(An),t.get(oe))}var Sf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=at(-this._previousScrollPosition.left),n.style.top=at(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),rI&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),rI&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function fI(t,n){return new Mf(t.get(ha),t.get(F),t.get(An),n)}var Mf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ie(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Sc=class{enable(){}disable(){}attach(){}};function Tb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function oI(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Nf(t,n){return new kf(t.get(ha),t.get(An),t.get(F),n)}var kf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Tb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},mI=(()=>{class t{_injector=d(ie);constructor(){}noop=()=>new Sc;close=e=>fI(this._injector,e);block=()=>uI(this._injector);reposition=e=>Nf(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sa=class{positionStrategy;scrollStrategy=new Sc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Tf=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var hI=(()=>{class t{_attachedOverlays=[];_document=d(oe);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pI=(()=>{class t extends hI{_ngZone=d(F);_renderer=d(ut).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gI=(()=>{class t extends hI{_platform=d(Ee);_ngZone=d(F);_renderer=d(ut).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Nt(e)};_clickListener=e=>{let i=Nt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(aI(s.overlayElement,i)||aI(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function aI(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var vI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),bI=(()=>{class t{_platform=d(Ee);_containerElement;_document=d(oe);_styleLoader=d(ft);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||lv()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),lv()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(vI)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ab(t){return t&&t.nodeType===1}var Rf=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=ge.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,u=!1,f,g){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=u,this._injector=f,this._renderer=g,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ht(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=D(D({},this._config),n),this._updateElementSize()}setDirection(n){this._config=te(D({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=at(this._config.width),n.height=at(this._config.height),n.minWidth=at(this._config.minWidth),n.minHeight=at(this._config.minHeight),n.maxWidth=at(this._config.maxWidth),n.maxHeight=at(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ab(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Rb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Ii(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ht(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},sI="cdk-overlay-connected-position-bounding-box",f2=/([A-Za-z%]+)$/;function Pf(t,n){return new Af(n,t.get(An),t.get(oe),t.get(Ee),t.get(bI))}var Af=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=ge.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(sI),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(l,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let u=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);u>c&&(c=u,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&so(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(sI),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof B?this._origin.nativeElement:Ab(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=lI(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let u=0-a,f=a+o.width-i.width,g=0-s,v=s+o.height-i.height,w=this._subtractOverflows(o.width,u,f),A=this._subtractOverflows(o.height,g,v),N=w*A;return{visibleArea:N,isCompletelyWithinViewport:o.width*o.height===N,fitsInViewportVertically:A===o.height,fitsInViewportHorizontally:w==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=cI(this._overlayRef.getConfig().minHeight),s=cI(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=lI(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=l||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!m2(this._lastScrollVisibility,i)){let r=new Tf(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let v=Math.min(i.bottom-n.y+i.top,n.y),w=this._lastBoundingBoxSize.height;o=v*2,a=n.y-v,o>w&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-w/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,g;if(l)g=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(c)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-n.x+i.left,n.x),w=this._lastBoundingBoxSize.width;u=v*2,f=n.x-v,u>w&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-w/2)}return{top:a,left:f,bottom:s,right:g,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=at(i.width),r.height=at(i.height),r.top=at(i.top)||"auto",r.bottom=at(i.bottom)||"auto",r.left=at(i.left)||"auto",r.right=at(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=at(o)),a&&(r.maxWidth=at(a))}this._lastBoundingBoxSize=i,so(this._boundingBox.style,r)}_resetBoundingBoxStyles(){so(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){so(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();so(i,this._getExactOverlayY(e,n,u)),so(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=at(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=at(a.maxWidth):o&&(i.maxWidth="")),so(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=at(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=at(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:oI(n,i),isOriginOutsideView:Tb(n,i),isOverlayClipped:oI(e,i),isOverlayOutsideView:Tb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ii(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof B)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function so(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function cI(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(f2);return!e||e==="px"?parseFloat(n):null}return t||null}function lI(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function m2(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var dI="cdk-global-overlay-wrapper";function _I(t){return new Of}var Of=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(dI),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,g=this._overlayRef.getConfig().direction==="rtl",v="",w="",A="";c?A="flex-start":u==="center"?(A="center",g?w=f:v=f):g?u==="left"||u==="end"?(A="flex-end",v=f):(u==="right"||u==="start")&&(A="flex-start",w=f):u==="left"||u==="start"?(A="flex-start",v=f):(u==="right"||u==="end")&&(A="flex-end",w=f),n.position=this._cssPosition,n.marginLeft=c?"0":v,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":w,e.justifyContent=A,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(dI),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},yI=(()=>{class t{_injector=d(ie);constructor(){}global(){return _I()}flexibleConnectedTo(e){return Pf(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),CI=new x("OVERLAY_DEFAULT_CONFIG");function Ff(t,n){t.get(ft).load(vI);let e=t.get(bI),i=t.get(oe),r=t.get(pt),o=t.get(en),a=t.get(Yt),s=t.get(Fe,null,{optional:!0})||t.get(ut).createRenderer(null,null),c=new Sa(n),l=t.get(CI,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let g=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Ab(g)?g.after(f):g?.type==="parent"?g.element.appendChild(f):e.getContainerElement().appendChild(f),new Rf(new zu(u,o,t),f,u,c,t.get(F),t.get(pI),i,t.get(Zi),t.get(gI),n?.disableAnimations??t.get(bs,null,{optional:!0})==="NoopAnimations",t.get(Ae),s)}var wI=(()=>{class t{scrollStrategies=d(mI);_positionBuilder=d(yI);_injector=d(ie);constructor(){}create(e){return Ff(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ob=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({providers:[wI],imports:[Ue,LD,vv,vv]})}return t})();var Lf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Ue]})}return t})();var Nb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[ma,Lf,Ia,Ue]})}return t})();var h2=["panel"],p2=["*"];function g2(t,n){if(t&1&&(ue(0,"div",1,0),j(2),he()),t&2){let e=n.id,i=_();bt(i._classList),V("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),je("id",i.id),ye("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var Pb=class{source;option;constructor(n,e){this.source=n,this.option=e}},xI=new x("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),DI=(()=>{class t{_changeDetectorRef=d(Qe);_elementRef=d(B);_defaults=d(xI);_animationsDisabled=et();_activeOptionChanges=ge.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new G;opened=new G;closed=new G;optionActivated=new G;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=d(pt).getId("mat-autocomplete-");inertGroups;constructor(){let e=d(Ee);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new rc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Pb(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&St(o,Ia,5)(o,kb,5),i&2){let a;U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ye(Rt,7)(h2,5),i&2){let o;U(o=H())&&(r.template=o.first),U(o=H())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ee],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ee],requireSelection:[2,"requireSelection","requireSelection",ee],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ee],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ee]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[ke([{provide:Mb,useExisting:t}])],ngContentSelectors:p2,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(xe(),Ho(0,g2,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var v2={provide:nr,useExisting:Vt(()=>Fb),multi:!0};var b2=new x("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(ie);return()=>Nf(t)}}),Fb=(()=>{class t{_environmentInjector=d(Ae);_element=d(B);_injector=d(ie);_viewContainerRef=d(It);_zone=d(F);_changeDetectorRef=d(Qe);_dir=d(Yt,{optional:!0});_formField=d(yc,{optional:!0,host:!0});_viewportRuler=d(An);_scrollStrategy=d(b2);_renderer=d(Fe);_animationsDisabled=et();_defaults=d(xI,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new R;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=ge.EMPTY;_breakpointObserver=d(ic);_handsetLandscapeSubscription=ge.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new R;_overlayPanelClass=Ii(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ku(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Ft(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ie(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ie(()=>this._overlayAttached)):Z()).pipe(K(e=>e instanceof Ic?e:null))}optionSelections=br(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Ct(e),lt(()=>Ft(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(lt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ne(e=>{let i=o=>{let a=Nt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!c||!c.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=hn(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return bu()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ne(r=>{ht(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(dt(()=>this._positionStrategy.reapplyLastPosition()),wm(0))??Z();return Ft(e,i).pipe(lt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ct(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;cv(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Si(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Ff(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(bD.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!hn(e)||e.keyCode===38&&hn(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Sa({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Pf(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=nI(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=iI(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&ku(this._trackedModal,"aria-owns",i),cv(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ku(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&Y("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&ye("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ee]},exportAs:["matAutocompleteTrigger"],features:[ke([v2]),De]})}return t})(),EI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Ob,Nb,cc,Nb,Ue]})}return t})();function y2(t,n){if(t&1&&(ue(0,"a",4),b(1),he()),t&2){let e=_();je("href",e.titleHref(),ze),m(),se(e.title())}}function C2(t,n){if(t&1&&b(0),t&2){let e=_();Ce(" ",e.title()," ")}}function w2(t,n){if(t&1&&(ue(0,"p"),b(1),he()),t&2){let e=n.$implicit;m(),se(e)}}var Bf=class t{label=pe.required();title=pe.required();titleHref=pe();textFields=pe();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"h2",1),b(2),he(),Me(3,"div",2),ue(4,"h2",3),y(5,y2,2,2,"a",4)(6,C2,1,1),he()(),le(7,w2,2,1,"p",null,Ve)),e&2&&(m(2),se(i.label()),m(3),C(i.titleHref()?5:6),m(2),de(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function x2(t,n){t&1&&b(0," \xA0 ")}function D2(t,n){if(t&1&&(b(0),y(1,x2,1,0),b(2)),t&2){let e=_(3);Ce(" ",e.constants.currencySymbol," "),m(),C(e.constants.includeSpace?1:-1),m(),Ce(" ",e.amount()," ")}}function E2(t,n){t&1&&b(0," \xA0 ")}function I2(t,n){if(t&1&&(b(0),y(1,E2,1,0),b(2)),t&2){let e=_(3);Ce(" ",e.amount()," "),m(),C(e.constants.includeSpace?1:-1),m(),Ce(" ",e.constants.currencySymbol," ")}}function S2(t,n){if(t&1&&y(0,D2,3,3)(1,I2,3,3),t&2){let e=_(2);C(e.constants.isSymbolLeftAligned?0:1)}}function M2(t,n){if(t&1&&b(0),t&2){let e=_(2);Ce(" ",e.amount()," ")}}function k2(t,n){if(t&1&&y(0,S2,2,1)(1,M2,1,1),t&2){let e=_();C(e.constants?0:1)}}var Vf=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(we),this.constants=this.teamDataService.getCurrencyConstants()}amount=pe.required();constants;static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&y(0,k2,2,1),e&2&&C(i.amount()?0:-1)},encapsulation:2})};function T2(t,n){if(t&1&&Me(0,"img",1),t&2){let e=_();je("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}var jf=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(we)}tag=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[De],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(ue(0,"div",0),y(1,T2,1,1,"img",1),ue(2,"p"),b(3),he()()),e&2&&(je("title",i.tag()),m(),C(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),m(2),se(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var Uf=class t{percentage=pe.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[De],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Me(0,"div",0),e&2&&nt("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function R2(t,n){if(t&1&&Me(0,"img",1),t&2){let e=_(3);je("height",e.height())}}function A2(t,n){if(t&1&&Me(0,"img",2),t&2){let e=_(3);je("height",e.height())}}function O2(t,n){if(t&1&&y(0,R2,1,1,"img",1)(1,A2,1,1,"img",2),t&2){let e=_(2);C(e.final()<e.base()?0:1)}}function N2(t,n){if(t&1&&Me(0,"img",3),t&2){let e=_(3);je("height",e.height())}}function P2(t,n){if(t&1&&Me(0,"img",4),t&2){let e=_(3);je("height",e.height())}}function F2(t,n){if(t&1&&y(0,N2,1,1,"img",3)(1,P2,1,1,"img",4),t&2){let e=_(2);C(e.final()>e.base()?0:1)}}function L2(t,n){if(t&1&&y(0,O2,2,1)(1,F2,2,1),t&2){let e=_();C(e.invertColors()?0:1)}}var Ma=class t{base=pe.required();final=pe.required();invertColors=pe(!1);height=pe(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(ue(0,"span",0),y(1,L2,2,1),ue(2,"span"),b(3),he()()),e&2&&(m(),C(i.base()!==i.final()?1:-1),m(2),se(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var B2=t=>({shaded:t}),V2=(t,n)=>n.key;function j2(t,n){if(t&1&&(p(0,"div",10)(1,"p"),b(2),h(),p(3,"p"),b(4),h()()),t&2){let e=n.$implicit,i=n.$index;M("ngClass",Xe(3,B2,i%2===0)),m(2),se(e.key),m(2),se(e.value)}}function U2(t,n){if(t&1&&(p(0,"div",6),E(1,"div",7),p(2,"div",8)(3,"div",9)(4,"p"),b(5,"Base"),h(),p(6,"p"),b(7),h()(),le(8,j2,5,5,"div",10,V2),kn(10,"keyvalue"),h()()),t&2){let e=_();m(7),se(e.values().baseValue),m(),de(Is(10,1,e.values().modifiers))}}var Hf=class t{name=pe.required();values=pe.required();expanded=pe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),b(4),h(),E(5,"div",4),h(),E(6,"stat-with-buff-icon",5),h(),y(7,U2,11,3,"div",6),h()),e&2&&(m(4),se(i.name()),m(2),M("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),m(),C(i.expanded()?7:-1))},dependencies:[zr,Ma,Ci],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var H2=(t,n)=>n.key;function z2(t,n){if(t&1&&Me(0,"img",4),t&2){let e=_();je("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function $2(t,n){if(t&1&&b(0),t&2){let e=_(2);_i(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function W2(t,n){if(t&1&&b(0),t&2){let e=_(2);Ce(" (",e.status().remainingTurns," turns) ")}}function G2(t,n){if(t&1&&y(0,$2,1,2)(1,W2,1,1),t&2){let e=_();C(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function q2(t,n){t&1&&b(0,", ")}function Z2(t,n){if(t&1&&(b(0),y(1,q2,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;_i(" ",e.value," ",e.key),m(),C(i!==r-1?1:-1)}}function Y2(t,n){t&1&&Me(0,"img",6)}function Q2(t,n){t&1&&Me(0,"img",7)}function K2(t,n){t&1&&Me(0,"img",8)}function X2(t,n){t&1&&Me(0,"img",9)}function J2(t,n){if(t&1&&(ue(0,"p"),b(1),he()),t&2){let e=n.$implicit;m(),se(e)}}var zf=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(we)}status=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[De],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(ue(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),y(4,z2,1,1,"img",4),b(5),y(6,G2,2,1),he(),ue(7,"p"),le(8,Z2,2,3,null,null,H2),kn(10,"keyvalue"),he()(),ue(11,"div",5),y(12,Y2,1,0,"img",6),y(13,Q2,1,0,"img",7)(14,K2,1,0,"img",8)(15,X2,1,0,"img",9),he()(),le(16,J2,2,1,"p",null,Ve),he()),e&2){let r;m(4),C(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),Ce(" ",i.status().name," "),m(),C((i.status().remainingTurns??0)>0?6:-1),m(2),de(Is(10,5,i.status().additionalStats)),m(4),C(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),m(),C((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),m(3),de(i.systemData==null?null:i.systemData.textFields)}},dependencies:[Ci],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var Lb=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(Lb||{});function eB(t,n){if(t&1&&Me(0,"img",2),t&2){let e=_();je("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function tB(t,n){if(t&1&&(ue(0,"p"),b(1),he()),t&2){let e=n.$implicit;m(),se(e)}}var $f=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(we)}name=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[De],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"div",1),y(2,eB,1,1,"img",2),ue(3,"span"),b(4),he()(),le(5,tB,2,1,"p",null,Ve),he()),e&2&&(m(2),C(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),m(2),se(i.name()),m(),de(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var nB=t=>({opacity50:t}),iB=t=>({droppableTextColor:t}),Mc=()=>[],rB=(t,n)=>n.key;function oB(t,n){if(t&1&&E(0,"img",4),t&2){let e=_();M("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function aB(t,n){if(t&1&&b(0),t&2){let e=_();Ce(" (",e.item().uses,") ")}}function sB(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=_().$implicit,r=_(2);M("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,ze)("title",i)}}function cB(t,n){if(t&1&&y(0,sB,1,2,"img",12),t&2){let e,i=n.$implicit,r=_(2);C((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function lB(t,n){if(t&1&&le(0,cB,1,1,null,null,dn),t&2){let e=_();de(e.item().engravings)}}function dB(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=_().$implicit,r=_(2);M("src",(e=r.getTagByName(i))==null?null:e.spriteURL,ze)("title",i)}}function uB(t,n){if(t&1&&y(0,dB,1,2,"img",12),t&2){let e,i=n.$implicit,r=_(2);C((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function fB(t,n){if(t&1&&le(0,uB,1,1,null,null,dn),t&2){let e=_();de(e.item().tags)}}function mB(t,n){if(t&1&&b(0),t&2){let e=_();Ce(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function hB(t,n){t&1&&E(0,"img",8)}function pB(t,n){t&1&&E(0,"img",9)}function gB(t,n){t&1&&E(0,"img",10)}function vB(t,n){if(t&1&&(p(0,"div",14)(1,"div"),b(2),h(),E(3,"stat-with-buff-icon",15),h()),t&2){let e=n.$implicit;m(2),se(e.key),m(),M("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function bB(t,n){if(t&1&&(le(0,vB,4,5,"div",14,rB),kn(2,"keyvalue")),t&2){let e=_(3);de(Hr(2,0,e.item().stats,e.sortStats))}}function _B(t,n){if(t&1&&(b(0," \xA0-\xA0"),E(1,"stat-with-buff-icon",17)),t&2){let e,i,r=_(4);m(),M("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function yB(t,n){if(t&1&&(p(0,"div",14)(1,"div"),b(2,"Rng"),h(),p(3,"div",16),E(4,"stat-with-buff-icon",17),y(5,_B,2,3),h()()),t&2){let e,i,r,o=_(3);m(4),M("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),m(),C((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function CB(t,n){t&1&&b(0," Square ")}function wB(t,n){t&1&&b(0," Cross ")}function xB(t,n){t&1&&b(0," Saltire ")}function DB(t,n){t&1&&b(0," Star ")}function EB(t,n){if(t&1&&(p(0,"div",14)(1,"div"),b(2,"Shp"),h(),p(3,"div"),y(4,CB,1,0)(5,wB,1,0)(6,xB,1,0)(7,DB,1,0),h()()),t&2){let e,i=_(3);m(4),C((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function IB(t,n){t&1&&b(0," Quantity ")}function SB(t,n){t&1&&b(0," Uses ")}function MB(t,n){if(t&1&&b(0),t&2){let e=_(4);Ce(" ",e.item().uses," ")}}function kB(t,n){t&1&&b(0," /\xA0 ")}function TB(t,n){if(t&1&&(y(0,kB,1,0),E(1,"stat-with-buff-icon",15)),t&2){let e=_(4);C((e.item().uses??0)>0?0:-1),m(),M("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function RB(t,n){if(t&1&&(p(0,"div",14)(1,"div"),y(2,IB,1,0)(3,SB,1,0),h(),p(4,"div",16),y(5,MB,1,1),y(6,TB,2,5),h()()),t&2){let e=_(3);m(2),C((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),m(3),C((e.item().uses??0)>0?5:-1),m(),C((e.item().maxUses??0)>0?6:-1)}}function AB(t,n){if(t&1&&(E(0,"mat-divider"),p(1,"div",13),y(2,bB,3,3),y(3,yB,6,4,"div",14),y(4,EB,8,1,"div",14),y(5,RB,7,3,"div",14),h()),t&2){let e,i=_(2);m(2),C(((i.systemData==null?null:i.systemData.utilizedStats)??un(4,Mc)).length>0||i.hasNonZeroStatValue()?2:-1),m(),C((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),m(),C(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),m(),C((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function OB(t,n){if(t&1&&E(0,"engraving",18),t&2){let e=n.$implicit;M("name",e)}}function NB(t,n){if(t&1&&(p(0,"p"),b(1),h()),t&2){let e=n.$implicit;m(),se(e)}}function PB(t,n){if(t&1&&E(0,"img",19),t&2){let e=_(3);M("src",e.systemData==null?null:e.systemData.graphicUrl,ze)}}function FB(t,n){if(t&1&&(E(0,"mat-divider"),le(1,OB,1,1,"engraving",18,dn),le(3,NB,2,1,"p",null,Ve),y(5,PB,1,1,"img",19)),t&2){let e=_(2);m(),de(e.item().engravings),m(2),de(e.systemData==null?null:e.systemData.textFields),m(2),C(((e.systemData==null?null:e.systemData.graphicUrl)??"").length>0?5:-1)}}function LB(t,n){if(t&1&&(p(0,"div",11),y(1,AB,6,5),y(2,FB,6,1),h()),t&2){let e,i=_();m(),C((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??un(2,Mc)).length>0?1:-1),m(),C(((i.systemData==null?null:i.systemData.textFields)??un(3,Mc)).length>0||((i.systemData==null?null:i.systemData.graphicUrl)??"").length>0?2:-1)}}function BB(t,n){t&1&&(p(0,"div",20),E(1,"img",21),p(2,"span"),b(3,"Item Range Not Visible"),h()())}function VB(t,n){t&1&&(p(0,"div",20),E(1,"img",21),p(2,"span"),b(3,"Item Not Found In Inventory"),h()())}function jB(t,n){if(t&1&&(E(0,"mat-divider"),y(1,BB,4,0,"div",20),y(2,VB,4,0,"div",20)),t&2){let e=_();m(),C(e.item().maxRangeExceedsCalculationLimit?1:-1),m(),C(e.item().isNotInInventory?2:-1)}}var Wf=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(we)}ItemRangeShape=Lb;item=pe.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[De],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(p(0,"div",0),Y("click",function(){return i.toggleExpansion()}),p(1,"div",1)(2,"div",2)(3,"div",3),y(4,oB,1,1,"img",4),p(5,"div",5),b(6),y(7,aB,1,1),h(),y(8,lB,2,0),y(9,fB,2,0),h(),p(10,"div",6),y(11,mB,1,1),b(12),h()(),p(13,"div",7),y(14,hB,1,0,"img",8),y(15,pB,1,0,"img",9),y(16,gB,1,0,"img",10),h()(),y(17,LB,3,4,"div",11),y(18,jB,3,2),h()),e&2&&(m(),M("ngClass",Xe(15,nB,!i.item().canEquip||i.item().isUsePrevented)),m(3),C(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),M("ngClass",Xe(17,iB,i.item().isDroppable)),m(),Ce(" ",i.item().name," "),m(),C((i.item().uses??0)>0?7:-1),m(),C((i.item().engravings??un(19,Mc)).length>0?8:-1),m(),C((i.item().tags??un(20,Mc)).length>0?9:-1),m(2),C(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),m(),_i(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),m(2),C(i.item().isUsePrevented?14:-1),m(),C(i.item().isDroppable?15:-1),m(),C(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),m(),C(i.isExpanded?17:-1),m(),C(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[er,Ma,zr,$f,Ci],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function UB(t,n){if(t&1&&E(0,"img",4),t&2){let e=_();M("src",e.systemData==null?null:e.systemData.spriteURL,ze)}}function HB(t,n){if(t&1&&(p(0,"div",5),b(1),h()),t&2){let e=_();m(),Ce(" ",e.getAdditionalStatsText()," ")}}function zB(t,n){t&1&&E(0,"img",7)}function $B(t,n){if(t&1&&(p(0,"p"),b(1),h()),t&2){let e=n.$implicit;m(),se(e)}}function WB(t,n){if(t&1&&(E(0,"mat-divider"),le(1,$B,2,1,"p",null,Ve)),t&2){let e=_();m(),de(e.systemData==null?null:e.systemData.textFields)}}var Gf=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(we)}skill=pe.required();expanded=pe(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[De],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),y(4,UB,1,1,"img",4),b(5),h(),y(6,HB,2,1,"div",5),h(),p(7,"div",6),y(8,zB,1,0,"img",7),h()(),y(9,WB,3,0),h()),e&2&&(m(4),C(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),Ce(" ",i.skill().name," "),m(),C(i.getAdditionalStatsText().length>0?6:-1),m(2),C(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),m(),C(i.expanded()?9:-1))},dependencies:[er],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var qf=t=>({rotate90:t}),II=()=>[],Bb=(t,n)=>n.key;function GB(t,n){if(t&1&&(p(0,"div",0),E(1,"img",32),h()),t&2){let e=_();m(),M("src",e.unit().sprite.portraitURL,ze)}}function qB(t,n){if(t&1&&b(0),t&2){let e=_();Ce(" Lvl. ",e.unit().stats.level," ")}}function ZB(t,n){if(t&1&&b(0),t&2){let e,i=_();Ce(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function YB(t,n){if(t&1&&E(0,"img",6),t&2){let e,i=_();M("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,ze)}}function QB(t,n){if(t&1&&(p(0,"div",10)(1,"div",33)(2,"div",34),b(3),h(),p(4,"div",35),E(5,"div",36)(6,"div",37),h()()()),t&2){let e=_();M("title",e.unit().player),m(3),se(e.unit().player)}}function KB(t,n){if(t&1&&(p(0,"p",41),b(1),h()),t&2){let e=n.$implicit;m(),se(e)}}function XB(t,n){if(t&1&&le(0,KB,2,1,"p",41,Ve),t&2){let e=_(2);de(e.unit().textFields)}}function JB(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=_(3);M("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function eV(t,n){if(t&1&&le(0,JB,1,3,"text-fields-with-labeled-header",42,Ve),t&2){let e=_(2);de(e.unit().classes)}}function tV(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",40),t&2){let e=_(2);M("titleHref",e.unit().characterApplicationURL)}}function nV(t,n){if(t&1&&(p(0,"div",13),y(1,XB,2,0),E(2,"text-fields-with-labeled-header",38),y(3,eV,2,0),E(4,"text-fields-with-labeled-header",39),y(5,tV,1,1,"text-fields-with-labeled-header",40),h()),t&2){let e,i=_();m(),C(i.unit().textFields?1:-1),m(),M("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),m(),C(i.unit().classes?3:-1),m(),M("title",i.unit().movementType),m(),C(i.unit().characterApplicationURL?5:-1)}}function iV(t,n){if(t&1&&(p(0,"div",22)(1,"div",17),b(2,"Exp"),h(),p(3,"div"),b(4),h()()),t&2){let e=_();m(4),se(e.unit().stats.experience)}}function rV(t,n){if(t&1&&(p(0,"div",22)(1,"div",17),b(2,"Money"),h(),E(3,"currency",43),h()),t&2){let e=_();m(3),M("amount",e.unit().stats.heldCurrency)}}function oV(t,n){if(t&1&&E(0,"unit-tag",47),t&2){let e=n.$implicit;M("tag",e)}}function aV(t,n){if(t&1&&(p(0,"div",23)(1,"div",44),E(2,"img",45),h(),p(3,"div",46),le(4,oV,1,1,"unit-tag",47,Ve),h()()),t&2){let e=_();m(4),de(e.unit().tags)}}function sV(t,n){if(t&1&&(p(0,"div",24)(1,"div",48),E(2,"img",49),h(),p(3,"div",34)(4,"p"),b(5),h()()()),t&2){let e=_();m(5),se(e.unit().behavior)}}function cV(t,n){if(t&1&&E(0,"unit-status-condition",53),t&2){let e=n.$implicit;M("status",e)}}function lV(t,n){if(t&1&&(p(0,"div",25)(1,"div",50),E(2,"img",51),h(),p(3,"div",52),le(4,cV,1,1,"unit-status-condition",53,Ve),h()()),t&2){let e=_();m(4),de(e.unit().statusConditions)}}function dV(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=_(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function uV(t,n){if(t&1&&(p(0,"div",29),le(1,dV,1,3,"modified-unit-stat",54,Bb),kn(3,"keyvalue"),h()),t&2){let e=_();m(),de(Hr(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function fV(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=_(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function mV(t,n){if(t&1&&(p(0,"div",29),le(1,fV,1,3,"modified-unit-stat",54,Bb),kn(3,"keyvalue"),h()),t&2){let e=_();m(),de(Hr(3,0,e.unit().stats.system,e.sortModifiedUnitStat))}}function hV(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=_(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function pV(t,n){if(t&1&&(p(0,"div",29),le(1,hV,1,3,"modified-unit-stat",54,Bb),kn(3,"keyvalue"),h()),t&2){let e=_();m(),de(Hr(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function gV(t,n){if(t&1&&(p(0,"h3"),b(1),h()),t&2){let e=_().$index,i=_(2);m(),se(i.getInventorySubsectionLabel(e))}}function vV(t,n){if(t&1&&E(0,"inventory-item",56),t&2){let e=n.$implicit;M("item",e)}}function bV(t,n){if(t&1&&(p(0,"div",57)(1,"span"),b(2),h()()),t&2){let e=_().$implicit;m(),nt("opacity",.5),m(),Ce("Empty x",e.emptySlotCount)}}function _V(t,n){if(t&1&&(p(0,"div",55),y(1,gV,2,1,"h3"),le(2,vV,1,1,"inventory-item",56,Ve),y(4,bV,3,3,"div",57),h()),t&2){let e=n.$implicit,i=n.$index,r=_(2);m(),C(r.getInventorySubsectionLabel(i).length>0?1:-1),m(),de(e.items),m(2),C(e.emptySlotCount>0?4:-1)}}function yV(t,n){if(t&1&&le(0,_V,5,2,"div",55,Ve),t&2){let e,i=_();de((e=i.unit().inventory)==null?null:e.subsections)}}function CV(t,n){if(t&1&&(p(0,"h3"),b(1),h()),t&2){let e=_().$index,i=_(3);m(),se(i.getSkillSubsectionLabel(e))}}function wV(t,n){if(t&1&&E(0,"unit-skill",60),t&2){let e=n.$implicit;M("skill",e)}}function xV(t,n){if(t&1&&(p(0,"div",55),y(1,CV,2,1,"h3"),le(2,wV,1,1,"unit-skill",60,Ve),h()),t&2){let e=n.$implicit,i=n.$index,r=_(3);m(),C(r.getSkillSubsectionLabel(i).length>0?1:-1),m(),de(e.skills)}}function DV(t,n){if(t&1&&le(0,xV,4,1,"div",55,Ve),t&2){let e=_(2);de(e.unit().skillSubsections)}}function EV(t,n){if(t&1){let e=Mn();E(0,"mat-divider"),p(1,"div",58)(2,"div",59)(3,"button",8),Y("click",function(){Ht(e);let r=_();return zt(r.toggleSkillsExpansion())}),E(4,"img",9),h(),p(5,"h2"),b(6),h()(),y(7,DV,2,0),h()}if(t&2){let e=_();m(3),M("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),m(),bt(Xe(5,qf,e.isSkillsInfoExpanded)),m(2),se(e.getSkillsLabel()),m(),C(e.isSkillsInfoExpanded?7:-1)}}var Zf=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(we)}unit=pe.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[De],decls:52,vars:39,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(y(0,GB,2,1,"div",0),p(1,"div",1),E(2,"img",2),p(3,"hgroup",3)(4,"h1",4),b(5),h(),p(6,"p",5),y(7,qB,1,1),y(8,ZB,1,1),h()(),y(9,YB,1,1,"img",6),h(),p(10,"div",7)(11,"button",8),Y("click",function(){return i.toggleUnitInfoExpansion()}),E(12,"img",9),h(),y(13,QB,7,2,"div",10),p(14,"button",11),E(15,"img",12),h()(),y(16,nV,6,6,"div",13),p(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),b(21,"HP"),h(),p(22,"div",18)(23,"span",19),b(24),h(),p(25,"span",20),b(26),h()()(),E(27,"unit-hp-bar",21),h(),y(28,iV,5,1,"div",22),y(29,rV,4,1,"div",22),h(),y(30,aV,6,0,"div",23),y(31,sV,6,1,"div",24),y(32,lV,6,0,"div",25),p(33,"div",26)(34,"div",27)(35,"button",8),Y("click",function(){return i.toggleStatExpansion()}),E(36,"img",9),h(),p(37,"h2"),b(38,"Stats"),h()(),p(39,"div",28),y(40,uV,4,3,"div",29),y(41,mV,4,3,"div",29),y(42,pV,4,3,"div",29),h()(),E(43,"mat-divider"),p(44,"div",30)(45,"div",31)(46,"button",8),Y("click",function(){return i.toggleInventoryExpansion()}),E(47,"img",9),h(),p(48,"h2"),b(49),h()(),y(50,yV,2,0),h(),y(51,EV,8,7)),e&2){let r;C(i.unit().sprite.portraitURL?0:-1),m(2),M("src",i.unit().sprite.spriteURL,ze),m(3),se(i.unit().name),m(2),C(i.unit().stats.level>0?7:-1),m(),C(i.unit().classes?8:-1),m(),C((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),m(2),M("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),m(),bt(Xe(31,qf,i.isUnitInfoExpanded)),m(),C(i.unit().player?13:-1),m(3),C(i.isUnitInfoExpanded?16:-1),m(8),se(i.unit().stats.hp.current),m(2),Ce("/ ",i.unit().stats.hp.maximum),m(),M("percentage",i.unit().stats.hp.percentage),m(),C((i.unit().stats.experience??0)>0?28:-1),m(),C((i.unit().stats.heldCurrency??0)>0?29:-1),m(),C((i.unit().tags??un(33,II)).length>0?30:-1),m(),C(i.unit().behavior?31:-1),m(),C((i.unit().statusConditions??un(34,II)).length>0?32:-1),m(3),M("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),m(),bt(Xe(35,qf,i.isStatsInfoExpanded)),m(4),C(i.unit().stats.combat?40:-1),m(),C(i.unit().stats.system?41:-1),m(),C(i.unit().stats.general?42:-1),m(4),M("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),m(),bt(Xe(37,qf,i.isInventoryExpanded)),m(2),se(i.getInventoryLabel()),m(),C(i.isInventoryExpanded?50:-1),m(),C(i.unit().hasSkills?51:-1)}},dependencies:[sc,Bf,Vf,jf,Uf,Hf,zf,er,Wf,Gf,Ci],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var IV=["unitAutocompleteInput"],SV=(t,n)=>n.name;function MV(t,n){if(t&1&&(p(0,"mat-option",5)(1,"div",7),E(2,"img",8),p(3,"div"),b(4),h()()()),t&2){let e=n.$implicit;M("value",e),m(2),M("src",e.sprite.spriteURL,ze),m(2),se(e.name)}}function kV(t,n){if(t&1&&E(0,"unit-sidenav-display",6),t&2){let e=_();M("unit",e.selectedUnit.value)}}var Yf=class t{constructor(n){this.dataService=n;this.dataService=d(we),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new Uv(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(L(we))};static \u0275cmp=S({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ye(IV,5),e&2){let r;U(r=H())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(p(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),Y("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),h(),p(5,"mat-autocomplete",4,1),le(7,MV,5,3,"mat-option",5,SV),h()()(),y(9,kV,1,1,"unit-sidenav-display",6),h()),e&2){let r=Zt(6);m(3),M("formControl",i.selectedUnit)("matAutocomplete",r),m(2),M("displayWith",i.formatAutocompleteDisplayValue),m(2),de(i.filteredUnits),m(2),C(i.selectedUnit.value?9:-1)}},dependencies:[yE,vE,nf,dE,uE,_c,Cc,io,uf,df,EI,DI,Ia,Fb,CE,Hv,Zf],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var Qf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),b(1,"map-tiles-view works!"),he())},encapsulation:2})};var TV=["*"];var RV=["unscopedContent"],AV=["text"],OV=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],NV=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var PV=new x("ListOption"),FV=(()=>{class t{_elementRef=d(B);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),LV=(()=>{class t{_elementRef=d(B);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),jb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),SI=(()=>{class t{_listOption=d(PV,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,hostVars:4,hostBindings:function(i,r){i&2&&V("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),BV=(()=>{class t extends SI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Se]})}return t})(),Ub=(()=>{class t extends SI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Se]})}return t})(),VV=new x("MAT_LIST_CONFIG"),Vb=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=it(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(it(e))}_disabled=P(!1);_defaultOptions=d(VV,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ye("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),jV=(()=>{class t{_elementRef=d(B);_ngZone=d(F);_listBase=d(Vb,{optional:!0});_platform=d(Ee);_hostElement;_isButtonElement;_noopAnimations=et();_avatars;_icons;set lines(e){this._explicitLines=Qn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=it(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(it(e))}_disabled=P(!1);_subscriptions=new ge;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(ft).load(Kn);let e=d(fa,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new eo(this,this._ngZone,this._hostElement,this._platform,d(ie)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ft(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,contentQueries:function(i,r,o){if(i&1&&St(o,BV,4)(o,Ub,4),i&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(ye("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),V("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var MI=(()=>{class t extends Vb{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[ke([{provide:Vb,useExisting:t}]),Se],ngContentSelectors:TV,decls:1,vars:0,template:function(i,r){i&1&&(xe(),j(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var kI=(()=>{class t extends jV{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=it(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ze(t)))(r||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&St(o,LV,5)(o,FV,5)(o,jb,5),i&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ye(RV,5)(AV,5),i&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ye("aria-current",r._getAriaCurrent()),V("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Se],ngContentSelectors:NV,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(xe(OV),j(0),p(1,"span",1),j(2,1),j(3,2),p(4,"span",2,0),Y("cdkObserveContent",function(){return r._updateItemLines(!0)}),j(6,3),h()(),j(7,4),j(8,5),E(9,"div",3))},dependencies:[Du],encapsulation:2,changeDetection:0})}return t})();var TI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=re({imports:[Eu,ma,Lf,Ue,WD]})}return t})();function RI(t){return Error(`Unable to find icon with the name "${t}"`)}function HV(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function AI(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function OI(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ti=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},PI=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Ti(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Et.HTML,r);if(!a)throw OI(r);let s=ca(a);return this._addSvgIconConfig(e,i,new Ti("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Ti(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Et.HTML,i);if(!o)throw OI(i);let a=ca(o);return this._addSvgIconSetConfig(e,new Ti("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Et.RESOURCE_URL,e);if(!i)throw AI(e);let r=this._cachedIconsByUrl.get(i);return r?Z(Kf(r)):this._loadSvgIconFromConfig(new Ti(e,null)).pipe(dt(o=>this._cachedIconsByUrl.set(i,o)),K(o=>Kf(o)))}getNamedSvgIcon(e,i=""){let r=NI(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):La(RI(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Z(Kf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(K(i=>Kf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return Z(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(yr(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Et.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),Z(null)})));return ja(o).pipe(K(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw RI(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(dt(i=>e.svgText=i),K(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Z(null):this._fetchIcon(e).pipe(dt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(ca("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(ca("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw HV();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Et.RESOURCE_URL,i);if(!a)throw AI(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(K(l=>ca(l)),Cr(()=>this._inProgressUrlFetches.delete(a)),Ua());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(NI(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return zV(o)?new Ti(o.url,null,o.options):new Ti(o,null)}}static \u0275fac=function(i){return new(i||t)(W(xi,8),W(Sg),W(oe,8),W(Bt))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kf(t){return t.cloneNode(!0)}function NI(t,n){return t+":"+n}function zV(t){return!!(t.url&&t.options)}var $V=["*"],WV=new x("MAT_ICON_DEFAULT_OPTIONS"),GV=new x("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(oe),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),FI=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],qV=FI.map(t=>`[${t}]`).join(", "),ZV=/^url\(['"]?#(.*?)['"]?\)$/,LI=(()=>{class t{_elementRef=d(B);_iconRegistry=d(PI);_location=d(GV);_errorHandler=d(Bt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ge.EMPTY;constructor(){let e=d(new yi("aria-hidden"),{optional:!0}),i=d(WV,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(qV),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)FI.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(ZV):null;if(l){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ct(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ye("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),bt(r.color?"mat-"+r.color:""),V("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ee],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:$V,decls:1,vars:0,template:function(i,r){i&1&&(xe(),j(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})();var YV=()=>["../.."],QV=t=>[t,"convoy"],KV=t=>[t,"shop"],XV=t=>[t,"map","analyze"];function JV(t,n){if(t&1&&(p(0,"a",1),E(1,"img",3),p(2,"span",4),b(3,"Google Sheets"),h(),p(4,"div",5)(5,"mat-icon"),b(6,"open_in_new"),h()()()),t&2){let e=_();M("href",e.getGoogleSheetUrl(),ze)}}function ej(t,n){if(t&1&&(p(0,"a",1),E(1,"img",3),p(2,"span",4),b(3,"Chapter Post"),h(),p(4,"div",5)(5,"mat-icon"),b(6,"open_in_new"),h()()()),t&2){let e=_();M("href",e.chapterPostUrl(),ze)}}function tj(t,n){if(t&1&&(p(0,"a",2),E(1,"img",3),p(2,"span",4),b(3,"Convoy"),h()()),t&2){let e=_();M("routerLink",Xe(1,QV,`/${e.teamName}`))}}function nj(t,n){if(t&1&&(p(0,"a",2),E(1,"img",6),p(2,"span",4),b(3,"Shop"),h()()),t&2){let e=_();M("routerLink",Xe(1,KV,`/${e.teamName}`))}}function ij(t,n){if(t&1&&(p(0,"a",2),E(1,"img",3),p(2,"span",4),b(3,"Map Analyzer Tool"),h()()),t&2){let e=_();M("routerLink",Xe(1,XV,`/${e.teamName}`))}}var Xf=class t{constructor(n){this.activatedRoute=n;this.activatedRoute=d(Mt)}googleWorksheetID=pe(void 0);chapterPostUrl=pe(void 0);showConvoyLink=pe(!1);showShopLink=pe(!1);showMapAnalyzerLink=pe(!1);teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(L(Mt))};static \u0275cmp=S({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:11,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"mat-action-list"),y(2,JV,7,1,"a",1),y(3,ej,7,1,"a",1),y(4,tj,4,3,"a",2),y(5,nj,4,3,"a",2),y(6,ij,4,3,"a",2),p(7,"a",2),E(8,"img",3),p(9,"span",4),b(10,"Home"),h()()()()),e&2&&(m(2),C((i.googleWorksheetID()??"").length>0?2:-1),m(),C((i.chapterPostUrl()??"").length>0?3:-1),m(),C(i.showConvoyLink()?4:-1),m(),C(i.showShopLink()?5:-1),m(),C(i.showMapAnalyzerLink()?6:-1),m(),M("routerLink",un(6,YV)))},dependencies:[TI,MI,kI,Ub,jb,oa,LI],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};function rj(t,n){t&1&&b(0," U ")}function oj(t,n){t&1&&E(0,"img",8)}function aj(t,n){t&1&&E(0,"img",9)}function sj(t,n){t&1&&E(0,"img",10)}function cj(t,n){t&1&&E(0,"img",11)}function lj(t,n){if(t&1&&(p(0,"mat-tab",7),b(1),h()),t&2){let e=n.$implicit;M("label",e.title),m(),Ce(" ",e.title," ")}}var Jf=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=d(Mt),this.breakpointService=d(Xn),this.themeService=d(Jn),this.teamDataService=d(we);var o=this.route.snapshot.paramMap.get("teamName")??"";this.teamDataService.loadDataForTeam(o)}static \u0275fac=function(e){return new(e||t)(L(Mt),L(Xn),L(Jn),L(we))};static \u0275cmp=S({type:t,selectors:[["map-view"]],decls:25,vars:6,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["mat-stretch-tabs","false","mat-align-tabs","start",1,"segmentTabs"],[3,"label"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"]],template:function(e,i){if(e&1){let r=Mn();p(0,"button",1),Y("click",function(){Ht(r);let a=Zt(4);return zt(a.toggle())}),b(1,">"),h(),p(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),At(7,rj,1,0,"ng-template",4),E(8,"map-units-sidenav"),h(),p(9,"mat-tab"),At(10,oj,1,0,"ng-template",4),E(11,"map-tiles-sidenav"),h(),p(12,"mat-tab"),At(13,aj,1,0,"ng-template",4),b(14," Image download "),h(),p(15,"mat-tab"),At(16,sj,1,0,"ng-template",4),E(17,"links-sidenav",5),h(),p(18,"mat-tab"),At(19,cj,1,0,"ng-template",4),E(20,"map-dice-roller-sidenav"),h()()(),p(21,"mat-sidenav-content")(22,"mat-tab-group",6),le(23,lj,2,2,"mat-tab",7,Ve),h()()()}if(e&2){let r;m(3),M("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),m(14),M("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),m(6),de((r=i.teamDataService.mapData().map)==null?null:r.segments)}},dependencies:[Cv,PD,Vu,Ov,$D,Av,TD,Yf,Qf,If,Xf],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}']})};var em=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),b(1,"map-analysis-view works!"),he())},encapsulation:2})};var tm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),b(1,"convoy-view works!"),he())},encapsulation:2})};var nm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),b(1,"shop-view works!"),he())},encapsulation:2})};var BI=[{path:"",component:Lu,title:"Reddit Emblem Maps"},{path:":teamName/map",component:Jf,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:em,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:tm,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:nm,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var VI={providers:[Mh(),Jg(BI)]};var im=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&E(0,"router-outlet")},dependencies:[Qs],encapsulation:2})};Cg(im,VI).catch(t=>console.error(t));
