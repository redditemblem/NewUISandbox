var HD=Object.defineProperty,zD=Object.defineProperties;var $D=Object.getOwnPropertyDescriptors;var Ig=Object.getOwnPropertySymbols;var WD=Object.prototype.hasOwnProperty,GD=Object.prototype.propertyIsEnumerable;var Mg=(t,n,e)=>n in t?HD(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,y=(t,n)=>{for(var e in n||={})WD.call(n,e)&&Mg(t,e,n[e]);if(Ig)for(var e of Ig(n))GD.call(n,e)&&Mg(t,e,n[e]);return t},X=(t,n)=>zD(t,$D(n));var mt=null,Ta=!1,Nu=1,qD=null,$e=Symbol("SIGNAL");function j(t){let n=mt;return mt=t,n}function Aa(){return mt}var ri={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function oi(t){if(Ta)throw new Error("");if(mt===null)return;mt.consumerOnSignalRead(t);let n=mt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=mt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:mt.producers,e!==void 0&&e.producer===t)){mt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===mt&&(!i||YD(r,mt)))return;let o=Tr(mt),s={producer:t,consumer:mt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};mt.producersTail=s,n!==void 0?n.nextProducer=s:mt.producers=s,o&&Rg(t,s)}function Sg(){Nu++}function ki(t){if(!(Tr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Nu)){if(!t.producerMustRecompute(t)&&!Sr(t)){Mr(t);return}t.producerRecomputeValue(t),Mr(t)}}function Ou(t){if(t.consumers===void 0)return;let n=Ta;Ta=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||ZD(i)}}finally{Ta=n}}function Pu(){return mt?.consumerAllowSignalWrites!==!1}function ZD(t){t.dirty=!0,Ou(t),t.consumerMarkedDirty?.(t)}function Mr(t){t.dirty=!1,t.lastCleanEpoch=Nu}function Bn(t){return t&&Tg(t),j(t)}function Tg(t){t.producersTail=void 0,t.recomputing=!0}function si(t,n){j(n),t&&Ag(t)}function Ag(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Tr(t))do e=Fu(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Sr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(ki(e),i!==e.version))return!0}return!1}function ai(t){if(Tr(t)){let n=t.producers;for(;n!==void 0;)n=Fu(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Rg(t,n){let e=t.consumersTail,i=Tr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Rg(r.producer,r)}function Fu(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Tr(n)){let o=n.producers;for(;o!==void 0;)o=Fu(o)}return e}function Tr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Po(t){qD?.(t)}function YD(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Fo(t,n){return Object.is(t,n)}function Lo(t,n){let e=Object.create(QD);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(ki(e),oi(e),e.value===xn)throw e.error;return e.value};return i[$e]=e,Po(e),i}var Ai=Symbol("UNSET"),Ri=Symbol("COMPUTING"),xn=Symbol("ERRORED"),QD=X(y({},ri),{value:Ai,dirty:!0,error:null,equal:Fo,kind:"computed",producerMustRecompute(t){return t.value===Ai||t.value===Ri},producerRecomputeValue(t){if(t.value===Ri)throw new Error("");let n=t.value;t.value=Ri;let e=Bn(t),i,r=!1;try{i=t.computation(),j(null),r=n!==Ai&&n!==xn&&i!==xn&&t.equal(n,i)}catch(o){i=xn,t.error=o}finally{si(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function KD(){throw new Error}var kg=KD;function Ng(t){kg(t)}function Lu(t){kg=t}var XD=null;function Vu(t,n){let e=Object.create(Vo);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Og(e);return i[$e]=e,Po(e),[i,s=>Ni(e,s),s=>Ra(e,s)]}function Og(t){return oi(t),t.value}function Ni(t,n){Pu()||Ng(t),t.equal(t.value,n)||(t.value=n,JD(t))}function Ra(t,n){Pu()||Ng(t),Ni(t,n(t.value))}var Vo=X(y({},ri),{equal:Fo,value:void 0,kind:"signal"});function JD(t){t.version++,Sg(),Ou(t),XD?.(t)}var ju=X(y({},ri),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Bu(t){if(t.dirty=!1,t.version>0&&!Sr(t))return;t.version++;let n=Bn(t);try{t.cleanup(),t.fn()}finally{si(t,n)}}function ne(t){return typeof t=="function"}function Ar(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var ka=Ar(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Oi(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var fe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ne(i))try{i()}catch(o){n=o instanceof ka?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Pg(o)}catch(s){n=n??[],s instanceof ka?n=[...n,...s.errors]:n.push(s)}}if(n)throw new ka(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Pg(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Oi(e,n)}remove(n){let{_finalizers:e}=this;e&&Oi(e,n),n instanceof t&&n._removeParent(this)}};fe.EMPTY=(()=>{let t=new fe;return t.closed=!0,t})();var Uu=fe.EMPTY;function Na(t){return t instanceof fe||t&&"closed"in t&&ne(t.remove)&&ne(t.add)&&ne(t.unsubscribe)}function Pg(t){ne(t)?t():t.unsubscribe()}var ln={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Rr={setTimeout(t,n,...e){let{delegate:i}=Rr;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Rr;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Oa(t){Rr.setTimeout(()=>{let{onUnhandledError:n}=ln;if(n)n(t);else throw t})}function Pi(){}var Fg=Hu("C",void 0,void 0);function Lg(t){return Hu("E",void 0,t)}function Vg(t){return Hu("N",t,void 0)}function Hu(t,n,e){return{kind:t,value:n,error:e}}var Fi=null;function kr(t){if(ln.useDeprecatedSynchronousErrorHandling){let n=!Fi;if(n&&(Fi={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Fi;if(Fi=null,e)throw i}}else t()}function jg(t){ln.useDeprecatedSynchronousErrorHandling&&Fi&&(Fi.errorThrown=!0,Fi.error=t)}var Li=class extends fe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Na(n)&&n.add(this)):this.destination=nE}static create(n,e,i){return new Un(n,e,i)}next(n){this.isStopped?$u(Vg(n),this):this._next(n)}error(n){this.isStopped?$u(Lg(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?$u(Fg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},eE=Function.prototype.bind;function zu(t,n){return eE.call(t,n)}var Wu=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Pa(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Pa(i)}else Pa(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Pa(e)}}},Un=class extends Li{constructor(n,e,i){super();let r;if(ne(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&ln.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&zu(n.next,o),error:n.error&&zu(n.error,o),complete:n.complete&&zu(n.complete,o)}):r=n}this.destination=new Wu(r)}};function Pa(t){ln.useDeprecatedSynchronousErrorHandling?jg(t):Oa(t)}function tE(t){throw t}function $u(t,n){let{onStoppedNotification:e}=ln;e&&Rr.setTimeout(()=>e(t,n))}var nE={closed:!0,next:Pi,error:tE,complete:Pi};var Nr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Lt(t){return t}function Gu(...t){return qu(t)}function qu(t){return t.length===0?Lt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var $=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=rE(e)?e:new Un(e,i,r);return kr(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Bg(i),new i((r,o)=>{let s=new Un({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Nr](){return this}pipe(...e){return qu(e)(this)}toPromise(e){return e=Bg(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function Bg(t){var n;return(n=t??ln.Promise)!==null&&n!==void 0?n:Promise}function iE(t){return t&&ne(t.next)&&ne(t.error)&&ne(t.complete)}function rE(t){return t&&t instanceof Li||iE(t)&&Na(t)}function oE(t){return ne(t?.lift)}function ie(t){return n=>{if(oE(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function re(t,n,e,i,r){return new Zu(t,n,e,i,r)}var Zu=class extends Li{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Ug=Ar(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var I=(()=>{class t extends ${constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Fa(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Ug}next(e){kr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){kr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){kr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Uu:(this.currentObservers=null,o.push(e),new fe(()=>{this.currentObservers=null,Oi(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new $;return e.source=this,e}}return t.create=(n,e)=>new Fa(n,e),t})(),Fa=class extends I{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Uu}};var Ze=class extends I{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var jo={now(){return(jo.delegate||Date).now()},delegate:void 0};var La=class extends I{constructor(n=1/0,e=1/0,i=jo){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var Va=class extends fe{constructor(n,e){super()}schedule(n,e=0){return this}};var Bo={setInterval(t,n,...e){let{delegate:i}=Bo;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Bo;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ja=class extends Va{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Bo.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Bo.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Oi(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Or=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Or.now=jo.now;var Ba=class extends Or{constructor(n,e=Or.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Vi=new Ba(ja),Hg=Vi;var Ve=new $(t=>t.complete());function Ua(t){return t&&ne(t.schedule)}function Yu(t){return t[t.length-1]}function Ha(t){return ne(Yu(t))?t.pop():void 0}function In(t){return Ua(Yu(t))?t.pop():void 0}function zg(t,n){return typeof Yu(t)=="number"?t.pop():n}function Wg(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(i.next(d))}catch(f){s(f)}}function l(d){try{c(i.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):r(d.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function $g(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ji(t){return this instanceof ji?(this.v=t,this):new ji(t)}function Gg(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,f)}}function a(h,g){i[h]&&(r[h]=function(x){return new Promise(function(A,P){o.push([h,x,A,P])>1||l(h,x)})},g&&(r[h]=g(r[h])))}function l(h,g){try{c(i[h](g))}catch(x){p(o[0][3],x)}}function c(h){h.value instanceof ji?Promise.resolve(h.value.v).then(d,f):p(o[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function p(h,g){h(g),o.shift(),o.length&&l(o[0][0],o[0][1])}}function qg(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof $g=="function"?$g(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var za=t=>t&&typeof t.length=="number"&&typeof t!="function";function $a(t){return ne(t?.then)}function Wa(t){return ne(t[Nr])}function Ga(t){return Symbol.asyncIterator&&ne(t?.[Symbol.asyncIterator])}function qa(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function sE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Za=sE();function Ya(t){return ne(t?.[Za])}function Qa(t){return Gg(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield ji(e.read());if(r)return yield ji(void 0);yield yield ji(i)}}finally{e.releaseLock()}})}function Ka(t){return ne(t?.getReader)}function Ee(t){if(t instanceof $)return t;if(t!=null){if(Wa(t))return aE(t);if(za(t))return lE(t);if($a(t))return cE(t);if(Ga(t))return Zg(t);if(Ya(t))return dE(t);if(Ka(t))return uE(t)}throw qa(t)}function aE(t){return new $(n=>{let e=t[Nr]();if(ne(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lE(t){return new $(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function cE(t){return new $(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Oa)})}function dE(t){return new $(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Zg(t){return new $(n=>{fE(t,n).catch(e=>n.error(e))})}function uE(t){return Zg(Qa(t))}function fE(t,n){var e,i,r,o;return Wg(this,void 0,void 0,function*(){try{for(e=qg(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function kt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Xa(t,n=0){return ie((e,i)=>{e.subscribe(re(i,r=>kt(i,t,()=>i.next(r),n),()=>kt(i,t,()=>i.complete(),n),r=>kt(i,t,()=>i.error(r),n)))})}function Ja(t,n=0){return ie((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Yg(t,n){return Ee(t).pipe(Ja(n),Xa(n))}function Qg(t,n){return Ee(t).pipe(Ja(n),Xa(n))}function Kg(t,n){return new $(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Xg(t,n){return new $(e=>{let i;return kt(e,n,()=>{i=t[Za](),kt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>ne(i?.return)&&i.return()})}function el(t,n){if(!t)throw new Error("Iterable cannot be null");return new $(e=>{kt(e,n,()=>{let i=t[Symbol.asyncIterator]();kt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Jg(t,n){return el(Qa(t),n)}function ev(t,n){if(t!=null){if(Wa(t))return Yg(t,n);if(za(t))return Kg(t,n);if($a(t))return Qg(t,n);if(Ga(t))return el(t,n);if(Ya(t))return Xg(t,n);if(Ka(t))return Jg(t,n)}throw qa(t)}function Oe(t,n){return n?ev(t,n):Ee(t)}function Y(...t){let n=In(t);return Oe(t,n)}function Qu(t,n){let e=ne(t)?t:()=>t,i=r=>r.error(e());return new $(n?r=>n.schedule(i,0,r):i)}function Uo(t){return!!t&&(t instanceof $||ne(t.lift)&&ne(t.subscribe))}var Bi=Ar(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function tv(t){return t instanceof Date&&!isNaN(t)}function J(t,n){return ie((e,i)=>{let r=0;e.subscribe(re(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:pE}=Array;function hE(t,n){return pE(n)?t(...n):t(n)}function tl(t){return J(n=>hE(t,n))}var{isArray:mE}=Array,{getPrototypeOf:gE,prototype:vE,keys:bE}=Object;function nl(t){if(t.length===1){let n=t[0];if(mE(n))return{args:n,keys:null};if(yE(n)){let e=bE(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function yE(t){return t&&typeof t=="object"&&gE(t)===vE}function il(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Ho(...t){let n=In(t),e=Ha(t),{args:i,keys:r}=nl(t);if(i.length===0)return Oe([],n);let o=new $(_E(i,n,r?s=>il(r,s):Lt));return e?o.pipe(tl(e)):o}function _E(t,n,e=Lt){return i=>{nv(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)nv(n,()=>{let c=Oe(t[l],n),d=!1;c.subscribe(re(i,f=>{o[l]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function nv(t,n,e){t?kt(e,t,n):n()}function iv(t,n,e,i,r,o,s,a){let l=[],c=0,d=0,f=!1,p=()=>{f&&!l.length&&!c&&n.complete()},h=x=>c<i?g(x):l.push(x),g=x=>{o&&n.next(x),c++;let A=!1;Ee(e(x,d++)).subscribe(re(n,P=>{r?.(P),o?h(P):n.next(P)},()=>{A=!0},void 0,()=>{if(A)try{for(c--;l.length&&c<i;){let P=l.shift();s?kt(n,s,()=>g(P)):g(P)}p()}catch(P){n.error(P)}}))};return t.subscribe(re(n,h,()=>{f=!0,p()})),()=>{a?.()}}function ct(t,n,e=1/0){return ne(n)?ct((i,r)=>J((o,s)=>n(i,o,r,s))(Ee(t(i,r))),e):(typeof n=="number"&&(e=n),ie((i,r)=>iv(i,r,t,e)))}function rl(t=1/0){return ct(Lt,t)}function rv(){return rl(1)}function Mn(...t){return rv()(Oe(t,In(t)))}function Ui(t){return new $(n=>{Ee(t()).subscribe(n)})}function Ku(...t){let n=Ha(t),{args:e,keys:i}=nl(t),r=new $(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;Ee(e[d]).subscribe(re(o,p=>{f||(f=!0,c--),a[d]=p},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?il(i,a):a),o.complete())}))}});return n?r.pipe(tl(n)):r}function Hi(t=0,n,e=Hg){let i=-1;return n!=null&&(Ua(n)?e=n:i=n),new $(r=>{let o=tv(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Vt(...t){let n=In(t),e=zg(t,1/0),i=t;return i.length?i.length===1?Ee(i[0]):rl(e)(Oe(i,n)):Ve}function he(t,n){return ie((e,i)=>{let r=0;e.subscribe(re(i,o=>t.call(n,o,r++)&&i.next(o)))})}function ov(t){return ie((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(re(e,c=>{i=!0,r=c,o||Ee(t(c)).subscribe(o=re(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function ol(t,n=Vi){return ov(()=>Hi(t,n))}function zo(t){return ie((n,e)=>{let i=null,r=!1,o;i=n.subscribe(re(e,void 0,void 0,s=>{o=Ee(t(s,zo(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Pr(t,n){return ne(n)?ct(t,n,1):ct(t,1)}function cn(t,n=Vi){return ie((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}a()}e.subscribe(re(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function sv(t){return ie((n,e)=>{let i=!1;n.subscribe(re(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function st(t){return t<=0?()=>Ve:ie((n,e)=>{let i=0;n.subscribe(re(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function av(){return ie((t,n)=>{t.subscribe(re(n,Pi))})}function Fr(t){return J(()=>t)}function Xu(t,n){return n?e=>Mn(n.pipe(st(1),av()),e.pipe(Xu(t))):ct((e,i)=>Ee(t(e,i)).pipe(st(1),Fr(e)))}function Ju(t,n=Vi){let e=Hi(t,n);return Xu(()=>e)}function sl(t,n=Lt){return t=t??CE,ie((e,i)=>{let r,o=!0;e.subscribe(re(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function CE(t,n){return t===n}function lv(t=wE){return ie((n,e)=>{let i=!1;n.subscribe(re(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function wE(){return new Bi}function $o(t){return ie((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Hn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?he((r,o)=>t(r,o,i)):Lt,st(1),e?sv(n):lv(()=>new Bi))}function al(t){return t<=0?()=>Ve:ie((n,e)=>{let i=[];n.subscribe(re(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function ll(){return ie((t,n)=>{let e,i=!1;t.subscribe(re(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function cv(t={}){let{connector:n=()=>new I,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,p=()=>{a?.unsubscribe(),a=void 0},h=()=>{p(),s=l=void 0,d=f=!1},g=()=>{let x=s;h(),x?.unsubscribe()};return ie((x,A)=>{c++,!f&&!d&&p();let P=l=l??n();A.add(()=>{c--,c===0&&!f&&!d&&(a=ef(g,r))}),P.subscribe(A),!s&&c>0&&(s=new Un({next:ve=>P.next(ve),error:ve=>{f=!0,p(),a=ef(h,e,ve),P.error(ve)},complete:()=>{d=!0,p(),a=ef(h,i),P.complete()}}),Ee(x).subscribe(s))})(o)}}function ef(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Un({next:()=>{i.unsubscribe(),t()}});return Ee(n(...e)).subscribe(i)}function cl(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,cv({connector:()=>new La(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function zi(t){return he((n,e)=>t<=e)}function dt(...t){let n=In(t);return ie((e,i)=>{(n?Mn(t,e,n):Mn(t,e)).subscribe(i)})}function Ye(t,n){return ie((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(re(i,l=>{r?.unsubscribe();let c=0,d=o++;Ee(t(l,d)).subscribe(r=re(i,f=>i.next(n?n(l,f,d,c++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function xe(t){return ie((n,e)=>{Ee(t).subscribe(re(e,()=>e.complete(),Pi)),!e.closed&&n.subscribe(e)})}function gt(t,n,e){let i=ne(t)||n||e?{next:t,error:n,complete:e}:t;return i?ie((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(re(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Lt}var tf;function dl(){return tf}function Sn(t){let n=tf;return tf=t,n}var dv=Symbol("NotFound");function Lr(t){return t===dv||t?.name==="\u0275NotFound"}function nf(t,n,e){let i=Object.create(DE);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(ki(i),oi(i),i.value===xn)throw i.error;return i.value};return o[$e]=i,Po(i),o}function uv(t,n){ki(t),Ni(t,n),Mr(t)}function fv(t,n){if(ki(t),t.value===xn)throw t.error;Ra(t,n),Mr(t)}var DE=X(y({},ri),{value:Ai,dirty:!0,error:null,equal:Fo,kind:"linkedSignal",producerMustRecompute(t){return t.value===Ai||t.value===Ri},producerRecomputeValue(t){if(t.value===Ri)throw new Error("");let n=t.value;t.value=Ri;let e=Bn(t),i,r=!1;try{let o=t.source(),s=n!==Ai&&n!==xn,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,j(null),r=s&&i!==xn&&t.equal(n,i)}catch(o){i=xn,t.error=o}finally{si(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function pv(t){let n=j(null);try{return t()}finally{j(n)}}var vl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",T=class extends Error{code;constructor(n,e){super(ui(n,e)),this.code=n}};function EE(t){return`NG0${Math.abs(t)}`}function ui(t,n){return`${EE(t)}${n?": "+n:""}`}var Ko=globalThis;function Ce(t){for(let n in t)if(t[n]===Ce)return n;throw Error("")}function bv(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Xo(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Xo).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function bl(t,n){return t?n?`${t} ${n}`:t:n||""}var xE=Ce({__forward_ref__:Ce});function Qt(t){return t.__forward_ref__=Qt,t}function ut(t){return gf(t)?t():t}function gf(t){return typeof t=="function"&&t.hasOwnProperty(xE)&&t.__forward_ref__===Qt}function C(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function se(t){return{providers:t.providers||[],imports:t.imports||[]}}function Jo(t){return IE(t,yl)}function vf(t){return Jo(t)!==null}function IE(t,n){return t.hasOwnProperty(n)&&t[n]||null}function ME(t){let n=t?.[yl]??null;return n||null}function of(t){return t&&t.hasOwnProperty(fl)?t[fl]:null}var yl=Ce({\u0275prov:Ce}),fl=Ce({\u0275inj:Ce}),_=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=C({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function bf(t){return t&&!!t.\u0275providers}var yf=Ce({\u0275cmp:Ce}),_f=Ce({\u0275dir:Ce}),Cf=Ce({\u0275pipe:Ce}),wf=Ce({\u0275mod:Ce}),Go=Ce({\u0275fac:Ce}),Zi=Ce({__NG_ELEMENT_ID__:Ce}),hv=Ce({__NG_ENV_ID__:Ce});function Df(t){return _l(t,"@NgModule"),t[wf]||null}function $n(t){return _l(t,"@Component"),t[yf]||null}function Ef(t){return _l(t,"@Directive"),t[_f]||null}function yv(t){return _l(t,"@Pipe"),t[Cf]||null}function _l(t,n){if(t==null)throw new T(-919,!1)}function Yi(t){return typeof t=="string"?t:t==null?"":String(t)}var _v=Ce({ngErrorCode:Ce}),SE=Ce({ngErrorMessage:Ce}),TE=Ce({ngTokenPath:Ce});function xf(t,n){return Cv("",-200,n)}function Cl(t,n){throw new T(-201,!1)}function Cv(t,n,e){let i=new T(n,t);return i[_v]=n,i[SE]=t,e&&(i[TE]=e),i}function AE(t){return t[_v]}var sf;function wv(){return sf}function It(t){let n=sf;return sf=t,n}function If(t,n,e){let i=Jo(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Cl(t,"")}var RE={},$i=RE,kE="__NG_DI_FLAG__",af=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Wi(e)||0;try{return this.injector.get(n,i&8?null:$i,i)}catch(r){if(Lr(r))return r;throw r}}};function NE(t,n=0){let e=dl();if(e===void 0)throw new T(-203,!1);if(e===null)return If(t,void 0,n);{let i=OE(n),r=e.retrieve(t,i);if(Lr(r)){if(i.optional)return null;throw r}return r}}function H(t,n=0){return(wv()||NE)(ut(t),n)}function u(t,n){return H(t,Wi(n))}function Wi(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function OE(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function lf(t){let n=[];for(let e=0;e<t.length;e++){let i=ut(t[e]);if(Array.isArray(i)){if(i.length===0)throw new T(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=PE(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(H(r,o))}else n.push(H(i))}return n}function PE(t){return t[kE]}function li(t,n){let e=t.hasOwnProperty(Go);return e?t[Go]:null}function Dv(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Ev(t){return t.flat(Number.POSITIVE_INFINITY)}function wl(t,n){t.forEach(e=>Array.isArray(e)?wl(e,n):n(e))}function Mf(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function es(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function xv(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Iv(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Dl(t,n,e){let i=jr(t,n);return i>=0?t[i|1]=e:(i=~i,Iv(t,i,n,e)),i}function El(t,n){let e=jr(t,n);if(e>=0)return t[e|1]}function jr(t,n){return FE(t,n,1)}function FE(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var fi={},vt=[],Qi=new _(""),Sf=new _("",-1),Tf=new _(""),qo=class{get(n,e=$i){if(e===$i){let r=Cv("",-201);throw r.name="\u0275NotFound",r}return e}};function Ki(t){return{\u0275providers:t}}function Mv(t){return Ki([{provide:Qi,multi:!0,useValue:t}])}function Sv(...t){return{\u0275providers:Af(!0,t),\u0275fromNgModule:!0}}function Af(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return wl(n,s=>{let a=s;pl(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Tv(r,o),e}function Tv(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Rf(r,o=>{n(o,i)})}}function pl(t,n,e,i){if(t=ut(t),!t)return!1;let r=null,o=of(t),s=!o&&$n(t);if(!o&&!s){let l=t.ngModule;if(o=of(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)pl(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;wl(o.imports,d=>{pl(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&Tv(c,n)}if(!a){let c=li(r)||(()=>new r);n({provide:r,useFactory:c,deps:vt},r),n({provide:Tf,useValue:r,multi:!0},r),n({provide:Qi,useValue:()=>H(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;Rf(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Rf(t,n){for(let e of t)bf(e)&&(e=e.\u0275providers),Array.isArray(e)?Rf(e,n):n(e)}var LE=Ce({provide:String,useValue:Ce});function Av(t){return t!==null&&typeof t=="object"&&LE in t}function VE(t){return!!(t&&t.useExisting)}function jE(t){return!!(t&&t.useFactory)}function Gi(t){return typeof t=="function"}function Rv(t){return!!t.useClass}var ts=new _(""),ul={},mv={},rf;function Br(){return rf===void 0&&(rf=new qo),rf}var be=class{},qi=class extends be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,df(n,s=>this.processProvider(s)),this.records.set(Sf,Vr(void 0,this)),r.has("environment")&&this.records.set(be,Vr(void 0,this));let o=this.records.get(ts);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Tf,vt,{self:!0}))}retrieve(n,e){let i=Wi(e)||0;try{return this.get(n,$i,i)}catch(r){if(Lr(r))return r;throw r}}destroy(){Wo(this),this._destroyed=!0;let n=j(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),j(n)}}onDestroy(n){return Wo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Wo(this);let e=Sn(this),i=It(void 0),r;try{return n()}finally{Sn(e),It(i)}}get(n,e=$i,i){if(Wo(this),n.hasOwnProperty(hv))return n[hv](this);let r=Wi(i),o,s=Sn(this),a=It(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=$E(n)&&Jo(n);d&&this.injectableDefInScope(d)?c=Vr(cf(n),ul):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Br():this.parent;return e=r&8&&e===$i?null:e,l.get(n,e)}catch(l){let c=AE(l);throw c===-200||c===-201?new T(c,null):l}finally{It(a),Sn(s)}}resolveInjectorInitializers(){let n=j(null),e=Sn(this),i=It(void 0),r;try{let o=this.get(Qi,vt,{self:!0});for(let s of o)s()}finally{Sn(e),It(i),j(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=ut(n);let e=Gi(n)?n:ut(n&&n.provide),i=UE(n);if(!Gi(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Vr(void 0,ul,!0),r.factory=()=>lf(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=j(null);try{if(e.value===mv)throw xf("");return e.value===ul&&(e.value=mv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&zE(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{j(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=ut(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function cf(t){let n=Jo(t),e=n!==null?n.factory:li(t);if(e!==null)return e;if(t instanceof _)throw new T(-204,!1);if(t instanceof Function)return BE(t);throw new T(-204,!1)}function BE(t){if(t.length>0)throw new T(-204,!1);let e=ME(t);return e!==null?()=>e.factory(t):()=>new t}function UE(t){if(Av(t))return Vr(void 0,t.useValue);{let n=kf(t);return Vr(n,ul)}}function kf(t,n,e){let i;if(Gi(t)){let r=ut(t);return li(r)||cf(r)}else if(Av(t))i=()=>ut(t.useValue);else if(jE(t))i=()=>t.useFactory(...lf(t.deps||[]));else if(VE(t))i=(r,o)=>H(ut(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=ut(t&&(t.useClass||t.provide));if(HE(t))i=()=>new r(...lf(t.deps));else return li(r)||cf(r)}return i}function Wo(t){if(t.destroyed)throw new T(-205,!1)}function Vr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function HE(t){return!!t.deps}function zE(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function $E(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function df(t,n){for(let e of t)Array.isArray(e)?df(e,n):e&&bf(e)?df(e.\u0275providers,n):n(e)}function at(t,n){let e;t instanceof qi?(Wo(t),e=t):e=new af(t);let i,r=Sn(e),o=It(void 0);try{return n()}finally{Sn(r),It(o)}}function kv(){return wv()!==void 0||dl()!=null}var un=0,z=1,Q=2,Xe=3,Kt=4,Mt=5,Xi=6,Ur=7,We=8,Wn=9,fn=10,Ne=11,Hr=12,Nf=13,Ji=14,St=15,pi=16,er=17,An=18,Gn=19,Of=20,zn=21,xl=22,ci=23,jt=24,tr=25,hi=26,Pe=27,Nv=1,Pf=6,mi=7,ns=8,nr=9,He=10;function qn(t){return Array.isArray(t)&&typeof t[Nv]=="object"}function pn(t){return Array.isArray(t)&&t[Nv]===!0}function Ff(t){return(t.flags&4)!==0}function Rn(t){return t.componentOffset>-1}function is(t){return(t.flags&1)===1}function kn(t){return!!t.template}function zr(t){return(t[Q]&512)!==0}function ir(t){return(t[Q]&256)===256}var Ov="svg",Pv="math";function Xt(t){for(;Array.isArray(t);)t=t[un];return t}function Lf(t,n){return Xt(n[t])}function Jt(t,n){return Xt(n[t.index])}function Il(t,n){return t.data[n]}function Ml(t,n){return t[n]}function Vf(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function en(t,n){let e=n[t];return qn(e)?e:e[un]}function Fv(t){return(t[Q]&4)===4}function Sl(t){return(t[Q]&128)===128}function Lv(t){return pn(t[Xe])}function Bt(t,n){return n==null?null:t[n]}function jf(t){t[er]=0}function Bf(t){t[Q]&1024||(t[Q]|=1024,Sl(t)&&rr(t))}function Vv(t,n){for(;t>0;)n=n[Ji],t--;return n}function rs(t){return!!(t[Q]&9216||t[jt]?.dirty)}function Tl(t){t[fn].changeDetectionScheduler?.notify(8),t[Q]&64&&(t[Q]|=1024),rs(t)&&rr(t)}function rr(t){t[fn].changeDetectionScheduler?.notify(0);let n=di(t);for(;n!==null&&!(n[Q]&8192||(n[Q]|=8192,!Sl(n)));)n=di(n)}function Uf(t,n){if(ir(t))throw new T(911,!1);t[zn]===null&&(t[zn]=[]),t[zn].push(n)}function jv(t,n){if(t[zn]===null)return;let e=t[zn].indexOf(n);e!==-1&&t[zn].splice(e,1)}function di(t){let n=t[Xe];return pn(n)?n[Xe]:n}function Hf(t){return t[Ur]??=[]}function zf(t){return t.cleanup??=[]}function Bv(t,n,e,i){let r=Hf(n);r.push(e),t.firstCreatePass&&zf(t).push(i,r.length-1)}var ce={lFrame:Xv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var uf=!1;function Uv(){return ce.lFrame.elementDepthCount}function Hv(){ce.lFrame.elementDepthCount++}function $f(){ce.lFrame.elementDepthCount--}function Wf(){return ce.bindingsEnabled}function Gf(){return ce.skipHydrationRootTNode!==null}function qf(t){return ce.skipHydrationRootTNode===t}function Zf(){ce.skipHydrationRootTNode=null}function W(){return ce.lFrame.lView}function je(){return ce.lFrame.tView}function Ut(t){return ce.lFrame.contextLView=t,t[We]}function Ht(t){return ce.lFrame.contextLView=null,t}function bt(){let t=Yf();for(;t!==null&&t.type===64;)t=t.parent;return t}function Yf(){return ce.lFrame.currentTNode}function zv(){let t=ce.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function $r(t,n){let e=ce.lFrame;e.currentTNode=t,e.isParent=n}function Qf(){return ce.lFrame.isParent}function Kf(){ce.lFrame.isParent=!1}function $v(){return ce.lFrame.contextLView}function Xf(){return uf}function Zo(t){let n=uf;return uf=t,n}function os(){let t=ce.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Wv(){return ce.lFrame.bindingIndex}function Gv(t){return ce.lFrame.bindingIndex=t}function Zn(){return ce.lFrame.bindingIndex++}function Al(t){let n=ce.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function qv(){return ce.lFrame.inI18n}function Zv(t,n){let e=ce.lFrame;e.bindingIndex=e.bindingRootIndex=t,Rl(n)}function Yv(){return ce.lFrame.currentDirectiveIndex}function Rl(t){ce.lFrame.currentDirectiveIndex=t}function Qv(t){let n=ce.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function kl(){return ce.lFrame.currentQueryIndex}function ss(t){ce.lFrame.currentQueryIndex=t}function WE(t){let n=t[z];return n.type===2?n.declTNode:n.type===1?t[Mt]:null}function Jf(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=WE(o),r===null||(o=o[Ji],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ce.lFrame=Kv();return i.currentTNode=n,i.lView=t,!0}function Nl(t){let n=Kv(),e=t[z];ce.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Kv(){let t=ce.lFrame,n=t===null?null:t.child;return n===null?Xv(t):n}function Xv(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Jv(){let t=ce.lFrame;return ce.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var ep=Jv;function Ol(){let t=Jv();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function eb(t){return(ce.lFrame.contextLView=Vv(t,ce.lFrame.contextLView))[We]}function Nn(){return ce.lFrame.selectedIndex}function gi(t){ce.lFrame.selectedIndex=t}function as(){let t=ce.lFrame;return Il(t.tView,t.selectedIndex)}function tb(){return ce.lFrame.currentNamespace}var nb=!0;function Pl(){return nb}function Fl(t){nb=t}function ff(t,n=null,e=null,i){let r=tp(t,n,e,i);return r.resolveInjectorInitializers(),r}function tp(t,n=null,e=null,i,r=new Set){let o=[e||vt,Sv(t)],s;return new qi(o,n||Br(),s||null,r)}var oe=class t{static THROW_IF_NOT_FOUND=$i;static NULL=new qo;static create(n,e){if(Array.isArray(n))return ff({name:""},e,n,"");{let i=n.name??"";return ff({name:i},n.parent,n.providers,i)}}static \u0275prov=C({token:t,providedIn:"any",factory:()=>H(Sf)});static __NG_ELEMENT_ID__=-1},ee=new _(""),Tt=(()=>{class t{static __NG_ELEMENT_ID__=GE;static __NG_ENV_ID__=e=>e}return t})(),hl=class extends Tt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return ir(this._lView)}onDestroy(n){let e=this._lView;return Uf(e,n),()=>jv(e,n)}};function GE(){return new hl(W())}var ib=!1,rb=new _(""),Yn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ze(!1);debugTaskTracker=u(rb,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new $(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),pf=class extends I{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,kv()&&(this.destroyRef=u(Tt,{optional:!0})??void 0,this.pendingTasks=u(Yn,{optional:!0})??void 0)}emit(n){let e=j(null);try{super.next(n)}finally{j(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof fe&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},B=pf;function ml(...t){}function np(t){let n,e;function i(){t=ml;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function ob(t){return queueMicrotask(()=>t()),()=>{t=ml}}var ip="isAngularZone",Yo=ip+"_ID",qE=0,N=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new B(!1);onMicrotaskEmpty=new B(!1);onStable=new B(!1);onError=new B(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=ib}=n;if(typeof Zone>"u")throw new T(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,QE(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ip)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new T(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new T(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,ZE,ml,ml);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},ZE={};function rp(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function YE(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){np(()=>{t.callbackScheduled=!1,hf(t),t.isCheckStableRunning=!0,rp(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),hf(t)}function QE(t){let n=()=>{YE(t)},e=qE++;t._inner=t._inner.fork({name:"angular",properties:{[ip]:!0,[Yo]:e,[Yo+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(KE(l))return i.invokeTask(o,s,a,l);try{return gv(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),vv(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return gv(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!XE(l)&&n(),vv(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,hf(t),rp(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function hf(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function gv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function vv(t){t._nesting--,rp(t)}var Qo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new B;onMicrotaskEmpty=new B;onStable=new B;onError=new B;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function KE(t){return sb(t,"__ignore_ng_zone__")}function XE(t){return sb(t,"__scheduler_tick__")}function sb(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var dn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},zt=new _("",{factory:()=>{let t=u(N),n=u(be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(dn),e.handleError(i))})}}}),ab={provide:Qi,useValue:()=>{let t=u(dn,{optional:!0})},multi:!0},JE=new _("",{factory:()=>{let t=u(ee).defaultView;if(!t)return;let n=u(zt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Tt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function op(){return Ki([Mv(()=>{u(JE)})])}function U(t,n){let[e,i,r]=Vu(t,n?.equal),o=e,s=o[$e];return o.set=i,o.update=r,o.asReadonly=Ll.bind(o),o}function Ll(){let t=this[$e];if(t.readonlyFn===void 0){let n=()=>this();n[$e]=t,t.readonlyFn=n}return t.readonlyFn}var Wr=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=ex}return t})();function ex(){return new Wr(W(),bt())}var Tn=class{},ls=new _("",{factory:()=>!0});var sp=new _(""),cs=(()=>{class t{internalPendingTasks=u(Yn);scheduler=u(Tn);errorHandler=u(zt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),Vl=(()=>{class t{static \u0275prov=C({token:t,providedIn:"root",factory:()=>new mf})}return t})(),mf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},gl=class{[$e];constructor(n){this[$e]=n}destroy(){this[$e].destroy()}};function hn(t,n){let e=n?.injector??u(oe),i=n?.manualCleanup!==!0?e.get(Tt):null,r,o=e.get(Wr,null,{optional:!0}),s=e.get(Tn);return o!==null?(r=ix(o.view,s,t),i instanceof hl&&i._lView===o.view&&(i=null)):r=rx(t,e.get(Vl),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new gl(r)}var lb=X(y({},ju),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Zo(!1);try{Bu(this)}finally{Zo(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=j(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],j(t)}}}),tx=X(y({},lb),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ai(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),nx=X(y({},lb),{consumerMarkedDirty(){this.view[Q]|=8192,rr(this.view),this.notifier.notify(13)},destroy(){if(ai(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[ci]?.delete(this)}});function ix(t,n,e){let i=Object.create(nx);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=cb(i,e),t[ci]??=new Set,t[ci].add(i),i.consumerMarkedDirty(i),i}function rx(t,n,e){let i=Object.create(tx);return i.fn=cb(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function cb(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ys(t){return{toString:t}.toString()}function px(t){return typeof t=="function"}function Vb(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Wl=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Be=(()=>{let t=()=>jb;return t.ngInherit=!0,t})();function jb(t){return t.type.prototype.ngOnChanges&&(t.setInput=mx),hx}function hx(){let t=Ub(this),n=t?.current;if(n){let e=t.previous;if(e===fi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function mx(t,n,e,i,r){let o=this.declaredInputs[i],s=Ub(t)||gx(t,{previous:fi,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Wl(c&&c.currentValue,e,l===fi),Vb(t,n,r,e)}var Bb="__ngSimpleChanges__";function Ub(t){return t[Bb]||null}function gx(t,n){return t[Bb]=n}var db=[];var we=function(t,n=null,e){for(let i=0;i<db.length;i++){let r=db[i];r(t,n,e)}},ge=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ge||{});function vx(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=jb(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Hb(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Ul(t,n,e){zb(t,n,3,e)}function Hl(t,n,e,i){(t[Q]&3)===e&&zb(t,n,e,i)}function ap(t,n){let e=t[Q];(e&3)===n&&(e&=16383,e+=1,t[Q]=e)}function zb(t,n,e,i){let r=i!==void 0?t[er]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[er]+=65536),(a<o||o==-1)&&(bx(t,e,n,l),t[er]=(t[er]&4294901760)+l+2),l++}function ub(t,n){we(ge.LifecycleHookStart,t,n);let e=j(null);try{n.call(t)}finally{j(e),we(ge.LifecycleHookEnd,t,n)}}function bx(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[Q]>>14<t[er]>>16&&(t[Q]&3)===n&&(t[Q]+=16384,ub(a,o)):ub(a,o)}var qr=-1,sr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function yx(t){return(t.flags&8)!==0}function _x(t){return(t.flags&16)!==0}function Cx(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];wx(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function $b(t){return t===3||t===4||t===6}function wx(t){return t.charCodeAt(0)===64}function Zr(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?fb(t,e,r,null,n[++i]):fb(t,e,r,null,null))}}return t}function fb(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Wb(t){return t!==qr}function Gl(t){return t&32767}function Dx(t){return t>>16}function ql(t,n){let e=Dx(t),i=n;for(;e>0;)i=i[Ji],e--;return i}var bp=!0;function Zl(t){let n=bp;return bp=t,n}var Ex=256,Gb=Ex-1,qb=5,xx=0,On={};function Ix(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Zi)&&(i=e[Zi]),i==null&&(i=e[Zi]=xx++);let r=i&Gb,o=1<<r;n.data[t+(r>>qb)]|=o}function Yl(t,n){let e=Zb(t,n);if(e!==-1)return e;let i=n[z];i.firstCreatePass&&(t.injectorIndex=n.length,lp(i.data,t),lp(n,null),lp(i.blueprint,null));let r=Gp(t,n),o=t.injectorIndex;if(Wb(r)){let s=Gl(r),a=ql(r,n),l=a[z].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function lp(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Zb(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Gp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Jb(r),i===null)return qr;if(e++,r=r[Ji],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return qr}function yp(t,n,e){Ix(t,n,e)}function Mx(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if($b(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Yb(t,n,e){if(e&8||t!==void 0)return t;Cl(n,"NodeInjector")}function Qb(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Wn],o=It(void 0);try{return r?r.get(n,i,e&8):If(n,i,e&8)}finally{It(o)}}return Yb(i,n,e)}function Kb(t,n,e,i=0,r){if(t!==null){if(n[Q]&2048&&!(i&2)){let s=Rx(t,n,e,i,On);if(s!==On)return s}let o=Xb(t,n,e,i,On);if(o!==On)return o}return Qb(n,e,i,r)}function Xb(t,n,e,i,r){let o=Tx(e);if(typeof o=="function"){if(!Jf(n,t,i))return i&1?Yb(r,e,i):Qb(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Cl(e);else return s}finally{ep()}}else if(typeof o=="number"){let s=null,a=Zb(t,n),l=qr,c=i&1?n[St][Mt]:null;for((a===-1||i&4)&&(l=a===-1?Gp(t,n):n[a+8],l===qr||!hb(i,!1)?a=-1:(s=n[z],a=Gl(l),n=ql(l,n)));a!==-1;){let d=n[z];if(pb(o,a,d.data)){let f=Sx(a,n,e,s,i,c);if(f!==On)return f}l=n[a+8],l!==qr&&hb(i,n[z].data[a+8]===c)&&pb(o,a,n)?(s=d,a=Gl(l),n=ql(l,n)):a=-1}}return r}function Sx(t,n,e,i,r,o){let s=n[z],a=s.data[t+8],l=i==null?Rn(a)&&bp:i!=s&&(a.type&3)!==0,c=r&1&&o===a,d=zl(a,s,e,l,c);return d!==null?ps(n,s,d,a,r):On}function zl(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=i?a:a+d,p=r?a+d:c;for(let h=f;h<p;h++){let g=s[h];if(h<l&&e===g||h>=l&&g.type===e)return h}if(r){let h=s[l];if(h&&kn(h)&&h.type===e)return l}return null}function ps(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof sr){let a=o;if(a.resolving)throw xf("");let l=Zl(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?It(a.injectImpl):null,p=Jf(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&vx(e,s[e],n)}finally{f!==null&&It(f),Zl(l),a.resolving=!1,ep()}}return o}function Tx(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Zi)?t[Zi]:void 0;return typeof n=="number"?n>=0?n&Gb:Ax:n}function pb(t,n,e){let i=1<<t;return!!(e[n+(t>>qb)]&i)}function hb(t,n){return!(t&2)&&!(t&1&&n)}var or=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return Kb(this._tNode,this._lView,n,Wi(i),e)}};function Ax(){return new or(bt(),W())}function Je(t){return ys(()=>{let n=t.prototype.constructor,e=n[Go]||_p(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Go]||_p(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function _p(t){return gf(t)?()=>{let n=_p(ut(t));return n&&n()}:li(t)}function Rx(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[Q]&2048&&!zr(s);){let a=Xb(o,s,e,i|2,On);if(a!==On)return a;let l=o.parent;if(!l){let c=s[Of];if(c){let d=c.get(e,On,i&-5);if(d!==On)return d}l=Jb(s),s=s[Ji]}o=l}return r}function Jb(t){let n=t[z],e=n.type;return e===2?n.declTNode:e===1?t[Mt]:null}function _s(t){return Mx(bt(),t)}function kx(){return Jr(bt(),W())}function Jr(t,n){return new V(Jt(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=kx}return t})();function ey(t){return t instanceof V?t.nativeElement:t}function Nx(){return this._results[Symbol.iterator]()}var vn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new I}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Ev(n);(this._changesDetected=!Dv(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Nx};function ty(t){return(t.flags&128)===128}var qp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(qp||{}),ny=new Map,Ox=0;function Px(){return Ox++}function Fx(t){ny.set(t[Gn],t)}function Cp(t){ny.delete(t[Gn])}var mb="__ngContext__";function Yr(t,n){qn(n)?(t[mb]=n[Gn],Fx(n)):t[mb]=n}function iy(t){return oy(t[Hr])}function ry(t){return oy(t[Kt])}function oy(t){for(;t!==null&&!pn(t);)t=t[Kt];return t}var Lx;function Zp(t){Lx=t}var eo=new _("",{factory:()=>Vx}),Vx="ng";var cc=new _(""),dr=new _("",{providedIn:"platform",factory:()=>"unknown"}),Cs=new _(""),ur=new _("",{factory:()=>u(ee).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var sy="r";var ay="di";var ly=!1,cy=new _("",{factory:()=>ly});var jx=(t,n,e,i)=>{};function Bx(t,n,e,i){jx(t,n,e,i)}function dc(t){return(t.flags&32)===32}var Ux=()=>null;function dy(t,n,e=!1){return Ux(t,n,e)}function uy(t,n){let e=t.contentQueries;if(e!==null){let i=j(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];ss(o),a.contentQueries(2,n[s],s)}}}finally{j(i)}}}function wp(t,n,e){ss(0);let i=j(null);try{n(t,e)}finally{j(i)}}function fy(t,n,e){if(Ff(n)){let i=j(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{j(i)}}}var bn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(bn||{});var jl;function Hx(){if(jl===void 0&&(jl=null,Ko.trustedTypes))try{jl=Ko.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return jl}function gb(t){return Hx()?.createScriptURL(t)||t}var Ql=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${vl})`}};function ws(t){return t instanceof Ql?t.changingThisBreaksApplicationSecurity:t}function Yp(t,n){let e=py(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${vl})`)}return e===n}function py(t){return t instanceof Ql&&t.getTypeName()||null}var zx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function hy(t){return t=String(t),t.match(zx)?t:"unsafe:"+t}function $x(t,n){return t.createText(n)}function Wx(t,n,e){t.setValue(n,e)}function my(t,n,e){return t.createElement(n,e)}function Kl(t,n,e,i,r){t.insertBefore(n,e,i,r)}function gy(t,n,e){t.appendChild(n,e)}function vb(t,n,e,i,r){i!==null?Kl(t,n,e,i,r):gy(t,n,e)}function vy(t,n,e,i){t.removeChild(null,n,e,i)}function Gx(t,n,e){t.setAttribute(n,"style",e)}function qx(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function by(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&Cx(t,n,i),r!==null&&qx(t,n,r),o!==null&&Gx(t,n,o)}var uc=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(uc||{});function Nt(t){let n=_y();return n?n.sanitize(uc.URL,t)||"":Yp(t,"URL")?ws(t):hy(Yi(t))}function yy(t){let n=_y();if(n)return gb(n.sanitize(uc.RESOURCE_URL,t)||"");if(Yp(t,"ResourceURL"))return gb(ws(t));throw new T(904,!1)}var Zx={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Yx(t,n){return Zx[t]?.[n]===!0?yy:Nt}function Qp(t,n,e){return Yx(n,e)(t)}function _y(){let t=W();return t&&t[fn].sanitizer}function Cy(t){return t instanceof Function?t():t}function Qx(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var wy="ng-template";function Kx(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Qx(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Kp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Kp(t){return t.type===4&&t.value!==wy}function Xx(t,n,e){let i=t.type===4&&!e?wy:t.value;return n===i}function Jx(t,n,e){let i=4,r=t.attrs,o=r!==null?nI(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!mn(i)&&!mn(l))return!1;if(s&&mn(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!Xx(t,l,e)||l===""&&n.length===1){if(mn(i))return!1;s=!0}}else if(i&8){if(r===null||!Kx(t,r,l,e)){if(mn(i))return!1;s=!0}}else{let c=n[++a],d=eI(l,r,Kp(t),e);if(d===-1){if(mn(i))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&c!==f){if(mn(i))return!1;s=!0}}}}return mn(i)||s}function mn(t){return(t&1)===0}function eI(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return iI(n,t)}function Dy(t,n,e=!1){for(let i=0;i<n.length;i++)if(Jx(t,n[i],e))return!0;return!1}function tI(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function nI(t){for(let n=0;n<t.length;n++){let e=t[n];if($b(e))return n}return t.length}function iI(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function rI(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function bb(t,n){return t?":not("+n.trim()+")":n}function oI(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!mn(s)&&(n+=bb(o,r),r=""),i=s,o=o||!mn(i);e++}return r!==""&&(n+=bb(o,r)),n}function sI(t){return t.map(oI).join(",")}function aI(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!mn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var _t={};function Xp(t,n,e,i,r,o,s,a,l,c,d){let f=Pe+i,p=f+r,h=lI(f,p),g=typeof c=="function"?c():c;return h[z]={type:t,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:d}}function lI(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:_t);return e}function cI(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Xp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Jp(t,n,e,i,r,o,s,a,l,c,d){let f=n.blueprint.slice();return f[un]=r,f[Q]=i|4|128|8|64|1024,(c!==null||t&&t[Q]&2048)&&(f[Q]|=2048),jf(f),f[Xe]=f[Ji]=t,f[We]=e,f[fn]=s||t&&t[fn],f[Ne]=a||t&&t[Ne],f[Wn]=l||t&&t[Wn]||null,f[Mt]=o,f[Gn]=Px(),f[Xi]=d,f[Of]=c,f[St]=n.type==2?t[St]:f,f}function dI(t,n,e){let i=Jt(n,t),r=cI(e),o=t[fn].rendererFactory,s=eh(t,Jp(t,r,null,Ey(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function Ey(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function xy(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function eh(t,n){return t[Hr]?t[Nf][Kt]=n:t[Hr]=n,t[Nf]=n,n}function m(t=1){Iy(je(),W(),Nn()+t,!1)}function Iy(t,n,e,i){if(!i)if((n[Q]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Ul(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Hl(n,o,0,e)}gi(e)}var fc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(fc||{});function Dp(t,n,e,i){let r=j(null);try{let[o,s,a]=t.inputs[e],l=null;(s&fc.SignalBased)!==0&&(l=n[o][$e]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):Vb(n,l,o,i)}finally{j(r)}}var yn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(yn||{}),uI;function th(t,n){return uI(t,n)}var LH=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Ep=new WeakMap,ds=new WeakSet;function fI(t,n){let e=Ep.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),ds.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function pI(t,n){let e=Ep.get(t);e?e.includes(n)||e.push(n):Ep.set(t,[n])}var ar=new Set,pc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(pc||{}),_n=new _(""),yb=new Set;function bi(t){yb.has(t)||(yb.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var hc=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),nh=[0,1,2,3],ih=(()=>{class t{ngZone=u(N);scheduler=u(Tn);errorHandler=u(dn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(_n,{optional:!0})}execute(){let e=this.sequences.size>0;e&&we(ge.AfterRenderHooksStart),this.executing=!0;for(let i of nh)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&we(ge.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[tr]??=[]).push(e),rr(i),i[Q]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(pc.AFTER_NEXT_RENDER,e):e()}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),hs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[tr];n&&(this.view[tr]=n.filter(e=>e!==this))}};function et(t,n){let e=n?.injector??u(oe);return bi("NgAfterNextRender"),mI(t,e,n,!0)}function hI(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function mI(t,n,e,i){let r=n.get(hc);r.impl??=n.get(ih);let o=n.get(_n,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(Tt):null,a=n.get(Wr,null,{optional:!0}),l=new hs(r.impl,hI(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var My=new _("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(be)})});function Sy(t,n,e){let i=t.get(My);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function gI(t,n){let e=t.get(My);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function vI(t,n){for(let[e,i]of n)Sy(t,i.animateFns)}function _b(t,n,e,i){let r=t?.[hi]?.enter;n!==null&&r&&r.has(e.index)&&vI(i,r)}function Gr(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;pn(r)?l=r:qn(r)&&(c=!0,r=r[un]);let d=Xt(r);t===0&&i!==null?(_b(a,i,o,e),s==null?gy(n,i,d):Kl(n,i,d,s||null,!0)):t===1&&i!==null?(_b(a,i,o,e),Kl(n,i,d,s||null,!0),fI(o,d)):t===2?(a?.[hi]?.leave?.has(o.index)&&pI(o,d),ds.delete(d),Cb(a,o,e,f=>{if(ds.has(d)){ds.delete(d);return}vy(n,d,c,f)})):t===3&&(ds.delete(d),Cb(a,o,e,()=>{n.destroyNode(d)})),l!=null&&SI(n,t,e,l,o,i,s)}}function bI(t,n){Ty(t,n),n[un]=null,n[Mt]=null}function yI(t,n,e,i,r,o){i[un]=r,i[Mt]=n,gc(t,i,e,1,r,o)}function Ty(t,n){n[fn].changeDetectionScheduler?.notify(9),gc(t,n,n[Ne],2,null,null)}function _I(t){let n=t[Hr];if(!n)return cp(t[z],t);for(;n;){let e=null;if(qn(n))e=n[Hr];else{let i=n[He];i&&(e=i)}if(!e){for(;n&&!n[Kt]&&n!==t;)qn(n)&&cp(n[z],n),n=n[Xe];n===null&&(n=t),qn(n)&&cp(n[z],n),e=n&&n[Kt]}n=e}}function rh(t,n){let e=t[nr],i=e.indexOf(n);e.splice(i,1)}function mc(t,n){if(ir(n))return;let e=n[Ne];e.destroyNode&&gc(t,n,e,3,null,null),_I(n)}function cp(t,n){if(ir(n))return;let e=j(null);try{n[Q]&=-129,n[Q]|=256,n[jt]&&ai(n[jt]),DI(t,n),wI(t,n),n[z].type===1&&n[Ne].destroy();let i=n[pi];if(i!==null&&pn(n[Xe])){i!==n[Xe]&&rh(i,n);let r=n[An];r!==null&&r.detachView(t)}Cp(n)}finally{j(e)}}function Cb(t,n,e,i){let r=t?.[hi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&ar.add(t[Gn]),Sy(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),CI(t,i)}else t&&ar.delete(t[Gn]),i(!1)},r)}function CI(t,n){let e=t[hi]?.running;if(e){e.then(()=>{t[hi].running=void 0,ar.delete(t[Gn]),n(!0)});return}n(!1)}function wI(t,n){let e=t.cleanup,i=n[Ur];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Ur]=null);let r=n[zn];if(r!==null){n[zn]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[ci];if(o!==null){n[ci]=null;for(let s of o)s.destroy()}}function DI(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof sr)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];we(ge.LifecycleHookStart,a,l);try{l.call(a)}finally{we(ge.LifecycleHookEnd,a,l)}}else{we(ge.LifecycleHookStart,r,o);try{o.call(r)}finally{we(ge.LifecycleHookEnd,r,o)}}}}}function Ay(t,n,e){return EI(t,n.parent,e)}function EI(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[un];if(Rn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===bn.None||r===bn.Emulated)return null}return Jt(i,e)}function Ry(t,n,e){return II(t,n,e)}function xI(t,n,e){return t.type&40?Jt(t,e):null}var II=xI,wb;function oh(t,n,e,i){let r=Ay(t,i,n),o=n[Ne],s=i.parent||n[Mt],a=Ry(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)vb(o,r,e[l],a,!1);else vb(o,r,e,a,!1);wb!==void 0&&wb(o,i,n,e,r)}function us(t,n){if(n!==null){let e=n.type;if(e&3)return Jt(n,t);if(e&4)return xp(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return us(t,i);{let r=t[n.index];return pn(r)?xp(-1,r):Xt(r)}}else{if(e&128)return us(t,n.next);if(e&32)return th(n,t)()||Xt(t[n.index]);{let i=ky(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=di(t[St]);return us(r,i)}else return us(t,n.next)}}}return null}function ky(t,n){if(n!==null){let i=t[St][Mt],r=n.projection;return i.projection[r]}return null}function xp(t,n){let e=He+t+1;if(e<n.length){let i=n[e],r=i[z].firstChild;if(r!==null)return us(i,r)}return n[mi]}function sh(t,n,e,i,r,o,s){for(;e!=null;){let a=i[Wn];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&Yr(Xt(l),i),e.flags|=2),!dc(e))if(c&8)sh(t,n,e.child,i,r,o,!1),Gr(n,t,a,r,l,e,o,i);else if(c&32){let d=th(e,i),f;for(;f=d();)Gr(n,t,a,r,f,e,o,i);Gr(n,t,a,r,l,e,o,i)}else c&16?Ny(t,n,i,e,r,o):Gr(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function gc(t,n,e,i,r,o){sh(e,i,t.firstChild,n,r,o,!1)}function MI(t,n,e){let i=n[Ne],r=Ay(t,e,n),o=e.parent||n[Mt],s=Ry(o,e,n);Ny(i,0,n,e,r,s)}function Ny(t,n,e,i,r,o){let s=e[St],l=s[Mt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Gr(n,t,e[Wn],r,d,i,o,e)}else{let c=l,d=s[Xe];ty(i)&&(c.flags|=128),sh(t,n,c,d,r,o,!0)}}function SI(t,n,e,i,r,o,s){let a=i[mi],l=Xt(i);a!==l&&Gr(n,t,e,o,a,r,s);for(let c=He;c<i.length;c++){let d=i[c];gc(d[z],d,t,n,o,a)}}function TI(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:yn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=yn.Important),t.setStyle(e,i,r,o))}}function Oy(t,n,e,i,r){let o=Nn(),s=i&2;try{gi(-1),s&&n.length>Pe&&Iy(t,n,Pe,!1);let a=s?ge.TemplateUpdateStart:ge.TemplateCreateStart;we(a,r,e),e(i,r)}finally{gi(o);let a=s?ge.TemplateUpdateEnd:ge.TemplateCreateEnd;we(a,r,e)}}function ah(t,n,e){PI(t,n,e),(e.flags&64)===64&&FI(t,n,e)}function vc(t,n,e=Jt){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function AI(t,n,e,i){let o=i.get(cy,ly)||e===bn.ShadowDom||e===bn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return RI(s),s}function RI(t){kI(t)}var kI=()=>null;function NI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function OI(t,n,e,i,r,o){let s=n[z];if(bc(t,s,n,e,i)){Rn(t)&&Fy(n,t.index);return}t.type&3&&(e=NI(e)),Py(t,n,e,i,r,o)}function Py(t,n,e,i,r,o){if(t.type&3){let s=Jt(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function Fy(t,n){let e=en(n,t);e[Q]&16||(e[Q]|=64)}function PI(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Rn(e)&&dI(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Yl(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=ps(n,t,s,e);if(Yr(l,n),o!==null&&jI(n,s-i,l,a,e,o),kn(a)){let c=en(e.index,n);c[We]=ps(n,t,s,e)}}}function FI(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=Yv();try{gi(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];Rl(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&LI(l,c)}}finally{gi(-1),Rl(s)}}function LI(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Ly(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Dy(n,o.selectors,!1)&&(i??=[],kn(o)?i.unshift(o):i.push(o))}return i}function VI(t,n,e,i,r,o){let s=Jt(t,n);Vy(n[Ne],s,o,t.value,e,i,r)}function Vy(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?Yi(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function jI(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];Dp(i,e,l,c)}}function jy(t,n,e,i,r){let o=Pe+e,s=n[z],a=r(s,n,t,i,e);n[o]=a,$r(t,!0);let l=t.type===2;return l?(by(n[Ne],a,t),(Uv()===0||is(t))&&Yr(a,n),Hv()):Yr(a,n),Pl()&&(!l||!dc(t))&&oh(s,n,a,t),t}function By(t){let n=t;return Qf()?Kf():(n=n.parent,$r(n,!1)),n}function BI(t,n){let e=t[Wn];if(!e)return;let i;try{i=e.get(zt,null)}catch{i=null}i?.(n)}function bc(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];Dp(f,e[c],d,r),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];Dp(d,c,i,r),a=!0}return a}function UI(t,n){let e=en(n,t),i=e[z];HI(i,e);let r=e[un];r!==null&&e[Xi]===null&&(e[Xi]=dy(r,e[Wn])),we(ge.ComponentStart);try{lh(i,e,e[We])}finally{we(ge.ComponentEnd,e[We])}}function HI(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function lh(t,n,e){Nl(n);try{let i=t.viewQuery;i!==null&&wp(1,i,e);let r=t.template;r!==null&&Oy(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[An]?.finishViewCreation(t),t.staticContentQueries&&uy(t,n),t.staticViewQueries&&wp(2,t.viewQuery,e);let o=t.components;o!==null&&zI(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[Q]&=-5,Ol()}}function zI(t,n){for(let e=0;e<n.length;e++)UI(t,n[e])}function Ds(t,n,e,i){let r=j(null);try{let o=n.tView,a=t[Q]&4096?4096:16,l=Jp(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[pi]=c;let d=t[An];return d!==null&&(l[An]=d.createEmbeddedView(o)),lh(o,l,e),l}finally{j(r)}}function Qr(t,n){return!n||n.firstChild===null||ty(t)}function ms(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Xt(o)),pn(o)&&Uy(o,i);let s=e.type;if(s&8)ms(t,n,e.child,i);else if(s&32){let a=th(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=ky(n,e);if(Array.isArray(a))i.push(...a);else{let l=di(n[St]);ms(l[z],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function Uy(t,n){for(let e=He;e<t.length;e++){let i=t[e],r=i[z].firstChild;r!==null&&ms(i[z],i,r,n)}t[mi]!==t[un]&&n.push(t[mi])}function Hy(t){if(t[tr]!==null){for(let n of t[tr])n.impl.addSequence(n);t[tr].length=0}}var zy=[];function $I(t){return t[jt]??WI(t)}function WI(t){let n=zy.pop()??Object.create(qI);return n.lView=t,n}function GI(t){t.lView[jt]!==t&&(t.lView=null,zy.push(t))}var qI=X(y({},ri),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{rr(t.lView)},consumerOnSignalRead(){this.lView[jt]=this}});function ZI(t){let n=t[jt]??Object.create(YI);return n.lView=t,n}var YI=X(y({},ri),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=di(t.lView);for(;n&&!$y(n[z]);)n=di(n);n&&Bf(n)},consumerOnSignalRead(){this.lView[jt]=this}});function $y(t){return t.type!==2}function Wy(t){if(t[ci]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[ci])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[Q]&8192)}}var QI=100;function Gy(t,n=0){let i=t[fn].rendererFactory,r=!1;r||i.begin?.();try{KI(t,n)}finally{r||i.end?.()}}function KI(t,n){let e=Xf();try{Zo(!0),Ip(t,n);let i=0;for(;rs(t);){if(i===QI)throw new T(103,!1);i++,Ip(t,1)}}finally{Zo(e)}}function XI(t,n,e,i){if(ir(n))return;let r=n[Q],o=!1,s=!1;Nl(n);let a=!0,l=null,c=null;o||($y(t)?(c=$I(n),l=Bn(c)):Aa()===null?(a=!1,c=ZI(n),l=Bn(c)):n[jt]&&(ai(n[jt]),n[jt]=null));try{jf(n),Gv(t.bindingStartIndex),e!==null&&Oy(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&Ul(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Hl(n,h,0,null),ap(n,0)}if(s||JI(n),Wy(n),qy(n,0),t.contentQueries!==null&&uy(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&Ul(n,h)}else{let h=t.contentHooks;h!==null&&Hl(n,h,1),ap(n,1)}tM(t,n);let f=t.components;f!==null&&Yy(n,f,0);let p=t.viewQuery;if(p!==null&&wp(2,p,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&Ul(n,h)}else{let h=t.viewHooks;h!==null&&Hl(n,h,2),ap(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[xl]){for(let h of n[xl])h();n[xl]=null}o||(Hy(n),n[Q]&=-73)}catch(d){throw o||rr(n),d}finally{c!==null&&(si(c,l),a&&GI(c)),Ol()}}function qy(t,n){for(let e=iy(t);e!==null;e=ry(e))for(let i=He;i<e.length;i++){let r=e[i];Zy(r,n)}}function JI(t){for(let n=iy(t);n!==null;n=ry(n)){if(!(n[Q]&2))continue;let e=n[nr];for(let i=0;i<e.length;i++){let r=e[i];Bf(r)}}}function eM(t,n,e){we(ge.ComponentStart);let i=en(n,t);try{Zy(i,e)}finally{we(ge.ComponentEnd,i[We])}}function Zy(t,n){Sl(t)&&Ip(t,n)}function Ip(t,n){let i=t[z],r=t[Q],o=t[jt],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&Sr(o)),s||=!1,o&&(o.dirty=!1),t[Q]&=-9217,s)XI(i,t,i.template,t[We]);else if(r&8192){let a=j(null);try{Wy(t),qy(t,1);let l=i.components;l!==null&&Yy(t,l,1),Hy(t)}finally{j(a)}}}function Yy(t,n,e){for(let i=0;i<n.length;i++)eM(t,n[i],e)}function tM(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)gi(~r);else{let o=r,s=e[++i],a=e[++i];Zv(s,o);let l=n[o];we(ge.HostBindingsUpdateStart,l);try{a(2,l)}finally{we(ge.HostBindingsUpdateEnd,l)}}}}finally{gi(-1)}}function ch(t,n){let e=Xf()?64:1088;for(t[fn].changeDetectionScheduler?.notify(n);t;){t[Q]|=e;let i=di(t);if(zr(t)&&!i)return t;t=i}return null}function Qy(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Ky(t,n){let e=He+n;if(e<t.length)return t[e]}function Es(t,n,e,i=!0){let r=n[z];if(nM(r,n,t,e),i){let s=xp(e,t),a=n[Ne],l=a.parentNode(t[mi]);l!==null&&yI(r,t[Mt],a,n,l,s)}let o=n[Xi];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Xy(t,n){let e=gs(t,n);return e!==void 0&&mc(e[z],e),e}function gs(t,n){if(t.length<=He)return;let e=He+n,i=t[e];if(i){let r=i[pi];r!==null&&r!==t&&rh(r,i),n>0&&(t[e-1][Kt]=i[Kt]);let o=es(t,He+n);bI(i[z],i);let s=o[An];s!==null&&s.detachView(o[z]),i[Xe]=null,i[Kt]=null,i[Q]&=-129}return i}function nM(t,n,e,i){let r=He+i,o=e.length;i>0&&(e[r-1][Kt]=n),i<o-He?(n[Kt]=e[r],Mf(e,He+i,n)):(e.push(n),n[Kt]=null),n[Xe]=e;let s=n[pi];s!==null&&e!==s&&Jy(s,n);let a=n[An];a!==null&&a.insertView(t),Tl(n),n[Q]|=128}function Jy(t,n){let e=t[nr],i=n[Xe];if(qn(i))t[Q]|=2;else{let r=i[Xe][St];n[St]!==r&&(t[Q]|=2)}e===null?t[nr]=[n]:e.push(n)}var vi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[z];return ms(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[We]}set context(n){this._lView[We]=n}get destroyed(){return ir(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Xe];if(pn(n)){let e=n[ns],i=e?e.indexOf(this):-1;i>-1&&(gs(n,i),es(e,i))}this._attachedToViewContainer=!1}mc(this._lView[z],this._lView)}onDestroy(n){Uf(this._lView,n)}markForCheck(){ch(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Q]&=-129}reattach(){Tl(this._lView),this._lView[Q]|=128}detectChanges(){this._lView[Q]|=1024,Gy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new T(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=zr(this._lView),e=this._lView[pi];e!==null&&!n&&rh(e,this._lView),Ty(this._lView[z],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new T(902,!1);this._appRef=n;let e=zr(this._lView),i=this._lView[pi];i!==null&&!e&&Jy(i,this._lView),Tl(this._lView)}};var yt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=iM;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Ds(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new vi(o)}}return t})();function iM(){return yc(bt(),W())}function yc(t,n){return t.type&4?new yt(n,t,Jr(t,n)):null}function to(t,n,e,i,r){let o=t.data[n];if(o===null)o=rM(t,n,e,i,r),qv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=zv();o.injectorIndex=s===null?-1:s.injectorIndex}return $r(o,!0),o}function rM(t,n,e,i,r){let o=Yf(),s=Qf(),a=s?o:o&&o.parent,l=t.data[n]=sM(t,a,e,n,i,r);return oM(t,l,o,s),l}function oM(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function sM(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Gf()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function aM(t){let n=t[Pf]??[],i=t[Xe][Ne],r=[];for(let o of n)o.data[ay]!==void 0?r.push(o):lM(o,i);t[Pf]=r}function lM(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[sy];for(;e<r;){let o=i.nextSibling;vy(n,i,!1),i=o,e++}}}var cM=()=>null,dM=()=>null;function Xl(t,n){return cM(t,n)}function e_(t,n,e){return dM(t,n,e)}var t_=class{},_c=class{},Mp=class{resolveComponentFactory(n){throw new T(917,!1)}},xs=class{static NULL=new Mp},Qe=class{},Ae=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>uM()}return t})();function uM(){let t=W(),n=bt(),e=en(n.index,t);return(qn(e)?e:t)[Ne]}var n_=(()=>{class t{static \u0275prov=C({token:t,providedIn:"root",factory:()=>null})}return t})();var $l={},Sp=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,$l,i);return r!==$l||e===$l?r:this.parentInjector.get(n,e,i)}};function Jl(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=bl(r,a);else if(o==2){let l=a,c=n[++s];i=bl(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function F(t,n=0){let e=W();if(e===null)return H(t,n);let i=bt();return Kb(i,e,ut(t),n)}function i_(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}hM(t,n,e,a,o,l,c)}o!==null&&i!==null&&fM(e,i,o)}function fM(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new T(-301,!1);i.push(n[r],o)}}function pM(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function hM(t,n,e,i,r,o,s){let a=i.length,l=null;for(let p=0;p<a;p++){let h=i[p];l===null&&kn(h)&&(l=h,pM(t,e,p)),yp(Yl(e,n),t,h.type)}_M(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<a;p++){let h=i[p];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,f=xy(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let p=0;p<a;p++){let h=i[p];if(e.mergedAttrs=Zr(e.mergedAttrs,h.hostAttrs),gM(t,e,n,f,h),yM(f,h,r),s!==null&&s.has(h)){let[x,A]=s.get(h);e.directiveToIndex.set(h.type,[f,x+e.directiveStart,A+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let g=h.type.prototype;!c&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(g.ngOnChanges||g.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}mM(t,e,o)}function mM(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Db(0,n,r,i),Db(1,n,r,i),xb(n,i,!1);else{let o=e.get(r);Eb(0,n,o,i),Eb(1,n,o,i),xb(n,i,!0)}}}function Db(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),r_(n,o)}}function Eb(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),r_(n,s)}}function r_(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function xb(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Kp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function gM(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=li(r.type,!0)),s=new sr(o,kn(r),F,null);t.blueprint[i]=s,e[i]=s,vM(t,n,i,xy(t,e,r.hostVars,_t),r)}function vM(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;bM(s)!=a&&s.push(a),s.push(e,i,o)}}function bM(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function yM(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;kn(n)&&(e[""]=t)}}function _M(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function o_(t,n,e,i,r,o,s,a){let l=n[z],c=l.consts,d=Bt(c,s),f=to(l,t,e,i,d);return o&&i_(l,n,f,Bt(c,a),r),f.mergedAttrs=Zr(f.mergedAttrs,f.attrs),f.attrs!==null&&Jl(f,f.attrs,!1),f.mergedAttrs!==null&&Jl(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function s_(t,n){Hb(t,n),Ff(n)&&t.queries.elementEnd(n)}function CM(t,n,e,i,r,o){let s=n.consts,a=Bt(s,r),l=to(n,t,e,i,a);if(l.mergedAttrs=Zr(l.mergedAttrs,l.attrs),o!=null){let c=Bt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Jl(l,l.attrs,!1),l.mergedAttrs!==null&&Jl(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function dh(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function uh(t,n,e){return t[n]=e}function wM(t,n){return t[n]}function $t(t,n,e){if(e===_t)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function a_(t,n,e,i){let r=$t(t,n,e);return $t(t,n+1,i)||r}function dp(t,n,e){return function i(r){let o=Rn(t)?en(t.index,n):n;ch(o,5);let s=n[We],a=Ib(n,s,e,r),l=i.__ngNextListenerFn__;for(;l;)a=Ib(n,s,l,r)&&a,l=l.__ngNextListenerFn__;return a}}function Ib(t,n,e,i){let r=j(null);try{return we(ge.OutputStart,n,e),e(i)!==!1}catch(o){return BI(t,o),!1}finally{we(ge.OutputEnd,n,e),j(r)}}function DM(t,n,e,i,r,o,s,a){let l=is(t),c=!1,d=null;if(!i&&l&&(d=xM(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=Jt(t,e),p=i?i(f):f;Bx(e,p,o,a);let h=r.listen(p,o,a);if(!EM(o)){let g=i?x=>i(Xt(x[t.index])):t.index;l_(g,n,e,o,a,h,!1)}}return c}function EM(t){return t.startsWith("animation")||t.startsWith("transition")}function xM(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Ur],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function l_(t,n,e,i,r,o,s){let a=n.firstCreatePass?zf(n):null,l=Hf(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function Mb(t,n,e,i,r,o){let s=n[e],a=n[z],c=a.data[e].outputs[i],f=s[c].subscribe(o);l_(t.index,a,n,r,o,f,!0)}var Tp=Symbol("BINDING");function c_(t){return t.debugInfo?.className||t.type.name||null}var ec=class extends xs{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=$n(n);return new lr(e,this.ngModule)}};function IM(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&fc.SignalBased)!==0};return r&&(o.transform=r),o})}function MM(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function SM(t,n,e){let i=n instanceof be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Sp(e,i):e}function TM(t){let n=t.get(Qe,null);if(n===null)throw new T(407,!1);let e=t.get(n_,null),i=t.get(Tn,null),r=t.get(_n,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function AM(t,n){let e=d_(t);return my(n,e,e==="svg"?Ov:e==="math"?Pv:null)}function d_(t){return(t.selectors[0][0]||"div").toLowerCase()}var lr=class extends _c{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=IM(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=MM(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=sI(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){we(ge.DynamicComponentStart);let a=j(null);try{let l=this.componentDef,c=SM(l,r||this.ngModule,n),d=TM(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(c_(l),()=>this.createComponentRef(d,c,e,i,o,s)):this.createComponentRef(d,c,e,i,o,s)}finally{j(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=RM(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=r?AI(c,r,a.encapsulation,e):AM(a,c),f=s?.some(Sb)||o?.some(g=>typeof g!="function"&&g.bindings.some(Sb)),p=Jp(null,l,null,512|Ey(a),null,null,n,c,e,null,dy(d,e,!0));p[Pe]=d,Nl(p);let h=null;try{let g=o_(Pe,p,2,"#host",()=>l.directiveRegistry,!0,0);by(c,d,g),Yr(d,p),ah(l,p,g),fy(l,g,p),s_(l,g),i!==void 0&&NM(g,this.ngContentSelectors,i),h=en(g.index,p),p[We]=h[We],lh(l,p,null)}catch(g){throw h!==null&&Cp(h),Cp(p),g}finally{we(ge.DynamicComponentEnd),Ol()}return new tc(this.componentType,p,!!f)}};function RM(t,n,e,i){let r=t?["ng-version","21.2.10"]:aI(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Tp].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let p of f.bindings){a+=p[Tp].requiredVars;let h=d+1;p.create&&(p.targetIdx=h,(o??=[]).push(p)),p.update&&(p.targetIdx=h,(s??=[]).push(p))}}let l=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,p=Ef(f);l.push(p)}return Xp(0,null,kM(o,s),1,a,l,null,null,null,[r],null)}function kM(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Sb(t){let n=t[Tp].kind;return n==="input"||n==="twoWay"}var tc=class extends t_{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Il(e[z],Pe),this.location=Jr(this._tNode,e),this.instance=en(this._tNode.index,e)[We],this.hostView=this.changeDetectorRef=new vi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=bc(i,r[z],r,n,e);this.previousInputValues.set(n,e);let s=en(i.index,r);ch(s,1)}get injector(){return new or(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function NM(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ft=(()=>{class t{static __NG_ELEMENT_ID__=OM}return t})();function OM(){let t=bt();return u_(t,W())}var Ap=class t extends ft{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Jr(this._hostTNode,this._hostLView)}get injector(){return new or(this._hostTNode,this._hostLView)}get parentInjector(){let n=Gp(this._hostTNode,this._hostLView);if(Wb(n)){let e=ql(n,this._hostLView),i=Gl(n),r=e[z].data[i+8];return new or(r,e)}else return new or(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Tb(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-He}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Xl(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Qr(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!px(n),c;if(l)c=e;else{let A=e||{};c=A.index,i=A.injector,r=A.projectableNodes,o=A.environmentInjector||A.ngModuleRef,s=A.directives,a=A.bindings}let d=l?n:new lr($n(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let P=(l?f:this.parentInjector).get(be,null);P&&(o=P)}let p=$n(d.componentType??{}),h=Xl(this._lContainer,p?.id??null),g=h?.firstChild??null,x=d.create(f,r,g,o,s,a);return this.insertImpl(x.hostView,c,Qr(this._hostTNode,h)),x}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Lv(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[Xe],c=new t(l,l[Mt],l[Xe]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Es(s,r,o,i),n.attachToViewContainerRef(),Mf(up(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Tb(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=gs(this._lContainer,e);i&&(es(up(this._lContainer),e),mc(i[z],i))}detach(n){let e=this._adjustIndex(n,-1),i=gs(this._lContainer,e);return i&&es(up(this._lContainer),e)!=null?new vi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Tb(t){return t[ns]}function up(t){return t[ns]||(t[ns]=[])}function u_(t,n){let e,i=n[t.index];return pn(i)?e=i:(e=Qy(i,n,null,t),n[t.index]=e,eh(n,e)),FM(e,n,t,i),new Ap(e,t,n)}function PM(t,n){let e=t[Ne],i=e.createComment(""),r=Jt(n,t),o=e.parentNode(r);return Kl(e,o,i,e.nextSibling(r),!1),i}var FM=jM,LM=()=>!1;function VM(t,n,e){return LM(t,n,e)}function jM(t,n,e,i){if(t[mi])return;let r;e.type&8?r=Xt(i):r=PM(n,e),t[mi]=r}var Rp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},kp=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)ph(n,e).matches!==null&&this.queries[e].setDirty()}},nc=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=$M(n):this.predicate=n}},Np=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Op=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,BM(e,o)),this.matchTNodeWithReadOption(n,e,zl(e,n,o,!1,!1))}else i===yt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,zl(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===ft||r===yt&&e.type&4)this.addMatch(e.index,-2);else{let o=zl(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function BM(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function UM(t,n){return t.type&11?Jr(t,n):t.type&4?yc(t,n):null}function HM(t,n,e,i){return e===-1?UM(n,t):e===-2?zM(t,n,i):ps(t,t[z],e,n)}function zM(t,n,e){if(e===V)return Jr(n,t);if(e===yt)return yc(n,t);if(e===ft)return u_(n,t)}function f_(t,n,e,i){let r=n[An].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(HM(n,d,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function Pp(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=f_(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=He;f<d.length;f++){let p=d[f];p[pi]===p[Xe]&&Pp(p[z],p,c,i)}if(d[nr]!==null){let f=d[nr];for(let p=0;p<f.length;p++){let h=f[p];Pp(h[z],h,c,i)}}}}}return i}function fh(t,n){return t[An].queries[n].queryList}function p_(t,n,e){let i=new vn((e&4)===4);return Bv(t,n,i,i.destroy),(n[An]??=new kp).queries.push(new Rp(i))-1}function h_(t,n,e){let i=je();return i.firstCreatePass&&(g_(i,new nc(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),p_(i,W(),n)}function m_(t,n,e,i){let r=je();if(r.firstCreatePass){let o=bt();g_(r,new nc(n,e,i),o.index),WM(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return p_(r,W(),e)}function $M(t){return t.split(",").map(n=>n.trim())}function g_(t,n,e){t.queries===null&&(t.queries=new Np),t.queries.track(new Op(n,e))}function WM(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function ph(t,n){return t.queries.getByIndex(n)}function v_(t,n){let e=t[z],i=ph(e,n);return i.crossesNgTemplate?Pp(e,t,n,[]):f_(e,t,i,n)}function b_(t,n,e){let i,r=Lo(()=>{i._dirtyCounter();let o=GM(i,t);if(n&&o===void 0)throw new T(-951,!1);return o});return i=r[$e],i._dirtyCounter=U(0),i._flatValue=void 0,r}function hh(t){return b_(!0,!1,t)}function mh(t){return b_(!0,!0,t)}function y_(t,n){let e=t[$e];e._lView=W(),e._queryIndex=n,e._queryList=fh(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function GM(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[Q]&4)return n?void 0:vt;let r=fh(e,i),o=v_(e,i);return r.reset(o,ey),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Pn=class{},Cc=class{};var ic=class extends Pn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new ec(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Df(n);this._bootstrapComponents=Cy(o.bootstrap),this._r3Injector=tp(n,e,[{provide:Pn,useValue:this},{provide:xs,useValue:this.componentFactoryResolver},...i],Xo(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},rc=class extends Cc{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new ic(this.moduleType,n,[])}};var vs=class extends Pn{injector;componentFactoryResolver=new ec(this);instance=null;constructor(n){super();let e=new qi([...n.providers,{provide:Pn,useValue:this},{provide:xs,useValue:this.componentFactoryResolver}],n.parent||Br(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Is(t,n,e=null){return new vs({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var qM=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Af(!1,e.type),r=i.length>0?Is([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=C({token:t,providedIn:"environment",factory:()=>new t(H(be))})}return t})();function D(t){return ys(()=>{let n=__(t),e=X(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===qp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(qM).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||bn.Emulated,styles:t.styles||vt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&bi("NgStandalone"),C_(e);let i=t.dependencies;return e.directiveDefs=Ab(i,ZM),e.pipeDefs=Ab(i,yv),e.id=KM(e),e})}function ZM(t){return $n(t)||Ef(t)}function de(t){return ys(()=>({type:t.type,bootstrap:t.bootstrap||vt,declarations:t.declarations||vt,imports:t.imports||vt,exports:t.exports||vt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function YM(t,n){if(t==null)return fi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=fc.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function QM(t){if(t==null)return fi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function L(t){return ys(()=>{let n=__(t);return C_(n),n})}function gh(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function __(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||fi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||vt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:YM(t.inputs,n),outputs:QM(t.outputs),debugInfo:null}}function C_(t){t.features?.forEach(n=>n(t))}function Ab(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function KM(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function XM(t){return Object.getPrototypeOf(t.prototype).constructor}function De(t){let n=XM(t.type),e=!0,i=[t];for(;n;){let r;if(kn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new T(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let s=t;s.inputs=fp(t.inputs),s.declaredInputs=fp(t.declaredInputs),s.outputs=fp(t.outputs);let a=r.hostBindings;a&&iS(t,a);let l=r.viewQuery,c=r.contentQueries;if(l&&tS(t,l),c&&nS(t,c),JM(t,r),bv(t.outputs,r.outputs),kn(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===De&&(e=!1)}}n=Object.getPrototypeOf(n)}eS(i)}function JM(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function eS(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Zr(r.hostAttrs,e=Zr(e,r.hostAttrs))}}function fp(t){return t===fi?{}:t===vt?[]:t}function tS(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function nS(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function iS(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function w_(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Zr(t.mergedAttrs,t.attrs);let d=t.tView=Xp(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),$r(t,!1);let l=oS(e,n,t,i);Pl()&&oh(e,n,l,t),Yr(l,n);let c=Qy(l,n,l,t);n[i+Pe]=c,eh(n,c),VM(c,t,n)}function rS(t,n,e,i,r,o,s,a,l,c,d){let f=e+Pe,p;return n.firstCreatePass?(p=to(n,f,4,s||null,a||null),Wf()&&i_(n,t,p,Bt(n.consts,c),Ly),Hb(n,p)):p=n.data[f],w_(p,t,n,e,i,r,o,l),is(p)&&ah(n,t,p),c!=null&&vc(t,p,d),p}function Kr(t,n,e,i,r,o,s,a,l,c,d){let f=e+Pe,p;if(n.firstCreatePass){if(p=to(n,f,4,s||null,a||null),c!=null){let h=Bt(n.consts,c);p.localNames=[];for(let g=0;g<h.length;g+=2)p.localNames.push(h[g],-1)}}else p=n.data[f];return w_(p,t,n,e,i,r,o,l),c!=null&&vc(t,p,d),p}function At(t,n,e,i,r,o,s,a){let l=W(),c=je(),d=Bt(c.consts,o);return rS(l,c,t,n,e,i,r,d,void 0,s,a),At}function no(t,n,e,i,r,o,s,a){let l=W(),c=je(),d=Bt(c.consts,o);return Kr(l,c,t,n,e,i,r,d,void 0,s,a),no}var oS=sS;function sS(t,n,e,i){return Fl(!0),n[Ne].createComment("")}var vh=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Qn(t){return typeof t=="function"&&t[$e]!==void 0}var bh=new _("");function yi(t){return!!t&&typeof t.then=="function"}function yh(t){return!!t&&typeof t.subscribe=="function"}var D_=new _("");var _h=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(D_,{optional:!0})??[];injector=u(oe);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=at(this.injector,r);if(yi(o))e.push(o);else if(yh(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wc=new _("");function E_(){Lu(()=>{let t="";throw new T(600,t)})}function x_(t){return t.isBoundToModule}var aS=10;var tn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(zt);afterRenderManager=u(hc);zonelessEnabled=u(ls);rootEffectScheduler=u(Vl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new I;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Yn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(J(e=>!e))}constructor(){u(_n,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=oe.NULL){return this._injector.get(N).run(()=>{we(ge.BootstrapComponentStart);let s=e instanceof _c;if(!this._injector.get(_h).done){let g="";throw new T(405,g)}let l;s?l=e:l=this._injector.get(xs).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=x_(l)?void 0:this._injector.get(Pn),d=i||l.selector,f=l.create(r,[],d,c),p=f.location.nativeElement,h=f.injector.get(bh,null);return h?.registerApplication(p),f.onDestroy(()=>{this.detachView(f.hostView),fs(this.components,f),h?.unregisterApplication(p)}),this._loadComponent(f),we(ge.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){we(ge.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(pc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw we(ge.ChangeDetectionEnd),new T(101,!1);let e=j(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,j(e),this.afterTick.next(),we(ge.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Qe,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<aS;){we(ge.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{we(ge.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!rs(r))continue;let o=i&&!this.zonelessEnabled?0:1;Gy(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>rs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;fs(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(wc,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>fs(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new T(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fs(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Dc(t,n){let e=W(),i=Zn();if($t(e,i,n)){let r=je(),o=as();if(bc(o,r,e,t,n))Rn(o)&&Fy(e,o.index);else{let a=Jt(o,e);Vy(e[Ne],a,null,o.value,t,n,null)}}return Dc}function Ie(t,n,e,i){let r=W(),o=Zn();if($t(r,o,n)){let s=je(),a=as();VI(a,r,t,n,e,i)}return Ie}var Fp=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function pp(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function lS(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){j(i);let c=n.length-1;for(j(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],p=pp(s,d,s,f,e);if(p!==0){p<0&&t.updateValue(s,f),s++;continue}let h=t.at(a),g=n[c],x=pp(a,h,c,g,e);if(x!==0){x<0&&t.updateValue(a,g),a--,c--;continue}let A=e(s,d),P=e(a,h),ve=e(s,f);if(Object.is(ve,P)){let rt=e(c,g);Object.is(rt,A)?(t.swap(s,a),t.updateValue(a,g),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new oc,o??=kb(t,s,a,e),Lp(t,r,s,ve))t.updateValue(s,f),s++,a++;else if(o.has(ve))r.set(A,t.detach(s)),a--;else{let rt=t.create(s,n[s]);t.attach(s,rt),s++,a++}}for(;s<=c;)Rb(t,r,e,s,n[s]),s++}else if(n!=null){j(i);let c=n[Symbol.iterator]();j(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),p=d.value,h=pp(s,f,s,p,e);if(h!==0)h<0&&t.updateValue(s,p),s++,d=c.next();else{r??=new oc,o??=kb(t,s,a,e);let g=e(s,p);if(Lp(t,r,s,g))t.updateValue(s,p),s++,a++,d=c.next();else if(!o.has(g))t.attach(s,t.create(s,p)),s++,a++,d=c.next();else{let x=e(s,f);r.set(x,t.detach(s)),a--}}}for(;!d.done;)Rb(t,r,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function Lp(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Rb(t,n,e,i,r){if(Lp(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function kb(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var oc=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function M(t,n,e,i,r,o,s,a){bi("NgControlFlow");let l=W(),c=je(),d=Bt(c.consts,o);return Kr(l,c,t,n,e,i,r,d,256,s,a),Ch}function Ch(t,n,e,i,r,o,s,a){bi("NgControlFlow");let l=W(),c=je(),d=Bt(c.consts,o);return Kr(l,c,t,n,e,i,r,d,512,s,a),Ch}function S(t,n){bi("NgControlFlow");let e=W(),i=Zn(),r=e[i]!==_t?e[i]:-1,o=r!==-1?sc(e,Pe+r):void 0,s=0;if($t(e,i,t)){let a=j(null);try{if(o!==void 0&&Xy(o,s),t!==-1){let l=Pe+t,c=sc(e,l),d=Up(e[z],l),f=e_(c,d,e),p=Ds(e,d,n,{dehydratedView:f});Es(c,p,s,Qr(d,f))}}finally{j(a)}}else if(o!==void 0){let a=Ky(o,s);a!==void 0&&(a[We]=n)}}var Vp=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-He}};function Ot(t){return t}function Ec(t,n){return n}var jp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function Fe(t,n,e,i,r,o,s,a,l,c,d,f,p){bi("NgControlFlow");let h=W(),g=je(),x=l!==void 0,A=W(),P=a?s.bind(A[St][We]):s,ve=new jp(x,P);A[Pe+t]=ve,Kr(h,g,t+1,n,e,i,r,Bt(g.consts,o),256),x&&Kr(h,g,t+2,l,c,d,f,Bt(g.consts,p),512)}var Bp=class extends Fp{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-He}at(n){return this.getLView(n)[We].$implicit}attach(n,e){let i=e[Xi];this.needsIndexUpdate||=n!==this.length,Es(this.lContainer,e,n,Qr(this.templateTNode,i)),cS(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,dS(this.lContainer,n),uS(this.lContainer,n)}create(n,e){let i=Xl(this.lContainer,this.templateTNode.tView.ssrId);return Ds(this.hostLView,this.templateTNode,new Vp(this.lContainer,e,n),{dehydratedView:i})}destroy(n){mc(n[z],n)}updateValue(n,e){this.getLView(n)[We].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[We].$index=n}getLView(n){return fS(this.lContainer,n)}};function Le(t){let n=j(null),e=Nn();try{let i=W(),r=i[z],o=i[e],s=e+1,a=sc(i,s);if(o.liveCollection===void 0){let c=Up(r,s);o.liveCollection=new Bp(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(lS(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Zn(),d=l.length===0;if($t(i,c,d)){let f=e+2,p=sc(i,f);if(d){let h=Up(r,f),g=e_(p,h,i),x=Ds(i,h,void 0,{dehydratedView:g});Es(p,x,0,Qr(h,g))}else r.firstUpdatePass&&aM(p),Xy(p,0)}}}finally{j(n)}}function sc(t,n){return t[n]}function cS(t,n){if(t.length<=He)return;let e=He+n,i=t[e],r=i?i[hi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Wn];gI(o,r),ar.delete(i[Gn]),r.detachedLeaveAnimationFns=void 0}}function dS(t,n){if(t.length<=He)return;let e=He+n,i=t[e],r=i?i[hi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function uS(t,n){return gs(t,n)}function fS(t,n){return Ky(t,n)}function Up(t,n){return Il(t,n)}function O(t,n,e){let i=W(),r=Zn();if($t(i,r,n)){let o=je(),s=as();OI(s,i,t,n,i[Ne],e)}return O}function Hp(t,n,e,i,r){bc(n,t,e,r?"class":"style",i)}function b(t,n,e,i){let r=W(),o=r[z],s=t+Pe,a=o.firstCreatePass?o_(s,r,2,n,Ly,Wf(),e,i):o.data[s];if(Rn(a)){let l=r[fn].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(c_(c),()=>(Nb(t,n,r,a,i),b))}}return Nb(t,n,r,a,i),b}function Nb(t,n,e,i,r){if(jy(i,e,t,n,I_),is(i)){let o=e[z];ah(o,e,i),fy(o,i,e)}r!=null&&vc(e,i)}function v(){let t=je(),n=bt(),e=By(n);return t.firstCreatePass&&s_(t,e),qf(e)&&Zf(),$f(),e.classesWithoutHost!=null&&yx(e)&&Hp(t,e,W(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&_x(e)&&Hp(t,e,W(),e.stylesWithoutHost,!1),v}function k(t,n,e,i){return b(t,n,e,i),v(),k}function ae(t,n,e,i){let r=W(),o=r[z],s=t+Pe,a=o.firstCreatePass?CM(s,o,2,n,e,i):o.data[s];return jy(a,r,t,n,I_),i!=null&&vc(r,a),ae}function ue(){let t=bt(),n=By(t);return qf(n)&&Zf(),$f(),ue}function ze(t,n,e,i){return ae(t,n,e,i),ue(),ze}var I_=(t,n,e,i,r)=>(Fl(!0),my(n[Ne],i,tb()));function Kn(){return W()}function pt(t,n,e){let i=W(),r=Zn();if($t(i,r,n)){let o=je(),s=as();Py(s,i,t,n,i[Ne],e)}return pt}var Ms="en-US";var pS=Ms;function M_(t){typeof t=="string"&&(pS=t.toLowerCase().replace(/_/g,"-"))}function pe(t,n,e){let i=W(),r=je(),o=bt();return hS(r,i,i[Ne],o,t,n,e),pe}function hS(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=dp(i,n,o),DM(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let p=d[f],h=d[f+1];l??=dp(i,n,o),Mb(i,n,p,h,r,l)}if(c&&c.length)for(let f of c)l??=dp(i,n,o),Mb(i,n,f,r,r,l)}}function E(t=1){return eb(t)}function mS(t,n){let e=null,i=tI(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Dy(t,o,!0):rI(i,o))return r}return e}function Se(t){let n=W()[St][Mt];if(!n.projection){let e=t?t.length:1,i=n.projection=xv(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?mS(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function K(t,n=0,e,i,r,o){let s=W(),a=je(),l=i?t+1:null;l!==null&&Kr(s,a,l,i,r,o,null,e);let c=to(a,Pe+t,16,null,e||null);c.projection===null&&(c.projection=n),Kf();let f=!s[Xi]||Gf();s[St][Mt].projection[c.projection]===null&&l!==null?gS(s,a,l):f&&!dc(c)&&MI(a,s,c)}function gS(t,n,e){let i=Pe+e,r=n.data[i],o=t[i],s=Xl(o,r.tView.ssrId),a=Ds(t,r,void 0,{dehydratedView:s});Es(o,a,0,Qr(r,s))}function Pt(t,n,e,i){return m_(t,n,e,i),Pt}function Ke(t,n,e){return h_(t,n,e),Ke}function G(t){let n=W(),e=je(),i=kl();ss(i+1);let r=ph(e,i);if(t.dirty&&Fv(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=v_(n,i);t.reset(o,ey),t.notifyOnChanges()}return!0}return!1}function q(){return fh(W(),kl())}function xc(t,n,e,i,r){return y_(n,m_(t,e,i,r)),xc}function Ic(t,n,e,i){return y_(t,h_(n,e,i)),Ic}function Mc(t=1){ss(kl()+t)}function Cn(t){let n=$v();return Ml(n,Pe+t)}function Bl(t,n){return t<<17|n<<2}function cr(t){return t>>17&32767}function vS(t){return(t&2)==2}function bS(t,n){return t&131071|n<<17}function zp(t){return t|2}function Xr(t){return(t&131068)>>2}function hp(t,n){return t&-131069|n<<2}function yS(t){return(t&1)===1}function $p(t){return t|1}function _S(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=cr(s),l=Xr(s);t[i]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||jr(f,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let p=cr(t[a+1]);t[i+1]=Bl(p,a),p!==0&&(t[p+1]=hp(t[p+1],i)),t[a+1]=bS(t[a+1],i)}else t[i+1]=Bl(a,0),a!==0&&(t[a+1]=hp(t[a+1],i)),a=i;else t[i+1]=Bl(l,0),a===0?a=i:t[l+1]=hp(t[l+1],i),l=i;c&&(t[i+1]=zp(t[i+1])),Ob(t,d,i,!0),Ob(t,d,i,!1),CS(n,d,t,i,o),s=Bl(a,l),o?n.classBindings=s:n.styleBindings=s}function CS(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&jr(o,n)>=0&&(e[i+1]=$p(e[i+1]))}function Ob(t,n,e,i){let r=t[e+1],o=n===null,s=i?cr(r):Xr(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];wS(l,n)&&(a=!0,t[s+1]=i?$p(c):zp(c)),s=i?cr(c):Xr(c)}a&&(t[e+1]=i?zp(r):$p(r))}function wS(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?jr(t,n)>=0:!1}var gn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function DS(t){return t.substring(gn.key,gn.keyEnd)}function ES(t){return xS(t),S_(t,T_(t,0,gn.textEnd))}function S_(t,n){let e=gn.textEnd;return e===n?-1:(n=gn.keyEnd=IS(t,gn.key=n,e),T_(t,n,e))}function xS(t){gn.key=0,gn.keyEnd=0,gn.value=0,gn.valueEnd=0,gn.textEnd=t.length}function T_(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function IS(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Xn(t,n,e){return A_(t,n,e,!1),Xn}function Z(t,n){return A_(t,n,null,!0),Z}function nn(t){SS(OS,MS,t,!0)}function MS(t,n){for(let e=ES(n);e>=0;e=S_(n,e))Dl(t,DS(n),!0)}function A_(t,n,e,i){let r=W(),o=je(),s=Al(2);if(o.firstUpdatePass&&k_(o,t,s,i),n!==_t&&$t(r,s,n)){let a=o.data[Nn()];N_(o,a,r,r[Ne],t,r[s+1]=FS(n,e),i,s)}}function SS(t,n,e,i){let r=je(),o=Al(2);r.firstUpdatePass&&k_(r,null,o,i);let s=W();if(e!==_t&&$t(s,o,e)){let a=r.data[Nn()];if(O_(a,i)&&!R_(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=bl(l,e||"")),Hp(r,a,s,e,i)}else PS(r,a,s,s[Ne],s[o+1],s[o+1]=NS(t,n,e),i,o)}}function R_(t,n){return n>=t.expandoStartIndex}function k_(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Nn()],s=R_(t,e);O_(o,i)&&n===null&&!s&&(n=!1),n=TS(r,o,n,i),_S(r,o,n,e,s,i)}}function TS(t,n,e,i){let r=Qv(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=mp(null,t,n,e,i),e=bs(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=mp(r,t,n,e,i),o===null){let l=AS(t,n,i);l!==void 0&&Array.isArray(l)&&(l=mp(null,t,n,l[1],i),l=bs(l,n.attrs,i),RS(t,n,i,l))}else o=kS(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function AS(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Xr(i)!==0)return t[cr(i)]}function RS(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[cr(r)]=i}function kS(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=bs(i,s,e)}return bs(i,n.attrs,e)}function mp(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=bs(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function bs(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Dl(t,s,e?!0:n[++o]))}return t===void 0?null:t}function NS(t,n,e){if(e==null||e==="")return vt;let i=[],r=ws(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function OS(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Dl(t,i,e)}function PS(t,n,e,i,r,o,s,a){r===_t&&(r=vt);let l=0,c=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let p=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,g=null,x;d===f?(l+=2,c+=2,p!==h&&(g=f,x=h)):f===null||d!==null&&d<f?(l+=2,g=d):(c+=2,g=f,x=h),g!==null&&N_(t,n,e,i,g,x,s,a),d=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function N_(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=yS(c)?Pb(l,n,e,r,Xr(c),s):void 0;if(!ac(d)){ac(o)||vS(c)&&(o=Pb(l,null,e,r,a,s));let f=Lf(Nn(),e);TI(i,s,f,r,o)}}function Pb(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,f=d===null,p=e[r+1];p===_t&&(p=f?vt:void 0);let h=f?El(p,i):d===i?p:void 0;if(c&&!ac(h)&&(h=El(l,i)),ac(h)&&(a=h,s))return a;let g=t[r+1];r=s?cr(g):Xr(g)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=El(l,i))}return a}function ac(t){return t!==void 0}function FS(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Xo(ws(t)))),t}function O_(t,n){return(t.flags&(n?8:16))!==0}function w(t,n=""){let e=W(),i=je(),r=t+Pe,o=i.firstCreatePass?to(i,r,1,n,null):i.data[r],s=LS(i,e,o,n);e[r]=s,Pl()&&oh(i,e,s,o),$r(o,!1)}var LS=(t,n,e,i)=>(Fl(!0),$x(n[Ne],i));function VS(t,n,e,i=""){return $t(t,Zn(),e)?n+Yi(e)+i:_t}function jS(t,n,e,i,r,o=""){let s=Wv(),a=a_(t,s,e,r);return Al(2),a?n+Yi(e)+i+Yi(r)+o:_t}function Te(t){return Me("",t),Te}function Me(t,n,e){let i=W(),r=VS(i,t,n,e);return r!==_t&&P_(i,Nn(),r),Me}function Sc(t,n,e,i,r){let o=W(),s=jS(o,t,n,e,i,r);return s!==_t&&P_(o,Nn(),s),Sc}function P_(t,n,e){let i=Lf(n,t);Wx(t[Ne],i,e)}function Tc(t){return $t(W(),Zn(),t)?Yi(t):_t}function Fb(t,n,e){let i=je();i.firstCreatePass&&F_(n,i.data,i.blueprint,kn(t),e)}function F_(t,n,e,i,r){if(t=ut(t),Array.isArray(t))for(let o=0;o<t.length;o++)F_(t[o],n,e,i,r);else{let o=je(),s=W(),a=bt(),l=Gi(t)?t:ut(t.provide),c=kf(t),d=a.providerIndexes&1048575,f=a.directiveStart,p=a.providerIndexes>>20;if(Gi(t)||!t.multi){let h=new sr(c,r,F,null),g=vp(l,n,r?d:d+p,f);g===-1?(yp(Yl(a,s),o,l),gp(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[g]=h,s[g]=h)}else{let h=vp(l,n,d+p,f),g=vp(l,n,d,d+p),x=h>=0&&e[h],A=g>=0&&e[g];if(r&&!A||!r&&!x){yp(Yl(a,s),o,l);let P=HS(r?US:BS,e.length,r,i,c,t);!r&&A&&(e[g].providerFactory=P),gp(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(P),s.push(P)}else{let P=L_(e[r?g:h],c,!r&&i);gp(o,t,h>-1?h:g,P)}!r&&i&&A&&e[g].componentProviders++}}}function gp(t,n,e,i){let r=Gi(n),o=Rv(n);if(r||o){let l=(o?ut(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function L_(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function vp(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function BS(t,n,e,i,r){return Wp(this.multi,[])}function US(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=ps(i,i[z],this.providerFactory.index,r);s=l.slice(0,a),Wp(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Wp(o,s);return s}function Wp(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function HS(t,n,e,i,r,o){let s=new sr(t,e,F,null);return s.multi=[],s.index=n,s.componentProviders=0,L_(s,r,i&&!e),s}function Re(t,n){return e=>{e.providersResolver=(i,r)=>Fb(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Fb(i,r?r(n):n,!0))}}function Ac(t,n){let e=os()+t,i=W();return i[e]===_t?uh(i,e,n()):wM(i,e)}function Ct(t,n,e){return j_(W(),os(),t,n,e)}function V_(t,n){let e=t[n];return e===_t?void 0:e}function j_(t,n,e,i,r,o){let s=n+e;return $t(t,s,r)?uh(t,s+1,o?i.call(o,r):i(r)):V_(t,s+1)}function zS(t,n,e,i,r,o,s){let a=n+e;return a_(t,a,r,o)?uh(t,a+2,s?i.call(s,r,o):i(r,o)):V_(t,a+2)}function fr(t,n){let e=je(),i,r=t+Pe;e.firstCreatePass?(i=$S(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=li(i.type,!0)),s,a=It(F);try{let l=Zl(!1),c=o();return Zl(l),Vf(e,W(),r,c),c}finally{It(a)}}function $S(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function wh(t,n,e){let i=t+Pe,r=W(),o=Ml(r,i);return B_(r,i)?j_(r,os(),n,o.transform,e,o):o.transform(e)}function Ss(t,n,e,i){let r=t+Pe,o=W(),s=Ml(o,r);return B_(o,r)?zS(o,os(),n,s.transform,e,i,s):s.transform(e,i)}function B_(t,n){return t[z].data[n].pure}function Dh(t,n){return yc(t,n)}var lc=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Eh=(()=>{class t{compileModuleSync(e){return new rc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Df(e),o=Cy(r.declarations).reduce((s,a)=>{let l=$n(a);return l&&s.push(new lr(l)),s},[]);return new lc(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var U_=(()=>{class t{applicationErrorHandler=u(zt);appRef=u(tn);taskService=u(Yn);ngZone=u(N);zonelessEnabled=u(ls);tracing=u(_n,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new fe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Yo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(sp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?ob:np;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Yo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function H_(){return[{provide:Tn,useExisting:U_},{provide:N,useClass:Qo},{provide:ls,useValue:!0}]}function WS(){return typeof $localize<"u"&&$localize.locale||Ms}var Rc=new _("",{factory:()=>u(Rc,{optional:!0,skipSelf:!0})||WS()});function ye(t){return pv(t)}function ht(t,n){return Lo(t,n?.equal)}var GS=t=>t;function xh(t,n){if(typeof t=="function"){let e=nf(t,GS,n?.equal);return z_(e,n?.debugName)}else{let e=nf(t.source,t.computation,t.equal);return z_(e,t.debugName)}}function z_(t,n){let e=t[$e],i=t;return i.set=r=>uv(e,r),i.update=r=>fv(e,r),i.asReadonly=Ll.bind(t),i}var Z_=Symbol("InputSignalNode#UNSET"),cT=X(y({},Vo),{transformFn:void 0,applyValueToInputSignal(t,n){Ni(t,n)}});function Y_(t,n){let e=Object.create(cT);e.value=t,e.transformFn=n?.transform;function i(){if(oi(e),e.value===Z_){let r=null;throw new T(-950,r)}return e.value}return i[$e]=e,i}var As=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>_s(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function $_(t,n){return Y_(t,n)}function dT(t){return Y_(Z_,t)}var Ue=($_.required=dT,$_);function W_(t,n){return hh(n)}function uT(t,n){return mh(n)}var Rs=(W_.required=uT,W_);function G_(t,n){return hh(n)}function fT(t,n){return mh(n)}var Q_=(G_.required=fT,G_);var Mh=new _(""),pT=new _("");function Ts(t){return!t.moduleRef}function hT(t){let n=Ts(t)?t.r3Injector:t.moduleRef.injector,e=n.get(N);return e.run(()=>{Ts(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(zt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Ts(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Mh);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Mh);s.add(o),t.moduleRef.onDestroy(()=>{fs(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return gT(i,e,()=>{let o=n.get(Yn),s=o.add(),a=n.get(_h);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Rc,Ms);if(M_(l||Ms),!n.get(pT,!0))return Ts(t)?n.get(tn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Ts(t)){let d=n.get(tn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return mT?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var mT;function gT(t,n,e){try{let i=e();return yi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var kc=null;function vT(t=[],n){return oe.create({name:n,providers:[{provide:ts,useValue:"platform"},{provide:Mh,useValue:new Set([()=>kc=null])},...t]})}function bT(t=[]){if(kc)return kc;let n=vT(t);return kc=n,E_(),yT(n),n}function yT(t){let n=t.get(cc,null);at(t,()=>{n?.forEach(e=>e())})}var _T=1e4;var zG=_T-1e3;var Ge=(()=>{class t{static __NG_ELEMENT_ID__=CT}return t})();function CT(t){return wT(bt(),W(),(t&16)===16)}function wT(t,n,e){if(Rn(t)&&!e){let i=en(t.index,n);return new vi(i,i)}else if(t.type&175){let i=n[St];return new vi(i,n)}return null}var Sh=class{supports(n){return n instanceof Map||dh(n)}create(){return new Th}},Th=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||dh(n)))throw new T(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new Ah(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Ah=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function q_(){return new Nc([new Sh])}var Nc=(()=>{class t{static \u0275prov=C({token:t,providedIn:"root",factory:q_});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||q_())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new T(901,!1)}}return t})();function K_(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;we(ge.BootstrapApplicationStart);try{let o=r?.injector??bT(i),s=[H_(),ab,...e||[]],a=new vs({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return hT({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{we(ge.BootstrapApplicationEnd)}}function le(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function io(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Ih=Symbol("NOT_SET"),X_=new Set,DT=X(y({},Vo),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Ih,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Ih&&!Sr(this))return this.signal;try{for(let r of this.cleanup??X_)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Bn(this),i;try{i=this.userFn.apply(null,n)}finally{si(this,e)}return(this.value===Ih||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Rh=class extends hs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Tt),s),this.scheduler=r;for(let a of nh){let l=e[a];if(l===void 0)continue;let c=Object.create(DT);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(oi(c),c.value),c.signal[$e]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??X_)e()}finally{ai(n)}}};function J_(t,n){let e=n?.injector??u(oe),i=e.get(Tn),r=e.get(hc),o=e.get(_n,null,{optional:!0});r.impl??=e.get(ih);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Wr,null,{optional:!0}),l=new Rh(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Oc(t,n){let e=$n(t),i=n.elementInjector||Br();return new lr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var eC=null;function rn(){return eC}function kh(t){eC??=t}var ks=class{},Pc=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(tC),providedIn:"platform"})}return t})();var tC=(()=>{class t extends Pc{_location;_history;_doc=u(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return rn().getBaseHref(this._doc)}onPopState(e){let i=rn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=rn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function rC(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function nC(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function _i(t){return t&&t[0]!=="?"?`?${t}`:t}var ro=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(xT),providedIn:"root"})}return t})(),ET=new _(""),xT=(()=>{class t extends ro{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return rC(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+_i(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+_i(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+_i(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(H(Pc),H(ET,8))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ci=(()=>{class t{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=ST(nC(iC(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+_i(i))}normalize(e){return t.stripTrailingSlash(MT(this._basePath,iC(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_i(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+_i(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=_i;static joinWithSlash=rC;static stripTrailingSlash=nC;static \u0275fac=function(i){return new(i||t)(H(ro))};static \u0275prov=C({token:t,factory:()=>IT(),providedIn:"root"})}return t})();function IT(){return new Ci(H(ro))}function MT(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function iC(t){return t.replace(/\/index.html$/,"")}function ST(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Nh=/\s+/,oC=[],Ns=(()=>{class t{_ngEl;_renderer;initialClasses=oC;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Nh):oC}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Nh):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Nh).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(F(V),F(Ae))};static \u0275dir=L({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Os=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:yn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(F(V),F(Nc),F(Ae))};static \u0275dir=L({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Oh=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(oe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(F(ft))};static \u0275dir=L({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Be]})}return t})();function AT(t,n){return{key:t,value:n}}var Ps=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=sC;transform(e,i=sC){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(s=>{this.keyValues.push(AT(s.key,s.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(F(Nc,16))};static \u0275pipe=gh({name:"keyvalue",type:t,pure:!1})}return t})();function sC(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Fc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var pr=class{};var Ph="browser";function aC(t){return t===Ph}var Fs=class{_doc;constructor(n){this._doc=n}manager},Lc=(()=>{class t extends Fs{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),Bc=new _(""),jh=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Lc));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Lc);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new T(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(H(Bc),H(N))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),Fh="ng-app-id";function lC(t){for(let n of t)n.remove()}function cC(t,n){let e=n.createElement("style");return e.textContent=t,e}function OT(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Fh}="${n}"],link[${Fh}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Fh),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Vh(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Bh=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,OT(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,cC);i?.forEach(r=>this.addUsage(r,this.external,Vh))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(lC(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])lC(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,cC(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Vh(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(H(ee),H(eo),H(ur,8),H(dr))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),Lh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Uh=/%COMP%/g;var uC="%COMP%",PT=`_nghost-${uC}`,FT=`_ngcontent-${uC}`,LT=!0,VT=new _("",{factory:()=>LT});function jT(t){return FT.replace(Uh,t)}function BT(t){return PT.replace(Uh,t)}function fC(t,n){return n.map(e=>e.replace(Uh,t))}var Hh=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Ls(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof jc?r.applyToHost(e):r instanceof Vs&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case bn.Emulated:o=new jc(l,c,i,this.appId,d,s,a,f);break;case bn.ShadowDom:return new Vc(l,e,i,s,a,this.nonce,f,c);case bn.ExperimentalIsolatedShadowDom:return new Vc(l,e,i,s,a,this.nonce,f);default:o=new Vs(l,c,i,d,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(H(jh),H(Bh),H(eo),H(VT),H(ee),H(N),H(ur),H(_n,8))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),Ls=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Lh[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(dC(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(dC(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new T(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Lh[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Lh[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(yn.DashCase|yn.Important)?n.style.setProperty(e,i,r&yn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&yn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=rn().getGlobalEventTarget(this.doc,n),!n))throw new T(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function dC(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Vc=class extends Ls{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=fC(i.id,c);for(let f of c){let p=document.createElement("style");s&&p.setAttribute("nonce",s),p.textContent=f,this.shadowRoot.appendChild(p)}let d=i.getExternalStyles?.();if(d)for(let f of d){let p=Vh(f,r);s&&p.setAttribute("nonce",s),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Vs=class extends Ls{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?fC(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ar.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},jc=class extends Vs{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=jT(c),this.hostAttr=BT(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Uc=class t extends ks{supportsDOMEvents=!0;static makeCurrent(){kh(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=UT();return e==null?null:HT(e)}resetBaseElement(){js=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Fc(document.cookie,n)}},js=null;function UT(){return js=js||document.head.querySelector("base"),js?js.getAttribute("href"):null}function HT(t){return new URL(t,document.baseURI).pathname}var zT=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),pC=["alt","control","meta","shift"],$T={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},WT={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},hC=(()=>{class t extends Fs{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>rn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),pC.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=$T[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),pC.forEach(s=>{if(s!==r){let a=WT[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})();async function zh(t,n,e){let i=y({rootComponent:t},GT(n,e));return K_(i)}function GT(t,n){return{platformRef:n?.platformRef,appProviders:[...KT,...t?.providers??[]],platformProviders:QT}}function qT(){Uc.makeCurrent()}function ZT(){return new dn}function YT(){return Zp(document),document}var QT=[{provide:dr,useValue:Ph},{provide:cc,useValue:qT,multi:!0},{provide:ee,useFactory:YT}];var KT=[{provide:ts,useValue:"root"},{provide:dn,useFactory:ZT},{provide:Bc,useClass:Lc,multi:!0},{provide:Bc,useClass:hC,multi:!0},Hh,Bh,jh,{provide:Qe,useExisting:Hh},{provide:pr,useClass:zT},[]];var wi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Wh=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Gh=class{encodeKey(n){return mC(n)}encodeValue(n){return mC(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function XT(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var JT=/%(\d[a-f0-9])/gi,eA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function mC(t){return encodeURIComponent(t).replace(JT,(n,e)=>eA[e]??n)}function Hc(t){return`${t}`}var Jn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Gh,n.fromString){if(n.fromObject)throw new T(2805,!1);this.map=XT(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Hc):[Hc(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Hc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Hc(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function tA(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function gC(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function vC(t){return typeof Blob<"u"&&t instanceof Blob}function bC(t){return typeof FormData<"u"&&t instanceof FormData}function nA(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var yC="Content-Type",_C="Accept",CC="text/plain",wC="application/json",iA=`${wC}, ${CC}, */*`,oo=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(tA(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new T(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new wi,this.context??=new Wh,!this.params)this.params=new Jn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||gC(this.body)||vC(this.body)||bC(this.body)||nA(this.body)?this.body:this.body instanceof Jn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||bC(this.body)?null:vC(this.body)?this.body.type||null:gC(this.body)?null:typeof this.body=="string"?CC:this.body instanceof Jn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?wC:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,p=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,g=n.transferCache??this.transferCache,x=n.timeout??this.timeout,A=n.body!==void 0?n.body:this.body,P=n.withCredentials??this.withCredentials,ve=n.reportProgress??this.reportProgress,rt=n.headers||this.headers,ot=n.params||this.params,No=n.context??this.context;return n.setHeaders!==void 0&&(rt=Object.keys(n.setHeaders).reduce((Oo,Ti)=>Oo.set(Ti,n.setHeaders[Ti]),rt)),n.setParams&&(ot=Object.keys(n.setParams).reduce((Oo,Ti)=>Oo.set(Ti,n.setParams[Ti]),ot)),new t(e,i,A,{params:ot,headers:rt,context:No,reportProgress:ve,responseType:r,withCredentials:P,transferCache:g,keepalive:o,cache:a,priority:s,timeout:x,mode:l,redirect:c,credentials:d,referrer:f,integrity:p,referrerPolicy:h})}},hr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(hr||{}),Bs=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new wi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},qh=class t extends Bs{constructor(n={}){super(n)}type=hr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Us=class t extends Bs{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=hr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},so=class extends Bs{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},rA=200,oA=204;var sA=/^\)\]\}',?\n/;var aA=(()=>{class t{xhrFactory;tracingService=u(_n,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new T(-2800,!1);let i=this.xhrFactory;return Y(null).pipe(Ye(()=>new $(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((A,P)=>s.setRequestHeader(A,P.join(","))),e.headers.has(_C)||s.setRequestHeader(_C,iA),!e.headers.has(yC)){let A=e.detectContentTypeHeader();A!==null&&s.setRequestHeader(yC,A)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let A=e.responseType.toLowerCase();s.responseType=A!=="json"?A:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let A=s.statusText||"OK",P=new wi(s.getAllResponseHeaders()),ve=s.responseURL||e.url;return l=new qh({headers:P,status:s.status,statusText:A,url:ve}),l},d=this.maybePropagateTrace(()=>{let{headers:A,status:P,statusText:ve,url:rt}=c(),ot=null;P!==oA&&(ot=typeof s.response>"u"?s.responseText:s.response),P===0&&(P=ot?rA:0);let No=P>=200&&P<300;if(e.responseType==="json"&&typeof ot=="string"){let Oo=ot;ot=ot.replace(sA,"");try{ot=ot!==""?JSON.parse(ot):null}catch(Ti){ot=Oo,No&&(No=!1,ot={error:Ti,text:ot})}}No?(o.next(new Us({body:ot,headers:A,status:P,statusText:ve,url:rt||void 0})),o.complete()):o.error(new so({error:ot,headers:A,status:P,statusText:ve,url:rt||void 0}))}),f=this.maybePropagateTrace(A=>{let{url:P}=c(),ve=new so({error:A,status:s.status||0,statusText:s.statusText||"Unknown Error",url:P||void 0});o.error(ve)}),p=f;e.timeout&&(p=this.maybePropagateTrace(A=>{let{url:P}=c(),ve=new so({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:P||void 0});o.error(ve)}));let h=!1,g=this.maybePropagateTrace(A=>{h||(o.next(c()),h=!0);let P={type:hr.DownloadProgress,loaded:A.loaded};A.lengthComputable&&(P.total=A.total),e.responseType==="text"&&s.responseText&&(P.partialText=s.responseText),o.next(P)}),x=this.maybePropagateTrace(A=>{let P={type:hr.UploadProgress,loaded:A.loaded};A.lengthComputable&&(P.total=A.total),o.next(P)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",p),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",g),a!==null&&s.upload&&s.upload.addEventListener("progress",x)),s.send(a),o.next({type:hr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",p),e.reportProgress&&(s.removeEventListener("progress",g),a!==null&&s.upload&&s.upload.removeEventListener("progress",x)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(H(pr))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lA(t,n){return n(t)}function cA(t,n,e){return(i,r)=>at(e,()=>n(i,o=>t(o,r)))}var dA=new _("",{factory:()=>[]}),DC=new _(""),uA=new _("",{factory:()=>!0});var fA=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(aA),r},providedIn:"root"})}return t})();var pA=(()=>{class t{backend;injector;chain=null;pendingTasks=u(cs);contributeToStability=u(uA);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(dA),...this.injector.get(DC,[])]));this.chain=i.reduceRight((r,o)=>cA(r,o,this.injector),lA)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe($o(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(H(fA),H(be))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hA=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(pA),r},providedIn:"root"})}return t})();function $h(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var mr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof oo)o=e;else{let l;r.headers instanceof wi?l=r.headers:l=new wi(r.headers);let c;r.params&&(r.params instanceof Jn?c=r.params:c=new Jn({fromObject:r.params})),o=new oo(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=Y(o).pipe(Pr(l=>this.handler.handle(l)));if(e instanceof oo||r.observe==="events")return s;let a=s.pipe(he(l=>l instanceof Us));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(J(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new T(2806,!1);return l.body}));case"blob":return a.pipe(J(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new T(2807,!1);return l.body}));case"text":return a.pipe(J(l=>{if(l.body!==null&&typeof l.body!="string")throw new T(2808,!1);return l.body}));default:return a.pipe(J(l=>l.body))}case"response":return a;default:throw new T(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Jn().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,$h(r,i))}post(e,i,r={}){return this.request("POST",e,$h(r,i))}put(e,i,r={}){return this.request("PUT",e,$h(r,i))}static \u0275fac=function(i){return new(i||t)(H(hA))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var te="primary",ta=Symbol("RouteTitle"),Xh=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function vr(t){return new Xh(t)}function Zh(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function NC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Zh(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Zh(o,t.slice(0,o.length),a)||!Zh(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Zc(t){return new Promise((n,e)=>{t.pipe(Hn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function gA(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Fn(t[e],n[e]))return!1;return!0}function Fn(t,n){let e=t?Jh(t):void 0,i=n?Jh(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!OC(t[r],n[r]))return!1;return!0}function Jh(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function OC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function vA(t){return t.length>0?t[t.length-1]:null}function _r(t){return Uo(t)?t:yi(t)?Oe(Promise.resolve(t)):Y(t)}function PC(t){return Uo(t)?Zc(t):Promise.resolve(t)}var bA={exact:VC,subset:jC},FC={exact:yA,subset:_A,ignored:()=>!0},LC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},em={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function IC(t,n,e){return bA[e.paths](t.root,n.root,e.matrixParams)&&FC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function yA(t,n){return Fn(t,n)}function VC(t,n,e){if(!gr(t.segments,n.segments)||!Wc(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!VC(t.children[i],n.children[i],e))return!1;return!0}function _A(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>OC(t[e],n[e]))}function jC(t,n,e){return BC(t,n,n.segments,e)}function BC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!gr(r,e)||n.hasChildren()||!Wc(r,e,i))}else if(t.segments.length===e.length){if(!gr(t.segments,e)||!Wc(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!jC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!gr(t.segments,r)||!Wc(t.segments,r,i)||!t.children[te]?!1:BC(t.children[te],n,o,i)}}function Wc(t,n,e){return n.every((i,r)=>FC[e](t[r].parameters,i.parameters))}var Gt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new _e([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=vr(this.queryParams),this._queryParamMap}toString(){return DA.serialize(this)}},_e=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Gc(this)}},Di=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=vr(this.parameters),this._parameterMap}toString(){return HC(this)}};function CA(t,n){return gr(t,n)&&t.every((e,i)=>Fn(e.parameters,n[i].parameters))}function gr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function wA(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===te&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==te&&(e=e.concat(n(r,i)))}),e}var go=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>new Ei,providedIn:"root"})}return t})(),Ei=class{parse(n){let e=new nm(n);return new Gt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Hs(n.root,!0)}`,i=IA(n.queryParams),r=typeof n.fragment=="string"?`#${EA(n.fragment)}`:"";return`${e}${i}${r}`}},DA=new Ei;function Gc(t){return t.segments.map(n=>HC(n)).join("/")}function Hs(t,n){if(!t.hasChildren())return Gc(t);if(n){let e=t.children[te]?Hs(t.children[te],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==te&&i.push(`${r}:${Hs(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=wA(t,(i,r)=>r===te?[Hs(t.children[te],!1)]:[`${r}:${Hs(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[te]!=null?`${Gc(t)}/${e[0]}`:`${Gc(t)}/(${e.join("//")})`}}function UC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function zc(t){return UC(t).replace(/%3B/gi,";")}function EA(t){return encodeURI(t)}function tm(t){return UC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function qc(t){return decodeURIComponent(t)}function MC(t){return qc(t.replace(/\+/g,"%20"))}function HC(t){return`${tm(t.path)}${xA(t.parameters)}`}function xA(t){return Object.entries(t).map(([n,e])=>`;${tm(n)}=${tm(e)}`).join("")}function IA(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${zc(e)}=${zc(r)}`).join("&"):`${zc(e)}=${zc(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var MA=/^[^\/()?;#]+/;function Yh(t){let n=t.match(MA);return n?n[0]:""}var SA=/^[^\/()?;=#]+/;function TA(t){let n=t.match(SA);return n?n[0]:""}var AA=/^[^=?&#]+/;function RA(t){let n=t.match(AA);return n?n[0]:""}var kA=/^[^&#]+/;function NA(t){let n=t.match(kA);return n?n[0]:""}var nm=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _e([],{}):new _e([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new T(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[te]=new _e(e,i)),r}parseSegment(){let n=Yh(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(n),new Di(qc(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=TA(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Yh(this.remaining);r&&(i=r,this.capture(i))}n[qc(e)]=qc(i)}parseQueryParam(n){let e=RA(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=NA(this.remaining);s&&(i=s,this.capture(i))}let r=MC(e),o=MC(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Yh(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new T(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=te);let a=this.parseChildren(e+1);i[s??te]=Object.keys(a).length===1&&a[te]?a[te]:new _e([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new T(4011,!1)}};function zC(t){return t.segments.length>0?new _e([],{[te]:t}):t}function $C(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=$C(r);if(i===te&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new _e(t.segments,n);return OA(e)}function OA(t){if(t.numberOfChildren===1&&t.children[te]){let n=t.children[te];return new _e(t.segments.concat(n.segments),n.children)}return t}function xi(t){return t instanceof Gt}function WC(t,n,e=null,i=null,r=new Ei){let o=GC(t);return qC(o,n,e,i,r)}function GC(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new _e(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=zC(i);return n??r}function qC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Qh(o,o,o,e,i,r);let s=PA(n);if(s.toRoot())return Qh(o,o,new _e([],{}),e,i,r);let a=FA(s,o,t),l=a.processChildren?$s(a.segmentGroup,a.index,s.commands):YC(a.segmentGroup,a.index,s.commands);return Qh(o,a.segmentGroup,l,e,i,r)}function Yc(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function qs(t){return typeof t=="object"&&t!=null&&t.outlets}function SC(t,n,e){t||="\u0275";let i=new Gt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Qh(t,n,e,i,r,o){let s={};for(let[c,d]of Object.entries(i??{}))s[c]=Array.isArray(d)?d.map(f=>SC(c,f,o)):SC(c,d,o);let a;t===n?a=e:a=ZC(t,n,e);let l=zC($C(a));return new Gt(l,s,r)}function ZC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=ZC(o,n,e)}),new _e(t.segments,i)}var Qc=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Yc(i[0]))throw new T(4003,!1);let r=i.find(qs);if(r&&r!==vA(i))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function PA(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Qc(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Qc(e,n,i)}var lo=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function FA(t,n,e){if(t.isAbsolute)return new lo(n,!0,0);if(!e)return new lo(n,!1,NaN);if(e.parent===null)return new lo(e,!0,0);let i=Yc(t.commands[0])?0:1,r=e.segments.length-1+i;return LA(e,r,t.numberOfDoubleDots)}function LA(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new T(4005,!1);r=i.segments.length}return new lo(i,!1,r-o)}function VA(t){return qs(t[0])?t[0].outlets:{[te]:t}}function YC(t,n,e){if(t??=new _e([],{}),t.segments.length===0&&t.hasChildren())return $s(t,n,e);let i=jA(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new _e(t.segments.slice(0,i.pathIndex),{});return o.children[te]=new _e(t.segments.slice(i.pathIndex),t.children),$s(o,0,r)}else return i.match&&r.length===0?new _e(t.segments,{}):i.match&&!t.hasChildren()?im(t,n,e):i.match?$s(t,0,r):im(t,n,e)}function $s(t,n,e){if(e.length===0)return new _e(t.segments,{});{let i=VA(e),r={};if(Object.keys(i).some(o=>o!==te)&&t.children[te]&&t.numberOfChildren===1&&t.children[te].segments.length===0){let o=$s(t.children[te],n,e);return new _e(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=YC(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new _e(t.segments,r)}}function jA(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(qs(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!AC(l,c,s))return o;i+=2}else{if(!AC(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function im(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(qs(o)){let l=BA(o.outlets);return new _e(i,l)}if(r===0&&Yc(e[0])){let l=t.segments[n];i.push(new Di(l.path,TC(e[0]))),r++;continue}let s=qs(o)?o.outlets[te]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Yc(a)?(i.push(new Di(s,TC(a))),r+=2):(i.push(new Di(s,{})),r++)}return new _e(i,{})}function BA(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=im(new _e([],{}),0,i))}),n}function TC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function AC(t,n,e){return t==e.path&&Fn(n,e.parameters)}var Ws="imperative",lt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(lt||{}),qt=class{id;url;constructor(n,e){this.id=n,this.url=e}},br=class extends qt{type=lt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ln=class extends qt{urlAfterRedirects;type=lt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},wt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(wt||{}),Zs=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Zs||{}),on=class extends qt{reason;code;type=lt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function QC(t){return t instanceof on&&(t.code===wt.Redirect||t.code===wt.SupersededByNewNavigation)}var ti=class extends qt{reason;code;type=lt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},yr=class extends qt{error;target;type=lt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ys=class extends qt{urlAfterRedirects;state;type=lt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kc=class extends qt{urlAfterRedirects;state;type=lt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xc=class extends qt{urlAfterRedirects;state;shouldActivate;type=lt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Jc=class extends qt{urlAfterRedirects;state;type=lt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ed=class extends qt{urlAfterRedirects;state;type=lt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},td=class{route;type=lt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},nd=class{route;type=lt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},id=class{snapshot;type=lt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rd=class{snapshot;type=lt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},od=class{snapshot;type=lt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sd=class{snapshot;type=lt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var uo=class{},Qs=class{},fo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function UA(t){return!(t instanceof uo)&&!(t instanceof fo)&&!(t instanceof Qs)}var ad=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new vo(this.rootInjector)}},vo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new ad(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(H(be))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ld=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=rm(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=rm(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=om(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return om(n,this._root).map(e=>e.value)}};function rm(t,n){if(t===n.value)return n;for(let e of n.children){let i=rm(t,e);if(i)return i}return null}function om(t,n){if(t===n.value)return[n];for(let e of n.children){let i=om(t,e);if(i.length)return i.unshift(n),i}return[]}var Wt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ao(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Ks=class extends ld{snapshot;constructor(n,e){super(n),this.snapshot=e,hm(this,n)}toString(){return this.snapshot.toString()}};function KC(t,n){let e=HA(t,n),i=new Ze([new Di("",{})]),r=new Ze({}),o=new Ze({}),s=new Ze({}),a=new Ze(""),l=new Zt(i,r,s,a,o,te,t,e.root);return l.snapshot=e.root,new Ks(new Wt(l,[]),e)}function HA(t,n){let e={},i={},r={},s=new po([],e,r,"",i,te,t,null,{},n);return new Xs("",new Wt(s,[]))}var Zt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(J(c=>c[ta]))??Y(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(J(n=>vr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(J(n=>vr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function pm(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&JC(r)&&(i.resolve[ta]=r.title),i}var po=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ta]}constructor(n,e,i,r,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=vr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=vr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Xs=class extends ld{url;constructor(n,e){super(e),this.url=n,hm(this,e)}toString(){return XC(this._root)}};function hm(t,n){n.value._routerState=t,n.children.forEach(e=>hm(t,e))}function XC(t){let n=t.children.length>0?` { ${t.children.map(XC).join(", ")} } `:"";return`${t.value}${n}`}function Kh(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Fn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Fn(n.params,e.params)||t.paramsSubject.next(e.params),gA(n.url,e.url)||t.urlSubject.next(e.url),Fn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function sm(t,n){let e=Fn(t.params,n.params)&&CA(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||sm(t.parent,n.parent))}function JC(t){return typeof t.title=="string"||t.title===null}var ew=new _(""),na=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=te;activateEvents=new B;deactivateEvents=new B;attachEvents=new B;detachEvents=new B;routerOutletData=Ue();parentContexts=u(vo);location=u(ft);changeDetector=u(Ge);inputBinder=u(fd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new am(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Be]})}return t})(),am=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Zt?this.route:n===vo?this.childContexts:n===ew?this.outletData:this.parent.get(n,e)}},fd=new _("");var mm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&k(0,"router-outlet")},dependencies:[na],encapsulation:2})}return t})();function gm(t){let n=t.children&&t.children.map(gm),e=n?X(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==te&&(e.component=mm),e}function zA(t,n,e){let i=Js(t,n._root,e?e._root:void 0);return new Ks(i,n)}function Js(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=$A(t,n,e);return new Wt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Js(t,a)),s}}let i=WA(n.value),r=n.children.map(o=>Js(t,o));return new Wt(i,r)}}function $A(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Js(t,i,r);return Js(t,i)})}function WA(t){return new Zt(new Ze(t.url),new Ze(t.params),new Ze(t.queryParams),new Ze(t.fragment),new Ze(t.data),t.outlet,t.component,t)}var ho=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},tw="ngNavigationCancelingError";function cd(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=xi(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=nw(!1,wt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function nw(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[tw]=!0,e.cancellationCode=n,e}function GA(t){return iw(t)&&xi(t.url)}function iw(t){return!!t&&t[tw]}var lm=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Kh(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ao(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ao(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ao(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ao(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new sd(o.value.snapshot))}),n.children.length&&this.forwardEvent(new rd(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Kh(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Kh(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},dd=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},co=class{component;route;constructor(n,e){this.component=n,this.route=e}};function qA(t,n,e){let i=t._root,r=n?n._root:null;return zs(i,r,e,[i.value])}function ZA(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function bo(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!vf(t)?t:n.get(t):i}function zs(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ao(n);return t.children.forEach(s=>{YA(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Gs(a,e.getContext(s),r)),r}function YA(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=QA(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new dd(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?zs(t,n,a?a.children:null,i,r):zs(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new co(a.outlet.component,s))}else s&&Gs(n,a,r),r.canActivateChecks.push(new dd(i)),o.component?zs(t,null,a?a.children:null,i,r):zs(t,null,e,i,r);return r}function QA(t,n,e){if(typeof e=="function")return at(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!gr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!gr(t.url,n.url)||!Fn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!sm(t,n)||!Fn(t.queryParams,n.queryParams);default:return!sm(t,n)}}function Gs(t,n,e){let i=ao(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?Gs(s,n.children.getContext(o),e):Gs(s,null,e):Gs(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new co(n.outlet.component,r)):e.canDeactivateChecks.push(new co(null,r)):e.canDeactivateChecks.push(new co(null,r))}function ia(t){return typeof t=="function"}function KA(t){return typeof t=="boolean"}function XA(t){return t&&ia(t.canLoad)}function JA(t){return t&&ia(t.canActivate)}function eR(t){return t&&ia(t.canActivateChild)}function tR(t){return t&&ia(t.canDeactivate)}function nR(t){return t&&ia(t.canMatch)}function rw(t){return t instanceof Bi||t?.name==="EmptyError"}var $c=Symbol("INITIAL_VALUE");function mo(){return Ye(t=>Ho(t.map(n=>n.pipe(st(1),dt($c)))).pipe(J(n=>{for(let e of n)if(e!==!0){if(e===$c)return $c;if(e===!1||iR(e))return e}return!0}),he(n=>n!==$c),st(1)))}function iR(t){return xi(t)||t instanceof ho}function ow(t){return t.aborted?Y(void 0).pipe(st(1)):new $(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function sw(t){return xe(ow(t))}function rR(t){return ct(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Y(X(y({},n),{guardsResult:!0})):oR(o,e,i).pipe(ct(s=>s&&KA(s)?sR(e,r,t):Y(s)),J(s=>X(y({},n),{guardsResult:s})))})}function oR(t,n,e){return Oe(t).pipe(ct(i=>uR(i.component,i.route,e,n)),Hn(i=>i!==!0,!0))}function sR(t,n,e){return Oe(n).pipe(Pr(i=>Mn(lR(i.route.parent,e),aR(i.route,e),dR(t,i.path),cR(t,i.route))),Hn(i=>i!==!0,!0))}function aR(t,n){return t!==null&&n&&n(new od(t)),Y(!0)}function lR(t,n){return t!==null&&n&&n(new id(t)),Y(!0)}function cR(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Y(!0);let i=e.map(r=>Ui(()=>{let o=n._environmentInjector,s=bo(r,o),a=JA(s)?s.canActivate(n,t):at(o,()=>s(n,t));return _r(a).pipe(Hn())}));return Y(i).pipe(mo())}function dR(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>ZA(o)).filter(o=>o!==null).map(o=>Ui(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=bo(a,l),d=eR(c)?c.canActivateChild(e,t):at(l,()=>c(e,t));return _r(d).pipe(Hn())});return Y(s).pipe(mo())}));return Y(r).pipe(mo())}function uR(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Y(!0);let o=r.map(s=>{let a=n._environmentInjector,l=bo(s,a),c=tR(l)?l.canDeactivate(t,n,e,i):at(a,()=>l(t,n,e,i));return _r(c).pipe(Hn())});return Y(o).pipe(mo())}function fR(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Y(!0);let s=o.map(a=>{let l=bo(a,t),c=XA(l)?l.canLoad(n,e):at(t,()=>l(n,e)),d=_r(c);return r?d.pipe(sw(r)):d});return Y(s).pipe(mo(),aw(i))}function aw(t){return Gu(gt(n=>{if(typeof n!="boolean")throw cd(t,n)}),J(n=>n===!0))}function pR(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return Y(!0);let a=s.map(l=>{let c=bo(l,t),d=nR(c)?c.canMatch(n,e,r):at(t,()=>c(n,e,r));return _r(d).pipe(sw(o))});return Y(a).pipe(mo(),aw(i))}var ei=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},ea=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function hR(t){throw new T(4e3,!1)}function mR(t){throw nw(!1,wt.GuardRejected)}var cm=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[te])throw hR(`${n.redirectTo}`);r=r.children[te]}}async applyRedirectCommands(n,e,i,r,o){let s=await gR(e,r,o);if(s instanceof Gt)throw new ea(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new ea(a);return a}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Gt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new _e(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function gR(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Zc(_r(at(e,()=>i(n))))}function vR(t,n){return t.providers&&!t._injector&&(t._injector=Is(t.providers,n,`Route: ${t.path}`)),t._injector??n}function wn(t){return t.outlet||te}function bR(t,n){let e=t.filter(i=>wn(i)===n);return e.push(...t.filter(i=>wn(i)!==n)),e}var dm={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function lw(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function yR(t,n,e,i,r,o,s){let a=cw(t,n,e);if(!a.matched)return Y(a);let l=lw(o(a));return i=vR(n,i),pR(i,n,e,r,l,s).pipe(J(c=>c===!0?a:y({},dm)))}function cw(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},dm):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||NC)(e,t,n);if(!r)return y({},dm);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function RC(t,n,e,i,r){return e.length>0&&wR(t,e,i,r)?{segmentGroup:new _e(n,CR(i,new _e(e,t.children))),slicedSegments:[]}:e.length===0&&DR(t,e,i)?{segmentGroup:new _e(t.segments,_R(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new _e(t.segments,t.children),slicedSegments:e}}function _R(t,n,e,i){let r={};for(let o of e)if(pd(t,n,o)&&!i[wn(o)]){let s=new _e([],{});r[wn(o)]=s}return y(y({},i),r)}function CR(t,n){let e={};e[te]=n;for(let i of t)if(i.path===""&&wn(i)!==te){let r=new _e([],{});e[wn(i)]=r}return e}function wR(t,n,e,i){return e.some(r=>!pd(t,n,r)||!(wn(r)!==te)?!1:!(i!==void 0&&wn(r)===i))}function DR(t,n,e){return e.some(i=>pd(t,n,i))}function pd(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function ER(t,n,e){return n.length===0&&!t.children[e]}var um=class{};async function xR(t,n,e,i,r,o,s="emptyOnly",a){return new fm(t,n,e,i,r,s,o,a).recognize()}var IR=31,fm=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new cm(this.urlSerializer,this.urlTree)}noMatchError(n){return new T(4002,`'${n.segmentGroup}'`)}async recognize(){let n=RC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Wt(i,e),o=new Xs("",r),s=WC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new po([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),te,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,te,e),rootSnapshot:e}}catch(i){if(i instanceof ea)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ei?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=await this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Wt?[s]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],d=bR(e,l),f=await this.processSegmentGroup(n,d,c,l,r);s.push(...f)}let a=dw(s);return MR(a),a}async processSegment(n,e,i,r,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof ei||rw(c))continue;throw c}if(ER(i,r,o))return new um;throw new ei(i)}async processSegmentAgainstRoute(n,e,i,r,o,s,a,l){if(wn(i)!==s&&(s===te||!pd(r,o,i)))throw new ei(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new ei(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:p}=cw(e,r,o);if(!l)throw new ei(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>IR&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let g=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,lw(h),n),x=await this.applyRedirects.lineralizeSegments(r,g);return this.processSegment(n,i,e,x.concat(p),s,!1,a)}createSnapshot(n,e,i,r,o){let s=new po(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,TR(e),wn(e),e.component??e._loadedComponent??null,e,AR(e),n),a=pm(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=rt=>this.createSnapshot(n,i,rt.consumedSegments,rt.parameters,s),l=await Zc(yR(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new ei(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:p,remainingSegments:h}=l,g=this.createSnapshot(n,i,p,f,s),{segmentGroup:x,slicedSegments:A}=RC(e,p,h,c,o);if(A.length===0&&x.hasChildren()){let rt=await this.processChildren(d,c,x,g);return new Wt(g,rt)}if(c.length===0&&A.length===0)return new Wt(g,[]);let P=wn(i)===o,ve=await this.processSegment(d,c,x,A,P?te:o,!0,g);return new Wt(g,ve instanceof Wt?[ve]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Zc(fR(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw mR(e)}return{routes:[],injector:n}}};function MR(t){t.sort((n,e)=>n.value.outlet===te?-1:e.value.outlet===te?1:n.value.outlet.localeCompare(e.value.outlet))}function SR(t){let n=t.value.routeConfig;return n&&n.path===""}function dw(t){let n=[],e=new Set;for(let i of t){if(!SR(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=dw(i.children);n.push(new Wt(i.value,r))}return n.filter(i=>!e.has(i))}function TR(t){return t.data||{}}function AR(t){return t.resolve||{}}function RR(t,n,e,i,r,o,s){return ct(async a=>{let{state:l,tree:c}=await xR(t,n,e,i,a.extractedUrl,r,o,s);return X(y({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function kR(t){return ct(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Y(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of uw(a))o.add(l);let s=0;return Oe(o).pipe(Pr(a=>r.has(a)?NR(a,e,t):(a.data=pm(a,a.parent,t).resolve,Y(void 0))),gt(()=>s++),al(1),ct(a=>s===o.size?Y(n):Ve))})}function uw(t){let n=t.children.map(e=>uw(e)).flat();return[t,...n]}function NR(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!JC(i)&&(r[ta]=i.title),Ui(()=>(t.data=pm(t,t.parent,e).resolve,OR(r,t,n).pipe(J(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function OR(t,n,e){let i=Jh(t);if(i.length===0)return Y({});let r={};return Oe(i).pipe(ct(o=>PR(t[o],n,e).pipe(Hn(),gt(s=>{if(s instanceof ho)throw cd(new Ei,s);r[o]=s}))),al(1),J(()=>r),zo(o=>rw(o)?Ve:Qu(o)))}function PR(t,n,e){let i=n._environmentInjector,r=bo(t,i),o=r.resolve?r.resolve(n,e):at(i,()=>r(n,e));return _r(o)}function kC(t){return Ye(n=>{let e=t(n);return e?Oe(e).pipe(J(()=>n)):Y(n)})}var vm=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===te);return i}getResolvedTitleForRoute(e){return e.data[ta]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(fw),providedIn:"root"})}return t})(),fw=(()=>{class t extends vm{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(H(xC))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yo=new _("",{factory:()=>({})}),ra=new _(""),pw=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Eh);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await PC(at(e,()=>i.loadComponent())),s=await gw(mw(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await hw(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function hw(t,n,e,i){let r=await PC(at(e,()=>t.loadChildren())),o=await gw(mw(r)),s;o instanceof Cc||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(ra,[],{optional:!0,self:!0}).flat()),{routes:l.map(gm),injector:a,factory:d}}function FR(t){return t&&typeof t=="object"&&"default"in t}function mw(t){return FR(t)?t.default:t}async function gw(t){return t}var hd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(LR),providedIn:"root"})}return t})(),LR=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vw=new _("");var VR=()=>{},bw=new _(""),yw=(()=>{class t{currentNavigation=U(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=U(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=u(pw);environmentInjector=u(be);destroyRef=u(Tt);urlSerializer=u(go);rootContexts=u(vo);location=u(Ci);inputBindingEnabled=u(fd,{optional:!0})!==null;titleStrategy=u(vm);options=u(yo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(hd);createViewTransition=u(vw,{optional:!0});navigationErrorHandler=u(bw,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new td(r)),i=r=>this.events.next(new nd(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ye(()=>{this.transitions?.next(X(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ze(null),this.transitions.pipe(he(i=>i!==null),Ye(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return Y(i).pipe(Ye(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",wt.SupersededByNewNavigation),Ve;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?X(y({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new ti(a.id,this.urlSerializer.serialize(a.rawUrl),"",Zs.IgnoredSameUrlNavigation)),a.resolve(!1),Ve;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return Y(a).pipe(Ye(f=>(this.events.next(new br(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Ve:Promise.resolve(f))),RR(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),gt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=f.urlAfterRedirects,p)),this.events.next(new Qs)}),Ye(f=>Oe(i.routesRecognizeHandler.deferredHandle??Y(void 0)).pipe(J(()=>f))),gt(()=>{let f=new Ys(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:p,source:h,restoredState:g,extras:x}=a,A=new br(f,this.urlSerializer.serialize(p),h,g);this.events.next(A);let P=KC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=X(y({},a),{targetSnapshot:P,urlAfterRedirects:p,extras:X(y({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ve=>(ve.finalUrl=p,ve)),Y(i)}else return this.events.next(new ti(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Zs.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Ve}),J(a=>{let l=new Kc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=X(y({},a),{guards:qA(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),rR(a=>this.events.next(a)),Ye(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw cd(this.urlSerializer,a.guardsResult);let l=new Xc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Ve;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",wt.GuardRejected),Ve;if(a.guards.canActivateChecks.length===0)return Y(a);let c=new Jc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Ve;let d=!1;return Y(a).pipe(kR(this.paramsInheritanceStrategy),gt({next:()=>{d=!0;let f=new ed(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",wt.NoDataFromResolver)}}))}),kC(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let p=d._environmentInjector;f.push(this.configLoader.loadComponent(p,d.routeConfig).then(h=>{d.component=h}))}for(let p of d.children)f.push(...l(p));return f},c=l(a.targetSnapshot.root);return c.length===0?Y(a):Oe(Promise.all(c).then(()=>a))}),kC(()=>this.afterPreactivation()),Ye(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Oe(c).pipe(J(()=>i)):Y(i)}),st(1),Ye(a=>{let l=zA(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=X(y({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new uo);let c=i.beforeActivateHandler.deferredHandle;return c?Oe(c.then(()=>a)):Y(a)}),gt(a=>{new lm(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=VR,l)),this.lastSuccessfulNavigation.set(ye(this.currentNavigation)),this.events.next(new Ln(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),xe(ow(o.signal).pipe(he(()=>!r&&!i.targetRouterState),gt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",wt.Aborted)}))),gt({complete:()=>{r=!0}}),xe(this.transitionAbortWithErrorSubject.pipe(gt(a=>{throw a}))),$o(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",wt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),zo(a=>{if(r=!0,this.destroyed)return i.resolve(!1),Ve;if(iw(a))this.events.next(new on(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),GA(a)?this.events.next(new fo(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new yr(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=at(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof ho){let{message:d,cancellationCode:f}=cd(this.urlSerializer,c);this.events.next(new on(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new fo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Ve}))}))}cancelNavigationTransition(e,i,r){let o=new on(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ye(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jR(t){return t!==Ws}var _w=new _("");var Cw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(BR),providedIn:"root"})}return t})(),ud=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},BR=(()=>{class t extends ud{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),md=(()=>{class t{urlSerializer=u(go);options=u(yo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Ci);urlHandlingStrategy=u(hd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Gt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Gt?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=KC(null,u(be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(UR),providedIn:"root"})}return t})(),UR=(()=>{class t extends md{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof br?this.updateStateMemento():e instanceof ti?this.commitTransition(i):e instanceof Ys?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof uo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof on&&!QC(e)?this.restoreHistory(i):e instanceof yr?this.restoreHistory(i,!0):e instanceof Ln&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=y(y({},a),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=y(y({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bm(t,n){t.events.pipe(he(e=>e instanceof Ln||e instanceof on||e instanceof yr||e instanceof ti),J(e=>e instanceof Ln||e instanceof ti?0:(e instanceof on?e.code===wt.Redirect||e.code===wt.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),st(1)).subscribe(()=>{n()})}var _o=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(vh);stateManager=u(md);options=u(yo,{optional:!0})||{};pendingTasks=u(Yn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(yw);urlSerializer=u(go);location=u(Ci);urlHandlingStrategy=u(hd);injector=u(be);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(Cw);injectorCleanup=u(_w,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(ra,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(fd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new fe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=ye(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof on&&i.code!==wt.Redirect&&i.code!==wt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ln)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof fo){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||jR(r.source)},s);this.scheduleNavigation(a,Ws,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}UA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ws,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=X(y({},o),{browserUrl:e})),r){let c=y({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,i,s,o).catch(c=>{this.disposed||this.injector.get(zt)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ye(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(gm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let p=r?r.snapshot:this.routerState.snapshot.root;f=GC(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return qC(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=xi(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ws,null,i)}navigate(e,i={skipLocationChange:!1}){return HR(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ui(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},LC):i===!1?r=y({},em):r=y(y({},em),i),xi(e))return IC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return IC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,p)=>{a=f,l=p});let d=this.pendingTasks.add();return bm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function HR(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new T(4008,!1)}var WR=(()=>{class t{router=u(_o);stateManager=u(md);fragment=U("");queryParams=U({});path=U("");serializer=u(go);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ln&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Gt(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gd=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new As("href"),{optional:!0});reactiveHref=xh(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ye(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ye(this._target)}_target=U(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ye(this._queryParams)}_queryParams=U(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ye(this._fragment)}_fragment=U(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ye(this._queryParamsHandling)}_queryParamsHandling=U(void 0);set state(e){this._state.set(e)}get state(){return ye(this._state)}_state=U(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ye(this._info)}_info=U(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ye(this._relativeTo)}_relativeTo=U(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ye(this._preserveFragment)}_preserveFragment=U(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ye(this._skipLocationChange)}_skipLocationChange=U(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ye(this._replaceUrl)}_replaceUrl=U(!1);isAnchorElement;onChanges=new I;applicationErrorHandler=u(zt);options=u(yo,{optional:!0});reactiveRouterState=u(WR);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=U(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(xi(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=ht(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:xi(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return ye(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(F(_o),F(Zt),_s("tabindex"),F(Ae),F(V),F(ro))};static \u0275dir=L({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&pe("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&Ie("href",r.reactiveHref(),Qp)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",le],skipLocationChange:[2,"skipLocationChange","skipLocationChange",le],replaceUrl:[2,"replaceUrl","replaceUrl",le],routerLink:"routerLink"},features:[Be]})}return t})();var GR=new _("");function ym(t,...n){return Ki([{provide:ra,multi:!0,useValue:t},[],{provide:Zt,useFactory:qR},{provide:wc,multi:!0,useFactory:ZR},n.map(e=>e.\u0275providers)])}function qR(){return u(_o).routerState.root}function ZR(){let t=u(oe);return n=>{let e=t.get(tn);if(n!==e.components[0])return;let i=t.get(_o),r=t.get(YR);t.get(QR)===1&&i.initialNavigation(),t.get(KR,null,{optional:!0})?.setUpPreloading(),t.get(GR,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var YR=new _("",{factory:()=>new I}),QR=new _("",{factory:()=>1});var KR=new _("");var Co=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=U(!0);isLoading=this.loading.asReadonly();error=U("");errorMessage=this.error.asReadonly();teams=U([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(H(mr))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var ek=new _("cdk-dir-doc",{providedIn:"root",factory:()=>u(ee)}),tk=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ww(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?tk.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ft=(()=>{class t{get value(){return this.valueSignal()}valueSignal=U("ltr");change=new B;constructor(){let e=u(ek,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ww(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({})}return t})();var nk=["*"];var ik=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],rk=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],ok=new _("MAT_CARD_CONFIG"),Dw=(()=>{class t{appearance;constructor(){let e=u(ok,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&Z("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:nk,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ew=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var xw=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),Iw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:rk,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Se(ik),K(0),ae(1,"div",0),K(2,1),ue(),K(3,2))},encapsulation:2,changeDetection:0})}return t})();function oa(t){return t.buttons===0||t.detail===0}function sa(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var _m;function Mw(){if(_m==null){let t=typeof document<"u"?document.head:null;_m=!!(t&&(t.createShadowRoot||t.attachShadow))}return _m}function Cm(t){if(Mw()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function wm(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Dt(t){return t.composedPath?t.composedPath()[0]:t.target}var Dm;try{Dm=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Dm=!1}var me=(()=>{class t{_platformId=u(dr);isBrowser=this._platformId?aC(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Dm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aa;function Sw(){if(aa==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>aa=!0}))}finally{aa=aa||!1}return aa}function wo(t){return Sw()?t:!!t.capture}function Ii(t,n=0){return Tw(t)?Number(t):arguments.length===2?n:0}function Tw(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Rt(t){return t instanceof V?t.nativeElement:t}var Aw=new _("cdk-input-modality-detector-options"),Rw={ignoreKeys:[18,17,224,91,16]},kw=650,Em={passive:!0,capture:!0},Nw=(()=>{class t{_platform=u(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ze(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Dt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<kw||(this._modality.next(oa(e)?"keyboard":"mouse"),this._mostRecentTarget=Dt(e))};_onTouchstart=e=>{if(sa(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Dt(e)};constructor(){let e=u(N),i=u(ee),r=u(Aw,{optional:!0});if(this._options=y(y({},Rw),r),this.modalityDetected=this._modality.pipe(zi(1)),this.modalityChanged=this.modalityDetected.pipe(sl()),this._platform.isBrowser){let o=u(Qe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Em),o.listen(i,"mousedown",this._onMousedown,Em),o.listen(i,"touchstart",this._onTouchstart,Em)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),la=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(la||{}),Ow=new _("cdk-focus-monitor-default-options"),vd=wo({passive:!0,capture:!0}),Cr=(()=>{class t{_ngZone=u(N);_platform=u(me);_inputModalityDetector=u(Nw);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ee);_stopInputModalityDetector=new I;constructor(){let e=u(Ow,{optional:!0});this._detectionMode=e?.detectionMode||la.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Dt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Rt(e);if(!this._platform.isBrowser||r.nodeType!==1)return Y();let o=Cm(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Rt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Rt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===la.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===la.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?kw:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Dt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,vd),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,vd)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(xe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vd),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vd),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xm=(()=>{class t{_elementRef=u(V);_focusMonitor=u(Cr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new B;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var bd=new WeakMap,Et=(()=>{class t{_appRef;_injector=u(oe);_environmentInjector=u(be);load(e){let i=this._appRef=this._appRef||this._injector.get(tn),r=bd.get(i);r||(r={loaders:new Set,refs:[]},bd.set(i,r),i.onDestroy(()=>{bd.get(i)?.refs.forEach(o=>o.destroy()),bd.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Oc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})();function ni(t){return Array.isArray(t)?t:[t]}var Pw=new Set,wr,_d=(()=>{class t{_platform=u(me);_nonce=u(ur,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ak}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&sk(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sk(t,n){if(!Pw.has(t))try{wr||(wr=document.createElement("style"),n&&wr.setAttribute("nonce",n),wr.setAttribute("type","text/css"),document.head.appendChild(wr)),wr.sheet&&(wr.sheet.insertRule(`@media ${t} {body{ }}`,0),Pw.add(t))}catch(e){console.error(e)}}function ak(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ca=(()=>{class t{_mediaMatcher=u(_d);_zone=u(N);_queries=new Map;_destroySubject=new I;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Fw(ni(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Fw(ni(e)).map(s=>this._registerQuery(s).observable),o=Ho(r);return o=Mn(o.pipe(st(1)),o.pipe(zi(1),cn(0))),o.pipe(J(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new $(s=>{let a=l=>this._zone.run(()=>s.next(l));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(dt(i),J(({matches:s})=>({query:e,matches:s})),xe(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Fw(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function lk(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Lw=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ck=(()=>{class t{_mutationObserverFactory=u(Lw);_observedElements=new Map;_ngZone=u(N);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Rt(e);return new $(r=>{let s=this._observeElement(i).pipe(J(a=>a.filter(l=>!lk(l))),he(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new I,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Vw=(()=>{class t{_contentObserver=u(ck);_elementRef=u(V);event=new B;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Ii(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(cn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",le],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),jw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({providers:[Lw]})}return t})();var wd=(()=>{class t{_platform=u(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return uk(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=dk(yk(e));if(i&&(Bw(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=Bw(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!vk(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return bk(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dk(t){try{return t.frameElement}catch{return null}}function uk(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function fk(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function pk(t){return mk(t)&&t.type=="hidden"}function hk(t){return gk(t)&&t.hasAttribute("href")}function mk(t){return t.nodeName.toLowerCase()=="input"}function gk(t){return t.nodeName.toLowerCase()=="a"}function Uw(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Bw(t){if(!Uw(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function vk(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function bk(t){return pk(t)?!1:fk(t)||hk(t)||t.hasAttribute("contenteditable")||Uw(t)}function yk(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Cd=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?et(n,{injector:this._injector}):setTimeout(n)}},Im=(()=>{class t{_checker=u(wd);_ngZone=u(N);_document=u(ee);_injector=u(oe);constructor(){u(Et).load(yd)}create(e,i=!1){return new Cd(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _k=200,Dd=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:_k;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(gt(e=>this._pressedLetters.push(e)),cn(n),he(()=>this._pressedLetters.length>0),J(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function sn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Do=class{_items;_activeItemIndex=U(-1);_activeItem=U(null);_wrap=!1;_typeaheadSubscription=fe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof vn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Qn(n)&&(this._effectRef=hn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Dd(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||sn(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Qn(this._items)?this._items():this._items instanceof vn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var da=class extends Do{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var ua=class extends Do{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Sm={},xt=class t{_appId=u(eo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Sm.hasOwnProperty(n)||(Sm[n]=0),`${n}${e?t._infix+"-":""}${Sm[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var $w=" ";function Tm(t,n,e){let i=Ww(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join($w)))}function Ed(t,n,e){let i=Ww(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join($w)):t.removeAttribute(n)}function Ww(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Dn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Dn||{}),xd,Dr;function Id(){if(Dr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Dr=!1,Dr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Dr=!0;else{let t=Element.prototype.scrollTo;t?Dr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Dr=!1}}return Dr}function Eo(){if(typeof document!="object"||!document)return Dn.NORMAL;if(xd==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),xd=Dn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,xd=t.scrollLeft===0?Dn.NEGATED:Dn.INVERTED),t.remove()}return xd}function Am(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var xo,Gw=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Rm(){if(xo)return xo;if(typeof document!="object"||!document)return xo=new Set(Gw),xo;let t=document.createElement("input");return xo=new Set(Gw.filter(n=>(t.setAttribute("type",n),t.type===n))),xo}var qw={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Ck=new _("MATERIAL_ANIMATIONS"),Zw=null;function wk(){return u(Ck,{optional:!0})?.animationsDisabled||u(Cs,{optional:!0})==="NoopAnimations"?"di-disabled":(Zw??=u(_d).matchMedia("(prefers-reduced-motion)").matches,Zw?"reduced-motion":"enabled")}function it(){return wk()!=="enabled"}function qe(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Yt(t){return t!=null&&`${t}`!="false"}var an=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(an||{}),km=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=an.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Yw=wo({passive:!0,capture:!0}),Nm=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Yw)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Yw)))}_delegateEventHandler=n=>{let e=Dt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},fa={enterDuration:225,exitDuration:150},Dk=800,Qw=wo({passive:!0,capture:!0}),Kw=["mousedown","touchstart"],Xw=["mouseup","mouseleave","touchend","touchcancel"],Ek=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),pa=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Nm;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Rt(i)),o&&o.get(Et).load(Ek)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},fa),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||xk(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),p=f.transitionProperty,h=f.transitionDuration,g=p==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,x=new km(this,d,i,g);d.style.transform="scale3d(1, 1, 1)",x.state=an.FADING_IN,i.persistent||(this._mostRecentTransientRipple=x);let A=null;return!g&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let P=()=>{A&&(A.fallbackTimer=null),clearTimeout(rt),this._finishRippleTransition(x)},ve=()=>this._destroyRipple(x),rt=setTimeout(ve,c+100);d.addEventListener("transitionend",P),d.addEventListener("transitioncancel",ve),A={onTransitionEnd:P,onTransitionCancel:ve,fallbackTimer:rt}}),this._activeRipples.set(x,A),(g||!c)&&this._finishRippleTransition(x),x}fadeOutRipple(n){if(n.state===an.FADING_OUT||n.state===an.HIDDEN)return;let e=n.element,i=y(y({},fa),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=an.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Rt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Kw.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xw.forEach(e=>{this._triggerElement.addEventListener(e,this,Qw)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===an.FADING_IN?this._startFadeOutTransition(n):n.state===an.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=an.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=an.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=oa(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Dk;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!sa(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===an.VISIBLE||n.config.terminateOnPointerUp&&n.state===an.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Kw.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Xw.forEach(e=>n.removeEventListener(e,this,Qw)),this._pointerUpEventsRegistered=!1))}};function xk(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Md=new _("mat-ripple-global-options"),ha=(()=>{class t{_elementRef=u(V);_animationsDisabled=it();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(N),i=u(me),r=u(Md,{optional:!0}),o=u(oe);this._globalOptions=r||{},this._rippleRenderer=new pa(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Ik={capture:!0},Mk=["focus","mousedown","mouseenter","touchstart"],Om="mat-ripple-loader-uninitialized",Pm="mat-ripple-loader-class-name",Jw="mat-ripple-loader-centered",Sd="mat-ripple-loader-disabled",e0=(()=>{class t{_document=u(ee);_animationsDisabled=it();_globalRippleOptions=u(Md,{optional:!0});_platform=u(me);_ngZone=u(N);_injector=u(oe);_eventCleanups;_hosts=new Map;constructor(){let e=u(Qe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Mk.map(i=>e.listen(this._document,i,this._onInteraction,Ik)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Om,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Pm))&&e.setAttribute(Pm,i.className||""),i.centered&&e.setAttribute(Jw,""),i.disabled&&e.setAttribute(Sd,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Sd,""):e.removeAttribute(Sd)}_onInteraction=e=>{let i=Dt(e);if(i instanceof HTMLElement){let r=i.closest(`[${Om}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Pm)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??fa.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??fa.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Sd),rippleConfig:{centered:e.hasAttribute(Jw),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new pa(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(Om)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Io=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var Sk=["mat-icon-button",""],Tk=["*"],Ak=new _("MAT_BUTTON_CONFIG");function t0(t){return t==null?void 0:io(t)}var Td=(()=>{class t{_elementRef=u(V);_ngZone=u(N);_animationsDisabled=it();_config=u(Ak,{optional:!0});_focusMonitor=u(Cr);_cleanupClick;_renderer=u(Ae);_rippleLoader=u(e0);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(Et).load(Io);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(Ie("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),nn(r.color?"mat-"+r.color:""),Z("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",le],disabled:[2,"disabled","disabled",le],ariaDisabled:[2,"aria-disabled","ariaDisabled",le],disabledInteractive:[2,"disabledInteractive","disabledInteractive",le],tabIndex:[2,"tabIndex","tabIndex",t0],_tabindex:[2,"tabindex","_tabindex",t0]}})}return t})(),Fm=(()=>{class t extends Td{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[De],attrs:Sk,ngContentSelectors:Tk,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(),ze(0,"span",0),K(1),ze(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var n0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[nt]})}return t})();var Rk=["matButton",""],r0=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],o0=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],kk=["mat-fab",""];var i0=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),s0=(()=>{class t extends Td{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Nk(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?i0.get(this._appearance):null,o=i0.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[De],attrs:Rk,ngContentSelectors:o0,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(r0),ze(0,"span",0),K(1),ae(2,"span",1),K(3,1),ue(),K(4,2),ze(5,"span",2)(6,"span",3)),i&2&&Z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function Nk(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Ok=new _("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Lm}),Lm={color:"accent"},a0=(()=>{class t extends Td{_options=u(Ok,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Lm,this.color=this._options.color||Lm.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&Z("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",le]},exportAs:["matButton","matAnchor"],features:[De],attrs:kk,ngContentSelectors:o0,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(r0),ze(0,"span",0),K(1),ae(2,"span",1),K(3,1),ue(),K(4,2),ze(5,"span",2)(6,"span",3)),i&2&&Z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Pk=t=>[t,"map"],Fk=t=>[t,"convoy"],Lk=t=>[t,"shop"],Ad=class t{team=Ue.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:14,consts:[["align","end"],["matButton",""],[1,"buttonContent",3,"routerLink"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[1,"buttonContent"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(b(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),w(3),v()(),b(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),k(7,"img",3),w(8," Map "),v()(),b(9,"button",4)(10,"span",5)(11,"div",6),w(12,"?"),v(),w(13," Convoy "),v()(),b(14,"button",4)(15,"span",5),k(16,"img",7),w(17," Shop "),v()()()()),e&2&&(m(3),Me(" ",i.team().teamName," "),m(3),O("routerLink",Ct(8,Pk,i.GetTeamNameWithoutSpaces())),m(3),O("disabled",Tc(!i.team().showConvoyLink))("routerLink",Ct(10,Fk,i.GetTeamNameWithoutSpaces())),m(5),O("disabled",Tc(!i.team().showShopLink))("routerLink",Ct(12,Lk,i.GetTeamNameWithoutSpaces())))},dependencies:[Dw,Iw,Ew,xw,s0,gd],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var l0="(max-width: 900px)",Vn=class t{breakpointObserver=u(ca);isSmallWidth=U(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([l0]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[l0])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var Rd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(ae(0,"div",0)(1,"div",1),ze(2,"div",2),ae(3,"div",3),w(4,"Loading..."),ue()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var jn=class t{DARK_MODE_CLASS="dark-mode";document=u(ee);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=U(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=ht(()=>this.themeMode()==="dark");constructor(){hn(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var Vm=t=>({width:t});function Vk(t,n){t&1&&k(0,"loading-icon")}function jk(t,n){if(t&1&&(b(0,"div",7)(1,"p",17),w(2),v()()),t&2){let e=E();m(2),Me(" ",e.teamListService.errorMessage()," ")}}function Bk(t,n){if(t&1&&k(0,"team-listing",14),t&2){let e=n.$implicit;O("team",e)}}function Uk(t,n){t&1&&(b(0,"div",7)(1,"p",17),w(2," There are no teams available. "),v()())}function Hk(t,n){if(t&1&&Fe(0,Bk,1,1,"team-listing",14,Ot,!1,Uk,3,0,"div",7),t&2){let e=E();Le(e.teamListService.teamsList())}}var kd=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(Vn),this.themeService=u(jn),this.teamListService=u(Co),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(F(Vn),F(jn),F(Co))};static \u0275cmp=D({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(k(0,"div",0)(1,"div",1),b(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),w(6),v(),b(7,"button",5),pe("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),w(8,"Toggle Theme"),v()(),b(9,"div",6),M(10,Vk,1,0,"loading-icon")(11,jk,3,1,"div",7)(12,Hk,3,1),v()(),b(13,"div",3)(14,"div",8)(15,"h1",9),w(16,"Information"),v(),b(17,"p"),w(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),v(),b(19,"h2",9),w(20,"Resources"),v(),b(21,"ul")(22,"li")(23,"a",10),w(24,"Reddit Emblem Maps Documentation"),v()(),b(25,"li")(26,"a",11),w(27,"API Github Repository"),v()(),b(28,"li")(29,"a",12),w(30,"Webapp Github Repository"),v()()(),b(31,"h2",9),w(32,"Example"),v(),b(33,"p"),w(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),v(),b(35,"ul")(36,"li")(37,"a",13),w(38,"Team Example Google Spreadsheet"),v()()(),k(39,"team-listing",14),v(),b(40,"div",8)(41,"h2",9),w(42,"Credits"),v(),b(43,"ul")(44,"li")(45,"a",15),w(46,'Website background texture "Az Subtle" by Anli'),v()(),b(47,"li")(48,"a",16),w(49,`"Mac's Minecraft" pixel font`),v()()()()()()),e&2&&(m(3),O("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),m(),O("ngClass",i.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),m(2),Me(" This will be the logo! Screen width is <= 900px: ",i.breakpointService.isScreenSmallWidth()," "),m(3),O("ngStyle",Ct(9,Vm,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),m(),S(i.teamListService.isLoading()?10:i.teamListService.errorMessage().length>0?11:12),m(3),O("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),m(),O("ngStyle",Ct(11,Vm,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),m(25),O("team",i.teamExample),m(),O("ngStyle",Ct(13,Vm,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Ad,Ns,Os,Rd],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var zk=20,Mo=(()=>{class t{_ngZone=u(N);_platform=u(me);_renderer=u(Qe).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=zk){return this._platform.isBrowser?new $(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ol(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Rt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mi=(()=>{class t{elementRef=u(V);scrollDispatcher=u(Mo);ngZone=u(N);dir=u(Ft,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new I;_renderer=u(Ae);_cleanupScroll;_elementScrolled=new I;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Eo()!=Dn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Eo()==Dn.INVERTED?e.left=e.right:Eo()==Dn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Id()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&Eo()==Dn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Eo()==Dn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),$k=20,En=(()=>{class t{_platform=u(me);_listeners;_viewportSize=null;_change=new I;_document=u(ee);constructor(){let e=u(N),i=u(Qe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=$k){return e>0?this._change.pipe(ol(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ma=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({})}return t})(),jm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[nt,ma,nt,ma]})}return t})();var Fd=["*"],Wk=["content"],Gk=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],qk=["mat-drawer","mat-drawer-content","*"];function Zk(t,n){if(t&1){let e=Kn();b(0,"div",1),pe("click",function(){Ut(e);let r=E();return Ht(r._onBackdropClicked())}),v()}if(t&2){let e=E();Z("mat-drawer-shown",e._isShowingBackdrop())}}function Yk(t,n){t&1&&(b(0,"mat-drawer-content"),K(1,2),v())}var Qk=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Kk=["mat-sidenav","mat-sidenav-content","*"];function Xk(t,n){if(t&1){let e=Kn();b(0,"div",1),pe("click",function(){Ut(e);let r=E();return Ht(r._onBackdropClicked())}),v()}if(t&2){let e=E();Z("mat-drawer-shown",e._isShowingBackdrop())}}function Jk(t,n){t&1&&(b(0,"mat-sidenav-content"),K(1,2),v())}var eN=`.mat-drawer-container {
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
`;var tN=new _("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Hm=new _("MAT_DRAWER_CONTAINER"),Nd=(()=>{class t extends Mi{_platform=u(me);_changeDetectorRef=u(Ge);_container=u(Um);constructor(){let e=u(V),i=u(Mo),r=u(N);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Xn("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),Z("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Re([{provide:Mi,useExisting:t}]),De],ngContentSelectors:Fd,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},encapsulation:2,changeDetection:0})}return t})(),Bm=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(Im);_focusMonitor=u(Cr);_platform=u(me);_ngZone=u(N);_renderer=u(Ae);_interactivityChecker=u(wd);_doc=u(ee);_container=u(Hm,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Yt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Yt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Yt(e))}_opened=U(!1);_openedVia=null;_animationStarted=new I;_animationEnd=new I;openedChange=new B(!0);_openedStream=this.openedChange.pipe(he(e=>e),J(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),Fr(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),J(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),Fr(void 0));_destroyed=new I;onPositionChanged=new B;_content;_modeChanged=new I;_injector=u(oe);_changeDetectorRef=u(Ge);constructor(){this.openedChange.pipe(xe(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!sn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":et(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(st(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ke(Wk,5),i&2){let o;G(o=q())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(Ie("align",null)("tabIndex",r.mode!=="side"?"-1":null),Xn("visibility",!r._container&&!r.opened?"hidden":null),Z("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Fd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Se(),b(0,"div",1,0),K(2),v())},dependencies:[Mi],encapsulation:2,changeDetection:0})}return t})(),Um=(()=>{class t{_dir=u(Ft,{optional:!0});_element=u(V);_ngZone=u(N);_changeDetectorRef=u(Ge);_animationDisabled=it();_transitionsEnabled=!1;_allDrawers;_drawers=new vn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Yt(e)}_autosize=u(tN);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Yt(e)}_backdropOverride=null;backdropClick=new B;_start=null;_end=null;_left=null;_right=null;_destroyed=new I;_doCheckSubject=new I;_contentMargins={left:null,right:null};_contentMarginChanges=new I;get scrollable(){return this._userContent||this._content}_injector=u(oe);constructor(){let e=u(me),i=u(En);this._dir?.change.pipe(xe(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(xe(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(dt(this._allDrawers),xe(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(dt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(cn(10),xe(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(xe(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(xe(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(xe(this._drawers.changes)).subscribe(()=>{et({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(xe(Vt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Pt(o,Nd,5)(o,Bm,5),i&2){let s;G(s=q())&&(r._content=s.first),G(s=q())&&(r._allDrawers=s)}},viewQuery:function(i,r){if(i&1&&Ke(Nd,5),i&2){let o;G(o=q())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Re([{provide:Hm,useExisting:t}])],ngContentSelectors:qk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Se(Gk),M(0,Zk,1,2,"div",0),K(1),K(2,1),M(3,Yk,2,0,"mat-drawer-content")),i&2&&(S(r.hasBackdrop?0:-1),m(3),S(r._content?-1:3))},dependencies:[Nd],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Od=(()=>{class t extends Nd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Re([{provide:Mi,useExisting:t}]),De],ngContentSelectors:Fd,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},encapsulation:2,changeDetection:0})}return t})(),zm=(()=>{class t extends Bm{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Yt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ii(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ii(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(Ie("tabIndex",r.mode!=="side"?"-1":null)("align",null),Xn("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),Z("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Re([{provide:Bm,useExisting:t}]),De],ngContentSelectors:Fd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Se(),b(0,"div",1,0),K(2),v())},dependencies:[Mi],encapsulation:2,changeDetection:0})}return t})(),u0=(()=>{class t extends Um{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Pt(o,Od,5)(o,zm,5),i&2){let s;G(s=q())&&(r._content=s.first),G(s=q())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Re([{provide:Hm,useExisting:t},{provide:Um,useExisting:t}]),De],ngContentSelectors:Kk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Se(Qk),M(0,Xk,1,2,"div",0),K(1),K(2,1),M(3,Jk,2,0,"mat-sidenav-content")),i&2&&(S(r.hasBackdrop?0:-1),m(3),S(r._content?-1:3))},dependencies:[Od],styles:[eN],encapsulation:2,changeDetection:0})}return t})();var ga=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},$m=class extends ga{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ii=class extends ga{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Wm=class extends ga{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},Ld=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof $m)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ii)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Wm)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Vd=class extends Ld{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Pn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||oe.NULL,o=r.get(be,i.injector);e=Oc(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},f0=(()=>{class t extends ii{constructor(){let e=u(yt),i=u(ft);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[De]})}return t})(),Gm=(()=>{class t extends Ld{_moduleRef=u(Pn,{optional:!0});_document=u(ee);_viewContainerRef=u(ft);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new B;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[De]})}return t})(),p0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({})}return t})();var qm=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new $(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(he(e=>e.some(i=>i.target===n)),cl({bufferSize:1,refCount:!0}),xe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},jd=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(N);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new qm(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jm=["*"];function nN(t,n){t&1&&K(0)}var iN=["tabListContainer"],rN=["tabList"],oN=["tabListInner"],sN=["nextPaginator"],aN=["previousPaginator"],lN=["content"];function cN(t,n){}var dN=["tabBodyWrapper"],uN=["tabHeader"];function fN(t,n){}function pN(t,n){if(t&1&&At(0,fN,0,0,"ng-template",12),t&2){let e=E().$implicit;O("cdkPortalOutlet",e.templateLabel)}}function hN(t,n){if(t&1&&w(0),t&2){let e=E().$implicit;Te(e.textLabel)}}function mN(t,n){if(t&1){let e=Kn();b(0,"div",7,2),pe("click",function(){let r=Ut(e),o=r.$implicit,s=r.$index,a=E(),l=Cn(1);return Ht(a._handleClick(o,l,s))})("cdkFocusChange",function(r){let o=Ut(e).$index,s=E();return Ht(s._tabFocusChanged(r,o))}),k(2,"span",8)(3,"div",9),b(4,"span",10)(5,"span",11),M(6,pN,1,1,null,12)(7,hN,1,1),v()()()}if(t&2){let e=n.$implicit,i=n.$index,r=Cn(1),o=E();nn(e.labelClass),Z("mdc-tab--active",o.selectedIndex===i),O("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Ie("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),O("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),m(3),S(e.templateLabel?6:7)}}function gN(t,n){t&1&&K(0)}function vN(t,n){if(t&1){let e=Kn();b(0,"mat-tab-body",13),pe("_onCentered",function(){Ut(e);let r=E();return Ht(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Ut(e);let o=E();return Ht(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Ut(e);let o=E();return Ht(o._bodyCentered(r))}),v()}if(t&2){let e=n.$implicit,i=n.$index,r=E();nn(e.bodyClass),O("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),Ie("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var bN=new _("MatTabContent"),yN=(()=>{class t{template=u(yt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matTabContent",""]],features:[Re([{provide:bN,useExisting:t}])]})}return t})(),_N=new _("MatTabLabel"),v0=new _("MAT_TAB"),eg=(()=>{class t extends f0{_closestTab=u(v0,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Re([{provide:_N,useExisting:t}]),De]})}return t})(),b0=new _("MAT_TAB_GROUP"),tg=(()=>{class t{_viewContainerRef=u(ft);_closestTabGroup=u(b0,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new I;position=null;origin=null;isActive=!1;constructor(){u(Et).load(Io)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ii(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Pt(o,eg,5)(o,yN,7,yt),i&2){let s;G(s=q())&&(r.templateLabel=s.first),G(s=q())&&(r._explicitContent=s.first)}},viewQuery:function(i,r){if(i&1&&Ke(yt,7),i&2){let o;G(o=q())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&Ie("id",null)},inputs:{disabled:[2,"disabled","disabled",le],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Re([{provide:v0,useExisting:t}]),Be],ngContentSelectors:Jm,decls:1,vars:0,template:function(i,r){i&1&&(Se(),no(0,nN,1,0,"ng-template"))},encapsulation:2})}return t})(),Zm="mdc-tab-indicator--active",h0="mdc-tab-indicator--no-transition",Ym=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},CN=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Zm);return}let r=i.getBoundingClientRect(),o=e.width/r.width,s=e.left-r.left;i.classList.add(h0),this._inkBarContentElement.style.setProperty("transform",`translateX(${s}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(h0),i.classList.add(Zm),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Zm)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",le]}})}return t})();var y0=(()=>{class t extends CN{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(Ie("aria-disabled",!!r.disabled),Z("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",le]},features:[De]})}return t})(),m0={passive:!0},wN=650,DN=100,EN=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ge);_viewportRuler=u(En);_dir=u(Ft,{optional:!0});_ngZone=u(N);_platform=u(me);_sharedResizeObserver=u(jd);_injector=u(oe);_renderer=u(Ae);_animationsDisabled=it();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new I;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new I;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new B;indexFocused=new B;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),m0),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),m0))}ngAfterContentInit(){let e=this._dir?this._dir.change:Y("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(cn(32),xe(this._destroyed)),r=this._viewportRuler.change(150).pipe(xe(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ua(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),et(o,{injector:this._injector}),Vt(e,r,i,this._items.changes,this._itemsResized()).pipe(xe(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!="function"?Ve:this._items.changes.pipe(dt(this._items),Ye(e=>new $(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),zi(1),he(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!sn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=i.elementRef.nativeElement,a,l;this._getLayoutDirection()=="ltr"?(a=o,l=a+s):(l=this._tabListInner.nativeElement.offsetWidth-o,a=l-s);let c=this.scrollDistance,d=this.scrollDistance+r;a<c?this.scrollDistance-=c-a:l>d&&(this.scrollDistance+=Math.min(l-d,a-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Hi(wN,DN).pipe(xe(Vt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",le],selectedIndex:[2,"selectedIndex","selectedIndex",io]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),xN=(()=>{class t extends EN{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ym(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Pt(o,y0,4),i&2){let s;G(s=q())&&(r._items=s)}},viewQuery:function(i,r){if(i&1&&Ke(iN,7)(rN,7)(oN,7)(sN,5)(aN,5),i&2){let o;G(o=q())&&(r._tabListContainer=o.first),G(o=q())&&(r._tabList=o.first),G(o=q())&&(r._tabListInner=o.first),G(o=q())&&(r._nextPaginator=o.first),G(o=q())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&Z("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",le]},features:[De],ngContentSelectors:Jm,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Se(),b(0,"div",5,0),pe("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(s){return r._handlePaginatorPress("before",s)})("touchend",function(){return r._stopInterval()}),k(2,"div",6),v(),b(3,"div",7,1),pe("keydown",function(s){return r._handleKeydown(s)}),b(5,"div",8,2),pe("cdkObserveContent",function(){return r._onContentChanges()}),b(7,"div",9,3),K(9),v()()(),b(10,"div",10,4),pe("mousedown",function(s){return r._handlePaginatorPress("after",s)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),k(12,"div",6),v()),i&2&&(Z("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),O("matRippleDisabled",r._disableScrollBefore||r.disableRipple),m(3),Z("_mat-animation-noopable",r._animationsDisabled),m(2),Ie("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),m(5),Z("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),O("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ha,Vw],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),IN=new _("MAT_TABS_CONFIG"),g0=(()=>{class t extends Gm{_host=u(Qm);_ngZone=u(N);_centeringSub=fe.EMPTY;_leavingSub=fe.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(dt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matTabBodyHost",""]],features:[De]})}return t})(),Qm=(()=>{class t{_elementRef=u(V);_dir=u(Ft,{optional:!0});_ngZone=u(N);_injector=u(oe);_renderer=u(Ae);_diAnimationsDisabled=it();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=fe.EMPTY;_position;_previousPosition;_onCentering=new B;_beforeCentering=new B;_afterLeavingCenter=new B;_onCentered=new B(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Ge);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),et(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),et(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ke(g0,5)(lN,5),i&2){let o;G(o=q())&&(r._portalHost=o.first),G(o=q())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&Ie("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(b(0,"div",1,0),At(2,cN,0,0,"ng-template",2),v()),i&2&&Z("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[g0,Mi],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),_0=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ge);_ngZone=u(N);_tabsSubscription=fe.EMPTY;_tabLabelSubscription=fe.EMPTY;_tabBodySubscription=fe.EMPTY;_diAnimationsDisabled=it();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new vn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new B;focusChange=new B;animationDone=new B;selectedTabChange=new B(!0);_groupId;_isServer=!u(me).isBrowser;constructor(){let e=u(IN,{optional:!0});this._groupId=u(xt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(dt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new Km;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Vt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Pt(o,tg,5),i&2){let s;G(s=q())&&(r._allTabs=s)}},viewQuery:function(i,r){if(i&1&&Ke(dN,5)(uN,5)(Qm,5),i&2){let o;G(o=q())&&(r._tabBodyWrapper=o.first),G(o=q())&&(r._tabHeader=o.first),G(o=q())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(Ie("mat-align-tabs",r.alignTabs),nn("mat-"+(r.color||"primary")),Xn("--mat-tab-animation-duration",r.animationDuration),Z("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",le],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",le],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",le],selectedIndex:[2,"selectedIndex","selectedIndex",io],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",io],disablePagination:[2,"disablePagination","disablePagination",le],disableRipple:[2,"disableRipple","disableRipple",le],preserveContent:[2,"preserveContent","preserveContent",le],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Re([{provide:b0,useExisting:t}])],ngContentSelectors:Jm,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Se(),b(0,"mat-tab-header",3,0),pe("indexFocused",function(s){return r._focusChanged(s)})("selectFocusedIndex",function(s){return r.selectedIndex=s}),Fe(2,mN,8,17,"div",4,Ec),v(),M(4,gN,1,0),b(5,"div",5,1),Fe(7,vN,1,10,"mat-tab-body",6,Ec),v()),i&2&&(O("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Dc("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),m(2),Le(r._tabs),m(2),S(r._isServer?4:-1),m(),Z("_mat-animation-noopable",r._animationsDisabled()),m(2),Le(r._tabs))},dependencies:[xN,y0,xm,ha,Gm,Qm],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Km=class{index;tab};var Bd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-dice-roller-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ae(0,"p"),w(1,"map-dice-roller-sidenav works!"),ue())},encapsulation:2})};var Ud=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-links-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ae(0,"p"),w(1,"map-links-sidenav works!"),ue())},encapsulation:2})};var ke=class t{constructor(n){this.http=n;this.http=u(mr)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=U(!0);isLoading=this.loading.asReadonly();error=U("");errorMessage=this.error.asReadonly();map=U({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(H(mr))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var I0=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(F(Ae),F(V))};static \u0275dir=L({type:t})}return t})(),MN=(()=>{class t extends I0{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,features:[De]})}return t})(),nu=new _("");var SN={provide:nu,useExisting:Qt(()=>iu),multi:!0};function TN(){let t=rn()?rn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var AN=new _(""),iu=(()=>{class t extends I0{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!TN())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(F(Ae),F(V),F(AN,8))};static \u0275dir=L({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&pe("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Re([SN]),De]})}return t})();function ig(t){return t==null||rg(t)===0}function rg(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var og=new _(""),sg=new _(""),RN=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,zd=class{static min(n){return kN(n)}static max(n){return NN(n)}static required(n){return ON(n)}static requiredTrue(n){return PN(n)}static email(n){return FN(n)}static minLength(n){return LN(n)}static maxLength(n){return VN(n)}static pattern(n){return jN(n)}static nullValidator(n){return M0()}static compose(n){return N0(n)}static composeAsync(n){return O0(n)}};function kN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function NN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function ON(t){return ig(t.value)?{required:!0}:null}function PN(t){return t.value===!0?null:{required:!0}}function FN(t){return ig(t.value)||RN.test(t.value)?null:{email:!0}}function LN(t){return n=>{let e=n.value?.length??rg(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function VN(t){return n=>{let e=n.value?.length??rg(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function jN(t){if(!t)return M0;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(ig(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function M0(t){return null}function S0(t){return t!=null}function T0(t){return yi(t)?Oe(t):t}function A0(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function R0(t,n){return n.map(e=>e(t))}function BN(t){return!t.validate}function k0(t){return t.map(n=>BN(n)?n:e=>n.validate(e))}function N0(t){if(!t)return null;let n=t.filter(S0);return n.length==0?null:function(e){return A0(R0(e,n))}}function ag(t){return t!=null?N0(k0(t)):null}function O0(t){if(!t)return null;let n=t.filter(S0);return n.length==0?null:function(e){let i=R0(e,n).map(T0);return Ku(i).pipe(J(A0))}}function lg(t){return t!=null?O0(k0(t)):null}function C0(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function P0(t){return t._rawValidators}function F0(t){return t._rawAsyncValidators}function ng(t){return t?Array.isArray(t)?t:[t]:[]}function $d(t,n){return Array.isArray(t)?t.includes(n):t===n}function w0(t,n){let e=ng(n);return ng(t).forEach(r=>{$d(e,r)||e.push(r)}),e}function D0(t,n){return ng(n).filter(e=>!$d(t,e))}var Wd=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ag(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=lg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Er=class extends Wd{name;get formDirective(){return null}get path(){return null}},xr=class extends Wd{_parent=null;name=null;valueAccessor=null},Gd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var L0=(()=>{class t extends Gd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(xr,2))};static \u0275dir=L({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[De]})}return t})(),V0=(()=>{class t extends Gd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(Er,10))};static \u0275dir=L({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[De]})}return t})();var ba="VALID",Hd="INVALID",To="PENDING",ya="DISABLED",Si=class{},qd=class extends Si{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ca=class extends Si{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},wa=class extends Si{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ao=class extends Si{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Zd=class extends Si{source;constructor(n){super(),this.source=n}},Yd=class extends Si{source;constructor(n){super(),this.source=n}};function j0(t){return(ru(t)?t.validators:t)||null}function UN(t){return Array.isArray(t)?ag(t):t||null}function B0(t,n){return(ru(n)?n.asyncValidators:t)||null}function HN(t){return Array.isArray(t)?lg(t):t||null}function ru(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function zN(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new T(1e3,"");if(!i[e])throw new T(1001,"")}function $N(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new T(-1002,"")})}var Qd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ye(this.statusReactive)}set status(n){ye(()=>this.statusReactive.set(n))}_status=ht(()=>this.statusReactive());statusReactive=U(void 0);get valid(){return this.status===ba}get invalid(){return this.status===Hd}get pending(){return this.status===To}get disabled(){return this.status===ya}get enabled(){return this.status!==ya}errors;get pristine(){return ye(this.pristineReactive)}set pristine(n){ye(()=>this.pristineReactive.set(n))}_pristine=ht(()=>this.pristineReactive());pristineReactive=U(!0);get dirty(){return!this.pristine}get touched(){return ye(this.touchedReactive)}set touched(n){ye(()=>this.touchedReactive.set(n))}_touched=ht(()=>this.touchedReactive());touchedReactive=U(!1);get untouched(){return!this.touched}_events=new I;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(w0(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(w0(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(D0(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(D0(n,this._rawAsyncValidators))}hasValidator(n){return $d(this._rawValidators,n)}hasAsyncValidator(n){return $d(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(X(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new wa(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new wa(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(X(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ca(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ca(!0,i))}markAsPending(n={}){this.status=To;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ao(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(X(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ya,this.errors=null,this._forEachChild(r=>{r.disable(X(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new qd(this.value,i)),this._events.next(new Ao(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ba,this._forEachChild(i=>{i.enable(X(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(X(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ba||this.status===To)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new qd(this.value,e)),this._events.next(new Ao(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(X(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ya:ba}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=To,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=T0(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Ao(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new B,this.statusChanges=new B}_calculateStatus(){return this._allControlsDisabled()?ya:this.errors?Hd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(To)?To:this._anyControlsHaveStatus(Hd)?Hd:ba}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Ca(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new wa(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ru(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=UN(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=HN(this._rawAsyncValidators)}},Kd=class extends Qd{constructor(n,e,i){super(j0(e),B0(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){$N(this,!0,n),Object.keys(n).forEach(i=>{zN(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,X(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Yd(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Da=new _("",{factory:()=>ou}),ou="always";function Xd(t,n,e=ou){cg(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),GN(t,n),ZN(t,n),qN(t,n),WN(t,n)}function Jd(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),tu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function eu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function WN(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function cg(t,n){let e=P0(t);n.validator!==null?t.setValidators(C0(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=F0(t);n.asyncValidator!==null?t.setAsyncValidators(C0(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();eu(n._rawValidators,r),eu(n._rawAsyncValidators,r)}function tu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=P0(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=F0(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return eu(n._rawValidators,i),eu(n._rawAsyncValidators,i),e}function GN(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&U0(t,n)})}function qN(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&U0(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function U0(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ZN(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function H0(t,n){t==null,cg(t,n)}function YN(t,n){return tu(t,n)}function QN(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function KN(t){return Object.getPrototypeOf(t.constructor)===MN}function z0(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function XN(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===iu?e=o:KN(o)?i=o:r=o}),r||i||e||null}function JN(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var eO={provide:Er,useExisting:Qt(()=>Ea)},_a=Promise.resolve(),Ea=(()=>{class t extends Er{callSetDisabledState;get submitted(){return ye(this.submittedReactive)}_submitted=ht(()=>this.submittedReactive());submittedReactive=U(!1);_directives=new Set;form;ngSubmit=new B;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Kd({},ag(e),lg(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){_a.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Xd(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){_a.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){_a.then(()=>{let i=this._findContainer(e.path),r=new Kd({});H0(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){_a.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){_a.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),z0(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Zd(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(F(og,10),F(sg,10),F(Da,8))};static \u0275dir=L({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&pe("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([eO]),De]})}return t})();function E0(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function x0(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var dg=class extends Qd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(j0(e),B0(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ru(e)&&(e.nonNullable||e.initialValueIsDefault)&&(x0(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Yd(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){E0(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){E0(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){x0(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var tO=t=>t instanceof dg;var $0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var nO=(()=>{class t extends Er{callSetDisabledState;get submitted(){return ye(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ht(()=>this._submittedReactive());_submittedReactive=U(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(tu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Xd(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Jd(e.control||null,e,!1),JN(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,z0(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Zd(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Jd(i||null,e),tO(r)&&(Xd(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);H0(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&YN(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){cg(this.form,this),this._oldForm&&tu(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(F(og,10),F(sg,10),F(Da,8))};static \u0275dir=L({type:t,features:[De,Be]})}return t})();var W0=new _(""),iO={provide:xr,useExisting:Qt(()=>ug)},ug=(()=>{class t extends xr{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new B;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=XN(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Jd(i,this,!1),Xd(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}QN(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Jd(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(F(og,10),F(sg,10),F(nu,10),F(W0,8),F(Da,8))};static \u0275dir=L({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Re([iO]),De,Be]})}return t})();var rO={provide:Er,useExisting:Qt(()=>fg)},fg=(()=>{class t extends nO{form=null;ngSubmit=new B;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&pe("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([rO]),De]})}return t})();var G0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({})}return t})();var q0=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Da,useValue:e.callSetDisabledState??ou}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[G0]})}return t})(),Z0=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:W0,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Da,useValue:e.callSetDisabledState??ou}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[G0]})}return t})();var sO=["notch"],aO=["matFormFieldNotchedOutline",""],lO=["*"],Y0=["iconPrefixContainer"],Q0=["textPrefixContainer"],K0=["iconSuffixContainer"],X0=["textSuffixContainer"],cO=["textField"],dO=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],uO=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function fO(t,n){t&1&&k(0,"span",21)}function pO(t,n){if(t&1&&(b(0,"label",20),K(1,1),M(2,fO,1,0,"span",21),v()),t&2){let e=E(2);O("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Ie("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),S(!e.hideRequiredMarker&&e._control.required?2:-1)}}function hO(t,n){if(t&1&&M(0,pO,3,5,"label",20),t&2){let e=E();S(e._hasFloatingLabel()?0:-1)}}function mO(t,n){t&1&&k(0,"div",7)}function gO(t,n){}function vO(t,n){if(t&1&&At(0,gO,0,0,"ng-template",13),t&2){E(2);let e=Cn(1);O("ngTemplateOutlet",e)}}function bO(t,n){if(t&1&&(b(0,"div",9),M(1,vO,1,1,null,13),v()),t&2){let e=E();O("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),S(e._forceDisplayInfixLabel()?-1:1)}}function yO(t,n){t&1&&(b(0,"div",10,2),K(2,2),v())}function _O(t,n){t&1&&(b(0,"div",11,3),K(2,3),v())}function CO(t,n){}function wO(t,n){if(t&1&&At(0,CO,0,0,"ng-template",13),t&2){E();let e=Cn(1);O("ngTemplateOutlet",e)}}function DO(t,n){t&1&&(b(0,"div",14,4),K(2,4),v())}function EO(t,n){t&1&&(b(0,"div",15,5),K(2,5),v())}function xO(t,n){t&1&&k(0,"div",16)}function IO(t,n){t&1&&(b(0,"div",18),K(1,6),v())}function MO(t,n){if(t&1&&(b(0,"mat-hint",22),w(1),v()),t&2){let e=E(2);O("id",e._hintLabelId),m(),Te(e.hintLabel)}}function SO(t,n){if(t&1&&(b(0,"div",19),M(1,MO,2,2,"mat-hint",22),K(2,7),k(3,"div",23),K(4,8),v()),t&2){let e=E();m(),S(e.hintLabel?1:-1)}}var pg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-label"]]})}return t})(),TO=new _("MatError");var hg=(()=>{class t{align="start";id=u(xt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(pt("id",r.id),Ie("align",null),Z("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),AO=new _("MatPrefix");var RO=new _("MatSuffix");var oD=new _("FloatingLabelParent"),J0=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(jd);_ngZone=u(N);_parent=u(oD);_resizeSubscription=new fe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return kO(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function kO(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var eD="mdc-line-ripple--active",su="mdc-line-ripple--deactivating",tD=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(N),i=u(Ae);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(su),e.add(eD)}deactivate(){this._elementRef.nativeElement.classList.add(su)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(su);e.propertyName==="opacity"&&r&&i.remove(eD,su)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),nD=(()=>{class t{_elementRef=u(V);_ngZone=u(N);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ke(sO,5),i&2){let o;G(o=q())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&Z("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:aO,ngContentSelectors:lO,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Se(),ze(0,"div",1),ae(1,"div",2,0),K(3),ue(),ze(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),mg=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t})}return t})();var xa=new _("MatFormField"),NO=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),iD="fill",OO="auto",rD="fixed",PO="translateY(-50%)",au=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ge);_platform=u(me);_idGenerator=u(xt);_ngZone=u(N);_defaults=u(NO,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Rs("iconPrefixContainer");_textPrefixContainerSignal=Rs("textPrefixContainer");_iconSuffixContainerSignal=Rs("iconSuffixContainer");_textSuffixContainerSignal=Rs("textSuffixContainer");_prefixSuffixContainers=ht(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Q_(pg);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Yt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||OO}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||iD;this._appearanceSignal.set(i)}_appearanceSignal=U(iD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||rD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||rD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=it();constructor(){let e=this._defaults,i=u(Ft);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),hn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ht(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(dt([void 0,void 0]),J(()=>[i.errorState,i.userAriaDescribedBy]),ll(),he(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(xe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Vt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){J_({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ht(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,g=`var(--mat-mdc-form-field-label-transform, ${PO} translateX(${h}))`,x=s+a+l+c;return[g,x]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(xc(o,r._labelChild,pg,5),Pt(o,mg,5)(o,AO,5)(o,RO,5)(o,TO,5)(o,hg,5)),i&2){Mc();let s;G(s=q())&&(r._formFieldControl=s.first),G(s=q())&&(r._prefixChildren=s),G(s=q())&&(r._suffixChildren=s),G(s=q())&&(r._errorChildren=s),G(s=q())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(Ic(r._iconPrefixContainerSignal,Y0,5)(r._textPrefixContainerSignal,Q0,5)(r._iconSuffixContainerSignal,K0,5)(r._textSuffixContainerSignal,X0,5),Ke(cO,5)(Y0,5)(Q0,5)(K0,5)(X0,5)(J0,5)(nD,5)(tD,5)),i&2){Mc(4);let o;G(o=q())&&(r._textField=o.first),G(o=q())&&(r._iconPrefixContainer=o.first),G(o=q())&&(r._textPrefixContainer=o.first),G(o=q())&&(r._iconSuffixContainer=o.first),G(o=q())&&(r._textSuffixContainer=o.first),G(o=q())&&(r._floatingLabel=o.first),G(o=q())&&(r._notchedOutline=o.first),G(o=q())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&Z("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Re([{provide:xa,useExisting:t},{provide:oD,useExisting:t}])],ngContentSelectors:uO,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Se(dO),At(0,hO,1,1,"ng-template",null,0,Dh),b(2,"div",6,1),pe("click",function(s){return r._control.onContainerClick(s)}),M(4,mO,1,0,"div",7),b(5,"div",8),M(6,bO,2,2,"div",9),M(7,yO,3,0,"div",10),M(8,_O,3,0,"div",11),b(9,"div",12),M(10,wO,1,1,null,13),K(11),v(),M(12,DO,3,0,"div",14),M(13,EO,3,0,"div",15),v(),M(14,xO,1,0,"div",16),v(),b(15,"div",17),M(16,IO,2,0,"div",18)(17,SO,5,1,"div",19),v()),i&2){let o;m(2),Z("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),m(2),S(!r._hasOutline()&&!r._control.disabled?4:-1),m(2),S(r._hasOutline()?6:-1),m(),S(r._hasIconPrefix?7:-1),m(),S(r._hasTextPrefix?8:-1),m(2),S(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),m(2),S(r._hasTextSuffix?12:-1),m(),S(r._hasIconSuffix?13:-1),m(),S(r._hasOutline()?-1:14),m(),Z("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();m(),S((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[J0,nD,Oh,tD,hg],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ia=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[jw,au,nt]})}return t})();var LO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),VO={passive:!0},sD=(()=>{class t{_platform=u(me);_ngZone=u(N);_renderer=u(Qe).createRenderer(null,null);_styleLoader=u(Et);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ve;this._styleLoader.load(LO);let i=Rt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new I,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,VO)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Rt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({})}return t})();var lD=new _("MAT_INPUT_VALUE_ACCESSOR");var cD=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lu=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var jO=["button","checkbox","file","hidden","image","radio","range","reset","submit"],BO=new _("MAT_INPUT_CONFIG"),dD=(()=>{class t{_elementRef=u(V);_platform=u(me);ngControl=u(xr,{optional:!0,self:!0});_autofillMonitor=u(sD);_ngZone=u(N);_formField=u(xa,{optional:!0});_renderer=u(Ae);_uid=u(xt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(BO,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new I;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Yt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(zd.required)??!1}set required(e){this._required=Yt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Rm().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Yt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Rm().has(e));constructor(){let e=u(Ea,{optional:!0}),i=u(fg,{optional:!0}),r=u(cD),o=u(lD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Qn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new lu(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&hn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){jO.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&pe("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(pt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Ie("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Z("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},exportAs:["matInput"],features:[Re([{provide:mg,useExisting:t}]),Be]})}return t})(),uD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[Ia,Ia,aD,nt]})}return t})();var fD=(()=>{class t{_animationsDisabled=it();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&Z("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var HO=["text"],zO=[[["mat-icon"]],"*"],$O=["mat-icon","*"];function WO(t,n){if(t&1&&k(0,"mat-pseudo-checkbox",1),t&2){let e=E();O("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function GO(t,n){if(t&1&&k(0,"mat-pseudo-checkbox",3),t&2){let e=E();O("disabled",e.disabled)}}function qO(t,n){if(t&1&&(b(0,"span",4),w(1),v()),t&2){let e=E();m(),Me("(",e.group.label,")")}}var gg=new _("MAT_OPTION_PARENT_COMPONENT"),vg=new _("MatOptgroup");var Ma=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Ro=(()=>{class t{_element=u(V);_changeDetectorRef=u(Ge);_parent=u(gg,{optional:!0});group=u(vg,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(xt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=U(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new B;_text;_stateChanges=new I;constructor(){let e=u(Et);e.load(Io),e.load(yd),this._signalDisableRipple=!!this._parent&&Qn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!sn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ma(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ke(HO,7),i&2){let o;G(o=q())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&pe("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(pt("id",r.id),Ie("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),Z("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",le]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:$O,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Se(zO),M(0,WO,1,2,"mat-pseudo-checkbox",1),K(1),b(2,"span",2,0),K(4,1),v(),M(5,GO,1,1,"mat-pseudo-checkbox",3),M(6,qO,2,1,"span",4),k(7,"div",5)),i&2&&(S(r.multiple?0:-1),m(5),S(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),m(),S(r.group&&r.group._inert?6:-1),m(),O("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[fD,ha],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function pD(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function hD(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var mD=Id();function wD(t){return new cu(t.get(En),t.get(ee))}var cu=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=qe(-this._previousScrollPosition.left),n.style.top=qe(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),mD&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),mD&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function DD(t,n){return new du(t.get(Mo),t.get(N),t.get(En),n)}var du=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(he(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Sa=class{enable(){}disable(){}attach(){}};function bg(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function gD(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function gu(t,n){return new uu(t.get(Mo),t.get(En),t.get(N),n)}var uu=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();bg(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},ED=(()=>{class t{_injector=u(oe);constructor(){}noop=()=>new Sa;close=e=>DD(this._injector,e);block=()=>wD(this._injector);reposition=e=>gu(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ko=class{positionStrategy;scrollStrategy=new Sa;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var fu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var xD=(()=>{class t{_attachedOverlays=[];_document=u(ee);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ID=(()=>{class t extends xD{_ngZone=u(N);_renderer=u(Qe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),MD=(()=>{class t extends xD{_platform=u(me);_ngZone=u(N);_renderer=u(Qe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Dt(e)};_clickListener=e=>{let i=Dt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(vD(a.overlayElement,i)||vD(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vD(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var SD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),TD=(()=>{class t{_platform=u(me);_containerElement;_document=u(ee);_styleLoader=u(Et);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Am()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Am()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(SD)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yg=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function _g(t){return t&&t.nodeType===1}var pu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=fe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,l,c,d=!1,f,p){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=et(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=X(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=qe(this._config.width),n.height=qe(this._config.height),n.minWidth=qe(this._config.minWidth),n.minHeight=qe(this._config.minHeight),n.maxWidth=qe(this._config.maxWidth),n.maxHeight=qe(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;_g(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new yg(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=ni(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=et(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},bD="cdk-overlay-connected-position-bounding-box",ZO=/([A-Za-z%]+)$/;function vu(t,n){return new hu(n,t.get(En),t.get(ee),t.get(me),t.get(TD))}var hu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=fe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(bD),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ir(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(bD),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:_g(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=_D(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-i.width,p=0-a,h=a+o.height-i.height,g=this._subtractOverflows(o.width,d,f),x=this._subtractOverflows(o.height,p,h),A=g*x;return{visibleArea:A,isCompletelyWithinViewport:o.width*o.height===A,fitsInViewportVertically:x===o.height,fitsInViewportHorizontally:g==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=yD(this._overlayRef.getConfig().minHeight),a=yD(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=_D(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!YO(this._lastScrollVisibility,i)){let r=new fu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),g=this._lastBoundingBoxSize.height;o=h*2,s=n.y-h,o>g&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-g/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,p;if(c)p=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),g=this._lastBoundingBoxSize.width;d=h*2,f=n.x-h,d>g&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-g/2)}return{top:s,left:f,bottom:a,right:p,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=qe(i.width),r.height=qe(i.height),r.top=qe(i.top)||"auto",r.bottom=qe(i.bottom)||"auto",r.left=qe(i.left)||"auto",r.right=qe(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=qe(o)),s&&(r.maxWidth=qe(s))}this._lastBoundingBoxSize=i,Ir(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ir(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ir(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Ir(i,this._getExactOverlayY(e,n,d)),Ir(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=qe(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=qe(s.maxWidth):o&&(i.maxWidth="")),Ir(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=qe(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=qe(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:gD(n,i),isOriginOutsideView:bg(n,i),isOverlayClipped:gD(e,i),isOverlayOutsideView:bg(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ni(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Ir(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function yD(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(ZO);return!e||e==="px"?parseFloat(n):null}return t||null}function _D(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function YO(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var CD="cdk-global-overlay-wrapper";function AD(t){return new mu}var mu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(CD),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",h="",g="",x="";l?x="flex-start":d==="center"?(x="center",p?g=f:h=f):p?d==="left"||d==="end"?(x="flex-end",h=f):(d==="right"||d==="start")&&(x="flex-start",g=f):d==="left"||d==="start"?(x="flex-start",h=f):(d==="right"||d==="end")&&(x="flex-end",g=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":g,e.justifyContent=x,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(CD),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},RD=(()=>{class t{_injector=u(oe);constructor(){}global(){return AD()}flexibleConnectedTo(e){return vu(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),kD=new _("OVERLAY_DEFAULT_CONFIG");function bu(t,n){t.get(Et).load(SD);let e=t.get(TD),i=t.get(ee),r=t.get(xt),o=t.get(tn),s=t.get(Ft),a=t.get(Ae,null,{optional:!0})||t.get(Qe).createRenderer(null,null),l=new ko(n),c=t.get(kD,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return _g(p)?p.after(f):p?.type==="parent"?p.element.appendChild(f):e.getContainerElement().appendChild(f),new pu(new Vd(d,o,t),f,d,l,t.get(N),t.get(ID),i,t.get(Ci),t.get(MD),n?.disableAnimations??t.get(Cs,null,{optional:!0})==="NoopAnimations",t.get(be),a)}var ND=(()=>{class t{scrollStrategies=u(ED);_positionBuilder=u(RD);_injector=u(oe);constructor(){}create(e){return bu(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({providers:[ND],imports:[nt,p0,jm,jm]})}return t})();var OD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[nt]})}return t})();var wg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[n0,OD,Ro,nt]})}return t})();var QO=["panel"],KO=["*"];function XO(t,n){if(t&1&&(ae(0,"div",1,0),K(2),ue()),t&2){let e=n.id,i=E();nn(i._classList),Z("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),pt("id",i.id),Ie("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var Dg=class{source;option;constructor(n,e){this.source=n,this.option=e}},PD=new _("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),FD=(()=>{class t{_changeDetectorRef=u(Ge);_elementRef=u(V);_defaults=u(PD);_animationsDisabled=it();_activeOptionChanges=fe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new B;opened=new B;closed=new B;optionActivated=new B;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(xt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(me);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new da(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Dg(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Pt(o,Ro,5)(o,vg,5),i&2){let s;G(s=q())&&(r.options=s),G(s=q())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&Ke(yt,7)(QO,5),i&2){let o;G(o=q())&&(r.template=o.first),G(o=q())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",le],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",le],requireSelection:[2,"requireSelection","requireSelection",le],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",le],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",le]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Re([{provide:gg,useExisting:t}])],ngContentSelectors:KO,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Se(),no(0,XO,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var JO={provide:nu,useExisting:Qt(()=>Eg),multi:!0};var eP=new _("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(oe);return()=>gu(t)}}),Eg=(()=>{class t{_environmentInjector=u(be);_element=u(V);_injector=u(oe);_viewContainerRef=u(ft);_zone=u(N);_changeDetectorRef=u(Ge);_dir=u(Ft,{optional:!0});_formField=u(xa,{optional:!0,host:!0});_viewportRuler=u(En);_scrollStrategy=u(eP);_renderer=u(Ae);_animationsDisabled=it();_defaults=u(PD,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new I;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=fe.EMPTY;_breakpointObserver=u(ca);_handsetLandscapeSubscription=fe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new I;_overlayPanelClass=ni(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Ed(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Vt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(he(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(he(()=>this._overlayAttached)):Y()).pipe(J(e=>e instanceof Ma?e:null))}optionSelections=Ui(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(dt(e),Ye(()=>Vt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Ye(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new $(e=>{let i=o=>{let s=Dt(o),a=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&s!==this._element.nativeElement&&!this._hasFocus()&&(!a||!a.contains(s))&&(!l||!l.contains(s))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(s)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=sn(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let s=this.autocomplete._keyManager.activeItem,a=r===38||r===40;r===9||a&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):a&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(a||this.autocomplete._keyManager.activeItem!==s)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(s=>s.selected);if(o){let s=this._getDisplayValue(o.value);r!==s&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return wm()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new $(r=>{et(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(gt(()=>this._positionStrategy.reapplyLastPosition()),Ju(0))??Y();return Vt(e,i).pipe(Ye(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),st(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;Tm(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new ii(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=bu(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(qw.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!sn(e)||e.keyCode===38&&sn(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new ko({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=vu(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],s;this.position==="above"?s=o:this.position==="below"?s=i:s=[...i,...o],e.withPositions(s)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=pD(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let s=o._getHostElement(),a=hD(s.offsetTop,s.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(a)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&Ed(this._trackedModal,"aria-owns",i),Tm(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Ed(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&pe("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(s){return r._handleInput(s)})("keydown",function(s){return r._handleKeydown(s)})("click",function(){return r._handleClick()}),i&2&&Ie("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",le]},exportAs:["matAutocompleteTrigger"],features:[Re([JO]),Be]})}return t})(),LD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=se({imports:[Cg,wg,ma,wg,nt]})}return t})();function nP(t,n){if(t&1&&(ae(0,"a",4),w(1),ue()),t&2){let e=E();pt("href",e.titleHref(),Nt),m(),Te(e.title())}}function iP(t,n){if(t&1&&w(0),t&2){let e=E();Me(" ",e.title()," ")}}function rP(t,n){if(t&1&&(ae(0,"p"),w(1),ue()),t&2){let e=n.$implicit;m(),Te(e)}}var yu=class t{label=Ue.required();title=Ue.required();titleHref=Ue();textFields=Ue();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(ae(0,"div",0)(1,"h2",1),w(2),ue(),ze(3,"div",2),ae(4,"h2",3),M(5,nP,2,2,"a",4)(6,iP,1,1),ue()(),Fe(7,rP,2,1,"p",null,Ot)),e&2&&(m(2),Te(i.label()),m(3),S(i.titleHref()?5:6),m(2),Le(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function oP(t,n){t&1&&w(0," \xA0 ")}function sP(t,n){if(t&1&&(w(0),M(1,oP,1,0),w(2)),t&2){let e=E(3);Me(" ",e.constants.currencySymbol," "),m(),S(e.constants.includeSpace?1:-1),m(),Me(" ",e.amount()," ")}}function aP(t,n){t&1&&w(0," \xA0 ")}function lP(t,n){if(t&1&&(w(0),M(1,aP,1,0),w(2)),t&2){let e=E(3);Me(" ",e.amount()," "),m(),S(e.constants.includeSpace?1:-1),m(),Me(" ",e.constants.currencySymbol," ")}}function cP(t,n){if(t&1&&M(0,sP,3,3)(1,lP,3,3),t&2){let e=E(2);S(e.constants.isSymbolLeftAligned?0:1)}}function dP(t,n){if(t&1&&w(0),t&2){let e=E(2);Me(" ",e.amount()," ")}}function uP(t,n){if(t&1&&M(0,cP,2,1)(1,dP,1,1),t&2){let e=E();S(e.constants?0:1)}}var _u=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(ke),this.constants=this.teamDataService.getCurrencyConstants()}amount=Ue.required();constants;static \u0275fac=function(e){return new(e||t)(F(ke))};static \u0275cmp=D({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&M(0,uP,2,1),e&2&&S(i.amount()?0:-1)},encapsulation:2})};function fP(t,n){if(t&1&&ze(0,"img",1),t&2){let e=E();pt("src",e.systemData==null?null:e.systemData.spriteURL,Nt)}}var Cu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(ke)}tag=Ue.required();systemData;ngOnInit(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(F(ke))};static \u0275cmp=D({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},decls:4,vars:3,consts:[[1,"tagContainer",3,"title"],[3,"src"]],template:function(e,i){e&1&&(ae(0,"div",0),M(1,fP,1,1,"img",1),ae(2,"p"),w(3),ue()()),e&2&&(pt("title",i.tag()),m(),S(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),m(2),Te(i.tag()))},styles:["div.tagContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 16px;border-radius:0 8px;background:var(--mat-sys-primary-container)}div.tagContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down}div.tagContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}"]})};var pP=t=>({background:t}),wu=class t{percentage=Ue.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";above50Primary="#3CD66F";above50Secondary="#d3efdd";above25Primary="#FFC107";above25Secondary="#fff4d4";below25Primary="#F13535";below25Secondary="#efd1d1";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Be],decls:1,vars:3,consts:[[1,"hpBar",3,"ngStyle"]],template:function(e,i){e&1&&k(0,"div",0),e&2&&O("ngStyle",Ct(1,pP,"linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)"))},dependencies:[Os],styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px;border:1px solid black}"]})};var hP=t=>({shaded:t}),mP=(t,n)=>n.key;function gP(t,n){t&1&&k(0,"img",7)}function vP(t,n){t&1&&k(0,"img",8)}function bP(t,n){if(t&1&&M(0,gP,1,0,"img",7)(1,vP,1,0,"img",8),t&2){let e=E(2);S(e.values().finalValue<e.values().baseValue?0:1)}}function yP(t,n){t&1&&k(0,"img",9)}function _P(t,n){t&1&&k(0,"img",10)}function CP(t,n){if(t&1&&M(0,yP,1,0,"img",9)(1,_P,1,0,"img",10),t&2){let e=E(2);S(e.values().finalValue>e.values().baseValue?0:1)}}function wP(t,n){if(t&1&&M(0,bP,2,1)(1,CP,2,1),t&2){let e=E();S(e.values().invertModifiedDisplayColors?0:1)}}function DP(t,n){if(t&1&&(b(0,"div",14)(1,"div"),w(2),v(),b(3,"div"),w(4),v()()),t&2){let e=n.$implicit,i=n.$index;O("ngClass",Ct(3,hP,i%2===0)),m(2),Te(e.key),m(2),Te(e.value)}}function EP(t,n){if(t&1&&(b(0,"div",6),k(1,"div",11),b(2,"div",12)(3,"div",13)(4,"div"),w(5,"Base"),v(),b(6,"div"),w(7),v()(),Fe(8,DP,5,5,"div",14,mP),fr(10,"keyvalue"),v()()),t&2){let e=E();m(7),Te(e.values().baseValue),m(),Le(wh(10,1,e.values().modifiers))}}var Du=class t{name=Ue.required();values=Ue.required();expanded=Ue.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:10,vars:4,consts:[[1,"modifiedStatContainer"],[1,"headerRow"],[1,"label"],[1,"text"],[1,"point"],[1,"value"],[1,"modifiersContainer"],["src","img/arrow_down.png",1,"pos"],["src","img/arrow_up.png",1,"neg"],["src","img/arrow_up.png",1,"pos"],["src","img/arrow_down.png",1,"neg"],[1,"swoopy"],[1,"modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(b(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),w(4),v(),k(5,"div",4),v(),b(6,"div",5),M(7,wP,2,1),w(8),v()(),M(9,EP,11,3,"div",6),v()),e&2&&(m(4),Te(i.name()),m(3),S(i.values().finalValue!==i.values().baseValue?7:-1),m(),Me(" ",i.values().finalValue," "),m(),S(i.expanded()?9:-1))},dependencies:[Ns,Ps],styles:["div.modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]   div.point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.value[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.value[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{margin-right:2px;filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.value[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{margin-right:2px;filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.value[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}div.modifiedStatContainer[_ngcontent-%COMP%]   div.headerRow[_ngcontent-%COMP%]   div.value[_ngcontent-%COMP%]:has(.neg){color:#d81b62}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:4px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-radius:0 8px 0 0;border-right:4px solid var(--mat-sys-tertiary-container)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};function xP(t,n){if(t&1&&ze(0,"img",3),t&2){let e=E();pt("src",e.systemData==null?null:e.systemData.spriteURL,Nt)}}function IP(t,n){if(t&1&&w(0),t&2){let e=E(2);Sc(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function MP(t,n){if(t&1&&w(0),t&2){let e=E(2);Me(" (",e.status().remainingTurns," turns) ")}}function SP(t,n){if(t&1&&M(0,IP,1,2)(1,MP,1,1),t&2){let e=E();S(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function TP(t,n){t&1&&w(0," + ")}function AP(t,n){t&1&&w(0," - ")}function RP(t,n){t&1&&w(0," n ")}function kP(t,n){t&1&&w(0," E ")}function NP(t,n){if(t&1&&(ae(0,"p"),w(1),ue()),t&2){let e=n.$implicit;m(),Te(e)}}var Eu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(ke)}status=Ue.required();systemData;ngOnInit(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(F(ke))};static \u0275cmp=D({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},decls:13,vars:5,consts:[["id","container"],["id","headerRow"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"]],template:function(e,i){if(e&1&&(ae(0,"div",0)(1,"div",1)(2,"div",2),M(3,xP,1,1,"img",3),w(4),M(5,SP,2,1),ue(),ae(6,"div",4),M(7,TP,1,0)(8,AP,1,0)(9,RP,1,0),M(10,kP,1,0),ue()(),Fe(11,NP,2,1,"p",null,Ot),ue()),e&2){let r;m(3),S(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?3:-1),m(),Me(" ",i.status().name," "),m(),S((i.status().remainingTurns??0)>0?5:-1),m(2),S((r=i.systemData==null?null:i.systemData.type)===1?7:r===2?8:r===3?9:-1),m(3),S(i.systemData!=null&&i.systemData.isEffectConfigured?10:-1),m(),Le(i.systemData==null?null:i.systemData.textFields)}},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:8px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;width:40px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.8rem}"]})};var VD=t=>({rotate90:t}),jD=()=>[],xg=(t,n)=>n.key;function OP(t,n){if(t&1&&(b(0,"div",0),k(1,"img",29),v()),t&2){let e=E();m(),O("src",e.unit().sprite.portraitURL,Nt)}}function PP(t,n){if(t&1&&w(0),t&2){let e=E();Me(" Lvl. ",e.unit().stats.level," ")}}function FP(t,n){if(t&1&&w(0),t&2){let e,i=E();Me(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function LP(t,n){if(t&1&&k(0,"img",6),t&2){let e,i=E();O("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,Nt)}}function VP(t,n){if(t&1&&(b(0,"div",10)(1,"div",30)(2,"div",31),w(3),v(),b(4,"div",32),k(5,"div",33)(6,"div",34),v()()()),t&2){let e=E();O("title",e.unit().player),m(3),Te(e.unit().player)}}function jP(t,n){if(t&1&&(b(0,"p",38),w(1),v()),t&2){let e=n.$implicit;m(),Te(e)}}function BP(t,n){if(t&1&&Fe(0,jP,2,1,"p",38,Ot),t&2){let e=E(2);Le(e.unit().textFields)}}function UP(t,n){if(t&1&&k(0,"text-fields-with-labeled-header",39),t&2){let e,i,r=n.$implicit,o=E(3);O("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function HP(t,n){if(t&1&&Fe(0,UP,1,3,"text-fields-with-labeled-header",39,Ot),t&2){let e=E(2);Le(e.unit().classes)}}function zP(t,n){if(t&1&&k(0,"text-fields-with-labeled-header",37),t&2){let e=E(2);O("titleHref",e.unit().characterApplicationURL)}}function $P(t,n){if(t&1&&(b(0,"div",13),M(1,BP,2,0),k(2,"text-fields-with-labeled-header",35),M(3,HP,2,0),k(4,"text-fields-with-labeled-header",36),M(5,zP,1,1,"text-fields-with-labeled-header",37),v()),t&2){let e,i=E();m(),S(i.unit().textFields?1:-1),m(),O("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),m(),S(i.unit().classes?3:-1),m(),O("title",i.unit().movementType),m(),S(i.unit().characterApplicationURL?5:-1)}}function WP(t,n){if(t&1&&(b(0,"div",22)(1,"div",17),w(2,"Exp"),v(),b(3,"div"),w(4),v()()),t&2){let e=E();m(4),Te(e.unit().stats.experience)}}function GP(t,n){if(t&1&&(b(0,"div",22)(1,"div",17),w(2,"Money"),v(),k(3,"currency",40),v()),t&2){let e=E();m(3),O("amount",e.unit().stats.heldCurrency)}}function qP(t,n){if(t&1&&k(0,"unit-tag",44),t&2){let e=n.$implicit;O("tag",e)}}function ZP(t,n){if(t&1&&(b(0,"div",23)(1,"div",41),k(2,"img",42),v(),b(3,"div",43),Fe(4,qP,1,1,"unit-tag",44,Ot),v()()),t&2){let e=E();m(4),Le(e.unit().tags)}}function YP(t,n){if(t&1&&(b(0,"div",24)(1,"div",45),k(2,"img",46),v(),b(3,"div",31)(4,"p"),w(5),v()()()),t&2){let e=E();m(5),Te(e.unit().behavior)}}function QP(t,n){if(t&1&&k(0,"unit-status-condition",49),t&2){let e=n.$implicit;O("status",e)}}function KP(t,n){if(t&1&&(b(0,"div",25)(1,"div",47),w(2," STATUS "),v(),b(3,"div",48),Fe(4,QP,1,1,"unit-status-condition",49,Ot),v()()),t&2){let e=E();m(4),Le(e.unit().statusConditions)}}function XP(t,n){if(t&1&&k(0,"modified-unit-stat",50),t&2){let e=n.$implicit,i=E(2);O("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function JP(t,n){if(t&1&&(b(0,"div",28),Fe(1,XP,1,3,"modified-unit-stat",50,xg),fr(3,"keyvalue"),v()),t&2){let e=E();m(),Le(Ss(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function eF(t,n){if(t&1&&k(0,"modified-unit-stat",50),t&2){let e=n.$implicit,i=E(2);O("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function tF(t,n){if(t&1&&(b(0,"div",28),Fe(1,eF,1,3,"modified-unit-stat",50,xg),fr(3,"keyvalue"),v()),t&2){let e=E();m(),Le(Ss(3,0,e.unit().stats.system,e.sortModifiedUnitStat))}}function nF(t,n){if(t&1&&k(0,"modified-unit-stat",50),t&2){let e=n.$implicit,i=E(2);O("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function iF(t,n){if(t&1&&(b(0,"div",28),Fe(1,nF,1,3,"modified-unit-stat",50,xg),fr(3,"keyvalue"),v()),t&2){let e=E();m(),Le(Ss(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}var xu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(ke)}unit=Ue.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}sortModifiedUnitStat(){return 0}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(F(ke))};static \u0275cmp=D({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Be],decls:42,vars:29,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],[1,"statsHeaderRow"],[1,"statsContainer"],[1,"statsRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"]],template:function(e,i){if(e&1&&(M(0,OP,2,1,"div",0),b(1,"div",1),k(2,"img",2),b(3,"hgroup",3)(4,"h1",4),w(5),v(),b(6,"p",5),M(7,PP,1,1),M(8,FP,1,1),v()(),M(9,LP,1,1,"img",6),v(),b(10,"div",7)(11,"button",8),pe("click",function(){return i.toggleUnitInfoExpansion()}),k(12,"img",9),v(),M(13,VP,7,2,"div",10),b(14,"button",11),k(15,"img",12),v()(),M(16,$P,6,6,"div",13),b(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),w(21,"HP"),v(),b(22,"div",18)(23,"span",19),w(24),v(),b(25,"span",20),w(26),v()()(),k(27,"unit-hp-bar",21),v(),M(28,WP,5,1,"div",22),M(29,GP,4,1,"div",22),v(),M(30,ZP,6,0,"div",23),M(31,YP,6,1,"div",24),M(32,KP,6,0,"div",25),b(33,"div",26)(34,"button",8),pe("click",function(){return i.toggleStatExpansion()}),k(35,"img",9),v(),b(36,"h2"),w(37,"Stats"),v()(),b(38,"div",27),M(39,JP,4,3,"div",28),M(40,tF,4,3,"div",28),M(41,iF,4,3,"div",28),v()),e&2){let r;S(i.unit().sprite.portraitURL?0:-1),m(2),O("src",i.unit().sprite.spriteURL,Nt),m(3),Te(i.unit().name),m(2),S(i.unit().stats.level>0?7:-1),m(),S(i.unit().classes?8:-1),m(),S((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),m(3),nn(Ct(23,VD,i.isUnitInfoExpanded)),m(),S(i.unit().player?13:-1),m(3),S(i.isUnitInfoExpanded?16:-1),m(8),Te(i.unit().stats.hp.current),m(2),Me("/ ",i.unit().stats.hp.maximum),m(),O("percentage",i.unit().stats.hp.percentage),m(),S((i.unit().stats.experience??0)>0?28:-1),m(),S((i.unit().stats.heldCurrency??0)>0?29:-1),m(),S((i.unit().tags??Ac(25,jD)).length>0?30:-1),m(),S(i.unit().behavior?31:-1),m(),S((i.unit().statusConditions??Ac(26,jD)).length>0?32:-1),m(3),nn(Ct(27,VD,i.isStatsInfoExpanded)),m(4),S(i.unit().stats.combat?39:-1),m(),S(i.unit().stats.system?40:-1),m(),S(i.unit().stats.general?41:-1)}},dependencies:[Fm,yu,_u,Cu,wu,Du,Eu,Ps],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}div.statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;padding:0 16px 8px}div.statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}div.statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px;row-gap:24px}div.statsContainer[_ngcontent-%COMP%]   div.statsRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}div.statsContainer[_ngcontent-%COMP%]   div.statsRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}']})};var rF=["unitAutocompleteInput"],oF=(t,n)=>n.name;function sF(t,n){if(t&1&&(b(0,"mat-option",5)(1,"div",7),k(2,"img",8),b(3,"div"),w(4),v()()()),t&2){let e=n.$implicit;O("value",e),m(2),O("src",e.sprite.spriteURL,Nt),m(2),Te(e.name)}}function aF(t,n){if(t&1&&k(0,"unit-sidenav-display",6),t&2){let e=E();O("unit",e.selectedUnit.value)}}var Iu=class t{constructor(n){this.dataService=n;this.dataService=u(ke),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new dg(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(F(ke))};static \u0275cmp=D({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ke(rF,5),e&2){let r;G(r=q())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(b(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),pe("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),v(),b(5,"mat-autocomplete",4,1),Fe(7,sF,5,3,"mat-option",5,oF),v()()(),M(9,aF,1,1,"unit-sidenav-display",6),v()),e&2){let r=Cn(6);m(3),O("formControl",i.selectedUnit)("matAutocomplete",r),m(2),O("displayWith",i.formatAutocompleteDisplayValue),m(2),Le(i.filteredUnits),m(2),S(i.selectedUnit.value?9:-1)}},dependencies:[q0,$0,iu,L0,V0,Ea,Ia,au,uD,dD,LD,FD,Ro,Eg,Z0,ug,xu],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var Mu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ae(0,"p"),w(1,"map-tiles-view works!"),ue())},encapsulation:2})};function lF(t,n){t&1&&w(0," U ")}function cF(t,n){t&1&&w(0," T ")}function dF(t,n){t&1&&w(0," I ")}function uF(t,n){t&1&&w(0," L ")}function fF(t,n){t&1&&w(0," DR ")}function pF(t,n){if(t&1&&(b(0,"mat-tab",6),w(1),v()),t&2){let e=n.$implicit;O("label",e.title),m(),Me(" ",e.title," ")}}var Su=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Zt),this.breakpointService=u(Vn),this.themeService=u(jn),this.teamDataService=u(ke);var o=this.route.snapshot.paramMap.get("teamName")??"";this.teamDataService.loadDataForTeam(o)}static \u0275fac=function(e){return new(e||t)(F(Zt),F(Vn),F(jn),F(ke))};static \u0275cmp=D({type:t,selectors:[["map-view"]],decls:25,vars:1,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],["mat-stretch-tabs","false","mat-align-tabs","start",1,"segmentTabs"],[3,"label"]],template:function(e,i){if(e&1){let r=Kn();b(0,"button",1),pe("click",function(){Ut(r);let s=Cn(4);return Ht(s.toggle())}),w(1,">"),v(),b(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),At(7,lF,1,0,"ng-template",4),k(8,"map-units-sidenav"),v(),b(9,"mat-tab"),At(10,cF,1,0,"ng-template",4),k(11,"map-tiles-sidenav"),v(),b(12,"mat-tab"),At(13,dF,1,0,"ng-template",4),w(14," Image download "),v(),b(15,"mat-tab"),At(16,uF,1,0,"ng-template",4),k(17,"map-links-sidenav"),v(),b(18,"mat-tab"),At(19,fF,1,0,"ng-template",4),k(20,"map-dice-roller-sidenav"),v()()(),b(21,"mat-sidenav-content")(22,"mat-tab-group",5),Fe(23,pF,2,2,"mat-tab",6,Ot),v()()()}if(e&2){let r;m(3),O("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),m(20),Le((r=i.teamDataService.mapData().map)==null?null:r.segments)}},dependencies:[zm,u0,Od,tg,_0,eg,a0,Ud,Iu,Mu,Bd],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}']})};var Tu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ae(0,"p"),w(1,"map-analysis-view works!"),ue())},encapsulation:2})};var Au=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ae(0,"p"),w(1,"convoy-view works!"),ue())},encapsulation:2})};var Ru=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ae(0,"p"),w(1,"shop-view works!"),ue())},encapsulation:2})};var BD=[{path:"",component:kd,title:"Reddit Emblem Maps"},{path:":teamName/map",component:Su,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:Tu,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Au,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:Ru,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var UD={providers:[op(),ym(BD)]};var ku=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&k(0,"router-outlet")},dependencies:[na],encapsulation:2})};zh(ku,UD).catch(t=>console.error(t));
