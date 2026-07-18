import"./chunk-NHCJTNBZ.js";import{a as vn,b as tn,c as xl,d as Ji,e as Cy,f as Dy,g as vs,j as ky}from"./chunk-UTBQMZTO.js";import"./chunk-7MNSSQTS.js";import"./chunk-GFCAUSMW.js";import"./chunk-O5PZI2UG.js";import{a as xp}from"./chunk-CRZA4MKB.js";import{c as wl,g as Ty}from"./chunk-XEE6XFB3.js";import{n as Jn,o as yl,p as Ci,r as Pr,s as wy,u as My}from"./chunk-XVUYF73X.js";import"./chunk-T4FVDLIT.js";import{a as Nr,b as $t}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as yp,j as Ay}from"./chunk-2CBZRCFT.js";import{a as Cl}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import"./chunk-LCJGWLOZ.js";import{F as Xi,G as Fe,J as Ey,L as Sy,O as Iy,a as y,b as G,c as Or,d as Ho,e as dk,f as Q,g as Bt,i as vp,o as _p,q as bp,r as cn}from"./chunk-AE73MMSB.js";var hy=Ho(kr=>{"use strict";Object.defineProperty(kr,"__esModule",{value:!0});kr.loop=kr.conditional=kr.parse=void 0;var tz=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};kr.parse=tz;var nz=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};kr.conditional=nz;var iz=function(n,e){return function(i,r,o,a){for(var s=[],c=i.pos;e(i,r,o);){var l={};if(a(i,n,r,l),i.pos===c)break;c=i.pos,s.push(l)}return s}};kr.loop=iz});var gy=Ho(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.readBits=yt.readArray=yt.readUnsigned=yt.readString=yt.peekBytes=yt.readBytes=yt.peekByte=yt.readByte=yt.buildStream=void 0;var rz=function(n){return{data:n,pos:0}};yt.buildStream=rz;var JM=function(){return function(n){return n.data[n.pos++]}};yt.readByte=JM;var oz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};yt.peekByte=oz;var rp=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};yt.readBytes=rp;var az=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};yt.peekBytes=az;var sz=function(n){return function(e){return Array.from(rp(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};yt.readString=sz;var cz=function(n){return function(e){var i=rp(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};yt.readUnsigned=cz;var lz=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=rp(n),c=new Array(a),l=0;l<a;l++)c[l]=s(i);return c}};yt.readArray=lz;var dz=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},uz=function(n){return function(e){for(var i=JM()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var c=n[s];return c.length?a[s]=dz(r,c.index,c.length):a[s]=r[c.index],a},{})}};yt.readBits=uz});var ek=Ho(ap=>{"use strict";Object.defineProperty(ap,"__esModule",{value:!0});ap.default=void 0;var Tr=hy(),Ee=gy(),op={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Ee.readByte)()(n);a!==e&&a;a=(0,Ee.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Ee.readBytes)(s)(n)),o+=s;break}i.push((0,Ee.readBytes)(a)(n)),o+=a}for(var c=new Uint8Array(o),l=0,d=0;d<i.length;d++)c.set(i[d],l),l+=i[d].length;return c}},mz=(0,Tr.conditional)({gce:[{codes:(0,Ee.readBytes)(2)},{byteSize:(0,Ee.readByte)()},{extras:(0,Ee.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Ee.readUnsigned)(!0)},{transparentColorIndex:(0,Ee.readByte)()},{terminator:(0,Ee.readByte)()}]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),fz=(0,Tr.conditional)({image:[{code:(0,Ee.readByte)()},{descriptor:[{left:(0,Ee.readUnsigned)(!0)},{top:(0,Ee.readUnsigned)(!0)},{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{lct:(0,Ee.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,Tr.conditional)({lct:(0,Ee.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Ee.readByte)()},op]}]},function(t){return(0,Ee.peekByte)()(t)===44}),pz=(0,Tr.conditional)({text:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{preData:function(n,e,i){return(0,Ee.readBytes)(i.text.blockSize)(n)}},op]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),hz=(0,Tr.conditional)({application:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{id:function(n,e,i){return(0,Ee.readString)(i.blockSize)(n)}},op]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),gz=(0,Tr.conditional)({comment:[{codes:(0,Ee.readBytes)(2)},op]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),vz=[{header:[{signature:(0,Ee.readString)(3)},{version:(0,Ee.readString)(3)}]},{lsd:[{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{gct:(0,Ee.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Ee.readByte)()},{pixelAspectRatio:(0,Ee.readByte)()}]},(0,Tr.conditional)({gct:(0,Ee.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,Tr.loop)([mz,hz,gz,fz,pz],function(t){var n=(0,Ee.peekByte)()(t);return n===33||n===44})}],_z=vz;ap.default=_z});var tk=Ho(sp=>{"use strict";Object.defineProperty(sp,"__esModule",{value:!0});sp.deinterlace=void 0;var bz=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(f,h){var _=n.slice(h*e,(h+1)*e);i.splice.apply(i,[f*e,e].concat(_))},a=[0,4,2,1],s=[8,8,4,2],c=0,l=0;l<4;l++)for(var d=a[l];d<r;d+=s[l])o(d,c),c++;return i};sp.deinterlace=bz});var nk=Ho(cp=>{"use strict";Object.defineProperty(cp,"__esModule",{value:!0});cp.lzw=void 0;var yz=function(n,e,i){var r=4096,o=-1,a=i,s,c,l,d,m,f,h,en,_,T,xt,I,Rn,On,Rr,Uo,O=new Array(i),he=new Array(r),Ne=new Array(r),Re=new Array(r+1);for(I=n,c=1<<I,m=c+1,s=c+2,h=o,d=I+1,l=(1<<d)-1,_=0;_<c;_++)he[_]=0,Ne[_]=_;var xt,en,sn,Rn,On,Uo,Rr;for(xt=en=sn=Rn=On=Uo=Rr=0,T=0;T<a;){if(On===0){if(en<d){xt+=e[Rr]<<en,en+=8,Rr++;continue}if(_=xt&l,xt>>=d,en-=d,_>s||_==m)break;if(_==c){d=I+1,l=(1<<d)-1,s=c+2,h=o;continue}if(h==o){Re[On++]=Ne[_],h=_,Rn=_;continue}for(f=_,_==s&&(Re[On++]=Rn,_=h);_>c;)Re[On++]=Ne[_],_=he[_];Rn=Ne[_]&255,Re[On++]=Rn,s<r&&(he[s]=h,Ne[s]=Rn,s++,(s&l)===0&&s<r&&(d++,l+=s)),h=f}On--,O[Uo++]=Re[On],T++}for(T=Uo;T<a;T++)O[T]=0;return O};cp.lzw=yz});var rk=Ho(Ar=>{"use strict";Object.defineProperty(Ar,"__esModule",{value:!0});Ar.decompressFrames=Ar.decompressFrame=Ar.parseGIF=void 0;var xz=Sz(ek()),Cz=hy(),wz=gy(),Dz=tk(),Ez=nk();function Sz(t){return t&&t.__esModule?t:{default:t}}var Iz=function(n){var e=new Uint8Array(n);return(0,Cz.parse)((0,wz.buildStream)(e),xz.default)};Ar.parseGIF=Iz;var Mz=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},ik=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,Ez.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,Dz.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=Mz(s)),s};Ar.decompressFrame=ik;var kz=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return ik(i,n.gct,e)})};Ar.decompressFrames=kz});var Vt=null,Dl=!1,Cp=1,uk=null,Xe=Symbol("SIGNAL");function J(t){let n=Vt;return Vt=t,n}function El(){return Vt}var wi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function er(t){if(Dl)throw new Error("");if(Vt===null)return;Vt.consumerOnSignalRead(t);let n=Vt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Vt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Vt.producers,e!==void 0&&e.producer===t)){Vt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Vt&&(!i||mk(r,Vt)))return;let o=$o(Vt),a={producer:t,consumer:Vt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Vt.producersTail=a,n!==void 0?n.nextProducer=a:Vt.producers=a,o&&Fy(t,a)}function Ry(){Cp++}function Br(t){if(!($o(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Cp)){if(!t.producerMustRecompute(t)&&!Vr(t)){zo(t);return}t.producerRecomputeValue(t),zo(t)}}function wp(t){if(t.consumers===void 0)return;let n=Dl;Dl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||Oy(i)}}finally{Dl=n}}function Dp(){return Vt?.consumerAllowSignalWrites!==!1}function Oy(t){t.dirty=!0,wp(t),t.consumerMarkedDirty?.(t)}function zo(t){t.dirty=!1,t.lastCleanEpoch=Cp}function ti(t){return t&&Ny(t),J(t)}function Ny(t){t.producersTail=void 0,t.recomputing=!0}function Di(t,n){J(n),t&&Py(t)}function Py(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if($o(t))do e=Ep(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Vr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Br(e),i!==e.version))return!0}return!1}function Ei(t){if($o(t)){let n=t.producers;for(;n!==void 0;)n=Ep(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Fy(t,n){let e=t.consumersTail,i=$o(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Fy(r.producer,r)}function Ep(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!$o(n)){let o=n.producers;for(;o!==void 0;)o=Ep(o)}return e}function $o(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function _s(t){uk?.(t)}function mk(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function bs(t,n){return Object.is(t,n)}function ys(t,n){let e=Object.create(fk);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Br(e),er(e),e.value===ei)throw e.error;return e.value};return i[Xe]=e,_s(e),i}var Fr=Symbol("UNSET"),Lr=Symbol("COMPUTING"),ei=Symbol("ERRORED"),fk=G(y({},wi),{value:Fr,dirty:!0,error:null,equal:bs,kind:"computed",producerMustRecompute(t){return t.value===Fr||t.value===Lr},producerRecomputeValue(t){if(t.value===Lr)throw new Error("");let n=t.value;t.value=Lr;let e=ti(t),i,r=!1;try{i=t.computation(),J(null),r=n!==Fr&&n!==ei&&i!==ei&&t.equal(n,i)}catch(o){i=ei,t.error=o}finally{Di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function pk(){throw new Error}var Ly=pk;function By(t){Ly(t)}function Sp(t){Ly=t}var hk=null;function Ip(t,n){let e=Object.create(xs);e.value=t,n!==void 0&&(e.equal=n);let i=()=>Vy(e);return i[Xe]=e,_s(e),[i,a=>jr(e,a),a=>Sl(e,a)]}function Vy(t){return er(t),t.value}function jr(t,n){Dp()||By(t),t.equal(t.value,n)||(t.value=n,gk(t))}function Sl(t,n){Dp()||By(t),jr(t,n(t.value))}var xs=G(y({},wi),{equal:bs,value:void 0,kind:"signal"});function gk(t){t.version++,Ry(),wp(t),hk?.(t)}var Mp=G(y({},wi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function kp(t){if(t.dirty=!1,t.version>0&&!Vr(t))return;t.version++;let n=ti(t);try{t.cleanup(),t.fn()}finally{Di(t,n)}}function ge(t){return typeof t=="function"}function Go(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Il=Go(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Ur(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var _e=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ge(i))try{i()}catch(o){n=o instanceof Il?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{jy(o)}catch(a){n=n??[],a instanceof Il?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Il(n)}}add(n){var e;if(n&&n!==this)if(this.closed)jy(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Ur(e,n)}remove(n){let{_finalizers:e}=this;e&&Ur(e,n),n instanceof t&&n._removeParent(this)}};_e.EMPTY=(()=>{let t=new _e;return t.closed=!0,t})();var Tp=_e.EMPTY;function Ml(t){return t instanceof _e||t&&"closed"in t&&ge(t.remove)&&ge(t.add)&&ge(t.unsubscribe)}function jy(t){ge(t)?t():t.unsubscribe()}var Nn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Wo={setTimeout(t,n,...e){let{delegate:i}=Wo;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Wo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function kl(t){Wo.setTimeout(()=>{let{onUnhandledError:n}=Nn;if(n)n(t);else throw t})}function Hr(){}var Uy=Ap("C",void 0,void 0);function Hy(t){return Ap("E",void 0,t)}function zy(t){return Ap("N",t,void 0)}function Ap(t,n,e){return{kind:t,value:n,error:e}}var zr=null;function qo(t){if(Nn.useDeprecatedSynchronousErrorHandling){let n=!zr;if(n&&(zr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=zr;if(zr=null,e)throw i}}else t()}function $y(t){Nn.useDeprecatedSynchronousErrorHandling&&zr&&(zr.errorThrown=!0,zr.error=t)}var $r=class extends _e{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Ml(n)&&n.add(this)):this.destination=bk}static create(n,e,i){return new Si(n,e,i)}next(n){this.isStopped?Op(zy(n),this):this._next(n)}error(n){this.isStopped?Op(Hy(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Op(Uy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},vk=Function.prototype.bind;function Rp(t,n){return vk.call(t,n)}var Np=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Tl(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Tl(i)}else Tl(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Tl(e)}}},Si=class extends $r{constructor(n,e,i){super();let r;if(ge(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Nn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Rp(n.next,o),error:n.error&&Rp(n.error,o),complete:n.complete&&Rp(n.complete,o)}):r=n}this.destination=new Np(r)}};function Tl(t){Nn.useDeprecatedSynchronousErrorHandling?$y(t):kl(t)}function _k(t){throw t}function Op(t,n){let{onStoppedNotification:e}=Nn;e&&Wo.setTimeout(()=>e(t,n))}var bk={closed:!0,next:Hr,error:_k,complete:Hr};var Zo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function ln(t){return t}function Pp(...t){return Fp(t)}function Fp(t){return t.length===0?ln:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var oe=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=xk(e)?e:new Si(e,i,r);return qo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Gy(i),new i((r,o)=>{let a=new Si({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Zo](){return this}pipe(...e){return Fp(e)(this)}toPromise(e){return e=Gy(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Gy(t){var n;return(n=t??Nn.Promise)!==null&&n!==void 0?n:Promise}function yk(t){return t&&ge(t.next)&&ge(t.error)&&ge(t.complete)}function xk(t){return t&&t instanceof $r||yk(t)&&Ml(t)}function Ck(t){return ge(t?.lift)}function be(t){return n=>{if(Ck(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(t,n,e,i,r){return new Lp(t,n,e,i,r)}var Lp=class extends $r{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Wy=Go(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var R=(()=>{class t extends oe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Al(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Wy}next(e){qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Tp:(this.currentObservers=null,o.push(e),new _e(()=>{this.currentObservers=null,Ur(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new oe;return e.source=this,e}}return t.create=(n,e)=>new Al(n,e),t})(),Al=class extends R{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Tp}};var pt=class extends R{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Cs={now(){return(Cs.delegate||Date).now()},delegate:void 0};var Rl=class extends R{constructor(n=1/0,e=1/0,i=Cs){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var Ol=class extends _e{constructor(n,e){super()}schedule(n,e=0){return this}};var ws={setInterval(t,n,...e){let{delegate:i}=ws;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ws;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Nl=class extends Ol{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ws.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ws.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Ur(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Yo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Yo.now=Cs.now;var Pl=class extends Yo{constructor(n,e=Yo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Gr=new Pl(Nl),qy=Gr;var ot=new oe(t=>t.complete());function Fl(t){return t&&ge(t.schedule)}function Bp(t){return t[t.length-1]}function Ll(t){return ge(Bp(t))?t.pop():void 0}function ni(t){return Fl(Bp(t))?t.pop():void 0}function Zy(t,n){return typeof Bp(t)=="number"?t.pop():n}function Ky(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{l(i.next(d))}catch(m){a(m)}}function c(d){try{l(i.throw(d))}catch(m){a(m)}}function l(d){d.done?o(d.value):r(d.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function Yy(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Wr(t){return this instanceof Wr?(this.v=t,this):new Wr(t)}function Qy(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(_){return Promise.resolve(_).then(h,m)}}function s(h,_){i[h]&&(r[h]=function(T){return new Promise(function(I,O){o.push([h,T,I,O])>1||c(h,T)})},_&&(r[h]=_(r[h])))}function c(h,_){try{l(i[h](_))}catch(T){f(o[0][3],T)}}function l(h){h.value instanceof Wr?Promise.resolve(h.value.v).then(d,m):f(o[0][2],h)}function d(h){c("next",h)}function m(h){c("throw",h)}function f(h,_){h(_),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Xy(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Yy=="function"?Yy(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var Bl=t=>t&&typeof t.length=="number"&&typeof t!="function";function Vl(t){return ge(t?.then)}function jl(t){return ge(t[Zo])}function Ul(t){return Symbol.asyncIterator&&ge(t?.[Symbol.asyncIterator])}function Hl(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function wk(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var zl=wk();function $l(t){return ge(t?.[zl])}function Gl(t){return Qy(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Wr(e.read());if(r)return yield Wr(void 0);yield yield Wr(i)}}finally{e.releaseLock()}})}function Wl(t){return ge(t?.getReader)}function ze(t){if(t instanceof oe)return t;if(t!=null){if(jl(t))return Dk(t);if(Bl(t))return Ek(t);if(Vl(t))return Sk(t);if(Ul(t))return Jy(t);if($l(t))return Ik(t);if(Wl(t))return Mk(t)}throw Hl(t)}function Dk(t){return new oe(n=>{let e=t[Zo]();if(ge(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ek(t){return new oe(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Sk(t){return new oe(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,kl)})}function Ik(t){return new oe(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Jy(t){return new oe(n=>{kk(t,n).catch(e=>n.error(e))})}function Mk(t){return Jy(Gl(t))}function kk(t,n){var e,i,r,o;return Ky(this,void 0,void 0,function*(){try{for(e=Xy(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function nn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function ql(t,n=0){return be((e,i)=>{e.subscribe(we(i,r=>nn(i,t,()=>i.next(r),n),()=>nn(i,t,()=>i.complete(),n),r=>nn(i,t,()=>i.error(r),n)))})}function Zl(t,n=0){return be((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function e0(t,n){return ze(t).pipe(Zl(n),ql(n))}function t0(t,n){return ze(t).pipe(Zl(n),ql(n))}function n0(t,n){return new oe(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function i0(t,n){return new oe(e=>{let i;return nn(e,n,()=>{i=t[zl](),nn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ge(i?.return)&&i.return()})}function Yl(t,n){if(!t)throw new Error("Iterable cannot be null");return new oe(e=>{nn(e,n,()=>{let i=t[Symbol.asyncIterator]();nn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function r0(t,n){return Yl(Gl(t),n)}function o0(t,n){if(t!=null){if(jl(t))return e0(t,n);if(Bl(t))return n0(t,n);if(Vl(t))return t0(t,n);if(Ul(t))return Yl(t,n);if($l(t))return i0(t,n);if(Wl(t))return r0(t,n)}throw Hl(t)}function et(t,n){return n?o0(t,n):ze(t)}function K(...t){let n=ni(t);return et(t,n)}function Ds(t,n){let e=ge(t)?t:()=>t,i=r=>r.error(e());return new oe(n?r=>n.schedule(i,0,r):i)}function Es(t){return!!t&&(t instanceof oe||ge(t.lift)&&ge(t.subscribe))}var qr=Go(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function a0(t){return t instanceof Date&&!isNaN(t)}function te(t,n){return be((e,i)=>{let r=0;e.subscribe(we(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Tk}=Array;function Ak(t,n){return Tk(n)?t(...n):t(n)}function Kl(t){return te(n=>Ak(t,n))}var{isArray:Rk}=Array,{getPrototypeOf:Ok,prototype:Nk,keys:Pk}=Object;function Ql(t){if(t.length===1){let n=t[0];if(Rk(n))return{args:n,keys:null};if(Fk(n)){let e=Pk(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function Fk(t){return t&&typeof t=="object"&&Ok(t)===Nk}function Xl(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Ss(...t){let n=ni(t),e=Ll(t),{args:i,keys:r}=Ql(t);if(i.length===0)return et([],n);let o=new oe(Lk(i,n,r?a=>Xl(r,a):ln));return e?o.pipe(Kl(e)):o}function Lk(t,n,e=ln){return i=>{s0(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)s0(n,()=>{let l=et(t[c],n),d=!1;l.subscribe(we(i,m=>{o[c]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function s0(t,n,e){t?nn(e,t,n):n()}function c0(t,n,e,i,r,o,a,s){let c=[],l=0,d=0,m=!1,f=()=>{m&&!c.length&&!l&&n.complete()},h=T=>l<i?_(T):c.push(T),_=T=>{o&&n.next(T),l++;let I=!1;ze(e(T,d++)).subscribe(we(n,O=>{r?.(O),o?h(O):n.next(O)},()=>{I=!0},void 0,()=>{if(I)try{for(l--;c.length&&l<i;){let O=c.shift();a?nn(n,a,()=>_(O)):_(O)}f()}catch(O){n.error(O)}}))};return t.subscribe(we(n,h,()=>{m=!0,f()})),()=>{s?.()}}function Tt(t,n,e=1/0){return ge(n)?Tt((i,r)=>te((o,a)=>n(i,o,r,a))(ze(t(i,r))),e):(typeof n=="number"&&(e=n),be((i,r)=>c0(i,r,t,e)))}function Jl(t=1/0){return Tt(ln,t)}function l0(){return Jl(1)}function ii(...t){return l0()(et(t,ni(t)))}function Zr(t){return new oe(n=>{ze(t()).subscribe(n)})}function Is(...t){let n=Ll(t),{args:e,keys:i}=Ql(t),r=new oe(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let d=0;d<a;d++){let m=!1;ze(e[d]).subscribe(we(o,f=>{m||(m=!0,l--),s[d]=f},()=>c--,void 0,()=>{(!c||!m)&&(l||o.next(i?Xl(i,s):s),o.complete())}))}});return n?r.pipe(Kl(n)):r}function Yr(t=0,n,e=qy){let i=-1;return n!=null&&(Fl(n)?e=n:i=n),new oe(r=>{let o=a0(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Gt(...t){let n=ni(t),e=Zy(t,1/0),i=t;return i.length?i.length===1?ze(i[0]):Jl(e)(et(i,n)):ot}function Ae(t,n){return be((e,i)=>{let r=0;e.subscribe(we(i,o=>t.call(n,o,r++)&&i.next(o)))})}function d0(t){return be((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(we(e,l=>{i=!0,r=l,o||ze(t(l)).subscribe(o=we(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function ed(t,n=Gr){return d0(()=>Yr(t,n))}function Kr(t){return be((n,e)=>{let i=null,r=!1,o;i=n.subscribe(we(e,void 0,void 0,a=>{o=ze(t(a,Kr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Ko(t,n){return ge(n)?Tt(t,n,1):Tt(t,1)}function Pn(t,n=Gr){return be((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}s()}e.subscribe(we(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function u0(t){return be((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ht(t){return t<=0?()=>ot:be((n,e)=>{let i=0;n.subscribe(we(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function m0(){return be((t,n)=>{t.subscribe(we(n,Hr))})}function Qo(t){return te(()=>t)}function Vp(t,n){return n?e=>ii(n.pipe(ht(1),m0()),e.pipe(Vp(t))):Tt((e,i)=>ze(t(e,i)).pipe(ht(1),Qo(e)))}function jp(t,n=Gr){let e=Yr(t,n);return Vp(()=>e)}function td(t,n=ln){return t=t??Bk,be((e,i)=>{let r,o=!0;e.subscribe(we(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function Bk(t,n){return t===n}function f0(t=Vk){return be((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function Vk(){return new qr}function Qr(t){return be((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Ii(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ae((r,o)=>t(r,o,i)):ln,ht(1),e?u0(n):f0(()=>new qr))}function nd(t){return t<=0?()=>ot:be((n,e)=>{let i=[];n.subscribe(we(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function id(){return be((t,n)=>{let e,i=!1;t.subscribe(we(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Ms(t={}){let{connector:n=()=>new R,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,d=!1,m=!1,f=()=>{s?.unsubscribe(),s=void 0},h=()=>{f(),a=c=void 0,d=m=!1},_=()=>{let T=a;h(),T?.unsubscribe()};return be((T,I)=>{l++,!m&&!d&&f();let O=c=c??n();I.add(()=>{l--,l===0&&!m&&!d&&(s=Up(_,r))}),O.subscribe(I),!a&&l>0&&(a=new Si({next:he=>O.next(he),error:he=>{m=!0,f(),s=Up(h,e,he),O.error(he)},complete:()=>{d=!0,f(),s=Up(h,i),O.complete()}}),ze(T).subscribe(a))})(o)}}function Up(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Si({next:()=>{i.unsubscribe(),t()}});return ze(n(...e)).subscribe(i)}function rd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Ms({connector:()=>new Rl(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Xr(t){return Ae((n,e)=>t<=e)}function At(...t){let n=ni(t);return be((e,i)=>{(n?ii(t,e,n):ii(t,e)).subscribe(i)})}function gt(t,n){return be((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(we(i,c=>{r?.unsubscribe();let l=0,d=o++;ze(t(c,d)).subscribe(r=we(i,m=>i.next(n?n(c,m,d,l++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Le(t){return be((n,e)=>{ze(t).subscribe(we(e,()=>e.complete(),Hr)),!e.closed&&n.subscribe(e)})}function vt(t,n,e){let i=ge(t)||n||e?{next:t,error:n,complete:e}:t;return i?be((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(we(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):ln}var Hp;function od(){return Hp}function ri(t){let n=Hp;return Hp=t,n}var p0=Symbol("NotFound");function Xo(t){return t===p0||t?.name==="\u0275NotFound"}function zp(t,n,e){let i=Object.create(jk);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Br(i),er(i),i.value===ei)throw i.error;return i.value};return o[Xe]=i,_s(i),o}function h0(t,n){Br(t),jr(t,n),zo(t)}function g0(t,n){if(Br(t),t.value===ei)throw t.error;Sl(t,n),zo(t)}var jk=G(y({},wi),{value:Fr,dirty:!0,error:null,equal:bs,kind:"linkedSignal",producerMustRecompute(t){return t.value===Fr||t.value===Lr},producerRecomputeValue(t){if(t.value===Lr)throw new Error("");let n=t.value;t.value=Lr;let e=ti(t),i,r=!1;try{let o=t.source(),a=n!==Fr&&n!==ei,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,J(null),r=a&&i!==ei&&t.equal(n,i)}catch(o){i=ei,t.error=o}finally{Di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function v0(t){let n=J(null);try{return t()}finally{J(n)}}var md="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",A=class extends Error{code;constructor(n,e){super(ki(n,e)),this.code=n}};function Uk(t){return`NG0${Math.abs(t)}`}function ki(t,n){return`${Uk(t)}${n?": "+n:""}`}var rr=globalThis;function je(t){for(let n in t)if(t[n]===je)return n;throw Error("")}function C0(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Ps(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Ps).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function fd(t,n){return t?n?`${t} ${n}`:t:n||""}var Hk=je({__forward_ref__:je});function Zt(t){return t.__forward_ref__=Zt,t}function Rt(t){return nh(t)?t():t}function nh(t){return typeof t=="function"&&t.hasOwnProperty(Hk)&&t.__forward_ref__===Zt}function S(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ae(t){return{providers:t.providers||[],imports:t.imports||[]}}function Fs(t){return zk(t,pd)}function ih(t){return Fs(t)!==null}function zk(t,n){return t.hasOwnProperty(n)&&t[n]||null}function $k(t){let n=t?.[pd]??null;return n||null}function Gp(t){return t&&t.hasOwnProperty(sd)?t[sd]:null}var pd=je({\u0275prov:je}),sd=je({\u0275inj:je}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=S({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function rh(t){return t&&!!t.\u0275providers}var oh=je({\u0275cmp:je}),ah=je({\u0275dir:je}),sh=je({\u0275pipe:je}),ch=je({\u0275mod:je}),Ts=je({\u0275fac:je}),io=je({__NG_ELEMENT_ID__:je}),_0=je({__NG_ENV_ID__:je});function lh(t){return hd(t,"@NgModule"),t[ch]||null}function Ti(t){return hd(t,"@Component"),t[oh]||null}function dh(t){return hd(t,"@Directive"),t[ah]||null}function w0(t){return hd(t,"@Pipe"),t[sh]||null}function hd(t,n){if(t==null)throw new A(-919,!1)}function ea(t){return typeof t=="string"?t:t==null?"":String(t)}var D0=je({ngErrorCode:je}),Gk=je({ngErrorMessage:je}),Wk=je({ngTokenPath:je});function uh(t,n){return E0("",-200,n)}function gd(t,n){throw new A(-201,!1)}function E0(t,n,e){let i=new A(n,t);return i[D0]=n,i[Gk]=t,e&&(i[Wk]=e),i}function qk(t){return t[D0]}var Wp;function S0(){return Wp}function Wt(t){let n=Wp;return Wp=t,n}function mh(t,n,e){let i=Fs(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;gd(t,"")}var Zk={},Jr=Zk,Yk="__NG_DI_FLAG__",qp=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=eo(e)||0;try{return this.injector.get(n,i&8?null:Jr,i)}catch(r){if(Xo(r))return r;throw r}}};function Kk(t,n=0){let e=od();if(e===void 0)throw new A(-203,!1);if(e===null)return mh(t,void 0,n);{let i=Qk(n),r=e.retrieve(t,i);if(Xo(r)){if(i.optional)return null;throw r}return r}}function W(t,n=0){return(S0()||Kk)(Rt(t),n)}function u(t,n){return W(t,eo(n))}function eo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Qk(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Zp(t){let n=[];for(let e=0;e<t.length;e++){let i=Rt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new A(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=Xk(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(W(r,o))}else n.push(W(i))}return n}function Xk(t){return t[Yk]}function tr(t,n){let e=t.hasOwnProperty(Ts);return e?t[Ts]:null}function I0(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function M0(t){return t.flat(Number.POSITIVE_INFINITY)}function vd(t,n){t.forEach(e=>Array.isArray(e)?vd(e,n):n(e))}function fh(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ls(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function k0(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function T0(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function _d(t,n,e){let i=ta(t,n);return i>=0?t[i|1]=e:(i=~i,T0(t,i,n,e)),i}function bd(t,n){let e=ta(t,n);if(e>=0)return t[e|1]}function ta(t,n){return Jk(t,n,1)}function Jk(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var or={},jt=[],ar=new D(""),ph=new D("",-1),hh=new D(""),As=class{get(n,e=Jr){if(e===Jr){let r=E0("",-201);throw r.name="\u0275NotFound",r}return e}};function sr(t){return{\u0275providers:t}}function A0(t){return sr([{provide:ar,multi:!0,useValue:t}])}function R0(...t){return{\u0275providers:gh(!0,t),\u0275fromNgModule:!0}}function gh(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return vd(n,a=>{let s=a;cd(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&O0(r,o),e}function O0(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];vh(r,o=>{n(o,i)})}}function cd(t,n,e,i){if(t=Rt(t),!t)return!1;let r=null,o=Gp(t),a=!o&&Ti(t);if(!o&&!a){let c=t.ngModule;if(o=Gp(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)cd(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;vd(o.imports,d=>{cd(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&O0(l,n)}if(!s){let l=tr(r)||(()=>new r);n({provide:r,useFactory:l,deps:jt},r),n({provide:hh,useValue:r,multi:!0},r),n({provide:ar,useValue:()=>W(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;vh(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function vh(t,n){for(let e of t)rh(e)&&(e=e.\u0275providers),Array.isArray(e)?vh(e,n):n(e)}var eT=je({provide:String,useValue:je});function N0(t){return t!==null&&typeof t=="object"&&eT in t}function tT(t){return!!(t&&t.useExisting)}function nT(t){return!!(t&&t.useFactory)}function to(t){return typeof t=="function"}function P0(t){return!!t.useClass}var Bs=new D(""),ad={},b0={},$p;function na(){return $p===void 0&&($p=new As),$p}var Be=class{},no=class extends Be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Kp(n,a=>this.processProvider(a)),this.records.set(ph,Jo(void 0,this)),r.has("environment")&&this.records.set(Be,Jo(void 0,this));let o=this.records.get(Bs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(hh,jt,{self:!0}))}retrieve(n,e){let i=eo(e)||0;try{return this.get(n,Jr,i)}catch(r){if(Xo(r))return r;throw r}}destroy(){ks(this),this._destroyed=!0;let n=J(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),J(n)}}onDestroy(n){return ks(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){ks(this);let e=ri(this),i=Wt(void 0),r;try{return n()}finally{ri(e),Wt(i)}}get(n,e=Jr,i){if(ks(this),n.hasOwnProperty(_0))return n[_0](this);let r=eo(i),o,a=ri(this),s=Wt(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=sT(n)&&Fs(n);d&&this.injectableDefInScope(d)?l=Jo(Yp(n),ad):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?na():this.parent;return e=r&8&&e===Jr?null:e,c.get(n,e)}catch(c){let l=qk(c);throw l===-200||l===-201?new A(l,null):c}finally{Wt(s),ri(a)}}resolveInjectorInitializers(){let n=J(null),e=ri(this),i=Wt(void 0),r;try{let o=this.get(ar,jt,{self:!0});for(let a of o)a()}finally{ri(e),Wt(i),J(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Rt(n);let e=to(n)?n:Rt(n&&n.provide),i=rT(n);if(!to(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Jo(void 0,ad,!0),r.factory=()=>Zp(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=J(null);try{if(e.value===b0)throw uh("");return e.value===ad&&(e.value=b0,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&aT(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{J(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Rt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Yp(t){let n=Fs(t),e=n!==null?n.factory:tr(t);if(e!==null)return e;if(t instanceof D)throw new A(-204,!1);if(t instanceof Function)return iT(t);throw new A(-204,!1)}function iT(t){if(t.length>0)throw new A(-204,!1);let e=$k(t);return e!==null?()=>e.factory(t):()=>new t}function rT(t){if(N0(t))return Jo(void 0,t.useValue);{let n=_h(t);return Jo(n,ad)}}function _h(t,n,e){let i;if(to(t)){let r=Rt(t);return tr(r)||Yp(r)}else if(N0(t))i=()=>Rt(t.useValue);else if(nT(t))i=()=>t.useFactory(...Zp(t.deps||[]));else if(tT(t))i=(r,o)=>W(Rt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Rt(t&&(t.useClass||t.provide));if(oT(t))i=()=>new r(...Zp(t.deps));else return tr(r)||Yp(r)}return i}function ks(t){if(t.destroyed)throw new A(-205,!1)}function Jo(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function oT(t){return!!t.deps}function aT(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function sT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Kp(t,n){for(let e of t)Array.isArray(e)?Kp(e,n):e&&rh(e)?Kp(e.\u0275providers,n):n(e)}function dt(t,n){let e;t instanceof no?(ks(t),e=t):e=new qp(t);let i,r=ri(e),o=Wt(void 0);try{return n()}finally{ri(r),Wt(o)}}function F0(){return S0()!==void 0||od()!=null}var Fn=0,ne=1,le=2,Ct=3,_n=4,Yt=5,ro=6,ia=7,ut=8,Ai=9,Ln=10,We=11,ra=12,bh=13,oo=14,Kt=15,cr=16,ao=17,ai=18,Ri=19,yh=20,Mi=21,yd=22,nr=23,dn=24,so=25,lr=26,tt=27,L0=1,xh=6,dr=7,Vs=8,co=9,at=10;function Oi(t){return Array.isArray(t)&&typeof t[L0]=="object"}function Bn(t){return Array.isArray(t)&&t[L0]===!0}function Ch(t){return(t.flags&4)!==0}function si(t){return t.componentOffset>-1}function js(t){return(t.flags&1)===1}function ci(t){return!!t.template}function oa(t){return(t[le]&512)!==0}function lo(t){return(t[le]&256)===256}var wh="svg",B0="math";function bn(t){for(;Array.isArray(t);)t=t[Fn];return t}function Dh(t,n){return bn(n[t])}function yn(t,n){return bn(n[t.index])}function xd(t,n){return t.data[n]}function Cd(t,n){return t[n]}function Eh(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function xn(t,n){let e=n[t];return Oi(e)?e:e[Fn]}function V0(t){return(t[le]&4)===4}function wd(t){return(t[le]&128)===128}function j0(t){return Bn(t[Ct])}function un(t,n){return n==null?null:t[n]}function Sh(t){t[ao]=0}function Ih(t){t[le]&1024||(t[le]|=1024,wd(t)&&uo(t))}function U0(t,n){for(;t>0;)n=n[oo],t--;return n}function Us(t){return!!(t[le]&9216||t[dn]?.dirty)}function Dd(t){t[Ln].changeDetectionScheduler?.notify(8),t[le]&64&&(t[le]|=1024),Us(t)&&uo(t)}function uo(t){t[Ln].changeDetectionScheduler?.notify(0);let n=ir(t);for(;n!==null&&!(n[le]&8192||(n[le]|=8192,!wd(n)));)n=ir(n)}function Mh(t,n){if(lo(t))throw new A(911,!1);t[Mi]===null&&(t[Mi]=[]),t[Mi].push(n)}function H0(t,n){if(t[Mi]===null)return;let e=t[Mi].indexOf(n);e!==-1&&t[Mi].splice(e,1)}function ir(t){let n=t[Ct];return Bn(n)?n[Ct]:n}function kh(t){return t[ia]??=[]}function Th(t){return t.cleanup??=[]}function z0(t,n,e,i){let r=kh(n);r.push(e),t.firstCreatePass&&Th(t).push(i,r.length-1)}var ye={lFrame:tx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Qp=!1;function $0(){return ye.lFrame.elementDepthCount}function G0(){ye.lFrame.elementDepthCount++}function Ah(){ye.lFrame.elementDepthCount--}function Rh(){return ye.bindingsEnabled}function Oh(){return ye.skipHydrationRootTNode!==null}function Nh(t){return ye.skipHydrationRootTNode===t}function Ph(){ye.skipHydrationRootTNode=null}function ie(){return ye.lFrame.lView}function Je(){return ye.lFrame.tView}function Dt(t){return ye.lFrame.contextLView=t,t[ut]}function Et(t){return ye.lFrame.contextLView=null,t}function Ot(){let t=Fh();for(;t!==null&&t.type===64;)t=t.parent;return t}function Fh(){return ye.lFrame.currentTNode}function W0(){let t=ye.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function aa(t,n){let e=ye.lFrame;e.currentTNode=t,e.isParent=n}function Lh(){return ye.lFrame.isParent}function Bh(){ye.lFrame.isParent=!1}function q0(){return ye.lFrame.contextLView}function Vh(){return Qp}function Rs(t){let n=Qp;return Qp=t,n}function Hs(){let t=ye.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Z0(){return ye.lFrame.bindingIndex}function Y0(t){return ye.lFrame.bindingIndex=t}function ur(){return ye.lFrame.bindingIndex++}function Ed(t){let n=ye.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function K0(){return ye.lFrame.inI18n}function Q0(t,n){let e=ye.lFrame;e.bindingIndex=e.bindingRootIndex=t,Sd(n)}function X0(){return ye.lFrame.currentDirectiveIndex}function Sd(t){ye.lFrame.currentDirectiveIndex=t}function J0(t){let n=ye.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Id(){return ye.lFrame.currentQueryIndex}function zs(t){ye.lFrame.currentQueryIndex=t}function cT(t){let n=t[ne];return n.type===2?n.declTNode:n.type===1?t[Yt]:null}function jh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=cT(o),r===null||(o=o[oo],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ye.lFrame=ex();return i.currentTNode=n,i.lView=t,!0}function Md(t){let n=ex(),e=t[ne];ye.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function ex(){let t=ye.lFrame,n=t===null?null:t.child;return n===null?tx(t):n}function tx(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function nx(){let t=ye.lFrame;return ye.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Uh=nx;function kd(){let t=nx();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function ix(t){return(ye.lFrame.contextLView=U0(t,ye.lFrame.contextLView))[ut]}function li(){return ye.lFrame.selectedIndex}function mr(t){ye.lFrame.selectedIndex=t}function sa(){let t=ye.lFrame;return xd(t.tView,t.selectedIndex)}function $s(){ye.lFrame.currentNamespace=wh}function Gs(){lT()}function lT(){ye.lFrame.currentNamespace=null}function rx(){return ye.lFrame.currentNamespace}var ox=!0;function Td(){return ox}function Ad(t){ox=t}function Xp(t,n=null,e=null,i){let r=Hh(t,n,e,i);return r.resolveInjectorInitializers(),r}function Hh(t,n=null,e=null,i,r=new Set){let o=[e||jt,R0(t)],a;return new no(o,n||na(),a||null,r)}var X=class t{static THROW_IF_NOT_FOUND=Jr;static NULL=new As;static create(n,e){if(Array.isArray(n))return Xp({name:""},e,n,"");{let i=n.name??"";return Xp({name:i},n.parent,n.providers,i)}}static \u0275prov=S({token:t,providedIn:"any",factory:()=>W(ph)});static __NG_ELEMENT_ID__=-1},ee=new D(""),Nt=(()=>{class t{static __NG_ELEMENT_ID__=dT;static __NG_ENV_ID__=e=>e}return t})(),ld=class extends Nt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return lo(this._lView)}onDestroy(n){let e=this._lView;return Mh(e,n),()=>H0(e,n)}};function dT(){return new ld(ie())}var ax=!1,sx=new D(""),Ni=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new pt(!1);debugTaskTracker=u(sx,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new oe(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),Jp=class extends R{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,F0()&&(this.destroyRef=u(Nt,{optional:!0})??void 0,this.pendingTasks=u(Ni,{optional:!0})??void 0)}emit(n){let e=J(null);try{super.next(n)}finally{J(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof _e&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Z=Jp;function dd(...t){}function zh(t){let n,e;function i(){t=dd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function cx(t){return queueMicrotask(()=>t()),()=>{t=dd}}var $h="isAngularZone",Os=$h+"_ID",uT=0,F=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Z(!1);onMicrotaskEmpty=new Z(!1);onStable=new Z(!1);onError=new Z(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=ax}=n;if(typeof Zone>"u")throw new A(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,pT(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get($h)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new A(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new A(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,mT,dd,dd);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},mT={};function Gh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function fT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){zh(()=>{t.callbackScheduled=!1,eh(t),t.isCheckStableRunning=!0,Gh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),eh(t)}function pT(t){let n=()=>{fT(t)},e=uT++;t._inner=t._inner.fork({name:"angular",properties:{[$h]:!0,[Os]:e,[Os+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(hT(c))return i.invokeTask(o,a,s,c);try{return y0(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),x0(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return y0(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!gT(c)&&n(),x0(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,eh(t),Gh(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function eh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function y0(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function x0(t){t._nesting--,Gh(t)}var Ns=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Z;onMicrotaskEmpty=new Z;onStable=new Z;onError=new Z;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function hT(t){return lx(t,"__ignore_ng_zone__")}function gT(t){return lx(t,"__scheduler_tick__")}function lx(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var qt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},mn=new D("",{factory:()=>{let t=u(F),n=u(Be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(qt),e.handleError(i))})}}}),dx={provide:ar,useValue:()=>{let t=u(qt,{optional:!0})},multi:!0},vT=new D("",{factory:()=>{let t=u(ee).defaultView;if(!t)return;let n=u(mn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Nt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Wh(){return sr([A0(()=>{u(vT)})])}function L(t,n){let[e,i,r]=Ip(t,n?.equal),o=e,a=o[Xe];return o.set=i,o.update=r,o.asReadonly=Rd.bind(o),o}function Rd(){let t=this[Xe];if(t.readonlyFn===void 0){let n=()=>this();n[Xe]=t,t.readonlyFn=n}return t.readonlyFn}var ca=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=_T}return t})();function _T(){return new ca(ie(),Ot())}var oi=class{},Ws=new D("",{factory:()=>!0});var qh=new D(""),qs=(()=>{class t{internalPendingTasks=u(Ni);scheduler=u(oi);errorHandler=u(mn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),Od=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>new th})}return t})(),th=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},ud=class{[Xe];constructor(n){this[Xe]=n}destroy(){this[Xe].destroy()}};function Qt(t,n){let e=n?.injector??u(X),i=n?.manualCleanup!==!0?e.get(Nt):null,r,o=e.get(ca,null,{optional:!0}),a=e.get(oi);return o!==null?(r=xT(o.view,a,t),i instanceof ld&&i._lView===o.view&&(i=null)):r=CT(t,e.get(Od),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new ud(r)}var ux=G(y({},Mp),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Rs(!1);try{kp(this)}finally{Rs(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=J(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],J(t)}}}),bT=G(y({},ux),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),yT=G(y({},ux),{consumerMarkedDirty(){this.view[le]|=8192,uo(this.view),this.notifier.notify(13)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[nr]?.delete(this)}});function xT(t,n,e){let i=Object.create(yT);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=mx(i,e),t[nr]??=new Set,t[nr].add(i),i.consumerMarkedDirty(i),i}function CT(t,n,e){let i=Object.create(bT);return i.fn=mx(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function mx(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ic(t){return{toString:t}.toString()}function kT(t){return typeof t=="function"}function Gx(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Hd=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Te=(()=>{let t=()=>Wx;return t.ngInherit=!0,t})();function Wx(t){return t.type.prototype.ngOnChanges&&(t.setInput=AT),TT}function TT(){let t=Zx(this),n=t?.current;if(n){let e=t.previous;if(e===or)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function AT(t,n,e,i,r){let o=this.declaredInputs[i],a=Zx(t)||RT(t,{previous:or,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new Hd(l&&l.currentValue,e,c===or),Gx(t,n,r,e)}var qx="__ngSimpleChanges__";function Zx(t){return t[qx]||null}function RT(t,n){return t[qx]=n}var fx=[];var Ue=function(t,n=null,e){for(let i=0;i<fx.length;i++){let r=fx[i];r(t,n,e)}},Pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Pe||{});function OT(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=Wx(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Yx(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Bd(t,n,e){Kx(t,n,3,e)}function Vd(t,n,e,i){(t[le]&3)===e&&Kx(t,n,e,i)}function Zh(t,n){let e=t[le];(e&3)===n&&(e&=16383,e+=1,t[le]=e)}function Kx(t,n,e,i){let r=i!==void 0?t[ao]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[ao]+=65536),(s<o||o==-1)&&(NT(t,e,n,c),t[ao]=(t[ao]&4294901760)+c+2),c++}function px(t,n){Ue(Pe.LifecycleHookStart,t,n);let e=J(null);try{n.call(t)}finally{J(e),Ue(Pe.LifecycleHookEnd,t,n)}}function NT(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[le]>>14<t[ao]>>16&&(t[le]&3)===n&&(t[le]+=16384,px(s,o)):px(s,o)}var da=-1,fo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function PT(t){return(t.flags&8)!==0}function FT(t){return(t.flags&16)!==0}function LT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];BT(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function Qx(t){return t===3||t===4||t===6}function BT(t){return t.charCodeAt(0)===64}function fa(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?hx(t,e,r,null,n[++i]):hx(t,e,r,null,null))}}return t}function hx(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Xx(t){return t!==da}function zd(t){return t&32767}function VT(t){return t>>16}function $d(t,n){let e=VT(t),i=n;for(;e>0;)i=i[oo],e--;return i}var rg=!0;function Gd(t){let n=rg;return rg=t,n}var jT=256,Jx=jT-1,eC=5,UT=0,di={};function HT(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(io)&&(i=e[io]),i==null&&(i=e[io]=UT++);let r=i&Jx,o=1<<r;n.data[t+(r>>eC)]|=o}function Wd(t,n){let e=tC(t,n);if(e!==-1)return e;let i=n[ne];i.firstCreatePass&&(t.injectorIndex=n.length,Yh(i.data,t),Yh(n,null),Yh(i.blueprint,null));let r=Vg(t,n),o=t.injectorIndex;if(Xx(r)){let a=zd(r),s=$d(r,n),c=s[ne].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function Yh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function tC(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Vg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=aC(r),i===null)return da;if(e++,r=r[oo],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return da}function og(t,n,e){HT(t,n,e)}function zT(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Qx(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function nC(t,n,e){if(e&8||t!==void 0)return t;gd(n,"NodeInjector")}function iC(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Ai],o=Wt(void 0);try{return r?r.get(n,i,e&8):mh(n,i,e&8)}finally{Wt(o)}}return nC(i,n,e)}function rC(t,n,e,i=0,r){if(t!==null){if(n[le]&2048&&!(i&2)){let a=qT(t,n,e,i,di);if(a!==di)return a}let o=oC(t,n,e,i,di);if(o!==di)return o}return iC(n,e,i,r)}function oC(t,n,e,i,r){let o=GT(e);if(typeof o=="function"){if(!jh(n,t,i))return i&1?nC(r,e,i):iC(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))gd(e);else return a}finally{Uh()}}else if(typeof o=="number"){let a=null,s=tC(t,n),c=da,l=i&1?n[Kt][Yt]:null;for((s===-1||i&4)&&(c=s===-1?Vg(t,n):n[s+8],c===da||!vx(i,!1)?s=-1:(a=n[ne],s=zd(c),n=$d(c,n)));s!==-1;){let d=n[ne];if(gx(o,s,d.data)){let m=$T(s,n,e,a,i,l);if(m!==di)return m}c=n[s+8],c!==da&&vx(i,n[ne].data[s+8]===l)&&gx(o,s,n)?(a=d,s=zd(c),n=$d(c,n)):s=-1}}return r}function $T(t,n,e,i,r,o){let a=n[ne],s=a.data[t+8],c=i==null?si(s)&&rg:i!=a&&(s.type&3)!==0,l=r&1&&o===s,d=jd(s,a,e,c,l);return d!==null?Qs(n,a,d,s,r):di}function jd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,m=i?s:s+d,f=r?s+d:l;for(let h=m;h<f;h++){let _=a[h];if(h<c&&e===_||h>=c&&_.type===e)return h}if(r){let h=a[c];if(h&&ci(h)&&h.type===e)return c}return null}function Qs(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof fo){let s=o;if(s.resolving)throw uh("");let c=Gd(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],d,m=s.injectImpl?Wt(s.injectImpl):null,f=jh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&OT(e,a[e],n)}finally{m!==null&&Wt(m),Gd(c),s.resolving=!1,Uh()}}return o}function GT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(io)?t[io]:void 0;return typeof n=="number"?n>=0?n&Jx:WT:n}function gx(t,n,e){let i=1<<t;return!!(e[n+(t>>eC)]&i)}function vx(t,n){return!(t&2)&&!(t&1&&n)}var mo=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return rC(this._tNode,this._lView,n,eo(i),e)}};function WT(){return new mo(Ot(),ie())}function nt(t){return ic(()=>{let n=t.prototype.constructor,e=n[Ts]||ag(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Ts]||ag(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function ag(t){return nh(t)?()=>{let n=ag(Rt(t));return n&&n()}:tr(t)}function qT(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[le]&2048&&!oa(a);){let s=oC(o,a,e,i|2,di);if(s!==di)return s;let c=o.parent;if(!c){let l=a[yh];if(l){let d=l.get(e,di,i&-5);if(d!==di)return d}c=aC(a),a=a[oo]}o=c}return r}function aC(t){let n=t[ne],e=n.type;return e===2?n.declTNode:e===1?t[Yt]:null}function rc(t){return zT(Ot(),t)}function ZT(){return _a(Ot(),ie())}function _a(t,n){return new V(yn(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=ZT}return t})();function sC(t){return t instanceof V?t.nativeElement:t}function YT(){return this._results[Symbol.iterator]()}var Un=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new R}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=M0(n);(this._changesDetected=!I0(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=YT};function cC(t){return(t.flags&128)===128}var jg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(jg||{}),lC=new Map,KT=0;function QT(){return KT++}function XT(t){lC.set(t[Ri],t)}function sg(t){lC.delete(t[Ri])}var _x="__ngContext__";function pa(t,n){Oi(n)?(t[_x]=n[Ri],XT(n)):t[_x]=n}function dC(t){return mC(t[ra])}function uC(t){return mC(t[_n])}function mC(t){for(;t!==null&&!Bn(t);)t=t[_n];return t}var JT;function Ug(t){JT=t}var pr=new D("",{factory:()=>eA}),eA="ng";var su=new D(""),vo=new D("",{providedIn:"platform",factory:()=>"unknown"}),oc=new D(""),_o=new D("",{factory:()=>u(ee).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var fC="r";var pC="di";var hC=!1,gC=new D("",{factory:()=>hC});var tA=(t,n,e,i)=>{};function nA(t,n,e,i){tA(t,n,e,i)}function cu(t){return(t.flags&32)===32}var iA=()=>null;function vC(t,n,e=!1){return iA(t,n,e)}function _C(t,n){let e=t.contentQueries;if(e!==null){let i=J(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];zs(o),s.contentQueries(2,n[a],a)}}}finally{J(i)}}}function cg(t,n,e){zs(0);let i=J(null);try{n(t,e)}finally{J(i)}}function bC(t,n,e){if(Ch(n)){let i=J(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{J(i)}}}var Hn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Hn||{});var Nd;function rA(){if(Nd===void 0&&(Nd=null,rr.trustedTypes))try{Nd=rr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Nd}function lu(t){return rA()?.createHTML(t)||t}var Pd;function oA(){if(Pd===void 0&&(Pd=null,rr.trustedTypes))try{Pd=rr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Pd}function bx(t){return oA()?.createScriptURL(t)||t}var Pi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${md})`}},lg=class extends Pi{getTypeName(){return"HTML"}},dg=class extends Pi{getTypeName(){return"Style"}},ug=class extends Pi{getTypeName(){return"Script"}},mg=class extends Pi{getTypeName(){return"URL"}},fg=class extends Pi{getTypeName(){return"ResourceURL"}};function $n(t){return t instanceof Pi?t.changingThisBreaksApplicationSecurity:t}function Fi(t,n){let e=yC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${md})`)}return e===n}function yC(t){return t instanceof Pi&&t.getTypeName()||null}function Hg(t){return new lg(t)}function zg(t){return new dg(t)}function $g(t){return new ug(t)}function Gg(t){return new mg(t)}function Wg(t){return new fg(t)}function aA(t){let n=new hg(t);return sA()?new pg(n):n}var pg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(lu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},hg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=lu(n),e}};function sA(){try{return!!new window.DOMParser().parseFromString(lu(""),"text/html")}catch{return!1}}var cA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function ac(t){return t=String(t),t.match(cA)?t:"unsafe:"+t}function Li(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function sc(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var xC=Li("area,br,col,hr,img,wbr"),CC=Li("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),wC=Li("rp,rt"),lA=sc(wC,CC),dA=sc(CC,Li("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),uA=sc(wC,Li("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),yx=sc(xC,dA,uA,lA),DC=Li("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),mA=Li("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),fA=Li("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),pA=sc(DC,mA,fA),hA=Li("script,style,template");var gg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=_A(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=vA(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=xx(n).toLowerCase();if(!yx.hasOwnProperty(e))return this.sanitizedSomething=!0,!hA.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!pA.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;DC[s]&&(c=ac(c)),this.buf.push(" ",a,'="',Cx(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=xx(n).toLowerCase();yx.hasOwnProperty(e)&&!xC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Cx(n))}};function gA(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function vA(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw EC(n);return n}function _A(t){let n=t.firstChild;if(n&&gA(t,n))throw EC(n);return n}function xx(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function EC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var bA=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,yA=/([^\#-~ |!])/g;function Cx(t){return t.replace(/&/g,"&amp;").replace(bA,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(yA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Fd;function qg(t,n){let e=null;try{Fd=Fd||aA(t);let i=n?String(n):"";e=Fd.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Fd.getInertBodyElement(i)}while(i!==o);let s=new gg().sanitizeChildren(wx(e)||e);return lu(s)}finally{if(e){let i=wx(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function wx(t){return"content"in t&&xA(t)?t.content:null}function xA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function CA(t,n){return t.createText(n)}function wA(t,n,e){t.setValue(n,e)}function SC(t,n,e){return t.createElement(n,e)}function qd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function IC(t,n,e){t.appendChild(n,e)}function Dx(t,n,e,i,r){i!==null?qd(t,n,e,i,r):IC(t,n,e)}function MC(t,n,e,i){t.removeChild(null,n,e,i)}function DA(t,n,e){t.setAttribute(n,"style",e)}function EA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function kC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&LT(t,n,i),r!==null&&EA(t,n,r),o!==null&&DA(t,n,o)}var wt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(wt||{});function qe(t){let n=AC();return n?n.sanitize(wt.URL,t)||"":Fi(t,"URL")?$n(t):ac(ea(t))}function TC(t){let n=AC();if(n)return bx(n.sanitize(wt.RESOURCE_URL,t)||"");if(Fi(t,"ResourceURL"))return bx($n(t));throw new A(904,!1)}var SA={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function IA(t,n){return SA[t]?.[n]===!0?TC:qe}function Zg(t,n,e){return IA(n,e)(t)}function AC(){let t=ie();return t&&t[Ln].sanitizer}function RC(t){return t instanceof Function?t():t}function MA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var OC="ng-template";function kA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&MA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Yg(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Yg(t){return t.type===4&&t.value!==OC}function TA(t,n,e){let i=t.type===4&&!e?OC:t.value;return n===i}function AA(t,n,e){let i=4,r=t.attrs,o=r!==null?NA(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!Vn(i)&&!Vn(c))return!1;if(a&&Vn(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!TA(t,c,e)||c===""&&n.length===1){if(Vn(i))return!1;a=!0}}else if(i&8){if(r===null||!kA(t,r,c,e)){if(Vn(i))return!1;a=!0}}else{let l=n[++s],d=RA(c,r,Yg(t),e);if(d===-1){if(Vn(i))return!1;a=!0;continue}if(l!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&l!==m){if(Vn(i))return!1;a=!0}}}}return Vn(i)||a}function Vn(t){return(t&1)===0}function RA(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return PA(n,t)}function NC(t,n,e=!1){for(let i=0;i<n.length;i++)if(AA(t,n[i],e))return!0;return!1}function OA(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function NA(t){for(let n=0;n<t.length;n++){let e=t[n];if(Qx(e))return n}return t.length}function PA(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function FA(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Ex(t,n){return t?":not("+n.trim()+")":n}function LA(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Vn(a)&&(n+=Ex(o,r),r=""),i=a,o=o||!Vn(i);e++}return r!==""&&(n+=Ex(o,r)),n}function BA(t){return t.map(LA).join(",")}function VA(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Vn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Xt={};function Kg(t,n,e,i,r,o,a,s,c,l,d){let m=tt+i,f=m+r,h=jA(m,f),_=typeof l=="function"?l():l;return h[ne]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:_,incompleteFirstPass:!1,ssrId:d}}function jA(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Xt);return e}function UA(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Kg(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Qg(t,n,e,i,r,o,a,s,c,l,d){let m=n.blueprint.slice();return m[Fn]=r,m[le]=i|4|128|8|64|1024,(l!==null||t&&t[le]&2048)&&(m[le]|=2048),Sh(m),m[Ct]=m[oo]=t,m[ut]=e,m[Ln]=a||t&&t[Ln],m[We]=s||t&&t[We],m[Ai]=c||t&&t[Ai]||null,m[Yt]=o,m[Ri]=QT(),m[ro]=d,m[yh]=l,m[Kt]=n.type==2?t[Kt]:m,m}function HA(t,n,e){let i=yn(n,t),r=UA(e),o=t[Ln].rendererFactory,a=Xg(t,Qg(t,r,null,PC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function PC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function FC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Xg(t,n){return t[ra]?t[bh][_n]=n:t[ra]=n,t[bh]=n,n}function p(t=1){LC(Je(),ie(),li()+t,!1)}function LC(t,n,e,i){if(!i)if((n[le]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Bd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Vd(n,o,0,e)}mr(e)}var du=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(du||{});function ua(t,n,e,i){let r=J(null);try{let[o,a,s]=t.inputs[e],c=null;(a&du.SignalBased)!==0&&(c=n[o][Xe]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):Gx(n,c,o,i)}finally{J(r)}}var zn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(zn||{}),zA;function Jg(t,n){return zA(t,n)}var x9=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var vg=new WeakMap,Zs=new WeakSet;function $A(t,n){let e=vg.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Zs.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function GA(t,n){let e=vg.get(t);e?e.includes(n)||e.push(n):vg.set(t,[n])}var po=new Set,uu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(uu||{}),Gn=new D(""),Sx=new Set;function Bi(t){Sx.has(t)||(Sx.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var mu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),ev=[0,1,2,3],tv=(()=>{class t{ngZone=u(F);scheduler=u(oi);errorHandler=u(qt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Gn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ue(Pe.AfterRenderHooksStart),this.executing=!0;for(let i of ev)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ue(Pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[so]??=[]).push(e),uo(i),i[le]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(uu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),Xs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[so];n&&(this.view[so]=n.filter(e=>e!==this))}};function st(t,n){let e=n?.injector??u(X);return Bi("NgAfterNextRender"),qA(t,e,n,!0)}function WA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function qA(t,n,e,i){let r=n.get(mu);r.impl??=n.get(tv);let o=n.get(Gn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Nt):null,s=n.get(ca,null,{optional:!0}),c=new Xs(r.impl,WA(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var BC=new D("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Be)})});function VC(t,n,e){let i=t.get(BC);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function ZA(t,n){let e=t.get(BC);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function YA(t,n){for(let[e,i]of n)VC(t,i.animateFns)}function Ix(t,n,e,i){let r=t?.[lr]?.enter;n!==null&&r&&r.has(e.index)&&YA(i,r)}function la(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;Bn(r)?c=r:Oi(r)&&(l=!0,r=r[Fn]);let d=bn(r);t===0&&i!==null?(Ix(s,i,o,e),a==null?IC(n,i,d):qd(n,i,d,a||null,!0)):t===1&&i!==null?(Ix(s,i,o,e),qd(n,i,d,a||null,!0),$A(o,d)):t===2?(s?.[lr]?.leave?.has(o.index)&&GA(o,d),Zs.delete(d),Mx(s,o,e,m=>{if(Zs.has(d)){Zs.delete(d);return}MC(n,d,l,m)})):t===3&&(Zs.delete(d),Mx(s,o,e,()=>{n.destroyNode(d)})),c!=null&&aR(n,t,e,c,o,i,a)}}function KA(t,n){jC(t,n),n[Fn]=null,n[Yt]=null}function QA(t,n,e,i,r,o){i[Fn]=r,i[Yt]=n,pu(t,i,e,1,r,o)}function jC(t,n){n[Ln].changeDetectionScheduler?.notify(9),pu(t,n,n[We],2,null,null)}function XA(t){let n=t[ra];if(!n)return Kh(t[ne],t);for(;n;){let e=null;if(Oi(n))e=n[ra];else{let i=n[at];i&&(e=i)}if(!e){for(;n&&!n[_n]&&n!==t;)Oi(n)&&Kh(n[ne],n),n=n[Ct];n===null&&(n=t),Oi(n)&&Kh(n[ne],n),e=n&&n[_n]}n=e}}function nv(t,n){let e=t[co],i=e.indexOf(n);e.splice(i,1)}function fu(t,n){if(lo(n))return;let e=n[We];e.destroyNode&&pu(t,n,e,3,null,null),XA(n)}function Kh(t,n){if(lo(n))return;let e=J(null);try{n[le]&=-129,n[le]|=256,n[dn]&&Ei(n[dn]),tR(t,n),eR(t,n),n[ne].type===1&&n[We].destroy();let i=n[cr];if(i!==null&&Bn(n[Ct])){i!==n[Ct]&&nv(i,n);let r=n[ai];r!==null&&r.detachView(t)}sg(n)}finally{J(e)}}function Mx(t,n,e,i){let r=t?.[lr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&po.add(t[Ri]),VC(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:d}=l();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),JA(t,i)}else t&&po.delete(t[Ri]),i(!1)},r)}function JA(t,n){let e=t[lr]?.running;if(e){e.then(()=>{t[lr].running=void 0,po.delete(t[Ri]),n(!0)});return}n(!1)}function eR(t,n){let e=t.cleanup,i=n[ia];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[ia]=null);let r=n[Mi];if(r!==null){n[Mi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[nr];if(o!==null){n[nr]=null;for(let a of o)a.destroy()}}function tR(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof fo)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];Ue(Pe.LifecycleHookStart,s,c);try{c.call(s)}finally{Ue(Pe.LifecycleHookEnd,s,c)}}else{Ue(Pe.LifecycleHookStart,r,o);try{o.call(r)}finally{Ue(Pe.LifecycleHookEnd,r,o)}}}}}function UC(t,n,e){return nR(t,n.parent,e)}function nR(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Fn];if(si(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Hn.None||r===Hn.Emulated)return null}return yn(i,e)}function HC(t,n,e){return rR(t,n,e)}function iR(t,n,e){return t.type&40?yn(t,e):null}var rR=iR,kx;function iv(t,n,e,i){let r=UC(t,i,n),o=n[We],a=i.parent||n[Yt],s=HC(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)Dx(o,r,e[c],s,!1);else Dx(o,r,e,s,!1);kx!==void 0&&kx(o,i,n,e,r)}function Ys(t,n){if(n!==null){let e=n.type;if(e&3)return yn(n,t);if(e&4)return _g(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Ys(t,i);{let r=t[n.index];return Bn(r)?_g(-1,r):bn(r)}}else{if(e&128)return Ys(t,n.next);if(e&32)return Jg(n,t)()||bn(t[n.index]);{let i=zC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=ir(t[Kt]);return Ys(r,i)}else return Ys(t,n.next)}}}return null}function zC(t,n){if(n!==null){let i=t[Kt][Yt],r=n.projection;return i.projection[r]}return null}function _g(t,n){let e=at+t+1;if(e<n.length){let i=n[e],r=i[ne].firstChild;if(r!==null)return Ys(i,r)}return n[dr]}function rv(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Ai];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&pa(bn(c),i),e.flags|=2),!cu(e))if(l&8)rv(t,n,e.child,i,r,o,!1),la(n,t,s,r,c,e,o,i);else if(l&32){let d=Jg(e,i),m;for(;m=d();)la(n,t,s,r,m,e,o,i);la(n,t,s,r,c,e,o,i)}else l&16?$C(t,n,i,e,r,o):la(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function pu(t,n,e,i,r,o){rv(e,i,t.firstChild,n,r,o,!1)}function oR(t,n,e){let i=n[We],r=UC(t,e,n),o=e.parent||n[Yt],a=HC(o,e,n);$C(i,0,n,e,r,a)}function $C(t,n,e,i,r,o){let a=e[Kt],c=a[Yt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];la(n,t,e[Ai],r,d,i,o,e)}else{let l=c,d=a[Ct];cC(i)&&(l.flags|=128),rv(t,n,l,d,r,o,!0)}}function aR(t,n,e,i,r,o,a){let s=i[dr],c=bn(i);s!==c&&la(n,t,e,o,s,r,a);for(let l=at;l<i.length;l++){let d=i[l];pu(d[ne],d,t,n,o,s)}}function sR(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:zn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=zn.Important),t.setStyle(e,i,r,o))}}function GC(t,n,e,i,r){let o=li(),a=i&2;try{mr(-1),a&&n.length>tt&&LC(t,n,tt,!1);let s=a?Pe.TemplateUpdateStart:Pe.TemplateCreateStart;Ue(s,r,e),e(i,r)}finally{mr(o);let s=a?Pe.TemplateUpdateEnd:Pe.TemplateCreateEnd;Ue(s,r,e)}}function ov(t,n,e){fR(t,n,e),(e.flags&64)===64&&pR(t,n,e)}function hu(t,n,e=yn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function cR(t,n,e,i){let o=i.get(gC,hC)||e===Hn.ShadowDom||e===Hn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return lR(a),a}function lR(t){dR(t)}var dR=()=>null;function uR(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function mR(t,n,e,i,r,o){let a=n[ne];if(gu(t,a,n,e,i)){si(t)&&qC(n,t.index);return}t.type&3&&(e=uR(e)),WC(t,n,e,i,r,o)}function WC(t,n,e,i,r,o){if(t.type&3){let a=yn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function qC(t,n){let e=xn(n,t);e[le]&16||(e[le]|=64)}function fR(t,n,e){let i=e.directiveStart,r=e.directiveEnd;si(e)&&HA(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Wd(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=Qs(n,t,a,e);if(pa(c,n),o!==null&&vR(n,a-i,c,s,e,o),ci(s)){let l=xn(e.index,n);l[ut]=Qs(n,t,a,e)}}}function pR(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=X0();try{mr(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];Sd(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&hR(c,l)}}finally{mr(-1),Sd(a)}}function hR(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function ZC(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];NC(n,o.selectors,!1)&&(i??=[],ci(o)?i.unshift(o):i.push(o))}return i}function gR(t,n,e,i,r,o){let a=yn(t,n);YC(n[We],a,o,t.value,e,i,r)}function YC(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ea(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function vR(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];ua(i,e,c,l)}}function KC(t,n,e,i,r){let o=tt+e,a=n[ne],s=r(a,n,t,i,e);n[o]=s,aa(t,!0);let c=t.type===2;return c?(kC(n[We],s,t),($0()===0||js(t))&&pa(s,n),G0()):pa(s,n),Td()&&(!c||!cu(t))&&iv(a,n,s,t),t}function QC(t){let n=t;return Lh()?Bh():(n=n.parent,aa(n,!1)),n}function _R(t,n){let e=t[Ai];if(!e)return;let i;try{i=e.get(mn,null)}catch{i=null}i?.(n)}function gu(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],d=a[c+1],m=n.data[l];ua(m,e[l],d,r),s=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];ua(d,l,i,r),s=!0}return s}function bR(t,n){let e=xn(n,t),i=e[ne];yR(i,e);let r=e[Fn];r!==null&&e[ro]===null&&(e[ro]=vC(r,e[Ai])),Ue(Pe.ComponentStart);try{av(i,e,e[ut])}finally{Ue(Pe.ComponentEnd,e[ut])}}function yR(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function av(t,n,e){Md(n);try{let i=t.viewQuery;i!==null&&cg(1,i,e);let r=t.template;r!==null&&GC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[ai]?.finishViewCreation(t),t.staticContentQueries&&_C(t,n),t.staticViewQueries&&cg(2,t.viewQuery,e);let o=t.components;o!==null&&xR(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[le]&=-5,kd()}}function xR(t,n){for(let e=0;e<n.length;e++)bR(t,n[e])}function cc(t,n,e,i){let r=J(null);try{let o=n.tView,s=t[le]&4096?4096:16,c=Qg(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[cr]=l;let d=t[ai];return d!==null&&(c[ai]=d.createEmbeddedView(o)),av(o,c,e),c}finally{J(r)}}function ha(t,n){return!n||n.firstChild===null||cC(t)}function Js(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(bn(o)),Bn(o)&&XC(o,i);let a=e.type;if(a&8)Js(t,n,e.child,i);else if(a&32){let s=Jg(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=zC(n,e);if(Array.isArray(s))i.push(...s);else{let c=ir(n[Kt]);Js(c[ne],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function XC(t,n){for(let e=at;e<t.length;e++){let i=t[e],r=i[ne].firstChild;r!==null&&Js(i[ne],i,r,n)}t[dr]!==t[Fn]&&n.push(t[dr])}function JC(t){if(t[so]!==null){for(let n of t[so])n.impl.addSequence(n);t[so].length=0}}var ew=[];function CR(t){return t[dn]??wR(t)}function wR(t){let n=ew.pop()??Object.create(ER);return n.lView=t,n}function DR(t){t.lView[dn]!==t&&(t.lView=null,ew.push(t))}var ER=G(y({},wi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{uo(t.lView)},consumerOnSignalRead(){this.lView[dn]=this}});function SR(t){let n=t[dn]??Object.create(IR);return n.lView=t,n}var IR=G(y({},wi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=ir(t.lView);for(;n&&!tw(n[ne]);)n=ir(n);n&&Ih(n)},consumerOnSignalRead(){this.lView[dn]=this}});function tw(t){return t.type!==2}function nw(t){if(t[nr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[nr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[le]&8192)}}var MR=100;function iw(t,n=0){let i=t[Ln].rendererFactory,r=!1;r||i.begin?.();try{kR(t,n)}finally{r||i.end?.()}}function kR(t,n){let e=Vh();try{Rs(!0),bg(t,n);let i=0;for(;Us(t);){if(i===MR)throw new A(103,!1);i++,bg(t,1)}}finally{Rs(e)}}function TR(t,n,e,i){if(lo(n))return;let r=n[le],o=!1,a=!1;Md(n);let s=!0,c=null,l=null;o||(tw(t)?(l=CR(n),c=ti(l)):El()===null?(s=!1,l=SR(n),c=ti(l)):n[dn]&&(Ei(n[dn]),n[dn]=null));try{Sh(n),Y0(t.bindingStartIndex),e!==null&&GC(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&Bd(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Vd(n,h,0,null),Zh(n,0)}if(a||AR(n),nw(n),rw(n,0),t.contentQueries!==null&&_C(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&Bd(n,h)}else{let h=t.contentHooks;h!==null&&Vd(n,h,1),Zh(n,1)}OR(t,n);let m=t.components;m!==null&&aw(n,m,0);let f=t.viewQuery;if(f!==null&&cg(2,f,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&Bd(n,h)}else{let h=t.viewHooks;h!==null&&Vd(n,h,2),Zh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[yd]){for(let h of n[yd])h();n[yd]=null}o||(JC(n),n[le]&=-73)}catch(d){throw o||uo(n),d}finally{l!==null&&(Di(l,c),s&&DR(l)),kd()}}function rw(t,n){for(let e=dC(t);e!==null;e=uC(e))for(let i=at;i<e.length;i++){let r=e[i];ow(r,n)}}function AR(t){for(let n=dC(t);n!==null;n=uC(n)){if(!(n[le]&2))continue;let e=n[co];for(let i=0;i<e.length;i++){let r=e[i];Ih(r)}}}function RR(t,n,e){Ue(Pe.ComponentStart);let i=xn(n,t);try{ow(i,e)}finally{Ue(Pe.ComponentEnd,i[ut])}}function ow(t,n){wd(t)&&bg(t,n)}function bg(t,n){let i=t[ne],r=t[le],o=t[dn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&Vr(o)),a||=!1,o&&(o.dirty=!1),t[le]&=-9217,a)TR(i,t,i.template,t[ut]);else if(r&8192){let s=J(null);try{nw(t),rw(t,1);let c=i.components;c!==null&&aw(t,c,1),JC(t)}finally{J(s)}}}function aw(t,n,e){for(let i=0;i<n.length;i++)RR(t,n[i],e)}function OR(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)mr(~r);else{let o=r,a=e[++i],s=e[++i];Q0(a,o);let c=n[o];Ue(Pe.HostBindingsUpdateStart,c);try{s(2,c)}finally{Ue(Pe.HostBindingsUpdateEnd,c)}}}}finally{mr(-1)}}function sv(t,n){let e=Vh()?64:1088;for(t[Ln].changeDetectionScheduler?.notify(n);t;){t[le]|=e;let i=ir(t);if(oa(t)&&!i)return t;t=i}return null}function sw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function cw(t,n){let e=at+n;if(e<t.length)return t[e]}function lc(t,n,e,i=!0){let r=n[ne];if(NR(r,n,t,e),i){let a=_g(e,t),s=n[We],c=s.parentNode(t[dr]);c!==null&&QA(r,t[Yt],s,n,c,a)}let o=n[ro];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function lw(t,n){let e=ec(t,n);return e!==void 0&&fu(e[ne],e),e}function ec(t,n){if(t.length<=at)return;let e=at+n,i=t[e];if(i){let r=i[cr];r!==null&&r!==t&&nv(r,i),n>0&&(t[e-1][_n]=i[_n]);let o=Ls(t,at+n);KA(i[ne],i);let a=o[ai];a!==null&&a.detachView(o[ne]),i[Ct]=null,i[_n]=null,i[le]&=-129}return i}function NR(t,n,e,i){let r=at+i,o=e.length;i>0&&(e[r-1][_n]=n),i<o-at?(n[_n]=e[r],fh(e,at+i,n)):(e.push(n),n[_n]=null),n[Ct]=e;let a=n[cr];a!==null&&e!==a&&dw(a,n);let s=n[ai];s!==null&&s.insertView(t),Dd(n),n[le]|=128}function dw(t,n){let e=t[co],i=n[Ct];if(Oi(i))t[le]|=2;else{let r=i[Ct][Kt];n[Kt]!==r&&(t[le]|=2)}e===null?t[co]=[n]:e.push(n)}var fr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ne];return Js(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ut]}set context(n){this._lView[ut]=n}get destroyed(){return lo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ct];if(Bn(n)){let e=n[Vs],i=e?e.indexOf(this):-1;i>-1&&(ec(n,i),Ls(e,i))}this._attachedToViewContainer=!1}fu(this._lView[ne],this._lView)}onDestroy(n){Mh(this._lView,n)}markForCheck(){sv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[le]&=-129}reattach(){Dd(this._lView),this._lView[le]|=128}detectChanges(){this._lView[le]|=1024,iw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new A(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=oa(this._lView),e=this._lView[cr];e!==null&&!n&&nv(e,this._lView),jC(this._lView[ne],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new A(902,!1);this._appRef=n;let e=oa(this._lView),i=this._lView[cr];i!==null&&!e&&dw(i,this._lView),Dd(this._lView)}};var St=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=PR;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=cc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new fr(o)}}return t})();function PR(){return vu(Ot(),ie())}function vu(t,n){return t.type&4?new St(n,t,_a(t,n)):null}function ba(t,n,e,i,r){let o=t.data[n];if(o===null)o=FR(t,n,e,i,r),K0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=W0();o.injectorIndex=a===null?-1:a.injectorIndex}return aa(o,!0),o}function FR(t,n,e,i,r){let o=Fh(),a=Lh(),s=a?o:o&&o.parent,c=t.data[n]=BR(t,s,e,n,i,r);return LR(t,c,o,a),c}function LR(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function BR(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Oh()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function VR(t){let n=t[xh]??[],i=t[Ct][We],r=[];for(let o of n)o.data[pC]!==void 0?r.push(o):jR(o,i);t[xh]=r}function jR(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[fC];for(;e<r;){let o=i.nextSibling;MC(n,i,!1),i=o,e++}}}var UR=()=>null,HR=()=>null;function Zd(t,n){return UR(t,n)}function uw(t,n,e){return HR(t,n,e)}var mw=class{},_u=class{},yg=class{resolveComponentFactory(n){throw new A(917,!1)}},dc=class{static NULL=new yg},_t=class{},He=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>zR()}return t})();function zR(){let t=ie(),n=Ot(),e=xn(n.index,t);return(Oi(e)?e:t)[We]}var fw=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>null})}return t})();var Ud={},xg=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Ud,i);return r!==Ud||e===Ud?r:this.parentInjector.get(n,e,i)}};function Yd(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=fd(r,s);else if(o==2){let c=s,l=n[++a];i=fd(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function B(t,n=0){let e=ie();if(e===null)return W(t,n);let i=Ot();return rC(i,e,Rt(t),n)}function pw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,c,l]=d.resolveHostDirectives(a);break}WR(t,n,e,s,o,c,l)}o!==null&&i!==null&&$R(e,i,o)}function $R(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new A(-301,!1);i.push(n[r],o)}}function GR(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function WR(t,n,e,i,r,o,a){let s=i.length,c=null;for(let f=0;f<s;f++){let h=i[f];c===null&&ci(h)&&(c=h,GR(t,e,f)),og(Wd(e,n),t,h.type)}XR(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<s;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,d=!1,m=FC(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let f=0;f<s;f++){let h=i[f];if(e.mergedAttrs=fa(e.mergedAttrs,h.hostAttrs),ZR(t,e,n,m,h),QR(m,h,r),a!==null&&a.has(h)){let[T,I]=a.get(h);e.directiveToIndex.set(h.type,[m,T+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,m);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let _=h.type.prototype;!l&&(_.ngOnChanges||_.ngOnInit||_.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(_.ngOnChanges||_.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}qR(t,e,o)}function qR(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Tx(0,n,r,i),Tx(1,n,r,i),Rx(n,i,!1);else{let o=e.get(r);Ax(0,n,o,i),Ax(1,n,o,i),Rx(n,i,!0)}}}function Tx(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),hw(n,o)}}function Ax(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),hw(n,a)}}function hw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Rx(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Yg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){a??=[],a.push(l[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function ZR(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=tr(r.type,!0)),a=new fo(o,ci(r),B,null);t.blueprint[i]=a,e[i]=a,YR(t,n,i,FC(t,e,r.hostVars,Xt),r)}function YR(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;KR(a)!=s&&a.push(s),a.push(e,i,o)}}function KR(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function QR(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;ci(n)&&(e[""]=t)}}function XR(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function gw(t,n,e,i,r,o,a,s){let c=n[ne],l=c.consts,d=un(l,a),m=ba(c,t,e,i,d);return o&&pw(c,n,m,un(l,s),r),m.mergedAttrs=fa(m.mergedAttrs,m.attrs),m.attrs!==null&&Yd(m,m.attrs,!1),m.mergedAttrs!==null&&Yd(m,m.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,m),m}function vw(t,n){Yx(t,n),Ch(n)&&t.queries.elementEnd(n)}function JR(t,n,e,i,r,o){let a=n.consts,s=un(a,r),c=ba(n,t,e,i,s);if(c.mergedAttrs=fa(c.mergedAttrs,c.attrs),o!=null){let l=un(a,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Yd(c,c.attrs,!1),c.mergedAttrs!==null&&Yd(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function cv(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function lv(t,n,e){return t[n]=e}function e1(t,n){return t[n]}function Cn(t,n,e){if(e===Xt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function _w(t,n,e,i){let r=Cn(t,n,e);return Cn(t,n+1,i)||r}function ma(t,n,e){return function i(r){let o=si(t)?xn(t.index,n):n;sv(o,5);let a=n[ut],s=Ox(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=Ox(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function Ox(t,n,e,i){let r=J(null);try{return Ue(Pe.OutputStart,n,e),e(i)!==!1}catch(o){return _R(t,o),!1}finally{Ue(Pe.OutputEnd,n,e),J(r)}}function bw(t,n,e,i,r,o,a,s){let c=js(t),l=!1,d=null;if(!i&&c&&(d=n1(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,l=!0}else{let m=yn(t,e),f=i?i(m):m;nA(e,f,o,s);let h=r.listen(f,o,s);if(!t1(o)){let _=i?T=>i(bn(T[t.index])):t.index;yw(_,n,e,o,s,h,!1)}}return l}function t1(t){return t.startsWith("animation")||t.startsWith("transition")}function n1(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[ia],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function yw(t,n,e,i,r,o,a){let s=n.firstCreatePass?Th(n):null,c=kh(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function Kd(t,n,e,i,r,o){let a=n[e],s=n[ne],l=s.data[e].outputs[i],m=a[l].subscribe(o);yw(t.index,s,n,r,o,m,!0)}function ya(){i1()}function i1(){let t=ie(),n=Je(),e=Ot();if(n.firstCreatePass&&o1(n,e),e.controlDirectiveIndex===-1)return;Bi("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new Qd(t,n,e))}function xa(){r1()}function r1(){let t=ie(),n=Je(),e=sa();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new Qd(t,n,e))}var Qd=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){xw(this.tView.data[this.tNode.customControlIndex],n)&&Kd(this.tNode,this.lView,this.tNode.customControlIndex,n,n,ma(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";Kd(this.tNode,this.lView,this.tNode.customControlIndex,e,e,ma(this.tNode,this.lView,n))}listenToDom(n,e){bw(this.tNode,this.tView,this.lView,void 0,this.lView[We],n,e,ma(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];ua(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],c=this.tView.data[a],l=this.lView[a];ua(c,l,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";ua(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function o1(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}a1(t,n)}function a1(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(Nx(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(Nx(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function Nx(t,n){return s1(t,n)&&xw(t,n+"Change")}function s1(t,n){return n in t.inputs}function xw(t,n){return n in t.outputs}var Cg=Symbol("BINDING");function Cw(t){return t.debugInfo?.className||t.type.name||null}var Xd=class extends dc{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Ti(n);return new ho(e,this.ngModule)}};function c1(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&du.SignalBased)!==0};return r&&(o.transform=r),o})}function l1(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function d1(t,n,e){let i=n instanceof Be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new xg(e,i):e}function u1(t){let n=t.get(_t,null);if(n===null)throw new A(407,!1);let e=t.get(fw,null),i=t.get(oi,null),r=t.get(Gn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function m1(t,n){let e=ww(t);return SC(n,e,e==="svg"?wh:e==="math"?B0:null)}function ww(t){return(t.selectors[0][0]||"div").toLowerCase()}var ho=class extends _u{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=c1(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=l1(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=BA(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Ue(Pe.DynamicComponentStart);let s=J(null);try{let c=this.componentDef,l=d1(c,r||this.ngModule,n),d=u1(l),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(Cw(c),()=>this.createComponentRef(d,l,e,i,o,a)):this.createComponentRef(d,l,e,i,o,a)}finally{J(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=f1(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),d=r?cR(l,r,s.encapsulation,e):m1(s,l),m=a?.some(Px)||o?.some(_=>typeof _!="function"&&_.bindings.some(Px)),f=Qg(null,c,null,512|PC(s),null,null,n,l,e,null,vC(d,e,!0));f[tt]=d,Md(f);let h=null;try{let _=gw(tt,f,2,"#host",()=>c.directiveRegistry,!0,0);kC(l,d,_),pa(d,f),ov(c,f,_),bC(c,_,f),vw(c,_),i!==void 0&&h1(_,this.ngContentSelectors,i),h=xn(_.index,f),f[ut]=h[ut],av(c,f,null)}catch(_){throw h!==null&&sg(h),sg(f),_}finally{Ue(Pe.DynamicComponentEnd),kd()}return new Jd(this.componentType,f,!!m)}};function f1(t,n,e,i){let r=t?["ng-version","21.2.10"]:VA(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[Cg].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let f of m.bindings){s+=f[Cg].requiredVars;let h=d+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(a??=[]).push(f))}}let c=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,f=dh(m);c.push(f)}return Kg(0,null,p1(o,a),1,s,c,null,null,null,[r],null)}function p1(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Px(t){let n=t[Cg].kind;return n==="input"||n==="twoWay"}var Jd=class extends mw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=xd(e[ne],tt),this.location=_a(this._tNode,e),this.instance=xn(this._tNode.index,e)[ut],this.hostView=this.changeDetectorRef=new fr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=gu(i,r[ne],r,n,e);this.previousInputValues.set(n,e);let a=xn(i.index,r);sv(a,1)}get injector(){return new mo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function h1(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Pt=(()=>{class t{static __NG_ELEMENT_ID__=g1}return t})();function g1(){let t=Ot();return Dw(t,ie())}var wg=class t extends Pt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return _a(this._hostTNode,this._hostLView)}get injector(){return new mo(this._hostTNode,this._hostLView)}get parentInjector(){let n=Vg(this._hostTNode,this._hostLView);if(Xx(n)){let e=$d(n,this._hostLView),i=zd(n),r=e[ne].data[i+8];return new mo(r,e)}else return new mo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Fx(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-at}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Zd(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,ha(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!kT(n),l;if(c)l=e;else{let I=e||{};l=I.index,i=I.injector,r=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,a=I.directives,s=I.bindings}let d=c?n:new ho(Ti(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let O=(c?m:this.parentInjector).get(Be,null);O&&(o=O)}let f=Ti(d.componentType??{}),h=Zd(this._lContainer,f?.id??null),_=h?.firstChild??null,T=d.create(m,r,_,o,a,s);return this.insertImpl(T.hostView,l,ha(this._hostTNode,h)),T}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(j0(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[Ct],l=new t(c,c[Yt],c[Ct]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return lc(a,r,o,i),n.attachToViewContainerRef(),fh(Qh(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Fx(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=ec(this._lContainer,e);i&&(Ls(Qh(this._lContainer),e),fu(i[ne],i))}detach(n){let e=this._adjustIndex(n,-1),i=ec(this._lContainer,e);return i&&Ls(Qh(this._lContainer),e)!=null?new fr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Fx(t){return t[Vs]}function Qh(t){return t[Vs]||(t[Vs]=[])}function Dw(t,n){let e,i=n[t.index];return Bn(i)?e=i:(e=sw(i,n,null,t),n[t.index]=e,Xg(n,e)),_1(e,n,t,i),new wg(e,t,n)}function v1(t,n){let e=t[We],i=e.createComment(""),r=yn(n,t),o=e.parentNode(r);return qd(e,o,i,e.nextSibling(r),!1),i}var _1=x1,b1=()=>!1;function y1(t,n,e){return b1(t,n,e)}function x1(t,n,e,i){if(t[dr])return;let r;e.type&8?r=bn(i):r=v1(n,e),t[dr]=r}var Dg=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Eg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)uv(n,e).matches!==null&&this.queries[e].setDirty()}},eu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=S1(n):this.predicate=n}},Sg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Ig=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,C1(e,o)),this.matchTNodeWithReadOption(n,e,jd(e,n,o,!1,!1))}else i===St?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,jd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===Pt||r===St&&e.type&4)this.addMatch(e.index,-2);else{let o=jd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function C1(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function w1(t,n){return t.type&11?_a(t,n):t.type&4?vu(t,n):null}function D1(t,n,e,i){return e===-1?w1(n,t):e===-2?E1(t,n,i):Qs(t,t[ne],e,n)}function E1(t,n,e){if(e===V)return _a(n,t);if(e===St)return vu(n,t);if(e===Pt)return Dw(n,t)}function Ew(t,n,e,i){let r=n[ai].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let d=o[l];s.push(D1(n,d,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function Mg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Ew(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],d=n[-c];for(let m=at;m<d.length;m++){let f=d[m];f[cr]===f[Ct]&&Mg(f[ne],f,l,i)}if(d[co]!==null){let m=d[co];for(let f=0;f<m.length;f++){let h=m[f];Mg(h[ne],h,l,i)}}}}}return i}function dv(t,n){return t[ai].queries[n].queryList}function Sw(t,n,e){let i=new Un((e&4)===4);return z0(t,n,i,i.destroy),(n[ai]??=new Eg).queries.push(new Dg(i))-1}function Iw(t,n,e){let i=Je();return i.firstCreatePass&&(kw(i,new eu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Sw(i,ie(),n)}function Mw(t,n,e,i){let r=Je();if(r.firstCreatePass){let o=Ot();kw(r,new eu(n,e,i),o.index),I1(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Sw(r,ie(),e)}function S1(t){return t.split(",").map(n=>n.trim())}function kw(t,n,e){t.queries===null&&(t.queries=new Sg),t.queries.track(new Ig(n,e))}function I1(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function uv(t,n){return t.queries.getByIndex(n)}function Tw(t,n){let e=t[ne],i=uv(e,n);return i.crossesNgTemplate?Mg(e,t,n,[]):Ew(e,t,i,n)}function Aw(t,n,e){let i,r=ys(()=>{i._dirtyCounter();let o=M1(i,t);if(n&&o===void 0)throw new A(-951,!1);return o});return i=r[Xe],i._dirtyCounter=L(0),i._flatValue=void 0,r}function mv(t){return Aw(!0,!1,t)}function fv(t){return Aw(!0,!0,t)}function Rw(t,n){let e=t[Xe];e._lView=ie(),e._queryIndex=n,e._queryList=dv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function M1(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[le]&4)return n?void 0:jt;let r=dv(e,i),o=Tw(e,i);return r.reset(o,sC),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ui=class{},bu=class{};var tu=class extends ui{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Xd(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=lh(n);this._bootstrapComponents=RC(o.bootstrap),this._r3Injector=Hh(n,e,[{provide:ui,useValue:this},{provide:dc,useValue:this.componentFactoryResolver},...i],Ps(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},nu=class extends bu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new tu(this.moduleType,n,[])}};var tc=class extends ui{injector;componentFactoryResolver=new Xd(this);instance=null;constructor(n){super();let e=new no([...n.providers,{provide:ui,useValue:this},{provide:dc,useValue:this.componentFactoryResolver}],n.parent||na(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function uc(t,n,e=null){return new tc({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var k1=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=gh(!1,e.type),r=i.length>0?uc([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=S({token:t,providedIn:"environment",factory:()=>new t(W(Be))})}return t})();function M(t){return ic(()=>{let n=Ow(t),e=G(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===jg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(k1).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Hn.Emulated,styles:t.styles||jt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Bi("NgStandalone"),Nw(e);let i=t.dependencies;return e.directiveDefs=Lx(i,T1),e.pipeDefs=Lx(i,w0),e.id=O1(e),e})}function T1(t){return Ti(t)||dh(t)}function ce(t){return ic(()=>({type:t.type,bootstrap:t.bootstrap||jt,declarations:t.declarations||jt,imports:t.imports||jt,exports:t.exports||jt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function A1(t,n){if(t==null)return or;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=du.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function R1(t){if(t==null)return or;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function P(t){return ic(()=>{let n=Ow(t);return Nw(n),n})}function pv(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Ow(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||or,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||jt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:A1(t.inputs,n),outputs:R1(t.outputs),debugInfo:null}}function Nw(t){t.features?.forEach(n=>n(t))}function Lx(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function O1(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function hv(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function N1(t){return Object.getPrototypeOf(t.prototype).constructor}function Ie(t){let n=N1(t.type),e=!0,i=[t];for(;n;){let r;if(ci(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new A(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Xh(t.inputs),a.declaredInputs=Xh(t.declaredInputs),a.outputs=Xh(t.outputs);let s=r.hostBindings;s&&V1(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&L1(t,c),l&&B1(t,l),P1(t,r),C0(t.outputs,r.outputs),ci(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Ie&&(e=!1)}}n=Object.getPrototypeOf(n)}F1(i)}function P1(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function F1(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=fa(r.hostAttrs,e=fa(e,r.hostAttrs))}}function Xh(t){return t===or?{}:t===jt?[]:t}function L1(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function B1(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function V1(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Pw(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=fa(t.mergedAttrs,t.attrs);let d=t.tView=Kg(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),aa(t,!1);let c=U1(e,n,t,i);Td()&&iv(e,n,c,t),pa(c,n);let l=sw(c,n,c,t);n[i+tt]=l,Xg(n,l),y1(l,t,n)}function j1(t,n,e,i,r,o,a,s,c,l,d){let m=e+tt,f;return n.firstCreatePass?(f=ba(n,m,4,a||null,s||null),Rh()&&pw(n,t,f,un(n.consts,l),ZC),Yx(n,f)):f=n.data[m],Pw(f,t,n,e,i,r,o,c),js(f)&&ov(n,t,f),l!=null&&hu(t,f,d),f}function ga(t,n,e,i,r,o,a,s,c,l,d){let m=e+tt,f;if(n.firstCreatePass){if(f=ba(n,m,4,a||null,s||null),l!=null){let h=un(n.consts,l);f.localNames=[];for(let _=0;_<h.length;_+=2)f.localNames.push(h[_],-1)}}else f=n.data[m];return Pw(f,t,n,e,i,r,o,c),l!=null&&hu(t,f,d),f}function It(t,n,e,i,r,o,a,s){let c=ie(),l=Je(),d=un(l.consts,o);return j1(c,l,t,n,e,i,r,d,void 0,a,s),It}function Ca(t,n,e,i,r,o,a,s){let c=ie(),l=Je(),d=un(l.consts,o);return ga(c,l,t,n,e,i,r,d,void 0,a,s),Ca}var U1=H1;function H1(t,n,e,i){return Ad(!0),n[We].createComment("")}var yu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Vi(t){return typeof t=="function"&&t[Xe]!==void 0}var gv=new D("");function ji(t){return!!t&&typeof t.then=="function"}function vv(t){return!!t&&typeof t.subscribe=="function"}var Fw=new D("");var _v=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Fw,{optional:!0})??[];injector=u(X);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=dt(this.injector,r);if(ji(o))e.push(o);else if(vv(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xu=new D("");function Lw(){Sp(()=>{let t="";throw new A(600,t)})}function Bw(t){return t.isBoundToModule}var z1=10;var fn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(mn);afterRenderManager=u(mu);zonelessEnabled=u(Ws);rootEffectScheduler=u(Od);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new R;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Ni);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(te(e=>!e))}constructor(){u(Gn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=X.NULL){return this._injector.get(F).run(()=>{Ue(Pe.BootstrapComponentStart);let a=e instanceof _u;if(!this._injector.get(_v).done){let _="";throw new A(405,_)}let c;a?c=e:c=this._injector.get(dc).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=Bw(c)?void 0:this._injector.get(ui),d=i||c.selector,m=c.create(r,[],d,l),f=m.location.nativeElement,h=m.injector.get(gv,null);return h?.registerApplication(f),m.onDestroy(()=>{this.detachView(m.hostView),Ks(this.components,m),h?.unregisterApplication(f)}),this._loadComponent(m),Ue(Pe.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ue(Pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(uu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ue(Pe.ChangeDetectionEnd),new A(101,!1);let e=J(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,J(e),this.afterTick.next(),Ue(Pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(_t,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<z1;){Ue(Pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ue(Pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Us(r))continue;let o=i&&!this.zonelessEnabled?0:1;iw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Us(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ks(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(xu,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ks(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new A(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ks(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Cu(t,n){let e=ie(),i=ur();if(Cn(e,i,n)){let r=Je(),o=sa();if(gu(o,r,e,t,n))si(o)&&qC(e,o.index);else{let s=yn(o,e);YC(e[We],s,null,o.value,t,n,null)}}return Cu}function xe(t,n,e,i){let r=ie(),o=ur();if(Cn(r,o,n)){let a=Je(),s=sa();gR(s,r,t,n,e,i)}return xe}var kg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Jh(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function $1(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){J(i);let l=n.length-1;for(J(null);a<=s&&a<=l;){let d=t.at(a),m=n[a],f=Jh(a,d,a,m,e);if(f!==0){f<0&&t.updateValue(a,m),a++;continue}let h=t.at(s),_=n[l],T=Jh(s,h,l,_,e);if(T!==0){T<0&&t.updateValue(s,_),s--,l--;continue}let I=e(a,d),O=e(s,h),he=e(a,m);if(Object.is(he,O)){let Ne=e(l,_);Object.is(Ne,I)?(t.swap(a,s),t.updateValue(s,_),l--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new iu,o??=Vx(t,a,s,e),Tg(t,r,a,he))t.updateValue(a,m),a++,s++;else if(o.has(he))r.set(I,t.detach(a)),s--;else{let Ne=t.create(a,n[a]);t.attach(a,Ne),a++,s++}}for(;a<=l;)Bx(t,r,e,a,n[a]),a++}else if(n!=null){J(i);let l=n[Symbol.iterator]();J(null);let d=l.next();for(;!d.done&&a<=s;){let m=t.at(a),f=d.value,h=Jh(a,m,a,f,e);if(h!==0)h<0&&t.updateValue(a,f),a++,d=l.next();else{r??=new iu,o??=Vx(t,a,s,e);let _=e(a,f);if(Tg(t,r,a,_))t.updateValue(a,f),a++,s++,d=l.next();else if(!o.has(_))t.attach(a,t.create(a,f)),a++,s++,d=l.next();else{let T=e(a,m);r.set(T,t.detach(a)),s--}}}for(;!d.done;)Bx(t,r,e,t.length,d.value),d=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function Tg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Bx(t,n,e,i,r){if(Tg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function Vx(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var iu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){Bi("NgControlFlow");let c=ie(),l=Je(),d=un(l.consts,o);return ga(c,l,t,n,e,i,r,d,256,a,s),bv}function bv(t,n,e,i,r,o,a,s){Bi("NgControlFlow");let c=ie(),l=Je(),d=un(l.consts,o);return ga(c,l,t,n,e,i,r,d,512,a,s),bv}function w(t,n){Bi("NgControlFlow");let e=ie(),i=ur(),r=e[i]!==Xt?e[i]:-1,o=r!==-1?ru(e,tt+r):void 0,a=0;if(Cn(e,i,t)){let s=J(null);try{if(o!==void 0&&lw(o,a),t!==-1){let c=tt+t,l=ru(e,c),d=Ng(e[ne],c),m=uw(l,d,e),f=cc(e,d,n,{dehydratedView:m});lc(l,f,a,ha(d,m))}}finally{J(s)}}else if(o!==void 0){let s=cw(o,a);s!==void 0&&(s[ut]=n)}}var Ag=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-at}};function Ze(t){return t}function wn(t,n){return n}var Rg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function de(t,n,e,i,r,o,a,s,c,l,d,m,f){Bi("NgControlFlow");let h=ie(),_=Je(),T=c!==void 0,I=ie(),O=s?a.bind(I[Kt][ut]):a,he=new Rg(T,O);I[tt+t]=he,ga(h,_,t+1,n,e,i,r,un(_.consts,o),256),T&&ga(h,_,t+2,c,l,d,m,un(_.consts,f),512)}var Og=class extends kg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-at}at(n){return this.getLView(n)[ut].$implicit}attach(n,e){let i=e[ro];this.needsIndexUpdate||=n!==this.length,lc(this.lContainer,e,n,ha(this.templateTNode,i)),G1(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,W1(this.lContainer,n),q1(this.lContainer,n)}create(n,e){let i=Zd(this.lContainer,this.templateTNode.tView.ssrId);return cc(this.hostLView,this.templateTNode,new Ag(this.lContainer,e,n),{dehydratedView:i})}destroy(n){fu(n[ne],n)}updateValue(n,e){this.getLView(n)[ut].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ut].$index=n}getLView(n){return Z1(this.lContainer,n)}};function ue(t){let n=J(null),e=li();try{let i=ie(),r=i[ne],o=i[e],a=e+1,s=ru(i,a);if(o.liveCollection===void 0){let l=Ng(r,a);o.liveCollection=new Og(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if($1(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=ur(),d=c.length===0;if(Cn(i,l,d)){let m=e+2,f=ru(i,m);if(d){let h=Ng(r,m),_=uw(f,h,i),T=cc(i,h,void 0,{dehydratedView:_});lc(f,T,0,ha(h,_))}else r.firstUpdatePass&&VR(f),lw(f,0)}}}finally{J(n)}}function ru(t,n){return t[n]}function G1(t,n){if(t.length<=at)return;let e=at+n,i=t[e],r=i?i[lr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Ai];ZA(o,r),po.delete(i[Ri]),r.detachedLeaveAnimationFns=void 0}}function W1(t,n){if(t.length<=at)return;let e=at+n,i=t[e],r=i?i[lr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function q1(t,n){return ec(t,n)}function Z1(t,n){return cw(t,n)}function Ng(t,n){return xd(t,n)}function k(t,n,e){let i=ie(),r=ur();if(Cn(i,r,n)){let o=Je(),a=sa();mR(a,i,t,n,i[We],e)}return k}function Pg(t,n,e,i,r){gu(n,t,e,r?"class":"style",i)}function v(t,n,e,i){let r=ie(),o=r[ne],a=t+tt,s=o.firstCreatePass?gw(a,r,2,n,ZC,Rh(),e,i):o.data[a];if(si(s)){let c=r[Ln].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(Cw(l),()=>(jx(t,n,r,s,i),v))}}return jx(t,n,r,s,i),v}function jx(t,n,e,i,r){if(KC(i,e,t,n,Vw),js(i)){let o=e[ne];ov(o,e,i),bC(o,i,e)}r!=null&&hu(e,i)}function g(){let t=Je(),n=Ot(),e=QC(n);return t.firstCreatePass&&vw(t,e),Nh(e)&&Ph(),Ah(),e.classesWithoutHost!=null&&PT(e)&&Pg(t,e,ie(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&FT(e)&&Pg(t,e,ie(),e.stylesWithoutHost,!1),g}function E(t,n,e,i){return v(t,n,e,i),g(),E}function me(t,n,e,i){let r=ie(),o=r[ne],a=t+tt,s=o.firstCreatePass?JR(a,o,2,n,e,i):o.data[a];return KC(s,r,t,n,Vw),i!=null&&hu(r,s),me}function ve(){let t=Ot(),n=QC(t);return Nh(n)&&Ph(),Ah(),ve}function Me(t,n,e,i){return me(t,n,e,i),ve(),Me}var Vw=(t,n,e,i,r)=>(Ad(!0),SC(n[We],i,rx()));function rn(){return ie()}function $e(t,n,e){let i=ie(),r=ur();if(Cn(i,r,n)){let o=Je(),a=sa();WC(a,i,t,n,i[We],e)}return $e}var mc="en-US";var Y1=mc;function jw(t){typeof t=="string"&&(Y1=t.toLowerCase().replace(/_/g,"-"))}function q(t,n,e){let i=ie(),r=Je(),o=Ot();return K1(r,i,i[We],o,t,n,e),q}function K1(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=ma(i,n,o),bw(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let f=d[m],h=d[m+1];c??=ma(i,n,o),Kd(i,n,f,h,r,c)}if(l&&l.length)for(let m of l)c??=ma(i,n,o),Kd(i,n,m,r,r,c)}}function x(t=1){return ix(t)}function Q1(t,n){let e=null,i=OA(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?NC(t,o,!0):FA(i,o))return r}return e}function ke(t){let n=ie()[Kt][Yt];if(!n.projection){let e=t?t.length:1,i=n.projection=k0(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?Q1(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function z(t,n=0,e,i,r,o){let a=ie(),s=Je(),c=i?t+1:null;c!==null&&ga(a,s,c,i,r,o,null,e);let l=ba(s,tt+t,16,null,e||null);l.projection===null&&(l.projection=n),Bh();let m=!a[ro]||Oh();a[Kt][Yt].projection[l.projection]===null&&c!==null?X1(a,s,c):m&&!cu(l)&&oR(s,a,l)}function X1(t,n,e){let i=tt+e,r=n.data[i],o=t[i],a=Zd(o,r.tView.ssrId),s=cc(t,r,void 0,{dehydratedView:a});lc(o,s,0,ha(r,a))}function Ft(t,n,e,i){return Mw(t,n,e,i),Ft}function Ye(t,n,e){return Iw(t,n,e),Ye}function U(t){let n=ie(),e=Je(),i=Id();zs(i+1);let r=uv(e,i);if(t.dirty&&V0(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Tw(n,i);t.reset(o,sC),t.notifyOnChanges()}return!0}return!1}function H(){return dv(ie(),Id())}function wu(t,n,e,i,r){return Rw(n,Mw(t,e,i,r)),wu}function Du(t,n,e,i){return Rw(t,Iw(n,e,i)),Du}function Eu(t=1){zs(Id()+t)}function on(t){let n=q0();return Cd(n,tt+t)}function Ld(t,n){return t<<17|n<<2}function go(t){return t>>17&32767}function J1(t){return(t&2)==2}function eO(t,n){return t&131071|n<<17}function Fg(t){return t|2}function va(t){return(t&131068)>>2}function eg(t,n){return t&-131069|n<<2}function tO(t){return(t&1)===1}function Lg(t){return t|1}function nO(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=go(a),c=va(a);t[i]=e;let l=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||ta(m,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let f=go(t[s+1]);t[i+1]=Ld(f,s),f!==0&&(t[f+1]=eg(t[f+1],i)),t[s+1]=eO(t[s+1],i)}else t[i+1]=Ld(s,0),s!==0&&(t[s+1]=eg(t[s+1],i)),s=i;else t[i+1]=Ld(c,0),s===0?s=i:t[c+1]=eg(t[c+1],i),c=i;l&&(t[i+1]=Fg(t[i+1])),Ux(t,d,i,!0),Ux(t,d,i,!1),iO(n,d,t,i,o),a=Ld(s,c),o?n.classBindings=a:n.styleBindings=a}function iO(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&ta(o,n)>=0&&(e[i+1]=Lg(e[i+1]))}function Ux(t,n,e,i){let r=t[e+1],o=n===null,a=i?go(r):va(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];rO(c,n)&&(s=!0,t[a+1]=i?Lg(l):Fg(l)),a=i?go(l):va(l)}s&&(t[e+1]=i?Fg(r):Lg(r))}function rO(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?ta(t,n)>=0:!1}var jn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function oO(t){return t.substring(jn.key,jn.keyEnd)}function aO(t){return sO(t),Uw(t,Hw(t,0,jn.textEnd))}function Uw(t,n){let e=jn.textEnd;return e===n?-1:(n=jn.keyEnd=cO(t,jn.key=n,e),Hw(t,n,e))}function sO(t){jn.key=0,jn.keyEnd=0,jn.value=0,jn.valueEnd=0,jn.textEnd=t.length}function Hw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function cO(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ct(t,n,e){return zw(t,n,e,!1),ct}function j(t,n){return zw(t,n,null,!0),j}function Mt(t){dO(gO,lO,t,!0)}function lO(t,n){for(let e=aO(n);e>=0;e=Uw(n,e))_d(t,oO(n),!0)}function zw(t,n,e,i){let r=ie(),o=Je(),a=Ed(2);if(o.firstUpdatePass&&Gw(o,t,a,i),n!==Xt&&Cn(r,a,n)){let s=o.data[li()];Ww(o,s,r,r[We],t,r[a+1]=_O(n,e),i,a)}}function dO(t,n,e,i){let r=Je(),o=Ed(2);r.firstUpdatePass&&Gw(r,null,o,i);let a=ie();if(e!==Xt&&Cn(a,o,e)){let s=r.data[li()];if(qw(s,i)&&!$w(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=fd(c,e||"")),Pg(r,s,a,e,i)}else vO(r,s,a,a[We],a[o+1],a[o+1]=hO(t,n,e),i,o)}}function $w(t,n){return n>=t.expandoStartIndex}function Gw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[li()],a=$w(t,e);qw(o,i)&&n===null&&!a&&(n=!1),n=uO(r,o,n,i),nO(r,o,n,e,a,i)}}function uO(t,n,e,i){let r=J0(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=tg(null,t,n,e,i),e=nc(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=tg(r,t,n,e,i),o===null){let c=mO(t,n,i);c!==void 0&&Array.isArray(c)&&(c=tg(null,t,n,c[1],i),c=nc(c,n.attrs,i),fO(t,n,i,c))}else o=pO(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function mO(t,n,e){let i=e?n.classBindings:n.styleBindings;if(va(i)!==0)return t[go(i)]}function fO(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[go(r)]=i}function pO(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=nc(i,a,e)}return nc(i,n.attrs,e)}function tg(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=nc(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function nc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),_d(t,a,e?!0:n[++o]))}return t===void 0?null:t}function hO(t,n,e){if(e==null||e==="")return jt;let i=[],r=$n(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function gO(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&_d(t,i,e)}function vO(t,n,e,i,r,o,a,s){r===Xt&&(r=jt);let c=0,l=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let f=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,_=null,T;d===m?(c+=2,l+=2,f!==h&&(_=m,T=h)):m===null||d!==null&&d<m?(c+=2,_=d):(l+=2,_=m,T=h),_!==null&&Ww(t,n,e,i,_,T,a,s),d=c<r.length?r[c]:null,m=l<o.length?o[l]:null}}function Ww(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],d=tO(l)?Hx(c,n,e,r,va(l),a):void 0;if(!ou(d)){ou(o)||J1(l)&&(o=Hx(c,null,e,r,s,a));let m=Dh(li(),e);sR(i,a,m,r,o)}}function Hx(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,m=d===null,f=e[r+1];f===Xt&&(f=m?jt:void 0);let h=m?bd(f,i):d===i?f:void 0;if(l&&!ou(h)&&(h=bd(c,i)),ou(h)&&(s=h,a))return s;let _=t[r+1];r=a?go(_):va(_)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=bd(c,i))}return s}function ou(t){return t!==void 0}function _O(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Ps($n(t)))),t}function qw(t,n){return(t.flags&(n?8:16))!==0}function b(t,n=""){let e=ie(),i=Je(),r=t+tt,o=i.firstCreatePass?ba(i,r,1,n,null):i.data[r],a=bO(i,e,o,n);e[r]=a,Td()&&iv(i,e,a,o),aa(o,!1)}var bO=(t,n,e,i)=>(Ad(!0),CA(n[We],i));function yO(t,n,e,i=""){return Cn(t,ur(),e)?n+ea(e)+i:Xt}function xO(t,n,e,i,r,o=""){let a=Z0(),s=_w(t,a,e,r);return Ed(2),s?n+ea(e)+i+ea(r)+o:Xt}function se(t){return De("",t),se}function De(t,n,e){let i=ie(),r=yO(i,t,n,e);return r!==Xt&&Zw(i,li(),r),De}function Ui(t,n,e,i,r){let o=ie(),a=xO(o,t,n,e,i,r);return a!==Xt&&Zw(o,li(),a),Ui}function Zw(t,n,e){let i=Dh(n,t);wA(t[We],i,e)}function zx(t,n,e){let i=Je();i.firstCreatePass&&Yw(n,i.data,i.blueprint,ci(t),e)}function Yw(t,n,e,i,r){if(t=Rt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Yw(t[o],n,e,i,r);else{let o=Je(),a=ie(),s=Ot(),c=to(t)?t:Rt(t.provide),l=_h(t),d=s.providerIndexes&1048575,m=s.directiveStart,f=s.providerIndexes>>20;if(to(t)||!t.multi){let h=new fo(l,r,B,null),_=ig(c,n,r?d:d+f,m);_===-1?(og(Wd(s,a),o,c),ng(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[_]=h,a[_]=h)}else{let h=ig(c,n,d+f,m),_=ig(c,n,d,d+f),T=h>=0&&e[h],I=_>=0&&e[_];if(r&&!I||!r&&!T){og(Wd(s,a),o,c);let O=DO(r?wO:CO,e.length,r,i,l,t);!r&&I&&(e[_].providerFactory=O),ng(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(O),a.push(O)}else{let O=Kw(e[r?_:h],l,!r&&i);ng(o,t,h>-1?h:_,O)}!r&&i&&I&&e[_].componentProviders++}}}function ng(t,n,e,i){let r=to(n),o=P0(n);if(r||o){let c=(o?Rt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function Kw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function ig(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function CO(t,n,e,i,r){return Bg(this.multi,[])}function wO(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=Qs(i,i[ne],this.providerFactory.index,r);a=c.slice(0,s),Bg(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],Bg(o,a);return a}function Bg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function DO(t,n,e,i,r,o){let a=new fo(t,e,B,null);return a.multi=[],a.index=n,a.componentProviders=0,Kw(a,r,i&&!e),a}function Oe(t,n){return e=>{e.providersResolver=(i,r)=>zx(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>zx(i,r?r(n):n,!0))}}function Dn(t,n){let e=Hs()+t,i=ie();return i[e]===Xt?lv(i,e,n()):e1(i,e)}function it(t,n,e){return Xw(ie(),Hs(),t,n,e)}function Qw(t,n){let e=t[n];return e===Xt?void 0:e}function Xw(t,n,e,i,r,o){let a=n+e;return Cn(t,a,r)?lv(t,a+1,o?i.call(o,r):i(r)):Qw(t,a+1)}function EO(t,n,e,i,r,o,a){let s=n+e;return _w(t,s,r,o)?lv(t,s+2,a?i.call(a,r,o):i(r,o)):Qw(t,s+2)}function Wn(t,n){let e=Je(),i,r=t+tt;e.firstCreatePass?(i=SO(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=tr(i.type,!0)),a,s=Wt(B);try{let c=Gd(!1),l=o();return Gd(c),Eh(e,ie(),r,l),l}finally{Wt(s)}}function SO(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function fc(t,n,e){let i=t+tt,r=ie(),o=Cd(r,i);return Jw(r,i)?Xw(r,Hs(),n,o.transform,e,o):o.transform(e)}function bo(t,n,e,i){let r=t+tt,o=ie(),a=Cd(o,r);return Jw(o,r)?EO(o,Hs(),n,a.transform,e,i,a):a.transform(e,i)}function Jw(t,n){return t[ne].data[n].pure}function Su(t,n){return vu(t,n)}var au=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},yv=(()=>{class t{compileModuleSync(e){return new nu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=lh(e),o=RC(r.declarations).reduce((a,s)=>{let c=Ti(s);return c&&a.push(new ho(c)),a},[]);return new au(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var eD=(()=>{class t{applicationErrorHandler=u(mn);appRef=u(fn);taskService=u(Ni);ngZone=u(F);zonelessEnabled=u(Ws);tracing=u(Gn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new _e;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Os):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(qh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?cx:zh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Os+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tD(){return[{provide:oi,useExisting:eD},{provide:F,useClass:Ns},{provide:Ws,useValue:!0}]}function IO(){return typeof $localize<"u"&&$localize.locale||mc}var Iu=new D("",{factory:()=>u(Iu,{optional:!0,skipSelf:!0})||IO()});function Y(t){return v0(t)}function $(t,n){return ys(t,n?.equal)}var MO=t=>t;function mi(t,n){if(typeof t=="function"){let e=zp(t,MO,n?.equal);return nD(e,n?.debugName)}else{let e=zp(t.source,t.computation,t.equal);return nD(e,t.debugName)}}function nD(t,n){let e=t[Xe],i=t;return i.set=r=>h0(e,r),i.update=r=>g0(e,r),i.asReadonly=Rd.bind(t),i}var lD=Symbol("InputSignalNode#UNSET"),GO=G(y({},xs),{transformFn:void 0,applyValueToInputSignal(t,n){jr(t,n)}});function dD(t,n){let e=Object.create(GO);e.value=t,e.transformFn=n?.transform;function i(){if(er(e),e.value===lD){let r=null;throw new A(-950,r)}return e.value}return i[Xe]=e,i}var Hi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>rc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function iD(t,n){return dD(t,n)}function WO(t){return dD(lD,t)}var fe=(iD.required=WO,iD);function rD(t,n){return mv(n)}function qO(t,n){return fv(n)}var hc=(rD.required=qO,rD);function oD(t,n){return mv(n)}function ZO(t,n){return fv(n)}var uD=(oD.required=ZO,oD);var Cv=new D(""),YO=new D("");function pc(t){return!t.moduleRef}function KO(t){let n=pc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(F);return e.run(()=>{pc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(mn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),pc(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Cv);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Cv);a.add(o),t.moduleRef.onDestroy(()=>{Ks(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return XO(i,e,()=>{let o=n.get(Ni),a=o.add(),s=n.get(_v);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(Iu,mc);if(jw(c||mc),!n.get(YO,!0))return pc(t)?n.get(fn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(pc(t)){let d=n.get(fn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return QO?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var QO;function XO(t,n,e){try{let i=e();return ji(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Mu=null;function JO(t=[],n){return X.create({name:n,providers:[{provide:Bs,useValue:"platform"},{provide:Cv,useValue:new Set([()=>Mu=null])},...t]})}function eN(t=[]){if(Mu)return Mu;let n=JO(t);return Mu=n,Lw(),tN(n),n}function tN(t){let n=t.get(su,null);dt(t,()=>{n?.forEach(e=>e())})}var nN=1e4;var vQ=nN-1e3;var Ke=(()=>{class t{static __NG_ELEMENT_ID__=iN}return t})();function iN(t){return rN(Ot(),ie(),(t&16)===16)}function rN(t,n,e){if(si(t)&&!e){let i=xn(t.index,n);return new fr(i,i)}else if(t.type&175){let i=n[Kt];return new fr(i,n)}return null}var wv=class{supports(n){return n instanceof Map||cv(n)}create(){return new Dv}},Dv=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||cv(n)))throw new A(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Ev(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Ev=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function aD(){return new ku([new wv])}var ku=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:aD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||aD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new A(901,!1)}}return t})();function mD(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ue(Pe.BootstrapApplicationStart);try{let o=r?.injector??eN(i),a=[tD(),dx,...e||[]],s=new tc({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return KO({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ue(Pe.BootstrapApplicationEnd)}}function re(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function hr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var xv=Symbol("NOT_SET"),fD=new Set,oN=G(y({},xs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:xv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==xv&&!Vr(this))return this.signal;try{for(let r of this.cleanup??fD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ti(this),i;try{i=this.userFn.apply(null,n)}finally{Di(this,e)}return(this.value===xv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Sv=class extends Xs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Nt),a),this.scheduler=r;for(let s of ev){let c=e[s];if(c===void 0)continue;let l=Object.create(oN);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(er(l),l.value),l.signal[Xe]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[s]=l,this.hooks[s]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??fD)e()}finally{Ei(n)}}};function Tu(t,n){let e=n?.injector??u(X),i=e.get(oi),r=e.get(mu),o=e.get(Gn,null,{optional:!0});r.impl??=e.get(tv);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(ca,null,{optional:!0}),c=new Sv(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function Au(t,n){let e=Ti(t),i=n.elementInjector||na();return new ho(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var pD=null;function En(){return pD}function Iv(t){pD??=t}var gc=class{},Ru=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(hD),providedIn:"platform"})}return t})();var hD=(()=>{class t extends Ru{_location;_history;_doc=u(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return En().getBaseHref(this._doc)}onPopState(e){let i=En().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=En().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function _D(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function gD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function gr(t){return t&&t[0]!=="?"?`?${t}`:t}var wa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(sN),providedIn:"root"})}return t})(),aN=new D(""),sN=(()=>{class t extends wa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _D(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+gr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+gr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+gr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(W(Ru),W(aN,8))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vr=(()=>{class t{_subject=new R;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=dN(gD(vD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+gr(i))}normalize(e){return t.stripTrailingSlash(lN(this._basePath,vD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+gr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=gr;static joinWithSlash=_D;static stripTrailingSlash=gD;static \u0275fac=function(i){return new(i||t)(W(wa))};static \u0275prov=S({token:t,factory:()=>cN(),providedIn:"root"})}return t})();function cN(){return new vr(W(wa))}function lN(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function vD(t){return t.replace(/\/index.html$/,"")}function dN(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Mv=/\s+/,bD=[],zi=(()=>{class t{_ngEl;_renderer;initialClasses=bD;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Mv):bD}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Mv):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Mv).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(B(V),B(He))};static \u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var kv=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:zn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(B(V),B(ku),B(He))};static \u0275dir=P({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Tv=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(B(Pt))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Te]})}return t})();function mN(t,n){return{key:t,value:n}}var $i=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=yD;transform(e,i=yD){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(mN(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(B(ku,16))};static \u0275pipe=pv({name:"keyvalue",type:t,pure:!1})}return t})();function yD(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Ou(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var yo=class{};var Av="browser";function xD(t){return t===Av}var vc=class{_doc;constructor(n){this._doc=n}manager},Nu=(()=>{class t extends vc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Lu=new D(""),Pv=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Nu));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Nu);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new A(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(W(Lu),W(F))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Rv="ng-app-id";function CD(t){for(let n of t)n.remove()}function wD(t,n){let e=n.createElement("style");return e.textContent=t,e}function gN(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Rv}="${n}"],link[${Rv}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Rv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Nv(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Fv=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,gN(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,wD);i?.forEach(r=>this.addUsage(r,this.external,Nv))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(CD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])CD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,wD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Nv(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(W(ee),W(pr),W(_o,8),W(vo))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Ov={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Lv=/%COMP%/g;var ED="%COMP%",vN=`_nghost-${ED}`,_N=`_ngcontent-${ED}`,bN=!0,yN=new D("",{factory:()=>bN});function xN(t){return _N.replace(Lv,t)}function CN(t){return vN.replace(Lv,t)}function SD(t,n){return n.map(e=>e.replace(Lv,t))}var Bv=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new _c(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Fu?r.applyToHost(e):r instanceof bc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case Hn.Emulated:o=new Fu(c,l,i,this.appId,d,a,s,m);break;case Hn.ShadowDom:return new Pu(c,e,i,a,s,this.nonce,m,l);case Hn.ExperimentalIsolatedShadowDom:return new Pu(c,e,i,a,s,this.nonce,m);default:o=new bc(c,l,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(W(Pv),W(Fv),W(pr),W(yN),W(ee),W(F),W(_o),W(Gn,8))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),_c=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Ov[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(DD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(DD(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new A(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Ov[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Ov[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(zn.DashCase|zn.Important)?n.style.setProperty(e,i,r&zn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&zn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=En().getGlobalEventTarget(this.doc,n),!n))throw new A(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function DD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Pu=class extends _c{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=SD(i.id,l);for(let m of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=m,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let m of d){let f=Nv(m,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},bc=class extends _c{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?SD(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&po.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Fu=class extends bc{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=xN(l),this.hostAttr=CN(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Bu=class t extends gc{supportsDOMEvents=!0;static makeCurrent(){Iv(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=wN();return e==null?null:DN(e)}resetBaseElement(){yc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Ou(document.cookie,n)}},yc=null;function wN(){return yc=yc||document.head.querySelector("base"),yc?yc.getAttribute("href"):null}function DN(t){return new URL(t,document.baseURI).pathname}var EN=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),ID=["alt","control","meta","shift"],SN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},IN={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},MD=(()=>{class t extends vc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>En().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),ID.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=SN[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ID.forEach(a=>{if(a!==r){let s=IN[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();async function Vv(t,n,e){let i=y({rootComponent:t},MN(n,e));return mD(i)}function MN(t,n){return{platformRef:n?.platformRef,appProviders:[...ON,...t?.providers??[]],platformProviders:RN}}function kN(){Bu.makeCurrent()}function TN(){return new qt}function AN(){return Ug(document),document}var RN=[{provide:vo,useValue:Av},{provide:su,useValue:kN,multi:!0},{provide:ee,useFactory:AN}];var ON=[{provide:Bs,useValue:"root"},{provide:qt,useFactory:TN},{provide:Lu,useClass:Nu,multi:!0},{provide:Lu,useClass:MD,multi:!0},Bv,Fv,Pv,{provide:_t,useExisting:Bv},{provide:yo,useClass:EN},[]];var _r=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Uv=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Hv=class{encodeKey(n){return kD(n)}encodeValue(n){return kD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function NN(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var PN=/%(\d[a-f0-9])/gi,FN={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function kD(t){return encodeURIComponent(t).replace(PN,(n,e)=>FN[e]??n)}function Vu(t){return`${t}`}var Gi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Hv,n.fromString){if(n.fromObject)throw new A(2805,!1);this.map=NN(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Vu):[Vu(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Vu(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Vu(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function LN(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function TD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function AD(t){return typeof Blob<"u"&&t instanceof Blob}function RD(t){return typeof FormData<"u"&&t instanceof FormData}function BN(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var OD="Content-Type",ND="Accept",PD="text/plain",FD="application/json",VN=`${FD}, ${PD}, */*`,Da=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(LN(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new _r,this.context??=new Uv,!this.params)this.params=new Gi,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||TD(this.body)||AD(this.body)||RD(this.body)||BN(this.body)?this.body:this.body instanceof Gi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||RD(this.body)?null:AD(this.body)?this.body.type||null:TD(this.body)?null:typeof this.body=="string"?PD:this.body instanceof Gi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?FD:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,f=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,_=n.transferCache??this.transferCache,T=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,O=n.withCredentials??this.withCredentials,he=n.reportProgress??this.reportProgress,Ne=n.headers||this.headers,Re=n.params||this.params,xt=n.context??this.context;return n.setHeaders!==void 0&&(Ne=Object.keys(n.setHeaders).reduce((en,sn)=>en.set(sn,n.setHeaders[sn]),Ne)),n.setParams&&(Re=Object.keys(n.setParams).reduce((en,sn)=>en.set(sn,n.setParams[sn]),Re)),new t(e,i,I,{params:Re,headers:Ne,context:xt,reportProgress:he,responseType:r,withCredentials:O,transferCache:_,keepalive:o,cache:s,priority:a,timeout:T,mode:c,redirect:l,credentials:d,referrer:m,integrity:f,referrerPolicy:h})}},xo=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(xo||{}),xc=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new _r,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},zv=class t extends xc{constructor(n={}){super(n)}type=xo.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Cc=class t extends xc{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=xo.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ea=class extends xc{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},jN=200,UN=204;var HN=/^\)\]\}',?\n/;var zN=(()=>{class t{xhrFactory;tracingService=u(Gn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let i=this.xhrFactory;return K(null).pipe(gt(()=>new oe(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((I,O)=>a.setRequestHeader(I,O.join(","))),e.headers.has(ND)||a.setRequestHeader(ND,VN),!e.headers.has(OD)){let I=e.detectContentTypeHeader();I!==null&&a.setRequestHeader(OD,I)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();a.responseType=I!=="json"?I:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let I=a.statusText||"OK",O=new _r(a.getAllResponseHeaders()),he=a.responseURL||e.url;return c=new zv({headers:O,status:a.status,statusText:I,url:he}),c},d=this.maybePropagateTrace(()=>{let{headers:I,status:O,statusText:he,url:Ne}=l(),Re=null;O!==UN&&(Re=typeof a.response>"u"?a.responseText:a.response),O===0&&(O=Re?jN:0);let xt=O>=200&&O<300;if(e.responseType==="json"&&typeof Re=="string"){let en=Re;Re=Re.replace(HN,"");try{Re=Re!==""?JSON.parse(Re):null}catch(sn){Re=en,xt&&(xt=!1,Re={error:sn,text:Re})}}xt?(o.next(new Cc({body:Re,headers:I,status:O,statusText:he,url:Ne||void 0})),o.complete()):o.error(new Ea({error:Re,headers:I,status:O,statusText:he,url:Ne||void 0}))}),m=this.maybePropagateTrace(I=>{let{url:O}=l(),he=new Ea({error:I,status:a.status||0,statusText:a.statusText||"Unknown Error",url:O||void 0});o.error(he)}),f=m;e.timeout&&(f=this.maybePropagateTrace(I=>{let{url:O}=l(),he=new Ea({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:O||void 0});o.error(he)}));let h=!1,_=this.maybePropagateTrace(I=>{h||(o.next(l()),h=!0);let O={type:xo.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(O.total=I.total),e.responseType==="text"&&a.responseText&&(O.partialText=a.responseText),o.next(O)}),T=this.maybePropagateTrace(I=>{let O={type:xo.UploadProgress,loaded:I.loaded};I.lengthComputable&&(O.total=I.total),o.next(O)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",f),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",_),s!==null&&a.upload&&a.upload.addEventListener("progress",T)),a.send(s),o.next({type:xo.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",f),e.reportProgress&&(a.removeEventListener("progress",_),s!==null&&a.upload&&a.upload.removeEventListener("progress",T)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(W(yo))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $N(t,n){return n(t)}function GN(t,n,e){return(i,r)=>dt(e,()=>n(i,o=>t(o,r)))}var WN=new D("",{factory:()=>[]}),LD=new D(""),qN=new D("",{factory:()=>!0});var ZN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(zN),r},providedIn:"root"})}return t})();var YN=(()=>{class t{backend;injector;chain=null;pendingTasks=u(qs);contributeToStability=u(qN);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(WN),...this.injector.get(LD,[])]));this.chain=i.reduceRight((r,o)=>GN(r,o,this.injector),$N)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Qr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(W(ZN),W(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),KN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(YN),r},providedIn:"root"})}return t})();function jv(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Wi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Da)o=e;else{let c;r.headers instanceof _r?c=r.headers:c=new _r(r.headers);let l;r.params&&(r.params instanceof Gi?l=r.params:l=new Gi({fromObject:r.params})),o=new Da(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=K(o).pipe(Ko(c=>this.handler.handle(c)));if(e instanceof Da||r.observe==="events")return a;let s=a.pipe(Ae(c=>c instanceof Cc));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(te(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new A(2806,!1);return c.body}));case"blob":return s.pipe(te(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new A(2807,!1);return c.body}));case"text":return s.pipe(te(c=>{if(c.body!==null&&typeof c.body!="string")throw new A(2808,!1);return c.body}));default:return s.pipe(te(c=>c.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Gi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,jv(r,i))}post(e,i,r={}){return this.request("POST",e,jv(r,i))}put(e,i,r={}){return this.request("PUT",e,jv(r,i))}static \u0275fac=function(i){return new(i||t)(W(KN))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var BD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(QN),r},providedIn:"root"})}return t})(),QN=(()=>{class t extends wc{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case wt.NONE:return i;case wt.HTML:return Fi(i,"HTML")?$n(i):qg(this._doc,String(i)).toString();case wt.STYLE:return Fi(i,"Style")?$n(i):i;case wt.SCRIPT:if(Fi(i,"Script"))return $n(i);throw new A(5200,!1);case wt.URL:return Fi(i,"URL")?$n(i):ac(String(i));case wt.RESOURCE_URL:if(Fi(i,"ResourceURL"))return $n(i);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Hg(e)}bypassSecurityTrustStyle(e){return zg(e)}bypassSecurityTrustScript(e){return $g(e)}bypassSecurityTrustUrl(e){return Gg(e)}bypassSecurityTrustResourceUrl(e){return Wg(e)}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pe="primary",Lc=Symbol("RouteTitle"),Yv=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function wo(t){return new Yv(t)}function Gv(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function qD(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Gv(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Gv(o,t.slice(0,o.length),s)||!Gv(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Gu(t){return new Promise((n,e)=>{t.pipe(Ii()).subscribe({next:i=>n(i),error:i=>e(i)})})}function XN(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!fi(t[e],n[e]))return!1;return!0}function fi(t,n){let e=t?Kv(t):void 0,i=n?Kv(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!ZD(t[r],n[r]))return!1;return!0}function Kv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ZD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function JN(t){return t.length>0?t[t.length-1]:null}function So(t){return Es(t)?t:ji(t)?et(Promise.resolve(t)):K(t)}function YD(t){return Es(t)?Gu(t):Promise.resolve(t)}var eP={exact:XD,subset:JD},KD={exact:tP,subset:nP,ignored:()=>!0},QD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Qv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function jD(t,n,e){return eP[e.paths](t.root,n.root,e.matrixParams)&&KD[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function tP(t,n){return fi(t,n)}function XD(t,n,e){if(!Co(t.segments,n.segments)||!Hu(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!XD(t.children[i],n.children[i],e))return!1;return!0}function nP(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>ZD(t[e],n[e]))}function JD(t,n,e){return eE(t,n,n.segments,e)}function eE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Co(r,e)||n.hasChildren()||!Hu(r,e,i))}else if(t.segments.length===e.length){if(!Co(t.segments,e)||!Hu(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!JD(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Co(t.segments,r)||!Hu(t.segments,r,i)||!t.children[pe]?!1:eE(t.children[pe],n,o,i)}}function Hu(t,n,e){return n.every((i,r)=>KD[e](t[r].parameters,i.parameters))}var hn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ve([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=wo(this.queryParams),this._queryParamMap}toString(){return oP.serialize(this)}},Ve=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return zu(this)}},br=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=wo(this.parameters),this._parameterMap}toString(){return nE(this)}};function iP(t,n){return Co(t,n)&&t.every((e,i)=>fi(e.parameters,n[i].parameters))}function Co(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function rP(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===pe&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==pe&&(e=e.concat(n(r,i)))}),e}var Na=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new yr,providedIn:"root"})}return t})(),yr=class{parse(n){let e=new Jv(n);return new hn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Dc(n.root,!0)}`,i=cP(n.queryParams),r=typeof n.fragment=="string"?`#${aP(n.fragment)}`:"";return`${e}${i}${r}`}},oP=new yr;function zu(t){return t.segments.map(n=>nE(n)).join("/")}function Dc(t,n){if(!t.hasChildren())return zu(t);if(n){let e=t.children[pe]?Dc(t.children[pe],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==pe&&i.push(`${r}:${Dc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=rP(t,(i,r)=>r===pe?[Dc(t.children[pe],!1)]:[`${r}:${Dc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[pe]!=null?`${zu(t)}/${e[0]}`:`${zu(t)}/(${e.join("//")})`}}function tE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ju(t){return tE(t).replace(/%3B/gi,";")}function aP(t){return encodeURI(t)}function Xv(t){return tE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function $u(t){return decodeURIComponent(t)}function UD(t){return $u(t.replace(/\+/g,"%20"))}function nE(t){return`${Xv(t.path)}${sP(t.parameters)}`}function sP(t){return Object.entries(t).map(([n,e])=>`;${Xv(n)}=${Xv(e)}`).join("")}function cP(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${ju(e)}=${ju(r)}`).join("&"):`${ju(e)}=${ju(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var lP=/^[^\/()?;#]+/;function Wv(t){let n=t.match(lP);return n?n[0]:""}var dP=/^[^\/()?;=#]+/;function uP(t){let n=t.match(dP);return n?n[0]:""}var mP=/^[^=?&#]+/;function fP(t){let n=t.match(mP);return n?n[0]:""}var pP=/^[^&#]+/;function hP(t){let n=t.match(pP);return n?n[0]:""}var Jv=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ve([],{}):new Ve([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[pe]=new Ve(e,i)),r}parseSegment(){let n=Wv(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(n),new br($u(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=uP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Wv(this.remaining);r&&(i=r,this.capture(i))}n[$u(e)]=$u(i)}parseQueryParam(n){let e=fP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=hP(this.remaining);a&&(i=a,this.capture(i))}let r=UD(e),o=UD(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Wv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=pe);let s=this.parseChildren(e+1);i[a??pe]=Object.keys(s).length===1&&s[pe]?s[pe]:new Ve([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new A(4011,!1)}};function iE(t){return t.segments.length>0?new Ve([],{[pe]:t}):t}function rE(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=rE(r);if(i===pe&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ve(t.segments,n);return gP(e)}function gP(t){if(t.numberOfChildren===1&&t.children[pe]){let n=t.children[pe];return new Ve(t.segments.concat(n.segments),n.children)}return t}function xr(t){return t instanceof hn}function oE(t,n,e=null,i=null,r=new yr){let o=aE(t);return sE(o,n,e,i,r)}function aE(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new Ve(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=iE(i);return n??r}function sE(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return qv(o,o,o,e,i,r);let a=vP(n);if(a.toRoot())return qv(o,o,new Ve([],{}),e,i,r);let s=_P(a,o,t),c=s.processChildren?Sc(s.segmentGroup,s.index,a.commands):lE(s.segmentGroup,s.index,a.commands);return qv(o,s.segmentGroup,c,e,i,r)}function Wu(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function kc(t){return typeof t=="object"&&t!=null&&t.outlets}function HD(t,n,e){t||="\u0275";let i=new hn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function qv(t,n,e,i,r,o){let a={};for(let[l,d]of Object.entries(i??{}))a[l]=Array.isArray(d)?d.map(m=>HD(l,m,o)):HD(l,d,o);let s;t===n?s=e:s=cE(t,n,e);let c=iE(rE(s));return new hn(c,a,r)}function cE(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=cE(o,n,e)}),new Ve(t.segments,i)}var qu=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Wu(i[0]))throw new A(4003,!1);let r=i.find(kc);if(r&&r!==JN(i))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vP(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new qu(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new qu(e,n,i)}var Ia=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function _P(t,n,e){if(t.isAbsolute)return new Ia(n,!0,0);if(!e)return new Ia(n,!1,NaN);if(e.parent===null)return new Ia(e,!0,0);let i=Wu(t.commands[0])?0:1,r=e.segments.length-1+i;return bP(e,r,t.numberOfDoubleDots)}function bP(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new A(4005,!1);r=i.segments.length}return new Ia(i,!1,r-o)}function yP(t){return kc(t[0])?t[0].outlets:{[pe]:t}}function lE(t,n,e){if(t??=new Ve([],{}),t.segments.length===0&&t.hasChildren())return Sc(t,n,e);let i=xP(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ve(t.segments.slice(0,i.pathIndex),{});return o.children[pe]=new Ve(t.segments.slice(i.pathIndex),t.children),Sc(o,0,r)}else return i.match&&r.length===0?new Ve(t.segments,{}):i.match&&!t.hasChildren()?e_(t,n,e):i.match?Sc(t,0,r):e_(t,n,e)}function Sc(t,n,e){if(e.length===0)return new Ve(t.segments,{});{let i=yP(e),r={};if(Object.keys(i).some(o=>o!==pe)&&t.children[pe]&&t.numberOfChildren===1&&t.children[pe].segments.length===0){let o=Sc(t.children[pe],n,e);return new Ve(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=lE(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ve(t.segments,r)}}function xP(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(kc(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!$D(c,l,a))return o;i+=2}else{if(!$D(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function e_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(kc(o)){let c=CP(o.outlets);return new Ve(i,c)}if(r===0&&Wu(e[0])){let c=t.segments[n];i.push(new br(c.path,zD(e[0]))),r++;continue}let a=kc(o)?o.outlets[pe]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Wu(s)?(i.push(new br(a,zD(s))),r+=2):(i.push(new br(a,{})),r++)}return new Ve(i,{})}function CP(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=e_(new Ve([],{}),0,i))}),n}function zD(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function $D(t,n,e){return t==e.path&&fi(n,e.parameters)}var Ic="imperative",kt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(kt||{}),gn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Do=class extends gn{type=kt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},pi=class extends gn{urlAfterRedirects;type=kt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ut=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ut||{}),Tc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Tc||{}),Sn=class extends gn{reason;code;type=kt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function dE(t){return t instanceof Sn&&(t.code===Ut.Redirect||t.code===Ut.SupersededByNewNavigation)}var Zi=class extends gn{reason;code;type=kt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Eo=class extends gn{error;target;type=kt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ac=class extends gn{urlAfterRedirects;state;type=kt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zu=class extends gn{urlAfterRedirects;state;type=kt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yu=class extends gn{urlAfterRedirects;state;shouldActivate;type=kt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ku=class extends gn{urlAfterRedirects;state;type=kt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qu=class extends gn{urlAfterRedirects;state;type=kt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xu=class{route;type=kt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ju=class{route;type=kt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},em=class{snapshot;type=kt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tm=class{snapshot;type=kt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nm=class{snapshot;type=kt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},im=class{snapshot;type=kt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ka=class{},Rc=class{},Ta=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function wP(t){return!(t instanceof ka)&&!(t instanceof Ta)&&!(t instanceof Rc)}var rm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Pa(this.rootInjector)}},Pa=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new rm(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(W(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),om=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=t_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=t_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=n_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return n_(n,this._root).map(e=>e.value)}};function t_(t,n){if(t===n.value)return n;for(let e of n.children){let i=t_(t,e);if(i)return i}return null}function n_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=n_(t,e);if(i.length)return i.unshift(n),i}return[]}var pn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Sa(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Oc=class extends om{snapshot;constructor(n,e){super(n),this.snapshot=e,u_(this,n)}toString(){return this.snapshot.toString()}};function uE(t,n){let e=DP(t,n),i=new pt([new br("",{})]),r=new pt({}),o=new pt({}),a=new pt({}),s=new pt(""),c=new Lt(i,r,a,s,o,pe,t,e.root);return c.snapshot=e.root,new Oc(new pn(c,[]),e)}function DP(t,n){let e={},i={},r={},a=new Aa([],e,r,"",i,pe,t,null,{},n);return new Nc("",new pn(a,[]))}var Lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(te(l=>l[Lc]))??K(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(te(n=>wo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(te(n=>wo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function d_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&fE(r)&&(i.resolve[Lc]=r.title),i}var Aa=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Lc]}constructor(n,e,i,r,o,a,s,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=wo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=wo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Nc=class extends om{url;constructor(n,e){super(e),this.url=n,u_(this,e)}toString(){return mE(this._root)}};function u_(t,n){n.value._routerState=t,n.children.forEach(e=>u_(t,e))}function mE(t){let n=t.children.length>0?` { ${t.children.map(mE).join(", ")} } `:"";return`${t.value}${n}`}function Zv(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,fi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),fi(n.params,e.params)||t.paramsSubject.next(e.params),XN(n.url,e.url)||t.urlSubject.next(e.url),fi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function i_(t,n){let e=fi(t.params,n.params)&&iP(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||i_(t.parent,n.parent))}function fE(t){return typeof t.title=="string"||t.title===null}var pE=new D(""),Bc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=pe;activateEvents=new Z;deactivateEvents=new Z;attachEvents=new Z;detachEvents=new Z;routerOutletData=fe();parentContexts=u(Pa);location=u(Pt);changeDetector=u(Ke);inputBinder=u(lm,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new r_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Te]})}return t})(),r_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Lt?this.route:n===Pa?this.childContexts:n===pE?this.outletData:this.parent.get(n,e)}},lm=new D("");var m_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&E(0,"router-outlet")},dependencies:[Bc],encapsulation:2})}return t})();function f_(t){let n=t.children&&t.children.map(f_),e=n?G(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==pe&&(e.component=m_),e}function EP(t,n,e){let i=Pc(t,n._root,e?e._root:void 0);return new Oc(i,n)}function Pc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=SP(t,n,e);return new pn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Pc(t,s)),a}}let i=IP(n.value),r=n.children.map(o=>Pc(t,o));return new pn(i,r)}}function SP(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Pc(t,i,r);return Pc(t,i)})}function IP(t){return new Lt(new pt(t.url),new pt(t.params),new pt(t.queryParams),new pt(t.fragment),new pt(t.data),t.outlet,t.component,t)}var Ra=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},hE="ngNavigationCancelingError";function am(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=xr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=gE(!1,Ut.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function gE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[hE]=!0,e.cancellationCode=n,e}function MP(t){return vE(t)&&xr(t.url)}function vE(t){return!!t&&t[hE]}var o_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Zv(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Sa(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Sa(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Sa(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Sa(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new im(o.value.snapshot))}),n.children.length&&this.forwardEvent(new tm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Zv(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Zv(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},sm=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ma=class{component;route;constructor(n,e){this.component=n,this.route=e}};function kP(t,n,e){let i=t._root,r=n?n._root:null;return Ec(i,r,e,[i.value])}function TP(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Fa(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!ih(t)?t:n.get(t):i}function Ec(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Sa(n);return t.children.forEach(a=>{AP(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Mc(s,e.getContext(a),r)),r}function AP(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=RP(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new sm(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ec(t,n,s?s.children:null,i,r):Ec(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ma(s.outlet.component,a))}else a&&Mc(n,s,r),r.canActivateChecks.push(new sm(i)),o.component?Ec(t,null,s?s.children:null,i,r):Ec(t,null,e,i,r);return r}function RP(t,n,e){if(typeof e=="function")return dt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Co(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Co(t.url,n.url)||!fi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!i_(t,n)||!fi(t.queryParams,n.queryParams);default:return!i_(t,n)}}function Mc(t,n,e){let i=Sa(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Mc(a,n.children.getContext(o),e):Mc(a,null,e):Mc(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Ma(n.outlet.component,r)):e.canDeactivateChecks.push(new Ma(null,r)):e.canDeactivateChecks.push(new Ma(null,r))}function Vc(t){return typeof t=="function"}function OP(t){return typeof t=="boolean"}function NP(t){return t&&Vc(t.canLoad)}function PP(t){return t&&Vc(t.canActivate)}function FP(t){return t&&Vc(t.canActivateChild)}function LP(t){return t&&Vc(t.canDeactivate)}function BP(t){return t&&Vc(t.canMatch)}function _E(t){return t instanceof qr||t?.name==="EmptyError"}var Uu=Symbol("INITIAL_VALUE");function Oa(){return gt(t=>Ss(t.map(n=>n.pipe(ht(1),At(Uu)))).pipe(te(n=>{for(let e of n)if(e!==!0){if(e===Uu)return Uu;if(e===!1||VP(e))return e}return!0}),Ae(n=>n!==Uu),ht(1)))}function VP(t){return xr(t)||t instanceof Ra}function bE(t){return t.aborted?K(void 0).pipe(ht(1)):new oe(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function yE(t){return Le(bE(t))}function jP(t){return Tt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?K(G(y({},n),{guardsResult:!0})):UP(o,e,i).pipe(Tt(a=>a&&OP(a)?HP(e,r,t):K(a)),te(a=>G(y({},n),{guardsResult:a})))})}function UP(t,n,e){return et(t).pipe(Tt(i=>qP(i.component,i.route,e,n)),Ii(i=>i!==!0,!0))}function HP(t,n,e){return et(n).pipe(Ko(i=>ii($P(i.route.parent,e),zP(i.route,e),WP(t,i.path),GP(t,i.route))),Ii(i=>i!==!0,!0))}function zP(t,n){return t!==null&&n&&n(new nm(t)),K(!0)}function $P(t,n){return t!==null&&n&&n(new em(t)),K(!0)}function GP(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return K(!0);let i=e.map(r=>Zr(()=>{let o=n._environmentInjector,a=Fa(r,o),s=PP(a)?a.canActivate(n,t):dt(o,()=>a(n,t));return So(s).pipe(Ii())}));return K(i).pipe(Oa())}function WP(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>TP(o)).filter(o=>o!==null).map(o=>Zr(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=Fa(s,c),d=FP(l)?l.canActivateChild(e,t):dt(c,()=>l(e,t));return So(d).pipe(Ii())});return K(a).pipe(Oa())}));return K(r).pipe(Oa())}function qP(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return K(!0);let o=r.map(a=>{let s=n._environmentInjector,c=Fa(a,s),l=LP(c)?c.canDeactivate(t,n,e,i):dt(s,()=>c(t,n,e,i));return So(l).pipe(Ii())});return K(o).pipe(Oa())}function ZP(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return K(!0);let a=o.map(s=>{let c=Fa(s,t),l=NP(c)?c.canLoad(n,e):dt(t,()=>c(n,e)),d=So(l);return r?d.pipe(yE(r)):d});return K(a).pipe(Oa(),xE(i))}function xE(t){return Pp(vt(n=>{if(typeof n!="boolean")throw am(t,n)}),te(n=>n===!0))}function YP(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return K(!0);let s=a.map(c=>{let l=Fa(c,t),d=BP(l)?l.canMatch(n,e,r):dt(t,()=>l(n,e,r));return So(d).pipe(yE(o))});return K(s).pipe(Oa(),xE(i))}var qi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Fc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function KP(t){throw new A(4e3,!1)}function QP(t){throw gE(!1,Ut.GuardRejected)}var a_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[pe])throw KP(`${n.redirectTo}`);r=r.children[pe]}}async applyRedirectCommands(n,e,i,r,o){let a=await XP(e,r,o);if(a instanceof hn)throw new Fc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Fc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new hn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new Ve(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function XP(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Gu(So(dt(e,()=>i(n))))}function JP(t,n){return t.providers&&!t._injector&&(t._injector=uc(t.providers,n,`Route: ${t.path}`)),t._injector??n}function qn(t){return t.outlet||pe}function eF(t,n){let e=t.filter(i=>qn(i)===n);return e.push(...t.filter(i=>qn(i)!==n)),e}var s_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function CE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function tF(t,n,e,i,r,o,a){let s=wE(t,n,e);if(!s.matched)return K(s);let c=CE(o(s));return i=JP(n,i),YP(i,n,e,r,c,a).pipe(te(l=>l===!0?s:y({},s_)))}function wE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},s_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||qD)(e,t,n);if(!r)return y({},s_);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function GD(t,n,e,i,r){return e.length>0&&rF(t,e,i,r)?{segmentGroup:new Ve(n,iF(i,new Ve(e,t.children))),slicedSegments:[]}:e.length===0&&oF(t,e,i)?{segmentGroup:new Ve(t.segments,nF(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ve(t.segments,t.children),slicedSegments:e}}function nF(t,n,e,i){let r={};for(let o of e)if(dm(t,n,o)&&!i[qn(o)]){let a=new Ve([],{});r[qn(o)]=a}return y(y({},i),r)}function iF(t,n){let e={};e[pe]=n;for(let i of t)if(i.path===""&&qn(i)!==pe){let r=new Ve([],{});e[qn(i)]=r}return e}function rF(t,n,e,i){return e.some(r=>!dm(t,n,r)||!(qn(r)!==pe)?!1:!(i!==void 0&&qn(r)===i))}function oF(t,n,e){return e.some(i=>dm(t,n,i))}function dm(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function aF(t,n,e){return n.length===0&&!t.children[e]}var c_=class{};async function sF(t,n,e,i,r,o,a="emptyOnly",s){return new l_(t,n,e,i,r,a,o,s).recognize()}var cF=31,l_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new a_(this.urlSerializer,this.urlTree)}noMatchError(n){return new A(4002,`'${n.segmentGroup}'`)}async recognize(){let n=GD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new pn(i,e),o=new Nc("",r),a=oE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Aa([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),pe,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,pe,e),rootSnapshot:e}}catch(i){if(i instanceof Fc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof qi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof pn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],d=eF(e,c),m=await this.processSegmentGroup(n,d,l,c,r);a.push(...m)}let s=DE(a);return lF(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof qi||_E(l))continue;throw l}if(aF(i,r,o))return new c_;throw new qi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(qn(i)!==a&&(a===pe||!dm(r,o,i)))throw new qi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new qi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:m,remainingSegments:f}=wE(e,r,o);if(!c)throw new qi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>cF&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,CE(h),n),T=await this.applyRedirects.lineralizeSegments(r,_);return this.processSegment(n,i,e,T.concat(f),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Aa(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,uF(e),qn(e),e.component??e._loadedComponent??null,e,mF(e),n),s=d_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ne=>this.createSnapshot(n,i,Ne.consumedSegments,Ne.parameters,a),c=await Gu(tF(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new qi(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:f,remainingSegments:h}=c,_=this.createSnapshot(n,i,f,m,a),{segmentGroup:T,slicedSegments:I}=GD(e,f,h,l,o);if(I.length===0&&T.hasChildren()){let Ne=await this.processChildren(d,l,T,_);return new pn(_,Ne)}if(l.length===0&&I.length===0)return new pn(_,[]);let O=qn(i)===o,he=await this.processSegment(d,l,T,I,O?pe:o,!0,_);return new pn(_,he instanceof pn?[he]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Gu(ZP(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw QP(e)}return{routes:[],injector:n}}};function lF(t){t.sort((n,e)=>n.value.outlet===pe?-1:e.value.outlet===pe?1:n.value.outlet.localeCompare(e.value.outlet))}function dF(t){let n=t.value.routeConfig;return n&&n.path===""}function DE(t){let n=[],e=new Set;for(let i of t){if(!dF(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=DE(i.children);n.push(new pn(i.value,r))}return n.filter(i=>!e.has(i))}function uF(t){return t.data||{}}function mF(t){return t.resolve||{}}function fF(t,n,e,i,r,o,a){return Tt(async s=>{let{state:c,tree:l}=await sF(t,n,e,i,s.extractedUrl,r,o,a);return G(y({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function pF(t){return Tt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return K(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of EE(s))o.add(c);let a=0;return et(o).pipe(Ko(s=>r.has(s)?hF(s,e,t):(s.data=d_(s,s.parent,t).resolve,K(void 0))),vt(()=>a++),nd(1),Tt(s=>a===o.size?K(n):ot))})}function EE(t){let n=t.children.map(e=>EE(e)).flat();return[t,...n]}function hF(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!fE(i)&&(r[Lc]=i.title),Zr(()=>(t.data=d_(t,t.parent,e).resolve,gF(r,t,n).pipe(te(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function gF(t,n,e){let i=Kv(t);if(i.length===0)return K({});let r={};return et(i).pipe(Tt(o=>vF(t[o],n,e).pipe(Ii(),vt(a=>{if(a instanceof Ra)throw am(new yr,a);r[o]=a}))),nd(1),te(()=>r),Kr(o=>_E(o)?ot:Ds(o)))}function vF(t,n,e){let i=n._environmentInjector,r=Fa(t,i),o=r.resolve?r.resolve(n,e):dt(i,()=>r(n,e));return So(o)}function WD(t){return gt(n=>{let e=t(n);return e?et(e).pipe(te(()=>n)):K(n)})}var p_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===pe);return i}getResolvedTitleForRoute(e){return e.data[Lc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(SE),providedIn:"root"})}return t})(),SE=(()=>{class t extends p_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(W(BD))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),La=new D("",{factory:()=>({})}),jc=new D(""),IE=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(yv);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await YD(dt(e,()=>i.loadComponent())),a=await TE(kE(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await ME(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function ME(t,n,e,i){let r=await YD(dt(e,()=>t.loadChildren())),o=await TE(kE(r)),a;o instanceof bu||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,d;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,d=a,c=s.get(jc,[],{optional:!0,self:!0}).flat()),{routes:c.map(f_),injector:s,factory:d}}function _F(t){return t&&typeof t=="object"&&"default"in t}function kE(t){return _F(t)?t.default:t}async function TE(t){return t}var um=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(bF),providedIn:"root"})}return t})(),bF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),AE=new D("");var yF=()=>{},RE=new D(""),OE=(()=>{class t{currentNavigation=L(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=L(null);events=new R;transitionAbortWithErrorSubject=new R;configLoader=u(IE);environmentInjector=u(Be);destroyRef=u(Nt);urlSerializer=u(Na);rootContexts=u(Pa);location=u(vr);inputBindingEnabled=u(lm,{optional:!0})!==null;titleStrategy=u(p_);options=u(La,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(um);createViewTransition=u(AE,{optional:!0});navigationErrorHandler=u(RE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>K(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Xu(r)),i=r=>this.events.next(new Ju(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Y(()=>{this.transitions?.next(G(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new pt(null),this.transitions.pipe(Ae(i=>i!==null),gt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return K(i).pipe(gt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Ut.SupersededByNewNavigation),ot;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?G(y({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload")return this.events.next(new Zi(s.id,this.urlSerializer.serialize(s.rawUrl),"",Tc.IgnoredSameUrlNavigation)),s.resolve(!1),ot;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return K(s).pipe(gt(m=>(this.events.next(new Do(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?ot:Promise.resolve(m))),fF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),vt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=m.urlAfterRedirects,f)),this.events.next(new Rc)}),gt(m=>et(i.routesRecognizeHandler.deferredHandle??K(void 0)).pipe(te(()=>m))),vt(()=>{let m=new Ac(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:f,source:h,restoredState:_,extras:T}=s,I=new Do(m,this.urlSerializer.serialize(f),h,_);this.events.next(I);let O=uE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=G(y({},s),{targetSnapshot:O,urlAfterRedirects:f,extras:G(y({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(he=>(he.finalUrl=f,he)),K(i)}else return this.events.next(new Zi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Tc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ot}),te(s=>{let c=new Zu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=G(y({},s),{guards:kP(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),jP(s=>this.events.next(s)),gt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw am(this.urlSerializer,s.guardsResult);let c=new Yu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return ot;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ut.GuardRejected),ot;if(s.guards.canActivateChecks.length===0)return K(s);let l=new Ku(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return ot;let d=!1;return K(s).pipe(pF(this.paramsInheritanceStrategy),vt({next:()=>{d=!0;let m=new Qu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",Ut.NoDataFromResolver)}}))}),WD(s=>{let c=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;m.push(this.configLoader.loadComponent(f,d.routeConfig).then(h=>{d.component=h}))}for(let f of d.children)m.push(...c(f));return m},l=c(s.targetSnapshot.root);return l.length===0?K(s):et(Promise.all(l).then(()=>s))}),WD(()=>this.afterPreactivation()),gt(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?et(l).pipe(te(()=>i)):K(i)}),ht(1),gt(s=>{let c=EP(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=G(y({},s),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new ka);let l=i.beforeActivateHandler.deferredHandle;return l?et(l.then(()=>s)):K(s)}),vt(s=>{new o_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=yF,c)),this.lastSuccessfulNavigation.set(Y(this.currentNavigation)),this.events.next(new pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Le(bE(o.signal).pipe(Ae(()=>!r&&!i.targetRouterState),vt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Ut.Aborted)}))),vt({complete:()=>{r=!0}}),Le(this.transitionAbortWithErrorSubject.pipe(vt(s=>{throw s}))),Qr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Ut.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Kr(s=>{if(r=!0,this.destroyed)return i.resolve(!1),ot;if(vE(s))this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),MP(s)?this.events.next(new Ta(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Eo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=dt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Ra){let{message:d,cancellationCode:m}=am(this.urlSerializer,l);this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new Ta(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return ot}))}))}cancelNavigationTransition(e,i,r){let o=new Sn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Y(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function xF(t){return t!==Ic}var NE=new D("");var PE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(CF),providedIn:"root"})}return t})(),cm=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},CF=(()=>{class t extends cm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mm=(()=>{class t{urlSerializer=u(Na);options=u(La,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(vr);urlHandlingStrategy=u(um);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new hn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof hn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=uE(null,u(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(wF),providedIn:"root"})}return t})(),wF=(()=>{class t extends mm{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Do?this.updateStateMemento():e instanceof Zi?this.commitTransition(i):e instanceof Ac?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ka?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Sn&&!dE(e)?this.restoreHistory(i):e instanceof Eo?this.restoreHistory(i,!0):e instanceof pi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,l=y(y({},s),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=y(y({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function h_(t,n){t.events.pipe(Ae(e=>e instanceof pi||e instanceof Sn||e instanceof Eo||e instanceof Zi),te(e=>e instanceof pi||e instanceof Zi?0:(e instanceof Sn?e.code===Ut.Redirect||e.code===Ut.SupersededByNewNavigation:!1)?2:1),Ae(e=>e!==2),ht(1)).subscribe(()=>{n()})}var Ba=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(yu);stateManager=u(mm);options=u(La,{optional:!0})||{};pendingTasks=u(Ni);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(OE);urlSerializer=u(Na);location=u(vr);urlHandlingStrategy=u(um);injector=u(Be);_events=new R;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(PE);injectorCleanup=u(NE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(jc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(lm,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _e;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Y(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Sn&&i.code!==Ut.Redirect&&i.code!==Ut.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof pi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ta){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||xF(r.source)},a);this.scheduleNavigation(s,Ic,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}wP(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ic,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=G(y({},o),{browserUrl:e})),r){let l=y({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,a,o).catch(l=>{this.disposed||this.injector.get(mn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Y(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(f_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let f=r?r.snapshot:this.routerState.snapshot.root;m=aE(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return sE(m,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=xr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ic,null,i)}navigate(e,i={skipLocationChange:!1}){return DF(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ki(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},QD):i===!1?r=y({},Qv):r=y(y({},Qv),i),xr(e))return jD(this.currentUrlTree,e,r);let o=this.parseUrl(e);return jD(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((m,f)=>{s=m,c=f});let d=this.pendingTasks.add();return h_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function DF(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new A(4008,!1)}var IF=(()=>{class t{router=u(Ba);stateManager=u(mm);fragment=L("");queryParams=L({});path=L("");serializer=u(Na);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof pi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new hn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Va=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Hi("href"),{optional:!0});reactiveHref=mi(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Y(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Y(this._target)}_target=L(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Y(this._queryParams)}_queryParams=L(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Y(this._fragment)}_fragment=L(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Y(this._queryParamsHandling)}_queryParamsHandling=L(void 0);set state(e){this._state.set(e)}get state(){return Y(this._state)}_state=L(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Y(this._info)}_info=L(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Y(this._relativeTo)}_relativeTo=L(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Y(this._preserveFragment)}_preserveFragment=L(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Y(this._skipLocationChange)}_skipLocationChange=L(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Y(this._replaceUrl)}_replaceUrl=L(!1);isAnchorElement;onChanges=new R;applicationErrorHandler=u(mn);options=u(La,{optional:!0});reactiveRouterState=u(IF);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=L(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(xr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=$(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:xr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Y(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(B(Ba),B(Lt),rc("tabindex"),B(He),B(V),B(wa))};static \u0275dir=P({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&q("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xe("href",r.reactiveHref(),Zg)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",re],skipLocationChange:[2,"skipLocationChange","skipLocationChange",re],replaceUrl:[2,"replaceUrl","replaceUrl",re],routerLink:"routerLink"},features:[Te]})}return t})();var MF=new D("");function g_(t,...n){return sr([{provide:jc,multi:!0,useValue:t},[],{provide:Lt,useFactory:kF},{provide:xu,multi:!0,useFactory:TF},n.map(e=>e.\u0275providers)])}function kF(){return u(Ba).routerState.root}function TF(){let t=u(X);return n=>{let e=t.get(fn);if(n!==e.components[0])return;let i=t.get(Ba),r=t.get(AF);t.get(RF)===1&&i.initialNavigation(),t.get(OF,null,{optional:!0})?.setUpPreloading(),t.get(MF,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var AF=new D("",{factory:()=>new R}),RF=new D("",{factory:()=>1});var OF=new D("");var ja=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();teams=L([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(W(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var PF=new D("cdk-dir-doc",{providedIn:"root",factory:()=>u(ee)}),FF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function LE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?FF.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var an=(()=>{class t{get value(){return this.valueSignal()}valueSignal=L("ltr");change=new Z;constructor(){let e=u(PF,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(LE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var LF=["*"];var BF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],VF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],jF=new D("MAT_CARD_CONFIG"),BE=(()=>{class t{appearance;constructor(){let e=u(jF,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:LF,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),VE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var jE=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),UE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:VF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ke(BF),z(0),me(1,"div",0),z(2,1),ve(),z(3,2))},encapsulation:2,changeDetection:0})}return t})();function Uc(t){return t.buttons===0||t.detail===0}function Hc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var v_;function HE(){if(v_==null){let t=typeof document<"u"?document.head:null;v_=!!(t&&(t.createShadowRoot||t.attachShadow))}return v_}function __(t){if(HE()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function fm(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Ht(t){return t.composedPath?t.composedPath()[0]:t.target}var b_;try{b_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{b_=!1}var Se=(()=>{class t{_platformId=u(vo);isBrowser=this._platformId?xD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||b_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zc;function zE(){if(zc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>zc=!0}))}finally{zc=zc||!1}return zc}function Ua(t){return zE()?t:!!t.capture}function hi(t,n=0){return $E(t)?Number(t):arguments.length===2?n:0}function $E(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Jt(t){return t instanceof V?t.nativeElement:t}var GE=new D("cdk-input-modality-detector-options"),WE={ignoreKeys:[18,17,224,91,16]},qE=650,y_={passive:!0,capture:!0},ZE=(()=>{class t{_platform=u(Se);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new pt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ht(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<qE||(this._modality.next(Uc(e)?"keyboard":"mouse"),this._mostRecentTarget=Ht(e))};_onTouchstart=e=>{if(Hc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ht(e)};constructor(){let e=u(F),i=u(ee),r=u(GE,{optional:!0});if(this._options=y(y({},WE),r),this.modalityDetected=this._modality.pipe(Xr(1)),this.modalityChanged=this.modalityDetected.pipe(td()),this._platform.isBrowser){let o=u(_t).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,y_),o.listen(i,"mousedown",this._onMousedown,y_),o.listen(i,"touchstart",this._onTouchstart,y_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$c=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})($c||{}),YE=new D("cdk-focus-monitor-default-options"),pm=Ua({passive:!0,capture:!0}),Io=(()=>{class t{_ngZone=u(F);_platform=u(Se);_inputModalityDetector=u(ZE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ee);_stopInputModalityDetector=new R;constructor(){let e=u(YE,{optional:!0});this._detectionMode=e?.detectionMode||$c.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Ht(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Jt(e);if(!this._platform.isBrowser||r.nodeType!==1)return K();let o=__(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new R,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Jt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Jt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===$c.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===$c.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?qE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Ht(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,pm),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,pm)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,pm),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,pm),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),x_=(()=>{class t{_elementRef=u(V);_focusMonitor=u(Io);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Z;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var hm=new WeakMap,bt=(()=>{class t{_appRef;_injector=u(X);_environmentInjector=u(Be);load(e){let i=this._appRef=this._appRef||this._injector.get(fn),r=hm.get(i);r||(r={loaders:new Set,refs:[]},hm.set(i,r),i.onDestroy(()=>{hm.get(i)?.refs.forEach(o=>o.destroy()),hm.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Au(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),gm;function UF(){if(gm===void 0&&(gm=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(gm=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return gm}function Mo(t){return UF()?.createHTML(t)||t}function KE(t,n,e){let i=e.sanitize(wt.HTML,n);t.innerHTML=Mo(i||"")}function Yi(t){return Array.isArray(t)?t:[t]}var QE=new Set,ko,_m=(()=>{class t{_platform=u(Se);_nonce=u(_o,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):zF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&HF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function HF(t,n){if(!QE.has(t))try{ko||(ko=document.createElement("style"),n&&ko.setAttribute("nonce",n),ko.setAttribute("type","text/css"),document.head.appendChild(ko)),ko.sheet&&(ko.sheet.insertRule(`@media ${t} {body{ }}`,0),QE.add(t))}catch(e){console.error(e)}}function zF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var To=(()=>{class t{_mediaMatcher=u(_m);_zone=u(F);_queries=new Map;_destroySubject=new R;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return XE(Yi(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=XE(Yi(e)).map(a=>this._registerQuery(a).observable),o=Ss(r);return o=ii(o.pipe(ht(1)),o.pipe(Xr(1),Pn(0))),o.pipe(te(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new oe(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(At(i),te(({matches:a})=>({query:e,matches:a})),Le(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function XE(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function $F(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var JE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),GF=(()=>{class t{_mutationObserverFactory=u(JE);_observedElements=new Map;_ngZone=u(F);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Jt(e);return new oe(r=>{let a=this._observeElement(i).pipe(te(s=>s.filter(c=>!$F(c))),Ae(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new R,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bm=(()=>{class t{_contentObserver=u(GF);_elementRef=u(V);event=new Z;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=hi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Pn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",re],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ym=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({providers:[JE]})}return t})();var Cm=(()=>{class t{_platform=u(Se);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return qF(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=WF(tL(e));if(i&&(eS(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=eS(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!JF(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return eL(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function WF(t){try{return t.frameElement}catch{return null}}function qF(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function ZF(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function YF(t){return QF(t)&&t.type=="hidden"}function KF(t){return XF(t)&&t.hasAttribute("href")}function QF(t){return t.nodeName.toLowerCase()=="input"}function XF(t){return t.nodeName.toLowerCase()=="a"}function tS(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function eS(t){if(!tS(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function JF(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function eL(t){return YF(t)?!1:ZF(t)||KF(t)||t.hasAttribute("contenteditable")||tS(t)}function tL(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var xm=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?st(n,{injector:this._injector}):setTimeout(n)}},C_=(()=>{class t{_checker=u(Cm);_ngZone=u(F);_document=u(ee);_injector=u(X);constructor(){u(bt).load(vm)}create(e,i=!1){return new xm(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nS=new D("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),iS=new D("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),nL=0,w_=(()=>{class t{_ngZone=u(F);_defaultOptions=u(iS,{optional:!0});_liveElement;_document=u(ee);_sanitizer=u(wc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(nS,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:KE(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${nL++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var iL=200,wm=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:iL;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(vt(e=>this._pressedLetters.push(e)),Pn(n),Ae(()=>this._pressedLetters.length>0),te(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function In(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Ha=class{_items;_activeItemIndex=L(-1);_activeItem=L(null);_wrap=!1;_typeaheadSubscription=_e.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Un?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Vi(n)&&(this._effectRef=Qt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new wm(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||In(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Vi(this._items)?this._items():this._items instanceof Un?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Gc=class extends Ha{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Wc=class extends Ha{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var E_={},mt=class t{_appId=u(pr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),E_.hasOwnProperty(n)||(E_[n]=0),`${n}${e?t._infix+"-":""}${E_[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var aS=" ";function S_(t,n,e){let i=sS(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(aS)))}function Dm(t,n,e){let i=sS(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(aS)):t.removeAttribute(n)}function sS(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Zn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Zn||{}),Em,Ao;function Sm(){if(Ao==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ao=!1,Ao;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ao=!0;else{let t=Element.prototype.scrollTo;t?Ao=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Ao=!1}}return Ao}function za(){if(typeof document!="object"||!document)return Zn.NORMAL;if(Em==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Em=Zn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Em=t.scrollLeft===0?Zn.NEGATED:Zn.INVERTED),t.remove()}return Em}function I_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var $a,cS=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function M_(){if($a)return $a;if(typeof document!="object"||!document)return $a=new Set(cS),$a;let t=document.createElement("input");return $a=new Set(cS.filter(n=>(t.setAttribute("type",n),t.type===n))),$a}var Im={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var rL=new D("MATERIAL_ANIMATIONS"),lS=null;function oL(){return u(rL,{optional:!0})?.animationsDisabled||u(oc,{optional:!0})==="NoopAnimations"?"di-disabled":(lS??=u(_m).matchMedia("(prefers-reduced-motion)").matches,lS?"reduced-motion":"enabled")}function Qe(){return oL()!=="enabled"}function ft(t){return t==null?"":typeof t=="string"?t:`${t}px`}function lt(t){return t!=null&&`${t}`!="false"}var Mn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Mn||{}),k_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Mn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},dS=Ua({passive:!0,capture:!0}),T_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,dS)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,dS)))}_delegateEventHandler=n=>{let e=Ht(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},qc={enterDuration:225,exitDuration:150},aL=800,uS=Ua({passive:!0,capture:!0}),mS=["mousedown","touchstart"],fS=["mouseup","mouseleave","touchend","touchcancel"],sL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ro=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new T_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Jt(i)),o&&o.get(bt).load(sL)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},qc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||cL(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),f=m.transitionProperty,h=m.transitionDuration,_=f==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,T=new k_(this,d,i,_);d.style.transform="scale3d(1, 1, 1)",T.state=Mn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=T);let I=null;return!_&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{I&&(I.fallbackTimer=null),clearTimeout(Ne),this._finishRippleTransition(T)},he=()=>this._destroyRipple(T),Ne=setTimeout(he,l+100);d.addEventListener("transitionend",O),d.addEventListener("transitioncancel",he),I={onTransitionEnd:O,onTransitionCancel:he,fallbackTimer:Ne}}),this._activeRipples.set(T,I),(_||!l)&&this._finishRippleTransition(T),T}fadeOutRipple(n){if(n.state===Mn.FADING_OUT||n.state===Mn.HIDDEN)return;let e=n.element,i=y(y({},qc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Mn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Jt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,mS.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{fS.forEach(e=>{this._triggerElement.addEventListener(e,this,uS)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Mn.FADING_IN?this._startFadeOutTransition(n):n.state===Mn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Mn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Mn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Uc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+aL;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Hc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Mn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Mn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(mS.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(fS.forEach(e=>n.removeEventListener(e,this,uS)),this._pointerUpEventsRegistered=!1))}};function cL(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Ga=new D("mat-ripple-global-options"),Oo=(()=>{class t{_elementRef=u(V);_animationsDisabled=Qe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(F),i=u(Se),r=u(Ga,{optional:!0}),o=u(X);this._globalOptions=r||{},this._rippleRenderer=new Ro(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var lL={capture:!0},dL=["focus","mousedown","mouseenter","touchstart"],A_="mat-ripple-loader-uninitialized",R_="mat-ripple-loader-class-name",pS="mat-ripple-loader-centered",Mm="mat-ripple-loader-disabled",hS=(()=>{class t{_document=u(ee);_animationsDisabled=Qe();_globalRippleOptions=u(Ga,{optional:!0});_platform=u(Se);_ngZone=u(F);_injector=u(X);_eventCleanups;_hosts=new Map;constructor(){let e=u(_t).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>dL.map(i=>e.listen(this._document,i,this._onInteraction,lL)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(A_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(R_))&&e.setAttribute(R_,i.className||""),i.centered&&e.setAttribute(pS,""),i.disabled&&e.setAttribute(Mm,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Mm,""):e.removeAttribute(Mm)}_onInteraction=e=>{let i=Ht(e);if(i instanceof HTMLElement){let r=i.closest(`[${A_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(R_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??qc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??qc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Mm),rippleConfig:{centered:e.hasAttribute(pS),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Ro(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(A_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var uL=["mat-icon-button",""],mL=["*"],fL=new D("MAT_BUTTON_CONFIG");function gS(t){return t==null?void 0:hr(t)}var km=(()=>{class t{_elementRef=u(V);_ngZone=u(F);_animationsDisabled=Qe();_config=u(fL,{optional:!0});_focusMonitor=u(Io);_cleanupClick;_renderer=u(He);_rippleLoader=u(hS);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(bt).load(gi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Mt(r.color?"mat-"+r.color:""),j("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",re],disabled:[2,"disabled","disabled",re],ariaDisabled:[2,"aria-disabled","ariaDisabled",re],disabledInteractive:[2,"disabledInteractive","disabledInteractive",re],tabIndex:[2,"tabIndex","tabIndex",gS],_tabindex:[2,"tabindex","_tabindex",gS]}})}return t})(),Zc=(()=>{class t extends km{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ie],attrs:uL,ngContentSelectors:mL,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(),Me(0,"span",0),z(1),Me(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Wa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge]})}return t})();var pL=["matButton",""],_S=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],bS=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],hL=["mat-fab",""];var vS=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),No=(()=>{class t extends km{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=gL(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?vS.get(this._appearance):null,o=vS.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:pL,ngContentSelectors:bS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(_S),Me(0,"span",0),z(1),me(2,"span",1),z(3,1),ve(),z(4,2),Me(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function gL(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var yS=No,vL=new D("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>O_}),O_={color:"accent"},xS=(()=>{class t extends km{_options=u(vL,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||O_,this.color=this._options.color||O_.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",re]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:hL,ngContentSelectors:bS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(_S),Me(0,"span",0),z(1),me(2,"span",1),z(3,1),ve(),z(4,2),Me(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var N_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Wa,Ge]})}return t})();var bL=t=>[t,"map"],yL=t=>[t,"convoy"],xL=t=>[t,"shop"],Tm=class t{team=fe.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(v(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),b(3),g()(),v(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),E(7,"img",3),b(8," Map "),g()(),v(9,"button",4)(10,"span",2)(11,"div",5),b(12,"?"),g(),b(13," Convoy "),g()(),v(14,"button",4)(15,"span",2),E(16,"img",6),b(17," Shop "),g()()()()),e&2&&(p(3),De(" ",i.team().teamName," "),p(2),k("routerLink",it(6,bL,i.GetTeamNameWithoutSpaces())),p(4),k("disabled",!i.team().showConvoyLink)("routerLink",it(8,yL,i.GetTeamNameWithoutSpaces())),p(5),k("disabled",!i.team().showShopLink)("routerLink",it(10,xL,i.GetTeamNameWithoutSpaces())))},dependencies:[BE,UE,VE,jE,No,Va],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var CS="(max-width: 900px)",vi=class t{breakpointObserver=u(To);isSmallWidth=L(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([CS]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[CS])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var Am=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"div",1),Me(2,"div",2),me(3,"div",3),b(4,"Loading..."),ve()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var _i=class t{DARK_MODE_CLASS="dark-mode";document=u(ee);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=L(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=$(()=>this.themeMode()==="dark");constructor(){Qt(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var P_=t=>({width:t});function CL(t,n){t&1&&E(0,"loading-icon")}function wL(t,n){if(t&1&&(v(0,"div",7)(1,"p",17),b(2),g()()),t&2){let e=x();p(2),De(" ",e.teamListService.errorMessage()," ")}}function DL(t,n){if(t&1&&E(0,"team-listing",14),t&2){let e=n.$implicit;k("team",e)}}function EL(t,n){t&1&&(v(0,"div",7)(1,"p",17),b(2," There are no teams available. "),g()())}function SL(t,n){if(t&1&&de(0,DL,1,1,"team-listing",14,Ze,!1,EL,3,0,"div",7),t&2){let e=x();ue(e.teamListService.teamsList())}}var Rm=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(vi),this.themeService=u(_i),this.teamListService=u(ja),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(B(vi),B(_i),B(ja))};static \u0275cmp=M({type:t,selectors:[["home"]],decls:48,vars:13,consts:[[1,"decorativeTriangleTop"],[1,"homeViewContainer"],[3,"ngClass"],[1,"logoColumn"],["src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(E(0,"div",0),v(1,"div",1)(2,"div",2)(3,"div",3),E(4,"img",4),v(5,"button",5),q("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),b(6,"Toggle Theme"),g()(),v(7,"div",6),C(8,CL,1,0,"loading-icon")(9,wL,3,1,"div",7)(10,SL,3,1),g()(),v(11,"div",2)(12,"div",8)(13,"h1",9),b(14,"Information"),g(),v(15,"p"),b(16,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),g(),v(17,"h2",9),b(18,"Resources"),g(),v(19,"ul")(20,"li")(21,"a",10),b(22,"Reddit Emblem Maps Documentation"),g()(),v(23,"li")(24,"a",11),b(25,"API Github Repository"),g()(),v(26,"li")(27,"a",12),b(28,"Webapp Github Repository"),g()()(),v(29,"h2",9),b(30,"Example"),g(),v(31,"p"),b(32,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),g(),v(33,"ul")(34,"li")(35,"a",13),b(36,"Team Example Google Spreadsheet"),g()()(),E(37,"team-listing",14),g(),v(38,"div",8)(39,"h2",9),b(40,"Credits"),g(),v(41,"ul")(42,"li")(43,"a",15),b(44,'Website background texture "Az Subtle" by Anli'),g()(),v(45,"li")(46,"a",16),b(47,`"Mac's Minecraft" pixel font`),g()()()()()()),e&2&&(p(2),k("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),p(5),k("ngStyle",it(7,P_,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),p(),w(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),p(3),k("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),p(),k("ngStyle",it(9,P_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),p(25),k("team",i.teamExample),p(),k("ngStyle",it(11,P_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Tm,zi,kv,Am],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var IL=20,qa=(()=>{class t{_ngZone=u(F);_platform=u(Se);_renderer=u(_t).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=IL){return this._platform.isBrowser?new oe(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ed(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):K()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ae(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Jt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cr=(()=>{class t{elementRef=u(V);scrollDispatcher=u(qa);ngZone=u(F);dir=u(an,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new R;_renderer=u(He);_cleanupScroll;_elementScrolled=new R;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&za()!=Zn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),za()==Zn.INVERTED?e.left=e.right:za()==Zn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Sm()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&za()==Zn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&za()==Zn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),ML=20,Yn=(()=>{class t{_platform=u(Se);_listeners;_viewportSize=null;_change=new R;_document=u(ee);constructor(){let e=u(F),i=u(_t).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=ML){return e>0?this._change.pipe(ed(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})(),F_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge,Yc,Ge,Yc]})}return t})();var Fm=["*"],kL=["content"],TL=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],AL=["mat-drawer","mat-drawer-content","*"];function RL(t,n){if(t&1){let e=rn();v(0,"div",1),q("click",function(){Dt(e);let r=x();return Et(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function OL(t,n){t&1&&(v(0,"mat-drawer-content"),z(1,2),g())}var NL=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],PL=["mat-sidenav","mat-sidenav-content","*"];function FL(t,n){if(t&1){let e=rn();v(0,"div",1),q("click",function(){Dt(e);let r=x();return Et(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function LL(t,n){t&1&&(v(0,"mat-sidenav-content"),z(1,2),g())}var BL=`.mat-drawer-container {
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
`;var VL=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),V_=new D("MAT_DRAWER_CONTAINER"),Om=(()=>{class t extends Cr{_platform=u(Se);_changeDetectorRef=u(Ke);_container=u(B_);constructor(){let e=u(V),i=u(qa),r=u(F);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(ct("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Oe([{provide:Cr,useExisting:t}]),Ie],ngContentSelectors:Fm,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},encapsulation:2,changeDetection:0})}return t})(),L_=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(C_);_focusMonitor=u(Io);_platform=u(Se);_ngZone=u(F);_renderer=u(He);_interactivityChecker=u(Cm);_doc=u(ee);_container=u(V_,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=lt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=lt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(lt(e))}_opened=L(!1);_openedVia=null;_animationStarted=new R;_animationEnd=new R;openedChange=new Z(!0);_openedStream=this.openedChange.pipe(Ae(e=>e),te(()=>{}));openedStart=this._animationStarted.pipe(Ae(()=>this.opened),Qo(void 0));_closedStream=this.openedChange.pipe(Ae(e=>!e),te(()=>{}));closedStart=this._animationStarted.pipe(Ae(()=>!this.opened),Qo(void 0));_destroyed=new R;onPositionChanged=new Z;_content;_modeChanged=new R;_injector=u(X);_changeDetectorRef=u(Ke);constructor(){this.openedChange.pipe(Le(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!In(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":st(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ht(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ye(kL,5),i&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(xe("align",null)("tabIndex",r.mode!=="side"?"-1":null),ct("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Fm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),v(0,"div",1,0),z(2),g())},dependencies:[Cr],encapsulation:2,changeDetection:0})}return t})(),B_=(()=>{class t{_dir=u(an,{optional:!0});_element=u(V);_ngZone=u(F);_changeDetectorRef=u(Ke);_animationDisabled=Qe();_transitionsEnabled=!1;_allDrawers;_drawers=new Un;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=lt(e)}_autosize=u(VL);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:lt(e)}_backdropOverride=null;backdropClick=new Z;_start=null;_end=null;_left=null;_right=null;_destroyed=new R;_doCheckSubject=new R;_contentMargins={left:null,right:null};_contentMarginChanges=new R;get scrollable(){return this._userContent||this._content}_injector=u(X);constructor(){let e=u(Se),i=u(Yn);this._dir?.change.pipe(Le(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Le(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(At(this._allDrawers),Le(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(At(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Pn(10),Le(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Le(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Le(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Le(this._drawers.changes)).subscribe(()=>{st({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Le(Gt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Om,5)(o,L_,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ye(Om,5),i&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Oe([{provide:V_,useExisting:t}])],ngContentSelectors:AL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(TL),C(0,RL,1,2,"div",0),z(1),z(2,1),C(3,OL,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[Om],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Nm=(()=>{class t extends Om{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Oe([{provide:Cr,useExisting:t}]),Ie],ngContentSelectors:Fm,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},encapsulation:2,changeDetection:0})}return t})(),j_=(()=>{class t extends L_{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=lt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=hi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=hi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(xe("tabIndex",r.mode!=="side"?"-1":null)("align",null),ct("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Oe([{provide:L_,useExisting:t}]),Ie],ngContentSelectors:Fm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),v(0,"div",1,0),z(2),g())},dependencies:[Cr],encapsulation:2,changeDetection:0})}return t})(),ES=(()=>{class t extends B_{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Nm,5)(o,j_,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Oe([{provide:V_,useExisting:t},{provide:B_,useExisting:t}]),Ie],ngContentSelectors:PL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(NL),C(0,FL,1,2,"div",0),z(1),z(2,1),C(3,LL,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[Nm],styles:[BL],encapsulation:2,changeDetection:0})}return t})();var Kc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Za=class extends Kc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Kn=class extends Kc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},U_=class extends Kc{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},Ya=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Za)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Kn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof U_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Lm=class extends Ya{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(ui,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||X.NULL,o=r.get(Be,i.injector);e=Au(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},SS=(()=>{class t extends Kn{constructor(){let e=u(St),i=u(Pt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Ie]})}return t})(),Ka=(()=>{class t extends Ya{_moduleRef=u(ui,{optional:!0});_document=u(ee);_viewContainerRef=u(Pt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Z;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ie]})}return t})(),H_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var z_=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new oe(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ae(e=>e.some(i=>i.target===n)),rd({bufferSize:1,refCount:!0}),Le(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Bm=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new z_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Y_=["*"];function jL(t,n){t&1&&z(0)}var UL=["tabListContainer"],HL=["tabList"],zL=["tabListInner"],$L=["nextPaginator"],GL=["previousPaginator"],WL=["content"];function qL(t,n){}var ZL=["tabBodyWrapper"],YL=["tabHeader"];function KL(t,n){}function QL(t,n){if(t&1&&It(0,KL,0,0,"ng-template",12),t&2){let e=x().$implicit;k("cdkPortalOutlet",e.templateLabel)}}function XL(t,n){if(t&1&&b(0),t&2){let e=x().$implicit;se(e.textLabel)}}function JL(t,n){if(t&1){let e=rn();v(0,"div",7,2),q("click",function(){let r=Dt(e),o=r.$implicit,a=r.$index,s=x(),c=on(1);return Et(s._handleClick(o,c,a))})("cdkFocusChange",function(r){let o=Dt(e).$index,a=x();return Et(a._tabFocusChanged(r,o))}),E(2,"span",8)(3,"div",9),v(4,"span",10)(5,"span",11),C(6,QL,1,1,null,12)(7,XL,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=on(1),o=x();Mt(e.labelClass),j("mdc-tab--active",o.selectedIndex===i),k("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),xe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),k("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),w(e.templateLabel?6:7)}}function e2(t,n){t&1&&z(0)}function t2(t,n){if(t&1){let e=rn();v(0,"mat-tab-body",13),q("_onCentered",function(){Dt(e);let r=x();return Et(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Dt(e);let o=x();return Et(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Dt(e);let o=x();return Et(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=x();Mt(e.bodyClass),k("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),xe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var n2=new D("MatTabContent"),i2=(()=>{class t{template=u(St);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabContent",""]],features:[Oe([{provide:n2,useExisting:t}])]})}return t})(),r2=new D("MatTabLabel"),TS=new D("MAT_TAB"),K_=(()=>{class t extends SS{_closestTab=u(TS,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Oe([{provide:r2,useExisting:t}]),Ie]})}return t})(),AS=new D("MAT_TAB_GROUP"),Q_=(()=>{class t{_viewContainerRef=u(Pt);_closestTabGroup=u(AS,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new R;position=null;origin=null;isActive=!1;constructor(){u(bt).load(gi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Kn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,K_,5)(o,i2,7,St),i&2){let a;U(a=H())&&(r.templateLabel=a.first),U(a=H())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ye(St,7),i&2){let o;U(o=H())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&xe("id",null)},inputs:{disabled:[2,"disabled","disabled",re],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Oe([{provide:TS,useExisting:t}]),Te],ngContentSelectors:Y_,decls:1,vars:0,template:function(i,r){i&1&&(ke(),Ca(0,jL,1,0,"ng-template"))},encapsulation:2})}return t})(),$_="mdc-tab-indicator--active",IS="mdc-tab-indicator--no-transition",G_=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},o2=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add($_);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(IS),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(IS),i.classList.add($_),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove($_)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",re]}})}return t})();var RS=(()=>{class t extends o2{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(xe("aria-disabled",!!r.disabled),j("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",re]},features:[Ie]})}return t})(),MS={passive:!0},a2=650,s2=100,c2=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_viewportRuler=u(Yn);_dir=u(an,{optional:!0});_ngZone=u(F);_platform=u(Se);_sharedResizeObserver=u(Bm);_injector=u(X);_renderer=u(He);_animationsDisabled=Qe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new R;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new R;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new Z;indexFocused=new Z;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),MS),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),MS))}ngAfterContentInit(){let e=this._dir?this._dir.change:K("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Pn(32),Le(this._destroyed)),r=this._viewportRuler.change(150).pipe(Le(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Wc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),st(o,{injector:this._injector}),Gt(e,r,i,this._items.changes,this._itemsResized()).pipe(Le(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?ot:this._items.changes.pipe(At(this._items),gt(e=>new oe(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Xr(1),Ae(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!In(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,d=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>d&&(this.scrollDistance+=Math.min(c-d,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Yr(a2,s2).pipe(Le(Gt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",re],selectedIndex:[2,"selectedIndex","selectedIndex",hr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),l2=(()=>{class t extends c2{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new G_(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,RS,4),i&2){let a;U(a=H())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ye(UL,7)(HL,7)(zL,7)($L,5)(GL,5),i&2){let o;U(o=H())&&(r._tabListContainer=o.first),U(o=H())&&(r._tabList=o.first),U(o=H())&&(r._tabListInner=o.first),U(o=H())&&(r._nextPaginator=o.first),U(o=H())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&j("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",re]},features:[Ie],ngContentSelectors:Y_,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(ke(),v(0,"div",5,0),q("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),E(2,"div",6),g(),v(3,"div",7,1),q("keydown",function(a){return r._handleKeydown(a)}),v(5,"div",8,2),q("cdkObserveContent",function(){return r._onContentChanges()}),v(7,"div",9,3),z(9),g()()(),v(10,"div",10,4),q("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),E(12,"div",6),g()),i&2&&(j("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),k("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),j("_mat-animation-noopable",r._animationsDisabled),p(2),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),j("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),k("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Oo,bm],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),d2=new D("MAT_TABS_CONFIG"),kS=(()=>{class t extends Ka{_host=u(W_);_ngZone=u(F);_centeringSub=_e.EMPTY;_leavingSub=_e.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(At(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabBodyHost",""]],features:[Ie]})}return t})(),W_=(()=>{class t{_elementRef=u(V);_dir=u(an,{optional:!0});_ngZone=u(F);_injector=u(X);_renderer=u(He);_diAnimationsDisabled=Qe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=_e.EMPTY;_position;_previousPosition;_onCentering=new Z;_beforeCentering=new Z;_afterLeavingCenter=new Z;_onCentered=new Z(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Ke);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),st(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),st(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ye(kS,5)(WL,5),i&2){let o;U(o=H())&&(r._portalHost=o.first),U(o=H())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&xe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(v(0,"div",1,0),It(2,qL,0,0,"ng-template",2),g()),i&2&&j("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[kS,Cr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),OS=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_ngZone=u(F);_tabsSubscription=_e.EMPTY;_tabLabelSubscription=_e.EMPTY;_tabBodySubscription=_e.EMPTY;_diAnimationsDisabled=Qe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Un;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Z;focusChange=new Z;animationDone=new Z;selectedTabChange=new Z(!0);_groupId;_isServer=!u(Se).isBrowser;constructor(){let e=u(d2,{optional:!0});this._groupId=u(mt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(At(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new q_;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Gt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Q_,5),i&2){let a;U(a=H())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ye(ZL,5)(YL,5)(W_,5),i&2){let o;U(o=H())&&(r._tabBodyWrapper=o.first),U(o=H())&&(r._tabHeader=o.first),U(o=H())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(xe("mat-align-tabs",r.alignTabs),Mt("mat-"+(r.color||"primary")),ct("--mat-tab-animation-duration",r.animationDuration),j("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",re],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",re],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",re],selectedIndex:[2,"selectedIndex","selectedIndex",hr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",hr],disablePagination:[2,"disablePagination","disablePagination",re],disableRipple:[2,"disableRipple","disableRipple",re],preserveContent:[2,"preserveContent","preserveContent",re],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Oe([{provide:AS,useExisting:t}])],ngContentSelectors:Y_,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(ke(),v(0,"mat-tab-header",3,0),q("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),de(2,JL,8,17,"div",4,wn),g(),C(4,e2,1,0),v(5,"div",5,1),de(7,t2,1,10,"mat-tab-body",6,wn),g()),i&2&&(k("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Cu("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),ue(r._tabs),p(2),w(r._isServer?4:-1),p(),j("_mat-animation-noopable",r._animationsDisabled()),p(2),ue(r._tabs))},dependencies:[l2,RS,x_,Oo,Ka,W_],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),q_=class{index;tab};var bi=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=lt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=lt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(xe("aria-orientation",r.vertical?"vertical":"horizontal"),j("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),NS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge]})}return t})();var u2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),m2={passive:!0},PS=(()=>{class t{_platform=u(Se);_ngZone=u(F);_renderer=u(_t).createRenderer(null,null);_styleLoader=u(bt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ot;this._styleLoader.load(u2);let i=Jt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new R,a="cdk-text-field-autofilled",s=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,m2)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Jt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var FS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var HS=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(B(He),B(V))};static \u0275dir=P({type:t})}return t})(),f2=(()=>{class t extends HS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,features:[Ie]})}return t})(),Dr=new D("");var p2={provide:Dr,useExisting:Zt(()=>Km),multi:!0};function h2(){let t=En()?En().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var g2=new D(""),Km=(()=>{class t extends HS{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!h2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(B(He),B(V),B(g2,8))};static \u0275dir=P({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&q("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Oe([p2]),Ie]})}return t})();function J_(t){return t==null||eb(t)===0}function eb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var rl=new D(""),tb=new D(""),v2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ja=class{static min(n){return _2(n)}static max(n){return b2(n)}static required(n){return y2(n)}static requiredTrue(n){return x2(n)}static email(n){return C2(n)}static minLength(n){return w2(n)}static maxLength(n){return D2(n)}static pattern(n){return E2(n)}static nullValidator(n){return zS()}static compose(n){return YS(n)}static composeAsync(n){return KS(n)}};function _2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function b2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function y2(t){return J_(t.value)?{required:!0}:null}function x2(t){return t.value===!0?null:{required:!0}}function C2(t){return J_(t.value)||v2.test(t.value)?null:{email:!0}}function w2(t){return n=>{let e=n.value?.length??eb(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function D2(t){return n=>{let e=n.value?.length??eb(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function E2(t){if(!t)return zS;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(J_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function zS(t){return null}function $S(t){return t!=null}function GS(t){return ji(t)?et(t):t}function WS(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function qS(t,n){return n.map(e=>e(t))}function S2(t){return!t.validate}function ZS(t){return t.map(n=>S2(n)?n:e=>n.validate(e))}function YS(t){if(!t)return null;let n=t.filter($S);return n.length==0?null:function(e){return WS(qS(e,n))}}function nb(t){return t!=null?YS(ZS(t)):null}function KS(t){if(!t)return null;let n=t.filter($S);return n.length==0?null:function(e){let i=qS(e,n).map(GS);return Is(i).pipe(te(WS))}}function ib(t){return t!=null?KS(ZS(t)):null}function LS(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function QS(t){return t._rawValidators}function XS(t){return t._rawAsyncValidators}function X_(t){return t?Array.isArray(t)?t:[t]:[]}function jm(t,n){return Array.isArray(t)?t.includes(n):t===n}function BS(t,n){let e=X_(n);return X_(t).forEach(r=>{jm(e,r)||e.push(r)}),e}function VS(t,n){return X_(n).filter(e=>!jm(t,e))}var Um=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=nb(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ib(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Po=class extends Um{name;get formDirective(){return null}get path(){return null}},Ki=class extends Um{_parent=null;name=null;valueAccessor=null},Hm=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var JS=(()=>{class t extends Hm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Ki,2))};static \u0275dir=P({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ie]})}return t})(),eI=(()=>{class t extends Hm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Po,10))};static \u0275dir=P({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ie]})}return t})();var Xc="VALID",Vm="INVALID",Qa="PENDING",Jc="DISABLED",wr=class{},zm=class extends wr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},tl=class extends wr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},nl=class extends wr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Xa=class extends wr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},$m=class extends wr{source;constructor(n){super(),this.source=n}},Gm=class extends wr{source;constructor(n){super(),this.source=n}};function tI(t){return(Qm(t)?t.validators:t)||null}function I2(t){return Array.isArray(t)?nb(t):t||null}function nI(t,n){return(Qm(n)?n.asyncValidators:t)||null}function M2(t){return Array.isArray(t)?ib(t):t||null}function Qm(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function k2(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new A(1e3,"");if(!i[e])throw new A(1001,"")}function T2(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new A(-1002,"")})}var es=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Y(this.statusReactive)}set status(n){Y(()=>this.statusReactive.set(n))}_status=$(()=>this.statusReactive());statusReactive=L(void 0);get valid(){return this.status===Xc}get invalid(){return this.status===Vm}get pending(){return this.status===Qa}get disabled(){return this.status===Jc}get enabled(){return this.status!==Jc}errors;get pristine(){return Y(this.pristineReactive)}set pristine(n){Y(()=>this.pristineReactive.set(n))}_pristine=$(()=>this.pristineReactive());pristineReactive=L(!0);get dirty(){return!this.pristine}get touched(){return Y(this.touchedReactive)}set touched(n){Y(()=>this.touchedReactive.set(n))}_touched=$(()=>this.touchedReactive());touchedReactive=L(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(BS(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(BS(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(VS(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(VS(n,this._rawAsyncValidators))}hasValidator(n){return jm(this._rawValidators,n)}hasAsyncValidator(n){return jm(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new nl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new nl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new tl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new tl(!0,i))}markAsPending(n={}){this.status=Qa;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Xa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Jc,this.errors=null,this._forEachChild(r=>{r.disable(G(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new zm(this.value,i)),this._events.next(new Xa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Xc,this._forEachChild(i=>{i.enable(G(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xc||this.status===Qa)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new zm(this.value,e)),this._events.next(new Xa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Jc:Xc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Qa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=GS(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Xa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Z,this.statusChanges=new Z}_calculateStatus(){return this._allControlsDisabled()?Jc:this.errors?Vm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Qa)?Qa:this._anyControlsHaveStatus(Vm)?Vm:Xc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new tl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new nl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Qm(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=I2(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=M2(this._rawAsyncValidators)}},il=class extends es{constructor(n,e,i){super(tI(e),nI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){T2(this,!0,n),Object.keys(n).forEach(i=>{k2(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,G(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Gm(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ol=new D("",{factory:()=>Xm}),Xm="always";function Wm(t,n,e=Xm){rb(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),R2(t,n),N2(t,n),O2(t,n),A2(t,n)}function qm(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Ym(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Zm(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function A2(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function rb(t,n){let e=QS(t);n.validator!==null?t.setValidators(LS(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=XS(t);n.asyncValidator!==null?t.setAsyncValidators(LS(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Zm(n._rawValidators,r),Zm(n._rawAsyncValidators,r)}function Ym(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=QS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=XS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Zm(n._rawValidators,i),Zm(n._rawAsyncValidators,i),e}function R2(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&iI(t,n)})}function O2(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&iI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function iI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function N2(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function rI(t,n){t==null,rb(t,n)}function P2(t,n){return Ym(t,n)}function F2(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function L2(t){return Object.getPrototypeOf(t.constructor)===f2}function oI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function B2(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Km?e=o:L2(o)?i=o:r=o}),r||i||e||null}function V2(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var j2={provide:Po,useExisting:Zt(()=>al)},el=Promise.resolve(),al=(()=>{class t extends Po{callSetDisabledState;get submitted(){return Y(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=L(!1);_directives=new Set;form;ngSubmit=new Z;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new il({},nb(e),ib(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){el.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Wm(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){el.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){el.then(()=>{let i=this._findContainer(e.path),r=new il({});rI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){el.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){el.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),oI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new $m(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(B(rl,10),B(tb,10),B(ol,8))};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([j2]),Ie]})}return t})();function jS(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function US(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ob=class extends es{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(tI(e),nI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Qm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(US(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Gm(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){jS(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){jS(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){US(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var U2=t=>t instanceof ob;var aI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var H2=(()=>{class t extends Po{callSetDisabledState;get submitted(){return Y(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=L(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ym(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Wm(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){qm(e.control||null,e,!1),V2(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,oI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new $m(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(qm(i||null,e),U2(r)&&(Wm(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);rI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&P2(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){rb(this.form,this),this._oldForm&&Ym(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(B(rl,10),B(tb,10),B(ol,8))};static \u0275dir=P({type:t,features:[Ie,Te]})}return t})();var sI=new D(""),z2={provide:Ki,useExisting:Zt(()=>ab)},ab=(()=>{class t extends Ki{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new Z;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=B2(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&qm(i,this,!1),Wm(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}F2(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&qm(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(B(rl,10),B(tb,10),B(Dr,10),B(sI,8),B(ol,8))};static \u0275dir=P({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Oe([z2]),Ie,Te]})}return t})();var $2={provide:Po,useExisting:Zt(()=>sb)},sb=(()=>{class t extends H2{form=null;ngSubmit=new Z;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([$2]),Ie]})}return t})();var cI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var lI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ol,useValue:e.callSetDisabledState??Xm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[cI]})}return t})(),dI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:sI,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ol,useValue:e.callSetDisabledState??Xm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[cI]})}return t})();var uI=new D("MAT_INPUT_VALUE_ACCESSOR");var W2=["notch"],q2=["matFormFieldNotchedOutline",""],Z2=["*"],mI=["iconPrefixContainer"],fI=["textPrefixContainer"],pI=["iconSuffixContainer"],hI=["textSuffixContainer"],Y2=["textField"],K2=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Q2=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function X2(t,n){t&1&&E(0,"span",21)}function J2(t,n){if(t&1&&(v(0,"label",20),z(1,1),C(2,X2,1,0,"span",21),g()),t&2){let e=x(2);k("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function eB(t,n){if(t&1&&C(0,J2,3,5,"label",20),t&2){let e=x();w(e._hasFloatingLabel()?0:-1)}}function tB(t,n){t&1&&E(0,"div",7)}function nB(t,n){}function iB(t,n){if(t&1&&It(0,nB,0,0,"ng-template",13),t&2){x(2);let e=on(1);k("ngTemplateOutlet",e)}}function rB(t,n){if(t&1&&(v(0,"div",9),C(1,iB,1,1,null,13),g()),t&2){let e=x();k("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),w(e._forceDisplayInfixLabel()?-1:1)}}function oB(t,n){t&1&&(v(0,"div",10,2),z(2,2),g())}function aB(t,n){t&1&&(v(0,"div",11,3),z(2,3),g())}function sB(t,n){}function cB(t,n){if(t&1&&It(0,sB,0,0,"ng-template",13),t&2){x();let e=on(1);k("ngTemplateOutlet",e)}}function lB(t,n){t&1&&(v(0,"div",14,4),z(2,4),g())}function dB(t,n){t&1&&(v(0,"div",15,5),z(2,5),g())}function uB(t,n){t&1&&E(0,"div",16)}function mB(t,n){t&1&&(v(0,"div",18),z(1,6),g())}function fB(t,n){if(t&1&&(v(0,"mat-hint",22),b(1),g()),t&2){let e=x(2);k("id",e._hintLabelId),p(),se(e.hintLabel)}}function pB(t,n){if(t&1&&(v(0,"div",19),C(1,fB,2,2,"mat-hint",22),z(2,7),E(3,"div",23),z(4,8),g()),t&2){let e=x();p(),w(e.hintLabel?1:-1)}}var ts=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-label"]]})}return t})(),CI=new D("MatError"),tf=(()=>{class t{id=u(mt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&$e("id",r.id)},inputs:{id:"id"},features:[Oe([{provide:CI,useExisting:t}])]})}return t})(),ef=(()=>{class t{align="start";id=u(mt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&($e("id",r.id),xe("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),hB=new D("MatPrefix");var gB=new D("MatSuffix");var wI=new D("FloatingLabelParent"),gI=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Bm);_ngZone=u(F);_parent=u(wI);_resizeSubscription=new _e;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return vB(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function vB(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var vI="mdc-line-ripple--active",Jm="mdc-line-ripple--deactivating",_I=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(F),i=u(He);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Jm),e.add(vI)}deactivate(){this._elementRef.nativeElement.classList.add(Jm)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Jm);e.propertyName==="opacity"&&r&&i.remove(vI,Jm)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),bI=(()=>{class t{_elementRef=u(V);_ngZone=u(F);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ye(W2,5),i&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:q2,ngContentSelectors:Z2,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ke(),Me(0,"div",1),me(1,"div",2,0),z(3),ve(),Me(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),cb=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t})}return t})();var sl=new D("MatFormField"),_B=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),yI="fill",bB="auto",xI="fixed",yB="translateY(-50%)",Fo=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_platform=u(Se);_idGenerator=u(mt);_ngZone=u(F);_defaults=u(_B,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=hc("iconPrefixContainer");_textPrefixContainerSignal=hc("textPrefixContainer");_iconSuffixContainerSignal=hc("iconSuffixContainer");_textSuffixContainerSignal=hc("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=uD(ts);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=lt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||bB}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||yI;this._appearanceSignal.set(i)}_appearanceSignal=L(yI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||xI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||xI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Qe();constructor(){let e=this._defaults,i=u(an);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Qt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(At([void 0,void 0]),te(()=>[i.errorState,i.userAriaDescribedBy]),id(),Ae(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Gt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Tu({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,h=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${yB} translateX(${h}))`,T=a+s+c+l;return[_,T]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(wu(o,r._labelChild,ts,5),Ft(o,cb,5)(o,hB,5)(o,gB,5)(o,CI,5)(o,ef,5)),i&2){Eu();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Du(r._iconPrefixContainerSignal,mI,5)(r._textPrefixContainerSignal,fI,5)(r._iconSuffixContainerSignal,pI,5)(r._textSuffixContainerSignal,hI,5),Ye(Y2,5)(mI,5)(fI,5)(pI,5)(hI,5)(gI,5)(bI,5)(_I,5)),i&2){Eu(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Oe([{provide:sl,useExisting:t},{provide:wI,useExisting:t}])],ngContentSelectors:Q2,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ke(K2),It(0,eB,1,1,"ng-template",null,0,Su),v(2,"div",6,1),q("click",function(a){return r._control.onContainerClick(a)}),C(4,tB,1,0,"div",7),v(5,"div",8),C(6,rB,2,2,"div",9),C(7,oB,3,0,"div",10),C(8,aB,3,0,"div",11),v(9,"div",12),C(10,cB,1,1,null,13),z(11),g(),C(12,lB,3,0,"div",14),C(13,dB,3,0,"div",15),g(),C(14,uB,1,0,"div",16),g(),v(15,"div",17),C(16,mB,2,0,"div",18)(17,pB,5,1,"div",19),g()),i&2){let o;p(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),w(r._hasOutline()?6:-1),p(),w(r._hasIconPrefix?7:-1),p(),w(r._hasTextPrefix?8:-1),p(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),w(r._hasTextSuffix?12:-1),p(),w(r._hasIconSuffix?13:-1),p(),w(r._hasOutline()?-1:14),p(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[gI,bI,Tv,_I,ef],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var DI=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var cl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[ym,Fo,Ge]})}return t})();var wB=["button","checkbox","file","hidden","image","radio","range","reset","submit"],DB=new D("MAT_INPUT_CONFIG"),rf=(()=>{class t{_elementRef=u(V);_platform=u(Se);ngControl=u(Ki,{optional:!0,self:!0});_autofillMonitor=u(PS);_ngZone=u(F);_formField=u(sl,{optional:!0});_renderer=u(He);_uid=u(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(DB,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=lt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ja.required)??!1}set required(e){this._required=lt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&M_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=lt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>M_().has(e));constructor(){let e=u(al,{optional:!0}),i=u(sb,{optional:!0}),r=u(DI),o=u(uI,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Vi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new nf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Qt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){wB.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&q("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&($e("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",re]},exportAs:["matInput"],features:[Oe([{provide:cb,useExisting:t}]),Te]})}return t})(),of=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[cl,cl,FS,Ge]})}return t})();var EB=["mat-internal-form-field",""],SB=["*"],SI=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:EB,ngContentSelectors:SB,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var IB=["input"],MB=["label"],kB=["*"],lb={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},TB=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>lb}),zt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(zt||{}),db=class{source;checked},ub=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_ngZone=u(F);_animationsDisabled=Qe();_options=u(TB,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new db;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new Z;indeterminateChange=new Z;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=zt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(bt).load(gi);let e=u(new Hi("tabindex"),{optional:!0});this._options=this._options||lb,this.color=this._options.color||lb.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(mt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(zt.Indeterminate):this._transitionCheckState(this.checked?zt.Checked:zt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=L(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?zt.Checked:zt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case zt.Init:if(i===zt.Checked)return this._animationClasses.uncheckedToChecked;if(i==zt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case zt.Unchecked:return i===zt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case zt.Checked:return i===zt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case zt.Indeterminate:return i===zt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ye(IB,5)(MB,5),i&2){let o;U(o=H())&&(r._inputElement=o.first),U(o=H())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&($e("id",r.id),xe("tabindex",null)("aria-label",null)("aria-labelledby",null),Mt(r.color?"mat-"+r.color:"mat-accent"),j("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",re],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",re],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",re],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:hr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",re],checked:[2,"checked","checked",re],disabled:[2,"disabled","disabled",re],indeterminate:[2,"indeterminate","indeterminate",re]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Oe([{provide:Dr,useExisting:Zt(()=>t),multi:!0},{provide:rl,useExisting:t,multi:!0}]),Te],ngContentSelectors:kB,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(ke(),v(0,"div",3),q("click",function(a){return r._preventBubblingFromLabel(a)}),v(1,"div",4,0)(3,"div",5),q("click",function(){return r._onTouchTargetClick()}),g(),v(4,"input",6,1),q("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),E(6,"div",7),v(7,"div",8),$s(),v(8,"svg",9),E(9,"path",10),g(),Gs(),E(10,"div",11),g(),E(11,"div",12),g(),v(12,"label",13,2),z(14),g()()),i&2){let o=on(2);k("labelPosition",r.labelPosition),p(4),j("mdc-checkbox--selected",r.checked),k("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),k("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),k("for",r.inputId)}},dependencies:[Oo,SI],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),II=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[ub,Ge]})}return t})();var mb=0;function RB(){return mb}function Er(t,n){return(...e)=>{try{return mb=n,t(...e)}finally{mb=0}}}function OB(t){return!t}function MI(t){return t}function Qn(t){return Array.isArray(t)}function ns(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var Lo=Symbol(),ff=Symbol(),dl=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(kI(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>kI(this.predicates,i)):n.fns;this.fns.push(...e)}},sf=class extends dl{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==ff})}},is=class t extends dl{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===ff?e:Qn(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},fb=class extends is{constructor(n){super(n,void 0)}},pb=class extends dl{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==ff&&(e=this.key.reducer.reduce(e,r))}return e}};function kI(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=Y(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return ff}return n(e)}}var rs=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new sf(n),this.disabledReasons=new fb(n),this.readonly=new sf(n),this.syncErrors=is.ignoreNull(n),this.syncTreeErrors=is.ignoreNull(n),this.asyncErrors=is.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new pb(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},cf=class{depth;constructor(n){this.depth=n}build(){return new lf(this,[],0)}},os=class t extends cf{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===Lo){let e=this.getCurrent().children;e.size>(e.has(Lo)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:Er(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ul(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},ul=class extends cf{logic=new rs([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Er(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Er(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Er(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Er(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Er(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Er(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(Er(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new os(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},lf=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?NB(n,e,i):new rs([])}getChild(n){let e=this.builder?RI(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>gb(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>gb(a,this.depth))],this.depth+1));return new hb(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},hb=class t{all;logic;constructor(n){this.all=n,this.logic=new rs([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function RI(t,n){if(t instanceof os)return t.all.flatMap(({builder:e,predicate:i})=>{let r=RI(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof ul)return[...n!==Lo&&t.children.has(Lo)?[{builder:t.getChild(Lo),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new A(1909,!1)}function NB(t,n,e){let i=new rs(n);if(t instanceof os){let r=t.all.map(({builder:o,predicate:a})=>new lf(o,a?[...n,gb(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof ul)i.mergeIn(t.logic);else throw new A(1909,!1);return i}function gb(t,n){return G(y({},t),{depth:n})}var OI=Symbol("PATH"),yi=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,PB);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=os.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[OI]}static newRoot(){return new t([],void 0,void 0,void 0)}},PB={get(t,n){return n===OI?t:t.getChild(n).fieldPathProxy}},af,ll=new Map,df=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(ll.has(this))return ll.get(this);let n=yi.newRoot();ll.set(this,n);let e=af;try{af=n,this.schemaFn(n.fieldPathProxy)}finally{af=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return ll.clear(),n===void 0?yi.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{ll.clear()}}};function FB(t){return t instanceof df||typeof t=="function"}function pf(t){if(af!==yi.unwrapFieldPath(t).root)throw new A(1908,!1)}function Bo(t,n,e){return pf(t),yi.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var Sr={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:LB};function LB(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var uf=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function Xn(t){return new uf(t??Sr.override())}var Mb=Xn(Sr.or()),kb=Xn(Sr.max()),Tb=Xn(Sr.min()),NI=Xn(Sr.max()),PI=Xn(Sr.min()),FI=Xn(Sr.list());function BB(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var vb=class{node;constructor(n){this.node=n}rawSyncTreeErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...VB(this.node.submitState.submissionErrors())]);syncValid=$(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),OB));syncTreeErrors=$(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=$(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=$(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=$(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=$(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return Y(()=>n.sort(jB)),n});pending=$(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=$(()=>{if(this.shouldSkipValidation())return"valid";let n=BB(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=$(()=>this.status()==="valid");invalid=$(()=>this.status()==="invalid");shouldSkipValidation=$(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function VB(t){return t===void 0?[]:Qn(t)?t:[t]}function hf(t,n){if(Qn(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function TI(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function jB(t,n){let e=TI(t),i=TI(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var _b=Xn(),bb=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=$(()=>{let i=yi.unwrapFieldPath(n),r=this.node,o=RB();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new A(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new A(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=$(()=>{let n=this.key();if(!Qn(Y(this.node.structure.parent.value)))throw new A(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof es)throw new A(1907,!1);return e}},yb=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=Y(()=>dt(this.node.structure.injector,()=>e.create($(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new A(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,$(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},UB={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=Y(i.value);if(Qn(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(ns(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=Y(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=Y(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function HB(t,n){let e=$(()=>t()[n()]);return e[Xe]=t[Xe],e.set=i=>{t.update(r=>zB(r,i,n()))},e.update=i=>{e.set(i(Y(e)))},e.asReadonly=()=>e,e}function zB(t,n,e){if(Qn(t)){let i=[...t];return i[e]=n,i}else return G(y({},t),{[e]:n})}var mf=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=X.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>Y(e.reader))}getChild(n){let e=n.toString(),i=Y(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(Y(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return LI;if(e===void 0){let r=i;return $(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new A(1902,!1);return r})}else{let r=i;return $(()=>{let o=this.parent.structure.value();if(!Qn(o))throw new A(1903,!1);let a=o[r];if(ns(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let c=o[s];if(ns(c)&&c.hasOwnProperty(this.parent.structure.identitySymbol)&&c[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new A(1904,!1)})}}createChildrenMap(){return mi({source:this.value,computation:(n,e)=>{if(!ns(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=Qn(n);i!==void 0&&(o?r=GB(i,n,this.identitySymbol):r=WB(i,n));for(let a of Object.keys(n)){let s,c=n[a];if(c===void 0){i.byPropertyKey.has(a)&&(r??=y({},i),r.byPropertyKey.delete(a));continue}o&&ns(c)&&!Qn(c)&&(s=c[this.identitySymbol]??=Symbol(""));let l;s&&(i.byTrackingKey?.has(s)||(r??=y({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),l=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=y({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l??this.createChildNode(a,s,o)})):l&&l!==d.node&&(r??=y({},i),d.node=l)}return r??i}})}createReader(n){return $(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},xb=class extends mf{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return $B}get keyInParent(){return LI}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},Cb=class extends mf{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=$(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=HB(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var $B=$(()=>[]),LI=$(()=>{throw new A(1905,!1)});function GB(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),ns(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=y({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=y({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function WB(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=y({},t),e.byPropertyKey.delete(i));return e}var wb=class{node;selfSubmitting=L(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=mi({source:this.node.structure.value,computation:()=>[]})}submitting=$(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},ml=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new bb(this)}fieldProxy=new Proxy(()=>this,UB);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new yb(this),this.submitState=new wb(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(AI,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(AI,void 0)}pendingSync=mi({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(Tb)}get maxLength(){return this.metadata(PI)}get min(){return this.metadata(kb)}get minLength(){return this.metadata(NI)}get pattern(){return this.metadata(FI)??qB}get required(){return this.metadata(Mb)??ZB}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){Y(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){Y(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=mi(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=Y(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new xb(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new Cb(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(Lo),o=this.structure.logic.getChild(Lo)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},qB=$(()=>[]),ZB=$(()=>!1);function AI(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var Db=class{node;selfTouched=L(!1);selfDirty=L(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=L([]);constructor(n){this.node=n}dirty=$(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),MI)});touched=$(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),MI)});disabledReasons=$(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=$(()=>!!this.disabledReasons().length);readonly=$(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=$(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=$(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=$(()=>{if(this.node.logicNode.logic.hasMetadata(_b)){let e=this.node.logicNode.logic.getMetadata(_b).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=$(()=>this.hidden()||this.disabled()||this.readonly())},Eb=class{newRoot(n,e,i,r){return new ml({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new ml(n)}createNodeState(n){return new Db(n)}createValidationState(n){return new vb(n)}createStructure(n,e){return n.createStructure(e)}},Sb=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(pr)}.form${YB++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){Qt(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),Y(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},YB=0;function KB(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?FB(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function Ab(...t){let[n,e,i]=KB(t),r=i?.injector??u(X),o=dt(r,()=>df.rootCompile(e)),a=new Sb(r,i?.name,i?.submission),s=i?.adapter??new Eb,c=ml.newRoot(a,n,o,s);return a.createFieldManagementEffect(c.structure),c.fieldTree}async function Rb(t,n){let e=Y(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new A(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",c=!0;Y(()=>{BI(e),s==="none"?c=e.valid():s==="pending"&&(c=!e.invalid())});try{if(c){e.submitState.selfSubmitting.set(!0);let l=await Y(()=>o?.(i,r));return l&&QB(e,l),!l||Qn(l)&&l.length===0}else Y(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function BI(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())BI(n)}}function QB(t,n){Qn(n)||(n=[n]);let e=new Map;for(let i of n){let r=hf(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var Ib=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function VI(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof Ib?e.context:e;return n}var XB=new D("");function as(t,n){return t instanceof Function?t(n):t}function Vb(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function jI(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function jb(t,n){pf(t),yi.unwrapFieldPath(t).builder.addSyncErrorRule(i=>hf(n(i),i.fieldTree))}function JB(t){return new Ob(t)}function eV(t,n){return new Nb(t,n)}function tV(t,n){return new Pb(t,n)}var ss=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Ob=class extends ss{kind="required"},Nb=class extends ss{min;kind="min";constructor(n,e){super(e),this.min=n}},Pb=class extends ss{max;kind="max";constructor(n,e){super(e),this.max=n}};var Fb=class extends ss{kind="parse"};function gf(t,n,e){let i=Bo(t,Xn(),r=>typeof n=="number"?n:n(r));Bo(t,Tb,({state:r})=>r.metadata(i)()),jb(t,r=>{if(Vb(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?as(e.error,r):tV(o,{message:as(e?.message,r)})})}function vf(t,n,e){let i=Bo(t,Xn(),r=>typeof n=="number"?n:n(r));Bo(t,kb,({state:r})=>r.metadata(i)()),jb(t,r=>{if(Vb(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?as(e.error,r):eV(o,{message:as(e?.message,r)})})}function _f(t,n){let e=Bo(t,Xn(),i=>n?.when?n.when(i):!0);Bo(t,Mb,({state:i})=>i.metadata(e)()),jb(t,i=>{if(i.state.metadata(e)()&&Vb(i.value()))return n?.error?as(n.error,i):JB({message:as(n?.message,i)})})}function HI(t,n){pf(t),yi.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>hf(n(i),i.fieldTree))}var nV=new D("");function iV(t,n,e){let i=mi({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(jI(a.error)),a.value!==void 0&&n(a.value),i.set(jI(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var Lb=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return VI(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new A(1910,!1)}valueAccessor=null;hasValidator(n){return n===Ja.required?this.field().required():!1}updateValueAndValidity(){}},Bb={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},rV=(()=>{let t={};for(let n of Object.keys(Bb))t[Bb[n]]=n;return t})();function Ub(t,n){let e=rV[n];return t[e]?.()}var Hb=Object.values(Bb);function bf(){return{}}function Vo(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function oV(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function aV(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function sV(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function cV(t,n){let e;if(t.validity.badInput)return{error:new Fb};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=Y(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=Y(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function lV(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){UI(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){UI(t,n);return}}t.value=n}function UI(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function zb(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function dV(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=bf();return()=>{let i=n.state(),r=i.controlValue();Vo(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of Hb){let a;o==="errors"?a=n.errors():a=Ub(i,o),Vo(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&zb(n.renderer,n.nativeFormElement,o,a))}}}function uV(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=bf();return()=>{let i=n.state(),r=i.value();Vo(e,"controlValue",r)&&Y(()=>n.controlValueAccessor.writeValue(r));for(let o of Hb){let a=Ub(i,o);if(Vo(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?Y(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&zb(n.renderer,n.nativeFormElement,o,a)}}}}function mV(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>fV(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function fV(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function pV(t,n,e){let i=!1,r=n.nativeFormElement,o=iV(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>cV(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&mV(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=bf();return()=>{let s=n.state(),c=s.controlValue();Vo(a,"controlValue",c)&&lV(r,c);for(let l of Hb){let d=Ub(s,l);Vo(a,l,d)&&(t.setInputOnDirectives(l,d),n.elementAcceptsNativeProperty(l)&&zb(n.renderer,r,l,d))}i=!0}}var hV=Symbol(),gV=new D(""),zI=(()=>{class t{field=fe.required({alias:"formField"});renderer=u(He);destroyRef=u(Nt);state=$(()=>this.field()());injector=u(X);element=u(V).nativeElement;elementIsNativeFormElement=oV(this.element);elementAcceptsNumericValues=aV(this.element);elementAcceptsTextualValues=sV(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Dr,{optional:!0,self:!0});config=u(XB,{optional:!0});parseErrorsSource=L(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Lb(this.state)}parseErrors=$(()=>this.parseErrorsSource()?.().map(e=>G(y({},e),{fieldTree:Y(this.state).fieldTree,formField:this}))??[]);errors=$(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,$(()=>o(this))]);if(e.length===0)return;let i=bf();Tu({write:()=>{for(let[r,o]of e){let a=o();Vo(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new A(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),Qt(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[hV];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=uV(e,this);else if(e.customControl)this.\u0275ngControlUpdate=dV(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=pV(e,this,this.parseErrorsSource);else throw new A(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Oe([{provide:gV,useExisting:t},{provide:Ki,useFactory:()=>u(t).interopNgControl},{provide:nV,useFactory:()=>u(t).parseErrorsSource}]),hv("formField")]})}return t})();function vV(t,n){if(t&1&&(v(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;p(),se(e.message)}}function _V(t,n){if(t&1&&(v(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;p(),se(e.message)}}function bV(t,n){if(t&1&&(v(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;p(),se(e.message)}}function yV(t,n){t&1&&b(0," + ")}function xV(t,n){if(t&1&&(b(0),C(1,yV,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;De(" ",e," "),p(),w(i!==r-1?1:-1)}}function CV(t,n){if(t&1&&(v(0,"div"),b(1),v(2,"span",18),b(3,"= ("),de(4,xV,2,2,null,null,Ze),b(6),g()()),t&2){let e=x().$implicit;ct("width","100%"),p(),De(" ",e.calculateRollAverage()," "),p(3),ue(e.diceValues),p(2),De(") / ",e.diceValues.length)}}function wV(t,n){if(t&1&&(v(0,"div"),b(1),g()),t&2){let e=x().$implicit;p(),se(e.diceValues[0])}}function DV(t,n){if(t&1&&C(0,CV,7,4,"div",17)(1,wV,2,1,"div"),t&2){let e=x().$implicit;w(e.useAveragedRolls?0:1)}}function EV(t,n){if(t&1&&(v(0,"div",12)(1,"div",14)(2,"b"),b(3,"# of Rolls"),g(),v(4,"p"),b(5),g(),v(6,"b"),b(7,"Bounds"),g(),v(8,"p"),b(9),g()(),v(10,"div",15)(11,"b"),b(12,"Results"),g(),v(13,"div",16),de(14,DV,2,1,null,null,Ze),g()()()),t&2){let e=n.$implicit;p(5),se(e.numberOfRolls),p(4),Ui("",e.lowerBound," - ",e.upperBound),p(5),ue(e.rolls)}}function SV(t,n){t&1&&(v(0,"div",13)(1,"span",19),b(2,"No rolls yet :("),g()())}var yf=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=L({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=Ab(this.customRollParams,n=>{_f(n.minimum),_f(n.maximum),_f(n.count),vf(n.minimum,1,{message:"Must be > 0"}),vf(n.maximum,2,{message:"Must be > 1"}),vf(n.count,1,{message:"Must be > 0"}),gf(n.minimum,999,{message:"Must be <= 999"}),gf(n.maximum,1e3,{message:"Must be <= 1000"}),gf(n.count,20,{message:"Must be <= 20"}),HI(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){Rb(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new $b(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"h1"),b(3,"Dice Roller"),g(),v(4,"div",2)(5,"mat-form-field")(6,"mat-label"),b(7,"Lowest Value"),g(),E(8,"input",3),ya(),de(9,vV,2,1,"mat-error",null,wn),g(),v(11,"mat-form-field")(12,"mat-label"),b(13,"Highest Value"),g(),E(14,"input",3),ya(),de(15,_V,2,1,"mat-error",null,wn),g(),v(17,"mat-form-field")(18,"mat-label"),b(19,"# of Dice"),g(),E(20,"input",3),ya(),de(21,bV,2,1,"mat-error",null,wn),g()(),v(23,"mat-checkbox",4),b(24,"Use averaged rolls (True Hit)"),g(),ya(),v(25,"button",5),q("click",function(){return i.customRollDice()}),b(26,"Roll Dice"),g(),v(27,"div",6)(28,"button",7),q("click",function(){return i.quickRollDice(1,2,1,!1)}),b(29,"1 d2"),g(),v(30,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!1)}),b(31,"1 d100"),g(),v(32,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!0)}),b(33,"1 d100 Avg."),g()(),E(34,"mat-divider"),v(35,"div",8)(36,"h2"),b(37,"History"),g(),v(38,"button",9),q("click",function(){return i.clearRollHistory()}),E(39,"img",10),g()()(),v(40,"div",11),de(41,EV,16,3,"div",12,Ze,!1,SV,3,0,"div",13),g()()),e&2&&(p(5),ct("width","30%"),p(3),k("formField",i.customDiceRollForm.minimum),xa(),p(),ue(i.customDiceRollForm.minimum().errors()),p(2),ct("width","30%"),p(3),k("formField",i.customDiceRollForm.maximum),xa(),p(),ue(i.customDiceRollForm.maximum().errors()),p(2),ct("width","30%"),p(3),k("formField",i.customDiceRollForm.count),xa(),p(),ue(i.customDiceRollForm.count().errors()),p(2),k("formField",i.customDiceRollForm.useAverages),xa(),p(2),ct("width","100%"),p(3),ct("width","30%"),p(2),ct("width","30%"),p(2),ct("width","30%"),p(9),ue(i.rollHistory))},dependencies:[bi,N_,No,Zc,of,rf,Fo,ts,tf,II,ub,zI],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},$b=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new Gb(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},Gb=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var Ce=class t{constructor(n){this.http=n;this.http=u(Wi)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();map=L({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getMapConstants(){return this.mapData().map?.constants}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(W(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var $I=(()=>{class t{_animationsDisabled=Qe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var IV=["text"],MV=[[["mat-icon"]],"*"],kV=["mat-icon","*"];function TV(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=x();k("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function AV(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=x();k("disabled",e.disabled)}}function RV(t,n){if(t&1&&(v(0,"span",4),b(1),g()),t&2){let e=x();p(),De("(",e.group.label,")")}}var Wb=new D("MAT_OPTION_PARENT_COMPONENT"),qb=new D("MatOptgroup");var fl=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},cs=(()=>{class t{_element=u(V);_changeDetectorRef=u(Ke);_parent=u(Wb,{optional:!0});group=u(qb,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Z;_text;_stateChanges=new R;constructor(){let e=u(bt);e.load(gi),e.load(vm),this._signalDisableRipple=!!this._parent&&Vi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!In(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new fl(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ye(IV,7),i&2){let o;U(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&q("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&($e("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",re]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:kV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(ke(MV),C(0,TV,1,2,"mat-pseudo-checkbox",1),z(1),v(2,"span",2,0),z(4,1),g(),C(5,AV,1,1,"mat-pseudo-checkbox",3),C(6,RV,2,1,"span",4),E(7,"div",5)),i&2&&(w(r.multiple?0:-1),p(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),w(r.group&&r.group._inert?6:-1),p(),k("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[$I,Oo],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function GI(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function WI(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var qI=Sm();function eM(t){return new xf(t.get(Yn),t.get(ee))}var xf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ft(-this._previousScrollPosition.left),n.style.top=ft(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),qI&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),qI&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function tM(t,n){return new Cf(t.get(qa),t.get(F),t.get(Yn),n)}var Cf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ae(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var pl=class{enable(){}disable(){}attach(){}};function Zb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function ZI(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Mf(t,n){return new wf(t.get(qa),t.get(Yn),t.get(F),n)}var wf=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Zb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},nM=(()=>{class t{_injector=u(X);constructor(){}noop=()=>new pl;close=e=>tM(this._injector,e);block=()=>eM(this._injector);reposition=e=>Mf(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ir=class{positionStrategy;scrollStrategy=new pl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Df=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var iM=(()=>{class t{_attachedOverlays=[];_document=u(ee);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rM=(()=>{class t extends iM{_ngZone=u(F);_renderer=u(_t).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oM=(()=>{class t extends iM{_platform=u(Se);_ngZone=u(F);_renderer=u(_t).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ht(e)};_clickListener=e=>{let i=Ht(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(YI(s.overlayElement,i)||YI(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function YI(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var aM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),sM=(()=>{class t{_platform=u(Se);_containerElement;_document=u(ee);_styleLoader=u(bt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||I_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),I_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(aM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Kb(t){return t&&t.nodeType===1}var Ef=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=_e.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,d=!1,m,f){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=m,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=st(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ft(this._config.width),n.height=ft(this._config.height),n.minWidth=ft(this._config.minWidth),n.minHeight=ft(this._config.minHeight),n.maxWidth=ft(this._config.maxWidth),n.maxHeight=ft(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Kb(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Yb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Yi(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=st(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},KI="cdk-overlay-connected-position-bounding-box",OV=/([A-Za-z%]+)$/;function kf(t,n){return new Sf(n,t.get(Yn),t.get(ee),t.get(Se),t.get(sM))}var Sf=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=_e.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(KI),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),d=this._getOverlayFit(l,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&jo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(KI),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:Kb(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=XI(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let d=0-a,m=a+o.width-i.width,f=0-s,h=s+o.height-i.height,_=this._subtractOverflows(o.width,d,m),T=this._subtractOverflows(o.height,f,h),I=_*T;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:T===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=QI(this._overlayRef.getConfig().minHeight),s=QI(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=XI(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=l||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=c||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!NV(this._lastScrollVisibility,i)){let r=new Df(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),_=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>_&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-_/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,f;if(l)f=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),_=this._lastBoundingBoxSize.width;d=h*2,m=n.x-h,d>_&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-_/2)}return{top:a,left:m,bottom:s,right:f,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ft(i.width),r.height=ft(i.height),r.top=ft(i.top)||"auto",r.bottom=ft(i.bottom)||"auto",r.left=ft(i.left)||"auto",r.right=ft(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ft(o)),a&&(r.maxWidth=ft(a))}this._lastBoundingBoxSize=i,jo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){jo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){jo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();jo(i,this._getExactOverlayY(e,n,d)),jo(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ft(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ft(a.maxWidth):o&&(i.maxWidth="")),jo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ft(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ft(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ZI(n,i),isOriginOutsideView:Zb(n,i),isOverlayClipped:ZI(e,i),isOverlayOutsideView:Zb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Yi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function jo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function QI(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(OV);return!e||e==="px"?parseFloat(n):null}return t||null}function XI(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function NV(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var JI="cdk-global-overlay-wrapper";function Tf(t){return new If}var If=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(JI),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",h="",_="",T="";c?T="flex-start":d==="center"?(T="center",f?_=m:h=m):f?d==="left"||d==="end"?(T="flex-end",h=m):(d==="right"||d==="start")&&(T="flex-start",_=m):d==="left"||d==="start"?(T="flex-start",h=m):(d==="right"||d==="end")&&(T="flex-end",_=m),n.position=this._cssPosition,n.marginLeft=c?"0":h,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":_,e.justifyContent=T,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(JI),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},cM=(()=>{class t{_injector=u(X);constructor(){}global(){return Tf()}flexibleConnectedTo(e){return kf(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lM=new D("OVERLAY_DEFAULT_CONFIG");function ls(t,n){t.get(bt).load(aM);let e=t.get(sM),i=t.get(ee),r=t.get(mt),o=t.get(fn),a=t.get(an),s=t.get(He,null,{optional:!0})||t.get(_t).createRenderer(null,null),c=new Ir(n),l=t.get(lM,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),c.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let f=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Kb(f)?f.after(m):f?.type==="parent"?f.element.appendChild(m):e.getContainerElement().appendChild(m),new Ef(new Lm(d,o,t),m,d,c,t.get(F),t.get(rM),i,t.get(vr),t.get(oM),n?.disableAnimations??t.get(oc,null,{optional:!0})==="NoopAnimations",t.get(Be),s)}var dM=(()=>{class t{scrollStrategies=u(nM);_positionBuilder=u(cM);_injector=u(X);constructor(){}create(e){return ls(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Af=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({providers:[dM],imports:[Ge,H_,F_,F_]})}return t})();var Rf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge]})}return t})();var Qb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Wa,Rf,cs,Ge]})}return t})();var PV=["panel"],FV=["*"];function LV(t,n){if(t&1&&(me(0,"div",1,0),z(2),ve()),t&2){let e=n.id,i=x();Mt(i._classList),j("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),$e("id",i.id),xe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var Xb=class{source;option;constructor(n,e){this.source=n,this.option=e}},uM=new D("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),mM=(()=>{class t{_changeDetectorRef=u(Ke);_elementRef=u(V);_defaults=u(uM);_animationsDisabled=Qe();_activeOptionChanges=_e.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new Z;opened=new Z;closed=new Z;optionActivated=new Z;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(mt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Se);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Gc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Xb(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,cs,5)(o,qb,5),i&2){let a;U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ye(St,7)(PV,5),i&2){let o;U(o=H())&&(r.template=o.first),U(o=H())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",re],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",re],requireSelection:[2,"requireSelection","requireSelection",re],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",re],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",re]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Oe([{provide:Wb,useExisting:t}])],ngContentSelectors:FV,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(ke(),Ca(0,LV,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var BV={provide:Dr,useExisting:Zt(()=>Jb),multi:!0};var VV=new D("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(X);return()=>Mf(t)}}),Jb=(()=>{class t{_environmentInjector=u(Be);_element=u(V);_injector=u(X);_viewContainerRef=u(Pt);_zone=u(F);_changeDetectorRef=u(Ke);_dir=u(an,{optional:!0});_formField=u(sl,{optional:!0,host:!0});_viewportRuler=u(Yn);_scrollStrategy=u(VV);_renderer=u(He);_animationsDisabled=Qe();_defaults=u(uM,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new R;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=_e.EMPTY;_breakpointObserver=u(To);_handsetLandscapeSubscription=_e.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new R;_overlayPanelClass=Yi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Dm(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Gt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ae(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ae(()=>this._overlayAttached)):K()).pipe(te(e=>e instanceof fl?e:null))}optionSelections=Zr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(At(e),gt(()=>Gt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(gt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new oe(e=>{let i=o=>{let a=Ht(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!c||!c.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=In(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return fm()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new oe(r=>{st(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(vt(()=>this._positionStrategy.reapplyLastPosition()),jp(0))??K();return Gt(e,i).pipe(gt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ht(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;S_(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Kn(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=ls(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Im.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!In(e)||e.keyCode===38&&In(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ir({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=kf(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=GI(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=WI(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&Dm(this._trackedModal,"aria-owns",i),S_(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Dm(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&q("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",re]},exportAs:["matAutocompleteTrigger"],features:[Oe([BV]),Te]})}return t})(),fM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Af,Qb,Yc,Qb,Ge]})}return t})();function UV(t,n){if(t&1&&(me(0,"a",4),b(1),ve()),t&2){let e=x();$e("href",e.titleHref(),qe),p(),se(e.title())}}function HV(t,n){if(t&1&&b(0),t&2){let e=x();De(" ",e.title()," ")}}function zV(t,n){if(t&1&&(me(0,"p"),b(1),ve()),t&2){let e=n.$implicit;p(),se(e)}}var Of=class t{label=fe.required();title=fe.required();titleHref=fe();textFields=fe();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"h2",1),b(2),ve(),Me(3,"div",2),me(4,"h2",3),C(5,UV,2,2,"a",4)(6,HV,1,1),ve()(),de(7,zV,2,1,"p",null,Ze)),e&2&&(p(2),se(i.label()),p(3),w(i.titleHref()?5:6),p(2),ue(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function $V(t,n){t&1&&b(0," \xA0 ")}function GV(t,n){if(t&1&&(b(0),C(1,$V,1,0),b(2)),t&2){let e=x(3);De(" ",e.constants.currencySymbol," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.amount()," ")}}function WV(t,n){t&1&&b(0," \xA0 ")}function qV(t,n){if(t&1&&(b(0),C(1,WV,1,0),b(2)),t&2){let e=x(3);De(" ",e.amount()," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.constants.currencySymbol," ")}}function ZV(t,n){if(t&1&&C(0,GV,3,3)(1,qV,3,3),t&2){let e=x(2);w(e.constants.isSymbolLeftAligned?0:1)}}function YV(t,n){if(t&1&&b(0),t&2){let e=x(2);De(" ",e.amount()," ")}}function KV(t,n){if(t&1&&C(0,ZV,2,1)(1,YV,1,1),t&2){let e=x();w(e.constants?0:1)}}var Nf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.constants=this.teamDataService.getCurrencyConstants()}amount=fe.required();constants;static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&C(0,KV,2,1),e&2&&w(i.amount()?0:-1)},encapsulation:2})};function QV(t,n){if(t&1&&Me(0,"img",1),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}var Pf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}tag=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Te],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(me(0,"div",0),C(1,QV,1,1,"img",1),me(2,"p"),b(3),ve()()),e&2&&($e("title",i.tag()),p(),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),p(2),se(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var Ff=class t{percentage=fe.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Te],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Me(0,"div",0),e&2&&ct("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function XV(t,n){if(t&1&&Me(0,"img",1),t&2){let e=x(3);$e("height",e.height())}}function JV(t,n){if(t&1&&Me(0,"img",2),t&2){let e=x(3);$e("height",e.height())}}function ej(t,n){if(t&1&&C(0,XV,1,1,"img",1)(1,JV,1,1,"img",2),t&2){let e=x(2);w(e.final()<e.base()?0:1)}}function tj(t,n){if(t&1&&Me(0,"img",3),t&2){let e=x(3);$e("height",e.height())}}function nj(t,n){if(t&1&&Me(0,"img",4),t&2){let e=x(3);$e("height",e.height())}}function ij(t,n){if(t&1&&C(0,tj,1,1,"img",3)(1,nj,1,1,"img",4),t&2){let e=x(2);w(e.final()>e.base()?0:1)}}function rj(t,n){if(t&1&&C(0,ej,2,1)(1,ij,2,1),t&2){let e=x();w(e.invertColors()?0:1)}}var ds=class t{base=fe.required();final=fe.required();invertColors=fe(!1);height=fe(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(me(0,"span",0),C(1,rj,2,1),me(2,"span"),b(3),ve()()),e&2&&(p(),w(i.base()!==i.final()?1:-1),p(2),se(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var oj=t=>({shaded:t}),aj=(t,n)=>n.key;function sj(t,n){if(t&1&&(v(0,"div",10)(1,"p"),b(2),g(),v(3,"p"),b(4),g()()),t&2){let e=n.$implicit,i=n.$index;k("ngClass",it(3,oj,i%2===0)),p(2),se(e.key),p(2),se(e.value)}}function cj(t,n){if(t&1&&(v(0,"div",6),E(1,"div",7),v(2,"div",8)(3,"div",9)(4,"p"),b(5,"Base"),g(),v(6,"p"),b(7),g()(),de(8,sj,5,5,"div",10,aj),Wn(10,"keyvalue"),g()()),t&2){let e=x();p(7),se(e.values().baseValue),p(),ue(fc(10,1,e.values().modifiers))}}var Lf=class t{name=fe.required();values=fe.required();expanded=fe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),b(4),g(),E(5,"div",4),g(),E(6,"stat-with-buff-icon",5),g(),C(7,cj,11,3,"div",6),g()),e&2&&(p(4),se(i.name()),p(2),k("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),p(),w(i.expanded()?7:-1))},dependencies:[zi,ds,$i],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var lj=(t,n)=>n.key;function dj(t,n){if(t&1&&Me(0,"img",4),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function uj(t,n){if(t&1&&b(0),t&2){let e=x(2);Ui(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function mj(t,n){if(t&1&&b(0),t&2){let e=x(2);De(" (",e.status().remainingTurns," turns) ")}}function fj(t,n){if(t&1&&C(0,uj,1,2)(1,mj,1,1),t&2){let e=x();w(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function pj(t,n){t&1&&b(0,", ")}function hj(t,n){if(t&1&&(b(0),C(1,pj,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ui(" ",e.value," ",e.key),p(),w(i!==r-1?1:-1)}}function gj(t,n){t&1&&Me(0,"img",6)}function vj(t,n){t&1&&Me(0,"img",7)}function _j(t,n){t&1&&Me(0,"img",8)}function bj(t,n){t&1&&Me(0,"img",9)}function yj(t,n){if(t&1&&(me(0,"p"),b(1),ve()),t&2){let e=n.$implicit;p(),se(e)}}var Bf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}status=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Te],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(me(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,dj,1,1,"img",4),b(5),C(6,fj,2,1),ve(),me(7,"p"),de(8,hj,2,3,null,null,lj),Wn(10,"keyvalue"),ve()(),me(11,"div",5),C(12,gj,1,0,"img",6),C(13,vj,1,0,"img",7)(14,_j,1,0,"img",8)(15,bj,1,0,"img",9),ve()(),de(16,yj,2,1,"p",null,Ze),ve()),e&2){let r;p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.status().name," "),p(),w((i.status().remainingTurns??0)>0?6:-1),p(2),ue(fc(10,5,i.status().additionalStats)),p(4),w(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),p(),w((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),p(3),ue(i.systemData==null?null:i.systemData.textFields)}},dependencies:[$i],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var ey=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(ey||{});function xj(t,n){if(t&1&&Me(0,"img",2),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function Cj(t,n){if(t&1&&(me(0,"p"),b(1),ve()),t&2){let e=n.$implicit;p(),se(e)}}var Vf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}name=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Te],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"div",1),C(2,xj,1,1,"img",2),me(3,"span"),b(4),ve()(),de(5,Cj,2,1,"p",null,Ze),ve()),e&2&&(p(2),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),p(2),se(i.name()),p(),ue(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var wj=t=>({opacity50:t}),Dj=t=>({droppableTextColor:t}),hl=()=>[],Ej=(t,n)=>n.key;function Sj(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();k("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function Ij(t,n){if(t&1&&b(0),t&2){let e=x();De(" (",e.item().uses,") ")}}function Mj(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,qe)("title",i)}}function kj(t,n){if(t&1&&C(0,Mj,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function Tj(t,n){if(t&1&&de(0,kj,1,1,null,null,wn),t&2){let e=x();ue(e.item().engravings)}}function Aj(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getTagByName(i))==null?null:e.spriteURL,qe)("title",i)}}function Rj(t,n){if(t&1&&C(0,Aj,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function Oj(t,n){if(t&1&&de(0,Rj,1,1,null,null,wn),t&2){let e=x();ue(e.item().tags)}}function Nj(t,n){if(t&1&&b(0),t&2){let e=x();De(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function Pj(t,n){t&1&&E(0,"img",8)}function Fj(t,n){t&1&&E(0,"img",9)}function Lj(t,n){t&1&&E(0,"img",10)}function Bj(t,n){if(t&1&&(v(0,"div",14)(1,"div"),b(2),g(),E(3,"stat-with-buff-icon",15),g()),t&2){let e=n.$implicit;p(2),se(e.key),p(),k("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function Vj(t,n){if(t&1&&(de(0,Bj,4,5,"div",14,Ej),Wn(2,"keyvalue")),t&2){let e=x(3);ue(bo(2,0,e.item().stats,e.sortStats))}}function jj(t,n){if(t&1&&(b(0," \xA0-\xA0"),E(1,"stat-with-buff-icon",17)),t&2){let e,i,r=x(4);p(),k("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function Uj(t,n){if(t&1&&(v(0,"div",14)(1,"div"),b(2,"Rng"),g(),v(3,"div",16),E(4,"stat-with-buff-icon",17),C(5,jj,2,3),g()()),t&2){let e,i,r,o=x(3);p(4),k("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),p(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function Hj(t,n){t&1&&b(0," Square ")}function zj(t,n){t&1&&b(0," Cross ")}function $j(t,n){t&1&&b(0," Saltire ")}function Gj(t,n){t&1&&b(0," Star ")}function Wj(t,n){if(t&1&&(v(0,"div",14)(1,"div"),b(2,"Shp"),g(),v(3,"div"),C(4,Hj,1,0)(5,zj,1,0)(6,$j,1,0)(7,Gj,1,0),g()()),t&2){let e,i=x(3);p(4),w((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function qj(t,n){t&1&&b(0," Quantity ")}function Zj(t,n){t&1&&b(0," Uses ")}function Yj(t,n){if(t&1&&b(0),t&2){let e=x(4);De(" ",e.item().uses," ")}}function Kj(t,n){t&1&&b(0," /\xA0 ")}function Qj(t,n){if(t&1&&(C(0,Kj,1,0),E(1,"stat-with-buff-icon",15)),t&2){let e=x(4);w((e.item().uses??0)>0?0:-1),p(),k("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function Xj(t,n){if(t&1&&(v(0,"div",14)(1,"div"),C(2,qj,1,0)(3,Zj,1,0),g(),v(4,"div",16),C(5,Yj,1,1),C(6,Qj,2,5),g()()),t&2){let e=x(3);p(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),p(3),w((e.item().uses??0)>0?5:-1),p(),w((e.item().maxUses??0)>0?6:-1)}}function Jj(t,n){if(t&1&&(E(0,"mat-divider"),v(1,"div",13),C(2,Vj,3,3),C(3,Uj,6,4,"div",14),C(4,Wj,8,1,"div",14),C(5,Xj,7,3,"div",14),g()),t&2){let e,i=x(2);p(2),w(((i.systemData==null?null:i.systemData.utilizedStats)??Dn(4,hl)).length>0||i.hasNonZeroStatValue()?2:-1),p(),w((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),p(),w(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function eU(t,n){if(t&1&&E(0,"engraving",18),t&2){let e=n.$implicit;k("name",e)}}function tU(t,n){if(t&1&&(v(0,"p"),b(1),g()),t&2){let e=n.$implicit;p(),se(e)}}function nU(t,n){if(t&1&&E(0,"img",19),t&2){let e=x(3);k("src",e.systemData==null?null:e.systemData.graphicURL,qe)}}function iU(t,n){if(t&1&&(E(0,"mat-divider"),de(1,eU,1,1,"engraving",18,wn),de(3,tU,2,1,"p",null,Ze),C(5,nU,1,1,"img",19)),t&2){let e=x(2);p(),ue(e.item().engravings),p(2),ue(e.systemData==null?null:e.systemData.textFields),p(2),w(((e.systemData==null?null:e.systemData.graphicURL)??"").length>0?5:-1)}}function rU(t,n){if(t&1&&(v(0,"div",11),C(1,Jj,6,5),C(2,iU,6,1),g()),t&2){let e,i=x();p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??Dn(2,hl)).length>0?1:-1),p(),w(((i.systemData==null?null:i.systemData.textFields)??Dn(3,hl)).length>0||((i.systemData==null?null:i.systemData.graphicURL)??"").length>0?2:-1)}}function oU(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),b(3,"Item Range Not Visible"),g()())}function aU(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),b(3,"Item Not Found In Inventory"),g()())}function sU(t,n){if(t&1&&(E(0,"mat-divider"),C(1,oU,4,0,"div",20),C(2,aU,4,0,"div",20)),t&2){let e=x();p(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),p(),w(e.item().isNotInInventory?2:-1)}}var jf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}ItemRangeShape=ey;item=fe.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Te],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(v(0,"div",0),q("click",function(){return i.toggleExpansion()}),v(1,"div",1)(2,"div",2)(3,"div",3),C(4,Sj,1,1,"img",4),v(5,"div",5),b(6),C(7,Ij,1,1),g(),C(8,Tj,2,0),C(9,Oj,2,0),g(),v(10,"div",6),C(11,Nj,1,1),b(12),g()(),v(13,"div",7),C(14,Pj,1,0,"img",8),C(15,Fj,1,0,"img",9),C(16,Lj,1,0,"img",10),g()(),C(17,rU,3,4,"div",11),C(18,sU,3,2),g()),e&2&&(p(),k("ngClass",it(15,wj,!i.item().canEquip||i.item().isUsePrevented)),p(3),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),k("ngClass",it(17,Dj,i.item().isDroppable)),p(),De(" ",i.item().name," "),p(),w((i.item().uses??0)>0?7:-1),p(),w((i.item().engravings??Dn(19,hl)).length>0?8:-1),p(),w((i.item().tags??Dn(20,hl)).length>0?9:-1),p(2),w(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),p(),Ui(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),p(2),w(i.item().isUsePrevented?14:-1),p(),w(i.item().isDroppable?15:-1),p(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),p(),w(i.isExpanded?17:-1),p(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[bi,ds,zi,Vf,$i],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function cU(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();k("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function lU(t,n){if(t&1&&(v(0,"div",5),b(1),g()),t&2){let e=x();p(),De(" ",e.getAdditionalStatsText()," ")}}function dU(t,n){t&1&&E(0,"img",7)}function uU(t,n){if(t&1&&(v(0,"p"),b(1),g()),t&2){let e=n.$implicit;p(),se(e)}}function mU(t,n){if(t&1&&(E(0,"mat-divider"),de(1,uU,2,1,"p",null,Ze)),t&2){let e=x();p(),ue(e.systemData==null?null:e.systemData.textFields)}}var Uf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}skill=fe.required();expanded=fe(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Te],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,cU,1,1,"img",4),b(5),g(),C(6,lU,2,1,"div",5),g(),v(7,"div",6),C(8,dU,1,0,"img",7),g()(),C(9,mU,3,0),g()),e&2&&(p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.skill().name," "),p(),w(i.getAdditionalStatsText().length>0?6:-1),p(2),w(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),p(),w(i.expanded()?9:-1))},dependencies:[bi],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var fU=t=>({flipHorz:t}),Hf=t=>({rotate90:t}),pM=()=>[],ty=(t,n)=>n.key;function pU(t,n){if(t&1&&(v(0,"div",0),E(1,"img",32),g()),t&2){let e=x();p(),k("src",e.unit().sprite.portraitURL,qe)}}function hU(t,n){if(t&1&&b(0),t&2){let e=x();De(" Lvl. ",e.unit().stats.level," ")}}function gU(t,n){if(t&1&&b(0),t&2){let e,i=x();De(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function vU(t,n){if(t&1&&E(0,"img",6),t&2){let e,i=x();k("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,qe)}}function _U(t,n){if(t&1&&(v(0,"div",10)(1,"div",33)(2,"div",34),b(3),g(),v(4,"div",35),E(5,"div",36)(6,"div",37),g()()()),t&2){let e=x();k("title",e.unit().player),p(3),se(e.unit().player)}}function bU(t,n){if(t&1&&(v(0,"p",41),b(1),g()),t&2){let e=n.$implicit;p(),se(e)}}function yU(t,n){if(t&1&&de(0,bU,2,1,"p",41,Ze),t&2){let e=x(2);ue(e.unit().textFields)}}function xU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=x(3);k("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function CU(t,n){if(t&1&&de(0,xU,1,3,"text-fields-with-labeled-header",42,Ze),t&2){let e=x(2);ue(e.unit().classes)}}function wU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",40),t&2){let e=x(2);k("titleHref",e.unit().characterApplicationURL)}}function DU(t,n){if(t&1&&(v(0,"div",13),C(1,yU,2,0),E(2,"text-fields-with-labeled-header",38),C(3,CU,2,0),E(4,"text-fields-with-labeled-header",39),C(5,wU,1,1,"text-fields-with-labeled-header",40),g()),t&2){let e,i=x();p(),w(i.unit().textFields?1:-1),p(),k("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),p(),w(i.unit().classes?3:-1),p(),k("title",i.unit().movementType),p(),w(i.unit().characterApplicationURL?5:-1)}}function EU(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),b(2,"Exp"),g(),v(3,"div"),b(4),g()()),t&2){let e=x();p(4),se(e.unit().stats.experience)}}function SU(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),b(2,"Money"),g(),E(3,"currency",43),g()),t&2){let e=x();p(3),k("amount",e.unit().stats.heldCurrency)}}function IU(t,n){if(t&1&&E(0,"unit-tag",47),t&2){let e=n.$implicit;k("tag",e)}}function MU(t,n){if(t&1&&(v(0,"div",23)(1,"div",44),E(2,"img",45),g(),v(3,"div",46),de(4,IU,1,1,"unit-tag",47,Ze),g()()),t&2){let e=x();p(4),ue(e.unit().tags)}}function kU(t,n){if(t&1&&(v(0,"div",24)(1,"div",48),E(2,"img",49),g(),v(3,"div",34)(4,"p"),b(5),g()()()),t&2){let e=x();p(5),se(e.unit().behavior)}}function TU(t,n){if(t&1&&E(0,"unit-status-condition",53),t&2){let e=n.$implicit;k("status",e)}}function AU(t,n){if(t&1&&(v(0,"div",25)(1,"div",50),E(2,"img",51),g(),v(3,"div",52),de(4,TU,1,1,"unit-status-condition",53,Ze),g()()),t&2){let e=x();p(4),ue(e.unit().statusConditions)}}function RU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function OU(t,n){if(t&1&&(v(0,"div",29),de(1,RU,1,3,"modified-unit-stat",54,ty),Wn(3,"keyvalue"),g()),t&2){let e=x();p(),ue(bo(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function NU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function PU(t,n){if(t&1&&(v(0,"div",29),de(1,NU,1,3,"modified-unit-stat",54,ty),Wn(3,"keyvalue"),g()),t&2){let e=x();p(),ue(bo(3,0,e.unit().stats.system_NonPrioritized,e.sortModifiedUnitStat))}}function FU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function LU(t,n){if(t&1&&(v(0,"div",29),de(1,FU,1,3,"modified-unit-stat",54,ty),Wn(3,"keyvalue"),g()),t&2){let e=x();p(),ue(bo(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function BU(t,n){if(t&1&&(v(0,"h3"),b(1),g()),t&2){let e=x().$index,i=x(2);p(),se(i.getInventorySubsectionLabel(e))}}function VU(t,n){if(t&1&&E(0,"inventory-item",56),t&2){let e=n.$implicit;k("item",e)}}function jU(t,n){if(t&1&&(v(0,"div",57)(1,"span"),b(2),g()()),t&2){let e=x().$implicit;p(),ct("opacity",.5),p(),De("Empty x",e.emptySlotCount)}}function UU(t,n){if(t&1&&(v(0,"div",55),C(1,BU,2,1,"h3"),de(2,VU,1,1,"inventory-item",56,Ze),C(4,jU,3,3,"div",57),g()),t&2){let e=n.$implicit,i=n.$index,r=x(2);p(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),p(),ue(e.items),p(2),w(e.emptySlotCount>0?4:-1)}}function HU(t,n){if(t&1&&de(0,UU,5,2,"div",55,Ze),t&2){let e,i=x();ue((e=i.unit().inventory)==null?null:e.subsections)}}function zU(t,n){if(t&1&&(v(0,"h3"),b(1),g()),t&2){let e=x().$index,i=x(3);p(),se(i.getSkillSubsectionLabel(e))}}function $U(t,n){if(t&1&&E(0,"unit-skill",60),t&2){let e=n.$implicit;k("skill",e)}}function GU(t,n){if(t&1&&(v(0,"div",55),C(1,zU,2,1,"h3"),de(2,$U,1,1,"unit-skill",60,Ze),g()),t&2){let e=n.$implicit,i=n.$index,r=x(3);p(),w(r.getSkillSubsectionLabel(i).length>0?1:-1),p(),ue(e.skills)}}function WU(t,n){if(t&1&&de(0,GU,4,1,"div",55,Ze),t&2){let e=x(2);ue(e.unit().skillSubsections)}}function qU(t,n){if(t&1){let e=rn();E(0,"mat-divider"),v(1,"div",58)(2,"div",59)(3,"button",8),q("click",function(){Dt(e);let r=x();return Et(r.toggleSkillsExpansion())}),E(4,"img",9),g(),v(5,"h2"),b(6),g()(),C(7,WU,2,0),g()}if(t&2){let e=x();p(3),k("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),p(),Mt(it(5,Hf,e.isSkillsInfoExpanded)),p(2),se(e.getSkillsLabel()),p(),w(e.isSkillsInfoExpanded?7:-1)}}var zf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}unit=fe.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Te],decls:52,vars:42,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src","ngClass"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(C(0,pU,2,1,"div",0),v(1,"div",1),E(2,"img",2),v(3,"hgroup",3)(4,"h1",4),b(5),g(),v(6,"p",5),C(7,hU,1,1),C(8,gU,1,1),g()(),C(9,vU,1,1,"img",6),g(),v(10,"div",7)(11,"button",8),q("click",function(){return i.toggleUnitInfoExpansion()}),E(12,"img",9),g(),C(13,_U,7,2,"div",10),v(14,"button",11),E(15,"img",12),g()(),C(16,DU,6,6,"div",13),v(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),b(21,"HP"),g(),v(22,"div",18)(23,"span",19),b(24),g(),v(25,"span",20),b(26),g()()(),E(27,"unit-hp-bar",21),g(),C(28,EU,5,1,"div",22),C(29,SU,4,1,"div",22),g(),C(30,MU,6,0,"div",23),C(31,kU,6,1,"div",24),C(32,AU,6,0,"div",25),v(33,"div",26)(34,"div",27)(35,"button",8),q("click",function(){return i.toggleStatExpansion()}),E(36,"img",9),g(),v(37,"h2"),b(38,"Stats"),g()(),v(39,"div",28),C(40,OU,4,3,"div",29),C(41,PU,4,3,"div",29),C(42,LU,4,3,"div",29),g()(),E(43,"mat-divider"),v(44,"div",30)(45,"div",31)(46,"button",8),q("click",function(){return i.toggleInventoryExpansion()}),E(47,"img",9),g(),v(48,"h2"),b(49),g()(),C(50,HU,2,0),g(),C(51,qU,8,7)),e&2){let r;w(i.unit().sprite.portraitURL?0:-1),p(2),k("src",i.unit().sprite.spriteURL,qe)("ngClass",it(32,fU,i.shouldFlipUnitSprite())),p(3),se(i.unit().name),p(2),w(i.unit().stats.level>0?7:-1),p(),w(i.unit().classes?8:-1),p(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),p(2),k("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),p(),Mt(it(34,Hf,i.isUnitInfoExpanded)),p(),w(i.unit().player?13:-1),p(3),w(i.isUnitInfoExpanded?16:-1),p(8),se(i.unit().stats.hp.current),p(2),De("/ ",i.unit().stats.hp.maximum),p(),k("percentage",i.unit().stats.hp.percentage),p(),w((i.unit().stats.experience??0)>0?28:-1),p(),w((i.unit().stats.heldCurrency??0)>0?29:-1),p(),w((i.unit().tags??Dn(36,pM)).length>0?30:-1),p(),w(i.unit().behavior?31:-1),p(),w((i.unit().statusConditions??Dn(37,pM)).length>0?32:-1),p(3),k("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),p(),Mt(it(38,Hf,i.isStatsInfoExpanded)),p(4),w(i.unit().stats.combat?40:-1),p(),w(i.unit().stats.system_NonPrioritized?41:-1),p(),w(i.unit().stats.general?42:-1),p(4),k("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),p(),Mt(it(40,Hf,i.isInventoryExpanded)),p(2),se(i.getInventoryLabel()),p(),w(i.isInventoryExpanded?50:-1),p(),w(i.unit().hasSkills?51:-1)}},dependencies:[Zc,Of,Nf,Pf,Ff,Lf,Bf,bi,jf,Uf,zi,$i],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var ZU=["unitAutocompleteInput"],YU=(t,n)=>n.name;function KU(t,n){if(t&1&&(v(0,"mat-option",5)(1,"div",7),E(2,"img",8),v(3,"div"),b(4),g()()()),t&2){let e=n.$implicit;k("value",e),p(2),k("src",e.sprite.spriteURL,qe),p(2),se(e.name)}}function QU(t,n){if(t&1&&E(0,"unit-sidenav-display",6),t&2){let e=x();k("unit",e.selectedUnit.value)}}var $f=class t{constructor(n){this.dataService=n;this.dataService=u(Ce),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new ob(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ye(ZU,5),e&2){let r;U(r=H())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(v(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),q("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),v(5,"mat-autocomplete",4,1),de(7,KU,5,3,"mat-option",5,YU),g()()(),C(9,QU,1,1,"unit-sidenav-display",6),g()),e&2){let r=on(6);p(3),k("formControl",i.selectedUnit)("matAutocomplete",r),p(2),k("displayWith",i.formatAutocompleteDisplayValue),p(2),ue(i.filteredUnits),p(2),w(i.selectedUnit.value?9:-1)}},dependencies:[lI,aI,Km,JS,eI,al,cl,Fo,of,rf,fM,mM,cs,Jb,dI,ab,zf],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var Gf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"map-tiles-view works!"),ve())},encapsulation:2})};var XU=["*"];var JU=["unscopedContent"],eH=["text"],tH=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],nH=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var iH=new D("ListOption"),rH=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),oH=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),iy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),hM=(()=>{class t{_listOption=u(iH,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),aH=(()=>{class t extends hM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ie]})}return t})(),ry=(()=>{class t extends hM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ie]})}return t})(),sH=new D("MAT_LIST_CONFIG"),ny=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=lt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(lt(e))}_disabled=L(!1);_defaultOptions=u(sH,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:1,hostBindings:function(i,r){i&2&&xe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),cH=(()=>{class t{_elementRef=u(V);_ngZone=u(F);_listBase=u(ny,{optional:!0});_platform=u(Se);_hostElement;_isButtonElement;_noopAnimations=Qe();_avatars;_icons;set lines(e){this._explicitLines=hi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=lt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(lt(e))}_disabled=L(!1);_subscriptions=new _e;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(bt).load(gi);let e=u(Ga,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ro(this,this._ngZone,this._hostElement,this._platform,u(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Gt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,contentQueries:function(i,r,o){if(i&1&&Ft(o,aH,4)(o,ry,4),i&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(xe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var gM=(()=>{class t extends ny{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Oe([{provide:ny,useExisting:t}]),Ie],ngContentSelectors:XU,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var vM=(()=>{class t extends cH{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=lt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Ft(o,oH,5)(o,rH,5)(o,iy,5),i&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ye(JU,5)(eH,5),i&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Ie],ngContentSelectors:nH,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(ke(tH),z(0),v(1,"span",1),z(2,1),z(3,2),v(4,"span",2,0),q("cdkObserveContent",function(){return r._updateItemLines(!0)}),z(6,3),g()(),z(7,4),z(8,5),E(9,"div",3))},dependencies:[bm],encapsulation:2,changeDetection:0})}return t})();var _M=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[ym,Wa,Rf,Ge,NS]})}return t})();function bM(t){return Error(`Unable to find icon with the name "${t}"`)}function dH(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function yM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function xM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Qi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},wM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Qi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(wt.HTML,r);if(!a)throw xM(r);let s=Mo(a);return this._addSvgIconConfig(e,i,new Qi("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Qi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(wt.HTML,i);if(!o)throw xM(i);let a=Mo(o);return this._addSvgIconSetConfig(e,new Qi("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(wt.RESOURCE_URL,e);if(!i)throw yM(e);let r=this._cachedIconsByUrl.get(i);return r?K(Wf(r)):this._loadSvgIconFromConfig(new Qi(e,null)).pipe(vt(o=>this._cachedIconsByUrl.set(i,o)),te(o=>Wf(o)))}getNamedSvgIcon(e,i=""){let r=CM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Ds(bM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?K(Wf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(te(i=>Wf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return K(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Kr(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(wt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),K(null)})));return Is(o).pipe(te(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw bM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(vt(i=>e.svgText=i),te(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?K(null):this._fetchIcon(e).pipe(vt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Mo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Mo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw dH();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(wt.RESOURCE_URL,i);if(!a)throw yM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(te(l=>Mo(l)),Qr(()=>this._inProgressUrlFetches.delete(a)),Ms());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(CM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return uH(o)?new Qi(o.url,null,o.options):new Qi(o,null)}}static \u0275fac=function(i){return new(i||t)(W(Wi,8),W(wc),W(ee,8),W(qt))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Wf(t){return t.cloneNode(!0)}function CM(t,n){return t+":"+n}function uH(t){return!!(t.url&&t.options)}var mH=["*"],fH=new D("MAT_ICON_DEFAULT_OPTIONS"),pH=new D("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(ee),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),DM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],hH=DM.map(t=>`[${t}]`).join(", "),gH=/^url\(['"]?#(.*?)['"]?\)$/,EM=(()=>{class t{_elementRef=u(V);_iconRegistry=u(wM);_location=u(pH);_errorHandler=u(qt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=_e.EMPTY;constructor(){let e=u(new Hi("aria-hidden"),{optional:!0}),i=u(fH,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(hH),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)DM.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(gH):null;if(l){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ht(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Mt(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",re],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:mH,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})();var vH=()=>["../.."],_H=t=>[t,"convoy"],bH=t=>[t,"shop"],yH=t=>[t,"map","analyze"];function xH(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),b(3,"Google Sheets"),g(),v(4,"div",5)(5,"mat-icon"),b(6,"open_in_new"),g()()()),t&2){let e=x();k("href",e.getGoogleSheetUrl(),qe)}}function CH(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),b(3,"Chapter Post"),g(),v(4,"div",5)(5,"mat-icon"),b(6,"open_in_new"),g()()()),t&2){let e=x();k("href",e.chapterPostUrl(),qe)}}function wH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),b(3,"Convoy"),g()()),t&2){let e=x();k("routerLink",it(1,_H,`/${e.teamName}`))}}function DH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",6),v(2,"span",4),b(3,"Shop"),g()()),t&2){let e=x();k("routerLink",it(1,bH,`/${e.teamName}`))}}function EH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),b(3,"Map Analyzer Tool"),g()()),t&2){let e=x();k("routerLink",it(1,yH,`/${e.teamName}`))}}var qf=class t{constructor(n){this.activatedRoute=n;this.activatedRoute=u(Lt)}googleWorksheetID=fe(void 0);chapterPostUrl=fe(void 0);showConvoyLink=fe(!1);showShopLink=fe(!1);showMapAnalyzerLink=fe(!1);teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(B(Lt))};static \u0275cmp=M({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:11,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list"),C(2,xH,7,1,"a",1),C(3,CH,7,1,"a",1),C(4,wH,4,3,"a",2),C(5,DH,4,3,"a",2),C(6,EH,4,3,"a",2),v(7,"a",2),E(8,"img",3),v(9,"span",4),b(10,"Home"),g()()()()),e&2&&(p(2),w((i.googleWorksheetID()??"").length>0?2:-1),p(),w((i.chapterPostUrl()??"").length>0?3:-1),p(),w(i.showConvoyLink()?4:-1),p(),w(i.showShopLink()?5:-1),p(),w(i.showMapAnalyzerLink()?6:-1),p(),k("routerLink",Dn(6,vH)))},dependencies:[_M,gM,vM,ry,iy,Va,EM],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var SM={extension:{type:Q.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-QV4ZX6T2.js")}};var IM={extension:{type:Q.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-4KDMYADP.js")}};var Zf;function MM(t){return Zf!==void 0||(Zf=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??wl.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Fe.get().getWebGLRenderingContext())return!1;let i=Fe.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Zf}var Yf;async function kM(t={}){return Yf!==void 0||(Yf=await(async()=>{let n=Fe.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Yf}var TM=["webgl","webgpu","canvas"];async function AM(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),TM.forEach(o=>{o!==t.preference&&n.push(o)})):n=TM.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await kM()){let{WebGPURenderer:s}=await import("./chunk-B3WNDZJE.js");e=s,i=y(y({},t),t.webgpu);break}else if(a==="webgl"&&MM(t.failIfMajorPerformanceCaveat??wl.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-RH4AK7FE.js");e=s,i=y(y({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-FCIWACD2.js");e=s,i=y(y({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var gl=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};gl.extension=Q.Application;var vl=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,yl.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Ci.shared:new Ci,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};vl.extension=Q.Application;Bt.add(gl);Bt.add(vl);var SH=(()=>{let t=class oy{constructor(...e){this.stage=new Jn,e[0]!==void 0&&bp(_p,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=y({},e),this.stage||(this.stage=new Jn),this.renderer=await AM(e),oy._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return bp(_p,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=oy._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),Kf=SH;Bt.handleByList(Q.Application,Kf._plugins);Bt.add(Ty);var Qf={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let f=n[m].match(/^[a-z]+/gm)[0],h=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),_={};for(let T in h){let I=h[T].split("="),O=I[0],he=I[1].replace(/"/gm,""),Ne=parseFloat(he),Re=isNaN(Ne)?he:Ne;_[O]=Re}e[f].push(_)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let c={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let l=e.char;for(let m=0;m<l.length;m++){let f=l[m],h=parseInt(f.id,10),_=f.letter??f.char??String.fromCharCode(h);_==="space"&&(_=" "),c[h]=_,i.chars[_]={id:h,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let f=parseInt(d[m].first,10),h=parseInt(d[m].second,10),_=parseInt(d[m].amount,10);i.chars[c[h]]&&(i.chars[c[h]].kerning[c[f]]=_)}return i}};var ay={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let l=0;l<o.length;l++)n.pages.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});let c={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let l=0;l<a.length;l++){let d=a[l],m=parseInt(d.getAttribute("id"),10),f=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);f==="space"&&(f=" "),c[m]=f,n.chars[f]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let l=0;l<s.length;l++){let d=parseInt(s[l].getAttribute("first"),10),m=parseInt(s[l].getAttribute("second"),10),f=parseInt(s[l].getAttribute("amount"),10);n.chars[c[m]]&&(n.chars[c[m]].kerning[c[d]]=f)}return n}};var sy={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?ay.test(Fe.get().parseXML(t)):!1},parse(t){return ay.parse(Fe.get().parseXML(t))}};var IH=[".xml",".fnt"],RM={extension:{type:Q.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},OM={extension:{type:Q.LoadParser,priority:vn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return IH.includes(tn.extname(t).toLowerCase())},async testParse(t){return Qf.test(t)||sy.test(t)},async parse(t,n,e){let i=Qf.test(t)?Qf.parse(t):sy.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let f=0;f<o.length;++f){let h=o[f].file,_=tn.join(tn.dirname(r),h);_=Cy(_,r),a.push({src:_,data:s})}let[c,{BitmapFont:l}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(f=>c[f.src]);return new l({data:i,textures:d},r)},async load(t,n){return await(await Fe.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var Xf=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var NM={extension:{type:Q.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof Xi),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function Jf(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var PM={extension:{type:Q.DetectionParser,priority:1},test:async()=>Jf("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var FM=["png","jpg","jpeg"],LM={extension:{type:Q.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...FM],remove:async t=>t.filter(n=>!FM.includes(n))};var MH="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Mr(t){return MH?!1:document.createElement("video").canPlayType(t)!==""}var BM={extension:{type:Q.DetectionParser,priority:0},test:async()=>Mr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var VM={extension:{type:Q.DetectionParser,priority:0},test:async()=>Mr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var jM={extension:{type:Q.DetectionParser,priority:0},test:async()=>Mr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var UM={extension:{type:Q.DetectionParser,priority:0},test:async()=>Jf("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var kH=(()=>{let t=class ep{constructor(){this.loadOptions=y({},ep.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&cn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||cn(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let c=this.parsers[s];if(c.load&&c.test?.(e,i,this)){a=c;break}}if(!a)return cn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let c=this.parsers[s];c.parse&&c.parse&&await c.testParse?.(o,i,this)&&(o=await c.parse(o,i,this)||o,r.parser=c)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?G(y(y({},ep.defaultOptions),this.loadOptions),{onProgress:i}):y(y(y({},ep.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:c,retryDelay:l}=r,d=0,m={},f=xl(e),h=Nr(e,I=>({alias:[I],src:I,data:{}})),_=h.reduce((I,O)=>I+(O.progressSize||1),0),T=h.map(async I=>{let O=tn.toAbsolute(I.src);m[I.src]||(await this._loadAssetWithRetry(O,I,{onProgress:o,onError:a,strategy:s,retryCount:c,retryDelay:l},m),d+=I.progressSize||1,o&&o(d/_))});return await Promise.all(T),f?m[h[0].src]:m}async unload(e){let r=Nr(e,o=>({alias:[o],src:o})).map(async o=>{let a=tn.toAbsolute(o.src),s=this.promiseCache[a];if(s){let c=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(c,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?cn("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&cn(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:c,retryCount:l,retryDelay:d}=r,m=f=>new Promise(h=>setTimeout(h,f));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(f){delete this.promiseCache[e],delete o[i.src],a++;let h=c!=="retry"||a>l;if(c==="retry"&&!h){s&&s(f,i),await m(d);continue}if(c==="skip"){s&&s(f,i);return}s&&s(f,i);let _=new Error(`[Loader.load] Failed to load ${e}.
${f}`);throw f instanceof Error&&f.stack&&(_.stack=f.stack),_}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),HM=kH;function kn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function Tn(t,n){let e=t.split("?")[0],i=tn.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var TH=".json",AH="application/json",zM={extension:{type:Q.LoadParser,priority:vn.Low},name:"loadJson",id:"json",test(t){return kn(t,AH)||Tn(t,TH)},async load(t){return await(await Fe.get().fetch(t)).json()}};var RH=".txt",OH="text/plain",$M={name:"loadTxt",id:"text",extension:{type:Q.LoadParser,priority:vn.Low,name:"loadTxt"},test(t){return kn(t,OH)||Tn(t,RH)},async load(t){return await(await Fe.get().fetch(t)).text()}};var NH=["normal","bold","100","200","300","400","500","600","700","800","900"],PH=[".ttf",".otf",".woff",".woff2"],FH=["font/ttf","font/otf","font/woff","font/woff2"],LH=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function BH(t){let n=tn.extname(t),r=tn.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(LH)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var VH=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function jH(t){return VH.test(t)?t:encodeURI(t)}var GM={extension:{type:Q.LoadParser,priority:vn.Low},name:"loadWebFont",id:"web-font",test(t){return kn(t,FH)||Tn(t,PH)},async load(t,n){let e=Fe.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??BH(t),o=n.data?.weights?.filter(s=>NH.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let c=o[s],l=new FontFace(r,`url('${jH(t)}')`,G(y({},a),{weight:c}));await l.load(),e.add(l),i.push(l)}return $t.has(`${r}-and-url`)?$t.get(`${r}-and-url`).entries.push({url:t,faces:i}):$t.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return cn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=$t.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{Fe.get().getFontFaceSet().delete(o)}),i.entries.length===0&&$t.remove(`${e}-and-url`)}};function us(t,n=1){let e=Ji.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function ms(t,n,e){t.label=e,t._sourceOrigin=e;let i=new Xi({source:t,label:e}),r=()=>{delete n.promiseCache[e],$t.has(e)&&$t.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(cn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(cn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var UH=".svg",HH="image/svg+xml",WM={extension:{type:Q.LoadParser,priority:vn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return kn(t,HH)||Tn(t,UH)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?$H(t):zH(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function zH(t,n,e,i){let r=await Fe.get().fetch(t),o=Fe.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,c=n.data?.resolution||us(t),l=Math.ceil(a*c),d=Math.ceil(s*c),m=Fe.get().createCanvas(l,d),f=m.getContext("2d");f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(o,0,0,a*c,s*c);let I=n.data??{},{parseAsGraphicsContext:h}=I,_=Or(I,["parseAsGraphicsContext"]),T=new Cl(y({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:c},_));return ms(T,e,t)}async function $H(t){let e=await(await Fe.get().fetch(t)).text(),i=new Ay;return i.svg(e),i}var GH=`(function () {
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
`,fs=null,cy=(()=>{class t{constructor(){fs||(fs=URL.createObjectURL(new Blob([GH],{type:"application/javascript"}))),this.worker=new Worker(fs)}}return t.revokeObjectURL=function(){fs&&(URL.revokeObjectURL(fs),fs=null)},t})();var WH=`(function () {
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
`,ps=null,qM=(()=>{class t{constructor(){ps||(ps=URL.createObjectURL(new Blob([WH],{type:"application/javascript"}))),this.worker=new Worker(ps)}}return t.revokeObjectURL=function(){ps&&(URL.revokeObjectURL(ps),ps=null)},t})();var ZM=0,ly,dy=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new cy;e.addEventListener("message",i=>{e.terminate(),cy.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ly===void 0&&(ly=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<ly&&(this._createdWorkers++,n=new qM().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[ZM]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:ZM++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},uy=new dy;var qH=[".jpeg",".jpg",".png",".webp",".avif"],ZH=["image/jpeg","image/png","image/webp","image/avif"];async function YH(t,n){let e=await Fe.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var tp={name:"loadTextures",id:"texture",extension:{type:Q.LoadParser,priority:vn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return kn(t,ZH)||Tn(t,qH)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await uy.isImageBitmapSupported()?i=await uy.loadImageBitmap(t,n):i=await YH(t,n):i=await new Promise((o,a)=>{i=Fe.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new Cl(y({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||us(t)},n.data));return ms(r,e,t)},unload(t){t.destroy(!0)}};var KH=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],my,fy;function QH(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=JH(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function XH(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function JH(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function ez(){let t=[],n=[];for(let e of KH){let i=vs.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;Mr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var YM={name:"loadVideo",id:"video",extension:{type:Q.LoadParser,name:"loadVideo"},test(t){if(!my||!fy){let{validVideoExtensions:i,validVideoMime:r}=ez();my=i,fy=r}let n=kn(t,fy),e=Tn(t,my);return n||e},async load(t,n,e){let i=y(G(y({},vs.defaultOptions),{resolution:n.data?.resolution||us(t),alphaMode:n.data?.alphaMode||await Dy()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(c=>{let l=o[c];l!==void 0&&r.setAttribute(c,l)}),i.muted===!0&&(r.muted=!0),QH(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=vs.MIME_TYPES[c]||`video/${c}`}return a.src=t,s&&(a.type=s),new Promise((c,l)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let h=new vs(G(y({},i),{resource:r}));f(),n.data.preload&&await XH(r),c(ms(h,e,t))}function m(h){f(),l(h)}function f(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var np={extension:{type:Q.ResolveParser,name:"resolveTexture"},test:tp.test,parse:t=>({resolution:parseFloat(Ji.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var KM={extension:{type:Q.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Ji.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:np.parse};var ip=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ji,this.loader=new HM,this.cache=$t,this._backgroundLoader=new Xf(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){cn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=y(y({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=xl(n),r=Nr(n).map(s=>{if(typeof s!="string"){let c=this.resolver.getAlias(s);return c.some(l=>!this.resolver.hasKey(l))&&this.add(s),Array.isArray(c)?c[0]:c}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,c=[],l=()=>{e?.(c.reduce((m,f)=>m+f,0)/s)},d=a.map((m,f)=>{let h=r[m],_=Object.values(h),I=[...new Set(_.flat())].reduce((O,he)=>O+(he.progressSize||1),0);return c.push(0),s+=I,this._mapLoadToResolve(h,O=>{c[f]=O*I,l()}).then(O=>{o[m]=O})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return $t.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=$t.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],c=[a.src];a.alias&&c.push(...a.alias),c.forEach(l=>{o[l]=s}),$t.set(c,s)}),o}async unload(n){this._initialized||await this.init();let e=Nr(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=Nr(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{$t.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},An=new ip;Bt.handleByList(Q.LoadParser,An.loader.parsers).handleByList(Q.ResolveParser,An.resolver.parsers).handleByList(Q.CacheParser,An.cache.parsers).handleByList(Q.DetectionParser,An.detections);Bt.add(NM,LM,PM,UM,BM,VM,jM,zM,$M,GM,WM,tp,YM,OM,RM,np,KM);var QM={loader:Q.LoadParser,resolver:Q.ResolveParser,cache:Q.CacheParser,detection:Q.DetectionParser};Bt.handle(Q.Asset,t=>{let n=t.ref;Object.entries(QM).filter(([e])=>!!n[e]).forEach(([e,i])=>Bt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(QM).filter(e=>!!n[e]).forEach(e=>Bt.remove(n[e]))});var XM=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`;var py=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`;var _l=class extends My{constructor(n={}){let e=new Iy({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=Sy.from({vertex:{source:py,entryPoint:"mainVertex"},fragment:{source:py,entryPoint:"mainFragment"}}),r=Ey.from({vertex:ky,fragment:XM,name:"color-matrix-filter"});super(G(y({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=vp.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),c=i+(1-i)*a,l=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,f=i+a*(1-i),h=a*(1-i)-s*r,_=a*(1-i)-s*r,T=a*(1-i)+s*r,I=i+a*(1-i),O=[c,l,d,0,0,m,f,h,0,0,_,T,I,0,0,0,0,0,1,0];this._loadMatrix(O,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=vp.shared,[s,c,l]=a.setValue(i).toArray(),[d,m,f]=a.setValue(r).toArray(),h=[.3,.59,.11,0,0,s,c,l,n,0,d,m,f,e,0,s-d,c-m,l-f,0,0];this._loadMatrix(h,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};Bt.add(SM,IM);var lp=dk(rk(),1);var hs=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Ne=>{let Re=null;for(let xt of Ne.frames)Re=xt.gce??Re,"image"in xt&&!("gce"in xt)&&(xt.gce=Re)},r=(0,lp.parseGIF)(n);i(r);let o=(0,lp.decompressFrames)(r,!0),a=[],s=r.lsd.width,c=r.lsd.height,l=Fe.get().createCanvas(s,c),d=l.getContext("2d",{willReadFrequently:!0}),m=Fe.get().createCanvas(),f=m.getContext("2d"),h=0,_=null,he=e??{},{fps:T=30}=he,I=Or(he,["fps"]),O=1e3/T;for(let Ne=0;Ne<o.length;Ne++){let{disposalType:Re=2,delay:xt=O,patch:en,dims:{width:sn,height:Rn,left:On,top:Uo}}=o[Ne];m.width=sn,m.height=Rn,f.clearRect(0,0,sn,Rn);let Rr=f.createImageData(sn,Rn);Rr.data.set(en),f.putImageData(Rr,0,0),Re===3&&(_=d.getImageData(0,0,s,c)),d.drawImage(m,On,Uo);let gp=d.getImageData(0,0,s,c);Re===2?d.clearRect(0,0,s,c):Re===3&&d.putImageData(_,0,0);let xy=Fe.get().createCanvas(gp.width,gp.height);xy.getContext("2d").putImageData(gp,0,0),a.push({start:h,end:h+xt,texture:new Xi({source:new wy(y({resource:xy},I))})}),h+=xt}return l.width=l.height=0,m.width=m.height=0,new t(a)}};var ok={extension:Q.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>tn.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await Fe.get().fetch(t)).arrayBuffer();return hs.from(i,n?.data)},unload:async t=>{t.destroy()}}};var Tz=(()=>{let t=class vy extends Pr{constructor(...e){let i=e[0]instanceof hs?{source:e[0]}:e[0],_=Object.assign({},vy.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:c,autoUpdate:l,onComplete:d,onFrameChange:m,onLoop:f}=_,h=Or(_,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(y({texture:Xi.EMPTY},h)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:c,autoUpdate:l,onComplete:d,onFrameChange:m,onLoop:f}),this.currentFrame=0,c&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Ci.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Ci.shared.add(this.update,this,yl.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Ci.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Ci.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Ci.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new vy({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),_y=Tz;Bt.add(ok);function Az(t,n){if(t&1){let e=rn();v(0,"div",1)(1,"button",2),q("click",function(){Dt(e);let r=x();return Et(r.action())}),b(2),g()()}if(t&2){let e=x();p(2),De(" ",e.data.action," ")}}var Rz=["label"];function Oz(t,n){}var Nz=Math.pow(2,31)-1,bl=class{_overlayRef;instance;containerInstance;_afterDismissed=new R;_afterOpened=new R;_onAction=new R;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Nz))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ak=new D("MatSnackBarData"),gs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Pz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),Fz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),Lz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),Bz=(()=>{class t{snackBarRef=u(bl);data=u(ak);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(v(0,"div",0),b(1),g(),C(2,Az,3,1,"div",1)),i&2&&(p(),De(" ",r.data.message,`
`),p(),w(r.hasAction?2:-1))},dependencies:[No,Pz,Fz,Lz],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),by="_mat-snack-bar-enter",yy="_mat-snack-bar-exit",Vz=(()=>{class t extends Ya{_ngZone=u(F);_elementRef=u(V);_changeDetectorRef=u(Ke);_platform=u(Se);_animationsDisabled=Qe();snackBarConfig=u(gs);_document=u(ee);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(X);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new R;_onExit=new R;_onEnter=new R;_animationState="void";_live;_label;_role;_liveElementId=u(mt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===yy?this._completeExit():e===by&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?st(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(by)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(by)},200)))}exit(){return this._destroyed?K(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?st(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(yy)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(yy),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Ye(Ka,7)(Rz,7),i&2){let o;U(o=H())&&(r._portalOutlet=o.first),U(o=H())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&q("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&j("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Ie],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(v(0,"div",1)(1,"div",2,0)(3,"div",3),It(4,Oz,0,0,"ng-template",4),g(),E(5,"div"),g()()),i&2&&(p(5),xe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Ka],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return t})(),jz=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new gs}),sk=(()=>{class t{_live=u(w_);_injector=u(X);_breakpointObserver=u(To);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(jz);_animationsDisabled=Qe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Bz;snackBarContainerComponent=Vz;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=y(y({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=X.create({parent:r||this._injector,providers:[{provide:gs,useValue:i}]}),a=new Za(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=y(y(y({},new gs),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new bl(a,o);if(e instanceof St){let c=new Kn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),l=new Za(e,void 0,c),d=a.attachComponentPortal(l);s.instance=d.instance}return this._breakpointObserver.observe(Im.HandsetPortrait).pipe(Le(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Ir;i.direction=e.direction;let r=Tf(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,ls(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return X.create({parent:r||this._injector,providers:[{provide:bl,useValue:i},{provide:ak,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.snackBar=u(sk),this.constants=this.teamDataService.getMapConstants(),this.pixiApp=new Kf,this.snackBarMessageQueue=[],this.grayscaleFilter=new _l,this.grayscaleFilter.blackAndWhite(!0)}segment=fe.required();snackBar;snackBarMessageQueue;currentSnackBar;constants;pixiApp;mapContainer;grayscaleFilter;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}await An.setPreferences({crossOrigin:"*"}),An.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),An.addBundle("unit-statuses",[{alias:"status_heart",src:"img/status_heart.png"}]),await An.loadBundle(["unit-numbers","unit-statuses"]),await this.initializePixiApp(n),await this.AddMapParentContainer(),await this.AddMapElements()}queueImageLoadFailedSnackBar(n){var e=`Image "${n}" failed to load`;this.snackBarMessageQueue.push(e),this.currentSnackBar===void 0&&this.showNextSnackBarInQueue()}showNextSnackBarInQueue(){this.currentSnackBar=void 0;var n=this.snackBarMessageQueue.shift()??"";n!==""&&this.showSnackBar(n,5e3)}showSnackBar(n,e){this.currentSnackBar=this.snackBar.open(n,void 0,{duration:e,horizontalPosition:"right",verticalPosition:"top"}),this.currentSnackBar.afterDismissed().subscribe(()=>{this.showNextSnackBarInQueue()})}async initializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0,height:this.segment().heightInPixels,width:this.segment().widthInPixels}),n.appendChild(this.pixiApp.canvas)}async AddMapParentContainer(){this.mapContainer=new Jn,this.mapContainer.setSize(this.segment().widthInPixels,this.segment().heightInPixels),this.pixiApp.stage.addChild(this.mapContainer);let n=`segment ${this.segment().title}`,e=await this.getExternalSprite(n,this.segment().imageURL);e!==void 0&&this.mapContainer.addChild(e)}async AddMapElements(){this.segment().tiles.forEach(n=>{n.forEach(e=>{e.unitData.isUnitAnchor&&this.CreateUnitContainer(e.unitData.occupyingUnitName,e.unitData.pairedUnitName,e.coordinate)})})}async CreateUnitContainer(n,e,i){let r=this.teamDataService.getUnitByName(n);if(r===void 0){console.log(`Failed to locate unit name ${n}.`);return}let o=this.constants?.tileSize??16,a=o*r.location.unitSize,s=new Jn;s.label=n,s.interactive=!1,s.interactiveChildren=!1;let c,l=r.sprite.spriteURL,d=`unit ${r.normalizedName}`;l.includes(".gif")?c=await this.getExternalGif(d,l):c=await this.getExternalSprite(d,l),c!==void 0&&(s.addChild(c),c.anchor.set(.5),c.x=a/2,c.y=a-c.height/2-2,this.teamDataService.getAffiliationByName(r.affiliation)?.flipUnitSprites&&(c.scale.x*=-1),(r.sprite.hasMoved??!1)&&(c.filters=(c.filters??[]).concat([this.grayscaleFilter])));let m=this.GetUnitHpBarGradient(r.stats.hp.percentage),f=new xp().rect(2,a-4,a-3,3).fill(m).stroke({width:1,color:0,pixelLine:!0});s.addChild(f);let h=r.unitNumber??"";if(h.length>0){let I=this.GetUnitNumberContainer(h);s.addChild(I),I.x=a-I.width-7,I.y=a-I.height-5}let _=r.statusConditions??[];if(_.length>0){let I=await this.GetUnitStatusConditionContainer(_);s.addChild(I)}let T=r.tags??[];if(T.length>0){let I=await this.GetUnitTagsContainer(T);s.addChild(I),I.x=s.width-12}this.mapContainer?.addChild(s),s.zIndex=i.y,s.position={x:o*(i.x-1+(this.constants?.hasHeaderTopLeft?1:0)),y:o*(i.y-1+(this.constants?.hasHeaderTopLeft?1:0))}}GetUnitHpBarGradient(n){var e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new yp({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new Jn;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=Pr.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let c=s?.spriteURL??"";if(c.length<1){i=!0;return}let l,d=`status ${s.name}`;c.includes(".gif")?l=await this.getExternalGif(d,c):l=await this.getExternalSprite(d,c),l!==void 0&&(l.height=Math.min(l.height,12),l.width=Math.min(l.width,12),e.push(l))})),i){let a=Pr.from("status_heart");e.unshift(a)}let r=new Jn;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,2e3,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",c=a?.showOnUnit??!1;if(s.length<1||!c)return;let l,d=`tag ${o}`;s.includes(".gif")?l=await this.getExternalGif(d,s):l=await this.getExternalSprite(d,s),l!==void 0&&(l.height=Math.min(l.height,12),l.width=Math.min(l.width,12),e.push(l))}));let i=new Jn;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,2e3,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e).catch(r=>{this.queueImageLoadFailedSnackBar(e)});return new Pr(i)}async loadExternalTextureAsset(n,e){return An.load({alias:n,src:e,parser:"loadTextures"})}async getExternalGif(n,e){let i=await this.loadExternalGifAsset(n,e).catch(r=>{this.queueImageLoadFailedSnackBar(e)});if(i!==void 0)return new _y(i)}async loadExternalGifAsset(n,e){return An.load({alias:n,src:e})}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=M({type:t,selectors:[["map-segment"]],inputs:{segment:[1,"segment"]},decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Me(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})};var Uz=(t,n)=>n.title;function Hz(t,n){t&1&&b(0," U ")}function zz(t,n){t&1&&E(0,"img",9)}function $z(t,n){t&1&&E(0,"img",10)}function Gz(t,n){t&1&&E(0,"img",11)}function Wz(t,n){t&1&&E(0,"img",12)}function qz(t,n){if(t&1){let e=rn();v(0,"button",13),q("click",function(){let r=Dt(e).$implicit,o=x();return Et(o.setCurrentSegment(r))}),b(1),g()}if(t&2){let e=n.$implicit;p(),se(e.title)}}function Zz(t,n){if(t&1&&E(0,"map-segment",8),t&2){let e=x();k("segment",e.currentSegment)}}var up=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Lt),this.breakpointService=u(vi),this.themeService=u(_i),this.teamDataService=u(Ce),this.loadDataForTeam()}currentSegment;async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment=n}static \u0275fac=function(e){return new(e||t)(B(Lt),B(vi),B(_i),B(Ce))};static \u0275cmp=M({type:t,selectors:[["map-view"]],decls:27,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],["id","sidebarTabs","mat-stretch-tabs","","disablePagination",""],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentButtonRow"],["matButton","filled"],[3,"segment"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"],["matButton","filled",3,"click"]],template:function(e,i){if(e&1){let r=rn();v(0,"button",1),q("click",function(){Dt(r);let a=on(4);return Et(a.toggle())}),b(1,">"),g(),v(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),It(7,Hz,1,0,"ng-template",4),E(8,"map-units-sidenav"),g(),v(9,"mat-tab"),It(10,zz,1,0,"ng-template",4),E(11,"map-tiles-sidenav"),g(),v(12,"mat-tab"),It(13,$z,1,0,"ng-template",4),b(14," Image download "),g(),v(15,"mat-tab"),It(16,Gz,1,0,"ng-template",4),E(17,"links-sidenav",5),g(),v(18,"mat-tab"),It(19,Wz,1,0,"ng-template",4),E(20,"map-dice-roller-sidenav"),g()()(),v(21,"mat-sidenav-content")(22,"div",6),de(23,qz,2,1,"button",7,Uz),g(),E(25,"mat-divider"),C(26,Zz,1,1,"map-segment",8),g()()}if(e&2){let r;p(3),k("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),p(14),k("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),p(6),ue((r=i.teamDataService.mapData().map)==null?null:r.segments),p(3),w(i.currentSegment!==void 0?26:-1)}},dependencies:[j_,ES,Nm,Q_,OS,K_,xS,$f,Gf,yf,qf,dp,yS,bi],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: min(100vw - 58px, 450px);anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{height:100vh;overflow:hidden;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}#sidebarTabs[_ngcontent-%COMP%]{height:100vh}#sidebarTabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab{min-width:48px;padding:0}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}']})};var mp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"map-analysis-view works!"),ve())},encapsulation:2})};var fp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"convoy-view works!"),ve())},encapsulation:2})};var pp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),b(1,"shop-view works!"),ve())},encapsulation:2})};var ck=[{path:"",component:Rm,title:"Reddit Emblem Maps"},{path:":teamName/map",component:up,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:mp,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:fp,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:pp,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var lk={providers:[Wh(),g_(ck)]};var hp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&E(0,"router-outlet")},dependencies:[Bc],encapsulation:2})};Vv(hp,lk).catch(t=>console.error(t));
