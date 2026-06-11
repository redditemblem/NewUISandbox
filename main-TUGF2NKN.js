var zD=Object.defineProperty,$D=Object.defineProperties;var WD=Object.getOwnPropertyDescriptors;var Mg=Object.getOwnPropertySymbols;var GD=Object.prototype.hasOwnProperty,qD=Object.prototype.propertyIsEnumerable;var Sg=(t,n,e)=>n in t?zD(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,y=(t,n)=>{for(var e in n||={})GD.call(n,e)&&Sg(t,e,n[e]);if(Mg)for(var e of Mg(n))qD.call(n,e)&&Sg(t,e,n[e]);return t},X=(t,n)=>$D(t,WD(n));var gt=null,As=!1,Ou=1,ZD=null,$e=Symbol("SIGNAL");function j(t){let n=gt;return gt=t,n}function ks(){return gt}var oi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ai(t){if(As)throw new Error("");if(gt===null)return;gt.consumerOnSignalRead(t);let n=gt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=gt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:gt.producers,e!==void 0&&e.producer===t)){gt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===gt&&(!i||QD(r,gt)))return;let o=Rr(gt),a={producer:t,consumer:gt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};gt.producersTail=a,n!==void 0?n.nextProducer=a:gt.producers=a,o&&kg(t,a)}function Tg(){Ou++}function Ni(t){if(!(Rr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Ou)){if(!t.producerMustRecompute(t)&&!Tr(t)){Sr(t);return}t.producerRecomputeValue(t),Sr(t)}}function Pu(t){if(t.consumers===void 0)return;let n=As;As=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||YD(i)}}finally{As=n}}function Fu(){return gt?.consumerAllowSignalWrites!==!1}function YD(t){t.dirty=!0,Pu(t),t.consumerMarkedDirty?.(t)}function Sr(t){t.dirty=!1,t.lastCleanEpoch=Ou}function Bn(t){return t&&Rg(t),j(t)}function Rg(t){t.producersTail=void 0,t.recomputing=!0}function si(t,n){j(n),t&&Ag(t)}function Ag(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Rr(t))do e=Lu(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Tr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Ni(e),i!==e.version))return!0}return!1}function li(t){if(Rr(t)){let n=t.producers;for(;n!==void 0;)n=Lu(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function kg(t,n){let e=t.consumersTail,i=Rr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)kg(r.producer,r)}function Lu(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Rr(n)){let o=n.producers;for(;o!==void 0;)o=Lu(o)}return e}function Rr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Fo(t){ZD?.(t)}function QD(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Lo(t,n){return Object.is(t,n)}function Vo(t,n){let e=Object.create(KD);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Ni(e),ai(e),e.value===xn)throw e.error;return e.value};return i[$e]=e,Fo(e),i}var Ai=Symbol("UNSET"),ki=Symbol("COMPUTING"),xn=Symbol("ERRORED"),KD=X(y({},oi),{value:Ai,dirty:!0,error:null,equal:Lo,kind:"computed",producerMustRecompute(t){return t.value===Ai||t.value===ki},producerRecomputeValue(t){if(t.value===ki)throw new Error("");let n=t.value;t.value=ki;let e=Bn(t),i,r=!1;try{i=t.computation(),j(null),r=n!==Ai&&n!==xn&&i!==xn&&t.equal(n,i)}catch(o){i=xn,t.error=o}finally{si(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function XD(){throw new Error}var Ng=XD;function Og(t){Ng(t)}function Vu(t){Ng=t}var JD=null;function ju(t,n){let e=Object.create(jo);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Pg(e);return i[$e]=e,Fo(e),[i,a=>Oi(e,a),a=>Ns(e,a)]}function Pg(t){return ai(t),t.value}function Oi(t,n){Fu()||Og(t),t.equal(t.value,n)||(t.value=n,eE(t))}function Ns(t,n){Fu()||Og(t),Oi(t,n(t.value))}var jo=X(y({},oi),{equal:Lo,value:void 0,kind:"signal"});function eE(t){t.version++,Tg(),Pu(t),JD?.(t)}var Bu=X(y({},oi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Uu(t){if(t.dirty=!1,t.version>0&&!Tr(t))return;t.version++;let n=Bn(t);try{t.cleanup(),t.fn()}finally{si(t,n)}}function ne(t){return typeof t=="function"}function Ar(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Os=Ar(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Pi(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var fe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ne(i))try{i()}catch(o){n=o instanceof Os?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Fg(o)}catch(a){n=n??[],a instanceof Os?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Os(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Fg(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Pi(e,n)}remove(n){let{_finalizers:e}=this;e&&Pi(e,n),n instanceof t&&n._removeParent(this)}};fe.EMPTY=(()=>{let t=new fe;return t.closed=!0,t})();var Hu=fe.EMPTY;function Ps(t){return t instanceof fe||t&&"closed"in t&&ne(t.remove)&&ne(t.add)&&ne(t.unsubscribe)}function Fg(t){ne(t)?t():t.unsubscribe()}var ln={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var kr={setTimeout(t,n,...e){let{delegate:i}=kr;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=kr;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Fs(t){kr.setTimeout(()=>{let{onUnhandledError:n}=ln;if(n)n(t);else throw t})}function Fi(){}var Lg=zu("C",void 0,void 0);function Vg(t){return zu("E",void 0,t)}function jg(t){return zu("N",t,void 0)}function zu(t,n,e){return{kind:t,value:n,error:e}}var Li=null;function Nr(t){if(ln.useDeprecatedSynchronousErrorHandling){let n=!Li;if(n&&(Li={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Li;if(Li=null,e)throw i}}else t()}function Bg(t){ln.useDeprecatedSynchronousErrorHandling&&Li&&(Li.errorThrown=!0,Li.error=t)}var Vi=class extends fe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Ps(n)&&n.add(this)):this.destination=iE}static create(n,e,i){return new Un(n,e,i)}next(n){this.isStopped?Wu(jg(n),this):this._next(n)}error(n){this.isStopped?Wu(Vg(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Wu(Lg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},tE=Function.prototype.bind;function $u(t,n){return tE.call(t,n)}var Gu=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Ls(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Ls(i)}else Ls(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Ls(e)}}},Un=class extends Vi{constructor(n,e,i){super();let r;if(ne(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&ln.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&$u(n.next,o),error:n.error&&$u(n.error,o),complete:n.complete&&$u(n.complete,o)}):r=n}this.destination=new Gu(r)}};function Ls(t){ln.useDeprecatedSynchronousErrorHandling?Bg(t):Fs(t)}function nE(t){throw t}function Wu(t,n){let{onStoppedNotification:e}=ln;e&&kr.setTimeout(()=>e(t,n))}var iE={closed:!0,next:Fi,error:nE,complete:Fi};var Or=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Vt(t){return t}function qu(...t){return Zu(t)}function Zu(t){return t.length===0?Vt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var W=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=oE(e)?e:new Un(e,i,r);return Nr(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Ug(i),new i((r,o)=>{let a=new Un({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Or](){return this}pipe(...e){return Zu(e)(this)}toPromise(e){return e=Ug(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Ug(t){var n;return(n=t??ln.Promise)!==null&&n!==void 0?n:Promise}function rE(t){return t&&ne(t.next)&&ne(t.error)&&ne(t.complete)}function oE(t){return t&&t instanceof Vi||rE(t)&&Ps(t)}function aE(t){return ne(t?.lift)}function ie(t){return n=>{if(aE(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ae(t,n,e,i,r){return new Yu(t,n,e,i,r)}var Yu=class extends Vi{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Hg=Ar(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var I=(()=>{class t extends W{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Vs(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Hg}next(e){Nr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Nr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Nr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Hu:(this.currentObservers=null,o.push(e),new fe(()=>{this.currentObservers=null,Pi(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new W;return e.source=this,e}}return t.create=(n,e)=>new Vs(n,e),t})(),Vs=class extends I{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Hu}};var Ze=class extends I{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Bo={now(){return(Bo.delegate||Date).now()},delegate:void 0};var js=class extends I{constructor(n=1/0,e=1/0,i=Bo){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var Bs=class extends fe{constructor(n,e){super()}schedule(n,e=0){return this}};var Uo={setInterval(t,n,...e){let{delegate:i}=Uo;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Uo;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Us=class extends Bs{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Uo.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Uo.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Pi(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Pr=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Pr.now=Bo.now;var Hs=class extends Pr{constructor(n,e=Pr.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var ji=new Hs(Us),zg=ji;var Be=new W(t=>t.complete());function zs(t){return t&&ne(t.schedule)}function Qu(t){return t[t.length-1]}function $s(t){return ne(Qu(t))?t.pop():void 0}function In(t){return zs(Qu(t))?t.pop():void 0}function $g(t,n){return typeof Qu(t)=="number"?t.pop():n}function Gg(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(f){a(f)}}function l(d){try{c(i.throw(d))}catch(f){a(f)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function Wg(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Bi(t){return this instanceof Bi?(this.v=t,this):new Bi(t)}function qg(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(v){return Promise.resolve(v).then(h,f)}}function s(h,v){i[h]&&(r[h]=function(x){return new Promise(function(R,P){o.push([h,x,R,P])>1||l(h,x)})},v&&(r[h]=v(r[h])))}function l(h,v){try{c(i[h](v))}catch(x){p(o[0][3],x)}}function c(h){h.value instanceof Bi?Promise.resolve(h.value.v).then(d,f):p(o[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function p(h,v){h(v),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Zg(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Wg=="function"?Wg(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Ws=t=>t&&typeof t.length=="number"&&typeof t!="function";function Gs(t){return ne(t?.then)}function qs(t){return ne(t[Or])}function Zs(t){return Symbol.asyncIterator&&ne(t?.[Symbol.asyncIterator])}function Ys(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function sE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Qs=sE();function Ks(t){return ne(t?.[Qs])}function Xs(t){return qg(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Bi(e.read());if(r)return yield Bi(void 0);yield yield Bi(i)}}finally{e.releaseLock()}})}function Js(t){return ne(t?.getReader)}function Me(t){if(t instanceof W)return t;if(t!=null){if(qs(t))return lE(t);if(Ws(t))return cE(t);if(Gs(t))return dE(t);if(Zs(t))return Yg(t);if(Ks(t))return uE(t);if(Js(t))return fE(t)}throw Ys(t)}function lE(t){return new W(n=>{let e=t[Or]();if(ne(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function cE(t){return new W(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function dE(t){return new W(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Fs)})}function uE(t){return new W(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Yg(t){return new W(n=>{pE(t,n).catch(e=>n.error(e))})}function fE(t){return Yg(Xs(t))}function pE(t,n){var e,i,r,o;return Gg(this,void 0,void 0,function*(){try{for(e=Zg(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Ot(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function el(t,n=0){return ie((e,i)=>{e.subscribe(ae(i,r=>Ot(i,t,()=>i.next(r),n),()=>Ot(i,t,()=>i.complete(),n),r=>Ot(i,t,()=>i.error(r),n)))})}function tl(t,n=0){return ie((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Qg(t,n){return Me(t).pipe(tl(n),el(n))}function Kg(t,n){return Me(t).pipe(tl(n),el(n))}function Xg(t,n){return new W(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Jg(t,n){return new W(e=>{let i;return Ot(e,n,()=>{i=t[Qs](),Ot(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ne(i?.return)&&i.return()})}function nl(t,n){if(!t)throw new Error("Iterable cannot be null");return new W(e=>{Ot(e,n,()=>{let i=t[Symbol.asyncIterator]();Ot(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function ev(t,n){return nl(Xs(t),n)}function tv(t,n){if(t!=null){if(qs(t))return Qg(t,n);if(Ws(t))return Xg(t,n);if(Gs(t))return Kg(t,n);if(Zs(t))return nl(t,n);if(Ks(t))return Jg(t,n);if(Js(t))return ev(t,n)}throw Ys(t)}function Ve(t,n){return n?tv(t,n):Me(t)}function Y(...t){let n=In(t);return Ve(t,n)}function Ku(t,n){let e=ne(t)?t:()=>t,i=r=>r.error(e());return new W(n?r=>n.schedule(i,0,r):i)}function Ho(t){return!!t&&(t instanceof W||ne(t.lift)&&ne(t.subscribe))}var Ui=Ar(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function nv(t){return t instanceof Date&&!isNaN(t)}function J(t,n){return ie((e,i)=>{let r=0;e.subscribe(ae(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:hE}=Array;function mE(t,n){return hE(n)?t(...n):t(n)}function il(t){return J(n=>mE(t,n))}var{isArray:gE}=Array,{getPrototypeOf:vE,prototype:bE,keys:yE}=Object;function rl(t){if(t.length===1){let n=t[0];if(gE(n))return{args:n,keys:null};if(_E(n)){let e=yE(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function _E(t){return t&&typeof t=="object"&&vE(t)===bE}function ol(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function zo(...t){let n=In(t),e=$s(t),{args:i,keys:r}=rl(t);if(i.length===0)return Ve([],n);let o=new W(CE(i,n,r?a=>ol(r,a):Vt));return e?o.pipe(il(e)):o}function CE(t,n,e=Vt){return i=>{iv(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)iv(n,()=>{let c=Ve(t[l],n),d=!1;c.subscribe(ae(i,f=>{o[l]=f,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function iv(t,n,e){t?Ot(e,t,n):n()}function rv(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,f=!1,p=()=>{f&&!l.length&&!c&&n.complete()},h=x=>c<i?v(x):l.push(x),v=x=>{o&&n.next(x),c++;let R=!1;Me(e(x,d++)).subscribe(ae(n,P=>{r?.(P),o?h(P):n.next(P)},()=>{R=!0},void 0,()=>{if(R)try{for(c--;l.length&&c<i;){let P=l.shift();a?Ot(n,a,()=>v(P)):v(P)}p()}catch(P){n.error(P)}}))};return t.subscribe(ae(n,h,()=>{f=!0,p()})),()=>{s?.()}}function ct(t,n,e=1/0){return ne(n)?ct((i,r)=>J((o,a)=>n(i,o,r,a))(Me(t(i,r))),e):(typeof n=="number"&&(e=n),ie((i,r)=>rv(i,r,t,e)))}function al(t=1/0){return ct(Vt,t)}function ov(){return al(1)}function Mn(...t){return ov()(Ve(t,In(t)))}function Hi(t){return new W(n=>{Me(t()).subscribe(n)})}function Xu(...t){let n=$s(t),{args:e,keys:i}=rl(t),r=new W(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let f=!1;Me(e[d]).subscribe(ae(o,p=>{f||(f=!0,c--),s[d]=p},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?ol(i,s):s),o.complete())}))}});return n?r.pipe(il(n)):r}function zi(t=0,n,e=zg){let i=-1;return n!=null&&(zs(n)?e=n:i=n),new W(r=>{let o=nv(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function jt(...t){let n=In(t),e=$g(t,1/0),i=t;return i.length?i.length===1?Me(i[0]):al(e)(Ve(i,n)):Be}function he(t,n){return ie((e,i)=>{let r=0;e.subscribe(ae(i,o=>t.call(n,o,r++)&&i.next(o)))})}function av(t){return ie((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(ae(e,c=>{i=!0,r=c,o||Me(t(c)).subscribe(o=ae(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function sl(t,n=ji){return av(()=>zi(t,n))}function $o(t){return ie((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ae(e,void 0,void 0,a=>{o=Me(t(a,$o(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Fr(t,n){return ne(n)?ct(t,n,1):ct(t,1)}function cn(t,n=ji){return ie((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(ae(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function sv(t){return ie((n,e)=>{let i=!1;n.subscribe(ae(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function at(t){return t<=0?()=>Be:ie((n,e)=>{let i=0;n.subscribe(ae(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function lv(){return ie((t,n)=>{t.subscribe(ae(n,Fi))})}function Lr(t){return J(()=>t)}function Ju(t,n){return n?e=>Mn(n.pipe(at(1),lv()),e.pipe(Ju(t))):ct((e,i)=>Me(t(e,i)).pipe(at(1),Lr(e)))}function ef(t,n=ji){let e=zi(t,n);return Ju(()=>e)}function ll(t,n=Vt){return t=t??wE,ie((e,i)=>{let r,o=!0;e.subscribe(ae(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function wE(t,n){return t===n}function cv(t=DE){return ie((n,e)=>{let i=!1;n.subscribe(ae(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function DE(){return new Ui}function Wo(t){return ie((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Hn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?he((r,o)=>t(r,o,i)):Vt,at(1),e?sv(n):cv(()=>new Ui))}function cl(t){return t<=0?()=>Be:ie((n,e)=>{let i=[];n.subscribe(ae(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function dl(){return ie((t,n)=>{let e,i=!1;t.subscribe(ae(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function dv(t={}){let{connector:n=()=>new I,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,f=!1,p=()=>{s?.unsubscribe(),s=void 0},h=()=>{p(),a=l=void 0,d=f=!1},v=()=>{let x=a;h(),x?.unsubscribe()};return ie((x,R)=>{c++,!f&&!d&&p();let P=l=l??n();R.add(()=>{c--,c===0&&!f&&!d&&(s=tf(v,r))}),P.subscribe(R),!a&&c>0&&(a=new Un({next:ve=>P.next(ve),error:ve=>{f=!0,p(),s=tf(h,e,ve),P.error(ve)},complete:()=>{d=!0,p(),s=tf(h,i),P.complete()}}),Me(x).subscribe(a))})(o)}}function tf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Un({next:()=>{i.unsubscribe(),t()}});return Me(n(...e)).subscribe(i)}function ul(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,dv({connector:()=>new js(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function $i(t){return he((n,e)=>t<=e)}function dt(...t){let n=In(t);return ie((e,i)=>{(n?Mn(t,e,n):Mn(t,e)).subscribe(i)})}function Ye(t,n){return ie((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(ae(i,l=>{r?.unsubscribe();let c=0,d=o++;Me(t(l,d)).subscribe(r=ae(i,f=>i.next(n?n(l,f,d,c++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Se(t){return ie((n,e)=>{Me(t).subscribe(ae(e,()=>e.complete(),Fi)),!e.closed&&n.subscribe(e)})}function vt(t,n,e){let i=ne(t)||n||e?{next:t,error:n,complete:e}:t;return i?ie((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(ae(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Vt}var nf;function fl(){return nf}function Sn(t){let n=nf;return nf=t,n}var uv=Symbol("NotFound");function Vr(t){return t===uv||t?.name==="\u0275NotFound"}function rf(t,n,e){let i=Object.create(EE);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Ni(i),ai(i),i.value===xn)throw i.error;return i.value};return o[$e]=i,Fo(i),o}function fv(t,n){Ni(t),Oi(t,n),Sr(t)}function pv(t,n){if(Ni(t),t.value===xn)throw t.error;Ns(t,n),Sr(t)}var EE=X(y({},oi),{value:Ai,dirty:!0,error:null,equal:Lo,kind:"linkedSignal",producerMustRecompute(t){return t.value===Ai||t.value===ki},producerRecomputeValue(t){if(t.value===ki)throw new Error("");let n=t.value;t.value=ki;let e=Bn(t),i,r=!1;try{let o=t.source(),a=n!==Ai&&n!==xn,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,j(null),r=a&&i!==xn&&t.equal(n,i)}catch(o){i=xn,t.error=o}finally{si(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function hv(t){let n=j(null);try{return t()}finally{j(n)}}var yl="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",T=class extends Error{code;constructor(n,e){super(fi(n,e)),this.code=n}};function xE(t){return`NG0${Math.abs(t)}`}function fi(t,n){return`${xE(t)}${n?": "+n:""}`}var Xo=globalThis;function we(t){for(let n in t)if(t[n]===we)return n;throw Error("")}function yv(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Jo(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Jo).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function _l(t,n){return t?n?`${t} ${n}`:t:n||""}var IE=we({__forward_ref__:we});function Kt(t){return t.__forward_ref__=Kt,t}function ut(t){return vf(t)?t():t}function vf(t){return typeof t=="function"&&t.hasOwnProperty(IE)&&t.__forward_ref__===Kt}function C(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function re(t){return{providers:t.providers||[],imports:t.imports||[]}}function ea(t){return ME(t,Cl)}function bf(t){return ea(t)!==null}function ME(t,n){return t.hasOwnProperty(n)&&t[n]||null}function SE(t){let n=t?.[Cl]??null;return n||null}function af(t){return t&&t.hasOwnProperty(hl)?t[hl]:null}var Cl=we({\u0275prov:we}),hl=we({\u0275inj:we}),_=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=C({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function yf(t){return t&&!!t.\u0275providers}var _f=we({\u0275cmp:we}),Cf=we({\u0275dir:we}),wf=we({\u0275pipe:we}),Df=we({\u0275mod:we}),qo=we({\u0275fac:we}),Yi=we({__NG_ELEMENT_ID__:we}),mv=we({__NG_ENV_ID__:we});function Ef(t){return wl(t,"@NgModule"),t[Df]||null}function $n(t){return wl(t,"@Component"),t[_f]||null}function xf(t){return wl(t,"@Directive"),t[Cf]||null}function _v(t){return wl(t,"@Pipe"),t[wf]||null}function wl(t,n){if(t==null)throw new T(-919,!1)}function Qi(t){return typeof t=="string"?t:t==null?"":String(t)}var Cv=we({ngErrorCode:we}),TE=we({ngErrorMessage:we}),RE=we({ngTokenPath:we});function If(t,n){return wv("",-200,n)}function Dl(t,n){throw new T(-201,!1)}function wv(t,n,e){let i=new T(n,t);return i[Cv]=n,i[TE]=t,e&&(i[RE]=e),i}function AE(t){return t[Cv]}var sf;function Dv(){return sf}function St(t){let n=sf;return sf=t,n}function Mf(t,n,e){let i=ea(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Dl(t,"")}var kE={},Wi=kE,NE="__NG_DI_FLAG__",lf=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Gi(e)||0;try{return this.injector.get(n,i&8?null:Wi,i)}catch(r){if(Vr(r))return r;throw r}}};function OE(t,n=0){let e=fl();if(e===void 0)throw new T(-203,!1);if(e===null)return Mf(t,void 0,n);{let i=PE(n),r=e.retrieve(t,i);if(Vr(r)){if(i.optional)return null;throw r}return r}}function H(t,n=0){return(Dv()||OE)(ut(t),n)}function u(t,n){return H(t,Gi(n))}function Gi(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function PE(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function cf(t){let n=[];for(let e=0;e<t.length;e++){let i=ut(t[e]);if(Array.isArray(i)){if(i.length===0)throw new T(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=FE(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(H(r,o))}else n.push(H(i))}return n}function FE(t){return t[NE]}function ci(t,n){let e=t.hasOwnProperty(qo);return e?t[qo]:null}function Ev(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function xv(t){return t.flat(Number.POSITIVE_INFINITY)}function El(t,n){t.forEach(e=>Array.isArray(e)?El(e,n):n(e))}function Sf(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function ta(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Iv(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Mv(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function xl(t,n,e){let i=Br(t,n);return i>=0?t[i|1]=e:(i=~i,Mv(t,i,n,e)),i}function Il(t,n){let e=Br(t,n);if(e>=0)return t[e|1]}function Br(t,n){return LE(t,n,1)}function LE(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var pi={},bt=[],Ki=new _(""),Tf=new _("",-1),Rf=new _(""),Zo=class{get(n,e=Wi){if(e===Wi){let r=wv("",-201);throw r.name="\u0275NotFound",r}return e}};function Xi(t){return{\u0275providers:t}}function Sv(t){return Xi([{provide:Ki,multi:!0,useValue:t}])}function Tv(...t){return{\u0275providers:Af(!0,t),\u0275fromNgModule:!0}}function Af(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return El(n,a=>{let s=a;ml(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Rv(r,o),e}function Rv(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];kf(r,o=>{n(o,i)})}}function ml(t,n,e,i){if(t=ut(t),!t)return!1;let r=null,o=af(t),a=!o&&$n(t);if(!o&&!a){let l=t.ngModule;if(o=af(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)ml(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;El(o.imports,d=>{ml(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&Rv(c,n)}if(!s){let c=ci(r)||(()=>new r);n({provide:r,useFactory:c,deps:bt},r),n({provide:Rf,useValue:r,multi:!0},r),n({provide:Ki,useValue:()=>H(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;kf(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function kf(t,n){for(let e of t)yf(e)&&(e=e.\u0275providers),Array.isArray(e)?kf(e,n):n(e)}var VE=we({provide:String,useValue:we});function Av(t){return t!==null&&typeof t=="object"&&VE in t}function jE(t){return!!(t&&t.useExisting)}function BE(t){return!!(t&&t.useFactory)}function qi(t){return typeof t=="function"}function kv(t){return!!t.useClass}var na=new _(""),pl={},gv={},of;function Ur(){return of===void 0&&(of=new Zo),of}var be=class{},Zi=class extends be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,uf(n,a=>this.processProvider(a)),this.records.set(Tf,jr(void 0,this)),r.has("environment")&&this.records.set(be,jr(void 0,this));let o=this.records.get(na);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Rf,bt,{self:!0}))}retrieve(n,e){let i=Gi(e)||0;try{return this.get(n,Wi,i)}catch(r){if(Vr(r))return r;throw r}}destroy(){Go(this),this._destroyed=!0;let n=j(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),j(n)}}onDestroy(n){return Go(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Go(this);let e=Sn(this),i=St(void 0),r;try{return n()}finally{Sn(e),St(i)}}get(n,e=Wi,i){if(Go(this),n.hasOwnProperty(mv))return n[mv](this);let r=Gi(i),o,a=Sn(this),s=St(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=WE(n)&&ea(n);d&&this.injectableDefInScope(d)?c=jr(df(n),pl):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Ur():this.parent;return e=r&8&&e===Wi?null:e,l.get(n,e)}catch(l){let c=AE(l);throw c===-200||c===-201?new T(c,null):l}finally{St(s),Sn(a)}}resolveInjectorInitializers(){let n=j(null),e=Sn(this),i=St(void 0),r;try{let o=this.get(Ki,bt,{self:!0});for(let a of o)a()}finally{Sn(e),St(i),j(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=ut(n);let e=qi(n)?n:ut(n&&n.provide),i=HE(n);if(!qi(n)&&n.multi===!0){let r=this.records.get(e);r||(r=jr(void 0,pl,!0),r.factory=()=>cf(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=j(null);try{if(e.value===gv)throw If("");return e.value===pl&&(e.value=gv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&$E(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{j(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=ut(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function df(t){let n=ea(t),e=n!==null?n.factory:ci(t);if(e!==null)return e;if(t instanceof _)throw new T(-204,!1);if(t instanceof Function)return UE(t);throw new T(-204,!1)}function UE(t){if(t.length>0)throw new T(-204,!1);let e=SE(t);return e!==null?()=>e.factory(t):()=>new t}function HE(t){if(Av(t))return jr(void 0,t.useValue);{let n=Nf(t);return jr(n,pl)}}function Nf(t,n,e){let i;if(qi(t)){let r=ut(t);return ci(r)||df(r)}else if(Av(t))i=()=>ut(t.useValue);else if(BE(t))i=()=>t.useFactory(...cf(t.deps||[]));else if(jE(t))i=(r,o)=>H(ut(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=ut(t&&(t.useClass||t.provide));if(zE(t))i=()=>new r(...cf(t.deps));else return ci(r)||df(r)}return i}function Go(t){if(t.destroyed)throw new T(-205,!1)}function jr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function zE(t){return!!t.deps}function $E(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function WE(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function uf(t,n){for(let e of t)Array.isArray(e)?uf(e,n):e&&yf(e)?uf(e.\u0275providers,n):n(e)}function st(t,n){let e;t instanceof Zi?(Go(t),e=t):e=new lf(t);let i,r=Sn(e),o=St(void 0);try{return n()}finally{Sn(r),St(o)}}function Nv(){return Dv()!==void 0||fl()!=null}var un=0,$=1,Q=2,Xe=3,Xt=4,Tt=5,Ji=6,Hr=7,We=8,Wn=9,fn=10,Le=11,zr=12,Of=13,er=14,Rt=15,hi=16,tr=17,Rn=18,Gn=19,Pf=20,zn=21,Ml=22,di=23,Bt=24,nr=25,mi=26,je=27,Ov=1,Ff=6,gi=7,ia=8,ir=9,ze=10;function qn(t){return Array.isArray(t)&&typeof t[Ov]=="object"}function pn(t){return Array.isArray(t)&&t[Ov]===!0}function Lf(t){return(t.flags&4)!==0}function An(t){return t.componentOffset>-1}function ra(t){return(t.flags&1)===1}function kn(t){return!!t.template}function $r(t){return(t[Q]&512)!==0}function rr(t){return(t[Q]&256)===256}var Pv="svg",Fv="math";function Jt(t){for(;Array.isArray(t);)t=t[un];return t}function Vf(t,n){return Jt(n[t])}function en(t,n){return Jt(n[t.index])}function Sl(t,n){return t.data[n]}function Tl(t,n){return t[n]}function jf(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function tn(t,n){let e=n[t];return qn(e)?e:e[un]}function Lv(t){return(t[Q]&4)===4}function Rl(t){return(t[Q]&128)===128}function Vv(t){return pn(t[Xe])}function Ut(t,n){return n==null?null:t[n]}function Bf(t){t[tr]=0}function Uf(t){t[Q]&1024||(t[Q]|=1024,Rl(t)&&or(t))}function jv(t,n){for(;t>0;)n=n[er],t--;return n}function oa(t){return!!(t[Q]&9216||t[Bt]?.dirty)}function Al(t){t[fn].changeDetectionScheduler?.notify(8),t[Q]&64&&(t[Q]|=1024),oa(t)&&or(t)}function or(t){t[fn].changeDetectionScheduler?.notify(0);let n=ui(t);for(;n!==null&&!(n[Q]&8192||(n[Q]|=8192,!Rl(n)));)n=ui(n)}function Hf(t,n){if(rr(t))throw new T(911,!1);t[zn]===null&&(t[zn]=[]),t[zn].push(n)}function Bv(t,n){if(t[zn]===null)return;let e=t[zn].indexOf(n);e!==-1&&t[zn].splice(e,1)}function ui(t){let n=t[Xe];return pn(n)?n[Xe]:n}function zf(t){return t[Hr]??=[]}function $f(t){return t.cleanup??=[]}function Uv(t,n,e,i){let r=zf(n);r.push(e),t.firstCreatePass&&$f(t).push(i,r.length-1)}var ue={lFrame:Jv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var ff=!1;function Hv(){return ue.lFrame.elementDepthCount}function zv(){ue.lFrame.elementDepthCount++}function Wf(){ue.lFrame.elementDepthCount--}function Gf(){return ue.bindingsEnabled}function qf(){return ue.skipHydrationRootTNode!==null}function Zf(t){return ue.skipHydrationRootTNode===t}function Yf(){ue.skipHydrationRootTNode=null}function G(){return ue.lFrame.lView}function Ue(){return ue.lFrame.tView}function Ht(t){return ue.lFrame.contextLView=t,t[We]}function zt(t){return ue.lFrame.contextLView=null,t}function yt(){let t=Qf();for(;t!==null&&t.type===64;)t=t.parent;return t}function Qf(){return ue.lFrame.currentTNode}function $v(){let t=ue.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Wr(t,n){let e=ue.lFrame;e.currentTNode=t,e.isParent=n}function Kf(){return ue.lFrame.isParent}function Xf(){ue.lFrame.isParent=!1}function Wv(){return ue.lFrame.contextLView}function Jf(){return ff}function Yo(t){let n=ff;return ff=t,n}function aa(){let t=ue.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Gv(){return ue.lFrame.bindingIndex}function qv(t){return ue.lFrame.bindingIndex=t}function Zn(){return ue.lFrame.bindingIndex++}function kl(t){let n=ue.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Zv(){return ue.lFrame.inI18n}function Yv(t,n){let e=ue.lFrame;e.bindingIndex=e.bindingRootIndex=t,Nl(n)}function Qv(){return ue.lFrame.currentDirectiveIndex}function Nl(t){ue.lFrame.currentDirectiveIndex=t}function Kv(t){let n=ue.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Ol(){return ue.lFrame.currentQueryIndex}function sa(t){ue.lFrame.currentQueryIndex=t}function GE(t){let n=t[$];return n.type===2?n.declTNode:n.type===1?t[Tt]:null}function ep(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=GE(o),r===null||(o=o[er],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ue.lFrame=Xv();return i.currentTNode=n,i.lView=t,!0}function Pl(t){let n=Xv(),e=t[$];ue.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Xv(){let t=ue.lFrame,n=t===null?null:t.child;return n===null?Jv(t):n}function Jv(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function eb(){let t=ue.lFrame;return ue.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var tp=eb;function Fl(){let t=eb();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function tb(t){return(ue.lFrame.contextLView=jv(t,ue.lFrame.contextLView))[We]}function Nn(){return ue.lFrame.selectedIndex}function vi(t){ue.lFrame.selectedIndex=t}function la(){let t=ue.lFrame;return Sl(t.tView,t.selectedIndex)}function nb(){return ue.lFrame.currentNamespace}var ib=!0;function Ll(){return ib}function Vl(t){ib=t}function pf(t,n=null,e=null,i){let r=np(t,n,e,i);return r.resolveInjectorInitializers(),r}function np(t,n=null,e=null,i,r=new Set){let o=[e||bt,Tv(t)],a;return new Zi(o,n||Ur(),a||null,r)}var se=class t{static THROW_IF_NOT_FOUND=Wi;static NULL=new Zo;static create(n,e){if(Array.isArray(n))return pf({name:""},e,n,"");{let i=n.name??"";return pf({name:i},n.parent,n.providers,i)}}static \u0275prov=C({token:t,providedIn:"any",factory:()=>H(Tf)});static __NG_ELEMENT_ID__=-1},ee=new _(""),At=(()=>{class t{static __NG_ELEMENT_ID__=qE;static __NG_ENV_ID__=e=>e}return t})(),gl=class extends At{_lView;constructor(n){super(),this._lView=n}get destroyed(){return rr(this._lView)}onDestroy(n){let e=this._lView;return Hf(e,n),()=>Bv(e,n)}};function qE(){return new gl(G())}var rb=!1,ob=new _(""),Yn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ze(!1);debugTaskTracker=u(ob,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new W(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),hf=class extends I{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Nv()&&(this.destroyRef=u(At,{optional:!0})??void 0,this.pendingTasks=u(Yn,{optional:!0})??void 0)}emit(n){let e=j(null);try{super.next(n)}finally{j(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof fe&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},B=hf;function vl(...t){}function ip(t){let n,e;function i(){t=vl;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function ab(t){return queueMicrotask(()=>t()),()=>{t=vl}}var rp="isAngularZone",Qo=rp+"_ID",ZE=0,O=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new B(!1);onMicrotaskEmpty=new B(!1);onStable=new B(!1);onError=new B(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=rb}=n;if(typeof Zone>"u")throw new T(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,KE(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(rp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new T(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new T(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,YE,vl,vl);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},YE={};function op(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function QE(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){ip(()=>{t.callbackScheduled=!1,mf(t),t.isCheckStableRunning=!0,op(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),mf(t)}function KE(t){let n=()=>{QE(t)},e=ZE++;t._inner=t._inner.fork({name:"angular",properties:{[rp]:!0,[Qo]:e,[Qo+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(XE(l))return i.invokeTask(o,a,s,l);try{return vv(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),bv(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return vv(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!JE(l)&&n(),bv(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,mf(t),op(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function mf(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function vv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function bv(t){t._nesting--,op(t)}var Ko=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new B;onMicrotaskEmpty=new B;onStable=new B;onError=new B;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function XE(t){return sb(t,"__ignore_ng_zone__")}function JE(t){return sb(t,"__scheduler_tick__")}function sb(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var dn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},$t=new _("",{factory:()=>{let t=u(O),n=u(be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(dn),e.handleError(i))})}}}),lb={provide:Ki,useValue:()=>{let t=u(dn,{optional:!0})},multi:!0},ex=new _("",{factory:()=>{let t=u(ee).defaultView;if(!t)return;let n=u($t),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(At).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function ap(){return Xi([Sv(()=>{u(ex)})])}function U(t,n){let[e,i,r]=ju(t,n?.equal),o=e,a=o[$e];return o.set=i,o.update=r,o.asReadonly=jl.bind(o),o}function jl(){let t=this[$e];if(t.readonlyFn===void 0){let n=()=>this();n[$e]=t,t.readonlyFn=n}return t.readonlyFn}var Gr=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=tx}return t})();function tx(){return new Gr(G(),yt())}var Tn=class{},ca=new _("",{factory:()=>!0});var sp=new _(""),da=(()=>{class t{internalPendingTasks=u(Yn);scheduler=u(Tn);errorHandler=u($t);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),Bl=(()=>{class t{static \u0275prov=C({token:t,providedIn:"root",factory:()=>new gf})}return t})(),gf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},bl=class{[$e];constructor(n){this[$e]=n}destroy(){this[$e].destroy()}};function hn(t,n){let e=n?.injector??u(se),i=n?.manualCleanup!==!0?e.get(At):null,r,o=e.get(Gr,null,{optional:!0}),a=e.get(Tn);return o!==null?(r=rx(o.view,a,t),i instanceof gl&&i._lView===o.view&&(i=null)):r=ox(t,e.get(Bl),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new bl(r)}var cb=X(y({},Bu),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Yo(!1);try{Uu(this)}finally{Yo(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=j(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],j(t)}}}),nx=X(y({},cb),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(li(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),ix=X(y({},cb),{consumerMarkedDirty(){this.view[Q]|=8192,or(this.view),this.notifier.notify(13)},destroy(){if(li(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[di]?.delete(this)}});function rx(t,n,e){let i=Object.create(ix);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=db(i,e),t[di]??=new Set,t[di].add(i),i.consumerMarkedDirty(i),i}function ox(t,n,e){let i=Object.create(nx);return i.fn=db(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function db(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function _a(t){return{toString:t}.toString()}function hx(t){return typeof t=="function"}function jb(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var ql=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Re=(()=>{let t=()=>Bb;return t.ngInherit=!0,t})();function Bb(t){return t.type.prototype.ngOnChanges&&(t.setInput=gx),mx}function mx(){let t=Hb(this),n=t?.current;if(n){let e=t.previous;if(e===pi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function gx(t,n,e,i,r){let o=this.declaredInputs[i],a=Hb(t)||vx(t,{previous:pi,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new ql(c&&c.currentValue,e,l===pi),jb(t,n,r,e)}var Ub="__ngSimpleChanges__";function Hb(t){return t[Ub]||null}function vx(t,n){return t[Ub]=n}var ub=[];var De=function(t,n=null,e){for(let i=0;i<ub.length;i++){let r=ub[i];r(t,n,e)}},ge=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ge||{});function bx(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=Bb(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function zb(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function zl(t,n,e){$b(t,n,3,e)}function $l(t,n,e,i){(t[Q]&3)===e&&$b(t,n,e,i)}function lp(t,n){let e=t[Q];(e&3)===n&&(e&=16383,e+=1,t[Q]=e)}function $b(t,n,e,i){let r=i!==void 0?t[tr]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[tr]+=65536),(s<o||o==-1)&&(yx(t,e,n,l),t[tr]=(t[tr]&4294901760)+l+2),l++}function fb(t,n){De(ge.LifecycleHookStart,t,n);let e=j(null);try{n.call(t)}finally{j(e),De(ge.LifecycleHookEnd,t,n)}}function yx(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[Q]>>14<t[tr]>>16&&(t[Q]&3)===n&&(t[Q]+=16384,fb(s,o)):fb(s,o)}var Zr=-1,sr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function _x(t){return(t.flags&8)!==0}function Cx(t){return(t.flags&16)!==0}function wx(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];Dx(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function Wb(t){return t===3||t===4||t===6}function Dx(t){return t.charCodeAt(0)===64}function Yr(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?pb(t,e,r,null,n[++i]):pb(t,e,r,null,null))}}return t}function pb(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Gb(t){return t!==Zr}function Zl(t){return t&32767}function Ex(t){return t>>16}function Yl(t,n){let e=Ex(t),i=n;for(;e>0;)i=i[er],e--;return i}var yp=!0;function Ql(t){let n=yp;return yp=t,n}var xx=256,qb=xx-1,Zb=5,Ix=0,On={};function Mx(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Yi)&&(i=e[Yi]),i==null&&(i=e[Yi]=Ix++);let r=i&qb,o=1<<r;n.data[t+(r>>Zb)]|=o}function Kl(t,n){let e=Yb(t,n);if(e!==-1)return e;let i=n[$];i.firstCreatePass&&(t.injectorIndex=n.length,cp(i.data,t),cp(n,null),cp(i.blueprint,null));let r=qp(t,n),o=t.injectorIndex;if(Gb(r)){let a=Zl(r),s=Yl(r,n),l=s[$].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function cp(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Yb(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function qp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=ey(r),i===null)return Zr;if(e++,r=r[er],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Zr}function _p(t,n,e){Mx(t,n,e)}function Sx(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Wb(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Qb(t,n,e){if(e&8||t!==void 0)return t;Dl(n,"NodeInjector")}function Kb(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Wn],o=St(void 0);try{return r?r.get(n,i,e&8):Mf(n,i,e&8)}finally{St(o)}}return Qb(i,n,e)}function Xb(t,n,e,i=0,r){if(t!==null){if(n[Q]&2048&&!(i&2)){let a=kx(t,n,e,i,On);if(a!==On)return a}let o=Jb(t,n,e,i,On);if(o!==On)return o}return Kb(n,e,i,r)}function Jb(t,n,e,i,r){let o=Rx(e);if(typeof o=="function"){if(!ep(n,t,i))return i&1?Qb(r,e,i):Kb(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Dl(e);else return a}finally{tp()}}else if(typeof o=="number"){let a=null,s=Yb(t,n),l=Zr,c=i&1?n[Rt][Tt]:null;for((s===-1||i&4)&&(l=s===-1?qp(t,n):n[s+8],l===Zr||!mb(i,!1)?s=-1:(a=n[$],s=Zl(l),n=Yl(l,n)));s!==-1;){let d=n[$];if(hb(o,s,d.data)){let f=Tx(s,n,e,a,i,c);if(f!==On)return f}l=n[s+8],l!==Zr&&mb(i,n[$].data[s+8]===c)&&hb(o,s,n)?(a=d,s=Zl(l),n=Yl(l,n)):s=-1}}return r}function Tx(t,n,e,i,r,o){let a=n[$],s=a.data[t+8],l=i==null?An(s)&&yp:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=Wl(s,a,e,l,c);return d!==null?ha(n,a,d,s,r):On}function Wl(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=i?s:s+d,p=r?s+d:c;for(let h=f;h<p;h++){let v=a[h];if(h<l&&e===v||h>=l&&v.type===e)return h}if(r){let h=a[l];if(h&&kn(h)&&h.type===e)return l}return null}function ha(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof sr){let s=o;if(s.resolving)throw If("");let l=Ql(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,f=s.injectImpl?St(s.injectImpl):null,p=ep(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&bx(e,a[e],n)}finally{f!==null&&St(f),Ql(l),s.resolving=!1,tp()}}return o}function Rx(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Yi)?t[Yi]:void 0;return typeof n=="number"?n>=0?n&qb:Ax:n}function hb(t,n,e){let i=1<<t;return!!(e[n+(t>>Zb)]&i)}function mb(t,n){return!(t&2)&&!(t&1&&n)}var ar=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return Xb(this._tNode,this._lView,n,Gi(i),e)}};function Ax(){return new ar(yt(),G())}function Je(t){return _a(()=>{let n=t.prototype.constructor,e=n[qo]||Cp(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[qo]||Cp(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Cp(t){return vf(t)?()=>{let n=Cp(ut(t));return n&&n()}:ci(t)}function kx(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[Q]&2048&&!$r(a);){let s=Jb(o,a,e,i|2,On);if(s!==On)return s;let l=o.parent;if(!l){let c=a[Pf];if(c){let d=c.get(e,On,i&-5);if(d!==On)return d}l=ey(a),a=a[er]}o=l}return r}function ey(t){let n=t[$],e=n.type;return e===2?n.declTNode:e===1?t[Tt]:null}function Ca(t){return Sx(yt(),t)}function Nx(){return eo(yt(),G())}function eo(t,n){return new V(en(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=Nx}return t})();function ty(t){return t instanceof V?t.nativeElement:t}function Ox(){return this._results[Symbol.iterator]()}var vn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new I}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=xv(n);(this._changesDetected=!Ev(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Ox};function ny(t){return(t.flags&128)===128}var Zp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Zp||{}),iy=new Map,Px=0;function Fx(){return Px++}function Lx(t){iy.set(t[Gn],t)}function wp(t){iy.delete(t[Gn])}var gb="__ngContext__";function Qr(t,n){qn(n)?(t[gb]=n[Gn],Lx(n)):t[gb]=n}function ry(t){return ay(t[zr])}function oy(t){return ay(t[Xt])}function ay(t){for(;t!==null&&!pn(t);)t=t[Xt];return t}var Vx;function Yp(t){Vx=t}var to=new _("",{factory:()=>jx}),jx="ng";var uc=new _(""),ur=new _("",{providedIn:"platform",factory:()=>"unknown"}),wa=new _(""),fr=new _("",{factory:()=>u(ee).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var sy="r";var ly="di";var cy=!1,dy=new _("",{factory:()=>cy});var Bx=(t,n,e,i)=>{};function Ux(t,n,e,i){Bx(t,n,e,i)}function fc(t){return(t.flags&32)===32}var Hx=()=>null;function uy(t,n,e=!1){return Hx(t,n,e)}function fy(t,n){let e=t.contentQueries;if(e!==null){let i=j(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];sa(o),s.contentQueries(2,n[a],a)}}}finally{j(i)}}}function Dp(t,n,e){sa(0);let i=j(null);try{n(t,e)}finally{j(i)}}function py(t,n,e){if(Lf(n)){let i=j(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{j(i)}}}var bn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(bn||{});var Ul;function zx(){if(Ul===void 0&&(Ul=null,Xo.trustedTypes))try{Ul=Xo.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Ul}function vb(t){return zx()?.createScriptURL(t)||t}var Xl=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${yl})`}};function Da(t){return t instanceof Xl?t.changingThisBreaksApplicationSecurity:t}function Qp(t,n){let e=hy(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${yl})`)}return e===n}function hy(t){return t instanceof Xl&&t.getTypeName()||null}var $x=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function my(t){return t=String(t),t.match($x)?t:"unsafe:"+t}function Wx(t,n){return t.createText(n)}function Gx(t,n,e){t.setValue(n,e)}function gy(t,n,e){return t.createElement(n,e)}function Jl(t,n,e,i,r){t.insertBefore(n,e,i,r)}function vy(t,n,e){t.appendChild(n,e)}function bb(t,n,e,i,r){i!==null?Jl(t,n,e,i,r):vy(t,n,e)}function by(t,n,e,i){t.removeChild(null,n,e,i)}function qx(t,n,e){t.setAttribute(n,"style",e)}function Zx(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function yy(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&wx(t,n,i),r!==null&&Zx(t,n,r),o!==null&&qx(t,n,o)}var pc=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(pc||{});function Pt(t){let n=Cy();return n?n.sanitize(pc.URL,t)||"":Qp(t,"URL")?Da(t):my(Qi(t))}function _y(t){let n=Cy();if(n)return vb(n.sanitize(pc.RESOURCE_URL,t)||"");if(Qp(t,"ResourceURL"))return vb(Da(t));throw new T(904,!1)}var Yx={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Qx(t,n){return Yx[t]?.[n]===!0?_y:Pt}function Kp(t,n,e){return Qx(n,e)(t)}function Cy(){let t=G();return t&&t[fn].sanitizer}function wy(t){return t instanceof Function?t():t}function Kx(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Dy="ng-template";function Xx(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Kx(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Xp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Xp(t){return t.type===4&&t.value!==Dy}function Jx(t,n,e){let i=t.type===4&&!e?Dy:t.value;return n===i}function eI(t,n,e){let i=4,r=t.attrs,o=r!==null?iI(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!mn(i)&&!mn(l))return!1;if(a&&mn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!Jx(t,l,e)||l===""&&n.length===1){if(mn(i))return!1;a=!0}}else if(i&8){if(r===null||!Xx(t,r,l,e)){if(mn(i))return!1;a=!0}}else{let c=n[++s],d=tI(l,r,Xp(t),e);if(d===-1){if(mn(i))return!1;a=!0;continue}if(c!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&c!==f){if(mn(i))return!1;a=!0}}}}return mn(i)||a}function mn(t){return(t&1)===0}function tI(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return rI(n,t)}function Ey(t,n,e=!1){for(let i=0;i<n.length;i++)if(eI(t,n[i],e))return!0;return!1}function nI(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function iI(t){for(let n=0;n<t.length;n++){let e=t[n];if(Wb(e))return n}return t.length}function rI(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function oI(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function yb(t,n){return t?":not("+n.trim()+")":n}function aI(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!mn(a)&&(n+=yb(o,r),r=""),i=a,o=o||!mn(i);e++}return r!==""&&(n+=yb(o,r)),n}function sI(t){return t.map(aI).join(",")}function lI(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!mn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Ct={};function Jp(t,n,e,i,r,o,a,s,l,c,d){let f=je+i,p=f+r,h=cI(f,p),v=typeof c=="function"?c():c;return h[$]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:v,incompleteFirstPass:!1,ssrId:d}}function cI(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Ct);return e}function dI(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Jp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function eh(t,n,e,i,r,o,a,s,l,c,d){let f=n.blueprint.slice();return f[un]=r,f[Q]=i|4|128|8|64|1024,(c!==null||t&&t[Q]&2048)&&(f[Q]|=2048),Bf(f),f[Xe]=f[er]=t,f[We]=e,f[fn]=a||t&&t[fn],f[Le]=s||t&&t[Le],f[Wn]=l||t&&t[Wn]||null,f[Tt]=o,f[Gn]=Fx(),f[Ji]=d,f[Pf]=c,f[Rt]=n.type==2?t[Rt]:f,f}function uI(t,n,e){let i=en(n,t),r=dI(e),o=t[fn].rendererFactory,a=th(t,eh(t,r,null,xy(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function xy(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Iy(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function th(t,n){return t[zr]?t[Of][Xt]=n:t[zr]=n,t[Of]=n,n}function m(t=1){My(Ue(),G(),Nn()+t,!1)}function My(t,n,e,i){if(!i)if((n[Q]&3)===3){let o=t.preOrderCheckHooks;o!==null&&zl(n,o,e)}else{let o=t.preOrderHooks;o!==null&&$l(n,o,0,e)}vi(e)}var hc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(hc||{});function Ep(t,n,e,i){let r=j(null);try{let[o,a,s]=t.inputs[e],l=null;(a&hc.SignalBased)!==0&&(l=n[o][$e]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):jb(n,l,o,i)}finally{j(r)}}var yn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(yn||{}),fI;function nh(t,n){return fI(t,n)}var GH=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var xp=new WeakMap,ua=new WeakSet;function pI(t,n){let e=xp.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),ua.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function hI(t,n){let e=xp.get(t);e?e.includes(n)||e.push(n):xp.set(t,[n])}var lr=new Set,mc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(mc||{}),_n=new _(""),_b=new Set;function yi(t){_b.has(t)||(_b.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var gc=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),ih=[0,1,2,3],rh=(()=>{class t{ngZone=u(O);scheduler=u(Tn);errorHandler=u(dn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(_n,{optional:!0})}execute(){let e=this.sequences.size>0;e&&De(ge.AfterRenderHooksStart),this.executing=!0;for(let i of ih)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&De(ge.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[nr]??=[]).push(e),or(i),i[Q]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(mc.AFTER_NEXT_RENDER,e):e()}static \u0275prov=C({token:t,providedIn:"root",factory:()=>new t})}return t})(),ma=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[nr];n&&(this.view[nr]=n.filter(e=>e!==this))}};function et(t,n){let e=n?.injector??u(se);return yi("NgAfterNextRender"),gI(t,e,n,!0)}function mI(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function gI(t,n,e,i){let r=n.get(gc);r.impl??=n.get(rh);let o=n.get(_n,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(At):null,s=n.get(Gr,null,{optional:!0}),l=new ma(r.impl,mI(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var Sy=new _("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(be)})});function Ty(t,n,e){let i=t.get(Sy);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function vI(t,n){let e=t.get(Sy);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function bI(t,n){for(let[e,i]of n)Ty(t,i.animateFns)}function Cb(t,n,e,i){let r=t?.[mi]?.enter;n!==null&&r&&r.has(e.index)&&bI(i,r)}function qr(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;pn(r)?l=r:qn(r)&&(c=!0,r=r[un]);let d=Jt(r);t===0&&i!==null?(Cb(s,i,o,e),a==null?vy(n,i,d):Jl(n,i,d,a||null,!0)):t===1&&i!==null?(Cb(s,i,o,e),Jl(n,i,d,a||null,!0),pI(o,d)):t===2?(s?.[mi]?.leave?.has(o.index)&&hI(o,d),ua.delete(d),wb(s,o,e,f=>{if(ua.has(d)){ua.delete(d);return}by(n,d,c,f)})):t===3&&(ua.delete(d),wb(s,o,e,()=>{n.destroyNode(d)})),l!=null&&TI(n,t,e,l,o,i,a)}}function yI(t,n){Ry(t,n),n[un]=null,n[Tt]=null}function _I(t,n,e,i,r,o){i[un]=r,i[Tt]=n,bc(t,i,e,1,r,o)}function Ry(t,n){n[fn].changeDetectionScheduler?.notify(9),bc(t,n,n[Le],2,null,null)}function CI(t){let n=t[zr];if(!n)return dp(t[$],t);for(;n;){let e=null;if(qn(n))e=n[zr];else{let i=n[ze];i&&(e=i)}if(!e){for(;n&&!n[Xt]&&n!==t;)qn(n)&&dp(n[$],n),n=n[Xe];n===null&&(n=t),qn(n)&&dp(n[$],n),e=n&&n[Xt]}n=e}}function oh(t,n){let e=t[ir],i=e.indexOf(n);e.splice(i,1)}function vc(t,n){if(rr(n))return;let e=n[Le];e.destroyNode&&bc(t,n,e,3,null,null),CI(n)}function dp(t,n){if(rr(n))return;let e=j(null);try{n[Q]&=-129,n[Q]|=256,n[Bt]&&li(n[Bt]),EI(t,n),DI(t,n),n[$].type===1&&n[Le].destroy();let i=n[hi];if(i!==null&&pn(n[Xe])){i!==n[Xe]&&oh(i,n);let r=n[Rn];r!==null&&r.detachView(t)}wp(n)}finally{j(e)}}function wb(t,n,e,i){let r=t?.[mi];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&lr.add(t[Gn]),Ty(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),wI(t,i)}else t&&lr.delete(t[Gn]),i(!1)},r)}function wI(t,n){let e=t[mi]?.running;if(e){e.then(()=>{t[mi].running=void 0,lr.delete(t[Gn]),n(!0)});return}n(!1)}function DI(t,n){let e=t.cleanup,i=n[Hr];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Hr]=null);let r=n[zn];if(r!==null){n[zn]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[di];if(o!==null){n[di]=null;for(let a of o)a.destroy()}}function EI(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof sr)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];De(ge.LifecycleHookStart,s,l);try{l.call(s)}finally{De(ge.LifecycleHookEnd,s,l)}}else{De(ge.LifecycleHookStart,r,o);try{o.call(r)}finally{De(ge.LifecycleHookEnd,r,o)}}}}}function Ay(t,n,e){return xI(t,n.parent,e)}function xI(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[un];if(An(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===bn.None||r===bn.Emulated)return null}return en(i,e)}function ky(t,n,e){return MI(t,n,e)}function II(t,n,e){return t.type&40?en(t,e):null}var MI=II,Db;function ah(t,n,e,i){let r=Ay(t,i,n),o=n[Le],a=i.parent||n[Tt],s=ky(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)bb(o,r,e[l],s,!1);else bb(o,r,e,s,!1);Db!==void 0&&Db(o,i,n,e,r)}function fa(t,n){if(n!==null){let e=n.type;if(e&3)return en(n,t);if(e&4)return Ip(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return fa(t,i);{let r=t[n.index];return pn(r)?Ip(-1,r):Jt(r)}}else{if(e&128)return fa(t,n.next);if(e&32)return nh(n,t)()||Jt(t[n.index]);{let i=Ny(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=ui(t[Rt]);return fa(r,i)}else return fa(t,n.next)}}}return null}function Ny(t,n){if(n!==null){let i=t[Rt][Tt],r=n.projection;return i.projection[r]}return null}function Ip(t,n){let e=ze+t+1;if(e<n.length){let i=n[e],r=i[$].firstChild;if(r!==null)return fa(i,r)}return n[gi]}function sh(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Wn];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&Qr(Jt(l),i),e.flags|=2),!fc(e))if(c&8)sh(t,n,e.child,i,r,o,!1),qr(n,t,s,r,l,e,o,i);else if(c&32){let d=nh(e,i),f;for(;f=d();)qr(n,t,s,r,f,e,o,i);qr(n,t,s,r,l,e,o,i)}else c&16?Oy(t,n,i,e,r,o):qr(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function bc(t,n,e,i,r,o){sh(e,i,t.firstChild,n,r,o,!1)}function SI(t,n,e){let i=n[Le],r=Ay(t,e,n),o=e.parent||n[Tt],a=ky(o,e,n);Oy(i,0,n,e,r,a)}function Oy(t,n,e,i,r,o){let a=e[Rt],l=a[Tt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];qr(n,t,e[Wn],r,d,i,o,e)}else{let c=l,d=a[Xe];ny(i)&&(c.flags|=128),sh(t,n,c,d,r,o,!0)}}function TI(t,n,e,i,r,o,a){let s=i[gi],l=Jt(i);s!==l&&qr(n,t,e,o,s,r,a);for(let c=ze;c<i.length;c++){let d=i[c];bc(d[$],d,t,n,o,s)}}function RI(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:yn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=yn.Important),t.setStyle(e,i,r,o))}}function Py(t,n,e,i,r){let o=Nn(),a=i&2;try{vi(-1),a&&n.length>je&&My(t,n,je,!1);let s=a?ge.TemplateUpdateStart:ge.TemplateCreateStart;De(s,r,e),e(i,r)}finally{vi(o);let s=a?ge.TemplateUpdateEnd:ge.TemplateCreateEnd;De(s,r,e)}}function lh(t,n,e){FI(t,n,e),(e.flags&64)===64&&LI(t,n,e)}function yc(t,n,e=en){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function AI(t,n,e,i){let o=i.get(dy,cy)||e===bn.ShadowDom||e===bn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return kI(a),a}function kI(t){NI(t)}var NI=()=>null;function OI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function PI(t,n,e,i,r,o){let a=n[$];if(_c(t,a,n,e,i)){An(t)&&Ly(n,t.index);return}t.type&3&&(e=OI(e)),Fy(t,n,e,i,r,o)}function Fy(t,n,e,i,r,o){if(t.type&3){let a=en(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function Ly(t,n){let e=tn(n,t);e[Q]&16||(e[Q]|=64)}function FI(t,n,e){let i=e.directiveStart,r=e.directiveEnd;An(e)&&uI(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Kl(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=ha(n,t,a,e);if(Qr(l,n),o!==null&&BI(n,a-i,l,s,e,o),kn(s)){let c=tn(e.index,n);c[We]=ha(n,t,a,e)}}}function LI(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=Qv();try{vi(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];Nl(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&VI(l,c)}}finally{vi(-1),Nl(a)}}function VI(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Vy(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Ey(n,o.selectors,!1)&&(i??=[],kn(o)?i.unshift(o):i.push(o))}return i}function jI(t,n,e,i,r,o){let a=en(t,n);jy(n[Le],a,o,t.value,e,i,r)}function jy(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?Qi(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function BI(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Ep(i,e,l,c)}}function By(t,n,e,i,r){let o=je+e,a=n[$],s=r(a,n,t,i,e);n[o]=s,Wr(t,!0);let l=t.type===2;return l?(yy(n[Le],s,t),(Hv()===0||ra(t))&&Qr(s,n),zv()):Qr(s,n),Ll()&&(!l||!fc(t))&&ah(a,n,s,t),t}function Uy(t){let n=t;return Kf()?Xf():(n=n.parent,Wr(n,!1)),n}function UI(t,n){let e=t[Wn];if(!e)return;let i;try{i=e.get($t,null)}catch{i=null}i?.(n)}function _c(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],f=n.data[c];Ep(f,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];Ep(d,c,i,r),s=!0}return s}function HI(t,n){let e=tn(n,t),i=e[$];zI(i,e);let r=e[un];r!==null&&e[Ji]===null&&(e[Ji]=uy(r,e[Wn])),De(ge.ComponentStart);try{ch(i,e,e[We])}finally{De(ge.ComponentEnd,e[We])}}function zI(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function ch(t,n,e){Pl(n);try{let i=t.viewQuery;i!==null&&Dp(1,i,e);let r=t.template;r!==null&&Py(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Rn]?.finishViewCreation(t),t.staticContentQueries&&fy(t,n),t.staticViewQueries&&Dp(2,t.viewQuery,e);let o=t.components;o!==null&&$I(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[Q]&=-5,Fl()}}function $I(t,n){for(let e=0;e<n.length;e++)HI(t,n[e])}function Ea(t,n,e,i){let r=j(null);try{let o=n.tView,s=t[Q]&4096?4096:16,l=eh(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[hi]=c;let d=t[Rn];return d!==null&&(l[Rn]=d.createEmbeddedView(o)),ch(o,l,e),l}finally{j(r)}}function Kr(t,n){return!n||n.firstChild===null||ny(t)}function ga(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Jt(o)),pn(o)&&Hy(o,i);let a=e.type;if(a&8)ga(t,n,e.child,i);else if(a&32){let s=nh(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=Ny(n,e);if(Array.isArray(s))i.push(...s);else{let l=ui(n[Rt]);ga(l[$],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function Hy(t,n){for(let e=ze;e<t.length;e++){let i=t[e],r=i[$].firstChild;r!==null&&ga(i[$],i,r,n)}t[gi]!==t[un]&&n.push(t[gi])}function zy(t){if(t[nr]!==null){for(let n of t[nr])n.impl.addSequence(n);t[nr].length=0}}var $y=[];function WI(t){return t[Bt]??GI(t)}function GI(t){let n=$y.pop()??Object.create(ZI);return n.lView=t,n}function qI(t){t.lView[Bt]!==t&&(t.lView=null,$y.push(t))}var ZI=X(y({},oi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{or(t.lView)},consumerOnSignalRead(){this.lView[Bt]=this}});function YI(t){let n=t[Bt]??Object.create(QI);return n.lView=t,n}var QI=X(y({},oi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=ui(t.lView);for(;n&&!Wy(n[$]);)n=ui(n);n&&Uf(n)},consumerOnSignalRead(){this.lView[Bt]=this}});function Wy(t){return t.type!==2}function Gy(t){if(t[di]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[di])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[Q]&8192)}}var KI=100;function qy(t,n=0){let i=t[fn].rendererFactory,r=!1;r||i.begin?.();try{XI(t,n)}finally{r||i.end?.()}}function XI(t,n){let e=Jf();try{Yo(!0),Mp(t,n);let i=0;for(;oa(t);){if(i===KI)throw new T(103,!1);i++,Mp(t,1)}}finally{Yo(e)}}function JI(t,n,e,i){if(rr(n))return;let r=n[Q],o=!1,a=!1;Pl(n);let s=!0,l=null,c=null;o||(Wy(t)?(c=WI(n),l=Bn(c)):ks()===null?(s=!1,c=YI(n),l=Bn(c)):n[Bt]&&(li(n[Bt]),n[Bt]=null));try{Bf(n),qv(t.bindingStartIndex),e!==null&&Py(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&zl(n,h,null)}else{let h=t.preOrderHooks;h!==null&&$l(n,h,0,null),lp(n,0)}if(a||eM(n),Gy(n),Zy(n,0),t.contentQueries!==null&&fy(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&zl(n,h)}else{let h=t.contentHooks;h!==null&&$l(n,h,1),lp(n,1)}nM(t,n);let f=t.components;f!==null&&Qy(n,f,0);let p=t.viewQuery;if(p!==null&&Dp(2,p,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&zl(n,h)}else{let h=t.viewHooks;h!==null&&$l(n,h,2),lp(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ml]){for(let h of n[Ml])h();n[Ml]=null}o||(zy(n),n[Q]&=-73)}catch(d){throw o||or(n),d}finally{c!==null&&(si(c,l),s&&qI(c)),Fl()}}function Zy(t,n){for(let e=ry(t);e!==null;e=oy(e))for(let i=ze;i<e.length;i++){let r=e[i];Yy(r,n)}}function eM(t){for(let n=ry(t);n!==null;n=oy(n)){if(!(n[Q]&2))continue;let e=n[ir];for(let i=0;i<e.length;i++){let r=e[i];Uf(r)}}}function tM(t,n,e){De(ge.ComponentStart);let i=tn(n,t);try{Yy(i,e)}finally{De(ge.ComponentEnd,i[We])}}function Yy(t,n){Rl(t)&&Mp(t,n)}function Mp(t,n){let i=t[$],r=t[Q],o=t[Bt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&Tr(o)),a||=!1,o&&(o.dirty=!1),t[Q]&=-9217,a)JI(i,t,i.template,t[We]);else if(r&8192){let s=j(null);try{Gy(t),Zy(t,1);let l=i.components;l!==null&&Qy(t,l,1),zy(t)}finally{j(s)}}}function Qy(t,n,e){for(let i=0;i<n.length;i++)tM(t,n[i],e)}function nM(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)vi(~r);else{let o=r,a=e[++i],s=e[++i];Yv(a,o);let l=n[o];De(ge.HostBindingsUpdateStart,l);try{s(2,l)}finally{De(ge.HostBindingsUpdateEnd,l)}}}}finally{vi(-1)}}function dh(t,n){let e=Jf()?64:1088;for(t[fn].changeDetectionScheduler?.notify(n);t;){t[Q]|=e;let i=ui(t);if($r(t)&&!i)return t;t=i}return null}function Ky(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Xy(t,n){let e=ze+n;if(e<t.length)return t[e]}function xa(t,n,e,i=!0){let r=n[$];if(iM(r,n,t,e),i){let a=Ip(e,t),s=n[Le],l=s.parentNode(t[gi]);l!==null&&_I(r,t[Tt],s,n,l,a)}let o=n[Ji];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Jy(t,n){let e=va(t,n);return e!==void 0&&vc(e[$],e),e}function va(t,n){if(t.length<=ze)return;let e=ze+n,i=t[e];if(i){let r=i[hi];r!==null&&r!==t&&oh(r,i),n>0&&(t[e-1][Xt]=i[Xt]);let o=ta(t,ze+n);yI(i[$],i);let a=o[Rn];a!==null&&a.detachView(o[$]),i[Xe]=null,i[Xt]=null,i[Q]&=-129}return i}function iM(t,n,e,i){let r=ze+i,o=e.length;i>0&&(e[r-1][Xt]=n),i<o-ze?(n[Xt]=e[r],Sf(e,ze+i,n)):(e.push(n),n[Xt]=null),n[Xe]=e;let a=n[hi];a!==null&&e!==a&&e_(a,n);let s=n[Rn];s!==null&&s.insertView(t),Al(n),n[Q]|=128}function e_(t,n){let e=t[ir],i=n[Xe];if(qn(i))t[Q]|=2;else{let r=i[Xe][Rt];n[Rt]!==r&&(t[Q]|=2)}e===null?t[ir]=[n]:e.push(n)}var bi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[$];return ga(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[We]}set context(n){this._lView[We]=n}get destroyed(){return rr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Xe];if(pn(n)){let e=n[ia],i=e?e.indexOf(this):-1;i>-1&&(va(n,i),ta(e,i))}this._attachedToViewContainer=!1}vc(this._lView[$],this._lView)}onDestroy(n){Hf(this._lView,n)}markForCheck(){dh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Q]&=-129}reattach(){Al(this._lView),this._lView[Q]|=128}detectChanges(){this._lView[Q]|=1024,qy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new T(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=$r(this._lView),e=this._lView[hi];e!==null&&!n&&oh(e,this._lView),Ry(this._lView[$],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new T(902,!1);this._appRef=n;let e=$r(this._lView),i=this._lView[hi];i!==null&&!e&&e_(i,this._lView),Al(this._lView)}};var _t=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=rM;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Ea(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new bi(o)}}return t})();function rM(){return Cc(yt(),G())}function Cc(t,n){return t.type&4?new _t(n,t,eo(t,n)):null}function no(t,n,e,i,r){let o=t.data[n];if(o===null)o=oM(t,n,e,i,r),Zv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=$v();o.injectorIndex=a===null?-1:a.injectorIndex}return Wr(o,!0),o}function oM(t,n,e,i,r){let o=Qf(),a=Kf(),s=a?o:o&&o.parent,l=t.data[n]=sM(t,s,e,n,i,r);return aM(t,l,o,a),l}function aM(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function sM(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return qf()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function lM(t){let n=t[Ff]??[],i=t[Xe][Le],r=[];for(let o of n)o.data[ly]!==void 0?r.push(o):cM(o,i);t[Ff]=r}function cM(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[sy];for(;e<r;){let o=i.nextSibling;by(n,i,!1),i=o,e++}}}var dM=()=>null,uM=()=>null;function ec(t,n){return dM(t,n)}function t_(t,n,e){return uM(t,n,e)}var n_=class{},wc=class{},Sp=class{resolveComponentFactory(n){throw new T(917,!1)}},Ia=class{static NULL=new Sp},Qe=class{},Ae=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>fM()}return t})();function fM(){let t=G(),n=yt(),e=tn(n.index,t);return(qn(e)?e:t)[Le]}var i_=(()=>{class t{static \u0275prov=C({token:t,providedIn:"root",factory:()=>null})}return t})();var Gl={},Tp=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Gl,i);return r!==Gl||e===Gl?r:this.parentInjector.get(n,e,i)}};function tc(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=_l(r,s);else if(o==2){let l=s,c=n[++a];i=_l(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function F(t,n=0){let e=G();if(e===null)return H(t,n);let i=yt();return Xb(i,e,ut(t),n)}function r_(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}mM(t,n,e,s,o,l,c)}o!==null&&i!==null&&pM(e,i,o)}function pM(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new T(-301,!1);i.push(n[r],o)}}function hM(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function mM(t,n,e,i,r,o,a){let s=i.length,l=null;for(let p=0;p<s;p++){let h=i[p];l===null&&kn(h)&&(l=h,hM(t,e,p)),_p(Kl(e,n),t,h.type)}CM(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let h=i[p];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,f=Iy(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let h=i[p];if(e.mergedAttrs=Yr(e.mergedAttrs,h.hostAttrs),vM(t,e,n,f,h),_M(f,h,r),a!==null&&a.has(h)){let[x,R]=a.get(h);e.directiveToIndex.set(h.type,[f,x+e.directiveStart,R+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let v=h.type.prototype;!c&&(v.ngOnChanges||v.ngOnInit||v.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(v.ngOnChanges||v.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}gM(t,e,o)}function gM(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Eb(0,n,r,i),Eb(1,n,r,i),Ib(n,i,!1);else{let o=e.get(r);xb(0,n,o,i),xb(1,n,o,i),Ib(n,i,!0)}}}function Eb(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),o_(n,o)}}function xb(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),o_(n,a)}}function o_(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Ib(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Xp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function vM(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=ci(r.type,!0)),a=new sr(o,kn(r),F,null);t.blueprint[i]=a,e[i]=a,bM(t,n,i,Iy(t,e,r.hostVars,Ct),r)}function bM(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;yM(a)!=s&&a.push(s),a.push(e,i,o)}}function yM(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function _M(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;kn(n)&&(e[""]=t)}}function CM(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function a_(t,n,e,i,r,o,a,s){let l=n[$],c=l.consts,d=Ut(c,a),f=no(l,t,e,i,d);return o&&r_(l,n,f,Ut(c,s),r),f.mergedAttrs=Yr(f.mergedAttrs,f.attrs),f.attrs!==null&&tc(f,f.attrs,!1),f.mergedAttrs!==null&&tc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function s_(t,n){zb(t,n),Lf(n)&&t.queries.elementEnd(n)}function wM(t,n,e,i,r,o){let a=n.consts,s=Ut(a,r),l=no(n,t,e,i,s);if(l.mergedAttrs=Yr(l.mergedAttrs,l.attrs),o!=null){let c=Ut(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&tc(l,l.attrs,!1),l.mergedAttrs!==null&&tc(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function uh(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function fh(t,n,e){return t[n]=e}function DM(t,n){return t[n]}function Wt(t,n,e){if(e===Ct)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function l_(t,n,e,i){let r=Wt(t,n,e);return Wt(t,n+1,i)||r}function up(t,n,e){return function i(r){let o=An(t)?tn(t.index,n):n;dh(o,5);let a=n[We],s=Mb(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=Mb(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function Mb(t,n,e,i){let r=j(null);try{return De(ge.OutputStart,n,e),e(i)!==!1}catch(o){return UI(t,o),!1}finally{De(ge.OutputEnd,n,e),j(r)}}function EM(t,n,e,i,r,o,a,s){let l=ra(t),c=!1,d=null;if(!i&&l&&(d=IM(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let f=en(t,e),p=i?i(f):f;Ux(e,p,o,s);let h=r.listen(p,o,s);if(!xM(o)){let v=i?x=>i(Jt(x[t.index])):t.index;c_(v,n,e,o,s,h,!1)}}return c}function xM(t){return t.startsWith("animation")||t.startsWith("transition")}function IM(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Hr],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function c_(t,n,e,i,r,o,a){let s=n.firstCreatePass?$f(n):null,l=zf(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function Sb(t,n,e,i,r,o){let a=n[e],s=n[$],c=s.data[e].outputs[i],f=a[c].subscribe(o);c_(t.index,s,n,r,o,f,!0)}var Rp=Symbol("BINDING");function d_(t){return t.debugInfo?.className||t.type.name||null}var nc=class extends Ia{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=$n(n);return new cr(e,this.ngModule)}};function MM(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&hc.SignalBased)!==0};return r&&(o.transform=r),o})}function SM(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function TM(t,n,e){let i=n instanceof be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Tp(e,i):e}function RM(t){let n=t.get(Qe,null);if(n===null)throw new T(407,!1);let e=t.get(i_,null),i=t.get(Tn,null),r=t.get(_n,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function AM(t,n){let e=u_(t);return gy(n,e,e==="svg"?Pv:e==="math"?Fv:null)}function u_(t){return(t.selectors[0][0]||"div").toLowerCase()}var cr=class extends wc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=MM(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=SM(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=sI(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){De(ge.DynamicComponentStart);let s=j(null);try{let l=this.componentDef,c=TM(l,r||this.ngModule,n),d=RM(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(d_(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{j(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=kM(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?AI(c,r,s.encapsulation,e):AM(s,c),f=a?.some(Tb)||o?.some(v=>typeof v!="function"&&v.bindings.some(Tb)),p=eh(null,l,null,512|xy(s),null,null,n,c,e,null,uy(d,e,!0));p[je]=d,Pl(p);let h=null;try{let v=a_(je,p,2,"#host",()=>l.directiveRegistry,!0,0);yy(c,d,v),Qr(d,p),lh(l,p,v),py(l,v,p),s_(l,v),i!==void 0&&OM(v,this.ngContentSelectors,i),h=tn(v.index,p),p[We]=h[We],ch(l,p,null)}catch(v){throw h!==null&&wp(h),wp(p),v}finally{De(ge.DynamicComponentEnd),Fl()}return new ic(this.componentType,p,!!f)}};function kM(t,n,e,i){let r=t?["ng-version","21.2.10"]:lI(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[Rp].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let p of f.bindings){s+=p[Rp].requiredVars;let h=d+1;p.create&&(p.targetIdx=h,(o??=[]).push(p)),p.update&&(p.targetIdx=h,(a??=[]).push(p))}}let l=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,p=xf(f);l.push(p)}return Jp(0,null,NM(o,a),1,s,l,null,null,null,[r],null)}function NM(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Tb(t){let n=t[Rp].kind;return n==="input"||n==="twoWay"}var ic=class extends n_{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Sl(e[$],je),this.location=eo(this._tNode,e),this.instance=tn(this._tNode.index,e)[We],this.hostView=this.changeDetectorRef=new bi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=_c(i,r[$],r,n,e);this.previousInputValues.set(n,e);let a=tn(i.index,r);dh(a,1)}get injector(){return new ar(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function OM(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ft=(()=>{class t{static __NG_ELEMENT_ID__=PM}return t})();function PM(){let t=yt();return f_(t,G())}var Ap=class t extends ft{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return eo(this._hostTNode,this._hostLView)}get injector(){return new ar(this._hostTNode,this._hostLView)}get parentInjector(){let n=qp(this._hostTNode,this._hostLView);if(Gb(n)){let e=Yl(n,this._hostLView),i=Zl(n),r=e[$].data[i+8];return new ar(r,e)}else return new ar(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Rb(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-ze}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=ec(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Kr(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!hx(n),c;if(l)c=e;else{let R=e||{};c=R.index,i=R.injector,r=R.projectableNodes,o=R.environmentInjector||R.ngModuleRef,a=R.directives,s=R.bindings}let d=l?n:new cr($n(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let P=(l?f:this.parentInjector).get(be,null);P&&(o=P)}let p=$n(d.componentType??{}),h=ec(this._lContainer,p?.id??null),v=h?.firstChild??null,x=d.create(f,r,v,o,a,s);return this.insertImpl(x.hostView,c,Kr(this._hostTNode,h)),x}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Vv(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[Xe],c=new t(l,l[Tt],l[Xe]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return xa(a,r,o,i),n.attachToViewContainerRef(),Sf(fp(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Rb(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=va(this._lContainer,e);i&&(ta(fp(this._lContainer),e),vc(i[$],i))}detach(n){let e=this._adjustIndex(n,-1),i=va(this._lContainer,e);return i&&ta(fp(this._lContainer),e)!=null?new bi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Rb(t){return t[ia]}function fp(t){return t[ia]||(t[ia]=[])}function f_(t,n){let e,i=n[t.index];return pn(i)?e=i:(e=Ky(i,n,null,t),n[t.index]=e,th(n,e)),LM(e,n,t,i),new Ap(e,t,n)}function FM(t,n){let e=t[Le],i=e.createComment(""),r=en(n,t),o=e.parentNode(r);return Jl(e,o,i,e.nextSibling(r),!1),i}var LM=BM,VM=()=>!1;function jM(t,n,e){return VM(t,n,e)}function BM(t,n,e,i){if(t[gi])return;let r;e.type&8?r=Jt(i):r=FM(n,e),t[gi]=r}var kp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Np=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)hh(n,e).matches!==null&&this.queries[e].setDirty()}},rc=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=WM(n):this.predicate=n}},Op=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Pp=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,UM(e,o)),this.matchTNodeWithReadOption(n,e,Wl(e,n,o,!1,!1))}else i===_t?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Wl(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===ft||r===_t&&e.type&4)this.addMatch(e.index,-2);else{let o=Wl(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function UM(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function HM(t,n){return t.type&11?eo(t,n):t.type&4?Cc(t,n):null}function zM(t,n,e,i){return e===-1?HM(n,t):e===-2?$M(t,n,i):ha(t,t[$],e,n)}function $M(t,n,e){if(e===V)return eo(n,t);if(e===_t)return Cc(n,t);if(e===ft)return f_(n,t)}function p_(t,n,e,i){let r=n[Rn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(zM(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Fp(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=p_(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let f=ze;f<d.length;f++){let p=d[f];p[hi]===p[Xe]&&Fp(p[$],p,c,i)}if(d[ir]!==null){let f=d[ir];for(let p=0;p<f.length;p++){let h=f[p];Fp(h[$],h,c,i)}}}}}return i}function ph(t,n){return t[Rn].queries[n].queryList}function h_(t,n,e){let i=new vn((e&4)===4);return Uv(t,n,i,i.destroy),(n[Rn]??=new Np).queries.push(new kp(i))-1}function m_(t,n,e){let i=Ue();return i.firstCreatePass&&(v_(i,new rc(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),h_(i,G(),n)}function g_(t,n,e,i){let r=Ue();if(r.firstCreatePass){let o=yt();v_(r,new rc(n,e,i),o.index),GM(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return h_(r,G(),e)}function WM(t){return t.split(",").map(n=>n.trim())}function v_(t,n,e){t.queries===null&&(t.queries=new Op),t.queries.track(new Pp(n,e))}function GM(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function hh(t,n){return t.queries.getByIndex(n)}function b_(t,n){let e=t[$],i=hh(e,n);return i.crossesNgTemplate?Fp(e,t,n,[]):p_(e,t,i,n)}function y_(t,n,e){let i,r=Vo(()=>{i._dirtyCounter();let o=qM(i,t);if(n&&o===void 0)throw new T(-951,!1);return o});return i=r[$e],i._dirtyCounter=U(0),i._flatValue=void 0,r}function mh(t){return y_(!0,!1,t)}function gh(t){return y_(!0,!0,t)}function __(t,n){let e=t[$e];e._lView=G(),e._queryIndex=n,e._queryList=ph(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function qM(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[Q]&4)return n?void 0:bt;let r=ph(e,i),o=b_(e,i);return r.reset(o,ty),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Pn=class{},Dc=class{};var oc=class extends Pn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new nc(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Ef(n);this._bootstrapComponents=wy(o.bootstrap),this._r3Injector=np(n,e,[{provide:Pn,useValue:this},{provide:Ia,useValue:this.componentFactoryResolver},...i],Jo(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},ac=class extends Dc{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new oc(this.moduleType,n,[])}};var ba=class extends Pn{injector;componentFactoryResolver=new nc(this);instance=null;constructor(n){super();let e=new Zi([...n.providers,{provide:Pn,useValue:this},{provide:Ia,useValue:this.componentFactoryResolver}],n.parent||Ur(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ma(t,n,e=null){return new ba({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var ZM=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Af(!1,e.type),r=i.length>0?Ma([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=C({token:t,providedIn:"environment",factory:()=>new t(H(be))})}return t})();function D(t){return _a(()=>{let n=C_(t),e=X(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Zp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(ZM).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||bn.Emulated,styles:t.styles||bt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&yi("NgStandalone"),w_(e);let i=t.dependencies;return e.directiveDefs=Ab(i,YM),e.pipeDefs=Ab(i,_v),e.id=XM(e),e})}function YM(t){return $n(t)||xf(t)}function le(t){return _a(()=>({type:t.type,bootstrap:t.bootstrap||bt,declarations:t.declarations||bt,imports:t.imports||bt,exports:t.exports||bt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function QM(t,n){if(t==null)return pi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=hc.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function KM(t){if(t==null)return pi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function L(t){return _a(()=>{let n=C_(t);return w_(n),n})}function vh(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function C_(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||pi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||bt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:QM(t.inputs,n),outputs:KM(t.outputs),debugInfo:null}}function w_(t){t.features?.forEach(n=>n(t))}function Ab(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function XM(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function JM(t){return Object.getPrototypeOf(t.prototype).constructor}function Ee(t){let n=JM(t.type),e=!0,i=[t];for(;n;){let r;if(kn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new T(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=pp(t.inputs),a.declaredInputs=pp(t.declaredInputs),a.outputs=pp(t.outputs);let s=r.hostBindings;s&&rS(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&nS(t,l),c&&iS(t,c),eS(t,r),yv(t.outputs,r.outputs),kn(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Ee&&(e=!1)}}n=Object.getPrototypeOf(n)}tS(i)}function eS(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function tS(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Yr(r.hostAttrs,e=Yr(e,r.hostAttrs))}}function pp(t){return t===pi?{}:t===bt?[]:t}function nS(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function iS(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function rS(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function D_(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=Yr(t.mergedAttrs,t.attrs);let d=t.tView=Jp(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Wr(t,!1);let l=aS(e,n,t,i);Ll()&&ah(e,n,l,t),Qr(l,n);let c=Ky(l,n,l,t);n[i+je]=c,th(n,c),jM(c,t,n)}function oS(t,n,e,i,r,o,a,s,l,c,d){let f=e+je,p;return n.firstCreatePass?(p=no(n,f,4,a||null,s||null),Gf()&&r_(n,t,p,Ut(n.consts,c),Vy),zb(n,p)):p=n.data[f],D_(p,t,n,e,i,r,o,l),ra(p)&&lh(n,t,p),c!=null&&yc(t,p,d),p}function Xr(t,n,e,i,r,o,a,s,l,c,d){let f=e+je,p;if(n.firstCreatePass){if(p=no(n,f,4,a||null,s||null),c!=null){let h=Ut(n.consts,c);p.localNames=[];for(let v=0;v<h.length;v+=2)p.localNames.push(h[v],-1)}}else p=n.data[f];return D_(p,t,n,e,i,r,o,l),c!=null&&yc(t,p,d),p}function kt(t,n,e,i,r,o,a,s){let l=G(),c=Ue(),d=Ut(c.consts,o);return oS(l,c,t,n,e,i,r,d,void 0,a,s),kt}function io(t,n,e,i,r,o,a,s){let l=G(),c=Ue(),d=Ut(c.consts,o);return Xr(l,c,t,n,e,i,r,d,void 0,a,s),io}var aS=sS;function sS(t,n,e,i){return Vl(!0),n[Le].createComment("")}var bh=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Qn(t){return typeof t=="function"&&t[$e]!==void 0}var yh=new _("");function _i(t){return!!t&&typeof t.then=="function"}function _h(t){return!!t&&typeof t.subscribe=="function"}var E_=new _("");var Ch=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(E_,{optional:!0})??[];injector=u(se);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=st(this.injector,r);if(_i(o))e.push(o);else if(_h(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ec=new _("");function x_(){Vu(()=>{let t="";throw new T(600,t)})}function I_(t){return t.isBoundToModule}var lS=10;var nn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u($t);afterRenderManager=u(gc);zonelessEnabled=u(ca);rootEffectScheduler=u(Bl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new I;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Yn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(J(e=>!e))}constructor(){u(_n,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=se.NULL){return this._injector.get(O).run(()=>{De(ge.BootstrapComponentStart);let a=e instanceof wc;if(!this._injector.get(Ch).done){let v="";throw new T(405,v)}let l;a?l=e:l=this._injector.get(Ia).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=I_(l)?void 0:this._injector.get(Pn),d=i||l.selector,f=l.create(r,[],d,c),p=f.location.nativeElement,h=f.injector.get(yh,null);return h?.registerApplication(p),f.onDestroy(()=>{this.detachView(f.hostView),pa(this.components,f),h?.unregisterApplication(p)}),this._loadComponent(f),De(ge.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){De(ge.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(mc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw De(ge.ChangeDetectionEnd),new T(101,!1);let e=j(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,j(e),this.afterTick.next(),De(ge.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Qe,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<lS;){De(ge.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{De(ge.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!oa(r))continue;let o=i&&!this.zonelessEnabled?0:1;qy(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>oa(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;pa(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Ec,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>pa(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new T(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pa(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function xc(t,n){let e=G(),i=Zn();if(Wt(e,i,n)){let r=Ue(),o=la();if(_c(o,r,e,t,n))An(o)&&Ly(e,o.index);else{let s=en(o,e);jy(e[Le],s,null,o.value,t,n,null)}}return xc}function ye(t,n,e,i){let r=G(),o=Zn();if(Wt(r,o,n)){let a=Ue(),s=la();jI(s,r,t,n,e,i)}return ye}var Lp=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function hp(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function cS(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){j(i);let c=n.length-1;for(j(null);a<=s&&a<=c;){let d=t.at(a),f=n[a],p=hp(a,d,a,f,e);if(p!==0){p<0&&t.updateValue(a,f),a++;continue}let h=t.at(s),v=n[c],x=hp(s,h,c,v,e);if(x!==0){x<0&&t.updateValue(s,v),s--,c--;continue}let R=e(a,d),P=e(s,h),ve=e(a,f);if(Object.is(ve,P)){let rt=e(c,v);Object.is(rt,R)?(t.swap(a,s),t.updateValue(s,v),c--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new sc,o??=Nb(t,a,s,e),Vp(t,r,a,ve))t.updateValue(a,f),a++,s++;else if(o.has(ve))r.set(R,t.detach(a)),s--;else{let rt=t.create(a,n[a]);t.attach(a,rt),a++,s++}}for(;a<=c;)kb(t,r,e,a,n[a]),a++}else if(n!=null){j(i);let c=n[Symbol.iterator]();j(null);let d=c.next();for(;!d.done&&a<=s;){let f=t.at(a),p=d.value,h=hp(a,f,a,p,e);if(h!==0)h<0&&t.updateValue(a,p),a++,d=c.next();else{r??=new sc,o??=Nb(t,a,s,e);let v=e(a,p);if(Vp(t,r,a,v))t.updateValue(a,p),a++,s++,d=c.next();else if(!o.has(v))t.attach(a,t.create(a,p)),a++,s++,d=c.next();else{let x=e(a,f);r.set(x,t.detach(a)),s--}}}for(;!d.done;)kb(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Vp(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function kb(t,n,e,i,r){if(Vp(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function Nb(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var sc=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function M(t,n,e,i,r,o,a,s){yi("NgControlFlow");let l=G(),c=Ue(),d=Ut(c.consts,o);return Xr(l,c,t,n,e,i,r,d,256,a,s),wh}function wh(t,n,e,i,r,o,a,s){yi("NgControlFlow");let l=G(),c=Ue(),d=Ut(c.consts,o);return Xr(l,c,t,n,e,i,r,d,512,a,s),wh}function S(t,n){yi("NgControlFlow");let e=G(),i=Zn(),r=e[i]!==Ct?e[i]:-1,o=r!==-1?lc(e,je+r):void 0,a=0;if(Wt(e,i,t)){let s=j(null);try{if(o!==void 0&&Jy(o,a),t!==-1){let l=je+t,c=lc(e,l),d=Hp(e[$],l),f=t_(c,d,e),p=Ea(e,d,n,{dehydratedView:f});xa(c,p,a,Kr(d,f))}}finally{j(s)}}else if(o!==void 0){let s=Xy(o,a);s!==void 0&&(s[We]=n)}}var jp=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-ze}};function wt(t){return t}function Ic(t,n){return n}var Bp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function ke(t,n,e,i,r,o,a,s,l,c,d,f,p){yi("NgControlFlow");let h=G(),v=Ue(),x=l!==void 0,R=G(),P=s?a.bind(R[Rt][We]):a,ve=new Bp(x,P);R[je+t]=ve,Xr(h,v,t+1,n,e,i,r,Ut(v.consts,o),256),x&&Xr(h,v,t+2,l,c,d,f,Ut(v.consts,p),512)}var Up=class extends Lp{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-ze}at(n){return this.getLView(n)[We].$implicit}attach(n,e){let i=e[Ji];this.needsIndexUpdate||=n!==this.length,xa(this.lContainer,e,n,Kr(this.templateTNode,i)),dS(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,uS(this.lContainer,n),fS(this.lContainer,n)}create(n,e){let i=ec(this.lContainer,this.templateTNode.tView.ssrId);return Ea(this.hostLView,this.templateTNode,new jp(this.lContainer,e,n),{dehydratedView:i})}destroy(n){vc(n[$],n)}updateValue(n,e){this.getLView(n)[We].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[We].$index=n}getLView(n){return pS(this.lContainer,n)}};function Ne(t){let n=j(null),e=Nn();try{let i=G(),r=i[$],o=i[e],a=e+1,s=lc(i,a);if(o.liveCollection===void 0){let c=Hp(r,a);o.liveCollection=new Up(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(cS(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Zn(),d=l.length===0;if(Wt(i,c,d)){let f=e+2,p=lc(i,f);if(d){let h=Hp(r,f),v=t_(p,h,i),x=Ea(i,h,void 0,{dehydratedView:v});xa(p,x,0,Kr(h,v))}else r.firstUpdatePass&&lM(p),Jy(p,0)}}}finally{j(n)}}function lc(t,n){return t[n]}function dS(t,n){if(t.length<=ze)return;let e=ze+n,i=t[e],r=i?i[mi]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Wn];vI(o,r),lr.delete(i[Gn]),r.detachedLeaveAnimationFns=void 0}}function uS(t,n){if(t.length<=ze)return;let e=ze+n,i=t[e],r=i?i[mi]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function fS(t,n){return va(t,n)}function pS(t,n){return Xy(t,n)}function Hp(t,n){return Sl(t,n)}function N(t,n,e){let i=G(),r=Zn();if(Wt(i,r,n)){let o=Ue(),a=la();PI(a,i,t,n,i[Le],e)}return N}function zp(t,n,e,i,r){_c(n,t,e,r?"class":"style",i)}function b(t,n,e,i){let r=G(),o=r[$],a=t+je,s=o.firstCreatePass?a_(a,r,2,n,Vy,Gf(),e,i):o.data[a];if(An(s)){let l=r[fn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(d_(c),()=>(Ob(t,n,r,s,i),b))}}return Ob(t,n,r,s,i),b}function Ob(t,n,e,i,r){if(By(i,e,t,n,M_),ra(i)){let o=e[$];lh(o,e,i),py(o,i,e)}r!=null&&yc(e,i)}function g(){let t=Ue(),n=yt(),e=Uy(n);return t.firstCreatePass&&s_(t,e),Zf(e)&&Yf(),Wf(),e.classesWithoutHost!=null&&_x(e)&&zp(t,e,G(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Cx(e)&&zp(t,e,G(),e.stylesWithoutHost,!1),g}function A(t,n,e,i){return b(t,n,e,i),g(),A}function oe(t,n,e,i){let r=G(),o=r[$],a=t+je,s=o.firstCreatePass?wM(a,o,2,n,e,i):o.data[a];return By(s,r,t,n,M_),i!=null&&yc(r,s),oe}function ce(){let t=yt(),n=Uy(t);return Zf(n)&&Yf(),Wf(),ce}function Pe(t,n,e,i){return oe(t,n,e,i),ce(),Pe}var M_=(t,n,e,i,r)=>(Vl(!0),gy(n[Le],i,nb()));function Kn(){return G()}function pt(t,n,e){let i=G(),r=Zn();if(Wt(i,r,n)){let o=Ue(),a=la();Fy(a,i,t,n,i[Le],e)}return pt}var Sa="en-US";var hS=Sa;function S_(t){typeof t=="string"&&(hS=t.toLowerCase().replace(/_/g,"-"))}function pe(t,n,e){let i=G(),r=Ue(),o=yt();return mS(r,i,i[Le],o,t,n,e),pe}function mS(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=up(i,n,o),EM(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let p=d[f],h=d[f+1];l??=up(i,n,o),Sb(i,n,p,h,r,l)}if(c&&c.length)for(let f of c)l??=up(i,n,o),Sb(i,n,f,r,r,l)}}function E(t=1){return tb(t)}function gS(t,n){let e=null,i=nI(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Ey(t,o,!0):oI(i,o))return r}return e}function Te(t){let n=G()[Rt][Tt];if(!n.projection){let e=t?t.length:1,i=n.projection=Iv(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?gS(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function K(t,n=0,e,i,r,o){let a=G(),s=Ue(),l=i?t+1:null;l!==null&&Xr(a,s,l,i,r,o,null,e);let c=no(s,je+t,16,null,e||null);c.projection===null&&(c.projection=n),Xf();let f=!a[Ji]||qf();a[Rt][Tt].projection[c.projection]===null&&l!==null?vS(a,s,l):f&&!fc(c)&&SI(s,a,c)}function vS(t,n,e){let i=je+e,r=n.data[i],o=t[i],a=ec(o,r.tView.ssrId),s=Ea(t,r,void 0,{dehydratedView:a});xa(o,s,0,Kr(r,a))}function Ft(t,n,e,i){return g_(t,n,e,i),Ft}function Ke(t,n,e){return m_(t,n,e),Ke}function q(t){let n=G(),e=Ue(),i=Ol();sa(i+1);let r=hh(e,i);if(t.dirty&&Lv(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=b_(n,i);t.reset(o,ty),t.notifyOnChanges()}return!0}return!1}function Z(){return ph(G(),Ol())}function Mc(t,n,e,i,r){return __(n,g_(t,e,i,r)),Mc}function Sc(t,n,e,i){return __(t,m_(n,e,i)),Sc}function Tc(t=1){sa(Ol()+t)}function Cn(t){let n=Wv();return Tl(n,je+t)}function Hl(t,n){return t<<17|n<<2}function dr(t){return t>>17&32767}function bS(t){return(t&2)==2}function yS(t,n){return t&131071|n<<17}function $p(t){return t|2}function Jr(t){return(t&131068)>>2}function mp(t,n){return t&-131069|n<<2}function _S(t){return(t&1)===1}function Wp(t){return t|1}function CS(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=dr(a),l=Jr(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Br(f,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let p=dr(t[s+1]);t[i+1]=Hl(p,s),p!==0&&(t[p+1]=mp(t[p+1],i)),t[s+1]=yS(t[s+1],i)}else t[i+1]=Hl(s,0),s!==0&&(t[s+1]=mp(t[s+1],i)),s=i;else t[i+1]=Hl(l,0),s===0?s=i:t[l+1]=mp(t[l+1],i),l=i;c&&(t[i+1]=$p(t[i+1])),Pb(t,d,i,!0),Pb(t,d,i,!1),wS(n,d,t,i,o),a=Hl(s,l),o?n.classBindings=a:n.styleBindings=a}function wS(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Br(o,n)>=0&&(e[i+1]=Wp(e[i+1]))}function Pb(t,n,e,i){let r=t[e+1],o=n===null,a=i?dr(r):Jr(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];DS(l,n)&&(s=!0,t[a+1]=i?Wp(c):$p(c)),a=i?dr(c):Jr(c)}s&&(t[e+1]=i?$p(r):Wp(r))}function DS(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Br(t,n)>=0:!1}var gn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function ES(t){return t.substring(gn.key,gn.keyEnd)}function xS(t){return IS(t),T_(t,R_(t,0,gn.textEnd))}function T_(t,n){let e=gn.textEnd;return e===n?-1:(n=gn.keyEnd=MS(t,gn.key=n,e),R_(t,n,e))}function IS(t){gn.key=0,gn.keyEnd=0,gn.value=0,gn.valueEnd=0,gn.textEnd=t.length}function R_(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function MS(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Xn(t,n,e){return A_(t,n,e,!1),Xn}function z(t,n){return A_(t,n,null,!0),z}function Gt(t){TS(PS,SS,t,!0)}function SS(t,n){for(let e=xS(n);e>=0;e=T_(n,e))xl(t,ES(n),!0)}function A_(t,n,e,i){let r=G(),o=Ue(),a=kl(2);if(o.firstUpdatePass&&N_(o,t,a,i),n!==Ct&&Wt(r,a,n)){let s=o.data[Nn()];O_(o,s,r,r[Le],t,r[a+1]=LS(n,e),i,a)}}function TS(t,n,e,i){let r=Ue(),o=kl(2);r.firstUpdatePass&&N_(r,null,o,i);let a=G();if(e!==Ct&&Wt(a,o,e)){let s=r.data[Nn()];if(P_(s,i)&&!k_(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=_l(l,e||"")),zp(r,s,a,e,i)}else FS(r,s,a,a[Le],a[o+1],a[o+1]=OS(t,n,e),i,o)}}function k_(t,n){return n>=t.expandoStartIndex}function N_(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Nn()],a=k_(t,e);P_(o,i)&&n===null&&!a&&(n=!1),n=RS(r,o,n,i),CS(r,o,n,e,a,i)}}function RS(t,n,e,i){let r=Kv(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=gp(null,t,n,e,i),e=ya(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=gp(r,t,n,e,i),o===null){let l=AS(t,n,i);l!==void 0&&Array.isArray(l)&&(l=gp(null,t,n,l[1],i),l=ya(l,n.attrs,i),kS(t,n,i,l))}else o=NS(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function AS(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Jr(i)!==0)return t[dr(i)]}function kS(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[dr(r)]=i}function NS(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=ya(i,a,e)}return ya(i,n.attrs,e)}function gp(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=ya(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function ya(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),xl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function OS(t,n,e){if(e==null||e==="")return bt;let i=[],r=Da(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function PS(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&xl(t,i,e)}function FS(t,n,e,i,r,o,a,s){r===Ct&&(r=bt);let l=0,c=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let p=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,v=null,x;d===f?(l+=2,c+=2,p!==h&&(v=f,x=h)):f===null||d!==null&&d<f?(l+=2,v=d):(c+=2,v=f,x=h),v!==null&&O_(t,n,e,i,v,x,a,s),d=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function O_(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=_S(c)?Fb(l,n,e,r,Jr(c),a):void 0;if(!cc(d)){cc(o)||bS(c)&&(o=Fb(l,null,e,r,s,a));let f=Vf(Nn(),e);RI(i,a,f,r,o)}}function Fb(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,f=d===null,p=e[r+1];p===Ct&&(p=f?bt:void 0);let h=f?Il(p,i):d===i?p:void 0;if(c&&!cc(h)&&(h=Il(l,i)),cc(h)&&(s=h,a))return s;let v=t[r+1];r=a?dr(v):Jr(v)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=Il(l,i))}return s}function cc(t){return t!==void 0}function LS(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Jo(Da(t)))),t}function P_(t,n){return(t.flags&(n?8:16))!==0}function w(t,n=""){let e=G(),i=Ue(),r=t+je,o=i.firstCreatePass?no(i,r,1,n,null):i.data[r],a=VS(i,e,o,n);e[r]=a,Ll()&&ah(i,e,a,o),Wr(o,!1)}var VS=(t,n,e,i)=>(Vl(!0),Wx(n[Le],i));function jS(t,n,e,i=""){return Wt(t,Zn(),e)?n+Qi(e)+i:Ct}function BS(t,n,e,i,r,o=""){let a=Gv(),s=l_(t,a,e,r);return kl(2),s?n+Qi(e)+i+Qi(r)+o:Ct}function xe(t){return Ie("",t),xe}function Ie(t,n,e){let i=G(),r=jS(i,t,n,e);return r!==Ct&&F_(i,Nn(),r),Ie}function Ta(t,n,e,i,r){let o=G(),a=BS(o,t,n,e,i,r);return a!==Ct&&F_(o,Nn(),a),Ta}function F_(t,n,e){let i=Vf(n,t);Gx(t[Le],i,e)}function Rc(t){return Wt(G(),Zn(),t)?Qi(t):Ct}function Lb(t,n,e){let i=Ue();i.firstCreatePass&&L_(n,i.data,i.blueprint,kn(t),e)}function L_(t,n,e,i,r){if(t=ut(t),Array.isArray(t))for(let o=0;o<t.length;o++)L_(t[o],n,e,i,r);else{let o=Ue(),a=G(),s=yt(),l=qi(t)?t:ut(t.provide),c=Nf(t),d=s.providerIndexes&1048575,f=s.directiveStart,p=s.providerIndexes>>20;if(qi(t)||!t.multi){let h=new sr(c,r,F,null),v=bp(l,n,r?d:d+p,f);v===-1?(_p(Kl(s,a),o,l),vp(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[v]=h,a[v]=h)}else{let h=bp(l,n,d+p,f),v=bp(l,n,d,d+p),x=h>=0&&e[h],R=v>=0&&e[v];if(r&&!R||!r&&!x){_p(Kl(s,a),o,l);let P=zS(r?HS:US,e.length,r,i,c,t);!r&&R&&(e[v].providerFactory=P),vp(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(P),a.push(P)}else{let P=V_(e[r?v:h],c,!r&&i);vp(o,t,h>-1?h:v,P)}!r&&i&&R&&e[v].componentProviders++}}}function vp(t,n,e,i){let r=qi(n),o=kv(n);if(r||o){let l=(o?ut(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function V_(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function bp(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function US(t,n,e,i,r){return Gp(this.multi,[])}function HS(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=ha(i,i[$],this.providerFactory.index,r);a=l.slice(0,s),Gp(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Gp(o,a);return a}function Gp(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function zS(t,n,e,i,r,o){let a=new sr(t,e,F,null);return a.multi=[],a.index=n,a.componentProviders=0,V_(a,r,i&&!e),a}function Oe(t,n){return e=>{e.providersResolver=(i,r)=>Lb(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Lb(i,r?r(n):n,!0))}}function Ac(t,n){let e=aa()+t,i=G();return i[e]===Ct?fh(i,e,n()):DM(i,e)}function ht(t,n,e){return B_(G(),aa(),t,n,e)}function j_(t,n){let e=t[n];return e===Ct?void 0:e}function B_(t,n,e,i,r,o){let a=n+e;return Wt(t,a,r)?fh(t,a+1,o?i.call(o,r):i(r)):j_(t,a+1)}function $S(t,n,e,i,r,o,a){let s=n+e;return l_(t,s,r,o)?fh(t,s+2,a?i.call(a,r,o):i(r,o)):j_(t,s+2)}function Jn(t,n){let e=Ue(),i,r=t+je;e.firstCreatePass?(i=WS(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=ci(i.type,!0)),a,s=St(F);try{let l=Ql(!1),c=o();return Ql(l),jf(e,G(),r,c),c}finally{St(s)}}function WS(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Ra(t,n,e){let i=t+je,r=G(),o=Tl(r,i);return U_(r,i)?B_(r,aa(),n,o.transform,e,o):o.transform(e)}function Aa(t,n,e,i){let r=t+je,o=G(),a=Tl(o,r);return U_(o,r)?$S(o,aa(),n,a.transform,e,i,a):a.transform(e,i)}function U_(t,n){return t[$].data[n].pure}function Dh(t,n){return Cc(t,n)}var dc=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Eh=(()=>{class t{compileModuleSync(e){return new ac(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Ef(e),o=wy(r.declarations).reduce((a,s)=>{let l=$n(s);return l&&a.push(new cr(l)),a},[]);return new dc(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var H_=(()=>{class t{applicationErrorHandler=u($t);appRef=u(nn);taskService=u(Yn);ngZone=u(O);zonelessEnabled=u(ca);tracing=u(_n,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new fe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Qo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(sp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?ab:ip;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Qo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function z_(){return[{provide:Tn,useExisting:H_},{provide:O,useClass:Ko},{provide:ca,useValue:!0}]}function GS(){return typeof $localize<"u"&&$localize.locale||Sa}var kc=new _("",{factory:()=>u(kc,{optional:!0,skipSelf:!0})||GS()});function _e(t){return hv(t)}function mt(t,n){return Vo(t,n?.equal)}var qS=t=>t;function xh(t,n){if(typeof t=="function"){let e=rf(t,qS,n?.equal);return $_(e,n?.debugName)}else{let e=rf(t.source,t.computation,t.equal);return $_(e,t.debugName)}}function $_(t,n){let e=t[$e],i=t;return i.set=r=>fv(e,r),i.update=r=>pv(e,r),i.asReadonly=jl.bind(t),i}var Y_=Symbol("InputSignalNode#UNSET"),dT=X(y({},jo),{transformFn:void 0,applyValueToInputSignal(t,n){Oi(t,n)}});function Q_(t,n){let e=Object.create(dT);e.value=t,e.transformFn=n?.transform;function i(){if(ai(e),e.value===Y_){let r=null;throw new T(-950,r)}return e.value}return i[$e]=e,i}var Na=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Ca(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function W_(t,n){return Q_(t,n)}function uT(t){return Q_(Y_,t)}var He=(W_.required=uT,W_);function G_(t,n){return mh(n)}function fT(t,n){return gh(n)}var Oa=(G_.required=fT,G_);function q_(t,n){return mh(n)}function pT(t,n){return gh(n)}var K_=(q_.required=pT,q_);var Mh=new _(""),hT=new _("");function ka(t){return!t.moduleRef}function mT(t){let n=ka(t)?t.r3Injector:t.moduleRef.injector,e=n.get(O);return e.run(()=>{ka(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get($t),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),ka(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Mh);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Mh);a.add(o),t.moduleRef.onDestroy(()=>{pa(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return vT(i,e,()=>{let o=n.get(Yn),a=o.add(),s=n.get(Ch);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(kc,Sa);if(S_(l||Sa),!n.get(hT,!0))return ka(t)?n.get(nn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ka(t)){let d=n.get(nn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return gT?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var gT;function vT(t,n,e){try{let i=e();return _i(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Nc=null;function bT(t=[],n){return se.create({name:n,providers:[{provide:na,useValue:"platform"},{provide:Mh,useValue:new Set([()=>Nc=null])},...t]})}function yT(t=[]){if(Nc)return Nc;let n=bT(t);return Nc=n,x_(),_T(n),n}function _T(t){let n=t.get(uc,null);st(t,()=>{n?.forEach(e=>e())})}var CT=1e4;var XW=CT-1e3;var Ge=(()=>{class t{static __NG_ELEMENT_ID__=wT}return t})();function wT(t){return DT(yt(),G(),(t&16)===16)}function DT(t,n,e){if(An(t)&&!e){let i=tn(t.index,n);return new bi(i,i)}else if(t.type&175){let i=n[Rt];return new bi(i,n)}return null}var Sh=class{supports(n){return n instanceof Map||uh(n)}create(){return new Th}},Th=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||uh(n)))throw new T(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Rh(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Rh=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function Z_(){return new Oc([new Sh])}var Oc=(()=>{class t{static \u0275prov=C({token:t,providedIn:"root",factory:Z_});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||Z_())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new T(901,!1)}}return t})();function X_(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;De(ge.BootstrapApplicationStart);try{let o=r?.injector??yT(i),a=[z_(),lb,...e||[]],s=new ba({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return mT({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{De(ge.BootstrapApplicationEnd)}}function de(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function ro(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Ih=Symbol("NOT_SET"),J_=new Set,ET=X(y({},jo),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Ih,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Ih&&!Tr(this))return this.signal;try{for(let r of this.cleanup??J_)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Bn(this),i;try{i=this.userFn.apply(null,n)}finally{si(this,e)}return(this.value===Ih||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Ah=class extends ma{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(At),a),this.scheduler=r;for(let s of ih){let l=e[s];if(l===void 0)continue;let c=Object.create(ET);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(ai(c),c.value),c.signal[$e]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??J_)e()}finally{li(n)}}};function eC(t,n){let e=n?.injector??u(se),i=e.get(Tn),r=e.get(gc),o=e.get(_n,null,{optional:!0});r.impl??=e.get(rh);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Gr,null,{optional:!0}),l=new Ah(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Pc(t,n){let e=$n(t),i=n.elementInjector||Ur();return new cr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var tC=null;function rn(){return tC}function kh(t){tC??=t}var Pa=class{},Fc=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(nC),providedIn:"platform"})}return t})();var nC=(()=>{class t extends Fc{_location;_history;_doc=u(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return rn().getBaseHref(this._doc)}onPopState(e){let i=rn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=rn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function oC(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function iC(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Ci(t){return t&&t[0]!=="?"?`?${t}`:t}var oo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(IT),providedIn:"root"})}return t})(),xT=new _(""),IT=(()=>{class t extends oo{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return oC(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Ci(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Ci(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Ci(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(H(Fc),H(xT,8))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wi=(()=>{class t{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=TT(iC(rC(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Ci(i))}normalize(e){return t.stripTrailingSlash(ST(this._basePath,rC(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ci(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ci(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Ci;static joinWithSlash=oC;static stripTrailingSlash=iC;static \u0275fac=function(i){return new(i||t)(H(oo))};static \u0275prov=C({token:t,factory:()=>MT(),providedIn:"root"})}return t})();function MT(){return new wi(H(oo))}function ST(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function rC(t){return t.replace(/\/index.html$/,"")}function TT(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Nh=/\s+/,aC=[],Fa=(()=>{class t{_ngEl;_renderer;initialClasses=aC;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Nh):aC}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Nh):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Nh).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(F(V),F(Ae))};static \u0275dir=L({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var La=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:yn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(F(V),F(Oc),F(Ae))};static \u0275dir=L({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Oh=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(se);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(F(ft))};static \u0275dir=L({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Re]})}return t})();function AT(t,n){return{key:t,value:n}}var pr=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=sC;transform(e,i=sC){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(AT(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(F(Oc,16))};static \u0275pipe=vh({name:"keyvalue",type:t,pure:!1})}return t})();function sC(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Lc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var hr=class{};var Ph="browser";function lC(t){return t===Ph}var Va=class{_doc;constructor(n){this._doc=n}manager},Vc=(()=>{class t extends Va{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),Uc=new _(""),jh=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Vc));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Vc);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new T(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(H(Uc),H(O))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),Fh="ng-app-id";function cC(t){for(let n of t)n.remove()}function dC(t,n){let e=n.createElement("style");return e.textContent=t,e}function PT(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Fh}="${n}"],link[${Fh}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Fh),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Vh(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Bh=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,PT(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,dC);i?.forEach(r=>this.addUsage(r,this.external,Vh))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(cC(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])cC(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,dC(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Vh(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(H(ee),H(to),H(fr,8),H(ur))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),Lh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Uh=/%COMP%/g;var fC="%COMP%",FT=`_nghost-${fC}`,LT=`_ngcontent-${fC}`,VT=!0,jT=new _("",{factory:()=>VT});function BT(t){return LT.replace(Uh,t)}function UT(t){return FT.replace(Uh,t)}function pC(t,n){return n.map(e=>e.replace(Uh,t))}var Hh=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ja(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Bc?r.applyToHost(e):r instanceof Ba&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case bn.Emulated:o=new Bc(l,c,i,this.appId,d,a,s,f);break;case bn.ShadowDom:return new jc(l,e,i,a,s,this.nonce,f,c);case bn.ExperimentalIsolatedShadowDom:return new jc(l,e,i,a,s,this.nonce,f);default:o=new Ba(l,c,i,d,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(H(jh),H(Bh),H(to),H(jT),H(ee),H(O),H(fr),H(_n,8))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),ja=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Lh[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(uC(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(uC(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new T(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Lh[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Lh[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(yn.DashCase|yn.Important)?n.style.setProperty(e,i,r&yn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&yn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=rn().getGlobalEventTarget(this.doc,n),!n))throw new T(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function uC(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var jc=class extends ja{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=pC(i.id,c);for(let f of c){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}let d=i.getExternalStyles?.();if(d)for(let f of d){let p=Vh(f,r);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ba=class extends ja{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?pC(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&lr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Bc=class extends Ba{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=BT(c),this.hostAttr=UT(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Hc=class t extends Pa{supportsDOMEvents=!0;static makeCurrent(){kh(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=HT();return e==null?null:zT(e)}resetBaseElement(){Ua=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Lc(document.cookie,n)}},Ua=null;function HT(){return Ua=Ua||document.head.querySelector("base"),Ua?Ua.getAttribute("href"):null}function zT(t){return new URL(t,document.baseURI).pathname}var $T=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})(),hC=["alt","control","meta","shift"],WT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},GT={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},mC=(()=>{class t extends Va{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>rn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),hC.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=WT[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),hC.forEach(a=>{if(a!==r){let s=GT[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=C({token:t,factory:t.\u0275fac})}return t})();async function zh(t,n,e){let i=y({rootComponent:t},qT(n,e));return X_(i)}function qT(t,n){return{platformRef:n?.platformRef,appProviders:[...XT,...t?.providers??[]],platformProviders:KT}}function ZT(){Hc.makeCurrent()}function YT(){return new dn}function QT(){return Yp(document),document}var KT=[{provide:ur,useValue:Ph},{provide:uc,useValue:ZT,multi:!0},{provide:ee,useFactory:QT}];var XT=[{provide:na,useValue:"root"},{provide:dn,useFactory:YT},{provide:Uc,useClass:Vc,multi:!0},{provide:Uc,useClass:mC,multi:!0},Hh,Bh,jh,{provide:Qe,useExisting:Hh},{provide:hr,useClass:$T},[]];var Di=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Wh=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Gh=class{encodeKey(n){return gC(n)}encodeValue(n){return gC(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function JT(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var eR=/%(\d[a-f0-9])/gi,tR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function gC(t){return encodeURIComponent(t).replace(eR,(n,e)=>tR[e]??n)}function zc(t){return`${t}`}var ei=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Gh,n.fromString){if(n.fromObject)throw new T(2805,!1);this.map=JT(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(zc):[zc(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(zc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(zc(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function nR(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function vC(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function bC(t){return typeof Blob<"u"&&t instanceof Blob}function yC(t){return typeof FormData<"u"&&t instanceof FormData}function iR(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var _C="Content-Type",CC="Accept",wC="text/plain",DC="application/json",rR=`${DC}, ${wC}, */*`,ao=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(nR(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new T(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Di,this.context??=new Wh,!this.params)this.params=new ei,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||vC(this.body)||bC(this.body)||yC(this.body)||iR(this.body)?this.body:this.body instanceof ei?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||yC(this.body)?null:bC(this.body)?this.body.type||null:vC(this.body)?null:typeof this.body=="string"?wC:this.body instanceof ei?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?DC:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,p=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,v=n.transferCache??this.transferCache,x=n.timeout??this.timeout,R=n.body!==void 0?n.body:this.body,P=n.withCredentials??this.withCredentials,ve=n.reportProgress??this.reportProgress,rt=n.headers||this.headers,ot=n.params||this.params,Oo=n.context??this.context;return n.setHeaders!==void 0&&(rt=Object.keys(n.setHeaders).reduce((Po,Ri)=>Po.set(Ri,n.setHeaders[Ri]),rt)),n.setParams&&(ot=Object.keys(n.setParams).reduce((Po,Ri)=>Po.set(Ri,n.setParams[Ri]),ot)),new t(e,i,R,{params:ot,headers:rt,context:Oo,reportProgress:ve,responseType:r,withCredentials:P,transferCache:v,keepalive:o,cache:s,priority:a,timeout:x,mode:l,redirect:c,credentials:d,referrer:f,integrity:p,referrerPolicy:h})}},mr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(mr||{}),Ha=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Di,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},qh=class t extends Ha{constructor(n={}){super(n)}type=mr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},za=class t extends Ha{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=mr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},so=class extends Ha{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},oR=200,aR=204;var sR=/^\)\]\}',?\n/;var lR=(()=>{class t{xhrFactory;tracingService=u(_n,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new T(-2800,!1);let i=this.xhrFactory;return Y(null).pipe(Ye(()=>new W(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((R,P)=>a.setRequestHeader(R,P.join(","))),e.headers.has(CC)||a.setRequestHeader(CC,rR),!e.headers.has(_C)){let R=e.detectContentTypeHeader();R!==null&&a.setRequestHeader(_C,R)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let R=e.responseType.toLowerCase();a.responseType=R!=="json"?R:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let R=a.statusText||"OK",P=new Di(a.getAllResponseHeaders()),ve=a.responseURL||e.url;return l=new qh({headers:P,status:a.status,statusText:R,url:ve}),l},d=this.maybePropagateTrace(()=>{let{headers:R,status:P,statusText:ve,url:rt}=c(),ot=null;P!==aR&&(ot=typeof a.response>"u"?a.responseText:a.response),P===0&&(P=ot?oR:0);let Oo=P>=200&&P<300;if(e.responseType==="json"&&typeof ot=="string"){let Po=ot;ot=ot.replace(sR,"");try{ot=ot!==""?JSON.parse(ot):null}catch(Ri){ot=Po,Oo&&(Oo=!1,ot={error:Ri,text:ot})}}Oo?(o.next(new za({body:ot,headers:R,status:P,statusText:ve,url:rt||void 0})),o.complete()):o.error(new so({error:ot,headers:R,status:P,statusText:ve,url:rt||void 0}))}),f=this.maybePropagateTrace(R=>{let{url:P}=c(),ve=new so({error:R,status:a.status||0,statusText:a.statusText||"Unknown Error",url:P||void 0});o.error(ve)}),p=f;e.timeout&&(p=this.maybePropagateTrace(R=>{let{url:P}=c(),ve=new so({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:P||void 0});o.error(ve)}));let h=!1,v=this.maybePropagateTrace(R=>{h||(o.next(c()),h=!0);let P={type:mr.DownloadProgress,loaded:R.loaded};R.lengthComputable&&(P.total=R.total),e.responseType==="text"&&a.responseText&&(P.partialText=a.responseText),o.next(P)}),x=this.maybePropagateTrace(R=>{let P={type:mr.UploadProgress,loaded:R.loaded};R.lengthComputable&&(P.total=R.total),o.next(P)});return a.addEventListener("load",d),a.addEventListener("error",f),a.addEventListener("timeout",p),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",v),s!==null&&a.upload&&a.upload.addEventListener("progress",x)),a.send(s),o.next({type:mr.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",d),a.removeEventListener("timeout",p),e.reportProgress&&(a.removeEventListener("progress",v),s!==null&&a.upload&&a.upload.removeEventListener("progress",x)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(H(hr))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cR(t,n){return n(t)}function dR(t,n,e){return(i,r)=>st(e,()=>n(i,o=>t(o,r)))}var uR=new _("",{factory:()=>[]}),EC=new _(""),fR=new _("",{factory:()=>!0});var pR=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(lR),r},providedIn:"root"})}return t})();var hR=(()=>{class t{backend;injector;chain=null;pendingTasks=u(da);contributeToStability=u(fR);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(uR),...this.injector.get(EC,[])]));this.chain=i.reduceRight((r,o)=>dR(r,o,this.injector),cR)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Wo(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(H(pR),H(be))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mR=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=H(hR),r},providedIn:"root"})}return t})();function $h(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var gr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof ao)o=e;else{let l;r.headers instanceof Di?l=r.headers:l=new Di(r.headers);let c;r.params&&(r.params instanceof ei?c=r.params:c=new ei({fromObject:r.params})),o=new ao(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Y(o).pipe(Fr(l=>this.handler.handle(l)));if(e instanceof ao||r.observe==="events")return a;let s=a.pipe(he(l=>l instanceof za));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(J(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new T(2806,!1);return l.body}));case"blob":return s.pipe(J(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new T(2807,!1);return l.body}));case"text":return s.pipe(J(l=>{if(l.body!==null&&typeof l.body!="string")throw new T(2808,!1);return l.body}));default:return s.pipe(J(l=>l.body))}case"response":return s;default:throw new T(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ei().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,$h(r,i))}post(e,i,r={}){return this.request("POST",e,$h(r,i))}put(e,i,r={}){return this.request("PUT",e,$h(r,i))}static \u0275fac=function(i){return new(i||t)(H(mR))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var IC=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(H(ee))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var te="primary",is=Symbol("RouteTitle"),Xh=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function br(t){return new Xh(t)}function Zh(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function OC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Zh(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Zh(o,t.slice(0,o.length),s)||!Zh(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Yc(t){return new Promise((n,e)=>{t.pipe(Hn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function vR(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Fn(t[e],n[e]))return!1;return!0}function Fn(t,n){let e=t?Jh(t):void 0,i=n?Jh(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!PC(t[r],n[r]))return!1;return!0}function Jh(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function PC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function bR(t){return t.length>0?t[t.length-1]:null}function Cr(t){return Ho(t)?t:_i(t)?Ve(Promise.resolve(t)):Y(t)}function FC(t){return Ho(t)?Yc(t):Promise.resolve(t)}var yR={exact:jC,subset:BC},LC={exact:_R,subset:CR,ignored:()=>!0},VC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},em={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function MC(t,n,e){return yR[e.paths](t.root,n.root,e.matrixParams)&&LC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function _R(t,n){return Fn(t,n)}function jC(t,n,e){if(!vr(t.segments,n.segments)||!Gc(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!jC(t.children[i],n.children[i],e))return!1;return!0}function CR(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>PC(t[e],n[e]))}function BC(t,n,e){return UC(t,n,n.segments,e)}function UC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!vr(r,e)||n.hasChildren()||!Gc(r,e,i))}else if(t.segments.length===e.length){if(!vr(t.segments,e)||!Gc(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!BC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!vr(t.segments,r)||!Gc(t.segments,r,i)||!t.children[te]?!1:UC(t.children[te],n,o,i)}}function Gc(t,n,e){return n.every((i,r)=>LC[e](t[r].parameters,i.parameters))}var Zt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ce([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=br(this.queryParams),this._queryParamMap}toString(){return ER.serialize(this)}},Ce=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qc(this)}},Ei=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=br(this.parameters),this._parameterMap}toString(){return zC(this)}};function wR(t,n){return vr(t,n)&&t.every((e,i)=>Fn(e.parameters,n[i].parameters))}function vr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function DR(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===te&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==te&&(e=e.concat(n(r,i)))}),e}var vo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>new xi,providedIn:"root"})}return t})(),xi=class{parse(n){let e=new nm(n);return new Zt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${$a(n.root,!0)}`,i=MR(n.queryParams),r=typeof n.fragment=="string"?`#${xR(n.fragment)}`:"";return`${e}${i}${r}`}},ER=new xi;function qc(t){return t.segments.map(n=>zC(n)).join("/")}function $a(t,n){if(!t.hasChildren())return qc(t);if(n){let e=t.children[te]?$a(t.children[te],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==te&&i.push(`${r}:${$a(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=DR(t,(i,r)=>r===te?[$a(t.children[te],!1)]:[`${r}:${$a(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[te]!=null?`${qc(t)}/${e[0]}`:`${qc(t)}/(${e.join("//")})`}}function HC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function $c(t){return HC(t).replace(/%3B/gi,";")}function xR(t){return encodeURI(t)}function tm(t){return HC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Zc(t){return decodeURIComponent(t)}function SC(t){return Zc(t.replace(/\+/g,"%20"))}function zC(t){return`${tm(t.path)}${IR(t.parameters)}`}function IR(t){return Object.entries(t).map(([n,e])=>`;${tm(n)}=${tm(e)}`).join("")}function MR(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${$c(e)}=${$c(r)}`).join("&"):`${$c(e)}=${$c(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var SR=/^[^\/()?;#]+/;function Yh(t){let n=t.match(SR);return n?n[0]:""}var TR=/^[^\/()?;=#]+/;function RR(t){let n=t.match(TR);return n?n[0]:""}var AR=/^[^=?&#]+/;function kR(t){let n=t.match(AR);return n?n[0]:""}var NR=/^[^&#]+/;function OR(t){let n=t.match(NR);return n?n[0]:""}var nm=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ce([],{}):new Ce([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new T(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[te]=new Ce(e,i)),r}parseSegment(){let n=Yh(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(n),new Ei(Zc(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=RR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Yh(this.remaining);r&&(i=r,this.capture(i))}n[Zc(e)]=Zc(i)}parseQueryParam(n){let e=kR(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=OR(this.remaining);a&&(i=a,this.capture(i))}let r=SC(e),o=SC(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Yh(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new T(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=te);let s=this.parseChildren(e+1);i[a??te]=Object.keys(s).length===1&&s[te]?s[te]:new Ce([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new T(4011,!1)}};function $C(t){return t.segments.length>0?new Ce([],{[te]:t}):t}function WC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=WC(r);if(i===te&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ce(t.segments,n);return PR(e)}function PR(t){if(t.numberOfChildren===1&&t.children[te]){let n=t.children[te];return new Ce(t.segments.concat(n.segments),n.children)}return t}function Ii(t){return t instanceof Zt}function GC(t,n,e=null,i=null,r=new xi){let o=qC(t);return ZC(o,n,e,i,r)}function qC(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Ce(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=$C(i);return n??r}function ZC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Qh(o,o,o,e,i,r);let a=FR(n);if(a.toRoot())return Qh(o,o,new Ce([],{}),e,i,r);let s=LR(a,o,t),l=s.processChildren?Ga(s.segmentGroup,s.index,a.commands):QC(s.segmentGroup,s.index,a.commands);return Qh(o,s.segmentGroup,l,e,i,r)}function Qc(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ya(t){return typeof t=="object"&&t!=null&&t.outlets}function TC(t,n,e){t||="\u0275";let i=new Zt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Qh(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(f=>TC(c,f,o)):TC(c,d,o);let s;t===n?s=e:s=YC(t,n,e);let l=$C(WC(s));return new Zt(l,a,r)}function YC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=YC(o,n,e)}),new Ce(t.segments,i)}var Kc=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Qc(i[0]))throw new T(4003,!1);let r=i.find(Ya);if(r&&r!==bR(i))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function FR(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Kc(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Kc(e,n,i)}var co=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function LR(t,n,e){if(t.isAbsolute)return new co(n,!0,0);if(!e)return new co(n,!1,NaN);if(e.parent===null)return new co(e,!0,0);let i=Qc(t.commands[0])?0:1,r=e.segments.length-1+i;return VR(e,r,t.numberOfDoubleDots)}function VR(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new T(4005,!1);r=i.segments.length}return new co(i,!1,r-o)}function jR(t){return Ya(t[0])?t[0].outlets:{[te]:t}}function QC(t,n,e){if(t??=new Ce([],{}),t.segments.length===0&&t.hasChildren())return Ga(t,n,e);let i=BR(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ce(t.segments.slice(0,i.pathIndex),{});return o.children[te]=new Ce(t.segments.slice(i.pathIndex),t.children),Ga(o,0,r)}else return i.match&&r.length===0?new Ce(t.segments,{}):i.match&&!t.hasChildren()?im(t,n,e):i.match?Ga(t,0,r):im(t,n,e)}function Ga(t,n,e){if(e.length===0)return new Ce(t.segments,{});{let i=jR(e),r={};if(Object.keys(i).some(o=>o!==te)&&t.children[te]&&t.numberOfChildren===1&&t.children[te].segments.length===0){let o=Ga(t.children[te],n,e);return new Ce(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=QC(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ce(t.segments,r)}}function BR(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Ya(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!AC(l,c,a))return o;i+=2}else{if(!AC(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function im(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Ya(o)){let l=UR(o.outlets);return new Ce(i,l)}if(r===0&&Qc(e[0])){let l=t.segments[n];i.push(new Ei(l.path,RC(e[0]))),r++;continue}let a=Ya(o)?o.outlets[te]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Qc(s)?(i.push(new Ei(a,RC(s))),r+=2):(i.push(new Ei(a,{})),r++)}return new Ce(i,{})}function UR(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=im(new Ce([],{}),0,i))}),n}function RC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function AC(t,n,e){return t==e.path&&Fn(n,e.parameters)}var qa="imperative",lt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(lt||{}),Yt=class{id;url;constructor(n,e){this.id=n,this.url=e}},yr=class extends Yt{type=lt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ln=class extends Yt{urlAfterRedirects;type=lt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Dt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Dt||{}),Qa=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Qa||{}),on=class extends Yt{reason;code;type=lt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function KC(t){return t instanceof on&&(t.code===Dt.Redirect||t.code===Dt.SupersededByNewNavigation)}var ni=class extends Yt{reason;code;type=lt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},_r=class extends Yt{error;target;type=lt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ka=class extends Yt{urlAfterRedirects;state;type=lt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xc=class extends Yt{urlAfterRedirects;state;type=lt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jc=class extends Yt{urlAfterRedirects;state;shouldActivate;type=lt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ed=class extends Yt{urlAfterRedirects;state;type=lt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},td=class extends Yt{urlAfterRedirects;state;type=lt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nd=class{route;type=lt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},id=class{route;type=lt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},rd=class{snapshot;type=lt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},od=class{snapshot;type=lt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ad=class{snapshot;type=lt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sd=class{snapshot;type=lt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var fo=class{},Xa=class{},po=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function HR(t){return!(t instanceof fo)&&!(t instanceof po)&&!(t instanceof Xa)}var ld=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new bo(this.rootInjector)}},bo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new ld(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(H(be))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cd=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=rm(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=rm(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=om(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return om(n,this._root).map(e=>e.value)}};function rm(t,n){if(t===n.value)return n;for(let e of n.children){let i=rm(t,e);if(i)return i}return null}function om(t,n){if(t===n.value)return[n];for(let e of n.children){let i=om(t,e);if(i.length)return i.unshift(n),i}return[]}var qt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function lo(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Ja=class extends cd{snapshot;constructor(n,e){super(n),this.snapshot=e,hm(this,n)}toString(){return this.snapshot.toString()}};function XC(t,n){let e=zR(t,n),i=new Ze([new Ei("",{})]),r=new Ze({}),o=new Ze({}),a=new Ze({}),s=new Ze(""),l=new Qt(i,r,a,s,o,te,t,e.root);return l.snapshot=e.root,new Ja(new qt(l,[]),e)}function zR(t,n){let e={},i={},r={},a=new ho([],e,r,"",i,te,t,null,{},n);return new es("",new qt(a,[]))}var Qt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(J(c=>c[is]))??Y(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(J(n=>br(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(J(n=>br(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function pm(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&e0(r)&&(i.resolve[is]=r.title),i}var ho=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[is]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=br(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=br(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},es=class extends cd{url;constructor(n,e){super(e),this.url=n,hm(this,e)}toString(){return JC(this._root)}};function hm(t,n){n.value._routerState=t,n.children.forEach(e=>hm(t,e))}function JC(t){let n=t.children.length>0?` { ${t.children.map(JC).join(", ")} } `:"";return`${t.value}${n}`}function Kh(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Fn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Fn(n.params,e.params)||t.paramsSubject.next(e.params),vR(n.url,e.url)||t.urlSubject.next(e.url),Fn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function am(t,n){let e=Fn(t.params,n.params)&&wR(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||am(t.parent,n.parent))}function e0(t){return typeof t.title=="string"||t.title===null}var t0=new _(""),rs=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=te;activateEvents=new B;deactivateEvents=new B;attachEvents=new B;detachEvents=new B;routerOutletData=He();parentContexts=u(bo);location=u(ft);changeDetector=u(Ge);inputBinder=u(pd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new sm(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Re]})}return t})(),sm=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Qt?this.route:n===bo?this.childContexts:n===t0?this.outletData:this.parent.get(n,e)}},pd=new _("");var mm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&A(0,"router-outlet")},dependencies:[rs],encapsulation:2})}return t})();function gm(t){let n=t.children&&t.children.map(gm),e=n?X(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==te&&(e.component=mm),e}function $R(t,n,e){let i=ts(t,n._root,e?e._root:void 0);return new Ja(i,n)}function ts(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=WR(t,n,e);return new qt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>ts(t,s)),a}}let i=GR(n.value),r=n.children.map(o=>ts(t,o));return new qt(i,r)}}function WR(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return ts(t,i,r);return ts(t,i)})}function GR(t){return new Qt(new Ze(t.url),new Ze(t.params),new Ze(t.queryParams),new Ze(t.fragment),new Ze(t.data),t.outlet,t.component,t)}var mo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},n0="ngNavigationCancelingError";function dd(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Ii(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=i0(!1,Dt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function i0(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[n0]=!0,e.cancellationCode=n,e}function qR(t){return r0(t)&&Ii(t.url)}function r0(t){return!!t&&t[n0]}var lm=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Kh(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=lo(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=lo(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=lo(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=lo(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new sd(o.value.snapshot))}),n.children.length&&this.forwardEvent(new od(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Kh(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Kh(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},ud=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},uo=class{component;route;constructor(n,e){this.component=n,this.route=e}};function ZR(t,n,e){let i=t._root,r=n?n._root:null;return Wa(i,r,e,[i.value])}function YR(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function yo(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!bf(t)?t:n.get(t):i}function Wa(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=lo(n);return t.children.forEach(a=>{QR(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Za(s,e.getContext(a),r)),r}function QR(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=KR(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ud(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Wa(t,n,s?s.children:null,i,r):Wa(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new uo(s.outlet.component,a))}else a&&Za(n,s,r),r.canActivateChecks.push(new ud(i)),o.component?Wa(t,null,s?s.children:null,i,r):Wa(t,null,e,i,r);return r}function KR(t,n,e){if(typeof e=="function")return st(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!vr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!vr(t.url,n.url)||!Fn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!am(t,n)||!Fn(t.queryParams,n.queryParams);default:return!am(t,n)}}function Za(t,n,e){let i=lo(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Za(a,n.children.getContext(o),e):Za(a,null,e):Za(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new uo(n.outlet.component,r)):e.canDeactivateChecks.push(new uo(null,r)):e.canDeactivateChecks.push(new uo(null,r))}function os(t){return typeof t=="function"}function XR(t){return typeof t=="boolean"}function JR(t){return t&&os(t.canLoad)}function eA(t){return t&&os(t.canActivate)}function tA(t){return t&&os(t.canActivateChild)}function nA(t){return t&&os(t.canDeactivate)}function iA(t){return t&&os(t.canMatch)}function o0(t){return t instanceof Ui||t?.name==="EmptyError"}var Wc=Symbol("INITIAL_VALUE");function go(){return Ye(t=>zo(t.map(n=>n.pipe(at(1),dt(Wc)))).pipe(J(n=>{for(let e of n)if(e!==!0){if(e===Wc)return Wc;if(e===!1||rA(e))return e}return!0}),he(n=>n!==Wc),at(1)))}function rA(t){return Ii(t)||t instanceof mo}function a0(t){return t.aborted?Y(void 0).pipe(at(1)):new W(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function s0(t){return Se(a0(t))}function oA(t){return ct(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Y(X(y({},n),{guardsResult:!0})):aA(o,e,i).pipe(ct(a=>a&&XR(a)?sA(e,r,t):Y(a)),J(a=>X(y({},n),{guardsResult:a})))})}function aA(t,n,e){return Ve(t).pipe(ct(i=>fA(i.component,i.route,e,n)),Hn(i=>i!==!0,!0))}function sA(t,n,e){return Ve(n).pipe(Fr(i=>Mn(cA(i.route.parent,e),lA(i.route,e),uA(t,i.path),dA(t,i.route))),Hn(i=>i!==!0,!0))}function lA(t,n){return t!==null&&n&&n(new ad(t)),Y(!0)}function cA(t,n){return t!==null&&n&&n(new rd(t)),Y(!0)}function dA(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Y(!0);let i=e.map(r=>Hi(()=>{let o=n._environmentInjector,a=yo(r,o),s=eA(a)?a.canActivate(n,t):st(o,()=>a(n,t));return Cr(s).pipe(Hn())}));return Y(i).pipe(go())}function uA(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>YR(o)).filter(o=>o!==null).map(o=>Hi(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=yo(s,l),d=tA(c)?c.canActivateChild(e,t):st(l,()=>c(e,t));return Cr(d).pipe(Hn())});return Y(a).pipe(go())}));return Y(r).pipe(go())}function fA(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Y(!0);let o=r.map(a=>{let s=n._environmentInjector,l=yo(a,s),c=nA(l)?l.canDeactivate(t,n,e,i):st(s,()=>l(t,n,e,i));return Cr(c).pipe(Hn())});return Y(o).pipe(go())}function pA(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Y(!0);let a=o.map(s=>{let l=yo(s,t),c=JR(l)?l.canLoad(n,e):st(t,()=>l(n,e)),d=Cr(c);return r?d.pipe(s0(r)):d});return Y(a).pipe(go(),l0(i))}function l0(t){return qu(vt(n=>{if(typeof n!="boolean")throw dd(t,n)}),J(n=>n===!0))}function hA(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return Y(!0);let s=a.map(l=>{let c=yo(l,t),d=iA(c)?c.canMatch(n,e,r):st(t,()=>c(n,e,r));return Cr(d).pipe(s0(o))});return Y(s).pipe(go(),l0(i))}var ti=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},ns=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function mA(t){throw new T(4e3,!1)}function gA(t){throw i0(!1,Dt.GuardRejected)}var cm=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[te])throw mA(`${n.redirectTo}`);r=r.children[te]}}async applyRedirectCommands(n,e,i,r,o){let a=await vA(e,r,o);if(a instanceof Zt)throw new ns(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new ns(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Zt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Ce(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function vA(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Yc(Cr(st(e,()=>i(n))))}function bA(t,n){return t.providers&&!t._injector&&(t._injector=Ma(t.providers,n,`Route: ${t.path}`)),t._injector??n}function wn(t){return t.outlet||te}function yA(t,n){let e=t.filter(i=>wn(i)===n);return e.push(...t.filter(i=>wn(i)!==n)),e}var dm={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function c0(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function _A(t,n,e,i,r,o,a){let s=d0(t,n,e);if(!s.matched)return Y(s);let l=c0(o(s));return i=bA(n,i),hA(i,n,e,r,l,a).pipe(J(c=>c===!0?s:y({},dm)))}function d0(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},dm):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||OC)(e,t,n);if(!r)return y({},dm);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function kC(t,n,e,i,r){return e.length>0&&DA(t,e,i,r)?{segmentGroup:new Ce(n,wA(i,new Ce(e,t.children))),slicedSegments:[]}:e.length===0&&EA(t,e,i)?{segmentGroup:new Ce(t.segments,CA(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ce(t.segments,t.children),slicedSegments:e}}function CA(t,n,e,i){let r={};for(let o of e)if(hd(t,n,o)&&!i[wn(o)]){let a=new Ce([],{});r[wn(o)]=a}return y(y({},i),r)}function wA(t,n){let e={};e[te]=n;for(let i of t)if(i.path===""&&wn(i)!==te){let r=new Ce([],{});e[wn(i)]=r}return e}function DA(t,n,e,i){return e.some(r=>!hd(t,n,r)||!(wn(r)!==te)?!1:!(i!==void 0&&wn(r)===i))}function EA(t,n,e){return e.some(i=>hd(t,n,i))}function hd(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function xA(t,n,e){return n.length===0&&!t.children[e]}var um=class{};async function IA(t,n,e,i,r,o,a="emptyOnly",s){return new fm(t,n,e,i,r,a,o,s).recognize()}var MA=31,fm=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new cm(this.urlSerializer,this.urlTree)}noMatchError(n){return new T(4002,`'${n.segmentGroup}'`)}async recognize(){let n=kC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new qt(i,e),o=new es("",r),a=GC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new ho([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),te,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,te,e),rootSnapshot:e}}catch(i){if(i instanceof ns)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ti?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof qt?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=yA(e,l),f=await this.processSegmentGroup(n,d,c,l,r);a.push(...f)}let s=u0(a);return SA(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof ti||o0(c))continue;throw c}if(xA(i,r,o))return new um;throw new ti(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(wn(i)!==a&&(a===te||!hd(r,o,i)))throw new ti(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new ti(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:p}=d0(e,r,o);if(!l)throw new ti(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>MA&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let v=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,c0(h),n),x=await this.applyRedirects.lineralizeSegments(r,v);return this.processSegment(n,i,e,x.concat(p),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new ho(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,RA(e),wn(e),e.component??e._loadedComponent??null,e,AA(e),n),s=pm(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=rt=>this.createSnapshot(n,i,rt.consumedSegments,rt.parameters,a),l=await Yc(_A(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new ti(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:p,remainingSegments:h}=l,v=this.createSnapshot(n,i,p,f,a),{segmentGroup:x,slicedSegments:R}=kC(e,p,h,c,o);if(R.length===0&&x.hasChildren()){let rt=await this.processChildren(d,c,x,v);return new qt(v,rt)}if(c.length===0&&R.length===0)return new qt(v,[]);let P=wn(i)===o,ve=await this.processSegment(d,c,x,R,P?te:o,!0,v);return new qt(v,ve instanceof qt?[ve]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Yc(pA(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw gA(e)}return{routes:[],injector:n}}};function SA(t){t.sort((n,e)=>n.value.outlet===te?-1:e.value.outlet===te?1:n.value.outlet.localeCompare(e.value.outlet))}function TA(t){let n=t.value.routeConfig;return n&&n.path===""}function u0(t){let n=[],e=new Set;for(let i of t){if(!TA(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=u0(i.children);n.push(new qt(i.value,r))}return n.filter(i=>!e.has(i))}function RA(t){return t.data||{}}function AA(t){return t.resolve||{}}function kA(t,n,e,i,r,o,a){return ct(async s=>{let{state:l,tree:c}=await IA(t,n,e,i,s.extractedUrl,r,o,a);return X(y({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function NA(t){return ct(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Y(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of f0(s))o.add(l);let a=0;return Ve(o).pipe(Fr(s=>r.has(s)?OA(s,e,t):(s.data=pm(s,s.parent,t).resolve,Y(void 0))),vt(()=>a++),cl(1),ct(s=>a===o.size?Y(n):Be))})}function f0(t){let n=t.children.map(e=>f0(e)).flat();return[t,...n]}function OA(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!e0(i)&&(r[is]=i.title),Hi(()=>(t.data=pm(t,t.parent,e).resolve,PA(r,t,n).pipe(J(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function PA(t,n,e){let i=Jh(t);if(i.length===0)return Y({});let r={};return Ve(i).pipe(ct(o=>FA(t[o],n,e).pipe(Hn(),vt(a=>{if(a instanceof mo)throw dd(new xi,a);r[o]=a}))),cl(1),J(()=>r),$o(o=>o0(o)?Be:Ku(o)))}function FA(t,n,e){let i=n._environmentInjector,r=yo(t,i),o=r.resolve?r.resolve(n,e):st(i,()=>r(n,e));return Cr(o)}function NC(t){return Ye(n=>{let e=t(n);return e?Ve(e).pipe(J(()=>n)):Y(n)})}var vm=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===te);return i}getResolvedTitleForRoute(e){return e.data[is]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(p0),providedIn:"root"})}return t})(),p0=(()=>{class t extends vm{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(H(IC))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_o=new _("",{factory:()=>({})}),as=new _(""),h0=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Eh);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await FC(st(e,()=>i.loadComponent())),a=await v0(g0(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await m0(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function m0(t,n,e,i){let r=await FC(st(e,()=>t.loadChildren())),o=await v0(g0(r)),a;o instanceof Dc||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(as,[],{optional:!0,self:!0}).flat()),{routes:l.map(gm),injector:s,factory:d}}function LA(t){return t&&typeof t=="object"&&"default"in t}function g0(t){return LA(t)?t.default:t}async function v0(t){return t}var md=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(VA),providedIn:"root"})}return t})(),VA=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),b0=new _("");var jA=()=>{},y0=new _(""),_0=(()=>{class t{currentNavigation=U(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=U(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=u(h0);environmentInjector=u(be);destroyRef=u(At);urlSerializer=u(vo);rootContexts=u(bo);location=u(wi);inputBindingEnabled=u(pd,{optional:!0})!==null;titleStrategy=u(vm);options=u(_o,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(md);createViewTransition=u(b0,{optional:!0});navigationErrorHandler=u(y0,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new nd(r)),i=r=>this.events.next(new id(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;_e(()=>{this.transitions?.next(X(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ze(null),this.transitions.pipe(he(i=>i!==null),Ye(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return Y(i).pipe(Ye(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Dt.SupersededByNewNavigation),Be;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?X(y({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new ni(s.id,this.urlSerializer.serialize(s.rawUrl),"",Qa.IgnoredSameUrlNavigation)),s.resolve(!1),Be;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Y(s).pipe(Ye(f=>(this.events.next(new yr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Be:Promise.resolve(f))),kA(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),vt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=f.urlAfterRedirects,p)),this.events.next(new Xa)}),Ye(f=>Ve(i.routesRecognizeHandler.deferredHandle??Y(void 0)).pipe(J(()=>f))),vt(()=>{let f=new Ka(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:p,source:h,restoredState:v,extras:x}=s,R=new yr(f,this.urlSerializer.serialize(p),h,v);this.events.next(R);let P=XC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=X(y({},s),{targetSnapshot:P,urlAfterRedirects:p,extras:X(y({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ve=>(ve.finalUrl=p,ve)),Y(i)}else return this.events.next(new ni(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Qa.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Be}),J(s=>{let l=new Xc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=X(y({},s),{guards:ZR(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),oA(s=>this.events.next(s)),Ye(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw dd(this.urlSerializer,s.guardsResult);let l=new Jc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Be;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Dt.GuardRejected),Be;if(s.guards.canActivateChecks.length===0)return Y(s);let c=new ed(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return Be;let d=!1;return Y(s).pipe(NA(this.paramsInheritanceStrategy),vt({next:()=>{d=!0;let f=new td(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(s,"",Dt.NoDataFromResolver)}}))}),NC(s=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let p=d._environmentInjector;f.push(this.configLoader.loadComponent(p,d.routeConfig).then(h=>{d.component=h}))}for(let p of d.children)f.push(...l(p));return f},c=l(s.targetSnapshot.root);return c.length===0?Y(s):Ve(Promise.all(c).then(()=>s))}),NC(()=>this.afterPreactivation()),Ye(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?Ve(c).pipe(J(()=>i)):Y(i)}),at(1),Ye(s=>{let l=$R(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=X(y({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new fo);let c=i.beforeActivateHandler.deferredHandle;return c?Ve(c.then(()=>s)):Y(s)}),vt(s=>{new lm(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=jA,l)),this.lastSuccessfulNavigation.set(_e(this.currentNavigation)),this.events.next(new Ln(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Se(a0(o.signal).pipe(he(()=>!r&&!i.targetRouterState),vt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Dt.Aborted)}))),vt({complete:()=>{r=!0}}),Se(this.transitionAbortWithErrorSubject.pipe(vt(s=>{throw s}))),Wo(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Dt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),$o(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Be;if(r0(s))this.events.next(new on(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),qR(s)?this.events.next(new po(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new _r(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=st(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof mo){let{message:d,cancellationCode:f}=dd(this.urlSerializer,c);this.events.next(new on(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new po(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Be}))}))}cancelNavigationTransition(e,i,r){let o=new on(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=_e(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function BA(t){return t!==qa}var C0=new _("");var w0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(UA),providedIn:"root"})}return t})(),fd=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},UA=(()=>{class t extends fd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gd=(()=>{class t{urlSerializer=u(vo);options=u(_o,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(wi);urlHandlingStrategy=u(md);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Zt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Zt?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=XC(null,u(be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:()=>u(HA),providedIn:"root"})}return t})(),HA=(()=>{class t extends gd{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof yr?this.updateStateMemento():e instanceof ni?this.commitTransition(i):e instanceof Ka?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof fo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof on&&!KC(e)?this.restoreHistory(i):e instanceof _r?this.restoreHistory(i,!0):e instanceof Ln&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=y(y({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=y(y({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bm(t,n){t.events.pipe(he(e=>e instanceof Ln||e instanceof on||e instanceof _r||e instanceof ni),J(e=>e instanceof Ln||e instanceof ni?0:(e instanceof on?e.code===Dt.Redirect||e.code===Dt.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),at(1)).subscribe(()=>{n()})}var Co=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(bh);stateManager=u(gd);options=u(_o,{optional:!0})||{};pendingTasks=u(Yn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(_0);urlSerializer=u(vo);location=u(wi);urlHandlingStrategy=u(md);injector=u(be);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(w0);injectorCleanup=u(C0,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(as,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(pd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new fe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=_e(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof on&&i.code!==Dt.Redirect&&i.code!==Dt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ln)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof po){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||BA(r.source)},a);this.scheduleNavigation(s,qa,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}HR(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),qa,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=X(y({},o),{browserUrl:e})),r){let c=y({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get($t)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return _e(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(gm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let p=r?r.snapshot:this.routerState.snapshot.root;f=qC(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return ZC(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Ii(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,qa,null,i)}navigate(e,i={skipLocationChange:!1}){return zA(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(fi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},VC):i===!1?r=y({},em):r=y(y({},em),i),Ii(e))return MC(this.currentUrlTree,e,r);let o=this.parseUrl(e);return MC(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((f,p)=>{s=f,l=p});let d=this.pendingTasks.add();return bm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zA(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new T(4008,!1)}var GA=(()=>{class t{router=u(Co);stateManager=u(gd);fragment=U("");queryParams=U({});path=U("");serializer=u(vo);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ln&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Zt(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vd=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Na("href"),{optional:!0});reactiveHref=xh(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return _e(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return _e(this._target)}_target=U(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return _e(this._queryParams)}_queryParams=U(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return _e(this._fragment)}_fragment=U(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return _e(this._queryParamsHandling)}_queryParamsHandling=U(void 0);set state(e){this._state.set(e)}get state(){return _e(this._state)}_state=U(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return _e(this._info)}_info=U(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return _e(this._relativeTo)}_relativeTo=U(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return _e(this._preserveFragment)}_preserveFragment=U(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return _e(this._skipLocationChange)}_skipLocationChange=U(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return _e(this._replaceUrl)}_replaceUrl=U(!1);isAnchorElement;onChanges=new I;applicationErrorHandler=u($t);options=u(_o,{optional:!0});reactiveRouterState=u(GA);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=U(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ii(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=mt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Ii(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return _e(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(F(Co),F(Qt),Ca("tabindex"),F(Ae),F(V),F(oo))};static \u0275dir=L({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&pe("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&ye("href",r.reactiveHref(),Kp)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",de],skipLocationChange:[2,"skipLocationChange","skipLocationChange",de],replaceUrl:[2,"replaceUrl","replaceUrl",de],routerLink:"routerLink"},features:[Re]})}return t})();var qA=new _("");function ym(t,...n){return Xi([{provide:as,multi:!0,useValue:t},[],{provide:Qt,useFactory:ZA},{provide:Ec,multi:!0,useFactory:YA},n.map(e=>e.\u0275providers)])}function ZA(){return u(Co).routerState.root}function YA(){let t=u(se);return n=>{let e=t.get(nn);if(n!==e.components[0])return;let i=t.get(Co),r=t.get(QA);t.get(KA)===1&&i.initialNavigation(),t.get(XA,null,{optional:!0})?.setUpPreloading(),t.get(qA,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var QA=new _("",{factory:()=>new I}),KA=new _("",{factory:()=>1});var XA=new _("");var wo=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=U(!0);isLoading=this.loading.asReadonly();error=U("");errorMessage=this.error.asReadonly();teams=U([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(H(gr))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var tk=new _("cdk-dir-doc",{providedIn:"root",factory:()=>u(ee)}),nk=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function D0(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?nk.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Lt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=U("ltr");change=new B;constructor(){let e=u(tk,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(D0(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({})}return t})();var ik=["*"];var rk=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ok=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],ak=new _("MAT_CARD_CONFIG"),E0=(()=>{class t{appearance;constructor(){let e=u(ak,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&z("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ik,decls:1,vars:0,template:function(i,r){i&1&&(Te(),K(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),x0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var I0=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),M0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ok,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Te(rk),K(0),oe(1,"div",0),K(2,1),ce(),K(3,2))},encapsulation:2,changeDetection:0})}return t})();function ss(t){return t.buttons===0||t.detail===0}function ls(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var _m;function S0(){if(_m==null){let t=typeof document<"u"?document.head:null;_m=!!(t&&(t.createShadowRoot||t.attachShadow))}return _m}function Cm(t){if(S0()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function wm(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Et(t){return t.composedPath?t.composedPath()[0]:t.target}var Dm;try{Dm=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Dm=!1}var me=(()=>{class t{_platformId=u(ur);isBrowser=this._platformId?lC(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Dm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cs;function T0(){if(cs==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>cs=!0}))}finally{cs=cs||!1}return cs}function Do(t){return T0()?t:!!t.capture}function Mi(t,n=0){return R0(t)?Number(t):arguments.length===2?n:0}function R0(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Nt(t){return t instanceof V?t.nativeElement:t}var A0=new _("cdk-input-modality-detector-options"),k0={ignoreKeys:[18,17,224,91,16]},N0=650,Em={passive:!0,capture:!0},O0=(()=>{class t{_platform=u(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ze(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Et(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<N0||(this._modality.next(ss(e)?"keyboard":"mouse"),this._mostRecentTarget=Et(e))};_onTouchstart=e=>{if(ls(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Et(e)};constructor(){let e=u(O),i=u(ee),r=u(A0,{optional:!0});if(this._options=y(y({},k0),r),this.modalityDetected=this._modality.pipe($i(1)),this.modalityChanged=this.modalityDetected.pipe(ll()),this._platform.isBrowser){let o=u(Qe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Em),o.listen(i,"mousedown",this._onMousedown,Em),o.listen(i,"touchstart",this._onTouchstart,Em)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ds=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ds||{}),P0=new _("cdk-focus-monitor-default-options"),bd=Do({passive:!0,capture:!0}),wr=(()=>{class t{_ngZone=u(O);_platform=u(me);_inputModalityDetector=u(O0);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ee);_stopInputModalityDetector=new I;constructor(){let e=u(P0,{optional:!0});this._detectionMode=e?.detectionMode||ds.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Et(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Nt(e);if(!this._platform.isBrowser||r.nodeType!==1)return Y();let o=Cm(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Nt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Nt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ds.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===ds.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?N0:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Et(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,bd),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,bd)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Se(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,bd),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,bd),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xm=(()=>{class t{_elementRef=u(V);_focusMonitor=u(wr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new B;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var yd=new WeakMap,xt=(()=>{class t{_appRef;_injector=u(se);_environmentInjector=u(be);load(e){let i=this._appRef=this._appRef||this._injector.get(nn),r=yd.get(i);r||(r={loaders:new Set,refs:[]},yd.set(i,r),i.onDestroy(()=>{yd.get(i)?.refs.forEach(o=>o.destroy()),yd.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Pc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _d=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})();function ii(t){return Array.isArray(t)?t:[t]}var F0=new Set,Dr,Cd=(()=>{class t{_platform=u(me);_nonce=u(fr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):lk}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&sk(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sk(t,n){if(!F0.has(t))try{Dr||(Dr=document.createElement("style"),n&&Dr.setAttribute("nonce",n),Dr.setAttribute("type","text/css"),document.head.appendChild(Dr)),Dr.sheet&&(Dr.sheet.insertRule(`@media ${t} {body{ }}`,0),F0.add(t))}catch(e){console.error(e)}}function lk(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var us=(()=>{class t{_mediaMatcher=u(Cd);_zone=u(O);_queries=new Map;_destroySubject=new I;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return L0(ii(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=L0(ii(e)).map(a=>this._registerQuery(a).observable),o=zo(r);return o=Mn(o.pipe(at(1)),o.pipe($i(1),cn(0))),o.pipe(J(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new W(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(dt(i),J(({matches:a})=>({query:e,matches:a})),Se(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function L0(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function ck(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var V0=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dk=(()=>{class t{_mutationObserverFactory=u(V0);_observedElements=new Map;_ngZone=u(O);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Nt(e);return new W(r=>{let a=this._observeElement(i).pipe(J(s=>s.filter(l=>!ck(l))),he(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new I,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),j0=(()=>{class t{_contentObserver=u(dk);_elementRef=u(V);event=new B;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Mi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(cn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",de],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),B0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({providers:[V0]})}return t})();var Dd=(()=>{class t{_platform=u(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return fk(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=uk(_k(e));if(i&&(U0(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=U0(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!bk(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return yk(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uk(t){try{return t.frameElement}catch{return null}}function fk(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function pk(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function hk(t){return gk(t)&&t.type=="hidden"}function mk(t){return vk(t)&&t.hasAttribute("href")}function gk(t){return t.nodeName.toLowerCase()=="input"}function vk(t){return t.nodeName.toLowerCase()=="a"}function H0(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function U0(t){if(!H0(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function bk(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function yk(t){return hk(t)?!1:pk(t)||mk(t)||t.hasAttribute("contenteditable")||H0(t)}function _k(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var wd=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?et(n,{injector:this._injector}):setTimeout(n)}},Im=(()=>{class t{_checker=u(Dd);_ngZone=u(O);_document=u(ee);_injector=u(se);constructor(){u(xt).load(_d)}create(e,i=!1){return new wd(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ck=200,Ed=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:Ck;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(vt(e=>this._pressedLetters.push(e)),cn(n),he(()=>this._pressedLetters.length>0),J(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function an(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Eo=class{_items;_activeItemIndex=U(-1);_activeItem=U(null);_wrap=!1;_typeaheadSubscription=fe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof vn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Qn(n)&&(this._effectRef=hn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ed(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||an(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Qn(this._items)?this._items():this._items instanceof vn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var fs=class extends Eo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var ps=class extends Eo{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Sm={},It=class t{_appId=u(to);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Sm.hasOwnProperty(n)||(Sm[n]=0),`${n}${e?t._infix+"-":""}${Sm[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var W0=" ";function Tm(t,n,e){let i=G0(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(W0)))}function xd(t,n,e){let i=G0(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(W0)):t.removeAttribute(n)}function G0(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Dn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Dn||{}),Id,Er;function Md(){if(Er==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Er=!1,Er;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Er=!0;else{let t=Element.prototype.scrollTo;t?Er=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Er=!1}}return Er}function xo(){if(typeof document!="object"||!document)return Dn.NORMAL;if(Id==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Id=Dn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Id=t.scrollLeft===0?Dn.NEGATED:Dn.INVERTED),t.remove()}return Id}function Rm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Io,q0=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Am(){if(Io)return Io;if(typeof document!="object"||!document)return Io=new Set(q0),Io;let t=document.createElement("input");return Io=new Set(q0.filter(n=>(t.setAttribute("type",n),t.type===n))),Io}var Z0={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var wk=new _("MATERIAL_ANIMATIONS"),Y0=null;function Dk(){return u(wk,{optional:!0})?.animationsDisabled||u(wa,{optional:!0})==="NoopAnimations"?"di-disabled":(Y0??=u(Cd).matchMedia("(prefers-reduced-motion)").matches,Y0?"reduced-motion":"enabled")}function it(){return Dk()!=="enabled"}function qe(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Mt(t){return t!=null&&`${t}`!="false"}var sn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(sn||{}),km=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=sn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Q0=Do({passive:!0,capture:!0}),Nm=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Q0)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Q0)))}_delegateEventHandler=n=>{let e=Et(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},hs={enterDuration:225,exitDuration:150},Ek=800,K0=Do({passive:!0,capture:!0}),X0=["mousedown","touchstart"],J0=["mouseup","mouseleave","touchend","touchcancel"],xk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),ms=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Nm;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Nt(i)),o&&o.get(xt).load(xk)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},hs),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||Ik(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),p=f.transitionProperty,h=f.transitionDuration,v=p==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,x=new km(this,d,i,v);d.style.transform="scale3d(1, 1, 1)",x.state=sn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=x);let R=null;return!v&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let P=()=>{R&&(R.fallbackTimer=null),clearTimeout(rt),this._finishRippleTransition(x)},ve=()=>this._destroyRipple(x),rt=setTimeout(ve,c+100);d.addEventListener("transitionend",P),d.addEventListener("transitioncancel",ve),R={onTransitionEnd:P,onTransitionCancel:ve,fallbackTimer:rt}}),this._activeRipples.set(x,R),(v||!c)&&this._finishRippleTransition(x),x}fadeOutRipple(n){if(n.state===sn.FADING_OUT||n.state===sn.HIDDEN)return;let e=n.element,i=y(y({},hs),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=sn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Nt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,X0.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{J0.forEach(e=>{this._triggerElement.addEventListener(e,this,K0)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===sn.FADING_IN?this._startFadeOutTransition(n):n.state===sn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=sn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=sn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ss(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ek;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ls(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===sn.VISIBLE||n.config.terminateOnPointerUp&&n.state===sn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(X0.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(J0.forEach(e=>n.removeEventListener(e,this,K0)),this._pointerUpEventsRegistered=!1))}};function Ik(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Sd=new _("mat-ripple-global-options"),gs=(()=>{class t{_elementRef=u(V);_animationsDisabled=it();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(O),i=u(me),r=u(Sd,{optional:!0}),o=u(se);this._globalOptions=r||{},this._rippleRenderer=new ms(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Mk={capture:!0},Sk=["focus","mousedown","mouseenter","touchstart"],Om="mat-ripple-loader-uninitialized",Pm="mat-ripple-loader-class-name",ew="mat-ripple-loader-centered",Td="mat-ripple-loader-disabled",tw=(()=>{class t{_document=u(ee);_animationsDisabled=it();_globalRippleOptions=u(Sd,{optional:!0});_platform=u(me);_ngZone=u(O);_injector=u(se);_eventCleanups;_hosts=new Map;constructor(){let e=u(Qe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Sk.map(i=>e.listen(this._document,i,this._onInteraction,Mk)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Om,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Pm))&&e.setAttribute(Pm,i.className||""),i.centered&&e.setAttribute(ew,""),i.disabled&&e.setAttribute(Td,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Td,""):e.removeAttribute(Td)}_onInteraction=e=>{let i=Et(e);if(i instanceof HTMLElement){let r=i.closest(`[${Om}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Pm)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??hs.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??hs.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Td),rippleConfig:{centered:e.hasAttribute(ew),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ms(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(Om)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var Tk=["mat-icon-button",""],Rk=["*"],Ak=new _("MAT_BUTTON_CONFIG");function nw(t){return t==null?void 0:ro(t)}var Rd=(()=>{class t{_elementRef=u(V);_ngZone=u(O);_animationsDisabled=it();_config=u(Ak,{optional:!0});_focusMonitor=u(wr);_cleanupClick;_renderer=u(Ae);_rippleLoader=u(tw);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(xt).load(Mo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ye("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Gt(r.color?"mat-"+r.color:""),z("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",de],disabled:[2,"disabled","disabled",de],ariaDisabled:[2,"aria-disabled","ariaDisabled",de],disabledInteractive:[2,"disabledInteractive","disabledInteractive",de],tabIndex:[2,"tabIndex","tabIndex",nw],_tabindex:[2,"tabindex","_tabindex",nw]}})}return t})(),Fm=(()=>{class t extends Rd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ee],attrs:Tk,ngContentSelectors:Rk,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(),Pe(0,"span",0),K(1),Pe(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var iw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[nt]})}return t})();var kk=["matButton",""],ow=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],aw=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],Nk=["mat-fab",""];var rw=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),sw=(()=>{class t extends Rd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Ok(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?rw.get(this._appearance):null,o=rw.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ee],attrs:kk,ngContentSelectors:aw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(ow),Pe(0,"span",0),K(1),oe(2,"span",1),K(3,1),ce(),K(4,2),Pe(5,"span",2)(6,"span",3)),i&2&&z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function Ok(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Pk=new _("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Lm}),Lm={color:"accent"},lw=(()=>{class t extends Rd{_options=u(Pk,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Lm,this.color=this._options.color||Lm.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&z("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",de]},exportAs:["matButton","matAnchor"],features:[Ee],attrs:Nk,ngContentSelectors:aw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(ow),Pe(0,"span",0),K(1),oe(2,"span",1),K(3,1),ce(),K(4,2),Pe(5,"span",2)(6,"span",3)),i&2&&z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Fk=t=>[t,"map"],Lk=t=>[t,"convoy"],Vk=t=>[t,"shop"],Ad=class t{team=He.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:14,consts:[["align","end"],["matButton",""],[1,"buttonContent",3,"routerLink"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[1,"buttonContent"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(b(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),w(3),g()(),b(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),A(7,"img",3),w(8," Map "),g()(),b(9,"button",4)(10,"span",5)(11,"div",6),w(12,"?"),g(),w(13," Convoy "),g()(),b(14,"button",4)(15,"span",5),A(16,"img",7),w(17," Shop "),g()()()()),e&2&&(m(3),Ie(" ",i.team().teamName," "),m(3),N("routerLink",ht(8,Fk,i.GetTeamNameWithoutSpaces())),m(3),N("disabled",Rc(!i.team().showConvoyLink))("routerLink",ht(10,Lk,i.GetTeamNameWithoutSpaces())),m(5),N("disabled",Rc(!i.team().showShopLink))("routerLink",ht(12,Vk,i.GetTeamNameWithoutSpaces())))},dependencies:[E0,M0,x0,I0,sw,vd],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var cw="(max-width: 900px)",Vn=class t{breakpointObserver=u(us);isSmallWidth=U(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([cw]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[cw])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var kd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(oe(0,"div",0)(1,"div",1),Pe(2,"div",2),oe(3,"div",3),w(4,"Loading..."),ce()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var jn=class t{DARK_MODE_CLASS="dark-mode";document=u(ee);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=U(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=mt(()=>this.themeMode()==="dark");constructor(){hn(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var Vm=t=>({width:t});function jk(t,n){t&1&&A(0,"loading-icon")}function Bk(t,n){if(t&1&&(b(0,"div",7)(1,"p",17),w(2),g()()),t&2){let e=E();m(2),Ie(" ",e.teamListService.errorMessage()," ")}}function Uk(t,n){if(t&1&&A(0,"team-listing",14),t&2){let e=n.$implicit;N("team",e)}}function Hk(t,n){t&1&&(b(0,"div",7)(1,"p",17),w(2," There are no teams available. "),g()())}function zk(t,n){if(t&1&&ke(0,Uk,1,1,"team-listing",14,wt,!1,Hk,3,0,"div",7),t&2){let e=E();Ne(e.teamListService.teamsList())}}var Nd=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(Vn),this.themeService=u(jn),this.teamListService=u(wo),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(F(Vn),F(jn),F(wo))};static \u0275cmp=D({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(A(0,"div",0)(1,"div",1),b(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),w(6),g(),b(7,"button",5),pe("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),w(8,"Toggle Theme"),g()(),b(9,"div",6),M(10,jk,1,0,"loading-icon")(11,Bk,3,1,"div",7)(12,zk,3,1),g()(),b(13,"div",3)(14,"div",8)(15,"h1",9),w(16,"Information"),g(),b(17,"p"),w(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),g(),b(19,"h2",9),w(20,"Resources"),g(),b(21,"ul")(22,"li")(23,"a",10),w(24,"Reddit Emblem Maps Documentation"),g()(),b(25,"li")(26,"a",11),w(27,"API Github Repository"),g()(),b(28,"li")(29,"a",12),w(30,"Webapp Github Repository"),g()()(),b(31,"h2",9),w(32,"Example"),g(),b(33,"p"),w(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),g(),b(35,"ul")(36,"li")(37,"a",13),w(38,"Team Example Google Spreadsheet"),g()()(),A(39,"team-listing",14),g(),b(40,"div",8)(41,"h2",9),w(42,"Credits"),g(),b(43,"ul")(44,"li")(45,"a",15),w(46,'Website background texture "Az Subtle" by Anli'),g()(),b(47,"li")(48,"a",16),w(49,`"Mac's Minecraft" pixel font`),g()()()()()()),e&2&&(m(3),N("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),m(),N("ngClass",i.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),m(2),Ie(" This will be the logo! Screen width is <= 900px: ",i.breakpointService.isScreenSmallWidth()," "),m(3),N("ngStyle",ht(9,Vm,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),m(),S(i.teamListService.isLoading()?10:i.teamListService.errorMessage().length>0?11:12),m(3),N("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),m(),N("ngStyle",ht(11,Vm,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),m(25),N("team",i.teamExample),m(),N("ngStyle",ht(13,Vm,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Ad,Fa,La,kd],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var $k=20,So=(()=>{class t{_ngZone=u(O);_platform=u(me);_renderer=u(Qe).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=$k){return this._platform.isBrowser?new W(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(sl(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Nt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Si=(()=>{class t{elementRef=u(V);scrollDispatcher=u(So);ngZone=u(O);dir=u(Lt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new I;_renderer=u(Ae);_cleanupScroll;_elementScrolled=new I;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&xo()!=Dn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),xo()==Dn.INVERTED?e.left=e.right:xo()==Dn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Md()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&xo()==Dn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&xo()==Dn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),Wk=20,En=(()=>{class t{_platform=u(me);_listeners;_viewportSize=null;_change=new I;_document=u(ee);constructor(){let e=u(O),i=u(Qe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=Wk){return e>0?this._change.pipe(sl(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({})}return t})(),jm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[nt,vs,nt,vs]})}return t})();var Ld=["*"],Gk=["content"],qk=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Zk=["mat-drawer","mat-drawer-content","*"];function Yk(t,n){if(t&1){let e=Kn();b(0,"div",1),pe("click",function(){Ht(e);let r=E();return zt(r._onBackdropClicked())}),g()}if(t&2){let e=E();z("mat-drawer-shown",e._isShowingBackdrop())}}function Qk(t,n){t&1&&(b(0,"mat-drawer-content"),K(1,2),g())}var Kk=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Xk=["mat-sidenav","mat-sidenav-content","*"];function Jk(t,n){if(t&1){let e=Kn();b(0,"div",1),pe("click",function(){Ht(e);let r=E();return zt(r._onBackdropClicked())}),g()}if(t&2){let e=E();z("mat-drawer-shown",e._isShowingBackdrop())}}function eN(t,n){t&1&&(b(0,"mat-sidenav-content"),K(1,2),g())}var tN=`.mat-drawer-container {
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
`;var nN=new _("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Hm=new _("MAT_DRAWER_CONTAINER"),Od=(()=>{class t extends Si{_platform=u(me);_changeDetectorRef=u(Ge);_container=u(Um);constructor(){let e=u(V),i=u(So),r=u(O);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Xn("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),z("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Oe([{provide:Si,useExisting:t}]),Ee],ngContentSelectors:Ld,decls:1,vars:0,template:function(i,r){i&1&&(Te(),K(0))},encapsulation:2,changeDetection:0})}return t})(),Bm=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(Im);_focusMonitor=u(wr);_platform=u(me);_ngZone=u(O);_renderer=u(Ae);_interactivityChecker=u(Dd);_doc=u(ee);_container=u(Hm,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Mt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Mt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Mt(e))}_opened=U(!1);_openedVia=null;_animationStarted=new I;_animationEnd=new I;openedChange=new B(!0);_openedStream=this.openedChange.pipe(he(e=>e),J(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),Lr(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),J(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),Lr(void 0));_destroyed=new I;onPositionChanged=new B;_content;_modeChanged=new I;_injector=u(se);_changeDetectorRef=u(Ge);constructor(){this.openedChange.pipe(Se(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!an(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":et(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(at(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ke(Gk,5),i&2){let o;q(o=Z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(ye("align",null)("tabIndex",r.mode!=="side"?"-1":null),Xn("visibility",!r._container&&!r.opened?"hidden":null),z("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ld,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Te(),b(0,"div",1,0),K(2),g())},dependencies:[Si],encapsulation:2,changeDetection:0})}return t})(),Um=(()=>{class t{_dir=u(Lt,{optional:!0});_element=u(V);_ngZone=u(O);_changeDetectorRef=u(Ge);_animationDisabled=it();_transitionsEnabled=!1;_allDrawers;_drawers=new vn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Mt(e)}_autosize=u(nN);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Mt(e)}_backdropOverride=null;backdropClick=new B;_start=null;_end=null;_left=null;_right=null;_destroyed=new I;_doCheckSubject=new I;_contentMargins={left:null,right:null};_contentMarginChanges=new I;get scrollable(){return this._userContent||this._content}_injector=u(se);constructor(){let e=u(me),i=u(En);this._dir?.change.pipe(Se(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Se(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(dt(this._allDrawers),Se(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(dt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(cn(10),Se(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Se(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Se(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Se(this._drawers.changes)).subscribe(()=>{et({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Se(jt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Od,5)(o,Bm,5),i&2){let a;q(a=Z())&&(r._content=a.first),q(a=Z())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ke(Od,5),i&2){let o;q(o=Z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Oe([{provide:Hm,useExisting:t}])],ngContentSelectors:Zk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Te(qk),M(0,Yk,1,2,"div",0),K(1),K(2,1),M(3,Qk,2,0,"mat-drawer-content")),i&2&&(S(r.hasBackdrop?0:-1),m(3),S(r._content?-1:3))},dependencies:[Od],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Pd=(()=>{class t extends Od{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Oe([{provide:Si,useExisting:t}]),Ee],ngContentSelectors:Ld,decls:1,vars:0,template:function(i,r){i&1&&(Te(),K(0))},encapsulation:2,changeDetection:0})}return t})(),zm=(()=>{class t extends Bm{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Mt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Mi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Mi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(ye("tabIndex",r.mode!=="side"?"-1":null)("align",null),Xn("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),z("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Oe([{provide:Bm,useExisting:t}]),Ee],ngContentSelectors:Ld,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Te(),b(0,"div",1,0),K(2),g())},dependencies:[Si],encapsulation:2,changeDetection:0})}return t})(),fw=(()=>{class t extends Um{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Pd,5)(o,zm,5),i&2){let a;q(a=Z())&&(r._content=a.first),q(a=Z())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Oe([{provide:Hm,useExisting:t},{provide:Um,useExisting:t}]),Ee],ngContentSelectors:Xk,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Te(Kk),M(0,Jk,1,2,"div",0),K(1),K(2,1),M(3,eN,2,0,"mat-sidenav-content")),i&2&&(S(r.hasBackdrop?0:-1),m(3),S(r._content?-1:3))},dependencies:[Pd],styles:[tN],encapsulation:2,changeDetection:0})}return t})();var bs=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},$m=class extends bs{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ri=class extends bs{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Wm=class extends bs{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},Vd=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof $m)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ri)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Wm)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},jd=class extends Vd{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Pn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||se.NULL,o=r.get(be,i.injector);e=Pc(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},pw=(()=>{class t extends ri{constructor(){let e=u(_t),i=u(ft);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Ee]})}return t})(),Gm=(()=>{class t extends Vd{_moduleRef=u(Pn,{optional:!0});_document=u(ee);_viewContainerRef=u(ft);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new B;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ee]})}return t})(),hw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({})}return t})();var qm=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new W(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(he(e=>e.some(i=>i.target===n)),ul({bufferSize:1,refCount:!0}),Se(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Bd=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new qm(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jm=["*"];function iN(t,n){t&1&&K(0)}var rN=["tabListContainer"],oN=["tabList"],aN=["tabListInner"],sN=["nextPaginator"],lN=["previousPaginator"],cN=["content"];function dN(t,n){}var uN=["tabBodyWrapper"],fN=["tabHeader"];function pN(t,n){}function hN(t,n){if(t&1&&kt(0,pN,0,0,"ng-template",12),t&2){let e=E().$implicit;N("cdkPortalOutlet",e.templateLabel)}}function mN(t,n){if(t&1&&w(0),t&2){let e=E().$implicit;xe(e.textLabel)}}function gN(t,n){if(t&1){let e=Kn();b(0,"div",7,2),pe("click",function(){let r=Ht(e),o=r.$implicit,a=r.$index,s=E(),l=Cn(1);return zt(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=Ht(e).$index,a=E();return zt(a._tabFocusChanged(r,o))}),A(2,"span",8)(3,"div",9),b(4,"span",10)(5,"span",11),M(6,hN,1,1,null,12)(7,mN,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=Cn(1),o=E();Gt(e.labelClass),z("mdc-tab--active",o.selectedIndex===i),N("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),ye("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),N("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),m(3),S(e.templateLabel?6:7)}}function vN(t,n){t&1&&K(0)}function bN(t,n){if(t&1){let e=Kn();b(0,"mat-tab-body",13),pe("_onCentered",function(){Ht(e);let r=E();return zt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Ht(e);let o=E();return zt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Ht(e);let o=E();return zt(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=E();Gt(e.bodyClass),N("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),ye("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var yN=new _("MatTabContent"),_N=(()=>{class t{template=u(_t);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matTabContent",""]],features:[Oe([{provide:yN,useExisting:t}])]})}return t})(),CN=new _("MatTabLabel"),bw=new _("MAT_TAB"),eg=(()=>{class t extends pw{_closestTab=u(bw,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Oe([{provide:CN,useExisting:t}]),Ee]})}return t})(),yw=new _("MAT_TAB_GROUP"),tg=(()=>{class t{_viewContainerRef=u(ft);_closestTabGroup=u(yw,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new I;position=null;origin=null;isActive=!1;constructor(){u(xt).load(Mo)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ri(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,eg,5)(o,_N,7,_t),i&2){let a;q(a=Z())&&(r.templateLabel=a.first),q(a=Z())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ke(_t,7),i&2){let o;q(o=Z())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&ye("id",null)},inputs:{disabled:[2,"disabled","disabled",de],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Oe([{provide:bw,useExisting:t}]),Re],ngContentSelectors:Jm,decls:1,vars:0,template:function(i,r){i&1&&(Te(),io(0,iN,1,0,"ng-template"))},encapsulation:2})}return t})(),Zm="mdc-tab-indicator--active",mw="mdc-tab-indicator--no-transition",Ym=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},wN=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Zm);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(mw),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(mw),i.classList.add(Zm),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Zm)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",de]}})}return t})();var _w=(()=>{class t extends wN{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(ye("aria-disabled",!!r.disabled),z("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",de]},features:[Ee]})}return t})(),gw={passive:!0},DN=650,EN=100,xN=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ge);_viewportRuler=u(En);_dir=u(Lt,{optional:!0});_ngZone=u(O);_platform=u(me);_sharedResizeObserver=u(Bd);_injector=u(se);_renderer=u(Ae);_animationsDisabled=it();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new I;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new I;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new B;indexFocused=new B;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),gw),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),gw))}ngAfterContentInit(){let e=this._dir?this._dir.change:Y("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(cn(32),Se(this._destroyed)),r=this._viewportRuler.change(150).pipe(Se(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ps(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),et(o,{injector:this._injector}),jt(e,r,i,this._items.changes,this._itemsResized()).pipe(Se(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?Be:this._items.changes.pipe(dt(this._items),Ye(e=>new W(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),$i(1),he(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!an(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,d=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>d&&(this.scrollDistance+=Math.min(l-d,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),zi(DN,EN).pipe(Se(jt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",de],selectedIndex:[2,"selectedIndex","selectedIndex",ro]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),IN=(()=>{class t extends xN{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ym(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,_w,4),i&2){let a;q(a=Z())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ke(rN,7)(oN,7)(aN,7)(sN,5)(lN,5),i&2){let o;q(o=Z())&&(r._tabListContainer=o.first),q(o=Z())&&(r._tabList=o.first),q(o=Z())&&(r._tabListInner=o.first),q(o=Z())&&(r._nextPaginator=o.first),q(o=Z())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&z("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",de]},features:[Ee],ngContentSelectors:Jm,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Te(),b(0,"div",5,0),pe("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),A(2,"div",6),g(),b(3,"div",7,1),pe("keydown",function(a){return r._handleKeydown(a)}),b(5,"div",8,2),pe("cdkObserveContent",function(){return r._onContentChanges()}),b(7,"div",9,3),K(9),g()()(),b(10,"div",10,4),pe("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),A(12,"div",6),g()),i&2&&(z("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),N("matRippleDisabled",r._disableScrollBefore||r.disableRipple),m(3),z("_mat-animation-noopable",r._animationsDisabled),m(2),ye("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),m(5),z("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),N("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[gs,j0],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),MN=new _("MAT_TABS_CONFIG"),vw=(()=>{class t extends Gm{_host=u(Qm);_ngZone=u(O);_centeringSub=fe.EMPTY;_leavingSub=fe.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(dt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matTabBodyHost",""]],features:[Ee]})}return t})(),Qm=(()=>{class t{_elementRef=u(V);_dir=u(Lt,{optional:!0});_ngZone=u(O);_injector=u(se);_renderer=u(Ae);_diAnimationsDisabled=it();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=fe.EMPTY;_position;_previousPosition;_onCentering=new B;_beforeCentering=new B;_afterLeavingCenter=new B;_onCentered=new B(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Ge);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),et(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),et(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ke(vw,5)(cN,5),i&2){let o;q(o=Z())&&(r._portalHost=o.first),q(o=Z())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&ye("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(b(0,"div",1,0),kt(2,dN,0,0,"ng-template",2),g()),i&2&&z("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[vw,Si],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Cw=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ge);_ngZone=u(O);_tabsSubscription=fe.EMPTY;_tabLabelSubscription=fe.EMPTY;_tabBodySubscription=fe.EMPTY;_diAnimationsDisabled=it();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new vn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new B;focusChange=new B;animationDone=new B;selectedTabChange=new B(!0);_groupId;_isServer=!u(me).isBrowser;constructor(){let e=u(MN,{optional:!0});this._groupId=u(It).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(dt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new Km;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=jt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,tg,5),i&2){let a;q(a=Z())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ke(uN,5)(fN,5)(Qm,5),i&2){let o;q(o=Z())&&(r._tabBodyWrapper=o.first),q(o=Z())&&(r._tabHeader=o.first),q(o=Z())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(ye("mat-align-tabs",r.alignTabs),Gt("mat-"+(r.color||"primary")),Xn("--mat-tab-animation-duration",r.animationDuration),z("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",de],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",de],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",de],selectedIndex:[2,"selectedIndex","selectedIndex",ro],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ro],disablePagination:[2,"disablePagination","disablePagination",de],disableRipple:[2,"disableRipple","disableRipple",de],preserveContent:[2,"preserveContent","preserveContent",de],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Oe([{provide:yw,useExisting:t}])],ngContentSelectors:Jm,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Te(),b(0,"mat-tab-header",3,0),pe("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),ke(2,gN,8,17,"div",4,Ic),g(),M(4,vN,1,0),b(5,"div",5,1),ke(7,bN,1,10,"mat-tab-body",6,Ic),g()),i&2&&(N("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),xc("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),m(2),Ne(r._tabs),m(2),S(r._isServer?4:-1),m(),z("_mat-animation-noopable",r._animationsDisabled()),m(2),Ne(r._tabs))},dependencies:[IN,_w,xm,gs,Gm,Qm],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Km=class{index;tab};var Ud=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-dice-roller-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(oe(0,"p"),w(1,"map-dice-roller-sidenav works!"),ce())},encapsulation:2})};var Hd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-links-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(oe(0,"p"),w(1,"map-links-sidenav works!"),ce())},encapsulation:2})};var Fe=class t{constructor(n){this.http=n;this.http=u(gr)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=U(!0);isLoading=this.loading.asReadonly();error=U("");errorMessage=this.error.asReadonly();map=U({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(H(gr))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};var Mw=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(F(Ae),F(V))};static \u0275dir=L({type:t})}return t})(),SN=(()=>{class t extends Mw{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,features:[Ee]})}return t})(),iu=new _("");var TN={provide:iu,useExisting:Kt(()=>ru),multi:!0};function RN(){let t=rn()?rn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var AN=new _(""),ru=(()=>{class t extends Mw{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!RN())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(F(Ae),F(V),F(AN,8))};static \u0275dir=L({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&pe("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Oe([TN]),Ee]})}return t})();function ig(t){return t==null||rg(t)===0}function rg(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var og=new _(""),ag=new _(""),kN=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,$d=class{static min(n){return NN(n)}static max(n){return ON(n)}static required(n){return PN(n)}static requiredTrue(n){return FN(n)}static email(n){return LN(n)}static minLength(n){return VN(n)}static maxLength(n){return jN(n)}static pattern(n){return BN(n)}static nullValidator(n){return Sw()}static compose(n){return Ow(n)}static composeAsync(n){return Pw(n)}};function NN(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function ON(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function PN(t){return ig(t.value)?{required:!0}:null}function FN(t){return t.value===!0?null:{required:!0}}function LN(t){return ig(t.value)||kN.test(t.value)?null:{email:!0}}function VN(t){return n=>{let e=n.value?.length??rg(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function jN(t){return n=>{let e=n.value?.length??rg(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function BN(t){if(!t)return Sw;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(ig(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Sw(t){return null}function Tw(t){return t!=null}function Rw(t){return _i(t)?Ve(t):t}function Aw(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function kw(t,n){return n.map(e=>e(t))}function UN(t){return!t.validate}function Nw(t){return t.map(n=>UN(n)?n:e=>n.validate(e))}function Ow(t){if(!t)return null;let n=t.filter(Tw);return n.length==0?null:function(e){return Aw(kw(e,n))}}function sg(t){return t!=null?Ow(Nw(t)):null}function Pw(t){if(!t)return null;let n=t.filter(Tw);return n.length==0?null:function(e){let i=kw(e,n).map(Rw);return Xu(i).pipe(J(Aw))}}function lg(t){return t!=null?Pw(Nw(t)):null}function ww(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Fw(t){return t._rawValidators}function Lw(t){return t._rawAsyncValidators}function ng(t){return t?Array.isArray(t)?t:[t]:[]}function Wd(t,n){return Array.isArray(t)?t.includes(n):t===n}function Dw(t,n){let e=ng(n);return ng(t).forEach(r=>{Wd(e,r)||e.push(r)}),e}function Ew(t,n){return ng(n).filter(e=>!Wd(t,e))}var Gd=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=sg(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=lg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},xr=class extends Gd{name;get formDirective(){return null}get path(){return null}},Ir=class extends Gd{_parent=null;name=null;valueAccessor=null},qd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Vw=(()=>{class t extends qd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(Ir,2))};static \u0275dir=L({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ee]})}return t})(),jw=(()=>{class t extends qd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(xr,10))};static \u0275dir=L({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ee]})}return t})();var _s="VALID",zd="INVALID",Ro="PENDING",Cs="DISABLED",Ti=class{},Zd=class extends Ti{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ds=class extends Ti{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Es=class extends Ti{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ao=class extends Ti{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Yd=class extends Ti{source;constructor(n){super(),this.source=n}},Qd=class extends Ti{source;constructor(n){super(),this.source=n}};function Bw(t){return(ou(t)?t.validators:t)||null}function HN(t){return Array.isArray(t)?sg(t):t||null}function Uw(t,n){return(ou(n)?n.asyncValidators:t)||null}function zN(t){return Array.isArray(t)?lg(t):t||null}function ou(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function $N(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new T(1e3,"");if(!i[e])throw new T(1001,"")}function WN(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new T(-1002,"")})}var Kd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return _e(this.statusReactive)}set status(n){_e(()=>this.statusReactive.set(n))}_status=mt(()=>this.statusReactive());statusReactive=U(void 0);get valid(){return this.status===_s}get invalid(){return this.status===zd}get pending(){return this.status===Ro}get disabled(){return this.status===Cs}get enabled(){return this.status!==Cs}errors;get pristine(){return _e(this.pristineReactive)}set pristine(n){_e(()=>this.pristineReactive.set(n))}_pristine=mt(()=>this.pristineReactive());pristineReactive=U(!0);get dirty(){return!this.pristine}get touched(){return _e(this.touchedReactive)}set touched(n){_e(()=>this.touchedReactive.set(n))}_touched=mt(()=>this.touchedReactive());touchedReactive=U(!1);get untouched(){return!this.touched}_events=new I;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Dw(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Dw(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ew(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ew(n,this._rawAsyncValidators))}hasValidator(n){return Wd(this._rawValidators,n)}hasAsyncValidator(n){return Wd(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(X(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Es(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Es(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(X(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ds(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ds(!0,i))}markAsPending(n={}){this.status=Ro;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ao(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(X(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Cs,this.errors=null,this._forEachChild(r=>{r.disable(X(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Zd(this.value,i)),this._events.next(new Ao(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=_s,this._forEachChild(i=>{i.enable(X(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(X(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_s||this.status===Ro)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Zd(this.value,e)),this._events.next(new Ao(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(X(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Cs:_s}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ro,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=Rw(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Ao(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new B,this.statusChanges=new B}_calculateStatus(){return this._allControlsDisabled()?Cs:this.errors?zd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ro)?Ro:this._anyControlsHaveStatus(zd)?zd:_s}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Ds(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Es(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ou(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=HN(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=zN(this._rawAsyncValidators)}},Xd=class extends Kd{constructor(n,e,i){super(Bw(e),Uw(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){WN(this,!0,n),Object.keys(n).forEach(i=>{$N(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,X(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Qd(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var xs=new _("",{factory:()=>au}),au="always";function Jd(t,n,e=au){cg(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),qN(t,n),YN(t,n),ZN(t,n),GN(t,n)}function eu(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),nu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function tu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function GN(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function cg(t,n){let e=Fw(t);n.validator!==null?t.setValidators(ww(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Lw(t);n.asyncValidator!==null?t.setAsyncValidators(ww(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();tu(n._rawValidators,r),tu(n._rawAsyncValidators,r)}function nu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=Fw(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=Lw(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return tu(n._rawValidators,i),tu(n._rawAsyncValidators,i),e}function qN(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Hw(t,n)})}function ZN(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Hw(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Hw(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function YN(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function zw(t,n){t==null,cg(t,n)}function QN(t,n){return nu(t,n)}function KN(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function XN(t){return Object.getPrototypeOf(t.constructor)===SN}function $w(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function JN(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===ru?e=o:XN(o)?i=o:r=o}),r||i||e||null}function eO(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var tO={provide:xr,useExisting:Kt(()=>Is)},ws=Promise.resolve(),Is=(()=>{class t extends xr{callSetDisabledState;get submitted(){return _e(this.submittedReactive)}_submitted=mt(()=>this.submittedReactive());submittedReactive=U(!1);_directives=new Set;form;ngSubmit=new B;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Xd({},sg(e),lg(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ws.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Jd(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ws.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ws.then(()=>{let i=this._findContainer(e.path),r=new Xd({});zw(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ws.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){ws.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),$w(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Yd(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(F(og,10),F(ag,10),F(xs,8))};static \u0275dir=L({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&pe("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([tO]),Ee]})}return t})();function xw(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Iw(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var dg=class extends Kd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(Bw(e),Uw(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ou(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Iw(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Qd(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){xw(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){xw(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Iw(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var nO=t=>t instanceof dg;var Ww=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var iO=(()=>{class t extends xr{callSetDisabledState;get submitted(){return _e(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=mt(()=>this._submittedReactive());_submittedReactive=U(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(nu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Jd(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){eu(e.control||null,e,!1),eO(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,$w(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Yd(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(eu(i||null,e),nO(r)&&(Jd(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);zw(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&QN(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){cg(this.form,this),this._oldForm&&nu(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(F(og,10),F(ag,10),F(xs,8))};static \u0275dir=L({type:t,features:[Ee,Re]})}return t})();var Gw=new _(""),rO={provide:Ir,useExisting:Kt(()=>ug)},ug=(()=>{class t extends Ir{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new B;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=JN(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&eu(i,this,!1),Jd(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}KN(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&eu(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(F(og,10),F(ag,10),F(iu,10),F(Gw,8),F(xs,8))};static \u0275dir=L({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Oe([rO]),Ee,Re]})}return t})();var oO={provide:xr,useExisting:Kt(()=>fg)},fg=(()=>{class t extends iO{form=null;ngSubmit=new B;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&pe("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([oO]),Ee]})}return t})();var qw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({})}return t})();var Zw=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:xs,useValue:e.callSetDisabledState??au}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[qw]})}return t})(),Yw=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Gw,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:xs,useValue:e.callSetDisabledState??au}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[qw]})}return t})();var sO=["notch"],lO=["matFormFieldNotchedOutline",""],cO=["*"],Qw=["iconPrefixContainer"],Kw=["textPrefixContainer"],Xw=["iconSuffixContainer"],Jw=["textSuffixContainer"],dO=["textField"],uO=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],fO=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function pO(t,n){t&1&&A(0,"span",21)}function hO(t,n){if(t&1&&(b(0,"label",20),K(1,1),M(2,pO,1,0,"span",21),g()),t&2){let e=E(2);N("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ye("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),S(!e.hideRequiredMarker&&e._control.required?2:-1)}}function mO(t,n){if(t&1&&M(0,hO,3,5,"label",20),t&2){let e=E();S(e._hasFloatingLabel()?0:-1)}}function gO(t,n){t&1&&A(0,"div",7)}function vO(t,n){}function bO(t,n){if(t&1&&kt(0,vO,0,0,"ng-template",13),t&2){E(2);let e=Cn(1);N("ngTemplateOutlet",e)}}function yO(t,n){if(t&1&&(b(0,"div",9),M(1,bO,1,1,null,13),g()),t&2){let e=E();N("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),S(e._forceDisplayInfixLabel()?-1:1)}}function _O(t,n){t&1&&(b(0,"div",10,2),K(2,2),g())}function CO(t,n){t&1&&(b(0,"div",11,3),K(2,3),g())}function wO(t,n){}function DO(t,n){if(t&1&&kt(0,wO,0,0,"ng-template",13),t&2){E();let e=Cn(1);N("ngTemplateOutlet",e)}}function EO(t,n){t&1&&(b(0,"div",14,4),K(2,4),g())}function xO(t,n){t&1&&(b(0,"div",15,5),K(2,5),g())}function IO(t,n){t&1&&A(0,"div",16)}function MO(t,n){t&1&&(b(0,"div",18),K(1,6),g())}function SO(t,n){if(t&1&&(b(0,"mat-hint",22),w(1),g()),t&2){let e=E(2);N("id",e._hintLabelId),m(),xe(e.hintLabel)}}function TO(t,n){if(t&1&&(b(0,"div",19),M(1,SO,2,2,"mat-hint",22),K(2,7),A(3,"div",23),K(4,8),g()),t&2){let e=E();m(),S(e.hintLabel?1:-1)}}var pg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-label"]]})}return t})(),RO=new _("MatError");var hg=(()=>{class t{align="start";id=u(It).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(pt("id",r.id),ye("align",null),z("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),AO=new _("MatPrefix");var kO=new _("MatSuffix");var aD=new _("FloatingLabelParent"),eD=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Bd);_ngZone=u(O);_parent=u(aD);_resizeSubscription=new fe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return NO(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function NO(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var tD="mdc-line-ripple--active",su="mdc-line-ripple--deactivating",nD=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(O),i=u(Ae);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(su),e.add(tD)}deactivate(){this._elementRef.nativeElement.classList.add(su)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(su);e.propertyName==="opacity"&&r&&i.remove(tD,su)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),iD=(()=>{class t{_elementRef=u(V);_ngZone=u(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ke(sO,5),i&2){let o;q(o=Z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:lO,ngContentSelectors:cO,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Te(),Pe(0,"div",1),oe(1,"div",2,0),K(3),ce(),Pe(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),mg=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t})}return t})();var Ms=new _("MatFormField"),OO=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),rD="fill",PO="auto",oD="fixed",FO="translateY(-50%)",lu=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ge);_platform=u(me);_idGenerator=u(It);_ngZone=u(O);_defaults=u(OO,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Oa("iconPrefixContainer");_textPrefixContainerSignal=Oa("textPrefixContainer");_iconSuffixContainerSignal=Oa("iconSuffixContainer");_textSuffixContainerSignal=Oa("textSuffixContainer");_prefixSuffixContainers=mt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=K_(pg);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Mt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||PO}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||rD;this._appearanceSignal.set(i)}_appearanceSignal=U(rD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||oD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||oD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=it();constructor(){let e=this._defaults,i=u(Lt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),hn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=mt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(dt([void 0,void 0]),J(()=>[i.errorState,i.userAriaDescribedBy]),dl(),he(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Se(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),jt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){eC({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=mt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,v=`var(--mat-mdc-form-field-label-transform, ${FO} translateX(${h}))`,x=a+s+l+c;return[v,x]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Mc(o,r._labelChild,pg,5),Ft(o,mg,5)(o,AO,5)(o,kO,5)(o,RO,5)(o,hg,5)),i&2){Tc();let a;q(a=Z())&&(r._formFieldControl=a.first),q(a=Z())&&(r._prefixChildren=a),q(a=Z())&&(r._suffixChildren=a),q(a=Z())&&(r._errorChildren=a),q(a=Z())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Sc(r._iconPrefixContainerSignal,Qw,5)(r._textPrefixContainerSignal,Kw,5)(r._iconSuffixContainerSignal,Xw,5)(r._textSuffixContainerSignal,Jw,5),Ke(dO,5)(Qw,5)(Kw,5)(Xw,5)(Jw,5)(eD,5)(iD,5)(nD,5)),i&2){Tc(4);let o;q(o=Z())&&(r._textField=o.first),q(o=Z())&&(r._iconPrefixContainer=o.first),q(o=Z())&&(r._textPrefixContainer=o.first),q(o=Z())&&(r._iconSuffixContainer=o.first),q(o=Z())&&(r._textSuffixContainer=o.first),q(o=Z())&&(r._floatingLabel=o.first),q(o=Z())&&(r._notchedOutline=o.first),q(o=Z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&z("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Oe([{provide:Ms,useExisting:t},{provide:aD,useExisting:t}])],ngContentSelectors:fO,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Te(uO),kt(0,mO,1,1,"ng-template",null,0,Dh),b(2,"div",6,1),pe("click",function(a){return r._control.onContainerClick(a)}),M(4,gO,1,0,"div",7),b(5,"div",8),M(6,yO,2,2,"div",9),M(7,_O,3,0,"div",10),M(8,CO,3,0,"div",11),b(9,"div",12),M(10,DO,1,1,null,13),K(11),g(),M(12,EO,3,0,"div",14),M(13,xO,3,0,"div",15),g(),M(14,IO,1,0,"div",16),g(),b(15,"div",17),M(16,MO,2,0,"div",18)(17,TO,5,1,"div",19),g()),i&2){let o;m(2),z("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),m(2),S(!r._hasOutline()&&!r._control.disabled?4:-1),m(2),S(r._hasOutline()?6:-1),m(),S(r._hasIconPrefix?7:-1),m(),S(r._hasTextPrefix?8:-1),m(2),S(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),m(2),S(r._hasTextSuffix?12:-1),m(),S(r._hasIconSuffix?13:-1),m(),S(r._hasOutline()?-1:14),m(),z("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();m(),S((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[eD,iD,Oh,nD,hg],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ss=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[B0,lu,nt]})}return t})();var VO=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),jO={passive:!0},sD=(()=>{class t{_platform=u(me);_ngZone=u(O);_renderer=u(Qe).createRenderer(null,null);_styleLoader=u(xt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Be;this._styleLoader.load(VO);let i=Nt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new I,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,jO)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Nt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({})}return t})();var cD=new _("MAT_INPUT_VALUE_ACCESSOR");var dD=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cu=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var BO=["button","checkbox","file","hidden","image","radio","range","reset","submit"],UO=new _("MAT_INPUT_CONFIG"),uD=(()=>{class t{_elementRef=u(V);_platform=u(me);ngControl=u(Ir,{optional:!0,self:!0});_autofillMonitor=u(sD);_ngZone=u(O);_formField=u(Ms,{optional:!0});_renderer=u(Ae);_uid=u(It).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(UO,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new I;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Mt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator($d.required)??!1}set required(e){this._required=Mt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Am().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Mt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Am().has(e));constructor(){let e=u(Is,{optional:!0}),i=u(fg,{optional:!0}),r=u(dD),o=u(cD,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Qn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new cu(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&hn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){BO.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&pe("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(pt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ye("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),z("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",de]},exportAs:["matInput"],features:[Oe([{provide:mg,useExisting:t}]),Re]})}return t})(),fD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[Ss,Ss,lD,nt]})}return t})();var pD=(()=>{class t{_animationsDisabled=it();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&z("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var zO=["text"],$O=[[["mat-icon"]],"*"],WO=["mat-icon","*"];function GO(t,n){if(t&1&&A(0,"mat-pseudo-checkbox",1),t&2){let e=E();N("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function qO(t,n){if(t&1&&A(0,"mat-pseudo-checkbox",3),t&2){let e=E();N("disabled",e.disabled)}}function ZO(t,n){if(t&1&&(b(0,"span",4),w(1),g()),t&2){let e=E();m(),Ie("(",e.group.label,")")}}var gg=new _("MAT_OPTION_PARENT_COMPONENT"),vg=new _("MatOptgroup");var Ts=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},ko=(()=>{class t{_element=u(V);_changeDetectorRef=u(Ge);_parent=u(gg,{optional:!0});group=u(vg,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(It).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=U(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new B;_text;_stateChanges=new I;constructor(){let e=u(xt);e.load(Mo),e.load(_d),this._signalDisableRipple=!!this._parent&&Qn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!an(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ts(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ke(zO,7),i&2){let o;q(o=Z())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&pe("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(pt("id",r.id),ye("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),z("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",de]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:WO,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Te($O),M(0,GO,1,2,"mat-pseudo-checkbox",1),K(1),b(2,"span",2,0),K(4,1),g(),M(5,qO,1,1,"mat-pseudo-checkbox",3),M(6,ZO,2,1,"span",4),A(7,"div",5)),i&2&&(S(r.multiple?0:-1),m(5),S(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),m(),S(r.group&&r.group._inert?6:-1),m(),N("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[pD,gs],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function hD(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function mD(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var gD=Md();function DD(t){return new du(t.get(En),t.get(ee))}var du=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=qe(-this._previousScrollPosition.left),n.style.top=qe(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),gD&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),gD&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function ED(t,n){return new uu(t.get(So),t.get(O),t.get(En),n)}var uu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(he(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Rs=class{enable(){}disable(){}attach(){}};function bg(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function vD(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function vu(t,n){return new fu(t.get(So),t.get(En),t.get(O),n)}var fu=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();bg(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xD=(()=>{class t{_injector=u(se);constructor(){}noop=()=>new Rs;close=e=>ED(this._injector,e);block=()=>DD(this._injector);reposition=e=>vu(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),No=class{positionStrategy;scrollStrategy=new Rs;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var pu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var ID=(()=>{class t{_attachedOverlays=[];_document=u(ee);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),MD=(()=>{class t extends ID{_ngZone=u(O);_renderer=u(Qe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),SD=(()=>{class t extends ID{_platform=u(me);_ngZone=u(O);_renderer=u(Qe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Et(e)};_clickListener=e=>{let i=Et(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(bD(s.overlayElement,i)||bD(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Je(t)))(r||t)}})();static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bD(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var TD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),RD=(()=>{class t{_platform=u(me);_containerElement;_document=u(ee);_styleLoader=u(xt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Rm()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Rm()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(TD)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yg=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function _g(t){return t&&t.nodeType===1}var hu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=fe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,f,p){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=et(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=X(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=qe(this._config.width),n.height=qe(this._config.height),n.minWidth=qe(this._config.minWidth),n.minHeight=qe(this._config.minHeight),n.maxWidth=qe(this._config.maxWidth),n.maxHeight=qe(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;_g(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new yg(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=ii(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=et(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},yD="cdk-overlay-connected-position-bounding-box",YO=/([A-Za-z%]+)$/;function bu(t,n){return new mu(n,t.get(En),t.get(ee),t.get(me),t.get(RD))}var mu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=fe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(yD),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Mr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(yD),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:_g(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=CD(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,f=a+o.width-i.width,p=0-s,h=s+o.height-i.height,v=this._subtractOverflows(o.width,d,f),x=this._subtractOverflows(o.height,p,h),R=v*x;return{visibleArea:R,isCompletelyWithinViewport:o.width*o.height===R,fitsInViewportVertically:x===o.height,fitsInViewportHorizontally:v==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=_D(this._overlayRef.getConfig().minHeight),s=_D(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=CD(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!QO(this._lastScrollVisibility,i)){let r=new pu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),v=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>v&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-v/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,p;if(c)p=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),v=this._lastBoundingBoxSize.width;d=h*2,f=n.x-h,d>v&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-v/2)}return{top:a,left:f,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=qe(i.width),r.height=qe(i.height),r.top=qe(i.top)||"auto",r.bottom=qe(i.bottom)||"auto",r.left=qe(i.left)||"auto",r.right=qe(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=qe(o)),a&&(r.maxWidth=qe(a))}this._lastBoundingBoxSize=i,Mr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Mr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Mr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Mr(i,this._getExactOverlayY(e,n,d)),Mr(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=qe(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=qe(a.maxWidth):o&&(i.maxWidth="")),Mr(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=qe(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=qe(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:vD(n,i),isOriginOutsideView:bg(n,i),isOverlayClipped:vD(e,i),isOverlayOutsideView:bg(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ii(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Mr(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function _D(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(YO);return!e||e==="px"?parseFloat(n):null}return t||null}function CD(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function QO(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var wD="cdk-global-overlay-wrapper";function AD(t){return new gu}var gu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(wD),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,f=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",h="",v="",x="";l?x="flex-start":d==="center"?(x="center",p?v=f:h=f):p?d==="left"||d==="end"?(x="flex-end",h=f):(d==="right"||d==="start")&&(x="flex-start",v=f):d==="left"||d==="start"?(x="flex-start",h=f):(d==="right"||d==="end")&&(x="flex-end",v=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":v,e.justifyContent=x,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(wD),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},kD=(()=>{class t{_injector=u(se);constructor(){}global(){return AD()}flexibleConnectedTo(e){return bu(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ND=new _("OVERLAY_DEFAULT_CONFIG");function yu(t,n){t.get(xt).load(TD);let e=t.get(RD),i=t.get(ee),r=t.get(It),o=t.get(nn),a=t.get(Lt),s=t.get(Ae,null,{optional:!0})||t.get(Qe).createRenderer(null,null),l=new No(n),c=t.get(ND,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return _g(p)?p.after(f):p?.type==="parent"?p.element.appendChild(f):e.getContainerElement().appendChild(f),new hu(new jd(d,o,t),f,d,l,t.get(O),t.get(MD),i,t.get(wi),t.get(SD),n?.disableAnimations??t.get(wa,null,{optional:!0})==="NoopAnimations",t.get(be),s)}var OD=(()=>{class t{scrollStrategies=u(xD);_positionBuilder=u(kD);_injector=u(se);constructor(){}create(e){return yu(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({providers:[OD],imports:[nt,hw,jm,jm]})}return t})();var PD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[nt]})}return t})();var wg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[iw,PD,ko,nt]})}return t})();var KO=["panel"],XO=["*"];function JO(t,n){if(t&1&&(oe(0,"div",1,0),K(2),ce()),t&2){let e=n.id,i=E();Gt(i._classList),z("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),pt("id",i.id),ye("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var Dg=class{source;option;constructor(n,e){this.source=n,this.option=e}},FD=new _("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),LD=(()=>{class t{_changeDetectorRef=u(Ge);_elementRef=u(V);_defaults=u(FD);_animationsDisabled=it();_activeOptionChanges=fe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new B;opened=new B;closed=new B;optionActivated=new B;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(It).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(me);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new fs(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Dg(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,ko,5)(o,vg,5),i&2){let a;q(a=Z())&&(r.options=a),q(a=Z())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ke(_t,7)(KO,5),i&2){let o;q(o=Z())&&(r.template=o.first),q(o=Z())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",de],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",de],requireSelection:[2,"requireSelection","requireSelection",de],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",de],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",de]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Oe([{provide:gg,useExisting:t}])],ngContentSelectors:XO,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Te(),io(0,JO,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var eP={provide:iu,useExisting:Kt(()=>Eg),multi:!0};var tP=new _("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(se);return()=>vu(t)}}),Eg=(()=>{class t{_environmentInjector=u(be);_element=u(V);_injector=u(se);_viewContainerRef=u(ft);_zone=u(O);_changeDetectorRef=u(Ge);_dir=u(Lt,{optional:!0});_formField=u(Ms,{optional:!0,host:!0});_viewportRuler=u(En);_scrollStrategy=u(tP);_renderer=u(Ae);_animationsDisabled=it();_defaults=u(FD,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new I;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=fe.EMPTY;_breakpointObserver=u(us);_handsetLandscapeSubscription=fe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new I;_overlayPanelClass=ii(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&xd(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return jt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(he(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(he(()=>this._overlayAttached)):Y()).pipe(J(e=>e instanceof Ts?e:null))}optionSelections=Hi(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(dt(e),Ye(()=>jt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Ye(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new W(e=>{let i=o=>{let a=Et(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=an(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return wm()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new W(r=>{et(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(vt(()=>this._positionStrategy.reapplyLastPosition()),ef(0))??Y();return jt(e,i).pipe(Ye(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),at(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;Tm(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new ri(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=yu(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Z0.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!an(e)||e.keyCode===38&&an(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new No({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=bu(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=hD(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=mD(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&xd(this._trackedModal,"aria-owns",i),Tm(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;xd(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&pe("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&ye("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",de]},exportAs:["matAutocompleteTrigger"],features:[Oe([eP]),Re]})}return t})(),VD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[Cg,wg,vs,wg,nt]})}return t})();function iP(t,n){if(t&1&&(oe(0,"a",4),w(1),ce()),t&2){let e=E();pt("href",e.titleHref(),Pt),m(),xe(e.title())}}function rP(t,n){if(t&1&&w(0),t&2){let e=E();Ie(" ",e.title()," ")}}function oP(t,n){if(t&1&&(oe(0,"p"),w(1),ce()),t&2){let e=n.$implicit;m(),xe(e)}}var _u=class t{label=He.required();title=He.required();titleHref=He();textFields=He();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(oe(0,"div",0)(1,"h2",1),w(2),ce(),Pe(3,"div",2),oe(4,"h2",3),M(5,iP,2,2,"a",4)(6,rP,1,1),ce()(),ke(7,oP,2,1,"p",null,wt)),e&2&&(m(2),xe(i.label()),m(3),S(i.titleHref()?5:6),m(2),Ne(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function aP(t,n){t&1&&w(0," \xA0 ")}function sP(t,n){if(t&1&&(w(0),M(1,aP,1,0),w(2)),t&2){let e=E(3);Ie(" ",e.constants.currencySymbol," "),m(),S(e.constants.includeSpace?1:-1),m(),Ie(" ",e.amount()," ")}}function lP(t,n){t&1&&w(0," \xA0 ")}function cP(t,n){if(t&1&&(w(0),M(1,lP,1,0),w(2)),t&2){let e=E(3);Ie(" ",e.amount()," "),m(),S(e.constants.includeSpace?1:-1),m(),Ie(" ",e.constants.currencySymbol," ")}}function dP(t,n){if(t&1&&M(0,sP,3,3)(1,cP,3,3),t&2){let e=E(2);S(e.constants.isSymbolLeftAligned?0:1)}}function uP(t,n){if(t&1&&w(0),t&2){let e=E(2);Ie(" ",e.amount()," ")}}function fP(t,n){if(t&1&&M(0,dP,2,1)(1,uP,1,1),t&2){let e=E();S(e.constants?0:1)}}var Cu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Fe),this.constants=this.teamDataService.getCurrencyConstants()}amount=He.required();constants;static \u0275fac=function(e){return new(e||t)(F(Fe))};static \u0275cmp=D({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&M(0,fP,2,1),e&2&&S(i.amount()?0:-1)},encapsulation:2})};function pP(t,n){if(t&1&&Pe(0,"img",1),t&2){let e=E();pt("src",e.systemData==null?null:e.systemData.spriteURL,Pt)}}var wu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Fe)}tag=He.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(F(Fe))};static \u0275cmp=D({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Re],decls:4,vars:3,consts:[[1,"tagContainer",3,"title"],[3,"src"]],template:function(e,i){e&1&&(oe(0,"div",0),M(1,pP,1,1,"img",1),oe(2,"p"),w(3),ce()()),e&2&&(pt("title",i.tag()),m(),S(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),m(2),xe(i.tag()))},styles:["div.tagContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 16px;border-radius:0 8px;background:var(--mat-sys-primary-container)}div.tagContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down}div.tagContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}"]})};var hP=t=>({background:t}),Du=class t{percentage=He.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";above50Primary="#3CD66F";above50Secondary="#d3efdd";above25Primary="#FFC107";above25Secondary="#fff4d4";below25Primary="#F13535";below25Secondary="#efd1d1";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Re],decls:1,vars:3,consts:[[1,"hpBar",3,"ngStyle"]],template:function(e,i){e&1&&A(0,"div",0),e&2&&N("ngStyle",ht(1,hP,"linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)"))},dependencies:[La],styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px;border:1px solid black}"]})};var mP=t=>({shaded:t}),gP=(t,n)=>n.key;function vP(t,n){t&1&&A(0,"img",7)}function bP(t,n){t&1&&A(0,"img",8)}function yP(t,n){if(t&1&&M(0,vP,1,0,"img",7)(1,bP,1,0,"img",8),t&2){let e=E(2);S(e.values().finalValue<e.values().baseValue?0:1)}}function _P(t,n){t&1&&A(0,"img",9)}function CP(t,n){t&1&&A(0,"img",10)}function wP(t,n){if(t&1&&M(0,_P,1,0,"img",9)(1,CP,1,0,"img",10),t&2){let e=E(2);S(e.values().finalValue>e.values().baseValue?0:1)}}function DP(t,n){if(t&1&&M(0,yP,2,1)(1,wP,2,1),t&2){let e=E();S(e.values().invertModifiedDisplayColors?0:1)}}function EP(t,n){if(t&1&&(b(0,"div",14)(1,"p"),w(2),g(),b(3,"p"),w(4),g()()),t&2){let e=n.$implicit,i=n.$index;N("ngClass",ht(3,mP,i%2===0)),m(2),xe(e.key),m(2),xe(e.value)}}function xP(t,n){if(t&1&&(b(0,"div",6),A(1,"div",11),b(2,"div",12)(3,"div",13)(4,"p"),w(5,"Base"),g(),b(6,"p"),w(7),g()(),ke(8,EP,5,5,"div",14,gP),Jn(10,"keyvalue"),g()()),t&2){let e=E();m(7),xe(e.values().baseValue),m(),Ne(Ra(10,1,e.values().modifiers))}}var Eu=class t{name=He.required();values=He.required();expanded=He.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:10,vars:4,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],["id","value"],["id","modifiersContainer"],["src","img/arrow_down.png",1,"pos"],["src","img/arrow_up.png",1,"neg"],["src","img/arrow_up.png",1,"pos"],["src","img/arrow_down.png",1,"neg"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(b(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),w(4),g(),A(5,"div",4),g(),b(6,"div",5),M(7,DP,2,1),w(8),g()(),M(9,xP,11,3,"div",6),g()),e&2&&(m(4),xe(i.name()),m(3),S(i.values().finalValue!==i.values().baseValue?7:-1),m(),Ie(" ",i.values().finalValue," "),m(),S(i.expanded()?9:-1))},dependencies:[Fa,pr],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #value[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #value[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{margin-right:2px;filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #value[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{margin-right:2px;filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #value[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #value[_ngcontent-%COMP%]:has(.neg){color:#d81b62}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var IP=(t,n)=>n.key;function MP(t,n){if(t&1&&Pe(0,"img",4),t&2){let e=E();pt("src",e.systemData==null?null:e.systemData.spriteURL,Pt)}}function SP(t,n){if(t&1&&w(0),t&2){let e=E(2);Ta(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function TP(t,n){if(t&1&&w(0),t&2){let e=E(2);Ie(" (",e.status().remainingTurns," turns) ")}}function RP(t,n){if(t&1&&M(0,SP,1,2)(1,TP,1,1),t&2){let e=E();S(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function AP(t,n){t&1&&w(0,", ")}function kP(t,n){if(t&1&&(w(0),M(1,AP,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ta(" ",e.value," ",e.key),m(),S(i!==r-1?1:-1)}}function NP(t,n){t&1&&Pe(0,"img",6)}function OP(t,n){t&1&&Pe(0,"img",7)}function PP(t,n){t&1&&Pe(0,"img",8)}function FP(t,n){t&1&&Pe(0,"img",9)}function LP(t,n){if(t&1&&(oe(0,"p"),w(1),ce()),t&2){let e=n.$implicit;m(),xe(e)}}var xu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Fe)}status=He.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(F(Fe))};static \u0275cmp=D({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Re],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(oe(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),M(4,MP,1,1,"img",4),w(5),M(6,RP,2,1),ce(),oe(7,"p"),ke(8,kP,2,3,null,null,IP),Jn(10,"keyvalue"),ce()(),oe(11,"div",5),M(12,NP,1,0,"img",6),M(13,OP,1,0,"img",7)(14,PP,1,0,"img",8)(15,FP,1,0,"img",9),ce()(),ke(16,LP,2,1,"p",null,wt),ce()),e&2){let r;m(4),S(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),Ie(" ",i.status().name," "),m(),S((i.status().remainingTurns??0)>0?6:-1),m(2),Ne(Ra(10,5,i.status().additionalStats)),m(4),S(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),m(),S((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),m(3),Ne(i.systemData==null?null:i.systemData.textFields)}},dependencies:[pr],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var jD=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Mt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Mt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=D({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ye("aria-orientation",r.vertical?"vertical":"horizontal"),z("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})();var xg=t=>({rotate90:t}),BD=()=>[],Ig=(t,n)=>n.key;function VP(t,n){if(t&1&&(b(0,"div",0),A(1,"img",32),g()),t&2){let e=E();m(),N("src",e.unit().sprite.portraitURL,Pt)}}function jP(t,n){if(t&1&&w(0),t&2){let e=E();Ie(" Lvl. ",e.unit().stats.level," ")}}function BP(t,n){if(t&1&&w(0),t&2){let e,i=E();Ie(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function UP(t,n){if(t&1&&A(0,"img",6),t&2){let e,i=E();N("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,Pt)}}function HP(t,n){if(t&1&&(b(0,"div",10)(1,"div",33)(2,"div",34),w(3),g(),b(4,"div",35),A(5,"div",36)(6,"div",37),g()()()),t&2){let e=E();N("title",e.unit().player),m(3),xe(e.unit().player)}}function zP(t,n){if(t&1&&(b(0,"p",41),w(1),g()),t&2){let e=n.$implicit;m(),xe(e)}}function $P(t,n){if(t&1&&ke(0,zP,2,1,"p",41,wt),t&2){let e=E(2);Ne(e.unit().textFields)}}function WP(t,n){if(t&1&&A(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=E(3);N("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function GP(t,n){if(t&1&&ke(0,WP,1,3,"text-fields-with-labeled-header",42,wt),t&2){let e=E(2);Ne(e.unit().classes)}}function qP(t,n){if(t&1&&A(0,"text-fields-with-labeled-header",40),t&2){let e=E(2);N("titleHref",e.unit().characterApplicationURL)}}function ZP(t,n){if(t&1&&(b(0,"div",13),M(1,$P,2,0),A(2,"text-fields-with-labeled-header",38),M(3,GP,2,0),A(4,"text-fields-with-labeled-header",39),M(5,qP,1,1,"text-fields-with-labeled-header",40),g()),t&2){let e,i=E();m(),S(i.unit().textFields?1:-1),m(),N("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),m(),S(i.unit().classes?3:-1),m(),N("title",i.unit().movementType),m(),S(i.unit().characterApplicationURL?5:-1)}}function YP(t,n){if(t&1&&(b(0,"div",22)(1,"div",17),w(2,"Exp"),g(),b(3,"div"),w(4),g()()),t&2){let e=E();m(4),xe(e.unit().stats.experience)}}function QP(t,n){if(t&1&&(b(0,"div",22)(1,"div",17),w(2,"Money"),g(),A(3,"currency",43),g()),t&2){let e=E();m(3),N("amount",e.unit().stats.heldCurrency)}}function KP(t,n){if(t&1&&A(0,"unit-tag",47),t&2){let e=n.$implicit;N("tag",e)}}function XP(t,n){if(t&1&&(b(0,"div",23)(1,"div",44),A(2,"img",45),g(),b(3,"div",46),ke(4,KP,1,1,"unit-tag",47,wt),g()()),t&2){let e=E();m(4),Ne(e.unit().tags)}}function JP(t,n){if(t&1&&(b(0,"div",24)(1,"div",48),A(2,"img",49),g(),b(3,"div",34)(4,"p"),w(5),g()()()),t&2){let e=E();m(5),xe(e.unit().behavior)}}function eF(t,n){if(t&1&&A(0,"unit-status-condition",53),t&2){let e=n.$implicit;N("status",e)}}function tF(t,n){if(t&1&&(b(0,"div",25)(1,"div",50),A(2,"img",51),g(),b(3,"div",52),ke(4,eF,1,1,"unit-status-condition",53,wt),g()()),t&2){let e=E();m(4),Ne(e.unit().statusConditions)}}function nF(t,n){if(t&1&&A(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=E(2);N("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function iF(t,n){if(t&1&&(b(0,"div",29),ke(1,nF,1,3,"modified-unit-stat",54,Ig),Jn(3,"keyvalue"),g()),t&2){let e=E();m(),Ne(Aa(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function rF(t,n){if(t&1&&A(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=E(2);N("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function oF(t,n){if(t&1&&(b(0,"div",29),ke(1,rF,1,3,"modified-unit-stat",54,Ig),Jn(3,"keyvalue"),g()),t&2){let e=E();m(),Ne(Aa(3,0,e.unit().stats.system,e.sortModifiedUnitStat))}}function aF(t,n){if(t&1&&A(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=E(2);N("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function sF(t,n){if(t&1&&(b(0,"div",29),ke(1,aF,1,3,"modified-unit-stat",54,Ig),Jn(3,"keyvalue"),g()),t&2){let e=E();m(),Ne(Aa(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function lF(t,n){if(t&1&&(b(0,"h3"),w(1),g()),t&2){let e=E().$index,i=E(2);m(),xe(i.getInventorySubsectionLabel(e))}}function cF(t,n){if(t&1&&(b(0,"p"),w(1),g()),t&2){let e=n.$implicit;m(),xe(e.name)}}function dF(t,n){if(t&1&&(b(0,"p"),w(1),g()),t&2){let e=E().$implicit;m(),Ie("x",e.emptySlotCount," Empty Slots")}}function uF(t,n){if(t&1&&(M(0,lF,2,1,"h3"),ke(1,cF,2,1,"p",null,wt),M(3,dF,2,1,"p")),t&2){let e=n.$implicit,i=n.$index,r=E(2);S(r.getInventorySubsectionLabel(i).length>0?0:-1),m(),Ne(e.items),m(2),S(e.emptySlotCount>0?3:-1)}}function fF(t,n){if(t&1&&ke(0,uF,4,2,null,null,wt),t&2){let e,i=E();Ne((e=i.unit().inventory)==null?null:e.subsections)}}var Iu=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Fe)}unit=He.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}sortModifiedUnitStat(){return 0}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(F(Fe))};static \u0275cmp=D({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Re],decls:51,vars:37,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"]],template:function(e,i){if(e&1&&(M(0,VP,2,1,"div",0),b(1,"div",1),A(2,"img",2),b(3,"hgroup",3)(4,"h1",4),w(5),g(),b(6,"p",5),M(7,jP,1,1),M(8,BP,1,1),g()(),M(9,UP,1,1,"img",6),g(),b(10,"div",7)(11,"button",8),pe("click",function(){return i.toggleUnitInfoExpansion()}),A(12,"img",9),g(),M(13,HP,7,2,"div",10),b(14,"button",11),A(15,"img",12),g()(),M(16,ZP,6,6,"div",13),b(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),w(21,"HP"),g(),b(22,"div",18)(23,"span",19),w(24),g(),b(25,"span",20),w(26),g()()(),A(27,"unit-hp-bar",21),g(),M(28,YP,5,1,"div",22),M(29,QP,4,1,"div",22),g(),M(30,XP,6,0,"div",23),M(31,JP,6,1,"div",24),M(32,tF,6,0,"div",25),b(33,"div",26)(34,"div",27)(35,"button",8),pe("click",function(){return i.toggleStatExpansion()}),A(36,"img",9),g(),b(37,"h2"),w(38,"Stats"),g()(),b(39,"div",28),M(40,iF,4,3,"div",29),M(41,oF,4,3,"div",29),M(42,sF,4,3,"div",29),g()(),A(43,"mat-divider"),b(44,"div",30)(45,"div",31)(46,"button",8),pe("click",function(){return i.toggleInventoryExpansion()}),A(47,"img",9),g(),b(48,"h2"),w(49,"Inventory"),g()(),M(50,fF,2,0),g()),e&2){let r;S(i.unit().sprite.portraitURL?0:-1),m(2),N("src",i.unit().sprite.spriteURL,Pt),m(3),xe(i.unit().name),m(2),S(i.unit().stats.level>0?7:-1),m(),S(i.unit().classes?8:-1),m(),S((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),m(2),N("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),m(),Gt(ht(29,xg,i.isUnitInfoExpanded)),m(),S(i.unit().player?13:-1),m(3),S(i.isUnitInfoExpanded?16:-1),m(8),xe(i.unit().stats.hp.current),m(2),Ie("/ ",i.unit().stats.hp.maximum),m(),N("percentage",i.unit().stats.hp.percentage),m(),S((i.unit().stats.experience??0)>0?28:-1),m(),S((i.unit().stats.heldCurrency??0)>0?29:-1),m(),S((i.unit().tags??Ac(31,BD)).length>0?30:-1),m(),S(i.unit().behavior?31:-1),m(),S((i.unit().statusConditions??Ac(32,BD)).length>0?32:-1),m(3),N("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),m(),Gt(ht(33,xg,i.isStatsInfoExpanded)),m(4),S(i.unit().stats.combat?40:-1),m(),S(i.unit().stats.system?41:-1),m(),S(i.unit().stats.general?42:-1),m(4),N("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),m(),Gt(ht(35,xg,i.isInventoryExpanded)),m(3),S(i.isInventoryExpanded?50:-1)}},dependencies:[Fm,_u,Cu,wu,Du,Eu,xu,jD,pr],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var pF=["unitAutocompleteInput"],hF=(t,n)=>n.name;function mF(t,n){if(t&1&&(b(0,"mat-option",5)(1,"div",7),A(2,"img",8),b(3,"div"),w(4),g()()()),t&2){let e=n.$implicit;N("value",e),m(2),N("src",e.sprite.spriteURL,Pt),m(2),xe(e.name)}}function gF(t,n){if(t&1&&A(0,"unit-sidenav-display",6),t&2){let e=E();N("unit",e.selectedUnit.value)}}var Mu=class t{constructor(n){this.dataService=n;this.dataService=u(Fe),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new dg(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(F(Fe))};static \u0275cmp=D({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ke(pF,5),e&2){let r;q(r=Z())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(b(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),pe("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),b(5,"mat-autocomplete",4,1),ke(7,mF,5,3,"mat-option",5,hF),g()()(),M(9,gF,1,1,"unit-sidenav-display",6),g()),e&2){let r=Cn(6);m(3),N("formControl",i.selectedUnit)("matAutocomplete",r),m(2),N("displayWith",i.formatAutocompleteDisplayValue),m(2),Ne(i.filteredUnits),m(2),S(i.selectedUnit.value?9:-1)}},dependencies:[Zw,Ww,ru,Vw,jw,Is,Ss,lu,fD,uD,VD,LD,ko,Eg,Yw,ug,Iu],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var Su=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(oe(0,"p"),w(1,"map-tiles-view works!"),ce())},encapsulation:2})};function vF(t,n){t&1&&w(0," U ")}function bF(t,n){t&1&&w(0," T ")}function yF(t,n){t&1&&w(0," I ")}function _F(t,n){t&1&&w(0," L ")}function CF(t,n){t&1&&w(0," DR ")}function wF(t,n){if(t&1&&(b(0,"mat-tab",6),w(1),g()),t&2){let e=n.$implicit;N("label",e.title),m(),Ie(" ",e.title," ")}}var Tu=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Qt),this.breakpointService=u(Vn),this.themeService=u(jn),this.teamDataService=u(Fe);var o=this.route.snapshot.paramMap.get("teamName")??"";this.teamDataService.loadDataForTeam(o)}static \u0275fac=function(e){return new(e||t)(F(Qt),F(Vn),F(jn),F(Fe))};static \u0275cmp=D({type:t,selectors:[["map-view"]],decls:25,vars:1,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],["mat-stretch-tabs","false","mat-align-tabs","start",1,"segmentTabs"],[3,"label"]],template:function(e,i){if(e&1){let r=Kn();b(0,"button",1),pe("click",function(){Ht(r);let a=Cn(4);return zt(a.toggle())}),w(1,">"),g(),b(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),kt(7,vF,1,0,"ng-template",4),A(8,"map-units-sidenav"),g(),b(9,"mat-tab"),kt(10,bF,1,0,"ng-template",4),A(11,"map-tiles-sidenav"),g(),b(12,"mat-tab"),kt(13,yF,1,0,"ng-template",4),w(14," Image download "),g(),b(15,"mat-tab"),kt(16,_F,1,0,"ng-template",4),A(17,"map-links-sidenav"),g(),b(18,"mat-tab"),kt(19,CF,1,0,"ng-template",4),A(20,"map-dice-roller-sidenav"),g()()(),b(21,"mat-sidenav-content")(22,"mat-tab-group",5),ke(23,wF,2,2,"mat-tab",6,wt),g()()()}if(e&2){let r;m(3),N("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),m(20),Ne((r=i.teamDataService.mapData().map)==null?null:r.segments)}},dependencies:[zm,fw,Pd,tg,Cw,eg,lw,Hd,Mu,Su,Ud],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}']})};var Ru=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(oe(0,"p"),w(1,"map-analysis-view works!"),ce())},encapsulation:2})};var Au=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(oe(0,"p"),w(1,"convoy-view works!"),ce())},encapsulation:2})};var ku=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(oe(0,"p"),w(1,"shop-view works!"),ce())},encapsulation:2})};var UD=[{path:"",component:Nd,title:"Reddit Emblem Maps"},{path:":teamName/map",component:Tu,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:Ru,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Au,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:ku,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var HD={providers:[ap(),ym(UD)]};var Nu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&A(0,"router-outlet")},dependencies:[rs],encapsulation:2})};zh(Nu,HD).catch(t=>console.error(t));
