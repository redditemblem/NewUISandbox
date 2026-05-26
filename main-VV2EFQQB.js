var _E=Object.defineProperty,DE=Object.defineProperties;var wE=Object.getOwnPropertyDescriptors;var lg=Object.getOwnPropertySymbols;var CE=Object.prototype.hasOwnProperty,EE=Object.prototype.propertyIsEnumerable;var cg=(t,n,e)=>n in t?_E(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,g=(t,n)=>{for(var e in n||={})CE.call(n,e)&&cg(t,e,n[e]);if(lg)for(var e of lg(n))EE.call(n,e)&&cg(t,e,n[e]);return t},Z=(t,n)=>DE(t,wE(n));var at=null,wa=!1,gu=1,xE=null,Fe=Symbol("SIGNAL");function N(t){let n=at;return at=t,n}function Ca(){return at}var tr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function nr(t){if(wa)throw new Error("");if(at===null)return;at.consumerOnSignalRead(t);let n=at.producersTail;if(n!==void 0&&n.producer===t)return;let e,r=at.recomputing;if(r&&(e=n!==void 0?n.nextProducer:at.producers,e!==void 0&&e.producer===t)){at.producersTail=e,e.lastReadVersion=t.version;return}let i=t.consumersTail;if(i!==void 0&&i.consumer===at&&(!r||SE(i,at)))return;let o=Si(at),s={producer:t,consumer:at,nextProducer:e,prevConsumer:i,lastReadVersion:t.version,nextConsumer:void 0};at.producersTail=s,n!==void 0?n.nextProducer=s:at.producers=s,o&&hg(t,s)}function dg(){gu++}function Ar(t){if(!(Si(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===gu)){if(!t.producerMustRecompute(t)&&!Ii(t)){xi(t);return}t.producerRecomputeValue(t),xi(t)}}function vu(t){if(t.consumers===void 0)return;let n=wa;wa=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let r=e.consumer;r.dirty||IE(r)}}finally{wa=n}}function bu(){return at?.consumerAllowSignalWrites!==!1}function IE(t){t.dirty=!0,vu(t),t.consumerMarkedDirty?.(t)}function xi(t){t.dirty=!1,t.lastCleanEpoch=gu}function Ln(t){return t&&ug(t),N(t)}function ug(t){t.producersTail=void 0,t.recomputing=!0}function rr(t,n){N(n),t&&fg(t)}function fg(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Si(t))do e=yu(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Ii(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,r=n.lastReadVersion;if(r!==e.version||(Ar(e),r!==e.version))return!0}return!1}function ir(t){if(Si(t)){let n=t.producers;for(;n!==void 0;)n=yu(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function hg(t,n){let e=t.consumersTail,r=Si(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!r)for(let i=t.producers;i!==void 0;i=i.nextProducer)hg(i.producer,i)}function yu(t){let n=t.producer,e=t.nextProducer,r=t.nextConsumer,i=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!Si(n)){let o=n.producers;for(;o!==void 0;)o=yu(o)}return e}function Si(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function No(t){xE?.(t)}function SE(t,n){let e=n.producersTail;if(e!==void 0){let r=n.producers;do{if(r===t)return!0;if(r===e)break;r=r.nextProducer}while(r!==void 0)}return!1}function Oo(t,n){return Object.is(t,n)}function Fo(t,n){let e=Object.create(ME);e.computation=t,n!==void 0&&(e.equal=n);let r=()=>{if(Ar(e),nr(e),e.value===Dn)throw e.error;return e.value};return r[Fe]=e,No(e),r}var Mr=Symbol("UNSET"),Tr=Symbol("COMPUTING"),Dn=Symbol("ERRORED"),ME=Z(g({},tr),{value:Mr,dirty:!0,error:null,equal:Oo,kind:"computed",producerMustRecompute(t){return t.value===Mr||t.value===Tr},producerRecomputeValue(t){if(t.value===Tr)throw new Error("");let n=t.value;t.value=Tr;let e=Ln(t),r,i=!1;try{r=t.computation(),N(null),i=n!==Mr&&n!==Dn&&r!==Dn&&t.equal(n,r)}catch(o){r=Dn,t.error=o}finally{rr(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function TE(){throw new Error}var pg=TE;function mg(t){pg(t)}function _u(t){pg=t}var AE=null;function Du(t,n){let e=Object.create(Po);e.value=t,n!==void 0&&(e.equal=n);let r=()=>gg(e);return r[Fe]=e,No(e),[r,s=>Rr(e,s),s=>Ea(e,s)]}function gg(t){return nr(t),t.value}function Rr(t,n){bu()||mg(t),t.equal(t.value,n)||(t.value=n,RE(t))}function Ea(t,n){bu()||mg(t),Rr(t,n(t.value))}var Po=Z(g({},tr),{equal:Oo,value:void 0,kind:"signal"});function RE(t){t.version++,dg(),vu(t),AE?.(t)}var wu=Z(g({},tr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Cu(t){if(t.dirty=!1,t.version>0&&!Ii(t))return;t.version++;let n=Ln(t);try{t.cleanup(),t.fn()}finally{rr(t,n)}}function X(t){return typeof t=="function"}function Mi(t){let e=t(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var xa=Mi(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function kr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var de=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(X(r))try{r()}catch(o){n=o instanceof xa?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{vg(o)}catch(s){n=n??[],s instanceof xa?n=[...n,...s.errors]:n.push(s)}}if(n)throw new xa(n)}}add(n){var e;if(n&&n!==this)if(this.closed)vg(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&kr(e,n)}remove(n){let{_finalizers:e}=this;e&&kr(e,n),n instanceof t&&n._removeParent(this)}};de.EMPTY=(()=>{let t=new de;return t.closed=!0,t})();var Eu=de.EMPTY;function Ia(t){return t instanceof de||t&&"closed"in t&&X(t.remove)&&X(t.add)&&X(t.unsubscribe)}function vg(t){X(t)?t():t.unsubscribe()}var tn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ti={setTimeout(t,n,...e){let{delegate:r}=Ti;return r?.setTimeout?r.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ti;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Sa(t){Ti.setTimeout(()=>{let{onUnhandledError:n}=tn;if(n)n(t);else throw t})}function Nr(){}var bg=xu("C",void 0,void 0);function yg(t){return xu("E",void 0,t)}function _g(t){return xu("N",t,void 0)}function xu(t,n,e){return{kind:t,value:n,error:e}}var Or=null;function Ai(t){if(tn.useDeprecatedSynchronousErrorHandling){let n=!Or;if(n&&(Or={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:r}=Or;if(Or=null,e)throw r}}else t()}function Dg(t){tn.useDeprecatedSynchronousErrorHandling&&Or&&(Or.errorThrown=!0,Or.error=t)}var Fr=class extends de{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Ia(n)&&n.add(this)):this.destination=OE}static create(n,e,r){return new Vn(n,e,r)}next(n){this.isStopped?Su(_g(n),this):this._next(n)}error(n){this.isStopped?Su(yg(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Su(bg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},kE=Function.prototype.bind;function Iu(t,n){return kE.call(t,n)}var Mu=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(r){Ma(r)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(r){Ma(r)}else Ma(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Ma(e)}}},Vn=class extends Fr{constructor(n,e,r){super();let i;if(X(n)||!n)i={next:n??void 0,error:e??void 0,complete:r??void 0};else{let o;this&&tn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Iu(n.next,o),error:n.error&&Iu(n.error,o),complete:n.complete&&Iu(n.complete,o)}):i=n}this.destination=new Mu(i)}};function Ma(t){tn.useDeprecatedSynchronousErrorHandling?Dg(t):Sa(t)}function NE(t){throw t}function Su(t,n){let{onStoppedNotification:e}=tn;e&&Ti.setTimeout(()=>e(t,n))}var OE={closed:!0,next:Nr,error:NE,complete:Nr};var Ri=typeof Symbol=="function"&&Symbol.observable||"@@observable";function St(t){return t}function Tu(...t){return Au(t)}function Au(t){return t.length===0?St:t.length===1?t[0]:function(e){return t.reduce((r,i)=>i(r),e)}}var L=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let r=new t;return r.source=this,r.operator=e,r}subscribe(e,r,i){let o=PE(e)?e:new Vn(e,r,i);return Ai(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(r){e.error(r)}}forEach(e,r){return r=wg(r),new r((i,o)=>{let s=new Vn({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)}[Ri](){return this}pipe(...e){return Au(e)(this)}toPromise(e){return e=wg(e),new e((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return t.create=n=>new t(n),t})();function wg(t){var n;return(n=t??tn.Promise)!==null&&n!==void 0?n:Promise}function FE(t){return t&&X(t.next)&&X(t.error)&&X(t.complete)}function PE(t){return t&&t instanceof Fr||FE(t)&&Ia(t)}function LE(t){return X(t?.lift)}function ee(t){return n=>{if(LE(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function te(t,n,e,r,i){return new Ru(t,n,e,r,i)}var Ru=class extends Fr{constructor(n,e,r,i,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Cg=Mi(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var C=(()=>{class t extends L{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let r=new Ta(this,this);return r.operator=e,r}_throwIfClosed(){if(this.closed)throw new Cg}next(e){Ai(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(e)}})}error(e){Ai(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:r}=this;for(;r.length;)r.shift().error(e)}})}complete(){Ai(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:r,isStopped:i,observers:o}=this;return r||i?Eu:(this.currentObservers=null,o.push(e),new de(()=>{this.currentObservers=null,kr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:r,thrownError:i,isStopped:o}=this;r?e.error(i):o&&e.complete()}asObservable(){let e=new L;return e.source=this,e}}return t.create=(n,e)=>new Ta(n,e),t})(),Ta=class extends C{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,n)}error(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&r!==void 0?r:Eu}};var Be=class extends C{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:r}=this;if(n)throw e;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var Lo={now(){return(Lo.delegate||Date).now()},delegate:void 0};var Aa=class extends C{constructor(n=1/0,e=1/0,r=Lo){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;e||(r.push(n),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!n.closed;s+=r?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=e.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var Ra=class extends de{constructor(n,e){super()}schedule(n,e=0){return this}};var Vo={setInterval(t,n,...e){let{delegate:r}=Vo;return r?.setInterval?r.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Vo;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ka=class extends Ra{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,r=0){return Vo.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,e,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return e;e!=null&&Vo.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,e);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,kr(r,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ki=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,r){return new this.schedulerActionCtor(this,n).schedule(r,e)}};ki.now=Lo.now;var Na=class extends ki{constructor(n,e=ki.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,r){for(;n=e.shift();)n.unsubscribe();throw r}}};var Pr=new Na(ka),Eg=Pr;var ke=new L(t=>t.complete());function Oa(t){return t&&X(t.schedule)}function ku(t){return t[t.length-1]}function Fa(t){return X(ku(t))?t.pop():void 0}function wn(t){return Oa(ku(t))?t.pop():void 0}function xg(t,n){return typeof ku(t)=="number"?t.pop():n}function Sg(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(t,n||[])).next())})}function Ig(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lr(t){return this instanceof Lr?(this.v=t,this):new Lr(t)}function Mg(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(m){return Promise.resolve(m).then(p,f)}}function a(p,m){r[p]&&(i[p]=function(w){return new Promise(function(I,T){o.push([p,w,I,T])>1||l(p,w)})},m&&(i[p]=m(i[p])))}function l(p,m){try{c(r[p](m))}catch(w){h(o[0][3],w)}}function c(p){p.value instanceof Lr?Promise.resolve(p.value.v).then(d,f):h(o[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,m){p(m),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Tg(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Ig=="function"?Ig(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Pa=t=>t&&typeof t.length=="number"&&typeof t!="function";function La(t){return X(t?.then)}function Va(t){return X(t[Ri])}function ja(t){return Symbol.asyncIterator&&X(t?.[Symbol.asyncIterator])}function Ba(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function VE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ha=VE();function Ua(t){return X(t?.[Ha])}function za(t){return Mg(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:r,done:i}=yield Lr(e.read());if(i)return yield Lr(void 0);yield yield Lr(r)}}finally{e.releaseLock()}})}function $a(t){return X(t?.getReader)}function we(t){if(t instanceof L)return t;if(t!=null){if(Va(t))return jE(t);if(Pa(t))return BE(t);if(La(t))return HE(t);if(ja(t))return Ag(t);if(Ua(t))return UE(t);if($a(t))return zE(t)}throw Ba(t)}function jE(t){return new L(n=>{let e=t[Ri]();if(X(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function BE(t){return new L(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function HE(t){return new L(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Sa)})}function UE(t){return new L(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Ag(t){return new L(n=>{$E(t,n).catch(e=>n.error(e))})}function zE(t){return Ag(za(t))}function $E(t,n){var e,r,i,o;return Sg(this,void 0,void 0,function*(){try{for(e=Tg(t);r=yield e.next(),!r.done;){let s=r.value;if(n.next(s),n.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=e.return)&&(yield o.call(e))}finally{if(i)throw i.error}}n.complete()})}function Ct(t,n,e,r=0,i=!1){let o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function Wa(t,n=0){return ee((e,r)=>{e.subscribe(te(r,i=>Ct(r,t,()=>r.next(i),n),()=>Ct(r,t,()=>r.complete(),n),i=>Ct(r,t,()=>r.error(i),n)))})}function Ga(t,n=0){return ee((e,r)=>{r.add(t.schedule(()=>e.subscribe(r),n))})}function Rg(t,n){return we(t).pipe(Ga(n),Wa(n))}function kg(t,n){return we(t).pipe(Ga(n),Wa(n))}function Ng(t,n){return new L(e=>{let r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Og(t,n){return new L(e=>{let r;return Ct(e,n,()=>{r=t[Ha](),Ct(e,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){e.error(s);return}o?e.complete():e.next(i)},0,!0)}),()=>X(r?.return)&&r.return()})}function qa(t,n){if(!t)throw new Error("Iterable cannot be null");return new L(e=>{Ct(e,n,()=>{let r=t[Symbol.asyncIterator]();Ct(e,n,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function Fg(t,n){return qa(za(t),n)}function Pg(t,n){if(t!=null){if(Va(t))return Rg(t,n);if(Pa(t))return Ng(t,n);if(La(t))return kg(t,n);if(ja(t))return qa(t,n);if(Ua(t))return Og(t,n);if($a(t))return Fg(t,n)}throw Ba(t)}function Re(t,n){return n?Pg(t,n):we(t)}function z(...t){let n=wn(t);return Re(t,n)}function Nu(t,n){let e=X(t)?t:()=>t,r=i=>i.error(e());return new L(n?i=>n.schedule(r,0,i):r)}function jo(t){return!!t&&(t instanceof L||X(t.lift)&&X(t.subscribe))}var Vr=Mi(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Lg(t){return t instanceof Date&&!isNaN(t)}function Y(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>{r.next(t.call(n,o,i++))}))})}var{isArray:WE}=Array;function GE(t,n){return WE(n)?t(...n):t(n)}function Za(t){return Y(n=>GE(t,n))}var{isArray:qE}=Array,{getPrototypeOf:ZE,prototype:YE,keys:QE}=Object;function Ya(t){if(t.length===1){let n=t[0];if(qE(n))return{args:n,keys:null};if(KE(n)){let e=QE(n);return{args:e.map(r=>n[r]),keys:e}}}return{args:t,keys:null}}function KE(t){return t&&typeof t=="object"&&ZE(t)===YE}function Qa(t,n){return t.reduce((e,r,i)=>(e[r]=n[i],e),{})}function Bo(...t){let n=wn(t),e=Fa(t),{args:r,keys:i}=Ya(t);if(r.length===0)return Re([],n);let o=new L(XE(r,n,i?s=>Qa(i,s):St));return e?o.pipe(Za(e)):o}function XE(t,n,e=St){return r=>{Vg(n,()=>{let{length:i}=t,o=new Array(i),s=i,a=i;for(let l=0;l<i;l++)Vg(n,()=>{let c=Re(t[l],n),d=!1;c.subscribe(te(r,f=>{o[l]=f,d||(d=!0,a--),a||r.next(e(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function Vg(t,n,e){t?Ct(e,t,n):n()}function jg(t,n,e,r,i,o,s,a){let l=[],c=0,d=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},p=w=>c<r?m(w):l.push(w),m=w=>{o&&n.next(w),c++;let I=!1;we(e(w,d++)).subscribe(te(n,T=>{i?.(T),o?p(T):n.next(T)},()=>{I=!0},void 0,()=>{if(I)try{for(c--;l.length&&c<r;){let T=l.shift();s?Ct(n,s,()=>m(T)):m(T)}h()}catch(T){n.error(T)}}))};return t.subscribe(te(n,p,()=>{f=!0,h()})),()=>{a?.()}}function nt(t,n,e=1/0){return X(n)?nt((r,i)=>Y((o,s)=>n(r,o,i,s))(we(t(r,i))),e):(typeof n=="number"&&(e=n),ee((r,i)=>jg(r,i,t,e)))}function Ka(t=1/0){return nt(St,t)}function Bg(){return Ka(1)}function Cn(...t){return Bg()(Re(t,wn(t)))}function jr(t){return new L(n=>{we(t()).subscribe(n)})}function Ou(...t){let n=Fa(t),{args:e,keys:r}=Ya(t),i=new L(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;we(e[d]).subscribe(te(o,h=>{f||(f=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Qa(r,a):a),o.complete())}))}});return n?i.pipe(Za(n)):i}function Br(t=0,n,e=Eg){let r=-1;return n!=null&&(Oa(n)?e=n:r=n),new L(i=>{let o=Lg(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function Mt(...t){let n=wn(t),e=xg(t,1/0),r=t;return r.length?r.length===1?we(r[0]):Ka(e)(Re(r,n)):ke}function ue(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>t.call(n,o,i++)&&r.next(o)))})}function Hg(t){return ee((n,e)=>{let r=!1,i=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(te(e,c=>{r=!0,i=c,o||we(t(c)).subscribe(o=te(e,a,l))},()=>{s=!0,(!r||!o||o.closed)&&e.complete()}))})}function Xa(t,n=Pr){return Hg(()=>Br(t,n))}function Ho(t){return ee((n,e)=>{let r=null,i=!1,o;r=n.subscribe(te(e,void 0,void 0,s=>{o=we(t(s,Ho(t)(n))),r?(r.unsubscribe(),r=null,o.subscribe(e)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(e))})}function Ni(t,n){return X(n)?nt(t,n,1):nt(t,1)}function nn(t,n=Pr){return ee((e,r)=>{let i=null,o=null,s=null,a=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}a()}e.subscribe(te(r,c=>{o=c,s=n.now(),i||(i=n.schedule(l,t),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function Ug(t){return ee((n,e)=>{let r=!1;n.subscribe(te(e,i=>{r=!0,e.next(i)},()=>{r||e.next(t),e.complete()}))})}function Xe(t){return t<=0?()=>ke:ee((n,e)=>{let r=0;n.subscribe(te(e,i=>{++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function zg(){return ee((t,n)=>{t.subscribe(te(n,Nr))})}function Oi(t){return Y(()=>t)}function Fu(t,n){return n?e=>Cn(n.pipe(Xe(1),zg()),e.pipe(Fu(t))):nt((e,r)=>we(t(e,r)).pipe(Xe(1),Oi(e)))}function Pu(t,n=Pr){let e=Br(t,n);return Fu(()=>e)}function Ja(t,n=St){return t=t??JE,ee((e,r)=>{let i,o=!0;e.subscribe(te(r,s=>{let a=n(s);(o||!t(i,a))&&(o=!1,i=a,r.next(s))}))})}function JE(t,n){return t===n}function $g(t=e0){return ee((n,e)=>{let r=!1;n.subscribe(te(e,i=>{r=!0,e.next(i)},()=>r?e.complete():e.error(t())))})}function e0(){return new Vr}function Uo(t){return ee((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function jn(t,n){let e=arguments.length>=2;return r=>r.pipe(t?ue((i,o)=>t(i,o,r)):St,Xe(1),e?Ug(n):$g(()=>new Vr))}function el(t){return t<=0?()=>ke:ee((n,e)=>{let r=[];n.subscribe(te(e,i=>{r.push(i),t<r.length&&r.shift()},()=>{for(let i of r)e.next(i);e.complete()},void 0,()=>{r=null}))})}function tl(){return ee((t,n)=>{let e,r=!1;t.subscribe(te(n,i=>{let o=e;e=i,r&&n.next([o,i]),r=!0}))})}function Wg(t={}){let{connector:n=()=>new C,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=l=void 0,d=f=!1},m=()=>{let w=s;p(),w?.unsubscribe()};return ee((w,I)=>{c++,!f&&!d&&h();let T=l=l??n();I.add(()=>{c--,c===0&&!f&&!d&&(a=Lu(m,i))}),T.subscribe(I),!s&&c>0&&(s=new Vn({next:me=>T.next(me),error:me=>{f=!0,h(),a=Lu(p,e,me),T.error(me)},complete:()=>{d=!0,h(),a=Lu(p,r),T.complete()}}),we(w).subscribe(s))})(o)}}function Lu(t,n,...e){if(n===!0){t();return}if(n===!1)return;let r=new Vn({next:()=>{r.unsubscribe(),t()}});return we(n(...e)).subscribe(r)}function nl(t,n,e){let r,i=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:e}=t:r=t??1/0,Wg({connector:()=>new Aa(r,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Hr(t){return ue((n,e)=>t<=e)}function rt(...t){let n=wn(t);return ee((e,r)=>{(n?Cn(t,e,n):Cn(t,e)).subscribe(r)})}function He(t,n){return ee((e,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();e.subscribe(te(r,l=>{i?.unsubscribe();let c=0,d=o++;we(t(l,d)).subscribe(i=te(r,f=>r.next(n?n(l,f,d,c++):f),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function Ce(t){return ee((n,e)=>{we(t).subscribe(te(e,()=>e.complete(),Nr)),!e.closed&&n.subscribe(e)})}function lt(t,n,e){let r=X(t)||n||e?{next:t,error:n,complete:e}:t;return r?ee((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(te(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):St}var Vu;function rl(){return Vu}function En(t){let n=Vu;return Vu=t,n}var Gg=Symbol("NotFound");function Fi(t){return t===Gg||t?.name==="\u0275NotFound"}function ju(t,n,e){let r=Object.create(t0);r.source=t,r.computation=n,e!=null&&(r.equal=e);let o=()=>{if(Ar(r),nr(r),r.value===Dn)throw r.error;return r.value};return o[Fe]=r,No(r),o}function qg(t,n){Ar(t),Rr(t,n),xi(t)}function Zg(t,n){if(Ar(t),t.value===Dn)throw t.error;Ea(t,n),xi(t)}var t0=Z(g({},tr),{value:Mr,dirty:!0,error:null,equal:Oo,kind:"linkedSignal",producerMustRecompute(t){return t.value===Mr||t.value===Tr},producerRecomputeValue(t){if(t.value===Tr)throw new Error("");let n=t.value;t.value=Tr;let e=Ln(t),r,i=!1;try{let o=t.source(),s=n!==Mr&&n!==Dn,a=s?{source:t.sourceValue,value:n}:void 0;r=t.computation(o,a),t.sourceValue=o,N(null),i=s&&r!==Dn&&t.equal(n,r)}catch(o){r=Dn,t.error=o}finally{rr(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function Yg(t){let n=N(null);try{return t()}finally{N(n)}}var dl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",E=class extends Error{code;constructor(n,e){super(ar(n,e)),this.code=n}};function n0(t){return`NG0${Math.abs(t)}`}function ar(t,n){return`${n0(t)}${n?": "+n:""}`}var Yo=globalThis;function ye(t){for(let n in t)if(t[n]===ye)return n;throw Error("")}function ev(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Qo(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Qo).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let r=e.indexOf(`
`);return r>=0?e.slice(0,r):e}function ul(t,n){return t?n?`${t} ${n}`:t:n||""}var r0=ye({__forward_ref__:ye});function $t(t){return t.__forward_ref__=$t,t}function it(t){return Xu(t)?t():t}function Xu(t){return typeof t=="function"&&t.hasOwnProperty(r0)&&t.__forward_ref__===$t}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function re(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ko(t){return i0(t,fl)}function Ju(t){return Ko(t)!==null}function i0(t,n){return t.hasOwnProperty(n)&&t[n]||null}function o0(t){let n=t?.[fl]??null;return n||null}function Hu(t){return t&&t.hasOwnProperty(ol)?t[ol]:null}var fl=ye({\u0275prov:ye}),ol=ye({\u0275inj:ye}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ef(t){return t&&!!t.\u0275providers}var tf=ye({\u0275cmp:ye}),nf=ye({\u0275dir:ye}),rf=ye({\u0275pipe:ye}),of=ye({\u0275mod:ye}),$o=ye({\u0275fac:ye}),qr=ye({__NG_ELEMENT_ID__:ye}),Qg=ye({__NG_ENV_ID__:ye});function sf(t){return hl(t,"@NgModule"),t[of]||null}function Hn(t){return hl(t,"@Component"),t[tf]||null}function af(t){return hl(t,"@Directive"),t[nf]||null}function tv(t){return hl(t,"@Pipe"),t[rf]||null}function hl(t,n){if(t==null)throw new E(-919,!1)}function Zr(t){return typeof t=="string"?t:t==null?"":String(t)}var nv=ye({ngErrorCode:ye}),s0=ye({ngErrorMessage:ye}),a0=ye({ngTokenPath:ye});function lf(t,n){return rv("",-200,n)}function pl(t,n){throw new E(-201,!1)}function rv(t,n,e){let r=new E(n,t);return r[nv]=n,r[s0]=t,e&&(r[a0]=e),r}function l0(t){return t[nv]}var Uu;function iv(){return Uu}function Tt(t){let n=Uu;return Uu=t,n}function cf(t,n,e){let r=Ko(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(e&8)return null;if(n!==void 0)return n;pl(t,"")}var c0={},Ur=c0,d0="__NG_DI_FLAG__",zu=class{injector;constructor(n){this.injector=n}retrieve(n,e){let r=zr(e)||0;try{return this.injector.get(n,r&8?null:Ur,r)}catch(i){if(Fi(i))return i;throw i}}};function u0(t,n=0){let e=rl();if(e===void 0)throw new E(-203,!1);if(e===null)return cf(t,void 0,n);{let r=f0(n),i=e.retrieve(t,r);if(Fi(i)){if(r.optional)return null;throw i}return i}}function P(t,n=0){return(iv()||u0)(it(t),n)}function u(t,n){return P(t,zr(n))}function zr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function f0(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function $u(t){let n=[];for(let e=0;e<t.length;e++){let r=it(t[e]);if(Array.isArray(r)){if(r.length===0)throw new E(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=h0(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}n.push(P(i,o))}else n.push(P(r))}return n}function h0(t){return t[d0]}function $r(t,n){let e=t.hasOwnProperty($o);return e?t[$o]:null}function ov(t,n,e){if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(e&&(i=e(i),o=e(o)),o!==i)return!1}return!0}function sv(t){return t.flat(Number.POSITIVE_INFINITY)}function ml(t,n){t.forEach(e=>Array.isArray(e)?ml(e,n):n(e))}function df(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Xo(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function av(t,n){let e=[];for(let r=0;r<t;r++)e.push(n);return e}function lv(t,n,e,r){let i=t.length;if(i==n)t.push(e,r);else if(i===1)t.push(r,t[0]),t[0]=e;else{for(i--,t.push(t[i-1],t[i]);i>n;){let o=i-2;t[i]=t[o],i--}t[n]=e,t[n+1]=r}}function gl(t,n,e){let r=Li(t,n);return r>=0?t[r|1]=e:(r=~r,lv(t,r,n,e)),r}function vl(t,n){let e=Li(t,n);if(e>=0)return t[e|1]}function Li(t,n){return p0(t,n,1)}function p0(t,n,e){let r=0,i=t.length>>e;for(;i!==r;){let o=r+(i-r>>1),s=t[o<<e];if(n===s)return o<<e;s>n?i=o:r=o+1}return~(i<<e)}var lr={},ct=[],Yr=new v(""),uf=new v("",-1),ff=new v(""),Wo=class{get(n,e=Ur){if(e===Ur){let i=rv("",-201);throw i.name="\u0275NotFound",i}return e}};function Qr(t){return{\u0275providers:t}}function cv(t){return Qr([{provide:Yr,multi:!0,useValue:t}])}function dv(...t){return{\u0275providers:hf(!0,t),\u0275fromNgModule:!0}}function hf(t,...n){let e=[],r=new Set,i,o=s=>{e.push(s)};return ml(n,s=>{let a=s;sl(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&uv(i,o),e}function uv(t,n){for(let e=0;e<t.length;e++){let{ngModule:r,providers:i}=t[e];pf(i,o=>{n(o,r)})}}function sl(t,n,e,r){if(t=it(t),!t)return!1;let i=null,o=Hu(t),s=!o&&Hn(t);if(!o&&!s){let l=t.ngModule;if(o=Hu(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=t}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)sl(c,n,e,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;ml(o.imports,d=>{sl(d,n,e,r)&&(c||=[],c.push(d))}),c!==void 0&&uv(c,n)}if(!a){let c=$r(i)||(()=>new i);n({provide:i,useFactory:c,deps:ct},i),n({provide:ff,useValue:i,multi:!0},i),n({provide:Yr,useValue:()=>P(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=t;pf(l,d=>{n(d,c)})}}else return!1;return i!==t&&t.providers!==void 0}function pf(t,n){for(let e of t)ef(e)&&(e=e.\u0275providers),Array.isArray(e)?pf(e,n):n(e)}var m0=ye({provide:String,useValue:ye});function fv(t){return t!==null&&typeof t=="object"&&m0 in t}function g0(t){return!!(t&&t.useExisting)}function v0(t){return!!(t&&t.useFactory)}function Wr(t){return typeof t=="function"}function hv(t){return!!t.useClass}var Jo=new v(""),il={},Kg={},Bu;function Vi(){return Bu===void 0&&(Bu=new Wo),Bu}var ge=class{},Gr=class extends ge{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,r,i){super(),this.parent=e,this.source=r,this.scopes=i,Gu(n,s=>this.processProvider(s)),this.records.set(uf,Pi(void 0,this)),i.has("environment")&&this.records.set(ge,Pi(void 0,this));let o=this.records.get(Jo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(ff,ct,{self:!0}))}retrieve(n,e){let r=zr(e)||0;try{return this.get(n,Ur,r)}catch(i){if(Fi(i))return i;throw i}}destroy(){zo(this),this._destroyed=!0;let n=N(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),N(n)}}onDestroy(n){return zo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){zo(this);let e=En(this),r=Tt(void 0),i;try{return n()}finally{En(e),Tt(r)}}get(n,e=Ur,r){if(zo(this),n.hasOwnProperty(Qg))return n[Qg](this);let i=zr(r),o,s=En(this),a=Tt(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=w0(n)&&Ko(n);d&&this.injectableDefInScope(d)?c=Pi(Wu(n),il):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Vi():this.parent;return e=i&8&&e===Ur?null:e,l.get(n,e)}catch(l){let c=l0(l);throw c===-200||c===-201?new E(c,null):l}finally{Tt(a),En(s)}}resolveInjectorInitializers(){let n=N(null),e=En(this),r=Tt(void 0),i;try{let o=this.get(Yr,ct,{self:!0});for(let s of o)s()}finally{En(e),Tt(r),N(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=it(n);let e=Wr(n)?n:it(n&&n.provide),r=y0(n);if(!Wr(n)&&n.multi===!0){let i=this.records.get(e);i||(i=Pi(void 0,il,!0),i.factory=()=>$u(i.multi),this.records.set(e,i)),e=n,i.multi.push(n)}this.records.set(e,r)}hydrate(n,e,r){let i=N(null);try{if(e.value===Kg)throw lf("");return e.value===il&&(e.value=Kg,e.value=e.factory(void 0,r)),typeof e.value=="object"&&e.value&&D0(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{N(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=it(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Wu(t){let n=Ko(t),e=n!==null?n.factory:$r(t);if(e!==null)return e;if(t instanceof v)throw new E(-204,!1);if(t instanceof Function)return b0(t);throw new E(-204,!1)}function b0(t){if(t.length>0)throw new E(-204,!1);let e=o0(t);return e!==null?()=>e.factory(t):()=>new t}function y0(t){if(fv(t))return Pi(void 0,t.useValue);{let n=mf(t);return Pi(n,il)}}function mf(t,n,e){let r;if(Wr(t)){let i=it(t);return $r(i)||Wu(i)}else if(fv(t))r=()=>it(t.useValue);else if(v0(t))r=()=>t.useFactory(...$u(t.deps||[]));else if(g0(t))r=(i,o)=>P(it(t.useExisting),o!==void 0&&o&8?8:void 0);else{let i=it(t&&(t.useClass||t.provide));if(_0(t))r=()=>new i(...$u(t.deps));else return $r(i)||Wu(i)}return r}function zo(t){if(t.destroyed)throw new E(-205,!1)}function Pi(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function _0(t){return!!t.deps}function D0(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function w0(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Gu(t,n){for(let e of t)Array.isArray(e)?Gu(e,n):e&&ef(e)?Gu(e.\u0275providers,n):n(e)}function Je(t,n){let e;t instanceof Gr?(zo(t),e=t):e=new zu(t);let r,i=En(e),o=Tt(void 0);try{return n()}finally{En(i),Tt(o)}}function pv(){return iv()!==void 0||rl()!=null}var on=0,V=1,$=2,$e=3,Wt=4,vt=5,Kr=6,ji=7,Pe=8,Un=9,sn=10,Ae=11,Bi=12,gf=13,Xr=14,bt=15,cr=16,Jr=17,In=18,zn=19,vf=20,Bn=21,bl=22,or=23,At=24,ei=25,dr=26,Le=27,mv=1,bf=6,ur=7,es=8,ti=9,Ne=10;function $n(t){return Array.isArray(t)&&typeof t[mv]=="object"}function an(t){return Array.isArray(t)&&t[mv]===!0}function yf(t){return(t.flags&4)!==0}function Sn(t){return t.componentOffset>-1}function ts(t){return(t.flags&1)===1}function Mn(t){return!!t.template}function Hi(t){return(t[$]&512)!==0}function ni(t){return(t[$]&256)===256}var gv="svg",vv="math";function Gt(t){for(;Array.isArray(t);)t=t[on];return t}function _f(t,n){return Gt(n[t])}function qt(t,n){return Gt(n[t.index])}function yl(t,n){return t.data[n]}function bv(t,n){return t[n]}function Zt(t,n){let e=n[t];return $n(e)?e:e[on]}function yv(t){return(t[$]&4)===4}function _l(t){return(t[$]&128)===128}function _v(t){return an(t[$e])}function Rt(t,n){return n==null?null:t[n]}function Df(t){t[Jr]=0}function wf(t){t[$]&1024||(t[$]|=1024,_l(t)&&ri(t))}function Dv(t,n){for(;t>0;)n=n[Xr],t--;return n}function ns(t){return!!(t[$]&9216||t[At]?.dirty)}function Dl(t){t[sn].changeDetectionScheduler?.notify(8),t[$]&64&&(t[$]|=1024),ns(t)&&ri(t)}function ri(t){t[sn].changeDetectionScheduler?.notify(0);let n=sr(t);for(;n!==null&&!(n[$]&8192||(n[$]|=8192,!_l(n)));)n=sr(n)}function Cf(t,n){if(ni(t))throw new E(911,!1);t[Bn]===null&&(t[Bn]=[]),t[Bn].push(n)}function wv(t,n){if(t[Bn]===null)return;let e=t[Bn].indexOf(n);e!==-1&&t[Bn].splice(e,1)}function sr(t){let n=t[$e];return an(n)?n[$e]:n}function Ef(t){return t[ji]??=[]}function xf(t){return t.cleanup??=[]}function Cv(t,n,e,r){let i=Ef(n);i.push(e),t.firstCreatePass&&xf(t).push(r,i.length-1)}var oe={lFrame:Pv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var qu=!1;function Ev(){return oe.lFrame.elementDepthCount}function xv(){oe.lFrame.elementDepthCount++}function If(){oe.lFrame.elementDepthCount--}function Sf(){return oe.bindingsEnabled}function Mf(){return oe.skipHydrationRootTNode!==null}function Tf(t){return oe.skipHydrationRootTNode===t}function Af(){oe.skipHydrationRootTNode=null}function G(){return oe.lFrame.lView}function Oe(){return oe.lFrame.tView}function kt(t){return oe.lFrame.contextLView=t,t[Pe]}function Nt(t){return oe.lFrame.contextLView=null,t}function dt(){let t=Rf();for(;t!==null&&t.type===64;)t=t.parent;return t}function Rf(){return oe.lFrame.currentTNode}function Iv(){let t=oe.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Ui(t,n){let e=oe.lFrame;e.currentTNode=t,e.isParent=n}function kf(){return oe.lFrame.isParent}function Nf(){oe.lFrame.isParent=!1}function Sv(){return oe.lFrame.contextLView}function Of(){return qu}function Go(t){let n=qu;return qu=t,n}function Mv(){let t=oe.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Tv(){return oe.lFrame.bindingIndex}function Av(t){return oe.lFrame.bindingIndex=t}function Wn(){return oe.lFrame.bindingIndex++}function wl(t){let n=oe.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Rv(){return oe.lFrame.inI18n}function kv(t,n){let e=oe.lFrame;e.bindingIndex=e.bindingRootIndex=t,Cl(n)}function Nv(){return oe.lFrame.currentDirectiveIndex}function Cl(t){oe.lFrame.currentDirectiveIndex=t}function Ov(t){let n=oe.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function El(){return oe.lFrame.currentQueryIndex}function rs(t){oe.lFrame.currentQueryIndex=t}function C0(t){let n=t[V];return n.type===2?n.declTNode:n.type===1?t[vt]:null}function Ff(t,n,e){if(e&4){let i=n,o=t;for(;i=i.parent,i===null&&!(e&1);)if(i=C0(o),i===null||(o=o[Xr],i.type&10))break;if(i===null)return!1;n=i,t=o}let r=oe.lFrame=Fv();return r.currentTNode=n,r.lView=t,!0}function xl(t){let n=Fv(),e=t[V];oe.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Fv(){let t=oe.lFrame,n=t===null?null:t.child;return n===null?Pv(t):n}function Pv(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Lv(){let t=oe.lFrame;return oe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Pf=Lv;function Il(){let t=Lv();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Vv(t){return(oe.lFrame.contextLView=Dv(t,oe.lFrame.contextLView))[Pe]}function Tn(){return oe.lFrame.selectedIndex}function fr(t){oe.lFrame.selectedIndex=t}function is(){let t=oe.lFrame;return yl(t.tView,t.selectedIndex)}function jv(){return oe.lFrame.currentNamespace}var Bv=!0;function Sl(){return Bv}function Ml(t){Bv=t}function Zu(t,n=null,e=null,r){let i=Lf(t,n,e,r);return i.resolveInjectorInitializers(),i}function Lf(t,n=null,e=null,r,i=new Set){let o=[e||ct,dv(t)],s;return new Gr(o,n||Vi(),s||null,i)}var ne=class t{static THROW_IF_NOT_FOUND=Ur;static NULL=new Wo;static create(n,e){if(Array.isArray(n))return Zu({name:""},e,n,"");{let r=n.name??"";return Zu({name:r},n.parent,n.providers,r)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>P(uf)});static __NG_ELEMENT_ID__=-1},Q=new v(""),yt=(()=>{class t{static __NG_ELEMENT_ID__=E0;static __NG_ENV_ID__=e=>e}return t})(),al=class extends yt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return ni(this._lView)}onDestroy(n){let e=this._lView;return Cf(e,n),()=>wv(e,n)}};function E0(){return new al(G())}var Hv=!1,Uv=new v(""),Gn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Be(!1);debugTaskTracker=u(Uv,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new L(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Yu=class extends C{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,pv()&&(this.destroyRef=u(yt,{optional:!0})??void 0,this.pendingTasks=u(Gn,{optional:!0})??void 0)}emit(n){let e=N(null);try{super.next(n)}finally{N(e)}}subscribe(n,e,r){let i=n,o=e||(()=>null),s=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return n instanceof de&&n.add(a),a}wrapInTimeout(n){return e=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},O=Yu;function ll(...t){}function Vf(t){let n,e;function r(){t=ll;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),r()})),()=>r()}function zv(t){return queueMicrotask(()=>t()),()=>{t=ll}}var jf="isAngularZone",qo=jf+"_ID",x0=0,M=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new O(!1);onMicrotaskEmpty=new O(!1);onStable=new O(!1);onError=new O(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Hv}=n;if(typeof Zone>"u")throw new E(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,M0(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(jf)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new E(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new E(909,!1)}run(n,e,r){return this._inner.run(n,e,r)}runTask(n,e,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,n,I0,ll,ll);try{return o.runTask(s,e,r)}finally{o.cancelTask(s)}}runGuarded(n,e,r){return this._inner.runGuarded(n,e,r)}runOutsideAngular(n){return this._outer.run(n)}},I0={};function Bf(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function S0(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Vf(()=>{t.callbackScheduled=!1,Qu(t),t.isCheckStableRunning=!0,Bf(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Qu(t)}function M0(t){let n=()=>{S0(t)},e=x0++;t._inner=t._inner.fork({name:"angular",properties:{[jf]:!0,[qo]:e,[qo+e]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(T0(l))return r.invokeTask(o,s,a,l);try{return Xg(t),r.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Jg(t)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return Xg(t),r.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!A0(l)&&n(),Jg(t)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Qu(t),Bf(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Qu(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Xg(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Jg(t){t._nesting--,Bf(t)}var Zo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new O;onMicrotaskEmpty=new O;onStable=new O;onError=new O;run(n,e,r){return n.apply(e,r)}runGuarded(n,e,r){return n.apply(e,r)}runOutsideAngular(n){return n()}runTask(n,e,r,i){return n.apply(e,r)}};function T0(t){return $v(t,"__ignore_ng_zone__")}function A0(t){return $v(t,"__scheduler_tick__")}function $v(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var rn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Ot=new v("",{factory:()=>{let t=u(M),n=u(ge),e;return r=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw r}):(e??=n.get(rn),e.handleError(r))})}}}),Wv={provide:Yr,useValue:()=>{let t=u(rn,{optional:!0})},multi:!0},R0=new v("",{factory:()=>{let t=u(Q).defaultView;if(!t)return;let n=u(Ot),e=o=>{n(o.reason),o.preventDefault()},r=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),u(yt).onDestroy(()=>{t.removeEventListener("error",r),t.removeEventListener("unhandledrejection",e)})}});function Hf(){return Qr([cv(()=>{u(R0)})])}function F(t,n){let[e,r,i]=Du(t,n?.equal),o=e,s=o[Fe];return o.set=r,o.update=i,o.asReadonly=Tl.bind(o),o}function Tl(){let t=this[Fe];if(t.readonlyFn===void 0){let n=()=>this();n[Fe]=t,t.readonlyFn=n}return t.readonlyFn}var zi=(()=>{class t{view;node;constructor(e,r){this.view=e,this.node=r}static __NG_ELEMENT_ID__=k0}return t})();function k0(){return new zi(G(),dt())}var xn=class{},os=new v("",{factory:()=>!0});var Uf=new v(""),ss=(()=>{class t{internalPendingTasks=u(Gn);scheduler=u(xn);errorHandler=u(Ot);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let r=this.add();e().catch(this.errorHandler).finally(r)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Al=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new Ku})}return t})(),Ku=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,r=this.queues.get(e);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let r=this.queues.get(e);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,r]of this.queues)e===null?n||=this.flushQueue(r):n||=e.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,e=!0,r.run());return e}},cl=class{[Fe];constructor(n){this[Fe]=n}destroy(){this[Fe].destroy()}};function ln(t,n){let e=n?.injector??u(ne),r=n?.manualCleanup!==!0?e.get(yt):null,i,o=e.get(zi,null,{optional:!0}),s=e.get(xn);return o!==null?(i=F0(o.view,s,t),r instanceof al&&r._lView===o.view&&(r=null)):i=P0(t,e.get(Al),s),i.injector=e,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new cl(i)}var Gv=Z(g({},wu),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Go(!1);try{Cu(this)}finally{Go(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=N(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],N(t)}}}),N0=Z(g({},Gv),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ir(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),O0=Z(g({},Gv),{consumerMarkedDirty(){this.view[$]|=8192,ri(this.view),this.notifier.notify(13)},destroy(){if(ir(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[or]?.delete(this)}});function F0(t,n,e){let r=Object.create(O0);return r.view=t,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.fn=qv(r,e),t[or]??=new Set,t[or].add(r),r.consumerMarkedDirty(r),r}function P0(t,n,e){let r=Object.create(N0);return r.fn=qv(r,t),r.scheduler=n,r.notifier=e,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function qv(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function gs(t){return{toString:t}.toString()}function G0(t){return typeof t=="function"}function Cb(t,n,e,r){n!==null?n.applyValueToInputSignal(n,r):t[e]=r}var Ll=class{previousValue;currentValue;firstChange;constructor(n,e,r){this.previousValue=n,this.currentValue=e,this.firstChange=r}isFirstChange(){return this.firstChange}},We=(()=>{let t=()=>Eb;return t.ngInherit=!0,t})();function Eb(t){return t.type.prototype.ngOnChanges&&(t.setInput=Z0),q0}function q0(){let t=Ib(this),n=t?.current;if(n){let e=t.previous;if(e===lr)t.previous=n;else for(let r in n)e[r]=n[r];t.current=null,this.ngOnChanges(n)}}function Z0(t,n,e,r,i){let o=this.declaredInputs[r],s=Ib(t)||Y0(t,{previous:lr,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Ll(c&&c.currentValue,e,l===lr),Cb(t,n,i,e)}var xb="__ngSimpleChanges__";function Ib(t){return t[xb]||null}function Y0(t,n){return t[xb]=n}var Zv=[];var _e=function(t,n=null,e){for(let r=0;r<Zv.length;r++){let i=Zv[r];i(t,n,e)}},pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(pe||{});function Q0(t,n,e){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let s=Eb(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}i&&(e.preOrderHooks??=[]).push(0-t,i),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Sb(t,n){for(let e=n.directiveStart,r=n.directiveEnd;e<r;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Nl(t,n,e){Mb(t,n,3,e)}function Ol(t,n,e,r){(t[$]&3)===e&&Mb(t,n,e,r)}function zf(t,n){let e=t[$];(e&3)===n&&(e&=16383,e+=1,t[$]=e)}function Mb(t,n,e,r){let i=r!==void 0?t[Jr]&65535:0,o=r??-1,s=n.length-1,a=0;for(let l=i;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],r!=null&&a>=r)break}else n[l]<0&&(t[Jr]+=65536),(a<o||o==-1)&&(K0(t,e,n,l),t[Jr]=(t[Jr]&4294901760)+l+2),l++}function Yv(t,n){_e(pe.LifecycleHookStart,t,n);let e=N(null);try{n.call(t)}finally{N(e),_e(pe.LifecycleHookEnd,t,n)}}function K0(t,n,e,r){let i=e[r]<0,o=e[r+1],s=i?-e[r]:e[r],a=t[s];i?t[$]>>14<t[Jr]>>16&&(t[$]&3)===n&&(t[$]+=16384,Yv(a,o)):Yv(a,o)}var Wi=-1,oi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=e,this.injectImpl=r}};function X0(t){return(t.flags&8)!==0}function J0(t){return(t.flags&16)!==0}function ex(t,n,e){let r=0;for(;r<e.length;){let i=e[r];if(typeof i=="number"){if(i!==0)break;r++;let o=e[r++],s=e[r++],a=e[r++];t.setAttribute(n,s,a,o)}else{let o=i,s=e[++r];tx(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),r++}}return r}function Tb(t){return t===3||t===4||t===6}function tx(t){return t.charCodeAt(0)===64}function Gi(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?e=i:e===0||(e===-1||e===2?Qv(t,e,i,null,n[++r]):Qv(t,e,i,null,null))}}return t}function Qv(t,n,e,r,i){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){i!==null&&(t[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),i!==null&&t.splice(o++,0,i)}function Ab(t){return t!==Wi}function Vl(t){return t&32767}function nx(t){return t>>16}function jl(t,n){let e=nx(t),r=n;for(;e>0;)r=r[Xr],e--;return r}var eh=!0;function Kv(t){let n=eh;return eh=t,n}var rx=256,Rb=rx-1,kb=5,ix=0,An={};function ox(t,n,e){let r;typeof e=="string"?r=e.charCodeAt(0)||0:e.hasOwnProperty(qr)&&(r=e[qr]),r==null&&(r=e[qr]=ix++);let i=r&Rb,o=1<<i;n.data[t+(i>>kb)]|=o}function Bl(t,n){let e=Nb(t,n);if(e!==-1)return e;let r=n[V];r.firstCreatePass&&(t.injectorIndex=n.length,$f(r.data,t),$f(n,null),$f(r.blueprint,null));let i=Mh(t,n),o=t.injectorIndex;if(Ab(i)){let s=Vl(i),a=jl(i,n),l=a[V].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=i,o}function $f(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Nb(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Mh(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,r=null,i=n;for(;i!==null;){if(r=Vb(i),r===null)return Wi;if(e++,i=i[Xr],r.injectorIndex!==-1)return r.injectorIndex|e<<16}return Wi}function th(t,n,e){ox(t,n,e)}function sx(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let r=e.length,i=0;for(;i<r;){let o=e[i];if(Tb(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof e[i]=="string";)i++;else{if(o===n)return e[i+1];i=i+2}}}return null}function Ob(t,n,e){if(e&8||t!==void 0)return t;pl(n,"NodeInjector")}function Fb(t,n,e,r){if(e&8&&r===void 0&&(r=null),(e&3)===0){let i=t[Un],o=Tt(void 0);try{return i?i.get(n,r,e&8):cf(n,r,e&8)}finally{Tt(o)}}return Ob(r,n,e)}function Pb(t,n,e,r=0,i){if(t!==null){if(n[$]&2048&&!(r&2)){let s=dx(t,n,e,r,An);if(s!==An)return s}let o=Lb(t,n,e,r,An);if(o!==An)return o}return Fb(n,e,r,i)}function Lb(t,n,e,r,i){let o=lx(e);if(typeof o=="function"){if(!Ff(n,t,r))return r&1?Ob(i,e,r):Fb(n,e,r,i);try{let s;if(s=o(r),s==null&&!(r&8))pl(e);else return s}finally{Pf()}}else if(typeof o=="number"){let s=null,a=Nb(t,n),l=Wi,c=r&1?n[bt][vt]:null;for((a===-1||r&4)&&(l=a===-1?Mh(t,n):n[a+8],l===Wi||!Jv(r,!1)?a=-1:(s=n[V],a=Vl(l),n=jl(l,n)));a!==-1;){let d=n[V];if(Xv(o,a,d.data)){let f=ax(a,n,e,s,r,c);if(f!==An)return f}l=n[a+8],l!==Wi&&Jv(r,n[V].data[a+8]===c)&&Xv(o,a,n)?(s=d,a=Vl(l),n=jl(l,n)):a=-1}}return i}function ax(t,n,e,r,i,o){let s=n[V],a=s.data[t+8],l=r==null?Sn(a)&&eh:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=Fl(a,s,e,l,c);return d!==null?ds(n,s,d,a,i):An}function Fl(t,n,e,r,i){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=r?a:a+d,h=i?a+d:c;for(let p=f;p<h;p++){let m=s[p];if(p<l&&e===m||p>=l&&m.type===e)return p}if(i){let p=s[l];if(p&&Mn(p)&&p.type===e)return l}return null}function ds(t,n,e,r,i){let o=t[e],s=n.data;if(o instanceof oi){let a=o;if(a.resolving)throw lf("");let l=Kv(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?Tt(a.injectImpl):null,h=Ff(t,r,0);try{o=t[e]=a.factory(void 0,i,s,t,r),n.firstCreatePass&&e>=r.directiveStart&&Q0(e,s[e],n)}finally{f!==null&&Tt(f),Kv(l),a.resolving=!1,Pf()}}return o}function lx(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(qr)?t[qr]:void 0;return typeof n=="number"?n>=0?n&Rb:cx:n}function Xv(t,n,e){let r=1<<t;return!!(e[n+(t>>kb)]&r)}function Jv(t,n){return!(t&2)&&!(t&1&&n)}var ii=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,r){return Pb(this._tNode,this._lView,n,zr(r),e)}};function cx(){return new ii(dt(),G())}function Ge(t){return gs(()=>{let n=t.prototype.constructor,e=n[$o]||nh(n),r=Object.prototype,i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==r;){let o=i[$o]||nh(i);if(o&&o!==e)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function nh(t){return Xu(t)?()=>{let n=nh(it(t));return n&&n()}:$r(t)}function dx(t,n,e,r,i){let o=t,s=n;for(;o!==null&&s!==null&&s[$]&2048&&!Hi(s);){let a=Lb(o,s,e,r|2,An);if(a!==An)return a;let l=o.parent;if(!l){let c=s[vf];if(c){let d=c.get(e,An,r&-5);if(d!==An)return d}l=Vb(s),s=s[Xr]}o=l}return i}function Vb(t){let n=t[V],e=n.type;return e===2?n.declTNode:e===1?t[vt]:null}function vs(t){return sx(dt(),t)}function ux(){return Ki(dt(),G())}function Ki(t,n){return new k(qt(t,n))}var k=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=ux}return t})();function jb(t){return t instanceof k?t.nativeElement:t}function fx(){return this._results[Symbol.iterator]()}var un=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new C}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let r=sv(n);(this._changesDetected=!ov(this._results,r,e))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=fx};function Bb(t){return(t.flags&128)===128}var Th=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Th||{}),Hb=new Map,hx=0;function px(){return hx++}function mx(t){Hb.set(t[zn],t)}function rh(t){Hb.delete(t[zn])}var eb="__ngContext__";function qi(t,n){$n(n)?(t[eb]=n[zn],mx(n)):t[eb]=n}function Ub(t){return $b(t[Bi])}function zb(t){return $b(t[Wt])}function $b(t){for(;t!==null&&!an(t);)t=t[Wt];return t}var gx;function Ah(t){gx=t}var Xi=new v("",{factory:()=>vx}),vx="ng";var ec=new v(""),ci=new v("",{providedIn:"platform",factory:()=>"unknown"}),bs=new v(""),di=new v("",{factory:()=>u(Q).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Wb="r";var Gb="di";var qb=!1,Zb=new v("",{factory:()=>qb});var bx=(t,n,e,r)=>{};function yx(t,n,e,r){bx(t,n,e,r)}function tc(t){return(t.flags&32)===32}var _x=()=>null;function Yb(t,n,e=!1){return _x(t,n,e)}function Qb(t,n){let e=t.contentQueries;if(e!==null){let r=N(null);try{for(let i=0;i<e.length;i+=2){let o=e[i],s=e[i+1];if(s!==-1){let a=t.data[s];rs(o),a.contentQueries(2,n[s],s)}}}finally{N(r)}}}function ih(t,n,e){rs(0);let r=N(null);try{n(t,e)}finally{N(r)}}function Kb(t,n,e){if(yf(n)){let r=N(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let s=i;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{N(r)}}}var fn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(fn||{});var Rl;function Dx(){if(Rl===void 0&&(Rl=null,Yo.trustedTypes))try{Rl=Yo.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Rl}function tb(t){return Dx()?.createScriptURL(t)||t}var Hl=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${dl})`}};function ys(t){return t instanceof Hl?t.changingThisBreaksApplicationSecurity:t}function Rh(t,n){let e=Xb(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${dl})`)}return e===n}function Xb(t){return t instanceof Hl&&t.getTypeName()||null}var wx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Jb(t){return t=String(t),t.match(wx)?t:"unsafe:"+t}function Cx(t,n){return t.createText(n)}function Ex(t,n,e){t.setValue(n,e)}function ey(t,n,e){return t.createElement(n,e)}function Ul(t,n,e,r,i){t.insertBefore(n,e,r,i)}function ty(t,n,e){t.appendChild(n,e)}function nb(t,n,e,r,i){r!==null?Ul(t,n,e,r,i):ty(t,n,e)}function ny(t,n,e,r){t.removeChild(null,n,e,r)}function xx(t,n,e){t.setAttribute(n,"style",e)}function Ix(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function ry(t,n,e){let{mergedAttrs:r,classes:i,styles:o}=e;r!==null&&ex(t,n,r),i!==null&&Ix(t,n,i),o!==null&&xx(t,n,o)}var nc=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(nc||{});function pr(t){let n=oy();return n?n.sanitize(nc.URL,t)||"":Rh(t,"URL")?ys(t):Jb(Zr(t))}function iy(t){let n=oy();if(n)return tb(n.sanitize(nc.RESOURCE_URL,t)||"");if(Rh(t,"ResourceURL"))return tb(ys(t));throw new E(904,!1)}var Sx={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Mx(t,n){return Sx[t]?.[n]===!0?iy:pr}function kh(t,n,e){return Mx(n,e)(t)}function oy(){let t=G();return t&&t[sn].sanitizer}function sy(t){return t instanceof Function?t():t}function Tx(t,n,e){let r=t.length;for(;;){let i=t.indexOf(n,e);if(i===-1)return i;if(i===0||t.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||t.charCodeAt(i+o)<=32)return i}e=i+1}}var ay="ng-template";function Ax(t,n,e,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&Tx(n[i+1].toLowerCase(),e,0)!==-1)return!0}else if(Nh(t))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Nh(t){return t.type===4&&t.value!==ay}function Rx(t,n,e){let r=t.type===4&&!e?ay:t.value;return n===r}function kx(t,n,e){let r=4,i=t.attrs,o=i!==null?Fx(i):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!cn(r)&&!cn(l))return!1;if(s&&cn(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!Rx(t,l,e)||l===""&&n.length===1){if(cn(r))return!1;s=!0}}else if(r&8){if(i===null||!Ax(t,i,l,e)){if(cn(r))return!1;s=!0}}else{let c=n[++a],d=Nx(l,i,Nh(t),e);if(d===-1){if(cn(r))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(cn(r))return!1;s=!0}}}}return cn(r)||s}function cn(t){return(t&1)===0}function Nx(t,n,e,r){if(n===null)return-1;let i=0;if(r||!e){let o=!1;for(;i<n.length;){let s=n[i];if(s===t)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++i];for(;typeof a=="string";)a=n[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return Px(n,t)}function ly(t,n,e=!1){for(let r=0;r<n.length;r++)if(kx(t,n[r],e))return!0;return!1}function Ox(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function Fx(t){for(let n=0;n<t.length;n++){let e=t[n];if(Tb(e))return n}return t.length}function Px(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let r=t[e];if(typeof r=="number")return-1;if(r===n)return e;e++}return-1}function Lx(t,n){e:for(let e=0;e<n.length;e++){let r=n[e];if(t.length===r.length){for(let i=0;i<t.length;i++)if(t[i]!==r[i])continue e;return!0}}return!1}function rb(t,n){return t?":not("+n.trim()+")":n}function Vx(t){let n=t[0],e=1,r=2,i="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(r&2){let a=t[++e];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!cn(s)&&(n+=rb(o,i),i=""),r=s,o=o||!cn(r);e++}return i!==""&&(n+=rb(o,i)),n}function jx(t){return t.map(Vx).join(",")}function Bx(t){let n=[],e=[],r=1,i=2;for(;r<t.length;){let o=t[r];if(typeof o=="string")i===2?o!==""&&n.push(o,t[++r]):i===8&&e.push(o);else{if(!cn(i))break;i=o}r++}return e.length&&n.push(1,...e),n}var _t={};function Oh(t,n,e,r,i,o,s,a,l,c,d){let f=Le+r,h=f+i,p=Hx(f,h),m=typeof c=="function"?c():c;return p[V]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:d}}function Hx(t,n){let e=[];for(let r=0;r<n;r++)e.push(r<t?null:_t);return e}function Ux(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Oh(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Fh(t,n,e,r,i,o,s,a,l,c,d){let f=n.blueprint.slice();return f[on]=i,f[$]=r|4|128|8|64|1024,(c!==null||t&&t[$]&2048)&&(f[$]|=2048),Df(f),f[$e]=f[Xr]=t,f[Pe]=e,f[sn]=s||t&&t[sn],f[Ae]=a||t&&t[Ae],f[Un]=l||t&&t[Un]||null,f[vt]=o,f[zn]=px(),f[Kr]=d,f[vf]=c,f[bt]=n.type==2?t[bt]:f,f}function zx(t,n,e){let r=qt(n,t),i=Ux(e),o=t[sn].rendererFactory,s=Ph(t,Fh(t,i,null,cy(e),r,n,null,o.createRenderer(r,e),null,null,null));return t[n.index]=s}function cy(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function dy(t,n,e,r){if(e===0)return-1;let i=n.length;for(let o=0;o<e;o++)n.push(r),t.blueprint.push(r),t.data.push(null);return i}function Ph(t,n){return t[Bi]?t[gf][Wt]=n:t[Bi]=n,t[gf]=n,n}function D(t=1){uy(Oe(),G(),Tn()+t,!1)}function uy(t,n,e,r){if(!r)if((n[$]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Nl(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Ol(n,o,0,e)}fr(e)}var rc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(rc||{});function oh(t,n,e,r){let i=N(null);try{let[o,s,a]=t.inputs[e],l=null;(s&rc.SignalBased)!==0&&(l=n[o][Fe]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(n,r)),t.setInput!==null?t.setInput(n,l,r,e,o):Cb(n,l,o,r)}finally{N(i)}}var hn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(hn||{}),$x;function Lh(t,n){return $x(t,n)}var xH=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var sh=new WeakMap,as=new WeakSet;function Wx(t,n){let e=sh.get(t);if(!e||e.length===0)return;let r=n.parentNode,i=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),as.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(i&&s===i||a&&r&&a!==r)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function Gx(t,n){let e=sh.get(t);e?e.includes(n)||e.push(n):sh.set(t,[n])}var si=new Set,ic=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(ic||{}),pn=new v(""),ib=new Set;function mr(t){ib.has(t)||(ib.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var oc=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Vh=[0,1,2,3],jh=(()=>{class t{ngZone=u(M);scheduler=u(xn);errorHandler=u(rn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(pn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&_e(pe.AfterRenderHooksStart),this.executing=!0;for(let r of Vh)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&_e(pe.AfterRenderHooksEnd)}register(e){let{view:r}=e;r!==void 0?((r[ei]??=[]).push(e),ri(r),r[$]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,r){return r?r.run(ic.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),us=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,r,i,o,s=null){this.impl=n,this.hooks=e,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ei];n&&(this.view[ei]=n.filter(e=>e!==this))}};function qe(t,n){let e=n?.injector??u(ne);return mr("NgAfterNextRender"),Zx(t,e,n,!0)}function qx(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function Zx(t,n,e,r){let i=n.get(oc);i.impl??=n.get(jh);let o=n.get(pn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(yt):null,a=n.get(zi,null,{optional:!0}),l=new us(i.impl,qx(t),a?.view,r,s,o?.snapshot(null));return i.impl.register(l),l}var fy=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(ge)})});function hy(t,n,e){let r=t.get(fy);if(Array.isArray(n))for(let i of n)r.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);else r.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(t)}function Yx(t,n){let e=t.get(fy);if(n.detachedLeaveAnimationFns){for(let r of n.detachedLeaveAnimationFns)e.queue.delete(r);n.detachedLeaveAnimationFns=void 0}}function Qx(t,n){for(let[e,r]of n)hy(t,r.animateFns)}function ob(t,n,e,r){let i=t?.[dr]?.enter;n!==null&&i&&i.has(e.index)&&Qx(r,i)}function $i(t,n,e,r,i,o,s,a){if(i!=null){let l,c=!1;an(i)?l=i:$n(i)&&(c=!0,i=i[on]);let d=Gt(i);t===0&&r!==null?(ob(a,r,o,e),s==null?ty(n,r,d):Ul(n,r,d,s||null,!0)):t===1&&r!==null?(ob(a,r,o,e),Ul(n,r,d,s||null,!0),Wx(o,d)):t===2?(a?.[dr]?.leave?.has(o.index)&&Gx(o,d),as.delete(d),sb(a,o,e,f=>{if(as.has(d)){as.delete(d);return}ny(n,d,c,f)})):t===3&&(as.delete(d),sb(a,o,e,()=>{n.destroyNode(d)})),l!=null&&aI(n,t,e,l,o,r,s)}}function Kx(t,n){py(t,n),n[on]=null,n[vt]=null}function Xx(t,n,e,r,i,o){r[on]=i,r[vt]=n,ac(t,r,e,1,i,o)}function py(t,n){n[sn].changeDetectionScheduler?.notify(9),ac(t,n,n[Ae],2,null,null)}function Jx(t){let n=t[Bi];if(!n)return Wf(t[V],t);for(;n;){let e=null;if($n(n))e=n[Bi];else{let r=n[Ne];r&&(e=r)}if(!e){for(;n&&!n[Wt]&&n!==t;)$n(n)&&Wf(n[V],n),n=n[$e];n===null&&(n=t),$n(n)&&Wf(n[V],n),e=n&&n[Wt]}n=e}}function Bh(t,n){let e=t[ti],r=e.indexOf(n);e.splice(r,1)}function sc(t,n){if(ni(n))return;let e=n[Ae];e.destroyNode&&ac(t,n,e,3,null,null),Jx(n)}function Wf(t,n){if(ni(n))return;let e=N(null);try{n[$]&=-129,n[$]|=256,n[At]&&ir(n[At]),nI(t,n),tI(t,n),n[V].type===1&&n[Ae].destroy();let r=n[cr];if(r!==null&&an(n[$e])){r!==n[$e]&&Bh(r,n);let i=n[In];i!==null&&i.detachView(t)}rh(n)}finally{N(e)}}function sb(t,n,e,r){let i=t?.[dr];if(i==null||i.leave==null||!i.leave.has(n.index))return r(!1);t&&si.add(t[zn]),hy(e,()=>{if(i.leave&&i.leave.has(n.index)){let s=i.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}i.detachedLeaveAnimationFns=void 0}i.running=Promise.allSettled(a),eI(t,r)}else t&&si.delete(t[zn]),r(!1)},i)}function eI(t,n){let e=t[dr]?.running;if(e){e.then(()=>{t[dr].running=void 0,si.delete(t[zn]),n(!0)});return}n(!1)}function tI(t,n){let e=t.cleanup,r=n[ji];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[e[s+1]];e[s].call(a)}r!==null&&(n[ji]=null);let i=n[Bn];if(i!==null){n[Bn]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=n[or];if(o!==null){n[or]=null;for(let s of o)s.destroy()}}function nI(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let r=0;r<e.length;r+=2){let i=n[e[r]];if(!(i instanceof oi)){let o=e[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];_e(pe.LifecycleHookStart,a,l);try{l.call(a)}finally{_e(pe.LifecycleHookEnd,a,l)}}else{_e(pe.LifecycleHookStart,i,o);try{o.call(i)}finally{_e(pe.LifecycleHookEnd,i,o)}}}}}function my(t,n,e){return rI(t,n.parent,e)}function rI(t,n,e){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return e[on];if(Sn(r)){let{encapsulation:i}=t.data[r.directiveStart+r.componentOffset];if(i===fn.None||i===fn.Emulated)return null}return qt(r,e)}function gy(t,n,e){return oI(t,n,e)}function iI(t,n,e){return t.type&40?qt(t,e):null}var oI=iI,ab;function Hh(t,n,e,r){let i=my(t,r,n),o=n[Ae],s=r.parent||n[vt],a=gy(s,r,n);if(i!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)nb(o,i,e[l],a,!1);else nb(o,i,e,a,!1);ab!==void 0&&ab(o,r,n,e,i)}function ls(t,n){if(n!==null){let e=n.type;if(e&3)return qt(n,t);if(e&4)return ah(-1,t[n.index]);if(e&8){let r=n.child;if(r!==null)return ls(t,r);{let i=t[n.index];return an(i)?ah(-1,i):Gt(i)}}else{if(e&128)return ls(t,n.next);if(e&32)return Lh(n,t)()||Gt(t[n.index]);{let r=vy(t,n);if(r!==null){if(Array.isArray(r))return r[0];let i=sr(t[bt]);return ls(i,r)}else return ls(t,n.next)}}}return null}function vy(t,n){if(n!==null){let r=t[bt][vt],i=n.projection;return r.projection[i]}return null}function ah(t,n){let e=Ne+t+1;if(e<n.length){let r=n[e],i=r[V].firstChild;if(i!==null)return ls(r,i)}return n[ur]}function Uh(t,n,e,r,i,o,s){for(;e!=null;){let a=r[Un];if(e.type===128){e=e.next;continue}let l=r[e.index],c=e.type;if(s&&n===0&&(l&&qi(Gt(l),r),e.flags|=2),!tc(e))if(c&8)Uh(t,n,e.child,r,i,o,!1),$i(n,t,a,i,l,e,o,r);else if(c&32){let d=Lh(e,r),f;for(;f=d();)$i(n,t,a,i,f,e,o,r);$i(n,t,a,i,l,e,o,r)}else c&16?by(t,n,r,e,i,o):$i(n,t,a,i,l,e,o,r);e=s?e.projectionNext:e.next}}function ac(t,n,e,r,i,o){Uh(e,r,t.firstChild,n,i,o,!1)}function sI(t,n,e){let r=n[Ae],i=my(t,e,n),o=e.parent||n[vt],s=gy(o,e,n);by(r,0,n,e,i,s)}function by(t,n,e,r,i,o){let s=e[bt],l=s[vt].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];$i(n,t,e[Un],i,d,r,o,e)}else{let c=l,d=s[$e];Bb(r)&&(c.flags|=128),Uh(t,n,c,d,i,o,!0)}}function aI(t,n,e,r,i,o,s){let a=r[ur],l=Gt(r);a!==l&&$i(n,t,e,o,a,i,s);for(let c=Ne;c<r.length;c++){let d=r[c];ac(d[V],d,t,n,o,a)}}function lI(t,n,e,r,i){if(n)i?t.addClass(e,r):t.removeClass(e,r);else{let o=r.indexOf("-")===-1?void 0:hn.DashCase;i==null?t.removeStyle(e,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=hn.Important),t.setStyle(e,r,i,o))}}function yy(t,n,e,r,i){let o=Tn(),s=r&2;try{fr(-1),s&&n.length>Le&&uy(t,n,Le,!1);let a=s?pe.TemplateUpdateStart:pe.TemplateCreateStart;_e(a,i,e),e(r,i)}finally{fr(o);let a=s?pe.TemplateUpdateEnd:pe.TemplateCreateEnd;_e(a,i,e)}}function zh(t,n,e){pI(t,n,e),(e.flags&64)===64&&mI(t,n,e)}function lc(t,n,e=qt){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?e(n,t):t[s];t[i++]=a}}}function cI(t,n,e,r){let o=r.get(Zb,qb)||e===fn.ShadowDom||e===fn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return dI(s),s}function dI(t){uI(t)}var uI=()=>null;function fI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function hI(t,n,e,r,i,o){let s=n[V];if(cc(t,s,n,e,r)){Sn(t)&&Dy(n,t.index);return}t.type&3&&(e=fI(e)),_y(t,n,e,r,i,o)}function _y(t,n,e,r,i,o){if(t.type&3){let s=qt(t,n);r=o!=null?o(r,t.value||"",e):r,i.setProperty(s,e,r)}else t.type&12}function Dy(t,n){let e=Zt(n,t);e[$]&16||(e[$]|=64)}function pI(t,n,e){let r=e.directiveStart,i=e.directiveEnd;Sn(e)&&zx(n,e,t.data[r+e.componentOffset]),t.firstCreatePass||Bl(e,n);let o=e.initialInputs;for(let s=r;s<i;s++){let a=t.data[s],l=ds(n,t,s,e);if(qi(l,n),o!==null&&bI(n,s-r,l,a,e,o),Mn(a)){let c=Zt(e.index,n);c[Pe]=ds(n,t,s,e)}}}function mI(t,n,e){let r=e.directiveStart,i=e.directiveEnd,o=e.index,s=Nv();try{fr(o);for(let a=r;a<i;a++){let l=t.data[a],c=n[a];Cl(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&gI(l,c)}}finally{fr(-1),Cl(s)}}function gI(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function wy(t,n){let e=t.directiveRegistry,r=null;if(e)for(let i=0;i<e.length;i++){let o=e[i];ly(n,o.selectors,!1)&&(r??=[],Mn(o)?r.unshift(o):r.push(o))}return r}function vI(t,n,e,r,i,o){let s=qt(t,n);Cy(n[Ae],s,o,t.value,e,r,i)}function Cy(t,n,e,r,i,o,s){if(o==null)t.removeAttribute(n,i,e);else{let a=s==null?Zr(o):s(o,r||"",i);t.setAttribute(n,i,a,e)}}function bI(t,n,e,r,i,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];oh(r,e,l,c)}}function Ey(t,n,e,r,i){let o=Le+e,s=n[V],a=i(s,n,t,r,e);n[o]=a,Ui(t,!0);let l=t.type===2;return l?(ry(n[Ae],a,t),(Ev()===0||ts(t))&&qi(a,n),xv()):qi(a,n),Sl()&&(!l||!tc(t))&&Hh(s,n,a,t),t}function xy(t){let n=t;return kf()?Nf():(n=n.parent,Ui(n,!1)),n}function yI(t,n){let e=t[Un];if(!e)return;let r;try{r=e.get(Ot,null)}catch{r=null}r?.(n)}function cc(t,n,e,r,i){let o=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];oh(f,e[c],d,i),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];oh(d,c,r,i),a=!0}return a}function _I(t,n){let e=Zt(n,t),r=e[V];DI(r,e);let i=e[on];i!==null&&e[Kr]===null&&(e[Kr]=Yb(i,e[Un])),_e(pe.ComponentStart);try{$h(r,e,e[Pe])}finally{_e(pe.ComponentEnd,e[Pe])}}function DI(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function $h(t,n,e){xl(n);try{let r=t.viewQuery;r!==null&&ih(1,r,e);let i=t.template;i!==null&&yy(t,n,i,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[In]?.finishViewCreation(t),t.staticContentQueries&&Qb(t,n),t.staticViewQueries&&ih(2,t.viewQuery,e);let o=t.components;o!==null&&wI(n,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{n[$]&=-5,Il()}}function wI(t,n){for(let e=0;e<n.length;e++)_I(t,n[e])}function _s(t,n,e,r){let i=N(null);try{let o=n.tView,a=t[$]&4096?4096:16,l=Fh(t,o,e,a,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=t[n.index];l[cr]=c;let d=t[In];return d!==null&&(l[In]=d.createEmbeddedView(o)),$h(o,l,e),l}finally{N(i)}}function Zi(t,n){return!n||n.firstChild===null||Bb(t)}function fs(t,n,e,r,i=!1){for(;e!==null;){if(e.type===128){e=i?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&r.push(Gt(o)),an(o)&&Iy(o,r);let s=e.type;if(s&8)fs(t,n,e.child,r);else if(s&32){let a=Lh(e,n),l;for(;l=a();)r.push(l)}else if(s&16){let a=vy(n,e);if(Array.isArray(a))r.push(...a);else{let l=sr(n[bt]);fs(l[V],l,a,r,!0)}}e=i?e.projectionNext:e.next}return r}function Iy(t,n){for(let e=Ne;e<t.length;e++){let r=t[e],i=r[V].firstChild;i!==null&&fs(r[V],r,i,n)}t[ur]!==t[on]&&n.push(t[ur])}function Sy(t){if(t[ei]!==null){for(let n of t[ei])n.impl.addSequence(n);t[ei].length=0}}var My=[];function CI(t){return t[At]??EI(t)}function EI(t){let n=My.pop()??Object.create(II);return n.lView=t,n}function xI(t){t.lView[At]!==t&&(t.lView=null,My.push(t))}var II=Z(g({},tr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{ri(t.lView)},consumerOnSignalRead(){this.lView[At]=this}});function SI(t){let n=t[At]??Object.create(MI);return n.lView=t,n}var MI=Z(g({},tr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=sr(t.lView);for(;n&&!Ty(n[V]);)n=sr(n);n&&wf(n)},consumerOnSignalRead(){this.lView[At]=this}});function Ty(t){return t.type!==2}function Ay(t){if(t[or]===null)return;let n=!0;for(;n;){let e=!1;for(let r of t[or])r.dirty&&(e=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));n=e&&!!(t[$]&8192)}}var TI=100;function Ry(t,n=0){let r=t[sn].rendererFactory,i=!1;i||r.begin?.();try{AI(t,n)}finally{i||r.end?.()}}function AI(t,n){let e=Of();try{Go(!0),lh(t,n);let r=0;for(;ns(t);){if(r===TI)throw new E(103,!1);r++,lh(t,1)}}finally{Go(e)}}function RI(t,n,e,r){if(ni(n))return;let i=n[$],o=!1,s=!1;xl(n);let a=!0,l=null,c=null;o||(Ty(t)?(c=CI(n),l=Ln(c)):Ca()===null?(a=!1,c=SI(n),l=Ln(c)):n[At]&&(ir(n[At]),n[At]=null));try{Df(n),Av(t.bindingStartIndex),e!==null&&yy(t,n,e,2,r);let d=(i&3)===3;if(!o)if(d){let p=t.preOrderCheckHooks;p!==null&&Nl(n,p,null)}else{let p=t.preOrderHooks;p!==null&&Ol(n,p,0,null),zf(n,0)}if(s||kI(n),Ay(n),ky(n,0),t.contentQueries!==null&&Qb(t,n),!o)if(d){let p=t.contentCheckHooks;p!==null&&Nl(n,p)}else{let p=t.contentHooks;p!==null&&Ol(n,p,1),zf(n,1)}OI(t,n);let f=t.components;f!==null&&Oy(n,f,0);let h=t.viewQuery;if(h!==null&&ih(2,h,r),!o)if(d){let p=t.viewCheckHooks;p!==null&&Nl(n,p)}else{let p=t.viewHooks;p!==null&&Ol(n,p,2),zf(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[bl]){for(let p of n[bl])p();n[bl]=null}o||(Sy(n),n[$]&=-73)}catch(d){throw o||ri(n),d}finally{c!==null&&(rr(c,l),a&&xI(c)),Il()}}function ky(t,n){for(let e=Ub(t);e!==null;e=zb(e))for(let r=Ne;r<e.length;r++){let i=e[r];Ny(i,n)}}function kI(t){for(let n=Ub(t);n!==null;n=zb(n)){if(!(n[$]&2))continue;let e=n[ti];for(let r=0;r<e.length;r++){let i=e[r];wf(i)}}}function NI(t,n,e){_e(pe.ComponentStart);let r=Zt(n,t);try{Ny(r,e)}finally{_e(pe.ComponentEnd,r[Pe])}}function Ny(t,n){_l(t)&&lh(t,n)}function lh(t,n){let r=t[V],i=t[$],o=t[At],s=!!(n===0&&i&16);if(s||=!!(i&64&&n===0),s||=!!(i&1024),s||=!!(o?.dirty&&Ii(o)),s||=!1,o&&(o.dirty=!1),t[$]&=-9217,s)RI(r,t,r.template,t[Pe]);else if(i&8192){let a=N(null);try{Ay(t),ky(t,1);let l=r.components;l!==null&&Oy(t,l,1),Sy(t)}finally{N(a)}}}function Oy(t,n,e){for(let r=0;r<n.length;r++)NI(t,n[r],e)}function OI(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let r=0;r<e.length;r++){let i=e[r];if(i<0)fr(~i);else{let o=i,s=e[++r],a=e[++r];kv(s,o);let l=n[o];_e(pe.HostBindingsUpdateStart,l);try{a(2,l)}finally{_e(pe.HostBindingsUpdateEnd,l)}}}}finally{fr(-1)}}function Wh(t,n){let e=Of()?64:1088;for(t[sn].changeDetectionScheduler?.notify(n);t;){t[$]|=e;let r=sr(t);if(Hi(t)&&!r)return t;t=r}return null}function Fy(t,n,e,r){return[t,!0,0,n,null,r,null,e,null,null]}function Py(t,n){let e=Ne+n;if(e<t.length)return t[e]}function Ds(t,n,e,r=!0){let i=n[V];if(FI(i,n,t,e),r){let s=ah(e,t),a=n[Ae],l=a.parentNode(t[ur]);l!==null&&Xx(i,t[vt],a,n,l,s)}let o=n[Kr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Ly(t,n){let e=hs(t,n);return e!==void 0&&sc(e[V],e),e}function hs(t,n){if(t.length<=Ne)return;let e=Ne+n,r=t[e];if(r){let i=r[cr];i!==null&&i!==t&&Bh(i,r),n>0&&(t[e-1][Wt]=r[Wt]);let o=Xo(t,Ne+n);Kx(r[V],r);let s=o[In];s!==null&&s.detachView(o[V]),r[$e]=null,r[Wt]=null,r[$]&=-129}return r}function FI(t,n,e,r){let i=Ne+r,o=e.length;r>0&&(e[i-1][Wt]=n),r<o-Ne?(n[Wt]=e[i],df(e,Ne+r,n)):(e.push(n),n[Wt]=null),n[$e]=e;let s=n[cr];s!==null&&e!==s&&Vy(s,n);let a=n[In];a!==null&&a.insertView(t),Dl(n),n[$]|=128}function Vy(t,n){let e=t[ti],r=n[$e];if($n(r))t[$]|=2;else{let i=r[$e][bt];n[bt]!==i&&(t[$]|=2)}e===null?t[ti]=[n]:e.push(n)}var hr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[V];return fs(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Pe]}set context(n){this._lView[Pe]=n}get destroyed(){return ni(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[$e];if(an(n)){let e=n[es],r=e?e.indexOf(this):-1;r>-1&&(hs(n,r),Xo(e,r))}this._attachedToViewContainer=!1}sc(this._lView[V],this._lView)}onDestroy(n){Cf(this._lView,n)}markForCheck(){Wh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[$]&=-129}reattach(){Dl(this._lView),this._lView[$]|=128}detectChanges(){this._lView[$]|=1024,Ry(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new E(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Hi(this._lView),e=this._lView[cr];e!==null&&!n&&Bh(e,this._lView),py(this._lView[V],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new E(902,!1);this._appRef=n;let e=Hi(this._lView),r=this._lView[cr];r!==null&&!e&&Vy(r,this._lView),Dl(this._lView)}};var ut=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=PI;constructor(e,r,i){this._declarationLView=e,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,i){let o=_s(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:r,dehydratedView:i});return new hr(o)}}return t})();function PI(){return dc(dt(),G())}function dc(t,n){return t.type&4?new ut(n,t,Ki(t,n)):null}function Ji(t,n,e,r,i){let o=t.data[n];if(o===null)o=LI(t,n,e,r,i),Rv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=r,o.attrs=i;let s=Iv();o.injectorIndex=s===null?-1:s.injectorIndex}return Ui(o,!0),o}function LI(t,n,e,r,i){let o=Rf(),s=kf(),a=s?o:o&&o.parent,l=t.data[n]=jI(t,a,e,n,r,i);return VI(t,l,o,s),l}function VI(t,n,e,r){t.firstChild===null&&(t.firstChild=n),e!==null&&(r?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function jI(t,n,e,r,i,o){let s=n?n.injectorIndex:-1,a=0;return Mf()&&(a|=128),{type:e,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function BI(t){let n=t[bf]??[],r=t[$e][Ae],i=[];for(let o of n)o.data[Gb]!==void 0?i.push(o):HI(o,r);t[bf]=i}function HI(t,n){let e=0,r=t.firstChild;if(r){let i=t.data[Wb];for(;e<i;){let o=r.nextSibling;ny(n,r,!1),r=o,e++}}}var UI=()=>null,zI=()=>null;function zl(t,n){return UI(t,n)}function jy(t,n,e){return zI(t,n,e)}var By=class{},uc=class{},ch=class{resolveComponentFactory(n){throw new E(917,!1)}},ws=class{static NULL=new ch},Ue=class{},Me=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>$I()}return t})();function $I(){let t=G(),n=dt(),e=Zt(n.index,t);return($n(e)?e:t)[Ae]}var Hy=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var Pl={},dh=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,r){let i=this.injector.get(n,Pl,r);return i!==Pl||e===Pl?i:this.parentInjector.get(n,e,r)}};function $l(t,n,e){let r=e?t.styles:null,i=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)i=ul(i,a);else if(o==2){let l=a,c=n[++s];r=ul(r,l+": "+c+";")}}e?t.styles=r:t.stylesWithoutHost=r,e?t.classes=i:t.classesWithoutHost=i}function U(t,n=0){let e=G();if(e===null)return P(t,n);let r=dt();return Pb(r,e,it(t),n)}function Uy(t,n,e,r,i){let o=r===null?null:{"":-1},s=i(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}qI(t,n,e,a,o,l,c)}o!==null&&r!==null&&WI(e,r,o)}function WI(t,n,e){let r=t.localNames=[];for(let i=0;i<n.length;i+=2){let o=e[n[i+1]];if(o==null)throw new E(-301,!1);r.push(n[i],o)}}function GI(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function qI(t,n,e,r,i,o,s){let a=r.length,l=null;for(let h=0;h<a;h++){let p=r[h];l===null&&Mn(p)&&(l=p,GI(t,e,h)),th(Bl(e,n),t,p.type)}JI(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let p=r[h];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,f=dy(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=r[h];if(e.mergedAttrs=Gi(e.mergedAttrs,p.hostAttrs),YI(t,e,n,f,p),XI(f,p,i),s!==null&&s.has(p)){let[w,I]=s.get(p);e.directiveToIndex.set(p.type,[f,w+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let m=p.type.prototype;!c&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}ZI(t,e,o)}function ZI(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=t.data[r];if(e===null||!e.has(i))lb(0,n,i,r),lb(1,n,i,r),db(n,r,!1);else{let o=e.get(i);cb(0,n,o,r),cb(1,n,o,r),db(n,r,!0)}}}function lb(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(r),zy(n,o)}}function cb(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),zy(n,s)}}function zy(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function db(t,n,e){let{attrs:r,inputs:i,hostDirectiveInputs:o}=t;if(r===null||!e&&i===null||e&&o===null||Nh(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===n){s??=[],s.push(l,r[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function YI(t,n,e,r,i){t.data[r]=i;let o=i.factory||(i.factory=$r(i.type,!0)),s=new oi(o,Mn(i),U,null);t.blueprint[r]=s,e[r]=s,QI(t,n,r,dy(t,e,i.hostVars,_t),i)}function QI(t,n,e,r,i){let o=i.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;KI(s)!=a&&s.push(a),s.push(e,r,o)}}function KI(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function XI(t,n,e){if(e){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)e[n.exportAs[r]]=t;Mn(n)&&(e[""]=t)}}function JI(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function $y(t,n,e,r,i,o,s,a){let l=n[V],c=l.consts,d=Rt(c,s),f=Ji(l,t,e,r,d);return o&&Uy(l,n,f,Rt(c,a),i),f.mergedAttrs=Gi(f.mergedAttrs,f.attrs),f.attrs!==null&&$l(f,f.attrs,!1),f.mergedAttrs!==null&&$l(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Wy(t,n){Sb(t,n),yf(n)&&t.queries.elementEnd(n)}function eS(t,n,e,r,i,o){let s=n.consts,a=Rt(s,i),l=Ji(n,t,e,r,a);if(l.mergedAttrs=Gi(l.mergedAttrs,l.attrs),o!=null){let c=Rt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&$l(l,l.attrs,!1),l.mergedAttrs!==null&&$l(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Gh(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function tS(t,n,e){return t[n]=e}function Ft(t,n,e){if(e===_t)return!1;let r=t[n];return Object.is(r,e)?!1:(t[n]=e,!0)}function nS(t,n,e,r){let i=Ft(t,n,e);return Ft(t,n+1,r)||i}function Gf(t,n,e){return function r(i){let o=Sn(t)?Zt(t.index,n):n;Wh(o,5);let s=n[Pe],a=ub(n,s,e,i),l=r.__ngNextListenerFn__;for(;l;)a=ub(n,s,l,i)&&a,l=l.__ngNextListenerFn__;return a}}function ub(t,n,e,r){let i=N(null);try{return _e(pe.OutputStart,n,e),e(r)!==!1}catch(o){return yI(t,o),!1}finally{_e(pe.OutputEnd,n,e),N(i)}}function rS(t,n,e,r,i,o,s,a){let l=ts(t),c=!1,d=null;if(!r&&l&&(d=oS(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=qt(t,e),h=r?r(f):f;yx(e,h,o,a);let p=i.listen(h,o,a);if(!iS(o)){let m=r?w=>r(Gt(w[t.index])):t.index;Gy(m,n,e,o,a,p,!1)}}return c}function iS(t){return t.startsWith("animation")||t.startsWith("transition")}function oS(t,n,e,r){let i=t.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===e&&i[o+1]===r){let a=n[ji],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Gy(t,n,e,r,i,o,s){let a=n.firstCreatePass?xf(n):null,l=Ef(e),c=l.length;l.push(i,o),a&&a.push(r,t,c,(c+1)*(s?-1:1))}function fb(t,n,e,r,i,o){let s=n[e],a=n[V],c=a.data[e].outputs[r],f=s[c].subscribe(o);Gy(t.index,a,n,i,o,f,!0)}var uh=Symbol("BINDING");function qy(t){return t.debugInfo?.className||t.type.name||null}var Wl=class extends ws{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Hn(n);return new ai(e,this.ngModule)}};function sS(t){return Object.keys(t).map(n=>{let[e,r,i]=t[n],o={propName:e,templateName:n,isSignal:(r&rc.SignalBased)!==0};return i&&(o.transform=i),o})}function aS(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function lS(t,n,e){let r=n instanceof ge?n:n?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new dh(e,r):e}function cS(t){let n=t.get(Ue,null);if(n===null)throw new E(407,!1);let e=t.get(Hy,null),r=t.get(xn,null),i=t.get(pn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function dS(t,n){let e=Zy(t);return ey(n,e,e==="svg"?gv:e==="math"?vv:null)}function Zy(t){return(t.selectors[0][0]||"div").toLowerCase()}var ai=class extends uc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=sS(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=aS(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=jx(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,r,i,o,s){_e(pe.DynamicComponentStart);let a=N(null);try{let l=this.componentDef,c=lS(l,i||this.ngModule,n),d=cS(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(qy(l),()=>this.createComponentRef(d,c,e,r,o,s)):this.createComponentRef(d,c,e,r,o,s)}finally{N(a)}}createComponentRef(n,e,r,i,o,s){let a=this.componentDef,l=uS(i,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=i?cI(c,i,a.encapsulation,e):dS(a,c),f=s?.some(hb)||o?.some(m=>typeof m!="function"&&m.bindings.some(hb)),h=Fh(null,l,null,512|cy(a),null,null,n,c,e,null,Yb(d,e,!0));h[Le]=d,xl(h);let p=null;try{let m=$y(Le,h,2,"#host",()=>l.directiveRegistry,!0,0);ry(c,d,m),qi(d,h),zh(l,h,m),Kb(l,m,h),Wy(l,m),r!==void 0&&hS(m,this.ngContentSelectors,r),p=Zt(m.index,h),h[Pe]=p[Pe],$h(l,h,null)}catch(m){throw p!==null&&rh(p),rh(h),m}finally{_e(pe.DynamicComponentEnd),Il()}return new Gl(this.componentType,h,!!f)}};function uS(t,n,e,r){let i=t?["ng-version","21.2.10"]:Bx(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[uh].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let h of f.bindings){a+=h[uh].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[n];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,h=af(f);l.push(h)}return Oh(0,null,fS(o,s),1,a,l,null,null,null,[i],null)}function fS(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let r of t)r.create();if(e&2&&n)for(let r of n)r.update()}}function hb(t){let n=t[uh].kind;return n==="input"||n==="twoWay"}var Gl=class extends By{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,r){super(),this._rootLView=e,this._hasInputBindings=r,this._tNode=yl(e[V],Le),this.location=Ki(this._tNode,e),this.instance=Zt(this._tNode.index,e)[Pe],this.hostView=this.changeDetectorRef=new hr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let i=this._rootLView,o=cc(r,i[V],i,n,e);this.previousInputValues.set(n,e);let s=Zt(r.index,i);Wh(s,1)}get injector(){return new ii(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function hS(t,n,e){let r=t.projection=[];for(let i=0;i<n.length;i++){let o=e[i];r.push(o!=null&&o.length?Array.from(o):null)}}var ot=(()=>{class t{static __NG_ELEMENT_ID__=pS}return t})();function pS(){let t=dt();return Yy(t,G())}var fh=class t extends ot{_lContainer;_hostTNode;_hostLView;constructor(n,e,r){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=r}get element(){return Ki(this._hostTNode,this._hostLView)}get injector(){return new ii(this._hostTNode,this._hostLView)}get parentInjector(){let n=Mh(this._hostTNode,this._hostLView);if(Ab(n)){let e=jl(n,this._hostLView),r=Vl(n),i=e[V].data[r+8];return new ii(i,e)}else return new ii(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=pb(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Ne}createEmbeddedView(n,e,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=zl(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,i,Zi(this._hostTNode,s)),a}createComponent(n,e,r,i,o,s,a){let l=n&&!G0(n),c;if(l)c=e;else{let I=e||{};c=I.index,r=I.injector,i=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,s=I.directives,a=I.bindings}let d=l?n:new ai(Hn(n)),f=r||this.parentInjector;if(!o&&d.ngModule==null){let T=(l?f:this.parentInjector).get(ge,null);T&&(o=T)}let h=Hn(d.componentType??{}),p=zl(this._lContainer,h?.id??null),m=p?.firstChild??null,w=d.create(f,i,m,o,s,a);return this.insertImpl(w.hostView,c,Zi(this._hostTNode,p)),w}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,r){let i=n._lView;if(_v(i)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=i[$e],c=new t(l,l[vt],l[$e]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Ds(s,i,o,r),n.attachToViewContainerRef(),df(qf(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=pb(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),r=hs(this._lContainer,e);r&&(Xo(qf(this._lContainer),e),sc(r[V],r))}detach(n){let e=this._adjustIndex(n,-1),r=hs(this._lContainer,e);return r&&Xo(qf(this._lContainer),e)!=null?new hr(r):null}_adjustIndex(n,e=0){return n??this.length+e}};function pb(t){return t[es]}function qf(t){return t[es]||(t[es]=[])}function Yy(t,n){let e,r=n[t.index];return an(r)?e=r:(e=Fy(r,n,null,t),n[t.index]=e,Ph(n,e)),gS(e,n,t,r),new fh(e,t,n)}function mS(t,n){let e=t[Ae],r=e.createComment(""),i=qt(n,t),o=e.parentNode(i);return Ul(e,o,r,e.nextSibling(i),!1),r}var gS=yS,vS=()=>!1;function bS(t,n,e){return vS(t,n,e)}function yS(t,n,e,r){if(t[ur])return;let i;e.type&8?i=Gt(r):i=mS(n,e),t[ur]=i}var hh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},ph=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let r=n.contentQueries!==null?n.contentQueries[0]:e.length,i=[];for(let o=0;o<r;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new t(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Zh(n,e).matches!==null&&this.queries[e].setDirty()}},ql=class{flags;read;predicate;constructor(n,e,r=null){this.flags=e,this.read=r,typeof n=="string"?this.predicate=ES(n):this.predicate=n}},mh=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let r=0;r<this.length;r++){let i=e!==null?e.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},gh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==e;)r=r.parent;return e===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,e,_S(e,o)),this.matchTNodeWithReadOption(n,e,Fl(e,n,o,!1,!1))}else r===ut?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Fl(e,n,r,!1,!1))}matchTNodeWithReadOption(n,e,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===k||i===ot||i===ut&&e.type&4)this.addMatch(e.index,-2);else{let o=Fl(e,n,i,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,r)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function _S(t,n){let e=t.localNames;if(e!==null){for(let r=0;r<e.length;r+=2)if(e[r]===n)return e[r+1]}return null}function DS(t,n){return t.type&11?Ki(t,n):t.type&4?dc(t,n):null}function wS(t,n,e,r){return e===-1?DS(n,t):e===-2?CS(t,n,r):ds(t,t[V],e,n)}function CS(t,n,e){if(e===k)return Ki(n,t);if(e===ut)return dc(n,t);if(e===ot)return Yy(n,t)}function Qy(t,n,e,r){let i=n[In].queries[r];if(i.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(wS(n,d,s[l+1],e.metadata.read))}}i.matches=a}return i.matches}function vh(t,n,e,r){let i=t.queries.getByIndex(e),o=i.matches;if(o!==null){let s=Qy(t,n,i,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=Ne;f<d.length;f++){let h=d[f];h[cr]===h[$e]&&vh(h[V],h,c,r)}if(d[ti]!==null){let f=d[ti];for(let h=0;h<f.length;h++){let p=f[h];vh(p[V],p,c,r)}}}}}return r}function qh(t,n){return t[In].queries[n].queryList}function Ky(t,n,e){let r=new un((e&4)===4);return Cv(t,n,r,r.destroy),(n[In]??=new ph).queries.push(new hh(r))-1}function Xy(t,n,e){let r=Oe();return r.firstCreatePass&&(e_(r,new ql(t,n,e),-1),(n&2)===2&&(r.staticViewQueries=!0)),Ky(r,G(),n)}function Jy(t,n,e,r){let i=Oe();if(i.firstCreatePass){let o=dt();e_(i,new ql(n,e,r),o.index),xS(i,t),(e&2)===2&&(i.staticContentQueries=!0)}return Ky(i,G(),e)}function ES(t){return t.split(",").map(n=>n.trim())}function e_(t,n,e){t.queries===null&&(t.queries=new mh),t.queries.track(new gh(n,e))}function xS(t,n){let e=t.contentQueries||(t.contentQueries=[]),r=e.length?e[e.length-1]:-1;n!==r&&e.push(t.queries.length-1,n)}function Zh(t,n){return t.queries.getByIndex(n)}function t_(t,n){let e=t[V],r=Zh(e,n);return r.crossesNgTemplate?vh(e,t,n,[]):Qy(e,t,r,n)}function n_(t,n,e){let r,i=Fo(()=>{r._dirtyCounter();let o=IS(r,t);if(n&&o===void 0)throw new E(-951,!1);return o});return r=i[Fe],r._dirtyCounter=F(0),r._flatValue=void 0,i}function Yh(t){return n_(!0,!1,t)}function Qh(t){return n_(!0,!0,t)}function r_(t,n){let e=t[Fe];e._lView=G(),e._queryIndex=n,e._queryList=qh(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(r=>r+1))}function IS(t,n){let e=t._lView,r=t._queryIndex;if(e===void 0||r===void 0||e[$]&4)return n?void 0:ct;let i=qh(e,r),o=t_(e,r);return i.reset(o,jb),n?i.first:i._changesDetected||t._flatValue===void 0?t._flatValue=i.toArray():t._flatValue}var Rn=class{},fc=class{};var Zl=class extends Rn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Wl(this);constructor(n,e,r,i=!0){super(),this.ngModuleType=n,this._parent=e;let o=sf(n);this._bootstrapComponents=sy(o.bootstrap),this._r3Injector=Lf(n,e,[{provide:Rn,useValue:this},{provide:ws,useValue:this.componentFactoryResolver},...r],Qo(n),new Set(["environment"])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Yl=class extends fc{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Zl(this.moduleType,n,[])}};var ps=class extends Rn{injector;componentFactoryResolver=new Wl(this);instance=null;constructor(n){super();let e=new Gr([...n.providers,{provide:Rn,useValue:this},{provide:ws,useValue:this.componentFactoryResolver}],n.parent||Vi(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Cs(t,n,e=null){return new ps({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var SS=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let r=hf(!1,e.type),i=r.length>0?Cs([r],this._injector,""):null;this.cachedInjectors.set(e,i)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(P(ge))})}return t})();function x(t){return gs(()=>{let n=i_(t),e=Z(g({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Th.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(SS).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||fn.Emulated,styles:t.styles||ct,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&mr("NgStandalone"),o_(e);let r=t.dependencies;return e.directiveDefs=mb(r,MS),e.pipeDefs=mb(r,tv),e.id=RS(e),e})}function MS(t){return Hn(t)||af(t)}function se(t){return gs(()=>({type:t.type,bootstrap:t.bootstrap||ct,declarations:t.declarations||ct,imports:t.imports||ct,exports:t.exports||ct,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function TS(t,n){if(t==null)return lr;let e={};for(let r in t)if(t.hasOwnProperty(r)){let i=t[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=rc.None,l=null),e[o]=[r,a,l],n[o]=s}return e}function AS(t){if(t==null)return lr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function R(t){return gs(()=>{let n=i_(t);return o_(n),n})}function i_(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||lr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||ct,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:TS(t.inputs,n),outputs:AS(t.outputs),debugInfo:null}}function o_(t){t.features?.forEach(n=>n(t))}function mb(t,n){return t?()=>{let e=typeof t=="function"?t():t,r=[];for(let i of e){let o=n(i);o!==null&&r.push(o)}return r}:null}function RS(t){let n=0,e=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function kS(t){return Object.getPrototypeOf(t.prototype).constructor}function De(t){let n=kS(t.type),e=!0,r=[t];for(;n;){let i;if(Mn(t))i=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new E(903,!1);i=n.\u0275dir}if(i){if(e){r.push(i);let s=t;s.inputs=Zf(t.inputs),s.declaredInputs=Zf(t.declaredInputs),s.outputs=Zf(t.outputs);let a=i.hostBindings;a&&LS(t,a);let l=i.viewQuery,c=i.contentQueries;if(l&&FS(t,l),c&&PS(t,c),NS(t,i),ev(t.outputs,i.outputs),Mn(i)&&i.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(i.data.animation)}}let o=i.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===De&&(e=!1)}}n=Object.getPrototypeOf(n)}OS(r)}function NS(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let r=n.inputs[e];r!==void 0&&(t.inputs[e]=r,t.declaredInputs[e]=n.declaredInputs[e])}}function OS(t){let n=0,e=null;for(let r=t.length-1;r>=0;r--){let i=t[r];i.hostVars=n+=i.hostVars,i.hostAttrs=Gi(i.hostAttrs,e=Gi(e,i.hostAttrs))}}function Zf(t){return t===lr?{}:t===ct?[]:t}function FS(t,n){let e=t.viewQuery;e?t.viewQuery=(r,i)=>{n(r,i),e(r,i)}:t.viewQuery=n}function PS(t,n){let e=t.contentQueries;e?t.contentQueries=(r,i,o)=>{n(r,i,o),e(r,i,o)}:t.contentQueries=n}function LS(t,n){let e=t.hostBindings;e?t.hostBindings=(r,i)=>{n(r,i),e(r,i)}:t.hostBindings=n}function s_(t,n,e,r,i,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Gi(t.mergedAttrs,t.attrs);let d=t.tView=Oh(2,t,i,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Ui(t,!1);let l=jS(e,n,t,r);Sl()&&Hh(e,n,l,t),qi(l,n);let c=Fy(l,n,l,t);n[r+Le]=c,Ph(n,c),bS(c,t,n)}function VS(t,n,e,r,i,o,s,a,l,c,d){let f=e+Le,h;return n.firstCreatePass?(h=Ji(n,f,4,s||null,a||null),Sf()&&Uy(n,t,h,Rt(n.consts,c),wy),Sb(n,h)):h=n.data[f],s_(h,t,n,e,r,i,o,l),ts(h)&&zh(n,t,h),c!=null&&lc(t,h,d),h}function Yi(t,n,e,r,i,o,s,a,l,c,d){let f=e+Le,h;if(n.firstCreatePass){if(h=Ji(n,f,4,s||null,a||null),c!=null){let p=Rt(n.consts,c);h.localNames=[];for(let m=0;m<p.length;m+=2)h.localNames.push(p[m],-1)}}else h=n.data[f];return s_(h,t,n,e,r,i,o,l),c!=null&&lc(t,h,d),h}function Dt(t,n,e,r,i,o,s,a){let l=G(),c=Oe(),d=Rt(c.consts,o);return VS(l,c,t,n,e,r,i,d,void 0,s,a),Dt}function eo(t,n,e,r,i,o,s,a){let l=G(),c=Oe(),d=Rt(c.consts,o);return Yi(l,c,t,n,e,r,i,d,void 0,s,a),eo}var jS=BS;function BS(t,n,e,r){return Ml(!0),n[Ae].createComment("")}var Kh=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function qn(t){return typeof t=="function"&&t[Fe]!==void 0}var Xh=new v("");function gr(t){return!!t&&typeof t.then=="function"}function Jh(t){return!!t&&typeof t.subscribe=="function"}var a_=new v("");var ep=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,r)=>{this.resolve=e,this.reject=r});appInits=u(a_,{optional:!0})??[];injector=u(ne);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let i of this.appInits){let o=Je(this.injector,i);if(gr(o))e.push(o);else if(Jh(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{r()}).catch(i=>{this.reject(i)}),e.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hc=new v("");function l_(){_u(()=>{let t="";throw new E(600,t)})}function c_(t){return t.isBoundToModule}var HS=10;var Yt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Ot);afterRenderManager=u(oc);zonelessEnabled=u(os);rootEffectScheduler=u(Al);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new C;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Gn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Y(e=>!e))}constructor(){u(pn,{optional:!0})}whenStable(){let e;return new Promise(r=>{e=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{e.unsubscribe()})}_injector=u(ge);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,r){return this.bootstrapImpl(e,r)}bootstrapImpl(e,r,i=ne.NULL){return this._injector.get(M).run(()=>{_e(pe.BootstrapComponentStart);let s=e instanceof uc;if(!this._injector.get(ep).done){let m="";throw new E(405,m)}let l;s?l=e:l=this._injector.get(ws).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=c_(l)?void 0:this._injector.get(Rn),d=r||l.selector,f=l.create(i,[],d,c),h=f.location.nativeElement,p=f.injector.get(Xh,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),cs(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),_e(pe.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){_e(pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ic.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw _e(pe.ChangeDetectionEnd),new E(101,!1);let e=N(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,N(e),this.afterTick.next(),_e(pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ue,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<HS;){_e(pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{_e(pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!ns(i))continue;let o=r&&!this.zonelessEnabled?0:1;Ry(i,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ns(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let r=e;this._views.push(r),r.attachToAppRef(this)}detachView(e){let r=e;cs(this._views,r),r.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(e),this._injector.get(hc,[]).forEach(i=>i(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>cs(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new E(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cs(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function pc(t,n){let e=G(),r=Wn();if(Ft(e,r,n)){let i=Oe(),o=is();if(cc(o,i,e,t,n))Sn(o)&&Dy(e,o.index);else{let a=qt(o,e);Cy(e[Ae],a,null,o.value,t,n,null)}}return pc}function Ee(t,n,e,r){let i=G(),o=Wn();if(Ft(i,o,n)){let s=Oe(),a=is();vI(a,i,t,n,e,r)}return Ee}var bh=class{destroy(n){}updateValue(n,e){}swap(n,e){let r=Math.min(n,e),i=Math.max(n,e),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(n,e){this.attach(e,this.detach(n))}};function Yf(t,n,e,r,i){return t===e&&Object.is(n,r)?1:Object.is(i(t,n),i(e,r))?-1:0}function US(t,n,e,r){let i,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){N(r);let c=n.length-1;for(N(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],h=Yf(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let p=t.at(a),m=n[c],w=Yf(a,p,c,m,e);if(w!==0){w<0&&t.updateValue(a,m),a--,c--;continue}let I=e(s,d),T=e(a,p),me=e(s,f);if(Object.is(me,T)){let Qe=e(c,m);Object.is(Qe,I)?(t.swap(s,a),t.updateValue(a,m),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(i??=new Ql,o??=vb(t,s,a,e),yh(t,i,s,me))t.updateValue(s,f),s++,a++;else if(o.has(me))i.set(I,t.detach(s)),a--;else{let Qe=t.create(s,n[s]);t.attach(s,Qe),s++,a++}}for(;s<=c;)gb(t,i,e,s,n[s]),s++}else if(n!=null){N(r);let c=n[Symbol.iterator]();N(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,p=Yf(s,f,s,h,e);if(p!==0)p<0&&t.updateValue(s,h),s++,d=c.next();else{i??=new Ql,o??=vb(t,s,a,e);let m=e(s,h);if(yh(t,i,s,m))t.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(m))t.attach(s,t.create(s,h)),s++,a++,d=c.next();else{let w=e(s,f);i.set(w,t.detach(s)),a--}}}for(;!d.done;)gb(t,i,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));i?.forEach(c=>{t.destroy(c)})}function yh(t,n,e,r){return n!==void 0&&n.has(r)?(t.attach(e,n.get(r)),n.delete(r),!0):!1}function gb(t,n,e,r,i){if(yh(t,n,r,e(r,i)))t.updateValue(r,i);else{let o=t.create(r,i);t.attach(r,o)}}function vb(t,n,e,r){let i=new Set;for(let o=n;o<=e;o++)i.add(r(o,t.at(o)));return i}var Ql=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let r=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,r]of this.kvMap)if(n(r,e),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),n(r,e)}}};function ae(t,n,e,r,i,o,s,a){mr("NgControlFlow");let l=G(),c=Oe(),d=Rt(c.consts,o);return Yi(l,c,t,n,e,r,i,d,256,s,a),tp}function tp(t,n,e,r,i,o,s,a){mr("NgControlFlow");let l=G(),c=Oe(),d=Rt(c.consts,o);return Yi(l,c,t,n,e,r,i,d,512,s,a),tp}function le(t,n){mr("NgControlFlow");let e=G(),r=Wn(),i=e[r]!==_t?e[r]:-1,o=i!==-1?Kl(e,Le+i):void 0,s=0;if(Ft(e,r,t)){let a=N(null);try{if(o!==void 0&&Ly(o,s),t!==-1){let l=Le+t,c=Kl(e,l),d=Ch(e[V],l),f=jy(c,d,e),h=_s(e,d,n,{dehydratedView:f});Ds(c,h,s,Zi(d,f))}}finally{N(a)}}else if(o!==void 0){let a=Py(o,s);a!==void 0&&(a[Pe]=n)}}var _h=class{lContainer;$implicit;$index;constructor(n,e,r){this.lContainer=n,this.$implicit=e,this.$index=r}get $count(){return this.lContainer.length-Ne}};function vr(t){return t}function mc(t,n){return n}var Dh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,r){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=r}};function Pt(t,n,e,r,i,o,s,a,l,c,d,f,h){mr("NgControlFlow");let p=G(),m=Oe(),w=l!==void 0,I=G(),T=a?s.bind(I[bt][Pe]):s,me=new Dh(w,T);I[Le+t]=me,Yi(p,m,t+1,n,e,r,i,Rt(m.consts,o),256),w&&Yi(p,m,t+2,l,c,d,f,Rt(m.consts,h),512)}var wh=class extends bh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,r){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=r}get length(){return this.lContainer.length-Ne}at(n){return this.getLView(n)[Pe].$implicit}attach(n,e){let r=e[Kr];this.needsIndexUpdate||=n!==this.length,Ds(this.lContainer,e,n,Zi(this.templateTNode,r)),zS(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,$S(this.lContainer,n),WS(this.lContainer,n)}create(n,e){let r=zl(this.lContainer,this.templateTNode.tView.ssrId);return _s(this.hostLView,this.templateTNode,new _h(this.lContainer,e,n),{dehydratedView:r})}destroy(n){sc(n[V],n)}updateValue(n,e){this.getLView(n)[Pe].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Pe].$index=n}getLView(n){return GS(this.lContainer,n)}};function Lt(t){let n=N(null),e=Tn();try{let r=G(),i=r[V],o=r[e],s=e+1,a=Kl(r,s);if(o.liveCollection===void 0){let c=Ch(i,s);o.liveCollection=new wh(a,r,c)}else o.liveCollection.reset();let l=o.liveCollection;if(US(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Wn(),d=l.length===0;if(Ft(r,c,d)){let f=e+2,h=Kl(r,f);if(d){let p=Ch(i,f),m=jy(h,p,r),w=_s(r,p,void 0,{dehydratedView:m});Ds(h,w,0,Zi(p,m))}else i.firstUpdatePass&&BI(h),Ly(h,0)}}}finally{N(n)}}function Kl(t,n){return t[n]}function zS(t,n){if(t.length<=Ne)return;let e=Ne+n,r=t[e],i=r?r[dr]:void 0;if(r&&i&&i.detachedLeaveAnimationFns&&i.detachedLeaveAnimationFns.length>0){let o=r[Un];Yx(o,i),si.delete(r[zn]),i.detachedLeaveAnimationFns=void 0}}function $S(t,n){if(t.length<=Ne)return;let e=Ne+n,r=t[e],i=r?r[dr]:void 0;i&&i.leave&&i.leave.size>0&&(i.detachedLeaveAnimationFns=[])}function WS(t,n){return hs(t,n)}function GS(t,n){return Py(t,n)}function Ch(t,n){return yl(t,n)}function q(t,n,e){let r=G(),i=Wn();if(Ft(r,i,n)){let o=Oe(),s=is();hI(s,r,t,n,r[Ae],e)}return q}function Eh(t,n,e,r,i){cc(n,t,e,i?"class":"style",r)}function y(t,n,e,r){let i=G(),o=i[V],s=t+Le,a=o.firstCreatePass?$y(s,i,2,n,wy,Sf(),e,r):o.data[s];if(Sn(a)){let l=i[sn].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(qy(c),()=>(bb(t,n,i,a,r),y))}}return bb(t,n,i,a,r),y}function bb(t,n,e,r,i){if(Ey(r,e,t,n,d_),ts(r)){let o=e[V];zh(o,e,r),Kb(o,r,e)}i!=null&&lc(e,r)}function _(){let t=Oe(),n=dt(),e=xy(n);return t.firstCreatePass&&Wy(t,e),Tf(e)&&Af(),If(),e.classesWithoutHost!=null&&X0(e)&&Eh(t,e,G(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&J0(e)&&Eh(t,e,G(),e.stylesWithoutHost,!1),_}function ce(t,n,e,r){return y(t,n,e,r),_(),ce}function xe(t,n,e,r){let i=G(),o=i[V],s=t+Le,a=o.firstCreatePass?eS(s,o,2,n,e,r):o.data[s];return Ey(a,i,t,n,d_),r!=null&&lc(i,a),xe}function Ie(){let t=dt(),n=xy(t);return Tf(n)&&Af(),If(),Ie}function ft(t,n,e,r){return xe(t,n,e,r),Ie(),ft}var d_=(t,n,e,r,i)=>(Ml(!0),ey(n[Ae],r,jv()));function Zn(){return G()}function kn(t,n,e){let r=G(),i=Wn();if(Ft(r,i,n)){let o=Oe(),s=is();_y(s,r,t,n,r[Ae],e)}return kn}var Es="en-US";var qS=Es;function u_(t){typeof t=="string"&&(qS=t.toLowerCase().replace(/_/g,"-"))}function fe(t,n,e){let r=G(),i=Oe(),o=dt();return ZS(i,r,r[Ae],o,t,n,e),fe}function ZS(t,n,e,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=Gf(r,n,o),rS(r,t,n,s,e,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],p=d[f+1];l??=Gf(r,n,o),fb(r,n,h,p,i,l)}if(c&&c.length)for(let f of c)l??=Gf(r,n,o),fb(r,n,f,i,i,l)}}function J(t=1){return Vv(t)}function YS(t,n){let e=null,r=Ox(t);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){e=i;continue}if(r===null?ly(t,o,!0):Lx(r,o))return i}return e}function Se(t){let n=G()[bt][vt];if(!n.projection){let e=t?t.length:1,r=n.projection=av(e,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?YS(o,t):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function W(t,n=0,e,r,i,o){let s=G(),a=Oe(),l=r?t+1:null;l!==null&&Yi(s,a,l,r,i,o,null,e);let c=Ji(a,Le+t,16,null,e||null);c.projection===null&&(c.projection=n),Nf();let f=!s[Kr]||Mf();s[bt][vt].projection[c.projection]===null&&l!==null?QS(s,a,l):f&&!tc(c)&&sI(a,s,c)}function QS(t,n,e){let r=Le+e,i=n.data[r],o=t[r],s=zl(o,i.tView.ssrId),a=_s(t,i,void 0,{dehydratedView:s});Ds(o,a,0,Zi(i,s))}function Et(t,n,e,r){return Jy(t,n,e,r),Et}function ze(t,n,e){return Xy(t,n,e),ze}function j(t){let n=G(),e=Oe(),r=El();rs(r+1);let i=Zh(e,r);if(t.dirty&&yv(n)===((i.metadata.flags&2)===2)){if(i.matches===null)t.reset([]);else{let o=t_(n,r);t.reset(o,jb),t.notifyOnChanges()}return!0}return!1}function B(){return qh(G(),El())}function gc(t,n,e,r,i){return r_(n,Jy(t,e,r,i)),gc}function vc(t,n,e,r){return r_(t,Xy(n,e,r)),vc}function bc(t=1){rs(El()+t)}function mn(t){let n=Sv();return bv(n,Le+t)}function kl(t,n){return t<<17|n<<2}function li(t){return t>>17&32767}function KS(t){return(t&2)==2}function XS(t,n){return t&131071|n<<17}function xh(t){return t|2}function Qi(t){return(t&131068)>>2}function Qf(t,n){return t&-131069|n<<2}function JS(t){return(t&1)===1}function Ih(t){return t|1}function eM(t,n,e,r,i,o){let s=o?n.classBindings:n.styleBindings,a=li(s),l=Qi(s);t[r]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Li(f,d)>0)&&(c=!0)}else d=e;if(i)if(l!==0){let h=li(t[a+1]);t[r+1]=kl(h,a),h!==0&&(t[h+1]=Qf(t[h+1],r)),t[a+1]=XS(t[a+1],r)}else t[r+1]=kl(a,0),a!==0&&(t[a+1]=Qf(t[a+1],r)),a=r;else t[r+1]=kl(l,0),a===0?a=r:t[l+1]=Qf(t[l+1],r),l=r;c&&(t[r+1]=xh(t[r+1])),yb(t,d,r,!0),yb(t,d,r,!1),tM(n,d,t,r,o),s=kl(a,l),o?n.classBindings=s:n.styleBindings=s}function tM(t,n,e,r,i){let o=i?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Li(o,n)>=0&&(e[r+1]=Ih(e[r+1]))}function yb(t,n,e,r){let i=t[e+1],o=n===null,s=r?li(i):Qi(i),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];nM(l,n)&&(a=!0,t[s+1]=r?Ih(c):xh(c)),s=r?li(c):Qi(c)}a&&(t[e+1]=r?xh(i):Ih(i))}function nM(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Li(t,n)>=0:!1}var dn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function rM(t){return t.substring(dn.key,dn.keyEnd)}function iM(t){return oM(t),f_(t,h_(t,0,dn.textEnd))}function f_(t,n){let e=dn.textEnd;return e===n?-1:(n=dn.keyEnd=sM(t,dn.key=n,e),h_(t,n,e))}function oM(t){dn.key=0,dn.keyEnd=0,dn.value=0,dn.valueEnd=0,dn.textEnd=t.length}function h_(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function sM(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Yn(t,n,e){return p_(t,n,e,!1),Yn}function H(t,n){return p_(t,n,null,!0),H}function gn(t){lM(pM,aM,t,!0)}function aM(t,n){for(let e=iM(n);e>=0;e=f_(n,e))gl(t,rM(n),!0)}function p_(t,n,e,r){let i=G(),o=Oe(),s=wl(2);if(o.firstUpdatePass&&g_(o,t,s,r),n!==_t&&Ft(i,s,n)){let a=o.data[Tn()];v_(o,a,i,i[Ae],t,i[s+1]=gM(n,e),r,s)}}function lM(t,n,e,r){let i=Oe(),o=wl(2);i.firstUpdatePass&&g_(i,null,o,r);let s=G();if(e!==_t&&Ft(s,o,e)){let a=i.data[Tn()];if(b_(a,r)&&!m_(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=ul(l,e||"")),Eh(i,a,s,e,r)}else mM(i,a,s,s[Ae],s[o+1],s[o+1]=hM(t,n,e),r,o)}}function m_(t,n){return n>=t.expandoStartIndex}function g_(t,n,e,r){let i=t.data;if(i[e+1]===null){let o=i[Tn()],s=m_(t,e);b_(o,r)&&n===null&&!s&&(n=!1),n=cM(i,o,n,r),eM(i,o,n,e,s,r)}}function cM(t,n,e,r){let i=Ov(t),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(e=Kf(null,t,n,e,r),e=ms(e,n.attrs,r),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==i)if(e=Kf(i,t,n,e,r),o===null){let l=dM(t,n,r);l!==void 0&&Array.isArray(l)&&(l=Kf(null,t,n,l[1],r),l=ms(l,n.attrs,r),uM(t,n,r,l))}else o=fM(t,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),e}function dM(t,n,e){let r=e?n.classBindings:n.styleBindings;if(Qi(r)!==0)return t[li(r)]}function uM(t,n,e,r){let i=e?n.classBindings:n.styleBindings;t[li(i)]=r}function fM(t,n,e){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let s=t[o].hostAttrs;r=ms(r,s,e)}return ms(r,n.attrs,e)}function Kf(t,n,e,r,i){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],r=ms(r,o.hostAttrs,i),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),r}function ms(t,n,e){let r=e?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?i=s:i===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),gl(t,s,e?!0:n[++o]))}return t===void 0?null:t}function hM(t,n,e){if(e==null||e==="")return ct;let r=[],i=ys(e);if(Array.isArray(i))for(let o=0;o<i.length;o++)t(r,i[o],!0);else if(i instanceof Set)for(let o of i)t(r,o,!0);else if(typeof i=="object")for(let o in i)i.hasOwnProperty(o)&&t(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function pM(t,n,e){let r=String(n);r!==""&&!r.includes(" ")&&gl(t,r,e)}function mM(t,n,e,r,i,o,s,a){i===_t&&(i=ct);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=l<i.length?i[l+1]:void 0,p=c<o.length?o[c+1]:void 0,m=null,w;d===f?(l+=2,c+=2,h!==p&&(m=f,w=p)):f===null||d!==null&&d<f?(l+=2,m=d):(c+=2,m=f,w=p),m!==null&&v_(t,n,e,r,m,w,s,a),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function v_(t,n,e,r,i,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=JS(c)?_b(l,n,e,i,Qi(c),s):void 0;if(!Xl(d)){Xl(o)||KS(c)&&(o=_b(l,null,e,i,a,s));let f=_f(Tn(),e);lI(r,s,f,i,o)}}function _b(t,n,e,r,i,o){let s=n===null,a;for(;i>0;){let l=t[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,h=e[i+1];h===_t&&(h=f?ct:void 0);let p=f?vl(h,r):d===r?h:void 0;if(c&&!Xl(p)&&(p=vl(l,r)),Xl(p)&&(a=p,s))return a;let m=t[i+1];i=s?li(m):Qi(m)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=vl(l,r))}return a}function Xl(t){return t!==void 0}function gM(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Qo(ys(t)))),t}function b_(t,n){return(t.flags&(n?8:16))!==0}function S(t,n=""){let e=G(),r=Oe(),i=t+Le,o=r.firstCreatePass?Ji(r,i,1,n,null):r.data[i],s=vM(r,e,o,n);e[i]=s,Sl()&&Hh(r,e,s,o),Ui(o,!1)}var vM=(t,n,e,r)=>(Ml(!0),Cx(n[Ae],r));function bM(t,n,e,r=""){return Ft(t,Wn(),e)?n+Zr(e)+r:_t}function yM(t,n,e,r,i,o=""){let s=Tv(),a=nS(t,s,e,i);return wl(2),a?n+Zr(e)+r+Zr(i)+o:_t}function Qt(t){return et("",t),Qt}function et(t,n,e){let r=G(),i=bM(r,t,n,e);return i!==_t&&y_(r,Tn(),i),et}function yc(t,n,e,r,i){let o=G(),s=yM(o,t,n,e,r,i);return s!==_t&&y_(o,Tn(),s),yc}function y_(t,n,e){let r=_f(n,t);Ex(t[Ae],r,e)}function _c(t){return Ft(G(),Wn(),t)?Zr(t):_t}function Db(t,n,e){let r=Oe();r.firstCreatePass&&__(n,r.data,r.blueprint,Mn(t),e)}function __(t,n,e,r,i){if(t=it(t),Array.isArray(t))for(let o=0;o<t.length;o++)__(t[o],n,e,r,i);else{let o=Oe(),s=G(),a=dt(),l=Wr(t)?t:it(t.provide),c=mf(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Wr(t)||!t.multi){let p=new oi(c,i,U,null),m=Jf(l,n,i?d:d+h,f);m===-1?(th(Bl(a,s),o,l),Xf(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[m]=p,s[m]=p)}else{let p=Jf(l,n,d+h,f),m=Jf(l,n,d,d+h),w=p>=0&&e[p],I=m>=0&&e[m];if(i&&!I||!i&&!w){th(Bl(a,s),o,l);let T=wM(i?DM:_M,e.length,i,r,c,t);!i&&I&&(e[m].providerFactory=T),Xf(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(T),s.push(T)}else{let T=D_(e[i?m:p],c,!i&&r);Xf(o,t,p>-1?p:m,T)}!i&&r&&I&&e[m].componentProviders++}}}function Xf(t,n,e,r){let i=Wr(n),o=hv(n);if(i||o){let l=(o?it(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[r,l]):c[d+1].push(r,l)}else c.push(e,l)}}}function D_(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Jf(t,n,e,r){for(let i=e;i<r;i++)if(n[i]===t)return i;return-1}function _M(t,n,e,r,i){return Sh(this.multi,[])}function DM(t,n,e,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=ds(r,r[V],this.providerFactory.index,i);s=l.slice(0,a),Sh(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Sh(o,s);return s}function Sh(t,n){for(let e=0;e<t.length;e++){let r=t[e];n.push(r())}return n}function wM(t,n,e,r,i,o){let s=new oi(t,e,U,null);return s.multi=[],s.index=n,s.componentProviders=0,D_(s,i,r&&!e),s}function Te(t,n){return e=>{e.providersResolver=(r,i)=>Db(r,i?i(t):t,!1),n&&(e.viewProvidersResolver=(r,i)=>Db(r,i?i(n):n,!0))}}function vn(t,n,e){return EM(G(),Mv(),t,n,e)}function CM(t,n){let e=t[n];return e===_t?void 0:e}function EM(t,n,e,r,i,o){let s=n+e;return Ft(t,s,i)?tS(t,s+1,o?r.call(o,i):r(i)):CM(t,s+1)}function np(t,n){return dc(t,n)}var Jl=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},rp=(()=>{class t{compileModuleSync(e){return new Yl(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let r=this.compileModuleSync(e),i=sf(e),o=sy(i.declarations).reduce((s,a)=>{let l=Hn(a);return l&&s.push(new ai(l)),s},[]);return new Jl(r,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var w_=(()=>{class t{applicationErrorHandler=u(Ot);appRef=u(Yt);taskService=u(Gn);ngZone=u(M);zonelessEnabled=u(os);tracing=u(pn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new de;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(qo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Uf,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?zv:Vf;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(qo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function C_(){return[{provide:xn,useExisting:w_},{provide:M,useClass:Zo},{provide:os,useValue:!0}]}function xM(){return typeof $localize<"u"&&$localize.locale||Es}var Dc=new v("",{factory:()=>u(Dc,{optional:!0,skipSelf:!0})||xM()});function ve(t){return Yg(t)}function st(t,n){return Fo(t,n?.equal)}var IM=t=>t;function ip(t,n){if(typeof t=="function"){let e=ju(t,IM,n?.equal);return E_(e,n?.debugName)}else{let e=ju(t.source,t.computation,t.equal);return E_(e,t.debugName)}}function E_(t,n){let e=t[Fe],r=t;return r.set=i=>qg(e,i),r.update=i=>Zg(e,i),r.asReadonly=Tl.bind(t),r}var T_=Symbol("InputSignalNode#UNSET"),$M=Z(g({},Po),{transformFn:void 0,applyValueToInputSignal(t,n){Rr(t,n)}});function A_(t,n){let e=Object.create($M);e.value=t,e.transformFn=n?.transform;function r(){if(nr(e),e.value===T_){let i=null;throw new E(-950,i)}return e.value}return r[Fe]=e,r}var Is=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>vs(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function x_(t,n){return A_(t,n)}function WM(t){return A_(T_,t)}var to=(x_.required=WM,x_);function I_(t,n){return Yh(n)}function GM(t,n){return Qh(n)}var Ss=(I_.required=GM,I_);function S_(t,n){return Yh(n)}function qM(t,n){return Qh(n)}var R_=(S_.required=qM,S_);var sp=new v(""),ZM=new v("");function xs(t){return!t.moduleRef}function YM(t){let n=xs(t)?t.r3Injector:t.moduleRef.injector,e=n.get(M);return e.run(()=>{xs(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=n.get(Ot),i;if(e.runOutsideAngular(()=>{i=e.onError.subscribe({next:r})}),xs(t)){let o=()=>n.destroy(),s=t.platformInjector.get(sp);s.add(o),n.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(sp);s.add(o),t.moduleRef.onDestroy(()=>{cs(t.allPlatformModules,t.moduleRef),i.unsubscribe(),s.delete(o)})}return KM(r,e,()=>{let o=n.get(Gn),s=o.add(),a=n.get(ep);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Dc,Es);if(u_(l||Es),!n.get(ZM,!0))return xs(t)?n.get(Yt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(xs(t)){let d=n.get(Yt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return QM?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var QM;function KM(t,n,e){try{let r=e();return gr(r)?r.catch(i=>{throw n.runOutsideAngular(()=>t(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>t(r)),r}}var wc=null;function XM(t=[],n){return ne.create({name:n,providers:[{provide:Jo,useValue:"platform"},{provide:sp,useValue:new Set([()=>wc=null])},...t]})}function JM(t=[]){if(wc)return wc;let n=XM(t);return wc=n,l_(),eT(n),n}function eT(t){let n=t.get(ec,null);Je(t,()=>{n?.forEach(e=>e())})}var tT=1e4;var FW=tT-1e3;var Ve=(()=>{class t{static __NG_ELEMENT_ID__=nT}return t})();function nT(t){return rT(dt(),G(),(t&16)===16)}function rT(t,n,e){if(Sn(t)&&!e){let r=Zt(t.index,n);return new hr(r,r)}else if(t.type&175){let r=n[bt];return new hr(r,n)}return null}var ap=class{supports(n){return n instanceof Map||Gh(n)}create(){return new lp}},lp=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||Gh(n)))throw new E(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(r,i)=>{if(e&&e.key===i)this._maybeAddToChanges(e,r),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(i,r);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let r=e;r!==null;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let r=n._prev;return e._next=n,e._prev=r,n._prev=e,r&&(r._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let i=this._records.get(n);this._maybeAddToChanges(i,e);let o=i._prev,s=i._next;return o&&(o._next=s),s&&(s._prev=o),i._next=null,i._prev=null,i}let r=new cp(n);return this._records.set(n,r),r.currentValue=e,this._addToAdditions(r),r}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(r=>e(n[r],r))}},cp=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function M_(){return new up([new ap])}var up=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:M_});factories;constructor(e){this.factories=e}static create(e,r){if(r){let i=r.factories.slice();e=e.concat(i)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let r=u(t,{optional:!0,skipSelf:!0});return t.create(e,r||M_())}}}find(e){let r=this.factories.find(i=>i.supports(e));if(r)return r;throw new E(901,!1)}}return t})();function k_(t){let{rootComponent:n,appProviders:e,platformProviders:r,platformRef:i}=t;_e(pe.BootstrapApplicationStart);try{let o=i?.injector??JM(r),s=[C_(),Wv,...e||[]],a=new ps({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return YM({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{_e(pe.BootstrapApplicationEnd)}}function ie(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function no(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var op=Symbol("NOT_SET"),N_=new Set,iT=Z(g({},Po),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:op,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==op&&!Ii(this))return this.signal;try{for(let i of this.cleanup??N_)i()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Ln(this),r;try{r=this.userFn.apply(null,n)}finally{rr(this,e)}return(this.value===op||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),dp=class extends us{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,r,i,o,s=null){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(yt),s),this.scheduler=i;for(let a of Vh){let l=e[a];if(l===void 0)continue;let c=Object.create(iT);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(nr(c),c.value),c.signal[Fe]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??N_)e()}finally{ir(n)}}};function O_(t,n){let e=n?.injector??u(ne),r=e.get(xn),i=e.get(oc),o=e.get(pn,null,{optional:!0});i.impl??=e.get(jh);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(zi,null,{optional:!0}),l=new dp(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,e,o?.snapshot(null));return i.impl.register(l),l}function Cc(t,n){let e=Hn(t),r=n.elementInjector||Vi();return new ai(e).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var F_=null;function Kt(){return F_}function fp(t){F_??=t}var Ms=class{},Ec=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(P_),providedIn:"platform"})}return t})();var P_=(()=>{class t extends Ec{_location;_history;_doc=u(Q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Kt().getBaseHref(this._doc)}onPopState(e){let r=Kt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=Kt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function j_(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function L_(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function br(t){return t&&t[0]!=="?"?`?${t}`:t}var ro=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(sT),providedIn:"root"})}return t})(),oT=new v(""),sT=(()=>{class t extends ro{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(Q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return j_(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+br(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let s=this.prepareExternalUrl(i+br(o));this._platformLocation.pushState(e,r,s)}replaceState(e,r,i,o){let s=this.prepareExternalUrl(i+br(o));this._platformLocation.replaceState(e,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||t)(P(Ec),P(oT,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yr=(()=>{class t{_subject=new C;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=cT(L_(V_(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+br(r))}normalize(e){return t.stripTrailingSlash(lT(this._basePath,V_(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+br(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+br(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=br;static joinWithSlash=j_;static stripTrailingSlash=L_;static \u0275fac=function(r){return new(r||t)(P(ro))};static \u0275prov=b({token:t,factory:()=>aT(),providedIn:"root"})}return t})();function aT(){return new yr(P(ro))}function lT(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function V_(t){return t.replace(/\/index.html$/,"")}function cT(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var hp=/\s+/,B_=[],pp=(()=>{class t{_ngEl;_renderer;initialClasses=B_;rawClass;stateMap=new Map;constructor(e,r){this._ngEl=e,this._renderer=r}set klass(e){this.initialClasses=e!=null?e.trim().split(hp):B_}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(hp):e}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let r of e)this._updateState(r,!0);else if(e!=null)for(let r of Object.keys(e))this._updateState(r,!!e[r]);this._applyStateDiff()}_updateState(e,r){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(e,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let r=e[0],i=e[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(e,r){e=e.trim(),e.length>0&&e.split(hp).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(r){return new(r||t)(U(k),U(Me))};static \u0275dir=R({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var mp=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,r,i){this._ngEl=e,this._differs=r,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,r){let[i,o]=e.split("."),s=i.indexOf("-")===-1?void 0:hn.DashCase;r!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${r}${o}`:r,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(r=>this._setStyle(r.key,null)),e.forEachAddedItem(r=>this._setStyle(r.key,r.currentValue)),e.forEachChangedItem(r=>this._setStyle(r.key,r.currentValue))}static \u0275fac=function(r){return new(r||t)(U(k),U(up),U(Me))};static \u0275dir=R({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),gp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(ne);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||t)(U(ot))};static \u0275dir=R({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[We]})}return t})();function xc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var ui=class{};var vp="browser";function H_(t){return t===vp}var Ts=class{_doc;constructor(n){this._doc=n}manager},Ic=(()=>{class t extends Ts{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||t)(P(Q))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Tc=new v(""),Dp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(s=>{s.manager=this});let i=e.filter(s=>!(s instanceof Ic));this._plugins=i.slice().reverse();let o=e.find(s=>s instanceof Ic);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new E(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(P(Tc),P(M))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),bp="ng-app-id";function U_(t){for(let n of t)n.remove()}function z_(t,n){let e=n.createElement("style");return e.textContent=t,e}function pT(t,n,e,r){let i=t.head?.querySelectorAll(`style[${bp}="${n}"],link[${bp}="${n}"]`);if(i)for(let o of i)o.removeAttribute(bp),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function _p(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var wp=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,pT(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,z_);r?.forEach(i=>this.addUsage(i,this.external,_p))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(U_(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])U_(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,z_(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,_p(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(P(Q),P(Xi),P(di,8),P(ci))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),yp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Cp=/%COMP%/g;var W_="%COMP%",mT=`_nghost-${W_}`,gT=`_ngcontent-${W_}`,vT=!0,bT=new v("",{factory:()=>vT});function yT(t){return gT.replace(Cp,t)}function _T(t){return mT.replace(Cp,t)}function G_(t,n){return n.map(e=>e.replace(Cp,t))}var Ep=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,r,i,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new As(e,s,a,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof Mc?i.applyToHost(e):i instanceof Rs&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case fn.Emulated:o=new Mc(l,c,r,this.appId,d,s,a,f);break;case fn.ShadowDom:return new Sc(l,e,r,s,a,this.nonce,f,c);case fn.ExperimentalIsolatedShadowDom:return new Sc(l,e,r,s,a,this.nonce,f);default:o=new Rs(l,c,r,d,s,a,f);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(P(Dp),P(wp),P(Xi),P(bT),P(Q),P(M),P(di),P(pn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),As=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i){this.eventManager=n,this.doc=e,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(yp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){($_(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){n&&($_(n)?n.content:n).insertBefore(e,r)}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new E(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+":"+e;let o=yp[i];o?n.setAttributeNS(o,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=yp[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){i&(hn.DashCase|hn.Important)?n.style.setProperty(e,r,i&hn.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){r&hn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n=="string"&&(n=Kt().getGlobalEventTarget(this.doc,n),!n))throw new E(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,i)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function $_(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Sc=class extends As{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,r,i,o,s,a,l){super(n,i,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=G_(r.id,c);for(let f of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=_p(f,i);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Rs=class extends As{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let c=r.styles;this.styles=l?G_(l,c):c,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&si.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Mc=class extends Rs{contentAttr;hostAttr;constructor(n,e,r,i,o,s,a,l){let c=i+"-"+r.id;super(n,e,r,o,s,a,l,c),this.contentAttr=yT(c),this.hostAttr=_T(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}};var Ac=class t extends Ms{supportsDOMEvents=!0;static makeCurrent(){fp(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=DT();return e==null?null:wT(e)}resetBaseElement(){ks=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return xc(document.cookie,n)}},ks=null;function DT(){return ks=ks||document.head.querySelector("base"),ks?ks.getAttribute("href"):null}function wT(t){return new URL(t,document.baseURI).pathname}var CT=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),q_=["alt","control","meta","shift"],ET={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xT={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Z_=(()=>{class t extends Ts{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,o){let s=t.parseEventName(r),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Kt().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),q_.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(e,r){let i=ET[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),q_.forEach(s=>{if(s!==i){let a=xT[s];a(e)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(P(Q))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function xp(t,n,e){let r=g({rootComponent:t},IT(n,e));return k_(r)}function IT(t,n){return{platformRef:n?.platformRef,appProviders:[...RT,...t?.providers??[]],platformProviders:AT}}function ST(){Ac.makeCurrent()}function MT(){return new rn}function TT(){return Ah(document),document}var AT=[{provide:ci,useValue:vp},{provide:ec,useValue:ST,multi:!0},{provide:Q,useFactory:TT}];var RT=[{provide:Jo,useValue:"root"},{provide:rn,useFactory:MT},{provide:Tc,useClass:Ic,multi:!0},{provide:Tc,useClass:Z_,multi:!0},Ep,wp,Dp,{provide:Ue,useExisting:Ep},{provide:ui,useClass:CT},[]];var _r=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=(n.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Sp=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Mp=class{encodeKey(n){return Y_(n)}encodeValue(n){return Y_(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function kT(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var NT=/%(\d[a-f0-9])/gi,OT={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Y_(t){return encodeURIComponent(t).replace(NT,(n,e)=>OT[e]??n)}function Rc(t){return`${t}`}var Qn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Mp,n.fromString){if(n.fromObject)throw new E(2805,!1);this.map=kT(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(Rc):[Rc(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Rc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(Rc(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function FT(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Q_(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function K_(t){return typeof Blob<"u"&&t instanceof Blob}function X_(t){return typeof FormData<"u"&&t instanceof FormData}function PT(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var J_="Content-Type",eD="Accept",tD="text/plain",nD="application/json",LT=`${nD}, ${tD}, */*`,io=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let o;if(FT(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new _r,this.context??=new Sp,!this.params)this.params=new Qn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Q_(this.body)||K_(this.body)||X_(this.body)||PT(this.body)?this.body:this.body instanceof Qn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||X_(this.body)?null:K_(this.body)?this.body.type||null:Q_(this.body)?null:typeof this.body=="string"?tD:this.body instanceof Qn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?nD:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,m=n.transferCache??this.transferCache,w=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,T=n.withCredentials??this.withCredentials,me=n.reportProgress??this.reportProgress,Qe=n.headers||this.headers,Ke=n.params||this.params,Ro=n.context??this.context;return n.setHeaders!==void 0&&(Qe=Object.keys(n.setHeaders).reduce((ko,Sr)=>ko.set(Sr,n.setHeaders[Sr]),Qe)),n.setParams&&(Ke=Object.keys(n.setParams).reduce((ko,Sr)=>ko.set(Sr,n.setParams[Sr]),Ke)),new t(e,r,I,{params:Ke,headers:Qe,context:Ro,reportProgress:me,responseType:i,withCredentials:T,transferCache:m,keepalive:o,cache:a,priority:s,timeout:w,mode:l,redirect:c,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},fi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(fi||{}),Ns=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,r="OK"){this.headers=n.headers||new _r,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Tp=class t extends Ns{constructor(n={}){super(n)}type=fi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Os=class t extends Ns{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=fi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},oo=class extends Ns{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},VT=200,jT=204;var BT=/^\)\]\}',?\n/;var HT=(()=>{class t{xhrFactory;tracingService=u(pn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new E(-2800,!1);let r=this.xhrFactory;return z(null).pipe(He(()=>new L(o=>{let s=r.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((I,T)=>s.setRequestHeader(I,T.join(","))),e.headers.has(eD)||s.setRequestHeader(eD,LT),!e.headers.has(J_)){let I=e.detectContentTypeHeader();I!==null&&s.setRequestHeader(J_,I)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();s.responseType=I!=="json"?I:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let I=s.statusText||"OK",T=new _r(s.getAllResponseHeaders()),me=s.responseURL||e.url;return l=new Tp({headers:T,status:s.status,statusText:I,url:me}),l},d=this.maybePropagateTrace(()=>{let{headers:I,status:T,statusText:me,url:Qe}=c(),Ke=null;T!==jT&&(Ke=typeof s.response>"u"?s.responseText:s.response),T===0&&(T=Ke?VT:0);let Ro=T>=200&&T<300;if(e.responseType==="json"&&typeof Ke=="string"){let ko=Ke;Ke=Ke.replace(BT,"");try{Ke=Ke!==""?JSON.parse(Ke):null}catch(Sr){Ke=ko,Ro&&(Ro=!1,Ke={error:Sr,text:Ke})}}Ro?(o.next(new Os({body:Ke,headers:I,status:T,statusText:me,url:Qe||void 0})),o.complete()):o.error(new oo({error:Ke,headers:I,status:T,statusText:me,url:Qe||void 0}))}),f=this.maybePropagateTrace(I=>{let{url:T}=c(),me=new oo({error:I,status:s.status||0,statusText:s.statusText||"Unknown Error",url:T||void 0});o.error(me)}),h=f;e.timeout&&(h=this.maybePropagateTrace(I=>{let{url:T}=c(),me=new oo({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:T||void 0});o.error(me)}));let p=!1,m=this.maybePropagateTrace(I=>{p||(o.next(c()),p=!0);let T={type:fi.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(T.total=I.total),e.responseType==="text"&&s.responseText&&(T.partialText=s.responseText),o.next(T)}),w=this.maybePropagateTrace(I=>{let T={type:fi.UploadProgress,loaded:I.loaded};I.lengthComputable&&(T.total=I.total),o.next(T)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",w)),s.send(a),o.next({type:fi.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",w)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||t)(P(ui))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function UT(t,n){return n(t)}function zT(t,n,e){return(r,i)=>Je(e,()=>n(r,o=>t(o,i)))}var $T=new v("",{factory:()=>[]}),rD=new v(""),WT=new v("",{factory:()=>!0});var GT=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(HT),i},providedIn:"root"})}return t})();var qT=(()=>{class t{backend;injector;chain=null;pendingTasks=u(ss);contributeToStability=u(WT);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get($T),...this.injector.get(rD,[])]));this.chain=r.reduceRight((i,o)=>zT(i,o,this.injector),UT)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Uo(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(P(GT),P(ge))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ZT=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(qT),i},providedIn:"root"})}return t})();function Ip(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var hi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof io)o=e;else{let l;i.headers instanceof _r?l=i.headers:l=new _r(i.headers);let c;i.params&&(i.params instanceof Qn?c=i.params:c=new Qn({fromObject:i.params})),o=new io(e,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=z(o).pipe(Ni(l=>this.handler.handle(l)));if(e instanceof io||i.observe==="events")return s;let a=s.pipe(ue(l=>l instanceof Os));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(Y(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new E(2806,!1);return l.body}));case"blob":return a.pipe(Y(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new E(2807,!1);return l.body}));case"text":return a.pipe(Y(l=>{if(l.body!==null&&typeof l.body!="string")throw new E(2808,!1);return l.body}));default:return a.pipe(Y(l=>l.body))}case"response":return a;default:throw new E(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new Qn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,Ip(i,r))}post(e,r,i={}){return this.request("POST",e,Ip(i,r))}put(e,r,i={}){return this.request("PUT",e,Ip(i,r))}static \u0275fac=function(r){return new(r||t)(P(ZT))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(P(Q))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var K="primary",Zs=Symbol("RouteTitle"),Op=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function mi(t){return new Op(t)}function Ap(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function hD(t,n,e){let r=e.path.split("/"),i=r.indexOf("**");if(i===-1){if(r.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||r.length<t.length))return null;let l={},c=t.slice(0,r.length);return Ap(r,c,l)?{consumed:c,posParams:l}:null}if(i!==r.lastIndexOf("**"))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Ap(o,t.slice(0,o.length),a)||!Ap(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Lc(t){return new Promise((n,e)=>{t.pipe(jn()).subscribe({next:r=>n(r),error:r=>e(r)})})}function QT(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Nn(t[e],n[e]))return!1;return!0}function Nn(t,n){let e=t?Fp(t):void 0,r=n?Fp(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!pD(t[i],n[i]))return!1;return!0}function Fp(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function pD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function KT(t){return t.length>0?t[t.length-1]:null}function bi(t){return jo(t)?t:gr(t)?Re(Promise.resolve(t)):z(t)}function mD(t){return jo(t)?Lc(t):Promise.resolve(t)}var XT={exact:bD,subset:yD},gD={exact:JT,subset:eA,ignored:()=>!0},vD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Pp={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function sD(t,n,e){return XT[e.paths](t.root,n.root,e.matrixParams)&&gD[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function JT(t,n){return Nn(t,n)}function bD(t,n,e){if(!pi(t.segments,n.segments)||!Oc(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!bD(t.children[r],n.children[r],e))return!1;return!0}function eA(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>pD(t[e],n[e]))}function yD(t,n,e){return _D(t,n,n.segments,e)}function _D(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!pi(i,e)||n.hasChildren()||!Oc(i,e,r))}else if(t.segments.length===e.length){if(!pi(t.segments,e)||!Oc(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!yD(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!pi(t.segments,i)||!Oc(t.segments,i,r)||!t.children[K]?!1:_D(t.children[K],n,o,r)}}function Oc(t,n,e){return n.every((r,i)=>gD[e](t[i].parameters,r.parameters))}var Bt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new be([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=mi(this.queryParams),this._queryParamMap}toString(){return rA.serialize(this)}},be=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fc(this)}},Dr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=mi(this.parameters),this._parameterMap}toString(){return wD(this)}};function tA(t,n){return pi(t,n)&&t.every((e,r)=>Nn(e.parameters,n[r].parameters))}function pi(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function nA(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===K&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==K&&(e=e.concat(n(i,r)))}),e}var mo=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>new wr,providedIn:"root"})}return t})(),wr=class{parse(n){let e=new Vp(n);return new Bt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Fs(n.root,!0)}`,r=sA(n.queryParams),i=typeof n.fragment=="string"?`#${iA(n.fragment)}`:"";return`${e}${r}${i}`}},rA=new wr;function Fc(t){return t.segments.map(n=>wD(n)).join("/")}function Fs(t,n){if(!t.hasChildren())return Fc(t);if(n){let e=t.children[K]?Fs(t.children[K],!1):"",r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==K&&r.push(`${i}:${Fs(o,!1)}`)}),r.length>0?`${e}(${r.join("//")})`:e}else{let e=nA(t,(r,i)=>i===K?[Fs(t.children[K],!1)]:[`${i}:${Fs(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[K]!=null?`${Fc(t)}/${e[0]}`:`${Fc(t)}/(${e.join("//")})`}}function DD(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function kc(t){return DD(t).replace(/%3B/gi,";")}function iA(t){return encodeURI(t)}function Lp(t){return DD(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Pc(t){return decodeURIComponent(t)}function aD(t){return Pc(t.replace(/\+/g,"%20"))}function wD(t){return`${Lp(t.path)}${oA(t.parameters)}`}function oA(t){return Object.entries(t).map(([n,e])=>`;${Lp(n)}=${Lp(e)}`).join("")}function sA(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${kc(e)}=${kc(i)}`).join("&"):`${kc(e)}=${kc(r)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var aA=/^[^\/()?;#]+/;function Rp(t){let n=t.match(aA);return n?n[0]:""}var lA=/^[^\/()?;=#]+/;function cA(t){let n=t.match(lA);return n?n[0]:""}var dA=/^[^=?&#]+/;function uA(t){let n=t.match(dA);return n?n[0]:""}var fA=/^[^&#]+/;function hA(t){let n=t.match(fA);return n?n[0]:""}var Vp=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new be([],{}):new be([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,n));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[K]=new be(e,r)),i}parseSegment(){let n=Rp(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(n),new Dr(Pc(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=cA(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let i=Rp(this.remaining);i&&(r=i,this.capture(r))}n[Pc(e)]=Pc(r)}parseQueryParam(n){let e=uA(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let s=hA(this.remaining);s&&(r=s,this.capture(r))}let i=aD(e),o=aD(r);if(n.hasOwnProperty(i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,e){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Rp(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=K);let a=this.parseChildren(e+1);r[s??K]=Object.keys(a).length===1&&a[K]?a[K]:new be([],a),this.consumeOptional("//")}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new E(4011,!1)}};function CD(t){return t.segments.length>0?new be([],{[K]:t}):t}function ED(t){let n={};for(let[r,i]of Object.entries(t.children)){let o=ED(i);if(r===K&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}let e=new be(t.segments,n);return pA(e)}function pA(t){if(t.numberOfChildren===1&&t.children[K]){let n=t.children[K];return new be(t.segments.concat(n.segments),n.children)}return t}function Cr(t){return t instanceof Bt}function xD(t,n,e=null,r=null,i=new wr){let o=ID(t);return SD(o,n,e,r,i)}function ID(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new be(o.url,s);return o===t&&(n=a),a}let r=e(t.root),i=CD(r);return n??i}function SD(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return kp(o,o,o,e,r,i);let s=mA(n);if(s.toRoot())return kp(o,o,new be([],{}),e,r,i);let a=gA(s,o,t),l=a.processChildren?Ls(a.segmentGroup,a.index,s.commands):TD(a.segmentGroup,a.index,s.commands);return kp(o,a.segmentGroup,l,e,r,i)}function Vc(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Bs(t){return typeof t=="object"&&t!=null&&t.outlets}function lD(t,n,e){t||="\u0275";let r=new Bt;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function kp(t,n,e,r,i,o){let s={};for(let[c,d]of Object.entries(r??{}))s[c]=Array.isArray(d)?d.map(f=>lD(c,f,o)):lD(c,d,o);let a;t===n?a=e:a=MD(t,n,e);let l=CD(ED(a));return new Bt(l,s,i)}function MD(t,n,e){let r={};return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=MD(o,n,e)}),new be(t.segments,r)}var jc=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&Vc(r[0]))throw new E(4003,!1);let i=r.find(Bs);if(i&&i!==KT(r))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function mA(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new jc(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new jc(e,n,r)}var ao=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function gA(t,n,e){if(t.isAbsolute)return new ao(n,!0,0);if(!e)return new ao(n,!1,NaN);if(e.parent===null)return new ao(e,!0,0);let r=Vc(t.commands[0])?0:1,i=e.segments.length-1+r;return vA(e,i,t.numberOfDoubleDots)}function vA(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new E(4005,!1);i=r.segments.length}return new ao(r,!1,i-o)}function bA(t){return Bs(t[0])?t[0].outlets:{[K]:t}}function TD(t,n,e){if(t??=new be([],{}),t.segments.length===0&&t.hasChildren())return Ls(t,n,e);let r=yA(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new be(t.segments.slice(0,r.pathIndex),{});return o.children[K]=new be(t.segments.slice(r.pathIndex),t.children),Ls(o,0,i)}else return r.match&&i.length===0?new be(t.segments,{}):r.match&&!t.hasChildren()?jp(t,n,e):r.match?Ls(t,0,i):jp(t,n,e)}function Ls(t,n,e){if(e.length===0)return new be(t.segments,{});{let r=bA(e),i={};if(Object.keys(r).some(o=>o!==K)&&t.children[K]&&t.numberOfChildren===1&&t.children[K].segments.length===0){let o=Ls(t.children[K],n,e);return new be(t.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=TD(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new be(t.segments,i)}}function yA(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let s=t.segments[i],a=e[r];if(Bs(a))break;let l=`${a}`,c=r<e.length-1?e[r+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!dD(l,c,s))return o;r+=2}else{if(!dD(l,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function jp(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Bs(o)){let l=_A(o.outlets);return new be(r,l)}if(i===0&&Vc(e[0])){let l=t.segments[n];r.push(new Dr(l.path,cD(e[0]))),i++;continue}let s=Bs(o)?o.outlets[K]:`${o}`,a=i<e.length-1?e[i+1]:null;s&&a&&Vc(a)?(r.push(new Dr(s,cD(a))),i+=2):(r.push(new Dr(s,{})),i++)}return new be(r,{})}function _A(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[e]=jp(new be([],{}),0,r))}),n}function cD(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function dD(t,n,e){return t==e.path&&Nn(n,e.parameters)}var Vs="imperative",tt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(tt||{}),Ht=class{id;url;constructor(n,e){this.id=n,this.url=e}},gi=class extends Ht{type=tt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r="imperative",i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},On=class extends Ht{urlAfterRedirects;type=tt.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ht=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ht||{}),Hs=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Hs||{}),Xt=class extends Ht{reason;code;type=tt.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function AD(t){return t instanceof Xt&&(t.code===ht.Redirect||t.code===ht.SupersededByNewNavigation)}var Xn=class extends Ht{reason;code;type=tt.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}},vi=class extends Ht{error;target;type=tt.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Us=class extends Ht{urlAfterRedirects;state;type=tt.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bc=class extends Ht{urlAfterRedirects;state;type=tt.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hc=class extends Ht{urlAfterRedirects;state;shouldActivate;type=tt.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Uc=class extends Ht{urlAfterRedirects;state;type=tt.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zc=class extends Ht{urlAfterRedirects;state;type=tt.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$c=class{route;type=tt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Wc=class{route;type=tt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Gc=class{snapshot;type=tt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qc=class{snapshot;type=tt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zc=class{snapshot;type=tt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yc=class{snapshot;type=tt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var co=class{},zs=class{},uo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function DA(t){return!(t instanceof co)&&!(t instanceof uo)&&!(t instanceof zs)}var Qc=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new go(this.rootInjector)}},go=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Qc(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(r){return new(r||t)(P(ge))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kc=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Bp(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Bp(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Hp(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return Hp(n,this._root).map(e=>e.value)}};function Bp(t,n){if(t===n.value)return n;for(let e of n.children){let r=Bp(t,e);if(r)return r}return null}function Hp(t,n){if(t===n.value)return[n];for(let e of n.children){let r=Hp(t,e);if(r.length)return r.unshift(n),r}return[]}var jt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function so(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var $s=class extends Kc{snapshot;constructor(n,e){super(n),this.snapshot=e,Qp(this,n)}toString(){return this.snapshot.toString()}};function RD(t,n){let e=wA(t,n),r=new Be([new Dr("",{})]),i=new Be({}),o=new Be({}),s=new Be({}),a=new Be(""),l=new Ut(r,i,s,a,o,K,t,e.root);return l.snapshot=e.root,new $s(new jt(l,[]),e)}function wA(t,n){let e={},r={},i={},s=new fo([],e,i,"",r,K,t,null,{},n);return new Ws("",new jt(s,[]))}var Ut=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,r,i,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(Y(c=>c[Zs]))??z(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Y(n=>mi(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Y(n=>mi(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Yp(t,n,e="emptyOnly"){let r,{routeConfig:i}=t;return n!==null&&(e==="always"||i?.path===""||!n.component&&!n.routeConfig?.loadComponent)?r={params:g(g({},n.params),t.params),data:g(g({},n.data),t.data),resolve:g(g(g(g({},t.data),n.data),i?.data),t._resolvedData)}:r={params:g({},t.params),data:g({},t.data),resolve:g(g({},t.data),t._resolvedData??{})},i&&ND(i)&&(r.resolve[Zs]=i.title),r}var fo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Zs]}constructor(n,e,r,i,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=mi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=mi(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(r=>r.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ws=class extends Kc{url;constructor(n,e){super(e),this.url=n,Qp(this,e)}toString(){return kD(this._root)}};function Qp(t,n){n.value._routerState=t,n.children.forEach(e=>Qp(t,e))}function kD(t){let n=t.children.length>0?` { ${t.children.map(kD).join(", ")} } `:"";return`${t.value}${n}`}function Np(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Nn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Nn(n.params,e.params)||t.paramsSubject.next(e.params),QT(n.url,e.url)||t.urlSubject.next(e.url),Nn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Up(t,n){let e=Nn(t.params,n.params)&&tA(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||Up(t.parent,n.parent))}function ND(t){return typeof t.title=="string"||t.title===null}var OD=new v(""),Ys=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=K;activateEvents=new O;deactivateEvents=new O;attachEvents=new O;detachEvents=new O;routerOutletData=to();parentContexts=u(go);location=u(ot);changeDetector=u(Ve);inputBinder=u(td,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new zp(e,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[We]})}return t})(),zp=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===Ut?this.route:n===go?this.childContexts:n===OD?this.outletData:this.parent.get(n,e)}},td=new v("");var Kp=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,i){r&1&&ce(0,"router-outlet")},dependencies:[Ys],encapsulation:2})}return t})();function Xp(t){let n=t.children&&t.children.map(Xp),e=n?Z(g({},t),{children:n}):g({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==K&&(e.component=Kp),e}function CA(t,n,e){let r=Gs(t,n._root,e?e._root:void 0);return new $s(r,n)}function Gs(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=n.value;let i=EA(t,n,e);return new jt(r,i)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Gs(t,a)),s}}let r=xA(n.value),i=n.children.map(o=>Gs(t,o));return new jt(r,i)}}function EA(t,n,e){return n.children.map(r=>{for(let i of e.children)if(t.shouldReuseRoute(r.value,i.value.snapshot))return Gs(t,r,i);return Gs(t,r)})}function xA(t){return new Ut(new Be(t.url),new Be(t.params),new Be(t.queryParams),new Be(t.fragment),new Be(t.data),t.outlet,t.component,t)}var ho=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},FD="ngNavigationCancelingError";function Xc(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=Cr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=PD(!1,ht.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function PD(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[FD]=!0,e.cancellationCode=n,e}function IA(t){return LD(t)&&Cr(t.url)}function LD(t){return!!t&&t[FD]}var $p=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Np(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=so(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=so(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=so(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(n,e,r){let i=so(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Yc(o.value.snapshot))}),n.children.length&&this.forwardEvent(new qc(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Np(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Np(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}},Jc=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},lo=class{component;route;constructor(n,e){this.component=n,this.route=e}};function SA(t,n,e){let r=t._root,i=n?n._root:null;return Ps(r,i,e,[r.value])}function MA(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function vo(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t=="function"&&!Ju(t)?t:n.get(t):r}function Ps(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=so(n);return t.children.forEach(s=>{TA(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>js(a,e.getContext(s),i)),i}function TA(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=AA(s,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Jc(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ps(t,n,a?a.children:null,r,i):Ps(t,n,e,r,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new lo(a.outlet.component,s))}else s&&js(n,a,i),i.canActivateChecks.push(new Jc(r)),o.component?Ps(t,null,a?a.children:null,r,i):Ps(t,null,e,r,i);return i}function AA(t,n,e){if(typeof e=="function")return Je(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!pi(t.url,n.url);case"pathParamsOrQueryParamsChange":return!pi(t.url,n.url)||!Nn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Up(t,n)||!Nn(t.queryParams,n.queryParams);default:return!Up(t,n)}}function js(t,n,e){let r=so(t),i=t.value;Object.entries(r).forEach(([o,s])=>{i.component?n?js(s,n.children.getContext(o),e):js(s,null,e):js(s,n,e)}),i.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new lo(n.outlet.component,i)):e.canDeactivateChecks.push(new lo(null,i)):e.canDeactivateChecks.push(new lo(null,i))}function Qs(t){return typeof t=="function"}function RA(t){return typeof t=="boolean"}function kA(t){return t&&Qs(t.canLoad)}function NA(t){return t&&Qs(t.canActivate)}function OA(t){return t&&Qs(t.canActivateChild)}function FA(t){return t&&Qs(t.canDeactivate)}function PA(t){return t&&Qs(t.canMatch)}function VD(t){return t instanceof Vr||t?.name==="EmptyError"}var Nc=Symbol("INITIAL_VALUE");function po(){return He(t=>Bo(t.map(n=>n.pipe(Xe(1),rt(Nc)))).pipe(Y(n=>{for(let e of n)if(e!==!0){if(e===Nc)return Nc;if(e===!1||LA(e))return e}return!0}),ue(n=>n!==Nc),Xe(1)))}function LA(t){return Cr(t)||t instanceof ho}function jD(t){return t.aborted?z(void 0).pipe(Xe(1)):new L(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function BD(t){return Ce(jD(t))}function VA(t){return nt(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?z(Z(g({},n),{guardsResult:!0})):jA(o,e,r).pipe(nt(s=>s&&RA(s)?BA(e,i,t):z(s)),Y(s=>Z(g({},n),{guardsResult:s})))})}function jA(t,n,e){return Re(t).pipe(nt(r=>WA(r.component,r.route,e,n)),jn(r=>r!==!0,!0))}function BA(t,n,e){return Re(n).pipe(Ni(r=>Cn(UA(r.route.parent,e),HA(r.route,e),$A(t,r.path),zA(t,r.route))),jn(r=>r!==!0,!0))}function HA(t,n){return t!==null&&n&&n(new Zc(t)),z(!0)}function UA(t,n){return t!==null&&n&&n(new Gc(t)),z(!0)}function zA(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return z(!0);let r=e.map(i=>jr(()=>{let o=n._environmentInjector,s=vo(i,o),a=NA(s)?s.canActivate(n,t):Je(o,()=>s(n,t));return bi(a).pipe(jn())}));return z(r).pipe(po())}function $A(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>MA(o)).filter(o=>o!==null).map(o=>jr(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=vo(a,l),d=OA(c)?c.canActivateChild(e,t):Je(l,()=>c(e,t));return bi(d).pipe(jn())});return z(s).pipe(po())}));return z(i).pipe(po())}function WA(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return z(!0);let o=i.map(s=>{let a=n._environmentInjector,l=vo(s,a),c=FA(l)?l.canDeactivate(t,n,e,r):Je(a,()=>l(t,n,e,r));return bi(c).pipe(jn())});return z(o).pipe(po())}function GA(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return z(!0);let s=o.map(a=>{let l=vo(a,t),c=kA(l)?l.canLoad(n,e):Je(t,()=>l(n,e)),d=bi(c);return i?d.pipe(BD(i)):d});return z(s).pipe(po(),HD(r))}function HD(t){return Tu(lt(n=>{if(typeof n!="boolean")throw Xc(t,n)}),Y(n=>n===!0))}function qA(t,n,e,r,i,o){let s=n.canMatch;if(!s||s.length===0)return z(!0);let a=s.map(l=>{let c=vo(l,t),d=PA(c)?c.canMatch(n,e,i):Je(t,()=>c(n,e,i));return bi(d).pipe(BD(o))});return z(a).pipe(po(),HD(r))}var Kn=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},qs=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function ZA(t){throw new E(4e3,!1)}function YA(t){throw PD(!1,ht.GuardRejected)}var Wp=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[K])throw ZA(`${n.redirectTo}`);i=i.children[K]}}async applyRedirectCommands(n,e,r,i,o){let s=await QA(e,i,o);if(s instanceof Bt)throw new qs(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]==="/")throw new qs(a);return a}applyRedirectCreateUrlTree(n,e,r,i){let o=this.createSegmentGroup(n,e.root,r,i);return new Bt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=e[a]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,r,i)}),new be(o,s)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new E(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function QA(t,n,e){if(typeof t=="string")return Promise.resolve(t);let r=t;return Lc(bi(Je(e,()=>r(n))))}function KA(t,n){return t.providers&&!t._injector&&(t._injector=Cs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function bn(t){return t.outlet||K}function XA(t,n){let e=t.filter(r=>bn(r)===n);return e.push(...t.filter(r=>bn(r)!==n)),e}var Gp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function UD(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function JA(t,n,e,r,i,o,s){let a=zD(t,n,e);if(!a.matched)return z(a);let l=UD(o(a));return r=KA(n,r),qA(r,n,e,i,l,s).pipe(Y(c=>c===!0?a:g({},Gp)))}function zD(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?g({},Gp):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||hD)(e,t,n);if(!i)return g({},Gp);let o={};Object.entries(i.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=i.consumed.length>0?g(g({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function uD(t,n,e,r,i){return e.length>0&&nR(t,e,r,i)?{segmentGroup:new be(n,tR(r,new be(e,t.children))),slicedSegments:[]}:e.length===0&&rR(t,e,r)?{segmentGroup:new be(t.segments,eR(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new be(t.segments,t.children),slicedSegments:e}}function eR(t,n,e,r){let i={};for(let o of e)if(nd(t,n,o)&&!r[bn(o)]){let s=new be([],{});i[bn(o)]=s}return g(g({},r),i)}function tR(t,n){let e={};e[K]=n;for(let r of t)if(r.path===""&&bn(r)!==K){let i=new be([],{});e[bn(r)]=i}return e}function nR(t,n,e,r){return e.some(i=>!nd(t,n,i)||!(bn(i)!==K)?!1:!(r!==void 0&&bn(i)===r))}function rR(t,n,e){return e.some(r=>nd(t,n,r))}function nd(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function iR(t,n,e){return n.length===0&&!t.children[e]}var qp=class{};async function oR(t,n,e,r,i,o,s="emptyOnly",a){return new Zp(t,n,e,r,i,s,o,a).recognize()}var sR=31,Zp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Wp(this.urlSerializer,this.urlTree)}noMatchError(n){return new E(4002,`'${n.segmentGroup}'`)}async recognize(){let n=uD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),i=new jt(r,e),o=new Ws("",i),s=xD(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new fo([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),K,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,K,e),rootSnapshot:e}}catch(r){if(r instanceof qs)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Kn?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let s=await this.processSegment(n,e,r,r.segments,i,!0,o);return s instanceof jt?[s]:[]}async processChildren(n,e,r,i){let o=[];for(let l of Object.keys(r.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=r.children[l],d=XA(e,l),f=await this.processSegmentGroup(n,d,c,l,i);s.push(...f)}let a=$D(s);return aR(a),a}async processSegment(n,e,r,i,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,r,i,o,s,a)}catch(c){if(c instanceof Kn||VD(c))continue;throw c}if(iR(r,i,o))return new qp;throw new Kn(r)}async processSegmentAgainstRoute(n,e,r,i,o,s,a,l){if(bn(r)!==s&&(s===K||!nd(i,o,r)))throw new Kn(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s,l);throw new Kn(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=zD(e,i,o);if(!l)throw new Kn(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>sR&&(this.allowRedirects=!1));let p=this.createSnapshot(n,i,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let m=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,f,UD(p),n),w=await this.applyRedirects.lineralizeSegments(i,m);return this.processSegment(n,r,e,w.concat(h),s,!1,a)}createSnapshot(n,e,r,i,o){let s=new fo(r,i,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,cR(e),bn(e),e.component??e._loadedComponent??null,e,dR(e),n),a=Yp(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,r,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Qe=>this.createSnapshot(n,r,Qe.consumedSegments,Qe.parameters,s),l=await Lc(JA(e,r,i,n,this.urlSerializer,a,this.abortSignal));if(r.path==="**"&&(e.children={}),!l?.matched)throw new Kn(e);n=r._injector??n;let{routes:c}=await this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=l,m=this.createSnapshot(n,r,h,f,s),{segmentGroup:w,slicedSegments:I}=uD(e,h,p,c,o);if(I.length===0&&w.hasChildren()){let Qe=await this.processChildren(d,c,w,m);return new jt(m,Qe)}if(c.length===0&&I.length===0)return new jt(m,[]);let T=bn(r)===o,me=await this.processSegment(d,c,w,I,T?K:o,!0,m);return new jt(m,me instanceof jt?[me]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Lc(GA(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw YA(e)}return{routes:[],injector:n}}};function aR(t){t.sort((n,e)=>n.value.outlet===K?-1:e.value.outlet===K?1:n.value.outlet.localeCompare(e.value.outlet))}function lR(t){let n=t.value.routeConfig;return n&&n.path===""}function $D(t){let n=[],e=new Set;for(let r of t){if(!lR(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=$D(r.children);n.push(new jt(r.value,i))}return n.filter(r=>!e.has(r))}function cR(t){return t.data||{}}function dR(t){return t.resolve||{}}function uR(t,n,e,r,i,o,s){return nt(async a=>{let{state:l,tree:c}=await oR(t,n,e,r,a.extractedUrl,i,o,s);return Z(g({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function fR(t){return nt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return z(n);let i=new Set(r.map(a=>a.route)),o=new Set;for(let a of i)if(!o.has(a))for(let l of WD(a))o.add(l);let s=0;return Re(o).pipe(Ni(a=>i.has(a)?hR(a,e,t):(a.data=Yp(a,a.parent,t).resolve,z(void 0))),lt(()=>s++),el(1),nt(a=>s===o.size?z(n):ke))})}function WD(t){let n=t.children.map(e=>WD(e)).flat();return[t,...n]}function hR(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!ND(r)&&(i[Zs]=r.title),jr(()=>(t.data=Yp(t,t.parent,e).resolve,pR(i,t,n).pipe(Y(o=>(t._resolvedData=o,t.data=g(g({},t.data),o),null)))))}function pR(t,n,e){let r=Fp(t);if(r.length===0)return z({});let i={};return Re(r).pipe(nt(o=>mR(t[o],n,e).pipe(jn(),lt(s=>{if(s instanceof ho)throw Xc(new wr,s);i[o]=s}))),el(1),Y(()=>i),Ho(o=>VD(o)?ke:Nu(o)))}function mR(t,n,e){let r=n._environmentInjector,i=vo(t,r),o=i.resolve?i.resolve(n,e):Je(r,()=>i(n,e));return bi(o)}function fD(t){return He(n=>{let e=t(n);return e?Re(e).pipe(Y(()=>n)):z(n)})}var Jp=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===K);return r}getResolvedTitleForRoute(e){return e.data[Zs]}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(GD),providedIn:"root"})}return t})(),GD=(()=>{class t extends Jp{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||t)(P(oD))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bo=new v("",{factory:()=>({})}),Ks=new v(""),qD=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(rp);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await mD(Je(e,()=>r.loadComponent())),s=await QD(YD(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await ZD(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function ZD(t,n,e,r){let i=await mD(Je(e,()=>t.loadChildren())),o=await QD(YD(i)),s;o instanceof fc||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),r&&r(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(Ks,[],{optional:!0,self:!0}).flat()),{routes:l.map(Xp),injector:a,factory:d}}function gR(t){return t&&typeof t=="object"&&"default"in t}function YD(t){return gR(t)?t.default:t}async function QD(t){return t}var rd=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(vR),providedIn:"root"})}return t})(),vR=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),KD=new v("");var bR=()=>{},XD=new v(""),JD=(()=>{class t{currentNavigation=F(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=F(null);events=new C;transitionAbortWithErrorSubject=new C;configLoader=u(qD);environmentInjector=u(ge);destroyRef=u(yt);urlSerializer=u(mo);rootContexts=u(go);location=u(yr);inputBindingEnabled=u(td,{optional:!0})!==null;titleStrategy=u(Jp);options=u(bo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(rd);createViewTransition=u(KD,{optional:!0});navigationErrorHandler=u(XD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>z(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new $c(i)),r=i=>this.events.next(new Wc(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;ve(()=>{this.transitions?.next(Z(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Be(null),this.transitions.pipe(ue(r=>r!==null),He(r=>{let i=!1,o=new AbortController,s=()=>!i&&this.currentTransition?.id===r.id;return z(r).pipe(He(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",ht.SupersededByNewNavigation),ke;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?Z(g({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new Xn(a.id,this.urlSerializer.serialize(a.rawUrl),"",Hs.IgnoredSameUrlNavigation)),a.resolve(!1),ke;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return z(a).pipe(He(f=>(this.events.next(new gi(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?ke:Promise.resolve(f))),uR(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),lt(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new zs)}),He(f=>Re(r.routesRecognizeHandler.deferredHandle??z(void 0)).pipe(Y(()=>f))),lt(()=>{let f=new Us(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:m,extras:w}=a,I=new gi(f,this.urlSerializer.serialize(h),p,m);this.events.next(I);let T=RD(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=Z(g({},a),{targetSnapshot:T,urlAfterRedirects:h,extras:Z(g({},w),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(me=>(me.finalUrl=h,me)),z(r)}else return this.events.next(new Xn(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Hs.IgnoredByUrlHandlingStrategy)),a.resolve(!1),ke}),Y(a=>{let l=new Bc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=r=Z(g({},a),{guards:SA(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),VA(a=>this.events.next(a)),He(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Xc(this.urlSerializer,a.guardsResult);let l=new Hc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return ke;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",ht.GuardRejected),ke;if(a.guards.canActivateChecks.length===0)return z(a);let c=new Uc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return ke;let d=!1;return z(a).pipe(fR(this.paramsInheritanceStrategy),lt({next:()=>{d=!0;let f=new zc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",ht.NoDataFromResolver)}}))}),fD(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},c=l(a.targetSnapshot.root);return c.length===0?z(a):Re(Promise.all(c).then(()=>a))}),fD(()=>this.afterPreactivation()),He(()=>{let{currentSnapshot:a,targetSnapshot:l}=r,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Re(c).pipe(Y(()=>r)):z(r)}),Xe(1),He(a=>{let l=CA(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=r=a=Z(g({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new co);let c=r.beforeActivateHandler.deferredHandle;return c?Re(c.then(()=>a)):z(a)}),lt(a=>{new $p(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(i=!0,this.currentNavigation.update(l=>(l.abort=bR,l)),this.lastSuccessfulNavigation.set(ve(this.currentNavigation)),this.events.next(new On(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Ce(jD(o.signal).pipe(ue(()=>!i&&!r.targetRouterState),lt(()=>{this.cancelNavigationTransition(r,o.signal.reason+"",ht.Aborted)}))),lt({complete:()=>{i=!0}}),Ce(this.transitionAbortWithErrorSubject.pipe(lt(a=>{throw a}))),Uo(()=>{o.abort(),i||this.cancelNavigationTransition(r,"",ht.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ho(a=>{if(i=!0,this.destroyed)return r.resolve(!1),ke;if(LD(a))this.events.next(new Xt(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),IA(a)?this.events.next(new uo(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let l=new vi(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let c=Je(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof ho){let{message:d,cancellationCode:f}=Xc(this.urlSerializer,c);this.events.next(new Xt(r.id,this.urlSerializer.serialize(r.extractedUrl),d,f)),this.events.next(new uo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(c)}}return ke}))}))}cancelNavigationTransition(e,r,i){let o=new Xt(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=ve(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yR(t){return t!==Vs}var ew=new v("");var tw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(_R),providedIn:"root"})}return t})(),ed=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},_R=(()=>{class t extends ed{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),id=(()=>{class t{urlSerializer=u(mo);options=u(bo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(yr);urlHandlingStrategy=u(rd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Bt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=i??o;return s instanceof Bt?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=RD(null,u(ge));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:()=>u(DR),providedIn:"root"})}return t})(),DR=(()=>{class t extends id{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{e(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof gi?this.updateStateMemento():e instanceof Xn?this.commitTransition(r):e instanceof Us?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof co?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Xt&&!AD(e)?this.restoreHistory(r):e instanceof vi?this.restoreHistory(r,!0):e instanceof On&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:s,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=g(g({},a),this.generateNgRouterState(o,l,r));this.location.replaceState(e,"",c)}else{let l=g(g({},a),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,"",l)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:r},this.routerUrlState(i)):g({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function em(t,n){t.events.pipe(ue(e=>e instanceof On||e instanceof Xt||e instanceof vi||e instanceof Xn),Y(e=>e instanceof On||e instanceof Xn?0:(e instanceof Xt?e.code===ht.Redirect||e.code===ht.SupersededByNewNavigation:!1)?2:1),ue(e=>e!==2),Xe(1)).subscribe(()=>{n()})}var yo=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Kh);stateManager=u(id);options=u(bo,{optional:!0})||{};pendingTasks=u(Gn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(JD);urlSerializer=u(mo);location=u(yr);urlHandlingStrategy=u(rd);injector=u(ge);_events=new C;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(tw);injectorCleanup=u(ew,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Ks,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(td,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new de;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=ve(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Xt&&r.code!==ht.Redirect&&r.code!==ht.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof On)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof uo){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),l=g({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||yR(i.source)},s);this.scheduleNavigation(a,Vs,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}DA(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vs,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let s=i?.navigationId?i:null,a=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=Z(g({},o),{browserUrl:e})),i){let c=g({},i);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,r,s,o).catch(c=>{this.disposed||this.injector.get(Ot)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ve(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Xp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=i?i.snapshot:this.routerState.snapshot.root;f=ID(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return SD(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Cr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Vs,null,r)}navigate(e,r={skipLocationChange:!1}){return wR(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ar(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,r){let i;if(r===!0?i=g({},vD):r===!1?i=g({},Pp):i=g(g({},Pp),r),Cr(e))return sD(this.currentUrlTree,e,i);let o=this.parseUrl(e);return sD(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});let d=this.pendingTasks.add();return em(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wR(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new E(4008,!1)}var xR=(()=>{class t{router=u(yo);stateManager=u(id);fragment=F("");queryParams=F({});path=F("");serializer=u(mo);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof On&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new Bt(r)))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),od=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Is("href"),{optional:!0});reactiveHref=ip(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ve(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ve(this._target)}_target=F(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ve(this._queryParams)}_queryParams=F(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ve(this._fragment)}_fragment=F(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ve(this._queryParamsHandling)}_queryParamsHandling=F(void 0);set state(e){this._state.set(e)}get state(){return ve(this._state)}_state=F(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ve(this._info)}_info=F(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ve(this._relativeTo)}_relativeTo=F(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ve(this._preserveFragment)}_preserveFragment=F(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ve(this._skipLocationChange)}_skipLocationChange=F(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ve(this._replaceUrl)}_replaceUrl=F(!1);isAnchorElement;onChanges=new C;applicationErrorHandler=u(Ot);options=u(bo,{optional:!0});reactiveRouterState=u(xR);constructor(e,r,i,o,s,a){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=F(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Cr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,r,i,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||r||i||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}_urlTree=st(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let r=this.routerLinkInput();return r===null||!this.router.createUrlTree?null:Cr(r)?r:this.router.createUrlTree(r,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,r)=>this.computeHref(e)===this.computeHref(r)});get urlTree(){return ve(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(r){return new(r||t)(U(yo),U(Ut),vs("tabindex"),U(Me),U(k),U(ro))};static \u0275dir=R({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(r,i){r&1&&fe("click",function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&Ee("href",i.reactiveHref(),kh)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ie],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ie],replaceUrl:[2,"replaceUrl","replaceUrl",ie],routerLink:"routerLink"},features:[We]})}return t})();var IR=new v("");function tm(t,...n){return Qr([{provide:Ks,multi:!0,useValue:t},[],{provide:Ut,useFactory:SR},{provide:hc,multi:!0,useFactory:MR},n.map(e=>e.\u0275providers)])}function SR(){return u(yo).routerState.root}function MR(){let t=u(ne);return n=>{let e=t.get(Yt);if(n!==e.components[0])return;let r=t.get(yo),i=t.get(TR);t.get(AR)===1&&r.initialNavigation(),t.get(RR,null,{optional:!0})?.setUpPreloading(),t.get(IR,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var TR=new v("",{factory:()=>new C}),AR=new v("",{factory:()=>1});var RR=new v("");var _o=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=F(!0);isLoading=this.loading.asReadonly();error=F("");errorMessage=this.error.asReadonly();teams=F([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(P(hi))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var OR=new v("cdk-dir-doc",{providedIn:"root",factory:()=>u(Q)}),FR=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function nw(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?FR.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var xt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=F("ltr");change=new O;constructor(){let e=u(OR,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(nw(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ze=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({})}return t})();var PR=["*"];var LR=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],VR=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],jR=new v("MAT_CARD_CONFIG"),rw=(()=>{class t{appearance;constructor(){let e=u(jR,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,i){r&2&&H("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:PR,decls:1,vars:0,template:function(r,i){r&1&&(Se(),W(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),iw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var ow=(()=>{class t{align="start";static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),sw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:VR,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,i){r&1&&(Se(LR),W(0),xe(1,"div",0),W(2,1),Ie(),W(3,2))},encapsulation:2,changeDetection:0})}return t})();function Xs(t){return t.buttons===0||t.detail===0}function Js(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var nm;function aw(){if(nm==null){let t=typeof document<"u"?document.head:null;nm=!!(t&&(t.createShadowRoot||t.attachShadow))}return nm}function rm(t){if(aw()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function im(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function pt(t){return t.composedPath?t.composedPath()[0]:t.target}var om;try{om=typeof Intl<"u"&&Intl.v8BreakIterator}catch{om=!1}var he=(()=>{class t{_platformId=u(ci);isBrowser=this._platformId?H_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||om)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ea;function lw(){if(ea==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ea=!0}))}finally{ea=ea||!1}return ea}function Do(t){return lw()?t:!!t.capture}function Er(t,n=0){return cw(t)?Number(t):arguments.length===2?n:0}function cw(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function wt(t){return t instanceof k?t.nativeElement:t}var dw=new v("cdk-input-modality-detector-options"),uw={ignoreKeys:[18,17,224,91,16]},fw=650,sm={passive:!0,capture:!0},hw=(()=>{class t{_platform=u(he);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Be(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=pt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<fw||(this._modality.next(Xs(e)?"keyboard":"mouse"),this._mostRecentTarget=pt(e))};_onTouchstart=e=>{if(Js(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=pt(e)};constructor(){let e=u(M),r=u(Q),i=u(dw,{optional:!0});if(this._options=g(g({},uw),i),this.modalityDetected=this._modality.pipe(Hr(1)),this.modalityChanged=this.modalityDetected.pipe(Ja()),this._platform.isBrowser){let o=u(Ue).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,sm),o.listen(r,"mousedown",this._onMousedown,sm),o.listen(r,"touchstart",this._onTouchstart,sm)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ta=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ta||{}),pw=new v("cdk-focus-monitor-default-options"),sd=Do({passive:!0,capture:!0}),yi=(()=>{class t{_ngZone=u(M);_platform=u(he);_inputModalityDetector=u(hw);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(Q);_stopInputModalityDetector=new C;constructor(){let e=u(pw,{optional:!0});this._detectionMode=e?.detectionMode||ta.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=pt(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=wt(e);if(!this._platform.isBrowser||i.nodeType!==1)return z();let o=rm(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new C,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let r=wt(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=wt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ta.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===ta.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?fw:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=pt(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,sd),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,sd)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ce(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,sd),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,sd),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),am=(()=>{class t{_elementRef=u(k);_focusMonitor=u(yi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new O;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(r=>{this._focusOrigin=r,this.cdkFocusChange.emit(r)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var ad=new WeakMap,mt=(()=>{class t{_appRef;_injector=u(ne);_environmentInjector=u(ge);load(e){let r=this._appRef=this._appRef||this._injector.get(Yt),i=ad.get(r);i||(i={loaders:new Set,refs:[]},ad.set(r,i),r.onDestroy(()=>{ad.get(r)?.refs.forEach(o=>o.destroy()),ad.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Cc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ld=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})();function Jn(t){return Array.isArray(t)?t:[t]}var mw=new Set,_i,cd=(()=>{class t{_platform=u(he);_nonce=u(di,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):HR}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&BR(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function BR(t,n){if(!mw.has(t))try{_i||(_i=document.createElement("style"),n&&_i.setAttribute("nonce",n),_i.setAttribute("type","text/css"),document.head.appendChild(_i)),_i.sheet&&(_i.sheet.insertRule(`@media ${t} {body{ }}`,0),mw.add(t))}catch(e){console.error(e)}}function HR(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var na=(()=>{class t{_mediaMatcher=u(cd);_zone=u(M);_queries=new Map;_destroySubject=new C;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return gw(Jn(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=gw(Jn(e)).map(s=>this._registerQuery(s).observable),o=Bo(i);return o=Cn(o.pipe(Xe(1)),o.pipe(Hr(1),nn(0))),o.pipe(Y(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let r=this._mediaMatcher.matchMedia(e),o={observable:new L(s=>{let a=l=>this._zone.run(()=>s.next(l));return r.addListener(a),()=>{r.removeListener(a)}}).pipe(rt(r),Y(({matches:s})=>({query:e,matches:s})),Ce(this._destroySubject)),mql:r};return this._queries.set(e,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gw(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function UR(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var vw=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zR=(()=>{class t{_mutationObserverFactory=u(vw);_observedElements=new Map;_ngZone=u(M);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,r)=>this._cleanupObserver(r))}observe(e){let r=wt(e);return new L(i=>{let s=this._observeElement(r).pipe(Y(a=>a.filter(l=>!UR(l))),ue(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{i.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(r)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let r=new C,i=this._mutationObserverFactory.create(o=>r.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:r,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:r,stream:i}=this._observedElements.get(e);r&&r.disconnect(),i.complete(),this._observedElements.delete(e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bw=(()=>{class t{_contentObserver=u(zR);_elementRef=u(k);event=new O;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Er(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(nn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ie],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),yw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({providers:[vw]})}return t})();var ud=(()=>{class t{_platform=u(he);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return WR(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let r=$R(JR(e));if(r&&(_w(r)===-1||!this.isVisible(r)))return!1;let i=e.nodeName.toLowerCase(),o=_w(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!KR(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,r){return XR(e)&&!this.isDisabled(e)&&(r?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $R(t){try{return t.frameElement}catch{return null}}function WR(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function GR(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function qR(t){return YR(t)&&t.type=="hidden"}function ZR(t){return QR(t)&&t.hasAttribute("href")}function YR(t){return t.nodeName.toLowerCase()=="input"}function QR(t){return t.nodeName.toLowerCase()=="a"}function Dw(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function _w(t){if(!Dw(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function KR(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function XR(t){return qR(t)?!1:GR(t)||ZR(t)||t.hasAttribute("contenteditable")||Dw(t)}function JR(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var dd=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,r,i,o=!1,s){this._element=n,this._checker=e,this._ngZone=r,this._document=i,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let r=this._getFirstTabbableElement(e);return r?.focus(n),!!r}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=0;r<e.length;r++){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=e.length-1;r>=0;r--){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?qe(n,{injector:this._injector}):setTimeout(n)}},lm=(()=>{class t{_checker=u(ud);_ngZone=u(M);_document=u(Q);_injector=u(ne);constructor(){u(mt).load(ld)}create(e,r=!1){return new dd(e,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ek=200,fd=class{_letterKeyStream=new C;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C;selectedItem=this._selectedItem;constructor(n,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:ek;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(lt(e=>this._pressedLetters.push(e)),nn(n),ue(()=>this._pressedLetters.length>0),Y(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Jt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var wo=class{_items;_activeItemIndex=F(-1);_activeItem=F(null);_wrap=!1;_typeaheadSubscription=de.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof un?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):qn(n)&&(this._effectRef=ln(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new C;change=new C;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new fd(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||Jt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),r=typeof n=="number"?n:e.indexOf(n),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+n*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=e,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return qn(this._items)?this._items():this._items instanceof un?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let r=n.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var ra=class extends wo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var ia=class extends wo{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var dm={},gt=class t{_appId=u(Xi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),dm.hasOwnProperty(n)||(dm[n]=0),`${n}${e?t._infix+"-":""}${dm[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ew=" ";function um(t,n,e){let r=xw(t,n);e=e.trim(),!r.some(i=>i.trim()===e)&&(r.push(e),t.setAttribute(n,r.join(Ew)))}function hd(t,n,e){let r=xw(t,n);e=e.trim();let i=r.filter(o=>o!==e);i.length?t.setAttribute(n,i.join(Ew)):t.removeAttribute(n)}function xw(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var yn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(yn||{}),pd,Di;function md(){if(Di==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Di=!1,Di;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Di=!0;else{let t=Element.prototype.scrollTo;t?Di=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Di=!1}}return Di}function Co(){if(typeof document!="object"||!document)return yn.NORMAL;if(pd==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),r=e.style;r.width="2px",r.height="1px",t.appendChild(e),document.body.appendChild(t),pd=yn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,pd=t.scrollLeft===0?yn.NEGATED:yn.INVERTED),t.remove()}return pd}function fm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Eo,Iw=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function hm(){if(Eo)return Eo;if(typeof document!="object"||!document)return Eo=new Set(Iw),Eo;let t=document.createElement("input");return Eo=new Set(Iw.filter(n=>(t.setAttribute("type",n),t.type===n))),Eo}var Sw={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var tk=new v("MATERIAL_ANIMATIONS"),Mw=null;function nk(){return u(tk,{optional:!0})?.animationsDisabled||u(bs,{optional:!0})==="NoopAnimations"?"di-disabled":(Mw??=u(cd).matchMedia("(prefers-reduced-motion)").matches,Mw?"reduced-motion":"enabled")}function Ye(){return nk()!=="enabled"}function je(t){return t==null?"":typeof t=="string"?t:`${t}px`}function zt(t){return t!=null&&`${t}`!="false"}var en=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(en||{}),pm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=en.HIDDEN;constructor(n,e,r,i=!1){this._renderer=n,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Tw=Do({passive:!0,capture:!0}),mm=class{_events=new Map;addHandler(n,e,r,i){let o=this._events.get(e);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Tw)})}removeHandler(n,e,r){let i=this._events.get(n);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Tw)))}_delegateEventHandler=n=>{let e=pt(n);e&&this._events.get(n.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(n))})}},oa={enterDuration:225,exitDuration:150},rk=800,Aw=Do({passive:!0,capture:!0}),Rw=["mousedown","touchstart"],kw=["mouseup","mouseleave","touchend","touchcancel"],ik=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),sa=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new mm;constructor(n,e,r,i,o){this._target=n,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=wt(r)),o&&o.get(mt).load(ik)}fadeInRipple(n,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},oa),r.animation);r.centered&&(n=i.left+i.width/2,e=i.top+i.height/2);let s=r.radius||ok(n,e,i),a=n-i.left,l=e-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,p=f.transitionDuration,m=h==="none"||p==="0s"||p==="0s, 0s"||i.width===0&&i.height===0,w=new pm(this,d,r,m);d.style.transform="scale3d(1, 1, 1)",w.state=en.FADING_IN,r.persistent||(this._mostRecentTransientRipple=w);let I=null;return!m&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let T=()=>{I&&(I.fallbackTimer=null),clearTimeout(Qe),this._finishRippleTransition(w)},me=()=>this._destroyRipple(w),Qe=setTimeout(me,c+100);d.addEventListener("transitionend",T),d.addEventListener("transitioncancel",me),I={onTransitionEnd:T,onTransitionCancel:me,fallbackTimer:Qe}}),this._activeRipples.set(w,I),(m||!c)&&this._finishRippleTransition(w),w}fadeOutRipple(n){if(n.state===en.FADING_OUT||n.state===en.HIDDEN)return;let e=n.element,r=g(g({},oa),n.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",n.state=en.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=wt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Rw.forEach(r=>{t._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{kw.forEach(e=>{this._triggerElement.addEventListener(e,this,Aw)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===en.FADING_IN?this._startFadeOutTransition(n):n.state===en.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=en.VISIBLE,!r&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=en.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Xs(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+rk;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Js(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===en.VISIBLE||n.config.terminateOnPointerUp&&n.state===en.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Rw.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(kw.forEach(e=>n.removeEventListener(e,this,Aw)),this._pointerUpEventsRegistered=!1))}};function ok(t,n,e){let r=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(r*r+i*i)}var gd=new v("mat-ripple-global-options"),aa=(()=>{class t{_elementRef=u(k);_animationsDisabled=Ye();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(M),r=u(he),i=u(gd,{optional:!0}),o=u(ne);this._globalOptions=i||{},this._rippleRenderer=new sa(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,g(g({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var sk={capture:!0},ak=["focus","mousedown","mouseenter","touchstart"],gm="mat-ripple-loader-uninitialized",vm="mat-ripple-loader-class-name",Nw="mat-ripple-loader-centered",vd="mat-ripple-loader-disabled",Ow=(()=>{class t{_document=u(Q);_animationsDisabled=Ye();_globalRippleOptions=u(gd,{optional:!0});_platform=u(he);_ngZone=u(M);_injector=u(ne);_eventCleanups;_hosts=new Map;constructor(){let e=u(Ue).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ak.map(r=>e.listen(this._document,r,this._onInteraction,sk)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(gm,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute(vm))&&e.setAttribute(vm,r.className||""),r.centered&&e.setAttribute(Nw,""),r.disabled&&e.setAttribute(vd,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(vd,""):e.removeAttribute(vd)}_onInteraction=e=>{let r=pt(e);if(r instanceof HTMLElement){let i=r.closest(`[${gm}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute(vm)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??oa.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??oa.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(vd),rippleConfig:{centered:e.hasAttribute(Nw),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new sa(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(gm)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xo=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var lk=["mat-icon-button",""],ck=["*"],dk=new v("MAT_BUTTON_CONFIG");function Fw(t){return t==null?void 0:no(t)}var bd=(()=>{class t{_elementRef=u(k);_ngZone=u(M);_animationsDisabled=Ye();_config=u(dk,{optional:!0});_focusMonitor=u(yi);_cleanupClick;_renderer=u(Me);_rippleLoader=u(Ow);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(mt).load(xo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(Ee("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),gn(i.color?"mat-"+i.color:""),H("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ie],disabled:[2,"disabled","disabled",ie],ariaDisabled:[2,"aria-disabled","ariaDisabled",ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie],tabIndex:[2,"tabIndex","tabIndex",Fw],_tabindex:[2,"tabindex","_tabindex",Fw]}})}return t})(),bm=(()=>{class t extends bd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[De],attrs:lk,ngContentSelectors:ck,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Se(),ft(0,"span",0),W(1),ft(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Pw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[Ze]})}return t})();var uk=["matButton",""],Vw=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],jw=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],fk=["mat-fab",""];var Lw=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Bw=(()=>{class t extends bd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=hk(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?Lw.get(this._appearance):null,o=Lw.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[De],attrs:uk,ngContentSelectors:jw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Se(Vw),ft(0,"span",0),W(1),xe(2,"span",1),W(3,1),Ie(),W(4,2),ft(5,"span",2)(6,"span",3)),r&2&&H("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function hk(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var pk=new v("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>ym}),ym={color:"accent"},Hw=(()=>{class t extends bd{_options=u(pk,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||ym,this.color=this._options.color||ym.color}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(r,i){r&2&&H("mdc-fab--extended",i.extended)("mat-mdc-extended-fab",i.extended)},inputs:{extended:[2,"extended","extended",ie]},exportAs:["matButton","matAnchor"],features:[De],attrs:fk,ngContentSelectors:jw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Se(Vw),ft(0,"span",0),W(1),xe(2,"span",1),W(3,1),Ie(),W(4,2),ft(5,"span",2)(6,"span",3)),r&2&&H("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var mk=t=>[t,"map"],gk=t=>[t,"convoy"],vk=t=>[t,"shop"],yd=class t{team=to.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:14,consts:[["align","end"],["matButton",""],[1,"buttonContent",3,"routerLink"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[1,"buttonContent"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,r){e&1&&(y(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),S(3),_()(),y(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),ce(7,"img",3),S(8," Map "),_()(),y(9,"button",4)(10,"span",5)(11,"div",6),S(12,"?"),_(),S(13," Convoy "),_()(),y(14,"button",4)(15,"span",5),ce(16,"img",7),S(17," Shop "),_()()()()),e&2&&(D(3),et(" ",r.team().teamName," "),D(3),q("routerLink",vn(8,mk,r.GetTeamNameWithoutSpaces())),D(3),q("disabled",_c(!r.team().showConvoyLink))("routerLink",vn(10,gk,r.GetTeamNameWithoutSpaces())),D(5),q("disabled",_c(!r.team().showShopLink))("routerLink",vn(12,vk,r.GetTeamNameWithoutSpaces())))},dependencies:[rw,sw,iw,ow,Bw,od],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var Uw="(max-width: 900px)",Fn=class t{breakpointObserver=u(na);isSmallWidth=F(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([Uw]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[Uw])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var _d=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,r){e&1&&(xe(0,"div",0)(1,"div",1),ft(2,"div",2),xe(3,"div",3),S(4,"Loading..."),Ie()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var Pn=class t{DARK_MODE_CLASS="dark-mode";document=u(Q);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=F(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=st(()=>this.themeMode()==="dark");constructor(){ln(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var _m=t=>({width:t});function bk(t,n){t&1&&ce(0,"loading-icon")}function yk(t,n){if(t&1&&(y(0,"div",7)(1,"p",17),S(2),_()()),t&2){let e=J();D(2),et(" ",e.teamListService.errorMessage()," ")}}function _k(t,n){if(t&1&&ce(0,"team-listing",14),t&2){let e=n.$implicit;q("team",e)}}function Dk(t,n){t&1&&(y(0,"div",7)(1,"p",17),S(2," There are no teams available. "),_()())}function wk(t,n){if(t&1&&Pt(0,_k,1,1,"team-listing",14,vr,!1,Dk,3,0,"div",7),t&2){let e=J();Lt(e.teamListService.teamsList())}}var Dd=class t{constructor(n,e,r){this.breakpointService=n;this.themeService=e;this.teamListService=r;this.breakpointService=u(Fn),this.themeService=u(Pn),this.teamListService=u(_o),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(U(Fn),U(Pn),U(_o))};static \u0275cmp=x({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,r){e&1&&(ce(0,"div",0)(1,"div",1),y(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),S(6),_(),y(7,"button",5),fe("click",function(){return r.themeService.setThemeMode(r.themeService.isDarkMode()?"light":"dark")}),S(8,"Toggle Theme"),_()(),y(9,"div",6),ae(10,bk,1,0,"loading-icon")(11,yk,3,1,"div",7)(12,wk,3,1),_()(),y(13,"div",3)(14,"div",8)(15,"h1",9),S(16,"Information"),_(),y(17,"p"),S(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),_(),y(19,"h2",9),S(20,"Resources"),_(),y(21,"ul")(22,"li")(23,"a",10),S(24,"Reddit Emblem Maps Documentation"),_()(),y(25,"li")(26,"a",11),S(27,"API Github Repository"),_()(),y(28,"li")(29,"a",12),S(30,"Webapp Github Repository"),_()()(),y(31,"h2",9),S(32,"Example"),_(),y(33,"p"),S(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),_(),y(35,"ul")(36,"li")(37,"a",13),S(38,"Team Example Google Spreadsheet"),_()()(),ce(39,"team-listing",14),_(),y(40,"div",8)(41,"h2",9),S(42,"Credits"),_(),y(43,"ul")(44,"li")(45,"a",15),S(46,'Website background texture "Az Subtle" by Anli'),_()(),y(47,"li")(48,"a",16),S(49,`"Mac's Minecraft" pixel font`),_()()()()()()),e&2&&(D(3),q("ngClass",r.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),D(),q("ngClass",r.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),D(2),et(" This will be the logo! Screen width is <= 900px: ",r.breakpointService.isScreenSmallWidth()," "),D(3),q("ngStyle",vn(9,_m,r.breakpointService.isScreenSmallWidth()?"100%":"60%")),D(),le(r.teamListService.isLoading()?10:r.teamListService.errorMessage().length>0?11:12),D(3),q("ngClass",r.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),D(),q("ngStyle",vn(11,_m,r.breakpointService.isScreenSmallWidth()?"100%":"50%")),D(25),q("team",r.teamExample),D(),q("ngStyle",vn(13,_m,r.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[yd,pp,mp,_d],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var Ck=20,Io=(()=>{class t{_ngZone=u(M);_platform=u(he);_renderer=u(Ue).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Ck){return this._platform.isBrowser?new L(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Xa(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):z()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){let i=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe(ue(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let r=[];return this.scrollContainers.forEach((i,o)=>{this._scrollableContainsElement(o,e)&&r.push(o)}),r}_scrollableContainsElement(e,r){let i=wt(r),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xr=(()=>{class t{elementRef=u(k);scrollDispatcher=u(Io);ngZone=u(M);dir=u(xt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new C;_renderer=u(Me);_cleanupScroll;_elementScrolled=new C;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=r.scrollHeight-r.clientHeight-e.bottom),i&&Co()!=yn.NORMAL?(e.left!=null&&(e.right=r.scrollWidth-r.clientWidth-e.left),Co()==yn.INVERTED?e.left=e.right:Co()==yn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=r.scrollWidth-r.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let r=this.elementRef.nativeElement;md()?r.scrollTo(e):(e.top!=null&&(r.scrollTop=e.top),e.left!=null&&(r.scrollLeft=e.left))}measureScrollOffset(e){let r="left",i="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?i:r:e=="end"&&(e=s?r:i),s&&Co()==yn.INVERTED?e==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Co()==yn.NEGATED?e==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),Ek=20,_n=(()=>{class t{_platform=u(he);_listeners;_viewportSize=null;_change=new C;_document=u(Q);constructor(){let e=u(M),r=u(Ue).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,r=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||r.scrollY||i.scrollTop||0,a=-o.left||e.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(e=Ek){return e>0?this._change.pipe(Xa(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var la=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({})}return t})(),Dm=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[Ze,la,Ze,la]})}return t})();var xd=["*"],xk=["content"],Ik=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Sk=["mat-drawer","mat-drawer-content","*"];function Mk(t,n){if(t&1){let e=Zn();y(0,"div",1),fe("click",function(){kt(e);let i=J();return Nt(i._onBackdropClicked())}),_()}if(t&2){let e=J();H("mat-drawer-shown",e._isShowingBackdrop())}}function Tk(t,n){t&1&&(y(0,"mat-drawer-content"),W(1,2),_())}var Ak=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Rk=["mat-sidenav","mat-sidenav-content","*"];function kk(t,n){if(t&1){let e=Zn();y(0,"div",1),fe("click",function(){kt(e);let i=J();return Nt(i._onBackdropClicked())}),_()}if(t&2){let e=J();H("mat-drawer-shown",e._isShowingBackdrop())}}function Nk(t,n){t&1&&(y(0,"mat-sidenav-content"),W(1,2),_())}var Ok=`.mat-drawer-container {
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
`;var Fk=new v("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Em=new v("MAT_DRAWER_CONTAINER"),wd=(()=>{class t extends xr{_platform=u(he);_changeDetectorRef=u(Ve);_container=u(Cm);constructor(){let e=u(k),r=u(Io),i=u(M);super(e,r,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:r}=this._container;return e!=null&&e.mode!=="over"&&e.opened||r!=null&&r.mode!=="over"&&r.opened}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(r,i){r&2&&(Yn("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),H("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[Te([{provide:xr,useExisting:t}]),De],ngContentSelectors:xd,decls:1,vars:0,template:function(r,i){r&1&&(Se(),W(0))},encapsulation:2,changeDetection:0})}return t})(),wm=(()=>{class t{_elementRef=u(k);_focusTrapFactory=u(lm);_focusMonitor=u(yi);_platform=u(he);_ngZone=u(M);_renderer=u(Me);_interactivityChecker=u(ud);_doc=u(Q);_container=u(Em,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=zt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=zt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(zt(e))}_opened=F(!1);_openedVia=null;_animationStarted=new C;_animationEnd=new C;openedChange=new O(!0);_openedStream=this.openedChange.pipe(ue(e=>e),Y(()=>{}));openedStart=this._animationStarted.pipe(ue(()=>this.opened),Oi(void 0));_closedStream=this.openedChange.pipe(ue(e=>!e),Y(()=>{}));closedStart=this._animationStarted.pipe(ue(()=>!this.opened),Oi(void 0));_destroyed=new C;onPositionChanged=new O;_content;_modeChanged=new C;_injector=u(ne);_changeDetectorRef=u(Ve);constructor(){this.openedChange.pipe(Ce(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,r=this._elementRef.nativeElement;return[e.listen(r,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Jt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(r,"transitionend",this._handleTransitionEvent),e.listen(r,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,r){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),s=this._renderer.listen(e,"mousedown",i)})),e.focus(r)}_focusByCssSelector(e,r){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,r)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":qe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,r){e&&r&&(this._openedVia=r);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,r,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&r&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Xe(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let r=this._elementRef.nativeElement,i=r.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,r)),i.appendChild(r)):this._anchor&&this._anchor.parentNode.insertBefore(r,this._anchor)}_handleTransitionEvent=e=>{let r=this._elementRef.nativeElement;e.target===r&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-drawer"]],viewQuery:function(r,i){if(r&1&&ze(xk,5),r&2){let o;j(o=B())&&(i._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(r,i){r&2&&(Ee("align",null)("tabIndex",i.mode!=="side"?"-1":null),Yn("visibility",!i._container&&!i.opened?"hidden":null),H("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:xd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(Se(),y(0,"div",1,0),W(2),_())},dependencies:[xr],encapsulation:2,changeDetection:0})}return t})(),Cm=(()=>{class t{_dir=u(xt,{optional:!0});_element=u(k);_ngZone=u(M);_changeDetectorRef=u(Ve);_animationDisabled=Ye();_transitionsEnabled=!1;_allDrawers;_drawers=new un;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=zt(e)}_autosize=u(Fk);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:zt(e)}_backdropOverride=null;backdropClick=new O;_start=null;_end=null;_left=null;_right=null;_destroyed=new C;_doCheckSubject=new C;_contentMargins={left:null,right:null};_contentMarginChanges=new C;get scrollable(){return this._userContent||this._content}_injector=u(ne);constructor(){let e=u(he),r=u(_n);this._dir?.change.pipe(Ce(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),r.change().pipe(Ce(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(rt(this._allDrawers),Ce(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(r=>!r._container||r._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(rt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(nn(10),Ce(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,r=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,r-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")r+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();r+=i,e-=i}}e=e||null,r=r||null,(e!==this._contentMargins.left||r!==this._contentMargins.right)&&(this._contentMargins={left:e,right:r},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Ce(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Ce(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Ce(this._drawers.changes)).subscribe(()=>{qe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Ce(Mt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let r=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?r.add(i):r.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(r,i,o){if(r&1&&Et(o,wd,5)(o,wm,5),r&2){let s;j(s=B())&&(i._content=s.first),j(s=B())&&(i._allDrawers=s)}},viewQuery:function(r,i){if(r&1&&ze(wd,5),r&2){let o;j(o=B())&&(i._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Te([{provide:Em,useExisting:t}])],ngContentSelectors:Sk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(Se(Ik),ae(0,Mk,1,2,"div",0),W(1),W(2,1),ae(3,Tk,2,0,"mat-drawer-content")),r&2&&(le(i.hasBackdrop?0:-1),D(3),le(i._content?-1:3))},dependencies:[wd],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Cd=(()=>{class t extends wd{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Te([{provide:xr,useExisting:t}]),De],ngContentSelectors:xd,decls:1,vars:0,template:function(r,i){r&1&&(Se(),W(0))},encapsulation:2,changeDetection:0})}return t})(),xm=(()=>{class t extends wm{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=zt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Er(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Er(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(r,i){r&2&&(Ee("tabIndex",i.mode!=="side"?"-1":null)("align",null),Yn("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),H("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Te([{provide:wm,useExisting:t}]),De],ngContentSelectors:xd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(Se(),y(0,"div",1,0),W(2),_())},dependencies:[xr],encapsulation:2,changeDetection:0})}return t})(),Ww=(()=>{class t extends Cm{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(r,i,o){if(r&1&&Et(o,Cd,5)(o,xm,5),r&2){let s;j(s=B())&&(i._content=s.first),j(s=B())&&(i._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(r,i){r&2&&H("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[Te([{provide:Em,useExisting:t},{provide:Cm,useExisting:t}]),De],ngContentSelectors:Rk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(Se(Ak),ae(0,kk,1,2,"div",0),W(1),W(2,1),ae(3,Nk,2,0,"mat-sidenav-content")),r&2&&(le(i.hasBackdrop?0:-1),D(3),le(i._content?-1:3))},dependencies:[Cd],styles:[Ok],encapsulation:2,changeDetection:0})}return t})();var ca=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Im=class extends ca{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,r,i,o){super(),this.component=n,this.viewContainerRef=e,this.injector=r,this.projectableNodes=i,this.bindings=o||null}},er=class extends ca{templateRef;viewContainerRef;context;injector;constructor(n,e,r,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Sm=class extends ca{element;constructor(n){super(),this.element=n instanceof k?n.nativeElement:n}},Id=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Im)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof er)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Sm)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Sd=class extends Id{outletElement;_appRef;_defaultInjector;constructor(n,e,r){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=r}attachComponentPortal(n){let e;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(Rn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||ne.NULL,o=i.get(ge,r.injector);e=Cc(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),r.attachView(e.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,r=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(r);i!==-1&&e.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let e=n.element;e.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(r,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(e,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Gw=(()=>{class t extends er{constructor(){let e=u(ut),r=u(ot);super(e,r)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[De]})}return t})(),Mm=(()=>{class t extends Id{_moduleRef=u(Rn,{optional:!0});_document=u(Q);_viewContainerRef=u(ot);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new O;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let r=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=r.createComponent(e.component,{index:r.length,injector:e.injector||r.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=e=>{let r=e.element;r.parentNode;let i=this._document.createComment("dom-portal");e.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[De]})}return t})(),qw=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({})}return t})();var Tm=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new L(e=>{let r=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ue(e=>e.some(r=>r.target===n)),nl({bufferSize:1,refCount:!0}),Ce(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Md=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(M);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Tm(i)),this._observers.get(i).observe(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fm=["*"];function Pk(t,n){t&1&&W(0)}var Lk=["tabListContainer"],Vk=["tabList"],jk=["tabListInner"],Bk=["nextPaginator"],Hk=["previousPaginator"],Uk=["content"];function zk(t,n){}var $k=["tabBodyWrapper"],Wk=["tabHeader"];function Gk(t,n){}function qk(t,n){if(t&1&&Dt(0,Gk,0,0,"ng-template",12),t&2){let e=J().$implicit;q("cdkPortalOutlet",e.templateLabel)}}function Zk(t,n){if(t&1&&S(0),t&2){let e=J().$implicit;Qt(e.textLabel)}}function Yk(t,n){if(t&1){let e=Zn();y(0,"div",7,2),fe("click",function(){let i=kt(e),o=i.$implicit,s=i.$index,a=J(),l=mn(1);return Nt(a._handleClick(o,l,s))})("cdkFocusChange",function(i){let o=kt(e).$index,s=J();return Nt(s._tabFocusChanged(i,o))}),ce(2,"span",8)(3,"div",9),y(4,"span",10)(5,"span",11),ae(6,qk,1,1,null,12)(7,Zk,1,1),_()()()}if(t&2){let e=n.$implicit,r=n.$index,i=mn(1),o=J();gn(e.labelClass),H("mdc-tab--active",o.selectedIndex===r),q("id",o._getTabLabelId(e,r))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Ee("tabIndex",o._getTabIndex(r))("aria-posinset",r+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(r))("aria-selected",o.selectedIndex===r)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),D(3),q("matRippleTrigger",i)("matRippleDisabled",e.disabled||o.disableRipple),D(3),le(e.templateLabel?6:7)}}function Qk(t,n){t&1&&W(0)}function Kk(t,n){if(t&1){let e=Zn();y(0,"mat-tab-body",13),fe("_onCentered",function(){kt(e);let i=J();return Nt(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){kt(e);let o=J();return Nt(o._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){kt(e);let o=J();return Nt(o._bodyCentered(i))}),_()}if(t&2){let e=n.$implicit,r=n.$index,i=J();gn(e.bodyClass),q("id",i._getTabContentId(r))("content",e.content)("position",e.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),Ee("tabindex",i.contentTabIndex!=null&&i.selectedIndex===r?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(e,r))("aria-hidden",i.selectedIndex!==r)}}var Xk=new v("MatTabContent"),Jk=(()=>{class t{template=u(ut);constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","matTabContent",""]],features:[Te([{provide:Xk,useExisting:t}])]})}return t})(),eN=new v("MatTabLabel"),Kw=new v("MAT_TAB"),Pm=(()=>{class t extends Gw{_closestTab=u(Kw,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Te([{provide:eN,useExisting:t}]),De]})}return t})(),Xw=new v("MAT_TAB_GROUP"),Lm=(()=>{class t{_viewContainerRef=u(ot);_closestTabGroup=u(Xw,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new C;position=null;origin=null;isActive=!1;constructor(){u(mt).load(xo)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new er(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab"]],contentQueries:function(r,i,o){if(r&1&&Et(o,Pm,5)(o,Jk,7,ut),r&2){let s;j(s=B())&&(i.templateLabel=s.first),j(s=B())&&(i._explicitContent=s.first)}},viewQuery:function(r,i){if(r&1&&ze(ut,7),r&2){let o;j(o=B())&&(i._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(r,i){r&2&&Ee("id",null)},inputs:{disabled:[2,"disabled","disabled",ie],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Te([{provide:Kw,useExisting:t}]),We],ngContentSelectors:Fm,decls:1,vars:0,template:function(r,i){r&1&&(Se(),eo(0,Pk,1,0,"ng-template"))},encapsulation:2})}return t})(),Am="mdc-tab-indicator--active",Zw="mdc-tab-indicator--no-transition",Rm=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(i=>i.elementRef.nativeElement===n),r=this._currentItem;if(e!==r&&(r?.deactivateInkBar(),e)){let i=r?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},tN=(()=>{class t{_elementRef=u(k);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let r=this._elementRef.nativeElement;if(!e||!r.getBoundingClientRect||!this._inkBarContentElement){r.classList.add(Am);return}let i=r.getBoundingClientRect(),o=e.width/i.width,s=e.left-i.left;r.classList.add(Zw),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),r.getBoundingClientRect(),r.classList.remove(Zw),r.classList.add(Am),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Am)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,r=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");r.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",r.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ie]}})}return t})();var Jw=(()=>{class t extends tN{elementRef=u(k);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(r,i){r&2&&(Ee("aria-disabled",!!i.disabled),H("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",ie]},features:[De]})}return t})(),Yw={passive:!0},nN=650,rN=100,iN=(()=>{class t{_elementRef=u(k);_changeDetectorRef=u(Ve);_viewportRuler=u(_n);_dir=u(xt,{optional:!0});_ngZone=u(M);_platform=u(he);_sharedResizeObserver=u(Md);_injector=u(ne);_renderer=u(Me);_animationsDisabled=Ye();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new C;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new C;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let r=isNaN(e)?0:e;this._selectedIndex!=r&&(this._selectedIndexChanged=!0,this._selectedIndex=r,this._keyManager&&this._keyManager.updateActiveItem(r))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Yw),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Yw))}ngAfterContentInit(){let e=this._dir?this._dir.change:z("ltr"),r=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(nn(32),Ce(this._destroyed)),i=this._viewportRuler.change(150).pipe(Ce(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ia(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),qe(o,{injector:this._injector}),Mt(e,i,r,this._items.changes,this._itemsResized()).pipe(Ce(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?ke:this._items.changes.pipe(rt(this._items),He(e=>new L(r=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>r.next(o));return e.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),Hr(1),ue(e=>e.some(r=>r.contentRect.width>0&&r.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Jt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let r=this._items.get(this.focusIndex);r&&!r.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let r=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?r.scrollLeft=0:r.scrollLeft=r.scrollWidth-r.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,r=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(r)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let r=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*r/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let r=this._items?this._items.toArray()[e]:null;if(!r)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=r.elementRef.nativeElement,a,l;this._getLayoutDirection()=="ltr"?(a=o,l=a+s):(l=this._tabListInner.nativeElement.offsetWidth-o,a=l-s);let c=this.scrollDistance,d=this.scrollDistance+i;a<c?this.scrollDistance-=c-a:l>d&&(this.scrollDistance+=Math.min(l-d,a-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,r=this._elementRef.nativeElement.offsetWidth,i=e-r>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,r=this._tabListContainer.nativeElement.offsetWidth;return e-r||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,r=e?e.elementRef.nativeElement:null;r?this._inkBar.alignToElement(r):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,r){r&&r.button!=null&&r.button!==0||(this._stopInterval(),Br(nN,rN).pipe(Ce(Mt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(e);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let r=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(r,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:r,distance:this._scrollDistance}}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ie],selectedIndex:[2,"selectedIndex","selectedIndex",no]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),oN=(()=>{class t extends iN{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Rm(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["mat-tab-header"]],contentQueries:function(r,i,o){if(r&1&&Et(o,Jw,4),r&2){let s;j(s=B())&&(i._items=s)}},viewQuery:function(r,i){if(r&1&&ze(Lk,7)(Vk,7)(jk,7)(Bk,5)(Hk,5),r&2){let o;j(o=B())&&(i._tabListContainer=o.first),j(o=B())&&(i._tabList=o.first),j(o=B())&&(i._tabListInner=o.first),j(o=B())&&(i._nextPaginator=o.first),j(o=B())&&(i._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(r,i){r&2&&H("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ie]},features:[De],ngContentSelectors:Fm,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(r,i){r&1&&(Se(),y(0,"div",5,0),fe("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(s){return i._handlePaginatorPress("before",s)})("touchend",function(){return i._stopInterval()}),ce(2,"div",6),_(),y(3,"div",7,1),fe("keydown",function(s){return i._handleKeydown(s)}),y(5,"div",8,2),fe("cdkObserveContent",function(){return i._onContentChanges()}),y(7,"div",9,3),W(9),_()()(),y(10,"div",10,4),fe("mousedown",function(s){return i._handlePaginatorPress("after",s)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),ce(12,"div",6),_()),r&2&&(H("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),q("matRippleDisabled",i._disableScrollBefore||i.disableRipple),D(3),H("_mat-animation-noopable",i._animationsDisabled),D(2),Ee("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),D(5),H("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),q("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[aa,bw],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),sN=new v("MAT_TABS_CONFIG"),Qw=(()=>{class t extends Mm{_host=u(km);_ngZone=u(M);_centeringSub=de.EMPTY;_leavingSub=de.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(rt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["","matTabBodyHost",""]],features:[De]})}return t})(),km=(()=>{class t{_elementRef=u(k);_dir=u(xt,{optional:!0});_ngZone=u(M);_injector=u(ne);_renderer=u(Me);_diAnimationsDisabled=Ye();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=de.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Ve);this._dirChangeSubscription=this._dir.change.subscribe(r=>{this._computePositionAnimationState(r),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),qe(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,r=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",r),this._renderer.listen(e,"transitioncancel",r)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),qe(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-body"]],viewQuery:function(r,i){if(r&1&&ze(Qw,5)(Uk,5),r&2){let o;j(o=B())&&(i._portalHost=o.first),j(o=B())&&(i._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(r,i){r&2&&Ee("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(r,i){r&1&&(y(0,"div",1,0),Dt(2,zk,0,0,"ng-template",2),_()),r&2&&H("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[Qw,xr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),eC=(()=>{class t{_elementRef=u(k);_changeDetectorRef=u(Ve);_ngZone=u(M);_tabsSubscription=de.EMPTY;_tabLabelSubscription=de.EMPTY;_tabBodySubscription=de.EMPTY;_diAnimationsDisabled=Ye();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new un;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let r=e+"";this._animationDuration=/^\d+$/.test(r)?e+"ms":r}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let r=this._elementRef.nativeElement.classList;r.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&r.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!u(he).isBrowser;constructor(){let e=u(sN,{optional:!0});this._groupId=u(gt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let r=this._selectedIndex==null;if(!r){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,o)=>i.isActive=o===e),r||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((r,i)=>{r.position=i-e,this._selectedIndex!=null&&r.position==0&&!r.origin&&(r.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let r=this._tabs.toArray(),i;for(let o=0;o<r.length;o++)if(r[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,i=r[o];break}!i&&r[e]&&Promise.resolve().then(()=>{r[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(rt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(r=>r._closestTabGroup===this||!r._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let r=this._tabHeader;r&&(r.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let r=new Nm;return r.index=e,this._tabs&&this._tabs.length&&(r.tab=this._tabs.toArray()[e]),r}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Mt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,r){return e.id||`${this._groupId}-label-${r}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let r=this._tabBodyWrapper.nativeElement;r.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(r.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,r,i){r.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let r=this._lastFocusedTabIndex??this.selectedIndex;return e===r?0:-1}_tabFocusChanged(e,r){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=r)}_bodyCentered(e){e&&this._tabBodies?.forEach((r,i)=>r._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-tab-group"]],contentQueries:function(r,i,o){if(r&1&&Et(o,Lm,5),r&2){let s;j(s=B())&&(i._allTabs=s)}},viewQuery:function(r,i){if(r&1&&ze($k,5)(Wk,5)(km,5),r&2){let o;j(o=B())&&(i._tabBodyWrapper=o.first),j(o=B())&&(i._tabHeader=o.first),j(o=B())&&(i._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(r,i){r&2&&(Ee("mat-align-tabs",i.alignTabs),gn("mat-"+(i.color||"primary")),Yn("--mat-tab-animation-duration",i.animationDuration),H("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ie],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ie],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ie],selectedIndex:[2,"selectedIndex","selectedIndex",no],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",no],disablePagination:[2,"disablePagination","disablePagination",ie],disableRipple:[2,"disableRipple","disableRipple",ie],preserveContent:[2,"preserveContent","preserveContent",ie],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Te([{provide:Xw,useExisting:t}])],ngContentSelectors:Fm,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(r,i){r&1&&(Se(),y(0,"mat-tab-header",3,0),fe("indexFocused",function(s){return i._focusChanged(s)})("selectFocusedIndex",function(s){return i.selectedIndex=s}),Pt(2,Yk,8,17,"div",4,mc),_(),ae(4,Qk,1,0),y(5,"div",5,1),Pt(7,Kk,1,10,"mat-tab-body",6,mc),_()),r&2&&(q("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),pc("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),D(2),Lt(i._tabs),D(2),le(i._isServer?4:-1),D(),H("_mat-animation-noopable",i._animationsDisabled()),D(2),Lt(i._tabs))},dependencies:[oN,Jw,am,aa,Mm,km],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Nm=class{index;tab};var Td=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-dice-roller-sidenav"]],decls:2,vars:0,template:function(e,r){e&1&&(xe(0,"p"),S(1,"map-dice-roller-sidenav works!"),Ie())},encapsulation:2})};var Ad=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-links-sidenav"]],decls:2,vars:0,template:function(e,r){e&1&&(xe(0,"p"),S(1,"map-links-sidenav works!"),Ie())},encapsulation:2})};var It=class t{constructor(n){this.http=n;this.http=u(hi)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=F(!0);isLoading=this.loading.asReadonly();error=F("");errorMessage=this.error.asReadonly();map=F({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getUnitsList(){return this.mapData().units??[]}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(e)return e[n]}static \u0275fac=function(e){return new(e||t)(P(hi))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var sC=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(r){return new(r||t)(U(Me),U(k))};static \u0275dir=R({type:t})}return t})(),aN=(()=>{class t extends sC{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,features:[De]})}return t})(),Wd=new v("");var lN={provide:Wd,useExisting:$t(()=>Gd),multi:!0};function cN(){let t=Kt()?Kt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var dN=new v(""),Gd=(()=>{class t extends sC{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!cN())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(r){return new(r||t)(U(Me),U(k),U(dN,8))};static \u0275dir=R({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&fe("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[Te([lN]),De]})}return t})();function Bm(t){return t==null||Hm(t)===0}function Hm(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Um=new v(""),zm=new v(""),uN=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,kd=class{static min(n){return fN(n)}static max(n){return hN(n)}static required(n){return pN(n)}static requiredTrue(n){return mN(n)}static email(n){return gN(n)}static minLength(n){return vN(n)}static maxLength(n){return bN(n)}static pattern(n){return yN(n)}static nullValidator(n){return aC()}static compose(n){return hC(n)}static composeAsync(n){return pC(n)}};function fN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function hN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function pN(t){return Bm(t.value)?{required:!0}:null}function mN(t){return t.value===!0?null:{required:!0}}function gN(t){return Bm(t.value)||uN.test(t.value)?null:{email:!0}}function vN(t){return n=>{let e=n.value?.length??Hm(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function bN(t){return n=>{let e=n.value?.length??Hm(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function yN(t){if(!t)return aC;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),r=>{if(Bm(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function aC(t){return null}function lC(t){return t!=null}function cC(t){return gr(t)?Re(t):t}function dC(t){let n={};return t.forEach(e=>{n=e!=null?g(g({},n),e):n}),Object.keys(n).length===0?null:n}function uC(t,n){return n.map(e=>e(t))}function _N(t){return!t.validate}function fC(t){return t.map(n=>_N(n)?n:e=>n.validate(e))}function hC(t){if(!t)return null;let n=t.filter(lC);return n.length==0?null:function(e){return dC(uC(e,n))}}function $m(t){return t!=null?hC(fC(t)):null}function pC(t){if(!t)return null;let n=t.filter(lC);return n.length==0?null:function(e){let r=uC(e,n).map(cC);return Ou(r).pipe(Y(dC))}}function Wm(t){return t!=null?pC(fC(t)):null}function tC(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function mC(t){return t._rawValidators}function gC(t){return t._rawAsyncValidators}function jm(t){return t?Array.isArray(t)?t:[t]:[]}function Nd(t,n){return Array.isArray(t)?t.includes(n):t===n}function nC(t,n){let e=jm(n);return jm(t).forEach(i=>{Nd(e,i)||e.push(i)}),e}function rC(t,n){return jm(n).filter(e=>!Nd(t,e))}var Od=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=$m(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Wm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},wi=class extends Od{name;get formDirective(){return null}get path(){return null}},Ci=class extends Od{_parent=null;name=null;valueAccessor=null},Fd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var vC=(()=>{class t extends Fd{constructor(e){super(e)}static \u0275fac=function(r){return new(r||t)(U(Ci,2))};static \u0275dir=R({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&H("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[De]})}return t})(),bC=(()=>{class t extends Fd{constructor(e){super(e)}static \u0275fac=function(r){return new(r||t)(U(wi,10))};static \u0275dir=R({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){r&2&&H("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[De]})}return t})();var ua="VALID",Rd="INVALID",So="PENDING",fa="DISABLED",Ir=class{},Pd=class extends Ir{value;source;constructor(n,e){super(),this.value=n,this.source=e}},pa=class extends Ir{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},ma=class extends Ir{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Mo=class extends Ir{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ld=class extends Ir{source;constructor(n){super(),this.source=n}},Vd=class extends Ir{source;constructor(n){super(),this.source=n}};function yC(t){return(qd(t)?t.validators:t)||null}function DN(t){return Array.isArray(t)?$m(t):t||null}function _C(t,n){return(qd(n)?n.asyncValidators:t)||null}function wN(t){return Array.isArray(t)?Wm(t):t||null}function qd(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function CN(t,n,e){let r=t.controls;if(!(n?Object.keys(r):r).length)throw new E(1e3,"");if(!r[e])throw new E(1001,"")}function EN(t,n,e){t._forEachChild((r,i)=>{if(e[i]===void 0)throw new E(-1002,"")})}var jd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ve(this.statusReactive)}set status(n){ve(()=>this.statusReactive.set(n))}_status=st(()=>this.statusReactive());statusReactive=F(void 0);get valid(){return this.status===ua}get invalid(){return this.status===Rd}get pending(){return this.status===So}get disabled(){return this.status===fa}get enabled(){return this.status!==fa}errors;get pristine(){return ve(this.pristineReactive)}set pristine(n){ve(()=>this.pristineReactive.set(n))}_pristine=st(()=>this.pristineReactive());pristineReactive=F(!0);get dirty(){return!this.pristine}get touched(){return ve(this.touchedReactive)}set touched(n){ve(()=>this.touchedReactive.set(n))}_touched=st(()=>this.touchedReactive());touchedReactive=F(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(nC(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(nC(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(rC(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(rC(n,this._rawAsyncValidators))}hasValidator(n){return Nd(this._rawValidators,n)}hasAsyncValidator(n){return Nd(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Z(g({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new ma(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),e&&n.emitEvent!==!1&&this._events.next(new ma(!1,r))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Z(g({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new pa(!1,r))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),e&&n.emitEvent!==!1&&this._events.next(new pa(!0,r))}markAsPending(n={}){this.status=So;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Mo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Z(g({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=fa,this.errors=null,this._forEachChild(i=>{i.disable(Z(g({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Pd(this.value,r)),this._events.next(new Mo(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Z(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ua,this._forEachChild(r=>{r.enable(Z(g({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Z(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ua||this.status===So)&&this._runAsyncValidator(r,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Pd(this.value,e)),this._events.next(new Mo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Z(g({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?fa:ua}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=So,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let r=cC(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){let r=e?this.get(e):this;return r?.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new Mo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,r)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?fa:this.errors?Rd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(So)?So:this._anyControlsHaveStatus(Rd)?Rd:ua}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new pa(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new ma(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){qd(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=DN(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=wN(this._rawAsyncValidators)}},Bd=class extends jd{constructor(n,e,r){super(yC(e),_C(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){EN(this,!0,n),Object.keys(n).forEach(r=>{CN(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,Z(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Vd(this))}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(n,e){let r=n;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ga=new v("",{factory:()=>Zd}),Zd="always";function Hd(t,n,e=Zd){Gm(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),IN(t,n),MN(t,n),SN(t,n),xN(t,n)}function Ud(t,n,e=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),$d(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function zd(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function xN(t,n){if(n.valueAccessor.setDisabledState){let e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Gm(t,n){let e=mC(t);n.validator!==null?t.setValidators(tC(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let r=gC(t);n.asyncValidator!==null?t.setAsyncValidators(tC(r,n.asyncValidator)):typeof r=="function"&&t.setAsyncValidators([r]);let i=()=>t.updateValueAndValidity();zd(n._rawValidators,i),zd(n._rawAsyncValidators,i)}function $d(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=mC(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let i=gC(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let r=()=>{};return zd(n._rawValidators,r),zd(n._rawAsyncValidators,r),e}function IN(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&DC(t,n)})}function SN(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&DC(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function DC(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function MN(t,n){let e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function wC(t,n){t==null,Gm(t,n)}function TN(t,n){return $d(t,n)}function AN(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function RN(t){return Object.getPrototypeOf(t.constructor)===aN}function CC(t,n){t._syncPendingControls(),n.forEach(e=>{let r=e.control;r.updateOn==="submit"&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function kN(t,n){if(!n)return null;Array.isArray(n);let e,r,i;return n.forEach(o=>{o.constructor===Gd?e=o:RN(o)?r=o:i=o}),i||r||e||null}function NN(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var ON={provide:wi,useExisting:$t(()=>va)},ha=Promise.resolve(),va=(()=>{class t extends wi{callSetDisabledState;get submitted(){return ve(this.submittedReactive)}_submitted=st(()=>this.submittedReactive());submittedReactive=F(!1);_directives=new Set;form;ngSubmit=new O;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new Bd({},$m(e),Wm(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ha.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),Hd(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ha.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ha.then(()=>{let r=this._findContainer(e.path),i=new Bd({});wC(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ha.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){ha.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),CC(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ld(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(r){return new(r||t)(U(Um,10),U(zm,10),U(ga,8))};static \u0275dir=R({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&fe("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([ON]),De]})}return t})();function iC(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function oC(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var qm=class extends jd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,r){super(yC(e),_C(r,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),qd(e)&&(e.nonNullable||e.initialValueIsDefault)&&(oC(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Vd(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){iC(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){iC(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){oC(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var FN=t=>t instanceof qm;var EC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var PN=(()=>{class t extends wi{callSetDisabledState;get submitted(){return ve(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=st(()=>this._submittedReactive());_submittedReactive=F(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&($d(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);return Hd(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){Ud(e.control||null,e,!1),NN(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,CC(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ld(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(Ud(r||null,e),FN(i)&&(Hd(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);wC(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&TN(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Gm(this.form,this),this._oldForm&&$d(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||t)(U(Um,10),U(zm,10),U(ga,8))};static \u0275dir=R({type:t,features:[De,We]})}return t})();var xC=new v(""),LN={provide:Ci,useExisting:$t(()=>Zm)},Zm=(()=>{class t extends Ci{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new O;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,r,i,o,s){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=kN(this,i)}ngOnChanges(e){if(this._isControlChanged(e)){let r=e.form.previousValue;r&&Ud(r,this,!1),Hd(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}AN(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ud(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(r){return new(r||t)(U(Um,10),U(zm,10),U(Wd,10),U(xC,8),U(ga,8))};static \u0275dir=R({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Te([LN]),De,We]})}return t})();var VN={provide:wi,useExisting:$t(()=>Ym)},Ym=(()=>{class t extends PN{form=null;ngSubmit=new O;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275dir=R({type:t,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&fe("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([VN]),De]})}return t})();var IC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({})}return t})();var SC=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ga,useValue:e.callSetDisabledState??Zd}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[IC]})}return t})(),MC=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:xC,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ga,useValue:e.callSetDisabledState??Zd}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[IC]})}return t})();var BN=["notch"],HN=["matFormFieldNotchedOutline",""],UN=["*"],TC=["iconPrefixContainer"],AC=["textPrefixContainer"],RC=["iconSuffixContainer"],kC=["textSuffixContainer"],zN=["textField"],$N=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],WN=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function GN(t,n){t&1&&ce(0,"span",21)}function qN(t,n){if(t&1&&(y(0,"label",20),W(1,1),ae(2,GN,1,0,"span",21),_()),t&2){let e=J(2);q("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Ee("for",e._control.disableAutomaticLabeling?null:e._control.id),D(2),le(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ZN(t,n){if(t&1&&ae(0,qN,3,5,"label",20),t&2){let e=J();le(e._hasFloatingLabel()?0:-1)}}function YN(t,n){t&1&&ce(0,"div",7)}function QN(t,n){}function KN(t,n){if(t&1&&Dt(0,QN,0,0,"ng-template",13),t&2){J(2);let e=mn(1);q("ngTemplateOutlet",e)}}function XN(t,n){if(t&1&&(y(0,"div",9),ae(1,KN,1,1,null,13),_()),t&2){let e=J();q("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),D(),le(e._forceDisplayInfixLabel()?-1:1)}}function JN(t,n){t&1&&(y(0,"div",10,2),W(2,2),_())}function eO(t,n){t&1&&(y(0,"div",11,3),W(2,3),_())}function tO(t,n){}function nO(t,n){if(t&1&&Dt(0,tO,0,0,"ng-template",13),t&2){J();let e=mn(1);q("ngTemplateOutlet",e)}}function rO(t,n){t&1&&(y(0,"div",14,4),W(2,4),_())}function iO(t,n){t&1&&(y(0,"div",15,5),W(2,5),_())}function oO(t,n){t&1&&ce(0,"div",16)}function sO(t,n){t&1&&(y(0,"div",18),W(1,6),_())}function aO(t,n){if(t&1&&(y(0,"mat-hint",22),S(1),_()),t&2){let e=J(2);q("id",e._hintLabelId),D(),Qt(e.hintLabel)}}function lO(t,n){if(t&1&&(y(0,"div",19),ae(1,aO,2,2,"mat-hint",22),W(2,7),ce(3,"div",23),W(4,8),_()),t&2){let e=J();D(),le(e.hintLabel?1:-1)}}var Qm=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-label"]]})}return t})(),cO=new v("MatError");var Km=(()=>{class t{align="start";id=u(gt).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(kn("id",i.id),Ee("align",null),H("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),dO=new v("MatPrefix");var uO=new v("MatSuffix");var jC=new v("FloatingLabelParent"),NC=(()=>{class t{_elementRef=u(k);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Md);_ngZone=u(M);_parent=u(jC);_resizeSubscription=new de;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return fO(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&H("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function fO(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let r=e.scrollWidth;return e.remove(),r}var OC="mdc-line-ripple--active",Yd="mdc-line-ripple--deactivating",FC=(()=>{class t{_elementRef=u(k);_cleanupTransitionEnd;constructor(){let e=u(M),r=u(Me);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Yd),e.add(OC)}deactivate(){this._elementRef.nativeElement.classList.add(Yd)}_handleTransitionEnd=e=>{let r=this._elementRef.nativeElement.classList,i=r.contains(Yd);e.propertyName==="opacity"&&i&&r.remove(OC,Yd)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),PC=(()=>{class t{_elementRef=u(k);_ngZone=u(M);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,r=e.querySelector(".mdc-floating-label");r?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let r=this._notch.nativeElement;!this.open||!e?r.style.width="":r.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&ze(BN,5),r&2){let o;j(o=B())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&H("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:HN,ngContentSelectors:UN,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(Se(),ft(0,"div",1),xe(1,"div",2,0),W(3),Ie(),ft(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Xm=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t})}return t})();var ba=new v("MatFormField"),hO=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),LC="fill",pO="auto",VC="fixed",mO="translateY(-50%)",Qd=(()=>{class t{_elementRef=u(k);_changeDetectorRef=u(Ve);_platform=u(he);_idGenerator=u(gt);_ngZone=u(M);_defaults=u(hO,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ss("iconPrefixContainer");_textPrefixContainerSignal=Ss("textPrefixContainer");_iconSuffixContainerSignal=Ss("iconSuffixContainer");_textSuffixContainerSignal=Ss("textSuffixContainer");_prefixSuffixContainers=st(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=R_(Qm);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=zt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||pO}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let r=e||this._defaults?.appearance||LC;this._appearanceSignal.set(r)}_appearanceSignal=F(LC);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||VC}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||VC}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ye();constructor(){let e=this._defaults,r=u(xt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ln(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=st(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let r=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe(rt([void 0,void 0]),Y(()=>[r.errorState,r.userAriaDescribedBy]),tl(),ue(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(Ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Mt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){O_({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=st(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let r=this._control?this._control.ngControl:null;return r&&r[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||e;i=e.concat(r.filter(s=>s&&!o.includes(s)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,p=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,m=`var(--mat-mdc-form-field-label-transform, ${mO} translateX(${p}))`,w=s+a+l+c;return[m,w]}_writeOutlinedLabelStyles(e){if(e!==null){let[r,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let r=e.getRootNode();return r&&r!==e}return document.documentElement.contains(e)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(gc(o,i._labelChild,Qm,5),Et(o,Xm,5)(o,dO,5)(o,uO,5)(o,cO,5)(o,Km,5)),r&2){bc();let s;j(s=B())&&(i._formFieldControl=s.first),j(s=B())&&(i._prefixChildren=s),j(s=B())&&(i._suffixChildren=s),j(s=B())&&(i._errorChildren=s),j(s=B())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(vc(i._iconPrefixContainerSignal,TC,5)(i._textPrefixContainerSignal,AC,5)(i._iconSuffixContainerSignal,RC,5)(i._textSuffixContainerSignal,kC,5),ze(zN,5)(TC,5)(AC,5)(RC,5)(kC,5)(NC,5)(PC,5)(FC,5)),r&2){bc(4);let o;j(o=B())&&(i._textField=o.first),j(o=B())&&(i._iconPrefixContainer=o.first),j(o=B())&&(i._textPrefixContainer=o.first),j(o=B())&&(i._iconSuffixContainer=o.first),j(o=B())&&(i._textSuffixContainer=o.first),j(o=B())&&(i._floatingLabel=o.first),j(o=B())&&(i._notchedOutline=o.first),j(o=B())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&H("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Te([{provide:ba,useExisting:t},{provide:jC,useExisting:t}])],ngContentSelectors:WN,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(Se($N),Dt(0,ZN,1,1,"ng-template",null,0,np),y(2,"div",6,1),fe("click",function(s){return i._control.onContainerClick(s)}),ae(4,YN,1,0,"div",7),y(5,"div",8),ae(6,XN,2,2,"div",9),ae(7,JN,3,0,"div",10),ae(8,eO,3,0,"div",11),y(9,"div",12),ae(10,nO,1,1,null,13),W(11),_(),ae(12,rO,3,0,"div",14),ae(13,iO,3,0,"div",15),_(),ae(14,oO,1,0,"div",16),_(),y(15,"div",17),ae(16,sO,2,0,"div",18)(17,lO,5,1,"div",19),_()),r&2){let o;D(2),H("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),D(2),le(!i._hasOutline()&&!i._control.disabled?4:-1),D(2),le(i._hasOutline()?6:-1),D(),le(i._hasIconPrefix?7:-1),D(),le(i._hasTextPrefix?8:-1),D(2),le(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),D(2),le(i._hasTextSuffix?12:-1),D(),le(i._hasIconSuffix?13:-1),D(),le(i._hasOutline()?-1:14),D(),H("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();D(),le((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[NC,PC,gp,FC,Km],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var ya=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[yw,Qd,Ze]})}return t})();var vO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),bO={passive:!0},BC=(()=>{class t{_platform=u(he);_ngZone=u(M);_renderer=u(Ue).createRenderer(null,null);_styleLoader=u(mt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ke;this._styleLoader.load(vO);let r=wt(e),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new C,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(s)?(r.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(s)&&(r.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",a,bO)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(e){let r=wt(e),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((e,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var HC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({})}return t})();var UC=new v("MAT_INPUT_VALUE_ACCESSOR");var zC=(()=>{class t{isErrorState(e,r){return!!(e&&e.invalid&&(e.touched||r&&r.submitted))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kd=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,r,i,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,r=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=r?.isErrorState(i,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var yO=["button","checkbox","file","hidden","image","radio","range","reset","submit"],_O=new v("MAT_INPUT_CONFIG"),$C=(()=>{class t{_elementRef=u(k);_platform=u(he);ngControl=u(Ci,{optional:!0,self:!0});_autofillMonitor=u(BC);_ngZone=u(M);_formField=u(ba,{optional:!0});_renderer=u(Me);_uid=u(gt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(_O,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=zt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(kd.required)??!1}set required(e){this._required=zt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&hm().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=zt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>hm().has(e));constructor(){let e=u(va,{optional:!0}),r=u(Ym,{optional:!0}),i=u(zC),o=u(UC,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?qn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Kd(i,this.ngControl,r,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ln(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=e,e?r.setAttribute("placeholder",e):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){yO.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,r=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute("aria-describedby",e.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let r=e.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&fe("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(kn("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),Ee("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),H("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie]},exportAs:["matInput"],features:[Te([{provide:Xm,useExisting:t}]),We]})}return t})(),WC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[ya,ya,HC,Ze]})}return t})();var GC=(()=>{class t{_animationsDisabled=Ye();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(r,i){r&2&&H("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var wO=["text"],CO=[[["mat-icon"]],"*"],EO=["mat-icon","*"];function xO(t,n){if(t&1&&ce(0,"mat-pseudo-checkbox",1),t&2){let e=J();q("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function IO(t,n){if(t&1&&ce(0,"mat-pseudo-checkbox",3),t&2){let e=J();q("disabled",e.disabled)}}function SO(t,n){if(t&1&&(y(0,"span",4),S(1),_()),t&2){let e=J();D(),et("(",e.group.label,")")}}var Jm=new v("MAT_OPTION_PARENT_COMPONENT"),eg=new v("MatOptgroup");var _a=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},To=(()=>{class t{_element=u(k);_changeDetectorRef=u(Ve);_parent=u(Jm,{optional:!0});group=u(eg,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(gt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=F(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new O;_text;_stateChanges=new C;constructor(){let e=u(mt);e.load(xo),e.load(ld),this._signalDisableRipple=!!this._parent&&qn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,r){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(r)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Jt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new _a(this,e))}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-option"]],viewQuery:function(r,i){if(r&1&&ze(wO,7),r&2){let o;j(o=B())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(r,i){r&1&&fe("click",function(){return i._selectViaInteraction()})("keydown",function(s){return i._handleKeydown(s)}),r&2&&(kn("id",i.id),Ee("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),H("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ie]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:EO,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(r,i){r&1&&(Se(CO),ae(0,xO,1,2,"mat-pseudo-checkbox",1),W(1),y(2,"span",2,0),W(4,1),_(),ae(5,IO,1,1,"mat-pseudo-checkbox",3),ae(6,SO,2,1,"span",4),ce(7,"div",5)),r&2&&(le(i.multiple?0:-1),D(5),le(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),D(),le(i.group&&i.group._inert?6:-1),D(),q("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[GC,aa],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function qC(t,n,e){if(e.length){let r=n.toArray(),i=e.toArray(),o=0;for(let s=0;s<t+1;s++)r[s].group&&r[s].group===i[o]&&o++;return o}return 0}function ZC(t,n,e,r){return t<e?t:t+n>e+r?Math.max(0,t-r+n):e}var YC=md();function nE(t){return new Xd(t.get(_n),t.get(Q))}var Xd=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=je(-this._previousScrollPosition.left),n.style.top=je(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,r=n.style,i=e.style,o=r.scrollBehavior||"",s=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),YC&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),YC&&(r.scrollBehavior=o,i.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,r=this._viewportRuler.getViewportSize();return e.scrollHeight>r.height||e.scrollWidth>r.width}};function rE(t,n){return new Jd(t.get(Io),t.get(M),t.get(_n),n)}var Jd=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,r,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ue(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Da=class{enable(){}disable(){}attach(){}};function tg(t,n){return n.some(e=>{let r=t.bottom<e.top,i=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return r||i||o||s})}function QC(t,n){return n.some(e=>{let r=t.top<e.top,i=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return r||i||o||s})}function ou(t,n){return new eu(t.get(Io),t.get(_n),t.get(M),n)}var eu=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,r,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();tg(e,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},iE=(()=>{class t{_injector=u(ne);constructor(){}noop=()=>new Da;close=e=>rE(this._injector,e);block=()=>nE(this._injector);reposition=e=>ou(this._injector,e);static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ao=class{positionStrategy;scrollStrategy=new Da;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let r of e)n[r]!==void 0&&(this[r]=n[r])}}};var tu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var oE=(()=>{class t{_attachedOverlays=[];_document=u(Q);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let r=this._attachedOverlays.indexOf(e);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,r,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sE=(()=>{class t extends oE{_ngZone=u(M);_renderer=u(Ue).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),aE=(()=>{class t extends oE{_platform=u(he);_ngZone=u(M);_renderer=u(Ue).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=pt(e)};_clickListener=e=>{let r=pt(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(KC(a.overlayElement,r)||KC(a.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ge(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function KC(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===t)return!0;r=e&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var lE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),cE=(()=>{class t{_platform=u(he);_containerElement;_document=u(Q);_styleLoader=u(mt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||fm()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(e),fm()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(lE)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ng=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,r,i){this._renderer=e,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function rg(t){return t&&t.nodeType===1}var nu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=de.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(n,e,r,i,o,s,a,l,c,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=h,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=qe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=g(g({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Z(g({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=je(this._config.width),n.height=je(this._config.height),n.minWidth=je(this._config.minWidth),n.minHeight=je(this._config.minHeight),n.maxWidth=je(this._config.maxWidth),n.maxHeight=je(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;rg(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ng(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,r){let i=Jn(e||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=qe(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},XC="cdk-overlay-connected-position-bounding-box",MO=/([A-Za-z%]+)$/;function su(t,n){return new ru(n,t.get(_n),t.get(Q),t.get(he),t.get(cE))}var ru=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=de.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,r,i,o){this._viewportRuler=e,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(XC),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,i,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,r,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ei(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(XC),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof k?this._origin.nativeElement:rg(this._origin)?this._origin:null}_getOriginPoint(n,e,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;i=r.originX=="start"?s:a}e.left<0&&(i-=e.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(n,e,r){let i;r.overlayX=="center"?i=-e.width/2:r.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return r.overlayY=="center"?o=-e.height/2:o=r.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,e,r,i){let o=eE(e),{x:s,y:a}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-r.width,h=0-a,p=a+o.height-r.height,m=this._subtractOverflows(o.width,d,f),w=this._subtractOverflows(o.height,h,p),I=m*w;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:m==o.width}}_canFitWithFlexibleDimensions(n,e,r){if(this._hasFlexibleDimensions){let i=r.bottom-e.y,o=r.right-e.x,s=JC(this._overlayRef.getConfig().minHeight),a=JC(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=i,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=eE(e),o=this._viewportRect,s=Math.max(n.x+i.width-o.width,0),a=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,f=0;return i.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!TO(this._lastScrollVisibility,r)){let i=new tu(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,e){let r=this._viewportRect,i=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=r.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-a+this._getViewportMarginTop();else{let p=Math.min(r.bottom-n.y+r.top,n.y),m=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>m&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-m/2)}let l=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,c=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,d,f,h;if(c)h=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(r.right-n.x+r.left,n.x),m=this._lastBoundingBoxSize.width;d=p*2,f=n.x-p,d>m&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-m/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let r=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;i.width=je(r.width),i.height=je(r.height),i.top=je(r.top)||"auto",i.bottom=je(r.bottom)||"auto",i.left=je(r.left)||"auto",i.right=je(r.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=je(o)),s&&(i.maxWidth=je(s))}this._lastBoundingBoxSize=r,Ei(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Ei(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ei(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Ei(r,this._getExactOverlayY(e,n,d)),Ei(r,this._getExactOverlayX(e,n,d))}else r.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),r.transform=a.trim(),s.maxHeight&&(i?r.maxHeight=je(s.maxHeight):o&&(r.maxHeight="")),s.maxWidth&&(i?r.maxWidth=je(s.maxWidth):o&&(r.maxWidth="")),Ei(this._pane.style,r)}_getExactOverlayY(n,e,r){let i={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;i.bottom=`${s-(o.y+this._overlayRect.height)}px`}else i.top=je(o.y);return i}_getExactOverlayX(n,e,r){let i={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(o.x+this._overlayRect.width)}px`}else i.left=je(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:QC(n,r),isOriginOutsideView:tg(n,r),isOverlayClipped:QC(e,r),isOverlayOutsideView:tg(e,r)}}_subtractOverflows(n,...e){return e.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Jn(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof k)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+e,height:r,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let r=e.getBoundingClientRect();return n&&(e.style.display=""),r}};function Ei(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function JC(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(MO);return!e||e==="px"?parseFloat(n):null}return t||null}function eE(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function TO(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var tE="cdk-global-overlay-wrapper";function dE(t){return new iu}var iu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(tE),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:s,maxHeight:a}=r,l=(i==="100%"||i==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",p="",m="",w="";l?w="flex-start":d==="center"?(w="center",h?m=f:p=f):h?d==="left"||d==="end"?(w="flex-end",p=f):(d==="right"||d==="start")&&(w="flex-start",m=f):d==="left"||d==="start"?(w="flex-start",p=f):(d==="right"||d==="end")&&(w="flex-end",m=f),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":m,e.justifyContent=w,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,r=e.style;e.classList.remove(tE),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},uE=(()=>{class t{_injector=u(ne);constructor(){}global(){return dE()}flexibleConnectedTo(e){return su(this._injector,e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fE=new v("OVERLAY_DEFAULT_CONFIG");function au(t,n){t.get(mt).load(lE);let e=t.get(cE),r=t.get(Q),i=t.get(gt),o=t.get(Yt),s=t.get(xt),a=t.get(Me,null,{optional:!0})||t.get(Ue).createRenderer(null,null),l=new Ao(n),c=t.get(fE,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in r.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return rg(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new nu(new Sd(d,o,t),f,d,l,t.get(M),t.get(sE),r,t.get(yr),t.get(aE),n?.disableAnimations??t.get(bs,null,{optional:!0})==="NoopAnimations",t.get(ge),a)}var hE=(()=>{class t{scrollStrategies=u(iE);_positionBuilder=u(uE);_injector=u(ne);constructor(){}create(e){return au(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ig=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({providers:[hE],imports:[Ze,qw,Dm,Dm]})}return t})();var pE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[Ze]})}return t})();var og=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[Pw,pE,To,Ze]})}return t})();var AO=["panel"],RO=["*"];function kO(t,n){if(t&1&&(xe(0,"div",1,0),W(2),Ie()),t&2){let e=n.id,r=J();gn(r._classList),H("mat-mdc-autocomplete-visible",r.showPanel)("mat-mdc-autocomplete-hidden",!r.showPanel)("mat-autocomplete-panel-animations-enabled",!r._animationsDisabled)("mat-primary",r._color==="primary")("mat-accent",r._color==="accent")("mat-warn",r._color==="warn"),kn("id",r.id),Ee("aria-label",r.ariaLabel||null)("aria-labelledby",r._getPanelAriaLabelledby(e))}}var sg=class{source;option;constructor(n,e){this.source=n,this.option=e}},mE=new v("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),gE=(()=>{class t{_changeDetectorRef=u(Ve);_elementRef=u(k);_defaults=u(mE);_animationsDisabled=Ye();_activeOptionChanges=de.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new O;opened=new O;closed=new O;optionActivated=new O;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(gt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(he);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ra(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let r=new sg(this,e);this.optionSelected.emit(r)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let r=e?e+" ":"";return this.ariaLabelledby?r+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=x({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(r,i,o){if(r&1&&Et(o,To,5)(o,eg,5),r&2){let s;j(s=B())&&(i.options=s),j(s=B())&&(i.optionGroups=s)}},viewQuery:function(r,i){if(r&1&&ze(ut,7)(AO,5),r&2){let o;j(o=B())&&(i.template=o.first),j(o=B())&&(i.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ie],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ie],requireSelection:[2,"requireSelection","requireSelection",ie],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ie],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ie]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Te([{provide:Jm,useExisting:t}])],ngContentSelectors:RO,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(r,i){r&1&&(Se(),eo(0,kO,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var NO={provide:Wd,useExisting:$t(()=>ag),multi:!0};var OO=new v("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(ne);return()=>ou(t)}}),ag=(()=>{class t{_environmentInjector=u(ge);_element=u(k);_injector=u(ne);_viewContainerRef=u(ot);_zone=u(M);_changeDetectorRef=u(Ve);_dir=u(xt,{optional:!0});_formField=u(ba,{optional:!0,host:!0});_viewportRuler=u(_n);_scrollStrategy=u(OO);_renderer=u(Me);_animationsDisabled=Ye();_defaults=u(mE,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new C;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=de.EMPTY;_breakpointObserver=u(na);_handsetLandscapeSubscription=de.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new C;_overlayPanelClass=Jn(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&hd(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Mt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ue(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ue(()=>this._overlayAttached)):z()).pipe(Y(e=>e instanceof _a?e:null))}optionSelections=jr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(rt(e),He(()=>Mt(...e.map(r=>r.onSelectionChange)))):this._initialized.pipe(He(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new L(e=>{let r=o=>{let s=pt(o),a=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&s!==this._element.nativeElement&&!this._hasFocus()&&(!a||!a.contains(s))&&(!l||!l.contains(s))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(s)&&e.next(o)},i=[this._renderer.listen("document","click",r),this._renderer.listen("document","auxclick",r),this._renderer.listen("document","touchend",r)];return()=>{i.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let r=e,i=r.keyCode,o=Jt(r);if(i===27&&!o&&r.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),r.preventDefault();else if(this.autocomplete){let s=this.autocomplete._keyManager.activeItem,a=i===38||i===40;i===9||a&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(r):a&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(a||this.autocomplete._keyManager.activeItem!==s)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let r=e.target,i=r.value;if(r.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(s=>s.selected);if(o){let s=this._getDisplayValue(o.value);i!==s&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return im()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new L(i=>{qe(()=>{i.next()},{injector:this._environmentInjector})}),r=this.autocomplete.options?.changes.pipe(lt(()=>this._positionStrategy.reapplyLastPosition()),Pu(0))??z();return Mt(e,r).pipe(He(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Xe(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let r=this.autocomplete;return r&&r.displayWith?r.displayWith(e):e}_assignOptionValue(e){let r=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(r??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let r=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),r._emitSelectEvent(i),this._element.nativeElement.focus()):r.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,r){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(r)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let r=this.autocomplete.id;um(this._trackedModal,"aria-owns",r)}}_attachOverlay(e){if(!this.autocomplete)return;let r=this._overlayRef;r?(this._positionStrategy.setOrigin(this._getConnectedElement()),r.updateSize({width:this._getPanelWidth()})):(this._portal=new er(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),r=au(this._injector,this._getOverlayConfig()),this._overlayRef=r,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&r&&r.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Sw.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),r&&!r.hasAttached()&&(r.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Jt(e)||e.keyCode===38&&Jt(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ao({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=su(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let r=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],s;this.position==="above"?s=o:this.position==="below"?s=r:s=[...r,...o],e.withPositions(s)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let r=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){r=i;break}e._keyManager.setActiveItem(r)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let r=this.autocomplete,i=qC(e,r.options,r.optionGroups);if(e===0&&i===1)r._setScrollTop(0);else if(r.panel){let o=r.options.toArray()[e];if(o){let s=o._getHostElement(),a=ZC(s.offsetTop,s.offsetHeight,r._getScrollTop(),r.panel.nativeElement.offsetHeight);r._setScrollTop(a)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let r=this.autocomplete.id;this._trackedModal&&hd(this._trackedModal,"aria-owns",r),um(e,"aria-owns",r),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;hd(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(r){return new(r||t)};static \u0275dir=R({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(r,i){r&1&&fe("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(s){return i._handleInput(s)})("keydown",function(s){return i._handleKeydown(s)})("click",function(){return i._handleClick()}),r&2&&Ee("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ie]},exportAs:["matAutocompleteTrigger"],features:[Te([NO]),We]})}return t})(),vE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=se({type:t});static \u0275inj=re({imports:[ig,og,la,og,Ze]})}return t})();var PO=t=>({smooth:t});function LO(t,n){if(t&1&&S(0),t&2){let e=J();et(" Lvl. ",e.unit().stats.level," ")}}function VO(t,n){if(t&1&&S(0),t&2){let e,r=J();et(" ",(e=r.unit().classes)==null?null:e.at(0)," ")}}function jO(t,n){if(t&1&&ce(0,"img",8),t&2){let e,r=J();q("src",(e=r.teamDataService.getAffiliationByName(r.unit().affiliation))==null?null:e.spriteURL,pr)}}function BO(t,n){if(t&1&&(y(0,"div",9),S(1),_()),t&2){let e=J();D(),Qt(e.unit().player)}}function HO(t,n){if(t&1&&(y(0,"p"),S(1),_()),t&2){let e=n.$implicit;D(),Qt(e)}}function UO(t,n){if(t&1&&Pt(0,HO,2,1,"p",null,vr),t&2){let e=J();Lt(e.unit().textFields)}}function zO(t,n){if(t&1&&(y(0,"p"),S(1),_()),t&2){let e=n.$implicit;D(),et("Class: ",e)}}function $O(t,n){if(t&1&&Pt(0,zO,2,1,"p",null,vr),t&2){let e=J();Lt(e.unit().classes)}}function WO(t,n){if(t&1&&(y(0,"p"),S(1,"Character Application: "),y(2,"a",11),S(3,"Link"),_()()),t&2){let e=J();D(2),q("href",e.unit().characterApplicationURL,pr)}}var lu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(It)}unit=to.required();static \u0275fac=function(e){return new(e||t)(U(It))};static \u0275cmp=x({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},decls:23,vars:17,consts:[[1,"unitPortraitSprite",3,"src"],[1,"unitNameplateContainer"],[1,"unitNameplateRow"],["matIconButton",""],["src","img/caret.png","height","32","width","32"],[1,"unitNameplate"],[1,"nameText"],[1,"levelClassText"],[3,"src"],[1,"playerNameplate"],[1,"expandableUnitInfoContainer"],[3,"href"]],template:function(e,r){if(e&1&&(ce(0,"img",0),y(1,"div",1)(2,"div",2)(3,"button",3),ce(4,"img",4),_(),y(5,"div",5)(6,"div",6),S(7),_(),y(8,"div",7),ae(9,LO,1,1),ae(10,VO,1,1),_(),ae(11,jO,1,1,"img",8),_()(),ae(12,BO,2,1,"div",9),_(),y(13,"div",10),ae(14,UO,2,0),y(15,"p"),S(16),_(),y(17,"p"),S(18),_(),ae(19,$O,2,0),ae(20,WO,4,1,"p"),_(),y(21,"div"),S(22),_()),e&2){let i;gn(vn(15,PO,r.unit().sprite.portraitURL)),q("src",r.unit().sprite.portraitURL?r.unit().sprite.portraitURL:r.unit().sprite.spriteURL,pr),D(7),Qt(r.unit().name),D(2),le(r.unit().stats.level>0?9:-1),D(),le(r.unit().classes?10:-1),D(),le((i=r.teamDataService.getAffiliationByName(r.unit().affiliation))!=null&&i.spriteURL?11:-1),D(),le(r.unit().player?12:-1),D(2),le(r.unit().textFields?14:-1),D(2),et("Affiliation: ",r.unit().affiliation),D(2),et("Movement Type: ",r.unit().movementType),D(),le(r.unit().classes?19:-1),D(),le(r.unit().characterApplicationURL?20:-1),D(2),yc("HP ",r.unit().stats.hp.current," / ",r.unit().stats.hp.maximum)}},dependencies:[bm],styles:['img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:275px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding-left:8px;padding-right:8px}div.unitNameplateContainer[_ngcontent-%COMP%]   div.unitNameplateRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:flex-end}div.unitNameplateContainer[_ngcontent-%COMP%]   div.unitNameplateRow[_ngcontent-%COMP%]   div.unitNameplate[_ngcontent-%COMP%]{flex-grow:1;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft}div.unitNameplateContainer[_ngcontent-%COMP%]   div.unitNameplateRow[_ngcontent-%COMP%]   div.unitNameplate[_ngcontent-%COMP%]   div.nameText[_ngcontent-%COMP%]{font-size:var(--mat-sys-body-large-line-height);line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   div.unitNameplateRow[_ngcontent-%COMP%]   div.unitNameplate[_ngcontent-%COMP%]   div.levelClassText[_ngcontent-%COMP%]{padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{align-self:flex-end;max-width:50%;margin-right:16px;padding:2px 16px;border-radius:0 0 8px 8px;background-color:var(--mat-sys-secondary-container)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}']})};var GO=["unitAutocompleteInput"],qO=(t,n)=>n.name;function ZO(t,n){if(t&1&&(y(0,"mat-option",5)(1,"div",7),ce(2,"img",8),y(3,"div"),S(4),_()()()),t&2){let e=n.$implicit;q("value",e),D(2),q("src",e.sprite.spriteURL,pr),D(2),Qt(e.name)}}function YO(t,n){if(t&1&&ce(0,"unit-sidenav-display",6),t&2){let e=J();q("unit",e.selectedUnit.value)}}var cu=class t{constructor(n){this.dataService=n;this.dataService=u(It),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new qm(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,r)=>this._sortUnits(e,r))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(U(It))};static \u0275cmp=x({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,r){if(e&1&&ze(GO,5),e&2){let i;j(i=B())&&(r.unitAutocompleteInput=i.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,r){if(e&1&&(y(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),fe("focus",function(){return r.filterUnits()})("input",function(){return r.filterUnits()}),_(),y(5,"mat-autocomplete",4,1),Pt(7,ZO,5,3,"mat-option",5,qO),_()()(),ae(9,YO,1,1,"unit-sidenav-display",6),_()),e&2){let i=mn(6);D(3),q("formControl",r.selectedUnit)("matAutocomplete",i),D(2),q("displayWith",r.formatAutocompleteDisplayValue),D(2),Lt(r.filteredUnits),D(2),le(r.selectedUnit.value?9:-1)}},dependencies:[SC,EC,Gd,vC,bC,va,ya,Qd,WC,$C,vE,gE,To,ag,MC,Zm,lu],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var du=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,r){e&1&&(xe(0,"p"),S(1,"map-tiles-view works!"),Ie())},encapsulation:2})};function QO(t,n){t&1&&S(0," U ")}function KO(t,n){t&1&&S(0," T ")}function XO(t,n){t&1&&S(0," I ")}function JO(t,n){t&1&&S(0," L ")}function eF(t,n){t&1&&S(0," DR ")}function tF(t,n){if(t&1&&(y(0,"mat-tab",6),S(1),_()),t&2){let e=n.$implicit;q("label",e.title),D(),et(" ",e.title," ")}}var uu=class t{constructor(n,e,r,i){this.route=n;this.breakpointService=e;this.themeService=r;this.teamDataService=i;this.route=u(Ut),this.breakpointService=u(Fn),this.themeService=u(Pn),this.teamDataService=u(It);var o=this.route.snapshot.paramMap.get("teamName")??"";this.teamDataService.loadDataForTeam(o)}static \u0275fac=function(e){return new(e||t)(U(Ut),U(Fn),U(Pn),U(It))};static \u0275cmp=x({type:t,selectors:[["map-view"]],decls:25,vars:1,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],["mat-stretch-tabs","false","mat-align-tabs","start",1,"segmentTabs"],[3,"label"]],template:function(e,r){if(e&1){let i=Zn();y(0,"button",1),fe("click",function(){kt(i);let s=mn(4);return Nt(s.toggle())}),S(1,">"),_(),y(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),Dt(7,QO,1,0,"ng-template",4),ce(8,"map-units-sidenav"),_(),y(9,"mat-tab"),Dt(10,KO,1,0,"ng-template",4),ce(11,"map-tiles-sidenav"),_(),y(12,"mat-tab"),Dt(13,XO,1,0,"ng-template",4),S(14," Image download "),_(),y(15,"mat-tab"),Dt(16,JO,1,0,"ng-template",4),ce(17,"map-links-sidenav"),_(),y(18,"mat-tab"),Dt(19,eF,1,0,"ng-template",4),ce(20,"map-dice-roller-sidenav"),_()()(),y(21,"mat-sidenav-content")(22,"mat-tab-group",5),Pt(23,tF,2,2,"mat-tab",6,vr),_()()()}if(e&2){let i;D(3),q("mode",r.breakpointService.isScreenSmallWidth()?"over":"side"),D(20),Lt((i=r.teamDataService.mapData().map)==null?null:i.segments)}},dependencies:[xm,Ww,Cd,Lm,eC,Pm,Hw,Ad,cu,du,Td],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}']})};var fu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,r){e&1&&(xe(0,"p"),S(1,"map-analysis-view works!"),Ie())},encapsulation:2})};var hu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,r){e&1&&(xe(0,"p"),S(1,"convoy-view works!"),Ie())},encapsulation:2})};var pu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,r){e&1&&(xe(0,"p"),S(1,"shop-view works!"),Ie())},encapsulation:2})};var bE=[{path:"",component:Dd,title:"Reddit Emblem Maps"},{path:":teamName/map",component:uu,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:fu,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:hu,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:pu,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var yE={providers:[Hf(),tm(bE)]};var mu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,r){e&1&&ce(0,"router-outlet")},dependencies:[Ys],encapsulation:2})};xp(mu,yE).catch(t=>console.error(t));
