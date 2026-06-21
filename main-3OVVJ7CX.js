var iD=Object.defineProperty,rD=Object.defineProperties;var oD=Object.getOwnPropertyDescriptors;var jg=Object.getOwnPropertySymbols;var aD=Object.prototype.hasOwnProperty,sD=Object.prototype.propertyIsEnumerable;var Bg=(t,n,e)=>n in t?iD(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,D=(t,n)=>{for(var e in n||={})aD.call(n,e)&&Bg(t,e,n[e]);if(jg)for(var e of jg(n))sD.call(n,e)&&Bg(t,e,n[e]);return t},J=(t,n)=>rD(t,oD(n));var wt=null,Ls=!1,Wu=1,lD=null,et=Symbol("SIGNAL");function W(t){let n=wt;return wt=t,n}function js(){return wt}var li={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ci(t){if(Ls)throw new Error("");if(wt===null)return;wt.consumerOnSignalRead(t);let n=wt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=wt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:wt.producers,e!==void 0&&e.producer===t)){wt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===wt&&(!i||dD(r,wt)))return;let o=Lr(wt),a={producer:t,consumer:wt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};wt.producersTail=a,n!==void 0?n.nextProducer=a:wt.producers=a,o&&zg(t,a)}function Vg(){Wu++}function ji(t){if(!(Lr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Wu)){if(!t.producerMustRecompute(t)&&!Fr(t)){Pr(t);return}t.producerRecomputeValue(t),Pr(t)}}function Gu(t){if(t.consumers===void 0)return;let n=Ls;Ls=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||cD(i)}}finally{Ls=n}}function qu(){return wt?.consumerAllowSignalWrites!==!1}function cD(t){t.dirty=!0,Gu(t),t.consumerMarkedDirty?.(t)}function Pr(t){t.dirty=!1,t.lastCleanEpoch=Wu}function Gn(t){return t&&Ug(t),W(t)}function Ug(t){t.producersTail=void 0,t.recomputing=!0}function di(t,n){W(n),t&&Hg(t)}function Hg(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Lr(t))do e=Zu(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Fr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(ji(e),i!==e.version))return!0}return!1}function ui(t){if(Lr(t)){let n=t.producers;for(;n!==void 0;)n=Zu(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function zg(t,n){let e=t.consumersTail,i=Lr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)zg(r.producer,r)}function Zu(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Lr(n)){let o=n.producers;for(;o!==void 0;)o=Zu(o)}return e}function Lr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Go(t){lD?.(t)}function dD(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function qo(t,n){return Object.is(t,n)}function Zo(t,n){let e=Object.create(uD);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(ji(e),ci(e),e.value===Tn)throw e.error;return e.value};return i[et]=e,Go(e),i}var Fi=Symbol("UNSET"),Li=Symbol("COMPUTING"),Tn=Symbol("ERRORED"),uD=J(D({},li),{value:Fi,dirty:!0,error:null,equal:qo,kind:"computed",producerMustRecompute(t){return t.value===Fi||t.value===Li},producerRecomputeValue(t){if(t.value===Li)throw new Error("");let n=t.value;t.value=Li;let e=Gn(t),i,r=!1;try{i=t.computation(),W(null),r=n!==Fi&&n!==Tn&&i!==Tn&&t.equal(n,i)}catch(o){i=Tn,t.error=o}finally{di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function fD(){throw new Error}var $g=fD;function Wg(t){$g(t)}function Yu(t){$g=t}var mD=null;function Qu(t,n){let e=Object.create(Yo);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Gg(e);return i[et]=e,Go(e),[i,a=>Bi(e,a),a=>Bs(e,a)]}function Gg(t){return ci(t),t.value}function Bi(t,n){qu()||Wg(t),t.equal(t.value,n)||(t.value=n,pD(t))}function Bs(t,n){qu()||Wg(t),Bi(t,n(t.value))}var Yo=J(D({},li),{equal:qo,value:void 0,kind:"signal"});function pD(t){t.version++,Vg(),Gu(t),mD?.(t)}var Ku=J(D({},li),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Xu(t){if(t.dirty=!1,t.version>0&&!Fr(t))return;t.version++;let n=Gn(t);try{t.cleanup(),t.fn()}finally{di(t,n)}}function ae(t){return typeof t=="function"}function jr(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Vs=jr(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Vi(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var pe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ae(i))try{i()}catch(o){n=o instanceof Vs?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{qg(o)}catch(a){n=n??[],a instanceof Vs?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Vs(n)}}add(n){var e;if(n&&n!==this)if(this.closed)qg(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Vi(e,n)}remove(n){let{_finalizers:e}=this;e&&Vi(e,n),n instanceof t&&n._removeParent(this)}};pe.EMPTY=(()=>{let t=new pe;return t.closed=!0,t})();var Ju=pe.EMPTY;function Us(t){return t instanceof pe||t&&"closed"in t&&ae(t.remove)&&ae(t.add)&&ae(t.unsubscribe)}function qg(t){ae(t)?t():t.unsubscribe()}var un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Br={setTimeout(t,n,...e){let{delegate:i}=Br;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Br;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Hs(t){Br.setTimeout(()=>{let{onUnhandledError:n}=un;if(n)n(t);else throw t})}function Ui(){}var Zg=ef("C",void 0,void 0);function Yg(t){return ef("E",void 0,t)}function Qg(t){return ef("N",t,void 0)}function ef(t,n,e){return{kind:t,value:n,error:e}}var Hi=null;function Vr(t){if(un.useDeprecatedSynchronousErrorHandling){let n=!Hi;if(n&&(Hi={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Hi;if(Hi=null,e)throw i}}else t()}function Kg(t){un.useDeprecatedSynchronousErrorHandling&&Hi&&(Hi.errorThrown=!0,Hi.error=t)}var zi=class extends pe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Us(n)&&n.add(this)):this.destination=vD}static create(n,e,i){return new qn(n,e,i)}next(n){this.isStopped?nf(Qg(n),this):this._next(n)}error(n){this.isStopped?nf(Yg(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?nf(Zg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},hD=Function.prototype.bind;function tf(t,n){return hD.call(t,n)}var rf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){zs(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){zs(i)}else zs(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){zs(e)}}},qn=class extends zi{constructor(n,e,i){super();let r;if(ae(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&un.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&tf(n.next,o),error:n.error&&tf(n.error,o),complete:n.complete&&tf(n.complete,o)}):r=n}this.destination=new rf(r)}};function zs(t){un.useDeprecatedSynchronousErrorHandling?Kg(t):Hs(t)}function gD(t){throw t}function nf(t,n){let{onStoppedNotification:e}=un;e&&Br.setTimeout(()=>e(t,n))}var vD={closed:!0,next:Ui,error:gD,complete:Ui};var Ur=typeof Symbol=="function"&&Symbol.observable||"@@observable";function zt(t){return t}function of(...t){return af(t)}function af(t){return t.length===0?zt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var Z=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=bD(e)?e:new qn(e,i,r);return Vr(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Xg(i),new i((r,o)=>{let a=new qn({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Ur](){return this}pipe(...e){return af(e)(this)}toPromise(e){return e=Xg(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Xg(t){var n;return(n=t??un.Promise)!==null&&n!==void 0?n:Promise}function _D(t){return t&&ae(t.next)&&ae(t.error)&&ae(t.complete)}function bD(t){return t&&t instanceof zi||_D(t)&&Us(t)}function yD(t){return ae(t?.lift)}function ce(t){return n=>{if(yD(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function fe(t,n,e,i,r){return new sf(t,n,e,i,r)}var sf=class extends zi{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Jg=jr(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var T=(()=>{class t extends Z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new $s(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Jg}next(e){Vr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Vr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Vr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Ju:(this.currentObservers=null,o.push(e),new pe(()=>{this.currentObservers=null,Vi(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new Z;return e.source=this,e}}return t.create=(n,e)=>new $s(n,e),t})(),$s=class extends T{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Ju}};var rt=class extends T{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Qo={now(){return(Qo.delegate||Date).now()},delegate:void 0};var Ws=class extends T{constructor(n=1/0,e=1/0,i=Qo){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var Gs=class extends pe{constructor(n,e){super()}schedule(n,e=0){return this}};var Ko={setInterval(t,n,...e){let{delegate:i}=Ko;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ko;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var qs=class extends Gs{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Ko.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Ko.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Vi(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Hr=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Hr.now=Qo.now;var Zs=class extends Hr{constructor(n,e=Hr.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var $i=new Zs(qs),ev=$i;var We=new Z(t=>t.complete());function Ys(t){return t&&ae(t.schedule)}function lf(t){return t[t.length-1]}function Qs(t){return ae(lf(t))?t.pop():void 0}function kn(t){return Ys(lf(t))?t.pop():void 0}function tv(t,n){return typeof lf(t)=="number"?t.pop():n}function iv(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(u){try{c(i.next(u))}catch(f){a(f)}}function l(u){try{c(i.throw(u))}catch(f){a(f)}}function c(u){u.done?o(u.value):r(u.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function nv(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Wi(t){return this instanceof Wi?(this.v=t,this):new Wi(t)}function rv(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(y){return Promise.resolve(y).then(h,f)}}function s(h,y){i[h]&&(r[h]=function(k){return new Promise(function(O,L){o.push([h,k,O,L])>1||l(h,k)})},y&&(r[h]=y(r[h])))}function l(h,y){try{c(i[h](y))}catch(k){p(o[0][3],k)}}function c(h){h.value instanceof Wi?Promise.resolve(h.value.v).then(u,f):p(o[0][2],h)}function u(h){l("next",h)}function f(h){l("throw",h)}function p(h,y){h(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function ov(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof nv=="function"?nv(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Ks=t=>t&&typeof t.length=="number"&&typeof t!="function";function Xs(t){return ae(t?.then)}function Js(t){return ae(t[Ur])}function el(t){return Symbol.asyncIterator&&ae(t?.[Symbol.asyncIterator])}function tl(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function CD(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var nl=CD();function il(t){return ae(t?.[nl])}function rl(t){return rv(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Wi(e.read());if(r)return yield Wi(void 0);yield yield Wi(i)}}finally{e.releaseLock()}})}function ol(t){return ae(t?.getReader)}function Ne(t){if(t instanceof Z)return t;if(t!=null){if(Js(t))return wD(t);if(Ks(t))return xD(t);if(Xs(t))return DD(t);if(el(t))return av(t);if(il(t))return ED(t);if(ol(t))return ID(t)}throw tl(t)}function wD(t){return new Z(n=>{let e=t[Ur]();if(ae(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function xD(t){return new Z(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function DD(t){return new Z(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Hs)})}function ED(t){return new Z(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function av(t){return new Z(n=>{MD(t,n).catch(e=>n.error(e))})}function ID(t){return av(rl(t))}function MD(t,n){var e,i,r,o;return iv(this,void 0,void 0,function*(){try{for(e=ov(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Vt(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function al(t,n=0){return ce((e,i)=>{e.subscribe(fe(i,r=>Vt(i,t,()=>i.next(r),n),()=>Vt(i,t,()=>i.complete(),n),r=>Vt(i,t,()=>i.error(r),n)))})}function sl(t,n=0){return ce((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function sv(t,n){return Ne(t).pipe(sl(n),al(n))}function lv(t,n){return Ne(t).pipe(sl(n),al(n))}function cv(t,n){return new Z(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function dv(t,n){return new Z(e=>{let i;return Vt(e,n,()=>{i=t[nl](),Vt(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ae(i?.return)&&i.return()})}function ll(t,n){if(!t)throw new Error("Iterable cannot be null");return new Z(e=>{Vt(e,n,()=>{let i=t[Symbol.asyncIterator]();Vt(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function uv(t,n){return ll(rl(t),n)}function fv(t,n){if(t!=null){if(Js(t))return sv(t,n);if(Ks(t))return cv(t,n);if(Xs(t))return lv(t,n);if(el(t))return ll(t,n);if(il(t))return dv(t,n);if(ol(t))return uv(t,n)}throw tl(t)}function Ve(t,n){return n?fv(t,n):Ne(t)}function Q(...t){let n=kn(t);return Ve(t,n)}function cf(t,n){let e=ae(t)?t:()=>t,i=r=>r.error(e());return new Z(n?r=>n.schedule(i,0,r):i)}function Xo(t){return!!t&&(t instanceof Z||ae(t.lift)&&ae(t.subscribe))}var Gi=jr(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function mv(t){return t instanceof Date&&!isNaN(t)}function ee(t,n){return ce((e,i)=>{let r=0;e.subscribe(fe(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:SD}=Array;function TD(t,n){return SD(n)?t(...n):t(n)}function cl(t){return ee(n=>TD(t,n))}var{isArray:kD}=Array,{getPrototypeOf:AD,prototype:RD,keys:OD}=Object;function dl(t){if(t.length===1){let n=t[0];if(kD(n))return{args:n,keys:null};if(ND(n)){let e=OD(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function ND(t){return t&&typeof t=="object"&&AD(t)===RD}function ul(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Jo(...t){let n=kn(t),e=Qs(t),{args:i,keys:r}=dl(t);if(i.length===0)return Ve([],n);let o=new Z(PD(i,n,r?a=>ul(r,a):zt));return e?o.pipe(cl(e)):o}function PD(t,n,e=zt){return i=>{pv(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)pv(n,()=>{let c=Ve(t[l],n),u=!1;c.subscribe(fe(i,f=>{o[l]=f,u||(u=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function pv(t,n,e){t?Vt(e,t,n):n()}function hv(t,n,e,i,r,o,a,s){let l=[],c=0,u=0,f=!1,p=()=>{f&&!l.length&&!c&&n.complete()},h=k=>c<i?y(k):l.push(k),y=k=>{o&&n.next(k),c++;let O=!1;Ne(e(k,u++)).subscribe(fe(n,L=>{r?.(L),o?h(L):n.next(L)},()=>{O=!0},void 0,()=>{if(O)try{for(c--;l.length&&c<i;){let L=l.shift();a?Vt(n,a,()=>y(L)):y(L)}p()}catch(L){n.error(L)}}))};return t.subscribe(fe(n,h,()=>{f=!0,p()})),()=>{s?.()}}function ht(t,n,e=1/0){return ae(n)?ht((i,r)=>ee((o,a)=>n(i,o,r,a))(Ne(t(i,r))),e):(typeof n=="number"&&(e=n),ce((i,r)=>hv(i,r,t,e)))}function fl(t=1/0){return ht(zt,t)}function gv(){return fl(1)}function An(...t){return gv()(Ve(t,kn(t)))}function qi(t){return new Z(n=>{Ne(t()).subscribe(n)})}function df(...t){let n=Qs(t),{args:e,keys:i}=dl(t),r=new Z(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let u=0;u<a;u++){let f=!1;Ne(e[u]).subscribe(fe(o,p=>{f||(f=!0,c--),s[u]=p},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?ul(i,s):s),o.complete())}))}});return n?r.pipe(cl(n)):r}function Zi(t=0,n,e=ev){let i=-1;return n!=null&&(Ys(n)?e=n:i=n),new Z(r=>{let o=mv(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function At(...t){let n=kn(t),e=tv(t,1/0),i=t;return i.length?i.length===1?Ne(i[0]):fl(e)(Ve(i,n)):We}function ye(t,n){return ce((e,i)=>{let r=0;e.subscribe(fe(i,o=>t.call(n,o,r++)&&i.next(o)))})}function vv(t){return ce((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(fe(e,c=>{i=!0,r=c,o||Ne(t(c)).subscribe(o=fe(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function ml(t,n=$i){return vv(()=>Zi(t,n))}function ea(t){return ce((n,e)=>{let i=null,r=!1,o;i=n.subscribe(fe(e,void 0,void 0,a=>{o=Ne(t(a,ea(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function zr(t,n){return ae(n)?ht(t,n,1):ht(t,1)}function fn(t,n=$i){return ce((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}s()}e.subscribe(fe(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function _v(t){return ce((n,e)=>{let i=!1;n.subscribe(fe(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ut(t){return t<=0?()=>We:ce((n,e)=>{let i=0;n.subscribe(fe(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function bv(){return ce((t,n)=>{t.subscribe(fe(n,Ui))})}function $r(t){return ee(()=>t)}function uf(t,n){return n?e=>An(n.pipe(ut(1),bv()),e.pipe(uf(t))):ht((e,i)=>Ne(t(e,i)).pipe(ut(1),$r(e)))}function ff(t,n=$i){let e=Zi(t,n);return uf(()=>e)}function pl(t,n=zt){return t=t??FD,ce((e,i)=>{let r,o=!0;e.subscribe(fe(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function FD(t,n){return t===n}function yv(t=LD){return ce((n,e)=>{let i=!1;n.subscribe(fe(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function LD(){return new Gi}function ta(t){return ce((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Zn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?ye((r,o)=>t(r,o,i)):zt,ut(1),e?_v(n):yv(()=>new Gi))}function hl(t){return t<=0?()=>We:ce((n,e)=>{let i=[];n.subscribe(fe(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function gl(){return ce((t,n)=>{let e,i=!1;t.subscribe(fe(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Cv(t={}){let{connector:n=()=>new T,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,u=!1,f=!1,p=()=>{s?.unsubscribe(),s=void 0},h=()=>{p(),a=l=void 0,u=f=!1},y=()=>{let k=a;h(),k?.unsubscribe()};return ce((k,O)=>{c++,!f&&!u&&p();let L=l=l??n();O.add(()=>{c--,c===0&&!f&&!u&&(s=mf(y,r))}),L.subscribe(O),!a&&c>0&&(a=new qn({next:Me=>L.next(Me),error:Me=>{f=!0,p(),s=mf(h,e,Me),L.error(Me)},complete:()=>{u=!0,p(),s=mf(h,i),L.complete()}}),Ne(k).subscribe(a))})(o)}}function mf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new qn({next:()=>{i.unsubscribe(),t()}});return Ne(n(...e)).subscribe(i)}function vl(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Cv({connector:()=>new Ws(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Yi(t){return ye((n,e)=>t<=e)}function gt(...t){let n=kn(t);return ce((e,i)=>{(n?An(t,e,n):An(t,e)).subscribe(i)})}function ot(t,n){return ce((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(fe(i,l=>{r?.unsubscribe();let c=0,u=o++;Ne(t(l,u)).subscribe(r=fe(i,f=>i.next(n?n(l,f,u,c++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Pe(t){return ce((n,e)=>{Ne(t).subscribe(fe(e,()=>e.complete(),Ui)),!e.closed&&n.subscribe(e)})}function xt(t,n,e){let i=ae(t)||n||e?{next:t,error:n,complete:e}:t;return i?ce((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(fe(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):zt}var pf;function _l(){return pf}function Rn(t){let n=pf;return pf=t,n}var wv=Symbol("NotFound");function Wr(t){return t===wv||t?.name==="\u0275NotFound"}function hf(t,n,e){let i=Object.create(jD);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(ji(i),ci(i),i.value===Tn)throw i.error;return i.value};return o[et]=i,Go(i),o}function xv(t,n){ji(t),Bi(t,n),Pr(t)}function Dv(t,n){if(ji(t),t.value===Tn)throw t.error;Bs(t,n),Pr(t)}var jD=J(D({},li),{value:Fi,dirty:!0,error:null,equal:qo,kind:"linkedSignal",producerMustRecompute(t){return t.value===Fi||t.value===Li},producerRecomputeValue(t){if(t.value===Li)throw new Error("");let n=t.value;t.value=Li;let e=Gn(t),i,r=!1;try{let o=t.source(),a=n!==Fi&&n!==Tn,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,W(null),r=a&&i!==Tn&&t.equal(n,i)}catch(o){i=Tn,t.error=o}finally{di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Ev(t){let n=W(null);try{return t()}finally{W(n)}}var El="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",R=class extends Error{code;constructor(n,e){super(hi(n,e)),this.code=n}};function BD(t){return`NG0${Math.abs(t)}`}function hi(t,n){return`${BD(t)}${n?": "+n:""}`}var la=globalThis;function Re(t){for(let n in t)if(t[n]===Re)return n;throw Error("")}function kv(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function ca(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(ca).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Il(t,n){return t?n?`${t} ${n}`:t:n||""}var VD=Re({__forward_ref__:Re});function $t(t){return t.__forward_ref__=$t,t}function vt(t){return Sf(t)?t():t}function Sf(t){return typeof t=="function"&&t.hasOwnProperty(VD)&&t.__forward_ref__===$t}function E(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function te(t){return{providers:t.providers||[],imports:t.imports||[]}}function da(t){return UD(t,Ml)}function Tf(t){return da(t)!==null}function UD(t,n){return t.hasOwnProperty(n)&&t[n]||null}function HD(t){let n=t?.[Ml]??null;return n||null}function vf(t){return t&&t.hasOwnProperty(yl)?t[yl]:null}var Ml=Re({\u0275prov:Re}),yl=Re({\u0275inj:Re}),x=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=E({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function kf(t){return t&&!!t.\u0275providers}var Af=Re({\u0275cmp:Re}),Rf=Re({\u0275dir:Re}),Of=Re({\u0275pipe:Re}),Nf=Re({\u0275mod:Re}),ia=Re({\u0275fac:Re}),er=Re({__NG_ELEMENT_ID__:Re}),Iv=Re({__NG_ENV_ID__:Re});function Pf(t){return Sl(t,"@NgModule"),t[Nf]||null}function Qn(t){return Sl(t,"@Component"),t[Af]||null}function Ff(t){return Sl(t,"@Directive"),t[Rf]||null}function Av(t){return Sl(t,"@Pipe"),t[Of]||null}function Sl(t,n){if(t==null)throw new R(-919,!1)}function qr(t){return typeof t=="string"?t:t==null?"":String(t)}var Rv=Re({ngErrorCode:Re}),zD=Re({ngErrorMessage:Re}),$D=Re({ngTokenPath:Re});function Lf(t,n){return Ov("",-200,n)}function Tl(t,n){throw new R(-201,!1)}function Ov(t,n,e){let i=new R(n,t);return i[Rv]=n,i[zD]=t,e&&(i[$D]=e),i}function WD(t){return t[Rv]}var _f;function Nv(){return _f}function Rt(t){let n=_f;return _f=t,n}function jf(t,n,e){let i=da(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Tl(t,"")}var GD={},Qi=GD,qD="__NG_DI_FLAG__",bf=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Ki(e)||0;try{return this.injector.get(n,i&8?null:Qi,i)}catch(r){if(Wr(r))return r;throw r}}};function ZD(t,n=0){let e=_l();if(e===void 0)throw new R(-203,!1);if(e===null)return jf(t,void 0,n);{let i=YD(n),r=e.retrieve(t,i);if(Wr(r)){if(i.optional)return null;throw r}return r}}function G(t,n=0){return(Nv()||ZD)(vt(t),n)}function d(t,n){return G(t,Ki(n))}function Ki(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function YD(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function yf(t){let n=[];for(let e=0;e<t.length;e++){let i=vt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new R(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=QD(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(G(r,o))}else n.push(G(i))}return n}function QD(t){return t[qD]}function fi(t,n){let e=t.hasOwnProperty(ia);return e?t[ia]:null}function Pv(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Fv(t){return t.flat(Number.POSITIVE_INFINITY)}function kl(t,n){t.forEach(e=>Array.isArray(e)?kl(e,n):n(e))}function Bf(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function ua(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Lv(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function jv(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Al(t,n,e){let i=Zr(t,n);return i>=0?t[i|1]=e:(i=~i,jv(t,i,n,e)),i}function Rl(t,n){let e=Zr(t,n);if(e>=0)return t[e|1]}function Zr(t,n){return KD(t,n,1)}function KD(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var gi={},Dt=[],tr=new x(""),Vf=new x("",-1),Uf=new x(""),ra=class{get(n,e=Qi){if(e===Qi){let r=Ov("",-201);throw r.name="\u0275NotFound",r}return e}};function nr(t){return{\u0275providers:t}}function Bv(t){return nr([{provide:tr,multi:!0,useValue:t}])}function Vv(...t){return{\u0275providers:Hf(!0,t),\u0275fromNgModule:!0}}function Hf(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return kl(n,a=>{let s=a;Cl(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Uv(r,o),e}function Uv(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];zf(r,o=>{n(o,i)})}}function Cl(t,n,e,i){if(t=vt(t),!t)return!1;let r=null,o=vf(t),a=!o&&Qn(t);if(!o&&!a){let l=t.ngModule;if(o=vf(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)Cl(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;kl(o.imports,u=>{Cl(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&Uv(c,n)}if(!s){let c=fi(r)||(()=>new r);n({provide:r,useFactory:c,deps:Dt},r),n({provide:Uf,useValue:r,multi:!0},r),n({provide:tr,useValue:()=>G(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;zf(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function zf(t,n){for(let e of t)kf(e)&&(e=e.\u0275providers),Array.isArray(e)?zf(e,n):n(e)}var XD=Re({provide:String,useValue:Re});function Hv(t){return t!==null&&typeof t=="object"&&XD in t}function JD(t){return!!(t&&t.useExisting)}function eE(t){return!!(t&&t.useFactory)}function Xi(t){return typeof t=="function"}function zv(t){return!!t.useClass}var fa=new x(""),bl={},Mv={},gf;function Yr(){return gf===void 0&&(gf=new ra),gf}var Se=class{},Ji=class extends Se{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,wf(n,a=>this.processProvider(a)),this.records.set(Vf,Gr(void 0,this)),r.has("environment")&&this.records.set(Se,Gr(void 0,this));let o=this.records.get(fa);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Uf,Dt,{self:!0}))}retrieve(n,e){let i=Ki(e)||0;try{return this.get(n,Qi,i)}catch(r){if(Wr(r))return r;throw r}}destroy(){na(this),this._destroyed=!0;let n=W(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),W(n)}}onDestroy(n){return na(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){na(this);let e=Rn(this),i=Rt(void 0),r;try{return n()}finally{Rn(e),Rt(i)}}get(n,e=Qi,i){if(na(this),n.hasOwnProperty(Iv))return n[Iv](this);let r=Ki(i),o,a=Rn(this),s=Rt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=oE(n)&&da(n);u&&this.injectableDefInScope(u)?c=Gr(Cf(n),bl):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Yr():this.parent;return e=r&8&&e===Qi?null:e,l.get(n,e)}catch(l){let c=WD(l);throw c===-200||c===-201?new R(c,null):l}finally{Rt(s),Rn(a)}}resolveInjectorInitializers(){let n=W(null),e=Rn(this),i=Rt(void 0),r;try{let o=this.get(tr,Dt,{self:!0});for(let a of o)a()}finally{Rn(e),Rt(i),W(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=vt(n);let e=Xi(n)?n:vt(n&&n.provide),i=nE(n);if(!Xi(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Gr(void 0,bl,!0),r.factory=()=>yf(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=W(null);try{if(e.value===Mv)throw Lf("");return e.value===bl&&(e.value=Mv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&rE(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{W(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=vt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Cf(t){let n=da(t),e=n!==null?n.factory:fi(t);if(e!==null)return e;if(t instanceof x)throw new R(-204,!1);if(t instanceof Function)return tE(t);throw new R(-204,!1)}function tE(t){if(t.length>0)throw new R(-204,!1);let e=HD(t);return e!==null?()=>e.factory(t):()=>new t}function nE(t){if(Hv(t))return Gr(void 0,t.useValue);{let n=$f(t);return Gr(n,bl)}}function $f(t,n,e){let i;if(Xi(t)){let r=vt(t);return fi(r)||Cf(r)}else if(Hv(t))i=()=>vt(t.useValue);else if(eE(t))i=()=>t.useFactory(...yf(t.deps||[]));else if(JD(t))i=(r,o)=>G(vt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=vt(t&&(t.useClass||t.provide));if(iE(t))i=()=>new r(...yf(t.deps));else return fi(r)||Cf(r)}return i}function na(t){if(t.destroyed)throw new R(-205,!1)}function Gr(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function iE(t){return!!t.deps}function rE(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function oE(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function wf(t,n){for(let e of t)Array.isArray(e)?wf(e,n):e&&kf(e)?wf(e.\u0275providers,n):n(e)}function ft(t,n){let e;t instanceof Ji?(na(t),e=t):e=new bf(t);let i,r=Rn(e),o=Rt(void 0);try{return n()}finally{Rn(r),Rt(o)}}function $v(){return Nv()!==void 0||_l()!=null}var pn=0,q=1,K=2,st=3,Xt=4,Ot=5,ir=6,Qr=7,tt=8,Kn=9,hn=10,Be=11,Kr=12,Wf=13,rr=14,Nt=15,vi=16,or=17,Nn=18,Xn=19,Gf=20,Yn=21,Ol=22,mi=23,Wt=24,ar=25,_i=26,Ue=27,Wv=1,qf=6,bi=7,ma=8,sr=9,Qe=10;function Jn(t){return Array.isArray(t)&&typeof t[Wv]=="object"}function gn(t){return Array.isArray(t)&&t[Wv]===!0}function Zf(t){return(t.flags&4)!==0}function Pn(t){return t.componentOffset>-1}function pa(t){return(t.flags&1)===1}function Fn(t){return!!t.template}function Xr(t){return(t[K]&512)!==0}function lr(t){return(t[K]&256)===256}var Gv="svg",qv="math";function Jt(t){for(;Array.isArray(t);)t=t[pn];return t}function Yf(t,n){return Jt(n[t])}function en(t,n){return Jt(n[t.index])}function Nl(t,n){return t.data[n]}function Pl(t,n){return t[n]}function Qf(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function tn(t,n){let e=n[t];return Jn(e)?e:e[pn]}function Zv(t){return(t[K]&4)===4}function Fl(t){return(t[K]&128)===128}function Yv(t){return gn(t[st])}function Gt(t,n){return n==null?null:t[n]}function Kf(t){t[or]=0}function Xf(t){t[K]&1024||(t[K]|=1024,Fl(t)&&cr(t))}function Qv(t,n){for(;t>0;)n=n[rr],t--;return n}function ha(t){return!!(t[K]&9216||t[Wt]?.dirty)}function Ll(t){t[hn].changeDetectionScheduler?.notify(8),t[K]&64&&(t[K]|=1024),ha(t)&&cr(t)}function cr(t){t[hn].changeDetectionScheduler?.notify(0);let n=pi(t);for(;n!==null&&!(n[K]&8192||(n[K]|=8192,!Fl(n)));)n=pi(n)}function Jf(t,n){if(lr(t))throw new R(911,!1);t[Yn]===null&&(t[Yn]=[]),t[Yn].push(n)}function Kv(t,n){if(t[Yn]===null)return;let e=t[Yn].indexOf(n);e!==-1&&t[Yn].splice(e,1)}function pi(t){let n=t[st];return gn(n)?n[st]:n}function em(t){return t[Qr]??=[]}function tm(t){return t.cleanup??=[]}function Xv(t,n,e,i){let r=em(n);r.push(e),t.firstCreatePass&&tm(t).push(i,r.length-1)}var he={lFrame:d_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var xf=!1;function Jv(){return he.lFrame.elementDepthCount}function e_(){he.lFrame.elementDepthCount++}function nm(){he.lFrame.elementDepthCount--}function im(){return he.bindingsEnabled}function rm(){return he.skipHydrationRootTNode!==null}function om(t){return he.skipHydrationRootTNode===t}function am(){he.skipHydrationRootTNode=null}function Y(){return he.lFrame.lView}function Ge(){return he.lFrame.tView}function Pt(t){return he.lFrame.contextLView=t,t[tt]}function Ft(t){return he.lFrame.contextLView=null,t}function Et(){let t=sm();for(;t!==null&&t.type===64;)t=t.parent;return t}function sm(){return he.lFrame.currentTNode}function t_(){let t=he.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Jr(t,n){let e=he.lFrame;e.currentTNode=t,e.isParent=n}function lm(){return he.lFrame.isParent}function cm(){he.lFrame.isParent=!1}function n_(){return he.lFrame.contextLView}function dm(){return xf}function oa(t){let n=xf;return xf=t,n}function ga(){let t=he.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function i_(){return he.lFrame.bindingIndex}function r_(t){return he.lFrame.bindingIndex=t}function yi(){return he.lFrame.bindingIndex++}function jl(t){let n=he.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function o_(){return he.lFrame.inI18n}function a_(t,n){let e=he.lFrame;e.bindingIndex=e.bindingRootIndex=t,Bl(n)}function s_(){return he.lFrame.currentDirectiveIndex}function Bl(t){he.lFrame.currentDirectiveIndex=t}function l_(t){let n=he.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Vl(){return he.lFrame.currentQueryIndex}function va(t){he.lFrame.currentQueryIndex=t}function aE(t){let n=t[q];return n.type===2?n.declTNode:n.type===1?t[Ot]:null}function um(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=aE(o),r===null||(o=o[rr],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=he.lFrame=c_();return i.currentTNode=n,i.lView=t,!0}function Ul(t){let n=c_(),e=t[q];he.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function c_(){let t=he.lFrame,n=t===null?null:t.child;return n===null?d_(t):n}function d_(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function u_(){let t=he.lFrame;return he.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var fm=u_;function Hl(){let t=u_();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function f_(t){return(he.lFrame.contextLView=Qv(t,he.lFrame.contextLView))[tt]}function Ln(){return he.lFrame.selectedIndex}function Ci(t){he.lFrame.selectedIndex=t}function _a(){let t=he.lFrame;return Nl(t.tView,t.selectedIndex)}function m_(){return he.lFrame.currentNamespace}var p_=!0;function zl(){return p_}function $l(t){p_=t}function Df(t,n=null,e=null,i){let r=mm(t,n,e,i);return r.resolveInjectorInitializers(),r}function mm(t,n=null,e=null,i,r=new Set){let o=[e||Dt,Vv(t)],a;return new Ji(o,n||Yr(),a||null,r)}var se=class t{static THROW_IF_NOT_FOUND=Qi;static NULL=new ra;static create(n,e){if(Array.isArray(n))return Df({name:""},e,n,"");{let i=n.name??"";return Df({name:i},n.parent,n.providers,i)}}static \u0275prov=E({token:t,providedIn:"any",factory:()=>G(Vf)});static __NG_ELEMENT_ID__=-1},ie=new x(""),Lt=(()=>{class t{static __NG_ELEMENT_ID__=sE;static __NG_ENV_ID__=e=>e}return t})(),wl=class extends Lt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return lr(this._lView)}onDestroy(n){let e=this._lView;return Jf(e,n),()=>Kv(e,n)}};function sE(){return new wl(Y())}var h_=!1,g_=new x(""),ei=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new rt(!1);debugTaskTracker=d(g_,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new Z(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=E({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ef=class extends T{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,$v()&&(this.destroyRef=d(Lt,{optional:!0})??void 0,this.pendingTasks=d(ei,{optional:!0})??void 0)}emit(n){let e=W(null);try{super.next(n)}finally{W(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof pe&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},$=Ef;function xl(...t){}function pm(t){let n,e;function i(){t=xl;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function v_(t){return queueMicrotask(()=>t()),()=>{t=xl}}var hm="isAngularZone",aa=hm+"_ID",lE=0,F=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new $(!1);onMicrotaskEmpty=new $(!1);onStable=new $(!1);onError=new $(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=h_}=n;if(typeof Zone>"u")throw new R(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,uE(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(hm)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new R(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new R(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,cE,xl,xl);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},cE={};function gm(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function dE(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){pm(()=>{t.callbackScheduled=!1,If(t),t.isCheckStableRunning=!0,gm(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),If(t)}function uE(t){let n=()=>{dE(t)},e=lE++;t._inner=t._inner.fork({name:"angular",properties:{[hm]:!0,[aa]:e,[aa+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(fE(l))return i.invokeTask(o,a,s,l);try{return Sv(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Tv(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Sv(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!mE(l)&&n(),Tv(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,If(t),gm(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function If(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Sv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Tv(t){t._nesting--,gm(t)}var sa=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new $;onMicrotaskEmpty=new $;onStable=new $;onError=new $;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function fE(t){return __(t,"__ignore_ng_zone__")}function mE(t){return __(t,"__scheduler_tick__")}function __(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var mn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},qt=new x("",{factory:()=>{let t=d(F),n=d(Se),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(mn),e.handleError(i))})}}}),b_={provide:tr,useValue:()=>{let t=d(mn,{optional:!0})},multi:!0},pE=new x("",{factory:()=>{let t=d(ie).defaultView;if(!t)return;let n=d(qt),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),d(Lt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function vm(){return nr([Bv(()=>{d(pE)})])}function U(t,n){let[e,i,r]=Qu(t,n?.equal),o=e,a=o[et];return o.set=i,o.update=r,o.asReadonly=Wl.bind(o),o}function Wl(){let t=this[et];if(t.readonlyFn===void 0){let n=()=>this();n[et]=t,t.readonlyFn=n}return t.readonlyFn}var eo=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=hE}return t})();function hE(){return new eo(Y(),Et())}var On=class{},ba=new x("",{factory:()=>!0});var _m=new x(""),ya=(()=>{class t{internalPendingTasks=d(ei);scheduler=d(On);errorHandler=d(qt);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=E({token:t,providedIn:"root",factory:()=>new t})}return t})(),Gl=(()=>{class t{static \u0275prov=E({token:t,providedIn:"root",factory:()=>new Mf})}return t})(),Mf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Dl=class{[et];constructor(n){this[et]=n}destroy(){this[et].destroy()}};function vn(t,n){let e=n?.injector??d(se),i=n?.manualCleanup!==!0?e.get(Lt):null,r,o=e.get(eo,null,{optional:!0}),a=e.get(On);return o!==null?(r=_E(o.view,a,t),i instanceof wl&&i._lView===o.view&&(i=null)):r=bE(t,e.get(Gl),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Dl(r)}var y_=J(D({},Ku),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=oa(!1);try{Xu(this)}finally{oa(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=W(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],W(t)}}}),gE=J(D({},y_),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(ui(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),vE=J(D({},y_),{consumerMarkedDirty(){this.view[K]|=8192,cr(this.view),this.notifier.notify(13)},destroy(){if(ui(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[mi]?.delete(this)}});function _E(t,n,e){let i=Object.create(vE);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=C_(i,e),t[mi]??=new Set,t[mi].add(i),i.consumerMarkedDirty(i),i}function bE(t,n,e){let i=Object.create(gE);return i.fn=C_(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function C_(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ka(t){return{toString:t}.toString()}function IE(t){return typeof t=="function"}function X_(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Jl=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ee=(()=>{let t=()=>J_;return t.ngInherit=!0,t})();function J_(t){return t.type.prototype.ngOnChanges&&(t.setInput=SE),ME}function ME(){let t=tb(this),n=t?.current;if(n){let e=t.previous;if(e===gi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function SE(t,n,e,i,r){let o=this.declaredInputs[i],a=tb(t)||TE(t,{previous:gi,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Jl(c&&c.currentValue,e,l===gi),X_(t,n,r,e)}var eb="__ngSimpleChanges__";function tb(t){return t[eb]||null}function TE(t,n){return t[eb]=n}var w_=[];var Oe=function(t,n=null,e){for(let i=0;i<w_.length;i++){let r=w_[i];r(t,n,e)}},Ie=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Ie||{});function kE(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=J_(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function nb(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function Yl(t,n,e){ib(t,n,3,e)}function Ql(t,n,e,i){(t[K]&3)===e&&ib(t,n,e,i)}function bm(t,n){let e=t[K];(e&3)===n&&(e&=16383,e+=1,t[K]=e)}function ib(t,n,e,i){let r=i!==void 0?t[or]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[or]+=65536),(s<o||o==-1)&&(AE(t,e,n,l),t[or]=(t[or]&4294901760)+l+2),l++}function x_(t,n){Oe(Ie.LifecycleHookStart,t,n);let e=W(null);try{n.call(t)}finally{W(e),Oe(Ie.LifecycleHookEnd,t,n)}}function AE(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[K]>>14<t[or]>>16&&(t[K]&3)===n&&(t[K]+=16384,x_(s,o)):x_(s,o)}var no=-1,ur=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function RE(t){return(t.flags&8)!==0}function OE(t){return(t.flags&16)!==0}function NE(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];PE(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function rb(t){return t===3||t===4||t===6}function PE(t){return t.charCodeAt(0)===64}function io(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?D_(t,e,r,null,n[++i]):D_(t,e,r,null,null))}}return t}function D_(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function ob(t){return t!==no}function ec(t){return t&32767}function FE(t){return t>>16}function tc(t,n){let e=FE(t),i=n;for(;e>0;)i=i[rr],e--;return i}var km=!0;function nc(t){let n=km;return km=t,n}var LE=256,ab=LE-1,sb=5,jE=0,jn={};function BE(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(er)&&(i=e[er]),i==null&&(i=e[er]=jE++);let r=i&ab,o=1<<r;n.data[t+(r>>sb)]|=o}function ic(t,n){let e=lb(t,n);if(e!==-1)return e;let i=n[q];i.firstCreatePass&&(t.injectorIndex=n.length,ym(i.data,t),ym(n,null),ym(i.blueprint,null));let r=rp(t,n),o=t.injectorIndex;if(ob(r)){let a=ec(r),s=tc(r,n),l=s[q].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function ym(t,n){t.push(0,0,0,0,0,0,0,0,n)}function lb(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function rp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=mb(r),i===null)return no;if(e++,r=r[rr],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return no}function Am(t,n,e){BE(t,n,e)}function VE(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(rb(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function cb(t,n,e){if(e&8||t!==void 0)return t;Tl(n,"NodeInjector")}function db(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Kn],o=Rt(void 0);try{return r?r.get(n,i,e&8):jf(n,i,e&8)}finally{Rt(o)}}return cb(i,n,e)}function ub(t,n,e,i=0,r){if(t!==null){if(n[K]&2048&&!(i&2)){let a=$E(t,n,e,i,jn);if(a!==jn)return a}let o=fb(t,n,e,i,jn);if(o!==jn)return o}return db(n,e,i,r)}function fb(t,n,e,i,r){let o=HE(e);if(typeof o=="function"){if(!um(n,t,i))return i&1?cb(r,e,i):db(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Tl(e);else return a}finally{fm()}}else if(typeof o=="number"){let a=null,s=lb(t,n),l=no,c=i&1?n[Nt][Ot]:null;for((s===-1||i&4)&&(l=s===-1?rp(t,n):n[s+8],l===no||!I_(i,!1)?s=-1:(a=n[q],s=ec(l),n=tc(l,n)));s!==-1;){let u=n[q];if(E_(o,s,u.data)){let f=UE(s,n,e,a,i,c);if(f!==jn)return f}l=n[s+8],l!==no&&I_(i,n[q].data[s+8]===c)&&E_(o,s,n)?(a=u,s=ec(l),n=tc(l,n)):s=-1}}return r}function UE(t,n,e,i,r,o){let a=n[q],s=a.data[t+8],l=i==null?Pn(s)&&km:i!=a&&(s.type&3)!==0,c=r&1&&o===s,u=Kl(s,a,e,l,c);return u!==null?Da(n,a,u,s,r):jn}function Kl(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,f=i?s:s+u,p=r?s+u:c;for(let h=f;h<p;h++){let y=a[h];if(h<l&&e===y||h>=l&&y.type===e)return h}if(r){let h=a[l];if(h&&Fn(h)&&h.type===e)return l}return null}function Da(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof ur){let s=o;if(s.resolving)throw Lf("");let l=nc(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],u,f=s.injectImpl?Rt(s.injectImpl):null,p=um(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&kE(e,a[e],n)}finally{f!==null&&Rt(f),nc(l),s.resolving=!1,fm()}}return o}function HE(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(er)?t[er]:void 0;return typeof n=="number"?n>=0?n&ab:zE:n}function E_(t,n,e){let i=1<<t;return!!(e[n+(t>>sb)]&i)}function I_(t,n){return!(t&2)&&!(t&1&&n)}var dr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return ub(this._tNode,this._lView,n,Ki(i),e)}};function zE(){return new dr(Et(),Y())}function He(t){return ka(()=>{let n=t.prototype.constructor,e=n[ia]||Rm(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[ia]||Rm(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Rm(t){return Sf(t)?()=>{let n=Rm(vt(t));return n&&n()}:fi(t)}function $E(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[K]&2048&&!Xr(a);){let s=fb(o,a,e,i|2,jn);if(s!==jn)return s;let l=o.parent;if(!l){let c=a[Gf];if(c){let u=c.get(e,jn,i&-5);if(u!==jn)return u}l=mb(a),a=a[rr]}o=l}return r}function mb(t){let n=t[q],e=n.type;return e===2?n.declTNode:e===1?t[Ot]:null}function Aa(t){return VE(Et(),t)}function WE(){return lo(Et(),Y())}function lo(t,n){return new j(en(t,n))}var j=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=WE}return t})();function pb(t){return t instanceof j?t.nativeElement:t}function GE(){return this._results[Symbol.iterator]()}var yn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new T}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Fv(n);(this._changesDetected=!Pv(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=GE};function hb(t){return(t.flags&128)===128}var op=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(op||{}),gb=new Map,qE=0;function ZE(){return qE++}function YE(t){gb.set(t[Xn],t)}function Om(t){gb.delete(t[Xn])}var M_="__ngContext__";function ro(t,n){Jn(n)?(t[M_]=n[Xn],YE(n)):t[M_]=n}function vb(t){return bb(t[Kr])}function _b(t){return bb(t[Xt])}function bb(t){for(;t!==null&&!gn(t);)t=t[Xt];return t}var QE;function ap(t){QE=t}var co=new x("",{factory:()=>KE}),KE="ng";var vc=new x(""),hr=new x("",{providedIn:"platform",factory:()=>"unknown"}),Ra=new x(""),gr=new x("",{factory:()=>d(ie).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var yb="r";var Cb="di";var wb=!1,xb=new x("",{factory:()=>wb});var XE=(t,n,e,i)=>{};function JE(t,n,e,i){XE(t,n,e,i)}function _c(t){return(t.flags&32)===32}var eI=()=>null;function Db(t,n,e=!1){return eI(t,n,e)}function Eb(t,n){let e=t.contentQueries;if(e!==null){let i=W(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];va(o),s.contentQueries(2,n[a],a)}}}finally{W(i)}}}function Nm(t,n,e){va(0);let i=W(null);try{n(t,e)}finally{W(i)}}function Ib(t,n,e){if(Zf(n)){let i=W(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{W(i)}}}var Cn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Cn||{});var ql;function tI(){if(ql===void 0&&(ql=null,la.trustedTypes))try{ql=la.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return ql}function S_(t){return tI()?.createScriptURL(t)||t}var rc=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${El})`}};function Oa(t){return t instanceof rc?t.changingThisBreaksApplicationSecurity:t}function sp(t,n){let e=Mb(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${El})`)}return e===n}function Mb(t){return t instanceof rc&&t.getTypeName()||null}var nI=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Sb(t){return t=String(t),t.match(nI)?t:"unsafe:"+t}function iI(t,n){return t.createText(n)}function rI(t,n,e){t.setValue(n,e)}function Tb(t,n,e){return t.createElement(n,e)}function oc(t,n,e,i,r){t.insertBefore(n,e,i,r)}function kb(t,n,e){t.appendChild(n,e)}function T_(t,n,e,i,r){i!==null?oc(t,n,e,i,r):kb(t,n,e)}function Ab(t,n,e,i){t.removeChild(null,n,e,i)}function oI(t,n,e){t.setAttribute(n,"style",e)}function aI(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Rb(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&NE(t,n,i),r!==null&&aI(t,n,r),o!==null&&oI(t,n,o)}var bc=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(bc||{});function je(t){let n=Nb();return n?n.sanitize(bc.URL,t)||"":sp(t,"URL")?Oa(t):Sb(qr(t))}function Ob(t){let n=Nb();if(n)return S_(n.sanitize(bc.RESOURCE_URL,t)||"");if(sp(t,"ResourceURL"))return S_(Oa(t));throw new R(904,!1)}var sI={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function lI(t,n){return sI[t]?.[n]===!0?Ob:je}function lp(t,n,e){return lI(n,e)(t)}function Nb(){let t=Y();return t&&t[hn].sanitizer}function Pb(t){return t instanceof Function?t():t}function cI(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Fb="ng-template";function dI(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&cI(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(cp(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function cp(t){return t.type===4&&t.value!==Fb}function uI(t,n,e){let i=t.type===4&&!e?Fb:t.value;return n===i}function fI(t,n,e){let i=4,r=t.attrs,o=r!==null?hI(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!_n(i)&&!_n(l))return!1;if(a&&_n(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!uI(t,l,e)||l===""&&n.length===1){if(_n(i))return!1;a=!0}}else if(i&8){if(r===null||!dI(t,r,l,e)){if(_n(i))return!1;a=!0}}else{let c=n[++s],u=mI(l,r,cp(t),e);if(u===-1){if(_n(i))return!1;a=!0;continue}if(c!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&c!==f){if(_n(i))return!1;a=!0}}}}return _n(i)||a}function _n(t){return(t&1)===0}function mI(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return gI(n,t)}function Lb(t,n,e=!1){for(let i=0;i<n.length;i++)if(fI(t,n[i],e))return!0;return!1}function pI(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function hI(t){for(let n=0;n<t.length;n++){let e=t[n];if(rb(e))return n}return t.length}function gI(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function vI(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function k_(t,n){return t?":not("+n.trim()+")":n}function _I(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!_n(a)&&(n+=k_(o,r),r=""),i=a,o=o||!_n(i);e++}return r!==""&&(n+=k_(o,r)),n}function bI(t){return t.map(_I).join(",")}function yI(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!_n(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var jt={};function dp(t,n,e,i,r,o,a,s,l,c,u){let f=Ue+i,p=f+r,h=CI(f,p),y=typeof c=="function"?c():c;return h[q]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:u}}function CI(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:jt);return e}function wI(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=dp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function up(t,n,e,i,r,o,a,s,l,c,u){let f=n.blueprint.slice();return f[pn]=r,f[K]=i|4|128|8|64|1024,(c!==null||t&&t[K]&2048)&&(f[K]|=2048),Kf(f),f[st]=f[rr]=t,f[tt]=e,f[hn]=a||t&&t[hn],f[Be]=s||t&&t[Be],f[Kn]=l||t&&t[Kn]||null,f[Ot]=o,f[Xn]=ZE(),f[ir]=u,f[Gf]=c,f[Nt]=n.type==2?t[Nt]:f,f}function xI(t,n,e){let i=en(n,t),r=wI(e),o=t[hn].rendererFactory,a=fp(t,up(t,r,null,jb(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function jb(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Bb(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function fp(t,n){return t[Kr]?t[Wf][Xt]=n:t[Kr]=n,t[Wf]=n,n}function m(t=1){Vb(Ge(),Y(),Ln()+t,!1)}function Vb(t,n,e,i){if(!i)if((n[K]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Yl(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Ql(n,o,0,e)}Ci(e)}var yc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(yc||{});function Pm(t,n,e,i){let r=W(null);try{let[o,a,s]=t.inputs[e],l=null;(a&yc.SignalBased)!==0&&(l=n[o][et]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):X_(n,l,o,i)}finally{W(r)}}var wn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(wn||{}),DI;function mp(t,n){return DI(t,n)}var y$=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Fm=new WeakMap,Ca=new WeakSet;function EI(t,n){let e=Fm.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Ca.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function II(t,n){let e=Fm.get(t);e?e.includes(n)||e.push(n):Fm.set(t,[n])}var fr=new Set,Cc=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Cc||{}),xn=new x(""),A_=new Set;function xi(t){A_.has(t)||(A_.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var wc=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=E({token:t,providedIn:"root",factory:()=>new t})}return t})(),pp=[0,1,2,3],hp=(()=>{class t{ngZone=d(F);scheduler=d(On);errorHandler=d(mn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(xn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Oe(Ie.AfterRenderHooksStart),this.executing=!0;for(let i of pp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Oe(Ie.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[ar]??=[]).push(e),cr(i),i[K]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Cc.AFTER_NEXT_RENDER,e):e()}static \u0275prov=E({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ea=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ar];n&&(this.view[ar]=n.filter(e=>e!==this))}};function lt(t,n){let e=n?.injector??d(se);return xi("NgAfterNextRender"),SI(t,e,n,!0)}function MI(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function SI(t,n,e,i){let r=n.get(wc);r.impl??=n.get(hp);let o=n.get(xn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Lt):null,s=n.get(eo,null,{optional:!0}),l=new Ea(r.impl,MI(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var Ub=new x("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(Se)})});function Hb(t,n,e){let i=t.get(Ub);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function TI(t,n){let e=t.get(Ub);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function kI(t,n){for(let[e,i]of n)Hb(t,i.animateFns)}function R_(t,n,e,i){let r=t?.[_i]?.enter;n!==null&&r&&r.has(e.index)&&kI(i,r)}function to(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;gn(r)?l=r:Jn(r)&&(c=!0,r=r[pn]);let u=Jt(r);t===0&&i!==null?(R_(s,i,o,e),a==null?kb(n,i,u):oc(n,i,u,a||null,!0)):t===1&&i!==null?(R_(s,i,o,e),oc(n,i,u,a||null,!0),EI(o,u)):t===2?(s?.[_i]?.leave?.has(o.index)&&II(o,u),Ca.delete(u),O_(s,o,e,f=>{if(Ca.has(u)){Ca.delete(u);return}Ab(n,u,c,f)})):t===3&&(Ca.delete(u),O_(s,o,e,()=>{n.destroyNode(u)})),l!=null&&UI(n,t,e,l,o,i,a)}}function AI(t,n){zb(t,n),n[pn]=null,n[Ot]=null}function RI(t,n,e,i,r,o){i[pn]=r,i[Ot]=n,Dc(t,i,e,1,r,o)}function zb(t,n){n[hn].changeDetectionScheduler?.notify(9),Dc(t,n,n[Be],2,null,null)}function OI(t){let n=t[Kr];if(!n)return Cm(t[q],t);for(;n;){let e=null;if(Jn(n))e=n[Kr];else{let i=n[Qe];i&&(e=i)}if(!e){for(;n&&!n[Xt]&&n!==t;)Jn(n)&&Cm(n[q],n),n=n[st];n===null&&(n=t),Jn(n)&&Cm(n[q],n),e=n&&n[Xt]}n=e}}function gp(t,n){let e=t[sr],i=e.indexOf(n);e.splice(i,1)}function xc(t,n){if(lr(n))return;let e=n[Be];e.destroyNode&&Dc(t,n,e,3,null,null),OI(n)}function Cm(t,n){if(lr(n))return;let e=W(null);try{n[K]&=-129,n[K]|=256,n[Wt]&&ui(n[Wt]),FI(t,n),PI(t,n),n[q].type===1&&n[Be].destroy();let i=n[vi];if(i!==null&&gn(n[st])){i!==n[st]&&gp(i,n);let r=n[Nn];r!==null&&r.detachView(t)}Om(n)}finally{W(e)}}function O_(t,n,e,i){let r=t?.[_i];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&fr.add(t[Xn]),Hb(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:u}=c();s.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),NI(t,i)}else t&&fr.delete(t[Xn]),i(!1)},r)}function NI(t,n){let e=t[_i]?.running;if(e){e.then(()=>{t[_i].running=void 0,fr.delete(t[Xn]),n(!0)});return}n(!1)}function PI(t,n){let e=t.cleanup,i=n[Qr];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Qr]=null);let r=n[Yn];if(r!==null){n[Yn]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[mi];if(o!==null){n[mi]=null;for(let a of o)a.destroy()}}function FI(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof ur)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Oe(Ie.LifecycleHookStart,s,l);try{l.call(s)}finally{Oe(Ie.LifecycleHookEnd,s,l)}}else{Oe(Ie.LifecycleHookStart,r,o);try{o.call(r)}finally{Oe(Ie.LifecycleHookEnd,r,o)}}}}}function $b(t,n,e){return LI(t,n.parent,e)}function LI(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[pn];if(Pn(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Cn.None||r===Cn.Emulated)return null}return en(i,e)}function Wb(t,n,e){return BI(t,n,e)}function jI(t,n,e){return t.type&40?en(t,e):null}var BI=jI,N_;function vp(t,n,e,i){let r=$b(t,i,n),o=n[Be],a=i.parent||n[Ot],s=Wb(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)T_(o,r,e[l],s,!1);else T_(o,r,e,s,!1);N_!==void 0&&N_(o,i,n,e,r)}function wa(t,n){if(n!==null){let e=n.type;if(e&3)return en(n,t);if(e&4)return Lm(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return wa(t,i);{let r=t[n.index];return gn(r)?Lm(-1,r):Jt(r)}}else{if(e&128)return wa(t,n.next);if(e&32)return mp(n,t)()||Jt(t[n.index]);{let i=Gb(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=pi(t[Nt]);return wa(r,i)}else return wa(t,n.next)}}}return null}function Gb(t,n){if(n!==null){let i=t[Nt][Ot],r=n.projection;return i.projection[r]}return null}function Lm(t,n){let e=Qe+t+1;if(e<n.length){let i=n[e],r=i[q].firstChild;if(r!==null)return wa(i,r)}return n[bi]}function _p(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Kn];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&ro(Jt(l),i),e.flags|=2),!_c(e))if(c&8)_p(t,n,e.child,i,r,o,!1),to(n,t,s,r,l,e,o,i);else if(c&32){let u=mp(e,i),f;for(;f=u();)to(n,t,s,r,f,e,o,i);to(n,t,s,r,l,e,o,i)}else c&16?qb(t,n,i,e,r,o):to(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function Dc(t,n,e,i,r,o){_p(e,i,t.firstChild,n,r,o,!1)}function VI(t,n,e){let i=n[Be],r=$b(t,e,n),o=e.parent||n[Ot],a=Wb(o,e,n);qb(i,0,n,e,r,a)}function qb(t,n,e,i,r,o){let a=e[Nt],l=a[Ot].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];to(n,t,e[Kn],r,u,i,o,e)}else{let c=l,u=a[st];hb(i)&&(c.flags|=128),_p(t,n,c,u,r,o,!0)}}function UI(t,n,e,i,r,o,a){let s=i[bi],l=Jt(i);s!==l&&to(n,t,e,o,s,r,a);for(let c=Qe;c<i.length;c++){let u=i[c];Dc(u[q],u,t,n,o,s)}}function HI(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:wn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=wn.Important),t.setStyle(e,i,r,o))}}function Zb(t,n,e,i,r){let o=Ln(),a=i&2;try{Ci(-1),a&&n.length>Ue&&Vb(t,n,Ue,!1);let s=a?Ie.TemplateUpdateStart:Ie.TemplateCreateStart;Oe(s,r,e),e(i,r)}finally{Ci(o);let s=a?Ie.TemplateUpdateEnd:Ie.TemplateCreateEnd;Oe(s,r,e)}}function bp(t,n,e){ZI(t,n,e),(e.flags&64)===64&&YI(t,n,e)}function Ec(t,n,e=en){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function zI(t,n,e,i){let o=i.get(xb,wb)||e===Cn.ShadowDom||e===Cn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return $I(a),a}function $I(t){WI(t)}var WI=()=>null;function GI(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function qI(t,n,e,i,r,o){let a=n[q];if(Ic(t,a,n,e,i)){Pn(t)&&Qb(n,t.index);return}t.type&3&&(e=GI(e)),Yb(t,n,e,i,r,o)}function Yb(t,n,e,i,r,o){if(t.type&3){let a=en(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function Qb(t,n){let e=tn(n,t);e[K]&16||(e[K]|=64)}function ZI(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Pn(e)&&xI(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||ic(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Da(n,t,a,e);if(ro(l,n),o!==null&&XI(n,a-i,l,s,e,o),Fn(s)){let c=tn(e.index,n);c[tt]=Da(n,t,a,e)}}}function YI(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=s_();try{Ci(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];Bl(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&QI(l,c)}}finally{Ci(-1),Bl(a)}}function QI(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Kb(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Lb(n,o.selectors,!1)&&(i??=[],Fn(o)?i.unshift(o):i.push(o))}return i}function KI(t,n,e,i,r,o){let a=en(t,n);Xb(n[Be],a,o,t.value,e,i,r)}function Xb(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?qr(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function XI(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Pm(i,e,l,c)}}function Jb(t,n,e,i,r){let o=Ue+e,a=n[q],s=r(a,n,t,i,e);n[o]=s,Jr(t,!0);let l=t.type===2;return l?(Rb(n[Be],s,t),(Jv()===0||pa(t))&&ro(s,n),e_()):ro(s,n),zl()&&(!l||!_c(t))&&vp(a,n,s,t),t}function ey(t){let n=t;return lm()?cm():(n=n.parent,Jr(n,!1)),n}function JI(t,n){let e=t[Kn];if(!e)return;let i;try{i=e.get(qt,null)}catch{i=null}i?.(n)}function Ic(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],u=a[l+1],f=n.data[c];Pm(f,e[c],u,r),s=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];Pm(u,c,i,r),s=!0}return s}function eM(t,n){let e=tn(n,t),i=e[q];tM(i,e);let r=e[pn];r!==null&&e[ir]===null&&(e[ir]=Db(r,e[Kn])),Oe(Ie.ComponentStart);try{yp(i,e,e[tt])}finally{Oe(Ie.ComponentEnd,e[tt])}}function tM(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function yp(t,n,e){Ul(n);try{let i=t.viewQuery;i!==null&&Nm(1,i,e);let r=t.template;r!==null&&Zb(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Nn]?.finishViewCreation(t),t.staticContentQueries&&Eb(t,n),t.staticViewQueries&&Nm(2,t.viewQuery,e);let o=t.components;o!==null&&nM(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[K]&=-5,Hl()}}function nM(t,n){for(let e=0;e<n.length;e++)eM(t,n[e])}function Na(t,n,e,i){let r=W(null);try{let o=n.tView,s=t[K]&4096?4096:16,l=up(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[vi]=c;let u=t[Nn];return u!==null&&(l[Nn]=u.createEmbeddedView(o)),yp(o,l,e),l}finally{W(r)}}function oo(t,n){return!n||n.firstChild===null||hb(t)}function Ia(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Jt(o)),gn(o)&&ty(o,i);let a=e.type;if(a&8)Ia(t,n,e.child,i);else if(a&32){let s=mp(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=Gb(n,e);if(Array.isArray(s))i.push(...s);else{let l=pi(n[Nt]);Ia(l[q],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function ty(t,n){for(let e=Qe;e<t.length;e++){let i=t[e],r=i[q].firstChild;r!==null&&Ia(i[q],i,r,n)}t[bi]!==t[pn]&&n.push(t[bi])}function ny(t){if(t[ar]!==null){for(let n of t[ar])n.impl.addSequence(n);t[ar].length=0}}var iy=[];function iM(t){return t[Wt]??rM(t)}function rM(t){let n=iy.pop()??Object.create(aM);return n.lView=t,n}function oM(t){t.lView[Wt]!==t&&(t.lView=null,iy.push(t))}var aM=J(D({},li),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{cr(t.lView)},consumerOnSignalRead(){this.lView[Wt]=this}});function sM(t){let n=t[Wt]??Object.create(lM);return n.lView=t,n}var lM=J(D({},li),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=pi(t.lView);for(;n&&!ry(n[q]);)n=pi(n);n&&Xf(n)},consumerOnSignalRead(){this.lView[Wt]=this}});function ry(t){return t.type!==2}function oy(t){if(t[mi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[mi])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[K]&8192)}}var cM=100;function ay(t,n=0){let i=t[hn].rendererFactory,r=!1;r||i.begin?.();try{dM(t,n)}finally{r||i.end?.()}}function dM(t,n){let e=dm();try{oa(!0),jm(t,n);let i=0;for(;ha(t);){if(i===cM)throw new R(103,!1);i++,jm(t,1)}}finally{oa(e)}}function uM(t,n,e,i){if(lr(n))return;let r=n[K],o=!1,a=!1;Ul(n);let s=!0,l=null,c=null;o||(ry(t)?(c=iM(n),l=Gn(c)):js()===null?(s=!1,c=sM(n),l=Gn(c)):n[Wt]&&(ui(n[Wt]),n[Wt]=null));try{Kf(n),r_(t.bindingStartIndex),e!==null&&Zb(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let h=t.preOrderCheckHooks;h!==null&&Yl(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Ql(n,h,0,null),bm(n,0)}if(a||fM(n),oy(n),sy(n,0),t.contentQueries!==null&&Eb(t,n),!o)if(u){let h=t.contentCheckHooks;h!==null&&Yl(n,h)}else{let h=t.contentHooks;h!==null&&Ql(n,h,1),bm(n,1)}pM(t,n);let f=t.components;f!==null&&cy(n,f,0);let p=t.viewQuery;if(p!==null&&Nm(2,p,i),!o)if(u){let h=t.viewCheckHooks;h!==null&&Yl(n,h)}else{let h=t.viewHooks;h!==null&&Ql(n,h,2),bm(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ol]){for(let h of n[Ol])h();n[Ol]=null}o||(ny(n),n[K]&=-73)}catch(u){throw o||cr(n),u}finally{c!==null&&(di(c,l),s&&oM(c)),Hl()}}function sy(t,n){for(let e=vb(t);e!==null;e=_b(e))for(let i=Qe;i<e.length;i++){let r=e[i];ly(r,n)}}function fM(t){for(let n=vb(t);n!==null;n=_b(n)){if(!(n[K]&2))continue;let e=n[sr];for(let i=0;i<e.length;i++){let r=e[i];Xf(r)}}}function mM(t,n,e){Oe(Ie.ComponentStart);let i=tn(n,t);try{ly(i,e)}finally{Oe(Ie.ComponentEnd,i[tt])}}function ly(t,n){Fl(t)&&jm(t,n)}function jm(t,n){let i=t[q],r=t[K],o=t[Wt],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&Fr(o)),a||=!1,o&&(o.dirty=!1),t[K]&=-9217,a)uM(i,t,i.template,t[tt]);else if(r&8192){let s=W(null);try{oy(t),sy(t,1);let l=i.components;l!==null&&cy(t,l,1),ny(t)}finally{W(s)}}}function cy(t,n,e){for(let i=0;i<n.length;i++)mM(t,n[i],e)}function pM(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Ci(~r);else{let o=r,a=e[++i],s=e[++i];a_(a,o);let l=n[o];Oe(Ie.HostBindingsUpdateStart,l);try{s(2,l)}finally{Oe(Ie.HostBindingsUpdateEnd,l)}}}}finally{Ci(-1)}}function Cp(t,n){let e=dm()?64:1088;for(t[hn].changeDetectionScheduler?.notify(n);t;){t[K]|=e;let i=pi(t);if(Xr(t)&&!i)return t;t=i}return null}function dy(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function uy(t,n){let e=Qe+n;if(e<t.length)return t[e]}function Pa(t,n,e,i=!0){let r=n[q];if(hM(r,n,t,e),i){let a=Lm(e,t),s=n[Be],l=s.parentNode(t[bi]);l!==null&&RI(r,t[Ot],s,n,l,a)}let o=n[ir];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function fy(t,n){let e=Ma(t,n);return e!==void 0&&xc(e[q],e),e}function Ma(t,n){if(t.length<=Qe)return;let e=Qe+n,i=t[e];if(i){let r=i[vi];r!==null&&r!==t&&gp(r,i),n>0&&(t[e-1][Xt]=i[Xt]);let o=ua(t,Qe+n);AI(i[q],i);let a=o[Nn];a!==null&&a.detachView(o[q]),i[st]=null,i[Xt]=null,i[K]&=-129}return i}function hM(t,n,e,i){let r=Qe+i,o=e.length;i>0&&(e[r-1][Xt]=n),i<o-Qe?(n[Xt]=e[r],Bf(e,Qe+i,n)):(e.push(n),n[Xt]=null),n[st]=e;let a=n[vi];a!==null&&e!==a&&my(a,n);let s=n[Nn];s!==null&&s.insertView(t),Ll(n),n[K]|=128}function my(t,n){let e=t[sr],i=n[st];if(Jn(i))t[K]|=2;else{let r=i[st][Nt];n[Nt]!==r&&(t[K]|=2)}e===null?t[sr]=[n]:e.push(n)}var wi=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[q];return Ia(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[tt]}set context(n){this._lView[tt]=n}get destroyed(){return lr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[st];if(gn(n)){let e=n[ma],i=e?e.indexOf(this):-1;i>-1&&(Ma(n,i),ua(e,i))}this._attachedToViewContainer=!1}xc(this._lView[q],this._lView)}onDestroy(n){Jf(this._lView,n)}markForCheck(){Cp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[K]&=-129}reattach(){Ll(this._lView),this._lView[K]|=128}detectChanges(){this._lView[K]|=1024,ay(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new R(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Xr(this._lView),e=this._lView[vi];e!==null&&!n&&gp(e,this._lView),zb(this._lView[q],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new R(902,!1);this._appRef=n;let e=Xr(this._lView),i=this._lView[vi];i!==null&&!e&&my(i,this._lView),Ll(this._lView)}};var It=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=gM;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Na(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new wi(o)}}return t})();function gM(){return Mc(Et(),Y())}function Mc(t,n){return t.type&4?new It(n,t,lo(t,n)):null}function uo(t,n,e,i,r){let o=t.data[n];if(o===null)o=vM(t,n,e,i,r),o_()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=t_();o.injectorIndex=a===null?-1:a.injectorIndex}return Jr(o,!0),o}function vM(t,n,e,i,r){let o=sm(),a=lm(),s=a?o:o&&o.parent,l=t.data[n]=bM(t,s,e,n,i,r);return _M(t,l,o,a),l}function _M(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function bM(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return rm()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function yM(t){let n=t[qf]??[],i=t[st][Be],r=[];for(let o of n)o.data[Cb]!==void 0?r.push(o):CM(o,i);t[qf]=r}function CM(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[yb];for(;e<r;){let o=i.nextSibling;Ab(n,i,!1),i=o,e++}}}var wM=()=>null,xM=()=>null;function ac(t,n){return wM(t,n)}function py(t,n,e){return xM(t,n,e)}var hy=class{},Sc=class{},Bm=class{resolveComponentFactory(n){throw new R(917,!1)}},Fa=class{static NULL=new Bm},at=class{},Le=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>DM()}return t})();function DM(){let t=Y(),n=Et(),e=tn(n.index,t);return(Jn(e)?e:t)[Be]}var gy=(()=>{class t{static \u0275prov=E({token:t,providedIn:"root",factory:()=>null})}return t})();var Xl={},Vm=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Xl,i);return r!==Xl||e===Xl?r:this.parentInjector.get(n,e,i)}};function sc(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Il(r,s);else if(o==2){let l=s,c=n[++a];i=Il(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function N(t,n=0){let e=Y();if(e===null)return G(t,n);let i=Et();return ub(i,e,vt(t),n)}function vy(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let u of a)if(u.resolveHostDirectives!==null){[s,l,c]=u.resolveHostDirectives(a);break}MM(t,n,e,s,o,l,c)}o!==null&&i!==null&&EM(e,i,o)}function EM(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new R(-301,!1);i.push(n[r],o)}}function IM(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function MM(t,n,e,i,r,o,a){let s=i.length,l=null;for(let p=0;p<s;p++){let h=i[p];l===null&&Fn(h)&&(l=h,IM(t,e,p)),Am(ic(e,n),t,h.type)}OM(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let h=i[p];h.providersResolver&&h.providersResolver(h)}let c=!1,u=!1,f=Bb(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let h=i[p];if(e.mergedAttrs=io(e.mergedAttrs,h.hostAttrs),TM(t,e,n,f,h),RM(f,h,r),a!==null&&a.has(h)){let[k,O]=a.get(h);e.directiveToIndex.set(h.type,[f,k+e.directiveStart,O+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let y=h.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}SM(t,e,o)}function SM(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))P_(0,n,r,i),P_(1,n,r,i),L_(n,i,!1);else{let o=e.get(r);F_(0,n,o,i),F_(1,n,o,i),L_(n,i,!0)}}}function P_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),_y(n,o)}}function F_(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),_y(n,a)}}function _y(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function L_(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||cp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){a??=[],a.push(c[u+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function TM(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=fi(r.type,!0)),a=new ur(o,Fn(r),N,null);t.blueprint[i]=a,e[i]=a,kM(t,n,i,Bb(t,e,r.hostVars,jt),r)}function kM(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;AM(a)!=s&&a.push(s),a.push(e,i,o)}}function AM(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function RM(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Fn(n)&&(e[""]=t)}}function OM(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function by(t,n,e,i,r,o,a,s){let l=n[q],c=l.consts,u=Gt(c,a),f=uo(l,t,e,i,u);return o&&vy(l,n,f,Gt(c,s),r),f.mergedAttrs=io(f.mergedAttrs,f.attrs),f.attrs!==null&&sc(f,f.attrs,!1),f.mergedAttrs!==null&&sc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function yy(t,n){nb(t,n),Zf(n)&&t.queries.elementEnd(n)}function NM(t,n,e,i,r,o){let a=n.consts,s=Gt(a,r),l=uo(n,t,e,i,s);if(l.mergedAttrs=io(l.mergedAttrs,l.attrs),o!=null){let c=Gt(a,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&sc(l,l.attrs,!1),l.mergedAttrs!==null&&sc(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function wp(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function xp(t,n,e){return t[n]=e}function PM(t,n){return t[n]}function nn(t,n,e){if(e===jt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Cy(t,n,e,i){let r=nn(t,n,e);return nn(t,n+1,i)||r}function wm(t,n,e){return function i(r){let o=Pn(t)?tn(t.index,n):n;Cp(o,5);let a=n[tt],s=j_(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=j_(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function j_(t,n,e,i){let r=W(null);try{return Oe(Ie.OutputStart,n,e),e(i)!==!1}catch(o){return JI(t,o),!1}finally{Oe(Ie.OutputEnd,n,e),W(r)}}function FM(t,n,e,i,r,o,a,s){let l=pa(t),c=!1,u=null;if(!i&&l&&(u=jM(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=a,u.__ngLastListenerFn__=a,c=!0}else{let f=en(t,e),p=i?i(f):f;JE(e,p,o,s);let h=r.listen(p,o,s);if(!LM(o)){let y=i?k=>i(Jt(k[t.index])):t.index;wy(y,n,e,o,s,h,!1)}}return c}function LM(t){return t.startsWith("animation")||t.startsWith("transition")}function jM(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Qr],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function wy(t,n,e,i,r,o,a){let s=n.firstCreatePass?tm(n):null,l=em(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function B_(t,n,e,i,r,o){let a=n[e],s=n[q],c=s.data[e].outputs[i],f=a[c].subscribe(o);wy(t.index,s,n,r,o,f,!0)}var Um=Symbol("BINDING");function xy(t){return t.debugInfo?.className||t.type.name||null}var lc=class extends Fa{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Qn(n);return new mr(e,this.ngModule)}};function BM(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&yc.SignalBased)!==0};return r&&(o.transform=r),o})}function VM(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function UM(t,n,e){let i=n instanceof Se?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Vm(e,i):e}function HM(t){let n=t.get(at,null);if(n===null)throw new R(407,!1);let e=t.get(gy,null),i=t.get(On,null),r=t.get(xn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function zM(t,n){let e=Dy(t);return Tb(n,e,e==="svg"?Gv:e==="math"?qv:null)}function Dy(t){return(t.selectors[0][0]||"div").toLowerCase()}var mr=class extends Sc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=BM(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=VM(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=bI(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Oe(Ie.DynamicComponentStart);let s=W(null);try{let l=this.componentDef,c=UM(l,r||this.ngModule,n),u=HM(c),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(xy(l),()=>this.createComponentRef(u,c,e,i,o,a)):this.createComponentRef(u,c,e,i,o,a)}finally{W(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=$M(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),u=r?zI(c,r,s.encapsulation,e):zM(s,c),f=a?.some(V_)||o?.some(y=>typeof y!="function"&&y.bindings.some(V_)),p=up(null,l,null,512|jb(s),null,null,n,c,e,null,Db(u,e,!0));p[Ue]=u,Ul(p);let h=null;try{let y=by(Ue,p,2,"#host",()=>l.directiveRegistry,!0,0);Rb(c,u,y),ro(u,p),bp(l,p,y),Ib(l,y,p),yy(l,y),i!==void 0&&GM(y,this.ngContentSelectors,i),h=tn(y.index,p),p[tt]=h[tt],yp(l,p,null)}catch(y){throw h!==null&&Om(h),Om(p),y}finally{Oe(Ie.DynamicComponentEnd),Hl()}return new cc(this.componentType,p,!!f)}};function $M(t,n,e,i){let r=t?["ng-version","21.2.10"]:yI(n.selectors[0]),o=null,a=null,s=0;if(e)for(let u of e)s+=u[Um].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(a??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let p of f.bindings){s+=p[Um].requiredVars;let h=u+1;p.create&&(p.targetIdx=h,(o??=[]).push(p)),p.update&&(p.targetIdx=h,(a??=[]).push(p))}}let l=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,p=Ff(f);l.push(p)}return dp(0,null,WM(o,a),1,s,l,null,null,null,[r],null)}function WM(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function V_(t){let n=t[Um].kind;return n==="input"||n==="twoWay"}var cc=class extends hy{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Nl(e[q],Ue),this.location=lo(this._tNode,e),this.instance=tn(this._tNode.index,e)[tt],this.hostView=this.changeDetectorRef=new wi(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Ic(i,r[q],r,n,e);this.previousInputValues.set(n,e);let a=tn(i.index,r);Cp(a,1)}get injector(){return new dr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function GM(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var _t=(()=>{class t{static __NG_ELEMENT_ID__=qM}return t})();function qM(){let t=Et();return Ey(t,Y())}var Hm=class t extends _t{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return lo(this._hostTNode,this._hostLView)}get injector(){return new dr(this._hostTNode,this._hostLView)}get parentInjector(){let n=rp(this._hostTNode,this._hostLView);if(ob(n)){let e=tc(n,this._hostLView),i=ec(n),r=e[q].data[i+8];return new dr(r,e)}else return new dr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=U_(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Qe}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=ac(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,oo(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!IE(n),c;if(l)c=e;else{let O=e||{};c=O.index,i=O.injector,r=O.projectableNodes,o=O.environmentInjector||O.ngModuleRef,a=O.directives,s=O.bindings}let u=l?n:new mr(Qn(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let L=(l?f:this.parentInjector).get(Se,null);L&&(o=L)}let p=Qn(u.componentType??{}),h=ac(this._lContainer,p?.id??null),y=h?.firstChild??null,k=u.create(f,r,y,o,a,s);return this.insertImpl(k.hostView,c,oo(this._hostTNode,h)),k}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Yv(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[st],c=new t(l,l[Ot],l[st]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Pa(a,r,o,i),n.attachToViewContainerRef(),Bf(xm(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=U_(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Ma(this._lContainer,e);i&&(ua(xm(this._lContainer),e),xc(i[q],i))}detach(n){let e=this._adjustIndex(n,-1),i=Ma(this._lContainer,e);return i&&ua(xm(this._lContainer),e)!=null?new wi(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function U_(t){return t[ma]}function xm(t){return t[ma]||(t[ma]=[])}function Ey(t,n){let e,i=n[t.index];return gn(i)?e=i:(e=dy(i,n,null,t),n[t.index]=e,fp(n,e)),YM(e,n,t,i),new Hm(e,t,n)}function ZM(t,n){let e=t[Be],i=e.createComment(""),r=en(n,t),o=e.parentNode(r);return oc(e,o,i,e.nextSibling(r),!1),i}var YM=XM,QM=()=>!1;function KM(t,n,e){return QM(t,n,e)}function XM(t,n,e,i){if(t[bi])return;let r;e.type&8?r=Jt(i):r=ZM(n,e),t[bi]=r}var zm=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},$m=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Ep(n,e).matches!==null&&this.queries[e].setDirty()}},dc=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=iS(n):this.predicate=n}},Wm=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Gm=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,JM(e,o)),this.matchTNodeWithReadOption(n,e,Kl(e,n,o,!1,!1))}else i===It?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Kl(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===j||r===_t||r===It&&e.type&4)this.addMatch(e.index,-2);else{let o=Kl(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function JM(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function eS(t,n){return t.type&11?lo(t,n):t.type&4?Mc(t,n):null}function tS(t,n,e,i){return e===-1?eS(n,t):e===-2?nS(t,n,i):Da(t,t[q],e,n)}function nS(t,n,e){if(e===j)return lo(n,t);if(e===It)return Mc(n,t);if(e===_t)return Ey(n,t)}function Iy(t,n,e,i){let r=n[Nn].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let u=o[c];s.push(tS(n,u,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function qm(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Iy(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],u=n[-l];for(let f=Qe;f<u.length;f++){let p=u[f];p[vi]===p[st]&&qm(p[q],p,c,i)}if(u[sr]!==null){let f=u[sr];for(let p=0;p<f.length;p++){let h=f[p];qm(h[q],h,c,i)}}}}}return i}function Dp(t,n){return t[Nn].queries[n].queryList}function My(t,n,e){let i=new yn((e&4)===4);return Xv(t,n,i,i.destroy),(n[Nn]??=new $m).queries.push(new zm(i))-1}function Sy(t,n,e){let i=Ge();return i.firstCreatePass&&(ky(i,new dc(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),My(i,Y(),n)}function Ty(t,n,e,i){let r=Ge();if(r.firstCreatePass){let o=Et();ky(r,new dc(n,e,i),o.index),rS(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return My(r,Y(),e)}function iS(t){return t.split(",").map(n=>n.trim())}function ky(t,n,e){t.queries===null&&(t.queries=new Wm),t.queries.track(new Gm(n,e))}function rS(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Ep(t,n){return t.queries.getByIndex(n)}function Ay(t,n){let e=t[q],i=Ep(e,n);return i.crossesNgTemplate?qm(e,t,n,[]):Iy(e,t,i,n)}function Ry(t,n,e){let i,r=Zo(()=>{i._dirtyCounter();let o=oS(i,t);if(n&&o===void 0)throw new R(-951,!1);return o});return i=r[et],i._dirtyCounter=U(0),i._flatValue=void 0,r}function Ip(t){return Ry(!0,!1,t)}function Mp(t){return Ry(!0,!0,t)}function Oy(t,n){let e=t[et];e._lView=Y(),e._queryIndex=n,e._queryList=Dp(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function oS(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[K]&4)return n?void 0:Dt;let r=Dp(e,i),o=Ay(e,i);return r.reset(o,pb),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Bn=class{},Tc=class{};var uc=class extends Bn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new lc(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Pf(n);this._bootstrapComponents=Pb(o.bootstrap),this._r3Injector=mm(n,e,[{provide:Bn,useValue:this},{provide:Fa,useValue:this.componentFactoryResolver},...i],ca(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},fc=class extends Tc{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new uc(this.moduleType,n,[])}};var Sa=class extends Bn{injector;componentFactoryResolver=new lc(this);instance=null;constructor(n){super();let e=new Ji([...n.providers,{provide:Bn,useValue:this},{provide:Fa,useValue:this.componentFactoryResolver}],n.parent||Yr(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function La(t,n,e=null){return new Sa({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var aS=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Hf(!1,e.type),r=i.length>0?La([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=E({token:t,providedIn:"environment",factory:()=>new t(G(Se))})}return t})();function M(t){return ka(()=>{let n=Ny(t),e=J(D({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===op.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(aS).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Cn.Emulated,styles:t.styles||Dt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&xi("NgStandalone"),Py(e);let i=t.dependencies;return e.directiveDefs=H_(i,sS),e.pipeDefs=H_(i,Av),e.id=dS(e),e})}function sS(t){return Qn(t)||Ff(t)}function re(t){return ka(()=>({type:t.type,bootstrap:t.bootstrap||Dt,declarations:t.declarations||Dt,imports:t.imports||Dt,exports:t.exports||Dt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function lS(t,n){if(t==null)return gi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=yc.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function cS(t){if(t==null)return gi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function P(t){return ka(()=>{let n=Ny(t);return Py(n),n})}function Sp(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Ny(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||gi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Dt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:lS(t.inputs,n),outputs:cS(t.outputs),debugInfo:null}}function Py(t){t.features?.forEach(n=>n(t))}function H_(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function dS(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function uS(t){return Object.getPrototypeOf(t.prototype).constructor}function Ce(t){let n=uS(t.type),e=!0,i=[t];for(;n;){let r;if(Fn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new R(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Dm(t.inputs),a.declaredInputs=Dm(t.declaredInputs),a.outputs=Dm(t.outputs);let s=r.hostBindings;s&&gS(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&pS(t,l),c&&hS(t,c),fS(t,r),kv(t.outputs,r.outputs),Fn(r)&&r.data.animation){let u=t.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Ce&&(e=!1)}}n=Object.getPrototypeOf(n)}mS(i)}function fS(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function mS(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=io(r.hostAttrs,e=io(e,r.hostAttrs))}}function Dm(t){return t===gi?{}:t===Dt?[]:t}function pS(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function hS(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function gS(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Fy(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=io(t.mergedAttrs,t.attrs);let u=t.tView=dp(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Jr(t,!1);let l=_S(e,n,t,i);zl()&&vp(e,n,l,t),ro(l,n);let c=dy(l,n,l,t);n[i+Ue]=c,fp(n,c),KM(c,t,n)}function vS(t,n,e,i,r,o,a,s,l,c,u){let f=e+Ue,p;return n.firstCreatePass?(p=uo(n,f,4,a||null,s||null),im()&&vy(n,t,p,Gt(n.consts,c),Kb),nb(n,p)):p=n.data[f],Fy(p,t,n,e,i,r,o,l),pa(p)&&bp(n,t,p),c!=null&&Ec(t,p,u),p}function ao(t,n,e,i,r,o,a,s,l,c,u){let f=e+Ue,p;if(n.firstCreatePass){if(p=uo(n,f,4,a||null,s||null),c!=null){let h=Gt(n.consts,c);p.localNames=[];for(let y=0;y<h.length;y+=2)p.localNames.push(h[y],-1)}}else p=n.data[f];return Fy(p,t,n,e,i,r,o,l),c!=null&&Ec(t,p,u),p}function Mt(t,n,e,i,r,o,a,s){let l=Y(),c=Ge(),u=Gt(c.consts,o);return vS(l,c,t,n,e,i,r,u,void 0,a,s),Mt}function fo(t,n,e,i,r,o,a,s){let l=Y(),c=Ge(),u=Gt(c.consts,o);return ao(l,c,t,n,e,i,r,u,void 0,a,s),fo}var _S=bS;function bS(t,n,e,i){return $l(!0),n[Be].createComment("")}var Tp=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function ti(t){return typeof t=="function"&&t[et]!==void 0}var kp=new x("");function Di(t){return!!t&&typeof t.then=="function"}function Ap(t){return!!t&&typeof t.subscribe=="function"}var Ly=new x("");var Rp=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(Ly,{optional:!0})??[];injector=d(se);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=ft(this.injector,r);if(Di(o))e.push(o);else if(Ap(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),kc=new x("");function jy(){Yu(()=>{let t="";throw new R(600,t)})}function By(t){return t.isBoundToModule}var yS=10;var rn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(qt);afterRenderManager=d(wc);zonelessEnabled=d(ba);rootEffectScheduler=d(Gl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new T;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(ei);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ee(e=>!e))}constructor(){d(xn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(Se);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=se.NULL){return this._injector.get(F).run(()=>{Oe(Ie.BootstrapComponentStart);let a=e instanceof Sc;if(!this._injector.get(Rp).done){let y="";throw new R(405,y)}let l;a?l=e:l=this._injector.get(Fa).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=By(l)?void 0:this._injector.get(Bn),u=i||l.selector,f=l.create(r,[],u,c),p=f.location.nativeElement,h=f.injector.get(kp,null);return h?.registerApplication(p),f.onDestroy(()=>{this.detachView(f.hostView),xa(this.components,f),h?.unregisterApplication(p)}),this._loadComponent(f),Oe(Ie.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Oe(Ie.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Cc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Oe(Ie.ChangeDetectionEnd),new R(101,!1);let e=W(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,W(e),this.afterTick.next(),Oe(Ie.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(at,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<yS;){Oe(Ie.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Oe(Ie.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ha(r))continue;let o=i&&!this.zonelessEnabled?0:1;ay(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ha(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;xa(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(kc,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>xa(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new R(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function xa(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Ac(t,n){let e=Y(),i=yi();if(nn(e,i,n)){let r=Ge(),o=_a();if(Ic(o,r,e,t,n))Pn(o)&&Qb(e,o.index);else{let s=en(o,e);Xb(e[Be],s,null,o.value,t,n,null)}}return Ac}function we(t,n,e,i){let r=Y(),o=yi();if(nn(r,o,n)){let a=Ge(),s=_a();KI(s,r,t,n,e,i)}return we}var Zm=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Em(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function CS(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){W(i);let c=n.length-1;for(W(null);a<=s&&a<=c;){let u=t.at(a),f=n[a],p=Em(a,u,a,f,e);if(p!==0){p<0&&t.updateValue(a,f),a++;continue}let h=t.at(s),y=n[c],k=Em(s,h,c,y,e);if(k!==0){k<0&&t.updateValue(s,y),s--,c--;continue}let O=e(a,u),L=e(s,h),Me=e(a,f);if(Object.is(Me,L)){let ct=e(c,y);Object.is(ct,O)?(t.swap(a,s),t.updateValue(s,y),c--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new mc,o??=$_(t,a,s,e),Ym(t,r,a,Me))t.updateValue(a,f),a++,s++;else if(o.has(Me))r.set(O,t.detach(a)),s--;else{let ct=t.create(a,n[a]);t.attach(a,ct),a++,s++}}for(;a<=c;)z_(t,r,e,a,n[a]),a++}else if(n!=null){W(i);let c=n[Symbol.iterator]();W(null);let u=c.next();for(;!u.done&&a<=s;){let f=t.at(a),p=u.value,h=Em(a,f,a,p,e);if(h!==0)h<0&&t.updateValue(a,p),a++,u=c.next();else{r??=new mc,o??=$_(t,a,s,e);let y=e(a,p);if(Ym(t,r,a,y))t.updateValue(a,p),a++,s++,u=c.next();else if(!o.has(y))t.attach(a,t.create(a,p)),a++,s++,u=c.next();else{let k=e(a,f);r.set(k,t.detach(a)),s--}}}for(;!u.done;)z_(t,r,e,t.length,u.value),u=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Ym(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function z_(t,n,e,i,r){if(Ym(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function $_(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var mc=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){xi("NgControlFlow");let l=Y(),c=Ge(),u=Gt(c.consts,o);return ao(l,c,t,n,e,i,r,u,256,a,s),Op}function Op(t,n,e,i,r,o,a,s){xi("NgControlFlow");let l=Y(),c=Ge(),u=Gt(c.consts,o);return ao(l,c,t,n,e,i,r,u,512,a,s),Op}function w(t,n){xi("NgControlFlow");let e=Y(),i=yi(),r=e[i]!==jt?e[i]:-1,o=r!==-1?pc(e,Ue+r):void 0,a=0;if(nn(e,i,t)){let s=W(null);try{if(o!==void 0&&fy(o,a),t!==-1){let l=Ue+t,c=pc(e,l),u=Jm(e[q],l),f=py(c,u,e),p=Na(e,u,n,{dehydratedView:f});Pa(c,p,a,oo(u,f))}}finally{W(s)}}else if(o!==void 0){let s=uy(o,a);s!==void 0&&(s[tt]=n)}}var Qm=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Qe}};function ze(t){return t}function Ei(t,n){return n}var Km=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function ge(t,n,e,i,r,o,a,s,l,c,u,f,p){xi("NgControlFlow");let h=Y(),y=Ge(),k=l!==void 0,O=Y(),L=s?a.bind(O[Nt][tt]):a,Me=new Km(k,L);O[Ue+t]=Me,ao(h,y,t+1,n,e,i,r,Gt(y.consts,o),256),k&&ao(h,y,t+2,l,c,u,f,Gt(y.consts,p),512)}var Xm=class extends Zm{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Qe}at(n){return this.getLView(n)[tt].$implicit}attach(n,e){let i=e[ir];this.needsIndexUpdate||=n!==this.length,Pa(this.lContainer,e,n,oo(this.templateTNode,i)),wS(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,xS(this.lContainer,n),DS(this.lContainer,n)}create(n,e){let i=ac(this.lContainer,this.templateTNode.tView.ssrId);return Na(this.hostLView,this.templateTNode,new Qm(this.lContainer,e,n),{dehydratedView:i})}destroy(n){xc(n[q],n)}updateValue(n,e){this.getLView(n)[tt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[tt].$index=n}getLView(n){return ES(this.lContainer,n)}};function ve(t){let n=W(null),e=Ln();try{let i=Y(),r=i[q],o=i[e],a=e+1,s=pc(i,a);if(o.liveCollection===void 0){let c=Jm(r,a);o.liveCollection=new Xm(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(CS(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=yi(),u=l.length===0;if(nn(i,c,u)){let f=e+2,p=pc(i,f);if(u){let h=Jm(r,f),y=py(p,h,i),k=Na(i,h,void 0,{dehydratedView:y});Pa(p,k,0,oo(h,y))}else r.firstUpdatePass&&yM(p),fy(p,0)}}}finally{W(n)}}function pc(t,n){return t[n]}function wS(t,n){if(t.length<=Qe)return;let e=Qe+n,i=t[e],r=i?i[_i]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Kn];TI(o,r),fr.delete(i[Xn]),r.detachedLeaveAnimationFns=void 0}}function xS(t,n){if(t.length<=Qe)return;let e=Qe+n,i=t[e],r=i?i[_i]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function DS(t,n){return Ma(t,n)}function ES(t,n){return uy(t,n)}function Jm(t,n){return Nl(t,n)}function S(t,n,e){let i=Y(),r=yi();if(nn(i,r,n)){let o=Ge(),a=_a();qI(a,i,t,n,i[Be],e)}return S}function ep(t,n,e,i,r){Ic(n,t,e,r?"class":"style",i)}function v(t,n,e,i){let r=Y(),o=r[q],a=t+Ue,s=o.firstCreatePass?by(a,r,2,n,Kb,im(),e,i):o.data[a];if(Pn(s)){let l=r[hn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(xy(c),()=>(W_(t,n,r,s,i),v))}}return W_(t,n,r,s,i),v}function W_(t,n,e,i,r){if(Jb(i,e,t,n,Vy),pa(i)){let o=e[q];bp(o,e,i),Ib(o,i,e)}r!=null&&Ec(e,i)}function g(){let t=Ge(),n=Et(),e=ey(n);return t.firstCreatePass&&yy(t,e),om(e)&&am(),nm(),e.classesWithoutHost!=null&&RE(e)&&ep(t,e,Y(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&OE(e)&&ep(t,e,Y(),e.stylesWithoutHost,!1),g}function I(t,n,e,i){return v(t,n,e,i),g(),I}function X(t,n,e,i){let r=Y(),o=r[q],a=t+Ue,s=o.firstCreatePass?NM(a,o,2,n,e,i):o.data[a];return Jb(s,r,t,n,Vy),i!=null&&Ec(r,s),X}function ne(){let t=Et(),n=ey(t);return om(n)&&am(),nm(),ne}function xe(t,n,e,i){return X(t,n,e,i),ne(),xe}var Vy=(t,n,e,i,r)=>($l(!0),Tb(n[Be],i,m_()));function Dn(){return Y()}function $e(t,n,e){let i=Y(),r=yi();if(nn(i,r,n)){let o=Ge(),a=_a();Yb(a,i,t,n,i[Be],e)}return $e}var ja="en-US";var IS=ja;function Uy(t){typeof t=="string"&&(IS=t.toLowerCase().replace(/_/g,"-"))}function le(t,n,e){let i=Y(),r=Ge(),o=Et();return MS(r,i,i[Be],o,t,n,e),le}function MS(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=wm(i,n,o),FM(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let p=u[f],h=u[f+1];l??=wm(i,n,o),B_(i,n,p,h,r,l)}if(c&&c.length)for(let f of c)l??=wm(i,n,o),B_(i,n,f,r,r,l)}}function b(t=1){return f_(t)}function SS(t,n){let e=null,i=pI(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Lb(t,o,!0):vI(i,o))return r}return e}function Te(t){let n=Y()[Nt][Ot];if(!n.projection){let e=t?t.length:1,i=n.projection=Lv(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?SS(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function z(t,n=0,e,i,r,o){let a=Y(),s=Ge(),l=i?t+1:null;l!==null&&ao(a,s,l,i,r,o,null,e);let c=uo(s,Ue+t,16,null,e||null);c.projection===null&&(c.projection=n),cm();let f=!a[ir]||rm();a[Nt][Ot].projection[c.projection]===null&&l!==null?TS(a,s,l):f&&!_c(c)&&VI(s,a,c)}function TS(t,n,e){let i=Ue+e,r=n.data[i],o=t[i],a=ac(o,r.tView.ssrId),s=Na(t,r,void 0,{dehydratedView:a});Pa(o,s,0,oo(r,a))}function bt(t,n,e,i){return Ty(t,n,e,i),bt}function Ke(t,n,e){return Sy(t,n,e),Ke}function B(t){let n=Y(),e=Ge(),i=Vl();va(i+1);let r=Ep(e,i);if(t.dirty&&Zv(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Ay(n,i);t.reset(o,pb),t.notifyOnChanges()}return!0}return!1}function V(){return Dp(Y(),Vl())}function Rc(t,n,e,i,r){return Oy(n,Ty(t,e,i,r)),Rc}function Oc(t,n,e,i){return Oy(t,Sy(n,e,i)),Oc}function Nc(t=1){va(Vl()+t)}function on(t){let n=n_();return Pl(n,Ue+t)}function Zl(t,n){return t<<17|n<<2}function pr(t){return t>>17&32767}function kS(t){return(t&2)==2}function AS(t,n){return t&131071|n<<17}function tp(t){return t|2}function so(t){return(t&131068)>>2}function Im(t,n){return t&-131069|n<<2}function RS(t){return(t&1)===1}function np(t){return t|1}function OS(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=pr(a),l=so(a);t[i]=e;let c=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||Zr(f,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let p=pr(t[s+1]);t[i+1]=Zl(p,s),p!==0&&(t[p+1]=Im(t[p+1],i)),t[s+1]=AS(t[s+1],i)}else t[i+1]=Zl(s,0),s!==0&&(t[s+1]=Im(t[s+1],i)),s=i;else t[i+1]=Zl(l,0),s===0?s=i:t[l+1]=Im(t[l+1],i),l=i;c&&(t[i+1]=tp(t[i+1])),G_(t,u,i,!0),G_(t,u,i,!1),NS(n,u,t,i,o),a=Zl(s,l),o?n.classBindings=a:n.styleBindings=a}function NS(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Zr(o,n)>=0&&(e[i+1]=np(e[i+1]))}function G_(t,n,e,i){let r=t[e+1],o=n===null,a=i?pr(r):so(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];PS(l,n)&&(s=!0,t[a+1]=i?np(c):tp(c)),a=i?pr(c):so(c)}s&&(t[e+1]=i?tp(r):np(r))}function PS(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Zr(t,n)>=0:!1}var bn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function FS(t){return t.substring(bn.key,bn.keyEnd)}function LS(t){return jS(t),Hy(t,zy(t,0,bn.textEnd))}function Hy(t,n){let e=bn.textEnd;return e===n?-1:(n=bn.keyEnd=BS(t,bn.key=n,e),zy(t,n,e))}function jS(t){bn.key=0,bn.keyEnd=0,bn.value=0,bn.valueEnd=0,bn.textEnd=t.length}function zy(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function BS(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Zt(t,n,e){return $y(t,n,e,!1),Zt}function H(t,n){return $y(t,n,null,!0),H}function Ut(t){US(qS,VS,t,!0)}function VS(t,n){for(let e=LS(n);e>=0;e=Hy(n,e))Al(t,FS(n),!0)}function $y(t,n,e,i){let r=Y(),o=Ge(),a=jl(2);if(o.firstUpdatePass&&Gy(o,t,a,i),n!==jt&&nn(r,a,n)){let s=o.data[Ln()];qy(o,s,r,r[Be],t,r[a+1]=YS(n,e),i,a)}}function US(t,n,e,i){let r=Ge(),o=jl(2);r.firstUpdatePass&&Gy(r,null,o,i);let a=Y();if(e!==jt&&nn(a,o,e)){let s=r.data[Ln()];if(Zy(s,i)&&!Wy(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Il(l,e||"")),ep(r,s,a,e,i)}else ZS(r,s,a,a[Be],a[o+1],a[o+1]=GS(t,n,e),i,o)}}function Wy(t,n){return n>=t.expandoStartIndex}function Gy(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Ln()],a=Wy(t,e);Zy(o,i)&&n===null&&!a&&(n=!1),n=HS(r,o,n,i),OS(r,o,n,e,a,i)}}function HS(t,n,e,i){let r=l_(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Mm(null,t,n,e,i),e=Ta(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Mm(r,t,n,e,i),o===null){let l=zS(t,n,i);l!==void 0&&Array.isArray(l)&&(l=Mm(null,t,n,l[1],i),l=Ta(l,n.attrs,i),$S(t,n,i,l))}else o=WS(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function zS(t,n,e){let i=e?n.classBindings:n.styleBindings;if(so(i)!==0)return t[pr(i)]}function $S(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[pr(r)]=i}function WS(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Ta(i,a,e)}return Ta(i,n.attrs,e)}function Mm(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Ta(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Ta(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Al(t,a,e?!0:n[++o]))}return t===void 0?null:t}function GS(t,n,e){if(e==null||e==="")return Dt;let i=[],r=Oa(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function qS(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Al(t,i,e)}function ZS(t,n,e,i,r,o,a,s){r===jt&&(r=Dt);let l=0,c=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let p=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,y=null,k;u===f?(l+=2,c+=2,p!==h&&(y=f,k=h)):f===null||u!==null&&u<f?(l+=2,y=u):(c+=2,y=f,k=h),y!==null&&qy(t,n,e,i,y,k,a,s),u=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function qy(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],u=RS(c)?q_(l,n,e,r,so(c),a):void 0;if(!hc(u)){hc(o)||kS(c)&&(o=q_(l,null,e,r,s,a));let f=Yf(Ln(),e);HI(i,a,f,r,o)}}function q_(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,f=u===null,p=e[r+1];p===jt&&(p=f?Dt:void 0);let h=f?Rl(p,i):u===i?p:void 0;if(c&&!hc(h)&&(h=Rl(l,i)),hc(h)&&(s=h,a))return s;let y=t[r+1];r=a?pr(y):so(y)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=Rl(l,i))}return s}function hc(t){return t!==void 0}function YS(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=ca(Oa(t)))),t}function Zy(t,n){return(t.flags&(n?8:16))!==0}function _(t,n=""){let e=Y(),i=Ge(),r=t+Ue,o=i.firstCreatePass?uo(i,r,1,n,null):i.data[r],a=QS(i,e,o,n);e[r]=a,zl()&&vp(i,e,a,o),Jr(o,!1)}var QS=(t,n,e,i)=>($l(!0),iI(n[Be],i));function KS(t,n,e,i=""){return nn(t,yi(),e)?n+qr(e)+i:jt}function XS(t,n,e,i,r,o=""){let a=i_(),s=Cy(t,a,e,r);return jl(2),s?n+qr(e)+i+qr(r)+o:jt}function de(t){return _e("",t),de}function _e(t,n,e){let i=Y(),r=KS(i,t,n,e);return r!==jt&&Yy(i,Ln(),r),_e}function vr(t,n,e,i,r){let o=Y(),a=XS(o,t,n,e,i,r);return a!==jt&&Yy(o,Ln(),a),vr}function Yy(t,n,e){let i=Yf(n,t);rI(t[Be],i,e)}function Z_(t,n,e){let i=Ge();i.firstCreatePass&&Qy(n,i.data,i.blueprint,Fn(t),e)}function Qy(t,n,e,i,r){if(t=vt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Qy(t[o],n,e,i,r);else{let o=Ge(),a=Y(),s=Et(),l=Xi(t)?t:vt(t.provide),c=$f(t),u=s.providerIndexes&1048575,f=s.directiveStart,p=s.providerIndexes>>20;if(Xi(t)||!t.multi){let h=new ur(c,r,N,null),y=Tm(l,n,r?u:u+p,f);y===-1?(Am(ic(s,a),o,l),Sm(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[y]=h,a[y]=h)}else{let h=Tm(l,n,u+p,f),y=Tm(l,n,u,u+p),k=h>=0&&e[h],O=y>=0&&e[y];if(r&&!O||!r&&!k){Am(ic(s,a),o,l);let L=tT(r?eT:JS,e.length,r,i,c,t);!r&&O&&(e[y].providerFactory=L),Sm(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(L),a.push(L)}else{let L=Ky(e[r?y:h],c,!r&&i);Sm(o,t,h>-1?h:y,L)}!r&&i&&O&&e[y].componentProviders++}}}function Sm(t,n,e,i){let r=Xi(n),o=zv(n);if(r||o){let l=(o?vt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function Ky(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Tm(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function JS(t,n,e,i,r){return ip(this.multi,[])}function eT(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Da(i,i[q],this.providerFactory.index,r);a=l.slice(0,s),ip(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],ip(o,a);return a}function ip(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function tT(t,n,e,i,r,o){let a=new ur(t,e,N,null);return a.multi=[],a.index=n,a.componentProviders=0,Ky(a,r,i&&!e),a}function Fe(t,n){return e=>{e.providersResolver=(i,r)=>Z_(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Z_(i,r?r(n):n,!0))}}function an(t,n){let e=ga()+t,i=Y();return i[e]===jt?xp(i,e,n()):PM(i,e)}function qe(t,n,e){return Jy(Y(),ga(),t,n,e)}function Xy(t,n){let e=t[n];return e===jt?void 0:e}function Jy(t,n,e,i,r,o){let a=n+e;return nn(t,a,r)?xp(t,a+1,o?i.call(o,r):i(r)):Xy(t,a+1)}function nT(t,n,e,i,r,o,a){let s=n+e;return Cy(t,s,r,o)?xp(t,s+2,a?i.call(a,r,o):i(r,o)):Xy(t,s+2)}function En(t,n){let e=Ge(),i,r=t+Ue;e.firstCreatePass?(i=iT(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=fi(i.type,!0)),a,s=Rt(N);try{let l=nc(!1),c=o();return nc(l),Qf(e,Y(),r,c),c}finally{Rt(s)}}function iT(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Ba(t,n,e){let i=t+Ue,r=Y(),o=Pl(r,i);return e0(r,i)?Jy(r,ga(),n,o.transform,e,o):o.transform(e)}function _r(t,n,e,i){let r=t+Ue,o=Y(),a=Pl(o,r);return e0(o,r)?nT(o,ga(),n,a.transform,e,i,a):a.transform(e,i)}function e0(t,n){return t[q].data[n].pure}function Pc(t,n){return Mc(t,n)}var gc=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Np=(()=>{class t{compileModuleSync(e){return new fc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Pf(e),o=Pb(r.declarations).reduce((a,s)=>{let l=Qn(s);return l&&a.push(new mr(l)),a},[]);return new gc(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var t0=(()=>{class t{applicationErrorHandler=d(qt);appRef=d(rn);taskService=d(ei);ngZone=d(F);zonelessEnabled=d(ba);tracing=d(xn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new pe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(aa):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(_m,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?v_:pm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(aa+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function n0(){return[{provide:On,useExisting:t0},{provide:F,useClass:sa},{provide:ba,useValue:!0}]}function rT(){return typeof $localize<"u"&&$localize.locale||ja}var Fc=new x("",{factory:()=>d(Fc,{optional:!0,skipSelf:!0})||rT()});function ke(t){return Ev(t)}function yt(t,n){return Zo(t,n?.equal)}var oT=t=>t;function Pp(t,n){if(typeof t=="function"){let e=hf(t,oT,n?.equal);return i0(e,n?.debugName)}else{let e=hf(t.source,t.computation,t.equal);return i0(e,t.debugName)}}function i0(t,n){let e=t[et],i=t;return i.set=r=>xv(e,r),i.update=r=>Dv(e,r),i.asReadonly=Wl.bind(t),i}var l0=Symbol("InputSignalNode#UNSET"),wT=J(D({},Yo),{transformFn:void 0,applyValueToInputSignal(t,n){Bi(t,n)}});function c0(t,n){let e=Object.create(wT);e.value=t,e.transformFn=n?.transform;function i(){if(ci(e),e.value===l0){let r=null;throw new R(-950,r)}return e.value}return i[et]=e,i}var Ua=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Aa(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function r0(t,n){return c0(t,n)}function xT(t){return c0(l0,t)}var De=(r0.required=xT,r0);function o0(t,n){return Ip(n)}function DT(t,n){return Mp(n)}var Ha=(o0.required=DT,o0);function a0(t,n){return Ip(n)}function ET(t,n){return Mp(n)}var d0=(a0.required=ET,a0);var Lp=new x(""),IT=new x("");function Va(t){return!t.moduleRef}function MT(t){let n=Va(t)?t.r3Injector:t.moduleRef.injector,e=n.get(F);return e.run(()=>{Va(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(qt),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Va(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Lp);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Lp);a.add(o),t.moduleRef.onDestroy(()=>{xa(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return TT(i,e,()=>{let o=n.get(ei),a=o.add(),s=n.get(Rp);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(Fc,ja);if(Uy(l||ja),!n.get(IT,!0))return Va(t)?n.get(rn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Va(t)){let u=n.get(rn);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return ST?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var ST;function TT(t,n,e){try{let i=e();return Di(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Lc=null;function kT(t=[],n){return se.create({name:n,providers:[{provide:fa,useValue:"platform"},{provide:Lp,useValue:new Set([()=>Lc=null])},...t]})}function AT(t=[]){if(Lc)return Lc;let n=kT(t);return Lc=n,jy(),RT(n),n}function RT(t){let n=t.get(vc,null);ft(t,()=>{n?.forEach(e=>e())})}var OT=1e4;var MG=OT-1e3;var Xe=(()=>{class t{static __NG_ELEMENT_ID__=NT}return t})();function NT(t){return PT(Et(),Y(),(t&16)===16)}function PT(t,n,e){if(Pn(t)&&!e){let i=tn(t.index,n);return new wi(i,i)}else if(t.type&175){let i=n[Nt];return new wi(i,n)}return null}var jp=class{supports(n){return n instanceof Map||wp(n)}create(){return new Bp}},Bp=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||wp(n)))throw new R(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Vp(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Vp=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function s0(){return new jc([new jp])}var jc=(()=>{class t{static \u0275prov=E({token:t,providedIn:"root",factory:s0});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=d(t,{optional:!0,skipSelf:!0});return t.create(e,i||s0())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new R(901,!1)}}return t})();function u0(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Oe(Ie.BootstrapApplicationStart);try{let o=r?.injector??AT(i),a=[n0(),b_,...e||[]],s=new Sa({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return MT({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Oe(Ie.BootstrapApplicationEnd)}}function me(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function mo(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Fp=Symbol("NOT_SET"),f0=new Set,FT=J(D({},Yo),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Fp,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Fp&&!Fr(this))return this.signal;try{for(let r of this.cleanup??f0)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Gn(this),i;try{i=this.userFn.apply(null,n)}finally{di(this,e)}return(this.value===Fp||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Up=class extends Ea{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Lt),a),this.scheduler=r;for(let s of pp){let l=e[s];if(l===void 0)continue;let c=Object.create(FT);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(ci(c),c.value),c.signal[et]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[s]=c,this.hooks[s]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??f0)e()}finally{ui(n)}}};function m0(t,n){let e=n?.injector??d(se),i=e.get(On),r=e.get(wc),o=e.get(xn,null,{optional:!0});r.impl??=e.get(hp);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(eo,null,{optional:!0}),l=new Up(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Bc(t,n){let e=Qn(t),i=n.elementInjector||Yr();return new mr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var p0=null;function sn(){return p0}function Hp(t){p0??=t}var za=class{},Vc=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>d(h0),providedIn:"platform"})}return t})();var h0=(()=>{class t extends Vc{_location;_history;_doc=d(ie);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return sn().getBaseHref(this._doc)}onPopState(e){let i=sn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=sn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function _0(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function g0(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Ii(t){return t&&t[0]!=="?"?`?${t}`:t}var po=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>d(jT),providedIn:"root"})}return t})(),LT=new x(""),jT=(()=>{class t extends po{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(ie).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _0(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Ii(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Ii(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Ii(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(G(Vc),G(LT,8))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mi=(()=>{class t{_subject=new T;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=UT(g0(v0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Ii(i))}normalize(e){return t.stripTrailingSlash(VT(this._basePath,v0(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ii(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ii(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Ii;static joinWithSlash=_0;static stripTrailingSlash=g0;static \u0275fac=function(i){return new(i||t)(G(po))};static \u0275prov=E({token:t,factory:()=>BT(),providedIn:"root"})}return t})();function BT(){return new Mi(G(po))}function VT(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function v0(t){return t.replace(/\/index.html$/,"")}function UT(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var zp=/\s+/,b0=[],br=(()=>{class t{_ngEl;_renderer;initialClasses=b0;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(zp):b0}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(zp):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(zp).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(N(j),N(Le))};static \u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var $p=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:wn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(N(j),N(jc),N(Le))};static \u0275dir=P({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Wp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(se);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(N(_t))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ee]})}return t})();function zT(t,n){return{key:t,value:n}}var ni=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=y0;transform(e,i=y0){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(zT(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(N(jc,16))};static \u0275pipe=Sp({name:"keyvalue",type:t,pure:!1})}return t})();function y0(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Uc(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var yr=class{};var Gp="browser";function C0(t){return t===Gp}var $a=class{_doc;constructor(n){this._doc=n}manager},Hc=(()=>{class t extends $a{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(G(ie))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Wc=new x(""),Qp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Hc));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Hc);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new R(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(G(Wc),G(F))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),qp="ng-app-id";function w0(t){for(let n of t)n.remove()}function x0(t,n){let e=n.createElement("style");return e.textContent=t,e}function qT(t,n,e,i){let r=t.head?.querySelectorAll(`style[${qp}="${n}"],link[${qp}="${n}"]`);if(r)for(let o of r)o.removeAttribute(qp),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Yp(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Kp=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,qT(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,x0);i?.forEach(r=>this.addUsage(r,this.external,Yp))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(w0(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])w0(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,x0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Yp(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(G(ie),G(co),G(gr,8),G(hr))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Zp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Xp=/%COMP%/g;var E0="%COMP%",ZT=`_nghost-${E0}`,YT=`_ngcontent-${E0}`,QT=!0,KT=new x("",{factory:()=>QT});function XT(t){return YT.replace(Xp,t)}function JT(t){return ZT.replace(Xp,t)}function I0(t,n){return n.map(e=>e.replace(Xp,t))}var Jp=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Wa(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof $c?r.applyToHost(e):r instanceof Ga&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Cn.Emulated:o=new $c(l,c,i,this.appId,u,a,s,f);break;case Cn.ShadowDom:return new zc(l,e,i,a,s,this.nonce,f,c);case Cn.ExperimentalIsolatedShadowDom:return new zc(l,e,i,a,s,this.nonce,f);default:o=new Ga(l,c,i,u,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(G(Qp),G(Kp),G(co),G(KT),G(ie),G(F),G(gr),G(xn,8))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Wa=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Zp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(D0(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(D0(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new R(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Zp[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Zp[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(wn.DashCase|wn.Important)?n.style.setProperty(e,i,r&wn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&wn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=sn().getGlobalEventTarget(this.doc,n),!n))throw new R(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function D0(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var zc=class extends Wa{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=I0(i.id,c);for(let f of c){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}let u=i.getExternalStyles?.();if(u)for(let f of u){let p=Yp(f,r);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ga=class extends Wa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?I0(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&fr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},$c=class extends Ga{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=XT(c),this.hostAttr=JT(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Gc=class t extends za{supportsDOMEvents=!0;static makeCurrent(){Hp(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=ek();return e==null?null:tk(e)}resetBaseElement(){qa=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Uc(document.cookie,n)}},qa=null;function ek(){return qa=qa||document.head.querySelector("base"),qa?qa.getAttribute("href"):null}function tk(t){return new URL(t,document.baseURI).pathname}var nk=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),M0=["alt","control","meta","shift"],ik={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},rk={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},S0=(()=>{class t extends $a{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>sn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),M0.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=ik[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),M0.forEach(a=>{if(a!==r){let s=rk[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(G(ie))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();async function eh(t,n,e){let i=D({rootComponent:t},ok(n,e));return u0(i)}function ok(t,n){return{platformRef:n?.platformRef,appProviders:[...dk,...t?.providers??[]],platformProviders:ck}}function ak(){Gc.makeCurrent()}function sk(){return new mn}function lk(){return ap(document),document}var ck=[{provide:hr,useValue:Gp},{provide:vc,useValue:ak,multi:!0},{provide:ie,useFactory:lk}];var dk=[{provide:fa,useValue:"root"},{provide:mn,useFactory:sk},{provide:Wc,useClass:Hc,multi:!0},{provide:Wc,useClass:S0,multi:!0},Jp,Kp,Qp,{provide:at,useExisting:Jp},{provide:yr,useClass:nk},[]];var Si=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var nh=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},ih=class{encodeKey(n){return T0(n)}encodeValue(n){return T0(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function uk(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var fk=/%(\d[a-f0-9])/gi,mk={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function T0(t){return encodeURIComponent(t).replace(fk,(n,e)=>mk[e]??n)}function qc(t){return`${t}`}var ii=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new ih,n.fromString){if(n.fromObject)throw new R(2805,!1);this.map=uk(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(qc):[qc(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(qc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(qc(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function pk(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function k0(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function A0(t){return typeof Blob<"u"&&t instanceof Blob}function R0(t){return typeof FormData<"u"&&t instanceof FormData}function hk(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var O0="Content-Type",N0="Accept",P0="text/plain",F0="application/json",gk=`${F0}, ${P0}, */*`,ho=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(pk(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new R(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Si,this.context??=new nh,!this.params)this.params=new ii,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||k0(this.body)||A0(this.body)||R0(this.body)||hk(this.body)?this.body:this.body instanceof ii?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||R0(this.body)?null:A0(this.body)?this.body.type||null:k0(this.body)?null:typeof this.body=="string"?P0:this.body instanceof ii?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?F0:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,p=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,k=n.timeout??this.timeout,O=n.body!==void 0?n.body:this.body,L=n.withCredentials??this.withCredentials,Me=n.reportProgress??this.reportProgress,ct=n.headers||this.headers,dt=n.params||this.params,$o=n.context??this.context;return n.setHeaders!==void 0&&(ct=Object.keys(n.setHeaders).reduce((Wo,Pi)=>Wo.set(Pi,n.setHeaders[Pi]),ct)),n.setParams&&(dt=Object.keys(n.setParams).reduce((Wo,Pi)=>Wo.set(Pi,n.setParams[Pi]),dt)),new t(e,i,O,{params:dt,headers:ct,context:$o,reportProgress:Me,responseType:r,withCredentials:L,transferCache:y,keepalive:o,cache:s,priority:a,timeout:k,mode:l,redirect:c,credentials:u,referrer:f,integrity:p,referrerPolicy:h})}},Cr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Cr||{}),Za=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Si,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},rh=class t extends Za{constructor(n={}){super(n)}type=Cr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ya=class t extends Za{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Cr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},go=class extends Za{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},vk=200,_k=204;var bk=/^\)\]\}',?\n/;var yk=(()=>{class t{xhrFactory;tracingService=d(xn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new R(-2800,!1);let i=this.xhrFactory;return Q(null).pipe(ot(()=>new Z(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((O,L)=>a.setRequestHeader(O,L.join(","))),e.headers.has(N0)||a.setRequestHeader(N0,gk),!e.headers.has(O0)){let O=e.detectContentTypeHeader();O!==null&&a.setRequestHeader(O0,O)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let O=e.responseType.toLowerCase();a.responseType=O!=="json"?O:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let O=a.statusText||"OK",L=new Si(a.getAllResponseHeaders()),Me=a.responseURL||e.url;return l=new rh({headers:L,status:a.status,statusText:O,url:Me}),l},u=this.maybePropagateTrace(()=>{let{headers:O,status:L,statusText:Me,url:ct}=c(),dt=null;L!==_k&&(dt=typeof a.response>"u"?a.responseText:a.response),L===0&&(L=dt?vk:0);let $o=L>=200&&L<300;if(e.responseType==="json"&&typeof dt=="string"){let Wo=dt;dt=dt.replace(bk,"");try{dt=dt!==""?JSON.parse(dt):null}catch(Pi){dt=Wo,$o&&($o=!1,dt={error:Pi,text:dt})}}$o?(o.next(new Ya({body:dt,headers:O,status:L,statusText:Me,url:ct||void 0})),o.complete()):o.error(new go({error:dt,headers:O,status:L,statusText:Me,url:ct||void 0}))}),f=this.maybePropagateTrace(O=>{let{url:L}=c(),Me=new go({error:O,status:a.status||0,statusText:a.statusText||"Unknown Error",url:L||void 0});o.error(Me)}),p=f;e.timeout&&(p=this.maybePropagateTrace(O=>{let{url:L}=c(),Me=new go({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:L||void 0});o.error(Me)}));let h=!1,y=this.maybePropagateTrace(O=>{h||(o.next(c()),h=!0);let L={type:Cr.DownloadProgress,loaded:O.loaded};O.lengthComputable&&(L.total=O.total),e.responseType==="text"&&a.responseText&&(L.partialText=a.responseText),o.next(L)}),k=this.maybePropagateTrace(O=>{let L={type:Cr.UploadProgress,loaded:O.loaded};O.lengthComputable&&(L.total=O.total),o.next(L)});return a.addEventListener("load",u),a.addEventListener("error",f),a.addEventListener("timeout",p),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",y),s!==null&&a.upload&&a.upload.addEventListener("progress",k)),a.send(s),o.next({type:Cr.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",u),a.removeEventListener("timeout",p),e.reportProgress&&(a.removeEventListener("progress",y),s!==null&&a.upload&&a.upload.removeEventListener("progress",k)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(G(yr))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ck(t,n){return n(t)}function wk(t,n,e){return(i,r)=>ft(e,()=>n(i,o=>t(o,r)))}var xk=new x("",{factory:()=>[]}),L0=new x(""),Dk=new x("",{factory:()=>!0});var Ek=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(yk),r},providedIn:"root"})}return t})();var Ik=(()=>{class t{backend;injector;chain=null;pendingTasks=d(ya);contributeToStability=d(Dk);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(xk),...this.injector.get(L0,[])]));this.chain=i.reduceRight((r,o)=>wk(r,o,this.injector),Ck)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ta(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(G(Ek),G(Se))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(Ik),r},providedIn:"root"})}return t})();function th(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var wr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof ho)o=e;else{let l;r.headers instanceof Si?l=r.headers:l=new Si(r.headers);let c;r.params&&(r.params instanceof ii?c=r.params:c=new ii({fromObject:r.params})),o=new ho(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Q(o).pipe(zr(l=>this.handler.handle(l)));if(e instanceof ho||r.observe==="events")return a;let s=a.pipe(ye(l=>l instanceof Ya));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new R(2806,!1);return l.body}));case"blob":return s.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new R(2807,!1);return l.body}));case"text":return s.pipe(ee(l=>{if(l.body!==null&&typeof l.body!="string")throw new R(2808,!1);return l.body}));default:return s.pipe(ee(l=>l.body))}case"response":return s;default:throw new R(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ii().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,th(r,i))}post(e,i,r={}){return this.request("POST",e,th(r,i))}put(e,i,r={}){return this.request("PUT",e,th(r,i))}static \u0275fac=function(i){return new(i||t)(G(Mk))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var B0=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(G(ie))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oe="primary",cs=Symbol("RouteTitle"),ch=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Dr(t){return new ch(t)}function oh(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function q0(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return oh(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!oh(o,t.slice(0,o.length),s)||!oh(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Jc(t){return new Promise((n,e)=>{t.pipe(Zn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function Tk(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Vn(t[e],n[e]))return!1;return!0}function Vn(t,n){let e=t?dh(t):void 0,i=n?dh(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Z0(t[r],n[r]))return!1;return!0}function dh(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Z0(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function kk(t){return t.length>0?t[t.length-1]:null}function Mr(t){return Xo(t)?t:Di(t)?Ve(Promise.resolve(t)):Q(t)}function Y0(t){return Xo(t)?Jc(t):Promise.resolve(t)}var Ak={exact:X0,subset:J0},Q0={exact:Rk,subset:Ok,ignored:()=>!0},K0={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},uh={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function V0(t,n,e){return Ak[e.paths](t.root,n.root,e.matrixParams)&&Q0[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function Rk(t,n){return Vn(t,n)}function X0(t,n,e){if(!xr(t.segments,n.segments)||!Qc(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!X0(t.children[i],n.children[i],e))return!1;return!0}function Ok(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Z0(t[e],n[e]))}function J0(t,n,e){return eC(t,n,n.segments,e)}function eC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!xr(r,e)||n.hasChildren()||!Qc(r,e,i))}else if(t.segments.length===e.length){if(!xr(t.segments,e)||!Qc(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!J0(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!xr(t.segments,r)||!Qc(t.segments,r,i)||!t.children[oe]?!1:eC(t.children[oe],n,o,i)}}function Qc(t,n,e){return n.every((i,r)=>Q0[e](t[r].parameters,i.parameters))}var Qt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ae([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Dr(this.queryParams),this._queryParamMap}toString(){return Fk.serialize(this)}},Ae=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Kc(this)}},Ti=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Dr(this.parameters),this._parameterMap}toString(){return nC(this)}};function Nk(t,n){return xr(t,n)&&t.every((e,i)=>Vn(e.parameters,n[i].parameters))}function xr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function Pk(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===oe&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==oe&&(e=e.concat(n(r,i)))}),e}var Eo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>new ki,providedIn:"root"})}return t})(),ki=class{parse(n){let e=new mh(n);return new Qt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Qa(n.root,!0)}`,i=Bk(n.queryParams),r=typeof n.fragment=="string"?`#${Lk(n.fragment)}`:"";return`${e}${i}${r}`}},Fk=new ki;function Kc(t){return t.segments.map(n=>nC(n)).join("/")}function Qa(t,n){if(!t.hasChildren())return Kc(t);if(n){let e=t.children[oe]?Qa(t.children[oe],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==oe&&i.push(`${r}:${Qa(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=Pk(t,(i,r)=>r===oe?[Qa(t.children[oe],!1)]:[`${r}:${Qa(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[oe]!=null?`${Kc(t)}/${e[0]}`:`${Kc(t)}/(${e.join("//")})`}}function tC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Zc(t){return tC(t).replace(/%3B/gi,";")}function Lk(t){return encodeURI(t)}function fh(t){return tC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Xc(t){return decodeURIComponent(t)}function U0(t){return Xc(t.replace(/\+/g,"%20"))}function nC(t){return`${fh(t.path)}${jk(t.parameters)}`}function jk(t){return Object.entries(t).map(([n,e])=>`;${fh(n)}=${fh(e)}`).join("")}function Bk(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Zc(e)}=${Zc(r)}`).join("&"):`${Zc(e)}=${Zc(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var Vk=/^[^\/()?;#]+/;function ah(t){let n=t.match(Vk);return n?n[0]:""}var Uk=/^[^\/()?;=#]+/;function Hk(t){let n=t.match(Uk);return n?n[0]:""}var zk=/^[^=?&#]+/;function $k(t){let n=t.match(zk);return n?n[0]:""}var Wk=/^[^&#]+/;function Gk(t){let n=t.match(Wk);return n?n[0]:""}var mh=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ae([],{}):new Ae([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new R(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[oe]=new Ae(e,i)),r}parseSegment(){let n=ah(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(n),new Ti(Xc(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=Hk(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=ah(this.remaining);r&&(i=r,this.capture(i))}n[Xc(e)]=Xc(i)}parseQueryParam(n){let e=$k(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=Gk(this.remaining);a&&(i=a,this.capture(i))}let r=U0(e),o=U0(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ah(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new R(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=oe);let s=this.parseChildren(e+1);i[a??oe]=Object.keys(s).length===1&&s[oe]?s[oe]:new Ae([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R(4011,!1)}};function iC(t){return t.segments.length>0?new Ae([],{[oe]:t}):t}function rC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=rC(r);if(i===oe&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ae(t.segments,n);return qk(e)}function qk(t){if(t.numberOfChildren===1&&t.children[oe]){let n=t.children[oe];return new Ae(t.segments.concat(n.segments),n.children)}return t}function Ai(t){return t instanceof Qt}function oC(t,n,e=null,i=null,r=new ki){let o=aC(t);return sC(o,n,e,i,r)}function aC(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Ae(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=iC(i);return n??r}function sC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return sh(o,o,o,e,i,r);let a=Zk(n);if(a.toRoot())return sh(o,o,new Ae([],{}),e,i,r);let s=Yk(a,o,t),l=s.processChildren?Xa(s.segmentGroup,s.index,a.commands):cC(s.segmentGroup,s.index,a.commands);return sh(o,s.segmentGroup,l,e,i,r)}function ed(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function ts(t){return typeof t=="object"&&t!=null&&t.outlets}function H0(t,n,e){t||="\u0275";let i=new Qt;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function sh(t,n,e,i,r,o){let a={};for(let[c,u]of Object.entries(i??{}))a[c]=Array.isArray(u)?u.map(f=>H0(c,f,o)):H0(c,u,o);let s;t===n?s=e:s=lC(t,n,e);let l=iC(rC(s));return new Qt(l,a,r)}function lC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=lC(o,n,e)}),new Ae(t.segments,i)}var td=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&ed(i[0]))throw new R(4003,!1);let r=i.find(ts);if(r&&r!==kk(i))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Zk(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new td(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new td(e,n,i)}var _o=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function Yk(t,n,e){if(t.isAbsolute)return new _o(n,!0,0);if(!e)return new _o(n,!1,NaN);if(e.parent===null)return new _o(e,!0,0);let i=ed(t.commands[0])?0:1,r=e.segments.length-1+i;return Qk(e,r,t.numberOfDoubleDots)}function Qk(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new R(4005,!1);r=i.segments.length}return new _o(i,!1,r-o)}function Kk(t){return ts(t[0])?t[0].outlets:{[oe]:t}}function cC(t,n,e){if(t??=new Ae([],{}),t.segments.length===0&&t.hasChildren())return Xa(t,n,e);let i=Xk(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ae(t.segments.slice(0,i.pathIndex),{});return o.children[oe]=new Ae(t.segments.slice(i.pathIndex),t.children),Xa(o,0,r)}else return i.match&&r.length===0?new Ae(t.segments,{}):i.match&&!t.hasChildren()?ph(t,n,e):i.match?Xa(t,0,r):ph(t,n,e)}function Xa(t,n,e){if(e.length===0)return new Ae(t.segments,{});{let i=Kk(e),r={};if(Object.keys(i).some(o=>o!==oe)&&t.children[oe]&&t.numberOfChildren===1&&t.children[oe].segments.length===0){let o=Xa(t.children[oe],n,e);return new Ae(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=cC(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ae(t.segments,r)}}function Xk(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(ts(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!$0(l,c,a))return o;i+=2}else{if(!$0(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ph(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(ts(o)){let l=Jk(o.outlets);return new Ae(i,l)}if(r===0&&ed(e[0])){let l=t.segments[n];i.push(new Ti(l.path,z0(e[0]))),r++;continue}let a=ts(o)?o.outlets[oe]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&ed(s)?(i.push(new Ti(a,z0(s))),r+=2):(i.push(new Ti(a,{})),r++)}return new Ae(i,{})}function Jk(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=ph(new Ae([],{}),0,i))}),n}function z0(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function $0(t,n,e){return t==e.path&&Vn(n,e.parameters)}var Ja="imperative",mt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(mt||{}),Kt=class{id;url;constructor(n,e){this.id=n,this.url=e}},Er=class extends Kt{type=mt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Un=class extends Kt{urlAfterRedirects;type=mt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},St=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(St||{}),ns=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ns||{}),ln=class extends Kt{reason;code;type=mt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function dC(t){return t instanceof ln&&(t.code===St.Redirect||t.code===St.SupersededByNewNavigation)}var oi=class extends Kt{reason;code;type=mt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Ir=class extends Kt{error;target;type=mt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},is=class extends Kt{urlAfterRedirects;state;type=mt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nd=class extends Kt{urlAfterRedirects;state;type=mt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},id=class extends Kt{urlAfterRedirects;state;shouldActivate;type=mt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},rd=class extends Kt{urlAfterRedirects;state;type=mt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},od=class extends Kt{urlAfterRedirects;state;type=mt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ad=class{route;type=mt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},sd=class{route;type=mt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ld=class{snapshot;type=mt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cd=class{snapshot;type=mt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dd=class{snapshot;type=mt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ud=class{snapshot;type=mt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var yo=class{},rs=class{},Co=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function eA(t){return!(t instanceof yo)&&!(t instanceof Co)&&!(t instanceof rs)}var fd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Io(this.rootInjector)}},Io=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new fd(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(G(Se))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),md=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=hh(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=hh(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=gh(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return gh(n,this._root).map(e=>e.value)}};function hh(t,n){if(t===n.value)return n;for(let e of n.children){let i=hh(t,e);if(i)return i}return null}function gh(t,n){if(t===n.value)return[n];for(let e of n.children){let i=gh(t,e);if(i.length)return i.unshift(n),i}return[]}var Yt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function vo(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var os=class extends md{snapshot;constructor(n,e){super(n),this.snapshot=e,Eh(this,n)}toString(){return this.snapshot.toString()}};function uC(t,n){let e=tA(t,n),i=new rt([new Ti("",{})]),r=new rt({}),o=new rt({}),a=new rt({}),s=new rt(""),l=new Ct(i,r,a,s,o,oe,t,e.root);return l.snapshot=e.root,new os(new Yt(l,[]),e)}function tA(t,n){let e={},i={},r={},a=new wo([],e,r,"",i,oe,t,null,{},n);return new as("",new Yt(a,[]))}var Ct=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ee(c=>c[cs]))??Q(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ee(n=>Dr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ee(n=>Dr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Dh(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:D(D({},n.params),t.params),data:D(D({},n.data),t.data),resolve:D(D(D(D({},t.data),n.data),r?.data),t._resolvedData)}:i={params:D({},t.params),data:D({},t.data),resolve:D(D({},t.data),t._resolvedData??{})},r&&mC(r)&&(i.resolve[cs]=r.title),i}var wo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[cs]}constructor(n,e,i,r,o,a,s,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Dr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Dr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},as=class extends md{url;constructor(n,e){super(e),this.url=n,Eh(this,e)}toString(){return fC(this._root)}};function Eh(t,n){n.value._routerState=t,n.children.forEach(e=>Eh(t,e))}function fC(t){let n=t.children.length>0?` { ${t.children.map(fC).join(", ")} } `:"";return`${t.value}${n}`}function lh(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Vn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Vn(n.params,e.params)||t.paramsSubject.next(e.params),Tk(n.url,e.url)||t.urlSubject.next(e.url),Vn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function vh(t,n){let e=Vn(t.params,n.params)&&Nk(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||vh(t.parent,n.parent))}function mC(t){return typeof t.title=="string"||t.title===null}var pC=new x(""),ds=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=oe;activateEvents=new $;deactivateEvents=new $;attachEvents=new $;detachEvents=new $;routerOutletData=De();parentContexts=d(Io);location=d(_t);changeDetector=d(Xe);inputBinder=d(vd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new _h(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ee]})}return t})(),_h=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ct?this.route:n===Io?this.childContexts:n===pC?this.outletData:this.parent.get(n,e)}},vd=new x("");var Ih=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&I(0,"router-outlet")},dependencies:[ds],encapsulation:2})}return t})();function Mh(t){let n=t.children&&t.children.map(Mh),e=n?J(D({},t),{children:n}):D({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==oe&&(e.component=Ih),e}function nA(t,n,e){let i=ss(t,n._root,e?e._root:void 0);return new os(i,n)}function ss(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=iA(t,n,e);return new Yt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>ss(t,s)),a}}let i=rA(n.value),r=n.children.map(o=>ss(t,o));return new Yt(i,r)}}function iA(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return ss(t,i,r);return ss(t,i)})}function rA(t){return new Ct(new rt(t.url),new rt(t.params),new rt(t.queryParams),new rt(t.fragment),new rt(t.data),t.outlet,t.component,t)}var xo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},hC="ngNavigationCancelingError";function pd(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Ai(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=gC(!1,St.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function gC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[hC]=!0,e.cancellationCode=n,e}function oA(t){return vC(t)&&Ai(t.url)}function vC(t){return!!t&&t[hC]}var bh=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),lh(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=vo(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=vo(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=vo(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=vo(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new ud(o.value.snapshot))}),n.children.length&&this.forwardEvent(new cd(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(lh(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),lh(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},hd=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},bo=class{component;route;constructor(n,e){this.component=n,this.route=e}};function aA(t,n,e){let i=t._root,r=n?n._root:null;return Ka(i,r,e,[i.value])}function sA(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Mo(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Tf(t)?t:n.get(t):i}function Ka(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=vo(n);return t.children.forEach(a=>{lA(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>es(s,e.getContext(a),r)),r}function lA(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=cA(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new hd(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ka(t,n,s?s.children:null,i,r):Ka(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new bo(s.outlet.component,a))}else a&&es(n,s,r),r.canActivateChecks.push(new hd(i)),o.component?Ka(t,null,s?s.children:null,i,r):Ka(t,null,e,i,r);return r}function cA(t,n,e){if(typeof e=="function")return ft(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!xr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!xr(t.url,n.url)||!Vn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!vh(t,n)||!Vn(t.queryParams,n.queryParams);default:return!vh(t,n)}}function es(t,n,e){let i=vo(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?es(a,n.children.getContext(o),e):es(a,null,e):es(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new bo(n.outlet.component,r)):e.canDeactivateChecks.push(new bo(null,r)):e.canDeactivateChecks.push(new bo(null,r))}function us(t){return typeof t=="function"}function dA(t){return typeof t=="boolean"}function uA(t){return t&&us(t.canLoad)}function fA(t){return t&&us(t.canActivate)}function mA(t){return t&&us(t.canActivateChild)}function pA(t){return t&&us(t.canDeactivate)}function hA(t){return t&&us(t.canMatch)}function _C(t){return t instanceof Gi||t?.name==="EmptyError"}var Yc=Symbol("INITIAL_VALUE");function Do(){return ot(t=>Jo(t.map(n=>n.pipe(ut(1),gt(Yc)))).pipe(ee(n=>{for(let e of n)if(e!==!0){if(e===Yc)return Yc;if(e===!1||gA(e))return e}return!0}),ye(n=>n!==Yc),ut(1)))}function gA(t){return Ai(t)||t instanceof xo}function bC(t){return t.aborted?Q(void 0).pipe(ut(1)):new Z(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function yC(t){return Pe(bC(t))}function vA(t){return ht(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Q(J(D({},n),{guardsResult:!0})):_A(o,e,i).pipe(ht(a=>a&&dA(a)?bA(e,r,t):Q(a)),ee(a=>J(D({},n),{guardsResult:a})))})}function _A(t,n,e){return Ve(t).pipe(ht(i=>DA(i.component,i.route,e,n)),Zn(i=>i!==!0,!0))}function bA(t,n,e){return Ve(n).pipe(zr(i=>An(CA(i.route.parent,e),yA(i.route,e),xA(t,i.path),wA(t,i.route))),Zn(i=>i!==!0,!0))}function yA(t,n){return t!==null&&n&&n(new dd(t)),Q(!0)}function CA(t,n){return t!==null&&n&&n(new ld(t)),Q(!0)}function wA(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let i=e.map(r=>qi(()=>{let o=n._environmentInjector,a=Mo(r,o),s=fA(a)?a.canActivate(n,t):ft(o,()=>a(n,t));return Mr(s).pipe(Zn())}));return Q(i).pipe(Do())}function xA(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>sA(o)).filter(o=>o!==null).map(o=>qi(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Mo(s,l),u=mA(c)?c.canActivateChild(e,t):ft(l,()=>c(e,t));return Mr(u).pipe(Zn())});return Q(a).pipe(Do())}));return Q(r).pipe(Do())}function DA(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Q(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Mo(a,s),c=pA(l)?l.canDeactivate(t,n,e,i):ft(s,()=>l(t,n,e,i));return Mr(c).pipe(Zn())});return Q(o).pipe(Do())}function EA(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Q(!0);let a=o.map(s=>{let l=Mo(s,t),c=uA(l)?l.canLoad(n,e):ft(t,()=>l(n,e)),u=Mr(c);return r?u.pipe(yC(r)):u});return Q(a).pipe(Do(),CC(i))}function CC(t){return of(xt(n=>{if(typeof n!="boolean")throw pd(t,n)}),ee(n=>n===!0))}function IA(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return Q(!0);let s=a.map(l=>{let c=Mo(l,t),u=hA(c)?c.canMatch(n,e,r):ft(t,()=>c(n,e,r));return Mr(u).pipe(yC(o))});return Q(s).pipe(Do(),CC(i))}var ri=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},ls=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function MA(t){throw new R(4e3,!1)}function SA(t){throw gC(!1,St.GuardRejected)}var yh=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[oe])throw MA(`${n.redirectTo}`);r=r.children[oe]}}async applyRedirectCommands(n,e,i,r,o){let a=await TA(e,r,o);if(a instanceof Qt)throw new ls(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new ls(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Qt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Ae(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new R(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function TA(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Jc(Mr(ft(e,()=>i(n))))}function kA(t,n){return t.providers&&!t._injector&&(t._injector=La(t.providers,n,`Route: ${t.path}`)),t._injector??n}function In(t){return t.outlet||oe}function AA(t,n){let e=t.filter(i=>In(i)===n);return e.push(...t.filter(i=>In(i)!==n)),e}var Ch={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function wC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function RA(t,n,e,i,r,o,a){let s=xC(t,n,e);if(!s.matched)return Q(s);let l=wC(o(s));return i=kA(n,i),IA(i,n,e,r,l,a).pipe(ee(c=>c===!0?s:D({},Ch)))}function xC(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?D({},Ch):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||q0)(e,t,n);if(!r)return D({},Ch);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?D(D({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function W0(t,n,e,i,r){return e.length>0&&PA(t,e,i,r)?{segmentGroup:new Ae(n,NA(i,new Ae(e,t.children))),slicedSegments:[]}:e.length===0&&FA(t,e,i)?{segmentGroup:new Ae(t.segments,OA(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ae(t.segments,t.children),slicedSegments:e}}function OA(t,n,e,i){let r={};for(let o of e)if(_d(t,n,o)&&!i[In(o)]){let a=new Ae([],{});r[In(o)]=a}return D(D({},i),r)}function NA(t,n){let e={};e[oe]=n;for(let i of t)if(i.path===""&&In(i)!==oe){let r=new Ae([],{});e[In(i)]=r}return e}function PA(t,n,e,i){return e.some(r=>!_d(t,n,r)||!(In(r)!==oe)?!1:!(i!==void 0&&In(r)===i))}function FA(t,n,e){return e.some(i=>_d(t,n,i))}function _d(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function LA(t,n,e){return n.length===0&&!t.children[e]}var wh=class{};async function jA(t,n,e,i,r,o,a="emptyOnly",s){return new xh(t,n,e,i,r,a,o,s).recognize()}var BA=31,xh=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new yh(this.urlSerializer,this.urlTree)}noMatchError(n){return new R(4002,`'${n.segmentGroup}'`)}async recognize(){let n=W0(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Yt(i,e),o=new as("",r),a=oC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new wo([],Object.freeze({}),Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),oe,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,oe,e),rootSnapshot:e}}catch(i){if(i instanceof ls)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ri?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Yt?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],u=AA(e,l),f=await this.processSegmentGroup(n,u,c,l,r);a.push(...f)}let s=DC(a);return VA(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof ri||_C(c))continue;throw c}if(LA(i,r,o))return new wh;throw new ri(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(In(i)!==a&&(a===oe||!_d(r,o,i)))throw new ri(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new ri(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:p}=xC(e,r,o);if(!l)throw new ri(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>BA&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,wC(h),n),k=await this.applyRedirects.lineralizeSegments(r,y);return this.processSegment(n,i,e,k.concat(p),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new wo(i,r,Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,HA(e),In(e),e.component??e._loadedComponent??null,e,zA(e),n),s=Dh(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=ct=>this.createSnapshot(n,i,ct.consumedSegments,ct.parameters,a),l=await Jc(RA(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new ri(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:p,remainingSegments:h}=l,y=this.createSnapshot(n,i,p,f,a),{segmentGroup:k,slicedSegments:O}=W0(e,p,h,c,o);if(O.length===0&&k.hasChildren()){let ct=await this.processChildren(u,c,k,y);return new Yt(y,ct)}if(c.length===0&&O.length===0)return new Yt(y,[]);let L=In(i)===o,Me=await this.processSegment(u,c,k,O,L?oe:o,!0,y);return new Yt(y,Me instanceof Yt?[Me]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Jc(EA(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw SA(e)}return{routes:[],injector:n}}};function VA(t){t.sort((n,e)=>n.value.outlet===oe?-1:e.value.outlet===oe?1:n.value.outlet.localeCompare(e.value.outlet))}function UA(t){let n=t.value.routeConfig;return n&&n.path===""}function DC(t){let n=[],e=new Set;for(let i of t){if(!UA(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=DC(i.children);n.push(new Yt(i.value,r))}return n.filter(i=>!e.has(i))}function HA(t){return t.data||{}}function zA(t){return t.resolve||{}}function $A(t,n,e,i,r,o,a){return ht(async s=>{let{state:l,tree:c}=await jA(t,n,e,i,s.extractedUrl,r,o,a);return J(D({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function WA(t){return ht(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Q(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of EC(s))o.add(l);let a=0;return Ve(o).pipe(zr(s=>r.has(s)?GA(s,e,t):(s.data=Dh(s,s.parent,t).resolve,Q(void 0))),xt(()=>a++),hl(1),ht(s=>a===o.size?Q(n):We))})}function EC(t){let n=t.children.map(e=>EC(e)).flat();return[t,...n]}function GA(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!mC(i)&&(r[cs]=i.title),qi(()=>(t.data=Dh(t,t.parent,e).resolve,qA(r,t,n).pipe(ee(o=>(t._resolvedData=o,t.data=D(D({},t.data),o),null)))))}function qA(t,n,e){let i=dh(t);if(i.length===0)return Q({});let r={};return Ve(i).pipe(ht(o=>ZA(t[o],n,e).pipe(Zn(),xt(a=>{if(a instanceof xo)throw pd(new ki,a);r[o]=a}))),hl(1),ee(()=>r),ea(o=>_C(o)?We:cf(o)))}function ZA(t,n,e){let i=n._environmentInjector,r=Mo(t,i),o=r.resolve?r.resolve(n,e):ft(i,()=>r(n,e));return Mr(o)}function G0(t){return ot(n=>{let e=t(n);return e?Ve(e).pipe(ee(()=>n)):Q(n)})}var Sh=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===oe);return i}getResolvedTitleForRoute(e){return e.data[cs]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>d(IC),providedIn:"root"})}return t})(),IC=(()=>{class t extends Sh{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(G(B0))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),So=new x("",{factory:()=>({})}),fs=new x(""),MC=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Np);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Y0(ft(e,()=>i.loadComponent())),a=await kC(TC(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await SC(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function SC(t,n,e,i){let r=await Y0(ft(e,()=>t.loadChildren())),o=await kC(TC(r)),a;o instanceof Tc||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,u;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,u=a,l=s.get(fs,[],{optional:!0,self:!0}).flat()),{routes:l.map(Mh),injector:s,factory:u}}function YA(t){return t&&typeof t=="object"&&"default"in t}function TC(t){return YA(t)?t.default:t}async function kC(t){return t}var bd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>d(QA),providedIn:"root"})}return t})(),QA=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),AC=new x("");var KA=()=>{},RC=new x(""),OC=(()=>{class t{currentNavigation=U(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=U(null);events=new T;transitionAbortWithErrorSubject=new T;configLoader=d(MC);environmentInjector=d(Se);destroyRef=d(Lt);urlSerializer=d(Eo);rootContexts=d(Io);location=d(Mi);inputBindingEnabled=d(vd,{optional:!0})!==null;titleStrategy=d(Sh);options=d(So,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(bd);createViewTransition=d(AC,{optional:!0});navigationErrorHandler=d(RC,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ad(r)),i=r=>this.events.next(new sd(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ke(()=>{this.transitions?.next(J(D({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new rt(null),this.transitions.pipe(ye(i=>i!==null),ot(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return Q(i).pipe(ot(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",St.SupersededByNewNavigation),We;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?J(D({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new oi(s.id,this.urlSerializer.serialize(s.rawUrl),"",ns.IgnoredSameUrlNavigation)),s.resolve(!1),We;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Q(s).pipe(ot(f=>(this.events.next(new Er(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?We:Promise.resolve(f))),$A(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),xt(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=f.urlAfterRedirects,p)),this.events.next(new rs)}),ot(f=>Ve(i.routesRecognizeHandler.deferredHandle??Q(void 0)).pipe(ee(()=>f))),xt(()=>{let f=new is(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:p,source:h,restoredState:y,extras:k}=s,O=new Er(f,this.urlSerializer.serialize(p),h,y);this.events.next(O);let L=uC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=J(D({},s),{targetSnapshot:L,urlAfterRedirects:p,extras:J(D({},k),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Me=>(Me.finalUrl=p,Me)),Q(i)}else return this.events.next(new oi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",ns.IgnoredByUrlHandlingStrategy)),s.resolve(!1),We}),ee(s=>{let l=new nd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=J(D({},s),{guards:aA(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),vA(s=>this.events.next(s)),ot(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw pd(this.urlSerializer,s.guardsResult);let l=new id(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return We;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",St.GuardRejected),We;if(s.guards.canActivateChecks.length===0)return Q(s);let c=new rd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return We;let u=!1;return Q(s).pipe(WA(this.paramsInheritanceStrategy),xt({next:()=>{u=!0;let f=new od(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(s,"",St.NoDataFromResolver)}}))}),G0(s=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let p=u._environmentInjector;f.push(this.configLoader.loadComponent(p,u.routeConfig).then(h=>{u.component=h}))}for(let p of u.children)f.push(...l(p));return f},c=l(s.targetSnapshot.root);return c.length===0?Q(s):Ve(Promise.all(c).then(()=>s))}),G0(()=>this.afterPreactivation()),ot(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?Ve(c).pipe(ee(()=>i)):Q(i)}),ut(1),ot(s=>{let l=nA(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=J(D({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new yo);let c=i.beforeActivateHandler.deferredHandle;return c?Ve(c.then(()=>s)):Q(s)}),xt(s=>{new bh(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=KA,l)),this.lastSuccessfulNavigation.set(ke(this.currentNavigation)),this.events.next(new Un(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Pe(bC(o.signal).pipe(ye(()=>!r&&!i.targetRouterState),xt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",St.Aborted)}))),xt({complete:()=>{r=!0}}),Pe(this.transitionAbortWithErrorSubject.pipe(xt(s=>{throw s}))),ta(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",St.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ea(s=>{if(r=!0,this.destroyed)return i.resolve(!1),We;if(vC(s))this.events.next(new ln(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),oA(s)?this.events.next(new Co(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Ir(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=ft(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof xo){let{message:u,cancellationCode:f}=pd(this.urlSerializer,c);this.events.next(new ln(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Co(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return We}))}))}cancelNavigationTransition(e,i,r){let o=new ln(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ke(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function XA(t){return t!==Ja}var NC=new x("");var PC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>d(JA),providedIn:"root"})}return t})(),gd=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},JA=(()=>{class t extends gd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yd=(()=>{class t{urlSerializer=d(Eo);options=d(So,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Mi);urlHandlingStrategy=d(bd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Qt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Qt?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=uC(null,d(Se));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:()=>d(eR),providedIn:"root"})}return t})(),eR=(()=>{class t extends yd{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Er?this.updateStateMemento():e instanceof oi?this.commitTransition(i):e instanceof is?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof yo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ln&&!dC(e)?this.restoreHistory(i):e instanceof Ir?this.restoreHistory(i,!0):e instanceof Un&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=D(D({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=D(D({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?D({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):D({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Th(t,n){t.events.pipe(ye(e=>e instanceof Un||e instanceof ln||e instanceof Ir||e instanceof oi),ee(e=>e instanceof Un||e instanceof oi?0:(e instanceof ln?e.code===St.Redirect||e.code===St.SupersededByNewNavigation:!1)?2:1),ye(e=>e!==2),ut(1)).subscribe(()=>{n()})}var To=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Tp);stateManager=d(yd);options=d(So,{optional:!0})||{};pendingTasks=d(ei);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(OC);urlSerializer=d(Eo);location=d(Mi);urlHandlingStrategy=d(bd);injector=d(Se);_events=new T;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(PC);injectorCleanup=d(NC,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(fs,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(vd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new pe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=ke(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof ln&&i.code!==St.Redirect&&i.code!==St.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Un)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Co){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=D({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||XA(r.source)},a);this.scheduleNavigation(s,Ja,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}eA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ja,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=J(D({},o),{browserUrl:e})),r){let c=D({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(qt)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ke(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Mh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=D(D({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let p=r?r.snapshot:this.routerState.snapshot.root;f=aC(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return sC(f,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Ai(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ja,null,i)}navigate(e,i={skipLocationChange:!1}){return tR(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(hi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=D({},K0):i===!1?r=D({},uh):r=D(D({},uh),i),Ai(e))return V0(this.currentUrlTree,e,r);let o=this.parseUrl(e);return V0(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((f,p)=>{s=f,l=p});let u=this.pendingTasks.add();return Th(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tR(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new R(4008,!1)}var rR=(()=>{class t{router=d(To);stateManager=d(yd);fragment=U("");queryParams=U({});path=U("");serializer=d(Eo);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Un&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Qt(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ko=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Ua("href"),{optional:!0});reactiveHref=Pp(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ke(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ke(this._target)}_target=U(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ke(this._queryParams)}_queryParams=U(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ke(this._fragment)}_fragment=U(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ke(this._queryParamsHandling)}_queryParamsHandling=U(void 0);set state(e){this._state.set(e)}get state(){return ke(this._state)}_state=U(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ke(this._info)}_info=U(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ke(this._relativeTo)}_relativeTo=U(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ke(this._preserveFragment)}_preserveFragment=U(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ke(this._skipLocationChange)}_skipLocationChange=U(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ke(this._replaceUrl)}_replaceUrl=U(!1);isAnchorElement;onChanges=new T;applicationErrorHandler=d(qt);options=d(So,{optional:!0});reactiveRouterState=d(rR);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=U(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ai(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=yt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Ai(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return ke(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(N(To),N(Ct),Aa("tabindex"),N(Le),N(j),N(po))};static \u0275dir=P({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&le("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&we("href",r.reactiveHref(),lp)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",me],skipLocationChange:[2,"skipLocationChange","skipLocationChange",me],replaceUrl:[2,"replaceUrl","replaceUrl",me],routerLink:"routerLink"},features:[Ee]})}return t})();var oR=new x("");function kh(t,...n){return nr([{provide:fs,multi:!0,useValue:t},[],{provide:Ct,useFactory:aR},{provide:kc,multi:!0,useFactory:sR},n.map(e=>e.\u0275providers)])}function aR(){return d(To).routerState.root}function sR(){let t=d(se);return n=>{let e=t.get(rn);if(n!==e.components[0])return;let i=t.get(To),r=t.get(lR);t.get(cR)===1&&i.initialNavigation(),t.get(dR,null,{optional:!0})?.setUpPreloading(),t.get(oR,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var lR=new x("",{factory:()=>new T}),cR=new x("",{factory:()=>1});var dR=new x("");var Ao=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=U(!0);isLoading=this.loading.asReadonly();error=U("");errorMessage=this.error.asReadonly();teams=U([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(G(wr))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var fR=new x("cdk-dir-doc",{providedIn:"root",factory:()=>d(ie)}),mR=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function LC(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?mR.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ht=(()=>{class t{get value(){return this.valueSignal()}valueSignal=U("ltr");change=new $;constructor(){let e=d(fR,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(LC(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ye=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({})}return t})();var pR=["*"];var hR=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],gR=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],vR=new x("MAT_CARD_CONFIG"),jC=(()=>{class t{appearance;constructor(){let e=d(vR,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&H("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:pR,decls:1,vars:0,template:function(i,r){i&1&&(Te(),z(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),BC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var VC=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),UC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:gR,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Te(hR),z(0),X(1,"div",0),z(2,1),ne(),z(3,2))},encapsulation:2,changeDetection:0})}return t})();function ms(t){return t.buttons===0||t.detail===0}function ps(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Ah;function HC(){if(Ah==null){let t=typeof document<"u"?document.head:null;Ah=!!(t&&(t.createShadowRoot||t.attachShadow))}return Ah}function Rh(t){if(HC()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Cd(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Tt(t){return t.composedPath?t.composedPath()[0]:t.target}var Oh;try{Oh=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Oh=!1}var be=(()=>{class t{_platformId=d(hr);isBrowser=this._platformId?C0(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Oh)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hs;function zC(){if(hs==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>hs=!0}))}finally{hs=hs||!1}return hs}function Ro(t){return zC()?t:!!t.capture}function Hn(t,n=0){return $C(t)?Number(t):arguments.length===2?n:0}function $C(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Bt(t){return t instanceof j?t.nativeElement:t}var WC=new x("cdk-input-modality-detector-options"),GC={ignoreKeys:[18,17,224,91,16]},qC=650,Nh={passive:!0,capture:!0},ZC=(()=>{class t{_platform=d(be);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new rt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Tt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<qC||(this._modality.next(ms(e)?"keyboard":"mouse"),this._mostRecentTarget=Tt(e))};_onTouchstart=e=>{if(ps(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Tt(e)};constructor(){let e=d(F),i=d(ie),r=d(WC,{optional:!0});if(this._options=D(D({},GC),r),this.modalityDetected=this._modality.pipe(Yi(1)),this.modalityChanged=this.modalityDetected.pipe(pl()),this._platform.isBrowser){let o=d(at).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Nh),o.listen(i,"mousedown",this._onMousedown,Nh),o.listen(i,"touchstart",this._onTouchstart,Nh)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gs=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(gs||{}),YC=new x("cdk-focus-monitor-default-options"),wd=Ro({passive:!0,capture:!0}),Sr=(()=>{class t{_ngZone=d(F);_platform=d(be);_inputModalityDetector=d(ZC);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(ie);_stopInputModalityDetector=new T;constructor(){let e=d(YC,{optional:!0});this._detectionMode=e?.detectionMode||gs.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Tt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Bt(e);if(!this._platform.isBrowser||r.nodeType!==1)return Q();let o=Rh(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new T,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Bt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Bt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===gs.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===gs.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?qC:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Tt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,wd),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,wd)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Pe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,wd),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,wd),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ph=(()=>{class t{_elementRef=d(j);_focusMonitor=d(Sr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new $;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var xd=new WeakMap,pt=(()=>{class t{_appRef;_injector=d(se);_environmentInjector=d(Se);load(e){let i=this._appRef=this._appRef||this._injector.get(rn),r=xd.get(i);r||(r={loaders:new Set,refs:[]},xd.set(i,r),i.onDestroy(()=>{xd.get(i)?.refs.forEach(o=>o.destroy()),xd.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Bc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Dd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})();function ai(t){return Array.isArray(t)?t:[t]}var QC=new Set,Tr,Ed=(()=>{class t{_platform=d(be);_nonce=d(gr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):bR}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&_R(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _R(t,n){if(!QC.has(t))try{Tr||(Tr=document.createElement("style"),n&&Tr.setAttribute("nonce",n),Tr.setAttribute("type","text/css"),document.head.appendChild(Tr)),Tr.sheet&&(Tr.sheet.insertRule(`@media ${t} {body{ }}`,0),QC.add(t))}catch(e){console.error(e)}}function bR(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var vs=(()=>{class t{_mediaMatcher=d(Ed);_zone=d(F);_queries=new Map;_destroySubject=new T;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return KC(ai(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=KC(ai(e)).map(a=>this._registerQuery(a).observable),o=Jo(r);return o=An(o.pipe(ut(1)),o.pipe(Yi(1),fn(0))),o.pipe(ee(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new Z(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(gt(i),ee(({matches:a})=>({query:e,matches:a})),Pe(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function KC(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function yR(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var XC=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),CR=(()=>{class t{_mutationObserverFactory=d(XC);_observedElements=new Map;_ngZone=d(F);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Bt(e);return new Z(r=>{let a=this._observeElement(i).pipe(ee(s=>s.filter(l=>!yR(l))),ye(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new T,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Id=(()=>{class t{_contentObserver=d(CR);_elementRef=d(j);event=new $;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Hn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(fn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",me],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Md=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({providers:[XC]})}return t})();var Td=(()=>{class t{_platform=d(be);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return xR(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=wR(AR(e));if(i&&(JC(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=JC(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!TR(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return kR(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wR(t){try{return t.frameElement}catch{return null}}function xR(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function DR(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function ER(t){return MR(t)&&t.type=="hidden"}function IR(t){return SR(t)&&t.hasAttribute("href")}function MR(t){return t.nodeName.toLowerCase()=="input"}function SR(t){return t.nodeName.toLowerCase()=="a"}function ew(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function JC(t){if(!ew(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function TR(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function kR(t){return ER(t)?!1:DR(t)||IR(t)||t.hasAttribute("contenteditable")||ew(t)}function AR(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Sd=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?lt(n,{injector:this._injector}):setTimeout(n)}},Fh=(()=>{class t{_checker=d(Td);_ngZone=d(F);_document=d(ie);_injector=d(se);constructor(){d(pt).load(Dd)}create(e,i=!1){return new Sd(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var RR=200,kd=class{_letterKeyStream=new T;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new T;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:RR;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(xt(e=>this._pressedLetters.push(e)),fn(n),ye(()=>this._pressedLetters.length>0),ee(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function cn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Oo=class{_items;_activeItemIndex=U(-1);_activeItem=U(null);_wrap=!1;_typeaheadSubscription=pe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof yn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):ti(n)&&(this._effectRef=vn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new T;change=new T;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new kd(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||cn(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return ti(this._items)?this._items():this._items instanceof yn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var _s=class extends Oo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var bs=class extends Oo{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var jh={},kt=class t{_appId=d(co);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),jh.hasOwnProperty(n)||(jh[n]=0),`${n}${e?t._infix+"-":""}${jh[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var iw=" ";function Bh(t,n,e){let i=rw(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(iw)))}function Ad(t,n,e){let i=rw(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(iw)):t.removeAttribute(n)}function rw(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Mn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Mn||{}),Rd,kr;function Od(){if(kr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return kr=!1,kr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)kr=!0;else{let t=Element.prototype.scrollTo;t?kr=!/\{\s*\[native code\]\s*\}/.test(t.toString()):kr=!1}}return kr}function No(){if(typeof document!="object"||!document)return Mn.NORMAL;if(Rd==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Rd=Mn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Rd=t.scrollLeft===0?Mn.NEGATED:Mn.INVERTED),t.remove()}return Rd}function Vh(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Po,ow=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Uh(){if(Po)return Po;if(typeof document!="object"||!document)return Po=new Set(ow),Po;let t=document.createElement("input");return Po=new Set(ow.filter(n=>(t.setAttribute("type",n),t.type===n))),Po}var aw={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var OR=new x("MATERIAL_ANIMATIONS"),sw=null;function NR(){return d(OR,{optional:!0})?.animationsDisabled||d(Ra,{optional:!0})==="NoopAnimations"?"di-disabled":(sw??=d(Ed).matchMedia("(prefers-reduced-motion)").matches,sw?"reduced-motion":"enabled")}function nt(){return NR()!=="enabled"}function it(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Je(t){return t!=null&&`${t}`!="false"}var dn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(dn||{}),Hh=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=dn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},lw=Ro({passive:!0,capture:!0}),zh=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,lw)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,lw)))}_delegateEventHandler=n=>{let e=Tt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},ys={enterDuration:225,exitDuration:150},PR=800,cw=Ro({passive:!0,capture:!0}),dw=["mousedown","touchstart"],uw=["mouseup","mouseleave","touchend","touchcancel"],FR=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ar=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new zh;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Bt(i)),o&&o.get(pt).load(FR)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=D(D({},ys),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||LR(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),p=f.transitionProperty,h=f.transitionDuration,y=p==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,k=new Hh(this,u,i,y);u.style.transform="scale3d(1, 1, 1)",k.state=dn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=k);let O=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let L=()=>{O&&(O.fallbackTimer=null),clearTimeout(ct),this._finishRippleTransition(k)},Me=()=>this._destroyRipple(k),ct=setTimeout(Me,c+100);u.addEventListener("transitionend",L),u.addEventListener("transitioncancel",Me),O={onTransitionEnd:L,onTransitionCancel:Me,fallbackTimer:ct}}),this._activeRipples.set(k,O),(y||!c)&&this._finishRippleTransition(k),k}fadeOutRipple(n){if(n.state===dn.FADING_OUT||n.state===dn.HIDDEN)return;let e=n.element,i=D(D({},ys),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=dn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Bt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,dw.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{uw.forEach(e=>{this._triggerElement.addEventListener(e,this,cw)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===dn.FADING_IN?this._startFadeOutTransition(n):n.state===dn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=dn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=dn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ms(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+PR;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ps(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===dn.VISIBLE||n.config.terminateOnPointerUp&&n.state===dn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(dw.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(uw.forEach(e=>n.removeEventListener(e,this,cw)),this._pointerUpEventsRegistered=!1))}};function LR(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Fo=new x("mat-ripple-global-options"),Cs=(()=>{class t{_elementRef=d(j);_animationsDisabled=nt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(F),i=d(be),r=d(Fo,{optional:!0}),o=d(se);this._globalOptions=r||{},this._rippleRenderer=new Ar(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:D(D(D({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,D(D({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,D(D({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var jR={capture:!0},BR=["focus","mousedown","mouseenter","touchstart"],$h="mat-ripple-loader-uninitialized",Wh="mat-ripple-loader-class-name",fw="mat-ripple-loader-centered",Nd="mat-ripple-loader-disabled",mw=(()=>{class t{_document=d(ie);_animationsDisabled=nt();_globalRippleOptions=d(Fo,{optional:!0});_platform=d(be);_ngZone=d(F);_injector=d(se);_eventCleanups;_hosts=new Map;constructor(){let e=d(at).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>BR.map(i=>e.listen(this._document,i,this._onInteraction,jR)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute($h,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Wh))&&e.setAttribute(Wh,i.className||""),i.centered&&e.setAttribute(fw,""),i.disabled&&e.setAttribute(Nd,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Nd,""):e.removeAttribute(Nd)}_onInteraction=e=>{let i=Tt(e);if(i instanceof HTMLElement){let r=i.closest(`[${$h}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Wh)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??ys.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??ys.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Nd),rippleConfig:{centered:e.hasAttribute(fw),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Ar(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute($h)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ri=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var VR=["mat-icon-button",""],UR=["*"],HR=new x("MAT_BUTTON_CONFIG");function pw(t){return t==null?void 0:mo(t)}var Pd=(()=>{class t{_elementRef=d(j);_ngZone=d(F);_animationsDisabled=nt();_config=d(HR,{optional:!0});_focusMonitor=d(Sr);_cleanupClick;_renderer=d(Le);_rippleLoader=d(mw);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(pt).load(Ri);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(we("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ut(r.color?"mat-"+r.color:""),H("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",me],disabled:[2,"disabled","disabled",me],ariaDisabled:[2,"aria-disabled","ariaDisabled",me],disabledInteractive:[2,"disabledInteractive","disabledInteractive",me],tabIndex:[2,"tabIndex","tabIndex",pw],_tabindex:[2,"tabindex","_tabindex",pw]}})}return t})(),Gh=(()=>{class t extends Pd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ce],attrs:VR,ngContentSelectors:UR,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(),xe(0,"span",0),z(1),xe(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Fd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Ye]})}return t})();var zR=["matButton",""],gw=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],vw=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],$R=["mat-fab",""];var hw=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),_w=(()=>{class t extends Pd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=WR(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?hw.get(this._appearance):null,o=hw.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ce],attrs:zR,ngContentSelectors:vw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(gw),xe(0,"span",0),z(1),X(2,"span",1),z(3,1),ne(),z(4,2),xe(5,"span",2)(6,"span",3)),i&2&&H("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function WR(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var GR=new x("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>qh}),qh={color:"accent"},bw=(()=>{class t extends Pd{_options=d(GR,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||qh,this.color=this._options.color||qh.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&H("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",me]},exportAs:["matButton","matAnchor"],features:[Ce],attrs:$R,ngContentSelectors:vw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Te(gw),xe(0,"span",0),z(1),X(2,"span",1),z(3,1),ne(),z(4,2),xe(5,"span",2)(6,"span",3)),i&2&&H("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var qR=t=>[t,"map"],ZR=t=>[t,"convoy"],YR=t=>[t,"shop"],Ld=class t{team=De.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(v(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),_(3),g()(),v(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),I(7,"img",3),_(8," Map "),g()(),v(9,"button",4)(10,"span",2)(11,"div",5),_(12,"?"),g(),_(13," Convoy "),g()(),v(14,"button",4)(15,"span",2),I(16,"img",6),_(17," Shop "),g()()()()),e&2&&(m(3),_e(" ",i.team().teamName," "),m(2),S("routerLink",qe(6,qR,i.GetTeamNameWithoutSpaces())),m(4),S("disabled",!i.team().showConvoyLink)("routerLink",qe(8,ZR,i.GetTeamNameWithoutSpaces())),m(5),S("disabled",!i.team().showShopLink)("routerLink",qe(10,YR,i.GetTeamNameWithoutSpaces())))},dependencies:[jC,UC,BC,VC,_w,ko],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var yw="(max-width: 900px)",zn=class t{breakpointObserver=d(vs);isSmallWidth=U(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([yw]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[yw])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var jd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(X(0,"div",0)(1,"div",1),xe(2,"div",2),X(3,"div",3),_(4,"Loading..."),ne()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var $n=class t{DARK_MODE_CLASS="dark-mode";document=d(ie);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=U(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=yt(()=>this.themeMode()==="dark");constructor(){vn(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var Zh=t=>({width:t});function QR(t,n){t&1&&I(0,"loading-icon")}function KR(t,n){if(t&1&&(v(0,"div",7)(1,"p",17),_(2),g()()),t&2){let e=b();m(2),_e(" ",e.teamListService.errorMessage()," ")}}function XR(t,n){if(t&1&&I(0,"team-listing",14),t&2){let e=n.$implicit;S("team",e)}}function JR(t,n){t&1&&(v(0,"div",7)(1,"p",17),_(2," There are no teams available. "),g()())}function eO(t,n){if(t&1&&ge(0,XR,1,1,"team-listing",14,ze,!1,JR,3,0,"div",7),t&2){let e=b();ve(e.teamListService.teamsList())}}var Bd=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=d(zn),this.themeService=d($n),this.teamListService=d(Ao),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(N(zn),N($n),N(Ao))};static \u0275cmp=M({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(I(0,"div",0)(1,"div",1),v(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),_(6),g(),v(7,"button",5),le("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),_(8,"Toggle Theme"),g()(),v(9,"div",6),C(10,QR,1,0,"loading-icon")(11,KR,3,1,"div",7)(12,eO,3,1),g()(),v(13,"div",3)(14,"div",8)(15,"h1",9),_(16,"Information"),g(),v(17,"p"),_(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),g(),v(19,"h2",9),_(20,"Resources"),g(),v(21,"ul")(22,"li")(23,"a",10),_(24,"Reddit Emblem Maps Documentation"),g()(),v(25,"li")(26,"a",11),_(27,"API Github Repository"),g()(),v(28,"li")(29,"a",12),_(30,"Webapp Github Repository"),g()()(),v(31,"h2",9),_(32,"Example"),g(),v(33,"p"),_(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),g(),v(35,"ul")(36,"li")(37,"a",13),_(38,"Team Example Google Spreadsheet"),g()()(),I(39,"team-listing",14),g(),v(40,"div",8)(41,"h2",9),_(42,"Credits"),g(),v(43,"ul")(44,"li")(45,"a",15),_(46,'Website background texture "Az Subtle" by Anli'),g()(),v(47,"li")(48,"a",16),_(49,`"Mac's Minecraft" pixel font`),g()()()()()()),e&2&&(m(3),S("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),m(),S("ngClass",i.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),m(2),_e(" This will be the logo! Screen width is <= 900px: ",i.breakpointService.isScreenSmallWidth()," "),m(3),S("ngStyle",qe(9,Zh,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),m(),w(i.teamListService.isLoading()?10:i.teamListService.errorMessage().length>0?11:12),m(3),S("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),m(),S("ngStyle",qe(11,Zh,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),m(25),S("team",i.teamExample),m(),S("ngStyle",qe(13,Zh,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Ld,br,$p,jd],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var tO=20,Lo=(()=>{class t{_ngZone=d(F);_platform=d(be);_renderer=d(at).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new T;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=tO){return this._platform.isBrowser?new Z(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ml(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ye(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Bt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oi=(()=>{class t{elementRef=d(j);scrollDispatcher=d(Lo);ngZone=d(F);dir=d(Ht,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new T;_renderer=d(Le);_cleanupScroll;_elementScrolled=new T;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&No()!=Mn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),No()==Mn.INVERTED?e.left=e.right:No()==Mn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Od()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&No()==Mn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&No()==Mn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),nO=20,Sn=(()=>{class t{_platform=d(be);_listeners;_viewportSize=null;_change=new T;_document=d(ie);constructor(){let e=d(F),i=d(at).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=nO){return e>0?this._change.pipe(ml(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ws=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({})}return t})(),Yh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Ye,ws,Ye,ws]})}return t})();var zd=["*"],iO=["content"],rO=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],oO=["mat-drawer","mat-drawer-content","*"];function aO(t,n){if(t&1){let e=Dn();v(0,"div",1),le("click",function(){Pt(e);let r=b();return Ft(r._onBackdropClicked())}),g()}if(t&2){let e=b();H("mat-drawer-shown",e._isShowingBackdrop())}}function sO(t,n){t&1&&(v(0,"mat-drawer-content"),z(1,2),g())}var lO=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],cO=["mat-sidenav","mat-sidenav-content","*"];function dO(t,n){if(t&1){let e=Dn();v(0,"div",1),le("click",function(){Pt(e);let r=b();return Ft(r._onBackdropClicked())}),g()}if(t&2){let e=b();H("mat-drawer-shown",e._isShowingBackdrop())}}function uO(t,n){t&1&&(v(0,"mat-sidenav-content"),z(1,2),g())}var fO=`.mat-drawer-container {
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
`;var mO=new x("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Xh=new x("MAT_DRAWER_CONTAINER"),Vd=(()=>{class t extends Oi{_platform=d(be);_changeDetectorRef=d(Xe);_container=d(Kh);constructor(){let e=d(j),i=d(Lo),r=d(F);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Zt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),H("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Fe([{provide:Oi,useExisting:t}]),Ce],ngContentSelectors:zd,decls:1,vars:0,template:function(i,r){i&1&&(Te(),z(0))},encapsulation:2,changeDetection:0})}return t})(),Qh=(()=>{class t{_elementRef=d(j);_focusTrapFactory=d(Fh);_focusMonitor=d(Sr);_platform=d(be);_ngZone=d(F);_renderer=d(Le);_interactivityChecker=d(Td);_doc=d(ie);_container=d(Xh,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Je(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Je(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Je(e))}_opened=U(!1);_openedVia=null;_animationStarted=new T;_animationEnd=new T;openedChange=new $(!0);_openedStream=this.openedChange.pipe(ye(e=>e),ee(()=>{}));openedStart=this._animationStarted.pipe(ye(()=>this.opened),$r(void 0));_closedStream=this.openedChange.pipe(ye(e=>!e),ee(()=>{}));closedStart=this._animationStarted.pipe(ye(()=>!this.opened),$r(void 0));_destroyed=new T;onPositionChanged=new $;_content;_modeChanged=new T;_injector=d(se);_changeDetectorRef=d(Xe);constructor(){this.openedChange.pipe(Pe(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!cn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":lt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ut(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ke(iO,5),i&2){let o;B(o=V())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(we("align",null)("tabIndex",r.mode!=="side"?"-1":null),Zt("visibility",!r._container&&!r.opened?"hidden":null),H("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:zd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Te(),v(0,"div",1,0),z(2),g())},dependencies:[Oi],encapsulation:2,changeDetection:0})}return t})(),Kh=(()=>{class t{_dir=d(Ht,{optional:!0});_element=d(j);_ngZone=d(F);_changeDetectorRef=d(Xe);_animationDisabled=nt();_transitionsEnabled=!1;_allDrawers;_drawers=new yn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Je(e)}_autosize=d(mO);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Je(e)}_backdropOverride=null;backdropClick=new $;_start=null;_end=null;_left=null;_right=null;_destroyed=new T;_doCheckSubject=new T;_contentMargins={left:null,right:null};_contentMarginChanges=new T;get scrollable(){return this._userContent||this._content}_injector=d(se);constructor(){let e=d(be),i=d(Sn);this._dir?.change.pipe(Pe(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Pe(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(gt(this._allDrawers),Pe(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(gt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(fn(10),Pe(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Pe(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Pe(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Pe(this._drawers.changes)).subscribe(()=>{lt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Pe(At(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&bt(o,Vd,5)(o,Qh,5),i&2){let a;B(a=V())&&(r._content=a.first),B(a=V())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ke(Vd,5),i&2){let o;B(o=V())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Fe([{provide:Xh,useExisting:t}])],ngContentSelectors:oO,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Te(rO),C(0,aO,1,2,"div",0),z(1),z(2,1),C(3,sO,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),m(3),w(r._content?-1:3))},dependencies:[Vd],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ud=(()=>{class t extends Vd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Fe([{provide:Oi,useExisting:t}]),Ce],ngContentSelectors:zd,decls:1,vars:0,template:function(i,r){i&1&&(Te(),z(0))},encapsulation:2,changeDetection:0})}return t})(),Jh=(()=>{class t extends Qh{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Je(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Hn(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Hn(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(we("tabIndex",r.mode!=="side"?"-1":null)("align",null),Zt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),H("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Fe([{provide:Qh,useExisting:t}]),Ce],ngContentSelectors:zd,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Te(),v(0,"div",1,0),z(2),g())},dependencies:[Oi],encapsulation:2,changeDetection:0})}return t})(),xw=(()=>{class t extends Kh{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&bt(o,Ud,5)(o,Jh,5),i&2){let a;B(a=V())&&(r._content=a.first),B(a=V())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Fe([{provide:Xh,useExisting:t},{provide:Kh,useExisting:t}]),Ce],ngContentSelectors:cO,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Te(lO),C(0,dO,1,2,"div",0),z(1),z(2,1),C(3,uO,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),m(3),w(r._content?-1:3))},dependencies:[Ud],styles:[fO],encapsulation:2,changeDetection:0})}return t})();var xs=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},eg=class extends xs{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},si=class extends xs{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},tg=class extends xs{element;constructor(n){super(),this.element=n instanceof j?n.nativeElement:n}},$d=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof eg)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof si)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof tg)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Wd=class extends $d{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Bn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||se.NULL,o=r.get(Se,i.injector);e=Bc(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Dw=(()=>{class t extends si{constructor(){let e=d(It),i=d(_t);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Ce]})}return t})(),ng=(()=>{class t extends $d{_moduleRef=d(Bn,{optional:!0});_document=d(ie);_viewContainerRef=d(_t);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new $;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ce]})}return t})(),Ew=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({})}return t})();var ig=class{_box;_destroyed=new T;_resizeSubject=new T;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Z(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ye(e=>e.some(i=>i.target===n)),vl({bufferSize:1,refCount:!0}),Pe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Gd=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ig(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cg=["*"];function pO(t,n){t&1&&z(0)}var hO=["tabListContainer"],gO=["tabList"],vO=["tabListInner"],_O=["nextPaginator"],bO=["previousPaginator"],yO=["content"];function CO(t,n){}var wO=["tabBodyWrapper"],xO=["tabHeader"];function DO(t,n){}function EO(t,n){if(t&1&&Mt(0,DO,0,0,"ng-template",12),t&2){let e=b().$implicit;S("cdkPortalOutlet",e.templateLabel)}}function IO(t,n){if(t&1&&_(0),t&2){let e=b().$implicit;de(e.textLabel)}}function MO(t,n){if(t&1){let e=Dn();v(0,"div",7,2),le("click",function(){let r=Pt(e),o=r.$implicit,a=r.$index,s=b(),l=on(1);return Ft(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=Pt(e).$index,a=b();return Ft(a._tabFocusChanged(r,o))}),I(2,"span",8)(3,"div",9),v(4,"span",10)(5,"span",11),C(6,EO,1,1,null,12)(7,IO,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=on(1),o=b();Ut(e.labelClass),H("mdc-tab--active",o.selectedIndex===i),S("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),we("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),S("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),m(3),w(e.templateLabel?6:7)}}function SO(t,n){t&1&&z(0)}function TO(t,n){if(t&1){let e=Dn();v(0,"mat-tab-body",13),le("_onCentered",function(){Pt(e);let r=b();return Ft(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Pt(e);let o=b();return Ft(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Pt(e);let o=b();return Ft(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=b();Ut(e.bodyClass),S("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),we("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var kO=new x("MatTabContent"),AO=(()=>{class t{template=d(It);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabContent",""]],features:[Fe([{provide:kO,useExisting:t}])]})}return t})(),RO=new x("MatTabLabel"),Tw=new x("MAT_TAB"),dg=(()=>{class t extends Dw{_closestTab=d(Tw,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Fe([{provide:RO,useExisting:t}]),Ce]})}return t})(),kw=new x("MAT_TAB_GROUP"),ug=(()=>{class t{_viewContainerRef=d(_t);_closestTabGroup=d(kw,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new T;position=null;origin=null;isActive=!1;constructor(){d(pt).load(Ri)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new si(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&bt(o,dg,5)(o,AO,7,It),i&2){let a;B(a=V())&&(r.templateLabel=a.first),B(a=V())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ke(It,7),i&2){let o;B(o=V())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&we("id",null)},inputs:{disabled:[2,"disabled","disabled",me],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Fe([{provide:Tw,useExisting:t}]),Ee],ngContentSelectors:cg,decls:1,vars:0,template:function(i,r){i&1&&(Te(),fo(0,pO,1,0,"ng-template"))},encapsulation:2})}return t})(),rg="mdc-tab-indicator--active",Iw="mdc-tab-indicator--no-transition",og=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},OO=(()=>{class t{_elementRef=d(j);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(rg);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(Iw),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(Iw),i.classList.add(rg),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(rg)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",me]}})}return t})();var Aw=(()=>{class t extends OO{elementRef=d(j);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(we("aria-disabled",!!r.disabled),H("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",me]},features:[Ce]})}return t})(),Mw={passive:!0},NO=650,PO=100,FO=(()=>{class t{_elementRef=d(j);_changeDetectorRef=d(Xe);_viewportRuler=d(Sn);_dir=d(Ht,{optional:!0});_ngZone=d(F);_platform=d(be);_sharedResizeObserver=d(Gd);_injector=d(se);_renderer=d(Le);_animationsDisabled=nt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new T;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new T;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new $;indexFocused=new $;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Mw),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Mw))}ngAfterContentInit(){let e=this._dir?this._dir.change:Q("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(fn(32),Pe(this._destroyed)),r=this._viewportRuler.change(150).pipe(Pe(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new bs(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),lt(o,{injector:this._injector}),At(e,r,i,this._items.changes,this._itemsResized()).pipe(Pe(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?We:this._items.changes.pipe(gt(this._items),ot(e=>new Z(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Yi(1),ye(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!cn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,u=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>u&&(this.scrollDistance+=Math.min(l-u,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Zi(NO,PO).pipe(Pe(At(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",me],selectedIndex:[2,"selectedIndex","selectedIndex",mo]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),LO=(()=>{class t extends FO{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new og(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&bt(o,Aw,4),i&2){let a;B(a=V())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ke(hO,7)(gO,7)(vO,7)(_O,5)(bO,5),i&2){let o;B(o=V())&&(r._tabListContainer=o.first),B(o=V())&&(r._tabList=o.first),B(o=V())&&(r._tabListInner=o.first),B(o=V())&&(r._nextPaginator=o.first),B(o=V())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&H("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",me]},features:[Ce],ngContentSelectors:cg,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Te(),v(0,"div",5,0),le("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),I(2,"div",6),g(),v(3,"div",7,1),le("keydown",function(a){return r._handleKeydown(a)}),v(5,"div",8,2),le("cdkObserveContent",function(){return r._onContentChanges()}),v(7,"div",9,3),z(9),g()()(),v(10,"div",10,4),le("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),I(12,"div",6),g()),i&2&&(H("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),S("matRippleDisabled",r._disableScrollBefore||r.disableRipple),m(3),H("_mat-animation-noopable",r._animationsDisabled),m(2),we("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),m(5),H("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),S("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Cs,Id],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),jO=new x("MAT_TABS_CONFIG"),Sw=(()=>{class t extends ng{_host=d(ag);_ngZone=d(F);_centeringSub=pe.EMPTY;_leavingSub=pe.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(gt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabBodyHost",""]],features:[Ce]})}return t})(),ag=(()=>{class t{_elementRef=d(j);_dir=d(Ht,{optional:!0});_ngZone=d(F);_injector=d(se);_renderer=d(Le);_diAnimationsDisabled=nt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=pe.EMPTY;_position;_previousPosition;_onCentering=new $;_beforeCentering=new $;_afterLeavingCenter=new $;_onCentered=new $(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(Xe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),lt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),lt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ke(Sw,5)(yO,5),i&2){let o;B(o=V())&&(r._portalHost=o.first),B(o=V())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&we("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(v(0,"div",1,0),Mt(2,CO,0,0,"ng-template",2),g()),i&2&&H("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[Sw,Oi],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Rw=(()=>{class t{_elementRef=d(j);_changeDetectorRef=d(Xe);_ngZone=d(F);_tabsSubscription=pe.EMPTY;_tabLabelSubscription=pe.EMPTY;_tabBodySubscription=pe.EMPTY;_diAnimationsDisabled=nt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new yn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $;focusChange=new $;animationDone=new $;selectedTabChange=new $(!0);_groupId;_isServer=!d(be).isBrowser;constructor(){let e=d(jO,{optional:!0});this._groupId=d(kt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(gt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new sg;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=At(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&bt(o,ug,5),i&2){let a;B(a=V())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ke(wO,5)(xO,5)(ag,5),i&2){let o;B(o=V())&&(r._tabBodyWrapper=o.first),B(o=V())&&(r._tabHeader=o.first),B(o=V())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(we("mat-align-tabs",r.alignTabs),Ut("mat-"+(r.color||"primary")),Zt("--mat-tab-animation-duration",r.animationDuration),H("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",me],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",me],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",me],selectedIndex:[2,"selectedIndex","selectedIndex",mo],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",mo],disablePagination:[2,"disablePagination","disablePagination",me],disableRipple:[2,"disableRipple","disableRipple",me],preserveContent:[2,"preserveContent","preserveContent",me],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Fe([{provide:kw,useExisting:t}])],ngContentSelectors:cg,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Te(),v(0,"mat-tab-header",3,0),le("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),ge(2,MO,8,17,"div",4,Ei),g(),C(4,SO,1,0),v(5,"div",5,1),ge(7,TO,1,10,"mat-tab-body",6,Ei),g()),i&2&&(S("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Ac("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),m(2),ve(r._tabs),m(2),w(r._isServer?4:-1),m(),H("_mat-animation-noopable",r._animationsDisabled()),m(2),ve(r._tabs))},dependencies:[LO,Aw,Ph,Cs,ng,ag],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),sg=class{index;tab};var qd=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-dice-roller-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(X(0,"p"),_(1,"map-dice-roller-sidenav works!"),ne())},encapsulation:2})};var ue=class t{constructor(n){this.http=n;this.http=d(wr)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=U(!0);isLoading=this.loading.asReadonly();error=U("");errorMessage=this.error.asReadonly();map=U({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(G(wr))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var jw=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(N(Le),N(j))};static \u0275dir=P({type:t})}return t})(),BO=(()=>{class t extends jw{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=P({type:t,features:[Ce]})}return t})(),lu=new x("");var VO={provide:lu,useExisting:$t(()=>cu),multi:!0};function UO(){let t=sn()?sn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var HO=new x(""),cu=(()=>{class t extends jw{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!UO())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(N(Le),N(j),N(HO,8))};static \u0275dir=P({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&le("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Fe([VO]),Ce]})}return t})();function mg(t){return t==null||pg(t)===0}function pg(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var hg=new x(""),gg=new x(""),zO=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Yd=class{static min(n){return $O(n)}static max(n){return WO(n)}static required(n){return GO(n)}static requiredTrue(n){return qO(n)}static email(n){return ZO(n)}static minLength(n){return YO(n)}static maxLength(n){return QO(n)}static pattern(n){return KO(n)}static nullValidator(n){return Bw()}static compose(n){return Ww(n)}static composeAsync(n){return Gw(n)}};function $O(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function WO(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function GO(t){return mg(t.value)?{required:!0}:null}function qO(t){return t.value===!0?null:{required:!0}}function ZO(t){return mg(t.value)||zO.test(t.value)?null:{email:!0}}function YO(t){return n=>{let e=n.value?.length??pg(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function QO(t){return n=>{let e=n.value?.length??pg(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function KO(t){if(!t)return Bw;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(mg(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Bw(t){return null}function Vw(t){return t!=null}function Uw(t){return Di(t)?Ve(t):t}function Hw(t){let n={};return t.forEach(e=>{n=e!=null?D(D({},n),e):n}),Object.keys(n).length===0?null:n}function zw(t,n){return n.map(e=>e(t))}function XO(t){return!t.validate}function $w(t){return t.map(n=>XO(n)?n:e=>n.validate(e))}function Ww(t){if(!t)return null;let n=t.filter(Vw);return n.length==0?null:function(e){return Hw(zw(e,n))}}function vg(t){return t!=null?Ww($w(t)):null}function Gw(t){if(!t)return null;let n=t.filter(Vw);return n.length==0?null:function(e){let i=zw(e,n).map(Uw);return df(i).pipe(ee(Hw))}}function _g(t){return t!=null?Gw($w(t)):null}function Ow(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function qw(t){return t._rawValidators}function Zw(t){return t._rawAsyncValidators}function fg(t){return t?Array.isArray(t)?t:[t]:[]}function Qd(t,n){return Array.isArray(t)?t.includes(n):t===n}function Nw(t,n){let e=fg(n);return fg(t).forEach(r=>{Qd(e,r)||e.push(r)}),e}function Pw(t,n){return fg(n).filter(e=>!Qd(t,e))}var Kd=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=vg(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=_g(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Rr=class extends Kd{name;get formDirective(){return null}get path(){return null}},Or=class extends Kd{_parent=null;name=null;valueAccessor=null},Xd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Yw=(()=>{class t extends Xd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(N(Or,2))};static \u0275dir=P({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&H("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ce]})}return t})(),Qw=(()=>{class t extends Xd{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(N(Rr,10))};static \u0275dir=P({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&H("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ce]})}return t})();var Es="VALID",Zd="INVALID",jo="PENDING",Is="DISABLED",Ni=class{},Jd=class extends Ni{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ss=class extends Ni{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Ts=class extends Ni{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Bo=class extends Ni{status;source;constructor(n,e){super(),this.status=n,this.source=e}},eu=class extends Ni{source;constructor(n){super(),this.source=n}},tu=class extends Ni{source;constructor(n){super(),this.source=n}};function Kw(t){return(du(t)?t.validators:t)||null}function JO(t){return Array.isArray(t)?vg(t):t||null}function Xw(t,n){return(du(n)?n.asyncValidators:t)||null}function e1(t){return Array.isArray(t)?_g(t):t||null}function du(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function t1(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new R(1e3,"");if(!i[e])throw new R(1001,"")}function n1(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new R(-1002,"")})}var nu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ke(this.statusReactive)}set status(n){ke(()=>this.statusReactive.set(n))}_status=yt(()=>this.statusReactive());statusReactive=U(void 0);get valid(){return this.status===Es}get invalid(){return this.status===Zd}get pending(){return this.status===jo}get disabled(){return this.status===Is}get enabled(){return this.status!==Is}errors;get pristine(){return ke(this.pristineReactive)}set pristine(n){ke(()=>this.pristineReactive.set(n))}_pristine=yt(()=>this.pristineReactive());pristineReactive=U(!0);get dirty(){return!this.pristine}get touched(){return ke(this.touchedReactive)}set touched(n){ke(()=>this.touchedReactive.set(n))}_touched=yt(()=>this.touchedReactive());touchedReactive=U(!1);get untouched(){return!this.touched}_events=new T;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Nw(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Nw(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Pw(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Pw(n,this._rawAsyncValidators))}hasValidator(n){return Qd(this._rawValidators,n)}hasAsyncValidator(n){return Qd(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(J(D({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ts(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ts(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(J(D({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ss(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ss(!0,i))}markAsPending(n={}){this.status=jo;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Bo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(J(D({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Is,this.errors=null,this._forEachChild(r=>{r.disable(J(D({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Jd(this.value,i)),this._events.next(new Bo(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(J(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Es,this._forEachChild(i=>{i.enable(J(D({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(J(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Es||this.status===jo)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Jd(this.value,e)),this._events.next(new Bo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(J(D({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Is:Es}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=jo,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=Uw(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Bo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?Is:this.errors?Zd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(jo)?jo:this._anyControlsHaveStatus(Zd)?Zd:Es}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Ss(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ts(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){du(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=JO(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=e1(this._rawAsyncValidators)}},iu=class extends nu{constructor(n,e,i){super(Kw(e),Xw(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){n1(this,!0,n),Object.keys(n).forEach(i=>{t1(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,J(D({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new tu(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ks=new x("",{factory:()=>uu}),uu="always";function ru(t,n,e=uu){bg(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),r1(t,n),a1(t,n),o1(t,n),i1(t,n)}function ou(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),su(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function au(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function i1(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function bg(t,n){let e=qw(t);n.validator!==null?t.setValidators(Ow(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Zw(t);n.asyncValidator!==null?t.setAsyncValidators(Ow(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();au(n._rawValidators,r),au(n._rawAsyncValidators,r)}function su(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=qw(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=Zw(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return au(n._rawValidators,i),au(n._rawAsyncValidators,i),e}function r1(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Jw(t,n)})}function o1(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Jw(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Jw(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function a1(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function ex(t,n){t==null,bg(t,n)}function s1(t,n){return su(t,n)}function l1(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function c1(t){return Object.getPrototypeOf(t.constructor)===BO}function tx(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function d1(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===cu?e=o:c1(o)?i=o:r=o}),r||i||e||null}function u1(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var f1={provide:Rr,useExisting:$t(()=>As)},Ms=Promise.resolve(),As=(()=>{class t extends Rr{callSetDisabledState;get submitted(){return ke(this.submittedReactive)}_submitted=yt(()=>this.submittedReactive());submittedReactive=U(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new iu({},vg(e),_g(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ms.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),ru(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ms.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ms.then(()=>{let i=this._findContainer(e.path),r=new iu({});ex(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ms.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Ms.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),tx(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new eu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(N(hg,10),N(gg,10),N(ks,8))};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&le("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Fe([f1]),Ce]})}return t})();function Fw(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Lw(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var yg=class extends nu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(Kw(e),Xw(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),du(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Lw(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new tu(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Fw(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Fw(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Lw(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var m1=t=>t instanceof yg;var nx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var p1=(()=>{class t extends Rr{callSetDisabledState;get submitted(){return ke(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=yt(()=>this._submittedReactive());_submittedReactive=U(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(su(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return ru(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){ou(e.control||null,e,!1),u1(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,tx(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new eu(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(ou(i||null,e),m1(r)&&(ru(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);ex(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&s1(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){bg(this.form,this),this._oldForm&&su(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(N(hg,10),N(gg,10),N(ks,8))};static \u0275dir=P({type:t,features:[Ce,Ee]})}return t})();var ix=new x(""),h1={provide:Or,useExisting:$t(()=>Cg)},Cg=(()=>{class t extends Or{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new $;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=d1(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&ou(i,this,!1),ru(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}l1(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ou(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(N(hg,10),N(gg,10),N(lu,10),N(ix,8),N(ks,8))};static \u0275dir=P({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Fe([h1]),Ce,Ee]})}return t})();var g1={provide:Rr,useExisting:$t(()=>wg)},wg=(()=>{class t extends p1{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&le("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Fe([g1]),Ce]})}return t})();var rx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({})}return t})();var ox=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ks,useValue:e.callSetDisabledState??uu}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[rx]})}return t})(),ax=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ix,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ks,useValue:e.callSetDisabledState??uu}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[rx]})}return t})();var Vo=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Je(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Je(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(we("aria-orientation",r.vertical?"vertical":"horizontal"),H("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),sx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Ye]})}return t})();var lx=(()=>{class t{_animationsDisabled=nt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&H("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var fu=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Ye]})}return t})();var _1=["*"];var b1=["unscopedContent"],y1=["text"],C1=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],w1=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var x1=new x("ListOption"),D1=(()=>{class t{_elementRef=d(j);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),E1=(()=>{class t{_elementRef=d(j);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),I1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),cx=(()=>{class t{_listOption=d(x1,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:4,hostBindings:function(i,r){i&2&&H("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),M1=(()=>{class t extends cx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ce]})}return t})(),S1=(()=>{class t extends cx{static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ce]})}return t})(),T1=new x("MAT_LIST_CONFIG"),xg=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Je(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(Je(e))}_disabled=U(!1);_defaultOptions=d(T1,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:1,hostBindings:function(i,r){i&2&&we("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),k1=(()=>{class t{_elementRef=d(j);_ngZone=d(F);_listBase=d(xg,{optional:!0});_platform=d(be);_hostElement;_isButtonElement;_noopAnimations=nt();_avatars;_icons;set lines(e){this._explicitLines=Hn(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Je(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(Je(e))}_disabled=U(!1);_subscriptions=new pe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(pt).load(Ri);let e=d(Fo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ar(this,this._ngZone,this._hostElement,this._platform,d(se)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(At(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,contentQueries:function(i,r,o){if(i&1&&bt(o,M1,4)(o,S1,4),i&2){let a;B(a=V())&&(r._avatars=a),B(a=V())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(we("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),H("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var dx=(()=>{class t extends xg{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Fe([{provide:xg,useExisting:t}]),Ce],ngContentSelectors:_1,decls:1,vars:0,template:function(i,r){i&1&&(Te(),z(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var ux=(()=>{class t extends k1{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=Je(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&bt(o,E1,5)(o,D1,5)(o,I1,5),i&2){let a;B(a=V())&&(r._lines=a),B(a=V())&&(r._titles=a),B(a=V())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ke(b1,5)(y1,5),i&2){let o;B(o=V())&&(r._unscopedContent=o.first),B(o=V())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(we("aria-current",r._getAriaCurrent()),H("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Ce],ngContentSelectors:w1,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Te(C1),z(0),v(1,"span",1),z(2,1),z(3,2),v(4,"span",2,0),le("cdkObserveContent",function(){return r._updateItemLines(!0)}),z(6,3),g()(),z(7,4),z(8,5),I(9,"div",3))},dependencies:[Id],encapsulation:2,changeDetection:0})}return t})();var fx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Md,Fd,fu,Ye,sx]})}return t})();var R1=t=>[t,"map","analyze"],O1=()=>["../.."],N1=t=>[t,"convoy"],P1=t=>[t,"shop"];function F1(t,n){if(t&1&&(v(0,"a",1),_(1,"Chapter Post"),g()),t&2){let e=b();S("href",e.getChapterPostUrl(),je)}}function L1(t,n){if(t&1&&(v(0,"a",2),_(1,"Convoy"),g()),t&2){let e=b();S("routerLink",qe(1,N1,`/${e.teamName}`))}}function j1(t,n){if(t&1&&(v(0,"a",2),_(1,"Shop"),g()),t&2){let e=b();S("routerLink",qe(1,P1,`/${e.teamName}`))}}var mu=class t{constructor(n,e){this.teamDataService=n;this.activatedRoute=e;this.teamDataService=d(ue),this.activatedRoute=d(Ct)}teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getChapterPostUrl(){return this.teamDataService.getChapterPostUrl()??""}showConvoyLink(){return this.teamDataService.isConvoyConfigured()}showShopLink(){return this.teamDataService.isShopConfigured()}getGoogleSheetUrl(){let n=this.teamDataService.getWorksheetID()??"";return n.length<1?"":`https://docs.google.com/spreadsheets/d/${n}/edit`}static \u0275fac=function(e){return new(e||t)(N(ue),N(Ct))};static \u0275cmp=M({type:t,selectors:[["map-links-sidenav"]],decls:11,vars:9,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list")(2,"a",1),_(3,"Google Sheets"),g(),C(4,F1,2,1,"a",1),C(5,L1,2,3,"a",2),C(6,j1,2,3,"a",2),v(7,"a",2),_(8,"Map Analyzer Tool"),g(),v(9,"a",2),_(10,"Home"),g()()()),e&2&&(m(2),S("href",i.getGoogleSheetUrl(),je),m(2),w(i.getChapterPostUrl().length>0?4:-1),m(),w(i.showConvoyLink()?5:-1),m(),w(i.showShopLink()?6:-1),m(),S("routerLink",qe(6,R1,`/${i.teamName}`)),m(2),S("routerLink",an(8,O1)))},dependencies:[fx,dx,ux,ko],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var B1=["notch"],V1=["matFormFieldNotchedOutline",""],U1=["*"],mx=["iconPrefixContainer"],px=["textPrefixContainer"],hx=["iconSuffixContainer"],gx=["textSuffixContainer"],H1=["textField"],z1=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],$1=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function W1(t,n){t&1&&I(0,"span",21)}function G1(t,n){if(t&1&&(v(0,"label",20),z(1,1),C(2,W1,1,0,"span",21),g()),t&2){let e=b(2);S("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),we("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function q1(t,n){if(t&1&&C(0,G1,3,5,"label",20),t&2){let e=b();w(e._hasFloatingLabel()?0:-1)}}function Z1(t,n){t&1&&I(0,"div",7)}function Y1(t,n){}function Q1(t,n){if(t&1&&Mt(0,Y1,0,0,"ng-template",13),t&2){b(2);let e=on(1);S("ngTemplateOutlet",e)}}function K1(t,n){if(t&1&&(v(0,"div",9),C(1,Q1,1,1,null,13),g()),t&2){let e=b();S("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),w(e._forceDisplayInfixLabel()?-1:1)}}function X1(t,n){t&1&&(v(0,"div",10,2),z(2,2),g())}function J1(t,n){t&1&&(v(0,"div",11,3),z(2,3),g())}function eN(t,n){}function tN(t,n){if(t&1&&Mt(0,eN,0,0,"ng-template",13),t&2){b();let e=on(1);S("ngTemplateOutlet",e)}}function nN(t,n){t&1&&(v(0,"div",14,4),z(2,4),g())}function iN(t,n){t&1&&(v(0,"div",15,5),z(2,5),g())}function rN(t,n){t&1&&I(0,"div",16)}function oN(t,n){t&1&&(v(0,"div",18),z(1,6),g())}function aN(t,n){if(t&1&&(v(0,"mat-hint",22),_(1),g()),t&2){let e=b(2);S("id",e._hintLabelId),m(),de(e.hintLabel)}}function sN(t,n){if(t&1&&(v(0,"div",19),C(1,aN,2,2,"mat-hint",22),z(2,7),I(3,"div",23),z(4,8),g()),t&2){let e=b();m(),w(e.hintLabel?1:-1)}}var Dg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-label"]]})}return t})(),lN=new x("MatError");var Eg=(()=>{class t{align="start";id=d(kt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&($e("id",r.id),we("align",null),H("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),cN=new x("MatPrefix");var dN=new x("MatSuffix");var xx=new x("FloatingLabelParent"),vx=(()=>{class t{_elementRef=d(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(Gd);_ngZone=d(F);_parent=d(xx);_resizeSubscription=new pe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return uN(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&H("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function uN(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var _x="mdc-line-ripple--active",pu="mdc-line-ripple--deactivating",bx=(()=>{class t{_elementRef=d(j);_cleanupTransitionEnd;constructor(){let e=d(F),i=d(Le);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(pu),e.add(_x)}deactivate(){this._elementRef.nativeElement.classList.add(pu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(pu);e.propertyName==="opacity"&&r&&i.remove(_x,pu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),yx=(()=>{class t{_elementRef=d(j);_ngZone=d(F);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ke(B1,5),i&2){let o;B(o=V())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&H("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:V1,ngContentSelectors:U1,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Te(),xe(0,"div",1),X(1,"div",2,0),z(3),ne(),xe(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Ig=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t})}return t})();var Rs=new x("MatFormField"),fN=new x("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Cx="fill",mN="auto",wx="fixed",pN="translateY(-50%)",hu=(()=>{class t{_elementRef=d(j);_changeDetectorRef=d(Xe);_platform=d(be);_idGenerator=d(kt);_ngZone=d(F);_defaults=d(fN,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ha("iconPrefixContainer");_textPrefixContainerSignal=Ha("textPrefixContainer");_iconSuffixContainerSignal=Ha("iconSuffixContainer");_textSuffixContainerSignal=Ha("textSuffixContainer");_prefixSuffixContainers=yt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=d0(Dg);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Je(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||mN}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Cx;this._appearanceSignal.set(i)}_appearanceSignal=U(Cx);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||wx}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||wx}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new T;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=nt();constructor(){let e=this._defaults,i=d(Ht);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),vn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=yt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(gt([void 0,void 0]),ee(()=>[i.errorState,i.userAriaDescribedBy]),gl(),ye(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Pe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),At(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){m0({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=yt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,h=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${pN} translateX(${h}))`,k=a+s+l+c;return[y,k]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Rc(o,r._labelChild,Dg,5),bt(o,Ig,5)(o,cN,5)(o,dN,5)(o,lN,5)(o,Eg,5)),i&2){Nc();let a;B(a=V())&&(r._formFieldControl=a.first),B(a=V())&&(r._prefixChildren=a),B(a=V())&&(r._suffixChildren=a),B(a=V())&&(r._errorChildren=a),B(a=V())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Oc(r._iconPrefixContainerSignal,mx,5)(r._textPrefixContainerSignal,px,5)(r._iconSuffixContainerSignal,hx,5)(r._textSuffixContainerSignal,gx,5),Ke(H1,5)(mx,5)(px,5)(hx,5)(gx,5)(vx,5)(yx,5)(bx,5)),i&2){Nc(4);let o;B(o=V())&&(r._textField=o.first),B(o=V())&&(r._iconPrefixContainer=o.first),B(o=V())&&(r._textPrefixContainer=o.first),B(o=V())&&(r._iconSuffixContainer=o.first),B(o=V())&&(r._textSuffixContainer=o.first),B(o=V())&&(r._floatingLabel=o.first),B(o=V())&&(r._notchedOutline=o.first),B(o=V())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&H("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Fe([{provide:Rs,useExisting:t},{provide:xx,useExisting:t}])],ngContentSelectors:$1,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Te(z1),Mt(0,q1,1,1,"ng-template",null,0,Pc),v(2,"div",6,1),le("click",function(a){return r._control.onContainerClick(a)}),C(4,Z1,1,0,"div",7),v(5,"div",8),C(6,K1,2,2,"div",9),C(7,X1,3,0,"div",10),C(8,J1,3,0,"div",11),v(9,"div",12),C(10,tN,1,1,null,13),z(11),g(),C(12,nN,3,0,"div",14),C(13,iN,3,0,"div",15),g(),C(14,rN,1,0,"div",16),g(),v(15,"div",17),C(16,oN,2,0,"div",18)(17,sN,5,1,"div",19),g()),i&2){let o;m(2),H("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),m(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),m(2),w(r._hasOutline()?6:-1),m(),w(r._hasIconPrefix?7:-1),m(),w(r._hasTextPrefix?8:-1),m(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),m(2),w(r._hasTextSuffix?12:-1),m(),w(r._hasIconSuffix?13:-1),m(),w(r._hasOutline()?-1:14),m(),H("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();m(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[vx,yx,Wp,bx,Eg],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Os=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Md,hu,Ye]})}return t})();var gN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),vN={passive:!0},Dx=(()=>{class t{_platform=d(be);_ngZone=d(F);_renderer=d(at).createRenderer(null,null);_styleLoader=d(pt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return We;this._styleLoader.load(gN);let i=Bt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new T,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,vN)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Bt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ex=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({})}return t})();var Ix=new x("MAT_INPUT_VALUE_ACCESSOR");var Mx=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gu=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var _N=["button","checkbox","file","hidden","image","radio","range","reset","submit"],bN=new x("MAT_INPUT_CONFIG"),Sx=(()=>{class t{_elementRef=d(j);_platform=d(be);ngControl=d(Or,{optional:!0,self:!0});_autofillMonitor=d(Dx);_ngZone=d(F);_formField=d(Rs,{optional:!0});_renderer=d(Le);_uid=d(kt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(bN,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new T;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Je(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Yd.required)??!1}set required(e){this._required=Je(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Uh().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Je(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Uh().has(e));constructor(){let e=d(As,{optional:!0}),i=d(wg,{optional:!0}),r=d(Mx),o=d(Ix,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?ti(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new gu(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&vn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){_N.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&le("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&($e("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),we("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),H("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",me]},exportAs:["matInput"],features:[Fe([{provide:Ig,useExisting:t}]),Ee]})}return t})(),Tx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Os,Os,Ex,Ye]})}return t})();var CN=["text"],wN=[[["mat-icon"]],"*"],xN=["mat-icon","*"];function DN(t,n){if(t&1&&I(0,"mat-pseudo-checkbox",1),t&2){let e=b();S("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function EN(t,n){if(t&1&&I(0,"mat-pseudo-checkbox",3),t&2){let e=b();S("disabled",e.disabled)}}function IN(t,n){if(t&1&&(v(0,"span",4),_(1),g()),t&2){let e=b();m(),_e("(",e.group.label,")")}}var Mg=new x("MAT_OPTION_PARENT_COMPONENT"),Sg=new x("MatOptgroup");var Ns=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Uo=(()=>{class t{_element=d(j);_changeDetectorRef=d(Xe);_parent=d(Mg,{optional:!0});group=d(Sg,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(kt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=U(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new T;constructor(){let e=d(pt);e.load(Ri),e.load(Dd),this._signalDisableRipple=!!this._parent&&ti(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!cn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ns(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ke(CN,7),i&2){let o;B(o=V())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&le("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&($e("id",r.id),we("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),H("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",me]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:xN,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Te(wN),C(0,DN,1,2,"mat-pseudo-checkbox",1),z(1),v(2,"span",2,0),z(4,1),g(),C(5,EN,1,1,"mat-pseudo-checkbox",3),C(6,IN,2,1,"span",4),I(7,"div",5)),i&2&&(w(r.multiple?0:-1),m(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),m(),w(r.group&&r.group._inert?6:-1),m(),S("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[lx,Cs],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function kx(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function Ax(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var Rx=Od();function Bx(t){return new vu(t.get(Sn),t.get(ie))}var vu=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=it(-this._previousScrollPosition.left),n.style.top=it(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Rx&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Rx&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function Vx(t,n){return new _u(t.get(Lo),t.get(F),t.get(Sn),n)}var _u=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ye(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ps=class{enable(){}disable(){}attach(){}};function Tg(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function Ox(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Du(t,n){return new bu(t.get(Lo),t.get(Sn),t.get(F),n)}var bu=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Tg(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ux=(()=>{class t{_injector=d(se);constructor(){}noop=()=>new Ps;close=e=>Vx(this._injector,e);block=()=>Bx(this._injector);reposition=e=>Du(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ho=class{positionStrategy;scrollStrategy=new Ps;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var yu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Hx=(()=>{class t{_attachedOverlays=[];_document=d(ie);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zx=(()=>{class t extends Hx{_ngZone=d(F);_renderer=d(at).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$x=(()=>{class t extends Hx{_platform=d(be);_ngZone=d(F);_renderer=d(at).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Tt(e)};_clickListener=e=>{let i=Tt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(Nx(s.overlayElement,i)||Nx(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=He(t)))(r||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Nx(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Wx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),Gx=(()=>{class t{_platform=d(be);_containerElement;_document=d(ie);_styleLoader=d(pt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Vh()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Vh()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Wx)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),kg=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ag(t){return t&&t.nodeType===1}var Cu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new T;_attachments=new T;_detachments=new T;_positionStrategy;_scrollStrategy;_locationChanges=pe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new T;_outsidePointerEvents=new T;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,u=!1,f,p){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=f,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=lt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=D(D({},this._config),n),this._updateElementSize()}setDirection(n){this._config=J(D({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=it(this._config.width),n.height=it(this._config.height),n.minWidth=it(this._config.minWidth),n.minHeight=it(this._config.minHeight),n.maxWidth=it(this._config.maxWidth),n.maxHeight=it(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ag(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new kg(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=ai(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=lt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Px="cdk-overlay-connected-position-bounding-box",MN=/([A-Za-z%]+)$/;function Eu(t,n){return new wu(n,t.get(Sn),t.get(ie),t.get(be),t.get(Gx))}var wu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new T;_resizeSubscription=pe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Px),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(c,e,i,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Nr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Px),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof j?this._origin.nativeElement:Ag(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=Lx(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let u=0-a,f=a+o.width-i.width,p=0-s,h=s+o.height-i.height,y=this._subtractOverflows(o.width,u,f),k=this._subtractOverflows(o.height,p,h),O=y*k;return{visibleArea:O,isCompletelyWithinViewport:o.width*o.height===O,fitsInViewportVertically:k===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=Fx(this._overlayRef.getConfig().minHeight),s=Fx(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Lx(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=c||-a:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!SN(this._lastScrollVisibility,i)){let r=new yu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),y=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-y/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,p;if(c)p=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),y=this._lastBoundingBoxSize.width;u=h*2,f=n.x-h,u>y&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-y/2)}return{top:a,left:f,bottom:s,right:p,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=it(i.width),r.height=it(i.height),r.top=it(i.top)||"auto",r.bottom=it(i.bottom)||"auto",r.left=it(i.left)||"auto",r.right=it(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=it(o)),a&&(r.maxWidth=it(a))}this._lastBoundingBoxSize=i,Nr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Nr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Nr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Nr(i,this._getExactOverlayY(e,n,u)),Nr(i,this._getExactOverlayX(e,n,u))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=it(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=it(a.maxWidth):o&&(i.maxWidth="")),Nr(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=it(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=it(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ox(n,i),isOriginOutsideView:Tg(n,i),isOverlayClipped:Ox(e,i),isOverlayOutsideView:Tg(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ai(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof j)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Nr(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function Fx(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(MN);return!e||e==="px"?parseFloat(n):null}return t||null}function Lx(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function SN(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var jx="cdk-global-overlay-wrapper";function qx(t){return new xu}var xu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(jx),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,f=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",h="",y="",k="";l?k="flex-start":u==="center"?(k="center",p?y=f:h=f):p?u==="left"||u==="end"?(k="flex-end",h=f):(u==="right"||u==="start")&&(k="flex-start",y=f):u==="left"||u==="start"?(k="flex-start",h=f):(u==="right"||u==="end")&&(k="flex-end",y=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":y,e.justifyContent=k,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(jx),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Zx=(()=>{class t{_injector=d(se);constructor(){}global(){return qx()}flexibleConnectedTo(e){return Eu(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yx=new x("OVERLAY_DEFAULT_CONFIG");function Iu(t,n){t.get(pt).load(Wx);let e=t.get(Gx),i=t.get(ie),r=t.get(kt),o=t.get(rn),a=t.get(Ht),s=t.get(Le,null,{optional:!0})||t.get(at).createRenderer(null,null),l=new Ho(n),c=t.get(Yx,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Ag(p)?p.after(f):p?.type==="parent"?p.element.appendChild(f):e.getContainerElement().appendChild(f),new Cu(new Wd(u,o,t),f,u,l,t.get(F),t.get(zx),i,t.get(Mi),t.get($x),n?.disableAnimations??t.get(Ra,null,{optional:!0})==="NoopAnimations",t.get(Se),s)}var Qx=(()=>{class t{scrollStrategies=d(Ux);_positionBuilder=d(Zx);_injector=d(se);constructor(){}create(e){return Iu(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({providers:[Qx],imports:[Ye,Ew,Yh,Yh]})}return t})();var Og=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Fd,fu,Uo,Ye]})}return t})();var TN=["panel"],kN=["*"];function AN(t,n){if(t&1&&(X(0,"div",1,0),z(2),ne()),t&2){let e=n.id,i=b();Ut(i._classList),H("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),$e("id",i.id),we("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var Ng=class{source;option;constructor(n,e){this.source=n,this.option=e}},Kx=new x("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Xx=(()=>{class t{_changeDetectorRef=d(Xe);_elementRef=d(j);_defaults=d(Kx);_animationsDisabled=nt();_activeOptionChanges=pe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new $;opened=new $;closed=new $;optionActivated=new $;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=d(kt).getId("mat-autocomplete-");inertGroups;constructor(){let e=d(be);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new _s(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Ng(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&bt(o,Uo,5)(o,Sg,5),i&2){let a;B(a=V())&&(r.options=a),B(a=V())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ke(It,7)(TN,5),i&2){let o;B(o=V())&&(r.template=o.first),B(o=V())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",me],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",me],requireSelection:[2,"requireSelection","requireSelection",me],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",me],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",me]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Fe([{provide:Mg,useExisting:t}])],ngContentSelectors:kN,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Te(),fo(0,AN,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var RN={provide:lu,useExisting:$t(()=>Pg),multi:!0};var ON=new x("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(se);return()=>Du(t)}}),Pg=(()=>{class t{_environmentInjector=d(Se);_element=d(j);_injector=d(se);_viewContainerRef=d(_t);_zone=d(F);_changeDetectorRef=d(Xe);_dir=d(Ht,{optional:!0});_formField=d(Rs,{optional:!0,host:!0});_viewportRuler=d(Sn);_scrollStrategy=d(ON);_renderer=d(Le);_animationsDisabled=nt();_defaults=d(Kx,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new T;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=pe.EMPTY;_breakpointObserver=d(vs);_handsetLandscapeSubscription=pe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new T;_overlayPanelClass=ai(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Ad(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return At(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ye(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ye(()=>this._overlayAttached)):Q()).pipe(ee(e=>e instanceof Ns?e:null))}optionSelections=qi(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(gt(e),ot(()=>At(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(ot(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Z(e=>{let i=o=>{let a=Tt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=cn(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Cd()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Z(r=>{lt(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(xt(()=>this._positionStrategy.reapplyLastPosition()),ff(0))??Q();return At(e,i).pipe(ot(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ut(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;Bh(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new si(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Iu(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(aw.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!cn(e)||e.keyCode===38&&cn(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ho({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Eu(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=kx(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=Ax(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&Ad(this._trackedModal,"aria-owns",i),Bh(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Ad(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&le("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&we("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",me]},exportAs:["matAutocompleteTrigger"],features:[Fe([RN]),Ee]})}return t})(),Jx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=te({imports:[Rg,Og,ws,Og,Ye]})}return t})();function PN(t,n){if(t&1&&(X(0,"a",4),_(1),ne()),t&2){let e=b();$e("href",e.titleHref(),je),m(),de(e.title())}}function FN(t,n){if(t&1&&_(0),t&2){let e=b();_e(" ",e.title()," ")}}function LN(t,n){if(t&1&&(X(0,"p"),_(1),ne()),t&2){let e=n.$implicit;m(),de(e)}}var Mu=class t{label=De.required();title=De.required();titleHref=De();textFields=De();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(X(0,"div",0)(1,"h2",1),_(2),ne(),xe(3,"div",2),X(4,"h2",3),C(5,PN,2,2,"a",4)(6,FN,1,1),ne()(),ge(7,LN,2,1,"p",null,ze)),e&2&&(m(2),de(i.label()),m(3),w(i.titleHref()?5:6),m(2),ve(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function jN(t,n){t&1&&_(0," \xA0 ")}function BN(t,n){if(t&1&&(_(0),C(1,jN,1,0),_(2)),t&2){let e=b(3);_e(" ",e.constants.currencySymbol," "),m(),w(e.constants.includeSpace?1:-1),m(),_e(" ",e.amount()," ")}}function VN(t,n){t&1&&_(0," \xA0 ")}function UN(t,n){if(t&1&&(_(0),C(1,VN,1,0),_(2)),t&2){let e=b(3);_e(" ",e.amount()," "),m(),w(e.constants.includeSpace?1:-1),m(),_e(" ",e.constants.currencySymbol," ")}}function HN(t,n){if(t&1&&C(0,BN,3,3)(1,UN,3,3),t&2){let e=b(2);w(e.constants.isSymbolLeftAligned?0:1)}}function zN(t,n){if(t&1&&_(0),t&2){let e=b(2);_e(" ",e.amount()," ")}}function $N(t,n){if(t&1&&C(0,HN,2,1)(1,zN,1,1),t&2){let e=b();w(e.constants?0:1)}}var Su=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(ue),this.constants=this.teamDataService.getCurrencyConstants()}amount=De.required();constants;static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&C(0,$N,2,1),e&2&&w(i.amount()?0:-1)},encapsulation:2})};function WN(t,n){if(t&1&&xe(0,"img",1),t&2){let e=b();$e("src",e.systemData==null?null:e.systemData.spriteURL,je)}}var Tu=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(ue)}tag=De.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Ee],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(X(0,"div",0),C(1,WN,1,1,"img",1),X(2,"p"),_(3),ne()()),e&2&&($e("title",i.tag()),m(),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),m(2),de(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var ku=class t{percentage=De.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Ee],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&xe(0,"div",0),e&2&&Zt("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function GN(t,n){if(t&1&&xe(0,"img",1),t&2){let e=b(3);$e("height",e.height())}}function qN(t,n){if(t&1&&xe(0,"img",2),t&2){let e=b(3);$e("height",e.height())}}function ZN(t,n){if(t&1&&C(0,GN,1,1,"img",1)(1,qN,1,1,"img",2),t&2){let e=b(2);w(e.final()<e.base()?0:1)}}function YN(t,n){if(t&1&&xe(0,"img",3),t&2){let e=b(3);$e("height",e.height())}}function QN(t,n){if(t&1&&xe(0,"img",4),t&2){let e=b(3);$e("height",e.height())}}function KN(t,n){if(t&1&&C(0,YN,1,1,"img",3)(1,QN,1,1,"img",4),t&2){let e=b(2);w(e.final()>e.base()?0:1)}}function XN(t,n){if(t&1&&C(0,ZN,2,1)(1,KN,2,1),t&2){let e=b();w(e.invertColors()?0:1)}}var zo=class t{base=De.required();final=De.required();invertColors=De(!1);height=De(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(X(0,"span",0),C(1,XN,2,1),X(2,"span"),_(3),ne()()),e&2&&(m(),w(i.base()!==i.final()?1:-1),m(2),de(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var JN=t=>({shaded:t}),eP=(t,n)=>n.key;function tP(t,n){if(t&1&&(v(0,"div",10)(1,"p"),_(2),g(),v(3,"p"),_(4),g()()),t&2){let e=n.$implicit,i=n.$index;S("ngClass",qe(3,JN,i%2===0)),m(2),de(e.key),m(2),de(e.value)}}function nP(t,n){if(t&1&&(v(0,"div",6),I(1,"div",7),v(2,"div",8)(3,"div",9)(4,"p"),_(5,"Base"),g(),v(6,"p"),_(7),g()(),ge(8,tP,5,5,"div",10,eP),En(10,"keyvalue"),g()()),t&2){let e=b();m(7),de(e.values().baseValue),m(),ve(Ba(10,1,e.values().modifiers))}}var Au=class t{name=De.required();values=De.required();expanded=De.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),_(4),g(),I(5,"div",4),g(),I(6,"stat-with-buff-icon",5),g(),C(7,nP,11,3,"div",6),g()),e&2&&(m(4),de(i.name()),m(2),S("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),m(),w(i.expanded()?7:-1))},dependencies:[br,zo,ni],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var iP=(t,n)=>n.key;function rP(t,n){if(t&1&&xe(0,"img",4),t&2){let e=b();$e("src",e.systemData==null?null:e.systemData.spriteURL,je)}}function oP(t,n){if(t&1&&_(0),t&2){let e=b(2);vr(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function aP(t,n){if(t&1&&_(0),t&2){let e=b(2);_e(" (",e.status().remainingTurns," turns) ")}}function sP(t,n){if(t&1&&C(0,oP,1,2)(1,aP,1,1),t&2){let e=b();w(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function lP(t,n){t&1&&_(0,", ")}function cP(t,n){if(t&1&&(_(0),C(1,lP,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;vr(" ",e.value," ",e.key),m(),w(i!==r-1?1:-1)}}function dP(t,n){t&1&&xe(0,"img",6)}function uP(t,n){t&1&&xe(0,"img",7)}function fP(t,n){t&1&&xe(0,"img",8)}function mP(t,n){t&1&&xe(0,"img",9)}function pP(t,n){if(t&1&&(X(0,"p"),_(1),ne()),t&2){let e=n.$implicit;m(),de(e)}}var Ru=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(ue)}status=De.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Ee],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(X(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,rP,1,1,"img",4),_(5),C(6,sP,2,1),ne(),X(7,"p"),ge(8,cP,2,3,null,null,iP),En(10,"keyvalue"),ne()(),X(11,"div",5),C(12,dP,1,0,"img",6),C(13,uP,1,0,"img",7)(14,fP,1,0,"img",8)(15,mP,1,0,"img",9),ne()(),ge(16,pP,2,1,"p",null,ze),ne()),e&2){let r;m(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),_e(" ",i.status().name," "),m(),w((i.status().remainingTurns??0)>0?6:-1),m(2),ve(Ba(10,5,i.status().additionalStats)),m(4),w(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),m(),w((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),m(3),ve(i.systemData==null?null:i.systemData.textFields)}},dependencies:[ni],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var Fg=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(Fg||{});function hP(t,n){if(t&1&&xe(0,"img",2),t&2){let e=b();$e("src",e.systemData==null?null:e.systemData.spriteURL,je)}}function gP(t,n){if(t&1&&(X(0,"p"),_(1),ne()),t&2){let e=n.$implicit;m(),de(e)}}var Ou=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(ue)}name=De.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Ee],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(X(0,"div",0)(1,"div",1),C(2,hP,1,1,"img",2),X(3,"span"),_(4),ne()(),ge(5,gP,2,1,"p",null,ze),ne()),e&2&&(m(2),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),m(2),de(i.name()),m(),ve(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var vP=t=>({opacity50:t}),_P=t=>({droppableTextColor:t}),Fs=()=>[],bP=(t,n)=>n.key;function yP(t,n){if(t&1&&I(0,"img",4),t&2){let e=b();S("src",e.systemData==null?null:e.systemData.spriteURL,je)}}function CP(t,n){if(t&1&&_(0),t&2){let e=b();_e(" (",e.item().uses,") ")}}function wP(t,n){if(t&1&&I(0,"img",12),t&2){let e,i=b().$implicit,r=b(2);S("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,je)("title",i)}}function xP(t,n){if(t&1&&C(0,wP,1,2,"img",12),t&2){let e,i=n.$implicit,r=b(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function DP(t,n){if(t&1&&ge(0,xP,1,1,null,null,Ei),t&2){let e=b();ve(e.item().engravings)}}function EP(t,n){if(t&1&&I(0,"img",12),t&2){let e,i=b().$implicit,r=b(2);S("src",(e=r.getTagByName(i))==null?null:e.spriteURL,je)("title",i)}}function IP(t,n){if(t&1&&C(0,EP,1,2,"img",12),t&2){let e,i=n.$implicit,r=b(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function MP(t,n){if(t&1&&ge(0,IP,1,1,null,null,Ei),t&2){let e=b();ve(e.item().tags)}}function SP(t,n){if(t&1&&_(0),t&2){let e=b();_e(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function TP(t,n){t&1&&I(0,"img",8)}function kP(t,n){t&1&&I(0,"img",9)}function AP(t,n){t&1&&I(0,"img",10)}function RP(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2),g(),I(3,"stat-with-buff-icon",15),g()),t&2){let e=n.$implicit;m(2),de(e.key),m(),S("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function OP(t,n){if(t&1&&(ge(0,RP,4,5,"div",14,bP),En(2,"keyvalue")),t&2){let e=b(3);ve(_r(2,0,e.item().stats,e.sortStats))}}function NP(t,n){if(t&1&&(_(0," \xA0-\xA0"),I(1,"stat-with-buff-icon",17)),t&2){let e,i,r=b(4);m(),S("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function PP(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2,"Rng"),g(),v(3,"div",16),I(4,"stat-with-buff-icon",17),C(5,NP,2,3),g()()),t&2){let e,i,r,o=b(3);m(4),S("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),m(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function FP(t,n){t&1&&_(0," Square ")}function LP(t,n){t&1&&_(0," Cross ")}function jP(t,n){t&1&&_(0," Saltire ")}function BP(t,n){t&1&&_(0," Star ")}function VP(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2,"Shp"),g(),v(3,"div"),C(4,FP,1,0)(5,LP,1,0)(6,jP,1,0)(7,BP,1,0),g()()),t&2){let e,i=b(3);m(4),w((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function UP(t,n){t&1&&_(0," Quantity ")}function HP(t,n){t&1&&_(0," Uses ")}function zP(t,n){if(t&1&&_(0),t&2){let e=b(4);_e(" ",e.item().uses," ")}}function $P(t,n){t&1&&_(0," /\xA0 ")}function WP(t,n){if(t&1&&(C(0,$P,1,0),I(1,"stat-with-buff-icon",15)),t&2){let e=b(4);w((e.item().uses??0)>0?0:-1),m(),S("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function GP(t,n){if(t&1&&(v(0,"div",14)(1,"div"),C(2,UP,1,0)(3,HP,1,0),g(),v(4,"div",16),C(5,zP,1,1),C(6,WP,2,5),g()()),t&2){let e=b(3);m(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),m(3),w((e.item().uses??0)>0?5:-1),m(),w((e.item().maxUses??0)>0?6:-1)}}function qP(t,n){if(t&1&&(I(0,"mat-divider"),v(1,"div",13),C(2,OP,3,3),C(3,PP,6,4,"div",14),C(4,VP,8,1,"div",14),C(5,GP,7,3,"div",14),g()),t&2){let e,i=b(2);m(2),w(((i.systemData==null?null:i.systemData.utilizedStats)??an(4,Fs)).length>0||i.hasNonZeroStatValue()?2:-1),m(),w((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),m(),w(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),m(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function ZP(t,n){if(t&1&&I(0,"engraving",18),t&2){let e=n.$implicit;S("name",e)}}function YP(t,n){if(t&1&&(v(0,"p"),_(1),g()),t&2){let e=n.$implicit;m(),de(e)}}function QP(t,n){if(t&1&&I(0,"img",19),t&2){let e=b(3);S("src",e.systemData==null?null:e.systemData.graphicUrl,je)}}function KP(t,n){if(t&1&&(I(0,"mat-divider"),ge(1,ZP,1,1,"engraving",18,Ei),ge(3,YP,2,1,"p",null,ze),C(5,QP,1,1,"img",19)),t&2){let e=b(2);m(),ve(e.item().engravings),m(2),ve(e.systemData==null?null:e.systemData.textFields),m(2),w(((e.systemData==null?null:e.systemData.graphicUrl)??"").length>0?5:-1)}}function XP(t,n){if(t&1&&(v(0,"div",11),C(1,qP,6,5),C(2,KP,6,1),g()),t&2){let e,i=b();m(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??an(2,Fs)).length>0?1:-1),m(),w(((i.systemData==null?null:i.systemData.textFields)??an(3,Fs)).length>0||((i.systemData==null?null:i.systemData.graphicUrl)??"").length>0?2:-1)}}function JP(t,n){t&1&&(v(0,"div",20),I(1,"img",21),v(2,"span"),_(3,"Item Range Not Visible"),g()())}function eF(t,n){t&1&&(v(0,"div",20),I(1,"img",21),v(2,"span"),_(3,"Item Not Found In Inventory"),g()())}function tF(t,n){if(t&1&&(I(0,"mat-divider"),C(1,JP,4,0,"div",20),C(2,eF,4,0,"div",20)),t&2){let e=b();m(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),m(),w(e.item().isNotInInventory?2:-1)}}var Nu=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(ue)}ItemRangeShape=Fg;item=De.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Ee],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(v(0,"div",0),le("click",function(){return i.toggleExpansion()}),v(1,"div",1)(2,"div",2)(3,"div",3),C(4,yP,1,1,"img",4),v(5,"div",5),_(6),C(7,CP,1,1),g(),C(8,DP,2,0),C(9,MP,2,0),g(),v(10,"div",6),C(11,SP,1,1),_(12),g()(),v(13,"div",7),C(14,TP,1,0,"img",8),C(15,kP,1,0,"img",9),C(16,AP,1,0,"img",10),g()(),C(17,XP,3,4,"div",11),C(18,tF,3,2),g()),e&2&&(m(),S("ngClass",qe(15,vP,!i.item().canEquip||i.item().isUsePrevented)),m(3),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),S("ngClass",qe(17,_P,i.item().isDroppable)),m(),_e(" ",i.item().name," "),m(),w((i.item().uses??0)>0?7:-1),m(),w((i.item().engravings??an(19,Fs)).length>0?8:-1),m(),w((i.item().tags??an(20,Fs)).length>0?9:-1),m(2),w(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),m(),vr(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),m(2),w(i.item().isUsePrevented?14:-1),m(),w(i.item().isDroppable?15:-1),m(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),m(),w(i.isExpanded?17:-1),m(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[Vo,zo,br,Ou,ni],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function nF(t,n){if(t&1&&I(0,"img",4),t&2){let e=b();S("src",e.systemData==null?null:e.systemData.spriteURL,je)}}function iF(t,n){if(t&1&&(v(0,"div",5),_(1),g()),t&2){let e=b();m(),_e(" ",e.getAdditionalStatsText()," ")}}function rF(t,n){t&1&&I(0,"img",7)}function oF(t,n){if(t&1&&(v(0,"p"),_(1),g()),t&2){let e=n.$implicit;m(),de(e)}}function aF(t,n){if(t&1&&(I(0,"mat-divider"),ge(1,oF,2,1,"p",null,ze)),t&2){let e=b();m(),ve(e.systemData==null?null:e.systemData.textFields)}}var Pu=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(ue)}skill=De.required();expanded=De(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Ee],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,nF,1,1,"img",4),_(5),g(),C(6,iF,2,1,"div",5),g(),v(7,"div",6),C(8,rF,1,0,"img",7),g()(),C(9,aF,3,0),g()),e&2&&(m(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),_e(" ",i.skill().name," "),m(),w(i.getAdditionalStatsText().length>0?6:-1),m(2),w(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),m(),w(i.expanded()?9:-1))},dependencies:[Vo],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var Fu=t=>({rotate90:t}),eD=()=>[],Lg=(t,n)=>n.key;function sF(t,n){if(t&1&&(v(0,"div",0),I(1,"img",32),g()),t&2){let e=b();m(),S("src",e.unit().sprite.portraitURL,je)}}function lF(t,n){if(t&1&&_(0),t&2){let e=b();_e(" Lvl. ",e.unit().stats.level," ")}}function cF(t,n){if(t&1&&_(0),t&2){let e,i=b();_e(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function dF(t,n){if(t&1&&I(0,"img",6),t&2){let e,i=b();S("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,je)}}function uF(t,n){if(t&1&&(v(0,"div",10)(1,"div",33)(2,"div",34),_(3),g(),v(4,"div",35),I(5,"div",36)(6,"div",37),g()()()),t&2){let e=b();S("title",e.unit().player),m(3),de(e.unit().player)}}function fF(t,n){if(t&1&&(v(0,"p",41),_(1),g()),t&2){let e=n.$implicit;m(),de(e)}}function mF(t,n){if(t&1&&ge(0,fF,2,1,"p",41,ze),t&2){let e=b(2);ve(e.unit().textFields)}}function pF(t,n){if(t&1&&I(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=b(3);S("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function hF(t,n){if(t&1&&ge(0,pF,1,3,"text-fields-with-labeled-header",42,ze),t&2){let e=b(2);ve(e.unit().classes)}}function gF(t,n){if(t&1&&I(0,"text-fields-with-labeled-header",40),t&2){let e=b(2);S("titleHref",e.unit().characterApplicationURL)}}function vF(t,n){if(t&1&&(v(0,"div",13),C(1,mF,2,0),I(2,"text-fields-with-labeled-header",38),C(3,hF,2,0),I(4,"text-fields-with-labeled-header",39),C(5,gF,1,1,"text-fields-with-labeled-header",40),g()),t&2){let e,i=b();m(),w(i.unit().textFields?1:-1),m(),S("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),m(),w(i.unit().classes?3:-1),m(),S("title",i.unit().movementType),m(),w(i.unit().characterApplicationURL?5:-1)}}function _F(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),_(2,"Exp"),g(),v(3,"div"),_(4),g()()),t&2){let e=b();m(4),de(e.unit().stats.experience)}}function bF(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),_(2,"Money"),g(),I(3,"currency",43),g()),t&2){let e=b();m(3),S("amount",e.unit().stats.heldCurrency)}}function yF(t,n){if(t&1&&I(0,"unit-tag",47),t&2){let e=n.$implicit;S("tag",e)}}function CF(t,n){if(t&1&&(v(0,"div",23)(1,"div",44),I(2,"img",45),g(),v(3,"div",46),ge(4,yF,1,1,"unit-tag",47,ze),g()()),t&2){let e=b();m(4),ve(e.unit().tags)}}function wF(t,n){if(t&1&&(v(0,"div",24)(1,"div",48),I(2,"img",49),g(),v(3,"div",34)(4,"p"),_(5),g()()()),t&2){let e=b();m(5),de(e.unit().behavior)}}function xF(t,n){if(t&1&&I(0,"unit-status-condition",53),t&2){let e=n.$implicit;S("status",e)}}function DF(t,n){if(t&1&&(v(0,"div",25)(1,"div",50),I(2,"img",51),g(),v(3,"div",52),ge(4,xF,1,1,"unit-status-condition",53,ze),g()()),t&2){let e=b();m(4),ve(e.unit().statusConditions)}}function EF(t,n){if(t&1&&I(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=b(2);S("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function IF(t,n){if(t&1&&(v(0,"div",29),ge(1,EF,1,3,"modified-unit-stat",54,Lg),En(3,"keyvalue"),g()),t&2){let e=b();m(),ve(_r(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function MF(t,n){if(t&1&&I(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=b(2);S("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function SF(t,n){if(t&1&&(v(0,"div",29),ge(1,MF,1,3,"modified-unit-stat",54,Lg),En(3,"keyvalue"),g()),t&2){let e=b();m(),ve(_r(3,0,e.unit().stats.system,e.sortModifiedUnitStat))}}function TF(t,n){if(t&1&&I(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=b(2);S("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function kF(t,n){if(t&1&&(v(0,"div",29),ge(1,TF,1,3,"modified-unit-stat",54,Lg),En(3,"keyvalue"),g()),t&2){let e=b();m(),ve(_r(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function AF(t,n){if(t&1&&(v(0,"h3"),_(1),g()),t&2){let e=b().$index,i=b(2);m(),de(i.getInventorySubsectionLabel(e))}}function RF(t,n){if(t&1&&I(0,"inventory-item",56),t&2){let e=n.$implicit;S("item",e)}}function OF(t,n){if(t&1&&(v(0,"div",57)(1,"span"),_(2),g()()),t&2){let e=b().$implicit;m(),Zt("opacity",.5),m(),_e("Empty x",e.emptySlotCount)}}function NF(t,n){if(t&1&&(v(0,"div",55),C(1,AF,2,1,"h3"),ge(2,RF,1,1,"inventory-item",56,ze),C(4,OF,3,3,"div",57),g()),t&2){let e=n.$implicit,i=n.$index,r=b(2);m(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),m(),ve(e.items),m(2),w(e.emptySlotCount>0?4:-1)}}function PF(t,n){if(t&1&&ge(0,NF,5,2,"div",55,ze),t&2){let e,i=b();ve((e=i.unit().inventory)==null?null:e.subsections)}}function FF(t,n){if(t&1&&(v(0,"h3"),_(1),g()),t&2){let e=b().$index,i=b(3);m(),de(i.getSkillSubsectionLabel(e))}}function LF(t,n){if(t&1&&I(0,"unit-skill",60),t&2){let e=n.$implicit;S("skill",e)}}function jF(t,n){if(t&1&&(v(0,"div",55),C(1,FF,2,1,"h3"),ge(2,LF,1,1,"unit-skill",60,ze),g()),t&2){let e=n.$implicit,i=n.$index,r=b(3);m(),w(r.getSkillSubsectionLabel(i).length>0?1:-1),m(),ve(e.skills)}}function BF(t,n){if(t&1&&ge(0,jF,4,1,"div",55,ze),t&2){let e=b(2);ve(e.unit().skillSubsections)}}function VF(t,n){if(t&1){let e=Dn();I(0,"mat-divider"),v(1,"div",58)(2,"div",59)(3,"button",8),le("click",function(){Pt(e);let r=b();return Ft(r.toggleSkillsExpansion())}),I(4,"img",9),g(),v(5,"h2"),_(6),g()(),C(7,BF,2,0),g()}if(t&2){let e=b();m(3),S("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),m(),Ut(qe(5,Fu,e.isSkillsInfoExpanded)),m(2),de(e.getSkillsLabel()),m(),w(e.isSkillsInfoExpanded?7:-1)}}var Lu=class t{constructor(n){this.teamDataService=n;this.teamDataService=d(ue)}unit=De.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Ee],decls:52,vars:39,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(C(0,sF,2,1,"div",0),v(1,"div",1),I(2,"img",2),v(3,"hgroup",3)(4,"h1",4),_(5),g(),v(6,"p",5),C(7,lF,1,1),C(8,cF,1,1),g()(),C(9,dF,1,1,"img",6),g(),v(10,"div",7)(11,"button",8),le("click",function(){return i.toggleUnitInfoExpansion()}),I(12,"img",9),g(),C(13,uF,7,2,"div",10),v(14,"button",11),I(15,"img",12),g()(),C(16,vF,6,6,"div",13),v(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),_(21,"HP"),g(),v(22,"div",18)(23,"span",19),_(24),g(),v(25,"span",20),_(26),g()()(),I(27,"unit-hp-bar",21),g(),C(28,_F,5,1,"div",22),C(29,bF,4,1,"div",22),g(),C(30,CF,6,0,"div",23),C(31,wF,6,1,"div",24),C(32,DF,6,0,"div",25),v(33,"div",26)(34,"div",27)(35,"button",8),le("click",function(){return i.toggleStatExpansion()}),I(36,"img",9),g(),v(37,"h2"),_(38,"Stats"),g()(),v(39,"div",28),C(40,IF,4,3,"div",29),C(41,SF,4,3,"div",29),C(42,kF,4,3,"div",29),g()(),I(43,"mat-divider"),v(44,"div",30)(45,"div",31)(46,"button",8),le("click",function(){return i.toggleInventoryExpansion()}),I(47,"img",9),g(),v(48,"h2"),_(49),g()(),C(50,PF,2,0),g(),C(51,VF,8,7)),e&2){let r;w(i.unit().sprite.portraitURL?0:-1),m(2),S("src",i.unit().sprite.spriteURL,je),m(3),de(i.unit().name),m(2),w(i.unit().stats.level>0?7:-1),m(),w(i.unit().classes?8:-1),m(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),m(2),S("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),m(),Ut(qe(31,Fu,i.isUnitInfoExpanded)),m(),w(i.unit().player?13:-1),m(3),w(i.isUnitInfoExpanded?16:-1),m(8),de(i.unit().stats.hp.current),m(2),_e("/ ",i.unit().stats.hp.maximum),m(),S("percentage",i.unit().stats.hp.percentage),m(),w((i.unit().stats.experience??0)>0?28:-1),m(),w((i.unit().stats.heldCurrency??0)>0?29:-1),m(),w((i.unit().tags??an(33,eD)).length>0?30:-1),m(),w(i.unit().behavior?31:-1),m(),w((i.unit().statusConditions??an(34,eD)).length>0?32:-1),m(3),S("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),m(),Ut(qe(35,Fu,i.isStatsInfoExpanded)),m(4),w(i.unit().stats.combat?40:-1),m(),w(i.unit().stats.system?41:-1),m(),w(i.unit().stats.general?42:-1),m(4),S("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),m(),Ut(qe(37,Fu,i.isInventoryExpanded)),m(2),de(i.getInventoryLabel()),m(),w(i.isInventoryExpanded?50:-1),m(),w(i.unit().hasSkills?51:-1)}},dependencies:[Gh,Mu,Su,Tu,ku,Au,Ru,Vo,Nu,Pu,ni],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var UF=["unitAutocompleteInput"],HF=(t,n)=>n.name;function zF(t,n){if(t&1&&(v(0,"mat-option",5)(1,"div",7),I(2,"img",8),v(3,"div"),_(4),g()()()),t&2){let e=n.$implicit;S("value",e),m(2),S("src",e.sprite.spriteURL,je),m(2),de(e.name)}}function $F(t,n){if(t&1&&I(0,"unit-sidenav-display",6),t&2){let e=b();S("unit",e.selectedUnit.value)}}var ju=class t{constructor(n){this.dataService=n;this.dataService=d(ue),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new yg(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(N(ue))};static \u0275cmp=M({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ke(UF,5),e&2){let r;B(r=V())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(v(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),le("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),v(5,"mat-autocomplete",4,1),ge(7,zF,5,3,"mat-option",5,HF),g()()(),C(9,$F,1,1,"unit-sidenav-display",6),g()),e&2){let r=on(6);m(3),S("formControl",i.selectedUnit)("matAutocomplete",r),m(2),S("displayWith",i.formatAutocompleteDisplayValue),m(2),ve(i.filteredUnits),m(2),w(i.selectedUnit.value?9:-1)}},dependencies:[ox,nx,cu,Yw,Qw,As,Os,hu,Tx,Sx,Jx,Xx,Uo,Pg,ax,Cg,Lu],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var Bu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(X(0,"p"),_(1,"map-tiles-view works!"),ne())},encapsulation:2})};function WF(t,n){t&1&&_(0," U ")}function GF(t,n){t&1&&I(0,"img",7)}function qF(t,n){t&1&&I(0,"img",8)}function ZF(t,n){t&1&&I(0,"img",9)}function YF(t,n){t&1&&I(0,"img",10)}function QF(t,n){if(t&1&&(v(0,"mat-tab",6),_(1),g()),t&2){let e=n.$implicit;S("label",e.title),m(),_e(" ",e.title," ")}}var Vu=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=d(Ct),this.breakpointService=d(zn),this.themeService=d($n),this.teamDataService=d(ue);var o=this.route.snapshot.paramMap.get("teamName")??"";this.teamDataService.loadDataForTeam(o)}static \u0275fac=function(e){return new(e||t)(N(Ct),N(zn),N($n),N(ue))};static \u0275cmp=M({type:t,selectors:[["map-view"]],decls:25,vars:1,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],[1,"sidebarTabs"],["mat-tab-label",""],["mat-stretch-tabs","false","mat-align-tabs","start",1,"segmentTabs"],[3,"label"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"]],template:function(e,i){if(e&1){let r=Dn();v(0,"button",1),le("click",function(){Pt(r);let a=on(4);return Ft(a.toggle())}),_(1,">"),g(),v(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),Mt(7,WF,1,0,"ng-template",4),I(8,"map-units-sidenav"),g(),v(9,"mat-tab"),Mt(10,GF,1,0,"ng-template",4),I(11,"map-tiles-sidenav"),g(),v(12,"mat-tab"),Mt(13,qF,1,0,"ng-template",4),_(14," Image download "),g(),v(15,"mat-tab"),Mt(16,ZF,1,0,"ng-template",4),I(17,"map-links-sidenav"),g(),v(18,"mat-tab"),Mt(19,YF,1,0,"ng-template",4),I(20,"map-dice-roller-sidenav"),g()()(),v(21,"mat-sidenav-content")(22,"mat-tab-group",5),ge(23,QF,2,2,"mat-tab",6,ze),g()()()}if(e&2){let r;m(3),S("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),m(20),ve((r=i.teamDataService.mapData().map)==null?null:r.segments)}},dependencies:[Jh,xw,Ud,ug,Rw,dg,bw,mu,ju,Bu,qd],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: 450px;anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}mat-tab-group.sidebarTabs[_ngcontent-%COMP%]{height:100vh}mat-tab-group.segmentTabs[_ngcontent-%COMP%]{--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft}mat-tab-group.segmentTabs[_ngcontent-%COMP%]   mat-tab-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-background);margin-left:48px}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}']})};var Uu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(X(0,"p"),_(1,"map-analysis-view works!"),ne())},encapsulation:2})};var Hu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(X(0,"p"),_(1,"convoy-view works!"),ne())},encapsulation:2})};var zu=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(X(0,"p"),_(1,"shop-view works!"),ne())},encapsulation:2})};var tD=[{path:"",component:Bd,title:"Reddit Emblem Maps"},{path:":teamName/map",component:Vu,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:Uu,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Hu,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:zu,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var nD={providers:[vm(),kh(tD)]};var $u=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&I(0,"router-outlet")},dependencies:[ds],encapsulation:2})};eh($u,nD).catch(t=>console.error(t));
