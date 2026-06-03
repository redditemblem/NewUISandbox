var D0=Object.defineProperty,E0=Object.defineProperties;var x0=Object.getOwnPropertyDescriptors;var hg=Object.getOwnPropertySymbols;var I0=Object.prototype.hasOwnProperty,M0=Object.prototype.propertyIsEnumerable;var pg=(t,n,e)=>n in t?D0(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,g=(t,n)=>{for(var e in n||={})I0.call(n,e)&&pg(t,e,n[e]);if(hg)for(var e of hg(n))M0.call(n,e)&&pg(t,e,n[e]);return t},X=(t,n)=>E0(t,x0(n));var ft=null,Ea=!1,_u=1,S0=null,Le=Symbol("SIGNAL");function L(t){let n=ft;return ft=t,n}function xa(){return ft}var ri={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function oi(t){if(Ea)throw new Error("");if(ft===null)return;ft.consumerOnSignalRead(t);let n=ft.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=ft.recomputing;if(i&&(e=n!==void 0?n.nextProducer:ft.producers,e!==void 0&&e.producer===t)){ft.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===ft&&(!i||A0(r,ft)))return;let o=Mr(ft),s={producer:t,consumer:ft,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};ft.producersTail=s,n!==void 0?n.nextProducer=s:ft.producers=s,o&&bg(t,s)}function mg(){_u++}function Ri(t){if(!(Mr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===_u)){if(!t.producerMustRecompute(t)&&!Ir(t)){xr(t);return}t.producerRecomputeValue(t),xr(t)}}function Cu(t){if(t.consumers===void 0)return;let n=Ea;Ea=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||T0(i)}}finally{Ea=n}}function wu(){return ft?.consumerAllowSignalWrites!==!1}function T0(t){t.dirty=!0,Cu(t),t.consumerMarkedDirty?.(t)}function xr(t){t.dirty=!1,t.lastCleanEpoch=_u}function jn(t){return t&&gg(t),L(t)}function gg(t){t.producersTail=void 0,t.recomputing=!0}function si(t,n){L(n),t&&vg(t)}function vg(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Mr(t))do e=Du(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Ir(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Ri(e),i!==e.version))return!0}return!1}function ai(t){if(Mr(t)){let n=t.producers;for(;n!==void 0;)n=Du(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function bg(t,n){let e=t.consumersTail,i=Mr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)bg(r.producer,r)}function Du(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Mr(n)){let o=n.producers;for(;o!==void 0;)o=Du(o)}return e}function Mr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function ko(t){S0?.(t)}function A0(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function No(t,n){return Object.is(t,n)}function Oo(t,n){let e=Object.create(R0);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Ri(e),oi(e),e.value===xn)throw e.error;return e.value};return i[Le]=e,ko(e),i}var Ti=Symbol("UNSET"),Ai=Symbol("COMPUTING"),xn=Symbol("ERRORED"),R0=X(g({},ri),{value:Ti,dirty:!0,error:null,equal:No,kind:"computed",producerMustRecompute(t){return t.value===Ti||t.value===Ai},producerRecomputeValue(t){if(t.value===Ai)throw new Error("");let n=t.value;t.value=Ai;let e=jn(t),i,r=!1;try{i=t.computation(),L(null),r=n!==Ti&&n!==xn&&i!==xn&&t.equal(n,i)}catch(o){i=xn,t.error=o}finally{si(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function k0(){throw new Error}var yg=k0;function _g(t){yg(t)}function Eu(t){yg=t}var N0=null;function xu(t,n){let e=Object.create(Fo);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Cg(e);return i[Le]=e,ko(e),[i,s=>ki(e,s),s=>Ia(e,s)]}function Cg(t){return oi(t),t.value}function ki(t,n){wu()||_g(t),t.equal(t.value,n)||(t.value=n,O0(t))}function Ia(t,n){wu()||_g(t),ki(t,n(t.value))}var Fo=X(g({},ri),{equal:No,value:void 0,kind:"signal"});function O0(t){t.version++,mg(),Cu(t),N0?.(t)}var Iu=X(g({},ri),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Mu(t){if(t.dirty=!1,t.version>0&&!Ir(t))return;t.version++;let n=jn(t);try{t.cleanup(),t.fn()}finally{si(t,n)}}function ne(t){return typeof t=="function"}function Sr(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Ma=Sr(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Ni(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var de=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ne(i))try{i()}catch(o){n=o instanceof Ma?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{wg(o)}catch(s){n=n??[],s instanceof Ma?n=[...n,...s.errors]:n.push(s)}}if(n)throw new Ma(n)}}add(n){var e;if(n&&n!==this)if(this.closed)wg(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Ni(e,n)}remove(n){let{_finalizers:e}=this;e&&Ni(e,n),n instanceof t&&n._removeParent(this)}};de.EMPTY=(()=>{let t=new de;return t.closed=!0,t})();var Su=de.EMPTY;function Sa(t){return t instanceof de||t&&"closed"in t&&ne(t.remove)&&ne(t.add)&&ne(t.unsubscribe)}function wg(t){ne(t)?t():t.unsubscribe()}var on={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Tr={setTimeout(t,n,...e){let{delegate:i}=Tr;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Tr;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ta(t){Tr.setTimeout(()=>{let{onUnhandledError:n}=on;if(n)n(t);else throw t})}function Oi(){}var Dg=Tu("C",void 0,void 0);function Eg(t){return Tu("E",void 0,t)}function xg(t){return Tu("N",t,void 0)}function Tu(t,n,e){return{kind:t,value:n,error:e}}var Fi=null;function Ar(t){if(on.useDeprecatedSynchronousErrorHandling){let n=!Fi;if(n&&(Fi={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Fi;if(Fi=null,e)throw i}}else t()}function Ig(t){on.useDeprecatedSynchronousErrorHandling&&Fi&&(Fi.errorThrown=!0,Fi.error=t)}var Pi=class extends de{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Sa(n)&&n.add(this)):this.destination=L0}static create(n,e,i){return new Bn(n,e,i)}next(n){this.isStopped?Ru(xg(n),this):this._next(n)}error(n){this.isStopped?Ru(Eg(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Ru(Dg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},F0=Function.prototype.bind;function Au(t,n){return F0.call(t,n)}var ku=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Aa(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Aa(i)}else Aa(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Aa(e)}}},Bn=class extends Pi{constructor(n,e,i){super();let r;if(ne(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&on.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Au(n.next,o),error:n.error&&Au(n.error,o),complete:n.complete&&Au(n.complete,o)}):r=n}this.destination=new ku(r)}};function Aa(t){on.useDeprecatedSynchronousErrorHandling?Ig(t):Ta(t)}function P0(t){throw t}function Ru(t,n){let{onStoppedNotification:e}=on;e&&Tr.setTimeout(()=>e(t,n))}var L0={closed:!0,next:Oi,error:P0,complete:Oi};var Rr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Nt(t){return t}function Nu(...t){return Ou(t)}function Ou(t){return t.length===0?Nt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var U=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=j0(e)?e:new Bn(e,i,r);return Ar(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Mg(i),new i((r,o)=>{let s=new Bn({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Rr](){return this}pipe(...e){return Ou(e)(this)}toPromise(e){return e=Mg(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function Mg(t){var n;return(n=t??on.Promise)!==null&&n!==void 0?n:Promise}function V0(t){return t&&ne(t.next)&&ne(t.error)&&ne(t.complete)}function j0(t){return t&&t instanceof Pi||V0(t)&&Sa(t)}function B0(t){return ne(t?.lift)}function ie(t){return n=>{if(B0(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function re(t,n,e,i,r){return new Fu(t,n,e,i,r)}var Fu=class extends Pi{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Sg=Sr(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=(()=>{class t extends U{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Ra(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Sg}next(e){Ar(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Ar(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Ar(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Su:(this.currentObservers=null,o.push(e),new de(()=>{this.currentObservers=null,Ni(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new U;return e.source=this,e}}return t.create=(n,e)=>new Ra(n,e),t})(),Ra=class extends x{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Su}};var $e=class extends x{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Po={now(){return(Po.delegate||Date).now()},delegate:void 0};var ka=class extends x{constructor(n=1/0,e=1/0,i=Po){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var Na=class extends de{constructor(n,e){super()}schedule(n,e=0){return this}};var Lo={setInterval(t,n,...e){let{delegate:i}=Lo;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Lo;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Oa=class extends Na{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Lo.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Lo.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Ni(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var kr=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};kr.now=Po.now;var Fa=class extends kr{constructor(n,e=kr.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Li=new Fa(Oa),Tg=Li;var Ne=new U(t=>t.complete());function Pa(t){return t&&ne(t.schedule)}function Pu(t){return t[t.length-1]}function La(t){return ne(Pu(t))?t.pop():void 0}function In(t){return Pa(Pu(t))?t.pop():void 0}function Ag(t,n){return typeof Pu(t)=="number"?t.pop():n}function kg(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(i.next(d))}catch(f){s(f)}}function l(d){try{c(i.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):r(d.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function Rg(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Vi(t){return this instanceof Vi?(this.v=t,this):new Vi(t)}function Ng(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(p){return function(m){return Promise.resolve(m).then(p,f)}}function a(p,m){i[p]&&(r[p]=function(E){return new Promise(function(M,R){o.push([p,E,M,R])>1||l(p,E)})},m&&(r[p]=m(r[p])))}function l(p,m){try{c(i[p](m))}catch(E){h(o[0][3],E)}}function c(p){p.value instanceof Vi?Promise.resolve(p.value.v).then(d,f):h(o[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,m){p(m),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Og(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Rg=="function"?Rg(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Va=t=>t&&typeof t.length=="number"&&typeof t!="function";function ja(t){return ne(t?.then)}function Ba(t){return ne(t[Rr])}function Ha(t){return Symbol.asyncIterator&&ne(t?.[Symbol.asyncIterator])}function Ua(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function H0(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var za=H0();function $a(t){return ne(t?.[za])}function Wa(t){return Ng(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Vi(e.read());if(r)return yield Vi(void 0);yield yield Vi(i)}}finally{e.releaseLock()}})}function Ga(t){return ne(t?.getReader)}function Ee(t){if(t instanceof U)return t;if(t!=null){if(Ba(t))return U0(t);if(Va(t))return z0(t);if(ja(t))return $0(t);if(Ha(t))return Fg(t);if($a(t))return W0(t);if(Ga(t))return G0(t)}throw Ua(t)}function U0(t){return new U(n=>{let e=t[Rr]();if(ne(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function z0(t){return new U(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function $0(t){return new U(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Ta)})}function W0(t){return new U(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Fg(t){return new U(n=>{q0(t,n).catch(e=>n.error(e))})}function G0(t){return Fg(Wa(t))}function q0(t,n){var e,i,r,o;return kg(this,void 0,void 0,function*(){try{for(e=Og(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Tt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function qa(t,n=0){return ie((e,i)=>{e.subscribe(re(i,r=>Tt(i,t,()=>i.next(r),n),()=>Tt(i,t,()=>i.complete(),n),r=>Tt(i,t,()=>i.error(r),n)))})}function Za(t,n=0){return ie((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Pg(t,n){return Ee(t).pipe(Za(n),qa(n))}function Lg(t,n){return Ee(t).pipe(Za(n),qa(n))}function Vg(t,n){return new U(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function jg(t,n){return new U(e=>{let i;return Tt(e,n,()=>{i=t[za](),Tt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>ne(i?.return)&&i.return()})}function Ya(t,n){if(!t)throw new Error("Iterable cannot be null");return new U(e=>{Tt(e,n,()=>{let i=t[Symbol.asyncIterator]();Tt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Bg(t,n){return Ya(Wa(t),n)}function Hg(t,n){if(t!=null){if(Ba(t))return Pg(t,n);if(Va(t))return Vg(t,n);if(ja(t))return Lg(t,n);if(Ha(t))return Ya(t,n);if($a(t))return jg(t,n);if(Ga(t))return Bg(t,n)}throw Ua(t)}function Re(t,n){return n?Hg(t,n):Ee(t)}function Z(...t){let n=In(t);return Re(t,n)}function Lu(t,n){let e=ne(t)?t:()=>t,i=r=>r.error(e());return new U(n?r=>n.schedule(i,0,r):i)}function Vo(t){return!!t&&(t instanceof U||ne(t.lift)&&ne(t.subscribe))}var ji=Sr(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Ug(t){return t instanceof Date&&!isNaN(t)}function J(t,n){return ie((e,i)=>{let r=0;e.subscribe(re(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Z0}=Array;function Y0(t,n){return Z0(n)?t(...n):t(n)}function Qa(t){return J(n=>Y0(t,n))}var{isArray:Q0}=Array,{getPrototypeOf:K0,prototype:X0,keys:J0}=Object;function Ka(t){if(t.length===1){let n=t[0];if(Q0(n))return{args:n,keys:null};if(eE(n)){let e=J0(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function eE(t){return t&&typeof t=="object"&&K0(t)===X0}function Xa(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function jo(...t){let n=In(t),e=La(t),{args:i,keys:r}=Ka(t);if(i.length===0)return Re([],n);let o=new U(tE(i,n,r?s=>Xa(r,s):Nt));return e?o.pipe(Qa(e)):o}function tE(t,n,e=Nt){return i=>{zg(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)zg(n,()=>{let c=Re(t[l],n),d=!1;c.subscribe(re(i,f=>{o[l]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function zg(t,n,e){t?Tt(e,t,n):n()}function $g(t,n,e,i,r,o,s,a){let l=[],c=0,d=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},p=E=>c<i?m(E):l.push(E),m=E=>{o&&n.next(E),c++;let M=!1;Ee(e(E,d++)).subscribe(re(n,R=>{r?.(R),o?p(R):n.next(R)},()=>{M=!0},void 0,()=>{if(M)try{for(c--;l.length&&c<i;){let R=l.shift();s?Tt(n,s,()=>m(R)):m(R)}h()}catch(R){n.error(R)}}))};return t.subscribe(re(n,p,()=>{f=!0,h()})),()=>{a?.()}}function ot(t,n,e=1/0){return ne(n)?ot((i,r)=>J((o,s)=>n(i,o,r,s))(Ee(t(i,r))),e):(typeof n=="number"&&(e=n),ie((i,r)=>$g(i,r,t,e)))}function Ja(t=1/0){return ot(Nt,t)}function Wg(){return Ja(1)}function Mn(...t){return Wg()(Re(t,In(t)))}function Bi(t){return new U(n=>{Ee(t()).subscribe(n)})}function Vu(...t){let n=La(t),{args:e,keys:i}=Ka(t),r=new U(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;Ee(e[d]).subscribe(re(o,h=>{f||(f=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?Xa(i,a):a),o.complete())}))}});return n?r.pipe(Qa(n)):r}function Hi(t=0,n,e=Tg){let i=-1;return n!=null&&(Pa(n)?e=n:i=n),new U(r=>{let o=Ug(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Ot(...t){let n=In(t),e=Ag(t,1/0),i=t;return i.length?i.length===1?Ee(i[0]):Ja(e)(Re(i,n)):Ne}function he(t,n){return ie((e,i)=>{let r=0;e.subscribe(re(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Gg(t){return ie((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(re(e,c=>{i=!0,r=c,o||Ee(t(c)).subscribe(o=re(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function el(t,n=Li){return Gg(()=>Hi(t,n))}function Bo(t){return ie((n,e)=>{let i=null,r=!1,o;i=n.subscribe(re(e,void 0,void 0,s=>{o=Ee(t(s,Bo(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Nr(t,n){return ne(n)?ot(t,n,1):ot(t,1)}function sn(t,n=Li){return ie((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}a()}e.subscribe(re(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function qg(t){return ie((n,e)=>{let i=!1;n.subscribe(re(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function nt(t){return t<=0?()=>Ne:ie((n,e)=>{let i=0;n.subscribe(re(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Zg(){return ie((t,n)=>{t.subscribe(re(n,Oi))})}function Or(t){return J(()=>t)}function ju(t,n){return n?e=>Mn(n.pipe(nt(1),Zg()),e.pipe(ju(t))):ot((e,i)=>Ee(t(e,i)).pipe(nt(1),Or(e)))}function Bu(t,n=Li){let e=Hi(t,n);return ju(()=>e)}function tl(t,n=Nt){return t=t??nE,ie((e,i)=>{let r,o=!0;e.subscribe(re(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function nE(t,n){return t===n}function Yg(t=iE){return ie((n,e)=>{let i=!1;n.subscribe(re(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function iE(){return new ji}function Ho(t){return ie((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Hn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?he((r,o)=>t(r,o,i)):Nt,nt(1),e?qg(n):Yg(()=>new ji))}function nl(t){return t<=0?()=>Ne:ie((n,e)=>{let i=[];n.subscribe(re(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function il(){return ie((t,n)=>{let e,i=!1;t.subscribe(re(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Qg(t={}){let{connector:n=()=>new x,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=l=void 0,d=f=!1},m=()=>{let E=s;p(),E?.unsubscribe()};return ie((E,M)=>{c++,!f&&!d&&h();let R=l=l??n();M.add(()=>{c--,c===0&&!f&&!d&&(a=Hu(m,r))}),R.subscribe(M),!s&&c>0&&(s=new Bn({next:ve=>R.next(ve),error:ve=>{f=!0,h(),a=Hu(p,e,ve),R.error(ve)},complete:()=>{d=!0,h(),a=Hu(p,i),R.complete()}}),Ee(E).subscribe(s))})(o)}}function Hu(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Bn({next:()=>{i.unsubscribe(),t()}});return Ee(n(...e)).subscribe(i)}function rl(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Qg({connector:()=>new ka(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Ui(t){return he((n,e)=>t<=e)}function st(...t){let n=In(t);return ie((e,i)=>{(n?Mn(t,e,n):Mn(t,e)).subscribe(i)})}function We(t,n){return ie((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(re(i,l=>{r?.unsubscribe();let c=0,d=o++;Ee(t(l,d)).subscribe(r=re(i,f=>i.next(n?n(l,f,d,c++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function xe(t){return ie((n,e)=>{Ee(t).subscribe(re(e,()=>e.complete(),Oi)),!e.closed&&n.subscribe(e)})}function ht(t,n,e){let i=ne(t)||n||e?{next:t,error:n,complete:e}:t;return i?ie((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(re(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Nt}var Uu;function ol(){return Uu}function Sn(t){let n=Uu;return Uu=t,n}var Kg=Symbol("NotFound");function Fr(t){return t===Kg||t?.name==="\u0275NotFound"}function zu(t,n,e){let i=Object.create(rE);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Ri(i),oi(i),i.value===xn)throw i.error;return i.value};return o[Le]=i,ko(i),o}function Xg(t,n){Ri(t),ki(t,n),xr(t)}function Jg(t,n){if(Ri(t),t.value===xn)throw t.error;Ia(t,n),xr(t)}var rE=X(g({},ri),{value:Ti,dirty:!0,error:null,equal:No,kind:"linkedSignal",producerMustRecompute(t){return t.value===Ti||t.value===Ai},producerRecomputeValue(t){if(t.value===Ai)throw new Error("");let n=t.value;t.value=Ai;let e=jn(t),i,r=!1;try{let o=t.source(),s=n!==Ti&&n!==xn,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,L(null),r=s&&i!==xn&&t.equal(n,i)}catch(o){i=xn,t.error=o}finally{si(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function ev(t){let n=L(null);try{return t()}finally{L(n)}}var fl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",I=class extends Error{code;constructor(n,e){super(di(n,e)),this.code=n}};function oE(t){return`NG0${Math.abs(t)}`}function di(t,n){return`${oE(t)}${n?": "+n:""}`}var Zo=globalThis;function Ce(t){for(let n in t)if(t[n]===Ce)return n;throw Error("")}function ov(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Yo(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Yo).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function hl(t,n){return t?n?`${t} ${n}`:t:n||""}var sE=Ce({__forward_ref__:Ce});function qt(t){return t.__forward_ref__=qt,t}function at(t){return nf(t)?t():t}function nf(t){return typeof t=="function"&&t.hasOwnProperty(sE)&&t.__forward_ref__===qt}function b(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function se(t){return{providers:t.providers||[],imports:t.imports||[]}}function Qo(t){return aE(t,pl)}function rf(t){return Qo(t)!==null}function aE(t,n){return t.hasOwnProperty(n)&&t[n]||null}function lE(t){let n=t?.[pl]??null;return n||null}function Wu(t){return t&&t.hasOwnProperty(al)?t[al]:null}var pl=Ce({\u0275prov:Ce}),al=Ce({\u0275inj:Ce}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=b({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function of(t){return t&&!!t.\u0275providers}var sf=Ce({\u0275cmp:Ce}),af=Ce({\u0275dir:Ce}),lf=Ce({\u0275pipe:Ce}),cf=Ce({\u0275mod:Ce}),zo=Ce({\u0275fac:Ce}),Zi=Ce({__NG_ELEMENT_ID__:Ce}),tv=Ce({__NG_ENV_ID__:Ce});function df(t){return ml(t,"@NgModule"),t[cf]||null}function zn(t){return ml(t,"@Component"),t[sf]||null}function uf(t){return ml(t,"@Directive"),t[af]||null}function sv(t){return ml(t,"@Pipe"),t[lf]||null}function ml(t,n){if(t==null)throw new I(-919,!1)}function Ko(t){return typeof t=="string"?t:t==null?"":String(t)}var av=Ce({ngErrorCode:Ce}),cE=Ce({ngErrorMessage:Ce}),dE=Ce({ngTokenPath:Ce});function ff(t,n){return lv("",-200,n)}function gl(t,n){throw new I(-201,!1)}function lv(t,n,e){let i=new I(n,t);return i[av]=n,i[cE]=t,e&&(i[dE]=e),i}function uE(t){return t[av]}var Gu;function cv(){return Gu}function Ft(t){let n=Gu;return Gu=t,n}function hf(t,n,e){let i=Qo(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;gl(t,"")}var fE={},zi=fE,hE="__NG_DI_FLAG__",qu=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=$i(e)||0;try{return this.injector.get(n,i&8?null:zi,i)}catch(r){if(Fr(r))return r;throw r}}};function pE(t,n=0){let e=ol();if(e===void 0)throw new I(-203,!1);if(e===null)return hf(t,void 0,n);{let i=mE(n),r=e.retrieve(t,i);if(Fr(r)){if(i.optional)return null;throw r}return r}}function H(t,n=0){return(cv()||pE)(at(t),n)}function u(t,n){return H(t,$i(n))}function $i(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function mE(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Zu(t){let n=[];for(let e=0;e<t.length;e++){let i=at(t[e]);if(Array.isArray(i)){if(i.length===0)throw new I(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=gE(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(H(r,o))}else n.push(H(i))}return n}function gE(t){return t[hE]}function Wi(t,n){let e=t.hasOwnProperty(zo);return e?t[zo]:null}function dv(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function uv(t){return t.flat(Number.POSITIVE_INFINITY)}function vl(t,n){t.forEach(e=>Array.isArray(e)?vl(e,n):n(e))}function pf(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Xo(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function fv(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function hv(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function bl(t,n,e){let i=Lr(t,n);return i>=0?t[i|1]=e:(i=~i,hv(t,i,n,e)),i}function yl(t,n){let e=Lr(t,n);if(e>=0)return t[e|1]}function Lr(t,n){return vE(t,n,1)}function vE(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var ui={},pt=[],Yi=new v(""),mf=new v("",-1),gf=new v(""),$o=class{get(n,e=zi){if(e===zi){let r=lv("",-201);throw r.name="\u0275NotFound",r}return e}};function Qi(t){return{\u0275providers:t}}function pv(t){return Qi([{provide:Yi,multi:!0,useValue:t}])}function mv(...t){return{\u0275providers:vf(!0,t),\u0275fromNgModule:!0}}function vf(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return vl(n,s=>{let a=s;ll(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&gv(r,o),e}function gv(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];bf(r,o=>{n(o,i)})}}function ll(t,n,e,i){if(t=at(t),!t)return!1;let r=null,o=Wu(t),s=!o&&zn(t);if(!o&&!s){let l=t.ngModule;if(o=Wu(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)ll(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;vl(o.imports,d=>{ll(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&gv(c,n)}if(!a){let c=Wi(r)||(()=>new r);n({provide:r,useFactory:c,deps:pt},r),n({provide:gf,useValue:r,multi:!0},r),n({provide:Yi,useValue:()=>H(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;bf(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function bf(t,n){for(let e of t)of(e)&&(e=e.\u0275providers),Array.isArray(e)?bf(e,n):n(e)}var bE=Ce({provide:String,useValue:Ce});function vv(t){return t!==null&&typeof t=="object"&&bE in t}function yE(t){return!!(t&&t.useExisting)}function _E(t){return!!(t&&t.useFactory)}function Gi(t){return typeof t=="function"}function bv(t){return!!t.useClass}var Jo=new v(""),sl={},nv={},$u;function Vr(){return $u===void 0&&($u=new $o),$u}var be=class{},qi=class extends be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Qu(n,s=>this.processProvider(s)),this.records.set(mf,Pr(void 0,this)),r.has("environment")&&this.records.set(be,Pr(void 0,this));let o=this.records.get(Jo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(gf,pt,{self:!0}))}retrieve(n,e){let i=$i(e)||0;try{return this.get(n,zi,i)}catch(r){if(Fr(r))return r;throw r}}destroy(){Uo(this),this._destroyed=!0;let n=L(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),L(n)}}onDestroy(n){return Uo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Uo(this);let e=Sn(this),i=Ft(void 0),r;try{return n()}finally{Sn(e),Ft(i)}}get(n,e=zi,i){if(Uo(this),n.hasOwnProperty(tv))return n[tv](this);let r=$i(i),o,s=Sn(this),a=Ft(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=xE(n)&&Qo(n);d&&this.injectableDefInScope(d)?c=Pr(Yu(n),sl):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Vr():this.parent;return e=r&8&&e===zi?null:e,l.get(n,e)}catch(l){let c=uE(l);throw c===-200||c===-201?new I(c,null):l}finally{Ft(a),Sn(s)}}resolveInjectorInitializers(){let n=L(null),e=Sn(this),i=Ft(void 0),r;try{let o=this.get(Yi,pt,{self:!0});for(let s of o)s()}finally{Sn(e),Ft(i),L(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=at(n);let e=Gi(n)?n:at(n&&n.provide),i=wE(n);if(!Gi(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Pr(void 0,sl,!0),r.factory=()=>Zu(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=L(null);try{if(e.value===nv)throw ff("");return e.value===sl&&(e.value=nv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&EE(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{L(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=at(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Yu(t){let n=Qo(t),e=n!==null?n.factory:Wi(t);if(e!==null)return e;if(t instanceof v)throw new I(-204,!1);if(t instanceof Function)return CE(t);throw new I(-204,!1)}function CE(t){if(t.length>0)throw new I(-204,!1);let e=lE(t);return e!==null?()=>e.factory(t):()=>new t}function wE(t){if(vv(t))return Pr(void 0,t.useValue);{let n=yf(t);return Pr(n,sl)}}function yf(t,n,e){let i;if(Gi(t)){let r=at(t);return Wi(r)||Yu(r)}else if(vv(t))i=()=>at(t.useValue);else if(_E(t))i=()=>t.useFactory(...Zu(t.deps||[]));else if(yE(t))i=(r,o)=>H(at(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=at(t&&(t.useClass||t.provide));if(DE(t))i=()=>new r(...Zu(t.deps));else return Wi(r)||Yu(r)}return i}function Uo(t){if(t.destroyed)throw new I(-205,!1)}function Pr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function DE(t){return!!t.deps}function EE(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function xE(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Qu(t,n){for(let e of t)Array.isArray(e)?Qu(e,n):e&&of(e)?Qu(e.\u0275providers,n):n(e)}function it(t,n){let e;t instanceof qi?(Uo(t),e=t):e=new qu(t);let i,r=Sn(e),o=Ft(void 0);try{return n()}finally{Sn(r),Ft(o)}}function yv(){return cv()!==void 0||ol()!=null}var ln=0,z=1,Y=2,Ye=3,Zt=4,Dt=5,Ki=6,jr=7,Ve=8,$n=9,cn=10,Ae=11,Br=12,_f=13,Xi=14,Et=15,fi=16,Ji=17,An=18,Wn=19,Cf=20,Un=21,_l=22,li=23,Pt=24,er=25,hi=26,je=27,_v=1,wf=6,pi=7,es=8,tr=9,Oe=10;function Gn(t){return Array.isArray(t)&&typeof t[_v]=="object"}function dn(t){return Array.isArray(t)&&t[_v]===!0}function Df(t){return(t.flags&4)!==0}function Rn(t){return t.componentOffset>-1}function ts(t){return(t.flags&1)===1}function kn(t){return!!t.template}function Hr(t){return(t[Y]&512)!==0}function nr(t){return(t[Y]&256)===256}var Cv="svg",wv="math";function Yt(t){for(;Array.isArray(t);)t=t[ln];return t}function Ef(t,n){return Yt(n[t])}function Qt(t,n){return Yt(n[t.index])}function Cl(t,n){return t.data[n]}function Dv(t,n){return t[n]}function Kt(t,n){let e=n[t];return Gn(e)?e:e[ln]}function Ev(t){return(t[Y]&4)===4}function wl(t){return(t[Y]&128)===128}function xv(t){return dn(t[Ye])}function Lt(t,n){return n==null?null:t[n]}function xf(t){t[Ji]=0}function If(t){t[Y]&1024||(t[Y]|=1024,wl(t)&&ir(t))}function Iv(t,n){for(;t>0;)n=n[Xi],t--;return n}function ns(t){return!!(t[Y]&9216||t[Pt]?.dirty)}function Dl(t){t[cn].changeDetectionScheduler?.notify(8),t[Y]&64&&(t[Y]|=1024),ns(t)&&ir(t)}function ir(t){t[cn].changeDetectionScheduler?.notify(0);let n=ci(t);for(;n!==null&&!(n[Y]&8192||(n[Y]|=8192,!wl(n)));)n=ci(n)}function Mf(t,n){if(nr(t))throw new I(911,!1);t[Un]===null&&(t[Un]=[]),t[Un].push(n)}function Mv(t,n){if(t[Un]===null)return;let e=t[Un].indexOf(n);e!==-1&&t[Un].splice(e,1)}function ci(t){let n=t[Ye];return dn(n)?n[Ye]:n}function Sf(t){return t[jr]??=[]}function Tf(t){return t.cleanup??=[]}function Sv(t,n,e,i){let r=Sf(n);r.push(e),t.firstCreatePass&&Tf(t).push(i,r.length-1)}var ce={lFrame:jv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ku=!1;function Tv(){return ce.lFrame.elementDepthCount}function Av(){ce.lFrame.elementDepthCount++}function Af(){ce.lFrame.elementDepthCount--}function Rf(){return ce.bindingsEnabled}function kf(){return ce.skipHydrationRootTNode!==null}function Nf(t){return ce.skipHydrationRootTNode===t}function Of(){ce.skipHydrationRootTNode=null}function K(){return ce.lFrame.lView}function Fe(){return ce.lFrame.tView}function Vt(t){return ce.lFrame.contextLView=t,t[Ve]}function jt(t){return ce.lFrame.contextLView=null,t}function mt(){let t=Ff();for(;t!==null&&t.type===64;)t=t.parent;return t}function Ff(){return ce.lFrame.currentTNode}function Rv(){let t=ce.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Ur(t,n){let e=ce.lFrame;e.currentTNode=t,e.isParent=n}function Pf(){return ce.lFrame.isParent}function Lf(){ce.lFrame.isParent=!1}function kv(){return ce.lFrame.contextLView}function Vf(){return Ku}function Wo(t){let n=Ku;return Ku=t,n}function jf(){let t=ce.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Nv(t){return ce.lFrame.bindingIndex=t}function qn(){return ce.lFrame.bindingIndex++}function Bf(t){let n=ce.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Ov(){return ce.lFrame.inI18n}function Fv(t,n){let e=ce.lFrame;e.bindingIndex=e.bindingRootIndex=t,El(n)}function Pv(){return ce.lFrame.currentDirectiveIndex}function El(t){ce.lFrame.currentDirectiveIndex=t}function Lv(t){let n=ce.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function xl(){return ce.lFrame.currentQueryIndex}function is(t){ce.lFrame.currentQueryIndex=t}function IE(t){let n=t[z];return n.type===2?n.declTNode:n.type===1?t[Dt]:null}function Hf(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=IE(o),r===null||(o=o[Xi],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ce.lFrame=Vv();return i.currentTNode=n,i.lView=t,!0}function Il(t){let n=Vv(),e=t[z];ce.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Vv(){let t=ce.lFrame,n=t===null?null:t.child;return n===null?jv(t):n}function jv(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Bv(){let t=ce.lFrame;return ce.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Uf=Bv;function Ml(){let t=Bv();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Hv(t){return(ce.lFrame.contextLView=Iv(t,ce.lFrame.contextLView))[Ve]}function Zn(){return ce.lFrame.selectedIndex}function mi(t){ce.lFrame.selectedIndex=t}function rs(){let t=ce.lFrame;return Cl(t.tView,t.selectedIndex)}function Uv(){return ce.lFrame.currentNamespace}var zv=!0;function Sl(){return zv}function Tl(t){zv=t}function Xu(t,n=null,e=null,i){let r=zf(t,n,e,i);return r.resolveInjectorInitializers(),r}function zf(t,n=null,e=null,i,r=new Set){let o=[e||pt,mv(t)],s;return new qi(o,n||Vr(),s||null,r)}var oe=class t{static THROW_IF_NOT_FOUND=zi;static NULL=new $o;static create(n,e){if(Array.isArray(n))return Xu({name:""},e,n,"");{let i=n.name??"";return Xu({name:i},n.parent,n.providers,i)}}static \u0275prov=b({token:t,providedIn:"any",factory:()=>H(mf)});static __NG_ELEMENT_ID__=-1},ee=new v(""),xt=(()=>{class t{static __NG_ELEMENT_ID__=ME;static __NG_ENV_ID__=e=>e}return t})(),cl=class extends xt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return nr(this._lView)}onDestroy(n){let e=this._lView;return Mf(e,n),()=>Mv(e,n)}};function ME(){return new cl(K())}var $v=!1,Wv=new v(""),Yn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new $e(!1);debugTaskTracker=u(Wv,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new U(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ju=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,yv()&&(this.destroyRef=u(xt,{optional:!0})??void 0,this.pendingTasks=u(Yn,{optional:!0})??void 0)}emit(n){let e=L(null);try{super.next(n)}finally{L(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof de&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},V=Ju;function dl(...t){}function $f(t){let n,e;function i(){t=dl;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Gv(t){return queueMicrotask(()=>t()),()=>{t=dl}}var Wf="isAngularZone",Go=Wf+"_ID",SE=0,T=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new V(!1);onMicrotaskEmpty=new V(!1);onStable=new V(!1);onError=new V(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=$v}=n;if(typeof Zone>"u")throw new I(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,RE(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Wf)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new I(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new I(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,TE,dl,dl);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},TE={};function Gf(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function AE(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){$f(()=>{t.callbackScheduled=!1,ef(t),t.isCheckStableRunning=!0,Gf(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),ef(t)}function RE(t){let n=()=>{AE(t)},e=SE++;t._inner=t._inner.fork({name:"angular",properties:{[Wf]:!0,[Go]:e,[Go+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(kE(l))return i.invokeTask(o,s,a,l);try{return iv(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),rv(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return iv(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!NE(l)&&n(),rv(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,ef(t),Gf(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function ef(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function iv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function rv(t){t._nesting--,Gf(t)}var qo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new V;onMicrotaskEmpty=new V;onStable=new V;onError=new V;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function kE(t){return qv(t,"__ignore_ng_zone__")}function NE(t){return qv(t,"__scheduler_tick__")}function qv(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var an=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Bt=new v("",{factory:()=>{let t=u(T),n=u(be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(an),e.handleError(i))})}}}),Zv={provide:Yi,useValue:()=>{let t=u(an,{optional:!0})},multi:!0},OE=new v("",{factory:()=>{let t=u(ee).defaultView;if(!t)return;let n=u(Bt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(xt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function qf(){return Qi([pv(()=>{u(OE)})])}function j(t,n){let[e,i,r]=xu(t,n?.equal),o=e,s=o[Le];return o.set=i,o.update=r,o.asReadonly=Al.bind(o),o}function Al(){let t=this[Le];if(t.readonlyFn===void 0){let n=()=>this();n[Le]=t,t.readonlyFn=n}return t.readonlyFn}var zr=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=FE}return t})();function FE(){return new zr(K(),mt())}var Tn=class{},os=new v("",{factory:()=>!0});var Zf=new v(""),ss=(()=>{class t{internalPendingTasks=u(Yn);scheduler=u(Tn);errorHandler=u(Bt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),Rl=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new tf})}return t})(),tf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},ul=class{[Le];constructor(n){this[Le]=n}destroy(){this[Le].destroy()}};function un(t,n){let e=n?.injector??u(oe),i=n?.manualCleanup!==!0?e.get(xt):null,r,o=e.get(zr,null,{optional:!0}),s=e.get(Tn);return o!==null?(r=VE(o.view,s,t),i instanceof cl&&i._lView===o.view&&(i=null)):r=jE(t,e.get(Rl),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new ul(r)}var Yv=X(g({},Iu),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Wo(!1);try{Mu(this)}finally{Wo(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=L(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],L(t)}}}),PE=X(g({},Yv),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ai(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),LE=X(g({},Yv),{consumerMarkedDirty(){this.view[Y]|=8192,ir(this.view),this.notifier.notify(13)},destroy(){if(ai(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[li]?.delete(this)}});function VE(t,n,e){let i=Object.create(LE);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Qv(i,e),t[li]??=new Set,t[li].add(i),i.consumerMarkedDirty(i),i}function jE(t,n,e){let i=Object.create(PE);return i.fn=Qv(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Qv(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function gs(t){return{toString:t}.toString()}function YE(t){return typeof t=="function"}function Ib(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Vl=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Be=(()=>{let t=()=>Mb;return t.ngInherit=!0,t})();function Mb(t){return t.type.prototype.ngOnChanges&&(t.setInput=KE),QE}function QE(){let t=Tb(this),n=t?.current;if(n){let e=t.previous;if(e===ui)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function KE(t,n,e,i,r){let o=this.declaredInputs[i],s=Tb(t)||XE(t,{previous:ui,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Vl(c&&c.currentValue,e,l===ui),Ib(t,n,r,e)}var Sb="__ngSimpleChanges__";function Tb(t){return t[Sb]||null}function XE(t,n){return t[Sb]=n}var Kv=[];var we=function(t,n=null,e){for(let i=0;i<Kv.length;i++){let r=Kv[i];r(t,n,e)}},ge=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ge||{});function JE(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=Mb(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Ab(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Ol(t,n,e){Rb(t,n,3,e)}function Fl(t,n,e,i){(t[Y]&3)===e&&Rb(t,n,e,i)}function Yf(t,n){let e=t[Y];(e&3)===n&&(e&=16383,e+=1,t[Y]=e)}function Rb(t,n,e,i){let r=i!==void 0?t[Ji]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[Ji]+=65536),(a<o||o==-1)&&(ex(t,e,n,l),t[Ji]=(t[Ji]&4294901760)+l+2),l++}function Xv(t,n){we(ge.LifecycleHookStart,t,n);let e=L(null);try{n.call(t)}finally{L(e),we(ge.LifecycleHookEnd,t,n)}}function ex(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[Y]>>14<t[Ji]>>16&&(t[Y]&3)===n&&(t[Y]+=16384,Xv(a,o)):Xv(a,o)}var Wr=-1,or=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function tx(t){return(t.flags&8)!==0}function nx(t){return(t.flags&16)!==0}function ix(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];rx(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function kb(t){return t===3||t===4||t===6}function rx(t){return t.charCodeAt(0)===64}function Gr(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Jv(t,e,r,null,n[++i]):Jv(t,e,r,null,null))}}return t}function Jv(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Nb(t){return t!==Wr}function jl(t){return t&32767}function ox(t){return t>>16}function Bl(t,n){let e=ox(t),i=n;for(;e>0;)i=i[Xi],e--;return i}var sh=!0;function eb(t){let n=sh;return sh=t,n}var sx=256,Ob=sx-1,Fb=5,ax=0,Nn={};function lx(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Zi)&&(i=e[Zi]),i==null&&(i=e[Zi]=ax++);let r=i&Ob,o=1<<r;n.data[t+(r>>Fb)]|=o}function Hl(t,n){let e=Pb(t,n);if(e!==-1)return e;let i=n[z];i.firstCreatePass&&(t.injectorIndex=n.length,Qf(i.data,t),Qf(n,null),Qf(i.blueprint,null));let r=Oh(t,n),o=t.injectorIndex;if(Nb(r)){let s=jl(r),a=Bl(r,n),l=a[z].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function Qf(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Pb(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Oh(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Hb(r),i===null)return Wr;if(e++,r=r[Xi],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Wr}function ah(t,n,e){lx(t,n,e)}function cx(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(kb(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Lb(t,n,e){if(e&8||t!==void 0)return t;gl(n,"NodeInjector")}function Vb(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[$n],o=Ft(void 0);try{return r?r.get(n,i,e&8):hf(n,i,e&8)}finally{Ft(o)}}return Lb(i,n,e)}function jb(t,n,e,i=0,r){if(t!==null){if(n[Y]&2048&&!(i&2)){let s=hx(t,n,e,i,Nn);if(s!==Nn)return s}let o=Bb(t,n,e,i,Nn);if(o!==Nn)return o}return Vb(n,e,i,r)}function Bb(t,n,e,i,r){let o=ux(e);if(typeof o=="function"){if(!Hf(n,t,i))return i&1?Lb(r,e,i):Vb(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))gl(e);else return s}finally{Uf()}}else if(typeof o=="number"){let s=null,a=Pb(t,n),l=Wr,c=i&1?n[Et][Dt]:null;for((a===-1||i&4)&&(l=a===-1?Oh(t,n):n[a+8],l===Wr||!nb(i,!1)?a=-1:(s=n[z],a=jl(l),n=Bl(l,n)));a!==-1;){let d=n[z];if(tb(o,a,d.data)){let f=dx(a,n,e,s,i,c);if(f!==Nn)return f}l=n[a+8],l!==Wr&&nb(i,n[z].data[a+8]===c)&&tb(o,a,n)?(s=d,a=jl(l),n=Bl(l,n)):a=-1}}return r}function dx(t,n,e,i,r,o){let s=n[z],a=s.data[t+8],l=i==null?Rn(a)&&sh:i!=s&&(a.type&3)!==0,c=r&1&&o===a,d=Pl(a,s,e,l,c);return d!==null?ds(n,s,d,a,r):Nn}function Pl(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:c;for(let p=f;p<h;p++){let m=s[p];if(p<l&&e===m||p>=l&&m.type===e)return p}if(r){let p=s[l];if(p&&kn(p)&&p.type===e)return l}return null}function ds(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof or){let a=o;if(a.resolving)throw ff("");let l=eb(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?Ft(a.injectImpl):null,h=Hf(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&JE(e,s[e],n)}finally{f!==null&&Ft(f),eb(l),a.resolving=!1,Uf()}}return o}function ux(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Zi)?t[Zi]:void 0;return typeof n=="number"?n>=0?n&Ob:fx:n}function tb(t,n,e){let i=1<<t;return!!(e[n+(t>>Fb)]&i)}function nb(t,n){return!(t&2)&&!(t&1&&n)}var rr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return jb(this._tNode,this._lView,n,$i(i),e)}};function fx(){return new rr(mt(),K())}function Qe(t){return gs(()=>{let n=t.prototype.constructor,e=n[zo]||lh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[zo]||lh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function lh(t){return nf(t)?()=>{let n=lh(at(t));return n&&n()}:Wi(t)}function hx(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[Y]&2048&&!Hr(s);){let a=Bb(o,s,e,i|2,Nn);if(a!==Nn)return a;let l=o.parent;if(!l){let c=s[Cf];if(c){let d=c.get(e,Nn,i&-5);if(d!==Nn)return d}l=Hb(s),s=s[Xi]}o=l}return r}function Hb(t){let n=t[z],e=n.type;return e===2?n.declTNode:e===1?t[Dt]:null}function vs(t){return cx(mt(),t)}function px(){return Kr(mt(),K())}function Kr(t,n){return new P(Qt(t,n))}var P=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=px}return t})();function Ub(t){return t instanceof P?t.nativeElement:t}function mx(){return this._results[Symbol.iterator]()}var pn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=uv(n);(this._changesDetected=!dv(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=mx};function zb(t){return(t.flags&128)===128}var Fh=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Fh||{}),$b=new Map,gx=0;function vx(){return gx++}function bx(t){$b.set(t[Wn],t)}function ch(t){$b.delete(t[Wn])}var ib="__ngContext__";function qr(t,n){Gn(n)?(t[ib]=n[Wn],bx(n)):t[ib]=n}function Wb(t){return qb(t[Br])}function Gb(t){return qb(t[Zt])}function qb(t){for(;t!==null&&!dn(t);)t=t[Zt];return t}var yx;function Ph(t){yx=t}var Xr=new v("",{factory:()=>_x}),_x="ng";var tc=new v(""),cr=new v("",{providedIn:"platform",factory:()=>"unknown"}),bs=new v(""),dr=new v("",{factory:()=>u(ee).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Zb="r";var Yb="di";var Qb=!1,Kb=new v("",{factory:()=>Qb});var Cx=(t,n,e,i)=>{};function wx(t,n,e,i){Cx(t,n,e,i)}function nc(t){return(t.flags&32)===32}var Dx=()=>null;function Xb(t,n,e=!1){return Dx(t,n,e)}function Jb(t,n){let e=t.contentQueries;if(e!==null){let i=L(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];is(o),a.contentQueries(2,n[s],s)}}}finally{L(i)}}}function dh(t,n,e){is(0);let i=L(null);try{n(t,e)}finally{L(i)}}function ey(t,n,e){if(Df(n)){let i=L(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{L(i)}}}var mn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(mn||{});var kl;function Ex(){if(kl===void 0&&(kl=null,Zo.trustedTypes))try{kl=Zo.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return kl}function rb(t){return Ex()?.createScriptURL(t)||t}var Ul=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${fl})`}};function ys(t){return t instanceof Ul?t.changingThisBreaksApplicationSecurity:t}function Lh(t,n){let e=ty(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${fl})`)}return e===n}function ty(t){return t instanceof Ul&&t.getTypeName()||null}var xx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function ny(t){return t=String(t),t.match(xx)?t:"unsafe:"+t}function Ix(t,n){return t.createText(n)}function Mx(t,n,e){t.setValue(n,e)}function iy(t,n,e){return t.createElement(n,e)}function zl(t,n,e,i,r){t.insertBefore(n,e,i,r)}function ry(t,n,e){t.appendChild(n,e)}function ob(t,n,e,i,r){i!==null?zl(t,n,e,i,r):ry(t,n,e)}function oy(t,n,e,i){t.removeChild(null,n,e,i)}function Sx(t,n,e){t.setAttribute(n,"style",e)}function Tx(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function sy(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&ix(t,n,i),r!==null&&Tx(t,n,r),o!==null&&Sx(t,n,o)}var ic=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(ic||{});function Xt(t){let n=ly();return n?n.sanitize(ic.URL,t)||"":Lh(t,"URL")?ys(t):ny(Ko(t))}function ay(t){let n=ly();if(n)return rb(n.sanitize(ic.RESOURCE_URL,t)||"");if(Lh(t,"ResourceURL"))return rb(ys(t));throw new I(904,!1)}var Ax={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Rx(t,n){return Ax[t]?.[n]===!0?ay:Xt}function Vh(t,n,e){return Rx(n,e)(t)}function ly(){let t=K();return t&&t[cn].sanitizer}function cy(t){return t instanceof Function?t():t}function kx(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var dy="ng-template";function Nx(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&kx(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(jh(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function jh(t){return t.type===4&&t.value!==dy}function Ox(t,n,e){let i=t.type===4&&!e?dy:t.value;return n===i}function Fx(t,n,e){let i=4,r=t.attrs,o=r!==null?Vx(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!fn(i)&&!fn(l))return!1;if(s&&fn(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!Ox(t,l,e)||l===""&&n.length===1){if(fn(i))return!1;s=!0}}else if(i&8){if(r===null||!Nx(t,r,l,e)){if(fn(i))return!1;s=!0}}else{let c=n[++a],d=Px(l,r,jh(t),e);if(d===-1){if(fn(i))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&c!==f){if(fn(i))return!1;s=!0}}}}return fn(i)||s}function fn(t){return(t&1)===0}function Px(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return jx(n,t)}function uy(t,n,e=!1){for(let i=0;i<n.length;i++)if(Fx(t,n[i],e))return!0;return!1}function Lx(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function Vx(t){for(let n=0;n<t.length;n++){let e=t[n];if(kb(e))return n}return t.length}function jx(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function Bx(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function sb(t,n){return t?":not("+n.trim()+")":n}function Hx(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!fn(s)&&(n+=sb(o,r),r=""),i=s,o=o||!fn(i);e++}return r!==""&&(n+=sb(o,r)),n}function Ux(t){return t.map(Hx).join(",")}function zx(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!fn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var At={};function Bh(t,n,e,i,r,o,s,a,l,c,d){let f=je+i,h=f+r,p=$x(f,h),m=typeof c=="function"?c():c;return p[z]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:d}}function $x(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:At);return e}function Wx(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Bh(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Hh(t,n,e,i,r,o,s,a,l,c,d){let f=n.blueprint.slice();return f[ln]=r,f[Y]=i|4|128|8|64|1024,(c!==null||t&&t[Y]&2048)&&(f[Y]|=2048),xf(f),f[Ye]=f[Xi]=t,f[Ve]=e,f[cn]=s||t&&t[cn],f[Ae]=a||t&&t[Ae],f[$n]=l||t&&t[$n]||null,f[Dt]=o,f[Wn]=vx(),f[Ki]=d,f[Cf]=c,f[Et]=n.type==2?t[Et]:f,f}function Gx(t,n,e){let i=Qt(n,t),r=Wx(e),o=t[cn].rendererFactory,s=Uh(t,Hh(t,r,null,fy(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function fy(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function hy(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Uh(t,n){return t[Br]?t[_f][Zt]=n:t[Br]=n,t[_f]=n,n}function y(t=1){py(Fe(),K(),Zn()+t,!1)}function py(t,n,e,i){if(!i)if((n[Y]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Ol(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Fl(n,o,0,e)}mi(e)}var rc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(rc||{});function uh(t,n,e,i){let r=L(null);try{let[o,s,a]=t.inputs[e],l=null;(s&rc.SignalBased)!==0&&(l=n[o][Le]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):Ib(n,l,o,i)}finally{L(r)}}var gn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(gn||{}),qx;function zh(t,n){return qx(t,n)}var ZH=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var fh=new WeakMap,as=new WeakSet;function Zx(t,n){let e=fh.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),as.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function Yx(t,n){let e=fh.get(t);e?e.includes(n)||e.push(n):fh.set(t,[n])}var sr=new Set,oc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(oc||{}),vn=new v(""),ab=new Set;function vi(t){ab.has(t)||(ab.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var sc=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),$h=[0,1,2,3],Wh=(()=>{class t{ngZone=u(T);scheduler=u(Tn);errorHandler=u(an,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(vn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&we(ge.AfterRenderHooksStart),this.executing=!0;for(let i of $h)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&we(ge.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[er]??=[]).push(e),ir(i),i[Y]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(oc.AFTER_NEXT_RENDER,e):e()}static \u0275prov=b({token:t,providedIn:"root",factory:()=>new t})}return t})(),us=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[er];n&&(this.view[er]=n.filter(e=>e!==this))}};function Ke(t,n){let e=n?.injector??u(oe);return vi("NgAfterNextRender"),Kx(t,e,n,!0)}function Qx(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function Kx(t,n,e,i){let r=n.get(sc);r.impl??=n.get(Wh);let o=n.get(vn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(xt):null,a=n.get(zr,null,{optional:!0}),l=new us(r.impl,Qx(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var my=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(be)})});function gy(t,n,e){let i=t.get(my);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function Xx(t,n){let e=t.get(my);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function Jx(t,n){for(let[e,i]of n)gy(t,i.animateFns)}function lb(t,n,e,i){let r=t?.[hi]?.enter;n!==null&&r&&r.has(e.index)&&Jx(i,r)}function $r(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;dn(r)?l=r:Gn(r)&&(c=!0,r=r[ln]);let d=Yt(r);t===0&&i!==null?(lb(a,i,o,e),s==null?ry(n,i,d):zl(n,i,d,s||null,!0)):t===1&&i!==null?(lb(a,i,o,e),zl(n,i,d,s||null,!0),Zx(o,d)):t===2?(a?.[hi]?.leave?.has(o.index)&&Yx(o,d),as.delete(d),cb(a,o,e,f=>{if(as.has(d)){as.delete(d);return}oy(n,d,c,f)})):t===3&&(as.delete(d),cb(a,o,e,()=>{n.destroyNode(d)})),l!=null&&dI(n,t,e,l,o,i,s)}}function eI(t,n){vy(t,n),n[ln]=null,n[Dt]=null}function tI(t,n,e,i,r,o){i[ln]=r,i[Dt]=n,lc(t,i,e,1,r,o)}function vy(t,n){n[cn].changeDetectionScheduler?.notify(9),lc(t,n,n[Ae],2,null,null)}function nI(t){let n=t[Br];if(!n)return Kf(t[z],t);for(;n;){let e=null;if(Gn(n))e=n[Br];else{let i=n[Oe];i&&(e=i)}if(!e){for(;n&&!n[Zt]&&n!==t;)Gn(n)&&Kf(n[z],n),n=n[Ye];n===null&&(n=t),Gn(n)&&Kf(n[z],n),e=n&&n[Zt]}n=e}}function Gh(t,n){let e=t[tr],i=e.indexOf(n);e.splice(i,1)}function ac(t,n){if(nr(n))return;let e=n[Ae];e.destroyNode&&lc(t,n,e,3,null,null),nI(n)}function Kf(t,n){if(nr(n))return;let e=L(null);try{n[Y]&=-129,n[Y]|=256,n[Pt]&&ai(n[Pt]),oI(t,n),rI(t,n),n[z].type===1&&n[Ae].destroy();let i=n[fi];if(i!==null&&dn(n[Ye])){i!==n[Ye]&&Gh(i,n);let r=n[An];r!==null&&r.detachView(t)}ch(n)}finally{L(e)}}function cb(t,n,e,i){let r=t?.[hi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&sr.add(t[Wn]),gy(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),iI(t,i)}else t&&sr.delete(t[Wn]),i(!1)},r)}function iI(t,n){let e=t[hi]?.running;if(e){e.then(()=>{t[hi].running=void 0,sr.delete(t[Wn]),n(!0)});return}n(!1)}function rI(t,n){let e=t.cleanup,i=n[jr];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[jr]=null);let r=n[Un];if(r!==null){n[Un]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[li];if(o!==null){n[li]=null;for(let s of o)s.destroy()}}function oI(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof or)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];we(ge.LifecycleHookStart,a,l);try{l.call(a)}finally{we(ge.LifecycleHookEnd,a,l)}}else{we(ge.LifecycleHookStart,r,o);try{o.call(r)}finally{we(ge.LifecycleHookEnd,r,o)}}}}}function by(t,n,e){return sI(t,n.parent,e)}function sI(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[ln];if(Rn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===mn.None||r===mn.Emulated)return null}return Qt(i,e)}function yy(t,n,e){return lI(t,n,e)}function aI(t,n,e){return t.type&40?Qt(t,e):null}var lI=aI,db;function qh(t,n,e,i){let r=by(t,i,n),o=n[Ae],s=i.parent||n[Dt],a=yy(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)ob(o,r,e[l],a,!1);else ob(o,r,e,a,!1);db!==void 0&&db(o,i,n,e,r)}function ls(t,n){if(n!==null){let e=n.type;if(e&3)return Qt(n,t);if(e&4)return hh(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return ls(t,i);{let r=t[n.index];return dn(r)?hh(-1,r):Yt(r)}}else{if(e&128)return ls(t,n.next);if(e&32)return zh(n,t)()||Yt(t[n.index]);{let i=_y(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=ci(t[Et]);return ls(r,i)}else return ls(t,n.next)}}}return null}function _y(t,n){if(n!==null){let i=t[Et][Dt],r=n.projection;return i.projection[r]}return null}function hh(t,n){let e=Oe+t+1;if(e<n.length){let i=n[e],r=i[z].firstChild;if(r!==null)return ls(i,r)}return n[pi]}function Zh(t,n,e,i,r,o,s){for(;e!=null;){let a=i[$n];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&qr(Yt(l),i),e.flags|=2),!nc(e))if(c&8)Zh(t,n,e.child,i,r,o,!1),$r(n,t,a,r,l,e,o,i);else if(c&32){let d=zh(e,i),f;for(;f=d();)$r(n,t,a,r,f,e,o,i);$r(n,t,a,r,l,e,o,i)}else c&16?Cy(t,n,i,e,r,o):$r(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function lc(t,n,e,i,r,o){Zh(e,i,t.firstChild,n,r,o,!1)}function cI(t,n,e){let i=n[Ae],r=by(t,e,n),o=e.parent||n[Dt],s=yy(o,e,n);Cy(i,0,n,e,r,s)}function Cy(t,n,e,i,r,o){let s=e[Et],l=s[Dt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];$r(n,t,e[$n],r,d,i,o,e)}else{let c=l,d=s[Ye];zb(i)&&(c.flags|=128),Zh(t,n,c,d,r,o,!0)}}function dI(t,n,e,i,r,o,s){let a=i[pi],l=Yt(i);a!==l&&$r(n,t,e,o,a,r,s);for(let c=Oe;c<i.length;c++){let d=i[c];lc(d[z],d,t,n,o,a)}}function uI(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:gn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=gn.Important),t.setStyle(e,i,r,o))}}function wy(t,n,e,i,r){let o=Zn(),s=i&2;try{mi(-1),s&&n.length>je&&py(t,n,je,!1);let a=s?ge.TemplateUpdateStart:ge.TemplateCreateStart;we(a,r,e),e(i,r)}finally{mi(o);let a=s?ge.TemplateUpdateEnd:ge.TemplateCreateEnd;we(a,r,e)}}function Yh(t,n,e){vI(t,n,e),(e.flags&64)===64&&bI(t,n,e)}function cc(t,n,e=Qt){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function fI(t,n,e,i){let o=i.get(Kb,Qb)||e===mn.ShadowDom||e===mn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return hI(s),s}function hI(t){pI(t)}var pI=()=>null;function mI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function gI(t,n,e,i,r,o){let s=n[z];if(dc(t,s,n,e,i)){Rn(t)&&Ey(n,t.index);return}t.type&3&&(e=mI(e)),Dy(t,n,e,i,r,o)}function Dy(t,n,e,i,r,o){if(t.type&3){let s=Qt(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function Ey(t,n){let e=Kt(n,t);e[Y]&16||(e[Y]|=64)}function vI(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Rn(e)&&Gx(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Hl(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=ds(n,t,s,e);if(qr(l,n),o!==null&&CI(n,s-i,l,a,e,o),kn(a)){let c=Kt(e.index,n);c[Ve]=ds(n,t,s,e)}}}function bI(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=Pv();try{mi(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];El(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&yI(l,c)}}finally{mi(-1),El(s)}}function yI(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function xy(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];uy(n,o.selectors,!1)&&(i??=[],kn(o)?i.unshift(o):i.push(o))}return i}function _I(t,n,e,i,r,o){let s=Qt(t,n);Iy(n[Ae],s,o,t.value,e,i,r)}function Iy(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?Ko(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function CI(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];uh(i,e,l,c)}}function My(t,n,e,i,r){let o=je+e,s=n[z],a=r(s,n,t,i,e);n[o]=a,Ur(t,!0);let l=t.type===2;return l?(sy(n[Ae],a,t),(Tv()===0||ts(t))&&qr(a,n),Av()):qr(a,n),Sl()&&(!l||!nc(t))&&qh(s,n,a,t),t}function Sy(t){let n=t;return Pf()?Lf():(n=n.parent,Ur(n,!1)),n}function wI(t,n){let e=t[$n];if(!e)return;let i;try{i=e.get(Bt,null)}catch{i=null}i?.(n)}function dc(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];uh(f,e[c],d,r),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];uh(d,c,i,r),a=!0}return a}function DI(t,n){let e=Kt(n,t),i=e[z];EI(i,e);let r=e[ln];r!==null&&e[Ki]===null&&(e[Ki]=Xb(r,e[$n])),we(ge.ComponentStart);try{Qh(i,e,e[Ve])}finally{we(ge.ComponentEnd,e[Ve])}}function EI(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Qh(t,n,e){Il(n);try{let i=t.viewQuery;i!==null&&dh(1,i,e);let r=t.template;r!==null&&wy(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[An]?.finishViewCreation(t),t.staticContentQueries&&Jb(t,n),t.staticViewQueries&&dh(2,t.viewQuery,e);let o=t.components;o!==null&&xI(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[Y]&=-5,Ml()}}function xI(t,n){for(let e=0;e<n.length;e++)DI(t,n[e])}function _s(t,n,e,i){let r=L(null);try{let o=n.tView,a=t[Y]&4096?4096:16,l=Hh(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[fi]=c;let d=t[An];return d!==null&&(l[An]=d.createEmbeddedView(o)),Qh(o,l,e),l}finally{L(r)}}function Zr(t,n){return!n||n.firstChild===null||zb(t)}function fs(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Yt(o)),dn(o)&&Ty(o,i);let s=e.type;if(s&8)fs(t,n,e.child,i);else if(s&32){let a=zh(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=_y(n,e);if(Array.isArray(a))i.push(...a);else{let l=ci(n[Et]);fs(l[z],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function Ty(t,n){for(let e=Oe;e<t.length;e++){let i=t[e],r=i[z].firstChild;r!==null&&fs(i[z],i,r,n)}t[pi]!==t[ln]&&n.push(t[pi])}function Ay(t){if(t[er]!==null){for(let n of t[er])n.impl.addSequence(n);t[er].length=0}}var Ry=[];function II(t){return t[Pt]??MI(t)}function MI(t){let n=Ry.pop()??Object.create(TI);return n.lView=t,n}function SI(t){t.lView[Pt]!==t&&(t.lView=null,Ry.push(t))}var TI=X(g({},ri),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{ir(t.lView)},consumerOnSignalRead(){this.lView[Pt]=this}});function AI(t){let n=t[Pt]??Object.create(RI);return n.lView=t,n}var RI=X(g({},ri),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=ci(t.lView);for(;n&&!ky(n[z]);)n=ci(n);n&&If(n)},consumerOnSignalRead(){this.lView[Pt]=this}});function ky(t){return t.type!==2}function Ny(t){if(t[li]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[li])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[Y]&8192)}}var kI=100;function Oy(t,n=0){let i=t[cn].rendererFactory,r=!1;r||i.begin?.();try{NI(t,n)}finally{r||i.end?.()}}function NI(t,n){let e=Vf();try{Wo(!0),ph(t,n);let i=0;for(;ns(t);){if(i===kI)throw new I(103,!1);i++,ph(t,1)}}finally{Wo(e)}}function OI(t,n,e,i){if(nr(n))return;let r=n[Y],o=!1,s=!1;Il(n);let a=!0,l=null,c=null;o||(ky(t)?(c=II(n),l=jn(c)):xa()===null?(a=!1,c=AI(n),l=jn(c)):n[Pt]&&(ai(n[Pt]),n[Pt]=null));try{xf(n),Nv(t.bindingStartIndex),e!==null&&wy(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let p=t.preOrderCheckHooks;p!==null&&Ol(n,p,null)}else{let p=t.preOrderHooks;p!==null&&Fl(n,p,0,null),Yf(n,0)}if(s||FI(n),Ny(n),Fy(n,0),t.contentQueries!==null&&Jb(t,n),!o)if(d){let p=t.contentCheckHooks;p!==null&&Ol(n,p)}else{let p=t.contentHooks;p!==null&&Fl(n,p,1),Yf(n,1)}LI(t,n);let f=t.components;f!==null&&Ly(n,f,0);let h=t.viewQuery;if(h!==null&&dh(2,h,i),!o)if(d){let p=t.viewCheckHooks;p!==null&&Ol(n,p)}else{let p=t.viewHooks;p!==null&&Fl(n,p,2),Yf(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[_l]){for(let p of n[_l])p();n[_l]=null}o||(Ay(n),n[Y]&=-73)}catch(d){throw o||ir(n),d}finally{c!==null&&(si(c,l),a&&SI(c)),Ml()}}function Fy(t,n){for(let e=Wb(t);e!==null;e=Gb(e))for(let i=Oe;i<e.length;i++){let r=e[i];Py(r,n)}}function FI(t){for(let n=Wb(t);n!==null;n=Gb(n)){if(!(n[Y]&2))continue;let e=n[tr];for(let i=0;i<e.length;i++){let r=e[i];If(r)}}}function PI(t,n,e){we(ge.ComponentStart);let i=Kt(n,t);try{Py(i,e)}finally{we(ge.ComponentEnd,i[Ve])}}function Py(t,n){wl(t)&&ph(t,n)}function ph(t,n){let i=t[z],r=t[Y],o=t[Pt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&Ir(o)),s||=!1,o&&(o.dirty=!1),t[Y]&=-9217,s)OI(i,t,i.template,t[Ve]);else if(r&8192){let a=L(null);try{Ny(t),Fy(t,1);let l=i.components;l!==null&&Ly(t,l,1),Ay(t)}finally{L(a)}}}function Ly(t,n,e){for(let i=0;i<n.length;i++)PI(t,n[i],e)}function LI(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)mi(~r);else{let o=r,s=e[++i],a=e[++i];Fv(s,o);let l=n[o];we(ge.HostBindingsUpdateStart,l);try{a(2,l)}finally{we(ge.HostBindingsUpdateEnd,l)}}}}finally{mi(-1)}}function Kh(t,n){let e=Vf()?64:1088;for(t[cn].changeDetectionScheduler?.notify(n);t;){t[Y]|=e;let i=ci(t);if(Hr(t)&&!i)return t;t=i}return null}function Vy(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function jy(t,n){let e=Oe+n;if(e<t.length)return t[e]}function Cs(t,n,e,i=!0){let r=n[z];if(VI(r,n,t,e),i){let s=hh(e,t),a=n[Ae],l=a.parentNode(t[pi]);l!==null&&tI(r,t[Dt],a,n,l,s)}let o=n[Ki];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function By(t,n){let e=hs(t,n);return e!==void 0&&ac(e[z],e),e}function hs(t,n){if(t.length<=Oe)return;let e=Oe+n,i=t[e];if(i){let r=i[fi];r!==null&&r!==t&&Gh(r,i),n>0&&(t[e-1][Zt]=i[Zt]);let o=Xo(t,Oe+n);eI(i[z],i);let s=o[An];s!==null&&s.detachView(o[z]),i[Ye]=null,i[Zt]=null,i[Y]&=-129}return i}function VI(t,n,e,i){let r=Oe+i,o=e.length;i>0&&(e[r-1][Zt]=n),i<o-Oe?(n[Zt]=e[r],pf(e,Oe+i,n)):(e.push(n),n[Zt]=null),n[Ye]=e;let s=n[fi];s!==null&&e!==s&&Hy(s,n);let a=n[An];a!==null&&a.insertView(t),Dl(n),n[Y]|=128}function Hy(t,n){let e=t[tr],i=n[Ye];if(Gn(i))t[Y]|=2;else{let r=i[Ye][Et];n[Et]!==r&&(t[Y]|=2)}e===null?t[tr]=[n]:e.push(n)}var gi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[z];return fs(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Ve]}set context(n){this._lView[Ve]=n}get destroyed(){return nr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ye];if(dn(n)){let e=n[es],i=e?e.indexOf(this):-1;i>-1&&(hs(n,i),Xo(e,i))}this._attachedToViewContainer=!1}ac(this._lView[z],this._lView)}onDestroy(n){Mf(this._lView,n)}markForCheck(){Kh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Y]&=-129}reattach(){Dl(this._lView),this._lView[Y]|=128}detectChanges(){this._lView[Y]|=1024,Oy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new I(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Hr(this._lView),e=this._lView[fi];e!==null&&!n&&Gh(e,this._lView),vy(this._lView[z],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new I(902,!1);this._appRef=n;let e=Hr(this._lView),i=this._lView[fi];i!==null&&!e&&Hy(i,this._lView),Dl(this._lView)}};var gt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=jI;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=_s(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new gi(o)}}return t})();function jI(){return uc(mt(),K())}function uc(t,n){return t.type&4?new gt(n,t,Kr(t,n)):null}function Jr(t,n,e,i,r){let o=t.data[n];if(o===null)o=BI(t,n,e,i,r),Ov()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=Rv();o.injectorIndex=s===null?-1:s.injectorIndex}return Ur(o,!0),o}function BI(t,n,e,i,r){let o=Ff(),s=Pf(),a=s?o:o&&o.parent,l=t.data[n]=UI(t,a,e,n,i,r);return HI(t,l,o,s),l}function HI(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function UI(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return kf()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function zI(t){let n=t[wf]??[],i=t[Ye][Ae],r=[];for(let o of n)o.data[Yb]!==void 0?r.push(o):$I(o,i);t[wf]=r}function $I(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[Zb];for(;e<r;){let o=i.nextSibling;oy(n,i,!1),i=o,e++}}}var WI=()=>null,GI=()=>null;function $l(t,n){return WI(t,n)}function Uy(t,n,e){return GI(t,n,e)}var zy=class{},fc=class{},mh=class{resolveComponentFactory(n){throw new I(917,!1)}},ws=class{static NULL=new mh},Ge=class{},Se=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>qI()}return t})();function qI(){let t=K(),n=mt(),e=Kt(n.index,t);return(Gn(e)?e:t)[Ae]}var $y=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>null})}return t})();var Ll={},gh=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Ll,i);return r!==Ll||e===Ll?r:this.parentInjector.get(n,e,i)}};function Wl(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=hl(r,a);else if(o==2){let l=a,c=n[++s];i=hl(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function B(t,n=0){let e=K();if(e===null)return H(t,n);let i=mt();return jb(i,e,at(t),n)}function Wy(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}QI(t,n,e,a,o,l,c)}o!==null&&i!==null&&ZI(e,i,o)}function ZI(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new I(-301,!1);i.push(n[r],o)}}function YI(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function QI(t,n,e,i,r,o,s){let a=i.length,l=null;for(let h=0;h<a;h++){let p=i[h];l===null&&kn(p)&&(l=p,YI(t,e,h)),ah(Hl(e,n),t,p.type)}nM(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let p=i[h];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,f=hy(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=i[h];if(e.mergedAttrs=Gr(e.mergedAttrs,p.hostAttrs),XI(t,e,n,f,p),tM(f,p,r),s!==null&&s.has(p)){let[E,M]=s.get(p);e.directiveToIndex.set(p.type,[f,E+e.directiveStart,M+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let m=p.type.prototype;!c&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}KI(t,e,o)}function KI(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))ub(0,n,r,i),ub(1,n,r,i),hb(n,i,!1);else{let o=e.get(r);fb(0,n,o,i),fb(1,n,o,i),hb(n,i,!0)}}}function ub(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),Gy(n,o)}}function fb(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),Gy(n,s)}}function Gy(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function hb(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||jh(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function XI(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Wi(r.type,!0)),s=new or(o,kn(r),B,null);t.blueprint[i]=s,e[i]=s,JI(t,n,i,hy(t,e,r.hostVars,At),r)}function JI(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;eM(s)!=a&&s.push(a),s.push(e,i,o)}}function eM(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function tM(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;kn(n)&&(e[""]=t)}}function nM(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function qy(t,n,e,i,r,o,s,a){let l=n[z],c=l.consts,d=Lt(c,s),f=Jr(l,t,e,i,d);return o&&Wy(l,n,f,Lt(c,a),r),f.mergedAttrs=Gr(f.mergedAttrs,f.attrs),f.attrs!==null&&Wl(f,f.attrs,!1),f.mergedAttrs!==null&&Wl(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Zy(t,n){Ab(t,n),Df(n)&&t.queries.elementEnd(n)}function iM(t,n,e,i,r,o){let s=n.consts,a=Lt(s,r),l=Jr(n,t,e,i,a);if(l.mergedAttrs=Gr(l.mergedAttrs,l.attrs),o!=null){let c=Lt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Wl(l,l.attrs,!1),l.mergedAttrs!==null&&Wl(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Xh(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function Yy(t,n,e){return t[n]=e}function rM(t,n){return t[n]}function bn(t,n,e){if(e===At)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Xf(t,n,e){return function i(r){let o=Rn(t)?Kt(t.index,n):n;Kh(o,5);let s=n[Ve],a=pb(n,s,e,r),l=i.__ngNextListenerFn__;for(;l;)a=pb(n,s,l,r)&&a,l=l.__ngNextListenerFn__;return a}}function pb(t,n,e,i){let r=L(null);try{return we(ge.OutputStart,n,e),e(i)!==!1}catch(o){return wI(t,o),!1}finally{we(ge.OutputEnd,n,e),L(r)}}function oM(t,n,e,i,r,o,s,a){let l=ts(t),c=!1,d=null;if(!i&&l&&(d=aM(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=Qt(t,e),h=i?i(f):f;wx(e,h,o,a);let p=r.listen(h,o,a);if(!sM(o)){let m=i?E=>i(Yt(E[t.index])):t.index;Qy(m,n,e,o,a,p,!1)}}return c}function sM(t){return t.startsWith("animation")||t.startsWith("transition")}function aM(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[jr],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function Qy(t,n,e,i,r,o,s){let a=n.firstCreatePass?Tf(n):null,l=Sf(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function mb(t,n,e,i,r,o){let s=n[e],a=n[z],c=a.data[e].outputs[i],f=s[c].subscribe(o);Qy(t.index,a,n,r,o,f,!0)}var vh=Symbol("BINDING");function Ky(t){return t.debugInfo?.className||t.type.name||null}var Gl=class extends ws{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=zn(n);return new ar(e,this.ngModule)}};function lM(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&rc.SignalBased)!==0};return r&&(o.transform=r),o})}function cM(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function dM(t,n,e){let i=n instanceof be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new gh(e,i):e}function uM(t){let n=t.get(Ge,null);if(n===null)throw new I(407,!1);let e=t.get($y,null),i=t.get(Tn,null),r=t.get(vn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function fM(t,n){let e=Xy(t);return iy(n,e,e==="svg"?Cv:e==="math"?wv:null)}function Xy(t){return(t.selectors[0][0]||"div").toLowerCase()}var ar=class extends fc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=lM(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=cM(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=Ux(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){we(ge.DynamicComponentStart);let a=L(null);try{let l=this.componentDef,c=dM(l,r||this.ngModule,n),d=uM(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(Ky(l),()=>this.createComponentRef(d,c,e,i,o,s)):this.createComponentRef(d,c,e,i,o,s)}finally{L(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=hM(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=r?fI(c,r,a.encapsulation,e):fM(a,c),f=s?.some(gb)||o?.some(m=>typeof m!="function"&&m.bindings.some(gb)),h=Hh(null,l,null,512|fy(a),null,null,n,c,e,null,Xb(d,e,!0));h[je]=d,Il(h);let p=null;try{let m=qy(je,h,2,"#host",()=>l.directiveRegistry,!0,0);sy(c,d,m),qr(d,h),Yh(l,h,m),ey(l,m,h),Zy(l,m),i!==void 0&&mM(m,this.ngContentSelectors,i),p=Kt(m.index,h),h[Ve]=p[Ve],Qh(l,h,null)}catch(m){throw p!==null&&ch(p),ch(h),m}finally{we(ge.DynamicComponentEnd),Ml()}return new ql(this.componentType,h,!!f)}};function hM(t,n,e,i){let r=t?["ng-version","21.2.10"]:zx(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[vh].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let h of f.bindings){a+=h[vh].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,h=uf(f);l.push(h)}return Bh(0,null,pM(o,s),1,a,l,null,null,null,[r],null)}function pM(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function gb(t){let n=t[vh].kind;return n==="input"||n==="twoWay"}var ql=class extends zy{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Cl(e[z],je),this.location=Kr(this._tNode,e),this.instance=Kt(this._tNode.index,e)[Ve],this.hostView=this.changeDetectorRef=new gi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=dc(i,r[z],r,n,e);this.previousInputValues.set(n,e);let s=Kt(i.index,r);Kh(s,1)}get injector(){return new rr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function mM(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var lt=(()=>{class t{static __NG_ELEMENT_ID__=gM}return t})();function gM(){let t=mt();return Jy(t,K())}var bh=class t extends lt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Kr(this._hostTNode,this._hostLView)}get injector(){return new rr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Oh(this._hostTNode,this._hostLView);if(Nb(n)){let e=Bl(n,this._hostLView),i=jl(n),r=e[z].data[i+8];return new rr(r,e)}else return new rr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=vb(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Oe}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=$l(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Zr(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!YE(n),c;if(l)c=e;else{let M=e||{};c=M.index,i=M.injector,r=M.projectableNodes,o=M.environmentInjector||M.ngModuleRef,s=M.directives,a=M.bindings}let d=l?n:new ar(zn(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let R=(l?f:this.parentInjector).get(be,null);R&&(o=R)}let h=zn(d.componentType??{}),p=$l(this._lContainer,h?.id??null),m=p?.firstChild??null,E=d.create(f,r,m,o,s,a);return this.insertImpl(E.hostView,c,Zr(this._hostTNode,p)),E}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(xv(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[Ye],c=new t(l,l[Dt],l[Ye]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Cs(s,r,o,i),n.attachToViewContainerRef(),pf(Jf(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=vb(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=hs(this._lContainer,e);i&&(Xo(Jf(this._lContainer),e),ac(i[z],i))}detach(n){let e=this._adjustIndex(n,-1),i=hs(this._lContainer,e);return i&&Xo(Jf(this._lContainer),e)!=null?new gi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function vb(t){return t[es]}function Jf(t){return t[es]||(t[es]=[])}function Jy(t,n){let e,i=n[t.index];return dn(i)?e=i:(e=Vy(i,n,null,t),n[t.index]=e,Uh(n,e)),bM(e,n,t,i),new bh(e,t,n)}function vM(t,n){let e=t[Ae],i=e.createComment(""),r=Qt(n,t),o=e.parentNode(r);return zl(e,o,i,e.nextSibling(r),!1),i}var bM=CM,yM=()=>!1;function _M(t,n,e){return yM(t,n,e)}function CM(t,n,e,i){if(t[pi])return;let r;e.type&8?r=Yt(i):r=vM(n,e),t[pi]=r}var yh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},_h=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)ep(n,e).matches!==null&&this.queries[e].setDirty()}},Zl=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=IM(n):this.predicate=n}},Ch=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},wh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,wM(e,o)),this.matchTNodeWithReadOption(n,e,Pl(e,n,o,!1,!1))}else i===gt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Pl(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===P||r===lt||r===gt&&e.type&4)this.addMatch(e.index,-2);else{let o=Pl(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function wM(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function DM(t,n){return t.type&11?Kr(t,n):t.type&4?uc(t,n):null}function EM(t,n,e,i){return e===-1?DM(n,t):e===-2?xM(t,n,i):ds(t,t[z],e,n)}function xM(t,n,e){if(e===P)return Kr(n,t);if(e===gt)return uc(n,t);if(e===lt)return Jy(n,t)}function e_(t,n,e,i){let r=n[An].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(EM(n,d,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function Dh(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=e_(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=Oe;f<d.length;f++){let h=d[f];h[fi]===h[Ye]&&Dh(h[z],h,c,i)}if(d[tr]!==null){let f=d[tr];for(let h=0;h<f.length;h++){let p=f[h];Dh(p[z],p,c,i)}}}}}return i}function Jh(t,n){return t[An].queries[n].queryList}function t_(t,n,e){let i=new pn((e&4)===4);return Sv(t,n,i,i.destroy),(n[An]??=new _h).queries.push(new yh(i))-1}function n_(t,n,e){let i=Fe();return i.firstCreatePass&&(r_(i,new Zl(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),t_(i,K(),n)}function i_(t,n,e,i){let r=Fe();if(r.firstCreatePass){let o=mt();r_(r,new Zl(n,e,i),o.index),MM(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return t_(r,K(),e)}function IM(t){return t.split(",").map(n=>n.trim())}function r_(t,n,e){t.queries===null&&(t.queries=new Ch),t.queries.track(new wh(n,e))}function MM(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function ep(t,n){return t.queries.getByIndex(n)}function o_(t,n){let e=t[z],i=ep(e,n);return i.crossesNgTemplate?Dh(e,t,n,[]):e_(e,t,i,n)}function s_(t,n,e){let i,r=Oo(()=>{i._dirtyCounter();let o=SM(i,t);if(n&&o===void 0)throw new I(-951,!1);return o});return i=r[Le],i._dirtyCounter=j(0),i._flatValue=void 0,r}function tp(t){return s_(!0,!1,t)}function np(t){return s_(!0,!0,t)}function a_(t,n){let e=t[Le];e._lView=K(),e._queryIndex=n,e._queryList=Jh(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function SM(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[Y]&4)return n?void 0:pt;let r=Jh(e,i),o=o_(e,i);return r.reset(o,Ub),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var On=class{},hc=class{};var Yl=class extends On{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Gl(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=df(n);this._bootstrapComponents=cy(o.bootstrap),this._r3Injector=zf(n,e,[{provide:On,useValue:this},{provide:ws,useValue:this.componentFactoryResolver},...i],Yo(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Ql=class extends hc{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Yl(this.moduleType,n,[])}};var ps=class extends On{injector;componentFactoryResolver=new Gl(this);instance=null;constructor(n){super();let e=new qi([...n.providers,{provide:On,useValue:this},{provide:ws,useValue:this.componentFactoryResolver}],n.parent||Vr(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ds(t,n,e=null){return new ps({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var TM=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=vf(!1,e.type),r=i.length>0?Ds([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=b({token:t,providedIn:"environment",factory:()=>new t(H(be))})}return t})();function D(t){return gs(()=>{let n=l_(t),e=X(g({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Fh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(TM).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||mn.Emulated,styles:t.styles||pt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&vi("NgStandalone"),c_(e);let i=t.dependencies;return e.directiveDefs=bb(i,AM),e.pipeDefs=bb(i,sv),e.id=NM(e),e})}function AM(t){return zn(t)||uf(t)}function le(t){return gs(()=>({type:t.type,bootstrap:t.bootstrap||pt,declarations:t.declarations||pt,imports:t.imports||pt,exports:t.exports||pt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function RM(t,n){if(t==null)return ui;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=rc.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function kM(t){if(t==null)return ui;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function k(t){return gs(()=>{let n=l_(t);return c_(n),n})}function l_(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||ui,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||pt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:RM(t.inputs,n),outputs:kM(t.outputs),debugInfo:null}}function c_(t){t.features?.forEach(n=>n(t))}function bb(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function NM(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function OM(t){return Object.getPrototypeOf(t.prototype).constructor}function De(t){let n=OM(t.type),e=!0,i=[t];for(;n;){let r;if(kn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new I(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let s=t;s.inputs=eh(t.inputs),s.declaredInputs=eh(t.declaredInputs),s.outputs=eh(t.outputs);let a=r.hostBindings;a&&jM(t,a);let l=r.viewQuery,c=r.contentQueries;if(l&&LM(t,l),c&&VM(t,c),FM(t,r),ov(t.outputs,r.outputs),kn(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===De&&(e=!1)}}n=Object.getPrototypeOf(n)}PM(i)}function FM(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function PM(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Gr(r.hostAttrs,e=Gr(e,r.hostAttrs))}}function eh(t){return t===ui?{}:t===pt?[]:t}function LM(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function VM(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function jM(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function d_(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Gr(t.mergedAttrs,t.attrs);let d=t.tView=Bh(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Ur(t,!1);let l=HM(e,n,t,i);Sl()&&qh(e,n,l,t),qr(l,n);let c=Vy(l,n,l,t);n[i+je]=c,Uh(n,c),_M(c,t,n)}function BM(t,n,e,i,r,o,s,a,l,c,d){let f=e+je,h;return n.firstCreatePass?(h=Jr(n,f,4,s||null,a||null),Rf()&&Wy(n,t,h,Lt(n.consts,c),xy),Ab(n,h)):h=n.data[f],d_(h,t,n,e,i,r,o,l),ts(h)&&Yh(n,t,h),c!=null&&cc(t,h,d),h}function Yr(t,n,e,i,r,o,s,a,l,c,d){let f=e+je,h;if(n.firstCreatePass){if(h=Jr(n,f,4,s||null,a||null),c!=null){let p=Lt(n.consts,c);h.localNames=[];for(let m=0;m<p.length;m+=2)h.localNames.push(p[m],-1)}}else h=n.data[f];return d_(h,t,n,e,i,r,o,l),c!=null&&cc(t,h,d),h}function It(t,n,e,i,r,o,s,a){let l=K(),c=Fe(),d=Lt(c.consts,o);return BM(l,c,t,n,e,i,r,d,void 0,s,a),It}function eo(t,n,e,i,r,o,s,a){let l=K(),c=Fe(),d=Lt(c.consts,o);return Yr(l,c,t,n,e,i,r,d,void 0,s,a),eo}var HM=UM;function UM(t,n,e,i){return Tl(!0),n[Ae].createComment("")}var ip=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Qn(t){return typeof t=="function"&&t[Le]!==void 0}var rp=new v("");function bi(t){return!!t&&typeof t.then=="function"}function op(t){return!!t&&typeof t.subscribe=="function"}var u_=new v("");var sp=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(u_,{optional:!0})??[];injector=u(oe);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=it(this.injector,r);if(bi(o))e.push(o);else if(op(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pc=new v("");function f_(){Eu(()=>{let t="";throw new I(600,t)})}function h_(t){return t.isBoundToModule}var zM=10;var Jt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Bt);afterRenderManager=u(sc);zonelessEnabled=u(os);rootEffectScheduler=u(Rl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Yn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(J(e=>!e))}constructor(){u(vn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=oe.NULL){return this._injector.get(T).run(()=>{we(ge.BootstrapComponentStart);let s=e instanceof fc;if(!this._injector.get(sp).done){let m="";throw new I(405,m)}let l;s?l=e:l=this._injector.get(ws).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=h_(l)?void 0:this._injector.get(On),d=i||l.selector,f=l.create(r,[],d,c),h=f.location.nativeElement,p=f.injector.get(rp,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),cs(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),we(ge.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){we(ge.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(oc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw we(ge.ChangeDetectionEnd),new I(101,!1);let e=L(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,L(e),this.afterTick.next(),we(ge.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ge,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<zM;){we(ge.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{we(ge.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ns(r))continue;let o=i&&!this.zonelessEnabled?0:1;Oy(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ns(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;cs(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(pc,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>cs(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new I(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cs(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function mc(t,n){let e=K(),i=qn();if(bn(e,i,n)){let r=Fe(),o=rs();if(dc(o,r,e,t,n))Rn(o)&&Ey(e,o.index);else{let a=Qt(o,e);Iy(e[Ae],a,null,o.value,t,n,null)}}return mc}function Ie(t,n,e,i){let r=K(),o=qn();if(bn(r,o,n)){let s=Fe(),a=rs();_I(a,r,t,n,e,i)}return Ie}var Eh=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function th(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function $M(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){L(i);let c=n.length-1;for(L(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],h=th(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let p=t.at(a),m=n[c],E=th(a,p,c,m,e);if(E!==0){E<0&&t.updateValue(a,m),a--,c--;continue}let M=e(s,d),R=e(a,p),ve=e(s,f);if(Object.is(ve,R)){let et=e(c,m);Object.is(et,M)?(t.swap(s,a),t.updateValue(a,m),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new Kl,o??=_b(t,s,a,e),xh(t,r,s,ve))t.updateValue(s,f),s++,a++;else if(o.has(ve))r.set(M,t.detach(s)),a--;else{let et=t.create(s,n[s]);t.attach(s,et),s++,a++}}for(;s<=c;)yb(t,r,e,s,n[s]),s++}else if(n!=null){L(i);let c=n[Symbol.iterator]();L(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,p=th(s,f,s,h,e);if(p!==0)p<0&&t.updateValue(s,h),s++,d=c.next();else{r??=new Kl,o??=_b(t,s,a,e);let m=e(s,h);if(xh(t,r,s,m))t.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(m))t.attach(s,t.create(s,h)),s++,a++,d=c.next();else{let E=e(s,f);r.set(E,t.detach(s)),a--}}}for(;!d.done;)yb(t,r,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function xh(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function yb(t,n,e,i,r){if(xh(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function _b(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Kl=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function O(t,n,e,i,r,o,s,a){vi("NgControlFlow");let l=K(),c=Fe(),d=Lt(c.consts,o);return Yr(l,c,t,n,e,i,r,d,256,s,a),ap}function ap(t,n,e,i,r,o,s,a){vi("NgControlFlow");let l=K(),c=Fe(),d=Lt(c.consts,o);return Yr(l,c,t,n,e,i,r,d,512,s,a),ap}function F(t,n){vi("NgControlFlow");let e=K(),i=qn(),r=e[i]!==At?e[i]:-1,o=r!==-1?Xl(e,je+r):void 0,s=0;if(bn(e,i,t)){let a=L(null);try{if(o!==void 0&&By(o,s),t!==-1){let l=je+t,c=Xl(e,l),d=Th(e[z],l),f=Uy(c,d,e),h=_s(e,d,n,{dehydratedView:f});Cs(c,h,s,Zr(d,f))}}finally{L(a)}}else if(o!==void 0){let a=jy(o,s);a!==void 0&&(a[Ve]=n)}}var Ih=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Oe}};function yn(t){return t}function gc(t,n){return n}var Mh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function vt(t,n,e,i,r,o,s,a,l,c,d,f,h){vi("NgControlFlow");let p=K(),m=Fe(),E=l!==void 0,M=K(),R=a?s.bind(M[Et][Ve]):s,ve=new Mh(E,R);M[je+t]=ve,Yr(p,m,t+1,n,e,i,r,Lt(m.consts,o),256),E&&Yr(p,m,t+2,l,c,d,f,Lt(m.consts,h),512)}var Sh=class extends Eh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Oe}at(n){return this.getLView(n)[Ve].$implicit}attach(n,e){let i=e[Ki];this.needsIndexUpdate||=n!==this.length,Cs(this.lContainer,e,n,Zr(this.templateTNode,i)),WM(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,GM(this.lContainer,n),qM(this.lContainer,n)}create(n,e){let i=$l(this.lContainer,this.templateTNode.tView.ssrId);return _s(this.hostLView,this.templateTNode,new Ih(this.lContainer,e,n),{dehydratedView:i})}destroy(n){ac(n[z],n)}updateValue(n,e){this.getLView(n)[Ve].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Ve].$index=n}getLView(n){return ZM(this.lContainer,n)}};function bt(t){let n=L(null),e=Zn();try{let i=K(),r=i[z],o=i[e],s=e+1,a=Xl(i,s);if(o.liveCollection===void 0){let c=Th(r,s);o.liveCollection=new Sh(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if($M(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=qn(),d=l.length===0;if(bn(i,c,d)){let f=e+2,h=Xl(i,f);if(d){let p=Th(r,f),m=Uy(h,p,i),E=_s(i,p,void 0,{dehydratedView:m});Cs(h,E,0,Zr(p,m))}else r.firstUpdatePass&&zI(h),By(h,0)}}}finally{L(n)}}function Xl(t,n){return t[n]}function WM(t,n){if(t.length<=Oe)return;let e=Oe+n,i=t[e],r=i?i[hi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[$n];Xx(o,r),sr.delete(i[Wn]),r.detachedLeaveAnimationFns=void 0}}function GM(t,n){if(t.length<=Oe)return;let e=Oe+n,i=t[e],r=i?i[hi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function qM(t,n){return hs(t,n)}function ZM(t,n){return jy(t,n)}function Th(t,n){return Cl(t,n)}function N(t,n,e){let i=K(),r=qn();if(bn(i,r,n)){let o=Fe(),s=rs();gI(s,i,t,n,i[Ae],e)}return N}function Ah(t,n,e,i,r){dc(n,t,e,r?"class":"style",i)}function C(t,n,e,i){let r=K(),o=r[z],s=t+je,a=o.firstCreatePass?qy(s,r,2,n,xy,Rf(),e,i):o.data[s];if(Rn(a)){let l=r[cn].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(Ky(c),()=>(Cb(t,n,r,a,i),C))}}return Cb(t,n,r,a,i),C}function Cb(t,n,e,i,r){if(My(i,e,t,n,p_),ts(i)){let o=e[z];Yh(o,e,i),ey(o,i,e)}r!=null&&cc(e,i)}function _(){let t=Fe(),n=mt(),e=Sy(n);return t.firstCreatePass&&Zy(t,e),Nf(e)&&Of(),Af(),e.classesWithoutHost!=null&&tx(e)&&Ah(t,e,K(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&nx(e)&&Ah(t,e,K(),e.stylesWithoutHost,!1),_}function $(t,n,e,i){return C(t,n,e,i),_(),$}function ue(t,n,e,i){let r=K(),o=r[z],s=t+je,a=o.firstCreatePass?iM(s,o,2,n,e,i):o.data[s];return My(a,r,t,n,p_),i!=null&&cc(r,a),ue}function pe(){let t=mt(),n=Sy(t);return Nf(n)&&Of(),Af(),pe}function qe(t,n,e,i){return ue(t,n,e,i),pe(),qe}var p_=(t,n,e,i,r)=>(Tl(!0),iy(n[Ae],i,Uv()));function Kn(){return K()}function Mt(t,n,e){let i=K(),r=qn();if(bn(i,r,n)){let o=Fe(),s=rs();Dy(s,i,t,n,i[Ae],e)}return Mt}var Es="en-US";var YM=Es;function m_(t){typeof t=="string"&&(YM=t.toLowerCase().replace(/_/g,"-"))}function fe(t,n,e){let i=K(),r=Fe(),o=mt();return QM(r,i,i[Ae],o,t,n,e),fe}function QM(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=Xf(i,n,o),oM(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],p=d[f+1];l??=Xf(i,n,o),mb(i,n,h,p,r,l)}if(c&&c.length)for(let f of c)l??=Xf(i,n,o),mb(i,n,f,r,r,l)}}function A(t=1){return Hv(t)}function KM(t,n){let e=null,i=Lx(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?uy(t,o,!0):Bx(i,o))return r}return e}function Me(t){let n=K()[Et][Dt];if(!n.projection){let e=t?t.length:1,i=n.projection=fv(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?KM(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function Q(t,n=0,e,i,r,o){let s=K(),a=Fe(),l=i?t+1:null;l!==null&&Yr(s,a,l,i,r,o,null,e);let c=Jr(a,je+t,16,null,e||null);c.projection===null&&(c.projection=n),Lf();let f=!s[Ki]||kf();s[Et][Dt].projection[c.projection]===null&&l!==null?XM(s,a,l):f&&!nc(c)&&cI(a,s,c)}function XM(t,n,e){let i=je+e,r=n.data[i],o=t[i],s=$l(o,r.tView.ssrId),a=_s(t,r,void 0,{dehydratedView:s});Cs(o,a,0,Zr(r,s))}function Rt(t,n,e,i){return i_(t,n,e,i),Rt}function Ze(t,n,e){return n_(t,n,e),Ze}function W(t){let n=K(),e=Fe(),i=xl();is(i+1);let r=ep(e,i);if(t.dirty&&Ev(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=o_(n,i);t.reset(o,Ub),t.notifyOnChanges()}return!0}return!1}function G(){return Jh(K(),xl())}function vc(t,n,e,i,r){return a_(n,i_(t,e,i,r)),vc}function bc(t,n,e,i){return a_(t,n_(n,e,i)),bc}function yc(t=1){is(xl()+t)}function _n(t){let n=kv();return Dv(n,je+t)}function Nl(t,n){return t<<17|n<<2}function lr(t){return t>>17&32767}function JM(t){return(t&2)==2}function eS(t,n){return t&131071|n<<17}function Rh(t){return t|2}function Qr(t){return(t&131068)>>2}function nh(t,n){return t&-131069|n<<2}function tS(t){return(t&1)===1}function kh(t){return t|1}function nS(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=lr(s),l=Qr(s);t[i]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Lr(f,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let h=lr(t[a+1]);t[i+1]=Nl(h,a),h!==0&&(t[h+1]=nh(t[h+1],i)),t[a+1]=eS(t[a+1],i)}else t[i+1]=Nl(a,0),a!==0&&(t[a+1]=nh(t[a+1],i)),a=i;else t[i+1]=Nl(l,0),a===0?a=i:t[l+1]=nh(t[l+1],i),l=i;c&&(t[i+1]=Rh(t[i+1])),wb(t,d,i,!0),wb(t,d,i,!1),iS(n,d,t,i,o),s=Nl(a,l),o?n.classBindings=s:n.styleBindings=s}function iS(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Lr(o,n)>=0&&(e[i+1]=kh(e[i+1]))}function wb(t,n,e,i){let r=t[e+1],o=n===null,s=i?lr(r):Qr(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];rS(l,n)&&(a=!0,t[s+1]=i?kh(c):Rh(c)),s=i?lr(c):Qr(c)}a&&(t[e+1]=i?Rh(r):kh(r))}function rS(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Lr(t,n)>=0:!1}var hn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function oS(t){return t.substring(hn.key,hn.keyEnd)}function sS(t){return aS(t),g_(t,v_(t,0,hn.textEnd))}function g_(t,n){let e=hn.textEnd;return e===n?-1:(n=hn.keyEnd=lS(t,hn.key=n,e),v_(t,n,e))}function aS(t){hn.key=0,hn.keyEnd=0,hn.value=0,hn.valueEnd=0,hn.textEnd=t.length}function v_(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function lS(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Xn(t,n,e){return b_(t,n,e,!1),Xn}function q(t,n){return b_(t,n,null,!0),q}function Cn(t){dS(gS,cS,t,!0)}function cS(t,n){for(let e=sS(n);e>=0;e=g_(n,e))bl(t,oS(n),!0)}function b_(t,n,e,i){let r=K(),o=Fe(),s=Bf(2);if(o.firstUpdatePass&&__(o,t,s,i),n!==At&&bn(r,s,n)){let a=o.data[Zn()];C_(o,a,r,r[Ae],t,r[s+1]=bS(n,e),i,s)}}function dS(t,n,e,i){let r=Fe(),o=Bf(2);r.firstUpdatePass&&__(r,null,o,i);let s=K();if(e!==At&&bn(s,o,e)){let a=r.data[Zn()];if(w_(a,i)&&!y_(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=hl(l,e||"")),Ah(r,a,s,e,i)}else vS(r,a,s,s[Ae],s[o+1],s[o+1]=mS(t,n,e),i,o)}}function y_(t,n){return n>=t.expandoStartIndex}function __(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Zn()],s=y_(t,e);w_(o,i)&&n===null&&!s&&(n=!1),n=uS(r,o,n,i),nS(r,o,n,e,s,i)}}function uS(t,n,e,i){let r=Lv(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=ih(null,t,n,e,i),e=ms(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=ih(r,t,n,e,i),o===null){let l=fS(t,n,i);l!==void 0&&Array.isArray(l)&&(l=ih(null,t,n,l[1],i),l=ms(l,n.attrs,i),hS(t,n,i,l))}else o=pS(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function fS(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Qr(i)!==0)return t[lr(i)]}function hS(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[lr(r)]=i}function pS(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=ms(i,s,e)}return ms(i,n.attrs,e)}function ih(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=ms(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function ms(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),bl(t,s,e?!0:n[++o]))}return t===void 0?null:t}function mS(t,n,e){if(e==null||e==="")return pt;let i=[],r=ys(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function gS(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&bl(t,i,e)}function vS(t,n,e,i,r,o,s,a){r===At&&(r=pt);let l=0,c=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=l<r.length?r[l+1]:void 0,p=c<o.length?o[c+1]:void 0,m=null,E;d===f?(l+=2,c+=2,h!==p&&(m=f,E=p)):f===null||d!==null&&d<f?(l+=2,m=d):(c+=2,m=f,E=p),m!==null&&C_(t,n,e,i,m,E,s,a),d=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function C_(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=tS(c)?Db(l,n,e,r,Qr(c),s):void 0;if(!Jl(d)){Jl(o)||JM(c)&&(o=Db(l,null,e,r,a,s));let f=Ef(Zn(),e);uI(i,s,f,r,o)}}function Db(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,f=d===null,h=e[r+1];h===At&&(h=f?pt:void 0);let p=f?yl(h,i):d===i?h:void 0;if(c&&!Jl(p)&&(p=yl(l,i)),Jl(p)&&(a=p,s))return a;let m=t[r+1];r=s?lr(m):Qr(m)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=yl(l,i))}return a}function Jl(t){return t!==void 0}function bS(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Yo(ys(t)))),t}function w_(t,n){return(t.flags&(n?8:16))!==0}function w(t,n=""){let e=K(),i=Fe(),r=t+je,o=i.firstCreatePass?Jr(i,r,1,n,null):i.data[r],s=yS(i,e,o,n);e[r]=s,Sl()&&qh(i,e,s,o),Ur(o,!1)}var yS=(t,n,e,i)=>(Tl(!0),Ix(n[Ae],i));function _S(t,n,e,i=""){return bn(t,qn(),e)?n+Ko(e)+i:At}function He(t){return ke("",t),He}function ke(t,n,e){let i=K(),r=_S(i,t,n,e);return r!==At&&CS(i,Zn(),r),ke}function CS(t,n,e){let i=Ef(n,t);Mx(t[Ae],i,e)}function _c(t){return bn(K(),qn(),t)?Ko(t):At}function Eb(t,n,e){let i=Fe();i.firstCreatePass&&D_(n,i.data,i.blueprint,kn(t),e)}function D_(t,n,e,i,r){if(t=at(t),Array.isArray(t))for(let o=0;o<t.length;o++)D_(t[o],n,e,i,r);else{let o=Fe(),s=K(),a=mt(),l=Gi(t)?t:at(t.provide),c=yf(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Gi(t)||!t.multi){let p=new or(c,r,B,null),m=oh(l,n,r?d:d+h,f);m===-1?(ah(Hl(a,s),o,l),rh(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[m]=p,s[m]=p)}else{let p=oh(l,n,d+h,f),m=oh(l,n,d,d+h),E=p>=0&&e[p],M=m>=0&&e[m];if(r&&!M||!r&&!E){ah(Hl(a,s),o,l);let R=ES(r?DS:wS,e.length,r,i,c,t);!r&&M&&(e[m].providerFactory=R),rh(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(R),s.push(R)}else{let R=E_(e[r?m:p],c,!r&&i);rh(o,t,p>-1?p:m,R)}!r&&i&&M&&e[m].componentProviders++}}}function rh(t,n,e,i){let r=Gi(n),o=bv(n);if(r||o){let l=(o?at(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function E_(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function oh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function wS(t,n,e,i,r){return Nh(this.multi,[])}function DS(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=ds(i,i[z],this.providerFactory.index,r);s=l.slice(0,a),Nh(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Nh(o,s);return s}function Nh(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function ES(t,n,e,i,r,o){let s=new or(t,e,B,null);return s.multi=[],s.index=n,s.componentProviders=0,E_(s,r,i&&!e),s}function Te(t,n){return e=>{e.providersResolver=(i,r)=>Eb(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Eb(i,r?r(n):n,!0))}}function lp(t,n){let e=jf()+t,i=K();return i[e]===At?Yy(i,e,n()):rM(i,e)}function Ht(t,n,e){return IS(K(),jf(),t,n,e)}function xS(t,n){let e=t[n];return e===At?void 0:e}function IS(t,n,e,i,r,o){let s=n+e;return bn(t,s,r)?Yy(t,s+1,o?i.call(o,r):i(r)):xS(t,s+1)}function cp(t,n){return uc(t,n)}var ec=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},dp=(()=>{class t{compileModuleSync(e){return new Ql(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=df(e),o=cy(r.declarations).reduce((s,a)=>{let l=zn(a);return l&&s.push(new ar(l)),s},[]);return new ec(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var x_=(()=>{class t{applicationErrorHandler=u(Bt);appRef=u(Jt);taskService=u(Yn);ngZone=u(T);zonelessEnabled=u(os);tracing=u(vn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new de;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Go):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Zf,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Gv:$f;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Go+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function I_(){return[{provide:Tn,useExisting:x_},{provide:T,useClass:qo},{provide:os,useValue:!0}]}function MS(){return typeof $localize<"u"&&$localize.locale||Es}var Cc=new v("",{factory:()=>u(Cc,{optional:!0,skipSelf:!0})||MS()});function ye(t){return ev(t)}function ct(t,n){return Oo(t,n?.equal)}var SS=t=>t;function up(t,n){if(typeof t=="function"){let e=zu(t,SS,n?.equal);return M_(e,n?.debugName)}else{let e=zu(t.source,t.computation,t.equal);return M_(e,t.debugName)}}function M_(t,n){let e=t[Le],i=t;return i.set=r=>Xg(e,r),i.update=r=>Jg(e,r),i.asReadonly=Al.bind(t),i}var k_=Symbol("InputSignalNode#UNSET"),GS=X(g({},Fo),{transformFn:void 0,applyValueToInputSignal(t,n){ki(t,n)}});function N_(t,n){let e=Object.create(GS);e.value=t,e.transformFn=n?.transform;function i(){if(oi(e),e.value===k_){let r=null;throw new I(-950,r)}return e.value}return i[Le]=e,i}var Is=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>vs(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function S_(t,n){return N_(t,n)}function qS(t){return N_(k_,t)}var ut=(S_.required=qS,S_);function T_(t,n){return tp(n)}function ZS(t,n){return np(n)}var Ms=(T_.required=ZS,T_);function A_(t,n){return tp(n)}function YS(t,n){return np(n)}var O_=(A_.required=YS,A_);var hp=new v(""),QS=new v("");function xs(t){return!t.moduleRef}function KS(t){let n=xs(t)?t.r3Injector:t.moduleRef.injector,e=n.get(T);return e.run(()=>{xs(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Bt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),xs(t)){let o=()=>n.destroy(),s=t.platformInjector.get(hp);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(hp);s.add(o),t.moduleRef.onDestroy(()=>{cs(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return JS(i,e,()=>{let o=n.get(Yn),s=o.add(),a=n.get(sp);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Cc,Es);if(m_(l||Es),!n.get(QS,!0))return xs(t)?n.get(Jt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(xs(t)){let d=n.get(Jt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return XS?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var XS;function JS(t,n,e){try{let i=e();return bi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var wc=null;function eT(t=[],n){return oe.create({name:n,providers:[{provide:Jo,useValue:"platform"},{provide:hp,useValue:new Set([()=>wc=null])},...t]})}function tT(t=[]){if(wc)return wc;let n=eT(t);return wc=n,f_(),nT(n),n}function nT(t){let n=t.get(tc,null);it(t,()=>{n?.forEach(e=>e())})}var iT=1e4;var rG=iT-1e3;var Ue=(()=>{class t{static __NG_ELEMENT_ID__=rT}return t})();function rT(t){return oT(mt(),K(),(t&16)===16)}function oT(t,n,e){if(Rn(t)&&!e){let i=Kt(t.index,n);return new gi(i,i)}else if(t.type&175){let i=n[Et];return new gi(i,n)}return null}var pp=class{supports(n){return n instanceof Map||Xh(n)}create(){return new mp}},mp=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||Xh(n)))throw new I(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new gp(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},gp=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function R_(){return new bp([new pp])}var bp=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:R_});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||R_())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new I(901,!1)}}return t})();function F_(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;we(ge.BootstrapApplicationStart);try{let o=r?.injector??tT(i),s=[I_(),Zv,...e||[]],a=new ps({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return KS({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{we(ge.BootstrapApplicationEnd)}}function ae(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function to(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var fp=Symbol("NOT_SET"),P_=new Set,sT=X(g({},Fo),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:fp,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==fp&&!Ir(this))return this.signal;try{for(let r of this.cleanup??P_)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=jn(this),i;try{i=this.userFn.apply(null,n)}finally{si(this,e)}return(this.value===fp||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),vp=class extends us{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(xt),s),this.scheduler=r;for(let a of $h){let l=e[a];if(l===void 0)continue;let c=Object.create(sT);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(oi(c),c.value),c.signal[Le]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??P_)e()}finally{ai(n)}}};function L_(t,n){let e=n?.injector??u(oe),i=e.get(Tn),r=e.get(sc),o=e.get(vn,null,{optional:!0});r.impl??=e.get(Wh);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(zr,null,{optional:!0}),l=new vp(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Dc(t,n){let e=zn(t),i=n.elementInjector||Vr();return new ar(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var V_=null;function en(){return V_}function yp(t){V_??=t}var Ss=class{},Ec=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>u(j_),providedIn:"platform"})}return t})();var j_=(()=>{class t extends Ec{_location;_history;_doc=u(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return en().getBaseHref(this._doc)}onPopState(e){let i=en().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=en().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function U_(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function B_(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function yi(t){return t&&t[0]!=="?"?`?${t}`:t}var no=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>u(lT),providedIn:"root"})}return t})(),aT=new v(""),lT=(()=>{class t extends no{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return U_(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+yi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+yi(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+yi(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(H(Ec),H(aT,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _i=(()=>{class t{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=uT(B_(H_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+yi(i))}normalize(e){return t.stripTrailingSlash(dT(this._basePath,H_(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+yi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+yi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=yi;static joinWithSlash=U_;static stripTrailingSlash=B_;static \u0275fac=function(i){return new(i||t)(H(no))};static \u0275prov=b({token:t,factory:()=>cT(),providedIn:"root"})}return t})();function cT(){return new _i(H(no))}function dT(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function H_(t){return t.replace(/\/index.html$/,"")}function uT(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var _p=/\s+/,z_=[],Cp=(()=>{class t{_ngEl;_renderer;initialClasses=z_;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(_p):z_}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(_p):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(_p).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(B(P),B(Se))};static \u0275dir=k({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Ts=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:gn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(B(P),B(bp),B(Se))};static \u0275dir=k({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),wp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(oe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(B(lt))};static \u0275dir=k({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Be]})}return t})();function xc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var ur=class{};var Dp="browser";function $_(t){return t===Dp}var As=class{_doc;constructor(n){this._doc=n}manager},Ic=(()=>{class t extends As{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Tc=new v(""),Mp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Ic));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Ic);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new I(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(H(Tc),H(T))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Ep="ng-app-id";function W_(t){for(let n of t)n.remove()}function G_(t,n){let e=n.createElement("style");return e.textContent=t,e}function gT(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Ep}="${n}"],link[${Ep}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Ep),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Ip(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Sp=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,gT(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,G_);i?.forEach(r=>this.addUsage(r,this.external,Ip))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(W_(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])W_(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,G_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Ip(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(H(ee),H(Xr),H(dr,8),H(cr))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),xp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Tp=/%COMP%/g;var Z_="%COMP%",vT=`_nghost-${Z_}`,bT=`_ngcontent-${Z_}`,yT=!0,_T=new v("",{factory:()=>yT});function CT(t){return bT.replace(Tp,t)}function wT(t){return vT.replace(Tp,t)}function Y_(t,n){return n.map(e=>e.replace(Tp,t))}var Ap=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Rs(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Sc?r.applyToHost(e):r instanceof ks&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case mn.Emulated:o=new Sc(l,c,i,this.appId,d,s,a,f);break;case mn.ShadowDom:return new Mc(l,e,i,s,a,this.nonce,f,c);case mn.ExperimentalIsolatedShadowDom:return new Mc(l,e,i,s,a,this.nonce,f);default:o=new ks(l,c,i,d,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(H(Mp),H(Sp),H(Xr),H(_T),H(ee),H(T),H(dr),H(vn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Rs=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(xp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(q_(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(q_(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new I(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=xp[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=xp[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(gn.DashCase|gn.Important)?n.style.setProperty(e,i,r&gn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&gn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=en().getGlobalEventTarget(this.doc,n),!n))throw new I(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function q_(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Mc=class extends Rs{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=Y_(i.id,c);for(let f of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=i.getExternalStyles?.();if(d)for(let f of d){let h=Ip(f,r);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ks=class extends Rs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?Y_(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&sr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Sc=class extends ks{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=CT(c),this.hostAttr=wT(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Ac=class t extends Ss{supportsDOMEvents=!0;static makeCurrent(){yp(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=DT();return e==null?null:ET(e)}resetBaseElement(){Ns=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return xc(document.cookie,n)}},Ns=null;function DT(){return Ns=Ns||document.head.querySelector("base"),Ns?Ns.getAttribute("href"):null}function ET(t){return new URL(t,document.baseURI).pathname}var xT=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Q_=["alt","control","meta","shift"],IT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},MT={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},K_=(()=>{class t extends As{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>en().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),Q_.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=IT[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Q_.forEach(s=>{if(s!==r){let a=MT[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function Rp(t,n,e){let i=g({rootComponent:t},ST(n,e));return F_(i)}function ST(t,n){return{platformRef:n?.platformRef,appProviders:[...NT,...t?.providers??[]],platformProviders:kT}}function TT(){Ac.makeCurrent()}function AT(){return new an}function RT(){return Ph(document),document}var kT=[{provide:cr,useValue:Dp},{provide:tc,useValue:TT,multi:!0},{provide:ee,useFactory:RT}];var NT=[{provide:Jo,useValue:"root"},{provide:an,useFactory:AT},{provide:Tc,useClass:Ic,multi:!0},{provide:Tc,useClass:K_,multi:!0},Ap,Sp,Mp,{provide:Ge,useExisting:Ap},{provide:ur,useClass:xT},[]];var Ci=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Np=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Op=class{encodeKey(n){return X_(n)}encodeValue(n){return X_(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function OT(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var FT=/%(\d[a-f0-9])/gi,PT={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function X_(t){return encodeURIComponent(t).replace(FT,(n,e)=>PT[e]??n)}function Rc(t){return`${t}`}var Jn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Op,n.fromString){if(n.fromObject)throw new I(2805,!1);this.map=OT(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Rc):[Rc(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Rc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Rc(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function LT(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function J_(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function eC(t){return typeof Blob<"u"&&t instanceof Blob}function tC(t){return typeof FormData<"u"&&t instanceof FormData}function VT(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var nC="Content-Type",iC="Accept",rC="text/plain",oC="application/json",jT=`${oC}, ${rC}, */*`,io=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(LT(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new I(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ci,this.context??=new Np,!this.params)this.params=new Jn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||J_(this.body)||eC(this.body)||tC(this.body)||VT(this.body)?this.body:this.body instanceof Jn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||tC(this.body)?null:eC(this.body)?this.body.type||null:J_(this.body)?null:typeof this.body=="string"?rC:this.body instanceof Jn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?oC:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,m=n.transferCache??this.transferCache,E=n.timeout??this.timeout,M=n.body!==void 0?n.body:this.body,R=n.withCredentials??this.withCredentials,ve=n.reportProgress??this.reportProgress,et=n.headers||this.headers,tt=n.params||this.params,Ao=n.context??this.context;return n.setHeaders!==void 0&&(et=Object.keys(n.setHeaders).reduce((Ro,Si)=>Ro.set(Si,n.setHeaders[Si]),et)),n.setParams&&(tt=Object.keys(n.setParams).reduce((Ro,Si)=>Ro.set(Si,n.setParams[Si]),tt)),new t(e,i,M,{params:tt,headers:et,context:Ao,reportProgress:ve,responseType:r,withCredentials:R,transferCache:m,keepalive:o,cache:a,priority:s,timeout:E,mode:l,redirect:c,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},fr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(fr||{}),Os=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Ci,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Fp=class t extends Os{constructor(n={}){super(n)}type=fr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Fs=class t extends Os{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=fr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},ro=class extends Os{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},BT=200,HT=204;var UT=/^\)\]\}',?\n/;var zT=(()=>{class t{xhrFactory;tracingService=u(vn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new I(-2800,!1);let i=this.xhrFactory;return Z(null).pipe(We(()=>new U(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((M,R)=>s.setRequestHeader(M,R.join(","))),e.headers.has(iC)||s.setRequestHeader(iC,jT),!e.headers.has(nC)){let M=e.detectContentTypeHeader();M!==null&&s.setRequestHeader(nC,M)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let M=e.responseType.toLowerCase();s.responseType=M!=="json"?M:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let M=s.statusText||"OK",R=new Ci(s.getAllResponseHeaders()),ve=s.responseURL||e.url;return l=new Fp({headers:R,status:s.status,statusText:M,url:ve}),l},d=this.maybePropagateTrace(()=>{let{headers:M,status:R,statusText:ve,url:et}=c(),tt=null;R!==HT&&(tt=typeof s.response>"u"?s.responseText:s.response),R===0&&(R=tt?BT:0);let Ao=R>=200&&R<300;if(e.responseType==="json"&&typeof tt=="string"){let Ro=tt;tt=tt.replace(UT,"");try{tt=tt!==""?JSON.parse(tt):null}catch(Si){tt=Ro,Ao&&(Ao=!1,tt={error:Si,text:tt})}}Ao?(o.next(new Fs({body:tt,headers:M,status:R,statusText:ve,url:et||void 0})),o.complete()):o.error(new ro({error:tt,headers:M,status:R,statusText:ve,url:et||void 0}))}),f=this.maybePropagateTrace(M=>{let{url:R}=c(),ve=new ro({error:M,status:s.status||0,statusText:s.statusText||"Unknown Error",url:R||void 0});o.error(ve)}),h=f;e.timeout&&(h=this.maybePropagateTrace(M=>{let{url:R}=c(),ve=new ro({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:R||void 0});o.error(ve)}));let p=!1,m=this.maybePropagateTrace(M=>{p||(o.next(c()),p=!0);let R={type:fr.DownloadProgress,loaded:M.loaded};M.lengthComputable&&(R.total=M.total),e.responseType==="text"&&s.responseText&&(R.partialText=s.responseText),o.next(R)}),E=this.maybePropagateTrace(M=>{let R={type:fr.UploadProgress,loaded:M.loaded};M.lengthComputable&&(R.total=M.total),o.next(R)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",E)),s.send(a),o.next({type:fr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",E)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(H(ur))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $T(t,n){return n(t)}function WT(t,n,e){return(i,r)=>it(e,()=>n(i,o=>t(o,r)))}var GT=new v("",{factory:()=>[]}),sC=new v(""),qT=new v("",{factory:()=>!0});var ZT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(zT),r},providedIn:"root"})}return t})();var YT=(()=>{class t{backend;injector;chain=null;pendingTasks=u(ss);contributeToStability=u(qT);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(GT),...this.injector.get(sC,[])]));this.chain=i.reduceRight((r,o)=>WT(r,o,this.injector),$T)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Ho(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(H(ZT),H(be))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),QT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(YT),r},providedIn:"root"})}return t})();function kp(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var hr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof io)o=e;else{let l;r.headers instanceof Ci?l=r.headers:l=new Ci(r.headers);let c;r.params&&(r.params instanceof Jn?c=r.params:c=new Jn({fromObject:r.params})),o=new io(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=Z(o).pipe(Nr(l=>this.handler.handle(l)));if(e instanceof io||r.observe==="events")return s;let a=s.pipe(he(l=>l instanceof Fs));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(J(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new I(2806,!1);return l.body}));case"blob":return a.pipe(J(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new I(2807,!1);return l.body}));case"text":return a.pipe(J(l=>{if(l.body!==null&&typeof l.body!="string")throw new I(2808,!1);return l.body}));default:return a.pipe(J(l=>l.body))}case"response":return a;default:throw new I(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Jn().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,kp(r,i))}post(e,i,r={}){return this.request("POST",e,kp(r,i))}put(e,i,r={}){return this.request("PUT",e,kp(r,i))}static \u0275fac=function(i){return new(i||t)(H(QT))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var te="primary",Ys=Symbol("RouteTitle"),Bp=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function mr(t){return new Bp(t)}function Pp(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function gC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Pp(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Pp(o,t.slice(0,o.length),a)||!Pp(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Lc(t){return new Promise((n,e)=>{t.pipe(Hn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function XT(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Fn(t[e],n[e]))return!1;return!0}function Fn(t,n){let e=t?Hp(t):void 0,i=n?Hp(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!vC(t[r],n[r]))return!1;return!0}function Hp(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function vC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function JT(t){return t.length>0?t[t.length-1]:null}function br(t){return Vo(t)?t:bi(t)?Re(Promise.resolve(t)):Z(t)}function bC(t){return Vo(t)?Lc(t):Promise.resolve(t)}var eA={exact:CC,subset:wC},yC={exact:tA,subset:nA,ignored:()=>!0},_C={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Up={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function cC(t,n,e){return eA[e.paths](t.root,n.root,e.matrixParams)&&yC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function tA(t,n){return Fn(t,n)}function CC(t,n,e){if(!pr(t.segments,n.segments)||!Oc(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!CC(t.children[i],n.children[i],e))return!1;return!0}function nA(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>vC(t[e],n[e]))}function wC(t,n,e){return DC(t,n,n.segments,e)}function DC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!pr(r,e)||n.hasChildren()||!Oc(r,e,i))}else if(t.segments.length===e.length){if(!pr(t.segments,e)||!Oc(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!wC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!pr(t.segments,r)||!Oc(t.segments,r,i)||!t.children[te]?!1:DC(t.children[te],n,o,i)}}function Oc(t,n,e){return n.every((i,r)=>yC[e](t[r].parameters,i.parameters))}var zt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new _e([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=mr(this.queryParams),this._queryParamMap}toString(){return oA.serialize(this)}},_e=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fc(this)}},wi=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=mr(this.parameters),this._parameterMap}toString(){return xC(this)}};function iA(t,n){return pr(t,n)&&t.every((e,i)=>Fn(e.parameters,n[i].parameters))}function pr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function rA(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===te&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==te&&(e=e.concat(n(r,i)))}),e}var po=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>new Di,providedIn:"root"})}return t})(),Di=class{parse(n){let e=new $p(n);return new zt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Ps(n.root,!0)}`,i=lA(n.queryParams),r=typeof n.fragment=="string"?`#${sA(n.fragment)}`:"";return`${e}${i}${r}`}},oA=new Di;function Fc(t){return t.segments.map(n=>xC(n)).join("/")}function Ps(t,n){if(!t.hasChildren())return Fc(t);if(n){let e=t.children[te]?Ps(t.children[te],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==te&&i.push(`${r}:${Ps(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=rA(t,(i,r)=>r===te?[Ps(t.children[te],!1)]:[`${r}:${Ps(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[te]!=null?`${Fc(t)}/${e[0]}`:`${Fc(t)}/(${e.join("//")})`}}function EC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function kc(t){return EC(t).replace(/%3B/gi,";")}function sA(t){return encodeURI(t)}function zp(t){return EC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Pc(t){return decodeURIComponent(t)}function dC(t){return Pc(t.replace(/\+/g,"%20"))}function xC(t){return`${zp(t.path)}${aA(t.parameters)}`}function aA(t){return Object.entries(t).map(([n,e])=>`;${zp(n)}=${zp(e)}`).join("")}function lA(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${kc(e)}=${kc(r)}`).join("&"):`${kc(e)}=${kc(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var cA=/^[^\/()?;#]+/;function Lp(t){let n=t.match(cA);return n?n[0]:""}var dA=/^[^\/()?;=#]+/;function uA(t){let n=t.match(dA);return n?n[0]:""}var fA=/^[^=?&#]+/;function hA(t){let n=t.match(fA);return n?n[0]:""}var pA=/^[^&#]+/;function mA(t){let n=t.match(pA);return n?n[0]:""}var $p=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _e([],{}):new _e([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new I(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[te]=new _e(e,i)),r}parseSegment(){let n=Lp(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new I(4009,!1);return this.capture(n),new wi(Pc(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=uA(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Lp(this.remaining);r&&(i=r,this.capture(i))}n[Pc(e)]=Pc(i)}parseQueryParam(n){let e=hA(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=mA(this.remaining);s&&(i=s,this.capture(i))}let r=dC(e),o=dC(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Lp(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new I(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=te);let a=this.parseChildren(e+1);i[s??te]=Object.keys(a).length===1&&a[te]?a[te]:new _e([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new I(4011,!1)}};function IC(t){return t.segments.length>0?new _e([],{[te]:t}):t}function MC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=MC(r);if(i===te&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new _e(t.segments,n);return gA(e)}function gA(t){if(t.numberOfChildren===1&&t.children[te]){let n=t.children[te];return new _e(t.segments.concat(n.segments),n.children)}return t}function Ei(t){return t instanceof zt}function SC(t,n,e=null,i=null,r=new Di){let o=TC(t);return AC(o,n,e,i,r)}function TC(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new _e(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=IC(i);return n??r}function AC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Vp(o,o,o,e,i,r);let s=vA(n);if(s.toRoot())return Vp(o,o,new _e([],{}),e,i,r);let a=bA(s,o,t),l=a.processChildren?Vs(a.segmentGroup,a.index,s.commands):kC(a.segmentGroup,a.index,s.commands);return Vp(o,a.segmentGroup,l,e,i,r)}function Vc(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Hs(t){return typeof t=="object"&&t!=null&&t.outlets}function uC(t,n,e){t||="\u0275";let i=new zt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Vp(t,n,e,i,r,o){let s={};for(let[c,d]of Object.entries(i??{}))s[c]=Array.isArray(d)?d.map(f=>uC(c,f,o)):uC(c,d,o);let a;t===n?a=e:a=RC(t,n,e);let l=IC(MC(a));return new zt(l,s,r)}function RC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=RC(o,n,e)}),new _e(t.segments,i)}var jc=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Vc(i[0]))throw new I(4003,!1);let r=i.find(Hs);if(r&&r!==JT(i))throw new I(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vA(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new jc(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new jc(e,n,i)}var so=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function bA(t,n,e){if(t.isAbsolute)return new so(n,!0,0);if(!e)return new so(n,!1,NaN);if(e.parent===null)return new so(e,!0,0);let i=Vc(t.commands[0])?0:1,r=e.segments.length-1+i;return yA(e,r,t.numberOfDoubleDots)}function yA(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new I(4005,!1);r=i.segments.length}return new so(i,!1,r-o)}function _A(t){return Hs(t[0])?t[0].outlets:{[te]:t}}function kC(t,n,e){if(t??=new _e([],{}),t.segments.length===0&&t.hasChildren())return Vs(t,n,e);let i=CA(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new _e(t.segments.slice(0,i.pathIndex),{});return o.children[te]=new _e(t.segments.slice(i.pathIndex),t.children),Vs(o,0,r)}else return i.match&&r.length===0?new _e(t.segments,{}):i.match&&!t.hasChildren()?Wp(t,n,e):i.match?Vs(t,0,r):Wp(t,n,e)}function Vs(t,n,e){if(e.length===0)return new _e(t.segments,{});{let i=_A(e),r={};if(Object.keys(i).some(o=>o!==te)&&t.children[te]&&t.numberOfChildren===1&&t.children[te].segments.length===0){let o=Vs(t.children[te],n,e);return new _e(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=kC(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new _e(t.segments,r)}}function CA(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(Hs(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!hC(l,c,s))return o;i+=2}else{if(!hC(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Wp(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Hs(o)){let l=wA(o.outlets);return new _e(i,l)}if(r===0&&Vc(e[0])){let l=t.segments[n];i.push(new wi(l.path,fC(e[0]))),r++;continue}let s=Hs(o)?o.outlets[te]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Vc(a)?(i.push(new wi(s,fC(a))),r+=2):(i.push(new wi(s,{})),r++)}return new _e(i,{})}function wA(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Wp(new _e([],{}),0,i))}),n}function fC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function hC(t,n,e){return t==e.path&&Fn(n,e.parameters)}var js="imperative",rt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(rt||{}),$t=class{id;url;constructor(n,e){this.id=n,this.url=e}},gr=class extends $t{type=rt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Pn=class extends $t{urlAfterRedirects;type=rt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(yt||{}),Us=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Us||{}),tn=class extends $t{reason;code;type=rt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function NC(t){return t instanceof tn&&(t.code===yt.Redirect||t.code===yt.SupersededByNewNavigation)}var ti=class extends $t{reason;code;type=rt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},vr=class extends $t{error;target;type=rt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},zs=class extends $t{urlAfterRedirects;state;type=rt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bc=class extends $t{urlAfterRedirects;state;type=rt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hc=class extends $t{urlAfterRedirects;state;shouldActivate;type=rt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Uc=class extends $t{urlAfterRedirects;state;type=rt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zc=class extends $t{urlAfterRedirects;state;type=rt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$c=class{route;type=rt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Wc=class{route;type=rt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Gc=class{snapshot;type=rt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qc=class{snapshot;type=rt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zc=class{snapshot;type=rt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yc=class{snapshot;type=rt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var lo=class{},$s=class{},co=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function DA(t){return!(t instanceof lo)&&!(t instanceof co)&&!(t instanceof $s)}var Qc=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new mo(this.rootInjector)}},mo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Qc(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(H(be))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kc=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Gp(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Gp(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=qp(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return qp(n,this._root).map(e=>e.value)}};function Gp(t,n){if(t===n.value)return n;for(let e of n.children){let i=Gp(t,e);if(i)return i}return null}function qp(t,n){if(t===n.value)return[n];for(let e of n.children){let i=qp(t,e);if(i.length)return i.unshift(n),i}return[]}var Ut=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function oo(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Ws=class extends Kc{snapshot;constructor(n,e){super(n),this.snapshot=e,nm(this,n)}toString(){return this.snapshot.toString()}};function OC(t,n){let e=EA(t,n),i=new $e([new wi("",{})]),r=new $e({}),o=new $e({}),s=new $e({}),a=new $e(""),l=new Wt(i,r,s,a,o,te,t,e.root);return l.snapshot=e.root,new Ws(new Ut(l,[]),e)}function EA(t,n){let e={},i={},r={},s=new uo([],e,r,"",i,te,t,null,{},n);return new Gs("",new Ut(s,[]))}var Wt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(J(c=>c[Ys]))??Z(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(J(n=>mr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(J(n=>mr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function tm(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:g(g({},n.params),t.params),data:g(g({},n.data),t.data),resolve:g(g(g(g({},t.data),n.data),r?.data),t._resolvedData)}:i={params:g({},t.params),data:g({},t.data),resolve:g(g({},t.data),t._resolvedData??{})},r&&PC(r)&&(i.resolve[Ys]=r.title),i}var uo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ys]}constructor(n,e,i,r,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=mr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=mr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Gs=class extends Kc{url;constructor(n,e){super(e),this.url=n,nm(this,e)}toString(){return FC(this._root)}};function nm(t,n){n.value._routerState=t,n.children.forEach(e=>nm(t,e))}function FC(t){let n=t.children.length>0?` { ${t.children.map(FC).join(", ")} } `:"";return`${t.value}${n}`}function jp(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Fn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Fn(n.params,e.params)||t.paramsSubject.next(e.params),XT(n.url,e.url)||t.urlSubject.next(e.url),Fn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Zp(t,n){let e=Fn(t.params,n.params)&&iA(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Zp(t.parent,n.parent))}function PC(t){return typeof t.title=="string"||t.title===null}var LC=new v(""),Qs=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=te;activateEvents=new V;deactivateEvents=new V;attachEvents=new V;detachEvents=new V;routerOutletData=ut();parentContexts=u(mo);location=u(lt);changeDetector=u(Ue);inputBinder=u(td,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new I(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new I(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new I(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new I(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Yp(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Be]})}return t})(),Yp=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Wt?this.route:n===mo?this.childContexts:n===LC?this.outletData:this.parent.get(n,e)}},td=new v("");var im=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&$(0,"router-outlet")},dependencies:[Qs],encapsulation:2})}return t})();function rm(t){let n=t.children&&t.children.map(rm),e=n?X(g({},t),{children:n}):g({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==te&&(e.component=im),e}function xA(t,n,e){let i=qs(t,n._root,e?e._root:void 0);return new Ws(i,n)}function qs(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=IA(t,n,e);return new Ut(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>qs(t,a)),s}}let i=MA(n.value),r=n.children.map(o=>qs(t,o));return new Ut(i,r)}}function IA(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return qs(t,i,r);return qs(t,i)})}function MA(t){return new Wt(new $e(t.url),new $e(t.params),new $e(t.queryParams),new $e(t.fragment),new $e(t.data),t.outlet,t.component,t)}var fo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},VC="ngNavigationCancelingError";function Xc(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Ei(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=jC(!1,yt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function jC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[VC]=!0,e.cancellationCode=n,e}function SA(t){return BC(t)&&Ei(t.url)}function BC(t){return!!t&&t[VC]}var Qp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),jp(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=oo(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=oo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=oo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=oo(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Yc(o.value.snapshot))}),n.children.length&&this.forwardEvent(new qc(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(jp(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),jp(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},Jc=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ao=class{component;route;constructor(n,e){this.component=n,this.route=e}};function TA(t,n,e){let i=t._root,r=n?n._root:null;return Ls(i,r,e,[i.value])}function AA(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function go(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!rf(t)?t:n.get(t):i}function Ls(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=oo(n);return t.children.forEach(s=>{RA(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Bs(a,e.getContext(s),r)),r}function RA(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=kA(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Jc(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ls(t,n,a?a.children:null,i,r):Ls(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ao(a.outlet.component,s))}else s&&Bs(n,a,r),r.canActivateChecks.push(new Jc(i)),o.component?Ls(t,null,a?a.children:null,i,r):Ls(t,null,e,i,r);return r}function kA(t,n,e){if(typeof e=="function")return it(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!pr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!pr(t.url,n.url)||!Fn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Zp(t,n)||!Fn(t.queryParams,n.queryParams);default:return!Zp(t,n)}}function Bs(t,n,e){let i=oo(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?Bs(s,n.children.getContext(o),e):Bs(s,null,e):Bs(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ao(n.outlet.component,r)):e.canDeactivateChecks.push(new ao(null,r)):e.canDeactivateChecks.push(new ao(null,r))}function Ks(t){return typeof t=="function"}function NA(t){return typeof t=="boolean"}function OA(t){return t&&Ks(t.canLoad)}function FA(t){return t&&Ks(t.canActivate)}function PA(t){return t&&Ks(t.canActivateChild)}function LA(t){return t&&Ks(t.canDeactivate)}function VA(t){return t&&Ks(t.canMatch)}function HC(t){return t instanceof ji||t?.name==="EmptyError"}var Nc=Symbol("INITIAL_VALUE");function ho(){return We(t=>jo(t.map(n=>n.pipe(nt(1),st(Nc)))).pipe(J(n=>{for(let e of n)if(e!==!0){if(e===Nc)return Nc;if(e===!1||jA(e))return e}return!0}),he(n=>n!==Nc),nt(1)))}function jA(t){return Ei(t)||t instanceof fo}function UC(t){return t.aborted?Z(void 0).pipe(nt(1)):new U(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function zC(t){return xe(UC(t))}function BA(t){return ot(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Z(X(g({},n),{guardsResult:!0})):HA(o,e,i).pipe(ot(s=>s&&NA(s)?UA(e,r,t):Z(s)),J(s=>X(g({},n),{guardsResult:s})))})}function HA(t,n,e){return Re(t).pipe(ot(i=>qA(i.component,i.route,e,n)),Hn(i=>i!==!0,!0))}function UA(t,n,e){return Re(n).pipe(Nr(i=>Mn($A(i.route.parent,e),zA(i.route,e),GA(t,i.path),WA(t,i.route))),Hn(i=>i!==!0,!0))}function zA(t,n){return t!==null&&n&&n(new Zc(t)),Z(!0)}function $A(t,n){return t!==null&&n&&n(new Gc(t)),Z(!0)}function WA(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Z(!0);let i=e.map(r=>Bi(()=>{let o=n._environmentInjector,s=go(r,o),a=FA(s)?s.canActivate(n,t):it(o,()=>s(n,t));return br(a).pipe(Hn())}));return Z(i).pipe(ho())}function GA(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>AA(o)).filter(o=>o!==null).map(o=>Bi(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=go(a,l),d=PA(c)?c.canActivateChild(e,t):it(l,()=>c(e,t));return br(d).pipe(Hn())});return Z(s).pipe(ho())}));return Z(r).pipe(ho())}function qA(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Z(!0);let o=r.map(s=>{let a=n._environmentInjector,l=go(s,a),c=LA(l)?l.canDeactivate(t,n,e,i):it(a,()=>l(t,n,e,i));return br(c).pipe(Hn())});return Z(o).pipe(ho())}function ZA(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Z(!0);let s=o.map(a=>{let l=go(a,t),c=OA(l)?l.canLoad(n,e):it(t,()=>l(n,e)),d=br(c);return r?d.pipe(zC(r)):d});return Z(s).pipe(ho(),$C(i))}function $C(t){return Nu(ht(n=>{if(typeof n!="boolean")throw Xc(t,n)}),J(n=>n===!0))}function YA(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return Z(!0);let a=s.map(l=>{let c=go(l,t),d=VA(c)?c.canMatch(n,e,r):it(t,()=>c(n,e,r));return br(d).pipe(zC(o))});return Z(a).pipe(ho(),$C(i))}var ei=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Zs=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function QA(t){throw new I(4e3,!1)}function KA(t){throw jC(!1,yt.GuardRejected)}var Kp=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[te])throw QA(`${n.redirectTo}`);r=r.children[te]}}async applyRedirectCommands(n,e,i,r,o){let s=await XA(e,r,o);if(s instanceof zt)throw new Zs(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new Zs(a);return a}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new zt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new _e(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new I(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function XA(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Lc(br(it(e,()=>i(n))))}function JA(t,n){return t.providers&&!t._injector&&(t._injector=Ds(t.providers,n,`Route: ${t.path}`)),t._injector??n}function wn(t){return t.outlet||te}function eR(t,n){let e=t.filter(i=>wn(i)===n);return e.push(...t.filter(i=>wn(i)!==n)),e}var Xp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function WC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function tR(t,n,e,i,r,o,s){let a=GC(t,n,e);if(!a.matched)return Z(a);let l=WC(o(a));return i=JA(n,i),YA(i,n,e,r,l,s).pipe(J(c=>c===!0?a:g({},Xp)))}function GC(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?g({},Xp):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||gC)(e,t,n);if(!r)return g({},Xp);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function pC(t,n,e,i,r){return e.length>0&&rR(t,e,i,r)?{segmentGroup:new _e(n,iR(i,new _e(e,t.children))),slicedSegments:[]}:e.length===0&&oR(t,e,i)?{segmentGroup:new _e(t.segments,nR(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new _e(t.segments,t.children),slicedSegments:e}}function nR(t,n,e,i){let r={};for(let o of e)if(nd(t,n,o)&&!i[wn(o)]){let s=new _e([],{});r[wn(o)]=s}return g(g({},i),r)}function iR(t,n){let e={};e[te]=n;for(let i of t)if(i.path===""&&wn(i)!==te){let r=new _e([],{});e[wn(i)]=r}return e}function rR(t,n,e,i){return e.some(r=>!nd(t,n,r)||!(wn(r)!==te)?!1:!(i!==void 0&&wn(r)===i))}function oR(t,n,e){return e.some(i=>nd(t,n,i))}function nd(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function sR(t,n,e){return n.length===0&&!t.children[e]}var Jp=class{};async function aR(t,n,e,i,r,o,s="emptyOnly",a){return new em(t,n,e,i,r,s,o,a).recognize()}var lR=31,em=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Kp(this.urlSerializer,this.urlTree)}noMatchError(n){return new I(4002,`'${n.segmentGroup}'`)}async recognize(){let n=pC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Ut(i,e),o=new Gs("",r),s=SC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new uo([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),te,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,te,e),rootSnapshot:e}}catch(i){if(i instanceof Zs)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ei?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=await this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Ut?[s]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],d=eR(e,l),f=await this.processSegmentGroup(n,d,c,l,r);s.push(...f)}let a=qC(s);return cR(a),a}async processSegment(n,e,i,r,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof ei||HC(c))continue;throw c}if(sR(i,r,o))return new Jp;throw new ei(i)}async processSegmentAgainstRoute(n,e,i,r,o,s,a,l){if(wn(i)!==s&&(s===te||!nd(r,o,i)))throw new ei(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new ei(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=GC(e,r,o);if(!l)throw new ei(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>lR&&(this.allowRedirects=!1));let p=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let m=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,WC(p),n),E=await this.applyRedirects.lineralizeSegments(r,m);return this.processSegment(n,i,e,E.concat(h),s,!1,a)}createSnapshot(n,e,i,r,o){let s=new uo(i,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,uR(e),wn(e),e.component??e._loadedComponent??null,e,fR(e),n),a=tm(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=et=>this.createSnapshot(n,i,et.consumedSegments,et.parameters,s),l=await Lc(tR(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new ei(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=l,m=this.createSnapshot(n,i,h,f,s),{segmentGroup:E,slicedSegments:M}=pC(e,h,p,c,o);if(M.length===0&&E.hasChildren()){let et=await this.processChildren(d,c,E,m);return new Ut(m,et)}if(c.length===0&&M.length===0)return new Ut(m,[]);let R=wn(i)===o,ve=await this.processSegment(d,c,E,M,R?te:o,!0,m);return new Ut(m,ve instanceof Ut?[ve]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Lc(ZA(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw KA(e)}return{routes:[],injector:n}}};function cR(t){t.sort((n,e)=>n.value.outlet===te?-1:e.value.outlet===te?1:n.value.outlet.localeCompare(e.value.outlet))}function dR(t){let n=t.value.routeConfig;return n&&n.path===""}function qC(t){let n=[],e=new Set;for(let i of t){if(!dR(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=qC(i.children);n.push(new Ut(i.value,r))}return n.filter(i=>!e.has(i))}function uR(t){return t.data||{}}function fR(t){return t.resolve||{}}function hR(t,n,e,i,r,o,s){return ot(async a=>{let{state:l,tree:c}=await aR(t,n,e,i,a.extractedUrl,r,o,s);return X(g({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function pR(t){return ot(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Z(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of ZC(a))o.add(l);let s=0;return Re(o).pipe(Nr(a=>r.has(a)?mR(a,e,t):(a.data=tm(a,a.parent,t).resolve,Z(void 0))),ht(()=>s++),nl(1),ot(a=>s===o.size?Z(n):Ne))})}function ZC(t){let n=t.children.map(e=>ZC(e)).flat();return[t,...n]}function mR(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!PC(i)&&(r[Ys]=i.title),Bi(()=>(t.data=tm(t,t.parent,e).resolve,gR(r,t,n).pipe(J(o=>(t._resolvedData=o,t.data=g(g({},t.data),o),null)))))}function gR(t,n,e){let i=Hp(t);if(i.length===0)return Z({});let r={};return Re(i).pipe(ot(o=>vR(t[o],n,e).pipe(Hn(),ht(s=>{if(s instanceof fo)throw Xc(new Di,s);r[o]=s}))),nl(1),J(()=>r),Bo(o=>HC(o)?Ne:Lu(o)))}function vR(t,n,e){let i=n._environmentInjector,r=go(t,i),o=r.resolve?r.resolve(n,e):it(i,()=>r(n,e));return br(o)}function mC(t){return We(n=>{let e=t(n);return e?Re(e).pipe(J(()=>n)):Z(n)})}var om=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===te);return i}getResolvedTitleForRoute(e){return e.data[Ys]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>u(YC),providedIn:"root"})}return t})(),YC=(()=>{class t extends om{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(H(lC))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vo=new v("",{factory:()=>({})}),Xs=new v(""),QC=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(dp);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await bC(it(e,()=>i.loadComponent())),s=await JC(XC(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await KC(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function KC(t,n,e,i){let r=await bC(it(e,()=>t.loadChildren())),o=await JC(XC(r)),s;o instanceof hc||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(Xs,[],{optional:!0,self:!0}).flat()),{routes:l.map(rm),injector:a,factory:d}}function bR(t){return t&&typeof t=="object"&&"default"in t}function XC(t){return bR(t)?t.default:t}async function JC(t){return t}var id=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>u(yR),providedIn:"root"})}return t})(),yR=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ew=new v("");var _R=()=>{},tw=new v(""),nw=(()=>{class t{currentNavigation=j(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=j(null);events=new x;transitionAbortWithErrorSubject=new x;configLoader=u(QC);environmentInjector=u(be);destroyRef=u(xt);urlSerializer=u(po);rootContexts=u(mo);location=u(_i);inputBindingEnabled=u(td,{optional:!0})!==null;titleStrategy=u(om);options=u(vo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(id);createViewTransition=u(ew,{optional:!0});navigationErrorHandler=u(tw,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Z(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new $c(r)),i=r=>this.events.next(new Wc(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ye(()=>{this.transitions?.next(X(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new $e(null),this.transitions.pipe(he(i=>i!==null),We(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return Z(i).pipe(We(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",yt.SupersededByNewNavigation),Ne;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?X(g({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new ti(a.id,this.urlSerializer.serialize(a.rawUrl),"",Us.IgnoredSameUrlNavigation)),a.resolve(!1),Ne;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return Z(a).pipe(We(f=>(this.events.next(new gr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Ne:Promise.resolve(f))),hR(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ht(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new $s)}),We(f=>Re(i.routesRecognizeHandler.deferredHandle??Z(void 0)).pipe(J(()=>f))),ht(()=>{let f=new zs(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:m,extras:E}=a,M=new gr(f,this.urlSerializer.serialize(h),p,m);this.events.next(M);let R=OC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=X(g({},a),{targetSnapshot:R,urlAfterRedirects:h,extras:X(g({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ve=>(ve.finalUrl=h,ve)),Z(i)}else return this.events.next(new ti(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Us.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Ne}),J(a=>{let l=new Bc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=X(g({},a),{guards:TA(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),BA(a=>this.events.next(a)),We(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Xc(this.urlSerializer,a.guardsResult);let l=new Hc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Ne;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",yt.GuardRejected),Ne;if(a.guards.canActivateChecks.length===0)return Z(a);let c=new Uc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Ne;let d=!1;return Z(a).pipe(pR(this.paramsInheritanceStrategy),ht({next:()=>{d=!0;let f=new zc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",yt.NoDataFromResolver)}}))}),mC(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},c=l(a.targetSnapshot.root);return c.length===0?Z(a):Re(Promise.all(c).then(()=>a))}),mC(()=>this.afterPreactivation()),We(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Re(c).pipe(J(()=>i)):Z(i)}),nt(1),We(a=>{let l=xA(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=X(g({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new lo);let c=i.beforeActivateHandler.deferredHandle;return c?Re(c.then(()=>a)):Z(a)}),ht(a=>{new Qp(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=_R,l)),this.lastSuccessfulNavigation.set(ye(this.currentNavigation)),this.events.next(new Pn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),xe(UC(o.signal).pipe(he(()=>!r&&!i.targetRouterState),ht(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",yt.Aborted)}))),ht({complete:()=>{r=!0}}),xe(this.transitionAbortWithErrorSubject.pipe(ht(a=>{throw a}))),Ho(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",yt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Bo(a=>{if(r=!0,this.destroyed)return i.resolve(!1),Ne;if(BC(a))this.events.next(new tn(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),SA(a)?this.events.next(new co(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new vr(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=it(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof fo){let{message:d,cancellationCode:f}=Xc(this.urlSerializer,c);this.events.next(new tn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new co(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Ne}))}))}cancelNavigationTransition(e,i,r){let o=new tn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ye(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function CR(t){return t!==js}var iw=new v("");var rw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>u(wR),providedIn:"root"})}return t})(),ed=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},wR=(()=>{class t extends ed{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rd=(()=>{class t{urlSerializer=u(po);options=u(vo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(_i);urlHandlingStrategy=u(id);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new zt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof zt?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=OC(null,u(be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:()=>u(DR),providedIn:"root"})}return t})(),DR=(()=>{class t extends rd{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof gr?this.updateStateMemento():e instanceof ti?this.commitTransition(i):e instanceof zs?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof lo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof tn&&!NC(e)?this.restoreHistory(i):e instanceof vr?this.restoreHistory(i,!0):e instanceof Pn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=g(g({},a),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=g(g({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):g({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sm(t,n){t.events.pipe(he(e=>e instanceof Pn||e instanceof tn||e instanceof vr||e instanceof ti),J(e=>e instanceof Pn||e instanceof ti?0:(e instanceof tn?e.code===yt.Redirect||e.code===yt.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),nt(1)).subscribe(()=>{n()})}var bo=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(ip);stateManager=u(rd);options=u(vo,{optional:!0})||{};pendingTasks=u(Yn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(nw);urlSerializer=u(po);location=u(_i);urlHandlingStrategy=u(id);injector=u(be);_events=new x;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(rw);injectorCleanup=u(iw,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Xs,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(td,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new de;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=ye(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof tn&&i.code!==yt.Redirect&&i.code!==yt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Pn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof co){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||CR(r.source)},s);this.scheduleNavigation(a,js,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}DA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),js,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=X(g({},o),{browserUrl:e})),r){let c=g({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,i,s,o).catch(c=>{this.disposed||this.injector.get(Bt)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ye(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(rm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=r?r.snapshot:this.routerState.snapshot.root;f=TC(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return AC(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Ei(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,js,null,i)}navigate(e,i={skipLocationChange:!1}){return ER(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(di(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=g({},_C):i===!1?r=g({},Up):r=g(g({},Up),i),Ei(e))return cC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return cC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});let d=this.pendingTasks.add();return sm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ER(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new I(4008,!1)}var MR=(()=>{class t{router=u(bo);stateManager=u(rd);fragment=j("");queryParams=j({});path=j("");serializer=u(po);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Pn&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new zt(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),od=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Is("href"),{optional:!0});reactiveHref=up(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ye(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ye(this._target)}_target=j(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ye(this._queryParams)}_queryParams=j(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ye(this._fragment)}_fragment=j(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ye(this._queryParamsHandling)}_queryParamsHandling=j(void 0);set state(e){this._state.set(e)}get state(){return ye(this._state)}_state=j(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ye(this._info)}_info=j(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ye(this._relativeTo)}_relativeTo=j(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ye(this._preserveFragment)}_preserveFragment=j(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ye(this._skipLocationChange)}_skipLocationChange=j(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ye(this._replaceUrl)}_replaceUrl=j(!1);isAnchorElement;onChanges=new x;applicationErrorHandler=u(Bt);options=u(vo,{optional:!0});reactiveRouterState=u(MR);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=j(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ei(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=ct(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Ei(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return ye(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(B(bo),B(Wt),vs("tabindex"),B(Se),B(P),B(no))};static \u0275dir=k({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&fe("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&Ie("href",r.reactiveHref(),Vh)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ae],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ae],replaceUrl:[2,"replaceUrl","replaceUrl",ae],routerLink:"routerLink"},features:[Be]})}return t})();var SR=new v("");function am(t,...n){return Qi([{provide:Xs,multi:!0,useValue:t},[],{provide:Wt,useFactory:TR},{provide:pc,multi:!0,useFactory:AR},n.map(e=>e.\u0275providers)])}function TR(){return u(bo).routerState.root}function AR(){let t=u(oe);return n=>{let e=t.get(Jt);if(n!==e.components[0])return;let i=t.get(bo),r=t.get(RR);t.get(kR)===1&&i.initialNavigation(),t.get(NR,null,{optional:!0})?.setUpPreloading(),t.get(SR,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var RR=new v("",{factory:()=>new x}),kR=new v("",{factory:()=>1});var NR=new v("");var yo=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=j(!0);isLoading=this.loading.asReadonly();error=j("");errorMessage=this.error.asReadonly();teams=j([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(H(hr))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var PR=new v("cdk-dir-doc",{providedIn:"root",factory:()=>u(ee)}),LR=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ow(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?LR.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var kt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=j("ltr");change=new V;constructor(){let e=u(PR,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ow(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({})}return t})();var VR=["*"];var jR=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],BR=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],HR=new v("MAT_CARD_CONFIG"),sw=(()=>{class t{appearance;constructor(){let e=u(HR,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&q("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:VR,decls:1,vars:0,template:function(i,r){i&1&&(Me(),Q(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),aw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var lw=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&q("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),cw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:BR,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Me(jR),Q(0),ue(1,"div",0),Q(2,1),pe(),Q(3,2))},encapsulation:2,changeDetection:0})}return t})();function Js(t){return t.buttons===0||t.detail===0}function ea(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var lm;function dw(){if(lm==null){let t=typeof document<"u"?document.head:null;lm=!!(t&&(t.createShadowRoot||t.attachShadow))}return lm}function cm(t){if(dw()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function dm(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function _t(t){return t.composedPath?t.composedPath()[0]:t.target}var um;try{um=typeof Intl<"u"&&Intl.v8BreakIterator}catch{um=!1}var me=(()=>{class t{_platformId=u(cr);isBrowser=this._platformId?$_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||um)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ta;function uw(){if(ta==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ta=!0}))}finally{ta=ta||!1}return ta}function _o(t){return uw()?t:!!t.capture}function xi(t,n=0){return fw(t)?Number(t):arguments.length===2?n:0}function fw(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function St(t){return t instanceof P?t.nativeElement:t}var hw=new v("cdk-input-modality-detector-options"),pw={ignoreKeys:[18,17,224,91,16]},mw=650,fm={passive:!0,capture:!0},gw=(()=>{class t{_platform=u(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new $e(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=_t(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<mw||(this._modality.next(Js(e)?"keyboard":"mouse"),this._mostRecentTarget=_t(e))};_onTouchstart=e=>{if(ea(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=_t(e)};constructor(){let e=u(T),i=u(ee),r=u(hw,{optional:!0});if(this._options=g(g({},pw),r),this.modalityDetected=this._modality.pipe(Ui(1)),this.modalityChanged=this.modalityDetected.pipe(tl()),this._platform.isBrowser){let o=u(Ge).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,fm),o.listen(i,"mousedown",this._onMousedown,fm),o.listen(i,"touchstart",this._onTouchstart,fm)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),na=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(na||{}),vw=new v("cdk-focus-monitor-default-options"),sd=_o({passive:!0,capture:!0}),yr=(()=>{class t{_ngZone=u(T);_platform=u(me);_inputModalityDetector=u(gw);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ee);_stopInputModalityDetector=new x;constructor(){let e=u(vw,{optional:!0});this._detectionMode=e?.detectionMode||na.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=_t(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=St(e);if(!this._platform.isBrowser||r.nodeType!==1)return Z();let o=cm(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new x,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=St(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=St(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===na.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===na.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?mw:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=_t(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,sd),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,sd)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(xe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,sd),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,sd),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hm=(()=>{class t{_elementRef=u(P);_focusMonitor=u(yr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new V;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var ad=new WeakMap,Ct=(()=>{class t{_appRef;_injector=u(oe);_environmentInjector=u(be);load(e){let i=this._appRef=this._appRef||this._injector.get(Jt),r=ad.get(i);r||(r={loaders:new Set,refs:[]},ad.set(i,r),i.onDestroy(()=>{ad.get(i)?.refs.forEach(o=>o.destroy()),ad.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Dc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ld=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})();function ni(t){return Array.isArray(t)?t:[t]}var bw=new Set,_r,cd=(()=>{class t{_platform=u(me);_nonce=u(dr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):zR}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&UR(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function UR(t,n){if(!bw.has(t))try{_r||(_r=document.createElement("style"),n&&_r.setAttribute("nonce",n),_r.setAttribute("type","text/css"),document.head.appendChild(_r)),_r.sheet&&(_r.sheet.insertRule(`@media ${t} {body{ }}`,0),bw.add(t))}catch(e){console.error(e)}}function zR(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ia=(()=>{class t{_mediaMatcher=u(cd);_zone=u(T);_queries=new Map;_destroySubject=new x;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return yw(ni(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=yw(ni(e)).map(s=>this._registerQuery(s).observable),o=jo(r);return o=Mn(o.pipe(nt(1)),o.pipe(Ui(1),sn(0))),o.pipe(J(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new U(s=>{let a=l=>this._zone.run(()=>s.next(l));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(st(i),J(({matches:s})=>({query:e,matches:s})),xe(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yw(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function $R(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var _w=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),WR=(()=>{class t{_mutationObserverFactory=u(_w);_observedElements=new Map;_ngZone=u(T);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=St(e);return new U(r=>{let s=this._observeElement(i).pipe(J(a=>a.filter(l=>!$R(l))),he(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new x,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cw=(()=>{class t{_contentObserver=u(WR);_elementRef=u(P);event=new V;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=xi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(sn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ae],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ww=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({providers:[_w]})}return t})();var ud=(()=>{class t{_platform=u(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return qR(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=GR(tk(e));if(i&&(Dw(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=Dw(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!JR(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return ek(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function GR(t){try{return t.frameElement}catch{return null}}function qR(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function ZR(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function YR(t){return KR(t)&&t.type=="hidden"}function QR(t){return XR(t)&&t.hasAttribute("href")}function KR(t){return t.nodeName.toLowerCase()=="input"}function XR(t){return t.nodeName.toLowerCase()=="a"}function Ew(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Dw(t){if(!Ew(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function JR(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function ek(t){return YR(t)?!1:ZR(t)||QR(t)||t.hasAttribute("contenteditable")||Ew(t)}function tk(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var dd=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Ke(n,{injector:this._injector}):setTimeout(n)}},pm=(()=>{class t{_checker=u(ud);_ngZone=u(T);_document=u(ee);_injector=u(oe);constructor(){u(Ct).load(ld)}create(e,i=!1){return new dd(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nk=200,fd=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:nk;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(ht(e=>this._pressedLetters.push(e)),sn(n),he(()=>this._pressedLetters.length>0),J(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function nn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Co=class{_items;_activeItemIndex=j(-1);_activeItem=j(null);_wrap=!1;_typeaheadSubscription=de.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof pn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Qn(n)&&(this._effectRef=un(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new x;change=new x;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new fd(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||nn(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Qn(this._items)?this._items():this._items instanceof pn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var ra=class extends Co{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var oa=class extends Co{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var gm={},wt=class t{_appId=u(Xr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),gm.hasOwnProperty(n)||(gm[n]=0),`${n}${e?t._infix+"-":""}${gm[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Mw=" ";function vm(t,n,e){let i=Sw(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(Mw)))}function hd(t,n,e){let i=Sw(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(Mw)):t.removeAttribute(n)}function Sw(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Dn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Dn||{}),pd,Cr;function md(){if(Cr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Cr=!1,Cr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Cr=!0;else{let t=Element.prototype.scrollTo;t?Cr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Cr=!1}}return Cr}function wo(){if(typeof document!="object"||!document)return Dn.NORMAL;if(pd==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),pd=Dn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,pd=t.scrollLeft===0?Dn.NEGATED:Dn.INVERTED),t.remove()}return pd}function bm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Do,Tw=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ym(){if(Do)return Do;if(typeof document!="object"||!document)return Do=new Set(Tw),Do;let t=document.createElement("input");return Do=new Set(Tw.filter(n=>(t.setAttribute("type",n),t.type===n))),Do}var Aw={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var ik=new v("MATERIAL_ANIMATIONS"),Rw=null;function rk(){return u(ik,{optional:!0})?.animationsDisabled||u(bs,{optional:!0})==="NoopAnimations"?"di-disabled":(Rw??=u(cd).matchMedia("(prefers-reduced-motion)").matches,Rw?"reduced-motion":"enabled")}function Je(){return rk()!=="enabled"}function ze(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Gt(t){return t!=null&&`${t}`!="false"}var rn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(rn||{}),_m=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=rn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},kw=_o({passive:!0,capture:!0}),Cm=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,kw)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,kw)))}_delegateEventHandler=n=>{let e=_t(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},sa={enterDuration:225,exitDuration:150},ok=800,Nw=_o({passive:!0,capture:!0}),Ow=["mousedown","touchstart"],Fw=["mouseup","mouseleave","touchend","touchcancel"],sk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),aa=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Cm;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=St(i)),o&&o.get(Ct).load(sk)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},sa),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||ak(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,p=f.transitionDuration,m=h==="none"||p==="0s"||p==="0s, 0s"||r.width===0&&r.height===0,E=new _m(this,d,i,m);d.style.transform="scale3d(1, 1, 1)",E.state=rn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=E);let M=null;return!m&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let R=()=>{M&&(M.fallbackTimer=null),clearTimeout(et),this._finishRippleTransition(E)},ve=()=>this._destroyRipple(E),et=setTimeout(ve,c+100);d.addEventListener("transitionend",R),d.addEventListener("transitioncancel",ve),M={onTransitionEnd:R,onTransitionCancel:ve,fallbackTimer:et}}),this._activeRipples.set(E,M),(m||!c)&&this._finishRippleTransition(E),E}fadeOutRipple(n){if(n.state===rn.FADING_OUT||n.state===rn.HIDDEN)return;let e=n.element,i=g(g({},sa),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=rn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=St(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ow.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Fw.forEach(e=>{this._triggerElement.addEventListener(e,this,Nw)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===rn.FADING_IN?this._startFadeOutTransition(n):n.state===rn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=rn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=rn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Js(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ok;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ea(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===rn.VISIBLE||n.config.terminateOnPointerUp&&n.state===rn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Ow.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Fw.forEach(e=>n.removeEventListener(e,this,Nw)),this._pointerUpEventsRegistered=!1))}};function ak(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var gd=new v("mat-ripple-global-options"),la=(()=>{class t{_elementRef=u(P);_animationsDisabled=Je();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(T),i=u(me),r=u(gd,{optional:!0}),o=u(oe);this._globalOptions=r||{},this._rippleRenderer=new aa(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,g(g({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&q("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var lk={capture:!0},ck=["focus","mousedown","mouseenter","touchstart"],wm="mat-ripple-loader-uninitialized",Dm="mat-ripple-loader-class-name",Pw="mat-ripple-loader-centered",vd="mat-ripple-loader-disabled",Lw=(()=>{class t{_document=u(ee);_animationsDisabled=Je();_globalRippleOptions=u(gd,{optional:!0});_platform=u(me);_ngZone=u(T);_injector=u(oe);_eventCleanups;_hosts=new Map;constructor(){let e=u(Ge).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ck.map(i=>e.listen(this._document,i,this._onInteraction,lk)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(wm,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Dm))&&e.setAttribute(Dm,i.className||""),i.centered&&e.setAttribute(Pw,""),i.disabled&&e.setAttribute(vd,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(vd,""):e.removeAttribute(vd)}_onInteraction=e=>{let i=_t(e);if(i instanceof HTMLElement){let r=i.closest(`[${wm}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Dm)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??sa.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??sa.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(vd),rippleConfig:{centered:e.hasAttribute(Pw),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new aa(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(wm)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Eo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var dk=["mat-icon-button",""],uk=["*"],fk=new v("MAT_BUTTON_CONFIG");function Vw(t){return t==null?void 0:to(t)}var bd=(()=>{class t{_elementRef=u(P);_ngZone=u(T);_animationsDisabled=Je();_config=u(fk,{optional:!0});_focusMonitor=u(yr);_cleanupClick;_renderer=u(Se);_rippleLoader=u(Lw);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(Ct).load(Eo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(Ie("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Cn(r.color?"mat-"+r.color:""),q("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ae],disabled:[2,"disabled","disabled",ae],ariaDisabled:[2,"aria-disabled","ariaDisabled",ae],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae],tabIndex:[2,"tabIndex","tabIndex",Vw],_tabindex:[2,"tabindex","_tabindex",Vw]}})}return t})(),Em=(()=>{class t extends bd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[De],attrs:dk,ngContentSelectors:uk,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Me(),qe(0,"span",0),Q(1),qe(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var jw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[Xe]})}return t})();var hk=["matButton",""],Hw=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Uw=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],pk=["mat-fab",""];var Bw=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),zw=(()=>{class t extends bd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=mk(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?Bw.get(this._appearance):null,o=Bw.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[De],attrs:hk,ngContentSelectors:Uw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Me(Hw),qe(0,"span",0),Q(1),ue(2,"span",1),Q(3,1),pe(),Q(4,2),qe(5,"span",2)(6,"span",3)),i&2&&q("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function mk(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var gk=new v("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>xm}),xm={color:"accent"},$w=(()=>{class t extends bd{_options=u(gk,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||xm,this.color=this._options.color||xm.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&q("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",ae]},exportAs:["matButton","matAnchor"],features:[De],attrs:pk,ngContentSelectors:Uw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Me(Hw),qe(0,"span",0),Q(1),ue(2,"span",1),Q(3,1),pe(),Q(4,2),qe(5,"span",2)(6,"span",3)),i&2&&q("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var vk=t=>[t,"map"],bk=t=>[t,"convoy"],yk=t=>[t,"shop"],yd=class t{team=ut.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:14,consts:[["align","end"],["matButton",""],[1,"buttonContent",3,"routerLink"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[1,"buttonContent"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(C(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),w(3),_()(),C(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),$(7,"img",3),w(8," Map "),_()(),C(9,"button",4)(10,"span",5)(11,"div",6),w(12,"?"),_(),w(13," Convoy "),_()(),C(14,"button",4)(15,"span",5),$(16,"img",7),w(17," Shop "),_()()()()),e&2&&(y(3),ke(" ",i.team().teamName," "),y(3),N("routerLink",Ht(8,vk,i.GetTeamNameWithoutSpaces())),y(3),N("disabled",_c(!i.team().showConvoyLink))("routerLink",Ht(10,bk,i.GetTeamNameWithoutSpaces())),y(5),N("disabled",_c(!i.team().showShopLink))("routerLink",Ht(12,yk,i.GetTeamNameWithoutSpaces())))},dependencies:[sw,cw,aw,lw,zw,od],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var Ww="(max-width: 900px)",Ln=class t{breakpointObserver=u(ia);isSmallWidth=j(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([Ww]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[Ww])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var _d=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"div",1),qe(2,"div",2),ue(3,"div",3),w(4,"Loading..."),pe()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var Vn=class t{DARK_MODE_CLASS="dark-mode";document=u(ee);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=j(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=ct(()=>this.themeMode()==="dark");constructor(){un(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var Im=t=>({width:t});function _k(t,n){t&1&&$(0,"loading-icon")}function Ck(t,n){if(t&1&&(C(0,"div",7)(1,"p",17),w(2),_()()),t&2){let e=A();y(2),ke(" ",e.teamListService.errorMessage()," ")}}function wk(t,n){if(t&1&&$(0,"team-listing",14),t&2){let e=n.$implicit;N("team",e)}}function Dk(t,n){t&1&&(C(0,"div",7)(1,"p",17),w(2," There are no teams available. "),_()())}function Ek(t,n){if(t&1&&vt(0,wk,1,1,"team-listing",14,yn,!1,Dk,3,0,"div",7),t&2){let e=A();bt(e.teamListService.teamsList())}}var Cd=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(Ln),this.themeService=u(Vn),this.teamListService=u(yo),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(B(Ln),B(Vn),B(yo))};static \u0275cmp=D({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&($(0,"div",0)(1,"div",1),C(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),w(6),_(),C(7,"button",5),fe("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),w(8,"Toggle Theme"),_()(),C(9,"div",6),O(10,_k,1,0,"loading-icon")(11,Ck,3,1,"div",7)(12,Ek,3,1),_()(),C(13,"div",3)(14,"div",8)(15,"h1",9),w(16,"Information"),_(),C(17,"p"),w(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),_(),C(19,"h2",9),w(20,"Resources"),_(),C(21,"ul")(22,"li")(23,"a",10),w(24,"Reddit Emblem Maps Documentation"),_()(),C(25,"li")(26,"a",11),w(27,"API Github Repository"),_()(),C(28,"li")(29,"a",12),w(30,"Webapp Github Repository"),_()()(),C(31,"h2",9),w(32,"Example"),_(),C(33,"p"),w(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),_(),C(35,"ul")(36,"li")(37,"a",13),w(38,"Team Example Google Spreadsheet"),_()()(),$(39,"team-listing",14),_(),C(40,"div",8)(41,"h2",9),w(42,"Credits"),_(),C(43,"ul")(44,"li")(45,"a",15),w(46,'Website background texture "Az Subtle" by Anli'),_()(),C(47,"li")(48,"a",16),w(49,`"Mac's Minecraft" pixel font`),_()()()()()()),e&2&&(y(3),N("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),y(),N("ngClass",i.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),y(2),ke(" This will be the logo! Screen width is <= 900px: ",i.breakpointService.isScreenSmallWidth()," "),y(3),N("ngStyle",Ht(9,Im,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),y(),F(i.teamListService.isLoading()?10:i.teamListService.errorMessage().length>0?11:12),y(3),N("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),y(),N("ngStyle",Ht(11,Im,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),y(25),N("team",i.teamExample),y(),N("ngStyle",Ht(13,Im,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[yd,Cp,Ts,_d],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var xk=20,xo=(()=>{class t{_ngZone=u(T);_platform=u(me);_renderer=u(Ge).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=xk){return this._platform.isBrowser?new U(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(el(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Z()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=St(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ii=(()=>{class t{elementRef=u(P);scrollDispatcher=u(xo);ngZone=u(T);dir=u(kt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=u(Se);_cleanupScroll;_elementScrolled=new x;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&wo()!=Dn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),wo()==Dn.INVERTED?e.left=e.right:wo()==Dn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;md()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&wo()==Dn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&wo()==Dn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),Ik=20,En=(()=>{class t{_platform=u(me);_listeners;_viewportSize=null;_change=new x;_document=u(ee);constructor(){let e=u(T),i=u(Ge).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=Ik){return e>0?this._change.pipe(el(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ca=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({})}return t})(),Mm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[Xe,ca,Xe,ca]})}return t})();var xd=["*"],Mk=["content"],Sk=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Tk=["mat-drawer","mat-drawer-content","*"];function Ak(t,n){if(t&1){let e=Kn();C(0,"div",1),fe("click",function(){Vt(e);let r=A();return jt(r._onBackdropClicked())}),_()}if(t&2){let e=A();q("mat-drawer-shown",e._isShowingBackdrop())}}function Rk(t,n){t&1&&(C(0,"mat-drawer-content"),Q(1,2),_())}var kk=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Nk=["mat-sidenav","mat-sidenav-content","*"];function Ok(t,n){if(t&1){let e=Kn();C(0,"div",1),fe("click",function(){Vt(e);let r=A();return jt(r._onBackdropClicked())}),_()}if(t&2){let e=A();q("mat-drawer-shown",e._isShowingBackdrop())}}function Fk(t,n){t&1&&(C(0,"mat-sidenav-content"),Q(1,2),_())}var Pk=`.mat-drawer-container {
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
`;var Lk=new v("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Am=new v("MAT_DRAWER_CONTAINER"),wd=(()=>{class t extends Ii{_platform=u(me);_changeDetectorRef=u(Ue);_container=u(Tm);constructor(){let e=u(P),i=u(xo),r=u(T);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Xn("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),q("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Te([{provide:Ii,useExisting:t}]),De],ngContentSelectors:xd,decls:1,vars:0,template:function(i,r){i&1&&(Me(),Q(0))},encapsulation:2,changeDetection:0})}return t})(),Sm=(()=>{class t{_elementRef=u(P);_focusTrapFactory=u(pm);_focusMonitor=u(yr);_platform=u(me);_ngZone=u(T);_renderer=u(Se);_interactivityChecker=u(ud);_doc=u(ee);_container=u(Am,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Gt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Gt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Gt(e))}_opened=j(!1);_openedVia=null;_animationStarted=new x;_animationEnd=new x;openedChange=new V(!0);_openedStream=this.openedChange.pipe(he(e=>e),J(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),Or(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),J(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),Or(void 0));_destroyed=new x;onPositionChanged=new V;_content;_modeChanged=new x;_injector=u(oe);_changeDetectorRef=u(Ue);constructor(){this.openedChange.pipe(xe(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!nn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ke(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(nt(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ze(Mk,5),i&2){let o;W(o=G())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(Ie("align",null)("tabIndex",r.mode!=="side"?"-1":null),Xn("visibility",!r._container&&!r.opened?"hidden":null),q("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:xd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Me(),C(0,"div",1,0),Q(2),_())},dependencies:[Ii],encapsulation:2,changeDetection:0})}return t})(),Tm=(()=>{class t{_dir=u(kt,{optional:!0});_element=u(P);_ngZone=u(T);_changeDetectorRef=u(Ue);_animationDisabled=Je();_transitionsEnabled=!1;_allDrawers;_drawers=new pn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Gt(e)}_autosize=u(Lk);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Gt(e)}_backdropOverride=null;backdropClick=new V;_start=null;_end=null;_left=null;_right=null;_destroyed=new x;_doCheckSubject=new x;_contentMargins={left:null,right:null};_contentMarginChanges=new x;get scrollable(){return this._userContent||this._content}_injector=u(oe);constructor(){let e=u(me),i=u(En);this._dir?.change.pipe(xe(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(xe(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(st(this._allDrawers),xe(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(st(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(sn(10),xe(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(xe(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(xe(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(xe(this._drawers.changes)).subscribe(()=>{Ke({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(xe(Ot(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Rt(o,wd,5)(o,Sm,5),i&2){let s;W(s=G())&&(r._content=s.first),W(s=G())&&(r._allDrawers=s)}},viewQuery:function(i,r){if(i&1&&Ze(wd,5),i&2){let o;W(o=G())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&q("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Te([{provide:Am,useExisting:t}])],ngContentSelectors:Tk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Me(Sk),O(0,Ak,1,2,"div",0),Q(1),Q(2,1),O(3,Rk,2,0,"mat-drawer-content")),i&2&&(F(r.hasBackdrop?0:-1),y(3),F(r._content?-1:3))},dependencies:[wd],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Dd=(()=>{class t extends wd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Te([{provide:Ii,useExisting:t}]),De],ngContentSelectors:xd,decls:1,vars:0,template:function(i,r){i&1&&(Me(),Q(0))},encapsulation:2,changeDetection:0})}return t})(),Rm=(()=>{class t extends Sm{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Gt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=xi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=xi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(Ie("tabIndex",r.mode!=="side"?"-1":null)("align",null),Xn("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),q("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Te([{provide:Sm,useExisting:t}]),De],ngContentSelectors:xd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Me(),C(0,"div",1,0),Q(2),_())},dependencies:[Ii],encapsulation:2,changeDetection:0})}return t})(),Zw=(()=>{class t extends Tm{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Rt(o,Dd,5)(o,Rm,5),i&2){let s;W(s=G())&&(r._content=s.first),W(s=G())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&q("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Te([{provide:Am,useExisting:t},{provide:Tm,useExisting:t}]),De],ngContentSelectors:Nk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Me(kk),O(0,Ok,1,2,"div",0),Q(1),Q(2,1),O(3,Fk,2,0,"mat-sidenav-content")),i&2&&(F(r.hasBackdrop?0:-1),y(3),F(r._content?-1:3))},dependencies:[Dd],styles:[Pk],encapsulation:2,changeDetection:0})}return t})();var da=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},km=class extends da{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ii=class extends da{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Nm=class extends da{element;constructor(n){super(),this.element=n instanceof P?n.nativeElement:n}},Id=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof km)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ii)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Nm)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Md=class extends Id{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(On,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||oe.NULL,o=r.get(be,i.injector);e=Dc(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Yw=(()=>{class t extends ii{constructor(){let e=u(gt),i=u(lt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[De]})}return t})(),Om=(()=>{class t extends Id{_moduleRef=u(On,{optional:!0});_document=u(ee);_viewContainerRef=u(lt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new V;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[De]})}return t})(),Qw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({})}return t})();var Fm=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new U(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(he(e=>e.some(i=>i.target===n)),rl({bufferSize:1,refCount:!0}),xe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Sd=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(T);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Fm(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hm=["*"];function Vk(t,n){t&1&&Q(0)}var jk=["tabListContainer"],Bk=["tabList"],Hk=["tabListInner"],Uk=["nextPaginator"],zk=["previousPaginator"],$k=["content"];function Wk(t,n){}var Gk=["tabBodyWrapper"],qk=["tabHeader"];function Zk(t,n){}function Yk(t,n){if(t&1&&It(0,Zk,0,0,"ng-template",12),t&2){let e=A().$implicit;N("cdkPortalOutlet",e.templateLabel)}}function Qk(t,n){if(t&1&&w(0),t&2){let e=A().$implicit;He(e.textLabel)}}function Kk(t,n){if(t&1){let e=Kn();C(0,"div",7,2),fe("click",function(){let r=Vt(e),o=r.$implicit,s=r.$index,a=A(),l=_n(1);return jt(a._handleClick(o,l,s))})("cdkFocusChange",function(r){let o=Vt(e).$index,s=A();return jt(s._tabFocusChanged(r,o))}),$(2,"span",8)(3,"div",9),C(4,"span",10)(5,"span",11),O(6,Yk,1,1,null,12)(7,Qk,1,1),_()()()}if(t&2){let e=n.$implicit,i=n.$index,r=_n(1),o=A();Cn(e.labelClass),q("mdc-tab--active",o.selectedIndex===i),N("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Ie("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),y(3),N("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),y(3),F(e.templateLabel?6:7)}}function Xk(t,n){t&1&&Q(0)}function Jk(t,n){if(t&1){let e=Kn();C(0,"mat-tab-body",13),fe("_onCentered",function(){Vt(e);let r=A();return jt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Vt(e);let o=A();return jt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Vt(e);let o=A();return jt(o._bodyCentered(r))}),_()}if(t&2){let e=n.$implicit,i=n.$index,r=A();Cn(e.bodyClass),N("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),Ie("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var eN=new v("MatTabContent"),tN=(()=>{class t{template=u(gt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","matTabContent",""]],features:[Te([{provide:eN,useExisting:t}])]})}return t})(),nN=new v("MatTabLabel"),eD=new v("MAT_TAB"),Um=(()=>{class t extends Yw{_closestTab=u(eD,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Te([{provide:nN,useExisting:t}]),De]})}return t})(),tD=new v("MAT_TAB_GROUP"),zm=(()=>{class t{_viewContainerRef=u(lt);_closestTabGroup=u(tD,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new x;position=null;origin=null;isActive=!1;constructor(){u(Ct).load(Eo)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ii(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Rt(o,Um,5)(o,tN,7,gt),i&2){let s;W(s=G())&&(r.templateLabel=s.first),W(s=G())&&(r._explicitContent=s.first)}},viewQuery:function(i,r){if(i&1&&Ze(gt,7),i&2){let o;W(o=G())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&Ie("id",null)},inputs:{disabled:[2,"disabled","disabled",ae],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Te([{provide:eD,useExisting:t}]),Be],ngContentSelectors:Hm,decls:1,vars:0,template:function(i,r){i&1&&(Me(),eo(0,Vk,1,0,"ng-template"))},encapsulation:2})}return t})(),Pm="mdc-tab-indicator--active",Kw="mdc-tab-indicator--no-transition",Lm=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},iN=(()=>{class t{_elementRef=u(P);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Pm);return}let r=i.getBoundingClientRect(),o=e.width/r.width,s=e.left-r.left;i.classList.add(Kw),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(Kw),i.classList.add(Pm),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Pm)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ae]}})}return t})();var nD=(()=>{class t extends iN{elementRef=u(P);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(Ie("aria-disabled",!!r.disabled),q("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",ae]},features:[De]})}return t})(),Xw={passive:!0},rN=650,oN=100,sN=(()=>{class t{_elementRef=u(P);_changeDetectorRef=u(Ue);_viewportRuler=u(En);_dir=u(kt,{optional:!0});_ngZone=u(T);_platform=u(me);_sharedResizeObserver=u(Sd);_injector=u(oe);_renderer=u(Se);_animationsDisabled=Je();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new x;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new x;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new V;indexFocused=new V;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Xw),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Xw))}ngAfterContentInit(){let e=this._dir?this._dir.change:Z("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(sn(32),xe(this._destroyed)),r=this._viewportRuler.change(150).pipe(xe(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new oa(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ke(o,{injector:this._injector}),Ot(e,r,i,this._items.changes,this._itemsResized()).pipe(xe(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?Ne:this._items.changes.pipe(st(this._items),We(e=>new U(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Ui(1),he(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!nn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=i.elementRef.nativeElement,a,l;this._getLayoutDirection()=="ltr"?(a=o,l=a+s):(l=this._tabListInner.nativeElement.offsetWidth-o,a=l-s);let c=this.scrollDistance,d=this.scrollDistance+r;a<c?this.scrollDistance-=c-a:l>d&&(this.scrollDistance+=Math.min(l-d,a-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Hi(rN,oN).pipe(xe(Ot(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ae],selectedIndex:[2,"selectedIndex","selectedIndex",to]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),aN=(()=>{class t extends sN{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Lm(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Rt(o,nD,4),i&2){let s;W(s=G())&&(r._items=s)}},viewQuery:function(i,r){if(i&1&&Ze(jk,7)(Bk,7)(Hk,7)(Uk,5)(zk,5),i&2){let o;W(o=G())&&(r._tabListContainer=o.first),W(o=G())&&(r._tabList=o.first),W(o=G())&&(r._tabListInner=o.first),W(o=G())&&(r._nextPaginator=o.first),W(o=G())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&q("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ae]},features:[De],ngContentSelectors:Hm,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Me(),C(0,"div",5,0),fe("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(s){return r._handlePaginatorPress("before",s)})("touchend",function(){return r._stopInterval()}),$(2,"div",6),_(),C(3,"div",7,1),fe("keydown",function(s){return r._handleKeydown(s)}),C(5,"div",8,2),fe("cdkObserveContent",function(){return r._onContentChanges()}),C(7,"div",9,3),Q(9),_()()(),C(10,"div",10,4),fe("mousedown",function(s){return r._handlePaginatorPress("after",s)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),$(12,"div",6),_()),i&2&&(q("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),N("matRippleDisabled",r._disableScrollBefore||r.disableRipple),y(3),q("_mat-animation-noopable",r._animationsDisabled),y(2),Ie("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),y(5),q("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),N("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[la,Cw],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),lN=new v("MAT_TABS_CONFIG"),Jw=(()=>{class t extends Om{_host=u(Vm);_ngZone=u(T);_centeringSub=de.EMPTY;_leavingSub=de.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(st(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["","matTabBodyHost",""]],features:[De]})}return t})(),Vm=(()=>{class t{_elementRef=u(P);_dir=u(kt,{optional:!0});_ngZone=u(T);_injector=u(oe);_renderer=u(Se);_diAnimationsDisabled=Je();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=de.EMPTY;_position;_previousPosition;_onCentering=new V;_beforeCentering=new V;_afterLeavingCenter=new V;_onCentered=new V(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Ue);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ke(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ke(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ze(Jw,5)($k,5),i&2){let o;W(o=G())&&(r._portalHost=o.first),W(o=G())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&Ie("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(C(0,"div",1,0),It(2,Wk,0,0,"ng-template",2),_()),i&2&&q("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[Jw,Ii],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),iD=(()=>{class t{_elementRef=u(P);_changeDetectorRef=u(Ue);_ngZone=u(T);_tabsSubscription=de.EMPTY;_tabLabelSubscription=de.EMPTY;_tabBodySubscription=de.EMPTY;_diAnimationsDisabled=Je();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new pn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new V;focusChange=new V;animationDone=new V;selectedTabChange=new V(!0);_groupId;_isServer=!u(me).isBrowser;constructor(){let e=u(lN,{optional:!0});this._groupId=u(wt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(st(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new jm;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ot(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Rt(o,zm,5),i&2){let s;W(s=G())&&(r._allTabs=s)}},viewQuery:function(i,r){if(i&1&&Ze(Gk,5)(qk,5)(Vm,5),i&2){let o;W(o=G())&&(r._tabBodyWrapper=o.first),W(o=G())&&(r._tabHeader=o.first),W(o=G())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(Ie("mat-align-tabs",r.alignTabs),Cn("mat-"+(r.color||"primary")),Xn("--mat-tab-animation-duration",r.animationDuration),q("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ae],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ae],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ae],selectedIndex:[2,"selectedIndex","selectedIndex",to],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",to],disablePagination:[2,"disablePagination","disablePagination",ae],disableRipple:[2,"disableRipple","disableRipple",ae],preserveContent:[2,"preserveContent","preserveContent",ae],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Te([{provide:tD,useExisting:t}])],ngContentSelectors:Hm,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Me(),C(0,"mat-tab-header",3,0),fe("indexFocused",function(s){return r._focusChanged(s)})("selectFocusedIndex",function(s){return r.selectedIndex=s}),vt(2,Kk,8,17,"div",4,gc),_(),O(4,Xk,1,0),C(5,"div",5,1),vt(7,Jk,1,10,"mat-tab-body",6,gc),_()),i&2&&(N("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),mc("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),y(2),bt(r._tabs),y(2),F(r._isServer?4:-1),y(),q("_mat-animation-noopable",r._animationsDisabled()),y(2),bt(r._tabs))},dependencies:[aN,nD,hm,la,Om,Vm],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),jm=class{index;tab};var Td=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-dice-roller-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),w(1,"map-dice-roller-sidenav works!"),pe())},encapsulation:2})};var Ad=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-links-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),w(1,"map-links-sidenav works!"),pe())},encapsulation:2})};var Pe=class t{constructor(n){this.http=n;this.http=u(hr)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=j(!0);isLoading=this.loading.asReadonly();error=j("");errorMessage=this.error.asReadonly();map=j({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(H(hr))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var cD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(B(Se),B(P))};static \u0275dir=k({type:t})}return t})(),cN=(()=>{class t extends cD{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275dir=k({type:t,features:[De]})}return t})(),Wd=new v("");var dN={provide:Wd,useExisting:qt(()=>Gd),multi:!0};function uN(){let t=en()?en().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var fN=new v(""),Gd=(()=>{class t extends cD{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!uN())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(B(Se),B(P),B(fN,8))};static \u0275dir=k({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&fe("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Te([dN]),De]})}return t})();function Wm(t){return t==null||Gm(t)===0}function Gm(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var qm=new v(""),Zm=new v(""),hN=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,kd=class{static min(n){return pN(n)}static max(n){return mN(n)}static required(n){return gN(n)}static requiredTrue(n){return vN(n)}static email(n){return bN(n)}static minLength(n){return yN(n)}static maxLength(n){return _N(n)}static pattern(n){return CN(n)}static nullValidator(n){return dD()}static compose(n){return gD(n)}static composeAsync(n){return vD(n)}};function pN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function mN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function gN(t){return Wm(t.value)?{required:!0}:null}function vN(t){return t.value===!0?null:{required:!0}}function bN(t){return Wm(t.value)||hN.test(t.value)?null:{email:!0}}function yN(t){return n=>{let e=n.value?.length??Gm(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function _N(t){return n=>{let e=n.value?.length??Gm(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function CN(t){if(!t)return dD;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Wm(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function dD(t){return null}function uD(t){return t!=null}function fD(t){return bi(t)?Re(t):t}function hD(t){let n={};return t.forEach(e=>{n=e!=null?g(g({},n),e):n}),Object.keys(n).length===0?null:n}function pD(t,n){return n.map(e=>e(t))}function wN(t){return!t.validate}function mD(t){return t.map(n=>wN(n)?n:e=>n.validate(e))}function gD(t){if(!t)return null;let n=t.filter(uD);return n.length==0?null:function(e){return hD(pD(e,n))}}function Ym(t){return t!=null?gD(mD(t)):null}function vD(t){if(!t)return null;let n=t.filter(uD);return n.length==0?null:function(e){let i=pD(e,n).map(fD);return Vu(i).pipe(J(hD))}}function Qm(t){return t!=null?vD(mD(t)):null}function rD(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function bD(t){return t._rawValidators}function yD(t){return t._rawAsyncValidators}function $m(t){return t?Array.isArray(t)?t:[t]:[]}function Nd(t,n){return Array.isArray(t)?t.includes(n):t===n}function oD(t,n){let e=$m(n);return $m(t).forEach(r=>{Nd(e,r)||e.push(r)}),e}function sD(t,n){return $m(n).filter(e=>!Nd(t,e))}var Od=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Ym(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Qm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},wr=class extends Od{name;get formDirective(){return null}get path(){return null}},Dr=class extends Od{_parent=null;name=null;valueAccessor=null},Fd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var _D=(()=>{class t extends Fd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Dr,2))};static \u0275dir=k({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[De]})}return t})(),CD=(()=>{class t extends Fd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(wr,10))};static \u0275dir=k({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[De]})}return t})();var ha="VALID",Rd="INVALID",Io="PENDING",pa="DISABLED",Mi=class{},Pd=class extends Mi{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ga=class extends Mi{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},va=class extends Mi{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Mo=class extends Mi{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ld=class extends Mi{source;constructor(n){super(),this.source=n}},Vd=class extends Mi{source;constructor(n){super(),this.source=n}};function wD(t){return(qd(t)?t.validators:t)||null}function DN(t){return Array.isArray(t)?Ym(t):t||null}function DD(t,n){return(qd(n)?n.asyncValidators:t)||null}function EN(t){return Array.isArray(t)?Qm(t):t||null}function qd(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function xN(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new I(1e3,"");if(!i[e])throw new I(1001,"")}function IN(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new I(-1002,"")})}var jd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ye(this.statusReactive)}set status(n){ye(()=>this.statusReactive.set(n))}_status=ct(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===ha}get invalid(){return this.status===Rd}get pending(){return this.status===Io}get disabled(){return this.status===pa}get enabled(){return this.status!==pa}errors;get pristine(){return ye(this.pristineReactive)}set pristine(n){ye(()=>this.pristineReactive.set(n))}_pristine=ct(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return ye(this.touchedReactive)}set touched(n){ye(()=>this.touchedReactive.set(n))}_touched=ct(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(oD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(oD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(sD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(sD(n,this._rawAsyncValidators))}hasValidator(n){return Nd(this._rawValidators,n)}hasAsyncValidator(n){return Nd(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(X(g({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new va(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new va(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(X(g({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ga(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ga(!0,i))}markAsPending(n={}){this.status=Io;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Mo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(X(g({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=pa,this.errors=null,this._forEachChild(r=>{r.disable(X(g({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Pd(this.value,i)),this._events.next(new Mo(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ha,this._forEachChild(i=>{i.enable(X(g({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(X(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ha||this.status===Io)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Pd(this.value,e)),this._events.next(new Mo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(X(g({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?pa:ha}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Io,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=fD(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Mo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?pa:this.errors?Rd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Io)?Io:this._anyControlsHaveStatus(Rd)?Rd:ha}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new ga(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new va(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){qd(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=DN(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=EN(this._rawAsyncValidators)}},Bd=class extends jd{constructor(n,e,i){super(wD(e),DD(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){IN(this,!0,n),Object.keys(n).forEach(i=>{xN(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,X(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Vd(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ba=new v("",{factory:()=>Zd}),Zd="always";function Hd(t,n,e=Zd){Km(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),SN(t,n),AN(t,n),TN(t,n),MN(t,n)}function Ud(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),$d(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function zd(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function MN(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Km(t,n){let e=bD(t);n.validator!==null?t.setValidators(rD(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=yD(t);n.asyncValidator!==null?t.setAsyncValidators(rD(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();zd(n._rawValidators,r),zd(n._rawAsyncValidators,r)}function $d(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=bD(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=yD(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return zd(n._rawValidators,i),zd(n._rawAsyncValidators,i),e}function SN(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ED(t,n)})}function TN(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ED(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function ED(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function AN(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function xD(t,n){t==null,Km(t,n)}function RN(t,n){return $d(t,n)}function kN(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function NN(t){return Object.getPrototypeOf(t.constructor)===cN}function ID(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ON(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Gd?e=o:NN(o)?i=o:r=o}),r||i||e||null}function FN(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var PN={provide:wr,useExisting:qt(()=>ya)},ma=Promise.resolve(),ya=(()=>{class t extends wr{callSetDisabledState;get submitted(){return ye(this.submittedReactive)}_submitted=ct(()=>this.submittedReactive());submittedReactive=j(!1);_directives=new Set;form;ngSubmit=new V;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Bd({},Ym(e),Qm(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ma.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Hd(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ma.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ma.then(()=>{let i=this._findContainer(e.path),r=new Bd({});xD(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ma.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){ma.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ID(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ld(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(B(qm,10),B(Zm,10),B(ba,8))};static \u0275dir=k({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&fe("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([PN]),De]})}return t})();function aD(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function lD(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Xm=class extends jd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(wD(e),DD(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),qd(e)&&(e.nonNullable||e.initialValueIsDefault)&&(lD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Vd(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){aD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){aD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){lD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var LN=t=>t instanceof Xm;var MD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var VN=(()=>{class t extends wr{callSetDisabledState;get submitted(){return ye(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ct(()=>this._submittedReactive());_submittedReactive=j(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&($d(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Hd(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Ud(e.control||null,e,!1),FN(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ID(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ld(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Ud(i||null,e),LN(r)&&(Hd(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);xD(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&RN(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Km(this.form,this),this._oldForm&&$d(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(B(qm,10),B(Zm,10),B(ba,8))};static \u0275dir=k({type:t,features:[De,Be]})}return t})();var SD=new v(""),jN={provide:Dr,useExisting:qt(()=>Jm)},Jm=(()=>{class t extends Dr{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new V;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=ON(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Ud(i,this,!1),Hd(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}kN(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ud(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(B(qm,10),B(Zm,10),B(Wd,10),B(SD,8),B(ba,8))};static \u0275dir=k({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Te([jN]),De,Be]})}return t})();var BN={provide:wr,useExisting:qt(()=>eg)},eg=(()=>{class t extends VN{form=null;ngSubmit=new V;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275dir=k({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&fe("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Te([BN]),De]})}return t})();var TD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({})}return t})();var AD=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ba,useValue:e.callSetDisabledState??Zd}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[TD]})}return t})(),RD=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:SD,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ba,useValue:e.callSetDisabledState??Zd}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[TD]})}return t})();var UN=["notch"],zN=["matFormFieldNotchedOutline",""],$N=["*"],kD=["iconPrefixContainer"],ND=["textPrefixContainer"],OD=["iconSuffixContainer"],FD=["textSuffixContainer"],WN=["textField"],GN=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],qN=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ZN(t,n){t&1&&$(0,"span",21)}function YN(t,n){if(t&1&&(C(0,"label",20),Q(1,1),O(2,ZN,1,0,"span",21),_()),t&2){let e=A(2);N("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Ie("for",e._control.disableAutomaticLabeling?null:e._control.id),y(2),F(!e.hideRequiredMarker&&e._control.required?2:-1)}}function QN(t,n){if(t&1&&O(0,YN,3,5,"label",20),t&2){let e=A();F(e._hasFloatingLabel()?0:-1)}}function KN(t,n){t&1&&$(0,"div",7)}function XN(t,n){}function JN(t,n){if(t&1&&It(0,XN,0,0,"ng-template",13),t&2){A(2);let e=_n(1);N("ngTemplateOutlet",e)}}function eO(t,n){if(t&1&&(C(0,"div",9),O(1,JN,1,1,null,13),_()),t&2){let e=A();N("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),y(),F(e._forceDisplayInfixLabel()?-1:1)}}function tO(t,n){t&1&&(C(0,"div",10,2),Q(2,2),_())}function nO(t,n){t&1&&(C(0,"div",11,3),Q(2,3),_())}function iO(t,n){}function rO(t,n){if(t&1&&It(0,iO,0,0,"ng-template",13),t&2){A();let e=_n(1);N("ngTemplateOutlet",e)}}function oO(t,n){t&1&&(C(0,"div",14,4),Q(2,4),_())}function sO(t,n){t&1&&(C(0,"div",15,5),Q(2,5),_())}function aO(t,n){t&1&&$(0,"div",16)}function lO(t,n){t&1&&(C(0,"div",18),Q(1,6),_())}function cO(t,n){if(t&1&&(C(0,"mat-hint",22),w(1),_()),t&2){let e=A(2);N("id",e._hintLabelId),y(),He(e.hintLabel)}}function dO(t,n){if(t&1&&(C(0,"div",19),O(1,cO,2,2,"mat-hint",22),Q(2,7),$(3,"div",23),Q(4,8),_()),t&2){let e=A();y(),F(e.hintLabel?1:-1)}}var tg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-label"]]})}return t})(),uO=new v("MatError");var ng=(()=>{class t{align="start";id=u(wt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Mt("id",r.id),Ie("align",null),q("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),fO=new v("MatPrefix");var hO=new v("MatSuffix");var UD=new v("FloatingLabelParent"),PD=(()=>{class t{_elementRef=u(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Sd);_ngZone=u(T);_parent=u(UD);_resizeSubscription=new de;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return pO(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&q("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function pO(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var LD="mdc-line-ripple--active",Yd="mdc-line-ripple--deactivating",VD=(()=>{class t{_elementRef=u(P);_cleanupTransitionEnd;constructor(){let e=u(T),i=u(Se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Yd),e.add(LD)}deactivate(){this._elementRef.nativeElement.classList.add(Yd)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Yd);e.propertyName==="opacity"&&r&&i.remove(LD,Yd)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),jD=(()=>{class t{_elementRef=u(P);_ngZone=u(T);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ze(UN,5),i&2){let o;W(o=G())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&q("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:zN,ngContentSelectors:$N,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Me(),qe(0,"div",1),ue(1,"div",2,0),Q(3),pe(),qe(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),ig=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t})}return t})();var _a=new v("MatFormField"),mO=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),BD="fill",gO="auto",HD="fixed",vO="translateY(-50%)",Qd=(()=>{class t{_elementRef=u(P);_changeDetectorRef=u(Ue);_platform=u(me);_idGenerator=u(wt);_ngZone=u(T);_defaults=u(mO,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ms("iconPrefixContainer");_textPrefixContainerSignal=Ms("textPrefixContainer");_iconSuffixContainerSignal=Ms("iconSuffixContainer");_textSuffixContainerSignal=Ms("textSuffixContainer");_prefixSuffixContainers=ct(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=O_(tg);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Gt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||gO}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||BD;this._appearanceSignal.set(i)}_appearanceSignal=j(BD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||HD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||HD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Je();constructor(){let e=this._defaults,i=u(kt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),un(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ct(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(st([void 0,void 0]),J(()=>[i.errorState,i.userAriaDescribedBy]),il(),he(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(xe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ot(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){L_({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ct(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,p=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,m=`var(--mat-mdc-form-field-label-transform, ${vO} translateX(${p}))`,E=s+a+l+c;return[m,E]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(vc(o,r._labelChild,tg,5),Rt(o,ig,5)(o,fO,5)(o,hO,5)(o,uO,5)(o,ng,5)),i&2){yc();let s;W(s=G())&&(r._formFieldControl=s.first),W(s=G())&&(r._prefixChildren=s),W(s=G())&&(r._suffixChildren=s),W(s=G())&&(r._errorChildren=s),W(s=G())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(bc(r._iconPrefixContainerSignal,kD,5)(r._textPrefixContainerSignal,ND,5)(r._iconSuffixContainerSignal,OD,5)(r._textSuffixContainerSignal,FD,5),Ze(WN,5)(kD,5)(ND,5)(OD,5)(FD,5)(PD,5)(jD,5)(VD,5)),i&2){yc(4);let o;W(o=G())&&(r._textField=o.first),W(o=G())&&(r._iconPrefixContainer=o.first),W(o=G())&&(r._textPrefixContainer=o.first),W(o=G())&&(r._iconSuffixContainer=o.first),W(o=G())&&(r._textSuffixContainer=o.first),W(o=G())&&(r._floatingLabel=o.first),W(o=G())&&(r._notchedOutline=o.first),W(o=G())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&q("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Te([{provide:_a,useExisting:t},{provide:UD,useExisting:t}])],ngContentSelectors:qN,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Me(GN),It(0,QN,1,1,"ng-template",null,0,cp),C(2,"div",6,1),fe("click",function(s){return r._control.onContainerClick(s)}),O(4,KN,1,0,"div",7),C(5,"div",8),O(6,eO,2,2,"div",9),O(7,tO,3,0,"div",10),O(8,nO,3,0,"div",11),C(9,"div",12),O(10,rO,1,1,null,13),Q(11),_(),O(12,oO,3,0,"div",14),O(13,sO,3,0,"div",15),_(),O(14,aO,1,0,"div",16),_(),C(15,"div",17),O(16,lO,2,0,"div",18)(17,dO,5,1,"div",19),_()),i&2){let o;y(2),q("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),y(2),F(!r._hasOutline()&&!r._control.disabled?4:-1),y(2),F(r._hasOutline()?6:-1),y(),F(r._hasIconPrefix?7:-1),y(),F(r._hasTextPrefix?8:-1),y(2),F(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),y(2),F(r._hasTextSuffix?12:-1),y(),F(r._hasIconSuffix?13:-1),y(),F(r._hasOutline()?-1:14),y(),q("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();y(),F((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[PD,jD,wp,VD,ng],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ca=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[ww,Qd,Xe]})}return t})();var yO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),_O={passive:!0},zD=(()=>{class t{_platform=u(me);_ngZone=u(T);_renderer=u(Ge).createRenderer(null,null);_styleLoader=u(Ct);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ne;this._styleLoader.load(yO);let i=St(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new x,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,_O)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=St(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $D=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({})}return t})();var WD=new v("MAT_INPUT_VALUE_ACCESSOR");var GD=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kd=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var CO=["button","checkbox","file","hidden","image","radio","range","reset","submit"],wO=new v("MAT_INPUT_CONFIG"),qD=(()=>{class t{_elementRef=u(P);_platform=u(me);ngControl=u(Dr,{optional:!0,self:!0});_autofillMonitor=u(zD);_ngZone=u(T);_formField=u(_a,{optional:!0});_renderer=u(Se);_uid=u(wt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(wO,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Gt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(kd.required)??!1}set required(e){this._required=Gt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ym().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Gt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ym().has(e));constructor(){let e=u(ya,{optional:!0}),i=u(eg,{optional:!0}),r=u(GD),o=u(WD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Qn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Kd(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&un(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){CO.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&fe("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(Mt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Ie("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),q("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae]},exportAs:["matInput"],features:[Te([{provide:ig,useExisting:t}]),Be]})}return t})(),ZD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[Ca,Ca,$D,Xe]})}return t})();var YD=(()=>{class t{_animationsDisabled=Je();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&q("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var EO=["text"],xO=[[["mat-icon"]],"*"],IO=["mat-icon","*"];function MO(t,n){if(t&1&&$(0,"mat-pseudo-checkbox",1),t&2){let e=A();N("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function SO(t,n){if(t&1&&$(0,"mat-pseudo-checkbox",3),t&2){let e=A();N("disabled",e.disabled)}}function TO(t,n){if(t&1&&(C(0,"span",4),w(1),_()),t&2){let e=A();y(),ke("(",e.group.label,")")}}var rg=new v("MAT_OPTION_PARENT_COMPONENT"),og=new v("MatOptgroup");var wa=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},So=(()=>{class t{_element=u(P);_changeDetectorRef=u(Ue);_parent=u(rg,{optional:!0});group=u(og,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(wt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new V;_text;_stateChanges=new x;constructor(){let e=u(Ct);e.load(Eo),e.load(ld),this._signalDisableRipple=!!this._parent&&Qn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!nn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new wa(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ze(EO,7),i&2){let o;W(o=G())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&fe("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(Mt("id",r.id),Ie("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),q("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ae]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:IO,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Me(xO),O(0,MO,1,2,"mat-pseudo-checkbox",1),Q(1),C(2,"span",2,0),Q(4,1),_(),O(5,SO,1,1,"mat-pseudo-checkbox",3),O(6,TO,2,1,"span",4),$(7,"div",5)),i&2&&(F(r.multiple?0:-1),y(5),F(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),y(),F(r.group&&r.group._inert?6:-1),y(),N("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[YD,la],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function QD(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function KD(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var XD=md();function o0(t){return new Xd(t.get(En),t.get(ee))}var Xd=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ze(-this._previousScrollPosition.left),n.style.top=ze(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),XD&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),XD&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function s0(t,n){return new Jd(t.get(xo),t.get(T),t.get(En),n)}var Jd=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(he(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Da=class{enable(){}disable(){}attach(){}};function sg(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function JD(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function ou(t,n){return new eu(t.get(xo),t.get(En),t.get(T),n)}var eu=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();sg(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},a0=(()=>{class t{_injector=u(oe);constructor(){}noop=()=>new Da;close=e=>s0(this._injector,e);block=()=>o0(this._injector);reposition=e=>ou(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),To=class{positionStrategy;scrollStrategy=new Da;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var tu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var l0=(()=>{class t{_attachedOverlays=[];_document=u(ee);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),c0=(()=>{class t extends l0{_ngZone=u(T);_renderer=u(Ge).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),d0=(()=>{class t extends l0{_platform=u(me);_ngZone=u(T);_renderer=u(Ge).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=_t(e)};_clickListener=e=>{let i=_t(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(e0(a.overlayElement,i)||e0(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Qe(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function e0(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var u0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),f0=(()=>{class t{_platform=u(me);_containerElement;_document=u(ee);_styleLoader=u(Ct);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||bm()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),bm()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(u0)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ag=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function lg(t){return t&&t.nodeType===1}var nu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges=de.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,l,c,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ke(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=g(g({},this._config),n),this._updateElementSize()}setDirection(n){this._config=X(g({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ze(this._config.width),n.height=ze(this._config.height),n.minWidth=ze(this._config.minWidth),n.minHeight=ze(this._config.minHeight),n.maxWidth=ze(this._config.maxWidth),n.maxHeight=ze(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;lg(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ag(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=ni(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ke(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},t0="cdk-overlay-connected-position-bounding-box",AO=/([A-Za-z%]+)$/;function su(t,n){return new iu(n,t.get(En),t.get(ee),t.get(me),t.get(f0))}var iu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=de.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(t0),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Er(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(t0),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:lg(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=i0(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-i.width,h=0-a,p=a+o.height-i.height,m=this._subtractOverflows(o.width,d,f),E=this._subtractOverflows(o.height,h,p),M=m*E;return{visibleArea:M,isCompletelyWithinViewport:o.width*o.height===M,fitsInViewportVertically:E===o.height,fitsInViewportHorizontally:m==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=n0(this._overlayRef.getConfig().minHeight),a=n0(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=i0(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!RO(this._lastScrollVisibility,i)){let r=new tu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let p=Math.min(i.bottom-n.y+i.top,n.y),m=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>m&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-m/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,h;if(c)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(i.right-n.x+i.left,n.x),m=this._lastBoundingBoxSize.width;d=p*2,f=n.x-p,d>m&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-m/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=ze(i.width),r.height=ze(i.height),r.top=ze(i.top)||"auto",r.bottom=ze(i.bottom)||"auto",r.left=ze(i.left)||"auto",r.right=ze(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ze(o)),s&&(r.maxWidth=ze(s))}this._lastBoundingBoxSize=i,Er(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Er(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Er(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Er(i,this._getExactOverlayY(e,n,d)),Er(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=ze(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=ze(s.maxWidth):o&&(i.maxWidth="")),Er(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=ze(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=ze(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:JD(n,i),isOriginOutsideView:sg(n,i),isOverlayClipped:JD(e,i),isOverlayOutsideView:sg(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ni(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof P)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Er(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function n0(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(AO);return!e||e==="px"?parseFloat(n):null}return t||null}function i0(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function RO(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var r0="cdk-global-overlay-wrapper";function h0(t){return new ru}var ru=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(r0),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",p="",m="",E="";l?E="flex-start":d==="center"?(E="center",h?m=f:p=f):h?d==="left"||d==="end"?(E="flex-end",p=f):(d==="right"||d==="start")&&(E="flex-start",m=f):d==="left"||d==="start"?(E="flex-start",p=f):(d==="right"||d==="end")&&(E="flex-end",m=f),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":m,e.justifyContent=E,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(r0),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},p0=(()=>{class t{_injector=u(oe);constructor(){}global(){return h0()}flexibleConnectedTo(e){return su(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),m0=new v("OVERLAY_DEFAULT_CONFIG");function au(t,n){t.get(Ct).load(u0);let e=t.get(f0),i=t.get(ee),r=t.get(wt),o=t.get(Jt),s=t.get(kt),a=t.get(Se,null,{optional:!0})||t.get(Ge).createRenderer(null,null),l=new To(n),c=t.get(m0,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return lg(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new nu(new Md(d,o,t),f,d,l,t.get(T),t.get(c0),i,t.get(_i),t.get(d0),n?.disableAnimations??t.get(bs,null,{optional:!0})==="NoopAnimations",t.get(be),a)}var g0=(()=>{class t{scrollStrategies=u(a0);_positionBuilder=u(p0);_injector=u(oe);constructor(){}create(e){return au(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({providers:[g0],imports:[Xe,Qw,Mm,Mm]})}return t})();var v0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[Xe]})}return t})();var dg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[jw,v0,So,Xe]})}return t})();var kO=["panel"],NO=["*"];function OO(t,n){if(t&1&&(ue(0,"div",1,0),Q(2),pe()),t&2){let e=n.id,i=A();Cn(i._classList),q("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),Mt("id",i.id),Ie("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var ug=class{source;option;constructor(n,e){this.source=n,this.option=e}},b0=new v("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),y0=(()=>{class t{_changeDetectorRef=u(Ue);_elementRef=u(P);_defaults=u(b0);_animationsDisabled=Je();_activeOptionChanges=de.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new V;opened=new V;closed=new V;optionActivated=new V;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(wt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(me);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ra(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new ug(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Rt(o,So,5)(o,og,5),i&2){let s;W(s=G())&&(r.options=s),W(s=G())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&Ze(gt,7)(kO,5),i&2){let o;W(o=G())&&(r.template=o.first),W(o=G())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ae],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ae],requireSelection:[2,"requireSelection","requireSelection",ae],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ae],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ae]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Te([{provide:rg,useExisting:t}])],ngContentSelectors:NO,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Me(),eo(0,OO,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var FO={provide:Wd,useExisting:qt(()=>fg),multi:!0};var PO=new v("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(oe);return()=>ou(t)}}),fg=(()=>{class t{_environmentInjector=u(be);_element=u(P);_injector=u(oe);_viewContainerRef=u(lt);_zone=u(T);_changeDetectorRef=u(Ue);_dir=u(kt,{optional:!0});_formField=u(_a,{optional:!0,host:!0});_viewportRuler=u(En);_scrollStrategy=u(PO);_renderer=u(Se);_animationsDisabled=Je();_defaults=u(b0,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new x;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=de.EMPTY;_breakpointObserver=u(ia);_handsetLandscapeSubscription=de.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new x;_overlayPanelClass=ni(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&hd(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Ot(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(he(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(he(()=>this._overlayAttached)):Z()).pipe(J(e=>e instanceof wa?e:null))}optionSelections=Bi(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(st(e),We(()=>Ot(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(We(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new U(e=>{let i=o=>{let s=_t(o),a=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&s!==this._element.nativeElement&&!this._hasFocus()&&(!a||!a.contains(s))&&(!l||!l.contains(s))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(s)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=nn(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let s=this.autocomplete._keyManager.activeItem,a=r===38||r===40;r===9||a&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):a&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(a||this.autocomplete._keyManager.activeItem!==s)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(s=>s.selected);if(o){let s=this._getDisplayValue(o.value);r!==s&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return dm()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new U(r=>{Ke(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(ht(()=>this._positionStrategy.reapplyLastPosition()),Bu(0))??Z();return Ot(e,i).pipe(We(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),nt(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;vm(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new ii(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=au(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Aw.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!nn(e)||e.keyCode===38&&nn(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new To({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=su(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],s;this.position==="above"?s=o:this.position==="below"?s=i:s=[...i,...o],e.withPositions(s)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=QD(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let s=o._getHostElement(),a=KD(s.offsetTop,s.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(a)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&hd(this._trackedModal,"aria-owns",i),vm(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;hd(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=k({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&fe("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(s){return r._handleInput(s)})("keydown",function(s){return r._handleKeydown(s)})("click",function(){return r._handleClick()}),i&2&&Ie("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ae]},exportAs:["matAutocompleteTrigger"],features:[Te([FO]),Be]})}return t})(),_0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[cg,dg,ca,dg,Xe]})}return t})();function VO(t,n){if(t&1&&(ue(0,"a",4),w(1),pe()),t&2){let e=A();Mt("href",e.titleHref(),Xt),y(),He(e.title())}}function jO(t,n){if(t&1&&w(0),t&2){let e=A();ke(" ",e.title()," ")}}function BO(t,n){if(t&1&&(ue(0,"p"),w(1),pe()),t&2){let e=n.$implicit;y(),He(e)}}var lu=class t{label=ut.required();title=ut.required();titleHref=ut();textFields=ut();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"h2",1),w(2),pe(),qe(3,"div",2),ue(4,"h2",3),O(5,VO,2,2,"a",4)(6,jO,1,1),pe()(),vt(7,BO,2,1,"p",null,yn)),e&2&&(y(2),He(i.label()),y(3),F(i.titleHref()?5:6),y(2),bt(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function HO(t,n){t&1&&w(0," \xA0 ")}function UO(t,n){if(t&1&&(w(0),O(1,HO,1,0),w(2)),t&2){let e=A(3);ke(" ",e.constants.currencySymbol," "),y(),F(e.constants.includeSpace?1:-1),y(),ke(" ",e.amount()," ")}}function zO(t,n){t&1&&w(0," \xA0 ")}function $O(t,n){if(t&1&&(w(0),O(1,zO,1,0),w(2)),t&2){let e=A(3);ke(" ",e.amount()," "),y(),F(e.constants.includeSpace?1:-1),y(),ke(" ",e.constants.currencySymbol," ")}}function WO(t,n){if(t&1&&O(0,UO,3,3)(1,$O,3,3),t&2){let e=A(2);F(e.constants.isSymbolLeftAligned?0:1)}}function GO(t,n){if(t&1&&w(0),t&2){let e=A(2);ke(" ",e.amount()," ")}}function qO(t,n){if(t&1&&O(0,WO,2,1)(1,GO,1,1),t&2){let e=A();F(e.constants?0:1)}}var cu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Pe),this.constants=this.teamDataService.getCurrencyConstants()}amount=ut.required();constants;static \u0275fac=function(e){return new(e||t)(B(Pe))};static \u0275cmp=D({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&O(0,qO,2,1),e&2&&F(i.amount()?0:-1)},encapsulation:2})};function ZO(t,n){if(t&1&&qe(0,"img",1),t&2){let e=A();Mt("src",e.systemData==null?null:e.systemData.spriteURL,Xt)}}var du=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Pe)}tag=ut.required();systemData;ngOnInit(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(B(Pe))};static \u0275cmp=D({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},decls:4,vars:3,consts:[[1,"tagContainer",3,"title"],[3,"src"]],template:function(e,i){e&1&&(ue(0,"div",0),O(1,ZO,1,1,"img",1),ue(2,"p"),w(3),pe()()),e&2&&(Mt("title",i.tag()),y(),F(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),y(2),He(i.tag()))},styles:["div.tagContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 16px;border-radius:0 8px;background:var(--mat-sys-primary-container)}div.tagContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down}div.tagContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}"]})};var YO=t=>({background:t}),uu=class t{percentage=ut.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";above50Primary="#3CD66F";above50Secondary="#d3efdd";above25Primary="#FFC107";above25Secondary="#fff4d4";below25Primary="#F13535";below25Secondary="#efd1d1";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Be],decls:1,vars:3,consts:[[1,"hpBar",3,"ngStyle"]],template:function(e,i){e&1&&$(0,"div",0),e&2&&N("ngStyle",Ht(1,YO,"linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)"))},dependencies:[Ts],styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px;border:1px solid black}"]})};var QO=t=>({rotate90:t}),KO=()=>[];function XO(t,n){if(t&1&&(C(0,"div",0),$(1,"img",24),_()),t&2){let e=A();y(),N("src",e.unit().sprite.portraitURL,Xt)}}function JO(t,n){if(t&1&&w(0),t&2){let e=A();ke(" Lvl. ",e.unit().stats.level," ")}}function eF(t,n){if(t&1&&w(0),t&2){let e,i=A();ke(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function tF(t,n){if(t&1&&$(0,"img",6),t&2){let e,i=A();N("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,Xt)}}function nF(t,n){if(t&1&&(C(0,"div",10)(1,"div",25)(2,"div",26),w(3),_(),C(4,"div",27),$(5,"div",28)(6,"div",29),_()()()),t&2){let e=A();N("title",e.unit().player),y(3),He(e.unit().player)}}function iF(t,n){if(t&1&&(C(0,"p",33),w(1),_()),t&2){let e=n.$implicit;y(),He(e)}}function rF(t,n){if(t&1&&vt(0,iF,2,1,"p",33,yn),t&2){let e=A(2);bt(e.unit().textFields)}}function oF(t,n){if(t&1&&$(0,"text-fields-with-labeled-header",34),t&2){let e,i,r=n.$implicit,o=A(3);N("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function sF(t,n){if(t&1&&vt(0,oF,1,3,"text-fields-with-labeled-header",34,yn),t&2){let e=A(2);bt(e.unit().classes)}}function aF(t,n){if(t&1&&$(0,"text-fields-with-labeled-header",32),t&2){let e=A(2);N("titleHref",e.unit().characterApplicationURL)}}function lF(t,n){if(t&1&&(C(0,"div",12),O(1,rF,2,0),$(2,"text-fields-with-labeled-header",30),O(3,sF,2,0),$(4,"text-fields-with-labeled-header",31),O(5,aF,1,1,"text-fields-with-labeled-header",32),_()),t&2){let e,i=A();y(),F(i.unit().textFields?1:-1),y(),N("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),y(),F(i.unit().classes?3:-1),y(),N("title",i.unit().movementType),y(),F(i.unit().characterApplicationURL?5:-1)}}function cF(t,n){if(t&1&&(C(0,"div",21)(1,"div",16),w(2,"Exp"),_(),C(3,"div"),w(4),_()()),t&2){let e=A();y(4),He(e.unit().stats.experience)}}function dF(t,n){if(t&1&&(C(0,"div",21)(1,"div",16),w(2,"Money"),_(),$(3,"currency",35),_()),t&2){let e=A();y(3),N("amount",e.unit().stats.heldCurrency)}}function uF(t,n){if(t&1&&$(0,"unit-tag",37),t&2){let e=n.$implicit;N("tag",e)}}function fF(t,n){if(t&1&&(C(0,"div",22)(1,"div"),w(2," TAGS "),_(),C(3,"div",36),vt(4,uF,1,1,"unit-tag",37,yn),_()()),t&2){let e=A();y(4),bt(e.unit().tags)}}function hF(t,n){if(t&1&&(C(0,"div",23)(1,"div"),w(2," BEHV "),_(),C(3,"div",26)(4,"p"),w(5),_()()()),t&2){let e=A();y(5),He(e.unit().behavior)}}var fu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Pe)}unit=ut.required();isUnitInfoExpanded=!1;getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}getUnitClass(n){return this.teamDataService.getClassByName(n)}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}static \u0275fac=function(e){return new(e||t)(B(Pe))};static \u0275cmp=D({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},decls:32,vars:20,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton",""],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagItems"],[3,"tag"]],template:function(e,i){if(e&1&&(O(0,XO,2,1,"div",0),C(1,"div",1),$(2,"img",2),C(3,"hgroup",3)(4,"h1",4),w(5),_(),C(6,"p",5),O(7,JO,1,1),O(8,eF,1,1),_()(),O(9,tF,1,1,"img",6),_(),C(10,"div",7)(11,"button",8),fe("click",function(){return i.toggleUnitInfoExpansion()}),$(12,"img",9),_(),O(13,nF,7,2,"div",10),C(14,"button",11),w(15," P "),_()(),O(16,lF,6,6,"div",12),C(17,"div",13)(18,"div",14)(19,"div",15)(20,"div",16),w(21,"HP"),_(),C(22,"div",17)(23,"span",18),w(24),_(),C(25,"span",19),w(26),_()()(),$(27,"unit-hp-bar",20),_(),O(28,cF,5,1,"div",21),O(29,dF,4,1,"div",21),_(),O(30,fF,6,0,"div",22),O(31,hF,6,1,"div",23)),e&2){let r;F(i.unit().sprite.portraitURL?0:-1),y(2),N("src",i.unit().sprite.spriteURL,Xt),y(3),He(i.unit().name),y(2),F(i.unit().stats.level>0?7:-1),y(),F(i.unit().classes?8:-1),y(),F((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),y(3),Cn(Ht(17,QO,i.isUnitInfoExpanded)),y(),F(i.unit().player?13:-1),y(3),F(i.isUnitInfoExpanded?16:-1),y(8),He(i.unit().stats.hp.current),y(2),ke("/ ",i.unit().stats.hp.maximum),y(),N("percentage",i.unit().stats.hp.percentage),y(),F((i.unit().stats.experience??0)>0?28:-1),y(),F((i.unit().stats.heldCurrency??0)>0?29:-1),y(),F((i.unit().tags??lp(19,KO)).length>0?30:-1),y(),F(i.unit().behavior?31:-1)}},dependencies:[Em,lu,cu,du,uu],styles:['div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex:1}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}']})};var pF=["unitAutocompleteInput"],mF=(t,n)=>n.name;function gF(t,n){if(t&1&&(C(0,"mat-option",5)(1,"div",7),$(2,"img",8),C(3,"div"),w(4),_()()()),t&2){let e=n.$implicit;N("value",e),y(2),N("src",e.sprite.spriteURL,Xt),y(2),He(e.name)}}function vF(t,n){if(t&1&&$(0,"unit-sidenav-display",6),t&2){let e=A();N("unit",e.selectedUnit.value)}}var hu=class t{constructor(n){this.dataService=n;this.dataService=u(Pe),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new Xm(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(B(Pe))};static \u0275cmp=D({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ze(pF,5),e&2){let r;W(r=G())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(C(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),fe("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),_(),C(5,"mat-autocomplete",4,1),vt(7,gF,5,3,"mat-option",5,mF),_()()(),O(9,vF,1,1,"unit-sidenav-display",6),_()),e&2){let r=_n(6);y(3),N("formControl",i.selectedUnit)("matAutocomplete",r),y(2),N("displayWith",i.formatAutocompleteDisplayValue),y(2),bt(i.filteredUnits),y(2),F(i.selectedUnit.value?9:-1)}},dependencies:[AD,MD,Gd,_D,CD,ya,Ca,Qd,ZD,qD,_0,y0,So,fg,RD,Jm,fu],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var pu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),w(1,"map-tiles-view works!"),pe())},encapsulation:2})};function bF(t,n){t&1&&w(0," U ")}function yF(t,n){t&1&&w(0," T ")}function _F(t,n){t&1&&w(0," I ")}function CF(t,n){t&1&&w(0," L ")}function wF(t,n){t&1&&w(0," DR ")}function DF(t,n){if(t&1&&(C(0,"mat-tab",6),w(1),_()),t&2){let e=n.$implicit;N("label",e.title),y(),ke(" ",e.title," ")}}var mu=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Wt),this.breakpointService=u(Ln),this.themeService=u(Vn),this.teamDataService=u(Pe);var o=this.route.snapshot.paramMap.get("teamName")??"";this.teamDataService.loadDataForTeam(o)}static \u0275fac=function(e){return new(e||t)(B(Wt),B(Ln),B(Vn),B(Pe))};static \u0275cmp=D({type:t,selectors:[["map-view"]],decls:25,vars:1,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],["mat-stretch-tabs","false","mat-align-tabs","start",1,"segmentTabs"],[3,"label"]],template:function(e,i){if(e&1){let r=Kn();C(0,"button",1),fe("click",function(){Vt(r);let s=_n(4);return jt(s.toggle())}),w(1,">"),_(),C(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),It(7,bF,1,0,"ng-template",4),$(8,"map-units-sidenav"),_(),C(9,"mat-tab"),It(10,yF,1,0,"ng-template",4),$(11,"map-tiles-sidenav"),_(),C(12,"mat-tab"),It(13,_F,1,0,"ng-template",4),w(14," Image download "),_(),C(15,"mat-tab"),It(16,CF,1,0,"ng-template",4),$(17,"map-links-sidenav"),_(),C(18,"mat-tab"),It(19,wF,1,0,"ng-template",4),$(20,"map-dice-roller-sidenav"),_()()(),C(21,"mat-sidenav-content")(22,"mat-tab-group",5),vt(23,DF,2,2,"mat-tab",6,yn),_()()()}if(e&2){let r;y(3),N("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),y(20),bt((r=i.teamDataService.mapData().map)==null?null:r.segments)}},dependencies:[Rm,Zw,Dd,zm,iD,Um,$w,Ad,hu,pu,Td],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}']})};var gu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),w(1,"map-analysis-view works!"),pe())},encapsulation:2})};var vu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),w(1,"convoy-view works!"),pe())},encapsulation:2})};var bu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),w(1,"shop-view works!"),pe())},encapsulation:2})};var C0=[{path:"",component:Cd,title:"Reddit Emblem Maps"},{path:":teamName/map",component:mu,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:gu,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:vu,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:bu,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var w0={providers:[qf(),am(C0)]};var yu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&$(0,"router-outlet")},dependencies:[Qs],encapsulation:2})};Rp(yu,w0).catch(t=>console.error(t));
